import { createContext as e, useContext as t } from "react";
//#region node_modules/@lexical/react/dist/LexicalComposerContext.prod.mjs
var n = e(null);
function r(e, t) {
	let n = null;
	return e != null && (n = e[1]), { getTheme: function() {
		return t ?? (n == null ? null : n.getTheme());
	} };
}
function i() {
	let e = t(n);
	return e ?? function(e, ...t) {
		let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
		r.append("code", e);
		for (let e of t) r.append("v", e);
		throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(8), e;
}
//#endregion
//#region node_modules/lexical/dist/Lexical.prod.mjs
function a(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function o(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	n.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var s = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, c = s && "documentMode" in document ? document.documentMode : null, l = s && /Mac|iPod|iPhone|iPad/.test(navigator.platform), u = s && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), d = !(!s || !("InputEvent" in window) || c) && "getTargetRanges" in new window.InputEvent("input"), f = s && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, p = s && /Android/.test(navigator.userAgent), m = s && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !p, h = s && /^(?=.*Chrome).*/i.test(navigator.userAgent), g = s && p && h, _ = s && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && l && !h, v = 0, y = 1, b = 2, ee = 1, x = 2, te = 3, ne = 4, re = 5, ie = 6, ae = m || f || _ ? "\xA0" : "​", oe = "\n\n", se = u ? "\xA0" : ae, ce = /* @__PURE__ */ RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]"), le = /* @__PURE__ */ RegExp("^[^֑-߿יִ-﷽ﹰ-ﻼ]*[A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]"), S = {
	bold: 1,
	capitalize: 1024,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: 256,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: 512
}, ue = {
	directionless: 1,
	unmergeable: 2
}, de = {
	center: 2,
	end: 6,
	justify: 4,
	left: 1,
	right: 3,
	start: 5
}, fe = {
	[x]: "center",
	[ie]: "end",
	[ne]: "justify",
	[ee]: "left",
	[te]: "right",
	[re]: "start"
}, pe = {
	normal: 0,
	segmented: 2,
	token: 1
}, me = {
	[v]: "normal",
	[b]: "segmented",
	[y]: "token"
}, he = "$config";
function ge() {
	return Gs()._blockCursorElement;
}
function _e(e) {
	return e !== null && e.nodeType === 1 && e.hasAttribute("data-lexical-slot");
}
var ve = class e {
	element;
	before;
	after;
	constructor(e, t, n) {
		this.element = e, this.before = t || null, this.after = n || null;
	}
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	insertChild(e) {
		let t = this.getInsertionAnchor();
		return t !== null && t.parentElement !== this.element && a(357), this.element.insertBefore(e, t), this;
	}
	removeChild(e) {
		return e.parentElement !== this.element && a(358), this.element.removeChild(e), this;
	}
	replaceChild(e, t) {
		return t.parentElement !== this.element && a(359), this.element.replaceChild(e, t), this;
	}
	getFirstChild() {
		let e = this.getFirstChildAnchor(), t = e ? e.nextSibling : this.element.firstChild;
		return t === this.getInsertionAnchor() ? null : t;
	}
	getFirstChildAnchor() {
		return this.after;
	}
	resolveLeafPosition(e, t, n) {
		if (this.element === e) return t === e && n === 0 ? "before" : "after";
		let r = ye(e, this.element);
		if (r === null) return "after";
		let i = Array.prototype.indexOf.call(e.childNodes, r);
		if (i < 0) return "after";
		if (t === e) return n <= i ? "before" : "after";
		let a = ye(e, t);
		if (a === null) return "after";
		let o = Array.prototype.indexOf.call(e.childNodes, a);
		return o >= 0 && o <= i ? "before" : "after";
	}
	getInsertionAnchor() {
		return this.before;
	}
};
function ye(e, t) {
	let n = t;
	for (; n !== null && n.parentNode !== e;) n = n.parentNode;
	return n;
}
var be = class e extends ve {
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	getInsertionAnchor() {
		return super.getInsertionAnchor() || this.getManagedLineBreak();
	}
	getFirstChildAnchor() {
		let e = super.getFirstChildAnchor(), t = e ? e.nextSibling : this.element.firstChild;
		for (; _e(t);) e = t, t = t.nextSibling;
		let n = e ? e.nextSibling : this.element.firstChild;
		return n !== null && n === ge() ? n : e;
	}
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	setManagedLineBreak(e) {
		if (this.element.__lexicalLastChildKind = e, e === null) this.removeManagedLineBreak();
		else {
			let t = e === "decorator" && (_ || f || m);
			this.insertManagedLineBreak(t);
		}
	}
	removeManagedLineBreak() {
		let e = this.getManagedLineBreak();
		if (e) {
			let t = this.element, n = e.nodeName === "IMG" ? e.nextSibling : null;
			n && t.removeChild(n), t.removeChild(e), t.__lexicalLineBreak = void 0;
		}
	}
	insertManagedLineBreak(e) {
		let t = this.getManagedLineBreak();
		if (t) {
			if (e === (t.nodeName === "IMG")) return;
			this.removeManagedLineBreak();
		}
		let n = this.element, r = this.before, i = X().createElement("br");
		if (i.setAttribute("data-lexical-managed-linebreak", "true"), n.insertBefore(i, r), e) {
			let e = X().createElement("img");
			e.setAttribute("data-lexical-managed-linebreak", "true"), e.style.setProperty("display", "inline", "important"), e.style.setProperty("border", "0px", "important"), e.style.setProperty("margin", "0px", "important"), e.alt = "", n.insertBefore(e, i), n.__lexicalLineBreak = e;
		} else n.__lexicalLineBreak = i;
	}
	getFirstChildOffset() {
		let e = this.getFirstChild(), t = this.getInsertionAnchor(), n = 0;
		for (let r = this.element.firstChild; r !== null && r !== e && r !== t; r = r.nextSibling) n++;
		return n;
	}
	resolveChildIndex(e, t, n, r) {
		if (n === this.element) {
			let t = this.getFirstChildOffset(), n = ge(), i = this.element.childNodes, a = Math.min(r, i.length), o = 0;
			for (let e = t; e < a; e++) i[e] !== n && o++;
			return [e, Math.min(o, e.getChildrenSize())];
		}
		let i = xe(t, n);
		i.push(r);
		let a = xe(t, this.element), o = e.getIndexWithinParent();
		for (let e = 0; e < a.length; e++) {
			let t = i[e], n = a[e];
			if (t === void 0 || t < n) break;
			if (t > n) {
				o += 1;
				break;
			}
		}
		return [e.getParentOrThrow(), o];
	}
};
function xe(e, t) {
	let n = [], r = t;
	for (; r !== e && r !== null; r = r.parentNode) {
		let e = 0;
		for (let t = r.previousSibling; t !== null; t = t.previousSibling) e++;
		n.push(e);
	}
	return r !== e && a(225), n.reverse();
}
var Se;
try {
	Se = "0.48.0+prod.esm";
} catch {}
var Ce = Se ?? "\"<unknown>+source\"", we = class {
	_front = /* @__PURE__ */ new Set();
	_back = /* @__PURE__ */ new Set();
	_cache;
	get size() {
		return this._front.size + this._back.size;
	}
	addBack(e) {
		return delete this._cache, this._front.has(e) || this._back.add(e), this;
	}
	addFront(e) {
		return delete this._cache, this._back.has(e) || this._front.add(e), this;
	}
	delete(e) {
		return delete this._cache, this._front.delete(e) || this._back.delete(e);
	}
	toArray() {
		let e = Array.from(this._front).reverse();
		for (let t of this._back) e.push(t);
		return e;
	}
	toReadonlyArray() {
		return this._cache = this._cache || this.toArray(), this._cache;
	}
	[Symbol.iterator]() {
		return this.toReadonlyArray()[Symbol.iterator]();
	}
}, Te = null;
function Ee(e, t = 1e3) {
	return e instanceof De ? e.clone() : e.size < t ? new Map(e) : new De().init(new Map(e), void 0, e.size);
}
var De = class e {
	_mutable = !1;
	_old = void 0;
	_nursery = void 0;
	_size = 0;
	clone() {
		return this._mutable = !1, new e().init(this._old, this._nursery, this._size);
	}
	init(e, t, n) {
		return this._old = e, this._nursery = t, this._size = n, this;
	}
	get size() {
		return this._size;
	}
	has(e) {
		return this.get(e) !== void 0;
	}
	getWithTombstone(e) {
		let t = this._nursery && this._nursery.get(e);
		return t === void 0 ? this._old && this._old.get(e) : t;
	}
	get(e) {
		let t = this.getWithTombstone(e);
		return t === Te ? void 0 : t;
	}
	shouldCompact() {
		return this._nursery !== void 0 && 2 * this._nursery.size > this._size;
	}
	getNursery() {
		return this._mutable && this._nursery || (this.compact(), this._nursery = new Map(this._nursery), this._mutable = !0), this._nursery;
	}
	compact(e = !1) {
		if (this._nursery && this._nursery.size > 0 && (e || this.shouldCompact())) {
			let e = new Map(this._old);
			for (let [t, n] of this._nursery) n === Te ? e.delete(t) : e.set(t, n);
			this._old = e, this._nursery = void 0;
		}
		return this._mutable = !1, this;
	}
	set(e, t) {
		let n = this.getWithTombstone(e);
		if (n === t) return this;
		let r = this.getNursery();
		return n !== Te && n !== void 0 || (this._size++, n === Te && r.delete(e)), r.set(e, t), this;
	}
	delete(e) {
		let t = this.has(e);
		return t && (this.getNursery().set(e, Te), this._size--), t;
	}
	getOrInsert(e, t) {
		let n = this.get(e);
		return n === void 0 ? (this.set(e, t), t) : n;
	}
	getOrInsertComputed(e, t) {
		let n = this.get(e);
		if (n !== void 0) return n;
		let r = t(e);
		return this.set(e, r), r;
	}
	clear() {
		this._mutable = !1, this._old = void 0, this._nursery = void 0, this._size = 0;
	}
	*keys() {
		for (let e of this.entries()) yield e[0];
	}
	*values() {
		for (let e of this.entries()) yield e[1];
	}
	*entries() {
		let e = this._nursery, t = this._old;
		if (t) for (let n of t) {
			let t = n[0], r = e ? e.get(t) : void 0;
			r !== Te && (r !== void 0 && (n[1] = r), yield n);
		}
		if (e) for (let n of e) n[1] === Te || t && t.has(n[0]) || (yield n);
	}
	forEach(e, t) {
		t !== void 0 && (e = e.bind(t));
		for (let [t, n] of this.entries()) e(n, t, this);
	}
	get [Symbol.toStringTag]() {
		return "GenMap";
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
function Oe(e, t, n, r, i, a) {
	if (z(e)) {
		let o = e.getFirstChild();
		for (; o !== null;) {
			let e = o.__key;
			o.__parent === t && ((z(o) || _c(o) && o.__slots !== null) && Oe(o, e, n, r, i, a), n.has(e) || a.delete(e), i.push(e)), o = o.getNextSibling();
		}
	}
	for (let o of _c(e) && e.__slots !== null ? e.__slots.values() : []) {
		let e = r.get(o);
		e !== void 0 && vc(e) && e.__slotHost === t && ((z(e) || _c(e) && e.__slots !== null) && Oe(e, o, n, r, i, a), n.has(o) || a.delete(o), i.push(o));
	}
}
var ke = !1, Ae = 0;
function je(e) {
	Ae = e.timeStamp;
}
function Me(e, t, n) {
	let r = e.nodeName === "BR", i = t.__lexicalLineBreak;
	return i && (e === i || r && e.previousSibling === i) || r && Mo(e, n) !== void 0;
}
function Ne(e, t, n) {
	let r = bs(J(n)), i = r && ks(r, n._rootElement), a = null, o = null;
	i !== null && i.anchorNode === e && (a = i.anchorOffset, o = i.focusOffset);
	let s = e.nodeValue;
	s !== null && Wo(t, s, a, o, !1);
}
function Pe(e, t, n) {
	if (M(e)) {
		let t = e.anchor.getNode();
		if (t.is(n) && e.format !== t.getFormat()) return !1;
	}
	return xo(t) && n.isAttached();
}
function Fe(e, t, n) {
	for (let r = e; r && !ac(r); r = as(r)) {
		let e = Mo(r, t);
		if (e !== void 0) {
			let t = W(e, n);
			if (t) return B(t) || !Z(r) ? void 0 : [r, t];
		}
	}
}
function Ie(e, t, n) {
	ke = !0;
	let r = performance.now() - Ae > 100;
	try {
		Aa(e, () => {
			let i = N() || function(e) {
				return e.read("latest", () => {
					let e = N();
					return e === null ? null : e.clone();
				});
			}(e), a = /* @__PURE__ */ new Map(), o = e._editorState, s = e._blockCursorElement, c = !1, l = "";
			for (let n = 0; n < t.length; n++) {
				let d = t[n], f = d.type, p = d.target, m = Fe(p, e, o);
				if (!m) continue;
				let [h, g] = m;
				if (f === "characterData") r && j(g) && xo(p) && Pe(i, p, g) && Ne(p, g, e);
				else if (f === "childList") {
					c = !0;
					let t = d.addedNodes;
					for (let n = 0; n < t.length; n++) {
						let r = t[n], i = Ao(r), a = r.parentNode;
						if (!(a == null || r === s || i !== null || Me(r, a, e) || e._slotsUsed && Z(r) && r.hasAttribute("data-lexical-slot") || ac(r))) {
							if (u) {
								let e = (Z(r) ? r.innerText : null) || r.nodeValue;
								e && (l += e);
							}
							a.removeChild(r);
						}
					}
					let n = d.removedNodes, r = n.length;
					if (r > 0) {
						let t = 0;
						for (let i = 0; i < r; i++) {
							let r = n[i];
							(Me(r, p, e) || s === r) && (p.appendChild(r), t++);
						}
						r !== t && a.set(h, g);
					}
				}
			}
			if (a.size > 0) for (let [t, n] of a) n.reconcileObservedMutation(t, e);
			let d = n.takeRecords();
			if (d.length > 0) {
				for (let t = 0; t < d.length; t++) {
					let n = d[t], r = n.addedNodes, i = n.target;
					for (let t = 0; t < r.length; t++) {
						let n = r[t], a = n.parentNode;
						a == null || n.nodeName !== "BR" || Me(n, i, e) || a.removeChild(n);
					}
				}
				n.takeRecords();
			}
			i !== null && (c && G(i), u && rs(e) && i.insertRawText(l));
		});
	} finally {
		ke = !1;
	}
}
function Le(e) {
	let t = e._observer;
	t !== null && Ie(e, t.takeRecords(), t);
}
function Re(e) {
	(function(e) {
		Ae === 0 && J(e).addEventListener("textInput", je, !0);
	})(e), e._observer = new MutationObserver((t, n) => {
		Ie(e, t, n);
	});
}
var ze = "latest", Be = class {
	key;
	parse;
	unparse;
	isEqual;
	defaultValue;
	resetOnCopyNode;
	constructor(e, t) {
		this.key = e, this.parse = t.parse.bind(t), this.unparse = (t.unparse || Xe).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0), this.resetOnCopyNode = t.resetOnCopyNode || !1;
	}
};
function Ve(e, t) {
	return new Be(e, t);
}
function He(e, t, n = ze) {
	let r = (n === "latest" ? e.getLatest() : e).__state;
	return r ? r.getValue(t) : t.defaultValue;
}
function Ue(e, t, n) {
	let r;
	if (L(), typeof n == "function") {
		let i = e.getLatest(), a = He(i, t);
		if (r = n(a), t.isEqual(a, r)) return i;
	} else r = n;
	let i = e.getWritable();
	return qe(i).updateFromKnown(t, r), i;
}
function We(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
	for (let { ownNodeConfig: r } of dc(typeof e == "function" ? e : e.replace)) if (r && r.stateConfigs) for (let e of r.stateConfigs) {
		let r;
		"stateConfig" in e ? (r = e.stateConfig, e.flat && n.add(r.key)) : r = e, t.set(r.key, r);
	}
	return {
		flatKeys: n,
		sharedConfigMap: t
	};
}
var Ge = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]), Ke = class e {
	node;
	knownState;
	unknownState;
	sharedNodeState;
	size;
	constructor(e, t, n = void 0, r = /* @__PURE__ */ new Map(), i = void 0) {
		this.node = e, this.sharedNodeState = t, this.unknownState = n, this.knownState = r;
		let { sharedConfigMap: a } = this.sharedNodeState, o = i === void 0 ? function(e, t, n) {
			let r = n.size;
			if (t) for (let i in t) {
				let t = e.get(i);
				t && n.has(t) || r++;
			}
			return r;
		}(a, n, r) : i;
		this.size = o;
	}
	getValue(e) {
		let t = this.knownState.get(e);
		if (t !== void 0) return t;
		this.sharedNodeState.sharedConfigMap.set(e.key, e);
		let n = e.defaultValue;
		if (this.unknownState && e.key in this.unknownState) {
			let t = this.unknownState[e.key];
			t !== void 0 && (n = e.parse(t)), this.updateFromKnown(e, n);
		}
		return n;
	}
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	toJSON() {
		let e = { ...this.unknownState }, t = {};
		for (let [t, n] of this.knownState) t.isEqual(n, t.defaultValue) ? delete e[t.key] : e[t.key] = t.unparse(n);
		for (let n of this.sharedNodeState.flatKeys) n in e && (t[n] = e[n], delete e[n]);
		return Ye(e) && (t.$ = e), t;
	}
	getWritable(t) {
		if (this.node === t) return this;
		let { sharedNodeState: n, unknownState: r } = this, i = new Map(this.knownState);
		return new e(t, n, function(e, t, n) {
			let r;
			if (n) for (let [i, a] of Object.entries(n)) {
				if (Ge.has(i)) continue;
				let n = e.get(i);
				n ? t.has(n) || t.set(n, n.parse(a)) : (r ||= {}, r[i] = a);
			}
			return r;
		}(n.sharedConfigMap, i, r), i, this.size);
	}
	resetOnCopyNode() {
		for (let e of this.knownState.keys()) e.resetOnCopyNode && this.knownState.set(e, e.defaultValue);
		return this;
	}
	updateFromKnown(e, t) {
		let n = e.key;
		this.sharedNodeState.sharedConfigMap.set(n, e);
		let { knownState: r, unknownState: i } = this;
		r.has(e) || i && n in i || (i && (delete i[n], this.unknownState = Ye(i)), this.size++), r.set(e, t);
	}
	updateFromUnknown(e, t) {
		if (Ge.has(e)) return;
		let n = this.sharedNodeState.sharedConfigMap.get(e);
		n ? this.updateFromKnown(n, n.parse(t)) : (this.unknownState = this.unknownState || {}, e in this.unknownState || this.size++, this.unknownState[e] = t);
	}
	updateFromJSON(e) {
		let { knownState: t } = this;
		for (let e of t.keys()) t.set(e, e.defaultValue);
		if (this.size = t.size, this.unknownState = void 0, e) for (let [t, n] of Object.entries(e)) this.updateFromUnknown(t, n);
	}
};
function qe(e) {
	let t = e.getWritable(), n = t.__state ? t.__state.getWritable(t) : new Ke(t, Je(t));
	return t.__state = n, n;
}
function Je(e) {
	return e.__state ? e.__state.sharedNodeState : lo(Gs(), e.getType()).sharedNodeState;
}
function Ye(e) {
	if (e) for (let t in e) return e;
}
function Xe(e) {
	return e;
}
function Ze(e, t, n) {
	for (let [r, i] of t.knownState) {
		if (e.has(r.key)) continue;
		e.add(r.key);
		let t = n ? n.getValue(r) : r.defaultValue;
		if (t !== i && !r.isEqual(t, i)) return !0;
	}
	return !1;
}
function Qe(e, t, n) {
	let { unknownState: r } = t, i = n ? n.unknownState : void 0;
	if (r) {
		for (let [t, n] of Object.entries(r)) if (!e.has(t) && (e.add(t), n !== (i ? i[t] : void 0))) return !0;
	}
	return !1;
}
function $e(e, t) {
	let n = e.__state;
	return n && n.node === e ? n.getWritable(t) : n;
}
function et(e, t) {
	let n = e.__mode, r = e.__format, i = e.__style, a = t.__mode, o = t.__format, s = t.__style, c = e.__state, l = t.__state;
	return (n === null || n === a) && (r === null || r === o) && (i === null || i === s) && (e.__state === null || c === l || function(e, t) {
		if (e === t) return !0;
		let n = /* @__PURE__ */ new Set();
		return !(e && Ze(n, e, t) || t && Ze(n, t, e) || e && Qe(n, e, t) || t && Qe(n, t, e));
	}(c, l));
}
function tt(e, t) {
	let n = e.mergeWithSibling(t), r = R()._normalizedNodes;
	return r.add(e.__key), r.add(t.__key), n;
}
function nt(e) {
	let t, n, r = e;
	if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
		for (; (t = r.getPreviousSibling()) !== null && j(t) && t.isSimpleText() && !t.isUnmergeable();) {
			if (t.__text !== "") {
				if (et(t, r)) {
					r = tt(t, r);
					break;
				}
				break;
			}
			t.remove();
		}
		for (; (n = r.getNextSibling()) !== null && j(n) && n.isSimpleText() && !n.isUnmergeable();) {
			if (n.__text !== "") {
				if (et(r, n)) {
					r = tt(r, n);
					break;
				}
				break;
			}
			n.remove();
		}
	} else r.remove();
}
function rt(e) {
	return it(e.anchor), it(e.focus), e;
}
function it(e) {
	for (; e.type === "element";) {
		let t = e.getNode(), n = e.offset, r, i;
		if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), i = !0) : (r = t.getChildAtIndex(n), i = !1), j(r)) {
			e.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
			break;
		}
		if (!z(r)) break;
		e.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
	}
}
var at = Symbol.for("@lexical/CachedTextSize");
function ot(e, t) {
	return vt.read(() => {
		let n = 0, r = e;
		for (let e = 0; e < t && r !== null; e++) {
			let i = _t.get(r);
			if (i === void 0 && a(345, r), z(i)) {
				let o = O.get(r);
				if (o !== void 0 && z(o) && o.__parent !== i.__parent) n += i.getTextContentSize();
				else {
					let e = yt.get(r), t = e && e.__lexicalTextContent;
					typeof t != "string" && a(346, i.getType()), n += t.length;
				}
				e < t - 1 && !i.isInline() && (n += 2);
			} else {
				let e = i[at];
				e === void 0 && a(347, i.getType(), r), n += e;
			}
			r = i.__next;
		}
		return n;
	}, { editor: C });
}
function st(e) {
	z(e) || e[at] === void 0 && (e[at] = j(e) ? e.__text.length : e.getTextContentSize());
}
var ct = 4, lt, C, ut, w = "", T = null, E = null, D = null;
function dt() {
	return {
		firstTextKey: D,
		format: T,
		style: E
	};
}
function ft(e) {
	e.firstTextKey !== null && (T = e.format, E = e.style, D = e.firstTextKey);
}
function pt(e) {
	if (D !== null) return;
	let t = e.__lexicalFirstTextKey;
	if (t === void 0 && a(348), t === null) return;
	let n = O.get(t);
	j(n) && (T = n.getFormat(), E = n.getStyle(), D = t);
}
var mt, ht, gt, _t, vt, O, yt, bt, xt, St, Ct = !1, wt = !1;
function Tt(e, t) {
	let n = _t.get(e), r = O.has(e);
	if (t !== null) {
		let n = Yt(e);
		n.parentNode === t && t.removeChild(n);
	}
	if (!r) {
		if (C._keyToDOMMap.delete(e), z(n)) {
			let e = mc(n, _t);
			Et(e, 0, e.length - 1, null);
		}
		if (n !== void 0) {
			for (let e of Ft(n).values()) {
				let t = Lt(e);
				Tt(e, null), t !== null && t.remove();
			}
			$o(xt, ut, mt, n, "destroyed");
		}
	}
}
function Et(e, t, n, r) {
	for (let i = t; i <= n; ++i) {
		let t = e[i];
		t !== void 0 && Tt(t, r);
	}
}
function Dt(e, t) {
	e.setProperty("text-align", t);
}
var Ot = "40px";
function kt(e, t) {
	let n = lt.theme.indent;
	if (typeof n == "string") {
		let r = e.classList.contains(n);
		t > 0 && !r ? e.classList.add(n) : t < 1 && r && e.classList.remove(n);
	}
	e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * var(--lexical-indent-base-value, ${Ot}))`);
}
function At(e, t) {
	let n = e.style;
	t === 0 ? Dt(n, "") : t === 1 ? Dt(n, "left") : t === 2 ? Dt(n, "center") : t === 3 ? Dt(n, "right") : t === 4 ? Dt(n, "justify") : t === 5 ? Dt(n, "start") : t === 6 && Dt(n, "end");
}
function jt(e, t) {
	let n = function(e) {
		let t = e.__dir;
		if (t !== null) return t;
		if (V(e)) return null;
		let n = e.getParent();
		return n === null || Y(n) && n.__dir === null ? "auto" : null;
	}(t);
	n === null ? e.removeAttribute("dir") : e.dir = n;
}
function Mt(e) {
	let t = X().createElement("div");
	return t.setAttribute("data-lexical-slot", e), t.style.display = "none", t;
}
function Nt(e, t, n) {
	t || e.contentEditable === "false" ? oc(n, C) : n.removeAttribute("contenteditable");
}
function Pt(e, t, n) {
	let r = w, i = dt();
	w = "";
	let a = "", o = B(e);
	for (let [r, i] of n) {
		let n = Mt(r);
		Nt(t, o, n), t.appendChild(n), w = "";
		let s = dt();
		zt(i, qs(e, n, C)), ft(s), It(e, r, t, n), a += w;
	}
	return ft(i), w = r, a;
}
function Ft(e) {
	return _c(e) && e.__slots !== null ? e.__slots : gc;
}
function It(e, t, n, r) {
	let i = St.$getSlotTargetElement(e, t, n, C);
	i !== null && (r.parentElement !== i && i.appendChild(r), r.style.display = "");
}
function Lt(e) {
	let t = yt.get(e);
	return t === void 0 ? null : t.parentElement;
}
function Rt(e, t, n) {
	let r = Ft(e), i = Ft(t);
	for (let [e, t] of r) if (!i.has(e)) {
		let e = Lt(t);
		Tt(t, null), e !== null && e.remove();
	}
	let a = w, o = dt(), s = "", c = null, l = B(t);
	for (let [e, a] of i) {
		let i = r.get(e), o = i === void 0 ? null : Lt(i);
		w = "";
		let u = dt();
		if (o === null) {
			o = Mt(e);
			let r = null;
			for (let e of n.children) if (!e.hasAttribute("data-lexical-slot")) {
				r = e;
				break;
			}
			n.insertBefore(o, r), zt(a, qs(t, o, C));
		} else i === a ? Wt(a, o) : (i !== void 0 && Tt(i, o), zt(a, qs(t, o, C)));
		if (ft(u), Nt(n, l, o), It(t, e, n, o), s += w, o.parentElement === n) {
			let e = c === null ? n.firstChild : c.nextSibling;
			e !== o && n.insertBefore(o, e), c = o;
		}
	}
	return ft(o), w = a, s;
}
function zt(e, t) {
	let n = O.get(e);
	if (n === void 0 && a(60), t !== null) {
		let r = _t.get(e);
		if (r !== void 0) {
			let i = yt.get(e);
			if (i !== void 0) {
				let a = vc(r) ? r.__slotHost : null, o = vc(n) ? n.__slotHost : null, s = r.__parent !== n.__parent || a !== o, c = o !== null && i.parentElement !== t.element;
				if (s || c) return t.insertChild(i), Wt(e, t.element);
			}
		}
	}
	let r = St.$createDOM(n, C);
	if (function(e, t, n) {
		let r = n._keyToDOMMap;
		jo(t, n, e), r.set(e, t);
	}(e, r, C), j(n) ? r.setAttribute("data-lexical-text", "true") : B(n) && (r.setAttribute("data-lexical-decorator", "true"), ic(r, { captureSelection: !0 })), z(n)) {
		let e = n.__indent, t = n.__size;
		jt(r, n), e !== 0 && kt(r, e);
		let i = Ft(n), a = i.size > 0 ? Pt(n, r, i) : "";
		if (t === 0) r.__lexicalTextContent = a, r.__lexicalFirstTextKey = null, w += a, i.size > 0 && (r.__lexicalSlotTextLength = a.length);
		else {
			let e = w, o = t - 1;
			if (Bt(mc(n, O), n, 0, o, qs(n, r, C)), a !== "") {
				let t = r.__lexicalTextContent || "";
				r.__lexicalTextContent = a + t, w = e + a + t;
			}
			i.size > 0 && (r.__lexicalSlotTextLength = a.length);
		}
		let o = n.__format;
		o !== 0 && At(r, o), n.isInline() || Vt(null, n, r);
	} else {
		let t = n.getTextContent();
		if (B(n)) {
			let t = n.decorate(C, lt);
			t !== null && Gt(e, t), r.contentEditable = "false";
			let i = Ft(n);
			i.size > 0 && Pt(n, r, i);
		}
		w += t;
	}
	return t !== null && t.insertChild(r), St.$decorateDOM(n, null, r, C), st(n), $o(xt, ut, mt, n, "created"), r;
}
function Bt(e, t, n, r, i) {
	let o = w, s = dt();
	w = "", T = null, E = null, D = null;
	let c = n;
	for (; c <= r; ++c) {
		let t = dt();
		zt(e[c], i);
		let n = O.get(e[c]);
		n !== null && j(n) ? T === null && (T = n.getFormat(), E = n.getStyle(), D = n.__key) : z(n) && c < r && !n.isInline() && (w += oe), ft(t);
	}
	let l = C._keyToDOMMap.get(t.__key);
	l === void 0 && a(349, t.__key), l.__lexicalTextContent = w, l.__lexicalFirstTextKey = D, w = o + w, ft(s);
}
function Vt(e, t, n) {
	let r = qs(t, n, C), i = r.element.__lexicalLastChildKind ?? null, a = function(e, t) {
		if (e) {
			let n = e.__last;
			if (n) {
				let e = t.get(n);
				if (e) return Ga(e) ? "line-break" : B(e) && e.isInline() ? "decorator" : null;
			}
			return Ft(e).size > 0 ? null : "empty";
		}
		return null;
	}(t, O);
	i !== a && r.setManagedLineBreak(a);
}
function Ht(e, t, n) {
	var r;
	T = null, E = null, D = null, function(e, t, n) {
		let r = w, i = e.__size, o = t.__size;
		w = "";
		let s = n.element, c = C._keyToDOMMap.get(t.__key);
		c === void 0 && a(351, t.__key);
		let l = o - i;
		if (!Ct && Math.abs(l) <= 1 && i >= ct && e.__first === t.__first && (l !== 0 || !C._cloneNotNeeded.has(e.__key))) {
			let i = c.__lexicalTextContent, u = bt.get(e.__key);
			if (!Ct && typeof i == "string" && u !== void 0) {
				let o = function(e, t) {
					let n = t.size;
					if (n === 0 || n >= e.__size) return null;
					let r = e.__last, i = null, a = 0;
					for (; r !== null && a < n;) {
						if (!t.has(r)) return null;
						i = r;
						let e = O.get(r);
						if (e === void 0) return null;
						r = e.__prev, a++;
					}
					return a !== n || r !== null && t.has(r) ? null : i;
				}(t, u);
				if (o !== null) {
					let d = u.size;
					if (l === 0) {
						let e = ot(o, d), n = o, l = 0;
						for (; n !== null && l < d;) {
							let e = O.get(n);
							if (e === void 0) break;
							let t = dt();
							Wt(n, s), j(e) && T === null && (T = e.getFormat(), E = e.getStyle(), D = e.__key), ft(t), n = e.__next, l++;
						}
						let f = "";
						for (n = o, l = 0; n !== null && l < d;) {
							let e = O.get(n);
							if (e === void 0) break;
							let t;
							if (z(e)) {
								let r = C._keyToDOMMap.get(n), i = r && r.__lexicalTextContent;
								typeof i != "string" && a(352, e.getType()), t = i;
							} else t = e.getTextContent();
							f += t, l < d - 1 && z(e) && !e.isInline() && (f += oe), n = e.__next, l++;
						}
						let p = c.__lexicalSlotTextLength || 0, m = p > 0 ? i.slice(p) : i, h = m.slice(0, m.length - e) + f;
						c.__lexicalTextContent = h, w = r + h, Ut(t, c, u);
						return;
					}
					if (function(e, t, n, r, i, o, s, c) {
						if (c !== 1 && c !== -1 || s !== (c === 1 ? 2 : 1)) return !1;
						let l = s - c, u = e.__last;
						for (let e = 0; e < l - 1; e++) {
							if (u === null) return !1;
							let e = _t.get(u);
							if (e === void 0) return !1;
							u = e.__prev;
						}
						if (u === null) return !1;
						let d = O.get(o), f = _t.get(u);
						if (d === void 0 || f === void 0 || d.__prev !== f.__prev) return !1;
						let p = [], m = o;
						for (let e = 0; e < s; e++) {
							if (m === null) return !1;
							p.push(m);
							let e = O.get(m);
							m = e ? e.__next : null;
						}
						let h = [];
						m = u;
						for (let e = 0; e < l; e++) {
							if (m === null) return !1;
							h.push(m);
							let e = _t.get(m);
							m = e ? e.__next : null;
						}
						let g = new Set(h), _ = new Set(p), v = [], y = 0, b = 0;
						for (; y < l && b < s;) if (p[b] === h[y]) v.push({
							key: p[b],
							kind: "reconcile"
						}), y++, b++;
						else if (_.has(h[y])) {
							if (g.has(p[b])) return !1;
							v.push({
								key: p[b],
								kind: "create",
								nextIndex: b
							}), b++;
						} else v.push({
							key: h[y],
							kind: "destroy"
						}), y++;
						for (; y < l;) v.push({
							key: h[y++],
							kind: "destroy"
						});
						for (; b < s;) v.push({
							key: p[b],
							kind: "create",
							nextIndex: b
						}), b++;
						let ee = ot(u, l);
						for (let e of v) {
							let t = dt();
							if (e.kind === "reconcile") Wt(e.key, n.element);
							else if (e.kind === "destroy") Tt(e.key, n.element);
							else {
								let t = null;
								for (let n = e.nextIndex + 1; n < s; n++) {
									let e = C._keyToDOMMap.get(p[n]);
									if (e !== void 0) {
										t = e;
										break;
									}
								}
								zt(e.key, n.withBefore(t ?? n.before));
							}
							if (e.kind !== "destroy") {
								let t = O.get(e.key);
								t && j(t) && T === null && (T = t.getFormat(), E = t.getStyle(), D = t.__key);
							}
							ft(t);
						}
						let x = "";
						for (let e = 0; e < s; e++) {
							let t = O.get(p[e]);
							if (t === void 0) return !1;
							let n;
							if (z(t)) {
								let r = C._keyToDOMMap.get(p[e]), i = r && r.__lexicalTextContent;
								typeof i != "string" && a(350, t.getType()), n = i;
							} else n = t.getTextContent();
							x += n, e < s - 1 && z(t) && !t.isInline() && (x += oe);
						}
						let te = r.__lexicalSlotTextLength || 0, ne = te > 0 ? i.slice(te) : i;
						return r.__lexicalTextContent = ne.slice(0, ne.length - ee) + x, !0;
					}(e, 0, n, c, i, o, d, l)) {
						let e = c.__lexicalTextContent;
						typeof e != "string" && a(353), w = r + e, Ut(t, c, u);
						return;
					}
				}
			}
			if (l === 0) {
				let t = e.__first, n = 0;
				for (; t !== null;) {
					let e = O.get(t);
					if (e === void 0) break;
					let r = Ct || gt.has(t) || ht.has(t), i = dt();
					if (r) Wt(t, s);
					else {
						let n, r;
						if (z(e)) {
							r = yt.get(t);
							let i = r && r.__lexicalTextContent;
							typeof i != "string" && a(354, e.getType()), n = i;
						} else n = e.getTextContent();
						w += n, r !== void 0 && pt(r);
					}
					j(e) ? T === null && (T = e.getFormat(), E = e.getStyle(), D = e.__key) : z(e) && n < o - 1 && !e.isInline() && (w += oe), ft(i), t = e.__next, n++;
				}
				c.__lexicalTextContent = w, c.__lexicalFirstTextKey = D, w = r + w;
				return;
			}
		}
		if (i === 1 && o === 1) {
			let r = e.__first, i = t.__first;
			if (r === i) Wt(r, s);
			else {
				let e = Yt(r), t = zt(i, null);
				try {
					e.parentNode === s ? s.replaceChild(t, e) : n.insertChild(t);
				} catch (n) {
					if (typeof n == "object" && n) {
						let a = `${n.toString()} Parent: ${s.tagName}, new child: {tag: ${t.tagName} key: ${i}}, old child: {tag: ${e.tagName}, key: ${r}}.`;
						throw Error(a);
					}
					throw n;
				}
				Tt(r, null);
			}
			let a = O.get(i);
			j(a) && T === null && (T = a.getFormat(), E = a.getStyle(), D = a.__key);
		} else {
			let r = mc(e, _t), c = mc(t, O);
			if (r.length !== i && a(227), c.length !== o && a(228), i === 0) o !== 0 && Bt(c, t, 0, o - 1, n);
			else if (o === 0) {
				if (i !== 0) {
					let e = n.after == null && n.before == null && Ft(t).size === 0 && n.element.__lexicalLineBreak == null;
					Et(r, 0, i - 1, e ? null : s), e && (s.textContent = "");
				}
			} else (function(e, t, n, r, i, a) {
				let o = r - 1, s = i - 1, c, l, u = a.getFirstChild(), d = 0, f = 0;
				for (; d <= o && f <= s;) {
					let e = t[d], r = n[f], i = dt();
					if (e === r) u = Kt(Wt(r, a.element)), d++, f++;
					else {
						if (l === void 0 && (l = qt(n, f)), c === void 0) c = qt(t, d);
						else if (!c.has(e)) {
							d++, ft(i);
							continue;
						}
						if (!l.has(e)) {
							u = Kt(Yt(e)), Tt(e, a.element), d++, c.delete(e), ft(i);
							continue;
						}
						if (c.has(r)) {
							let e = is(C, r);
							e !== u && a.withBefore(u ?? a.before).insertChild(e), u = Kt(Wt(r, a.element)), d++, f++;
						} else zt(r, a.withBefore(u ?? a.before)), f++;
					}
					let o = O.get(r);
					o !== null && j(o) ? T === null && (T = o.getFormat(), E = o.getStyle(), D = o.__key) : z(o) && f <= s && !o.isInline() && (w += oe), ft(i);
				}
				let p = d > o, m = f > s;
				if (p && !m) {
					let t = n[s + 1], r = t === void 0 ? null : C.getElementByKey(t);
					Bt(n, e, f, s, a.withBefore(r ?? a.before));
				} else m && !p && Et(t, d, o, a.element);
			})(t, r, c, i, o, n);
		}
		c.__lexicalTextContent = w, c.__lexicalFirstTextKey = D, w = r + w;
	}(e, t, qs(t, n, C)), Y(t) || (r = t, T == null || T === r.__textFormat || wt || r.setTextFormat(T), function(e) {
		E == null || E === e.__textStyle || wt || e.setTextStyle(E);
	}(t));
}
function Ut(e, t, n) {
	let r = t.__lexicalFirstTextKey;
	if (r != null) {
		let t = e.__key, i = r;
		for (; i !== null;) {
			let e = O.get(i);
			if (e === void 0) {
				i = null;
				break;
			}
			if (e.__parent === t) break;
			i = e.__parent;
		}
		if (i !== null && !n.has(i)) {
			let e = O.get(r);
			if (j(e)) return T = e.getFormat(), void (E = e.getStyle());
		}
	}
	t.__lexicalFirstTextKey = D;
}
function Wt(e, t) {
	let n = _t.get(e), r = O.get(e);
	n !== void 0 && r !== void 0 || a(61);
	let i = Ct || gt.has(e) || ht.has(e), o = is(C, e);
	if (n === r && !i) {
		let e;
		if (z(n)) {
			let t = o.__lexicalTextContent;
			typeof t != "string" && a(355, n.getType()), e = t, pt(o);
		} else e = n.getTextContent();
		return w += e, o;
	}
	if (n !== r && i && $o(xt, ut, mt, r, "updated"), St.$updateDOM(r, n, o, C)) {
		let n = zt(e, null);
		return t === null && a(62), t.replaceChild(n, o), Tt(e, null), n;
	}
	if (z(n)) {
		z(r) || a(334, e);
		let t = r.__indent;
		(Ct || t !== n.__indent) && kt(o, t);
		let s = r.__format;
		(Ct || s !== n.__format) && At(o, s);
		let c = i && (Ft(r).size > 0 || Ft(n).size > 0) ? Rt(n, r, o) : "";
		if (i) {
			let e = w;
			if (Ht(n, r, o), V(r) || r.isInline() || Vt(0, r, o), c !== "") {
				let t = o.__lexicalTextContent || "";
				o.__lexicalTextContent = c + t, w = e + c + t, o.__lexicalSlotTextLength = c.length;
			} else (Ft(r).size > 0 || Ft(n).size > 0) && (o.__lexicalSlotTextLength = 0);
		} else {
			let e = o.__lexicalTextContent;
			typeof e != "string" && a(356, n.getType()), w += e, pt(o);
		}
		if ((Ct || r.__dir !== n.__dir || r.__parent !== n.__parent) && (jt(o, r), V(r) && !Ct)) for (let e of r.getChildren()) z(e) && jt(is(C, e.getKey()), e);
	} else {
		let t = r.getTextContent();
		if (B(r)) {
			let t = r.decorate(C, lt);
			t !== null && Gt(e, t), i && (Ft(r).size > 0 || Ft(n).size > 0) && Rt(n, r, o);
		}
		w += t;
	}
	if (!wt && V(r)) {
		let e = r.getLatest();
		if (e.__cachedText !== w) {
			let t = e.getWritable();
			t.__cachedText = w, r = t;
		}
	}
	return St.$decorateDOM(r, n, o, C), st(r), o;
}
function Gt(e, t) {
	let n = C._pendingDecorators, r = C._decorators;
	if (n === null) {
		if (r[e] === t) return;
		n = Po(C);
	}
	n[e] = t;
}
function Kt(e) {
	let t = e.nextSibling;
	return t !== null && t === C._blockCursorElement && (t = t.nextSibling), t;
}
function qt(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r = t; r < e.length; r++) n.add(e[r]);
	return n;
}
function Jt(e, t, n, r, i, a) {
	w = "", T = null, E = null, D = null, Ct = r === 2, C = n, lt = n._config, St = n._config.dom || to, ut = n._nodes, mt = C._listeners.mutation, ht = i, gt = a, _t = e._nodeMap, vt = e, O = t._nodeMap, wt = t._readOnly, yt = Ee(n._keyToDOMMap), bt = function() {
		let e = /* @__PURE__ */ new Map(), t = (t) => {
			for (let n of t) {
				let t = O.get(n);
				if (t === void 0) continue;
				let r = t.__parent;
				if (r === null) continue;
				let i = e.get(r);
				i === void 0 && (i = /* @__PURE__ */ new Set(), e.set(r, i)), i.add(n);
			}
		};
		return t(ht.keys()), t(gt), e;
	}();
	let o = /* @__PURE__ */ new Map();
	return xt = o, Wt("root", null), C = void 0, ut = void 0, ht = void 0, gt = void 0, _t = void 0, vt = void 0, O = void 0, lt = void 0, yt = void 0, bt = void 0, xt = void 0, St = to, o;
}
function Yt(e) {
	let t = yt.get(e);
	return t === void 0 && a(75, e), t;
}
function k(e) {
	return { type: e };
}
var Xt = /* @__PURE__ */ k("SELECTION_CHANGE_COMMAND"), Zt = /* @__PURE__ */ k("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), Qt = /* @__PURE__ */ k("CLICK_COMMAND"), $t = /* @__PURE__ */ k("BEFORE_INPUT_COMMAND"), en = /* @__PURE__ */ k("INPUT_COMMAND"), tn = /* @__PURE__ */ k("COMPOSITION_START_COMMAND"), nn = /* @__PURE__ */ k("COMPOSITION_END_COMMAND"), rn = /* @__PURE__ */ k("DELETE_CHARACTER_COMMAND"), an = /* @__PURE__ */ k("INSERT_LINE_BREAK_COMMAND"), on = /* @__PURE__ */ k("INSERT_PARAGRAPH_COMMAND"), sn = /* @__PURE__ */ k("CONTROLLED_TEXT_INSERTION_COMMAND"), cn = /* @__PURE__ */ k("PASTE_COMMAND"), ln = /* @__PURE__ */ k("REMOVE_TEXT_COMMAND"), un = /* @__PURE__ */ k("DELETE_WORD_COMMAND"), dn = /* @__PURE__ */ k("DELETE_LINE_COMMAND"), fn = /* @__PURE__ */ k("FORMAT_TEXT_COMMAND"), pn = /* @__PURE__ */ k("SET_TEXT_FORMAT_COMMAND"), mn = /* @__PURE__ */ k("UNDO_COMMAND"), hn = /* @__PURE__ */ k("REDO_COMMAND"), gn = /* @__PURE__ */ k("KEYDOWN_COMMAND"), _n = /* @__PURE__ */ k("KEY_ARROW_RIGHT_COMMAND"), vn = /* @__PURE__ */ k("MOVE_TO_END"), yn = /* @__PURE__ */ k("KEY_ARROW_LEFT_COMMAND"), bn = /* @__PURE__ */ k("MOVE_TO_START"), xn = /* @__PURE__ */ k("KEY_ARROW_UP_COMMAND"), Sn = /* @__PURE__ */ k("KEY_ARROW_DOWN_COMMAND"), Cn = /* @__PURE__ */ k("KEY_ENTER_COMMAND"), wn = /* @__PURE__ */ k("KEY_SPACE_COMMAND"), Tn = /* @__PURE__ */ k("KEY_BACKSPACE_COMMAND"), En = /* @__PURE__ */ k("KEY_ESCAPE_COMMAND"), Dn = /* @__PURE__ */ k("KEY_DELETE_COMMAND"), On = /* @__PURE__ */ k("KEY_TAB_COMMAND"), kn = /* @__PURE__ */ k("INSERT_TAB_COMMAND"), An = /* @__PURE__ */ k("INDENT_CONTENT_COMMAND"), jn = /* @__PURE__ */ k("OUTDENT_CONTENT_COMMAND"), Mn = /* @__PURE__ */ k("DROP_COMMAND"), Nn = /* @__PURE__ */ k("FORMAT_ELEMENT_COMMAND"), Pn = /* @__PURE__ */ k("DRAGSTART_COMMAND"), Fn = /* @__PURE__ */ k("DRAGOVER_COMMAND"), In = /* @__PURE__ */ k("DRAGEND_COMMAND"), Ln = /* @__PURE__ */ k("COPY_COMMAND"), Rn = /* @__PURE__ */ k("CUT_COMMAND"), zn = /* @__PURE__ */ k("SELECT_ALL_COMMAND"), Bn = /* @__PURE__ */ k("CLEAR_EDITOR_COMMAND"), Vn = /* @__PURE__ */ k("CLEAR_HISTORY_COMMAND"), Hn = /* @__PURE__ */ k("CAN_REDO_COMMAND"), Un = /* @__PURE__ */ k("CAN_UNDO_COMMAND"), Wn = /* @__PURE__ */ k("FOCUS_COMMAND"), Gn = /* @__PURE__ */ k("BLUR_COMMAND"), Kn = /* @__PURE__ */ k("KEY_MODIFIER_COMMAND");
function qn(e) {
	let t = /* @__PURE__ */ new Map();
	return {
		dispose() {
			for (let e of t.values()) e.dispose();
			t.clear();
		},
		register(n, r) {
			let i = t.get(n);
			i === void 0 && (i = {
				dispose: e(n, r),
				holders: /* @__PURE__ */ new Set()
			}, t.set(n, i));
			let a = () => {
				let e = t.get(n);
				e && e.holders.delete(a) && e.holders.size === 0 && (t.delete(n), e.dispose());
			};
			return i.holders.add(a), a;
		}
	};
}
function Jn(e, t, n, r) {
	return e.addEventListener(t, n, r), e.removeEventListener.bind(e, t, n, r);
}
var Yn = Object.freeze({}), Xn = [
	["keydown", function(e, t) {
		let n = t._inputState;
		n.lastKeyDownTimeStamp = e.timeStamp, n.lastKeyCode = e.key, e.key !== "Backspace" && sr(n), !t.isComposing() && q(t, gn, e);
	}],
	["pointerdown", function(e, t) {
		let n = Fs(e), r = e.pointerType;
		Rs(n) && r !== "touch" && r !== "pen" && e.button === 0 && Aa(t, () => {
			sc(n, t) || (t._inputState.isSelectionChangeFromMouseDown = !0);
		});
	}],
	["compositionstart", function(e, t) {
		q(t, tn, e);
	}],
	["compositionend", function(e, t) {
		let n = t._inputState;
		u ? n.compositionPhase = "ending-firefox" : f || !m && !_ ? q(t, nn, e) : (n.compositionPhase = "ending-safari", n.compositionEndData = e.data);
	}],
	["input", function(e, t) {
		e.stopPropagation();
		let n = t._inputState;
		sr(n), Aa(t, () => {
			lr(e, t) || t.dispatchCommand(en, e);
		}, { event: e }), n.unprocessedBeforeInputData = null;
	}],
	["click", function(e, t) {
		Aa(t, () => {
			let n = N(), r = bs(J(t)), i = Ui();
			if (r) {
				if (M(n)) {
					let e = n.anchor, t = e.getNode();
					e.type === "element" && e.offset === 0 && n.isCollapsed() && !V(t) && Io().getChildrenSize() === 1 && t.getTopLevelElementOrThrow().isEmpty() && i !== null && n.is(i) && (r.removeAllRanges(), n.dirty = !0);
				} else if (e.pointerType === "touch" || e.pointerType === "pen") {
					let n = ks(r, t._rootElement).anchorNode;
					(Z(n) || xo(n)) && G(Hi(i, r, t, e));
				}
			}
			q(t, Qt, e);
		});
	}],
	["cut", Yn],
	["copy", Yn],
	["dragstart", Yn],
	["dragover", Yn],
	["dragend", Yn],
	["paste", Yn],
	["focus", Yn],
	["blur", Yn],
	["drop", Yn]
];
d && Xn.push(["beforeinput", (e, t) => function(e, t) {
	let n = e.inputType;
	n === "deleteCompositionText" || u && rs(t) || n !== "insertCompositionText" && Aa(t, () => {
		lr(e, t) || q(t, $t, e);
	}, { event: e });
}(e, t)]);
var Zn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), $n = qn((e) => (e.addEventListener("selectionchange", yr), () => e.removeEventListener("selectionchange", yr)));
function er(e, t, n, r, i, a) {
	let o = e.anchor, s = e.focus, c = o.getNode(), l = R(), u;
	if (a !== void 0) u = a;
	else {
		let e = bs(J(l));
		u = e === null ? null : ks(e, l._rootElement);
	}
	let f = u === null ? null : u.anchorNode, p = o.key, m = l.getElementByKey(p), h = n.length;
	return p !== s.key || !j(c) || (!i && (!d || l._inputState.lastBeforeInputInsertTextTimeStamp < r + 50) || c.isDirty() && h < 2 || zo(n)) && o.offset !== s.offset && !c.isComposing() || bo(c) || c.isDirty() && h > 1 || (i || !d) && m !== null && !c.isComposing() && f !== Ys(c, m, l) || u !== null && t !== null && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || !c.isComposing() && (c.getFormat() !== e.format || c.getStyle() !== e.style) || function(e, t) {
		if (t.isSegmented()) return !0;
		if (!e.isCollapsed()) return !1;
		let n = e.anchor.offset, r = t.getParentOrThrow(), i = yo(t);
		return n === 0 ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || i || function(e) {
			let t = e.getPreviousSibling();
			return (j(t) || z(t) && t.isInline()) && !t.canInsertTextAfter();
		}(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || i);
	}(e, c);
}
function tr(e, t) {
	return xo(e) && e.nodeValue !== null && t !== 0 && t !== e.nodeValue.length;
}
function nr(e, t, n) {
	let { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: s } = ks(e, t._rootElement), c = t._inputState;
	c.isSelectionChangeFromDOMUpdate && (c.isSelectionChangeFromDOMUpdate = !1, tr(r, i) && tr(o, s) && !c.postDeleteSelectionToRestore) || Aa(t, () => {
		if (!n) return void G(null);
		if (!mo(t, r, o)) return;
		let l = N();
		if (c.postDeleteSelectionToRestore && M(l) && l.isCollapsed()) {
			let e = l.anchor, t = c.postDeleteSelectionToRestore.anchor;
			(e.key === t.key && e.offset === t.offset + 1 || e.offset === 1 && t.getNode().is(e.getNode().getPreviousSibling())) && (l = c.postDeleteSelectionToRestore.clone(), G(l));
		}
		if (c.postDeleteSelectionToRestore = null, M(l)) {
			let n = l.anchor, u = n.getNode();
			if (l.isCollapsed()) {
				e.type === "Range" && r === o && (l.dirty = !0);
				let i = J(t).event, s = i ? i.timeStamp : performance.now(), { format: d, style: f, offset: p, key: m, timeStamp: h } = c.collapsedSelectionFormat, g = Io(), _ = !1 === t.isComposing() && g.getTextContent() === "";
				if (s < h + 200 && n.offset === p && n.key === m) rr(l, d, f);
				else if (n.type === "text") j(u) || a(141), ir(l, u);
				else if (n.type === "element" && !_) {
					z(u) || a(259);
					let e = n.getNode();
					e.isEmpty() ? function(e, t) {
						rr(e, t.getTextFormat(), t.getTextStyle());
					}(l, e) : rr(l, l.format, "");
				}
			} else {
				let e = n.key, t = l.focus.key, r = l.getNodes(), a = r.length, o = l.isBackward(), c = o ? s : i, u = o ? i : s, d = o ? t : e, f = o ? e : t, p = 2047, m = !1;
				for (let e = 0; e < a; e++) {
					let t = r[e], n = t.getTextContentSize();
					if (j(t) && n !== 0 && !(e === 0 && t.__key === d && c === n || e === a - 1 && t.__key === f && u === 0) && (m = !0, p &= t.getFormat(), p === 0)) break;
				}
				l.format = m ? p : 0;
			}
		}
		q(t, Xt, void 0);
	});
}
function rr(e, t, n) {
	e.format === t && e.style === n || (e.format = t, e.style = n, e.dirty = !0);
}
function ir(e, t) {
	rr(e, t.getFormat(), t.getStyle());
}
function ar(e) {
	if (!e.getTargetRanges) return null;
	let t = e.getTargetRanges();
	return t.length === 0 ? null : t[0];
}
function or(e) {
	let { lastKeyCode: t } = R()._inputState;
	if (e == null || e.length <= 1 || t == null) return;
	let n = t.length === 1 ? t : t === "Enter" ? "\n" : t === "Tab" ? "	" : null;
	if (!n) return;
	let r = N();
	if (!M(r) || !r.isCollapsed()) return;
	let i = r.anchor.getNode();
	if (!j(i)) return;
	let { offset: a } = r.anchor;
	if (i.getTextContentSize() === a) {
		let e = i.getNextSibling();
		if (n === "\n") {
			if (Ga(e)) e.selectEnd();
			else if (!e) {
				let e = pc(i, Li), t = e && e.getNextSibling();
				z(t) && t.selectStart();
			}
		} else n === "	" ? li(e) && e.selectEnd() : j(e) && e.getTextContent()[0] === n && e.select(1, 1);
	} else i.getTextContent()[a] === n && i.select(a + 1, a + 1);
}
function sr(e) {
	e.isInsertTextAfterHandledSelectionCommand = !1, e.handledSelectionCommandTimeoutId !== null && (clearTimeout(e.handledSelectionCommandTimeoutId), e.handledSelectionCommandTimeoutId = null);
}
function cr(e) {
	sr(e), e.isInsertTextAfterHandledSelectionCommand = !0, e.handledSelectionCommandTimeoutId = setTimeout(() => sr(e), 0);
}
function lr(e, t) {
	let n = Fs(e);
	if (Z(n) && sc(n, t)) return !0;
	let r = t.getRootElement();
	if (r === null) return !1;
	let i = Ps(r.ownerDocument);
	return i !== null && r.contains(i) && sc(i, t);
}
function ur(e) {
	let t = e.inputType, n = ar(e), r = R(), i = r._inputState, o = N();
	if (t === "insertText" && e.data && i.isInsertTextAfterHandledSelectionCommand) {
		if (sr(i), e.preventDefault(), M(o) && !o.isCollapsed()) {
			let e = o.isBackward() ? o.anchor : o.focus;
			o.anchor.set(e.key, e.offset, e.type), o.focus.set(e.key, e.offset, e.type);
		}
		return !0;
	}
	if (t === "deleteContentBackward") {
		if (o === null) {
			let e = Ui();
			if (!M(e)) return !0;
			G(e.clone());
		}
		if (M(o)) {
			let t = o.anchor.key === o.focus.key;
			if (function(e, t) {
				return e.lastKeyCode === "MediaLast" && t < e.lastKeyDownTimeStamp + 30;
			}(i, e.timeStamp) && r.isComposing() && t) {
				if (U(null), i.lastKeyDownTimeStamp = 0, setTimeout(() => {
					Aa(r, () => {
						U(null);
					});
				}, 30), M(o)) {
					let e = o.anchor.getNode();
					e.markDirty(), j(e) || a(142), ir(o, e);
				}
			} else {
				if (U(null), f && n !== null && !n.collapsed && (o.applyDOMRange(n), !o.isCollapsed())) return e.preventDefault(), o.removeText(), !0;
				e.preventDefault();
				let a = o.anchor.getNode(), s = a.getTextContent(), c = a.canInsertTextAfter(), l = o.anchor.offset === 0 && o.focus.offset === s.length, u = g && t && !l && c;
				if (u && o.isCollapsed() && (u = !B(ns(o.anchor, !0))), !u) {
					q(r, rn, !0);
					let e = N();
					g && M(e) && e.isCollapsed() && (i.postDeleteSelectionToRestore = e, setTimeout(() => i.postDeleteSelectionToRestore = null));
				}
			}
			return !0;
		}
	}
	if (!M(o)) return !0;
	let s = e.data;
	i.unprocessedBeforeInputData !== null && Uo(!1, r, i.unprocessedBeforeInputData), o.dirty && i.unprocessedBeforeInputData === null || !o.isCollapsed() || V(o.anchor.getNode()) || n === null || o.applyDOMRange(n), i.unprocessedBeforeInputData = null;
	let c = o.anchor, l = o.focus, u = c.getNode(), d = l.getNode();
	if (t === "insertText" || t === "insertTranspose") {
		if (s === "\n") e.preventDefault(), q(r, an, !1);
		else if (s === oe) e.preventDefault(), q(r, on, void 0);
		else if (s == null && e.dataTransfer) {
			let t = e.dataTransfer.getData("text/plain");
			e.preventDefault(), o.insertRawText(t);
		} else s != null && er(o, n, s, e.timeStamp, !0) ? (e.preventDefault(), q(r, sn, s), or(s)) : i.unprocessedBeforeInputData = s;
		return i.lastBeforeInputInsertTextTimeStamp = e.timeStamp, !0;
	}
	switch (e.preventDefault(), t) {
		case "insertFromYank":
		case "insertFromDrop":
		case "insertReplacementText":
			q(r, sn, e), or((e.dataTransfer ? e.dataTransfer.getData("text/plain") : null) ?? e.data);
			break;
		case "insertFromComposition": {
			let t = i.hadOrphanedCompositionEvents;
			i.hadOrphanedCompositionEvents = !1;
			let n = r._compositionKey;
			U(null), t || q(r, sn, e), mr(n);
			break;
		}
		case "insertLineBreak":
			U(null), q(r, an, !1);
			break;
		case "insertParagraph":
			U(null), i.isInsertLineBreak && !f ? (i.isInsertLineBreak = !1, q(r, an, !1)) : q(r, on, void 0);
			break;
		case "insertFromPaste":
		case "insertFromPasteAsQuotation":
			q(r, cn, e);
			break;
		case "deleteByComposition":
			(function(e, t) {
				return e !== t || z(e) || z(t) || !yo(e) || !yo(t);
			})(u, d) && q(r, ln, e);
			break;
		case "deleteByDrag":
			ss(Lr), q(r, ln, e);
			break;
		case "deleteByCut":
			q(r, ln, e);
			break;
		case "deleteContent":
			q(r, rn, !1);
			break;
		case "deleteWordBackward":
			q(r, un, !0);
			break;
		case "deleteWordForward":
			q(r, un, !1);
			break;
		case "deleteHardLineBackward":
		case "deleteSoftLineBackward":
			q(r, dn, !0);
			break;
		case "deleteContentForward":
		case "deleteHardLineForward":
		case "deleteSoftLineForward":
			q(r, dn, !1);
			break;
		case "formatStrikeThrough":
			q(r, fn, "strikethrough");
			break;
		case "formatBold":
			q(r, fn, "bold");
			break;
		case "formatItalic":
			q(r, fn, "italic");
			break;
		case "formatUnderline":
			q(r, fn, "underline");
			break;
		case "historyUndo":
			q(r, mn, void 0);
			break;
		case "historyRedo": q(r, hn, void 0);
	}
	return !0;
}
function dr(e) {
	let t = R(), n = t._inputState, r = N(), i = e.data, a = ar(e), o = !1;
	if (i != null && M(r)) {
		let s = bs(J(t)), c = s === null ? null : ks(s, t._rootElement), l = e.inputType === "insertCompositionText" && n.compositionPhase !== "ending-firefox" && !t.isComposing();
		l && (n.hadOrphanedCompositionEvents = !0);
		let f = r.anchor.getNode(), p = e.inputType === "insertCompositionText" && n.compositionPhase !== "ending-firefox" && t.isComposing() && j(f) && bo(f);
		if (!l && !p && er(r, a, i, e.timeStamp, !1, c)) {
			if (o = !0, n.compositionPhase === "ending-firefox") {
				let e = hr(t, i);
				if (n.compositionPhase = "idle", e) return ss(zr), Lo(), !0;
			}
			let a = r.anchor.getNode();
			if (s === null || c === null) return !0;
			let l = r.isBackward(), f = l ? r.anchor.offset : r.focus.offset, p = l ? r.focus.offset : r.anchor.offset;
			d && !r.isCollapsed() && j(a) && c.anchorNode !== null && a.getTextContent().slice(0, f) + i + a.getTextContent().slice(f + p) === Ho(c.anchorNode) || q(t, sn, i);
			let m = i.length;
			u && m > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (r.anchor.offset -= m, r._cachedNodes = null, r._cachedIsBackward = null), g && t.isComposing() && (n.lastKeyDownTimeStamp = 0, U(null));
		}
	}
	return o || (Uo(!1, t, i === null ? void 0 : i), n.compositionPhase === "ending-firefox" && (hr(t, i || void 0), ss("composition-end"), n.compositionPhase = "idle")), Lo(), !0;
}
function fr(e) {
	let t = R(), n = t._inputState, r = N();
	if (M(r) && !t.isComposing()) {
		n.compositionPhase = "composing", n.hadOrphanedCompositionEvents = !1;
		let i = r.anchor, a = r.anchor.getNode();
		if (U(i.key), ss("composition-start"), e.timeStamp < n.lastKeyDownTimeStamp + 30 || i.type === "element" || !r.isCollapsed() || !g && (a.getFormat() !== r.format || j(a) && a.getStyle() !== r.style) || j(a) && (bo(a) || i.offset === 0 && !a.canInsertTextBefore() || i.offset === a.getTextContentSize() && !a.canInsertTextAfter())) {
			q(t, sn, se);
			let e = N();
			M(e) && U(e.anchor.key);
		}
	}
	return !0;
}
function pr(e) {
	let t = R();
	return t._inputState.compositionPhase = "idle", hr(t, e.data), ss(zr), !0;
}
function mr(e) {
	if (e === null) return;
	let t = W(e);
	if (!j(t) || t.getType() === "text" || bo(t) || !t.isAttached()) return;
	let n = N(), r = M(n) && n.anchor.key === e ? n.anchor.offset : null, i = A(t.getTextContent());
	if (i.setFormat(t.getFormat()), i.setStyle(t.getStyle()), t.replace(i), r !== null) {
		let e = Math.min(r, i.getTextContentSize());
		i.select(e, e);
	}
}
function hr(e, t) {
	let n = e._compositionKey;
	if (U(null), n !== null && t != null) {
		if (t === "") {
			let t = W(n), r = e.getElementByKey(n), i = r !== null && j(t) ? Ys(t, r, e) : null;
			if (i !== null && i.nodeValue !== null && j(t)) {
				let n = bs(J(e)), r = n && ks(n, e._rootElement), a = null, o = null;
				r !== null && r.anchorNode === i && (a = r.anchorOffset, o = r.focusOffset), Wo(t, i.nodeValue, a, o, !0);
			}
			return mr(n), !1;
		}
		if (t[t.length - 1] === "\n") {
			let t = N();
			if (M(t) || _i(t)) {
				if (M(t)) {
					let e = t.focus;
					t.anchor.set(e.key, e.offset, e.type);
				}
				return q(e, Cn, null), mr(n), !1;
			}
		}
		let r = W(n);
		if (r !== null && j(r) && bo(r)) {
			r.markDirty();
			let e = N(), i = r.getTextContentSize(), a = M(e) && e.anchor.key === n ? e.anchor.offset : i;
			return r.select(a, a).insertText(t), !0;
		}
	}
	return Uo(!0, e, t), mr(n), !1;
}
function gr(e) {
	let t = R(), n = t._inputState;
	if (e.key == null) return !0;
	if (n.compositionPhase === "ending-safari") {
		let r = Xo(e);
		if (r && Aa(t, () => {
			hr(t, n.compositionEndData);
		}), n.compositionPhase = "idle", n.compositionEndData = "", r) return !0;
	}
	if (function(e) {
		return K(e, "ArrowRight", { shiftKey: "any" });
	}(e)) q(t, _n, e);
	else if (function(e) {
		return K(e, "ArrowRight", {
			...Jo,
			shiftKey: "any"
		});
	}(e)) q(t, vn, e);
	else if (function(e) {
		return K(e, "ArrowLeft", { shiftKey: "any" });
	}(e)) q(t, yn, e);
	else if (function(e) {
		return K(e, "ArrowLeft", {
			...Jo,
			shiftKey: "any"
		});
	}(e)) q(t, bn, e);
	else if (function(e) {
		return K(e, "ArrowUp", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) q(t, xn, e);
	else if (function(e) {
		return K(e, "ArrowDown", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) q(t, Sn, e);
	else if (function(e) {
		return K(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any",
			shiftKey: !0
		});
	}(e)) n.isInsertLineBreak = !0, q(t, Cn, e);
	else if (function(e) {
		return e.key === " ";
	}(e)) q(t, wn, e);
	else if (function(e) {
		return l && K(e, "o", { ctrlKey: !0 });
	}(e)) e.preventDefault(), n.isInsertLineBreak = !0, q(t, an, !0);
	else if (function(e) {
		return K(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any"
		});
	}(e)) n.isInsertLineBreak = !1, q(t, Cn, e);
	else if (function(e) {
		return K(e, "Backspace", { shiftKey: "any" }) || l && K(e, "h", { ctrlKey: !0 });
	}(e)) Xo(e) ? q(t, Tn, e) && cr(n) : (e.preventDefault(), q(t, rn, !0));
	else if (function(e) {
		return e.key === "Escape";
	}(e)) q(t, En, e);
	else if (function(e) {
		return K(e, "Delete", {}) || l && K(e, "d", { ctrlKey: !0 });
	}(e)) (function(e) {
		return e.key === "Delete";
	})(e) ? q(t, Dn, e) : (e.preventDefault(), q(t, rn, !1));
	else if (function(e) {
		return K(e, "Backspace", Yo);
	}(e)) e.preventDefault(), q(t, un, !0);
	else if (function(e) {
		return K(e, "Delete", Yo);
	}(e)) e.preventDefault(), q(t, un, !1);
	else if (function(e) {
		return l && K(e, "Backspace", { metaKey: !0 });
	}(e)) e.preventDefault(), q(t, dn, !0);
	else if (function(e) {
		return l && (K(e, "Delete", { metaKey: !0 }) || K(e, "k", { ctrlKey: !0 }));
	}(e)) e.preventDefault(), q(t, dn, !1);
	else if (function(e) {
		return K(e, "b", Jo);
	}(e)) e.preventDefault(), q(t, fn, "bold");
	else if (function(e) {
		return K(e, "u", Jo);
	}(e)) e.preventDefault(), q(t, fn, "underline");
	else if (function(e) {
		return K(e, "i", Jo);
	}(e)) e.preventDefault(), q(t, fn, "italic");
	else if (function(e) {
		return K(e, "Tab", { shiftKey: "any" });
	}(e)) q(t, On, e);
	else if (function(e) {
		return K(e, "z", Jo);
	}(e)) e.preventDefault(), q(t, mn, void 0);
	else if (function(e) {
		return l ? K(e, "z", {
			metaKey: !0,
			shiftKey: !0
		}) : K(e, "y", { ctrlKey: !0 }) || K(e, "z", {
			ctrlKey: !0,
			shiftKey: !0
		});
	}(e)) e.preventDefault(), q(t, hn, void 0);
	else {
		let r = t._editorState._selection;
		(function(e) {
			return K(e, "a", Jo);
		})(e) ? (e.preventDefault(), q(t, zn, e) && cr(n)) : r === null || M(r) || (function(e) {
			return K(e, "c", Jo);
		}(e) ? (e.preventDefault(), q(t, Ln, e)) : function(e) {
			return K(e, "x", Jo);
		}(e) && (e.preventDefault(), q(t, Rn, e)));
	}
	return function(e) {
		return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
	}(e) && t.dispatchCommand(Kn, e), !0;
}
function _r(e) {
	let t = e.__lexicalEventHandles;
	return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
var vr = /* @__PURE__ */ new Map();
function yr(e) {
	let t = xs(e.target);
	if (t === null) return;
	let n = os(e.target), r = null, i = null, a = n === null ? void 0 : Qn.get(n);
	if (n !== null) {
		if (a !== void 0) {
			let e = a.editors, n = a.hasShadowEditor;
			if (n === void 0) {
				n = !1;
				for (let t of e) if (t._rootElement !== null && Ss(t._rootElement.getRootNode())) {
					n = !0;
					break;
				}
				a.hasShadowEditor = n;
			}
			if (n) {
				let n = null, a = null;
				for (let o of e) {
					let e = o._rootElement;
					if (e === null) continue;
					let s = ks(t, e).anchorNode;
					if (s !== null && go(s) === o) {
						if (Ss(e.getRootNode())) {
							r = o, i = s;
							break;
						}
						n === null && (n = o, a = s);
					}
				}
				r === null && n !== null && (r = n, i = a);
			} else {
				let e = t.anchorNode;
				e === null || Z(e) && e.shadowRoot !== null || (r = go(e), r !== null && (i = e));
			}
		}
		if (r === null) {
			let e = Ps(n);
			r = e === null ? null : go(e);
		}
	}
	if (r === null) return;
	if (r._inputState.isSelectionChangeFromMouseDown) {
		if (a !== void 0) for (let e of a.editors) e._inputState.isSelectionChangeFromMouseDown = !1;
		Aa(r, () => {
			let n = Ui(), a = i ?? ks(t, r._rootElement).anchorNode;
			(Z(a) || xo(a)) && G(Hi(n, t, r, e));
		});
	}
	let o = Bo(r), s = o[o.length - 1], c = s._key, l = vr.get(c), u = l || s;
	u !== r && nr(t, u, !1), nr(t, r, !0), r === s ? l && vr.delete(c) : vr.set(c, r);
}
function br(e) {
	e._lexicalHandled = !0;
}
function xr(e) {
	return !0 === e._lexicalHandled;
}
function Sr(e) {
	let t = Zn.get(e);
	if (t === void 0) return;
	let n = Qn.get(t);
	if (n === void 0) return;
	Zn.delete(e);
	let r = _o(e);
	ho(r) ? (function(e) {
		if (e._parentEditor !== null) {
			let t = Bo(e), n = t[t.length - 1]._key;
			vr.get(n) === e && vr.delete(n);
		} else vr.delete(e._key);
	}(r), n.editors.delete(r), n.hasShadowEditor = void 0, e.__lexicalEditor = null) : r && a(198);
	let i = _r(e);
	for (let e = 0; e < i.length; e++) i[e]();
	e.__lexicalEventHandles = [];
}
function Cr(e, t, n) {
	L();
	let r = e.__key, i = e.getParent();
	if (i === null) return void (Q(e) !== null && a(367, r, String(Q(e))));
	let o = function(e) {
		let t = N();
		if (!M(t) || !z(e)) return t;
		let { anchor: n, focus: r } = t, i = n.getNode(), a = r.getNode();
		return ls(i, e) && n.set(e.__key, 0, "element"), ls(a, e) && r.set(e.__key, 0, "element"), t;
	}(e), s = !1;
	if (M(o) && t) {
		let t = o.anchor, n = o.focus;
		t.key === r && (Ki(t, e, i, e.getPreviousSibling(), e.getNextSibling()), s = !0), n.key === r && (Ki(n, e, i, e.getPreviousSibling(), e.getNextSibling()), s = !0);
	} else _i(o) && t && e.isSelected() && e.selectPrevious();
	if (M(o) && t && !s) {
		let t = e.getIndexWithinParent();
		Do(e), Wi(o, i, t, -1);
	} else Do(e);
	n || Y(i) || i.canBeEmpty() || !i.isEmpty() || Cr(i, t), t && o && V(i) && i.isEmpty() && i.selectEnd();
}
function wr(e) {
	return e;
}
var Tr = Symbol.for("ephemeral");
function Er(e) {
	return e[Tr] || !1;
}
var Dr = {
	configurable: !0,
	enumerable: !1,
	value: void 0,
	writable: !0
}, Or = class {
	__type;
	__key;
	__parent;
	__prev;
	__next;
	__state;
	[at];
	static getType() {
		let { ownNodeType: e } = uc(this);
		return e === void 0 && a(64, this.name), e;
	}
	static clone(e) {
		a(65, this.name);
	}
	$config() {
		return {};
	}
	config(e, t) {
		let n = t.extends || hc(this.constructor);
		return Object.assign(t, { extends: n }), typeof e == "string" && Object.assign(t, { type: e }), { [e]: t };
	}
	afterCloneFrom(e) {
		this.__key === e.__key ? (this.__parent = e.__parent, this.__next = e.__next, this.__prev = e.__prev, this.__state = e.__state) : e.__state && (this.__state = e.__state.getWritable(this));
	}
	resetOnCopyNodeFrom(e) {
		this.__state &&= this.__state.getWritable(this).resetOnCopyNode();
	}
	static importDOM;
	constructor(e) {
		this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", Dr), Object.defineProperty(this, at, Dr), Eo(this, e);
	}
	getType() {
		return this.__type;
	}
	isInline() {
		a(137, this.constructor.name);
	}
	isAttached() {
		let e = this.__key;
		for (; e !== null;) {
			if (e === "root") return !0;
			let t = W(e);
			if (t === null) break;
			e = t.__parent === null ? Q(t) : t.__parent;
		}
		return !1;
	}
	isSelected(e) {
		let t = e || N();
		if (t == null) return !1;
		let n = t.getNodes().some((e) => e.__key === this.__key);
		if (j(this)) return n;
		if (M(t) && t.anchor.type === "element" && t.focus.type === "element") {
			if (t.isCollapsed()) return !1;
			let e = this.getParent();
			if (B(this) && this.isInline() && e) {
				let n = t.isBackward() ? t.focus : t.anchor;
				if (e.is(n.getNode()) && n.offset === e.getChildrenSize() && this.is(e.getLastChild())) return !1;
			}
		}
		return n;
	}
	getKey() {
		return this.__key;
	}
	getIndexWithinParent() {
		let e = this.getParent();
		if (e === null) return -1;
		let t = e.getFirstChild(), n = 0;
		for (; t !== null;) {
			if (this.is(t)) return n;
			n++, t = t.getNextSibling();
		}
		return -1;
	}
	getParent() {
		let e = this.getLatest().__parent;
		return e === null ? null : W(e);
	}
	getParentOrThrow() {
		let e = this.getParent();
		return e === null && a(66, this.__key), e;
	}
	getTopLevelElement() {
		let e = this;
		for (; e !== null;) {
			let t = e.getParent();
			if (Y(t) || Q(e) !== null) return z(e) || e === this && B(e) || a(194), e;
			e = t;
		}
		return null;
	}
	getTopLevelElementOrThrow() {
		let e = this.getTopLevelElement();
		return e === null && a(67, this.__key), e;
	}
	getParents() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t), t = t.getParent();
		return e;
	}
	getParentKeys() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t.__key), t = t.getParent();
		return e;
	}
	getPreviousSibling() {
		let e = this.getLatest().__prev;
		return e === null ? null : W(e);
	}
	getPreviousSiblings() {
		let e = [], t = this.getParent();
		if (t === null) return e;
		let n = t.getFirstChild();
		for (; n !== null && !n.is(this);) e.push(n), n = n.getNextSibling();
		return e;
	}
	getNextSibling() {
		let e = this.getLatest().__next;
		return e === null ? null : W(e);
	}
	getNextSiblings() {
		let e = [], t = this.getNextSibling();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getCommonAncestor(e) {
		let t = z(this) ? this : this.getParent(), n = z(e) ? e : e.getParent(), r = t && n ? pl(t, n) : null;
		return r ? r.commonAncestor : null;
	}
	is(e) {
		return e != null && this.__key === e.__key;
	}
	isBefore(e) {
		let t = pl(this, e);
		return t !== null && (t.type === "descendant" || (t.type === "branch" ? ul(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && a(279), !1)));
	}
	isParentOf(e) {
		return ls(e, this);
	}
	getNodesBetween(e) {
		let t = this.isBefore(e), n = [], r = /* @__PURE__ */ new Set(), i = this;
		for (; i !== null;) {
			let o = i.__key;
			if (r.has(o) || (r.add(o), n.push(i)), i === e) break;
			let s = z(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
			if (s !== null) {
				i = s;
				continue;
			}
			let c = t ? i.getNextSibling() : i.getPreviousSibling();
			if (c !== null) {
				i = c;
				continue;
			}
			let l = i.getParentOrThrow();
			if (r.has(l.__key) || n.push(l), l === e) break;
			let u = null, d = l;
			do {
				if (d === null && a(68), u = t ? d.getNextSibling() : d.getPreviousSibling(), d = d.getParent(), d === null) break;
				u !== null || r.has(d.__key) || n.push(d);
			} while (u === null);
			i = u;
		}
		return t || n.reverse(), n;
	}
	isDirty() {
		let e = R()._dirtyLeaves;
		return e !== null && e.has(this.__key);
	}
	getLatest() {
		if (Er(this)) return this;
		let e = W(this.__key);
		return e === null && a(113), e;
	}
	getWritable() {
		if (Er(this)) return this;
		L();
		let e = pa(), t = R(), n = e._nodeMap, r = this.__key, i = this.getLatest(), a = t._cloneNotNeeded, o = N();
		if (o !== null && o.setCachedNodes(null), a.has(r)) return Oo(i), i;
		let s = $s(i);
		return a.add(r), Oo(s), n.set(r, s), s;
	}
	getTextContent() {
		return jc(this);
	}
	getTextContentSize() {
		return this.getTextContent().length;
	}
	createDOM(e, t) {
		a(70);
	}
	updateDOM(e, t, n) {
		a(71);
	}
	getDOMSlot(e) {
		return new ve(e);
	}
	exportDOM(e) {
		return { element: this.createDOM(e._config, e) };
	}
	exportJSON() {
		let e = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...e
		};
	}
	static importJSON(e) {
		a(18, this.name);
	}
	updateFromJSON(e) {
		return function(e, t) {
			let n = e.getWritable(), r = t.$, i = r;
			for (let e of Je(n).flatKeys) e in t && (i !== void 0 && i !== r || (i = { ...r }), i[e] = t[e]);
			return (n.__state || i) && qe(e).updateFromJSON(i), n;
		}(this, e);
	}
	static transform() {
		return null;
	}
	remove(e) {
		Cr(this, !0, e);
	}
	replace(e, t) {
		L();
		let n = N();
		n !== null && (n = n.clone()), gs(this, e);
		let r = this.getLatest(), i = this.__key, o = e.__key, s = e.getWritable(), c = this.getParentOrThrow().getWritable(), l = c.__size, u = s.getParent(), d = u === null ? -1 : s.getIndexWithinParent();
		Do(s), u !== null && M(n) && Wi(n, u, d, -1);
		let f = r.getPreviousSibling(), p = r.getNextSibling(), m = r.__prev, h = r.__next, g = r.__parent;
		Cr(r, !1, !0), f === null ? c.__first = o : f.getWritable().__next = o, s.__prev = m, p === null ? c.__last = o : p.getWritable().__prev = o, s.__next = h, s.__parent = g, c.__size = l;
		let _ = 0;
		t && (z(this) && z(s) || a(139), _ = s.getChildrenSize(), s.splice(_, 0, this.getChildren()));
		let v = Cc(this);
		if (v.length > 0) {
			_c(this) && _c(s) || a(368, this.__key, s.__key);
			for (let e of v) {
				let t = wc(this, e);
				t !== null && (Fc(this, e), Pc(s, e, t));
			}
		}
		if (M(n)) {
			G(n);
			let e = n.anchor, r = n.focus;
			e.key === i && (t && e.type === "element" ? e.set(s.__key, _ + e.offset, "element") : pi(e, s)), r.key === i && (t && r.type === "element" ? r.set(s.__key, _ + r.offset, "element") : pi(r, s));
		}
		return ko() === i && U(o), s;
	}
	insertAfter(e, t = !0) {
		L(), gs(this, e);
		let n = this.getWritable(), r = e.getWritable();
		this.getParentOrThrow();
		let i = r.getParent(), a = N(), o = !1, s = !1;
		if (i !== null) {
			let n = e.getIndexWithinParent();
			if (M(a)) {
				let e = i.__key, t = a.anchor, r = a.focus;
				o = t.type === "element" && t.key === e && t.offset === n + 1, s = r.type === "element" && r.key === e && r.offset === n + 1;
			}
			Do(r), t && M(a) && Wi(a, i, n, -1);
		} else Do(r);
		let c = this.getNextSibling(), l = this.getParentOrThrow().getWritable(), u = r.__key, d = n.__next;
		if (c === null ? l.__last = u : c.getWritable().__prev = u, l.__size++, n.__next = u, r.__next = d, r.__prev = n.__key, r.__parent = n.__parent, t && M(a)) {
			let e = this.getIndexWithinParent();
			Wi(a, l, e + 1);
			let t = l.__key;
			o && a.anchor.set(t, e + 2, "element"), s && a.focus.set(t, e + 2, "element");
		}
		return e;
	}
	insertBefore(e, t = !0) {
		L(), gs(this, e);
		let n = this.getWritable(), r = e.getWritable();
		this.getParentOrThrow();
		let i = r.__key, a = N(), o = r.getParent(), s = o === null ? -1 : r.getIndexWithinParent();
		Do(r), o !== null && t && M(a) && Wi(a, o, s, -1);
		let c = this.getPreviousSibling(), l = this.getParentOrThrow().getWritable(), u = n.__prev, d = this.getIndexWithinParent();
		return c === null ? l.__first = i : c.getWritable().__next = i, l.__size++, n.__prev = i, r.__prev = u, r.__next = n.__key, r.__parent = n.__parent, t && M(a) && Wi(a, this.getParentOrThrow(), d), e;
	}
	isParentRequired() {
		return !1;
	}
	createParentElementNode() {
		return H();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	selectPrevious(e, t) {
		L();
		let n = yc(this);
		if (n !== null) return n.selectPrevious(e, t);
		let r = this.getPreviousSibling(), i = this.getParentOrThrow();
		if (r === null) return i.select(0, 0);
		if (z(r)) return r.select();
		if (!j(r)) {
			let e = r.getIndexWithinParent() + 1;
			return i.select(e, e);
		}
		return r.select(e, t);
	}
	selectNext(e, t) {
		L();
		let n = yc(this);
		if (n !== null) return n.selectNext(e, t);
		let r = this.getNextSibling(), i = this.getParentOrThrow();
		if (r === null) return i.select();
		if (z(r)) return r.select(0, 0);
		if (!j(r)) {
			let e = r.getIndexWithinParent();
			return i.select(e, e);
		}
		return r.select(e, t);
	}
	markDirty() {
		this.getWritable();
	}
	reconcileObservedMutation(e, t) {
		this.markDirty();
	}
};
function kr(e) {
	return e instanceof Or;
}
var Ar = "historic", jr = "history-push", Mr = "history-merge", Nr = "paste", Pr = "collaboration", Fr = "skip-scroll-into-view", Ir = "skip-dom-selection", Lr = "skip-selection-focus", Rr = "composition-start", zr = "composition-end", Br = "!important";
function Vr(e) {
	let t = {};
	if (!e) return t;
	let n = "", r = "", i = null, a = !1, o = !1, s = !1, c = 0, l = e.length, u = -1;
	for (let d = 0; d < l; d++) {
		let l = e[d];
		if (a) l === "*" && e[d + 1] === "/" && (a = !1, d++);
		else if (o) u === -1 && (u = d), o = !1;
		else if (i === null) if (l !== "/" || e[d + 1] !== "*") if (l !== "\"" && l !== "'") if (l !== "(") if (l !== ")") if (s || l !== ":" || c !== 0) {
			if (l === ";" && c === 0) {
				u !== -1 && (s ? r += e.slice(u, d) : n += e.slice(u, d), u = -1);
				let i = n.trim(), a = r.trim();
				i !== "" && a !== "" && (t[i] = a), n = "", r = "", s = !1;
				continue;
			}
			u === -1 && (u = d);
		} else u !== -1 && (n += e.slice(u, d), u = -1), s = !0;
		else u === -1 && (u = d), c = Math.max(0, c - 1);
		else u === -1 && (u = d), c++;
		else u === -1 && (u = d), i = l;
		else u !== -1 && (s ? r += e.slice(u, d) : n += e.slice(u, d), u = -1), a = !0, d++;
		else u === -1 && (u = d), l === "\\" ? o = !0 : l === i && (i = null);
	}
	u !== -1 && (s ? r += e.slice(u, l) : n += e.slice(u, l));
	let d = n.trim(), f = r.trim();
	return d !== "" && f !== "" && (t[d] = f), t;
}
function Hr(e, t, n) {
	let r = n.trimEnd(), i = r.length - 10;
	i >= 0 && r.slice(i).toLowerCase() === Br ? e.setProperty(t, r.slice(0, i).trim(), "important") : e.setProperty(t, n, "");
}
function Ur(e, t, n = "") {
	if (t === n) return;
	let r = Vr(n), i = Vr(t);
	for (let t in i) delete r[t], Hr(e, t, i[t]);
	for (let t in r) e.removeProperty(t);
}
function Wr(e, t) {
	return 16 & t ? "code" : t & 128 ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function Gr(e, t) {
	return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function Kr(e, t, n, r, i) {
	let a = r.classList, o = Qo(i, "base");
	o !== void 0 && a.add(...o), o = Qo(i, "underlineStrikethrough");
	let s = !1, c = 8 & t && 4 & t;
	o !== void 0 && (8 & n && 4 & n ? (s = !0, c || a.add(...o)) : c && a.remove(...o));
	for (let e in S) {
		let r = S[e];
		if (o = Qo(i, e), o !== void 0) if (n & r) {
			if (s && (e === "underline" || e === "strikethrough")) {
				t & r && a.remove(...o);
				continue;
			}
			((t & r) === 0 || c && e === "underline" || e === "strikethrough") && a.add(...o);
		} else t & r && a.remove(...o);
	}
}
function qr(e, t, n) {
	let r = n.isComposing(), i = e + (r ? ae : ""), a = Gs(), o = Ks(a).$getDOMSlot(n, t, a), s = o.getFirstChild();
	if (s === null || s.nodeType !== Node.TEXT_NODE) return void o.insertChild(X().createTextNode(i));
	let c = s, l = c.nodeValue;
	if (l !== i) if (r || u) {
		let [e, t, n] = function(e, t) {
			let n = e.length, r = t.length, i = 0, a = 0;
			for (; i < n && i < r && e[i] === t[i];) i++;
			for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1];) a++;
			return [
				i,
				n - i - a,
				t.slice(i, r - a)
			];
		}(l, i);
		t !== 0 && c.deleteData(e, t), c.insertData(e, n);
	} else c.nodeValue = i;
}
function Jr(e, t, n, r, i, a) {
	qr(i, e, t);
	let o = a.theme.text;
	o !== void 0 && Kr(0, 0, r, e, o);
}
function Yr(e, t) {
	let n = X().createElement(t);
	return n.appendChild(e), n;
}
function Xr(e) {
	return e != null && !0 === e.__isInlineFormattable;
}
var Zr = class e extends Or {
	__text;
	__format;
	__style;
	__mode;
	__detail;
	get __isInlineFormattable() {
		return !0;
	}
	static getType() {
		return "text";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__text = e.__text, this.__format = e.__format, this.__style = e.__style, this.__mode = e.__mode, this.__detail = e.__detail;
	}
	constructor(e = "", t) {
		super(t), this.__text = e, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getDetail() {
		return this.getLatest().__detail;
	}
	getMode() {
		return me[this.getLatest().__mode];
	}
	getStyle() {
		return this.getLatest().__style;
	}
	isToken() {
		return this.getLatest().__mode === 1;
	}
	isComposing() {
		return this.__key === ko();
	}
	isSegmented() {
		return this.getLatest().__mode === 2;
	}
	isDirectionless() {
		return !!(1 & this.getLatest().__detail);
	}
	isUnmergeable() {
		return !!(2 & this.getLatest().__detail);
	}
	hasFormat(e) {
		let t = S[e];
		return (this.getFormat() & t) !== 0;
	}
	isSimpleText() {
		return this.__type === "text" && this.__mode === 0;
	}
	getTextContent() {
		return this.getLatest().__text;
	}
	getFormatFlags(e, t) {
		return wo(this.getLatest().__format, e, t);
	}
	canHaveFormat() {
		return !0;
	}
	isInline() {
		return !0;
	}
	createDOM(e, t) {
		let n = this.__format, r = Wr(0, n), i = Gr(0, n), a = r === null ? i : r, o = X().createElement(a), s = o;
		this.hasFormat("code") && o.setAttribute("spellcheck", "false"), r !== null && (s = X().createElement(i), o.appendChild(s)), Jr(s, this, 0, n, this.__text, e);
		let c = this.__style;
		return c !== "" && Ur(o.style, c), o;
	}
	updateDOM(e, t, n) {
		let r = this.__text, i = e.__format, o = this.__format, s = Wr(0, i), c = Wr(0, o), l = Gr(0, i), u = Gr(0, o);
		if ((s === null ? l : s) !== (c === null ? u : c)) return !0;
		if (s === c && l !== u) {
			let e = t.firstChild;
			e ?? a(48);
			let i = X().createElement(u);
			return Jr(i, this, 0, o, r, n), t.replaceChild(i, e), !1;
		}
		let d = t;
		c !== null && s !== null && (d = t.firstChild, d ?? a(49)), qr(r, d, this);
		let f = n.theme.text;
		f !== void 0 && i !== o && Kr(0, i, o, d, f);
		let p = e.__style, m = this.__style;
		return p !== m && Ur(t.style, m, p), !1;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: ni,
				priority: 0
			}),
			b: () => ({
				conversion: $r,
				priority: 0
			}),
			code: () => ({
				conversion: ai,
				priority: 0
			}),
			em: () => ({
				conversion: ai,
				priority: 0
			}),
			i: () => ({
				conversion: ai,
				priority: 0
			}),
			mark: () => ({
				conversion: ai,
				priority: 0
			}),
			s: () => ({
				conversion: ai,
				priority: 0
			}),
			span: () => ({
				conversion: Qr,
				priority: 0
			}),
			strong: () => ({
				conversion: ai,
				priority: 0
			}),
			sub: () => ({
				conversion: ai,
				priority: 0
			}),
			sup: () => ({
				conversion: ai,
				priority: 0
			}),
			u: () => ({
				conversion: ai,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return A().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTextContent(e.text).setFormat(e.format).setDetail(e.detail).setMode(e.mode).setStyle(e.style);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		return Z(t) || a(132), t.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? t.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? t.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (t.style.textTransform = "capitalize"), this.hasFormat("bold") && (t = Yr(t, "b")), this.hasFormat("italic") && (t = Yr(t, "i")), this.hasFormat("strikethrough") && (t = Yr(t, "s")), this.hasFormat("underline") && (t = Yr(t, "u")), { element: t };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(e, t) {}
	setFormat(e) {
		let t = this.getWritable();
		return t.__format = typeof e == "string" ? S[e] : e, t;
	}
	setDetail(e) {
		let t = this.getWritable();
		return t.__detail = typeof e == "string" ? ue[e] : e, t;
	}
	setStyle(e) {
		let t = this.getWritable();
		return t.__style = e, t;
	}
	toggleFormat(e) {
		let t = wo(this.getFormat(), e, null);
		return this.setFormat(t);
	}
	toggleDirectionless() {
		let e = this.getWritable();
		return e.__detail ^= 1, e;
	}
	toggleUnmergeable() {
		let e = this.getWritable();
		return e.__detail ^= 2, e;
	}
	setMode(e) {
		let t = pe[e];
		if (this.__mode === t) return this;
		let n = this.getWritable();
		return n.__mode = t, n;
	}
	setTextContent(e) {
		if (this.__text === e) return this;
		let t = this.getWritable();
		return t.__text = e, t;
	}
	select(e, t) {
		L();
		let n = e, r = t, i = N(), a = this.getTextContent(), o = this.__key;
		if (typeof a == "string") {
			let e = a.length;
			n === void 0 && (n = e), r === void 0 && (r = e);
		} else n = 0, r = 0;
		if (!M(i)) return Ri(o, n, o, r, "text", "text");
		{
			let e = ko();
			e !== i.anchor.key && e !== i.focus.key || U(o), i.setTextNodeRange(this, n, this, r);
		}
		return i;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		let e = this.getTextContentSize();
		return this.select(e, e);
	}
	spliceText(e, t, n, r) {
		let i = this.getWritable(), a = i.__text, o = n.length, s = e;
		s < 0 && (s = o + s, s < 0 && (s = 0));
		let c = N();
		if (r && M(c)) {
			let t = e + o;
			c.setTextNodeRange(i, t, i, t);
		}
		return i.__text = a.slice(0, s) + n + a.slice(s + t), i;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	splitText(...e) {
		L();
		let t = this.getLatest(), n = t.getTextContent();
		if (n === "") return [];
		let r = t.__key, i = ko(), a = n.length;
		e.sort((e, t) => e - t), e.push(a);
		let o = [], s = e.length;
		for (let t = 0, r = 0; t < a && r <= s; r++) {
			let i = e[r];
			i > t && (o.push(n.slice(t, i)), t = i);
		}
		let c = o.length;
		if (c === 1) return [t];
		let l = o[0], u = t.getParent(), d, f = t.getFormat(), p = t.getStyle(), m = t.__detail, h = !1, g = null, _ = null, v = N();
		if (M(v)) {
			let [e, t] = v.isBackward() ? [v.focus, v.anchor] : [v.anchor, v.focus];
			e.type === "text" && e.key === r && (g = e), t.type === "text" && t.key === r && (_ = t);
		}
		t.isSegmented() ? (d = A(l), d.__format = f, d.__style = p, d.__detail = m, d.__state = $e(t, d), h = !0) : d = t.setTextContent(l);
		let y = [d];
		for (let e = 1; e < c; e++) {
			let n = A(o[e]);
			n.__format = f, n.__style = p, n.__detail = m, n.__state = $e(t, n);
			let a = n.__key;
			i === r && U(a), y.push(n);
		}
		let b = g ? g.offset : null, ee = _ ? _.offset : null, x = 0;
		for (let e of y) {
			if (!g && !_) break;
			let t = x + e.getTextContentSize();
			if (g !== null && b !== null && b <= t && b >= x && (g.set(e.getKey(), b - x, "text"), b < t && (g = null)), _ !== null && ee !== null && ee <= t && ee >= x) {
				_.set(e.getKey(), ee - x, "text");
				break;
			}
			x = t;
		}
		if (u !== null) {
			(function(e) {
				let t = e.getPreviousSibling(), n = e.getNextSibling();
				t !== null && Oo(t), n !== null && Oo(n);
			})(this);
			let e = u.getWritable(), t = this.getIndexWithinParent();
			h ? (e.splice(t, 0, y), this.remove()) : e.splice(t, 1, y), M(v) && Wi(v, u, t, c - 1);
		}
		return y;
	}
	mergeWithSibling(e) {
		let t = e === this.getPreviousSibling();
		t || e === this.getNextSibling() || a(50);
		let n = this.__key, r = e.__key, i = this.__text, o = i.length;
		ko() === r && U(n);
		let s = N();
		if (M(s)) {
			let i = s.anchor, a = s.focus;
			i !== null && i.key === r && qi(i, t, n, e, o), a !== null && a.key === r && qi(a, t, n, e, o);
		}
		let c = e.__text, l = t ? c + i : i + c;
		this.setTextContent(l);
		let u = this.getWritable();
		return e.remove(), u;
	}
	isTextEntity() {
		return !1;
	}
};
function Qr(e) {
	return {
		forChild: oi(e.style),
		node: null
	};
}
function $r(e) {
	let t = e, n = t.style.fontWeight === "normal";
	return {
		forChild: oi(t.style, n ? void 0 : "bold"),
		node: null
	};
}
var ei = /* @__PURE__ */ new WeakMap();
function ti(e) {
	if (!Z(e)) return !1;
	if (e.nodeName === "PRE") return !0;
	let t = e.style.whiteSpace;
	return typeof t == "string" && t.startsWith("pre");
}
function ni(e) {
	let t = e;
	e.parentElement === null && a(129);
	let n = t.textContent || "";
	if (function(e) {
		let t, n = e.parentNode, r = [e];
		for (; n !== null && (t = ei.get(n)) === void 0 && !ti(n);) r.push(n), n = n.parentNode;
		let i = t === void 0 ? n : t;
		for (let e = 0; e < r.length; e++) ei.set(r[e], i);
		return i;
	}(t) !== null) return { node: $i(n) };
	if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
	if (n[0] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = ri(e, !1)) !== null;) {
			let t = e.textContent || "";
			if (t.length > 0) {
				/[ \t\n]$/.test(t) && (n = n.slice(1)), r = !1;
				break;
			}
		}
		r && (n = n.slice(1));
	}
	if (n[n.length - 1] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = ri(e, !0)) !== null;) if ((e.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			r = !1;
			break;
		}
		r && (n = n.slice(0, n.length - 1));
	}
	return n === "" ? { node: null } : { node: A(n) };
}
function ri(e, t) {
	let n = e;
	for (;;) {
		let e;
		for (; (e = t ? n.nextSibling : n.previousSibling) === null;) {
			let e = n.parentElement;
			if (e === null) return null;
			n = e;
		}
		if (n = e, Z(n)) {
			let e = n.style.display;
			if (e === "" && !Vs(n) || e !== "" && !e.startsWith("inline")) return null;
		}
		let r = n;
		for (; (r = t ? n.firstChild : n.lastChild) !== null;) n = r;
		if (xo(n)) return n;
		if (n.nodeName === "BR") return null;
	}
}
var ii = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function ai(e) {
	let t = ii[e.nodeName.toLowerCase()];
	return t === void 0 ? { node: null } : {
		forChild: oi(e.style, t),
		node: null
	};
}
function A(e = "") {
	return hs(new Zr(e));
}
function j(e) {
	return e instanceof Zr;
}
function oi(e, t) {
	let n = e.fontWeight, r = e.textDecoration.split(" "), i = n === "700" || n === "bold", a = r.includes("line-through"), o = e.fontStyle === "italic", s = r.includes("underline"), c = e.verticalAlign;
	return (e) => j(e) || Xr(e) ? (i && !e.hasFormat("bold") && e.toggleFormat("bold"), a && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"), o && !e.hasFormat("italic") && e.toggleFormat("italic"), s && !e.hasFormat("underline") && e.toggleFormat("underline"), c !== "sub" || e.hasFormat("subscript") || e.toggleFormat("subscript"), c !== "super" || e.hasFormat("superscript") || e.toggleFormat("superscript"), t && !e.hasFormat(t) && e.toggleFormat(t), e) : e;
}
var si = class e extends Zr {
	static getType() {
		return "tab";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super("	", e), this.__detail = 2;
	}
	static importDOM() {
		return null;
	}
	createDOM(e) {
		let t = super.createDOM(e), n = Qo(e.theme, "tab");
		return n !== void 0 && t.classList.add(...n), t;
	}
	static importJSON(e) {
		return ci().updateFromJSON(e);
	}
	setTextContent(e) {
		return super.setTextContent("	");
	}
	spliceText(e, t, n, r) {
		return n === "" && t === 0 || n === "	" && t === 1 || a(286), this;
	}
	setDetail(e) {
		return e !== 2 && a(127), this;
	}
	setMode(e) {
		return e !== "normal" && a(128), this;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function ci() {
	return hs(new si());
}
function li(e) {
	return e instanceof si;
}
var ui = class {
	key;
	offset;
	type;
	_selection;
	constructor(e, t, n) {
		this._selection = null, this.key = e, this.offset = t, this.type = n;
	}
	is(e) {
		return this.key === e.key && this.offset === e.offset && this.type === e.type;
	}
	isBefore(e) {
		return this.key === e.key ? this.offset < e.offset : ll(Cl(ml(this, "next")), Cl(ml(e, "next"))) < 0;
	}
	getNode() {
		let e = W(this.key);
		return e === null && a(20), e;
	}
	set(e, t, n, r) {
		let i = this._selection, a = this.key;
		r && this.key === e && this.offset === t && this.type === n || (this.key = e, this.offset = t, this.type = n, da() || (ko() === a && U(e), i !== null && (i.setCachedNodes(null), M(i) && (i._cachedIsBackward = null), i.dirty = !0)));
	}
};
function di(e, t, n) {
	return new ui(e, t, n);
}
function fi(e, t) {
	let n = t.__key, r = e.offset, i = "element";
	if (j(t)) {
		i = "text";
		let e = t.getTextContentSize();
		r > e && (r = e);
	} else if (!z(t)) {
		let e = t.getNextSibling();
		if (j(e)) n = e.__key, r = 0, i = "text";
		else {
			let e = t.getParent();
			e && (n = e.__key, r = t.getIndexWithinParent() + 1);
		}
	}
	e.set(n, r, i);
}
function pi(e, t) {
	if (z(t)) {
		let n = t.getLastDescendant();
		z(n) || j(n) ? fi(e, n) : fi(e, t);
	} else fi(e, t);
}
var mi = class e {
	_nodes;
	_cachedNodes;
	dirty;
	constructor(e) {
		this._cachedNodes = null, this._nodes = e, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		if (!_i(e)) return !1;
		let t = this._nodes, n = e._nodes;
		return t.size === n.size && Array.from(t).every((e) => n.has(e));
	}
	isCollapsed() {
		return !1;
	}
	isBackward() {
		return !1;
	}
	getStartEndPoints() {
		return null;
	}
	add(e) {
		this.dirty = !0, this._nodes.add(e), this._cachedNodes = null;
	}
	delete(e) {
		this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null;
	}
	clear() {
		this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
	}
	has(e) {
		return this._nodes.has(e);
	}
	clone() {
		return new e(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {}
	insertText() {}
	insertNodes(e) {
		let t = this.getNodes().filter((e) => Q(e) === null), n = t.length;
		if (n === 0) return;
		let r = t[n - 1], i;
		if (j(r)) i = r.select();
		else {
			let e = r.getIndexWithinParent() + 1;
			i = r.getParentOrThrow().select(e, e);
		}
		i.insertNodes(e);
		for (let e = 0; e < n; e++) t[e].remove();
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = this._nodes, n = [];
		for (let e of t) {
			let t = W(e);
			t !== null && n.push(t);
		}
		return da() || (this._cachedNodes = n), n;
	}
	getTextContent() {
		let e = this.getNodes(), t = "";
		for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
		return t;
	}
	deleteNodes() {
		let e = this.getNodes().filter((e) => Q(e) === null);
		if ((N() || Ui()) === this && e[0]) {
			let t = $(e[0], "next");
			gl(sl(t, t));
		}
		for (let t of e) t.remove();
		hi();
	}
};
function hi() {
	let e = Io();
	if (e.isEmpty()) {
		let t = H();
		e.append(t), t.select();
	}
}
function M(e) {
	return e instanceof gi;
}
var gi = class e {
	format;
	style;
	anchor;
	focus;
	_cachedNodes;
	_cachedIsBackward;
	dirty;
	constructor(e, t, n, r) {
		this.anchor = e, this.focus = t, e._selection = this, t._selection = this, this._cachedNodes = null, this._cachedIsBackward = null, this.format = n, this.style = r, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return !!M(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
	}
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = function(e) {
			let t = [], [n, r] = e.getTextSlices();
			n && t.push(n.caret.origin);
			let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
			for (let n of e) if (qc(n)) {
				let { origin: e } = n;
				t.length === 0 ? i.add(e) : (a.add(e), t.push(e));
			} else {
				let { origin: e } = n;
				z(e) && a.has(e) || t.push(e);
			}
			if (r && t.push(r.caret.origin), Kc(e.focus) && z(e.focus.origin) && e.focus.getNodeAtCaret() === null) for (let n = el(e.focus.origin, "previous"); qc(n) && i.has(n.origin) && !n.origin.isEmpty() && n.origin.is(t[t.length - 1]); n = nl(n)) i.delete(n.origin), t.pop();
			for (; t.length > 1;) {
				let e = t[t.length - 1];
				if (!z(e) || a.has(e) || e.isEmpty() || i.has(e)) break;
				t.pop();
			}
			if (t.length === 0 && e.isCollapsed()) {
				let n = Cl(e.anchor), r = Cl(e.anchor.getFlipped()), i = (e) => Gc(e) ? e.origin : e.getNodeAtCaret(), a = i(n) || i(r) || (e.anchor.getNodeAtCaret() ? n.origin : r.origin);
				t.push(a);
			}
			return t;
		}(El(vl(this), "next"));
		return da() || (this._cachedNodes = t), t;
	}
	setTextNodeRange(e, t, n, r) {
		return this.anchor.set(e.__key, t, "text"), this.focus.set(n.__key, r, "text"), this;
	}
	getTextContent() {
		let e = this.getNodes();
		if (e.length === 0) return "";
		let t = e[0], n = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [o, s] = Si(this), c = "", l = !0;
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (z(d) && !d.isInline()) {
				l || (c += "\n");
				let e = "";
				for (let t of Cc(d)) {
					let n = wc(d, t);
					n !== null && (e += n.getTextContent());
				}
				e === "" ? l = !d.isEmpty() : (c += e, l = !1);
			} else if (l = !1, j(d)) {
				let e = d.getTextContent();
				d === t ? d === n ? r.type === "element" && i.type === "element" && i.offset !== r.offset || (e = o < s ? e.slice(o, s) : e.slice(s, o)) : e = a ? e.slice(o) : e.slice(s) : d === n && (e = a ? e.slice(0, s) : e.slice(0, o)), c += e;
			} else !B(d) && !Ga(d) || d === n && this.isCollapsed() || (c += d.getTextContent());
		}
		return c;
	}
	applyDOMRange(e) {
		let t = R(), n = t.getEditorState()._selection, r = Ii(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n);
		if (r === null) return;
		let [i, a, o] = r;
		this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(a.key, a.offset, a.type, !0), o && (this.dirty = !0), rt(this);
	}
	clone() {
		let t = this.anchor, n = this.focus;
		return new e(di(t.key, t.offset, t.type), di(n.key, n.offset, n.type), this.format, this.style);
	}
	toggleFormat(e) {
		this.format = wo(this.format, e, null), this.dirty = !0;
	}
	setFormat(e) {
		this.format = e, this.dirty = !0;
	}
	setStyle(e) {
		this.style = e, this.dirty = !0;
	}
	hasFormat(e) {
		let t = S[e];
		return (this.format & t) !== 0;
	}
	insertRawText(e) {
		this.insertNodes($i(e));
	}
	insertText(e) {
		let t = this.anchor, n = this.focus, r = this.format, i = this.style, o = t, s = n;
		!this.isCollapsed() && n.isBefore(t) && (o = n, s = t), o.type === "element" && function(e, t, n, r) {
			let i = e.getNode(), a = i.getChildAtIndex(e.offset), o = A();
			if (o.setFormat(n), o.setStyle(r), Za(a)) a.splice(0, 0, [o]);
			else if (a !== null) {
				let e = Y(i) ? H().append(o) : o;
				a.insertBefore(e);
			} else if (Y(i)) {
				let e = i.getLastChild();
				z(e) && !e.isInline() && e.isEmpty() ? e.append(o) : i.append(H().append(o));
			} else i.append(o);
			e.is(t) && t.set(o.__key, 0, "text"), e.set(o.__key, 0, "text");
		}(o, s, r, i), s.type === "element" && hl(s, Cl(ml(s, "next")));
		let c = o.offset, l = s.offset, u = this.getNodes(), d = u.length, f = u[0];
		j(f) || a(26);
		let p = f.getTextContent().length, m = f.getParentOrThrow(), h = u[d - 1];
		if (d === 1 && s.type === "element" && (l = p, s.set(o.key, l, "text")), this.isCollapsed() && c === p && (bo(f) || !f.canInsertTextAfter() || !m.canInsertTextAfter() && f.getNextSibling() === null)) {
			let t = f.getNextSibling(), n;
			if (j(t) && t.canInsertTextBefore() && !bo(t) ? n = t : (n = A(), n.setFormat(r), n.setStyle(i), m.canInsertTextAfter() ? f.insertAfter(n) : m.insertAfter(n)), n.select(0, 0), f = n, e !== "") return void this.insertText(e);
		} else if (this.isCollapsed() && c === 0 && (bo(f) || !f.canInsertTextBefore() || !m.canInsertTextBefore() && f.getPreviousSibling() === null)) {
			let t = f.getPreviousSibling(), n;
			if (!j(t) || bo(t) ? (n = A(), n.setFormat(r), m.canInsertTextBefore() ? f.insertBefore(n) : m.insertBefore(n)) : n = t, n.select(), f = n, e !== "") return void this.insertText(e);
		} else if (f.isSegmented() && c !== p) if (ko() !== null) f = f.setMode("normal").setFormat(r).setStyle(i);
		else {
			let e = A(f.getTextContent());
			e.setFormat(r), f.replace(e), f = e;
		}
		else if (!this.isCollapsed() && e !== "") {
			let t = h.getParent();
			if (!m.canInsertTextBefore() || !m.canInsertTextAfter() || z(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) return this.insertText(""), Mi(this.anchor, this.focus), void this.insertText(e);
		}
		if (d === 1) {
			if (yo(f)) {
				let t = A(e);
				t.select(), f.replace(t);
				return;
			}
			let t = f.getFormat(), n = f.getStyle();
			if (c !== l || t === r && n === i) {
				if (li(f)) {
					let t = A(e);
					t.setFormat(r), t.setStyle(i), t.select(), f.replace(t);
					return;
				}
			} else {
				if (f.getTextContent() !== "") {
					let t = A(e);
					if (t.setFormat(r), t.setStyle(i), t.select(), c === 0) f.insertBefore(t, !1);
					else {
						let [e] = f.splitText(c);
						e.insertAfter(t, !1);
					}
					t.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length, this._cachedNodes = null, this._cachedIsBackward = null);
					return;
				}
				f.setFormat(r), f.setStyle(i);
			}
			let a = l - c;
			f = f.spliceText(c, a, e, !0), f.getTextContent() === "" ? f.remove() : this.anchor.type === "text" && (this.format = t, this.style = n, f.isComposing() && (this.anchor.offset -= e.length, this._cachedNodes = null, this._cachedIsBackward = null));
		} else {
			let t = /* @__PURE__ */ new Set([...f.getParentKeys(), ...h.getParentKeys()]), n = z(f) ? f : f.getParentOrThrow(), r = z(h) ? h : h.getParentOrThrow(), i = h;
			if (!n.is(r) && r.isInline()) do
				i = r, r = r.getParentOrThrow();
			while (r.isInline());
			if (s.type === "text" && (l !== 0 || h.getTextContent() === "") || s.type === "element" && h.getIndexWithinParent() < l) if (j(h) && !yo(h) && l !== h.getTextContentSize()) {
				if (h.isSegmented()) {
					let e = A(h.getTextContent());
					h.replace(e), h = e;
				}
				V(s.getNode()) || s.type !== "text" || (j(h) || a(395), h = h.spliceText(0, l, "")), t.add(h.__key);
			} else {
				let e = h.getParentOrThrow();
				e.canBeEmpty() || e.getChildrenSize() !== 1 ? h.remove() : e.remove();
			}
			else t.add(h.__key);
			let o = r.getChildren(), m = new Set(u), g = n.is(r), _ = n.isInline() && f.getNextSibling() === null ? n : f;
			for (let e = o.length - 1; e >= 0; e--) {
				let t = o[e];
				if (t.is(f) || z(t) && t.isParentOf(f)) break;
				t.isAttached() && (!m.has(t) || t.is(i) ? g || _.insertAfter(t, !1) : t.remove());
			}
			if (!g) {
				let e = r, n = null;
				for (; e !== null;) {
					let r = e.getChildren(), i = r.length;
					(i === 0 || r[i - 1].is(n)) && (t.delete(e.__key), n = e), e = e.getParent();
				}
			}
			if (yo(f)) if (c === p) f.select();
			else {
				let t = A(e);
				t.select(), f.replace(t);
			}
			else f = f.spliceText(c, p - c, e, !0), f.getTextContent() === "" ? f.remove() : this.anchor.type === "text" && (this.format = f.getFormat(), this.style = f.getStyle(), f.isComposing() && (this.anchor.offset -= e.length, this._cachedNodes = null, this._cachedIsBackward = null));
			for (let e = 1; e < d; e++) {
				let n = u[e], r = n.__key;
				t.has(r) || n.remove();
			}
		}
	}
	removeText() {
		let e = N() === this;
		_l(this, Sl(vl(this))), e && N() !== this && G(this);
	}
	formatText(e, t = null) {
		bi(this, e, t);
	}
	insertNodes(e) {
		if (e.length === 0) return;
		this.isCollapsed() || this.removeText();
		let t = this.anchor.getNode();
		if (this.anchor.type === "element" && z(t) && Q(t) !== null) {
			let n = t.isShadowRoot() ? t.getFirstChild() ?? t.append(H()).getFirstChild() : t.getFirstChild();
			if (t.isShadowRoot() && n !== null && !z(n)) {
				let e = H();
				n.insertBefore(e), n = e;
			}
			if (n !== null) {
				n.selectStart();
				let t = N();
				return M(t) || a(369), t.insertNodes(e);
			}
		}
		if (this.anchor.type === "element" && Y(t)) {
			let n = ia(e), r = n.getLastDescendant();
			t.splice(this.anchor.offset, 0, n.getChildren()), r !== null && r.selectEnd();
			return;
		}
		let n = (this.isBackward() ? this.focus : this.anchor).getNode(), r = pc(n, Ws), i = e[e.length - 1];
		if (z(r) && "__language" in r) {
			if ("__language" in e[0]) this.insertText(e[0].getTextContent());
			else {
				let t = ta(this);
				r.splice(t, 0, e), i.selectEnd();
			}
			return;
		}
		if (!e.some((e) => (z(e) || B(e)) && !e.isInline())) {
			z(r) || a(211, n.constructor.name, n.getType());
			let t = ta(this);
			r.splice(t, 0, e), i.selectEnd();
			return;
		}
		if (z(r) && Q(r) !== null) {
			let t = ta(this), n = ea(e);
			r.splice(t, 0, n);
			let i = n[n.length - 1];
			i === void 0 ? r.select(t, t) : i.selectEnd();
			return;
		}
		if (r === null) {
			let t = ia(e), n = t.getLastDescendant(), r = ml(this.anchor, "next");
			for (let e of t.getChildren()) r = Ml(e, r);
			n !== null && n.selectEnd();
			return;
		}
		if (z(r) && !r.isParentRequired() && !Y(r.getParentOrThrow())) {
			let t = ta(this), n = ea(e);
			r.splice(t, 0, n);
			let i = n[n.length - 1];
			i === void 0 ? r.select(t, t) : i.selectEnd();
			return;
		}
		let o = ia(e), s = o.getLastDescendant(), c = o.getChildren(), l = !z(r) || !r.isEmpty() ? this.insertParagraph() : null;
		l && !r.isAttached() && (n = this.anchor.getNode(), r = pc(n, Ws));
		let u = c[c.length - 1], d = c[0];
		var f;
		z(f = d) && Ws(f) && !f.isEmpty() && z(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (z(r) || a(211, n.constructor.name, n.getType()), r.append(...d.getChildren()), d = c[1]), d && (r === null && a(212, n.constructor.name, n.getType()), function(e, t) {
			let n = t.getParentOrThrow().getLastChild(), r = t, i = [t];
			for (; r !== n;) r.getNextSibling() || a(140), r = r.getNextSibling(), i.push(r);
			let o = e;
			for (let e of i) o = o.insertAfter(e);
		}(r, d));
		let p = pc(s, Ws);
		l && z(p) && (l.canMergeWhenEmpty() || Ws(u)) && (p.append(...l.getChildren()), l.remove()), z(r) && r.isEmpty() && r.remove(), s.selectEnd();
		let m = z(r) ? r.getLastChild() : null;
		Ga(m) && p !== r && m.remove();
	}
	insertParagraph() {
		let e = this.anchor.getNode();
		if (this.anchor.type === "element" && Y(e)) {
			let t = H();
			return e.splice(this.anchor.offset, 0, [t]), t.select(), t;
		}
		let t = ta(this), n = pc(this.anchor.getNode(), Ws);
		if (n !== null && Q(n) !== null) return null;
		z(n) || a(213);
		let r = n.getChildAtIndex(t), i = r ? [r, ...r.getNextSiblings()] : [], o = n.insertNewAfter(this, !1);
		return o ? (o.append(...i), o.selectStart(), o) : null;
	}
	insertLineBreak(e) {
		let t = Wa();
		if (this.insertNodes([t]), e) {
			let e = t.getParentOrThrow(), n = t.getIndexWithinParent();
			e.select(n, n);
		}
	}
	extract() {
		let e = [...this.getNodes()], t = e.length, n = e[0], r = e[t - 1], [i, a] = Si(this), o = this.isBackward(), [s, c] = o ? [this.focus, this.anchor] : [this.anchor, this.focus], [l, u] = o ? [a, i] : [i, a];
		if (t === 0) return [];
		if (t === 1) {
			if (j(n) && !this.isCollapsed()) {
				let e = n.splitText(l, u), t = l === 0 ? e[0] : e[1];
				return t ? (s.set(t.getKey(), 0, "text"), c.set(t.getKey(), t.getTextContentSize(), "text"), [t]) : [];
			}
			return [n];
		}
		if (j(n) && (l === n.getTextContentSize() ? e.shift() : l !== 0 && ([, n] = n.splitText(l), e[0] = n, s.set(n.getKey(), 0, "text"))), j(r)) {
			let t = r.getTextContent().length;
			u === 0 ? e.pop() : u !== t && ([r] = r.splitText(u), e[e.length - 1] = r, c.set(r.getKey(), r.getTextContentSize(), "text"));
		}
		return e;
	}
	modify(e, t, n) {
		if (aa(this, e, t, n)) return;
		let r = e === "move", i = R(), a = bs(J(i));
		if (!a) return;
		let o = i._blockCursorElement, s = i._rootElement, c = this.focus.getNode();
		s === null || o === null || !z(c) || c.isInline() || c.canBeEmpty() || ys(o, i, s);
		let l = is(i, this.focus.key), u = l;
		if (this.focus.type === "text" && (u = j(c) ? Ys(c, l, i) : null), this.dirty) {
			let e = is(i, this.anchor.key), t = e;
			if (this.anchor.type === "text") {
				let n = this.anchor.getNode();
				t = j(n) ? Ys(n, e, i) : null;
			}
			t && u && Ji(a, t, this.anchor.offset, u, this.focus.offset);
		}
		if (n === "character" && j(c) && c.isUnmergeable() && (t ? this.focus.offset === 0 : this.focus.offset === c.getTextContentSize())) {
			let e = $(c, t ? "previous" : "next").getNodeAtCaret();
			if (j(e)) {
				if (!r) {
					let n = e.getTextContentSize();
					t ? this.focus.set(e.__key, n - 1, "text") : this.focus.set(e.__key, 1, "text"), this.dirty = !0;
					return;
				}
				{
					let n = i.getElementByKey(e.getKey()), r = n ? Ys(e, n, i) : null;
					if (r) {
						let e = t ? r.length : 0;
						Ji(a, r, e, r, e);
					}
				}
			}
		}
		if (Ti(a, e, t ? "backward" : "forward", n), a.rangeCount > 0) {
			let e = Ds(a, i._rootElement), n = e || a.getRangeAt(0), o = this.anchor.getNode(), s = V(o) ? o : fs(o);
			this.applyDOMRange(n), this.dirty = !0, !r && (Ei(this, t, s), (e ? a.direction !== "backward" : a.anchorNode === n.startContainer && a.anchorOffset === n.startOffset) || wi(this));
		}
		n === "lineboundary" && aa(this, e, t, n, "decorators");
	}
	forwardDeletion(e, t, n) {
		if (!n && (e.type === "element" && z(t) && e.offset === t.getChildrenSize() || e.type === "text" && e.offset === t.getTextContentSize())) {
			let e = t.getParent(), n = t.getNextSibling() || (e === null ? null : e.getNextSibling());
			if (z(n) && n.isShadowRoot()) return !0;
		}
		return !1;
	}
	deleteCharacter(e) {
		let t = this.isCollapsed();
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			let r = al(ml(t, e ? "previous" : "next"));
			if (r.getTextSlices().every((e) => e === null || e.distance === 0)) {
				let e = { type: "initial" };
				for (let t of r.iterNodeCarets("shadowRoot")) if (qc(t)) {
					if (!t.origin.isInline()) {
						if (t.origin.isShadowRoot()) {
							if (e.type === "merge-block") break;
							if (z(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								let e = Cl(t);
								_l(this, sl(e, e)), r.anchor.origin.remove();
							}
							return;
						}
						e.type !== "merge-next-block" && e.type !== "merge-block" || (e = {
							block: e.block,
							caret: t,
							type: "merge-block"
						});
					}
				} else {
					if (e.type === "merge-block") break;
					if (Kc(t)) {
						if (z(t.origin)) {
							if (t.origin.isInline()) {
								if (!t.origin.isParentOf(r.anchor.origin)) break;
							} else e = {
								block: t.origin,
								type: "merge-next-block"
							};
							continue;
						}
						if (B(t.origin)) {
							if (!t.origin.isIsolated()) if (Cc(t.origin).length > 0) {
								if (z(r.anchor.origin) && r.anchor.origin.isEmpty()) {
									r.anchor.origin.remove();
									let e = Bi();
									e.add(t.origin.getKey()), G(e);
								}
							} else if (e.type === "merge-next-block" && (t.origin.isKeyboardSelectable() || !t.origin.isInline()) && z(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								r.anchor.origin.remove();
								let e = Bi();
								e.add(t.origin.getKey()), G(e);
							} else t.origin.remove();
							return;
						}
						break;
					}
				}
				if (e.type === "merge-block") {
					let { caret: t, block: n } = e;
					return Cc(n).length > 0 ? void 0 : t.origin.isEmpty() && !n.isEmpty() && t.origin.getParent() === n.getParent() ? void t.origin.remove(!0) : (_l(this, sl(!t.origin.isEmpty() && n.isEmpty() ? yl($(n, t.direction)) : r.anchor, t)), this.removeText());
				}
				for (let e = t.getNode(); e !== null;) {
					if (Q(e) !== null) return;
					if (z(e) && e.isShadowRoot()) break;
					e = e.getParent();
				}
			}
			let i = this.focus;
			if (Di(this, e, "character"), this.isCollapsed()) {
				if (e && t.offset === 0 && Ci(this, t.getNode())) return;
			} else {
				let r = i.type === "text" ? i.getNode() : null;
				if (n = t.type === "text" ? t.getNode() : null, r !== null && r.isSegmented()) {
					let t = i.offset, a = r.getTextContentSize();
					if (r.is(n) || e && t !== a || !e && t !== 0) return void ki(r, e, t);
				} else if (n !== null && n.isSegmented()) {
					let i = t.offset, a = n.getTextContentSize();
					if (n.is(r) || e && i !== 0 || !e && i !== a) return void ki(n, e, i);
				}
				(function(e, t) {
					let n = e.anchor, r = e.focus, i = n.getNode();
					if (i === r.getNode() && n.type === "text" && r.type === "text") {
						let e = n.offset, a = r.offset, o = e < a, s = o ? e : a, c = o ? a : e, l = c - 1;
						s !== l && (function(e) {
							return !(zo(e) || Oi(e));
						})(i.getTextContent().slice(s, c)) && (t ? r.set(r.key, l, r.type) : n.set(n.key, l, n.type));
					}
				})(this, e);
			}
		}
		if (this.removeText(), e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
			let e = this.anchor.getNode();
			e.isEmpty() && V(e.getParent()) && e.getPreviousSibling() === null && Ci(this, e), hi();
		}
	}
	deleteLine(e) {
		let t = Ni(this.anchor);
		if (t !== null && B(yc(t))) return this.isCollapsed() || this.focus.set(this.anchor.key, this.anchor.offset, this.anchor.type), void this.deleteCharacter(e);
		this.isCollapsed() && Di(this, e, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(e) : pc(this.anchor.getNode(), Ws) === pc(this.focus.getNode(), Ws) ? this.removeText() : (this.focus.set(this.anchor.key, this.anchor.offset, this.anchor.type), this.deleteCharacter(e));
	}
	deleteWord(e) {
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			Di(this, e, "word");
		}
		this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
	}
	isBackward() {
		let e = this._cachedIsBackward;
		if (e !== null) return e;
		let t = this.focus.isBefore(this.anchor);
		return da() || (this._cachedIsBackward = t), t;
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function _i(e) {
	return e instanceof mi;
}
function vi(e, t) {
	if (_i(e)) {
		for (let n of e.getNodes()) Xr(n) && n.setFormat(t(n.getFormat()));
		return;
	}
	if (e.isCollapsed()) return e.setFormat(t(e.format)), void U(null);
	let n = [];
	for (let r of e.getNodes()) j(r) ? n.push(r) : z(r) ? r.setTextFormat(t(r.getTextFormat())) : Xr(r) && r.setFormat(t(r.getFormat()));
	let r = n.length;
	if (r === 0) return e.setFormat(t(e.format)), void U(null);
	let i = e.anchor, a = e.focus, o = e.isBackward(), s = o ? a : i, c = o ? i : a, l = 0, u = n[0], d = s.type === "element" ? 0 : s.offset;
	if (s.type === "text" && d === u.getTextContentSize() && (l = 1, u = n[1], d = 0), u == null) return;
	let f = r - 1, p = n[f], m = c.type === "text" ? c.offset : p.getTextContentSize();
	if (u.is(p)) {
		if (d === m) return;
		let n = t(u.getFormat());
		if (bo(u) || d === 0 && m === u.getTextContentSize()) u.setFormat(n);
		else {
			let e = u.splitText(d, m), t = d === 0 ? e[0] : e[1];
			t.setFormat(n), s.type === "text" && s.set(t.__key, 0, "text"), c.type === "text" && c.set(t.__key, m - d, "text");
		}
		e.format = n;
		return;
	}
	d === 0 || bo(u) || ([, u] = u.splitText(d), d = 0);
	let h = t(u.getFormat());
	u.setFormat(h);
	let g = t(p.getFormat());
	m > 0 && (m === p.getTextContentSize() || bo(p) || ([p] = p.splitText(m)), p.setFormat(g));
	for (let e = l + 1; e < f; e++) {
		let r = n[e];
		r.setFormat(t(r.getFormat()));
	}
	s.type === "text" && s.set(u.__key, d, "text"), c.type === "text" && c.set(p.__key, m, "text"), e.format = h | g;
}
function yi(e, t) {
	let n = [];
	for (let [e, r] of Object.entries(t)) typeof r == "boolean" && n.push([e, r]);
	n.length !== 0 && vi(e, (e) => {
		for (let [t, r] of n) e = wo(e, t, r ? S[t] : 0);
		return e;
	});
}
function bi(e, t, n = null) {
	let r = n === null && M(e) ? wo(e.format, t, null) : n;
	vi(e, (e) => wo(e, t, r));
}
function xi(e) {
	let t = e.offset;
	if (e.type === "text") return t;
	let n = e.getNode();
	return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function Si(e) {
	let t = e.getStartEndPoints();
	if (t === null) return [0, 0];
	let [n, r] = t;
	return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [xi(n), xi(r)];
}
function Ci(e, t) {
	for (let n = t; n; n = n.getParent()) {
		if (z(n)) {
			if (n.collapseAtStart(e)) return !0;
			if (Y(n)) break;
		}
		if (n.getPreviousSibling()) break;
	}
	return !1;
}
function wi(e) {
	let t = e.focus, n = e.anchor, r = n.key, i = n.offset, a = n.type;
	n.set(t.key, t.offset, t.type, !0), t.set(r, i, a, !0);
}
function Ti(e, t, n, r) {
	e.modify(t, n, r);
}
function Ei(e, t, n) {
	let r = e.getNodes(), i = r.filter((e) => ls(e, n));
	if (i.length === 0 || i.length === r.length) return !1;
	let a = t ? i[0] : i[i.length - 1], o = z(a) ? a : a.getParentOrThrow();
	return t ? o.selectStart() : o.selectEnd(), !0;
}
function Di(e, t, n) {
	if (aa(e, "extend", t, n)) return;
	let r = R(), i = bs(J(r));
	if (!i || typeof i.modify != "function") return;
	let a = r._blockCursorElement, o = r._rootElement, s = e.anchor, c = e.focus.getNode();
	o === null || a === null || !z(c) || c.isInline() || c.canBeEmpty() || ys(a, r, o);
	let l = (e) => {
		let t = e.getNode(), n = r.getElementByKey(e.key);
		return n !== null && e.type === "text" && j(t) ? Ys(t, n, r) : n;
	}, u = s.getNode(), d = l(s);
	if (d === null) return;
	let f = s.offset, p = e.isCollapsed(), m = e.focus, h = p ? d : l(m);
	if (h === null) return;
	let g = m.offset;
	if (Ji(i, h, g, h, g), Ti(i, "move", t ? "backward" : "forward", n), i.rangeCount === 0) return;
	let _ = Ds(i, o) || i.getRangeAt(0), v = _.startContainer, y = _.startOffset;
	if (p && n === "character" && s.type === "text" && j(u) && u.isUnmergeable() && f === (t ? 0 : u.getTextContentSize())) {
		let n = $(u, t ? "previous" : "next").getNodeAtCaret();
		if (j(n)) {
			let r = t ? n.getTextContentSize() - 1 : 1;
			e.focus.set(n.__key, r, "text"), e.dirty = !0;
			return;
		}
	}
	if (p && n === "character" && s.type === "text") {
		let n = t ? 0 : u.getTextContentSize(), r = v === d ? y : f === n ? -1 : n;
		if (r >= 0) return void (r !== f && (e.focus.set(s.key, r, "text"), e.dirty = !0));
	}
	let [b, ee, x, te] = t ? [
		v,
		y,
		d,
		f
	] : [
		d,
		f,
		v,
		y
	], ne = V(u) ? u : fs(u);
	e.applyDOMRange({
		collapsed: !1,
		endContainer: x,
		endOffset: te,
		startContainer: b,
		startOffset: ee
	}), e.dirty = !0, !Ei(e, t, ne) && t && wi(e), n === "lineboundary" && aa(e, "extend", t, n, "decorators");
}
var Oi = (() => {
	try {
		let e = /* @__PURE__ */ RegExp("\\p{Emoji}", "u"), t = e.test.bind(e);
		if (t("❤️") && t("#️⃣") && t("👍")) return t;
	} catch {}
	return () => !1;
})();
function ki(e, t, n) {
	let r = e, i = r.getTextContent().split(/(?=\s)/g), a = i.length, o = 0, s = 0;
	for (let e = 0; e < a; e++) {
		let r = e === a - 1;
		if (s = o, o += i[e].length, t && o === n || o > n || r) {
			i.splice(e, 1), r && (s = void 0);
			break;
		}
	}
	let c = i.join("").trim();
	c === "" ? r.remove() : (r.setTextContent(c), r.select(s, s));
}
function Ai(e, t, n, r) {
	let i, o = t, s = !1;
	if (Z(e)) {
		let c = !1, l = e.childNodes, u = l.length, d = r._blockCursorElement;
		o === u && u > 0 && (c = !0, o = u - 1), Mo(e, r) !== void 0 || sc(e, r) || (s = !0);
		let f = l[o], p = !1;
		if (f === d) f = l[o + 1], p = !0;
		else if (d !== null) {
			let n = d.parentNode;
			e === n && t > Array.prototype.indexOf.call(n.children, d) && o--;
		}
		if (i = Ro(f), j(i)) o = Qc(i, c ? "next" : "previous");
		else {
			let l = Ro(e);
			if (l === null) return null;
			if (z(l)) {
				let s = r.getElementByKey(l.getKey());
				s === null && a(214);
				let u = qs(l, s, r);
				[l, o] = u.resolveChildIndex(l, s, e, t), z(l) || a(215), c && o >= l.getChildrenSize() && (o = Math.max(0, l.getChildrenSize() - 1));
				let d = l.getChildAtIndex(o);
				if (z(d) && function(e, t, n) {
					let r = e.getParent();
					return n === null || r === null || !r.canBeEmpty() || r !== n.getNode();
				}(d, 0, n)) {
					let e = c ? d.getLastDescendant() : d.getFirstDescendant();
					e === null ? l = d : (d = e, l = z(d) ? d : d.getParentOrThrow()), o = 0;
				}
				j(d) ? (i = d, l = null, o = Qc(d, c ? "next" : "previous")) : d !== l && c && !p && (z(l) || a(216), o = Math.min(l.getChildrenSize(), o + 1));
			} else {
				let n = yc(l), i = n === null ? l : n, a = i.getIndexWithinParent(), s = r.getElementByKey(l.getKey()), c = "after";
				if (s !== null && Ro(e) === l) {
					let n = qs(l, s, r);
					n.element === s ? t === 0 && B(l) && (c = "before") : c = n.resolveLeafPosition(s, e, t);
				}
				o = c === "before" ? a : a + 1, l = i.getParentOrThrow();
			}
			if (z(l)) return [di(l.__key, o, "element"), s];
		}
	} else i = Ro(e);
	return j(i) ? [di(i.__key, Qc(i, o, "clamp"), "text"), s] : null;
}
function ji(e, t, n) {
	let r = e.offset, i = e.getNode();
	if (r === 0) {
		let r = i.getPreviousSibling(), a = i.getParent();
		if (t) {
			if ((n || !t) && r === null && z(a) && a.isInline()) {
				let t = a.getPreviousSibling();
				j(t) && e.set(t.__key, t.getTextContent().length, "text");
			}
		} else z(r) && !n && r.isInline() ? e.set(r.__key, r.getChildrenSize(), "element") : j(r) && !i.isUnmergeable() && e.set(r.__key, r.getTextContent().length, "text");
	} else if (r === i.getTextContent().length) {
		let r = i.getNextSibling(), a = i.getParent();
		if (t && z(r) && r.isInline()) e.set(r.__key, 0, "element");
		else if ((n || t) && r === null && z(a) && a.isInline() && !a.canInsertTextAfter() && a.getTextContentSize() > 1) {
			let t = a.getNextSibling();
			j(t) && e.set(t.__key, 0, "text");
		}
	}
}
function Mi(e, t, n) {
	if (e.type === "text" && t.type === "text") {
		let n = e.isBefore(t), r = e.is(t);
		ji(e, n, r), ji(t, !n, r), r && t.set(e.key, e.offset, e.type);
	}
}
function Ni(e) {
	let t = W(e.key);
	return t === null ? null : xc(t);
}
function Pi(e, t, n) {
	let r = Ni(e), i = Ni(t);
	if (r === i || r !== null && i !== null && r.is(i)) return !1;
	let a = n(r, i);
	if (r !== null) return z(r) ? t.set(r.getKey(), a ? r.getChildrenSize() : 0, "element") : t.set(r.getKey(), a ? r.getTextContentSize() : 0, "text"), !0;
	let o = yc(i);
	if (o === null) return !1;
	let s = o.getParent();
	if (s === null) return !1;
	let c = o.getIndexWithinParent();
	return t.set(s.getKey(), a ? c + 1 : c, "element"), !0;
}
function Fi(e) {
	let t = Pi(e.anchor, e.focus, (t, n) => function(e, t, n, r) {
		if (n !== null && r !== null) {
			let e = yc(n), t = yc(r);
			if (e !== null && e.is(t)) {
				for (let t of Sc(e).values()) {
					if (t === n.getKey()) return !0;
					if (t === r.getKey()) return !1;
				}
				return !0;
			}
			return e === null || t === null || e.isBefore(t);
		}
		if (n !== null) {
			let e = yc(n), r = W(t.key);
			return e === null || r === null || !(!e.is(r) && !e.isParentOf(r)) || e.isBefore(r);
		}
		let i = yc(r), a = W(e.key);
		return i !== null && a !== null && !i.is(a) && !i.isParentOf(a) && a.isBefore(i);
	}(e.anchor, e.focus, t, n));
	return t && (e.dirty = !0), t;
}
function Ii(e, t, n, r, i, a) {
	if (e === null || n === null || !mo(i, e, n)) return null;
	let o = Ai(e, t, M(a) ? a.anchor : null, i);
	if (o === null) return null;
	let s = Ai(n, r, M(a) ? a.focus : null, i);
	if (s === null) return null;
	let [c, l] = o, [u, d] = s;
	if (c.type === "element" && u.type === "element") {
		let t = Ro(e), r = Ro(n);
		if (B(t) && B(r)) return null;
	}
	let f = i._slotsUsed && Pi(c, u, () => (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0);
	return Mi(c, u), [
		c,
		u,
		l || d || f
	];
}
function Li(e) {
	return z(e) && !e.isInline();
}
function Ri(e, t, n, r, i, a) {
	let o = pa(), s = new gi(di(e, t, i), di(n, r, a), 0, "");
	return s.dirty = !0, o._selection = s, s;
}
function zi() {
	return new gi(di("root", 0, "element"), di("root", 0, "element"), 0, "");
}
function Bi() {
	return new mi(/* @__PURE__ */ new Set());
}
function Vi(e, t) {
	return Hi(null, e, t, null);
}
function Hi(e, t, n, r) {
	let i = n._window;
	if (i === null) return null;
	let a = r || i.event, o = a ? a.type : void 0, s = o === "selectionchange", c = !ke && (s || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && a && a.detail === 3 || o === "drop" || o === void 0), l, u, d, f;
	if (M(e) && !c) return e.clone();
	{
		if (t === null) return null;
		let r = ks(t, n._rootElement);
		if (l = r.anchorNode, u = r.focusNode, d = r.anchorOffset, f = r.focusOffset, (s || o === void 0) && M(e) && !mo(n, l, u)) return e.clone();
	}
	let p = Ii(l, d, u, f, n, e);
	if (p === null) return null;
	let [m, h, g] = p, _ = 0, v = "";
	if (M(e)) {
		let t = e.anchor;
		if (m.key === t.key) _ = e.format, v = e.style;
		else {
			let e = m.getNode();
			j(e) ? (_ = e.getFormat(), v = e.getStyle()) : z(e) && (_ = e.getTextFormat(), v = e.getTextStyle());
		}
	}
	let y = new gi(m, h, _, v);
	return g && (y.dirty = !0), y;
}
function N() {
	return pa()._selection;
}
function Ui() {
	return R()._editorState._selection;
}
function Wi(e, t, n, r = 1) {
	let i = e.anchor, a = e.focus, o = i.getNode(), s = a.getNode();
	if (!t.is(o) && !t.is(s)) return;
	let c = t.__key;
	if (e.isCollapsed()) {
		let t = i.offset;
		if (n <= t && r > 0 || n < t && r < 0) {
			let n = Math.max(0, t + r);
			i.set(c, n, "element"), a.set(c, n, "element"), Gi(e);
		}
	} else {
		let o = e.isBackward(), s = o ? a : i, l = s.getNode(), u = o ? i : a, d = u.getNode();
		if (t.is(l)) {
			let e = s.offset;
			(n <= e && r > 0 || n < e && r < 0) && s.set(c, Math.max(0, e + r), "element");
		}
		if (t.is(d)) {
			let e = u.offset;
			(n <= e && r > 0 || n < e && r < 0) && u.set(c, Math.max(0, e + r), "element");
		}
	}
	Gi(e);
}
function Gi(e) {
	let t = e.anchor, n = t.offset, r = e.focus, i = r.offset, a = t.getNode(), o = r.getNode();
	if (e.isCollapsed()) {
		if (!z(a)) return;
		let e = a.getChildrenSize(), i = n >= e, o = i ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (j(o)) {
			let e = 0;
			i && (e = o.getTextContentSize()), t.set(o.__key, e, "text"), r.set(o.__key, e, "text");
		}
		return;
	}
	if (z(a)) {
		let e = a.getChildrenSize(), r = n >= e, i = r ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (j(i)) {
			let e = 0;
			r && (e = i.getTextContentSize()), t.set(i.__key, e, "text");
		}
	}
	if (z(o)) {
		let e = o.getChildrenSize(), t = i >= e, n = t ? o.getChildAtIndex(e - 1) : o.getChildAtIndex(i);
		if (j(n)) {
			let e = 0;
			t && (e = n.getTextContentSize()), r.set(n.__key, e, "text");
		}
	}
}
function Ki(e, t, n, r, i) {
	let a = null, o = 0, s = null;
	r === null ? i !== null && (a = i.__key, j(i) ? s = "text" : z(i) && (s = "element")) : (a = r.__key, j(r) ? (o = r.getTextContentSize(), s = "text") : z(r) && (o = r.getChildrenSize(), s = "element")), a !== null && s !== null ? e.set(a, o, s) : (o = t.getIndexWithinParent(), o === -1 && (o = n.getChildrenSize()), e.set(n.__key, o, "element"));
}
function qi(e, t, n, r, i) {
	e.type === "text" ? e.set(n, e.offset + (t ? 0 : i), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Ji(e, t, n, r, i) {
	try {
		e.setBaseAndExtent(t, n, r, i);
	} catch {}
}
function Yi(e, t, n) {
	let r = is(e, t.getKey());
	if (z(t)) {
		let i = qs(t, r, e);
		return [i.element, n + i.getFirstChildOffset()];
	}
	return [r, n];
}
function Xi(e, t, n, r, i, a) {
	let o = a.getRootNode(), s = So(o) || Ss(o) ? Ps(o) : null;
	if (i.has("collaboration") && s !== a || s !== null && po(s, s)) return;
	let c = ks(r, a), l;
	if (!M(t)) return void (e !== null && mo(n, c.anchorNode, c.focusNode) && r.removeAllRanges());
	let d = t.anchor, f = t.focus, p = d.getNode(), m = f.getNode(), [h, g] = Yi(n, p, d.offset), [_, v] = Yi(n, m, f.offset), y = t.format, b = t.style, ee = t.isCollapsed(), x = h, te = _, ne = !1;
	if (d.type === "text" ? (x = j(p) ? Ys(p, h, n) : null, ne = p.getFormat() !== y || p.getStyle() !== b) : M(e) && e.anchor.type === "text" && (ne = !0), f.type === "text" && (te = j(m) ? Ys(m, _, n) : null), x !== null && te !== null) {
		if (ee && (e === null || ne || M(e) && (e.format !== y || e.style !== b)) && function(e, t, n, r, i, a) {
			e._inputState.collapsedSelectionFormat = {
				format: t,
				key: i,
				offset: r,
				style: n,
				timeStamp: a
			};
		}(n, y, b, g, d.key, performance.now()), (r.type !== "Range" || !ee) && c.anchorOffset === g && c.focusOffset === v && c.anchorNode === x && c.focusNode === te) {
			if (s === null || !a.contains(s)) {
				let e = s === null ? null : go(s);
				e !== null && e !== n || i.has("skip-selection-focus") || a.focus({ preventScroll: !0 });
			}
			if (d.type !== "element") return;
		}
		if (Ji(r, x, g, te, v), u && t.isCollapsed() && a !== null && !i.has("skip-selection-focus")) {
			let e = Ns(a);
			if (e === null || !a.contains(e)) {
				let e = Ps(a.ownerDocument), t = e === null ? null : go(e);
				t !== null && t !== n || a.focus({ preventScroll: !0 });
			}
		}
		if (!i.has("skip-scroll-into-view") && t.isCollapsed() && a !== null && a === Ns(a)) {
			let e = M(t) && t.anchor.type === "element" ? x.childNodes[g] || null : (l === void 0 && (l = Os(r, a)), l);
			if (e !== null) {
				let t;
				if (xo(e)) {
					let n = e.ownerDocument.createRange();
					n.selectNode(e), t = n.getBoundingClientRect();
				} else t = e.getBoundingClientRect();
				(function(e, t, n) {
					let r = os(n), i = us(r);
					if (r === null || i === null) return;
					let a = n.getBoundingClientRect();
					if (t.bottom < a.top) return;
					let { top: o, bottom: s } = t, c = 0, l = 0, u = n;
					for (; u !== null;) {
						let t = u === r.body;
						if (t) {
							let t = i.visualViewport;
							if (t) {
								let e = t.offsetTop;
								c = e, l = e + t.height;
							} else c = 0, l = J(e).innerHeight;
							let n = i.getComputedStyle(r.documentElement), a = parseFloat(n.scrollPaddingTop), o = parseFloat(n.scrollPaddingBottom);
							isFinite(a) && (c += a), isFinite(o) && (l -= o);
						} else {
							let e = u === n ? a : u.getBoundingClientRect();
							c = e.top, l = e.bottom;
						}
						let d = 0;
						if (o < c ? d = -(c - o) : s > l && (d = s - l), d !== 0) if (t) i.scrollBy(0, d);
						else {
							let e = u.scrollTop;
							u.scrollTop += d;
							let t = u.scrollTop - e;
							o -= t, s -= t;
						}
						if (t) break;
						u = as(u);
					}
				})(n, t, a);
			}
		}
		(function(e) {
			e._inputState.isSelectionChangeFromDOMUpdate = !0;
		})(n);
	}
}
function Zi(e) {
	let t = N() || Ui();
	t === null && (t = Io().selectEnd()), t.insertNodes(e);
}
function Qi(e, t) {
	for (let n of e.split(/(\r?\n|\t)/)) n === "\n" || n === "\r\n" ? t.linebreak() : n === "	" ? t.tab() : n !== "" && t.text(n);
}
function $i(e) {
	let t = [];
	return Qi(e, {
		linebreak: () => t.push(Wa()),
		tab: () => t.push(ci()),
		text: (e) => t.push(A(e))
	}), t;
}
function ea(e) {
	let t = [];
	for (let n of e) Ga(n) || (!z(n) && !B(n) || n.isInline() ? t.push(n) : z(n) && t.push(...ea(n.getChildren())));
	return t;
}
function ta(e) {
	let t = e;
	e.isCollapsed() || t.removeText();
	let n = N();
	M(n) && (t = n), M(t) || a(161);
	let r = t.anchor, i = r.getNode(), o = r.offset;
	for (; !Ws(i) && Q(i) === null;) {
		let e = i;
		if ([i, o] = na(i, o), e.is(i)) break;
	}
	return o;
}
function na(e, t) {
	let n = e.getParent();
	if (!n) {
		let e = H();
		return Io().append(e), e.select(), [Io(), 0];
	}
	if (j(e)) {
		let r = e.splitText(t);
		if (r.length === 0) return [n, e.getIndexWithinParent()];
		let i = t === 0 ? 0 : 1;
		return [n, r[0].getIndexWithinParent() + i];
	}
	if (!z(e) || t === 0) return [n, e.getIndexWithinParent()];
	let r = e.getChildAtIndex(t);
	if (r) {
		let n = new gi(di(e.__key, t, "element"), di(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(n);
		i && i.append(r, ...r.getNextSiblings());
	}
	return [n, e.getIndexWithinParent() + 1];
}
function ra(e) {
	return Ga(e) || ds(e) || j(e) || e.isParentRequired();
}
function ia(e) {
	let t = H(), n = null;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (ra(i)) {
			if (n === null) {
				n = i.createParentElementNode(), t.append(n);
				let a = e[r + 1];
				if (Ga(i) && (a === void 0 || !ra(a))) continue;
			}
			n.append(i);
		} else t.append(i), n = null;
	}
	return t;
}
function aa(e, t, n, r, i = "decorators-and-blocks") {
	if (t === "move" && r === "character" && !e.isCollapsed()) {
		let [t, r] = n === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
		return r.set(t.key, t.offset, t.type), !0;
	}
	let a = ml(e.focus, n ? "previous" : "next"), o = r === "lineboundary", s = t === "move", c = a, l = i === "decorators-and-blocks";
	if (!wl(c)) {
		for (let e of c) {
			l = !1;
			let { origin: t } = e;
			if (!B(t) || t.isIsolated() || (c = e, !o || !t.isInline())) break;
		}
		if (l) for (let e of al(a).iterNodeCarets(t === "extend" ? "shadowRoot" : "root")) {
			if (qc(e)) e.origin.isInline() || (c = e);
			else {
				if (z(e.origin)) continue;
				B(e.origin) && !e.origin.isInline() && (c = e);
			}
			break;
		}
	}
	if (c === a) return !1;
	if (s && !o && B(c.origin) && c.origin.isKeyboardSelectable()) {
		let e = Bi();
		return e.add(c.origin.getKey()), G(e), !0;
	}
	return c = Cl(c), s && hl(e.anchor, c), hl(e.focus, c), l || !o;
}
var P = null, F = null, I = !1, oa = !1, sa = !1, ca = /* @__PURE__ */ new Set(), la = 0, ua = {
	characterData: !0,
	childList: !0,
	subtree: !0
};
function da() {
	return I || P !== null && P._readOnly;
}
function L() {
	I && a(13);
}
function fa() {
	la > 99 && a(14);
}
function pa() {
	return P === null && a(195, ga()), P;
}
function ma(e) {
	pa() !== null && F === null && (F = e), F !== e && o(378);
}
function R() {
	return F === null && a(337, ga()), F;
}
function ha() {
	R()._dirtyType = 2;
}
function ga() {
	let e = 0, t = /* @__PURE__ */ new Set(), n = ao.version;
	if (typeof window < "u") for (let r of Ts(document)) {
		let i = _o(r);
		if (ho(i)) e++;
		else if (i) {
			let e = String(i.constructor.version || "<0.17.1");
			e === n && (e += " (separately built, likely a bundler configuration issue)"), t.add(e);
		}
	}
	let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
	return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function _a() {
	return F;
}
function va(e, t, n) {
	let r = t.__type, i = lo(e, r), a = n.get(r);
	a === void 0 && (a = Array.from(i.transforms), n.set(r, a));
	let o = a.length;
	for (let e = 0; e < o && (a[e](t), t.isAttached()); e++);
}
function ya(e, t) {
	return e !== void 0 && e.__key !== t && e.isAttached();
}
function ba(e, t) {
	if (!t) return;
	let n = e._updateTags, r = t;
	Array.isArray(t) || (r = [t]);
	for (let e of r) n.add(e);
}
function xa(e) {
	return Sa(e, R()._nodes);
}
function Sa(e, t) {
	let n = e.type, r = t.get(n);
	r === void 0 && a(17, n);
	let i = r.klass;
	e.type !== i.getType() && a(18, i.name);
	let o = i.importJSON(e), s = e.children;
	if (z(o) && Array.isArray(s)) for (let e = 0; e < s.length; e++) {
		let n = Sa(s[e], t);
		o.append(n);
	}
	let c = e.$slots;
	if (c) {
		_c(o) || a(379, i.name);
		for (let e in c) Pc(o, e, Sa(c[e], t));
	}
	return o;
}
function Ca(e, t, n) {
	let r = P, i = I, a = F;
	P = t, I = !0, F = e;
	try {
		return n();
	} finally {
		P = r, I = i, F = a;
	}
}
function wa(e, t) {
	let n = sa;
	sa = !0;
	try {
		(function(e, t) {
			let n = e._pendingEditorState, r = e._rootElement, i = e._headless || r === null;
			if (n === null) return void (!e._updating && e._deferred.length > 0 && Da(e, e._deferred));
			let a = e._editorState, o = a._selection, s = n._selection, c = e._dirtyType !== 0, l = P, u = I, d = F, f = e._updating, p = e._observer, m = null;
			if (e._pendingEditorState = null, e._editorState = n, !i && c && p !== null) {
				F = e, P = n, I = !1, e._updating = !0;
				try {
					let t = e._dirtyType, r = e._dirtyElements, i = e._dirtyLeaves;
					p.disconnect(), m = Jt(a, n, e, t, r, i);
				} catch (t) {
					if (t instanceof Error && e._onError(t), oa) throw t;
					$a(e, null, r, n), Re(e), e._dirtyType = 2, oa = !0, wa(e, a), oa = !1;
					return;
				} finally {
					p.observe(r, ua), e._updating = f, P = l, I = u, F = d;
				}
			}
			n._readOnly ||= !0;
			let h = e._dirtyLeaves, g = e._dirtyElements, _ = e._normalizedNodes, v = e._updateTags;
			c && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set()), e._updateTags = /* @__PURE__ */ new Set(), function(e, t) {
				let n = e._decorators, r = e._pendingDecorators || n, i = t._nodeMap, a;
				for (a in r) i.has(a) || (r === n && (r = Po(e)), delete r[a]);
			}(e, n);
			let y = i ? null : bs(J(e));
			if (e._editable && y !== null && (c || s === null || s.dirty || !s.is(o)) && r !== null && !v.has("skip-dom-selection")) {
				F = e, P = n;
				try {
					if (p !== null && p.disconnect(), c || s === null || s.dirty) {
						let t = e._blockCursorElement;
						t !== null && ys(t, e, r), Xi(o, s, e, y, v, r);
					}
					(function(e, t, n) {
						let r = e._blockCursorElement;
						if (M(n) && n.isCollapsed() && n.anchor.type === "element" && t.contains(Ns(t))) {
							let i = n.anchor, a = i.getNode(), o = i.offset, s = !1, c = null;
							if (o === a.getChildrenSize()) vs(a.getChildAtIndex(o - 1)) && (s = !0);
							else {
								let t = a.getChildAtIndex(o);
								if (t !== null && vs(t)) {
									let n = t.getPreviousSibling();
									(n === null || vs(n)) && (s = !0, c = e.getElementByKey(t.__key));
								}
							}
							if (s) {
								let n = qs(a, e.getElementByKey(a.__key), e).element;
								r === null && (e._blockCursorElement = r = function(e) {
									let t = e.theme, n = X().createElement("div");
									n.contentEditable = "false", n.setAttribute("data-lexical-cursor", "true");
									let r = t.blockCursor;
									return r !== void 0 && (typeof r == "string" && (r = t.blockCursor = Rl(r)), r !== void 0 && n.classList.add(...r)), n;
								}(e._config)), t.style.caretColor = "transparent", c === null ? n.appendChild(r) : n.insertBefore(r, c);
								return;
							}
						}
						r !== null && ys(r, e, t);
					})(e, r, s);
				} finally {
					p !== null && p.observe(r, ua), F = d, P = l;
				}
			}
			m !== null && function(e, t, n, r, i) {
				let a = Array.from(e._listeners.mutation), o = a.length;
				for (let e = 0; e < o; e++) {
					let [o, s] = a[e];
					for (let e of s) {
						let a = t.get(e);
						a !== void 0 && o(a, {
							dirtyLeaves: r,
							prevEditorState: i,
							updateTags: n
						});
					}
				}
			}(e, m, v, h, a), M(s) || s === null || o !== null && o.is(s) || e.dispatchCommand(Xt, void 0);
			let b = e._pendingDecorators;
			b !== null && (e._decorators = b, e._pendingDecorators = null, Ta("decorator", e, !0, b)), function(e, t, n) {
				let r = Fo(t), i = Fo(n);
				r !== i && Ta("textcontent", e, !0, i);
			}(e, t || a, n), Ta("update", e, !0, {
				dirtyElements: g,
				dirtyLeaves: h,
				editorState: n,
				mutatedNodes: m,
				normalizedNodes: _,
				prevEditorState: t || a,
				tags: v
			}), !f && Da(e, e._deferred), (function(e) {
				let t = e._updates;
				if (t.length === 0) return void (e._cascadeCount = 0);
				if (function(e) {
					ca.has(e) || (ca.add(e), setTimeout(() => {
						ca.delete(e), e._cascadeCount = 0;
					}, 0));
				}(e), e._cascadeCount++ > 99) return e._updates = [], e._cascadeCount = 0, void e._onWarn(/* @__PURE__ */ Error(`One or more update listeners are endlessly enqueueing more updates. May have encountered infinite recursion caused by update listeners that trigger additional updates without a stop condition. Editor namespace: ${e._config.namespace}`));
				let n = t.shift();
				if (n) {
					let [t, r] = n;
					ka(e, t, r);
				}
			})(e);
		})(e, t);
	} finally {
		sa = n;
	}
}
function Ta(e, t, n, ...r) {
	let i = t._updating;
	t._updating = n;
	try {
		let n = t._listeners[e], i = Array.from(n);
		for (let [e, t] of i) {
			t && t();
			let i = e(...r);
			n.has(e) ? n.set(e, i) : i && i();
		}
	} finally {
		t._updating = i;
	}
}
function Ea(e, t, n, r) {
	let i = Bo(e), a;
	if (!sa) for (let e = 0; e < i.length; e++) i[e]._updating || (i[e]._cascadeCount = 0);
	for (let e = 4; e >= 0; e--) for (let o = 0; o < i.length; o++) {
		let s = i[o];
		if (o > 0 && s._updating) {
			a = s;
			break;
		}
		let c = s._commands.get(t);
		if (c !== void 0) {
			let t = c[e];
			if (t.size > 0) {
				let e = !1;
				if (Aa(s, () => {
					for (let i of t) if (i(n, r)) return void (e = !0);
				}), e) return e;
			}
		}
	}
	return a && a.update(() => {
		Ea(a, t, n, r);
	}), !1;
}
function Da(e, t) {
	if (e._deferred = [], t.length !== 0) {
		let n = e._updating;
		e._updating = !0;
		try {
			for (let e = 0; e < t.length; e++) t[e]();
		} finally {
			e._updating = n;
		}
	}
}
function Oa(e, t) {
	let n = e._updates, r = t || !1;
	for (; n.length !== 0;) {
		let t = n.shift();
		if (t) {
			let [n, i] = t, o = e._pendingEditorState, s;
			i !== void 0 && (s = i.onUpdate, i.skipTransforms && (r = !0), i.discrete && (o === null && a(191), o._flushSync = !0), s && e._deferred.push(s), ba(e, i.tag)), o == null ? ka(e, n, i) : n();
		}
	}
	return r;
}
function ka(e, t, n) {
	let r = e._updateTags, i, o = !1, s = !1;
	n !== void 0 && (i = n.onUpdate, ba(e, n.tag), o = n.skipTransforms || !1, s = n.discrete || !1), i && e._deferred.push(i);
	let c = e._editorState, l = e._pendingEditorState, u = !1;
	(l === null || l._readOnly) && (l = e._pendingEditorState = Ia(l || c), u = !0), l._flushSync = s;
	let d = P, f = I, p = F, m = e._updating;
	P = l, I = !1, e._updating = !0, F = e;
	let h = e._headless || e.getRootElement() === null;
	so(null);
	try {
		u && (h ? c._selection !== null && (l._selection = c._selection.clone()) : l._selection = function(e, t) {
			let n = e.getEditorState()._selection, r = bs(J(e));
			return M(n) || n == null ? Hi(n, r, e, t) : n.clone();
		}(e, n && n.event || null));
		let r = e._compositionKey;
		t(), o = Oa(e, o), function(e, t) {
			let n = t.getEditorState()._selection, r = e._selection;
			if (M(r)) {
				let e = r.anchor, t = r.focus, i;
				if (e.type === "text" && (i = e.getNode(), i.selectionTransform(n, r)), t.type === "text") {
					let e = t.getNode();
					i !== e && e.selectionTransform(n, r);
				}
			}
		}(l, e), e._dirtyType !== 0 && (o ? function(e, t) {
			let n = t._dirtyLeaves, r = e._nodeMap;
			for (let e of n) {
				let t = r.get(e);
				j(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && nt(t);
			}
		}(l, e) : function(e, t) {
			let n = t._dirtyLeaves, r = t._dirtyElements, i = e._nodeMap, a = ko(), o = /* @__PURE__ */ new Map(), s = n, c = s.size, l = r, u = l.size;
			for (; c > 0 || u > 0;) {
				if (c > 0) {
					t._dirtyLeaves = /* @__PURE__ */ new Set();
					for (let e of s) {
						let r = i.get(e);
						j(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && nt(r), r !== void 0 && ya(r, a) && va(t, r, o), n.add(e);
					}
					if (s = t._dirtyLeaves, c = s.size, c > 0) {
						la++;
						continue;
					}
				}
				t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), l.delete("root") && l.set("root", !0);
				for (let e of l) {
					let n = e[0], s = e[1];
					if (r.set(n, s), !s) continue;
					let c = i.get(n);
					c !== void 0 && ya(c, a) && va(t, c, o);
				}
				s = t._dirtyLeaves, c = s.size, l = t._dirtyElements, u = l.size, la++;
			}
			t._dirtyLeaves = n, t._dirtyElements = r;
		}(l, e), Oa(e), function(e, t, n, r) {
			let i = e._nodeMap, a = t._nodeMap, o = [];
			for (let [e] of r) {
				let t = a.get(e);
				t !== void 0 && (t.isAttached() || (z(t) && Oe(t, e, i, a, o, r), i.has(e) || r.delete(e), o.push(e)));
			}
			for (let e of n) {
				let t = a.get(e);
				t === void 0 || t.isAttached() || (_c(t) && t.__slots !== null && Oe(t, e, i, a, o, n), i.has(e) || n.delete(e), o.push(e));
			}
			for (let e of o) a.delete(e);
			let s = R(), c = s._compositionKey;
			c === null || a.has(c) || (s._compositionKey = null);
		}(c, l, e._dirtyLeaves, e._dirtyElements)), r !== e._compositionKey && (l._flushSync = !0);
		let i = l._selection;
		if (M(i)) {
			e._slotsUsed && Fi(i);
			let t = l._nodeMap, n = i.anchor.key, r = i.focus.key;
			t.get(n) !== void 0 && t.get(r) !== void 0 || a(19);
		} else _i(i) && i._nodes.size === 0 && (l._selection = null);
	} catch (t) {
		t instanceof Error && e._onError(t), e._pendingEditorState = c, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), wa(e);
		return;
	} finally {
		P = d, I = f, F = p, e._updating = m, la = 0;
	}
	e._dirtyType !== 0 || e._deferred.length > 0 || function(e, t) {
		let n = t.getEditorState()._selection, r = e._selection;
		if (r !== null) {
			if (r.dirty || !r.is(n)) return !0;
		} else if (n !== null) return !0;
		return !1;
	}(l, e) ? l._flushSync ? (l._flushSync = !1, wa(e)) : u && fo(() => {
		wa(e);
	}) : (l._flushSync = !1, u && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function Aa(e, t, n) {
	F === e && n === void 0 ? t() : ka(e, t, n);
}
function ja(e) {
	if (Y(e)) {
		let t = null;
		for (let n of e.getChildren()) t = n.isInline() ? (t || n.replace(n.createParentElementNode())).append(n) : null;
	}
}
var Ma = class extends Or {
	__first;
	__last;
	__size;
	__format;
	__style;
	__indent;
	__dir;
	__textFormat;
	__textStyle;
	__slotHost;
	__slots;
	$config() {
		return this.config(Symbol.for("ElementNode"), {
			$transform: ja,
			extends: Or
		});
	}
	constructor(e) {
		super(e), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "", this.__slotHost = null, this.__slots = null;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__key === e.__key && (this.__first = e.__first, this.__last = e.__last, this.__size = e.__size, this.__slotHost = e.__slotHost, this.__slotHost !== null && this.__parent !== null && a(384, this.__key, String(this.__slotHost), String(this.__parent)), this.__slots = e.__slots), this.__indent = e.__indent, this.__format = e.__format, this.__style = e.__style, this.__dir = e.__dir, this.__textFormat = e.__textFormat, this.__textStyle = e.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		return fe[this.getFormat()] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getChildrenKeys() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t.__key), t = t.getNextSibling();
		return e;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return this.getChildrenSize() === 0 && Cc(this).length === 0;
	}
	isDirty() {
		let e = R()._dirtyElements;
		return e !== null && e.has(this.__key);
	}
	isLastChild() {
		let e = this.getLatest(), t = this.getParentOrThrow().getLastChild();
		return t !== null && t.is(e);
	}
	getAllTextNodes() {
		let e = [];
		for (let t of Cc(this)) {
			let n = wc(this, t);
			z(n) && e.push(...n.getAllTextNodes());
		}
		let t = this.getFirstChild();
		for (; t !== null;) {
			if (j(t) && e.push(t), z(t)) {
				let n = t.getAllTextNodes();
				e.push(...n);
			}
			t = t.getNextSibling();
		}
		return e;
	}
	getFirstDescendant() {
		let e = this.getFirstChild();
		for (; z(e);) {
			let t = e.getFirstChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getLastDescendant() {
		let e = this.getLastChild();
		for (; z(e);) {
			let t = e.getLastChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getDescendantByIndex(e) {
		let t = this.getChildren(), n = t.length;
		if (e >= n) {
			let e = t[n - 1];
			return z(e) && e.getLastDescendant() || e || null;
		}
		let r = t[e];
		return z(r) && r.getFirstDescendant() || r || null;
	}
	getFirstChild() {
		let e = this.getLatest().__first;
		return e === null ? null : W(e);
	}
	getFirstChildOrThrow() {
		let e = this.getFirstChild();
		return e === null && a(45, this.__key), e;
	}
	getLastChild() {
		let e = this.getLatest().__last;
		return e === null ? null : W(e);
	}
	getLastChildOrThrow() {
		let e = this.getLastChild();
		return e === null && a(96, this.__key), e;
	}
	getChildAtIndex(e) {
		let t = this.getChildrenSize(), n, r;
		if (e < t / 2) {
			for (n = this.getFirstChild(), r = 0; n !== null && r <= e;) {
				if (r === e) return n;
				n = n.getNextSibling(), r++;
			}
			return null;
		}
		for (n = this.getLastChild(), r = t - 1; n !== null && r >= e;) {
			if (r === e) return n;
			n = n.getPreviousSibling(), r--;
		}
		return null;
	}
	getTextContent() {
		let e = jc(this), t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContent(), z(i) && r !== n - 1 && !i.isInline() && (e += oe);
		}
		return e;
	}
	getTextContentSize() {
		let e = function(e) {
			let t = 0;
			for (let n of Cc(e)) {
				let r = wc(e, n);
				r !== null && (t += r.getTextContentSize());
			}
			return t;
		}(this), t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContentSize(), z(i) && r !== n - 1 && !i.isInline() && (e += 2);
		}
		return e;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(e) {
		if (e !== "") {
			let t = de[e];
			return (this.getFormat() & t) !== 0;
		}
		return !1;
	}
	hasTextFormat(e) {
		let t = S[e];
		return (this.getTextFormat() & t) !== 0;
	}
	getFormatFlags(e, t) {
		return wo(this.getLatest().__textFormat, e, t);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(e, t) {
		L();
		let n = N(), r = e, i = t, a = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (e === 0 && t === 0) {
				let e = this.getFirstChild();
				if (j(e) || z(e)) return e.select(0, 0);
			} else if (!(e !== void 0 && e !== a || t !== void 0 && t !== a)) {
				let e = this.getLastChild();
				if (j(e) || z(e)) return e.select();
			}
		}
		r === void 0 && (r = a), i === void 0 && (i = a);
		let o = this.__key;
		return M(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : Ri(o, r, o, i, "element", "element");
	}
	selectStart() {
		let e = this.getFirstDescendant();
		return e ? e.selectStart() : this.select();
	}
	selectEnd() {
		let e = this.getLastDescendant();
		return e ? e.selectEnd() : this.select();
	}
	clear() {
		let e = this.getWritable();
		return this.getChildren().forEach((e) => e.remove()), e;
	}
	append(...e) {
		return this.splice(this.getChildrenSize(), 0, e);
	}
	setDirection(e) {
		let t = this.getWritable();
		return t.__dir = e, t;
	}
	setFormat(e) {
		return this.getWritable().__format = e !== "" && de[e] || 0, this;
	}
	setStyle(e) {
		return this.getWritable().__style = e || "", this;
	}
	setTextFormat(e) {
		let t = this.getWritable();
		return t.__textFormat = e, t;
	}
	setTextStyle(e) {
		let t = this.getWritable();
		return t.__textStyle = e, t;
	}
	setIndent(e) {
		return this.getWritable().__indent = e, this;
	}
	splice(e, t, n) {
		Er(this) && a(324, this.__key, this.__type);
		let r = this.getChildrenSize(), i = this.getWritable();
		e + t <= r || a(226, String(e), String(t), String(r));
		for (let e of n);
		let o = i.__key, s = [], c = [], l = this.getChildAtIndex(e + t), u = null, d = r - t + n.length;
		if (e !== 0) if (e === r) u = this.getLastChild();
		else {
			let t = this.getChildAtIndex(e);
			t !== null && (u = t.getPreviousSibling());
		}
		if (t > 0) {
			let e = u === null ? this.getFirstChild() : u.getNextSibling();
			for (let n = 0; n < t; n++) {
				e === null && a(100);
				let t = e.getNextSibling(), n = e.__key;
				Do(e.getWritable()), c.push(n), e = t;
			}
		}
		let f = u;
		for (let e of n) {
			f !== null && e.is(f) && (u = f = f.getPreviousSibling());
			let t = e.getWritable();
			t.__parent === o && d--, Do(t);
			let n = e.__key;
			if (f === null) i.__first = n, t.__prev = null;
			else {
				let e = f.getWritable();
				e.__next = n, t.__prev = e.__key;
			}
			e.__key === o && a(76), t.__parent = o, s.push(n), f = e;
		}
		if (e + t === r) f !== null && (f.getWritable().__next = null, i.__last = f.__key);
		else if (l !== null) {
			let e = l.getWritable();
			if (f !== null) {
				let t = f.getWritable();
				e.__prev = f.__key, t.__next = l.__key;
			} else e.__prev = null;
		}
		if (i.__size = d, c.length) {
			let e = N();
			if (M(e)) {
				let t = new Set(c), n = new Set(s), { anchor: r, focus: i } = e;
				Na(r, t, n) && Ki(r, r.getNode(), this, u, l), Na(i, t, n) && Ki(i, i.getNode(), this, u, l), d !== 0 || this.canBeEmpty() || Y(this) || this.remove();
			}
		}
		return i;
	}
	getDOMSlot(e) {
		return new be(e);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Z(t)) {
			let e = this.getIndent();
			e > 0 && (t.style.paddingInlineStart = 40 * e + "px", t.setAttribute("data-lexical-indent", String(e)));
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	exportJSON() {
		let e = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		}, t = this.getTextFormat(), n = this.getTextStyle();
		return t === 0 && n === "" || Y(this) || this.getChildren().some(j) || (t !== 0 && (e.textFormat = t), n !== "" && (e.textStyle = n)), e;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setFormat(e.format).setIndent(e.indent).setDirection(e.direction).setTextFormat(e.textFormat || 0).setTextStyle(e.textStyle || "");
	}
	insertNewAfter(e, t) {
		return null;
	}
	canIndent() {
		return !0;
	}
	collapseAtStart(e) {
		return !1;
	}
	excludeFromCopy(e) {
		return !1;
	}
	canReplaceWith(e) {
		return !0;
	}
	canInsertAfter(e) {
		return !0;
	}
	canBeEmpty() {
		return !0;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	isInline() {
		return !1;
	}
	isShadowRoot() {
		return !1;
	}
	canMergeWith(e) {
		return !1;
	}
	extractWithChild(e, t, n) {
		return !1;
	}
	canMergeWhenEmpty() {
		return !1;
	}
	reconcileObservedMutation(e, t) {
		let n = qs(this, e, t), r = n.getFirstChild();
		for (let e = this.getFirstChild(); e; e = e.getNextSibling()) {
			let i = t.getElementByKey(e.getKey());
			i !== null && (r == null ? (n.insertChild(i), r = i) : r !== i && n.replaceChild(i, r), r = r.nextSibling);
		}
	}
};
function z(e) {
	return e instanceof Ma;
}
function Na(e, t, n) {
	let r = e.getNode();
	for (; r;) {
		let e = r.__key;
		if (t.has(e) && !n.has(e)) return !0;
		r = r.getParent();
	}
	return !1;
}
var Pa = class extends Or {
	__slotHost;
	__slots;
	constructor(e) {
		super(e), this.__slotHost = null, this.__slots = null;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__key === e.__key && (this.__slotHost = e.__slotHost, this.__slotHost !== null && this.__parent !== null && a(383, this.__key, String(this.__slotHost), String(this.__parent)), this.__slots = e.__slots);
	}
	decorate(e, t) {
		return null;
	}
	isIsolated() {
		return !1;
	}
	isInline() {
		return !0;
	}
	isKeyboardSelectable() {
		return !0;
	}
};
function B(e) {
	return e instanceof Pa;
}
var Fa = class e extends Ma {
	__cachedText;
	static getType() {
		return "root";
	}
	static clone() {
		return new e();
	}
	constructor() {
		super("root"), this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		a(51);
	}
	getTextContent() {
		let e = this.__cachedText;
		return e === null || !da() && R()._dirtyType !== 0 ? super.getTextContent() : e;
	}
	remove() {
		a(52);
	}
	replace(e) {
		a(53);
	}
	insertBefore(e) {
		a(54);
	}
	insertAfter(e) {
		a(55);
	}
	updateDOM(e, t) {
		return !1;
	}
	splice(e, t, n) {
		for (let e of n) z(e) || B(e) || a(282);
		return super.splice(e, t, n);
	}
	static importJSON(e) {
		return Io().updateFromJSON(e);
	}
	collapseAtStart() {
		return !0;
	}
};
function V(e) {
	return e instanceof Fa;
}
function Ia(e) {
	return new Ba(Ee(e._nodeMap), null, e._slotsUsed);
}
function La() {
	return new Ba(/* @__PURE__ */ new Map([["root", new Fa()]]), null, !1);
}
function Ra(e) {
	let t = e.exportJSON(), n = e.constructor;
	if (t.type !== n.getType() && a(130, n.name), z(e)) {
		let r = t.children;
		Array.isArray(r) || a(59, n.name);
		let i = e.getChildren();
		for (let e = 0; e < i.length; e++) {
			let t = Ra(i[e]);
			r.push(t);
		}
	}
	let r = Cc(e);
	if (r.length > 0) {
		let i = {};
		for (let t of r) {
			let r = wc(e, t);
			r === null && a(366, n.name, t), i[t] = Ra(r);
		}
		t.$slots = i;
	}
	return t;
}
function za(e) {
	return e instanceof Ba;
}
var Ba = class e {
	_nodeMap;
	_selection;
	_flushSync;
	_readOnly;
	_parsed;
	_slotsUsed;
	constructor(e, t = null, n = !1) {
		this._nodeMap = e, this._selection = t || null, this._flushSync = !1, this._readOnly = !1, this._parsed = !1, this._slotsUsed = n;
	}
	isEmpty() {
		return this._nodeMap.size === 1 && this._selection === null;
	}
	read(e, t) {
		return Ca(t && t.editor || null, this, e);
	}
	clone(t) {
		let n = new e(this._nodeMap, t === void 0 ? this._selection : t, this._slotsUsed);
		return n._readOnly = !0, n;
	}
	toJSON() {
		return Ca(null, this, () => ({ root: Ra(Io()) }));
	}
}, Va = class extends Ma {
	static getType() {
		return "artificial";
	}
	createDOM(e) {
		return X().createElement("div");
	}
}, Ha = class e extends Or {
	static getType() {
		return "linebreak";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super(e);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return X().createElement("br");
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	static importDOM() {
		return { br: (e) => Ka(e) || qa(e) ? null : {
			conversion: Ua,
			priority: 0
		} };
	}
	static importJSON(e) {
		return Wa().updateFromJSON(e);
	}
};
function Ua(e) {
	return { node: Wa() };
}
function Wa() {
	return hs(new Ha());
}
function Ga(e) {
	return e instanceof Ha;
}
function Ka(e) {
	let t = e.parentElement;
	if (t !== null && Us(t)) {
		let n = t.firstChild;
		if (n === e || n.nextSibling === e && Ja(n)) {
			let n = t.lastChild;
			if (n === e || n.previousSibling === e && Ja(n)) return !0;
		}
	}
	return !1;
}
function qa(e) {
	let t = e.parentElement;
	if (t !== null && Us(t)) {
		let n = t.firstChild;
		if (n === e || n.nextSibling === e && Ja(n)) return !1;
		let r = t.lastChild;
		if (r === e || r.previousSibling === e && Ja(r)) return !0;
	}
	return !1;
}
function Ja(e) {
	return xo(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
var Ya = class e extends Ma {
	static getType() {
		return "paragraph";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = X().createElement("p"), n = Qo(e.theme, "paragraph");
		return n !== void 0 && t.classList.add(...n), t;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	static importDOM() {
		return { p: (e) => ({
			conversion: Xa,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Z(t)) {
			this.isEmpty() && t.append(X().createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
		}
		return { element: t };
	}
	static importJSON(e) {
		return H().updateFromJSON(e);
	}
	exportJSON() {
		let e = super.exportJSON();
		if (e.textFormat === void 0 || e.textStyle === void 0) {
			let t = this.getChildren().find(j);
			t ? (e.textFormat = t.getFormat(), e.textStyle = t.getStyle()) : (e.textFormat = this.getTextFormat(), e.textStyle = this.getTextStyle());
		}
		return e;
	}
	insertNewAfter(e, t) {
		let n = H();
		n.setTextFormat(e.format), n.setTextStyle(e.style);
		let r = this.getDirection();
		return n.setDirection(r), n.setFormat(this.getFormatType()), n.setStyle(this.getStyle()), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = this.getChildren();
		if (e.length === 0 || j(e[0]) && e[0].getTextContent().trim() === "") {
			if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
			if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
		}
		return !1;
	}
};
function Xa(e) {
	let t = H();
	if (rc(t, e), tc(e, t), t.getFormatType() === "") {
		let n = e.getAttribute("align");
		n && n && n in de && t.setFormat(n);
	}
	return nc(t, e), { node: t };
}
function H() {
	return hs(new Ya());
}
function Za(e) {
	return e instanceof Ya;
}
function Qa(e) {
	console.warn(e);
}
function $a(e, t, n, r, i) {
	let a = e._keyToDOMMap;
	a.clear(), e._editorState = La(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), i && i.preserveUpdateQueue || (e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._cascadeCount = 0), e._blockCursorElement = null, e._inputState.handledSelectionCommandTimeoutId !== null && clearTimeout(e._inputState.handledSelectionCommandTimeoutId), e._inputState = {
		collapsedSelectionFormat: {
			format: 0,
			key: "root",
			offset: 0,
			style: "",
			timeStamp: 0
		},
		compositionEndData: "",
		compositionPhase: "idle",
		hadOrphanedCompositionEvents: !1,
		handledSelectionCommandTimeoutId: null,
		isInsertLineBreak: !1,
		isInsertTextAfterHandledSelectionCommand: !1,
		isSelectionChangeFromDOMUpdate: !1,
		isSelectionChangeFromMouseDown: !1,
		lastBeforeInputInsertTextTimeStamp: 0,
		lastKeyCode: null,
		lastKeyDownTimeStamp: 0,
		postDeleteSelectionToRestore: null,
		unprocessedBeforeInputData: null
	};
	let o = e._observer;
	o !== null && (o.disconnect(), e._observer = null), t !== null && (t.textContent = "", function(e, t) {
		let n = `__lexicalKey_${t._key}`;
		delete e[n];
	}(t, e)), n !== null && (n.textContent = "", a.set("root", n), jo(n, e, "root"));
}
function eo(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { klass: r, ownNodeConfig: i } of dc(e)) {
		let e = r.transform;
		if (!n.has(e)) {
			n.add(e);
			let i = r.transform();
			i && t.add(i);
		}
		if (i) {
			let e = i.$transform;
			e && t.add(e);
		}
	}
	return t;
}
var to = {
	$createDOM: (e, t) => e.createDOM(t._config, t),
	$decorateDOM: (e, t, n, r) => {},
	$exportDOM: (e, t) => {
		let n = uo(t, e.getType());
		return n && n.exportDOM !== void 0 ? n.exportDOM(t, e) : e.exportDOM(t);
	},
	$extractWithChild: (e, t, n, r, i) => z(e) && e.extractWithChild(t, n, r),
	$getDOMSlot: (e, t, n) => e.getDOMSlot(t),
	$getSlotTargetElement: (e, t, n, r) => null,
	$shouldExclude: (e, t, n) => z(e) && e.excludeFromCopy("html"),
	$shouldInclude: (e, t, n) => !t || e.isSelected(t),
	$updateDOM: (e, t, n, r) => e.updateDOM(t, n, r._config)
};
function no(e) {
	let t = e || {}, n = _a(), r = t.theme || {}, i = e === void 0 ? n : t.parentEditor || null, o = t.disableEvents || !1, s = La(), c = t.namespace || (i === null ? Vo() : i._config.namespace), l = t.editorState, u = [
		Fa,
		Zr,
		Ha,
		si,
		Ya,
		Va,
		...t.nodes || []
	], { onError: d, onWarn: f, html: p } = t, m = t.editable === void 0 || t.editable, h;
	if (e === void 0 && n !== null) h = n._nodes;
	else {
		h = /* @__PURE__ */ new Map();
		for (let e = 0; e < u.length; e++) {
			let n = u[e], r = null, i = null;
			if (n && typeof n == "object") {
				let e = n;
				n = e.replace, r = e.with, i = e.withKlass || null;
			}
			if (typeof n != "function" || !n.prototype || !(n === Or || n.prototype instanceof Or)) {
				let r = "<unknown>";
				try {
					r = JSON.parse(Ce);
				} catch {}
				a(365, String(e - u.length + (t.nodes ? t.nodes.length : 0)), typeof n == "function" ? `${n.name}${typeof n.getType == "function" ? ` (type ${String(n.getType())})` : ""}` : String(n), String(r));
			}
			uc(n);
			let o = n.getType(), s = eo(n);
			h.set(o, {
				exportDOM: p && p.export ? p.export.get(n) : void 0,
				klass: n,
				replace: r,
				replaceWithKlass: i,
				sharedNodeState: We(u[e]),
				transforms: s
			});
		}
	}
	let g = new ao(s, i, h, {
		disableEvents: o,
		dom: {
			...to,
			...e && e.dom
		},
		namespace: c,
		theme: r
	}, d || console.error, f || Qa, function(e, t) {
		let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (e) => {
			Object.keys(e).forEach((t) => {
				let r = n.get(t);
				r === void 0 && (r = [], n.set(t, r)), r.push(e[t]);
			});
		};
		return e.forEach((e) => {
			let t = e.klass.importDOM;
			if (t == null || r.has(t)) return;
			r.add(t);
			let n = t.call(e.klass);
			n !== null && i(n);
		}), t && i(t), n;
	}(h, p ? p.import : void 0), m, e);
	return l !== void 0 && (g._pendingEditorState = l, g._dirtyType = 2), function(e) {
		e.registerCommand($t, ur, 0), e.registerCommand(en, dr, 0), e.registerCommand(tn, fr, 0), e.registerCommand(nn, pr, 0), e.registerCommand(gn, gr, 0);
	}(g), g;
}
function ro(e, t) {
	let n = e.get(t);
	e.delete(t), n && n();
}
function io(e, t, n) {
	return e.set(t, n), ro.bind(null, e, t);
}
var ao = class {
	static version;
	_headless;
	_parentEditor;
	_rootElement;
	_editorState;
	_pendingEditorState;
	_compositionKey;
	_deferred;
	_keyToDOMMap;
	_updates;
	_updating;
	_cascadeCount;
	_listeners;
	_commands;
	_nodes;
	_decorators;
	_pendingDecorators;
	_config;
	_dirtyType;
	_cloneNotNeeded;
	_dirtyLeaves;
	_dirtyElements;
	_normalizedNodes;
	_updateTags;
	_observer;
	_key;
	_onError;
	_onWarn;
	_htmlConversions;
	_window;
	_editable;
	_blockCursorElement;
	_slotsUsed;
	_inputState;
	_createEditorArgs;
	constructor(e, t, n, r, i, a, o, s, c) {
		this._createEditorArgs = c, this._parentEditor = t, this._rootElement = null, this._editorState = e, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = new De(), this._updates = [], this._updating = !1, this._cascadeCount = 0, this._listeners = {
			decorator: /* @__PURE__ */ new Map(),
			editable: /* @__PURE__ */ new Map(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Map(),
			textcontent: /* @__PURE__ */ new Map(),
			update: /* @__PURE__ */ new Map()
		}, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Vo(), this._onError = i, this._onWarn = a, this._htmlConversions = o, this._editable = s, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null, this._slotsUsed = !1, this._inputState = {
			collapsedSelectionFormat: {
				format: 0,
				key: "root",
				offset: 0,
				style: "",
				timeStamp: 0
			},
			compositionEndData: "",
			compositionPhase: "idle",
			hadOrphanedCompositionEvents: !1,
			handledSelectionCommandTimeoutId: null,
			isInsertLineBreak: !1,
			isInsertTextAfterHandledSelectionCommand: !1,
			isSelectionChangeFromDOMUpdate: !1,
			isSelectionChangeFromMouseDown: !1,
			lastBeforeInputInsertTextTimeStamp: 0,
			lastKeyCode: null,
			lastKeyDownTimeStamp: 0,
			postDeleteSelectionToRestore: null,
			unprocessedBeforeInputData: null
		};
	}
	isComposing() {
		return this._compositionKey != null;
	}
	registerUpdateListener(e) {
		return io(this._listeners.update, e);
	}
	registerEditableListener(e) {
		return io(this._listeners.editable, e);
	}
	registerDecoratorListener(e) {
		return io(this._listeners.decorator, e);
	}
	registerTextContentListener(e) {
		return io(this._listeners.textcontent, e);
	}
	registerRootListener(e) {
		let t = this._listeners.root;
		return Vl(io(t, e, e(this._rootElement, null) || void 0), () => function(e, t, n) {
			let r = e.get(t);
			r && r(), e.set(t, t(...n) || void 0);
		}(t, e, [null, this._rootElement]));
	}
	registerCommand(e, t, n) {
		n === void 0 && a(35);
		let r = this._commands;
		r.has(e) || r.set(e, [
			new we(),
			new we(),
			new we(),
			new we(),
			new we()
		]);
		let i = r.get(e);
		i === void 0 && a(36, String(e));
		let o = function(e) {
			return 7 & e;
		}(n), s = i[o];
		return o === n ? s.addBack(t) : s.addFront(t), () => {
			s.delete(t), i.every((e) => e.size === 0) && r.delete(e);
		};
	}
	registerMutationListener(e, t, n) {
		let r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass, i = this._listeners.mutation, a = i.get(t);
		a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a)), a.add(r);
		let o = n && n.skipInitialization;
		return o !== void 0 && o || this.initializeMutationListener(t, r), () => {
			a.delete(r), a.size === 0 && i.delete(t);
		};
	}
	getRegisteredNode(e) {
		let t = this._nodes.get(e.getType());
		return t === void 0 && a(37, e.name), t;
	}
	resolveRegisteredNodeAfterReplacements(e) {
		for (; e.replaceWithKlass;) e = this.getRegisteredNode(e.replaceWithKlass);
		return e;
	}
	initializeMutationListener(e, t) {
		let n = this._editorState, r = Qs(n).get(t.getType());
		if (!r) return;
		let i = /* @__PURE__ */ new Map();
		for (let e of r.keys()) i.set(e, "created");
		i.size > 0 && e(i, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState: n,
			updateTags: /* @__PURE__ */ new Set(["registerMutationListener"])
		});
	}
	registerNodeTransformToKlass(e, t) {
		let n = this.getRegisteredNode(e);
		return n.transforms.add(t), n;
	}
	registerNodeTransform(e, t) {
		let n = this.registerNodeTransformToKlass(e, t), r = [n], i = n.replaceWithKlass;
		if (i != null) {
			let e = this.registerNodeTransformToKlass(i, t);
			r.push(e);
		}
		return function(e, t) {
			let n = Qs(e.getEditorState()), r = [];
			for (let e of t) {
				let t = n.get(e);
				t && r.push(t);
			}
			r.length !== 0 && e.update(() => {
				for (let e of r) for (let t of e.keys()) {
					let e = W(t);
					e && e.markDirty();
				}
			}, e._pendingEditorState === null ? { tag: Mr } : void 0);
		}(this, r.map((e) => e.klass.getType())), () => {
			r.forEach((e) => e.transforms.delete(t));
		};
	}
	hasNode(e) {
		return this._nodes.has(e.getType());
	}
	hasNodes(e) {
		return e.every(this.hasNode.bind(this));
	}
	dispatchCommand(e, t) {
		return q(this, e, t);
	}
	getDecorators() {
		return this._decorators;
	}
	getRootElement() {
		return this._rootElement;
	}
	getKey() {
		return this._key;
	}
	setRootElement(e) {
		let t = this._rootElement;
		if (e !== t) {
			let n = Qo(this._config.theme, "root"), r = this._pendingEditorState || this._editorState;
			if (this._rootElement = e, $a(this, t, e, r, { preserveUpdateQueue: !0 }), t !== null && (this._config.disableEvents || Sr(t), n != null && t.classList.remove(...n)), e !== null) {
				let t = us(e), r = e.style;
				r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = t, this._dirtyType = 2, Re(this), this._updateTags.add(Mr), wa(this), this._config.disableEvents || function(e, t) {
					let n = e.ownerDocument;
					Zn.set(e, n);
					let r = Qn.get(n);
					r === void 0 && (r = {
						editors: /* @__PURE__ */ new Set(),
						hasShadowEditor: void 0
					}, Qn.set(n, r)), r.editors.add(t), r.hasShadowEditor = void 0, e.__lexicalEditor = t;
					let i = _r(e);
					i.push($n.register(n));
					for (let n = 0; n < Xn.length; n++) {
						let [r, a] = Xn[n], o = typeof a == "function" ? (e) => {
							xr(e) || (br(e), (t.isEditable() || r === "click") && a(e, t));
						} : (e) => {
							if (xr(e)) return;
							br(e);
							let n = t.isEditable();
							switch (r) {
								case "cut": return n && q(t, Rn, e);
								case "copy": return q(t, Ln, e);
								case "paste": return n && q(t, cn, e);
								case "dragstart": return n && q(t, Pn, e);
								case "dragover": return n && q(t, Fn, e);
								case "dragend": return n && q(t, In, e);
								case "focus": return n && q(t, Wn, e);
								case "blur": return n && q(t, Gn, e);
								case "drop": return n && q(t, Mn, e);
							}
						};
						i.push(Jn(e, r, o));
					}
				}(e, this), n != null && e.classList.add(...n);
			} else this._window = null, this._updateTags.add(Mr), wa(this);
			Ta("root", this, !1, e, t);
		}
	}
	getElementByKey(e) {
		return this._keyToDOMMap.get(e) || null;
	}
	getEditorState() {
		return this._editorState;
	}
	setEditorState(e, t) {
		e.isEmpty() && a(38);
		let n = e;
		n._readOnly && (n = Ia(e), n._selection = e._selection ? e._selection.clone() : null), Le(this);
		let r = this._pendingEditorState, i = t === void 0 ? null : t.tag;
		r === null || r.isEmpty() || (i != null && this._updateTags.add(i), wa(this)), this._pendingEditorState = n, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, this._slotsUsed = this._slotsUsed || e._slotsUsed, Aa(this, () => {
			if (i && this._updateTags.add(i), e._parsed) for (let [e, t] of n._nodeMap.entries()) z(t) ? this._dirtyElements.set(e, !0) : this._dirtyLeaves.add(e);
		}, { discrete: !this._updating || void 0 });
	}
	parseEditorState(e, t) {
		return function(e, t, n) {
			let r = La(), i = P, a = I, o = F, s = t._dirtyElements, c = t._dirtyLeaves, l = t._cloneNotNeeded, u = t._dirtyType;
			t._dirtyElements = /* @__PURE__ */ new Map(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._cloneNotNeeded = /* @__PURE__ */ new Set(), t._dirtyType = 0, P = r, I = !1, F = t, so(null);
			try {
				let i = t._nodes;
				Sa(e.root, i), n && n(), r._readOnly = !0, r._parsed = !0;
			} catch (e) {
				e instanceof Error && t._onError(e);
			} finally {
				t._dirtyElements = s, t._dirtyLeaves = c, t._cloneNotNeeded = l, t._dirtyType = u, P = i, I = a, F = o;
			}
			return r;
		}(typeof e == "string" ? JSON.parse(e) : e, this, t);
	}
	read(...e) {
		let [t, n] = e.length === 1 ? ["force-commit", e[0]] : e;
		return t === "force-commit" && wa(this), (t === "pending" ? this._pendingEditorState || this._editorState : this.getEditorState()).read(n, { editor: this });
	}
	update(e, t) {
		(function(e, t, n) {
			e._updating ? e._updates.push([t, n]) : ka(e, t, n);
		})(this, e, t);
	}
	focus(e, t = {}) {
		let n = this._rootElement;
		n !== null && (n.setAttribute("autocapitalize", "off"), Aa(this, () => {
			let r = N(), i = Io();
			r === null ? i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()) : r.dirty || G(r.clone()), ss("focus"), cs(() => {
				n.removeAttribute("autocapitalize"), e && e();
			});
		}), this._pendingEditorState === null && n.removeAttribute("autocapitalize"));
	}
	blur() {
		let e = this._rootElement;
		e !== null && e.blur();
		let t = bs(this._window);
		t !== null && t.removeAllRanges();
	}
	isEditable() {
		return this._editable;
	}
	setEditable(e) {
		this._editable !== e && (this._editable = e, Ta("editable", this, !0, e), this._slotsUsed && this.update(() => ha()));
	}
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
ao.version = Ce;
var oo = null;
function so(e) {
	oo = e;
}
var co = 1;
function lo(e, t) {
	let n = uo(e, t);
	return n === void 0 && a(30, t), n;
}
function uo(e, t) {
	return e._nodes.get(t);
}
var fo = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
	Promise.resolve().then(e);
};
function po(e, t) {
	let n = t === void 0 ? (() => {
		let t = e.getRootNode();
		return So(t) || Ss(t) ? Ps(t) : null;
	})() : t;
	if (!Z(n) || n.hasAttribute("data-lexical-slot")) return !1;
	let r = No(n), i = n.nodeName;
	return kr(r) && (i === "INPUT" || i === "TEXTAREA" || n.contentEditable === "true" && _o(n) == null);
}
function mo(e, t, n) {
	let r = e.getRootElement();
	if (!r) return !1;
	try {
		if (!t || !r.contains(t) || !r.contains(n)) return !1;
	} catch {
		return !1;
	}
	return go(t) === e && e.read("latest", () => !po(t));
}
function ho(e) {
	return e instanceof ao;
}
function go(e) {
	let t = e;
	for (; t != null;) {
		let e = _o(t);
		if (ho(e)) return e;
		t = as(t);
	}
	return null;
}
function _o(e) {
	return e ? e.__lexicalEditor : null;
}
function vo(e) {
	return ce.test(e) ? "rtl" : le.test(e) ? "ltr" : null;
}
function yo(e) {
	return li(e) || e.isToken();
}
function bo(e) {
	return yo(e) || e.isSegmented();
}
function xo(e) {
	return Rs(e) && e.nodeType === 3;
}
function So(e) {
	return Rs(e) && e.nodeType === 9;
}
function Co(e) {
	let t = e;
	for (; t != null;) {
		if (xo(t)) return t;
		t = t.firstChild;
	}
	return null;
}
function wo(e, t, n) {
	let r = S[t];
	if (n !== null && (e & r) === (n & r)) return e;
	let i = e ^ r;
	return t === "subscript" ? i &= ~S.superscript : t === "superscript" ? i &= ~S.subscript : t === "lowercase" ? (i &= ~S.uppercase, i &= ~S.capitalize) : t === "uppercase" ? (i &= ~S.lowercase, i &= ~S.capitalize) : t === "capitalize" && (i &= ~S.lowercase, i &= ~S.uppercase), i;
}
function To(e) {
	return j(e) || Ga(e) || B(e);
}
function Eo(e, t) {
	let n = function() {
		let e = oo;
		return oo = null, e;
	}();
	if ((t ||= n && n.__key) != null) return void (e.__key = t);
	L(), fa();
	let r = R(), i = pa(), a = "" + co++;
	i._nodeMap.set(a, e), z(e) ? r._dirtyElements.set(a, !0) : r._dirtyLeaves.add(a), r._cloneNotNeeded.add(a), r._dirtyType === 0 && (r._dirtyType = 1), e.__key = a;
}
function Do(e) {
	Q(e) !== null && a(380, e.__key, String(Q(e)));
	let t = e.getParent();
	if (t !== null) {
		let n = e.getWritable(), r = t.getWritable(), i = e.getPreviousSibling(), a = e.getNextSibling(), o = a === null ? null : a.__key, s = i === null ? null : i.__key, c = i === null ? null : i.getWritable(), l = a === null ? null : a.getWritable();
		i === null && (r.__first = o), a === null && (r.__last = s), c !== null && (c.__next = o), l !== null && (l.__prev = s), n.__prev = null, n.__next = null, n.__parent = null, r.__size--;
	}
}
function Oo(e) {
	fa(), Er(e) && a(323, e.__key, e.__type);
	let t = e.getLatest(), n = t.__parent === null ? vc(t) ? t.__slotHost : null : t.__parent, r = pa(), i = R(), o = r._nodeMap, s = i._dirtyElements;
	n !== null && function(e, t, n) {
		let r = e;
		for (; r !== null;) {
			if (n.has(r)) return;
			let e = t.get(r);
			if (e === void 0) break;
			n.set(r, !1), r = e.__parent === null ? vc(e) ? e.__slotHost : null : e.__parent;
		}
	}(n, o, s);
	let c = t.__key;
	i._dirtyType === 0 && (i._dirtyType = 1), z(e) ? s.set(c, !0) : i._dirtyLeaves.add(c);
}
function U(e) {
	L();
	let t = R(), n = t._compositionKey;
	if (e !== n) {
		if (t._compositionKey = e, n !== null) {
			let e = W(n);
			e !== null && e.getWritable();
		}
		if (e !== null) {
			let t = W(e);
			t !== null && t.getWritable();
		}
	}
}
function ko() {
	return da() ? null : R()._compositionKey;
}
function W(e, t) {
	let n = (t || pa())._nodeMap.get(e);
	return n === void 0 ? null : n;
}
function Ao(e, t) {
	let n = Mo(e, R());
	return n === void 0 ? null : W(n, t);
}
function jo(e, t, n) {
	e[`__lexicalKey_${t._key}`] = n;
}
function Mo(e, t) {
	return e[`__lexicalKey_${t._key}`];
}
function No(e, t) {
	let n = e;
	for (; n != null;) {
		let e = Ao(n, t);
		if (e !== null) return e;
		n = as(n);
	}
	return null;
}
function Po(e) {
	let t = e._decorators, n = Object.assign({}, t);
	return e._pendingDecorators = n, n;
}
function Fo(e) {
	return e.read(() => Io().getTextContent());
}
function Io() {
	return pa()._nodeMap.get("root");
}
function G(e) {
	L();
	let t = pa();
	e !== null && (e.dirty = !0, e.setCachedNodes(null), M(e) && R()._slotsUsed && Fi(e)), t._selection = e;
}
function Lo() {
	L(), Le(R());
}
function Ro(e) {
	let t = function(e, t) {
		let n = e;
		for (; n != null;) {
			let e = Mo(n, t);
			if (e !== void 0) return e;
			n = as(n);
		}
		return null;
	}(e, R());
	return t === null ? null : W(t);
}
function zo(e) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Bo(e) {
	let t = [];
	for (let n = e; n !== null; n = n._parentEditor) t.push(n);
	return t;
}
function Vo() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Ho(e) {
	return xo(e) ? e.nodeValue : null;
}
function Uo(e, t, n) {
	let r = bs(J(t));
	if (r === null) return;
	let i = ks(r, t._rootElement), a = i.anchorNode, { anchorOffset: o, focusOffset: s } = i;
	if (a !== null) {
		let t = Ho(a), r = No(a);
		if (t !== null && j(r)) {
			if ((t === ae || t === se) && n) {
				let e = n.length;
				t = n, o = e, s = e;
			}
			t !== null && Wo(r, t, o, s, e);
		}
	}
}
function Wo(e, t, n, r, i) {
	let a = e;
	if (a.isAttached() && (i || !a.isDirty())) {
		let o = a.isComposing();
		if (a.isToken() && o) return;
		let s = t;
		if ((o || i) && (t.endsWith(ae) && (s = t.slice(0, -ae.length)), i)) {
			let e = se, t;
			for (; (t = s.indexOf(e)) !== -1;) s = s.slice(0, t) + s.slice(t + e.length), n !== null && n > t && (n = Math.max(t, n - e.length)), r !== null && r > t && (r = Math.max(t, r - e.length));
		}
		let c = a.getTextContent();
		if (i || s !== c) {
			let t = N();
			if (s === "") {
				if (U(null), m || f || _) a.remove();
				else {
					let e = R();
					Go(a, "", t), setTimeout(() => {
						e.update(() => {
							a.isAttached() && a.getTextContent() === "" && a.remove();
						});
					}, 20);
				}
				return;
			}
			let i = a.getParent(), c = Ui(), l = a.getTextContentSize(), u = ko(), d = a.getKey();
			if (a.isToken() && !o || u !== null && d === u && !o || M(c) && (i !== null && !i.canInsertTextBefore() && c.anchor.offset === 0 || c.anchor.key === e.__key && c.anchor.offset === 0 && !a.canInsertTextBefore() && !o || c.focus.key === e.__key && c.focus.offset === l && !a.canInsertTextAfter() && !o)) return void a.markDirty();
			if (!M(t) || n === null || r === null) return void Go(a, s, t);
			if (t.setTextNodeRange(a, n, a, r), a.isSegmented()) {
				let e = A(a.getTextContent());
				a.replace(e), a = e;
			}
			Go(a, s, t);
		}
	}
}
function Go(e, t, n) {
	if (e.setTextContent(t), M(n)) {
		let t = e.getKey(), r = !1;
		for (let i of ["anchor", "focus"]) {
			let a = n[i];
			a.type === "text" && a.key === t && (a.offset = Qc(e, a.offset, "clamp"), r = !0);
		}
		r && (n._cachedNodes = null, n._cachedIsBackward = null);
	}
}
function Ko(e, t, n) {
	let r = t[n] || !1;
	return r === "any" || r === e[n];
}
function qo(e, t) {
	return Ko(e, t, "altKey") && Ko(e, t, "ctrlKey") && Ko(e, t, "shiftKey") && Ko(e, t, "metaKey");
}
function K(e, t, n) {
	if (!qo(e, n)) return !1;
	if (e.key.toLowerCase() === t.toLowerCase()) return !0;
	if (t.length > 1 || e.key.length === 1 && e.key.charCodeAt(0) <= 127) return !1;
	if (e.code.startsWith("Digit") && /^\d$/.test(t)) return e.code === `Digit${t}`;
	let r = "Key" + t.toUpperCase();
	return e.code === r;
}
var Jo = {
	ctrlKey: !l,
	metaKey: l
}, Yo = {
	altKey: l,
	ctrlKey: !l
};
function Xo(e) {
	return e.key === "Backspace";
}
function Zo(e) {
	let t = Io();
	if (M(e)) {
		let t = e.anchor, n = e.focus, r = t.getNode();
		if (V(r)) return t.set(r.getKey(), 0, "element"), n.set(r.getKey(), r.getChildrenSize(), "element"), rt(e), e;
		let i = r.getTopLevelElementOrThrow(), a = i.getParent();
		if (a === null) return z(i) && (t.set(i.getKey(), 0, "element"), n.set(i.getKey(), i.getChildrenSize(), "element"), rt(e)), e;
		let o = a;
		return t.set(o.getKey(), 0, "element"), n.set(o.getKey(), o.getChildrenSize(), "element"), rt(e), e;
	}
	{
		let e = t.select(0, t.getChildrenSize());
		return G(rt(e)), e;
	}
}
function Qo(e, t) {
	e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
	let n = e.__lexicalClassNameCache, r = n[t];
	if (r !== void 0) return r;
	let i = e[t];
	if (typeof i == "string") {
		let e = Rl(i);
		return n[t] = e, e;
	}
	return i;
}
function $o(e, t, n, r, i) {
	if (n.size === 0) return;
	let o = r.__type, s = r.__key, c = t.get(o);
	c === void 0 && a(33, o);
	let l = c.klass, u = e.get(l);
	u === void 0 && (u = /* @__PURE__ */ new Map(), e.set(l, u));
	let d = u.get(s), f = d === "destroyed" && i === "created";
	(d === void 0 || f) && u.set(s, f ? "updated" : i);
}
function es(e) {
	let t = e.getType(), n = pa();
	if (n._readOnly) {
		let e = Qs(n).get(t);
		return e ? Array.from(e.values()) : [];
	}
	let r = n._nodeMap, i = [];
	for (let [, n] of r) n instanceof e && n.__type === t && n.isAttached() && i.push(n);
	return i;
}
function ts(e, t, n) {
	let r = e.getParent(), i = n, a = e;
	return r !== null && (t && n === 0 ? (i = a.getIndexWithinParent(), a = r) : t || n !== a.getChildrenSize() || (i = a.getIndexWithinParent() + 1, a = r)), a.getChildAtIndex(t ? i - 1 : i);
}
function ns(e, t) {
	let n = e.offset;
	if (e.type === "element") return ts(e.getNode(), t, n);
	{
		let r = e.getNode();
		if (t && n === 0 || !t && n === r.getTextContentSize()) {
			let e = t ? r.getPreviousSibling() : r.getNextSibling();
			return e === null ? ts(r.getParentOrThrow(), t, r.getIndexWithinParent() + +!t) : e;
		}
	}
	return null;
}
function rs(e) {
	let t = J(e).event, n = t && t.inputType;
	return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function q(e, t, n) {
	return Ea(e, t, n, e);
}
function is(e, t) {
	let n = e._keyToDOMMap.get(t);
	return n === void 0 && a(75, t), n;
}
function as(e) {
	let t = e.assignedSlot || e.parentElement;
	if (t !== null) return t;
	let n = e.parentNode;
	return Ss(n) ? n.host : null;
}
function os(e) {
	return So(e) ? e : Z(e) ? e.ownerDocument : null;
}
function ss(e) {
	L(), R()._updateTags.add(e);
}
function cs(e) {
	L(), R()._deferred.push(e);
}
function ls(e, t) {
	let n = e.getParent();
	for (; n !== null;) {
		if (n.is(t)) return !0;
		n = n.getParent();
	}
	return !1;
}
function us(e) {
	let t = os(e);
	return t ? t.defaultView : null;
}
function J(e) {
	let t = e._window;
	return t === null && a(78), t;
}
function ds(e) {
	return z(e) && e.isInline() || B(e) && e.isInline();
}
function fs(e) {
	let t = e.getLatest();
	for (; t !== null;) {
		if (Q(t) !== null && z(t)) return t;
		let e = t.getParentOrThrow();
		if (Y(e)) return e;
		t = e;
	}
	return t;
}
function ps(e) {
	return z(e) && e.isShadowRoot();
}
function Y(e) {
	return V(e) || ps(e);
}
function ms(e, t = !1) {
	let n = e.constructor.clone(e);
	return Eo(n, null), n.afterCloneFrom(e), t || n.resetOnCopyNodeFrom(e), n;
}
function hs(e) {
	let t = R(), n = e.getType(), r = uo(t, n);
	r === void 0 && a(200, e.constructor.name, n);
	let { replace: i, replaceWithKlass: o } = r;
	if (i !== null) {
		let t = i(e), r = t.constructor;
		return o === null ? t instanceof e.constructor && r !== e.constructor || a(202, r.name, r.getType(), e.constructor.name, n) : t instanceof o || a(201, o.name, o.getType(), r.name, r.getType(), e.constructor.name, n), t.__key === e.__key && a(203, e.constructor.name, n, r.name, r.getType()), t;
	}
	return e;
}
function gs(e, t) {
	!V(e.getParent()) || z(t) || B(t) || a(99);
}
function _s(e) {
	let t = W(e);
	return t === null && a(63, e), t;
}
function vs(e) {
	if (!e || e.isInline()) return !1;
	if (B(e)) return !0;
	if (z(e)) {
		if (e.isShadowRoot()) {
			let t = e.getParent();
			return !(z(t) && t.isShadowRoot());
		}
		return !e.canBeEmpty();
	}
	return !1;
}
function ys(e, t, n) {
	n.style.removeProperty("caret-color"), t._blockCursorElement = null;
	let r = e.parentElement;
	r !== null && r.removeChild(e);
}
function bs(e) {
	return s ? (e || window).getSelection() : null;
}
function xs(e) {
	let t = us(e);
	return t ? t.getSelection() : null;
}
function Ss(e) {
	return zs(e) && "host" in e;
}
var Cs = [];
function ws(e) {
	let t = e.getRootNode();
	if (t === e || !Ss(t)) return Cs;
	let n = [t], r = t.host;
	for (;;) {
		let e = r.getRootNode();
		if (e === r || !Ss(e)) break;
		n.push(e), r = e.host;
	}
	return n;
}
function* Ts(e) {
	let t = [e], n;
	for (; n = t.pop();) {
		yield* n.querySelectorAll("[data-lexical-editor=\"true\"]");
		let e = (So(n) ? n : n.ownerDocument).createTreeWalker(n, NodeFilter.SHOW_ELEMENT), r;
		for (; r = e.nextNode();) r.shadowRoot && t.push(r.shadowRoot);
	}
}
function Es(e) {
	return e === null ? document : e.ownerDocument;
}
function X() {
	let e = _a();
	return Es(e === null ? null : e._rootElement);
}
function Ds(e, t) {
	if (t === null || typeof e.getComposedRanges != "function") return null;
	let n = ws(t);
	if (n.length === 0) return null;
	let r = e.getComposedRanges;
	try {
		let t = r.call(e, { shadowRoots: n })[0];
		if (t !== void 0) return t;
	} catch {}
	try {
		let t = r.apply(e, n)[0];
		if (t !== void 0) return t;
	} catch {}
	return null;
}
function Os(e, t) {
	let n = Ds(e, t);
	if (n !== null) {
		let e = As(n);
		if (e !== null) return e;
	}
	return e.rangeCount > 0 ? e.getRangeAt(0) : null;
}
function ks(e, t) {
	let n = Ds(e, t);
	return n === null ? e : js(n, Ms(e));
}
function As(e) {
	let t = e.startContainer.ownerDocument;
	if (t === null) return null;
	let n = t.createRange();
	try {
		return n.setStart(e.startContainer, e.startOffset), n.setEnd(e.endContainer, e.endOffset), n;
	} catch {
		return null;
	}
}
function js(e, t) {
	let { startContainer: n, startOffset: r, endContainer: i, endOffset: a } = e;
	return t === "backward" ? {
		anchorNode: i,
		anchorOffset: a,
		direction: t,
		focusNode: n,
		focusOffset: r
	} : {
		anchorNode: n,
		anchorOffset: r,
		direction: t,
		focusNode: i,
		focusOffset: a
	};
}
function Ms(e) {
	return e.direction;
}
function Ns(e) {
	let t = e.getRootNode();
	return So(t) || Ss(t) ? t.activeElement : null;
}
function Ps(e) {
	let t = e.activeElement;
	for (; t !== null && t.shadowRoot !== null;) {
		let e = t.shadowRoot.activeElement;
		if (e === null) break;
		t = e;
	}
	return t;
}
function Fs(e) {
	let t = e.target;
	if (t !== null && Z(t) && t.shadowRoot !== null && typeof e.composedPath == "function") {
		let t = e.composedPath();
		if (t.length > 0) return t[0];
	}
	return t;
}
function Is(e) {
	return Z(e) && e.tagName === "A";
}
function Ls(e) {
	return Z(e) && e.tagName === "TR";
}
function Z(e) {
	return Rs(e) && e.nodeType === 1;
}
function Rs(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function zs(e) {
	return Rs(e) && e.nodeType === 11;
}
var Bs = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
function Vs(e) {
	return !(!Z(e) || !e.style.display.startsWith("inline")) || Bs.test(e.nodeName);
}
var Hs = /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
function Us(e) {
	return (!Z(e) || !e.style.display.startsWith("inline")) && Hs.test(e.nodeName);
}
function Ws(e) {
	if (B(e) && !e.isInline()) return !0;
	if (!z(e) || Y(e)) return !1;
	let t = e.getFirstChild(), n = t === null || Ga(t) || j(t) || t.isInline();
	return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
function Gs() {
	return R();
}
function Ks(e = Gs()) {
	return e._config.dom || to;
}
function qs(e, t, n = Gs()) {
	let r = Ks(n).$getDOMSlot(e, t, n);
	return z(e) && (Js(r) || a(344, e.getKey(), e.getType())), r;
}
function Js(e) {
	return e instanceof be;
}
function Ys(e, t, n = Gs()) {
	return Co(qs(e, t, n).element);
}
var Xs = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new Map();
function Qs(e) {
	if (!e._readOnly && e.isEmpty()) return Zs;
	e._readOnly || a(192);
	let t = Xs.get(e);
	return t || (t = function(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of e._nodeMap) {
			let e = r.__type, i = t.get(e);
			i || (i = /* @__PURE__ */ new Map(), t.set(e, i)), i.set(n, r);
		}
		return t;
	}(e), Xs.set(e, t)), t;
}
function $s(e) {
	let t = e.constructor.clone(e);
	return t.afterCloneFrom(e), t;
}
function ec(e) {
	return (t = $s(e))[Tr] = !0, t;
	var t;
}
function tc(e, t) {
	let n = e.getAttribute("data-lexical-indent");
	if (n !== null) {
		let e = parseInt(n, 10);
		if (Number.isFinite(e) && e >= 0) return void t.setIndent(e);
	}
	let r = parseInt(e.style.paddingInlineStart, 10) || 0, i = Math.round(r / 40);
	t.setIndent(i);
}
function nc(e, t) {
	let n = t.getAttribute("dir");
	return n === "ltr" || n === "rtl" ? e.setDirection(n) : e;
}
function rc(e, t) {
	let n = t.style.textAlign;
	return n && n in de ? e.setFormat(n) : e;
}
function ic(e, t) {
	e.__lexicalUnmanaged = !0, t && t.captureSelection !== void 0 && (e.__lexicalCapturedSelection = t.captureSelection);
}
function ac(e) {
	return !0 === e.__lexicalUnmanaged;
}
function oc(e, t = Gs()) {
	let n = t.isEditable();
	e.contentEditable = n ? "true" : "false", n ? e.__lexicalEditor = t : delete e.__lexicalEditor;
}
function sc(e, t) {
	let n = e;
	for (; n != null;) {
		if (!0 === n.__lexicalCapturedSelection) return !0;
		if (Z(n) && n.hasAttribute("data-lexical-slot") || Mo(n, t) !== void 0) return !1;
		n = as(n);
	}
	return !1;
}
function cc(e, t) {
	return function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}(e, t) && e[t] !== Or[t];
}
var lc = /* @__PURE__ */ new WeakMap();
function uc(e) {
	let t = lc.get(e);
	if (t) return t;
	let n = e.prototype != null && he in e.prototype ? e.prototype[he]() : void 0, r = function(e) {
		if (!(e === Or || e.prototype instanceof Or)) {
			let t = "<unknown>", n = "<unknown>";
			try {
				t = e.getType();
			} catch {}
			try {
				ao.version && (n = JSON.parse(ao.version));
			} catch {}
			a(290, e.name, t, n);
		}
		return e === Pa || e === Ma || e === Or;
	}(e), i = !r && cc(e, "getType") ? e.getType() : void 0, o, s = i;
	if (n) if (i) o = n[i];
	else {
		for (let [e, t] of Object.entries(n)) s = e, o = t;
		if (!o) for (let e of Object.getOwnPropertySymbols(n)) {
			let t = n[e];
			if (t) {
				o = t;
				break;
			}
		}
	}
	if (!r && s && (cc(e, "getType") || (e.getType = () => s), cc(e, "clone") || (e.clone = (t) => (so(t), new e())), cc(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((t) => new e().updateFromJSON(t))), !cc(e, "importDOM") && o)) {
		let { importDOM: t } = o;
		t && (e.importDOM = () => t);
	}
	let c = {
		klass: e,
		ownNodeConfig: o,
		ownNodeType: s
	};
	return lc.set(e, c), c;
}
function* dc(e) {
	for (let t = e; t && (t === Or || kr(t.prototype));) {
		let e = uc(t);
		yield e, t = e.ownNodeConfig && e.ownNodeConfig.extends || hc(t);
	}
}
function fc(e) {
	let t = Gs();
	return L(), new (t.resolveRegisteredNodeAfterReplacements(t.getRegisteredNode(e))).klass();
}
var pc = (e, t) => {
	let n = e;
	for (; n != null && !V(n);) {
		if (t(n)) return n;
		n = n.getParent();
	}
	return null;
};
function mc(e, t) {
	let n = [], r = e.__first;
	for (; r !== null;) {
		let e = t === null ? W(r) : t.get(r);
		e ?? a(174), n.push(r), r = e.__next;
	}
	return n;
}
function hc(e) {
	let t = Object.getPrototypeOf(e);
	if (typeof t == "function" && t !== Function.prototype) return t;
	let n = e.prototype && Object.getPrototypeOf(e.prototype);
	return n ? n.constructor : null;
}
var gc = /* @__PURE__ */ new Map();
function _c(e) {
	return z(e) || B(e);
}
function vc(e) {
	return z(e) || B(e);
}
function Q(e) {
	let t = e.getLatest();
	return vc(t) ? t.__slotHost : null;
}
function yc(e) {
	let t = Q(e);
	if (t === null) return null;
	let n = W(t);
	return z(n) || B(n) || a(370), n;
}
function bc(e) {
	let t = yc(e);
	if (t === null) return null;
	let n = e.getLatest().__key;
	for (let [e, r] of Sc(t)) if (r === n) return e;
	return null;
}
function xc(e) {
	let t = e.getLatest();
	for (; t !== null;) {
		if (Q(t) !== null) return t;
		t = t.getParent();
	}
	return null;
}
function Sc(e) {
	let t = e.getLatest();
	return _c(t) && t.__slots !== null ? t.__slots : gc;
}
function Cc(e) {
	return Array.from(Sc(e).keys());
}
function wc(e, t) {
	let n = Sc(e).get(t);
	return n === void 0 ? null : W(n);
}
var Tc = [
	"__proto__",
	"constructor",
	"prototype"
], Ec = Symbol("slotMapOwner");
function Dc(e) {
	let t = e.__slots;
	return t !== null && t[Ec] === e || (t = new Map(t), t[Ec] = e, e.__slots = t), t;
}
var Oc = /* @__PURE__ */ new WeakMap(), kc = [];
function Ac(e) {
	for (let { ownNodeConfig: t } of dc(e)) {
		let e = t && t.slots;
		if (e) return e;
	}
	return kc;
}
function jc(e) {
	let t = "";
	for (let n of Cc(e)) {
		let r = wc(e, n);
		r !== null && (t += r.getTextContent());
	}
	return t;
}
function Mc(e, t, n) {
	let r = n.get(e), i = n.get(t);
	return r === void 0 ? i === void 0 ? e < t ? -1 : +(e > t) : 1 : i === void 0 ? -1 : r - i;
}
function Nc(e) {
	let t = e.__slots;
	if (t === null || t.size < 2) return;
	let n = function(e) {
		let t = Oc.get(e);
		if (t === void 0) {
			let n = Ac(e), r = /* @__PURE__ */ new Map();
			for (let t of n) Tc.includes(t) && a(371, e.name, t), r.has(t) && a(372, e.name, t), r.set(t, r.size);
			t = r, Oc.set(e, t);
		}
		return t;
	}(e.constructor), r = null, i = !0;
	for (let e of t.keys()) {
		if (r !== null && Mc(r, e, n) > 0) {
			i = !1;
			break;
		}
		r = e;
	}
	if (i) return;
	let o = Array.from(t).sort(([e], [t]) => Mc(e, t, n));
	t.clear();
	for (let [e, n] of o) t.set(e, n);
}
function Pc(e, t, n) {
	t !== "__proto__" && t !== "constructor" && t !== "prototype" || a(373, t);
	let r = e.getLatest();
	if (r.__slots !== null && r.__slots.get(t) === n.getLatest().__key) return r;
	(!z(n) && !B(n) || n.isInline()) && a(374, n.__key);
	let i = e.getWritable(), o = Dc(i), s = o.get(t);
	s !== void 0 && Ic(s);
	let c = n.getWritable(), l = yc(c);
	if (l !== null) {
		let e = bc(c);
		e !== null && Dc(l.getWritable()).delete(e), c.__slotHost = null;
	}
	return Do(c), c.__slotHost = i.__key, o.set(t, c.__key), Nc(i), function() {
		let e = Gs();
		e._slotsUsed = !0, e._pendingEditorState && (e._pendingEditorState._slotsUsed = !0);
	}(), i;
}
function Fc(e, t) {
	let n = e.getWritable();
	if (n.__slots === null) return n;
	let r = n.__slots.get(t);
	return r !== void 0 && (Ic(r), Dc(n).delete(t)), n;
}
function Ic(e) {
	let t = W(e);
	if (t === null) return;
	let n = t.getWritable();
	vc(n) || a(377, e), n.__slotHost = null, n.remove();
}
var Lc = {
	next: "previous",
	previous: "next"
}, Rc = class {
	origin;
	constructor(e) {
		this.origin = e;
	}
	[Symbol.iterator]() {
		return cl({
			hasNext: Kc,
			initial: this.getAdjacentCaret(),
			map: (e) => e,
			step: (e) => e.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return $(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return $(this.origin, this.direction);
	}
	remove() {
		let e = this.getNodeAtCaret();
		return e && e.remove(), this;
	}
	replaceOrInsert(e, t) {
		let n = this.getNodeAtCaret();
		return e.is(this.origin) || e.is(n) || (n === null ? this.insert(e) : n.replace(e, t)), this;
	}
	splice(e, t, n = "next") {
		let r = n === this.direction ? t : Array.from(t).reverse(), i = this, o = this.getParentAtCaret(), s = /* @__PURE__ */ new Map();
		for (let t = i.getAdjacentCaret(); t !== null && s.size < e; t = t.getAdjacentCaret()) {
			let e = t.origin.getWritable();
			s.set(e.getKey(), e);
		}
		for (let e of r) {
			if (s.size > 0) {
				let t = i.getNodeAtCaret();
				if (t) {
					if (s.delete(t.getKey()), s.delete(e.getKey()), !(t.is(e) || i.origin.is(e))) {
						let n = e.getParent();
						n && n.is(o) && e.remove(), t.replace(e);
					}
				} else t === null && a(263, Array.from(s).join(" "));
			} else i.insert(e);
			i = $(e, this.direction);
		}
		for (let e of s.values()) e.remove();
		return this;
	}
}, zc = class e extends Rc {
	type = "child";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : el(e, this.direction);
	}
	getParentCaret(e = "root") {
		return $(Hc(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = Vc(this.direction);
		return $(this.getNodeAtCaret(), e) || el(this.origin, e);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSamePointCaret(e) {
		return this.isSameNodeCaret(e);
	}
}, Bc = {
	root: V,
	shadowRoot: Y
};
function Vc(e) {
	return Lc[e];
}
function Hc(e, t = "root") {
	return e === null || Bc[t](e) ? null : Q(e) === null ? e : null;
}
var Uc = class e extends Rc {
	type = "sibling";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : $(e, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return z(this.origin) ? el(this.origin, this.direction) : null;
	}
	getParentCaret(e = "root") {
		return $(Hc(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = Vc(this.direction);
		return $(this.getNodeAtCaret(), e) || el(this.origin.getParentOrThrow(), e);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSameNodeCaret(t) {
		return (t instanceof e || t instanceof Wc) && this.direction === t.direction && this.origin.is(t.origin);
	}
}, Wc = class e extends Rc {
	type = "text";
	offset;
	constructor(e, t) {
		super(e), this.offset = t;
	}
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : Zc(e, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(e = "root") {
		return $(Hc(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		return Zc(this.origin, Vc(this.direction), this.offset);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
	}
	isSameNodeCaret(t) {
		return (t instanceof Uc || t instanceof e) && this.direction === t.direction && this.origin.is(t.origin);
	}
	getSiblingCaret() {
		return $(this.origin, this.direction);
	}
};
function Gc(e) {
	return e instanceof Wc;
}
function Kc(e) {
	return e instanceof Uc;
}
function qc(e) {
	return e instanceof zc;
}
var Jc = {
	next: class extends Wc {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends Wc {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, Yc = {
	next: class extends Uc {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends Uc {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, Xc = {
	next: class extends zc {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getFirstChild();
		}
		insert(e) {
			return this.origin.splice(0, 0, [e]), this;
		}
	},
	previous: class extends zc {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getLastChild();
		}
		insert(e) {
			return this.origin.splice(this.origin.getChildrenSize(), 0, [e]), this;
		}
	}
};
function $(e, t) {
	return e ? new Yc[t](e) : null;
}
function Zc(e, t, n) {
	return e ? new Jc[t](e, Qc(e, n)) : null;
}
function Qc(e, t, n = "error") {
	let r = e.getTextContentSize(), i = t === "next" ? r : t === "previous" ? 0 : t;
	return (i < 0 || i > r) && (n !== "clamp" && o(284, String(t), String(r), e.getKey()), i = i < 0 ? 0 : r), i;
}
function $c(e, t) {
	return new il(e, t);
}
function el(e, t) {
	return z(e) ? new Xc[t](e) : null;
}
function tl(e) {
	return e && e.getChildCaret() || e;
}
function nl(e) {
	return e && tl(e.getAdjacentCaret());
}
var rl = class e {
	type = "node-caret-range";
	direction;
	anchor;
	focus;
	constructor(e, t, n) {
		this.anchor = e, this.focus = t, this.direction = n;
	}
	getLatest() {
		let t = this.anchor.getLatest(), n = this.focus.getLatest();
		return t === this.anchor && n === this.focus ? this : new e(t, n, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		let e = (e) => {
			let t = this[e].getLatest();
			return Gc(t) ? function(e, t) {
				let { direction: n, origin: r } = e;
				return $c(e, Qc(r, t === "focus" ? Vc(n) : n) - e.offset);
			}(t, e) : null;
		}, t = e("anchor"), n = e("focus");
		if (t && n) {
			let { caret: e } = t, { caret: r } = n;
			if (e.isSameNodeCaret(r)) return [$c(e, r.offset - e.offset), null];
		}
		return [t, n];
	}
	iterNodeCarets(e = "root") {
		let t = Gc(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), n = this.focus.getLatest(), r = Gc(n), i = (t) => t.isSameNodeCaret(n) ? null : nl(t) || t.getParentCaret(e);
		return cl({
			hasNext: (e) => e !== null && !(r && n.isSameNodeCaret(e)),
			initial: t.isSameNodeCaret(n) ? null : i(t),
			map: (e) => e,
			step: i
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
}, il = class {
	type = "slice";
	caret;
	distance;
	constructor(e, t) {
		this.caret = e, this.distance = t;
	}
	getSliceIndices() {
		let { distance: e, caret: { offset: t } } = this, n = t + e;
		return n < t ? [n, t] : [t, n];
	}
	getTextContent() {
		let [e, t] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(e, t);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		let { caret: { origin: e, direction: t } } = this, [n, r] = this.getSliceIndices(), i = e.getTextContent();
		return Zc(e.setTextContent(i.slice(0, n) + i.slice(r)), t, n);
	}
};
function al(e) {
	return sl(e, $(Io(), e.direction));
}
function ol(e) {
	return sl(e, e);
}
function sl(e, t) {
	return e.direction !== t.direction && a(265), new rl(e, t, e.direction);
}
function cl(e) {
	let { initial: t, hasNext: n, step: r, map: i } = e, a = t;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!n(a)) return {
				done: !0,
				value: void 0
			};
			let e = {
				done: !1,
				value: i(a)
			};
			return a = r(a), e;
		}
	};
}
function ll(e, t) {
	let n = pl(e.origin, t.origin);
	switch (n === null && a(275, e.origin.getKey(), t.origin.getKey()), n.type) {
		case "same": {
			let n = e.type === "text", r = t.type === "text";
			return n && r ? function(e, t) {
				return Math.sign(e - t);
			}(e.offset, t.offset) : e.type === t.type ? 0 : n ? -1 : r ? 1 : e.type === "child" ? -1 : 1;
		}
		case "ancestor": return e.type === "child" ? -1 : 1;
		case "descendant": return t.type === "child" ? 1 : -1;
		case "branch": return ul(n);
	}
}
function ul(e) {
	let { a: t, b: n } = e, r = t.__key, i = n.__key, a = t, o = n;
	for (; a && o; a = a.getNextSibling(), o = o.getNextSibling()) {
		if (a.__key === i) return -1;
		if (o.__key === r) return 1;
	}
	return a === null ? 1 : -1;
}
function dl(e, t) {
	return t.is(e);
}
function fl(e) {
	return z(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function pl(e, t) {
	if (e.is(t)) return {
		commonAncestor: e,
		type: "same"
	};
	let n = /* @__PURE__ */ new Map();
	for (let [t, r] = fl(e); t; r = t, t = t.getParent()) n.set(t, r);
	for (let [r, i] = fl(t); r; i = r, r = r.getParent()) {
		let o = n.get(r);
		if (o !== void 0) return o === null ? (dl(e, r) || a(276), {
			commonAncestor: r,
			type: "ancestor"
		}) : i === null ? (dl(t, r) || a(277), {
			commonAncestor: r,
			type: "descendant"
		}) : ((z(o) || dl(e, o)) && (z(i) || dl(t, i)) && r.is(o.getParent()) && r.is(i.getParent()) || a(278), {
			a: o,
			b: i,
			commonAncestor: r,
			type: "branch"
		});
	}
	return null;
}
function ml(e, t) {
	let { type: n, key: r, offset: i } = e, o = _s(e.key);
	return n === "text" ? (j(o) || a(266, o.getType(), r), Zc(o, t, i)) : (z(o) || a(267, o.getType(), r), Dl(o, e.offset, t));
}
function hl(e, t) {
	let { origin: n, direction: r } = t, i = r === "next";
	Gc(t) ? e.set(n.getKey(), t.offset, "text") : Kc(t) ? j(n) ? e.set(n.getKey(), Qc(n, r), "text") : e.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent() + +!!i, "element") : (qc(t) && z(n) || a(268), e.set(n.getKey(), i ? 0 : n.getChildrenSize(), "element"));
}
function gl(e) {
	let t = N(), n = M(t) ? t : zi();
	return _l(n, e), G(n), n;
}
function _l(e, t) {
	hl(e.anchor, t.anchor), hl(e.focus, t.focus);
}
function vl(e) {
	let { anchor: t, focus: n } = e, r = ml(t, "next"), i = ml(n, "next"), a = ll(r, i) <= 0 ? "next" : "previous";
	return sl(Tl(r, a), Tl(i, a));
}
function yl(e) {
	let { direction: t, origin: n } = e, r = $(n, Vc(t)).getNodeAtCaret();
	return r ? $(r, t) : el(n.getParentOrThrow(), t);
}
function bl(e, t = "root") {
	let n = [e];
	for (let r = qc(e) ? e.getParentCaret(t) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(t)) n.push(yl(r));
	return n;
}
function xl(e) {
	return !!e && e.origin.isAttached();
}
function Sl(e, t = "removeEmptySlices") {
	if (e.isCollapsed()) return e;
	let n = "root", r = "next", i = t, o = El(e, r), s = bl(o.anchor, n), c = bl(o.focus.getFlipped(), n), l = /* @__PURE__ */ new Set(), u = [];
	for (let e of o.iterNodeCarets(n)) if (qc(e)) l.add(e.origin.getKey());
	else if (Kc(e)) {
		let { origin: t } = e;
		z(t) && !l.has(t.getKey()) || u.push(t);
	}
	for (let e of u) e.remove();
	for (let e of o.getTextSlices()) {
		if (!e) continue;
		let { origin: t } = e.caret, n = t.getTextContentSize(), a = yl($(t, r)), o = t.getMode();
		if (Math.abs(e.distance) === n && i === "removeEmptySlices" || o === "token" && e.distance !== 0) a.remove();
		else if (e.distance !== 0) {
			i = "removeEmptySlices";
			let t = e.removeTextSlice(), n = e.caret.origin;
			if (o === "segmented") {
				let e = t.origin, n = A(e.getTextContent()).setStyle(e.getStyle()).setFormat(e.getFormat());
				a.replaceOrInsert(n), t = Zc(n, r, t.offset);
			}
			n.is(s[0].origin) && (s[0] = t), n.is(c[0].origin) && (c[0] = t.getFlipped());
		}
	}
	let d, f;
	for (let e of s) if (xl(e)) {
		d = Cl(e);
		break;
	}
	for (let e of c) if (xl(e)) {
		f = Cl(e);
		break;
	}
	let p = function(e, t, n) {
		if (!e || !t) return null;
		let r = e.getParentAtCaret(), i = t.getParentAtCaret();
		if (!r || !i) return null;
		let a = r.getParents().reverse();
		a.push(r);
		let o = i.getParents().reverse();
		o.push(i);
		let s = Math.min(a.length, o.length), c;
		for (c = 0; c < s && a[c] === o[c]; c++);
		let l = (e, t) => {
			let n;
			for (let r = c; r < e.length; r++) {
				let i = e[r];
				if (Y(i)) return;
				!n && t(i) && (n = i);
			}
			return n;
		}, u = l(a, Ws), d = u && l(o, (e) => n.has(e.getKey()) && Ws(e));
		return d && Cc(d).length > 0 ? null : u && d ? [u, d] : null;
	}(d, f, l);
	if (p) {
		let [e, t] = p;
		el(e, "previous").splice(0, t.getChildren());
		let n = t.getParent();
		for (t.remove(!0); n && n.isEmpty();) {
			let e = n;
			n = n.getParent(), e.remove(!0);
		}
	} else if (f) {
		let e = function(e) {
			if (qc(e)) {
				let t = e.origin;
				if (Ws(t)) return t;
			} else {
				let t = e.getParentAtCaret();
				if (t && Ws(t)) return t;
			}
			return null;
		}(f), t = e && e.getParent(), n = e && e.getParents().findLast(ps);
		if (e && t && !V(t) && e.isEmpty() && l.has(e.getKey()) && Cc(e).length === 0 && (!n || l.has(n.getKey()))) {
			e.remove(!0);
			let n = t;
			for (; n && !V(n) && n.isEmpty();) {
				let e = n.getParent();
				if (e && V(e) && e.getChildrenSize() <= 1) break;
				let t = n;
				n = e, t.remove(!0);
			}
		}
	}
	let m = [
		d,
		f,
		...s,
		...c
	].find(xl);
	if (m) return ol(Tl(Cl(m), e.direction));
	a(269, JSON.stringify(s.map((e) => e.origin.__key)));
}
function Cl(e) {
	let t = function(e) {
		let t = e;
		for (; qc(t);) {
			let e = nl(t);
			if (!qc(e)) break;
			t = e;
		}
		return t;
	}(e.getLatest()), { direction: n } = t;
	if (j(t.origin)) return Gc(t) ? t : Zc(t.origin, n, n);
	let r = t.getAdjacentCaret();
	return Kc(r) && j(r.origin) ? Zc(r.origin, n, Vc(n)) : t;
}
function wl(e) {
	return Gc(e) && e.offset !== Qc(e.origin, e.direction);
}
function Tl(e, t) {
	return e.direction === t ? e : e.getFlipped();
}
function El(e, t) {
	return e.direction === t ? e : sl(Tl(e.focus, t), Tl(e.anchor, t));
}
function Dl(e, t, n) {
	let r = el(e, "next");
	for (let e = 0; e < t; e++) {
		let e = r.getAdjacentCaret();
		if (e === null) break;
		r = e;
	}
	return Tl(r, n);
}
function Ol(e, t = "root") {
	let n = 0, r = e, i = nl(r);
	for (; i === null;) {
		if (n--, i = r.getParentCaret(t), !i) return null;
		r = i, i = nl(r);
	}
	return i && [i, n];
}
function kl(e) {
	let { origin: t, offset: n, direction: r } = e;
	if (n === Qc(t, r)) return e.getSiblingCaret();
	if (n === Qc(t, Vc(r))) return yl(e.getSiblingCaret());
	let [i] = t.splitText(n);
	return j(i) || a(281), Tl($(i, "next"), r);
}
function Al(e, t) {
	return !0;
}
function jl(e, { $copyElementNode: t = ms, $splitTextPointCaretNext: n = kl, rootMode: r = "shadowRoot", $shouldSplit: i = Al, removeEmptyDestination: a = !1 } = {}) {
	if (Gc(e)) return n(e);
	let o = e.getParentCaret(r);
	if (o) {
		let { origin: n } = o;
		if (qc(e)) {
			let e = yl(o);
			if (a && n.isEmpty()) return n.remove(), e;
			if (!n.canBeEmpty() || !i(n, "first")) return e;
		}
		let r = function(e) {
			let t = [];
			for (let n = e.getAdjacentCaret(); n; n = n.getAdjacentCaret()) t.push(n.origin);
			return t;
		}(e);
		(r.length > 0 || !a && n.canBeEmpty() && i(n, "last")) && o.insert(t(n).splice(0, 0, r));
	}
	return o;
}
function Ml(e, t, n) {
	let r = Tl(t, "next");
	Gc(r) && (r.offset === 0 ? r = $(r.origin, "previous").getFlipped() : r.offset === r.origin.getTextContentSize() && (r = $(r.origin, "next"))), r.origin.is(e) && (Kc(r) || a(342, e.getKey(), e.getType()), r = yl(r)), (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) && e.remove(!0);
	for (let e = r; e; e = jl(e, n)) r = e;
	return Gc(r) && a(283), r.insert(e.isInline() ? H().append(e) : e), Tl($(e.getLatest(), "next"), t.direction);
}
function Nl(e) {
	return e;
}
function Pl(...e) {
	return e;
}
function Fl(e, t) {
	return [e, t];
}
function Il(e) {
	return e;
}
function Ll(e, t) {
	if (!t || e === t) return e;
	for (let n in t) if (e[n] !== t[n]) return {
		...e,
		...t
	};
	return e;
}
function Rl(...e) {
	let t = [];
	for (let n of e) if (n && typeof n == "string") for (let [e] of n.matchAll(/\S+/g)) t.push(e);
	return t;
}
function zl(e, ...t) {
	let n = Rl(...t);
	n.length > 0 && e.classList.add(...n);
}
function Bl(e, ...t) {
	let n = Rl(...t);
	n.length > 0 && e.classList.remove(...n);
}
function Vl(...e) {
	return () => {
		for (let t = e.length - 1; t >= 0; t--) e[t]();
		e.length = 0;
	};
}
function Hl(e, t, n) {
	return Vl(...Object.entries(t).map(([t, r]) => Jn(e, t, r, n)));
}
//#endregion
export { B as $, wl as $n, Ar as $r, Ts as $t, on as A, vl as An, H as Ar, xa as At, pc as B, bi as Bn, We as Br, Wa as Bt, Vi as C, qo as Cn, xn as Cr, hl as Ct, A as D, _n as Dn, Io as Dr, To as Dt, Es as E, G as En, ks as Er, Ya as Et, Xt as F, eo as Fn, _i as Fr, al as Ft, tl as G, Ss as Gn, po as Gr, ml as Gt, Ha as H, Ns as Hn, Kc as Hr, W as Ht, Pa as I, jl as In, Dl as Ir, rn as It, Y as J, Fr as Jn, Mr as Jr, j as Jt, Qt as K, Qi as Kn, Ws as Kr, pn as Kt, bo as L, Rs as Ln, qs as Lr, za as Lt, bs as M, Ol as Mn, Ls as Mr, Rl as Mt, Xi as N, zs as Nn, Tn as Nr, Rn as Nt, sl as O, li as On, gn as Or, Vc as Ot, ic as P, kn as Pn, wr as Pr, Bl as Pt, Zt as Q, Sn as Qn, Mn as Qr, Ka as Qt, rt as R, ma as Rn, Ln as Rr, vs as Rt, ds as S, Z as Sn, Ps as Sr, vo as St, qa as T, yi as Tn, xc as Tr, mn as Tt, xs as U, ll as Un, Hn as Ur, _s as Ut, sn as V, u as Vn, zl as Vr, $i as Vt, Zi as W, cn as Wn, Rr as Wr, Zr as Wt, So as X, f as Xn, Il as Xr, _c as Xt, Ui as Y, Vl as Yn, He as Yr, No as Yt, el as Z, Fs as Zn, Zo as Zr, dn as Zt, qc as _, uo as _n, Ga as _r, nc as _t, go as a, Co as ai, ha as an, s as ar, Gn as at, rc as b, M as bn, bn as br, Ur as bt, es as c, r as ci, Ml as cn, yl as cr, ho as ct, Ll as d, da as dn, di as dr, Vn as dt, Pl as ei, gl as en, Us as er, ps as et, $ as f, wn as fn, Vs as fr, Lr as ft, _o as g, Ir as gn, un as gr, Zc as gt, zi as h, Bn as hn, Nl as hr, mo as ht, ls as i, ms as ii, si as in, Fl as ir, cs as it, Va as j, En as jn, h as jr, Ue as jt, fc as k, Za as kn, ci as kr, Ks as kt, Fn as l, m as ln, wc as lr, Ys as lt, Ma as m, Gc as mn, no as mr, Wn as mt, an as n, nl as ni, hn as nn, jr as nr, xo as nt, hs as o, i as oi, An as on, Cc as or, Vr as ot, tc as p, El as pn, jn as pr, ss as pt, Fa as q, zn as qn, Pn as qr, X as qt, ec as r, V as ri, Os as rn, Ve as rr, $s as rt, Gs as s, n as si, Si as sn, vn as sr, Li as st, ol as t, S as ti, bc as tn, Nn as tr, N as tt, Nr as u, Is as un, yn as ur, as as ut, Un as v, Hl as vn, ws as vr, z as vt, fn as w, Dn as wn, Cl as wr, yc as wt, k as x, _ as xn, d as xr, Bi as xt, zr as y, Cn as yn, l as yr, Jn as yt, cl as z, On as zn, Pr as zr, ln as zt };
