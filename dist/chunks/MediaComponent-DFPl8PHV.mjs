import { L as e, R as t, S as n, W as r, b as i, n as a, r as o, rt as s, t as ee, v as c, w as te, y as ne } from "./TreeViewPlugin-DM4FTbyk.mjs";
import { Dr as re, En as l, F as ie, Fr as u, Ht as ae, K as oe, Nr as se, Yn as d, at as f, bn as ce, jn as le, oi as p, qr as ue, tt as m, wn as de, x as h, yn as fe } from "./Lexical.prod-DYDuARMX.mjs";
import { N as pe, a as me, o as he, t as ge } from "./ContentEditable-C_wyHFh1.mjs";
import { r as _e, t as ve } from "./MediaResizer-C7UGQ3Kl.mjs";
import { t as ye } from "./useLexicalNodeSelection.prod-CEfV63CR.mjs";
import { t as be } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import { t as xe } from "./LexicalNestedComposer.prod-C96XUwM-.mjs";
import { Suspense as Se, useCallback as g, useEffect as _, useMemo as Ce, useRef as v, useState as y } from "react";
import { Fragment as we, jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/images/image-broken.svg
var S = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%203H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3zm-2%204v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2h2zm-6%202h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2V9zM6%207h2v2H6V7z'%20fill='%23000000'/%3e%3c/svg%3e", C = /* @__PURE__ */ new Map(), Te = 2, w = h("RIGHT_CLICK_MEDIA_COMMAND");
function Ee({ setShowCaption: t }) {
	let [n] = p();
	return _(() => n.registerCommand(f, () => (e() && t(!1), !1), 0)), null;
}
function T(e) {
	let t = C.get(e);
	if (t && "error" in t && typeof t.error == "boolean") return t;
	throw t || (t = new Promise((t) => {
		let n = new Image();
		n.src = e, n.onload = () => t({
			error: !1,
			height: n.naturalHeight,
			width: n.naturalWidth
		}), n.onerror = () => t({ error: !0 });
	}).then((t) => (C.set(e, t), t)), C.set(e, t), t);
}
function E(e) {
	return e.toLowerCase().endsWith(".svg");
}
function De({ altText: e, className: t, mediaRef: n, src: r, width: i, height: a, maxWidth: o, onError: s }) {
	let ee = E(r), c = T(r);
	if (_(() => {
		c.error && s();
	}, [c.error, s]), c.error) return /* @__PURE__ */ b(D, {});
	let te = (() => {
		if (!ee || !("width" in c) || !("height" in c)) return {
			height: a,
			maxWidth: o,
			width: i
		};
		let e = c.width, t = c.height, n = e, r = t;
		if (n > o) {
			let e = o / n;
			n = o, r = Math.round(r * e);
		}
		let s = o;
		if (r > s) {
			let e = s / r;
			r = s, n = Math.round(n * e);
		}
		return {
			height: r,
			maxWidth: o,
			width: n
		};
	})();
	return /* @__PURE__ */ b("img", {
		className: t || void 0,
		src: r,
		alt: e,
		ref: n,
		style: te,
		onError: s,
		draggable: "false"
	});
}
function Oe({ altText: e, className: t, height: n, maxWidth: r, mediaRef: i, onError: a, src: o, width: s }) {
	return /* @__PURE__ */ b("video", {
		className: t || void 0,
		src: o,
		title: e,
		ref: i,
		style: {
			height: n,
			maxWidth: r,
			width: s
		},
		onError: a,
		controls: !0,
		draggable: "false"
	});
}
function ke({ altText: e, className: t, height: n, maxWidth: r, mediaRef: i, onError: a, src: o, width: s }) {
	return /* @__PURE__ */ b("audio", {
		className: t || void 0,
		src: o,
		title: e,
		ref: i,
		style: {
			height: n === "inherit" ? void 0 : n,
			maxWidth: r,
			width: s === "inherit" ? r : s
		},
		onError: a,
		controls: !0,
		draggable: "false"
	});
}
function Ae({ altText: e, className: t, defaultWidth: n, height: r, maxWidth: i, mediaRef: a, src: o, width: s }) {
	return /* @__PURE__ */ b("iframe", {
		className: t || void 0,
		src: o,
		title: e || "PDF",
		ref: a,
		style: {
			height: r === "inherit" ? 500 : r,
			maxWidth: i,
			width: s === "inherit" ? n : s
		}
	});
}
function D() {
	return /* @__PURE__ */ b("img", {
		src: S,
		style: {
			height: 200,
			opacity: .2,
			width: 200
		},
		draggable: "false",
		alt: "Broken image"
	});
}
function O() {}
var k = {
	audio: "mp3",
	image: "png",
	pdf: "pdf",
	video: "mp4"
};
function je(e, t, n) {
	let r = e.trim().split(/[?#]/)[0];
	if (r !== "" && !/^(?:blob|data):/i.test(r)) {
		let e = r.split(/[\\/]/).pop();
		if (e !== void 0 && e.trim() !== "") return e;
	}
	let i = t.trim();
	return i === "" ? `media.${k[n]}` : i;
}
function A({ src: e, mediaType: f, previewSrc: h, altText: S, nodeKey: C, width: T, height: E, maxWidth: k, resizable: A, showCaption: j, caption: M, captionsEnabled: Me }) {
	let N = v(null), P = v(null), [F, I, L] = ye(C), [R, z] = y(!1), [B, V] = y(), { revealFile: Ne } = s(), [H] = p(), Pe = v(null), [Fe, U] = y(!1), Ie = be(), W = Ce(() => F && H.getEditorState().read(() => {
		let e = m();
		return u(e) && e.has(C);
	}), [
		H,
		F,
		C
	]), Le = g((e) => {
		let t = m(), n = P.current;
		if (u(t) && t.has(C) && t.getNodes().length === 1) {
			if (j) return l(null), e.preventDefault(), M.focus(), !0;
			if (n !== null && n !== document.activeElement) return e.preventDefault(), n.focus(), !0;
		}
		return !1;
	}, [
		M,
		C,
		j
	]), Re = g((e) => Pe.current === M || P.current === e.target ? (l(null), H.update(() => {
		I(!0);
		let e = H.getRootElement();
		e !== null && e.focus();
	}), !0) : !1, [
		M,
		H,
		I
	]), G = g((e) => {
		let n = m();
		if (!u(n) || !n.has(C)) return !1;
		let r = !1;
		for (let e of n.getNodes()) t(e) && (e.remove(), r = !0);
		return r && e.preventDefault(), r;
	}, [C]), K = g((e) => {
		let t = e;
		return R ? !0 : t.target === N.current ? ((f === "video" || f === "audio") && t.preventDefault(), t.shiftKey ? I(!F) : (L(), I(!0)), !0) : !1;
	}, [
		R,
		F,
		f,
		I,
		L
	]), q = g((e) => {
		H.getEditorState().read(() => {
			let t = m();
			e.target === N.current && ce(t) && t.getNodes().length === 1 && H.dispatchCommand(w, e);
		});
	}, [H]);
	_(() => d(H.registerCommand(ie, (e, t) => (Pe.current = t, !1), 1), H.registerCommand(ue, (e) => e.target === N.current ? (e.preventDefault(), !0) : !1, 1)), [H]), _(() => {
		U(!1);
	}, [
		f,
		h,
		e,
		B
	]), _(() => {
		let t = !0, n;
		return V(void 0), f === "image" || h ? () => {
			t = !1;
		} : (te(e).then((e) => {
			if (e) {
				if (!t) {
					typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(e);
					return;
				}
				n = e, V(e);
			}
		}), () => {
			t = !1, n && typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(n);
		});
	}, [
		f,
		h,
		e
	]), _(() => {
		let e = O;
		return d(H.registerCommand(oe, K, 1), H.registerCommand(w, K, 1), H.registerCommand(fe, Le, 1), H.registerCommand(de, G, 1), H.registerCommand(se, G, 1), H.registerCommand(le, Re, 1), H.registerRootListener((t) => {
			e(), e = O, t && (t.addEventListener("contextmenu", q), e = () => t.removeEventListener("contextmenu", q));
		}), () => e());
	}, [
		H,
		G,
		Le,
		Re,
		K,
		q
	]);
	let ze = (e) => {
		H.update(() => {
			let n = ae(C);
			t(n) && (n.setShowCaption(e), e && n.__caption.update(() => {
				m() || re().selectEnd();
			}));
		});
	}, Be = (e, n) => {
		setTimeout(() => {
			z(!1);
		}, 200), H.update(() => {
			let r = ae(C);
			t(r) && r.setWidthAndHeight(e, n);
		});
	}, Ve = () => {
		z(!0);
	}, { historyState: He } = me(), { settings: { showNestedEditorTreeView: Ue } } = _e(), We = W && !R, J = (F || R) && Ie, Y = J ? `focused ${W ? "draggable" : ""}` : null, Ge = f === "image" || f === "video" || f === "pdf", X = k * Te, Z = g((e) => {
		N.current = e;
	}, []), Q = h || B || e, Ke = je(e, S, f), $ = Ne !== void 0 && n(e) ? Ne : null;
	return /* @__PURE__ */ b(Se, {
		fallback: null,
		children: /* @__PURE__ */ x(we, { children: [
			/* @__PURE__ */ b("div", {
				draggable: We,
				children: Fe && f === "image" ? /* @__PURE__ */ b(D, {}) : f === "video" ? /* @__PURE__ */ b(Oe, {
					className: Y,
					src: Q,
					altText: S,
					mediaRef: Z,
					width: T,
					height: E,
					maxWidth: X,
					onError: () => U(!0)
				}) : f === "audio" ? /* @__PURE__ */ b(ke, {
					className: Y,
					src: Q,
					altText: S,
					mediaRef: Z,
					width: T,
					height: E,
					maxWidth: k,
					onError: () => U(!0)
				}) : f === "pdf" ? /* @__PURE__ */ b(Ae, {
					className: Y,
					src: Q,
					altText: S,
					mediaRef: Z,
					width: T,
					height: E,
					defaultWidth: k,
					maxWidth: X
				}) : /* @__PURE__ */ b(De, {
					className: Y,
					src: e,
					altText: S,
					mediaRef: Z,
					width: T,
					height: E,
					maxWidth: X,
					onError: () => U(!0)
				})
			}),
			W && !R ? /* @__PURE__ */ x("div", {
				className: "media-floating-actions",
				role: "toolbar",
				"aria-label": "Media options",
				children: [/* @__PURE__ */ b("a", {
					className: "media-action-button",
					href: Q,
					download: Ke,
					title: "Download media",
					"aria-label": "Download media",
					onClick: (e) => {
						e.stopPropagation();
					},
					children: /* @__PURE__ */ b("i", {
						className: "bi bi-download",
						"aria-hidden": "true"
					})
				}), $ === null ? null : /* @__PURE__ */ b("button", {
					className: "media-action-button",
					type: "button",
					title: "Reveal media file",
					"aria-label": "Reveal media file",
					onClick: (t) => {
						t.preventDefault(), t.stopPropagation(), $(e);
					},
					children: /* @__PURE__ */ b("i", {
						className: "bi bi-folder2-open",
						"aria-hidden": "true"
					})
				})]
			}) : null,
			j && /* @__PURE__ */ b("div", {
				className: "media-caption-container",
				children: /* @__PURE__ */ x(xe, {
					initialEditor: M,
					children: [
						/* @__PURE__ */ b(Ee, { setShowCaption: ze }),
						/* @__PURE__ */ b(a, {}),
						/* @__PURE__ */ b(o, {}),
						/* @__PURE__ */ b(c, {}),
						/* @__PURE__ */ b(i, {}),
						/* @__PURE__ */ b(ne, {}),
						/* @__PURE__ */ b(he, { externalHistoryState: He }),
						/* @__PURE__ */ b(r, {
							contentEditable: /* @__PURE__ */ b(ge, {
								placeholder: "Enter a caption...",
								placeholderClassName: "MediaNode__placeholder",
								className: "MediaNode__contentEditable"
							}),
							ErrorBoundary: pe
						}),
						Ue === !0 ? /* @__PURE__ */ b(ee, {}) : null
					]
				})
			}),
			A && Ge && W && J && /* @__PURE__ */ b(ve, {
				showCaption: j,
				setShowCaption: ze,
				editor: H,
				buttonRef: P,
				mediaRef: N,
				maxWidth: X,
				onResizeStart: Ve,
				onResizeEnd: Be,
				captionsEnabled: !Fe && Me
			})
		] })
	});
}
//#endregion
export { w as RIGHT_CLICK_MEDIA_COMMAND, A as default };
