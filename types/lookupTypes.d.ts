/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * The set of name "types" carried by biblical name records. Each type maps to a
 * distinct icon so mentions can be told apart at a glance in the editor pills,
 * the typeahead menu, the hover card, and the advanced panel.
 *
 * When adding a new type here, add a matching `data-lexical-mention-name-type`
 * mask rule in `AppComp.scss` so the editor pill icon stays in sync, and an
 * entry in `NAME_TYPE_ICON_CLASS` in `plugins/MentionNamePlugin/nameTypeIcons`.
 */
export type MentionNameType = 'person' | 'concept' | 'place' | 'group' | 'deity' | 'month' | 'supernatural' | 'life' | 'unknown';
/**
 * Normalizes a raw record `type` value to one of the known {@link MentionNameType}
 * keys. Unrecognized or empty values fall back to `person`, the neutral default
 * used for untyped name records.
 */
export declare function normalizeMentionNameType(type: string | null | undefined): MentionNameType;
export type MentionNameYearRange = {
    type: string;
    start: number;
    end: number;
};
export type MentionNameLink = {
    type: string;
    url: string;
};
export type MentionNameMatch = {
    id: string;
    name: string;
    /**
     * The KJV English name, carried only by translated datasets (the km-BFBS
     * mirror and any future one) where `name` holds the translated form. `null`
     * on the KJV dataset itself, whose `name` already is the English one.
     *
     * The lookup managers index it alongside `name`, so a translated dataset
     * stays searchable by its English name, and the UI shows it beside the
     * translated name the way a Bible book reads "លោកុប្បត្តិ (Genesis)".
     */
    kjvName: string | null;
    oldName: string | null;
    title: string;
    description: string;
    gender: string;
    age: string;
    years: Array<MentionNameYearRange>;
    locations: Array<string>;
    spouses: Array<string>;
    children: Array<string>;
    parents: Array<string>;
    siblings: Array<string>;
    cousin: Array<string>;
    type: string;
    verses: Array<string>;
    links: Array<MentionNameLink>;
    wikipedia: string | null;
    matterRange: number;
};
export type MentionNamePreview = Omit<MentionNameMatch, 'id'> & {
    id: string | null;
};
export type MentionLocationCoordinates = {
    latitude: number;
    longitude: number;
};
export type MentionLocationLink = {
    type: string;
    url: string;
};
export type MentionLocationMatch = {
    id: string;
    name: string;
    /** The KJV English name; see {@link MentionNameMatch.kjvName}. */
    kjvName: string | null;
    oldName: string | null;
    title: string;
    description: string;
    type: string;
    relatedLocations: Array<string>;
    modernIdentification: string | null;
    coordinates: MentionLocationCoordinates | null;
    verses: Array<string>;
    links: Array<MentionLocationLink>;
    wikipedia: string | null;
    uncertainty: boolean;
    matterRange: number;
};
export type MentionLocationPreview = Omit<MentionLocationMatch, 'id'> & {
    id: string | null;
};
/**
 * The English name worth showing beside a record's own name, or `null` when
 * there is nothing to add — an untranslated (KJV) dataset, or a record whose
 * translated name is the English one anyway. Display it the way a Bible book
 * reads in a translated UI: `លោកុប្បត្តិ (Genesis)`.
 */
export declare function getMentionKjvName(record: {
    name: string;
    kjvName: string | null;
}): string | null;
export declare function getTrimmedString(value: unknown): string;
export declare function getNullableTrimmedString(value: unknown): string | null;
export declare function getTrimmedStringArray(value: unknown): Array<string>;
export declare function getLookupRecordValues(value: unknown): Array<unknown>;
/**
 * Normalizes one raw dataset entry into a {@link MentionNameMatch}, or returns
 * `null` when it carries no usable identity. The literal id `'id'` is rejected
 * because some generated files carry a header row.
 */
export declare function parseMentionNameMatch(value: unknown): MentionNameMatch | null;
/**
 * Normalizes one raw dataset entry into a {@link MentionLocationMatch}, or
 * returns `null` when it carries no usable identity.
 */
export declare function parseMentionLocationMatch(value: unknown): MentionLocationMatch | null;
/** Parses a whole dataset value (array or id-keyed object) into name records. */
export declare function parseMentionNameMatches(value: unknown): Array<MentionNameMatch>;
/** Parses a whole dataset value (array or id-keyed object) into location records. */
export declare function parseMentionLocationMatches(value: unknown): Array<MentionLocationMatch>;
export type VerseRecordIdsMap = Record<string, ReadonlyArray<string>>;
export declare function parseVerseRecordIdsMap(value: unknown): VerseRecordIdsMap;
