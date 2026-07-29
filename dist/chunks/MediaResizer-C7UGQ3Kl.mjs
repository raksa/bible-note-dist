import { d as e } from "./LexicalUtils.prod-5zbJxaQa.mjs";
import { createContext as t, useCallback as n, useContext as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/utils/pageSizes.ts
var l = {
	key: "web",
	label: "Web view"
};
function u(e) {
	return {
		...e,
		orientation: "portrait"
	};
}
function d(e, t) {
	return {
		cssSize: `${e.cssSize} landscape`,
		heightIn: e.widthIn,
		heightTwips: e.widthTwips,
		key: t,
		label: `${e.label} landscape`,
		orientation: "landscape",
		widthIn: e.heightIn,
		widthTwips: e.heightTwips
	};
}
var f = u({
	cssSize: "A4",
	heightIn: 11.69,
	heightTwips: 16838,
	key: "a4",
	label: "A4",
	widthIn: 8.27,
	widthTwips: 11906
}), p = u({
	cssSize: "A5",
	heightIn: 8.27,
	heightTwips: 11906,
	key: "a5",
	label: "A5",
	widthIn: 5.83,
	widthTwips: 8391
}), m = u({
	cssSize: "A3",
	heightIn: 16.54,
	heightTwips: 23811,
	key: "a3",
	label: "A3",
	widthIn: 11.69,
	widthTwips: 16838
}), h = u({
	cssSize: "Letter",
	heightIn: 11,
	heightTwips: 15840,
	key: "letter",
	label: "Letter",
	widthIn: 8.5,
	widthTwips: 12240
}), g = u({
	cssSize: "Legal",
	heightIn: 14,
	heightTwips: 20160,
	key: "legal",
	label: "Legal",
	widthIn: 8.5,
	widthTwips: 12240
}), _ = u({
	cssSize: "Tabloid",
	heightIn: 17,
	heightTwips: 24480,
	key: "tabloid",
	label: "Tabloid",
	widthIn: 11,
	widthTwips: 15840
}), v = {
	a4: f,
	a4Landscape: d(f, "a4Landscape"),
	a5: p,
	a5Landscape: d(p, "a5Landscape"),
	a3: m,
	a3Landscape: d(m, "a3Landscape"),
	letter: h,
	letterLandscape: d(h, "letterLandscape"),
	legal: g,
	legalLandscape: d(g, "legalLandscape"),
	tabloid: _,
	tabloidLandscape: d(_, "tabloidLandscape"),
	size1024x768: {
		cssSize: "10.6667in 8in",
		heightIn: 8,
		heightTwips: 11520,
		key: "size1024x768",
		label: "1024x768",
		orientation: "landscape",
		widthIn: 10.6667,
		widthTwips: 15360
	},
	size1280x720: {
		cssSize: "13.3333in 7.5in",
		heightIn: 7.5,
		heightTwips: 10800,
		key: "size1280x720",
		label: "1280x720",
		orientation: "landscape",
		widthIn: 13.3333,
		widthTwips: 19200
	}
}, y = [
	l,
	v.a4,
	v.a4Landscape,
	v.a5,
	v.a5Landscape,
	v.a3,
	v.a3Landscape,
	v.letter,
	v.letterLandscape,
	v.legal,
	v.legalLandscape,
	v.tabloid,
	v.tabloidLandscape,
	v.size1024x768,
	v.size1280x720
];
function b(e) {
	return e === "web" ? null : v[e];
}
function x() {
	return y;
}
function S(e) {
	return typeof e == "string" && y.some((t) => t.key === e);
}
//#endregion
//#region src/storageManager.ts
var C = [
	"lexical-playground-settings",
	"lexical-playground-editor-state",
	"lexical-playground-comments",
	"lexical-playground-comments-panel-open",
	"lexical-playground-block-text-links",
	"lexical-playground-read-only-mode",
	"lexical-playground-insert-character-picker",
	"lexical-playground-editor-zoom-percent"
], w = null, T = 0, E = /* @__PURE__ */ new Map(), D = {
	getItem(e) {
		return E.get(e) ?? null;
	},
	removeItem(e) {
		E.delete(e);
		let t = w;
		t !== null && t.deleteSetting(e).catch(() => {});
	},
	setItem(e, t) {
		E.set(e, t);
		let n = w;
		n !== null && n.setSetting(e, t).catch(() => {});
	}
};
function O(e) {
	w !== (e ?? null) && (w = e ?? null, T += 1, E.clear());
}
async function k(e) {
	let t = w;
	if (t === null) return;
	let n = T, r = await Promise.all(e.map(async (e) => {
		try {
			return [e, M(await t.getSetting(e))];
		} catch {
			return [e, null];
		}
	}));
	if (!(w !== t || T !== n)) {
		E.clear();
		for (let [e, t] of r) t !== null && E.set(e, t);
	}
}
function A() {
	return w === null ? N() : D;
}
function j() {
	return {
		async deleteSetting(e) {
			N()?.removeItem(e);
		},
		async getSetting(e) {
			return N()?.getItem(e) ?? null;
		},
		async setSetting(e, t) {
			let n = M(t);
			n !== null && N()?.setItem(e, n);
		}
	};
}
function M(e) {
	if (e == null) return null;
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e) ?? null;
	} catch {
		return null;
	}
}
function N() {
	if (typeof window > "u") return null;
	try {
		return window.localStorage;
	} catch {
		return null;
	}
}
var P = "lexical-playground-settings", F = {
	disableBeforeInput: !1,
	emptyEditor: !1,
	hasLinkAttributes: !1,
	hasNestedTables: !1,
	isAutocomplete: !0,
	isCharLimit: !1,
	isCharLimitUtf8: !1,
	isCodeHighlighted: !0,
	isCodeShiki: !1,
	isDarkMode: !1,
	isMaxLength: !1,
	isRichText: !0,
	listStrictIndent: !1,
	measureTypingPerf: !1,
	pageSize: "web",
	selectionAlwaysOnDisplay: !1,
	shouldAllowHighlightingWithBrackets: !1,
	shouldPreserveNewLinesInMarkdown: !1,
	shouldUseLexicalContextMenu: !1,
	showInvisibleCharacters: !1,
	showNestedEditorTreeView: !1,
	showTableOfContents: !1,
	showTreeView: !1,
	tableCellBackgroundColor: !0,
	tableCellMerge: !0,
	tableHorizontalScroll: !0
}, I = Object.keys(F), L = { ...F };
function R(e) {
	return {
		...F,
		...z(),
		...B(window.location.search, e)
	};
}
function z() {
	let e = U();
	if (e === null) return {};
	let t = e.getItem(P);
	if (t == null) return {};
	try {
		let e = JSON.parse(t);
		if (typeof e != "object" || !e || Array.isArray(e)) return {};
		let n = {};
		for (let t of I) {
			let r = e[t];
			if (typeof F[t] == "boolean" && typeof r == "boolean") {
				n[t] = r;
				continue;
			}
			t === "pageSize" && S(r) && (n[t] = r);
		}
		return n;
	} catch {
		return {};
	}
}
function B(e, t) {
	if (typeof window > "u") return {};
	let n = new URLSearchParams(e), r = {};
	for (let e of I) if (n.has(e)) try {
		let i = F[e], a = n.get(e);
		if (e === "pageSize") {
			S(a) ? r[e] = a : t?.onParseError?.(e);
			continue;
		}
		typeof i == "boolean" && (r[e] = !!JSON.parse(a ?? "true"));
	} catch {
		t?.onParseError?.(e);
	}
	return r;
}
function V(e) {
	return I.some((t) => e[t] !== F[t]);
}
function H(e) {
	let t = U();
	if (t === null) return;
	let n = {};
	for (let t of I) e[t] !== F[t] && (n[t] = e[t]);
	if (Object.keys(n).length === 0) {
		t.removeItem(P);
		return;
	}
	t.setItem(P, JSON.stringify(n));
}
function U() {
	return A();
}
//#endregion
//#region src/context/SettingsContext.tsx
var W = t({
	resetOptions: () => {},
	setOption: (e, t) => {},
	settings: R()
}), G = ({ children: e }) => {
	let [t, r] = o(() => R()), c = a(t);
	c.current = t;
	let l = n((e) => {
		c.current = e, r(e), H(e), q(e);
	}, []), u = n((e, t) => {
		let n = c.current;
		n[e] !== t && l({
			...n,
			[e]: t
		});
	}, [l]), d = n(() => {
		let e = c.current;
		V(e) && l({ ...F });
	}, [l]), f = i(() => ({
		resetOptions: d,
		setOption: u,
		settings: t
	}), [
		d,
		u,
		t
	]);
	return /* @__PURE__ */ s(W.Provider, {
		value: f,
		children: e
	});
}, K = () => r(W);
function q(e) {
	let t = new URL(window.location.href), n = new URLSearchParams(t.search);
	for (let t of I) e[t] === F[t] ? n.delete(t) : n.set(t, String(e[t]));
	t.search = n.toString(), window.history.pushState(null, "", t.toString());
}
//#endregion
//#region src/ui/MediaResizer.tsx
function J(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
var Y = {
	east: 1,
	north: 8,
	south: 2,
	west: 4
};
function X({ onResizeStart: t, onResizeEnd: n, buttonRef: r, mediaRef: i, maxWidth: o, editor: l, showCaption: u, setShowCaption: d, captionsEnabled: f }) {
	let p = a(null), m = a({
		priority: "",
		value: "default"
	}), h = a({
		currentHeight: 0,
		currentWidth: 0,
		direction: 0,
		isResizing: !1,
		ratio: 0,
		startHeight: 0,
		startWidth: 0,
		startX: 0,
		startY: 0
	}), g = l.getRootElement(), _ = o || (g === null ? 100 : g.getBoundingClientRect().width - 20), v = g === null ? 100 : g.getBoundingClientRect().height - 20, y = (e) => {
		let t = e === Y.east || e === Y.west, n = e === Y.north || e === Y.south, r = e & Y.north && e & Y.west || e & Y.south && e & Y.east, i = t ? "ew" : n ? "ns" : r ? "nwse" : "nesw";
		g !== null && g.style.setProperty("cursor", `${i}-resize`, "important"), document.body !== null && (document.body.style.setProperty("cursor", `${i}-resize`, "important"), m.current.value = document.body.style.getPropertyValue("-webkit-user-select"), m.current.priority = document.body.style.getPropertyPriority("-webkit-user-select"), document.body.style.setProperty("-webkit-user-select", "none", "important"));
	}, b = () => {
		g !== null && g.style.setProperty("cursor", "text"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty("-webkit-user-select", m.current.value, m.current.priority));
	}, x = (n, r) => {
		if (!l.isEditable()) return;
		let a = i.current, o = p.current;
		if (a !== null && o !== null) {
			n.preventDefault(), n.stopPropagation();
			let { width: i, height: s } = a.getBoundingClientRect(), c = e(a), l = h.current;
			l.startWidth = i, l.startHeight = s, l.ratio = i / s, l.currentWidth = i, l.currentHeight = s, l.startX = n.clientX / c, l.startY = n.clientY / c, l.isResizing = !0, l.direction = r, y(r), t(), o.classList.add("media-control-wrapper--resizing"), a.style.height = `${s}px`, a.style.width = `${i}px`, document.addEventListener("pointermove", S), document.addEventListener("pointerup", C);
		}
	}, S = (t) => {
		let n = i.current, r = h.current, a = r.direction & (Y.east | Y.west), o = r.direction & (Y.south | Y.north);
		if (n !== null && r.isResizing) {
			let i = e(n);
			if (a && o) {
				let e = Math.floor(r.startX - t.clientX / i);
				e = r.direction & Y.east ? -e : e;
				let a = J(r.startWidth + e, 100, _), o = a / r.ratio;
				n.style.width = `${a}px`, n.style.height = `${o}px`, r.currentHeight = o, r.currentWidth = a;
			} else if (o) {
				let e = Math.floor(r.startY - t.clientY / i);
				e = r.direction & Y.south ? -e : e;
				let a = J(r.startHeight + e, 100, v);
				n.style.height = `${a}px`, r.currentHeight = a;
			} else {
				let e = Math.floor(r.startX - t.clientX / i);
				e = r.direction & Y.east ? -e : e;
				let a = J(r.startWidth + e, 100, _);
				n.style.width = `${a}px`, r.currentWidth = a;
			}
		}
	}, C = () => {
		let e = i.current, t = h.current, r = p.current;
		if (e !== null && r !== null && t.isResizing) {
			let e = t.currentWidth, i = t.currentHeight;
			t.startWidth = 0, t.startHeight = 0, t.ratio = 0, t.startX = 0, t.startY = 0, t.currentWidth = 0, t.currentHeight = 0, t.isResizing = !1, r.classList.remove("media-control-wrapper--resizing"), b(), n(e, i), document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", C);
		}
	};
	return /* @__PURE__ */ c("div", {
		ref: p,
		children: [
			!u && f && /* @__PURE__ */ s("button", {
				className: "media-caption-button",
				ref: r,
				onClick: () => {
					d(!u);
				},
				children: "Add Caption"
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-n",
				onPointerDown: (e) => {
					x(e, Y.north);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-ne",
				onPointerDown: (e) => {
					x(e, Y.north | Y.east);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-e",
				onPointerDown: (e) => {
					x(e, Y.east);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-se",
				onPointerDown: (e) => {
					x(e, Y.south | Y.east);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-s",
				onPointerDown: (e) => {
					x(e, Y.south);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-sw",
				onPointerDown: (e) => {
					x(e, Y.south | Y.west);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-w",
				onPointerDown: (e) => {
					x(e, Y.west);
				}
			}),
			/* @__PURE__ */ s("div", {
				className: "media-resizer media-resizer-nw",
				onPointerDown: (e) => {
					x(e, Y.north | Y.west);
				}
			})
		]
	});
}
//#endregion
export { L as a, C as c, A as d, k as f, S as g, b as h, F as i, O as l, x as m, G as n, R as o, v as p, K as r, V as s, X as t, j as u };
