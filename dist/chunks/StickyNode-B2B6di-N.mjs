import { A as e, Dn as t, En as n, I as r, It as i, Nr as a, Nt as o, Qr as s, Rr as c, Tr as l, V as ee, Wn as te, Xn as u, Yn as d, Zr as f, Zt as ne, ar as re, bn as p, c as m, gr as ie, ln as ae, mr as oe, n as h, oi as g, qn as se, qr as _, tt as v, ur as ce, wn as le, xn as y, xr as b, yn as x, zt as ue } from "./Lexical.prod-DYDuARMX.mjs";
import { I as S, N as C, s as w } from "./LexicalUtils.prod-5zbJxaQa.mjs";
import { I as de, K as fe, M as pe, _ as T, g as E, p as D, s as O, v as k } from "./ContentEditable-C_wyHFh1.mjs";
import { t as A } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import * as j from "react";
import { Suspense as M, createContext as N, useCallback as P, useContext as F, useEffect as I, useLayoutEffect as L, useMemo as R, useState as z } from "react";
import { Fragment as B, jsx as V, jsxs as me } from "react/jsx-runtime";
import { createPortal as H, flushSync as he } from "react-dom";
//#region src/context/StickyNotesContext.tsx
var U = "playground-sticky-notes-hidden", W = N({
	extraFontFamilies: [],
	showStickyNotes: !0,
	toggleStickyNotesVisibility: () => {}
}), ge = ({ children: e, extraFontFamilies: t = [] }) => {
	let [n, r] = z(!0), i = P(() => {
		r((e) => !e);
	}, []);
	I(() => (document.body.classList.toggle(U, !n), () => {
		document.body.classList.remove(U);
	}), [n]);
	let a = R(() => ({
		extraFontFamilies: t,
		showStickyNotes: n,
		toggleStickyNotesVisibility: i
	}), [
		t,
		n,
		i
	]);
	return /* @__PURE__ */ V(W.Provider, {
		value: a,
		children: e
	});
}, _e = () => F(W), ve = () => F(W).extraFontFamilies;
//#endregion
//#region node_modules/@lexical/plain-text/dist/LexicalPlainText.prod.mjs
function G(e, t) {
	t.update(() => {
		if (e !== null) {
			let n = w(e, KeyboardEvent) ? null : e.clipboardData, r = v();
			if (r !== null && !r.isCollapsed() && n != null) {
				e.preventDefault();
				let i = T(t);
				i !== null && n.setData("text/html", i), n.setData("text/plain", r.getTextContent());
			}
		}
	});
}
function ye(n) {
	return d(n.registerCommand(i, (e) => {
		let t = v();
		return !!p(t) && (t.deleteCharacter(e), !0);
	}, 0), n.registerCommand(ie, (e) => {
		let t = v();
		return !!p(t) && (t.deleteWord(e), !0);
	}, 0), n.registerCommand(ne, (e) => {
		let t = v();
		return !!p(t) && (t.deleteLine(e), !0);
	}, 0), n.registerCommand(ee, (e) => {
		let t = v();
		if (!p(t)) return !1;
		if (typeof e == "string") t.insertText(e);
		else {
			let n = e.dataTransfer;
			if (n != null) E(n, t);
			else {
				let n = e.data;
				n && t.insertText(n);
			}
		}
		return !0;
	}, 0), n.registerCommand(ue, () => {
		let e = v();
		return !!p(e) && (e.removeText(), !0);
	}, 0), n.registerCommand(h, (e) => {
		let t = v();
		return !!p(t) && (t.insertLineBreak(e), !0);
	}, 0), n.registerCommand(e, () => {
		let e = v();
		return !!p(e) && (e.insertLineBreak(), !0);
	}, 0), n.registerCommand(ce, (e) => {
		let t = v();
		if (!p(t)) return !1;
		let n = e, r = n.shiftKey;
		return !!S(t, !0) && (n.preventDefault(), C(t, r, !0), !0);
	}, 0), n.registerCommand(t, (e) => {
		let t = v();
		if (!p(t)) return !1;
		let n = e, r = n.shiftKey;
		return !!S(t, !1) && (n.preventDefault(), C(t, r, !1), !0);
	}, 0), n.registerCommand(a, (e) => !!p(v()) && (!u || !b) && (e.preventDefault(), n.dispatchCommand(i, !0)), 0), n.registerCommand(le, (e) => !!p(v()) && (e.preventDefault(), n.dispatchCommand(i, !1)), 0), n.registerCommand(x, (e) => {
		if (!p(v())) return !1;
		if (e !== null) {
			if ((u || ae || y) && b) return !1;
			e.preventDefault();
		}
		return n.dispatchCommand(h, !1);
	}, 0), n.registerCommand(se, () => {
		let e = v();
		return f(p(e) && l(e.anchor.getNode()) !== null ? e : null), !0;
	}, 0), n.registerCommand(c, (e) => !!p(v()) && (G(e, n), !0), 0), n.registerCommand(o, (e) => !!p(v()) && (function(e, t) {
		G(e, t), t.update(() => {
			let e = v();
			p(e) && e.removeText();
		}, { tag: "cut" });
	}(e, n), !0), 0), n.registerCommand(te, (e) => !!p(v()) && (function(e, t) {
		e.preventDefault(), t.update(() => {
			let t = v(), n = w(e, ClipboardEvent) ? e.clipboardData : null;
			n != null && p(t) && E(n, t);
		}, { tag: "paste" });
	}(e, n), !0), 0), n.registerCommand(s, (e) => D(e, n), 0), n.registerCommand(_, (e) => {
		let t = v();
		return !!p(t) && (t.isCollapsed() || e.dataTransfer === null || k(e.dataTransfer, n), !0);
	}, 0));
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalPlainTextPlugin.prod.mjs
function be(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var K = re ? L : I;
function xe({ editor: e, ErrorBoundary: t }) {
	return function(e, t) {
		let [n, r] = z(() => e.getDecorators());
		return K(() => e.registerDecoratorListener((e) => {
			he(() => {
				r(e);
			});
		}), [e]), I(() => {
			r(e.getDecorators());
		}, [e]), R(() => {
			let r = [], i = Object.keys(n);
			for (let a = 0; a < i.length; a++) {
				let o = i[a], s = /*#__PURE__*/ V(t, {
					onError: (t) => e._onError(t),
					children: /*#__PURE__*/ V(M, {
						fallback: null,
						children: n[o]
					})
				}), c = e.getElementByKey(o);
				c !== null && r.push(/*#__PURE__*/ H(s, c, o));
			}
			return r;
		}, [
			t,
			n,
			e
		]);
	}(e, t);
}
function Se({ editor: e, ErrorBoundary: t }) {
	return function(e) {
		let t = fe.maybeFromEditor(e);
		if (t && t.hasExtensionByName(pe.name)) {
			for (let e of ["@lexical/plain-text", "@lexical/rich-text"]) t.hasExtensionByName(e) && be(320, e);
			return !0;
		}
		return !1;
	}(e) ? null : /*#__PURE__*/ V(xe, {
		editor: e,
		ErrorBoundary: t
	});
}
function q(e) {
	return e.read("latest", de(e.isComposing()));
}
function J({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = g();
	return function(e) {
		K(() => d(ye(e), O(e)), [e]);
	}(r), /*#__PURE__*/ me(B, { children: [
		e,
		/*#__PURE__*/ V(Ce, { content: t }),
		/*#__PURE__*/ V(Se, {
			editor: r,
			ErrorBoundary: n
		})
	] });
}
function Ce({ content: e }) {
	let [t] = g(), n = function(e) {
		let [t, n] = z(() => q(e));
		return K(() => {
			function t() {
				let t = q(e);
				n(t);
			}
			return t(), d(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), r = A();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region src/themes/PlaygroundEditorTheme.ts
var we = {
	autocomplete: "PlaygroundEditorTheme__autocomplete",
	blockCursor: "PlaygroundEditorTheme__blockCursor",
	characterLimit: "PlaygroundEditorTheme__characterLimit",
	code: "PlaygroundEditorTheme__code pt-2 my-2",
	codeHighlight: {
		atrule: "PlaygroundEditorTheme__tokenAttr",
		attr: "PlaygroundEditorTheme__tokenAttr",
		boolean: "PlaygroundEditorTheme__tokenProperty",
		builtin: "PlaygroundEditorTheme__tokenSelector",
		cdata: "PlaygroundEditorTheme__tokenComment",
		char: "PlaygroundEditorTheme__tokenSelector",
		class: "PlaygroundEditorTheme__tokenFunction",
		"class-name": "PlaygroundEditorTheme__tokenFunction",
		comment: "PlaygroundEditorTheme__tokenComment",
		constant: "PlaygroundEditorTheme__tokenProperty",
		deleted: "PlaygroundEditorTheme__tokenDeleted",
		doctype: "PlaygroundEditorTheme__tokenComment",
		entity: "PlaygroundEditorTheme__tokenOperator",
		function: "PlaygroundEditorTheme__tokenFunction",
		important: "PlaygroundEditorTheme__tokenVariable",
		inserted: "PlaygroundEditorTheme__tokenInserted",
		keyword: "PlaygroundEditorTheme__tokenAttr",
		namespace: "PlaygroundEditorTheme__tokenVariable",
		number: "PlaygroundEditorTheme__tokenProperty",
		operator: "PlaygroundEditorTheme__tokenOperator",
		prolog: "PlaygroundEditorTheme__tokenComment",
		property: "PlaygroundEditorTheme__tokenProperty",
		punctuation: "PlaygroundEditorTheme__tokenPunctuation",
		regex: "PlaygroundEditorTheme__tokenVariable",
		selector: "PlaygroundEditorTheme__tokenSelector",
		string: "PlaygroundEditorTheme__tokenSelector",
		symbol: "PlaygroundEditorTheme__tokenProperty",
		tag: "PlaygroundEditorTheme__tokenProperty",
		unchanged: "PlaygroundEditorTheme__tokenUnchanged",
		url: "PlaygroundEditorTheme__tokenOperator",
		variable: "PlaygroundEditorTheme__tokenVariable"
	},
	embedBlock: {
		base: "PlaygroundEditorTheme__embedBlock",
		focus: "PlaygroundEditorTheme__embedBlockFocus"
	},
	heading: {
		h1: "PlaygroundEditorTheme__h1",
		h2: "PlaygroundEditorTheme__h2",
		h3: "PlaygroundEditorTheme__h3",
		h4: "PlaygroundEditorTheme__h4",
		h5: "PlaygroundEditorTheme__h5",
		h6: "PlaygroundEditorTheme__h6"
	},
	hr: "PlaygroundEditorTheme__hr my-3",
	hrSelected: "PlaygroundEditorTheme__hrSelected",
	image: "editor-media",
	indent: "PlaygroundEditorTheme__indent",
	layoutContainer: "PlaygroundEditorTheme__layoutContainer my-2",
	layoutItem: "PlaygroundEditorTheme__layoutItem py-2 px-3",
	link: "PlaygroundEditorTheme__link",
	list: {
		checklist: "PlaygroundEditorTheme__checklist",
		listitem: "PlaygroundEditorTheme__listItem",
		listitemChecked: "PlaygroundEditorTheme__listItemChecked",
		listitemUnchecked: "PlaygroundEditorTheme__listItemUnchecked",
		nested: { listitem: "PlaygroundEditorTheme__nestedListItem" },
		olDepth: [
			"PlaygroundEditorTheme__ol1",
			"PlaygroundEditorTheme__ol2",
			"PlaygroundEditorTheme__ol3",
			"PlaygroundEditorTheme__ol4",
			"PlaygroundEditorTheme__ol5"
		],
		ul: "PlaygroundEditorTheme__ul"
	},
	mark: "PlaygroundEditorTheme__mark",
	markOverlap: "PlaygroundEditorTheme__markOverlap",
	paragraph: "PlaygroundEditorTheme__paragraph",
	quote: "PlaygroundEditorTheme__quote",
	specialText: "PlaygroundEditorTheme__specialText",
	tab: "PlaygroundEditorTheme__tabNode",
	table: "PlaygroundEditorTheme__table my-4",
	tableAddColumns: "PlaygroundEditorTheme__tableAddColumns",
	tableAddRows: "PlaygroundEditorTheme__tableAddRows",
	tableAlignment: {
		center: "PlaygroundEditorTheme__tableAlignmentCenter",
		right: "PlaygroundEditorTheme__tableAlignmentRight"
	},
	tableCell: "PlaygroundEditorTheme__tableCell",
	tableCellActionButton: "PlaygroundEditorTheme__tableCellActionButton",
	tableCellActionButtonContainer: "PlaygroundEditorTheme__tableCellActionButtonContainer",
	tableCellHeader: "PlaygroundEditorTheme__tableCellHeader",
	tableCellResizer: "PlaygroundEditorTheme__tableCellResizer",
	tableCellSelected: "PlaygroundEditorTheme__tableCellSelected",
	tableFrozenColumn: "PlaygroundEditorTheme__tableFrozenColumn",
	tableFrozenRow: "PlaygroundEditorTheme__tableFrozenRow",
	tableRowStriping: "PlaygroundEditorTheme__tableRowStriping",
	tableScrollableWrapper: "PlaygroundEditorTheme__tableScrollableWrapper me-4 mb-4",
	tableSelected: "PlaygroundEditorTheme__tableSelected",
	tableSelection: "PlaygroundEditorTheme__tableSelection",
	text: {
		bold: "PlaygroundEditorTheme__textBold",
		capitalize: "PlaygroundEditorTheme__textCapitalize",
		code: "PlaygroundEditorTheme__textCode",
		highlight: "PlaygroundEditorTheme__textHighlight",
		italic: "PlaygroundEditorTheme__textItalic",
		lowercase: "PlaygroundEditorTheme__textLowercase",
		strikethrough: "PlaygroundEditorTheme__textStrikethrough",
		subscript: "PlaygroundEditorTheme__textSubscript",
		superscript: "PlaygroundEditorTheme__textSuperscript",
		underline: "PlaygroundEditorTheme__textUnderline",
		underlineStrikethrough: "PlaygroundEditorTheme__textUnderlineStrikethrough",
		uppercase: "PlaygroundEditorTheme__textUppercase"
	}
}, Te = j.lazy(() => import("./StickyComponent-B8skHBRs.mjs"));
function Ee(e) {
	let t = e.getRootElement();
	if (t === null) return document.body;
	let n = t.closest(".editor-scroller");
	if (n !== null) return n;
	let r = t;
	for (; r.parentElement !== null && r.parentElement !== document.body;) r = r.parentElement;
	return r;
}
var Y = [
	"yellow",
	"pink",
	"blue",
	"mint",
	"lavender",
	"peach",
	"sage"
];
function X(e, t, n) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(t, e) : n;
}
function De(e) {
	return Y[(Y.indexOf(e) + 1) % Y.length];
}
function Z(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.round(e) : 0;
}
function Oe() {
	let e = m($).filter((e) => e.isAttached());
	return e.length === 0 ? 0 : Math.max(...e.map((e) => e.__layer)) + 1;
}
function Q(e, t) {
	return e.__layer - t.__layer || e.getIndexWithinParent() - t.getIndexWithinParent();
}
var $ = class e extends r {
	__x;
	__y;
	__width;
	__height;
	__layer;
	__color;
	__caption;
	static getType() {
		return "sticky";
	}
	static clone(t) {
		return new e(t.__x, t.__y, t.__color, t.__caption, t.__key, t.__width, t.__height, t.__layer);
	}
	static importJSON(t) {
		return new e(t.xOffset, t.yOffset, t.color, void 0, void 0, t.width, t.height, t.layer).updateFromJSON(t);
	}
	updateFromJSON(e) {
		let t = super.updateFromJSON(e);
		t.__width = X(e.width, 120, 120), t.__height = X(e.height, 80, 80), t.__layer = Z(e.layer);
		let n = e.caption, r = t.__caption, i = r.parseEditorState(n.editorState);
		return i.isEmpty() || r.setEditorState(i), t;
	}
	constructor(e, t, n, r, i, a, o, s) {
		super(i), this.__x = e, this.__y = t, this.__width = X(a, 120, 120), this.__height = X(o, 80, 80), this.__caption = r || oe(), this.__color = n, this.__layer = Z(s);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			caption: this.__caption.toJSON(),
			color: this.__color,
			height: this.__height,
			layer: this.__layer,
			width: this.__width,
			xOffset: this.__x,
			yOffset: this.__y
		};
	}
	createDOM(e) {
		let t = document.createElement("div");
		return t.style.display = "contents", t;
	}
	updateDOM() {
		return !1;
	}
	setPosition(e, t) {
		let r = this.getWritable();
		r.__x = e, r.__y = t, n(null);
	}
	setSize(e, t) {
		let r = this.getWritable();
		r.__width = X(e, 120, 120), r.__height = X(t, 80, 80), n(null);
	}
	toggleColor() {
		let e = this.getWritable();
		e.__color = De(e.__color);
	}
	markCaptionChanged() {
		let e = this.getWritable();
		e.__caption = this.__caption;
	}
	bringToFront() {
		let t = m(e).filter((e) => e.isAttached());
		t.length < 2 || ([...t.filter((e) => !e.is(this)).sort(Q), this].forEach((e, t) => {
			e.getWritable().__layer = t;
		}), n(null));
	}
	sendToBack() {
		let t = m(e).filter((e) => e.isAttached());
		if (t.length < 2) return;
		let r = t.filter((e) => !e.is(this)).sort(Q);
		[this, ...r].forEach((e, t) => {
			e.getWritable().__layer = t;
		}), n(null);
	}
	decorate(e, t) {
		return H(/* @__PURE__ */ V(Te, {
			color: this.__color,
			height: this.__height,
			layer: this.__layer,
			x: this.__x,
			y: this.__y,
			width: this.__width,
			nodeKey: this.getKey(),
			caption: this.__caption
		}), Ee(e));
	}
	isIsolated() {
		return !0;
	}
	isInline() {
		return !1;
	}
};
function ke(e) {
	return e instanceof $;
}
function Ae(e, t) {
	return new $(e, t, "yellow", void 0, void 0, void 0, void 0, Oe());
}
//#endregion
export { J as a, _e as c, we as i, ke as n, ge as o, $ as r, ve as s, Ae as t };
