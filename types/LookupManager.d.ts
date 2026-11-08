/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { CSSProperties } from 'react';
import type { MentionLocationMatch, MentionNameMatch, MentionNameType, VerseRecordIdsMap } from './lookupTypes';
export type { MentionLocationCoordinates, MentionLocationLink, MentionLocationMatch, MentionLocationPreview, MentionNameLink, MentionNameMatch, MentionNamePreview, MentionNameType, MentionNameYearRange, VerseRecordIdsMap, } from './lookupTypes';
export { getLookupRecordValues, getMentionKjvName, normalizeMentionNameType, parseMentionLocationMatch, parseMentionLocationMatches, parseMentionNameMatch, parseMentionNameMatches, } from './lookupTypes';
/**
 * Extra inline style the UI applies wherever it renders one manager's records —
 * the mention popup and hover card, the advanced panel, and the lookup list.
 * Its purpose is a dataset-wide `fontFamily` for a language the editor's own
 * font does not cover; anything a `style` attribute accepts works.
 */
export type LookupManagerStyle = CSSProperties;
/** Options for `searchNames` / `searchLocations`. */
export type LookupSearchOptions = {
    /** Language to search; falls back to `defaultLang` when absent or unknown. */
    lang?: string;
    /** Maximum number of results; all matches when omitted. */
    limit?: number;
};
/** Options for the `…Pagination` searches. */
export type LookupPaginationOptions = {
    /** Search text; empty or omitted lists every record in importance order. */
    query?: string;
    /** Language to search; falls back to `defaultLang` when absent or unknown. */
    lang?: string;
    /** 1-based page number, clamped to the available pages. Defaults to 1. */
    page?: number;
    /** Records per page (at least 1). Defaults to 20. */
    pageSize?: number;
};
/** One page of search results. */
export type LookupPaginationResult<TRecord> = {
    /** The language actually searched. */
    lang: string;
    /** Matches across all pages. */
    totalRecords: number;
    /** The page returned, after clamping. */
    page: number;
    /** Number of pages; at least 1, even with no matches. */
    totalPages: number;
    pageSize: number;
    /** This page's records. */
    records: Array<TRecord>;
};
/** `LookupSearchOptions` plus a name-type filter. */
export type NamesLookupSearchOptions = LookupSearchOptions & {
    /** Only records of this type; applied before `limit`. */
    type?: MentionNameType;
};
/** `LookupPaginationOptions` plus a name-type filter. */
export type NamesLookupPaginationOptions = LookupPaginationOptions & {
    /** Only records of this type. */
    type?: MentionNameType;
};
/** How many records of one name type a dataset holds. */
export type NameTypeCount = {
    type: MentionNameType;
    count: number;
};
/** One language's name dataset, as `NamesLookupManager`'s constructor takes it. */
export type NamesLookupManagerLangData = {
    /** The normalized records (see `parseMentionNameMatches`). */
    records: ReadonlyArray<MentionNameMatch>;
    /** Short verse key (e.g. `"EXO 6:23"`) to the ids of the names it mentions. */
    versePersonsMap?: VerseRecordIdsMap;
};
/** Name datasets keyed by language code, e.g. `{ en: …, km: … }`. */
export type NamesLookupManagerDataMap = {
    [langCode: string]: NamesLookupManagerLangData;
};
/** One language's location dataset, as `LocationsLookupManager`'s constructor takes it. */
export type LocationsLookupManagerLangData = {
    /** The normalized records (see `parseMentionLocationMatches`). */
    records: ReadonlyArray<MentionLocationMatch>;
    /** Short verse key (e.g. `"EXO 6:23"`) to the ids of the locations it mentions. */
    verseLocationsMap?: VerseRecordIdsMap;
};
/** Location datasets keyed by language code, e.g. `{ en: …, km: … }`. */
export type LocationsLookupManagerDataMap = {
    [langCode: string]: LocationsLookupManagerLangData;
};
type LookupRecordLike = {
    id: string;
    name: string;
    kjvName: string | null;
    oldName: string | null;
    matterRange: number;
};
type LookupIndex<TRecord extends LookupRecordLike> = {
    sorted: Array<TRecord>;
    byId: Map<string, TRecord>;
    byName: Map<string, Array<TRecord>>;
    searchText: Array<string>;
    nameLower: Array<string>;
    kjvNameLower: Array<string>;
    verseRecordIds: VerseRecordIdsMap;
    queryCache: Map<string, Array<TRecord>>;
};
/**
 * Shared behaviour of both managers: language resolution, lazy per-language
 * indexing, ranked search, id/name accessors, pagination and verse lookup.
 * `NamesLookupManager` and `LocationsLookupManager` differ only in their record
 * type and in the extras each one adds.
 */
