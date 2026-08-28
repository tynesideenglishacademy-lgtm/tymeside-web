## 2026-08-28 - Programmatic Form Label Associations
**Learning:** The forms in the Contact and LevelTest components were visually styled to have labels but lacked programmatic association. A label placed before an input does not automatically link them for screen readers or allow clicking the label text to focus the input (a common mobile UX pattern).
**Action:** Always link labels to their target using the htmlFor property and a matching id on the input element, especially in custom component structures.
