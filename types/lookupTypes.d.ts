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
/** A dated span in a person's life, e.g. a reign. */
export type MentionNameYearRange = {
    /** What the span is, e.g. `reign` or `coregency`. */
    type: string;
    start: number;
    end: number;
};
/** An external reference about a record. */
export type MentionNameLink = {
    /** The source, e.g. `wikipedia`, `easton`, `newadvent`. */
    type: string;
    url: string;
};
/**
 * One person/name record — what `NamesLookupManager` searches and returns, and
 * what an `@` mention shows. Fields holding other records (`parents`,
 * `locations`, …) hold their ids; resolve them with `getRecordsByIds`.
 */
export type MentionNameMatch = {
    /** Stable record id; mentions in saved notes refer to it. */
    id: string;
    /** The name as printed in this dataset's Bible text. */
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
    /** A former name (e.g. Abram for Abraham), searchable like `name`; `null` when none. */
    oldName: string | null;
    /**
     * A one-line identification ("prophet who led Israel out of Egypt"). Like
     * `description`, it may carry inline reference links:
     * `[Egypt](location-id://…)`, `[Amram](name-id://…)`,
     * `[Genesis 1:1](verse-key://GEN 1:1)`, `[Genesis](book-key://GEN)`,
     * `[Genesis 14](chapter-key://GEN 14)`.
     */
    title: string;
    /** A paragraph about the person, with the same inline links as `title`. */
    description: string;
    /** `male`, `female` or `unknown` in the generated datasets; `''` when absent. */
    gender: string;
    /** Age as stated in the text (e.g. `120 years`); `''` when unknown. */
    age: string;
    /** Dated spans such as a king's reign; usually empty. */
    years: Array<MentionNameYearRange>;
    /** Ids of location records tied to the person. */
    locations: Array<string>;
    /** Ids of name records. */
    spouses: Array<string>;
    /** Ids of name records. */
    children: Array<string>;
    /** Ids of name records. */
    parents: Array<string>;
    /** Ids of name records. */
    siblings: Array<string>;
    /** Ids of name records. */
    cousin: Array<string>;
    /** The raw type; `normalizeMentionNameType` maps it to a {@link MentionNameType}. */
    type: string;
    /**
     * Short verse keys where the Bible prints the name, e.g. `GEN 1:1` or a
     * collapsed range `1SA 17:1-4` (so the array length is not a verse count).
     */
    verses: Array<string>;
    /** External references (Wikipedia, Easton's, New Advent…). */
    links: Array<MentionNameLink>;
    /** The record's Wikipedia URL, or `null`. */
    wikipedia: string | null;
    /**
     * How much the record matters, ascending: 0 is the most important on this
     * dataset's scale. Orders every listing and breaks ties in search. Records
     * without a rank get `Infinity` and sort to the very end.
     */
    matterRange: number;
};
/**
 * A name record as the mention UI displays it: the dataset record, or a
 * fallback built from what a mention in the note carries when the dataset has
 * no such record. `id` is `null` when the mention has no record id.
 */
export type MentionNamePreview = Omit<MentionNameMatch, 'id'> & {
    id: string | null;
};
/** WGS 84 decimal degrees. */
export type MentionLocationCoordinates = {
    latitude: number;
    longitude: number;
};
/** An external reference about a location; same shape as {@link MentionNameLink}. */
export type MentionLocationLink = {
    type: string;
    url: string;
};
/**
 * One place/location record — what `LocationsLookupManager` searches and
 * returns, and what a `#` mention shows.
 */
export type MentionLocationMatch = {
    /** Stable record id; mentions in saved notes refer to it. */
    id: string;
    /** The name as printed in this dataset's Bible text. */
    name: string;
    /** The KJV English name; see {@link MentionNameMatch.kjvName}. */
    kjvName: string | null;
    /** A former name, searchable like `name`; `null` when none. */
    oldName: string | null;
    /** A one-line identification, with inline reference links like {@link MentionNameMatch.title}. */
    title: string;
    /** A paragraph about the place, with the same inline links. */
    description: string;
    /** The kind of place, e.g. `city`, `region`, `mountain`. */
    type: string;
    /** Ids of other location records. */
    relatedLocations: Array<string>;
    /** The modern site or name, when known. */
    modernIdentification: string | null;
    coordinates: MentionLocationCoordinates | null;
    /** Short verse keys where the Bible prints the name; ranges are collapsed. */
    verses: Array<string>;
    /** External references (Wikipedia, Easton's, New Advent…). */
    links: Array<MentionLocationLink>;
    /** The record's Wikipedia URL, or `null`. */
    wikipedia: string | null;
    /** `true` when the identification or location is uncertain. */
    uncertainty: boolean;
    /** Importance rank on the same scale as {@link MentionNameMatch.matterRange}. */
    matterRange: number;
};
/**
 * A location record as the mention UI displays it: the dataset record, or a
 * fallback built from what a mention in the note carries. `id` is `null` when
 * the mention has no record id.
 */
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
/**
 * The records of a raw dataset collection, whether it is an id-keyed object or
 * a plain array; `[]` for anything else.
 */
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
