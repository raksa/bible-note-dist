import { I as e, Pr as t, Yr as n, jt as r, rr as i } from "./Lexical.prod-DYDuARMX.mjs";
import * as a from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/nodes/PollNode.tsx
var s = a.lazy(() => import("./PollComponent-YTIa7NIF.mjs"));
function c() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function l(e = "") {
	return {
		text: e,
		uid: c(),
		votes: []
	};
}
function u(e, t, n) {
	return {
		text: t,
		uid: e.uid,
		votes: n || Array.from(e.votes)
	};
}
function d(e, t) {
	return e.findIndex((e) => e.uid === t.uid);
}
function f(e) {
	let t = e.getAttribute("data-lexical-poll-question"), n = e.getAttribute("data-lexical-poll-options");
	return t !== null && n !== null ? { node: _(t, JSON.parse(n)) } : null;
}
function p(e) {
	let t = [];
	if (Array.isArray(e)) for (let n of e) n && typeof n.text == "string" && typeof n.uid == "string" && Array.isArray(n.votes) && n.votes.every((e) => typeof e == "string") && t.push(n);
	return t;
}
var m = i("question", { parse: (e) => typeof e == "string" ? e : "" }), h = i("options", {
	isEqual: (e, t) => e.length === t.length && JSON.stringify(e) === JSON.stringify(t),
	parse: p
}), g = class extends e {
	$config() {
		return this.config("poll", {
			extends: e,
			importDOM: t({ span: (e) => e.getAttribute("data-lexical-poll-question") === null ? null : {
				conversion: f,
				priority: 2
			} }),
			stateConfigs: [{
				flat: !0,
				stateConfig: m
			}, {
				flat: !0,
				stateConfig: h
			}]
		});
	}
	getQuestion() {
		return n(this, m);
	}
	setQuestion(e) {
		return r(this, m, e);
	}
	getOptions() {
		return n(this, h);
	}
	setOptions(e) {
		return r(this, h, e);
	}
	addOption(e) {
		return this.setOptions((t) => [...t, e]);
	}
	deleteOption(e) {
		return this.setOptions((t) => {
			let n = d(t, e);
			if (n === -1) return t;
			let r = Array.from(t);
			return r.splice(n, 1), r;
		});
	}
	setOptionText(e, t) {
		return this.setOptions((n) => {
			let r = d(n, e);
			if (r === -1) return n;
			let i = Array.from(n), a = i[r];
			return i[r] = u(a, t), i;
		});
	}
	addVote(e, t) {
		return this.setOptions((n) => {
			let r = d(n, e);
			if (r === -1) return n;
			let i = Array.from(n), a = i[r];
			return i[r] = u(a, a.text, [...a.votes, t]), i;
		});
	}
	removeVote(e, t) {
		return this.setOptions((n) => {
			let r = d(n, e);
			if (r === -1) return n;
			let i = Array.from(n), a = i[r], o = Array.from(a.votes), s = o.lastIndexOf(t);
			return s === -1 ? n : (o.splice(s, 1), i[r] = u(a, a.text, o), i);
		});
	}
	removeLastVote(e) {
		return this.setOptions((t) => {
			let n = d(t, e);
			if (n === -1) return t;
			let r = Array.from(t), i = r[n];
			return i.votes.length === 0 ? t : (r[n] = u(i, i.text, i.votes.slice(0, -1)), r);
		});
	}
	toggleVote(e, t) {
		return this.setOptions((n) => {
			let r = d(n, e);
			if (r === -1) return n;
			let i = n[r], a = i.votes, o = Array.from(a), s = a.indexOf(t);
			s === -1 ? o.push(t) : o.splice(s, 1);
			let c = u(i, i.text, o), l = Array.from(n);
			return l[r] = c, l;
		});
	}
	exportDOM() {
		let e = document.createElement("span");
		return e.setAttribute("data-lexical-poll-question", this.getQuestion()), e.setAttribute("data-lexical-poll-options", JSON.stringify(this.getOptions())), { element: e };
	}
	createDOM() {
		let e = document.createElement("span");
		return e.style.display = "inline-block", e;
	}
	updateDOM() {
		return !1;
	}
	decorate() {
		return /* @__PURE__ */ o(s, {
			question: this.getQuestion(),
			options: this.getOptions(),
			nodeKey: this.__key
		});
	}
};
function _(e, t) {
	return new g().setQuestion(e).setOptions(t);
}
function v(e) {
	return e instanceof g;
}
//#endregion
export { l as i, v as n, g as r, _ as t };
