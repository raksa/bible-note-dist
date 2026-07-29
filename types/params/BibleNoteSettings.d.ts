import type { JSX } from 'react';
import type { BibleNoteColorScheme } from './colorScheme';
export type BibleNoteSettingsProps = {
    setColorScheme: (mode: BibleNoteColorScheme) => void;
};
export default function BibleNoteSettings({ setColorScheme, }: BibleNoteSettingsProps): JSX.Element;
