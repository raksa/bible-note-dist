import { $ as e, $n as t, A as n, Ar as r, B as i, Bn as a, C as o, Cr as s, Ct as c, D as l, Dn as u, Dr as d, E as f, En as p, Er as m, Et as h, F as g, Fr as _, Ft as v, Gn as y, Gr as b, Gt as x, H as S, Hn as C, Hr as w, Ht as T, I as E, It as ee, J as te, Jt as D, K as ne, Kt as re, Ln as O, M as ie, Nr as ae, Nt as oe, O as se, P as ce, Pn as le, Pt as ue, Q as de, Qn as fe, Qr as pe, R as me, Rr as he, Rt as ge, S as _e, Sn as ve, Tn as ye, Tr as be, Un as xe, Ut as Se, V as Ce, Vn as we, Vr as k, W as Te, Wn as Ee, Wt as De, X as Oe, Xn as ke, Y as Ae, Yn as je, Yr as Me, Yt as A, Z as Ne, Zn as Pe, Zr as Fe, Zt as Ie, _ as Le, _r as Re, _t as ze, a as Be, ar as Ve, b as He, bn as j, br as Ue, bt as We, cn as Ge, cr as Ke, dn as qe, dr as Je, en as Ye, et as Xe, f as Ze, fn as Qe, gn as $e, gr as et, h as tt, i as nt, ii as rt, jn as it, jt as at, kn as ot, kr as st, l as ct, ln as lt, lr as ut, m as dt, mr as ft, mt as pt, n as mt, ni as ht, o as gt, oi as _t, on as vt, or as yt, p as bt, pr as xt, q as St, qn as Ct, qr as wt, qt as M, ri as Tt, rn as Et, rr as Dt, s as Ot, sr as kt, t as At, ti as jt, tn as Mt, tr as Nt, tt as N, un as Pt, ur as Ft, vn as It, vr as Lt, vt as P, w as Rt, wn as zt, wr as Bt, wt as Vt, x as Ht, xn as Ut, xr as Wt, xt as Gt, yn as Kt, yt as qt, zn as Jt, zt as Yt } from "./Lexical.prod-DYDuARMX.mjs";
import { C as Xt, I as Zt, N as Qt, T as $t, a as en, f as tn, g as nn, i as rn, k as an, n as on, o as sn, s as cn, t as ln } from "./LexicalUtils.prod-5zbJxaQa.mjs";
import { B as un, H as dn, I as fn, K as pn, M as mn, R as hn, V as gn, c as _n, d as vn, f as yn, h as bn, j as xn, l as Sn, m as Cn, n as wn, s as Tn, u as En, v as Dn, x as On, y as kn } from "./ContentEditable-C_wyHFh1.mjs";
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
		return Me(this, Gn);
	}
	setIsShadowRoot(e) {
		return at(this, Gn, e);
	}
	createDOM(e) {
		let t = M().createElement("blockquote");
		return k(t, e.theme.quote), t;
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
		if (ve(t)) {
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
			k(n, e);
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
		if (ve(t)) {
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
	return e(A(t));
}
function nr(e, t, n, r) {
	let i = !1, a = null;
	if (e.isCollapsed() && e.anchor.type === "text") {
		let t = e.anchor.getNode();
		if (D(t)) {
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
			if (!(i && a && D(a) && a.hasFormat(r))) continue;
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
		let o = se(n, Ze(r, t));
		if (o.getTextSlices().some((e) => e && e.getTextContentSize() > 0)) return !1;
		let s = se(o.anchor.getSiblingCaret(), o.focus), c = s.anchor.origin;
		for (let e of s) {
			if (!w(e) || !e.origin.is(c.getParent())) return !1;
			c = e.origin;
		}
		let l = r;
		for (let e of v(Ze(r, t))) {
			if (!e.origin.is(l.getParent())) {
				if (ge(e.origin)) {
					let e = Ze(l, t);
					return Ye(se(e, e)), !0;
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
	let s = i(P(r) ? r : r.getParentOrThrow(), (e) => P(e) && !e.isInline() && te(e.getParent()));
	if (s === null) return !1;
	let c = Ze(s, a).getNodeAtCaret();
	if (c === null || !ar(c)) return !1;
	if (s.getTextContentSize() === 0) return or(c.__key), !0;
	let l = Ot().getRootElement();
	if (l === null) return !1;
	let u = ie(l.ownerDocument.defaultView);
	if (u === null || u.rangeCount === 0) return !1;
	let d = u.anchorNode, f = u.anchorOffset, p = u.focusNode, m = u.focusOffset;
	u.modify("move", t ? "backward" : "forward", "line");
	let h = u.anchorNode, g = u.anchorOffset;
	if (h === null) return cr(u, d, f, p, m), !1;
	let _ = A(h);
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
			D(e) ? e.select(0, 0) : r.select(0, 0);
		} else {
			let e = r.getLastDescendant();
			if (D(e)) {
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
	let d = ie(s);
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
	if (D(g)) {
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
	let a = r.map((e) => Ze(e, "next")).sort(xe), o = (t ? a[0] : a[a.length - 1]).origin, s = i(o, (e) => e !== o && P(e) && !e.isInline()) ?? d(), c = t ? 0 : s.getChildrenSize();
	return s.select(c, c), !0;
}
function fr(t, r = un(rr)) {
	return je(t.registerCommand(ne, () => {
		let e = N();
		return _(e) ? (e.clear(), !0) : (j(e) && nr(e, "click", "both", r.peek()), !1);
	}, 0), t.registerCommand(ee, (e) => {
		let t = N();
		return j(t) ? (t.deleteCharacter(e), !0) : !!_(t) && (t.deleteNodes(), !0);
	}, 0), t.registerCommand(et, (e) => {
		let t = N();
		return !!j(t) && (t.deleteWord(e), !0);
	}, 0), t.registerCommand(Ie, (e) => {
		let t = N();
		return !!j(t) && (t.deleteLine(e), !0);
	}, 0), t.registerCommand(Ce, (e) => {
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
	}, 0), t.registerCommand(re, (e) => {
		let t = N();
		return !(!j(t) && !_(t)) && (ye(t, e), !0);
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
	}, 0), t.registerCommand(le, () => {
		let e = st(), t = N();
		return j(t) && (e.setFormat(t.format), e.setStyle(t.style)), Te([e]), !0;
	}, 0), t.registerCommand(vt, () => ln((e) => {
		let t = e.getIndent();
		e.setIndent(t + 1);
	}), 0), t.registerCommand(xt, () => ln((e) => {
		let t = e.getIndent();
		t > 0 && e.setIndent(Math.max(0, t - 1));
	}), 0), t.registerCommand(s, (e) => {
		let t = N();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), ur(n[0], "previous"), !0;
		} else if (j(t) && (!e.shiftKey && ir(t, "previous") || !e.shiftKey && sr(t, !0) || !e.shiftKey && lr(t, !0))) return e.preventDefault(), !0;
		return !1;
	}, 0), t.registerCommand(fe, (e) => {
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
			if (n.length > 0) return e.preventDefault(), ur(n[0], an(n[0]) ? "next" : "previous"), !0;
		}
		if (!j(t)) return !1;
		if (!e.shiftKey && ir(t, an(t.anchor.getNode()) ? "next" : "previous")) return e.preventDefault(), !0;
		if (e.shiftKey || nr(t, "arrow", "start", r.peek()), Zt(t, !0)) {
			let n = e.shiftKey;
			return e.preventDefault(), Qt(t, n, !0), !0;
		}
		return !1;
	}, 0), t.registerCommand(u, (e) => {
		let t = N();
		if (_(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), ur(n[0], an(n[0]) ? "previous" : "next"), !0;
		}
		if (!j(t)) return !1;
		if (!e.shiftKey && ir(t, an(t.anchor.getNode()) ? "previous" : "next")) return e.preventDefault(), !0;
		if (e.shiftKey || nr(t, "arrow", "end", r.peek()), Zt(t, !1)) {
			let n = e.shiftKey;
			return e.preventDefault(), Qt(t, n, !1), !0;
		}
		return !1;
	}, 0), t.registerCommand(ae, (e) => {
		let n = N();
		if (!_(n) && tr(e.target)) return !1;
		if (j(n)) {
			if (function(e) {
				if (!e.isCollapsed()) return !1;
				let { anchor: t } = e;
				if (t.offset !== 0) return !1;
				let n = t.getNode();
				if (Tt(n)) return !1;
				let r = sn(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(n)) return e.preventDefault(), t.dispatchCommand(xt, void 0);
			if (ke && Wt) return !1;
		} else if (!_(n)) return !1;
		return e.preventDefault(), t.dispatchCommand(ee, !0);
	}, 0), t.registerCommand(zt, (e) => {
		let n = N();
		return !(!_(n) && tr(e.target)) && !(!j(n) && !_(n)) && (e.preventDefault(), t.dispatchCommand(ee, !1));
	}, 0), t.registerCommand(Kt, (i) => {
		let a = N();
		if (_(a)) {
			let t = a.getNodes();
			t.length === 1 && e(t[0]) && !t[0].isInline() && (a = t[0].selectNext());
		}
		if (!j(a)) return !1;
		if (nr(a, "enter", "both", r.peek()), i !== null) {
			if ((ke || lt || Ut) && Wt) return !1;
			if (i.preventDefault(), i.shiftKey) return t.dispatchCommand(mt, !1);
		}
		return t.dispatchCommand(n, void 0);
	}, 0), t.registerCommand(it, () => !!j(N()) && (t.blur(), !0), 0), t.registerCommand(pe, (e) => {
		let [, n] = rn(e);
		if (n.length > 0) {
			let r = e.clientX, i = e.clientY, a = Cn(r, i, t.getRootElement());
			if (a !== null) {
				let { offset: e, node: r } = a, i = A(r);
				if (i !== null) {
					let t = tt();
					if (D(i)) t.anchor.set(i.getKey(), e, "text"), t.focus.set(i.getKey(), e, "text");
					else {
						let e = i.getParentOrThrow().getKey(), n = i.getIndexWithinParent() + 1;
						t.anchor.set(e, n, "element"), t.focus.set(e, n, "element");
					}
					p(me(t));
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
		return s !== null && e(A(s.node)) && n.preventDefault(), !0;
	}, 0), t.registerCommand(Ct, () => {
		let e = N();
		return Fe(j(e) && be(e.anchor.getNode()) !== null ? e : null), !0;
	}, 0), t.registerCommand(he, (e) => (_n(t, cn(e, ClipboardEvent) ? e : null), !0), 0), t.registerCommand(oe, (e) => (async function(e, t) {
		await _n(t, cn(e, ClipboardEvent) ? e : null), t.update(() => {
			let e = N();
			j(e) ? e.removeText() : _(e) && e.getNodes().forEach((e) => e.remove());
		}, { tag: "cut" });
	}(e, t), !0), 0), t.registerCommand(Ee, (e) => {
		let [, n, r] = rn(e);
		return n.length > 0 && !r ? (t.dispatchCommand(Wn, n), !0) : O(e.target) && b(e.target) ? !1 : N() !== null && (function(e, t) {
			e.preventDefault(), t.update(() => {
				let n = N(), r = cn(e, InputEvent) || cn(e, KeyboardEvent) ? null : e.clipboardData;
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
		return _r().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setHeaderStyles(e.headerState).setColSpan(e.colSpan || 1).setRowSpan(e.rowSpan || 1).setWidth(e.width || void 0).setBackgroundColor(e.backgroundColor || null).setVerticalAlign(e.verticalAlign || void 0);
	}
	constructor(e = V.NO_STATUS, t = 1, n, r) {
		super(r), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = n, this.__backgroundColor = null, this.__verticalAlign = void 0;
	}
	createDOM(e) {
		let t = M().createElement(this.getTag());
		return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), hr(this.__verticalAlign) && (t.style.verticalAlign = this.__verticalAlign), k(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
	}
	exportDOM(e) {
		let t = super.exportDOM(e);
		if (ve(t.element)) {
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
			let e = t.parentElement, n = ve(e) && e.nodeName.toLowerCase() === "tr" && ve(e.parentElement) && (e.parentElement.nodeName.toLowerCase() === "thead" || e.rowIndex === 0), r = t.cellIndex === 0;
			n && (a |= V.ROW), r && (a |= V.COLUMN), a === V.NO_STATUS && (a = V.ROW);
		}
	}
	let o = _r(a, t.colSpan, i);
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
			for (let a of e) if (_e(a) || D(a) || Re(a)) {
				if (D(a) && (d && a.toggleFormat("bold"), f && a.toggleFormat("strikethrough"), p && a.toggleFormat("italic"), m && a.toggleFormat("underline"), h)) {
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
function _r(e = V.NO_STATUS, t = 1, n) {
	return gt(new mr(e, t, n));
}
function H(e) {
	return e instanceof mr;
}
var vr = /* @__PURE__ */ Ht("INSERT_TABLE_COMMAND");
function U(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var yr = class e extends dt {
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
			conversion: br,
			priority: 0
		}) };
	}
	static importJSON(e) {
		return xr().updateFromJSON(e);
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
		return this.__height && (t.style.height = `${this.__height}px`), k(t, e.theme.tableRow), t;
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
function br(e) {
	let t = e, n;
	return pr.test(t.style.height) && (n = parseFloat(t.style.height)), {
		after: (e) => tn(e, H),
		node: xr(n)
	};
}
function xr(e) {
	return gt(new yr(e));
}
function W(e) {
	return e instanceof yr;
}
function Sr(e, t, n = !0) {
	let i = Ki();
	for (let a = 0; a < e; a++) {
		let e = xr();
		for (let i = 0; i < t; i++) {
			let t = V.NO_STATUS;
			typeof n == "object" ? (a === 0 && n.rows && (t |= V.ROW), i === 0 && n.columns && (t |= V.COLUMN)) : n && (a === 0 && (t |= V.ROW), i === 0 && (t |= V.COLUMN));
			let o = _r(t), s = r();
			s.append(l()), o.append(s), e.append(o);
		}
		i.append(e);
	}
	return i;
}
function Cr(e) {
	let t = i(e, (e) => H(e));
	return H(t) ? t : null;
}
function wr(e) {
	let t = i(e, (e) => W(e));
	if (W(t)) return t;
	throw Error("Expected table cell to be inside of table row.");
}
function Tr(e) {
	let t = i(e, (e) => J(e));
	if (J(t)) return t;
	throw Error("Expected table cell to be inside of table.");
}
function Er(e) {
	let t = wr(e);
	return Tr(t).getChildren().findIndex((e) => e.is(t));
}
function Dr(e) {
	return wr(e).getChildren().findIndex((t) => t.is(e));
}
var Or = (e, t) => e === V.BOTH || e === t ? t : V.NO_STATUS;
function kr(e = !0) {
	let t = N();
	j(t) || q(t) || U(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = K(n), [a, , o] = K(r), [, s, c] = G(o, a, i), { startRow: l } = c, { startRow: u } = s;
	return e ? Ar(l + i.__rowSpan > u + a.__rowSpan ? i : a, !0) : Ar(u < l ? a : i, !1);
}
function Ar(e, t = !0) {
	let [, , n] = K(e), [i, a] = G(n, e, e), o = i[0].length, { startRow: s } = a, c = null;
	if (t) {
		let t = s + e.__rowSpan - 1, a = i[t], l = xr();
		for (let e = 0; e < o; e++) {
			let { cell: n, startRow: i } = a[e];
			if (i + n.__rowSpan - 1 <= t) {
				let t = a[e].cell.__headerState, n = Or(t, V.COLUMN);
				l.append(_r(n).append(r()));
			} else n.setRowSpan(n.__rowSpan + 1);
		}
		let u = n.getChildAtIndex(t);
		W(u) || U(256), u.insertAfter(l), c = l;
	} else {
		let e = s, t = i[e], a = xr();
		for (let n = 0; n < o; n++) {
			let { cell: i, startRow: o } = t[n];
			if (o === e) {
				let e = t[n].cell.__headerState, i = Or(e, V.COLUMN);
				a.append(_r(i).append(r()));
			} else i.setRowSpan(i.__rowSpan + 1);
		}
		let l = n.getChildAtIndex(e);
		W(l) || U(257), l.insertBefore(a), c = a;
	}
	return c;
}
function jr(e = !0) {
	let t = N();
	j(t) || q(t) || U(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = K(n), [a, , o] = K(r), [, s, c] = G(o, a, i), { startColumn: l } = c, { startColumn: u } = s;
	return e ? Mr(l + i.__colSpan > u + a.__colSpan ? i : a, !0) : Mr(u < l ? a : i, !1);
}
function Mr(e, t = !0, n = !0) {
	let [, , i] = K(e), [a, o] = G(i, e, e), s = a.length, { startColumn: c } = o, l = t ? c + e.__colSpan - 1 : c - 1, u = i.getFirstChild();
	W(u) || U(120);
	let d = null;
	function f(e = V.NO_STATUS) {
		let t = _r(e).append(r());
		return d === null && (d = t), t;
	}
	let p = u;
	e: for (let e = 0; e < s; e++) {
		if (e !== 0) {
			let e = p.getNextSibling();
			W(e) || U(121), p = e;
		}
		let t = a[e], n = t[l < 0 ? 0 : l].cell.__headerState, r = Or(n, V.ROW);
		if (l < 0) {
			Ir(p, f(r));
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
	d !== null && n && Fr(d);
	let m = i.getColWidths();
	if (m) {
		let e = [...m], t = l < 0 ? 0 : l, n = e[t];
		e.splice(t, 0, n), i.setColWidths(e);
	}
	return d;
}
function Nr() {
	let e = N();
	j(e) || q(e) || U(188);
	let [t, n] = e.isBackward() ? [e.focus.getNode(), e.anchor.getNode()] : [e.anchor.getNode(), e.focus.getNode()], [r, , i] = K(t), [a] = K(n), [o, s, c] = G(i, r, a), { startRow: l } = s, { startRow: u } = c, d = u + a.__rowSpan - 1;
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
					W(m) || U(387);
					let r = null;
					for (let n = 0; n < t; n++) {
						let t = p[n], i = t.cell;
						t.startRow === e + 1 && (r = i), i.__colSpan > 1 && (n += i.__colSpan - 1);
					}
					r === null ? Ir(m, n) : r.insertAfter(n);
				}
			}
		}
		let t = i.getChildAtIndex(e);
		W(t) || U(206, String(e)), t.remove();
	}
	if (p !== void 0) {
		let { cell: e } = p[0];
		Fr(e);
	} else {
		let { cell: e } = o[l - 1][0];
		Fr(e);
	}
}
function Pr() {
	let e = N();
	j(e) || q(e) || U(188);
	let t = e.anchor.getNode(), n = e.focus.getNode(), [r, , i] = K(t), [a] = K(n), [o, s, c] = G(i, r, a), { startColumn: l } = s, { startRow: u, startColumn: d } = c, f = Math.min(l, d), p = Math.max(l + r.__colSpan - 1, d + a.__colSpan - 1), m = p - f + 1;
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
		Fr(e);
	} else {
		let { cell: e } = d < l ? g[d - 1] : g[l - 1];
		Fr(e);
	}
	let v = i.getColWidths();
	if (v) {
		let e = [...v];
		e.splice(f, m), i.setColWidths(e);
	}
}
function Fr(e) {
	let t = e.getFirstDescendant();
	t == null ? e.selectStart() : t.getParentOrThrow().selectStart();
}
function Ir(e, t) {
	let n = e.getFirstChild();
	n === null ? e.append(t) : n.insertBefore(t);
}
function Lr(e) {
	if (e.length === 0) return null;
	let [t] = Vr(Tr(e[0]), null, null), n = Infinity, i = -Infinity, a = Infinity, o = -Infinity, s = /* @__PURE__ */ new Set();
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
		f.has(a) || (f.add(a), Rr(i) || d.append(...i.getChildren()), i.remove());
	}
	return d.getChildrenSize() === 0 && d.append(r()), d;
}
function Rr(e) {
	if (e.getChildrenSize() !== 1) return !1;
	let t = e.getFirstChildOrThrow();
	return !(!ot(t) || !t.isEmpty());
}
function zr() {
	let e = N();
	j(e) || q(e) || U(188);
	let t = i(e.anchor.getNode(), H);
	return H(t) || U(148), Br(t);
}
function Br(e) {
	let [t, n, i] = K(e), a = t.__colSpan, o = t.__rowSpan;
	if (a === 1 && o === 1) return;
	let [s, c] = G(i, t, t), { startColumn: l, startRow: u } = c, d = t.__headerState & V.COLUMN, f = Array.from({ length: a }, (e, t) => {
		let n = d;
		for (let e = 0; n !== 0 && e < s.length; e++) n &= s[e][t + l].cell.__headerState;
		return n;
	}), p = t.__headerState & V.ROW, m = Array.from({ length: o }, (e, t) => {
		let n = p;
		for (let e = 0; n !== 0 && e < s[0].length; e++) n &= s[t + u][e].cell.__headerState;
		return n;
	});
	if (a > 1) {
		for (let e = 1; e < a; e++) t.insertAfter(_r(f[e] | m[0]).append(r()));
		t.setColSpan(1);
	}
	if (o > 1) {
		let e;
		for (let t = 1; t < o; t++) {
			let i = u + t, o = s[i];
			e = (e || n).getNextSibling(), W(e) || U(125);
			let c = null;
			for (let e = 0; e < l; e++) {
				let t = o[e], n = t.cell;
				t.startRow === i && (c = n), n.__colSpan > 1 && (e += n.__colSpan - 1);
			}
			if (c === null) for (let n = a - 1; n >= 0; n--) Ir(e, _r(f[n] | m[t]).append(r()));
			else for (let e = a - 1; e >= 0; e--) c.insertAfter(_r(f[e] | m[t]).append(r()));
		}
		t.setRowSpan(1);
	}
}
function G(e, t, n) {
	let [r, i, a] = Vr(e, t, n);
	return i === null && U(207), a === null && U(208), [
		r,
		i,
		a
	];
}
function Vr(e, t, n) {
	let r = [], i = null, a = null;
	function o(e) {
		let t = r[e];
		return t === void 0 && (r[e] = t = []), t;
	}
	let s = e.getChildren();
	for (let e = 0; e < s.length; e++) {
		let r = s[e];
		W(r) || U(209);
		let c = o(e);
		for (let l = r.getFirstChild(), u = 0; l != null; l = l.getNextSibling()) {
			for (H(l) || U(147); c[u] !== void 0;) u++;
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
function K(e) {
	let t;
	if (e instanceof mr) t = e;
	else if ("__type" in e) {
		let n = i(e, H);
		H(n) || U(148), t = n;
	} else {
		let n = i(e.getNode(), H);
		H(n) || U(148), t = n;
	}
	let n = t.getParent();
	W(n) || U(149);
	let r = n.getParent();
	return J(r) || U(210), [
		t,
		n,
		r
	];
}
function Hr(e, t, n) {
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
function Ur(e) {
	let [t, , n] = K(e), r = n.getChildren().filter(W), i = r.length, a = r[0].getChildren().length, o = Array(i);
	for (let e = 0; e < i; e++) o[e] = Array(a);
	for (let e = 0; e < i; e++) {
		let n = r[e].getChildren().filter(H), i = 0;
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
function Wr(e, t) {
	let n = t.getStartEndPoints(), a = q(t);
	if (n === null) return !1;
	let [o, s] = n, [c, l, u] = K(o), d = i(s.getNode(), (e) => H(e));
	if (!(H(c) && H(d) && W(l) && J(u))) return !1;
	let [f, p, m] = G(u, c, d), [h] = Vr(e, null, null), g = f.length, _ = g > 0 ? f[0].length : 0, v = p.startRow, y = p.startColumn, b = h.length, x = b > 0 ? h[0].length : 0;
	if (a) {
		let e = Hr(f, p, m), t = e.maxRow - e.minRow + 1, n = e.maxColumn - e.minColumn + 1;
		v = e.minRow, y = e.minColumn, b = Math.min(b, t), x = Math.min(x, n);
	}
	let S = !1, C = Math.min(g, v + b) - 1, w = Math.min(_, y + x) - 1, T = /* @__PURE__ */ new Set();
	for (let e = v; e <= C; e++) for (let t = y; t <= w; t++) {
		let n = f[e][t];
		T.has(n.cell.getKey()) || n.cell.__rowSpan === 1 && n.cell.__colSpan === 1 || (Br(n.cell), T.add(n.cell.getKey()), S = !0);
	}
	let [E] = Vr(u.getWritable(), null, null), ee = b - g + v;
	for (let e = 0; e < ee; e++) Ar(E[g - 1][0].cell);
	let te = x - _ + y;
	for (let e = 0; e < te; e++) Mr(E[0][_ - 1].cell, !0, !1);
	[E] = Vr(u.getWritable(), null, null);
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
			Lr(n), S = !0;
		}
		let { cell: s } = E[e][t], c = o.getBackgroundColor();
		c != null && s.setBackgroundColor(c);
		let l = s.getChildren();
		o.getChildren().forEach((e) => {
			D(e) && r().append(e), s.append(e);
		}), l.forEach((e) => e.remove());
	}
	if (a && S) {
		let [e] = Vr(u.getWritable(), null, null);
		e[p.startRow][p.startColumn].cell.selectEnd();
	}
	return !0;
}
function Gr(e) {
	let [[t, n, r, a], [o, s, c, l]] = ["anchor", "focus"].map((t) => {
		let n = e[t].getNode(), r = i(n, H);
		H(r) || U(238, t, n.getKey(), n.getType());
		let a = r.getParent();
		W(a) || U(239, t);
		let o = a.getParent();
		return J(o) || U(240, t), [
			n,
			r,
			a,
			o
		];
	});
	return a.is(l) || U(241), {
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
var Kr = class e {
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
		return q(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
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
		let t = (e.endsWith("\n") ? e.slice(0, -1) : e).split("\n").map((e) => e.split("	")), n = Ki();
		for (let e of t) {
			let t = xr();
			for (let n of e) {
				let e = _r(V.NO_STATUS), i = r();
				n && i.append(l(n)), e.append(i), t.append(e);
			}
			n.append(t);
		}
		let { anchorCell: i } = Gr(this);
		Wr(n, i.select(0, i.getChildrenSize()));
	}
	insertText() {}
	hasFormat(e) {
		let t = 0;
		this.getNodes().filter(H).forEach((e) => {
			let n = e.getFirstChild();
			ot(n) && (t |= n.getTextFormat());
		});
		let n = jt[e];
		return (t & n) !== 0;
	}
	insertNodes(e) {
		let t = this.focus.getNode();
		P(t) || U(151), me(t.select(0, t.getChildrenSize())).insertNodes(e);
	}
	getShape() {
		let { anchorCell: e, focusCell: t } = Gr(this), n = Ur(e);
		n === null && U(153);
		let r = Ur(t);
		r === null && U(155);
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
		let { anchorTable: t, anchorCell: n, focusCell: r } = Gr(this), i = r.getParents()[1];
		if (i !== t) {
			if (t.isParentOf(r)) {
				let e = i.getParent();
				e ?? U(159), this.set(this.tableKey, r.getKey(), e.getKey());
			} else {
				let e = t.getParent();
				e ?? U(158), this.set(this.tableKey, e.getKey(), r.getKey());
			}
			return this.getNodes();
		}
		let [a, o, s] = G(t, n, r), { minColumn: c, maxColumn: l, minRow: u, maxRow: d } = Hr(a, o, s), f = /* @__PURE__ */ new Map([[t.getKey(), t]]), p = null;
		for (let e = u; e <= d; e++) for (let t = c; t <= l; t++) {
			let { cell: n } = a[e][t], r = n.getParent();
			W(r) || U(160), r !== p && (f.set(r.getKey(), r), p = r), f.has(n.getKey()) || Yr(n, (e) => {
				f.set(e.getKey(), e);
			});
		}
		let m = Array.from(f.values());
		return qe() || (this._cachedNodes = m), m;
	}
	getTextContent() {
		let e = this.getNodes().filter((e) => H(e)), t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.__parent, a = (e[n + 1] || {}).__parent;
			t += r.getTextContent() + (a === i ? "	" : "\n");
		}
		return t;
	}
};
function q(e) {
	return e instanceof Kr;
}
function qr() {
	return new Kr("root", Je("root", 0, "element"), Je("root", 0, "element"));
}
function Jr(e, t, n) {
	e.getKey(), t.getKey(), n.getKey();
	let r = N(), i = q(r) ? r.clone() : qr();
	return i.set(e.getKey(), t.getKey(), n.getKey()), i;
}
function Yr(e, t) {
	let n = [[e]];
	for (let e = n.at(-1); e !== void 0 && n.length > 0; e = n.at(-1)) {
		let r = e.pop();
		r === void 0 ? n.pop() : !1 !== t(r) && P(r) && n.push(r.getChildren());
	}
}
function Xr(e, t = Ot()) {
	let n = T(e);
	J(n) || U(231, e);
	let r = ii(n, t.getElementByKey(e));
	return r === null && U(232, e), {
		tableElement: r,
		tableNode: n
	};
}
var Zr = class {
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
			J(r) ? e.push([r, n]) : this.removeObserver(t);
		}
		return e;
	}
}, Qr = class {
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
		return Xr(this.tableNodeKey, this.editor);
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
				this.table = _i(n, r);
			});
		});
		this.editor.read("latest", () => {
			let { tableNode: t, tableElement: n } = this.$lookup();
			this.table = _i(t, n), e.observe(n, {
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
		vi(t, _i(n, r), null), e && N() !== null && (p(null), t.dispatchCommand(g, void 0));
	}
	$enableHighlightStyle() {
		let e = this.editor, { tableElement: t } = this.$lookup();
		ue(t, e._config.theme.tableSelection), t.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
	}
	$disableHighlightStyle() {
		let { tableElement: e } = this.$lookup();
		k(e, this.editor._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
	}
	$updateTableTableSelection(e) {
		if (e !== null) {
			e.tableKey !== this.tableNodeKey && U(233, e.tableKey, this.tableNodeKey);
			let t = this.editor;
			this.tableSelection = e, this.isHighlightingCells = !0, this.$disableHighlightStyle(), this.updateDOMSelection(), vi(t, this.table, this.tableSelection);
		} else this.$clearHighlight();
	}
	updateDOMSelection() {
		if (this.anchorCell !== null && this.focusCell !== null) {
			let e = ie(this.editor._window);
			e && e.rangeCount > 0 && e.removeAllRanges();
		}
	}
	$setFocusCellForSelection(e, t = !1) {
		let n = this.editor, { tableNode: r } = this.$lookup(), i = e.x, a = e.y;
		if (this.focusCell = e, !this.isHighlightingCells && (t || this.anchorX !== i || this.anchorY !== a || this.tableSelection != null && this.anchorCellNodeKey != null) && (this.isHighlightingCells = !0, this.$disableHighlightStyle()), this.focusX !== -1 && this.focusY !== -1 && i === this.focusX && a === this.focusY) return !1;
		if (this.focusX = i, this.focusY = a, this.isHighlightingCells) {
			let o = Li(r, e.elem);
			if (this.tableSelection != null && this.anchorCellNodeKey != null) {
				let e = o;
				if (e === null && t && (e = r.getCellNodeFromCords(i, a, this.table)), e !== null) {
					let t = this.$getAnchorTableCellOrThrow();
					return this.focusCellNodeKey = e.getKey(), this.tableSelection = Jr(r, t, e), p(this.tableSelection), n.dispatchCommand(g, void 0), vi(n, this.table, this.tableSelection), !0;
				}
			}
		}
		return !1;
	}
	$getAnchorTableCell() {
		let e = this.anchorCellNodeKey ? T(this.anchorCellNodeKey) : null;
		return H(e) ? e : null;
	}
	$getAnchorTableCellOrThrow() {
		let e = this.$getAnchorTableCell();
		return e === null && U(234), e;
	}
	$getFocusTableCell() {
		let e = this.focusCellNodeKey ? T(this.focusCellNodeKey) : null;
		return H(e) ? e : null;
	}
	$getFocusTableCellOrThrow() {
		let e = this.$getFocusTableCell();
		return e === null && U(235), e;
	}
	$setAnchorCellForSelection(e) {
		this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.focusX = -1, this.focusY = -1, this.focusCell = null, this.focusCellNodeKey = null;
		let { tableNode: t } = this.$lookup(), n = Li(t, e.elem);
		if (n !== null) {
			let e = n.getKey();
			this.tableSelection == null ? this.tableSelection = Jr(t, n, n) : (this.tableSelection = this.tableSelection.clone(), this.tableSelection.set(t.getKey(), e, e)), this.anchorCellNodeKey = e;
		}
	}
	$formatCells(e) {
		let t = N();
		q(t) || U(236);
		let n = tt(), r = n.anchor, i = n.focus, a = t.getNodes().filter(H);
		a.length > 0 || U(237);
		let o = a[0].getFirstChild(), s = ot(o) ? o.getFormatFlags(e, null) : null;
		a.forEach((t) => {
			r.set(t.getKey(), 0, "element"), i.set(t.getKey(), t.getChildrenSize(), "element"), n.formatText(e, s);
		}), p(t), this.editor.dispatchCommand(g, void 0);
	}
	$clearText() {
		let { editor: e } = this, t = T(this.tableNodeKey);
		if (!J(t)) throw Error("Expected TableNode.");
		let i = N();
		q(i) || U(253);
		let a = i.getNodes().filter(H), o = t.getFirstChild(), s = t.getLastChild();
		if (a.length > 0 && o !== null && s !== null && W(o) && W(s) && a[0] === o.getFirstChild() && a[a.length - 1] === s.getLastChild()) {
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
		}), vi(e, this.table, null), p(null), e.dispatchCommand(g, void 0);
	}
}, $r = "__lexicalTableSelection";
function ei(e) {
	let t = Se(e);
	return J(t) || U(386, e), t;
}
var ti = 40;
function ni(e, t, n) {
	let r = (e) => Math.max(1, Math.ceil(Math.min(ti, e) / ti * 18));
	return e <= t + ti ? -r(t + ti - e) : e >= n - ti ? r(e - (n - ti)) : 0;
}
function ri(e) {
	return ve(e) && e.nodeName === "TABLE";
}
function ii(e, t) {
	if (!t) return t;
	let n = ri(t) ? t : t.querySelector("table");
	return ri(n) || U(341, e.constructor.name, e.getType(), e.getKey(), t.nodeName), n;
}
function ai(e) {
	return e._window;
}
function oi(e, t) {
	for (let n = t, r = null; n !== null; n = n.getParent()) {
		if (e.is(n)) return r;
		H(n) && (r = n);
	}
	return null;
}
var si = [
	[fe, "down"],
	[s, "up"],
	[Ft, "backward"],
	[u, "forward"]
], ci = [
	et,
	Ie,
	ee
], li = [ae, zt];
function ui(e, t) {
	return e.registerRootListener((n) => {
		if (n === null) return;
		let r = e._window;
		if (r !== null) return qt(r, "pointerdown", (r) => {
			let i = Pe(r);
			if (r.button !== 0 || !O(i) || !n.contains(i)) return;
			let a = function(e) {
				let t = hi(e);
				if (t === null) return null;
				let n = t.elem;
				for (; n != null;) {
					if (n.nodeName === "TABLE" && $r in n && n[$r]) return {
						cellElement: t,
						tableElement: n,
						tableObserver: n[$r]
					};
					n = n.parentNode;
				}
				return null;
			}(i);
			e.update(() => {
				if (q(N())) {
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
							if (!Oe(n) && !y(n)) return null;
							for (let i of n.elementsFromPoint(e, t)) {
								let e = gi(r, i);
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
							let a = ni(t, r, i);
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
								if (ni(s, t.left, t.right) !== 0) return !0;
							}
							let t = p("y"), n = t === null ? 0 : t.getBoundingClientRect().top, r = t === null ? o.innerHeight : t.getBoundingClientRect().bottom;
							return ni(c, n, r) !== 0;
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
							if (!O(t)) return;
							s = e.clientX, c = e.clientY;
							let n = null, a = !(we || r.contains(t));
							n = a ? gi(r, t) : d(e.clientX, e.clientY), n && f(n, a), b();
						};
						o.addEventListener("pointerup", x, i.listenerOptions), o.addEventListener("pointermove", S, i.listenerOptions);
					};
					i.pointerType = t.pointerType;
					let c = ei(i.tableNodeKey), l = Ae();
					if (we && t.shiftKey && Ti(l, c) && (j(l) || q(l))) {
						let e = l.anchor.getNode(), r = oi(c, l.anchor.getNode());
						r ? (i.$setAnchorCellForSelection(Ii(i, r)), i.$setFocusCellForSelection(n), Ni(t)) : (c.isBefore(e) ? c.selectStart() : c.selectEnd()).anchor.set(l.anchor.key, l.anchor.offset, l.anchor.type);
					} else t.pointerType !== "touch" && i.$setAnchorCellForSelection(n);
					s(n);
				})(e, r, o, i, n, t);
			});
		});
	});
}
function di(e, t, r, a, o) {
	let s = r.getRootElement(), c = ai(r);
	s !== null && c !== null || U(246);
	let u = new Qr(r, e.getKey()), d = ii(e, t);
	(function(e, t) {
		mi(e) !== null && U(205), e[$r] = t;
	})(d, u), u.listenersToRemove.add(() => function(e, t) {
		mi(e) === t && delete e[$r];
	}(d, u)), u.listenersToRemove.add(qt(d, "mousedown", (e) => {
		let t = Pe(e);
		e.detail >= 3 && O(t) && hi(t) !== null && e.preventDefault();
	}, u.listenerOptions));
	for (let [t, n] of si) u.listenersToRemove.add(r.registerCommand(t, (t) => Mi(r, t, n, e, u, o), 3));
	u.listenersToRemove.add(r.registerCommand(it, (t) => {
		let n = N();
		if (q(n)) {
			let r = oi(e, n.focus.getNode());
			if (r !== null) return Ni(t), r.selectEnd(), !0;
		}
		return !1;
	}, 3));
	let f = (t) => () => {
		let n = N();
		if (!Ti(n, e)) return !1;
		if (q(n)) return u.$clearText(), !0;
		if (j(n)) {
			if (!H(oi(e, n.anchor.getNode()))) return !1;
			let r = n.anchor.getNode(), a = n.focus.getNode(), o = e.isParentOf(r), s = e.isParentOf(a);
			if (o && !s || s && !o) return u.$clearText(), !0;
			let c = i(n.anchor.getNode(), (e) => P(e)), l = c && i(c, (e) => P(e) && H(e.getParent()));
			if (!P(l) || !P(c)) return !1;
			if (t === Ie && l.getPreviousSibling() === null) return !0;
		}
		return !1;
	};
	for (let e of ci) u.listenersToRemove.add(r.registerCommand(e, f(e), 3));
	let p = (t) => {
		let n = N();
		if (!q(n) && !j(n)) return !1;
		let r = e.isParentOf(n.anchor.getNode());
		if (r !== e.isParentOf(n.focus.getNode())) {
			let t = r ? "anchor" : "focus", i = r ? "focus" : "anchor", { key: a, offset: o, type: s } = n[i];
			return e[n[t].isBefore(n[i]) ? "selectPrevious" : "selectNext"]()[i].set(a, o, s), !1;
		}
		return !!Ti(n, e) && !!q(n) && (t && (t.preventDefault(), t.stopPropagation()), u.$clearText(), !0);
	};
	for (let e of li) u.listenersToRemove.add(r.registerCommand(e, p, 3));
	u.listenersToRemove.add(r.registerCommand(oe, (e) => {
		let t = N();
		if (t) {
			if (!q(t) && !j(t)) return !1;
			_n(r, cn(e, ClipboardEvent) ? e : null, En(t));
			let n = p(e);
			return j(t) ? (t.removeText(), !0) : n;
		}
		return !1;
	}, 3));
	let m = s.ownerDocument;
	return u.listenersToRemove.add(qt(m, "paste", (t) => {
		t.defaultPrevented || r.read("latest", () => {
			let t = N();
			return s.contains(m.activeElement) && q(t) && Ti(t, e);
		}) && (t.preventDefault(), r.dispatchCommand(Ee, t));
	})), u.listenersToRemove.add(qt(m, "copy", (t) => {
		if (t.defaultPrevented) return;
		let n = Pe(t);
		n === s || O(n) && s.contains(n) || r.read("latest", () => {
			let t = N();
			return s.contains(C(s)) && q(t) && Ti(t, e);
		}) && (t.preventDefault(), r.dispatchCommand(he, t));
	})), u.listenersToRemove.add(r.registerCommand(Rt, (t) => {
		let n = N();
		return Ti(n, e) ? q(n) ? (u.$formatCells(t), !0) : (j(n) && H(i(n.anchor.getNode(), (e) => H(e))), !1) : !1;
	}, 3)), u.listenersToRemove.add(r.registerCommand(Nt, (t) => {
		let n = N();
		if (!q(n) || !Ti(n, e)) return !1;
		let r = n.anchor.getNode(), i = n.focus.getNode();
		if (!H(r) || !H(i)) return !1;
		if (function(e, t) {
			if (q(e)) {
				let n = e.anchor.getNode(), r = e.focus.getNode();
				if (t && n && r) {
					let [e] = G(t, n, r);
					return n.getKey() === e[0][0].cell.getKey() && r.getKey() === e[e.length - 1].at(-1).cell.getKey();
				}
			}
			return !1;
		}(n, e)) return e.setFormat(t), !0;
		let [a, o, s] = G(e, r, i), c = Math.max(o.startRow + o.cell.__rowSpan - 1, s.startRow + s.cell.__rowSpan - 1), l = Math.max(o.startColumn + o.cell.__colSpan - 1, s.startColumn + s.cell.__colSpan - 1), u = Math.min(o.startRow, s.startRow), d = Math.min(o.startColumn, s.startColumn), f = /* @__PURE__ */ new Set();
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
	}, 3)), u.listenersToRemove.add(r.registerCommand(Ce, (t) => {
		let n = N();
		if (!Ti(n, e)) return !1;
		if (q(n)) return u.$clearHighlight(), !1;
		if (j(n)) {
			if (!H(i(n.anchor.getNode(), (e) => H(e)))) return !1;
			if (typeof t == "string") {
				let i = Fi(r, n, e);
				if (i) return Pi(i, e, [l(t)]), !0;
			}
		}
		return !1;
	}, 3)), a && u.listenersToRemove.add(r.registerCommand(Jt, (t) => {
		let n = N();
		if (!j(n) || !n.isCollapsed() || !Ti(n, e)) return !1;
		let r = ki(n.anchor.getNode());
		return !(r === null || !e.is(Ai(r))) && (Ni(t), function(e, t) {
			let n = t === "next" ? "getNextSibling" : "getPreviousSibling", r = t === "next" ? "getFirstChild" : "getLastChild", a = e[n]();
			if (P(a)) return a.selectEnd();
			let o = i(e, W);
			o === null && U(247);
			for (let e = o[n](); W(e); e = e[n]()) {
				let t = e[r]();
				if (P(t)) return t.selectEnd();
			}
			let s = i(o, J);
			s === null && U(248), t === "next" ? s.selectNext() : s.selectPrevious();
		}(r, t.shiftKey ? "previous" : "next"), !0);
	}, 3)), u.listenersToRemove.add(r.registerCommand(pt, (t) => e.isSelected(), 3)), u.listenersToRemove.add(r.registerCommand(n, () => {
		let t = N();
		if (!j(t) || !t.isCollapsed() || !Ti(t, e)) return !1;
		let n = Fi(r, t, e);
		return !!n && (Pi(n, e), !0);
	}, 3)), u;
}
function fi(e, t) {
	let n = N(), r = Ae(), a = e.getAndClearNextFocus();
	if (a !== null) {
		let { tableKey: t, focusCell: r } = a, i = e.observers.get(t);
		i || U(335, t);
		let [o] = i;
		if (q(n) && n.tableKey === o.tableNodeKey) return (r.x !== o.focusX || r.y !== o.focusY) && (o.$setFocusCellForSelection(r), !0);
		if (o.anchorCell !== null && o.anchorCellNodeKey !== null && r.elem !== o.anchorCell.elem && o.tableSelection !== null) return o.$setFocusCellForSelection(r, !0), !0;
	}
	let s = e.getAndClearShouldCheckSelectionForTable();
	if (s && j(r) && j(n) && n.isCollapsed()) {
		let e = T(s);
		if (J(e)) {
			let t = n.anchor.getNode(), r = e.getFirstChild(), a = ki(t);
			if (a !== null && W(r)) {
				let t = r.getFirstChild();
				if (H(t) && e.is(i(a, (n) => n.is(e) || n.is(t)))) return t.selectStart(), !0;
			}
		}
	}
	q(n) && function(e, t) {
		let n = ai(e), r = Ae();
		if (!t.is(r)) return;
		let i = ei(t.tableKey), a = ie(n), s = a && m(a, e.getRootElement());
		if (a && s && s.anchorNode && s.focusNode) {
			let n = A(s.focusNode), r = n && !i.isParentOf(n), c = A(s.anchorNode), l = c && i.isParentOf(c);
			if (r && l && a.rangeCount > 0) {
				let n = o(a, e);
				n && (n.anchor.set(i.getKey(), t.isBackward() ? i.getChildrenSize() : 0, "element"), a.removeAllRanges(), p(n));
			}
		}
	}(t, n), j(n) && function(e, t) {
		let n = Ae(), { anchor: r, focus: i } = e, a = r.getNode(), o = i.getNode(), s = ki(a), c = ki(o), l = s ? Ai(s) : null, u = c ? Ai(c) : null, d = e.isBackward(), f = s && c && l && u && l.is(u), m = u && (!l || l.isParentOf(u)), h = l && (!u || u.isParentOf(l));
		if (m) {
			let t = e.clone(), [n] = G(u, c, c), r = n[0][0].cell, i = n[n.length - 1].at(-1).cell;
			t.focus.set(d ? r.getKey() : i.getKey(), d ? 0 : i.getChildrenSize(), "element"), p(t);
		} else if (h) {
			let t = e.clone(), [n] = G(l, s, s), r = n[0][0].cell, i = n[n.length - 1].at(-1).cell;
			t.anchor.set(d ? i.getKey() : r.getKey(), d ? i.getChildrenSize() : 0, "element"), p(t);
		} else if (f) {
			let r = t.observers.get(l.getKey());
			r || U(335, l.getKey());
			let [i] = r;
			if (s.is(c) || (i.$setAnchorCellForSelection(Ii(i, s)), i.$setFocusCellForSelection(Ii(i, c), !0)), i.pointerType === "touch" && i.isSelecting && e.isCollapsed() && j(n) && n.isCollapsed()) {
				let e = ki(n.anchor.getNode());
				e && !e.is(c) && (i.$setAnchorCellForSelection(Ii(i, e)), i.$setFocusCellForSelection(Ii(i, c), !0), i.pointerType = null);
			}
		}
	}(n, e);
	for (let [n, r] of e.$getTableNodesAndObservers()) pi(t, n, r);
	return !1;
}
function pi(e, t, n) {
	let r = N(), i = Ae();
	r && !r.is(i) && (q(r) || q(i)) && n.tableSelection && !n.tableSelection.is(i) && (q(r) && r.tableKey === n.tableNodeKey ? n.$updateTableTableSelection(r) : !q(r) && q(i) && i.tableKey === n.tableNodeKey && n.$updateTableTableSelection(null)), n.hasHijackedSelectionStyles && !t.isSelected() ? function(e, t) {
		t.$enableHighlightStyle(), yi(t.table, (t) => {
			let n = t.elem;
			t.highlighted = !1, Oi(e, t), n.getAttribute("style") || n.removeAttribute("style");
		});
	}(e, n) : !n.hasHijackedSelectionStyles && t.isSelected() && function(e, t) {
		t.$disableHighlightStyle(), yi(t.table, (t) => {
			t.highlighted = !0, Di(e, t);
		});
	}(e, n);
}
function mi(e) {
	return e[$r] || null;
}
function hi(e) {
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
function gi(e, t) {
	if (!e.contains(t)) return null;
	let n = null;
	for (let r = t; r != null; r = r.parentNode) {
		if (r === e) return n;
		let t = r.nodeName;
		t !== "TD" && t !== "TH" || (n = r._cell || null);
	}
	return null;
}
function _i(e, t) {
	let n = [], r = {
		columns: 0,
		domRows: n,
		rows: 0
	}, i = ii(e, t).querySelector("tr"), a = 0, o = 0;
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
function vi(e, t, n) {
	let r = new Set(n ? n.getNodes() : []);
	yi(t, (t, n) => {
		let i = t.elem;
		r.has(n) ? (t.highlighted = !0, Di(e, t)) : (t.highlighted = !1, Oi(e, t), i.getAttribute("style") || i.removeAttribute("style"));
	});
}
function yi(e, t) {
	let { domRows: n } = e;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r) for (let n = 0; n < r.length; n++) {
			let i = r[n];
			if (!i) continue;
			let a = A(i.elem);
			a !== null && t(i, a, {
				x: n,
				y: e
			});
		}
	}
}
var bi = (e, t, n, r, i) => {
	let a = i === "forward";
	switch (i) {
		case "backward":
		case "forward": return n === (a ? e.table.columns - 1 : 0) ? r === (a ? e.table.rows - 1 : 0) ? a ? t.selectNext() : t.selectPrevious() : Ei(t.getCellNodeFromCordsOrThrow(a ? 0 : e.table.columns - 1, r + (a ? 1 : -1), e.table), a) : Ei(t.getCellNodeFromCordsOrThrow(n + (a ? 1 : -1), r, e.table), a), !0;
		case "up": return r === 0 ? t.selectPrevious() : Ei(t.getCellNodeFromCordsOrThrow(n, r - 1, e.table), !1), !0;
		case "down": return r === e.table.rows - 1 ? t.selectNext() : Ei(t.getCellNodeFromCordsOrThrow(n, r + 1, e.table), !0), !0;
		default: return !1;
	}
};
function xi(e, t) {
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
function Si([e, t]) {
	return [e === "minColumn" ? "maxColumn" : "minColumn", t === "minRow" ? "maxRow" : "minRow"];
}
function Ci(e, t, [n, r]) {
	let i = t[r], a = e[i];
	a === void 0 && U(250, r, String(i));
	let o = t[n], s = a[o];
	return s === void 0 && U(250, n, String(o)), s;
}
function wi(e, t, n, r, i) {
	let a = Hr(t, n, r), { topSpan: o, leftSpan: s, bottomSpan: c, rightSpan: l } = function(e, t) {
		let { minColumn: n, maxColumn: r, minRow: i, maxRow: a } = t, o = 1, s = 1, c = 1, l = 1, u = e[i], d = e[a];
		for (let e = n; e <= r; e++) o = Math.max(o, u[e].cell.__rowSpan), l = Math.max(l, d[e].cell.__rowSpan);
		for (let t = i; t <= a; t++) s = Math.max(s, e[t][n].cell.__colSpan), c = Math.max(c, e[t][r].cell.__colSpan);
		return {
			bottomSpan: l,
			leftSpan: s,
			rightSpan: c,
			topSpan: o
		};
	}(t, a), [u, d] = Si(function(e, t) {
		let n = xi(e, t);
		return n === null && U(249, t.cell.getKey()), n;
	}(a, n)), f = a[u], p = a[d];
	i === "forward" ? f += u === "maxColumn" ? 1 : s : i === "backward" ? f -= u === "minColumn" ? 1 : l : i === "down" ? p += d === "maxRow" ? 1 : o : i === "up" && (p -= d === "minRow" ? 1 : c);
	let m = t[p];
	if (m === void 0) return !1;
	let h = m[f];
	if (h === void 0) return !1;
	let [g, _] = function(e, t, n) {
		let r = Hr(e, t, n), i = xi(r, t);
		if (i) return [Ci(e, r, i), Ci(e, r, Si(i))];
		let a = xi(r, n);
		if (a) return [Ci(e, r, Si(a)), Ci(e, r, a)];
		let o = ["minColumn", "minRow"];
		return [Ci(e, r, o), Ci(e, r, Si(o))];
	}(t, n, h), v = Ii(e, g.cell), y = Ii(e, _.cell);
	return e.$setAnchorCellForSelection(v), e.$setFocusCellForSelection(y, !0), !0;
}
function Ti(e, t) {
	if (j(e) || q(e)) {
		let n = t.isParentOf(e.anchor.getNode()), r = t.isParentOf(e.focus.getNode());
		return n && r;
	}
	return !1;
}
function Ei(e, t) {
	t ? e.selectStart() : e.selectEnd();
}
function Di(e, t) {
	let n = t.elem, r = e._config.theme;
	H(A(n)) || U(131), k(n, r.tableCellSelected);
}
function Oi(e, t) {
	let n = t.elem;
	H(A(n)) || U(131);
	let r = e._config.theme;
	ue(n, r.tableCellSelected);
}
function ki(e) {
	let t = i(e, H);
	return H(t) ? t : null;
}
function Ai(e) {
	let t = i(e, J);
	return J(t) ? t : null;
}
function ji(e, n, r, a, o, s, l) {
	let u = x(r.focus, o ? "previous" : "next");
	if (t(u)) return !1;
	let d = u;
	for (let e of v(u).iterNodeCarets("shadowRoot")) {
		if (!w(e) || !P(e.origin)) return !1;
		d = e;
	}
	let f = d.getParentAtCaret();
	if (!H(f)) return !1;
	let p = f, m = function(e) {
		for (let t of v(e).iterNodeCarets("root")) {
			let { origin: n } = t;
			if (H(n)) {
				if (Le(t)) return Ne(n, e.direction);
			} else if (!W(n)) break;
		}
		return null;
	}(Ze(p, d.direction)), h = i(p, J);
	if (!h || !h.is(s)) return !1;
	let g = e.getElementByKey(p.getKey()), _ = hi(g);
	if (!g || !_) return !1;
	if (l.table = Wi(e, h), m) if (a === "extend") {
		let t = hi(e.getElementByKey(m.origin.getKey()));
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
	return Ni(n), !0;
}
function Mi(e, t, n, r, a, o) {
	if ((n === "up" || n === "down") && function(e) {
		let t = e.getRootElement();
		return t ? t.hasAttribute("aria-controls") && t.getAttribute("aria-controls") === "typeahead-menu" : !1;
	}(e)) return !1;
	let s = N();
	if (!Ti(s, r)) {
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
				return !!J(n) && (Ni(t), t.shiftKey ? s.focus.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent(), "element") : n.selectEnd(), !0);
			}
			if (t.shiftKey && (n === "up" || n === "down")) {
				let e = s.focus.getNode();
				if (!s.isCollapsed() && (n === "up" && !s.isBackward() || n === "down" && s.isBackward())) {
					let a = i(e, (e) => J(e));
					if (H(a) && (a = i(a, J)), a !== r || !a) return !1;
					let o = n === "down" ? a.getNextSibling() : a.getPreviousSibling();
					if (!o) return !1;
					let c = 0;
					n === "up" && P(o) && (c = o.getChildrenSize());
					let l = o;
					n === "up" && P(o) && (l = o.getLastChild() || o, c = D(l) ? l.getTextContentSize() : 0);
					let u = s.clone();
					return u.focus.set(l.getKey(), c, D(l) ? "text" : "element"), p(u), Ni(t), !0;
				}
				if (te(e)) {
					let e = n === "up" ? s.getNodes()[s.getNodes().length - 1] : s.getNodes()[0];
					if (e && oi(r, e) !== null) {
						let e = r.getFirstDescendant(), t = r.getLastDescendant();
						if (!e || !t) return !1;
						let [n] = K(e), [i] = K(t), o = r.getCordsFromCellNode(n, a.table), s = r.getCordsFromCellNode(i, a.table), c = r.getDOMCellFromCordsOrThrow(o.x, o.y, a.table), l = r.getDOMCellFromCordsOrThrow(s.x, s.y, a.table);
						return a.$setAnchorCellForSelection(c), a.$setFocusCellForSelection(l, !0), !0;
					}
					return !1;
				}
				{
					let r = i(e, (e) => P(e) && !e.isInline());
					if (H(r) && (r = i(r, J)), !r) return !1;
					let o = n === "down" ? r.getNextSibling() : r.getPreviousSibling();
					if (J(o) && a.tableNodeKey === o.getKey()) {
						let e = o.getFirstDescendant(), r = o.getLastDescendant();
						if (!e || !r) return !1;
						let [i] = K(e), [a] = K(r), c = s.clone();
						return c.focus.set((n === "up" ? i : a).getKey(), n === "up" ? 0 : a.getChildrenSize(), "element"), Ni(t), p(c), !0;
					}
				}
			}
		}
		return n === "down" && Vi(e) && o.setShouldCheckSelectionForTable(r.getKey()), !1;
	}
	if (j(s)) {
		if (n === "backward" || n === "forward") return ji(e, t, s, t.shiftKey ? "extend" : "move", n === "backward", r, a);
		if (s.isCollapsed()) {
			let { anchor: c, focus: l } = s, u = i(c.getNode(), H), d = i(l.getNode(), H);
			if (!H(u) || !u.is(d)) return !1;
			let f = Ai(u);
			if (f !== r && f != null) {
				let r = ii(f, e.getElementByKey(f.getKey()));
				if (r != null) return a.table = _i(f, r), Mi(e, t, n, f, a, o);
			}
			let p = e.getElementByKey(u.__key), m = e.getElementByKey(c.key);
			if (m == null || p == null) return !1;
			let h;
			if (c.type === "element") h = m.getBoundingClientRect();
			else {
				let t = ie(ai(e));
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
				Ni(t);
				let e = r.getCordsFromCellNode(u, a.table);
				if (!t.shiftKey) return bi(a, r, e.x, e.y, n);
				{
					let t = r.getDOMCellFromCordsOrThrow(e.x, e.y, a.table);
					a.$setAnchorCellForSelection(t), a.$setFocusCellForSelection(t, !0);
				}
				return !0;
			}
		}
	} else if (q(s)) {
		let { anchor: o, focus: c, tableKey: l } = s;
		if (l !== r.getKey()) return !1;
		let u = i(o.getNode(), H), d = i(c.getNode(), H), [f] = s.getNodes();
		J(f) || U(251);
		let p = ii(f, e.getElementByKey(f.getKey()));
		if (!H(u) || !H(d) || !J(f) || p == null) return !1;
		a.$updateTableTableSelection(s);
		let m = _i(f, p), h = r.getCordsFromCellNode(u, m), g = r.getDOMCellFromCordsOrThrow(h.x, h.y, m);
		if (a.$setAnchorCellForSelection(g), Ni(t), t.shiftKey) {
			let [e, t, i] = G(r, u, d);
			return wi(a, e, t, i, n);
		}
		return d.selectEnd(), !0;
	}
	return !1;
}
function Ni(e) {
	e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
}
function Pi(e, t, n) {
	let i = r();
	e === "first" ? t.insertBefore(i) : t.insertAfter(i), i.append(...n || []), i.selectEnd();
}
function Fi(e, t, n) {
	let r = n.getParent();
	if (!r) return;
	let a = ie(ai(e));
	if (!a) return;
	let o = m(a, e.getRootElement()).anchorNode, s = e.getElementByKey(r.getKey()), c = ii(n, e.getElementByKey(n.getKey()));
	if (!o || !s || !c || !s.contains(o) || c.contains(o)) return;
	let l = i(t.anchor.getNode(), (e) => H(e));
	if (!l) return;
	let u = i(l, (e) => J(e));
	if (!J(u) || !u.is(n)) return;
	let [d, f] = G(n, l, l), p = d[0][0], h = d[d.length - 1][d[0].length - 1], { startRow: g, startColumn: _ } = f, v = g === p.startRow && _ === p.startColumn, y = g === h.startRow && _ === h.startColumn;
	return v ? "first" : y ? "last" : void 0;
}
function Ii(e, t) {
	let { tableNode: n } = e.$lookup(), r = n.getCordsFromCellNode(t, e.table);
	return n.getDOMCellFromCordsOrThrow(r.x, r.y, e.table);
}
function Li(e, t, n) {
	return oi(e, A(t, n));
}
function Ri(e, t, n) {
	let r = e.querySelector("colgroup");
	if (!r) return;
	let i = [];
	for (let e = 0; e < t; e++) {
		let t = M().createElement("col"), r = n && n[e];
		r && (t.style.width = `${r}px`), i.push(t);
	}
	r.replaceChildren(...i);
}
function zi(e, t, n) {
	if (!t.theme.tableAlignment) return;
	let r = [], i = [];
	for (let e of ["center", "right"]) {
		let a = t.theme.tableAlignment[e];
		a && (e === n ? i : r).push(a);
	}
	ue(e, ...r), k(e, ...i);
}
var Bi = /* @__PURE__ */ new WeakSet();
function Vi(e = Ot()) {
	return Bi.has(e);
}
function Hi(e, t) {
	t ? Bi.add(e) : Bi.delete(e);
}
var Ui = class e extends dt {
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
			conversion: Gi,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Ki().updateFromJSON(e);
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
		let t = ri(e) ? e : e.querySelector("table");
		return ri(t) || U(229), super.getDOMSlot(e).withElement(t).withAfter(t.querySelector("colgroup"));
	}
	createDOM(e, t) {
		let n = M().createElement("table");
		this.__style && We(n.style, this.__style);
		let r = M().createElement("colgroup");
		if (n.appendChild(r), ce(r), k(n, e.theme.table), this.updateTableElement(null, n, e), Vi(t)) {
			let t = M().createElement("div"), r = e.theme.tableScrollableWrapper;
			return r ? k(t, r) : t.style.overflowX = "auto", t.appendChild(n), this.updateTableWrapper(null, t, n, e), t;
		}
		return n;
	}
	updateTableWrapper(e, t, n, r) {
		this.__frozenColumnCount !== (e ? e.__frozenColumnCount : 0) && function(e, t, n, r) {
			r > 0 ? (k(e, n.theme.tableFrozenColumn), t.setAttribute("data-lexical-frozen-column", "true")) : (ue(e, n.theme.tableFrozenColumn), t.removeAttribute("data-lexical-frozen-column"));
		}(t, n, r, this.__frozenColumnCount), this.__frozenRowCount !== (e ? e.__frozenRowCount : 0) && function(e, t, n, r) {
			r > 0 ? (k(e, n.theme.tableFrozenRow), t.setAttribute("data-lexical-frozen-row", "true")) : (ue(e, n.theme.tableFrozenRow), t.removeAttribute("data-lexical-frozen-row"));
		}(t, n, r, this.__frozenRowCount);
	}
	updateTableElement(e, t, n) {
		this.__style !== (e ? e.__style : "") && We(t.style, this.__style, e ? e.__style : ""), this.__rowStriping !== (!!e && e.__rowStriping) && function(e, t, n) {
			n ? (k(e, t.theme.tableRowStriping), e.setAttribute("data-lexical-row-striping", "true")) : (ue(e, t.theme.tableRowStriping), e.removeAttribute("data-lexical-row-striping"));
		}(t, n, this.__rowStriping);
		let r = e ? e.getColumnCount() : 0, i = e ? e.__colWidths : void 0;
		this.getColumnCount() === r && this.getColWidths() === i || Ri(t, this.getColumnCount(), this.getColWidths()), zi(t, n, this.getFormatType());
	}
	updateDOM(e, t, n) {
		let r = ii(this, t);
		return t === r === Vi() || (ve(i = t) && i.nodeName === "DIV" && this.updateTableWrapper(e, t, r, n), this.updateTableElement(e, r, n), !1);
		var i;
	}
	scaleDOMColWidths(e, t) {
		let n = this.getColWidths();
		n && Ri(ii(this, e), this.getColumnCount(), n.map((e) => e * t));
	}
	exportDOM(e) {
		let t = super.exportDOM(e), { element: n } = t;
		return {
			after: (n) => {
				if (t.after && (n = t.after(n)), !ri(n) && ve(n) && (n = n.querySelector("table")), !ri(n)) return null;
				zi(n, e._config, this.getFormatType());
				let [r] = Vr(this, null, null), i = /* @__PURE__ */ new Map();
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
			element: !ri(n) && ve(n) ? n.querySelector("table") : n
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
				let { elem: a } = i, o = Li(this, a);
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
		let i = A(r.elem);
		return H(i) ? i : null;
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
		if (!W(e)) return 0;
		let t = 0;
		return e.getChildren().forEach((e) => {
			H(e) && (t += e.getColSpan());
		}), t;
	}
};
function Wi(e, t) {
	let n = e.getElementByKey(t.getKey());
	return n === null && U(230), _i(t, n);
}
function Gi(e) {
	let t = Ki();
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
		after: (e) => tn(e, W),
		node: t
	};
}
function Ki() {
	return gt(new Ui());
}
function J(e) {
	return e instanceof Ui;
}
function qi(e) {
	W(e.getParent()) ? e.isEmpty() && e.append(r()) : e.remove();
}
function Ji(e) {
	J(e.getParent()) ? $t(e, H) : e.remove();
}
function Yi(e) {
	$t(e, W);
	let [t] = Vr(e, null, null), n = t.reduce((e, t) => Math.max(e, t.length), 0), i = e.getChildren();
	for (let e = 0; e < t.length; ++e) {
		let a = i[e];
		if (!a) continue;
		W(a) || U(254, a.constructor.name, a.getType());
		let o = t[e].reduce((e, t) => t ? 1 + e : e, 0);
		if (o !== n) for (let e = o; e < n; ++e) {
			let e = _r();
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
function Xi(e) {
	if (e.detail < 3 || !O(e.target)) return !1;
	let t = A(e.target);
	if (t === null) return !1;
	let n = i(t, (e) => P(e) && !e.isInline());
	return n !== null && !!H(n.getParent()) && (n.select(0), !0);
}
function Zi() {
	let e = N();
	if (!j(e)) return !1;
	let t = Ai(e.anchor.getNode());
	if (t === null) return !1;
	let n = d();
	if (!n.is(t.getParent()) || n.getChildrenSize() !== 1) return !1;
	let [r] = Vr(t, null, null);
	if (r.length === 0 || r[0].length === 0) return !1;
	let i = r[0][0];
	if (!i || !i.cell) return !1;
	let a = r[r.length - 1], o = a[a.length - 1];
	return !o || !o.cell ? !1 : (p(Jr(t, i.cell, o.cell)), !0);
}
function Qi(e) {
	return e.registerNodeTransform(mr, (e) => {
		if (e.getColSpan() > 1 || e.getRowSpan() > 1) {
			let [, , t] = K(e), [n] = G(t, e, e), r = n.length, i = n[0].length, a = t.getFirstChild();
			W(a) || U(175);
			let o = [];
			for (let e = 0; e < r; e++) {
				e !== 0 && (a = a.getNextSibling(), W(a) || U(175));
				let t = null;
				for (let r = 0; r < i; r++) {
					let i = n[e][r], s = i.cell;
					if (i.startRow === e && i.startColumn === r) t = s, o.push(s);
					else if (s.getColSpan() > 1 || s.getRowSpan() > 1) {
						H(s) || U(176);
						let e = _r(s.__headerState);
						t === null ? en(a, e) : t.insertAfter(e);
					}
				}
			}
			for (let e of o) e.setColSpan(1), e.setRowSpan(1);
		}
	});
}
function $i(e, t = !0) {
	let n = new Zr(), r = (r, i, a) => {
		let o = ii(r, a), s = di(r, o, e, t, n);
		n.observers.set(i, [s, o]);
	};
	return je(ui(e, n), e.registerCommand(g, () => fi(n, e), 3), e.registerMutationListener(Ui, (t) => {
		e.read("latest", () => {
			for (let [e, i] of t) {
				let t = n.observers.get(e);
				if (i === "created" || i === "updated") {
					let { tableNode: i, tableElement: a } = Xr(e);
					t === void 0 ? r(i, e, a) : a !== t[1] && (n.removeObserver(e), r(i, e, a));
				} else i === "destroyed" && n.removeObserver(e);
			}
		});
	}, { skipInitialization: !1 }), () => {
		n.removeAllObservers();
	});
}
function ea(e, t) {
	e.hasNodes([Ui]) || U(255);
	let { hasNestedTables: n = un(!1) } = t ?? {};
	return je(e.registerCommand(vr, (e) => function({ rows: e, columns: t, includeHeaders: n }, r) {
		let i = N() || Ae();
		if (!i || !j(i) || !r && Ai(i.anchor.getNode())) return !1;
		let a = Sr(Number(e), Number(t), n);
		on(a);
		let o = a.getFirstDescendant();
		return D(o) && o.select(), !0;
	}(e, n.peek()), 0), e.registerCommand(de, (t, r) => e === r && function(e, t) {
		let { nodes: n, selection: r } = e;
		if (!n.some((e) => J(e) || nn(e).some((e) => J(e.node)))) {
			if (q(r)) {
				let e = "", t = !1;
				for (let r of n) {
					let n = P(r) && !r.isInline();
					e.length > 0 && (n || t) && (e += "\n"), e += r.getTextContent(), t = n;
				}
				return r.insertRawText(e), !0;
			}
			return !1;
		}
		let a = q(r), o = j(r);
		return o && i(r.anchor.getNode(), (e) => H(e)) !== null && i(r.focus.getNode(), (e) => H(e)) !== null || a ? n.length === 1 && J(n[0]) ? Wr(n[0], r) : !(o && t.peek() && !function(e) {
			return !!(q(e) && !e.focus.getNode().is(e.anchor.getNode()) || j(e) && H(e.anchor.getNode()) && !e.anchor.getNode().is(e.focus.getNode()));
		}(r)) : !1;
	}(t, n), 0), e.registerCommand(Ct, Zi, 1), e.registerCommand(ne, Xi, 0), e.registerNodeTransform(Ui, Yi), e.registerNodeTransform(yr, Ji), e.registerNodeTransform(mr, qi));
}
kn.tag("table"), kn.tag("tr"), kn.tag("td", "th");
//#endregion
//#region src/context/MediaFileActionsContext.tsx
var ta = Nn({});
function na({ children: e, revealFile: t }) {
	let n = Rn(() => ({ revealFile: t }), [t]);
	return /* @__PURE__ */ z(ta.Provider, {
		value: n,
		children: e
	});
}
function ra() {
	return In(ta);
}
//#endregion
//#region src/context/BibleVerseActionsContext.tsx
var ia = Nn({});
function aa({ children: e, shortToVerseData: t, verseFullTextToListShorts: n, changeBibleKey: r }) {
	let i = Rn(() => ({
		shortToVerseData: t,
		verseFullTextToListShorts: n,
		changeBibleKey: r
	}), [
		t,
		n,
		r
	]);
	return /* @__PURE__ */ z(ia.Provider, {
		value: i,
		children: e
	});
}
function oa() {
	return In(ia);
}
//#endregion
//#region src/lookupTypes.ts
var sa = /* @__PURE__ */ new Set([
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
function ca(e) {
	let t = (e ?? "").trim().toLowerCase();
	return sa.has(t) ? t : "person";
}
function Y(e) {
	return typeof e == "string" ? e.trim() : "";
}
function la(e) {
	let t = Y(e);
	return t === "" ? null : t;
}
function ua(e) {
	return Array.isArray(e) ? e.map(Y).filter((e) => e !== "") : [];
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
		let n = t, r = Y(n.type);
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
		let n = t, r = Y(n.type), i = Y(n.url);
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
	let t = e, n = Y(t.id), r = Y(t.name);
	return n === "" || n === "id" || r === "" ? null : {
		id: n,
		name: r,
		oldName: la(t.oldName),
		title: Y(t.title),
		description: Y(t.description),
		gender: Y(t.gender),
		age: Y(t.age),
		years: pa(t.years),
		locations: ua(t.locations),
		spouses: ua(t.spouses),
		children: ua(t.children),
		parents: ua(t.parents),
		siblings: ua(t.siblings),
		cousin: ua(t.cousin),
		type: Y(t.type),
		verses: ua(t.verses),
		links: ma(t.links),
		wikipedia: la(t.wikipedia),
		matterRange: da(t.matterRange)
	};
}
function _a(e) {
	if (typeof e != "object" || !e) return null;
	let t = e, n = Y(t.id), r = Y(t.name);
	return n === "" || n === "id" || r === "" ? null : {
		id: n,
		name: r,
		oldName: la(t.oldName),
		title: Y(t.title),
		description: Y(t.description),
		type: Y(t.type),
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
function Ta(e, t) {
	let n = [...e].sort(Ca), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = [], o = [];
	for (let e of n) {
		r.has(e.id) || r.set(e.id, e);
		let t = i.get(e.name);
		t === void 0 ? i.set(e.name, [e]) : t.push(e);
		let n = e.name.toLowerCase();
		o.push(n), a.push(e.oldName === null ? n : `${n} ${e.oldName.toLowerCase()}`);
	}
	return {
		sorted: n,
		byId: r,
		byName: i,
		searchText: a,
		nameLower: o,
		verseRecordIds: t,
		queryCache: /* @__PURE__ */ new Map()
	};
}
var Ea = class {
	dataMap;
	currentDefaultLang;
	indexes = /* @__PURE__ */ new Map();
	constructor(e, t, n) {
		if (e[t] === void 0) throw Error(`Default language ${t} not found in ${n}`);
		this.currentDefaultLang = t, this.dataMap = e;
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
		let r = this.dataMap[t], i = Ta(r.records, this.getVerseRecordIds(r));
		return this.indexes.set(t, i), i;
	}
	getRankedMatches(e, t) {
		let n = e.queryCache.get(t);
		if (n !== void 0) return n;
		let r = [];
		for (let n = 0; n < e.sorted.length; n += 1) e.searchText[n].includes(t) && r.push({
			record: e.sorted[n],
			rank: wa(e.nameLower[n], t)
		});
		r.sort((e, t) => e.rank - t.rank);
		let i = r.map((e) => e.record);
		return e.queryCache.size >= Sa && e.queryCache.clear(), e.queryCache.set(t, i), i;
	}
}, Da = class e extends Ea {
	nameTypeCounts = /* @__PURE__ */ new Map();
	constructor(e, t) {
		super(e, t, "dataNamesMap");
	}
	static fromRawDataset(t, n) {
		let r = Object.entries(t).reduce((e, [t, n]) => {
			let r = typeof n == "object" && n ? n : {};
			return e[t] = {
				records: va(r.namesMap ?? n),
				versePersonsMap: ba(r.versePersonsMap)
			}, e;
		}, {});
		return new e(r, n);
	}
	static createEmpty() {
		return new e({ en: { records: [] } }, "en");
	}
	getNameTypes(e) {
		let t = this.resolveLang(e), n = this.nameTypeCounts.get(t);
		if (n !== void 0) return n;
		let r = /* @__PURE__ */ new Map();
		for (let e of this.getIndex(t).sorted) {
			let t = ca(e.type);
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
		let a = this.searchRecords(e, i).filter((e) => ca(e.type) === n);
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
}, Oa = class e extends Ea {
	constructor(e, t) {
		super(e, t, "dataLocationsMap");
	}
	static fromRawDataset(t, n) {
		let r = Object.entries(t).reduce((e, [t, n]) => {
			let r = typeof n == "object" && n ? n : {};
			return e[t] = {
				records: ya(r.locationsMap ?? r.namesMap ?? n),
				verseLocationsMap: ba(r.verseLocationsMap)
			}, e;
		}, {});
		return new e(r, n);
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
}, ka = Da.createEmpty(), Aa = Oa.createEmpty(), ja = Nn({
	locationsLookupManager: Aa,
	namesLookupManager: ka
});
function Ma({ children: e, locationsLookupManager: t, namesLookupManager: n }) {
	let r = Rn(() => ({
		locationsLookupManager: t ?? Aa,
		namesLookupManager: n ?? ka
	}), [t, n]);
	return /* @__PURE__ */ z(ja.Provider, {
		value: r,
		children: e
	});
}
function Na() {
	return In(ja);
}
function Pa() {
	return In(ja).namesLookupManager;
}
function Fa() {
	return In(ja).locationsLookupManager;
}
//#endregion
//#region node_modules/@lexical/link/dist/LexicalLink.prod.mjs
var Ia = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]), La = class e extends dt {
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
		return this.updateLinkDOM(null, t, e), k(t, e.theme.link), t;
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
			conversion: Va,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Ha().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
	}
	sanitizeUrl(e) {
		let t = e;
		e = Ya(e);
		try {
			let t = new URL(Ya(e));
			if (!Ia.has(t.protocol)) return "about:blank";
		} catch {
			let e = t.replace(/[\u0000-\u001F\u007F\s]/g, "").match(/^([a-z][a-z0-9+.-]*):/i);
			if (e != null && !Ia.has(`${e[1].toLowerCase()}:`)) return "about:blank";
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
function Ra(e) {
	let t = x(e, "next");
	return [t, t.getFlipped()];
}
function za(e, t) {
	for (let n of t) if (n.origin.isAttached()) {
		c(e, Bt(n));
		return;
	}
}
function Ba(e) {
	let t = N(), n = null, r = null;
	function i() {
		j(t) && (za(t.anchor, n), za(t.focus, r), me(t));
	}
	j(t) && (n = Ra(t.anchor), r = Ra(t.focus));
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
function Va(e) {
	let t = null;
	if (Pt(e)) {
		let n = e.textContent;
		(n !== null && n !== "" || e.children.length > 0) && (t = Ha(e.getAttribute("href") || "", {
			rel: e.getAttribute("rel"),
			target: e.getAttribute("target"),
			title: e.getAttribute("title")
		}));
	}
	return { node: t };
}
function Ha(e = "", t) {
	return gt(new La(e, t));
}
function X(e) {
	return e instanceof La;
}
var Ua = class e extends La {
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
		return Wa().updateFromJSON(e);
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
		let n = Wa(this.__url, {
			isUnlinked: this.__isUnlinked,
			rel: this.__rel,
			target: this.__target,
			title: this.__title
		});
		return this.insertAfter(n, t), n;
	}
};
function Wa(e = "", t) {
	return gt(new Ua(e, t));
}
function Z(e) {
	return e instanceof Ua;
}
var Ga = /* @__PURE__ */ Ht("TOGGLE_LINK_COMMAND");
function Ka(e, t) {
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
function qa(e, t = {}) {
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
				let t = i(e, (e) => !Z(e) && X(e));
				t && (t.insertBefore(e), t.getChildren().length === 0 && t.remove());
			} else {
				let t = i(e, (e) => !Z(e) && X(e));
				if (t) t.setURL(n), r !== void 0 && t.setTarget(r), o !== void 0 && t.setRel(o);
				else {
					let t = Ha(n, {
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
		let e = c[0], t = i(e, X);
		if (t !== null) return u(t);
	}
	(function(e) {
		let t = N();
		if (!j(t)) return e();
		let n = me(t), r = n.isBackward(), i = Ka(n.anchor, r ? -1 : 0), a = Ka(n.focus, r ? 0 : -1);
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
				p(me(t));
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
			if (P(t)) {
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
			X(c) && c.is(e) ? c.append(t) : (e = Ha(n, {
				rel: o,
				target: r,
				title: a
			}), t.insertAfter(e), e.append(t));
		}
	});
}
var Ja = /^\+?[0-9\s()-]{5,}$/;
function Ya(e) {
	return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : Ja.test(e) ? `tel:${e}` : `https://${e}`;
}
kn.tag("a");
function Xa(e, t) {
	return je(e.registerNodeTransform(La, Ba), e.registerCommand(Ga, (e) => {
		let n = t.validateUrl.peek(), r = t.attributes.peek();
		if (e === null) return qa(null), !0;
		if (typeof e == "string") return !(n !== void 0 && !n(e)) && (qa(e, r), !0);
		{
			let { url: t, target: n, rel: i, title: a } = e;
			return qa(t, {
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
		return e.registerCommand(Ee, (t) => {
			let i = N();
			if (!j(i) || i.isCollapsed() || !cn(t, ClipboardEvent) || t.clipboardData === null) return !1;
			let a = t.clipboardData.getData("text");
			return n(a) ? !i.getNodes().some((e) => P(e) || D(e) && !e.isSimpleText()) && (e.dispatchCommand(Ga, {
				...r,
				url: a
			}), t.preventDefault(), !0) : !1;
		}, 1);
	}));
}
function Za(e, t, n = {}) {
	let r = (n) => {
		let r = n.target;
		if (!O(r)) return;
		let a = Be(r);
		if (a === null) return;
		let o = null, s = null, c = !1;
		if (a.update(() => {
			let e = A(r);
			if (e !== null) {
				let n = i(e, P);
				if (!t.disabled.peek()) if (X(n)) c = Z(n) && n.getIsUnlinked(), o = n.sanitizeUrl(n.getURL()), s = n.getTarget();
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
function Qa(e, t = (e) => e) {
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
function $a(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n](e);
		if (r) return r;
	}
	return null;
}
var eo = /[.,;\s]/;
function to(e, t) {
	return t.test(e);
}
function no(e, t) {
	return to(e[e.length - 1], t);
}
function ro(e, t) {
	return to(e[0], t);
}
function io(e, t) {
	let n = e.getPreviousSibling();
	return P(n) && (n = n.getLastDescendant()), n === null || Re(n) || D(n) && no(n.getTextContent(), t);
}
function ao(e, t) {
	let n = e.getNextSibling();
	return P(n) && (n = n.getFirstDescendant()), n === null || Re(n) || D(n) && ro(n.getTextContent(), t);
}
function oo(e, t, n, r, i) {
	return (e > 0 ? to(r[e - 1], n) : io(i[0], n)) ? t < r.length ? to(r[t], n) : ao(i[i.length - 1], n) : !1;
}
function so(e, t, n) {
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
function co(e, t, n, r) {
	let i = Wa(r.url, r.attributes);
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
		let u = N(), d = u ? u.getNodes().find(D) : void 0, f = l(a.getTextContent());
		return f.setFormat(a.getFormat()), f.setDetail(a.getDetail()), f.setStyle(a.getStyle()), i.append(f, ...s), d && d === a && (j(u) ? f.select(u.anchor.offset, u.focus.offset) : _(u) && f.select(0, f.getTextContent().length)), a.replace(i), c;
	}
}
function lo(e, t, n, r) {
	let i = e.getChildren(), a = i.length;
	for (let t = 0; t < a; t++) {
		let r = i[t];
		if (!D(r) || !r.isSimpleText()) return uo(e), void n(null, e.getURL());
	}
	let o = e.getTextContent(), s = $a(o, t);
	if (s === null || s.text !== o || !io(e, r) || !ao(e, r)) return uo(e), void n(null, e.getURL());
	let c = e.getURL();
	if (c !== s.url && (e.setURL(s.url), n(s.url, c)), s.attributes) {
		let t = e.getRel();
		t !== s.attributes.rel && (e.setRel(s.attributes.rel || null), n(s.attributes.rel || null, t));
		let r = e.getTarget();
		r !== s.attributes.target && (e.setTarget(s.attributes.target || null), n(s.attributes.target || null, r));
	}
}
function uo(e) {
	let t = e.getChildren();
	for (let n = t.length - 1; n >= 0; n--) e.insertAfter(t[n]);
	return e.remove(), t.map((e) => e.getLatest());
}
var fo = {
	changeHandlers: [],
	excludeParents: [],
	matchers: [],
	separatorRegex: eo
};
function po(e, t = fo) {
	let { matchers: n, changeHandlers: r, excludeParents: i, separatorRegex: a = eo } = t, o = (e, t) => {
		for (let n of r) n(e, t);
	};
	return je(e.registerNodeTransform(De, (e) => {
		let t = e.getParentOrThrow(), r = e.getPreviousSibling();
		Z(t) ? lo(t, n, o, a) : !X(t) && !i.some((e) => e(t)) && (e.isSimpleText() && (ro(e.getTextContent(), a) || !Z(r)) && (function(e, t, n, r) {
			for (let t of e) {
				let e = t.getParent();
				if (Z(e) && !e.getIsUnlinked()) return;
			}
			let i = [...e], a = i.map((e) => e.getTextContent()).join(""), o, s = a, c = 0;
			for (; (o = $a(s, t)) && o !== null;) {
				let e = o.index, t = e + o.length;
				if (oo(c + e, c + t, r, a, i)) {
					let [r, , a, l] = so(i, c + e, c + t), u = !1;
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
					let d = co(a, c + e - r, c + t - r, o);
					i = d ? [d, ...l] : l, n(o.url, null), c = 0;
				} else c += t;
				s = s.substring(t);
			}
		})(function(e) {
			let t = [e], n = e.getNextSibling();
			for (; n !== null && D(n) && n.isSimpleText() && (t.push(n), !/[\s]/.test(n.getTextContent()));) n = n.getNextSibling();
			return t;
		}(e), n, o, a), (function(e, t, n, r) {
			let i = e.getParent(), a = e.getPreviousSibling(), o = e.getNextSibling(), s = e.getTextContent();
			if (!Z(i) || i.getIsUnlinked()) {
				if (Z(a) && !a.getIsUnlinked() && a.is(e.getPreviousSibling()) && e.getParent() === a.getParent()) {
					if (!ro(s, r)) return uo(a), void n(null, a.getURL());
					if (c = s, a.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(c) : /^\.[a-zA-Z0-9]{1,}/.test(c)) {
						let i = a.getTextContent() + s, o = $a(i, t);
						o !== null && o.text === i && (a.append(e), lo(a, t, n, r), n(null, a.getURL()));
					}
				}
				var c;
				!Z(o) || o.getIsUnlinked() || no(s, r) || o.is(e.getNextSibling()) && e.getParent() === o.getParent() && (uo(o), n(null, o.getURL()));
			}
		})(e, n, o, a));
	}), e.registerCommand(Ga, (e) => {
		let t = N();
		return e !== null || !j(t) || t.extract().forEach((e) => {
			let t = e.getParent();
			Z(t) && (t.setIsUnlinked(!t.getIsUnlinked()), t.markDirty());
		}), !1;
	}, 1));
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalRichTextPlugin.prod.mjs
function mo(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var ho = Ve ? Ln : I;
function go({ editor: e, ErrorBoundary: t }) {
	return function(e, t) {
		let [n, r] = R(() => e.getDecorators());
		return ho(() => e.registerDecoratorListener((e) => {
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
function _o({ editor: e, ErrorBoundary: t }) {
	return function(e) {
		let t = pn.maybeFromEditor(e);
		if (t && t.hasExtensionByName(mn.name)) {
			for (let e of ["@lexical/plain-text", "@lexical/rich-text"]) t.hasExtensionByName(e) && mo(320, e);
			return !0;
		}
		return !1;
	}(e) ? null : /*#__PURE__*/ z(go, {
		editor: e,
		ErrorBoundary: t
	});
}
function vo(e) {
	return e.read("latest", fn(e.isComposing()));
}
function yo({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = _t();
	return function(e) {
		ho(() => je(fr(e), Tn(e)), [e]);
	}(r), /*#__PURE__*/ B(zn, { children: [
		e,
		/*#__PURE__*/ z(bo, { content: t }),
		/*#__PURE__*/ z(_o, {
			editor: r,
			ErrorBoundary: n
		})
	] });
}
function bo({ content: e }) {
	let [t] = _t(), n = function(e) {
		let [t, n] = R(() => vo(e));
		return ho(() => {
			function t() {
				let t = vo(e);
				n(t);
			}
			return t(), je(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), r = An();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region src/nodes/EmojiNode.tsx
var xo = class e extends De {
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
		return So(e.className, e.text).updateFromJSON(e);
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
function So(e, t) {
	return gt(new xo(e, t).setMode("token"));
}
//#endregion
//#region src/nodes/KeywordNode.ts
var Co = class e extends De {
	static getType() {
		return "keyword";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	static importJSON(e) {
		return wo().updateFromJSON(e);
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
function wo(e = "") {
	return gt(new Co(e));
}
//#endregion
//#region src/nodes/MentionNode.ts
function To(e) {
	return e === "mention" || e === "location" || e === "bible-verse" ? e : e === "hashtag" ? "location" : void 0;
}
function Eo(e, t, n) {
	let r = To(n);
	return r === void 0 ? e.startsWith("#") || t.startsWith("#") ? "location" : e.startsWith("^") || t.startsWith("^") ? "bible-verse" : "mention" : r;
}
function Do(e, t) {
	return t === "location" && e.startsWith("#") || t === "bible-verse" && e.startsWith("^") ? e.slice(1) : e;
}
function Oo(e, t, n) {
	return n === "location" && e.startsWith("#") ? t : n === "bible-verse" && e.startsWith("^") ? e.slice(1) : e;
}
function ko(e, t, n, r, i, a) {
	e.setAttribute("data-lexical-mention", "true"), e.setAttribute("data-lexical-mention-kind", n), r === null ? e.removeAttribute("data-lexical-mention-id") : e.setAttribute("data-lexical-mention-id", r), i === null ? e.removeAttribute("data-lexical-mention-data") : e.setAttribute("data-lexical-mention-data", i), a ? e.setAttribute("data-lexical-mention-name", t) : e.removeAttribute("data-lexical-mention-name");
}
function Ao(e) {
	let t = e.textContent, n = e.getAttribute("data-lexical-mention-data"), r = e.getAttribute("data-lexical-mention-id"), i = e.getAttribute("data-lexical-mention-name"), a = e.getAttribute("data-lexical-mention-kind");
	if (t !== null) {
		let e = Eo(typeof i == "string" ? i : t, t, a === "mention" || a === "location" || a === "bible-verse" || a === "hashtag" ? a : void 0), o = Do(typeof i == "string" ? i : t, e);
		return { node: Mo(o, Oo(t, o, e), r, e, n) };
	}
	return null;
}
var jo = class e extends De {
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
		let t = Eo(e.mentionName, e.text, e.mentionKind), n = Do(e.mentionName, t), r = Oo(e.text, n, t);
		return Mo(n, r, e.mentionId ?? null, t, e.mentionData ?? null).updateFromJSON({
			...e,
			mentionKind: t,
			mentionName: n,
			text: r
		});
	}
	updateFromJSON(e) {
		let t = Eo(e.mentionName, e.text, e.mentionKind), n = Do(e.mentionName, t), r = Oo(e.text, n, t), i = super.updateFromJSON({
			...e,
			text: r
		});
		return i.__mention = n, i.__mentionData = e.mentionData ?? null, i.__mentionId = e.mentionId ?? null, i.__mentionKind = t, i;
	}
	constructor(e, t, n, r, i, a) {
		let o = Eo(e, t ?? e, r), s = Do(e, o), c = Oo(t ?? e, s, o);
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
		return t.className = "mention", t.spellcheck = !1, ko(t, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, !0), t;
	}
	updateDOM(e, t, n) {
		let r = super.updateDOM(e, t, n), i = this.__mentionKind;
		return (e.__mention !== this.__mention || e.__mentionData !== this.__mentionData || e.__mentionId !== this.__mentionId || e.__mentionKind !== this.__mentionKind || e.__text !== this.__text || t.getAttribute("data-lexical-mention-kind") !== i || t.getAttribute("data-lexical-mention-data") !== this.__mentionData) && ko(t, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, !0), r;
	}
	exportDOM() {
		let e = document.createElement("span");
		return ko(e, this.__mention, this.__mentionKind, this.__mentionId, this.__mentionData, this.__text !== this.__mention), e.textContent = this.__text, { element: e };
	}
	static importDOM() {
		return { span: (e) => e.hasAttribute("data-lexical-mention") ? {
			conversion: Ao,
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
function Mo(e, t, n, r, i) {
	let a = new jo(e, t, n, r, i);
	return a.setMode("segmented").toggleDirectionless(), gt(a);
}
//#endregion
//#region src/nodes/MediaNode.tsx
var No = jn.lazy(() => import("./MediaComponent-YPx8N7xv.mjs"));
function Po(e) {
	return e.parentElement != null && e.parentElement.tagName === "LI" && e.previousSibling === null && e.getAttribute("aria-roledescription") === "checkbox";
}
function Fo(e) {
	let t = e, n = t.getAttribute("src");
	if (!n || n.startsWith("file:///") || Po(t)) return null;
	let { alt: r, width: i, height: a } = t;
	return { node: Ho({
		altText: r,
		height: a,
		src: n,
		width: i
	}) };
}
function Io(e) {
	let t = e, n = t.getAttribute("src") || t.currentSrc;
	return n ? { node: Ho({
		altText: t.getAttribute("title") || "",
		height: t.height,
		mediaType: "video",
		src: n,
		width: t.width
	}) } : null;
}
function Lo(e) {
	let t = e, n = t.getAttribute("src") || t.currentSrc;
	return n ? { node: Ho({
		altText: t.getAttribute("title") || "",
		height: Number(t.getAttribute("height")) || void 0,
		mediaType: "audio",
		src: n,
		width: Number(t.getAttribute("width")) || void 0
	}) } : null;
}
function Ro(e) {
	let t = e.getAttribute("src") || e.getAttribute("data") || "", n = e.getAttribute("type") || "";
	return (e.getAttribute("data-lexical-media-type") || "") === "pdf" || n === "application/pdf" || t.toLowerCase().split(/[?#]/)[0].endsWith(".pdf");
}
function zo(e) {
	let t = e, n = t.getAttribute("src") || t.getAttribute("data");
	return !n || !Ro(t) ? null : { node: Ho({
		altText: t.getAttribute("title") || "",
		height: Number(t.getAttribute("height")) || void 0,
		mediaType: "pdf",
		src: n,
		width: Number(t.getAttribute("width")) || void 0
	}) };
}
function Bo() {
	for (let { origin: e } of v(Ne(d(), "next"))) if (!P(e)) return !1;
	return !0;
}
var Vo = class e extends E {
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
		return Ho({
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
				if (Bo()) return null;
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
				conversion: Lo,
				priority: 0
			}),
			embed: () => ({
				conversion: zo,
				priority: 0
			}),
			figcaption: () => ({
				conversion: () => ({ node: null }),
				priority: 0
			}),
			figure: () => ({
				conversion: (e) => ({
					after: (t) => {
						let n = t.filter(Uo), r = e.querySelector("figcaption");
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
				conversion: Fo,
				priority: 0
			}),
			iframe: (e) => Ro(e) ? {
				conversion: zo,
				priority: 0
			} : null,
			object: () => ({
				conversion: zo,
				priority: 0
			}),
			video: () => ({
				conversion: Io,
				priority: 0
			})
		};
	}
	constructor(e, t, n, r, i, a, o, s, c, l = "image", u) {
		super(c), this.__src = e, this.__altText = t, this.__maxWidth = n, this.__width = r || "inherit", this.__height = i || "inherit", this.__mediaType = l, this.__previewSrc = u, this.__showCaption = a || !1, this.__caption = o || ft({
			namespace: "Playground/MediaNodeCaption",
			nodes: [
				St,
				De,
				S,
				h,
				La,
				xo,
				Co,
				jo
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
		return /* @__PURE__ */ z(No, {
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
function Ho({ altText: e, height: t, maxWidth: n = 500, captionsEnabled: r, mediaType: i, previewSrc: a, src: o, width: s, showCaption: c, caption: l, key: u }) {
	return gt(new Vo(o, e, n, s, t, c, l, r, u, i, a));
}
function Uo(e) {
	return e instanceof Vo;
}
//#endregion
//#region src/utils/url.ts
var Wo = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]);
function Go(e) {
	try {
		let t = new URL(e);
		if (!Wo.has(t.protocol)) return "about:blank";
	} catch {
		return e;
	}
	return e;
}
var Ko = /* @__PURE__ */ new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/);
function qo(e) {
	return e === "https://" || Ko.test(e);
}
//#endregion
//#region node_modules/@lexical/mark/dist/LexicalMark.prod.mjs
var Jo = [], Yo = class e extends dt {
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
		return Xo().updateFromJSON(e);
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
	constructor(e = Jo, t) {
		super(t), this.__ids = e;
	}
	createDOM(e) {
		let t = M().createElement("mark");
		return k(t, e.theme.mark), this.__ids.length > 1 && k(t, e.theme.markOverlap), t;
	}
	updateDOM(e, t, n) {
		let r = e.__ids, i = this.__ids, a = r.length, o = i.length, s = n.theme.markOverlap;
		return a !== o && (a === 1 ? o === 2 && k(t, s) : o === 1 && ue(t, s)), !1;
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
		let n = Xo(this.__ids);
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
function Xo(e = Jo) {
	return gt(new Yo(e));
}
function Zo(e) {
	return e instanceof Yo;
}
function Qo(e) {
	let t = e.getChildren(), n = null;
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		n === null ? e.insertBefore(i) : n.insertAfter(i), n = i;
	}
	e.remove();
}
function $o(t, n, r, i) {
	let a = tt(), [o, s] = t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus], c, l;
	a.anchor.set(o.key, o.offset, o.type), a.focus.set(s.key, s.offset, s.type);
	let u = a.extract();
	for (let t of u) {
		if (P(l) && l.isParentOf(t)) continue;
		let n = null;
		if (D(t)) n = t;
		else {
			if (Zo(t)) continue;
			(P(t) || e(t)) && t.isInline() && (n = t);
		}
		if (n !== null) {
			if (n && n.is(c)) continue;
			let e = n.getParent();
			e != null && e.is(c) || (l = void 0), c = e, l === void 0 && (l = (i || Xo)([r]), n.insertBefore(l)), l.append(n);
		} else c = void 0, l = void 0;
	}
	P(l) && (n ? l.selectStart() : l.selectEnd());
}
function es(e, t) {
	let n = e;
	for (; n !== null;) {
		if (Zo(n)) return n.getIDs();
		if (D(n) && t === n.getTextContentSize()) {
			let e = n.getNextSibling();
			if (Zo(e)) return e.getIDs();
		}
		n = n.getParent();
	}
	return null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalTypeaheadMenuPlugin.prod.mjs
var ts = Ve ? Ln : I, ns = class {
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
}, rs = (e) => {
	let t = e.closest("#typeahead-menu");
	if (!t) return;
	let n = t.getBoundingClientRect();
	n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function is(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return n.top >= r.top - 6 && n.top <= r.bottom + 6;
}
function as(e, t, n, r) {
	let [i] = _t();
	I(() => {
		if (t != null && e != null) {
			let e = i.getRootElement(), a = e == null ? document.body : Xt(e, !1), o = !1, s = is(t, a), c = function() {
				o ||= (window.requestAnimationFrame(function() {
					n(), o = !1;
				}), !0);
				let e = is(t, a);
				e !== s && (s = e, r?.(e));
			}, l = new ResizeObserver(n), u = Lt(e ?? t);
			return l.observe(t), je(qt(window, "resize", n), qt(document, "scroll", c, {
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
var os = /* @__PURE__ */ Ht("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function ss({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
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
function cs({ close: e, editor: t, anchorElementRef: n, resolution: r, options: i, menuRenderFn: a, onSelectOption: o, shouldSplitNodeWithQuery: c = !1, commandPriority: l = 1, preselectFirstItem: u = !0 }) {
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
		children: /*#__PURE__*/ z("ul", { children: i.map((e, t) => /*#__PURE__*/ z(ss, {
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
	}, [t]), ts(() => {
		i === null ? f(null) : p === null && u && h(0);
	}, [
		i,
		p,
		h,
		u
	]), I(() => je(t.registerCommand(os, ({ option: e }) => !(!e.ref || e.ref.current == null) && (rs(e.ref.current), !0), l)), [
		t,
		h,
		l
	]), I(() => je(t.registerCommand(fe, (e) => {
		let n = e;
		if (i !== null && i.length) {
			let e = p === null || p === i.length - 1 ? 0 : p + 1;
			h(e);
			let r = i[e];
			if (!r) return h(-1), n.preventDefault(), n.stopImmediatePropagation(), !0;
			r.ref && r.ref.current && t.dispatchCommand(os, {
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
			n.ref && n.ref.current && rs(n.ref.current), t.preventDefault(), t.stopImmediatePropagation();
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
function ls(e, t) {
	t != null && (e.className = t), e.setAttribute("aria-label", "Typeahead menu"), e.setAttribute("role", "listbox"), e.style.display = "block", e.style.position = "absolute";
}
function us(e, t, n, r, i = !0) {
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
			r.isConnected || (ls(r, n), o.append(r)), r.setAttribute("id", "typeahead-menu"), t.setAttribute("aria-controls", "typeahead-menu");
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
	return as(e, c.current, l, u), s != null && s === c.current && (ls(s, n), o?.append(s)), c;
}
var ds = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
function fs(e, { minLength: t = 1, maxLength: n = 75, punctuation: r = ds, allowWhitespace: i = !1 }) {
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
function ps({ options: e, onQueryChange: t, onSelectOption: n, onOpen: r, onClose: i, menuRenderFn: a, triggerFn: o, anchorClassName: s, commandPriority: c = 1, parent: l, preselectFirstItem: u = !0, ignoreEntityBoundary: d = !1 }) {
	let [f] = _t(), [p, h] = R(null), g = us(p, h, s, l), _ = F(() => {
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
							return D(t) && t.isTextEntity();
						}
						return !1;
					});
				}(f, a.leadOffset)) && function(e, t, n, r) {
					let i = ie(n);
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
	}), [f, _]), p === null || f === null || g.current === null ? null : /*#__PURE__*/ z(cs, {
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
var ms = "lexical-playground-media-files", hs = "media-files", gs = 1;
function _s() {
	return typeof window > "u" || !window.indexedDB ? null : window.indexedDB;
}
function vs() {
	let e = _s();
	return e === null ? Promise.resolve(null) : new Promise((t) => {
		let n = e.open(ms, gs);
		n.onupgradeneeded = () => {
			let e = n.result;
			e.objectStoreNames.contains(hs) || e.createObjectStore(hs, { keyPath: "src" });
		}, n.onsuccess = () => {
			t(n.result);
		}, n.onerror = () => {
			t(null);
		};
	});
}
function ys(e) {
	e.close();
}
async function bs(e, t) {
	if (e.trim() === "") return;
	let n = await vs();
	n !== null && await new Promise((r) => {
		let i = n.transaction(hs, "readwrite"), a = i.objectStore(hs), o = {
			file: t,
			name: t.name,
			src: e,
			type: t.type,
			updatedAt: Date.now()
		};
		i.oncomplete = () => {
			ys(n), r();
		}, i.onerror = () => {
			ys(n), r();
		}, i.onabort = () => {
			ys(n), r();
		}, a.put(o);
	});
}
async function xs(e) {
	if (e.trim() === "" || typeof URL.createObjectURL != "function") return;
	let t = await vs();
	if (t === null) return;
	let n = await new Promise((n) => {
		let r = t.transaction(hs, "readonly"), i = r.objectStore(hs).get(e);
		i.onsuccess = () => {
			let e = i.result;
			n(e?.file);
		}, i.onerror = () => {
			n(void 0);
		}, r.oncomplete = () => {
			ys(t);
		}, r.onerror = () => {
			ys(t);
		}, r.onabort = () => {
			ys(t);
		};
	});
	return n ? URL.createObjectURL(n) : void 0;
}
//#endregion
//#region src/utils/filePathResolver.ts
var Ss = /^[a-z][a-z\d+.-]*:/i, Cs = /^(?:blob|data|https?):/i;
function ws(e) {
	return typeof e == "string" ? e.trim() === "" ? null : e : null;
}
function Ts(e) {
	return e.path || e.webkitRelativePath || e.name;
}
async function Es(e, t, n) {
	if (e === void 0) return null;
	try {
		return ws(await e(t, { source: n }));
	} catch {
		return null;
	}
}
function Ds(e) {
	let t = e.trim();
	return t === "" || Cs.test(t) ? !1 : t.startsWith("file://") || /^[a-z]:[\\/]/i.test(t) || t.startsWith("\\\\") || /^\.{1,2}[\\/]/.test(t) || t.startsWith("/") || !Ss.test(t) && /[\\/]/.test(t);
}
//#endregion
//#region src/plugins/EmojisPlugin/index.ts
var Os = /* @__PURE__ */ new Map([
	[":)", ["emoji happysmile", "🙂"]],
	[":D", ["emoji veryhappysmile", "😀"]],
	[":(", ["emoji unhappysmile", "🙁"]],
	["<3", ["emoji heart", "❤"]]
]);
function ks(e) {
	let t = e.getTextContent();
	for (let n = 0; n < t.length; n++) {
		let r = Os.get(t[n]) || Os.get(t.slice(n, n + 2));
		if (r !== void 0) {
			let [t, i] = r, a;
			n === 0 ? [a] = e.splitText(n + 2) : [, a] = e.splitText(n, n + 2);
			let o = So(t, i);
			return a.replace(o), o;
		}
	}
	return null;
}
function As(e) {
	let t = e;
	for (; t !== null;) {
		if (!t.isSimpleText()) return;
		t = ks(t);
	}
}
function js(e) {
	I(() => {
		if (!e.hasNodes([xo])) throw Error("EmojisPlugin: EmojiNode not registered on editor");
		return e.registerNodeTransform(De, As);
	}, [e]);
}
function Ms() {
	let [e] = _t();
	return js(e), null;
}
//#endregion
//#region node_modules/@lexical/react/dist/useLexicalTextEntity.prod.mjs
function Ns(e, t, n) {
	let [r] = _t();
	I(() => je(...hn(r, e, t, n)), [
		n,
		r,
		e,
		t
	]);
}
//#endregion
//#region src/plugins/KeywordsPlugin/index.ts
var Ps = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function Fs() {
	let [e] = _t();
	I(() => {
		if (!e.hasNodes([Co])) throw Error("KeywordsPlugin: KeywordNode not registered on editor");
	}, [e]);
	let t = F((e) => wo(e.getTextContent()), []);
	return Ns(F((e) => {
		let t = Ps.exec(e);
		if (t === null) return null;
		let n = t[2].length, r = t.index + t[1].length;
		return {
			end: r + n,
			start: r
		};
	}, []), Co, t), null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalLinkPlugin.prod.mjs
function Is({ validateUrl: e, attributes: t }) {
	let [n] = _t();
	return I(() => {
		if (!n.hasNodes([La])) throw Error("LinkPlugin: LinkNode not registered on editor");
	}), I(() => Xa(n, gn({
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
function Ls({ hasLinkAttributes: e = !1 }) {
	return /* @__PURE__ */ z(Is, {
		validateUrl: qo,
		attributes: e ? {
			rel: "noopener noreferrer",
			target: "_blank"
		} : void 0
	});
}
//#endregion
//#region src/plugins/MentionLocationsPlugin/openLocationAdvancedPanelEvent.ts
var Rs = "bible-note:open-mention-location-advanced-panel";
function zs(e) {
	window.dispatchEvent(new CustomEvent(Rs, { detail: e }));
}
//#endregion
//#region src/plugins/MentionNamePlugin/nameTypeIcons.ts
var Bs = {
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
function Vs(e) {
	return `bi ${Bs[ca(e)]} icon`;
}
//#endregion
//#region src/plugins/MentionNamePlugin/openPersonAdvancedPanelEvent.ts
var Hs = "bible-note:open-mention-person-advanced-panel";
function Us(e) {
	window.dispatchEvent(new CustomEvent(Hs, { detail: e }));
}
//#endregion
//#region src/plugins/MentionBibleVersesPlugin/openBibleVerseAdvancedPanelEvent.ts
var Ws = "bible-note:open-mention-bible-verse-advanced-panel";
function Gs(e) {
	window.dispatchEvent(new CustomEvent(Ws, { detail: e }));
}
//#endregion
//#region src/plugins/MentionReferenceText/index.tsx
var Ks = /\[([^\]]+)\]\((?:name-id|location-id|verse-key):\/\/[^)]*\)/g;
function qs(e) {
	return e.replace(Ks, "$1");
}
var Js = /\[([^\]]+)\]\((name-id|location-id|verse-key):\/\/([^)]*)\)/g;
function Ys(e) {
	let t = [], n = new RegExp(Js), r = 0, i;
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
function Xs({ locationsLookupManager: e, namesLookupManager: t }, n, r) {
	if (n.kind === "name") {
		Us({
			anchorElement: r,
			id: n.target,
			name: t.getRecordById(n.target)?.name ?? n.label
		});
		return;
	}
	if (n.kind === "location") {
		zs({
			anchorElement: r,
			id: n.target,
			name: e.getRecordById(n.target)?.name ?? n.label
		});
		return;
	}
	Gs({
		anchorElement: r,
		shortVerse: n.target
	});
}
function Zs({ value: e }) {
	let t = Na();
	return /* @__PURE__ */ z(zn, { children: Rn(() => Ys(e), [e]).map((e, n) => e.kind === "text" ? /* @__PURE__ */ z(jn.Fragment, { children: e.text }, n) : /* @__PURE__ */ z("button", {
		className: `mention-reference-link mention-reference-link--${e.kind}`,
		type: "button",
		onClick: (n) => {
			n.preventDefault(), n.stopPropagation(), Xs(t, e, n.currentTarget);
		},
		children: e.label
	}, n)) });
}
//#endregion
//#region src/plugins/MentionAdvancedPanelUtils.ts
var Qs = 320, $s = 120, ec = 220, tc = 10, nc = 22, rc = 32, ic = 1e3;
function ac() {
	return ic += 1, ic;
}
function Q(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function oc(e) {
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
async function sc(e, t) {
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
	oc(e);
}
function cc(e, t) {
	let n = t.getBoundingClientRect();
	if (e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom) return !1;
	let r = window.getComputedStyle(t), i = Number.parseFloat(r.paddingLeft), a = Number.isFinite(i) && i > 0 ? Math.min(i + 6, rc) : nc;
	return e.clientX <= n.left + a;
}
function lc() {
	return {
		bottom: window.innerHeight,
		height: window.innerHeight,
		left: 0,
		right: window.innerWidth,
		top: 0,
		width: window.innerWidth
	};
}
function uc(e) {
	let t = e?.closest(".editor-container") ?? document.querySelector(".editor-container");
	if (t instanceof HTMLElement) {
		let e = t.getBoundingClientRect();
		if (e.width > 0 && e.height > 0) return e;
	}
	return lc();
}
function dc(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function fc(e, t) {
	return wn(e ?? t?.closest(".editor-zoom-surface") ?? document.querySelector(".editor-zoom-surface"));
}
var pc = 420, mc = 10, hc = 12;
function gc(e, t) {
	let n = fc(null, e), r = e.getBoundingClientRect(), i = t * n, a = Math.min(pc * n, window.innerWidth - hc * 2), o = Math.max(hc, window.innerWidth - a - hc), s = Math.min(Math.max(r.left, hc), o), c = window.innerHeight - r.bottom - mc - hc, l = r.top - mc - hc, u = c < i && l > c, d = u ? r.top - mc : r.bottom + mc, f = Math.max(hc, u ? l : c);
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
function _c(e, t, n) {
	let r = uc(n), i = fc(t, n), a = Math.max(ec, t?.offsetWidth ?? Qs) * i, o = Math.max(96, t?.offsetHeight ?? $s) * i, s = Math.max(r.left, r.right - Math.min(a, r.width)), c = Math.max(r.top, r.bottom - Math.min(o, r.height));
	return {
		left: dc(e.left, r.left, s),
		top: dc(e.top, r.top, c)
	};
}
function vc(e) {
	let t = uc(e), n = $s * fc(null, e), r = e.getBoundingClientRect(), i = r.left, a = r.bottom + tc, o = r.top - n - tc;
	return _c({
		left: i,
		top: a + n > t.bottom && o >= t.top ? o : a
	}, null, e);
}
//#endregion
//#region src/plugins/MentionAdvancedPanel.tsx
var yc = 1600;
function bc(e, t) {
	return e.left === t.left && e.top === t.top;
}
function xc({ anchorElement: e, iconClassName: t, name: n, nameContent: r, panelKind: i, position: a, copyLabel: o, textStyle: s, title: c, zIndex: l, onBringToFront: u, onClose: d, onCopy: f, onPositionChange: p }) {
	let m = L(null), h = L(null), g = L(e), _ = L(p), v = L(null), [y, b] = R(!1), [x, S] = R(!1);
	g.current = e, _.current = p, I(() => () => {
		v.current !== null && clearTimeout(v.current);
	}, []);
	let C = F(() => {
		f !== void 0 && Promise.resolve(f()).then(() => {
			S(!0), v.current !== null && clearTimeout(v.current), v.current = setTimeout(() => {
				S(!1), v.current = null;
			}, yc);
		});
	}, [f]), w = F((e) => {
		let t = h.current;
		t === null || t.pointerId !== e.pointerId || (_.current(_c({
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
			let t = _c(a, m.current, e);
			bc(t, a) || p(t);
		};
		return t(), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [
		e,
		p,
		a
	]);
	let ee = uc(e), te = fc(m.current, e), D = {
		left: a.left / te,
		maxHeight: Math.max(96, ee.bottom - a.top) / te,
		maxWidth: Math.max(220, ee.right - a.left) / te,
		position: "fixed",
		top: a.top / te,
		zIndex: l
	};
	return /* @__PURE__ */ B("div", {
		ref: m,
		"aria-label": `${n} advanced panel`,
		className: `mention-advanced-panel${y ? " dragging" : ""}`,
		role: "dialog",
		style: D,
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
function Sc({ buttonClassName: e, enabled: t = !0, listClassName: n, values: r }) {
	let { shortToVerseData: i } = oa(), [a, o] = R({});
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
					e.preventDefault(), e.stopPropagation(), Gs({
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
var Cc = {
	NAME: "\\b[A-Z][^\\s\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;]",
	PUNCTUATION: "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;"
}.PUNCTUATION, wc = ["#"].join(""), Tc = "[^" + wc + Cc + "\\s]", Ec = "(?:\\.[ |$]| |[" + Cc + "]|)", Dc = RegExp("(^|\\s|\\()([" + wc + "]((?:" + Tc + Ec + "){0,75}))$"), Oc = RegExp("(^|\\s|\\()([" + wc + "]((?:" + Tc + "){0,50}))$"), kc = 20, Ac = 2e3, jc = 150;
function Mc(e, t, n) {
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
		uncertainty: !1,
		matterRange: Infinity
	};
}
function Nc(e) {
	let t = Y(e);
	return t === "" ? "" : t.toLowerCase() === "unknown" ? "Unknown" : t;
}
function Pc(e) {
	let t = Y(e);
	return t !== "" && t.toLowerCase() !== "unknown";
}
function Fc(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ic(e) {
	let t = /* @__PURE__ */ new Map();
	return e.links.forEach((e) => {
		t.set(e.url, e);
	}), e.wikipedia !== null && !t.has(e.wikipedia) && t.set(e.wikipedia, {
		type: "wikipedia",
		url: e.wikipedia
	}), Array.from(t.values());
}
function Lc(e, t) {
	let n = e.getRecordById(t);
	if (n !== null) return n;
	let r = e.getRecordsByName(t);
	return r.length === 1 ? r[0] : null;
}
async function Rc(e) {
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
function zc(e, t) {
	return t.map((t) => Lc(e, t)?.name ?? t);
}
async function Bc(e, t, n) {
	let r = [t.name], i = [`<p><strong>${Q(t.name)}</strong></p>`], a = qs(t.title);
	a !== "" && (r.push(a), i.push(`<p><em>${Q(a)}</em></p>`));
	let o = qs(t.description);
	o !== "" && (r.push(o), i.push(`<p>${Q(o)}</p>`));
	let s = [t.type].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	if (s.length > 0) {
		let e = s.join(", ");
		r.push(e), i.push(`<p>${Q(e)}</p>`);
	}
	let c = [];
	Pc(t.oldName) && c.push(["Also called", Nc(t.oldName)]), Pc(t.modernIdentification) && c.push(["Modern identification", Nc(t.modernIdentification)]);
	let l = n === void 0 ? t.verses : await Promise.all(t.verses.map((e) => n(e))), u = [["Related locations", zc(e, t.relatedLocations)], ["Verses", l]];
	for (let [e, t] of u) t.length > 0 && c.push([e, t.join(", ")]);
	let d = Ic(t);
	return d.length > 0 && c.push(["Links", d.map((e) => `${Fc(e.type)}: ${e.url}`).join(", ")]), t.coordinates !== null && c.push(["Coordinates", `${t.coordinates.latitude}, ${t.coordinates.longitude}`]), c.length > 0 && (r.push(c.map(([e, t]) => `${e}: ${t}`).join("\n")), i.push("<p>" + c.map(([e, t]) => `<strong>${Q(e)}:</strong> ${Q(t)}`).join("<br />") + "</p>")), {
		plainText: r.join("\n\n"),
		html: i.join("")
	};
}
function Vc({ inline: e = !1, label: t, value: n }) {
	return /* @__PURE__ */ B("div", {
		className: `mention-location-details__row${e ? " mention-location-details__row--inline" : ""}`,
		children: [/* @__PURE__ */ z("dt", { children: e ? `${t}:` : t }), /* @__PURE__ */ z("dd", { children: n })]
	});
}
function Hc({ label: e, value: t }) {
	return Pc(t) ? /* @__PURE__ */ z(Vc, {
		inline: !0,
		label: e,
		value: Nc(t)
	}) : null;
}
function Uc({ children: e, count: t, defaultOpen: n, label: r, onOpen: i }) {
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
function Wc({ onOpenLocationReference: e, values: t }) {
	let n = Fa();
	return /* @__PURE__ */ z("ul", {
		className: "mention-location-details__list",
		children: t.map((t) => {
			let r = Lc(n, t), i = r?.name ?? t;
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
function Gc({ label: e, onOpenLocationReference: t, values: n }) {
	return n.length === 0 ? null : /* @__PURE__ */ z(Uc, {
		count: n.length,
		defaultOpen: !0,
		label: e,
		children: /* @__PURE__ */ z(Wc, {
			onOpenLocationReference: t,
			values: n
		})
	});
}
function Kc({ enabled: e, values: t }) {
	let [n, r] = R(!1);
	return t.length === 0 ? null : /* @__PURE__ */ z(Uc, {
		count: t.length,
		defaultOpen: !1,
		label: "Verses",
		onOpen: () => {
			r(!0);
		},
		children: /* @__PURE__ */ z(Sc, {
			buttonClassName: "mention-location-details__location-button",
			enabled: e && n,
			listClassName: "mention-location-details__list",
			values: t
		})
	});
}
function qc({ links: e }) {
	return /* @__PURE__ */ z("ul", {
		className: "mention-location-details__list",
		children: e.map((e) => /* @__PURE__ */ z("li", { children: /* @__PURE__ */ z("a", {
			href: e.url,
			rel: "noreferrer",
			target: "_blank",
			children: Fc(e.type)
		}) }, `${e.type}:${e.url}`))
	});
}
function Jc({ links: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Uc, {
		count: e.length,
		defaultOpen: !0,
		label: "Links",
		children: /* @__PURE__ */ z(qc, { links: e })
	});
}
function Yc({ coordinates: e, name: t }) {
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
function Xc({ includeTitle: e = !0, mentionLocation: t }) {
	let n = [t.type].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	return /* @__PURE__ */ B("div", {
		className: "mention-location-basic-info",
		children: [
			e && t.title ? /* @__PURE__ */ z("div", {
				className: "mention-location-basic-info__title",
				children: /* @__PURE__ */ z(Zs, { value: t.title })
			}) : null,
			t.description ? /* @__PURE__ */ z("p", {
				className: "mention-location-basic-info__description",
				children: /* @__PURE__ */ z(Zs, { value: t.description })
			}) : null,
			n.length > 0 ? /* @__PURE__ */ z("div", {
				className: "mention-location-basic-info__facts",
				children: n.map((e) => /* @__PURE__ */ z("span", { children: e }, e))
			}) : null
		]
	});
}
function Zc({ includeTitle: e = !0, mentionLocation: t, onOpenLocationReference: n }) {
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
					children: /* @__PURE__ */ z(Zs, { value: t.description })
				}) : null,
				/* @__PURE__ */ B("dl", {
					className: "mention-location-details__grid",
					children: [
						e && Pc(t.title) ? /* @__PURE__ */ z(Vc, {
							inline: !0,
							label: "Title",
							value: /* @__PURE__ */ z(Zs, { value: t.title })
						}) : null,
						/* @__PURE__ */ z(Hc, {
							label: "Also called",
							value: t.oldName
						}),
						/* @__PURE__ */ z(Hc, {
							label: "Type",
							value: t.type
						}),
						/* @__PURE__ */ z(Hc, {
							label: "Modern identification",
							value: t.modernIdentification
						}),
						/* @__PURE__ */ z(Gc, {
							label: "Related locations",
							onOpenLocationReference: n,
							values: t.relatedLocations
						}),
						/* @__PURE__ */ z(Kc, {
							enabled: r,
							values: t.verses
						}),
						/* @__PURE__ */ z(Jc, { links: Ic(t) })
					]
				}),
				t.coordinates === null ? null : /* @__PURE__ */ z(Yc, {
					coordinates: t.coordinates,
					name: t.name
				})
			]
		})]
	});
}
function Qc(e) {
	return e instanceof Element && e.closest("a, button, .mention-location-details") !== null;
}
function $c(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-lexical-mention]");
	return t instanceof HTMLElement ? t : null;
}
function el(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-mention-location-hover-card]");
	return t instanceof HTMLElement ? t : null;
}
function tl(e) {
	let t = e.getAttribute("data-lexical-mention-kind");
	return t === "mention" || t === "bible-verse" ? t : t === "location" || t === "hashtag" || (e.textContent?.trim() ?? "").startsWith("#") ? "location" : "mention";
}
function nl(e) {
	let t = tl(e);
	t !== "bible-verse" && e.setAttribute("data-lexical-mention-kind", t);
}
function rl(e) {
	e.querySelectorAll("[data-lexical-mention]").forEach(nl);
}
function il(e, t) {
	if (tl(t) !== "location") return null;
	let n = t.textContent?.trim() ?? "", r = t.getAttribute("data-lexical-mention-id");
	if (r !== null) {
		let t = e.getRecordById(r);
		if (t !== null) return t;
	}
	let i = t.getAttribute("data-lexical-mention-name")?.trim() ?? n ?? "", a = i.startsWith("#") ? i.slice(1) : i;
	if (a === "") return null;
	let o = e.getRecordsByName(a);
	return o.length === 1 ? o[0] : Mc(r, a, "");
}
function al(e, t) {
	let n = la(t.id), r = Y(t.name);
	if (n !== null) {
		let t = e.getRecordById(n);
		if (t !== null) return t;
	}
	if (r === "") return null;
	let i = e.getRecordsByName(r);
	return i.length === 1 ? i[0] : Mc(n, r, "");
}
function ol(e) {
	return gc(e, 112);
}
function sl(e) {
	return `location:${e.id ?? e.name}`;
}
var cl = 500;
function ll(e) {
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
				let i = r.searchLocations(e);
				t.set(e, i), n(i);
			}, cl);
		}
	}, [e, r]), I(() => {
		i.current = /* @__PURE__ */ new Map();
	}, [r]), t;
}
function ul(e, t) {
	let n = Dc.exec(e);
	if (n === null && (n = Oc.exec(e)), n !== null) {
		let e = n[1], r = n[3];
		if (r.length >= t) return {
			leadOffset: n.index + e.length,
			matchingString: r,
			replaceableString: n[2]
		};
	}
	return null;
}
function dl(e) {
	return ul(e, 1);
}
var fl = class extends ns {
	id;
	name;
	picture;
	constructor(e, t) {
		super(e.id), this.id = e.id, this.name = e.name, this.title = qs(e.title), this.picture = t;
	}
};
function pl({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
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
			children: [/* @__PURE__ */ z("span", { children: i.name }), i.title ? /* @__PURE__ */ B("span", {
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
function ml() {
	let [e] = _t(), t = Fa(), n = L(null), r = L(null), [i, a] = R(null), [o, s] = R(null), [c, l] = R(null), [u, d] = R(null), [f, p] = R([]), { shortToVerseData: m } = oa(), h = F(async (e) => {
		if (m === void 0) return e;
		try {
			return (await m(e))?.title ?? e;
		} catch {
			return e;
		}
	}, [m]), g = ll(i), _ = fs("/", { minLength: 0 }), v = Rn(() => g.map((e) => new fl(e, /* @__PURE__ */ z("i", {
		className: "bi bi-pin icon",
		"aria-hidden": "true"
	}))).slice(0, kc), [g]), y = F((t, n, r) => {
		e.update(() => {
			let e = Mo(t.name, t.name, t.id, "location");
			n && n.replace(e), e.select(), r();
		});
	}, [e]), b = F((t) => _(t, e) === null ? dl(t) : null, [_, e]), x = F(() => {
		n.current !== null && (window.clearTimeout(n.current), n.current = null);
	}, []), S = F(() => {
		r.current !== null && (window.clearTimeout(r.current), r.current = null);
	}, []), C = F(() => {
		x(), S(), l(null), s(null);
	}, [S, x]), w = F(() => {
		x(), S(), r.current = window.setTimeout(() => {
			l(null), s(null), r.current = null;
		}, jc);
	}, [S, x]), T = F((e, t) => {
		let n = sl(e), r = ac(), i = vc(t);
		p((a) => {
			let o = a.find((e) => e.panelKey === n), s = {
				...e,
				anchorElement: t,
				panelKey: n,
				position: o?.position ?? i,
				zIndex: r
			};
			return o === void 0 ? [...a, s] : a.map((e) => e.panelKey === n ? s : e);
		}), C();
	}, [C]), E = F((e) => {
		p((t) => t.filter((t) => t.panelKey !== e));
	}, []), ee = F((e) => {
		let t = ac();
		p((n) => n.map((n) => n.panelKey === e ? {
			...n,
			zIndex: t
		} : n));
	}, []), te = F((e, t) => {
		p((n) => {
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
			let r = al(t, n);
			r !== null && T(r, n.anchorElement);
		};
		return window.addEventListener(Rs, e), () => {
			window.removeEventListener(Rs, e);
		};
	}, [t, T]), I(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let n = $c(e.target);
			if (n === null || !cc(e, n)) return;
			nl(n);
			let r = il(t, n);
			r !== null && (T(r, n), e.preventDefault(), e.stopPropagation());
		};
		return document.addEventListener("pointerdown", e, !0), () => {
			document.removeEventListener("pointerdown", e, !0);
		};
	}, [t, T]), I(() => e.registerNodeTransform(jo, (e) => {
		e.getTextContent().startsWith("#") && (e.setMentionKind("location"), e.setTextContent(e.getTextContent().slice(1)));
	}), [e]), I(() => {
		let t = null, n = e.registerRootListener((e) => {
			t?.disconnect(), t = null, e !== null && (rl(e), t = new MutationObserver(() => {
				rl(e);
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
			if (el(e.target) !== null) {
				S();
				return;
			}
			let r = $c(e.target), i = $c(e.relatedTarget);
			if (r === null) return;
			if (r === c) {
				S();
				return;
			}
			if (r === i) return;
			nl(r);
			let a = il(t, r);
			a !== null && (C(), n.current = window.setTimeout(() => {
				l(r), s(a), n.current = null;
			}, Ac));
		}, r = (e) => {
			let t = $c(e.target), n = el(e.target), r = $c(e.relatedTarget), i = el(e.relatedTarget);
			if (!(t === null && n === null)) {
				if (r !== null || i !== null) {
					S();
					return;
				}
				w();
			}
		};
		return document.addEventListener("mouseover", e), document.addEventListener("mouseout", r), () => {
			x(), S(), document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", r);
		};
	}, [
		S,
		x,
		C,
		c,
		t,
		w
	]), I(() => {
		if (c === null) {
			d(null);
			return;
		}
		let e = () => {
			if (!c.isConnected) {
				C(), d(null);
				return;
			}
			d(ol(c));
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [C, c]), /* @__PURE__ */ B(zn, { children: [
		/* @__PURE__ */ z(ps, {
			onQueryChange: a,
			onSelectOption: y,
			triggerFn: b,
			options: v,
			menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: n, setHighlightedIndex: r }) => e.current && g.length ? Bn.createPortal(/* @__PURE__ */ z("div", {
				className: "typeahead-popover mention-locations-menu",
				children: /* @__PURE__ */ z("ul", {
					className: "list-unstyled m-0 p-0",
					children: v.map((e, i) => /* @__PURE__ */ z(pl, {
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
		o !== null && u !== null ? Bn.createPortal(/* @__PURE__ */ B("div", {
			className: "mention-hover-card",
			"data-mention-location-hover-card": "true",
			role: "tooltip",
			style: u,
			tabIndex: 0,
			onClick: (e) => {
				Qc(e.target) || c !== null && T(o, c);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && c !== null && !Qc(e.target) && (T(o, c), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ B("div", {
					className: "mention-hover-card__name d-inline-flex align-items-center gap-2",
					children: [
						/* @__PURE__ */ z("i", {
							className: "bi bi-pin icon",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ z("span", {
							className: "mention-hover-card__name-text",
							children: o.name
						}),
						/* @__PURE__ */ z("button", {
							"aria-label": "Copy mentioned location name",
							className: "mention-hover-card__copy",
							title: "Copy name",
							type: "button",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), Rc(o.name);
							},
							children: /* @__PURE__ */ z("i", {
								className: "bi bi-copy",
								"aria-hidden": "true"
							})
						})
					]
				}),
				o.title ? /* @__PURE__ */ z("div", {
					className: "mention-hover-card__title",
					children: /* @__PURE__ */ z(Zs, { value: o.title })
				}) : null,
				/* @__PURE__ */ z(Xc, {
					includeTitle: !1,
					mentionLocation: o
				}),
				/* @__PURE__ */ z(Zc, {
					includeTitle: !1,
					mentionLocation: o,
					onOpenLocationReference: T
				})
			]
		}), document.body) : null,
		f.map((e) => /* @__PURE__ */ z(xc, {
			anchorElement: e.anchorElement,
			copyLabel: "Copy mentioned location details",
			iconClassName: "bi bi-pin icon",
			name: e.name,
			panelKind: "location",
			position: e.position,
			title: /* @__PURE__ */ B(zn, { children: [/* @__PURE__ */ z(Xc, { mentionLocation: e }), /* @__PURE__ */ z(Zc, {
				mentionLocation: e,
				onOpenLocationReference: T
			})] }),
			zIndex: e.zIndex,
			onCopy: async () => {
				let { plainText: n, html: r } = await Bc(t, e, h);
				return sc(n, r);
			},
			onBringToFront: () => {
				ee(e.panelKey);
			},
			onClose: () => {
				E(e.panelKey);
			},
			onPositionChange: (t) => {
				te(e.panelKey, t);
			}
		}, e.panelKey))
	] });
}
//#endregion
//#region src/plugins/MentionNamePlugin/index.tsx
var hl = {
	NAME: "\\b[A-Z][^\\s\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;]",
	PUNCTUATION: "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;"
}.PUNCTUATION, gl = ["@"].join(""), _l = "[^" + gl + hl + "\\s]", vl = "(?:\\.[ |$]| |[" + hl + "]|)", yl = RegExp("(^|\\s|\\()([" + gl + "]((?:" + _l + vl + "){0,75}))$"), bl = RegExp("(^|\\s|\\()([" + gl + "]((?:" + _l + "){0,50}))$"), xl = 20, Sl = 2e3, Cl = 150;
function wl(e, t, n) {
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
		wikipedia: null,
		matterRange: Infinity
	};
}
function Tl(e) {
	let t = Y(e);
	return t === "" ? "" : t.toLowerCase() === "unknown" ? "Unknown" : t;
}
function El(e, t) {
	let n = e.getRecordById(t);
	if (n !== null) return n;
	let r = e.getRecordsByName(t);
	return r.length === 1 ? r[0] : null;
}
function Dl(e) {
	return `${e.type}: ${e.start} to ${e.end}`;
}
function Ol(e) {
	let t = /* @__PURE__ */ new Map();
	return e.links.forEach((e) => {
		t.set(e.url, e);
	}), e.wikipedia !== null && !t.has(e.wikipedia) && t.set(e.wikipedia, {
		type: "wikipedia",
		url: e.wikipedia
	}), Array.from(t.values());
}
function kl(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
async function Al(e) {
	if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText == "function") {
		await navigator.clipboard.writeText(e);
		return;
	}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove();
}
function jl(e, t) {
	return t.map((t) => e.getRecordById(t)?.name ?? t);
}
function Ml(e, t) {
	return t.map((t) => El(e, t)?.name ?? t);
}
async function Nl({ locationsLookupManager: e, namesLookupManager: t }, n, r) {
	let i = [n.name], a = [`<p><strong>${Q(n.name)}</strong></p>`], o = qs(n.title);
	o !== "" && (i.push(o), a.push(`<p><em>${Q(o)}</em></p>`));
	let s = qs(n.description);
	s !== "" && (i.push(s), a.push(`<p>${Q(s)}</p>`));
	let c = [
		n.type,
		n.gender,
		n.age
	].filter((e) => e !== "" && e.toLowerCase() !== "unknown");
	if (c.length > 0) {
		let e = c.join(", ");
		i.push(e), a.push(`<p>${Q(e)}</p>`);
	}
	let l = [];
	Fl(n.oldName) && l.push(["Also called", Tl(n.oldName)]), n.years.length > 0 && l.push(["Years", n.years.map(Dl).join(", ")]);
	let u = r === void 0 ? n.verses : await Promise.all(n.verses.map((e) => r(e))), d = [
		["Locations", Ml(e, n.locations)],
		["Parents", jl(t, n.parents)],
		["Spouses", jl(t, n.spouses)],
		["Children", jl(t, n.children)],
		["Siblings", jl(t, n.siblings)],
		["Cousins", jl(t, n.cousin)],
		["Verses", u]
	];
	for (let [e, t] of d) t.length > 0 && l.push([e, t.join(", ")]);
	return n.links.length > 0 && l.push(["Links", n.links.map((e) => `${kl(e.type)}: ${e.url}`).join(", ")]), l.length > 0 && (i.push(l.map(([e, t]) => `${e}: ${t}`).join("\n")), a.push("<p>" + l.map(([e, t]) => `<strong>${Q(e)}:</strong> ${Q(t)}`).join("<br />") + "</p>")), {
		plainText: i.join("\n\n"),
		html: a.join("")
	};
}
function Pl({ inline: e = !1, label: t, value: n }) {
	return /* @__PURE__ */ B("div", {
		className: `mention-person-details__row${e ? " mention-person-details__row--inline" : ""}`,
		children: [/* @__PURE__ */ z("dt", { children: e ? `${t}:` : t }), /* @__PURE__ */ z("dd", { children: n })]
	});
}
function Fl(e) {
	let t = Y(e);
	return t !== "" && t.toLowerCase() !== "unknown";
}
function Il({ label: e, value: t }) {
	return Fl(t) ? /* @__PURE__ */ z(Pl, {
		inline: !0,
		label: e,
		value: Tl(t)
	}) : null;
}
function Ll({ values: e }) {
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => /* @__PURE__ */ z("li", { children: e }, e))
	});
}
function Rl({ label: e, values: t }) {
	return t.length === 0 ? null : /* @__PURE__ */ z(Pl, {
		label: e,
		value: /* @__PURE__ */ z(Ll, { values: t })
	});
}
function zl({ locations: e }) {
	let t = Fa();
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => {
			let n = El(t, e), r = n?.name ?? e;
			return /* @__PURE__ */ z("li", { children: n === null ? r : /* @__PURE__ */ z("button", {
				className: "mention-person-details__location-button",
				title: qs(n.title) || void 0,
				type: "button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), zs({
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
function Bl({ locations: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Pl, {
		label: "Locations",
		value: /* @__PURE__ */ z(zl, { locations: e })
	});
}
function Vl({ ids: e, onOpenPersonReference: t }) {
	let n = Pa();
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
function Hl({ ids: e, label: t, onOpenPersonReference: n }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Pl, {
		label: t,
		value: /* @__PURE__ */ z(Vl, {
			ids: e,
			onOpenPersonReference: n
		})
	});
}
function Ul({ links: e }) {
	return /* @__PURE__ */ z("ul", {
		className: "mention-person-details__list",
		children: e.map((e) => /* @__PURE__ */ z("li", { children: /* @__PURE__ */ z("a", {
			href: e.url,
			rel: "noreferrer",
			target: "_blank",
			children: kl(e.type)
		}) }, `${e.type}:${e.url}`))
	});
}
function Wl({ enabled: e, values: t }) {
	return t.length === 0 ? null : /* @__PURE__ */ z(Pl, {
		label: "Verses",
		value: /* @__PURE__ */ z(Sc, {
			buttonClassName: "mention-person-details__location-button",
			enabled: e,
			listClassName: "mention-person-details__list",
			values: t
		})
	});
}
function Gl({ links: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ z(Pl, {
		label: "Links",
		value: /* @__PURE__ */ z(Ul, { links: e })
	});
}
function Kl({ includeTitle: e = !0, mentionPerson: t }) {
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
				children: /* @__PURE__ */ z(Zs, { value: t.title })
			}) : null,
			t.description ? /* @__PURE__ */ z("p", {
				className: "mention-person-basic-info__description",
				children: /* @__PURE__ */ z(Zs, { value: t.description })
			}) : null,
			n.length > 0 ? /* @__PURE__ */ z("div", {
				className: "mention-person-basic-info__facts",
				children: n.map((e) => /* @__PURE__ */ z("span", { children: e }, e))
			}) : null
		]
	});
}
function ql({ includeTitle: e = !0, mentionPerson: t, onOpenPersonReference: n }) {
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
				children: /* @__PURE__ */ z(Zs, { value: t.description })
			}) : null, /* @__PURE__ */ B("dl", {
				className: "mention-person-details__grid",
				children: [
					e && Fl(t.title) ? /* @__PURE__ */ z(Pl, {
						inline: !0,
						label: "Title",
						value: /* @__PURE__ */ z(Zs, { value: t.title })
					}) : null,
					/* @__PURE__ */ z(Il, {
						label: "Also called",
						value: t.oldName
					}),
					/* @__PURE__ */ z(Il, {
						label: "Type",
						value: t.type
					}),
					/* @__PURE__ */ z(Il, {
						label: "Gender",
						value: t.gender
					}),
					/* @__PURE__ */ z(Il, {
						label: "Age",
						value: t.age
					}),
					/* @__PURE__ */ z(Rl, {
						label: "Years",
						values: t.years.map(Dl)
					}),
					/* @__PURE__ */ z(Bl, { locations: t.locations }),
					/* @__PURE__ */ z(Hl, {
						label: "Parents",
						ids: t.parents,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Hl, {
						label: "Spouses",
						ids: t.spouses,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Hl, {
						label: "Children",
						ids: t.children,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Hl, {
						label: "Siblings",
						ids: t.siblings,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Hl, {
						label: "Cousins",
						ids: t.cousin,
						onOpenPersonReference: n
					}),
					/* @__PURE__ */ z(Wl, {
						enabled: r,
						values: t.verses
					}),
					/* @__PURE__ */ z(Gl, { links: Ol(t) })
				]
			})]
		})]
	});
}
function Jl(e) {
	return e instanceof Element && e.closest("a, button, .mention-person-details") !== null;
}
function Yl(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-lexical-mention]");
	return t instanceof HTMLElement ? t : null;
}
function Xl(e) {
	if (!(e instanceof Element)) return null;
	let t = e.closest("[data-mention-name-hover-card]");
	return t instanceof HTMLElement ? t : null;
}
function Zl(e, t) {
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
	return wl(i, a, o.length === 1 ? o[0].title : "");
}
function Ql(e) {
	return gc(e, 360);
}
function $l(e) {
	return `person:${e.id ?? e.name}`;
}
function eu(e, t) {
	let n = la(t.id), r = Y(t.name);
	if (n !== null) {
		let t = e.getRecordById(n);
		if (t !== null) return t;
	}
	if (r === "") return null;
	let i = e.getRecordsByName(r);
	return i.length >= 1 ? i[0] : null;
}
var tu = 500;
function nu(e) {
	let [t, n] = R([]), r = Pa(), i = L(/* @__PURE__ */ new Map());
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
			}, tu);
		}
	}, [e, r]), I(() => {
		i.current = /* @__PURE__ */ new Map();
	}, [r]), t;
}
function ru(e, t) {
	let n = yl.exec(e);
	if (n === null && (n = bl.exec(e)), n !== null) {
		let e = n[1], r = n[3];
		if (r.length >= t) return {
			leadOffset: n.index + e.length,
			matchingString: r,
			replaceableString: n[2]
		};
	}
	return null;
}
function iu(e) {
	return ru(e, 1);
}
var au = class extends ns {
	id;
	name;
	picture;
	constructor(e, t) {
		super(e.id), this.id = e.id, this.name = e.name, this.title = qs(e.title), this.picture = t;
	}
};
function ou({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
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
			children: [/* @__PURE__ */ z("span", { children: i.name }), i.title ? /* @__PURE__ */ B("span", {
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
function su() {
	let [e] = _t(), t = Na(), { namesLookupManager: n } = t, r = L(null), i = L(null), [a, o] = R(null), [s, c] = R(null), [l, u] = R(null), [d, f] = R(null), [p, m] = R([]), { shortToVerseData: h } = oa(), g = F(async (e) => {
		if (h === void 0) return e;
		try {
			return (await h(e))?.title ?? e;
		} catch {
			return e;
		}
	}, [h]), _ = nu(a), v = fs("/", { minLength: 0 }), y = Rn(() => _.map((e) => new au(e, /* @__PURE__ */ z("i", { className: Vs(e.type) }))).slice(0, xl), [_]), b = F((t, n, r) => {
		e.update(() => {
			let e = Mo(t.name, t.name, t.id);
			n && n.replace(e), e.select(), r();
		});
	}, [e]), x = F((t) => v(t, e) === null ? iu(t) : null, [v, e]), S = F(() => {
		r.current !== null && (window.clearTimeout(r.current), r.current = null);
	}, []), C = F(() => {
		i.current !== null && (window.clearTimeout(i.current), i.current = null);
	}, []), w = F(() => {
		S(), C(), u(null), c(null);
	}, [C, S]), T = F(() => {
		S(), C(), i.current = window.setTimeout(() => {
			u(null), c(null), i.current = null;
		}, Cl);
	}, [C, S]), E = F((e, t) => {
		let n = $l(e), r = ac(), i = vc(t);
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
	}, [w]), ee = F((e) => {
		m((t) => t.filter((t) => t.panelKey !== e));
	}, []), te = F((e) => {
		let t = ac();
		m((n) => n.map((n) => n.panelKey === e ? {
			...n,
			zIndex: t
		} : n));
	}, []), D = F((e, t) => {
		m((n) => {
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
			e.setAttribute("data-lexical-mention-name-type", ca(r.type));
		};
		return e.registerMutationListener(jo, (n) => {
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
			let t = Yl(e.target);
			if (t === null || !cc(e, t)) return;
			let r = Zl(n, t);
			r !== null && (E(r, t), e.preventDefault(), e.stopPropagation());
		};
		return document.addEventListener("pointerdown", e, !0), () => {
			document.removeEventListener("pointerdown", e, !0);
		};
	}, [n, E]), I(() => {
		let e = (e) => {
			let t = e.detail;
			if (typeof t != "object" || !t || !(t.anchorElement instanceof HTMLElement)) return;
			let r = eu(n, t);
			r !== null && E(r, t.anchorElement);
		};
		return window.addEventListener(Hs, e), () => {
			window.removeEventListener(Hs, e);
		};
	}, [n, E]), I(() => {
		let e = (e) => {
			if (Xl(e.target) !== null) {
				C();
				return;
			}
			let t = Yl(e.target), i = Yl(e.relatedTarget);
			if (t === null) return;
			if (t === l) {
				C();
				return;
			}
			if (t === i) return;
			let a = Zl(n, t);
			a !== null && (w(), r.current = window.setTimeout(() => {
				u(t), c(a), r.current = null;
			}, Sl));
		}, t = (e) => {
			let t = Yl(e.target), n = Xl(e.target), r = Yl(e.relatedTarget), i = Xl(e.relatedTarget);
			if (!(t === null && n === null)) {
				if (r !== null || i !== null) {
					C();
					return;
				}
				T();
			}
		};
		return document.addEventListener("mouseover", e), document.addEventListener("mouseout", t), () => {
			S(), C(), document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", t);
		};
	}, [
		C,
		S,
		w,
		l,
		n,
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
			f(Ql(l));
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [w, l]), /* @__PURE__ */ B(zn, { children: [
		/* @__PURE__ */ z(ps, {
			onQueryChange: o,
			onSelectOption: b,
			triggerFn: x,
			options: y,
			menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: n, setHighlightedIndex: r }) => e.current && _.length ? Bn.createPortal(/* @__PURE__ */ z("div", {
				className: "typeahead-popover mention-name-menu",
				children: /* @__PURE__ */ z("ul", {
					className: "list-unstyled m-0 p-0",
					children: y.map((e, i) => /* @__PURE__ */ z(ou, {
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
		s !== null && d !== null ? Bn.createPortal(/* @__PURE__ */ B("div", {
			className: "mention-hover-card",
			"data-mention-name-hover-card": "true",
			role: "tooltip",
			style: d,
			tabIndex: 0,
			onClick: (e) => {
				Jl(e.target) || l !== null && E(s, l);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && l !== null && !Jl(e.target) && (E(s, l), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ B("div", {
					className: "mention-hover-card__name d-inline-flex align-items-center gap-2",
					children: [
						/* @__PURE__ */ z("i", {
							className: Vs(s.type),
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ z("span", {
							className: "mention-hover-card__name-text",
							children: s.name
						}),
						/* @__PURE__ */ z("button", {
							"aria-label": "Copy mentioned person name",
							className: "mention-hover-card__copy",
							title: "Copy name",
							type: "button",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), Al(s.name);
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
					children: /* @__PURE__ */ z(Zs, { value: s.title })
				}) : null,
				/* @__PURE__ */ z(Kl, {
					includeTitle: !1,
					mentionPerson: s
				}),
				/* @__PURE__ */ z(ql, {
					includeTitle: !1,
					mentionPerson: s,
					onOpenPersonReference: E
				})
			]
		}), document.body) : null,
		p.map((e) => /* @__PURE__ */ z(xc, {
			anchorElement: e.anchorElement,
			copyLabel: "Copy mentioned person details",
			iconClassName: Vs(e.type),
			name: e.name,
			panelKind: "mentioned person",
			position: e.position,
			title: /* @__PURE__ */ B(zn, { children: [/* @__PURE__ */ z(Kl, { mentionPerson: e }), /* @__PURE__ */ z(ql, {
				mentionPerson: e,
				onOpenPersonReference: E
			})] }),
			zIndex: e.zIndex,
			onCopy: async () => {
				let { plainText: n, html: r } = await Nl(t, e, g);
				return sc(n, r);
			},
			onBringToFront: () => {
				te(e.panelKey);
			},
			onClose: () => {
				ee(e.panelKey);
			},
			onPositionChange: (t) => {
				D(e.panelKey, t);
			}
		}, e.panelKey))
	] });
}
//#endregion
//#region node_modules/@lexical/devtools-core/dist/LexicalDevtoolsCore.prod.mjs
var cu = Object.freeze({
	"	": "\\t",
	"\n": "\\n"
}), lu = new RegExp(Object.keys(cu).join("|"), "g"), $ = Object.freeze({
	ancestorHasNextSibling: "|",
	ancestorIsLastChild: " ",
	hasNextSibling: "├",
	isLastChild: "└",
	selectedChar: "^",
	selectedLine: ">"
}), uu = [
	(e) => e.hasFormat("bold") && "Bold",
	(e) => e.hasFormat("code") && "Code",
	(e) => e.hasFormat("italic") && "Italic",
	(e) => e.hasFormat("strikethrough") && "Strikethrough",
	(e) => e.hasFormat("subscript") && "Subscript",
	(e) => e.hasFormat("superscript") && "Superscript",
	(e) => e.hasFormat("underline") && "Underline",
	(e) => e.hasFormat("highlight") && "Highlight"
], du = [
	(e) => e.hasTextFormat("bold") && "Bold",
	(e) => e.hasTextFormat("code") && "Code",
	(e) => e.hasTextFormat("italic") && "Italic",
	(e) => e.hasTextFormat("strikethrough") && "Strikethrough",
	(e) => e.hasTextFormat("subscript") && "Subscript",
	(e) => e.hasTextFormat("superscript") && "Superscript",
	(e) => e.hasTextFormat("underline") && "Underline",
	(e) => e.hasTextFormat("highlight") && "Highlight"
], fu = [(e) => e.isDirectionless() && "Directionless", (e) => e.isUnmergeable() && "Unmergeable"], pu = [(e) => e.isToken() && "Token", (e) => e.isSegmented() && "Segmented"];
function mu(t, n, r, i, a = !1) {
	let o = t.getEditorState(), s = t._config, c = t._compositionKey, l = t._editable;
	if (r) {
		let e = "";
		return o.read(() => {
			e = function(e) {
				let t = document.createElement("div");
				return t.innerHTML = e.trim(), wu(t, 0).innerHTML;
			}(On(t));
		}, { editor: t }), e;
	}
	let u = " root\n", f = o.read(() => {
		let t = N();
		return hu(d(), (n, r, o) => {
			let s = `(${n.getKey()})`, c = n.getType() || "", l = n.isSelected(), d = o === void 0 ? "" : `[slot: ${o}] `, f = function(t, n) {
				return n === void 0 ? "" : P(t) && t.isShadowRoot() ? " [shadow-root]" : e(t) && !t.isInline() ? " [atomic decorator]" : "";
			}(n, o);
			u += `${l ? $.selectedLine : " "} ${r.join(" ")} ${s} ${d}${c}${f} ${function(e, t, n = !1) {
				let r = t ? t(e, n) : void 0;
				if (r !== void 0 && r.length > 0) return r;
				if (D(e)) {
					let t = e.getTextContent(), r = t.length === 0 ? "(empty)" : `"${gu(t, n)}"`, i = function(e) {
						return [
							yu(e),
							_u(e),
							vu(e),
							Cu(e)
						].filter(Boolean).join(", ");
					}(e);
					return [r, i.length === 0 ? null : `{ ${i} }`].filter(Boolean).join(" ").trim();
				}
				if (X(e)) {
					let t = e.getURL(), r = t.length === 0 ? "(empty)" : `"${gu(t, n)}"`, i = function(e) {
						return [
							bu(e),
							xu(e),
							Su(e),
							Cu(e)
						].filter(Boolean).join(", ");
					}(e);
					return [r, i.length === 0 ? null : `{ ${i} }`].filter(Boolean).join(" ").trim();
				}
				if (Zo(e)) return `ids: [ ${e.getIDs().join(", ")} ]`;
				if (ot(e)) {
					let t = function(e) {
						let t = du.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
						return t !== "" && (t = "format: " + t), t;
					}(e), n = t === "" ? "" : `{ ${t} }`;
					return n += e.__style ? `(${e.__style})` : "", n;
				}
				return "";
			}(n, i, a)}\n`, u += function({ indent: e, isSelected: t, node: n, nodeKeyDisplay: r, selection: i, typeDisplay: a }) {
				if (!D(n) || !j(i) || !t || P(n)) return "";
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
					let l = (a.slice(0, s).match(lu) || []).length, u = (a.slice(s, c).match(lu) || []).length;
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
			let t = "", n = yu(e), r = function(e) {
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
		}(t) : q(t) ? function(e) {
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
function hu(t, n, r = []) {
	let i = [];
	for (let e of yt(t)) {
		let n = ut(t, e);
		n !== null && i.push([e, n]);
	}
	let a = P(t) ? t.getChildren() : [], o = i.length + a.length, s = 0;
	for (let [t, a] of i) {
		let i = s === o - 1;
		n(a, r.concat(i ? $.isLastChild : $.hasNextSibling), t), (P(a) || e(a)) && hu(a, n, r.concat(i ? $.ancestorIsLastChild : $.ancestorHasNextSibling)), s++;
	}
	for (let t of a) {
		let i = s === o - 1;
		n(t, r.concat(i ? $.isLastChild : $.hasNextSibling)), (P(t) || e(t)) && hu(t, n, r.concat(i ? $.ancestorIsLastChild : $.ancestorHasNextSibling)), s++;
	}
}
function gu(e, t = !1) {
	let n = Object.entries(cu).reduce((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n)), e);
	return t ? n.replace(/[^\s]/g, "*") : n;
}
function _u(e) {
	let t = fu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "detail: " + t), t;
}
function vu(e) {
	let t = pu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "mode: " + t), t;
}
function yu(e) {
	let t = uu.map((t) => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
	return t !== "" && (t = "format: " + t), t;
}
function bu(e) {
	let t = e.getTarget();
	return t != null && (t = "target: " + t), t;
}
function xu(e) {
	let t = e.getRel();
	return t != null && (t = "rel: " + t), t;
}
function Su(e) {
	let t = e.getTitle();
	return t != null && (t = "title: " + t), t;
}
function Cu(e) {
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
function wu(e, t) {
	let n = Array(1 + t++).join("  "), r = Array(t - 1).join("  "), i;
	for (let a = 0; a < e.children.length; a++) i = document.createTextNode("\n" + n), e.insertBefore(i, e.children[a]), wu(e.children[a], t), e.lastElementChild === e.children[a] && (i = document.createTextNode("\n" + r), e.appendChild(i));
	return e;
}
var Tu = /*#__PURE__*/ Pn(function({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: r, viewClassName: i, timeTravelPanelClassName: a, editorState: o, setEditorState: s, setEditorReadOnly: c, generateContent: l, commandsLog: u = [] }, d) {
	let [f, p] = R([]), [m, h] = R(""), [g, _] = R(!1), [v, y] = R(!1), b = L(0), x = L(null), [S, C] = R(!1), [w, T] = R(!1), [E, ee] = R(!1), te = L(null), D = L([]), ne = L(0), re = F((e) => {
		let t = ++ne.current;
		l(e).then((e) => {
			t === ne.current && h(e);
		}).catch((e) => {
			t === ne.current && h(`Error rendering tree: ${e.message}\n\nStack:\n${e.stack}`);
		});
	}, [l]);
	I(() => {
		if (!(!E && o._nodeMap.size > 1e3 && (T(!0), !E)) && (te.current !== o || D.current !== u)) {
			let e = te.current !== o;
			te.current = o, D.current = u, re(v), !g && e && p((e) => [...e, [Date.now(), o]]);
		}
	}, [
		o,
		re,
		v,
		E,
		g,
		u
	]);
	let O = f.length;
	return I(() => {
		if (S) {
			let e, t = () => {
				let n = b.current;
				if (n === O - 1) return void C(!1);
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
		O,
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
						ee(!0);
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
				onClick: () => (re(!v), void y(!v)),
				className: e,
				type: "button",
				children: v ? "Tree" : "Export DOM"
			}),
			!g && (E || !w) && O > 2 && /*#__PURE__*/ z("button", {
				onClick: () => {
					c(!0), b.current = O - 1, _(!0);
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
							b.current === O - 1 && (b.current = 1), C(!S);
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
						max: O - 1
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
function Eu(e, t) {
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
function Du(e) {
	let [t, n] = R([]);
	return I(() => Eu(e, n), [e]), t;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalTreeView.prod.mjs
function Ou({ treeTypeButtonClassName: e, timeTravelButtonClassName: t, timeTravelPanelSliderClassName: n, timeTravelPanelButtonClassName: r, timeTravelPanelClassName: i, viewClassName: a, editor: o, customPrintNode: s }) {
	let c = /*#__PURE__*/ jn.createRef(), [l, u] = R(o.getEditorState()), d = Du(o);
	return I(() => je(o.registerUpdateListener(({ editorState: e }) => {
		u(e);
	}), o.registerEditableListener(() => {
		u(o.getEditorState());
	})), [o]), I(() => {
		let e = c.current;
		if (e !== null) return e.__lexicalEditor = o, () => {
			e.__lexicalEditor = null;
		};
	}, [o, c]), z(Tu, {
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
			return mu(o, d, e, s);
		},
		ref: c,
		commandsLog: d
	});
}
//#endregion
//#region src/plugins/TreeViewPlugin/index.tsx
function ku() {
	let [e] = _t();
	return /* @__PURE__ */ z(Ou, {
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
export { Ma as $, Wn as $t, $o as A, W as At, jo as B, _r as Bt, xs as C, Dr as Ct, fs as D, Qi as Dt, ns as E, Er as Et, Ho as F, Cr as Ft, Ha as G, mi as Gt, xo as H, $i as Ht, Bo as I, Ki as It, La as J, Kn as Jt, X as K, kr as Kt, Uo as L, V as Lt, Qo as M, ea as Mt, es as N, H as Nt, Zo as O, vr as Ot, Go as P, Nr as Pt, Ga as Q, $n as Qt, Vo as R, J as Rt, Es as S, Hi as St, ps as T, Ui as Tt, yo as U, yr as Ut, Co as V, q as Vt, po as W, hi as Wt, Z as X, Yn as Xt, Qa as Y, qn as Yt, Za as Z, Jn as Zt, Ls as _, jr as _t, _c as a, fa as at, Ts as b, Vr as bt, vc as c, ya as ct, cc as d, aa as dt, Fa as et, qs as f, oa as ft, zs as g, Pr as gt, Vs as h, Tr as ht, xc as i, Da as it, Xo as j, ii as jt, Yo as k, xr as kt, gc as l, ga as lt, Us as m, ra as mt, su as n, Pa as nt, sc as o, ca as ot, Ws as p, na as pt, Ua as q, er as qt, ml as r, Oa as rt, Q as s, _a as st, ku as t, Na as tt, ac as u, va as ut, Fs as v, Vi as vt, bs as w, K as wt, Ds as x, zr as xt, Ms as y, Lr as yt, Mo as z, mr as zt };
