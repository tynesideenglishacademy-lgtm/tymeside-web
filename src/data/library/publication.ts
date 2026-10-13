import type { ContentStatus } from '../studentResources';

/**
 * Draft material is only shown when the app runs in dev or when the build sets
 * VITE_SHOW_DRAFT_RESOURCES=true (for example on a Vercel *Preview* environment
 * used for teacher review). A production build without the variable never
 * shows draft items, so merging a branch cannot publish unreviewed material.
 */
export const showDraftContent: boolean =
  import.meta.env.DEV || import.meta.env.VITE_SHOW_DRAFT_RESOURCES === 'true';

export const isVisible = (item: { status?: ContentStatus }): boolean =>
  item.status !== 'draft' || showDraftContent;
