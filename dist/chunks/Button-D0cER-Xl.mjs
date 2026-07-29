import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/utils/joinClasses.ts
function t(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/ui/Button.tsx
function n({ "data-test-id": n, children: r, className: i, onClick: a, disabled: o, small: s, title: c }) {
	return /* @__PURE__ */ e("button", {
		disabled: o,
		className: t("Button__root", "btn", o && "Button__disabled", s && "Button__small btn-sm", i),
		onClick: a,
		title: c,
		"aria-label": c,
		...n && { "data-test-id": n },
		children: r
	});
}
//#endregion
export { t as n, n as t };
