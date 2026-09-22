## 2024-05-24 - Intersection Observer vs window scroll listener
**Learning:** For scroll-based UI elements like floating CTAs or sticky headers, using `window.addEventListener('scroll')` and directly reading layout properties like `window.innerHeight` can cause layout thrashing and unnecessary main thread overhead. This codebase memory explicitly mentions preferring `IntersectionObserver` on sentinel elements instead.
**Action:** Replace window scroll listeners for sticky/floating UI with IntersectionObserver on sentinel elements.
