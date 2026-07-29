import type { ReactNode } from 'react';
export type BibleNoteFooterActionButton = {
    id: string;
    description?: string;
    shortcutKey?: string;
    children: ReactNode;
};
export type BibleNoteFooterActionButtonPlacement = 'before' | 'after';
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
