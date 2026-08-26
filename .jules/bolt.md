## 2024-08-26 - React Router Code Splitting Optimization
**Learning:** The `LevelTest.tsx` component is large and brings in heavy dependencies like `jsPDF` (~200kb gzipped) and `jspdf`. Loading this on the main route (home) unnecessarily bloats the initial bundle and slows down page load times.
**Action:** Implemented React.lazy and Suspense to dynamically import the LevelTest component. This ensures the heavy dependencies are only loaded when the user actually navigates to the level test page, significantly improving the time-to-interactive for the main site.
