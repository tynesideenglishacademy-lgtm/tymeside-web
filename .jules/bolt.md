## 2025-02-14 - Lazy Load LevelTest Bundle Size
**Learning:** `LevelTest` includes large, specialized dependencies (`jsPDF`, `@supabase/supabase-js`) that can heavily inflate the main entry chunk size in this Vite setup. Since it is only used on a specific route, lazy loading it with `React.lazy` is crucial to prevent the homepage initial load from being penalized.
**Action:** When adding specialized or large libraries to non-homepage routes, dynamically import them or lazy-load the components to keep the main bundle thin.
