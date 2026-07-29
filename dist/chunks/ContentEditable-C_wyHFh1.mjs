import { $ as e, $t as t, An as n, Ar as r, At as i, Bt as a, D as o, Dr as s, E as c, Er as l, Et as u, Fr as d, Gn as f, Gt as p, H as m, I as h, In as g, Ir as ee, J as te, Jr as ne, Jt as _, Kn as re, Lt as ie, M as v, Nn as y, O as ae, Pn as oe, Q as se, R as ce, Rn as le, Rr as ue, Sn as b, Sr as de, Tr as fe, Tt as pe, Un as me, Ur as x, Vr as he, Wt as ge, X as _e, Xr as ve, Yn as S, Yt as ye, Z as be, _r as xe, ar as Se, bn as C, ct as Ce, d as we, dt as Te, en as Ee, er as De, fr as Oe, g as ke, gt as Ae, h as je, hn as Me, hr as w, ht as Ne, in as Pe, j as Fe, k as Ie, kn as Le, kr as Re, kt as ze, lr as Be, mn as Ve, mr as He, nn as Ue, nr as We, nt as Ge, oi as Ke, on as qe, or as Je, pn as Ye, pr as Xe, q as Ze, qt as T, ri as Qe, rr as $e, s as E, st as D, t as et, tt as O, ut as tt, v as k, vr as nt, vt as A, x as rt, zn as it } from "./Lexical.prod-DYDuARMX.mjs";
import { D as at, d as ot, o as st, s as ct, t as lt } from "./LexicalUtils.prod-5zbJxaQa.mjs";
import { Component as ut, createContext as dt, forwardRef as ft, useCallback as pt, useContext as mt, useEffect as ht, useLayoutEffect as gt, useMemo as _t, useState as vt } from "react";
import { Fragment as yt, jsx as j, jsxs as bt } from "react/jsx-runtime";
//#region node_modules/@lexical/extension/dist/LexicalExtension.prod.mjs
var xt = Symbol.for("preact-signals");
function St() {
	if (F > 1) return void F--;
	let e, t = !1;
	for (function() {
		let e = P;
		for (P = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
	}(); N !== void 0;) {
		let n = N;
		for (N = void 0, I++; n !== void 0;) {
			let r = n.u;
			if (n.u = void 0, n.f &= -3, !(8 & n.f) && Dt(n)) try {
				n.c();
			} catch (n) {
				t ||= (e = n, !0);
			}
			n = r;
		}
	}
	if (I = 0, F--, t) throw e;
}
var M, N;
function Ct(e) {
	let t = M;
	M = void 0;
	try {
		return e();
	} finally {
		M = t;
	}
}
var P, F = 0, I = 0, wt = 0, L = 0;
function Tt(e) {
	if (M === void 0) return;
	let t = e.n;
	return t === void 0 || t.t !== M ? (t = {
		i: 0,
		S: e,
		p: M.s,
		n: void 0,
		t: M,
		e: void 0,
		x: void 0,
		r: t
	}, M.s !== void 0 && (M.s.n = t), M.s = t, e.n = t, 32 & M.f && e.S(t), t) : t.i === -1 ? (t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = M.s, t.n = void 0, M.s.n = t, M.s = t), t) : void 0;
}
function R(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function Et(e, t) {
	return new R(e, t);
}
function Dt(e) {
	for (let t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Ot(e) {
	for (let t = e.s; t !== void 0; t = t.n) {
		let n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function kt(e) {
	let t, n = e.s;
	for (; n !== void 0;) {
		let e = n.p;
		n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
	}
	e.s = t;
}
function z(e, t) {
	R.call(this, void 0), this.x = e, this.s = void 0, this.g = L - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function At(e) {
	let t = e.m;
	if (e.m = void 0, typeof t == "function") {
		F++;
		let n = M;
		M = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, jt(e), t;
		} finally {
			M = n, St();
		}
	}
}
function jt(e) {
	for (let t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, At(e);
}
function Mt(e) {
	if (M !== this) throw Error("Out-of-order effect");
	kt(this), M = e, this.f &= -2, 8 & this.f && jt(this), St();
}
function B(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name;
}
function Nt(e, t) {
	let n = new B(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	let r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
function Pt(e, t = {}) {
	let n = {};
	for (let r in e) {
		let i = t[r];
		n[r] = Et(i === void 0 ? e[r] : i);
	}
	return n;
}
R.prototype.brand = xt, R.prototype.h = function() {
	return !0;
}, R.prototype.S = function(e) {
	let t = this.t;
	t !== e && e.e === void 0 && (e.x = t, this.t = e, t === void 0 ? Ct(() => {
		var e;
		(e = this.W) == null || e.call(this);
	}) : t.e = e);
}, R.prototype.U = function(e) {
	if (this.t !== void 0) {
		let t = e.e, n = e.x;
		t !== void 0 && (t.x = n, e.e = void 0), n !== void 0 && (n.e = t, e.x = void 0), e === this.t && (this.t = n, n === void 0 && Ct(() => {
			var e;
			(e = this.Z) == null || e.call(this);
		}));
	}
}, R.prototype.subscribe = function(e) {
	return Nt(() => {
		let t = this.value, n = M;
		M = void 0;
		try {
			e(t);
		} finally {
			M = n;
		}
	}, { name: "sub" });
}, R.prototype.valueOf = function() {
	return this.value;
}, R.prototype.toString = function() {
	return this.value + "";
}, R.prototype.toJSON = function() {
	return this.value;
}, R.prototype.peek = function() {
	let e = M;
	M = void 0;
	try {
		return this.value;
	} finally {
		M = e;
	}
}, Object.defineProperty(R.prototype, "value", {
	get() {
		let e = Tt(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set(e) {
		if (e !== this.v) {
			if (I > 100) throw Error("Cycle detected");
			(function(e) {
				F !== 0 && I === 0 && e.l !== wt && (e.l = wt, P = {
					S: e,
					v: e.v,
					i: e.i,
					o: P
				});
			})(this), this.v = e, this.i++, L++, F++;
			try {
				for (let e = this.t; e !== void 0; e = e.x) e.t.N();
			} finally {
				St();
			}
		}
	}
}), z.prototype = new R(), z.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === L)) return !0;
	if (this.g = L, this.f |= 1, this.i > 0 && !Dt(this)) return this.f &= -2, !0;
	let e = M;
	try {
		Ot(this), M = this;
		let e = this.x();
		(16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return M = e, kt(this), this.f &= -2, !0;
}, z.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (let e = this.s; e !== void 0; e = e.n) e.S.S(e);
	}
	R.prototype.S.call(this, e);
}, z.prototype.U = function(e) {
	if (this.t !== void 0 && (R.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (let e = this.s; e !== void 0; e = e.n) e.S.U(e);
	}
}, z.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (let e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(z.prototype, "value", { get() {
	if (1 & this.f) throw Error("Cycle detected");
	let e = Tt(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} }), B.prototype.c = function() {
	let e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		let e = this.x();
		typeof e == "function" && (this.m = e);
	} finally {
		e();
	}
}, B.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, At(this), Ot(this), F++;
	let e = M;
	return M = this, Mt.bind(this, e);
}, B.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = N, N = this);
}, B.prototype.d = function() {
	this.f |= 8, 1 & this.f || jt(this);
}, B.prototype.dispose = function() {
	this.d();
};
function Ft() {
	let e = s(), t = O(), n = r();
	e.clear(), e.append(n), t !== null && n.select(), C(t) && (t.format = 0);
}
function It(e, t = Ft) {
	return e.registerCommand(Me, () => (t(), !0), 0);
}
function Lt(e) {
	return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
function Rt(e, t) {
	let n;
	return Et(e(), {
		unwatched() {
			n &&= (n(), void 0);
		},
		watched() {
			this.value = e(), n = t(this);
		}
	});
}
function V(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var zt;
try {
	zt = "0.48.0+prod.esm";
} catch {}
var Bt = zt ?? "\"<unknown>+source\"", Vt = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
function Ht(e, t) {
	if (e && t && !Array.isArray(t) && typeof e == "object" && typeof t == "object") {
		let n = e, r = t;
		for (let e in r) !Vt.has(e) && Object.prototype.hasOwnProperty.call(r, e) && (n[e] = Ht(n[e], r[e]));
		return e;
	}
	return t;
}
var Ut = 0, Wt = 1, Gt = 2, Kt = 3, H = 4, U = 5, qt = 6, W = 7;
function Jt(e) {
	return e.id === Ut;
}
function Yt(e) {
	return e.id === Gt;
}
function Xt(e) {
	return function(e) {
		return e.id === Wt;
	}(e) || V(305, String(e.id), String(Wt)), Object.assign(e, { id: Gt });
}
var Zt = /* @__PURE__ */ new Set(), Qt = class {
	builder;
	configs;
	_dependency;
	_peerNameSet;
	extension;
	state;
	_signal;
	constructor(e, t) {
		this.builder = e, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: Ut };
	}
	mergeConfigs() {
		let e = this.extension.config || {}, t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : we;
		for (let n of this.configs) e = t(e, n);
		return e;
	}
	init(e) {
		let t = this.state;
		Yt(t) || V(306, String(t.id));
		let n = {
			getDependency: this.getInitDependency.bind(this),
			getDirectDependentNames: this.getDirectDependentNames.bind(this),
			getPeer: this.getInitPeer.bind(this),
			getPeerNameSet: this.getPeerNameSet.bind(this)
		}, r = {
			...n,
			getDependency: this.getDependency.bind(this),
			getInitResult: this.getInitResult.bind(this),
			getPeer: this.getPeer.bind(this)
		}, i = function(e, t, n) {
			return Object.assign(e, {
				config: t,
				id: Kt,
				registerState: n
			});
		}(t, this.mergeConfigs(), n), a;
		this.state = i, this.extension.init && (a = this.extension.init(e, i.config, n)), this.state = function(e, t, n) {
			return Object.assign(e, {
				id: H,
				initResult: t,
				registerState: n
			});
		}(i, a, r);
	}
	build(e) {
		let t = this.state, n;
		t.id !== H && V(307, String(t.id), String(U)), this.extension.build && (n = this.extension.build(e, t.config, t.registerState));
		let r = {
			...t.registerState,
			getOutput: () => n,
			getSignal: this.getSignal.bind(this)
		};
		this.state = function(e, t, n) {
			return Object.assign(e, {
				id: U,
				output: t,
				registerState: n
			});
		}(t, n, r);
	}
	register(e, t) {
		this._signal = t;
		let n = this.state;
		n.id !== U && V(308, String(n.id), String(U));
		let r = this.extension.register && this.extension.register(e, n.config, n.registerState);
		return this.state = function(e) {
			return Object.assign(e, { id: qt });
		}(n), () => {
			let e = this.state;
			e.id !== W && V(309, String(n.id), String(W)), this.state = function(e) {
				return Object.assign(e, { id: U });
			}(e), r && r();
		};
	}
	afterRegistration(e) {
		let t = this.state, n;
		return t.id !== qt && V(310, String(t.id), String(qt)), this.extension.afterRegistration && (n = this.extension.afterRegistration(e, t.config, t.registerState)), this.state = function(e) {
			return Object.assign(e, { id: W });
		}(t), n;
	}
	getSignal() {
		return this._signal === void 0 && V(311), this._signal;
	}
	getInitResult() {
		this.extension.init === void 0 && V(312, this.extension.name);
		let e = this.state;
		return function(e) {
			return e.id >= H;
		}(e) || V(313, String(e.id), String(H)), e.initResult;
	}
	getInitPeer(e) {
		let t = this.builder.extensionNameMap.get(e);
		return t ? t.getExtensionInitDependency() : void 0;
	}
	getExtensionInitDependency() {
		let e = this.state;
		return function(e) {
			return e.id >= Kt;
		}(e) || V(314, String(e.id), String(Kt)), { config: e.config };
	}
	getPeer(e) {
		let t = this.builder.extensionNameMap.get(e);
		return t ? t.getExtensionDependency() : void 0;
	}
	getInitDependency(e) {
		let t = this.builder.getExtensionRep(e);
		return t === void 0 && V(315, this.extension.name, e.name), t.getExtensionInitDependency();
	}
	getDependency(e) {
		let t = this.builder.getExtensionRep(e);
		return t === void 0 && V(315, this.extension.name, e.name), t.getExtensionDependency();
	}
	getState() {
		let e = this.state;
		return function(e) {
			return e.id >= W;
		}(e) || V(316, String(e.id), String(W)), e;
	}
	getDirectDependentNames() {
		return this.builder.incomingEdges.get(this.extension.name) || Zt;
	}
	getPeerNameSet() {
		let e = this._peerNameSet;
		return e || (e = new Set((this.extension.peerDependencies || []).map(([e]) => e)), this._peerNameSet = e), e;
	}
	getExtensionDependency() {
		if (!this._dependency) {
			let e = this.state;
			(function(e) {
				return e.id >= U;
			})(e) || V(317, this.extension.name), this._dependency = {
				config: e.config,
				init: e.initResult,
				output: e.output
			};
		}
		return this._dependency;
	}
}, $t = { tag: ne };
function en() {
	let e = s();
	e.isEmpty() && e.append(r());
}
var tn = /* @__PURE__ */ w({
	config: /* @__PURE__ */ ve({
		setOptions: $t,
		updateOptions: $t
	}),
	init: ({ $initialEditorState: e = en }) => ({
		$initialEditorState: e,
		initialized: !1
	}),
	afterRegistration(e, { updateOptions: t, setOptions: n }, r) {
		let i = r.getInitResult();
		if (!i.initialized) {
			i.initialized = !0;
			let { $initialEditorState: r } = i;
			if (ie(r)) e.setEditorState(r, n);
			else if (typeof r == "function") e.update(() => {
				r(e);
			}, t);
			else if (r && (typeof r == "string" || typeof r == "object")) {
				let t = e.parseEditorState(r);
				e.setEditorState(t, n);
			}
		}
		return () => {};
	},
	name: "@lexical/extension/InitialState",
	nodes: [
		Ze,
		ge,
		m,
		Pe,
		u
	]
}), nn = Symbol.for("@lexical/extension/LexicalBuilder");
function rn() {}
function an(e) {
	throw e;
}
function G(e) {
	return Array.isArray(e) ? e : [e];
}
var on = Bt, sn = class e {
	roots;
	extensionNameMap;
	outgoingConfigEdges;
	incomingEdges;
	conflicts;
	_sortedExtensionReps;
	PACKAGE_VERSION;
	constructor(e) {
		this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = on, this.roots = e;
		for (let t of e) this.addExtension(t);
	}
	static fromExtensions(t) {
		let n = [G(tn)];
		for (let e of t) n.push(G(e));
		return new e(n);
	}
	static maybeFromEditor(t) {
		let n = t[nn];
		return n && (n.PACKAGE_VERSION !== on && V(292, n.PACKAGE_VERSION, on), n instanceof e || V(293)), n;
	}
	static fromEditor(t) {
		let n = e.maybeFromEditor(t);
		return n === void 0 && V(294), n;
	}
	constructEditor() {
		let { $initialEditorState: e, onError: t, onWarn: n, ...r } = this.buildCreateEditorArgs(), i = Object.assign(He({
			...r,
			...t ? { onError: (e) => {
				t(e, i);
			} } : {},
			...n ? { onWarn: (e) => {
				n(e, i);
			} } : {}
		}), { [nn]: this });
		for (let e of this.sortedExtensionReps()) e.build(i);
		return i;
	}
	buildEditor() {
		let e = rn;
		function t() {
			try {
				e();
			} finally {
				e = rn;
			}
		}
		let n = Object.assign(this.constructEditor(), {
			dispose: t,
			[Symbol.dispose]: t
		});
		return e = S(this.registerEditor(n), () => n.setRootElement(null)), n;
	}
	hasExtensionByName(e) {
		return this.extensionNameMap.has(e);
	}
	getExtensionRep(e) {
		let t = this.extensionNameMap.get(e.name);
		if (t) return t.extension !== e && V(295, e.name), t;
	}
	addEdge(e, t, n) {
		let r = this.outgoingConfigEdges.get(e);
		r ? r.set(t, n) : this.outgoingConfigEdges.set(e, /* @__PURE__ */ new Map([[t, n]]));
		let i = this.incomingEdges.get(t);
		i ? i.add(e) : this.incomingEdges.set(t, /* @__PURE__ */ new Set([e]));
	}
	addExtension(e) {
		this._sortedExtensionReps !== void 0 && V(296);
		let [t] = G(e);
		typeof t.name != "string" && V(297, typeof t.name);
		let n = this.extensionNameMap.get(t.name);
		if (n !== void 0 && n.extension !== t && V(298, t.name), !n) {
			n = new Qt(this, t), this.extensionNameMap.set(t.name, n);
			let e = this.conflicts.get(t.name);
			typeof e == "string" && V(299, t.name, e);
			for (let e of t.conflictsWith || []) this.extensionNameMap.has(e) && V(299, t.name, e), this.conflicts.set(e, t.name);
			for (let e of t.dependencies || []) {
				let n = G(e);
				this.addEdge(t.name, n[0].name, n.slice(1)), this.addExtension(n);
			}
			for (let [e, n] of t.peerDependencies || []) this.addEdge(t.name, e, n ? [n] : []);
		}
	}
	sortedExtensionReps() {
		if (this._sortedExtensionReps) return this._sortedExtensionReps;
		let e = [], t = (n, r) => {
			let i = n.state;
			if (Yt(i)) return;
			let a = n.extension.name;
			var o;
			Jt(i) || V(300, a, r || "[unknown]"), Jt(o = i) || V(304, String(o.id), String(Ut)), i = Object.assign(o, { id: Wt }), n.state = i;
			let s = this.outgoingConfigEdges.get(a);
			if (s) for (let e of s.keys()) {
				let n = this.extensionNameMap.get(e);
				n && t(n, a);
			}
			i = Xt(i), n.state = i, e.push(n);
		};
		for (let e of this.extensionNameMap.values()) Jt(e.state) && t(e);
		for (let t of e) for (let [e, n] of this.outgoingConfigEdges.get(t.extension.name) || []) if (n.length > 0) {
			let t = this.extensionNameMap.get(e);
			if (t) for (let e of n) t.configs.add(e);
		}
		for (let [e, ...t] of this.roots) if (t.length > 0) {
			let n = this.extensionNameMap.get(e.name);
			n === void 0 && V(301, e.name);
			for (let e of t) n.configs.add(e);
		}
		return this._sortedExtensionReps = e, this._sortedExtensionReps;
	}
	registerEditor(e) {
		let t = this.sortedExtensionReps(), n = new AbortController(), r = [() => n.abort()], i = n.signal;
		for (let n of t) {
			let t = n.register(e, i);
			t && r.push(t);
		}
		for (let n of t) {
			let t = n.afterRegistration(e);
			t && r.push(t);
		}
		return S(...r);
	}
	buildCreateEditorArgs() {
		let e = {}, t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = {}, a = {}, o = this.sortedExtensionReps();
		for (let s of o) {
			let { extension: o } = s;
			if (o.onError !== void 0 && (e.onError = o.onError), o.onWarn !== void 0 && (e.onWarn = o.onWarn), o.disableEvents !== void 0 && (e.disableEvents = o.disableEvents), o.parentEditor !== void 0 && (e.parentEditor = o.parentEditor), o.editable !== void 0 && (e.editable = o.editable), o.namespace !== void 0 && (e.namespace = o.namespace), o.$initialEditorState !== void 0 && (e.$initialEditorState = o.$initialEditorState), o.nodes) for (let e of Lt(o)) {
				if (typeof e != "function") {
					let t = n.get(e.replace);
					t && V(302, o.name, e.replace.name, t.extension.name), n.set(e.replace, s);
				}
				t.add(e);
			}
			if (o.html) {
				if (o.html.export) for (let [e, t] of o.html.export.entries()) r.set(e, t);
				o.html.import && Object.assign(i, o.html.import);
			}
			o.theme && Ht(a, o.theme);
		}
		Object.keys(a).length > 0 && (e.theme = a), t.size && (e.nodes = [...t]);
		let s = Object.keys(i).length > 0, c = r.size > 0;
		(s || c) && (e.html = {}, s && (e.html.import = i), c && (e.html.export = r));
		for (let t of o) t.init(e);
		return e.onError ||= an, e;
	}
};
function cn(e, t) {
	let n = sn.fromEditor(e).getExtensionRep(t);
	return n === void 0 && V(303, t.name), n.getExtensionDependency();
}
function K(e, t) {
	let n = sn.maybeFromEditor(e);
	if (!n) return;
	let r = n.extensionNameMap.get(t);
	return r ? r.getExtensionDependency() : void 0;
}
function ln(e) {
	return K(E(), e);
}
var un = /* @__PURE__ */ rt("INSERT_HORIZONTAL_RULE_COMMAND"), dn = class e extends h {
	static getType() {
		return "horizontalrule";
	}
	static clone(t) {
		return new e(t.__key);
	}
	static importJSON(e) {
		return pn().updateFromJSON(e);
	}
	static importDOM() {
		return { hr: () => ({
			conversion: fn,
			priority: 0
		}) };
	}
	exportDOM() {
		return { element: T().createElement("hr") };
	}
	createDOM(e) {
		let t = T().createElement("hr");
		return he(t, e.theme.hr), t;
	}
	getTextContent() {
		return "\n";
	}
	isInline() {
		return !1;
	}
	updateDOM() {
		return !1;
	}
};
function fn() {
	return { node: pn() };
}
function pn() {
	return Ie(dn);
}
function mn(e) {
	return e instanceof dn;
}
Date.now;
function hn(e) {
	return e.canIndent();
}
function gn(e, t, n = hn) {
	return S(e.registerCommand(it, (t) => {
		let n = O();
		if (!C(n)) return !1;
		t.preventDefault();
		let r = function(e) {
			if (e.getNodes().filter((e) => D(e) && e.canIndent()).length > 0) return !0;
			let t = e.anchor, n = e.focus, r = n.isBefore(t) ? n : t, i = st(r.getNode());
			if (i.canIndent()) {
				let e = i.getKey(), t = je();
				if (t.anchor.set(e, 0, "element"), t.focus.set(e, 0, "element"), t = ce(t), t.anchor.is(r)) return !0;
			}
			return !1;
		}(n) ? t.shiftKey ? Xe : qe : oe;
		return e.dispatchCommand(r, void 0);
	}, 0), e.registerCommand(qe, () => {
		let e = typeof t == "number" ? t : t ? t.peek() : null;
		if (!C(O())) return !1;
		let r = typeof n == "function" ? n : n.peek();
		return lt((t) => {
			if (r(t)) {
				let n = t.getIndent() + 1;
				(!e || n < e) && t.setIndent(n);
			}
		});
	}, 4));
}
//#endregion
//#region node_modules/@lexical/text/dist/LexicalText.prod.mjs
function _n() {
	return s().getTextContent();
}
function vn(e, t = !0) {
	if (e) return !1;
	let n = _n();
	return t && (n = n.trim()), n === "";
}
function yn(t) {
	if (!vn(t, !1)) return !1;
	let n = s().getChildren(), r = n.length;
	if (r > 1) return !1;
	for (let t = 0; t < r; t++) {
		let r = n[t];
		if (e(r)) return !1;
		if (A(r)) {
			if (!Le(r) || r.__indent !== 0) return !1;
			let e = r.getChildren(), n = e.length;
			for (let r = 0; r < n; r++) {
				let n = e[t];
				if (!_(n)) return !1;
			}
		}
	}
	return !0;
}
function bn(e) {
	return () => yn(e);
}
function xn(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Sn(e, t, n, r) {
	let i = (e) => e instanceof n, a = (e) => {
		let t = o(e.getTextContent());
		t.setFormat(e.getFormat()), e.replace(t);
	};
	return [e.registerNodeTransform(ge, (e) => {
		if (!e.isSimpleText()) return;
		let n, o = e.getPreviousSibling(), s = e.getTextContent(), c = e;
		if (_(o)) {
			let n = o.getTextContent(), r = t(n + s);
			if (i(o)) {
				if (r === null || ((e) => e.getLatest().__mode)(o) !== 0) return void a(o);
				{
					let t = r.end - n.length;
					if (t > 0) {
						let r = n + s.slice(0, t);
						if (o.select(), o.setTextContent(r), t === s.length) e.remove();
						else {
							let n = s.slice(t);
							e.setTextContent(n);
						}
						return;
					}
				}
			} else if (r === null || r.start < n.length) return;
		}
		let l = 0;
		for (;;) {
			n = t(s);
			let e, u = n === null ? "" : s.slice(n.end);
			if (s = u, u === "") {
				let e = c.getNextSibling();
				if (_(e)) {
					u = c.getTextContent() + e.getTextContent();
					let n = t(u);
					if (n === null) return void (i(e) ? a(e) : e.markDirty());
					if (n.start !== 0) return;
				}
			}
			if (n === null) return;
			if (n.start === 0 && _(o) && o.isTextEntity()) {
				l += n.end;
				continue;
			}
			n.start === 0 ? [e, c] = c.splitText(n.end) : [, e, c] = c.splitText(n.start + l, n.end + l), e === void 0 && xn(165, "nodeToReplace");
			let d = r(e);
			if (d.setFormat(e.getFormat()), e.replace(d), c == null) return;
			l = 0, o = d;
		}
	}), e.registerNodeTransform(n, (e) => {
		let n = e.getTextContent(), r = t(n);
		if (r === null || r.start !== 0) return void a(e);
		if (n.length > r.end) return void e.splitText(r.end);
		let o = e.getPreviousSibling();
		_(o) && o.isTextEntity() && (a(o), a(e));
		let s = e.getNextSibling();
		_(s) && s.isTextEntity() && (a(s), i(e) && a(e));
	})];
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalContentEditable.prod.mjs
var Cn = Se ? gt : ht;
function wn({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: n, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: a, ariaExpanded: o, ariaInvalid: s, ariaLabel: c, ariaLabelledBy: l, ariaMultiline: u, ariaOwns: d, ariaRequired: f, autoCapitalize: p, className: m, id: h, role: g = "textbox", spellCheck: ee = !0, style: te, tabIndex: ne, "data-testid": _, ...re }, ie) {
	let [v, y] = vt(e.isEditable()), ae = pt((t) => {
		t && t.ownerDocument && t.ownerDocument.defaultView ? e.setRootElement(t) : e.setRootElement(null);
	}, [e]), oe = _t(() => function(...e) {
		return (t) => {
			for (let n of e) typeof n == "function" ? n(t) : n != null && (n.current = t);
		};
	}(ie, ae), [ae, ie]);
	return Cn(() => (y(e.isEditable()), e.registerEditableListener((e) => {
		y(e);
	})), [e]), /*#__PURE__*/ j("div", {
		"aria-activedescendant": v ? t : void 0,
		"aria-autocomplete": v ? n : "none",
		"aria-controls": v ? r : void 0,
		"aria-describedby": i,
		...a == null ? {} : { "aria-errormessage": a },
		"aria-expanded": v && g === "combobox" ? !!o : void 0,
		...s == null ? {} : { "aria-invalid": s },
		"aria-label": c,
		"aria-labelledby": l,
		"aria-multiline": u,
		"aria-owns": v ? d : void 0,
		"aria-readonly": !v || void 0,
		"aria-required": f,
		autoCapitalize: p,
		className: m,
		contentEditable: v,
		"data-testid": _,
		id: h,
		ref: oe,
		role: g,
		spellCheck: ee,
		style: te,
		tabIndex: ne ?? (v ? void 0 : -1),
		...re
	});
}
var Tn = /*#__PURE__*/ ft(wn);
function En(e) {
	return e.read("latest", bn(e.isComposing()));
}
var Dn = /*#__PURE__*/ ft(On);
function On(e, t) {
	let { placeholder: n, ...r } = e, [i] = Ke();
	return bt(yt, { children: [/*#__PURE__*/ j(Tn, {
		editor: i,
		...r,
		ref: t
	}), n != null && /*#__PURE__*/ j(kn, {
		editor: i,
		content: n
	})] });
}
function kn({ content: e, editor: t }) {
	let n = function(e) {
		let [t, n] = vt(() => En(e));
		return Cn(() => {
			function t() {
				let t = En(e);
				n(t);
			}
			return t(), S(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), [r, i] = vt(t.isEditable());
	if (gt(() => (i(t.isEditable()), t.registerEditableListener((e) => {
		i(e);
	})), [t]), !n) return null;
	let a = null;
	return typeof e == "function" ? a = e(r) : e !== null && (a = e), a === null ? null : /*#__PURE__*/ j("div", {
		"aria-hidden": !0,
		children: a
	});
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalErrorBoundary.prod.mjs
var An = class extends ut {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e, t) {
		this.props.onError(e instanceof Error ? e : Error(String(e), { cause: e }), t);
	}
	render() {
		return this.state.hasError ? this.props.fallback : this.props.children;
	}
};
function jn({ children: e, fallback: t, onError: n }) {
	return j(An, {
		fallback: t === void 0 ? /*#__PURE__*/ j("div", {
			style: {
				border: "1px solid #f00",
				color: "#f00",
				padding: "8px"
			},
			children: "An error was thrown."
		}) : t,
		onError: n,
		children: e
	});
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalReactProviderExtension.prod.mjs
var Mn = /* @__PURE__ */ w({ name: "@lexical/react/ReactProvider" });
//#endregion
//#region node_modules/@lexical/html/dist/LexicalHtml.prod.mjs
function q(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var J;
function Nn(e, t) {
	let { key: n } = t;
	return e && n in e ? e[n] : t.defaultValue;
}
function Pn(e) {
	return J && J.editor === e ? J : void 0;
}
function Fn(e, t) {
	if ("cfg" in t) {
		let { cfg: n, updater: r } = t;
		return [n, r(Nn(e, n))];
	}
	return t;
}
function In(e, t) {
	let n = t;
	for (let r of e) {
		let [e, i] = Fn(n, r), a = e.key;
		if (n === t && Nn(n, e) === i) continue;
		let o = n === t || n === void 0 ? Ln(t) : n;
		o[a] = i, n = o;
	}
	return n;
}
function Ln(e) {
	return Object.create(e || null);
}
function Rn(e, t) {
	return [e, t];
}
function zn(e, t, n, r = E()) {
	let i = J, a = Pn(r);
	try {
		return J = {
			...a,
			editor: r,
			[e]: t
		}, n();
	} finally {
		J = i;
	}
}
function Bn(e, t = () => {}) {
	return (n, r = E()) => (i) => {
		let a = Pn(r), o = a && a[e], s = In(n, o || t(r));
		return s && s !== o ? zn(e, s, i, r) : i();
	};
}
function Vn(e, t, n, r) {
	return Object.assign($e(Symbol(t), {
		isEqual: r,
		parse: n
	}), { [e]: !0 });
}
function Hn(e) {
	if (!_e(e)) return;
	let t = e;
	if (t.querySelector("style") === null) return;
	let n = /* @__PURE__ */ new Map();
	function r(e) {
		let t = n.get(e);
		if (t === void 0) {
			t = /* @__PURE__ */ new Set();
			for (let n = 0; n < e.style.length; n++) t.add(e.style[n]);
			n.set(e, t);
		}
		return t;
	}
	try {
		for (let e of Array.from(t.styleSheets)) {
			let n;
			try {
				n = e.cssRules;
			} catch {
				continue;
			}
			for (let e of Array.from(n)) {
				if (!ct(e, CSSStyleRule)) continue;
				let n;
				try {
					n = t.querySelectorAll(e.selectorText);
				} catch {
					continue;
				}
				for (let t of Array.from(n)) {
					if (!b(t)) continue;
					let n = r(t);
					for (let r = 0; r < e.style.length; r++) {
						let i = e.style[r];
						n.has(i) || t.style.setProperty(i, e.style.getPropertyValue(i), e.style.getPropertyPriority(i));
					}
				}
			}
		}
	} catch {}
}
var Un = "@lexical/html/DOM", Wn = Symbol.for("@lexical/html/DOMExportContext"), Gn = Symbol.for("@lexical/html/DOMImportContext");
function Kn(e, t, n) {
	return Vn(Wn, e, t, n);
}
var qn = /* @__PURE__ */ Kn("isExport", Boolean);
function Jn(e) {
	let t = K(e, Un);
	return t ? t.output.defaults : void 0;
}
function Yn(e) {
	let t = K(e, Un);
	return t ? t.output.runtime : void 0;
}
function Xn(e = E()) {
	let t = Yn(e);
	return t ? t.getSessionConfig() : ze(e);
}
var Zn = Bn(Wn, Jn), Qn = Symbol.for("@lexical/html/SelectorImpl");
function Y(e, t) {
	let n = {
		kind: "element",
		predicate: (r = t, r.length === 0 ? b : r.length === 1 ? r[0] : (e, t) => {
			for (let n of r) if (!n(e, t)) return !1;
			return !0;
		}),
		tags: e
	};
	var r;
	let i = (n) => Y(e, [...t, n]);
	return {
		[Qn]: n,
		attr: (e, t, n) => i(tr(e, t, n)),
		classAll: (...e) => i(er(e)),
		classAny: (...e) => i(function(e) {
			let t = $n(e);
			return t.length === 0 ? () => !1 : (e) => {
				if (!b(e)) return !1;
				let n = e.classList;
				for (let e of t) if (n.contains(e)) return !0;
				return !1;
			};
		}(e)),
		styleAny: (e, t, n) => i(function(e, t, n) {
			if (typeof t == "string") return (n) => b(n) && n.style.getPropertyValue(e) === t;
			if (t instanceof RegExp) {
				let r = n && n.capture, i = t;
				return (t, n) => {
					if (!b(t)) return !1;
					let a = t.style.getPropertyValue(e);
					if (!a) return !1;
					let o = a.match(i);
					return o !== null && (r !== void 0 && (n[r] = o), !0);
				};
			}
			q(362, JSON.stringify(e));
		}(e, t, n))
	};
}
function $n(e) {
	let t = [];
	for (let n of e) n && t.push(n);
	return t;
}
function er(e) {
	let t = $n(e);
	return t.length === 0 ? () => !0 : (e) => {
		if (!b(e)) return !1;
		let n = e.classList;
		for (let e of t) if (!n.contains(e)) return !1;
		return !0;
	};
}
function tr(e, t, n) {
	if (!0 === t) return (t) => b(t) && t.hasAttribute(e);
	if (typeof t == "string") return (n) => b(n) && n.getAttribute(e) === t;
	if (t instanceof RegExp) {
		let r = n && n.capture, i = t;
		return (t, n) => {
			if (!b(t)) return !1;
			let a = t.getAttribute(e);
			if (a == null) return !1;
			let o = a.match(i);
			return o !== null && (r !== void 0 && (n[r] = o), !0);
		};
	}
	q(361, JSON.stringify(e));
}
var nr = {
	kind: "text",
	predicate: Ge,
	tags: /* @__PURE__ */ new Set()
}, rr = { [Qn]: nr }, ir = {
	kind: "comment",
	predicate: (e) => e.nodeType === 8,
	tags: /* @__PURE__ */ new Set()
}, ar = { [Qn]: ir }, X = {
	any: () => Y(/* @__PURE__ */ new Set(), []),
	comment: () => ar,
	tag(...e) {
		e.length > 0 || q(363);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) t.add(n.toUpperCase());
		return Y(t, []);
	},
	text: () => rr
};
function or(e, t) {
	return b(e) && e.nodeName === t.toUpperCase();
}
var sr = /[A-Za-z0-9_-]/, cr = class {
	constructor(e, t) {
		this.source = e, this.pos = t;
	}
	peek(e = 0) {
		return this.source[this.pos + e] || "";
	}
	consume() {
		return this.source[this.pos++] || "";
	}
	eof() {
		return this.pos >= this.source.length;
	}
	skipWhitespace() {
		for (; !this.eof() && /\s/.test(this.peek());) this.pos++;
	}
	readIdent() {
		let e = this.pos;
		for (; !this.eof() && sr.test(this.peek());) this.pos++;
		return this.source.slice(e, this.pos);
	}
	readQuoted() {
		let e = this.consume();
		this.assert(e === "\"" || e === "'", "expected quote");
		let t = this.pos;
		for (; !this.eof() && this.peek() !== e;) this.peek() === "\\" ? this.pos += 2 : this.pos++;
		this.assert(!this.eof(), "unterminated string");
		let n = this.source.slice(t, this.pos);
		return this.pos++, n.replace(/\\(.)/g, "$1");
	}
	assert(e, t) {
		e || q(364, String(this.pos + 1), t, this.source);
	}
};
function lr(e) {
	let t = /* @__PURE__ */ new Set(), n = [], r = [];
	if (e.skipWhitespace(), e.peek() === "*") e.consume();
	else if (sr.test(e.peek())) {
		let n = e.readIdent();
		n && t.add(n.toUpperCase());
	}
	for (; !e.eof();) {
		let t = e.peek();
		if (t === ".") {
			e.consume();
			let t = e.readIdent();
			e.assert(t !== "", "expected class name after \".\""), r.push(t);
		} else if (t === "#") {
			e.consume();
			let t = e.readIdent();
			e.assert(t !== "", "expected id after \"#\""), n.push(tr("id", t));
		} else {
			if (t !== "[") break;
			{
				e.consume(), e.skipWhitespace();
				let t = e.readIdent();
				e.assert(t !== "", "expected attribute name after \"[\""), e.skipWhitespace();
				let r = !0;
				if (e.peek() === "=") {
					e.consume(), e.skipWhitespace();
					let t = e.peek();
					t === "\"" || t === "'" ? r = e.readQuoted() : (r = e.readIdent(), e.assert(r !== "", "expected attribute value")), e.skipWhitespace();
				}
				e.assert(e.peek() === "]", "expected \"]\""), e.consume(), n.push(tr(t, r));
			}
		}
	}
	return r.length > 0 && n.push(er(r)), {
		predicates: n,
		tags: t
	};
}
function ur(e) {
	let t = new cr(e, 0), n = [];
	for (;;) {
		let e = lr(t);
		if (n.push(e), t.skipWhitespace(), t.eof()) break;
		t.assert(t.peek() === ",", "expected \",\" (selector lists are the only supported combinator)"), t.consume(), t.skipWhitespace();
	}
	if (n.length === 1) return Y(n[0].tags, n[0].predicates);
	let r = /* @__PURE__ */ new Set();
	for (let e of n) for (let t of e.tags) r.add(t);
	return Y(r, [(e, t) => {
		for (let r of n) {
			let n = e.nodeName;
			if (r.tags.size > 0 && !r.tags.has(n)) continue;
			let i = !0;
			for (let n of r.predicates) if (!n(e, t)) {
				i = !1;
				break;
			}
			if (i) return !0;
		}
		return !1;
	}]);
}
function dr(e) {
	return e;
}
function fr(e, t, n) {
	return Vn(Gn, e, t, n);
}
var pr = /* @__PURE__ */ fr("textFormat", () => 0), mr = /* @__PURE__ */ fr("textStyle", () => ({}));
function hr(t) {
	return D(t) || e(t) && !t.isInline();
}
function gr(e, t) {
	let n = [], r = [], i = () => {
		r.length !== 0 && (n.push(t().splice(0, 0, r)), r = []);
	};
	for (let a of e) if (hr(a)) {
		if (i(), A(a)) {
			let e = gr(a.getChildren(), t);
			a.splice(0, a.getChildrenSize(), e);
		}
		n.push(a);
	} else r.push(a);
	return i(), n;
}
function _r(e, t) {
	if (!b(t)) return e;
	let n = t.style.textAlign;
	if (!xr(n)) return e;
	for (let t of e) D(t) && t.getFormatType() === "" && t.setFormat(n);
	return e;
}
function vr(e, t, n) {
	e.length === 1 && xe(e[0]) && (e = []);
	let i = r();
	if (b(n)) {
		let e = n.style.textAlign;
		xr(e) && i.setFormat(e);
	}
	return [i.splice(0, 0, e)];
}
var yr = {
	$accepts: hr,
	$packageRun: vr,
	name: "BlockSchema"
}, Z = X, br = /* @__PURE__ */ new Set([
	"center",
	"end",
	"justify",
	"left",
	"right",
	"start"
]);
function xr(e) {
	return br.has(e);
}
Z.tag("b", "strong", "em", "i", "code", "mark", "s", "sub", "sup", "u", "span"), Z.text(), Z.tag("script", "style"), Z.tag("br"), Z.tag("p"), Z.tag("hr"), Z.any();
function Sr(e, t) {
	let n = [], r = 0, i = 0;
	for (; r < e.length && i < t.length;) e[r] <= t[i] ? n.push(e[r++]) : n.push(t[i++]);
	for (; r < e.length;) n.push(e[r++]);
	for (; i < t.length;) n.push(t[i++]);
	return n;
}
function Cr(e) {
	let t = [], n = /* @__PURE__ */ new Map(), r = [], i = [], a = [], o = /* @__PURE__ */ new Set();
	e.forEach((e, s) => {
		let c = function(e) {
			let t = e[Qn];
			return t === void 0 && q(360), t;
		}(e.match), l = e.name || function(e, t) {
			return e.kind === "text" ? `#text@${t}` : e.kind === "comment" ? `#comment@${t}` : e.tags.size === 0 ? `*@${t}` : `${Array.from(e.tags).join(",").toLowerCase()}@${t}`;
		}(c, s);
		if (e.name && o.add(e.name), t.push({
			$import: e.$import,
			name: l,
			predicate: c.predicate
		}), c.kind === "text") i.push(s);
		else if (c.kind === "comment") a.push(s);
		else if (c.tags.size === 0) r.push(s);
		else for (let e of c.tags) {
			let t = n.get(e);
			t || (t = [], n.set(e, t)), t.push(s);
		}
	});
	let s = /* @__PURE__ */ new Map();
	if (r.length === 0) for (let [e, t] of n) s.set(e, t);
	else for (let [e, t] of n) s.set(e, Sr(t, r));
	return {
		byTag: s,
		commentIndices: a,
		rules: t,
		textIndices: i,
		wildcardIndices: r
	};
}
Object.freeze([]);
function wr(e) {
	let t = [];
	for (let n of e) if (Tr(n)) for (let e of n.rules) t.push(e);
	else t.push(n);
	return t;
}
function Tr(e) {
	return typeof e == "object" && !!e && "__type" in e && e.__type === "CompiledOverlayRules";
}
function Er(e) {
	let t = wr(e);
	return {
		__type: "CompiledOverlayRules",
		dispatch: Cr(t),
		rules: t
	};
}
Object.freeze({}), X.any();
var Dr = {
	any: X.any,
	comment: X.comment,
	css: ur,
	tag: X.tag,
	text: X.text
}, Or = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function kr(e, t) {
	Hn(t);
	let n = _e(t) ? t.body.childNodes : t.childNodes, r = [], i = [];
	for (let t of n) if (!Or.has(t.nodeName)) {
		let n = Nr(t, e, i, !1);
		if (n !== null) for (let e of n) r.push(e);
	}
	return function(e) {
		for (let t of e) t.getParent() && t.getNextSibling() instanceof Fe && t.insertAfter(a());
		for (let t of e) {
			let e = t.getParent();
			e && e.splice(t.getIndexWithinParent(), 1, t.getChildren());
		}
	}(i), r;
}
function Ar(e, t = null, n = E()) {
	return Zn([Rn(qn, !0)], n)(() => {
		let r = s(), i = Xn(n), a = C(t) ? fe(t.anchor.getNode()) : null, o = e.append.bind(e);
		for (let e of (A(a) ? a : r).getChildren()) Mr(n, e, o, t, i);
		return e;
	});
}
function jr(e, t = null) {
	return (typeof document > "u" || typeof window > "u" && global.window === void 0) && q(338), le(e), Ar(T().createElement("div"), t, e).innerHTML;
}
function Mr(e, t, n, r = null, i = ze(e)) {
	let a = i.$shouldInclude(t, r, e), o = i.$shouldExclude(t, r, e), s = t;
	r !== null && _(t) && (s = at(r, t, "clone"));
	let { element: c, after: l, append: u, $getChildNodes: f } = i.$exportDOM(s, e);
	if (!c) return !1;
	let p = T().createDocumentFragment(), m = f ? f() : A(s) ? s.getChildren() : [], h = a && d(r) && A(t) ? null : r, g = p.append.bind(p);
	for (let n of m) {
		let o = Mr(e, n, g, h, i);
		!a && o && i.$extractWithChild(t, n, r, "html", e) && (a = !0);
	}
	if (a && !o) {
		if ((b(c) || y(c)) && (u ? u(p) : c.append(p)), n(c), l) {
			let e = l.call(s, c);
			e && (y(c) ? c.replaceChildren(e) : c.replaceWith(e));
		}
	} else n(p);
	return a;
}
function Nr(e, t, n, i, o = /* @__PURE__ */ new Map(), s) {
	let c = [];
	if (Or.has(e.nodeName)) return c;
	let l = null, u = function(e, t) {
		let { nodeName: n } = e, r = t._htmlConversions.get(n.toLowerCase()), i = null;
		if (r !== void 0) for (let t of r) {
			let n = t(e);
			n !== null && (i === null || (i.priority || 0) <= (n.priority || 0)) && (i = n);
		}
		return i === null ? null : i.conversion;
	}(e, t), d = u ? u(e) : null, f = null;
	if (d !== null) {
		f = d.after;
		let t = d.node;
		if (l = Array.isArray(t) ? t[t.length - 1] : t, l !== null) {
			for (let [, e] of o) if (l = e(l, s), !l) break;
			l && c.push(...Array.isArray(t) ? t : [l]);
		}
		d.forChild != null && o.set(e.nodeName, d.forChild);
	}
	let p = e.childNodes, m = [], h = (l == null || !te(l)) && (l != null && D(l) || i);
	for (let e = 0; e < p.length; e++) m.push(...Nr(p[e], t, n, h, new Map(o), l));
	if (f != null && (m = f(m)), De(e) && (m = Pr(e, m, h ? () => {
		let e = new Fe();
		return n.push(e), e;
	} : r)), l == null) if (m.length > 0) for (let e of m) c.push(e);
	else De(e) && function(e) {
		return e.nextSibling == null || e.previousSibling == null ? !1 : Oe(e.nextSibling) && Oe(e.previousSibling);
	}(e) && c.push(a());
	else A(l) && l.append(...m);
	return c;
}
function Pr(e, t, n) {
	let r = e.style.textAlign, i = [], a = [];
	for (let e = 0; e < t.length; e++) {
		let o = t[e];
		if (D(o)) r && !o.getFormat() && o.setFormat(r), i.push(o);
		else if (a.push(o), e === t.length - 1 || e < t.length - 1 && D(t[e + 1])) {
			let e = n();
			e.setFormat(r), e.append(...a), i.push(e), a = [];
		}
	}
	return i;
}
//#endregion
//#region node_modules/@lexical/clipboard/dist/LexicalClipboard.prod.mjs
function Fr(e, t, n = null) {
	let r = c(n), i = n ? nt(n) : [], a = n !== null && i.length > 0;
	if (a && typeof r.caretPositionFromPoint == "function") {
		let a = r.caretPositionFromPoint(e, t, { shadowRoots: i });
		if (a !== null && function(e, t) {
			for (let n = e; n !== null;) {
				if (n === t) return !0;
				n = tt(n);
			}
			return !1;
		}(a.offsetNode, n)) return {
			node: a.offsetNode,
			offset: a.offset
		};
	}
	if (a) {
		let i = n.getRootNode();
		if (f(i)) {
			let a = i.elementFromPoint(e, t);
			if (a !== null && n.contains(a)) {
				let n = function(e, t, n, r) {
					let i = r.createRange(), a = (e) => t < e.top ? e.top - t : t > e.bottom ? t - e.bottom : 0, o = (t) => e < t.left ? t.left - e : e > t.right ? e - t.right : 0, s = r.createTreeWalker(n, NodeFilter.SHOW_TEXT), c = null, l = Infinity, u = Infinity;
					for (let e = s.nextNode(); e; e = s.nextNode()) {
						i.selectNodeContents(e);
						for (let t of i.getClientRects()) {
							let n = a(t), r = o(t);
							(n < l || n === l && r < u) && (l = n, u = r, c = e);
						}
					}
					if (c === null) return null;
					let d = 0, f = Infinity, p = Infinity;
					for (let t = 0; t <= c.length; t++) {
						i.setStart(c, t), i.collapse(!0);
						let n = i.getBoundingClientRect(), r = a(n), o = Math.abs(e - n.left);
						(r < f || r === f && o < p) && (f = r, p = o, d = t);
					}
					return {
						node: c,
						offset: d
					};
				}(e, t, a, r);
				if (n !== null) return n;
			}
		}
	}
	if (typeof r.caretRangeFromPoint == "function") {
		let n = r.caretRangeFromPoint(e, t);
		return n === null ? null : {
			node: n.startContainer,
			offset: n.startOffset
		};
	}
	if (typeof r.caretPositionFromPoint == "function") {
		let n = r.caretPositionFromPoint(e, t);
		return n === null ? null : {
			node: n.offsetNode,
			offset: n.offset
		};
	}
	return null;
}
function Q(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var Ir = {
	"application/x-lexical-editor": 0,
	"text/html": 10,
	"text/plain": 20,
	"text/uri-list": 30
};
function Lr(e) {
	return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (e) => e }).createHTML(e) : e;
}
var Rr = (e, t) => {
	if (!C(t)) return t.insertRawText(e), !0;
	let n = (e) => {
		let t = O();
		C(t) && e(t);
	};
	return re(e, {
		linebreak: () => n((e) => e.insertParagraph()),
		tab: () => n((e) => e.insertNodes([Re()])),
		text: (e) => n((t) => t.insertText(e))
	}), !0;
}, zr = {
	"application/x-lexical-editor": [(e, t, n) => {
		try {
			let n = E(), r = JSON.parse(e);
			if (r && r.namespace === n._config.namespace && Array.isArray(r.nodes)) return $r(n, ni(r.nodes), t), !0;
		} catch (e) {
			console.error(e);
		}
		return n();
	}],
	"text/html": [(e, t, n) => {
		try {
			let n = E();
			return $r(n, kr(n, new DOMParser().parseFromString(Lr(e), "text/html")), t), !0;
		} catch (e) {
			return console.error(e), n();
		}
	}],
	"text/plain": [Rr],
	"text/uri-list": [Rr]
};
function Br(e, t, n, r) {
	if (!e) return !1;
	let i = (a) => !!e[a] && e[a](t, n, i.bind(null, a - 1), r);
	return i(e.length - 1);
}
function Vr(e, t, n) {
	let r = t.getData("text/plain");
	for (let i of function(e) {
		return Object.keys(e.$importMimeType).filter((t) => e.$importMimeType[t] !== void 0).sort((t, n) => {
			let r = e.priority[t], i = e.priority[n];
			return r === void 0 && i === void 0 ? t < n ? -1 : +(t > n) : r === void 0 ? 1 : i === void 0 ? -1 : r - i;
		});
	}(e)) {
		let a = t.getData(i);
		if (a && (i !== "text/html" || a !== r) && Br(e.$importMimeType[i], a, n, t)) return !0;
	}
	return !1;
}
var Hr = {
	$importMimeType: zr,
	$insertDataTransfer: (e, t) => Vr({
		$importMimeType: zr,
		priority: Ir
	}, e, t),
	priority: Ir
}, Ur = /* @__PURE__ */ w({
	build: (e, t) => ({
		$importMimeType: t.$importMimeType,
		$insertDataTransfer: (e, n) => Vr(t, e, n),
		priority: t.priority
	}),
	config: /* @__PURE__ */ ve({
		$importMimeType: zr,
		priority: Ir
	}),
	mergeConfig(e, t) {
		let n = we(e, t);
		if (t.$importMimeType) {
			let r = { ...e.$importMimeType };
			for (let [e, n] of Object.entries(t.$importMimeType)) if (n) {
				let t = r[e];
				r[e] = t ? [...t, ...n] : n;
			}
			n.$importMimeType = r;
		}
		return t.priority && (n.priority = {
			...e.priority,
			...t.priority
		}), n;
	},
	name: "@lexical/clipboard/Import"
});
function Wr(e, t = O()) {
	return t ?? Q(166), C(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : jr(e, t);
}
function Gr(e, t = O()) {
	return t ?? Q(166), C(t) && t.isCollapsed() || t.getNodes().length === 0 ? null : JSON.stringify(ti(e, t));
}
function Kr(e, t) {
	let n = e.getData("text/plain") || e.getData("text/uri-list");
	n != null && t.insertRawText(n);
}
function qr(e, t, n) {
	(function() {
		let e = ln(Ur.name);
		return e ? e.output : Hr;
	})().$insertDataTransfer(e, t);
}
var Jr = "application/x-lexical-drag";
function Yr(e, t) {
	let n = { editorKey: t.getKey() };
	e.setData(Jr, JSON.stringify(n));
}
function Xr(e, r, i) {
	let a = e.dataTransfer;
	if (a === null) return !1;
	let o = function(e) {
		let t = e.getData(Jr);
		if (!t) return null;
		let n;
		try {
			n = JSON.parse(t);
		} catch {
			return null;
		}
		return (r = n) !== null && typeof r == "object" && "editorKey" in r && typeof r.editorKey == "string" ? n : null;
		var r;
	}(a);
	if (o === null) return !1;
	let s = function(e, t) {
		let n = Fr(e.clientX, e.clientY, t.getRootElement());
		if (n === null) return null;
		let r = ye(n.node);
		if (r === null) return null;
		if (_(r)) return Ae(r, "next", n.offset);
		if (A(r)) return ee(r, n.offset, "next");
		let i = r.getParent();
		return i === null ? null : ee(i, r.getIndexWithinParent() + 1, "next");
	}(e, r);
	if (s === null) return !1;
	let c = g(s);
	if (c === null) return !1;
	let l = o.editorKey === r.getKey(), u = O();
	if (l) {
		if (!C(u) || u.isCollapsed()) return !1;
		if (function(e, t) {
			let { anchor: r, focus: i } = Ye(n(t), "next");
			return me(r, e) < 0 && me(e, i) < 0;
		}(s, u)) return e.preventDefault(), !0;
		u.removeText();
	}
	if (!c.origin.isAttached()) return e.preventDefault(), !0;
	if (i(a, Ee(et(c)), r), !l) {
		let e = r.getRootElement(), n = e ? e.ownerDocument : null, i = n ? function(e, n) {
			for (let r of t(n)) {
				let t = ke(r);
				if (Ce(t) && t.getKey() === e && b(r)) return r;
			}
			return null;
		}(o.editorKey, n) : null;
		i !== null && i.dispatchEvent(new InputEvent("beforeinput", {
			bubbles: !0,
			cancelable: !0,
			inputType: "deleteByDrag"
		}));
	}
	return e.preventDefault(), !0;
}
function Zr(e, t) {
	return Xr(e, t, qr);
}
function Qr(e, t) {
	return Xr(e, t, (e, t) => Kr(e, t));
}
function $r(e, t, n) {
	e.dispatchCommand(se, {
		nodes: t,
		selection: n
	}) || (n.insertNodes(t), function(e) {
		if (C(e) && e.isCollapsed()) {
			let t = e.anchor, n = null, r = p(t, "previous");
			if (r) if (Ve(r)) n = r.origin;
			else {
				let e = ae(r, be(s(), "next").getFlipped());
				for (let t of e) {
					if (_(t.origin)) {
						n = t.origin;
						break;
					}
					if (A(t.origin) && !t.origin.isInline()) break;
				}
			}
			if (n && _(n)) {
				let t = n.getFormat(), r = n.getStyle();
				e.format === t && e.style === r || (e.format = t, e.style = r, e.dirty = !0);
			}
		}
	}(n));
}
function ei(e, t, n, r = []) {
	let i = t === null || n.isSelected(t), a = A(n) && n.excludeFromCopy("html"), o = n;
	t !== null && _(o) && (o = at(t, o, "clone"));
	let s = A(o) ? o.getChildren() : [], c = function(e) {
		let t = e.exportJSON(), n = e.constructor;
		if (t.type !== n.getType() && Q(58, n.name), A(e)) {
			let e = t.children;
			Array.isArray(e) || Q(59, n.name);
		}
		return t;
	}(o);
	_(o) && o.getTextContentSize() === 0 && (i = !1);
	let l = i && d(t) && A(n) ? null : t;
	for (let r = 0; r < s.length; r++) {
		let a = s[r], o = ei(e, l, a, c.children);
		!i && A(n) && o && n.extractWithChild(a, t, "clone") && (i = !0);
	}
	if (i && !a) {
		let t = Je(o);
		if (t.length > 0) {
			let n = {};
			for (let r of t) {
				let t = Be(o, r);
				t === null && Q(366, o.constructor.name, r);
				let i = [];
				ei(e, null, t, i), i.length === 1 && i[0].type === t.getType() || Q(385, r, o.constructor.name, String(i.length), String(i.length > 0 ? i[0].type : "none")), n[r] = i[0];
			}
			c.$slots = n;
		}
	}
	if (i && !a) r.push(c);
	else if (Array.isArray(c.children)) for (let e = 0; e < c.children.length; e++) {
		let t = c.children[e];
		r.push(t);
	}
	return i;
}
function ti(e, t) {
	let n = [], r = s(), i = C(t) ? t.anchor.getNode() : d(t) ? t.getNodes()[0] ?? null : null, a = i === null ? null : fe(i), o = (A(a) ? a : r).getChildren();
	for (let r = 0; r < o.length; r++) ei(e, t, o[r], n);
	return {
		namespace: e._config.namespace,
		nodes: n
	};
}
function ni(e) {
	let t = [];
	for (let n of e) t.push(i(n));
	return t;
}
var $ = null;
async function ri(e, t, n) {
	if ($ !== null) return !1;
	if (t !== null) return new Promise((r, i) => {
		e.update(() => {
			r(ii(e, t, n));
		});
	});
	let r = e.getRootElement(), i = e._window || window, a = i.document, o = v(i);
	if (r === null || o === null) return !1;
	let s = a.createElement("span");
	s.style.position = "fixed", s.style.top = "-1000px", s.append(a.createTextNode("#")), r.append(s);
	let c = a.createRange();
	return c.setStart(s, 0), c.setEnd(s, 1), o.removeAllRanges(), o.addRange(c), new Promise((t, r) => {
		let o = e.registerCommand(ue, (r) => (ct(r, ClipboardEvent) && (o(), $ !== null && (i.clearTimeout($), $ = null), t(ii(e, r, n))), !0), 4);
		$ = i.setTimeout(() => {
			o(), $ = null, t(!1);
		}, 50), a.execCommand("copy"), s.remove();
	});
}
function ii(e, t, n) {
	if (n === void 0) {
		let t = v(e._window), r = O();
		if (!r || r.isCollapsed() || !t) return !1;
		let i = l(t, e.getRootElement()), a = i.anchorNode, o = i.focusNode;
		if (a !== null && o !== null && !Ne(e, a, o)) return !1;
		n = oi(r);
	}
	t.preventDefault();
	let r = t.clipboardData;
	return r !== null && (si(r, n), !0);
}
var ai = [["text/html", Wr], ["application/x-lexical-editor", Gr]];
function oi(e = O()) {
	return function(e, t) {
		let n = { "text/plain": "" };
		for (let [r, i] of Object.entries(e)) if (i) {
			let e = ui(i, t);
			e !== null && (n[r] = e);
		}
		return n;
	}(ci(), e);
}
function si(e, t) {
	for (let [n] of ai) t[n] === void 0 && e.setData(n, "");
	for (let n in t) {
		let r = t[n];
		r !== void 0 && e.setData(n, r);
	}
}
function ci(e = E()) {
	let t = K(e, di.name);
	return t ? t.output : li;
}
var li = {
	"application/x-lexical-editor": [(e, t) => e ? Gr(E(), e) : t()],
	"text/html": [(e, t) => e ? Wr(E(), e) : t()],
	"text/plain": [(e, t) => e ? e.getTextContent() : t()]
};
function ui(e, t) {
	let n = (r) => e[r] ? e[r](t, n.bind(null, r - 1)) : null;
	return n(e.length - 1);
}
var di = /* @__PURE__ */ w({
	build: (e, t, n) => t.$exportMimeType,
	config: /* @__PURE__ */ ve({ $exportMimeType: li }),
	mergeConfig(e, t) {
		let n = we(e, t);
		if (t.$exportMimeType) {
			let r = { ...e.$exportMimeType };
			for (let [e, n] of Object.entries(t.$exportMimeType)) if (n) {
				let t = r[e];
				r[e] = t ? [...t, ...n] : n;
			}
			n.$exportMimeType = r;
		}
		return n;
	},
	name: "@lexical/clipboard/GetClipboardData"
}), fi = {
	bold: "bold",
	italic: "italic",
	strikeThrough: "strikethrough",
	subscript: "subscript",
	superscript: "superscript",
	underline: "underline"
}, pi = Symbol.for("@lexical/dragon/WindowState");
function mi(e, t, n) {
	let r = function(e) {
		let t = e[pi];
		return t === void 0 && (t = {
			dispose: () => {},
			editors: /* @__PURE__ */ new Map(),
			installs: /* @__PURE__ */ new Set()
		}, e[pi] = t), t;
	}(e);
	if (r.installs.size === 0) {
		let t = vi.bind(e);
		e.addEventListener("message", t, !0), r.dispose = () => {
			e.removeEventListener("message", t, !0);
		};
	}
	if (r.installs.add(t), n) {
		let e = r.editors.get(n) || /* @__PURE__ */ new Set();
		e.add(t), r.editors.set(n, e);
	}
	return hi.bind(null, e, r, t, n);
}
function hi(e, t, n, r) {
	if (r) {
		let e = t.editors.get(r);
		e && e.delete(n) && e.size === 0 && t.editors.delete(r);
	}
	t.installs.delete(n) && t.installs.size === 0 && (t.dispose(), delete e[pi]);
}
function gi(e) {
	return e && e.ownerDocument.defaultView;
}
function _i(e) {
	let t = Rt(() => gi(e.getRootElement()), (t) => e.registerRootListener((e) => {
		t.value = gi(e);
	}));
	return Nt(() => {
		let n = t.value;
		if (n) return mi(n, Symbol("@lexical/dragon/editorInstall"), e);
	});
}
function vi(e) {
	if (e.origin !== this.location.origin) return;
	let t = function(e) {
		let t = e[pi];
		if (t === void 0) return null;
		let n = ke(de(e.document));
		return Ce(n) && t.editors.has(n) ? n : null;
	}(this);
	if (t === null) return;
	let n = e.data;
	if (typeof n == "string") {
		let r;
		try {
			r = JSON.parse(n);
		} catch {
			return;
		}
		if (r && r.protocol === "nuanria_messaging" && r.type === "request") {
			let n = r.payload;
			if (n && n.functionId === "makeChanges") {
				let r = n.args;
				if (Array.isArray(r)) {
					let [n, i, a, o, s, c] = r;
					if (![
						n,
						i,
						o,
						s
					].every(Number.isFinite) || typeof a != "string" && a !== -1) return;
					t.update(() => {
						let t = O();
						if (C(t)) {
							let r = t.anchor, l = r.getNode(), u = 0, d = 0;
							if (_(l) && n >= 0 && i >= 0 && (u = n, d = n + i, t.setTextNodeRange(l, u, l, d)), typeof a != "string" || u === d && a === "" || (t.insertRawText(a), l = r.getNode()), _(l)) {
								let e = l.getTextContentSize();
								u = Math.min(Math.max(o, 0), e), d = o < 0 || s < 0 ? u : Math.min(o + s, e), t.setTextNodeRange(l, u, l, d);
							}
							if (typeof c == "string" && s > 0 && !t.isCollapsed()) {
								let e = fi[c];
								e !== void 0 && t.formatText(e);
							}
							e.stopImmediatePropagation();
						}
					});
				}
			}
		}
	}
}
//#endregion
//#region node_modules/@lexical/history/dist/LexicalHistory.prod.mjs
function yi(e, t, n, r, i) {
	if (e === null || n.size === 0 && r.size === 0 && !i) return 0;
	let a = t._selection, o = e._selection;
	if (i) return 1;
	if (!(C(a) && C(o) && o.isCollapsed() && a.isCollapsed())) return 0;
	let s = function(e, t, n) {
		let r = e._nodeMap, i = [];
		for (let e of t) {
			let t = r.get(e);
			t !== void 0 && i.push(t);
		}
		for (let [e, t] of n) {
			if (!t) continue;
			let n = r.get(e);
			n === void 0 || Qe(n) || i.push(n);
		}
		return i;
	}(t, n, r);
	if (s.length === 0) return 0;
	if (s.length > 1) {
		let n = t._nodeMap, r = n.get(a.anchor.key), i = n.get(o.anchor.key);
		return r && i && !e._nodeMap.has(r.__key) && _(r) && r.__text.length === 1 && a.anchor.offset === 1 ? 2 : 0;
	}
	let c = s[0], l = e._nodeMap.get(c.__key);
	if (!_(l) || !_(c) || l.__mode !== c.__mode) return 0;
	let u = l.__text, d = c.__text;
	if (u === d) return 0;
	let f = a.anchor, p = o.anchor;
	if (f.key !== p.key || f.type !== "text") return 0;
	let m = f.offset, h = p.offset, g = d.length - u.length;
	return g === 1 && h === m - 1 ? 2 : g === -1 && h === m + 1 ? 3 : g === -1 && h === m ? 4 : 0;
}
function bi(e, t, n) {
	let r = n(), i = 0, a = r, o = 0, s = null;
	return (c, l, u, d, f, p) => {
		let m = n();
		if (p.has("composition-start") && (a = r, o = i, s = c), p.has("historic")) return i = 0, r = m, 2;
		p.has("composition-end") && s && (r = a, i = o, c = s);
		let h = p.has("paste") || p.has("cut") ? 0 : yi(c, l, d, f, e.isComposing()), g = (() => {
			let n = u === null || u.editor === e, a = p.has(We);
			if (!a && n && p.has("history-merge")) return 0;
			if (h === 1) return 2;
			if (c === null) return 1;
			let o = l._selection;
			if (!(d.size > 0 || f.size > 0)) return o === null ? 2 : 0;
			let s = typeof t == "number" ? t : t.peek();
			return !1 === a && h !== 0 && h === i && m < r + s && n || d.size === 1 && function(e, t, n) {
				let r = t._nodeMap.get(e), i = n._nodeMap.get(e), a = t._selection, o = n._selection;
				return !(C(a) && C(o) && a.anchor.type === "element" && a.focus.type === "element" && o.anchor.type === "text" && o.focus.type === "text" || !_(r) || !_(i) || r.__parent !== i.__parent) && JSON.stringify(t.read(() => r.exportJSON())) === JSON.stringify(n.read(() => i.exportJSON()));
			}(Array.from(d)[0], c, l) ? 0 : 1;
		})();
		return r = m, i = h, g;
	};
}
function xi(e, t) {
	e.undoStack = [], e.redoStack = [], e.current = null, t && t(e);
}
function Si(e, t, n, r = Date.now, i, a = null) {
	let o = bi(e, n, r), s = () => {
		i && i(t);
	};
	return s(), S(e.registerCommand(pe, () => (function(e, t, n) {
		let r = t.redoStack, i = t.undoStack;
		if (i.length !== 0) {
			let a = t.current, o = i.pop();
			a !== null && (r.push(a), e.dispatchCommand(x, !0)), i.length === 0 && e.dispatchCommand(k, !1), t.current = o || null, n && n(t), o && o.editor.setEditorState(o.editorState, { tag: "historic" });
		}
	}(e, t, i), !0), 0), e.registerCommand(Ue, () => (function(e, t, n) {
		let r = t.redoStack, i = t.undoStack;
		if (r.length !== 0) {
			let a = t.current;
			a !== null && (i.push(a), e.dispatchCommand(k, !0));
			let o = r.pop();
			r.length === 0 && e.dispatchCommand(x, !1), t.current = o || null, n && n(t), o && o.editor.setEditorState(o.editorState, { tag: "historic" });
		}
	}(e, t, i), !0), 0), e.registerCommand(Me, () => (xi(t, i), !1), 0), e.registerCommand(Te, () => (xi(t, i), e.dispatchCommand(x, !1), e.dispatchCommand(k, !1), !0), 0), e.registerUpdateListener(({ editorState: n, prevEditorState: r, dirtyLeaves: i, dirtyElements: c, tags: l }) => {
		let u = t.current, d = t.redoStack, f = t.undoStack, p = u === null ? null : u.editorState;
		if (u !== null && n === p) return;
		let m = o(r, n, u, i, c, l);
		if (m === 1) {
			if (d.length !== 0 && (t.redoStack = [], e.dispatchCommand(x, !1)), u !== null) {
				f.push({ ...u });
				let t = typeof a == "number" || a === null ? a : a.peek();
				t !== null && f.length > t && f.splice(0, f.length - t), e.dispatchCommand(k, !0);
			}
		} else if (m === 2) return;
		t.current = {
			editor: e,
			editorState: n
		}, s();
	}));
}
function Ci() {
	return {
		current: null,
		redoStack: [],
		undoStack: []
	};
}
Date.now;
//#endregion
//#region node_modules/@lexical/react/dist/LexicalHistoryPlugin.prod.mjs
function wi({ delay: e, externalHistoryState: t }) {
	let [n] = Ke();
	return function(e, t, n = 1e3) {
		let r = _t(() => t || Ci(), [t]);
		ht(() => Si(e, r, n), [
			n,
			e,
			r
		]);
	}(n, t, e), null;
}
//#endregion
//#region src/context/SharedHistoryContext.tsx
var Ti = dt({}), Ei = ({ children: e }) => {
	let t = _t(() => ({ historyState: Ci() }), []);
	return /* @__PURE__ */ j(Ti.Provider, {
		value: t,
		children: e
	});
}, Di = () => mt(Ti);
//#endregion
//#region src/utils/zoomCompensation.ts
function Oi(e) {
	return Number.isFinite(e) && e > 0 ? e : 1;
}
function ki(e, t) {
	try {
		return ot(e, t);
	} catch {
		return 1;
	}
}
function Ai(e) {
	return Oi(ki(e, !0));
}
function ji(e) {
	return Oi(ki(e, !0) / ki(e, !1));
}
//#endregion
//#region src/ui/ContentEditable.tsx
function Mi({ className: e, "data-test-id": t, onFocus: n, onPointerDownCapture: r, placeholder: i, placeholderClassName: a }) {
	return /* @__PURE__ */ j(Dn, {
		className: e ?? "ContentEditable__root",
		"aria-placeholder": i,
		onFocus: n,
		onPointerDownCapture: r,
		...t ? { "data-test-id": t } : {},
		placeholder: /* @__PURE__ */ j("div", {
			className: a ?? "ContentEditable__placeholder",
			children: i
		})
	});
}
//#endregion
export { mr as A, Et as B, gr as C, Er as D, pr as E, vn as F, mn as G, Nt as H, bn as I, pn as J, sn as K, _n as L, Mn as M, jn as N, Rn as O, Dn as P, Sn as R, yr as S, hr as T, un as U, Pt as V, dn as W, It as X, K as Y, Wr as _, Di as a, _r as b, ri as c, si as d, Zr as f, Kr as g, qr as h, Ei as i, kr as j, or as k, $r as l, Fr as m, ji as n, wi as o, Qr as p, cn as q, Ai as r, _i as s, Mi as t, oi as u, Yr as v, dr as w, jr as x, Dr as y, gn as z };
