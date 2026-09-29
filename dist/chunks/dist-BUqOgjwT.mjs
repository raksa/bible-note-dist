import { t as e } from "./rolldown-runtime-DY7j01NX.mjs";
import { n as t } from "./chunk-Y2CYZVJY-i11wjrBe.mjs";
import { h as n, m as r, p as i } from "./src-2xth9_dM.mjs";
import { $ as a, C as o, E as s, I as c, L as l, N as u, P as d, Q as f, S as p, T as m, V as h, W as g, X as _, Z as v, _ as y, b, c as x, g as S, l as C, m as w, n as ee, p as te, q as ne, r as T, t as re, u as ie } from "./chunk-WYO6CB5R-rKfzh8he.mjs";
import { S as ae, a as oe, f as E, g as se, h as ce, i as le, o as ue, v as de, x as fe, y as pe } from "./chunk-ICXQ74PX-9Av5LG2G.mjs";
import { t as me } from "./chunk-VAUOI2AC-Cf6P8Ev3.mjs";
import { n as he, t as ge } from "./chunk-ZIRB5QZD-BAvjtztQ.mjs";
import "./chunk-C7G6YPKG-B3D_MH_b.mjs";
import "./chunk-OGEWGWER-BdGOGaWq.mjs";
import { r as _e } from "./chunk-HOUHSVGY-D1hJvSZT.mjs";
import { r as ve } from "./chunk-Q4XR5HBZ-CRTd8BXa.mjs";
import "./chunk-ZGVPDNZ5-OCtlC_EH.mjs";
import "./chunk-7BUUIJ7U-kGeHtKrI.mjs";
import "./chunk-52WLFC77-LGwcLJhJ.mjs";
import { n as ye } from "./chunk-FWX5IMBZ-CO4SWj_7.mjs";
var be = {
	rect: "rectangle",
	circle: "ellipse"
}, xe = {
	startOnLoad: !1,
	flowchart: { curve: "linear" },
	themeVariables: { fontSize: "20px" },
	maxEdges: 500,
	maxTextSize: 5e4
}, D = class {
	constructor({ converter: e }) {
		this.convert = (e, t) => this.converter(e, {
			...t,
			fontSize: t.fontSize || 20
		}), this.converter = e;
	}
}, O;
(function(e) {
	e.ROUND = "round", e.STADIUM = "stadium", e.DOUBLECIRCLE = "doublecircle", e.CIRCLE = "circle", e.DIAMOND = "diamond", e.CYLINDER = "cylinder";
})(O ||= {});
var k;
(function(e) {
	e.COLOR = "color";
})(k ||= {});
var A;
(function(e) {
	e.FILL = "fill", e.STROKE = "stroke", e.STROKE_WIDTH = "stroke-width", e.STROKE_DASHARRAY = "stroke-dasharray";
})(A ||= {});
//#endregion
//#region node_modules/@excalidraw/mermaid-to-excalidraw/dist/converter/helpers.js
var Se = (/* @__PURE__ */ e(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.removeMarkdown = void 0, e.removeMarkdown = function(e, t) {
		t === void 0 && (t = { listUnicodeChar: "" }), t ||= {}, t.listUnicodeChar = t.hasOwnProperty("listUnicodeChar") ? t.listUnicodeChar : !1, t.stripListLeaders = !t.hasOwnProperty("stripListLeaders") || t.stripListLeaders, t.gfm = !t.hasOwnProperty("gfm") || t.gfm, t.useImgAltText = !t.hasOwnProperty("useImgAltText") || t.useImgAltText, t.preserveLinks = t.hasOwnProperty("preserveLinks") ? t.preserveLinks : !1;
		var n = e || "";
		n = n.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
		try {
			t.stripListLeaders && (n = t.listUnicodeChar ? n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, t.listUnicodeChar + " $1") : n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")), t.gfm && (n = n.replace(/\n={2,}/g, "\n").replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "")), t.preserveLinks && (n = n.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")), n = n.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, t.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, "\n\n").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, "\n\n");
		} catch (t) {
			return console.error(t), e;
		}
		return n;
	};
})))(), Ce = {
	arrow_circle: { endArrowhead: "circle" },
	arrow_cross: { endArrowhead: "bar" },
	arrow_open: {
		endArrowhead: null,
		startArrowhead: null
	},
	double_arrow_circle: {
		endArrowhead: "circle",
		startArrowhead: "circle"
	},
	double_arrow_cross: {
		endArrowhead: "bar",
		startArrowhead: "bar"
	},
	double_arrow_point: {
		endArrowhead: "arrow",
		startArrowhead: "arrow"
	}
}, we = (e) => Ce[e], Te = (e) => {
	let t = e.text;
	return e.labelType === "markdown" && (t = (0, Se.removeMarkdown)(e.text)), Ee(t);
}, Ee = (e) => e.replace(/\s?(fa|fab):[a-zA-Z0-9-]+/g, ""), De = (e) => {
	let t = {};
	return Object.keys(e).forEach((n) => {
		switch (n) {
			case A.FILL:
				t.backgroundColor = e[n], t.fillStyle = "solid";
				break;
			case A.STROKE:
				t.strokeColor = e[n];
				break;
			case A.STROKE_WIDTH:
				t.strokeWidth = Number(e[n]?.split("px")[0]);
				break;
			case A.STROKE_DASHARRAY:
				t.strokeStyle = "dashed";
				break;
		}
	}), t;
}, Oe = (e) => {
	let t = {};
	return Object.keys(e).forEach((n) => {
		switch (n) {
			case k.COLOR:
				t.strokeColor = e[n];
				break;
		}
	}), t;
}, ke = (e, t) => [e, t], Ae = 32, je = .62, Me = 12, Ne = 12, Pe = (e, t) => Math.max(20, Math.ceil(e.length * t * je)), Fe = (e, t, n, r) => {
	let i = r || 20;
	if (e !== O.CYLINDER || !t || t.includes("\n")) return i;
	let a = Math.max(20, n - Me);
	return Pe(t, i) <= a ? i : Math.max(Ne, Math.floor(a / (t.length * je)));
}, Ie = (e) => {
	let t = {};
	e.subGraphs.map((n) => {
		n.nodeIds.forEach((r) => {
			t[n.id] = {
				id: n.id,
				parent: null,
				isLeaf: !1
			}, t[r] = {
				id: r,
				parent: n.id,
				isLeaf: e.vertices[r] !== void 0
			};
		});
	});
	let n = {};
	return [...Object.keys(e.vertices), ...e.subGraphs.map((e) => e.id)].forEach((e) => {
		if (!t[e]) return;
		let r = t[e], i = [];
		for (r.isLeaf || i.push(`subgraph_group_${r.id}`); r.parent;) i.push(`subgraph_group_${r.parent}`), r = t[r.parent];
		n[e] = i;
	}), {
		getGroupIds: (e) => n[e] || [],
		getParentId: (e) => t[e] ? t[e].parent : null
	};
}, Le = new D({ converter: (e, t) => {
	let n = [], r = t.fontSize, { getGroupIds: i, getParentId: a } = Ie(e);
	return e.subGraphs.reverse().forEach((e) => {
		let t = i(e.id), a = Te(e), o = Pe(a, r || 16) + Ae * 2, s = Math.max(e.width, o), c = e.x - (s - e.width) / 2, l = De(e.containerStyle), u = Oe(e.labelStyle), d = {
			id: e.id,
			type: "rectangle",
			groupIds: t,
			x: c,
			y: e.y,
			width: s,
			height: e.height,
			label: {
				groupIds: t,
				text: a,
				fontSize: r,
				verticalAlign: "top",
				...u
			},
			...l
		};
		n.push(d);
	}), Object.values(e.vertices).forEach((e) => {
		if (!e) return;
		let t = i(e.id), a = Te(e), o = Fe(e.type, a, e.width, r), s = De(e.containerStyle), c = Oe(e.labelStyle), l = {
			id: e.id,
			type: "rectangle",
			groupIds: t,
			x: e.x,
			y: e.y,
			width: e.width,
			height: e.height,
			strokeWidth: 2,
			label: {
				groupIds: t,
				text: a,
				fontSize: o,
				...c
			},
			link: e.link || null,
			...s
		};
		switch (e.type) {
			case O.STADIUM:
				l = {
					...l,
					roundness: { type: 3 }
				};
				break;
			case O.ROUND:
				l = {
					...l,
					roundness: { type: 3 }
				};
				break;
			case O.DOUBLECIRCLE: {
				t.push(`doublecircle_${e.id}}`);
				let r = {
					type: "ellipse",
					groupIds: t,
					x: e.x + 5,
					y: e.y + 5,
					width: e.width - 10,
					height: e.height - 10,
					strokeWidth: 2,
					roundness: { type: 3 },
					label: {
						groupIds: t,
						text: a,
						fontSize: o,
						...c
					}
				};
				l = {
					...l,
					groupIds: t,
					type: "ellipse"
				}, n.push(r);
				break;
			}
			case O.CIRCLE:
				l.type = "ellipse";
				break;
			case O.DIAMOND:
				l.type = "diamond";
				break;
		}
		n.push(l);
	}), e.edges.forEach((e) => {
		let t = [], o = a(e.start), s = a(e.end);
		o && o === s && (t = i(o));
		let { startX: c, startY: l, reflectionPoints: u } = e, d = u.map((e) => ke(e.x - u[0].x, e.y - u[0].y)), f = we(e.type || "arrow_point"), p = n.find((t) => t.id === e.start), m = n.find((t) => t.id === e.end);
		if (!p || !m) return;
		let h = {
			id: `${e.start}_${e.end}`,
			type: "arrow",
			groupIds: t,
			x: c,
			y: l,
			strokeWidth: e.stroke === "thick" ? 4 : 2,
			strokeStyle: e.stroke === "dotted" ? "dashed" : void 0,
			points: d,
			...e.text ? { label: {
				text: Te(e),
				fontSize: r,
				groupIds: t
			} } : {},
			roundness: { type: 2 },
			...f,
			start: { id: p.id || "" },
			end: { id: m.id || "" }
		};
		n.push(h);
	}), { elements: n };
} }), j = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), ""), Re = new D({ converter: (e) => {
	let t = j(), { width: n, height: r } = e, i = {
		type: "image",
		x: 0,
		y: 0,
		width: n,
		height: r,
		status: "saved",
		fileId: t
	};
	return {
		files: { [t]: {
			id: t,
			mimeType: e.mimeType,
			dataURL: e.dataURL
		} },
		elements: [i]
	};
} }), ze = (e, t) => [e, t], Be = (e) => e.replace(/\\n/g, "\n"), M = (e) => {
	let t = {
		type: "line",
		x: e.startX,
		y: e.startY,
		points: [ze(0, 0), ze(e.endX - e.startX, e.endY - e.startY)],
		width: e.endX - e.startX,
		height: e.endY - e.startY,
		strokeStyle: e.strokeStyle || "solid",
		strokeColor: e.strokeColor || "#000",
		strokeWidth: e.strokeWidth || 1
	};
	return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), e.id && Object.assign(t, { id: e.id }), t;
}, N = (e) => {
	let t = {
		type: "text",
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		text: Be(e.text) || "",
		fontSize: e.fontSize,
		verticalAlign: "top",
		strokeColor: e.color
	};
	return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), e.id && Object.assign(t, { id: e.id }), t;
}, P = (e) => {
	let t = {
		text: Be(e?.label?.text || ""),
		fontSize: e?.label?.fontSize,
		textAlign: e.label?.textAlign,
		verticalAlign: e.label?.verticalAlign || "middle",
		strokeColor: e.label?.color || "#000",
		...e.groupId ? { groupIds: [e.groupId] } : {}
	}, n = {};
	e.type === "rectangle" && e.subtype === "activation" && (n = {
		backgroundColor: "#e9ecef",
		fillStyle: "solid"
	});
	let r = {
		id: e.id,
		type: e.type,
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		label: t,
		strokeStyle: e?.strokeStyle,
		strokeWidth: e?.strokeWidth,
		strokeColor: e?.strokeColor,
		backgroundColor: e?.bgColor,
		fillStyle: "solid",
		...n
	};
	return e.groupId && Object.assign(r, { groupIds: [e.groupId] }), r;
}, Ve = (e) => {
	let t = {
		type: "arrow",
		x: e.startX,
		y: e.startY,
		points: e.points?.map(([e, t]) => ze(e, t)) || [ze(0, 0), ze(e.endX - e.startX, e.endY - e.startY)],
		width: e.endX - e.startX,
		height: e.endY - e.startY,
		strokeStyle: e?.strokeStyle || "solid",
		endArrowhead: e?.endArrowhead || null,
		startArrowhead: e?.startArrowhead || null,
		label: {
			text: Be(e?.label?.text || ""),
			fontSize: 16,
			textAlign: e?.label?.textAlign,
			verticalAlign: e?.label?.verticalAlign
		},
		roundness: { type: 2 },
		start: e.start,
		end: e.end
	};
	return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), t;
}, He = 10, Ue = 16, We = 24, Ge = 4, Ke = (e) => {
	if (!e) return !0;
	let t = e.trim().toLowerCase();
	return t === "transparent" || t === "none" || t === "rgba(0,0,0,0)" || t === "rgba(0, 0, 0, 0)";
}, qe = (e, t) => Math.max(20, Math.round(e.length * t * .6)), Je = (e, t, n = !0) => {
	let r = e, i = r.groupIds ?? [];
	if (i.includes(t) || (r.groupIds = [...i, t]), !n || !r.label) return;
	let a = r.label.groupIds ?? [];
	a.includes(t) || (r.label.groupIds = [...a, t]);
}, Ye = new D({ converter: (e) => {
	let t = [], n = [];
	if (Object.values(e.nodes).forEach((e) => {
		!e || !e.length || e.forEach((e) => {
			let r;
			switch (e.type) {
				case "line":
					r = M(e);
					break;
				case "rectangle":
				case "ellipse":
					r = P(e);
					break;
				case "text":
					r = N(e);
					break;
				default: throw `unknown type ${e.type}`;
			}
			e.type === "rectangle" && e?.subtype === "activation" ? n.push(r) : t.push(r);
		});
	}), Object.values(e.lines).forEach((e) => {
		e && t.push(M(e));
	}), Object.values(e.arrows).forEach((e) => {
		e && (t.push(Ve(e)), e.sequenceNumber && t.push(P(e.sequenceNumber)));
	}), t.push(...n), e.loops) {
		let { lines: n, texts: r, nodes: i } = e.loops;
		n.forEach((e) => {
			t.push(M(e));
		}), r.forEach((e) => {
			t.push(N(e));
		}), i.forEach((e) => {
			t.push(P(e));
		});
	}
	return e.groups && e.groups.forEach((e) => {
		let { actorKeys: n, name: r } = e, i = Infinity, a = Infinity, o = 0, s = 0;
		if (!n.length) return;
		let c = t.filter((e) => {
			if (e.id) {
				let t = e.id.indexOf("-"), r = e.id.substring(0, t);
				return n.includes(r);
			}
			return !1;
		});
		if (!c.length || (c.forEach((e) => {
			e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0 || (i = Math.min(i, e.x), a = Math.min(a, e.y), o = Math.max(o, e.x + e.width), s = Math.max(s, e.y + e.height));
		}), !Number.isFinite(i) || !Number.isFinite(a) || !Number.isFinite(o) || !Number.isFinite(s))) return;
		let l = i - He, u = a - He, d = o - i + He * 2, f = s - a + He * 2, p = j(), m = j(), h = P({
			type: "rectangle",
			x: l,
			y: u,
			width: d,
			height: f,
			bgColor: Ke(e.fill) ? void 0 : e.fill,
			strokeColor: "#1f1f1f",
			strokeWidth: 1,
			id: p,
			groupId: m
		});
		if (t.unshift(h), t.forEach((e) => {
			e.id !== p && (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0 || e.x >= i && e.x + e.width <= o && e.y >= a && e.y + e.height <= s && Je(e, m));
		}), r) {
			let e = N({
				type: "text",
				id: j(),
				text: r,
				x: l + Ge,
				y: u - We,
				width: qe(r, Ue),
				height: 24,
				fontSize: Ue,
				color: "#1f1f1f",
				groupId: m
			});
			Je(e, m, !1), t.push(e);
		}
	}), { elements: t };
} }), Xe = new D({ converter: (e) => {
	let t = [];
	return e.nodes.forEach((e) => {
		!e || !e.length || e.forEach((e) => {
			let n;
			switch (e.type) {
				case "line":
					n = M(e);
					break;
				case "rectangle":
				case "ellipse":
					n = P(e);
					break;
				case "text":
					n = N(e);
					break;
				default: throw `unknown type ${e.type}`;
			}
			t.push(n);
		});
	}), Object.values(e.lines).forEach((e) => {
		e && t.push(M(e));
	}), Object.values(e.arrows).forEach((e) => {
		if (!e) return;
		let n = Ve(e);
		t.push(n);
	}), Object.values(e.text).forEach((e) => {
		let n = N(e);
		t.push(n);
	}), Object.values(e.namespaces).forEach((n) => {
		let r = Object.keys(n.classes), i = [...r], a = [
			...e.lines,
			...e.arrows,
			...e.text
		];
		r.forEach((e) => {
			let t = a.filter((t) => t.metadata && t.metadata.classId === e).map((e) => e.id);
			t.length && i.push(...t);
		});
		let o = {
			type: "frame",
			id: j(),
			name: n.id,
			children: i
		};
		t.push(o);
	}), { elements: t };
} }), Ze = new D({ converter: (e) => {
	let t = [];
	return e.nodes.forEach((e) => {
		!e || !e.length || e.forEach((e) => {
			let n;
			switch (e.type) {
				case "line":
					n = M(e);
					break;
				case "rectangle":
				case "ellipse":
					n = P(e);
					break;
				case "text":
					n = N(e);
					break;
				default: throw `unknown type ${e.type}`;
			}
			t.push(n);
		});
	}), e.lines.forEach((e) => {
		t.push(M(e));
	}), e.arrows.forEach((e) => {
		t.push(Ve(e));
	}), e.text.forEach((e) => {
		t.push(N(e));
	}), { elements: t };
} }), Qe = (e, t) => [e, t], $e = 16, et = 14, tt = 1, nt = "#000000", rt = 5, it = rt * 2, at = rt * 2, ot = 1.25, st = /* @__PURE__ */ new Set([
	"choice",
	"fork",
	"join",
	"stateStart",
	"stateEnd",
	"divider"
]), ct = (e) => e.shape === "stateEnd" ? [`state_end_group_${e.id}`] : void 0, lt = (e) => e.shape === "rectWithTitle" && e.description.length ? [e.text, ...e.description].join("\n") : e.text, F, ut = () => {
	if (F !== void 0) return F;
	if (typeof document > "u") return F = null, F;
	try {
		F = document.createElement("canvas").getContext("2d");
	} catch {
		F = null;
	}
	return F;
}, I = (e, t) => {
	let n = ut();
	return n ? (n.font = `${t}px Excalifont, sans-serif`, n.measureText(e).width) : e.length * t * .6;
}, dt = (e, t, n) => {
	if (I(e, t) <= n) return [e];
	let r = [], i = "";
	for (let a of e) {
		let e = `${i}${a}`;
		if (i && I(e, t) > n) {
			r.push(i), i = a;
			continue;
		}
		i = e;
	}
	return i && r.push(i), r;
}, ft = (e, t, n) => {
	if (!e.trim() || I(e, t) <= n) return e;
	let r = e.split(/\s+/).filter(Boolean), i = [], a = "";
	for (let e of r) {
		let r = dt(e, t, n);
		for (let [e, o] of r.entries()) {
			let r = a ? `${a}${a && e === 0 ? " " : ""}${o}` : o;
			if (I(r, t) <= n) {
				a = r;
				continue;
			}
			a && i.push(a), a = o;
		}
		r.length;
	}
	return i.push(a), i.join("\n");
}, pt = (e, t, n) => {
	let r = e.map((e) => ft(e, t, n)).join("\n").split("\n");
	return {
		width: Math.max(...r.map((e) => I(e, t))),
		height: r.length * t * ot
	};
}, mt = (e, t, n, r) => {
	let i = e.split("\n");
	for (let e = $e; e >= et; e -= tt) {
		let { height: r } = pt(i, e, t);
		if (r <= n) return e;
	}
	return r;
}, ht = (e) => {
	let t = lt(e);
	if (!t || st.has(e.shape)) return $e;
	let n = Math.max(1, e.width - it), r = Math.max(1, e.height - at), i = t.split("\n");
	return i.length > 1 && Math.max(...i.map((e) => I(e, $e))) <= n ? $e : mt(t, n, r, i.length === 1 ? $e : et);
}, gt = (e) => {
	if (st.has(e.shape)) return;
	let t = lt(e);
	if (t) return {
		text: t,
		fontSize: ht(e),
		verticalAlign: e.shape === "rectWithTitle" || e.shape === "roundedWithTitle" ? "top" : "middle",
		...Oe(e.labelStyle)
	};
}, _t = (e) => {
	let t = De(e.containerStyle), n = gt(e), r = e.shape === "choice" ? "diamond" : e.shape === "stateStart" || e.shape === "stateEnd" ? "ellipse" : "rectangle", i = e.shape === "rect" || e.shape === "rectWithTitle" || e.shape === "roundedWithTitle", a = e.shape === "stateStart" || e.shape === "fork" || e.shape === "join", o = t.backgroundColor || t.strokeColor || nt, s = t.strokeColor || t.backgroundColor || nt;
	return {
		id: e.id,
		type: r,
		...ct(e) ? { groupIds: ct(e) } : {},
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		...n ? { label: n } : {},
		...t,
		...i ? { roundness: { type: 3 } } : {},
		...a ? {
			backgroundColor: o,
			strokeColor: s,
			fillStyle: "solid"
		} : {}
	};
}, vt = (e) => {
	if (!e.dividerLine) return null;
	let t = De(e.containerStyle);
	return {
		id: `${e.id}__divider`,
		type: "line",
		x: e.dividerLine.startX,
		y: e.dividerLine.startY,
		width: e.dividerLine.endX - e.dividerLine.startX,
		height: e.dividerLine.endY - e.dividerLine.startY,
		points: [Qe(0, 0), Qe(e.dividerLine.endX - e.dividerLine.startX, e.dividerLine.endY - e.dividerLine.startY)],
		strokeColor: t.strokeColor || "#000",
		strokeWidth: t.strokeWidth || 1
	};
}, yt = (e) => {
	let t = De(e.containerStyle), n = Math.max(2, Math.min(e.width, e.height) * .32), r = e.endInnerColor || t.strokeColor || t.backgroundColor || nt;
	return {
		id: `${e.id}__inner`,
		type: "ellipse",
		groupIds: ct(e),
		x: e.x + n,
		y: e.y + n,
		width: Math.max(1, e.width - n * 2),
		height: Math.max(1, e.height - n * 2),
		backgroundColor: r,
		strokeColor: r,
		fillStyle: "solid",
		strokeWidth: 1
	};
}, bt = (e) => {
	let t = e.reflectionPoints.map((e, t, n) => {
		let r = n[0];
		return t === 0 ? Qe(0, 0) : Qe(e.x - r.x, e.y - r.y);
	});
	return {
		id: e.id,
		type: "arrow",
		x: e.startX,
		y: e.startY,
		width: e.endX - e.startX,
		height: e.endY - e.startY,
		points: t,
		strokeColor: e.strokeColor || "#000",
		strokeWidth: e.strokeWidth || 2,
		strokeStyle: e.strokeStyle || "solid",
		endArrowhead: e.isNoteEdge ? null : "triangle",
		roundness: { type: 2 },
		start: { id: e.start },
		end: { id: e.end },
		...e.text ? { label: {
			text: e.text,
			fontSize: 16
		} } : {}
	};
}, xt = new D({ converter: (e) => {
	let t = [];
	return e.nodes.forEach((e) => {
		if (!e.isRenderable) return;
		let n = _t(e);
		t.push(n);
		let r = vt(e);
		r && t.push(r), e.shape === "stateEnd" && t.push(yt(e));
	}), e.edges.forEach((e) => {
		t.push(bt(e));
	}), { elements: t };
} }), L = (e) => {
	e = Ct(e);
	let t = e.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), n = document.createElement("textarea");
	return n.innerHTML = t, n.value;
}, R = (e) => {
	let t = e.getAttribute("transform")?.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/), n = 0, r = 0;
	return t && (n = Number(t[1]), r = Number(t[2])), {
		transformX: n,
		transformY: r
	};
}, St = (e) => {
	let t = e;
	return t = t.replace(/style.*:\S*#.*;/g, (e) => e.substring(0, e.length - 1)), t = t.replace(/classDef.*:\S*#.*;/g, (e) => e.substring(0, e.length - 1)), t = t.replace(/#\w+;/g, (e) => {
		let t = e.substring(1, e.length - 1);
		return /^\+?\d+$/.test(t) ? `ﬂ°°${t}¶ß` : `ﬂ°${t}¶ß`;
	}), t;
}, Ct = function(e) {
	return e.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, wt = .5, Tt = (e, t = wt) => {
	let n = [];
	return e.forEach((e) => {
		let r = n[n.length - 1];
		if (!r) {
			n.push(e);
			return;
		}
		Math.hypot(e[0] - r[0], e[1] - r[1]) <= t || n.push(e);
	}), n;
}, Et = (e) => {
	let t = e.getAttribute("d");
	if (!t) return null;
	let n = Array.from(t.matchAll(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi), (e) => Number(e[0]));
	return n.length < 4 ? null : {
		startX: n[0],
		startY: n[1],
		endX: n[n.length - 2],
		endY: n[n.length - 1]
	};
}, Dt = (e) => {
	let t = e.getAttribute("data-points");
	if (!t) {
		let t = Et(e);
		return t ? [{
			x: t.startX,
			y: t.startY
		}, {
			x: t.endX,
			y: t.endY
		}] : [];
	}
	try {
		let e = atob(t), n = JSON.parse(e);
		return Array.isArray(n) ? n.filter((e) => e && typeof e.x == "number" && typeof e.y == "number" && Number.isFinite(e.x) && Number.isFinite(e.y)) : [];
	} catch {
		return [];
	}
}, Ot = (e, t = {
	x: 0,
	y: 0
}, n = "LM") => {
	if (e.tagName.toLowerCase() !== "path") throw Error(`Invalid input: Expected an HTMLElement of tag "path", got ${e.tagName}`);
	let r = e.getAttribute("d");
	if (!r) throw Error("Path element does not contain a \"d\" attribute");
	let i = r.split(RegExp(`(?=[${n}])`)), a = i[0].substring(1).split(",").map((e) => parseFloat(e)), o = i[i.length - 1].substring(1).split(",").map((e) => parseFloat(e)), s = i.map((e) => {
		let t = e[0], n = e.substring(1).split(",").map((e) => parseFloat(e));
		return t === "C" ? {
			x: n[4],
			y: n[5],
			command: t
		} : {
			x: n[0],
			y: n[1],
			command: t
		};
	}).filter((e, t, n) => {
		if (t === 0 || t === n.length - 1) return !0;
		if (e.x === n[t - 1].x && e.y === n[t - 1].y || t === n.length - 2 && e.command === "C") return !1;
		if (t === n.length - 2 && (n[t - 1].x === e.x || n[t - 1].y === e.y)) {
			let t = n[n.length - 1];
			return Math.hypot(t.x - e.x, t.y - e.y) > 20;
		}
		return e.x !== n[t - 1].x || e.y !== n[t - 1].y;
	}).map((e) => ({
		x: e.x + t.x,
		y: e.y + t.y
	}));
	return {
		startX: a[0] + t.x,
		startY: a[1] + t.y,
		endX: o[0] + t.x,
		endY: o[1] + t.y,
		reflectionPoints: s
	};
}, kt = (e) => ({
	...e,
	elements: e.elements.map((e) => {
		if (!("points" in e) || !Array.isArray(e.points)) return e;
		let t = e.points;
		if (t.length < 2) return e;
		let n = Tt(t);
		return n.length === t.length ? e : {
			...e,
			points: n
		};
	})
}), At = (e, t = {}) => kt((() => {
	switch (e.type) {
		case "graphImage": return Re.convert(e, t);
		case "flowchart": return Le.convert(e, t);
		case "sequence": return Ye.convert(e, t);
		case "class": return Xe.convert(e, t);
		case "erd": return Ze.convert(e, t);
		case "state": return xt.convert(e, t);
		default: throw Error(`graphToExcalidraw: unknown graph type "${e.type}, only flowcharts are supported!"`);
	}
})());
//#endregion
//#region node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function jt(e) {
	let t = e?.constructor;
	return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
//#endregion
//#region node_modules/es-toolkit/dist/compat/predicate/isEmpty.mjs
function Mt(e) {
	if (e == null) return !0;
	if (fe(e)) return typeof e.splice != "function" && typeof e != "string" && !ae(e) && !de(e) && !pe(e) ? !1 : e.length === 0;
	if (typeof e == "object" || typeof e == "function") {
		if (e instanceof Map || e instanceof Set) return e.size === 0;
		let t = Object.keys(e);
		return jt(e) ? t.filter((e) => e !== "constructor").length === 0 : t.length === 0;
	}
	return !0;
}
//#endregion
//#region node_modules/stylis/src/Enum.js
var Nt = "comm", Pt = "rule", Ft = "decl", It = "@import", Lt = "@namespace", Rt = "@keyframes", zt = "@layer", Bt = Math.abs, Vt = String.fromCharCode;
function Ht(e) {
	return e.trim();
}
function Ut(e, t, n) {
	return e.replace(t, n);
}
function z(e, t) {
	return e.charCodeAt(t) | 0;
}
function B(e, t, n) {
	return e.slice(t, n);
}
function V(e) {
	return e.length;
}
function Wt(e) {
	return e.length;
}
function Gt(e, t) {
	return t.push(e), e;
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var Kt = 1, qt = 1, Jt = 0, H = 0, U = 0, Yt = "";
function Xt(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: Kt,
		column: qt,
		length: o,
		return: "",
		siblings: s
	};
}
function Zt() {
	return U;
}
function Qt() {
	return U = H > 0 ? z(Yt, --H) : 0, qt--, U === 10 && (qt = 1, Kt--), U;
}
function W() {
	return U = H < Jt ? z(Yt, H++) : 0, qt++, U === 10 && (qt = 1, Kt++), U;
}
function G() {
	return z(Yt, H);
}
function $t() {
	return H;
}
function en(e, t) {
	return B(Yt, e, t);
}
function tn(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function nn(e) {
	return Kt = qt = 1, Jt = V(Yt = e), H = 0, [];
}
function rn(e) {
	return Yt = "", e;
}
function an(e) {
	return Ht(en(H - 1, cn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function on(e) {
	for (; (U = G()) && U < 33;) W();
	return tn(e) > 2 || tn(U) > 3 ? "" : " ";
}
function sn(e, t) {
	for (; --t && W() && !(U < 48 || U > 102 || U > 57 && U < 65 || U > 70 && U < 97););
	return en(e, $t() + (t < 6 && G() == 32 && W() == 32));
}
function cn(e) {
	for (; W();) switch (U) {
		case e: return H;
		case 34:
		case 39:
			e !== 34 && e !== 39 && cn(U);
			break;
		case 40:
			e === 41 && cn(e);
			break;
		case 92:
			W();
			break;
	}
	return H;
}
function ln(e, t) {
	for (; W() && e + U !== 57 && !(e + U === 84 && G() === 47););
	return "/*" + en(t, H - 1) + "*" + Vt(e === 47 ? e : W());
}
function un(e) {
	for (; !tn(G());) W();
	return en(e, H);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function dn(e) {
	return rn(fn("", null, null, null, [""], e = nn(e), 0, [0], e));
}
function fn(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = 0, b = "", x = i, S = a, C = r, w = b; g;) switch (m = y, y = W()) {
		case 40:
			m != 108 && z(w, d - 1) == 58 ? (v++, w += "(") : w += an(y);
			break;
		case 41:
			v--, w += ")";
			break;
		case 34:
		case 39:
		case 91:
			w += an(y);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			if (v > 0) {
				w += Vt(y);
				break;
			}
			w += on(m);
			break;
		case 92:
			w += sn($t() - 1, 7);
			continue;
		case 47:
			switch (G()) {
				case 42:
				case 47:
					Gt(mn(ln(W(), $t()), t, n, c), c), (tn(m || 1) == 5 || tn(G() || 1) == 5) && V(w) && B(w, -1, void 0) !== " " && (w += " ");
					break;
				default: w += "/";
			}
			break;
		case 123 * h: s[l++] = V(w) * _;
		case 125 * h:
		case 59:
		case 0:
			if (v > 0 && y) {
				w += Vt(y);
				break;
			}
			switch (y) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (w = Ut(w, /\f/g, "")), p > 0 && (V(w) - d || h === 0) && Gt(p > 32 ? hn(w + ";", r, n, d - 1, c) : hn(Ut(w, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: w += ";";
				default: if (Gt(C = pn(w, t, n, l, u, i, s, b, x = [], S = [], d, a), a), y === 123) if (u === 0) fn(w, t, C, C, x, a, d, s, S);
				else {
					switch (f) {
						case 99: if (z(w, 3) === 110) break;
						case 108: if (z(w, 2) === 97) break;
						default: u = 0;
						case 100:
						case 109:
						case 115:
					}
					u ? fn(e, C, C, r && Gt(pn(e, C, C, 0, 0, i, s, b, i, x = [], d, S), S), i, S, d, s, r ? x : S) : fn(w, C, C, C, [""], S, 0, s, S);
				}
			}
			l = u = p = 0, h = _ = 1, b = w = "", d = o;
			break;
		case 58: d = 1 + V(w), p = m;
		default:
			if (h < 1) {
				if (y == 123) --h;
				else if (y == 125 && h++ == 0 && Qt() == 125) continue;
			}
			switch (w += Vt(y), y * h) {
				case 38:
					_ = u > 0 ? 1 : (w += "\f", -1);
					break;
				case 44:
					if (v > 0) break;
					s[l++] = (V(w) - 1) * _, _ = 1;
					break;
				case 64:
					G() === 45 && (w += an(W())), f = G(), u = d = V(b = w += un($t())), y++;
					break;
				case 45: m === 45 && V(w) == 2 && (h = 0);
			}
	}
	return a;
}
function pn(e, t, n, r, i, a, o, s, c, l, u, d) {
	for (var f = i - 1, p = i === 0 ? a : [""], m = Wt(p), h = 0, g = 0, _ = 0; h < r; ++h) for (var v = 0, y = B(e, f + 1, f = Bt(g = o[h])), b = e; v < m; ++v) (b = Ht(g > 0 ? p[v] + " " + y : Ut(y, /&\f/g, p[v]))) && (c[_++] = b);
	return Xt(e, t, n, i === 0 ? Pt : s, c, l, u, d);
}
function mn(e, t, n, r) {
	return Xt(e, t, n, Nt, Vt(Zt()), B(e, 2, -2), 0, r);
}
function hn(e, t, n, r, i) {
	return Xt(e, t, n, Ft, B(e, 0, r), B(e, r + 1, -1), r, i);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function gn(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function _n(e, t, n, r) {
	switch (e.type) {
		case zt: if (e.children.length) break;
		case It:
		case Lt:
		case Ft: return e.return = e.return || e.value;
		case Nt: return "";
		case Rt: return e.return = e.value + "{" + gn(e.children, r) + "}";
		case Pt: if (!V(e.value = e.props.join(","))) return "";
	}
	return V(n = gn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
function vn(e) {
	var t = Wt(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
//#endregion
//#region node_modules/mermaid/dist/mermaid.core.mjs
var yn = "c4", bn = {
	id: yn,
	detector: /* @__PURE__ */ t((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./c4Diagram-LMCZKHZV-D0jHquAs.mjs");
		return {
			id: yn,
			diagram: e
		};
	}, "loader")
}, xn = "flowchart", Sn = {
	id: xn,
	detector: /* @__PURE__ */ t((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./flowDiagram-23GEKE2U-D-I2Ssio.mjs");
		return {
			id: xn,
			diagram: e
		};
	}, "loader")
}, Cn = "flowchart-v2", wn = {
	id: Cn,
	detector: /* @__PURE__ */ t((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./flowDiagram-23GEKE2U-D-I2Ssio.mjs");
		return {
			id: Cn,
			diagram: e
		};
	}, "loader")
}, Tn = "swimlane", En = {
	id: Tn,
	detector: /* @__PURE__ */ t((e) => /^\s*swimlane-beta\b/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./swimlanesDiagram-G3AALYLV-CbHx-b1a.mjs");
		return {
			id: Tn,
			diagram: e
		};
	}, "loader")
}, Dn = "er", On = {
	id: Dn,
	detector: /* @__PURE__ */ t((e) => /^\s*erDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./erDiagram-Q63AITRT-ESerMu46.mjs");
		return {
			id: Dn,
			diagram: e
		};
	}, "loader")
}, kn = "gitGraph", An = {
	id: kn,
	detector: /* @__PURE__ */ t((e) => /^\s*gitGraph/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./gitGraphDiagram-IHSO6WYX-BKoaR1Xz.mjs");
		return {
			id: kn,
			diagram: e
		};
	}, "loader")
}, jn = "gantt", Mn = {
	id: jn,
	detector: /* @__PURE__ */ t((e) => /^\s*gantt/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./ganttDiagram-NO4QXBWP-C_e0gSb3.mjs");
		return {
			id: jn,
			diagram: e
		};
	}, "loader")
}, Nn = "info", Pn = {
	id: Nn,
	detector: /* @__PURE__ */ t((e) => /^\s*info/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./infoDiagram-FWYZ7A6U-DSIOGUOI.mjs");
		return {
			id: Nn,
			diagram: e
		};
	}, "loader")
}, Fn = "pie", In = {
	id: Fn,
	detector: /* @__PURE__ */ t((e) => /^\s*pie/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./pieDiagram-ENE6RG2P-Kmwd_KWj.mjs");
		return {
			id: Fn,
			diagram: e
		};
	}, "loader")
}, Ln = "quadrantChart", Rn = {
	id: Ln,
	detector: /* @__PURE__ */ t((e) => /^\s*quadrantChart/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./quadrantDiagram-ABIIQ3AL-BoIAk9NU.mjs");
		return {
			id: Ln,
			diagram: e
		};
	}, "loader")
}, zn = "xychart", Bn = {
	id: zn,
	detector: /* @__PURE__ */ t((e) => /^\s*xychart(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./xychartDiagram-FW5EYKEG-BIiE9eUG.mjs");
		return {
			id: zn,
			diagram: e
		};
	}, "loader")
}, Vn = "requirement", Hn = {
	id: Vn,
	detector: /* @__PURE__ */ t((e) => /^\s*requirement(Diagram)?/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./requirementDiagram-TGXJPOKE-OTySOCpb.mjs");
		return {
			id: Vn,
			diagram: e
		};
	}, "loader")
}, Un = "sequence", Wn = {
	id: Un,
	detector: /* @__PURE__ */ t((e) => /^\s*sequenceDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./sequenceDiagram-DBY2YBRQ-DbUFZL4o.mjs");
		return {
			id: Un,
			diagram: e
		};
	}, "loader")
}, Gn = "class", Kn = {
	id: Gn,
	detector: /* @__PURE__ */ t((e, t) => t?.class?.defaultRenderer !== "dagre-wrapper" && /^\s*classDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./classDiagram-OUVF2IWQ-DlTch3Ho.mjs");
		return {
			id: Gn,
			diagram: e
		};
	}, "loader")
}, qn = "classDiagram", Jn = {
	id: qn,
	detector: /* @__PURE__ */ t((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./classDiagram-v2-EOCWNBFH-CB-Ym9UY.mjs");
		return {
			id: qn,
			diagram: e
		};
	}, "loader")
}, Yn = "state", Xn = {
	id: Yn,
	detector: /* @__PURE__ */ t((e, t) => t?.state?.defaultRenderer !== "dagre-wrapper" && /^\s*stateDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./stateDiagram-2N3HPSRC-ylDc00hr.mjs");
		return {
			id: Yn,
			diagram: e
		};
	}, "loader")
}, Zn = "stateDiagram", Qn = {
	id: Zn,
	detector: /* @__PURE__ */ t((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./stateDiagram-v2-6OUMAXLB-BPoqKy9W.mjs");
		return {
			id: Zn,
			diagram: e
		};
	}, "loader")
}, $n = "journey", er = {
	id: $n,
	detector: /* @__PURE__ */ t((e) => /^\s*journey/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./journeyDiagram-5HDEW3XC-CZc946k_.mjs");
		return {
			id: $n,
			diagram: e
		};
	}, "loader")
}, tr = { draw: /* @__PURE__ */ t((e, t, n) => {
	r.debug("rendering svg for syntax error\n");
	let i = me(t), a = i.append("g");
	i.attr("viewBox", "0 0 2412 512"), x(i, 100, 512, !0), a.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), a.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), a.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), a.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), a.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), a.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), a.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), a.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${n}`);
}, "draw") }, nr = tr, rr = {
	db: {},
	renderer: tr,
	parser: { parse: /* @__PURE__ */ t(() => {}, "parse") }
}, ir = "flowchart-elk", ar = {
	id: ir,
	detector: /* @__PURE__ */ t((e, t = {}) => /^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1, "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./flowDiagram-23GEKE2U-D-I2Ssio.mjs");
		return {
			id: ir,
			diagram: e
		};
	}, "loader")
}, or = "timeline", sr = {
	id: or,
	detector: /* @__PURE__ */ t((e) => /^\s*timeline/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./timeline-definition-FHXFAJF6-BksbYsSn.mjs");
		return {
			id: or,
			diagram: e
		};
	}, "loader")
}, cr = "mindmap", lr = {
	id: cr,
	detector: /* @__PURE__ */ t((e) => /^\s*mindmap/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./mindmap-definition-LN4V7U3C-_0Zl9TE1.mjs");
		return {
			id: cr,
			diagram: e
		};
	}, "loader")
}, ur = "kanban", dr = {
	id: ur,
	detector: /* @__PURE__ */ t((e) => /^\s*kanban/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./kanban-definition-HUTT4EX6-CIRvjUda.mjs");
		return {
			id: ur,
			diagram: e
		};
	}, "loader")
}, fr = "sankey", pr = {
	id: fr,
	detector: /* @__PURE__ */ t((e) => /^\s*sankey(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./sankeyDiagram-HTMAVEWB-DjQYgmmf.mjs");
		return {
			id: fr,
			diagram: e
		};
	}, "loader")
}, mr = "packet", hr = {
	id: mr,
	detector: /* @__PURE__ */ t((e) => /^\s*packet(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./diagram-NH7WQ7WH-dhgw7kf-.mjs");
		return {
			id: mr,
			diagram: e
		};
	}, "loader")
}, gr = "radar", _r = {
	id: gr,
	detector: /* @__PURE__ */ t((e) => /^\s*radar-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./diagram-WEI45ONY-BB-2GoTF.mjs");
		return {
			id: gr,
			diagram: e
		};
	}, "loader")
}, vr = "block", yr = {
	id: vr,
	detector: /* @__PURE__ */ t((e) => /^\s*block(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./blockDiagram-677ZJIJ3-BtV0wmk8.mjs");
		return {
			id: vr,
			diagram: e
		};
	}, "loader")
}, br = "treeView", xr = {
	id: br,
	detector: /* @__PURE__ */ t((e) => /^\s*treeView-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./diagram-OA4YK3LP-BG-lOqWi.mjs");
		return {
			id: br,
			diagram: e
		};
	}, "loader")
}, Sr = "architecture", Cr = {
	id: Sr,
	detector: /* @__PURE__ */ t((e) => /^\s*architecture/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./architectureDiagram-ZJ3FMSHR-BLPaKiKa.mjs");
		return {
			id: Sr,
			diagram: e
		};
	}, "loader")
}, wr = "eventmodeling", Tr = {
	id: wr,
	detector: /* @__PURE__ */ t((e) => /^\s*eventmodeling/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./diagram-FQU43EPY-8NlFM8dC.mjs");
		return {
			id: wr,
			diagram: e
		};
	}, "loader")
}, Er = "ishikawa", Dr = {
	id: Er,
	detector: /* @__PURE__ */ t((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./ishikawaDiagram-FXEZZL3T-DXmf7lWj.mjs");
		return {
			id: Er,
			diagram: e
		};
	}, "loader")
}, Or = "venn", kr = {
	id: Or,
	detector: /* @__PURE__ */ t((e) => /^\s*venn-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./vennDiagram-L72KCM5P-D8D2hPJG.mjs");
		return {
			id: Or,
			diagram: e
		};
	}, "loader")
}, Ar = "treemap", jr = {
	id: Ar,
	detector: /* @__PURE__ */ t((e) => /^\s*treemap/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./diagram-G47NLZAW-DPJe3bGM.mjs");
		return {
			id: Ar,
			diagram: e
		};
	}, "loader")
}, Mr = "wardley", Nr = {
	id: Mr,
	detector: /* @__PURE__ */ t((e) => /^\s*wardley-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./wardleyDiagram-EHGQE667-C6Hx7RrF.mjs");
		return {
			id: Mr,
			diagram: e
		};
	}, "loader")
}, Pr = "cynefin", Fr = {
	id: Pr,
	detector: /* @__PURE__ */ t((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./cynefinDiagram-TSTJHNR4-kr4-vxu0.mjs");
		return {
			id: Pr,
			diagram: e
		};
	}, "loader")
}, Ir = "railroad", Lr = {
	id: Ir,
	detector: /* @__PURE__ */ t((e) => /^\s*railroad-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./railroadDiagram-RFXS5EU6-DwNgybg6.mjs");
		return {
			id: Ir,
			diagram: e
		};
	}, "loader")
}, Rr = "railroadEbnf", zr = {
	id: Rr,
	detector: /* @__PURE__ */ t((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./ebnfDiagram-CCIWWBDH-PWPfubxA.mjs");
		return {
			id: Rr,
			diagram: e
		};
	}, "loader")
}, Br = "railroadAbnf", Vr = {
	id: Br,
	detector: /* @__PURE__ */ t((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./abnfDiagram-VRR7QNED-CyPnixan.mjs");
		return {
			id: Br,
			diagram: e
		};
	}, "loader")
}, Hr = "railroadPeg", Ur = {
	id: Hr,
	detector: /* @__PURE__ */ t((e) => /^\s*railroad-peg-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ t(async () => {
		let { diagram: e } = await import("./pegDiagram-2B236MQR-SsOFzyqR.mjs");
		return {
			id: Hr,
			diagram: e
		};
	}, "loader")
}, Wr = !1, Gr = /* @__PURE__ */ t(() => {
	Wr || (Wr = !0, u("error", rr, (e) => e.toLowerCase().trim() === "error"), u("---", {
		db: { clear: /* @__PURE__ */ t(() => {}, "clear") },
		styles: {},
		renderer: { draw: /* @__PURE__ */ t(() => {}, "draw") },
		parser: { parse: /* @__PURE__ */ t(() => {
			throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
		}, "parse") },
		init: /* @__PURE__ */ t(() => null, "init")
	}, (e) => e.toLowerCase().trimStart().startsWith("---")), d(ar, lr, Cr), d(bn, dr, Jn, Kn, On, Mn, Pn, In, Hn, Wn, En, wn, Sn, sr, An, Qn, Xn, er, Rn, pr, hr, Bn, yr, Tr, xr, _r, Dr, jr, Lr, zr, Vr, Ur, kr, Nr, Fr));
}, "addDiagrams"), Kr = /* @__PURE__ */ t(async () => {
	r.debug("Loading registered diagrams");
	let e = (await Promise.allSettled(Object.entries(w).map(async ([e, { detector: t, loader: n }]) => {
		if (n) try {
			p(e);
		} catch {
			try {
				let { diagram: e, id: r } = await n();
				u(r, e, t);
			} catch (t) {
				throw r.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete w[e], t;
			}
		}
	}))).filter((e) => e.status === "rejected");
	if (e.length > 0) {
		r.error(`Failed to load ${e.length} external diagrams`);
		for (let t of e) r.error(t);
		throw Error(`Failed to load ${e.length} external diagrams`);
	}
}, "loadRegisteredDiagrams"), qr = "graphics-document document";
function Jr(e, t) {
	e.attr("role", qr), t !== "" && e.attr("aria-roledescription", t);
}
t(Jr, "setA11yDiagramInfo");
function Yr(e, t, n, r) {
	if (e.insert !== void 0) {
		if (n) {
			let t = `chart-desc-${r}`;
			e.attr("aria-describedby", t), e.insert("desc", ":first-child").attr("id", t).text(n);
		}
		if (t) {
			let n = `chart-title-${r}`;
			e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
		}
	}
}
t(Yr, "addSVGa11yTitleDescription");
var Xr = class e {
	constructor(e, t, n, r, i) {
		this.type = e, this.text = t, this.db = n, this.parser = r, this.renderer = i;
	}
	static {
		t(this, "Diagram");
	}
	static async fromText(t, n = {}) {
		let r = b(), i = te(t, r);
		t = ue(t) + "\n";
		try {
			p(i);
		} catch {
			let e = o(i);
			if (!e) throw new re(`Diagram ${i} not found.`);
			let { id: t, diagram: n } = await e();
			u(t, n);
		}
		let { db: a, parser: s, renderer: c, init: l } = p(i);
		return s.parser && (s.parser.yy = a), a.clear?.(), l?.(r), n.title && a.setDiagramTitle?.(n.title), await s.parse(t), new e(i, t, a, s, c);
	}
	async render(e, t) {
		await this.renderer.draw(this.text, e, t, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
}, Zr = [], Qr = /* @__PURE__ */ t(() => {
	Zr.forEach((e) => {
		e();
	}), Zr = [];
}, "attachFunctions"), $r = /* @__PURE__ */ t((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function ei(e) {
	let t = e.match(y);
	if (!t) return {
		text: e,
		metadata: {}
	};
	let n = t[1], r = he(n ? t[2].split("\n").map((e) => e.startsWith(n) ? e.slice(n.length) : e).join("\n") : t[2], { schema: ge }) ?? {};
	r = typeof r == "object" && !Array.isArray(r) ? r : {};
	let i = {};
	return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
		text: e.slice(t[0].length),
		metadata: i
	};
}
t(ei, "extractFrontMatter");
var ti = /* @__PURE__ */ t((e) => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, t, n) => "<" + t + n.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), ni = /* @__PURE__ */ t((e) => {
	let { text: t, metadata: n } = ei(e), { displayMode: r, title: i, config: a = {} } = n;
	return r && (a.gantt ||= {}, a.gantt.displayMode = r), {
		title: i,
		config: a,
		text: t
	};
}, "processFrontmatter"), ri = /* @__PURE__ */ t((e) => {
	let t = se.detectInit(e) ?? {}, n = se.detectDirective(e, "wrap");
	return Array.isArray(n) ? t.wrap = n.some(({ type: e }) => e === "wrap") : n?.type === "wrap" && (t.wrap = !0), {
		text: ce(e),
		directive: t
	};
}, "processDirectives");
function ii(e) {
	let t = ni(ti(e)), n = ri(t.text), r = le(t.config, n.directive);
	return e = $r(n.text), {
		code: e,
		title: t.title,
		config: r
	};
}
t(ii, "preprocessDiagram");
function ai(e) {
	let t = new TextEncoder().encode(e), n = Array.from(t, (e) => String.fromCodePoint(e)).join("");
	return btoa(n);
}
t(ai, "toBase64");
var oi = 5e4, si = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", ci = "sandbox", li = "loose", ui = "http://www.w3.org/2000/svg", di = "http://www.w3.org/1999/xlink", fi = "http://www.w3.org/1999/xhtml", pi = "100%", mi = "100%", hi = "border:0;margin:0;", gi = "margin:0", _i = "allow-top-navigation-by-user-activation allow-popups", vi = "The \"iframe\" tag is not supported by your browser.", yi = ["foreignobject"], bi = ["dominant-baseline"];
function xi(e) {
	let t = ii(e);
	return c(), ee(t.config ?? {}), t;
}
t(xi, "processAndSetConfigs");
async function Si(e, t) {
	Gr();
	try {
		let { code: t, config: n } = xi(e);
		return {
			diagramType: (await Pi(t)).type,
			config: n
		};
	} catch (e) {
		if (t?.suppressErrors) return !1;
		throw e;
	}
}
t(Si, "parse");
var Ci = /* @__PURE__ */ t((e, t, n = []) => `.${e} ${t} ${l(`{ ${n.join(" !important; ")} !important; }`)}`, "cssImportantStyles"), wi = /* @__PURE__ */ t((e, t = /* @__PURE__ */ new Map()) => {
	let n = new CSSStyleSheet();
	if (e.fontFamily !== void 0 && n.insertRule(`:root { --mermaid-font-family: ${e.fontFamily}}`, n.cssRules.length), e.altFontFamily !== void 0 && n.insertRule(`:root { --mermaid-alt-font-family: ${e.altFontFamily}}`, n.cssRules.length), t instanceof Map) {
		let r = m(e) ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		t.forEach((e) => {
			Mt(e.styles) || r.forEach((t) => {
				n.insertRule(Ci(e.id, t, e.styles), n.cssRules.length);
			}), Mt(e.textStyles) || n.insertRule(Ci(e.id, "tspan", (e?.textStyles || []).map((e) => e.replace("color", "fill"))), n.cssRules.length);
		});
	}
	let r = "";
	if (e.themeCSS !== void 0) if (typeof n.replaceSync == "function") {
		let t = new CSSStyleSheet();
		t.replaceSync(e.themeCSS), r = C(t) + "\n";
	} else r += `${e.themeCSS}
