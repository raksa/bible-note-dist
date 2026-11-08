/** The editor's two colour schemes. */
export type BibleNoteColorScheme = 'dark' | 'light';
/**
 * Applies a colour scheme to `body` (default `document.body`): toggles the
 * `playground-theme-dark` / `playground-theme-light` classes and sets
 * `data-bs-theme`, so Bootstrap's own components follow. Prefer
 * `BibleNote#setColorScheme` on a mounted editor; this is the bare DOM step.
 */
export declare function applyBibleNoteColorScheme(mode: BibleNoteColorScheme, body?: HTMLElement): void;
/** Removes the theme classes `applyBibleNoteColorScheme` added (leaves `data-bs-theme`). */
export declare function clearBibleNoteColorScheme(body?: HTMLElement): void;
