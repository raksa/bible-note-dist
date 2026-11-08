/** How a media file reached the editor: dropped/pasted, or picked in the media dialog. */
export type FilePathSource = 'drop' | 'file-input';
/** Context passed to a `FilePathResolver`. */
export type FilePathResolverContext = Readonly<{
    source: FilePathSource;
}>;
/**
 * Maps a media file to the path or URL the note should reference. Return
 * `null` (or throw) to let the editor embed the file as a data URL instead.
 */
export type FilePathResolver = (file: File, context: FilePathResolverContext) => Promise<string | null> | string | null;
/** Shows a local media file to the user, e.g. in the system file manager. */
export type FileRevealer = (filePath: string) => Promise<void> | void;
export declare function getFallbackFilePath(file: File): string;
export declare function resolveMediaFilePath(resolver: FilePathResolver | undefined, file: File, source: FilePathSource): Promise<string | null>;
export declare function isRevealableFilePath(value: string): boolean;
