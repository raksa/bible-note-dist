/**
 * The storage key of the note itself. The editor never hands this key to the
 * host's `storageManager`: reads and writes of it go to `loadData` / `saveData`
 * instead.
 */
export declare const EDITOR_STATE_LOCAL_STORAGE_KEY = "lexical-playground-editor-state";
export declare const SHARED_EDITOR_STATE_QUERY_PARAM = "editor-state";
export declare const SHARED_EDITOR_STATE_PASSWORD_PREFIX = "pwdecrypted:";
type SharedEditorStatePasswordRequest = (options: {
    message: string;
    retry: boolean;
}) => Promise<string | null> | string | null;
export declare function buildSharedEditorStateUrl(serializedEditorState: string, href?: string): string | null;
export declare function buildPasswordProtectedSharedEditorStateUrl(serializedEditorState: string, password: string, href?: string): Promise<string | null>;
export declare function hasPasswordProtectedSharedEditorStateParam(): boolean;
export declare function isSharedEditorStateEncryptionSupported(): boolean;
export declare function getStoredEditorStateAsync(options?: {
    requestPassword?: SharedEditorStatePasswordRequest;
}): Promise<null | string>;
export declare function getStoredEditorState(): null | string;
export declare function writeStoredEditorState(serializedEditorState: string): void;
export declare function clearStoredEditorState(): void;
export {};
