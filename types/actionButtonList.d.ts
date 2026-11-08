/** Which side of an editor's built-in buttons a host button sits on. */
export type ActionButtonPlacement = 'before' | 'after';
/** Host buttons on each side of an editor's built-in buttons, in order. */
export type PlacedActionButtons<T> = Readonly<{
    before: ReadonlyArray<T>;
    after: ReadonlyArray<T>;
}>;
/**
 * The host buttons of one button bar, split around its built-in buttons. Ids are
 * unique across both sides: adding a button whose id is already present
 * replaces that button in place, whatever placement is asked for.
 */
export declare class ActionButtonList<T extends {
    readonly id: string;
}> {
    private before;
    private after;
    get(id: string): T | null;
    set(actionButton: T, placement: ActionButtonPlacement): void;
    /** Removes the button with this id; `false` when there was none. */
    remove(id: string): boolean;
    snapshot(): PlacedActionButtons<T>;
}
