Run npm run lint

> frontend@0.1.0 lint
> eslint

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/api/services/authService.jsx
Warning: 45:28 warning '\_token' is defined but never used @typescript-eslint/no-unused-vars
Warning: 47:25 warning '\_token' is defined but never used @typescript-eslint/no-unused-vars
Warning: 47:33 warning '\_verificationCode' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/cards/page.tsx
Error: 102:26 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 141:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 221:10 warning 'error' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 222:40 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 267:7 warning Expected an assignment or function call and instead saw an expression @typescript-eslint/no-unused-expressions
Error: 337:15 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 366:6 warning React Hook useCallback has a missing dependency: 'router'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Error: 380:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 411:6 warning React Hook useEffect has missing dependencies: 'loadCards' and 'loadWalletBalance'. Either include them or remove the dependency array react-hooks/exhaustive-deps
Error: 417:15 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 419:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
426:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/cards/page.tsx:426:7
424 | flag: FLAG_MAP[w.currency_code] || FLAG_MAP["USD"],
425 | }));

> 426 | setWallets(filtered);

      |       ^^^^^^^^^^ Avoid calling setState() directly within an effect

427 | if (filtered.length > 0) setSelectedWallet(filtered[0]);
428 | }
429 | }, [wallet]); react-hooks/set-state-in-effect
Warning: 457:11 warning 'optimisticCard' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 470:11 warning 'optimisticRequest' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 505:17 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/context/ThemeProvider.tsx
20:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/context/ThemeProvider.tsx:20:7
18 | const savedTheme = localStorage.getItem("theme");
19 | if (savedTheme) {

> 20 | setTheme(savedTheme);

     |       ^^^^^^^^ Avoid calling setState() directly within an effect

21 | } else {
22 | const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
23 | const initial = prefersDark ? "dark" : "light"; react-hooks/set-state-in-effect

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/dashboard/page.tsx
Warning: 19:3 warning 'User2' is defined but never used @typescript-eslint/no-unused-vars
Warning: 25:3 warning 'Hospital' is defined but never used @typescript-eslint/no-unused-vars
Warning: 27:3 warning 'Plane' is defined but never used @typescript-eslint/no-unused-vars
Warning: 28:3 warning 'ShoppingBag' is defined but never used @typescript-eslint/no-unused-vars
Warning: 65:10 warning 'loading' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 68:10 warning 'error' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 69:40 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 76:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 78:10 warning 'toasts' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 90:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 96:10 warning 'formData' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 105:10 warning 'settings' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 172:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 209:6 warning React Hook useCallback has missing dependencies: 'router' and 'selectedCurrency'. Either include them or remove the dependency array react-hooks/exhaustive-deps
230:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/dashboard/page.tsx:230:5
228 |
229 | useEffect(() => {

> 230 | refreshBalance();

      |     ^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

231 | fetchHistory();
232 | fetchUserProfile();
233 | }, []); react-hooks/set-state-in-effect
232:5 error Error: Cannot access variable before it is declared

`fetchUserProfile` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/dashboard/page.tsx:232:5
230 | refreshBalance();
231 | fetchHistory();

> 232 | fetchUserProfile();

      |     ^^^^^^^^^^^^^^^^ `fetchUserProfile` accessed before it is declared

233 | }, []);
234 |
235 | useEffect(() => {

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/dashboard/page.tsx:367:3
365 | };
366 |

> 367 | const fetchUserProfile = async () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 368 | try {

      | ^^^^^^^^^

> 369 | const userId = getUserId();

      …
      | ^^^^^^^^^

> 435 | }

      | ^^^^^^^^^

> 436 | };

      | ^^^^^ `fetchUserProfile` is declared here