`;
	return r + C(n);
}, "createCssStyles"), Ti = /* @__PURE__ */ t((e, n) => gn(dn(`${e}{${n}}`), vn([/* @__PURE__ */ t(function(t, n, i, a) {
	if (t.type === "rule" && Array.isArray(t.props)) {
		if (t.parent && t.parent.type === "@keyframes") return;
		t.props = t.props.map((t) => t.startsWith(e) ? t : `${e} ${t}`);
	} else t.type.startsWith("@") && ([
		"@media",
		"@supports",
		"@layer",
		"@scope",
		"@container",
		"@starting-style",
		"@keyframes"
	].includes(t.type) || (r.warn(`Removing unsupported at-rule ${t.type} from CSS`), t.type = Nt));
}, "addNamespace"), _n])), "compileCSS"), Ei = /* @__PURE__ */ t((e, t, n, r) => Ti(r, _(t, wi(e, n), {
	...e.themeVariables,
	theme: e.theme,
	look: e.look
}, r)), "createUserStyles"), Di = /* @__PURE__ */ t((e = "", t, n) => {
	let r = e;
	return !n && !t && (r = r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), r = oe(r), r = r.replace(/<br>/g, "<br/>"), r;
}, "cleanUpSvgCode"), Oi = /* @__PURE__ */ t((e = "", t) => `<iframe style="width:${pi};height:${t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : mi};${hi}" src="data:text/html;charset=UTF-8;base64,${ai(`<body style="${gi}">${e}</body>`)}" sandbox="${_i}">
  ${vi}
