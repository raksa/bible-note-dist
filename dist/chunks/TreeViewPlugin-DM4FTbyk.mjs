import { $ as e, $n as t, A as n, Ar as r, B as i, Bn as a, C as o, Cr as s, Ct as c, D as l, Dn as u, Dr as d, E as f, En as p, Er as m, Et as h, F as g, Fr as _, Ft as v, Gn as y, Gr as b, Gt as x, H as S, Hn as ee, Hr as C, Ht as w, I as T, It as te, J as ne, Jt as E, K as re, Kt as ie, Ln as D, M as ae, Nr as oe, Nt as se, O as ce, P as le, Pn as ue, Pt as de, Q as fe, Qn as pe, Qr as me, R as he, Rr as ge, Rt as _e, S as ve, Sn as ye, Tn as be, Tr as xe, Un as Se, Ut as Ce, V as we, Vn as Te, Vr as O, W as Ee, Wn as De, Wt as Oe, X as ke, Xn as Ae, Y as je, Yn as Me, Yr as Ne, Yt as k, Z as Pe, Zn as Fe, Zr as Ie, Zt as Le, _ as Re, _r as ze, _t as Be, a as Ve, ar as He, b as Ue, bn as A, br as We, bt as Ge, cn as Ke, cr as qe, dn as Je, dr as Ye, en as Xe, et as Ze, f as Qe, fn as $e, gn as et, gr as tt, h as nt, i as rt, ii as it, jn as at, jt as ot, kn as st, kr as ct, l as lt, ln as ut, lr as dt, m as ft, mr as pt, mt, n as ht, ni as gt, o as _t, oi as vt, on as yt, or as bt, p as xt, pr as St, q as Ct, qn as wt, qr as Tt, qt as j, ri as Et, rn as Dt, rr as Ot, s as kt, sr as At, t as jt, ti as Mt, tn as Nt, tr as Pt, tt as M, un as Ft, ur as It, vn as Lt, vr as Rt, vt as N, w as zt, wn as Bt, wr as Vt, wt as Ht, x as Ut, xn as Wt, xr as Gt, xt as Kt, yn as qt, yt as Jt, zn as Yt, zt as Xt } from "./Lexical.prod-DYDuARMX.mjs";
import { C as Zt, I as Qt, N as $t, T as en, a as tn, f as nn, g as rn, i as an, k as on, n as sn, o as cn, s as ln, t as un } from "./LexicalUtils.prod-5zbJxaQa.mjs";
import { B as dn, H as fn, I as pn, K as mn, M as hn, R as gn, V as _n, c as vn, d as yn, f as bn, h as xn, j as Sn, l as Cn, m as wn, n as Tn, s as En, u as Dn, v as On, x as kn, y as An } from "./ContentEditable-C_wyHFh1.mjs";
import { t as jn } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import * as Mn from "react";
import { Suspense as Nn, createContext as Pn, forwardRef as Fn, startTransition as In, useCallback as P, useContext as Ln, useEffect as F, useLayoutEffect as Rn, useMemo as zn, useRef as I, useState as L } from "react";
import { Fragment as Bn, jsx as R, jsxs as z } from "react/jsx-runtime";
import * as Vn from "react-dom";
import Hn, { createPortal as Un, flushSync as Wn } from "react-dom";
//#region src/lookupData.ts
var Gn = {
	locationsMap: {},
	namesMap: {}
}, Kn = null, qn = 0;
function Jn(e) {
	Kn = e, qn += 1;
}
function Yn(e) {
	if (Kn == null) return Gn;
	let { dataMap: t, default: n } = Kn;
	return (e === void 0 ? void 0 : t[e]) ?? t[n] ?? Gn;
}
function Xn(e) {
	return Yn(e).namesMap;
}
function Zn(e) {
	return Yn(e).locationsMap;
}
function Qn(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e ? Object.values(e) : [];
}
function B(e) {
	let t = -1, n;
	return () => (t !== qn && (n = e(), t = qn), n);
}
An.tag("h1", "h2", "h3", "h4", "h5", "h6"), An.tag("blockquote"), An.tag("blockquote"), An.tag("p"), An.tag("span");
var $n = /* @__PURE__ */ Ut("DRAG_DROP_PASTE_FILE"), er = /* @__PURE__ */ Ot("shadowRoot", { parse: Boolean }), tr = class e extends ft {
	static getType() {
		return "quote";
	}
	static clone(t) {
		return new e(t.__key);
	}
	$config() {
		return this.config("quote", {
			extends: ft,
			stateConfigs: [{
				flat: !0,
				stateConfig: er
			}]
		});
	}
	isShadowRoot() {
		return Ne(this, er);
	}
	setIsShadowRoot(e) {
		return ot(this, er, e);
	}
	createDOM(e) {
		let t = j().createElement("blockquote");
		return O(t, e.theme.quote), t;
	}
	updateDOM(e, t) {
		return !1;
	}
	static importDOM() {
		return { blockquote: (e) => ({
			conversion: sr,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (ye(t)) {
			this.isEmpty() && t.append(j().createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return nr().updateFromJSON(e);
	}
	exportJSON() {
		return super.exportJSON();
	}
	insertNewAfter(e, t) {
		let n = r(), i = this.getDirection();
		return n.setDirection(i), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		if (this.isShadowRoot()) {
			for (let e of this.getChildren()) this.insertBefore(e);
			return this.remove(), !0;
		}
		let e = r();
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function nr(e) {
	let t = _t(new tr());
	return e && e.shadowRoot ? t.setIsShadowRoot(!0) : t;
}
function rr(e) {
	return e instanceof tr;
}
var ir = class e extends ft {
	__tag;
	static getType() {
		return "heading";
	}
	static clone(t) {
		return new e(t.__tag, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__tag = e.__tag;
	}
	constructor(e = "h1", t) {
		super(t), this.__tag = e;
	}
	getTag() {
		return this.getLatest().__tag;
	}
	setTag(e) {
		let t = this.getWritable();
		return t.__tag = e, t;
	}
	createDOM(e) {
		let t = this.__tag, n = j().createElement(t), r = e.theme.heading;
		if (r !== void 0) {
			let e = r[t];
			O(n, e);
		}
		return n;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag;
	}
	static importDOM() {
		return {
			h1: (e) => ({
				conversion: or,
				priority: 0
			}),
			h2: (e) => ({
				conversion: or,
				priority: 0
			}),
			h3: (e) => ({
				conversion: or,
				priority: 0
			}),
			h4: (e) => ({
				conversion: or,
				priority: 0
			}),
			h5: (e) => ({
				conversion: or,
				priority: 0
			}),
			h6: (e) => ({
				conversion: or,
				priority: 0
			}),
			p: (e) => {
				let t = e.firstChild;
				return t !== null && ar(t) ? {
					conversion: () => ({ node: null }),
					priority: 3
				} : null;
			},
			span: (e) => ar(e) ? {
				conversion: (e) => ({ node: cr("h1") }),
				priority: 3
			} : null
		};
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (ye(t)) {
			this.isEmpty() && t.append(j().createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return cr(e.tag).updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTag(e.tag);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			tag: this.getTag()
		};
	}
	insertNewAfter(e, t = !0) {
		let n = e ? e.anchor.offset : 0, i = this.getLastDescendant(), a = !i || e && e.anchor.key === i.getKey() && n === i.getTextContentSize() || !e ? r() : cr(this.getTag()), o = this.getDirection();
		if (a.setDirection(o), this.insertAfter(a, t), n === 0 && !this.isEmpty() && e) {
			let e = r();
			e.select(), this.replace(e, !0);
		}
		return a;
	}
	collapseAtStart() {
		if (this.isEmpty()) {
			let e = r();
			this.getChildren().forEach((t) => e.append(t)), this.replace(e);
		}
		return !0;
	}
	extractWithChild() {
		return !0;
	}
};
function ar(e) {
	return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function or(e) {
	let t = e.nodeName.toLowerCase(), n = null;
	return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6" || (n = cr(t), xt(e, n), Ue(n, e), Be(n, e)), { node: n };
}
function sr(e) {
	let t = nr();
	return Ue(t, e), xt(e, t), Be(t, e), { node: t };
}
function cr(e = "h1") {
	return _t(new ir(e));
}
function lr(e) {
	return e instanceof ir;
}
function ur(t) {
	return e(k(t));
}
function dr(e, t, n, r) {
	let i = !1, a = null;
	if (e.isCollapsed() && e.anchor.type === "text") {
		let t = e.anchor.getNode();
		if (E(t)) {
			a = t;
			let r = e.anchor.offset, o = r === t.getTextContentSize() && t.getNextSibling() === null, s = r === 0 && t.getPreviousSibling() === null;
			i = n === "end" && o || n === "start" && s || n === "both" && (o || s);
		}
	}
	let o = !1;
	for (let [n, s] of Object.entries(r)) {
		if (s == null || !s[t]) continue;
		let r = n;
		if (s.onlyAtBoundary) {
			if (!(i && a && E(a) && a.hasFormat(r))) continue;
			o = !0;
		}
		e.hasFormat(r) && e.toggleFormat(r);
	}
	o && e.setStyle("");
}
var fr = {
	capitalize: {
		enter: !0,
		space: !0,
		tab: !0
	},
	lowercase: {
		enter: !0,
		space: !0,
		tab: !0
	},
	uppercase: {
		enter: !0,
		space: !0,
		tab: !0
	}
};
function pr(e, t) {
	return function(e, t) {
		if (!e.isCollapsed()) return !1;
		let n = x(e.focus, t), r = i(n.origin, Ze);
		if (!r) return !1;
		let a = e.focus.getNode();
		if (!r.is(a) && !rt(a, r)) return !1;
		let o = ce(n, Qe(r, t));
		if (o.getTextSlices().some((e) => e && e.getTextContentSize() > 0)) return !1;
		let s = ce(o.anchor.getSiblingCaret(), o.focus), c = s.anchor.origin;
		for (let e of s) {
			if (!C(e) || !e.origin.is(c.getParent())) return !1;
			c = e.origin;
		}
		let l = r;
		for (let e of v(Qe(r, t))) {
			if (!e.origin.is(l.getParent())) {
				if (_e(e.origin)) {
					let e = Qe(l, t);
					return Xe(ce(e, e)), !0;
				}
				break;
			}
			if (!Ze(e.origin)) break;
			l = e.origin;
		}
		return !1;
	}(e, t) || function(e, t) {
		if (!e.isCollapsed() || e.anchor.type !== "element") return !1;
		let n = x(e.anchor, t).getNodeAtCaret();
		return !(!Ze(n) || n.isInline() || (Xe(jt(Vt(Pe(n, t)))), 0));
	}(e, t);
}
function mr(t) {
	return e(t) && !t.isInline() && !t.isIsolated() && t.isKeyboardSelectable();
}
function hr(e) {
	let t = Kt();
	t.add(e), p(t);
}
function gr(e, t) {
	if (!e.isCollapsed()) return !1;
	let n = e.focus, r = n.getNode(), a = t ? "previous" : "next", o = x(n, a);
	if (n.type === "element" && N(r) && (Et(r) || Ze(r))) {
		let e = o.getNodeAtCaret();
		return !(e === null || !mr(e)) && (hr(e.__key), !0);
	}
	let s = i(N(r) ? r : r.getParentOrThrow(), (e) => N(e) && !e.isInline() && ne(e.getParent()));
	if (s === null) return !1;
	let c = Qe(s, a).getNodeAtCaret();
	if (c === null || !mr(c)) return !1;
	if (s.getTextContentSize() === 0) return hr(c.__key), !0;
	let l = kt().getRootElement();
	if (l === null) return !1;
	let u = ae(l.ownerDocument.defaultView);
	if (u === null || u.rangeCount === 0) return !1;
	let d = u.anchorNode, f = u.anchorOffset, p = u.focusNode, m = u.focusOffset;
	u.modify("move", t ? "backward" : "forward", "line");
	let h = u.anchorNode, g = u.anchorOffset;
	if (h === null) return _r(u, d, f, p, m), !1;
	let _ = k(h);
	return _r(u, d, f, p, m), _ !== null && (h === d && g === f || !_.is(s) && !rt(_, s)) && (hr(c.__key), !0);
}
function _r(e, t, n, r, i) {
	t !== null && r !== null && e.setBaseAndExtent(t, n, r, i);
}
function vr(e, t) {
	if (!e.isCollapsed()) return !1;
	let n = e.focus.getNode(), r = i(N(n) ? n : n.getParentOrThrow(), (e) => N(e) && !e.isInline());
	if (r === null) return !1;
	let a = kt(), o = a.getRootElement();
	if (o === null) return !1;
	let s = o.ownerDocument.defaultView;
	if (s === null) return !1;
	let c = !1;
	for (let e of r.getChildren()) if (N(e) && e.isInline()) {
		let t = a.getElementByKey(e.getKey());
		if (t !== null) {
			let e = s.getComputedStyle(t).display;
			if (e === "inline-grid" || e === "inline-flex") {
				c = !0;
				break;
			}
		}
	}
	if (!c) return !1;
	let l = Qe(r, t ? "previous" : "next").getNodeAtCaret();
	if (l === null || !N(l)) {
		if (t) {
			let e = r.getFirstDescendant();
			E(e) ? e.select(0, 0) : r.select(0, 0);
		} else {
			let e = r.getLastDescendant();
			if (E(e)) {
				let t = e.getTextContentSize();
				e.select(t, t);
			} else {
				let e = r.getChildrenSize();
				r.select(e, e);
			}
		}
		return !0;
	}
	let u = a.getElementByKey(l.getKey());
	if (u === null) return !1;
	let d = ae(s);
	if (d === null || d.rangeCount === 0) return !1;
	let f = d.getRangeAt(0).cloneRange();
	f.collapse(!0);
	let p = f.getBoundingClientRect(), m = u.getBoundingClientRect(), h = m.top + m.height / 2;
	if (p.height > 0) {
		let t = wn(p.left, h, o);
		if (t !== null && u.contains(t.node)) {
			let n = o.ownerDocument.createRange();
			return n.setStart(t.node, t.offset), n.collapse(!0), e.applyDOMRange(n), e.dirty = !0, !0;
		}
	}
	let g = t ? l.getLastDescendant() : l.getFirstDescendant();
	if (E(g)) {
		let e = t ? g.getTextContentSize() : 0;
		g.select(e, e);
	} else {
		let e = l.getChildrenSize();
		l.select(t ? e : 0, t ? e : 0);
	}
	return !0;
}
function yr(e, t) {
	let n = Qe(e, t), r = n.getAdjacentCaret();
	r !== null && N(r.origin) && !r.origin.isInline() && r.origin.isShadowRoot() ? Xe(jt(n)) : t === "next" ? e.selectNext(0, 0) : e.selectPrevious();
}
function br(e, t, n) {
	n.preventDefault(), n.stopPropagation();
	let r = e.getNodes();
	if (r.length === 0) return !0;
	let a = r.map((e) => Qe(e, "next")).sort(Se), o = (t ? a[0] : a[a.length - 1]).origin, s = i(o, (e) => e !== o && N(e) && !e.isInline()) ?? d(), c = t ? 0 : s.getChildrenSize();
	return s.select(c, c), !0;
}
function xr(t, r = dn(fr)) {
	return Me(t.registerCommand(re, () => {
		let e = M();
		return _(e) ? (e.clear(), !0) : (A(e) && dr(e, "click", "both", r.peek()), !1);
	}, 0), t.registerCommand(te, (e) => {
		let t = M();
		return A(t) ? (t.deleteCharacter(e), !0) : !!_(t) && (t.deleteNodes(), !0);
	}, 0), t.registerCommand(tt, (e) => {
		let t = M();
		return !!A(t) && (t.deleteWord(e), !0);
	}, 0), t.registerCommand(Le, (e) => {
		let t = M();
		return !!A(t) && (t.deleteLine(e), !0);
	}, 0), t.registerCommand(we, (e) => {
		let n = M();
		if (typeof e == "string") n !== null && n.insertText(e);
		else {
			if (n === null) return !1;
			let r = e.dataTransfer;
			if (r != null) xn(r, n, t);
			else if (A(n)) {
				let t = e.data;
				return t && n.insertText(t), !0;
			}
		}
		return !0;
	}, 0), t.registerCommand(Xt, () => {
		let e = M();
		return !!A(e) && (e.removeText(), !0);
	}, 0), t.registerCommand(zt, (e) => {
		let t = M();
		return !(!A(t) && !_(t)) && (a(t, e), !0);
	}, 0), t.registerCommand(ie, (e) => {
		let t = M();
		return !(!A(t) && !_(t)) && (be(t, e), !0);
	}, 0), t.registerCommand(Pt, (e) => {
		let t = M();
		if (!A(t) && !_(t)) return !1;
		let n = t.getNodes();
		for (let t of n) {
			let n = i(t, (e) => N(e) && !e.isInline());
			n !== null && n.setFormat(e);
		}
		return !0;
	}, 0), t.registerCommand(ht, (e) => {
		let t = M();
		return !!A(t) && (t.insertLineBreak(e), !0);
	}, 0), t.registerCommand(n, () => {
		let e = M();
		return !!A(e) && (e.insertParagraph(), !0);
	}, 0), t.registerCommand(ue, () => {
		let e = ct(), t = M();
		return A(t) && (e.setFormat(t.format), e.setStyle(t.style)), Ee([e]), !0;
	}, 0), t.registerCommand(yt, () => un((e) => {
		let t = e.getIndent();
		e.setIndent(t + 1);
	}), 0), t.registerCommand(St, () => un((e) => {
		let t = e.getIndent();
		t > 0 && e.setIndent(Math.max(0, t - 1));
	}), 0), t.registerCommand(s, (e) => {
		let t = M();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), yr(n[0], "previous"), !0;
		} else if (A(t) && (!e.shiftKey && pr(t, "previous") || !e.shiftKey && gr(t, !0) || !e.shiftKey && vr(t, !0))) return e.preventDefault(), !0;
		return !1;
	}, 0), t.registerCommand(pe, (e) => {
		let t = M();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), yr(n[0], "next"), !0;
		} else if (A(t) && (function(e) {
			let t = e.focus;
			return t.key === "root" && t.offset === d().getChildrenSize();
		}(t) || !e.shiftKey && pr(t, "next") || !e.shiftKey && gr(t, !1) || !e.shiftKey && vr(t, !1))) return e.preventDefault(), !0;
		return !1;
	}, 0), t.registerCommand(It, (e) => {
		let t = M();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), yr(n[0], on(n[0]) ? "next" : "previous"), !0;
		}
		if (!A(t)) return !1;
		if (!e.shiftKey && pr(t, on(t.anchor.getNode()) ? "next" : "previous")) return e.preventDefault(), !0;
		if (e.shiftKey || dr(t, "arrow", "start", r.peek()), Qt(t, !0)) {
			let n = e.shiftKey;
			return e.preventDefault(), $t(t, n, !0), !0;
		}
		return !1;
	}, 0), t.registerCommand(u, (e) => {
		let t = M();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), yr(n[0], on(n[0]) ? "previous" : "next"), !0;
		}
		if (!A(t)) return !1;
		if (!e.shiftKey && pr(t, on(t.anchor.getNode()) ? "previous" : "next")) return e.preventDefault(), !0;
		if (e.shiftKey || dr(t, "arrow", "end", r.peek()), Qt(t, !1)) {
			let n = e.shiftKey;
			return e.preventDefault(), $t(t, n, !1), !0;
		}
		return !1;
	}, 0), t.registerCommand(oe, (e) => {
		let n = M();
		if (!_(n) && ur(e.target)) return !1;
		if (A(n)) {
			if (function(e) {
				if (!e.isCollapsed()) return !1;
				let { anchor: t } = e;
				if (t.offset !== 0) return !1;
				let n = t.getNode();
				if (Et(n)) return !1;
				let r = cn(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(n)) return e.preventDefault(), t.dispatchCommand(St, void 0);
			if (Ae && Gt) return !1;
		} else if (!_(n)) return !1;
		return e.preventDefault(), t.dispatchCommand(te, !0);
	}, 0), t.registerCommand(Bt, (e) => {
		let n = M();
		return !(!_(n) && ur(e.target)) && !(!A(n) && !_(n)) && (e.preventDefault(), t.dispatchCommand(te, !1));
	}, 0), t.registerCommand(qt, (i) => {
		let a = M();
		if (_(a)) {
			let t = a.getNodes();
			t.length === 1 && e(t[0]) && !t[0].isInline() && (a = t[0].selectNext());
		}
		if (!A(a)) return !1;
		if (dr(a, "enter", "both", r.peek()), i !== null) {
			if ((Ae || ut || Wt) && Gt) return !1;
			if (i.preventDefault(), i.shiftKey) return t.dispatchCommand(ht, !1);
		}
		return t.dispatchCommand(n, void 0);
	}, 0), t.registerCommand(at, () => !!A(M()) && (t.blur(), !0), 0), t.registerCommand(me, (e) => {
		let [, n] = an(e);
		if (n.length > 0) {
			let r = e.clientX, i = e.clientY, a = wn(r, i, t.getRootElement());
			if (a !== null) {
				let { offset: e, node: r } = a, i = k(r);
				if (i !== null) {
					let t = nt();
					if (E(i)) t.anchor.set(i.getKey(), e, "text"), t.focus.set(i.getKey(), e, "text");
					else {
						let e = i.getParentOrThrow().getKey(), n = i.getIndexWithinParent() + 1;
						t.anchor.set(e, n, "element"), t.focus.set(e, n, "element");
					}
					p(he(t));
				}
				t.dispatchCommand($n, n);
			}
			return e.preventDefault(), !0;
		}
		return bn(e, t);
	}, 0), t.registerCommand(Tt, (e) => {
		let [n] = an(e), r = M();
		return !(n && !A(r)) && (A(r) && !r.isCollapsed() && e.dataTransfer !== null && (yn(e.dataTransfer, Dn(r)), On(e.dataTransfer, t)), !0);
	}, 0), t.registerCommand(lt, (n) => {
		let [r] = an(n), i = M();
		if (r && !A(i)) return !1;
		let a = n.clientX, o = n.clientY, s = wn(a, o, t.getRootElement());
		return s !== null && e(k(s.node)) && n.preventDefault(), !0;
	}, 0), t.registerCommand(wt, () => {
		let e = M();
		return Ie(A(e) && xe(e.anchor.getNode()) !== null ? e : null), !0;
	}, 0), t.registerCommand(ge, (e) => (vn(t, ln(e, ClipboardEvent) ? e : null), !0), 0), t.registerCommand(se, (e) => (async function(e, t) {
		await vn(t, ln(e, ClipboardEvent) ? e : null), t.update(() => {
			let e = M();
			A(e) ? e.removeText() : _(e) && e.getNodes().forEach((e) => e.remove());
		}, { tag: "cut" });
	}(e, t), !0), 0), t.registerCommand(De, (e) => {
		let [, n, r] = an(e);
		return n.length > 0 && !r ? (t.dispatchCommand($n, n), !0) : D(e.target) && b(e.target) ? !1 : M() !== null && (function(e, t) {
			e.preventDefault(), t.update(() => {
				let n = M(), r = ln(e, InputEvent) || ln(e, KeyboardEvent) ? null : e.clipboardData;
				r != null && n !== null && xn(r, n, t);
			}, { tag: "paste" });
		}(e, t), !0);
	}, 0), t.registerCommand($e, () => {
		let e = M();
		return A(e) && dr(e, "space", "both", r.peek()), !1;
	}, 0), t.registerCommand(Yt, () => {
		let e = M();
		return A(e) && dr(e, "tab", "both", r.peek()), !1;
	}, 0), t.registerCommand(At, (t) => {
		let n = M();
		if (_(n)) return br(n, !1, t);
		if (!A(n)) return !1;
		let { anchor: r } = n;
		if (r.type !== "element" || r.offset !== 0) return !1;
		let i = r.getNode();
		if (!N(i)) return !1;
		let a = i.getFirstChild();
		if (!e(a) || !a.isInline()) return !1;
		let o = i.getKey(), s = i.selectEnd();
		return t.shiftKey && s.anchor.set(o, 0, "element"), t.preventDefault(), t.stopPropagation(), !0;
	}, 0), t.registerCommand(We, (t) => {
		let n = M();
		if (_(n)) return br(n, !0, t);
		if (!A(n)) return !1;
		let { anchor: r, focus: a } = n, o = i(a.getNode(), (e) => N(e) && !e.isInline());
		if (o === null) return !1;
		let s = o.getFirstChild();
		if (!e(s) || !s.isInline() || i(r.getNode(), (e) => N(e) && !e.isInline()) !== o) return !1;
		let c = o.getKey();
		return (a.type !== "element" || a.key !== c || a.offset !== 0) && (n.focus.set(c, 0, "element"), t.shiftKey || n.anchor.set(c, 0, "element"), t.preventDefault(), t.stopPropagation(), !0);
	}, 0));
}
//#endregion
//#region node_modules/@lexical/table/dist/LexicalTable.prod.mjs
var Sr = /^(\d+(?:\.\d+)?)px$/, V = {
	BOTH: 3,
	COLUMN: 2,
	NO_STATUS: 0,
	ROW: 1
}, Cr = class e extends ft {
	__colSpan;
	__rowSpan;
	__headerState;
	__width;
	__backgroundColor;
	__verticalAlign;
	static getType() {
		return "tablecell";
	}
	static clone(t) {
		return new e(t.__headerState, t.__colSpan, t.__width, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__rowSpan = e.__rowSpan, this.__backgroundColor = e.__backgroundColor, this.__verticalAlign = e.__verticalAlign, this.__colSpan = e.__colSpan, this.__headerState = e.__headerState, this.__width = e.__width;
	}
	static importDOM() {
		return {
			td: (e) => ({
				conversion: Tr,
				priority: 0
			}),
			th: (e) => ({
				conversion: Tr,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return H().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setHeaderStyles(e.headerState).setColSpan(e.colSpan || 1).setRowSpan(e.rowSpan || 1).setWidth(e.width || void 0).setBackgroundColor(e.backgroundColor || null).setVerticalAlign(e.verticalAlign || void 0);
	}
	constructor(e = V.NO_STATUS, t = 1, n, r) {
		super(r), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = n, this.__backgroundColor = null, this.__verticalAlign = void 0;
	}
	createDOM(e) {
		let t = j().createElement(this.getTag());
		return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), wr(this.__verticalAlign) && (t.style.verticalAlign = this.__verticalAlign), O(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
	}
	exportDOM(e) {
		let t = super.exportDOM(e);
		if (ye(t.element)) {
			let e = t.element;
			e.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), e.style.border = "1px solid black", this.__colSpan > 1 && (e.colSpan = this.__colSpan), this.__rowSpan > 1 && (e.rowSpan = this.__rowSpan), e.style.width = `${this.getWidth() || 75}px`, e.style.verticalAlign = this.getVerticalAlign() || "top", e.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (e.style.backgroundColor = "#f2f3f5");
		}
		return t;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			...wr(this.__verticalAlign) && { verticalAlign: this.__verticalAlign },
			backgroundColor: this.getBackgroundColor(),
			colSpan: this.__colSpan,
			headerState: this.__headerState,
			rowSpan: this.__rowSpan,
			width: this.getWidth()
		};
	}
	getColSpan() {
		return this.getLatest().__colSpan;
	}
	setColSpan(e) {
		let t = this.getWritable();
		return t.__colSpan = e, t;
	}
	getRowSpan() {
		return this.getLatest().__rowSpan;
	}
	setRowSpan(e) {
		let t = this.getWritable();
		return t.__rowSpan = e, t;
	}
	getTag() {
		return this.hasHeader() ? "th" : "td";
	}
	setHeaderStyles(e, t = V.BOTH) {
		let n = this.getWritable();
		return n.__headerState = e & t | n.__headerState & ~t, n;
	}
	getHeaderStyles() {
		return this.getLatest().__headerState;
	}
	setWidth(e) {
		let t = this.getWritable();
		return t.__width = e, t;
	}
	getWidth() {
		return this.getLatest().__width;
	}
	getBackgroundColor() {
		return this.getLatest().__backgroundColor;
	}
	setBackgroundColor(e) {
		let t = this.getWritable();
		return t.__backgroundColor = e, t;
	}
	getVerticalAlign() {
		return this.getLatest().__verticalAlign;
	}
	setVerticalAlign(e) {
		let t = this.getWritable();
		return t.__verticalAlign = e || void 0, t;
	}
	toggleHeaderStyle(e) {
		let t = this.getWritable();
		return (t.__headerState & e) === e ? t.__headerState -= e : t.__headerState += e, t;
	}
	hasHeaderState(e) {
		return (this.getHeaderStyles() & e) === e;
	}
	hasHeader() {
		return this.getLatest().__headerState !== V.NO_STATUS;
	}
	updateDOM(e) {
		return e.__headerState !== this.__headerState || e.__width !== this.__width || e.__colSpan !== this.__colSpan || e.__rowSpan !== this.__rowSpan || e.__backgroundColor !== this.__backgroundColor || e.__verticalAlign !== this.__verticalAlign;
	}
	isShadowRoot() {
		return !0;
	}
	collapseAtStart() {
		return !0;
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
};
function wr(e) {
	return e === "middle" || e === "bottom";
}
function Tr(e) {
	let t = e, n = e.nodeName.toLowerCase(), i;
	Sr.test(t.style.width) && (i = parseFloat(t.style.width));
	let a = V.NO_STATUS;
	if (n === "th") {
		let e = t.getAttribute("scope");
		if (e === "col") a = V.COLUMN;
		else if (e === "row") a = V.ROW;
		else {
			let e = t.parentElement, n = ye(e) && e.nodeName.toLowerCase() === "tr" && ye(e.parentElement) && (e.parentElement.nodeName.toLowerCase() === "thead" || e.rowIndex === 0), r = t.cellIndex === 0;
			n && (a |= V.ROW), r && (a |= V.COLUMN), a === V.NO_STATUS && (a = V.ROW);
		}
	}
	let o = H(a, t.colSpan, i);
	o.__rowSpan = t.rowSpan;
	let s = t.style.backgroundColor;
	s !== "" && (o.__backgroundColor = s);
	let c = t.style.verticalAlign;
	wr(c) && (o.__verticalAlign = c);
	let l = t.style, u = (l && l.textDecoration || "").split(" "), d = l.fontWeight === "700" || l.fontWeight === "bold", f = u.includes("line-through"), p = l.fontStyle === "italic", m = u.includes("underline"), h = l.color;
	return {
		after: (e) => {
			let t = [], n = null, i = () => {
				if (n) {
					let e = n.getFirstChild();
					ze(e) && n.getChildrenSize() === 1 && e.remove();
				}
			};
			for (let a of e) if (ve(a) || E(a) || ze(a)) {
				if (E(a) && (d && a.toggleFormat("bold"), f && a.toggleFormat("strikethrough"), p && a.toggleFormat("italic"), m && a.toggleFormat("underline"), h)) {
					let e = a.getStyle();
					e.includes("color:") || a.setStyle(e + `color: ${h};`);
				}
				n ? n.append(a) : (n = r().append(a), t.push(n));
			} else t.push(a), i(), n = null;
			return i(), t.length === 0 && t.push(r()), t;
		},
		node: o
	};
}
function H(e = V.NO_STATUS, t = 1, n) {
	return _t(new Cr(e, t, n));
}
function U(e) {
	return e instanceof Cr;
}
var Er = /* @__PURE__ */ Ut("INSERT_TABLE_COMMAND");
function W(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var Dr = class e extends ft {
	__height;
	static getType() {
		return "tablerow";
	}
	static clone(t) {
		return new e(t.__height, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__height = e.__height;
	}
	static importDOM() {
		return { tr: (e) => ({
			conversion: Or,
			priority: 0
		}) };
	}
	static importJSON(e) {
		return kr().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setHeight(e.height);
	}
	constructor(e, t) {
		super(t), this.__height = e;
	}
	exportJSON() {
		let e = this.getHeight();
		return {
			...super.exportJSON(),
			...e === void 0 ? void 0 : { height: e }
		};
	}
	createDOM(e) {
		let t = j().createElement("tr");
		return this.__height && (t.style.height = `${this.__height}px`), O(t, e.theme.tableRow), t;
	}
	extractWithChild(e, t, n) {
		return n === "html";
	}
	isShadowRoot() {
		return !0;
	}
	setHeight(e) {
		let t = this.getWritable();
		return t.__height = e, t;
	}
	getHeight() {
		return this.getLatest().__height;
	}
	updateDOM(e) {
		return e.__height !== this.__height;
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
};
function Or(e) {
	let t = e, n;
	return Sr.test(t.style.height) && (n = parseFloat(t.style.height)), {
		after: (e) => nn(e, U),
		node: kr(n)
	};
}
function kr(e) {
	return _t(new Dr(e));
}
function G(e) {
	return e instanceof Dr;
}
function Ar(e, t, n = !0) {
	let i = ea();
	for (let a = 0; a < e; a++) {
		let e = kr();
		for (let i = 0; i < t; i++) {
			let t = V.NO_STATUS;
			typeof n == "object" ? (a === 0 && n.rows && (t |= V.ROW), i === 0 && n.columns && (t |= V.COLUMN)) : n && (a === 0 && (t |= V.ROW), i === 0 && (t |= V.COLUMN));
			let o = H(t), s = r();
			s.append(l()), o.append(s), e.append(o);
		}
		i.append(e);
	}
	return i;
}
function jr(e) {
	let t = i(e, (e) => U(e));
	return U(t) ? t : null;
}
function Mr(e) {
	let t = i(e, (e) => G(e));
	if (G(t)) return t;
	throw Error("Expected table cell to be inside of table row.");
}
function Nr(e) {
	let t = i(e, (e) => Y(e));
	if (Y(t)) return t;
	throw Error("Expected table cell to be inside of table.");
}
function Pr(e) {
	let t = Mr(e);
	return Nr(t).getChildren().findIndex((e) => e.is(t));
}
function Fr(e) {
	return Mr(e).getChildren().findIndex((t) => t.is(e));
}
var Ir = (e, t) => e === V.BOTH || e === t ? t : V.NO_STATUS;
function Lr(e = !0) {
	let t = M();
	A(t) || J(t) || W(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = q(n), [a, , o] = q(r), [, s, c] = K(o, a, i), { startRow: l } = c, { startRow: u } = s;
	return e ? Rr(l + i.__rowSpan > u + a.__rowSpan ? i : a, !0) : Rr(u < l ? a : i, !1);
}
function Rr(e, t = !0) {
	let [, , n] = q(e), [i, a] = K(n, e, e), o = i[0].length, { startRow: s } = a, c = null;
	if (t) {
		let t = s + e.__rowSpan - 1, a = i[t], l = kr();
		for (let e = 0; e < o; e++) {
			let { cell: n, startRow: i } = a[e];
			if (i + n.__rowSpan - 1 <= t) {
				let t = a[e].cell.__headerState, n = Ir(t, V.COLUMN);
				l.append(H(n).append(r()));
			} else n.setRowSpan(n.__rowSpan + 1);
		}
		let u = n.getChildAtIndex(t);
		G(u) || W(256), u.insertAfter(l), c = l;
	} else {
		let e = s, t = i[e], a = kr();
		for (let n = 0; n < o; n++) {
			let { cell: i, startRow: o } = t[n];
			if (o === e) {
				let e = t[n].cell.__headerState, i = Ir(e, V.COLUMN);
				a.append(H(i).append(r()));
			} else i.setRowSpan(i.__rowSpan + 1);
		}
		let l = n.getChildAtIndex(e);
		G(l) || W(257), l.insertBefore(a), c = a;
	}
	return c;
}
function zr(e = !0) {
	let t = M();
	A(t) || J(t) || W(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = q(n), [a, , o] = q(r), [, s, c] = K(o, a, i), { startColumn: l } = c, { startColumn: u } = s;
	return e ? Br(l + i.__colSpan > u + a.__colSpan ? i : a, !0) : Br(u < l ? a : i, !1);
}
function Br(e, t = !0, n = !0) {
	let [, , i] = q(e), [a, o] = K(i, e, e), s = a.length, { startColumn: c } = o, l = t ? c + e.__colSpan - 1 : c - 1, u = i.getFirstChild();
	G(u) || W(120);
	let d = null;
	function f(e = V.NO_STATUS) {
		let t = H(e).append(r());
		return d === null && (d = t), t;
	}
	let p = u;
	e: for (let e = 0; e < s; e++) {
		if (e !== 0) {
			let e = p.getNextSibling();
			G(e) || W(121), p = e;
		}
		let t = a[e], n = t[l < 0 ? 0 : l].cell.__headerState, r = Ir(n, V.ROW);
		if (l < 0) {
			Wr(p, f(r));
			continue;
		}
		let { cell: i, startColumn: o, startRow: s } = t[l];
		if (o + i.__colSpan - 1 <= l) {
			let n = i, a = s, o = l;
			for (; a !== e && n.__rowSpan > 1;) {
				if (o -= i.__colSpan, !(o >= 0)) {
					p.append(f(r));
					continue e;
				}
				{
					let { cell: e, startRow: r } = t[o];
					n = e, a = r;
				}
			}
			n.insertAfter(f(r));
		} else i.setColSpan(i.__colSpan + 1);
	}
	d !== null && n && Ur(d);
	let m = i.getColWidths();
	if (m) {
		let e = [...m], t = l < 0 ? 0 : l, n = e[t];
		e.splice(t, 0, n), i.setColWidths(e);
	}
	return d;
}
function Vr() {
	let e = M();
	A(e) || J(e) || W(188);
	let [t, n] = e.isBackward() ? [e.focus.getNode(), e.anchor.getNode()] : [e.anchor.getNode(), e.focus.getNode()], [r, , i] = q(t), [a] = q(n), [o, s, c] = K(i, r, a), { startRow: l } = s, { startRow: u } = c, d = u + a.__rowSpan - 1;
	if (o.length === d - l + 1) return void i.remove();
	let f = o[0].length, p = o[d + 1], m = i.getChildAtIndex(d + 1);
	for (let e = d; e >= l; e--) {
		for (let t = f - 1; t >= 0; t--) {
			let { cell: n, startRow: r, startColumn: i } = o[e][t];
			if (i === t) {
				if (r < l || r + n.__rowSpan - 1 > d) {
					let e = Math.max(r, l), t = Math.min(n.__rowSpan + r - 1, d), i = e <= t ? t - e + 1 : 0;
					n.setRowSpan(n.__rowSpan - i);
				}
				if (r >= l && r + n.__rowSpan - 1 > d && e === d) {
					G(m) || W(387);
					let r = null;
					for (let n = 0; n < t; n++) {
						let t = p[n], i = t.cell;
						t.startRow === e + 1 && (r = i), i.__colSpan > 1 && (n += i.__colSpan - 1);
					}
					r === null ? Wr(m, n) : r.insertAfter(n);
				}
			}
		}
		let t = i.getChildAtIndex(e);
		G(t) || W(206, String(e)), t.remove();
	}
	if (p !== void 0) {
		let { cell: e } = p[0];
		Ur(e);
	} else {
		let { cell: e } = o[l - 1][0];
		Ur(e);
	}
}
function Hr() {
	let e = M();
	A(e) || J(e) || W(188);
	let t = e.anchor.getNode(), n = e.focus.getNode(), [r, , i] = q(t), [a] = q(n), [o, s, c] = K(i, r, a), { startColumn: l } = s, { startRow: u, startColumn: d } = c, f = Math.min(l, d), p = Math.max(l + r.__colSpan - 1, d + a.__colSpan - 1), m = p - f + 1;
	if (o[0].length === p - f + 1) return i.selectPrevious(), void i.remove();
	let h = o.length;
	for (let e = 0; e < h; e++) for (let t = f; t <= p; t++) {
		let { cell: n, startColumn: r } = o[e][t];
		if (r < f) {
			if (t === f) {
				let e = f - r;
				n.setColSpan(n.__colSpan - Math.min(m, n.__colSpan - e));
			}
		} else if (r + n.__colSpan - 1 > p) {
			if (t === p) {
				let e = p - r + 1;
				n.setColSpan(n.__colSpan - e);
			}
		} else n.remove();
	}
	let g = o[u], _ = l > d ? g[l + r.__colSpan] : g[d + a.__colSpan];
	if (_ !== void 0) {
		let { cell: e } = _;
		Ur(e);
	} else {
		let { cell: e } = d < l ? g[d - 1] : g[l - 1];
		Ur(e);
	}
	let v = i.getColWidths();
	if (v) {
		let e = [...v];
		e.splice(f, m), i.setColWidths(e);
	}
}
function Ur(e) {
	let t = e.getFirstDescendant();
	t == null ? e.selectStart() : t.getParentOrThrow().selectStart();
}
function Wr(e, t) {
	let n = e.getFirstChild();
	n === null ? e.append(t) : n.insertBefore(t);
}
function Gr(e) {
	if (e.length === 0) return null;
	let [t] = Yr(Nr(e[0]), null, null), n = Infinity, i = -Infinity, a = Infinity, o = -Infinity, s = /* @__PURE__ */ new Set();
	for (let r of t) for (let t of r) {
		if (!t || !t.cell) continue;
		let r = t.cell.getKey();
		if (!s.has(r) && e.some((e) => e.is(t.cell))) {
			s.add(r);
			let e = t.startRow, c = t.startColumn, l = t.cell.__rowSpan || 1, u = t.cell.__colSpan || 1;
			n = Math.min(n, e), i = Math.max(i, e + l - 1), a = Math.min(a, c), o = Math.max(o, c + u - 1);
		}
	}
	if (n === Infinity || a === Infinity) return null;
	let c = i - n + 1, l = o - a + 1, u = t[n][a];
	if (!u.cell) return null;
	let d = u.cell;
	d.setColSpan(l), d.setRowSpan(c);
	let f = /* @__PURE__ */ new Set([d.getKey()]);
	for (let e = n; e <= i; e++) for (let n = a; n <= o; n++) {
		let r = t[e][n];
		if (!r.cell) continue;
		let i = r.cell, a = i.getKey();
		f.has(a) || (f.add(a), Kr(i) || d.append(...i.getChildren()), i.remove());
	}
	return d.getChildrenSize() === 0 && d.append(r()), d;
}
function Kr(e) {
	if (e.getChildrenSize() !== 1) return !1;
	let t = e.getFirstChildOrThrow();
	return !(!st(t) || !t.isEmpty());
}
function qr() {
	let e = M();
	A(e) || J(e) || W(188);
	let t = i(e.anchor.getNode(), U);
	return U(t) || W(148), Jr(t);
}
function Jr(e) {
	let [t, n, i] = q(e), a = t.__colSpan, o = t.__rowSpan;
	if (a === 1 && o === 1) return;
	let [s, c] = K(i, t, t), { startColumn: l, startRow: u } = c, d = t.__headerState & V.COLUMN, f = Array.from({ length: a }, (e, t) => {
		let n = d;
		for (let e = 0; n !== 0 && e < s.length; e++) n &= s[e][t + l].cell.__headerState;
		return n;
	}), p = t.__headerState & V.ROW, m = Array.from({ length: o }, (e, t) => {
		let n = p;
		for (let e = 0; n !== 0 && e < s[0].length; e++) n &= s[t + u][e].cell.__headerState;
		return n;
	});
	if (a > 1) {
		for (let e = 1; e < a; e++) t.insertAfter(H(f[e] | m[0]).append(r()));
		t.setColSpan(1);
	}
	if (o > 1) {
		let e;
		for (let t = 1; t < o; t++) {
			let i = u + t, o = s[i];
			e = (e || n).getNextSibling(), G(e) || W(125);
			let c = null;
			for (let e = 0; e < l; e++) {
				let t = o[e], n = t.cell;
				t.startRow === i && (c = n), n.__colSpan > 1 && (e += n.__colSpan - 1);
			}
			if (c === null) for (let n = a - 1; n >= 0; n--) Wr(e, H(f[n] | m[t]).append(r()));
			else for (let e = a - 1; e >= 0; e--) c.insertAfter(H(f[e] | m[t]).append(r()));
		}
		t.setRowSpan(1);
	}
}
function K(e, t, n) {
	let [r, i, a] = Yr(e, t, n);
	return i === null && W(207), a === null && W(208), [
		r,
		i,
		a
	];
}
function Yr(e, t, n) {
	let r = [], i = null, a = null;
	function o(e) {
		let t = r[e];
		return t === void 0 && (r[e] = t = []), t;
	}
	let s = e.getChildren();
	for (let e = 0; e < s.length; e++) {
		let r = s[e];
		G(r) || W(209);
		let c = o(e);
		for (let l = r.getFirstChild(), u = 0; l != null; l = l.getNextSibling()) {
			for (U(l) || W(147); c[u] !== void 0;) u++;
			let r = {
				cell: l,
				startColumn: u,
				startRow: e
			}, { __rowSpan: d, __colSpan: f } = l;
			for (let t = 0; t < d && !(e + t >= s.length); t++) {
				let n = o(e + t);
				for (let e = 0; e < f; e++) n[u + e] = r;
			}
			t !== null && i === null && t.is(l) && (i = r), n !== null && a === null && n.is(l) && (a = r);
		}
	}
	return [
		r,
		i,
		a
	];
}
function q(e) {
	let t;
	if (e instanceof Cr) t = e;
	else if ("__type" in e) {
		let n = i(e, U);
		U(n) || W(148), t = n;
	} else {
		let n = i(e.getNode(), U);
		U(n) || W(148), t = n;
	}
	let n = t.getParent();
	G(n) || W(149);
	let r = n.getParent();
	return Y(r) || W(210), [
		t,
		n,
		r
	];
}
function Xr(e, t, n) {
	let r, i = Math.min(t.startColumn, n.startColumn), a = Math.min(t.startRow, n.startRow), o = Math.max(t.startColumn + t.cell.__colSpan - 1, n.startColumn + n.cell.__colSpan - 1), s = Math.max(t.startRow + t.cell.__rowSpan - 1, n.startRow + n.cell.__rowSpan - 1);
	do {
		r = !1;
		for (let t = 0; t < e.length; t++) for (let n = 0; n < e[0].length; n++) {
			let c = e[t][n];
			if (!c) continue;
			let l = c.startColumn + c.cell.__colSpan - 1, u = c.startRow + c.cell.__rowSpan - 1, d = c.startColumn <= o && l >= i, f = c.startRow <= s && u >= a;
			if (d && f) {
				let e = Math.min(i, c.startColumn), t = Math.max(o, l), n = Math.min(a, c.startRow), d = Math.max(s, u);
				e === i && t === o && n === a && d === s || (i = e, o = t, a = n, s = d, r = !0);
			}
		}
	} while (r);
	return {
		maxColumn: o,
		maxRow: s,
		minColumn: i,
		minRow: a
	};
}
function Zr(e) {
	let [t, , n] = q(e), r = n.getChildren().filter(G), i = r.length, a = r[0].getChildren().length, o = Array(i);
	for (let e = 0; e < i; e++) o[e] = Array(a);
	for (let e = 0; e < i; e++) {
		let n = r[e].getChildren().filter(U), i = 0;
		for (let r = 0; r < n.length; r++) {
			for (; o[e][i];) i++;
			let a = n[r], s = a.__rowSpan || 1, c = a.__colSpan || 1;
			for (let t = 0; t < s; t++) for (let n = 0; n < c; n++) o[e + t][i + n] = a;
			if (t === a) return {
				colSpan: c,
				columnIndex: i,
				rowIndex: e,
				rowSpan: s
			};
			i += c;
		}
	}
	return null;
}
function Qr(e, t) {
	let n = t.getStartEndPoints(), a = J(t);
	if (n === null) return !1;
	let [o, s] = n, [c, l, u] = q(o), d = i(s.getNode(), (e) => U(e));
	if (!(U(c) && U(d) && G(l) && Y(u))) return !1;
	let [f, p, m] = K(u, c, d), [h] = Yr(e, null, null), g = f.length, _ = g > 0 ? f[0].length : 0, v = p.startRow, y = p.startColumn, b = h.length, x = b > 0 ? h[0].length : 0;
	if (a) {
		let e = Xr(f, p, m), t = e.maxRow - e.minRow + 1, n = e.maxColumn - e.minColumn + 1;
		v = e.minRow, y = e.minColumn, b = Math.min(b, t), x = Math.min(x, n);
	}
	let S = !1, ee = Math.min(g, v + b) - 1, C = Math.min(_, y + x) - 1, w = /* @__PURE__ */ new Set();
	for (let e = v; e <= ee; e++) for (let t = y; t <= C; t++) {
		let n = f[e][t];
		w.has(n.cell.getKey()) || n.cell.__rowSpan === 1 && n.cell.__colSpan === 1 || (Jr(n.cell), w.add(n.cell.getKey()), S = !0);
	}
	let [T] = Yr(u.getWritable(), null, null), te = b - g + v;
	for (let e = 0; e < te; e++) Rr(T[g - 1][0].cell);
	let ne = x - _ + y;
	for (let e = 0; e < ne; e++) Br(T[0][_ - 1].cell, !0, !1);
	[T] = Yr(u.getWritable(), null, null);
	for (let e = v; e < v + b; e++) for (let t = y; t < y + x; t++) {
		let n = e - v, i = t - y, a = h[n][i];
		if (a.startRow !== n || a.startColumn !== i) continue;
		let o = a.cell;
		if (o.__rowSpan !== 1 || o.__colSpan !== 1) {
			let n = [], r = Math.min(e + o.__rowSpan, v + b) - 1, i = Math.min(t + o.__colSpan, y + x) - 1;
			for (let a = e; a <= r; a++) for (let e = t; e <= i; e++) {
				let t = T[a][e];
				n.push(t.cell);
			}
			Gr(n), S = !0;
		}
		let { cell: s } = T[e][t], c = o.getBackgroundColor();
		c != null && s.setBackgroundColor(c);
		let l = s.getChildren();
		o.getChildren().forEach((e) => {
			E(e) && r().append(e), s.append(e);
		}), l.forEach((e) => e.remove());
	}
	if (a && S) {
		let [e] = Yr(u.getWritable(), null, null);
		e[p.startRow][p.startColumn].cell.selectEnd();
	}
	return !0;
}
function $r(e) {
	let [[t, n, r, a], [o, s, c, l]] = ["anchor", "focus"].map((t) => {
		let n = e[t].getNode(), r = i(n, U);
		U(r) || W(238, t, n.getKey(), n.getType());
		let a = r.getParent();
		G(a) || W(239, t);
		let o = a.getParent();
		return Y(o) || W(240, t), [
			n,
			r,
			a,
			o
		];
	});
	return a.is(l) || W(241), {
		anchorCell: n,
		anchorNode: t,
		anchorRow: r,
		anchorTable: a,
		focusCell: s,
		focusNode: o,
		focusRow: c,
		focusTable: l
	};
}
var ei = class e {
	tableKey;
	anchor;
	focus;
	_cachedNodes;
	dirty;
	constructor(e, t, n) {
		this.anchor = t, this.focus = n, t._selection = this, n._selection = this, this._cachedNodes = null, this.dirty = !1, this.tableKey = e;
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
	isValid() {
		if (this.tableKey === "root" || this.anchor.key === "root" || this.anchor.type !== "element" || this.focus.key === "root" || this.focus.type !== "element") return !1;
		let e = w(this.tableKey), t = w(this.anchor.key), n = w(this.focus.key);
		return e !== null && t !== null && n !== null;
	}
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return J(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
	}
	set(e, t, n) {
		this.dirty = this.dirty || e !== this.tableKey || t !== this.anchor.key || n !== this.focus.key, this.tableKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null;
	}
	clone() {
		return new e(this.tableKey, Ye(this.anchor.key, this.anchor.offset, this.anchor.type), Ye(this.focus.key, this.focus.offset, this.focus.type));
	}
	isCollapsed() {
		return !1;
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {
		if (e === "") return;
		let t = (e.endsWith("\n") ? e.slice(0, -1) : e).split("\n").map((e) => e.split("	")), n = ea();
		for (let e of t) {
			let t = kr();
			for (let n of e) {
				let e = H(V.NO_STATUS), i = r();
				n && i.append(l(n)), e.append(i), t.append(e);
			}
			n.append(t);
		}
		let { anchorCell: i } = $r(this);
		Qr(n, i.select(0, i.getChildrenSize()));
	}
	insertText() {}
	hasFormat(e) {
		let t = 0;
		this.getNodes().filter(U).forEach((e) => {
			let n = e.getFirstChild();
			st(n) && (t |= n.getTextFormat());
		});
		let n = Mt[e];
		return (t & n) !== 0;
	}
	insertNodes(e) {
		let t = this.focus.getNode();
		N(t) || W(151), he(t.select(0, t.getChildrenSize())).insertNodes(e);
	}
	getShape() {
		let { anchorCell: e, focusCell: t } = $r(this), n = Zr(e);
		n === null && W(153);
		let r = Zr(t);
		r === null && W(155);
		let i = Math.min(n.columnIndex, r.columnIndex), a = Math.max(n.columnIndex + n.colSpan - 1, r.columnIndex + r.colSpan - 1), o = Math.min(n.rowIndex, r.rowIndex), s = Math.max(n.rowIndex + n.rowSpan - 1, r.rowIndex + r.rowSpan - 1);
		return {
			fromX: Math.min(i, a),
			fromY: Math.min(o, s),
			toX: Math.max(i, a),
			toY: Math.max(o, s)
		};
	}
	getNodes() {
		if (!this.isValid()) return [];
		let e = this._cachedNodes;
		if (e !== null) return e;
		let { anchorTable: t, anchorCell: n, focusCell: r } = $r(this), i = r.getParents()[1];
		if (i !== t) {
			if (t.isParentOf(r)) {
				let e = i.getParent();
				e ?? W(159), this.set(this.tableKey, r.getKey(), e.getKey());
			} else {
				let e = t.getParent();
				e ?? W(158), this.set(this.tableKey, e.getKey(), r.getKey());
			}
			return this.getNodes();
		}
		let [a, o, s] = K(t, n, r), { minColumn: c, maxColumn: l, minRow: u, maxRow: d } = Xr(a, o, s), f = /* @__PURE__ */ new Map([[t.getKey(), t]]), p = null;
		for (let e = u; e <= d; e++) for (let t = c; t <= l; t++) {
			let { cell: n } = a[e][t], r = n.getParent();
			G(r) || W(160), r !== p && (f.set(r.getKey(), r), p = r), f.has(n.getKey()) || ri(n, (e) => {
				f.set(e.getKey(), e);
			});
		}
		let m = Array.from(f.values());
		return Je() || (this._cachedNodes = m), m;
	}
	getTextContent() {
		let e = this.getNodes().filter((e) => U(e)), t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.__parent, a = (e[n + 1] || {}).__parent;
			t += r.getTextContent() + (a === i ? "	" : "\n");
		}
		return t;
	}
};
function J(e) {
	return e instanceof ei;
}
function ti() {
	return new ei("root", Ye("root", 0, "element"), Ye("root", 0, "element"));
}
function ni(e, t, n) {
	e.getKey(), t.getKey(), n.getKey();
	let r = M(), i = J(r) ? r.clone() : ti();
	return i.set(e.getKey(), t.getKey(), n.getKey()), i;
}
function ri(e, t) {
	let n = [[e]];
	for (let e = n.at(-1); e !== void 0 && n.length > 0; e = n.at(-1)) {
		let r = e.pop();
		r === void 0 ? n.pop() : !1 !== t(r) && N(r) && n.push(r.getChildren());
	}
}
function ii(e, t = kt()) {
	let n = w(e);
	Y(n) || W(231, e);
	let r = fi(n, t.getElementByKey(e));
	return r === null && W(232, e), {
		tableElement: r,
		tableNode: n
	};
}
var ai = class {
	observers;
	nextFocus;
	shouldCheckSelectionForTable;
	constructor() {
		this.observers = /* @__PURE__ */ new Map(), this.nextFocus = null, this.shouldCheckSelectionForTable = null;
	}
	setNextFocus(e) {
		this.nextFocus = e;
	}
	getAndClearNextFocus() {
		let { nextFocus: e } = this;
		return e !== null && (this.nextFocus = null), e;
	}
	setShouldCheckSelectionForTable(e) {
		this.shouldCheckSelectionForTable = e;
	}
	getAndClearShouldCheckSelectionForTable() {
		let { shouldCheckSelectionForTable: e } = this;
		return e ? (this.shouldCheckSelectionForTable = null, e) : null;
	}
	removeObserver(e) {
		let t = this.observers.get(e);
		return t !== void 0 && (t[0].removeListeners(), this.observers.delete(e), !0);
	}
	removeAllObservers() {
		for (let e of Array.from(this.observers.keys())) this.removeObserver(e);
	}
	$getTableNodesAndObservers() {
		let e = [];
		for (let [t, [n]] of Array.from(this.observers.entries())) {
			let r = w(t);
			Y(r) ? e.push([r, n]) : this.removeObserver(t);
		}
		return e;
	}
}, oi = class {
	focusX;
	focusY;
	listenersToRemove;
	table;
	isHighlightingCells;
	anchorX;
	anchorY;
	tableNodeKey;
	anchorCell;
	focusCell;
	anchorCellNodeKey;
	focusCellNodeKey;
	editor;
	tableSelection;
	hasHijackedSelectionStyles;
	isSelecting;
	pointerType;
	abortController;
	listenerOptions;
	constructor(e, t) {
		this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.listenersToRemove = /* @__PURE__ */ new Set(), this.tableNodeKey = t, this.editor = e, this.table = {
			columns: 0,
			domRows: [],
			rows: 0
		}, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.isSelecting = !1, this.pointerType = null, this.abortController = new AbortController(), this.listenerOptions = { signal: this.abortController.signal }, this.trackTable();
	}
	getTable() {
		return this.table;
	}
	removeListeners() {
		this.abortController.abort("removeListeners"), Array.from(this.listenersToRemove).forEach((e) => e()), this.listenersToRemove.clear();
	}
	$lookup() {
		return ii(this.tableNodeKey, this.editor);
	}
	trackTable() {
		let e = new MutationObserver((e) => {
			this.editor.read("latest", () => {
				let t = !1;
				for (let n = 0; n < e.length; n++) {
					let r = e[n].target.nodeName;
					if (r === "TABLE" || r === "TBODY" || r === "THEAD" || r === "TR") {
						t = !0;
						break;
					}
				}
				if (!t) return;
				let { tableNode: n, tableElement: r } = this.$lookup();
				this.table = Ti(n, r);
			});
		});
		this.editor.read("latest", () => {
			let { tableNode: t, tableElement: n } = this.$lookup();
			this.table = Ti(t, n), e.observe(n, {
				attributes: !0,
				childList: !0,
				subtree: !0
			});
		});
	}
	$clearHighlight(e = !0) {
		let t = this.editor;
		this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.$enableHighlightStyle();
		let { tableNode: n, tableElement: r } = this.$lookup();
		Ei(t, Ti(n, r), null), e && M() !== null && (p(null), t.dispatchCommand(g, void 0));
	}
	$enableHighlightStyle() {
		let e = this.editor, { tableElement: t } = this.$lookup();
		de(t, e._config.theme.tableSelection), t.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
	}
	$disableHighlightStyle() {
		let { tableElement: e } = this.$lookup();
		O(e, this.editor._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
	}
	$updateTableTableSelection(e) {
		if (e !== null) {
			e.tableKey !== this.tableNodeKey && W(233, e.tableKey, this.tableNodeKey);
			let t = this.editor;
			this.tableSelection = e, this.isHighlightingCells = !0, this.$disableHighlightStyle(), this.updateDOMSelection(), Ei(t, this.table, this.tableSelection);
		} else this.$clearHighlight();
	}
	updateDOMSelection() {
		if (this.anchorCell !== null && this.focusCell !== null) {
			let e = ae(this.editor._window);
			e && e.rangeCount > 0 && e.removeAllRanges();
		}
	}
	$setFocusCellForSelection(e, t = !1) {
		let n = this.editor, { tableNode: r } = this.$lookup(), i = e.x, a = e.y;
		if (this.focusCell = e, !this.isHighlightingCells && (t || this.anchorX !== i || this.anchorY !== a || this.tableSelection != null && this.anchorCellNodeKey != null) && (this.isHighlightingCells = !0, this.$disableHighlightStyle()), this.focusX !== -1 && this.focusY !== -1 && i === this.focusX && a === this.focusY) return !1;
		if (this.focusX = i, this.focusY = a, this.isHighlightingCells) {
			let o = Gi(r, e.elem);
			if (this.tableSelection != null && this.anchorCellNodeKey != null) {
				let e = o;
				if (e === null && t && (e = r.getCellNodeFromCords(i, a, this.table)), e !== null) {
					let t = this.$getAnchorTableCellOrThrow();
					return this.focusCellNodeKey = e.getKey(), this.tableSelection = ni(r, t, e), p(this.tableSelection), n.dispatchCommand(g, void 0), Ei(n, this.table, this.tableSelection), !0;
				}
			}
		}
		return !1;
	}
	$getAnchorTableCell() {
		let e = this.anchorCellNodeKey ? w(this.anchorCellNodeKey) : null;
		return U(e) ? e : null;
	}
	$getAnchorTableCellOrThrow() {
		let e = this.$getAnchorTableCell();
		return e === null && W(234), e;
	}
	$getFocusTableCell() {
		let e = this.focusCellNodeKey ? w(this.focusCellNodeKey) : null;
		return U(e) ? e : null;
	}
	$getFocusTableCellOrThrow() {
		let e = this.$getFocusTableCell();
		return e === null && W(235), e;
	}
	$setAnchorCellForSelection(e) {
		this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.focusX = -1, this.focusY = -1, this.focusCell = null, this.focusCellNodeKey = null;
		let { tableNode: t } = this.$lookup(), n = Gi(t, e.elem);
		if (n !== null) {
			let e = n.getKey();
			this.tableSelection == null ? this.tableSelection = ni(t, n, n) : (this.tableSelection = this.tableSelection.clone(), this.tableSelection.set(t.getKey(), e, e)), this.anchorCellNodeKey = e;
		}
	}
	$formatCells(e) {
		let t = M();
		J(t) || W(236);
		let n = nt(), r = n.anchor, i = n.focus, a = t.getNodes().filter(U);
		a.length > 0 || W(237);
		let o = a[0].getFirstChild(), s = st(o) ? o.getFormatFlags(e, null) : null;
		a.forEach((t) => {
			r.set(t.getKey(), 0, "element"), i.set(t.getKey(), t.getChildrenSize(), "element"), n.formatText(e, s);
		}), p(t), this.editor.dispatchCommand(g, void 0);
	}
	$clearText() {
		let { editor: e } = this, t = w(this.tableNodeKey);
		if (!Y(t)) throw Error("Expected TableNode.");
		let i = M();
		J(i) || W(253);
		let a = i.getNodes().filter(U), o = t.getFirstChild(), s = t.getLastChild();
		if (a.length > 0 && o !== null && s !== null && G(o) && G(s) && a[0] === o.getFirstChild() && a[a.length - 1] === s.getLastChild()) {
			t.selectPrevious();
			let r = t.getParent();
			t.remove(), Et(r) && r.isEmpty() && e.dispatchCommand(n, void 0);
			return;
		}
		a.forEach((e) => {
			if (N(e)) {
				let t = r(), n = l();
				t.append(n), e.append(t), e.getChildren().forEach((e) => {
					e !== t && e.remove();
				});
			}
		}), Ei(e, this.table, null), p(null), e.dispatchCommand(g, void 0);
	}
}, si = "__lexicalTableSelection";
function ci(e) {
	let t = Ce(e);
	return Y(t) || W(386, e), t;
}
var li = 40;
function ui(e, t, n) {
	let r = (e) => Math.max(1, Math.ceil(Math.min(li, e) / li * 18));
	return e <= t + li ? -r(t + li - e) : e >= n - li ? r(e - (n - li)) : 0;
}
function di(e) {
	return ye(e) && e.nodeName === "TABLE";
}
function fi(e, t) {
	if (!t) return t;
	let n = di(t) ? t : t.querySelector("table");
	return di(n) || W(341, e.constructor.name, e.getType(), e.getKey(), t.nodeName), n;
}
function pi(e) {
	return e._window;
}
function mi(e, t) {
	for (let n = t, r = null; n !== null; n = n.getParent()) {
		if (e.is(n)) return r;
		U(n) && (r = n);
	}
	return null;
}
var hi = [
	[pe, "down"],
	[s, "up"],
	[It, "backward"],
	[u, "forward"]
], gi = [
	tt,
	Le,
	te
], _i = [oe, Bt];
function vi(e, t) {
	return e.registerRootListener((n) => {
		if (n === null) return;
		let r = e._window;
		if (r !== null) return Jt(r, "pointerdown", (r) => {
			let i = Fe(r);
			if (r.button !== 0 || !D(i) || !n.contains(i)) return;
			let a = function(e) {
				let t = Ci(e);
				if (t === null) return null;
				let n = t.elem;
				for (; n != null;) {
					if (n.nodeName === "TABLE" && si in n && n[si]) return {
						cellElement: t,
						tableElement: n,
						tableObserver: n[si]
					};
					n = n.parentNode;
				}
				return null;
			}(i);
			e.update(() => {
				if (J(M())) {
					for (let [e] of t.observers.values()) e.$clearHighlight(!1);
					p(null), e.dispatchCommand(g, void 0);
				}
				if (!a) return;
				let { tableObserver: n, tableElement: i, cellElement: o } = a;
				(function(e, t, n, r, i, a) {
					let o = e._window;
					if (!o) return;
					let s = (n) => {
						if (i.isSelecting) return;
						i.isSelecting = !0, n !== null && i.anchorCell === null && e.update(() => {
							i.$setAnchorCellForSelection(n);
						});
						let s = t.clientX, c = t.clientY, l = null, u = () => {
							i.isSelecting = !1, l !== null && (o.cancelAnimationFrame(l), l = null), o.removeEventListener("pointerup", x), o.removeEventListener("pointermove", S);
						}, d = (e, t) => {
							let n = r.getRootNode();
							if (!ke(n) && !y(n)) return null;
							for (let i of n.elementsFromPoint(e, t)) {
								let e = wi(r, i);
								if (e) return e;
							}
							return null;
						}, f = (t, n) => {
							i.anchorCell === null && e.update(() => {
								i.$setAnchorCellForSelection(t);
							}), i.focusCell !== null && t.elem === i.focusCell.elem || (a.setNextFocus({
								focusCell: t,
								override: n,
								tableKey: i.tableNodeKey
							}), e.dispatchCommand(g, void 0));
						}, p = (e) => {
							for (let t = r.parentElement; t; t = t.parentElement) if (e === "x" ? t.scrollWidth > t.clientWidth : t.scrollHeight > t.clientHeight) {
								let n = o.getComputedStyle(t), r = e === "x" ? n.overflowX : n.overflowY;
								if (r === "auto" || r === "scroll") return t;
							}
							return null;
						}, m = (e, t, n) => {
							let r, i;
							if (e === null) r = 0, i = n === "x" ? o.innerWidth : o.innerHeight;
							else {
								let t = e.getBoundingClientRect();
								r = n === "x" ? t.left : t.top, i = n === "x" ? t.right : t.bottom;
							}
							let a = ui(t, r, i);
							if (a === 0) return !1;
							if (e === null) {
								let e = n === "x" ? o.scrollX : o.scrollY;
								return o.scrollBy(n === "x" ? a : 0, n === "x" ? 0 : a), (n === "x" ? o.scrollX : o.scrollY) !== e;
							}
							if (n === "x") {
								let t = e.scrollLeft;
								return e.scrollLeft += a, e.scrollLeft !== t;
							}
							let s = e.scrollTop;
							return e.scrollTop += a, e.scrollTop !== s;
						}, h = (e, t) => {
							let n = s, r = c;
							if (e === null) n = Math.min(Math.max(n, 1), o.innerWidth - 1);
							else {
								let t = e.getBoundingClientRect();
								n = Math.min(Math.max(n, t.left + 1), t.right - 1);
							}
							if (t === null) r = Math.min(Math.max(r, 1), o.innerHeight - 1);
							else {
								let e = t.getBoundingClientRect();
								r = Math.min(Math.max(r, e.top + 1), e.bottom - 1);
							}
							return [n, r];
						}, _ = () => {
							let e = p("x");
							if (e !== null) {
								let t = e.getBoundingClientRect();
								if (ui(s, t.left, t.right) !== 0) return !0;
							}
							let t = p("y"), n = t === null ? 0 : t.getBoundingClientRect().top, r = t === null ? o.innerHeight : t.getBoundingClientRect().bottom;
							return ui(c, n, r) !== 0;
						}, v = () => {
							if (l = null, !i.isSelecting) return;
							let e = p("x"), t = p("y"), n = e !== null && m(e, s, "x"), r = m(t, c, "y");
							if (n || r) {
								let [n, r] = h(e, t), i = d(n, r);
								i && f(i, !1), l = o.requestAnimationFrame(v);
							}
						}, b = () => {
							l === null && i.pointerType !== "touch" && _() && (l = o.requestAnimationFrame(v));
						}, x = () => {
							u();
						}, S = (e) => {
							if (!((e) => !(1 & ~e.buttons))(e) && i.isSelecting) return void u();
							let t = Fe(e);
							if (!D(t)) return;
							s = e.clientX, c = e.clientY;
							let n = null, a = !(Te || r.contains(t));
							n = a ? wi(r, t) : d(e.clientX, e.clientY), n && f(n, a), b();
						};
						o.addEventListener("pointerup", x, i.listenerOptions), o.addEventListener("pointermove", S, i.listenerOptions);
					};
					i.pointerType = t.pointerType;
					let c = ci(i.tableNodeKey), l = je();
					if (Te && t.shiftKey && Ni(l, c) && (A(l) || J(l))) {
						let e = l.anchor.getNode(), r = mi(c, l.anchor.getNode());
						r ? (i.$setAnchorCellForSelection(Wi(i, r)), i.$setFocusCellForSelection(n), Vi(t)) : (c.isBefore(e) ? c.selectStart() : c.selectEnd()).anchor.set(l.anchor.key, l.anchor.offset, l.anchor.type);
					} else t.pointerType !== "touch" && i.$setAnchorCellForSelection(n);
					s(n);
				})(e, r, o, i, n, t);
			});
		});
	});
}
function yi(e, t, r, a, o) {
	let s = r.getRootElement(), c = pi(r);
	s !== null && c !== null || W(246);
	let u = new oi(r, e.getKey()), d = fi(e, t);
	(function(e, t) {
		Si(e) !== null && W(205), e[si] = t;
	})(d, u), u.listenersToRemove.add(() => function(e, t) {
		Si(e) === t && delete e[si];
	}(d, u)), u.listenersToRemove.add(Jt(d, "mousedown", (e) => {
		let t = Fe(e);
		e.detail >= 3 && D(t) && Ci(t) !== null && e.preventDefault();
	}, u.listenerOptions));
	for (let [t, n] of hi) u.listenersToRemove.add(r.registerCommand(t, (t) => Bi(r, t, n, e, u, o), 3));
	u.listenersToRemove.add(r.registerCommand(at, (t) => {
		let n = M();
		if (J(n)) {
			let r = mi(e, n.focus.getNode());
			if (r !== null) return Vi(t), r.selectEnd(), !0;
		}
		return !1;
	}, 3));
	let f = (t) => () => {
		let n = M();
		if (!Ni(n, e)) return !1;
		if (J(n)) return u.$clearText(), !0;
		if (A(n)) {
			if (!U(mi(e, n.anchor.getNode()))) return !1;
			let r = n.anchor.getNode(), a = n.focus.getNode(), o = e.isParentOf(r), s = e.isParentOf(a);
			if (o && !s || s && !o) return u.$clearText(), !0;
			let c = i(n.anchor.getNode(), (e) => N(e)), l = c && i(c, (e) => N(e) && U(e.getParent()));
			if (!N(l) || !N(c)) return !1;
			if (t === Le && l.getPreviousSibling() === null) return !0;
		}
		return !1;
	};
	for (let e of gi) u.listenersToRemove.add(r.registerCommand(e, f(e), 3));
	let p = (t) => {
		let n = M();
		if (!J(n) && !A(n)) return !1;
		let r = e.isParentOf(n.anchor.getNode());
		if (r !== e.isParentOf(n.focus.getNode())) {
			let t = r ? "anchor" : "focus", i = r ? "focus" : "anchor", { key: a, offset: o, type: s } = n[i];
			return e[n[t].isBefore(n[i]) ? "selectPrevious" : "selectNext"]()[i].set(a, o, s), !1;
		}
		return !!Ni(n, e) && !!J(n) && (t && (t.preventDefault(), t.stopPropagation()), u.$clearText(), !0);
	};
	for (let e of _i) u.listenersToRemove.add(r.registerCommand(e, p, 3));
	u.listenersToRemove.add(r.registerCommand(se, (e) => {
		let t = M();
		if (t) {
			if (!J(t) && !A(t)) return !1;
			vn(r, ln(e, ClipboardEvent) ? e : null, Dn(t));
			let n = p(e);
			return A(t) ? (t.removeText(), !0) : n;
		}
		return !1;
	}, 3));
	let m = s.ownerDocument;
	return u.listenersToRemove.add(Jt(m, "paste", (t) => {
		t.defaultPrevented || r.read("latest", () => {
			let t = M();
			return s.contains(m.activeElement) && J(t) && Ni(t, e);
		}) && (t.preventDefault(), r.dispatchCommand(De, t));
	})), u.listenersToRemove.add(Jt(m, "copy", (t) => {
		if (t.defaultPrevented) return;
		let n = Fe(t);
		n === s || D(n) && s.contains(n) || r.read("latest", () => {
			let t = M();
			return s.contains(ee(s)) && J(t) && Ni(t, e);
		}) && (t.preventDefault(), r.dispatchCommand(ge, t));
	})), u.listenersToRemove.add(r.registerCommand(zt, (t) => {
		let n = M();
		return Ni(n, e) ? J(n) ? (u.$formatCells(t), !0) : (A(n) && U(i(n.anchor.getNode(), (e) => U(e))), !1) : !1;
	}, 3)), u.listenersToRemove.add(r.registerCommand(Pt, (t) => {
		let n = M();
		if (!J(n) || !Ni(n, e)) return !1;
		let r = n.anchor.getNode(), i = n.focus.getNode();
		if (!U(r) || !U(i)) return !1;
		if (function(e, t) {
			if (J(e)) {
				let n = e.anchor.getNode(), r = e.focus.getNode();
				if (t && n && r) {
					let [e] = K(t, n, r);
					return n.getKey() === e[0][0].cell.getKey() && r.getKey() === e[e.length - 1].at(-1).cell.getKey();
				}
			}
			return !1;
		}(n, e)) return e.setFormat(t), !0;
		let [a, o, s] = K(e, r, i), c = Math.max(o.startRow + o.cell.__rowSpan - 1, s.startRow + s.cell.__rowSpan - 1), l = Math.max(o.startColumn + o.cell.__colSpan - 1, s.startColumn + s.cell.__colSpan - 1), u = Math.min(o.startRow, s.startRow), d = Math.min(o.startColumn, s.startColumn), f = /* @__PURE__ */ new Set();
		for (let e = u; e <= c; e++) for (let n = d; n <= l; n++) {
			let r = a[e][n].cell;
			if (f.has(r)) continue;
			f.add(r), r.setFormat(t);
			let i = r.getChildren();
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				N(n) && !n.isInline() && n.setFormat(t);
			}
		}
		return !0;
	}, 3)), u.listenersToRemove.add(r.registerCommand(we, (t) => {
		let n = M();
		if (!Ni(n, e)) return !1;
		if (J(n)) return u.$clearHighlight(), !1;
		if (A(n)) {
			if (!U(i(n.anchor.getNode(), (e) => U(e)))) return !1;
			if (typeof t == "string") {
				let i = Ui(r, n, e);
				if (i) return Hi(i, e, [l(t)]), !0;
			}
		}
		return !1;
	}, 3)), a && u.listenersToRemove.add(r.registerCommand(Yt, (t) => {
		let n = M();
		if (!A(n) || !n.isCollapsed() || !Ni(n, e)) return !1;
		let r = Li(n.anchor.getNode());
		return !(r === null || !e.is(Ri(r))) && (Vi(t), function(e, t) {
			let n = t === "next" ? "getNextSibling" : "getPreviousSibling", r = t === "next" ? "getFirstChild" : "getLastChild", a = e[n]();
			if (N(a)) return a.selectEnd();
			let o = i(e, G);
			o === null && W(247);
			for (let e = o[n](); G(e); e = e[n]()) {
				let t = e[r]();
				if (N(t)) return t.selectEnd();
			}
			let s = i(o, Y);
			s === null && W(248), t === "next" ? s.selectNext() : s.selectPrevious();
		}(r, t.shiftKey ? "previous" : "next"), !0);
	}, 3)), u.listenersToRemove.add(r.registerCommand(mt, (t) => e.isSelected(), 3)), u.listenersToRemove.add(r.registerCommand(n, () => {
		let t = M();
		if (!A(t) || !t.isCollapsed() || !Ni(t, e)) return !1;
		let n = Ui(r, t, e);
		return !!n && (Hi(n, e), !0);
	}, 3)), u;
}
function bi(e, t) {
	let n = M(), r = je(), a = e.getAndClearNextFocus();
	if (a !== null) {
		let { tableKey: t, focusCell: r } = a, i = e.observers.get(t);
		i || W(335, t);
		let [o] = i;
		if (J(n) && n.tableKey === o.tableNodeKey) return (r.x !== o.focusX || r.y !== o.focusY) && (o.$setFocusCellForSelection(r), !0);
		if (o.anchorCell !== null && o.anchorCellNodeKey !== null && r.elem !== o.anchorCell.elem && o.tableSelection !== null) return o.$setFocusCellForSelection(r, !0), !0;
	}
	let s = e.getAndClearShouldCheckSelectionForTable();
	if (s && A(r) && A(n) && n.isCollapsed()) {
		let e = w(s);
		if (Y(e)) {
			let t = n.anchor.getNode(), r = e.getFirstChild(), a = Li(t);
			if (a !== null && G(r)) {
				let t = r.getFirstChild();
				if (U(t) && e.is(i(a, (n) => n.is(e) || n.is(t)))) return t.selectStart(), !0;
			}
		}
	}
	J(n) && function(e, t) {
		let n = pi(e), r = je();
		if (!t.is(r)) return;
		let i = ci(t.tableKey), a = ae(n), s = a && m(a, e.getRootElement());
		if (a && s && s.anchorNode && s.focusNode) {
			let n = k(s.focusNode), r = n && !i.isParentOf(n), c = k(s.anchorNode), l = c && i.isParentOf(c);
			if (r && l && a.rangeCount > 0) {
				let n = o(a, e);
				n && (n.anchor.set(i.getKey(), t.isBackward() ? i.getChildrenSize() : 0, "element"), a.removeAllRanges(), p(n));
			}
		}
	}(t, n), A(n) && function(e, t) {
		let n = je(), { anchor: r, focus: i } = e, a = r.getNode(), o = i.getNode(), s = Li(a), c = Li(o), l = s ? Ri(s) : null, u = c ? Ri(c) : null, d = e.isBackward(), f = s && c && l && u && l.is(u), m = u && (!l || l.isParentOf(u)), h = l && (!u || u.isParentOf(l));
		if (m) {
			let t = e.clone(), [n] = K(u, c, c), r = n[0][0].cell, i = n[n.length - 1].at(-1).cell;
			t.focus.set(d ? r.getKey() : i.getKey(), d ? 0 : i.getChildrenSize(), "element"), p(t);
		} else if (h) {
			let t = e.clone(), [n] = K(l, s, s), r = n[0][0].cell, i = n[n.length - 1].at(-1).cell;
			t.anchor.set(d ? i.getKey() : r.getKey(), d ? i.getChildrenSize() : 0, "element"), p(t);
		} else if (f) {
			let r = t.observers.get(l.getKey());
			r || W(335, l.getKey());
			let [i] = r;
			if (s.is(c) || (i.$setAnchorCellForSelection(Wi(i, s)), i.$setFocusCellForSelection(Wi(i, c), !0)), i.pointerType === "touch" && i.isSelecting && e.isCollapsed() && A(n) && n.isCollapsed()) {
				let e = Li(n.anchor.getNode());
				e && !e.is(c) && (i.$setAnchorCellForSelection(Wi(i, e)), i.$setFocusCellForSelection(Wi(i, c), !0), i.pointerType = null);
			}
		}
	}(n, e);
	for (let [n, r] of e.$getTableNodesAndObservers()) xi(t, n, r);
	return !1;
}
function xi(e, t, n) {
	let r = M(), i = je();
	r && !r.is(i) && (J(r) || J(i)) && n.tableSelection && !n.tableSelection.is(i) && (J(r) && r.tableKey === n.tableNodeKey ? n.$updateTableTableSelection(r) : !J(r) && J(i) && i.tableKey === n.tableNodeKey && n.$updateTableTableSelection(null)), n.hasHijackedSelectionStyles && !t.isSelected() ? function(e, t) {
		t.$enableHighlightStyle(), Di(t.table, (t) => {
			let n = t.elem;
			t.highlighted = !1, Ii(e, t), n.getAttribute("style") || n.removeAttribute("style");
		});
	}(e, n) : !n.hasHijackedSelectionStyles && t.isSelected() && function(e, t) {
		t.$disableHighlightStyle(), Di(t.table, (t) => {
			t.highlighted = !0, Fi(e, t);
		});
	}(e, n);
}
function Si(e) {
	return e[si] || null;
}
function Ci(e) {
	let t = e;
	for (; t != null;) {
		let e = t.nodeName;
		if (e === "TD" || e === "TH") {
			let e = t._cell;
			return e === void 0 ? null : e;
		}
		t = t.parentNode;
	}
	return null;
}
function wi(e, t) {
	if (!e.contains(t)) return null;
	let n = null;
	for (let r = t; r != null; r = r.parentNode) {
		if (r === e) return n;
		let t = r.nodeName;
		t !== "TD" && t !== "TH" || (n = r._cell || null);
	}
	return null;
}
function Ti(e, t) {
	let n = [], r = {
		columns: 0,
		domRows: n,
		rows: 0
	}, i = fi(e, t).querySelector("tr"), a = 0, o = 0;
	for (n.length = 0; i != null;) {
		let e = i.nodeName;
		if (e === "TD" || e === "TH") {
			let e = {
				elem: i,
				hasBackgroundColor: i.style.backgroundColor !== "",
				highlighted: !1,
				x: a,
				y: o
			};
			i._cell = e;
			let t = n[o];
			t === void 0 && (t = n[o] = []), t[a] = e;
		} else {
			let e = i.firstChild;
			if (e != null) {
				i = e;
				continue;
			}
		}
		let t = i.nextSibling;
		if (t != null) {
			a++, i = t;
			continue;
		}
		let r = i.parentNode;
		if (r != null) {
			let e = r.nextSibling;
			if (e == null) break;
			o++, a = 0, i = e;
		}
	}
	return r.columns = a + 1, r.rows = o + 1, r;
}
function Ei(e, t, n) {
	let r = new Set(n ? n.getNodes() : []);
	Di(t, (t, n) => {
		let i = t.elem;
		r.has(n) ? (t.highlighted = !0, Fi(e, t)) : (t.highlighted = !1, Ii(e, t), i.getAttribute("style") || i.removeAttribute("style"));
	});
}
function Di(e, t) {
	let { domRows: n } = e;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r) for (let n = 0; n < r.length; n++) {
			let i = r[n];
			if (!i) continue;
			let a = k(i.elem);
			a !== null && t(i, a, {
				x: n,
				y: e
			});
		}
	}
}
var Oi = (e, t, n, r, i) => {
	let a = i === "forward";
	switch (i) {
		case "backward":
		case "forward": return n === (a ? e.table.columns - 1 : 0) ? r === (a ? e.table.rows - 1 : 0) ? a ? t.selectNext() : t.selectPrevious() : Pi(t.getCellNodeFromCordsOrThrow(a ? 0 : e.table.columns - 1, r + (a ? 1 : -1), e.table), a) : Pi(t.getCellNodeFromCordsOrThrow(n + (a ? 1 : -1), r, e.table), a), !0;
		case "up": return r === 0 ? t.selectPrevious() : Pi(t.getCellNodeFromCordsOrThrow(n, r - 1, e.table), !1), !0;
		case "down": return r === e.table.rows - 1 ? t.selectNext() : Pi(t.getCellNodeFromCordsOrThrow(n, r + 1, e.table), !0), !0;
		default: return !1;
	}
};
function ki(e, t) {
	let n, r;
	if (t.startColumn === e.minColumn) n = "minColumn";
	else {
		if (t.startColumn + t.cell.__colSpan - 1 !== e.maxColumn) return null;
		n = "maxColumn";
	}
	if (t.startRow === e.minRow) r = "minRow";
	else {
		if (t.startRow + t.cell.__rowSpan - 1 !== e.maxRow) return null;
		r = "maxRow";
	}
	return [n, r];
}
function Ai([e, t]) {
	return [e === "minColumn" ? "maxColumn" : "minColumn", t === "minRow" ? "maxRow" : "minRow"];
}
function ji(e, t, [n, r]) {
	let i = t[r], a = e[i];
	a === void 0 && W(250, r, String(i));
	let o = t[n], s = a[o];
	return s === void 0 && W(250, n, String(o)), s;
}
function Mi(e, t, n, r, i) {
	let a = Xr(t, n, r), { topSpan: o, leftSpan: s, bottomSpan: c, rightSpan: l } = function(e, t) {
		let { minColumn: n, maxColumn: r, minRow: i, maxRow: a } = t, o = 1, s = 1, c = 1, l = 1, u = e[i], d = e[a];
		for (let e = n; e <= r; e++) o = Math.max(o, u[e].cell.__rowSpan), l = Math.max(l, d[e].cell.__rowSpan);
		for (let t = i; t <= a; t++) s = Math.max(s, e[t][n].cell.__colSpan), c = Math.max(c, e[t][r].cell.__colSpan);
		return {
			bottomSpan: l,
			leftSpan: s,
			rightSpan: c,
			topSpan: o
		};
	}(t, a), [u, d] = Ai(function(e, t) {
		let n = ki(e, t);
		return n === null && W(249, t.cell.getKey()), n;
	}(a, n)), f = a[u], p = a[d];
	i === "forward" ? f += u === "maxColumn" ? 1 : s : i === "backward" ? f -= u === "minColumn" ? 1 : l : i === "down" ? p += d === "maxRow" ? 1 : o : i === "up" && (p -= d === "minRow" ? 1 : c);
	let m = t[p];
	if (m === void 0) return !1;
	let h = m[f];
	if (h === void 0) return !1;
	let [g, _] = function(e, t, n) {
		let r = Xr(e, t, n), i = ki(r, t);
		if (i) return [ji(e, r, i), ji(e, r, Ai(i))];
		let a = ki(r, n);
		if (a) return [ji(e, r, Ai(a)), ji(e, r, a)];
		let o = ["minColumn", "minRow"];
		return [ji(e, r, o), ji(e, r, Ai(o))];
	}(t, n, h), v = Wi(e, g.cell), y = Wi(e, _.cell);
	return e.$setAnchorCellForSelection(v), e.$setFocusCellForSelection(y, !0), !0;
}
function Ni(e, t) {
	if (A(e) || J(e)) {
		let n = t.isParentOf(e.anchor.getNode()), r = t.isParentOf(e.focus.getNode());
		return n && r;
	}
	return !1;
}
function Pi(e, t) {
	t ? e.selectStart() : e.selectEnd();
}
function Fi(e, t) {
	let n = t.elem, r = e._config.theme;
	U(k(n)) || W(131), O(n, r.tableCellSelected);
}
function Ii(e, t) {
	let n = t.elem;
	U(k(n)) || W(131);
	let r = e._config.theme;
	de(n, r.tableCellSelected);
}
function Li(e) {
	let t = i(e, U);
	return U(t) ? t : null;
}
function Ri(e) {
	let t = i(e, Y);
	return Y(t) ? t : null;
}
function zi(e, n, r, a, o, s, l) {
	let u = x(r.focus, o ? "previous" : "next");
	if (t(u)) return !1;
	let d = u;
	for (let e of v(u).iterNodeCarets("shadowRoot")) {
		if (!C(e) || !N(e.origin)) return !1;
		d = e;
	}
	let f = d.getParentAtCaret();
	if (!U(f)) return !1;
	let p = f, m = function(e) {
		for (let t of v(e).iterNodeCarets("root")) {
			let { origin: n } = t;
			if (U(n)) {
				if (Re(t)) return Pe(n, e.direction);
			} else if (!G(n)) break;
		}
		return null;
	}(Qe(p, d.direction)), h = i(p, Y);
	if (!h || !h.is(s)) return !1;
	let g = e.getElementByKey(p.getKey()), _ = Ci(g);
	if (!g || !_) return !1;
	if (l.table = Qi(e, h), m) if (a === "extend") {
		let t = Ci(e.getElementByKey(m.origin.getKey()));
		if (!t) return !1;
		l.$setAnchorCellForSelection(_), l.$setFocusCellForSelection(t, !0);
	} else {
		let e = Vt(m);
		c(r.anchor, e), c(r.focus, e);
	}
	else if (a === "extend") l.$setAnchorCellForSelection(_), l.$setFocusCellForSelection(_, !0);
	else {
		let e = function(e) {
			let t = gt(e);
			return Re(t) ? Vt(t) : e;
		}(Qe(h, u.direction));
		c(r.anchor, e), c(r.focus, e);
	}
	return Vi(n), !0;
}
function Bi(e, t, n, r, a, o) {
	if ((n === "up" || n === "down") && function(e) {
		let t = e.getRootElement();
		return t ? t.hasAttribute("aria-controls") && t.getAttribute("aria-controls") === "typeahead-menu" : !1;
	}(e)) return !1;
	let s = M();
	if (!Ni(s, r)) {
		if (A(s)) {
			if (n === "backward") {
				if (s.focus.offset > 0) return !1;
				let e = function(e) {
					for (let t = e, n = e; n !== null; t = n, n = n.getParent()) if (N(n)) {
						if (n !== t && n.getFirstChild() !== t) return null;
						if (!n.isInline()) return n;
					}
					return null;
				}(s.focus.getNode());
				if (!e) return !1;
				let n = e.getPreviousSibling();
				return !!Y(n) && (Vi(t), t.shiftKey ? s.focus.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent(), "element") : n.selectEnd(), !0);
			}
			if (t.shiftKey && (n === "up" || n === "down")) {
				let e = s.focus.getNode();
				if (!s.isCollapsed() && (n === "up" && !s.isBackward() || n === "down" && s.isBackward())) {
					let a = i(e, (e) => Y(e));
					if (U(a) && (a = i(a, Y)), a !== r || !a) return !1;
					let o = n === "down" ? a.getNextSibling() : a.getPreviousSibling();
					if (!o) return !1;
					let c = 0;
					n === "up" && N(o) && (c = o.getChildrenSize());
					let l = o;
					n === "up" && N(o) && (l = o.getLastChild() || o, c = E(l) ? l.getTextContentSize() : 0);
					let u = s.clone();
					return u.focus.set(l.getKey(), c, E(l) ? "text" : "element"), p(u), Vi(t), !0;
				}
				if (ne(e)) {
					let e = n === "up" ? s.getNodes()[s.getNodes().length - 1] : s.getNodes()[0];
					if (e && mi(r, e) !== null) {
						let e = r.getFirstDescendant(), t = r.getLastDescendant();
						if (!e || !t) return !1;
						let [n] = q(e), [i] = q(t), o = r.getCordsFromCellNode(n, a.table), s = r.getCordsFromCellNode(i, a.table), c = r.getDOMCellFromCordsOrThrow(o.x, o.y, a.table), l = r.getDOMCellFromCordsOrThrow(s.x, s.y, a.table);
						return a.$setAnchorCellForSelection(c), a.$setFocusCellForSelection(l, !0), !0;
					}
					return !1;
				}
				{
					let r = i(e, (e) => N(e) && !e.isInline());
					if (U(r) && (r = i(r, Y)), !r) return !1;
					let o = n === "down" ? r.getNextSibling() : r.getPreviousSibling();
					if (Y(o) && a.tableNodeKey === o.getKey()) {
						let e = o.getFirstDescendant(), r = o.getLastDescendant();
						if (!e || !r) return !1;
						let [i] = q(e), [a] = q(r), c = s.clone();
						return c.focus.set((n === "up" ? i : a).getKey(), n === "up" ? 0 : a.getChildrenSize(), "element"), Vi(t), p(c), !0;
					}
				}
			}
		}
		return n === "down" && Yi(e) && o.setShouldCheckSelectionForTable(r.getKey()), !1;
	}
	if (A(s)) {
		if (n === "backward" || n === "forward") return zi(e, t, s, t.shiftKey ? "extend" : "move", n === "backward", r, a);
		if (s.isCollapsed()) {
			let { anchor: c, focus: l } = s, u = i(c.getNode(), U), d = i(l.getNode(), U);
			if (!U(u) || !u.is(d)) return !1;
			let f = Ri(u);
			if (f !== r && f != null) {
				let r = fi(f, e.getElementByKey(f.getKey()));
				if (r != null) return a.table = Ti(f, r), Bi(e, t, n, f, a, o);
			}
			let p = e.getElementByKey(u.__key), m = e.getElementByKey(c.key);
			if (m == null || p == null) return !1;
			let h;
			if (c.type === "element") h = m.getBoundingClientRect();
			else {
				let t = ae(pi(e));
				if (t === null || t.rangeCount === 0) return !1;
				let n = Dt(t, e.getRootElement());
				if (n === null) return !1;
				h = n.getBoundingClientRect();
			}
			let g = n === "up" ? u.getFirstChild() : u.getLastChild();
			if (g == null) return !1;
			let _ = e.getElementByKey(g.__key);
			if (_ == null) return !1;
			let v = _.getBoundingClientRect();
			if (n === "up" ? v.top > h.top - h.height : h.bottom + h.height > v.bottom) {
				Vi(t);
				let e = r.getCordsFromCellNode(u, a.table);
				if (!t.shiftKey) return Oi(a, r, e.x, e.y, n);
				{
					let t = r.getDOMCellFromCordsOrThrow(e.x, e.y, a.table);
					a.$setAnchorCellForSelection(t), a.$setFocusCellForSelection(t, !0);
				}
				return !0;
			}
		}
	} else if (J(s)) {
		let { anchor: o, focus: c, tableKey: l } = s;
		if (l !== r.getKey()) return !1;
		let u = i(o.getNode(), U), d = i(c.getNode(), U), [f] = s.getNodes();
		Y(f) || W(251);
		let p = fi(f, e.getElementByKey(f.getKey()));
		if (!U(u) || !U(d) || !Y(f) || p == null) return !1;
		a.$updateTableTableSelection(s);
		let m = Ti(f, p), h = r.getCordsFromCellNode(u, m), g = r.getDOMCellFromCordsOrThrow(h.x, h.y, m);
		if (a.$setAnchorCellForSelection(g), Vi(t), t.shiftKey) {
			let [e, t, i] = K(r, u, d);
			return Mi(a, e, t, i, n);
		}
		return d.selectEnd(), !0;
	}
	return !1;
}
function Vi(e) {
	e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
}
function Hi(e, t, n) {
	let i = r();
	e === "first" ? t.insertBefore(i) : t.insertAfter(i), i.append(...n || []), i.selectEnd();
}
function Ui(e, t, n) {
	let r = n.getParent();
	if (!r) return;
	let a = ae(pi(e));
	if (!a) return;
	let o = m(a, e.getRootElement()).anchorNode, s = e.getElementByKey(r.getKey()), c = fi(n, e.getElementByKey(n.getKey()));
	if (!o || !s || !c || !s.contains(o) || c.contains(o)) return;
	let l = i(t.anchor.getNode(), (e) => U(e));
	if (!l) return;
	let u = i(l, (e) => Y(e));
	if (!Y(u) || !u.is(n)) return;
	let [d, f] = K(n, l, l), p = d[0][0], h = d[d.length - 1][d[0].length - 1], { startRow: g, startColumn: _ } = f, v = g === p.startRow && _ === p.startColumn, y = g === h.startRow && _ === h.startColumn;
	return v ? "first" : y ? "last" : void 0;
}
function Wi(e, t) {
	let { tableNode: n } = e.$lookup(), r = n.getCordsFromCellNode(t, e.table);
	return n.getDOMCellFromCordsOrThrow(r.x, r.y, e.table);
}
function Gi(e, t, n) {
	return mi(e, k(t, n));
}
function Ki(e, t, n) {
	let r = e.querySelector("colgroup");
	if (!r) return;
	let i = [];
	for (let e = 0; e < t; e++) {
		let t = j().createElement("col"), r = n && n[e];
		r && (t.style.width = `${r}px`), i.push(t);
	}
	r.replaceChildren(...i);
}
function qi(e, t, n) {
	if (!t.theme.tableAlignment) return;
	let r = [], i = [];
	for (let e of ["center", "right"]) {
		let a = t.theme.tableAlignment[e];
		a && (e === n ? i : r).push(a);
	}
	de(e, ...r), O(e, ...i);
}
var Ji = /* @__PURE__ */ new WeakSet();
function Yi(e = kt()) {
	return Ji.has(e);
}
function Xi(e, t) {
	t ? Ji.add(e) : Ji.delete(e);
}
var Zi = class e extends ft {
	__rowStriping;
	__frozenColumnCount;
	__frozenRowCount;
	__colWidths;
	static getType() {
		return "table";
	}
	getColWidths() {
		return this.getLatest().__colWidths;
	}
	setColWidths(e) {
		let t = this.getWritable();
		return t.__colWidths = e, t;
	}
	static clone(t) {
		return new e(t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__colWidths = e.__colWidths, this.__rowStriping = e.__rowStriping, this.__frozenColumnCount = e.__frozenColumnCount, this.__frozenRowCount = e.__frozenRowCount;
	}
	static importDOM() {
		return { table: (e) => ({
			conversion: $i,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return ea().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setRowStriping(e.rowStriping || !1).setFrozenColumns(e.frozenColumnCount || 0).setFrozenRows(e.frozenRowCount || 0).setColWidths(e.colWidths);
	}
	constructor(e) {
		super(e), this.__rowStriping = !1, this.__frozenColumnCount = 0, this.__frozenRowCount = 0, this.__colWidths = void 0;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			colWidths: this.getColWidths(),
			frozenColumnCount: this.__frozenColumnCount ? this.__frozenColumnCount : void 0,
			frozenRowCount: this.__frozenRowCount ? this.__frozenRowCount : void 0,
			rowStriping: this.__rowStriping ? this.__rowStriping : void 0
		};
	}
	extractWithChild(e, t, n) {
		return n === "html";
	}
	getDOMSlot(e) {
		let t = di(e) ? e : e.querySelector("table");
		return di(t) || W(229), super.getDOMSlot(e).withElement(t).withAfter(t.querySelector("colgroup"));
	}
	createDOM(e, t) {
		let n = j().createElement("table");
		this.__style && Ge(n.style, this.__style);
		let r = j().createElement("colgroup");
		if (n.appendChild(r), le(r), O(n, e.theme.table), this.updateTableElement(null, n, e), Yi(t)) {
			let t = j().createElement("div"), r = e.theme.tableScrollableWrapper;
			return r ? O(t, r) : t.style.overflowX = "auto", t.appendChild(n), this.updateTableWrapper(null, t, n, e), t;
		}
		return n;
	}
	updateTableWrapper(e, t, n, r) {
		this.__frozenColumnCount !== (e ? e.__frozenColumnCount : 0) && function(e, t, n, r) {
			r > 0 ? (O(e, n.theme.tableFrozenColumn), t.setAttribute("data-lexical-frozen-column", "true")) : (de(e, n.theme.tableFrozenColumn), t.removeAttribute("data-lexical-frozen-column"));
		}(t, n, r, this.__frozenColumnCount), this.__frozenRowCount !== (e ? e.__frozenRowCount : 0) && function(e, t, n, r) {
			r > 0 ? (O(e, n.theme.tableFrozenRow), t.setAttribute("data-lexical-frozen-row", "true")) : (de(e, n.theme.tableFrozenRow), t.removeAttribute("data-lexical-frozen-row"));
		}(t, n, r, this.__frozenRowCount);
	}
	updateTableElement(e, t, n) {
		this.__style !== (e ? e.__style : "") && Ge(t.style, this.__style, e ? e.__style : ""), this.__rowStriping !== (!!e && e.__rowStriping) && function(e, t, n) {
			n ? (O(e, t.theme.tableRowStriping), e.setAttribute("data-lexical-row-striping", "true")) : (de(e, t.theme.tableRowStriping), e.removeAttribute("data-lexical-row-striping"));
		}(t, n, this.__rowStriping);
		let r = e ? e.getColumnCount() : 0, i = e ? e.__colWidths : void 0;
		this.getColumnCount() === r && this.getColWidths() === i || Ki(t, this.getColumnCount(), this.getColWidths()), qi(t, n, this.getFormatType());
	}
	updateDOM(e, t, n) {
		let r = fi(this, t);
		return t === r === Yi() || (ye(i = t) && i.nodeName === "DIV" && this.updateTableWrapper(e, t, r, n), this.updateTableElement(e, r, n), !1);
		var i;
	}
	scaleDOMColWidths(e, t) {
		let n = this.getColWidths();
		n && Ki(fi(this, e), this.getColumnCount(), n.map((e) => e * t));
	}
	exportDOM(e) {
		let t = super.exportDOM(e), { element: n } = t;
		return {
			after: (n) => {
				if (t.after && (n = t.after(n)), !di(n) && ye(n) && (n = n.querySelector("table")), !di(n)) return null;
				qi(n, e._config, this.getFormatType());
				let [r] = Yr(this, null, null), i = /* @__PURE__ */ new Map();
				for (let e of r) for (let t of e) {
					let e = t.cell.getKey();
					i.has(e) || i.set(e, {
						colSpan: t.cell.getColSpan(),
						startColumn: t.startColumn
					});
				}
				let a = /* @__PURE__ */ new Set();
				for (let e of n.querySelectorAll(":scope > tr > [data-temporary-table-cell-lexical-key]")) {
					let t = e.getAttribute("data-temporary-table-cell-lexical-key");
					if (t) {
						let n = i.get(t);
						if (e.removeAttribute("data-temporary-table-cell-lexical-key"), n) {
							i.delete(t);
							for (let e = 0; e < n.colSpan; e++) a.add(e + n.startColumn);
						}
					}
				}
				let o = n.querySelector(":scope > colgroup");
				if (o) {
					let e = Array.from(n.querySelectorAll(":scope > colgroup > col")).filter((e, t) => a.has(t));
					o.replaceChildren(...e);
				}
				let s = n.querySelectorAll(":scope > tr");
				if (s.length > 0) {
					let e = j().createElement("tbody");
					for (let t of s) e.appendChild(t);
					n.append(e);
				}
				return n;
			},
			element: !di(n) && ye(n) ? n.querySelector("table") : n
		};
	}
	canBeEmpty() {
		return !1;
	}
	isShadowRoot() {
		return !0;
	}
	getCordsFromCellNode(e, t) {
		let { rows: n, domRows: r } = t;
		for (let t = 0; t < n; t++) {
			let n = r[t];
			if (n != null) for (let r = 0; r < n.length; r++) {
				let i = n[r];
				if (i == null) continue;
				let { elem: a } = i, o = Gi(this, a);
				if (o !== null && e.is(o)) return {
					x: r,
					y: t
				};
			}
		}
		throw Error("Cell not found in table.");
	}
	getDOMCellFromCords(e, t, n) {
		let { domRows: r } = n, i = r[t];
		return i == null ? null : i[e < i.length ? e : i.length - 1] ?? null;
	}
	getDOMCellFromCordsOrThrow(e, t, n) {
		let r = this.getDOMCellFromCords(e, t, n);
		if (!r) throw Error("Cell not found at cords.");
		return r;
	}
	getCellNodeFromCords(e, t, n) {
		let r = this.getDOMCellFromCords(e, t, n);
		if (r == null) return null;
		let i = k(r.elem);
		return U(i) ? i : null;
	}
	getCellNodeFromCordsOrThrow(e, t, n) {
		let r = this.getCellNodeFromCords(e, t, n);
		if (!r) throw Error("Node at cords not TableCellNode.");
		return r;
	}
	getRowStriping() {
		return !!this.getLatest().__rowStriping;
	}
	setRowStriping(e) {
		let t = this.getWritable();
		return t.__rowStriping = e, t;
	}
	setFrozenColumns(e) {
		let t = this.getWritable();
		return t.__frozenColumnCount = e, t;
	}
	getFrozenColumns() {
		return this.getLatest().__frozenColumnCount;
	}
	setFrozenRows(e) {
		let t = this.getWritable();
		return t.__frozenRowCount = e, t;
	}
	getFrozenRows() {
		return this.getLatest().__frozenRowCount;
	}
	canSelectBefore() {
		return !0;
	}
	canIndent() {
		return !1;
	}
	getColumnCount() {
		let e = this.getFirstChild();
		if (!G(e)) return 0;
		let t = 0;
		return e.getChildren().forEach((e) => {
			U(e) && (t += e.getColSpan());
		}), t;
	}
};
function Qi(e, t) {
	let n = e.getElementByKey(t.getKey());
	return n === null && W(230), Ti(t, n);
}
function $i(e) {
	let t = ea();
	e.hasAttribute("data-lexical-row-striping") && t.setRowStriping(!0), e.hasAttribute("data-lexical-frozen-column") && t.setFrozenColumns(1), e.hasAttribute("data-lexical-frozen-row") && t.setFrozenRows(1);
	let n = e.querySelector(":scope > colgroup");
	if (n) {
		let e = [];
		for (let t of n.querySelectorAll(":scope > col")) {
			let n = t.style.width || "";
			if (!Sr.test(n) && (n = t.getAttribute("width") || "", !/^\d+$/.test(n))) {
				e = void 0;
				break;
			}
			e.push(parseFloat(n));
		}
		e && t.setColWidths(e);
	}
	return {
		after: (e) => nn(e, G),
		node: t
	};
}
function ea() {
	return _t(new Zi());
}
function Y(e) {
	return e instanceof Zi;
}
function ta(e) {
	G(e.getParent()) ? e.isEmpty() && e.append(r()) : e.remove();
}
function na(e) {
	Y(e.getParent()) ? en(e, U) : e.remove();
}
function ra(e) {
	en(e, G);
	let [t] = Yr(e, null, null), n = t.reduce((e, t) => Math.max(e, t.length), 0), i = e.getChildren();
	for (let e = 0; e < t.length; ++e) {
		let a = i[e];
		if (!a) continue;
		G(a) || W(254, a.constructor.name, a.getType());
		let o = t[e].reduce((e, t) => t ? 1 + e : e, 0);
		if (o !== n) for (let e = o; e < n; ++e) {
			let e = H();
			e.append(r()), a.append(e);
		}
	}
	let a = e.getColWidths(), o = e.getColumnCount();
	if (a && a.length !== o) {
		let t;
		if (o < a.length) t = a.slice(0, o);
		else if (a.length > 0) {
			let e = a[a.length - 1];
			t = [...a, ...Array(o - a.length).fill(e)];
		}
		e.setColWidths(t);
	}
}
function ia(e) {
	if (e.detail < 3 || !D(e.target)) return !1;
	let t = k(e.target);
	if (t === null) return !1;
	let n = i(t, (e) => N(e) && !e.isInline());
	return n !== null && !!U(n.getParent()) && (n.select(0), !0);
}
function aa() {
	let e = M();
	if (!A(e)) return !1;
	let t = Ri(e.anchor.getNode());
	if (t === null) return !1;
	let n = d();
	if (!n.is(t.getParent()) || n.getChildrenSize() !== 1) return !1;
	let [r] = Yr(t, null, null);
	if (r.length === 0 || r[0].length === 0) return !1;
	let i = r[0][0];
	if (!i || !i.cell) return !1;
	let a = r[r.length - 1], o = a[a.length - 1];
	return !o || !o.cell ? !1 : (p(ni(t, i.cell, o.cell)), !0);
}
function oa(e) {
	return e.registerNodeTransform(Cr, (e) => {
		if (e.getColSpan() > 1 || e.getRowSpan() > 1) {
			let [, , t] = q(e), [n] = K(t, e, e), r = n.length, i = n[0].length, a = t.getFirstChild();
			G(a) || W(175);
			let o = [];
			for (let e = 0; e < r; e++) {
				e !== 0 && (a = a.getNextSibling(), G(a) || W(175));
				let t = null;
				for (let r = 0; r < i; r++) {
					let i = n[e][r], s = i.cell;
					if (i.startRow === e && i.startColumn === r) t = s, o.push(s);
					else if (s.getColSpan() > 1 || s.getRowSpan() > 1) {
						U(s) || W(176);
						let e = H(s.__headerState);
						t === null ? tn(a, e) : t.insertAfter(e);
					}
				}
			}
			for (let e of o) e.setColSpan(1), e.setRowSpan(1);
		}
	});
}
function sa(e, t = !0) {
	let n = new ai(), r = (r, i, a) => {
		let o = fi(r, a), s = yi(r, o, e, t, n);
		n.observers.set(i, [s, o]);
	};
	return Me(vi(e, n), e.registerCommand(g, () => bi(n, e), 3), e.registerMutationListener(Zi, (t) => {
		e.read("latest", () => {
			for (let [e, i] of t) {
				let t = n.observers.get(e);
				if (i === "created" || i === "updated") {
					let { tableNode: i, tableElement: a } = ii(e);
					t === void 0 ? r(i, e, a) : a !== t[1] && (n.removeObserver(e), r(i, e, a));
				} else i === "destroyed" && n.removeObserver(e);
			}
		});
	}, { skipInitialization: !1 }), () => {
		n.removeAllObservers();
	});
}
function ca(e, t) {
	e.hasNodes([Zi]) || W(255);
	let { hasNestedTables: n = dn(!1) } = t ?? {};
	return Me(e.registerCommand(Er, (e) => function({ rows: e, columns: t, includeHeaders: n }, r) {
		let i = M() || je();
		if (!i || !A(i) || !r && Ri(i.anchor.getNode())) return !1;
		let a = Ar(Number(e), Number(t), n);
		sn(a);
		let o = a.getFirstDescendant();
		return E(o) && o.select(), !0;
	}(e, n.peek()), 0), e.registerCommand(fe, (t, r) => e === r && function(e, t) {
		let { nodes: n, selection: r } = e;
		if (!n.some((e) => Y(e) || rn(e).some((e) => Y(e.node)))) {
			if (J(r)) {
				let e = "", t = !1;
				for (let r of n) {
					let n = N(r) && !r.isInline();
					e.length > 0 && (n || t) && (e += "\n"), e += r.getTextContent(), t = n;
				}
				return r.insertRawText(e), !0;
			}
			return !1;
		}
		let a = J(r), o = A(r);
		return o && i(r.anchor.getNode(), (e) => U(e)) !== null && i(r.focus.getNode(), (e) => U(e)) !== null || a ? n.length === 1 && Y(n[0]) ? Qr(n[0], r) : !(o && t.peek() && !function(e) {
			return !!(J(e) && !e.focus.getNode().is(e.anchor.getNode()) || A(e) && U(e.anchor.getNode()) && !e.anchor.getNode().is(e.focus.getNode()));
		}(r)) : !1;
	}(t, n), 0), e.registerCommand(wt, aa, 1), e.registerCommand(re, ia, 0), e.registerNodeTransform(Zi, ra), e.registerNodeTransform(Dr, na), e.registerNodeTransform(Cr, ta));
}
An.tag("table"), An.tag("tr"), An.tag("td", "th");
//#endregion
//#region src/context/MediaFileActionsContext.tsx
var la = Pn({});
function ua({ children: e, revealFile: t }) {
	let n = zn(() => ({ revealFile: t }), [t]);
	return /* @__PURE__ */ R(la.Provider, {
		value: n,
		children: e
	});
}
function da() {
	return Ln(la);
}
//#endregion
//#region src/context/BibleVerseActionsContext.tsx
var fa = Pn({});
function pa({ children: e, shortToVerseData: t, verseFullTextToListShorts: n, changeBibleKey: r }) {
	let i = zn(() => ({
		shortToVerseData: t,
		verseFullTextToListShorts: n,
		changeBibleKey: r
	}), [
		t,
		n,
		r
	]);
	return /* @__PURE__ */ R(fa.Provider, {
		value: i,
		children: e
	});
}
function ma() {
	return Ln(fa);
}
//#endregion
//#region node_modules/@lexical/link/dist/LexicalLink.prod.mjs
var ha = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]), ga = class e extends ft {
	__url;
	__target;
	__rel;
	__title;
	static getType() {
		return "link";
	}
	static clone(t) {
		return new e(t.__url, {
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	constructor(e = "", t = {}, n) {
		super(n);
		let { target: r = null, rel: i = null, title: a = null } = t;
		this.__url = e, this.__target = r, this.__rel = i, this.__title = a;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__url = e.__url, this.__rel = e.__rel, this.__target = e.__target, this.__title = e.__title;
	}
	createDOM(e) {
		let t = j().createElement("a");
		return this.updateLinkDOM(null, t, e), O(t, e.theme.link), t;
	}
	updateLinkDOM(e, t, n) {
		if (Ft(t)) {
			e && e.__url === this.__url || (t.href = this.sanitizeUrl(this.__url));
			for (let n of [
				"target",
				"rel",
				"title"
			]) {
				let r = `__${n}`, i = this[r];
				e && e[r] === i || (i ? t[n] = i : t.removeAttribute(n));
			}
		}
	}
	updateDOM(e, t, n) {
		return this.updateLinkDOM(e, t, n), !1;
	}
	static importDOM() {
		return { a: (e) => ({
			conversion: ba,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return xa().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
	}
	sanitizeUrl(e) {
		let t = e;
		e = Oa(e);
		try {
			let t = new URL(Oa(e));
			if (!ha.has(t.protocol)) return "about:blank";
		} catch {
			let e = t.replace(/[\u0000-\u001F\u007F\s]/g, "").match(/^([a-z][a-z0-9+.-]*):/i);
			if (e != null && !ha.has(`${e[1].toLowerCase()}:`)) return "about:blank";
		}
		return e;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			rel: this.getRel(),
			target: this.getTarget(),
			title: this.getTitle(),
			url: this.getURL()
		};
	}
	getURL() {
		return this.getLatest().__url;
	}
	setURL(e) {
		let t = this.getWritable();
		return t.__url = e, t;
	}
	getTarget() {
		return this.getLatest().__target;
	}
	setTarget(e) {
		let t = this.getWritable();
		return t.__target = e, t;
	}
	getRel() {
		return this.getLatest().__rel;
	}
	setRel(e) {
		let t = this.getWritable();
		return t.__rel = e, t;
	}
	getTitle() {
		return this.getLatest().__title;
	}
	setTitle(e) {
		let t = this.getWritable();
		return t.__title = e, t;
	}
	insertNewAfter(e, t = !0) {
		let n = it(this);
		return this.insertAfter(n, t), n;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	canBeEmpty() {
		return !1;
	}
	isInline() {
		return !0;
	}
	extractWithChild(e, t, n) {
		if (!A(t)) return !1;
		let r = t.anchor.getNode(), i = t.focus.getNode();
		return (this.is(r) || this.isParentOf(r)) && (this.is(i) || this.isParentOf(i)) && t.getTextContent().length > 0;
	}
	isEmailURI() {
		return this.__url.startsWith("mailto:");
	}
	isWebSiteURI() {
		return this.__url.startsWith("https://") || this.__url.startsWith("http://");
	}
	shouldMergeAdjacentLink(e) {
		return this.getType() === e.getType() && this.__url === e.__url && this.__target === e.__target && this.__rel === e.__rel && this.__title === e.__title;
	}
};
function _a(e) {
	let t = x(e, "next");
	return [t, t.getFlipped()];
}
function va(e, t) {
	for (let n of t) if (n.origin.isAttached()) {
		c(e, Vt(n));
		return;
	}
}
function ya(e) {
	let t = M(), n = null, r = null;
	function i() {
		A(t) && (va(t.anchor, n), va(t.focus, r), he(t));
	}
	A(t) && (n = _a(t.anchor), r = _a(t.focus));
	let a = !1;
	for (let t of Pe(e, "next")) {
		let n = t.origin;
		if (N(n) && !n.isInline()) {
			let r = n.getChildren();
			if (r.length > 0) {
				let t = it(e);
				t.append(...r), n.append(t), a = !0;
			}
			Ke(n, qe(t), { $shouldSplit: () => !1 });
		}
	}
	function o(e, t, n) {
		let [r, i] = e, a = (e) => C(e) && e.origin.is(t);
		if (!a(r) && !a(i)) return e;
		let o = Vt(Pe(n, "next"));
		return [o, o.getFlipped()];
	}
	if (e.isAttached()) {
		let t = e.getPreviousSibling();
		if (X(t) && t.shouldMergeAdjacentLink(e)) return n &&= o(n, t, e), r &&= o(r, t, e), t.append(...e.getChildren()), e.remove(), void i();
		let s = e.getNextSibling();
		X(s) && e.shouldMergeAdjacentLink(s) && (n &&= o(n, e, s), r &&= o(r, e, s), e.append(...s.getChildren()), s.remove(), a = !0);
	}
	if (a) {
		if (!e.canBeEmpty() && e.isEmpty()) {
			let t = e.getParent();
			e.remove(), t && t.isEmpty() && t.remove();
		}
		i();
	}
}
function ba(e) {
	let t = null;
	if (Ft(e)) {
		let n = e.textContent;
		(n !== null && n !== "" || e.children.length > 0) && (t = xa(e.getAttribute("href") || "", {
			rel: e.getAttribute("rel"),
			target: e.getAttribute("target"),
			title: e.getAttribute("title")
		}));
	}
	return { node: t };
}
function xa(e = "", t) {
	return _t(new ga(e, t));
}
function X(e) {
	return e instanceof ga;
}
var Sa = class e extends ga {
	__isUnlinked;
	constructor(e = "", t = {}, n) {
		super(e, t, n), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__isUnlinked = e.__isUnlinked;
	}
	static getType() {
		return "autolink";
	}
	static clone(t) {
		return new e(t.__url, {
			isUnlinked: t.__isUnlinked,
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	shouldMergeAdjacentLink(e) {
		return !1;
	}
	getIsUnlinked() {
		return this.__isUnlinked;
	}
	setIsUnlinked(e) {
		let t = this.getWritable();
		return t.__isUnlinked = e, t;
	}
	createDOM(e) {
		return this.__isUnlinked ? j().createElement("span") : super.createDOM(e);
	}
	updateDOM(e, t, n) {
		return super.updateDOM(e, t, n) || e.__isUnlinked !== this.__isUnlinked;
	}
	static importJSON(e) {
		return Ca().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setIsUnlinked(e.isUnlinked || !1);
	}
	static importDOM() {
		return null;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			isUnlinked: this.__isUnlinked
		};
	}
	insertNewAfter(e, t = !0) {
		let n = Ca(this.__url, {
			isUnlinked: this.__isUnlinked,
			rel: this.__rel,
			target: this.__target,
			title: this.__title
		});
		return this.insertAfter(n, t), n;
	}
};
function Ca(e = "", t) {
	return _t(new Sa(e, t));
}
function Z(e) {
	return e instanceof Sa;
}
var wa = /* @__PURE__ */ Ut("TOGGLE_LINK_COMMAND");
function Ta(e, t) {
	if (e.type === "element") {
		let n = e.getNode();
		return N(n) || function(e, ...t) {
			let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
			r.append("code", e);
			for (let e of t) r.append("v", e);
			throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
		}(252), n.getChildren()[e.offset + t] || null;
	}
	return null;
}
function Ea(e, t = {}) {
	let n;
	if (e && typeof e == "object") {
		let { url: r, ...i } = e;
		n = r, t = {
			...i,
			...t
		};
	} else n = e;
	let { target: r, title: a } = t, o = t.rel === void 0 ? "noreferrer" : t.rel, s = M();
	if (s === null || !A(s) && !_(s)) return;
	if (_(s)) {
		let e = s.getNodes();
		if (e.length === 0) return;
		e.forEach((e) => {
			if (n === null) {
				let t = i(e, (e) => !Z(e) && X(e));
				t && (t.insertBefore(e), t.getChildren().length === 0 && t.remove());
			} else {
				let t = i(e, (e) => !Z(e) && X(e));
				if (t) t.setURL(n), r !== void 0 && t.setTarget(r), o !== void 0 && t.setRel(o);
				else {
					let t = xa(n, {
						rel: o,
						target: r
					});
					e.insertBefore(t), t.append(e);
				}
			}
		});
		return;
	}
	if (s.isCollapsed() && n === null) for (let e of s.getNodes()) {
		let t = i(e, (e) => !Z(e) && X(e));
		t !== null && (t.getParentOrThrow().splice(t.getIndexWithinParent(), 0, t.getChildren()), t.remove());
		return;
	}
	let c = s.extract();
	if (n === null) {
		let e = /* @__PURE__ */ new Set();
		c.forEach((t) => {
			let n = i(t, (e) => !Z(e) && X(e));
			if (n !== null) {
				let t = n.getKey();
				if (e.has(t)) return;
				(function(e, t) {
					let n = new Set(t.filter((t) => e.isParentOf(t)).map((e) => e.getKey())), r = e.getChildren(), i = (r) => n.has(r.getKey()) || N(r) && t.some((t) => e.isParentOf(t) && r.isParentOf(t)), a = r.filter(i);
					if (a.length === r.length) return r.forEach((t) => e.insertBefore(t)), void e.remove();
					let o = r.findIndex(i), s = r.findLastIndex(i), c = o === 0, l = s === r.length - 1;
					if (c) a.forEach((t) => e.insertBefore(t));
					else if (l) for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
					else {
						for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
						let t = r.slice(s + 1);
						if (t.length > 0) {
							let n = it(e);
							a[a.length - 1].insertAfter(n), t.forEach((e) => n.append(e));
						}
					}
				})(n, c), e.add(t);
			}
		});
		return;
	}
	let l = /* @__PURE__ */ new Set(), u = (e) => {
		l.has(e.getKey()) || (l.add(e.getKey()), e.setURL(n), r !== void 0 && e.setTarget(r), o !== void 0 && e.setRel(o), a !== void 0 && e.setTitle(a));
	};
	if (c.length === 1) {
		let e = c[0], t = i(e, X);
		if (t !== null) return u(t);
	}
	(function(e) {
		let t = M();
		if (!A(t)) return e();
		let n = he(t), r = n.isBackward(), i = Ta(n.anchor, r ? -1 : 0), a = Ta(n.focus, r ? 0 : -1);
		if (e(), i || a) {
			let e = M();
			if (A(e)) {
				let t = e.clone();
				if (i) {
					let e = i.getParent();
					e && t.anchor.set(e.getKey(), i.getIndexWithinParent() + +!!r, "element");
				}
				if (a) {
					let e = a.getParent();
					e && t.focus.set(e.getKey(), a.getIndexWithinParent() + +!r, "element");
				}
				p(he(t));
			}
		}
	})(() => {
		let e = null;
		for (let t of c) {
			if (!t.isAttached()) continue;
			let s = i(t, X);
			if (s) {
				u(s);
				continue;
			}
			if (N(t)) {
				if (!t.isInline()) continue;
				if (X(t)) {
					if (!(Z(t) || e !== null && e.getParentOrThrow().isParentOf(t))) {
						u(t), e = t;
						continue;
					}
					for (let e of t.getChildren()) t.insertBefore(e);
					t.remove();
					continue;
				}
			}
			let c = t.getPreviousSibling();
			X(c) && c.is(e) ? c.append(t) : (e = xa(n, {
				rel: o,
				target: r,
				title: a
			}), t.insertAfter(e), e.append(t));
		}
	});
}
var Da = /^\+?[0-9\s()-]{5,}$/;
function Oa(e) {
	return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : Da.test(e) ? `tel:${e}` : `https://${e}`;
}
An.tag("a");
function ka(e, t) {
	return Me(e.registerNodeTransform(ga, ya), e.registerCommand(wa, (e) => {
		let n = t.validateUrl.peek(), r = t.attributes.peek();
		if (e === null) return Ea(null), !0;
		if (typeof e == "string") return !(n !== void 0 && !n(e)) && (Ea(e, r), !0);
		{
			let { url: t, target: n, rel: i, title: a } = e;
			return Ea(t, {
				...r,
				rel: i,
				target: n,
				title: a
			}), !0;
		}
	}, 0), fn(() => {
		let n = t.validateUrl.value;
		if (!n) return;
		let r = t.attributes.value;
		return e.registerCommand(De, (t) => {
			let i = M();
			if (!A(i) || i.isCollapsed() || !ln(t, ClipboardEvent) || t.clipboardData === null) return !1;
			let a = t.clipboardData.getData("text");
			return n(a) ? !i.getNodes().some((e) => N(e) || E(e) && !e.isSimpleText()) && (e.dispatchCommand(wa, {
				...r,
				url: a
			}), t.preventDefault(), !0) : !1;
		}, 1);
	}));
}
function Aa(e, t, n = {}) {
	let r = (n) => {
		let r = n.target;
		if (!D(r)) return;
		let a = Ve(r);
		if (a === null) return;
		let o = null, s = null, c = !1;
		if (a.update(() => {
			let e = k(r);
			if (e !== null) {
				let n = i(e, N);
				if (!t.disabled.peek()) if (X(n)) c = Z(n) && n.getIsUnlinked(), o = n.sanitizeUrl(n.getURL()), s = n.getTarget();
				else {
					let e = function(e, t) {
						let n = e;
						for (; n != null;) {
							if (t(n)) return n;
							n = n.parentNode;
						}
						return null;
					}(r, Ft);
					e !== null && (o = e.href, s = e.target);
				}
			}
		}), o === null || o === "" || c) return;
		let l = e.read("latest", M);
		if (A(l) && !l.isCollapsed()) return void n.preventDefault();
		let u = n.type === "auxclick" && n.button === 1;
		window.open(o, t.newTab.peek() || u || n.metaKey || n.ctrlKey || s === "_blank" ? "_blank" : "_self"), n.preventDefault();
	}, a = (e) => {
		e.button === 1 && r(e);
	};
	return e.registerRootListener((e) => {
		if (e) return Lt(e, {
			click: r,
			mouseup: a
		}, n);
	});
}
function ja(e, t = (e) => e) {
	return (n) => {
		let r = e.exec(n);
		return r === null ? null : {
			index: r.index,
			length: r[0].length,
			text: r[0],
			url: t(r[0])
		};
	};
}
function Ma(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n](e);
		if (r) return r;
	}
	return null;
}
var Na = /[.,;\s]/;
function Pa(e, t) {
	return t.test(e);
}
function Fa(e, t) {
	return Pa(e[e.length - 1], t);
}
function Ia(e, t) {
	return Pa(e[0], t);
}
function La(e, t) {
	let n = e.getPreviousSibling();
	return N(n) && (n = n.getLastDescendant()), n === null || ze(n) || E(n) && Fa(n.getTextContent(), t);
}
function Ra(e, t) {
	let n = e.getNextSibling();
	return N(n) && (n = n.getFirstDescendant()), n === null || ze(n) || E(n) && Ia(n.getTextContent(), t);
}
function za(e, t, n, r, i) {
	return (e > 0 ? Pa(r[e - 1], n) : La(i[0], n)) ? t < r.length ? Pa(r[t], n) : Ra(i[i.length - 1], n) : !1;
}
function Ba(e, t, n) {
	let r = [], i = [], a = [], o = 0, s = 0, c = [...e];
	for (; c.length > 0;) {
		let e = c[0], l = e.getTextContent().length, u = s;
		s + l <= t ? (r.push(e), o += l) : u >= n ? a.push(e) : i.push(e), s += l, c.shift();
	}
	return [
		o,
		r,
		i,
		a
	];
}
function Va(e, t, n, r) {
	let i = Ca(r.url, r.attributes);
	if (e.length === 1) {
		let a, o = e[0];
		t === 0 ? [a, o] = o.splitText(n) : [, a, o] = o.splitText(t, n);
		let s = l(r.text);
		return s.setFormat(a.getFormat()), s.setDetail(a.getDetail()), s.setStyle(a.getStyle()), i.append(s), a.replace(i), o;
	}
	if (e.length > 1) {
		let r = e[0], a, o = r.getTextContent().length;
		t === 0 ? a = r : [, a] = r.splitText(t);
		let s = [], c;
		for (let t = 1; t < e.length; t++) {
			let r = e[t], i = r.getTextContent().length, a = o;
			if (a < n) if (o + i <= n) s.push(r);
			else {
				let [e, t] = r.splitText(n - a);
				s.push(e), c = t;
			}
			o += i;
		}
		let u = M(), d = u ? u.getNodes().find(E) : void 0, f = l(a.getTextContent());
		return f.setFormat(a.getFormat()), f.setDetail(a.getDetail()), f.setStyle(a.getStyle()), i.append(f, ...s), d && d === a && (A(u) ? f.select(u.anchor.offset, u.focus.offset) : _(u) && f.select(0, f.getTextContent().length)), a.replace(i), c;
	}
}
function Ha(e, t, n, r) {
	let i = e.getChildren(), a = i.length;
	for (let t = 0; t < a; t++) {
		let r = i[t];
		if (!E(r) || !r.isSimpleText()) return Ua(e), void n(null, e.getURL());
	}
	let o = e.getTextContent(), s = Ma(o, t);
	if (s === null || s.text !== o || !La(e, r) || !Ra(e, r)) return Ua(e), void n(null, e.getURL());
	let c = e.getURL();
	if (c !== s.url && (e.setURL(s.url), n(s.url, c)), s.attributes) {
		let t = e.getRel();
		t !== s.attributes.rel && (e.setRel(s.attributes.rel || null), n(s.attributes.rel || null, t));
		let r = e.getTarget();
		r !== s.attributes.target && (e.setTarget(s.attributes.target || null), n(s.attributes.target || null, r));
	}
}
function Ua(e) {
	let t = e.getChildren();
	for (let n = t.length - 1; n >= 0; n--) e.insertAfter(t[n]);
	return e.remove(), t.map((e) => e.getLatest());
}
var Wa = {
	changeHandlers: [],
	excludeParents: [],
	matchers: [],
	separatorRegex: Na
};
function Ga(e, t = Wa) {
	let { matchers: n, changeHandlers: r, excludeParents: i, separatorRegex: a = Na } = t, o = (e, t) => {
		for (let n of r) n(e, t);
	};
	return Me(e.registerNodeTransform(Oe, (e) => {
		let t = e.getParentOrThrow(), r = e.getPreviousSibling();
		Z(t) ? Ha(t, n, o, a) : !X(t) && !i.some((e) => e(t)) && (e.isSimpleText() && (Ia(e.getTextContent(), a) || !Z(r)) && (function(e, t, n, r) {
			for (let t of e) {
				let e = t.getParent();
				if (Z(e) && !e.getIsUnlinked()) return;
			}
			let i = [...e], a = i.map((e) => e.getTextContent()).join(""), o, s = a, c = 0;
			for (; (o = Ma(s, t)) && o !== null;) {
				let e = o.index, t = e + o.length;
				if (za(c + e, c + t, r, a, i)) {
					let [r, , a, l] = Ba(i, c + e, c + t), u = !1;
					for (let e of a) {
						let t = e.getParent();
						if (Z(t) && !t.getIsUnlinked()) {
							u = !0;
							break;
						}
					}
					if (u) {
						c += t, s = s.substring(t);
						continue;
					}
					let d = Va(a, c + e - r, c + t - r, o);
					i = d ? [d, ...l] : l, n(o.url, null), c = 0;
				} else c += t;
				s = s.substring(t);
			}
		})(function(e) {
			let t = [e], n = e.getNextSibling();
			for (; n !== null && E(n) && n.isSimpleText() && (t.push(n), !/[\s]/.test(n.getTextContent()));) n = n.getNextSibling();
			return t;
		}(e), n, o, a), (function(e, t, n, r) {
			let i = e.getParent(), a = e.getPreviousSibling(), o = e.getNextSibling(), s = e.getTextContent();
			if (!Z(i) || i.getIsUnlinked()) {
				if (Z(a) && !a.getIsUnlinked() && a.is(e.getPreviousSibling()) && e.getParent() === a.getParent()) {
					if (!Ia(s, r)) return Ua(a), void n(null, a.getURL());
					if (c = s, a.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(c) : /^\.[a-zA-Z0-9]{1,}/.test(c)) {
						let i = a.getTextContent() + s, o = Ma(i, t);
						o !== null && o.text === i && (a.append(e), Ha(a, t, n, r), n(null, a.getURL()));
					}
				}
				var c;
				!Z(o) || o.getIsUnlinked() || Fa(s, r) || o.is(e.getNextSibling()) && e.getParent() === o.getParent() && (Ua(o), n(null, o.getURL()));
			}
		})(e, n, o, a));
	}), e.registerCommand(wa, (e) => {
		let t = M();
		return e !== null || !A(t) || t.extract().forEach((e) => {
			let t = e.getParent();
			Z(t) && (t.setIsUnlinked(!t.getIsUnlinked()), t.markDirty());
		}), !1;
	}, 1));
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalRichTextPlugin.prod.mjs
function Ka(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var qa = He ? Rn : F;
function Ja({ editor: e, ErrorBoundary: t }) {
	return function(e, t) {
		let [n, r] = L(() => e.getDecorators());
		return qa(() => e.registerDecoratorListener((e) => {
			Wn(() => {
				r(e);
			});
		}), [e]), F(() => {
			r(e.getDecorators());
		}, [e]), zn(() => {
			let r = [], i = Object.keys(n);
			for (let a = 0; a < i.length; a++) {
				let o = i[a], s = /*#__PURE__*/ R(t, {
					onError: (t) => e._onError(t),
					children: /*#__PURE__*/ R(Nn, {
						fallback: null,
						children: n[o]
					})
				}), c = e.getElementByKey(o);
				c !== null && r.push(/*#__PURE__*/ Un(s, c, o));
			}
			return r;
		}, [
			t,
			n,
			e
		]);
	}(e, t);
}
function Ya({ editor: e, ErrorBoundary: t }) {
	return function(e) {
		let t = mn.maybeFromEditor(e);
		if (t && t.hasExtensionByName(hn.name)) {
			for (let e of ["@lexical/plain-text", "@lexical/rich-text"]) t.hasExtensionByName(e) && Ka(320, e);
			return !0;
		}
		return !1;
	}(e) ? null : /*#__PURE__*/ R(Ja, {
		editor: e,
		ErrorBoundary: t
	});
}
function Xa(e) {
	return e.read("latest", pn(e.isComposing()));
}
function Za({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = vt();
	return function(e) {
		qa(() => Me(xr(e), En(e)), [e]);
	}(r), /*#__PURE__*/ z(Bn, { children: [
		e,
		/*#__PURE__*/ R(Qa, { content: t }),
		/*#__PURE__*/ R(Ya, {
			editor: r,
			ErrorBoundary: n
		})
	] });
}
function Qa({ content: e }) {
	let [t] = vt(), n = function(e) {
		let [t, n] = L(() => Xa(e));
		return qa(() => {
			function t() {
				let t = Xa(e);
				n(t);
			}
			return t(), Me(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), r = jn();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region src/nodes/EmojiNode.tsx
var $a = class e extends Oe {
	__className;
	static getType() {
		return "emoji";
	}
	static clone(t) {
		return new e(t.__className, t.__text, t.__key);
	}
	constructor(e, t, n) {
		super(t, n), this.__className = e;
	}
	createDOM(e) {
		let t = document.createElement("span"), n = super.createDOM(e);
		return t.className = this.__className, n.className = "emoji-inner", t.appendChild(n), t;
	}
	updateDOM(e, t, n) {
		let r = t.firstChild;
		return r === null ? !0 : (super.updateDOM(e, r, n), !1);
	}
	static importJSON(e) {
		return eo(e.className, e.text).updateFromJSON(e);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			className: this.getClassName()
		};
	}
	getClassName() {
		return this.getLatest().__className;
	}
};
function eo(e, t) {
	return _t(new $a(e, t).setMode("token"));
}
//#endregion
//#region src/nodes/KeywordNode.ts
var to = class e extends Oe {
	static getType() {
		return "keyword";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	static importJSON(e) {
		return no().updateFromJSON(e);
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return t.style.cursor = "default", t.className = "keyword", t;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	isTextEntity() {
		return !0;
	}
};
function no(e = "") {
	return _t(new to(e));
}
//#endregion
//#region src/nodes/MentionNode.ts
function ro(e) {
	return e === "mention" || e === "location" || e === "bible-verse" ? e : e === "hashtag" ? "location" : void 0;
}
function io(e, t, n) {
	let r = ro(n);
	return r === void 0 ? e.startsWith("#") || t.startsWith("#") ? "location" : e.startsWith("^") || t.startsWith("^") ? "bible-verse" : "mention" : r;
}
function ao(e, t) {
	return t === "location" && e.startsWith("#") || t === "bible-verse" && e.startsWith("^") ? e.slice(1) : e;
}
function oo(e, t, n) {
	return n === "location" && e.startsWith("#") ? t : n === "bible-verse" && e.startsWith("^") ? e.slice(1) : e;
}
function so(e, t, n, r, i, a) {
	e.setAttribute("data-lexical-mention", "true"), e.setAttribute("data-lexical-mention-kind", n), r === null ? e.removeAttribute("data-lexical-mention-id") : e.setAttribute("data-lexical-mention-id", r), i === null ? e.removeAttribute("data-lexical-mention-data") : e.setAttribute("data-lexical-mention-data", i), a ? e.setAttribute("data-lexical-mention-name", t) : e.removeAttribute("data-lexical-mention-name");
}
function co(e) {
	let t = e.textContent, n = e.getAttribute("data-lexical-mention-data"), r = e.getAttribute("data-lexical-mention-id"), i = e.getAttribute("data-lexical-mention-name"), a = e.getAttribute("data-lexical-mention-kind");
	if (t !== null) {
		let e = io(typeof i == "string" ? i : t, t, a === "mention" || a === "location" || a === "bible-verse" || a === "hashtag" ? a : void 0), o = ao(typeof i == "string" ? i : t, e);
		return { node: uo(o, oo(t, o, e), r, e, n) };
	}
	return null;
}
var lo = class e extends Oe {
	__mention;
	__mentionData;
	__mentionId;
	__mentionKind;
	static getType() {
		return "mention";
	}
	static clone(t) {
		return new e(t.__mention, t.__text, t.__mentionId, t.__mentionKind, t.__mentionData, t.__key);
	}
	static importJSON(e) {
		let t = io(e.mentionName, e.text, e.mentionKind), n = ao(e.mentionName, t), r = oo(e.text, n, t);
		return uo(n, r, e.mentionId ?? null, t, e.mentionData ?? null).updateFromJSON({
			...e,
			mentionKind: t,
			mentionName: n,
			text: r
		});
	}
	updateFromJSON(e) {
		let t = io(e.mentionName, e.text, e.mentionKind), n = ao(e.mentionName, t), r = oo(e.text, n, t), i = super.updateFromJSON({
			...e,
			text: r
		});
		return i.__mention = n, i.__mentionData = e.mentionData ?? null, i.__mentionId = e.mentionId ?? null, i.__mentionKind = t, i;
	}
	constructor(e, t, n, r, i, a) {
		let o = io(e, t ?? e, r), s = ao(e, o), c = oo(t ?? e, s, o);
		super(c, a), this.__mention = s, this.__mentionData = i ?? null, this.__mentionId = n ?? null, this.__mentionKind = o;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			mentionData: this.__mentionData,
			mentionId: this.__mentionId,
			mentionKind: this.__mentionKind,
			mentionName: this.__mention
		};
	}
	getMentionKind() {
		return this.getLatest().__mentionKind;
	}
	setMentionKind(e) {
		let t = this.getWritable();
		return t.__mentionKind = e, t;
	}
	getMention() {
		return this.getLatest().__mention;
	}
	setMention(e) {
		let t = this.getWritable();
		return t.__mention = e, t;
	}
	getMentionData() {
		return this.getLatest().__mentionData;
	}
	setMentionData(e) {
		let t = this.getWritable();
		return t.__mentionData = e, t;
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return t.className = "mention", t.spellcheck = !1, so(t, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, !0), t;
	}
	updateDOM(e, t, n) {
		let r = super.updateDOM(e, t, n), i = this.__mentionKind;
		return (e.__mention !== this.__mention || e.__mentionData !== this.__mentionData || e.__mentionId !== this.__mentionId || e.__mentionKind !== this.__mentionKind || e.__text !== this.__text || t.getAttribute("data-lexical-mention-kind") !== i || t.getAttribute("data-lexical-mention-data") !== this.__mentionData) && so(t, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, !0), r;
	}
	exportDOM() {
		let e = document.createElement("span");
		return so(e, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, this.__text !== this.__mention), e.textContent = this.__text, { element: e };
	}
	static importDOM() {
		return { span: (e) => e.hasAttribute("data-lexical-mention") ? {
			conversion: co,
			priority: 1
		} : null };
	}
	isTextEntity() {
		return !0;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function uo(e, t, n, r, i) {
	let a = new lo(e, t, n, r, i);
	return a.setMode("segmented").toggleDirectionless(), _t(a);
}
//#endregion
//#region src/nodes/MediaNode.tsx
var fo = Mn.lazy(() => import("./MediaComponent-DFPl8PHV.mjs"));
function po(e) {
	return e.parentElement != null && e.parentElement.tagName === "LI" && e.previousSibling === null && e.getAttribute("aria-roledescription") === "checkbox";
}
function mo(e) {
	let t = e, n = t.getAttribute("src");
	if (!n || n.startsWith("file:///") || po(t)) return null;
	let { alt: r, width: i, height: a } = t;
	return { node: xo({
		altText: r,
		height: a,
		src: n,
		width: i
	}) };
}
function ho(e) {
	let t = e, n = t.getAttribute("src") || t.currentSrc;
	return n ? { node: xo({
		altText: t.getAttribute("title") || "",
		height: t.height,
		mediaType: "video",
		src: n,
		width: t.width
	}) } : null;
}
function go(e) {
	let t = e, n = t.getAttribute("src") || t.currentSrc;
	return n ? { node: xo({
		altText: t.getAttribute("title") || "",
		height: Number(t.getAttribute("height")) || void 0,
		mediaType: "audio",
		src: n,
		width: Number(t.getAttribute("width")) || void 0
	}) } : null;
}
function _o(e) {
	let t = e.getAttribute("src") || e.getAttribute("data") || "", n = e.getAttribute("type") || "";
	return (e.getAttribute("data-lexical-media-type") || "") === "pdf" || n === "application/pdf" || t.toLowerCase().split(/[?#]/)[0].endsWith(".pdf");
}
function vo(e) {
	let t = e, n = t.getAttribute("src") || t.getAttribute("data");
	return !n || !_o(t) ? null : { node: xo({
		altText: t.getAttribute("title") || "",
		height: Number(t.getAttribute("height")) || void 0,
		mediaType: "pdf",
		src: n,
		width: Number(t.getAttribute("width")) || void 0
	}) };
}
function yo() {
	for (let { origin: e } of v(Pe(d(), "next"))) if (!N(e)) return !1;
	return !0;
}
var bo = class e extends T {
	__src;
	__altText;
	__width;
	__height;
	__maxWidth;
	__mediaType;
	__previewSrc;
	__showCaption;
	__caption;
	__captionsEnabled;
	static getType() {
		return "image";
	}
	static clone(t) {
		return new e(t.__src, t.__altText, t.__maxWidth, t.__width, t.__height, t.__showCaption, t.__caption, t.__captionsEnabled, t.__key, t.__mediaType, t.__previewSrc);
	}
	static importJSON(e) {
		let { altText: t, height: n, mediaType: r, width: i, maxWidth: a, src: o, showCaption: s } = e;
		return xo({
			altText: t,
			height: n,
			maxWidth: a,
			mediaType: r,
			showCaption: s,
			src: o,
			width: i
		}).updateFromJSON(e);
	}
	updateFromJSON(e) {
		let t = super.updateFromJSON(e), { caption: n } = e, r = t.__caption, i = r.parseEditorState(n.editorState);
		return i.isEmpty() || r.setEditorState(i), t;
	}
	exportDOM() {
		let e = this.createMediaDOMElement();
		if (this.__showCaption && this.__caption) {
			let t = this.__caption, n = t.read(() => {
				if (yo()) return null;
				let e = null, n = d().getFirstChild();
				return st(n) && n.getNextSibling() === null && (e = nt(), e.anchor.set(n.getKey(), 0, "element"), e.focus.set(n.getKey(), n.getChildrenSize(), "element")), kn(t, e);
			});
			if (n) {
				let t = document.createElement("figure"), r = document.createElement("figcaption");
				return r.innerHTML = n, t.appendChild(e), t.appendChild(r), { element: t };
			}
		}
		return { element: e };
	}
	createMediaDOMElement() {
		if (this.__mediaType === "video") {
			let e = document.createElement("video");
			return e.setAttribute("src", this.__src), e.setAttribute("title", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), e.setAttribute("controls", "true"), e.setAttribute("data-lexical-media-type", "video"), e;
		}
		if (this.__mediaType === "pdf") {
			let e = document.createElement("iframe");
			return e.setAttribute("src", this.__src), e.setAttribute("title", this.__altText || "PDF"), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), e.setAttribute("data-lexical-media-type", "pdf"), e;
		}
		if (this.__mediaType === "audio") {
			let e = document.createElement("audio");
			return e.setAttribute("src", this.__src), e.setAttribute("title", this.__altText), e.setAttribute("controls", "true"), e.setAttribute("data-lexical-media-type", "audio"), this.__width !== "inherit" && e.setAttribute("width", this.__width.toString()), this.__height !== "inherit" && e.setAttribute("height", this.__height.toString()), e;
		}
		let e = document.createElement("img");
		return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), e;
	}
	static importDOM() {
		return {
			audio: () => ({
				conversion: go,
				priority: 0
			}),
			embed: () => ({
				conversion: vo,
				priority: 0
			}),
			figcaption: () => ({
				conversion: () => ({ node: null }),
				priority: 0
			}),
			figure: () => ({
				conversion: (e) => ({
					after: (t) => {
						let n = t.filter(So), r = e.querySelector("figcaption");
						if (r) for (let e of n) e.setShowCaption(!0), e.__caption.update(() => {
							let e = kt();
							Cn(e, Sn(e, r), Ie()), p(null);
						}, { tag: et });
						return n;
					},
					node: null
				}),
				priority: 0
			}),
			img: () => ({
				conversion: mo,
				priority: 0
			}),
			iframe: (e) => _o(e) ? {
				conversion: vo,
				priority: 0
			} : null,
			object: () => ({
				conversion: vo,
				priority: 0
			}),
			video: () => ({
				conversion: ho,
				priority: 0
			})
		};
	}
	constructor(e, t, n, r, i, a, o, s, c, l = "image", u) {
		super(c), this.__src = e, this.__altText = t, this.__maxWidth = n, this.__width = r || "inherit", this.__height = i || "inherit", this.__mediaType = l, this.__previewSrc = u, this.__showCaption = a || !1, this.__caption = o || pt({
			namespace: "Playground/MediaNodeCaption",
			nodes: [
				Ct,
				Oe,
				S,
				h,
				ga,
				$a,
				to,
				lo
			]
		}), this.__captionsEnabled = s || s === void 0;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			altText: this.getAltText(),
			caption: this.__caption.toJSON(),
			height: this.__height === "inherit" ? 0 : this.__height,
			maxWidth: this.__maxWidth,
			mediaType: this.__mediaType,
			showCaption: this.__showCaption,
			src: this.getSrc(),
			width: this.__width === "inherit" ? 0 : this.__width
		};
	}
	setWidthAndHeight(e, t) {
		let n = this.getWritable();
		n.__width = e, n.__height = t;
	}
	setShowCaption(e) {
		let t = this.getWritable();
		t.__showCaption = e;
	}
	createDOM(e) {
		let t = document.createElement("span"), n = e.theme.image;
		return n !== void 0 && (t.className = n), t;
	}
	updateDOM() {
		return !1;
	}
	getSrc() {
		return this.__src;
	}
	getAltText() {
		return this.__altText;
	}
	getMediaType() {
		return this.__mediaType;
	}
	decorate() {
		return /* @__PURE__ */ R(fo, {
			src: this.__src,
			altText: this.__altText,
			mediaType: this.__mediaType,
			previewSrc: this.__previewSrc,
			width: this.__width,
			height: this.__height,
			maxWidth: this.__maxWidth,
			nodeKey: this.getKey(),
			showCaption: this.__showCaption,
			caption: this.__caption,
			captionsEnabled: this.__captionsEnabled,
			resizable: !0
		});
	}
};
function xo({ altText: e, height: t, maxWidth: n = 500, captionsEnabled: r, mediaType: i, previewSrc: a, src: o, width: s, showCaption: c, caption: l, key: u }) {
	return _t(new bo(o, e, n, s, t, c, l, r, u, i, a));
}
function So(e) {
	return e instanceof bo;
}
//#endregion
//#region src/utils/url.ts
var Co = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]);
function wo(e) {
	try {
		let t = new URL(e);
		if (!Co.has(t.protocol)) return "about:blank";
	} catch {
		return e;
	}
	return e;
}
var To = /* @__PURE__ */ new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/);
function Eo(e) {
	return e === "https://" || To.test(e);
}
//#endregion
//#region node_modules/@lexical/mark/dist/LexicalMark.prod.mjs
var Do = [], Oo = class e extends ft {
	__ids;
	static getType() {
		return "mark";
	}
	static clone(t) {
		return new e(t.__ids, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__ids = e.__ids;
	}
	static importDOM() {
		return null;
	}
	static importJSON(e) {
		return ko().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setIDs(e.ids);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			ids: this.getIDs()
		};
	}
	constructor(e = Do, t) {
		super(t), this.__ids = e;
	}
	createDOM(e) {
		let t = j().createElement("mark");
		return O(t, e.theme.mark), this.__ids.length > 1 && O(t, e.theme.markOverlap), t;
	}
	updateDOM(e, t, n) {
		let r = e.__ids, i = this.__ids, a = r.length, o = i.length, s = n.theme.markOverlap;
		return a !== o && (a === 1 ? o === 2 && O(t, s) : o === 1 && de(t, s)), !1;
	}
	hasID(e) {
		return this.getIDs().includes(e);
	}
	getIDs() {
		return Array.from(this.getLatest().__ids);
	}
	setIDs(e) {
		let t = this.getWritable();
		return t.__ids = e, t;
	}
	addID(e) {
		let t = this.getWritable();
		return t.__ids.includes(e) ? t : t.setIDs([...t.__ids, e]);
	}
	deleteID(e) {
		let t = this.getWritable(), n = t.__ids.indexOf(e);
		if (n === -1) return t;
		let r = Array.from(t.__ids);
		return r.splice(n, 1), t.setIDs(r);
	}
	insertNewAfter(e, t = !0) {
		let n = ko(this.__ids);
		return this.insertAfter(n, t), n;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	canBeEmpty() {
		return !1;
	}
	isInline() {
		return !0;
	}
	extractWithChild(e, t, n) {
		if (!A(t) || n === "html") return !1;
		let r = t.anchor, i = t.focus, a = r.getNode(), o = i.getNode(), s = t.isBackward() ? r.offset - i.offset : i.offset - r.offset;
		return this.isParentOf(a) && this.isParentOf(o) && this.getTextContent().length === s;
	}
	excludeFromCopy(e) {
		return e !== "clone";
	}
};
function ko(e = Do) {
	return _t(new Oo(e));
}
function Ao(e) {
	return e instanceof Oo;
}
function jo(e) {
	let t = e.getChildren(), n = null;
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		n === null ? e.insertBefore(i) : n.insertAfter(i), n = i;
	}
	e.remove();
}
function Mo(t, n, r, i) {
	let a = nt(), [o, s] = t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus], c, l;
	a.anchor.set(o.key, o.offset, o.type), a.focus.set(s.key, s.offset, s.type);
	let u = a.extract();
	for (let t of u) {
		if (N(l) && l.isParentOf(t)) continue;
		let n = null;
		if (E(t)) n = t;
		else {
			if (Ao(t)) continue;
			(N(t) || e(t)) && t.isInline() && (n = t);
		}
		if (n !== null) {
			if (n && n.is(c)) continue;
			let e = n.getParent();
			e != null && e.is(c) || (l = void 0), c = e, l === void 0 && (l = (i || ko)([r]), n.insertBefore(l)), l.append(n);
		} else c = void 0, l = void 0;
	}
	N(l) && (n ? l.selectStart() : l.selectEnd());
}
function No(e, t) {
	let n = e;
	for (; n !== null;) {
		if (Ao(n)) return n.getIDs();
		if (E(n) && t === n.getTextContentSize()) {
			let e = n.getNextSibling();
			if (Ao(e)) return e.getIDs();
		}
		n = n.getParent();
	}
	return null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalTypeaheadMenuPlugin.prod.mjs
var Po = He ? Rn : F, Fo = class {
	key;
	ref;
	icon;
	title;
	constructor(e) {
		this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
	}
	setRefElement(e) {
		this.ref = { current: e };
	}
}, Io = (e) => {
	let t = e.closest("#typeahead-menu");
	if (!t) return;
	let n = t.getBoundingClientRect();
	n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function Lo(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return n.top >= r.top - 6 && n.top <= r.bottom + 6;
}
function Ro(e, t, n, r) {
	let [i] = vt();
	F(() => {
		if (t != null && e != null) {
			let e = i.getRootElement(), a = e == null ? document.body : Zt(e, !1), o = !1, s = Lo(t, a), c = function() {
				o ||= (window.requestAnimationFrame(function() {
					n(), o = !1;
				}), !0);
				let e = Lo(t, a);
				e !== s && (s = e, r?.(e));
			}, l = new ResizeObserver(n), u = Rt(e ?? t);
			return l.observe(t), Me(Jt(window, "resize", n), Jt(document, "scroll", c, {
				capture: !0,
				passive: !0
			}), ...u.map((e) => Jt(e, "scroll", c, {
				capture: !0,
				passive: !0
			})), () => l.unobserve(t));
		}
	}, [
		t,
		i,
		r,
		n,
		e
	]);
}
var zo = /* @__PURE__ */ Ut("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function Bo({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item";
	return t && (a += " selected"), /*#__PURE__*/ z("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: [i.icon, /*#__PURE__*/ R("span", {
			className: "text",
			children: i.title
		})]
	}, i.key);
}
function Vo({ close: e, editor: t, anchorElementRef: n, resolution: r, options: i, menuRenderFn: a, onSelectOption: o, shouldSplitNodeWithQuery: c = !1, commandPriority: l = 1, preselectFirstItem: u = !0 }) {
	let [d, f] = L(null), p = d === null ? null : Math.min(i.length - 1, d);
	F(() => {
		u && f(0);
	}, [r.match && r.match.matchingString, u]);
	let m = P((n) => {
		t.update(() => {
			o(n, r.match != null && c ? function(e) {
				let t = M();
				if (!A(t) || !t.isCollapsed()) return null;
				let n = t.anchor;
				if (n.type !== "text") return null;
				let r = n.getNode();
				if (!r.isSimpleText()) return null;
				let i = n.offset, a = r.getTextContent().slice(0, i), o = e.replaceableString.length, s = i - function(e, t, n) {
					let r = n;
					for (let n = r; n <= t.length; n++) e.slice(-n) === t.substring(0, n) && (r = n);
					return r;
				}(a, e.matchingString, o);
				if (s < 0) return null;
				let c;
				return s === 0 ? [c] = r.splitText(i) : [, c] = r.splitText(s, i), c;
			}(r.match) : null, e, r.match ? r.match.matchingString : "");
		});
	}, [
		t,
		c,
		r.match,
		o,
		e
	]), h = P((e) => {
		let n = t.getRootElement();
		n !== null && (n.setAttribute("aria-activedescendant", "typeahead-item-" + e), f(e));
	}, [t]), g = P(() => n.current && i.length ? /*#__PURE__*/ Hn.createPortal(/*#__PURE__*/ R("div", {
		className: "typeahead-popover mentions-menu",
		children: /*#__PURE__*/ R("ul", { children: i.map((e, t) => /*#__PURE__*/ R(Bo, {
			index: t,
			isSelected: p === t,
			onClick: () => {
				f(t), m(e);
			},
			onMouseEnter: () => {
				f(t);
			},
			option: e
		}, e.key)) })
	}), n.current) : null, [
		n,
		i,
		p,
		m,
		f
	]);
	F(() => () => {
		let e = t.getRootElement();
		e !== null && e.removeAttribute("aria-activedescendant");
	}, [t]), Po(() => {
		i === null ? f(null) : p === null && u && h(0);
	}, [
		i,
		p,
		h,
		u
	]), F(() => Me(t.registerCommand(zo, ({ option: e }) => !(!e.ref || e.ref.current == null) && (Io(e.ref.current), !0), l)), [
		t,
		h,
		l
	]), F(() => Me(t.registerCommand(pe, (e) => {
		let n = e;
		if (i !== null && i.length) {
			let e = p === null || p === i.length - 1 ? 0 : p + 1;
			h(e);
			let r = i[e];
			if (!r) return h(-1), n.preventDefault(), n.stopImmediatePropagation(), !0;
			r.ref && r.ref.current && t.dispatchCommand(zo, {
				index: e,
				option: r
			}), n.preventDefault(), n.stopImmediatePropagation();
		}
		return !0;
	}, l), t.registerCommand(s, (e) => {
		let t = e;
		if (i !== null && i.length) {
			let e = p === null || p === 0 ? i.length - 1 : p - 1;
			h(e);
			let n = i[e];
			if (!n) return h(-1), t.preventDefault(), t.stopImmediatePropagation(), !0;
			n.ref && n.ref.current && Io(n.ref.current), t.preventDefault(), t.stopImmediatePropagation();
		}
		return !0;
	}, l), t.registerCommand(at, (t) => {
		let n = t;
		return n.preventDefault(), n.stopImmediatePropagation(), e(), !0;
	}, l), t.registerCommand(Yt, (e) => {
		let t = e;
		return i !== null && p !== null && i[p] != null && (t.preventDefault(), t.stopImmediatePropagation(), m(i[p]), !0);
	}, l), t.registerCommand(qt, (e) => !(i === null || p === null || i[p] == null || e && e.shiftKey) && (e !== null && (e.preventDefault(), e.stopImmediatePropagation()), m(i[p]), !0), l)), [
		m,
		e,
		t,
		i,
		p,
		h,
		l
	]);
	let _ = zn(() => ({
		options: i,
		selectOptionAndCleanUp: m,
		selectedIndex: p,
		setHighlightedIndex: f
	}), [
		m,
		p,
		i
	]);
	return a == null ? g() : a(n, _, r.match ? r.match.matchingString : "");
}
function Ho(e, t) {
	t != null && (e.className = t), e.setAttribute("aria-label", "Typeahead menu"), e.setAttribute("role", "listbox"), e.style.display = "block", e.style.position = "absolute";
}
function Uo(e, t, n, r, i = !0) {
	let [a] = vt(), o = r ?? function(e) {
		if (!He) return;
		let t = e.getRootElement();
		if (t !== null) {
			let e = t.getRootNode();
			return y(e) ? e : t.ownerDocument.body;
		}
		return document.body;
	}(a), s = He ? f(a.getRootElement()).createElement("div") : null, c = I(s), l = P(() => {
		if (c.current === null || o === void 0) return;
		c.current.style.top = c.current.style.bottom;
		let t = a.getRootElement(), r = c.current, s = r.firstChild;
		if (t !== null && e !== null) {
			let { left: a, top: l, width: u, height: d } = e.getRect(), f = c.current.offsetHeight;
			if (r.style.top = `${l + f + 3 + (i ? window.pageYOffset : 0)}px`, r.style.left = `${a + window.pageXOffset}px`, r.style.height = `${d}px`, r.style.width = `${u}px`, s !== null) {
				s.style.top = `${l}`;
				let e = s.getBoundingClientRect(), n = e.height, o = e.width, c = t.getBoundingClientRect();
				a + o > c.right && (r.style.left = `${c.right - o + window.pageXOffset}px`), (l + n > window.innerHeight || l + n > c.bottom) && l - c.top > n + d && (r.style.top = `${l - n - d + (i ? window.pageYOffset : 0)}px`);
			}
			r.isConnected || (Ho(r, n), o.append(r)), r.setAttribute("id", "typeahead-menu"), t.setAttribute("aria-controls", "typeahead-menu");
		}
	}, [
		a,
		e,
		i,
		n,
		o
	]);
	F(() => {
		let t = a.getRootElement();
		return e !== null && l(), () => {
			t !== null && t.removeAttribute("aria-controls");
			let e = c.current;
			e !== null && e.isConnected && (e.remove(), e.removeAttribute("id"));
		};
	}, [
		a,
		l,
		e
	]);
	let u = P((n) => {
		e !== null && (n || t(null));
	}, [e, t]);
	return Ro(e, c.current, l, u), s != null && s === c.current && (Ho(s, n), o?.append(s)), c;
}
var Wo = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
function Go(e, { minLength: t = 1, maxLength: n = 75, punctuation: r = Wo, allowWhitespace: i = !1 }) {
	return P((a) => {
		let o = RegExp("(^|\\s|\\()([" + e + "]((?:" + ("[^" + e + r + (i ? "" : "\\s") + "]") + "){0," + n + "}))$").exec(a);
		if (o !== null) {
			let e = o[1], n = o[3];
			if (n.length >= t) return {
				leadOffset: o.index + e.length,
				matchingString: n,
				replaceableString: o[2]
			};
		}
		return null;
	}, [
		i,
		e,
		r,
		n,
		t
	]);
}
function Ko({ options: e, onQueryChange: t, onSelectOption: n, onOpen: r, onClose: i, menuRenderFn: a, triggerFn: o, anchorClassName: s, commandPriority: c = 1, parent: l, preselectFirstItem: u = !0, ignoreEntityBoundary: d = !1 }) {
	let [f] = vt(), [p, h] = L(null), g = Uo(p, h, s, l), _ = P(() => {
		if (p === null) return;
		let e = () => {
			h(null);
		}, t;
		try {
			t = i && i();
		} finally {
			t ? t.then(e, e) : e();
		}
	}, [i, p]), v = P((e) => {
		h(e), r != null && p === null && r(e);
	}, [r, p]);
	return F(() => {
		let e = f.registerUpdateListener(() => {
			f.read("latest", () => {
				if (!f.isEditable()) return void _();
				if (f.isComposing()) return;
				let e = f._window || window, n = e.document.createRange(), r = M(), i = function(e) {
					let t = null;
					return e.read("latest", () => {
						let e = M();
						A(e) && (t = function(e) {
							let t = e.anchor;
							if (t.type !== "text") return null;
							let n = t.getNode();
							if (!n.isSimpleText()) return null;
							let r = t.offset;
							return n.getTextContent().slice(0, r);
						}(e));
					}), t;
				}(f);
				if (!A(r) || !r.isCollapsed() || i === null || n === null) return void _();
				let a = o(i, f);
				if (t(a ? a.matchingString : null), a !== null && (d || !function(e, t) {
					return t === 0 && e.read("latest", () => {
						let e = M();
						if (A(e)) {
							let t = e.anchor.getNode().getPreviousSibling();
							return E(t) && t.isTextEntity();
						}
						return !1;
					});
				}(f, a.leadOffset)) && function(e, t, n, r) {
					let i = ae(n);
					if (i === null || !i.isCollapsed) return !1;
					let a = m(i, r), o = a.anchorNode, s = e, c = a.anchorOffset;
					if (o == null || c == null) return !1;
					try {
						t.setStart(o, s), t.setEnd(o, c);
					} catch {
						return !1;
					}
					return !0;
				}(a.leadOffset, n, e, f.getRootElement()) !== null) return void In(() => v({
					getRect: () => n.getBoundingClientRect(),
					match: a
				}));
				_();
			});
		});
		return () => {
			e();
		};
	}, [
		f,
		o,
		t,
		p,
		_,
		v,
		d
	]), F(() => f.registerEditableListener((e) => {
		e || _();
	}), [f, _]), p === null || f === null || g.current === null ? null : /*#__PURE__*/ R(Vo, {
		close: _,
		resolution: p,
		editor: f,
		anchorElementRef: g,
		options: e,
		menuRenderFn: a,
		shouldSplitNodeWithQuery: !0,
		onSelectOption: n,
		commandPriority: c,
		preselectFirstItem: u
	});
}
//#endregion
//#region src/mediaFileStorage.ts
var qo = "lexical-playground-media-files", Jo = "media-files", Yo = 1;
function Xo() {
	return typeof window > "u" || !window.indexedDB ? null : window.indexedDB;
}
function Zo() {
	let e = Xo();
	return e === null ? Promise.resolve(null) : new Promise((t) => {
		let n = e.open(qo, Yo);
		n.onupgradeneeded = () => {
			let e = n.result;
			e.objectStoreNames.contains(Jo) || e.createObjectStore(Jo, { keyPath: "src" });
		}, n.onsuccess = () => {
			t(n.result);
		}, n.onerror = () => {
			t(null);
		};
	});
}
function Qo(e) {
	e.close();
}
async function $o(e, t) {
	if (e.trim() === "") return;
	let n = await Zo();
	n !== null && await new Promise((r) => {
		let i = n.transaction(Jo, "readwrite"), a = i.objectStore(Jo), o = {
			file: t,
			name: t.name,
			src: e,
			type: t.type,
			updatedAt: Date.now()
		};
		i.oncomplete = () => {
			Qo(n), r();
		}, i.onerror = () => {
			Qo(n), r();
		}, i.onabort = () => {
			Qo(n), r();
		}, a.put(o);
	});
}
async function es(e) {
	if (e.trim() === "" || typeof URL.createObjectURL != "function") return;
	let t = await Zo();
	if (t === null) return;
	let n = await new Promise((n) => {
		let r = t.transaction(Jo, "readonly"), i = r.objectStore(Jo).get(e);
		i.onsuccess = () => {
			let e = i.result;
			n(e?.file);
		}, i.onerror = () => {
			n(void 0);
		}, r.oncomplete = () => {
			Qo(t);
		}, r.onerror = () => {
			Qo(t);
		}, r.onabort = () => {
			Qo(t);
		};
	});
	return n ? URL.createObjectURL(n) : void 0;
}
//#endregion
//#region src/utils/filePathResolver.ts
var ts = /^[a-z][a-z\d+.-]*:/i, ns = /^(?:blob|data|https?):/i;
function rs(e) {
	return typeof e == "string" ? e.trim() === "" ? null : e : null;
}
function is(e) {
	return e.path || e.webkitRelativePath || e.name;
}
async function as(e, t, n) {
	if (e === void 0) return null;
	try {
		return rs(await e(t, { source: n }));
	} catch {
		return null;
	}
}
function os(e) {
	let t = e.trim();
	return t === "" || ns.test(t) ? !1 : t.startsWith("file://") || /^[a-z]:[\\/]/i.test(t) || t.startsWith("\\\\") || /^\.{1,2}[\\/]/.test(t) || t.startsWith("/") || !ts.test(t) && /[\\/]/.test(t);
}
//#endregion
//#region src/plugins/EmojisPlugin/index.ts
var ss = /* @__PURE__ */ new Map([
	[":)", ["emoji happysmile", "🙂"]],
	[":D", ["emoji veryhappysmile", "😀"]],
	[":(", ["emoji unhappysmile", "🙁"]],
	["<3", ["emoji heart", "❤"]]
]);
function cs(e) {
	let t = e.getTextContent();
	for (let n = 0; n < t.length; n++) {
		let r = ss.get(t[n]) || ss.get(t.slice(n, n + 2));
		if (r !== void 0) {
			let [t, i] = r, a;
			n === 0 ? [a] = e.splitText(n + 2) : [, a] = e.splitText(n, n + 2);
			let o = eo(t, i);
			return a.replace(o), o;
		}
	}
	return null;
}
function ls(e) {
	let t = e;
	for (; t !== null;) {
		if (!t.isSimpleText()) return;
		t = cs(t);
	}
}
function us(e) {
	F(() => {
		if (!e.hasNodes([$a])) throw Error("EmojisPlugin: EmojiNode not registered on editor");
		return e.registerNodeTransform(Oe, ls);
	}, [e]);
}
function ds() {
	let [e] = vt();
	return us(e), null;
}
//#endregion
//#region node_modules/@lexical/react/dist/useLexicalTextEntity.prod.mjs
function fs(e, t, n) {
	let [r] = vt();
	F(() => Me(...gn(r, e, t, n)), [
		n,
		r,
		e,
		t
	]);
}
//#endregion
//#region src/plugins/KeywordsPlugin/index.ts
var ps = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function ms() {
	let [e] = vt();
	F(() => {
		if (!e.hasNodes([to])) throw Error("KeywordsPlugin: KeywordNode not registered on editor");
	}, [e]);
	let t = P((e) => no(e.getTextContent()), []);
	return fs(P((e) => {
		let t = ps.exec(e);
		if (t === null) return null;
		let n = t[2].length, r = t.index + t[1].length;
		return {
			end: r + n,
			start: r
		};
	}, []), to, t), null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalLinkPlugin.prod.mjs
function hs({ validateUrl: e, attributes: t }) {
	let [n] = vt();
	return F(() => {
		if (!n.hasNodes([ga])) throw Error("LinkPlugin: LinkNode not registered on editor");
	}), F(() => ka(n, _n({
		attributes: t,
		validateUrl: e
	})), [
		n,
		e,
		t
	]), null;
}
//#endregion
//#region src/plugins/LinkPlugin/index.tsx
function gs({ hasLinkAttributes: e = !1 }) {
	return /* @__PURE__ */ R(hs, {
		validateUrl: Eo,
		attributes: e ? {
			rel: "noopener noreferrer",
			target: "_blank"
		} : void 0
	});
}
//#endregion
//#region src/plugins/MentionLocationsPlugin/openLocationAdvancedPanelEvent.ts
var _s = "bible-note:open-mention-location-advanced-panel";
function vs(e) {
	window.dispatchEvent(new CustomEvent(_s, { detail: e }));
}
//#endregion
//#region src/plugins/MentionNamePlugin/nameTypeIcons.ts
var ys = {
	concept: "bi-lightbulb-fill",
	deity: "bi-brightness-high-fill",
	group: "bi-people-fill",
	life: "bi-heart-fill",
	month: "bi-calendar-event-fill",
	person: "bi-person-fill",
	place: "bi-geo-alt-fill",
	supernatural: "bi-stars",
	unknown: "bi-question-circle-fill"
};
function bs(e) {
	let t = (e ?? "").trim().toLowerCase();
	return Object.prototype.hasOwnProperty.call(ys, t) ? t : "person";
}
function xs(e) {
	return `bi ${ys[bs(e)]} icon`;
}
//#endregion
//#region src/plugins/MentionNamePlugin/openPersonAdvancedPanelEvent.ts
var Ss = "bible-note:open-mention-person-advanced-panel";
function Cs(e) {
	window.dispatchEvent(new CustomEvent(Ss, { detail: e }));
}
//#endregion
//#region src/plugins/MentionBibleVersesPlugin/openBibleVerseAdvancedPanelEvent.ts
var ws = "bible-note:open-mention-bible-verse-advanced-panel";
function Ts(e) {
	window.dispatchEvent(new CustomEvent(ws, { detail: e }));
}
//#endregion
//#region src/plugins/MentionReferenceText/index.tsx
function Es(e) {
	return e.reduce((e, t) => {
		if (typeof t != "object" || !t) return e;
		let n = t, r = typeof n.id == "string" ? n.id.trim() : "", i = typeof n.name == "string" ? n.name.trim() : "";
		return r === "" || i === "" || e.set(r, i), e;
	}, /* @__PURE__ */ new Map());
}
var Ds = B(() => Es(Qn(Xn().namesMap))), Os = B(() => {
	let e = Zn();
	return Es(Qn(e.locationsMap ?? e.namesMap));
}), ks = /\[([^\]]+)\]\((?:name-id|location-id|verse-key):\/\/[^)]*\)/g;
function As(e) {
	return e.replace(ks, "$1");
}
var js = /\[([^\]]+)\]\((name-id|location-id|verse-key):\/\/([^)]*)\)/g;
function Ms(e) {
	let t = [], n = new RegExp(js), r = 0, i;
	for (; (i = n.exec(e)) !== null;) {
		i.index > r && t.push({
			kind: "text",
			text: e.slice(r, i.index)
		});
		let a = i[1], o = i[2], s = i[3].trim();
		s === "" ? t.push({
			kind: "text",
			text: a
		}) : o === "name-id" ? t.push({
			kind: "name",
			label: a,
			target: s
		}) : o === "location-id" ? t.push({
			kind: "location",
			label: a,
			target: s
		}) : t.push({
			kind: "verse",
			label: a,
			target: s
		}), r = n.lastIndex;
	}
	return r < e.length && t.push({
		kind: "text",
		text: e.slice(r)
	}), t;
}
function Ns(e, t) {
	if (e.kind === "name") {
		Cs({
			anchorElement: t,
			id: e.target,
			name: Ds().get(e.target) ?? e.label
		});
		return;
	}
	if (e.kind === "location") {
		vs({
			anchorElement: t,
			id: e.target,
			name: Os().get(e.target) ?? e.label
		});
		return;
	}
	Ts({
		anchorElement: t,
		shortVerse: e.target
	});
}
function Ps({ value: e }) {
	return /* @__PURE__ */ R(Bn, { children: zn(() => Ms(e), [e]).map((e, t) => e.kind === "text" ? /* @__PURE__ */ R(Mn.Fragment, { children: e.text }, t) : /* @__PURE__ */ R("button", {
		className: `mention-reference-link mention-reference-link--${e.kind}`,
		type: "button",
		onClick: (t) => {
			t.preventDefault(), t.stopPropagation(), Ns(e, t.currentTarget);
		},
		children: e.label
	}, t)) });
}
//#endregion
//#region src/plugins/MentionAdvancedPanelUtils.ts
var Fs = 320, Is = 120, Ls = 220, Rs = 10, zs = 22, Bs = 32, Vs = 1e3;
function Hs() {
	return Vs += 1, Vs;
}
function Us(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ws(e) {
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
async function Gs(e, t) {
	if (typeof ClipboardItem < "u" && navigator.clipboard !== void 0 && typeof navigator.clipboard.write == "function") try {
		await navigator.clipboard.write([new ClipboardItem({
			"text/html": new Blob([t], { type: "text/html" }),
			"text/plain": new Blob([e], { type: "text/plain" })
		})]);
		return;
	} catch {}
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	Ws(e);
}
function Ks(e, t) {
	let n = t.getBoundingClientRect();
	if (e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom) return !1;
	let r = window.getComputedStyle(t), i = Number.parseFloat(r.paddingLeft), a = Number.isFinite(i) && i > 0 ? Math.min(i + 6, Bs) : zs;
	return e.clientX <= n.left + a;
}
function qs() {
	return {
		bottom: window.innerHeight,
		height: window.innerHeight,
		left: 0,
		right: window.innerWidth,
		top: 0,
		width: window.innerWidth
	};
}
function Js(e) {
	let t = e?.closest(".editor-container") ?? document.querySelector(".editor-container");
	if (t instanceof HTMLElement) {
		let e = t.getBoundingClientRect();
		if (e.width > 0 && e.height > 0) return e;
	}
	return qs();
}
function Ys(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Xs(e, t) {
	return Tn(e ?? t?.closest(".editor-zoom-surface") ?? document.querySelector(".editor-zoom-surface"));
}
var Zs = 420, Qs = 10, $s = 12;
function ec(e, t) {
	let n = Xs(null, e), r = e.getBoundingClientRect(), i = t * n, a = Math.min(Zs * n, window.innerWidth - $s * 2), o = Math.max($s, window.innerWidth - a - $s), s = Math.min(Math.max(r.left, $s), o), c = window.innerHeight - r.bottom - Qs - $s, l = r.top - Qs - $s, u = c < i && l > c, d = u ? r.top - Qs : r.bottom + Qs, f = Math.max($s, u ? l : c);
	return {
		left: s / n,
		maxHeight: f / n,
		maxWidth: a / n,
		position: "fixed",
		top: d / n,
		transform: u ? "translateY(-100%)" : void 0,
		zoom: n
	};
}
function tc(e, t, n) {
	let r = Js(n), i = Xs(t, n), a = Math.max(Ls, t?.offsetWidth ?? Fs) * i, o = Math.max(96, t?.offsetHeight ?? Is) * i, s = Math.max(r.left, r.right - Math.min(a, r.width)), c = Math.max(r.top, r.bottom - Math.min(o, r.height));
	return {
		left: Ys(e.left, r.left, s),
		top: Ys(e.top, r.top, c)
	};
}
function nc(e) {
	let t = Js(e), n = Is * Xs(null, e), r = e.getBoundingClientRect(), i = r.left, a = r.bottom + Rs, o = r.top - n - Rs;
	return tc({
		left: i,
		top: a + n > t.bottom && o >= t.top ? o : a
	}, null, e);
}
//#endregion
//#region src/plugins/MentionAdvancedPanel.tsx
var rc = 1600;
function ic(e, t) {
	return e.left === t.left && e.top === t.top;
}
function ac({ anchorElement: e, iconClassName: t, name: n, nameContent: r, panelKind: i, position: a, copyLabel: o, textStyle: s, title: c, zIndex: l, onBringToFront: u, onClose: d, onCopy: f, onPositionChange: p }) {
	let m = I(null), h = I(null), g = I(e), _ = I(p), v = I(null), [y, b] = L(!1), [x, S] = L(!1);
	g.current = e, _.current = p, F(() => () => {
		v.current !== null && clearTimeout(v.current);
	}, []);
	let ee = P(() => {
		f !== void 0 && Promise.resolve(f()).then(() => {
			S(!0), v.current !== null && clearTimeout(v.current), v.current = setTimeout(() => {
				S(!1), v.current = null;
			}, rc);
		});
	}, [f]), C = P((e) => {
		let t = h.current;
		t === null || t.pointerId !== e.pointerId || (_.current(tc({
			left: t.startLeft + e.clientX - t.startClientX,
			top: t.startTop + e.clientY - t.startClientY
		}, m.current, g.current)), e.preventDefault());
	}, []), w = P((e) => {
		let t = h.current;
		t === null || t.pointerId !== e.pointerId || (h.current = null, b(!1), document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", w), document.removeEventListener("pointercancel", w), e.preventDefault());
	}, [C]), T = P((e) => {
		e.button === 0 && (e.target instanceof Element && e.target.closest("button, .mention-advanced-panel__name") || (u(), h.current = {
			pointerId: e.pointerId,
			startClientX: e.clientX,
			startClientY: e.clientY,
			startLeft: a.left,
			startTop: a.top
		}, b(!0), document.addEventListener("pointermove", C), document.addEventListener("pointerup", w), document.addEventListener("pointercancel", w), e.preventDefault(), e.stopPropagation()));
	}, [
		C,
		w,
		u,
		a.left,
		a.top
	]);
	F(() => () => {
		document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", w), document.removeEventListener("pointercancel", w);
	}, [C, w]), F(() => {
		let t = () => {
			let t = tc(a, m.current, e);
			ic(t, a) || p(t);
		};
		return t(), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [
		e,
		p,
		a
	]);
	let te = Js(e), ne = Xs(m.current, e), E = {
		left: a.left / ne,
		maxHeight: Math.max(96, te.bottom - a.top) / ne,
		maxWidth: Math.max(220, te.right - a.left) / ne,
		position: "fixed",
		top: a.top / ne,
		zIndex: l
	};
	return /* @__PURE__ */ z("div", {
		ref: m,
		"aria-label": `${n} advanced panel`,
		className: `mention-advanced-panel${y ? " dragging" : ""}`,
		role: "dialog",
		style: E,
		tabIndex: 0,
		onFocus: u,
		onPointerDown: u,
		children: [/* @__PURE__ */ z("div", {
			className: "mention-advanced-panel__header",
			onPointerDown: T,
			children: [/* @__PURE__ */ z("div", {
				className: "mention-advanced-panel__name d-inline-flex align-items-center gap-2",
				style: s,
				children: [/* @__PURE__ */ R("i", {
					className: t,
					"aria-hidden": "true"
				}), r ?? /* @__PURE__ */ R("span", { children: n })]
			}), /* @__PURE__ */ z("div", {
				className: "mention-advanced-panel__actions",
				children: [f === void 0 ? null : /* @__PURE__ */ R("button", {
					"aria-label": x ? "Copied" : o ?? `Copy ${i} text`,
					className: `mention-advanced-panel__copy${x ? " mention-advanced-panel__copy--copied" : ""}`,
					title: x ? "Copied!" : "Copy",
					type: "button",
					onClick: ee,
					children: /* @__PURE__ */ R("i", {
						className: x ? "bi bi-check2" : "bi bi-copy",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ R("button", {
					"aria-label": `Close ${i} panel`,
					className: "mention-advanced-panel__close",
					title: "Close",
					type: "button",
					onClick: d,
					children: /* @__PURE__ */ R("i", {
						className: "bi bi-x-lg",
						"aria-hidden": "true"
					})
				})]
			})]
		}), c ? /* @__PURE__ */ R("div", {
			className: "mention-advanced-panel__title",
			style: s,
			children: c
		}) : null]
	});
}
//#endregion
//#region src/plugins/MentionVerseReferenceList.tsx
function oc({ buttonClassName: e, enabled: t = !0, listClassName: n, values: r }) {
	let { shortToVerseData: i } = ma(), [a, o] = L({});
	return F(() => {
		if (!t || i === void 0) return;
		let e = !0;
		return Promise.all(r.map(async (e) => {
			try {
				let t = await i(e);
				return [e, {
					label: t?.title ?? e,
					style: t?.style
				}];
			} catch {
				return [e, { label: e }];
			}
		})).then((t) => {
			e && o(Object.fromEntries(t));
		}), () => {
			e = !1;
		};
	}, [
		t,
		i,
		r
	]), /* @__PURE__ */ R("ul", {
		className: n,
		children: r.map((t) => {
			let n = a[t], r = n?.label ?? t;
			return /* @__PURE__ */ R("li", { children: /* @__PURE__ */ R("button", {
				className: e,
				style: n?.style,
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), Ts({
						anchorElement: e.currentTarget,
						shortVerse: t
					});
				},
				children: r
			}) }, t);
		})
	});
}
//#endregion
//#region src/plugins/MentionLocationsPlugin/index.tsx
var sc = {
	NAME: "\\b[A-Z][^\\s\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;]",
	PUNCTUATION: "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;"
}.PUNCTUATION, cc = ["#"].join(""), lc = "[^" + cc + sc + "\\s]", uc = "(?:\\.[ |$]| |[" + sc + "]|)", dc = RegExp("(^|\\s|\\()([" + cc + "]((?:" + lc + uc + "){0,75}))$"), fc = RegExp("(^|\\s|\\()([" + cc + "]((?:" + lc + "){0,50}))$"), pc = 20, mc = 2e3, hc = 150, gc = B(() => /* @__PURE__ */ new Map());
function _c(e) {
	return typeof e == "string" ? e.trim() : "";
}
function vc(e) {
	let t = _c(e);
	return t === "" ? null : t;
}
function yc(e) {
	return Array.isArray(e) ? e.map(_c).filter((e) => e !== "") : [];
}
function bc(e) {
	if (typeof e != "object" || !e) return null;
	let { latitude: t, longitude: n } = e;
	return typeof t != "number" || !Number.isFinite(t) || typeof n != "number" || !Number.isFinite(n) ? null : {
		latitude: t,
		longitude: n
	};
}
function xc(e) {
	return Array.isArray(e) ? e.reduce((e, t) => {
		if (typeof t != "object" || !t) return e;
		let n = t, r = _c(n.type), i = _c(n.url);
		return r === "" || i === "" || e.push({
			type: r,
			url: i
		}), e;
	}, []) : [];
}
function Sc(e) {
	if (typeof e != "object" || !e) return null;
	let t = e, n = _c(t.id), r = _c(t.name);
	return n === "" || n === "id" || r === "" ? null : {
		id: n,
		name: r,
		oldName: vc(t.oldName),
		title: _c(t.title),
		description: _c(t.description),
		type: _c(t.type),
		relatedLocations: yc(t.relatedLocations),
		modernIdentification: vc(t.modernIdentification),
		coordinates: bc(t.coordinates),
		verses: yc(t.verses),
		links: xc(t.links),
		wikipedia: vc(t.wikipedia),
		uncertainty: t.uncertainty === !0
	};
}
function Cc() {
	let { locationsMap: e, namesMap: t } = Zn();
	return Array.isArray(e) ? e : Array.isArray(t) ? t : [];
}
var wc = B(() => Cc().reduce((e, t) => {
	let n = Sc(t);
	return n === null || e.push(n), e;
}, [])), Tc = B(() => new Map(wc().map((e) => [e.id, e]))), Ec = B(() => wc().reduce((e, t) => {
	let n = e.get(t.name);
	return n === void 0 ? e.set(t.name, [t]) : n.push(t), e;
}, /* @__PURE__ */ new Map()));
function Dc(e, t, n) {
	return {
		id: e,
		name: t,
		oldName: null,
		title: n,
		description: "",
		type: "",
		relatedLocations: [],
		modernIdentification: null,
		coordinates: null,
		verses: [],
		links: [],
		wikipedia: null,
		uncertainty: !1
	};
}
function Oc(e) {
	let t = _c(e);
	return t === "" ? "" : t.toLowerCase() === "unknown" ? "Unknown" : t;
}
function kc(e) {
	let t = _c(e);
	return t !== "" && t.toLowerCase() !== "unknown";
}
function Ac(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function jc(e) {
	let t = /* @__PURE__ */ new Map();
	return e.links.forEach((e) => {
		t.set(e.url, e);
	}), e.wikipedia !== null && !t.has(e.wikipedia) && t.set(e.wikipedia, {
		type: "wikipedia",
		url: e.wikipedia
	}), Array.from(t.values());
}
function Mc(e) {
	let t = Tc().get(e);
	if (t !== void 0) return t;
	let n = Ec().get(e) ?? [];
	return n.length === 1 ? n[0] : null;
}
async function Nc(e) {
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
function Pc(e) {
	return e.map((e) => Mc(e)?.name ?? e);
}
async function Fc(e, t) {
	let n = [e.name], r = [`<p><strong>${Us(e.name)}</strong></p>`], i = As(e.title);
	i !== "" && (n.push(i), r.push(`<p><em>${Us(i)}</em></p>`));
	let a = As(e.description);
	a !== "" && (n.push(a), r.push(`<p>${Us(a)}</p>`));
	let o = [e.type].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	if (o.length > 0) {
		let e = o.join(", ");
		n.push(e), r.push(`<p>${Us(e)}</p>`);
	}
	let s = [];
	kc(e.oldName) && s.push(["Also called", Oc(e.oldName)]), kc(e.modernIdentification) && s.push(["Modern identification", Oc(e.modernIdentification)]);
	let c = t === void 0 ? e.verses : await Promise.all(e.verses.map((e) => t(e))), l = [["Related locations", Pc(e.relatedLocations)], ["Verses", c]];
	for (let [e, t] of l) t.length > 0 && s.push([e, t.join(", ")]);
	let u = jc(e);
	return u.length > 0 && s.push(["Links", u.map((e) => `${Ac(e.type)}: ${e.url}`).join(", ")]), e.coordinates !== null && s.push(["Coordinates", `${e.coordinates.latitude}, ${e.coordinates.longitude}`]), s.length > 0 && (n.push(s.map(([e, t]) => `${e}: ${t}`).join("\n")), r.push("<p>" + s.map(([e, t]) => `<strong>${Us(e)}:</strong> ${Us(t)}`).join("<br />") + "</p>")), {
		plainText: n.join("\n\n"),
		html: r.join("")
	};
}
function Ic({ inline: e = !1, label: t, value: n }) {
	return /* @__PURE__ */ z("div", {
		className: `mention-location-details__row${e ? " mention-location-details__row--inline" : ""}`,
		children: [/* @__PURE__ */ R("dt", { children: e ? `${t}:` : t }), /* @__PURE__ */ R("dd", { children: n })]
	});
}
function Lc({ label: e, value: t }) {
	return kc(t) ? /* @__PURE__ */ R(Ic, {
		inline: !0,
		label: e,
		value: Oc(t)
	}) : null;
}
function Rc({ children: e, count: t, defaultOpen: n, label: r, onOpen: i }) {
	let [a, o] = L(n);
	return /* @__PURE__ */ z("div", {
		className: "mention-location-details__row mention-location-details__row--collapsible",
		children: [/* @__PURE__ */ R("dt", { children: /* @__PURE__ */ z("button", {
			"aria-expanded": a,
			className: "mention-location-details__section-toggle",
			type: "button",
			onClick: () => {
				let e = !a;
				o(e), e && i?.();
			},
			children: [
				/* @__PURE__ */ R("i", {
					className: "bi bi-chevron-right mention-location-details__section-icon",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ R("span", { children: r }),
				t > 0 ? /* @__PURE__ */ R("span", {
					className: "mention-location-details__section-count",
					children: t
				}) : null
			]
		}) }), a ? /* @__PURE__ */ R("dd", { children: e }) : null]
	});
}
function zc({ onOpenLocationReference: e, values: t }) {
	return /* @__PURE__ */ R("ul", {
		className: "mention-location-details__list",
		children: t.map((t) => {
			let n = Mc(t), r = n?.name ?? t;
			return /* @__PURE__ */ R("li", { children: n === null ? r : /* @__PURE__ */ R("button", {
				className: "mention-location-details__location-button",
				type: "button",
				onClick: (t) => {
					t.preventDefault(), t.stopPropagation(), e(n, t.currentTarget);
				},
				children: r
			}) }, t);
		})
	});
}
function Bc({ label: e, onOpenLocationReference: t, values: n }) {
	return n.length === 0 ? null : /* @__PURE__ */ R(Rc, {
		count: n.length,
		defaultOpen: !0,
		label: e,
		children: /* @__PURE__ */ R(zc, {
			onOpenLocationReference: t,
			values: n
		})
	});
}
function Vc({ enabled: e, values: t }) {
	let [n, r] = L(!1);
	return t.length === 0 ? null : /* @__PURE__ */ R(Rc, {
		count: t.length,
		defaultOpen: !1,
		label: "Verses",
		onOpen: () => {
			r(!0);
		},
		children: /* @__PURE__ */ R(oc, {
			buttonClassName: "mention-location-details__location-button",
			enabled: e && n,
			listClassName: "mention-location-details__list",
			values: t
		})
	});
}
function Hc({ links: e }) {
	return /* @__PURE__ */ R("ul", {
		className: "mention-location-details__list",
		children: e.map((e) => /* @__PURE__ */ R("li", { children: /* @__PURE__ */ R("a", {
			href: e.url,
			rel: "noreferrer",
			target: "_blank",
			children: Ac(e.type)
		}) }, `${e.type}:${e.url}`))
	});
}
function Uc({ links: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ R(Rc, {
		count: e.length,
		defaultOpen: !0,
		label: "Links",
		children: /* @__PURE__ */ R(Hc, { links: e })
	});
}
function Wc({ coordinates: e, name: t }) {
	let { latitude: n, longitude: r } = e, i = `${n},${r}`, a = `https://maps.google.com/maps?q=${encodeURIComponent(i)}&z=8&output=embed`, o = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i)}`, s = t === "" ? "Location map" : `Map of ${t}`;
	return /* @__PURE__ */ z("div", {
		className: "mention-location-details__map",
		children: [
			/* @__PURE__ */ R("p", {
				className: "mention-location-details__map-note",
				children: "Approximate location — the marker is an estimated point and may not be exact."
			}),
			/* @__PURE__ */ R("iframe", {
				className: "mention-location-details__map-frame",
				title: s,
				src: a,
				loading: "lazy",
				referrerPolicy: "no-referrer-when-downgrade",
				allowFullScreen: !0
			}),
			/* @__PURE__ */ R("a", {
				className: "mention-location-details__map-link",
				href: o,
				rel: "noreferrer",
				target: "_blank",
				children: "Open in Google Maps"
			})
		]
	});
}
function Gc({ includeTitle: e = !0, mentionLocation: t }) {
	let n = [t.type].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	return /* @__PURE__ */ z("div", {
		className: "mention-location-basic-info",
		children: [
			e && t.title ? /* @__PURE__ */ R("div", {
				className: "mention-location-basic-info__title",
				children: /* @__PURE__ */ R(Ps, { value: t.title })
			}) : null,
			t.description ? /* @__PURE__ */ R("p", {
				className: "mention-location-basic-info__description",
				children: /* @__PURE__ */ R(Ps, { value: t.description })
			}) : null,
			n.length > 0 ? /* @__PURE__ */ R("div", {
				className: "mention-location-basic-info__facts",
				children: n.map((e) => /* @__PURE__ */ R("span", { children: e }, e))
			}) : null
		]
	});
}
function Kc({ includeTitle: e = !0, mentionLocation: t, onOpenLocationReference: n }) {
	let [r, i] = L(!1);
	return /* @__PURE__ */ z("details", {
		className: "mention-location-details",
		children: [/* @__PURE__ */ z("summary", {
			className: "mention-location-details__summary",
			onClick: () => {
				i(!0);
			},
			children: [/* @__PURE__ */ R("i", {
				className: "bi bi-chevron-right mention-location-details__summary-icon",
				"aria-hidden": "true"
			}), /* @__PURE__ */ R("span", { children: "Details" })]
		}), /* @__PURE__ */ z("div", {
			className: "mention-location-details__body",
			children: [
				t.description ? /* @__PURE__ */ R("p", {
					className: "mention-location-details__description",
					children: /* @__PURE__ */ R(Ps, { value: t.description })
				}) : null,
				/* @__PURE__ */ z("dl", {
					className: "mention-location-details__grid",
					children: [
						e && kc(t.title) ? /* @__PURE__ */ R(Ic, {
							inline: !0,
							label: "Title",
							value: /* @__PURE__ */ R(Ps, { value: t.title })
						}) : null,
						/* @__PURE__ */ R(Lc, {
							label: "Also called",
							value: t.oldName
						}),
						/* @__PURE__ */ R(Lc, {
							label: "Type",
							value: t.type
						}),
						/* @__PURE__ */ R(Lc, {
							label: "Modern identification",
							value: t.modernIdentification
						}),
						/* @__PURE__ */ R(Bc, {
							label: "Related locations",
							onOpenLocationReference: n,
							values: t.relatedLocations
						}),
						/* @__PURE__ */ R(Vc, {
							enabled: r,
							values: t.verses
						}),
						/* @__PURE__ */ R(Uc, { links: jc(t) })
					]
				}),
				t.coordinates === null ? null : /* @__PURE__ */ R(Wc, {
					coordinates: t.coordinates,
					name: t.name
				})
			]
		})]
	});
}
function qc(e) {
	return e instanceof Element && e.closest("a, button, .mention-location-details") !== null;
}
function Jc(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-lexical-mention]");
	return t instanceof HTMLElement ? t : null;
}
function Yc(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-mention-location-hover-card]");
	return t instanceof HTMLElement ? t : null;
}
function Xc(e) {
	let t = e.getAttribute("data-lexical-mention-kind");
	return t === "mention" || t === "bible-verse" ? t : t === "location" || t === "hashtag" || (e.textContent?.trim() ?? "").startsWith("#") ? "location" : "mention";
}
function Zc(e) {
	let t = Xc(e);
	t !== "bible-verse" && e.setAttribute("data-lexical-mention-kind", t);
}
function Qc(e) {
	e.querySelectorAll("[data-lexical-mention]").forEach(Zc);
}
function $c(e) {
	if (Xc(e) !== "location") return null;
	let t = e.textContent?.trim() ?? "", n = e.getAttribute("data-lexical-mention-id");
	if (n !== null) {
		let e = Tc().get(n);
		if (e !== void 0) return e;
	}
	let r = e.getAttribute("data-lexical-mention-name")?.trim() ?? t ?? "", i = r.startsWith("#") ? r.slice(1) : r;
	if (i === "") return null;
	let a = Ec().get(i) ?? [];
	return a.length === 1 ? a[0] : Dc(n, i, "");
}
function el(e) {
	let t = vc(e.id), n = _c(e.name);
	if (t !== null) {
		let e = Tc().get(t);
		if (e !== void 0) return e;
	}
	if (n === "") return null;
	let r = Ec().get(n) ?? [];
	return r.length === 1 ? r[0] : Dc(t, n, "");
}
function tl(e) {
	return ec(e, 112);
}
function nl(e) {
	return `location:${e.id ?? e.name}`;
}
function rl(e, t) {
	let n = e.toLowerCase();
	return n === t ? 0 : n.startsWith(t) ? 1 : 2;
}
var il = { search(e, t) {
	setTimeout(() => {
		let n = e.toLowerCase();
		t(wc().filter((e) => e.name.toLowerCase().includes(n)).map((e) => ({
			mentionLocation: e,
			rank: rl(e.name, n)
		})).sort((e, t) => e.rank - t.rank).map((e) => e.mentionLocation));
	}, 500);
} };
function al(e) {
	let [t, n] = L([]);
	return F(() => {
		let t = gc(), r = t.get(e);
		if (e == null) {
			n([]);
			return;
		}
		if (r !== null) {
			if (r !== void 0) {
				n(r);
				return;
			}
			t.set(e, null), il.search(e, (r) => {
				t.set(e, r), n(r);
			});
		}
	}, [e]), t;
}
function ol(e, t) {
	let n = dc.exec(e);
	if (n === null && (n = fc.exec(e)), n !== null) {
		let e = n[1], r = n[3];
		if (r.length >= t) return {
			leadOffset: n.index + e.length,
			matchingString: r,
			replaceableString: n[2]
		};
	}
	return null;
}
function sl(e) {
	return ol(e, 1);
}
var cl = class extends Fo {
	id;
	name;
	picture;
	constructor(e, t) {
		super(e.id), this.id = e.id, this.name = e.name, this.title = As(e.title), this.picture = t;
	}
};
function ll({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item mx-2 p-2 d-flex flex-row align-items-center flex-shrink-0";
	return t && (a += " selected"), /* @__PURE__ */ z("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: [i.picture, /* @__PURE__ */ z("span", {
			className: "text flex-column",
			children: [/* @__PURE__ */ R("span", { children: i.name }), i.title ? /* @__PURE__ */ z("span", {
				className: "small opacity-75",
				children: [
					"(",
					i.title,
					")"
				]
			}) : null]
		})]
	}, i.key);
}
function ul() {
	let [e] = vt(), t = I(null), n = I(null), [r, i] = L(null), [a, o] = L(null), [s, c] = L(null), [l, u] = L(null), [d, f] = L([]), { shortToVerseData: p } = ma(), m = P(async (e) => {
		if (p === void 0) return e;
		try {
			return (await p(e))?.title ?? e;
		} catch {
			return e;
		}
	}, [p]), h = al(r), g = Go("/", { minLength: 0 }), _ = zn(() => h.map((e) => new cl(e, /* @__PURE__ */ R("i", {
		className: "bi bi-pin icon",
		"aria-hidden": "true"
	}))).slice(0, pc), [h]), v = P((t, n, r) => {
		e.update(() => {
			let e = uo(t.name, t.name, t.id, "location");
			n && n.replace(e), e.select(), r();
		});
	}, [e]), y = P((t) => g(t, e) === null ? sl(t) : null, [g, e]), b = P(() => {
		t.current !== null && (window.clearTimeout(t.current), t.current = null);
	}, []), x = P(() => {
		n.current !== null && (window.clearTimeout(n.current), n.current = null);
	}, []), S = P(() => {
		b(), x(), c(null), o(null);
	}, [x, b]), ee = P(() => {
		b(), x(), n.current = window.setTimeout(() => {
			c(null), o(null), n.current = null;
		}, hc);
	}, [x, b]), C = P((e, t) => {
		let n = nl(e), r = Hs(), i = nc(t);
		f((a) => {
			let o = a.find((e) => e.panelKey === n), s = {
				...e,
				anchorElement: t,
				panelKey: n,
				position: o?.position ?? i,
				zIndex: r
			};
			return o === void 0 ? [...a, s] : a.map((e) => e.panelKey === n ? s : e);
		}), S();
	}, [S]), w = P((e) => {
		f((t) => t.filter((t) => t.panelKey !== e));
	}, []), T = P((e) => {
		let t = Hs();
		f((n) => n.map((n) => n.panelKey === e ? {
			...n,
			zIndex: t
		} : n));
	}, []), te = P((e, t) => {
		f((n) => {
			let r = !1, i = n.map((n) => n.panelKey !== e || n.position.left === t.left && n.position.top === t.top ? n : (r = !0, {
				...n,
				position: t
			}));
			return r ? i : n;
		});
	}, []);
	return F(() => {
		let e = (e) => {
			let t = e.detail;
			if (typeof t != "object" || !t || !(t.anchorElement instanceof HTMLElement)) return;
			let n = el(t);
			n !== null && C(n, t.anchorElement);
		};
		return window.addEventListener(_s, e), () => {
			window.removeEventListener(_s, e);
		};
	}, [C]), F(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = Jc(e.target);
			if (t === null || !Ks(e, t)) return;
			Zc(t);
			let n = $c(t);
			n !== null && (C(n, t), e.preventDefault(), e.stopPropagation());
		};
		return document.addEventListener("pointerdown", e, !0), () => {
			document.removeEventListener("pointerdown", e, !0);
		};
	}, [C]), F(() => e.registerNodeTransform(lo, (e) => {
		e.getTextContent().startsWith("#") && (e.setMentionKind("location"), e.setTextContent(e.getTextContent().slice(1)));
	}), [e]), F(() => {
		let t = null, n = e.registerRootListener((e) => {
			t?.disconnect(), t = null, e !== null && (Qc(e), t = new MutationObserver(() => {
				Qc(e);
			}), t.observe(e, {
				characterData: !0,
				childList: !0,
				subtree: !0
			}));
		});
		return () => {
			t?.disconnect(), n();
		};
	}, [e]), F(() => {
		let e = (e) => {
			if (Yc(e.target) !== null) {
				x();
				return;
			}
			let n = Jc(e.target), r = Jc(e.relatedTarget);
			if (n === null) return;
			if (n === s) {
				x();
				return;
			}
			if (n === r) return;
			Zc(n);
			let i = $c(n);
			i !== null && (S(), t.current = window.setTimeout(() => {
				c(n), o(i), t.current = null;
			}, mc));
		}, n = (e) => {
			let t = Jc(e.target), n = Yc(e.target), r = Jc(e.relatedTarget), i = Yc(e.relatedTarget);
			if (!(t === null && n === null)) {
				if (r !== null || i !== null) {
					x();
					return;
				}
				ee();
			}
		};
		return document.addEventListener("mouseover", e), document.addEventListener("mouseout", n), () => {
			b(), x(), document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", n);
		};
	}, [
		x,
		b,
		S,
		s,
		ee
	]), F(() => {
		if (s === null) {
			u(null);
			return;
		}
		let e = () => {
			if (!s.isConnected) {
				S(), u(null);
				return;
			}
			u(tl(s));
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [S, s]), /* @__PURE__ */ z(Bn, { children: [
		/* @__PURE__ */ R(Ko, {
			onQueryChange: i,
			onSelectOption: v,
			triggerFn: y,
			options: _,
			menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: n, setHighlightedIndex: r }) => e.current && h.length ? Vn.createPortal(/* @__PURE__ */ R("div", {
				className: "typeahead-popover mention-locations-menu",
				children: /* @__PURE__ */ R("ul", {
					className: "list-unstyled m-0 p-0",
					children: _.map((e, i) => /* @__PURE__ */ R(ll, {
						index: i,
						isSelected: t === i,
						onClick: () => {
							r(i), n(e);
						},
						onMouseEnter: () => {
							r(i);
						},
						option: e
					}, e.key))
				})
			}), e.current) : null
		}),
		a !== null && l !== null ? Vn.createPortal(/* @__PURE__ */ z("div", {
			className: "mention-hover-card",
			"data-mention-location-hover-card": "true",
			role: "tooltip",
			style: l,
			tabIndex: 0,
			onClick: (e) => {
				qc(e.target) || s !== null && C(a, s);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && s !== null && !qc(e.target) && (C(a, s), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ z("div", {
					className: "mention-hover-card__name d-inline-flex align-items-center gap-2",
					children: [
						/* @__PURE__ */ R("i", {
							className: "bi bi-pin icon",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ R("span", {
							className: "mention-hover-card__name-text",
							children: a.name
						}),
						/* @__PURE__ */ R("button", {
							"aria-label": "Copy mentioned location name",
							className: "mention-hover-card__copy",
							title: "Copy name",
							type: "button",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), Nc(a.name);
							},
							children: /* @__PURE__ */ R("i", {
								className: "bi bi-copy",
								"aria-hidden": "true"
							})
						})
					]
				}),
				a.title ? /* @__PURE__ */ R("div", {
					className: "mention-hover-card__title",
					children: /* @__PURE__ */ R(Ps, { value: a.title })
				}) : null,
				/* @__PURE__ */ R(Gc, {
					includeTitle: !1,
					mentionLocation: a
				}),
				/* @__PURE__ */ R(Kc, {
					includeTitle: !1,
					mentionLocation: a,
					onOpenLocationReference: C
				})
			]
		}), document.body) : null,
		d.map((e) => /* @__PURE__ */ R(ac, {
			anchorElement: e.anchorElement,
			copyLabel: "Copy mentioned location details",
			iconClassName: "bi bi-pin icon",
			name: e.name,
			panelKind: "location",
			position: e.position,
			title: /* @__PURE__ */ z(Bn, { children: [/* @__PURE__ */ R(Gc, { mentionLocation: e }), /* @__PURE__ */ R(Kc, {
				mentionLocation: e,
				onOpenLocationReference: C
			})] }),
			zIndex: e.zIndex,
			onCopy: async () => {
				let { plainText: t, html: n } = await Fc(e, m);
				return Gs(t, n);
			},
			onBringToFront: () => {
				T(e.panelKey);
			},
			onClose: () => {
				w(e.panelKey);
			},
			onPositionChange: (t) => {
				te(e.panelKey, t);
			}
		}, e.panelKey))
	] });
}
//#endregion
//#region src/plugins/MentionNamePlugin/index.tsx
var dl = {
	NAME: "\\b[A-Z][^\\s\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;]",
	PUNCTUATION: "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;"
}.PUNCTUATION, fl = ["@"].join(""), pl = "[^" + fl + dl + "\\s]", ml = "(?:\\.[ |$]| |[" + dl + "]|)", hl = RegExp("(^|\\s|\\()([" + fl + "]((?:" + pl + ml + "){0,75}))$"), gl = RegExp("(^|\\s|\\()([" + fl + "]((?:" + pl + "){0,50}))$"), _l = 20, vl = 2e3, yl = 150, bl = B(() => /* @__PURE__ */ new Map());
function Q(e) {
	return typeof e == "string" ? e.trim() : "";
}
function xl(e) {
	let t = Q(e);
	return t === "" ? null : t;
}
function Sl(e) {
	return Array.isArray(e) ? e.map(Q).filter((e) => e !== "") : [];
}
function Cl(e) {
	return Array.isArray(e) ? e.reduce((e, t) => {
		if (typeof t != "object" || !t) return e;
		let n = t, r = Q(n.type);
		return r === "" || typeof n.start != "number" || typeof n.end != "number" || e.push({
			type: r,
			start: n.start,
			end: n.end
		}), e;
	}, []) : [];
}
function wl(e) {
	return Array.isArray(e) ? e.reduce((e, t) => {
		if (typeof t != "object" || !t) return e;
		let n = t, r = Q(n.type), i = Q(n.url);
		return r === "" || i === "" || e.push({
			type: r,
			url: i
		}), e;
	}, []) : [];
}
function Tl(e) {
	if (typeof e != "object" || !e) return null;
	let t = e, n = Q(t.id), r = Q(t.name);
	return n === "" || n === "id" || r === "" ? null : {
		id: n,
		name: r,
		oldName: xl(t.oldName),
		title: Q(t.title),
		description: Q(t.description),
		gender: Q(t.gender),
		age: Q(t.age),
		years: Cl(t.years),
		locations: Sl(t.locations),
		spouses: Sl(t.spouses),
		children: Sl(t.children),
		parents: Sl(t.parents),
		siblings: Sl(t.siblings),
		cousin: Sl(t.cousin),
		type: Q(t.type),
		verses: Sl(t.verses),
		links: wl(t.links),
		wikipedia: xl(t.wikipedia)
	};
}
function El(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e ? Object.values(e) : [];
}
var Dl = B(() => El(Xn().namesMap).reduce((e, t) => {
	let n = Tl(t);
	return n === null || e.push(n), e;
}, [])), Ol = B(() => new Map(Dl().map((e) => [e.id, e]))), kl = B(() => Dl().reduce((e, t) => {
	let n = e.get(t.name);
	return n === void 0 ? e.set(t.name, [t]) : n.push(t), e;
}, /* @__PURE__ */ new Map())), Al = B(() => El(Zn().locationsMap).reduce((e, t) => {
	if (typeof t != "object" || !t) return e;
	let n = t, r = Q(n.id), i = Q(n.name), a = Q(n.title);
	return r === "" || i === "" || e.set(r, {
		id: r,
		name: i,
		title: a
	}), e;
}, /* @__PURE__ */ new Map())), jl = B(() => Array.from(Al().values()).reduce((e, t) => {
	let n = e.get(t.name);
	return n === void 0 ? e.set(t.name, [t]) : n.push(t), e;
}, /* @__PURE__ */ new Map()));
function Ml(e, t, n) {
	return {
		id: e,
		name: t,
		oldName: null,
		title: n,
		description: "",
		gender: "",
		age: "",
		years: [],
		locations: [],
		spouses: [],
		children: [],
		parents: [],
		siblings: [],
		cousin: [],
		type: "",
		verses: [],
		links: [],
		wikipedia: null
	};
}
function Nl(e) {
	let t = Q(e);
	return t === "" ? "" : t.toLowerCase() === "unknown" ? "Unknown" : t;
}
function Pl(e) {
	let t = Al().get(e);
	if (t !== void 0) return t;
	let n = jl().get(e) ?? [];
	return n.length === 1 ? n[0] : null;
}
function Fl(e) {
	return `${e.type}: ${e.start} to ${e.end}`;
}
function Il(e) {
	let t = /* @__PURE__ */ new Map();
	return e.links.forEach((e) => {
		t.set(e.url, e);
	}), e.wikipedia !== null && !t.has(e.wikipedia) && t.set(e.wikipedia, {
		type: "wikipedia",
		url: e.wikipedia
	}), Array.from(t.values());
}
function Ll(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
async function Rl(e) {
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
function zl(e) {
	return e.map((e) => Ol().get(e)?.name ?? e);
}
function Bl(e) {
	return e.map((e) => Pl(e)?.name ?? e);
}
async function Vl(e, t) {
	let n = [e.name], r = [`<p><strong>${Us(e.name)}</strong></p>`], i = As(e.title);
	i !== "" && (n.push(i), r.push(`<p><em>${Us(i)}</em></p>`));
	let a = As(e.description);
	a !== "" && (n.push(a), r.push(`<p>${Us(a)}</p>`));
	let o = [
		e.type,
		e.gender,
		e.age
	].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	if (o.length > 0) {
		let e = o.join(", ");
		n.push(e), r.push(`<p>${Us(e)}</p>`);
	}
	let s = [];
	Ul(e.oldName) && s.push(["Also called", Nl(e.oldName)]), e.years.length > 0 && s.push(["Years", e.years.map(Fl).join(", ")]);
	let c = t === void 0 ? e.verses : await Promise.all(e.verses.map((e) => t(e))), l = [
		["Locations", Bl(e.locations)],
		["Parents", zl(e.parents)],
		["Spouses", zl(e.spouses)],
		["Children", zl(e.children)],
		["Siblings", zl(e.siblings)],
		["Cousins", zl(e.cousin)],
		["Verses", c]
	];
	for (let [e, t] of l) t.length > 0 && s.push([e, t.join(", ")]);
	return e.links.length > 0 && s.push(["Links", e.links.map((e) => `${Ll(e.type)}: ${e.url}`).join(", ")]), s.length > 0 && (n.push(s.map(([e, t]) => `${e}: ${t}`).join("\n")), r.push("<p>" + s.map(([e, t]) => `<strong>${Us(e)}:</strong> ${Us(t)}`).join("<br />") + "</p>")), {
		plainText: n.join("\n\n"),
		html: r.join("")
	};
}
function Hl({ inline: e = !1, label: t, value: n }) {
	return /* @__PURE__ */ z("div", {
		className: `mention-person-details__row${e ? " mention-person-details__row--inline" : ""}`,
		children: [/* @__PURE__ */ R("dt", { children: e ? `${t}:` : t }), /* @__PURE__ */ R("dd", { children: n })]
	});
}
function Ul(e) {
	let t = Q(e);
	return t !== "" && t.toLowerCase() !== "unknown";
}
function Wl({ label: e, value: t }) {
	return Ul(t) ? /* @__PURE__ */ R(Hl, {
		inline: !0,
		label: e,
		value: Nl(t)
	}) : null;
}
function Gl({ values: e }) {
	return /* @__PURE__ */ R("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => /* @__PURE__ */ R("li", { children: e }, e))
	});
}
function Kl({ label: e, values: t }) {
	return t.length === 0 ? null : /* @__PURE__ */ R(Hl, {
		label: e,
		value: /* @__PURE__ */ R(Gl, { values: t })
	});
}
function ql({ locations: e }) {
	return /* @__PURE__ */ R("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => {
			let t = Pl(e), n = t?.name ?? e;
			return /* @__PURE__ */ R("li", { children: t === null ? n : /* @__PURE__ */ R("button", {
				className: "mention-person-details__location-button",
				title: As(t.title) || void 0,
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), vs({
						anchorElement: e.currentTarget,
						id: t.id,
						name: t.name
					});
				},
				children: n
			}) }, e);
		})
	});
}
function Jl({ locations: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ R(Hl, {
		label: "Locations",
		value: /* @__PURE__ */ R(ql, { locations: e })
	});
}
function Yl({ ids: e, onOpenPersonReference: t }) {
	return /* @__PURE__ */ R("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => {
			let n = Ol().get(e), r = n?.name ?? e;
			return /* @__PURE__ */ R("li", { children: n === void 0 ? r : /* @__PURE__ */ R("button", {
				className: "mention-person-details__person-button",
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), t(n, e.currentTarget);
				},
				children: r
			}) }, e);
		})
	});
}
function Xl({ ids: e, label: t, onOpenPersonReference: n }) {
	return e.length === 0 ? null : /* @__PURE__ */ R(Hl, {
		label: t,
		value: /* @__PURE__ */ R(Yl, {
			ids: e,
			onOpenPersonReference: n
		})
	});
}
function Zl({ links: e }) {
	return /* @__PURE__ */ R("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => /* @__PURE__ */ R("li", { children: /* @__PURE__ */ R("a", {
			href: e.url,
			rel: "noreferrer",
			target: "_blank",
			children: Ll(e.type)
		}) }, `${e.type}:${e.url}`))
	});
}
function Ql({ enabled: e, values: t }) {
	return t.length === 0 ? null : /* @__PURE__ */ R(Hl, {
		label: "Verses",
		value: /* @__PURE__ */ R(oc, {
			buttonClassName: "mention-person-details__location-button",
			enabled: e,
			listClassName: "mention-person-details__list",
			values: t
		})
	});
}
function $l({ links: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ R(Hl, {
		label: "Links",
		value: /* @__PURE__ */ R(Zl, { links: e })
	});
}
function eu({ includeTitle: e = !0, mentionPerson: t }) {
	let n = [
		t.type,
		t.gender,
		t.age
	].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	return /* @__PURE__ */ z("div", {
		className: "mention-person-basic-info",
		children: [
			e && t.title ? /* @__PURE__ */ R("div", {
				className: "mention-person-basic-info__title",
				children: /* @__PURE__ */ R(Ps, { value: t.title })
			}) : null,
			t.description ? /* @__PURE__ */ R("p", {
				className: "mention-person-basic-info__description",
				children: /* @__PURE__ */ R(Ps, { value: t.description })
			}) : null,
			n.length > 0 ? /* @__PURE__ */ R("div", {
				className: "mention-person-basic-info__facts",
				children: n.map((e) => /* @__PURE__ */ R("span", { children: e }, e))
			}) : null
		]
	});
}
function tu({ includeTitle: e = !0, mentionPerson: t, onOpenPersonReference: n }) {
	let [r, i] = L(!1);
	return /* @__PURE__ */ z("details", {
		className: "mention-person-details",
		children: [/* @__PURE__ */ z("summary", {
			className: "mention-person-details__summary",
			onClick: () => {
				i(!0);
			},
			children: [/* @__PURE__ */ R("i", {
				className: "bi bi-chevron-right mention-person-details__summary-icon",
				"aria-hidden": "true"
			}), /* @__PURE__ */ R("span", { children: "Details" })]
		}), /* @__PURE__ */ z("div", {
			className: "mention-person-details__body",
			children: [t.description ? /* @__PURE__ */ R("p", {
				className: "mention-person-details__description",
				children: /* @__PURE__ */ R(Ps, { value: t.description })
			}) : null, /* @__PURE__ */ z("dl", {
				className: "mention-person-details__grid",
				children: [
					e && Ul(t.title) ? /* @__PURE__ */ R(Hl, {
						inline: !0,
						label: "Title",
						value: /* @__PURE__ */ R(Ps, { value: t.title })
					}) : null,
					/* @__PURE__ */ R(Wl, {
						label: "Also called",
						value: t.oldName
					}),
					/* @__PURE__ */ R(Wl, {
						label: "Type",
						value: t.type
					}),
					/* @__PURE__ */ R(Wl, {
						label: "Gender",
						value: t.gender
					}),
					/* @__PURE__ */ R(Wl, {
						label: "Age",
						value: t.age
					}),
					/* @__PURE__ */ R(Kl, {
						label: "Years",
						values: t.years.map(Fl)
					}),
					/* @__PURE__ */ R(Jl, { locations: t.locations }),
					/* @__PURE__ */ R(Xl, {
						label: "Parents",
						ids: t.parents,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ R(Xl, {
						label: "Spouses",
						ids: t.spouses,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ R(Xl, {
						label: "Children",
						ids: t.children,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ R(Xl, {
						label: "Siblings",
						ids: t.siblings,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ R(Xl, {
						label: "Cousins",
						ids: t.cousin,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ R(Ql, {
						enabled: r,
						values: t.verses
					}),
					/* @__PURE__ */ R($l, { links: Il(t) })
				]
			})]
		})]
	});
}
function nu(e) {
	return e instanceof Element && e.closest("a, button, .mention-person-details") !== null;
}
function ru(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-lexical-mention]");
	return t instanceof HTMLElement ? t : null;
}
function iu(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-mention-name-hover-card]");
	return t instanceof HTMLElement ? t : null;
}
function au(e) {
	let t = e.textContent?.trim() ?? "", n = e.getAttribute("data-lexical-mention-kind");
	if (n === "location" || n === "bible-verse" || n === "hashtag" || t.startsWith("#")) return null;
	let r = e.getAttribute("data-lexical-mention-id");
	if (r !== null) {
		let e = Ol().get(r);
		if (e !== void 0) return e;
	}
	let i = e.getAttribute("data-lexical-mention-name")?.trim() ?? t ?? "";
	if (i === "") return null;
	let a = kl().get(i) ?? [];
	return Ml(r, i, a.length === 1 ? a[0].title : "");
}
function ou(e) {
	return ec(e, 360);
}
function su(e) {
	return `person:${e.id ?? e.name}`;
}
function cu(e) {
	let t = xl(e.id), n = Q(e.name);
	if (t !== null) {
		let e = Ol().get(t);
		if (e !== void 0) return e;
	}
	if (n === "") return null;
	let r = kl().get(n) ?? [];
	return r.length >= 1 ? r[0] : null;
}
function lu(e, t) {
	let n = e.toLowerCase();
	return n === t ? 0 : n.startsWith(t) ? 1 : 2;
}
var uu = { search(e, t) {
	setTimeout(() => {
		let n = e.toLowerCase();
		t(Dl().filter((e) => e.name.toLowerCase().includes(n)).map((e) => ({
			mentionPerson: e,
			rank: lu(e.name, n)
		})).sort((e, t) => e.rank - t.rank).map((e) => e.mentionPerson));
	}, 500);
} };
function du(e) {
	let [t, n] = L([]);
	return F(() => {
		let t = bl(), r = t.get(e);
		if (e == null) {
			n([]);
			return;
		}
		if (r !== null) {
			if (r !== void 0) {
				n(r);
				return;
			}
			t.set(e, null), uu.search(e, (r) => {
				t.set(e, r), n(r);
			});
		}
	}, [e]), t;
}
function fu(e, t) {
	let n = hl.exec(e);
	if (n === null && (n = gl.exec(e)), n !== null) {
		let e = n[1], r = n[3];
		if (r.length >= t) return {
			leadOffset: n.index + e.length,
			matchingString: r,
			replaceableString: n[2]
		};
	}
	return null;
}
function pu(e) {
	return fu(e, 1);
}
var mu = class extends Fo {
	id;
	name;
	picture;
	constructor(e, t) {
		super(e.id), this.id = e.id, this.name = e.name, this.title = As(e.title), this.picture = t;
	}
};
function hu({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item mx-2 p-2 d-flex flex-row align-items-center flex-shrink-0";
	return t && (a += " selected"), /* @__PURE__ */ z("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: [i.picture, /* @__PURE__ */ z("span", {
			className: "text flex-column",
			children: [/* @__PURE__ */ R("span", { children: i.name }), i.title ? /* @__PURE__ */ z("span", {
				className: "small opacity-75",
				children: [
					"(",
					i.title,
					")"
				]
			}) : null]
		})]
	}, i.key);
}
function gu() {
	let [e] = vt(), t = I(null), n = I(null), [r, i] = L(null), [a, o] = L(null), [s, c] = L(null), [l, u] = L(null), [d, f] = L([]), { shortToVerseData: p } = ma(), m = P(async (e) => {
		if (p === void 0) return e;
		try {
			return (await p(e))?.title ?? e;
		} catch {
			return e;
		}
	}, [p]), h = du(r), g = Go("/", { minLength: 0 }), _ = zn(() => h.map((e) => new mu(e, /* @__PURE__ */ R("i", { className: xs(e.type) }))).slice(0, _l), [h]), v = P((t, n, r) => {
		e.update(() => {
			let e = uo(t.name, t.name, t.id);
			n && n.replace(e), e.select(), r();
		});
	}, [e]), y = P((t) => g(t, e) === null ? pu(t) : null, [g, e]), b = P(() => {
		t.current !== null && (window.clearTimeout(t.current), t.current = null);
	}, []), x = P(() => {
		n.current !== null && (window.clearTimeout(n.current), n.current = null);
	}, []), S = P(() => {
		b(), x(), c(null), o(null);
	}, [x, b]), ee = P(() => {
		b(), x(), n.current = window.setTimeout(() => {
			c(null), o(null), n.current = null;
		}, yl);
	}, [x, b]), C = P((e, t) => {
		let n = su(e), r = Hs(), i = nc(t);
		f((a) => {
			let o = a.find((e) => e.panelKey === n), s = {
				...e,
				anchorElement: t,
				panelKey: n,
				position: o?.position ?? i,
				zIndex: r
			};
			return o === void 0 ? [...a, s] : a.map((e) => e.panelKey === n ? s : e);
		}), S();
	}, [S]), w = P((e) => {
		f((t) => t.filter((t) => t.panelKey !== e));
	}, []), T = P((e) => {
		let t = Hs();
		f((n) => n.map((n) => n.panelKey === e ? {
			...n,
			zIndex: t
		} : n));
	}, []), te = P((e, t) => {
		f((n) => {
			let r = !1, i = n.map((n) => n.panelKey !== e || n.position.left === t.left && n.position.top === t.top ? n : (r = !0, {
				...n,
				position: t
			}));
			return r ? i : n;
		});
	}, []);
	return F(() => {
		let t = (e) => {
			if (e.getAttribute("data-lexical-mention-kind") !== "mention") {
				e.removeAttribute("data-lexical-mention-name-type");
				return;
			}
			let t = e.getAttribute("data-lexical-mention-id"), n = t === null ? void 0 : Ol().get(t);
			if (n === void 0) {
				e.removeAttribute("data-lexical-mention-name-type");
				return;
			}
			e.setAttribute("data-lexical-mention-name-type", bs(n.type));
		};
		return e.registerMutationListener(lo, (n) => {
			e.getEditorState().read(() => {
				for (let [r, i] of n) {
					if (i === "destroyed") continue;
					let n = e.getElementByKey(r);
					n instanceof HTMLElement && t(n);
				}
			});
		}, { skipInitialization: !1 });
	}, [e]), F(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = ru(e.target);
			if (t === null || !Ks(e, t)) return;
			let n = au(t);
			n !== null && (C(n, t), e.preventDefault(), e.stopPropagation());
		};
		return document.addEventListener("pointerdown", e, !0), () => {
			document.removeEventListener("pointerdown", e, !0);
		};
	}, [C]), F(() => {
		let e = (e) => {
			let t = e.detail;
			if (typeof t != "object" || !t || !(t.anchorElement instanceof HTMLElement)) return;
			let n = cu(t);
			n !== null && C(n, t.anchorElement);
		};
		return window.addEventListener(Ss, e), () => {
			window.removeEventListener(Ss, e);
		};
	}, [C]), F(() => {
		let e = (e) => {
			if (iu(e.target) !== null) {
				x();
				return;
			}
			let n = ru(e.target), r = ru(e.relatedTarget);
			if (n === null) return;
			if (n === s) {
				x();
				return;
			}
			if (n === r) return;
			let i = au(n);
			i !== null && (S(), t.current = window.setTimeout(() => {
				c(n), o(i), t.current = null;
			}, vl));
		}, n = (e) => {
			let t = ru(e.target), n = iu(e.target), r = ru(e.relatedTarget), i = iu(e.relatedTarget);
			if (!(t === null && n === null)) {
				if (r !== null || i !== null) {
					x();
					return;
				}
				ee();
			}
		};
		return document.addEventListener("mouseover", e), document.addEventListener("mouseout", n), () => {
			b(), x(), document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", n);
		};
	}, [
		x,
		b,
		S,
		s,
		ee
	]), F(() => {
		if (s === null) {
			u(null);
			return;
		}
		let e = () => {
			if (!s.isConnected) {
				S(), u(null);
				return;
			}
			u(ou(s));
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [S, s]), /* @__PURE__ */ z(Bn, { children: [
		/* @__PURE__ */ R(Ko, {
			onQueryChange: i,
			onSelectOption: v,
			triggerFn: y,
			options: _,
			menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: n, setHighlightedIndex: r }) => e.current && h.length ? Vn.createPortal(/* @__PURE__ */ R("div", {
				className: "typeahead-popover mention-name-menu",
				children: /* @__PURE__ */ R("ul", {
					className: "list-unstyled m-0 p-0",
					children: _.map((e, i) => /* @__PURE__ */ R(hu, {
						index: i,
						isSelected: t === i,
						onClick: () => {
							r(i), n(e);
						},
						onMouseEnter: () => {
							r(i);
						},
						option: e
					}, e.key))
				})
			}), e.current) : null
		}),
		a !== null && l !== null ? Vn.createPortal(/* @__PURE__ */ z("div", {
			className: "mention-hover-card",
			"data-mention-name-hover-card": "true",
			role: "tooltip",
			style: l,
			tabIndex: 0,
			onClick: (e) => {
				nu(e.target) || s !== null && C(a, s);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && s !== null && !nu(e.target) && (C(a, s), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ z("div", {
					className: "mention-hover-card__name d-inline-flex align-items-center gap-2",
					children: [
						/* @__PURE__ */ R("i", {
							className: xs(a.type),
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ R("span", {
							className: "mention-hover-card__name-text",
							children: a.name
						}),
						/* @__PURE__ */ R("button", {
							"aria-label": "Copy mentioned person name",
							className: "mention-hover-card__copy",
							title: "Copy name",
							type: "button",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), Rl(a.name);
							},
							children: /* @__PURE__ */ R("i", {
								className: "bi bi-copy",
								"aria-hidden": "true"
							})
						})
					]
				}),
				a.title ? /* @__PURE__ */ R("div", {
					className: "mention-hover-card__title",
					children: /* @__PURE__ */ R(Ps, { value: a.title })
				}) : null,
				/* @__PURE__ */ R(eu, {
					includeTitle: !1,
					mentionPerson: a
				}),
				/* @__PURE__ */ R(tu, {
					includeTitle: !1,
					mentionPerson: a,
					onOpenPersonReference: C
				})
			]
		}), document.body) : null,
		d.map((e) => /* @__PURE__ */ R(ac, {
			anchorElement: e.anchorElement,
			copyLabel: "Copy mentioned person details",
			iconClassName: xs(e.type),
			name: e.name,
			panelKind: "mentioned person",
			position: e.position,
			title: /* @__PURE__ */ z(Bn, { children: [/* @__PURE__ */ R(eu, { mentionPerson: e }), /* @__PURE__ */ R(tu, {
				mentionPerson: e,
				onOpenPersonReference: C
			})] }),
			zIndex: e.zIndex,
			onCopy: async () => {
				let { plainText: t, html: n } = await Vl(e, m);
				return Gs(t, n);
			},
			onBringToFront: () => {
				T(e.panelKey);
			},
			onClose: () => {
				w(e.panelKey);
			},
			onPositionChange: (t) => {
				te(e.panelKey, t);
			}
		}, e.panelKey))
	] });
}
//#endregion
//#region node_modules/@lexical/devtools-core/dist/LexicalDevtoolsCore.prod.mjs
var _u = Object.freeze({
	"	": "\\t",
	"\n": "\\n"
}), vu = new RegExp(Object.keys(_u).join("|"), "g"), $ = Object.freeze({
	ancestorHasNextSibling: "|",
	ancestorIsLastChild: " ",
	hasNextSibling: "├",
	isLastChild: "└",
	selectedChar: "^",
	selectedLine: ">"
}), yu = [
	(e) => e.hasFormat("bold") && "Bold",
	(e) => e.hasFormat("code") && "Code",
	(e) => e.hasFormat("italic") && "Italic",
	(e) => e.hasFormat("strikethrough") && "Strikethrough",
	(e) => e.hasFormat("subscript") && "Subscript",
	(e) => e.hasFormat("superscript") && "Superscript",
	(e) => e.hasFormat("underline") && "Underline",
	(e) => e.hasFormat("highlight") && "Highlight"
], bu = [
	(e) => e.hasTextFormat("bold") && "Bold",
	(e) => e.hasTextFormat("code") && "Code",
	(e) => e.hasTextFormat("italic") && "Italic",
	(e) => e.hasTextFormat("strikethrough") && "Strikethrough",
	(e) => e.hasTextFormat("subscript") && "Subscript",
	(e) => e.hasTextFormat("superscript") && "Superscript",
	(e) => e.hasTextFormat("underline") && "Underline",
	(e) => e.hasTextFormat("highlight") && "Highlight"
], xu = [(e) => e.isDirectionless() && "Directionless", (e) => e.isUnmergeable() && "Unmergeable"], Su = [(e) => e.isToken() && "Token", (e) => e.isSegmented() && "Segmented"];
function Cu(t, n, r, i, a = !1) {
	let o = t.getEditorState(), s = t._config, c = t._compositionKey, l = t._editable;
	if (r) {
		let e = "";
		return o.read(() => {
			e = function(e) {
				let t = document.createElement("div");
				return t.innerHTML = e.trim(), Nu(t, 0).innerHTML;
			}(kn(t));
		}, { editor: t }), e;
	}
	let u = " root\n", f = o.read(() => {
		let t = M();
		return wu(d(), (n, r, o) => {
			let s = `(${n.getKey()})`, c = n.getType() || "", l = n.isSelected(), d = o === void 0 ? "" : `[slot: ${o}] `, f = function(t, n) {
				return n === void 0 ? "" : N(t) && t.isShadowRoot() ? " [shadow-root]" : e(t) && !t.isInline() ? " [atomic decorator]" : "";
			}(n, o);
			u += `${l ? $.selectedLine : " "} ${r.join(" ")} ${s} ${d}${c}${f} ${function(e, t, n = !1) {
				let r = t ? t(e, n) : void 0;
				if (r !== void 0 && r.length > 0) return r;
				if (E(e)) {
					let t = e.getTextContent(), r = t.length === 0 ? "(empty)" : `"${Tu(t, n)}"`, i = function(e) {
						return [
							Ou(e),
							Eu(e),
							Du(e),
							Mu(e)
						].filter(Boolean).join(", ");
					}(e);
					return [r, i.length === 0 ? null : `{ ${i} }`].filter(Boolean).join(" ").trim();
				}
				if (X(e)) {
					let t = e.getURL(), r = t.length === 0 ? "(empty)" : `"${Tu(t, n)}"`, i = function(e) {
						return [
							ku(e),
							Au(e),
							ju(e),
							Mu(e)
						].filter(Boolean).join(", ");
					}(e);
					return [r, i.length === 0 ? null : `{ ${i} }`].filter(Boolean).join(" ").trim();
				}
				if (Ao(e)) return `ids: [ ${e.getIDs().join(", ")} ]`;
				if (st(e)) {
					let t = function(e) {
						let t = bu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
						return t !== "" && (t = "format: " + t), t;
					}(e), n = t === "" ? "" : `{ ${t} }`;
					return n += e.__style ? `(${e.__style})` : "", n;
				}
				return "";
			}(n, i, a)}\n`, u += function({ indent: e, isSelected: t, node: n, nodeKeyDisplay: r, selection: i, typeDisplay: a }) {
				if (!E(n) || !A(i) || !t || N(n)) return "";
				let o = i.anchor, s = i.focus;
				if (n.getTextContent() === "" || o.getNode() === i.focus.getNode() && o.offset === s.offset) return "";
				let [c, l] = function(e, t) {
					let n = t.getStartEndPoints();
					if (_(t) || n === null) return [-1, -1];
					let [r, i] = n, a = e.getTextContent(), o = a.length, s = -1, c = -1;
					if (r.type === "text" && i.type === "text") {
						let t = r.getNode(), n = i.getNode();
						t === n && e === t && r.offset !== i.offset ? [s, c] = r.offset < i.offset ? [r.offset, i.offset] : [i.offset, r.offset] : [s, c] = e === t ? t.isBefore(n) ? [r.offset, o] : [0, r.offset] : e === n ? n.isBefore(t) ? [i.offset, o] : [0, i.offset] : [0, o];
					}
					let l = (a.slice(0, s).match(vu) || []).length, u = (a.slice(s, c).match(vu) || []).length;
					return [s + l, c + l + u];
				}(n, i);
				if (c === l) return "";
				let u = e[e.length - 1] === $.hasNextSibling ? $.ancestorHasNextSibling : $.ancestorIsLastChild, d = [...e.slice(0, e.length - 1), u], f = Array(c + 1).fill(" "), p = Array(l - c).fill($.selectedChar), m = a.length + 2, h = Array(r.length + m).fill(" ");
				return [
					$.selectedLine,
					d.join(" "),
					[
						...h,
						...f,
						...p
					].join("")
				].join(" ") + "\n";
			}({
				indent: r,
				isSelected: l,
				node: n,
				nodeKeyDisplay: s,
				selection: t,
				typeDisplay: c
			});
		}), t === null ? ": null" : A(t) ? function(e) {
			let t = "", n = Ou(e), r = function(e) {
				let t = e;
				for (; t !== null;) {
					let e = Nt(t);
					if (e !== null) {
						let n = Ht(t);
						if (n !== null) return {
							host: n,
							name: e
						};
					}
					t = t.getParent() ?? Ht(t);
				}
				return null;
			}(e.anchor.getNode()), i = r === null ? "" : ` (in slot "${r.name}" of ${r.host.getType()} { key: ${r.host.getKey()} })`;
			t += `: range${i} ${n === "" ? "" : `{ ${n} }`} ${e.style === "" ? "" : `{ style: ${e.style} } `}`;
			let a = e.anchor, o = e.focus, s = a.offset, c = o.offset;
			return t += `\n  \u251c anchor { key: ${a.key}, offset: ${s === null ? "null" : s}, type: ${a.type} }`, t += `\n  \u2514 focus { key: ${o.key}, offset: ${c === null ? "null" : c}, type: ${o.type} }`, t;
		}(t) : J(t) ? function(e) {
			return `: table\n  \u2514 { table: ${e.tableKey}, anchorCell: ${e.anchor.key}, focusCell: ${e.focus.key} }`;
		}(t) : function(e) {
			return _(e) ? `: node\n  \u2514 [${Array.from(e._nodes).join(", ")}]` : "";
		}(t);
	}, { editor: t });
	if (u += "\n selection" + f, u += "\n\n commands:", n.length) for (let { index: e, type: t, payload: r } of n) u += `\n  \u2514 ${e}. { type: ${t}, payload: ${r instanceof Event ? r.constructor.name : r} }`;
	else u += "\n  └ None dispatched.";
	let { version: p } = t.constructor;
	return u += `\n\n editor${p ? ` (v${p})` : ""}:`, u += `\n  \u2514 namespace ${s.namespace}`, c !== null && (u += `\n  \u2514 compositionKey ${c}`), u += `\n  \u2514 editable ${String(l)}`, u;
}
function wu(t, n, r = []) {
	let i = [];
	for (let e of bt(t)) {
		let n = dt(t, e);
		n !== null && i.push([e, n]);
	}
	let a = N(t) ? t.getChildren() : [], o = i.length + a.length, s = 0;
	for (let [t, a] of i) {
		let i = s === o - 1;
		n(a, r.concat(i ? $.isLastChild : $.hasNextSibling), t), (N(a) || e(a)) && wu(a, n, r.concat(i ? $.ancestorIsLastChild : $.ancestorHasNextSibling)), s++;
	}
	for (let t of a) {
		let i = s === o - 1;
		n(t, r.concat(i ? $.isLastChild : $.hasNextSibling)), (N(t) || e(t)) && wu(t, n, r.concat(i ? $.ancestorIsLastChild : $.ancestorHasNextSibling)), s++;
	}
}
function Tu(e, t = !1) {
	let n = Object.entries(_u).reduce((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n)), e);
	return t ? n.replace(/[^\s]/g, "*") : n;
}
function Eu(e) {
	let t = xu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "detail: " + t), t;
}
function Du(e) {
	let t = Su.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "mode: " + t), t;
}
function Ou(e) {
	let t = yu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "format: " + t), t;
}
function ku(e) {
	let t = e.getTarget();
	return t != null && (t = "target: " + t), t;
}
function Au(e) {
	let t = e.getRel();
	return t != null && (t = "rel: " + t), t;
}
function ju(e) {
	let t = e.getTitle();
	return t != null && (t = "title: " + t), t;
}
function Mu(e) {
	if (!e.__state) return !1;
	let t = [];
	for (let [n, r] of e.__state.knownState.entries()) {
		if (n.isEqual(r, n.defaultValue)) continue;
		let e = JSON.stringify(n.unparse(r));
		t.push(`[${n.key}: ${e}]`);
	}
	let n = t.join(",");
	return n !== "" && (n = "state: " + n), n;
}
function Nu(e, t) {
	let n = Array(1 + t++).join("  "), r = Array(t - 1).join("  "), i;
	for (let a = 0; a < e.children.length; a++) i = document.createTextNode("\n" + n), e.insertBefore(i, e.children[a]), Nu(e.children[a], t), e.lastElementChild === e.children[a] && (i = document.createTextNode("\n" + r), e.appendChild(i));
	return e;
}
var Pu = /*#__PURE__*/ Fn(function({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: r, viewClassName: i, timeTravelPanelClassName: a, editorState: o, setEditorState: s, setEditorReadOnly: c, generateContent: l, commandsLog: u = [] }, d) {
	let [f, p] = L([]), [m, h] = L(""), [g, _] = L(!1), [v, y] = L(!1), b = I(0), x = I(null), [S, ee] = L(!1), [C, w] = L(!1), [T, te] = L(!1), ne = I(null), E = I([]), re = I(0), ie = P((e) => {
		let t = ++re.current;
		l(e).then((e) => {
			t === re.current && h(e);
		}).catch((e) => {
			t === re.current && h(`Error rendering tree: ${e.message}\n\nStack:\n${e.stack}`);
		});
	}, [l]);
	F(() => {
		if (!(!T && o._nodeMap.size > 1e3 && (w(!0), !T)) && (ne.current !== o || E.current !== u)) {
			let e = ne.current !== o;
			ne.current = o, E.current = u, ie(v), !g && e && p((e) => [...e, [Date.now(), o]]);
		}
	}, [
		o,
		ie,
		v,
		T,
		g,
		u
	]);
	let D = f.length;
	return F(() => {
		if (S) {
			let e, t = () => {
				let n = b.current;
				if (n === D - 1) return void ee(!1);
				let r = f[n][0], i = f[n + 1][0];
				e = setTimeout(() => {
					b.current++;
					let e = b.current, n = x.current;
					n !== null && (n.value = String(e)), s(f[e][1]), t();
				}, i - r);
			};
			return t(), () => {
				clearTimeout(e);
			};
		}
	}, [
		f,
		S,
		D,
		s
	]), z("div", {
		className: i,
		children: [
			!T && C ? /*#__PURE__*/ z("div", {
				style: { padding: 20 },
				children: [/*#__PURE__*/ R("span", {
					style: { marginRight: 20 },
					children: "Detected large EditorState, this can impact debugging performance."
				}), /*#__PURE__*/ R("button", {
					onClick: () => {
						te(!0);
					},
					style: {
						background: "transparent",
						border: "1px solid white",
						color: "white",
						cursor: "pointer",
						padding: 5
					},
					children: "Show full tree"
				})]
			}) : null,
			T ? null : /*#__PURE__*/ R("button", {
				onClick: () => (ie(!v), void y(!v)),
				className: e,
				type: "button",
				children: v ? "Tree" : "Export DOM"
			}),
			!g && (T || !C) && D > 2 && /*#__PURE__*/ R("button", {
				onClick: () => {
					c(!0), b.current = D - 1, _(!0);
				},
				className: t,
				type: "button",
				children: "Time Travel"
			}),
			(T || !C) && /*#__PURE__*/ R("pre", {
				ref: d,
				children: m
			}),
			g && (T || !C) && /*#__PURE__*/ z("div", {
				className: a,
				children: [
					/*#__PURE__*/ R("button", {
						className: r,
						onClick: () => {
							b.current === D - 1 && (b.current = 1), ee(!S);
						},
						type: "button",
						children: S ? "Pause" : "Play"
					}),
					/*#__PURE__*/ R("input", {
						className: n,
						ref: x,
						onChange: (e) => {
							let t = Number(e.target.value), n = f[t];
							n && (b.current = t, s(n[1]));
						},
						type: "range",
						min: "1",
						max: D - 1
					}),
					/*#__PURE__*/ R("button", {
						className: r,
						onClick: () => {
							c(!1);
							let e = f.length - 1, t = f[e];
							s(t[1]);
							let n = x.current;
							n !== null && (n.value = String(e)), _(!1), ee(!1);
						},
						type: "button",
						children: "Exit"
					})
				]
			})
		]
	});
});
function Fu(e, t) {
	let n = [], r = 0;
	for (let i of e._commands.keys()) n.push(e.registerCommand(i, (e) => {
		r += 1;
		let n = {
			index: r,
			payload: e,
			type: i.type ? i.type : "UNKNOWN"
		};
		return t((e) => [...e.slice(-9), n]), !1;
	}, 4));
	return () => n.forEach((e) => e());
}
function Iu(e) {
	let [t, n] = L([]);
	return F(() => Fu(e, n), [e]), t;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalTreeView.prod.mjs
function Lu({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: r, timeTravelPanelClassName: i, viewClassName: a, editor: o, customPrintNode: s }) {
	let c = /*#__PURE__*/ Mn.createRef(), [l, u] = L(o.getEditorState()), d = Iu(o);
	return F(() => Me(o.registerUpdateListener(({ editorState: e }) => {
		u(e);
	}), o.registerEditableListener(() => {
		u(o.getEditorState());
	})), [o]), F(() => {
		let e = c.current;
		if (e !== null) return e.__lexicalEditor = o, () => {
			e.__lexicalEditor = null;
		};
	}, [o, c]), R(Pu, {
		treeTypeButtonClassName: e,
		timeTravelButtonClassName: t,
		timeTravelPanelSliderClassName: n,
		timeTravelPanelButtonClassName: r,
		viewClassName: a,
		timeTravelPanelClassName: i,
		setEditorReadOnly: (e) => {
			let t = o.getRootElement();
			t != null && (t.contentEditable = e ? "false" : "true");
		},
		editorState: l,
		setEditorState: (e) => o.setEditorState(e),
		generateContent: async function(e) {
			return Cu(o, d, e, s);
		},
		ref: c,
		commandsLog: d
	});
}
//#endregion
//#region src/plugins/TreeViewPlugin/index.tsx
function Ru() {
	let [e] = vt();
	return /* @__PURE__ */ R(Lu, {
		viewClassName: "tree-view-output",
		treeTypeButtonClassName: "debug-treetype-button",
		timeTravelPanelClassName: "debug-timetravel-panel",
		timeTravelButtonClassName: "debug-timetravel-button",
		timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
		timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
		editor: e
	});
}
//#endregion
export { wa as $, Oo as A, J as At, uo as B, rr as Bt, as as C, Vr as Ct, Fo as D, Y as Dt, Ko as E, V as Et, wo as F, Lr as Ft, Ga as G, Qn as Gt, to as H, $n as Ht, xo as I, lr as It, Sa as J, xa as K, Xn as Kt, yo as L, tr as Lt, ko as M, Dr as Mt, jo as N, Ci as Nt, Go as O, Cr as Ot, No as P, Si as Pt, Aa as Q, So as R, nr as Rt, os as S, U as St, $o as T, ea as Tt, $a as U, B as Ut, lo as V, cr as Vt, Za as W, Zn as Wt, ja as X, ga as Y, Z, vs as _, Er as _t, tc as a, Hr as at, ds as b, fi as bt, nc as c, Gr as ct, Ks as d, Xi as dt, pa as et, As as f, Fr as ft, bs as g, oa as gt, xs as h, Pr as ht, ac as i, Nr as it, Mo as j, sa as jt, Ao as k, H as kt, ec as l, Yr as lt, Cs as m, Zi as mt, gu as n, ua as nt, Gs as o, zr as ot, ws as p, q as pt, X as q, Jn as qt, ul as r, da as rt, Us as s, Yi as st, Ru as t, ma as tt, Hs as u, qr as ut, gs as v, kr as vt, es as w, jr as wt, is as x, ca as xt, ms as y, G as yt, bo as z, ir as zt };
