## 2024-05-18 - Missing aria-hidden on decorative SVGs
**Learning:** Decorative SVGs without `aria-hidden="true"` can confuse screen readers by presenting unhelpful visual clutter.
**Action:** Add `aria-hidden="true"` to all decorative SVGs, particularly those accompanying text labels.
## 2026-10-01 - Added aria-live to Carousel Stage
**Learning:** Found an automatic carousel without screen reader announcements for changing content.
**Action:** Applied `aria-live="polite"` to the carousel stage to gracefully announce new content to screen reader users.
