import type { ReactNode } from 'react';
/** A host-supplied button in the editor's footer. */
export type BibleNoteFooterActionButton = {
    /** Unique per editor; adding a button with an existing id replaces it in place. */
    id: string;
    /**
     * What the button does. Used as the button's tooltip when the button element
     * has no `title` of its own.
     */
    description?: string;
    /**
     * A keyboard shortcut that clicks the button from anywhere in the page,
     * written as modifiers plus one key joined by `+`: `"Ctrl+Shift+K"`,
     * `"Cmd+Shift+K"`, `"Alt+Shift+K"` (`Ctrl`/`Control`, `Cmd`/`Command`/`Meta`,
     * `Alt`/`Option`, `Shift`). It is appended to the tooltip and set as
     * `aria-keyshortcuts`.
     */
    shortcutKey?: string;
    /**
     * The button itself, normally a single `<button>`. When it is a single plain
     * element, the editor adds the tooltip and `aria-keyshortcuts` to it.
     */
    children: ReactNode;
};
/** Which side of the built-in footer buttons a host button sits on. */
export type BibleNoteFooterActionButtonPlacement = 'before' | 'after';
/** The host footer buttons on each side of the built-in ones, in order. */
export type BibleNoteFooterActionButtons = Readonly<{
    before: ReadonlyArray<BibleNoteFooterActionButton>;
    after: ReadonlyArray<BibleNoteFooterActionButton>;
}>;
export type BibleNoteFooterActionButtonController = {
    setFooterActionButtons: (actionButtons: BibleNoteFooterActionButtons) => void;
};
export type BibleNoteFooterActionButtonControllerOwner = {
    connectFooterActionButtonController: (controller: BibleNoteFooterActionButtonController) => () => void;
};
export declare const EMPTY_BIBLE_NOTE_FOOTER_ACTION_BUTTONS: BibleNoteFooterActionButtons;
