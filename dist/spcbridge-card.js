var spcbridge_card=function(t){"use strict";function e(t,e,i,s){var n,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,n)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:v}=Object,m=globalThis,g=m.trustedTypes,b=g?g.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);n.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=v(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,f?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const w=globalThis,E=w.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+k,H=`<${T}>`,I=document,P=()=>I.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,V="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,U=/>/g,z=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,B=/"/g,Z=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,Y=I.createTreeWalker(I,129);function W(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",a=O;for(let e=0;e<i;e++){const i=t[e];let r,c,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===O?"!--"===c[1]?a=D:void 0!==c[1]?a=U:void 0!==c[2]?(Z.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=z):void 0!==c[3]&&(a=z):a===z?">"===c[0]?(a=n??O,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?z:'"'===c[3]?B:R):a===B||a===R?a=z:a===D||a===U?a=O:(a=z,n=void 0);const h=a===z&&t[e+1].startsWith("/>")?" ":"";o+=a===O?i+H:l>=0?(s.push(r),i.slice(0,l)+S+i.slice(l)+k+h):i+k+(-2===l?e:h)}return[W(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const a=t.length-1,r=this.parts,[c,l]=Q(t,e);if(this.el=X.createElement(c,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Y.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[o++],i=s.getAttribute(t).split(k),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?et:"?"===a[1]?it:"@"===a[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:n}),s.removeAttribute(t));if(Z.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),Y.nextNode(),r.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===T)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)r.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=I.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===j)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??I).importNode(e,!0);Y.currentNode=s;let n=Y.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new G(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new nt(n,this,t)),this._$AV.push(e),r=i[++a]}o!==r?.index&&(n=Y.nextNode(),o++)}return Y.currentNode=I,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),M(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new G(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=K(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const s=t;let a,r;for(t=n[0],a=0;a<n.length-1;a++)r=K(this,s[i+a],e,a),r===j&&(r=this._$AH[a]),o||=!M(r)||r!==this._$AH[a],r===F?t=F:t!==F&&(t+=(r??"")+n[a+1]),this._$AH[a]=r}o&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??F)===j)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(X,G),(w.litHtmlVersions??=[]).push("3.2.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new G(e.insertBefore(P(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,lt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$},dt=(t=lt,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function pt(t){return ht({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ut(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}var vt,mt;!function(t){t[t.UNSET=0]="UNSET",t[t.PART_SET_A=1]="PART_SET_A",t[t.PART_SET_B=2]="PART_SET_B",t[t.FULL_SET=3]="FULL_SET",t[t.PARTLY_SET_A=97]="PARTLY_SET_A",t[t.PARTLY_SET_B=98]="PARTLY_SET_B",t[t.PARTLY_FULL_SET=99]="PARTLY_FULL_SET"}(vt||(vt={})),function(t){t.Disarm="unset",t.Arm="set_delayed",t.ArmA="set_a",t.ArmB="set_b",t.ArmForced="set_delayed_forced",t.ArmAForced="set_a_forced",t.ArmBForced="set_b_forced",t.ClearAlerts="clear_alerts",t.Inhibit="inhibit",t.Deinhibit="deinhibit",t.Isolate="isolate",t.Deisolate="deisolate",t.ForceArm="force_arm",t.OutputOn="set",t.OutputOff="reset",t.DoorNormalMode="set_normal_mode",t.DoorUnlockMode="open_permanently",t.DoorLockMode="lock",t.DoorOpen="open_momentarily",t.Cancel="cancel"}(mt||(mt={}));const gt={[mt.Disarm]:"Disarm",[mt.Arm]:"Arm",[mt.ArmA]:"Partset A",[mt.ArmB]:"Partset B",[mt.ArmForced]:"Arm",[mt.ArmAForced]:"Partset A",[mt.ArmBForced]:"Partset B",[mt.ClearAlerts]:"Clear all alerts",[mt.Inhibit]:"Inhibit",[mt.Deinhibit]:"Deinhibit",[mt.Isolate]:"Isolate",[mt.Deisolate]:"Deisolate",[mt.ForceArm]:"Force arm",[mt.OutputOn]:"Switch on",[mt.OutputOff]:"Switch off",[mt.DoorNormalMode]:"Normal mode",[mt.DoorUnlockMode]:"Unlock door",[mt.DoorLockMode]:"Lock door",[mt.DoorOpen]:"Open momentary",[mt.Cancel]:"Cancel"};mt.Disarm,vt.UNSET,mt.Arm,vt.FULL_SET,mt.ArmA,vt.PART_SET_A,mt.ArmB,vt.PART_SET_B,mt.ArmForced,vt.FULL_SET,mt.ArmAForced,vt.PART_SET_A,mt.ArmBForced,vt.PART_SET_B;const bt={type:"custom:spcbridge-card",header:"",spc_system:"",appearance:[]},ft="#ff9800",yt="#4caf50",_t="#ff0000";var $t,At;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}($t||($t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(At||(At={}));var xt={spc_system:"SPC System",header:"Header",appearance:"Appearance",hide_events:"Hide SPC event text messages",hide_areas_tab:"Hide Areas tab",hide_zones_tab:"Hide Zones tab",hide_outputs_tab:"Hide Outputs tab",hide_doors_tab:"Hide Doors tab"},wt={},Et={editor:xt,errors:wt},Ct={en:Object.freeze({__proto__:null,default:Et,editor:xt,errors:wt})};function St(t,e,i="",s=""){const n=e.replace(/['"]+/g,"").replace("-","_");var o;try{o=t.split(".").reduce(((t,e)=>t[e]),Ct[n])}catch(e){o=t.split(".").reduce(((t,e)=>t[e]),Ct.en)}if(void 0===o&&(o=t.split(".").reduce(((t,e)=>t[e]),Ct.en)),""!==i&&""!==s){Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);for(let t=0;t<i.length;t++)o=o.replace(i[t],s[t])}return o}let kt=class extends at{constructor(){super(...arguments),this._entities=null,this._editAction=null,this.viewElements=["Hide SPC event text messages","Hide System tab","Hide Areas tab","Hide Zones tab","Hide Outputs tab","Hide Doors tab"]}async firstUpdated(){}setConfig(t){this._config=Object.assign(Object.assign({},bt),t)}render(){return this._config&&this.hass?N`
      <div class="card-config">
        <div class="grid">
	  <ha-form
            .hass=${this.hass}
	    .data=${this._config}
            .schema=${[{name:"spc_system",selector:{config_entry:{integration:"spcbridge"}}},{name:"header",selector:{text:{type:"text"}}},{name:"appearance",selector:{select:{multiple:!0,mode:"list",options:[{label:St("editor.hide_events",this.hass.language),value:"hide_events"},{label:St("editor.hide_areas_tab",this.hass.language),value:"hide_areas_tab"},{label:St("editor.hide_zones_tab",this.hass.language),value:"hide_zones_tab"},{label:St("editor.hide_outputs_tab",this.hass.language),value:"hide_outputs_tab"},{label:St("editor.hide_doors_tab",this.hass.language),value:"hide_doors_tab"}]}}}]}
	    .computeLabel=${this._computeLabel}
	    @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      </div>
    `:N``}_computeLabel(t){let e=St("editor."+t.name,this.hass.language);return"spc_system"==t.name&&(e=e+" ("+this.hass.localize("ui.panel.lovelace.editor.card.config.required")+")"),e}_valueChanged(t){if(!this._config||!this.hass)return;const e=Object.assign({},this._config);e.spc_system=t.detail.value.spc_system,e.header=t.detail.value.header,e.appearance=t.detail.value.appearance,this._config=e,function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}_editActionClick(t){this._editAction=t}_goBack(){this._editAction=null}static get styles(){return r`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    `}};e([ht({attribute:!1})],kt.prototype,"hass",void 0),e([pt()],kt.prototype,"_config",void 0),e([pt()],kt.prototype,"_entities",void 0),e([pt()],kt.prototype,"_editAction",void 0),kt=e([ct("spcbridge-card-editor")],kt);const Tt=(t,e,i,s)=>{switch(t){case vt.UNSET:return N`
        <svg x="0px" y="0px" width=${e} height=${i} viewBox="0 0 507.853 761.44598">
          <path
            fill=${s}
            d="M 469.161,321.04796 H 130.554 v -124.692 C 130.554,128.377 185.86,73.095 253.866,73.095 c 68.003,0 123.311,55.282 123.311,123.26096 v 13.896 h 73.097 v -13.896 C 450.274,88.093 362.152,0 253.867,0 145.579,0 57.461,88.094 57.461,196.35596 v 124.692 H 38.568 c -21.265,0 -38.568,17.25 -38.568,38.595 v 363.074 c 0,21.346 17.304,38.546 38.568,38.546 h 430.594 c 21.268,0 38.568,-17.2 38.568,-38.546 v -363.074 c -0.001,-21.345 -17.302,-38.595 -38.569,-38.595 z M 301.95355,610.24258 c 1.23,3.973 0.513,8.303 -1.948,11.659 -2.46,3.357 -6.379,5.33 -10.53,5.355 l -77.542,0.333 h -0.051 c -4.152,0 -8.047,-1.945 -10.507,-5.278 -2.486,-3.331 -3.254,-7.636 -2.05,-11.633 l 23.933,-79.311 c -15.17,-9.278 -25.395,-25.831 -25.395,-44.948 0,-29.162 23.653,-52.839 52.865,-52.839 29.162,0 52.865,23.677 52.865,52.839 0,19.373 -10.558,36.133 -26.085,45.332 z"
            id="path4"
          />
        </svg>
      `;case vt.PART_SET_A:return N`
        <svg x="0px" y="0px" width=${e} height=${i} viewBox="0 0 507.853 761.44598">
          <path
            fill=${s}
            d="M 469.273,321.125 H 450.378 V 196.401 C 450.378,88.113 362.24,0 253.928,0 145.614,0 57.473,88.113 57.473,196.401 V 321.126 H 38.58 C 17.306,321.126 0,338.377 0,359.73 v 363.162 c 0,21.351 17.306,38.554 38.58,38.554 h 430.692 c 21.275,0 38.581,-17.203 38.581,-38.554 V 359.729 c 10e-4,-21.352 -17.305,-38.604 -38.58,-38.604 z M 130.584,196.401 c 0,-67.99 55.323,-123.289 123.344,-123.289 68.018,0 123.342,55.299 123.342,123.289 V 321.126 H 130.584 Z M 245.553,676.94 c 0,15.896 -12.897,28.749 -28.773,28.749 H 84.967 c -15.872,0 -28.775,-12.853 -28.775,-28.749 V 406.117 c 0,-15.925 12.903,-28.799 28.775,-28.799 h 131.812 c 15.876,0 28.773,12.874 28.773,28.799 V 676.94 Z"
          />
        </svg>
      `;case vt.PART_SET_B:return N`
        <svg x="0px" y="0px" width=${e} height=${i} viewBox="0 0 507.853 761.44598">
          <path
            fill=${s}
            d="M 469.276,321.126 H 450.381 V 196.401 C 450.381,88.113 362.241,0 253.928,0 145.614,0 57.473,88.113 57.473,196.401 V 321.126 H 38.583 C 17.306,321.126 0,338.377 0,359.73 v 363.162 c 0,21.351 17.306,38.554 38.583,38.554 h 430.692 c 21.272,0 38.578,-17.203 38.578,-38.554 V 359.73 c 10e-4,-21.352 -17.305,-38.604 -38.577,-38.604 z M 130.585,196.402 c 0,-67.99 55.321,-123.289 123.343,-123.289 68.02,0 123.341,55.299 123.341,123.289 V 321.127 H 130.585 Z m 312.704,480.539 c 0,15.896 -12.902,28.749 -28.773,28.749 H 282.704 c -15.874,0 -28.775,-12.853 -28.775,-28.749 V 406.118 c 0,-15.925 12.901,-28.799 28.775,-28.799 h 131.812 c 15.871,0 28.773,12.874 28.773,28.799 z"
          />
        </svg>
      `;case vt.FULL_SET:return N`
        <svg x="0px" y="0px" width=${e} height=${i} viewBox="0 0 507.853 761.44598">
          <path
            fill=${s}
            d="M 469.741,321.446 H 450.829 V 196.598 C 450.829,88.203 362.601,0 254.179,0 145.759,0 57.531,88.203 57.531,196.598 V 321.446 H 38.619 C 17.324,321.446 0,338.717 0,360.09 v 363.522 c 0,21.371 17.324,38.592 38.619,38.592 h 431.122 c 21.295,0 38.616,-17.221 38.616,-38.592 V 360.089 c 0,-21.372 -17.321,-38.643 -38.616,-38.643 z M 130.715,196.598 c 0,-68.062 55.376,-123.412 123.463,-123.412 68.087,0 123.464,55.351 123.464,123.412 V 321.446 H 130.715 Z m 174.689,414.723 c 1.23,3.973 0.513,8.303 -1.948,11.659 -2.46,3.357 -6.379,5.33 -10.53,5.355 l -77.542,0.333 c 0,0 -0.025,0 -0.051,0 -4.152,0 -8.047,-1.945 -10.507,-5.278 -2.486,-3.331 -3.254,-7.636 -2.05,-11.633 l 23.933,-79.311 c -15.17,-9.278 -25.395,-25.831 -25.395,-44.948 0,-29.162 23.653,-52.839 52.865,-52.839 29.162,0 52.865,23.677 52.865,52.839 0,19.373 -10.558,36.133 -26.085,45.332 z"
          />
        </svg>
      `;case vt.PARTLY_SET_A:case vt.PARTLY_SET_B:case vt.PARTLY_FULL_SET:return N`
        <svg x="0px" y="0px" width=${e} height=${i} viewBox="0 0 507.853 761.44598">
          <path
            fill=${s}
            d="m 469.27298,321.125 h -18.895 V 196.401 C 450.37798,88.113 362.23997,0 253.928,0 145.614,0 57.473,88.113 57.473,196.401 V 321.126 H 38.58 C 17.306,321.126 0,338.377 0,359.73 v 363.162 c 0,21.351 17.306,38.554 38.58,38.554 h 430.69198 c 21.275,0 38.581,-17.203 38.581,-38.554 V 359.729 c 10e-4,-21.352 -17.305,-38.604 -38.58,-38.604 z M 130.584,196.401 c 0,-67.99 55.323,-123.289 123.344,-123.289 68.01797,0 123.34198,55.299 123.34198,123.289 V 321.126 H 130.584 Z M 446.81327,676.94 c 0,15.896 -12.897,28.749 -28.773,28.749 H 84.967 c -15.872,0 -28.775,-12.853 -28.775,-28.749 V 406.117 c 0,-15.925 12.903,-28.799 28.775,-28.799 h 333.07227 c 15.876,0 28.773,12.874 28.773,28.799 V 676.94 Z"
          />
        </svg>
      `;default:return N``}};class Ht extends at{shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entityId||e.states[this.entityId]===this.hass.states[this.entityId])}_handleActionEvent(t,e){let i=new CustomEvent("action-event",{detail:{service:"panel"==this.panelType?"panel_command":"area_command",entity:this.entityId,action:t,title:e}});this.dispatchEvent(i)}render(){if(!(this.hass&&this.entityId&&this.hass.states&&this.hass.states[this.entityId]&&this.hass.states[this.entityId].attributes))return N``;const t=Object.assign({},this.hass.states[this.entityId].attributes),e=t.title,i=t.mode;let s=120,n=200;"list"==this.layout&&(s=60,n=100);let o="";return t.alarm_status&&t.alarm_status.intrusion?o="Intrusion alarm":t.alarm_status&&t.alarm_status.fire?o="Fire alarm":t.alarm_status&&t.alarm_status.verified?o="Verified alarm":t.alarm_status&&t.alarm_status.tamper?o="Tamper alarm":t.alarm_status&&t.alarm_status.problem&&(o="Problem alarm"),""!=o?N`
      <div class="container ${this.layout}">
        <div class="header ${this.layout}" style="color:${_t};">${e} - ${o}</div>
        <div class="arm-container">
          <div class="arm-icon-button"
            @click=${()=>this._handleActionEvent(mt.ClearAlerts,e)}>
            ${Tt(i,s,n,_t)}
          </div>
        </div>
        </div>
      `:N`
      
      <div class="container ${this.layout}">
        ${i==vt.UNSET?N`
            <div class="header ${this.layout}" style="color:${yt};">${e} - Disarmed</div>
            <div class="arm-container">
	      ${t.partset_a_enabled?N`<input type="button" class="arm-text-button" value="Partset A" 
                      @click=${()=>this._handleActionEvent(mt.ArmA,e)} />`:N`<input style="opacity:0; cursor:default;" type="button" class="arm-text-button" value="Partset A"/>`}

              <div class="arm-icon-button"
                @click=${()=>this._handleActionEvent(mt.Arm,e)}>
                ${Tt(i,s,n,yt)}
              </div>

	      ${t.partset_b_enabled?N`<input type="button" class="arm-text-button" value="Partset B" 
                      @click=${()=>this._handleActionEvent(mt.ArmB,e)} />`:N`<input style="opacity:0; cursor:default;" type="button" class="arm-text-button" value="Partset B"/>`}
            </div>`:""}
        ${i==vt.FULL_SET?N`
            <div class="header ${this.layout}" style="color:${ft};">${e} - Armed</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${()=>this._handleActionEvent(mt.Disarm,e)}>
                ${Tt(i,s,n,ft)}
              </div>
            </div>`:""}
        ${i==vt.PARTLY_FULL_SET||i==vt.PARTLY_SET_A||i==vt.PARTLY_SET_B?N`
            <div class="header ${this.layout}" style="color:${ft};">${e} - Partly Armed</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${()=>this._handleActionEvent(mt.Disarm,e)}>
                ${Tt(i,s,n,ft)}
              </div>
            </div>`:""}
        ${i==vt.PART_SET_A?N`
            <div class="header ${this.layout}" style="color:${ft};">${e} - Partset A</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${()=>this._handleActionEvent(mt.Disarm,e)}>
                ${Tt(i,s,n,ft)}
              </div>
            </div>`:""}
        ${i==vt.PART_SET_B?N`
            <div class="header ${this.layout}" style="color:${ft};">${e} - Partset B</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${()=>this._handleActionEvent(mt.Disarm,e)}>
                ${Tt(i,s,n,ft)}
              </div>
            </div>`:""}
      </div>

    `}static get styles(){return r`
      .container { 
        margin-top: 10px;
	background-color: var(--spcbridge-card-background-color);
	height: 300px;
	border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
      }
      .container.list { 
	height: 200px !important;
      }
      .header  { 
        position: relative;
        top: 20px;
        display: block;
        width: 100%;
        font-weight: 500;
        font-size: 1.4em;
        text-align: center;
      }
      .header.list { 
        font-size: 1.3em !Important;
      }
      .arm-container {
        position: relative;
        top: 30px;
        display: flex;
        align-items: flex-center;
        flex-direction: row;
        justify-content: space-evenly;
      }
      .arm-text-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        background-color: transparent;
        font-size: 1.1em;
        font-weight: 500;
        cursor: pointer;
      }
      .arm-icon-button {
        cursor: pointer;
      }
    `}}e([ht({type:Object})],Ht.prototype,"hass",void 0),e([ht({type:String})],Ht.prototype,"entityId",void 0),e([ht({type:String})],Ht.prototype,"layout",void 0),e([ht({type:String})],Ht.prototype,"panelType",void 0),customElements.define("spc-arm-panel",Ht);var It="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";class Pt extends at{constructor(){super(...arguments),this.disableActions=!1}shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entityId||e.states[this.entityId]===this.hass.states[this.entityId])}_handleZoneSelectEvent(){var t;if(this.disableActions)return;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("command-panel");e&&("flex"!=e.style.display?e.style.display="flex":e.style.display="none")}_handleActionEvent(t,e){if(t==mt.Cancel)return this._handleZoneSelectEvent();let i=new CustomEvent("action-event",{detail:{service:"zone_command",entity:this.entityId,action:t,title:e}});this.dispatchEvent(i)}stateIcon(t){switch(t.device_class){case"motion":return 1==t.input?"M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z":"M11.4 8.2H15V10H13.2L11.4 8.2M19.67 1H18.33C18.33 3.58 20.42 5.67 23 5.67V4.33C21.16 4.33 19.67 2.84 19.67 1M21 1C21 2.11 21.9 3 23 3V1H21M17 1H15.67C15.67 5.05 18.95 8.33 23 8.33V7C19.69 7 17 4.31 17 1M10 3.8C11 3.8 11.8 3 11.8 2S11 .2 10 .2 8.2 1 8.2 2 9 3.8 10 3.8M2.39 1.73L1.11 3L3.46 5.35L2 5.8V11H3.8V7.33L5.05 6.94L5.68 7.57L2 22H3.8L6.67 13.89L9 17V22H10.8V15.59L8.31 11.05L8.5 10.37L20.84 22.73L22.11 21.46L2.39 1.73M9.38 4.87C9.08 4.37 8.54 4.03 7.92 4.03C7.75 4.03 7.58 4.06 7.42 4.11L7.34 4.14L11.35 8.15L9.38 4.87Z";case"door":return 1==t.input?"M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z":"M16,11H18V13H16V11M12,3H19C20.11,3 21,3.89 21,5V19H22V21H2V19H10V5C10,3.89 10.89,3 12,3M12,5V19H19V5H12Z";case"window":return 1==t.input?"M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z":"M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z";case"smoke":return 1==t.input?"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z":"M22.11 21.46L2.39 1.73L1.11 3L7.09 9C5.66 10.36 4.88 12.47 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C17.1 19.26 17.15 19.18 17.22 19.11L20.84 22.73L22.11 21.46M8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C7 12.47 6.74 10.69 7.26 9.15L8.58 10.47C8.58 11.4 8.73 12.33 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.66 15 12.66 14.76 12.64 14.53L15 16.88C14.85 17.11 14.69 17.33 14.5 17.5M18.92 15.72L9.65 6.46C10.12 5.65 10.72 4.92 11.46 4.32C12.17 3.75 13 3.23 13.95 3C13 4.85 13.33 7.26 14.82 8.72C15.46 9.35 16.22 9.78 16.89 10.38C17.15 10.64 17.43 10.9 17.66 11.2C17.66 11.2 18.22 12 18.43 12.46L18.56 12.72C18.96 13.69 19.06 14.72 18.92 15.72Z"}return 1==t.input?"M1,11H3.17C3.58,9.83 4.69,9 6,9C6.65,9 7.25,9.21 7.74,9.56L14.44,4.87L15.58,6.5L8.89,11.2C8.96,11.45 9,11.72 9,12A3,3 0 0,1 6,15C4.69,15 3.58,14.17 3.17,13H1V11M23,11V13H20.83C20.42,14.17 19.31,15 18,15A3,3 0 0,1 15,12A3,3 0 0,1 18,9C19.31,9 20.42,9.83 20.83,11H23M6,11A1,1 0 0,0 5,12A1,1 0 0,0 6,13A1,1 0 0,0 7,12A1,1 0 0,0 6,11M18,11A1,1 0 0,0 17,12A1,1 0 0,0 18,13A1,1 0 0,0 19,12A1,1 0 0,0 18,11Z":"M20.83 11A3 3 0 0 0 15.18 11H8.82A3 3 0 0 0 3.17 11H1V13H3.17A3 3 0 0 0 8.82 13H15.18A3 3 0 0 0 20.83 13H23V11M6 13A1 1 0 1 1 7 12A1 1 0 0 1 6 13M18 13A1 1 0 1 1 19 12A1 1 0 0 1 18 13Z"}stateText(t){switch(t.device_class){case"motion":return 1==t.input?"Motion":"No motion";case"door":case"window":return 1==t.input?"Open":"Closed";case"smoke":return 1==t.input?"Fire":"No fire"}return 1==t.input?"Open":"Closed"}render(){if(!(this.hass&&this.entityId&&this.hass.states&&this.hass.states[this.entityId]&&this.hass.states[this.entityId].attributes))return N``;const t=Object.assign({},this.hass.states[this.entityId].attributes);let e=this.stateText(t),i=1==t.input?"open":"closed";t.inhibited&&(e="Inhibited",i="warning"),t.isolated&&(e="Isolated",i="warning"),t.alarm_status&&t.alarm_status.intrusion?(e="Intrusion",i="alarm"):t.alarm_status&&t.alarm_status.fire?(e="Fire",i="alarm"):t.alarm_status&&t.alarm_status.tamper?(e="Tamper",i="alarm"):t.alarm_status&&t.alarm_status.problem&&(e="Problem",i="alarm");const s=t.area_name?t.area_name:"";return N`
      
      <div class="zone-container" @click=${()=>this._handleZoneSelectEvent()}>
        <div class="icon-container ${i}">
	  <svg class="icon-svg" viewBox="0 0 24 24">
            <path class="icon-path" d=${this.stateIcon(t)} />
          </svg>
	</div>
        <div class="info-container">
	  <div class="zone-name">
	     ${t.name}
	  </div>
	  <div class="zone-info">
	    ${s}
	  </div>
	</div>
        <div class="status-container">
	  <div class="status ${i}">
	   ${e} 
	  </div>
	</div>
      </div>
      <div id="command-panel" class="command-panel">
        <div class="command-buttons">
          ${t.isolated?"":N`  
	        ${t.inhibited?N`
                    <input type="button" class="command-button" value="Deinhibit" 
                      @click=${()=>this._handleActionEvent(mt.Deinhibit,t.name)} />
                  `:N`
                    <input type="button" class="command-button" value="Inhibit" 
                      @click=${()=>this._handleActionEvent(mt.Inhibit,t.name)} />
                    `}
	      `}
          ${t.isolated?N`
              <input type="button" class="command-button" value="Deisolate" 
                @click=${()=>this._handleActionEvent(mt.Deisolate,t.name)} />
              `:N`
              <input type="button" class="command-button" value="Isolate" 
                @click=${()=>this._handleActionEvent(mt.Isolate,t.name)} />
              `} 
	</div>
	<div class="icon-button"
	  @click=${()=>this._handleActionEvent(mt.Cancel,t.name)}>
	  <svg class="icon-button-svg" viewBox="0 0 24 24">
            <path class="icon-button-path" d=${It} />
          </svg>
	</div>
      </div>

    `}static get styles(){return r`
      .zone-container { 
        margin-top: 10px;
	background-color: var(--spcbridge-card-background-color); 
	height: 50px;
        position: relative;
        display: flex;
	cursor: pointer;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	border-color: var(--spcbridge-card-border-color);
      }
      .icon-container { 
        position: relative;
        top: 5px;
	left: 10px;
        width: 34px;
        height: 34px;
        min-width: 34px;
        min-height: 34px;
        max-width: 34px;
        max-height: 34px;
	border: 3px solid;
	border-radius: 50%;
      }
      .icon-svg { 
        position: relative;
        width: 20px;
	height: 20px;
	top: 7px;
	left: 7px;
      }
      .icon-path { 
        fill: var(--spcbridge-primary-text-color);
      }
      .info-container { 
        position: relative;
	left: 30px;
        width: 250px;
        height: 100%;
      }
      .zone-name { 
        margin-top: 5px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
      }
      .zone-info { 
        font-size: 1.0em;
      }
      .status-container { 
        position: relative;
	right: 10px;
        width: 170px;
        height: 100%;
	text-align: right;
      }
      .status { 
        position: relative;
	top: 10px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
      }
      .command-panel {
        display: none;
        background-color: var(--spcbridge-primary-text-color);
        padding: 0 18px;
	height: 50px;
	margin-left: 5px;
	margin-right: 5px;
        overflow: hidden;
	border-radius: 0px 0px 5px 5px;
      }
      .command-buttons {
        width: 100%;
        display: flex;
        align-items: flex-center;
        flex-direction: row;
        justify-content: space-evenly;
      }
      .command-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        color: var(--spcbridge-secondary-background-color);
        background-color: transparent;
        font-size: 1.1em;
        font-weight: 400;
        cursor: pointer;
      }
      .command-button:hover {
        filter: brightness(85%);
      }
      .icon-button {
        cursor: pointer;
      }
      .icon-button-svg { 
        position: relative;
        width: 24px;
	height: 24px;
	top: 15px;
	left: 0px;
      }
      .icon-button:hover {
        filter: brightness(50%);
      }
      .icon-button-path { 
        fill: var(--spcbridge-secondary-background-color);
      }
      .open {
	border-color: var(--spcbridge-orange-color);
	color: var(--spcbridge-orange-color);
      }
      .closed {
	border-color: var(--spcbridge-green-color);
	color: var(--spcbridge-green-color);
      }
      .warning { 
        border-color: var(--spcbridge-orange-color);
        color: var(--spcbridge-orange-color);
      }
      .alarm { 
        border-color: var(--spcbridge-red-color);
        color: var(--spcbridge-red-color);
      }
    `}}e([ht({type:Object})],Pt.prototype,"hass",void 0),e([ht({type:String})],Pt.prototype,"entityId",void 0),e([ht({type:Boolean})],Pt.prototype,"disableActions",void 0),customElements.define("spc-sensor-item",Pt);class Mt extends at{shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entityId||e.states[this.entityId]===this.hass.states[this.entityId])}handleActionEvent(t,e){const i=new CustomEvent("action-event",{detail:{service:"output_command",entity:this.entityId,action:t,title:e}});this.dispatchEvent(i)}render(){if(!(this.hass&&this.entityId&&this.hass.states&&this.hass.states[this.entityId]&&this.hass.states[this.entityId].attributes))return N``;const t=Object.assign({},this.hass.states[this.entityId].attributes),e=t.state?"M17 6H7C3.69 6 1 8.69 1 12S3.69 18 7 18H17C20.31 18 23 15.31 23 12S20.31 6 17 6M17 16H7C4.79 16 3 14.21 3 12S4.79 8 7 8H17C19.21 8 21 9.79 21 12S19.21 16 17 16M17 9C15.34 9 14 10.34 14 12S15.34 15 17 15 20 13.66 20 12 18.66 9 17 9Z":"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",i=t.state?"On":"Off",s=t.state?"on":"off";return N`
      <div class="container">
        <div class="info-container">
	  <div class="output-name">
	     ${t.name}
	  </div>
	</div>
        <div class="state-container">
	  <div class="state ${s}">
	   ${i} 
	  </div>
	</div>
        <div class="icon-button ${s}"
          @click=${()=>this.handleActionEvent(t.state?mt.OutputOff:mt.OutputOn,t.name)}>
	  <svg class="icon-svg" viewBox="0 0 24 24">
            <path class="icon-path ${s}" d=${e} />
          </svg>
	</div>
      </div>
    `}static get styles(){return r`
      .container { 
        margin-top: 10px;
	background-color: var(--spcbridge-card-background-color);
	height: 50px;
        position: relative;
        display: flex;
	cursor: pointer;
        border-radius: 8px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
      }
      .info-container { 
        position: relative;
	left: 20px;
        width: 250px;
        height: 100%;
      }
      .output-name { 
        margin-top: 14px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
      }
      .state-container { 
        position: absolute;
	top: 14px;
	right: 70px;
        width: 50px;
        height: 100%;
	text-align: right;
      }
      .state { 
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
      }
      .on {
	border-color: var(--spcbridge-orange-color);
	color: var(--spcbridge-orange-color);
	fill: var(--spcbridge-orange-color);
      }
      .off {
	border-color: var(--spcbridge-green-color);
	color: var(--spcbridge-green-color);
	fill: var(--spcbridge-green-color);
      }
      .icon-button { 
        position: absolute;
	top: 5px;
	right: 10px;
        width: 40px;
        height: 40px;
        min-width: 40;
        min-height: 40px;
        max-width: 40px;
        max-height: 40px;
	border: 0px;
	cursor: pointer;
      }
      .icon-button:hover {
        filter: brightness(80%);
      }
      .icon-svg { 
        width: 100%;
	height: 100%;
      }
    `}}e([ht({type:Object})],Mt.prototype,"hass",void 0),e([ht({type:String})],Mt.prototype,"entityId",void 0),customElements.define("spc-output-item",Mt);class Lt extends at{shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entityId||e.states[this.entityId]===this.hass.states[this.entityId])}handleSelectEvent(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("command-panel");e&&("flex"!=e.style.display?e.style.display="flex":e.style.display="none")}handleActionEvent(t,e){if(t==mt.Cancel)return this.handleSelectEvent();let i=new CustomEvent("action-event",{detail:{service:"door_command",entity:this.entityId,action:t,title:e}});this.dispatchEvent(i)}stateIcon(t){return 1==t.mode?"M14 15C14 16.11 13.11 17 12 17C10.89 17 10 16.1 10 15C10 13.89 10.89 13 12 13C13.11 13 14 13.9 14 15M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.1 4 20V10C4 8.89 4.89 8 6 8H7V6C7 3.24 9.24 1 12 1S17 3.24 17 6V8H18C19.11 8 20 8.9 20 10V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V10H6V20H13.09M9 8H15V6C15 4.34 13.66 3 12 3S9 4.34 9 6V8M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z":2==t.mode?"M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17Z":"M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}stateClass(t){return 1==t.mode?"locked":2==t.mode?"unlocked":"normal"}stateLabel(t){return 1==t.mode?"Locked":2==t.mode?"Unlocked":"Normal"}render(){if(!(this.hass&&this.entityId&&this.hass.states&&this.hass.states[this.entityId]&&this.hass.states[this.entityId].attributes))return N``;const t=Object.assign({},this.hass.states[this.entityId].attributes),e=this.stateClass(t),i=this.stateLabel(t);return N`
      
      <div class="container" @click=${()=>this.handleSelectEvent()}>
        <div class="icon-container ${e}">
	  <svg class="icon-svg" viewBox="0 0 24 24">
            <path class="icon-path" d=${this.stateIcon(t)} />
          </svg>
	</div>
        <div class="info-container">
	  <div class="door-name">
	     ${t.name}
	  </div>
	</div>
        <div class="status-container">
	  <div class="status ${e}">
	   ${i} 
	  </div>
	</div>
      </div>
      <div id="command-panel" class="command-panel">
        <div class="command-buttons">
          ${0==t.mode?N`  
              <input type="button" class="command-button" value="Open momentary" 
                @click=${()=>this.handleActionEvent(mt.DoorOpen,t.name)} />
              <input type="button" class="command-button" value="Unlock" 
                @click=${()=>this.handleActionEvent(mt.DoorUnlockMode,t.name)} />
              <input type="button" class="command-button" value="Lock" 
                @click=${()=>this.handleActionEvent(mt.DoorLockMode,t.name)} />
	      `:""}
          ${1==t.mode?N`  
              <input type="button" class="command-button" value="Normal mode" 
                @click=${()=>this.handleActionEvent(mt.DoorNormalMode,t.name)} />
              <input type="button" class="command-button" value="Unlock" 
                @click=${()=>this.handleActionEvent(mt.DoorUnlockMode,t.name)} />
	      `:""}
          ${2==t.mode?N`  
              <input type="button" class="command-button" value="Normal mode" 
                @click=${()=>this.handleActionEvent(mt.DoorNormalMode,t.name)} />
              <input type="button" class="command-button" value="Lock" 
                @click=${()=>this.handleActionEvent(mt.DoorLockMode,t.name)} />
	      `:""}
	</div>
	<div class="icon-button"
	  @click=${()=>this.handleActionEvent(mt.Cancel,t.name)}>
	  <svg class="icon-button-svg" viewBox="0 0 24 24">
            <path class="icon-button-path" d=${It} />
          </svg>
	</div>
      </div>

    `}static get styles(){return r`
      .container { 
        margin-top: 10px;
	background-color: var(--spcbridge-card-background-color);
	height: 50px;
        position: relative;
        display: flex;
	cursor: pointer;
	border-radius: 8px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
      }
      .icon-container { 
        position: relative;
        top: 5px;
	left: 10px;
        width: 34px;
        height: 34px;
        min-width: 34px;
        min-height: 34px;
        max-width: 34px;
        max-height: 34px;
	border: 3px solid;
	border-radius: 50%;
      }
      .icon-svg { 
        position: relative;
        width: 20px;
	height: 20px;
	top: 7px;
	left: 7px;
      }
      .icon-path { 
        fill: var(--spcbridge-primary-text-color);
      }
      .info-container { 
        position: relative;
	left: 30px;
        width: 250px;
        height: 100%;
      }
      .door-name { 
        margin-top: 14px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
      }
      .door-info { 
        font-size: 1.0em;
      }
      .status-container { 
        position: relative;
	right: 10px;
        width: 170px;
        height: 100%;
	text-align: right;
      }
      .status { 
        position: relative;
	top: 14px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
      }
      .command-panel {
        display: none;
	background-color: var(--spcbridge-primary-text-color);
        padding: 0 18px;
	height: 50px;
	margin-left: 5px;
	margin-right: 5px;
        overflow: hidden;
	border-radius: 0px 0px 5px 5px;
      }
      .command-buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }
      .command-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
	color: var(--spcbridge-secondary-background-color);
        background-color: transparent;
	font-size: 1.1em;
        font-weight: 500;
        cursor: pointer;
      }
      .command-button:hover {
        filter: brightness(85%);
      }
      .icon-button {
        cursor: pointer;
      }
      .icon-button-svg { 
        position: relative;
        width: 24px;
	height: 24px;
	top: 15px;
	left: 0px;
      }
      .icon-button:hover {
        filter: brightness(50%);
      }
      .icon-button-path { 
	fill: var(--spcbridge-secondary-background-color);
      }
      .locked {
	border-color: var(--spcbridge-orange-color);
	color: var(--spcbridge-orange-color);
      }
      .unlocked {
	border-color: var(--spcbridge-green-color);
	color: var(--spcbridge-green-color);
      }
      .normal { 
        border-color: var(--spcbridge-orange-color);
        color: var(--spcbridge-orange-color);
      }
    `}}e([ht({type:Object})],Lt.prototype,"hass",void 0),e([ht({type:String})],Lt.prototype,"entityId",void 0),customElements.define("spc-door-item",Lt);class Vt extends at{getFraction(){if(this.delay<=0)return 1;let t=Math.round(this.remaining)/this.delay;return t<0?0:t}_stateValue(){return this.delay>0?N`
        ${Math.max(Math.round(this.remaining),0)}
      `:N``}_cancelClick(){this.action.action="unset";const t=new CustomEvent("countdown-event",{detail:{action:this.action}});this.dispatchEvent(t)}render(){let t=45,e=2*Math.PI*t;const i=this.action.title+" - Arming";return N`
      ${this.delay>0?N`
          <div id="container">
            <div id="header">${i}</div>
            <div id="container-counter">
              <div id="counter">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g class="track">
                    <circle cx="${50}" cy="${50}" r="${t}"></circle>
                    <path
                      stroke-dasharray="${(this.getFraction()*e).toFixed(2)} ${e.toFixed(2)}"
                      class="remaining"
                      d="
                        M ${50}, ${50}
                        m -${t}, 0
                        a ${t},${t} 0 1,0 90,0
                        a ${t},${t} 0 1,0 -90,0
                      "
                    ></path>
                  </g>
                </svg>
                <div class="overlay">
                  <div class="value">
                    ${this._stateValue()}
                  </div>
                </div>
              </div>
            </div>
            <input type="button" id="cancel" value="Cancel" @click=${this._cancelClick} />
          </div>
        `:N``}
    `}static get styles(){return r`
      #container {
        margin-top: 10px;
        background-color: var(--spcbridge-card-background-color);
        width: 100%;
        border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
        display: block;
        text-align: center;
      }
      #header  {
        position: relative;
        top: 20px;
        display: block;
        width: 100%;
        font-weight: 500;
        font-size: 1.4em;
        text-align: center;
      }
      #container-counter {
        width: 150px;
        height: 200px;
        margin: 0px auto;
        padding-top: 60px;
	color: var(--spcbridge-orange-color);
      }
      #cancel {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 0;
        border: 0;
        outline: none;
        width: 100%;
        background-color: transparent;
        font-size: 1.0em;
        text-align: center;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 3px;
        stroke: var(--spcbridge-card-background-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--spcbridge-orange-color);
      }
      .overlay {
        position: absolute;
        margin-top: -150px;
        margin-left: 0;
        width: 150px;
        height: 150px;
        font-size: 2.0em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
	color: var(--spcbridge-primary-text-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 1.3em;
      }
    `}}e([ht()],Vt.prototype,"delay",void 0),e([ht()],Vt.prototype,"remaining",void 0),e([ht()],Vt.prototype,"action",void 0),customElements.define("spc-countdown",Vt);class Ot extends at{constructor(){super(...arguments),this._input=""}_handlePadClick(t){const e=t.currentTarget.value;if("Enter"===e||"Cancel"===e){"Enter"===e&&(this.action.code=this._input);let t=new CustomEvent("keypad-event",{detail:{action:this.action}});return this.dispatchEvent(t),void(this._input="")}this._input="Clear"===e?"":this._input+e}render(){const t=this.action.title+" - "+gt[this.action.action];return N`
      <div id="container">
        <div id="header">${t}</div>
        <input id="code" type="password" value=${this._input} disabled />
        <div>
          <input type="button" class="key-button" value="1" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="2" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="3" @click=${this._handlePadClick} />
        </div>
        <div>
          <input type="button" class="key-button" value="4" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="5" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="6" @click=${this._handlePadClick} />
        </div>
        <div>
          <input type="button" class="key-button" value="7" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="8" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="9" @click=${this._handlePadClick} />
        </div>
        <div>
          <input type="button" class="key-button key-text" value="Clear" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="0" @click=${this._handlePadClick} />
          <input type="button" class="key-button key-text" value="Enter" @click=${this._handlePadClick} />
        </div>
        <input type="button" id="cancel" value="Cancel" @click=${this._handlePadClick} />
      </div>
    `}static get styles(){return r`
      #container { 
        margin-top: 10px;
        background-color: var(--spcbridge-card-background-color);
	width: 100%;
        border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
        display: block;
        text-align: center;
      }
      #header  {
        position: relative;
        top: 20px;
        display: block;
        width: 100%;
        font-weight: 500;
        font-size: 1.4em;
        text-align: center;
      }
      #cancel {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 0;
        border: 0;
        outline: none;
        width: 100%;
        background-color: transparent;
        font-size: 1.0em;
	text-align: center;
	cursor: pointer;
      }
      #code {
        position: relative;
        background-color: transparent;
        color: var(--spcbridge-orange-color);
        margin: 0;
        padding-bottom: 0;
        padding-top: 20px;
        width: 100%;
        font-size: 3em;
        text-align: center;
        border: 0;
        outline: none;
        pointer-events: none;
      }
      .key-button {
        color: var(--spcbridge-primary-text-color);
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-orange-color);
        border-radius: 15%;
        background-color: transparent;
        font-size: 1.5em !important;
        text-align: center;
        width: 60px;
        height: 60px;
        margin: 8px 8px;
        padding: 0;
        outline: none;
	cursor: pointer;
      }
      .key-button:hover {
        box-shadow: var(--spcbridge-orange-color) 0 0 1px 1px;
      }
      .key-button:active {
        background-color: var(--spcbridge-orange-color);
        color: var(--spcbridge-primary-text-color);
      }
      .key-text {
        font-size: 1.0em !important;
      }
    `}}e([ht()],Ot.prototype,"action",void 0),e([pt()],Ot.prototype,"_input",void 0),customElements.define("spc-keypad",Ot);const Dt="spcbridge";return t.SpcCard=class extends at{constructor(){super(...arguments),this.spcEntities={},this.spcEvent="",this.countDownRemaining=0,this.actionInProgress={},this.armingInProgress={},this.openZones={},this.hideEvents=!1,this.hideAreasTab=!1,this.hideZonesTab=!1,this.hideOutputsTab=!1,this.hideDoorsTab=!1,this.countDownTimer=null,this.countDownStopTime=null,this.eventTimer=null,this.currentTab=1,this.panelId="",this.startX=0,this.startY=0,this.eventQueue=[]}static async getConfigElement(){return document.createElement("spcbridge-card-editor")}static async getStubConfig(t){let e="";return Object.values(t.devices).forEach((t=>{"SPC Bridge"==t.model&&(e=t.primary_config_entry)})),{spc_system:e,header:"SPC Alarm System"}}setConfig(t){if(!t)throw new Error("Invalid configuration!");if(!t.spc_system)throw new Error("Please define a SPC Bridge device!");this.config=Object.assign(Object.assign({},bt),t)}async getCardSize(){return 6}formatEventMessage(t){if(""==t)return{type:"",text:""};const e=JSON.parse(t),i=Number(e.ev_id),s=[],n=["ev_desc","area_name","zone_name","mg_name","door_name"];let o="";for(const t of n)e[t]&&s.push(e[t]);return(i>=1e3&&i<=1029||i>=1200&&i<=1223||3500==i||7001==i||7010==i||7012==i)&&(o="alarm"),{type:o,text:s.join(" - ")}}startEventDisplay(){this.spcEvent=this.formatEventMessage(this.dequeueEvent()).text,this.eventTimer=window.setInterval((()=>{const t=this.dequeueEvent();""==this.spcEvent&&""==t?(clearInterval(this.eventTimer),this.eventTimer=null):this.spcEvent=this.formatEventMessage(t).text}),2e3)}enqueueEvent(t){for(let t=0;t<this.eventQueue.length-10;t++)this.eventQueue.pop();-1===this.eventQueue.indexOf(t)&&(this.eventQueue.push(t),null===this.eventTimer&&this.startEventDisplay())}dequeueEvent(){const t=this.eventQueue.shift();return t||""}forEachSpcEntity(t,e){this.panelId&&this.spcEntities[this.panelId][t]&&Object.values(this.spcEntities[this.panelId][t]).forEach((t=>{Object.values(t).forEach((t=>{e(t)}))}))}createSpcEntities(){const t=this.hass.devices,e=this.hass.states,i=this.hass.entities,s={},n=this.config.spc_system;this.panelId="";for(const e in t){const i=t[e];if(i.primary_config_entry==n&&i.identifiers[0][0]==Dt&&(this.panelId=i.identifiers[0][1].split("-")[0],this.panelId.length>0))break}if(0!=this.panelId.length){for(const t in e){const n=e[t];if(i[n.entity_id]&&i[n.entity_id].platform===Dt&&n.attributes&&n.attributes.unique_id){const[t,e,i,o]=n.attributes.unique_id.split("-"),a=Number(i);t==this.panelId&&(s[t]||(s[t]={}),s[t][e]||(s[t][e]={}),s[t][e][a]||(s[t][e][i]={}),s[t][e][a]||(s[t][e][i][o]={}),s[t][e][a][o]=n.entity_id)}}this.spcEntities=s}}entityIdToSpcObject(t){return this.hass.states[t].attributes.unique_id.split("-")}spcObjectToEntityId(t,e,i){return this.panelId&&this.spcEntities[this.panelId]&&this.spcEntities[this.panelId][t]&&this.spcEntities[this.panelId][t][Number(e)]&&this.spcEntities[this.panelId][t][Number(e)][i]?this.spcEntities[this.panelId][t][Number(e)][i]:null}async firstUpdated(){this.createSpcEntities(),this.config.appearance.includes("hide_events")&&(this.hideEvents=!0),this.config.appearance.includes("hide_areas_tab")&&(this.hideAreasTab=!0),this.config.appearance.includes("hide_zones_tab")&&(this.hideZonesTab=!0),this.config.appearance.includes("hide_outputs_tab")&&(this.hideOutputsTab=!0),this.config.appearance.includes("hide_doors_tab")&&(this.hideDoorsTab=!0)}shouldUpdate(t){if(t.has("config"))return!0;if(t.has("actionInProgress"))return!0;if(t.has("armingInProgress"))return!0;if(t.has("countDownRemaining"))return!0;if(t.has("spcEvent"))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language||e.config.state!==this.hass.config.state)return!0;let i=!1;return this.forEachSpcEntity("panel",(t=>{e.states[t]!==this.hass.states[t]&&(i=!0,this.enqueueEvent(this.hass.states[t].attributes.spc_event))})),this.forEachSpcEntity("area",(t=>{e.states[t]!==this.hass.states[t]&&(i=!0)})),this.forEachSpcEntity("zone",(t=>{e.states[t]!==this.hass.states[t]&&(i=!0)})),this.forEachSpcEntity("output",(t=>{e.states[t]!==this.hass.states[t]&&(i=!0)})),this.forEachSpcEntity("door",(t=>{e.states[t]!==this.hass.states[t]&&(i=!0)})),!!i}handleActionEvent(t){this.actionInProgress=t.detail}handleKeypadEvent(t){null!=t.detail.action.code&&t.detail.action.code.length>0&&this.handleAction(t.detail.action),this.actionInProgress={}}handleCountdownEvent(t){null!=t.detail.action.code&&t.detail.action.code.length>0?this.handleAction(t.detail.action):this.stopCountDown()}async startCountDown(t){clearInterval(this.countDownTimer),this.countDownStopTime=new Date((new Date).getTime()+1e3*t),this.countDownRemaining=t,this.countDownTimer=window.setInterval((()=>{this.countDownRemaining=(this.countDownStopTime.getTime()-(new Date).getTime())/1e3,this.countDownRemaining<0&&this.stopCountDown()}),1e3)}stopCountDown(){clearInterval(this.countDownTimer),this.countDownTimer=null,this.countDownStopTime=null,this.countDownRemaining=0,this.armingInProgress={}}handleOpenZoneEvent(t,e){t==mt.Cancel&&(this.openZones={}),t==mt.ForceArm&&(e.action==mt.Arm&&(e.action=mt.ArmForced),e.action==mt.ArmA&&(e.action=mt.ArmAForced),e.action==mt.ArmB&&(e.action=mt.ArmBForced),this.openZones={},this.handleAction(e))}async requestOpenZones(t){const e=[],[i,s,n,o]=this.entityIdToSpcObject(t.entity),a="panel"==s?"get_panel_arm_status":"get_area_arm_status";try{const i=await this.hass.callWS({type:"call_service",domain:Dt,service:a,service_data:{device_id:this.hass.entities[t.entity].device_id,arm_mode:t.action},return_response:!0});if(i&&i.response&&i.response.area&&i.response.area){const t=i.response.area;Object.keys(t).forEach((i=>{t[i]&&t[i].length>0&&t[i].forEach((t=>{const[i,s]=t.split("_");if("zone"==i){const t=this.spcObjectToEntityId(i,s,"state");t&&e.push(t)}}))}))}}catch(t){return console.log("Failed to get area arm status",t),null}return{action:t,zones:e}}async handleAction(t){if(t.action==mt.Arm||t.action==mt.ArmA||t.action==mt.ArmB)try{if(this.openZones=await this.requestOpenZones(t),this.openZones.zones.length>0)return}catch(t){console.log("Failed to get area arm status",t)}try{await this.hass.callService(Dt,t.service,{device_id:this.hass.entities[t.entity].device_id,code:t.code,command:t.action}),t.action==mt.Arm||t.action==mt.ArmForced?this.armingInProgress=t:this.stopCountDown()}catch(t){console.log(t)}}tabIsActive(t){return t==this.currentTab}handleTabChangeEvent(t){if(!0===t.target.checked&&null!=t.target.id){const[e,i]=t.target.id.split("-");let s=Number(i);(s<1||s>5)&&(s=1),this.currentTab=s}}handleTouchStart(t){this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY}handleTouchMove(t){const e=t.touches[0].clientX-this.startX;if(t.touches[0].clientY,this.startY,Math.abs(e)>150){const i=t.touches[0].target.closest(".tab-content").id;if(i&&i.startsWith("tab-content-")){let t=Number(i.split("-")[2]);t=e<0?t+1:t-1,t>=1&&t<=5&&(this.currentTab=t,this.requestUpdate())}}}renderOpenZones(t){return this.hass&&this.openZones&&this.openZones.zones&&0!=this.openZones.zones.length?N`
      <div class="card-header">
        ${t}
      </div>
      <div id="open-zones-banner">
        <div id="open-zones-header">Open Zones</div>
        <input
          type="button"
          class="command-button"
          value="Cancel arming"
          @click=${()=>this.handleOpenZoneEvent(mt.Cancel,{})}
        />
        <input
          type="button"
          class="command-button"
          value="Force arming"
          @click=${()=>this.handleOpenZoneEvent(mt.ForceArm,this.openZones.action)}
        />
      </div>
      <div>
        ${this.openZones.zones.map((t=>N`
            <spc-sensor-item .hass=${this.hass} .entityId=${t} .disableActions=${!0} />
          `))}
      </div>
    `:N``}render(){if(!this.config||!this.hass||0==Object.keys(this.spcEntities).length)return N``;if(this.openZones&&this.openZones.zones&&this.openZones.zones.length>0)return this.renderOpenZones(this.config.header);if(0!=Object.keys(this.actionInProgress).length)return N`
        <div class="card-header">
          ${this.config.header}
        </div>
        ${this.hideEvents?N``:N`
            <div class="page-banner">
              ${this.spcEvent}
            </div>
            `}
        <div class="view">
          <div id="keypad-view" class="view">
            <spc-keypad .action=${this.actionInProgress} @keypad-event="${this.handleKeypadEvent}" />
          </div>
        </div>
      `;if(0!=Object.keys(this.armingInProgress).length){const t=this.armingInProgress.entity,e=this.hass.states[t].attributes.mode,i=this.hass.states[this.armingInProgress.entity].attributes.exittime;if(e!=vt.FULL_SET)return null==this.countDownTimer&&this.startCountDown(i),N`
          <div class="card-header">
            ${this.config.header}
          </div>
          ${this.hideEvents?N``:N`
              <div class="page-banner">
                ${this.spcEvent}
              </div>
              `}
          <div class="view">
            <spc-countdown
              id="counter"
              .remaining=${this.countDownRemaining}
              .delay=${i}
              .action=${this.armingInProgress}
              @countdown-event="${this.handleCountdownEvent}"
            />
          </div>
        `}this.stopCountDown();const t=this.spcEntities[this.panelId].panel[1].arm_mode;return N`
      <div class="card-header">
        ${this.config.header}
      </div>
      ${this.hideEvents?N``:N`
          <div class="page-banner">
            ${this.spcEvent}
          </div>
          `}
      <div class="view">
        <div class="tabs" @change="${this.handleTabChangeEvent}">
          <input type="radio" class="tab-radio" name="tab-group" id="tab-1" .checked=${this.tabIsActive(1)} />

	${this.hideAreasTab&&this.hideZonesTab&&this.hideOutputsTab&&this.hideDoorsTab?N`
            <label for="tab-1" class="tab-label" hidden></label>
	    `:N`
            <label for="tab-1" class="tab-label">System</label>
	    `}
          <div
            id="tab-content-1"
            class="tab-content"
            @touchstart="${this.handleTouchStart}"
            @touchmove="${this.handleTouchMove}"
          >
            <spc-arm-panel
              .hass=${this.hass}
              .layout=${"single"}
              .panelType=${"panel"}
              .entityId=${t}
              @action-event="${this.handleActionEvent}"
            />
          </div>


	${this.hideAreasTab?"":N`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-2" .checked=${this.tabIsActive(2)} />
            <label for="tab-2" class="tab-label">Areas</label>
            <div
              id="tab-content-2"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId].area).map((t=>{const e=t.arm_mode;return N`
                  <div>
                    <spc-arm-panel
                      .hass=${this.hass}
                      .layout=${"list"}
                      .panelType=${"area"}
                      .entityId=${e}
                      @action-event="${this.handleActionEvent}"
                    />
                  </div>
                `}))}
            </div>
	    `}

	${this.hideZonesTab?"":N`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-3" .checked=${this.tabIsActive(3)} />
            <label for="tab-3" class="tab-label">Zones</label>
            <div
              id="tab-content-3"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId].zone).map((t=>{const e=t.state;return N`
                  <spc-sensor-item .hass=${this.hass} .entityId=${e} @action-event="${this.handleActionEvent}" />
                `}))}
            </div>
	    `}

	${this.hideOutputsTab||null==this.spcEntities[this.panelId].output?"":N`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-4" .checked=${this.tabIsActive(4)} />
            <label for="tab-4" class="tab-label">Outputs</label>
            <div
              id="tab-content-4"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId].output).map((t=>{const e=t.state;return N`
                  <spc-output-item .hass=${this.hass} .entityId=${e} @action-event="${this.handleActionEvent}" />
                `}))}
            </div>
	    `}

	${this.hideDoorsTab||null==this.spcEntities[this.panelId].door?"":N`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-5" .checked=${this.tabIsActive(5)} />
            <label for="tab-5" class="tab-label">Doors</label>
            <div
              id="tab-content-5"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId].door).map((t=>{const e=t.mode;return N`
                  <spc-door-item .hass=${this.hass} .entityId=${e} @action-event="${this.handleActionEvent}" />
                `}))}
            </div>
	    `}
        </div>
      </div>
    `}static get styles(){return r`
      :host {
	--spcbridge-card-background-color: var(--card-background-color);
	--spcbridge-card-border-color: rgba(0, 0, 0, 0.12);
        --spcbridge-primary-color: var(--primary-color);
	--spcbridge-primary-text-color: var(--primary-text-color);
	--spcbridge-secondary-background-color: var(--secondary-background-color);
	--spcbridge-orange-color: #ff9800;
	--spcbridge-green-color: #4caf50;
	--spcbridge-red-color: #ff0000;
	--spcbridge-grey-color: #bdbdbd;
      }

      .tabs {
        display: flex;
        flex-wrap: wrap;
        min-width: 300px;
        max-width: 390px;
        font-family: Roboto, Arial, sans-serif;
      }
      .tab-label {
        padding: 10px 7px;
        cursor: pointer;
      }
      .tab-radio {
        display: none;
      }
      .tab-content {
        order: 1;
        width: 100%;
        padding-right: 10px;
        height: calc(100vh - 120px);
        max-height: 800px;
        overflow: auto;
        line-height: 1.5;
        font-size: 0.9em;
        display: none;
      }
      .tab-radio:checked + .tab-label {
        font-weight: bold;
        color: var(--spcbridge-primary-color);
        border-bottom: 2px solid var(--spcbridge-primary-color);
      }
      .tab-radio:checked + .tab-label + .tab-content {
        display: initial;
      }
      .view {
        min-width: 300px;
        max-width: 390px;
      }
      #open-zones-banner {
        width: 100%;
        height: 20px;
        display: flex;
        align-content: space-between;
        flex-flow: column wrap;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      #open-zones-header {
        font-size: 1.4em;
        font-weight: 500;
      }
      .command-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        background-color: transparent;
        font-size: 1.1em;
        font-weight: 500;
        cursor: pointer;
      }
      .command-button:hover {
        filter: brightness(85%);
      }
      .card-header {
        position: relative;
        top: 0px;
        left: 0px;
        display: block;
        width: 100%;
	padding-top: 0.3em;
	padding-bottom: 0.3em;
        font-size: 2.0em;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0px;
      }
      .page-banner {
        position: relative;
        top: 0px;
        left: 0px;
        display: block;
        width: 100%;
        height: 1.3em;
        font-size: 0.9em;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0px;
      }
    `}},e([ht({attribute:!1})],t.SpcCard.prototype,"hass",void 0),e([pt()],t.SpcCard.prototype,"config",void 0),e([pt()],t.SpcCard.prototype,"spcEntities",void 0),e([pt()],t.SpcCard.prototype,"spcEvent",void 0),e([pt()],t.SpcCard.prototype,"countDownRemaining",void 0),e([pt()],t.SpcCard.prototype,"actionInProgress",void 0),e([pt()],t.SpcCard.prototype,"armingInProgress",void 0),e([pt()],t.SpcCard.prototype,"openZones",void 0),e([pt()],t.SpcCard.prototype,"hideEvents",void 0),e([pt()],t.SpcCard.prototype,"hideAreasTab",void 0),e([pt()],t.SpcCard.prototype,"hideZonesTab",void 0),e([pt()],t.SpcCard.prototype,"hideOutputsTab",void 0),e([pt()],t.SpcCard.prototype,"hideDoorsTab",void 0),e([ut({passive:!0})],t.SpcCard.prototype,"handleTouchStart",null),e([ut({passive:!0})],t.SpcCard.prototype,"handleTouchMove",null),t.SpcCard=e([ct("spcbridge-card")],t.SpcCard),window.customCards=window.customCards||[],window.customCards.push({type:"spcbridge-card",name:"spcbridge-card",description:"Card for operating Vanderbilt SPC through Lovelace.",preview:!0}),console.info(`%c  VANDERBILT SPCBRIDGE CARD  \n%c  Version: ${"v0.5.0".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),t}({});
