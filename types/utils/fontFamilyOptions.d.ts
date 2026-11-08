/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/** A font in the toolbar's font menu: `[fontFamily, label, languageCode]`. */
export type FontFamilyOption = readonly [
    fontFamily: string,
    label: string,
    language: string
];
/**
 * A host font added to the editor: `[fontFamily, languageCode]`, e.g.
 * `['Battambang', 'km']`. The language code is what `getLangCode` returns
 * for text that should use this font.
 */
export type ExtraFontFamilyOption = readonly [
    fontFamily: string,
    language: string
];
export declare const DEFAULT_FONT_LANGUAGE = "en";
export declare const DEFAULT_FONT_FAMILY_OPTIONS: ReadonlyArray<FontFamilyOption>;
export declare function getFontFamilyOptions(extraFontFamilies: ReadonlyArray<ExtraFontFamilyOption>): Array<FontFamilyOption>;
export declare function getFontFamilyForLanguage(fontFamilyOptions: ReadonlyArray<FontFamilyOption>, language: string): string | null;
