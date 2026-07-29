/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export type LookupLangData = {
    namesMap: object;
    locationsMap: object;
};
export type LookupDataType = {
    dataMap: {
        [langCode: string]: LookupLangData;
    };
    default: string;
};
export type NamesMapData = {
    namesMap?: unknown;
    versePersonsMap?: Record<string, ReadonlyArray<string>>;
};
export type LocationsMapData = {
    locationsMap?: unknown;
    namesMap?: unknown;
    verseLocationsMap?: Record<string, ReadonlyArray<string>>;
};
export declare function setLookupData(nextLookupData: LookupDataType | null | undefined): void;
export declare function getLookupLangData(langCode?: string): LookupLangData;
export declare function getNamesMapData(langCode?: string): NamesMapData;
export declare function getLocationsMapData(langCode?: string): LocationsMapData;
export declare function getLookupRecordValues(value: unknown): Array<unknown>;
export declare function createLookupDerived<T>(build: () => T): () => T;
