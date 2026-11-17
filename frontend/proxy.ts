import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

class RouteConfig {
  private routes: string[];

  constructor(routes: string[]) {
    this.routes = routes;
  }

  matches(pathname: string): boolean {
    return this.routes.some((route) => {
      if (route === pathname) return true;
      if (route.endsWith("/*")) {
        const baseRoute = route.slice(0, -2);
        return pathname.startsWith(baseRoute);
      }
      return false;
    });
  }

  getRoutes(): string[] {
    return this.routes;
  }

  addRoutes(routes: string[]): void {
    this.routes.push(...routes);
  }
}

export class PublicRoutes extends RouteConfig {
  constructor(routes: string[] = []) {
    const defaultPublicRoutes = [
      "/",
      "/auth/logout",
      "/auth/login",
      "/auth/register",
      "/auth/forgot-password",
      "/auth/reset-password",
      "/auth/verify-email",
      "/about",
      "/contact",
      "/complete/profile",
      "/privacy-policy",
      "/terms-of-service",
    ];
    super([...defaultPublicRoutes, ...routes]);
  }
}

export class PrivateRoutes extends RouteConfig {
  constructor(routes: string[] = []) {
    const defaultPrivateRoutes = [
      "/dashboard",
      "/dashboard/*",
      "/banks",
      "/banks/*",
      "/user",
      "/user/*",
      "/bills",
      "/bills/*",
      "/kyc",
      "/kyc/*",
      "/settings",
      "/settings/*",
      "/cards",
      "/cards/*",
      "/exchange",
      "/exchange/*",
      "/wallet",
      "/wallet/*",
      "/payment",
      "/payment/*",
      "/refer",
      "/refer/*",
      "/statements",
      "/statements/*",
      "/beneficiary",
      "/beneficiary/*",
      "/beneficiary-transfer",
      "/beneficiary-transfer/*",
      "/support",
      "/support/*",
      "/investments",
      "/investments/*",
    ];
    super([...defaultPrivateRoutes, ...routes]);
  }
}

class AuthUtils {
  static isAuthenticated(request: NextRequest): boolean {
    const jwtCookie = request.cookies.get("jwt");
    const dataCookie = request.cookies.get("data");

    if (jwtCookie?.value) {
      return true;
    }

    if (!dataCookie) {
      return false;
    }

    try {
      const dataValue = decodeURIComponent(dataCookie.value);
      const parsedData = JSON.parse(dataValue);
      return !!(parsedData?.user?._jwt_?.jwt && parsedData.user.userId);
    } catch {
      return false;
    }
  }

  static getUserData(request: NextRequest) {
    try {
      const dataCookie = request.cookies.get("data");
      if (!dataCookie) return null;
      const dataValue = decodeURIComponent(dataCookie.value);
      const parsedData = JSON.parse(dataValue);
      return parsedData?.user || null;
    } catch {
      return null;
    }
  }

  static clearAuthCookies(response: NextResponse): NextResponse {
    response.cookies.delete("jwt");
    response.cookies.delete("data");
    return response;
  }
}

const publicRoutes = new PublicRoutes();
const privateRoutes = new PrivateRoutes();

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const isAuthenticated = AuthUtils.isAuthenticated(request);
  const isPublicRoute = publicRoutes.matches(pathname);
  const isPrivateRoute = privateRoutes.matches(pathname);

  if (
    isAuthenticated &&
    (pathname === "/auth/login" || pathname === "/auth/register")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (!isAuthenticated && isPrivateRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (isPublicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

export { AuthUtils, RouteConfig };
