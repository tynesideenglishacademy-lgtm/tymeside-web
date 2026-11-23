## 2024-05-14 - Performance investigation notes
**Learning:** `MobileCta` and `Navigation` are well-optimized since `requestAnimationFrame` ensures that the `window.scrollY` read happens at the right time. There is no major rendering performance bottleneck here.
**Action:** Investigate list virtualizations, unnecessary large imports (e.g. `html2canvas` usage in the app), or other bottlenecks. `LevelTest` dynamically imports `jspdf` + `html2canvas` in a lazy boundary in `App.tsx`, which is great. Wait, what about `react-router-dom` links preloading or image preloading? Or useMemo/React.memo usage? Or is there any unnecessary state updates inside effects?
## 2024-05-14 - Lazy loading opportunity
**Learning:** `LevelTest.tsx` imports `jsPDF` directly at the top level. `App.tsx` lazy loads `LevelTest` so it doesn't block the main bundle, but `jsPDF` itself is a large dependency (~300kb+) that gets loaded entirely when `LevelTest` renders, even though it's only used when the user clicks "Download Certificate" at the very end of the test!
**Action:** Move `jsPDF` import inside the `downloadCertificate` function using `await import('jspdf')` (dynamic import) to defer loading this large library until the user actually requests the certificate.
## 2025-02-06 - Optimized Testimonials Carousel
**Learning:** The Testimonials component uses a `setInterval` to rotate reviews every 6.5 seconds. By default, this runs continuously even when the component is off-screen (e.g., scrolled out of view), causing unnecessary React state updates, re-renders, and CPU usage.
**Action:** Used `IntersectionObserver` to track the visibility of the `.reviews-carousel` element. The interval now pauses automatically when the carousel is not visible in the viewport, conserving resources on long pages.
