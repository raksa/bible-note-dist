import { En as e, Fr as t, Ht as n, oi as r, tt as i, xt as a } from "./Lexical.prod-DYDuARMX.mjs";
import { useCallback as o, useEffect as s, useState as c } from "react";
//#region node_modules/@lexical/react/dist/useLexicalNodeSelection.prod.mjs
function l(e, t) {
	return e.read("latest", () => {
		let e = n(t);
		return e !== null && e.isSelected();
	});
}
function u(n) {
	let [u] = r(), [d, f] = c(() => l(u, n));
	return s(() => {
		let e = !0, t = u.registerUpdateListener(() => {
			e && f(l(u, n));
		});
		return () => {
			e = !1, t();
		};
	}, [u, n]), [
		d,
		o((r) => {
			u.update(() => {
				let o = i();
				t(o) || (o = a(), e(o)), t(o) && (r ? o.add(n) : o.delete(n));
			});
		}, [u, n]),
		o(() => {
			u.update(() => {
				let e = i();
				t(e) && e.clear();
			});
		}, [u])
	];
}
//#endregion
export { u as t };
