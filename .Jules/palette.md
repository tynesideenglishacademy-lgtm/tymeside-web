## 2024-05-18 - Missing aria-hidden on decorative SVGs
**Learning:** Decorative SVGs without `aria-hidden="true"` can confuse screen readers by presenting unhelpful visual clutter.
**Action:** Add `aria-hidden="true"` to all decorative SVGs, particularly those accompanying text labels.
## 2026-10-11 - Adding loading spinner and disabled state to critical forms
**Learning:** Users lack feedback during form submission to Supabase, which can lead to multiple submissions if network is slow.
**Action:** Added loading spinner to Contact form submit button, using inline style and `isSubmitting` state, providing clear visual feedback.
