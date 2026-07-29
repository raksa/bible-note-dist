export type BibleNoteStorageManager = {
    setSetting(key: string, value: unknown): Promise<void>;
    getSetting<T = unknown>(key: string): Promise<T | null>;
    deleteSetting(key: string): Promise<void>;
};
type BibleNoteStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
export declare const BIBLE_NOTE_STORAGE_MANAGER_KEYS: readonly ["lexical-playground-settings", "lexical-playground-editor-state", "lexical-playground-comments", "lexical-playground-comments-panel-open", "lexical-playground-block-text-links", "lexical-playground-read-only-mode", "lexical-playground-insert-character-picker", "lexical-playground-editor-zoom-percent"];
export declare function configureBibleNoteStorageManager(storageManager?: BibleNoteStorageManager): void;
export declare function hydrateBibleNoteStorageManager(keys: ReadonlyArray<string>): Promise<void>;
export declare function getBibleNoteStorage(): BibleNoteStorage | null;
export declare function createBrowserStorageManager(): BibleNoteStorageManager;
export {};
