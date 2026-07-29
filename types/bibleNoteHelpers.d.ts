import type { CSSProperties, ReactNode } from 'react';
import type { LibraryItems } from './excalidrawTypes';
import type { Root } from 'react-dom/client';
import type { BibleNoteEditorControllerOwner, BibleNoteSettingsControllerOwner } from './AppComp';
import type { BibleNoteFooterActionButtonControllerOwner } from './footerActionButtons';
import type { LookupDataType } from './lookupData';
import type { BibleNoteColorScheme } from './params/colorScheme';
import type { BibleNoteStorageManager } from './storageManager';
import type { FilePathResolver, FileRevealer } from './utils/filePathResolver';
import type { ExtraFontFamilyOption } from './utils/fontFamilyOptions';
export type BibleNoteSettingsController = {
    setColorScheme: (mode: BibleNoteColorScheme) => void;
};
export type BibleNoteEditorController = Parameters<BibleNoteEditorControllerOwner['connectEditorController']>[0];
type MentionedBibleDataType = {
    title: string;
    fullText: string;
    style?: CSSProperties;
};
export type { LookupDataType };
export type BibleNoteProps = {
    lookupData: LookupDataType;
    getLangCode: (text: string) => string;
    editorExtraFontFamilies: ReadonlyArray<ExtraFontFamilyOption>;
    excalidrawLibraryItems?: LibraryItems;
    excalidrawClearLibrariesFileList?: () => void;
    excalidrawLoadLibrariesFileList?: () => string[];
    excalidrawSaveLibrariesFile?: (librariesFile: string) => void;
    stickyNoteExtraFontFamilies: ReadonlyArray<string>;
    storageManager: BibleNoteStorageManager;
    saveData: (data: string) => Promise<void> | void;
    loadData: () => Promise<string | null> | string | null;
    resolveFilePath?: FilePathResolver;
    revealFile?: FileRevealer;
    print?: () => void;
    isOnApp?: boolean;
    isMinimize?: boolean;
    shortToVerseData?: (shortText: string) => Promise<MentionedBibleDataType | null>;
    verseFullTextToListShorts?: (fullText: string) => Promise<string[] | null>;
    changeBibleKey?: (event: React.MouseEvent<HTMLButtonElement>, verseFullText: string) => Promise<MentionedBibleDataType | null>;
};
export type BibleNoteRenderOptions = {
    settings?: ReactNode;
    settingsContainerElement?: Element | DocumentFragment;
};
export declare function createBibleNoteStorageManager({ loadData, saveData, storageManager, }: BibleNoteProps): BibleNoteStorageManager;
export declare function renderEditor({ props, containerElement, editorControllerOwner, footerActionButtonControllerOwner, settingsControllerOwner, storageManager, }: {
    props: BibleNoteProps;
    containerElement: HTMLElement;
    editorControllerOwner: BibleNoteEditorControllerOwner;
    footerActionButtonControllerOwner: BibleNoteFooterActionButtonControllerOwner;
    settingsControllerOwner: BibleNoteSettingsControllerOwner;
    storageManager: BibleNoteStorageManager;
}, { settings, settingsContainerElement }?: BibleNoteRenderOptions): Root;
