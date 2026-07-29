import { Fr as e, Ht as t, K as n, Yn as r, oi as i, tt as a } from "./Lexical.prod-DYDuARMX.mjs";
import { t as o } from "./useLexicalNodeSelection.prod-CEfV63CR.mjs";
import { n as s, t as c } from "./Button-D0cER-Xl.mjs";
import { i as l, n as u } from "./PollNode-CA5-kzCJ.mjs";
import { useEffect as d, useMemo as f, useRef as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/nodes/PollComponent.tsx
var _ = "You";
function v(e) {
	return e.reduce((e, t) => e + t.votes.length, 0);
}
function y({ option: e, index: t, options: n, totalVotes: r, withPollNode: i }) {
	let a = e.votes.length, o = e.text;
	return /* @__PURE__ */ g("div", {
		className: "PollNode__optionContainer",
		children: [
			/* @__PURE__ */ g("div", {
				className: "PollNode__optionVoteStepper",
				children: [
					/* @__PURE__ */ h("button", {
						type: "button",
						className: s("PollNode__optionVoteButton", a === 0 && "PollNode__optionVoteButtonDisabled"),
						disabled: a === 0,
						"aria-label": "Decrease vote",
						title: "Decrease vote",
						onClick: () => {
							i((t) => {
								t.removeLastVote(e);
							});
						},
						children: /* @__PURE__ */ h("i", {
							className: "bi bi-dash",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ h("span", {
						className: "PollNode__optionVoteCount",
						"aria-label": "Votes",
						children: a
					}),
					/* @__PURE__ */ h("button", {
						type: "button",
						className: "PollNode__optionVoteButton",
						"aria-label": "Increase vote",
						title: "Increase vote",
						onClick: () => {
							i((t) => {
								t.addVote(e, _);
							});
						},
						children: /* @__PURE__ */ h("i", {
							className: "bi bi-plus",
							"aria-hidden": "true"
						})
					})
				]
			}),
			/* @__PURE__ */ g("div", {
				className: "PollNode__optionInputWrapper",
				children: [
					/* @__PURE__ */ h("div", {
						className: "PollNode__optionInputVotes",
						style: { width: `${a === 0 ? 0 : a / r * 100}%` }
					}),
					/* @__PURE__ */ h("span", {
						className: "PollNode__optionInputVotesCount",
						children: a > 0 && (a === 1 ? "1 vote" : `${a} votes`)
					}),
					/* @__PURE__ */ h("input", {
						className: "PollNode__optionInput",
						type: "text",
						value: o,
						onChange: (t) => {
							let n = t.target, r = n.value, a = n.selectionStart, o = n.selectionEnd;
							i((t) => {
								t.setOptionText(e, r);
							}, () => {
								n.selectionStart = a, n.selectionEnd = o;
							});
						},
						placeholder: `Option ${t + 1}`
					})
				]
			}),
			/* @__PURE__ */ h("button", {
				disabled: n.length < 3,
				className: s("PollNode__optionDelete", n.length < 3 && "PollNode__optionDeleteDisabled"),
				"aria-label": "Remove",
				onClick: () => {
					i((t) => {
						t.deleteOption(e);
					});
				}
			})
		]
	});
}
function b({ question: s, options: _, nodeKey: b }) {
	let [x] = i(), S = f(() => v(_), [_]), [C, w, T] = o(b), [E, D] = m(null), O = p(null);
	d(() => r(x.registerUpdateListener(({ editorState: e }) => {
		D(e.read(() => a()));
	}), x.registerCommand(n, (e) => {
		let t = e;
		return t.target === O.current ? (t.shiftKey || T(), w(!C), !0) : !1;
	}, 1)), [
		T,
		x,
		C,
		b,
		w
	]);
	let k = (e, n) => {
		x.update(() => {
			let n = t(b);
			u(n) && e(n);
		}, { onUpdate: n });
	};
	return /* @__PURE__ */ h("div", {
		className: `PollNode__container ${e(E) && C ? "focused" : ""}`,
		ref: O,
		children: /* @__PURE__ */ g("div", {
			className: "PollNode__inner",
			children: [
				/* @__PURE__ */ h("h2", {
					className: "PollNode__heading",
					children: s
				}),
				_.map((e, t) => {
					let n = e.uid;
					return /* @__PURE__ */ h(y, {
						withPollNode: k,
						option: e,
						index: t,
						options: _,
						totalVotes: S
					}, n);
				}),
				/* @__PURE__ */ h("div", {
					className: "PollNode__footer",
					children: /* @__PURE__ */ h(c, {
						onClick: () => {
							k((e) => {
								e.addOption(l());
							});
						},
						small: !0,
						children: "Add Option"
					})
				})
			]
		})
	});
}
//#endregion
export { b as default };
