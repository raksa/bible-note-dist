import { Dr as e, En as t, F as n, Fr as r, Ht as i, K as a, Nr as o, Yn as s, at as c, bn as l, jn as u, oi as d, qr as ee, tt as f, wn as te, x as p, yn as ne } from "./Lexical.prod-DYDuARMX.mjs";
import { N as re, a as ie, o as ae, t as oe } from "./ContentEditable-C_wyHFh1.mjs";
import { r as se, t as ce } from "./MediaResizer-C7UGQ3Kl.mjs";
import { C as le, I as m, L as h, U as ue, _ as de, ht as fe, n as pe, r as me, t as he, v as ge, x as _e, y as ve } from "./TreeViewPlugin-CPM2g3Ik.mjs";
import { t as ye } from "./useLexicalNodeSelection.prod-CEfV63CR.mjs";
import { t as be } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import { t as xe } from "./LexicalNestedComposer.prod-C96XUwM-.mjs";
import { Suspense as Se, useCallback as g, useEffect as _, useMemo as Ce, useRef as v, useState as y } from "react";
import { Fragment as we, jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/images/image-broken.svg
var S = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%203H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3zm-2%204v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2h2zm-6%202h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2V9zM6%207h2v2H6V7z'%20fill='%23000000'/%3e%3c/svg%3e", C = /* @__PURE__ */ new Map(), Te = 2, w = p("RIGHT_CLICK_MEDIA_COMMAND");
function Ee({ setShowCaption: e }) {
	let [t] = d();
	return _(() => t.registerCommand(c, () => (m() && e(!1), !1), 0)), null;
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
	let c = E(r), l = T(r);
	if (_(() => {
		l.error && s();
	}, [l.error, s]), l.error) return /* @__PURE__ */ b(D, {});
	let u = (() => {
		if (!c || !("width" in l) || !("height" in l)) return {
			height: a,
			maxWidth: o,
			width: i
		};
		let e = l.width, t = l.height, n = e, r = t;
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
		style: u,
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
function Me({ src: c, mediaType: p, previewSrc: m, altText: S, nodeKey: C, width: T, height: E, maxWidth: k, resizable: Me, showCaption: A, caption: j, captionsEnabled: Ne }) {
	let M = v(null), N = v(null), [P, F, I] = ye(C), [L, R] = y(!1), [z, B] = y(), { revealFile: V } = fe(), [H] = d(), U = v(null), [W, G] = y(!1), Pe = be(), K = Ce(() => P && H.getEditorState().read(() => {
		let e = f();
		return r(e) && e.has(C);
	}), [
		H,
		P,
		C
	]), Fe = g((e) => {
		let n = f(), i = N.current;
		if (r(n) && n.has(C) && n.getNodes().length === 1) {
			if (A) return t(null), e.preventDefault(), j.focus(), !0;
			if (i !== null && i !== document.activeElement) return e.preventDefault(), i.focus(), !0;
		}
		return !1;
	}, [
		j,
		C,
		A
	]), Ie = g((e) => U.current === j || N.current === e.target ? (t(null), H.update(() => {
		F(!0);
		let e = H.getRootElement();
		e !== null && e.focus();
	}), !0) : !1, [
		j,
		H,
		F
	]), q = g((e) => {
		let t = f();
		if (!r(t) || !t.has(C)) return !1;
		let n = !1;
		for (let e of t.getNodes()) h(e) && (e.remove(), n = !0);
		return n && e.preventDefault(), n;
	}, [C]), J = g((e) => {
		let t = e;
		return L ? !0 : t.target === M.current ? ((p === "video" || p === "audio") && t.preventDefault(), t.shiftKey ? F(!P) : (I(), F(!0)), !0) : !1;
	}, [
		L,
		P,
		p,
		F,
		I
	]), Y = g((e) => {
		H.getEditorState().read(() => {
			let t = f();
			e.target === M.current && l(t) && t.getNodes().length === 1 && H.dispatchCommand(w, e);
		});
	}, [H]);
	_(() => s(H.registerCommand(n, (e, t) => (U.current = t, !1), 1), H.registerCommand(ee, (e) => e.target === M.current ? (e.preventDefault(), !0) : !1, 1)), [H]), _(() => {
		G(!1);
	}, [
		p,
		m,
		c,
		z
	]), _(() => {
		let e = !0, t;
		return B(void 0), p === "image" || m ? () => {
			e = !1;
		} : (le(c).then((n) => {
			if (n) {
				if (!e) {
					typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(n);
					return;
				}
				t = n, B(n);
			}
		}), () => {
			e = !1, t && typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(t);
		});
	}, [
		p,
		m,
		c
	]), _(() => {
		let e = O;
		return s(H.registerCommand(a, J, 1), H.registerCommand(w, J, 1), H.registerCommand(ne, Fe, 1), H.registerCommand(te, q, 1), H.registerCommand(o, q, 1), H.registerCommand(u, Ie, 1), H.registerRootListener((t) => {
			e(), e = O, t && (t.addEventListener("contextmenu", Y), e = () => t.removeEventListener("contextmenu", Y));
		}), () => e());
	}, [
		H,
		q,
		Fe,
		Ie,
		J,
		Y
	]);
	let Le = (t) => {
		H.update(() => {
			let n = i(C);
			h(n) && (n.setShowCaption(t), t && n.__caption.update(() => {
				f() || e().selectEnd();
			}));
		});
	}, Re = (e, t) => {
		setTimeout(() => {
			R(!1);
		}, 200), H.update(() => {
			let n = i(C);
			h(n) && n.setWidthAndHeight(e, t);
		});
	}, ze = () => {
		R(!0);
	}, { historyState: Be } = ie(), { settings: { showNestedEditorTreeView: Ve } } = se(), He = K && !L, Ue = (P || L) && Pe, X = Ue ? `focused ${K ? "draggable" : ""}` : null, We = p === "image" || p === "video" || p === "pdf", Z = k * Te, Q = g((e) => {
		M.current = e;
	}, []), $ = m || z || c, Ge = je(c, S, p), Ke = V !== void 0 && _e(c) ? V : null;
	return /* @__PURE__ */ b(Se, {
		fallback: null,
		children: /* @__PURE__ */ x(we, { children: [
			/* @__PURE__ */ b("div", {
				draggable: He,
				children: W && p === "image" ? /* @__PURE__ */ b(D, {}) : p === "video" ? /* @__PURE__ */ b(Oe, {
					className: X,
					src: $,
					altText: S,
					mediaRef: Q,
					width: T,
					height: E,
					maxWidth: Z,
					onError: () => G(!0)
				}) : p === "audio" ? /* @__PURE__ */ b(ke, {
					className: X,
					src: $,
					altText: S,
					mediaRef: Q,
					width: T,
					height: E,
					maxWidth: k,
					onError: () => G(!0)
				}) : p === "pdf" ? /* @__PURE__ */ b(Ae, {
					className: X,
					src: $,
					altText: S,
					mediaRef: Q,
					width: T,
					height: E,
					defaultWidth: k,
					maxWidth: Z
				}) : /* @__PURE__ */ b(De, {
					className: X,
					src: c,
					altText: S,
					mediaRef: Q,
					width: T,
					height: E,
					maxWidth: Z,
					onError: () => G(!0)
				})
			}),
			K && !L ? /* @__PURE__ */ x("div", {
				className: "media-floating-actions",
				role: "toolbar",
				"aria-label": "Media options",
				children: [/* @__PURE__ */ b("a", {
					className: "media-action-button",
					href: $,
					download: Ge,
					title: "Download media",
					"aria-label": "Download media",
					onClick: (e) => {
						e.stopPropagation();
					},
					children: /* @__PURE__ */ b("i", {
						className: "bi bi-download",
						"aria-hidden": "true"
					})
				}), Ke === null ? null : /* @__PURE__ */ b("button", {
					className: "media-action-button",
					type: "button",
					title: "Reveal media file",
					"aria-label": "Reveal media file",
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), Ke(c);
					},
					children: /* @__PURE__ */ b("i", {
						className: "bi bi-folder2-open",
						"aria-hidden": "true"
					})
				})]
			}) : null,
			A && /* @__PURE__ */ b("div", {
				className: "media-caption-container",
				children: /* @__PURE__ */ x(xe, {
					initialEditor: j,
					children: [
						/* @__PURE__ */ b(Ee, { setShowCaption: Le }),
						/* @__PURE__ */ b(pe, {}),
						/* @__PURE__ */ b(me, {}),
						/* @__PURE__ */ b(de, {}),
						/* @__PURE__ */ b(ve, {}),
						/* @__PURE__ */ b(ge, {}),
						/* @__PURE__ */ b(ae, { externalHistoryState: Be }),
						/* @__PURE__ */ b(ue, {
							contentEditable: /* @__PURE__ */ b(oe, {
								placeholder: "Enter a caption...",
								placeholderClassName: "MediaNode__placeholder",
								className: "MediaNode__contentEditable"
							}),
							ErrorBoundary: re
						}),
						Ve === !0 ? /* @__PURE__ */ b(he, {}) : null
					]
				})
			}),
			Me && We && K && Ue && /* @__PURE__ */ b(ce, {
				showCaption: A,
				setShowCaption: Le,
				editor: H,
				buttonRef: N,
				mediaRef: M,
				maxWidth: Z,
				onResizeStart: ze,
				onResizeEnd: Re,
				captionsEnabled: !W && Ne
			})
		] })
	});
}
//#endregion
export { w as RIGHT_CLICK_MEDIA_COMMAND, Me as default };