437 |
438 | const toggleTheme = () => {
439 | const newTheme = theme === "light" ? "dark" : "light"; react-hooks/immutability
Warning: 233:6 warning React Hook useEffect has missing dependencies: 'fetchHistory', 'fetchUserProfile', and 'refreshBalance'. Either include them or remove the dependency array react-hooks/exhaustive-deps
269:11 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/dashboard/page.tsx:269:11
267 | const userPhoto = parsedData?.user?.photo;
268 | if (userPhoto && userPhoto !== "/assets/images/user-profile.jpg") {

> 269 | setProfileImage(userPhoto);

      |           ^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

270 | }
271 | }
272 | } catch (error) { react-hooks/set-state-in-effect
284:11 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/dashboard/page.tsx:284:11
282 | const userPhoto = parsedData?.user?.photo;
283 | if (userPhoto && userPhoto !== "/assets/images/user-profile.jpg") {

> 284 | setProfileImage(userPhoto);

      |           ^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

285 | }
286 | }
287 | } catch (error) { react-hooks/set-state-in-effect
Warning: 372:13 warning 'API_BASE_URL' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 470:14 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 526:9 warning 'userRecord' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 544:15 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/default/page.tsx
Warning: 4:8 warning 'Head' is defined but never used @typescript-eslint/no-unused-vars
Warning: 23:22 warning 'setLoginState' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 29:10 warning 'isChatOpen' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 29:22 warning 'setIsChatOpen' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 56:23 warning 'setIsResending' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 402:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 458:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 489:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 527:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 574:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 625:13 warning 'verificationCode' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 682:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/exchange/page.tsx
Error: 198:60 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 204:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
295:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/exchange/page.tsx:295:5
293 |
294 | useEffect(() => {

> 295 | calculateSwapAmounts(fromAmount);

      |     ^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

296 | }, [fromAmount, exchangeRate]);
297 |
298 | const handlePinChange = (index: number, value: string) => { react-hooks/set-state-in-effect
Warning: 296:6 warning React Hook useEffect has a missing dependency: 'calculateSwapAmounts'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Error: 329:36 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 334:36 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 362:11 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 435:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 446:37 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
467:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/exchange/page.tsx:467:5
465 | useEffect(() => {
466 | const t = setTimeout(() => setIsPageLoading(false), 2000);

> 467 | fetchUserWallets();

      |     ^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

468 | return () => clearTimeout(t);
469 | }, []);
470 | react-hooks/set-state-in-effect
Warning: 469:6 warning React Hook useEffect has a missing dependency: 'fetchUserWallets'. Either include it or remove the dependency array react-hooks/exhaustive-deps
473:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/exchange/page.tsx:473:7
471 | useEffect(() => {
472 | if (fromCurrency.code !== toCurrency.code) {

> 473 | fetchExchangeRate(fromCurrency.code, toCurrency.code);

      |       ^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

474 | }
475 | }, [fromCurrency.code, toCurrency.code]);
476 | react-hooks/set-state-in-effect
Warning: 475:6 warning React Hook useEffect has a missing dependency: 'fetchExchangeRate'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Error: 745:32 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/investments/page.tsx
Warning: 14:11 warning 'LinkIcon' is defined but never used @typescript-eslint/no-unused-vars
Error: 217:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 224:6 warning React Hook useEffect has a missing dependency: 'showToast'. Either include it or remove the dependency array react-hooks/exhaustive-deps
230:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/investments/page.tsx:230:7
228 | const userId = getUserId();
229 | if (!userId) {

> 230 | setRecentLoading(false);

      |       ^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

231 | return;
232 | }
233 | react-hooks/set-state-in-effect
Error: 236:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 268:56 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
274:9 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/investments/page.tsx:274:9
272 | w.symbol || getWallet(w.currency_code)?.symbol || w.currency_code,
273 | }));

> 274 | setCurrencies(apiCurrencies);

      |         ^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

