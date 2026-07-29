import { I as e, Pr as t, Yr as n, jt as r, rr as i } from "./Lexical.prod-DYDuARMX.mjs";
import { _ as a, b as o, c as s, d as c, f as l, g as u, h as d, m as f, p, u as m, v as h, y as g } from "./floating-ui.react-dom-BeZWIt74.mjs";
import * as _ from "react";
import { useLayoutEffect as v } from "react";
import { Fragment as y, jsx as b, jsxs as x } from "react/jsx-runtime";
import * as S from "react-dom";
//#region src/nodes/DateTimeNode/DateTimeNode.tsx
var C = _.lazy(() => import("./DateTimeComponent-Ccr8TZvl.mjs")), w = (e) => {
	if (e === void 0) return "";
	let t = e?.getHours(), n = e?.getMinutes();
	return e.toDateString() + (t === 0 && n === 0 ? "" : ` ${t.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`);
};
function T(e) {
	let t = e.getAttribute("data-lexical-datetime");
	if (t) return { node: O(new Date(Date.parse(t))) };
	let n = e.getAttribute("data-rich-links");
	if (!n) return null;
	let r = JSON.parse(n), i = Date.parse(r?.dat_df?.dfie_dt || "");
	return isNaN(i) ? null : { node: O(new Date(i)) };
}
var E = i("dateTime", {
	parse: (e) => new Date(e),
	unparse: (e) => e.toISOString()
}), D = class extends e {
	$config() {
		return this.config("datetime", {
			extends: e,
			importDOM: t({ span: (e) => e.getAttribute("data-lexical-datetime") !== null || e.getAttribute("data-rich-links") !== null && JSON.parse(e.getAttribute("data-rich-links") || "{}").type === "date" ? {
				conversion: T,
				priority: 2
			} : null }),
			stateConfigs: [{
				flat: !0,
				stateConfig: E
			}]
		});
	}
	getDateTime() {
		return n(this, E);
	}
	setDateTime(e) {
		return r(this, E, e);
	}
	getTextContent() {
		return w(this.getDateTime());
	}
	exportDOM() {
		let e = document.createElement("span");
		return e.textContent = w(this.getDateTime()), e.setAttribute("data-lexical-datetime", this.getDateTime()?.toString() || ""), { element: e };
	}
	createDOM() {
		let e = document.createElement("span");
		return e.setAttribute("data-lexical-datetime", this.getDateTime()?.toString() || ""), e.style.display = "inline-block", e;
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	decorate() {
		return /* @__PURE__ */ b(C, {
			dateTime: this.getDateTime(),
			nodeKey: this.__key
		});
	}
};
function O(e) {
	return new D().setDateTime(e);
}
function k(e) {
	return e instanceof D;
}
var A = /* #__PURE__ */ [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
].join(","), j = typeof Element > "u", M = j ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, N = !j && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, P = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : P(e.parentNode));
}, F = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, I = function(e, t, n) {
	if (P(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(A));
	return t && M.call(e, A) && r.unshift(e), r = r.filter(n), r;
}, L = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!P(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = L(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			M.call(a, A) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !P(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = L(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, ee = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, R = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || F(e)) && !ee(e) ? 0 : e.tabIndex;
}, te = function(e, t) {
	var n = R(e);
	return n < 0 && t && !ee(e) ? 0 : n;
}, z = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, B = function(e) {
	return e.tagName === "INPUT";
}, V = function(e) {
	return B(e) && e.type === "hidden";
}, H = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, U = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, W = function(e) {
	if (!e.name) return !0;
	var t = e.form || N(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = U(r, e.form);
	return !i || i === e;
}, ne = function(e) {
	return B(e) && e.type === "radio";
}, re = function(e) {
	return ne(e) && !W(e);
}, ie = function(e) {
	var t = e && N(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = N(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, ae = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, oe = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	var i = getComputedStyle(e).visibility;
	if (i === "hidden" || i === "collapse") return !0;
	var a = M.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (M.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = N(e);
				if (s && !s.shadowRoot && r(s) === !0) return ae(e);
				e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
			}
			e = o;
		}
		if (ie(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return ae(e);
	return !1;
}, se = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return M.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, ce = function(e, t) {
	return !(t.disabled || V(t) || oe(t, e) || H(t) || se(t));
}, le = function(e, t) {
	return !(re(t) || R(t) < 0 || !ce(e, t));
}, ue = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, de = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = te(a, i), s = i ? de(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(z).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, fe = function(e, t) {
	return t ||= {}, de(t.getShadowRoot ? L([e], t.includeContainer, {
		filter: le.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: ue
	}) : I(e, t.includeContainer, le.bind(null, t)));
}, pe = function(e, t) {
	return t ||= {}, t.getShadowRoot ? L([e], t.includeContainer, {
		filter: ce.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : I(e, t.includeContainer, ce.bind(null, t));
}, me = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return M.call(e, A) !== !1 && le(t, e);
};
//#endregion
//#region node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function he() {
	let e = navigator.userAgentData;
	return e != null && e.platform ? e.platform : navigator.platform;
}
function ge() {
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map((e) => {
		let { brand: t, version: n } = e;
		return t + "/" + n;
	}).join(" ") : navigator.userAgent;
}
function _e() {
	return /apple/i.test(navigator.vendor);
}
function ve() {
	let e = /android/i;
	return e.test(he()) || e.test(ge());
}
function ye() {
	return ge().includes("jsdom/");
}
var be = "data-floating-ui-focusable", xe = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", Se = "ArrowLeft", Ce = "ArrowRight", we = "ArrowUp", Te = "ArrowDown";
function G(e) {
	let t = e.activeElement;
	for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null;) {
		var n;
		t = t.shadowRoot.activeElement;
	}
	return t;
}
function K(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode == null ? void 0 : t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && h(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Ee(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function De(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function Oe(e) {
	return e.matches("html,body");
}
function q(e) {
	return e?.ownerDocument || document;
}
function ke(e) {
	return d(e) && e.matches(xe);
}
function Ae(e) {
	return e ? e.getAttribute("role") === "combobox" && ke(e) : !1;
}
function je(e) {
	return e ? e.hasAttribute(be) ? e : e.querySelector("[data-floating-ui-focusable]") || e : null;
}
function Me(e, t, n) {
	return n === void 0 && (n = !0), e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Me(e, t.id, n)]);
}
function Ne(e, t) {
	let n, r = -1;
	function i(t, a) {
		a > r && (n = t, r = a), Me(e, t).forEach((e) => {
			i(e.id, a + 1);
		});
	}
	return i(t, 0), e.find((e) => e.id === n);
}
function Pe(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
function J(e) {
	e.preventDefault(), e.stopPropagation();
}
function Fe(e) {
	return "nativeEvent" in e;
}
function Ie(e) {
	return e.mozInputSource === 0 && e.isTrusted ? !0 : ve() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Le(e) {
	return ye() ? !1 : !ve() && e.width === 0 && e.height === 0 || ve() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
var Y = typeof document < "u" ? v : function() {}, Re = { ..._ };
function X(e) {
	let t = _.useRef(e);
	return Y(() => {
		t.current = e;
	}), t;
}
var ze = Re.useInsertionEffect || ((e) => e());
function Z(e) {
	let t = _.useRef(() => {
		if (process.env.NODE_ENV !== "production") throw Error("Cannot call an event handler while rendering.");
	});
	return ze(() => {
		t.current = e;
	}), _.useCallback(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function Be(e, t, n) {
	return Math.floor(e / t) !== n;
}
function Ve(e, t) {
	return t < 0 || t >= e.current.length;
}
function He(e, t) {
	return Q(e, { disabledIndices: t });
}
function Ue(e, t) {
	return Q(e, {
		decrement: !0,
		startingIndex: e.current.length,
		disabledIndices: t
	});
}
function Q(e, t) {
	let { startingIndex: n = -1, decrement: r = !1, disabledIndices: i, amount: a = 1 } = t === void 0 ? {} : t, o = n;
	do
		o += r ? -a : a;
	while (o >= 0 && o <= e.current.length - 1 && Je(e, o, i));
	return o;
}
function We(e, t) {
	let { event: n, orientation: r, loop: i, rtl: a, cols: s, disabledIndices: c, minIndex: l, maxIndex: u, prevIndex: d, stopEvent: f = !1 } = t, p = d;
	if (n.key === we) {
		if (f && J(n), d === -1) p = u;
		else if (p = Q(e, {
			startingIndex: p,
			amount: s,
			decrement: !0,
			disabledIndices: c
		}), i && (d - s < l || p < 0)) {
			let e = d % s, t = u % s, n = u - (t - e);
			p = t === e ? u : t > e ? n : n - s;
		}
		Ve(e, p) && (p = d);
	}
	if (n.key === Te && (f && J(n), d === -1 ? p = l : (p = Q(e, {
		startingIndex: d,
		amount: s,
		disabledIndices: c
	}), i && d + s > u && (p = Q(e, {
		startingIndex: d % s - s,
		amount: s,
		disabledIndices: c
	}))), Ve(e, p) && (p = d)), r === "both") {
		let t = o(d / s);
		n.key === (a ? Se : Ce) && (f && J(n), d % s === s - 1 ? i && (p = Q(e, {
			startingIndex: d - d % s - 1,
			disabledIndices: c
		})) : (p = Q(e, {
			startingIndex: d,
			disabledIndices: c
		}), i && Be(p, s, t) && (p = Q(e, {
			startingIndex: d - d % s - 1,
			disabledIndices: c
		}))), Be(p, s, t) && (p = d)), n.key === (a ? Ce : Se) && (f && J(n), d % s === 0 ? i && (p = Q(e, {
			startingIndex: d + (s - d % s),
			decrement: !0,
			disabledIndices: c
		})) : (p = Q(e, {
			startingIndex: d,
			decrement: !0,
			disabledIndices: c
		}), i && Be(p, s, t) && (p = Q(e, {
			startingIndex: d + (s - d % s),
			decrement: !0,
			disabledIndices: c
		}))), Be(p, s, t) && (p = d));
		let r = o(u / s) === t;
		Ve(e, p) && (p = i && r ? n.key === (a ? Ce : Se) ? u : Q(e, {
			startingIndex: d - d % s - 1,
			disabledIndices: c
		}) : d);
	}
	return p;
}
function Ge(e, t, n) {
	let r = [], i = 0;
	return e.forEach((e, a) => {
		let { width: o, height: s } = e;
		if (o > t && process.env.NODE_ENV !== "production") throw Error("[Floating UI]: Invalid grid - item width at index " + a + " is greater than grid columns");
		let c = !1;
		for (n && (i = 0); !c;) {
			let e = [];
			for (let n = 0; n < o; n++) for (let r = 0; r < s; r++) e.push(i + n + r * t);
			i % t + o <= t && e.every((e) => r[e] == null) ? (e.forEach((e) => {
				r[e] = a;
			}), c = !0) : i++;
		}
	}), [...r];
}
function Ke(e, t, n, r, i) {
	if (e === -1) return -1;
	let a = n.indexOf(e), o = t[e];
	switch (i) {
		case "tl": return a;
		case "tr": return o ? a + o.width - 1 : a;
		case "bl": return o ? a + (o.height - 1) * r : a;
		case "br": return n.lastIndexOf(e);
	}
}
function qe(e, t) {
	return t.flatMap((t, n) => e.includes(t) ? [n] : []);
}
function Je(e, t, n) {
	if (typeof n == "function") return n(t);
	if (n) return n.includes(t);
	let r = e.current[t];
	return r == null || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
}
var Ye = () => ({
	getShadowRoot: !0,
	displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function Xe(e, t) {
	let n = fe(e, Ye()), r = n.length;
	if (r === 0) return;
	let i = G(q(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function Ze(e) {
	return Xe(q(e).body, 1) || e;
}
function Qe(e) {
	return Xe(q(e).body, -1) || e;
}
function $e(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !K(n, r);
}
function et(e) {
	fe(e, Ye()).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function tt(e) {
	e.querySelectorAll("[data-tabindex]").forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
//#endregion
//#region node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var nt = "data-floating-ui-focusable", rt = "active", it = "selected", at = "ArrowLeft", ot = "ArrowRight", st = "ArrowUp", ct = "ArrowDown", lt = [at, ot], ut = [st, ct];
[...lt, ...ut];
var dt = { ..._ }, ft = !1, pt = 0, mt = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + pt++;
function ht() {
	let [e, t] = _.useState(() => ft ? mt() : void 0);
	return Y(() => {
		e ?? t(mt());
	}, []), _.useEffect(() => {
		ft = !0;
	}, []), e;
}
var gt = dt.useId || ht, _t;
process.env.NODE_ENV !== "production" && (_t = /*#__PURE__*/ new Set());
function vt() {
	var e;
	let t = "Floating UI: " + [...arguments].join(" ");
	if (!((e = _t) != null && e.has(t))) {
		var n;
		(n = _t) == null || n.add(t), console.warn(t);
	}
}
function yt() {
	var e;
	let t = "Floating UI: " + [...arguments].join(" ");
	if (!((e = _t) != null && e.has(t))) {
		var n;
		(n = _t) == null || n.add(t), console.error(t);
	}
}
function bt() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			var r;
			(r = e.get(t)) == null || r.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			var r;
			(r = e.get(t)) == null || r.delete(n);
		}
	};
}
var xt = /*#__PURE__*/ _.createContext(null), St = /*#__PURE__*/ _.createContext(null), Ct = () => _.useContext(xt)?.id || null, wt = () => _.useContext(St);
function Tt(e) {
	return "data-floating-ui-" + e;
}
function Et(e) {
	e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
var Dt = 0;
function Ot(e, t) {
	t === void 0 && (t = {});
	let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
	r && cancelAnimationFrame(Dt);
	let a = () => e?.focus({ preventScroll: n });
	i ? a() : Dt = requestAnimationFrame(a);
}
function kt(e) {
	return e?.ownerDocument || document;
}
var At = {
	inert: /*#__PURE__*/ new WeakMap(),
	"aria-hidden": /*#__PURE__*/ new WeakMap(),
	none: /*#__PURE__*/ new WeakMap()
};
function jt(e) {
	return e === "inert" ? At.inert : e === "aria-hidden" ? At["aria-hidden"] : At.none;
}
var Mt = /*#__PURE__*/ new WeakSet(), Nt = {}, Pt = 0, Ft = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function It(e) {
	return e ? h(e) ? e.host : It(e.parentNode) : null;
}
var Lt = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = It(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null);
function Rt(e, t, n, r) {
	let i = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, o = Lt(t, e), s = /* @__PURE__ */ new Set(), l = new Set(o), u = [];
	Nt[i] || (Nt[i] = /* @__PURE__ */ new WeakMap());
	let d = Nt[i];
	o.forEach(f), p(t), s.clear();
	function f(e) {
		!e || s.has(e) || (s.add(e), e.parentNode && f(e.parentNode));
	}
	function p(e) {
		!e || l.has(e) || [].forEach.call(e.children, (e) => {
			if (c(e) !== "script") if (s.has(e)) p(e);
			else {
				let t = a ? e.getAttribute(a) : null, n = t !== null && t !== "false", r = jt(a), o = (r.get(e) || 0) + 1, s = (d.get(e) || 0) + 1;
				r.set(e, o), d.set(e, s), u.push(e), o === 1 && n && Mt.add(e), s === 1 && e.setAttribute(i, ""), !n && a && e.setAttribute(a, a === "inert" ? "" : "true");
			}
		});
	}
	return Pt++, () => {
		u.forEach((e) => {
			let t = jt(a), n = (t.get(e) || 0) - 1, r = (d.get(e) || 0) - 1;
			t.set(e, n), d.set(e, r), n || (!Mt.has(e) && a && e.removeAttribute(a), Mt.delete(e)), r || e.removeAttribute(i);
		}), Pt--, Pt || (At.inert = /* @__PURE__ */ new WeakMap(), At["aria-hidden"] = /* @__PURE__ */ new WeakMap(), At.none = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakSet(), Nt = {});
	};
}
function zt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let r = kt(e[0]).body;
	return Rt(e.concat(Array.from(r.querySelectorAll("[aria-live],[role=\"status\"],output"))), r, t, n);
}
var Bt = {
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "fixed",
	whiteSpace: "nowrap",
	width: "1px",
	top: 0,
	left: 0
}, Vt = /*#__PURE__*/ _.forwardRef(function(e, t) {
	let [n, r] = _.useState();
	Y(() => {
		_e() && r("button");
	}, []);
	let i = {
		ref: t,
		tabIndex: 0,
		role: n,
		"aria-hidden": !n || void 0,
		[Tt("focus-guard")]: "",
		style: Bt
	};
	return /*#__PURE__*/ b("span", {
		...e,
		...i
	});
}), Ht = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
}, Ut = /*#__PURE__*/ _.createContext(null), Wt = /*#__PURE__*/ Tt("portal");
function Gt(e) {
	e === void 0 && (e = {});
	let { id: t, root: n } = e, r = gt(), i = qt(), [o, s] = _.useState(null), c = _.useRef(null);
	return Y(() => () => {
		o?.remove(), queueMicrotask(() => {
			c.current = null;
		});
	}, [o]), Y(() => {
		if (!r || c.current) return;
		let e = t ? document.getElementById(t) : null;
		if (!e) return;
		let n = document.createElement("div");
		n.id = r, n.setAttribute(Wt, ""), e.appendChild(n), c.current = n, s(n);
	}, [t, r]), Y(() => {
		if (n === null || !r || c.current) return;
		let e = n || i?.portalNode;
		e && !a(e) && (e = e.current), e ||= document.body;
		let o = null;
		t && (o = document.createElement("div"), o.id = t, e.appendChild(o));
		let l = document.createElement("div");
		l.id = r, l.setAttribute(Wt, ""), e = o || e, e.appendChild(l), c.current = l, s(l);
	}, [
		t,
		n,
		r,
		i
	]), o;
}
function Kt(e) {
	let { children: t, id: n, root: r, preserveTabOrder: i = !0 } = e, a = Gt({
		id: n,
		root: r
	}), [o, s] = _.useState(null), c = _.useRef(null), l = _.useRef(null), u = _.useRef(null), d = _.useRef(null), f = o?.modal, p = o?.open, m = !!o && !o.modal && o.open && i && !!(r || a);
	return _.useEffect(() => {
		if (!a || !i || f) return;
		function e(e) {
			a && $e(e) && (e.type === "focusin" ? tt : et)(a);
		}
		return a.addEventListener("focusin", e, !0), a.addEventListener("focusout", e, !0), () => {
			a.removeEventListener("focusin", e, !0), a.removeEventListener("focusout", e, !0);
		};
	}, [
		a,
		i,
		f
	]), _.useEffect(() => {
		a && (p || tt(a));
	}, [p, a]), /*#__PURE__*/ x(Ut.Provider, {
		value: _.useMemo(() => ({
			preserveTabOrder: i,
			beforeOutsideRef: c,
			afterOutsideRef: l,
			beforeInsideRef: u,
			afterInsideRef: d,
			portalNode: a,
			setFocusManagerState: s
		}), [i, a]),
		children: [
			m && a && /*#__PURE__*/ b(Vt, {
				"data-type": "outside",
				ref: c,
				onFocus: (e) => {
					if ($e(e, a)) {
						var t;
						(t = u.current) == null || t.focus();
					} else Qe(o ? o.domReference : null)?.focus();
				}
			}),
			m && a && /*#__PURE__*/ b("span", {
				"aria-owns": a.id,
				style: Ht
			}),
			a && /*#__PURE__*/ S.createPortal(t, a),
			m && a && /*#__PURE__*/ b(Vt, {
				"data-type": "outside",
				ref: l,
				onFocus: (e) => {
					if ($e(e, a)) {
						var t;
						(t = d.current) == null || t.focus();
					} else Ze(o ? o.domReference : null)?.focus(), o != null && o.closeOnFocusOut && o?.onOpenChange(!1, e.nativeEvent, "focus-out");
				}
			})
		]
	});
}
var qt = () => _.useContext(Ut);
function Jt(e) {
	return _.useMemo(() => (t) => {
		e.forEach((e) => {
			e && (e.current = t);
		});
	}, e);
}
var Yt = 20, $ = [];
function Xt() {
	$ = $.filter((e) => e.deref()?.isConnected);
}
function Zt(e) {
	Xt(), e && c(e) !== "body" && ($.push(new WeakRef(e)), $.length > Yt && ($ = $.slice(-20)));
}
function Qt() {
	return Xt(), $[$.length - 1]?.deref();
}
function $t(e) {
	let t = Ye();
	return me(e, t) ? e : fe(e, t)[0] || e;
}
function en(e, t) {
	var n;
	if (!t.current.includes("floating") && !((n = e.getAttribute("role")) != null && n.includes("dialog"))) return;
	let r = Ye(), i = pe(e, r).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return me(e, r) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), a = e.getAttribute("tabindex");
	t.current.includes("floating") || i.length === 0 ? a !== "0" && e.setAttribute("tabindex", "0") : (a !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
var tn = /*#__PURE__*/ _.forwardRef(function(e, t) {
	return /*#__PURE__*/ b("button", {
		...e,
		type: "button",
		ref: t,
		tabIndex: -1,
		style: Bt
	});
});
function nn(e) {
	let { context: t, children: n, disabled: r = !1, order: i = ["content"], guards: a = !0, initialFocus: o = 0, returnFocus: s = !0, restoreFocus: c = !1, modal: l = !0, visuallyHiddenDismiss: u = !1, closeOnFocusOut: f = !0, outsideElementsInert: p = !1, getInsideElements: m = () => [] } = e, { open: h, onOpenChange: g, events: v, dataRef: S, elements: { domReference: C, floating: w } } = t, T = Z(() => S.current.floatingContext?.nodeId), E = Z(m), D = typeof o == "number" && o < 0, O = Ae(C) && D, k = Ft(), A = !k || a, j = !A || k && p, M = X(i), N = X(o), P = X(s), F = wt(), I = qt(), L = _.useRef(null), ee = _.useRef(null), R = _.useRef(!1), te = _.useRef(!1), z = _.useRef(-1), B = _.useRef(-1), V = I != null, H = je(w), U = Z(function(e) {
		return e === void 0 && (e = H), e ? fe(e, Ye()) : [];
	}), W = Z((e) => {
		let t = U(e);
		return M.current.map((e) => C && e === "reference" ? C : H && e === "floating" ? H : t).filter(Boolean).flat();
	});
	_.useEffect(() => {
		if (r || !l) return;
		function e(e) {
			if (e.key === "Tab") {
				K(H, G(q(H))) && U().length === 0 && !O && J(e);
				let t = W(), n = Ee(e);
				M.current[0] === "reference" && n === C && (J(e), e.shiftKey ? Ot(t[t.length - 1]) : Ot(t[1])), M.current[1] === "floating" && n === H && e.shiftKey && (J(e), Ot(t[0]));
			}
		}
		let t = q(H);
		return t.addEventListener("keydown", e), () => {
			t.removeEventListener("keydown", e);
		};
	}, [
		r,
		C,
		H,
		l,
		M,
		O,
		U,
		W
	]), _.useEffect(() => {
		if (r || !w) return;
		function e(e) {
			let t = Ee(e), n = U().indexOf(t);
			n !== -1 && (z.current = n);
		}
		return w.addEventListener("focusin", e), () => {
			w.removeEventListener("focusin", e);
		};
	}, [
		r,
		w,
		U
	]), _.useEffect(() => {
		if (r || !f) return;
		function e() {
			te.current = !0, setTimeout(() => {
				te.current = !1;
			});
		}
		function t(e) {
			let t = e.relatedTarget, n = e.currentTarget, r = Ee(e);
			queueMicrotask(() => {
				let i = T(), a = !(K(C, t) || K(w, t) || K(t, w) || K(I?.portalNode, t) || t != null && t.hasAttribute(Tt("focus-guard")) || F && (Me(F.nodesRef.current, i).find((e) => K(e.context?.elements.floating, t) || K(e.context?.elements.domReference, t)) || Pe(F.nodesRef.current, i).find((e) => [e.context?.elements.floating, je(e.context?.elements.floating)].includes(t) || e.context?.elements.domReference === t)));
				if (n === C && H && en(H, M), c && n !== C && !(r != null && r.isConnected) && G(q(H)) === q(H).body) {
					d(H) && H.focus();
					let e = z.current, t = U(), n = t[e] || t[t.length - 1] || H;
					d(n) && n.focus();
				}
				if (S.current.insideReactTree) {
					S.current.insideReactTree = !1;
					return;
				}
				(O || !l) && t && a && !te.current && t !== Qt() && (R.current = !0, g(!1, e, "focus-out"));
			});
		}
		let n = !!(!F && I);
		function i() {
			Et(B), S.current.insideReactTree = !0, B.current = window.setTimeout(() => {
				S.current.insideReactTree = !1;
			});
		}
		if (w && d(C)) return C.addEventListener("focusout", t), C.addEventListener("pointerdown", e), w.addEventListener("focusout", t), n && w.addEventListener("focusout", i, !0), () => {
			C.removeEventListener("focusout", t), C.removeEventListener("pointerdown", e), w.removeEventListener("focusout", t), n && w.removeEventListener("focusout", i, !0);
		};
	}, [
		r,
		C,
		w,
		H,
		l,
		F,
		I,
		g,
		f,
		c,
		U,
		O,
		T,
		M,
		S
	]);
	let ne = _.useRef(null), re = _.useRef(null), ie = Jt([ne, I?.beforeInsideRef]), ae = Jt([re, I?.afterInsideRef]);
	_.useEffect(() => {
		var e, t;
		if (r || !w) return;
		let n = Array.from((I == null || (e = I.portalNode) == null ? void 0 : e.querySelectorAll("[" + Tt("portal") + "]")) || []), i = (t = (F ? Pe(F.nodesRef.current, T()) : []).find((e) => Ae(e.context?.elements.domReference || null))) == null || (t = t.context) == null ? void 0 : t.elements.domReference, a = [
			w,
			i,
			...n,
			...E(),
			L.current,
			ee.current,
			ne.current,
			re.current,
			I?.beforeOutsideRef.current,
			I?.afterOutsideRef.current,
			M.current.includes("reference") || O ? C : null
		].filter((e) => e != null), o = l || O ? zt(a, !j, j) : zt(a);
		return () => {
			o();
		};
	}, [
		r,
		C,
		w,
		l,
		M,
		I,
		O,
		A,
		j,
		F,
		T,
		E
	]), Y(() => {
		if (r || !d(H)) return;
		let e = G(q(H));
		queueMicrotask(() => {
			let t = W(H), n = N.current, r = (typeof n == "number" ? t[n] : n.current) || H, i = K(H, e);
			!D && !i && h && Ot(r, { preventScroll: r === H });
		});
	}, [
		r,
		h,
		H,
		D,
		W,
		N
	]), Y(() => {
		if (r || !H) return;
		let e = q(H);
		Zt(G(e));
		function t(e) {
			let { reason: t, event: n, nested: r } = e;
			if (["hover", "safe-polygon"].includes(t) && n.type === "mouseleave" && (R.current = !0), t === "outside-press") if (r) R.current = !1;
			else if (Ie(n) || Le(n)) R.current = !1;
			else {
				let e = !1;
				document.createElement("div").focus({ get preventScroll() {
					return e = !0, !1;
				} }), e ? R.current = !1 : R.current = !0;
			}
		}
		v.on("openchange", t);
		let n = e.createElement("span");
		n.setAttribute("tabindex", "-1"), n.setAttribute("aria-hidden", "true"), Object.assign(n.style, Bt), V && C && C.insertAdjacentElement("afterend", n);
		function i() {
			if (typeof P.current == "boolean") {
				let e = C || Qt();
				return e && e.isConnected ? e : n;
			}
			return P.current.current || n;
		}
		return () => {
			v.off("openchange", t);
			let r = G(e), a = K(w, r) || F && Me(F.nodesRef.current, T(), !1).some((e) => K(e.context?.elements.floating, r)), o = i();
			queueMicrotask(() => {
				let t = $t(o);
				P.current && !R.current && d(t) && (!(t !== r && r !== e.body) || a) && t.focus({ preventScroll: !0 }), n.remove();
			});
		};
	}, [
		r,
		w,
		H,
		P,
		S,
		v,
		F,
		V,
		C,
		T
	]), _.useEffect(() => (queueMicrotask(() => {
		R.current = !1;
	}), () => {
		queueMicrotask(Xt);
	}), [r]), Y(() => {
		if (!r && I) return I.setFocusManagerState({
			modal: l,
			closeOnFocusOut: f,
			open: h,
			onOpenChange: g,
			domReference: C
		}), () => {
			I.setFocusManagerState(null);
		};
	}, [
		r,
		I,
		l,
		h,
		g,
		f,
		C
	]), Y(() => {
		r || H && en(H, M);
	}, [
		r,
		H,
		M
	]);
	function oe(e) {
		return r || !u || !l ? null : /*#__PURE__*/ b(tn, {
			ref: e === "start" ? L : ee,
			onClick: (e) => g(!1, e.nativeEvent),
			children: typeof u == "string" ? u : "Dismiss"
		});
	}
	let se = !r && A && (!l || !O) && (V || l);
	return /*#__PURE__*/ x(y, { children: [
		se && /*#__PURE__*/ b(Vt, {
			"data-type": "inside",
			ref: ie,
			onFocus: (e) => {
				if (l) {
					let e = W();
					Ot(i[0] === "reference" ? e[0] : e[e.length - 1]);
				} else if (I != null && I.preserveTabOrder && I.portalNode) if (R.current = !1, $e(e, I.portalNode)) Ze(C)?.focus();
				else {
					var t;
					(t = I.beforeOutsideRef.current) == null || t.focus();
				}
			}
		}),
		!O && oe("start"),
		n,
		oe("end"),
		se && /*#__PURE__*/ b(Vt, {
			"data-type": "inside",
			ref: ae,
			onFocus: (e) => {
				if (l) Ot(W()[0]);
				else if (I != null && I.preserveTabOrder && I.portalNode) if (f && (R.current = !0), $e(e, I.portalNode)) Qe(C)?.focus();
				else {
					var t;
					(t = I.afterOutsideRef.current) == null || t.focus();
				}
			}
		})
	] });
}
var rn = 0, an = "--floating-ui-scrollbar-width";
function on() {
	let e = he(), t = /iP(hone|ad|od)|iOS/.test(e) || e === "MacIntel" && navigator.maxTouchPoints > 1, n = document.body.style, r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", i = window.innerWidth - document.documentElement.clientWidth, a = n.left ? parseFloat(n.left) : window.scrollX, o = n.top ? parseFloat(n.top) : window.scrollY;
	if (n.overflow = "hidden", n.setProperty(an, i + "px"), i && (n[r] = i + "px"), t) {
		let e = window.visualViewport?.offsetLeft || 0, t = window.visualViewport?.offsetTop || 0;
		Object.assign(n, {
			position: "fixed",
			top: -(o - Math.floor(t)) + "px",
			left: -(a - Math.floor(e)) + "px",
			right: "0"
		});
	}
	return () => {
		Object.assign(n, {
			overflow: "",
			[r]: ""
		}), n.removeProperty(an), t && (Object.assign(n, {
			position: "",
			top: "",
			left: "",
			right: ""
		}), window.scrollTo(a, o));
	};
}
var sn = () => {}, cn = /*#__PURE__*/ _.forwardRef(function(e, t) {
	let { lockScroll: n = !1, ...r } = e;
	return Y(() => {
		if (n) return rn++, rn === 1 && (sn = on()), () => {
			rn--, rn === 0 && sn();
		};
	}, [n]), /*#__PURE__*/ b("div", {
		ref: t,
		...r,
		style: {
			position: "fixed",
			overflow: "auto",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...r.style
		}
	});
}), ln = {
	pointerdown: "onPointerDown",
	mousedown: "onMouseDown",
	click: "onClick"
}, un = {
	pointerdown: "onPointerDownCapture",
	mousedown: "onMouseDownCapture",
	click: "onClickCapture"
}, dn = (e) => ({
	escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
	outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
});
function fn(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, elements: i, dataRef: a } = e, { enabled: o = !0, escapeKey: s = !0, outsidePress: c = !0, outsidePressEvent: h = "pointerdown", referencePress: v = !1, referencePressEvent: y = "pointerdown", ancestorScroll: b = !1, bubbles: x, capture: S } = t, C = wt(), w = Z(typeof c == "function" ? c : () => !1), T = typeof c == "function" ? w : c, E = _.useRef(!1), { escapeKey: D, outsidePress: O } = dn(x), { escapeKey: k, outsidePress: A } = dn(S), j = _.useRef(!1), M = Z((e) => {
		if (!n || !o || !s || e.key !== "Escape" || j.current) return;
		let t = a.current.floatingContext?.nodeId, i = C ? Me(C.nodesRef.current, t) : [];
		if (!D && (e.stopPropagation(), i.length > 0)) {
			let e = !0;
			if (i.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		r(!1, Fe(e) ? e.nativeEvent : e, "escape-key");
	}), N = Z((e) => {
		var t;
		let n = () => {
			var t;
			M(e), (t = Ee(e)) == null || t.removeEventListener("keydown", n);
		};
		(t = Ee(e)) == null || t.addEventListener("keydown", n);
	}), P = Z((e) => {
		let t = a.current.insideReactTree;
		a.current.insideReactTree = !1;
		let n = E.current;
		if (E.current = !1, h === "click" && n || t || typeof T == "function" && !T(e)) return;
		let o = Ee(e), s = "[" + Tt("inert") + "]", c = q(i.floating).querySelectorAll(s), l = f(o) ? o : null;
		for (; l && !u(l);) {
			let e = p(l);
			if (u(e) || !f(e)) break;
			l = e;
		}
		if (c.length && f(o) && !Oe(o) && !K(o, i.floating) && Array.from(c).every((e) => !K(l, e))) return;
		if (d(o) && L) {
			let t = u(o), n = m(o), r = /auto|scroll/, i = t || r.test(n.overflowX), a = t || r.test(n.overflowY), s = i && o.clientWidth > 0 && o.scrollWidth > o.clientWidth, c = a && o.clientHeight > 0 && o.scrollHeight > o.clientHeight, l = n.direction === "rtl", d = c && (l ? e.offsetX <= o.offsetWidth - o.clientWidth : e.offsetX > o.clientWidth), f = s && e.offsetY > o.clientHeight;
			if (d || f) return;
		}
		let g = a.current.floatingContext?.nodeId, _ = C && Me(C.nodesRef.current, g).some((t) => De(e, t.context?.elements.floating));
		if (De(e, i.floating) || De(e, i.domReference) || _) return;
		let v = C ? Me(C.nodesRef.current, g) : [];
		if (v.length > 0) {
			let e = !0;
			if (v.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		r(!1, e, "outside-press");
	}), F = Z((e) => {
		var t;
		let n = () => {
			var t;
			P(e), (t = Ee(e)) == null || t.removeEventListener(h, n);
		};
		(t = Ee(e)) == null || t.addEventListener(h, n);
	});
	_.useEffect(() => {
		if (!n || !o) return;
		a.current.__escapeKeyBubbles = D, a.current.__outsidePressBubbles = O;
		let e = -1;
		function t(e) {
			r(!1, e, "ancestor-scroll");
		}
		function c() {
			window.clearTimeout(e), j.current = !0;
		}
		function u() {
			e = window.setTimeout(() => {
				j.current = !1;
			}, g() ? 5 : 0);
		}
		let d = q(i.floating);
		s && (d.addEventListener("keydown", k ? N : M, k), d.addEventListener("compositionstart", c), d.addEventListener("compositionend", u)), T && d.addEventListener(h, A ? F : P, A);
		let p = [];
		return b && (f(i.domReference) && (p = l(i.domReference)), f(i.floating) && (p = p.concat(l(i.floating))), !f(i.reference) && i.reference && i.reference.contextElement && (p = p.concat(l(i.reference.contextElement)))), p = p.filter((e) => e !== d.defaultView?.visualViewport), p.forEach((e) => {
			e.addEventListener("scroll", t);
		}), () => {
			s && (d.removeEventListener("keydown", k ? N : M, k), d.removeEventListener("compositionstart", c), d.removeEventListener("compositionend", u)), T && d.removeEventListener(h, A ? F : P, A), p.forEach((e) => {
				e.removeEventListener("scroll", t);
			}), window.clearTimeout(e);
		};
	}, [
		a,
		i,
		s,
		T,
		h,
		n,
		r,
		b,
		o,
		D,
		O,
		M,
		k,
		N,
		P,
		A,
		F
	]), _.useEffect(() => {
		a.current.insideReactTree = !1;
	}, [
		a,
		T,
		h
	]);
	let I = _.useMemo(() => ({
		onKeyDown: M,
		...v && {
			[ln[y]]: (e) => {
				r(!1, e.nativeEvent, "reference-press");
			},
			...y !== "click" && { onClick(e) {
				r(!1, e.nativeEvent, "reference-press");
			} }
		}
	}), [
		M,
		r,
		v,
		y
	]), L = _.useMemo(() => {
		function e(e) {
			e.button === 0 && (E.current = !0);
		}
		return {
			onKeyDown: M,
			onMouseDown: e,
			onMouseUp: e,
			[un[h]]: () => {
				a.current.insideReactTree = !0;
			}
		};
	}, [
		M,
		h,
		a
	]);
	return _.useMemo(() => o ? {
		reference: I,
		floating: L
	} : {}, [
		o,
		I,
		L
	]);
}
function pn(e) {
	let { open: t = !1, onOpenChange: n, elements: r } = e, i = gt(), a = _.useRef({}), [o] = _.useState(() => bt()), s = Ct() != null;
	if (process.env.NODE_ENV !== "production") {
		let e = r.reference;
		e && !f(e) && yt("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
	}
	let [c, l] = _.useState(r.reference), u = Z((e, t, r) => {
		a.current.openEvent = e ? t : void 0, o.emit("openchange", {
			open: e,
			event: t,
			reason: r,
			nested: s
		}), n?.(e, t, r);
	}), d = _.useMemo(() => ({ setPositionReference: l }), []), p = _.useMemo(() => ({
		reference: c || r.reference || null,
		floating: r.floating || null,
		domReference: r.reference
	}), [
		c,
		r.reference,
		r.floating
	]);
	return _.useMemo(() => ({
		dataRef: a,
		open: t,
		onOpenChange: u,
		elements: p,
		events: o,
		floatingId: i,
		refs: d
	}), [
		t,
		u,
		p,
		o,
		i,
		d
	]);
}
function mn(e) {
	let { elements: t, ...n } = e === void 0 ? {} : e, { nodeId: r } = n, i = pn({
		...n,
		elements: {
			reference: t?.reference ?? null,
			floating: t?.floating ?? null
		}
	}), a = n.rootContext || i, o = a.elements, [c, l] = _.useState(null), [u, d] = _.useState(null), p = o?.domReference || c, m = _.useRef(null), h = wt();
	Y(() => {
		p && (m.current = p);
	}, [p]);
	let g = s({
		...n,
		elements: {
			...o,
			...u && { reference: u }
		}
	}), v = _.useCallback((e) => {
		let t = f(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			getClientRects: () => e.getClientRects(),
			contextElement: e
		} : e;
		d(t), g.refs.setReference(t);
	}, [g.refs]), y = _.useCallback((e) => {
		(f(e) || e === null) && (m.current = e, l(e)), (f(g.refs.reference.current) || g.refs.reference.current === null || e !== null && !f(e)) && g.refs.setReference(e);
	}, [g.refs]), b = _.useMemo(() => ({
		...g.refs,
		setReference: y,
		setPositionReference: v,
		domReference: m
	}), [
		g.refs,
		y,
		v
	]), x = _.useMemo(() => ({
		...g.elements,
		domReference: p
	}), [g.elements, p]), S = _.useMemo(() => ({
		...g,
		...a,
		refs: b,
		elements: x,
		nodeId: r
	}), [
		g,
		b,
		x,
		r,
		a
	]);
	return Y(() => {
		a.dataRef.current.floatingContext = S;
		let e = h?.nodesRef.current.find((e) => e.id === r);
		e && (e.context = S);
	}), _.useMemo(() => ({
		...g,
		context: S,
		refs: b,
		elements: x
	}), [
		g,
		b,
		x,
		S
	]);
}
function hn(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === "item", a = e;
	if (i && e) {
		let { [rt]: t, [it]: n, ...r } = e;
		a = r;
	}
	return {
		...n === "floating" && {
			tabIndex: -1,
			[nt]: ""
		},
		...a,
		...t.map((t) => {
			let r = t ? t[n] : null;
			return typeof r == "function" ? e ? r(e) : null : r;
		}).concat(e).reduce((e, t) => (t && Object.entries(t).forEach((t) => {
			let [n, a] = t;
			if (!(i && [rt, it].includes(n))) if (n.indexOf("on") === 0) {
				if (r.has(n) || r.set(n, []), typeof a == "function") {
					var o;
					(o = r.get(n)) == null || o.push(a), e[n] = function() {
						var e = [...arguments];
						return r.get(n)?.map((t) => t(...e)).find((e) => e !== void 0);
					};
				}
			} else e[n] = a;
		}), e), {})
	};
}
function gn(e) {
	e === void 0 && (e = []);
	let t = e.map((e) => e?.reference), n = e.map((e) => e?.floating), r = e.map((e) => e?.item), i = _.useCallback((t) => hn(t, e, "reference"), t), a = _.useCallback((t) => hn(t, e, "floating"), n), o = _.useCallback((t) => hn(t, e, "item"), r);
	return _.useMemo(() => ({
		getReferenceProps: i,
		getFloatingProps: a,
		getItemProps: o
	}), [
		i,
		a,
		o
	]);
}
var _n = "Escape";
function vn(e, t, n) {
	switch (e) {
		case "vertical": return t;
		case "horizontal": return n;
		default: return t || n;
	}
}
function yn(e, t) {
	return vn(t, e === st || e === ct, e === at || e === ot);
}
function bn(e, t, n) {
	return vn(t, e === ct, n ? e === at : e === ot) || e === "Enter" || e === " " || e === "";
}
function xn(e, t, n) {
	return vn(t, n ? e === at : e === ot, e === ct);
}
function Sn(e, t, n, r) {
	return t === "both" || t === "horizontal" && r && r > 1 ? e === _n : vn(t, n ? e === ot : e === at, e === st);
}
function Cn(e, t) {
	let { open: n, onOpenChange: r, elements: i, floatingId: a } = e, { listRef: o, activeIndex: s, onNavigate: c = () => {}, enabled: l = !0, selectedIndex: u = null, allowEscape: f = !1, loop: p = !1, nested: m = !1, rtl: h = !1, virtual: g = !1, focusItemOnOpen: v = "auto", focusItemOnHover: y = !0, openOnArrowKeyDown: b = !0, disabledIndices: x = void 0, orientation: S = "vertical", parentOrientation: C, cols: w = 1, scrollItemIntoView: T = !0, virtualItemRef: E, itemSizes: D, dense: O = !1 } = t;
	process.env.NODE_ENV !== "production" && (f && (p || vt("`useListNavigation` looping must be enabled to allow escaping."), g || vt("`useListNavigation` must be virtual to allow escaping.")), S === "vertical" && w > 1 && vt("In grid list navigation mode (`cols` > 1), the `orientation` should", "be either \"horizontal\" or \"both\"."));
	let k = X(je(i.floating)), A = Ct(), j = wt();
	Y(() => {
		e.dataRef.current.orientation = S;
	}, [e, S]);
	let M = Z(() => {
		c(F.current === -1 ? null : F.current);
	}), N = Ae(i.domReference), P = _.useRef(v), F = _.useRef(u ?? -1), I = _.useRef(null), L = _.useRef(!0), ee = _.useRef(M), R = _.useRef(!!i.floating), te = _.useRef(n), z = _.useRef(!1), B = _.useRef(!1), V = X(x), H = X(n), U = X(T), W = X(u), [ne, re] = _.useState(), [ie, ae] = _.useState(), oe = Z(() => {
		function e(e) {
			if (g) {
				var t;
				(t = e.id) != null && t.endsWith("-fui-option") && (e.id = a + "-" + Math.random().toString(16).slice(2, 10)), re(e.id), j?.events.emit("virtualfocus", e), E && (E.current = e);
			} else Ot(e, {
				sync: z.current,
				preventScroll: !0
			});
		}
		let t = o.current[F.current], n = B.current;
		t && e(t), (z.current ? (e) => e() : requestAnimationFrame)(() => {
			let r = o.current[F.current] || t;
			if (!r) return;
			t || e(r);
			let i = U.current;
			i && ce && (n || !L.current) && (r.scrollIntoView == null || r.scrollIntoView(typeof i == "boolean" ? {
				block: "nearest",
				inline: "nearest"
			} : i));
		});
	});
	Y(() => {
		l && (n && i.floating ? P.current && u != null && (B.current = !0, F.current = u, M()) : R.current && (F.current = -1, ee.current()));
	}, [
		l,
		n,
		i.floating,
		u,
		M
	]), Y(() => {
		if (l && n && i.floating) if (s == null) {
			if (z.current = !1, W.current != null) return;
			if (R.current && (F.current = -1, oe()), (!te.current || !R.current) && P.current && (I.current != null || P.current === !0 && I.current == null)) {
				let e = 0, t = () => {
					o.current[0] == null ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++) : (F.current = I.current == null || bn(I.current, S, h) || m ? He(o, V.current) : Ue(o, V.current), I.current = null, M());
				};
				t();
			}
		} else Ve(o, s) || (F.current = s, oe(), B.current = !1);
	}, [
		l,
		n,
		i.floating,
		s,
		W,
		m,
		o,
		S,
		h,
		M,
		oe,
		V
	]), Y(() => {
		var e;
		if (!l || i.floating || !j || g || !R.current) return;
		let t = j.nodesRef.current, n = (e = t.find((e) => e.id === A)) == null || (e = e.context) == null ? void 0 : e.elements.floating, r = G(q(i.floating)), a = t.some((e) => e.context && K(e.context.elements.floating, r));
		n && !a && L.current && n.focus({ preventScroll: !0 });
	}, [
		l,
		i.floating,
		j,
		A,
		g
	]), Y(() => {
		if (!l || !j || !g || A) return;
		function e(e) {
			ae(e.id), E && (E.current = e);
		}
		return j.events.on("virtualfocus", e), () => {
			j.events.off("virtualfocus", e);
		};
	}, [
		l,
		j,
		g,
		A,
		E
	]), Y(() => {
		ee.current = M, te.current = n, R.current = !!i.floating;
	}), Y(() => {
		n || (I.current = null, P.current = v);
	}, [n, v]);
	let se = s != null, ce = _.useMemo(() => {
		function e(e) {
			if (!H.current) return;
			let t = o.current.indexOf(e);
			t !== -1 && F.current !== t && (F.current = t, M());
		}
		return {
			onFocus(t) {
				let { currentTarget: n } = t;
				z.current = !0, e(n);
			},
			onClick: (e) => {
				let { currentTarget: t } = e;
				return t.focus({ preventScroll: !0 });
			},
			onMouseMove(t) {
				let { currentTarget: n } = t;
				z.current = !0, B.current = !1, y && e(n);
			},
			onPointerLeave(e) {
				let { pointerType: t } = e;
				if (!(!L.current || t === "touch") && (z.current = !0, y && (F.current = -1, M(), !g))) {
					var n;
					(n = k.current) == null || n.focus({ preventScroll: !0 });
				}
			}
		};
	}, [
		H,
		k,
		y,
		o,
		M,
		g
	]), le = _.useCallback(() => {
		var e;
		return C ?? (j == null || (e = j.nodesRef.current.find((e) => e.id === A)) == null || (e = e.context) == null || (e = e.dataRef) == null ? void 0 : e.current.orientation);
	}, [
		A,
		j,
		C
	]), ue = Z((e) => {
		if (L.current = !1, z.current = !0, e.which === 229 || !H.current && e.currentTarget === k.current) return;
		if (m && Sn(e.key, S, h, w)) {
			yn(e.key, le()) || J(e), r(!1, e.nativeEvent, "list-navigation"), d(i.domReference) && (g ? j?.events.emit("virtualfocus", i.domReference) : i.domReference.focus());
			return;
		}
		let t = F.current, a = He(o, x), s = Ue(o, x);
		if (N || (e.key === "Home" && (J(e), F.current = a, M()), e.key === "End" && (J(e), F.current = s, M())), w > 1) {
			let t = D || Array.from({ length: o.current.length }, () => ({
				width: 1,
				height: 1
			})), n = Ge(t, w, O), r = n.findIndex((e) => e != null && !Je(o, e, x)), i = n.reduce((e, t, n) => t != null && !Je(o, t, x) ? n : e, -1), c = n[We({ current: n.map((e) => e == null ? null : o.current[e]) }, {
				event: e,
				orientation: S,
				loop: p,
				rtl: h,
				cols: w,
				disabledIndices: qe([...(typeof x == "function" ? null : x) || o.current.map((e, t) => Je(o, t, x) ? t : void 0), void 0], n),
				minIndex: r,
				maxIndex: i,
				prevIndex: Ke(F.current > s ? a : F.current, t, n, w, e.key === ct ? "bl" : e.key === (h ? at : ot) ? "tr" : "tl"),
				stopEvent: !0
			})];
			if (c != null && (F.current = c, M()), S === "both") return;
		}
		if (yn(e.key, S)) {
			if (J(e), n && !g && G(e.currentTarget.ownerDocument) === e.currentTarget) {
				F.current = bn(e.key, S, h) ? a : s, M();
				return;
			}
			bn(e.key, S, h) ? p ? F.current = t >= s ? f && t !== o.current.length ? -1 : a : Q(o, {
				startingIndex: t,
				disabledIndices: x
			}) : F.current = Math.min(s, Q(o, {
				startingIndex: t,
				disabledIndices: x
			})) : p ? F.current = t <= a ? f && t !== -1 ? o.current.length : s : Q(o, {
				startingIndex: t,
				decrement: !0,
				disabledIndices: x
			}) : F.current = Math.max(a, Q(o, {
				startingIndex: t,
				decrement: !0,
				disabledIndices: x
			})), Ve(o, F.current) && (F.current = -1), M();
		}
	}), de = _.useMemo(() => g && n && se && { "aria-activedescendant": ie || ne }, [
		g,
		n,
		se,
		ie,
		ne
	]), fe = _.useMemo(() => ({
		"aria-orientation": S === "both" ? void 0 : S,
		...N ? {} : de,
		onKeyDown: ue,
		onPointerMove() {
			L.current = !0;
		}
	}), [
		de,
		ue,
		S,
		N
	]), pe = _.useMemo(() => {
		function e(e) {
			v === "auto" && Ie(e.nativeEvent) && (P.current = !0);
		}
		function t(e) {
			P.current = v, v === "auto" && Le(e.nativeEvent) && (P.current = !0);
		}
		return {
			...de,
			onKeyDown(e) {
				L.current = !1;
				let t = e.key.startsWith("Arrow"), i = ["Home", "End"].includes(e.key), a = t || i, s = xn(e.key, S, h), c = Sn(e.key, S, h, w), l = xn(e.key, le(), h), d = yn(e.key, S), f = (m ? l : d) || e.key === "Enter" || e.key.trim() === "";
				if (g && n) {
					let t = j?.nodesRef.current.find((e) => e.parentId == null), n = j && t ? Ne(j.nodesRef.current, t.id) : null;
					if (a && n && E) {
						let t = new KeyboardEvent("keydown", {
							key: e.key,
							bubbles: !0
						});
						if (s || c) {
							let r = n.context?.elements.domReference === e.currentTarget, i = c && !r ? n.context?.elements.domReference : s ? o.current.find((e) => e?.id === ne) : null;
							i && (J(e), i.dispatchEvent(t), ae(void 0));
						}
						if ((d || i) && n.context && n.context.open && n.parentId && e.currentTarget !== n.context.elements.domReference) {
							var p;
							J(e), (p = n.context.elements.domReference) == null || p.dispatchEvent(t);
							return;
						}
					}
					return ue(e);
				}
				if (!(!n && !b && t)) {
					if (f) {
						let t = yn(e.key, le());
						I.current = m && t ? null : e.key;
					}
					if (m) {
						l && (J(e), n ? (F.current = He(o, V.current), M()) : r(!0, e.nativeEvent, "list-navigation"));
						return;
					}
					d && (u != null && (F.current = u), J(e), !n && b ? r(!0, e.nativeEvent, "list-navigation") : ue(e), n && M());
				}
			},
			onFocus() {
				n && !g && (F.current = -1, M());
			},
			onPointerDown: t,
			onPointerEnter: t,
			onMouseDown: e,
			onClick: e
		};
	}, [
		ne,
		de,
		w,
		ue,
		V,
		v,
		o,
		m,
		M,
		r,
		n,
		b,
		S,
		le,
		h,
		u,
		j,
		g,
		E
	]);
	return _.useMemo(() => l ? {
		reference: pe,
		floating: fe,
		item: ce
	} : {}, [
		l,
		pe,
		fe,
		ce
	]);
}
var wn = /*#__PURE__*/ new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", !1]
]);
function Tn(e, t) {
	t === void 0 && (t = {});
	let { open: n, elements: r, floatingId: i } = e, { enabled: a = !0, role: o = "dialog" } = t, s = gt(), c = r.domReference?.id || s, l = _.useMemo(() => je(r.floating)?.id || i, [r.floating, i]), u = wn.get(o) ?? o, d = Ct() != null, f = _.useMemo(() => u === "tooltip" || o === "label" ? { ["aria-" + (o === "label" ? "labelledby" : "describedby")]: n ? l : void 0 } : {
		"aria-expanded": n ? "true" : "false",
		"aria-haspopup": u === "alertdialog" ? "dialog" : u,
		"aria-controls": n ? l : void 0,
		...u === "listbox" && { role: "combobox" },
		...u === "menu" && { id: c },
		...u === "menu" && d && { role: "menuitem" },
		...o === "select" && { "aria-autocomplete": "none" },
		...o === "combobox" && { "aria-autocomplete": "list" }
	}, [
		u,
		l,
		d,
		n,
		c,
		o
	]), p = _.useMemo(() => {
		let e = {
			id: l,
			...u && { role: u }
		};
		return u === "tooltip" || o === "label" ? e : {
			...e,
			...u === "menu" && { "aria-labelledby": c }
		};
	}, [
		u,
		l,
		c,
		o
	]), m = _.useCallback((e) => {
		let { active: t, selected: n } = e, r = {
			role: "option",
			...t && { id: l + "-fui-option" }
		};
		switch (o) {
			case "select":
			case "combobox": return {
				...r,
				"aria-selected": n
			};
		}
		return {};
	}, [l, o]);
	return _.useMemo(() => a ? {
		reference: f,
		floating: p,
		item: m
	} : {}, [
		a,
		f,
		p,
		m
	]);
}
function En(e, t) {
	let { open: n, dataRef: r } = e, { listRef: i, activeIndex: a, onMatch: o, onTypingChange: s, enabled: c = !0, findMatch: l = null, resetMs: u = 750, ignoreKeys: d = [], selectedIndex: f = null } = t, p = _.useRef(-1), m = _.useRef(""), h = _.useRef(f ?? a ?? -1), g = _.useRef(null), v = Z(o), y = Z(s), b = X(l), x = X(d);
	Y(() => {
		n && (Et(p), g.current = null, m.current = "");
	}, [n]), Y(() => {
		n && m.current === "" && (h.current = f ?? a ?? -1);
	}, [
		n,
		f,
		a
	]);
	let S = Z((e) => {
		e ? r.current.typing || (r.current.typing = e, y(e)) : r.current.typing && (r.current.typing = e, y(e));
	}), C = Z((e) => {
		function t(e, t, n) {
			let r = b.current ? b.current(t, n) : t.find((e) => e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) === 0);
			return r ? e.indexOf(r) : -1;
		}
		let r = i.current;
		if (m.current.length > 0 && m.current[0] !== " " && (t(r, r, m.current) === -1 ? S(!1) : e.key === " " && J(e)), r == null || x.current.includes(e.key) || e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
		n && e.key !== " " && (J(e), S(!0)), r.every((e) => !e || e[0]?.toLocaleLowerCase() !== e[1]?.toLocaleLowerCase()) && m.current === e.key && (m.current = "", h.current = g.current), m.current += e.key, Et(p), p.current = window.setTimeout(() => {
			m.current = "", h.current = g.current, S(!1);
		}, u);
		let a = h.current, o = t(r, [...r.slice((a || 0) + 1), ...r.slice(0, (a || 0) + 1)], m.current);
		o === -1 ? e.key !== " " && (m.current = "", S(!1)) : (v(o), g.current = o);
	}), w = _.useMemo(() => ({ onKeyDown: C }), [C]), T = _.useMemo(() => ({
		onKeyDown: C,
		onKeyUp(e) {
			e.key === " " && S(!1);
		}
	}), [C, S]);
	return _.useMemo(() => c ? {
		reference: w,
		floating: T
	} : {}, [
		c,
		w,
		T
	]);
}
//#endregion
export { mn as a, Tn as c, k as d, D as f, fn as i, En as l, cn as n, gn as o, Kt as r, Cn as s, nn as t, O as u };
