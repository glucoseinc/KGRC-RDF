(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9984)}])},9984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(4051),a=n.n(r),o=n(5893),i=n(293),s=n(7056),c=n(5343),l=n(8316),u=n(6136),h=n(5847),f=n(7294),d=n(1953),v=n(6777),p=n(244),x=n(3978),g=n(9417),b=n(5605),m=n(9807),w=n(5084),j=n(9132),y=n(9630),k=n(8346),S=n(8402),Z=n(9072),O=n(754),I=n(7937),P=n(4246),E=n(9041),R=n(7632),X=n(2761);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){F(e,t,n[t])}))}return e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}var z=function(e){var t=e.children,n=e.active;return(0,o.jsx)(y.Z,{fontSize:"14px",color:n?"red":void 0,fontWeight:n?"700":void 0,children:t})},N=["\u30ad\u30e3\u30e9\u30af\u30bf\u30fc","\u30bf\u30fc\u30b2\u30c3\u30c8","\u5909\u5316\u306e\u3042\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8","\u5168\u3066\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"],_=function(e){return e>=4?j.Z[700]:e>=3?j.Z[500]:e>=2?j.Z[300]:e>=1?j.Z[100]:void 0},q={state:!0,close:!0,inside:!0,on:!0,facing:!0,between:!0,holdsLh:!0,holdsRh:!0},U={state:!1,close:!1,inside:!1,on:!1,facing:!1,between:!1,holdsLh:!1,holdsRh:!1},D=function(e){var t=e.uris,n=e.onClick,r=e.popupInfo,a=e.popupText,i=(0,f.useMemo)((function(){return(0,R.Z)()}),[]),s=L(f.useState(null),2),c=s[0],l=s[1];return(0,o.jsx)(o.Fragment,{children:t.map((function(e){return(0,o.jsxs)(f.Fragment,{children:[(0,o.jsx)(d.Z,{children:(0,o.jsx)(k.Z,{sx:{cursor:"pointer"},onClick:function(t){(null===r||void 0===r?void 0:r.id)!==i?(l(t.currentTarget),n({id:i,uri:e})):n(null)},children:e})}),(0,o.jsx)(S.Z,{id:i,open:i===(null===r||void 0===r?void 0:r.id)&&e===r.uri,anchorEl:c,children:(0,o.jsx)(d.Z,{sx:{border:1,p:1,bgcolor:"background.paper"},children:a})})]},e)}))})},H=function(e){var t=e.data,n=e.durations,r=e.currentTime,a=e.videoDuration,i=e.onChangeCurrentTime,d=e.targets,w=(0,f.useState)([N[2]]),j=w[0],k=w[1],S=(0,f.useMemo)((function(){for(var e=n.length-1;e>=0;e--)if(r>=n[e])return e+1;return 0}),[r,n]),R=(0,f.useState)(q),C=R[0],F=R[1],M=(0,f.useState)([]),H=M[0],V=M[1],B=(0,f.useState)(null),$=B[0],G=B[1];(0,f.useEffect)((function(){0===Object.values(t).length&&(F(q),k([N[2]]),V([]),G(null))}),[t]);var W=(0,f.useMemo)((function(){var e=Object.values(t);if(!e.length)return[];if(j.includes(N[3]))return e;var n=j.includes(N[0]),r=j.includes(N[1]),a=j.includes(N[2]);return e.filter((function(e){if(n&&"ex:character1_scene1"===e[0].object)return!0;if(r&&d.includes(e[0].object))return!0;if(a)for(var t=0;t<e.length-1;t++)if(!(0,h.UC)(e[t],e[t+1],C))return!0;return!1}))}),[t,j,C,d]),K=(0,f.useMemo)((function(){return H.length?W.filter((function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=H[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(!e[0].object.includes(i))return!1}}catch(s){n=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return!0})):W}),[W,H]),Q=(0,f.useMemo)((function(){return Object.entries(t).reduce((function(e,t){var n=L(t,2),r=n[0],a=n[1];return e[r]=(0,h.OC)(a),e}),{})}),[t]),J=(0,f.useMemo)((function(){var e=n.map((function(e,t){return{label:(0,o.jsx)(z,{active:S===t+1,children:"Situation".concat(t+1)}),value:e}}));return[{label:(0,o.jsx)(z,{active:0===S,children:"Situation0"}),value:0}].concat(T(e))}),[n,S]),Y=(0,f.useMemo)((function(){var e=[],t=0,r={},o=1,i=0,s=!0,c=!1,l=void 0;try{for(var u,h=n[Symbol.iterator]();!(s=(u=h.next()).done);s=!0){var f=u.value;if((f-t)/a<.06){var d,v=(null!==(d=e[e.length-1])&&void 0!==d?d:0)+1;e.push(v),r['.MuiSlider-markLabel[data-index="'.concat(o,'"]')]={marginTop:"".concat(12*v,"px"),marginLeft:"".concat(4*v,"px")},i=Math.max(i,12*v)}else e.push(0);t=f,o+=1}}catch(p){c=!0,l=p}finally{try{s||null==h.return||h.return()}finally{if(c)throw l}}return[r,i+20]}),[n,a]),ee=Y[0],te=Y[1],ne=(0,f.useCallback)((function(e,t){i(t)}),[i]),re=(0,f.useCallback)((function(e){k(e.target.value)}),[]),ae=(0,f.useCallback)((function(e){var t=e.target.value.reduce((function(e,t){return e[t]=!0,e}),{});F(A({},U,t))}),[]),oe=(0,f.useCallback)((function(e){V(e.target.value.split(" ").filter((function(e){return e.length})))}),[]),ie=(0,f.useState)(null),se=ie[0],ce=ie[1],le=(0,f.useMemo)((function(){if(!se)return null;var e=t[se.uri][S],n=e.object,r=e.state,a=e.close,i=e.facing,s=e.inside,c=e.on,l=e.between,u=e.holdsLh,h=e.holdsRh;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.Z,{children:n}),r.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["state: ",Array.from(r).join(", ")]}):null,a.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["close: ",Array.from(a).join(", ")]}):null,i.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["facing: ",Array.from(i).join(", ")]}):null,s.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["inside: ",Array.from(s).join(", ")]}):null,c.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["on: ",Array.from(c).join(", ")]}):null,l.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["between: ",Array.from(l).join(", ")]}):null,u.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["holds lh: ",Array.from(u).join(", ")]}):null,h.size?(0,o.jsxs)(y.Z,{paddingLeft:"16px",children:["holds rh: ",Array.from(h).join(", ")]}):null]})}),[t,se,S]);return n.length?Object.values(t).length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I.ZP,{defaultValue:0,min:0,max:a,marks:J,step:null,sx:A({marginBottom:"".concat(te,"px")},{".MuiSlider-markLabel":{lineHeight:1}},ee),value:r,onChange:ne}),(0,o.jsxs)(c.Z,{sx:{m:1,width:300},children:[(0,o.jsx)(l.Z,{id:"show-item-select-label",children:"\u8868\u793a\u3059\u308b\u9805\u76ee"}),(0,o.jsx)(u.Z,{value:Object.entries(C).filter((function(e){var t=L(e,2);t[0];return t[1]})).map((function(e){return L(e,1)[0]})),labelId:"show-item-select-label",id:"show-item-select",input:(0,o.jsx)(P.Z,{label:"\u8868\u793a\u3059\u308b\u9805\u76ee"}),onChange:ae,multiple:!0,children:Object.keys(C).map((function(e){return(0,o.jsx)(s.Z,{value:e,children:e},e)}))})]}),(0,o.jsxs)(c.Z,{sx:{m:1,width:300},children:[(0,o.jsx)(l.Z,{id:"filter-select-label",children:"\u8868\u793a\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,o.jsx)(u.Z,{value:j,labelId:"filter-select-label",id:"filter-select",input:(0,o.jsx)(P.Z,{label:"\u8868\u793a\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),onChange:re,multiple:!0,children:N.map((function(e,t){return(0,o.jsx)(s.Z,{value:e,children:e},t)}))})]}),(0,o.jsxs)(c.Z,{sx:{m:1},children:[(0,o.jsx)(l.Z,{htmlFor:"outlined-search",children:"Search"}),(0,o.jsx)(P.Z,{id:"outlined-search",startAdornment:(0,o.jsx)(E.Z,{position:"start",children:(0,o.jsx)(X.Z,{})}),label:"Search",onChange:oe})]}),(0,o.jsx)(v.Z,{sx:{width:"100%"},children:(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(x.Z,{children:(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(b.Z,{children:"No."}),(0,o.jsx)(b.Z,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8URI"}),C.state&&(0,o.jsx)(b.Z,{children:"state"}),C.close&&(0,o.jsx)(b.Z,{children:"close"}),C.facing&&(0,o.jsx)(b.Z,{children:"facing"}),C.inside&&(0,o.jsx)(b.Z,{children:"inside"}),C.on&&(0,o.jsx)(b.Z,{children:"on"}),C.between&&(0,o.jsx)(b.Z,{children:"between"}),C.holdsLh&&(0,o.jsx)(b.Z,{children:"holds lh"}),C.holdsRh&&(0,o.jsx)(b.Z,{children:"holds rh"})]})}),(0,o.jsx)(m.Z,{children:K.map((function(e,t){var n=e[S],r=n.object,a=n.state,i=n.facing,s=n.inside,c=n.close,l=n.on,u=n.between,h=n.holdsLh,d=n.holdsRh,v=Q[r];return(0,o.jsxs)(g.Z,{onClick:function(){G(r)},selected:$===r,hover:!0,children:[(0,o.jsx)(b.Z,{children:t+1}),(0,o.jsx)(b.Z,{children:r}),C.state&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.state)},children:Array.from(a).map((function(e){return(0,o.jsxs)(f.Fragment,{children:[e,(0,o.jsx)("br",{})]},e)}))}),C.close&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.close)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(c)})}),C.facing&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.facing)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(i)})}),C.inside&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.inside)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(s)})}),C.on&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.on)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(l)})}),C.between&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.between)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(u)})}),C.holdsLh&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.holdsLh)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(h)})}),C.holdsRh&&(0,o.jsx)(b.Z,{sx:{backgroundColor:_(v.holdsRh)},children:(0,o.jsx)(D,{popupInfo:se,popupText:le,onClick:ce,uris:Array.from(d)})})]},r)}))})]})})]}):(0,o.jsx)(Z.ZP,{height:"200px",container:!0,alignItems:"center",justifyContent:"center",children:(0,o.jsx)(O.Z,{})}):null},V=n(5152);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){$(o,r,a,i,s,"next",e)}function s(e){$(o,r,a,i,s,"throw",e)}i(void 0)}))}}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=n.n(V)()((function(){return Promise.all([n.e(435),n.e(283)]).then(n.bind(n,7283))}),{loadableGenerated:{webpack:function(){return[7283]}},ssr:!1,loading:function(){return(0,o.jsx)(o.Fragment,{children:"loading..."})}}),Q=function(){(0,f.useEffect)((function(){G(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.hP)();case 2:t=e.sent,r=t.reduce((function(e,t){var n=t.type.value.replace(h.at.ho,"ho:");return n in e||(e[n]=[]),e[n].push(t),e}),{}),n(Object.entries(r).map((function(e){var t=W(e,2);return{type:t[0],activities:t[1]}})));case 5:case"end":return e.stop()}}),e)})))()}),[]);var e=(0,f.useState)([]),t=e[0],n=e[1],r=(0,f.useState)(),y=r[0],k=r[1],S=(0,f.useState)([]),Z=S[0],O=S[1],I=(0,f.useState)({}),P=I[0],E=I[1],R=(0,f.useState)([]),X=R[0],C=R[1],F=(0,f.useState)("table"),A=F[0],L=F[1],T=(0,f.useMemo)((function(){return Z.filter((function(e){return e.mainObject})).flatMap((function(e){var t=[];return e.mainObject&&t.push(e.mainObject.value.replace(h.at.ex,"ex:")),e.targetObject&&t.push(e.targetObject.value.replace(h.at.ex,"ex:")),t}))}),[Z]);(0,f.useEffect)((function(){y&&(G(a().mark((function e(){var t,n,r,o,i,s,c,l,u,f,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.eZ)(y.activity);case 2:for((t=e.sent).sort((function(e,t){return Number(e.number.value)>Number(t.number.value)?1:-1})),n=t.map((function(e){return Number(e.duration.value)/1.2686})),r=[],o=0,i=!0,s=!1,c=void 0,e.prev=8,l=n[Symbol.iterator]();!(i=(u=l.next()).done);i=!0)f=u.value,d=f+o,r.push(d),o=d;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),s=!0,c=e.t0;case 16:e.prev=16,e.prev=17,i||null==l.return||l.return();case 19:if(e.prev=19,!s){e.next=22;break}throw c;case 22:return e.finish(19);case 23:return e.finish(16);case 24:O(t),C(r);case 26:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23]])})))(),G(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.zb)(y.activity);case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)})))())}),[y]);var M=(0,f.useRef)(null),z=(0,f.useState)(!1),N=z[0],_=z[1],q=(0,f.useCallback)((function(){_(!0)}),[]),U=(0,f.useCallback)((function(){_(!1)}),[]),D=(0,f.useCallback)((function(e){var n=t.flatMap((function(e){return e.activities})).filter((function(t){return t.activity.value===e.target.value}))[0];k(n),_(!1),Q(0),E({}),O([]),C([])}),[t]),V=(0,f.useMemo)((function(){return y?y.label.value.replaceAll(" ","_")+"1.mp4":null}),[y]),B=(0,f.useState)(0),$=B[0],Q=B[1];(0,f.useEffect)((function(){M.current&&!N&&(M.current.currentTime=$)}),[$,N]);var J=(0,f.useState)(0),Y=J[0],ee=J[1],te=(0,f.useCallback)((function(e){ee(e.currentTarget.duration)}),[]),ne=(0,f.useCallback)((function(){M.current&&N&&Q(M.current.currentTime)}),[N]),re=(0,f.useCallback)((function(e){N&&Q(e.currentTarget.currentTime)}),[N]);(0,f.useEffect)((function(){if(N){var e=setInterval(ne,1/30);return function(){clearInterval(e)}}return function(){}}),[N,ne]);var ae,oe=(0,f.useCallback)((function(){L("table")}),[]),ie=(0,f.useCallback)((function(){L("graph")}),[]),se=(0,f.useMemo)((function(){for(var e=Math.round(100*$)/100,t=0;t<X.length;t++){var n;if(e>=Math.round(100*(null!==(n=X[t-1])&&void 0!==n?n:0))/100&&e<Math.round(100*X[t])/100)return Z[t].event}return null}),[$,X,Z]),ce=(0,f.useMemo)((function(){return t.map((function(e){var t=e.type,n=e.activities;return[(0,o.jsx)(i.Z,{children:t},t),n.map((function(e){var n=e.activity,r=e.scene;return(0,o.jsxs)(s.Z,{value:n.value,children:[t," - ",r.value.replace(h.at.ex,"")]},n.value)}))]})).flatMap((function(e){return e})).flatMap((function(e){return e}))}),[t]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(c.Z,{fullWidth:!0,children:[(0,o.jsx)(l.Z,{id:"demo-simple-select-label",children:"Video\u3092\u9078\u629e"}),(0,o.jsx)(u.Z,{onChange:D,value:null!==(ae=null===y||void 0===y?void 0:y.activity.value)&&void 0!==ae?ae:"",labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Video\u3092\u9078\u629e",children:ce})]}),(0,o.jsx)(d.Z,{sx:{display:"flex",gap:"16px"},marginTop:"16px",height:"300px",children:V&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("video",{controls:!0,style:{flex:1},ref:M,onPlay:q,onPause:U,onLoadedData:te,onSeeking:re,src:"/video/".concat(V)}),(0,o.jsx)(d.Z,{flex:"2",children:Z?(0,o.jsx)(v.Z,{sx:{height:"100%"},children:(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(x.Z,{children:(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(b.Z,{children:"No."}),(0,o.jsx)(b.Z,{children:"Event URI"}),(0,o.jsx)(b.Z,{children:"Action URI"}),(0,o.jsx)(b.Z,{children:"Main object"}),(0,o.jsx)(b.Z,{children:"Target object"}),(0,o.jsx)(b.Z,{children:"Duration"})]})}),(0,o.jsx)(m.Z,{children:Z.map((function(e,t){var n,r,a,i=e.event,s=e.number,c=e.action,l=e.mainObject,u=e.mainObjectLabel,f=e.targetObject,d=e.targetObjectLabel,v=Math.round(100*$)/100,p=v>=Math.round(100*(null!==(n=X[t-1])&&void 0!==n?n:0))/100&&v<Math.round(100*X[t])/100;return(0,o.jsxs)(g.Z,{sx:{backgroundColor:p?j.Z[300]:void 0},children:[(0,o.jsxs)(b.Z,{children:[Number(s.value)+1," "]}),(0,o.jsx)(b.Z,{children:i.value.replace(h.at.ex,"ex:")}),(0,o.jsx)(b.Z,{children:c.value.replace(h.at.vh2kg,"vh2kg:")}),(0,o.jsx)(b.Z,{sx:{padding:"0"},children:null!==(r=null===u||void 0===u?void 0:u.value)&&void 0!==r?r:null===l||void 0===l?void 0:l.value.replace(h.at.ex,"ex:")}),(0,o.jsx)(b.Z,{sx:{padding:"0"},children:null!==(a=null===d||void 0===d?void 0:d.value)&&void 0!==a?a:null===f||void 0===f?void 0:f.value.replace(h.at.ex,"ex:")}),(0,o.jsx)(b.Z,{sx:{padding:"0",textAlign:"center"},children:(0,o.jsx)(w.Z,{sx:{padding:"0"},onClick:function(){var e;Q(null!==(e=X[t-1])&&void 0!==e?e:0)},children:"".concat(X[t-1]?Math.round(100*X[t-1])/100:0," ~ ").concat(Math.round(100*X[t])/100)})})]},t)}))})]})}):null})]})}),V&&(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(w.Z,{onClick:oe,children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u4e00\u89a7\u8868\u793a"}),(0,o.jsx)(w.Z,{onClick:ie,children:"\u30ca\u30ec\u30c3\u30b8\u30b0\u30e9\u30d5\u8868\u793a"})]}),"table"===A?(0,o.jsx)(H,{data:P,durations:X,currentTime:$,videoDuration:Y,onChangeCurrentTime:Q,targets:T}):(0,o.jsx)(K,{eventNode:se})]})}},5847:function(e,t,n){"use strict";n.d(t,{OC:function(){return k},UC:function(){return j},at:function(){return g},eZ:function(){return m},hP:function(){return b},tr:function(){return S},zb:function(){return w}});var r=n(4051),a=n.n(r),o=n(9155),i=n.n(o),s=n(2307),c=n.n(s),l=n(4155);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){h(o,r,a,i,s,"next",e)}function s(e){h(o,r,a,i,s,"throw",e)}i(void 0)}))}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p,x=function(){var e,t=null!==(e=l.env.NEXT_PUBLIC_SPARQL_ENDPOINT)&&void 0!==e?e:"http://kgrc4si.ml:7200/repositories/KGRC4SIv01";return new(i())({endpointUrl:"".concat(t,"?infer=false")})},g=(d(p={},"vh2kg-action","http://example.org/virtualhome2kg/ontology/action/"),d(p,"hra","http://example.org/virtualhome2kg/ontology/homeriskactivity/"),d(p,"vh2kg","http://example.org/virtualhome2kg/ontology/"),d(p,"ex","http://example.org/virtualhome2kg/instance/"),d(p,"rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),d(p,"time","http://www.w3.org/2006/time#"),d(p,"rdfs","http://www.w3.org/2000/01/rdf-schema#"),d(p,"owl","http://www.w3.org/2002/07/owl#"),d(p,"ho","http://www.owl-ontologies.com/VirtualHome.owl#"),d(p,"xsd","http://www.w3.org/2001/XMLSchema#"),d(p,"sem","http://semanticweb.cs.vu.nl/2009/11/sem/"),d(p,"skos","http://www.w3.org/2004/02/skos/core#"),d(p,"c4dm","http://purl.org/NET/c4dm/event.owl#"),d(p,"dcterms","http://purl.org/dc/terms/"),d(p,"ob","http://raw.githubusercontent.com/aistairc/HomeObjectOntology/main/HomeObject.owl#"),p),b=function(){var e=f(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().query.select("\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX ho: <http://www.owl-ontologies.com/VirtualHome.owl#>\nPREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n\nselect DISTINCT * where {\n    ?activity vh2kg:virtualHome ?scene .\n    ?activity a ?type .\n    ?activity rdfs:label ?label .\n} order by asc(?activity)\n");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=f(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n  PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n  prefix ho: <http://www.owl-ontologies.com/VirtualHome.owl#>\n  prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n  prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n  PREFIX time: <http://www.w3.org/2006/time#>\n  PREFIX hra: <http://example.org/virtualhome2kg/ontology/homeriskactivity/>\n  select distinct ?event ?number ?action ?duration ?mainObject ?mainObjectLabel ?targetObject ?targetObjectLabel where { \n    <".concat(t.value,"> vh2kg:hasEvent ?event .\n    ?event vh2kg:time ?time .\n    ?event vh2kg:action ?action .\n    ?time time:numericDuration ?duration .\n    ?event vh2kg:eventNumber ?number .\n    OPTIONAL {\n      ?event vh2kg:mainObject ?mainObject .\n      OPTIONAL {\n        ?mainObject rdfs:label ?mainObjectLabel .\n      }\n    }\n    OPTIONAL {\n      ?event vh2kg:targetObject ?targetObject .\n      OPTIONAL {\n        ?targetObject rdfs:label ?targetObjectLabel .\n      }\n    }\n  }"),e.next=3,x().query.select(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=f(a().mark((function e(t){var n,r,o,i,s,c,l,u,h,f,d,v,p,b,m,w,j,y,k,S,Z,O,I,P,E,R,X,C,F,A,L,T,M,z,N,_,q,U,D,H,V,B,$,G,W,K,Q,J,Y,ee,te,ne,re,ae,oe,ie,se,ce,le,ue,he,fe,de,ve,pe,xe,ge,be,me,we,je,ye,ke,Se,Ze,Oe,Ie,Pe,Ee,Re,Xe,Ce;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n  PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n  PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n  PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n\n  select distinct ?situation where { \n    <".concat(t.value,"> vh2kg:hasEvent ?event .\n      {?event vh2kg:situationBeforeEvent ?situation .} union {\n          ?event vh2kg:situationAfterEvent ?situation .\n      }\n  }  \n  order by ASC(?situation)\n  "),e.next=3,x().query.select(n);case 3:(r=e.sent).sort((function(e,t){return e.situation.value.length===t.situation.value.length?e<t?-1:1:e.situation.value.length<t.situation.value.length?-1:1})),o={},i=0,s=!0,c=!1,l=void 0,e.prev=8,u=r[Symbol.iterator]();case 10:if(s=(h=u.next()).done){e.next=205;break}return f=h.value,d="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?center1 ?center2 ?center3 ?size1 ?size2 ?size3 where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox x3do:bboxCenter ?center .\n          ?center rdf:first ?center1 .\n          ?center rdf:rest ?centerrest .\n          ?centerrest rdf:first ?center2 .\n          ?centerrest rdf:rest ?centerrestrest .\n          ?centerrestrest rdf:first ?center3 .\n          ?bbox x3do:bboxSize ?size .\n          ?size rdf:first ?size1 .\n          ?size rdf:rest ?sizerest .\n          ?sizerest rdf:first ?size2 .\n          ?sizerest rdf:rest ?sizerestrest .\n          ?sizerestrest rdf:first ?size3 .\n      } limit 10000\n    "),e.next=15,x().query.select(d);case 15:for(v=e.sent,p=!0,b=!1,m=void 0,e.prev=17,w=v[Symbol.iterator]();!(p=(j=w.next()).done);p=!0)(y=j.value).object.value.replace(g.ex,"ex:")in o||(o[y.object.value.replace(g.ex,"ex:")]=[]),o[y.object.value.replace(g.ex,"ex:")].push({object:y.object.value.replace(g.ex,"ex:"),state:new Set,inside:new Set,facing:new Set,on:new Set,between:new Set,holdsLh:new Set,holdsRh:new Set,close:new Set,center:{x:Number(y.center1.value),y:Number(y.center2.value),z:Number(y.center3.value)},size:{x:Number(y.size1.value),y:Number(y.size2.value),z:Number(y.size3.value)}});e.next=25;break;case 21:e.prev=21,e.t0=e.catch(17),b=!0,m=e.t0;case 25:e.prev=25,e.prev=26,p||null==w.return||w.return();case 28:if(e.prev=28,!b){e.next=31;break}throw m;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return k="\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n        PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n        PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n        \n        select distinct ?s ?object ?target where { \n          ?s ?p <".concat(f.situation.value,"> .\n            ?s a vh2kg:State .\n            ?s vh2kg:isStateOf ?object .\n            ?s vh2kg:state ?target .\n        } limit 10000"),e.next=36,x().query.select(k);case 36:for(S=e.sent,Z=!0,O=!1,I=void 0,e.prev=38,P=S[Symbol.iterator]();!(Z=(E=P.next()).done);Z=!0)R=E.value,o[R.object.value.replace(g.ex,"ex:")][i].state.add(R.target.value.replace(g.vh2kg,"vh2kg:"));e.next=46;break;case 42:e.prev=42,e.t1=e.catch(38),O=!0,I=e.t1;case 46:e.prev=46,e.prev=47,Z||null==P.return||P.return();case 49:if(e.prev=49,!O){e.next=52;break}throw I;case 52:return e.finish(49);case 53:return e.finish(46);case 54:return X="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:facing ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?state vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=57,x().query.select(X);case 57:for(C=e.sent,F=!0,A=!1,L=void 0,e.prev=59,T=C[Symbol.iterator]();!(F=(M=T.next()).done);F=!0)z=M.value,o[z.object.value.replace(g.ex,"ex:")][i].facing.add(z.target.value.replace(g.ex,"ex:"));e.next=67;break;case 63:e.prev=63,e.t2=e.catch(59),A=!0,L=e.t2;case 67:e.prev=67,e.prev=68,F||null==T.return||T.return();case 70:if(e.prev=70,!A){e.next=73;break}throw L;case 73:return e.finish(70);case 74:return e.finish(67);case 75:return N="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:inside ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?state vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=78,x().query.select(N);case 78:for(_=e.sent,q=!0,U=!1,D=void 0,e.prev=80,H=_[Symbol.iterator]();!(q=(V=H.next()).done);q=!0)B=V.value,o[B.object.value.replace(g.ex,"ex:")][i].inside.add(B.target.value.replace(g.ex,"ex:"));e.next=88;break;case 84:e.prev=84,e.t3=e.catch(80),U=!0,D=e.t3;case 88:e.prev=88,e.prev=89,q||null==H.return||H.return();case 91:if(e.prev=91,!U){e.next=94;break}throw D;case 94:return e.finish(91);case 95:return e.finish(88);case 96:return $="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:on ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?state vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=99,x().query.select($);case 99:for(G=e.sent,W=!0,K=!1,Q=void 0,e.prev=101,J=G[Symbol.iterator]();!(W=(Y=J.next()).done);W=!0)ee=Y.value,o[ee.object.value.replace(g.ex,"ex:")][i].on.add(ee.target.value.replace(g.ex,"ex:"));e.next=109;break;case 105:e.prev=105,e.t4=e.catch(101),K=!0,Q=e.t4;case 109:e.prev=109,e.prev=110,W||null==J.return||J.return();case 112:if(e.prev=112,!K){e.next=115;break}throw Q;case 115:return e.finish(112);case 116:return e.finish(109);case 117:return te="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:between ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?shape vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=120,x().query.select(te);case 120:for(ne=e.sent,re=!0,ae=!1,oe=void 0,e.prev=122,ie=ne[Symbol.iterator]();!(re=(se=ie.next()).done);re=!0)ce=se.value,o[ce.object.value.replace(g.ex,"ex:")][i].between.add(ce.target.value.replace(g.ex,"ex:"));e.next=130;break;case 126:e.prev=126,e.t5=e.catch(122),ae=!0,oe=e.t5;case 130:e.prev=130,e.prev=131,re||null==ie.return||ie.return();case 133:if(e.prev=133,!ae){e.next=136;break}throw oe;case 136:return e.finish(133);case 137:return e.finish(130);case 138:return le="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:holds_lh ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?state vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=141,x().query.select(le);case 141:for(ue=e.sent,he=!0,fe=!1,de=void 0,e.prev=143,ve=ue[Symbol.iterator]();!(he=(pe=ve.next()).done);he=!0)xe=pe.value,o[xe.object.value.replace(g.ex,"ex:")][i].holdsLh.add(xe.target.value.replace(g.ex,"ex:"));e.next=151;break;case 147:e.prev=147,e.t6=e.catch(143),fe=!0,de=e.t6;case 151:e.prev=151,e.prev=152,he||null==ve.return||ve.return();case 154:if(e.prev=154,!fe){e.next=157;break}throw de;case 157:return e.finish(154);case 158:return e.finish(151);case 159:return ge="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:holds_rh ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?state vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=162,x().query.select(ge);case 162:for(be=e.sent,me=!0,we=!1,je=void 0,e.prev=164,ye=be[Symbol.iterator]();!(me=(ke=ye.next()).done);me=!0)Se=ke.value,o[Se.object.value.replace(g.ex,"ex:")][i].holdsRh.add(Se.target.value.replace(g.ex,"ex:"));e.next=172;break;case 168:e.prev=168,e.t7=e.catch(164),we=!0,je=e.t7;case 172:e.prev=172,e.prev=173,me||null==ye.return||ye.return();case 175:if(e.prev=175,!we){e.next=178;break}throw je;case 178:return e.finish(175);case 179:return e.finish(172);case 180:return Ze="\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX ex: <http://example.org/virtualhome2kg/instance/>\n      PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>\n      PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>\n      \n      select distinct ?s ?object ?target where { \n        ?s ?p <".concat(f.situation.value,"> .\n          ?s a vh2kg:State .\n          ?s vh2kg:isStateOf ?object .\n          ?s vh2kg:bbox ?bbox .\n          ?bbox vh2kg:close ?shape .\n          ?state vh2kg:bbox ?shape .\n          ?state vh2kg:isStateOf ?target .\n      } limit 10000\n      "),e.next=183,x().query.select(Ze);case 183:for(Oe=e.sent,Ie=!0,Pe=!1,Ee=void 0,e.prev=185,Re=Oe[Symbol.iterator]();!(Ie=(Xe=Re.next()).done);Ie=!0)Ce=Xe.value,o[Ce.object.value.replace(g.ex,"ex:")][i].close.add(Ce.target.value.replace(g.ex,"ex:"));e.next=193;break;case 189:e.prev=189,e.t8=e.catch(185),Pe=!0,Ee=e.t8;case 193:e.prev=193,e.prev=194,Ie||null==Re.return||Re.return();case 196:if(e.prev=196,!Pe){e.next=199;break}throw Ee;case 199:return e.finish(196);case 200:return e.finish(193);case 201:i+=1;case 202:s=!0,e.next=10;break;case 205:e.next=211;break;case 207:e.prev=207,e.t9=e.catch(8),c=!0,l=e.t9;case 211:e.prev=211,e.prev=212,s||null==u.return||u.return();case 214:if(e.prev=214,!c){e.next=217;break}throw l;case 217:return e.finish(214);case 218:return e.finish(211);case 219:return e.abrupt("return",o);case 220:case"end":return e.stop()}}),e,null,[[8,207,211,219],[17,21,25,33],[26,,28,32],[38,42,46,54],[47,,49,53],[59,63,67,75],[68,,70,74],[80,84,88,96],[89,,91,95],[101,105,109,117],[110,,112,116],[122,126,130,138],[131,,133,137],[143,147,151,159],[152,,154,158],[164,168,172,180],[173,,175,179],[185,189,193,201],[194,,196,200],[212,,214,218]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e,t,n){if(e.object!==t.object)return!1;var r=Object.entries(n).filter((function(e){var t=v(e,2);t[0];return t[1]})).map((function(e){return v(e,1)[0]})),a=!0,o=!1,i=void 0;try{for(var s,l=r[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var u=s.value;if(!c()(e[u],t[u]))return!1}}catch(h){o=!0,i=h}finally{try{a||null==l.return||l.return()}finally{if(o)throw i}}return!0},y=function(e,t){return e.reduce((function(e,n){return e.state&&(e.score+=c()(e.state[t],n[t])?0:1),e.state=n,e}),{state:null,score:0}).score},k=function(e){return{close:y(e,"close"),state:y(e,"state"),facing:y(e,"facing"),inside:y(e,"inside"),on:y(e,"on"),between:y(e,"between"),holdsLh:y(e,"holdsLh"),holdsRh:y(e,"holdsRh")}},S=function(){var e=f(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n  ".concat(Object.entries(g).map((function(e){var t=v(e,2),n=t[0],r=t[1];return"  PREFIX ".concat(n,": <").concat(r,">")})).join("\n"),"\n\n  select distinct ?p ?o where { \n    ").concat(t," ?p ?o .\n  }"),e.next=3,x().query.select(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7716:function(){},3383:function(){},1156:function(){},6965:function(){},147:function(){},2361:function(){},4616:function(){}},function(e){e.O(0,[376,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);