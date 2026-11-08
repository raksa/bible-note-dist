import type { JSX } from 'react';
import type { BibleNoteColorScheme } from './colorScheme';
/** Props of `BibleNoteSettings`. */
export type BibleNoteSettingsProps = {
    /**
     * Called when the Dark Mode switch flips. Pass
     * `(mode) => bibleNote.setColorScheme(mode)` so the instance stays in step.
     */
    setColorScheme: (mode: BibleNoteColorScheme) => void;
};
/**
 * The editor's settings panel — a gear button that opens the switches (Dark
 * Mode, Table Of Contents, …). Pass it to `render` as `options.settings`;
 * settings persist through the storage manager.
 */
export default function BibleNoteSettings({ setColorScheme, }: BibleNoteSettingsProps): JSX.Element;
