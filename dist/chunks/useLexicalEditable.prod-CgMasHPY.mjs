import { ar as e, oi as t } from "./Lexical.prod-DYDuARMX.mjs";
import { useEffect as n, useLayoutEffect as r, useMemo as i, useRef as a, useState as o } from "react";
//#region node_modules/@lexical/react/dist/useLexicalEditable.prod.mjs
var s = e ? r : n;
function c(e) {
	return {
		initialValueFn: () => e.isEditable(),
		subscribe: (t) => e.registerEditableListener(t)
	};
}
function l() {
	return function(e) {
		let [n] = t(), r = i(() => e(n), [n, e]), [c, l] = o(() => r.initialValueFn()), u = a(c);
		return s(() => {
			let { initialValueFn: e, subscribe: t } = r, n = e();
			return u.current !== n && (u.current = n, l(n)), t((e) => {
				u.current = e, l(e);
			});
		}, [r, e]), c;
	}(c);
}
//#endregion
export { l as t };
