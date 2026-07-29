import type { BibleNoteFooterActionButton } from './footerActionButtons';
import type { BibleNoteColorScheme } from './params/colorScheme';
import { type BibleNoteProps, type BibleNoteRenderOptions } from './bibleNoteHelpers';
export type { BibleNoteFooterActionButton, BibleNoteFooterActionButtons, } from './footerActionButtons';
declare class BibleNote {
    static VERSION: string;
    props: Readonly<BibleNoteProps>;
    colorScheme: BibleNoteColorScheme;
    private editorController;
    private pendingEditorActions;
    private pendingColorScheme;
    private readOnlyOverride;
    private footerActionButtonController;
    private footerActionButtons;
    private root;
    private settingsController;
    private readonly editorControllerOwner;
    private readonly footerActionButtonControllerOwner;
    private readonly storageManager;
    private readonly settingsControllerOwner;
    constructor(props: BibleNoteProps);
    get content(): string;
    set content(value: string);
    get isReadOnly(): boolean;
    set isReadOnly(value: boolean);
    getIsFocusing(): boolean;
    setColorScheme(mode: BibleNoteColorScheme): void;
    addText(text: string): void;
    appendFooterActionButton(actionButton: BibleNoteFooterActionButton): void;
    prependFooterActionButton(actionButton: BibleNoteFooterActionButton): void;
    getFooterActionButton(id: string): BibleNoteFooterActionButton | null;
    removeFooterActionButton(id: string): boolean;
    private setFooterActionButton;
    private getFooterActionButtonsSnapshot;
    private syncFooterActionButtons;
    private runOrQueueEditorAction;
    private connectEditorController;
    private connectSettingsController;
    private connectFooterActionButtonController;
    private syncColorSchemeFromSettings;
    /**
     * Drives the editor's find bar. A string opens the bar (or updates the query
     * if it is already open); `null` closes it. Queued until the editor mounts,
     * like the other editor-backed methods.
     */
    searchText(query: string | null): void;
    render(containerElement: HTMLElement, options?: BibleNoteRenderOptions): void;
    unmount(): void;
}
export { BibleNote };
export default BibleNote;
