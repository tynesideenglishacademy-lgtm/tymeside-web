# Tyneside English Academy — site

React + Vite + TypeScript SPA for a real English academy in Murcia. Bilingual
(ES/EN) via react-i18next. See `README.md` for the generic Vite setup.

## Design guardrails

A developer looked at this site cold and said it "looks like another typical
Claude AI web." He was right, and specific enough to be useful. This section
exists so that doesn't happen again — to me, in a future session, or to any
other AI working on this repo. Skills and design tools don't produce a point
of view on their own; they encode process. The point of view has to be
pinned down somewhere durable, or every fresh session drifts back to the same
statistical-average "professional" look. This file is that anchor.

**Before adding a new UI pattern, check it against the list below first.**
If it matches, don't add it — or add it and then deliberately break it.

### Patterns to actively avoid

These aren't bad in isolation. They're avoided here because they are the
specific, recognizable signature of AI-generated design right now, and this
site has already had to remove several of them once:

- A decorative arrow/chevron icon after a CTA button that doesn't navigate
  externally. (Removed from six buttons in Sept 2026 — see git history.) An
  arrow after "Ver más" that just scrolls to `#contact` communicates nothing;
  it's a reflex, not a decision. Reserve directional icons for links that
  actually leave the site (external-link glyph on the Google reviews and IH
  Newcastle links is fine — that's informative).
- Icon-in-a-rounded-colored-square repeated identically for every item in a
  feature/service list. It's the single most common "AI SaaS template" tell.
- A stat-counter row (big bold number, small uppercase label) used more than
  once per page as generic "trust signal" filler. This site only keeps one —
  the real, sourced Google rating — precisely because the others were
  removed as unverifiable (see `src/data/testimonials.ts`).
- The "eyebrow label + centered H2 + lead paragraph" header repeated
  identically at the top of every section. `SectionHeader.tsx` already
  replaced one version of this (a pill + dash) with another (numeral + rule)
  — swapping one generic pattern for a different generic pattern doesn't fix
  the underlying issue. At least some sections should break this shape
  entirely rather than get a new variant of it.
- Uniform elevation/hover treatment on every surface (same shadow scale,
  same `translateY(-2px)` lift, same border-radius) with no variation in
  which elements actually deserve to look "raised."
- The safe, most-reached-for Google Fonts pairing for the subject (Inter,
  Space Grotesk, Playfair Display, Montserrat) chosen because it's neutral
  rather than because it says something specific about this brand.
- Warm cream + serif + terracotta, near-black + one neon accent, or a
  purple-to-blue gradient hero — the other three most common AI-generated
  palettes right now, in case a future redesign reaches for one by default.

### What actually makes this site distinctive (use these, extend them)

- **The bridge motif** (`src/components/BridgeMotif.tsx`) — a thin line-art
  through-arch silhouette at every navy/cream section seam. "Tyneside" means
  Newcastle upon Tyne; the bridge is the one unmistakable, ownable visual
  reference available and no competing academy in Murcia can use it. Prefer
  extending this real motif over inventing a new generic decorative device.
- Real, sourced numbers over invented ones. If a stat can't be traced to
  something Ben can confirm, it doesn't go on the page — see the extensive
  comments in `Hero.tsx`, `ExamPrep.tsx`, and `data/testimonials.ts`.
- Real photography of the actual academy (pending — tracked separately)
  should replace the current stock-feeling course-card images as soon as
  it's available. Nothing de-genericizes a page faster than photos that are
  obviously not stock.

### How to actually get non-generic output from an AI session (not just this one)

For whoever is directing the next round of work, human or AI:

1. **Give a specific reference, not a mood word.** "Make it look premium" is
   unenforceable. "Like Caslon-era British institutional print" or a pasted
   screenshot of a site you like (or hate) pins the target down exactly —
   see the type-pairing comparison from Sept 2026 for the format that
   worked.
2. **Anchor to something only this subject has** — real geography, real
   history, real materials — not to a design trend. The bridge motif is the
   model for this.
3. **Critique specifically, not generally.** "This card grid is the same
   shape as every pricing page" is actionable. "Make it pop" is not.
4. **Write the constraint down here, not just in chat.** A preference stated
   once in conversation doesn't survive to the next session. This file does.
