import { F as e, Fr as t, Ht as n, Sn as r, Yn as i, jn as a, oi as o, tt as s } from "./Lexical.prod-DYDuARMX.mjs";
import { t as c } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import { i as l, n as u, t as d } from "./KatexRenderer-DcY1rMT-.mjs";
import { forwardRef as f, useCallback as p, useEffect as m, useRef as h, useState as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/ui/EquationEditor.tsx
function b({ equation: e, setEquation: t, inline: n }, i) {
	let a = (e) => {
		t(e.target.value);
	};
	return n && r(i) ? /* @__PURE__ */ y("span", {
		className: "EquationEditor_inputBackground",
		children: [
			/* @__PURE__ */ v("span", {
				className: "EquationEditor_dollarSign",
				children: "$"
			}),
			/* @__PURE__ */ v("input", {
				className: "EquationEditor_inlineEditor",
				value: e,
				onChange: a,
				autoFocus: !0,
				ref: i
			}),
			/* @__PURE__ */ v("span", {
				className: "EquationEditor_dollarSign",
				children: "$"
			})
		]
	}) : /* @__PURE__ */ y("div", {
		className: "EquationEditor_inputBackground",
		children: [
			/* @__PURE__ */ v("span", {
				className: "EquationEditor_dollarSign",
				children: "$$\n"
			}),
			/* @__PURE__ */ v("textarea", {
				className: "EquationEditor_blockEditor",
				value: e,
				onChange: a,
				ref: i
			}),
			/* @__PURE__ */ v("span", {
				className: "EquationEditor_dollarSign",
				children: "\n$$"
			})
		]
	});
}
var x = f(b);
//#endregion
//#region src/nodes/EquationComponent.tsx
function S({ equation: r, inline: f, nodeKey: y }) {
	let [b] = o(), S = c(), [C, w] = g(r), [T, E] = g(!1), D = h(null), O = p((e) => {
		E(!1), b.update(() => {
			let t = n(y);
			l(t) && (t.setEquation(C), e && t.selectNext(0, 0));
		});
	}, [
		b,
		C,
		y
	]);
	return m(() => {
		!T && C !== r && w(r);
	}, [
		T,
		r,
		C
	]), m(() => {
		if (S) return T ? i(b.registerCommand(e, (e) => {
			let t = document.activeElement;
			return D.current !== t && O(), !1;
		}, 3), b.registerCommand(a, (e) => {
			let t = document.activeElement;
			return D.current === t ? (O(!0), !0) : !1;
		}, 3)) : b.registerUpdateListener(({ editorState: e }) => {
			e.read(() => {
				let e = s();
				return t(e) && e.has(y) && e.getNodes().length === 1;
			}) && E(!0);
		});
	}, [
		b,
		y,
		O,
		T,
		S
	]), /* @__PURE__ */ v(_, { children: T && S ? /* @__PURE__ */ v(x, {
		equation: C,
		setEquation: w,
		inline: f,
		ref: D
	}) : /* @__PURE__ */ v(u, {
		onError: (e) => b._onError(e),
		fallback: null,
		children: /* @__PURE__ */ v(d, {
			equation: C,
			inline: f,
			onDoubleClick: () => {
				S && E(!0);
			}
		})
	}) });
}
//#endregion
export { S as default };
