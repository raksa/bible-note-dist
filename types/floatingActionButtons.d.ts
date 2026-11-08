import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import type { PlacedActionButtons } from './actionButtonList';
/**
 * A position in the open note, addressed the way the editor addresses it: a
 * node, and an offset inside that node.
 */
export type BibleNoteSelectionPoint = Readonly<{
    /**
     * The editor's key for the node the point sits in. Keys identify nodes of
     * the note as it is open right now: they are not saved with `content`, and
     * they change when the note is loaded again.
     */
    key: string;
    /**
     * For a `'text'` point, the character offset inside that text node. For an
     * `'element'` point, the index of the child the point sits before.
     */
    offset: number;
    /**
     * `'text'` when `key` names a text node; `'element'` when it names an element
     * node such as a paragraph or a list item.
     */
    type: 'text' | 'element';
}>;
/**
 * The text selection a floating action button was clicked on. It is a snapshot
 * taken at the click: it does not follow later edits or selection changes.
 */
export type BibleNoteTextSelection = Readonly<{
    /**
     * The selected text as plain text — what Copy puts on the clipboard as
     * `text/plain`. Paragraphs are separated by `\n`. Never empty: the toolbar
     * only appears over a selection that contains text.
     */
    text: string;
    /**
     * The selected content as HTML, formatting included — what Copy puts on the
     * clipboard as `text/html`.
     */
    html: string;
    /** Where the selection begins, in document order. */
    start: BibleNoteSelectionPoint;
    /** Where the selection ends, in document order. */
    end: BibleNoteSelectionPoint;
    /**
     * `true` when the user selected from the end back toward the start, so the
     * caret sits at `start`; `false` when the caret sits at `end`.
     */
    isBackward: boolean;
    /**
     * A copy of the browser's DOM `Range` for the selection, or `null` when the
     * browser had no selection inside the editor at the click. Use it to measure
     * the text on screen (`domRange.getBoundingClientRect()`); it stops matching
     * the page once the note changes.
     */
    domRange: Range | null;
}>;
/** What a floating action button's `onClick` receives. */
export type BibleNoteFloatingActionButtonClickEvent = Readonly<{
    /** The `id` of the button that was clicked. */
    id: string;
    /** The selection the button was clicked on. */
    selection: BibleNoteTextSelection;
    /**
     * Replaces the text of the captured selection with `text`, inserted the way
     * `BibleNote.addText` inserts it: as plain text, as if pasted, so the paste
     * rules apply and `\n` starts a new paragraph. An empty string deletes the
     * selected text. The selection is restored from `selection.start` and
     * `selection.end` first, so this still works after the user has clicked
     * elsewhere or after an `await`.
     *
     * Returns `false`, and changes nothing, when the note is read-only or when
     * that range no longer holds `selection.text` — because the note was edited
     * since the click, or the text was already replaced.
     */
    replaceText: (text: string) => boolean;
    /** The React click event of the button. */
    mouseEvent: ReactMouseEvent<HTMLButtonElement>;
}>;
/**
 * A host-supplied button in the floating toolbar that appears over selected
 * text — the bar with Bold, Italic, Underline, … and Insert comment.
 *
 * Unlike a footer button, the editor renders the `<button>` itself, so it
 * matches the built-in ones; `children` is only what goes inside it.
 */
export type BibleNoteFloatingActionButton = {
    /** Unique per editor; adding a button with an existing id replaces it in place. */
    id: string;
    /** What the button does: its tooltip and its accessible name. */
    description: string;
    /**
     * The content of the button, normally a Bootstrap icon given the `format`
     * class so it is sized and tinted like the built-in icons:
     * `<i className="bi bi-clipboard format" />`.
     */
    children: ReactNode;
    /**
     * Called on click with the selection the toolbar is showing for. Not called
     * when the selection has collapsed to a caret by the time of the click.
     */
    onClick: (event: BibleNoteFloatingActionButtonClickEvent) => void;
    /**
     * `true` shows the button only while the note can be edited, like the
     * built-in formatting buttons. By default it shows in read-only mode too,
     * like Insert comment — right for actions that only read the selection.
     */
    isHiddenWhenReadOnly?: boolean;
};
/** The host floating toolbar buttons on each side of the built-in ones, in order. */
export type BibleNoteFloatingActionButtons = PlacedActionButtons<BibleNoteFloatingActionButton>;
export type BibleNoteFloatingActionButtonController = {
    setFloatingActionButtons: (actionButtons: BibleNoteFloatingActionButtons) => void;
};
export type BibleNoteFloatingActionButtonControllerOwner = {
    connectFloatingActionButtonController: (controller: BibleNoteFloatingActionButtonController) => () => void;
};
export declare const EMPTY_BIBLE_NOTE_FLOATING_ACTION_BUTTONS: BibleNoteFloatingActionButtons;
