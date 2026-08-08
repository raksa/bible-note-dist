/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { LibraryItems } from './excalidrawTypes';
import { type JSX, type ReactNode } from 'react';
import { type BibleNoteFooterActionButtonControllerOwner } from './footerActionButtons';
import type { LocationsLookupManager, NamesLookupManager } from './LookupManager';
import type { ExtraFontFamilyOption } from './utils/fontFamilyOptions';
import { type BibleNoteColorScheme } from './params/colorScheme';
import { type BibleNoteStorageManager } from './storageManager';
import type { FilePathResolver, FileRevealer } from './utils/filePathResolver';
type PlaygroundAppProps = {
    detectTextLanguage?: (text: string) => string;
    namesLookupManager?: NamesLookupManager;
    locationsLookupManager?: LocationsLookupManager;
    editorController?: BibleNoteEditorControllerOwner;
    editorExtraFontFamilies?: ReadonlyArray<ExtraFontFamilyOption>;
    excalidrawClearLibrariesFileList?: () => void;
    excalidrawLibraryItems?: LibraryItems;
    excalidrawLoadLibrariesFileList?: () => string[];
    excalidrawSaveLibrariesFile?: (librariesFile: string) => void;
    footerActionButtonController?: BibleNoteFooterActionButtonControllerOwner;
    isMinimize: boolean;
    isOnApp: boolean;
    print?: () => void;
    resolveFilePath?: FilePathResolver;
    revealFile?: FileRevealer;
    settings?: ReactNode;
    settingsContainerElement?: Element | DocumentFragment;
    settingsController?: BibleNoteSettingsControllerOwner;
    stickyNoteExtraFontFamilies?: ReadonlyArray<string>;
    storageManager?: BibleNoteStorageManager;
    shortToVerseData?: (shortText: string) => Promise<{
        title: string;
        fullText: string;
    } | null>;
    verseFullTextToListShorts?: (fullText: string) => Promise<string[] | null>;
    changeBibleKey?: (event: React.MouseEvent<HTMLButtonElement>, verseFullText: string) => Promise<{
        title: string;
        fullText: string;
    } | null>;
};
type BibleNoteSettingsController = {
    setColorScheme: (mode: BibleNoteColorScheme) => void;
};
export type BibleNoteSettingsControllerOwner = {
    connectSettingsController: (controller: BibleNoteSettingsController, currentColorScheme: BibleNoteColorScheme) => () => void;
    syncColorSchemeFromSettings: (mode: BibleNoteColorScheme) => void;
};
type BibleNoteEditorController = {
    addText: (text: string) => void;
    getContent: () => string;
    getIsFocusing: () => boolean;
    getIsReadOnly: () => boolean;
    searchText: (query: string | null) => void;
    setContent: (value: string) => void;
    setReadOnly: (value: boolean) => void;
};
export type BibleNoteEditorControllerOwner = {
    connectEditorController: (controller: BibleNoteEditorController) => () => void;
};
export declare function BibleNoteApp({ detectTextLanguage, editorController, editorExtraFontFamilies, excalidrawClearLibrariesFileList, excalidrawLibraryItems, excalidrawLoadLibrariesFileList, excalidrawSaveLibrariesFile, footerActionButtonController, isMinimize, isOnApp, print, resolveFilePath, revealFile, settings, settingsContainerElement, settingsController, stickyNoteExtraFontFamilies, shortToVerseData, verseFullTextToListShorts, changeBibleKey, }: PlaygroundAppProps): JSX.Element;
export declare function AppComp({ detectTextLanguage, namesLookupManager, locationsLookupManager, editorController, editorExtraFontFamilies, excalidrawClearLibrariesFileList, excalidrawLibraryItems, excalidrawLoadLibrariesFileList, excalidrawSaveLibrariesFile, footerActionButtonController, print, resolveFilePath, revealFile, settings, settingsContainerElement, settingsController, stickyNoteExtraFontFamilies, storageManager, isMinimize, isOnApp, shortToVerseData, verseFullTextToListShorts, changeBibleKey, }: PlaygroundAppProps): JSX.Element;
export {};
