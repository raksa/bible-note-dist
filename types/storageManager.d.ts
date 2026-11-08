/**
 * Where the editor keeps its own state — settings, comments, read-only mode,
 * zoom, panel state — as string values under the keys in
 * `BIBLE_NOTE_STORAGE_MANAGER_KEYS`. The note itself goes through
 * `loadData` / `saveData` instead. Every key is read once, before the editor
 * first renders; writes are fire-and-forget.
 */
export type BibleNoteStorageManager = {
    /** Stores `value` (a string, or a value to `JSON.stringify`) under `key`. */
    setSetting(key: string, value: unknown): Promise<void>;
    /** The value stored under `key`, or `null` when there is none. */
    getSetting<T = unknown>(key: string): Promise<T | null>;
    /** Removes `key`. */
    deleteSetting(key: string): Promise<void>;
};
type BibleNoteStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
/**
 * Every key the editor reads from its storage manager before it renders. A
 * host-side store that needs to know its keys up front (to prefetch or migrate
 * them) can use this list.
 */
export declare const BIBLE_NOTE_STORAGE_MANAGER_KEYS: readonly ["lexical-playground-settings", "lexical-playground-editor-state", "lexical-playground-comments", "lexical-playground-comments-panel-open", "lexical-playground-block-text-links", "lexical-playground-read-only-mode", "lexical-playground-insert-character-picker", "lexical-playground-editor-zoom-percent"];
export declare function configureBibleNoteStorageManager(storageManager?: BibleNoteStorageManager): void;
export declare function hydrateBibleNoteStorageManager(keys: ReadonlyArray<string>): Promise<void>;
export declare function getBibleNoteStorage(): BibleNoteStorage | null;
/**
 * A `BibleNoteStorageManager` backed by `window.localStorage`. Non-string
 * values are stored as JSON; when `localStorage` is unavailable every call is
 * a no-op.
 */
export declare function createBrowserStorageManager(): BibleNoteStorageManager;
export {};