</iframe>`, "putIntoIFrame"), ki = /* @__PURE__ */ t((e, t, n, r, i) => {
	let a = e.append("div");
	a.attr("id", n), r && a.attr("style", r);
	let o = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", ui);
	return i && o.attr("xmlns:xlink", i), o.append("g"), e;
}, "appendDivSvgG");
function Ai(e, t) {
	return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
t(Ai, "sandboxedIframe");
var ji = /* @__PURE__ */ t((e, t, n, r) => {
	e.getElementById(t)?.remove(), e.getElementById(n)?.remove(), e.getElementById(r)?.remove();
}, "removeExistingElements"), Mi = /* @__PURE__ */ t(async function(e, n, o) {
	Gr();
	let s = xi(n);
	n = s.code;
	let c = b();
	r.debug(c), n.length > (c?.maxTextSize ?? oi) && (n = si);
	let l = `#${e}`, u = "i" + e, d = "#" + u, f = "d" + e, p = "#" + f, m = /* @__PURE__ */ t(() => {
		let e = i(g ? d : p).node();
		e && "remove" in e && e.remove();
	}, "removeTempElements"), h = i(document.body), g = c.securityLevel === ci, _ = c.securityLevel === li, v = c.fontFamily;
	o === void 0 ? (ji(document, e, f, u), g ? (h = i(Ai(i(document.body), u).nodes()[0].contentDocument.body), h.node().style.margin = "0") : h = i("body"), ki(h, e, f)) : (o && (o.innerHTML = ""), g ? (h = i(Ai(i(o), u).nodes()[0].contentDocument.body), h.node().style.margin = "0") : h = i(o), ki(h, e, f, `font-family: ${v}`, di));
	let y, x;
	try {
		y = await Xr.fromText(n, { title: s.title });
	} catch (e) {
		if (c.suppressErrorRendering) throw m(), e;
		y = await Xr.fromText("error"), x = e;
	}
	let C = h.select(p).node(), w = y.type, ee = C.firstChild, te = ee.firstChild, ne = y.renderer.getClasses?.(n, y), T = Ei(c, w, ne, l), re = document.createElement("style");
	re.innerHTML = T, ee.insertBefore(re, te);
	try {
		await y.renderer.draw(n, e, "11.16.0", y);
	} catch (t) {
		throw c.suppressErrorRendering ? m() : nr.draw(n, e, "11.16.0"), t;
	}
	let ie = h.select(`${p} svg`), ae = y.db.getAccTitle?.(), oe = y.db.getAccDescription?.();
	Fi(w, ie, ae, oe), h.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", fi);
	let E = h.select(p).node().innerHTML;
	if (r.debug("config.arrowMarkerAbsolute", c.arrowMarkerAbsolute), E = Di(E, g, S(c.arrowMarkerAbsolute)), g) {
		let e = h.select(p + " svg").node();
		E = Oi(E, e);
	} else _ || (E = a.sanitize(E, {
		ADD_TAGS: yi,
		ADD_ATTR: bi,
		HTML_INTEGRATION_POINTS: { foreignobject: !0 }
	}));
	if (Qr(), x) throw x;
	return m(), {
		diagramType: w,
		svg: E,
		bindFunctions: y.db.bindFunctions
	};
}, "render");
function Ni(e = {}) {
	let t = T({}, e);
	t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables ||= {}, t.themeVariables.fontFamily = t.fontFamily), h(t), t?.theme && t.theme in v ? t.themeVariables = v[t.theme].getThemeVariables(t.themeVariables) : t && (t.themeVariables = v.default.getThemeVariables(t.themeVariables)), n((typeof t == "object" ? ne(t) : s()).logLevel), Gr();
}
t(Ni, "initialize");
var Pi = /* @__PURE__ */ t((e, t = {}) => {
	let { code: n } = ii(e);
	return Xr.fromText(n, t);
}, "getDiagramFromText");
function Fi(e, t, n, r) {
	Jr(t, e), Yr(t, n, r, t.attr("id"));
}
t(Fi, "addA11yInfo");
var K = Object.freeze({
	render: Mi,
	parse: Si,
	getDiagramFromText: Pi,
	initialize: Ni,
	getConfig: b,
	setConfig: g,
	getSiteConfig: s,
	updateSiteConfig: f,
	reset: /* @__PURE__ */ t(() => {
		c();
	}, "reset"),
	globalReset: /* @__PURE__ */ t(() => {
		c(ie);
	}, "globalReset"),
	defaultConfig: ie
});
n(b().logLevel), c(b());
var Ii = /* @__PURE__ */ t((e, t, n) => {
	r.warn(e), E(e) ? (n && n(e.str, e.hash), t.push({
		...e,
		message: e.str,
		error: e
	})) : (n && n(e), e instanceof Error && t.push({
		str: e.message,
		message: e.message,
		hash: e.name,
		error: e
	}));
}, "handleError"), Li = /* @__PURE__ */ t(async function(e = { querySelector: ".mermaid" }) {
	try {
		await Ri(e);
	} catch (t) {
		if (E(t) && r.error(t.str), q.parseError && q.parseError(t), !e.suppressErrors) throw r.error("Use the suppressErrors option to suppress these errors"), t;
	}
}, "run"), Ri = /* @__PURE__ */ t(async function({ postRenderCallback: e, querySelector: t, nodes: n } = { querySelector: ".mermaid" }) {
	let i = K.getConfig();
	r.debug(`${e ? "" : "No "}Callback function found`);
	let a;
	if (n) a = n;
	else if (t) a = document.querySelectorAll(t);
	else throw Error("Nodes and querySelector are both undefined");
	r.debug(`Found ${a.length} diagrams`), i?.startOnLoad !== void 0 && (r.debug("Start On Load: " + i?.startOnLoad), K.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
	let o = new se.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed), s, c = [];
	for (let t of Array.from(a)) {
		if (r.info("Rendering diagram: " + t.id), t.getAttribute("data-processed")) continue;
		t.setAttribute("data-processed", "true");
		let n = `mermaid-${o.next()}`;
		s = t.innerHTML, s = ve(se.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		let i = se.detectInit(s);
		i && r.debug("Detected early reinit: ", i);
		try {
			let { svg: r, bindFunctions: i } = await Ji(n, s, t);
			t.innerHTML = r, e && await e(n), i && i(t);
		} catch (e) {
			Ii(e, c, q.parseError);
		}
	}
	if (c.length > 0) throw c[0];
}, "runThrowsErrors"), zi = /* @__PURE__ */ t(function(e) {
	K.initialize(e);
}, "initialize"), Bi = /* @__PURE__ */ t(async function(e, t, n) {
	r.warn("mermaid.init is deprecated. Please use run instead."), e && zi(e);
	let i = {
		postRenderCallback: n,
		querySelector: ".mermaid"
	};
	typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Li(i);
}, "init"), Vi = /* @__PURE__ */ t(async (e, { lazyLoad: t = !0 } = {}) => {
	Gr(), d(...e), t === !1 && await Kr();
}, "registerExternalDiagrams"), Hi = /* @__PURE__ */ t(function() {
	if (q.startOnLoad) {
		let { startOnLoad: e } = K.getConfig();
		e && q.run().catch((e) => r.error("Mermaid failed to initialize", e));
	}
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", Hi, !1);
var Ui = /* @__PURE__ */ t(function(e) {
	q.parseError = e;
}, "setParseErrorHandler"), Wi = [], Gi = !1, Ki = /* @__PURE__ */ t(async () => {
	if (!Gi) {
		for (Gi = !0; Wi.length > 0;) {
			let e = Wi.shift();
			if (e) try {
				await e();
			} catch (e) {
				r.error("Error executing queue", e);
			}
		}
		Gi = !1;
	}
}, "executeQueue"), qi = /* @__PURE__ */ t(async (e, n) => new Promise((i, a) => {
	let o = /* @__PURE__ */ t(() => new Promise((t, o) => {
		K.parse(e, n).then((e) => {
			t(e), i(e);
		}, (e) => {
			r.error("Error parsing", e), q.parseError?.(e), o(e), a(e);
		});
	}), "performCall");
	Wi.push(o), Ki().catch(a);
}), "parse"), Ji = /* @__PURE__ */ t((e, n, i) => new Promise((a, o) => {
	let s = /* @__PURE__ */ t(() => new Promise((t, s) => {
		K.render(e, n, i).then((e) => {
			t(e), a(e);
		}, (e) => {
			r.error("Error parsing", e), q.parseError?.(e), s(e), o(e);
		});
	}), "performCall");
	Wi.push(s), Ki().catch(o);
}), "render"), q = {
	startOnLoad: !0,
	mermaidAPI: K,
	parse: qi,
	render: Ji,
	init: Bi,
	run: Li,
	registerExternalDiagrams: Vi,
	registerLayoutLoaders: ye,
	initialize: zi,
	parseError: void 0,
	contentLoaded: Hi,
	setParseErrorHandler: Ui,
	detectType: te,
	registerIconPacks: _e,
	getRegisteredDiagramsMetadata: /* @__PURE__ */ t(() => Object.keys(w).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
}, Yi = q, J = (e) => e.replace(/\s*!important\s*$/i, "").trim(), Xi = (e, t) => {
	let n = t;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let r = n;
	for (; n < e.length && /[a-z-]/i.test(e[n]);) n += 1;
	if (n === r) return !1;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	return e[n] === ":";
}, Y = (e) => {
	let t = [], n = 0;
	for (; n < e.length;) {
		for (; n < e.length && /[\s;,]/.test(e[n]);) n += 1;
		if (n >= e.length) break;
		let r = n;
		for (; n < e.length && e[n] !== ":" && !(e[n] === ";" || e[n] === ",");) n += 1;
		if (n >= e.length || e[n] !== ":") break;
		let i = e.substring(r, n).trim().toLowerCase();
		n += 1;
		let a = n, o = 0, s = null;
		for (; n < e.length;) {
			let t = e[n];
			if (s) {
				t === s && e[n - 1] !== "\\" && (s = null), n += 1;
				continue;
			}
			if (t === "\"" || t === "'") {
				s = t, n += 1;
				continue;
			}
			if (t === "(") {
				o += 1, n += 1;
				continue;
			}
			if (t === ")") {
				o = Math.max(0, o - 1), n += 1;
				continue;
			}
			if (o === 0 && (t === ";" || t === "," || /\s/.test(t) && Xi(e, n))) break;
			n += 1;
		}
		let c = J(e.substring(a, n));
		i && c && t.push({
			property: i,
			value: c
		}), n < e.length && (e[n] === ";" || e[n] === ",") && (n += 1);
	}
	return t;
}, X = (e) => {
	let t = J(e);
	if (!t) return !1;
	if (typeof CSS < "u" && typeof CSS.supports == "function") return CSS.supports("color", t);
	if (typeof document < "u") {
		let e = document.createElement("div");
		return e.style.color = "", e.style.color = t, e.style.color !== "";
	}
	return !1;
}, Zi = (e, t) => {
	let n = e.getAttribute("style");
	return n && Y(n).find((e) => e.property === t)?.value || "";
}, Qi = (...e) => {
	for (let t of e) {
		let e = J(t || "");
		if (X(e)) return e;
	}
}, $i = (e, t) => {
	let n = e.querySelector("text, foreignObject, div, span, p") || e, r = Qi(n.getAttribute?.("fill"), Zi(n, "fill"), n.style?.fill);
	if (r) return r;
	let i = Qi(n.getAttribute?.("color"), Zi(n, "color"), n.style?.color);
	if (i) return i;
	let a = Qi(t);
	if (a) return a;
}, ea = (e, t, n) => {
	switch (t) {
		case A.FILL:
		case A.STROKE:
			X(n) && (e[t] = n);
			break;
		case A.STROKE_WIDTH:
		case A.STROKE_DASHARRAY:
			e[t] = n;
			break;
	}
}, ta = (e, t, n) => {
	t === k.COLOR && X(n) && (e[k.COLOR] = n);
}, na = (e, t, n) => {
	e && Y(e).forEach(({ property: e, value: r }) => {
		ea(t, e, r), ta(n, e, r);
	});
}, ra = (e, t) => {
	e && Y(e).forEach(({ property: e, value: n }) => {
		if (e === "fill" && X(n)) {
			t[k.COLOR] = n;
			return;
		}
		ta(t, e, n);
	});
}, ia = (e, t) => {
	e && [
		[A.FILL, e.getAttribute("fill")],
		[A.STROKE, e.getAttribute("stroke")],
		[A.STROKE_WIDTH, e.getAttribute("stroke-width")],
		[A.STROKE_DASHARRAY, e.getAttribute("stroke-dasharray")]
	].forEach(([e, n]) => {
		let r = J(n || "");
		r && ea(t, e, r);
	});
}, aa = (e, t) => {
	if (!e) return;
	let n = J(e.getAttribute("fill") || e.getAttribute("color") || "");
	X(n) && (t[k.COLOR] = n);
}, oa = (e, t, n, r) => {
	if (!(t instanceof Map)) return;
	let i = t.get(e);
	i && (i.styles?.forEach((e) => {
		Y(e).forEach(({ property: e, value: t }) => {
			ea(n, e, t), ta(r, e, t);
		});
	}), i.textStyles?.forEach((e) => {
		Y(e).forEach(({ property: e, value: t }) => {
			ta(r, e, t);
		});
	}));
}, sa = (e, t, n) => {
	let r = e.nodes.map((e) => e.startsWith("flowchart-") ? e.split("-")[1] : e), i = t.querySelector(`[id='${e.id}']`);
	if (!i) throw Error("SubGraph element not found");
	let a = ua(i, t), o = i.getBBox(), s = {
		width: o.width,
		height: o.height
	}, c = {}, l = {}, u = i.querySelector(":scope > rect, :scope > path, :scope > polygon, :scope > ellipse") || i.querySelector(".cluster > rect, .cluster > path, .cluster > polygon, .cluster > ellipse") || i.querySelector("rect, path, polygon, ellipse");
	na(i.getAttribute("style"), c, l), na(u?.getAttribute("style"), c, l), ia(u, c);
	let d = i.querySelector(".cluster-label text, .cluster-label tspan") || i.querySelector("text");
	return ra(d?.getAttribute("style"), l), aa(d, l), oa(e.id, n, c, l), e.classes?.forEach((e) => {
		oa(e, n, c, l);
	}), {
		id: e.id,
		nodeIds: r,
		text: L(e.title),
		labelType: "text",
		...a,
		...s,
		containerStyle: c,
		labelStyle: l
	};
}, ca = (e, t, n) => {
	let r = t.querySelector(`[id*="${e.domId}"]`);
	if (!r) return;
	let i;
	r.parentElement?.tagName.toLowerCase() === "a" && (i = r.parentElement.getAttribute("xlink:href"));
	let a = ua(i ? r.parentElement : r, t), o = r.getBBox(), s = {
		width: o.width,
		height: o.height
	}, c = {}, l = {};
	e.classes && n instanceof Map && (Array.isArray(e.classes) ? e.classes : [e.classes]).forEach((e) => {
		oa(e, n, c, l);
	}), e.styles?.forEach((e) => {
		na(e, c, l);
	});
	let u = r.querySelector(".label-container");
	return na(u?.getAttribute("style"), c, l), ia(u, c), Array.from(r.querySelectorAll(".label, .nodeLabel, .label text, .label tspan, .label span, .label div")).forEach((e) => {
		ra(e.getAttribute("style"), l), aa(e, l);
	}), {
		id: e.id,
		labelType: e.labelType,
		text: L(e.text || ""),
		type: e.type,
		link: i || void 0,
		...a,
		...s,
		containerStyle: c,
		labelStyle: l
	};
}, la = (e, t, n) => {
	let r = n.querySelector(`[id*="${e.id}"]`);
	if (!r) throw Error("Edge element not found");
	let i = Ot(r, ua(r, n));
	return e.length = void 0, {
		...e,
		...i,
		text: L(e.text)
	};
}, ua = (e, t) => {
	if (!e) throw Error("Element not found");
	let n = e.parentElement?.parentElement, r = e.childNodes[0], i = {
		x: 0,
		y: 0
	};
	if (r) {
		let { transformX: e, transformY: t } = R(r), n = r.getBBox();
		i = {
			x: Number(r.getAttribute("x")) || e + n.x || 0,
			y: Number(r.getAttribute("y")) || t + n.y || 0
		};
	}
	let { transformX: a, transformY: o } = R(e), s = {
		x: a + i.x,
		y: o + i.y
	};
	for (; n && n.id !== t.id;) {
		if (n.classList.value === "root" && n.hasAttribute("transform")) {
			let { transformX: e, transformY: t } = R(n);
			s.x += e, s.y += t;
		}
		n = n.parentElement;
	}
	return s;
}, da = (e, t) => {
	let n = e.getVertices(), r = e.getEdges(), i = e.getSubGraphs(), a = e.getClasses(), o = {}, s = a instanceof Map ? a : {};
	n instanceof Map ? n.forEach((e, n) => {
		o[n] = ca(e, t, s);
	}) : typeof n == "object" && n && Object.entries(n).forEach(([e, n]) => {
		o[e] = ca(n, t, s);
	});
	let c = /* @__PURE__ */ new Map(), l = (Array.isArray(r) ? r : []).map((e) => {
		if (!t.querySelector(`[id*="${e.id}"]`)) return null;
		let n = `${e.start}-${e.end}`, r = c.get(n) || 0;
		return c.set(n, r + 1), la(e, r, t);
	}).filter((e) => e !== null && e.reflectionPoints.length > 1);
	return {
		type: "flowchart",
		subGraphs: (Array.isArray(i) ? i : []).map((e) => sa(e, t, s)),
		vertices: o,
		edges: l
	};
}, fa = (e, t) => {
	let n = {};
	t?.label && (n.label = {
		text: L(t.label),
		fontSize: 16
	});
	let r = e.tagName;
	if (r === "line") n.startX = Number(e.getAttribute("x1")), n.startY = Number(e.getAttribute("y1")), n.endX = Number(e.getAttribute("x2")), n.endY = Number(e.getAttribute("y2"));
	else if (r === "path") {
		let t = e.getAttribute("d");
		if (!t) throw Error("Path element does not contain a \"d\" attribute");
		let r = t.split(/(?=[LC])/), i = r[0].substring(1).split(",").map((e) => parseFloat(e)), a = [];
		r.forEach((e) => {
			let t = e.substring(1).trim().split(" ").map((e) => {
				let [t, n] = e.split(",");
				return [parseFloat(t) - i[0], parseFloat(n) - i[1]];
			});
			a.push(...t);
		});
		let o = a[a.length - 1];
		n.startX = i[0], n.startY = i[1], n.endX = o[0], n.endY = o[1], n.points = a;
	}
	t?.label && (n.startY -= 10, n.endY -= 10);
	let i = e.getAttribute("stroke"), a = (i && i !== "none" ? i : "") || getComputedStyle(e).stroke || "";
	return n.strokeColor = a ? J(a) : null, n.strokeWidth = Number(e.getAttribute("stroke-width")), n.type = "arrow", n.strokeStyle = t?.strokeStyle || "solid", n.startArrowhead = t?.startArrowhead || null, n.endArrowhead = t?.endArrowhead || null, n;
}, pa = (e, t, n, r, i) => {
	let a = {};
	return a.type = "arrow", a.startX = e, a.startY = t, a.endX = n, a.endY = r, Object.assign(a, { ...i }), a;
}, ma = (e, t, n, r) => ({
	type: "text",
	x: e,
	y: t,
	text: n,
	width: r?.width || 20,
	height: r?.height || 20,
	fontSize: r?.fontSize || 20,
	id: r?.id,
	color: r?.color,
	groupId: r?.groupId,
	metadata: r?.metadata
}), ha = (e, t, n) => {
	let r = {}, i = Number(e.getAttribute("x")), a = Number(e.getAttribute("y"));
	r.type = "text", r.text = L(t), n?.id && (r.id = n.id), n?.groupId && (r.groupId = n.groupId);
	let o = e.getBBox();
	return r.width = o.width, r.height = o.height, r.x = i - o.width / 2, r.y = a, r.fontSize = parseInt(getComputedStyle(e).fontSize), r.color = $i(e), r;
}, Z = (e, t, n = {}) => {
	let r = {};
	r.type = t;
	let { label: i, subtype: a, id: o, groupId: s } = n;
	r.id = o, s && (r.groupId = s), i && (r.label = {
		text: L(i.text),
		fontSize: 16,
		textAlign: i?.textAlign,
		verticalAlign: i?.verticalAlign
	});
	let c = e.getBBox();
	switch (r.x = c.x, r.y = c.y, r.width = c.width, r.height = c.height, r.subtype = a, a) {
		case "highlight":
			let t = e.getAttribute("fill");
			t && (r.bgColor = J(t));
			break;
		case "note":
			r.strokeStyle = "dashed";
			break;
	}
	return r;
}, ga = (e, t, n, r, i, a) => {
	let o = {};
	o.startX = t, o.startY = n, o.endX = r, a?.groupId && (o.groupId = a.groupId), a?.id && (o.id = a.id), o.endY = i;
	let s = e.getAttribute("stroke");
	return o.strokeColor = s ? J(s) : null, o.strokeWidth = Number(e.getAttribute("stroke-width")), o.type = "line", o;
}, _a = {
	0: "SOLID",
	1: "DOTTED",
	3: "SOLID_CROSS",
	4: "DOTTED_CROSS",
	5: "SOLID_OPEN",
	6: "DOTTED_OPEN",
	24: "SOLID_POINT",
	25: "DOTTED_POINT"
}, Q = {
	SOLID: 0,
	DOTTED: 1,
	NOTE: 2,
	SOLID_CROSS: 3,
	DOTTED_CROSS: 4,
	SOLID_OPEN: 5,
	DOTTED_OPEN: 6,
	LOOP_START: 10,
	LOOP_END: 11,
	ALT_START: 12,
	ALT_ELSE: 13,
	ALT_END: 14,
	OPT_START: 15,
	OPT_END: 16,
	ACTIVE_START: 17,
	ACTIVE_END: 18,
	PAR_START: 19,
	PAR_AND: 20,
	PAR_END: 21,
	RECT_START: 22,
	RECT_END: 23,
	SOLID_POINT: 24,
	DOTTED_POINT: 25,
	AUTONUMBER: 26,
	CRITICAL_START: 27,
	CRITICAL_OPTION: 28,
	CRITICAL_END: 29,
	BREAK_START: 30,
	BREAK_END: 31,
	PAR_OVER_START: 32
}, va = (e) => {
	let t;
	switch (e) {
		case Q.SOLID:
		case Q.SOLID_CROSS:
		case Q.SOLID_OPEN:
		case Q.SOLID_POINT:
			t = "solid";
			break;
		case Q.DOTTED:
		case Q.DOTTED_CROSS:
		case Q.DOTTED_OPEN:
		case Q.DOTTED_POINT:
			t = "dotted";
			break;
		default:
			t = "solid";
			break;
	}
	return t;
}, ya = (e, t) => {
	if (e.nextElementSibling?.classList.contains("sequenceNumber")) {
		let n = e.nextElementSibling?.textContent;
		if (!n) throw Error("sequence number not present");
		let r = {
			type: "rectangle",
			x: t.startX - 10,
			y: t.startY - 15,
			label: {
				text: n,
				fontSize: 14
			},
			bgColor: "#e9ecef",
			height: 30,
			subtype: "sequence"
		};
		Object.assign(t, { sequenceNumber: r });
	}
}, ba = (e, t, n) => {
	if (!e) throw "root node not found";
	let r = j(), i = Array.from(e.children), a = [];
	return i.forEach((e, i) => {
		let o = `${n?.id}-${i}`, s;
		switch (e.tagName) {
			case "line":
				s = ga(e, Number(e.getAttribute("x1")), Number(e.getAttribute("y1")), Number(e.getAttribute("x2")), Number(e.getAttribute("y2")), {
					groupId: r,
					id: o
				});
				break;
			case "text":
				s = ha(e, t, {
					groupId: r,
					id: o
				});
				break;
			case "circle": s = Z(e, "ellipse", {
				label: e.textContent ? { text: e.textContent } : void 0,
				groupId: r,
				id: o
			});
			default: s = Z(e, be[e.tagName], {
				label: e.textContent ? { text: e.textContent } : void 0,
				groupId: r,
				id: o
			});
		}
		a.push(s);
	}), a;
}, xa = (e, t) => {
	let n = t.getAttribute("fill"), r = t.getAttribute("stroke"), i = t.getAttribute("stroke-width"), a = t.getAttribute("stroke-dasharray");
	n && n !== "none" && (e.bgColor = J(n)), r && r !== "none" && (e.strokeColor = J(r)), i && (e.strokeWidth = Number(i)), a && a.trim() && (e.strokeStyle = "dashed");
}, Sa = (e, t) => {
	let n = Array.from(t.querySelectorAll(".actor-top")), r = Array.from(t.querySelectorAll(".actor-bottom")), i = [], a = [], o = {}, s = e instanceof Map ? Array.from(e.values()) : Object.values(e), c = Array.from(t.querySelectorAll(".actor-line")), l = (e, t) => {
		let n = e.name, r = c.find((e) => e.getAttribute("name") === n);
		if (r) return r;
		let i = e.type === "participant" ? t.parentElement?.previousElementSibling : t.previousElementSibling;
		return i ? i.tagName === "line" ? i : i.querySelector("line") : null;
	};
	return s.forEach((e) => {
		let t = n.find((t) => t.getAttribute("name") === e.name), s = r.find((t) => t.getAttribute("name") === e.name);
		if (!t || !s) throw "root not found";
		let c = e.description;
		if (e.type === "participant") {
			let n = Z(t, "rectangle", {
				id: `${e.name}-top`,
				label: { text: c },
				subtype: "actor"
			});
			if (xa(n, t), !n) throw "Top Node element not found!";
			i.push([n]);
			let r = Z(s, "rectangle", {
				id: `${e.name}-bottom`,
				label: { text: c },
				subtype: "actor"
			});
			o[e.name] = {
				topId: `${e.name}-top`,
				bottomId: `${e.name}-bottom`,
				bindType: "rectangle"
			}, xa(r, s), i.push([r]);
			let u = l(e, t);
			if (u?.tagName !== "line") throw "Line not found";
			let d = Number(u.getAttribute("x1"));
			if (!n.height) throw "Top node element height is null";
			let f = n.y + n.height, p = r.y, m = ga(u, d, f, Number(u.getAttribute("x2")), p);
			a.push(m);
		} else if (e.type === "actor") {
			let n = ba(t, c, { id: `${e.name}-top` });
			i.push(n);
			let r = ba(s, c, { id: `${e.name}-bottom` });
			i.push(r);
			let u = l(e, t);
			if (u?.tagName !== "line") throw "Line not found";
			let d = Number(u.getAttribute("x1")), f = Number(u.getAttribute("y1")), p = Number(u.getAttribute("x2")), m = r.find((e) => e.type === "ellipse");
			if (m) {
				let e = m.y, t = ga(u, d, f, p, e);
				a.push(t);
			}
			let h = n.find((e) => e.type === "ellipse"), g = r.find((e) => e.type === "ellipse");
			h?.id && g?.id && (o[e.name] = {
				topId: h.id,
				bottomId: g.id,
				bindType: "ellipse"
			});
		}
	}), {
		nodes: i,
		lines: a,
		actorMap: o
	};
}, Ca = (e, t, n) => {
	let r = [], i = Array.from(t.querySelectorAll("[class*=\"messageLine\"]")), a = Object.keys(_a), o = e.filter((e) => a.includes(e.type.toString()));
	return i.forEach((e, t) => {
		let i = o[t], a = _a[i.type], s = fa(e, {
			label: i?.message,
			strokeStyle: va(i.type),
			endArrowhead: a === "SOLID_OPEN" || a === "DOTTED_OPEN" ? null : "arrow"
		}), c = n[i.from], l = n[i.to];
		c?.topId && l?.topId && (s.start = {
			type: c.bindType || "rectangle",
			id: c.topId
		}, s.end = {
			type: l.bindType || "rectangle",
			id: l.topId
		}), ya(e, s), r.push(s);
	}), r;
}, wa = (e, t) => {
	let n = Array.from(t.querySelectorAll(".note")).map((e) => e.parentElement), r = e.filter((e) => e.type === Q.NOTE), i = [];
	return n.forEach((e, t) => {
		if (!e) return;
		let n = e.firstChild, a = r[t].message, o = Z(n, "rectangle", {
			label: { text: a },
			subtype: "note"
		}), s = n.getAttribute("fill"), c = n.getAttribute("stroke"), l = n.getAttribute("stroke-width"), u = n.getAttribute("stroke-dasharray");
		s && s !== "none" && (o.bgColor = J(s)), c && c !== "none" && (o.strokeColor = J(c)), l && (o.strokeWidth = Number(l)), u && u.trim() && (o.strokeStyle = "dashed"), i.push(o);
	}), i;
}, Ta = (e) => {
	let t = Array.from(e.querySelectorAll("[class*=activation]")), n = [];
	return t.forEach((e) => {
		let t = Z(e, "rectangle", {
			label: { text: "" },
			subtype: "activation"
		});
		(() => {
			let n = e.getAttribute("fill"), r = e.getAttribute("stroke"), i = e.getAttribute("stroke-width"), a = e.getAttribute("stroke-dasharray");
			n && n !== "none" && (t.bgColor = J(n)), r && r !== "none" && (t.strokeColor = J(r)), i && (t.strokeWidth = Number(i)), a && a.trim() && (t.strokeStyle = "dashed");
		})(), n.push(t);
	}), n;
}, Ea = (e, t) => {
	let n = Array.from(t.querySelectorAll(".loopLine")), r = [], i = [], a = [];
	n.forEach((e) => {
		let t = ga(e, Number(e.getAttribute("x1")), Number(e.getAttribute("y1")), Number(e.getAttribute("x2")), Number(e.getAttribute("y2")));
		t.strokeStyle = "dotted", t.strokeColor = "#adb5bd", t.strokeWidth = 2, r.push(t);
	});
	let o = Array.from(t.querySelectorAll(".loopText")), s = e.filter((e) => e.type === Q.CRITICAL_START).map((e) => e.message);
	o.forEach((e) => {
		let t = e.textContent || "", n = ha(e, t), r = t.match(/\[(.*?)\]/)?.[1] || "";
		s.includes(r) && (n.x += 16), i.push(n);
	});
	let c = Array.from(t?.querySelectorAll(".labelBox")), l = Array.from(t?.querySelectorAll(".labelText"));
	return c.forEach((e, t) => {
		let n = Z(e, "rectangle", { label: { text: l[t]?.textContent || "" } });
		n.strokeColor = "#adb5bd", n.bgColor = "#e9ecef", n.width = void 0, a.push(n);
	}), {
		lines: r,
		texts: i,
		nodes: a
	};
}, Da = (e) => {
	let t = Array.from(e.querySelectorAll(".rect")).filter((e) => e.parentElement?.tagName !== "g"), n = [];
	return t.forEach((e) => {
		let t = Z(e, "rectangle", {
			label: { text: "" },
			subtype: "highlight"
		});
		n.push(t);
	}), n;
}, Oa = (e, t) => {
	let n = e.db, r = [], i = n.getBoxes().map((e) => ({
		...e,
		fill: J(e.fill || "")
	})), a = Da(t), { nodes: o, lines: s, actorMap: c } = Sa(n.getActors(), t), l = n.getMessages(), u = Ca(l, t, c), d = wa(l, t), f = Ta(t), p = Ea(l, t);
	return r.push(a), r.push(...o), r.push(d), r.push(f), {
		type: "sequence",
		lines: s,
		arrows: u,
		nodes: r,
		loops: p,
		groups: i
	};
}, ka = (e) => {
	let t = {};
	return e && e.forEach((e) => {
		Y(e).forEach(({ property: e, value: n }) => {
			e && n && (t[e] = J(n));
		});
	}), t;
}, Aa = {
	AGGREGATION: 0,
	EXTENSION: 1,
	COMPOSITION: 2,
	DEPENDENCY: 3,
	LOLLIPOP: 4
}, ja = {
	LINE: 0,
	DOTTED_LINE: 1
}, Ma = 16, Na = (e) => {
	let t;
	switch (e) {
		case ja.LINE:
			t = "solid";
			break;
		case ja.DOTTED_LINE:
			t = "dotted";
			break;
		default: t = "solid";
	}
	return t;
}, Pa = (e) => {
	let t;
	switch (e) {
		case Aa.AGGREGATION:
			t = "diamond_outline";
			break;
		case Aa.COMPOSITION:
			t = "diamond";
			break;
		case Aa.EXTENSION:
			t = "triangle_outline";
			break;
		case "none":
			t = null;
			break;
		case Aa.DEPENDENCY:
		default:
			t = "arrow";
			break;
	}
	return t;
}, Fa = (e, t) => {
	let n = 0, r = 0, i = e;
	for (; i && i !== t;) {
		let { transformX: e, transformY: t } = R(i);
		n += e, r += t, i = i.parentElement;
	}
	return {
		tx: n,
		ty: r
	};
}, Ia = /* @__PURE__ */ new Set([
	"triangle_outline",
	"diamond",
	"diamond_outline"
]), La = (e, t = .5) => {
	if (e.length <= 2) return [...e];
	let n = [e[0]];
	for (let r = 1; r < e.length - 1; r++) {
		let i = n[n.length - 1], a = e[r], o = e[r + 1], s = o.x - i.x, c = o.y - i.y, l = Math.hypot(s, c);
		if (!l) continue;
		let u = Math.abs(s * (a.y - i.y) - c * (a.x - i.x)) / l, d = ((a.x - i.x) * s + (a.y - i.y) * c) / (l * l);
		u <= t && d >= -t && d <= 1 + t || n.push(a);
	}
	return n.push(e[e.length - 1]), n;
}, Ra = (e) => {
	let t = Tt(Dt(e).map((e) => [e.x, e.y])).map(([e, t]) => ({
		x: e,
		y: t
	})), n = Et(e);
	return n && t.length >= 2 && (t[0] = {
		x: n.startX,
		y: n.startY
	}, t[t.length - 1] = {
		x: n.endX,
		y: n.endY
	}), La(t);
}, za = (e, t, n) => {
	let r = e.x - t.x, i = e.y - t.y, a = Math.hypot(r, i);
	return a ? {
		x: e.x + r / a * n,
		y: e.y + i / a * n
	} : e;
}, Ba = (e, t) => {
	let n = Tt(t.map((e) => [e.x, e.y])).map(([e, t]) => ({
		x: e,
		y: t
	}));
	if (n.length < 2) throw Error("Arrow route must contain at least two points");
	let r = n[0], i = n[n.length - 1];
	e.startX = r.x, e.startY = r.y, e.endX = i.x, e.endY = i.y, e.points = n.map((e) => [e.x - r.x, e.y - r.y]);
}, Va = (e) => {
	let t = e.points?.map(([t, n]) => ({
		x: e.startX + t,
		y: e.startY + n
	})).filter((e) => Number.isFinite(e.x) && Number.isFinite(e.y));
	if (!t || t.length < 2) return e;
	let n = [...t], r = !!e.startArrowhead && Ia.has(e.startArrowhead), i = !!e.endArrowhead && Ia.has(e.endArrowhead);
	if (!r && !i) return e;
	if (r && (n[0] = za(n[0], n[1], Ma)), i) {
		let e = n.length - 1;
		n[e] = za(n[e], n[e - 1], Ma);
	}
	return Ba(e, n), e;
}, Ha = (e, t) => {
	let n = J(e.getAttribute("stroke") || getComputedStyle(e).stroke || ""), r = parseFloat(e.getAttribute("stroke-width") || getComputedStyle(e).strokeWidth || "1");
	X(n) && n !== "none" && (t.strokeColor = n), Number.isFinite(r) && r > 0 && (t.strokeWidth = r);
}, Ua = (e) => {
	let t = [];
	return e.forEach((e) => {
		Ra(e).forEach((e) => {
			let n = t[t.length - 1];
			n && n.x === e.x && n.y === e.y || t.push(e);
		});
	}), La(t);
}, Wa = (e, t, n) => {
	if (e.length < 2) throw Error(`Class diagram edge ${t?.id || "<unknown>"} is missing usable path points`);
	let r = e[0], i = e[e.length - 1], a = pa(r.x, r.y, i.x, i.y, {
		id: t?.getAttribute("data-id") || t?.id || void 0,
		...n,
		points: e.map((e) => [e.x - r.x, e.y - r.y])
	});
	return t && Ha(t, a), Va(a);
}, Ga = (e, t) => Wa(Ua(e), e[0], t), Ka = (e, t) => {
	let n = Ra(e);
	return Wa([n[0], n[n.length - 1]], e, t);
}, qa = (e, t) => Ga([e], t), Ja = (e, t) => [
	`${e}-cyclic-special-1`,
	`${e}-cyclic-special-mid`,
	`${e}-cyclic-special-2`
].map((e) => t.querySelector(`path[id="${e}"][data-edge="true"]`)).filter((e) => e !== null), Ya = (e) => e.points?.map(([t, n]) => ({
	x: e.startX + t,
	y: e.startY + n
})).filter((e) => Number.isFinite(e.x) && Number.isFinite(e.y)) || [], Xa = (e, t) => {
	let n = Ya(e);
	if (n.length < 2) return null;
	let r = t === "start", i = r ? n[0] : n[n.length - 1], a = r ? n[1] : n[n.length - 2], o = a.x === i.x ? r ? -1 : 1 : Math.sign(a.x - i.x), s = a.y === i.y ? 1 : Math.sign(a.y - i.y);
	return {
		x: i.x + o * 20,
		y: i.y + (s >= 0 ? 12 : -28)
	};
}, Za = (e, t) => {
	let n = e;
	for (; n && n !== t;) {
		if (n.classList.contains("annotation-group") || n.classList.contains("label-group")) return "header";
		if (n.classList.contains("members-group")) return "members";
		if (n.classList.contains("methods-group")) return "methods";
		n = n.parentElement;
	}
	return "other";
}, Qa = (e, t, n) => {
	let r = [], i = [], a = [];
	return Object.values(e).forEach((e) => {
		let { domId: o, id: s } = e, c = j(), l = ka(e.styles || e.cssStyles), u;
		try {
			u = n ? n(s) : void 0;
		} catch {
			u = void 0;
		}
		let d = u && t.querySelector(`#${u}`) || t.querySelector(`#${o}`) || t.querySelector(`[data-id='${s}']`) || ((e) => {
			let n = RegExp(`^classId-${e}(?:-|$)`);
			return Array.from(t.querySelectorAll("[id]")).filter((e) => n.test(e.id))[0];
		})(s);
		if (!d) throw Error(`DOM Node with id ${o} not found`);
		let f = d.querySelector("rect") || d, p = f.getBBox(), { tx: m, ty: h } = Fa(f, t), g = {
			type: "rectangle",
			id: s,
			groupId: c,
			x: p.x + m,
			y: p.y + h,
			width: p.width,
			height: p.height,
			metadata: { classId: s }
		}, _ = f.getAttribute("fill"), v = f.getAttribute("stroke"), y = f.getAttribute("stroke-width"), b = f.getAttribute("stroke-dasharray"), x = getComputedStyle(f), S = J(_ || l.fill || (_ ? x.fill : "")), C = J(v || l.stroke || (v ? x.stroke : "")), w = y || l["stroke-width"] || (y ? x.strokeWidth : ""), ee = b || l["stroke-dasharray"] || (b ? x.strokeDasharray === "none" ? "" : x.strokeDasharray : ""), te = (e) => {
			if (!e || !X(e)) return !1;
			let t = e.toLowerCase();
			return !(t === "none" || t === "transparent" || t === "rgba(0, 0, 0, 0)" || t === "black" || t === "#000" || t === "#000000" || t === "rgb(0, 0, 0)" || t === "rgba(0, 0, 0, 1)");
		};
		te(S) ? g.bgColor = S : g.bgColor = void 0, te(C) ? g.strokeColor = C : g.strokeColor = void 0, w ? g.strokeWidth = Number(w) : g.strokeWidth = void 0, ee && ee.trim().length > 0 ? g.strokeStyle = "dashed" : g.strokeStyle = void 0, r.push(g), [...Array.from(d.querySelectorAll("line")), ...Array.from(d.querySelectorAll("g.divider path"))].forEach((e) => {
			let { tx: n, ty: r } = Fa(e, t), a, o, l, u;
			if (e.tagName.toLowerCase() === "line") a = Number(e.getAttribute("x1")) + n, o = Number(e.getAttribute("y1")) + r, l = Number(e.getAttribute("x2")) + n, u = Number(e.getAttribute("y2")) + r;
			else {
				let t = e.getBBox();
				a = t.x + n, l = t.x + t.width + n;
				let i = t.y + t.height / 2 + r;
				o = i, u = i;
			}
			if (a === l && o === u) return;
			let d = ga(e, a, o, l, u, {
				groupId: c,
				id: j()
			});
			g.strokeColor ? d.strokeColor = g.strokeColor : d.strokeColor = void 0, g.strokeWidth === void 0 ? d.strokeWidth = void 0 : d.strokeWidth = g.strokeWidth, g.strokeStyle ? d.strokeStyle = g.strokeStyle : d.strokeStyle = void 0, d.metadata = { classId: s }, i.push(d);
		});
		let ne = Array.from(d.querySelectorAll("text, foreignObject")), T = [];
		ne.forEach((e) => {
			let n = e.tagName.toLowerCase() === "foreignobject", r = n ? [] : Array.from(e.querySelectorAll("tspan")), i = r.length ? r.map((e) => e.textContent?.trim()).filter(Boolean).join("\n") : e.textContent?.trim() || "";
			if (!i) return;
			let a = e.getBBox(), { ty: o } = Fa(e, t), s = parseFloat(getComputedStyle(e).fontSize || "");
			if (n && (!Number.isFinite(s) || !s)) {
				let t = e.querySelector("div, span, p");
				t && (s = parseFloat(getComputedStyle(t).fontSize || ""));
			}
			(!Number.isFinite(s) || s <= 0) && (s = Math.max(12, a.height * .6)), s *= .9;
			let c = $i(e, l.color);
			T.push({
				section: Za(e, d),
				text: L(i),
				x: a.x,
				y: a.y + o,
				width: g && g.width ? Math.max(g.width - 8, a.width) : a.width,
				height: a.height,
				fontSize: s,
				color: c
			});
		});
		let re = T.filter((e) => e.section === "header").sort((e, t) => e.y - t.y || e.x - t.x);
		if (!g.label) {
			let e = re.length === 0 && T.length === 1 ? T : re;
			e.length > 0 && (g.label = {
				text: e.map((e) => e.text).join("\n"),
				fontSize: Math.max(...e.map((e) => e.fontSize)),
				color: e.find((e) => e.color)?.color,
				verticalAlign: "top"
			});
		}
		T.filter((e) => re.length > 0 ? e.section !== "header" : !(g.label && T.length === 1)).forEach((e) => {
			let t = ma((g?.x || 0) + 4, e.y, e.text, {
				width: e.width,
				height: e.height,
				fontSize: e.fontSize,
				color: e.color,
				id: j(),
				groupId: c,
				metadata: { classId: s }
			});
			a.push(t);
		});
	}), {
		nodes: r,
		lines: i,
		text: a
	};
}, $a = (e, t, n, r) => {
	let i = Array.from(n.querySelectorAll(".edgePaths path[data-edge=\"true\"]:not([id^=\"edgeNote\"]):not([id*=\"-cyclic-special-\"])"));
	if (e.length === 0) return {
		arrows: [],
		text: []
	};
	let a = [], o = [], s = 0;
	return e.forEach((e) => {
		let { id1: c, id2: l, relation: u } = e, d = t.find((e) => e.id === c), f = t.find((e) => e.id === l);
		if (!d) throw Error(`parseRelations: Cannot find node with id ${c}`);
		if (!f) throw Error(`parseRelations: Cannot find node with id ${l}`);
		let p = Na(u.lineType), m = Pa(u.type1), h = Pa(u.type2), g;
		if (c === l) {
			let t = Ja(c, n);
			if (!t.length) throw Error(`parseRelations: Cannot find rendered SVG edge for relation ${c} -> ${l}`);
			g = Ga(t, {
				strokeStyle: p,
				startArrowhead: m,
				endArrowhead: h,
				label: e.title ? { text: e.title } : void 0,
				start: {
					type: "rectangle",
					id: d.id
				},
				end: {
					type: "rectangle",
					id: f.id
				}
			});
		} else {
			let t = i[s];
			if (!t) throw Error(`parseRelations: Cannot find rendered SVG edge for relation ${c} -> ${l}`);
			s += 1, g = Ka(t, {
				strokeStyle: p,
				startArrowhead: m,
				endArrowhead: h,
				label: e.title ? { text: e.title } : void 0,
				start: {
					type: "rectangle",
					id: d.id
				},
				end: {
					type: "rectangle",
					id: f.id
				}
			});
		}
		a.push(g);
		let { relationTitle1: _, relationTitle2: v } = e, y = c === l, b, x;
		if (_ && _ !== "none") {
			if (y) {
				let e = Xa(g, "start");
				e && (b = e.x, x = e.y);
			} else switch (r) {
				case "TB":
					b = g.startX - 20, g.endX < g.startX && (b -= 15), x = g.startY + 15;
					break;
				case "BT":
					b = g.startX + 20, g.endX > g.startX && (b += 15), x = g.startY - 15;
					break;
				case "LR":
					b = g.startX + 20, x = g.startY + 15, g.endY > g.startY && (x += 15);
					break;
				case "RL":
					b = g.startX - 20, x = g.startY - 15, g.startY > g.endY && (x -= 15);
					break;
				default: b = g.startX - 20, x = g.startY + 15;
			}
			b ??= g.startX - 20, x ??= g.startY + 15;
			let e = ma(b, x, _, { fontSize: 16 });
			o.push(e);
		}
		if (v && v !== "none") {
			if (y) {
				let e = Xa(g, "end");
				e && (b = e.x, x = e.y);
			} else switch (r) {
				case "TB":
					b = g.endX + 20, g.endX < g.startX && (b += 15), x = g.endY - 15;
					break;
				case "BT":
					b = g.endX - 20, g.endX > g.startX && (b -= 15), x = g.endY + 15;
					break;
				case "LR":
					b = g.endX - 20, x = g.endY - 15, g.endY > g.startY && (x -= 15);
					break;
				case "RL":
					b = g.endX + 20, x = g.endY + 15, g.startY > g.endY && (x += 15);
					break;
				default: b = g.endX + 20, x = g.endY - 15;
			}
			b ??= g.endX + 20, x ??= g.endY + 15;
			let e = ma(b, x, v, { fontSize: 16 });
			o.push(e);
		}
	}), {
		arrows: a,
		text: o
	};
}, eo = (e, t, n) => {
	let r = [], i = [];
	return e.forEach((e, a) => {
		let { id: o, text: s, class: c } = e, l = t.querySelector(`#${o}`);
		if (!l) throw Error(`Node with id ${o} not found!`);
		let { transformX: u, transformY: d } = R(l), f = l.firstChild, p = Z(f, "rectangle", {
			id: o,
			subtype: "note",
			label: { text: s }
		});
		if (Object.assign(p, {
			x: p.x + u,
			y: p.y + d
		}), r.push(p), c) {
			let e = n.find((e) => e.id === c);
			if (!e) throw Error(`class node with id ${c} not found!`);
			let r = t.querySelector(`path[id="edgeNote${a + 1}"][data-edge="true"]`);
			if (r) {
				i.push(qa(r, {
					strokeStyle: "dotted",
					startArrowhead: null,
					endArrowhead: null,
					start: {
						id: p.id,
						type: "rectangle"
					},
					end: {
						id: e.id,
						type: "rectangle"
					}
				}));
				return;
			}
			let o = p.x + (p.width || 0) / 2, s = p.y + (p.height || 0), l = o, u = e.y, d = pa(o, s, l, u, {
				strokeStyle: "dotted",
				startArrowhead: null,
				endArrowhead: null,
				start: {
					id: p.id,
					type: "rectangle"
				},
				end: {
					id: e.id,
					type: "rectangle"
				}
			});
			i.push(d);
		}
	}), {
		notes: r,
		connectors: i
	};
}, to = (e, t) => {
	let n = e.db, r = n.getDirection?.() || "TB", i = [], a = [], o = [], s = [], c = n.getNamespaces?.() || [], l = n.getClasses?.() || {}, u = l instanceof Map ? Object.fromEntries(l) : l;
	if (u && Object.keys(u).length) {
		let e = Qa(u, t, typeof n.lookUpDomId == "function" ? n.lookUpDomId.bind(n) : void 0);
		i.push(e.nodes), a.push(...e.lines), o.push(...e.text), s.push(...e.nodes);
	}
	let { arrows: d, text: f } = $a(n.getRelations?.() || [], s, t, r), { notes: p, connectors: m } = eo(n.getNotes?.() || [], t, s);
	return i.push(p), d.push(...m), o.push(...f), {
		type: "class",
		nodes: i,
		lines: a,
		arrows: d,
		text: o,
		namespaces: c
	};
}, no = 18, ro = (e) => {
	let t = {};
	return e && e.forEach((e) => {
		Y(e).forEach(({ property: e, value: n }) => {
			e && n && (t[e] = J(n));
		});
	}), t;
}, io = (e) => {
	if (e == null || e === "") return;
	let t = typeof e == "number" ? e : parseFloat(J(e));
	if (!(!Number.isFinite(t) || t <= 0)) return t;
}, ao = (e, t) => {
	let n = 0, r = 0, i = e;
	for (; i && i !== t;) {
		let { transformX: e, transformY: t } = R(i);
		n += e, r += t, i = i.parentElement;
	}
	return {
		tx: n,
		ty: r
	};
}, oo = (e) => {
	let t = Array.from(e.querySelectorAll("tspan"));
	return L(t.length ? t.map((e) => e.textContent?.trim()).filter(Boolean).join("\n") : e.textContent?.trim() || "");
}, so = (e) => {
	let t = e.querySelector("text, foreignObject, div, span, p") || e, n = parseFloat(getComputedStyle(t).fontSize || "");
	return (!Number.isFinite(n) || n <= 0) && (n = Math.max(12, e.getBBox().height * .75)), n;
}, co = (e, t, n) => {
	let r = oo(e);
	if (!r) return null;
	let i = e.getBBox(), { tx: a, ty: o } = ao(e, t);
	return {
		className: e.getAttribute("class") || "",
		text: r,
		x: i.x + a,
		y: i.y + o,
		width: i.width,
		height: i.height,
		fontSize: so(e),
		color: $i(e, n)
	};
}, lo = (e, t, n, r, i, a, o) => {
	let { tx: s, ty: c } = ao(e, t), l = 0, u = 0, d = 0, f = 0;
	if (e.tagName.toLowerCase() === "line") l = Number(e.getAttribute("x1")) + s, u = Number(e.getAttribute("y1")) + c, d = Number(e.getAttribute("x2")) + s, f = Number(e.getAttribute("y2")) + c;
	else {
		let t = Et(e);
		if (!t) return null;
		l = t.startX + s, u = t.startY + c, d = t.endX + s, f = t.endY + c;
	}
	let p = {
		type: "line",
		id: j(),
		groupId: n,
		startX: l,
		startY: u,
		endX: d,
		endY: f,
		metadata: { entityId: r }
	};
	return i && X(i) && i !== "none" && (p.strokeColor = i), a !== void 0 && (p.strokeWidth = a), o && (p.strokeStyle = o), p;
}, uo = (e) => {
	switch (e?.toLowerCase()) {
		case "one": return "cardinality_one";
		case "many": return "cardinality_many";
		case "only_one": return "cardinality_exactly_one";
		case "one_or_more": return "cardinality_one_or_many";
		case "zero_or_one": return "cardinality_zero_or_one";
		case "zero_or_more": return "cardinality_zero_or_many";
		default: return null;
	}
}, fo = (e) => {
	switch (e) {
		case "dotted": return "dotted";
		case "dashed": return "dashed";
		default: return "solid";
	}
}, po = (e, t) => {
	let n = t.querySelector(`path[id="${e.id}"][data-edge="true"]`);
	return n ? [n] : e.start === e.end ? [
		`${e.start}-cyclic-special-1`,
		`${e.start}-cyclic-special-mid`,
		`${e.start}-cyclic-special-2`
	].map((e) => t.querySelector(`path[id="${e}"][data-edge="true"]`)).filter((e) => e !== null) : [];
}, mo = (e) => {
	let t = [];
	return e.forEach((e) => {
		Dt(e).forEach((e) => {
			let n = t[t.length - 1];
			n && n.x === e.x && n.y === e.y || t.push(e);
		});
	}), t;
}, ho = (e, t) => {
	let n = t.querySelector(`[id="${e.id}"]`);
	if (!n) throw Error(`ER entity ${e.id} not found in rendered SVG`);
	let r = e.attributes.length ? j() : void 0, i = n.getBBox(), { tx: a, ty: o } = ao(n, t), s = ro([...e.cssStyles || [], ...e.cssCompiledStyles || []]), c = J(s.fill || ""), l = J(s.stroke || ""), u = io(s["stroke-width"]), d = J(s["stroke-dasharray"] || ""), f = Array.from(n.querySelectorAll("g.label")).map((e) => co(e, t, s.color)).filter((e) => e !== null), p = f.find((e) => e.className.includes("name")) || f[0], m = f.filter((e) => e !== p), h = p?.text || L(e.alias || e.label || ""), g = {
		type: "rectangle",
		id: e.id,
		groupId: r,
		x: i.x + a,
		y: i.y + o,
		width: i.width,
		height: i.height,
		label: {
			text: h,
			fontSize: e.attributes.length ? no : p?.fontSize || 16,
			color: p?.color,
			textAlign: "center",
			verticalAlign: e.attributes.length ? "top" : "middle"
		},
		metadata: {
			entityId: e.id,
			entityLabel: e.label,
			entityAlias: e.alias
		}
	};
	return X(c) && c !== "none" && (g.bgColor = c), X(l) && l !== "none" && (g.strokeColor = l), u && Number.isFinite(u) && u > 0 && (g.strokeWidth = u), d && d !== "none" && (g.strokeStyle = "dashed"), {
		container: g,
		lines: Array.from(n.querySelectorAll(".divider path, path.divider, line.divider")).map((n) => lo(n, t, r, e.id, g.strokeColor, g.strokeWidth, g.strokeStyle)).filter((e) => e !== null),
		text: m.map((t) => ma(t.x, t.y, t.text, {
			id: j(),
			groupId: r,
			width: t.width,
			height: t.height,
			fontSize: no,
			color: t.color,
			metadata: { entityId: e.id }
		}))
	};
}, go = (e, t) => {
	let n = po(e, t);
	if (!n.length) throw Error(`ER relationship ${e.id} not found in rendered SVG`);
	let r = mo(n);
	if (r.length < 2) throw Error(`ER relationship ${e.id} is missing usable path points`);
	let i = r[0], a = r[r.length - 1], o = n[0], s = J(o.getAttribute("stroke") || getComputedStyle(o).stroke || ""), c = Number(o.getAttribute("stroke-width") || getComputedStyle(o).strokeWidth || 1), l = pa(i.x, i.y, a.x, a.y, {
		id: e.id,
		label: e.label ? {
			text: L(e.label),
			fontSize: 16,
			textAlign: "center"
		} : void 0,
		strokeStyle: fo(e.pattern),
		startArrowhead: uo(e.arrowTypeStart),
		endArrowhead: uo(e.arrowTypeEnd),
		start: {
			type: "rectangle",
			id: e.start
		},
		end: {
			type: "rectangle",
			id: e.end
		},
		points: r.map((e) => [e.x - i.x, e.y - i.y])
	});
	return X(s) && s !== "none" && (l.strokeColor = s), Number.isFinite(c) && c > 0 && (l.strokeWidth = c), l;
}, _o = (e, t) => {
	let n = e.getData(), r = n.nodes, i = n.edges, a = [], o = [], s = [];
	r.forEach((e) => {
		let n = ho(e, t);
		a.push(n.container), o.push(...n.lines), s.push(...n.text);
	});
	let c = i.map((e) => go(e, t));
	return {
		type: "erd",
		nodes: [a],
		lines: o,
		arrows: c,
		text: s
	};
}, $ = (e) => {
	let t = J(e || "");
	return !t || t === "none" || t === "transparent" || t === "rgba(0, 0, 0, 0)" || t === "rgba(0,0,0,0)" ? !1 : X(t);
}, vo = (e, t, n) => {
	switch (t) {
		case A.FILL:
		case A.STROKE:
			$(n) && (e[t] = J(n));
			break;
		case A.STROKE_WIDTH:
		case A.STROKE_DASHARRAY:
			J(n) && (e[t] = J(n));
			break;
	}
}, yo = (e, t, n) => {
	t === k.COLOR && $(n) && (e[k.COLOR] = J(n));
}, bo = (e, t, n) => {
	e && Y(e).forEach(({ property: e, value: r }) => {
		vo(t, e, r), yo(n, e, r);
	});
}, xo = (e, t) => {
	e && Y(e).forEach(({ property: e, value: n }) => {
		if (e === A.FILL && $(n)) {
			t[k.COLOR] = J(n);
			return;
		}
		yo(t, e, n);
	});
}, So = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e.filter(Boolean).forEach((e) => {
		Y(e || "").forEach(({ property: e }) => {
			t.add(e);
		});
	}), t;
}, Co = (e, t, n) => {
	e && [
		[A.FILL, e.getAttribute("fill")],
		[A.STROKE, e.getAttribute("stroke")],
		[A.STROKE_WIDTH, e.getAttribute("stroke-width")],
		[A.STROKE_DASHARRAY, e.getAttribute("stroke-dasharray")]
	].forEach(([e, r]) => {
		if (!n.has(e) || t[e]) return;
		let i = J(r || "");
		i && vo(t, e, i);
	});
}, wo = (e, t, n) => {
	if (!e) return;
	let r = [e, ...Array.from(e.querySelectorAll("text, foreignObject, div, span, p"))];
	for (let e of r) {
		if (t[k.COLOR] || (n.has(k.COLOR) || n.has(A.FILL)) && (xo(e.getAttribute("style"), t), t[k.COLOR])) break;
		let r = J(e.getAttribute("fill") || e.getAttribute("color") || "");
		(n.has(k.COLOR) || n.has(A.FILL)) && $(r) && (t[k.COLOR] = r);
	}
}, To = (e, t) => {
	let n = 0, r = 0, i = e;
	for (; i && i !== t;) {
		let { transformX: e, transformY: t } = R(i);
		n += e, r += t, i = i.parentElement;
	}
	return {
		tx: n,
		ty: r
	};
}, Eo = (e, t) => {
	let n = e.getBBox(), { tx: r, ty: i } = To(e, t);
	return {
		x: n.x + r,
		y: n.y + i,
		width: n.width,
		height: n.height
	};
}, Do = (e, t) => {
	let n = e.querySelector("line.divider");
	if (!n) return;
	let { tx: r, ty: i } = To(n, t);
	return {
		startX: Number(n.getAttribute("x1")) + r,
		startY: Number(n.getAttribute("y1")) + i,
		endX: Number(n.getAttribute("x2")) + r,
		endY: Number(n.getAttribute("y2")) + i
	};
}, Oo = (e) => {
	let t = e.getBBox();
	return Math.abs(t.width * t.height);
}, ko = (e, t) => {
	let n = e.getAttribute("style");
	if (!n) return;
	let r = Y(n).find((e) => e.property === t);
	if (r) return J(r.value);
}, Ao = (e, t) => {
	let n = e.map((e) => ({
		element: e,
		area: Oo(e)
	})).filter(({ area: e }) => Number.isFinite(e) && e > 0);
	return n.length === 0 ? null : n.sort((e, n) => t === "largest" ? n.area - e.area : e.area - n.area)[0].element;
}, jo = (e, t) => {
	if (!e || !t.has(A.FILL) && !t.has(A.STROKE)) return;
	let n = J(e.getAttribute("fill") || ko(e, A.FILL) || ""), r = J(e.getAttribute("stroke") || ko(e, A.STROKE) || "");
	if ($(n)) return n;
	if ($(r)) return r;
}, Mo = (e, t) => jo(Ao(Array.from(e.querySelectorAll("circle, ellipse, path")), "smallest"), t), No = (e) => {
	if (e.length < 2) return e;
	let t = e.slice(1), n = t.filter((e) => e.trim().length > 0).reduce((e, t) => {
		let n = t.match(/^\s*/)?.[0].length ?? 0;
		return Math.min(e, n);
	}, Infinity);
	return !Number.isFinite(n) || n <= 0 ? e.map((e) => e.trimEnd()) : [e[0].trimEnd(), ...t.map((e) => e.replace(RegExp(`^\\s{0,${n}}`), "").trimEnd())];
}, Po = (e) => No(Array.isArray(e.label) ? e.label.map((e) => L(e)) : L(e.label || "").split("\n")).join("\n"), Fo = (e) => e.description ? (Array.isArray(e.description) ? e.description : [e.description]).map((e) => L(e)).filter((e) => e.length > 0) : [], Io = (e) => {
	let t = /* @__PURE__ */ new Set(), n = (e) => (e && t.add(e), e), r = (e) => {
		let r = e.find((e) => !t.has(e));
		return n(r || null);
	};
	return (t) => {
		let i = [
			`[id='${t.domId}']`,
			`[id='${t.id}']`,
			`[data-id='${t.id}']`
		];
		for (let t of i) {
			let r = e.querySelector(t);
			if (r) return n(r);
		}
		switch (t.shape) {
			case "divider": return r(Array.from(e.querySelectorAll("g.statediagram-cluster-alt")));
			case "stateStart": return r(Array.from(e.querySelectorAll("g.node.default")).filter((e) => e.querySelector("circle.state-start")));
			case "stateEnd": return r(Array.from(e.querySelectorAll("g.node.default")).filter((e) => !e.querySelector("circle.state-start")));
			default: return null;
		}
	};
}, Lo = (e, t) => {
	switch (t) {
		case "roundedWithTitle": return e.querySelector("rect.outer") || e.querySelector("rect") || e;
		case "divider": return e.querySelector("rect.divider") || e.querySelector("rect") || e;
		case "rectWithTitle": return e.querySelector("rect.outer") || e.querySelector("rect") || e;
		case "stateStart": return Ao(Array.from(e.querySelectorAll("circle, ellipse, path")), "largest") || e;
		case "stateEnd": return Ao(Array.from(e.querySelectorAll("circle, ellipse, path")), "largest") || e;
		default: return e.querySelector("rect, path, circle, ellipse, polygon") || e;
	}
}, Ro = (e, t, n) => {
	let r = n(e);
	if (!r) throw Error(`State node element not found for "${e.id}"`);
	let i = Lo(r, e.shape), a = {}, o = {}, s = [
		e.labelStyle,
		...e.cssCompiledStyles || [],
		...e.cssStyles || []
	], c = So(s);
	s.filter(Boolean).forEach((e) => {
		bo(e, a, o);
	}), Co(i, a, c), wo(r, o, c);
	let l = Eo(i, t);
	return {
		id: e.id,
		shape: e.shape,
		text: Po(e),
		description: Fo(e),
		x: l.x,
		y: l.y,
		width: l.width,
		height: l.height,
		parentId: e.parentId,
		position: e.position,
		containerStyle: a,
		labelStyle: o,
		dividerLine: e.shape === "rectWithTitle" ? Do(r, t) : void 0,
		endInnerColor: e.shape === "stateEnd" ? Mo(r, c) : void 0,
		isRenderable: e.shape !== "noteGroup"
	};
}, zo = (e, t) => {
	let n = t.querySelector(`[id='${e.id}']`);
	if (!n) return null;
	let { tx: r, ty: i } = To(n, t), a = Ot(n, {
		x: r,
		y: i
	}, "MCL");
	if (a.reflectionPoints.length < 2) return null;
	let o = {}, s = (e, t) => {
		switch (e) {
			case A.STROKE:
				$(t) && (o.strokeColor = J(t));
				break;
			case A.STROKE_WIDTH: {
				let e = parseFloat(J(t));
				Number.isFinite(e) && e > 0 && (o.strokeWidth = e);
				break;
			}
			case A.STROKE_DASHARRAY:
				J(t) && (o.strokeStyle = "dashed");
				break;
		}
	};
	[e.style].filter(Boolean).forEach((e) => {
		Y(e || "").forEach(({ property: e, value: t }) => {
			s(e, t);
		});
	});
	let c = e.arrowhead === "none" || e.classes?.includes("note-edge");
	return {
		id: e.id,
		start: e.start,
		end: e.end,
		text: L(e.label || ""),
		...a,
		strokeColor: o.strokeColor,
		strokeWidth: o.strokeWidth,
		strokeStyle: c ? "dashed" : o.strokeStyle,
		isNoteEdge: c
	};
}, Bo = (e, t) => {
	let { nodes: n, edges: r } = e.getData(), i = Io(t);
	return {
		type: "state",
		nodes: n.map((e) => Ro(e, t, i)),
		edges: r.map((e) => zo(e, t)).filter((e) => e !== null)
	};
}, Vo = Promise.resolve(), Ho = (e) => {
	let t = Vo.then(e, e);
	return Vo = t.then(() => void 0, () => void 0), t;
}, Uo = null, Wo = 0, Go = (e) => JSON.stringify(e), Ko = (e) => {
	let t = e.querySelector("svg");
	if (!t) throw Error("SVG element not found");
	let n = t.getBoundingClientRect(), r = n.width, i = n.height;
	t.setAttribute("width", `${r}`), t.setAttribute("height", `${i}`);
	let a = unescape(encodeURIComponent(t.outerHTML));
	return {
		type: "graphImage",
		mimeType: "image/svg+xml",
		dataURL: `data:image/svg+xml;base64,${btoa(a)}`,
		width: r,
		height: i
	};
}, qo = async (e, t = xe) => Ho(async () => {
	let n = t.themeVariables?.fontSize ?? xe.themeVariables.fontSize, r = {
		...xe,
		...t,
		fontSize: n,
		themeVariables: {
			...xe.themeVariables,
			...t.themeVariables,
			fontSize: n
		}
	}, i = Go(r);
	i !== Uo && (Yi.initialize(r), Uo = i);
	let a = await Yi.mermaidAPI.getDiagramFromText(St(e)), o = `mermaid-to-excalidraw-${Wo++}`, s = document.createElement("div");
	s.setAttribute("style", "opacity: 0; position: fixed; z-index: -1; left: -99999px; top: -99999px;");
	let c = `${o}-container`;
	s.id = c, document.getElementById(c)?.remove(), document.body.appendChild(s);
	try {
		let { svg: t } = await Yi.render(o, e, s);
		s.innerHTML = t;
		let n;
		try {
			switch (a.type) {
				case "flowchart-v2":
				case "graph":
					n = da(a.db, s);
					break;
				case "sequence":
					n = Oa(a, s);
					break;
				case "class":
				case "classDiagram":
					n = to(a, s);
					break;
				case "er":
					n = _o(a.db, s);
					break;
				case "state":
				case "stateDiagram":
					n = Bo(a.db, s);
					break;
				default: n = Ko(s);
			}
		} catch (e) {
			console.error("Error processing Mermaid diagram:", e), n = Ko(s);
		}
		return n;
	} finally {
		s.remove();
	}
}), Jo = async (e, t) => {
	let n = t || {}, r = parseInt(n.themeVariables?.fontSize ?? "") || 20;
	return At(await qo(e, {
		...n,
		themeVariables: { ...n.themeVariables }
	}), { fontSize: r });
};
//#endregion
export { Jo as parseMermaidToExcalidraw };
