interface SectionHeaderProps {
  /** Stable section id exposed as a data attribute for styling and testing. */
  section: string;
  label: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  /** Switches the lead paragraph to the light-on-navy colour. */
  onDark?: boolean;
  /**
   * Drops the bottom margin, for headers placed inside a layout that already
   * spaces them — e.g. the blog header, which shares a flex row with a button.
   */
  flush?: boolean;
}

/**
 * The one section header used across the whole page.
 *
 * Every section previously hand-rolled the same pill + centred H2 + 64px amber
 * dash, which is why the page read as a template.
 */
const SectionHeader = ({
  section,
  label,
  title,
  lead,
  align = 'left',
  onDark = false,
  flush = false,
}: SectionHeaderProps) => (
  <div
    className={`section-head${align === 'center' ? ' section-head-center' : ''}`}
    style={flush ? { marginBottom: 0 } : undefined}
  >
    <div className="section-head-label" data-section={section}>{label}</div>

    <h2>{title}</h2>

    {lead && (
      <p className={`section-head-lead${onDark ? ' section-head-lead-dark' : ''}`}>
        {lead}
      </p>
    )}
  </div>
);

export default SectionHeader;
