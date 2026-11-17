import { getRefreshToken, updateJwtTokens } from "./utils";

interface XhrClientOptions {
  maxRetries?: number;
  baseDelay?: number;
  timeout?: number;
  shouldRetry?: (status: number) => boolean;
  onRetry?: (
    attempt: number,
    maxRetries: number,
    delay: number,
    status?: number,
  ) => void;
}

const AUTH_PATHS = ["/", "/default", "/auth/"];

let isRefreshing = false;
let pendingQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}> = [];

const BASE_URL = "http://localhost/api/v1";

function isAuthPage(): boolean {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname;
  return AUTH_PATHS.some((p) =>
    p === "/" ? path === "/" : path.startsWith(p),
  );
}

function processQueue(error: unknown, token: string | null) {
  pendingQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token!)));
  pendingQueue = [];
}

function doRefresh(): Promise<string> {
  return new Promise((resolve, reject) => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      reject("No refresh token");
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}/auth/refresh`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.timeout = 15000;

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const res = JSON.parse(xhr.responseText);
          if (res.jwt && res.refreshToken) {
            updateJwtTokens(res.jwt, res.refreshToken);
            resolve(res.jwt);
          } else {
            reject("Invalid refresh response");
          }
        } catch {
          reject("Failed to parse refresh response");
        }
      } else {
        reject("Refresh failed: " + xhr.status);
      }
    };

    xhr.onerror = () => reject("Refresh network error");
    xhr.ontimeout = () => reject("Refresh timeout");
    xhr.send(JSON.stringify({ refreshToken }));
  });
}

function executeOnce<T>(
  api_url: string,
  method: string,
  headers: Record<string, string>,
  body: unknown,
  maxRetries: number,
  baseDelay: number,
  timeout: number,
  shouldRetry: (s: number) => boolean,
  onRetry: (
    attempt: number,
    max: number,
    delay: number,
    status?: number,
  ) => void,
  isRetryAfterRefresh: boolean,
  retryCount: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, api_url);
    const isFormData = body instanceof FormData;

    Object.keys(headers).forEach((key) => {
      if (isFormData && key.toLowerCase() === "content-type") return;
      xhr.setRequestHeader(key, headers[key]);
    });

    xhr.timeout = timeout;

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 503 && !isAuthPage()) {
        window.location.href = "/auth/logout";
        reject("Service unavailable.");
        return;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        if (!xhr.responseText || xhr.responseText.trim() === "") {
          resolve({} as T);
          return;
        }
        try {
          resolve(JSON.parse(xhr.responseText) as T);
        } catch {
          resolve(xhr.responseText as unknown as T);
        }
        return;
      }

      if (xhr.status === 401 && !isAuthPage() && !isRetryAfterRefresh) {
        const storedRefresh = getRefreshToken();
        if (!storedRefresh) {
          window.location.href = "/auth/logout";
          reject("Session expired.");
          return;
        }

        if (isRefreshing) {
          pendingQueue.push({
            resolve: (newToken) => {
              const refreshedHeaders = {
                ...headers,
                Authorization: `Bearer ${newToken}`,
              };
              executeOnce<T>(
                api_url,
                method,
                refreshedHeaders,
                body,
                maxRetries,
                baseDelay,
                timeout,
                shouldRetry,
                onRetry,
                true,
                0,
              )
                .then(resolve)
                .catch(reject);
            },
            reject,
          });
          return;
        }

        isRefreshing = true;
        doRefresh()
          .then((newToken) => {
            processQueue(null, newToken);
            const refreshedHeaders = {
              ...headers,
              Authorization: `Bearer ${newToken}`,
            };
            return executeOnce<T>(
              api_url,
              method,
              refreshedHeaders,
              body,
              maxRetries,
              baseDelay,
              timeout,
              shouldRetry,
              onRetry,
              true,
              0,
            );
          })
          .then(resolve)
          .catch((err) => {
            processQueue(err, null);
            window.location.href = "/auth/logout";
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
        return;
      }

      if (xhr.status === 429 && retryCount < maxRetries) {
        const retryAfter = xhr.getResponseHeader("Retry-After");
        const delay = retryAfter
          ? (parseInt(retryAfter, 10) || 1) * 1000
          : baseDelay * Math.pow(2, retryCount);
        onRetry(retryCount + 1, maxRetries, delay, 429);
        setTimeout(() => {
          executeOnce<T>(
            api_url,
            method,
            headers,
            body,
            maxRetries,
            baseDelay,
            timeout,
            shouldRetry,
            onRetry,
            isRetryAfterRefresh,
            retryCount + 1,
          )
            .then(resolve)
            .catch(reject);
        }, delay);
        return;
      }

      if (shouldRetry(xhr.status) && retryCount < maxRetries) {
        const delay = baseDelay * Math.pow(2, retryCount);
        onRetry(retryCount + 1, maxRetries, delay, xhr.status);
        setTimeout(() => {
          executeOnce<T>(
            api_url,
            method,
            headers,
            body,
            maxRetries,
            baseDelay,
            timeout,
            shouldRetry,
            onRetry,
            isRetryAfterRefresh,
            retryCount + 1,
          )
            .then(resolve)
            .catch(reject);
        }, delay);
        return;
      }

      if (xhr.status > 0) {
        let errorPayload: {
          message: string;
          status: number;
          [key: string]: unknown;
        } = {
          message: "An error occurred",
          status: xhr.status,
        };
        try {
          errorPayload = {
            ...JSON.parse(xhr.responseText),
            status: xhr.status,
          };
        } catch {
          errorPayload.message = xhr.responseText || `Error: ${xhr.status}`;
        }
        reject(errorPayload);
      }
    };

    xhr.onerror = () => {
      if (retryCount < maxRetries) {
        const delay = baseDelay * Math.pow(2, retryCount);
        onRetry(retryCount + 1, maxRetries, delay, 0);
        setTimeout(() => {
          executeOnce<T>(
            api_url,
            method,
            headers,
            body,
            maxRetries,
            baseDelay,
            timeout,
            shouldRetry,
            onRetry,
            isRetryAfterRefresh,
            retryCount + 1,
          )
            .then(resolve)
            .catch(reject);
        }, delay);
      } else {
        reject("Connection failed. Please check your internet connection.");
      }
    };

    xhr.ontimeout = () => {
      if (retryCount < maxRetries) {
        const delay = baseDelay * Math.pow(2, retryCount);
        onRetry(retryCount + 1, maxRetries, delay, -1);
        setTimeout(() => {
          executeOnce<T>(
            api_url,
            method,
            headers,
            body,
            maxRetries,
            baseDelay,
            timeout,
            shouldRetry,
            onRetry,
            isRetryAfterRefresh,
            retryCount + 1,
          )
            .then(resolve)
            .catch(reject);
        }, delay);
      } else {
        reject("The server is taking too long to respond. It might be down.");
      }
    };

    xhr.send(
      isFormData ? (body as FormData) : body ? JSON.stringify(body) : null,
    );
  });
}

const xhrClient = <T = any>(
  api_url: string,
  method: string,
  headers: Record<string, string> = {},
  body: unknown = null,
  options: XhrClientOptions = {},
): Promise<T> => {
  const {
    maxRetries = 3,
    baseDelay = 1000,
    timeout = 10000,
    shouldRetry = (status: number) =>
      status === 429 || (status >= 500 && status < 600),
    onRetry = () => {},
  } = options;

  return executeOnce<T>(
    api_url,
    method,
    headers,
    body,
    maxRetries,
    baseDelay,
    timeout,
    shouldRetry,
    onRetry,
    false,
    0,
  );
};

export default xhrClient;
