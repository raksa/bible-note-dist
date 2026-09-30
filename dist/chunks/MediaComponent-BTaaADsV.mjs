import { Dr as e, En as t, F as n, Fr as r, Ht as i, K as a, Nr as o, Yn as s, at as c, bn as l, jn as ee, oi as u, qr as te, tt as d, wn as ne, x as f, yn as re } from "./Lexical.prod-DYDuARMX.mjs";
import { N as ie, a as ae, o as oe, t as se } from "./ContentEditable-C_wyHFh1.mjs";
import { r as ce, t as le } from "./MediaResizer-C7UGQ3Kl.mjs";
import { E as p, T as m, c as ue, f as de, n as fe, o as pe, q as me, r as he, s as ge, t as _e, u as ve, yt as ye } from "./TreeViewPlugin-B0UnxNiM.mjs";
import { t as be } from "./useLexicalNodeSelection.prod-CEfV63CR.mjs";
import { t as xe } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import { t as Se } from "./LexicalNestedComposer.prod-C96XUwM-.mjs";
import { Suspense as Ce, useCallback as h, useEffect as g, useMemo as we, useRef as _, useState as v } from "react";
import { Fragment as Te, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/images/image-broken.svg
var x = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%203H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3zm-2%204v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2h2zm-6%202h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2V9zM6%207h2v2H6V7z'%20fill='%23000000'/%3e%3c/svg%3e", S = /* @__PURE__ */ new Map(), Ee = 2, C = f("RIGHT_CLICK_MEDIA_COMMAND");
function De({ setShowCaption: e }) {
	let [t] = u();
	return g(() => t.registerCommand(c, () => (m() && e(!1), !1), 0)), null;
}
function w(e) {
	let t = S.get(e);
	if (t && "error" in t && typeof t.error == "boolean") return t;
	throw t || (t = new Promise((t) => {
		let n = new Image();
		n.src = e, n.onload = () => t({
			error: !1,
			height: n.naturalHeight,
			width: n.naturalWidth
		}), n.onerror = () => t({ error: !0 });
	}).then((t) => (S.set(e, t), t)), S.set(e, t), t);
}
function T(e) {
	return e.toLowerCase().endsWith(".svg");
}
function Oe({ altText: e, className: t, mediaRef: n, src: r, width: i, height: a, maxWidth: o, onError: s }) {
	let c = T(r), l = w(r);
	if (g(() => {
		l.error && s();
	}, [l.error, s]), l.error) return /* @__PURE__ */ y(E, {});
	let ee = (() => {
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
	return /* @__PURE__ */ y("img", {
		className: t || void 0,
		src: r,
		alt: e,
		ref: n,
		style: ee,
		onError: s,
		draggable: "false"
	});
}
function ke({ altText: e, className: t, height: n, maxWidth: r, mediaRef: i, onError: a, src: o, width: s }) {
	return /* @__PURE__ */ y("video", {
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
function Ae({ altText: e, className: t, height: n, maxWidth: r, mediaRef: i, onError: a, src: o, width: s }) {
	return /* @__PURE__ */ y("audio", {
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
function je({ altText: e, className: t, defaultWidth: n, height: r, maxWidth: i, mediaRef: a, src: o, width: s }) {
	return /* @__PURE__ */ y("iframe", {
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
function E() {
	return /* @__PURE__ */ y("img", {
		src: x,
		style: {
			height: 200,
			opacity: .2,
			width: 200
		},
		draggable: "false",
		alt: "Broken image"
	});
}
function D() {}
var O = {
	audio: "mp3",
	image: "png",
	pdf: "pdf",
	video: "mp4"
};
function Me(e, t, n) {
	let r = e.trim().split(/[?#]/)[0];
	if (r !== "" && !/^(?:blob|data):/i.test(r)) {
		let e = r.split(/[\\/]/).pop();
		if (e !== void 0 && e.trim() !== "") return e;
	}
	let i = t.trim();
	return i === "" ? `media.${O[n]}` : i;
}
function Ne({ src: c, mediaType: f, previewSrc: m, altText: x, nodeKey: S, width: w, height: T, maxWidth: O, resizable: Ne, showCaption: k, caption: A, captionsEnabled: Pe }) {
	let j = _(null), M = _(null), [N, P, F] = be(S), [I, L] = v(!1), [R, z] = v(), { revealFile: B } = ye(), [V] = u(), H = _(null), [U, W] = v(!1), Fe = xe(), G = we(() => N && V.getEditorState().read(() => {
		let e = d();
		return r(e) && e.has(S);
	}), [
		V,
		N,
		S
	]), K = h((e) => {
		let n = d(), i = M.current;
		if (r(n) && n.has(S) && n.getNodes().length === 1) {
			if (k) return t(null), e.preventDefault(), A.focus(), !0;
			if (i !== null && i !== document.activeElement) return e.preventDefault(), i.focus(), !0;
		}
		return !1;
	}, [
		A,
		S,
		k
	]), Ie = h((e) => H.current === A || M.current === e.target ? (t(null), V.update(() => {
		P(!0);
		let e = V.getRootElement();
		e !== null && e.focus();
	}), !0) : !1, [
		A,
		V,
		P
	]), q = h((e) => {
		let t = d();
		if (!r(t) || !t.has(S)) return !1;
		let n = !1;
		for (let e of t.getNodes()) p(e) && (e.remove(), n = !0);
		return n && e.preventDefault(), n;
	}, [S]), J = h((e) => {
		let t = e;
		return I ? !0 : t.target === j.current ? ((f === "video" || f === "audio") && t.preventDefault(), t.shiftKey ? P(!N) : (F(), P(!0)), !0) : !1;
	}, [
		I,
		N,
		f,
		P,
		F
	]), Y = h((e) => {
		V.getEditorState().read(() => {
			let t = d();
			e.target === j.current && l(t) && t.getNodes().length === 1 && V.dispatchCommand(C, e);
		});
	}, [V]);
	g(() => s(V.registerCommand(n, (e, t) => (H.current = t, !1), 1), V.registerCommand(te, (e) => e.target === j.current ? (e.preventDefault(), !0) : !1, 1)), [V]), g(() => {
		W(!1);
	}, [
		f,
		m,
		c,
		R
	]), g(() => {
		let e = !0, t;
		return z(void 0), f === "image" || m ? () => {
			e = !1;
		} : (de(c).then((n) => {
			if (n) {
				if (!e) {
					typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(n);
					return;
				}
				t = n, z(n);
			}
		}), () => {
			e = !1, t && typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(t);
		});
	}, [
		f,
		m,
		c
	]), g(() => {
		let e = D;
		return s(V.registerCommand(a, J, 1), V.registerCommand(C, J, 1), V.registerCommand(re, K, 1), V.registerCommand(ne, q, 1), V.registerCommand(o, q, 1), V.registerCommand(ee, Ie, 1), V.registerRootListener((t) => {
			e(), e = D, t && (t.addEventListener("contextmenu", Y), e = () => t.removeEventListener("contextmenu", Y));
		}), () => e());
	}, [
		V,
		q,
		K,
		Ie,
		J,
		Y
	]);
	let Le = (t) => {
		V.update(() => {
			let n = i(S);
			p(n) && (n.setShowCaption(t), t && n.__caption.update(() => {
				d() || e().selectEnd();
			}));
		});
	}, Re = (e, t) => {
		setTimeout(() => {
			L(!1);
		}, 200), V.update(() => {
			let n = i(S);
			p(n) && n.setWidthAndHeight(e, t);
		});
	}, ze = () => {
		L(!0);
	}, { historyState: Be } = ae(), { settings: { showNestedEditorTreeView: Ve } } = ce(), He = G && !I, Ue = (N || I) && Fe, X = Ue ? `focused ${G ? "draggable" : ""}` : null, We = f === "image" || f === "video" || f === "pdf", Z = O * Ee, Q = h((e) => {
		j.current = e;
	}, []), $ = m || R || c, Ge = Me(c, x, f), Ke = B !== void 0 && ve(c) ? B : null;
	return /* @__PURE__ */ y(Ce, {
		fallback: null,
		children: /* @__PURE__ */ b(Te, { children: [
			/* @__PURE__ */ y("div", {
				draggable: He,
				children: U && f === "image" ? /* @__PURE__ */ y(E, {}) : f === "video" ? /* @__PURE__ */ y(ke, {
					className: X,
					src: $,
					altText: x,
					mediaRef: Q,
					width: w,
					height: T,
					maxWidth: Z,
					onError: () => W(!0)
				}) : f === "audio" ? /* @__PURE__ */ y(Ae, {
					className: X,
					src: $,
					altText: x,
					mediaRef: Q,
					width: w,
					height: T,
					maxWidth: O,
					onError: () => W(!0)
				}) : f === "pdf" ? /* @__PURE__ */ y(je, {
					className: X,
					src: $,
					altText: x,
					mediaRef: Q,
					width: w,
					height: T,
					defaultWidth: O,
					maxWidth: Z
				}) : /* @__PURE__ */ y(Oe, {
					className: X,
					src: c,
					altText: x,
					mediaRef: Q,
					width: w,
					height: T,
					maxWidth: Z,
					onError: () => W(!0)
				})
			}),
			G && !I ? /* @__PURE__ */ b("div", {
				className: "media-floating-actions",
				role: "toolbar",
				"aria-label": "Media options",
				children: [/* @__PURE__ */ y("a", {
					className: "media-action-button",
					href: $,
					download: Ge,
					title: "Download media",
					"aria-label": "Download media",
					onClick: (e) => {
						e.stopPropagation();
					},
					children: /* @__PURE__ */ y("i", {
						className: "bi bi-download",
						"aria-hidden": "true"
					})
				}), Ke === null ? null : /* @__PURE__ */ y("button", {
					className: "media-action-button",
					type: "button",
					title: "Reveal media file",
					"aria-label": "Reveal media file",
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), Ke(c);
					},
					children: /* @__PURE__ */ y("i", {
						className: "bi bi-folder2-open",
						"aria-hidden": "true"
					})
				})]
			}) : null,
			k && /* @__PURE__ */ y("div", {
				className: "media-caption-container",
				children: /* @__PURE__ */ b(Se, {
					initialEditor: A,
					children: [
						/* @__PURE__ */ y(De, { setShowCaption: Le }),
						/* @__PURE__ */ y(fe, {}),
						/* @__PURE__ */ y(he, {}),
						/* @__PURE__ */ y(pe, {}),
						/* @__PURE__ */ y(ue, {}),
						/* @__PURE__ */ y(ge, {}),
						/* @__PURE__ */ y(oe, { externalHistoryState: Be }),
						/* @__PURE__ */ y(me, {
							contentEditable: /* @__PURE__ */ y(se, {
								placeholder: "Enter a caption...",
								placeholderClassName: "MediaNode__placeholder",
								className: "MediaNode__contentEditable"
							}),
							ErrorBoundary: ie
						}),
						Ve === !0 ? /* @__PURE__ */ y(_e, {}) : null
					]
				})
			}),
			Ne && We && G && Ue && /* @__PURE__ */ y(le, {
				showCaption: k,
				setShowCaption: Le,
				editor: V,
				buttonRef: M,
				mediaRef: j,
				maxWidth: Z,
				onResizeStart: ze,
				onResizeEnd: Re,
				captionsEnabled: !U && Pe
			})
		] })
	});
}
//#endregion
export { C as RIGHT_CLICK_MEDIA_COMMAND, Ne as default };
