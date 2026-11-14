import { $ as e, $n as t, A as n, Ar as r, B as i, Bn as a, C as o, Cr as s, Ct as c, D as l, Dn as u, Dr as d, E as f, En as p, Er as m, Et as h, F as g, Fr as _, Ft as v, Gn as y, Gr as b, Gt as x, H as S, Hn as C, Hr as w, Ht as T, I as E, It as D, J as ee, Jt as O, K as te, Kt as ne, Ln as k, M as re, Nr as ie, Nt as ae, O as oe, P as se, Pn as ce, Pt as le, Q as ue, Qn as de, Qr as fe, R as pe, Rr as me, Rt as he, S as ge, Sn as _e, Tn as ve, Tr as ye, Un as be, Ut as xe, V as Se, Vn as Ce, Vr as A, W as we, Wn as Te, Wt as Ee, X as De, Xn as Oe, Y as ke, Yn as Ae, Yr as je, Yt as Me, Z as Ne, Zn as Pe, Zr as Fe, Zt as Ie, _ as Le, _r as Re, _t as ze, a as Be, ar as Ve, b as He, bn as j, br as Ue, bt as We, cn as Ge, cr as Ke, dn as qe, dr as Je, en as Ye, et as Xe, f as Ze, fn as Qe, gn as $e, gr as et, h as tt, i as nt, ii as rt, jn as it, jt as at, kn as ot, kr as st, l as ct, ln as lt, lr as ut, m as dt, mr as ft, mt as pt, n as mt, ni as ht, o as gt, oi as _t, on as vt, or as yt, p as bt, pr as xt, q as St, qn as Ct, qr as wt, qt as M, ri as Tt, rn as Et, rr as Dt, s as Ot, sr as kt, t as At, ti as jt, tn as Mt, tr as Nt, tt as N, un as Pt, ur as Ft, vn as It, vr as Lt, vt as P, w as Rt, wn as zt, wr as Bt, wt as Vt, x as Ht, xn as Ut, xr as Wt, xt as Gt, yn as Kt, yt as qt, zn as Jt, zt as Yt } from "./Lexical.prod-DYDuARMX.mjs";
import { C as Xt, F as Zt, M as Qt, O as $t, a as en, f as tn, g as nn, i as rn, n as an, o as on, s as sn, t as cn, w as ln } from "./LexicalUtils.prod-D2Igim2c.mjs";
import { B as un, H as dn, I as fn, K as pn, M as mn, R as hn, V as gn, c as _n, d as vn, f as yn, h as bn, j as xn, l as Sn, m as Cn, n as wn, s as Tn, u as En, v as Dn, x as On, y as kn } from "./ContentEditable-BaXBKC3m.mjs";
import { t as An } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import * as jn from "react";
import { Suspense as Mn, createContext as Nn, forwardRef as Pn, startTransition as Fn, useCallback as F, useContext as In, useEffect as I, useLayoutEffect as Ln, useMemo as Rn, useRef as L, useState as R } from "react";
import { Fragment as zn, jsx as z, jsxs as B } from "react/jsx-runtime";
import * as Bn from "react-dom";
import Vn, { createPortal as Hn, flushSync as Un } from "react-dom";
kn.tag("h1", "h2", "h3", "h4", "h5", "h6"), kn.tag("blockquote"), kn.tag("blockquote"), kn.tag("p"), kn.tag("span");
var Wn = /* @__PURE__ */ Ht("DRAG_DROP_PASTE_FILE"), Gn = /* @__PURE__ */ Dt("shadowRoot", { parse: Boolean }), Kn = class e extends dt {
	static getType() {
		return "quote";
	}
	static clone(t) {
		return new e(t.__key);
	}
	$config() {
		return this.config("quote", {
			extends: dt,
			stateConfigs: [{
				flat: !0,
				stateConfig: Gn
			}]
		});
	}
	isShadowRoot() {
		return je(this, Gn);
	}
	setIsShadowRoot(e) {
		return at(this, Gn, e);
	}
	createDOM(e) {
		let t = M().createElement("blockquote");
		return A(t, e.theme.quote), t;
	}
	updateDOM(e, t) {
		return !1;
	}
	static importDOM() {
		return { blockquote: (e) => ({
			conversion: Qn,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (_e(t)) {
			this.isEmpty() && t.append(M().createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return qn().updateFromJSON(e);
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
function qn(e) {
	let t = gt(new Kn());
	return e && e.shadowRoot ? t.setIsShadowRoot(!0) : t;
}
function Jn(e) {
	return e instanceof Kn;
}
var Yn = class e extends dt {
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
		let t = this.__tag, n = M().createElement(t), r = e.theme.heading;
		if (r !== void 0) {
			let e = r[t];
			A(n, e);
		}
		return n;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag;
	}
	static importDOM() {
		return {
			h1: (e) => ({
				conversion: Zn,
				priority: 0
			}),
			h2: (e) => ({
				conversion: Zn,
				priority: 0
			}),
			h3: (e) => ({
				conversion: Zn,
				priority: 0
			}),
			h4: (e) => ({
				conversion: Zn,
				priority: 0
			}),
			h5: (e) => ({
				conversion: Zn,
				priority: 0
			}),
			h6: (e) => ({
				conversion: Zn,
				priority: 0
			}),
			p: (e) => {
				let t = e.firstChild;
				return t !== null && Xn(t) ? {
					conversion: () => ({ node: null }),
					priority: 3
				} : null;
			},
			span: (e) => Xn(e) ? {
				conversion: (e) => ({ node: $n("h1") }),
				priority: 3
			} : null
		};
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (_e(t)) {
			this.isEmpty() && t.append(M().createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return $n(e.tag).updateFromJSON(e);
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
		let n = e ? e.anchor.offset : 0, i = this.getLastDescendant(), a = !i || e && e.anchor.key === i.getKey() && n === i.getTextContentSize() || !e ? r() : $n(this.getTag()), o = this.getDirection();
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
function Xn(e) {
	return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function Zn(e) {
	let t = e.nodeName.toLowerCase(), n = null;
	return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6" || (n = $n(t), bt(e, n), He(n, e), ze(n, e)), { node: n };
}
function Qn(e) {
	let t = qn();
	return He(t, e), bt(e, t), ze(t, e), { node: t };
}
function $n(e = "h1") {
	return gt(new Yn(e));
}
function er(e) {
	return e instanceof Yn;
}
function tr(t) {
	return e(Me(t));
}
function nr(e, t, n, r) {
	let i = !1, a = null;
	if (e.isCollapsed() && e.anchor.type === "text") {
		let t = e.anchor.getNode();
		if (O(t)) {
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
			if (!(i && a && O(a) && a.hasFormat(r))) continue;
			o = !0;
		}
		e.hasFormat(r) && e.toggleFormat(r);
	}
	o && e.setStyle("");
}
var rr = {
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
function ir(e, t) {
	return function(e, t) {
		if (!e.isCollapsed()) return !1;
		let n = x(e.focus, t), r = i(n.origin, Xe);
		if (!r) return !1;
		let a = e.focus.getNode();
		if (!r.is(a) && !nt(a, r)) return !1;
		let o = oe(n, Ze(r, t));
		if (o.getTextSlices().some((e) => e && e.getTextContentSize() > 0)) return !1;
		let s = oe(o.anchor.getSiblingCaret(), o.focus), c = s.anchor.origin;
		for (let e of s) {
			if (!w(e) || !e.origin.is(c.getParent())) return !1;
			c = e.origin;
		}
		let l = r;
		for (let e of v(Ze(r, t))) {
			if (!e.origin.is(l.getParent())) {
				if (he(e.origin)) {
					let e = Ze(l, t);
					return Ye(oe(e, e)), !0;
				}
				break;
			}
			if (!Xe(e.origin)) break;
			l = e.origin;
		}
		return !1;
	}(e, t) || function(e, t) {
		if (!e.isCollapsed() || e.anchor.type !== "element") return !1;
		let n = x(e.anchor, t).getNodeAtCaret();
		return !(!Xe(n) || n.isInline() || (Ye(At(Bt(Ne(n, t)))), 0));
	}(e, t);
}
function ar(t) {
	return e(t) && !t.isInline() && !t.isIsolated() && t.isKeyboardSelectable();
}
function or(e) {
	let t = Gt();
	t.add(e), p(t);
}
function sr(e, t) {
	if (!e.isCollapsed()) return !1;
	let n = e.focus, r = n.getNode(), a = t ? "previous" : "next", o = x(n, a);
	if (n.type === "element" && P(r) && (Tt(r) || Xe(r))) {
		let e = o.getNodeAtCaret();
		return !(e === null || !ar(e)) && (or(e.__key), !0);
	}
	let s = i(P(r) ? r : r.getParentOrThrow(), (e) => P(e) && !e.isInline() && ee(e.getParent()));
	if (s === null) return !1;
	let c = Ze(s, a).getNodeAtCaret();
	if (c === null || !ar(c)) return !1;
	if (s.getTextContentSize() === 0) return or(c.__key), !0;
	let l = Ot().getRootElement();
	if (l === null) return !1;
	let u = re(l.ownerDocument.defaultView);
	if (u === null || u.rangeCount === 0) return !1;
	let d = u.anchorNode, f = u.anchorOffset, p = u.focusNode, m = u.focusOffset;
	u.modify("move", t ? "backward" : "forward", "line");
	let h = u.anchorNode, g = u.anchorOffset;
	if (h === null) return cr(u, d, f, p, m), !1;
	let _ = Me(h);
	return cr(u, d, f, p, m), _ !== null && (h === d && g === f || !_.is(s) && !nt(_, s)) && (or(c.__key), !0);
}
function cr(e, t, n, r, i) {
	t !== null && r !== null && e.setBaseAndExtent(t, n, r, i);
}
function lr(e, t) {
	if (!e.isCollapsed()) return !1;
	let n = e.focus.getNode(), r = i(P(n) ? n : n.getParentOrThrow(), (e) => P(e) && !e.isInline());
	if (r === null) return !1;
	let a = Ot(), o = a.getRootElement();
	if (o === null) return !1;
	let s = o.ownerDocument.defaultView;
	if (s === null) return !1;
	let c = !1;
	for (let e of r.getChildren()) if (P(e) && e.isInline()) {
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
	let l = Ze(r, t ? "previous" : "next").getNodeAtCaret();
	if (l === null || !P(l)) {
		if (t) {
			let e = r.getFirstDescendant();
			O(e) ? e.select(0, 0) : r.select(0, 0);
		} else {
			let e = r.getLastDescendant();
			if (O(e)) {
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
	let d = re(s);
	if (d === null || d.rangeCount === 0) return !1;
	let f = d.getRangeAt(0).cloneRange();
	f.collapse(!0);
	let p = f.getBoundingClientRect(), m = u.getBoundingClientRect(), h = m.top + m.height / 2;
	if (p.height > 0) {
		let t = Cn(p.left, h, o);
		if (t !== null && u.contains(t.node)) {
			let n = o.ownerDocument.createRange();
			return n.setStart(t.node, t.offset), n.collapse(!0), e.applyDOMRange(n), e.dirty = !0, !0;
		}
	}
	let g = t ? l.getLastDescendant() : l.getFirstDescendant();
	if (O(g)) {
		let e = t ? g.getTextContentSize() : 0;
		g.select(e, e);
	} else {
		let e = l.getChildrenSize();
		l.select(t ? e : 0, t ? e : 0);
	}
	return !0;
}
function ur(e, t) {
	let n = Ze(e, t), r = n.getAdjacentCaret();
	r !== null && P(r.origin) && !r.origin.isInline() && r.origin.isShadowRoot() ? Ye(At(n)) : t === "next" ? e.selectNext(0, 0) : e.selectPrevious();
}
function dr(e, t, n) {
	n.preventDefault(), n.stopPropagation();
	let r = e.getNodes();
	if (r.length === 0) return !0;
	let a = r.map((e) => Ze(e, "next")).sort(be), o = (t ? a[0] : a[a.length - 1]).origin, s = i(o, (e) => e !== o && P(e) && !e.isInline()) ?? d(), c = t ? 0 : s.getChildrenSize();
	return s.select(c, c), !0;
}
function fr(t, r = un(rr)) {
	return Ae(t.registerCommand(te, () => {
		let e = N();
		return _(e) ? (e.clear(), !0) : (j(e) && nr(e, "click", "both", r.peek()), !1);
	}, 0), t.registerCommand(D, (e) => {
		let t = N();
		return j(t) ? (t.deleteCharacter(e), !0) : !!_(t) && (t.deleteNodes(), !0);
	}, 0), t.registerCommand(et, (e) => {
		let t = N();
		return !!j(t) && (t.deleteWord(e), !0);
	}, 0), t.registerCommand(Ie, (e) => {
		let t = N();
		return !!j(t) && (t.deleteLine(e), !0);
	}, 0), t.registerCommand(Se, (e) => {
		let n = N();
		if (typeof e == "string") n !== null && n.insertText(e);
		else {
			if (n === null) return !1;
			let r = e.dataTransfer;
			if (r != null) bn(r, n, t);
			else if (j(n)) {
				let t = e.data;
				return t && n.insertText(t), !0;
			}
		}
		return !0;
	}, 0), t.registerCommand(Yt, () => {
		let e = N();
		return !!j(e) && (e.removeText(), !0);
	}, 0), t.registerCommand(Rt, (e) => {
		let t = N();
		return !(!j(t) && !_(t)) && (a(t, e), !0);
	}, 0), t.registerCommand(ne, (e) => {
		let t = N();
		return !(!j(t) && !_(t)) && (ve(t, e), !0);
	}, 0), t.registerCommand(Nt, (e) => {
		let t = N();
		if (!j(t) && !_(t)) return !1;
		let n = t.getNodes();
		for (let t of n) {
			let n = i(t, (e) => P(e) && !e.isInline());
			n !== null && n.setFormat(e);
		}
		return !0;
	}, 0), t.registerCommand(mt, (e) => {
		let t = N();
		return !!j(t) && (t.insertLineBreak(e), !0);
	}, 0), t.registerCommand(n, () => {
		let e = N();
		return !!j(e) && (e.insertParagraph(), !0);
	}, 0), t.registerCommand(ce, () => {
		let e = st(), t = N();
		return j(t) && (e.setFormat(t.format), e.setStyle(t.style)), we([e]), !0;
	}, 0), t.registerCommand(vt, () => cn((e) => {
		let t = e.getIndent();
		e.setIndent(t + 1);
	}), 0), t.registerCommand(xt, () => cn((e) => {
		let t = e.getIndent();
		t > 0 && e.setIndent(Math.max(0, t - 1));
	}), 0), t.registerCommand(s, (e) => {
		let t = N();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), ur(n[0], "previous"), !0;
		} else if (j(t) && (!e.shiftKey && ir(t, "previous") || !e.shiftKey && sr(t, !0) || !e.shiftKey && lr(t, !0))) return e.preventDefault(), !0;
		return !1;
	}, 0), t.registerCommand(de, (e) => {
		let t = N();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), ur(n[0], "next"), !0;
		} else if (j(t) && (function(e) {
			let t = e.focus;
			return t.key === "root" && t.offset === d().getChildrenSize();
		}(t) || !e.shiftKey && ir(t, "next") || !e.shiftKey && sr(t, !1) || !e.shiftKey && lr(t, !1))) return e.preventDefault(), !0;
		return !1;
	}, 0), t.registerCommand(Ft, (e) => {
		let t = N();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), ur(n[0], $t(n[0]) ? "next" : "previous"), !0;
		}
		if (!j(t)) return !1;
		if (!e.shiftKey && ir(t, $t(t.anchor.getNode()) ? "next" : "previous")) return e.preventDefault(), !0;
		if (e.shiftKey || nr(t, "arrow", "start", r.peek()), Zt(t, !0)) {
			let n = e.shiftKey;
			return e.preventDefault(), Qt(t, n, !0), !0;
		}
		return !1;
	}, 0), t.registerCommand(u, (e) => {
		let t = N();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), ur(n[0], $t(n[0]) ? "previous" : "next"), !0;
		}
		if (!j(t)) return !1;
		if (!e.shiftKey && ir(t, $t(t.anchor.getNode()) ? "previous" : "next")) return e.preventDefault(), !0;
		if (e.shiftKey || nr(t, "arrow", "end", r.peek()), Zt(t, !1)) {
			let n = e.shiftKey;
			return e.preventDefault(), Qt(t, n, !1), !0;
		}
		return !1;
	}, 0), t.registerCommand(ie, (e) => {
		let n = N();
		if (!_(n) && tr(e.target)) return !1;
		if (j(n)) {
			if (function(e) {
				if (!e.isCollapsed()) return !1;
				let { anchor: t } = e;
				if (t.offset !== 0) return !1;
				let n = t.getNode();
				if (Tt(n)) return !1;
				let r = on(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(n)) return e.preventDefault(), t.dispatchCommand(xt, void 0);
			if (Oe && Wt) return !1;
		} else if (!_(n)) return !1;
		return e.preventDefault(), t.dispatchCommand(D, !0);
	}, 0), t.registerCommand(zt, (e) => {
		let n = N();
		return !(!_(n) && tr(e.target)) && !(!j(n) && !_(n)) && (e.preventDefault(), t.dispatchCommand(D, !1));
	}, 0), t.registerCommand(Kt, (i) => {
		let a = N();
		if (_(a)) {
			let t = a.getNodes();
			t.length === 1 && e(t[0]) && !t[0].isInline() && (a = t[0].selectNext());
		}
		if (!j(a)) return !1;
		if (nr(a, "enter", "both", r.peek()), i !== null) {
			if ((Oe || lt || Ut) && Wt) return !1;
			if (i.preventDefault(), i.shiftKey) return t.dispatchCommand(mt, !1);
		}
		return t.dispatchCommand(n, void 0);
	}, 0), t.registerCommand(it, () => !!j(N()) && (t.blur(), !0), 0), t.registerCommand(fe, (e) => {
		let [, n] = rn(e);
		if (n.length > 0) {
			let r = e.clientX, i = e.clientY, a = Cn(r, i, t.getRootElement());
			if (a !== null) {
				let { offset: e, node: r } = a, i = Me(r);
				if (i !== null) {
					let t = tt();
					if (O(i)) t.anchor.set(i.getKey(), e, "text"), t.focus.set(i.getKey(), e, "text");
					else {
						let e = i.getParentOrThrow().getKey(), n = i.getIndexWithinParent() + 1;
						t.anchor.set(e, n, "element"), t.focus.set(e, n, "element");
					}
					p(pe(t));
				}
				t.dispatchCommand(Wn, n);
			}
			return e.preventDefault(), !0;
		}
		return yn(e, t);
	}, 0), t.registerCommand(wt, (e) => {
		let [n] = rn(e), r = N();
		return !(n && !j(r)) && (j(r) && !r.isCollapsed() && e.dataTransfer !== null && (vn(e.dataTransfer, En(r)), Dn(e.dataTransfer, t)), !0);
	}, 0), t.registerCommand(ct, (n) => {
		let [r] = rn(n), i = N();
		if (r && !j(i)) return !1;
		let a = n.clientX, o = n.clientY, s = Cn(a, o, t.getRootElement());
		return s !== null && e(Me(s.node)) && n.preventDefault(), !0;
	}, 0), t.registerCommand(Ct, () => {
		let e = N();
		return Fe(j(e) && ye(e.anchor.getNode()) !== null ? e : null), !0;
	}, 0), t.registerCommand(me, (e) => (_n(t, sn(e, ClipboardEvent) ? e : null), !0), 0), t.registerCommand(ae, (e) => (async function(e, t) {
		await _n(t, sn(e, ClipboardEvent) ? e : null), t.update(() => {
			let e = N();
			j(e) ? e.removeText() : _(e) && e.getNodes().forEach((e) => e.remove());
		}, { tag: "cut" });
	}(e, t), !0), 0), t.registerCommand(Te, (e) => {
		let [, n, r] = rn(e);
		return n.length > 0 && !r ? (t.dispatchCommand(Wn, n), !0) : k(e.target) && b(e.target) ? !1 : N() !== null && (function(e, t) {
			e.preventDefault(), t.update(() => {
				let n = N(), r = sn(e, InputEvent) || sn(e, KeyboardEvent) ? null : e.clipboardData;
				r != null && n !== null && bn(r, n, t);
			}, { tag: "paste" });
		}(e, t), !0);
	}, 0), t.registerCommand(Qe, () => {
		let e = N();
		return j(e) && nr(e, "space", "both", r.peek()), !1;
	}, 0), t.registerCommand(Jt, () => {
		let e = N();
		return j(e) && nr(e, "tab", "both", r.peek()), !1;
	}, 0), t.registerCommand(kt, (t) => {
		let n = N();
		if (_(n)) return dr(n, !1, t);
		if (!j(n)) return !1;
		let { anchor: r } = n;
		if (r.type !== "element" || r.offset !== 0) return !1;
		let i = r.getNode();
		if (!P(i)) return !1;
		let a = i.getFirstChild();
		if (!e(a) || !a.isInline()) return !1;
		let o = i.getKey(), s = i.selectEnd();
		return t.shiftKey && s.anchor.set(o, 0, "element"), t.preventDefault(), t.stopPropagation(), !0;
	}, 0), t.registerCommand(Ue, (t) => {
		let n = N();
		if (_(n)) return dr(n, !0, t);
		if (!j(n)) return !1;
		let { anchor: r, focus: a } = n, o = i(a.getNode(), (e) => P(e) && !e.isInline());
		if (o === null) return !1;
		let s = o.getFirstChild();
		if (!e(s) || !s.isInline() || i(r.getNode(), (e) => P(e) && !e.isInline()) !== o) return !1;
		let c = o.getKey();
		return (a.type !== "element" || a.key !== c || a.offset !== 0) && (n.focus.set(c, 0, "element"), t.shiftKey || n.anchor.set(c, 0, "element"), t.preventDefault(), t.stopPropagation(), !0);
	}, 0));
}
//#endregion
//#region node_modules/@lexical/table/dist/LexicalTable.prod.mjs
var pr = /^(\d+(?:\.\d+)?)px$/, V = {
	BOTH: 3,
	COLUMN: 2,
	NO_STATUS: 0,
	ROW: 1
}, mr = class e extends dt {
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
				conversion: gr,
				priority: 0
			}),
			th: (e) => ({
				conversion: gr,
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
		let t = M().createElement(this.getTag());
		return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), hr(this.__verticalAlign) && (t.style.verticalAlign = this.__verticalAlign), A(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
	}
	exportDOM(e) {
		let t = super.exportDOM(e);
		if (_e(t.element)) {
			let e = t.element;
			e.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), e.style.border = "1px solid black", this.__colSpan > 1 && (e.colSpan = this.__colSpan), this.__rowSpan > 1 && (e.rowSpan = this.__rowSpan), e.style.width = `${this.getWidth() || 75}px`, e.style.verticalAlign = this.getVerticalAlign() || "top", e.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (e.style.backgroundColor = "#f2f3f5");
		}
		return t;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			...hr(this.__verticalAlign) && { verticalAlign: this.__verticalAlign },
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
function hr(e) {
	return e === "middle" || e === "bottom";
}
function gr(e) {
	let t = e, n = e.nodeName.toLowerCase(), i;
	pr.test(t.style.width) && (i = parseFloat(t.style.width));
	let a = V.NO_STATUS;
	if (n === "th") {
		let e = t.getAttribute("scope");
		if (e === "col") a = V.COLUMN;
		else if (e === "row") a = V.ROW;
		else {
			let e = t.parentElement, n = _e(e) && e.nodeName.toLowerCase() === "tr" && _e(e.parentElement) && (e.parentElement.nodeName.toLowerCase() === "thead" || e.rowIndex === 0), r = t.cellIndex === 0;
			n && (a |= V.ROW), r && (a |= V.COLUMN), a === V.NO_STATUS && (a = V.ROW);
		}
	}
	let o = H(a, t.colSpan, i);
	o.__rowSpan = t.rowSpan;
	let s = t.style.backgroundColor;
	s !== "" && (o.__backgroundColor = s);
	let c = t.style.verticalAlign;
	hr(c) && (o.__verticalAlign = c);
	let l = t.style, u = (l && l.textDecoration || "").split(" "), d = l.fontWeight === "700" || l.fontWeight === "bold", f = u.includes("line-through"), p = l.fontStyle === "italic", m = u.includes("underline"), h = l.color;
	return {
		after: (e) => {
			let t = [], n = null, i = () => {
				if (n) {
					let e = n.getFirstChild();
					Re(e) && n.getChildrenSize() === 1 && e.remove();
				}
			};
			for (let a of e) if (ge(a) || O(a) || Re(a)) {
				if (O(a) && (d && a.toggleFormat("bold"), f && a.toggleFormat("strikethrough"), p && a.toggleFormat("italic"), m && a.toggleFormat("underline"), h)) {
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
	return gt(new mr(e, t, n));
}
function U(e) {
	return e instanceof mr;
}
var _r = /* @__PURE__ */ Ht("INSERT_TABLE_COMMAND");
function W(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var vr = class e extends dt {
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
			conversion: yr,
			priority: 0
		}) };
	}
	static importJSON(e) {
		return br().updateFromJSON(e);
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
		let t = M().createElement("tr");
		return this.__height && (t.style.height = `${this.__height}px`), A(t, e.theme.tableRow), t;
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
function yr(e) {
	let t = e, n;
	return pr.test(t.style.height) && (n = parseFloat(t.style.height)), {
		after: (e) => tn(e, U),
		node: br(n)
	};
}
function br(e) {
	return gt(new vr(e));
}
function G(e) {
	return e instanceof vr;
}
function xr(e, t, n = !0) {
	let i = Gi();
	for (let a = 0; a < e; a++) {
		let e = br();
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
function Sr(e) {
	let t = i(e, (e) => U(e));
	return U(t) ? t : null;
}
function Cr(e) {
	let t = i(e, (e) => G(e));
	if (G(t)) return t;
	throw Error("Expected table cell to be inside of table row.");
}
function wr(e) {
	let t = i(e, (e) => Y(e));
	if (Y(t)) return t;
	throw Error("Expected table cell to be inside of table.");
}
function Tr(e) {
	let t = Cr(e);
	return wr(t).getChildren().findIndex((e) => e.is(t));
}
function Er(e) {
	return Cr(e).getChildren().findIndex((t) => t.is(e));
}
var Dr = (e, t) => e === V.BOTH || e === t ? t : V.NO_STATUS;
function Or(e = !0) {
	let t = N();
	j(t) || J(t) || W(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = q(n), [a, , o] = q(r), [, s, c] = K(o, a, i), { startRow: l } = c, { startRow: u } = s;
	return e ? kr(l + i.__rowSpan > u + a.__rowSpan ? i : a, !0) : kr(u < l ? a : i, !1);
}
function kr(e, t = !0) {
	let [, , n] = q(e), [i, a] = K(n, e, e), o = i[0].length, { startRow: s } = a, c = null;
	if (t) {
		let t = s + e.__rowSpan - 1, a = i[t], l = br();
		for (let e = 0; e < o; e++) {
			let { cell: n, startRow: i } = a[e];
			if (i + n.__rowSpan - 1 <= t) {
				let t = a[e].cell.__headerState, n = Dr(t, V.COLUMN);
				l.append(H(n).append(r()));
			} else n.setRowSpan(n.__rowSpan + 1);
		}
		let u = n.getChildAtIndex(t);
		G(u) || W(256), u.insertAfter(l), c = l;
	} else {
		let e = s, t = i[e], a = br();
		for (let n = 0; n < o; n++) {
			let { cell: i, startRow: o } = t[n];
			if (o === e) {
				let e = t[n].cell.__headerState, i = Dr(e, V.COLUMN);
				a.append(H(i).append(r()));
			} else i.setRowSpan(i.__rowSpan + 1);
		}
		let l = n.getChildAtIndex(e);
		G(l) || W(257), l.insertBefore(a), c = a;
	}
	return c;
}
function Ar(e = !0) {
	let t = N();
	j(t) || J(t) || W(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = q(n), [a, , o] = q(r), [, s, c] = K(o, a, i), { startColumn: l } = c, { startColumn: u } = s;
	return e ? jr(l + i.__colSpan > u + a.__colSpan ? i : a, !0) : jr(u < l ? a : i, !1);
}
function jr(e, t = !0, n = !0) {
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
		let t = a[e], n = t[l < 0 ? 0 : l].cell.__headerState, r = Dr(n, V.ROW);
		if (l < 0) {
			Fr(p, f(r));
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
	d !== null && n && Pr(d);
	let m = i.getColWidths();
	if (m) {
		let e = [...m], t = l < 0 ? 0 : l, n = e[t];
		e.splice(t, 0, n), i.setColWidths(e);
	}
	return d;
}
function Mr() {
	let e = N();
	j(e) || J(e) || W(188);
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
					r === null ? Fr(m, n) : r.insertAfter(n);
				}
			}
		}
		let t = i.getChildAtIndex(e);
		G(t) || W(206, String(e)), t.remove();
	}
	if (p !== void 0) {
		let { cell: e } = p[0];
		Pr(e);
	} else {
		let { cell: e } = o[l - 1][0];
		Pr(e);
	}
}
function Nr() {
	let e = N();
	j(e) || J(e) || W(188);
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
		Pr(e);
	} else {
		let { cell: e } = d < l ? g[d - 1] : g[l - 1];
		Pr(e);
	}
	let v = i.getColWidths();
	if (v) {
		let e = [...v];
		e.splice(f, m), i.setColWidths(e);
	}
}
function Pr(e) {
	let t = e.getFirstDescendant();
	t == null ? e.selectStart() : t.getParentOrThrow().selectStart();
}
function Fr(e, t) {
	let n = e.getFirstChild();
	n === null ? e.append(t) : n.insertBefore(t);
}
function Ir(e) {
	if (e.length === 0) return null;
	let [t] = Br(wr(e[0]), null, null), n = Infinity, i = -Infinity, a = Infinity, o = -Infinity, s = /* @__PURE__ */ new Set();
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
		f.has(a) || (f.add(a), Lr(i) || d.append(...i.getChildren()), i.remove());
	}
	return d.getChildrenSize() === 0 && d.append(r()), d;
}
function Lr(e) {
	if (e.getChildrenSize() !== 1) return !1;
	let t = e.getFirstChildOrThrow();
	return !(!ot(t) || !t.isEmpty());
}
function Rr() {
	let e = N();
	j(e) || J(e) || W(188);
	let t = i(e.anchor.getNode(), U);
	return U(t) || W(148), zr(t);
}
function zr(e) {
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
			if (c === null) for (let n = a - 1; n >= 0; n--) Fr(e, H(f[n] | m[t]).append(r()));
			else for (let e = a - 1; e >= 0; e--) c.insertAfter(H(f[e] | m[t]).append(r()));
		}
		t.setRowSpan(1);
	}
}
function K(e, t, n) {
	let [r, i, a] = Br(e, t, n);
	return i === null && W(207), a === null && W(208), [
		r,
		i,
		a
	];
}
function Br(e, t, n) {
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
	if (e instanceof mr) t = e;
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
function Vr(e, t, n) {
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
function Hr(e) {
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
function Ur(e, t) {
	let n = t.getStartEndPoints(), a = J(t);
	if (n === null) return !1;
	let [o, s] = n, [c, l, u] = q(o), d = i(s.getNode(), (e) => U(e));
	if (!(U(c) && U(d) && G(l) && Y(u))) return !1;
	let [f, p, m] = K(u, c, d), [h] = Br(e, null, null), g = f.length, _ = g > 0 ? f[0].length : 0, v = p.startRow, y = p.startColumn, b = h.length, x = b > 0 ? h[0].length : 0;
	if (a) {
		let e = Vr(f, p, m), t = e.maxRow - e.minRow + 1, n = e.maxColumn - e.minColumn + 1;
		v = e.minRow, y = e.minColumn, b = Math.min(b, t), x = Math.min(x, n);
	}
	let S = !1, C = Math.min(g, v + b) - 1, w = Math.min(_, y + x) - 1, T = /* @__PURE__ */ new Set();
	for (let e = v; e <= C; e++) for (let t = y; t <= w; t++) {
		let n = f[e][t];
		T.has(n.cell.getKey()) || n.cell.__rowSpan === 1 && n.cell.__colSpan === 1 || (zr(n.cell), T.add(n.cell.getKey()), S = !0);
	}
	let [E] = Br(u.getWritable(), null, null), D = b - g + v;
	for (let e = 0; e < D; e++) kr(E[g - 1][0].cell);
	let ee = x - _ + y;
	for (let e = 0; e < ee; e++) jr(E[0][_ - 1].cell, !0, !1);
	[E] = Br(u.getWritable(), null, null);
	for (let e = v; e < v + b; e++) for (let t = y; t < y + x; t++) {
		let n = e - v, i = t - y, a = h[n][i];
		if (a.startRow !== n || a.startColumn !== i) continue;
		let o = a.cell;
		if (o.__rowSpan !== 1 || o.__colSpan !== 1) {
			let n = [], r = Math.min(e + o.__rowSpan, v + b) - 1, i = Math.min(t + o.__colSpan, y + x) - 1;
			for (let a = e; a <= r; a++) for (let e = t; e <= i; e++) {
				let t = E[a][e];
				n.push(t.cell);
			}
			Ir(n), S = !0;
		}
		let { cell: s } = E[e][t], c = o.getBackgroundColor();
		c != null && s.setBackgroundColor(c);
		let l = s.getChildren();
		o.getChildren().forEach((e) => {
			O(e) && r().append(e), s.append(e);
		}), l.forEach((e) => e.remove());
	}
	if (a && S) {
		let [e] = Br(u.getWritable(), null, null);
		e[p.startRow][p.startColumn].cell.selectEnd();
	}
	return !0;
}
function Wr(e) {
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
var Gr = class e {
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
		let e = T(this.tableKey), t = T(this.anchor.key), n = T(this.focus.key);
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
		return new e(this.tableKey, Je(this.anchor.key, this.anchor.offset, this.anchor.type), Je(this.focus.key, this.focus.offset, this.focus.type));
	}
	isCollapsed() {
		return !1;
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {
		if (e === "") return;
		let t = (e.endsWith("\n") ? e.slice(0, -1) : e).split("\n").map((e) => e.split("	")), n = Gi();
		for (let e of t) {
			let t = br();
			for (let n of e) {
				let e = H(V.NO_STATUS), i = r();
				n && i.append(l(n)), e.append(i), t.append(e);
			}
			n.append(t);
		}
		let { anchorCell: i } = Wr(this);
		Ur(n, i.select(0, i.getChildrenSize()));
	}
	insertText() {}
	hasFormat(e) {
		let t = 0;
		this.getNodes().filter(U).forEach((e) => {
			let n = e.getFirstChild();
			ot(n) && (t |= n.getTextFormat());
		});
		let n = jt[e];
		return (t & n) !== 0;
	}
	insertNodes(e) {
		let t = this.focus.getNode();
		P(t) || W(151), pe(t.select(0, t.getChildrenSize())).insertNodes(e);
	}
	getShape() {
		let { anchorCell: e, focusCell: t } = Wr(this), n = Hr(e);
		n === null && W(153);
		let r = Hr(t);
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
		let { anchorTable: t, anchorCell: n, focusCell: r } = Wr(this), i = r.getParents()[1];
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
		let [a, o, s] = K(t, n, r), { minColumn: c, maxColumn: l, minRow: u, maxRow: d } = Vr(a, o, s), f = /* @__PURE__ */ new Map([[t.getKey(), t]]), p = null;
		for (let e = u; e <= d; e++) for (let t = c; t <= l; t++) {
			let { cell: n } = a[e][t], r = n.getParent();
			G(r) || W(160), r !== p && (f.set(r.getKey(), r), p = r), f.has(n.getKey()) || Jr(n, (e) => {
				f.set(e.getKey(), e);
			});
		}
		let m = Array.from(f.values());
		return qe() || (this._cachedNodes = m), m;
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
	return e instanceof Gr;
}
function Kr() {
	return new Gr("root", Je("root", 0, "element"), Je("root", 0, "element"));
}
function qr(e, t, n) {
	e.getKey(), t.getKey(), n.getKey();
	let r = N(), i = J(r) ? r.clone() : Kr();
	return i.set(e.getKey(), t.getKey(), n.getKey()), i;
}
function Jr(e, t) {
	let n = [[e]];
	for (let e = n.at(-1); e !== void 0 && n.length > 0; e = n.at(-1)) {
		let r = e.pop();
		r === void 0 ? n.pop() : !1 !== t(r) && P(r) && n.push(r.getChildren());
	}
}
function Yr(e, t = Ot()) {
	let n = T(e);
	Y(n) || W(231, e);
	let r = ri(n, t.getElementByKey(e));
	return r === null && W(232, e), {
		tableElement: r,
		tableNode: n
	};
}
var Xr = class {
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
			let r = T(t);
			Y(r) ? e.push([r, n]) : this.removeObserver(t);
		}
		return e;
	}
}, Zr = class {
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
		return Yr(this.tableNodeKey, this.editor);
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
				this.table = gi(n, r);
			});
		});
		this.editor.read("latest", () => {
			let { tableNode: t, tableElement: n } = this.$lookup();
			this.table = gi(t, n), e.observe(n, {
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
		_i(t, gi(n, r), null), e && N() !== null && (p(null), t.dispatchCommand(g, void 0));
	}
	$enableHighlightStyle() {
		let e = this.editor, { tableElement: t } = this.$lookup();
		le(t, e._config.theme.tableSelection), t.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
	}
	$disableHighlightStyle() {
		let { tableElement: e } = this.$lookup();
		A(e, this.editor._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
	}
	$updateTableTableSelection(e) {
		if (e !== null) {
			e.tableKey !== this.tableNodeKey && W(233, e.tableKey, this.tableNodeKey);
			let t = this.editor;
			this.tableSelection = e, this.isHighlightingCells = !0, this.$disableHighlightStyle(), this.updateDOMSelection(), _i(t, this.table, this.tableSelection);
		} else this.$clearHighlight();
	}
	updateDOMSelection() {
		if (this.anchorCell !== null && this.focusCell !== null) {
			let e = re(this.editor._window);
			e && e.rangeCount > 0 && e.removeAllRanges();
		}
	}
	$setFocusCellForSelection(e, t = !1) {
		let n = this.editor, { tableNode: r } = this.$lookup(), i = e.x, a = e.y;
		if (this.focusCell = e, !this.isHighlightingCells && (t || this.anchorX !== i || this.anchorY !== a || this.tableSelection != null && this.anchorCellNodeKey != null) && (this.isHighlightingCells = !0, this.$disableHighlightStyle()), this.focusX !== -1 && this.focusY !== -1 && i === this.focusX && a === this.focusY) return !1;
		if (this.focusX = i, this.focusY = a, this.isHighlightingCells) {
			let o = Ii(r, e.elem);
			if (this.tableSelection != null && this.anchorCellNodeKey != null) {
				let e = o;
				if (e === null && t && (e = r.getCellNodeFromCords(i, a, this.table)), e !== null) {
					let t = this.$getAnchorTableCellOrThrow();
					return this.focusCellNodeKey = e.getKey(), this.tableSelection = qr(r, t, e), p(this.tableSelection), n.dispatchCommand(g, void 0), _i(n, this.table, this.tableSelection), !0;
				}
			}
		}
		return !1;
	}
	$getAnchorTableCell() {
		let e = this.anchorCellNodeKey ? T(this.anchorCellNodeKey) : null;
		return U(e) ? e : null;
	}
	$getAnchorTableCellOrThrow() {
		let e = this.$getAnchorTableCell();
		return e === null && W(234), e;
	}
	$getFocusTableCell() {
		let e = this.focusCellNodeKey ? T(this.focusCellNodeKey) : null;
		return U(e) ? e : null;
	}
	$getFocusTableCellOrThrow() {
		let e = this.$getFocusTableCell();
		return e === null && W(235), e;
	}
	$setAnchorCellForSelection(e) {
		this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.focusX = -1, this.focusY = -1, this.focusCell = null, this.focusCellNodeKey = null;
		let { tableNode: t } = this.$lookup(), n = Ii(t, e.elem);
		if (n !== null) {
			let e = n.getKey();
			this.tableSelection == null ? this.tableSelection = qr(t, n, n) : (this.tableSelection = this.tableSelection.clone(), this.tableSelection.set(t.getKey(), e, e)), this.anchorCellNodeKey = e;
		}
	}
	$formatCells(e) {
		let t = N();
		J(t) || W(236);
		let n = tt(), r = n.anchor, i = n.focus, a = t.getNodes().filter(U);
		a.length > 0 || W(237);
		let o = a[0].getFirstChild(), s = ot(o) ? o.getFormatFlags(e, null) : null;
		a.forEach((t) => {
			r.set(t.getKey(), 0, "element"), i.set(t.getKey(), t.getChildrenSize(), "element"), n.formatText(e, s);
		}), p(t), this.editor.dispatchCommand(g, void 0);
	}
	$clearText() {
		let { editor: e } = this, t = T(this.tableNodeKey);
		if (!Y(t)) throw Error("Expected TableNode.");
		let i = N();
		J(i) || W(253);
		let a = i.getNodes().filter(U), o = t.getFirstChild(), s = t.getLastChild();
		if (a.length > 0 && o !== null && s !== null && G(o) && G(s) && a[0] === o.getFirstChild() && a[a.length - 1] === s.getLastChild()) {
			t.selectPrevious();
			let r = t.getParent();
			t.remove(), Tt(r) && r.isEmpty() && e.dispatchCommand(n, void 0);
			return;
		}
		a.forEach((e) => {
			if (P(e)) {
				let t = r(), n = l();
				t.append(n), e.append(t), e.getChildren().forEach((e) => {
					e !== t && e.remove();
				});
			}
		}), _i(e, this.table, null), p(null), e.dispatchCommand(g, void 0);
	}
}, Qr = "__lexicalTableSelection";
function $r(e) {
	let t = xe(e);
	return Y(t) || W(386, e), t;
}
var ei = 40;
function ti(e, t, n) {
	let r = (e) => Math.max(1, Math.ceil(Math.min(ei, e) / ei * 18));
	return e <= t + ei ? -r(t + ei - e) : e >= n - ei ? r(e - (n - ei)) : 0;
}
function ni(e) {
	return _e(e) && e.nodeName === "TABLE";
}
function ri(e, t) {
	if (!t) return t;
	let n = ni(t) ? t : t.querySelector("table");
	return ni(n) || W(341, e.constructor.name, e.getType(), e.getKey(), t.nodeName), n;
}
function ii(e) {
	return e._window;
}
function ai(e, t) {
	for (let n = t, r = null; n !== null; n = n.getParent()) {
		if (e.is(n)) return r;
		U(n) && (r = n);
	}
	return null;
}
var oi = [
	[de, "down"],
	[s, "up"],
	[Ft, "backward"],
	[u, "forward"]
], si = [
	et,
	Ie,
	D
], ci = [ie, zt];
function li(e, t) {
	return e.registerRootListener((n) => {
		if (n === null) return;
		let r = e._window;
		if (r !== null) return qt(r, "pointerdown", (r) => {
			let i = Pe(r);
			if (r.button !== 0 || !k(i) || !n.contains(i)) return;
			let a = function(e) {
				let t = mi(e);
				if (t === null) return null;
				let n = t.elem;
				for (; n != null;) {
					if (n.nodeName === "TABLE" && Qr in n && n[Qr]) return {
						cellElement: t,
						tableElement: n,
						tableObserver: n[Qr]
					};
					n = n.parentNode;
				}
				return null;
			}(i);
			e.update(() => {
				if (J(N())) {
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
							if (!De(n) && !y(n)) return null;
							for (let i of n.elementsFromPoint(e, t)) {
								let e = hi(r, i);
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
							let a = ti(t, r, i);
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
								if (ti(s, t.left, t.right) !== 0) return !0;
							}
							let t = p("y"), n = t === null ? 0 : t.getBoundingClientRect().top, r = t === null ? o.innerHeight : t.getBoundingClientRect().bottom;
							return ti(c, n, r) !== 0;
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
							let t = Pe(e);
							if (!k(t)) return;
							s = e.clientX, c = e.clientY;
							let n = null, a = !(Ce || r.contains(t));
							n = a ? hi(r, t) : d(e.clientX, e.clientY), n && f(n, a), b();
						};
						o.addEventListener("pointerup", x, i.listenerOptions), o.addEventListener("pointermove", S, i.listenerOptions);
					};
					i.pointerType = t.pointerType;
					let c = $r(i.tableNodeKey), l = ke();
					if (Ce && t.shiftKey && wi(l, c) && (j(l) || J(l))) {
						let e = l.anchor.getNode(), r = ai(c, l.anchor.getNode());
						r ? (i.$setAnchorCellForSelection(Fi(i, r)), i.$setFocusCellForSelection(n), Mi(t)) : (c.isBefore(e) ? c.selectStart() : c.selectEnd()).anchor.set(l.anchor.key, l.anchor.offset, l.anchor.type);
					} else t.pointerType !== "touch" && i.$setAnchorCellForSelection(n);
					s(n);
				})(e, r, o, i, n, t);
			});
		});
	});
}
function ui(e, t, r, a, o) {
	let s = r.getRootElement(), c = ii(r);
	s !== null && c !== null || W(246);
	let u = new Zr(r, e.getKey()), d = ri(e, t);
	(function(e, t) {
		pi(e) !== null && W(205), e[Qr] = t;
	})(d, u), u.listenersToRemove.add(() => function(e, t) {
		pi(e) === t && delete e[Qr];
	}(d, u)), u.listenersToRemove.add(qt(d, "mousedown", (e) => {
		let t = Pe(e);
		e.detail >= 3 && k(t) && mi(t) !== null && e.preventDefault();
	}, u.listenerOptions));
	for (let [t, n] of oi) u.listenersToRemove.add(r.registerCommand(t, (t) => ji(r, t, n, e, u, o), 3));
	u.listenersToRemove.add(r.registerCommand(it, (t) => {
		let n = N();
		if (J(n)) {
			let r = ai(e, n.focus.getNode());
			if (r !== null) return Mi(t), r.selectEnd(), !0;
		}
		return !1;
	}, 3));
	let f = (t) => () => {
		let n = N();
		if (!wi(n, e)) return !1;
		if (J(n)) return u.$clearText(), !0;
		if (j(n)) {
			if (!U(ai(e, n.anchor.getNode()))) return !1;
			let r = n.anchor.getNode(), a = n.focus.getNode(), o = e.isParentOf(r), s = e.isParentOf(a);
			if (o && !s || s && !o) return u.$clearText(), !0;
			let c = i(n.anchor.getNode(), (e) => P(e)), l = c && i(c, (e) => P(e) && U(e.getParent()));
			if (!P(l) || !P(c)) return !1;
			if (t === Ie && l.getPreviousSibling() === null) return !0;
		}
		return !1;
	};
	for (let e of si) u.listenersToRemove.add(r.registerCommand(e, f(e), 3));
	let p = (t) => {
		let n = N();
		if (!J(n) && !j(n)) return !1;
		let r = e.isParentOf(n.anchor.getNode());
		if (r !== e.isParentOf(n.focus.getNode())) {
			let t = r ? "anchor" : "focus", i = r ? "focus" : "anchor", { key: a, offset: o, type: s } = n[i];
			return e[n[t].isBefore(n[i]) ? "selectPrevious" : "selectNext"]()[i].set(a, o, s), !1;
		}
		return !!wi(n, e) && !!J(n) && (t && (t.preventDefault(), t.stopPropagation()), u.$clearText(), !0);
	};
	for (let e of ci) u.listenersToRemove.add(r.registerCommand(e, p, 3));
	u.listenersToRemove.add(r.registerCommand(ae, (e) => {
		let t = N();
		if (t) {
			if (!J(t) && !j(t)) return !1;
			_n(r, sn(e, ClipboardEvent) ? e : null, En(t));
			let n = p(e);
			return j(t) ? (t.removeText(), !0) : n;
		}
		return !1;
	}, 3));
	let m = s.ownerDocument;
	return u.listenersToRemove.add(qt(m, "paste", (t) => {
		t.defaultPrevented || r.read("latest", () => {
			let t = N();
			return s.contains(m.activeElement) && J(t) && wi(t, e);
		}) && (t.preventDefault(), r.dispatchCommand(Te, t));
	})), u.listenersToRemove.add(qt(m, "copy", (t) => {
		if (t.defaultPrevented) return;
		let n = Pe(t);
		n === s || k(n) && s.contains(n) || r.read("latest", () => {
			let t = N();
			return s.contains(C(s)) && J(t) && wi(t, e);
		}) && (t.preventDefault(), r.dispatchCommand(me, t));
	})), u.listenersToRemove.add(r.registerCommand(Rt, (t) => {
		let n = N();
		return wi(n, e) ? J(n) ? (u.$formatCells(t), !0) : (j(n) && U(i(n.anchor.getNode(), (e) => U(e))), !1) : !1;
	}, 3)), u.listenersToRemove.add(r.registerCommand(Nt, (t) => {
		let n = N();
		if (!J(n) || !wi(n, e)) return !1;
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
				P(n) && !n.isInline() && n.setFormat(t);
			}
		}
		return !0;
	}, 3)), u.listenersToRemove.add(r.registerCommand(Se, (t) => {
		let n = N();
		if (!wi(n, e)) return !1;
		if (J(n)) return u.$clearHighlight(), !1;
		if (j(n)) {
			if (!U(i(n.anchor.getNode(), (e) => U(e)))) return !1;
			if (typeof t == "string") {
				let i = Pi(r, n, e);
				if (i) return Ni(i, e, [l(t)]), !0;
			}
		}
		return !1;
	}, 3)), a && u.listenersToRemove.add(r.registerCommand(Jt, (t) => {
		let n = N();
		if (!j(n) || !n.isCollapsed() || !wi(n, e)) return !1;
		let r = Oi(n.anchor.getNode());
		return !(r === null || !e.is(ki(r))) && (Mi(t), function(e, t) {
			let n = t === "next" ? "getNextSibling" : "getPreviousSibling", r = t === "next" ? "getFirstChild" : "getLastChild", a = e[n]();
			if (P(a)) return a.selectEnd();
			let o = i(e, G);
			o === null && W(247);
			for (let e = o[n](); G(e); e = e[n]()) {
				let t = e[r]();
				if (P(t)) return t.selectEnd();
			}
			let s = i(o, Y);
			s === null && W(248), t === "next" ? s.selectNext() : s.selectPrevious();
		}(r, t.shiftKey ? "previous" : "next"), !0);
	}, 3)), u.listenersToRemove.add(r.registerCommand(pt, (t) => e.isSelected(), 3)), u.listenersToRemove.add(r.registerCommand(n, () => {
		let t = N();
		if (!j(t) || !t.isCollapsed() || !wi(t, e)) return !1;
		let n = Pi(r, t, e);
		return !!n && (Ni(n, e), !0);
	}, 3)), u;
}
function di(e, t) {
	let n = N(), r = ke(), a = e.getAndClearNextFocus();
	if (a !== null) {
		let { tableKey: t, focusCell: r } = a, i = e.observers.get(t);
		i || W(335, t);
		let [o] = i;
		if (J(n) && n.tableKey === o.tableNodeKey) return (r.x !== o.focusX || r.y !== o.focusY) && (o.$setFocusCellForSelection(r), !0);
		if (o.anchorCell !== null && o.anchorCellNodeKey !== null && r.elem !== o.anchorCell.elem && o.tableSelection !== null) return o.$setFocusCellForSelection(r, !0), !0;
	}
	let s = e.getAndClearShouldCheckSelectionForTable();
	if (s && j(r) && j(n) && n.isCollapsed()) {
		let e = T(s);
		if (Y(e)) {
			let t = n.anchor.getNode(), r = e.getFirstChild(), a = Oi(t);
			if (a !== null && G(r)) {
				let t = r.getFirstChild();
				if (U(t) && e.is(i(a, (n) => n.is(e) || n.is(t)))) return t.selectStart(), !0;
			}
		}
	}
	J(n) && function(e, t) {
		let n = ii(e), r = ke();
		if (!t.is(r)) return;
		let i = $r(t.tableKey), a = re(n), s = a && m(a, e.getRootElement());
		if (a && s && s.anchorNode && s.focusNode) {
			let n = Me(s.focusNode), r = n && !i.isParentOf(n), c = Me(s.anchorNode), l = c && i.isParentOf(c);
			if (r && l && a.rangeCount > 0) {
				let n = o(a, e);
				n && (n.anchor.set(i.getKey(), t.isBackward() ? i.getChildrenSize() : 0, "element"), a.removeAllRanges(), p(n));
			}
		}
	}(t, n), j(n) && function(e, t) {
		let n = ke(), { anchor: r, focus: i } = e, a = r.getNode(), o = i.getNode(), s = Oi(a), c = Oi(o), l = s ? ki(s) : null, u = c ? ki(c) : null, d = e.isBackward(), f = s && c && l && u && l.is(u), m = u && (!l || l.isParentOf(u)), h = l && (!u || u.isParentOf(l));
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
			if (s.is(c) || (i.$setAnchorCellForSelection(Fi(i, s)), i.$setFocusCellForSelection(Fi(i, c), !0)), i.pointerType === "touch" && i.isSelecting && e.isCollapsed() && j(n) && n.isCollapsed()) {
				let e = Oi(n.anchor.getNode());
				e && !e.is(c) && (i.$setAnchorCellForSelection(Fi(i, e)), i.$setFocusCellForSelection(Fi(i, c), !0), i.pointerType = null);
			}
		}
	}(n, e);
	for (let [n, r] of e.$getTableNodesAndObservers()) fi(t, n, r);
	return !1;
}
function fi(e, t, n) {
	let r = N(), i = ke();
	r && !r.is(i) && (J(r) || J(i)) && n.tableSelection && !n.tableSelection.is(i) && (J(r) && r.tableKey === n.tableNodeKey ? n.$updateTableTableSelection(r) : !J(r) && J(i) && i.tableKey === n.tableNodeKey && n.$updateTableTableSelection(null)), n.hasHijackedSelectionStyles && !t.isSelected() ? function(e, t) {
		t.$enableHighlightStyle(), vi(t.table, (t) => {
			let n = t.elem;
			t.highlighted = !1, Di(e, t), n.getAttribute("style") || n.removeAttribute("style");
		});
	}(e, n) : !n.hasHijackedSelectionStyles && t.isSelected() && function(e, t) {
		t.$disableHighlightStyle(), vi(t.table, (t) => {
			t.highlighted = !0, Ei(e, t);
		});
	}(e, n);
}
function pi(e) {
	return e[Qr] || null;
}
function mi(e) {
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
function hi(e, t) {
	if (!e.contains(t)) return null;
	let n = null;
	for (let r = t; r != null; r = r.parentNode) {
		if (r === e) return n;
		let t = r.nodeName;
		t !== "TD" && t !== "TH" || (n = r._cell || null);
	}
	return null;
}
function gi(e, t) {
	let n = [], r = {
		columns: 0,
		domRows: n,
		rows: 0
	}, i = ri(e, t).querySelector("tr"), a = 0, o = 0;
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
function _i(e, t, n) {
	let r = new Set(n ? n.getNodes() : []);
	vi(t, (t, n) => {
		let i = t.elem;
		r.has(n) ? (t.highlighted = !0, Ei(e, t)) : (t.highlighted = !1, Di(e, t), i.getAttribute("style") || i.removeAttribute("style"));
	});
}
function vi(e, t) {
	let { domRows: n } = e;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r) for (let n = 0; n < r.length; n++) {
			let i = r[n];
			if (!i) continue;
			let a = Me(i.elem);
			a !== null && t(i, a, {
				x: n,
				y: e
			});
		}
	}
}
var yi = (e, t, n, r, i) => {
	let a = i === "forward";
	switch (i) {
		case "backward":
		case "forward": return n === (a ? e.table.columns - 1 : 0) ? r === (a ? e.table.rows - 1 : 0) ? a ? t.selectNext() : t.selectPrevious() : Ti(t.getCellNodeFromCordsOrThrow(a ? 0 : e.table.columns - 1, r + (a ? 1 : -1), e.table), a) : Ti(t.getCellNodeFromCordsOrThrow(n + (a ? 1 : -1), r, e.table), a), !0;
		case "up": return r === 0 ? t.selectPrevious() : Ti(t.getCellNodeFromCordsOrThrow(n, r - 1, e.table), !1), !0;
		case "down": return r === e.table.rows - 1 ? t.selectNext() : Ti(t.getCellNodeFromCordsOrThrow(n, r + 1, e.table), !0), !0;
		default: return !1;
	}
};
function bi(e, t) {
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
function xi([e, t]) {
	return [e === "minColumn" ? "maxColumn" : "minColumn", t === "minRow" ? "maxRow" : "minRow"];
}
function Si(e, t, [n, r]) {
	let i = t[r], a = e[i];
	a === void 0 && W(250, r, String(i));
	let o = t[n], s = a[o];
	return s === void 0 && W(250, n, String(o)), s;
}
function Ci(e, t, n, r, i) {
	let a = Vr(t, n, r), { topSpan: o, leftSpan: s, bottomSpan: c, rightSpan: l } = function(e, t) {
		let { minColumn: n, maxColumn: r, minRow: i, maxRow: a } = t, o = 1, s = 1, c = 1, l = 1, u = e[i], d = e[a];
		for (let e = n; e <= r; e++) o = Math.max(o, u[e].cell.__rowSpan), l = Math.max(l, d[e].cell.__rowSpan);
		for (let t = i; t <= a; t++) s = Math.max(s, e[t][n].cell.__colSpan), c = Math.max(c, e[t][r].cell.__colSpan);
		return {
			bottomSpan: l,
			leftSpan: s,
			rightSpan: c,
			topSpan: o
		};
	}(t, a), [u, d] = xi(function(e, t) {
		let n = bi(e, t);
		return n === null && W(249, t.cell.getKey()), n;
	}(a, n)), f = a[u], p = a[d];
	i === "forward" ? f += u === "maxColumn" ? 1 : s : i === "backward" ? f -= u === "minColumn" ? 1 : l : i === "down" ? p += d === "maxRow" ? 1 : o : i === "up" && (p -= d === "minRow" ? 1 : c);
	let m = t[p];
	if (m === void 0) return !1;
	let h = m[f];
	if (h === void 0) return !1;
	let [g, _] = function(e, t, n) {
		let r = Vr(e, t, n), i = bi(r, t);
		if (i) return [Si(e, r, i), Si(e, r, xi(i))];
		let a = bi(r, n);
		if (a) return [Si(e, r, xi(a)), Si(e, r, a)];
		let o = ["minColumn", "minRow"];
		return [Si(e, r, o), Si(e, r, xi(o))];
	}(t, n, h), v = Fi(e, g.cell), y = Fi(e, _.cell);
	return e.$setAnchorCellForSelection(v), e.$setFocusCellForSelection(y, !0), !0;
}
function wi(e, t) {
	if (j(e) || J(e)) {
		let n = t.isParentOf(e.anchor.getNode()), r = t.isParentOf(e.focus.getNode());
		return n && r;
	}
	return !1;
}
function Ti(e, t) {
	t ? e.selectStart() : e.selectEnd();
}
function Ei(e, t) {
	let n = t.elem, r = e._config.theme;
	U(Me(n)) || W(131), A(n, r.tableCellSelected);
}
function Di(e, t) {
	let n = t.elem;
	U(Me(n)) || W(131);
	let r = e._config.theme;
	le(n, r.tableCellSelected);
}
function Oi(e) {
	let t = i(e, U);
	return U(t) ? t : null;
}
function ki(e) {
	let t = i(e, Y);
	return Y(t) ? t : null;
}
function Ai(e, n, r, a, o, s, l) {
	let u = x(r.focus, o ? "previous" : "next");
	if (t(u)) return !1;
	let d = u;
	for (let e of v(u).iterNodeCarets("shadowRoot")) {
		if (!w(e) || !P(e.origin)) return !1;
		d = e;
	}
	let f = d.getParentAtCaret();
	if (!U(f)) return !1;
	let p = f, m = function(e) {
		for (let t of v(e).iterNodeCarets("root")) {
			let { origin: n } = t;
			if (U(n)) {
				if (Le(t)) return Ne(n, e.direction);
			} else if (!G(n)) break;
		}
		return null;
	}(Ze(p, d.direction)), h = i(p, Y);
	if (!h || !h.is(s)) return !1;
	let g = e.getElementByKey(p.getKey()), _ = mi(g);
	if (!g || !_) return !1;
	if (l.table = Ui(e, h), m) if (a === "extend") {
		let t = mi(e.getElementByKey(m.origin.getKey()));
		if (!t) return !1;
		l.$setAnchorCellForSelection(_), l.$setFocusCellForSelection(t, !0);
	} else {
		let e = Bt(m);
		c(r.anchor, e), c(r.focus, e);
	}
	else if (a === "extend") l.$setAnchorCellForSelection(_), l.$setFocusCellForSelection(_, !0);
	else {
		let e = function(e) {
			let t = ht(e);
			return Le(t) ? Bt(t) : e;
		}(Ze(h, u.direction));
		c(r.anchor, e), c(r.focus, e);
	}
	return Mi(n), !0;
}
function ji(e, t, n, r, a, o) {
	if ((n === "up" || n === "down") && function(e) {
		let t = e.getRootElement();
		return t ? t.hasAttribute("aria-controls") && t.getAttribute("aria-controls") === "typeahead-menu" : !1;
	}(e)) return !1;
	let s = N();
	if (!wi(s, r)) {
		if (j(s)) {
			if (n === "backward") {
				if (s.focus.offset > 0) return !1;
				let e = function(e) {
					for (let t = e, n = e; n !== null; t = n, n = n.getParent()) if (P(n)) {
						if (n !== t && n.getFirstChild() !== t) return null;
						if (!n.isInline()) return n;
					}
					return null;
				}(s.focus.getNode());
				if (!e) return !1;
				let n = e.getPreviousSibling();
				return !!Y(n) && (Mi(t), t.shiftKey ? s.focus.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent(), "element") : n.selectEnd(), !0);
			}
			if (t.shiftKey && (n === "up" || n === "down")) {
				let e = s.focus.getNode();
				if (!s.isCollapsed() && (n === "up" && !s.isBackward() || n === "down" && s.isBackward())) {
					let a = i(e, (e) => Y(e));
					if (U(a) && (a = i(a, Y)), a !== r || !a) return !1;
					let o = n === "down" ? a.getNextSibling() : a.getPreviousSibling();
					if (!o) return !1;
					let c = 0;
					n === "up" && P(o) && (c = o.getChildrenSize());
					let l = o;
					n === "up" && P(o) && (l = o.getLastChild() || o, c = O(l) ? l.getTextContentSize() : 0);
					let u = s.clone();
					return u.focus.set(l.getKey(), c, O(l) ? "text" : "element"), p(u), Mi(t), !0;
				}
				if (ee(e)) {
					let e = n === "up" ? s.getNodes()[s.getNodes().length - 1] : s.getNodes()[0];
					if (e && ai(r, e) !== null) {
						let e = r.getFirstDescendant(), t = r.getLastDescendant();
						if (!e || !t) return !1;
						let [n] = q(e), [i] = q(t), o = r.getCordsFromCellNode(n, a.table), s = r.getCordsFromCellNode(i, a.table), c = r.getDOMCellFromCordsOrThrow(o.x, o.y, a.table), l = r.getDOMCellFromCordsOrThrow(s.x, s.y, a.table);
						return a.$setAnchorCellForSelection(c), a.$setFocusCellForSelection(l, !0), !0;
					}
					return !1;
				}
				{
					let r = i(e, (e) => P(e) && !e.isInline());
					if (U(r) && (r = i(r, Y)), !r) return !1;
					let o = n === "down" ? r.getNextSibling() : r.getPreviousSibling();
					if (Y(o) && a.tableNodeKey === o.getKey()) {
						let e = o.getFirstDescendant(), r = o.getLastDescendant();
						if (!e || !r) return !1;
						let [i] = q(e), [a] = q(r), c = s.clone();
						return c.focus.set((n === "up" ? i : a).getKey(), n === "up" ? 0 : a.getChildrenSize(), "element"), Mi(t), p(c), !0;
					}
				}
			}
		}
		return n === "down" && Bi(e) && o.setShouldCheckSelectionForTable(r.getKey()), !1;
	}
	if (j(s)) {
		if (n === "backward" || n === "forward") return Ai(e, t, s, t.shiftKey ? "extend" : "move", n === "backward", r, a);
		if (s.isCollapsed()) {
			let { anchor: c, focus: l } = s, u = i(c.getNode(), U), d = i(l.getNode(), U);
			if (!U(u) || !u.is(d)) return !1;
			let f = ki(u);
			if (f !== r && f != null) {
				let r = ri(f, e.getElementByKey(f.getKey()));
				if (r != null) return a.table = gi(f, r), ji(e, t, n, f, a, o);
			}
			let p = e.getElementByKey(u.__key), m = e.getElementByKey(c.key);
			if (m == null || p == null) return !1;
			let h;
			if (c.type === "element") h = m.getBoundingClientRect();
			else {
				let t = re(ii(e));
				if (t === null || t.rangeCount === 0) return !1;
				let n = Et(t, e.getRootElement());
				if (n === null) return !1;
				h = n.getBoundingClientRect();
			}
			let g = n === "up" ? u.getFirstChild() : u.getLastChild();
			if (g == null) return !1;
			let _ = e.getElementByKey(g.__key);
			if (_ == null) return !1;
			let v = _.getBoundingClientRect();
			if (n === "up" ? v.top > h.top - h.height : h.bottom + h.height > v.bottom) {
				Mi(t);
				let e = r.getCordsFromCellNode(u, a.table);
				if (!t.shiftKey) return yi(a, r, e.x, e.y, n);
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
		let p = ri(f, e.getElementByKey(f.getKey()));
		if (!U(u) || !U(d) || !Y(f) || p == null) return !1;
		a.$updateTableTableSelection(s);
		let m = gi(f, p), h = r.getCordsFromCellNode(u, m), g = r.getDOMCellFromCordsOrThrow(h.x, h.y, m);
		if (a.$setAnchorCellForSelection(g), Mi(t), t.shiftKey) {
			let [e, t, i] = K(r, u, d);
			return Ci(a, e, t, i, n);
		}
		return d.selectEnd(), !0;
	}
	return !1;
}
function Mi(e) {
	e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
}
function Ni(e, t, n) {
	let i = r();
	e === "first" ? t.insertBefore(i) : t.insertAfter(i), i.append(...n || []), i.selectEnd();
}
function Pi(e, t, n) {
	let r = n.getParent();
	if (!r) return;
	let a = re(ii(e));
	if (!a) return;
	let o = m(a, e.getRootElement()).anchorNode, s = e.getElementByKey(r.getKey()), c = ri(n, e.getElementByKey(n.getKey()));
	if (!o || !s || !c || !s.contains(o) || c.contains(o)) return;
	let l = i(t.anchor.getNode(), (e) => U(e));
	if (!l) return;
	let u = i(l, (e) => Y(e));
	if (!Y(u) || !u.is(n)) return;
	let [d, f] = K(n, l, l), p = d[0][0], h = d[d.length - 1][d[0].length - 1], { startRow: g, startColumn: _ } = f, v = g === p.startRow && _ === p.startColumn, y = g === h.startRow && _ === h.startColumn;
	return v ? "first" : y ? "last" : void 0;
}
function Fi(e, t) {
	let { tableNode: n } = e.$lookup(), r = n.getCordsFromCellNode(t, e.table);
	return n.getDOMCellFromCordsOrThrow(r.x, r.y, e.table);
}
function Ii(e, t, n) {
	return ai(e, Me(t, n));
}
function Li(e, t, n) {
	let r = e.querySelector("colgroup");
	if (!r) return;
	let i = [];
	for (let e = 0; e < t; e++) {
		let t = M().createElement("col"), r = n && n[e];
		r && (t.style.width = `${r}px`), i.push(t);
	}
	r.replaceChildren(...i);
}
function Ri(e, t, n) {
	if (!t.theme.tableAlignment) return;
	let r = [], i = [];
	for (let e of ["center", "right"]) {
		let a = t.theme.tableAlignment[e];
		a && (e === n ? i : r).push(a);
	}
	le(e, ...r), A(e, ...i);
}
var zi = /* @__PURE__ */ new WeakSet();
function Bi(e = Ot()) {
	return zi.has(e);
}
function Vi(e, t) {
	t ? zi.add(e) : zi.delete(e);
}
var Hi = class e extends dt {
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
			conversion: Wi,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Gi().updateFromJSON(e);
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
		let t = ni(e) ? e : e.querySelector("table");
		return ni(t) || W(229), super.getDOMSlot(e).withElement(t).withAfter(t.querySelector("colgroup"));
	}
	createDOM(e, t) {
		let n = M().createElement("table");
		this.__style && We(n.style, this.__style);
		let r = M().createElement("colgroup");
		if (n.appendChild(r), se(r), A(n, e.theme.table), this.updateTableElement(null, n, e), Bi(t)) {
			let t = M().createElement("div"), r = e.theme.tableScrollableWrapper;
			return r ? A(t, r) : t.style.overflowX = "auto", t.appendChild(n), this.updateTableWrapper(null, t, n, e), t;
		}
		return n;
	}
	updateTableWrapper(e, t, n, r) {
		this.__frozenColumnCount !== (e ? e.__frozenColumnCount : 0) && function(e, t, n, r) {
			r > 0 ? (A(e, n.theme.tableFrozenColumn), t.setAttribute("data-lexical-frozen-column", "true")) : (le(e, n.theme.tableFrozenColumn), t.removeAttribute("data-lexical-frozen-column"));
		}(t, n, r, this.__frozenColumnCount), this.__frozenRowCount !== (e ? e.__frozenRowCount : 0) && function(e, t, n, r) {
			r > 0 ? (A(e, n.theme.tableFrozenRow), t.setAttribute("data-lexical-frozen-row", "true")) : (le(e, n.theme.tableFrozenRow), t.removeAttribute("data-lexical-frozen-row"));
		}(t, n, r, this.__frozenRowCount);
	}
	updateTableElement(e, t, n) {
		this.__style !== (e ? e.__style : "") && We(t.style, this.__style, e ? e.__style : ""), this.__rowStriping !== (!!e && e.__rowStriping) && function(e, t, n) {
			n ? (A(e, t.theme.tableRowStriping), e.setAttribute("data-lexical-row-striping", "true")) : (le(e, t.theme.tableRowStriping), e.removeAttribute("data-lexical-row-striping"));
		}(t, n, this.__rowStriping);
		let r = e ? e.getColumnCount() : 0, i = e ? e.__colWidths : void 0;
		this.getColumnCount() === r && this.getColWidths() === i || Li(t, this.getColumnCount(), this.getColWidths()), Ri(t, n, this.getFormatType());
	}
	updateDOM(e, t, n) {
		let r = ri(this, t);
		return t === r === Bi() || (_e(i = t) && i.nodeName === "DIV" && this.updateTableWrapper(e, t, r, n), this.updateTableElement(e, r, n), !1);
		var i;
	}
	scaleDOMColWidths(e, t) {
		let n = this.getColWidths();
		n && Li(ri(this, e), this.getColumnCount(), n.map((e) => e * t));
	}
	exportDOM(e) {
		let t = super.exportDOM(e), { element: n } = t;
		return {
			after: (n) => {
				if (t.after && (n = t.after(n)), !ni(n) && _e(n) && (n = n.querySelector("table")), !ni(n)) return null;
				Ri(n, e._config, this.getFormatType());
				let [r] = Br(this, null, null), i = /* @__PURE__ */ new Map();
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
					let e = M().createElement("tbody");
					for (let t of s) e.appendChild(t);
					n.append(e);
				}
				return n;
			},
			element: !ni(n) && _e(n) ? n.querySelector("table") : n
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
				let { elem: a } = i, o = Ii(this, a);
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
		let i = Me(r.elem);
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
function Ui(e, t) {
	let n = e.getElementByKey(t.getKey());
	return n === null && W(230), gi(t, n);
}
function Wi(e) {
	let t = Gi();
	e.hasAttribute("data-lexical-row-striping") && t.setRowStriping(!0), e.hasAttribute("data-lexical-frozen-column") && t.setFrozenColumns(1), e.hasAttribute("data-lexical-frozen-row") && t.setFrozenRows(1);
	let n = e.querySelector(":scope > colgroup");
	if (n) {
		let e = [];
		for (let t of n.querySelectorAll(":scope > col")) {
			let n = t.style.width || "";
			if (!pr.test(n) && (n = t.getAttribute("width") || "", !/^\d+$/.test(n))) {
				e = void 0;
				break;
			}
			e.push(parseFloat(n));
		}
		e && t.setColWidths(e);
	}
	return {
		after: (e) => tn(e, G),
		node: t
	};
}
function Gi() {
	return gt(new Hi());
}
function Y(e) {
	return e instanceof Hi;
}
function Ki(e) {
	G(e.getParent()) ? e.isEmpty() && e.append(r()) : e.remove();
}
function qi(e) {
	Y(e.getParent()) ? ln(e, U) : e.remove();
}
function Ji(e) {
	ln(e, G);
	let [t] = Br(e, null, null), n = t.reduce((e, t) => Math.max(e, t.length), 0), i = e.getChildren();
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
function Yi(e) {
	if (e.detail < 3 || !k(e.target)) return !1;
	let t = Me(e.target);
	if (t === null) return !1;
	let n = i(t, (e) => P(e) && !e.isInline());
	return n !== null && !!U(n.getParent()) && (n.select(0), !0);
}
function Xi() {
	let e = N();
	if (!j(e)) return !1;
	let t = ki(e.anchor.getNode());
	if (t === null) return !1;
	let n = d();
	if (!n.is(t.getParent()) || n.getChildrenSize() !== 1) return !1;
	let [r] = Br(t, null, null);
	if (r.length === 0 || r[0].length === 0) return !1;
	let i = r[0][0];
	if (!i || !i.cell) return !1;
	let a = r[r.length - 1], o = a[a.length - 1];
	return !o || !o.cell ? !1 : (p(qr(t, i.cell, o.cell)), !0);
}
function Zi(e) {
	return e.registerNodeTransform(mr, (e) => {
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
						t === null ? en(a, e) : t.insertAfter(e);
					}
				}
			}
			for (let e of o) e.setColSpan(1), e.setRowSpan(1);
		}
	});
}
function Qi(e, t = !0) {
	let n = new Xr(), r = (r, i, a) => {
		let o = ri(r, a), s = ui(r, o, e, t, n);
		n.observers.set(i, [s, o]);
	};
	return Ae(li(e, n), e.registerCommand(g, () => di(n, e), 3), e.registerMutationListener(Hi, (t) => {
		e.read("latest", () => {
			for (let [e, i] of t) {
				let t = n.observers.get(e);
				if (i === "created" || i === "updated") {
					let { tableNode: i, tableElement: a } = Yr(e);
					t === void 0 ? r(i, e, a) : a !== t[1] && (n.removeObserver(e), r(i, e, a));
				} else i === "destroyed" && n.removeObserver(e);
			}
		});
	}, { skipInitialization: !1 }), () => {
		n.removeAllObservers();
	});
}
function $i(e, t) {
	e.hasNodes([Hi]) || W(255);
	let { hasNestedTables: n = un(!1) } = t ?? {};
	return Ae(e.registerCommand(_r, (e) => function({ rows: e, columns: t, includeHeaders: n }, r) {
		let i = N() || ke();
		if (!i || !j(i) || !r && ki(i.anchor.getNode())) return !1;
		let a = xr(Number(e), Number(t), n);
		an(a);
		let o = a.getFirstDescendant();
		return O(o) && o.select(), !0;
	}(e, n.peek()), 0), e.registerCommand(ue, (t, r) => e === r && function(e, t) {
		let { nodes: n, selection: r } = e;
		if (!n.some((e) => Y(e) || nn(e).some((e) => Y(e.node)))) {
			if (J(r)) {
				let e = "", t = !1;
				for (let r of n) {
					let n = P(r) && !r.isInline();
					e.length > 0 && (n || t) && (e += "\n"), e += r.getTextContent(), t = n;
				}
				return r.insertRawText(e), !0;
			}
			return !1;
		}
		let a = J(r), o = j(r);
		return o && i(r.anchor.getNode(), (e) => U(e)) !== null && i(r.focus.getNode(), (e) => U(e)) !== null || a ? n.length === 1 && Y(n[0]) ? Ur(n[0], r) : !(o && t.peek() && !function(e) {
			return !!(J(e) && !e.focus.getNode().is(e.anchor.getNode()) || j(e) && U(e.anchor.getNode()) && !e.anchor.getNode().is(e.focus.getNode()));
		}(r)) : !1;
	}(t, n), 0), e.registerCommand(Ct, Xi, 1), e.registerCommand(te, Yi, 0), e.registerNodeTransform(Hi, Ji), e.registerNodeTransform(vr, qi), e.registerNodeTransform(mr, Ki));
}
kn.tag("table"), kn.tag("tr"), kn.tag("td", "th");
//#endregion
//#region src/context/MediaFileActionsContext.tsx
var ea = Nn({});
function ta({ children: e, revealFile: t }) {
	let n = Rn(() => ({ revealFile: t }), [t]);
	return /* @__PURE__ */ z(ea.Provider, {
		value: n,
		children: e
	});
}
function na() {
	return In(ea);
}
//#endregion
//#region src/context/BibleVerseActionsContext.tsx
var ra = Nn({});
function ia({ children: e, shortToVerseData: t, verseFullTextToListShorts: n, changeBibleKey: r }) {
	let i = Rn(() => ({
		shortToVerseData: t,
		verseFullTextToListShorts: n,
		changeBibleKey: r
	}), [
		t,
		n,
		r
	]);
	return /* @__PURE__ */ z(ra.Provider, {
		value: i,
		children: e
	});
}
function aa() {
	return In(ra);
}
//#endregion
//#region src/lookupTypes.ts
var oa = /* @__PURE__ */ new Set([
	"concept",
	"deity",
	"group",
	"life",
	"month",
	"person",
	"place",
	"supernatural",
	"unknown"
]);
function sa(e) {
	let t = (e ?? "").trim().toLowerCase();
	return oa.has(t) ? t : "person";
}
function ca(e) {
	let t = X(e.kjvName);
	return t === "" || t === e.name.trim() ? null : t;
}
function X(e) {
	return typeof e == "string" ? e.trim() : "";
}
function la(e) {
	let t = X(e);
	return t === "" ? null : t;
}
function ua(e) {
	return Array.isArray(e) ? e.map(X).filter((e) => e !== "") : [];
}
function da(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : Infinity;
}
function fa(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e ? Object.values(e) : [];
}
function pa(e) {
	return Array.isArray(e) ? e.reduce((e, t) => {
		if (typeof t != "object" || !t) return e;
		let n = t, r = X(n.type);
		return r === "" || typeof n.start != "number" || typeof n.end != "number" || e.push({
			type: r,
			start: n.start,
			end: n.end
		}), e;
	}, []) : [];
}
function ma(e) {
	return Array.isArray(e) ? e.reduce((e, t) => {
		if (typeof t != "object" || !t) return e;
		let n = t, r = X(n.type), i = X(n.url);
		return r === "" || i === "" || e.push({
			type: r,
			url: i
		}), e;
	}, []) : [];
}
function ha(e) {
	if (typeof e != "object" || !e) return null;
	let { latitude: t, longitude: n } = e;
	return typeof t != "number" || !Number.isFinite(t) || typeof n != "number" || !Number.isFinite(n) ? null : {
		latitude: t,
		longitude: n
	};
}
function ga(e) {
	if (typeof e != "object" || !e) return null;
	let t = e, n = X(t.id), r = X(t.name);
	return n === "" || n === "id" || r === "" ? null : {
		id: n,
		name: r,
		kjvName: la(t.kjvName),
		oldName: la(t.oldName),
		title: X(t.title),
		description: X(t.description),
		gender: X(t.gender),
		age: X(t.age),
		years: pa(t.years),
		locations: ua(t.locations),
		spouses: ua(t.spouses),
		children: ua(t.children),
		parents: ua(t.parents),
		siblings: ua(t.siblings),
		cousin: ua(t.cousin),
		type: X(t.type),
		verses: ua(t.verses),
		links: ma(t.links),
		wikipedia: la(t.wikipedia),
		matterRange: da(t.matterRange)
	};
}
function _a(e) {
	if (typeof e != "object" || !e) return null;
	let t = e, n = X(t.id), r = X(t.name);
	return n === "" || n === "id" || r === "" ? null : {
		id: n,
		name: r,
		kjvName: la(t.kjvName),
		oldName: la(t.oldName),
		title: X(t.title),
		description: X(t.description),
		type: X(t.type),
		relatedLocations: ua(t.relatedLocations),
		modernIdentification: la(t.modernIdentification),
		coordinates: ha(t.coordinates),
		verses: ua(t.verses),
		links: ma(t.links),
		wikipedia: la(t.wikipedia),
		uncertainty: t.uncertainty === !0,
		matterRange: da(t.matterRange)
	};
}
function va(e) {
	return fa(e).reduce((e, t) => {
		let n = ga(t);
		return n !== null && e.push(n), e;
	}, []);
}
function ya(e) {
	return fa(e).reduce((e, t) => {
		let n = _a(t);
		return n !== null && e.push(n), e;
	}, []);
}
function ba(e) {
	return typeof e != "object" || !e ? {} : Object.entries(e).reduce((e, [t, n]) => {
		let r = t.trim(), i = ua(n);
		return r !== "" && i.length > 0 && (e[r] = i), e;
	}, {});
}
//#endregion
//#region src/LookupManager.ts
var xa = 20, Sa = 200;
function Ca(e, t) {
	return e.matterRange === t.matterRange ? e.name.localeCompare(t.name) : e.matterRange - t.matterRange;
}
function wa(e, t) {
	return e === t ? 0 : e.startsWith(t) ? 1 : e.includes(t) ? 2 : 3;
}
function Ta(e, t, n) {
	let r = wa(e, n);
	return t === "" ? r : Math.min(r, wa(t, n));
}
function Ea(e, t) {
	let n = [...e].sort(Ca), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = [], o = [], s = [];
	for (let e of n) {
		r.has(e.id) || r.set(e.id, e);
		let t = i.get(e.name);
		t === void 0 ? i.set(e.name, [e]) : t.push(e);
		let n = e.name.toLowerCase(), c = e.kjvName === null || e.kjvName === e.name ? "" : e.kjvName.toLowerCase();
		o.push(n), s.push(c), a.push([
			n,
			c,
			e.oldName?.toLowerCase() ?? ""
		].filter((e) => e !== "").join(" "));
	}
	return {
		sorted: n,
		byId: r,
		byName: i,
		searchText: a,
		nameLower: o,
		kjvNameLower: s,
		verseRecordIds: t,
		queryCache: /* @__PURE__ */ new Map()
	};
}
var Da = class {
	dataMap;
	currentDefaultLang;
	currentStyle;
	indexes = /* @__PURE__ */ new Map();
	constructor(e, t, n, r) {
		if (e[t] === void 0) throw Error(`Default language ${t} not found in ${n}`);
		this.currentDefaultLang = t, this.currentStyle = r, this.dataMap = e;
	}
	get style() {
		return this.currentStyle;
	}
	set style(e) {
		this.currentStyle = e;
	}
	get defaultLang() {
		return this.currentDefaultLang;
	}
	set defaultLang(e) {
		if (this.dataMap[e] === void 0) throw Error(`Language ${e} not found in this lookup manager`);
		this.currentDefaultLang = e;
	}
	get langs() {
		return Object.keys(this.dataMap);
	}
	getRecordCount(e) {
		return this.getIndex(e).sorted.length;
	}
	getAllRecords(e) {
		return [...this.getIndex(e).sorted];
	}
	getRecordById(e, t) {
		return this.getIndex(t).byId.get(e.trim()) ?? null;
	}
	getRecordsByIds(e, t) {
		let { byId: n } = this.getIndex(t), r = /* @__PURE__ */ new Set();
		return e.reduce((e, t) => {
			let i = t.trim();
			if (r.has(i)) return e;
			r.add(i);
			let a = n.get(i);
			return a !== void 0 && e.push(a), e;
		}, []);
	}
	getRecordsByName(e, t) {
		return [...this.getIndex(t).byName.get(e.trim()) ?? []];
	}
	searchRecords(e, t = {}) {
		let n = this.getIndex(t.lang), r = e.trim().toLowerCase(), i = r === "" ? n.sorted : this.getRankedMatches(n, r);
		return t.limit === void 0 ? [...i] : i.slice(0, Math.max(0, t.limit));
	}
	paginateRecords(e, t, n) {
		let r = Math.max(1, Math.trunc(n.pageSize ?? xa)), i = e.length, a = Math.max(1, Math.ceil(i / r)), o = Math.min(a, Math.max(1, Math.trunc(n.page ?? 1))), s = (o - 1) * r;
		return {
			lang: t,
			totalRecords: i,
			page: o,
			totalPages: a,
			pageSize: r,
			records: e.slice(s, s + r)
		};
	}
	searchRecordsByShortVerse(e, t) {
		let n = this.getIndex(t).verseRecordIds[e.trim()];
		return n === void 0 ? [] : this.getRecordsByIds(n, t).sort(Ca);
	}
	resolveLang(e) {
		return e !== void 0 && this.dataMap[e] !== void 0 ? e : this.currentDefaultLang;
	}
	getIndex(e) {
		let t = this.resolveLang(e), n = this.indexes.get(t);
		if (n !== void 0) return n;
		let r = this.dataMap[t], i = Ea(r.records, this.getVerseRecordIds(r));
		return this.indexes.set(t, i), i;
	}
	getRankedMatches(e, t) {
		let n = e.queryCache.get(t);
		if (n !== void 0) return n;
		let r = [];
		for (let n = 0; n < e.sorted.length; n += 1) e.searchText[n].includes(t) && r.push({
			record: e.sorted[n],
			rank: Ta(e.nameLower[n], e.kjvNameLower[n], t)
		});
		r.sort((e, t) => e.rank - t.rank);
		let i = r.map((e) => e.record);
		return e.queryCache.size >= Sa && e.queryCache.clear(), e.queryCache.set(t, i), i;
	}
}, Oa = class e extends Da {
	nameTypeCounts = /* @__PURE__ */ new Map();
	constructor(e, t, n) {
		super(e, t, "dataNamesMap", n);
	}
	static fromRawDataset(t, n, r) {
		let i = Object.entries(t).reduce((e, [t, n]) => {
			let r = typeof n == "object" && n ? n : {};
			return e[t] = {
				records: va(r.namesMap ?? n),
				versePersonsMap: ba(r.versePersonsMap)
			}, e;
		}, {});
		return new e(i, n, r);
	}
	static createEmpty() {
		return new e({ en: { records: [] } }, "en");
	}
	getNameTypes(e) {
		let t = this.resolveLang(e), n = this.nameTypeCounts.get(t);
		if (n !== void 0) return n;
		let r = /* @__PURE__ */ new Map();
		for (let e of this.getIndex(t).sorted) {
			let t = sa(e.type);
			r.set(t, (r.get(t) ?? 0) + 1);
		}
		let i = Array.from(r.entries()).map(([e, t]) => ({
			type: e,
			count: t
		})).sort((e, t) => e.count === t.count ? e.type.localeCompare(t.type) : t.count - e.count);
		return this.nameTypeCounts.set(t, i), i;
	}
	get nameTypes() {
		return this.getNameTypes();
	}
	searchNames(e, t = {}) {
		let { type: n, limit: r, ...i } = t;
		if (n === void 0) return this.searchRecords(e, t);
		let a = this.searchRecords(e, i).filter((e) => sa(e.type) === n);
		return r === void 0 ? a : a.slice(0, Math.max(0, r));
	}
	searchNamesPagination(e = {}) {
		return this.paginateRecords(this.searchNames(e.query ?? "", {
			lang: e.lang,
			type: e.type
		}), this.resolveLang(e.lang), e);
	}
	searchByShortVerse(e, t) {
		return this.searchRecordsByShortVerse(e, t);
	}
	getVerseRecordIds(e) {
		return e.versePersonsMap ?? {};
	}
}, ka = class e extends Da {
	constructor(e, t, n) {
		super(e, t, "dataLocationsMap", n);
	}
	static fromRawDataset(t, n, r) {
		let i = Object.entries(t).reduce((e, [t, n]) => {
			let r = typeof n == "object" && n ? n : {};
			return e[t] = {
				records: ya(r.locationsMap ?? r.namesMap ?? n),
				verseLocationsMap: ba(r.verseLocationsMap)
			}, e;
		}, {});
		return new e(i, n, r);
	}
	static createEmpty() {
		return new e({ en: { records: [] } }, "en");
	}
	searchLocations(e, t = {}) {
		return this.searchRecords(e, t);
	}
	searchLocationsPagination(e = {}) {
		return this.paginateRecords(this.searchLocations(e.query ?? "", { lang: e.lang }), this.resolveLang(e.lang), e);
	}
	searchByShortVerse(e, t) {
		return this.searchRecordsByShortVerse(e, t);
	}
	getVerseRecordIds(e) {
		return e.verseLocationsMap ?? {};
	}
}, Aa = Oa.createEmpty(), ja = ka.createEmpty(), Ma = Nn({
	locationsLookupManager: ja,
	namesLookupManager: Aa
});
function Na({ children: e, locationsLookupManager: t, namesLookupManager: n }) {
	let r = Rn(() => ({
		locationsLookupManager: t ?? ja,
		namesLookupManager: n ?? Aa
	}), [t, n]);
	return /* @__PURE__ */ z(Ma.Provider, {
		value: r,
		children: e
	});
}
function Pa() {
	return In(Ma);
}
function Fa() {
	return In(Ma).namesLookupManager;
}
function Ia() {
	return In(Ma).locationsLookupManager;
}
//#endregion
//#region node_modules/@lexical/link/dist/LexicalLink.prod.mjs
var La = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]), Ra = class e extends dt {
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
		let t = M().createElement("a");
		return this.updateLinkDOM(null, t, e), A(t, e.theme.link), t;
	}
	updateLinkDOM(e, t, n) {
		if (Pt(t)) {
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
			conversion: Ha,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Ua().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
	}
	sanitizeUrl(e) {
		let t = e;
		e = Xa(e);
		try {
			let t = new URL(Xa(e));
			if (!La.has(t.protocol)) return "about:blank";
		} catch {
			let e = t.replace(/[\u0000-\u001F\u007F\s]/g, "").match(/^([a-z][a-z0-9+.-]*):/i);
			if (e != null && !La.has(`${e[1].toLowerCase()}:`)) return "about:blank";
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
		let n = rt(this);
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
		if (!j(t)) return !1;
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
function za(e) {
	let t = x(e, "next");
	return [t, t.getFlipped()];
}
function Ba(e, t) {
	for (let n of t) if (n.origin.isAttached()) {
		c(e, Bt(n));
		return;
	}
}
function Va(e) {
	let t = N(), n = null, r = null;
	function i() {
		j(t) && (Ba(t.anchor, n), Ba(t.focus, r), pe(t));
	}
	j(t) && (n = za(t.anchor), r = za(t.focus));
	let a = !1;
	for (let t of Ne(e, "next")) {
		let n = t.origin;
		if (P(n) && !n.isInline()) {
			let r = n.getChildren();
			if (r.length > 0) {
				let t = rt(e);
				t.append(...r), n.append(t), a = !0;
			}
			Ge(n, Ke(t), { $shouldSplit: () => !1 });
		}
	}
	function o(e, t, n) {
		let [r, i] = e, a = (e) => w(e) && e.origin.is(t);
		if (!a(r) && !a(i)) return e;
		let o = Bt(Ne(n, "next"));
		return [o, o.getFlipped()];
	}
	if (e.isAttached()) {
		let t = e.getPreviousSibling();
		if (Z(t) && t.shouldMergeAdjacentLink(e)) return n &&= o(n, t, e), r &&= o(r, t, e), t.append(...e.getChildren()), e.remove(), void i();
		let s = e.getNextSibling();
		Z(s) && e.shouldMergeAdjacentLink(s) && (n &&= o(n, e, s), r &&= o(r, e, s), e.append(...s.getChildren()), s.remove(), a = !0);
	}
	if (a) {
		if (!e.canBeEmpty() && e.isEmpty()) {
			let t = e.getParent();
			e.remove(), t && t.isEmpty() && t.remove();
		}
		i();
	}
}
function Ha(e) {
	let t = null;
	if (Pt(e)) {
		let n = e.textContent;
		(n !== null && n !== "" || e.children.length > 0) && (t = Ua(e.getAttribute("href") || "", {
			rel: e.getAttribute("rel"),
			target: e.getAttribute("target"),
			title: e.getAttribute("title")
		}));
	}
	return { node: t };
}
function Ua(e = "", t) {
	return gt(new Ra(e, t));
}
function Z(e) {
	return e instanceof Ra;
}
var Wa = class e extends Ra {
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
		return this.__isUnlinked ? M().createElement("span") : super.createDOM(e);
	}
	updateDOM(e, t, n) {
		return super.updateDOM(e, t, n) || e.__isUnlinked !== this.__isUnlinked;
	}
	static importJSON(e) {
		return Ga().updateFromJSON(e);
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
		let n = Ga(this.__url, {
			isUnlinked: this.__isUnlinked,
			rel: this.__rel,
			target: this.__target,
			title: this.__title
		});
		return this.insertAfter(n, t), n;
	}
};
function Ga(e = "", t) {
	return gt(new Wa(e, t));
}
function Q(e) {
	return e instanceof Wa;
}
var Ka = /* @__PURE__ */ Ht("TOGGLE_LINK_COMMAND");
function qa(e, t) {
	if (e.type === "element") {
		let n = e.getNode();
		return P(n) || function(e, ...t) {
			let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
			r.append("code", e);
			for (let e of t) r.append("v", e);
			throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
		}(252), n.getChildren()[e.offset + t] || null;
	}
	return null;
}
function Ja(e, t = {}) {
	let n;
	if (e && typeof e == "object") {
		let { url: r, ...i } = e;
		n = r, t = {
			...i,
			...t
		};
	} else n = e;
	let { target: r, title: a } = t, o = t.rel === void 0 ? "noreferrer" : t.rel, s = N();
	if (s === null || !j(s) && !_(s)) return;
	if (_(s)) {
		let e = s.getNodes();
		if (e.length === 0) return;
		e.forEach((e) => {
			if (n === null) {
				let t = i(e, (e) => !Q(e) && Z(e));
				t && (t.insertBefore(e), t.getChildren().length === 0 && t.remove());
			} else {
				let t = i(e, (e) => !Q(e) && Z(e));
				if (t) t.setURL(n), r !== void 0 && t.setTarget(r), o !== void 0 && t.setRel(o);
				else {
					let t = Ua(n, {
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
		let t = i(e, (e) => !Q(e) && Z(e));
		t !== null && (t.getParentOrThrow().splice(t.getIndexWithinParent(), 0, t.getChildren()), t.remove());
		return;
	}
	let c = s.extract();
	if (n === null) {
		let e = /* @__PURE__ */ new Set();
		c.forEach((t) => {
			let n = i(t, (e) => !Q(e) && Z(e));
			if (n !== null) {
				let t = n.getKey();
				if (e.has(t)) return;
				(function(e, t) {
					let n = new Set(t.filter((t) => e.isParentOf(t)).map((e) => e.getKey())), r = e.getChildren(), i = (r) => n.has(r.getKey()) || P(r) && t.some((t) => e.isParentOf(t) && r.isParentOf(t)), a = r.filter(i);
					if (a.length === r.length) return r.forEach((t) => e.insertBefore(t)), void e.remove();
					let o = r.findIndex(i), s = r.findLastIndex(i), c = o === 0, l = s === r.length - 1;
					if (c) a.forEach((t) => e.insertBefore(t));
					else if (l) for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
					else {
						for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
						let t = r.slice(s + 1);
						if (t.length > 0) {
							let n = rt(e);
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
		let e = c[0], t = i(e, Z);
		if (t !== null) return u(t);
	}
	(function(e) {
		let t = N();
		if (!j(t)) return e();
		let n = pe(t), r = n.isBackward(), i = qa(n.anchor, r ? -1 : 0), a = qa(n.focus, r ? 0 : -1);
		if (e(), i || a) {
			let e = N();
			if (j(e)) {
				let t = e.clone();
				if (i) {
					let e = i.getParent();
					e && t.anchor.set(e.getKey(), i.getIndexWithinParent() + +!!r, "element");
				}
				if (a) {
					let e = a.getParent();
					e && t.focus.set(e.getKey(), a.getIndexWithinParent() + +!r, "element");
				}
				p(pe(t));
			}
		}
	})(() => {
		let e = null;
		for (let t of c) {
			if (!t.isAttached()) continue;
			let s = i(t, Z);
			if (s) {
				u(s);
				continue;
			}
			if (P(t)) {
				if (!t.isInline()) continue;
				if (Z(t)) {
					if (!(Q(t) || e !== null && e.getParentOrThrow().isParentOf(t))) {
						u(t), e = t;
						continue;
					}
					for (let e of t.getChildren()) t.insertBefore(e);
					t.remove();
					continue;
				}
			}
			let c = t.getPreviousSibling();
			Z(c) && c.is(e) ? c.append(t) : (e = Ua(n, {
				rel: o,
				target: r,
				title: a
			}), t.insertAfter(e), e.append(t));
		}
	});
}
var Ya = /^\+?[0-9\s()-]{5,}$/;
function Xa(e) {
	return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : Ya.test(e) ? `tel:${e}` : `https://${e}`;
}
kn.tag("a");
function Za(e, t) {
	return Ae(e.registerNodeTransform(Ra, Va), e.registerCommand(Ka, (e) => {
		let n = t.validateUrl.peek(), r = t.attributes.peek();
		if (e === null) return Ja(null), !0;
		if (typeof e == "string") return !(n !== void 0 && !n(e)) && (Ja(e, r), !0);
		{
			let { url: t, target: n, rel: i, title: a } = e;
			return Ja(t, {
				...r,
				rel: i,
				target: n,
				title: a
			}), !0;
		}
	}, 0), dn(() => {
		let n = t.validateUrl.value;
		if (!n) return;
		let r = t.attributes.value;
		return e.registerCommand(Te, (t) => {
			let i = N();
			if (!j(i) || i.isCollapsed() || !sn(t, ClipboardEvent) || t.clipboardData === null) return !1;
			let a = t.clipboardData.getData("text");
			return n(a) ? !i.getNodes().some((e) => P(e) || O(e) && !e.isSimpleText()) && (e.dispatchCommand(Ka, {
				...r,
				url: a
			}), t.preventDefault(), !0) : !1;
		}, 1);
	}));
}
function Qa(e, t, n = {}) {
	let r = (n) => {
		let r = n.target;
		if (!k(r)) return;
		let a = Be(r);
		if (a === null) return;
		let o = null, s = null, c = !1;
		if (a.update(() => {
			let e = Me(r);
			if (e !== null) {
				let n = i(e, P);
				if (!t.disabled.peek()) if (Z(n)) c = Q(n) && n.getIsUnlinked(), o = n.sanitizeUrl(n.getURL()), s = n.getTarget();
				else {
					let e = function(e, t) {
						let n = e;
						for (; n != null;) {
							if (t(n)) return n;
							n = n.parentNode;
						}
						return null;
					}(r, Pt);
					e !== null && (o = e.href, s = e.target);
				}
			}
		}), o === null || o === "" || c) return;
		let l = e.read("latest", N);
		if (j(l) && !l.isCollapsed()) return void n.preventDefault();
		let u = n.type === "auxclick" && n.button === 1;
		window.open(o, t.newTab.peek() || u || n.metaKey || n.ctrlKey || s === "_blank" ? "_blank" : "_self"), n.preventDefault();
	}, a = (e) => {
		e.button === 1 && r(e);
	};
	return e.registerRootListener((e) => {
		if (e) return It(e, {
			click: r,
			mouseup: a
		}, n);
	});
}
function $a(e, t = (e) => e) {
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
function eo(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n](e);
		if (r) return r;
	}
	return null;
}
var to = /[.,;\s]/;
function no(e, t) {
	return t.test(e);
}
function ro(e, t) {
	return no(e[e.length - 1], t);
}
function io(e, t) {
	return no(e[0], t);
}
function ao(e, t) {
	let n = e.getPreviousSibling();
	return P(n) && (n = n.getLastDescendant()), n === null || Re(n) || O(n) && ro(n.getTextContent(), t);
}
function oo(e, t) {
	let n = e.getNextSibling();
	return P(n) && (n = n.getFirstDescendant()), n === null || Re(n) || O(n) && io(n.getTextContent(), t);
}
function so(e, t, n, r, i) {
	return (e > 0 ? no(r[e - 1], n) : ao(i[0], n)) ? t < r.length ? no(r[t], n) : oo(i[i.length - 1], n) : !1;
}
function co(e, t, n) {
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
function lo(e, t, n, r) {
	let i = Ga(r.url, r.attributes);
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
		let u = N(), d = u ? u.getNodes().find(O) : void 0, f = l(a.getTextContent());
		return f.setFormat(a.getFormat()), f.setDetail(a.getDetail()), f.setStyle(a.getStyle()), i.append(f, ...s), d && d === a && (j(u) ? f.select(u.anchor.offset, u.focus.offset) : _(u) && f.select(0, f.getTextContent().length)), a.replace(i), c;
	}
}
function uo(e, t, n, r) {
	let i = e.getChildren(), a = i.length;
	for (let t = 0; t < a; t++) {
		let r = i[t];
		if (!O(r) || !r.isSimpleText()) return fo(e), void n(null, e.getURL());
	}
	let o = e.getTextContent(), s = eo(o, t);
	if (s === null || s.text !== o || !ao(e, r) || !oo(e, r)) return fo(e), void n(null, e.getURL());
	let c = e.getURL();
	if (c !== s.url && (e.setURL(s.url), n(s.url, c)), s.attributes) {
		let t = e.getRel();
		t !== s.attributes.rel && (e.setRel(s.attributes.rel || null), n(s.attributes.rel || null, t));
		let r = e.getTarget();
		r !== s.attributes.target && (e.setTarget(s.attributes.target || null), n(s.attributes.target || null, r));
	}
}
function fo(e) {
	let t = e.getChildren();
	for (let n = t.length - 1; n >= 0; n--) e.insertAfter(t[n]);
	return e.remove(), t.map((e) => e.getLatest());
}
var po = {
	changeHandlers: [],
	excludeParents: [],
	matchers: [],
	separatorRegex: to
};
function mo(e, t = po) {
	let { matchers: n, changeHandlers: r, excludeParents: i, separatorRegex: a = to } = t, o = (e, t) => {
		for (let n of r) n(e, t);
	};
	return Ae(e.registerNodeTransform(Ee, (e) => {
		let t = e.getParentOrThrow(), r = e.getPreviousSibling();
		Q(t) ? uo(t, n, o, a) : !Z(t) && !i.some((e) => e(t)) && (e.isSimpleText() && (io(e.getTextContent(), a) || !Q(r)) && (function(e, t, n, r) {
			for (let t of e) {
				let e = t.getParent();
				if (Q(e) && !e.getIsUnlinked()) return;
			}
			let i = [...e], a = i.map((e) => e.getTextContent()).join(""), o, s = a, c = 0;
			for (; (o = eo(s, t)) && o !== null;) {
				let e = o.index, t = e + o.length;
				if (so(c + e, c + t, r, a, i)) {
					let [r, , a, l] = co(i, c + e, c + t), u = !1;
					for (let e of a) {
						let t = e.getParent();
						if (Q(t) && !t.getIsUnlinked()) {
							u = !0;
							break;
						}
					}
					if (u) {
						c += t, s = s.substring(t);
						continue;
					}
					let d = lo(a, c + e - r, c + t - r, o);
					i = d ? [d, ...l] : l, n(o.url, null), c = 0;
				} else c += t;
				s = s.substring(t);
			}
		})(function(e) {
			let t = [e], n = e.getNextSibling();
			for (; n !== null && O(n) && n.isSimpleText() && (t.push(n), !/[\s]/.test(n.getTextContent()));) n = n.getNextSibling();
			return t;
		}(e), n, o, a), (function(e, t, n, r) {
			let i = e.getParent(), a = e.getPreviousSibling(), o = e.getNextSibling(), s = e.getTextContent();
			if (!Q(i) || i.getIsUnlinked()) {
				if (Q(a) && !a.getIsUnlinked() && a.is(e.getPreviousSibling()) && e.getParent() === a.getParent()) {
					if (!io(s, r)) return fo(a), void n(null, a.getURL());
					if (c = s, a.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(c) : /^\.[a-zA-Z0-9]{1,}/.test(c)) {
						let i = a.getTextContent() + s, o = eo(i, t);
						o !== null && o.text === i && (a.append(e), uo(a, t, n, r), n(null, a.getURL()));
					}
				}
				var c;
				!Q(o) || o.getIsUnlinked() || ro(s, r) || o.is(e.getNextSibling()) && e.getParent() === o.getParent() && (fo(o), n(null, o.getURL()));
			}
		})(e, n, o, a));
	}), e.registerCommand(Ka, (e) => {
		let t = N();
		return e !== null || !j(t) || t.extract().forEach((e) => {
			let t = e.getParent();
			Q(t) && (t.setIsUnlinked(!t.getIsUnlinked()), t.markDirty());
		}), !1;
	}, 1));
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalRichTextPlugin.prod.mjs
function ho(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var go = Ve ? Ln : I;
function _o({ editor: e, ErrorBoundary: t }) {
	return function(e, t) {
		let [n, r] = R(() => e.getDecorators());
		return go(() => e.registerDecoratorListener((e) => {
			Un(() => {
				r(e);
			});
		}), [e]), I(() => {
			r(e.getDecorators());
		}, [e]), Rn(() => {
			let r = [], i = Object.keys(n);
			for (let a = 0; a < i.length; a++) {
				let o = i[a], s = /*#__PURE__*/ z(t, {
					onError: (t) => e._onError(t),
					children: /*#__PURE__*/ z(Mn, {
						fallback: null,
						children: n[o]
					})
				}), c = e.getElementByKey(o);
				c !== null && r.push(/*#__PURE__*/ Hn(s, c, o));
			}
			return r;
		}, [
			t,
			n,
			e
		]);
	}(e, t);
}
function vo({ editor: e, ErrorBoundary: t }) {
	return function(e) {
		let t = pn.maybeFromEditor(e);
		if (t && t.hasExtensionByName(mn.name)) {
			for (let e of ["@lexical/plain-text", "@lexical/rich-text"]) t.hasExtensionByName(e) && ho(320, e);
			return !0;
		}
		return !1;
	}(e) ? null : /*#__PURE__*/ z(_o, {
		editor: e,
		ErrorBoundary: t
	});
}
function yo(e) {
	return e.read("latest", fn(e.isComposing()));
}
function bo({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = _t();
	return function(e) {
		go(() => Ae(fr(e), Tn(e)), [e]);
	}(r), /*#__PURE__*/ B(zn, { children: [
		e,
		/*#__PURE__*/ z(xo, { content: t }),
		/*#__PURE__*/ z(vo, {
			editor: r,
			ErrorBoundary: n
		})
	] });
}
function xo({ content: e }) {
	let [t] = _t(), n = function(e) {
		let [t, n] = R(() => yo(e));
		return go(() => {
			function t() {
				let t = yo(e);
				n(t);
			}
			return t(), Ae(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), r = An();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region src/plugins/MentionBibleVersesPlugin/openBibleVerseAdvancedPanelEvent.ts
var So = "bible-note:open-mention-bible-verse-advanced-panel";
function Co(e) {
	window.dispatchEvent(new CustomEvent(So, { detail: e }));
}
//#endregion
//#region src/plugins/MentionLocationsPlugin/openLocationAdvancedPanelEvent.ts
var wo = "bible-note:open-mention-location-advanced-panel";
function To(e) {
	window.dispatchEvent(new CustomEvent(wo, { detail: e }));
}
//#endregion
//#region src/plugins/MentionNamePlugin/openPersonAdvancedPanelEvent.ts
var Eo = "bible-note:open-mention-person-advanced-panel";
function Do(e) {
	window.dispatchEvent(new CustomEvent(Eo, { detail: e }));
}
//#endregion
//#region src/plugins/MentionReferenceText/index.tsx
var Oo = /\[([^\]]+)\]\((?:name-id|location-id|verse-key|chapter-key|book-key):\/\/[^)]*\)/g;
function ko(e) {
	return e.replace(Oo, "$1");
}
var Ao = /\[([^\]]+)\]\((name-id|location-id|verse-key|chapter-key|book-key):\/\/([^)]*)\)/g;
function jo(e) {
	let t = [], n = new RegExp(Ao), r = 0, i;
	for (; (i = n.exec(e)) !== null;) {
		i.index > r && t.push({
			kind: "text",
			text: e.slice(r, i.index)
		});
		let a = i[1], o = i[2], s = i[3].trim();
		s === "" || o === "chapter-key" || o === "book-key" ? t.push({
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
function Mo({ locationsLookupManager: e, namesLookupManager: t }, n, r) {
	if (n.kind === "name") {
		Do({
			anchorElement: r,
			id: n.target,
			name: t.getRecordById(n.target)?.name ?? n.label
		});
		return;
	}
	if (n.kind === "location") {
		To({
			anchorElement: r,
			id: n.target,
			name: e.getRecordById(n.target)?.name ?? n.label
		});
		return;
	}
	Co({
		anchorElement: r,
		shortVerse: n.target
	});
}
function No({ value: e }) {
	let t = Pa();
	return /* @__PURE__ */ z(zn, { children: Rn(() => jo(e), [e]).map((e, n) => e.kind === "text" ? /* @__PURE__ */ z(jn.Fragment, { children: e.text }, n) : /* @__PURE__ */ z("button", {
		className: `mention-reference-link mention-reference-link--${e.kind}`,
		type: "button",
		onClick: (n) => {
			n.preventDefault(), n.stopPropagation(), Mo(t, e, n.currentTarget);
		},
		children: e.label
	}, n)) });
}
//#endregion
//#region src/plugins/MentionAdvancedPanelUtils.ts
var Po = 320, Fo = 120, Io = 220, Lo = 10, Ro = 22, zo = 32, Bo = 1e3;
function Vo() {
	return Bo += 1, Bo;
}
function Ho(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Uo(e) {
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
async function Wo(e, t) {
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
	Uo(e);
}
function Go(e, t) {
	let n = t.getBoundingClientRect();
	if (e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom) return !1;
	let r = window.getComputedStyle(t), i = Number.parseFloat(r.paddingLeft), a = Number.isFinite(i) && i > 0 ? Math.min(i + 6, zo) : Ro;
	return e.clientX <= n.left + a;
}
function Ko() {
	return {
		bottom: window.innerHeight,
		height: window.innerHeight,
		left: 0,
		right: window.innerWidth,
		top: 0,
		width: window.innerWidth
	};
}
function qo(e) {
	let t = e?.closest(".editor-container") ?? document.querySelector(".editor-container");
	if (t instanceof HTMLElement) {
		let e = t.getBoundingClientRect();
		if (e.width > 0 && e.height > 0) return e;
	}
	return Ko();
}
function Jo(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Yo(e, t) {
	return wn(e ?? t?.closest(".editor-zoom-surface") ?? document.querySelector(".editor-zoom-surface"));
}
var Xo = 420, Zo = 10, Qo = 12;
function $o(e, t) {
	let n = Yo(null, e), r = e.getBoundingClientRect(), i = t * n, a = Math.min(Xo * n, window.innerWidth - Qo * 2), o = Math.max(Qo, window.innerWidth - a - Qo), s = Math.min(Math.max(r.left, Qo), o), c = window.innerHeight - r.bottom - Zo - Qo, l = r.top - Zo - Qo, u = c < i && l > c, d = u ? r.top - Zo : r.bottom + Zo, f = Math.max(Qo, u ? l : c);
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
function es(e, t, n) {
	let r = qo(n), i = Yo(t, n), a = Math.max(Io, t?.offsetWidth ?? Po) * i, o = Math.max(96, t?.offsetHeight ?? Fo) * i, s = Math.max(r.left, r.right - Math.min(a, r.width)), c = Math.max(r.top, r.bottom - Math.min(o, r.height));
	return {
		left: Jo(e.left, r.left, s),
		top: Jo(e.top, r.top, c)
	};
}
function ts(e) {
	let t = qo(e), n = Fo * Yo(null, e), r = e.getBoundingClientRect(), i = r.left, a = r.bottom + Lo, o = r.top - n - Lo;
	return es({
		left: i,
		top: a + n > t.bottom && o >= t.top ? o : a
	}, null, e);
}
//#endregion
//#region src/utils/mentionRecordSummary.ts
function ns(e) {
	let t = X(e);
	return t === "" ? "" : t.toLowerCase() === "unknown" ? "Unknown" : t;
}
function rs(e) {
	let t = X(e);
	return t !== "" && t.toLowerCase() !== "unknown";
}
function is(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function as(e) {
	return `${e.type}: ${e.start} to ${e.end}`;
}
function os(e) {
	let t = /* @__PURE__ */ new Map();
	return e.links.forEach((e) => {
		t.set(e.url, e);
	}), e.wikipedia !== null && !t.has(e.wikipedia) && t.set(e.wikipedia, {
		type: "wikipedia",
		url: e.wikipedia
	}), Array.from(t.values());
}
function ss(e, t) {
	let n = e.getRecordById(t);
	if (n !== null) return n;
	let r = e.getRecordsByName(t);
	return r.length === 1 ? r[0] : null;
}
function cs(e, t) {
	return t.map((t) => e.getRecordById(t)?.name ?? t);
}
function ls(e, t) {
	return t.map((t) => ss(e, t)?.name ?? t);
}
function us(e) {
	return e.map((e) => `${is(e.type)}: ${e.url}`).join(", ");
}
async function ds(e, t) {
	return t === void 0 ? [...e] : Promise.all(e.map((e) => t(e)));
}
function fs(e, t) {
	for (let [n, r] of t) r.length > 0 && e.push([n, r.join(", ")]);
}
function ps(e) {
	return e.filter((e) => e !== "" && e.toLowerCase() !== "unknown");
}
async function ms({ locationsLookupManager: e, namesLookupManager: t }, n, r) {
	let i = [], a = ca(n);
	a !== null && i.push(["KJV name", a]), rs(n.oldName) && i.push(["Also called", ns(n.oldName)]), n.years.length > 0 && i.push(["Years", n.years.map(as).join(", ")]), fs(i, [
		["Locations", ls(e, n.locations)],
		["Parents", cs(t, n.parents)],
		["Spouses", cs(t, n.spouses)],
		["Children", cs(t, n.children)],
		["Siblings", cs(t, n.siblings)],
		["Cousins", cs(t, n.cousin)],
		["Verses", await ds(n.verses, r)]
	]);
	let o = os(n);
	return o.length > 0 && i.push(["Links", us(o)]), {
		name: n.name,
		title: ko(n.title),
		description: ko(n.description),
		facts: ps([
			n.type,
			n.gender,
			n.age
		]),
		detailRows: i
	};
}
async function hs(e, t, n) {
	let r = [], i = ca(t);
	i !== null && r.push(["KJV name", i]), rs(t.oldName) && r.push(["Also called", ns(t.oldName)]), rs(t.modernIdentification) && r.push(["Modern identification", ns(t.modernIdentification)]), fs(r, [["Related locations", ls(e, t.relatedLocations)], ["Verses", await ds(t.verses, n)]]);
	let a = os(t);
	return a.length > 0 && r.push(["Links", us(a)]), t.coordinates !== null && r.push(["Coordinates", `${t.coordinates.latitude}, ${t.coordinates.longitude}`]), {
		name: t.name,
		title: ko(t.title),
		description: ko(t.description),
		facts: ps([t.type]),
		detailRows: r
	};
}
function gs(e) {
	let t = [e.name], n = [`<p><strong>${Ho(e.name)}</strong></p>`];
	if (e.title !== "" && (t.push(e.title), n.push(`<p><em>${Ho(e.title)}</em></p>`)), e.description !== "" && (t.push(e.description), n.push(`<p>${Ho(e.description)}</p>`)), e.facts.length > 0) {
		let r = e.facts.join(", ");
		t.push(r), n.push(`<p>${Ho(r)}</p>`);
	}
	return e.detailRows.length > 0 && (t.push(e.detailRows.map(([e, t]) => `${e}: ${t}`).join("\n")), n.push("<p>" + e.detailRows.map(([e, t]) => `<strong>${Ho(e)}:</strong> ${Ho(t)}`).join("<br />") + "</p>")), {
		plainText: t.join("\n\n"),
		html: n.join("")
	};
}
//#endregion
//#region src/nodes/EmojiNode.tsx
var _s = class e extends Ee {
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
		return vs(e.className, e.text).updateFromJSON(e);
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
function vs(e, t) {
	return gt(new _s(e, t).setMode("token"));
}
//#endregion
//#region src/nodes/KeywordNode.ts
var ys = class e extends Ee {
	static getType() {
		return "keyword";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	static importJSON(e) {
		return bs().updateFromJSON(e);
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
function bs(e = "") {
	return gt(new ys(e));
}
//#endregion
//#region src/nodes/MentionNode.ts
function xs(e) {
	return e === "mention" || e === "location" || e === "bible-verse" ? e : e === "hashtag" ? "location" : void 0;
}
function Ss(e, t, n) {
	let r = xs(n);
	return r === void 0 ? e.startsWith("#") || t.startsWith("#") ? "location" : e.startsWith("^") || t.startsWith("^") ? "bible-verse" : "mention" : r;
}
function Cs(e, t) {
	return t === "location" && e.startsWith("#") || t === "bible-verse" && e.startsWith("^") ? e.slice(1) : e;
}
function ws(e, t, n) {
	return n === "location" && e.startsWith("#") ? t : n === "bible-verse" && e.startsWith("^") ? e.slice(1) : e;
}
function Ts(e, t, n, r, i, a) {
	e.setAttribute("data-lexical-mention", "true"), e.setAttribute("data-lexical-mention-kind", n), r === null ? e.removeAttribute("data-lexical-mention-id") : e.setAttribute("data-lexical-mention-id", r), i === null ? e.removeAttribute("data-lexical-mention-data") : e.setAttribute("data-lexical-mention-data", i), a ? e.setAttribute("data-lexical-mention-name", t) : e.removeAttribute("data-lexical-mention-name");
}
function Es(e) {
	let t = e.textContent, n = e.getAttribute("data-lexical-mention-data"), r = e.getAttribute("data-lexical-mention-id"), i = e.getAttribute("data-lexical-mention-name"), a = e.getAttribute("data-lexical-mention-kind");
	if (t !== null) {
		let e = Ss(typeof i == "string" ? i : t, t, a === "mention" || a === "location" || a === "bible-verse" || a === "hashtag" ? a : void 0), o = Cs(typeof i == "string" ? i : t, e);
		return { node: Os(o, ws(t, o, e), r, e, n) };
	}
	return null;
}
var Ds = class e extends Ee {
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
		let t = Ss(e.mentionName, e.text, e.mentionKind), n = Cs(e.mentionName, t), r = ws(e.text, n, t);
		return Os(n, r, e.mentionId ?? null, t, e.mentionData ?? null).updateFromJSON({
			...e,
			mentionKind: t,
			mentionName: n,
			text: r
		});
	}
	updateFromJSON(e) {
		let t = Ss(e.mentionName, e.text, e.mentionKind), n = Cs(e.mentionName, t), r = ws(e.text, n, t), i = super.updateFromJSON({
			...e,
			text: r
		});
		return i.__mention = n, i.__mentionData = e.mentionData ?? null, i.__mentionId = e.mentionId ?? null, i.__mentionKind = t, i;
	}
	constructor(e, t, n, r, i, a) {
		let o = Ss(e, t ?? e, r), s = Cs(e, o), c = ws(t ?? e, s, o);
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
		return t.className = "mention", t.spellcheck = !1, Ts(t, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, !0), t;
	}
	updateDOM(e, t, n) {
		let r = super.updateDOM(e, t, n), i = this.__mentionKind;
		return (e.__mention !== this.__mention || e.__mentionData !== this.__mentionData || e.__mentionId !== this.__mentionId || e.__mentionKind !== this.__mentionKind || e.__text !== this.__text || t.getAttribute("data-lexical-mention-kind") !== i || t.getAttribute("data-lexical-mention-data") !== this.__mentionData) && Ts(t, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, !0), r;
	}
	exportDOM() {
		let e = document.createElement("span");
		return Ts(e, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, this.__text !== this.__mention), e.textContent = this.__text, { element: e };
	}
	static importDOM() {
		return { span: (e) => e.hasAttribute("data-lexical-mention") ? {
			conversion: Es,
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
function Os(e, t, n, r, i) {
	let a = new Ds(e, t, n, r, i);
	return a.setMode("segmented").toggleDirectionless(), gt(a);
}
//#endregion
//#region src/nodes/MediaNode.tsx
var ks = jn.lazy(() => import("./MediaComponent-D-AMKM9e.mjs"));
function As(e) {
	return e.parentElement != null && e.parentElement.tagName === "LI" && e.previousSibling === null && e.getAttribute("aria-roledescription") === "checkbox";
}
function js(e) {
	let t = e, n = t.getAttribute("src");
	if (!n || n.startsWith("file:///") || As(t)) return null;
	let { alt: r, width: i, height: a } = t;
	return { node: Rs({
		altText: r,
		height: a,
		src: n,
		width: i
	}) };
}
function Ms(e) {
	let t = e, n = t.getAttribute("src") || t.currentSrc;
	return n ? { node: Rs({
		altText: t.getAttribute("title") || "",
		height: t.height,
		mediaType: "video",
		src: n,
		width: t.width
	}) } : null;
}
function Ns(e) {
	let t = e, n = t.getAttribute("src") || t.currentSrc;
	return n ? { node: Rs({
		altText: t.getAttribute("title") || "",
		height: Number(t.getAttribute("height")) || void 0,
		mediaType: "audio",
		src: n,
		width: Number(t.getAttribute("width")) || void 0
	}) } : null;
}
function Ps(e) {
	let t = e.getAttribute("src") || e.getAttribute("data") || "", n = e.getAttribute("type") || "";
	return (e.getAttribute("data-lexical-media-type") || "") === "pdf" || n === "application/pdf" || t.toLowerCase().split(/[?#]/)[0].endsWith(".pdf");
}
function Fs(e) {
	let t = e, n = t.getAttribute("src") || t.getAttribute("data");
	return !n || !Ps(t) ? null : { node: Rs({
		altText: t.getAttribute("title") || "",
		height: Number(t.getAttribute("height")) || void 0,
		mediaType: "pdf",
		src: n,
		width: Number(t.getAttribute("width")) || void 0
	}) };
}
function Is() {
	for (let { origin: e } of v(Ne(d(), "next"))) if (!P(e)) return !1;
	return !0;
}
var Ls = class e extends E {
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
		return Rs({
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
				if (Is()) return null;
				let e = null, n = d().getFirstChild();
				return ot(n) && n.getNextSibling() === null && (e = tt(), e.anchor.set(n.getKey(), 0, "element"), e.focus.set(n.getKey(), n.getChildrenSize(), "element")), On(t, e);
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
				conversion: Ns,
				priority: 0
			}),
			embed: () => ({
				conversion: Fs,
				priority: 0
			}),
			figcaption: () => ({
				conversion: () => ({ node: null }),
				priority: 0
			}),
			figure: () => ({
				conversion: (e) => ({
					after: (t) => {
						let n = t.filter(zs), r = e.querySelector("figcaption");
						if (r) for (let e of n) e.setShowCaption(!0), e.__caption.update(() => {
							let e = Ot();
							Sn(e, xn(e, r), Fe()), p(null);
						}, { tag: $e });
						return n;
					},
					node: null
				}),
				priority: 0
			}),
			img: () => ({
				conversion: js,
				priority: 0
			}),
			iframe: (e) => Ps(e) ? {
				conversion: Fs,
				priority: 0
			} : null,
			object: () => ({
				conversion: Fs,
				priority: 0
			}),
			video: () => ({
				conversion: Ms,
				priority: 0
			})
		};
	}
	constructor(e, t, n, r, i, a, o, s, c, l = "image", u) {
		super(c), this.__src = e, this.__altText = t, this.__maxWidth = n, this.__width = r || "inherit", this.__height = i || "inherit", this.__mediaType = l, this.__previewSrc = u, this.__showCaption = a || !1, this.__caption = o || ft({
			namespace: "Playground/MediaNodeCaption",
			nodes: [
				St,
				Ee,
				S,
				h,
				Ra,
				_s,
				ys,
				Ds
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
		return /* @__PURE__ */ z(ks, {
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
function Rs({ altText: e, height: t, maxWidth: n = 500, captionsEnabled: r, mediaType: i, previewSrc: a, src: o, width: s, showCaption: c, caption: l, key: u }) {
	return gt(new Ls(o, e, n, s, t, c, l, r, u, i, a));
}
function zs(e) {
	return e instanceof Ls;
}
//#endregion
//#region src/utils/url.ts
var Bs = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]);
function Vs(e) {
	try {
		let t = new URL(e);
		if (!Bs.has(t.protocol)) return "about:blank";
	} catch {
		return e;
	}
	return e;
}
var Hs = /* @__PURE__ */ new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/);
function Us(e) {
	return e === "https://" || Hs.test(e);
}
//#endregion
//#region node_modules/@lexical/mark/dist/LexicalMark.prod.mjs
var Ws = [], Gs = class e extends dt {
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
		return Ks().updateFromJSON(e);
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
	constructor(e = Ws, t) {
		super(t), this.__ids = e;
	}
	createDOM(e) {
		let t = M().createElement("mark");
		return A(t, e.theme.mark), this.__ids.length > 1 && A(t, e.theme.markOverlap), t;
	}
	updateDOM(e, t, n) {
		let r = e.__ids, i = this.__ids, a = r.length, o = i.length, s = n.theme.markOverlap;
		return a !== o && (a === 1 ? o === 2 && A(t, s) : o === 1 && le(t, s)), !1;
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
		let n = Ks(this.__ids);
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
		if (!j(t) || n === "html") return !1;
		let r = t.anchor, i = t.focus, a = r.getNode(), o = i.getNode(), s = t.isBackward() ? r.offset - i.offset : i.offset - r.offset;
		return this.isParentOf(a) && this.isParentOf(o) && this.getTextContent().length === s;
	}
	excludeFromCopy(e) {
		return e !== "clone";
	}
};
function Ks(e = Ws) {
	return gt(new Gs(e));
}
function qs(e) {
	return e instanceof Gs;
}
function Js(e) {
	let t = e.getChildren(), n = null;
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		n === null ? e.insertBefore(i) : n.insertAfter(i), n = i;
	}
	e.remove();
}
function Ys(t, n, r, i) {
	let a = tt(), [o, s] = t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus], c, l;
	a.anchor.set(o.key, o.offset, o.type), a.focus.set(s.key, s.offset, s.type);
	let u = a.extract();
	for (let t of u) {
		if (P(l) && l.isParentOf(t)) continue;
		let n = null;
		if (O(t)) n = t;
		else {
			if (qs(t)) continue;
			(P(t) || e(t)) && t.isInline() && (n = t);
		}
		if (n !== null) {
			if (n && n.is(c)) continue;
			let e = n.getParent();
			e != null && e.is(c) || (l = void 0), c = e, l === void 0 && (l = (i || Ks)([r]), n.insertBefore(l)), l.append(n);
		} else c = void 0, l = void 0;
	}
	P(l) && (n ? l.selectStart() : l.selectEnd());
}
function Xs(e, t) {
	let n = e;
	for (; n !== null;) {
		if (qs(n)) return n.getIDs();
		if (O(n) && t === n.getTextContentSize()) {
			let e = n.getNextSibling();
			if (qs(e)) return e.getIDs();
		}
		n = n.getParent();
	}
	return null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalTypeaheadMenuPlugin.prod.mjs
var Zs = Ve ? Ln : I, Qs = class {
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
}, $s = (e) => {
	let t = e.closest("#typeahead-menu");
	if (!t) return;
	let n = t.getBoundingClientRect();
	n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function ec(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return n.top >= r.top - 6 && n.top <= r.bottom + 6;
}
function tc(e, t, n, r) {
	let [i] = _t();
	I(() => {
		if (t != null && e != null) {
			let e = i.getRootElement(), a = e == null ? document.body : Xt(e, !1), o = !1, s = ec(t, a), c = function() {
				o ||= (window.requestAnimationFrame(function() {
					n(), o = !1;
				}), !0);
				let e = ec(t, a);
				e !== s && (s = e, r?.(e));
			}, l = new ResizeObserver(n), u = Lt(e ?? t);
			return l.observe(t), Ae(qt(window, "resize", n), qt(document, "scroll", c, {
				capture: !0,
				passive: !0
			}), ...u.map((e) => qt(e, "scroll", c, {
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
var nc = /* @__PURE__ */ Ht("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function rc({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item";
	return t && (a += " selected"), /*#__PURE__*/ B("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: [i.icon, /*#__PURE__*/ z("span", {
			className: "text",
			children: i.title
		})]
	}, i.key);
}
function ic({ close: e, editor: t, anchorElementRef: n, resolution: r, options: i, menuRenderFn: a, onSelectOption: o, shouldSplitNodeWithQuery: c = !1, commandPriority: l = 1, preselectFirstItem: u = !0 }) {
	let [d, f] = R(null), p = d === null ? null : Math.min(i.length - 1, d);
	I(() => {
		u && f(0);
	}, [r.match && r.match.matchingString, u]);
	let m = F((n) => {
		t.update(() => {
			o(n, r.match != null && c ? function(e) {
				let t = N();
				if (!j(t) || !t.isCollapsed()) return null;
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
	]), h = F((e) => {
		let n = t.getRootElement();
		n !== null && (n.setAttribute("aria-activedescendant", "typeahead-item-" + e), f(e));
	}, [t]), g = F(() => n.current && i.length ? /*#__PURE__*/ Vn.createPortal(/*#__PURE__*/ z("div", {
		className: "typeahead-popover mentions-menu",
		children: /*#__PURE__*/ z("ul", { children: i.map((e, t) => /*#__PURE__*/ z(rc, {
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
	I(() => () => {
		let e = t.getRootElement();
		e !== null && e.removeAttribute("aria-activedescendant");
	}, [t]), Zs(() => {
		i === null ? f(null) : p === null && u && h(0);
	}, [
		i,
		p,
		h,
		u
	]), I(() => Ae(t.registerCommand(nc, ({ option: e }) => !(!e.ref || e.ref.current == null) && ($s(e.ref.current), !0), l)), [
		t,
		h,
		l
	]), I(() => Ae(t.registerCommand(de, (e) => {
		let n = e;
		if (i !== null && i.length) {
			let e = p === null || p === i.length - 1 ? 0 : p + 1;
			h(e);
			let r = i[e];
			if (!r) return h(-1), n.preventDefault(), n.stopImmediatePropagation(), !0;
			r.ref && r.ref.current && t.dispatchCommand(nc, {
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
			n.ref && n.ref.current && $s(n.ref.current), t.preventDefault(), t.stopImmediatePropagation();
		}
		return !0;
	}, l), t.registerCommand(it, (t) => {
		let n = t;
		return n.preventDefault(), n.stopImmediatePropagation(), e(), !0;
	}, l), t.registerCommand(Jt, (e) => {
		let t = e;
		return i !== null && p !== null && i[p] != null && (t.preventDefault(), t.stopImmediatePropagation(), m(i[p]), !0);
	}, l), t.registerCommand(Kt, (e) => !(i === null || p === null || i[p] == null || e && e.shiftKey) && (e !== null && (e.preventDefault(), e.stopImmediatePropagation()), m(i[p]), !0), l)), [
		m,
		e,
		t,
		i,
		p,
		h,
		l
	]);
	let _ = Rn(() => ({
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
function ac(e, t) {
	t != null && (e.className = t), e.setAttribute("aria-label", "Typeahead menu"), e.setAttribute("role", "listbox"), e.style.display = "block", e.style.position = "absolute";
}
function oc(e, t, n, r, i = !0) {
	let [a] = _t(), o = r ?? function(e) {
		if (!Ve) return;
		let t = e.getRootElement();
		if (t !== null) {
			let e = t.getRootNode();
			return y(e) ? e : t.ownerDocument.body;
		}
		return document.body;
	}(a), s = Ve ? f(a.getRootElement()).createElement("div") : null, c = L(s), l = F(() => {
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
			r.isConnected || (ac(r, n), o.append(r)), r.setAttribute("id", "typeahead-menu"), t.setAttribute("aria-controls", "typeahead-menu");
		}
	}, [
		a,
		e,
		i,
		n,
		o
	]);
	I(() => {
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
	let u = F((n) => {
		e !== null && (n || t(null));
	}, [e, t]);
	return tc(e, c.current, l, u), s != null && s === c.current && (ac(s, n), o?.append(s)), c;
}
var sc = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
function cc(e, { minLength: t = 1, maxLength: n = 75, punctuation: r = sc, allowWhitespace: i = !1 }) {
	return F((a) => {
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
function lc({ options: e, onQueryChange: t, onSelectOption: n, onOpen: r, onClose: i, menuRenderFn: a, triggerFn: o, anchorClassName: s, commandPriority: c = 1, parent: l, preselectFirstItem: u = !0, ignoreEntityBoundary: d = !1 }) {
	let [f] = _t(), [p, h] = R(null), g = oc(p, h, s, l), _ = F(() => {
		if (p === null) return;
		let e = () => {
			h(null);
		}, t;
		try {
			t = i && i();
		} finally {
			t ? t.then(e, e) : e();
		}
	}, [i, p]), v = F((e) => {
		h(e), r != null && p === null && r(e);
	}, [r, p]);
	return I(() => {
		let e = f.registerUpdateListener(() => {
			f.read("latest", () => {
				if (!f.isEditable()) return void _();
				if (f.isComposing()) return;
				let e = f._window || window, n = e.document.createRange(), r = N(), i = function(e) {
					let t = null;
					return e.read("latest", () => {
						let e = N();
						j(e) && (t = function(e) {
							let t = e.anchor;
							if (t.type !== "text") return null;
							let n = t.getNode();
							if (!n.isSimpleText()) return null;
							let r = t.offset;
							return n.getTextContent().slice(0, r);
						}(e));
					}), t;
				}(f);
				if (!j(r) || !r.isCollapsed() || i === null || n === null) return void _();
				let a = o(i, f);
				if (t(a ? a.matchingString : null), a !== null && (d || !function(e, t) {
					return t === 0 && e.read("latest", () => {
						let e = N();
						if (j(e)) {
							let t = e.anchor.getNode().getPreviousSibling();
							return O(t) && t.isTextEntity();
						}
						return !1;
					});
				}(f, a.leadOffset)) && function(e, t, n, r) {
					let i = re(n);
					if (i === null || !i.isCollapsed) return !1;
					let a = m(i, r), o = a.anchorNode, s = e, c = a.anchorOffset;
					if (o == null || c == null) return !1;
					try {
						t.setStart(o, s), t.setEnd(o, c);
					} catch {
						return !1;
					}
					return !0;
				}(a.leadOffset, n, e, f.getRootElement()) !== null) return void Fn(() => v({
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
	]), I(() => f.registerEditableListener((e) => {
		e || _();
	}), [f, _]), p === null || f === null || g.current === null ? null : /*#__PURE__*/ z(ic, {
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
var uc = "lexical-playground-media-files", dc = "media-files", fc = 1;
function pc() {
	return typeof window > "u" || !window.indexedDB ? null : window.indexedDB;
}
function mc() {
	let e = pc();
	return e === null ? Promise.resolve(null) : new Promise((t) => {
		let n = e.open(uc, fc);
		n.onupgradeneeded = () => {
			let e = n.result;
			e.objectStoreNames.contains(dc) || e.createObjectStore(dc, { keyPath: "src" });
		}, n.onsuccess = () => {
			t(n.result);
		}, n.onerror = () => {
			t(null);
		};
	});
}
function hc(e) {
	e.close();
}
async function gc(e, t) {
	if (e.trim() === "") return;
	let n = await mc();
	n !== null && await new Promise((r) => {
		let i = n.transaction(dc, "readwrite"), a = i.objectStore(dc), o = {
			file: t,
			name: t.name,
			src: e,
			type: t.type,
			updatedAt: Date.now()
		};
		i.oncomplete = () => {
			hc(n), r();
		}, i.onerror = () => {
			hc(n), r();
		}, i.onabort = () => {
			hc(n), r();
		}, a.put(o);
	});
}
async function _c(e) {
	if (e.trim() === "" || typeof URL.createObjectURL != "function") return;
	let t = await mc();
	if (t === null) return;
	let n = await new Promise((n) => {
		let r = t.transaction(dc, "readonly"), i = r.objectStore(dc).get(e);
		i.onsuccess = () => {
			let e = i.result;
			n(e?.file);
		}, i.onerror = () => {
			n(void 0);
		}, r.oncomplete = () => {
			hc(t);
		}, r.onerror = () => {
			hc(t);
		}, r.onabort = () => {
			hc(t);
		};
	});
	return n ? URL.createObjectURL(n) : void 0;
}
//#endregion
//#region src/utils/filePathResolver.ts
var vc = /^[a-z][a-z\d+.-]*:/i, yc = /^(?:blob|data|https?):/i;
function bc(e) {
	return typeof e == "string" ? e.trim() === "" ? null : e : null;
}
function xc(e) {
	return e.path || e.webkitRelativePath || e.name;
}
async function Sc(e, t, n) {
	if (e === void 0) return null;
	try {
		return bc(await e(t, { source: n }));
	} catch {
		return null;
	}
}
function Cc(e) {
	let t = e.trim();
	return t === "" || yc.test(t) ? !1 : t.startsWith("file://") || /^[a-z]:[\\/]/i.test(t) || t.startsWith("\\\\") || /^\.{1,2}[\\/]/.test(t) || t.startsWith("/") || !vc.test(t) && /[\\/]/.test(t);
}
//#endregion
//#region src/plugins/EmojisPlugin/index.ts
var wc = /* @__PURE__ */ new Map([
	[":)", ["emoji happysmile", "🙂"]],
	[":D", ["emoji veryhappysmile", "😀"]],
	[":(", ["emoji unhappysmile", "🙁"]],
	["<3", ["emoji heart", "❤"]]
]);
function Tc(e) {
	let t = e.getTextContent();
	for (let n = 0; n < t.length; n++) {
		let r = wc.get(t[n]) || wc.get(t.slice(n, n + 2));
		if (r !== void 0) {
			let [t, i] = r, a;
			n === 0 ? [a] = e.splitText(n + 2) : [, a] = e.splitText(n, n + 2);
			let o = vs(t, i);
			return a.replace(o), o;
		}
	}
	return null;
}
function Ec(e) {
	let t = e;
	for (; t !== null;) {
		if (!t.isSimpleText()) return;
		t = Tc(t);
	}
}
function Dc(e) {
	I(() => {
		if (!e.hasNodes([_s])) throw Error("EmojisPlugin: EmojiNode not registered on editor");
		return e.registerNodeTransform(Ee, Ec);
	}, [e]);
}
function Oc() {
	let [e] = _t();
	return Dc(e), null;
}
//#endregion
//#region node_modules/@lexical/react/dist/useLexicalTextEntity.prod.mjs
function kc(e, t, n) {
	let [r] = _t();
	I(() => Ae(...hn(r, e, t, n)), [
		n,
		r,
		e,
		t
	]);
}
//#endregion
//#region src/plugins/KeywordsPlugin/index.ts
var Ac = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function jc() {
	let [e] = _t();
	I(() => {
		if (!e.hasNodes([ys])) throw Error("KeywordsPlugin: KeywordNode not registered on editor");
	}, [e]);
	let t = F((e) => bs(e.getTextContent()), []);
	return kc(F((e) => {
		let t = Ac.exec(e);
		if (t === null) return null;
		let n = t[2].length, r = t.index + t[1].length;
		return {
			end: r + n,
			start: r
		};
	}, []), ys, t), null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalLinkPlugin.prod.mjs
function Mc({ validateUrl: e, attributes: t }) {
	let [n] = _t();
	return I(() => {
		if (!n.hasNodes([Ra])) throw Error("LinkPlugin: LinkNode not registered on editor");
	}), I(() => Za(n, gn({
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
function Nc({ hasLinkAttributes: e = !1 }) {
	return /* @__PURE__ */ z(Mc, {
		validateUrl: Us,
		attributes: e ? {
			rel: "noopener noreferrer",
			target: "_blank"
		} : void 0
	});
}
//#endregion
//#region src/plugins/MentionNamePlugin/nameTypeIcons.ts
var Pc = {
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
function Fc(e) {
	return `bi ${Pc[sa(e)]} icon`;
}
//#endregion
//#region src/plugins/MentionAdvancedPanel.tsx
var Ic = 1600;
function Lc(e, t) {
	return e.left === t.left && e.top === t.top;
}
function Rc({ anchorElement: e, iconClassName: t, name: n, nameContent: r, panelKind: i, position: a, copyLabel: o, textStyle: s, title: c, zIndex: l, onBringToFront: u, onClose: d, onCopy: f, onPositionChange: p }) {
	let m = L(null), h = L(null), g = L(e), _ = L(p), v = L(null), [y, b] = R(!1), [x, S] = R(!1);
	g.current = e, _.current = p, I(() => () => {
		v.current !== null && clearTimeout(v.current);
	}, []);
	let C = F(() => {
		f !== void 0 && Promise.resolve(f()).then(() => {
			S(!0), v.current !== null && clearTimeout(v.current), v.current = setTimeout(() => {
				S(!1), v.current = null;
			}, Ic);
		});
	}, [f]), w = F((e) => {
		let t = h.current;
		t === null || t.pointerId !== e.pointerId || (_.current(es({
			left: t.startLeft + e.clientX - t.startClientX,
			top: t.startTop + e.clientY - t.startClientY
		}, m.current, g.current)), e.preventDefault());
	}, []), T = F((e) => {
		let t = h.current;
		t === null || t.pointerId !== e.pointerId || (h.current = null, b(!1), document.removeEventListener("pointermove", w), document.removeEventListener("pointerup", T), document.removeEventListener("pointercancel", T), e.preventDefault());
	}, [w]), E = F((e) => {
		e.button === 0 && (e.target instanceof Element && e.target.closest("button, .mention-advanced-panel__name") || (u(), h.current = {
			pointerId: e.pointerId,
			startClientX: e.clientX,
			startClientY: e.clientY,
			startLeft: a.left,
			startTop: a.top
		}, b(!0), document.addEventListener("pointermove", w), document.addEventListener("pointerup", T), document.addEventListener("pointercancel", T), e.preventDefault(), e.stopPropagation()));
	}, [
		w,
		T,
		u,
		a.left,
		a.top
	]);
	I(() => () => {
		document.removeEventListener("pointermove", w), document.removeEventListener("pointerup", T), document.removeEventListener("pointercancel", T);
	}, [w, T]), I(() => {
		let t = () => {
			let t = es(a, m.current, e);
			Lc(t, a) || p(t);
		};
		return t(), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [
		e,
		p,
		a
	]);
	let D = qo(e), ee = Yo(m.current, e), O = {
		left: a.left / ee,
		maxHeight: Math.max(96, D.bottom - a.top) / ee,
		maxWidth: Math.max(220, D.right - a.left) / ee,
		position: "fixed",
		top: a.top / ee,
		zIndex: l
	};
	return /* @__PURE__ */ B("div", {
		ref: m,
		"aria-label": `${n} advanced panel`,
		className: `mention-advanced-panel${y ? " dragging" : ""}`,
		role: "dialog",
		style: O,
		tabIndex: 0,
		onFocus: u,
		onPointerDown: u,
		children: [/* @__PURE__ */ B("div", {
			className: "mention-advanced-panel__header",
			onPointerDown: E,
			children: [/* @__PURE__ */ B("div", {
				className: "mention-advanced-panel__name d-inline-flex align-items-center gap-2",
				style: s,
				children: [/* @__PURE__ */ z("i", {
					className: t,
					"aria-hidden": "true"
				}), r ?? /* @__PURE__ */ z("span", { children: n })]
			}), /* @__PURE__ */ B("div", {
				className: "mention-advanced-panel__actions",
				children: [f === void 0 ? null : /* @__PURE__ */ z("button", {
					"aria-label": x ? "Copied" : o ?? `Copy ${i} text`,
					className: `mention-advanced-panel__copy${x ? " mention-advanced-panel__copy--copied" : ""}`,
					title: x ? "Copied!" : "Copy",
					type: "button",
					onClick: C,
					children: /* @__PURE__ */ z("i", {
						className: x ? "bi bi-check2" : "bi bi-copy",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ z("button", {
					"aria-label": `Close ${i} panel`,
					className: "mention-advanced-panel__close",
					title: "Close",
					type: "button",
					onClick: d,
					children: /* @__PURE__ */ z("i", {
						className: "bi bi-x-lg",
						"aria-hidden": "true"
					})
				})]
			})]
		}), c ? /* @__PURE__ */ z("div", {
			className: "mention-advanced-panel__title",
			style: s,
			children: c
		}) : null]
	});
}
//#endregion
//#region src/plugins/MentionVerseReferenceList.tsx
function zc({ buttonClassName: e, enabled: t = !0, listClassName: n, values: r }) {
	let { shortToVerseData: i } = aa(), [a, o] = R({});
	return I(() => {
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
	]), /* @__PURE__ */ z("ul", {
		className: n,
		children: r.map((t) => {
			let n = a[t], r = n?.label ?? t;
			return /* @__PURE__ */ z("li", { children: /* @__PURE__ */ z("button", {
				className: e,
				style: n?.style,
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), Co({
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
var Bc = {
	NAME: "\\b[A-Z][^\\s\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;]",
	PUNCTUATION: "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;"
}.PUNCTUATION, Vc = ["#"].join(""), Hc = "[^" + Vc + Bc + "\\s]", Uc = "(?:\\.[ |$]| |[" + Bc + "]|)", Wc = RegExp("(^|\\s|\\()([" + Vc + "]((?:" + Hc + Uc + "){0,75}))$"), Gc = RegExp("(^|\\s|\\()([" + Vc + "]((?:" + Hc + "){0,50}))$"), Kc = 20, qc = 2e3, Jc = 150;
function Yc(e, t, n) {
	return {
		id: e,
		name: t,
		kjvName: null,
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
		uncertainty: !1,
		matterRange: Infinity
	};
}
async function Xc(e) {
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
function Zc({ inline: e = !1, label: t, value: n }) {
	return /* @__PURE__ */ B("div", {
		className: `mention-location-details__row${e ? " mention-location-details__row--inline" : ""}`,
		children: [/* @__PURE__ */ z("dt", { children: e ? `${t}:` : t }), /* @__PURE__ */ z("dd", { children: n })]
	});
}
function Qc({ label: e, value: t }) {
	return rs(t) ? /* @__PURE__ */ z(Zc, {
		inline: !0,
		label: e,
		value: ns(t)
	}) : null;
}
function $c({ children: e, count: t, defaultOpen: n, label: r, onOpen: i }) {
	let [a, o] = R(n);
	return /* @__PURE__ */ B("div", {
		className: "mention-location-details__row mention-location-details__row--collapsible",
		children: [/* @__PURE__ */ z("dt", { children: /* @__PURE__ */ B("button", {
			"aria-expanded": a,
			className: "mention-location-details__section-toggle",
			type: "button",
			onClick: () => {
				let e = !a;
				o(e), e && i?.();
			},
			children: [
				/* @__PURE__ */ z("i", {
					className: "bi bi-chevron-right mention-location-details__section-icon",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ z("span", { children: r }),
				t > 0 ? /* @__PURE__ */ z("span", {
					className: "mention-location-details__section-count",
					children: t
				}) : null
			]
		}) }), a ? /* @__PURE__ */ z("dd", { children: e }) : null]
	});
}
function el({ onOpenLocationReference: e, values: t }) {
	let n = Ia();
	return /* @__PURE__ */ z("ul", {
		className: "mention-location-details__list",
		children: t.map((t) => {
			let r = ss(n, t), i = r?.name ?? t;
			return /* @__PURE__ */ z("li", { children: r === null ? i : /* @__PURE__ */ z("button", {
				className: "mention-location-details__location-button",
				type: "button",
				onClick: (t) => {
					t.preventDefault(), t.stopPropagation(), e(r, t.currentTarget);
				},
				children: i
			}) }, t);
		})
	});
}
function tl({ label: e, onOpenLocationReference: t, values: n }) {
	return n.length === 0 ? null : /* @__PURE__ */ z($c, {
		count: n.length,
		defaultOpen: !0,
		label: e,
		children: /* @__PURE__ */ z(el, {
			onOpenLocationReference: t,
			values: n
		})
	});
}
function nl({ enabled: e, values: t }) {
	let [n, r] = R(!1);
	return t.length === 0 ? null : /* @__PURE__ */ z($c, {
		count: t.length,
		defaultOpen: !1,
		label: "Verses",
		onOpen: () => {
			r(!0);
		},
		children: /* @__PURE__ */ z(zc, {
			buttonClassName: "mention-location-details__location-button",
			enabled: e && n,
			listClassName: "mention-location-details__list",
			values: t
		})
	});
}
function rl({ links: e }) {
	return /* @__PURE__ */ z("ul", {
		className: "mention-location-details__list",
		children: e.map((e) => /* @__PURE__ */ z("li", { children: /* @__PURE__ */ z("a", {
			href: e.url,
			rel: "noreferrer",
			target: "_blank",
			children: is(e.type)
		}) }, `${e.type}:${e.url}`))
	});
}
function il({ links: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ z($c, {
		count: e.length,
		defaultOpen: !0,
		label: "Links",
		children: /* @__PURE__ */ z(rl, { links: e })
	});
}
function al({ coordinates: e, name: t }) {
	let { latitude: n, longitude: r } = e, i = `${n},${r}`, a = `https://maps.google.com/maps?q=${encodeURIComponent(i)}&z=8&output=embed`, o = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i)}`, s = t === "" ? "Location map" : `Map of ${t}`;
	return /* @__PURE__ */ B("div", {
		className: "mention-location-details__map",
		children: [
			/* @__PURE__ */ z("p", {
				className: "mention-location-details__map-note",
				children: "Approximate location — the marker is an estimated point and may not be exact."
			}),
			/* @__PURE__ */ z("iframe", {
				className: "mention-location-details__map-frame",
				title: s,
				src: a,
				loading: "lazy",
				referrerPolicy: "no-referrer-when-downgrade",
				allowFullScreen: !0
			}),
			/* @__PURE__ */ z("a", {
				className: "mention-location-details__map-link",
				href: o,
				rel: "noreferrer",
				target: "_blank",
				children: "Open in Google Maps"
			})
		]
	});
}
function ol({ includeTitle: e = !0, mentionLocation: t }) {
	let n = [t.type].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	return /* @__PURE__ */ B("div", {
		className: "mention-location-basic-info",
		children: [
			e && t.title ? /* @__PURE__ */ z("div", {
				className: "mention-location-basic-info__title",
				children: /* @__PURE__ */ z(No, { value: t.title })
			}) : null,
			t.description ? /* @__PURE__ */ z("p", {
				className: "mention-location-basic-info__description",
				children: /* @__PURE__ */ z(No, { value: t.description })
			}) : null,
			n.length > 0 ? /* @__PURE__ */ z("div", {
				className: "mention-location-basic-info__facts",
				children: n.map((e) => /* @__PURE__ */ z("span", { children: e }, e))
			}) : null
		]
	});
}
function sl({ includeTitle: e = !0, mentionLocation: t, onOpenLocationReference: n }) {
	let [r, i] = R(!1);
	return /* @__PURE__ */ B("details", {
		className: "mention-location-details",
		children: [/* @__PURE__ */ B("summary", {
			className: "mention-location-details__summary",
			onClick: () => {
				i(!0);
			},
			children: [/* @__PURE__ */ z("i", {
				className: "bi bi-chevron-right mention-location-details__summary-icon",
				"aria-hidden": "true"
			}), /* @__PURE__ */ z("span", { children: "Details" })]
		}), /* @__PURE__ */ B("div", {
			className: "mention-location-details__body",
			children: [
				t.description ? /* @__PURE__ */ z("p", {
					className: "mention-location-details__description",
					children: /* @__PURE__ */ z(No, { value: t.description })
				}) : null,
				/* @__PURE__ */ B("dl", {
					className: "mention-location-details__grid",
					children: [
						e && rs(t.title) ? /* @__PURE__ */ z(Zc, {
							inline: !0,
							label: "Title",
							value: /* @__PURE__ */ z(No, { value: t.title })
						}) : null,
						/* @__PURE__ */ z(Qc, {
							label: "KJV name",
							value: ca(t)
						}),
						/* @__PURE__ */ z(Qc, {
							label: "Also called",
							value: t.oldName
						}),
						/* @__PURE__ */ z(Qc, {
							label: "Type",
							value: t.type
						}),
						/* @__PURE__ */ z(Qc, {
							label: "Modern identification",
							value: t.modernIdentification
						}),
						/* @__PURE__ */ z(tl, {
							label: "Related locations",
							onOpenLocationReference: n,
							values: t.relatedLocations
						}),
						/* @__PURE__ */ z(nl, {
							enabled: r,
							values: t.verses
						}),
						/* @__PURE__ */ z(il, { links: os(t) })
					]
				}),
				t.coordinates === null ? null : /* @__PURE__ */ z(al, {
					coordinates: t.coordinates,
					name: t.name
				})
			]
		})]
	});
}
function cl(e) {
	return e instanceof Element && e.closest("a, button, .mention-location-details") !== null;
}
function ll(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-lexical-mention]");
	return t instanceof HTMLElement ? t : null;
}
function ul(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-mention-location-hover-card]");
	return t instanceof HTMLElement ? t : null;
}
function dl(e) {
	let t = e.getAttribute("data-lexical-mention-kind");
	return t === "mention" || t === "bible-verse" ? t : t === "location" || t === "hashtag" || (e.textContent?.trim() ?? "").startsWith("#") ? "location" : "mention";
}
function fl(e) {
	let t = dl(e);
	t !== "bible-verse" && e.setAttribute("data-lexical-mention-kind", t);
}
function pl(e) {
	e.querySelectorAll("[data-lexical-mention]").forEach(fl);
}
function ml(e, t) {
	if (dl(t) !== "location") return null;
	let n = t.textContent?.trim() ?? "", r = t.getAttribute("data-lexical-mention-id");
	if (r !== null) {
		let t = e.getRecordById(r);
		if (t !== null) return t;
	}
	let i = t.getAttribute("data-lexical-mention-name")?.trim() ?? n ?? "", a = i.startsWith("#") ? i.slice(1) : i;
	if (a === "") return null;
	let o = e.getRecordsByName(a);
	return o.length === 1 ? o[0] : Yc(r, a, "");
}
function hl(e, t) {
	let n = la(t.id), r = X(t.name);
	if (n !== null) {
		let t = e.getRecordById(n);
		if (t !== null) return t;
	}
	if (r === "") return null;
	let i = e.getRecordsByName(r);
	return i.length === 1 ? i[0] : Yc(n, r, "");
}
function gl(e) {
	return $o(e, 112);
}
function _l(e) {
	return `location:${e.id ?? e.name}`;
}
var vl = 500;
function yl(e) {
	let [t, n] = R([]), r = Ia(), i = L(/* @__PURE__ */ new Map());
	return I(() => {
		if (e == null) {
			n([]);
			return;
		}
		let t = i.current, a = t.get(e);
		if (a !== null) {
			if (a !== void 0) {
				n(a);
				return;
			}
			t.set(e, null), setTimeout(() => {
				let i = r.searchLocations(e);
				t.set(e, i), n(i);
			}, vl);
		}
	}, [e, r]), I(() => {
		i.current = /* @__PURE__ */ new Map();
	}, [r]), t;
}
function bl(e, t) {
	let n = Wc.exec(e);
	if (n === null && (n = Gc.exec(e)), n !== null) {
		let e = n[1], r = n[3];
		if (r.length >= t) return {
			leadOffset: n.index + e.length,
			matchingString: r,
			replaceableString: n[2]
		};
	}
	return null;
}
function xl(e) {
	return bl(e, 1);
}
var Sl = class extends Qs {
	id;
	name;
	kjvName;
	picture;
	constructor(e, t) {
		super(e.id), this.id = e.id, this.name = e.name, this.kjvName = ca(e), this.title = ko(e.title), this.picture = t;
	}
};
function Cl({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item mx-2 p-2 d-flex flex-row align-items-center flex-shrink-0";
	return t && (a += " selected"), /* @__PURE__ */ B("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: [i.picture, /* @__PURE__ */ B("span", {
			className: "text flex-column",
			children: [/* @__PURE__ */ B("span", { children: [i.name, i.kjvName === null ? null : /* @__PURE__ */ B("span", {
				className: "opacity-75",
				children: [
					" (",
					i.kjvName,
					")"
				]
			})] }), i.title ? /* @__PURE__ */ B("span", {
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
function wl() {
	let [e] = _t(), t = Ia(), n = t.style, r = L(null), i = L(null), [a, o] = R(null), [s, c] = R(null), [l, u] = R(null), [d, f] = R(null), [p, m] = R([]), { shortToVerseData: h } = aa(), g = F(async (e) => {
		if (h === void 0) return e;
		try {
			return (await h(e))?.title ?? e;
		} catch {
			return e;
		}
	}, [h]), _ = yl(a), v = cc("/", { minLength: 0 }), y = Rn(() => _.map((e) => new Sl(e, /* @__PURE__ */ z("i", {
		className: "bi bi-pin icon",
		"aria-hidden": "true"
	}))).slice(0, Kc), [_]), b = F((t, n, r) => {
		e.update(() => {
			let e = Os(t.name, t.name, t.id, "location");
			n && n.replace(e), e.select(), r();
		});
	}, [e]), x = F((t) => v(t, e) === null ? xl(t) : null, [v, e]), S = F(() => {
		r.current !== null && (window.clearTimeout(r.current), r.current = null);
	}, []), C = F(() => {
		i.current !== null && (window.clearTimeout(i.current), i.current = null);
	}, []), w = F(() => {
		S(), C(), u(null), c(null);
	}, [C, S]), T = F(() => {
		S(), C(), i.current = window.setTimeout(() => {
			u(null), c(null), i.current = null;
		}, Jc);
	}, [C, S]), E = F((e, t) => {
		let n = _l(e), r = Vo(), i = ts(t);
		m((a) => {
			let o = a.find((e) => e.panelKey === n), s = {
				...e,
				anchorElement: t,
				panelKey: n,
				position: o?.position ?? i,
				zIndex: r
			};
			return o === void 0 ? [...a, s] : a.map((e) => e.panelKey === n ? s : e);
		}), w();
	}, [w]), D = F((e) => {
		m((t) => t.filter((t) => t.panelKey !== e));
	}, []), ee = F((e) => {
		let t = Vo();
		m((n) => n.map((n) => n.panelKey === e ? {
			...n,
			zIndex: t
		} : n));
	}, []), O = F((e, t) => {
		m((n) => {
			let r = !1, i = n.map((n) => n.panelKey !== e || n.position.left === t.left && n.position.top === t.top ? n : (r = !0, {
				...n,
				position: t
			}));
			return r ? i : n;
		});
	}, []);
	return I(() => {
		let e = (e) => {
			let n = e.detail;
			if (typeof n != "object" || !n || !(n.anchorElement instanceof HTMLElement)) return;
			let r = hl(t, n);
			r !== null && E(r, n.anchorElement);
		};
		return window.addEventListener(wo, e), () => {
			window.removeEventListener(wo, e);
		};
	}, [t, E]), I(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let n = ll(e.target);
			if (n === null || !Go(e, n)) return;
			fl(n);
			let r = ml(t, n);
			r !== null && (E(r, n), e.preventDefault(), e.stopPropagation());
		};
		return document.addEventListener("pointerdown", e, !0), () => {
			document.removeEventListener("pointerdown", e, !0);
		};
	}, [t, E]), I(() => e.registerNodeTransform(Ds, (e) => {
		e.getTextContent().startsWith("#") && (e.setMentionKind("location"), e.setTextContent(e.getTextContent().slice(1)));
	}), [e]), I(() => {
		let t = null, n = e.registerRootListener((e) => {
			t?.disconnect(), t = null, e !== null && (pl(e), t = new MutationObserver(() => {
				pl(e);
			}), t.observe(e, {
				characterData: !0,
				childList: !0,
				subtree: !0
			}));
		});
		return () => {
			t?.disconnect(), n();
		};
	}, [e]), I(() => {
		let e = (e) => {
			if (ul(e.target) !== null) {
				C();
				return;
			}
			let n = ll(e.target), i = ll(e.relatedTarget);
			if (n === null) return;
			if (n === l) {
				C();
				return;
			}
			if (n === i) return;
			fl(n);
			let a = ml(t, n);
			a !== null && (w(), r.current = window.setTimeout(() => {
				u(n), c(a), r.current = null;
			}, qc));
		}, n = (e) => {
			let t = ll(e.target), n = ul(e.target), r = ll(e.relatedTarget), i = ul(e.relatedTarget);
			if (!(t === null && n === null)) {
				if (r !== null || i !== null) {
					C();
					return;
				}
				T();
			}
		};
		return document.addEventListener("mouseover", e), document.addEventListener("mouseout", n), () => {
			S(), C(), document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", n);
		};
	}, [
		C,
		S,
		w,
		l,
		t,
		T
	]), I(() => {
		if (l === null) {
			f(null);
			return;
		}
		let e = () => {
			if (!l.isConnected) {
				w(), f(null);
				return;
			}
			f(gl(l));
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [w, l]), /* @__PURE__ */ B(zn, { children: [
		/* @__PURE__ */ z(lc, {
			onQueryChange: o,
			onSelectOption: b,
			triggerFn: x,
			options: y,
			menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: r, setHighlightedIndex: i }) => e.current && _.length ? Bn.createPortal(/* @__PURE__ */ z("div", {
				className: "typeahead-popover mention-locations-menu",
				style: n,
				children: /* @__PURE__ */ z("ul", {
					className: "list-unstyled m-0 p-0",
					children: y.map((e, n) => /* @__PURE__ */ z(Cl, {
						index: n,
						isSelected: t === n,
						onClick: () => {
							i(n), r(e);
						},
						onMouseEnter: () => {
							i(n);
						},
						option: e
					}, e.key))
				})
			}), e.current) : null
		}),
		s !== null && d !== null ? Bn.createPortal(/* @__PURE__ */ B("div", {
			className: "mention-hover-card",
			"data-mention-location-hover-card": "true",
			role: "tooltip",
			style: {
				...n,
				...d
			},
			tabIndex: 0,
			onClick: (e) => {
				cl(e.target) || l !== null && E(s, l);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && l !== null && !cl(e.target) && (E(s, l), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ B("div", {
					className: "mention-hover-card__name d-inline-flex align-items-center gap-2",
					children: [
						/* @__PURE__ */ z("i", {
							className: "bi bi-pin icon",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ B("span", {
							className: "mention-hover-card__name-text",
							children: [s.name, ca(s) === null ? null : /* @__PURE__ */ B("span", {
								className: "mention-hover-card__kjv-name",
								children: [
									" ",
									"(",
									ca(s),
									")"
								]
							})]
						}),
						/* @__PURE__ */ z("button", {
							"aria-label": "Copy mentioned location name",
							className: "mention-hover-card__copy",
							title: "Copy name",
							type: "button",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), Xc(s.name);
							},
							children: /* @__PURE__ */ z("i", {
								className: "bi bi-copy",
								"aria-hidden": "true"
							})
						})
					]
				}),
				s.title ? /* @__PURE__ */ z("div", {
					className: "mention-hover-card__title",
					children: /* @__PURE__ */ z(No, { value: s.title })
				}) : null,
				/* @__PURE__ */ z(ol, {
					includeTitle: !1,
					mentionLocation: s
				}),
				/* @__PURE__ */ z(sl, {
					includeTitle: !1,
					mentionLocation: s,
					onOpenLocationReference: E
				})
			]
		}), document.body) : null,
		p.map((e) => /* @__PURE__ */ z(Rc, {
			anchorElement: e.anchorElement,
			copyLabel: "Copy mentioned location details",
			iconClassName: "bi bi-pin icon",
			name: e.name,
			panelKind: "location",
			position: e.position,
			textStyle: n,
			title: /* @__PURE__ */ B(zn, { children: [/* @__PURE__ */ z(ol, { mentionLocation: e }), /* @__PURE__ */ z(sl, {
				mentionLocation: e,
				onOpenLocationReference: E
			})] }),
			zIndex: e.zIndex,
			onCopy: async () => {
				let { plainText: n, html: r } = gs(await hs(t, e, g));
				return Wo(n, r);
			},
			onBringToFront: () => {
				ee(e.panelKey);
			},
			onClose: () => {
				D(e.panelKey);
			},
			onPositionChange: (t) => {
				O(e.panelKey, t);
			}
		}, e.panelKey))
	] });
}
//#endregion
//#region src/plugins/MentionNamePlugin/index.tsx
var Tl = {
	NAME: "\\b[A-Z][^\\s\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;]",
	PUNCTUATION: "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;"
}.PUNCTUATION, El = ["@"].join(""), Dl = "[^" + El + Tl + "\\s]", Ol = "(?:\\.[ |$]| |[" + Tl + "]|)", kl = RegExp("(^|\\s|\\()([" + El + "]((?:" + Dl + Ol + "){0,75}))$"), Al = RegExp("(^|\\s|\\()([" + El + "]((?:" + Dl + "){0,50}))$"), jl = 20, Ml = 2e3, Nl = 150;
function Pl(e, t, n) {
	return {
		id: e,
		name: t,
		kjvName: null,
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
		wikipedia: null,
		matterRange: Infinity
	};
}
async function Fl(e) {
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
function Il({ inline: e = !1, label: t, value: n }) {
	return /* @__PURE__ */ B("div", {
		className: `mention-person-details__row${e ? " mention-person-details__row--inline" : ""}`,
		children: [/* @__PURE__ */ z("dt", { children: e ? `${t}:` : t }), /* @__PURE__ */ z("dd", { children: n })]
	});
}
function Ll({ label: e, value: t }) {
	return rs(t) ? /* @__PURE__ */ z(Il, {
		inline: !0,
		label: e,
		value: ns(t)
	}) : null;
}
function Rl({ values: e }) {
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => /* @__PURE__ */ z("li", { children: e }, e))
	});
}
function zl({ label: e, values: t }) {
	return t.length === 0 ? null : /* @__PURE__ */ z(Il, {
		label: e,
		value: /* @__PURE__ */ z(Rl, { values: t })
	});
}
function Bl({ locations: e }) {
	let t = Ia();
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => {
			let n = ss(t, e), r = n?.name ?? e;
			return /* @__PURE__ */ z("li", { children: n === null ? r : /* @__PURE__ */ z("button", {
				className: "mention-person-details__location-button",
				title: ko(n.title) || void 0,
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), To({
						anchorElement: e.currentTarget,
						id: n.id,
						name: n.name
					});
				},
				children: r
			}) }, e);
		})
	});
}
function Vl({ locations: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Il, {
		label: "Locations",
		value: /* @__PURE__ */ z(Bl, { locations: e })
	});
}
function Hl({ ids: e, onOpenPersonReference: t }) {
	let n = Fa();
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => {
			let r = n.getRecordById(e), i = r?.name ?? e;
			return /* @__PURE__ */ z("li", { children: r === null ? i : /* @__PURE__ */ z("button", {
				className: "mention-person-details__person-button",
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), t(r, e.currentTarget);
				},
				children: i
			}) }, e);
		})
	});
}
function Ul({ ids: e, label: t, onOpenPersonReference: n }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Il, {
		label: t,
		value: /* @__PURE__ */ z(Hl, {
			ids: e,
			onOpenPersonReference: n
		})
	});
}
function Wl({ links: e }) {
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => /* @__PURE__ */ z("li", { children: /* @__PURE__ */ z("a", {
			href: e.url,
			rel: "noreferrer",
			target: "_blank",
			children: is(e.type)
		}) }, `${e.type}:${e.url}`))
	});
}
function Gl({ enabled: e, values: t }) {
	return t.length === 0 ? null : /* @__PURE__ */ z(Il, {
		label: "Verses",
		value: /* @__PURE__ */ z(zc, {
			buttonClassName: "mention-person-details__location-button",
			enabled: e,
			listClassName: "mention-person-details__list",
			values: t
		})
	});
}
function Kl({ links: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Il, {
		label: "Links",
		value: /* @__PURE__ */ z(Wl, { links: e })
	});
}
function ql({ includeTitle: e = !0, mentionPerson: t }) {
	let n = [
		t.type,
		t.gender,
		t.age
	].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	return /* @__PURE__ */ B("div", {
		className: "mention-person-basic-info",
		children: [
			e && t.title ? /* @__PURE__ */ z("div", {
				className: "mention-person-basic-info__title",
				children: /* @__PURE__ */ z(No, { value: t.title })
			}) : null,
			t.description ? /* @__PURE__ */ z("p", {
				className: "mention-person-basic-info__description",
				children: /* @__PURE__ */ z(No, { value: t.description })
			}) : null,
			n.length > 0 ? /* @__PURE__ */ z("div", {
				className: "mention-person-basic-info__facts",
				children: n.map((e) => /* @__PURE__ */ z("span", { children: e }, e))
			}) : null
		]
	});
}
function Jl({ includeTitle: e = !0, mentionPerson: t, onOpenPersonReference: n }) {
	let [r, i] = R(!1);
	return /* @__PURE__ */ B("details", {
		className: "mention-person-details",
		children: [/* @__PURE__ */ B("summary", {
			className: "mention-person-details__summary",
			onClick: () => {
				i(!0);
			},
			children: [/* @__PURE__ */ z("i", {
				className: "bi bi-chevron-right mention-person-details__summary-icon",
				"aria-hidden": "true"
			}), /* @__PURE__ */ z("span", { children: "Details" })]
		}), /* @__PURE__ */ B("div", {
			className: "mention-person-details__body",
			children: [t.description ? /* @__PURE__ */ z("p", {
				className: "mention-person-details__description",
				children: /* @__PURE__ */ z(No, { value: t.description })
			}) : null, /* @__PURE__ */ B("dl", {
				className: "mention-person-details__grid",
				children: [
					e && rs(t.title) ? /* @__PURE__ */ z(Il, {
						inline: !0,
						label: "Title",
						value: /* @__PURE__ */ z(No, { value: t.title })
					}) : null,
					/* @__PURE__ */ z(Ll, {
						label: "KJV name",
						value: ca(t)
					}),
					/* @__PURE__ */ z(Ll, {
						label: "Also called",
						value: t.oldName
					}),
					/* @__PURE__ */ z(Ll, {
						label: "Type",
						value: t.type
					}),
					/* @__PURE__ */ z(Ll, {
						label: "Gender",
						value: t.gender
					}),
					/* @__PURE__ */ z(Ll, {
						label: "Age",
						value: t.age
					}),
					/* @__PURE__ */ z(zl, {
						label: "Years",
						values: t.years.map(as)
					}),
					/* @__PURE__ */ z(Vl, { locations: t.locations }),
					/* @__PURE__ */ z(Ul, {
						label: "Parents",
						ids: t.parents,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Ul, {
						label: "Spouses",
						ids: t.spouses,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Ul, {
						label: "Children",
						ids: t.children,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Ul, {
						label: "Siblings",
						ids: t.siblings,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Ul, {
						label: "Cousins",
						ids: t.cousin,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Gl, {
						enabled: r,
						values: t.verses
					}),
					/* @__PURE__ */ z(Kl, { links: os(t) })
				]
			})]
		})]
	});
}
function Yl(e) {
	return e instanceof Element && e.closest("a, button, .mention-person-details") !== null;
}
function Xl(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-lexical-mention]");
	return t instanceof HTMLElement ? t : null;
}
function Zl(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-mention-name-hover-card]");
	return t instanceof HTMLElement ? t : null;
}
function Ql(e, t) {
	let n = t.textContent?.trim() ?? "", r = t.getAttribute("data-lexical-mention-kind");
	if (r === "location" || r === "bible-verse" || r === "hashtag" || n.startsWith("#")) return null;
	let i = t.getAttribute("data-lexical-mention-id");
	if (i !== null) {
		let t = e.getRecordById(i);
		if (t !== null) return t;
	}
	let a = t.getAttribute("data-lexical-mention-name")?.trim() ?? n ?? "";
	if (a === "") return null;
	let o = e.getRecordsByName(a);
	return Pl(i, a, o.length === 1 ? o[0].title : "");
}
function $l(e) {
	return $o(e, 360);
}
function eu(e) {
	return `person:${e.id ?? e.name}`;
}
function tu(e, t) {
	let n = la(t.id), r = X(t.name);
	if (n !== null) {
		let t = e.getRecordById(n);
		if (t !== null) return t;
	}
	if (r === "") return null;
	let i = e.getRecordsByName(r);
	return i.length >= 1 ? i[0] : null;
}
var nu = 500;
function ru(e) {
	let [t, n] = R([]), r = Fa(), i = L(/* @__PURE__ */ new Map());
	return I(() => {
		if (e == null) {
			n([]);
			return;
		}
		let t = i.current, a = t.get(e);
		if (a !== null) {
			if (a !== void 0) {
				n(a);
				return;
			}
			t.set(e, null), setTimeout(() => {
				let i = r.searchNames(e);
				t.set(e, i), n(i);
			}, nu);
		}
	}, [e, r]), I(() => {
		i.current = /* @__PURE__ */ new Map();
	}, [r]), t;
}
function iu(e, t) {
	let n = kl.exec(e);
	if (n === null && (n = Al.exec(e)), n !== null) {
		let e = n[1], r = n[3];
		if (r.length >= t) return {
			leadOffset: n.index + e.length,
			matchingString: r,
			replaceableString: n[2]
		};
	}
	return null;
}
function au(e) {
	return iu(e, 1);
}
var ou = class extends Qs {
	id;
	name;
	kjvName;
	picture;
	constructor(e, t) {
		super(e.id), this.id = e.id, this.name = e.name, this.kjvName = ca(e), this.title = ko(e.title), this.picture = t;
	}
};
function su({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item mx-2 p-2 d-flex flex-row align-items-center flex-shrink-0";
	return t && (a += " selected"), /* @__PURE__ */ B("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: [i.picture, /* @__PURE__ */ B("span", {
			className: "text flex-column",
			children: [/* @__PURE__ */ B("span", { children: [i.name, i.kjvName === null ? null : /* @__PURE__ */ B("span", {
				className: "opacity-75",
				children: [
					" (",
					i.kjvName,
					")"
				]
			})] }), i.title ? /* @__PURE__ */ B("span", {
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
function cu() {
	let [e] = _t(), t = Pa(), { namesLookupManager: n } = t, r = n.style, i = L(null), a = L(null), [o, s] = R(null), [c, l] = R(null), [u, d] = R(null), [f, p] = R(null), [m, h] = R([]), { shortToVerseData: g } = aa(), _ = F(async (e) => {
		if (g === void 0) return e;
		try {
			return (await g(e))?.title ?? e;
		} catch {
			return e;
		}
	}, [g]), v = ru(o), y = cc("/", { minLength: 0 }), b = Rn(() => v.map((e) => new ou(e, /* @__PURE__ */ z("i", { className: Fc(e.type) }))).slice(0, jl), [v]), x = F((t, n, r) => {
		e.update(() => {
			let e = Os(t.name, t.name, t.id);
			n && n.replace(e), e.select(), r();
		});
	}, [e]), S = F((t) => y(t, e) === null ? au(t) : null, [y, e]), C = F(() => {
		i.current !== null && (window.clearTimeout(i.current), i.current = null);
	}, []), w = F(() => {
		a.current !== null && (window.clearTimeout(a.current), a.current = null);
	}, []), T = F(() => {
		C(), w(), d(null), l(null);
	}, [w, C]), E = F(() => {
		C(), w(), a.current = window.setTimeout(() => {
			d(null), l(null), a.current = null;
		}, Nl);
	}, [w, C]), D = F((e, t) => {
		let n = eu(e), r = Vo(), i = ts(t);
		h((a) => {
			let o = a.find((e) => e.panelKey === n), s = {
				...e,
				anchorElement: t,
				panelKey: n,
				position: o?.position ?? i,
				zIndex: r
			};
			return o === void 0 ? [...a, s] : a.map((e) => e.panelKey === n ? s : e);
		}), T();
	}, [T]), ee = F((e) => {
		h((t) => t.filter((t) => t.panelKey !== e));
	}, []), O = F((e) => {
		let t = Vo();
		h((n) => n.map((n) => n.panelKey === e ? {
			...n,
			zIndex: t
		} : n));
	}, []), te = F((e, t) => {
		h((n) => {
			let r = !1, i = n.map((n) => n.panelKey !== e || n.position.left === t.left && n.position.top === t.top ? n : (r = !0, {
				...n,
				position: t
			}));
			return r ? i : n;
		});
	}, []);
	return I(() => {
		let t = (e) => {
			if (e.getAttribute("data-lexical-mention-kind") !== "mention") {
				e.removeAttribute("data-lexical-mention-name-type");
				return;
			}
			let t = e.getAttribute("data-lexical-mention-id"), r = t === null ? null : n.getRecordById(t);
			if (r === null) {
				e.removeAttribute("data-lexical-mention-name-type");
				return;
			}
			e.setAttribute("data-lexical-mention-name-type", sa(r.type));
		};
		return e.registerMutationListener(Ds, (n) => {
			e.getEditorState().read(() => {
				for (let [r, i] of n) {
					if (i === "destroyed") continue;
					let n = e.getElementByKey(r);
					n instanceof HTMLElement && t(n);
				}
			});
		}, { skipInitialization: !1 });
	}, [e, n]), I(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = Xl(e.target);
			if (t === null || !Go(e, t)) return;
			let r = Ql(n, t);
			r !== null && (D(r, t), e.preventDefault(), e.stopPropagation());
		};
		return document.addEventListener("pointerdown", e, !0), () => {
			document.removeEventListener("pointerdown", e, !0);
		};
	}, [n, D]), I(() => {
		let e = (e) => {
			let t = e.detail;
			if (typeof t != "object" || !t || !(t.anchorElement instanceof HTMLElement)) return;
			let r = tu(n, t);
			r !== null && D(r, t.anchorElement);
		};
		return window.addEventListener(Eo, e), () => {
			window.removeEventListener(Eo, e);
		};
	}, [n, D]), I(() => {
		let e = (e) => {
			if (Zl(e.target) !== null) {
				w();
				return;
			}
			let t = Xl(e.target), r = Xl(e.relatedTarget);
			if (t === null) return;
			if (t === u) {
				w();
				return;
			}
			if (t === r) return;
			let a = Ql(n, t);
			a !== null && (T(), i.current = window.setTimeout(() => {
				d(t), l(a), i.current = null;
			}, Ml));
		}, t = (e) => {
			let t = Xl(e.target), n = Zl(e.target), r = Xl(e.relatedTarget), i = Zl(e.relatedTarget);
			if (!(t === null && n === null)) {
				if (r !== null || i !== null) {
					w();
					return;
				}
				E();
			}
		};
		return document.addEventListener("mouseover", e), document.addEventListener("mouseout", t), () => {
			C(), w(), document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", t);
		};
	}, [
		w,
		C,
		T,
		u,
		n,
		E
	]), I(() => {
		if (u === null) {
			p(null);
			return;
		}
		let e = () => {
			if (!u.isConnected) {
				T(), p(null);
				return;
			}
			p($l(u));
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [T, u]), /* @__PURE__ */ B(zn, { children: [
		/* @__PURE__ */ z(lc, {
			onQueryChange: s,
			onSelectOption: x,
			triggerFn: S,
			options: b,
			menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: n, setHighlightedIndex: i }) => e.current && v.length ? Bn.createPortal(/* @__PURE__ */ z("div", {
				className: "typeahead-popover mention-name-menu",
				style: r,
				children: /* @__PURE__ */ z("ul", {
					className: "list-unstyled m-0 p-0",
					children: b.map((e, r) => /* @__PURE__ */ z(su, {
						index: r,
						isSelected: t === r,
						onClick: () => {
							i(r), n(e);
						},
						onMouseEnter: () => {
							i(r);
						},
						option: e
					}, e.key))
				})
			}), e.current) : null
		}),
		c !== null && f !== null ? Bn.createPortal(/* @__PURE__ */ B("div", {
			className: "mention-hover-card",
			"data-mention-name-hover-card": "true",
			role: "tooltip",
			style: {
				...r,
				...f
			},
			tabIndex: 0,
			onClick: (e) => {
				Yl(e.target) || u !== null && D(c, u);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && u !== null && !Yl(e.target) && (D(c, u), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ B("div", {
					className: "mention-hover-card__name d-inline-flex align-items-center gap-2",
					children: [
						/* @__PURE__ */ z("i", {
							className: Fc(c.type),
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ B("span", {
							className: "mention-hover-card__name-text",
							children: [c.name, ca(c) === null ? null : /* @__PURE__ */ B("span", {
								className: "mention-hover-card__kjv-name",
								children: [
									" ",
									"(",
									ca(c),
									")"
								]
							})]
						}),
						/* @__PURE__ */ z("button", {
							"aria-label": "Copy mentioned person name",
							className: "mention-hover-card__copy",
							title: "Copy name",
							type: "button",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), Fl(c.name);
							},
							children: /* @__PURE__ */ z("i", {
								className: "bi bi-copy",
								"aria-hidden": "true"
							})
						})
					]
				}),
				c.title ? /* @__PURE__ */ z("div", {
					className: "mention-hover-card__title",
					children: /* @__PURE__ */ z(No, { value: c.title })
				}) : null,
				/* @__PURE__ */ z(ql, {
					includeTitle: !1,
					mentionPerson: c
				}),
				/* @__PURE__ */ z(Jl, {
					includeTitle: !1,
					mentionPerson: c,
					onOpenPersonReference: D
				})
			]
		}), document.body) : null,
		m.map((e) => /* @__PURE__ */ z(Rc, {
			anchorElement: e.anchorElement,
			copyLabel: "Copy mentioned person details",
			iconClassName: Fc(e.type),
			name: e.name,
			panelKind: "mentioned person",
			position: e.position,
			textStyle: r,
			title: /* @__PURE__ */ B(zn, { children: [/* @__PURE__ */ z(ql, { mentionPerson: e }), /* @__PURE__ */ z(Jl, {
				mentionPerson: e,
				onOpenPersonReference: D
			})] }),
			zIndex: e.zIndex,
			onCopy: async () => {
				let { plainText: n, html: r } = gs(await ms(t, e, _));
				return Wo(n, r);
			},
			onBringToFront: () => {
				O(e.panelKey);
			},
			onClose: () => {
				ee(e.panelKey);
			},
			onPositionChange: (t) => {
				te(e.panelKey, t);
			}
		}, e.panelKey))
	] });
}
//#endregion
//#region node_modules/@lexical/devtools-core/dist/LexicalDevtoolsCore.prod.mjs
var lu = Object.freeze({
	"	": "\\t",
	"\n": "\\n"
}), uu = new RegExp(Object.keys(lu).join("|"), "g"), $ = Object.freeze({
	ancestorHasNextSibling: "|",
	ancestorIsLastChild: " ",
	hasNextSibling: "├",
	isLastChild: "└",
	selectedChar: "^",
	selectedLine: ">"
}), du = [
	(e) => e.hasFormat("bold") && "Bold",
	(e) => e.hasFormat("code") && "Code",
	(e) => e.hasFormat("italic") && "Italic",
	(e) => e.hasFormat("strikethrough") && "Strikethrough",
	(e) => e.hasFormat("subscript") && "Subscript",
	(e) => e.hasFormat("superscript") && "Superscript",
	(e) => e.hasFormat("underline") && "Underline",
	(e) => e.hasFormat("highlight") && "Highlight"
], fu = [
	(e) => e.hasTextFormat("bold") && "Bold",
	(e) => e.hasTextFormat("code") && "Code",
	(e) => e.hasTextFormat("italic") && "Italic",
	(e) => e.hasTextFormat("strikethrough") && "Strikethrough",
	(e) => e.hasTextFormat("subscript") && "Subscript",
	(e) => e.hasTextFormat("superscript") && "Superscript",
	(e) => e.hasTextFormat("underline") && "Underline",
	(e) => e.hasTextFormat("highlight") && "Highlight"
], pu = [(e) => e.isDirectionless() && "Directionless", (e) => e.isUnmergeable() && "Unmergeable"], mu = [(e) => e.isToken() && "Token", (e) => e.isSegmented() && "Segmented"];
function hu(t, n, r, i, a = !1) {
	let o = t.getEditorState(), s = t._config, c = t._compositionKey, l = t._editable;
	if (r) {
		let e = "";
		return o.read(() => {
			e = function(e) {
				let t = document.createElement("div");
				return t.innerHTML = e.trim(), Tu(t, 0).innerHTML;
			}(On(t));
		}, { editor: t }), e;
	}
	let u = " root\n", f = o.read(() => {
		let t = N();
		return gu(d(), (n, r, o) => {
			let s = `(${n.getKey()})`, c = n.getType() || "", l = n.isSelected(), d = o === void 0 ? "" : `[slot: ${o}] `, f = function(t, n) {
				return n === void 0 ? "" : P(t) && t.isShadowRoot() ? " [shadow-root]" : e(t) && !t.isInline() ? " [atomic decorator]" : "";
			}(n, o);
			u += `${l ? $.selectedLine : " "} ${r.join(" ")} ${s} ${d}${c}${f} ${function(e, t, n = !1) {
				let r = t ? t(e, n) : void 0;
				if (r !== void 0 && r.length > 0) return r;
				if (O(e)) {
					let t = e.getTextContent(), r = t.length === 0 ? "(empty)" : `"${_u(t, n)}"`, i = function(e) {
						return [
							bu(e),
							vu(e),
							yu(e),
							wu(e)
						].filter(Boolean).join(", ");
					}(e);
					return [r, i.length === 0 ? null : `{ ${i} }`].filter(Boolean).join(" ").trim();
				}
				if (Z(e)) {
					let t = e.getURL(), r = t.length === 0 ? "(empty)" : `"${_u(t, n)}"`, i = function(e) {
						return [
							xu(e),
							Su(e),
							Cu(e),
							wu(e)
						].filter(Boolean).join(", ");
					}(e);
					return [r, i.length === 0 ? null : `{ ${i} }`].filter(Boolean).join(" ").trim();
				}
				if (qs(e)) return `ids: [ ${e.getIDs().join(", ")} ]`;
				if (ot(e)) {
					let t = function(e) {
						let t = fu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
						return t !== "" && (t = "format: " + t), t;
					}(e), n = t === "" ? "" : `{ ${t} }`;
					return n += e.__style ? `(${e.__style})` : "", n;
				}
				return "";
			}(n, i, a)}\n`, u += function({ indent: e, isSelected: t, node: n, nodeKeyDisplay: r, selection: i, typeDisplay: a }) {
				if (!O(n) || !j(i) || !t || P(n)) return "";
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
					let l = (a.slice(0, s).match(uu) || []).length, u = (a.slice(s, c).match(uu) || []).length;
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
		}), t === null ? ": null" : j(t) ? function(e) {
			let t = "", n = bu(e), r = function(e) {
				let t = e;
				for (; t !== null;) {
					let e = Mt(t);
					if (e !== null) {
						let n = Vt(t);
						if (n !== null) return {
							host: n,
							name: e
						};
					}
					t = t.getParent() ?? Vt(t);
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
function gu(t, n, r = []) {
	let i = [];
	for (let e of yt(t)) {
		let n = ut(t, e);
		n !== null && i.push([e, n]);
	}
	let a = P(t) ? t.getChildren() : [], o = i.length + a.length, s = 0;
	for (let [t, a] of i) {
		let i = s === o - 1;
		n(a, r.concat(i ? $.isLastChild : $.hasNextSibling), t), (P(a) || e(a)) && gu(a, n, r.concat(i ? $.ancestorIsLastChild : $.ancestorHasNextSibling)), s++;
	}
	for (let t of a) {
		let i = s === o - 1;
		n(t, r.concat(i ? $.isLastChild : $.hasNextSibling)), (P(t) || e(t)) && gu(t, n, r.concat(i ? $.ancestorIsLastChild : $.ancestorHasNextSibling)), s++;
	}
}
function _u(e, t = !1) {
	let n = Object.entries(lu).reduce((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n)), e);
	return t ? n.replace(/[^\s]/g, "*") : n;
}
function vu(e) {
	let t = pu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "detail: " + t), t;
}
function yu(e) {
	let t = mu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "mode: " + t), t;
}
function bu(e) {
	let t = du.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "format: " + t), t;
}
function xu(e) {
	let t = e.getTarget();
	return t != null && (t = "target: " + t), t;
}
function Su(e) {
	let t = e.getRel();
	return t != null && (t = "rel: " + t), t;
}
function Cu(e) {
	let t = e.getTitle();
	return t != null && (t = "title: " + t), t;
}
function wu(e) {
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
function Tu(e, t) {
	let n = Array(1 + t++).join("  "), r = Array(t - 1).join("  "), i;
	for (let a = 0; a < e.children.length; a++) i = document.createTextNode("\n" + n), e.insertBefore(i, e.children[a]), Tu(e.children[a], t), e.lastElementChild === e.children[a] && (i = document.createTextNode("\n" + r), e.appendChild(i));
	return e;
}
var Eu = /*#__PURE__*/ Pn(function({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: r, viewClassName: i, timeTravelPanelClassName: a, editorState: o, setEditorState: s, setEditorReadOnly: c, generateContent: l, commandsLog: u = [] }, d) {
	let [f, p] = R([]), [m, h] = R(""), [g, _] = R(!1), [v, y] = R(!1), b = L(0), x = L(null), [S, C] = R(!1), [w, T] = R(!1), [E, D] = R(!1), ee = L(null), O = L([]), te = L(0), ne = F((e) => {
		let t = ++te.current;
		l(e).then((e) => {
			t === te.current && h(e);
		}).catch((e) => {
			t === te.current && h(`Error rendering tree: ${e.message}\n\nStack:\n${e.stack}`);
		});
	}, [l]);
	I(() => {
		if (!(!E && o._nodeMap.size > 1e3 && (T(!0), !E)) && (ee.current !== o || O.current !== u)) {
			let e = ee.current !== o;
			ee.current = o, O.current = u, ne(v), !g && e && p((e) => [...e, [Date.now(), o]]);
		}
	}, [
		o,
		ne,
		v,
		E,
		g,
		u
	]);
	let k = f.length;
	return I(() => {
		if (S) {
			let e, t = () => {
				let n = b.current;
				if (n === k - 1) return void C(!1);
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
		k,
		s
	]), B("div", {
		className: i,
		children: [
			!E && w ? /*#__PURE__*/ B("div", {
				style: { padding: 20 },
				children: [/*#__PURE__*/ z("span", {
					style: { marginRight: 20 },
					children: "Detected large EditorState, this can impact debugging performance."
				}), /*#__PURE__*/ z("button", {
					onClick: () => {
						D(!0);
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
			E ? null : /*#__PURE__*/ z("button", {
				onClick: () => (ne(!v), void y(!v)),
				className: e,
				type: "button",
				children: v ? "Tree" : "Export DOM"
			}),
			!g && (E || !w) && k > 2 && /*#__PURE__*/ z("button", {
				onClick: () => {
					c(!0), b.current = k - 1, _(!0);
				},
				className: t,
				type: "button",
				children: "Time Travel"
			}),
			(E || !w) && /*#__PURE__*/ z("pre", {
				ref: d,
				children: m
			}),
			g && (E || !w) && /*#__PURE__*/ B("div", {
				className: a,
				children: [
					/*#__PURE__*/ z("button", {
						className: r,
						onClick: () => {
							b.current === k - 1 && (b.current = 1), C(!S);
						},
						type: "button",
						children: S ? "Pause" : "Play"
					}),
					/*#__PURE__*/ z("input", {
						className: n,
						ref: x,
						onChange: (e) => {
							let t = Number(e.target.value), n = f[t];
							n && (b.current = t, s(n[1]));
						},
						type: "range",
						min: "1",
						max: k - 1
					}),
					/*#__PURE__*/ z("button", {
						className: r,
						onClick: () => {
							c(!1);
							let e = f.length - 1, t = f[e];
							s(t[1]);
							let n = x.current;
							n !== null && (n.value = String(e)), _(!1), C(!1);
						},
						type: "button",
						children: "Exit"
					})
				]
			})
		]
	});
});
function Du(e, t) {
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
function Ou(e) {
	let [t, n] = R([]);
	return I(() => Du(e, n), [e]), t;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalTreeView.prod.mjs
function ku({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: r, timeTravelPanelClassName: i, viewClassName: a, editor: o, customPrintNode: s }) {
	let c = /*#__PURE__*/ jn.createRef(), [l, u] = R(o.getEditorState()), d = Ou(o);
	return I(() => Ae(o.registerUpdateListener(({ editorState: e }) => {
		u(e);
	}), o.registerEditableListener(() => {
		u(o.getEditorState());
	})), [o]), I(() => {
		let e = c.current;
		if (e !== null) return e.__lexicalEditor = o, () => {
			e.__lexicalEditor = null;
		};
	}, [o, c]), z(Eu, {
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
			return hu(o, d, e, s);
		},
		ref: c,
		commandsLog: d
	});
}
//#endregion
//#region src/plugins/TreeViewPlugin/index.tsx
function Au() {
	let [e] = _t();
	return /* @__PURE__ */ z(ku, {
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
export { $a as $, Kn as $t, ys as A, Hi as At, $o as B, Sr as Bt, Vs as C, Bi as Ct, Ls as D, Vi as Dt, zs as E, Rr as Et, ms as F, G as Ft, To as G, H as Gt, Go as H, V as Ht, es as I, ri as It, mo as J, vr as Jt, So as K, J as Kt, Wo as L, $i as Lt, is as M, Zi as Mt, os as N, _r as Nt, Os as O, Er as Ot, hs as P, br as Pt, Ra as Q, er as Qt, Ho as R, U as Rt, Xs as S, Ar as St, Is as T, Br as Tt, ko as U, Y as Ut, Vo as V, Gi as Vt, Do as W, mr as Wt, Z as X, pi as Xt, Ua as Y, mi as Yt, Wa as Z, Or as Zt, qs as _, aa as _t, Fc as a, Pa as at, Ks as b, wr as bt, Oc as c, Oa as ct, Sc as d, sa as dt, qn as en, Q as et, _c as f, _a as ft, cc as g, ia as gt, Qs as h, va as ht, Rc as i, Wn as in, Ia as it, _s as j, Tr as jt, Ds as k, q as kt, xc as l, fa as lt, lc as m, ga as mt, cu as n, Jn as nn, Ka as nt, Nc as o, Fa as ot, gc as p, ya as pt, bo as q, Qi as qt, wl as r, $n as rn, Na as rt, jc as s, ka as st, Au as t, Yn as tn, Qa as tt, Cc as u, ca as ut, Gs as v, ta as vt, Rs as w, Ir as wt, Js as x, Nr as xt, Ys as y, na as yt, ts as z, Mr as zt };
