/**
 * Field-requirement marks for the contact and level-test forms.
 *
 * Both marks are decorative: what assistive tech actually announces is the
 * input's own `required` attribute, so the asterisk is hidden from it rather
 * than read out as "asterisk" on every label. Sighted users get the asterisk
 * plus a legend under the form heading explaining what it means.
 *
 * The colour is a token because two forms use it. The error-alert tint
 * (rgba(190, 40, 40, ...)) is deliberately not reused — that one is a surface
 * fill behind text, this one is text, and they need different contrast.
 */

export const RequiredMark = () => (
  <span aria-hidden="true" style={{ color: 'var(--color-required)' }}> *</span>
);

/** Renders as " (opcional)" / " (optional)" — pass the translated word. */
export const OptionalMark = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontWeight: 400, textTransform: 'none', opacity: 0.7 }}> ({children})</span>
);
