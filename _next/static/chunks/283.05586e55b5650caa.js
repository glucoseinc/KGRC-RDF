"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{7283:function(e,t,r){r.r(t);var n=r(4051),a=r.n(n),o=r(5893),i=r(7294),l=r(9435),u=r(5847);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r,n,a,o,i){try{var l=e[o](i),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){f(o,n,a,i,l,"next",e)}function l(e){f(o,n,a,i,l,"throw",e)}i(void 0)}))}}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}var h=function(e){var t=!0,r=!1,n=void 0;try{for(var a,o=Object.entries(u.at)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=b(a.value,2),l=i[0],c=i[1];if(e.includes(c))return e.replace(c,"".concat(l,":"))}}catch(f){r=!0,n=f}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}return e};t.default=function(e){var t=e.eventNode,r=(0,i.useState)({}),n=r[0],c=r[1],f=(0,i.useState)({}),b=f[0],y=f[1],m=(0,i.useState)([]),g=m[0],k=m[1],w=(0,i.useCallback)(function(){var e=s(a().mark((function e(t){var r,o,i,l,f,s,m,w,x,S;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=h(t))in n)){e.next=3;break}return e.abrupt("return");case 3:return c(d({},n,v({},r,!0))),e.next=6,(0,u.tr)(t);case 6:o=e.sent,i=o.filter((function(e){return"NamedNode"===e.o.termType})),l=o.filter((function(e){return"Literal"===e.o.termType})),f=l.reduce((function(e,t){var r=t.p,n=t.o;return e+="\u2192 ".concat(h(r.value)," ").concat(h(n.value),"<br>")}),""),s=i.reduce((function(e,t){var r=t.o,n=h(r.value);return e[n]={id:n,group:0},e}),{}),m=d({},b,v({},r,{id:r,label:f,group:0}),s),y(m),w=i.map((function(e){var t=e.p,n=e.o;return{source:r,target:h(n.value),label:h(t.value)}})),x=w.reduce((function(e,t){return t.target in e||(e[t.target]=[]),e[t.target].push(t),e}),{}),S=Object.values(x).flatMap((function(e){return 1===e.length?e:d({},e[0],{label:"".concat(e.length,"Predicates"),predicates:e.map((function(e){return e.label})).join("<br>")})})),k(p(g).concat(p(S)));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,b,g]);(0,i.useEffect)((function(){if(!t)return y({}),k([]),void c({});s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(h(t.value));case 2:case"end":return e.stop()}}),e)})))()}),[t]);var x=(0,i.useMemo)((function(){return Object.values(b)}),[b]),S=(0,i.useMemo)((function(){return g.map((function(e){return{source:e.source,target:e.target,label:e.label,predicates:e.predicates}}))}),[g]),j=(0,i.useCallback)((function(e,r,a){var o,i,l=e,u=e.x,c=e.y,f=e.id,s=l.color;l.id===h(null!==(o=null===t||void 0===t?void 0:t.value)&&void 0!==o?o:"")?s="red":n[null!==(i=l.id)&&void 0!==i?i:""]&&(s="yellow"),r.textAlign="center",r.textBaseline="middle",r.save();var v=14/a;r.font="".concat(v,"px Sans-Serif");var d=[r.measureText(f).width,v].map((function(e){return e+.2*v}));r.fillStyle=s,r.fillText(f,u,c),r.restore(),l.__bckgDimensions=d}),[null===t||void 0===t?void 0:t.value,n]),O=(0,i.useCallback)((function(e,t,r){var n,a,o,i,l=e.source,u=e.target,c=null!==(n=l.x)&&void 0!==n?n:0,f=null!==(a=l.y)&&void 0!==a?a:0,s=null!==(o=u.x)&&void 0!==o?o:0,v=null!==(i=u.y)&&void 0!==i?i:0,d=e.label;t.strokeStyle="rgba(255,255,255,0.3)",t.lineWidth=1/r,t.beginPath(),t.moveTo(c,f),t.lineTo(s,v),t.stroke(),t.save(),t.fillStyle="white";var b=(c+s)/2,p=(f+v)/2,y=180*Math.atan2(v-f,s-c)/Math.PI;(y>90||y<-90)&&(y+=180),t.translate(b,p),t.rotate(y*Math.PI/180);var h=Math.min(14/r,1.5);e.predicates?(t.font="bold ".concat(h,"px sans-serif"),t.fillStyle="pink"):t.font="".concat(h,"px sans-serif"),t.fillText(d,0,0),t.restore()}),[]),C=(0,i.useCallback)((function(e){w(e.id)}),[w]);return(0,o.jsx)(l.Z,{width:1153,height:500,graphData:{nodes:x,links:S},backgroundColor:"#101020",nodeAutoColorBy:"group",linkDirectionalArrowColor:"green",nodeLabel:"label",linkLabel:"predicates",linkCanvasObject:O,onNodeClick:C,nodeCanvasObject:j,nodePointerAreaPaint:function(e,t,r){var n=e,a=e.x,o=e.y;r.fillStyle=t;var i=n.__bckgDimensions;i&&r.fillRect(a-i[0]/2,o-i[1]/2,i[0],i[1])},linkColor:function(){return"rgba(255,255,255,0.3)"},linkDirectionalParticles:2,linkDirectionalParticleWidth:2,d3VelocityDecay:.1})}}}]);