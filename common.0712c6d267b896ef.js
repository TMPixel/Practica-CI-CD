"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{5295:(y,_,i)=>{i.d(_,{c:()=>r});var u=i(5539),l=i(1086),c=i(8607);const r=(n,o)=>{let t,e;const v=(a,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,w);E&&o(E)&&!E.disabled?E!==t&&(s(),d(E,p)):s()},d=(a,w)=>{t=a,e||(e=t);const p=t;(0,u.w)(()=>p.classList.add("ion-activated")),w()},s=(a=!1)=>{if(!t)return;const w=t;(0,u.w)(()=>w.classList.remove("ion-activated")),a&&e!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>v(a.currentX,a.currentY,l.a),onMove:a=>v(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),e=void 0}})}},8438:(y,_,i)=>{i.d(_,{g:()=>l});var u=i(8476);const l=()=>{if(void 0!==u.w)return u.w.Capacitor}},5572:(y,_,i)=>{i.d(_,{c:()=>u,i:()=>l});const u=(c,r,n)=>"function"==typeof n?n(c,r):"string"==typeof n?c[n]===r[n]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,n)=>void 0!==c&&(Array.isArray(c)?c.some(o=>u(o,r,n)):u(c,r,n))},3351:(y,_,i)=>{i.d(_,{g:()=>u});const u=(o,t,e,v,d)=>c(o[1],t[1],e[1],v[1],d).map(s=>l(o[0],t[0],e[0],v[0],s)),l=(o,t,e,v,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*e*d+3*e+v*d))-o*Math.pow(d-1,3),c=(o,t,e,v,d)=>n((v-=d)-3*(e-=d)+3*(t-=d)-(o-=d),3*e-6*t+3*o,3*t-3*o,o).filter(a=>a>=0&&a<=1),n=(o,t,e,v)=>{if(0===o)return((o,t,e)=>{const v=t*t-4*o*e;return v<0?[]:[(-t+Math.sqrt(v))/(2*o),(-t-Math.sqrt(v))/(2*o)]})(t,e,v);const d=(3*(e/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*e+27*(v/=o))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-t/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-t/3];const w=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5083:(y,_,i)=>{i.d(_,{i:()=>u});const u=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,_,i)=>{i.r(_),i.d(_,{startFocusVisible:()=>r});const u="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let o=[],t=!0;const e=n?n.shadowRoot:document,v=n||document.body,d=M=>{o.forEach(f=>f.classList.remove(u)),M.forEach(f=>f.classList.add(u)),o=M},s=()=>{t=!1,d([])},a=M=>{t=c.includes(M.key),t||d([])},w=M=>{if(t&&void 0!==M.composedPath){const f=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));d(f)}},p=()=>{e.activeElement===v&&d([])};return e.addEventListener("keydown",a),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",s,{passive:!0}),e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("keydown",a),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",s),e.removeEventListener("mousedown",s)},setFocus:d}}},1086:(y,_,i)=>{i.d(_,{I:()=>l,a:()=>t,b:()=>e,c:()=>o,d:()=>d,h:()=>v});var u=i(8438),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=(0,u.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const a=(0,u.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const a=this.getEngine();a&&a.impact({style:s.style})},notification(s){const a=this.getEngine();a&&a.notification({type:s.type})},selection(){this.impact({style:l.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},n=()=>r.available(),o=()=>{n()&&r.selection()},t=()=>{n()&&r.selectionStart()},e=()=>{n()&&r.selectionChanged()},v=()=>{n()&&r.selectionEnd()},d=s=>{n()&&r.impact(s)}},909:(y,_,i)=>{i.d(_,{I:()=>o,a:()=>d,b:()=>n,c:()=>w,d:()=>E,f:()=>s,g:()=>v,i:()=>e,p:()=>p,r:()=>M,s:()=>a});var u=i(467),l=i(4920),c=i(4929);const n="ion-content",o=".ion-content-scroll-host",t=`${n}, ${o}`,e=f=>"ION-CONTENT"===f.tagName,v=function(){var f=(0,u.A)(function*(h){return e(h)?(yield new Promise(m=>(0,l.c)(h,m)),h.getScrollElement()):h});return function(m){return f.apply(this,arguments)}}(),d=f=>f.querySelector(o)||f.querySelector(t),s=f=>f.closest(t),a=(f,h)=>e(f)?f.scrollToTop(h):Promise.resolve(f.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),w=(f,h,m,O)=>e(f)?f.scrollByPoint(h,m,O):Promise.resolve(f.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),p=f=>(0,c.b)(f,n),E=f=>{if(e(f)){const m=f.scrollY;return f.scrollY=!1,m}return f.style.setProperty("overflow","hidden"),!0},M=(f,h)=>{e(f)?f.scrollY=h:f.style.removeProperty("overflow")}},3992:(y,_,i)=>{i.d(_,{a:()=>u,b:()=>w,c:()=>t,d:()=>p,e:()=>L,f:()=>o,g:()=>E,h:()=>c,i:()=>l,j:()=>g,k:()=>D,l:()=>e,m:()=>s,n:()=>M,o:()=>d,p:()=>n,q:()=>r,r:()=>C,s:()=>P,t:()=>a,u:()=>m,v:()=>O,w:()=>v,x:()=>f,y:()=>h});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,_,i)=>{i.d(_,{c:()=>r,g:()=>n});var u=i(8476),l=i(4920),c=i(4929);const r=(t,e,v)=>{let d,s;if(void 0!==u.w&&"MutationObserver"in u.w){const E=Array.isArray(e)?e:[e];d=new MutationObserver(M=>{for(const f of M)for(const h of f.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&E.includes(h.slot))return v(),void(0,l.r)(()=>a(h))}),d.observe(t,{childList:!0,subtree:!0})}const a=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(f=>{v();for(const h of f)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&p()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},n=(t,e,v)=>{const d=null==t?0:t.toString().length,s=o(d,e);if(void 0===v)return s;try{return v(d,e)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},o=(t,e)=>`${t} / ${e}`},1622:(y,_,i)=>{i.r(_),i.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>f,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var u=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},e={},v=!1;const d=()=>{t={},e={},v=!1},s=g=>{if(u.K.getEngine())a(g);else{if(!g.visualViewport)return;e=C(g.visualViewport),g.visualViewport.onresize=()=>{O(g),E()||M(g)?w(g):f(g)&&p(g)}}},a=g=>{g.addEventListener("keyboardDidShow",D=>w(g,D)),g.addEventListener("keyboardDidHide",()=>p(g))},w=(g,D)=>{h(g,D),v=!0},p=g=>{m(g),v=!1},E=()=>!v&&t.width===e.width&&(t.height-e.height)*e.scale>150,M=g=>v&&!f(g),f=g=>v&&e.height===g.innerHeight,h=(g,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-e.height}});g.dispatchEvent(L)},m=g=>{const D=new CustomEvent(n);g.dispatchEvent(D)},O=g=>{t=Object.assign({},e),e=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(y,_,i)=>{i.d(_,{K:()=>r,a:()=>c});var u=i(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const r={getEngine(){const n=(0,u.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,_,i)=>{i.d(_,{c:()=>o});var u=i(467),l=i(8476),c=i(4379);const r=t=>{if(void 0===l.d||t===c.a.None||void 0===t)return null;const e=l.d.querySelector("ion-app");return null!=e?e:l.d.body},n=t=>{const e=r(t);return null===e?0:e.clientHeight},o=function(){var t=(0,u.A)(function*(e){let v,d,s,a;const w=function(){var h=(0,u.A)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;v=()=>{void 0===a&&(a=n(O)),s=!0,p(s,O)},d=()=>{s=!1,p(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",v),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return h.apply(this,arguments)}}(),p=(h,m)=>{e&&e(h,E(m))},E=h=>{if(0===a||a===n(h))return;const m=r(h);return null!==m?new Promise(O=>{const g=new ResizeObserver(()=>{m.clientHeight===a&&(g.disconnect(),O())});g.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",v),null==l.w||l.w.removeEventListener("keyboardWillHide",d),v=d=void 0},isKeyboardVisible:()=>s}});return function(v){return t.apply(this,arguments)}}()},7838:(y,_,i)=>{i.d(_,{c:()=>l});var u=i(467);const l=()=>{let c;return{lock:function(){var n=(0,u.A)(function*(){const o=c;let t;return c=new Promise(e=>t=e),void 0!==o&&(yield o),t});return function(){return n.apply(this,arguments)}}()}}},9001:(y,_,i)=>{i.d(_,{c:()=>c});var u=i(8476),l=i(4920);const c=(r,n,o)=>{let t;const e=()=>!(void 0===n()||void 0!==r.label||null===o()),d=()=>{const a=n();if(void 0===a)return;if(!e())return void a.style.removeProperty("width");const w=o().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==u.w&&"IntersectionObserver"in u.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),t=void 0)},{threshold:.01,root:r});p.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{e()&&(0,l.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(y,_,i)=>{i.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,n)=>{const o=c*r/n-c+"ms",t=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,r,n)=>{const o=r/n,t=c*o-c+"ms",e=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})}}},7166:(y,_,i)=>{i.r(_),i.d(_,{createSwipeBackGesture:()=>n});var u=i(4920),l=i(5083),c=i(8607);i(1970);const n=(o,t,e,v,d)=>{const s=o.ownerDocument.defaultView;let a=(0,l.i)(o);const p=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(o),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&t()),onStart:e,onMove:m=>{const C=p(m)/s.innerWidth;v(C)},onEnd:m=>{const O=p(m),C=s.innerWidth,g=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),x=(L?1-g:g)*C;let b=0;if(x>5){const A=x/Math.abs(D);b=Math.min(A,540)}d(L,g<=0?.01:(0,u.j)(0,g,.9999),b)}})}},2935:(y,_,i)=>{i.d(_,{w:()=>u});const u=(r,n,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{o(l(e,n))});return t.observe(r,{childList:!0,subtree:!0}),t},l=(r,n)=>{let o;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)o=c(t.addedNodes[e],n)||o}),o},c=(r,n)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(e=>e.value===o.value)}},9981:(y,_,i)=>{i.d(_,{Z:()=>c});var u=i(4438),l=i(1075);let c=(()=>{var r;class n{constructor(){}ngOnInit(){}}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=u.VBU({type:r,selectors:[["app-logo"]],decls:6,vars:0,consts:[["color","primary","name","shield-outline",1,"shield-icon"],["color","primary"]],template:function(t,e){1&t&&(u.nrm(0,"ion-icon",0),u.j41(1,"ion-text",1)(2,"h1")(3,"strong"),u.EFF(4,"Admin"),u.k0s(),u.EFF(5,"App"),u.k0s()())},dependencies:[l.iq,l.IO],styles:["h1[_ngcontent-%COMP%]{margin-top:0}.shield-icon[_ngcontent-%COMP%]{font-size:80px;margin-top:40px}"]}),n})()}}]);