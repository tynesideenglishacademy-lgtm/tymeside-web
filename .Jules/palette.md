## 2026-09-03 - Contact Form Accessibility Pattern
**Learning:** The Contact form fields lacked proper ID-label associations, which is a common accessibility issue for screen readers. Explicit `htmlFor` and `id` pairs are necessary for all form inputs.
**Action:** Always ensure any new forms or form fields in this project are built with matching `htmlFor` and `id` attributes, and that required fields have a visible indicator to assist users.