275 |
276 | const fiat = getFiat();
277 | if (fiat) { react-hooks/set-state-in-effect
Warning: 301:14 warning '\_' is defined but never used @typescript-eslint/no-unused-vars
Error: 319:22 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 330:18 warning 'err' is defined but never used @typescript-eslint/no-unused-vars
Error: 330:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
342:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/investments/page.tsx:342:5
340 | /_ recalculate whenever amount or duration changes _/
341 | useEffect(() => {

> 342 | triggerCalculate(rawAmount, selectedDuration);

      |     ^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

343 | }, [rawAmount, selectedDuration, triggerCalculate]);
344 |
345 | /_ ── amount input ── _/ react-hooks/set-state-in-effect
Error: 394:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 406:28 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 416:24 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 436:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/investments/portfolio/page.tsx
Warning: 30:19 warning 'getToken' is defined but never used @typescript-eslint/no-unused-vars
Warning: 285:9 warning 'router' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 359:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
383:22 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/investments/portfolio/page.tsx:383:22
381 | const fiat = getFiat();
382 | const w = fiat ? getWallet(fiat) : null;

> 383 | if (w?.symbol) setCurrencySymbol(w.symbol);

      |                      ^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

384 | } catch (_) {}
385 |
386 | loadInvestments().finally(() => setIsPageLoading(false)); react-hooks/set-state-in-effect
Warning: 384:14 warning '_' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/refer/page.tsx
Error: 114:9 error 'end' is never reassigned. Use 'const' instead prefer-const

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/services/bills/airtime/page.tsx
Warning: 12:10 warning 'Smartphone' is defined but never used @typescript-eslint/no-unused-vars
Warning: 12:74 warning 'Search' is defined but never used @typescript-eslint/no-unused-vars
Warning: 118:18 warning 'err' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/services/bills/data/page.tsx
Warning: 12:10 warning 'Smartphone' is defined but never used @typescript-eslint/no-unused-vars
Warning: 12:74 warning 'Search' is defined but never used @typescript-eslint/no-unused-vars
Warning: 118:18 warning 'err' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/services/bills/electricity/page.tsx
Warning: 12:54 warning 'Search' is defined but never used @typescript-eslint/no-unused-vars
Warning: 18:7 warning 'networks' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 114:18 warning 'err' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/services/bills/shopping/page.tsx
Warning: 3:31 warning 'useRef' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/general/page.tsx
Warning: 32:3 warning 'getToken' is defined but never used @typescript-eslint/no-unused-vars
Error: 56:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 59:10 warning 'pinMode' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 77:10 warning 'formData' is assigned a value but never used @typescript-eslint/no-unused-vars
108:5 error Error: Cannot access variable before it is declared

`checkPinStatus` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/general/page.tsx:108:5
106 |
107 | useEffect(() => {

> 108 | checkPinStatus();

      |     ^^^^^^^^^^^^^^ `checkPinStatus` accessed before it is declared

109 | }, []);
110 |
111 | useEffect(() => {

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/general/page.tsx:288:3
286 | };
287 |

> 288 | const checkPinStatus = () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 289 | const hasPin = getUserIsSetTransfer();

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 290 | setUserHasPin(!!hasPin);

      …
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 301 | setCurrentPin(["", "", "", ""]);

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 302 | };

      | ^^^^^ `checkPinStatus` is declared here

