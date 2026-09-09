## 2024-05-18 - Missing global animation keyframes
**Learning:** `LevelTest.tsx` had an inline style `animation: 'spin 1s linear infinite'` on its loading spinner, but the `@keyframes spin` was missing from the global `index.css`, resulting in a broken, static spinner.
**Action:** Always ensure that when defining CSS animations inline or via tailwind-like utility classes that map to custom names (like `spin`), the underlying keyframes are actually defined in the stylesheet.
