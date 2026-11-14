import { Ht as e, K as t, Ln as n, Yn as r, oi as i } from "./Lexical.prod-DYDuARMX.mjs";
import { t as a } from "./MediaResizer-C_ZJbHAU.mjs";
import { i as o, m as s, n as c, t as l } from "./ExcalidrawModal-DSotOBGc.mjs";
import { t as u } from "./useLexicalNodeSelection.prod-CEfV63CR.mjs";
import { t as d } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import { al as f } from "./chunk-K2UTITRG-BL2g1KW8.mjs";
import { useCallback as p, useEffect as m, useMemo as h, useRef as g, useState as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/nodes/ExcalidrawNode/ExcalidrawImage.tsx
var x = [], S = /* @__PURE__ */ new Set([
	"#fff",
	"#ffffff",
	"rgb(255, 255, 255)",
	"white"
]);
function C(e) {
	return typeof e != "string" || e.trim() === "" || S.has(e.trim().toLowerCase());
}
function w(e) {
	let t = e.exportWithDarkMode === !0 || e.theme === "dark";
	return e.exportBackground !== !1 && C(e.viewBackgroundColor) ? {
		...e,
		exportBackground: !1,
		...t ? { exportWithDarkMode: !0 } : {}
	} : e;
}
var T = (e) => {
	let t = e?.firstElementChild?.firstElementChild, n = e.getAttribute("viewBox");
	if (n != null) {
		let t = n.split(" ");
		e.setAttribute("width", t[2]), e.setAttribute("height", t[3]);
	}
	t && t.tagName === "style" && t.remove();
};
function E({ elements: e, files: t, extraFontFamilies: n = x, imageContainerRef: r, appState: i, rootClassName: a = null, width: o = "inherit", height: s = "inherit" }) {
	let [l, u] = _(null);
	m(() => {
		let r = !0;
		return (async () => {
			await c(n);
			let a = await f({
				appState: w(i),
				elements: e,
				files: t
			});
			T(a), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("display", "block"), r && u(a);
		})().catch((e) => {
			console.error(e);
		}), () => {
			r = !1;
		};
	}, [
		e,
		t,
		i,
		n
	]);
	let d = {};
	return o !== "inherit" && (d.width = `${o}px`), s !== "inherit" && (d.height = `${s}px`), /* @__PURE__ */ y("div", {
		ref: (e) => {
			e && r && (r.current = e);
		},
		className: a ?? "",
		style: d,
		dangerouslySetInnerHTML: { __html: l?.outerHTML ?? "" }
	});
}
//#endregion
//#region src/nodes/ExcalidrawNode/ExcalidrawComponent.tsx
function D({ nodeKey: c, data: f, width: x, height: S }) {
	let [C] = i(), w = d(), [T, D] = _(f === "[]" && C.isEditable()), O = g(null), k = g(null), A = g(null), [j, M, N] = u(c), [P, F] = _(!1), { clearLibrariesFileList: I, detectTextLanguage: L, extraFontFamilies: R, libraryItems: z, loadLibrariesFileList: B, saveLibrariesFile: V } = s();
	m(() => {
		if (!w) {
			j && N();
			return;
		}
		return r(C.registerCommand(t, (e) => {
			let t = k.current, r = e.target;
			return P ? !0 : t !== null && n(r) && t.contains(r) ? (e.shiftKey || N(), M(!j), e.detail > 1 && D(!0), !0) : !1;
		}, 1));
	}, [
		N,
		C,
		j,
		P,
		M,
		w
	]);
	let H = p(() => (D(!1), C.update(() => {
		let t = e(c);
		t && t.remove();
	})), [C, c]), U = (t, n, r) => C.update(() => {
		let i = e(c);
		o(i) && (t && t.length > 0 || Object.keys(r).length > 0 ? i.setData(JSON.stringify({
			appState: n,
			elements: t,
			files: r
		})) : i.remove());
	}), W = () => {
		F(!0);
	}, G = (t, n) => {
		setTimeout(() => {
			F(!1);
		}, 200), C.update(() => {
			let r = e(c);
			o(r) && (r.setWidth(t), r.setHeight(n));
		});
	}, K = p(() => {
		D(!0);
	}, []), { elements: q = [], files: J = {}, appState: Y = {} } = h(() => JSON.parse(f), [f]), X = p(() => {
		D(!1), q.length === 0 && C.update(() => {
			let t = e(c);
			t && t.remove();
		});
	}, [
		C,
		c,
		q.length
	]);
	return /* @__PURE__ */ b(v, { children: [w && T && /* @__PURE__ */ y(l, {
		clearLibrariesFileList: I,
		detectTextLanguage: L,
		extraFontFamilies: R,
		initialElements: q,
		initialFiles: J,
		initialAppState: Y,
		isShown: T,
		loadLibrariesFileList: B,
		libraryItems: z,
		saveLibrariesFile: V,
		onDelete: H,
		onClose: X,
		onSave: (e, t, n) => {
			U(e, t, n), D(!1);
		},
		closeOnClickOutside: !1
	}), q.length > 0 && /* @__PURE__ */ b("button", {
		ref: k,
		className: `excalidraw-button ${j ? "selected" : ""}`,
		children: [
			/* @__PURE__ */ y(E, {
				imageContainerRef: O,
				className: "image",
				elements: q,
				extraFontFamilies: R,
				files: J,
				appState: Y,
				width: x,
				height: S
			}),
			j && w && /* @__PURE__ */ y("div", {
				className: "media-edit-button",
				role: "button",
				tabIndex: 0,
				onMouseDown: (e) => e.preventDefault(),
				onClick: K,
				children: /* @__PURE__ */ y("i", { className: "bi bi-pencil-fill" })
			}),
			(j || P) && w && /* @__PURE__ */ y(a, {
				buttonRef: A,
				showCaption: !0,
				setShowCaption: () => null,
				mediaRef: O,
				editor: C,
				onResizeStart: W,
				onResizeEnd: G,
				captionsEnabled: !0
			})
		]
	})] });
}
//#endregion
export { D as default };
