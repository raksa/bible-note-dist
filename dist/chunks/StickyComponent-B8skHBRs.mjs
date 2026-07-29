import { En as e, Ht as t, ft as n, oi as r, pt as i } from "./Lexical.prod-DYDuARMX.mjs";
import { N as a, a as o, n as s, o as c, r as l, t as u } from "./ContentEditable-C_wyHFh1.mjs";
import { a as d, i as f, n as p, s as m } from "./StickyNode-B2B6di-N.mjs";
import { t as h } from "./useLexicalEditable.prod-CgMasHPY.mjs";
import { t as g } from "./LexicalNestedComposer.prod-C96XUwM-.mjs";
import { useCallback as _, useEffect as v, useLayoutEffect as y, useRef as b, useState as x } from "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
//#region src/themes/StickyEditorTheme.ts
var w = {
	...f,
	paragraph: "StickyEditorTheme__paragraph"
}, T = 4;
function E(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function D(e, t) {
	let n = e.style, r = O(e, t, t.x, t.y);
	t.x = r.x, t.y = r.y, n.top = t.y + "px", n.left = t.x + "px";
}
function O(e, t, n, r) {
	let i = t.positioningFrameRect;
	if (i === null) return {
		x: n,
		y: r
	};
	let a = s(e), o = e.getBoundingClientRect(), c = i.width / a, l = i.height / a, u = o.width / a, d = o.height / a;
	return {
		x: E(n, 0, Math.max(0, c - u)),
		y: E(r, 0, Math.max(0, l - d))
	};
}
function k(e, t, n, r, i) {
	let a = n.positioningFrameRect;
	if (a === null) return {
		height: Math.round(Math.max(80, i)),
		width: Math.round(Math.max(120, r))
	};
	let o = s(t), c = e.getBoundingClientRect(), l = t.getBoundingClientRect(), u = a.width / o, d = a.height / o, f = Math.max(0, (c.width - l.width) / o), p = Math.max(0, (c.height - l.height) / o), m = Math.max(120, u - n.x - f), h = Math.max(80, d - n.y - p);
	return {
		height: Math.round(E(i, 80, h)),
		width: Math.round(E(r, 120, m))
	};
}
function A(e) {
	let t = e.getRootElement();
	return t === null ? null : t.closest(".editor-scroller") ?? t;
}
function j(e) {
	let t = Number.parseInt(e.style.zIndex, 10);
	if (Number.isFinite(t)) return t;
	let n = Number.parseInt(window.getComputedStyle(e).zIndex, 10);
	return Number.isFinite(n) ? n : 9;
}
function ee(e) {
	let t = e.parentElement ?? document.body;
	return Array.from(t.querySelectorAll(".sticky-note-container")).reduce((e, t) => Math.max(e, j(t)), 9) + 1;
}
function M({ x: s, y: f, nodeKey: E, color: O, caption: j, width: M, height: N, extraFontFamilies: P, layer: F = 0 }) {
	let [I] = r(), L = h(), R = m(), z = P ?? R, [B, V] = x(null), H = b(null), U = b(null), W = b({
		hasMoved: !1,
		isDragging: !1,
		pointerId: null,
		positioningFrameRect: null,
		startLocalX: 0,
		startLocalY: 0,
		startX: 0,
		startY: 0,
		x: 0,
		y: 0
	}), G = b({
		hasMoved: !1,
		height: N,
		isResizing: !1,
		pointerId: null,
		startClientX: 0,
		startClientY: 0,
		startHeight: N,
		startWidth: M,
		width: M
	}), K = _(() => {
		if (!L) {
			let e = H.current;
			e !== null && V(ee(e));
			return;
		}
		I.update(() => {
			i(n), e(null);
			let r = t(E);
			p(r) && r.bringToFront();
		});
	}, [
		I,
		L,
		E
	]);
	v(() => {
		L && V(null);
	}, [L, F]), v(() => j.registerUpdateListener(() => {
		I.update(() => {
			let e = t(E);
			p(e) && e.markCaptionChanged();
		});
	}), [
		j,
		I,
		E
	]), y(() => {
		let e = W.current;
		e.x = s, e.y = f;
		let t = H.current;
		t !== null && D(t, e);
	}, [s, f]), v(() => {
		let e = G.current;
		e.width = M, e.height = N;
	}, [M, N]);
	let q = _(() => {
		let e = A(I), t = W.current;
		return e !== null && (t.positioningFrameRect = e.getBoundingClientRect()), t.positioningFrameRect;
	}, [I]), J = (e, n) => {
		I.update(() => {
			let r = t(E);
			p(r) && r.setSize(e, n);
		});
	}, Y = (e, t) => {
		let n = H.current, r = U.current, i = W.current;
		if (n === null || r === null) return null;
		let a = k(n, r, i, e, t), o = G.current;
		return r.style.width = `${a.width}px`, r.style.height = `${a.height}px`, o.width = a.width, o.height = a.height, D(n, i), a;
	};
	y(() => {
		let e = W.current, t = null, n = new ResizeObserver((t) => {
			for (let n = 0; n < t.length; n++) {
				let { target: r } = t[n];
				e.positioningFrameRect = r.getBoundingClientRect();
				let i = H.current;
				i !== null && D(i, e);
			}
		}), r = () => {
			t !== null && n.unobserve(t);
			let r = A(I);
			t = r, r === null ? e.positioningFrameRect = null : (e.positioningFrameRect = r.getBoundingClientRect(), n.observe(r));
			let i = H.current;
			i !== null && D(i, e);
		}, i = I.registerRootListener((e) => {
			if (e !== null) {
				r();
				return;
			}
			t !== null && (n.unobserve(t), t = null);
		}), a = () => {
			let t = I.getRootElement(), n = H.current;
			t !== null && n !== null && (q(), D(n, e));
		};
		return window.addEventListener("resize", a), () => {
			window.removeEventListener("resize", a), i();
		};
	}, [I, q]), v(() => {
		let e = H.current;
		e !== null && setTimeout(() => {
			e.style.setProperty("transition", "top 0.3s ease 0s, left 0.3s ease 0s");
		}, 500);
	}, []);
	let X = (e) => {
		let t = H.current, n = W.current, r = n.positioningFrameRect, i = l(t);
		if (n.pointerId === e.pointerId && t !== null && n.isDragging && r !== null) {
			let r = e.clientX - n.startX, a = e.clientY - n.startY;
			if (!n.hasMoved) {
				if (Math.abs(r) + Math.abs(a) < T) return;
				n.hasMoved = !0, t.classList.add("dragging");
			}
			n.x = n.startLocalX + r / i, n.y = n.startLocalY + a / i, D(t, n), e.preventDefault();
		}
	}, Z = (e) => {
		let n = H.current, r = W.current;
		r.pointerId === e.pointerId && (n !== null && (r.isDragging = !1, r.pointerId = null, r.hasMoved = !1, n.classList.remove("dragging"), I.update(() => {
			let e = t(E);
			p(e) && e.setPosition(r.x, r.y);
		})), e.preventDefault(), document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", Z), document.removeEventListener("pointercancel", Z));
	}, Q = (e) => {
		let t = H.current, n = U.current, r = G.current, i = l(n);
		if (r.pointerId === e.pointerId && t !== null && n !== null && r.isResizing) {
			let t = e.clientX - r.startClientX, a = e.clientY - r.startClientY;
			if (!r.hasMoved) {
				if (Math.abs(t) + Math.abs(a) < T) return;
				r.hasMoved = !0, n.classList.add("resizing");
			}
			Y(r.startWidth + t / i, r.startHeight + a / i), e.preventDefault();
		}
	}, te = () => {
		let e = G.current, t = Y(e.width * 1.12, e.height * 1.12);
		t !== null && J(t.width, t.height);
	}, $ = (e) => {
		let t = U.current, n = G.current;
		if (n.pointerId !== e.pointerId) return;
		let r = n.hasMoved;
		if (t !== null && (n.isResizing = !1, n.pointerId = null, n.hasMoved = !1, t.classList.remove("resizing")), e.preventDefault(), document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", $), document.removeEventListener("pointercancel", $), !r) {
			te();
			return;
		}
		J(n.width, n.height);
	}, ne = () => {
		I.update(() => {
			let e = t(E);
			p(e) && e.remove();
		});
	}, re = () => {
		I.update(() => {
			let e = t(E);
			p(e) && e.toggleColor();
		});
	}, { historyState: ie } = o();
	return /* @__PURE__ */ S("div", {
		ref: H,
		className: "sticky-note-container",
		style: { zIndex: B ?? 9 + F },
		children: /* @__PURE__ */ C("div", {
			ref: U,
			className: `sticky-note ${O}`,
			style: {
				height: N,
				width: M,
				fontFamily: [
					"\"Indie Flower\"",
					...z,
					"cursive"
				].join(", ")
			},
			onFocus: K,
			onPointerDownCapture: K,
			onPointerDown: (e) => {
				let t = H.current;
				if (t == null || e.button === 2 || e.target !== t.firstChild) return;
				let n = t, r = W.current;
				n !== null && (q(), r.startLocalX = r.x, r.startLocalY = r.y, r.pointerId = e.pointerId, r.startX = e.clientX, r.startY = e.clientY, r.hasMoved = !1, r.isDragging = !0, document.addEventListener("pointermove", X), document.addEventListener("pointerup", Z), document.addEventListener("pointercancel", Z), e.preventDefault());
			},
			children: [
				/* @__PURE__ */ C("div", {
					className: "top-right-buttons",
					children: [/* @__PURE__ */ S("button", {
						onClick: re,
						"aria-label": "Change sticky note color",
						title: "Color",
						children: /* @__PURE__ */ S("i", { className: "bi bi-paint-bucket" })
					}), /* @__PURE__ */ S("button", {
						onClick: ne,
						"aria-label": "Delete sticky note",
						title: "Delete",
						children: /* @__PURE__ */ S("i", {
							className: "bi bi-x-lg",
							style: { color: "red" }
						})
					})]
				}),
				/* @__PURE__ */ S("button", {
					className: "resize",
					"aria-label": "Resize sticky note",
					title: "Resize",
					onPointerDown: (e) => {
						if (U.current === null || e.button === 2) return;
						q();
						let t = G.current;
						t.isResizing = !0, t.pointerId = e.pointerId, t.hasMoved = !1, t.startClientX = e.clientX, t.startClientY = e.clientY, t.startWidth = t.width, t.startHeight = t.height, document.addEventListener("pointermove", Q), document.addEventListener("pointerup", $), document.addEventListener("pointercancel", $), e.preventDefault(), e.stopPropagation();
					},
					children: /* @__PURE__ */ S("i", { className: "bi bi-arrow-down-right" })
				}),
				/* @__PURE__ */ C(g, {
					initialEditor: j,
					initialTheme: w,
					children: [/* @__PURE__ */ S(c, { externalHistoryState: ie }), /* @__PURE__ */ S(d, {
						contentEditable: /* @__PURE__ */ S(u, {
							placeholder: "What's up?",
							placeholderClassName: "StickyNode__placeholder",
							className: "StickyNode__contentEditable"
						}),
						ErrorBoundary: a
					})]
				})
			]
		})
	});
}
//#endregion
export { M as default };
