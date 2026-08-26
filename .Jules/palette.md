## 2026-08-26 - Added htmlFor and id to form inputs
**Learning:** React form inputs without matching `id` and `htmlFor` attributes on their labels can prevent users from focusing inputs when clicking the labels. This is a crucial accessibility standard for all forms.
**Action:** Always ensure `htmlFor` on `<label>` matches `id` on `<input>`, `<select>`, or `<textarea>` elements during component creation.