303 |
304 | const [settings, setSettings] = useState<UserSettings>({
305 | profile: { react-hooks/immutability
138:5 error Error: Cannot access variable before it is declared

`fetchUserProfile` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/general/page.tsx:138:5
136 |
137 | useEffect(() => {

> 138 | fetchUserProfile();

      |     ^^^^^^^^^^^^^^^^ `fetchUserProfile` accessed before it is declared

139 | }, []);
140 |
141 | const fetchUserSettings = async () => {

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/general/page.tsx:178:3
176 | };
177 |

> 178 | const fetchUserProfile = async () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 179 | // Seed immediately from localStorage so fields aren't blank while the

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 180 | // network request is in-flight.

      …
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 285 | }

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 286 | };

      | ^^^^^ `fetchUserProfile` is declared here

287 |
288 | const checkPinStatus = () => {
289 | const hasPin = getUserIsSetTransfer(); react-hooks/immutability
Warning: 139:6 warning React Hook useEffect has a missing dependency: 'fetchUserProfile'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Error: 188:33 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 190:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 362:15 warning 'response' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 375:33 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 398:15 warning 'response' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 586:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 644:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 661:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 868:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Warning: 984:27 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/profile/page.tsx
Warning: 29:3 warning 'UserSettings' is defined but never used @typescript-eslint/no-unused-vars
Error: 79:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
138:5 error Error: Cannot access variable before it is declared

`fetchUserProfile` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/profile/page.tsx:138:5
136 |
137 | useEffect(() => {

> 138 | fetchUserProfile();

      |     ^^^^^^^^^^^^^^^^ `fetchUserProfile` accessed before it is declared

139 |
140 | const firstName = getUserFirstName() || "";
141 | const lastName = getUserLastName() || "";

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/profile/page.tsx:145:3
143 | }, []);
144 |

> 145 | const fetchUserProfile = async () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 146 | try {

      | ^^^^^^^^^

> 147 | const userId = getUserId();

      …
      | ^^^^^^^^^

> 210 | }

      | ^^^^^^^^^

> 211 | };

      | ^^^^^ `fetchUserProfile` is declared here

212 |
213 | useEffect(() => {
214 | document.title = "User Profile - ePay Online Business Banking"; react-hooks/immutability
142:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/profile/page.tsx:142:5
140 | const firstName = getUserFirstName() || "";
141 | const lastName = getUserLastName() || "";

> 142 | setMetaMapData((prev) => ({ ...prev, firstName, lastName }));

      |     ^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

143 | }, []);
144 |
145 | const fetchUserProfile = async () => { react-hooks/set-state-in-effect
Warning: 143:6 warning React Hook useEffect has a missing dependency: 'fetchUserProfile'. Either include it or remove the dependency array react-hooks/exhaustive-deps
224:11 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/settings/profile/page.tsx:224:11
222 | const userPhoto = parsedData?.user?.photo;
223 | if (userPhoto && userPhoto !== "/assets/images/user-profile.jpg") {

> 224 | setProfileImage(userPhoto);

      |           ^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

225 | }
226 | }
227 | } catch (error) { react-hooks/set-state-in-effect
Error: 469:22 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 471:22 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 479:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 617:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 619:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 697:21 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element
Error: 1226:71 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities
Error: 1389:34 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities
Warning: 1398:35 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element
Warning: 1411:35 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element
Error: 1426:45 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
Error: 1426:64 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
Error: 1431:40 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/support/page.tsx
230:77 error Error: Cannot call impure function during render

`Math.random` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. (https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/support/page.tsx:230:77
228 | <h3>Ticket Submitted Successfully!</h3>
229 | <p>We&apos;ve received your support request. Our team will respond within 24 hours.</p>

> 230 | <p className="ticket-number">Ticket #EP-{Math.floor(Math.random() \* 100000)}</p>

      |                                                                             ^^^^^^^^^^^^^ Cannot call impure function

231 | </div>
232 | ) : (
233 | <form className="ticket-form" onSubmit={handleSubmit}> react-hooks/purity

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/types/api.ts
Error: 3:34 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/types/dto.ts
Error: 10:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/types/errors.ts
Error: 42:34 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/types/utils.ts
Error: 112:17 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/utils/eventEmitter.ts
Error: 1:32 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 22:32 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/utils/mappers/statement.mapper.ts
Error: 4:15 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/accounts/page.tsx
Warning: 82:10 warning 'loading' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 130:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 142:56 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 145:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 149:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 165:13 warning 'symbol' is assigned a value but never used @typescript-eslint/no-unused-vars
211:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/accounts/page.tsx:211:5
209 |
210 | useEffect(() => {

> 211 | fetchTransactionHistory();

      |     ^^^^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

212 | }, []);
213 |
214 | useEffect(() => { react-hooks/set-state-in-effect
Warning: 212:6 warning React Hook useEffect has a missing dependency: 'fetchTransactionHistory'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Warning: 314:9 warning 'applyQuickDateFilter' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 488:9 warning 'handleDateFilterChange' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 524:9 warning 'closeDateFilter' is assigned a value but never used @typescript-eslint/no-unused-vars
610:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/accounts/page.tsx:610:5
608 |
609 | useEffect(() => {

> 610 | fetchCurrencyBalance(selectedCurrency.code);

      |     ^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

611 | }, [selectedCurrency.code]);
612 |
613 | if (isPageLoading) { react-hooks/set-state-in-effect
Warning: 892:27 warning 'isDebit' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 1337:40 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
Error: 1337:60 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/beneficiary/page.tsx
Error: 67:46 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 119:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 135:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 151:6 warning React Hook useEffect has a missing dependency: 'fetchBeneficiaries'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Warning: 183:14 warning '\_' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 186:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 192:44 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 203:60 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 216:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx
Error: 41:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 41:31 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 54:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 54:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 68:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 75:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 81:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 85:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 89:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 89:41 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 96:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 103:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 103:31 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 116:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 116:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 130:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 137:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 143:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 147:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 151:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 151:41 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 158:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 175:64 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 183:10 warning 'isValid' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 187:10 warning 'accountExist' is assigned a value but never used @typescript-eslint/no-unused-vars
227:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx:227:7
225 | const savedTheme = localStorage.getItem("theme") as "light" | "dark";
226 | if (savedTheme) {

> 227 | setTheme(savedTheme);

      |       ^^^^^^^^ Avoid calling setState() directly within an effect

228 | }
229 | }, []);
230 | react-hooks/set-state-in-effect
232:5 error Error: Cannot access variable before it is declared

`fetchUserBanks` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx:232:5
230 |
231 | useEffect(() => {

> 232 | fetchUserBanks();

      |     ^^^^^^^^^^^^^^ `fetchUserBanks` accessed before it is declared

233 | fetchBankList();
234 | }, []);
235 |

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx:236:3
234 | }, []);
235 |

> 236 | const fetchUserBanks = async () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 237 | try {

      | ^^^^^^^^^

> 238 | const userId = getUserId();

      …
      | ^^^^^^^^^

> 264 | }

      | ^^^^^^^^^

> 265 | };

      | ^^^^^ `fetchUserBanks` is declared here

