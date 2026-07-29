import { Br as e, Fn as t, _n as n, ci as r, si as i } from "./Lexical.prod-DYDuARMX.mjs";
import { createContext as a, useContext as o, useEffect as s, useMemo as c, useRef as l } from "react";
import { jsx as u } from "react/jsx-runtime";
//#region node_modules/@lexical/react/dist/LexicalCollaborationContext.prod.mjs
var d = [
	["Cat", "rgb(125, 50, 0)"],
	["Dog", "rgb(100, 0, 0)"],
	["Rabbit", "rgb(150, 0, 0)"],
	["Frog", "rgb(200, 0, 0)"],
	["Fox", "rgb(200, 75, 0)"],
	["Hedgehog", "rgb(0, 75, 0)"],
	["Pigeon", "rgb(0, 125, 0)"],
	["Squirrel", "rgb(75, 100, 0)"],
	["Bear", "rgb(125, 100, 0)"],
	["Tiger", "rgb(0, 0, 150)"],
	["Leopard", "rgb(0, 0, 200)"],
	["Zebra", "rgb(0, 0, 250)"],
	["Wolf", "rgb(0, 100, 150)"],
	["Owl", "rgb(0, 100, 100)"],
	["Gull", "rgb(100, 0, 100)"],
	["Squid", "rgb(150, 0, 150)"]
], f = d[Math.floor(Math.random() * d.length)], p = /*#__PURE__*/ a(null);
function m() {
	return {
		color: f[1],
		isCollabActive: !1,
		name: f[0],
		yjsDocMap: /* @__PURE__ */ new Map()
	};
}
m();
//#endregion
//#region node_modules/@lexical/react/dist/LexicalNestedComposer.prod.mjs
function h({ initialEditor: a, children: d, initialNodes: f, initialTheme: m, skipCollabChecks: h, skipEditableListener: g }) {
	let _ = l(!1), v = o(i);
	v ?? function(e, ...t) {
		let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
		r.append("code", e);
		for (let e of t) r.append("v", e);
		throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(9);
	let [y, { getTheme: b }] = v, x = c(() => {
		let i = m || b() || void 0, o = r(v, i);
		i !== void 0 && (a._config.theme = i), a._parentEditor = a._parentEditor || y;
		let s = a._createEditorArgs, c = s && s.namespace;
		if (f) {
			c || (a._config.namespace = y._config.namespace);
			for (let r of f) {
				let i = null, o = null;
				if (typeof r != "function") {
					let e = r;
					r = e.replace, i = e.with, o = e.withKlass || null;
				}
				let s = n(a, r.getType());
				a._nodes.set(r.getType(), {
					exportDOM: s ? s.exportDOM : void 0,
					klass: r,
					replace: i,
					replaceWithKlass: o,
					sharedNodeState: e(r),
					transforms: t(r)
				});
			}
		} else if (s && s.nodes) c || (a._config.namespace = y._config.namespace);
		else {
			let n = a._nodes = new Map(y._nodes);
			c || (a._config.namespace = y._config.namespace);
			for (let [r, i] of n) a._nodes.set(r, {
				exportDOM: i.exportDOM,
				klass: i.klass,
				replace: i.replace,
				replaceWithKlass: i.replaceWithKlass,
				sharedNodeState: e(i.klass),
				transforms: t(i.klass)
			});
		}
		return [a, o];
	}, []), { isCollabActive: S, yjsDocMap: C } = o(p) ?? {}, w = h || _.current || C && C.has(a.getKey());
	return s(() => {
		w && (_.current = !0);
	}, [w]), s(() => {
		if (!g) {
			let e = (e) => a.setEditable(e);
			return e(y.isEditable()), y.registerEditableListener(e);
		}
	}, [
		a,
		y,
		g
	]), /*#__PURE__*/ u(i.Provider, {
		value: x,
		children: !S || w ? d : null
	});
}
//#endregion
export { h as t };
