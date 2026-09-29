require("./rolldown-runtime-D_FWMvbo.cjs");const e=require("./chunk-Y2CYZVJY-CnmLqFtv.cjs"),t=require("./src-BuDznG4J.cjs"),n=require("./chunk-WYO6CB5R-DbPM901j.cjs"),r=require("./chunk-ICXQ74PX-MwRd0apb.cjs"),i=require("./chunk-VAUOI2AC-kWdnCP4B.cjs"),a=require("./chunk-JWPE2WC7-Cs1kjq8S.cjs"),o=require("./mermaid-parser.core-qgVY5nTL.cjs");var s={showLegend:!0,ticks:5,max:null,min:0,graticule:`circle`},c={axes:[],curves:[],options:s},l=structuredClone(c),u=n.f.radar,d=e.n(()=>r.i({...u,...n.b().radar}),`getConfig`),f=e.n(()=>l.axes,`getAxes`),p=e.n(()=>l.curves,`getCurves`),m=e.n(()=>l.options,`getOptions`),h=e.n(e=>{l.axes=e.map(e=>({name:e.name,label:e.label??e.name}))},`setAxes`),g=e.n(e=>{l.curves=e.map(e=>({name:e.name,label:e.label??e.name,entries:_(e.entries)}))},`setCurves`),_=e.n(e=>{if(e[0].axis==null)return e.map(e=>e.value);let t=f();if(t.length===0)throw Error(`Axes must be populated before curves for reference entries`);return t.map(t=>{let n=e.find(e=>e.axis?.$refText===t.name);if(n===void 0)throw Error(`Missing entry for axis `+t.label);return n.value})},`computeCurveEntries`),v={getAxes:f,getCurves:p,getOptions:m,setAxes:h,setCurves:g,setOptions:e.n(e=>{let t=e.reduce((e,t)=>(e[t.name]=t,e),{});l.options={showLegend:t.showLegend?.value??s.showLegend,ticks:t.ticks?.value??s.ticks,max:t.max?.value??s.max,min:t.min?.value??s.min,graticule:t.graticule?.value??s.graticule}},`setOptions`),getConfig:d,clear:e.n(()=>{n.a(),l=structuredClone(c)},`clear`),setAccTitle:n.U,getAccTitle:n.y,setDiagramTitle:n.K,getDiagramTitle:n.w,getAccDescription:n.v,setAccDescription:n.H},y=e.n(e=>{a.t(e,v);let{axes:t,curves:n,options:r}=e;v.setAxes(t),v.setCurves(n),v.setOptions(r)},`populate`),b={parse:e.n(async e=>{let n=await o.n(`radar`,e);t.m.debug(n),y(n)},`parse`)},x=e.n((e,t,n,r)=>{let a=r.db,o=a.getAxes(),s=a.getCurves(),c=a.getOptions(),l=a.getConfig(),u=a.getDiagramTitle(),d=S(i.t(t),l),f=c.max??Math.max(...s.map(e=>Math.max(...e.entries))),p=c.min,m=Math.min(l.width,l.height)/2;C(d,o,m,c.ticks,c.graticule),w(d,o,m,l),T(d,o,s,p,f,c.graticule,l),O(d,s,c.showLegend,l),d.append(`text`).attr(`class`,`radarTitle`).text(u).attr(`x`,0).attr(`y`,-l.height/2-l.marginTop)},`draw`),S=e.n((e,t)=>{let r=t.width+t.marginLeft+t.marginRight,i=t.height+t.marginTop+t.marginBottom,a={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return n.c(e,i,r,t.useMaxWidth??!0),e.attr(`viewBox`,`0 0 ${r} ${i}`).attr(`overflow`,`visible`),e.append(`g`).attr(`transform`,`translate(${a.x}, ${a.y})`)},`drawFrame`),C=e.n((e,t,n,r,i)=>{if(i===`circle`)for(let t=0;t<r;t++){let i=n*(t+1)/r;e.append(`circle`).attr(`r`,i).attr(`class`,`radarGraticule`)}else if(i===`polygon`){let i=t.length;for(let a=0;a<r;a++){let o=n*(a+1)/r,s=t.map((e,t)=>{let n=2*t*Math.PI/i-Math.PI/2;return`${o*Math.cos(n)},${o*Math.sin(n)}`}).join(` `);e.append(`polygon`).attr(`points`,s).attr(`class`,`radarGraticule`)}}},`drawGraticule`),w=e.n((e,t,n,r)=>{let i=t.length;for(let a=0;a<i;a++){let o=t[a].label,s=2*a*Math.PI/i-Math.PI/2,c=Math.cos(s),l=Math.sin(s);e.append(`line`).attr(`x1`,0).attr(`y1`,0).attr(`x2`,n*r.axisScaleFactor*c).attr(`y2`,n*r.axisScaleFactor*l).attr(`class`,`radarAxisLine`);let u=c>.01?`start`:c<-.01?`end`:`middle`,d=l>.01?`hanging`:l<-.01?`auto`:`central`;e.append(`text`).text(o).attr(`x`,n*r.axisLabelFactor*c+4*c).attr(`y`,n*r.axisLabelFactor*l+4*l).attr(`text-anchor`,u).attr(`dominant-baseline`,d).attr(`class`,`radarAxisLabel`)}},`drawAxes`);function T(e,t,n,r,i,a,o){let s=t.length,c=Math.min(o.width,o.height)/2;n.forEach((t,n)=>{if(t.entries.length!==s)return;let l=t.entries.map((e,t)=>{let n=2*Math.PI*t/s-Math.PI/2,a=E(e,r,i,c);return{x:a*Math.cos(n),y:a*Math.sin(n)}});a===`circle`?e.append(`path`).attr(`d`,D(l,o.curveTension)).attr(`class`,`radarCurve-${n}`):a===`polygon`&&e.append(`polygon`).attr(`points`,l.map(e=>`${e.x},${e.y}`).join(` `)).attr(`class`,`radarCurve-${n}`)})}e.n(T,`drawCurves`);function E(e,t,n,r){return r*(Math.min(Math.max(e,t),n)-t)/(n-t)}e.n(E,`relativeRadius`);function D(e,t){let n=e.length,r=`M${e[0].x},${e[0].y}`;for(let i=0;i<n;i++){let a=e[(i-1+n)%n],o=e[i],s=e[(i+1)%n],c=e[(i+2)%n],l={x:o.x+(s.x-a.x)*t,y:o.y+(s.y-a.y)*t},u={x:s.x-(c.x-o.x)*t,y:s.y-(c.y-o.y)*t};r+=` C${l.x},${l.y} ${u.x},${u.y} ${s.x},${s.y}`}return`${r} Z`}e.n(D,`closedRoundCurve`);function O(e,t,n,r){if(!n)return;let i=(r.width/2+r.marginRight)*3/4,a=-(r.height/2+r.marginTop)*3/4;t.forEach((t,n)=>{let r=e.append(`g`).attr(`transform`,`translate(${i}, ${a+n*20})`);r.append(`rect`).attr(`width`,12).attr(`height`,12).attr(`class`,`radarLegendBox-${n}`),r.append(`text`).attr(`x`,16).attr(`y`,0).attr(`class`,`radarLegendText`).text(t.label)})}e.n(O,`drawLegend`);var k={draw:x},A=e.n((e,t)=>{let n=``;for(let r=0;r<e.THEME_COLOR_LIMIT;r++){let i=e[`cScale${r}`];n+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return n},`genIndexStyles`),j=e.n(e=>{let t=r.i(n.D(),n.b().themeVariables);return{themeVariables:t,radarOptions:r.i(t.radar,e)}},`buildRadarStyleOptions`),M={parser:b,db:v,renderer:k,styles:e.n(({radar:e}={})=>{let{themeVariables:t,radarOptions:n}=j(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${n.axisColor};
		stroke-width: ${n.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${n.axisLabelFontSize}px;
		color: ${n.axisColor};
	}
	.radarGraticule {
		fill: ${n.graticuleColor};
		fill-opacity: ${n.graticuleOpacity};
		stroke: ${n.graticuleColor};
		stroke-width: ${n.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${n.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${A(t,n)}
	`},`styles`)};exports.diagram=M;