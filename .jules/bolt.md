## 2024-05-14 - Performance investigation notes
**Learning:** `MobileCta` and `Navigation` are well-optimized since `requestAnimationFrame` ensures that the `window.scrollY` read happens at the right time. There is no major rendering performance bottleneck here.
**Action:** Investigate list virtualizations, unnecessary large imports (e.g. `html2canvas` usage in the app), or other bottlenecks. `LevelTest` dynamically imports `jspdf` + `html2canvas` in a lazy boundary in `App.tsx`, which is great. Wait, what about `react-router-dom` links preloading or image preloading? Or useMemo/React.memo usage? Or is there any unnecessary state updates inside effects?
## 2024-05-14 - Lazy loading opportunity
**Learning:** `LevelTest.tsx` imports `jsPDF` directly at the top level. `App.tsx` lazy loads `LevelTest` so it doesn't block the main bundle, but `jsPDF` itself is a large dependency (~300kb+) that gets loaded entirely when `LevelTest` renders, even though it's only used when the user clicks "Download Certificate" at the very end of the test!
**Action:** Move `jsPDF` import inside the `downloadCertificate` function using `await import('jspdf')` (dynamic import) to defer loading this large library until the user actually requests the certificate.

## 2024-05-14 - Rejected optimization: Contact form query param parsing
**Learning:** Moving URL search param extraction out of a `useEffect` into a lazy `useState` initializer might seem like a standard React performance win to avoid cascading renders. However, in this specific codebase, doing so drops live updates if the `?interest=` param changes while the form is already mounted, and the performance gain is negligible. The component relies on that `useEffect` to resync state when the URL changes without unmounting.
**Action:** Avoid replacing `useEffect` with lazy state initialization if the component needs to react to live URL query string changes after the initial mount, especially for negligible performance gains.
