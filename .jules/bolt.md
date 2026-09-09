## 2024-05-18 - Avoid synchronous state updates in useEffect on mount
**Learning:** Initializing state synchronously inside `useEffect` on mount triggers a cascading render, bypassing potential optimizations. In components checking browser APIs (like `matchMedia` or `localStorage`), it's better to use lazy initialization within `useState`.
**Action:** Always prefer initializing state with a callback in `useState` when deriving it from browser APIs (safeguarded by a `typeof window !== 'undefined'` check) instead of setting default values and updating them immediately inside `useEffect`.
