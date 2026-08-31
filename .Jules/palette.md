## 2024-05-14 - Contact Form Accessibility
**Learning:** Found a common pattern in the contact form where `<label>` elements were missing `htmlFor` attributes and corresponding inputs lacked `id` attributes. This prevented clicking the label from focusing the input, and also degraded the experience for screen readers.
**Action:** Always ensure that form controls have explicit IDs and are linked with their labels via the `htmlFor` attribute.
