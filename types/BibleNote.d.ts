import type { BibleNoteFloatingActionButton } from './floatingActionButtons';
import type { BibleNoteFooterActionButton } from './footerActionButtons';
import type { BibleNoteColorScheme } from './params/colorScheme';
import { type BibleNoteProps, type BibleNoteRenderOptions } from './bibleNoteHelpers';
export type { BibleNoteFloatingActionButton, BibleNoteFloatingActionButtonClickEvent, BibleNoteFloatingActionButtons, BibleNoteSelectionPoint, BibleNoteTextSelection, } from './floatingActionButtons';
export type { BibleNoteFooterActionButton, BibleNoteFooterActionButtons, } from './footerActionButtons';
/**
 * The BibleNote editor. Construct it with the host's datasets and storage
 * callbacks, then {@link BibleNote.render | render} it into an element.
 *
 * Every editor-backed method (`content`, `addText`, `searchText`, …) can be
 * called before `render`: writes are queued and applied once the editor has
 * mounted, and reads return an empty value until then.
 */
declare class BibleNote {
    /** The package version this bundle was built from. */
    static VERSION: string;
    /** The props the instance was constructed with. */
    props: Readonly<BibleNoteProps>;
    /**
     * The colour scheme last applied — by {@link BibleNote.setColorScheme} or the
     * settings panel's Dark Mode switch. Read it; change it with `setColorScheme`.
     */
    colorScheme: BibleNoteColorScheme;
    private editorController;
    private pendingEditorActions;
    private pendingColorScheme;
    private readOnlyOverride;
    private footerActionButtonController;
    private readonly footerActionButtons;
    private floatingActionButtonController;
    private readonly floatingActionButtons;
    private root;
    private settingsController;
    private readonly editorControllerOwner;
    private readonly footerActionButtonControllerOwner;
    private readonly floatingActionButtonControllerOwner;
    private readonly storageManager;
    private readonly settingsControllerOwner;
    /** Creates the editor; nothing is rendered until `render` is called. */
    constructor(props: BibleNoteProps);
    /**
     * The note as a serialized Lexical editor state (a JSON string) — the same
     * string `saveData` receives. Reads `''` until the editor has mounted.
     * Assigning replaces the whole document; assigning `''` clears it.
     */
    get content(): string;
    set content(value: string);
    /**
     * Whether the note is locked against editing. Assigning `true` forces
     * read-only mode: the footer's lock turns into **Read-Only Mode Locked** and
     * the user cannot unlock it. Assigning `false` releases that lock and makes
     * the note editable.
     */
    get isReadOnly(): boolean;
    set isReadOnly(value: boolean);
    /**
     * Whether the caret is in the editor right now: the window has focus, the
     * editor is the active element, and the selection is a collapsed caret inside
     * it. A host can use this to decide whether to send text to `addText`.
     */
    getIsFocusing(): boolean;
    /**
     * Switches the editor between light and dark. Applies the body classes at
     * once (see `applyBibleNoteColorScheme`) and keeps the settings panel's Dark
     * Mode switch in step.
     */
    setColorScheme(mode: BibleNoteColorScheme): void;
    /**
     * Inserts text at the caret, or at the end of the note when there is no
     * selection, exactly as if the user had pasted it as plain text — so the
     * paste rules apply: Bible text pasted right after a `^` becomes a verse
     * mention. Ignored while the note is read-only or when `text` is empty.
     */
    addText(text: string): void;
    /**
     * Adds a host button after the footer's built-in buttons. A button whose `id`
     * is already present is replaced in place, keeping its position.
     */
    appendFooterActionButton(actionButton: BibleNoteFooterActionButton): void;
    /**
     * Adds a host button before the footer's built-in buttons, ahead of any
     * prepended earlier. A button whose `id` is already present is replaced in
     * place, keeping its position.
     */
    prependFooterActionButton(actionButton: BibleNoteFooterActionButton): void;
    /** The host footer button with this `id`, or `null`. */
    getFooterActionButton(id: string): BibleNoteFooterActionButton | null;
    /** Removes the host footer button with this `id`; `false` when there was none. */
    removeFooterActionButton(id: string): boolean;
    /**
     * Adds a host button to the floating toolbar that appears over selected
     * text, after its built-in buttons (after Insert comment). Its `onClick`
     * receives the selection — text, HTML and range — and can replace the
     * selected text. A button whose `id` is already present is replaced in
     * place, keeping its position.
     */
    appendFloatingActionButton(actionButton: BibleNoteFloatingActionButton): void;
    /**
     * Adds a host button to the floating toolbar before its built-in buttons
     * (before Bold), ahead of any prepended earlier. A button whose `id` is
     * already present is replaced in place, keeping its position.
     */
    prependFloatingActionButton(actionButton: BibleNoteFloatingActionButton): void;
    /** The host floating toolbar button with this `id`, or `null`. */
    getFloatingActionButton(id: string): BibleNoteFloatingActionButton | null;
    /**
     * Removes the host floating toolbar button with this `id`; `false` when there
     * was none.
     */
    removeFloatingActionButton(id: string): boolean;
    private syncFooterActionButtons;
    private syncFloatingActionButtons;
    private runOrQueueEditorAction;
    private connectEditorController;
    private connectSettingsController;
    private connectFooterActionButtonController;
    private connectFloatingActionButtonController;
    private syncColorSchemeFromSettings;
    /**
     * Drives the editor's find bar. A string opens the bar (or updates the query
     * if it is already open); `null` closes it. Queued until the editor mounts,
     * like the other editor-backed methods.
     */
    searchText(query: string | null): void;
    /**
     * Mounts the editor into `containerElement` with its own React root.
     * Rendering again unmounts the previous root first, so an instance is only
     * ever mounted once.
     */
    render(containerElement: HTMLElement, options?: BibleNoteRenderOptions): void;
    /**
     * Unmounts the editor. The instance keeps its props, footer buttons and
     * floating toolbar buttons and can be rendered again.
     */
    unmount(): void;
    /**
     * Every short verse reference (`GEN 1:1`) the given note content mentions, in
     * document order and without duplicates. Takes what `content` returns — a
     * serialized editor state — or plain text, and reads both the Bible verse
     * mentions and any reference written in the prose. Ranges inside one chapter
     * are expanded verse by verse; a range crossing a chapter boundary keeps only
     * its endpoints, because per-chapter verse counts are not bundled here.
     */
    static getAllShortVersesFromText(lexicalText: string): Array<string>;
}
export { BibleNote };
export default BibleNote;