266 |
267 | const fetchBankList = async () => {
268 | try { react-hooks/immutability
233:5 error Error: Cannot access variable before it is declared

`fetchBankList` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx:233:5
231 | useEffect(() => {
232 | fetchUserBanks();

> 233 | fetchBankList();

      |     ^^^^^^^^^^^^^ `fetchBankList` accessed before it is declared

234 | }, []);
235 |
236 | const fetchUserBanks = async () => {

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx:267:3
265 | };
266 |

> 267 | const fetchBankList = async () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 268 | try {

      | ^^^^^^^^^

> 269 | const response = await bankCollectionService.getBankList();

      …
      | ^^^^^^^^^

> 282 | }

      | ^^^^^^^^^

> 283 | };

      | ^^^^^ `fetchBankList` is declared here

284 |
285 | const toggleTheme = () => {
286 | const newTheme = theme === "light" ? "dark" : "light"; react-hooks/immutability
Warning: 234:6 warning React Hook useEffect has missing dependencies: 'fetchBankList' and 'fetchUserBanks'. Either include them or remove the dependency array react-hooks/exhaustive-deps
Error: 244:55 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 260:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Error: 271:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 280:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Error: 291:45 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 345:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
386:34 error Error: Cannot call impure function during render

`Date.now` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. (https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/deposit-banks/page.tsx:386:34
384 |
385 | const newBankAccount: BankAccount = {

> 386 | id: result.data?.id || Date.now().toString(),

      |                                  ^^^^^^^^^^ Cannot call impure function

387 | bankName: newBank.bankName,
388 | accountNumber: newBank.accountNumber,
389 | accountName: newBank.accountName, react-hooks/purity
Error: 405:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 456:16 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Warning: 509:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/statements/page.tsx
Warning: 97:10 warning 'serverTotalElements' is assigned a value but never used @typescript-eslint/no-unused-vars
Warning: 127:9 warning 'transactionTypes' is assigned a value but never used @typescript-eslint/no-unused-vars
205:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/app/wallet/statements/page.tsx:205:7
203 | useEffect(() => {
204 | if (selectedCurrency.code) {

> 205 | fetchCurrencyBalance(selectedCurrency.code);

      |       ^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

206 | }
207 | }, [selectedCurrency.code]);
208 | react-hooks/set-state-in-effect
Error: 324:22 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 330:58 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 403:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 672:9 error 'baseClass' is never reassigned. Use 'const' instead prefer-const
Error: 686:9 error 'baseClass' is never reassigned. Use 'const' instead prefer-const

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/DateFilterModal.tsx
Warning: 147:9 warning 'hasSelection' is assigned a value but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/DeleteHistoryModal.tsx
Error: 30:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/DepositModal.tsx
Error: 23:52 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 32:10 warning 'isEmpty' is assigned a value but never used @typescript-eslint/no-unused-vars
Error: 33:44 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 55:15 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
97:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/DepositModal.tsx:97:7
95 | useEffect(() => {
96 | if (!isOpen) {

> 97 | setStep('selection');

      |       ^^^^^^^ Avoid calling setState() directly within an effect

98 | setBankStep('select');
99 | setSelectedBank(null);
100 | setAmount(''); react-hooks/set-state-in-effect
Error: 167:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 199:26 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 200:24 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 202:26 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 203:24 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 216:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 263:34 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 500:92 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Footer.tsx
Warning: 13:9 warning 'themeClass' is assigned a value but never used @typescript-eslint/no-unused-vars

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Header.tsx
Warning: 4:8 warning 'ReactSwitch' is defined but never used @typescript-eslint/no-unused-vars
Warning: 13:3 warning 'History' is defined but never used @typescript-eslint/no-unused-vars
Warning: 18:3 warning 'FileText' is defined but never used @typescript-eslint/no-unused-vars
Warning: 21:3 warning 'Smartphone' is defined but never used @typescript-eslint/no-unused-vars
Warning: 23:3 warning 'Send' is defined but never used @typescript-eslint/no-unused-vars
Warning: 25:3 warning 'UserStarIcon' is defined but never used @typescript-eslint/no-unused-vars
Warning: 30:8 warning 'Image' is defined but never used @typescript-eslint/no-unused-vars
Warning: 46:26 warning 'toggleTheme' is defined but never used @typescript-eslint/no-unused-vars
Warning: 67:9 warning 'accountTriggerRef' is assigned a value but never used @typescript-eslint/no-unused-vars
72:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Header.tsx:72:5
70 | useEffect(() => {
71 | const storedNotifications = getNotificationContainer() || [];

> 72 | setNotifications(storedNotifications);

     |     ^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

73 | setFilteredNotifications(storedNotifications);
74 | }, []);
75 | react-hooks/set-state-in-effect
114:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Header.tsx:114:7
112 | useEffect(() => {
113 | if (filter === "all") {

> 114 | setFilteredNotifications(notifications);

      |       ^^^^^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

115 | } else {
116 | const typeMap: Record<string, string[]> = {
117 | messages: ["message", "chat", "communication", "profile_update"], react-hooks/set-state-in-effect
231:11 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Header.tsx:231:11
229 | const userPhoto = parsedData?.user?.photo;
230 | if (userPhoto && userPhoto !== "/assets/images/user-profile.jpg") {

> 231 | setProfileImage(userPhoto);

      |           ^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

232 | }
233 | }
234 | } catch (error) { react-hooks/set-state-in-effect
Warning: 414:15 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/History.tsx
Warning: 7:3 warning 'ShoppingBag' is defined but never used @typescript-eslint/no-unused-vars
Error: 41:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
51:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/History.tsx:51:7
49 | useEffect(() => {
50 | if (historyData && Array.isArray(historyData)) {

> 51 | setTransactions(transformTransactions(historyData));

     |       ^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

52 | } else {
53 | setTransactions([]);
54 | } react-hooks/set-state-in-effect
51:23 error Error: Cannot access variable before it is declared

`transformTransactions` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/History.tsx:51:23
49 | useEffect(() => {
50 | if (historyData && Array.isArray(historyData)) {

> 51 | setTransactions(transformTransactions(historyData));

     |                       ^^^^^^^^^^^^^^^^^^^^^ `transformTransactions` accessed before it is declared

52 | } else {
53 | setTransactions([]);
54 | }

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/History.tsx:134:3
132 | };
133 |

> 134 | const transformTransactions = (raw: any[]): Transaction[] => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 135 | return raw.map((tx) => {

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 136 | // New nested structure support

      …
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 188 | });

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 189 | };

      | ^^^^^ `transformTransactions` is declared here

190 |
191 | const handleViewAll = () => {
192 | setDisplayLimit(transactions.length); react-hooks/immutability
Warning: 55:6 warning React Hook useEffect has a missing dependency: 'transformTransactions'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Error: 134:39 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/KYCSuccessModal.tsx
24:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/KYCSuccessModal.tsx:24:7
22 | useEffect(() => {
23 | if (isOpen) {

> 24 | setVisible(true);

     |       ^^^^^^^^^^ Avoid calling setState() directly within an effect

25 | const t = setTimeout(() => setAnimateCheck(true), 150);
26 | return () => clearTimeout(t);
27 | } else { react-hooks/set-state-in-effect

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Kyc/page.tsx
Warning: 15:3 warning 'linkUrl' is assigned a value but never used @typescript-eslint/no-unused-vars
23:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/Kyc/page.tsx:23:7
21 | if (autoCalculate) {
22 | const percentage = calculateProfileCompletion();

> 23 | setCalculatedProgress(percentage);

     |       ^^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

24 | }
25 | }, [autoCalculate]);
26 | react-hooks/set-state-in-effect

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/ProviderModal.tsx
Warning: 23:3 warning 'serviceName' is defined but never used @typescript-eslint/no-unused-vars
Warning: 53:15 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/PurchaseModal.tsx
Warning: 146:13 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/SupportChatBot.tsx
223:15 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/SupportChatBot.tsx:223:15
221 | useEffect(() => {
222 | const name = getUserFullName();

> 223 | if (name) setUserName(name.split(" ")[0]);

      |               ^^^^^^^^^^^ Avoid calling setState() directly within an effect

224 | }, []);
225 |
226 | useEffect(() => { react-hooks/set-state-in-effect
228:5 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/SupportChatBot.tsx:228:5
226 | useEffect(() => {
227 | if (!isOpen || dataLoading || faqCategories.length > 0) return;

> 228 | setDataLoading(true);

      |     ^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

229 | Promise.allSettled([supportService.getFaqs(), supportService.getArticles()])
230 | .then(([faqR, artR]) => {
231 | if (faqR.status === "fulfilled") { react-hooks/set-state-in-effect
Error: 232:35 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 236:35 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 241:6 warning React Hook useEffect has missing dependencies: 'dataLoading' and 'faqCategories.length'. Either include them or remove the dependency array react-hooks/exhaustive-deps
Error: 292:52 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 295:58 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 313:56 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 315:62 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 331:34 warning 'displayLabel' is defined but never used @typescript-eslint/no-unused-vars
Error: 333:13 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 336:52 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 416:14 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 426:28 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 433:18 warning '\_' is defined but never used @typescript-eslint/no-unused-vars
Warning: 443:14 warning 'err' is defined but never used @typescript-eslint/no-unused-vars
Error: 443:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 449:6 warning React Hook useCallback has a missing dependency: 'botSay'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Error: 525:25 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 574:27 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 633:14 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 1210:23 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities
1471:34 error Error: Cannot access refs during render

React refs are values that are not needed for rendering. Refs should only be accessed outside of render, such as in event handlers or effects. Accessing a ref value (the `current` property) during render can cause your component not to update as expected (https://react.dev/reference/react/useRef).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/SupportChatBot.tsx:1471:34
1469 | return (
1470 | <div className="scb-wrapper">

> 1471 | <div className="scb-body">{renderBody()}</div>

       |                                  ^^^^^^^^^^ This function accesses a ref value

1472 | {!subView && (
1473 | <nav className="scb-nav">
1474 | {[ react-hooks/refs

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/TransactionReceipt.tsx
Warning: 26:11 warning 'toCurrency' is assigned a value but never used @typescript-eslint/no-unused-vars
36:5 error Error: Cannot access variable before it is declared

`openReceiptWindow` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/TransactionReceipt.tsx:36:5
34 | useEffect(() => {
35 | // Auto-open receipt when component mounts

> 36 | openReceiptWindow();

     |     ^^^^^^^^^^^^^^^^^ `openReceiptWindow` accessed before it is declared

37 | }, [transaction]);
38 |
39 | const openReceiptWindow = () => {

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/TransactionReceipt.tsx:39:3
37 | }, [transaction]);
38 |

> 39 | const openReceiptWindow = () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 40 | const printWindow = window.open('', '\_blank', 'width=600,height=800');

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 41 |

      …
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 635 | printWindow.focus();

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 636 | };

      | ^^^^^ `openReceiptWindow` is declared here

637 |
638 | // Component returns null since the receipt opens in a new window
639 | return null; react-hooks/immutability
Warning: 37:6 warning React Hook useEffect has a missing dependency: 'openReceiptWindow'. Either include it or remove the dependency array react-hooks/exhaustive-deps

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WelcomeModal.tsx
20:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WelcomeModal.tsx:20:7
18 | useEffect(() => {
19 | if (!hasSeenWelcome()) {

> 20 | setVisible(true);

     |       ^^^^^^^^^^ Avoid calling setState() directly within an effect

21 | }
22 | }, []);
23 | react-hooks/set-state-in-effect
Error: 46:38 error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities
Warning: 56:13 warning Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element @next/next/no-img-element

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx
Warning: 3:38 warning 'Suspense' is defined but never used @typescript-eslint/no-unused-vars
Warning: 3:48 warning 'lazy' is defined but never used @typescript-eslint/no-unused-vars
Error: 42:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 42:31 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 55:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 55:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 69:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 76:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 82:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 86:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 90:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 90:41 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 97:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 104:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 104:31 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 117:18 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 117:30 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 131:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 138:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 144:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 148:23 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 178:64 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 183:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 242:50 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 250:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Warning: 281:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Error: 368:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
387:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:387:7
385 | return () => clearTimeout(timer);
386 | } else {

> 387 | setAccountName("");

      |       ^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

388 | }
389 | }, [selectedBankOption, accountNumber]);
390 | react-hooks/set-state-in-effect
394:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:394:7
392 | if (isOpen) {
393 | generateIdempotencyKey();

> 394 | setPendingTransaction(false);

      |       ^^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect

395 |
396 | const walletData = getWalletList();
397 | if (walletData && Array.isArray(walletData)) { react-hooks/set-state-in-effect
427:38 error Error: Cannot access variable before it is declared

`handlePinSubmit` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:427:38
425 | pin.length === 4
426 | ) {

> 427 | const timer = setTimeout(() => handlePinSubmit(), 100);

      |                                      ^^^^^^^^^^^^^^^ `handlePinSubmit` accessed before it is declared

428 | return () => clearTimeout(timer);
429 | }
430 | }, [pin, showPinModal]);

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:602:3
600 | };
601 |

> 602 | const handlePinSubmit = async () => {

      |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 603 | const enteredPin = pin.join("");

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 604 | if (enteredPin.length !== 4) return;

      …
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 779 | }

      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

> 780 | };

      | ^^^^^ `handlePinSubmit` is declared here

781 |
782 | const availableWallets = wallets.filter(
783 | (wallet) => !wallet.name.includes("Savings"), react-hooks/immutability
Warning: 430:6 warning React Hook useEffect has a missing dependency: 'handlePinSubmit'. Either include it or remove the dependency array react-hooks/exhaustive-deps
Warning: 448:6 warning React Hook useEffect has a missing dependency: 'resetTransactionState'. Either include it or remove the dependency array react-hooks/exhaustive-deps
452:7 error Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.
- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:452:7
450 | useEffect(() => {
451 | if (!isOpen) {

> 452 | setStep("selection");

      |       ^^^^^^^ Avoid calling setState() directly within an effect

453 | setAmount("");
454 | setRawAmount("");
455 | setAccountNumber(""); react-hooks/set-state-in-effect
Error: 534:45 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 709:28 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 710:26 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 711:28 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 712:26 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 713:28 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Error: 714:26 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
Warning: 723:20 warning 'checkResponse' is defined but never used @typescript-eslint/no-unused-vars
Warning: 726:21 warning 'error' is defined but never used @typescript-eslint/no-unused-vars
Error: 747:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
1141:21 error Error: Cannot access refs during render

React refs are values that are not needed for rendering. Refs should only be accessed outside of render, such as in event handlers or effects. Accessing a ref value (the `current` property) during render can cause your component not to update as expected (https://react.dev/reference/react/useRef).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:1141:21
1139 | !selectedWallet ||
1140 | isVerifyingAccount ||

> 1141 | hasPendingTransaction()

       |                     ^^^^^^^^^^^^^^^^^^^^^ This function accesses a ref value

1142 | }
1143 | >
1144 | {isProcessing || hasPendingTransaction() ? ( react-hooks/refs
1144:36 error Error: Cannot access refs during render

React refs are values that are not needed for rendering. Refs should only be accessed outside of render, such as in event handlers or effects. Accessing a ref value (the `current` property) during render can cause your component not to update as expected (https://react.dev/reference/react/useRef).

/home/runner/work/epay-payment-system/epay-payment-system/frontend/components/WithdrawModal.tsx:1144:36
1142 | }
1143 | >

> 1144 | {isProcessing || hasPendingTransaction() ? (

       |                                    ^^^^^^^^^^^^^^^^^^^^^ This function accesses a ref value

1145 | <>
1146 | <div className="spinner" />
1147 | <span>Processing...</span> react-hooks/refs

✖ 330 problems (214 errors, 116 warnings)
3 errors and 0 warnings potentially fixable with the `--fix` option.

Error: Process completed with exit code 1.
0s
0s
1s