declare abstract class LookupManager<TRecord extends LookupRecordLike, TLangData extends {
    records: ReadonlyArray<TRecord>;
}> {
    protected readonly dataMap: {
        [langCode: string]: TLangData;
    };
    private currentDefaultLang;
    private currentStyle;
    private readonly indexes;
    constructor(dataMap: {
        [langCode: string]: TLangData;
    }, defaultLang: string, dataMapLabel: string, style?: LookupManagerStyle);
    /**
     * The host-supplied style for this dataset, or `undefined` when it gave none.
     * The UI merges it into the containers that render these records; like
     * `defaultLang` it is read at render time, so a host that changes it after
     * mounting must also make the editor re-render.
     */
    get style(): LookupManagerStyle | undefined;
    set style(style: LookupManagerStyle | undefined);
    /**
     * The language used when a call names none (or names one this manager does
     * not hold). Assigning a language the data map lacks throws.
     */
    get defaultLang(): string;
    set defaultLang(lang: string);
    /** The language codes this manager holds data for. */
    get langs(): ReadonlyArray<string>;
    /** Total number of records in a language, ignoring any query. */
    getRecordCount(lang?: string): number;
    /** Every record in a language, in importance order. */
    getAllRecords(lang?: string): Array<TRecord>;
    /** The record with this id (whitespace-trimmed), or `null`. */
    getRecordById(id: string, lang?: string): TRecord | null;
    /**
     * The records for these ids, in the order given; unknown and repeated ids
     * are skipped.
     */
    getRecordsByIds(ids: ReadonlyArray<string>, lang?: string): Array<TRecord>;
    /**
     * Every record carrying exactly this name. Names are not unique in the
     * datasets, so callers that need certainty check for a single result.
     */
    getRecordsByName(name: string, lang?: string): Array<TRecord>;
    /**
     * Records whose name or former name contains the query, best match first.
     * An empty query returns every record in importance order.
     */
    protected searchRecords(query: string, options?: LookupSearchOptions): Array<TRecord>;
    protected paginateRecords(records: ReadonlyArray<TRecord>, lang: string, options: LookupPaginationOptions): LookupPaginationResult<TRecord>;
    /**
     * The records a short verse key (e.g. `"EXO 6:23"`) mentions, in importance
     * order. Ids the dataset lists but does not define are dropped.
     */
    protected searchRecordsByShortVerse(shortVerse: string, lang?: string): Array<TRecord>;
    /** Resolves a requested language to one that exists: asked-for, then default. */
    protected resolveLang(lang?: string): string;
    protected getIndex(lang?: string): LookupIndex<TRecord>;
    /** Which verse map this manager indexes; the two subclasses name it differently. */
    protected abstract getVerseRecordIds(langData: TLangData): VerseRecordIdsMap;
    private getRankedMatches;
}
/**
 * Owns the person/name dataset(s): ranked search, id and name lookup,
 * pagination, name-type counts and verse → names lookup. Has no editor
 * dependency, so a host can use it to build its own UI. Indexes are built
 * lazily per language on first use.
 */
