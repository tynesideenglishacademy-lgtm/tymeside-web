import { sectionIndex } from '../lib/sections';

interface SectionHeaderProps {
  /**
   * Section id from src/lib/sections.ts. The two-digit marker is derived from
   * its position there rather than passed in, so a section that is hidden or
   * reordered can never leave a hole in the sequence.
   */
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
    <div className="section-head-label">
      <span className="section-head-num">{sectionIndex(section)}</span>
      {/* Decorative: the label text alongside it already carries the meaning. */}
      <span className="section-head-rule" aria-hidden="true" />
      <span>{label}</span>
    </div>

    <h2>{title}</h2>

    {lead && (
      <p className={`section-head-lead${onDark ? ' section-head-lead-dark' : ''}`}>
        {lead}
      </p>
    )}
  </div>
);

export default SectionHeader;
