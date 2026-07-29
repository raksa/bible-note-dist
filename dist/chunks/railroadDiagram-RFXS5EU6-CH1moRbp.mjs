import { n as e } from "./chunk-Y2CYZVJY-i11wjrBe.mjs";
import { m as t } from "./src-DQFaiLXN.mjs";
import "./chunk-WYO6CB5R-zxpUK32G.mjs";
import "./chunk-VAUOI2AC-BL-Sv6Tw.mjs";
import { n, r, t as i } from "./chunk-MOJQB5TN-BRGH2lJM.mjs";
import { t as a } from "./chunk-JWPE2WC7-DIKiF5cm.mjs";
import { A as o, t as s } from "./mermaid-parser.core-BqVfH-9e.mjs";
//#region node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-RFXS5EU6.mjs
var c = o().Railroad.parser.LangiumParser, l = /* @__PURE__ */ e((e) => {
	switch (e.$type) {
		case "RailroadTerminalExpr": return {
			type: "terminal",
			value: e.value
		};
		case "RailroadNonTerminalExpr": return {
			type: "nonterminal",
			name: e.name
		};
		case "RailroadSpecialExpr": return {
			type: "special",
			text: e.text
		};
		case "RailroadSequenceExpr": {
			let t = e.elements.map(l);
			return t.length === 1 ? t[0] : {
				type: "sequence",
				elements: t
			};
		}
		case "RailroadChoiceExpr": {
			let t = e.alternatives.map(l);
			return t.length === 1 ? t[0] : {
				type: "choice",
				alternatives: t
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: l(e.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 1,
			max: Infinity
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 0,
			max: Infinity
		};
		default: throw Error(`Unsupported railroad expression: ${e.$type}`);
	}
}, "transformExpression"), u = /* @__PURE__ */ e((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), d = /* @__PURE__ */ e((e) => {
	a(e, i), e.title && i.setTitle(e.title), e.rules.map((e) => i.addRule(u(e)));
}, "populateDb"), f = {
	parser: {
		parse: /* @__PURE__ */ e((e) => {
			i.clear(), t.debug("[Railroad Parser] Starting Langium parse");
			let n = c.parse(e);
			if (n.lexerErrors.length > 0 || n.parserErrors.length > 0) throw new s(n);
			let r = n.value;
			t.debug("[Railroad Parser] Parsed rules:", r.rules.length), d(r), t.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: i }
	},
	db: i,
	renderer: r,
	styles: n
};
//#endregion
export { f as diagram };
