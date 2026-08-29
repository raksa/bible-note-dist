/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { MentionLocationMatch, MentionNameMatch, MentionNameType, VerseRecordIdsMap } from './lookupTypes';
export type { MentionLocationCoordinates, MentionLocationLink, MentionLocationMatch, MentionLocationPreview, MentionNameLink, MentionNameMatch, MentionNamePreview, MentionNameType, MentionNameYearRange, VerseRecordIdsMap, } from './lookupTypes';
export { getLookupRecordValues, normalizeMentionNameType, parseMentionLocationMatch, parseMentionLocationMatches, parseMentionNameMatch, parseMentionNameMatches, } from './lookupTypes';
export type LookupSearchOptions = {
    lang?: string;
    limit?: number;
};
export type LookupPaginationOptions = {
    query?: string;
    lang?: string;
    page?: number;
    pageSize?: number;
};
export type LookupPaginationResult<TRecord> = {
    lang: string;
    totalRecords: number;
    page: number;
    totalPages: number;
    pageSize: number;
    records: Array<TRecord>;
};
export type NamesLookupSearchOptions = LookupSearchOptions & {
    type?: MentionNameType;
};
export type NamesLookupPaginationOptions = LookupPaginationOptions & {
    type?: MentionNameType;
};
export type NameTypeCount = {
    type: MentionNameType;
    count: number;
};
export type NamesLookupManagerLangData = {
    records: ReadonlyArray<MentionNameMatch>;
    /** Short verse key (e.g. `"EXO 6:23"`) to the ids of the names it mentions. */
    versePersonsMap?: VerseRecordIdsMap;
};
export type NamesLookupManagerDataMap = {
    [langCode: string]: NamesLookupManagerLangData;
};
export type LocationsLookupManagerLangData = {
    records: ReadonlyArray<MentionLocationMatch>;
    /** Short verse key (e.g. `"EXO 6:23"`) to the ids of the locations it mentions. */
    verseLocationsMap?: VerseRecordIdsMap;
};
export type LocationsLookupManagerDataMap = {
    [langCode: string]: LocationsLookupManagerLangData;
};
type LookupRecordLike = {
    id: string;
    name: string;
    oldName: string | null;
    matterRange: number;
};
type LookupIndex<TRecord extends LookupRecordLike> = {
    sorted: Array<TRecord>;
    byId: Map<string, TRecord>;
    byName: Map<string, Array<TRecord>>;
    searchText: Array<string>;
    nameLower: Array<string>;
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
    private readonly indexes;
    constructor(dataMap: {
        [langCode: string]: TLangData;
    }, defaultLang: string, dataMapLabel: string);
    get defaultLang(): string;
    set defaultLang(lang: string);
    get langs(): ReadonlyArray<string>;
    /** Total number of records in a language, ignoring any query. */
    getRecordCount(lang?: string): number;
    /** Every record in a language, in importance order. */
    getAllRecords(lang?: string): Array<TRecord>;
    getRecordById(id: string, lang?: string): TRecord | null;
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
export declare class NamesLookupManager extends LookupManager<MentionNameMatch, NamesLookupManagerLangData> {
    private readonly nameTypeCounts;
    constructor(dataMap: NamesLookupManagerDataMap, defaultLang: string);
    /**
     * Builds a manager straight from the generated dataset files, i.e. whatever
     * `fetch('data/KJV/namesMap.json')` resolved to, keyed by language code. Use this
     * unless you already hold normalized {@link MentionNameMatch} records.
     */
    static fromRawDataset(rawDataMap: {
        [langCode: string]: unknown;
    }, defaultLang: string): NamesLookupManager;
    /** An empty manager, used wherever a host has not supplied a dataset yet. */
    static createEmpty(): NamesLookupManager;
    /**
     * The name types actually present in the data, most common first, so a type
     * filter only ever offers choices that would return results.
     */
    getNameTypes(lang?: string): ReadonlyArray<NameTypeCount>;
    /** The name types present in the default language. */
    get nameTypes(): ReadonlyArray<NameTypeCount>;
    searchNames(query: string, options?: NamesLookupSearchOptions): Array<MentionNameMatch>;
    searchNamesPagination(options?: NamesLookupPaginationOptions): LookupPaginationResult<MentionNameMatch>;
    /** The names a short verse key (e.g. `"EXO 6:23"`) mentions. */
    searchByShortVerse(shortVerse: string, lang?: string): Array<MentionNameMatch>;
    protected getVerseRecordIds(langData: NamesLookupManagerLangData): VerseRecordIdsMap;
}
export declare class LocationsLookupManager extends LookupManager<MentionLocationMatch, LocationsLookupManagerLangData> {
    constructor(dataMap: LocationsLookupManagerDataMap, defaultLang: string);
    /**
     * Builds a manager straight from the generated dataset files, i.e. whatever
     * `fetch('data/KJV/locationsMap.json')` resolved to, keyed by language code.
     * Older generated files stored the records under `namesMap`, so both keys are
     * accepted.
     */
    static fromRawDataset(rawDataMap: {
        [langCode: string]: unknown;
    }, defaultLang: string): LocationsLookupManager;
    /** An empty manager, used wherever a host has not supplied a dataset yet. */
    static createEmpty(): LocationsLookupManager;
    searchLocations(query: string, options?: LookupSearchOptions): Array<MentionLocationMatch>;
    searchLocationsPagination(options?: LookupPaginationOptions): LookupPaginationResult<MentionLocationMatch>;
    /** The locations a short verse key (e.g. `"EXO 6:23"`) mentions. */
    searchByShortVerse(shortVerse: string, lang?: string): Array<MentionLocationMatch>;
    protected getVerseRecordIds(langData: LocationsLookupManagerLangData): VerseRecordIdsMap;
}
