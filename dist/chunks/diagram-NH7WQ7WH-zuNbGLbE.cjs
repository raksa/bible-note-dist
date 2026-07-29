const e=require("./chunk-Y2CYZVJY-CnmLqFtv.cjs"),t=require("./src-CR--T_NF.cjs"),n=require("./chunk-WYO6CB5R-DcCdMO6a.cjs"),r=require("./chunk-ICXQ74PX-C8zL9MF5.cjs"),i=require("./chunk-VAUOI2AC-Cpv81L04.cjs"),a=require("./chunk-JWPE2WC7-Cs1kjq8S.cjs"),o=require("./mermaid-parser.core-jo9_nO1f.cjs");var s=n.f.packet,c=class{constructor(){this.packet=[],this.setAccTitle=n.U,this.getAccTitle=n.y,this.setDiagramTitle=n.K,this.getDiagramTitle=n.w,this.getAccDescription=n.v,this.setAccDescription=n.H}static{e.n(this,`PacketDB`)}getConfig(){let e=r.i({...s,...n.b().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){n.a(),this.packet=[]}},l=1e4,u=e.n((e,n)=>{a.t(e,n);let r=-1,i=[],o=1,{bitsPerRow:s}=n.getConfig();for(let{start:a,end:c,bits:u,label:f}of e.blocks){if(a!==void 0&&c!==void 0&&c<a)throw Error(`Packet block ${a} - ${c} is invalid. End must be greater than start.`);if(a??=r+1,a!==r+1)throw Error(`Packet block ${a} - ${c??a} is not contiguous. It should start from ${r+1}.`);if(u===0)throw Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(c??=a+(u??1)-1,u??=c-a+1,r=c,t.m.debug(`Packet block ${a} - ${r} with label ${f}`);i.length<=s+1&&n.getPacket().length<l;){let[e,t]=d({start:a,end:c,bits:u,label:f},o,s);if(i.push(e),e.end+1===o*s&&(n.pushWord(i),i=[],o++),!t)break;({start:a,end:c,bits:u,label:f}=t)}}n.pushWord(i)},`populate`),d=e.n((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),f={parser:{yy:void 0},parse:e.n(async e=>{let n=await o.n(`packet`,e),r=f.parser?.yy;if(!(r instanceof c))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);t.m.debug(n),u(n,r)},`parse`)},p=e.n((e,t,r,a)=>{let o=a.db,s=o.getConfig(),{rowHeight:c,paddingY:l,bitWidth:u,bitsPerRow:d}=s,f=o.getPacket(),p=o.getDiagramTitle(),h=c+l,g=h*(f.length+1)-(p?0:c),_=u*d+2,v=i.t(t);v.attr(`viewBox`,`0 0 ${_} ${g}`),n.c(v,g,_,s.useMaxWidth);for(let[e,t]of f.entries())m(v,t,e,s);v.append(`text`).text(p).attr(`x`,_/2).attr(`y`,g-h/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),m=e.n((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),h={draw:p},g={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},_={parser:f,get db(){return new c},renderer:h,styles:e.n(({packet:e}={})=>{let t=r.i(g,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)};exports.diagram=_;