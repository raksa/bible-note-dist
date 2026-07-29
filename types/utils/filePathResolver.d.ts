export type FilePathSource = 'drop' | 'file-input';
export type FilePathResolverContext = Readonly<{
    source: FilePathSource;
}>;
export type FilePathResolver = (file: File, context: FilePathResolverContext) => Promise<string | null> | string | null;
export type FileRevealer = (filePath: string) => Promise<void> | void;
export declare function getFallbackFilePath(file: File): string;
export declare function resolveMediaFilePath(resolver: FilePathResolver | undefined, file: File, source: FilePathSource): Promise<string | null>;
export declare function isRevealableFilePath(value: string): boolean;
