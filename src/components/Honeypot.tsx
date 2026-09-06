/**
 * A field no human fills in.
 *
 * Bots that walk the DOM and complete every input trip this; real visitors
 * never see it, cannot tab to it, and password managers are told to leave it
 * alone. The Edge Function drops any submission that arrives with it set, and
 * answers 200 anyway so a bot has nothing to tune against.
 *
 * It is hidden by clipping rather than `display: none` or `hidden`, because the
 * cruder approaches are exactly what a bot checks for before deciding a field
 * is a trap. Keep the name generic: "website" is the field bots most reliably
 * fill.
 *
 * Pass `value`/`onChange` for a controlled form; omit both where the form reads
 * its values off the DOM at submit time.
 */

interface HoneypotProps {
  /** Unique when two forms share a page. Defaults to the field name. */
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Honeypot = ({ id = 'website', value, onChange }: HoneypotProps) => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0
    }}
  >
    <label htmlFor={id}>No rellenar este campo</label>
    <input
      id={id}
      name="website"
      type="text"
      tabIndex={-1}
      autoComplete="off"
      {...(value === undefined ? {} : { value, onChange })}
    />
  </div>
);
