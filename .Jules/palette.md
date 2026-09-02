## 2024-09-02 - Form Accessibility with i18n
**Learning:** This app uses `i18next` for translated labels (`t('key')`). Because Playwright's `get_by_text` searches the final rendered output, appending visual indicators (like `*`) to translated labels can break simple text selectors in tests.
**Action:** When writing Playwright UI tests or scripts for this app, prefer targeting explicit form element IDs (e.g., `#contact-name`) rather than label text to ensure robustness across language changes and UX modifications.
