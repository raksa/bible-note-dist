# Bible Note

A Bible study tool for taking notes and organizing your thoughts.

It extends the [Lexical playground](https://playground.lexical.dev/): the
playground editor packaged as a drop-in component and built out with
Bible-specific features — name and location lookup, sticky notes, footer action
buttons and pluggable storage. The MIT license and Meta's copyright carry over
from upstream Lexical.

MIT license

```bash
npm install bible-note react react-dom bootstrap bootstrap-icons
```

The peer dependencies are React ^19.2.8, React DOM, and Bootstrap ^5.3.8 with
its icon font. React has to be the host's copy so there is only one of it;
Bootstrap and bootstrap-icons are global stylesheets the host imports itself, so
it keeps control of cascade order and can theme or pin its own version.
Everything else the editor needs — Lexical, Excalidraw, KaTeX, Shiki — is
bundled.

### Releasing to npm

For maintainers, from a clean `main`:

```bash
npm test
npm pack --dry-run                          # check which files go in the package
npm whoami                                  # run `npm login` if this fails
npm version patch --tag-version-prefix=""   # or minor / major
npm publish
git push origin main --follow-tags
npm view bible-note version                 # confirm the new version is live
```

## Import

```js
const { BibleNote } = require("bible-note");
// or module
import { BibleNote } from "bible-note";
```

```typescript
import { BibleNote } from "bible-note";
import type {
  BibleNoteFooterActionButton,
  FilePathResolver,
  FileRevealer,
  ExtraFontFamilyOption,
  MentionNameMatch,
  MentionLocationMatch,
} from "bible-note";
```

## Stylesheets

Three, in this order — Bootstrap first, then the icon font, then the editor's
own stylesheet last so its overrides win:

```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bible-note/styles.css";
```

Skipping the first two does not throw — it renders a broken editor: the toolbar
and footer lose their layout, and with no `@font-face` for the icon font every
`bi bi-*` glyph falls back to tofu. `bible-note/styles.css` carries the
editor, KaTeX and Excalidraw rules, and needs no configuration.

## Usage

```typescript
import {
  BibleNote,
  createBrowserStorageManager,
  LocationsLookupManager,
  NamesLookupManager,
} from "bible-note";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bible-note/styles.css";

// fromRawDataset takes the generated dataset files exactly as fetched. Use the
// plain constructors when you already hold MentionNameMatch/MentionLocationMatch
// records.
const namesLookupManager = NamesLookupManager.fromRawDataset(
  { en: namesMap },
  "en",
);
const locationsLookupManager = LocationsLookupManager.fromRawDataset(
  { en: locationsMap },
  "en",
);

const bibleNote = new BibleNote({
  namesLookupManager,
  locationsLookupManager,
  getLangCode: (text) => (/[\u1780-\u17FF]/u.test(text) ? "km" : "en"),
  editorExtraFontFamilies: [],
  stickyNoteExtraFontFamilies: [],
  storageManager: createBrowserStorageManager(),
  loadData: () => localStorage.getItem("bible-note") ?? "",
  saveData: (data) => localStorage.setItem("bible-note", data),
});

bibleNote.render(document.getElementById("root")!);
```

### Buttons on the selected-text toolbar

Selecting text in the note pops up a small toolbar over it — Bold, Italic,
Underline, …, Insert comment. A host adds its own buttons to it with
`appendFloatingActionButton` (after the built-in buttons) or
`prependFloatingActionButton` (before them). The editor renders the `<button>`
itself, so it matches the built-in ones: `children` is only its content, and
`description` is its tooltip and accessible name. Give a Bootstrap icon the
`format` class to size and tint it like the others.

```tsx
bibleNote.appendFloatingActionButton({
  id: "copy-selected-text",
  description: "Copy selected text",
  children: <i className="bi bi-clipboard format" />,
  onClick: async ({ selection }) => {
    await navigator.clipboard.writeText(selection.text);
  },
});

bibleNote.appendFloatingActionButton({
  id: "uppercase-selected-text",
  description: "Make selected text uppercase",
  isHiddenWhenReadOnly: true,
  children: <i className="bi bi-alphabet-uppercase format" />,
  onClick: ({ selection, replaceText }) => {
    replaceText(selection.text.toUpperCase());
  },
});

bibleNote.getFloatingActionButton("copy-selected-text"); // the descriptor, or null
bibleNote.removeFloatingActionButton("copy-selected-text"); // false when absent
```

`onClick` receives a `BibleNoteFloatingActionButtonClickEvent`, captured at the
click:

| Field | What it holds |
| --- | --- |
| `id` | The clicked button's `id` |
| `selection.text` | The selected text as plain text, paragraphs separated by `\n` — what Copy puts on the clipboard as `text/plain` |
| `selection.html` | The selection as HTML, formatting included — what Copy puts on the clipboard as `text/html` |
| `selection.start`, `selection.end` | The selection's two ends in document order, each `{ key, offset, type }`: the editor's node key, the character offset in a `'text'` node or the child index in an `'element'` node. Keys identify nodes of the note as it is open now; they are not saved with `content` |
| `selection.isBackward` | `true` when the user selected from the end back to the start |
| `selection.domRange` | A copy of the browser's DOM `Range` for the selection, or `null`. Measure the text on screen with `domRange.getBoundingClientRect()`; it stops matching once the note changes |
| `replaceText(text)` | Replaces the captured range with `text`, inserted the way `addText` inserts it — plain text, paste rules applied, `\n` starts a paragraph; `""` deletes the selected text. It restores the range first, so it works after an `await` or after the user clicked elsewhere. Returns `false`, changing nothing, when the note is read-only or the range no longer holds `selection.text` |
| `mouseEvent` | The React click event |

Buttons show in a read-only note too, as Insert comment does, unless
`isHiddenWhenReadOnly` is set. Ids are unique per editor: re-adding an `id`
replaces that button in place. Like footer buttons, they can be added before
`render` and are kept across `unmount`. Unlike footer buttons, they take no
`shortcutKey`.

### Microsoft Word round trips

The editor footer has separate Word import and export buttons. Export creates a
standard `.docx` that opens in Microsoft Word and includes a private BibleNote
round-trip copy of the editor state. Importing that file back restores the full
editable document, including editor-specific content that Word cannot represent
natively. If Word has removed that private data, or the file came from another
application, BibleNote falls back to Word-content conversion and preserves the
document's text, headings, emphasis, lists, tables, links, and embedded images;
Word-only layout details may be simplified.

Because a Word document has no hover cards, the export spells out what they
show. Every person, place and Bible-verse mention links to an entry in a
**References** appendix after the note: the name or location record from
`namesMap` / `locationsMap` (description, family, locations, links,
coordinates) and the verse text, with verse references resolved through
`shortToVerseData` and related people and places through
`verseFullTextToListShorts`. Each mention also carries a short screen tip.
Equations become editable Word equations. Sticky notes, drawings and embed
thumbnails are packaged as pictures. Checklists, collapsibles, column layouts,
highlights and code blocks are rewritten into forms Word renders. Re-importing
the file leaves the appendix out.

The existing Import and Export buttons remain the lossless JSON backup path.
In the Electron app, both Word and lossless editor files use native Open and
Save dialogs; browser builds continue to use the browser picker and download.

`namesMap` and `locationsMap` are the host's own datasets — the package bundles
none of its own.

The two managers own every search, ranking and index the built-in mention and
lookup UI uses, and they carry no editor dependency. To build your own mention
or lookup UI, construct them and call their methods directly — no `BibleNote`
import required:

```typescript
import { NamesLookupManager } from "bible-note";

const names = NamesLookupManager.fromRawDataset({ en: namesMap }, "en");

names.searchNames("Mos", { limit: 20 }); // ranked MentionNameMatch[]
names.searchNamesPagination({ query: "Mos", page: 2, pageSize: 20 });
names.getRecordById("name-moses");
names.searchByShortVerse("EXO 6:23"); // the names that verse mentions
names.nameTypes; // types present in the data, most common first
```

### Translated datasets

A record in a translated dataset carries the KJV English name in `kjvName`
alongside its own translated `name`. The managers index both, so the same
manager answers a query in either language, ranking an English hit exactly the
way it ranks a native-language one:

```typescript
const names = NamesLookupManager.fromRawDataset({ km: khmerNamesMap }, "km");

names.searchNames("Genesis"); // finds the record named "លោកុប្បត្តិ"
names.searchNames("លោកុប្បត្តិ"); // and so does its own name
```

The built-in UI shows the English name beside the translated one — in the
lookup panel, the mention typeahead, the hover card and the advanced panel.
`getMentionKjvName(record)` is the rule it follows: the English name, or `null`
when there is nothing to add (an untranslated dataset, or a record whose
translated name is the English one anyway).

```typescript
import { getMentionKjvName } from "bible-note";

getMentionKjvName(record); // "Genesis" | null
```

An untranslated dataset such as the KJV one carries no `kjvName` at all, and
everything above is a no-op for it.

### Styling a dataset

Both managers take an optional third argument: a plain CSS style object, merged
into every surface the built-in UI renders that dataset on — the mention
typeahead popup, the hover card, the advanced panel, and the lookup panel's list
and search box. A dataset in a script the editor's own font does not cover can
therefore carry its own `fontFamily`:

```typescript
const locations = LocationsLookupManager.fromRawDataset(
  { km: khmerLocationsMap },
  "km",
  { fontFamily: "Battambang, serif" },
);

locations.style; // read it back; assignable, too
```

The two managers are styled independently, so a Khmer location dataset can sit
beside an English name one. Anything a React `style` prop accepts works, but a
hover card's own positioning always wins over the style. Plugins read `style` as
they render, so replacing it after the editor is mounted only shows up on the
next render.

`BibleNote.getAllShortVersesFromText` bridges the two: it reads every verse a
note refers to — Bible verse mentions and references written in the prose alike
— and returns them as the short keys the managers index by. It is static, so it
also works on plain text such as a pasted passage:

```typescript
BibleNote.getAllShortVersesFromText(bibleNote.content);
// ["GEN 1:1", "GEN 1:2", "GEN 1:3", "JHN 3:16"]
```

References are returned in document order without duplicates. A range inside
one chapter is expanded verse by verse; a range crossing a chapter boundary
(`Genesis 1:31-2:3`) keeps only its two endpoints, since the package bundles no
per-chapter verse counts.

## Exports

| Export | Kind | Purpose |
| --- | --- | --- |
| `BibleNote` | class | The editor: `render`, `unmount`, `addText`, `searchText`, `content`, `isReadOnly`, footer action buttons, selected-text toolbar buttons, colour scheme, and the static `getAllShortVersesFromText` |
| `BibleNoteSettings` | component | Settings panel, passed through `render(el, { settings })` |
| `createBrowserStorageManager` | function | `localStorage`-backed `BibleNoteStorageManager` |
| `applyBibleNoteColorScheme` / `clearBibleNoteColorScheme` | function | Toggle the `light`/`dark` body classes |
| `EDITOR_STATE_LOCAL_STORAGE_KEY` | constant | Storage key the editor state is saved under |
| `BibleNoteProps`, `BibleNoteRenderOptions` | type | Constructor and `render` options |
| `BibleNoteFooterActionButton`, `BibleNoteFooterActionButtons` | type | Footer action button descriptors |
| `BibleNoteFloatingActionButton`, `BibleNoteFloatingActionButtons` | type | Selected-text toolbar button descriptors |
| `BibleNoteFloatingActionButtonClickEvent`, `BibleNoteTextSelection`, `BibleNoteSelectionPoint` | type | What a selected-text toolbar button's `onClick` receives: the selection's text, HTML and range, and `replaceText` |
| `NamesLookupManager`, `LocationsLookupManager` | class | Own the name/location datasets: ranked search, id/name lookup, pagination, verse lookup |
| `parseMentionNameMatch(es)`, `parseMentionLocationMatch(es)`, `getLookupRecordValues`, `normalizeMentionNameType` | function | Dataset normalization helpers the managers use |
| `getMentionKjvName` | function | The KJV English name to show beside a translated record's name, or `null` |
| `MentionNameMatch`, `MentionLocationMatch`, `MentionNamePreview`, `MentionLocationPreview` | type | Name/location record shapes |
| `NamesLookupManagerDataMap`, `LocationsLookupManagerDataMap`, `LookupPaginationResult` | type | Manager constructor input and search results |
| `LookupManagerStyle` | type | The extra CSS style a manager renders its dataset with |
| `FilePathResolver`, `FileRevealer`, `FilePathResolverContext` | type | Media file path hooks |
| `ExtraFontFamilyOption`, `FontFamilyOption` | type | Extra font families for the editor and sticky notes |
| `BibleNoteStorageManager` | type | Storage adapter contract |
| `BibleNoteColorScheme` | type | `'light' | 'dark'` |

## Knowledge files

The package ships two markdown files describing itself, generated on every
build:

| File | For |
| --- | --- |
| `bible-note/knowledge/development.md` | Developers: architecture, installation, every prop and hook grouped by feature, datasets and lookup managers, persistence, Electron integration, working on the editor, and a full API reference generated from the type declarations |
| `bible-note/knowledge/ui-rag.md` | A retrieval (RAG) pipeline behind an in-app assistant: end-user help for the editor UI — formatting, the slash menu, mentions, Bible verses, the lookup panel, inserting content, shortcuts, import/export, comments, settings |

Both are exposed through `exports`, so they resolve like any other subpath:

```js
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ragPath = fileURLToPath(import.meta.resolve("bible-note/knowledge/ui-rag.md"));
// CommonJS: require.resolve("bible-note/knowledge/ui-rag.md")
const corpus = await readFile(ragPath, "utf8");
```

`ui-rag.md` is pre-chunked. It opens with YAML front matter (`package`,
`version`, `chunks`), and every `## ` heading starts one self-contained chunk.
The heading is a breadcrumb (`## Mentions › Mention a person with @`), and the
line under it is an HTML comment holding the chunk's metadata as JSON:

```markdown
## Mentions › Mention a person with @

<!-- chunk {"id":"ui/mentions/mention-a-person-with","section":"Mentions","title":"Mention a person with @","tags":["mentions","names"],"source":"knowledge/ui/04-mentions.md","package":"bible-note@0.5.0"} -->

Type @ followed by a few letters of the name…
```

Split on `^## ` (a markdown-header splitter does this out of the box), parse
`<!-- chunk (.*) -->` for metadata, and index the rest. Chunk `id`s are stable
across releases as long as the section heading is unchanged; every chunk is
under 4,000 characters. The text is written for the person using the editor and
names buttons as they appear on screen.

`dist/`, `types/` and `knowledge/` here are generated by `npm run pack` from the
sources under `src/` and `knowledge/` — edit those, not the build output. This
file, `package.json` and `LICENSE` are maintained by hand and are the only files
in this folder that git tracks.
