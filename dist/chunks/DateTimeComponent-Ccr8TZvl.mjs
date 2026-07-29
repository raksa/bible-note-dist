import { Ht as e, oi as t } from "./Lexical.prod-DYDuARMX.mjs";
import { t as n } from "./useLexicalNodeSelection.prod-CEfV63CR.mjs";
import { a as r, c as i, d as a, i as o, n as s, o as c, r as l, t as u } from "./floating-ui.react-Bgfg9664.mjs";
import { a as d, l as f, n as p, o as m } from "./floating-ui.react-dom-BeZWIt74.mjs";
import { useCallback as h, useEffect as g, useMemo as _, useRef as v, useState as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/utils/dateMath.ts
function S(e, t) {
	let n = new Date(e.getTime());
	return n.setHours(t), n;
}
function C(e, t) {
	let n = new Date(e.getTime());
	return n.setMinutes(t), n;
}
function w(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function T(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function E(e) {
	return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function D(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = E(n).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function O(e, t) {
	let n = new Date(e.getTime());
	return n.setDate(n.getDate() + t), n;
}
function k(e, t = 0) {
	let n = w(e);
	return O(n, -((n.getDay() - t + 7) % 7));
}
function A(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function j(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
function M(e, t) {
	let n = e.getFullYear() * 12 + e.getMonth(), r = t.getFullYear() * 12 + t.getMonth();
	return n === r ? 0 : n < r ? -1 : 1;
}
function N(e, t, n) {
	return M(e, t) < 0 ? T(t) : M(e, n) > 0 ? T(n) : T(e);
}
//#endregion
//#region src/ui/DatePicker/index.tsx
var P = 7, F = 6, I = "en-US", L = new Intl.DateTimeFormat(I, { month: "long" }), R = new Intl.DateTimeFormat(I, { weekday: "short" }), z = new Intl.DateTimeFormat(I, { weekday: "long" }), B = new Intl.DateTimeFormat(I, {
	day: "numeric",
	month: "long",
	year: "numeric"
}), V = {
	down: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72",
	left: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20",
	right: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"
};
function H({ orientation: e, size: t = 24 }) {
	return /* @__PURE__ */ b("svg", {
		"aria-hidden": "true",
		className: "rdp-chevron",
		height: t,
		viewBox: "0 0 24 24",
		width: t,
		children: /* @__PURE__ */ b("polygon", { points: V[e] })
	});
}
function U(e, t) {
	let n = k(T(e)), r = E(e), i = Math.round((w(r).getTime() - n.getTime()) / 864e5) + 1, a = t ? F : Math.ceil(i / P);
	return Array.from({ length: a }, (t, r) => Array.from({ length: P }, (t, i) => {
		let a = O(n, r * P + i);
		return {
			date: a,
			isOutside: !j(a, e)
		};
	}));
}
function W({ captionLayout: e = "label", endMonth: t, fixedWeeks: n = !1, navLayout: r, onSelect: i, required: a = !1, selected: o, showOutsideDays: s = !1, startMonth: c }) {
	let l = _(() => T(c), [c]), u = _(() => T(t), [t]), [d, f] = y(() => N(o ?? /* @__PURE__ */ new Date(), l, u)), [p, m] = y(null), S = v(null), C = v(!1), E = _(() => w(/* @__PURE__ */ new Date()), []), F = _(() => U(d, n), [d, n]), I = M(d, l) > 0, V = M(d, u) < 0, W = h((e) => M(e, l) < 0 || M(e, u) > 0, [l, u]), G = _(() => p !== null && j(p, d) ? p : o !== void 0 && j(o, d) ? w(o) : j(E, d) ? E : T(d), [
		d,
		p,
		o,
		E
	]);
	g(() => {
		!C.current || S.current === null || (C.current = !1, S.current.querySelector(".rdp-day_button[tabindex=\"0\"]")?.focus());
	}, [G]);
	let K = h((e) => {
		f(N(e, l, u));
	}, [l, u]), q = h((e) => {
		W(e) || (C.current = !0, m(e), j(e, d) || K(e));
	}, [
		d,
		K,
		W
	]), J = h((e, t) => {
		let n = {
			ArrowDown: () => O(t, P),
			ArrowLeft: () => O(t, -1),
			ArrowRight: () => O(t, 1),
			ArrowUp: () => O(t, -7),
			End: () => O(k(t), P - 1),
			Home: () => k(t),
			PageDown: () => D(t, 1),
			PageUp: () => D(t, -1)
		}[e.key];
		n !== void 0 && (e.preventDefault(), q(n()));
	}, [q]), Y = h((e) => {
		if (m(e), !a && o !== void 0 && A(o, e)) {
			i(void 0);
			return;
		}
		i(e);
	}, [
		i,
		a,
		o
	]), X = _(() => {
		let e = d.getFullYear(), t = e === l.getFullYear() ? l.getMonth() : 0, n = e === u.getFullYear() ? u.getMonth() : 11;
		return Array.from({ length: n - t + 1 }, (e, n) => t + n);
	}, [
		d,
		l,
		u
	]), Z = _(() => {
		let e = l.getFullYear(), t = u.getFullYear();
		return Array.from({ length: t - e + 1 }, (t, n) => e + n);
	}, [l, u]), Q = _(() => {
		let e = k(/* @__PURE__ */ new Date());
		return Array.from({ length: P }, (t, n) => O(e, n));
	}, []), $ = `${L.format(d)} ${d.getFullYear()}`;
	return /* @__PURE__ */ b("div", {
		className: "rdp-root",
		"data-nav-layout": r,
		role: "application",
		children: /* @__PURE__ */ b("div", {
			className: "rdp-months",
			children: /* @__PURE__ */ x("div", {
				className: "rdp-month",
				children: [
					/* @__PURE__ */ b("div", {
						className: "rdp-month_caption",
						children: e === "dropdown" ? /* @__PURE__ */ x("div", {
							className: "rdp-dropdowns",
							children: [/* @__PURE__ */ x("span", {
								className: "rdp-dropdown_root",
								children: [/* @__PURE__ */ b("select", {
									"aria-label": "Month",
									className: "rdp-dropdown",
									onChange: (e) => {
										K(new Date(d.getFullYear(), Number(e.target.value), 1));
									},
									value: d.getMonth(),
									children: X.map((e) => /* @__PURE__ */ b("option", {
										value: e,
										children: L.format(new Date(d.getFullYear(), e, 1))
									}, e))
								}), /* @__PURE__ */ x("span", {
									"aria-hidden": "true",
									className: "rdp-caption_label",
									children: [L.format(d), /* @__PURE__ */ b(H, {
										orientation: "down",
										size: 18
									})]
								})]
							}), /* @__PURE__ */ x("span", {
								className: "rdp-dropdown_root",
								children: [/* @__PURE__ */ b("select", {
									"aria-label": "Year",
									className: "rdp-dropdown",
									onChange: (e) => {
										K(new Date(Number(e.target.value), d.getMonth(), 1));
									},
									value: d.getFullYear(),
									children: Z.map((e) => /* @__PURE__ */ b("option", {
										value: e,
										children: e
									}, e))
								}), /* @__PURE__ */ x("span", {
									"aria-hidden": "true",
									className: "rdp-caption_label",
									children: [d.getFullYear(), /* @__PURE__ */ b(H, {
										orientation: "down",
										size: 18
									})]
								})]
							})]
						}) : /* @__PURE__ */ b("span", {
							className: "rdp-caption_label",
							children: $
						})
					}),
					/* @__PURE__ */ x("nav", {
						className: "rdp-nav",
						children: [/* @__PURE__ */ b("button", {
							"aria-label": "Go to the previous month",
							className: "rdp-button_previous",
							disabled: !I,
							onClick: () => {
								K(D(d, -1));
							},
							type: "button",
							children: /* @__PURE__ */ b(H, {
								orientation: "left",
								size: 18
							})
						}), /* @__PURE__ */ b("button", {
							"aria-label": "Go to the next month",
							className: "rdp-button_next",
							disabled: !V,
							onClick: () => {
								K(D(d, 1));
							},
							type: "button",
							children: /* @__PURE__ */ b(H, {
								orientation: "right",
								size: 18
							})
						})]
					}),
					/* @__PURE__ */ x("table", {
						"aria-label": $,
						className: "rdp-month_grid",
						ref: S,
						role: "grid",
						children: [/* @__PURE__ */ b("thead", { children: /* @__PURE__ */ b("tr", {
							className: "rdp-weekdays",
							children: Q.map((e) => /* @__PURE__ */ b("th", {
								abbr: z.format(e),
								className: "rdp-weekday",
								scope: "col",
								children: R.format(e)
							}, e.getDay()))
						}) }), /* @__PURE__ */ b("tbody", {
							className: "rdp-weeks",
							children: F.map((e) => /* @__PURE__ */ b("tr", {
								className: "rdp-week",
								children: e.map(({ date: e, isOutside: t }) => {
									if (t && !s) return /* @__PURE__ */ b("td", {
										className: "rdp-day",
										role: "gridcell"
									}, e.getTime());
									let n = o !== void 0 && A(o, e), r = A(E, e), i = W(e);
									return /* @__PURE__ */ b("td", {
										"aria-selected": n,
										className: [
											"rdp-day",
											n ? "rdp-selected" : "",
											r ? "rdp-today" : "",
											t ? "rdp-outside" : "",
											i ? "rdp-disabled" : ""
										].filter(Boolean).join(" "),
										role: "gridcell",
										children: /* @__PURE__ */ b("button", {
											"aria-label": B.format(e),
											className: "rdp-day_button",
											disabled: i,
											onClick: () => {
												Y(e);
											},
											onKeyDown: (t) => {
												J(t, e);
											},
											tabIndex: A(G, e) ? 0 : -1,
											type: "button",
											children: e.getDate()
										})
									}, e.getTime());
								})
							}, e[0].date.getTime()))
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/nodes/DateTimeNode/DateTimeComponent.tsx
var G = Intl.DateTimeFormat().resolvedOptions().timeZone;
function K({ dateTime: h, nodeKey: _ }) {
	let [w] = t(), [T, E] = y(!1), D = v(null), [O, k] = y(h), [A, j] = y(() => {
		if (h === void 0) return !1;
		let e = h?.getHours(), t = h?.getMinutes();
		return e !== 0 || t !== 0;
	}), [M, N] = y(() => {
		if (h === void 0) return "00:00";
		let e = h?.getHours(), t = h?.getMinutes();
		return e !== 0 || t !== 0 ? `${e?.toString().padStart(2, "0")}:${t?.toString().padStart(2, "0")}` : "00:00";
	}), [P, F, I] = n(_), { refs: L, floatingStyles: R, context: z } = r({
		elements: { reference: D.current },
		middleware: [
			d(5),
			p({ fallbackPlacements: ["top-start"] }),
			m({ padding: 10 })
		],
		onOpenChange: E,
		open: T,
		placement: "bottom-start",
		strategy: "fixed",
		whileElementsMounted: f
	}), { getFloatingProps: B } = c([i(z, { role: "dialog" }), o(z)]);
	g(() => {
		let e = D.current;
		function t(e) {
			e.preventDefault(), E(!0);
		}
		return e && e.addEventListener("click", t), () => {
			e && e.removeEventListener("click", t);
		};
	}, [L, w]);
	let V = (t, n) => {
		w.update(() => {
			let n = e(_);
			a(n) && t(n);
		}, { onUpdate: n });
	}, H = (e) => {
		V((t) => {
			if (e.target.checked) j(!0);
			else {
				if (O) {
					let e = S(C(O, 0), 0);
					t.setDateTime(e);
				}
				j(!1), N("00:00");
			}
		});
	}, U = (e) => {
		V((t) => {
			let n = e.target.value;
			if (!O) {
				N(n);
				return;
			}
			let [r, i] = n.split(":").map((e) => parseInt(e, 10)), a = S(C(O, i), r);
			k(a), t.setDateTime(a), N(n);
		});
	}, K = (e) => {
		V((t) => {
			if (!M || !e) {
				k(e);
				return;
			}
			let [n, r] = M.split(":").map((e) => parseInt(e, 10)), i = new Date(e.getFullYear(), e.getMonth(), e.getDate(), n, r);
			t.setDateTime(i), k(i);
		});
	};
	return /* @__PURE__ */ x("div", {
		className: `dateTimePill ${P ? "selected" : ""}`,
		"data-test-id": "datetime-pill",
		ref: D,
		children: [h?.toDateString() + (A ? " " + M : "") || "Invalid Date", T && /* @__PURE__ */ b(l, { children: /* @__PURE__ */ b(s, {
			lockScroll: !0,
			children: /* @__PURE__ */ b(u, {
				context: z,
				initialFocus: -1,
				modal: !1,
				children: /* @__PURE__ */ x("div", {
					className: "dateTimePicker",
					"data-test-id": "datetime-picker",
					ref: L.setFloating,
					style: R,
					...B(),
					children: [/* @__PURE__ */ b(W, {
						captionLayout: "dropdown",
						navLayout: "after",
						fixedWeeks: !1,
						showOutsideDays: !1,
						mode: "single",
						selected: O,
						required: !0,
						onSelect: K,
						startMonth: new Date(1925, 0),
						endMonth: new Date(2042, 7)
					}), /* @__PURE__ */ b("form", {
						className: "dateTimePicker__timeForm",
						children: /* @__PURE__ */ x("div", {
							className: "dateTimePicker__timeRow",
							children: [
								/* @__PURE__ */ b("input", {
									className: "dateTimePicker__checkbox",
									type: "checkbox",
									"aria-label": "Include time",
									"data-test-id": "datetime-include-time",
									checked: A,
									onChange: H
								}),
								/* @__PURE__ */ b("input", {
									className: "dateTimePicker__timeInput",
									type: "time",
									"aria-label": "Time",
									"data-test-id": "datetime-time-input",
									value: M,
									onChange: U,
									disabled: !A
								}),
								/* @__PURE__ */ b("span", {
									className: "dateTimePicker__timezone",
									children: G
								})
							]
						})
					})]
				})
			})
		}) })]
	});
}
//#endregion
export { K as default };
