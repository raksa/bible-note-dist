/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import BibleNote from './BibleNote';
import BibleNoteSettings from './params/BibleNoteSettings';
export { BibleNote, BibleNoteSettings };
export default BibleNote;
export { EDITOR_STATE_LOCAL_STORAGE_KEY } from './editorStateStorage';
export { applyBibleNoteColorScheme, clearBibleNoteColorScheme, } from './params/colorScheme';
export { BIBLE_NOTE_STORAGE_MANAGER_KEYS, createBrowserStorageManager, } from './storageManager';
export type { BibleNoteFooterActionButton, BibleNoteFooterActionButtonPlacement, BibleNoteFooterActionButtons, } from './footerActionButtons';
export type { BibleNoteProps, BibleNoteRenderOptions, } from './bibleNoteHelpers';
export type { LocationsMapData, LookupDataType, LookupLangData, NamesMapData, } from './lookupData';
export type { BibleNoteColorScheme } from './params/colorScheme';
export type { BibleNoteSettingsProps } from './params/BibleNoteSettings';
export type { BibleNoteStorageManager } from './storageManager';
export type { FilePathResolver, FilePathResolverContext, FilePathSource, FileRevealer, } from './utils/filePathResolver';
export type { ExtraFontFamilyOption, FontFamilyOption, } from './utils/fontFamilyOptions';