export declare class NamesLookupManager extends LookupManager<MentionNameMatch, NamesLookupManagerLangData> {
    private readonly nameTypeCounts;
    /**
     * Takes already-normalized records; prefer `fromRawDataset` for the generated
     * dataset files. Throws when `dataMap` has no `defaultLang` entry.
     */
    constructor(dataMap: NamesLookupManagerDataMap, defaultLang: string, style?: LookupManagerStyle);
    /**
     * Builds a manager straight from the generated dataset files, i.e. whatever
     * `fetch('data/KJV/namesMap.json')` resolved to, keyed by language code. Use this
     * unless you already hold normalized {@link MentionNameMatch} records.
     */
    static fromRawDataset(rawDataMap: {
        [langCode: string]: unknown;
    }, defaultLang: string, style?: LookupManagerStyle): NamesLookupManager;
    /** An empty manager, used wherever a host has not supplied a dataset yet. */
    static createEmpty(): NamesLookupManager;
    /**
     * The name types actually present in the data, most common first, so a type
     * filter only ever offers choices that would return results.
     */
    getNameTypes(lang?: string): ReadonlyArray<NameTypeCount>;
    /** The name types present in the default language. */
    get nameTypes(): ReadonlyArray<NameTypeCount>;
    /**
     * Names matching `query`. Case-insensitive substring match against the name, the KJV English
     * name (translated datasets) and the former name. Ranked exact, then prefix,
     * then substring — the better of the two names counts — and by importance
     * (`matterRange`, then alphabetical) within a tier. An empty query returns
     * every record in importance order.
     */
    searchNames(query: string, options?: NamesLookupSearchOptions): Array<MentionNameMatch>;
    /** `searchNames`, one page at a time (20 records per page by default). */
    searchNamesPagination(options?: NamesLookupPaginationOptions): LookupPaginationResult<MentionNameMatch>;
    /** The names a short verse key (e.g. `"EXO 6:23"`) mentions. */
    searchByShortVerse(shortVerse: string, lang?: string): Array<MentionNameMatch>;
    protected getVerseRecordIds(langData: NamesLookupManagerLangData): VerseRecordIdsMap;
}
/**
 * Owns the place/location dataset(s): ranked search, id and name lookup,
 * pagination and verse → locations lookup. Has no editor dependency, so a host
 * can use it to build its own UI. Indexes are built lazily per language on
 * first use.
 */
export declare class LocationsLookupManager extends LookupManager<MentionLocationMatch, LocationsLookupManagerLangData> {
    /**
     * Takes already-normalized records; prefer `fromRawDataset` for the generated
     * dataset files. Throws when `dataMap` has no `defaultLang` entry.
     */
    constructor(dataMap: LocationsLookupManagerDataMap, defaultLang: string, style?: LookupManagerStyle);
    /**
     * Builds a manager straight from the generated dataset files, i.e. whatever
     * `fetch('data/KJV/locationsMap.json')` resolved to, keyed by language code.
     * Older generated files stored the records under `namesMap`, so both keys are
     * accepted.
     */
    static fromRawDataset(rawDataMap: {
        [langCode: string]: unknown;
    }, defaultLang: string, style?: LookupManagerStyle): LocationsLookupManager;
    /** An empty manager, used wherever a host has not supplied a dataset yet. */
    static createEmpty(): LocationsLookupManager;
    /**
     * Locations matching `query`. Case-insensitive substring match against the name, the KJV English
     * name (translated datasets) and the former name. Ranked exact, then prefix,
     * then substring — the better of the two names counts — and by importance
     * (`matterRange`, then alphabetical) within a tier. An empty query returns
     * every record in importance order.
     */
    searchLocations(query: string, options?: LookupSearchOptions): Array<MentionLocationMatch>;
    /** `searchLocations`, one page at a time (20 records per page by default). */
    searchLocationsPagination(options?: LookupPaginationOptions): LookupPaginationResult<MentionLocationMatch>;
    /** The locations a short verse key (e.g. `"EXO 6:23"`) mentions. */
    searchByShortVerse(shortVerse: string, lang?: string): Array<MentionLocationMatch>;
    protected getVerseRecordIds(langData: LocationsLookupManagerLangData): VerseRecordIdsMap;
}
