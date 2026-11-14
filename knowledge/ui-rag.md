---
title: BibleNote editor user guide
package: bible-note
version: 0.6.2
audience: people writing notes in the BibleNote editor
chunking: one chunk per level-2 heading; the JSON in the HTML comment under each heading is that chunk's metadata
chunks: 133
---

# BibleNote editor user guide

How to use the BibleNote note editor: writing and formatting notes, mentioning people, places and Bible verses, inserting tables, drawings and media, and importing, exporting and printing. Each "##" section below stands on its own and is written for the person using the editor, not for a developer. Some buttons depend on the app the editor runs in; where that is the case the section says so.

## Getting started › Find your way around the editor

<!-- chunk {"id":"ui/getting-started/find-your-way-around-the-editor","section":"Getting started","title":"Find your way around the editor","tags":["basics","layout","saving"],"source":"knowledge/ui/01-getting-started.md","package":"bible-note@0.6.2"} -->

The BibleNote editor has three parts, top to bottom.

### The toolbar

The toolbar runs along the top. From left to right it holds **Undo** and **Redo**, the text style menu (it shows **Normal** for an ordinary paragraph), the font and font size, bold, italic, underline, code and link buttons, text and background colour, more text styles, the **Insert** menu, **Show invisible characters** (¶) and the alignment menu. The toolbar only appears while the **Rich Text** setting is on, which is the default.

### The writing area

The writing area in the middle is the note itself. An empty note shows the hint "Enter some rich text...". Sticky notes float on top of the writing area, and the comments and lookup panels open at its right-hand side.

### The footer bar

The footer bar runs along the bottom:

- On the left: **Zoom out** (−), the zoom slider, **Zoom in** (+), the current zoom percentage, and a faint **View options** button (⋮) that becomes visible when you point at the footer.
- On the right: **Show Sticky Notes** / **Hide Sticky Notes**, **Import Word Document**, **Download Word Document**, **Print**, the **Page size** list, **Clear**, **Read-Only Mode** (padlock), **Show Comments**, **Show Lookup (name or location)**, **Import**, **Export** and **Editor Information**.

Some footer controls depend on the app the editor runs in:

- **Share as Link** and **Convert From Markdown** appear only when the editor runs in a web browser, not inside a desktop app.
- In a compact footer, **Import**, **Export** and **Editor Information** are grouped under a **More actions** (⋯) button.
- The app can add its own buttons before and after the built-in ones, so you may see extra buttons that vary from app to app.
- A gear button for the settings panel appears near the bottom-left corner only when the app provides a settings panel.

## Getting started › How your note is saved

<!-- chunk {"id":"ui/getting-started/how-your-note-is-saved","section":"Getting started","title":"How your note is saved","tags":["basics","layout","saving"],"source":"knowledge/ui/01-getting-started.md","package":"bible-note@0.6.2"} -->

There is no Save button. The BibleNote editor saves the note automatically after every change, as you type. Where it is kept depends on the app: in a web browser it is stored in that browser on this device, while an app stores it with its own data. Close the editor and open it again and the note is still there.

The editor also remembers, in the same place:

- your comments, and whether the comments panel was open;
- whether read-only mode is on;
- the zoom level;
- your settings, including the page size and Dark Mode.

Two things are not kept: hidden sticky notes show again the next time the editor opens, and the undo history starts empty after the editor is reopened.

Because the note lives in one place, keep a copy before big changes or when moving to another device. **Export** in the footer saves a complete backup file, and **Download Word Document** saves a Word copy.

Some actions replace or wipe the saved note: **Clear**, **Import**, **Import Word Document**, and **Reset to Defaults** in the settings panel. In a web browser, opening a shared link also replaces the note stored in that browser.

## Getting started › Lock the note with read-only mode

<!-- chunk {"id":"ui/getting-started/lock-the-note-with-read-only-mode","section":"Getting started","title":"Lock the note with read-only mode","tags":["basics","layout","saving"],"source":"knowledge/ui/01-getting-started.md","package":"bible-note@0.6.2"} -->

Read-only mode protects the note from accidental edits while you read or present it.

### Lock and unlock

Click the padlock button in the footer; its tooltip is **Read-Only Mode**. The padlock shows open while the note can be edited and closed while it is locked. Click it again to unlock.

### What read-only mode locks

- You cannot type, delete, paste, cut or drop anything into the note. If you try, the padlock button flashes briefly to remind you that the note is locked.
- Toolbar formatting buttons, including **Undo** and **Redo**, are greyed out. **Show invisible characters** still works.
- Sticky-note text cannot be edited.
- Links in the note can be clicked to open them.

The editor remembers read-only mode, so a locked note is still locked the next time you open it.

### What it does not lock

Read-only mode only stops editing inside the note. Footer actions stay available: **Clear** still empties a locked note, and sticky notes can still be recoloured. Do not rely on read-only mode in place of a backup.

### When the app locks the note

Some apps open a note locked on purpose. The padlock tooltip then reads **Read-Only Mode Locked**, and clicking it does not unlock the note; it only flashes.

## Getting started › Undo and redo changes

<!-- chunk {"id":"ui/getting-started/undo-and-redo-changes","section":"Getting started","title":"Undo and redo changes","tags":["basics","layout","saving"],"source":"knowledge/ui/01-getting-started.md","package":"bible-note@0.6.2"} -->

Use **Undo** and **Redo**, the two curved-arrow buttons at the left end of the toolbar, or the keyboard:

- Undo: `Ctrl+Z` on Windows and Linux, `⌘+Z` on macOS.
- Redo: `Ctrl+Y` on Windows and Linux, `⌘+Shift+Z` on macOS.

The buttons are greyed out when there is nothing to undo or redo, and while read-only mode is on.

Undo also reverses actions from the footer and the sticky notes. For example, it brings back the note after **Clear**, or a sticky note you deleted with its × button.

The undo history only lasts while the editor stays open. It also starts again after you use **Import** to load a backup file or **Reset to Defaults** in the settings panel, so those cannot be undone.

## Getting started › Switch between light and dark appearance

<!-- chunk {"id":"ui/getting-started/switch-between-light-and-dark-appearance","section":"Getting started","title":"Switch between light and dark appearance","tags":["basics","layout","saving"],"source":"knowledge/ui/01-getting-started.md","package":"bible-note@0.6.2"} -->

The BibleNote editor has a light and a dark appearance. Light is the default.

- If the app provides the settings panel, click the gear button near the bottom-left corner and turn on the **Dark Mode** switch. Turn it off to go back to light.
- Some apps set the appearance themselves, for example to match the app's own theme. In that case, switch the theme in the app.

The editor remembers the choice. In dark mode the toolbar, writing area and panels turn dark, and sticky notes use deeper versions of their colours.

Printing always uses light colours on a white page, whichever appearance is on screen.

## Formatting text › The toolbar at the top of the editor

