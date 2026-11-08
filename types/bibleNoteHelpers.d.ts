import type { CSSProperties, ReactNode } from 'react';
import type { LibraryItems } from './excalidrawTypes';
import type { Root } from 'react-dom/client';
import type { BibleNoteEditorControllerOwner, BibleNoteSettingsControllerOwner } from './AppComp';
import type { BibleNoteFloatingActionButtonControllerOwner } from './floatingActionButtons';
import type { BibleNoteFooterActionButtonControllerOwner } from './footerActionButtons';
import type { BibleNoteColorScheme } from './params/colorScheme';
import type { BibleNoteStorageManager } from './storageManager';
import type { FilePathResolver, FileRevealer } from './utils/filePathResolver';
import type { ExtraFontFamilyOption } from './utils/fontFamilyOptions';
import type { LocationsLookupManager, NamesLookupManager } from './LookupManager';
export type BibleNoteSettingsController = {
    setColorScheme: (mode: BibleNoteColorScheme) => void;
};
export type BibleNoteEditorController = Parameters<BibleNoteEditorControllerOwner['connectEditorController']>[0];
/** A Bible verse as the host renders it: a title line plus the full text. */
type MentionedBibleDataType = {
    /** The verse reference as displayed, e.g. `(KJV) Genesis 1:1`. */
    title: string;
    /**
     * The title line followed by the verse lines, in the same shape the editor
     * accepts when Bible text is pasted after `^`:
     * `(KJV) Genesis 1:1\n(1): In the beginning…`.
     */
    fullText: string;
    /** Extra CSS for this verse's text, e.g. a font for a non-Latin version. */
    style?: CSSProperties;
};
/** Everything `new BibleNote(props)` needs from the host application. */
export type BibleNoteProps = {
    /**
     * The person dataset behind `@` mentions, hover cards, the advanced panel
     * and the lookup panel. Build it with `NamesLookupManager.fromRawDataset`.
     */
    namesLookupManager: NamesLookupManager;
    /**
     * The place dataset behind `#` mentions, hover cards, the advanced panel and
     * the lookup panel. Build it with `LocationsLookupManager.fromRawDataset`.
     */
    locationsLookupManager: LocationsLookupManager;
    /**
     * Returns the language code of a piece of text (`'en'` for English). Used to
     * pick a font for pasted Bible text and Excalidraw text: when it returns a
     * code other than `'en'`, the editor switches to the first font in
     * `editorExtraFontFamilies` registered for that language.
     */
    getLangCode: (text: string) => string;
    /**
     * Fonts added to the toolbar's font menu and to Excalidraw, as
     * `[fontFamily, languageCode]` pairs. The host must load the font faces
     * itself; pass `[]` for the built-in fonts only.
     */
    editorExtraFontFamilies: ReadonlyArray<ExtraFontFamilyOption>;
    /** Extra Excalidraw library items, offered next to the bundled Christian library. */
    excalidrawLibraryItems?: LibraryItems;
    /** Forgets every Excalidraw library file `excalidrawSaveLibrariesFile` stored. */
    excalidrawClearLibrariesFileList?: () => void;
    /**
     * Returns the Excalidraw library files saved earlier (each a serialized
     * library JSON string); read each time the Excalidraw editor opens.
     */
    excalidrawLoadLibrariesFileList?: () => string[];
    /**
     * Persists a library the user imported in Excalidraw (a serialized library
     * JSON string) so `excalidrawLoadLibrariesFileList` can return it next time.
     */
    excalidrawSaveLibrariesFile?: (librariesFile: string) => void;
    /**
     * Extra CSS font-family values offered in the sticky-note font picker, e.g.
     * `'"Fasthand"'`. Pass `[]` for none.
     */
    stickyNoteExtraFontFamilies: ReadonlyArray<string>;
    /**
     * Stores every piece of editor state except the note itself: settings,
     * comments, read-only mode, zoom, panel state. `createBrowserStorageManager()`
     * keeps them in `localStorage`. The keys it receives are listed in
     * `BIBLE_NOTE_STORAGE_MANAGER_KEYS`.
     */
    storageManager: BibleNoteStorageManager;
    /**
     * Saves the note: called with the serialized editor state (a JSON string) on
     * every change to the document — the same string `BibleNote#content`
     * returns. Called with `''` when the stored note could not be parsed and is
     * discarded.
     */
    saveData: (data: string) => Promise<void> | void;
    /**
     * Loads the note saved by `saveData`. Return `null` or `''` for an empty
     * editor.
     */
    loadData: () => Promise<string | null> | string | null;
    /**
     * Maps a media file the user dropped or picked to a path or URL to store in
     * the note instead of embedding it as a data URL. Return `null` to fall back
     * to embedding. In a browser there is usually no path to give; in Electron
     * this is where a file's location on disk comes from.
     */
    resolveFilePath?: FilePathResolver;
    /**
     * Shows a media file's location to the user (e.g. Electron's
     * `shell.showItemInFolder`). When provided, a selected image, video, audio or
     * PDF whose source is a local file path gets a reveal button.
     */
    revealFile?: FileRevealer;
    /**
     * Replaces the footer Print button's built-in printing, which prints the note
     * laid out at the selected page size.
     */
    print?: () => void;
    /**
     * The editor is embedded in an app rather than a web page: hides the footer's
     * **Share as Link** and **Convert From Markdown** buttons. Defaults to `false`.
     */
    isOnApp?: boolean;
    /**
     * Compact footer: folds Import, Export and Editor Information into a
     * **More actions** menu. Defaults to `false`.
     */
    isMinimize?: boolean;
    /**
     * Resolves a short verse key (`GEN 1:1`) to its displayed title and text.
     * Used for verse lists in mention panels and in the Word export's References
     * appendix. Without it, those lists show the bare key.
     */
    shortToVerseData?: (shortText: string) => Promise<MentionedBibleDataType | null>;
    /**
     * Lists the short verse keys a verse mention covers, given its full text.
     * Enables the people and places mentioned in a verse, shown in that verse's
     * advanced panel and in the Word export.
     */
    verseFullTextToListShorts?: (fullText: string) => Promise<string[] | null>;
    /**
     * Offers the same verse in another Bible version. When provided, the version
     * label in a verse's advanced panel becomes a button; resolve to the verse in
     * the chosen version to open it in a new panel, or `null` to do nothing.
     */
    changeBibleKey?: (event: React.MouseEvent<HTMLButtonElement>, verseFullText: string) => Promise<MentionedBibleDataType | null>;
};
/** Options for `BibleNote#render`. */
export type BibleNoteRenderOptions = {
    /**
     * The settings panel to mount, normally `<BibleNoteSettings />`. Omit it and
     * the editor has no settings panel.
     */
    settings?: ReactNode;
    /**
     * Where to portal the `settings` panel. Without it the panel renders inside
     * the editor's own layout.
     */
    settingsContainerElement?: Element | DocumentFragment;
};
export declare function createBibleNoteStorageManager({ loadData, saveData, storageManager, }: BibleNoteProps): BibleNoteStorageManager;
export declare function renderEditor({ props, containerElement, editorControllerOwner, floatingActionButtonControllerOwner, footerActionButtonControllerOwner, settingsControllerOwner, storageManager, }: {
    props: BibleNoteProps;
    containerElement: HTMLElement;
    editorControllerOwner: BibleNoteEditorControllerOwner;
    floatingActionButtonControllerOwner: BibleNoteFloatingActionButtonControllerOwner;
    footerActionButtonControllerOwner: BibleNoteFooterActionButtonControllerOwner;
    settingsControllerOwner: BibleNoteSettingsControllerOwner;
    storageManager: BibleNoteStorageManager;
}, { settings, settingsContainerElement }?: BibleNoteRenderOptions): Root;
export {};