<!-- chunk {"id":"ui/formatting-text/the-toolbar-at-the-top-of-the-editor","section":"Formatting text","title":"The toolbar at the top of the editor","tags":["formatting","toolbar","text","links","buttons","overview"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The toolbar runs across the top of the editor. From left to right it holds:

- **Undo** and **Redo**.
- The block type menu, which shows the kind of block the cursor is in (for example **Normal** or **Heading 1**).
- The font menu, which shows the current font (**Arial** until you choose another).
- The font size box, with a **−** button before it and a **+** button after it.
- The **Bold**, **Italic** and **Underline** buttons, the **</>** inline code button and the **Insert link** button.
- The text colour button (palette icon) and the background colour button (paint bucket icon).
- The **⋯** menu with more text styles: **Lowercase**, **Uppercase**, **Capitalize**, **Strikethrough**, **Subscript**, **Superscript**, **Highlight**, **Clear Formatting** and **Link block text**.
- The **Insert** menu, for tables, media, drawings, equations and other content.
- The **¶** button (**Show invisible characters**).
- The alignment menu, which shows the current alignment (**Left Align** by default) and also holds **Outdent** and **Indent**.

Hover over a button such as **Bold** to see its name and keyboard shortcut. Items in the toolbar menus show their shortcut on the right.

### When the toolbar looks different

- In a narrow window (about 1100 pixels wide or less) the menus show only their icons, without a text label. When the toolbar does not fit, scroll it sideways.
- While the cursor is inside a code block, everything between the block type menu and the **¶** button is replaced by a language menu for the code (unless code highlighting is switched off in the settings panel).
- While you type in an image caption, the block type menu, the **Insert** menu and the inline code button are hidden.
- In a read-only (locked) note most buttons are greyed out.
- In full view (`F5`) the toolbar is hidden; move the pointer to the top edge of the editor to show it.
- When the **Rich Text** switch in the settings panel is off, the editor is plain text and has no toolbar. The settings panel only appears in some apps.

## Formatting text › Undo and redo changes

<!-- chunk {"id":"ui/formatting-text/undo-and-redo-changes","section":"Formatting text","title":"Undo and redo changes","tags":["formatting","toolbar","text","links","undo","redo","history"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

Use the **Undo** and **Redo** buttons at the left end of the toolbar (curved arrows), or the keyboard:

| Action | Windows / Linux | macOS       |
| ------ | --------------- | ----------- |
| Undo   | `Ctrl+Z`        | `⌘+Z`       |
| Redo   | `Ctrl+Y`        | `⌘+Shift+Z` |

A button is greyed out when there is nothing to undo or redo, and both are greyed out in a read-only note. **Undo** and **Redo** also take back changes to passage links drawn with **Link block text**.

## Formatting text › Change a paragraph into a heading, list, quote or code block

<!-- chunk {"id":"ui/formatting-text/change-a-paragraph-into-a-heading-list-quote-or-code-block","section":"Formatting text","title":"Change a paragraph into a heading, list, quote or code block","tags":["formatting","toolbar","text","links","headings","lists","quote","code block","block type"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The block type menu is the first menu on the toolbar, right after **Undo** and **Redo**. Its button shows what kind of block the cursor is in. The label is one of:

- Bulleted List
- Check List
- Code Block
- Heading 1
- Heading 2
- Heading 3
- Heading 4
- Heading 5
- Heading 6
- Numbered List
- Normal
- Quote

To change a block, put the cursor in it (or select several blocks), open the menu and choose **Normal**, **Heading 1**, **Heading 2**, **Heading 3**, **Numbered List**, **Bullet List**, **Check List**, **Quote** or **Code Block**. Each item shows its keyboard shortcut on the right — for example `Ctrl+Alt+1` for **Heading 1** and `Ctrl+Alt+0` for **Normal** (`⌘+Opt+1` and `⌘+Opt+0` on macOS).

- Choosing **Numbered List**, **Bullet List** or **Check List** for a block that already is that kind of list turns it back into normal text.
- A bullet list is labelled **Bulleted List** on the button.
- **Heading 4**, **Heading 5** and **Heading 6** have no menu item. They come from typing `####`, `#####` or `######` and a space at the start of a line.
- If you select some text inside a paragraph and choose **Code Block**, the selected text is moved into a new code block.

The `/` menu offers the same block types: type `/` and then, for example, `heading`.

## Formatting text › Change the font

<!-- chunk {"id":"ui/formatting-text/change-the-font","section":"Formatting text","title":"Change the font","tags":["formatting","toolbar","text","links","font","font family","typeface","khmer"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

Select the text, open the font menu on the toolbar (its button shows the current font, **Arial** by default) and choose a font. With no text selected, the font is used for what you type next. The built-in fonts are:

- Arial
- Courier New
- Georgia
- Times New Roman
- Trebuchet MS
- Verdana

The app that hosts the editor can add more fonts to this menu — for example fonts for Khmer text. Added fonts appear in the same alphabetical list as the built-in ones.

To go back to the default font, select the text and choose **Clear Formatting** from the **⋯** menu on the toolbar. This also removes the other styles from that text.

## Formatting text › Change the text size

<!-- chunk {"id":"ui/formatting-text/change-the-text-size","section":"Formatting text","title":"Change the text size","tags":["formatting","toolbar","text","links","font size","text size","bigger","smaller"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The font size box on the toolbar shows the size of the selected text in pixels. Normal text is 15.

- Click **+** (**Increase font size**) or **−** (**Decrease font size**) on either side of the box. The step depends on the size: **+** adds 1 below 12, 2 below 20, 4 below 36 and 12 above that.
- Or click in the box, type a number and press `Enter`. Sizes from 8 to 72 are allowed; a larger or smaller number is changed to 72 or 8.
- Keyboard: `Ctrl+Shift+.` makes text bigger and `Ctrl+Shift+,` makes it smaller (`⌘+Shift+.` and `⌘+Shift+,` on macOS).

Select text first to resize it; with nothing selected the new size is used for what you type next. **+** is greyed out at 72 and **−** at 8.

## Formatting text › Make text bold, italic or underlined

<!-- chunk {"id":"ui/formatting-text/make-text-bold-italic-or-underlined","section":"Formatting text","title":"Make text bold, italic or underlined","tags":["formatting","toolbar","text","links","bold","italic","underline"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

Select the text and click **Bold**, **Italic** or **Underline** on the toolbar, or press:

| Style     | Windows / Linux | macOS |
| --------- | --------------- | ----- |
| Bold      | `Ctrl+B`        | `⌘+B` |
| Italic    | `Ctrl+I`        | `⌘+I` |
| Underline | `Ctrl+U`        | `⌘+U` |

Click the button or press the shortcut again to take the style off. A button is highlighted when the selected text already has that style. With no text selected, the style is switched on for what you type next.

The same three buttons are on the small format bar that pops up over selected text. Typing `**bold**` or `*italic*` also works.

## Formatting text › Format text as inline code

<!-- chunk {"id":"ui/formatting-text/format-text-as-inline-code","section":"Formatting text","title":"Format text as inline code","tags":["formatting","toolbar","text","links","inline code","monospace","code"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The **</>** button on the toolbar marks the selected text as inline code: it is shown in a monospace font inside the paragraph. Its tooltip says **Insert code block**, but it styles the selected words rather than creating a separate block. Click it again to remove the code style.

- Shortcut: `Ctrl+Shift+C` (`⌘+Shift+C` on macOS).
- Typing text between backticks, like `` `code` ``, does the same.

For a whole separate block of code, choose **Code Block** from the block type menu instead.

## Formatting text › Change the text colour or background colour

<!-- chunk {"id":"ui/formatting-text/change-the-text-colour-or-background-colour","section":"Formatting text","title":"Change the text colour or background colour","tags":["formatting","toolbar","text","links","colour","color","text color","background color","highlight color"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

Two toolbar buttons colour the selected text:

- the palette button sets the colour of the letters;
- the paint bucket button sets the colour behind the letters.

Each one opens a colour picker:

- **Hex** — type a colour code with its `#`, such as `#4a90e2`. It is applied once all six digits are typed.
- A row of 15 ready-made colours.
- A large shaded square and a rainbow bar — click or drag in them to pick any colour.
- **Remove color** (eraser button) — takes the colour off the selected text.

The colour is applied as soon as you pick it, and the toolbar button's icon takes on the current colour. Click outside the picker to close it. The same two buttons are on the format bar that pops up over selected text.

## Formatting text › Strikethrough, subscript, superscript, highlight and letter case

<!-- chunk {"id":"ui/formatting-text/strikethrough-subscript-superscript-highlight-and-letter-case","section":"Formatting text","title":"Strikethrough, subscript, superscript, highlight and letter case","tags":["formatting","toolbar","text","links","strikethrough","subscript","superscript","highlight","lowercase","uppercase","capitalize"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The **⋯** button on the toolbar, after the colour buttons, opens more text styles. Select text first, then choose:

- **Lowercase**, **Uppercase** or **Capitalize** — show the text in small letters, in CAPITALS, or With Each Word Capitalised. The letters you typed are not changed, only how they are displayed. Shortcuts: `Ctrl+Shift+1`, `Ctrl+Shift+2`, `Ctrl+Shift+3`; on macOS `⌃+Shift+1`, `⌃+Shift+2`, `⌃+Shift+3` (with the Control key).
- **Strikethrough** — a line through the text. `Ctrl+Shift+X` (`⌘+Shift+X`).
- **Subscript** — small lowered text. `Ctrl+,` (`⌘+,`).
- **Superscript** — small raised text. `Ctrl+.` (`⌘+.`).
- **Highlight** — a light yellow marker behind the text. No shortcut.
- **Clear Formatting** — removes all styles from the selected text. `Ctrl+\` (`⌘+\`).
- **Link block text** — joins the selected passage to another passage with a line. Greyed out until text is selected.

Choosing a style again turns it off. A style that is already on is highlighted in the menu. **Strikethrough** and **Highlight** are also on the format bar that pops up over selected text.

## Formatting text › Clear formatting from text

<!-- chunk {"id":"ui/formatting-text/clear-formatting-from-text","section":"Formatting text","title":"Clear formatting from text","tags":["formatting","toolbar","text","links","clear formatting","remove formatting","reset"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

Select the text and choose **Clear Formatting** from the **⋯** menu on the toolbar, or press `Ctrl+\` (`⌘+\` on macOS).

This removes bold, italic, underline, strikethrough, subscript, superscript, highlight, inline code and letter case, and the font, size and colours, from the selected text. It also resets the alignment and indentation of the paragraphs the selection touches. Links stay in place.

With nothing selected, **Clear Formatting** switches the styles off for the text you type next.

## Formatting text › Align text and change indentation

<!-- chunk {"id":"ui/formatting-text/align-text-and-change-indentation","section":"Formatting text","title":"Align text and change indentation","tags":["formatting","toolbar","text","links","alignment","align","center","justify","indent","outdent"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The last menu on the toolbar sets the alignment of the paragraph the cursor is in, or of every selected paragraph. Its button shows the current alignment. The alignments are:

- Center Align
- End Align
- Justify Align
- Left Align
- Right Align
- Start Align

- **Left Align**, **Center Align**, **Right Align** and **Justify Align** have shortcuts: `Ctrl+Shift+L`, `Ctrl+Shift+E`, `Ctrl+Shift+R` and `Ctrl+Shift+J` (`⌘+Shift+L`, `⌘+Shift+E`, `⌘+Shift+R`, `⌘+Shift+J` on macOS).
- **Start Align** and **End Align** follow the writing direction: start is the left side for left-to-right text and the right side for right-to-left text.

The same menu has **Outdent** and **Indent**, which move the paragraph out or in one step: `Ctrl+[` and `Ctrl+]` (`⌘+[` and `⌘+]` on macOS). Pressing `Tab` at the start of a line indents too, and `Shift+Tab` there outdents. A paragraph can be indented at most six steps.

The `/` menu also has **Align left**, **Align center**, **Align right** and **Align justify**.

## Formatting text › The format bar that appears over selected text

<!-- chunk {"id":"ui/formatting-text/the-format-bar-that-appears-over-selected-text","section":"Formatting text","title":"The format bar that appears over selected text","tags":["formatting","toolbar","text","links","floating toolbar","selection","format bar"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

When you select text in the note, a small format bar pops up next to the selection. Its buttons, from left to right:

- **Bold**, **Italic**, **Underline**, **Strikethrough** and **Highlight** — turn that style on or off for the selection.
- The palette button (text colour) and the paint bucket button (background colour) — each opens a colour picker.
- **Link block text** — starts joining the selected passage to a second passage with a line.
- **Insert comment** — adds a comment to the selected text.

The bar follows the selection as you scroll and goes away when nothing is selected. It works with a mouse, a keyboard selection or touch. It does not appear inside code blocks, and in a read-only note it shows only **Insert comment** of its own buttons.

Some apps add their own buttons to the format bar, at its start or after **Insert comment** — for example a button that copies the selected text, or one that changes it. They work on the text you selected. Which buttons there are depends on the app, not on the editor; point at a button to see its name. In a read-only note an app's button either stays, if it only reads the selection, or is hidden, if it would change the text.

## Formatting text › Connect two passages with Link block text

<!-- chunk {"id":"ui/formatting-text/connect-two-passages-with-link-block-text","section":"Formatting text","title":"Connect two passages with Link block text","tags":["formatting","toolbar","text","links","link block text","passage link","connect","arrow"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

**Link block text** draws a line between two passages in the note, for example to show that one verse answers another.

1. Select the first passage.
2. Click **Link block text** on the format bar that pops up over the selection, or choose it from the **⋯** menu on the toolbar. A **Select second range** tag follows the pointer.
3. With the mouse, select the second passage. When you let go of the mouse button, both passages are outlined and joined by a line.

Press `Escape` before step 3 to cancel.

### Change or remove a passage link

Links are drawn faintly; point at a linked passage to show its link clearly. Click the line itself (not the text) to open its options:

- **No direction**, **Direction to second**, **Direction from second** — a plain line, or an arrow pointing to or from the second passage.
- **Weak no direction**, **Weak direction to second**, **Weak direction from second** — the same, drawn as a dashed line.
- **Use selection as first** and **Use selection as second** — replace one end of the link with the text that is currently selected. They are greyed out when no text is selected.
- **Remove link** — deletes the line.

New links start as **No direction**. Press `Escape` or click elsewhere to close the options. **Undo** and **Redo** work for these links too. Passage links can only be added or changed while the note is editable.

## Formatting text › Add a link to text

<!-- chunk {"id":"ui/formatting-text/add-a-link-to-text","section":"Formatting text","title":"Add a link to text","tags":["formatting","toolbar","text","links","link","hyperlink","url","insert link","ctrl+k"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

1. Select the words you want to link.
2. Click **Insert link** on the toolbar (the chain icon) or press `Ctrl+K` (`⌘+K` on macOS).
3. A small link box opens below the text with `https://` already filled in. Type the rest of the web address and press `Enter`, or click the tick button.

If you press `Escape` or click the cross button instead, the text stays linked to just `https://`. Remove that link with the bin button in the link box.

Other ways to make a link:

- Select text and paste a web address: the text becomes a link to that address.
- Type `[text](https://example.com)`. When you type the closing bracket it turns into a link.
- Type or paste a web address or an email address on its own; it becomes a link automatically.

Type the address in full, starting with `https://` or `http://`. Links to `http`, `https`, `mailto`, `sms` and `tel` addresses are allowed; other kinds of address are blocked.

## Formatting text › Edit, open or remove a link

<!-- chunk {"id":"ui/formatting-text/edit-open-or-remove-a-link","section":"Formatting text","title":"Edit, open or remove a link","tags":["formatting","toolbar","text","links","link","edit link","remove link","open link","unlink"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

Click inside a link, or move the cursor into it, and a link box appears below it showing the address:

- Click the address to open it in a new tab or window.
- Click the pencil button to change the address. Type the new one and press `Enter` or click the tick; `Escape` or the cross button cancels the change.
- Click the bin button to remove the link. The text stays.

You can also remove a link by putting the cursor in it and clicking **Insert link** on the toolbar (the button is highlighted while the cursor is in a link), or by pressing `Ctrl+K` (`⌘+K` on macOS).

To open a link straight from the text while editing, hold `Ctrl` (`⌘` on macOS) and click it. In a read-only note a plain click opens the link in a new tab or window. Press `Escape` to close the link box.

## Formatting text › Web addresses and email addresses become links automatically

<!-- chunk {"id":"ui/formatting-text/web-addresses-and-email-addresses-become-links-automatically","section":"Formatting text","title":"Web addresses and email addresses become links automatically","tags":["formatting","toolbar","text","links","autolink","automatic link","url","email"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

When you type or paste a web address that starts with `http://`, `https://` or `www.`, the editor turns it into a link by itself. An address starting with `www.` links to the `https://` version of it. An email address such as `name@example.com` becomes a `mailto:` link, which opens your email program.

Click an automatic link to see its address in the link box below it, where you can open it. Changing the address with the pencil button turns it into an ordinary link.

When you paste just a web address, a small menu may also offer to embed it: **Embed Youtube Video** for YouTube links, **Embed Website** for other web pages. Choose **Dismiss** to keep it as a plain link.

## Formatting text › Show spaces and paragraph marks

<!-- chunk {"id":"ui/formatting-text/show-spaces-and-paragraph-marks","section":"Formatting text","title":"Show spaces and paragraph marks","tags":["formatting","toolbar","text","links","invisible characters","whitespace","pilcrow","spaces"],"source":"knowledge/ui/02-formatting-text.md","package":"bible-note@0.6.2"} -->

The **¶** button on the toolbar (**Show invisible characters**) shows marks for characters you normally cannot see:

- `·` for each space;
- `→` for a tab;
- `¶` at the end of each paragraph;
- `↵` for a line break made with `Shift+Enter`.

Click the button again to hide them. The marks are only drawn on screen; they are not added to the text. In apps that show the settings panel, its **Show invisible characters** switch does the same.

## The slash menu › Open the slash menu and insert a block

<!-- chunk {"id":"ui/slash-menu/open-the-slash-menu-and-insert-a-block","section":"The slash menu","title":"Open the slash menu and insert a block","tags":["slash menu","slash command","component picker","insert","slash","/","quick insert","typeahead"],"source":"knowledge/ui/03-slash-menu.md","package":"bible-note@0.6.2"} -->

Type `/` at the start of a line, after a space, or right after an opening bracket `(`. A menu opens at the cursor listing everything you can insert: headings, lists, tables, media, drawings, dates and more.

- Keep typing after the `/` to narrow the list — for example `/table` or `/head`.
- Press `↓` and `↑` to move through the list (it wraps around from the bottom to the top), then `Enter` or `Tab` to choose the highlighted item. The first item is highlighted when the menu opens.
- Or click an item with the mouse.
- Press `Escape` to close the menu without choosing anything. The text you typed stays in the note.

When you choose an item, the `/` and the text you typed after it are removed. Some items change the current block (**Paragraph**, **Heading 1**, **Quote**, **Code**, the list types, the alignments); others insert something new. **Table**, **Poll**, **Equation**, **Media** and **Columns Layout** first open a dialog for the details.

Typing `/` in the middle of a word, such as `and/or`, does not open the menu.

## The slash menu › Everything the slash menu offers

<!-- chunk {"id":"ui/slash-menu/everything-the-slash-menu-offers","section":"The slash menu","title":"Everything the slash menu offers","tags":["slash menu","slash command","component picker","insert","slash menu items","list of blocks"],"source":"knowledge/ui/03-slash-menu.md","package":"bible-note@0.6.2"} -->

The `/` menu lists these items, in this order. The right column shows extra words that also find the item when typed after `/`:

| Menu item | Also found by typing |
| --- | --- |
| **Paragraph** | normal, paragraph, p, text |
| **Heading 1** | heading, header, h1 |
| **Heading 2** | heading, header, h2 |
| **Heading 3** | heading, header, h3 |
| **Table** | table, grid, spreadsheet, rows, columns |
| **Numbered List** | numbered list, ordered list, ol |
| **Bulleted List** | bulleted list, unordered list, ul |
| **Check List** | check list, todo list |
| **Quote** | block quote |
| **Code** | javascript, python, js, codeblock |
| **Divider** | horizontal rule, divider, hr |
| **Page Break** | page break, divider |
| **Excalidraw** | excalidraw, diagram, drawing |
| **Poll** | poll, vote |
| **Embed Youtube Video** | youtube, video, embed |
| **Embed Website** | website, embed, iframe, page, url |
| **Date** | date, calendar, time |
| **Today** | date, calendar, time, today |
| **Tomorrow** | date, calendar, time, tomorrow |
| **Yesterday** | date, calendar, time, yesterday |
| **Equation** | equation, latex, math |
| **Media** — Insert image, video, pdf or audio | image, photo, picture, file, video, pdf, audio |
| **Collapsible** | collapse, collapsible, toggle |
| **Columns Layout** | columns, layout, grid |
| **Align left** | align, justify, left |
| **Align center** | align, justify, center |
| **Align right** | align, justify, right |
| **Align justify** | align, justify |

**Date** and **Today** both insert today's date. Typing a number after `/`, such as `/3x4`, also offers tables of that size.

## The slash menu › How the slash menu matches what you type

<!-- chunk {"id":"ui/slash-menu/how-the-slash-menu-matches-what-you-type","section":"The slash menu","title":"How the slash menu matches what you type","tags":["slash menu","slash command","component picker","insert","slash search","filter","keywords"],"source":"knowledge/ui/03-slash-menu.md","package":"bible-note@0.6.2"} -->

The text you type after `/` is compared with each item's name and with its extra search words. Capital letters do not matter, and the text can appear anywhere in the name or word, not only at the start. For example:

- `/list` finds **Numbered List**, **Bulleted List** and **Check List**.
- `/time` finds **Date**, **Today**, **Tomorrow** and **Yesterday**.
- `/divider` finds **Divider** and **Page Break**.
- `/photo` finds **Media**.
- `/embed` finds **Embed Youtube Video** and **Embed Website**.

You can type spaces, as in `/numbered list`. Punctuation such as `.`, `,`, `-`, `:` or `(` closes the menu, and so does typing more than 75 characters after the `/`.

If nothing matches, the menu closes; delete some of the typed letters to bring it back.

## The slash menu › Insert a table of a chosen size from the slash menu

<!-- chunk {"id":"ui/slash-menu/insert-a-table-of-a-chosen-size-from-the-slash-menu","section":"The slash menu","title":"Insert a table of a chosen size from the slash menu","tags":["slash menu","slash command","component picker","insert","table size","rows","columns","slash table"],"source":"knowledge/ui/03-slash-menu.md","package":"bible-note@0.6.2"} -->

Right after the `/`, type the number of rows, the letter `x` and the number of columns:

- `/3x4` offers **3x4 Table** — 3 rows and 4 columns.
- `/3` or `/3x` offers **3x1 Table** through **3x10 Table**, so you only have to pick the number of columns.

Each number can be from 1 to 99. The table sizes appear at the top of the list, above any other items that match what you typed (for example `/3` also finds **Heading 3**). Press `Enter` or click to insert the table at the cursor.

Choosing the plain **Table** item instead opens the **Insert Table** dialog, where you type the number of rows (1–500) and columns (1–50) and click **Confirm**.

## The slash menu › Add a block with the + button beside a paragraph

<!-- chunk {"id":"ui/slash-menu/add-a-block-with-the-button-beside-a-paragraph","section":"The slash menu","title":"Add a block with the + button beside a paragraph","tags":["slash menu","slash command","component picker","insert","plus button","add block","block picker","drag handle"],"source":"knowledge/ui/03-slash-menu.md","package":"bible-note@0.6.2"} -->

With a mouse or trackpad, point at any paragraph or block in the note. A **+** button (tooltip **Click to add below**) and a drag handle appear in the margin to its left.

Click **+** to open a block menu with a **Filter blocks...** box. It lists the same items as the `/` menu, including table sizes such as `3x4`. Type to filter, then click an item or press `↓`/`↑` and `Enter`. The new block is added below the paragraph you pointed at.

- Hold `Alt` (`Option` on macOS) or `Ctrl` while clicking **+** to add the block above instead.
- Press `Escape` or click outside the menu to close it.

The **+** button and drag handle are not shown on touch-only devices such as phones and tablets; use the `/` menu there.

## Mentions of people and places › Mention a person with @

<!-- chunk {"id":"ui/mentions/mention-a-person-with","section":"Mentions of people and places","title":"Mention a person with @","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

A person mention links a name in your note to its record in the name dataset the app loads, so you can later hover it for a preview or open its full details.

1. Put the cursor where the name should go. The `@` must start a line or come right after a space or an opening parenthesis `(`. An `@` typed straight after a letter, as in an email address, does not open suggestions.
2. Type `@` and then the first letters of the name, for example `@Mos`. At least one letter is needed after the `@`.
3. After a short pause (about half a second) a suggestion list opens under the cursor with up to 20 matching names. The first suggestion is already highlighted.
4. Press `Enter` or `Tab` to insert the highlighted name, use `↑` and `↓` to move through the list, or click a suggestion.

The `@` and the letters you typed are replaced by the mention, and the cursor sits right after it so you can keep writing. The `@` itself is not kept in the note.

Each suggestion shows an icon for the kind of name (a person, a group, a place, a deity and so on), the name itself, and, underneath in parentheses, the record's short title line when it has one. In a translated dataset the English KJV name follows the name in parentheses.

Names may contain spaces, so you can keep typing (`@Mary Mag`) to narrow the list. Press `Esc` to close the list and keep what you typed as ordinary text.

You can also start a person mention from the toolbar: **Insert** › **Mention Name** types the `@` for you, then type the first letters.

## Mentions of people and places › Mention a place with

<!-- chunk {"id":"ui/mentions/mention-a-place-with","section":"Mentions of people and places","title":"Mention a place with","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

A place mention links a place name in your note to its record in the location dataset the app loads.

1. Put the cursor where the place should go. The `#` must start a line or come right after a space or an opening parenthesis `(`.
2. Type `#` and then the first letters of the place, for example `#Jer`. At least one letter is needed after the `#`.
3. After about half a second a suggestion list opens with up to 20 matching places, each with a pin icon, the place name and its short title line underneath. In a translated dataset the English KJV name follows in parentheses.
4. Press `Enter` or `Tab` to insert the highlighted place, move with `↑` and `↓`, or click a suggestion. `Esc` closes the list and leaves your text as it is.

The `#` and the typed letters are replaced by the place mention; the `#` is not kept. A place mention shows a small pin icon at its start, which tells it apart from a person mention.

You can also use the toolbar: **Insert** › **Pin Location** types the `#` for you, then type the first letters of the place.

## Mentions of people and places › How the mention suggestion list finds and orders matches

<!-- chunk {"id":"ui/mentions/how-the-mention-suggestion-list-finds-and-orders-matches","section":"Mentions of people and places","title":"How the mention suggestion list finds and orders matches","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

The suggestion list that opens after `@` (people) or `#` (places) searches the dataset the app has loaded.

- A record matches when your letters appear anywhere in its name, ignoring capital letters. The search also looks at the record's other name (shown as **Also called** in its details) and, in a translated dataset, at its English KJV name, so you can type either language.
- Exact matches come first, then names that start with your letters, then names that only contain them. Inside each group, records the dataset ranks as more important come first, then alphabetical order.
- At most 20 suggestions are shown. Type more letters to narrow the list.
- Several records can share one name (different people called the same). The title line under each suggestion helps tell them apart.
- `↑` and `↓` wrap around from the last suggestion to the first. Moving the mouse over a suggestion highlights it.

If nothing matches, no list appears and the letters stay as ordinary text. Try fewer letters, another spelling, the English name, or browse with the lookup panel (the footer button **Show Lookup (name or location)**).

## Mentions of people and places › What the icons on person mentions mean

<!-- chunk {"id":"ui/mentions/what-the-icons-on-person-mentions-mean","section":"Mentions of people and places","title":"What the icons on person mentions mean","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

Every name record has a kind, and the editor shows a matching icon in the `@` suggestion list, at the start of the mention in your note, in its hover card, its detail panel and the lookup panel:

- **Person**: a single person silhouette.
- **Group** (a people or tribe): several people.
- **Place**: a map marker.
- **Concept**: a light bulb.
- **Deity**: a sun.
- **Month**: a calendar.
- **Supernatural**: sparkling stars.
- **Life**: a heart.
- **Unknown**: a question mark in a circle.

A record with no kind, or a kind the editor does not know, uses the person icon. Place mentions made with `#` always show a pin icon, and Bible verse mentions show a book icon.

## Mentions of people and places › What a mention looks like and how to change or delete it

<!-- chunk {"id":"ui/mentions/what-a-mention-looks-like-and-how-to-change-or-delete-it","section":"Mentions of people and places","title":"What a mention looks like and how to change or delete it","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

An inserted person or place mention shows the name on a tinted background with a small icon at its start. It stays on one line and the `@` or `#` you typed is not shown.

- Clicking the text of a mention just places the cursor. Clicking the small icon at its start opens the mention's detail panel.
- Typing right before or right after a mention adds ordinary text next to it.
- To delete a mention, put the cursor right after it and press `Backspace`. A mention of several words is removed one word at a time; a one-word mention disappears with one press.
- Typing in the middle of a mention turns it back into ordinary text, and it is no longer linked to the record.
- To point a mention at a different person or place, delete it and insert a new one with `@` or `#`.

## Mentions of people and places › Preview a person or place by hovering over a mention

<!-- chunk {"id":"ui/mentions/preview-a-person-or-place-by-hovering-over-a-mention","section":"Mentions of people and places","title":"Preview a person or place by hovering over a mention","tags":["mentions","names","locations","people","places","hover card","preview"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

Rest the mouse pointer on a person or place mention in your note for 2 seconds and a hover card opens below the mention (or above it when there is no room below).

The hover card shows:

- the kind icon, the name and, in a translated dataset, the English KJV name in parentheses;
- a copy button (tooltip **Copy name**) that copies just the name;
- the record's title line and description;
- short facts such as kind, gender and age for a person, or kind for a place (values recorded as unknown are left out);
- a **Details** section you can click to expand, with the same rows as the detail panel.

You can move the pointer onto the hover card to read it or click its links; it stays open while the pointer is over it and closes a moment after the pointer leaves both the card and the mention. Moving away before the 2 seconds are up shows no card.

Click a blank part of the hover card (not a link, button or the **Details** section) to open the full detail panel, which stays open until you close it.

The hover card needs a mouse. On a touch screen, tap the icon at the start of the mention to open the detail panel instead. If the mention's record is not in the dataset the app has loaded, the card shows little more than the name.

## Mentions of people and places › Open the detail panel for a person or place

<!-- chunk {"id":"ui/mentions/open-the-detail-panel-for-a-person-or-place","section":"Mentions of people and places","title":"Open the detail panel for a person or place","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

The detail panel is a floating window with everything the dataset knows about a person or place. Open it in any of these ways:

- Click the small icon at the start of a person or place mention in your note. The panel opens immediately.
- Click a blank area of the mention's hover card.
- Click a person or place link inside another hover card or panel, such as a family member, a location, or a name in a description.
- Click a result in the lookup panel.

The panel opens next to what you clicked and is kept inside the editor area. It stays open while you keep writing or click elsewhere in the note, until you click its **Close** button.

Several panels can be open at once, for example a person, their father and the place they lived. Opening a record that already has a panel brings that panel to the front, where you left it, instead of opening a second copy. Click any panel to bring it in front of the others.

## Mentions of people and places › What the person detail panel shows

<!-- chunk {"id":"ui/mentions/what-the-person-detail-panel-shows","section":"Mentions of people and places","title":"What the person detail panel shows","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

The person detail panel's header shows the kind icon and the name. Below it come the record's title line, its description and short facts (kind, gender, age).

Click **Details** to expand the full record. Only rows the dataset has data for are shown:

- **Title**
- **KJV name**: the English KJV name, shown only in a translated dataset
- **Also called**: another name for the same person
- **Type**, **Gender**, **Age**
- **Years**: date ranges, when recorded
- **Locations**: places linked to the person; click one to open that place's panel
- **Parents**, **Spouses**, **Children**, **Siblings**, **Cousins**: click a name to open that person's panel
- **Verses**: the verses where the name appears; click one to open the verse, if the app supplies verse text
- **Links**: outside pages such as **Wikipedia**, which open in a new browser tab or window

The same **Details** section appears in the person's hover card.

## Mentions of people and places › What the place detail panel shows

<!-- chunk {"id":"ui/mentions/what-the-place-detail-panel-shows","section":"Mentions of people and places","title":"What the place detail panel shows","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

The place detail panel's header shows a pin icon and the place name. Below it come the place's title line, its description and its kind.

Click **Details** to expand the full record. Only rows the dataset has data for are shown:

- **Title**
- **KJV name**: the English KJV name, shown only in a translated dataset
- **Also called**: another name for the same place
- **Type**
- **Modern identification**: the modern site or name, when known
- **Related locations**: click one to open that place's panel
- **Verses**: the verses where the place appears; click one to open the verse, if the app supplies verse text
- **Links**: outside pages such as **Wikipedia**, opening in a new browser tab or window

**Related locations**, **Verses** and **Links** each show a count and fold up when you click their heading. **Related locations** and **Links** start open; **Verses** starts closed.

When the record has coordinates, a map from Google Maps appears at the end of **Details** with the note "Approximate location — the marker is an estimated point and may not be exact." and an **Open in Google Maps** link.

## Mentions of people and places › Move, resize, copy and close a detail panel

<!-- chunk {"id":"ui/mentions/move-resize-copy-and-close-a-detail-panel","section":"Mentions of people and places","title":"Move, resize, copy and close a detail panel","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

Person, place and Bible verse detail panels all work the same way.

- **Move**: drag the panel by its header, the top strip outside the name and the buttons. The panel stays inside the editor area.
- **Resize**: drag the panel's bottom-right corner.
- **Copy the name**: the name in the header is ordinary text you can select and copy.
- **Copy everything**: the **Copy** button (copy icon) copies the whole record — name, title line, description, short facts, then labelled lines such as **KJV name**, **Also called**, **Years**, **Locations**, the family rows, **Verses** and **Links** for a person, or **Modern identification**, **Related locations**, **Verses**, **Links** and **Coordinates** for a place. Pasted into Word or another rich-text editor it keeps paragraphs and bold labels; elsewhere it pastes as plain text. Verses are copied as readable references when the app supplies them, otherwise as short codes like `GEN 1:1`. The button briefly turns into a check mark with the tooltip **Copied!**.
- **Close**: the **Close** button (an X) closes that panel. Clicking elsewhere or pressing `Esc` does not close it.

## Mentions of people and places › Follow links to other people, places and verses

<!-- chunk {"id":"ui/mentions/follow-links-to-other-people-places-and-verses","section":"Mentions of people and places","title":"Follow links to other people, places and verses","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

Hover cards and detail panels let you move from one record to the next without leaving your note.

- Titles and descriptions can contain underlined links. A person's name opens that person's panel, a place opens that place's panel, and a verse reference opens a Bible verse panel with its text, if the app supplies verse text. References to a whole book or chapter are shown as plain text, not links.
- In **Details**, the **Locations**, **Related locations**, **Parents**, **Spouses**, **Children**, **Siblings** and **Cousins** entries are links too. A name the dataset cannot resolve is shown as plain text.
- **Verses** entries open the verse in its own panel when the app supports it.

Each link opens its own panel, so you can follow a family line or a journey across several panels. Drag them apart to compare. Following a link never changes your note.

## Mentions of people and places › Names in other languages and the English KJV name

<!-- chunk {"id":"ui/mentions/names-in-other-languages-and-the-english-kjv-name","section":"Mentions of people and places","title":"Names in other languages and the English KJV name","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

Which people and places you can mention depends on the datasets the app hosting the editor loads. The editor has no list of its own. An app can load, for example, the English KJV dataset, a Khmer (BFBS) or a French (Louis Segond) one, and it can use a different dataset for names than for places. If the app loads none, `@` and `#` show no suggestions.

In a translated dataset each record carries its name in that language plus its English KJV name:

- The suggestion list, the hover card and the lookup panel show the translated name followed by the English name in parentheses.
- The detail panel shows the English name in the **KJV name** row of **Details**.
- You can search in either language: typing the English name finds the translated record too.
- The mention inserted into your note uses the dataset's own name, in that language.

When a translated name is the same as the English one, no English name is added. The app may also set a font for a dataset's language; the editor then uses it in the suggestion list, hover cards, detail panels and the lookup panel.

## Mentions of people and places › Why the person or place you want does not appear

<!-- chunk {"id":"ui/mentions/why-the-person-or-place-you-want-does-not-appear","section":"Mentions of people and places","title":"Why the person or place you want does not appear","tags":["mentions","names","locations","people","places"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.6.2"} -->

If typing `@` or `#` shows no suggestion for the person or place you expect, check the following:

- The `@` or `#` must start a line or come right after a space or `(`. Typed straight after a letter it is just a character.
- At least one letter must follow the `@` or `#`, and the list takes about half a second to appear.
- The suggestion list only searches the dataset the app has loaded. A name missing from that dataset cannot be mentioned.
- Records use the spelling of the Bible translation behind the dataset. Try another spelling, fewer letters, the other name the person or place is known by, or, in a translated dataset, the English KJV name.
- In read-only mode you cannot type, so you cannot insert mentions; hovering and opening detail panels still work.

To browse instead of guessing, open the lookup panel with the footer button **Show Lookup (name or location)** and search or page through every name and location the app has loaded.

## Bible verse mentions › Insert a Bible verse mention with ^ and paste

<!-- chunk {"id":"ui/bible-verses/insert-a-bible-verse-mention-with-and-paste","section":"Bible verse mentions","title":"Insert a Bible verse mention with ^ and paste","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

A Bible verse mention is a compact reference in your note, such as **Genesis 1:1**, that carries the full verse text. You read the text by hovering the mention or opening its panel.

1. Copy the passage from your Bible app or website. The first line must be the version in parentheses and the reference, for example `(KJV) Genesis 1:1`, and the verse text must follow on the next line.
2. In your note, type `^` where the reference should go, or choose **Insert** › **Bible Verse** in the toolbar, which types the `^` for you.
3. With the cursor right after the `^` (no space in between, nothing selected), paste with `Ctrl+V` (`Cmd+V` on a Mac).

The `^` disappears and a verse mention appears in its place, followed by a space. The mention shows the reference without the version label (**Genesis 1:1**); the full first line `(KJV) Genesis 1:1` and the verse text are kept inside the mention.

If the clipboard text is not in that Bible format, it pastes as ordinary text and the `^` stays. If recognised Bible text is pasted without a `^` right before the cursor, it becomes a collapsible passage block instead of a mention.

If the app hosting the editor can send Bible text into your note, that text is handled exactly like a paste.

## Bible verse mentions › Which pasted Bible text the editor recognises

<!-- chunk {"id":"ui/bible-verses/which-pasted-bible-text-the-editor-recognises","section":"Bible verse mentions","title":"Which pasted Bible text the editor recognises","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

When you paste, the editor checks whether the clipboard holds Bible text in this shape:

- **First line**: a label in parentheses at the very start of the line, usually the version, then a space, then the reference. For example `(KJV) Genesis 1:1` or `(KJV) John 3:16-17`.
- **Then**: a line break and the verse text, on one or more lines.

```
(KJV) John 3:16-17
(16): For God so loved the world… (17): For God sent not his Son…
```

Verse numbers written as `(16):` in front of each verse are shown as small green raised numbers in the verse's hover card and panel. Verse numbers in Khmer digits work too.

Text that is only one line, or whose first line does not start with a label in parentheses followed by a space, is pasted as ordinary text.

What the editor does with recognised text depends on what is right before the cursor:

- a `^` straight before the cursor: the `^` is replaced by a Bible verse mention;
- anything else: the text becomes a collapsible passage block.

If the app recognises the passage's language and has a font for it (for example Khmer), the mention or block uses that font.

## Bible verse mentions › Paste a Bible passage as a collapsible block

<!-- chunk {"id":"ui/bible-verses/paste-a-bible-passage-as-a-collapsible-block","section":"Bible verse mentions","title":"Paste a Bible passage as a collapsible block","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

Paste recognised Bible text (a first line such as `(KJV) Psalm 23:1-2` followed by the verse text) anywhere in your note without a `^` right before the cursor, and the editor turns it into a collapsible block:

- the block's bold title is the first line, for example `(KJV) Psalm 23:1-2`;
- the block's body holds the verse text, one paragraph for each line you pasted;
- the block starts expanded, and the cursor moves to a new empty line below it.

Click the title's triangle to collapse the passage to one line, and click again to expand it. Unlike a verse mention, the passage is ordinary text you can edit, format or delete like the rest of your note.

To get a compact verse mention instead of a block, type `^` first and paste right after it.

## Bible verse mentions › Insert a Bible verse from the toolbar Insert menu

<!-- chunk {"id":"ui/bible-verses/insert-a-bible-verse-from-the-toolbar-insert-menu","section":"Bible verse mentions","title":"Insert a Bible verse from the toolbar Insert menu","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

The toolbar's **Insert** menu has three mention items:

- **Mention Name** types `@` at the cursor, to start a person mention;
- **Pin Location** types `#`, to start a place mention;
- **Bible Verse** types `^`, to start a Bible verse mention.

**Bible Verse** does not look verses up by itself. After choosing it, paste Bible text whose first line is the version in parentheses and the reference (for example `(KJV) Genesis 1:1`) with the verse text on the next line. The `^` is then replaced by the verse mention. Pasting anything else leaves the `^` in your note as an ordinary character.

The **Insert** menu is unavailable while the note is read-only.

## Bible verse mentions › What a Bible verse mention shows

<!-- chunk {"id":"ui/bible-verses/what-a-bible-verse-mention-shows","section":"Bible verse mentions","title":"What a Bible verse mention shows","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

In your note a Bible verse mention shows the reference, such as **Genesis 1:1**, on a tinted background with a small book icon at its start. The version label from the pasted text, such as `(KJV)`, is not shown in the note.

The mention does not expand inside the note. To read the verse:

- rest the mouse pointer on the mention for 2 seconds: a hover card shows the full first line with the version, for example `(KJV) Genesis 1:1`, and the verse text with its verse numbers; click the hover card to open the verse panel;
- or click the book icon at the start of the mention to open the verse panel straight away.

To have the verse text itself in your note, paste the passage without a `^`; it then becomes a collapsible block you can expand and collapse.

To remove a verse mention, put the cursor right after it and press `Backspace`; it is removed one word at a time. Typing in the middle of a verse mention turns it into ordinary text and drops the verse text it carried. To change a verse, delete the mention and paste again after a new `^`.

## Bible verse mentions › Read a verse in the Bible verse panel

<!-- chunk {"id":"ui/bible-verses/read-a-verse-in-the-bible-verse-panel","section":"Bible verse mentions","title":"Read a verse in the Bible verse panel","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

The Bible verse panel is a floating window showing one verse mention's text. Open it by:

- clicking the book icon at the start of a Bible verse mention;
- clicking the mention's hover card;
- clicking a verse in the **Verses** list of a person or place panel, or a verse link in a description, when the app supplies verse text.

The panel shows a book icon and the full reference with its version, for example `(KJV) Genesis 1:1`, then the verse text with small green verse numbers.

When the app supports it, a **More Information** section appears below the text. Click it to list the **Names** and **Locations** that the loaded datasets record in those verses; each is a link that opens that person's or place's panel.

Panel controls:

- **Copy** (copy icon): copies the reference and the verse text. In Word the reference is pasted in bold. The button shows a check mark and **Copied!** for a moment.
- **Close** (an X): closes the panel. Clicking elsewhere or `Esc` does not.
- Drag the header to move the panel, and drag its bottom-right corner to resize it.

Several verse panels can be open at once; opening one that is already open brings it to the front.

## Bible verse mentions › Switch a Bible verse to another version

<!-- chunk {"id":"ui/bible-verses/switch-a-bible-verse-to-another-version","section":"Bible verse mentions","title":"Switch a Bible verse to another version","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

Some apps that host the editor let you read a verse mention in another Bible version.

When the app supports it, the version label in the Bible verse panel's header, for example `KJV` in `(KJV) Genesis 1:1`, is underlined and shows the tooltip **Change Bible version**. Click it; how you choose the other version is up to the app.

When the app returns the verse in another version, a second panel opens slightly offset from the first, showing that version's reference and text. If a panel for that version is already open, it is updated and brought to the front instead.

Switching versions never changes your note: the verse mention keeps the version you pasted, and the original panel stays open. If the app returns nothing, for example because you cancelled, nothing happens.

When the app does not offer this, the version label is plain text and cannot be clicked.

## Bible verse mentions › Open the verses listed for a person or place

<!-- chunk {"id":"ui/bible-verses/open-the-verses-listed-for-a-person-or-place","section":"Bible verse mentions","title":"Open the verses listed for a person or place","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

Person and place records list the verses where their name appears. To see them:

- In a person's hover card or detail panel, click **Details**; the **Verses** row lists the verses.
- In a place's hover card or detail panel, click **Details**, then click the **Verses** heading, which shows how many verses there are.

Each verse is a link. If the app supplies verse references, the links read like `Genesis 1:1`, possibly styled by the app; otherwise they show short codes such as `GEN 1:1` (a three-character book code, then chapter and verse).

Click a verse to open it in a Bible verse panel with its text. This needs the app to supply verse text; without it, clicking a verse does nothing.

Verse links inside a record's description work the same way.

## Bible verse mentions › Does typing a reference like John 3:16 create a link?

<!-- chunk {"id":"ui/bible-verses/does-typing-a-reference-like-john-316-create-a-link","section":"Bible verse mentions","title":"Does typing a reference like John 3:16 create a link?","tags":["bible","verses","mentions","paste"],"source":"knowledge/ui/05-bible-verses.md","package":"bible-note@0.6.2"} -->

No. A reference you type into your note, such as `John 3:16`, stays ordinary text: it is not turned into a verse mention or a link and has no hover card. To get a reference you can hover and open, paste the verse text right after a `^`.

Some apps that host the editor read the Bible references in a note, both verse mentions and references typed as text, for example to list or look up the verses a note covers. When an app does this, these forms are recognised:

- English book names, in full or as common abbreviations, with or without a period: `Genesis 1:1`, `Gen 1:1`, `Gen. 1:1`, `Matt 5:3`, `Rev 22:21`. Capital letters do not matter.
- Numbered books written `1 John 4:8`, `I John 4:8`, `1st John 4:8` or `First John 4:8`.
- Ranges inside a chapter, `John 3:16-18`, count every verse; a range across chapters, `Genesis 1:31-2:3`, counts only its two ends.
- Lists such as `Genesis 1:1-3, 5; 2:4`, with any kind of dash in ranges, and Khmer digits as numbers.

Not recognised: a chapter on its own (`Genesis 1`), a reference broken across two lines, and chapter numbers above 150 or verse numbers above 176.

## Lookup panel › Open and close the lookup panel

<!-- chunk {"id":"ui/lookup-panel/open-and-close-the-lookup-panel","section":"Lookup panel","title":"Open and close the lookup panel","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

The lookup panel lets you search and browse every name and location the app has loaded, without inserting anything into your note.

- **Open**: click the footer button with a person icon and a pin icon (tooltip **Show Lookup (name or location)**). The panel opens along the right side of the window under the heading **Lookup (name or location)**, and the footer button stays highlighted while it is open.
- **Close**: click the X at the top right of the panel (tooltip **Close lookup**), or click the footer button again (its tooltip is then **Hide Lookup**).

The lookup panel and the comments panel use the same spot on the right. If the comments panel was opened later and covers the lookup panel, the first click on the lookup footer button brings the lookup panel back to the front; the next click closes it.

The lookup panel is not shown in very narrow windows (600 pixels wide or less).

## Lookup panel › Search for a name or location in the lookup panel

<!-- chunk {"id":"ui/lookup-panel/search-for-a-name-or-location-in-the-lookup-panel","section":"Lookup panel","title":"Search for a name or location in the lookup panel","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

1. Open the lookup panel with the footer button **Show Lookup (name or location)**.
2. Pick the **Names** tab for people (and other name records) or the **Locations** tab for places.
3. Type in the search box. Its placeholder reads **Search names…** on the **Names** tab and **Search locations…** on the **Locations** tab.

Results update as you type. A record matches when your text appears anywhere in its name, ignoring capital letters. The search also checks the record's other name (shown as **Also called** in its details) and, in a translated dataset, its English KJV name, so you can search in either language.

Exact matches come first, then names that start with your text, then names that only contain it; within each group, records the dataset ranks as more important come first. With an empty search box the tab lists every record, most important first.

Click the X inside the search box (tooltip **Clear search**) to empty it. Each tab keeps its own search text, so switching between **Names** and **Locations** does not lose what you typed.

## Lookup panel › Filter lookup results by name type

<!-- chunk {"id":"ui/lookup-panel/filter-lookup-results-by-name-type","section":"Lookup panel","title":"Filter lookup results by name type","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

On the **Names** tab of the lookup panel, the dropdown with a funnel icon next to the tabs (tooltip **Filter by name type**) limits the list to one kind of name record.

- **All types** shows everything and is always first.
- The other choices are the kinds present in the loaded dataset, with the most common kind first. The possible kinds are **People**, **Places**, **Groups**, **Concepts**, **Deities**, **Months**, **Supernatural**, **Life** and **Unknown**; only kinds that actually occur in the dataset are offered.

The filter works together with the search box: for example, choose **Groups** and type a few letters to search only the group records. Changing the filter returns the list to its first page.

The filter applies to names only. On the **Locations** tab the dropdown is greyed out, shows `----` and has the tooltip **Type filter applies to names only**.

## Lookup panel › Page through lookup results

<!-- chunk {"id":"ui/lookup-panel/page-through-lookup-results","section":"Lookup panel","title":"Page through lookup results","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

The lookup panel shows 20 results per page. The list scrolls when the panel is too short to show them all.

The bar under the list shows the current page, the number of pages and the number of results, for example `2 / 12 · 231` (page 2 of 12, 231 results):

- Click the left or right arrow to go to the previous or next page. An arrow is greyed out on the first or last page.
- To jump to a page, click the page number box (tooltip **Type a page number and press Enter**), type a number and press `Enter`. Press `Esc` to cancel. A number past the last page takes you to the last page.

Typing a new search or changing the name type filter always returns to page 1. The page bar is hidden when nothing matches.

## Lookup panel › What a lookup result shows

<!-- chunk {"id":"ui/lookup-panel/what-a-lookup-result-shows","section":"Lookup panel","title":"What a lookup result shows","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

Each row in the lookup panel's list shows:

- an icon: on the **Names** tab the icon for the kind of name (person, group, place, deity, month and so on); on the **Locations** tab a map pin;
- the name in bold;
- in a translated dataset, the English KJV name in parentheses after it;
- the record's short title line underneath, cut to two lines.

Hover a row to see the whole title line as a tooltip (or the name, when the record has no title line).

The list uses the font the app sets for the dataset's language, if any, and the search box uses the same font.

## Lookup panel › Open details for a lookup result

<!-- chunk {"id":"ui/lookup-panel/open-details-for-a-lookup-result","section":"Lookup panel","title":"Open details for a lookup result","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

Click a row in the lookup panel to open that person's or place's detail panel, the same floating window you get by clicking the icon of a mention in your note. It shows the title line, description and facts, and a **Details** section with family, locations, verses, links and, for places, a map when coordinates are known.

Clicking a result does not insert anything into your note. To put that person or place into your note, type `@` (people) or `#` (places) followed by the first letters of the name and pick it from the suggestion list, or use **Insert** › **Mention Name** or **Insert** › **Pin Location** in the toolbar.

You can open several detail panels from the lookup panel, drag them by their header, resize them from the bottom-right corner, and close each with its **Close** button. The lookup panel stays open while you do.

## Lookup panel › The lookup panel says "No matches"

<!-- chunk {"id":"ui/lookup-panel/the-lookup-panel-says-no-matches","section":"Lookup panel","title":"The lookup panel says \"No matches\"","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

The lookup panel shows **No matches** when nothing in the current tab fits the search text and, on the **Names** tab, the selected name type.

- Check that you are on the right tab: **Names** for people and other names, **Locations** for places.
- On the **Names** tab, set the type filter back to **All types**.
- Try fewer letters or another spelling. The datasets use the spelling of the Bible translation they come from; in a translated dataset you can also search with the English KJV name.
- Clear the search box (the X inside it) to list every record again.

The lookup panel only searches the datasets the app hosting the editor has loaded. If both tabs show **No matches** even with an empty search box, the app has not loaded any names or locations.

## Lookup panel › Can I move or resize the lookup panel?

<!-- chunk {"id":"ui/lookup-panel/can-i-move-or-resize-the-lookup-panel","section":"Lookup panel","title":"Can I move or resize the lookup panel?","tags":["lookup","search","names","locations"],"source":"knowledge/ui/06-lookup-panel.md","package":"bible-note@0.6.2"} -->

No. The lookup panel always sits along the right side of the window and cannot be dragged or resized. Its list scrolls when there are more results than fit.

The detail panels you open from it are different: drag a detail panel by its header to move it, and drag its bottom-right corner to resize it.

If the lookup panel covers part of your note, close it with the X at its top right (tooltip **Close lookup**) or with the footer button **Hide Lookup**. In very narrow windows (600 pixels wide or less) the lookup panel is not shown at all.

## Inserting content › The Insert menu on the toolbar

<!-- chunk {"id":"ui/inserting-content/the-insert-menu-on-the-toolbar","section":"Inserting content","title":"The Insert menu on the toolbar","tags":["insert","insert menu","blocks","content","toolbar","add content"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

The **Insert** button on the toolbar (plus icon) opens a menu of things to add at the cursor:

- **Horizontal Rule** — a line across the note.
- **Default Example** — a ready-made sample study note.
- **Page Break** — starts a new page when the note is printed.
- **Media** — an image, video, PDF or audio file.
- **Excalidraw** — a hand-drawn diagram.
- **Mention Name**, **Pin Location**, **Bible Verse** — start a mention of a person, a place or a Bible verse.
- **Emoji & HTML Character** — pick an emoji or a special symbol.
- **Table**, **Poll**, **Columns Layout**, **Equation**.
- **Sticky Note** — a note that floats over the page.
- **Collapsible container** — a section you can fold away.
- **Date** — today's date.
- **Youtube Video** and **Embed Website** — embed a video or a web page.

Items that need details, such as **Media**, **Table** or **Poll**, open a dialog first; close any dialog with its close button or `Escape`. Most items are also in the `/` menu: type `/` in the note and then the item's name.

The **Insert** menu is greyed out in a read-only note, and it is not shown while the cursor is in a code block or an image caption.

## Inserting content › Insert a horizontal rule or a page break

<!-- chunk {"id":"ui/inserting-content/insert-a-horizontal-rule-or-a-page-break","section":"Inserting content","title":"Insert a horizontal rule or a page break","tags":["insert","insert menu","blocks","content","horizontal rule","divider","line","page break","print"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

- **Horizontal Rule** (on the **Insert** menu), **Divider** in the `/` menu, or typing `---` and a space on an empty line adds a thin line across the note.
- **Page Break** (on the **Insert** menu or in the `/` menu) adds a grey band labelled **PAGE BREAK**. When the note is printed, the content after it starts on a new page. The band itself is not printed.

Click a rule or a page break to select it; it is highlighted. Press `Backspace` or `Delete` to remove the selected item.

## Inserting content › Insert an image, video, PDF or audio file

<!-- chunk {"id":"ui/inserting-content/insert-an-image-video-pdf-or-audio-file","section":"Inserting content","title":"Insert an image, video, PDF or audio file","tags":["insert","insert menu","blocks","content","image","picture","photo","video","pdf","audio","media","upload"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Media** from the **Insert** menu (tooltip **Insert image, video, pdf or audio**) or type `/media`. The **Insert Media** dialog asks where the file comes from:

### URL

Type a web address or file path in **Media URL/Path**, add a short description in **Alt Text / Title** if you like, and click **Confirm**. The kind of media is taken from the end of the address:

- `.pdf` — a PDF;
- `.mp4`, `.webm`, `.ogv`, `.mov`, `.m4v` — a video;
- `.mp3`, `.m4a`, `.wav`, `.ogg`, `.oga`, `.opus`, `.aac`, `.flac`, `.weba` — audio;
- anything else — an image.

### File

Click **Media File** and pick an image, video, audio file or PDF from your computer. **Alt Text / Title** is filled in with the file name; change it if you like. For a video, audio file or PDF a **File Path** box shows where the note will look for the file; you can correct it. Click **Confirm**.

The media is placed at the cursor. You can also drag an image file into the note, or type `![description](https://example.com/picture.jpg)` to insert an image from a web address.

## Inserting content › Resize, caption, download or remove an image or other media

<!-- chunk {"id":"ui/inserting-content/resize-caption-download-or-remove-an-image-or-other-media","section":"Inserting content","title":"Resize, caption, download or remove an image or other media","tags":["insert","insert menu","blocks","content","resize image","caption","download","media options"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Click an image, video, PDF or audio player in the note to select it; it gets a blue outline. Then:

- **Resize** — drag the handles on its edges and corners (images, videos and PDFs).
- **Add Caption** — the button on a selected image, video or PDF adds a caption box under it (**Enter a caption...**). A caption left empty disappears when you click away.
- **Download media** — the download button saves a copy of the file.
- **Reveal media file** — the folder button shows the file on your computer. It only appears in apps that support it, for media stored as files on disk.
- **Move** — drag the selected item to another place in the note.
- **Remove** — press `Backspace` or `Delete`.

Press `Enter` on a selected item with a caption to jump into the caption, and `Escape` to go back to the item. Hold `Shift` while clicking to select several items.

## Inserting content › Draw a diagram with Excalidraw

<!-- chunk {"id":"ui/inserting-content/draw-a-diagram-with-excalidraw","section":"Inserting content","title":"Draw a diagram with Excalidraw","tags":["insert","insert menu","blocks","content","excalidraw","drawing","diagram","sketch"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Excalidraw** from the **Insert** menu, or type `/excalidraw` (`/drawing` and `/diagram` work too). A drawing editor opens over the note with the Excalidraw drawing tools.

At the top right of the drawing editor:

- **Enter fullscreen** / **Exit fullscreen** — make the drawing editor fill the whole screen, and back.
- **Discard** — asks **Are you sure you want to discard the changes?**; click **Discard** to close without saving, or **Cancel** to keep drawing.
- **Save** — closes the drawing editor and places the drawing in the note as a picture at the cursor.

If you click **Save** without drawing anything, nothing is added. Clicking outside the drawing editor does not close it; use **Save** or **Discard**.

While the drawing editor is open, `Ctrl` and the mouse wheel (or a pinch) zoom the drawing, not the note.

## Inserting content › Edit or resize an Excalidraw drawing

<!-- chunk {"id":"ui/inserting-content/edit-or-resize-an-excalidraw-drawing","section":"Inserting content","title":"Edit or resize an Excalidraw drawing","tags":["insert","insert menu","blocks","content","edit drawing","excalidraw","resize drawing"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Click a drawing in the note to select it. A pencil button and resize handles appear on it.

- **Edit** — click the pencil button, or double-click the drawing, to open it in the drawing editor again. Make your changes and click **Save**; **Discard** leaves the drawing as it was.
- **Resize** — drag the handles on the edges and corners.
- **Remove** — erase everything in the drawing editor and click **Save**; an empty drawing is removed from the note.

Drawings cannot be edited in a read-only note.

## Inserting content › Insert a table

<!-- chunk {"id":"ui/inserting-content/insert-a-table","section":"Inserting content","title":"Insert a table","tags":["insert","insert menu","blocks","content","table","grid","rows","columns","insert table"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Table** from the **Insert** menu, or type `/table`. In the **Insert Table** dialog:

- **Rows** — from 1 to 500 (5 to start with).
- **Columns** — from 1 to 50 (5 to start with).

Click **Confirm**; it is greyed out while a number is outside those limits. The table is placed at the cursor, with its first row and first column set as header cells.

Quicker ways:

- Type `/` followed by the size, such as `/3x4`, and choose **3x4 Table** (3 rows, 4 columns).
- Type a row of cells between pipes, such as `|Name|Verse|`, and press `Space`.

## Inserting content › Move around and resize a table

<!-- chunk {"id":"ui/inserting-content/move-around-and-resize-a-table","section":"Inserting content","title":"Move around and resize a table","tags":["insert","insert menu","blocks","content","table navigation","tab","resize column","column width","row height"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

- Click a cell to type in it.
- `Tab` moves to the next cell and `Shift+Tab` to the previous one, row by row. `Tab` in the last cell moves the cursor out of the table, to the line after it.
- Drag across several cells to select them; they are highlighted, and formatting, the cell menu and **Merge cells** then apply to all of them.
- **Column width** — point at the right edge of a cell and drag it.
- **Row height** — point at the bottom edge of a cell and drag it.

On a touch screen, tap a cell first; its right and bottom edges are then highlighted and can be dragged.

A table wider than the note can be scrolled sideways.

## Inserting content › Change a table with the cell menu

<!-- chunk {"id":"ui/inserting-content/change-a-table-with-the-cell-menu","section":"Inserting content","title":"Change a table with the cell menu","tags":["insert","insert menu","blocks","content","table menu","merge cells","delete row","insert column","cell background","header row"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Put the cursor in a table cell. A small down-arrow button appears in the top-right corner of that cell; click it to open the cell menu:

- **Merge cells** — shown when several cells are selected; joins them into one. In a merged cell the item is **Unmerge cells** instead.
- **Background color** — opens **Cell background color** to colour the selected cells.
- **Toggle Row Striping** — shades every other row.
- **Vertical Align** — **Top Align**, **Middle Align** or **Bottom Align** for the cell contents.
- **Toggle First Row Freeze** and **Toggle First Column Freeze** — keep the first row or first column in view while the table scrolls.
- **Insert row above** and **Insert row below**; **Insert column left** and **Insert column right**. With several rows or columns selected these read, for example, **Insert 2 rows above**.
- **Delete column**, **Delete row**, **Delete table**.
- **Add row header** / **Remove row header** and **Add column header** / **Remove column header** — mark the current row or column as headers, or undo that.

The cell menu button is not shown in a read-only note.

## Inserting content › Add rows, add columns or sort a table with the hover buttons

<!-- chunk {"id":"ui/inserting-content/add-rows-add-columns-or-sort-a-table-with-the-hover-buttons","section":"Inserting content","title":"Add rows, add columns or sort a table with the hover buttons","tags":["insert","insert menu","blocks","content","table add row","add column","sort table","hover"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

With a mouse or trackpad, point at a table:

- Over a cell in the **top row**, two buttons appear above that column: **Sort column** (filter icon) and **Add column** (**+**). **Add column** adds a new column to the right of it.
- Over a cell in the **first column**, an **Add row** button (**+**) appears at the table's left edge. It adds a new row below that row.

**Sort column** opens **Sort Ascending** and **Sort Descending**. They reorder the rows by the text in that column, with numbers in number order (2 before 10). When the top cell of the column is a header, the top row stays where it is. Sorting does nothing in a table that has merged cells.

These hover buttons are not shown in a read-only note. They are not shown on touch-only devices either; there, use the cell menu (the small down-arrow button in the cell with the cursor) instead.

## Inserting content › Insert a poll

<!-- chunk {"id":"ui/inserting-content/insert-a-poll","section":"Inserting content","title":"Insert a poll","tags":["insert","insert menu","blocks","content","poll","vote","survey"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Poll** from the **Insert** menu, or type `/poll`. In the **Insert Poll** dialog type the **Question** and click **Confirm**.

The poll shows the question and two empty options (**Option 1** and **Option 2**):

- Type each option's text in its box.
- **Add Option** adds another option.
- The remove button beside an option deletes it; it only works while the poll has three or more options.
- **Increase vote** (**+**) and **Decrease vote** (**−**) beside each option change its vote count. A bar behind the option shows its share of all votes, with a label such as **2 votes**.

Votes are counted in this note only; each click of **+** adds one vote.

## Inserting content › Insert a columns layout

<!-- chunk {"id":"ui/inserting-content/insert-a-columns-layout","section":"Inserting content","title":"Insert a columns layout","tags":["insert","insert menu","blocks","content","columns","layout","side by side","grid"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Columns Layout** from the **Insert** menu, or type `/columns`. In the **Insert Columns Layout** dialog, pick a layout from the list and click **Insert**:

- **2 columns (equal width)**
- **2 columns (25% - 75%)**
- **3 columns (equal width)**
- **3 columns (25% - 50% - 25%)**
- **4 columns (equal width)**

The columns are added side by side across the note, and the cursor moves into the first one. Each column can hold any content — text, lists, images, tables. Click in a column to type in it.

When the layout is the last block in the note, put the cursor on an empty line at the end of its last column and press `↓` or `→`: an empty line is added below the layout, so you can carry on writing.

## Inserting content › Insert a math equation

<!-- chunk {"id":"ui/inserting-content/insert-a-math-equation","section":"Inserting content","title":"Insert a math equation","tags":["insert","insert menu","blocks","content","equation","math","latex","katex","formula"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Equation** from the **Insert** menu, or type `/equation` (or `/math`, `/latex`). The **Insert Equation** dialog has:

- **Inline** — ticked: the equation sits inside a line of text. Unticked: it is shown larger, on a line of its own.
- **Equation** — type the formula in LaTeX, for example `\frac{a}{b}` or `x^2 + y^2`.
- **Visualization** — a live preview of the formula.

Click **Confirm** to place it at the cursor. If part of the formula has a mistake, that part is shown in red.

You can also type an inline equation between dollar signs: `$x^2$` turns into an equation when you type the closing `$`.

## Inserting content › Edit an equation

<!-- chunk {"id":"ui/inserting-content/edit-an-equation","section":"Inserting content","title":"Edit an equation","tags":["insert","insert menu","blocks","content","edit equation","math","latex"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Double-click an equation in the note. Its LaTeX source appears in an edit box, between `$` signs for an inline equation or `$$` signs for one on its own line. Change the formula, then press `Escape` or click elsewhere in the note; the equation is redrawn with your changes.

Equations cannot be edited in a read-only note.

## Inserting content › Insert a collapsible section

<!-- chunk {"id":"ui/inserting-content/insert-a-collapsible-section","section":"Inserting content","title":"Insert a collapsible section","tags":["insert","insert menu","blocks","content","collapsible","toggle","fold","expand","collapse","details"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Collapsible container** from the **Insert** menu, or type `/collapsible` (or `/toggle`). An open section is added with a bold title line and a content area under it, and the cursor goes into the title.

- Type the title, then press `Enter` to move into the content area.
- Click the triangle at the left of the title to fold the section away or open it again. Clicking the title's words places the cursor there instead.
- Pressing `Enter` in the title of a folded section opens it and moves into the content.
- When the section is the last block in the note, pressing `↓` or `→` at the end of its content adds an empty line below it.

## Inserting content › Insert a date

<!-- chunk {"id":"ui/inserting-content/insert-a-date","section":"Inserting content","title":"Insert a date","tags":["insert","insert menu","blocks","content","date","calendar","time","today"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Date** from the **Insert** menu, or type `/today`, `/tomorrow`, `/yesterday` or `/date`. The date appears in the text as a small chip, such as **Sat Nov 07 2026**.

Click the chip to change it:

- Pick a day in the calendar. Use the month and year lists at the top, or the arrows, to move to another month.
- Tick **Include time** to add a time, then set it in the **Time** box. Your time zone is shown next to it.

Click outside the calendar or press `Escape` to close it.

## Inserting content › Embed a YouTube video or a web page

<!-- chunk {"id":"ui/inserting-content/embed-a-youtube-video-or-a-web-page","section":"Inserting content","title":"Embed a YouTube video or a web page","tags":["insert","insert menu","blocks","content","youtube","video","embed","website","iframe","web page"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

- **YouTube** — choose **Youtube Video** from the **Insert** menu (or type `/youtube`). Paste the video's link into the **Embed Youtube Video** dialog, for example `https://www.youtube.com/watch?v=…`, and click **Embed**. The video player is added to the note.
- **Web page** — choose **Embed Website** from the **Insert** menu (or type `/website`). Paste any `http://` or `https://` address into the **Embed Website** dialog and click **Embed**. The page is shown in a frame in the note. YouTube links are embedded as videos instead.

**Embed** stays greyed out until the address is recognised.

An embedded web page can be resized: click it to select it, then drag the handles on its edges and corners.

## Inserting content › Embed a link you paste

<!-- chunk {"id":"ui/inserting-content/embed-a-link-you-paste","section":"Inserting content","title":"Embed a link you paste","tags":["insert","insert menu","blocks","content","paste link","auto embed","youtube","website"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

When you paste just a web address into the note, it becomes a link and a small menu opens next to it:

- **Embed Youtube Video** (for a YouTube link) or **Embed Website** (for any other web page) — replaces the link with the embedded video or page.
- **Dismiss** — keeps it as an ordinary link.

Choose with the mouse, or with `↓`/`↑` and `Enter`. `Escape` closes the menu and keeps the link.

## Inserting content › Insert a code block and choose its language

<!-- chunk {"id":"ui/inserting-content/insert-a-code-block-and-choose-its-language","section":"Inserting content","title":"Insert a code block and choose its language","tags":["insert","insert menu","blocks","content","code block","programming","syntax highlighting","language"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

To start a code block:

- choose **Code Block** from the block type menu on the toolbar (`Ctrl+Alt+C`, or `⌘+Opt+C` on macOS);
- type `/code`; or
- type three backticks (` ``` `) at the start of a line and press `Space` or `Enter`. Add a language name right after them, such as ` ```js `, to set the language too.

While the cursor is in a code block, the toolbar shows a language menu (**Select language**) instead of the text styling buttons. Choose **C**, **C-like**, **C++**, **CSS**, **HTML**, **Java**, **JavaScript**, **Markdown**, **Objective-C**, **Plain Text**, **PowerShell**, **Python**, **Rust**, **SQL**, **Swift**, **TypeScript** or **XML** to colour the code to match.

When the **Use Shiki for Code Highlighting** switch is on in the settings panel (only in some apps), a second menu, **Select theme**, picks the colour scheme. When **Enable Code Highlighting** is off, the language menu is not shown.

## Inserting content › Copy or tidy the code in a code block

<!-- chunk {"id":"ui/inserting-content/copy-or-tidy-the-code-in-a-code-block","section":"Inserting content","title":"Copy or tidy the code in a code block","tags":["insert","insert menu","blocks","content","copy code","format code","prettier"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

With a mouse or trackpad, point at a code block. A small bar appears on the block with the language name and two icon buttons:

- The copy button copies all the code in the block. Its icon briefly turns into a tick.
- The magic-wand button tidies the layout of the code (it uses the Prettier code formatter). It is only offered for **CSS**, **HTML**, **JavaScript**, **Markdown** and **TypeScript**. If the code has a mistake, the icon turns into an exclamation mark; point at it to read the error.

These buttons are not shown on touch-only devices.

## Inserting content › Insert an emoji or a special character

<!-- chunk {"id":"ui/inserting-content/insert-an-emoji-or-a-special-character","section":"Inserting content","title":"Insert an emoji or a special character","tags":["insert","insert menu","blocks","content","emoji","symbol","special character","html entity"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

Choose **Emoji & HTML Character** from the **Insert** menu. The **Insert Emoji or HTML Character** dialog has two tabs:

- **Emoji** — search by name, alias or tag.
- **HTML** — the named HTML characters: symbols, arrows, Greek and accented letters, special spaces and more. Search by the character, its entity name (such as `&copy;`) or its description.

Type in the search box to filter, then click a result to insert it at the cursor; the dialog closes. **No matches** means nothing fits the search. With an empty search box, the characters you used most recently are listed first, and the dialog remembers which tab you used last.

## Inserting content › Insert the Default Example note

<!-- chunk {"id":"ui/inserting-content/insert-the-default-example-note","section":"Inserting content","title":"Insert the Default Example note","tags":["insert","insert menu","blocks","content","default example","sample","demo","template"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

**Default Example** on the **Insert** menu adds a ready-made sample study of Genesis 1 at the cursor. It shows off many kinds of content at once: a quoted Bible passage, a collapsible section, bullet, numbered and check lists, a table, a code block and a two-column layout.

Use it to see what the editor can do, or as a starting point. Delete the parts you do not need, or use **Undo** straight away to remove it all.

## Inserting content › Move a block by dragging it

<!-- chunk {"id":"ui/inserting-content/move-a-block-by-dragging-it","section":"Inserting content","title":"Move a block by dragging it","tags":["insert","insert menu","blocks","content","drag handle","move block","reorder","drag and drop"],"source":"knowledge/ui/07-inserting-content.md","package":"bible-note@0.6.2"} -->

With a mouse or trackpad, point at any paragraph, heading, list, table, image or other block. A drag handle (six dots) appears in the margin to its left, next to a **+** button.

- Drag the handle up or down. A line shows where the block will go; let go to drop it there.
- Click **+** (**Click to add below**) to choose a new block to add below this one from a filterable list. Hold `Alt` (`Option` on macOS) or `Ctrl` while clicking to add it above instead.

The drag handle and **+** button need a pointer that can hover, so they are not shown on touch-only devices such as phones and tablets. There, cut and paste the text to move it.

## Sticky notes › Add a sticky note

<!-- chunk {"id":"ui/sticky-notes/add-a-sticky-note","section":"Sticky notes","title":"Add a sticky note","tags":["sticky notes","annotations"],"source":"knowledge/ui/08-sticky-notes.md","package":"bible-note@0.6.2"} -->

A sticky note is a small coloured note that floats on top of the writing area, separate from the note's text.

1. Click **Insert** in the toolbar.
2. Choose **Sticky Note**.

A new yellow sticky note appears in the top-left corner of the writing area, showing the hint "What's up?". Click inside it and start typing. Then drag it to wherever you want it.

**Insert** is greyed out while read-only mode is on, so unlock the note first. Sticky notes are not offered in the `/` menu; use the toolbar.

Sticky notes are part of the note. They are saved with it automatically, included when you **Export** a backup, and placed in a Word document as pictures when you use **Download Word Document**.

## Sticky notes › Write in a sticky note

<!-- chunk {"id":"ui/sticky-notes/write-in-a-sticky-note","section":"Sticky notes","title":"Write in a sticky note","tags":["sticky notes","annotations"],"source":"knowledge/ui/08-sticky-notes.md","package":"bible-note@0.6.2"} -->

Click inside a sticky note and type. Sticky-note text is plain text: the toolbar formatting buttons do not apply to it.

The text uses a handwriting-style font. The app the editor runs in can add extra fonts so that other scripts, such as Khmer, display properly in sticky notes.

When the text is longer than the sticky note, it scrolls inside the note. Make the sticky note bigger with its resize handle to see more at once.

Things to know:

- Typing in a sticky note can be undone with **Undo** (`Ctrl+Z`, or `⌘+Z` on macOS), like typing in the note.
- While read-only mode is on, sticky-note text cannot be edited.
- The find bar searches only the note's own text. Words inside sticky notes are not found.

## Sticky notes › Move and resize a sticky note

<!-- chunk {"id":"ui/sticky-notes/move-and-resize-a-sticky-note","section":"Sticky notes","title":"Move and resize a sticky note","tags":["sticky notes","annotations"],"source":"knowledge/ui/08-sticky-notes.md","package":"bible-note@0.6.2"} -->

### Move a sticky note

Point at the coloured edge around the text; the pointer changes to a move cursor. The strip along the top of the sticky note is the easiest place to grab. Drag the sticky note to its new place and let go. The editor remembers the new position.

Dragging inside the text area itself selects text instead of moving the sticky note.

A sticky note always stays inside the writing area. You cannot drag it past the edges.

### Resize a sticky note

Point at the sticky note and a small diagonal-arrow handle (**Resize**) appears in its bottom-right corner.

- Drag the handle to make the sticky note wider, narrower, taller or shorter.
- Click the handle without dragging to make the sticky note about 12% bigger in both directions.

A sticky note cannot be made smaller than its starting size, or larger than the space left in the writing area.

### Overlapping sticky notes

Clicking a sticky note brings it in front of any other sticky notes it overlaps.

## Sticky notes › Change a sticky note's colour

<!-- chunk {"id":"ui/sticky-notes/change-a-sticky-notes-colour","section":"Sticky notes","title":"Change a sticky note's colour","tags":["sticky notes","annotations"],"source":"knowledge/ui/08-sticky-notes.md","package":"bible-note@0.6.2"} -->

Each sticky note has two small, faint buttons in its top-right corner. They become clearer when you point at them.

Click the paint-bucket button (**Color**) to change the colour. Each click moves to the next colour in this order:

1. yellow (the colour of a new sticky note)
2. pink
3. blue
4. mint
5. lavender
6. peach
7. sage

After sage, the next click goes back to yellow. In dark mode each colour is shown as a deeper shade.

## Sticky notes › Delete a sticky note

<!-- chunk {"id":"ui/sticky-notes/delete-a-sticky-note","section":"Sticky notes","title":"Delete a sticky note","tags":["sticky notes","annotations"],"source":"knowledge/ui/08-sticky-notes.md","package":"bible-note@0.6.2"} -->

Click the red × button (**Delete**) in the top-right corner of the sticky note. It is removed at once, with no confirmation. If you deleted the wrong one, use **Undo** (`Ctrl+Z`, or `⌘+Z` on macOS) to bring it back.

Deleting text in the note never removes sticky notes. Even if you select all the text and press Delete, the sticky notes stay where they are. The × button is the way to remove one.

**Clear** in the footer is different: it empties the whole note, and sticky notes go with it.

## Sticky notes › Hide or show all sticky notes

<!-- chunk {"id":"ui/sticky-notes/hide-or-show-all-sticky-notes","section":"Sticky notes","title":"Hide or show all sticky notes","tags":["sticky notes","annotations"],"source":"knowledge/ui/08-sticky-notes.md","package":"bible-note@0.6.2"} -->

Use the sticky-notes button in the footer bar. Its tooltip reads **Hide Sticky Notes** while they are visible and **Show Sticky Notes** while they are hidden.

- Click it once to hide every sticky note so that you can read the text underneath.
- Click it again to show them all.

Hiding only takes the sticky notes out of view. They are not deleted and keep their text, colour, size and position.

The editor does not remember this choice. Sticky notes are shown again the next time the editor opens.

## Typing shortcuts › Start a heading, quote or list by typing markdown

<!-- chunk {"id":"ui/typing-shortcuts/start-a-heading-quote-or-list-by-typing-markdown","section":"Typing shortcuts","title":"Start a heading, quote or list by typing markdown","tags":["markdown","typing","shortcuts","emoji","autocomplete","heading","quote","bullet list","numbered list","check list"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

At the very start of a line, type one of these markers followed by a space. The marker disappears and the line changes into that kind of block:

| Type at the start of a line                 | You get                                |
| ------------------------------------------- | -------------------------------------- |
| `# `                                        | Heading 1                              |
| `## `                                       | Heading 2                              |
| `### ` to `###### `                         | Heading 3 to Heading 6                 |
| `> `                                        | Quote                                  |
| `- `, `* ` or `+ `                          | Bullet list                            |
| `1. ` (any number and a dot, such as `3. `) | Numbered list, starting at that number |
| `[ ] `                                      | Check list item                        |
| `[x] `                                      | Check list item that is already ticked |

- A list item typed straight after a list of the same kind joins that list.
- Type `[ ] ` on its own to start a check list; `- [ ] ` makes a bullet item instead, because `- ` turns into a bullet first.
- The markers only work at the very start of a line. They do nothing inside code blocks or inside an existing list item.
- To keep the characters as plain text, press **Undo** (`Ctrl+Z`, or `⌘+Z` on macOS) right after the change.

## Typing shortcuts › Start a code block by typing three backticks

<!-- chunk {"id":"ui/typing-shortcuts/start-a-code-block-by-typing-three-backticks","section":"Typing shortcuts","title":"Start a code block by typing three backticks","tags":["markdown","typing","shortcuts","emoji","autocomplete","code block","backticks","fence"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

At the start of a line, type three backticks — ` ``` ` — and press `Space` or `Enter`. The line becomes an empty code block.

To set the programming language at the same time, type its name straight after the backticks, for example ` ```js `, ` ```python `, ` ```html ` or ` ```sql `, then press `Space` or `Enter`. You can change the language later with the language menu that appears on the toolbar while the cursor is in the code block.

Markdown shortcuts are switched off inside code blocks, so you can type `#`, `*` or backticks there freely.

## Typing shortcuts › Format text as you type with markdown

<!-- chunk {"id":"ui/typing-shortcuts/format-text-as-you-type-with-markdown","section":"Typing shortcuts","title":"Format text as you type with markdown","tags":["markdown","typing","shortcuts","emoji","autocomplete","bold","italic","strikethrough","highlight","inline code"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

Type the markers around the words. The formatting is applied, and the markers removed, as soon as you type the closing marker:

| Type                           | You get         |
| ------------------------------ | --------------- |
| `**words**` or `__words__`     | **bold**        |
| `*words*` or `_words_`         | _italic_        |
| `***words***` or `___words___` | bold and italic |
| `~~words~~`                    | strikethrough   |
| `==words==`                    | highlight       |
| `` `words` ``                  | inline code     |

- Do not leave a space just inside the markers: `**bold**` works, `** bold **` does not.
- The underscore forms only work at the edges of words, so names like `snake_case_name` are left alone.
- Nothing inside inline code is formatted further.

## Typing shortcuts › Type a link, image, line, equation or emoji in markdown

<!-- chunk {"id":"ui/typing-shortcuts/type-a-link-image-line-equation-or-emoji-in-markdown","section":"Typing shortcuts","title":"Type a link, image, line, equation or emoji in markdown","tags":["markdown","typing","shortcuts","emoji","autocomplete","link","image","horizontal rule","equation"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

| Type                                                  | You get                                                     |
| ----------------------------------------------------- | ----------------------------------------------------------- |
| `[text](https://example.com)`                         | a link on "text", made when you type the closing `)`        |
| `![description](https://example.com/picture.jpg)`     | that image, made when you type the closing `)`              |
| `---`, `***` or `___`, then a space, on an empty line | a horizontal rule                                           |
| `$x^2$`                                               | an inline math equation, made when you type the closing `$` |
| `:name:`, such as `:smile:`, `:heart:` or `:pray:`    | that emoji, made when you type the closing `:`              |

Emoji names use lowercase letters, digits and underscores, the same names as on GitHub (`:thumbsup:`, `:open_book:`). A name the editor does not know is left as you typed it.

To edit an equation afterwards, double-click it.

## Typing shortcuts › Type a table row with pipes

<!-- chunk {"id":"ui/typing-shortcuts/type-a-table-row-with-pipes","section":"Typing shortcuts","title":"Type a table row with pipes","tags":["markdown","typing","shortcuts","emoji","autocomplete","table","pipes"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

You can build a simple table by typing rows of cells between pipe characters:

1. On a new line, type a row such as `|Name|Book|` and press `Space`. The line becomes a table with one row of two cells.
2. On the line straight after the table, type the next row, such as `|Moses|Exodus|`, and press `Space`. A row with the same number of cells is added to the table above.
3. To make a row the header row, type `|---|---|` on the line after it and press `Space`.

Do not type a space straight after a pipe in the middle of a row: a space typed after any `|` converts the row you have typed so far. Type `|Name|Book|` rather than `| Name | Book |`.

For a larger table, use **Table** on the **Insert** menu or type `/3x4` instead.

## Typing shortcuts › Pick an emoji by typing a colon

<!-- chunk {"id":"ui/typing-shortcuts/pick-an-emoji-by-typing-a-colon","section":"Typing shortcuts","title":"Pick an emoji by typing a colon","tags":["markdown","typing","shortcuts","emoji","autocomplete","emoji picker","colon"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

At the start of a line or after a space, type `:` followed by part of an emoji's name, such as `:pray` or `:hea`. A list of up to ten matching emoji opens, each with its name.

- Press `↓` and `↑` to move through the list, then `Enter` or `Tab` to insert the highlighted emoji. Or click one.
- Press `Escape` to close the list.
- The search matches names and tags anywhere in the word, so `:happy` finds several smiling faces.
- A space or most punctuation closes the list; hyphens and underscores are allowed in the search.

If you type a complete emoji name with a closing colon, such as `:smile:`, it turns straight into the emoji.

For a searchable list of every emoji and special character, use **Emoji & HTML Character** on the **Insert** menu.

## Typing shortcuts › Smileys that turn into emoji automatically

<!-- chunk {"id":"ui/typing-shortcuts/smileys-that-turn-into-emoji-automatically","section":"Typing shortcuts","title":"Smileys that turn into emoji automatically","tags":["markdown","typing","shortcuts","emoji","autocomplete","emoticon","smiley","auto replace"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

These text smileys are replaced by emoji as soon as you finish typing them:

| Type | You get |
| ---- | ------- |
| `:)` | 🙂      |
| `:D` | 😀      |
| `:(` | 🙁      |
| `<3` | ❤       |

The replacement happens anywhere in the text, even in the middle of a word. Only inside code blocks are the characters kept as typed.

## Typing shortcuts › Accept word suggestions while typing

<!-- chunk {"id":"ui/typing-shortcuts/accept-word-suggestions-while-typing","section":"Typing shortcuts","title":"Accept word suggestions while typing","tags":["markdown","typing","shortcuts","emoji","autocomplete","word suggestion","predictive text"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

When you are typing at the end of a paragraph and the word you are typing has at least four letters, the editor may suggest how it ends. After a moment, the rest of a matching English word appears in grey after the cursor, followed by **(TAB)**.

- Press `Tab` or `→` to accept the suggestion.
- Keep typing to ignore it; the suggestion changes or disappears.
- On a phone or tablet the hint reads **(SWIPE ⮕)** instead: swipe right on the note to accept.

Suggestions come from a built-in list of common English words. A word you started with a capital letter keeps its capital.

Suggestions are on by default. In apps that show the settings panel, the **Autocomplete** switch turns them off.

## Typing shortcuts › Indent with the Tab key

<!-- chunk {"id":"ui/typing-shortcuts/indent-with-the-tab-key","section":"Typing shortcuts","title":"Indent with the Tab key","tags":["markdown","typing","shortcuts","emoji","autocomplete","tab","indent","outdent","shift+tab","nested list"],"source":"knowledge/ui/09-typing-shortcuts.md","package":"bible-note@0.6.2"} -->

- At the start of a paragraph or list item, `Tab` indents it one step and `Shift+Tab` moves it back out. In a list this nests the item under the one above it.
- With several paragraphs selected, `Tab` and `Shift+Tab` indent or outdent all of them.
- In the middle of a line, `Tab` types a tab character.
- A paragraph can be indented at most six steps.

The **Indent** and **Outdent** items in the alignment menu on the toolbar, and `Ctrl+]` and `Ctrl+[` (`⌘+]` and `⌘+[` on macOS), do the same.

`Tab` does something else in some places:

- in a table it moves to the next cell (`Shift+Tab` to the previous one);
- in the `/`, emoji and mention menus it inserts the highlighted item;
- while a grey word suggestion is showing it accepts the suggestion.

Because `Tab` is used for indenting, it does not move the keyboard focus out of the note.

## Keyboard shortcuts › Keyboard shortcuts for formatting and editing

<!-- chunk {"id":"ui/keyboard-shortcuts/keyboard-shortcuts-for-formatting-and-editing","section":"Keyboard shortcuts","title":"Keyboard shortcuts for formatting and editing","tags":["keyboard","shortcuts","hotkeys","keys","shortcut list","ctrl","cmd"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

Press these while the cursor is in the note. On macOS, ⌘ is the Command key, Opt is the Option key and ⌃ is the Control key.

| Action | Windows / Linux | macOS |
| --- | --- | --- |
| Normal text (paragraph) | `Ctrl+Alt+0` | `⌘+Opt+0` |
| Heading 1 | `Ctrl+Alt+1` | `⌘+Opt+1` |
| Heading 2 | `Ctrl+Alt+2` | `⌘+Opt+2` |
| Heading 3 | `Ctrl+Alt+3` | `⌘+Opt+3` |
| Numbered list | `Ctrl+Shift+7` | `⌘+Shift+7` |
| Bullet list | `Ctrl+Shift+8` | `⌘+Shift+8` |
| Check list | `Ctrl+Shift+9` | `⌘+Shift+9` |
| Code block | `Ctrl+Alt+C` | `⌘+Opt+C` |
| Quote block | `Ctrl+Shift+Q` | `⌃+Shift+Q` |
| Add a comment | `Ctrl+Alt+M` | `⌘+Opt+M` |
| Increase font size | `Ctrl+Shift+.` | `⌘+Shift+.` |
| Decrease font size | `Ctrl+Shift+,` | `⌘+Shift+,` |
| Inline code | `Ctrl+Shift+C` | `⌘+Shift+C` |
| Strikethrough | `Ctrl+Shift+X` | `⌘+Shift+X` |
| Lowercase text | `Ctrl+Shift+1` | `⌃+Shift+1` |
| Uppercase text | `Ctrl+Shift+2` | `⌃+Shift+2` |
| Capitalize text | `Ctrl+Shift+3` | `⌃+Shift+3` |
| Center align | `Ctrl+Shift+E` | `⌘+Shift+E` |
| Justify align | `Ctrl+Shift+J` | `⌘+Shift+J` |
| Left align | `Ctrl+Shift+L` | `⌘+Shift+L` |
| Right align | `Ctrl+Shift+R` | `⌘+Shift+R` |
| Subscript | `Ctrl+,` | `⌘+,` |
| Superscript | `Ctrl+.` | `⌘+.` |
| Indent | `Ctrl+]` | `⌘+]` |
| Outdent | `Ctrl+[` | `⌘+[` |
| Clear formatting | `Ctrl+\` | `⌘+\` |
| Redo | `Ctrl+Y` | `⌘+Shift+Z` |
| Undo | `Ctrl+Z` | `⌘+Z` |
| Bold | `Ctrl+B` | `⌘+B` |
| Italic | `Ctrl+I` | `⌘+I` |
| Underline | `Ctrl+U` | `⌘+U` |
| Insert a link (removes it inside a link) | `Ctrl+K` | `⌘+K` |
| Find in the note | `Ctrl+F` | `⌘+F` |

With text selected, `Ctrl+K` (`⌘+K`) makes a link and opens the link box; with the cursor inside an existing link it removes the link. Many of these shortcuts are also shown next to their items in the toolbar menus, and in the tooltips of the toolbar buttons.

## Keyboard shortcuts › Find text in a note with the keyboard

<!-- chunk {"id":"ui/keyboard-shortcuts/find-text-in-a-note-with-the-keyboard","section":"Keyboard shortcuts","title":"Find text in a note with the keyboard","tags":["keyboard","shortcuts","hotkeys","keys","find","search","ctrl+f","f3","find next"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

- `Ctrl+F` (`⌘+F` on macOS) opens the **Find in note** bar at the top of the note, or moves back into it when it is already open. Text you have selected (one line, up to 120 characters) is filled in as the search.
- Type in the bar: every match is highlighted and a counter such as **2/7** shows which match you are on. The search starts from the cursor position.
- `Enter` goes to the next match and `Shift+Enter` to the previous one.
- `F3` or `Ctrl+G` (`⌘+G`) goes to the next match, and `Shift+F3` or `Ctrl+Shift+G` (`⌘+Shift+G`) to the previous one. These work while the find bar is open, even while you type in the note.
- **Match case** (**Aa**) and **Match whole word** (**ab**) narrow the search.
- `Escape` in the bar, or its close button (**Close (Esc)**), closes it and leaves the cursor on the match you were looking at.

The **Find in note** button in the footer's **View options** menu (three vertical dots) opens the same bar.

## Keyboard shortcuts › Switch to full view with F5

<!-- chunk {"id":"ui/keyboard-shortcuts/switch-to-full-view-with-f5","section":"Keyboard shortcuts","title":"Switch to full view with F5","tags":["keyboard","shortcuts","hotkeys","keys","full view","f5","distraction free","hide toolbar"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

Press `F5` to switch full view on or off. Full view hides the toolbar and the footer so the note uses the whole editor area:

- Move the pointer to the top edge of the editor to bring the toolbar back while you need it, and to the bottom edge for the footer.
- Press `F5` again to leave full view.

While the editor is open, `F5` is used for full view, so it does not reload the page.

The **Toggle full view (F5)** button in the footer's **View options** menu (three vertical dots) does the same.

## Keyboard shortcuts › Zoom the note with Ctrl and the mouse wheel, or a pinch

<!-- chunk {"id":"ui/keyboard-shortcuts/zoom-the-note-with-ctrl-and-the-mouse-wheel-or-a-pinch","section":"Keyboard shortcuts","title":"Zoom the note with Ctrl and the mouse wheel, or a pinch","tags":["keyboard","shortcuts","hotkeys","keys","zoom","ctrl+scroll","pinch","magnify","zoom in","zoom out"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

- **Mouse** — hold `Ctrl` and turn the wheel over the note: forward zooms in, backward zooms out, 3% per step. Use `Ctrl` on macOS too; `⌘` with the wheel does not zoom the note.
- **Trackpad or touch screen** — pinch with two fingers to zoom in or out.

The zoom centres on the pointer or between your fingers, and goes from 50% to 500%. It changes how big the note looks, not the size of the text in it.

The footer shows the zoom level, with **Zoom out** (**−**) and **Zoom in** (**+**) buttons and an **Editor zoom** slider. In the footer's **View options** menu (three vertical dots), **Reset zoom** goes back to 100%. With a paper page size chosen, **Fit page width** and **Fit page height** are there as well.

While the Excalidraw drawing editor is open, or the pointer is over a drawing, `Ctrl` with the wheel and pinching do not zoom the note.

## Keyboard shortcuts › Keys in the slash, emoji and mention menus

<!-- chunk {"id":"ui/keyboard-shortcuts/keys-in-the-slash-emoji-and-mention-menus","section":"Keyboard shortcuts","title":"Keys in the slash, emoji and mention menus","tags":["keyboard","shortcuts","hotkeys","keys","typeahead","slash menu keys","emoji keys","mention keys","autocomplete menu"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

Several menus open at the cursor as you type a trigger character:

- `/` — the menu for inserting blocks;
- `:` — emoji;
- `@` — people, `#` — places, `^` — Bible verses (the mention menus).

In all of them:

- Keep typing to narrow the list.
- `↓` and `↑` move the highlight; the list wraps round from the bottom to the top. The first item is highlighted when the menu opens.
- `Enter` or `Tab` inserts the highlighted item. You can also click an item.
- `Escape` closes the menu and keeps what you typed.
- `Shift+Enter` is not used by the menu; it starts a new line as usual.

## Keyboard shortcuts › Keys in toolbar menus and dialogs

<!-- chunk {"id":"ui/keyboard-shortcuts/keys-in-toolbar-menus-and-dialogs","section":"Keyboard shortcuts","title":"Keys in toolbar menus and dialogs","tags":["keyboard","shortcuts","hotkeys","keys","dropdown keys","dialog keys","escape"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

- **Toolbar menus** (block type, font, **⋯**, **Insert**, alignment) — once a menu is open, `↓` and `↑` move between its items and `Enter` chooses one. `Escape` or `Tab` closes the menu and puts the focus back on its button.
- **Dialogs** such as **Insert Table** or **Insert Media** — `Escape` or the close button in the corner closes the dialog without inserting anything.
- **Link box** — `Enter` saves the address you typed and `Escape` cancels.
- **Date calendar** — `Escape` closes it.
- **Images, drawings and other objects** — click one to select it, then `Backspace` or `Delete` removes it.

## Keyboard shortcuts › Page Up and Page Down with a paper page size

<!-- chunk {"id":"ui/keyboard-shortcuts/page-up-and-page-down-with-a-paper-page-size","section":"Keyboard shortcuts","title":"Page Up and Page Down with a paper page size","tags":["keyboard","shortcuts","hotkeys","keys","page down","page up","paper","page size","a4","letter"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

When the note uses a paper page size — chosen with the **Page size** menu in the footer, for example **A4** or **Letter** rather than **Web view** — `Page Down` and `Page Up` scroll the note exactly one page down or up, so the top of a page lines up with the top of the view.

This only happens while the cursor is in the note and no other key (such as `Shift` or `Ctrl`) is held. With **Web view**, the keys scroll as usual.

## Keyboard shortcuts › Shortcut keys for the app's own footer buttons

<!-- chunk {"id":"ui/keyboard-shortcuts/shortcut-keys-for-the-apps-own-footer-buttons","section":"Keyboard shortcuts","title":"Shortcut keys for the app's own footer buttons","tags":["keyboard","shortcuts","hotkeys","keys","footer buttons","custom shortcuts","host app"],"source":"knowledge/ui/10-keyboard-shortcuts.md","package":"bible-note@0.6.2"} -->

The app that hosts the editor can add its own buttons to the editor's footer and give each one a shortcut key, such as `Ctrl+Shift+K`. The shortcut is shown in brackets in the button's tooltip, and pressing it works like clicking the button, from anywhere on the page.

Which buttons and shortcuts there are depends on the app; they are not part of the editor itself. Hover over a footer button to see whether it has a shortcut.

## Find, zoom and view › Search the note with the find bar

<!-- chunk {"id":"ui/find-zoom-and-view/search-the-note-with-the-find-bar","section":"Find, zoom and view","title":"Search the note with the find bar","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

### Open the find bar

Press `Ctrl+F` on Windows and Linux, or `⌘+F` on macOS. You can also point at the footer, open **View options** (⋮) and click **Find in note** (the magnifier). The find bar appears at the top of the writing area, just under the toolbar, with the cursor in its **Find in note** box.

If you select a word or short phrase before opening the find bar, it is filled in for you. Pressing `Ctrl+F` / `⌘+F` while the bar is already open selects the search box again.

### Search

Type in the box. Every match in the note is highlighted as you type, and the current match is highlighted more strongly and scrolled into view. A counter such as **3/12** shows which match you are on and how many there are. **0/0** means nothing matched.

- **Aa** (**Match case**) finds only matches with the same capital and small letters.
- **ab** (**Match whole word**) skips matches that are part of a longer word.

### Go to the next or previous match

| Go to          | Keys                                                                                  |
| -------------- | ------------------------------------------------------------------------------------- |
| Next match     | `Enter` in the search box, `F3`, or `Ctrl+G` (`⌘+G` on macOS)                         |
| Previous match | `Shift+Enter` in the search box, `Shift+F3`, or `Ctrl+Shift+G` (`⌘+Shift+G` on macOS) |

The up and down arrow buttons (**Previous match**, **Next match**) do the same. After the last match the search wraps round to the first. `F3` and `Ctrl+G` work only while the find bar is open.

### Close the find bar

Press `Esc` in the search box or click × (**Close**). The text cursor is left on the match you were looking at.

### What is searched

The find bar searches the note's own text, including headings, lists and tables. It does not search inside sticky notes, comments, or pictures, drawings and other embedded items. A match never runs across two paragraphs.

## Find, zoom and view › Zoom the note in and out

<!-- chunk {"id":"ui/find-zoom-and-view/zoom-the-note-in-and-out","section":"Find, zoom and view","title":"Zoom the note in and out","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

Zoom makes the writing area bigger or smaller. The toolbar and footer stay the same size. The zoom controls sit at the left end of the footer bar:

- **Zoom out** (−) and **Zoom in** (+) change the zoom one percent per click.
- Drag the **Editor zoom** slider for bigger jumps.
- The number beside them, such as **100%**, shows the current zoom.

Zoom goes from 50% to 500%.

### Zoom with the mouse or touch

- Hold `Ctrl` and turn the mouse wheel over the note. Use `Ctrl` on macOS too, not `⌘`. Each notch changes the zoom by 3%, and the note zooms around the mouse pointer.
- On a touch screen, pinch with two fingers over the note.

Over an Excalidraw drawing, the wheel and pinch zoom the drawing instead of the note.

### Go back to 100%

Point at the footer, open **View options** (⋮) and click **Reset zoom** (the circular arrow). The button is greyed out when the zoom is already 100%.

The editor remembers the zoom level the next time it opens.

## Find, zoom and view › Use the View options menu

<!-- chunk {"id":"ui/find-zoom-and-view/use-the-view-options-menu","section":"Find, zoom and view","title":"Use the View options menu","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

**View options** is the ⋮ button just to the right of the zoom percentage in the footer bar. It stays faint until you point at the footer. Pointing at it, or reaching it with the `Tab` key, opens a small row of buttons:

- **Find in note** (magnifier) opens the find bar, the same as `Ctrl+F` (`⌘+F` on macOS).
- **Reset zoom** (circular arrow) returns the zoom to 100%. It is greyed out when the zoom is already 100%.
- **Toggle full view (F5)** (square) hides the toolbar and footer so that the note fills the editor. The square turns green while full view is on.
- **Fit page width** (left-right arrow) zooms so that one whole page width fits the window.
- **Fit page height** (up-down arrow) zooms so that one whole page height fits the window.

**Fit page width** and **Fit page height** only appear when a paper page size, such as A4 or Letter, is chosen in the **Page size** list. They are not there in **Web view**.

## Find, zoom and view › Preview the note on a paper page size

<!-- chunk {"id":"ui/find-zoom-and-view/preview-the-note-on-a-paper-page-size","section":"Find, zoom and view","title":"Preview the note on a paper page size","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

The **Page size** list in the footer bar (next to a page icon) changes how the note is laid out on screen. It starts on **Web view**, where the text fills the width of the editor.

Choose a paper size to see the note as a sheet of paper that size, on a grey background, with a thin line where each page ends. The sheet grows a page at a time as you write.

The page sizes are:

- **Web view** (no paper)
- **A4** and **A4 landscape**
- **A5** and **A5 landscape**
- **A3** and **A3 landscape**
- **Letter** and **Letter landscape**
- **Legal** and **Legal landscape**
- **Tabloid** and **Tabloid landscape**
- **1024x768** and **1280x720**, landscape slide-shaped pages

The last entry, **Full Screen**, is not a page size. It makes the editor fill the whole screen.

The chosen page size is remembered. It is also used when you **Print** and when you **Download Word Document**; a Word file made from **Web view** uses Letter paper.

With a paper size chosen, **View options** (⋮) also offers **Fit page width** and **Fit page height** to zoom the page to fit the window.

## Find, zoom and view › Jump between pages with Page Up and Page Down

<!-- chunk {"id":"ui/find-zoom-and-view/jump-between-pages-with-page-up-and-page-down","section":"Find, zoom and view","title":"Jump between pages with Page Up and Page Down","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

When a paper page size such as A4 or Letter is chosen in the footer's **Page size** list, the note is shown as pages. With the text cursor in the note:

- `Page Down` scrolls smoothly to the top of the next page.
- `Page Up` scrolls back to the top of the previous page.

The jumps line up with the page lines at any zoom level. They do not work while `Shift`, `Ctrl`, `Alt` or `⌘` is held down. In **Web view** there are no pages, so `Page Up` and `Page Down` behave normally.

## Find, zoom and view › Jump back to the top of the note

<!-- chunk {"id":"ui/find-zoom-and-view/jump-back-to-the-top-of-the-note","section":"Find, zoom and view","title":"Jump back to the top of the note","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

Once you scroll a little way down a long note, a small round **Scroll to top** button with an up arrow (↑) fades in at the bottom-right corner of the writing area, just above the footer bar. Click it to glide back to the beginning of the note.

- The button is see-through frosted glass and sits in the empty margin to the right of the text, so it does not hide what you are reading. It becomes solid while you point at it.
- It stays hidden while you are already near the top of the note, and fades away again once you get there.
- Clicking it only moves the view. Your text cursor and any selected text stay where they were, so you can keep typing at the same place.
- It works in **Web view**, on paper page sizes such as A4, and in full view.
- It is never printed or included in a Word download.

## Find, zoom and view › Jump to a heading with the Table of contents button

<!-- chunk {"id":"ui/find-zoom-and-view/jump-to-a-heading-with-the-table-of-contents-button","section":"Find, zoom and view","title":"Jump to a heading with the Table of contents button","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings","outline","navigation","jump"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

The **Table of contents** button lists every heading in the note and takes you straight to the one you pick. It is the first button at the left end of the toolbar, before **Undo**, and shows lines of different lengths, like an outline.

### Turn the Table of contents button on

The button only appears while the **Table Of Contents** switch is on. In apps that have the settings panel, click the round gear button near the bottom-left corner and turn on **Table Of Contents**; turn it off to hide the button again. Some apps turn it on for you.

### Read the list of headings

Click **Table of contents** to open a frosted-glass list just below the button.

- Headings are listed in the order they appear in the note, including headings inside layout columns, tables and collapsible sections.
- Smaller headings are indented under larger ones, for example a Heading 3 under a Heading 2. The top level is in bold.
- The heading of the part of the note you are reading is shown in blue, with a blue bar on its left.
- Each heading is shown as you typed it, even if the note displays it in capital letters. Long headings end in "…"; point at one to see all of it.
- A heading with no text yet is listed as _Empty heading_.
- If the note has no headings, the list says **No headings in this note yet**. Choose **Heading 1**, **Heading 2** or **Heading 3** in the block type menu to make one.

### Go to a heading

Click a heading in the list. The list closes and the note glides until that heading sits at the top of the writing area, just below the find bar if it is open. The text cursor moves to the start of the heading, so you can start typing there.

- Near the end of a note there may not be enough text below a heading to bring it all the way up; the note scrolls as far as it can.
- In a read-only note the note still scrolls to the heading, but the cursor does not move.
- A heading inside a closed collapsible section is not opened. The note scrolls to the collapsible section instead and the cursor stays where it was.
- It works in **Web view**, on paper page sizes such as A4, at any zoom level and in full view.

### Use the keyboard

With the **Table of contents** button focused, press `Enter` to open the list. The highlight starts on the heading of the part you are reading. Press `↑` or `↓` to move through the headings, `Enter` to go to the highlighted one, or `Esc` to close the list without moving.

The button and its list are never printed.

## Find, zoom and view › Use full view and full screen

<!-- chunk {"id":"ui/find-zoom-and-view/use-full-view-and-full-screen","section":"Find, zoom and view","title":"Use full view and full screen","tags":["find","search","zoom","view","page size","full screen","scroll to top","table of contents","headings"],"source":"knowledge/ui/11-find-zoom-and-view.md","package":"bible-note@0.6.2"} -->

### Full view

Full view hides the toolbar and the footer bar so that the writing area gets all of the editor's space. To turn it on or off:

- press `F5`, or
- point at the footer, open **View options** (⋮) and click **Toggle full view (F5)**. Its square turns green while full view is on.

While full view is on, move the mouse to the very top edge of the editor to bring the toolbar back, or to the very bottom edge to bring the footer back. They hide again when the mouse moves away. In this editor `F5` switches full view; it does not reload the page.

### Full screen

Open the **Page size** list in the footer and choose **Full Screen**. The editor fills the entire screen and switches to full view at the same time. The page size itself does not change.

To leave full screen, press `Esc`. Full view ends at the same time.

## Import, export and print › Find the import, export and print buttons

<!-- chunk {"id":"ui/import-export-and-print/find-the-import-export-and-print-buttons","section":"Import, export and print","title":"Find the import, export and print buttons","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

The file buttons are in the footer bar at the bottom of the editor, as icons. Point at one to see its name:

- **Import Word Document** opens a `.docx` file in the editor.
- **Download Word Document** saves the note as a `.docx` file.
- **Print** prints the note.
- **Page size** is the paper size used for printing and for Word files.
- **Clear** empties the whole note.
- **Share as Link** turns the note into a web link.
- **Convert From Markdown** switches the note to or from Markdown text.
- **Import** loads a BibleNote backup file.
- **Export** saves a BibleNote backup file.
- **Editor Information** shows the editor's version.

Not every app shows every button:

- **Share as Link** and **Convert From Markdown** appear only when the editor runs in a web browser. A desktop app hides them.
- In a compact footer, **Import**, **Export** and **Editor Information** are moved into a **More actions** (⋯) menu.
- The app the editor runs in can add its own buttons before and after the built-in ones. What those buttons do, and their keyboard shortcuts, vary from app to app; point at one to read its tooltip.

How files are opened and saved depends on the app. In a web browser you pick files with the browser's file picker, and saved files go to your downloads. In a desktop app, the system's own Open and Save dialogs appear.

## Import, export and print › Save the note as a Word document

<!-- chunk {"id":"ui/import-export-and-print/save-the-note-as-a-word-document","section":"Import, export and print","title":"Save the note as a Word document","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

Click **Download Word Document** in the footer bar. The editor creates a Microsoft Word file named like "BibleNote 2026-05-09T09-30-00-000Z.docx". In a web browser it is downloaded; in a desktop app a Save dialog lets you choose where it goes.

The Word file uses the paper size chosen in the footer's **Page size** list; with **Web view** it uses Letter.

What the Word file contains:

- The note's text, headings, emphasis, lists, tables, links and images.
- A **References** section after the note. Every person, place and Bible-verse mention links to its entry there, with the details its hover card would show, such as the description, family, places and verse text.
- Equations as editable Word equations.
- Sticky notes, drawings and embedded items as pictures.
- Checklists, collapsible sections, column layouts, highlights and code blocks rewritten into forms Word can show.

The file also carries a hidden copy of the BibleNote note. This lets **Import Word Document** restore it exactly later, as long as the file has not been edited and saved in Word.

If something goes wrong, a "Word export failed" message explains why.

## Import, export and print › Open a Word document in the editor

<!-- chunk {"id":"ui/import-export-and-print/open-a-word-document-in-the-editor","section":"Import, export and print","title":"Open a Word document in the editor","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

Click **Import Word Document** in the footer bar and choose a `.docx` file. Older `.doc` files are not supported.

**The imported document replaces everything in the current note.** Use **Export** or **Download Word Document** first if you want to keep the current note.

A "Word document imported" message then says which kind of import happened:

- **Exact restore.** For a file made with **Download Word Document** that has not been changed in Word, the message says the document was restored from its BibleNote round-trip data. Everything comes back as it was, including mentions, sticky notes and other editor-only content. The **References** section is left out.
- **Word content import.** For a file from another program, or one edited and saved in Word, the text, headings, emphasis, lists, tables, links and embedded images are brought in as editable content. Word-only layout details may be simplified.

If parts of the file could not be converted, the message lists them under "import warnings". Click **Done** to close it.

If the file cannot be read, a "Word import failed" message explains why. For example, the file may not be a valid `.docx` document, or it may contain nothing that can be imported.

## Import, export and print › Back up or restore a note with Export and Import

<!-- chunk {"id":"ui/import-export-and-print/back-up-or-restore-a-note-with-export-and-import","section":"Import, export and print","title":"Back up or restore a note with Export and Import","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

**Export** and **Import** are the lossless way to save and reload a note. The backup file keeps everything in the note exactly, including mentions, sticky notes, drawings, tables and formatting.

### Make a backup

Click **Export** (download arrow) in the footer bar. The editor saves a file named like "BibleNote 2026-05-09T09-30-00-000Z.lexical". In a web browser it goes to your downloads; in a desktop app a Save dialog lets you choose where.

### Restore a backup

Click **Import** (upload arrow) and choose a `.lexical` file. **The file replaces everything in the current note**, and the undo history is cleared, so this cannot be undone with **Undo**. If the file cannot be opened, an "Import failed" message explains why.

Comment threads are kept separately from the note, so the comments panel is not part of a backup file.

In a compact footer, **Import** and **Export** are inside the **More actions** (⋯) menu.

## Import, export and print › Print the note

<!-- chunk {"id":"ui/import-export-and-print/print-the-note","section":"Import, export and print","title":"Print the note","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

Click **Print** (printer icon) in the footer bar. Your system's print dialog opens with the note laid out for printing:

- The page size is the one chosen in the footer's **Page size** list. **Web view** uses the printer's default paper.
- The printout always uses dark text on a white page, even when the editor is in dark mode.
- A page break inserted in the note starts a new printed page.
- On-screen controls, such as sticky-note buttons and resize handles, are left out.

Some apps handle printing themselves. In that case **Print** may open the app's own print feature instead.

## Import, export and print › Clear the whole note

<!-- chunk {"id":"ui/import-export-and-print/clear-the-whole-note","section":"Import, export and print","title":"Clear the whole note","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

Click **Clear** (eraser icon) in the footer bar. A "Clear editor" dialog asks "Are you sure you want to clear the editor?".

- **Clear** empties the note: all text, sticky notes and everything else in it.
- **Cancel** leaves the note as it is.

**Clear** is greyed out when the note is already empty. It still works while read-only mode is on.

If you clear by mistake, use **Undo** straight away (`Ctrl+Z`, or `⌘+Z` on macOS) to bring the note back. The undo history is lost when the editor is closed.

## Import, export and print › Share a note as a link

<!-- chunk {"id":"ui/import-export-and-print/share-a-note-as-a-link","section":"Import, export and print","title":"Share a note as a link","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

**Share as Link** appears in the footer only when the editor runs in a web browser. Desktop apps hide it.

1. Click **Share as Link** (chain-link icon). The "Share as link" dialog opens with a link that contains the whole note.
2. To protect the link, tick **Password protect link**, then type the same password in **Password** and **Confirm password**. The link is created once both match.
3. Click **Copy link**. The button shows **Copied** when it worked. Then click **Close**.

Very long notes make very long links. Above 8,000 characters the dialog warns that the link may be too long for some apps or browsers, but it can still be copied.

Whoever opens the link sees the shared note in the editor. A password-protected link first asks for the password, and asks again if it is wrong. **Opening a shared link replaces the note stored in that browser**, so the person opening it should back up their own note first with **Export**.

## Import, export and print › Convert a note from or to Markdown

<!-- chunk {"id":"ui/import-export-and-print/convert-a-note-from-or-to-markdown","section":"Import, export and print","title":"Convert a note from or to Markdown","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

**Convert From Markdown** appears in the footer only when the editor runs in a web browser. Desktop apps hide it. It works in both directions.

- **Note to Markdown:** click the button and the whole note is replaced by its Markdown source, shown in a single Markdown code block. You can copy or edit that text there.
- **Markdown to note:** when the note starts with a Markdown code block, click the button again. The Markdown is turned back into a formatted note, with headings, lists, bold and so on.

To format Markdown you already have, start from an empty note: click **Convert From Markdown** once to get an empty Markdown code block with the cursor in it, paste your Markdown, then click the button again.

The **Preserve newlines in Markdown** setting, in the settings panel where the app provides one, keeps blank lines and line breaks during the conversion.

## Import, export and print › Use the More actions menu and Editor Information

<!-- chunk {"id":"ui/import-export-and-print/use-the-more-actions-menu-and-editor-information","section":"Import, export and print","title":"Use the More actions menu and Editor Information","tags":["import","export","word","docx","print","backup","share"],"source":"knowledge/ui/12-import-export-and-print.md","package":"bible-note@0.6.2"} -->

### More actions

Some apps use a compact footer. There, **Import**, **Export** and **Editor Information** do not appear as separate buttons; they are grouped under the **More actions** (⋯) button near the right end of the footer bar.

Click **More actions** to open the menu, then choose **Import**, **Export** or **Editor Information**. The menu closes when you choose an item, click anywhere else, or press `Esc`.

### Editor Information

Click **Editor Information** (the ⓘ button, or the menu item in a compact footer). The "Editor information" dialog shows the **Editor package** name and the **Editor version** number. Have the version ready when you report a problem.

## Comments › Open and close the comments panel

<!-- chunk {"id":"ui/comments/open-and-close-the-comments-panel","section":"Comments","title":"Open and close the comments panel","tags":["comments","review","annotations"],"source":"knowledge/ui/13-comments.md","package":"bible-note@0.6.2"} -->

Click the speech-bubble button in the footer bar. Its tooltip reads **Show Comments** while the panel is closed and **Hide Comments** while it is open. The **Comments** panel opens at the right-hand side of the editor. It lists every comment thread in the note, or says **No Comments** when there are none.

To close the panel, click the footer button again or click × (**Close comments**) at the top of the panel.

The comments panel and the lookup panel open in the same place. When both are open, the one you used last is on top. If the comments panel is open but hidden behind the lookup panel, the first click on the speech-bubble button brings it to the front; the next click closes it.

The panel also opens by itself when you click inside commented text.

The editor remembers whether the comments panel was open and opens it the same way next time.

## Comments › Add a comment to selected text

<!-- chunk {"id":"ui/comments/add-a-comment-to-selected-text","section":"Comments","title":"Add a comment to selected text","tags":["comments","review","annotations"],"source":"knowledge/ui/13-comments.md","package":"bible-note@0.6.2"} -->

1. Select the words you want to comment on.
2. Click **Insert comment** (speech-bubble icon) in the small formatting toolbar that appears above the selection. You can also press `Ctrl+Alt+M` on Windows and Linux, or `⌘+Opt+M` on macOS.
3. A comment box appears under the selection, and the selected words are shaded yellow. Type your comment in the box; it shows "Type a comment..." until you start.
4. Click **Comment**, or press `Ctrl+Enter` (`⌘+Enter` on macOS). **Comment** stays greyed out until you type something.

To give up, click **Cancel** or press `Esc`.

The commented words stay highlighted in the note, and a new thread appears in the **Comments** panel. The thread shows the commented words as a quote, cut short with "…" if longer than 100 characters, then your comment.

Every comment is labelled **Commented** with its date and time. Comments are kept only in this editor, so there are no user names.

Commenting needs the toolbar, so it is not available while the **Rich Text** setting is off.

## Comments › See which text a comment belongs to

<!-- chunk {"id":"ui/comments/see-which-text-a-comment-belongs-to","section":"Comments","title":"See which text a comment belongs to","tags":["comments","review","annotations"],"source":"knowledge/ui/13-comments.md","package":"bible-note@0.6.2"} -->

Commented text is shown with a pale yellow background and a yellow line underneath. Where two comments cover the same words, the yellow is stronger.

- **From the note to the comment:** click inside highlighted text. The **Comments** panel opens if it was closed, the matching thread is marked in the panel, and the highlight in the note turns a deeper yellow.
- **From the comment to the note:** click a thread in the **Comments** panel. The text cursor moves to the start of the highlighted words.

If you delete all of the commented text from the note, the thread stays in the **Comments** panel, but clicking it no longer jumps anywhere.

## Comments › Reply to a comment

<!-- chunk {"id":"ui/comments/reply-to-a-comment","section":"Comments","title":"Reply to a comment","tags":["comments","review","annotations"],"source":"knowledge/ui/13-comments.md","package":"bible-note@0.6.2"} -->

Each thread in the **Comments** panel ends with a "Reply to comment..." box.

1. Open the **Comments** panel with the speech-bubble button in the footer bar.
2. Click the "Reply to comment..." box under the thread you want.
3. Type your reply.
4. Click the send button (pin icon) at the right of the box, or press `Ctrl+Enter` (`⌘+Enter` on macOS).

The reply is added to the end of the thread with the label **Commented** and its date and time, and the box empties for the next reply. The send button stays greyed out while the box is empty.

## Comments › Delete a comment or a whole thread

<!-- chunk {"id":"ui/comments/delete-a-comment-or-a-whole-thread","section":"Comments","title":"Delete a comment or a whole thread","tags":["comments","review","annotations"],"source":"knowledge/ui/13-comments.md","package":"bible-note@0.6.2"} -->

Delete buttons (trash-can icons) appear in the **Comments** panel when you point at a thread or a comment.

### Delete a single comment

Point at the comment and click its trash can. A "Delete Comment" dialog asks "Are you sure you want to delete this comment?". Click **Delete** to confirm or **Cancel** to keep it.

The comment's text is replaced by **[Deleted Comment]**. The rest of the thread, and the highlight in the note, stay.

### Delete a whole thread

Point at the quoted text at the top of the thread and click the trash can next to it. A "Delete Thread" dialog asks "Are you sure you want to delete this thread?". Click **Delete** to confirm.

The thread and all its replies leave the panel, and the yellow highlight is removed from the note. The words themselves stay in the note.

## Comments › Are comments saved?

<!-- chunk {"id":"ui/comments/are-comments-saved","section":"Comments","title":"Are comments saved?","tags":["comments","review","annotations"],"source":"knowledge/ui/13-comments.md","package":"bible-note@0.6.2"} -->

Yes. The BibleNote editor saves comments automatically, together with its other data: the thread list, every reply, and whether the **Comments** panel is open. They are still there when you close and reopen the editor. Where they are stored depends on the app; in a web browser they are kept in that browser on this device.

Keep these points in mind:

- Comment threads are stored separately from the note's text. **Export** saves the note, including where the highlights are, but not the comment threads, so comments do not travel with a backup file.
- **Reset to Defaults** in the settings panel deletes all comments along with the note.

## Settings › Open the settings panel

<!-- chunk {"id":"ui/settings/open-the-settings-panel","section":"Settings","title":"Open the settings panel","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

The settings panel is opened with a round gear button, usually near the bottom-left corner of the window, just above the footer bar. Click the gear to open the panel; it turns red while the panel is open. Click it again to close the panel.

The settings panel only exists when the app the editor runs in provides it. If you see no gear button, the app does not offer these settings; look for similar options in the app's own menus.

The panel is a list of on/off switches with a **Reset to Defaults** button at the bottom. A switch takes effect as soon as you click it; there is no Save button.

The editor remembers your settings and uses them the next time it opens. Where they are stored depends on the app; in a web browser they are kept in that browser on this device. The paper size chosen in the footer's **Page size** list is remembered the same way.

## Settings › See every settings switch and its default

<!-- chunk {"id":"ui/settings/see-every-settings-switch-and-its-default","section":"Settings","title":"See every settings switch and its default","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

These are the switches in the settings panel and how each one starts out:

| Switch | Default |
| --- | --- |
| **Measure Perf** | Off |
| **Debug View** | Off |
| **Dark Mode** | Off |
| **Show invisible characters** | Off |
| **Nested Editors Debug View** | Off |
| **Rich Text** | On |
| **Nested Tables** | Off |
| **Char Limit** | Off |
| **Char Limit (UTF-8)** | Off |
| **Link Attributes** | Off |
| **Max Length** | Off |
| **Autocomplete** | On |
| **Table Of Contents** | Off |
| **Use Lexical Context Menu** | Off |
| **Preserve newlines in Markdown** | Off |
| **Use Brackets for Highlighting** | Off |
| **Retain selection** | Off |
| **Enable Code Highlighting** | On |
| **Use Shiki for Code Highlighting** | Off |

**Measure Perf**, **Debug View**, **Nested Editors Debug View**, **Char Limit**, **Char Limit (UTF-8)** and **Max Length** are developer and testing switches. Leave them off for everyday writing:

- **Debug View** and **Nested Editors Debug View** show the note's internal structure, for troubleshooting.
- **Measure Perf** measures typing speed.
- **Char Limit** and **Char Limit (UTF-8)** count characters against a test limit of only 5.
- **Max Length** limits the whole note to 30 characters and cuts off text beyond that as you type.

## Settings › Display switches: Dark Mode, invisible characters and Table Of Contents

<!-- chunk {"id":"ui/settings/display-switches-dark-mode-invisible-characters-and-table-of-contents","section":"Settings","title":"Display switches: Dark Mode, invisible characters and Table Of Contents","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

### Dark Mode

Turns the editor dark: the toolbar, writing area, panels and sticky notes switch to dark colours. Turn it off to go back to light. Some apps set the appearance themselves; in those apps the switch follows the app's theme. Printing always uses light colours.

### Show invisible characters

Shows marks for characters you normally cannot see: · for a space, → for a tab, ↵ for a line break and ¶ at the end of each paragraph. The marks are only a display aid, not part of the text. The ¶ button on the toolbar turns the same option on and off.

### Table Of Contents

Off by default. Turning it on adds a **Table of contents** button at the left end of the toolbar, before **Undo**. Click the button to open a frosted-glass list of the note's headings, indented by level, with the heading of the part you are reading shown in blue. Click a heading in the list and the note scrolls until that heading is at the top of the writing area, with the text cursor at its start (in a read-only note it only scrolls). Turn the switch off to remove the button.

## Settings › Writing switches: Autocomplete, brackets and Retain selection

<!-- chunk {"id":"ui/settings/writing-switches-autocomplete-brackets-and-retain-selection","section":"Settings","title":"Writing switches: Autocomplete, brackets and Retain selection","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

### Autocomplete

On by default. When you have typed at least four letters at the end of a word, the editor may suggest the rest of a common English word in faint text after the cursor.

- Press `Tab` or the right arrow key to accept the suggestion.
- On a touch screen, swipe right to accept it.
- To ignore it, just keep typing.

Turn the switch off to stop the suggestions.

### Use Brackets for Highlighting

When this is on, typing text inside square brackets highlights it. For example, typing `[key verse]` turns into **key verse** in bold on a yellow background, and the brackets disappear. It is off by default, so brackets stay ordinary text.

### Retain selection

Normally the selected text stops looking selected when you click somewhere else, such as a panel or a dialog. With **Retain selection** on, the selection stays visibly highlighted until you select something else.

## Settings › Use the editor's own right-click menu

<!-- chunk {"id":"ui/settings/use-the-editors-own-right-click-menu","section":"Settings","title":"Use the editor's own right-click menu","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

The **Use Lexical Context Menu** switch is off by default. Right-clicking in the note then shows the usual menu of the browser or app.

Turn it on and right-clicking in the note shows the editor's own menu instead:

- **Remove Link** turns a link back into plain text. It only appears when you right-click a link.
- **Cut**, **Copy** and **Paste** work like the usual commands.
- **Paste as Plain Text** pastes the clipboard's text without its formatting.
- **Delete Node** removes the whole top-level block the cursor is in, for example the whole paragraph, heading, list or table. With a picture or other embedded item selected, it removes that item.

**Paste** and **Paste as Plain Text** need permission to read the clipboard. If the browser or app refuses, the message "Not allowed to paste from clipboard." appears.

## Settings › Code and formatting switches

<!-- chunk {"id":"ui/settings/code-and-formatting-switches","section":"Settings","title":"Code and formatting switches","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

### Enable Code Highlighting

On by default. Code in a code block is coloured by its programming language. While the cursor is in a code block, a **Select language** list appears in the toolbar so that you can choose the language. Turn the switch off to show code blocks in plain colours.

### Use Shiki for Code Highlighting

Off by default. Switches to a different code colouring engine, Shiki. It adds a **Select theme** list in the toolbar, next to the language list, for choosing a colour theme. It has no effect while **Enable Code Highlighting** is off.

### Rich Text

On by default. Turned off, the editor becomes a plain-text editor: the toolbar disappears, the empty note shows "Enter some plain text...", and text formatting and adding comments are no longer available.

### Nested Tables

Off by default. When on, you can insert a table inside a cell of another table.

### Link Attributes

Off by default. When on, new links you create are set to open in a new tab or window.

### Preserve newlines in Markdown

Off by default. When on, **Convert From Markdown** keeps blank lines and line breaks when it converts between Markdown and the formatted note.

## Settings › Reset to Defaults

<!-- chunk {"id":"ui/settings/reset-to-defaults","section":"Settings","title":"Reset to Defaults","tags":["settings","preferences","options"],"source":"knowledge/ui/14-settings.md","package":"bible-note@0.6.2"} -->

**Reset to Defaults** is the button at the bottom of the settings panel. It is greyed out while every setting, including the page size, is at its default.

**Warning: Reset to Defaults resets more than the switches.** One click, with no confirmation:

- turns every switch back to its default and sets the page size back to **Web view**;
- deletes all comments;
- deletes the saved note and replaces it with the built-in sample study note, "Khmer BibleNote Study: Genesis 1";
- clears the undo history, so **Undo** cannot bring the old note back.

Before using it, save your note with **Export** in the footer bar, then **Import** that file afterwards.

To change just one setting back, click its switch instead of using **Reset to Defaults**.
