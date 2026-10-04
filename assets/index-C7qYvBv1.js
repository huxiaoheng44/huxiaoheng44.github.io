var _p=Object.defineProperty;var zp=(u,d,r)=>d in u?_p(u,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[d]=r;var re=(u,d,r)=>zp(u,typeof d!="symbol"?d+"":d,r);(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const D of p)if(D.type==="childList")for(const z of D.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&o(z)}).observe(document,{childList:!0,subtree:!0});function r(p){const D={};return p.integrity&&(D.integrity=p.integrity),p.referrerPolicy&&(D.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?D.credentials="include":p.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function o(p){if(p.ep)return;p.ep=!0;const D=r(p);fetch(p.href,D)}})();function DA(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Bo={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oA;function Op(){if(oA)return mi;oA=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function r(o,p,D){var z=null;if(D!==void 0&&(z=""+D),p.key!==void 0&&(z=""+p.key),"key"in p){D={};for(var C in p)C!=="key"&&(D[C]=p[C])}else D=p;return p=D.ref,{$$typeof:u,type:o,key:z,ref:p!==void 0?p:null,props:D}}return mi.Fragment=d,mi.jsx=r,mi.jsxs=r,mi}var rA;function Rp(){return rA||(rA=1,Bo.exports=Op()),Bo.exports}var h=Rp(),_o={exports:{}},et={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dA;function xp(){if(dA)return et;dA=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),V=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),nt=Symbol.iterator;function K(m){return m===null||typeof m!="object"?null:(m=nt&&m[nt]||m["@@iterator"],typeof m=="function"?m:null)}var pt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},at=Object.assign,vt={};function F(m,B,k){this.props=m,this.context=B,this.refs=vt,this.updater=k||pt}F.prototype.isReactComponent={},F.prototype.setState=function(m,B){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,B,"setState")},F.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Ft(){}Ft.prototype=F.prototype;function jt(m,B,k){this.props=m,this.context=B,this.refs=vt,this.updater=k||pt}var Kt=jt.prototype=new Ft;Kt.constructor=jt,at(Kt,F.prototype),Kt.isPureReactComponent=!0;var bt=Array.isArray;function tt(){}var rt={H:null,A:null,T:null,S:null},Zt=Object.prototype.hasOwnProperty;function ae(m,B,k){var q=k.ref;return{$$typeof:u,type:m,key:B,ref:q!==void 0?q:null,props:k}}function Lt(m,B){return ae(m.type,B,m.props)}function Ht(m){return typeof m=="object"&&m!==null&&m.$$typeof===u}function zt(m){var B={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(k){return B[k]})}var Ut=/\/+/g;function St(m,B){return typeof m=="object"&&m!==null&&m.key!=null?zt(""+m.key):B.toString(36)}function I(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(tt,tt):(m.status="pending",m.then(function(B){m.status==="pending"&&(m.status="fulfilled",m.value=B)},function(B){m.status==="pending"&&(m.status="rejected",m.reason=B)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function X(m,B,k,q,x){var Y=typeof m;(Y==="undefined"||Y==="boolean")&&(m=null);var H=!1;if(m===null)H=!0;else switch(Y){case"bigint":case"string":case"number":H=!0;break;case"object":switch(m.$$typeof){case u:case d:H=!0;break;case R:return H=m._init,X(H(m._payload),B,k,q,x)}}if(H)return x=x(m),H=q===""?"."+St(m,0):q,bt(x)?(k="",H!=null&&(k=H.replace(Ut,"$&/")+"/"),X(x,B,k,"",function(ut){return ut})):x!=null&&(Ht(x)&&(x=Lt(x,k+(x.key==null||m&&m.key===x.key?"":(""+x.key).replace(Ut,"$&/")+"/")+H)),B.push(x)),1;H=0;var O=q===""?".":q+":";if(bt(m))for(var G=0;G<m.length;G++)q=m[G],Y=O+St(q,G),H+=X(q,B,k,Y,x);else if(G=K(m),typeof G=="function")for(m=G.call(m),G=0;!(q=m.next()).done;)q=q.value,Y=O+St(q,G++),H+=X(q,B,k,Y,x);else if(Y==="object"){if(typeof m.then=="function")return X(I(m),B,k,q,x);throw B=String(m),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return H}function P(m,B,k){if(m==null)return m;var q=[],x=0;return X(m,q,"","",function(Y){return B.call(k,Y,x++)}),q}function lt(m){if(m._status===-1){var B=m._result,k=B();k.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q,k.status===void 0&&(k.status="fulfilled",k.value=q))},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q,k.status===void 0&&(k.status="rejected",k.reason=q))}),m._status===-1&&(m._status=0,m._result=k)}if(m._status===1)return m._result.default;throw m._result}var ct=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function Wt(m){var B=rt.T,k={};k.types=B!==null?B.types:null,rt.T=k;try{var q=m(),x=rt.S;x!==null&&x(k,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(tt,ct)}catch(Y){ct(Y)}finally{B!==null&&k.types!==null&&(B.types=k.types),rt.T=B}}function De(m){var B=rt.T;if(B!==null){var k=B.types;k===null?B.types=[m]:k.indexOf(m)===-1&&k.push(m)}else Wt(De.bind(null,m))}var he={map:P,forEach:function(m,B,k){P(m,function(){B.apply(this,arguments)},k)},count:function(m){var B=0;return P(m,function(){B++}),B},toArray:function(m){return P(m,function(B){return B})||[]},only:function(m){if(!Ht(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return et.Activity=E,et.Children=he,et.Component=F,et.Fragment=r,et.Profiler=p,et.PureComponent=jt,et.StrictMode=o,et.Suspense=N,et.ViewTransition=_,et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rt,et.__COMPILER_RUNTIME={__proto__:null,c:function(m){return rt.H.useMemoCache(m)}},et.addTransitionType=De,et.cache=function(m){return function(){return m.apply(null,arguments)}},et.cacheSignal=function(){return null},et.cloneElement=function(m,B,k){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var q=at({},m.props),x=m.key;if(B!=null)for(Y in B.key!==void 0&&(x=""+B.key),B)!Zt.call(B,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&B.ref===void 0||(q[Y]=B[Y]);var Y=arguments.length-2;if(Y===1)q.children=k;else if(1<Y){for(var H=Array(Y),O=0;O<Y;O++)H[O]=arguments[O+2];q.children=H}return ae(m.type,x,q)},et.createContext=function(m){return m={$$typeof:z,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:D,_context:m},m},et.createElement=function(m,B,k){var q,x={},Y=null;if(B!=null)for(q in B.key!==void 0&&(Y=""+B.key),B)Zt.call(B,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(x[q]=B[q]);var H=arguments.length-2;if(H===1)x.children=k;else if(1<H){for(var O=Array(H),G=0;G<H;G++)O[G]=arguments[G+2];x.children=O}if(m&&m.defaultProps)for(q in H=m.defaultProps,H)x[q]===void 0&&(x[q]=H[q]);return ae(m,Y,x)},et.createRef=function(){return{current:null}},et.forwardRef=function(m){return{$$typeof:C,render:m}},et.isValidElement=Ht,et.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:lt}},et.memo=function(m,B){return{$$typeof:V,type:m,compare:B===void 0?null:B}},et.startTransition=Wt,et.unstable_useCacheRefresh=function(){return rt.H.useCacheRefresh()},et.use=function(m){return rt.H.use(m)},et.useActionState=function(m,B,k){return rt.H.useActionState(m,B,k)},et.useCallback=function(m,B){return rt.H.useCallback(m,B)},et.useContext=function(m){return rt.H.useContext(m)},et.useDebugValue=function(){},et.useDeferredValue=function(m,B){return rt.H.useDeferredValue(m,B)},et.useEffect=function(m,B){return rt.H.useEffect(m,B)},et.useEffectEvent=function(m){return rt.H.useEffectEvent(m)},et.useId=function(){return rt.H.useId()},et.useImperativeHandle=function(m,B,k){return rt.H.useImperativeHandle(m,B,k)},et.useInsertionEffect=function(m,B){return rt.H.useInsertionEffect(m,B)},et.useLayoutEffect=function(m,B){return rt.H.useLayoutEffect(m,B)},et.useMemo=function(m,B){return rt.H.useMemo(m,B)},et.useOptimistic=function(m,B){return rt.H.useOptimistic(m,B)},et.useReducer=function(m,B,k){return rt.H.useReducer(m,B,k)},et.useRef=function(m){return rt.H.useRef(m)},et.useState=function(m){return rt.H.useState(m)},et.useSyncExternalStore=function(m,B,k){return rt.H.useSyncExternalStore(m,B,k)},et.useTransition=function(){return rt.H.useTransition()},et.version="19.3.0",et}var fA;function Go(){return fA||(fA=1,_o.exports=xp()),_o.exports}var Q=Go();const Np=DA(Q);var zo={exports:{}},gi={},Oo={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hA;function Ip(){return hA||(hA=1,(function(u){function d(I,X){var P=I.length;I.push(X);t:for(;0<P;){var lt=P-1>>>1,ct=I[lt];if(0<p(ct,X))I[lt]=X,I[P]=ct,P=lt;else break t}}function r(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var X=I[0],P=I.pop();if(P!==X){I[0]=P;t:for(var lt=0,ct=I.length,Wt=ct>>>1;lt<Wt;){var De=2*(lt+1)-1,he=I[De],m=De+1,B=I[m];if(0>p(he,P))m<ct&&0>p(B,he)?(I[lt]=B,I[m]=P,lt=m):(I[lt]=he,I[De]=P,lt=De);else if(m<ct&&0>p(B,P))I[lt]=B,I[m]=P,lt=m;else break t}}return X}function p(I,X){var P=I.sortIndex-X.sortIndex;return P!==0?P:I.id-X.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;u.unstable_now=function(){return D.now()}}else{var z=Date,C=z.now();u.unstable_now=function(){return z.now()-C}}var N=[],V=[],R=1,E=null,_=3,nt=!1,K=!1,pt=!1,at=!1,vt=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,Ft=typeof setImmediate<"u"?setImmediate:null;function jt(I){for(var X=r(V);X!==null;){if(X.callback===null)o(V);else if(X.startTime<=I)o(V),X.sortIndex=X.expirationTime,d(N,X);else break;X=r(V)}}function Kt(I){if(pt=!1,jt(I),!K)if(r(N)!==null)K=!0,bt||(bt=!0,Ht());else{var X=r(V);X!==null&&St(Kt,X.startTime-I)}}var bt=!1,tt=-1,rt=5,Zt=-1;function ae(){return at?!0:!(u.unstable_now()-Zt<rt)}function Lt(){if(at=!1,bt){var I=u.unstable_now();Zt=I;var X=!0;try{t:{K=!1,pt&&(pt=!1,F(tt),tt=-1),nt=!0;var P=_;try{e:{for(jt(I),E=r(N);E!==null&&!(E.expirationTime>I&&ae());){var lt=E.callback;if(typeof lt=="function"){E.callback=null,_=E.priorityLevel;var ct=lt(E.expirationTime<=I);if(I=u.unstable_now(),typeof ct=="function"){E.callback=ct,jt(I),X=!0;break e}E===r(N)&&o(N),jt(I)}else o(N);E=r(N)}if(E!==null)X=!0;else{var Wt=r(V);Wt!==null&&St(Kt,Wt.startTime-I),X=!1}}break t}finally{E=null,_=P,nt=!1}X=void 0}}finally{X?Ht():bt=!1}}}var Ht;if(typeof Ft=="function")Ht=function(){Ft(Lt)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Ut=zt.port2;zt.port1.onmessage=Lt,Ht=function(){Ut.postMessage(null)}}else Ht=function(){vt(Lt,0)};function St(I,X){tt=vt(function(){I(u.unstable_now())},X)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(I){I.callback=null},u.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<I?Math.floor(1e3/I):5},u.unstable_getCurrentPriorityLevel=function(){return _},u.unstable_next=function(I){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var P=_;_=X;try{return I()}finally{_=P}},u.unstable_requestPaint=function(){at=!0},u.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=_;_=I;try{return X()}finally{_=P}},u.unstable_scheduleCallback=function(I,X,P){var lt=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?lt+P:lt):P=lt,I){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=P+ct,I={id:R++,callback:X,priorityLevel:I,startTime:P,expirationTime:ct,sortIndex:-1},P>lt?(I.sortIndex=P,d(V,I),r(N)===null&&I===r(V)&&(pt?(F(tt),tt=-1):pt=!0,St(Kt,P-lt))):(I.sortIndex=ct,d(N,I),K||nt||(K=!0,bt||(bt=!0,Ht()))),I},u.unstable_shouldYield=ae,u.unstable_wrapCallback=function(I){var X=_;return function(){var P=_;_=X;try{return I.apply(this,arguments)}finally{_=P}}}})(Ro)),Ro}var AA;function jp(){return AA||(AA=1,Oo.exports=Ip()),Oo.exports}var xo={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mA;function Gp(){if(mA)return de;mA=1;var u=Go();function d(R){var E="https://react.dev/errors/"+R;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)E+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+R+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(d(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},p=Symbol.for("react.portal"),D=Symbol.for("react.recoverable"),z=Symbol.for("react.optimistic_key");function C(R,E,_){var nt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:nt==null?null:nt===z?z:""+nt,children:R,containerInfo:E,implementation:_}}var N=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(R,E){if(R==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,de.browser=function(R){return{$$typeof:D,_reason:R}},de.createPortal=function(R,E){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(d(299));return C(R,E,null,_)},de.flushSync=function(R){var E=N.T,_=o.p;try{if(N.T=null,o.p=2,R)return R()}finally{N.T=E,o.p=_,o.d.f()}},de.preconnect=function(R,E){typeof R=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,o.d.C(R,E))},de.prefetchDNS=function(R){typeof R=="string"&&o.d.D(R)},de.preinit=function(R,E){if(typeof R=="string"&&E&&typeof E.as=="string"){var _=E.as,nt=V(_,E.crossOrigin),K=typeof E.integrity=="string"?E.integrity:void 0,pt=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;_==="style"?o.d.S(R,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:nt,integrity:K,fetchPriority:pt}):_==="script"&&o.d.X(R,{crossOrigin:nt,integrity:K,fetchPriority:pt,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},de.preinitModule=function(R,E){if(typeof R=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var _=V(E.as,E.crossOrigin);o.d.M(R,{crossOrigin:_,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0})}}else E==null&&o.d.M(R)},de.preload=function(R,E){if(typeof R=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var _=E.as,nt=V(_,E.crossOrigin);o.d.L(R,_,{crossOrigin:nt,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},de.preloadModule=function(R,E){if(typeof R=="string")if(E){var _=V(E.as,E.crossOrigin);o.d.m(R,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:_,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0})}else o.d.m(R)},de.requestFormReset=function(R){o.d.r(R)},de.unstable_batchedUpdates=function(R,E){return R(E)},de.useFormState=function(R,E,_){return N.H.useFormState(R,E,_)},de.useFormStatus=function(){return N.H.useHostTransitionStatus()},de.version="19.3.0",de}var gA;function Qp(){if(gA)return xo.exports;gA=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),xo.exports=Gp(),xo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pA;function Yp(){if(pA)return gi;pA=1;var u=jp(),d=Go(),r=Qp();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){for(var e=t,n=e;n&&!n.alternate;)e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function z(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function C(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N(t){if(D(t)!==t)throw Error(o(188))}function V(t){var e=t.alternate;if(!e){if(e=D(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return N(l),t;if(i===a)return N(l),e;i=i.sibling}throw Error(o(188))}if(n.return!==a.return)n=l,a=i;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,a=i;break}if(c===a){s=!0,a=l,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,a=l;break}if(c===a){s=!0,a=i,n=l;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function R(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=R(t),e!==null)return e;t=t.sibling}return null}function E(t,e,n,a,l,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,a,l,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&E(t.child,e,n,a,l,i))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function nt(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function K(t){var e=[null,null],n=_(t);return n===null||pt(e,t,n.child,{foundSelf:!1}),e}function pt(t,e,n,a){for(;n!==null;){if(n===e)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&pt(t,e,n.child,a))return!0;n=n.sibling}return!1}function at(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(o(559))}}var vt=null,F=null;function Ft(t,e,n){return t===n?!0:t===e?(vt=t,!0):!1}function jt(t,e,n){return t===n?(F=t,!1):t===e?(F!==null&&(vt=t),!0):!1}function Kt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function bt(t,e,n){for(var a=0,l=t;l;l=n(l))a++;l=0;for(var i=e;i;i=n(i))l++;for(;0<a-l;)t=n(t),a--;for(;0<l-a;)e=n(e),l--;for(;a--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var tt=Object.assign,rt=Symbol.for("react.element"),Zt=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Ht=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),Ut=Symbol.for("react.consumer"),St=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Wt=Symbol.for("react.activity"),De=Symbol.for("react.legacy_hidden"),he=Symbol.for("react.memo_cache_sentinel"),m=Symbol.for("react.view_transition"),B=Symbol.for("react.recoverable"),k=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var x=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===x?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lt:return"Fragment";case zt:return"Profiler";case Ht:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case Wt:return"Activity";case m:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case ae:return"Portal";case St:return t.displayName||"Context";case Ut:return(t._context.displayName||"Context")+".Consumer";case I:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:Y(t.type)||"Memo";case ct:e=t._payload,t=t._init;try{return Y(t(e))}catch{}}return null}var H=Array.isArray,O=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},Ot=[],Rt=-1;function Bt(t){return{current:t}}function J(t){0>Rt||(t.current=Ot[Rt],Ot[Rt]=null,Rt--)}function $(t,e){Rt++,Ot[Rt]=t.current,t.current=e}var Et=Bt(null),Se=Bt(null),ve=Bt(null),za=Bt(null);function Ye(t,e){switch($(ve,e),$(Se,t),$(Et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?vh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=vh(e),t=bh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Et),$(Et,t)}function An(){J(Et),J(Se),J(ve)}function On(t){var e=t.memoizedState;e!==null&&(pl._currentValue=e.memoizedState,$(za,t)),e=Et.current;var n=bh(e,t.type);e!==n&&($(Se,t),$(Et,n))}function Ze(t){Se.current===t&&(J(Et),J(Se)),za.current===t&&(J(za),pl._currentValue=ut)}var mn,Qo;function Rn(t){if(mn===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mn=e&&e[1]||"",Qo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mn+t+Qo}var Zs=!1;function Ps(t,e){if(!t||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(j){var g=j}Reflect.construct(t,[],M)}else{try{M.call()}catch(j){g=j}M=!1;try{var w=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),M=!0,new t}finally{M&&(w!==void 0?Object.defineProperty(t.prototype,"props",w):delete t.prototype.props)}}}else{try{throw Error()}catch(j){g=j}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(j){if(j&&g&&typeof j.stack=="string")return[j.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],c=i[1];if(s&&c){var f=s.split(`
`),b=c.split(`
`);for(l=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;if(a===f.length||l===b.length)for(a=f.length-1,l=b.length-1;1<=a&&0<=l&&f[a]!==b[l];)l--;for(;1<=a&&0<=l;a--,l--)if(f[a]!==b[l]){if(a!==1||l!==1)do if(a--,l--,0>l||f[a]!==b[l]){var T=`
`+f[a].replace(" at new "," at ");return t.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",t.displayName)),T}while(1<=a&&0<=l);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Rn(n):""}function xA(t,e){switch(t.tag){case 26:case 27:case 5:return Rn(t.type);case 16:return Rn("Lazy");case 13:return t.child!==e&&e!==null?Rn("Suspense Fallback"):Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 15:return Ps(t.type,!1);case 11:return Ps(t.type.render,!1);case 1:return Ps(t.type,!0);case 31:return Rn("Activity");case 30:return Rn("ViewTransition");default:return""}}function Yo(t){try{var e="",n=null;do e+=xA(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fs=Object.prototype.hasOwnProperty,Ws=u.unstable_scheduleCallback,$s=u.unstable_cancelCallback,NA=u.unstable_shouldYield,IA=u.unstable_requestPaint,Me=u.unstable_now,jA=u.unstable_getCurrentPriorityLevel,Lo=u.unstable_ImmediatePriority,Ho=u.unstable_UserBlockingPriority,vi=u.unstable_NormalPriority,GA=u.unstable_LowPriority,Uo=u.unstable_IdlePriority,QA=u.log,YA=u.unstable_setDisableYieldValue,El=null,Be=null;function xn(t){if(typeof QA=="function"&&YA(t),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(El,t)}catch{}}var _e=Math.clz32?Math.clz32:UA,LA=Math.log,HA=Math.LN2;function UA(t){return t>>>=0,t===0?32:31-(LA(t)/HA|0)|0}var bi=256,yi=262144,wi=4194304;function sa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ei(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?l=sa(a):(s&=c,s!==0?l=sa(s):n||(n=c&~t,n!==0&&(l=sa(n))))):(c=a&~i,c!==0?l=sa(c):s!==0?l=sa(s):n||(n=a&~t,n!==0&&(l=sa(n)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:l}function Tl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Vo(t,e){(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-_e(n),l=1<<a;e|=t[a],n&=~l}return e}function VA(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xo(){var t=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),t}function tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function XA(t,e,n,a,l,i){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,b=t.hiddenUpdates;for(n=s&~n;0<n;){var T=31-_e(n),M=1<<T;c[T]=0,f[T]=-1;var g=b[T];if(g!==null)for(b[T]=null,T=0;T<g.length;T++){var w=g[T];w!==null&&(w.lane&=-536870913)}n&=~M}a!==0&&ko(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function ko(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-_e(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function qo(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-_e(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Jo(t,e){var n=e&-e;return n=(n&42)!==0?1:ec(n),(n&(t.suspendedLanes|e))!==0?0:n}function ec(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ko(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:nA(t.type))}function Zo(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var gn=Math.random().toString(36).slice(2),le="__reactFiber$"+gn,be="__reactProps$"+gn,Oa="__reactContainer$"+gn,Po="__reactEvents$"+gn,kA="__reactListeners$"+gn,qA="__reactHandles$"+gn,Fo="__reactResources$"+gn,Dl="__reactMarker$"+gn,Ti="__reactLoad$"+gn;function Ci(t){delete t[le],delete t[be],delete t[kA],delete t[qA]}function ca(t){var e;if(e=t[le])return e;for(var n=t.parentNode;n;){if(e=n[Oa]||n[le]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jh(t);t!==null;){if(n=t[le])return n;t=jh(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){if(t=t[le]||t[Oa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Sl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function xa(t){var e=t[Fo];return e||(e=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[Dl]=!0}function Wo(t){t[Ti]=void 0}var $o=new Set,tr={};function ua(t,e){Na(t,e),Na(t+"Capture",e)}function Na(t,e){for(tr[t]=e,t=0;t<e.length;t++)$o.add(e[t])}var JA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),er={},nr={};function KA(t){return Fs.call(nr,t)?!0:Fs.call(er,t)?!1:JA.test(t)?nr[t]=!0:(er[t]=!0,!1)}var gt=!1;function ar(){var t=gt;return gt=!1,t}function Di(t,e,n){if(KA(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Si(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function pn(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,a)}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZA(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ac(t){if(!t._valueTracker){var e=lr(t)?"checked":"value";t._valueTracker=ZA(t,e,""+t[e])}}function ir(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=lr(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}var PA=/[\n"\\]/g;function Le(t){return t.replace(PA,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lc(t,e,n,a,l,i,s,c){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?ic(t,ze(t.value)):ic(t,ze(e)):n!=null?ic(t,ze(n)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ze(c):t.removeAttribute("name")}function sr(t,e,n,a,l,i,s,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){ac(t);return}n=n!=null?""+ze(n):"",e=e!=null?""+ze(e):n,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ac(t)}function ic(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ia(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+ze(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function cr(t,e,n){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ze(n):""}function ur(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(o(92));if(H(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=ze(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),ac(t)}function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var FA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function or(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||FA.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function rr(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="",gt=!0);for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&(or(t,l,a),gt=!0)}else for(var i in e)e.hasOwnProperty(i)&&or(t,i,e[i])}function sc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$A=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(t){return $A.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nn(){}var cc=null;function uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ga=null,Qa=null;function dr(t){var e=Ra(t);if(e&&(t=e.stateNode)){var n=t[be]||null;t:switch(t=e.stateNode,e.type){case"input":if(lc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Le(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[be]||null;if(!l)throw Error(o(90));lc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&ir(a)}break t;case"textarea":cr(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ia(t,!!n.multiple,e,!1)}}}var oc=!1;function fr(t,e,n){if(oc)return t(e,n);oc=!0;try{var a=t(e);return a}finally{if(oc=!1,(Ga!==null||Qa!==null)&&(Ms(),Ga&&(e=Ga,t=Qa,Qa=Ga=null,dr(e),t)))for(e=0;e<t.length;e++)dr(t[e])}}function Ml(t,e){var n=t.stateNode;if(n===null)return null;var a=n[be]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=!1;if(vn)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{rc=!1}var Nn=null,dc=null,Bi=null;function hr(){if(Bi)return Bi;var t,e=dc,n=e.length,a,l="value"in Nn?Nn.value:Nn.textContent,i=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===l[i-a];a++);return Bi=l.slice(t,1<a?1-a:void 0)}function _i(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zi(){return!0}function Ar(){return!1}function Ae(t){function e(n,a,l,i,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zi:Ar,this.isPropagationStopped=Ar,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),e}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=Ae(In),_l=tt({},In,{view:0,detail:0}),tm=Ae(_l),fc,hc,zl,Ri=tt({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zl&&(zl&&t.type==="mousemove"?(fc=t.screenX-zl.screenX,hc=t.screenY-zl.screenY):hc=fc=0,zl=t),fc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),mr=Ae(Ri),em=tt({},Ri,{dataTransfer:0}),nm=Ae(em),am=tt({},_l,{relatedTarget:0}),Ac=Ae(am),lm=tt({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),im=Ae(lm),sm=tt({},In,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cm=Ae(sm),um=tt({},In,{data:0}),gr=Ae(um),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dm[t])?!!e[t]:!1}function mc(){return fm}var hm=tt({},_l,{key:function(t){if(t.key){var e=om[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_i(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(t){return t.type==="keypress"?_i(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_i(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Am=Ae(hm),mm=tt({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pr=Ae(mm),gm=tt({},In,{submitter:0}),pm=Ae(gm),vm=tt({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),bm=Ae(vm),ym=tt({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),wm=Ae(ym),Em=tt({},Ri,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tm=Ae(Em),Cm=tt({},In,{newState:0,oldState:0,source:0}),Dm=Ae(Cm),Sm=[9,13,27,32],gc=vn&&"CompositionEvent"in window,Ol=null;vn&&"documentMode"in document&&(Ol=document.documentMode);var Mm=vn&&"TextEvent"in window&&!Ol,vr=vn&&(!gc||Ol&&8<Ol&&11>=Ol),br=" ",yr=!1;function wr(t,e){switch(t){case"keyup":return Sm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Er(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ya=!1;function Bm(t,e){switch(t){case"compositionend":return Er(e);case"keypress":return e.which!==32?null:(yr=!0,br);case"textInput":return t=e.data,t===br&&yr?null:t;default:return null}}function _m(t,e){if(Ya)return t==="compositionend"||!gc&&wr(t,e)?(t=hr(),Bi=dc=Nn=null,Ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vr&&e.locale!=="ko"?null:e.data;default:return null}}var zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zm[t.type]:e==="textarea"}function Cr(t,e,n,a){Ga?Qa?Qa.push(a):Qa=[a]:Ga=a,e=xs(e,"onChange"),0<e.length&&(n=new Oi("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Rl=null,xl=null;function Om(t){fh(t,0)}function xi(t){var e=Sl(t);if(ir(e))return t}function Dr(t,e){if(t==="change")return e}var Sr=!1;if(vn){var pc;if(vn){var vc="oninput"in document;if(!vc){var Mr=document.createElement("div");Mr.setAttribute("oninput","return;"),vc=typeof Mr.oninput=="function"}pc=vc}else pc=!1;Sr=pc&&(!document.documentMode||9<document.documentMode)}function Br(){Rl&&(Rl.detachEvent("onpropertychange",_r),xl=Rl=null)}function _r(t){if(t.propertyName==="value"&&xi(xl)){var e=[];Cr(e,xl,t,uc(t)),fr(Om,e)}}function Rm(t,e,n){t==="focusin"?(Br(),Rl=e,xl=n,Rl.attachEvent("onpropertychange",_r)):t==="focusout"&&Br()}function xm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xi(xl)}function Nm(t,e){if(t==="click")return xi(e)}function Im(t,e){if(t==="input"||t==="change")return xi(e)}function jm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:jm;function Nl(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Fs.call(e,l)||!Oe(t[l],e[l]))return!1}return!0}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Or(t,e){var n=zr(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=zr(n)}}function Rr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=bc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Gm=vn&&"documentMode"in document&&11>=document.documentMode,La=null,wc=null,Il=null,Ec=!1;function Nr(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ec||La==null||La!==bc(a)||(a=La,"selectionStart"in a&&yc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Il&&Nl(Il,a)||(Il=a,a=xs(wc,"onSelect"),0<a.length&&(e=new Oi("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=La)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ha={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},Tc={},Ir={};vn&&(Ir=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function ra(t){if(Tc[t])return Tc[t];if(!Ha[t])return t;var e=Ha[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ir)return Tc[t]=e[n];return t}var jr=ra("animationend"),Gr=ra("animationiteration"),Qr=ra("animationstart"),Qm=ra("transitionrun"),Ym=ra("transitionstart"),Lm=ra("transitioncancel"),Yr=ra("transitionend"),Lr=new Map,Cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cc.push("scrollEnd");function Pe(t,e){Lr.set(t,e),ua(e,[t])}var Hm=0;function bn(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=tn.identifierPrefix;var n=Hm++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function Hr(t){if(t==null||typeof t=="string")return t;var e=null,n=cl;if(n!==null)for(var a=0;a<n.length;a++){var l=t[n[a]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function yn(t,e){return t=Hr(t),e=Hr(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ni=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},He=[],Ua=0,Dc=0;function Ii(){for(var t=Ua,e=Dc=Ua=0;e<t;){var n=He[e];He[e++]=null;var a=He[e];He[e++]=null;var l=He[e];He[e++]=null;var i=He[e];if(He[e++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}i!==0&&Ur(n,l,i)}}function ji(t,e,n,a){He[Ua++]=t,He[Ua++]=e,He[Ua++]=n,He[Ua++]=a,Dc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Sc(t,e,n,a){return ji(t,e,n,a),Gi(t)}function da(t,e){return ji(t,null,null,e),Gi(t)}function Ur(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=t.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-_e(n),t=i.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),i):null}function Gi(t){if(50<ai)throw ai=0,Ss=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Va={};function Um(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ye(t,e,n,a){return new Um(t,e,n,a)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wn(t,e){var n=t.alternate;return n===null?(n=ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Vr(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Qi(t,e,n,a,l,i){var s=0;if(a=t,typeof a=="function")Mc(a)&&(s=1);else if(typeof a=="string")s=gp(t,n,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(a){case Wt:return t=ye(31,n,e,l),t.elementType=Wt,t.lanes=i,t;case Lt:return fa(n.children,l,i,e);case Ht:s=8,l|=24;break;case zt:return t=ye(12,n,e,l|2),t.elementType=zt,t.lanes=i,t;case X:return t=ye(13,n,e,l),t.elementType=X,t.lanes=i,t;case P:return t=ye(19,n,e,l),t.elementType=P,t.lanes=i,t;case De:case m:return t=l|32,t=ye(30,n,e,t),t.elementType=m,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case St:s=10;break t;case Ut:s=9;break t;case I:s=11;break t;case lt:s=14;break t;case ct:s=16,a=null;break t}s=29,n=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=ye(s,n,e,l),e.elementType=t,e.type=a,e.lanes=i,e}function fa(t,e,n,a){return t=ye(7,t,a,e),t.lanes=n,t}function Bc(t,e,n){return t=ye(6,t,null,e),t.lanes=n,t}function Xr(t){var e=ye(18,null,null,0);return e.stateNode=t,e}function _c(t,e,n){return e=ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var kr=new WeakMap;function Ue(t,e){if(typeof t=="object"&&t!==null){var n=kr.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Yo(e)},kr.set(t,e),e)}return{value:t,source:e,stack:Yo(e)}}var Xa=[],ka=0,Yi=null,jl=0,Ve=[],Xe=0,jn=null,an=1,ln="";function En(t,e){Xa[ka++]=jl,Xa[ka++]=Yi,Yi=t,jl=e}function qr(t,e,n){Ve[Xe++]=an,Ve[Xe++]=ln,Ve[Xe++]=jn,jn=t;var a=an;t=ln;var l=32-_e(a)-1;a&=~(1<<l),n+=1;var i=32-_e(e)+l;if(30<i){var s=l-l%5;i=(a&(1<<s)-1).toString(32),a>>=s,l-=s,an=1<<32-_e(e)+l|n<<l|a,ln=i+t}else an=1<<i|n<<l|a,ln=t}function Li(t){t.return!==null&&(En(t,1),qr(t,1,0))}function zc(t){for(;t===Yi;)Yi=Xa[--ka],Xa[ka]=null,jl=Xa[--ka],Xa[ka]=null;for(;t===jn;)jn=Ve[--Xe],Ve[Xe]=null,ln=Ve[--Xe],Ve[Xe]=null,an=Ve[--Xe],Ve[Xe]=null}function Jr(t,e){Ve[Xe++]=an,Ve[Xe++]=ln,Ve[Xe++]=jn,an=e.id,ln=e.overflow,jn=t}var te=null,xt=null,ot=!1,Gn=null,ke=!1,Oc=Error(o(519));function Qn(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(Ue(e,t)),Oc}function Kr(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[le]=t,e[be]=a,n){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(n=0;n<ii.length;n++)ft(ii[n],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),sr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),ur(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||gh(e.textContent,n)?(a.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),a.onScroll!=null&&ft("scroll",e),a.onScrollEnd!=null&&ft("scrollend",e),a.onClick!=null&&(e.onclick=nn),e=!0):e=!1,e||Qn(t,!0)}function Hi(t){for(te=t.return;te;)switch(te.tag){case 5:case 31:case 13:ke=!1;return;case 27:case 3:ke=!0;return;default:te=te.return}}function qa(t){if(t!==te)return!1;if(!ot)return Hi(t),ot=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||co(t.type,t.memoizedProps)),n=!n),n&&xt&&Qn(t),Hi(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));xt=Ih(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));xt=Ih(t)}else e===27?(e=xt,ta(t.type)?(t=po,po=null,xt=t):xt=e):xt=te?Je(t.stateNode.nextSibling):null;return!0}function ha(){xt=te=null,ot=!1}function Rc(){var t=Gn;return t!==null&&(Te===null?Te=t:Te.push.apply(Te,t),Gn=null),t}function Gl(t){Gn===null?Gn=[t]:Gn.push(t)}var xc=Bt(null),Aa=null,Tn=null;function Yn(t,e,n){$(xc,e._currentValue),e._currentValue=n}function Cn(t){t._currentValue=xc.current,J(xc)}function Ui(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Nc(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=l;for(var f=0;f<e.length;f++)if(c.context===e[f]){i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ui(i.return,n,t),a||(s=null);break t}i=c.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(o(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Ui(s,n,t),s=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ui(l.return,n,t),s=l.child,s=s!==null?s.sibling:null):s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ma(t,e,n,a){t=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var c=l.type;Oe(l.pendingProps.value,s.value)||(t!==null?t.push(c):t=[c])}}else if(l===za.current){if(s=l.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(pl):t=[pl])}l=l.return}return t!==null&&Nc(e,t,n,a),e.flags|=262144,t!==null}function Vi(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ga(t){Aa=t,Tn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ie(t){return Zr(Aa,t)}function Xi(t,e){return Aa===null&&ga(t),Zr(t,e)}function Zr(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Tn===null){if(t===null)throw Error(o(308));Tn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Tn=Tn.next=e;return n}var Vm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Xm=u.unstable_scheduleCallback,km=u.unstable_NormalPriority,Xt={$$typeof:St,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ic(){return{controller:new Vm,data:new Map,refCount:0}}function Ql(t){t.refCount--,t.refCount===0&&Xm(km,function(){t.controller.abort()})}function Pr(t,e){if((t.pendingLanes&4194048)!==0){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var a=e[t];n.indexOf(a)===-1&&n.push(a)}}}var Yl=null;function qm(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Ll=null,jc=0,pa=0,Ja=null;function Jm(t,e){if(Ll===null){var n=Ll=[];jc=0,pa=Wu(),Ja={status:"pending",value:void 0,then:function(a){n.push(a)}}}return jc++,e.then(Fr,Fr),e}function Fr(){if(--jc===0&&(Yl=null,Ll!==null)){Ja!==null&&(Ja.status="fulfilled");var t=Ll;Ll=null,pa=0,Ja=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Km(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Wr=O.S;O.S=function(t,e){if(kf=Me(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Jm(t,e),Yl!==null)for(var n=dl;n!==null;)Pr(n,Yl),n=n.next;if(n=t.types,n!==null){for(var a=dl;a!==null;)Pr(a,n),a=a.next;if(pa!==0){a=Yl,a===null&&(a=Yl=[]);for(var l=0;l<n.length;l++){var i=n[l];a.indexOf(i)===-1&&a.push(i)}}}Wr!==null&&Wr(t,e)};var va=Bt(null);function Gc(){var t=va.current;return t!==null?t:_t.pooledCache}function ki(t,e){e===null?$(va,va.current):$(va,e.pool)}function $r(){var t=Gc();return t===null?null:{parent:Xt._currentValue,pool:t}}var Ka=Error(o(460)),Qc=Error(o(474)),qi=Error(o(542)),Ji={then:function(){}};function td(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ed(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(nn,nn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ad(t),t===void 0&&!("reason"in e)?Error(o(600)):t;default:if(typeof e.status=="string")e.then(nn,nn);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ad(t),t}throw ya=e,Ka}}function ba(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ya=n,Ka):n}}var ya=null;function nd(){if(ya===null)throw Error(o(459));var t=ya;return ya=null,t}function ad(t){if(t===Ka||t===qi)throw Error(o(483))}var Za=null,Hl=0;function Ki(t){var e=Hl;return Hl+=1,Za===null&&(Za=[]),ed(Za,t,e)}function Ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Zi(t,e){throw e.$$typeof===rt?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ld(t){function e(v,A){if(t){var y=v.deletions;y===null?(v.deletions=[A],v.flags|=16):y.push(A)}}function n(v,A){if(!t)return null;for(;A!==null;)e(v,A),A=A.sibling;return null}function a(v){for(var A=new Map;v!==null;)v.key===null?A.set(v.index,v):A.set(v.key,v),v=v.sibling;return A}function l(v,A){return v=wn(v,A),v.index=0,v.sibling=null,v}function i(v,A,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<A?(v.flags|=2,A):y):(v.flags|=134217730,A)):(v.flags|=1048576,A)}function s(v){return t&&v.alternate===null&&(v.flags|=134217730),v}function c(v,A,y,S){return A===null||A.tag!==6?(A=Bc(y,v.mode,S),A.return=v,A):(A=l(A,y),A.return=v,A)}function f(v,A,y,S){var L=y.type;return L===Lt?(v=T(v,A,y.props.children,S,y.key),Ln(v,y),v):A!==null&&(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ct&&ba(L)===A.type)?(A=l(A,y.props),Ln(A,y),A.return=v,A):(A=Qi(y.type,y.key,y.props,null,v.mode,S),Ln(A,y),A.return=v,A)}function b(v,A,y,S){return A===null||A.tag!==4||A.stateNode.containerInfo!==y.containerInfo||A.stateNode.implementation!==y.implementation?(A=_c(y,v.mode,S),A.return=v,A):(A=l(A,y.children||[]),A.return=v,A)}function T(v,A,y,S,L){return A===null||A.tag!==7?(A=fa(y,v.mode,S,L),A.return=v,A):(A=l(A,y),A.return=v,A)}function M(v,A,y){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Bc(""+A,v.mode,y),A.return=v,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Zt:return y=Qi(A.type,A.key,A.props,null,v.mode,y),Ln(y,A),y.return=v,y;case ae:return A=_c(A,v.mode,y),A.return=v,A;case ct:return A=ba(A),M(v,A,y)}if(H(A)||q(A))return A=fa(A,v.mode,y,null),A.return=v,A;if(typeof A.then=="function")return M(v,Ki(A),y);if(A.$$typeof===St)return M(v,Xi(v,A),y);Zi(v,A)}return null}function g(v,A,y,S){var L=A!==null?A.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return L!==null?null:c(v,A,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zt:return y.key===L?f(v,A,y,S):null;case ae:return y.key===L?b(v,A,y,S):null;case ct:return y=ba(y),g(v,A,y,S)}if(H(y)||q(y))return L!==null?null:T(v,A,y,S,null);if(typeof y.then=="function")return g(v,A,Ki(y),S);if(y.$$typeof===St)return g(v,A,Xi(v,y),S);Zi(v,y)}return null}function w(v,A,y,S,L){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return v=v.get(y)||null,c(A,v,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zt:return v=v.get(S.key===null?y:S.key)||null,f(A,v,S,L);case ae:return v=v.get(S.key===null?y:S.key)||null,b(A,v,S,L);case ct:return S=ba(S),w(v,A,y,S,L)}if(H(S)||q(S))return v=v.get(y)||null,T(A,v,S,L,null);if(typeof S.then=="function")return w(v,A,y,Ki(S),L);if(S.$$typeof===St)return w(v,A,y,Xi(A,S),L);Zi(A,S)}return null}function j(v,A,y,S){for(var L=null,At=null,Z=A,W=A=0,Jt=null;Z!==null&&W<y.length;W++){Z.index>W?(Jt=Z,Z=null):Jt=Z.sibling;var mt=g(v,Z,y[W],S);if(mt===null){Z===null&&(Z=Jt);break}t&&Z&&mt.alternate===null&&e(v,Z),A=i(mt,A,W),At===null?L=mt:At.sibling=mt,At=mt,Z=Jt}if(W===y.length)return n(v,Z),ot&&En(v,W),L;if(Z===null){for(;W<y.length;W++)Z=M(v,y[W],S),Z!==null&&(A=i(Z,A,W),At===null?L=Z:At.sibling=Z,At=Z);return ot&&En(v,W),L}for(Z=a(Z);W<y.length;W++)Jt=w(Z,v,W,y[W],S),Jt!==null&&(t&&(mt=Jt.alternate,mt!==null&&Z.delete(mt.key===null?W:mt.key)),A=i(Jt,A,W),At===null?L=Jt:At.sibling=Jt,At=Jt);return t&&Z.forEach(function(ia){return e(v,ia)}),ot&&En(v,W),L}function U(v,A,y,S){if(y==null)throw Error(o(151));for(var L=null,At=null,Z=A,W=A=0,Jt=null,mt=y.next();Z!==null&&!mt.done;W++,mt=y.next()){Z.index>W?(Jt=Z,Z=null):Jt=Z.sibling;var ia=g(v,Z,mt.value,S);if(ia===null){Z===null&&(Z=Jt);break}t&&Z&&ia.alternate===null&&e(v,Z),A=i(ia,A,W),At===null?L=ia:At.sibling=ia,At=ia,Z=Jt}if(mt.done)return n(v,Z),ot&&En(v,W),L;if(Z===null){for(;!mt.done;W++,mt=y.next())mt=M(v,mt.value,S),mt!==null&&(A=i(mt,A,W),At===null?L=mt:At.sibling=mt,At=mt);return ot&&En(v,W),L}for(Z=a(Z);!mt.done;W++,mt=y.next())mt=w(Z,v,W,mt.value,S),mt!==null&&(t&&(Jt=mt.alternate,Jt!==null&&Z.delete(Jt.key===null?W:Jt.key)),A=i(mt,A,W),At===null?L=mt:At.sibling=mt,At=mt);return t&&Z.forEach(function(Bp){return e(v,Bp)}),ot&&En(v,W),L}function st(v,A,y,S){if(typeof y=="object"&&y!==null&&y.type===Lt&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Zt:t:{for(var L=y.key;A!==null;){if(A.key===L){if(L=y.type,L===Lt){if(A.tag===7){n(v,A.sibling),S=l(A,y.props.children),Ln(S,y),S.return=v,v=S;break t}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ct&&ba(L)===A.type){n(v,A.sibling),S=l(A,y.props),Ln(S,y),S.return=v,v=S;break t}n(v,A);break}else e(v,A);A=A.sibling}y.type===Lt?(S=fa(y.props.children,v.mode,S,y.key),Ln(S,y),S.return=v,v=S):(S=Qi(y.type,y.key,y.props,null,v.mode,S),Ln(S,y),S.return=v,v=S)}return s(v);case ae:t:{for(L=y.key;A!==null;){if(A.key===L)if(A.tag===4&&A.stateNode.containerInfo===y.containerInfo&&A.stateNode.implementation===y.implementation){n(v,A.sibling),S=l(A,y.children||[]),S.return=v,v=S;break t}else{n(v,A);break}else e(v,A);A=A.sibling}S=_c(y,v.mode,S),S.return=v,v=S}return s(v);case ct:return y=ba(y),st(v,A,y,S)}if(H(y))return j(v,A,y,S);if(q(y)){if(L=q(y),typeof L!="function")throw Error(o(150));return y=L.call(y),U(v,A,y,S)}if(typeof y.then=="function")return st(v,A,Ki(y),S);if(y.$$typeof===St)return st(v,A,Xi(v,y),S);Zi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,A!==null&&A.tag===6?(n(v,A.sibling),S=l(A,y),S.return=v,v=S):(n(v,A),S=Bc(y,v.mode,S),S.return=v,v=S),s(v)):n(v,A)}return function(v,A,y,S){try{Hl=0;var L=st(v,A,y,S);return Za=null,L}catch(Z){if(Z===Ka||Z===qi)throw Z;var At=ye(29,Z,null,v.mode);return At.lanes=S,At.return=v,At}finally{}}}var wa=ld(!0),id=ld(!1),Hn=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Un(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(yt&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=Gi(t),Ur(t,null,n),e}return ji(t,a,e,n),Gi(t)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,qo(t,n)}}function Hc(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=e:i=i.next=e}else l=i=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Uc=!1;function Vl(){if(Uc){var t=Ja;if(t!==null)throw t}}function Xl(t,e,n,a){Uc=!1;var l=t.updateQueue;Hn=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var f=c,b=f.next;f.next=null,s===null?i=b:s.next=b,s=f;var T=t.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==s&&(c===null?T.firstBaseUpdate=b:c.next=b,T.lastBaseUpdate=f))}if(i!==null){var M=l.baseState;s=0,T=b=f=null,c=i;do{var g=c.lane&-536870913,w=g!==c.lane;if(w?(ht&g)===g:(a&g)===g){g!==0&&g===pa&&(Uc=!0),T!==null&&(T=T.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var j=t,U=c;g=e;var st=n;switch(U.tag){case 1:if(j=U.payload,typeof j=="function"){M=j.call(st,M,g);break t}M=j;break t;case 3:j.flags=j.flags&-65537|128;case 0:if(j=U.payload,g=typeof j=="function"?j.call(st,M,g):j,g==null)break t;M=tt({},M,g);break t;case 2:Hn=!0}}g=c.callback,g!==null&&(t.flags|=64,w&&(t.flags|=8192),w=l.callbacks,w===null?l.callbacks=[g]:w.push(g))}else w={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(b=T=w,f=M):T=T.next=w,s|=g;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;w=c,c=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);T===null&&(f=M),l.baseState=f,l.firstBaseUpdate=b,l.lastBaseUpdate=T,i===null&&(l.shared.lanes=0),Pn|=s,t.lanes=s,t.memoizedState=M}}function sd(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function cd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)sd(n[t],e)}var Xn=Bt(null),Pi=Bt(0);function ud(t,e){t=_n,$(Pi,t),$(Xn,e),_n=t|e.baseLanes}function Vc(){$(Pi,_n),$(Xn,Xn.current)}function Xc(){_n=Pi.current,J(Xn),J(Pi)}var se=Bt(null),fe=null;function kn(t){var e=t.alternate;$(ce,ce.current&1),$(se,t),fe===null&&(e===null||Xn.current!==null||e.memoizedState!==null)&&(fe=t)}function kc(t){$(ce,ce.current),$(se,t),fe===null&&(fe=t)}function od(t){t.tag===22?($(ce,ce.current),$(se,t),fe===null&&(fe=t)):qn()}function qn(){$(ce,ce.current),$(se,se.current)}function Re(t){J(se),fe===t&&(fe=null),J(ce)}var ce=Bt(0);function kl(t,e){$(se,se.current),$(ce,e)}function qc(t){J(ce),J(se),fe===t&&(fe=null)}function Fi(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||mo(n)||go(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dn=0,it=null,Mt=null,kt=null,Wi=!1,Pa=!1,Ea=!1,$i=0,ql=0,Fa=null,Zm=0;function Qt(){throw Error(o(321))}function Jc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Oe(t[n],e[n]))return!1;return!0}function Kc(t,e,n,a,l,i){return Dn=i,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?qd:Jd,Ea=!1,i=n(a,l),Ea=!1,Pa&&(i=dd(e,n,a,l)),rd(t),i}function rd(t){O.H=ss;var e=Mt!==null&&Mt.next!==null;if(Dn=0,kt=Mt=it=null,Wi=!1,ql=0,Fa=null,e)throw Error(o(300));t===null||qt||(t=t.dependencies,t!==null&&Vi(t)&&(qt=!0))}function dd(t,e,n,a){it=t;var l=0;do{if(Pa&&(Fa=null),ql=0,Pa=!1,25<=l)throw Error(o(301));if(l+=1,kt=Mt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=ag,i=e(n,a)}while(Pa);return i}function Pm(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?Jl(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(it.flags|=1024),e}function Zc(){var t=$i!==0;return $i=0,t}function Pc(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Fc(t){if(Wi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Wi=!1}Dn=0,kt=Mt=it=null,Pa=!1,ql=$i=0,Fa=null}function me(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?it.memoizedState=kt=t:kt=kt.next=t,kt}function Vt(){if(Mt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=kt===null?it.memoizedState:kt.next;if(e!==null)kt=e,Mt=t;else{if(t===null)throw it.alternate===null?Error(o(467)):Error(o(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},kt===null?it.memoizedState=kt=t:kt=kt.next=t}return kt}function ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(t){var e=ql;return ql+=1,Fa===null&&(Fa=[]),t=ed(Fa,t,e),e=it,(kt===null?e.memoizedState:kt.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?qd:Jd),t}function es(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jl(t);if(t.$$typeof===B)return;if(t.$$typeof===St)return ie(t)}throw Error(o(438,String(t)))}function Wc(t){var e=null,n=it.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=it.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ts(),it.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=he;return e.index++,n}function Sn(t,e){return typeof e=="function"?e(t):e}function ns(t){var e=Vt();return $c(e,Mt,t)}function $c(t,e,n){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}e.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var c=s=null,f=null,b=e,T=!1;do{var M=b.lane&-536870913;if(M!==b.lane?(ht&M)===M:(Dn&M)===M){var g=b.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),M===pa&&(T=!0);else if((Dn&g)===g){b=b.next,g===pa&&(T=!0);continue}else M={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=M,s=i):f=f.next=M,it.lanes|=g,Pn|=g;M=b.action,Ea&&n(i,M),i=b.hasEagerState?b.eagerState:n(i,M)}else g={lane:M,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=g,s=i):f=f.next=g,it.lanes|=M,Pn|=M;b=b.next}while(b!==null&&b!==e);if(f===null?s=i:f.next=c,!Oe(i,t.memoizedState)&&(qt=!0,T&&(n=Ja,n!==null)))throw n;t.memoizedState=i,t.baseState=s,t.baseQueue=f,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function tu(t){var e=Vt(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,i=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=t(i,s.action),s=s.next;while(s!==l);Oe(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,a]}function fd(t,e,n){var a=it,l=Vt(),i=ot;if(i){if(n===void 0)throw Error(o(407));n=n()}else n=e();var s=!Oe((Mt||l).memoizedState,n);if(s&&(l.memoizedState=n,qt=!0),l=l.queue,au(md.bind(null,a,l,t),[t]),t=l.getSnapshot!==e||s||kt!==null&&(kt.memoizedState.tag&1)!==0,Wa(t?9:8,{destroy:void 0},Ad.bind(null,a,l,n,e),null),t){if(a.flags|=2048,_t===null)throw Error(o(349));i||(Dn&127)!==0||hd(a,e,n)}return n}function hd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e=ts(),it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ad(t,e,n,a){e.value=n,e.getSnapshot=a,gd(e)&&pd(t)}function md(t,e,n){return n(function(){gd(e)&&pd(t)})}function gd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Oe(t,n)}catch{return!0}}function pd(t){var e=da(t,2);e!==null&&Ce(e,t,2)}function eu(t){var e=me();if(typeof t=="function"){var n=t;if(t=n(),Ea){xn(!0);try{n()}finally{xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:t},e}function vd(t,e,n,a){return t.baseState=n,$c(t,Mt,typeof a=="function"?a:Sn)}function Fm(t,e,n,a,l){if(is(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};O.T!==null?n(!0):i.isTransition=!1,a(i),n=e.pending,n===null?(i.next=e.pending=i,bd(e,i)):(i.next=n.next,e.pending=n.next=i)}}function bd(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var i=O.T,s={};s.types=i!==null?i.types:null,O.T=s;try{var c=n(l,a),f=O.S;f!==null&&f(s,c),yd(t,e,c)}catch(b){nu(t,e,b)}finally{i!==null&&s.types!==null&&(i.types=s.types),O.T=i}}else try{i=n(l,a),yd(t,e,i)}catch(b){nu(t,e,b)}}function yd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){wd(t,e,a)},function(a){return nu(t,e,a)}):wd(t,e,n)}function wd(t,e,n){e.status="fulfilled",e.value=n,Ed(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,bd(t,n)))}function nu(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Ed(e),e=e.next;while(e!==a)}t.action=null}function Ed(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Td(t,e){return e}function Cd(t,e){if(ot){var n=_t.formState;if(n!==null){t:{var a=it;if(ot){if(xt){e:{for(var l=xt,i=ke;l.nodeType!==8;){if(!i){l=null;break e}if(l=Je(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){xt=Je(l.nextSibling),a=l.data==="F!";break t}}Qn(a)}a=!1}a&&(e=n[0])}}return n=me(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Td,lastRenderedState:e},n.queue=a,n=Vd.bind(null,it,a),a.dispatch=n,a=eu(!1),i=uu.bind(null,it,!1,a.queue),a=me(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=Fm.bind(null,it,l,i,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function Dd(t){var e=Vt();return Sd(e,Mt,t)}function Sd(t,e,n){if(e=$c(t,e,Td)[0],t=ns(Sn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Jl(e)}catch(s){throw s===Ka?qi:s}else a=e;e=Vt();var l=e.queue,i=l.dispatch;return n!==e.memoizedState&&(it.flags|=2048,Wa(9,{destroy:void 0},Wm.bind(null,l,n),null)),[a,i,t]}function Wm(t,e){t.action=e}function Md(t){var e=Vt(),n=Mt;if(n!==null)return Sd(e,n,t);Vt(),e=e.memoizedState,n=Vt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Wa(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=it.updateQueue,e===null&&(e=ts(),it.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Bd(){return Vt().memoizedState}function as(t,e,n,a){var l=me();it.flags|=t,l.memoizedState=Wa(1|e,{destroy:void 0},n,a===void 0?null:a)}function ls(t,e,n,a){var l=Vt();a=a===void 0?null:a;var i=l.memoizedState.inst;Mt!==null&&a!==null&&Jc(a,Mt.memoizedState.deps)?l.memoizedState=Wa(e,i,n,a):(it.flags|=t,l.memoizedState=Wa(1|e,i,n,a))}function _d(t,e){as(8390656,8,t,e)}function au(t,e){ls(2048,8,t,e)}function $m(t){it.flags|=4;var e=it.updateQueue;if(e===null)e=ts(),it.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function zd(t){var e=Vt().memoizedState;return $m({ref:e,nextImpl:t}),function(){if((yt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Od(t,e){return ls(4,2,t,e)}function Rd(t,e){return ls(4,4,t,e)}function xd(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nd(t,e,n){n=n!=null?n.concat([t]):null,ls(4,4,xd.bind(null,e,t),n)}function lu(){}function Id(t,e){var n=Vt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Jc(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function jd(t,e){var n=Vt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Jc(e,a[1]))return a[0];if(a=t(),Ea){xn(!0);try{t()}finally{xn(!1)}}return n.memoizedState=[a,e],a}function iu(t,e,n){return n===void 0||(Dn&1073741824)!==0&&(ht&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Jf(),it.lanes|=t,Pn|=t,n)}function Gd(t,e,n,a){return Oe(n,e)?n:Xn.current!==null?(t=iu(t,n,a),Oe(t,e)||(qt=!0),t):(Dn&106)===0||(Dn&1073741824)!==0&&(ht&261930)===0?(qt=!0,t.memoizedState=n):(t=Jf(),it.lanes|=t,Pn|=t,e)}function Qd(t,e,n,a,l){var i=G.p;G.p=i!==0&&8>i?i:8;var s=O.T,c={};c.types=s!==null?s.types:null,O.T=c,uu(t,!1,e,n);try{var f=l(),b=O.S;if(b!==null&&b(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var T=Km(f,a);Kl(t,e,T,je(t))}else Kl(t,e,a,je(t))}catch(M){Kl(t,e,{then:function(){},status:"rejected",reason:M},je())}finally{G.p=i,s!==null&&c.types!==null&&(s.types=c.types),O.T=s}}function tg(){}function su(t,e,n,a){if(t.tag!==5)throw Error(o(476));var l=Yd(t).queue;Qd(t,l,e,ut,n===null?tg:function(){return Ld(t),n(a)})}function Yd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:ut},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ld(t){var e=Yd(t);e.next===null&&(e=t.alternate.memoizedState),Kl(t,e.next.queue,{},je())}function cu(){return ie(pl)}function Hd(){return Vt().memoizedState}function Ud(){return Vt().memoizedState}function eg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=je();t=Un(n);var a=Vn(e,t,n);a!==null&&(Ce(a,e,n),Ul(a,e,n)),e={cache:Ic()},t.payload=e;return}e=e.return}}function ng(t,e,n){var a=je();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},is(t)?Xd(e,n):(n=Sc(t,e,n,a),n!==null&&(Ce(n,t,a),kd(n,e,a)))}function Vd(t,e,n){var a=je();Kl(t,e,n,a)}function Kl(t,e,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(is(t))Xd(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,c=i(s,n);if(l.hasEagerState=!0,l.eagerState=c,Oe(c,s))return ji(t,e,l,0),_t===null&&Ii(),!1}catch{}finally{}if(n=Sc(t,e,l,a),n!==null)return Ce(n,t,a),kd(n,e,a),!0}return!1}function uu(t,e,n,a){if(a={lane:2,revertLane:Wu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},is(t)){if(e)throw Error(o(479))}else e=Sc(t,n,a,2),e!==null&&Ce(e,t,2)}function is(t){var e=t.alternate;return t===it||e!==null&&e===it}function Xd(t,e){Pa=Wi=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kd(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,qo(t,n)}}var ss={readContext:ie,use:es,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt,useEffectEvent:Qt},qd={readContext:ie,use:es,useCallback:function(t,e){return me().memoizedState=[t,e===void 0?null:e],t},useContext:ie,useEffect:_d,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,as(4194308,4,xd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return as(4194308,4,t,e)},useInsertionEffect:function(t,e){as(4,2,t,e)},useMemo:function(t,e){var n=me();e=e===void 0?null:e;var a=t();if(Ea){xn(!0);try{t()}finally{xn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=me();if(n!==void 0){var l=n(e);if(Ea){xn(!0);try{n(e)}finally{xn(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=ng.bind(null,it,t),[a.memoizedState,t]},useRef:function(t){var e=me();return t={current:t},e.memoizedState=t},useState:function(t){t=eu(t);var e=t.queue,n=Vd.bind(null,it,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:lu,useDeferredValue:function(t,e){var n=me();return iu(n,t,e)},useTransition:function(){var t=eu(!1);return t=Qd.bind(null,it,t.queue,!0,!1),me().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=it,l=me();if(ot){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),_t===null)throw Error(o(349));(ht&127)!==0||hd(a,e,n)}l.memoizedState=n;var i={value:n,getSnapshot:e};return l.queue=i,_d(md.bind(null,a,i,t),[t]),a.flags|=2048,Wa(9,{destroy:void 0},Ad.bind(null,a,i,n,e),null),n},useId:function(){var t=me(),e=_t.identifierPrefix;if(ot){var n=ln,a=an;n=(a&~(1<<32-_e(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=$i++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Zm++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:cu,useFormState:Cd,useActionState:Cd,useOptimistic:function(t){var e=me();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=uu.bind(null,it,!0,n),n.dispatch=e,[t,e]},useMemoCache:Wc,useCacheRefresh:function(){return me().memoizedState=eg.bind(null,it)},useEffectEvent:function(t){var e=me(),n={impl:t};return e.memoizedState=n,function(){if((yt&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Jd={readContext:ie,use:es,useCallback:Id,useContext:ie,useEffect:au,useImperativeHandle:Nd,useInsertionEffect:Od,useLayoutEffect:Rd,useMemo:jd,useReducer:ns,useRef:Bd,useState:function(){return ns(Sn)},useDebugValue:lu,useDeferredValue:function(t,e){var n=Vt();return Gd(n,Mt.memoizedState,t,e)},useTransition:function(){var t=ns(Sn)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Jl(t),e]},useSyncExternalStore:fd,useId:Hd,useHostTransitionStatus:cu,useFormState:Dd,useActionState:Dd,useOptimistic:function(t,e){var n=Vt();return vd(n,Mt,t,e)},useMemoCache:Wc,useCacheRefresh:Ud,useEffectEvent:zd},ag={readContext:ie,use:es,useCallback:Id,useContext:ie,useEffect:au,useImperativeHandle:Nd,useInsertionEffect:Od,useLayoutEffect:Rd,useMemo:jd,useReducer:tu,useRef:Bd,useState:function(){return tu(Sn)},useDebugValue:lu,useDeferredValue:function(t,e){var n=Vt();return Mt===null?iu(n,t,e):Gd(n,Mt.memoizedState,t,e)},useTransition:function(){var t=tu(Sn)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Jl(t),e]},useSyncExternalStore:fd,useId:Hd,useHostTransitionStatus:cu,useFormState:Md,useActionState:Md,useOptimistic:function(t,e){var n=Vt();return Mt!==null?vd(n,Mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:Ud,useEffectEvent:zd};function ou(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=je(),l=Un(a);l.payload=e,n!=null&&(l.callback=n),e=Vn(t,l,a),e!==null&&(Ce(e,t,a),Ul(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=je(),l=Un(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=Vn(t,l,a),e!==null&&(Ce(e,t,a),Ul(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),a=Un(n);a.tag=2,e!=null&&(a.callback=e),e=Vn(t,a,n),e!==null&&(Ce(e,t,n),Ul(e,t,n))}};function Kd(t,e,n,a,l,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!Nl(n,a)||!Nl(l,i):!0}function Zd(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function Ta(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=tt({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function Pd(t){Ni(t)}function Fd(t){console.error(t)}function Wd(t){Ni(t)}function cs(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function $d(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function du(t,e,n){return n=Un(n),n.tag=3,n.payload={element:null},n.callback=function(){cs(t,e)},n}function tf(t){return t=Un(t),t.tag=3,t}function ef(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){$d(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){$d(e,n,a),typeof l!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function lg(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&ma(e,n,l,!0),n=se.current,n!==null){switch(n.tag){case 31:case 13:case 19:return fe===null?Bs():n.alternate===null&&Yt===0&&(Yt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ji?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Zu(t,a,l)),!1;case 22:return n.flags|=65536,a===Ji?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Zu(t,a,l)),!1}throw Error(o(435,n.tag))}return Zu(t,a,l),Bs(),!1}if(ot)return e=se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Oc&&(t=Error(o(422),{cause:a}),Gl(Ue(t,n)))):(a!==Oc&&(e=Error(o(423),{cause:a}),Gl(Ue(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=Ue(a,n),l=du(t.stateNode,a,l),Hc(t,l),Yt!==4&&(Yt=2)),!1;var i=Error(o(520),{cause:a});if(i=Ue(i,n),ni===null?ni=[i]:ni.push(i),Yt!==4&&(Yt=2),e===null)return!0;a=Ue(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=du(n.stateNode,a,t),Hc(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Fn===null||!Fn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=tf(l),ef(l,t,n,a),Hc(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var fu=Error(o(461)),qt=!1;function Pt(t,e,n,a){e.child=t===null?id(e,null,n,a):wa(e,t.child,n,a)}function nf(t,e,n,a,l){n=n.render;var i=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return ga(e),a=Kc(t,e,n,s,i,l),c=Zc(),t!==null&&!qt?(Pc(t,e,l),Mn(t,e,l)):(ot&&c&&Li(e),e.flags|=1,Pt(t,e,a,l),e.child)}function af(t,e,n,a,l){if(t===null){var i=n.type;return typeof i=="function"&&!Mc(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,lf(t,e,i,a,l)):(t=Qi(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!yu(t,l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(s,a)&&t.ref===e.ref)return Mn(t,e,l)}return e.flags|=1,t=wn(i,a),t.ref=e.ref,t.return=e,e.child=t}function lf(t,e,n,a,l){if(t!==null){var i=t.memoizedProps;if(Nl(i,a)&&t.ref===e.ref)if(qt=!1,e.pendingProps=a=i,yu(t,l))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,Mn(t,e,l)}return hu(t,e,n,a,l)}function sf(t,e,n,a){var l=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,t!==null){for(a=e.child=t.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,e.child=null;return cf(t,e,i,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ki(e,i!==null?i.cachePool:null),i!==null?ud(e,i):Vc(),od(e);else return a=e.lanes=536870912,cf(t,e,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(ki(e,i.cachePool),ud(e,i),qn(),e.memoizedState=null):(t!==null&&ki(e,null),Vc(),qn());return Pt(t,e,l,n),e.child}function Zl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function cf(t,e,n,a,l){var i=Gc();return i=i===null?null:{parent:Xt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&ki(e,null),Vc(),od(e),t!==null&&ma(t,e,a,!0),e.childLanes=l,null}function us(t,e){return e=os({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function uf(t,e,n){return wa(e,t.child,null,n),t=us(e,e.pendingProps),t.flags|=2,Re(e),e.memoizedState=null,t}function ig(t,e,n){var a=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ot){if(a.mode==="hidden")return t=us(e,a),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Zl(null,t);if(kc(e),(t=xt)?(t=Nh(t,ke),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:jn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=Xr(t),n.return=e,e.child=n,te=e,xt=null)):t=null,t===null)throw Qn(e);return e.lanes=536870912,null}return us(e,a)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(kc(e),l)if(e.flags&256)e.flags&=-257,e=uf(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(qt||ma(t,e,n,!1),l=(n&t.childLanes)!==0,qt||l){if(Xn.current===null){if(a=_t,a!==null&&(s=Jo(a,n),s!==0&&s!==i.retryLane))throw i.retryLane=s,da(t,s),Ce(a,t,s),fu;Bs()}e=uf(t,e,n)}else t=i.treeContext,xt=Je(s.nextSibling),te=e,ot=!0,Gn=null,ke=!1,t!==null&&Jr(e,t),e=us(e,a),e.flags|=134221824;return e}return t=wn(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function $a(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hu(t,e,n,a,l){return ga(e),n=Kc(t,e,n,a,void 0,l),a=Zc(),t!==null&&!qt?(Pc(t,e,l),Mn(t,e,l)):(ot&&a&&Li(e),e.flags|=1,Pt(t,e,n,l),e.child)}function of(t,e,n,a,l,i){return ga(e),e.updateQueue=null,n=dd(e,a,n,l),rd(t),a=Zc(),t!==null&&!qt?(Pc(t,e,i),Mn(t,e,i)):(ot&&a&&Li(e),e.flags|=1,Pt(t,e,n,i),e.child)}function rf(t,e,n,a,l){if(ga(e),e.stateNode===null){var i=Va,s=n.contextType;typeof s=="object"&&s!==null&&(i=ie(s)),i=new n(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ru,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Yc(e),s=n.contextType,i.context=typeof s=="object"&&s!==null?ie(s):Va,i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ou(e,n,s,a),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ru.enqueueReplaceState(i,i.state,null),Xl(e,a,i,l),Vl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,f=Ta(n,c);i.props=f;var b=i.context,T=n.contextType;s=Va,typeof T=="object"&&T!==null&&(s=ie(T));var M=n.getDerivedStateFromProps;T=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||b!==s)&&Zd(e,i,a,s),Hn=!1;var g=e.memoizedState;i.state=g,Xl(e,a,i,l),Vl(),b=e.memoizedState,c||g!==b||Hn?(typeof M=="function"&&(ou(e,n,M,a),b=e.memoizedState),(f=Hn||Kd(e,n,f,a,g,b,s))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=b),i.props=a,i.state=b,i.context=s,a=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Lc(t,e),s=e.memoizedProps,T=Ta(n,s),i.props=T,M=e.pendingProps,g=i.context,b=n.contextType,f=Va,typeof b=="object"&&b!==null&&(f=ie(b)),c=n.getDerivedStateFromProps,(b=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==M||g!==f)&&Zd(e,i,a,f),Hn=!1,g=e.memoizedState,i.state=g,Xl(e,a,i,l),Vl();var w=e.memoizedState;s!==M||g!==w||Hn||t!==null&&t.dependencies!==null&&Vi(t.dependencies)?(typeof c=="function"&&(ou(e,n,c,a),w=e.memoizedState),(T=Hn||Kd(e,n,T,a,g,w,f)||t!==null&&t.dependencies!==null&&Vi(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=w),i.props=a,i.state=w,i.context=f,a=T):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,$a(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=wa(e,t.child,null,l),e.child=wa(e,null,n,l)):Pt(t,e,n,l),e.memoizedState=i.state,t=e.child):t=Mn(t,e,l),t}function df(t,e,n,a){return ha(),e.flags|=256,Pt(t,e,n,a),e.child}var Au={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mu(t){return{baseLanes:t,cachePool:$r()}}function gu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ie),t}function ff(t,e,n){var a=e.pendingProps,l=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(ce.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(ot){if(l?kn(e):qn(),(t=xt)?(t=Nh(t,ke),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:jn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=Xr(t),n.return=e,e.child=n,te=e,xt=null)):t=null,t===null)throw Qn(e);return go(t)?e.lanes=32:e.lanes=536870912,null}return i=a.children,a=a.fallback,l?(qn(),l=e.mode,i=os({mode:"hidden",children:i},l),a=fa(a,l,n,null),i.return=e,a.return=e,i.sibling=a,e.child=i,a=e.child,a.memoizedState=mu(n),a.childLanes=gu(t,s,n),e.memoizedState=Au,Zl(null,a)):(kn(e),pu(e,i))}var c=t.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return sg(t,e,i,s,a,f,c,n)}return l?(qn(),l=a.fallback,i=e.mode,c=t.child,f=c.sibling,a=wn(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,f!==null?l=wn(f,l):(l=fa(l,i,n,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,Zl(null,a),a=e.child,l=t.child.memoizedState,l===null?l=mu(n):(i=l.cachePool,i!==null?(c=Xt._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=$r(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=gu(t,s,n),e.memoizedState=Au,Zl(t.child,a)):(kn(e),n=t.child,t=n.sibling,n=wn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function pu(t,e){return e=os({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function os(t,e){return t=ye(22,t,null,e),t.lanes=0,t}function rs(t,e,n){return wa(e,t.child,null,n),t=pu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sg(t,e,n,a,l,i,s,c){if(n)return e.flags&256?(kn(e),e.flags&=-257,rs(t,e,c)):e.memoizedState!==null?(qn(),e.child=t.child,e.flags|=128,null):(qn(),i=l.fallback,s=e.mode,l=os({mode:"visible",children:l.children},s),i=fa(i,s,c,null),i.flags|=2,l.return=e,i.return=e,l.sibling=i,e.child=l,wa(e,t.child,null,c),l=e.child,l.memoizedState=mu(c),l.childLanes=gu(t,a,c),e.memoizedState=Au,Zl(null,l));if(kn(e),go(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(l=Error(o(419)),l.stack="",l.digest=a,Gl({value:l,source:null,stack:null})),rs(t,e,c)}if(qt||ma(t,e,c,!1),a=(c&t.childLanes)!==0,qt||a){if(Xn.current!==null)return rs(t,e,c);if(a=_t,a!==null&&(l=Jo(a,c),l!==0&&l!==s.retryLane))throw s.retryLane=l,da(t,l),Ce(a,t,l),fu;return mo(i)||Bs(),rs(t,e,c)}return mo(i)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,xt=Je(i.nextSibling),te=e,ot=!0,Gn=null,ke=!1,t!==null&&Jr(e,t),e=pu(e,l.children),e.flags|=134221824,e)}function hf(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ui(t.return,e,n)}function Af(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&Fi(n)===null&&(e=t),t=t.sibling}return e}function ds(t,e,n,a,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=l,s.treeForkCount=i)}function vu(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function bu(t,e,n){var a=e.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var s=ce.current;if(e.flags&128)return kl(e,s),null;var c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,kl(e,s),l==="backwards"&&t!==null?(vu(t),Pt(t,e,a,n),vu(t)):Pt(t,e,a,n),a=ot?jl:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hf(t,n,e);else if(t.tag===19)hf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":n=Af(e.child),n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null,vu(e)),ds(e,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Fi(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}ds(e,!0,n,null,i,a);break;case"together":ds(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:n=Af(e.child),n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),ds(e,!1,l,n,i,a)}return e.child}function mf(t,e,n){var a=e.pendingProps;return Yn(e,e.type,a.value),Pt(t,e,a.children,n),e.child}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(ma(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Vi(t)))}function cg(t,e,n){switch(e.tag){case 3:Ye(e,e.stateNode.containerInfo),Yn(e,Xt,t.memoizedState.cache),ha();break;case 27:case 5:On(e);break;case 4:Ye(e,e.stateNode.containerInfo);break;case 10:Yn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,kc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return kn(e),e.flags|=128,null;a=ma(t,e,n,!1);var l=e.child.childLanes;return a||(n&l)!==0?ff(t,e,n):(kn(e),t=Mn(t,e,n),t!==null?t.sibling:null)}kn(e);break;case 19:if(e.flags&128)return bu(t,e,n);if(l=(t.flags&128)!==0,a=(n&e.childLanes)!==0,a||(ma(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return bu(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),kl(e,ce.current),a)break;return null;case 22:return e.lanes=0,sf(t,e,n,e.pendingProps);case 24:Yn(e,Xt,t.memoizedState.cache)}return Mn(t,e,n)}function gf(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!yu(t,n)&&(e.flags&128)===0)return qt=!1,cg(t,e,n);qt=(t.flags&131072)!==0}else qt=!1,ot&&(e.flags&1048576)!==0&&qr(e,jl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ba(e.elementType),e.type=t,typeof t=="function")Mc(t)?(a=Ta(t,a),e.tag=1,e=rf(null,e,t,a,n)):(e.tag=0,e=hu(null,e,t,a,n));else{if(t!=null){var l=t.$$typeof;if(l===I){e.tag=11,e=nf(null,e,t,a,n);break t}else if(l===lt){e.tag=14,e=af(null,e,t,a,n);break t}else if(l===St){e.tag=10,e.type=t,e=mf(null,e,n);break t}}throw e=Y(t)||t,Error(o(306,e,""))}}return e;case 0:return hu(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=Ta(a,e.pendingProps),rf(t,e,a,l,n);case 3:t:{if(Ye(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var i=e.memoizedState;l=i.element,Lc(t,e),Xl(e,a,null,n);var s=e.memoizedState;if(a=s.cache,Yn(e,Xt,a),a!==i.cache&&Nc(e,[Xt],n,!0),Vl(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=df(t,e,a,n);break t}else if(a!==l){l=Ue(Error(o(424)),e),Gl(l),e=df(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(xt=Je(t.firstChild),te=e,ot=!0,Gn=null,ke=!0,n=id(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ha(),a===l){e=Mn(t,e,n);break t}Pt(t,e,a,n)}e=e.child}return e;case 26:return $a(t,e),t===null?(n=Hh(e.type,null,e.pendingProps,null))?e.memoizedState=n:ot||(e.stateNode=yh(e.type,e.pendingProps,ve.current,e)):e.memoizedState=Hh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return On(e),t===null&&ot&&(a=e.stateNode=Gh(e.type,e.pendingProps,ve.current),te=e,ke=!0,l=xt,ta(e.type)?(po=l,xt=Je(a.firstChild)):xt=l),Pt(t,e,e.pendingProps.children,n),$a(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ot&&((l=a=xt)&&(a=ep(a,e.type,e.pendingProps,ke),a!==null?(e.stateNode=a,te=e,xt=Je(a.firstChild),ke=!1,l=!0):l=!1),l||Qn(e)),On(e),l=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,co(l,i)?a=null:s!==null&&co(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=Kc(t,e,Pm,null,null,n),pl._currentValue=l),$a(t,e),Pt(t,e,a,n),e.child;case 6:return t===null&&ot&&((t=n=xt)&&(n=np(n,e.pendingProps,ke),n!==null?(e.stateNode=n,te=e,xt=null,t=!0):t=!1),t||Qn(e)),null;case 13:return ff(t,e,n);case 4:return Ye(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=wa(e,null,a,n):Pt(t,e,a,n),e.child;case 11:return nf(t,e,e.type,e.pendingProps,n);case 7:return a=e.pendingProps,$a(t,e),Pt(t,e,a,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:return mf(t,e,n);case 9:return l=e.type._context,a=e.pendingProps.children,ga(e),l=ie(l),a=a(l),e.flags|=1,Pt(t,e,a,n),e.child;case 14:return af(t,e,e.type,e.pendingProps,n);case 15:return lf(t,e,e.type,e.pendingProps,n);case 19:return bu(t,e,n);case 31:return ig(t,e,n);case 22:return sf(t,e,n,e.pendingProps);case 24:return ga(e),a=ie(Xt),t===null?(l=Gc(),l===null&&(l=_t,i=Ic(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),e.memoizedState={parent:a,cache:l},Yc(e),Yn(e,Xt,l)):((t.lanes&n)!==0&&(Lc(t,e),Xl(e,null,null,n),Vl()),l=t.memoizedState,i=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Yn(e,Xt,a)):(a=i.cache,Yn(e,Xt,a),a!==l.cache&&Nc(e,[Xt],n,!0))),Pt(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=t===null?18882560:18874368:ot&&Li(e),t!==null&&t.memoizedProps.name!==a.name?e.flags|=4194816:$a(t,e),Pt(t,e,a.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Bn(t){t.flags|=4}function wu(t,e,n,a,l){var i;if((i=(t.mode&32)!==0)&&(i=n===null?kh(e,a):kh(e,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Ff())t.flags|=8192;else throw ya=Ji,Qc}else t.flags&=-16777217}function pf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qh(e))if(Ff())t.flags|=8192;else throw ya=Ji,Qc}function fs(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Xo():536870912,t.lanes|=e,ll|=e)}function Pl(t,e){if(!ot)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function ug(t,e,n){var a=e.pendingProps;switch(zc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Cn(Xt),An(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(qa(e)?Bn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Rc())),Nt(e),null;case 26:var l=e.type,i=e.memoizedState;return t===null?(Bn(e),i!==null?(Nt(e),pf(e,i)):(Nt(e),wu(e,l,null,a,n))):i?i!==t.memoizedState?(Bn(e),Nt(e),pf(e,i)):(Nt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Bn(e),Nt(e),wu(e,l,t,a,n)),null;case 27:if(Ze(e),n=ve.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Bn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Nt(e),e.subtreeFlags&=-33554433,null}t=Et.current,qa(e)?Kr(e):(t=Gh(l,a,n),e.stateNode=t,Bn(e))}return Nt(e),e.subtreeFlags&=-33554433,null;case 5:if(Ze(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Bn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Nt(e),e.subtreeFlags&=-33554433,null}if(i=Et.current,qa(e))Kr(e);else{var s=ci(ve.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}i[le]=e,i[be]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=i;t:switch(oe(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Bn(e)}}return Nt(e),e.subtreeFlags&=-33554433,wu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Bn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=ve.current,qa(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=te,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[le]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||gh(t.nodeValue,n)),t||Qn(e,!0)}else t=ci(t).createTextNode(a),t[le]=e,e.stateNode=t}return Nt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=qa(e),n!==null){if(t===null){if(!a)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[le]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),t=!1}else n=Rc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Re(e),e):(Re(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Nt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=qa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[le]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),l=!1}else l=Rc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Re(e),e):(Re(e),null)}return Re(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),fs(e,e.updateQueue),Nt(e),null);case 4:return An(),t===null&&no(e.stateNode.containerInfo),e.flags|=67108864,Nt(e),null;case 10:return Cn(e.type),Nt(e),null;case 19:if(qc(e),a=e.memoizedState,a===null)return Nt(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)Pl(a,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Fi(t),i!==null){for(e.flags|=128,Pl(a,!1),t=i.updateQueue,e.updateQueue=t,fs(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Vr(n,t),n=n.sibling;return kl(e,ce.current&1|2),ot&&En(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Me()>Cs&&(e.flags|=128,l=!0,Pl(a,!1),e.lanes=4194304)}else{if(!l)if(t=Fi(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,fs(e,t),Pl(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!ot)return Nt(e),null}else 2*Me()-a.renderingStartTime>Cs&&n!==536870912&&(e.flags|=128,l=!0,Pl(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}if(a.tail!==null){t=a.tail;t:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Me(),t.sibling=null,i=ce.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||ot?kl(e,i):(n=i,$(se,e),$(ce,n),fe===null&&(fe=e)),ot&&En(e,a.treeForkCount),t}return Nt(e),null;case 22:case 23:return Re(e),Xc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),n=e.updateQueue,n!==null&&fs(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&J(va),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Cn(Xt),Nt(e),null;case 25:return null;case 30:return e.flags|=33554432,Nt(e),null}throw Error(o(156,e.tag))}function og(t,e){switch(zc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cn(Xt),An(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ze(e),null;case 31:if(e.memoizedState!==null){if(Re(e),e.alternate===null)throw Error(o(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Re(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qc(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return An(),null;case 10:return Cn(e.type),null;case 22:case 23:return Re(e),Xc(),t!==null&&J(va),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Cn(Xt),null;case 25:return null;default:return null}}function vf(t,e){switch(zc(e),e.tag){case 3:Cn(Xt),An();break;case 26:case 27:case 5:Ze(e);break;case 4:An();break;case 31:e.memoizedState!==null&&Re(e);break;case 13:Re(e);break;case 19:qc(e);break;case 10:Cn(e.type);break;case 22:case 23:Re(e),Xc(),t!==null&&J(va);break;case 24:Cn(Xt)}}function Fl(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var i=n.create,s=n.inst;a=i(),s.destroy=a}n=n.next}while(n!==l)}}catch(c){Ct(e,e.return,c)}}function Jn(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,l=e;var f=n,b=c;try{b()}catch(T){Ct(l,f,T)}}}a=a.next}while(a!==i)}}catch(T){Ct(e,e.return,T)}}function bf(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{cd(e,n)}catch(a){Ct(t,t.return,a)}}}function yf(t,e,n){n.props=Ta(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Ct(t,e,a)}}function sn(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:var l=t.stateNode,i=bn(t.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=Mh(i)),a=l.ref;break;case 7:if(t.stateNode===null){var s=new Ge(t);E(t.child,!1,$g,s,void 0,void 0),t.stateNode=s}a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(c){Ct(t,e,c)}}function ue(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ct(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ct(t,e,l)}else n.current=null}function hs(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)xh(t.stateNode,e[n])}function wf(t){for(var e=t.return;e!==null&&(Tu(e)&&xh(t.stateNode,e.stateNode),!Eu(e));)e=e.return}function Wl(t){for(var e=t.return;e!==null&&(Tu(e)&&tp(t.stateNode,e.stateNode),!Eu(e));)e=e.return}function Eu(t){return t.tag===5||t.tag===3||t.tag===27}function Tu(t){return t&&t.tag===7&&t.stateNode!==null}function Cu(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ct(t,t.return,l)}}function Du(t,e,n){try{var a=t.stateNode;Ig(a,t.type,n,e),a[be]=e}catch(l){Ct(t,t.return,l)}}function Ef(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ta(t.type)||t.tag===4}function Su(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ef(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mu(t,e,n,a){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(l),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nn)),hs(t,a),gt=!0;else if(l!==4&&(l===27&&(hs(t,a),a=null,ta(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Mu(t,e,n,a),t=t.sibling;t!==null;)Mu(t,e,n,a),t=t.sibling}function As(t,e,n,a){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?n.insertBefore(l,e):n.appendChild(l),hs(t,a),gt=!0;else if(l!==4&&(l===27&&(hs(t,a),a=null,ta(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(As(t,e,n,a),t=t.sibling;t!==null;)As(t,e,n,a),t=t.sibling}function Tf(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);oe(e,a,n),e[le]=t,e[be]=n}catch(i){Ct(t,t.return,i)}}var ms=!1,xe=null;function Cf(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(ms=!0)}var cn=null;function Df(){var t=cn;return cn=null,t}var we=0;function tl(t,e,n,a,l){return we=0,Sf(t.child,e,n,a,l)}function Sf(t,e,n,a,l){for(var i=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(a!==null){var c=ro(s);a.push(c),c.view&&(i=!0)}else i||ro(s).view&&(i=!0);ms=!0,Dh(s,we===0?e:e+"_"+we,n),we++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Sf(t.child,e,n,a,l)&&(i=!0));t=t.sibling}return i}function un(t,e){for(;t!==null;)t.tag===5?Sh(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||un(t.child,e)),t=t.sibling}function gs(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(gs(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(o(544));var n=e.name;e=yn(e.default,e.share),e!=="none"&&(tl(t,n,e,null,!1)||un(t.child,!1))}t=t.sibling}}function Bu(t,e){if(t.tag===30){var n=t.stateNode,a=t.memoizedProps,l=bn(a,n),i=yn(a.default,n.paired?a.share:a.enter);i!=="none"?tl(t,l,i,null,!1)?(gs(t),n.paired||e||ul(t,a.onEnter)):un(t.child,!1):gs(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling;else gs(t)}function _u(t){if(xe!==null&&xe.size!==0){var e=xe;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=e.get(a);if(l!==void 0){var i=yn(n.default,n.share);if(i!=="none"&&(tl(t,a,i,null,!1)?(i=t.stateNode,l.paired=i,i.paired=l,ul(t,n.onShare)):un(t.child,!1)),e.delete(a),e.size===0)break}}}_u(t)}t=t.sibling}}}function zu(t){if(t.tag===30){var e=t.memoizedProps,n=bn(e,t.stateNode),a=xe!==null?xe.get(n):void 0,l=yn(e.default,a!==void 0?e.share:e.exit);l!=="none"&&(tl(t,n,l,null,!1)?a!==void 0?(l=t.stateNode,a.paired=l,l.paired=a,xe.delete(n),ul(t,e.onShare)):ul(t,e.onExit):un(t.child,!1)),xe!==null&&_u(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zu(t),t=t.sibling;else xe!==null&&_u(t)}function Mf(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=bn(e,t.stateNode);e=yn(e.default,e.update),t.flags&=-5,e!=="none"&&tl(t,n,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Mf(t);t=t.sibling}}function Ou(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,un(t.child,!1))}Ou(t)}t=t.sibling}}function ps(t){if(t.tag===30)t.stateNode.paired=null,un(t.child,!1),Ou(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ps(t),t=t.sibling;else Ou(t)}function Bf(t){for(t=t.child;t!==null;)t.tag===30?un(t.child,!1):(t.subtreeFlags&33554432)!==0&&Bf(t),t=t.sibling}function Ru(t,e,n,a,l,i,s){for(var c=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(i!==null&&we<i.length){var b=i[we],T=ro(f);(b.view||T.view)&&(c=!0);var M;if(M=(t.flags&4)===0)if(T.clip)M=!0;else{M=b.rect;var g=T.rect;M=M.y!==g.y||M.x!==g.x||M.height!==g.height||M.width!==g.width}M&&(t.flags|=4),T.abs?T=!b.abs:(b=b.rect,T=T.rect,T=b.height!==T.height||b.width!==T.width),T&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Dh(f,we===0?n:n+"_"+we,l),c&&(t.flags&4)!==0||(cn===null&&(cn=[]),cn.push(f,we===0?a:a+"_"+we,e.memoizedProps)),we++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:Ru(t,e.child,n,a,l,i,s)&&(c=!0));e=e.sibling}return c}function _f(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=t.stateNode,l=bn(n,a),i=yn(n.default,n.update),s;s=t.memoizedState,t.memoizedState=null,a=t;var c=t.child;we=0,l=Ru(a,c,l,l,i,s,!1),(t.flags&4)!==0&&l&&ul(t,n.onUpdate)}else(t.subtreeFlags&33554432)!==0&&_f(t);t=t.sibling}}var ee=!1,wt=!1,on=!1,xu=!1,zf=typeof WeakSet=="function"?WeakSet:Set,ne=null,rn=!1,$l=!1,vs=!1,Nu=!1;function rg(t,e,n){if(t=t.containerInfo,io=vl,t=xr(t),yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break t}var c=0,f=-1,b=-1,T=0,M=0,g=t,w=null;e:for(;;){for(var j;g!==a||i!==0&&g.nodeType!==3||(f=c+i),g!==s||l!==0&&g.nodeType!==3||(b=c+l),g.nodeType===3&&(c+=g.nodeValue.length),(j=g.firstChild)!==null;)w=g,g=j;for(;;){if(g===t)break e;if(w===a&&++T===i&&(f=c),w===s&&++M===l&&(b=c),(j=g.nextSibling)!==null)break;g=w,w=g.parentNode}g=j}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(so={focusedElem:t,selectionRange:a},vl=!1,n=(n&335544064)===n,ne=e,e=n?9270:1024;ne!==null;){if(t=ne,n&&(a=t.deletions,a!==null))for(i=0;i<a.length;i++)n&&zu(a[i]);if(t.alternate===null&&(t.flags&2)!==0)n&&Cf(t),bs(n);else{if(t.tag===22){if(a=t.alternate,t.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&zu(a),bs(n);continue}else if(a!==null&&a.memoizedState!==null){n&&Cf(t),bs(n);continue}}a=t.child,(t.subtreeFlags&e)!==0&&a!==null?(a.return=t,ne=a):(n&&Mf(t),bs(n))}}xe=null}function bs(t){for(;ne!==null;){var e=ne,n=t,a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var i=e.stateNode;try{var s=Ta(e.type,l);n=i.getSnapshotBeforeUpdate(s,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(c){Ct(e,e.return,c)}}break;case 3:if((l&1024)!==0){if(a=e.stateNode.containerInfo,n=a.nodeType,n===9)Ao(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Ao(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=bn(a.memoizedProps,a.stateNode),l=e.memoizedProps,l=yn(l.default,l.update),l!=="none"&&tl(a,n,l,a.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(o(163))}if(a=e.sibling,a!==null){a.return=e.return,ne=a;break}ne=e.return}}function Of(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:dn(t,n),a&4&&Fl(5,n);break;case 1:if(dn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Ct(n,n.return,s)}else{var l=Ta(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ct(n,n.return,s)}}a&64&&bf(n),a&512&&sn(n,n.return);break;case 3:if(dn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{cd(t,e)}catch(s){Ct(n,n.return,s)}}break;case 27:e===null&&a&4&&Tf(n);case 26:case 5:dn(t,n),e===null&&a&4&&Cu(n),a&512&&sn(n,n.return);break;case 12:dn(t,n);break;case 31:dn(t,n),a&4&&If(t,n);break;case 13:dn(t,n),a&4&&jf(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Eg.bind(null,n),ap(t,n))));break;case 22:if(a=n.memoizedState!==null||ee,!a){var i=e!==null&&e.memoizedState!==null||wt;e=ee,l=wt,ee=a,(wt=i)&&!l?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),$e(t,n,a)):dn(t,n),ee=e,wt=l}break;case 30:dn(t,n),a&512&&sn(n,n.return);break;case 7:a&512&&sn(n,n.return);default:dn(t,n)}}function Iu(t,e){for(t=t.child;t!==null;)Rf(t,e),t=t.sibling}function Rf(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=t.stateNode,i=t.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(f){Ct(t,t.return,f)}ju(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,gt=!0}catch(f){Ct(t,t.return,f)}break;case 18:try{var c=t.stateNode;e?Ch(c,!0):Ch(t.stateNode,!1)}catch(f){Ct(t,t.return,f)}break;case 22:case 23:t.memoizedState===null&&Iu(t,e);break;default:Iu(t,e)}}function ju(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var n=t,a=e;switch(n.tag){case 4:Rf(n,a);break t;case 22:n.memoizedState===null&&ju(n,a);break t;default:ju(n,a)}}t=t.sibling}}function xf(t){var e=t.alternate;e!==null&&(t.alternate=null,xf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ci(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var It=null,Ee=!1;function Fe(t,e,n){for(n=n.child;n!==null;)Nf(t,e,n),n=n.sibling}function Nf(t,e,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 26:wt||ue(n,e),Fe(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!wt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:wt||ue(n,e),Wl(n);var a=It,l=Ee;ta(n.type)&&(It=n.stateNode,Ee=!1),Fe(t,e,n),Qh(n.stateNode,n.type,n.memoizedProps),It=a,Ee=l;break;case 5:wt||ue(n,e),Wl(n);case 6:if(n.tag===6&&Wl(n),a=It,l=Ee,It=null,Fe(t,e,n),It=a,Ee=l,It!==null)if(Ee)try{(It.nodeType===9?It.body:It.nodeName==="HTML"?It.ownerDocument.body:It).removeChild(n.stateNode),gt=!0}catch(i){Ct(n,e,i)}else try{It.removeChild(n.stateNode),gt=!0}catch(i){Ct(n,e,i)}break;case 18:It!==null&&(Ee?(t=It,Th(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),bl(t)):Th(It,n.stateNode));break;case 4:a=It,l=Ee,It=n.stateNode.containerInfo,Ee=!0,Fe(t,e,n),It=a,Ee=l;break;case 0:case 11:case 14:case 15:Jn(2,n,e),wt||Jn(4,n,e),Fe(t,e,n);break;case 1:wt||(ue(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&yf(n,e,a)),Fe(t,e,n);break;case 21:Fe(t,e,n);break;case 22:wt=(a=wt)||n.memoizedState!==null,Fe(t,e,n),wt=a;break;case 30:ue(n,e),Fe(t,e,n);break;case 7:wt||ue(n,e),Fe(t,e,n);break;default:Fe(t,e,n)}}function If(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bl(t)}catch(n){Ct(e,e.return,n)}}}function jf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(n){Ct(e,e.return,n)}}function dg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zf),e;default:throw Error(o(435,t.tag))}}function ys(t,e){var n=dg(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var l=Tg.bind(null,t,a);a.then(l,l)}})}function ge(t,e,n){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],s=t,c=e,f=c;t:for(;f!==null;){switch(f.tag){case 27:if(ta(f.type)){It=f.stateNode,Ee=!1;break t}break;case 5:It=f.stateNode,Ee=!1;break t;case 3:case 4:It=f.stateNode.containerInfo,Ee=!0;break t}f=f.return}if(It===null)throw Error(o(160));Nf(s,c,i),It=null,Ee=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Gf(e,t,n),e=e.sibling}var We=null;function Gf(t,e,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var s=a[i];s.ref.impl=s.nextImpl}ge(e,t,n),pe(t),l&4&&(Jn(3,t,t.return),Fl(3,t),Jn(5,t,t.return));break;case 1:ge(e,t,n),pe(t),l&512&&(wt||a===null||ue(a,a.return)),l&64&&ee&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(i=We,ge(e,t,n),pe(t),l&512&&(wt||a===null||ue(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null)if(ee)t.stateNode=yh(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,n=t.memoizedProps,l=i.ownerDocument||i;e:switch(e){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Dl]||a[le]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(e),l.head.insertBefore(a,l.querySelector("head > title"))),oe(a,e,n),a[le]=t,$t(a),e=a;break t;case"link":if(i=Xh("link","href",l).get(e+(n.href||""))){for(s=0;s<i.length;s++)if(a=i[s],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(s,1);break e}}a=l.createElement(e),oe(a,e,n),l.head.appendChild(a);break;case"meta":if(i=Xh("meta","content",l).get(e+(n.content||""))){for(s=0;s<i.length;s++)if(a=i[s],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(s,1);break e}}a=l.createElement(e),oe(a,e,n),l.head.appendChild(a);break;default:throw Error(o(468,e))}a[le]=t,$t(a),e=a}t.stateNode=e}else ee||wo(i,t.type,t.stateNode);else t.stateNode=Vh(i,n,t.memoizedProps);else l!==n?(l===null?(e=a.stateNode,e===null||wt||e.parentNode.removeChild(e)):l.count--,n===null?ee||wo(i,t.type,t.stateNode):Vh(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Du(t,t.memoizedProps,a.memoizedProps);break;case 27:ge(e,t,n),pe(t),l&512&&(wt||a===null||ue(a,a.return)),a!==null&&l&4&&Du(t,t.memoizedProps,a.memoizedProps);break;case 5:if(i=on,on=!1,ge(e,t,n),on=i,pe(t),l&512&&(wt||a===null||ue(a,a.return)),t.flags&32){e=t.stateNode;try{ja(e,""),gt=!0}catch(T){Ct(t,t.return,T)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Du(t,e,a!==null?a.memoizedProps:e)),l&1024&&(xu=!0);break;case 6:if(ge(e,t,n),pe(t),l&4){if(t.stateNode===null)throw Error(o(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,gt=!0}catch(T){Ct(t,t.return,T)}}break;case 3:if(gt=!1,Is=null,i=We,We=ui(e.containerInfo),ge(e,t,n),We=i,pe(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bl(e.containerInfo)}catch(T){Ct(t,t.return,T)}xu&&(xu=!1,Qf(t)),gt=!1;break;case 4:l=on,on=ee,a=ar(),i=We,We=ui(t.stateNode.containerInfo),ge(e,t,n),pe(t),We=i,gt&&$l&&(vs=!0),gt=a,on=l;break;case 12:ge(e,t,n),pe(t);break;case 31:ge(e,t,n),pe(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ys(t,e)));break;case 13:ge(e,t,n),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ts=Me()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ys(t,e)));break;case 22:i=t.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var c=ee,f=wt,b=on;ee=c||i,on=b||i,wt=f||s,ge(e,t,n),wt=f,on=b,ee=c,pe(t),l&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||a===null||s||ee||wt||(e=s||wt,n=ee,a=wt,ee=i||ee,wt=e,Kn(t,2),ee=n,wt=a),!i&&on||Iu(t,i)),l&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,ys(t,n))));break;case 19:ge(e,t,n),pe(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ys(t,e)));break;case 30:l&512&&(wt||a===null||ue(a,a.return)),l=ar(),i=$l,s=(n&335544064)===n,c=t.memoizedProps,$l=s&&yn(c.default,c.update)!=="none",ge(e,t,n),pe(t),s&&a!==null&&gt&&(t.flags|=4),$l=i,gt=l;break;case 21:break;case 7:l&512&&(wt||a===null||ue(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=t);default:ge(e,t,n),pe(t)}}function pe(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Ef(a)){n=a;break}a=a.return}a=null;for(var l=t.return;l!==null;){if(Tu(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(Eu(l))break;l=l.return}var s=a;if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,f=Su(t);As(t,f,c,s);break;case 5:var b=n.stateNode;n.flags&32&&(ja(b,""),n.flags&=-33);var T=Su(t);As(t,T,b,s);break;case 3:case 4:var M=n.stateNode.containerInfo,g=Su(t);Mu(t,g,M,s);break;default:throw Error(o(161))}}catch(w){Ct(t,t.return,w)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Qf(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,vl=!0,e.reset(),vl=!1),t=t.sibling}}function el(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Yf(e,t),e=e.sibling;else _f(e)}function Yf(t,e){var n=t.alternate;if(n===null)Bu(t,!1);else switch(t.tag){case 3:if(Nu=rn=!1,Df(),el(e,t),!rn&&!vs){if(t=cn,t!==null)for(var a=0;a<t.length;a+=3){n=t[a];var l=t[a+1];Sh(n,t[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Nu=!0}cn=null;break;case 5:el(e,t);break;case 4:a=rn,rn=!1,el(e,t),rn&&(vs=!0),rn=a;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?Bu(t,!1):el(e,t));break;case 30:a=rn,l=Df(),rn=!1,el(e,t),rn&&(t.flags|=4);var i=t.memoizedProps,s=t.stateNode;e=bn(i,s),s=bn(n.memoizedProps,s);var c=yn(i.default,i.update);c==="none"?e=!1:(i=n.memoizedState,n.memoizedState=null,n=t.child,we=0,e=Ru(t,n,e,s,c,i,!0),we!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(ul(t,t.memoizedProps.onUpdate),cn=l):l!==null&&(l.push.apply(l,cn),cn=l),rn=(t.flags&32)!==0?!0:a;break;default:el(e,t)}}function dn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Of(t,e.alternate,e),e=e.sibling}function Kn(t,e){for(t=t.child;t!==null;){var n=t,a=e;switch(n.tag){case 0:case 11:case 14:case 15:Jn(4,n,n.return),Kn(n,a);break;case 1:ue(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&yf(n,n.return,l),Kn(n,a);break;case 27:(a&2)!==0&&Qh(n.stateNode,n.type,n.memoizedProps);case 5:ue(n,n.return),n.tag!==5&&n.tag!==27||Wl(n),Kn(n,a);break;case 6:Wl(n);break;case 26:ue(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||wt||l.parentNode.removeChild(l),Kn(n,a);break;case 22:n.memoizedState===null&&Kn(n,a);break;case 30:ue(n,n.return),Kn(n,a);break;case 7:ue(n,n.return);default:Kn(n,a)}t=t.sibling}}function $e(t,e,n){for(n=(e.subtreeFlags&8772)!==0?n:n&-2,e=e.child;e!==null;){var a=e.alternate,l=t,i=e,s=i.flags,c=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:$e(l,i,n),Fl(4,i);break;case 1:if($e(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){Ct(a,a.return,T)}if(a=i,l=a.updateQueue,l!==null){var f=a.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)sd(b[l],f)}catch(T){Ct(a,a.return,T)}}c&&s&64&&bf(i),sn(i,i.return);break;case 27:(n&2)!==0&&Tf(i);case 5:i.tag!==5&&i.tag!==27||wf(i),$e(l,i,n),c&&a===null&&s&4&&Cu(i),sn(i,i.return);break;case 6:wf(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||ee||wo(ui(f.ownerDocument),i.type,f),$e(l,i,n),c&&a===null&&s&4&&Cu(i),sn(i,i.return);break;case 12:$e(l,i,n);break;case 31:$e(l,i,n),c&&s&4&&If(l,i);break;case 13:$e(l,i,n),c&&s&4&&jf(l,i);break;case 22:i.memoizedState===null&&$e(l,i,n),sn(i,i.return);break;case 30:$e(l,i,n),sn(i,i.return);break;case 7:sn(i,i.return);default:$e(l,i,n)}e=e.sibling}}function Gu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ql(n))}function Qu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ql(t))}function qe(t,e,n,a){var l=(n&335544064)===n;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)Lf(t,e,n,a),e=e.sibling;else l&&Bf(e)}function Lf(t,e,n,a){var l=(n&335544064)===n;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&ps(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:qe(t,e,n,a),i&2048&&Fl(9,e);break;case 1:qe(t,e,n,a);break;case 3:qe(t,e,n,a),l&&Nu&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Ql(i)));break;case 12:if(i&2048){qe(t,e,n,a),i=e.stateNode;try{var s=e.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(b){Ct(e,e.return,b)}}else qe(t,e,n,a);break;case 31:qe(t,e,n,a);break;case 13:qe(t,e,n,a);break;case 23:break;case 22:s=e.stateNode,c=e.alternate,e.memoizedState!==null?(l&&c!==null&&c.memoizedState===null&&ps(c),s._visibility&2?qe(t,e,n,a):ti(t,e)):(l&&c!==null&&c.memoizedState!==null&&ps(e),s._visibility&2?qe(t,e,n,a):(s._visibility|=2,nl(t,e,n,a,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Gu(c,e);break;case 24:qe(t,e,n,a),i&2048&&Qu(e.alternate,e);break;case 30:l&&(i=e.alternate,i!==null&&(un(i.child,!0),un(e.child,!0))),qe(t,e,n,a);break;default:qe(t,e,n,a)}}function nl(t,e,n,a,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,s=e,c=n,f=a,b=s.flags;switch(s.tag){case 0:case 11:case 15:nl(i,s,c,f,l),Fl(8,s);break;case 23:break;case 22:var T=s.stateNode;s.memoizedState!==null?T._visibility&2?nl(i,s,c,f,l):ti(i,s):(T._visibility|=2,nl(i,s,c,f,l)),l&&b&2048&&Gu(s.alternate,s);break;case 24:nl(i,s,c,f,l),l&&b&2048&&Qu(s.alternate,s);break;default:nl(i,s,c,f,l)}e=e.sibling}}function ti(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:ti(n,a),l&2048&&Gu(a.alternate,a);break;case 24:ti(n,a),l&2048&&Qu(a.alternate,a);break;default:ti(n,a)}e=e.sibling}}var Ca=8192;function Da(t,e,n){if(t.subtreeFlags&Ca)for(t=t.child;t!==null;)Hf(t,e,n),t=t.sibling}function Hf(t,e,n){switch(t.tag){case 26:Da(t,e,n),t.flags&Ca&&(t.memoizedState!==null?pp(n,We,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Kh(n,t)));break;case 5:Da(t,e,n),t.flags&Ca&&(t=t.stateNode,(e&335544128)===e&&Kh(n,t));break;case 3:case 4:var a=We;We=ui(t.stateNode.containerInfo),Da(t,e,n),We=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ca,Ca=16777216,Da(t,e,n),Ca=a):Da(t,e,n));break;case 30:if((t.flags&Ca)!==0&&(a=t.memoizedProps.name,a!=null&&a!=="auto")){var l=t.stateNode;l.paired=null,xe===null&&(xe=new Map),xe.set(a,l)}Da(t,e,n);break;default:Da(t,e,n)}}function Uf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];ne=a,Xf(a,t)}Uf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vf(t),t=t.sibling}function Vf(t){switch(t.tag){case 0:case 11:case 15:ei(t),t.flags&2048&&Jn(9,t,t.return);break;case 3:ei(t);break;case 12:ei(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ws(t)):ei(t);break;default:ei(t)}}function ws(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];ne=a,Xf(a,t)}Uf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Jn(8,e,e.return),ws(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ws(e));break;default:ws(e)}t=t.sibling}}function Xf(t,e){for(;ne!==null;){var n=ne;switch(n.tag){case 0:case 11:case 15:Jn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ql(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,ne=a;else t:for(n=t;ne!==null;){a=ne;var l=a.sibling,i=a.return;if(xf(a),a===n){ne=null;break t}if(l!==null){l.return=i,ne=l;break t}ne=i}}}var fg={getCacheForType:function(t){var e=ie(Xt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ie(Xt).controller.signal}},hg=typeof WeakMap=="function"?WeakMap:Map,yt=0,_t=null,dt=null,ht=0,Tt=0,Ne=null,Zn=!1,al=!1,Yu=!1,_n=0,Yt=0,Pn=0,Sa=0,Es=0,Ie=0,ll=0,ni=null,Te=null,Lu=!1,Ts=0,kf=0,Cs=1/0,Ds=null,Fn=null,Gt=0,tn=null,Ma=null,fn=0,Hu=0,Uu=null,qf=null,il=null,sl=null,cl=null,ai=0,Ss=null;function je(){return(yt&2)!==0&&ht!==0?ht&-ht:O.T!==null?Wu():Ko()}function Jf(){if(Ie===0)if((ht&536870912)===0||ot){var t=yi;yi<<=1,(yi&3932160)===0&&(yi=262144),Ie=t}else Ie=536870912;return t=se.current,t!==null&&(t.flags|=32),Ie}function ul(t,e){if(e!=null){var n=t.stateNode,a=n.ref;a===null&&(a=n.ref=Mh(bn(t.memoizedProps,n))),sl===null&&(sl=[]),sl.push(e.bind(null,a))}}function Ce(t,e,n){(t===_t&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(ol(t,0),Wn(t,ht,Ie,!1)),Cl(t,n),((yt&2)===0||t!==_t)&&(t===_t&&((yt&2)===0&&(Sa|=n),Yt===4&&Wn(t,ht,Ie,!1)),hn(t))}function Kf(t,e,n){if((yt&6)!==0)throw Error(o(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Tl(t,e),l=a?gg(t,e):Xu(t,e,!0),i=a;do{if(l===0){al&&!a&&Wn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!Ag(n)){l=Xu(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var c=t;l=ni;var f=c.current.memoizedState.isDehydrated;if(f&&(ol(c,s).flags|=256),s=Xu(c,s,!1),s!==2&&s!==6){if(Yu&&!f){c.errorRecoveryDisabledLanes|=i,Sa|=i,l=4;break t}i=Te,Te=l,i!==null&&(Te===null?Te=i:Te.push.apply(Te,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){ol(t,0),Wn(t,e,0,!0);break}t:{switch(a=t,i=l,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Wn(a,e,Ie,!Zn);break t;case 2:Te=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Ts+300-Me(),10<l)){if(Wn(a,e,Ie,!Zn),Ei(a,0,!0)!==0)break t;fn=e,a.timeoutHandle=oo(Zf.bind(null,a,n,Te,Ds,Lu,e,Ie,Sa,ll,Zn,i,"Throttled",-0,0),l);break t}Zf(a,n,Te,Ds,Lu,e,Ie,Sa,ll,Zn,i,null,-0,0)}}break}while(!0);hn(t)}function Zf(t,e,n,a,l,i,s,c,f,b,T,M,g,w){t.timeoutHandle=-1;var j=e.subtreeFlags,U=(i&335544064)===i;if(M=null,(U||j&8192||(j&16785408)===16785408)&&(M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},xe=null,Hf(e,i,M),U&&(j=M,U=t.containerInfo,U=(U.nodeType===9?U:U.ownerDocument).__reactViewTransition,U!=null&&(j.count++,j.waitingForViewTransition=!0,j=di.bind(j),U.finished.then(j,j))),j=(i&62914560)===i?Ts-Me():(i&4194048)===i?kf-Me():0,j=vp(M,j),j!==null)){fn=i,t.cancelPendingCommit=j(ah.bind(null,t,e,i,n,a,l,s,c,f,b,T,M,null,g,w)),Wn(t,i,s,!b);return}ah(t,e,i,n,a,l,s,c,f,b,T,M)}function Ag(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e,n,a){e=Vo(t,e),e&=~Es,e&=~Sa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var i=31-_e(l),s=1<<i;a[i]=-1,l&=~s}n!==0&&ko(t,n,e)}function Ms(){return(yt&6)===0?(li(0),!1):!0}function Vu(){if(dt!==null){if(Tt===0)var t=dt.return;else t=dt,Tn=Aa=null,Fc(t),Za=null,Hl=0,t=dt;for(;t!==null;)vf(t.alternate,t),t=t.return;dt=null}}function ol(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,Qg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),fn=0,Vu(),_t=t,dt=n=wn(t.current,null),ht=e,Tt=0,Ne=null,Zn=!1,al=Tl(t,e),Yu=!1,ll=Ie=Es=Sa=Pn=Yt=0,Te=ni=null,Lu=!1,_n=Vo(t,e),Ii(),n}function Pf(t,e){it=null,O.H=ss,e===Ka||e===qi?(e=nd(),Tt=3):e===Qc?(e=nd(),Tt=4):Tt=e===fu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ne=e,dt===null&&(Yt=1,cs(t,Ue(e,t.current)))}function Ff(){var t=se.current;return t===null?!0:(ht&4194048)===ht?fe===null:(ht&62914560)===ht||(ht&536870912)!==0?t===fe:!1}function Wf(){var t=O.H;return O.H=ss,t===null?ss:t}function $f(){var t=O.A;return O.A=fg,t}function Bs(){Yt=4,Zn||(ht&4194048)!==ht&&se.current!==null||(al=!0),(Pn&134217727)===0&&(Sa&134217727)===0||_t===null||Wn(_t,ht,Ie,!1)}function Xu(t,e,n){var a=yt;yt|=2;var l=Wf(),i=$f();(_t!==t||ht!==e)&&(Ds=null,ol(t,e)),e=!1;var s=Yt;t:do try{if(Tt!==0&&dt!==null){var c=dt,f=Ne;switch(Tt){case 8:Vu(),s=6;break t;case 3:case 2:case 9:case 6:se.current===null&&(e=!0);var b=Tt;if(Tt=0,Ne=null,rl(t,c,f,b),n&&al){s=0;break t}break;default:b=Tt,Tt=0,Ne=null,rl(t,c,f,b)}}mg(),s=Yt;break}catch(T){Pf(t,T)}while(!0);return e&&t.shellSuspendCounter++,Tn=Aa=null,yt=a,O.H=l,O.A=i,dt===null&&(_t=null,ht=0,Ii()),s}function mg(){for(;dt!==null;)th(dt)}function gg(t,e){var n=yt;yt|=2;var a=Wf(),l=$f();_t!==t||ht!==e?(Ds=null,Cs=Me()+500,ol(t,e)):al=Tl(t,e);t:do try{if(Tt!==0&&dt!==null){e=dt;var i=Ne;e:switch(Tt){case 1:Tt=0,Ne=null,rl(t,e,i,1);break;case 2:case 9:if(td(i)){Tt=0,Ne=null,eh(e);break}e=function(){Tt!==2&&Tt!==9||_t!==t||(Tt=7),hn(t)},i.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:td(i)?(Tt=0,Ne=null,eh(e)):(Tt=0,Ne=null,rl(t,e,i,7));break;case 5:var s=null;switch(dt.tag){case 26:s=dt.memoizedState;case 5:case 27:var c=dt;if(s?qh(s):c.stateNode.complete){Tt=0,Ne=null;var f=c.sibling;if(f!==null)dt=f;else{var b=c.return;b!==null?(dt=b,_s(b)):dt=null}break e}}Tt=0,Ne=null,rl(t,e,i,5);break;case 6:Tt=0,Ne=null,rl(t,e,i,6);break;case 8:Vu(),Yt=6;break t;default:throw Error(o(462))}}pg();break}catch(T){Pf(t,T)}while(!0);return Tn=Aa=null,O.H=a,O.A=l,yt=n,dt!==null?0:(_t=null,ht=0,Ii(),Yt)}function pg(){for(;dt!==null&&!NA();)th(dt)}function th(t){var e=gf(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?_s(t):dt=e}function eh(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=of(n,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=of(n,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:Fc(e);var a=e;a===te&&(ot?(Hi(a),a.tag===5&&a.stateNode!=null&&(xt=a.stateNode)):(Hi(a),ot=!0));default:vf(n,e),e=dt=Vr(e,_n),e=gf(n,e,_n)}t.memoizedProps=t.pendingProps,e===null?_s(t):dt=e}function rl(t,e,n,a){Tn=Aa=null,Fc(e),Za=null,Hl=0;var l=e.return;try{if(lg(t,l,e,n,ht)){Yt=1,cs(t,Ue(n,t.current)),dt=null;return}}catch(i){if(l!==null)throw dt=l,i;Yt=1,cs(t,Ue(n,t.current)),dt=null;return}e.flags&32768?(ot||a===1?t=!0:al||(ht&536870912)!==0?t=!1:(Zn=t=!0,(a===2||a===9||a===3||a===6)&&(a=se.current,a!==null&&a.tag===13&&(a.flags|=16384))),nh(e,t)):_s(e)}function _s(t){var e=t;do{if((e.flags&32768)!==0){nh(e,Zn);return}t=e.return;var n=ug(e.alternate,e,_n);if(n!==null){dt=n;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);Yt===0&&(Yt=5)}function nh(t,e){do{var n=og(t.alternate,t);if(n!==null){n.flags&=32767,dt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){dt=t;return}dt=t=n}while(t!==null);Yt=6,dt=null}function ah(t,e,n,a,l,i,s,c,f,b,T,M){t.cancelPendingCommit=null;do zs();while(Gt!==0);if((yt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));t===_t&&(dt=_t=null,ht=0),Ma=e,tn=t,fn=n,Uu=l,qf=a,vg(t,e,n,s,c,f,M)}}function vg(t,e,n,a,l,i,s){var c=e.lanes|e.childLanes;if(Hu=c,c|=Dc,XA(t,n,c,a,l,i),sl=null,(n&335544064)===n?(cl=qm(t),a=10262):(cl=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(t.callbackNode=null,t.callbackPriority=0,Cg(vi,function(){return Ku(),null})):(t.callbackNode=null,t.callbackPriority=0),ms=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,l=G.p,G.p=2,i=yt,yt|=4;try{rg(t,e,n)}finally{yt=i,G.p=l,O.T=a}}Gt=1,ms?il=Xg(s,t.containerInfo,cl,ku,qu,yg,Ju,Ku,bg):(ku(),qu(),Ju())}function bg(t){if(Gt!==0){var e=tn.onRecoverableError;e(t,{componentStack:null})}}function yg(){Gt===3&&(Gt=0,Yf(Ma,tn),Gt=4)}function ku(){if(Gt===1){Gt=0;var t=tn,e=Ma,n=fn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=G.p;G.p=2;var i=yt;yt|=4;try{$l=vs=!1,Gf(e,t,n),n=so;var s=xr(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(s!==c&&c&&c.ownerDocument&&Rr(c.ownerDocument.documentElement,c)){if(f!==null&&yc(c)){var b=f.start,T=f.end;if(T===void 0&&(T=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(T,c.value.length);else{var M=c.ownerDocument||document,g=M&&M.defaultView||window;if(g.getSelection){var w=g.getSelection(),j=c.textContent.length,U=Math.min(f.start,j),st=f.end===void 0?U:Math.min(f.end,j);!w.extend&&U>st&&(s=st,st=U,U=s);var v=Or(c,U),A=Or(c,st);if(v&&A&&(w.rangeCount!==1||w.anchorNode!==v.node||w.anchorOffset!==v.offset||w.focusNode!==A.node||w.focusOffset!==A.offset)){var y=M.createRange();y.setStart(v.node,v.offset),w.removeAllRanges(),U>st?(w.addRange(y),w.extend(A.node,A.offset)):(y.setEnd(A.node,A.offset),w.addRange(y))}}}}for(M=[],w=c;w=w.parentNode;)w.nodeType===1&&M.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var S=M[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}vl=!!io,so=io=null}finally{yt=i,G.p=l,O.T=a}}t.current=e,Gt=2}}function qu(){if(Gt===2){Gt=0;var t=tn,e=Ma,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var a=G.p;G.p=2;var l=yt;yt|=4;try{Of(t,e.alternate,e)}finally{yt=l,G.p=a,O.T=n}}Gt=3}}function Ju(){if(Gt===4||Gt===3){Gt=0;var t=il;il=null,IA();var e=tn,n=Ma,a=fn,l=qf,i=(a&335544064)===a?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?Gt=5:(Gt=0,Ma=tn=null,lh(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Fn=null),nc(a),n=n.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(El,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,i=G.p,G.p=2,O.T=null;try{for(var s=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];s(f.value,{componentStack:f.stack})}}finally{O.T=n,G.p=i}}if(l=sl,s=cl,cl=null,l!==null&&(sl=null,s===null&&(s=[]),t!==null))for(f=0;f<l.length;f++)n=(0,l[f])(s),n!==void 0&&t.finished.finally(n);(fn&3)!==0&&zs(),hn(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Ss?ai++:(ai=0,Ss=e):(ai=0,Ss=null),li(0)}}function lh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ql(e)))}function zs(){return il!==null&&(il.skipTransition(),il=null),ku(),qu(),Ju(),Ku()}function Ku(){if(Gt!==5)return!1;var t=tn,e=Hu;Hu=0;var n=nc(fn),a=O.T,l=G.p;try{G.p=32>n?32:n,O.T=null,n=Uu,Uu=null;var i=tn,s=fn;if(Gt=0,Ma=tn=null,fn=0,(yt&6)!==0)throw Error(o(331));var c=yt;if(yt|=4,Vf(i.current),Lf(i,i.current,s,n),yt=c,li(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(El,i)}catch{}return!0}finally{G.p=l,O.T=a,lh(t,e)}}function ih(t,e,n){e=Ue(n,e),e=du(t.stateNode,e,2),t=Vn(t,e,2),t!==null&&(Cl(t,2),hn(t))}function Ct(t,e,n){if(t.tag===3)ih(t,t,n);else for(;e!==null;){if(e.tag===3){ih(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Fn===null||!Fn.has(a))){t=Ue(n,t),n=tf(2),a=Vn(e,n,2),a!==null&&(ef(n,a,e,t),Cl(a,2),hn(a));break}}e=e.return}}function Zu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new hg;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(Yu=!0,l.add(n),t=wg.bind(null,t,e,n),e.then(t,t))}function wg(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,_t===t&&(ht&n)===n&&((Yt===4||Yt===3&&(ht&62914560)===ht&&300>Me()-Ts)&&(yt&2)===0?ol(t,0):Es|=n,ll===ht&&(ll=0)),hn(t)}function sh(t,e){e===0&&(e=Xo()),t=da(t,e),t!==null&&(Cl(t,e),hn(t))}function Eg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sh(t,n)}function Tg(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),sh(t,n)}function Cg(t,e){return Ws(t,e)}var dl=null,fl=null,Pu=!1,Os=!1,Fu=!1,$n=0;function hn(t){t!==fl&&t.next===null&&(fl===null?dl=fl=t:fl=fl.next=t),Os=!0,Pu||(Pu=!0,Sg())}function li(t,e){if(!Fu&&Os){Fu=!0;do for(var n=!1,a=dl;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var s=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-_e(42|t)+1)-1,i&=l&~(s&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,rh(a,i))}else i=ht,i=Ei(a,a===_t?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Tl(a,i)||(n=!0,rh(a,i));a=a.next}while(n);Fu=!1}}function Dg(){ch()}function ch(){Os=Pu=!1;var t=0;$n!==0&&Gg()&&(t=$n);for(var e=Me(),n=null,a=dl;a!==null;){var l=a.next,i=uh(a,e);i===0?(a.next=null,n===null?dl=l:n.next=l,l===null&&(fl=n)):(n=a,(t!==0||(i&3)!==0)&&(Os=!0)),a=l}Gt!==0&&Gt!==5||li(t),$n!==0&&($n=0)}function uh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-_e(i),c=1<<s,f=l[s];f===-1?((c&n)===0||(c&a)!==0)&&(l[s]=VA(c,e)):f<=e&&(t.expiredLanes|=c),i&=~c}if(e=_t,n=ht,n=Ei(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&$s(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Tl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&$s(a),nc(n)){case 2:case 8:n=Ho;break;case 32:n=vi;break;case 268435456:n=Uo;break;default:n=vi}return a=oh.bind(null,t),n=Ws(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&$s(a),t.callbackPriority=2,t.callbackNode=null,2}function oh(t,e){if(Gt!==0&&Gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var a=ht;return a=Ei(t,t===_t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Kf(t,a,e),uh(t,Me()),t.callbackNode!=null&&t.callbackNode===n?oh.bind(null,t):null)}function rh(t,e){if(zs())return null;Kf(t,e,!0)}function Sg(){Yg(function(){(yt&6)!==0?Ws(Lo,Dg):ch()})}function Wu(){if($n===0){var t=pa;t===0&&(t=bi,bi<<=1,(bi&261888)===0&&(bi=256)),$n=t}return $n}function dh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mi(t)}function Mg(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var i=dh((l[be]||null).action),s=a.submitter;s&&(e=(e=s[be]||null)?dh(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var c=new Oi("action","action",null,a,l);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if($n!==0){var f=new FormData(l,s);su(n,{pending:!0,data:f,method:l.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=new FormData(l,s),su(n,{pending:!0,data:f,method:l.method,action:i},i,f))},currentTarget:l}]})}}for(var $u=0;$u<Cc.length;$u++){var to=Cc[$u],Bg=to.toLowerCase(),_g=to[0].toUpperCase()+to.slice(1);Pe(Bg,"on"+_g)}Pe(jr,"onAnimationEnd"),Pe(Gr,"onAnimationIteration"),Pe(Qr,"onAnimationStart"),Pe("dblclick","onDoubleClick"),Pe("focusin","onFocus"),Pe("focusout","onBlur"),Pe(Qm,"onTransitionRun"),Pe(Ym,"onTransitionStart"),Pe(Lm,"onTransitionCancel"),Pe(Yr,"onTransitionEnd"),Na("onMouseEnter",["mouseout","mouseover"]),Na("onMouseLeave",["mouseout","mouseover"]),Na("onPointerEnter",["pointerout","pointerover"]),Na("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function fh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],f=c.instance,b=c.currentTarget;if(c=c.listener,f!==i&&l.isPropagationStopped())break t;i=c,l.currentTarget=b;try{i(l)}catch(T){Ni(T)}l.currentTarget=null,i=f}else for(s=0;s<a.length;s++){if(c=a[s],f=c.instance,b=c.currentTarget,c=c.listener,f!==i&&l.isPropagationStopped())break t;i=c,l.currentTarget=b;try{i(l)}catch(T){Ni(T)}l.currentTarget=null,i=f}}}}function ft(t,e){var n=e[Po];n===void 0&&(n=e[Po]=new Set);var a=t+"__bubble";n.has(a)||(hh(e,t,2,!1),n.add(a))}function eo(t,e,n){var a=0;e&&(a|=4),hh(n,t,a,e)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[Rs]){t[Rs]=!0,$o.forEach(function(n){n!=="selectionchange"&&(zg.has(n)||eo(n,!1,t),eo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rs]||(e[Rs]=!0,eo("selectionchange",!1,e))}}function hh(t,e,n,a){switch(nA(e)){case 2:var l=Ep;break;case 8:l=Tp;break;default:l=To}n=l.bind(null,e,n,t),l=void 0,!rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function ao(t,e,n,a,l){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===l)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;c!==null;){if(s=ca(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=i=s;continue t}c=c.parentNode}}a=a.return}fr(function(){var b=i,T=uc(n),M=[];t:{var g=Lr.get(t);if(g!==void 0){var w=Oi,j=t;switch(t){case"keypress":if(_i(n)===0)break t;case"keydown":case"keyup":w=Am;break;case"focusin":j="focus",w=Ac;break;case"focusout":j="blur",w=Ac;break;case"beforeblur":case"afterblur":w=Ac;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=bm;break;case jr:case Gr:case Qr:w=im;break;case Yr:w=wm;break;case"scroll":case"scrollend":w=tm;break;case"wheel":w=Tm;break;case"copy":case"cut":case"paste":w=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=pr;break;case"submit":w=pm;break;case"toggle":case"beforetoggle":w=Dm}var U=(e&4)!==0,st=!U&&(t==="scroll"||t==="scrollend"),v=U?g!==null?g+"Capture":null:g;U=[];for(var A=b,y;A!==null;){var S=A;if(y=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||y===null||v===null||(S=Ml(A,v),S!=null&&U.push(si(A,S,y))),st)break;A=A.return}0<U.length&&(g=new w(g,j,null,n,T),M.push({event:g,listeners:U}))}}if((e&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",w&&n!==cc&&(j=n.relatedTarget||n.fromElement)&&(ca(j)||j[Oa]))break t;(g||w)&&(j=T.window===T?T:(w=T.ownerDocument)?w.defaultView||w.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=b,w=w?ca(w):null,w!==null&&(st=D(w),U=w.tag,w!==st||U!==5&&U!==27&&U!==6)&&(w=null)):(g=null,w=b),g!==w&&(U=mr,S="onMouseLeave",v="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(U=pr,S="onPointerLeave",v="onPointerEnter",A="pointer"),st=g==null?j:Sl(g),y=w==null?j:Sl(w),j=new U(S,A+"leave",g,n,T),j.target=st,j.relatedTarget=y,S=null,ca(T)===b&&(U=new U(v,A+"enter",w,n,T),U.target=y,U.relatedTarget=st,S=U),st=S,U=g&&w?bt(g,w,Og):null,g!==null&&Ah(M,j,g,U,!1),w!==null&&st!==null&&Ah(M,st,w,U,!0)))}t:{if(g=b?Sl(b):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var L=Dr;else if(Tr(g))if(Sr)L=Im;else{L=xm;var At=Rm}else w=g.nodeName,!w||w.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?b&&sc(b.elementType)&&(L=Dr):L=Nm;if(L&&(L=L(t,b))){Cr(M,L,n,T);break t}At&&At(t,g,b)}switch(At=b?Sl(b):window,t){case"focusin":(Tr(At)||At.contentEditable==="true")&&(La=At,wc=b,Il=null);break;case"focusout":Il=wc=La=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Nr(M,n,T);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Nr(M,n,T)}var Z;if(gc)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else Ya?wr(t,n)&&(W="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(vr&&n.locale!=="ko"&&(Ya||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ya&&(Z=hr()):(Nn=T,dc="value"in Nn?Nn.value:Nn.textContent,Ya=!0)),At=xs(b,W),0<At.length&&(W=new gr(W,t,null,n,T),M.push({event:W,listeners:At}),Z?W.data=Z:(Z=Er(n),Z!==null&&(W.data=Z)))),(Z=Mm?Bm(t,n):_m(t,n))&&(W=xs(b,"onBeforeInput"),0<W.length&&(At=new gr("onBeforeInput","beforeinput",null,n,T),M.push({event:At,listeners:W}),At.data=Z)),Mg(M,t,b,n,T)}fh(M,e)})}function si(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xs(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ml(t,n),l!=null&&a.unshift(si(t,l,i)),l=Ml(t,e),l!=null&&a.push(si(t,l,i))),t.tag===3)return a;t=t.return}return[]}function Og(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ah(t,e,n,a,l){for(var i=e._reactName,s=[];n!==null&&n!==a;){var c=n,f=c.alternate,b=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||b===null||(f=b,l?(b=Ml(n,i),b!=null&&s.unshift(si(n,b,f))):l||(b=Ml(n,i),b!=null&&s.push(si(n,b,f)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Rg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function mh(t){return(typeof t=="string"?t:""+t).replace(Rg,`
`).replace(xg,"")}function gh(t,e){return e=mh(e),mh(t)===e}function Dt(t,e,n,a,l,i){switch(n){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||ja(t,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&ja(t,""+a);else return;break;case"className":Si(t,"class",a);break;case"tabIndex":Si(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(t,n,a);break;case"style":rr(t,a,i);return;case"data":if(e!=="object"){Si(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Mi(a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&Dt(t,e,"name",l.name,l,null),Dt(t,e,"formEncType",l.formEncType,l,null),Dt(t,e,"formMethod",l.formMethod,l,null),Dt(t,e,"formTarget",l.formTarget,l,null)):(Dt(t,e,"encType",l.encType,l,null),Dt(t,e,"method",l.method,l,null),Dt(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Mi(a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=nn);return;case"onScroll":a!=null&&ft("scroll",t);return;case"onScrollEnd":a!=null&&ft("scrollend",t);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));(i!=null?i.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Mi(a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":ft("beforetoggle",t),ft("toggle",t),Di(t,"popover",a);break;case"xlinkActuate":pn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":pn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":pn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":pn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":pn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":pn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":pn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":pn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":pn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Di(t,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=WA.get(n)||n,Di(t,n,a);else return}gt=!0}function lo(t,e,n,a,l,i){switch(n){case"style":rr(t,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));(i!=null?i.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof a=="string")ja(t,a);else if(typeof a=="number"||typeof a=="bigint")ja(t,""+a);else return;break;case"onScroll":a!=null&&ft("scroll",t);return;case"onScrollEnd":a!=null&&ft("scrollend",t);return;case"onClick":a!=null&&(t.onclick=nn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!tr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),i=n.slice(2,l?n.length-7:void 0),e=t[be]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(i,e,l),typeof a=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(i,a,l);break t}gt=!0,n in t?t[n]=a:a===!0?t.setAttribute(n,""):Di(t,n,a)}return}gt=!0}function oe(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Dt(t,e,i,s,n,null)}}l&&Dt(t,e,"srcSet",n.srcSet,n,null),a&&Dt(t,e,"src",n.src,n,null);return;case"input":ft("invalid",t);var c=i=s=l=null,f=null,b=null;for(a in n)if(n.hasOwnProperty(a)){var T=n[a];if(T!=null)switch(a){case"name":l=T;break;case"type":s=T;break;case"checked":f=T;break;case"defaultChecked":b=T;break;case"value":i=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:Dt(t,e,a,T,n,null)}}sr(t,i,c,f,b,s,l,!1);return;case"select":ft("invalid",t),a=s=i=null;for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:Dt(t,e,l,c,n,null)}e=i,n=s,t.multiple=!!a,e!=null?Ia(t,!!a,e,!1):n!=null&&Ia(t,!!a,n,!0);return;case"textarea":ft("invalid",t),i=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:Dt(t,e,s,c,n,null)}ur(t,a,l,i);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(a=n[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Dt(t,e,f,a,n,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(a=0;a<ii.length;a++)ft(ii[a],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Dt(t,e,b,a,n,null)}return;default:if(sc(e)){for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!==void 0&&lo(t,e,T,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&Dt(t,e,c,a,n,null))}var Ng={};function Ig(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,c=null,f=null,b=null,T=null;for(w in n){var M=n[w];if(n.hasOwnProperty(w)&&M!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":f=M;default:a.hasOwnProperty(w)||Dt(t,e,w,null,a,M)}}for(var g in a){var w=a[g];if(M=n[g],a.hasOwnProperty(g)&&(w!=null||M!=null))switch(g){case"type":w!==M&&(gt=!0),i=w;break;case"name":w!==M&&(gt=!0),l=w;break;case"checked":w!==M&&(gt=!0),b=w;break;case"defaultChecked":w!==M&&(gt=!0),T=w;break;case"value":w!==M&&(gt=!0),s=w;break;case"defaultValue":w!==M&&(gt=!0),c=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,e));break;default:w!==M&&Dt(t,e,g,w,a,M)}}lc(t,s,c,f,b,T,i,l);return;case"select":w=s=c=g=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":w=f;default:a.hasOwnProperty(i)||Dt(t,e,i,null,a,f)}for(l in a)if(i=a[l],f=n[l],a.hasOwnProperty(l)&&(i!=null||f!=null))switch(l){case"value":i!==f&&(gt=!0),g=i;break;case"defaultValue":i!==f&&(gt=!0),c=i;break;case"multiple":i!==f&&(gt=!0),s=i;default:i!==f&&Dt(t,e,l,i,a,f)}e=c,n=s,a=w,g!=null?Ia(t,!!n,g,!1):!!a!=!!n&&(e!=null?Ia(t,!!n,e,!0):Ia(t,!!n,n?[]:"",!1));return;case"textarea":w=g=null;for(c in n)if(l=n[c],n.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Dt(t,e,c,null,a,l)}for(s in a)if(l=a[s],i=n[s],a.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":l!==i&&(gt=!0),g=l;break;case"defaultValue":l!==i&&(gt=!0),w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==i&&Dt(t,e,s,l,a,i)}cr(t,g,w);return;case"option":for(var j in n)if(g=n[j],n.hasOwnProperty(j)&&g!=null&&!a.hasOwnProperty(j))switch(j){case"selected":t.selected=!1;break;default:Dt(t,e,j,null,a,g)}for(f in a)if(g=a[f],w=n[f],a.hasOwnProperty(f)&&g!==w&&(g!=null||w!=null))switch(f){case"selected":g!==w&&(gt=!0),t.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:Dt(t,e,f,g,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in n)g=n[U],n.hasOwnProperty(U)&&g!=null&&!a.hasOwnProperty(U)&&Dt(t,e,U,null,a,g);for(b in a)if(g=a[b],w=n[b],a.hasOwnProperty(b)&&g!==w&&(g!=null||w!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(137,e));break;default:Dt(t,e,b,g,a,w)}return;default:if(sc(e)){for(var st in n)g=n[st],n.hasOwnProperty(st)&&g!==void 0&&!a.hasOwnProperty(st)&&lo(t,e,st,void 0,a,g);for(T in a)g=a[T],w=n[T],!a.hasOwnProperty(T)||g===w||g===void 0&&w===void 0||lo(t,e,T,g,a,w);return}}for(var v in n)g=n[v],n.hasOwnProperty(v)&&g!=null&&!a.hasOwnProperty(v)&&Dt(t,e,v,null,a,g);for(M in a)g=a[M],w=n[M],!a.hasOwnProperty(M)||g===w||g==null&&w==null||Dt(t,e,M,g,a,w)}function ph(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,s=l.initiatorType,c=l.duration;if(i&&c&&ph(s)){for(s=0,c=l.responseEnd,a+=1;a<n.length;a++){var f=n[a],b=f.startTime;if(b>c)break;var T=f.transferSize,M=f.initiatorType;T&&ph(M)&&(f=f.responseEnd,s+=T*(f<c?1:(c-b)/(f-b)))}if(--a,e+=8*(i+s)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var io=null,so=null;function ci(t){return t.nodeType===9?t:t.ownerDocument}function vh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function yh(t,e,n,a){return n=ci(n).createElement(t),n[le]=a,n[be]=e,oe(n,t,e),$t(n),n}function co(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uo=null;function Gg(){var t=window.event;return t&&t.type==="popstate"?t===uo?!1:(uo=t,!0):(uo=null,!1)}var oo=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,Eh=typeof requestAnimationFrame=="function"?requestAnimationFrame:oo,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(t){return wh.resolve(null).then(t).catch(Lg)}:oo;function Lg(t){setTimeout(function(){throw t})}function ta(t){return t==="head"}function Th(t,e){var n=e,a=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(l),bl(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")vo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,vo(n);for(var i=n.firstChild;i;){var s=i.nextSibling,c=i.nodeName;i[Dl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=s}}else n==="body"&&vo(t.ownerDocument.body);n=l}while(n);bl(e)}function Ch(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function Dh(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var a=1;else for(var l=a=0;l<e.length;l++){var i=e[l];0<i.width&&0<i.height&&a++}a===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function Sh(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Hg(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function ro(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return Hg(e,n,t)}function Ug(t){return t.documentElement.clientHeight}function Vg(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Xg(t,e,n,a,l,i,s,c,f){var b=e.nodeType===9?e:e.ownerDocument;try{var T=b.startViewTransition({update:function(){var g=b.defaultView,w=g.navigation&&g.navigation.transition,j=b.fonts.status;a();var U=[];if(j==="loaded"&&(Ug(b),b.fonts.status==="loading"&&U.push(b.fonts.ready)),j=U.length,t!==null)for(var st=t.suspenseyImages,v=0,A=0;A<st.length;A++){var y=st[A];if(!y.complete){var S=y.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<g.innerHeight&&S.left<g.innerWidth){if(v+=Jh(y),v>js){U.length=j;break}y=new Promise(Vg.bind(y)),U.push(y)}}}if(0<U.length)return g=Promise.race([Promise.all(U),new Promise(function(L){return setTimeout(L,500)})]).then(l,l),(w?Promise.allSettled([w.finished,g]):g).then(i,i);if(l(),w)return w.finished.then(i,i);i()},types:n});b.__reactViewTransition=T;var M=[];return T.ready.then(function(){for(var g=b.documentElement.getAnimations({subtree:!0}),w=0;w<g.length;w++){var j=g[w],U=j.effect,st=U.pseudoElement;if(st!=null&&st.startsWith("::view-transition")){M.push(j),j=U.getKeyframes();for(var v=st=void 0,A=!0,y=0;y<j.length;y++){var S=j[y],L=S.width;if(st===void 0)st=L;else if(st!==L){A=!1;break}if(L=S.height,v===void 0)v=L;else if(v!==L){A=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}A&&st!==void 0&&v!==void 0&&(U.setKeyframes(j),A=getComputedStyle(U.target,U.pseudoElement),A.width!==st||A.height!==v)&&(A=j[0],A.width=st,A.height=v,A=j[j.length-1],A.width=st,A.height=v,U.setKeyframes(j))}}s()},function(g){b.__reactViewTransition===T&&(b.__reactViewTransition=null);try{if(typeof g=="object"&&g!==null)switch(g.name){case"InvalidStateError":(g.message==="View transition was skipped because document visibility state is hidden."||g.message==="Skipping view transition because document visibility state has become hidden."||g.message==="Skipping view transition because viewport size changed."||g.message==="Transition was aborted because of invalid state")&&(g=null)}g!==null&&f(g)}finally{a(),l(),s()}}),T.finished.finally(function(){for(var g=0;g<M.length;g++)M[g].cancel();b.__reactViewTransition===T&&(b.__reactViewTransition=null),c()}),T}catch{return a(),l(),s(),null}}function Ba(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ba.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:tt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Ba.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var i=n[l].effect;i!==null&&i.target===t&&i.pseudoElement===e&&a.push(n[l])}return a},Ba.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Mh(t){return{name:t,group:new Ba("group",t),imagePair:new Ba("image-pair",t),old:new Ba("old",t),new:new Ba("new",t)}}function Ge(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ge.prototype.addEventListener=function(t,e,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(_h(i,t,e,n)===-1){var s=this,c=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(c=function(f){s.removeEventListener(t,e,n),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(l=s.removeEventListener.bind(s,t,e,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=hl(n),i.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:c,cleanup:l}),E(this._fragmentFiber.child,!1,kg,t,c,a)}this._eventListeners=i}};function kg(t,e,n,a){return at(t).addEventListener(e,n,a),!1}Ge.prototype.removeEventListener=function(t,e,n){var a=this._eventListeners;if(a!==null&&(e=_h(a,t,e,n),e!==-1)){var l=a[e];n=l.attachedListener;var i=l.cleanup;l=hl(l.optionsOrUseCapture),E(this._fragmentFiber.child,!1,qg,t,n,l),a.splice(e,1),i!==null&&i()}};function qg(t,e,n,a){return at(t).removeEventListener(e,n,a),!1}function hl(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Bh(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function _h(t,e,n,a){if(t.length===0)return-1;a=Bh(a);for(var l=0;l<t.length;l++){var i=t[l];if(i.type===e&&i.listener===n&&Bh(i.optionsOrUseCapture)===a)return l}return-1}Ge.prototype.dispatchEvent=function(t){var e=_(this._fragmentFiber);if(e===null)return!0;e=at(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var i=n[l];a.addEventListener(i.type,i.attachedListener,hl(i.optionsOrUseCapture))}if(e.appendChild(a),t=a.dispatchEvent(t),n)for(l=0;l<n.length;l++)i=n[l],a.removeEventListener(i.type,i.attachedListener,hl(i.optionsOrUseCapture));return e.removeChild(a),t}return e.dispatchEvent(t)},Ge.prototype.focus=function(t){E(this._fragmentFiber.child,!0,zh,t,void 0,void 0)};function zh(t,e){return t.tag===6?!1:(t=at(t),lp(t,e))}Ge.prototype.focusLast=function(t){var e=[];E(this._fragmentFiber.child,!0,fo,e,void 0,void 0);for(var n=e.length-1;0<=n&&!zh(e[n],t);n--);};function fo(t,e){return e.push(t),!1}Ge.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=at(t),t=ci(t).activeElement,t!==null&&E(this._fragmentFiber.child,!1,Jg,t,void 0,void 0))};function Jg(t,e){return t.tag===6?!1:(t=at(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Ge.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),E(this._fragmentFiber.child,!1,Kg,t,void 0,void 0)};function Kg(t,e){return t.tag===6||(t=at(t),e.observe(t)),!1}Ge.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),E(this._fragmentFiber.child,!1,Zg,t,void 0,void 0);for(var n=e=0;n<en.length;n++){var a=en[n];a.fragmentInstance===this&&a.observer===t?t.unobserve(a.instance):en[e++]=a}en.length=e}};function Zg(t,e){return t.tag===6||(t=at(t),e.unobserve(t)),!1}var en=[],ho=!1;function Pg(t,e,n){en.push({fragmentInstance:t,observer:e,instance:n}),ho||(ho=!0,ip(function(){ho=!1;var a=en;en=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}Ge.prototype.getClientRects=function(){var t=[];return E(this._fragmentFiber.child,!1,Fg,t,void 0,void 0),t};function Fg(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=at(t),e.push.apply(e,t.getClientRects());return!1}Ge.prototype.getRootNode=function(t){var e=_(this._fragmentFiber);return e===null?this:at(e).getRootNode(t)},Ge.prototype.compareDocumentPosition=function(t){var e=_(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];E(this._fragmentFiber.child,!1,fo,n,void 0,void 0);var a=at(e);if(n.length===0){if(n=a,nt(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var l=a=n.compareDocumentPosition(t);return n===t?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=K(e)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=at(n).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=at(n[0]),l=at(n[n.length-1]);var i=nt(this._fragmentFiber)?e.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),c=l.compareDocumentPosition(t),f=s&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&i&&s&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===t||i&&l===t||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===t||!i&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Wg(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Wg(t,e,n,a,l){var i=ca(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){n=!0;break t}i=i.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;t:{for(i=e,e=_(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===n)&&(e=bt(n,i,Kt),e===null?e=!1:(E(e,!0,Ft,i,n),i=vt,vt=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===a)&&(e=bt(a,i,Kt),e===null?e=!1:(E(e,!0,jt,i,a),i=vt,F=vt=null,e=i!==null)),e):!1}function Oh(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ge.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(o(566));var e=[];E(this._fragmentFiber.child,!1,fo,e,void 0,void 0);var n=t!==!1;if(e.length===0){var a=K(this._fragmentFiber);if(a=n?a[1]||a[0]||_(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){t=at(a),Oh(t,n);return}if(a=at(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(t);return}a.scrollIntoView(t)}}for(a=n?e.length-1:0;a!==(n?-1:e.length);){var l=e[a];l.tag===6?(l=at(l),Oh(l,n)):at(l).scrollIntoView(t),a+=n?-1:1}};function $g(t,e){return t=at(t),Rh(t,e),!1}function Rh(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function xh(t,e){var n=e._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];t.addEventListener(l.type,l.attachedListener,hl(l.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(i){for(var s=0,c=0;c<en.length;c++){var f=en[c];(f.fragmentInstance!==e||f.observer!==i||f.instance!==t)&&(en[s++]=f)}en.length=s,i.observe(t)}),Rh(t,e))}function tp(t,e){var n=e._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];t.removeEventListener(l.type,l.attachedListener,hl(l.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?Pg(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Ao(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ao(n),Ci(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ep(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Dl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Je(t.nextSibling),t===null)break}return null}function np(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Je(t.nextSibling),t===null))return null;return t}function Nh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Je(t.nextSibling),t===null))return null;return t}function mo(t){return t.data==="$?"||t.data==="$~"}function go(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ap(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Je(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var po=null;function Ih(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Je(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function lp(t,e){function n(){a=!0}if(t.ownerDocument.activeElement===t)return!0;var a=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return a}function ip(t){Eh(function(){Eh(function(e){return t(e)})})}function Gh(t,e,n){switch(e=ci(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Qh(t,e,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&Dt(t,e,a,null,Ng,l)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===nn&&(t.onclick=null),Ci(t)}function vo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ci(t)}var Ke=new Map,Yh=new Set;function ui(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var zn=G.d;G.d={f:sp,r:cp,D:up,C:op,L:rp,m:dp,X:hp,S:fp,M:Ap};function sp(){var t=zn.f(),e=Ms();return t||e}function cp(t){var e=Ra(t);e!==null&&e.tag===5&&e.type==="form"?Ld(e):zn.r(t)}var Al=typeof document>"u"?null:document;function Lh(t,e,n){var a=Al;if(a&&typeof e=="string"&&e){var l=Le(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Yh.has(l)||(Yh.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),oe(e,"link",t),$t(e),a.head.appendChild(e)))}}function up(t){zn.D(t),Lh("dns-prefetch",t,null)}function op(t,e){zn.C(t,e),Lh("preconnect",t,e)}function rp(t,e,n){zn.L(t,e,n);var a=Al;if(a&&t&&e){var l='link[rel="preload"][as="'+Le(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Le(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Le(n.imageSizes)+'"]')):l+='[href="'+Le(t)+'"]';var i=l;switch(e){case"style":i=ml(t);break;case"script":i=gl(t)}if(!(Ke.has(i)||(t=tt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ke.set(i,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(oi(i))||e==="script"&&a.querySelector(ri(i))))){var s=a.createElement("link");oe(s,"link",t),e==="style"&&(s[Ti]=!0,s.onload=s.onerror=function(){Wo(s)}),$t(s),a.head.appendChild(s)}}}function dp(t,e){zn.m(t,e);var n=Al;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Le(a)+'"][href="'+Le(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=gl(t)}if(!Ke.has(i)&&(t=tt({rel:"modulepreload",href:t},e),Ke.set(i,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ri(i)))return}a=n.createElement("link"),oe(a,"link",t),$t(a),n.head.appendChild(a)}}}function fp(t,e,n){zn.S(t,e,n);var a=Al;if(a&&t){var l=xa(a).hoistableStyles,i=ml(t);e=e||"default";var s=l.get(i);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(oi(i)))c.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ke.get(i))&&bo(t,n);var f=s=a.createElement("link");$t(f),oe(f,"link",t),f._p=new Promise(function(b,T){f.onload=b,f.onerror=T}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ns(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},l.set(i,s)}}}function hp(t,e){zn.X(t,e);var n=Al;if(n&&t){var a=xa(n).hoistableScripts,l=gl(t),i=a.get(l);i||(i=n.querySelector(ri(l)),i||(t=tt({src:t,async:!0},e),(e=Ke.get(l))&&yo(t,e),i=n.createElement("script"),$t(i),oe(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ap(t,e){zn.M(t,e);var n=Al;if(n&&t){var a=xa(n).hoistableScripts,l=gl(t),i=a.get(l);i||(i=n.querySelector(ri(l)),i||(t=tt({src:t,async:!0,type:"module"},e),(e=Ke.get(l))&&yo(t,e),i=n.createElement("script"),$t(i),oe(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Hh(t,e,n,a){var l=(l=ve.current)?ui(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ml(n.href),e=xa(l).hoistableStyles,a=e.get(n),a||(a={type:"style",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ml(n.href);var i=xa(l).hoistableStyles,s=i.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=l.querySelector(oi(t)))?i._p||(s.instance=i,s.state.loading=5):(i=Ke.get(t),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ke.set(t,i)),mp(l,t,i,s.state))),e&&a===null)throw Error(o(528,""));return s}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=gl(n),e=xa(l).hoistableScripts,a=e.get(n),a||(a={type:"script",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function ml(t){return'href="'+Le(t)+'"'}function oi(t){return'link[rel="stylesheet"]['+t+"]"}function Uh(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function mp(t,e,n,a){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ti]!==!0){a.loading=1;return}}else e=t.createElement("link"),e[Ti]=!0,e.onload=e.onerror=Wo.bind(null,e),oe(e,"link",n),$t(e),t.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function gl(t){return'[src="'+Le(t)+'"]'}function ri(t){return"script[async]"+t}function Vh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Le(n.href)+'"]');if(a)return e.instance=a,$t(a),a;var l=tt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),$t(a),oe(a,"style",l),Ns(a,n.precedence,t),e.instance=a;case"stylesheet":l=ml(n.href);var i=t.querySelector(oi(l));if(i)return e.state.loading|=4,e.instance=i,$t(i),i;a=Uh(n),(l=Ke.get(l))&&bo(a,l),i=(t.ownerDocument||t).createElement("link"),$t(i);var s=i;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),oe(i,"link",a),e.state.loading|=4,Ns(i,n.precedence,t),e.instance=i;case"script":return i=gl(n.src),(l=t.querySelector(ri(i)))?(e.instance=l,$t(l),l):(a=n,(l=Ke.get(i))&&(a=tt({},n),yo(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),$t(l),oe(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ns(a,n.precedence,t));return e.instance}function Ns(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function bo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function yo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Is=null;function Xh(t,e,n){if(Is===null){var a=new Map,l=Is=new Map;l.set(n,a)}else l=Is,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var i=n[l];if(!(i[Dl]||i[le]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var c=a.get(s);c?c.push(i):a.set(s,[i])}}return a}function wo(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function gp(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function kh(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function qh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jh(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Kh(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Jh(e),t.suspenseyImages.push(e)),t=bp.bind(t),e.decode().then(t,t))}function pp(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ml(a.href),i=e.querySelector(oi(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=di.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=i,$t(i);return}i=e.ownerDocument||e,a=Uh(a),(l=Ke.get(l))&&bo(a,l),i=i.createElement("link"),$t(i);var s=i;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),oe(i,"link",a),n.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=di.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var js=0;function vp(t,e){return t.stylesheets&&t.count===0&&Qs(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&Qs(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&js===0&&(js=62500*jg());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qs(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>js?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Zh(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Qs(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function di(){this.count--,Zh(this)}function bp(){this.imgCount--,Zh(this)}var Gs=null;function Qs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gs=new Map,e.forEach(yp,t),Gs=null,di.call(t))}function yp(t,e){if(!(e.state.loading&4)){var n=Gs.get(t);if(n)var a=n.get(null);else{n=new Map,Gs.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=e.instance,s=l.getAttribute("data-precedence"),i=n.get(s)||a,i===a&&n.set(null,l),n.set(s,l),this.count++,a=di.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var pl={$$typeof:St,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function wp(t,e,n,a,l,i,s,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.hiddenUpdates=tc(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ph(t,e,n,a,l,i,s,c,f,b,T,M){return t=new wp(t,e,n,s,f,b,T,M,c),e=1,i===!0&&(e|=24),i=ye(3,null,null,e),t.current=i,i.stateNode=t,e=Ic(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:e},Yc(i),t}function Fh(t){return t?(t=Va,t):Va}function Wh(t,e,n,a,l,i){l=Fh(l),a.context===null?a.context=l:a.pendingContext=l,a=Un(e),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Vn(t,a,e),n!==null&&(Ce(n,t,e),Ul(n,t,e))}function $h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eo(t,e){$h(t,e),(t=t.alternate)&&$h(t,e)}function tA(t){if(t.tag===13||t.tag===31){var e=da(t,67108864);e!==null&&Ce(e,t,67108864),Eo(t,67108864)}}function eA(t){if(t.tag===13||t.tag===31){var e=je();e=ec(e);var n=da(t,e);n!==null&&Ce(n,t,e),Eo(t,e)}}var vl=!0;function Ep(t,e,n,a){var l=O.T;O.T=null;var i=G.p;try{G.p=2,To(t,e,n,a)}finally{G.p=i,O.T=l}}function Tp(t,e,n,a){var l=O.T;O.T=null;var i=G.p;try{G.p=8,To(t,e,n,a)}finally{G.p=i,O.T=l}}function To(t,e,n,a){if(vl){var l=Co(a);if(l===null)ao(t,e,a,Ys,n),aA(t,a);else if(Dp(l,t,e,n,a))a.stopPropagation();else if(aA(t,a),e&4&&-1<Cp.indexOf(t)){for(;l!==null;){var i=Ra(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=sa(i.pendingLanes);if(s!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-_e(s);c.entanglements[1]|=f,s&=~f}hn(i),(yt&6)===0&&(Cs=Me()+500,li(0))}}break;case 31:case 13:c=da(i,2),c!==null&&Ce(c,i,2),Ms(),Eo(i,2)}if(i=Co(a),i===null&&ao(t,e,a,Ys,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else ao(t,e,a,null,n)}}function Co(t){return t=uc(t),Do(t)}var Ys=null;function Do(t){if(Ys=null,t=ca(t),t!==null){var e=D(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=z(e),t!==null)return t;t=null}else if(n===31){if(t=C(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ys=t,null}function nA(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jA()){case Lo:return 2;case Ho:return 8;case vi:case GA:return 32;case Uo:return 268435456;default:return 32}default:return 32}}var So=!1,ea=null,na=null,aa=null,fi=new Map,hi=new Map,la=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function aA(t,e){switch(t){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(e.pointerId)}}function Ai(t,e,n,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Ra(e),e!==null&&tA(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Dp(t,e,n,a,l){switch(e){case"focusin":return ea=Ai(ea,t,e,n,a,l),!0;case"dragenter":return na=Ai(na,t,e,n,a,l),!0;case"mouseover":return aa=Ai(aa,t,e,n,a,l),!0;case"pointerover":var i=l.pointerId;return fi.set(i,Ai(fi.get(i)||null,t,e,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,hi.set(i,Ai(hi.get(i)||null,t,e,n,a,l)),!0}return!1}function lA(t){var e=ca(t.target);if(e!==null){var n=D(e);if(n!==null){if(e=n.tag,e===13){if(e=z(n),e!==null){t.blockedOn=e,Zo(t.priority,function(){eA(n)});return}}else if(e===31){if(e=C(n),e!==null){t.blockedOn=e,Zo(t.priority,function(){eA(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ls(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Co(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);cc=a,n.target.dispatchEvent(a),cc=null}else return e=Ra(n),e!==null&&tA(e),t.blockedOn=n,!1;e.shift()}return!0}function iA(t,e,n){Ls(t)&&n.delete(e)}function Sp(){So=!1,ea!==null&&Ls(ea)&&(ea=null),na!==null&&Ls(na)&&(na=null),aa!==null&&Ls(aa)&&(aa=null),fi.forEach(iA),hi.forEach(iA)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,So||(So=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Sp)))}var Us=null;function sA(t){Us!==t&&(Us=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Us===t&&(Us=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(Do(a||n)===null)continue;break}var i=Ra(n);i!==null&&(t.splice(e,3),e-=3,su(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function bl(t){function e(f){return Hs(f,t)}ea!==null&&Hs(ea,t),na!==null&&Hs(na,t),aa!==null&&Hs(aa,t),fi.forEach(e),hi.forEach(e);for(var n=0;n<la.length;n++){var a=la[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<la.length&&(n=la[0],n.blockedOn===null);)lA(n),n.blockedOn===null&&la.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],s=l[be]||null;if(typeof i=="function")s||sA(n);else if(s){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[be]||null)c=s.formAction;else if(Do(l)!==null)continue}else c=s.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),sA(n)}}}function cA(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Mo(t){this._internalRoot=t}Vs.prototype.render=Mo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,a=je();Wh(n,a,t,e,null,null)},Vs.prototype.unmount=Mo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wh(t.current,2,null,t,null,null),Ms(),e[Oa]=null}};function Vs(t){this._internalRoot=t}Vs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ko();t={blockedOn:null,target:t,priority:e};for(var n=0;n<la.length&&e!==0&&e<la[n].priority;n++);la.splice(n,0,t),n===0&&lA(t)}};var uA=d.version;if(uA!=="19.3.0")throw Error(o(527,uA,"19.3.0"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=V(e),t=t!==null?R(t):null,t=t===null?null:t.stateNode,t};var Mp={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{El=Xs.inject(Mp),Be=Xs}catch{}}return gi.createRoot=function(t,e){if(!p(t))throw Error(o(299));var n=!1,a="",l=Pd,i=Fd,s=Wd;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ph(t,1,!1,null,null,n,a,null,l,i,s,cA),t[Oa]=e.current,no(t),new Mo(e)},gi.hydrateRoot=function(t,e,n){if(!p(t))throw Error(o(299));var a=!1,l="",i=Pd,s=Fd,c=Wd,f=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),e=Ph(t,1,!0,e,n??null,a,l,f,i,s,c,cA),e.context=Fh(null),n=e.current,a=je(),a=ec(a),l=Un(a),l.callback=null,Vn(n,l,a),n=a,e.current.lanes=n,Cl(e,n),hn(e),t[Oa]=e.current,no(t),new Vs(e)},gi.version="19.3.0",gi}var vA;function Lp(){if(vA)return zo.exports;vA=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),zo.exports=Yp(),zo.exports}var Hp=Lp();const Up=DA(Hp),Vp=["projects","about","experience","contact","doom"],Xp={projects:{en:"Projects",zh:"项目"},about:{en:"About",zh:"关于"},experience:{en:"Experience",zh:"经历"},contact:{en:"Contact",zh:"联系"},doom:{en:"DOOM",zh:"毁灭战士"}},SA={projects:{en:"Projects",zh:"项目"},about:{en:"README.txt",zh:"README.txt"},experience:{en:"Experience.exe",zh:"经历.exe"},contact:{en:"Contact",zh:"联系"},doom:{en:"DOOM.exe",zh:"DOOM.exe"}};function bA(u,d){if(d.type==="showDesktop"){const o=u.some(p=>!p.minimized);return u.map(p=>({...p,minimized:o}))}const r=u.find(o=>o.id===d.id);return d.type==="close"?u.filter(o=>o.id!==d.id):d.type==="open"?[...u.filter(o=>o.id!==d.id),{id:d.id,minimized:!1,maximized:(r==null?void 0:r.maximized)??!1}]:u.map(o=>o.id!==d.id?o:d.type==="minimize"?{...o,minimized:!0}:{...o,maximized:!o.maximized})}class kp{constructor(d){re(this,"targets",new Map);re(this,"revision",0);re(this,"listeners",new Set);this.isVisible=d}register(d,r){return this.targets.set(d.id,{...d,element:r}),this.publish(),()=>{var o;((o=this.targets.get(d.id))==null?void 0:o.element)===r&&(this.targets.delete(d.id),this.publish())}}getRevision(){return this.revision}subscribe(d){return this.listeners.add(d),()=>this.listeners.delete(d)}waitFor(d,r){return d()?Promise.resolve():new Promise((o,p)=>{const D=()=>{N(),r==null||r.removeEventListener("abort",C),o()},z=()=>{d()&&D()},C=()=>{N(),p(new DOMException("Aborted","AbortError"))},N=this.subscribe(z);r==null||r.addEventListener("abort",C,{once:!0}),z()})}ready(d){return[...this.targets.values()].some(r=>r.scope.window===d.activeWindow&&(!r.scope.panel||r.scope.panel===d.activePanel)&&r.element.isConnected&&this.isVisible(r.element)&&r.capabilities.includes("guideTo"))}waitForReady(d,r){return this.waitFor(()=>this.ready(d),r)}completion(d){var r;return(r=this.targets.get(d))==null?void 0:r.completion}snapshot(d){return[...this.targets.values()].sort((r,o)=>r.id.localeCompare(o.id)).flatMap(r=>{const o=this.matchesScope(r.scope,d)&&r.element.isConnected&&r.capabilities.includes("guideTo"),p=o&&this.isVisible(r.element);return o?[{id:r.id,available:p,visible:p,guideable:o,capabilities:r.capabilities,names:r.names,...r.projectId?{projectId:r.projectId}:{},...r.tag?{tag:r.tag}:{}}]:[]})}resolve(d,r,o){const p=this.targets.get(d);return!p||!p.capabilities.includes(r)?{element:null,reason:"target-unregistered"}:!this.matchesScope(p.scope,o)||!p.element.isConnected||r==="highlight"&&!this.isVisible(p.element)?{element:null,reason:"target-unavailable"}:{element:p.element}}direction(d,r){var C;const o=this.targets.get(d);if(!o||!this.matchesScope(o.scope,r)||!o.element.isConnected)return"unavailable";const p=o.element.getBoundingClientRect();if(this.isVisible(o.element))return"visible";const z=((C=o.element.closest(".content-scroll"))==null?void 0:C.getBoundingClientRect())??{top:0,bottom:innerHeight,left:0,right:innerWidth};return p.bottom<=z.top?"above":p.top>=z.bottom?"below":p.right<=z.left?"left":p.left>=z.right?"right":"unavailable"}matchesScope(d,r){return(!d.window||d.window===r.activeWindow)&&(!d.panel||d.panel===r.activePanel)}publish(){this.revision++,this.listeners.forEach(d=>d())}}function MA(u){var p;if(u.closest("[hidden]")||!u.getClientRects().length)return!1;const d=u.closest(".desktop-window");if(d&&!d.classList.contains("active"))return!1;const r=u.getBoundingClientRect(),o=(p=u.closest(".content-scroll"))==null?void 0:p.getBoundingClientRect();return r.bottom>Math.max(0,(o==null?void 0:o.top)??0)&&r.top<Math.min(innerHeight,(o==null?void 0:o.bottom)??innerHeight)&&r.right>0&&r.left<innerWidth}function qp(u){var nt;const[d,r]=Q.useState({windows:[],aboutTab:"profile"}),o=Q.useRef(d),p=Q.useRef(0),D=Q.useRef(new kp(MA)).current;Q.useEffect(()=>{p.current++},[u]),Q.useEffect(()=>{const K=()=>{p.current++};return window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)},[]);const z=(nt=d.windows.filter(K=>!K.minimized).at(-1))==null?void 0:nt.id,C=K=>{o.current=K,p.current++,r(K)},N=K=>C({...o.current,windows:bA(o.current.windows,K)});return{state:d,active:z,dispatch:N,reset:()=>C({windows:[],aboutTab:"profile"}),navigate:K=>{const pt=o.current.windows.filter(F=>!F.minimized).at(-1),at=o.current.windows.find(F=>F.id===K),vt=(pt==null?void 0:pt.maximized)??(at==null?void 0:at.maximized)??!1;C({...o.current,windows:[...o.current.windows.filter(F=>F.id!==K),{id:K,minimized:!1,maximized:vt}]})},selectTab:K=>C({...o.current,aboutTab:K,windows:bA(o.current.windows,{type:"open",id:"about"})}),snapshot:()=>{var at;const K=((at=o.current.windows.filter(vt=>!vt.minimized).at(-1))==null?void 0:at.id)??null,pt=K==="about"?o.current.aboutTab:K==="projects"?"collection":K!=null&&K.startsWith("project:")?"detail":"";return{language:u,contextVersion:p.current,activeWindow:K,activePanel:pt,windows:o.current.windows.map(vt=>vt.id),aboutTab:o.current.aboutTab,targets:D.snapshot({activeWindow:K,activePanel:pt})}},version:p,targetRegistry:D,touch:()=>{p.current++},open:K=>N({type:"open",id:K})}}const BA=Q.createContext(null);function Jp({language:u,children:d}){const r=qp(u);return h.jsx(BA.Provider,{value:r,children:d})}function wl(){const u=Q.useContext(BA);if(!u)throw new Error("Missing DesktopProvider");return u}function _a(u){var o,p;const d=wl(),r=Q.useRef(null);return Q.useEffect(()=>{if(r.current)return d.targetRegistry.register(u,r.current)},[d.targetRegistry,u.id,u.names.en,u.names.zh,u.scope.window,u.scope.panel,u.capabilities.join("|"),u.projectId,u.tag,(o=u.completion)==null?void 0:o.window,(p=u.completion)==null?void 0:p.panel]),r}const yA="";class Kp{constructor(){re(this,"token","");re(this,"configured",!1)}async session(d){if(this.token)return;const r=await fetch(`${yA}/api/session`,{method:"POST",signal:d});if(!r.ok)throw new Error("CRT.AGENT server unavailable / 后端未连接");const o=await r.json();this.token=o.token,this.configured=o.configured}async request(d,r,o,p="POST"){await this.session(o);const D=await fetch(`${yA}/api${d}`,{method:p,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:r===void 0?void 0:JSON.stringify(r),signal:o});if(!D.ok){D.status===401&&(this.token="");let z="Ghost unavailable / 服务暂不可用";try{const C=await D.json();typeof C.detail=="string"&&(z=C.detail)}catch{}throw new Error(z)}return D}async*stream(d,r,o){const p=await this.request(d,r,o);if(!p.body)throw new Error("Missing stream");const D=p.body.getReader(),z=new TextDecoder;let C="";try{for(;;){const{done:N,value:V}=await D.read();if(N)break;C+=z.decode(V,{stream:!0}).replace(/\r/g,"");let R;for(;(R=C.indexOf(`

`))>=0;){const E=C.slice(0,R);C=C.slice(R+2);const _=E.split(`
`).filter(nt=>nt.startsWith("data:")).map(nt=>nt.slice(5).trim()).join(`
`);_&&(yield JSON.parse(_))}}}finally{await D.cancel().catch(()=>{}),D.releaseLock()}}cancel(d){if(this.token)return this.request(`/runs/${encodeURIComponent(d)}/cancel`).catch(()=>{})}async clear(){this.token&&await this.request("/session",void 0,void 0,"DELETE").catch(()=>{}),this.token=""}}class Zp{constructor(d){re(this,"events",[]);re(this,"lastActivity",performance.now());re(this,"entered",performance.now());re(this,"hover","");re(this,"lastView","");re(this,"dwellRecorded",!1);re(this,"meaningful",!1);re(this,"pageActivity",!1);re(this,"hoverTarget",d=>{var p,D;const r=performance.now();this.lastActivity=r,this.pageActivity=!0;const o=((p=d.target.closest("[data-agent-id]"))==null?void 0:p.dataset.agentId)||"";o!==this.hover&&(this.hover&&this.record("hover",this.hover,(r-this.entered)/1e3),this.hover=((D=this.metadata(o))==null?void 0:D.target)||"",this.entered=r,this.dwellRecorded=!1)});re(this,"click",d=>{var o;this.lastActivity=performance.now(),this.pageActivity=!0;const r=((o=d.target.closest("[data-agent-id]"))==null?void 0:o.dataset.agentId)||"";this.metadata(r)&&this.record("click",r)});re(this,"visibility",()=>{this.entered=performance.now(),this.hover="",this.dwellRecorded=!1,this.events.push({type:"visibility",target:"page",duration:0})});this.context=d}metadata(d){const r=this.context().targets.find(o=>o.id===d&&o.available);return r?{target:r.id,...r.projectId?{projectId:r.projectId}:{},...r.tag?{tag:r.tag}:{}}:null}push(d){this.events.push(d),this.events=this.events.slice(-60),d.type!=="visibility"&&(this.meaningful=!0)}record(d,r,o=0){const p=this.metadata(r);p&&this.push({type:d,...p,duration:o})}attach(){return document.addEventListener("pointerover",this.hoverTarget,{passive:!0}),document.addEventListener("click",this.click),document.addEventListener("visibilitychange",this.visibility),()=>{document.removeEventListener("pointerover",this.hoverTarget),document.removeEventListener("click",this.click),document.removeEventListener("visibilitychange",this.visibility)}}tick(d){if(document.hidden)return;const r=`${d.activeWindow||"desktop"}:${d.activePanel}`;r!==this.lastView&&(this.lastView=r,this.events.push({type:"visit",target:r,duration:0}),this.meaningful=!0);const o=(performance.now()-this.entered)/1e3;this.hover&&!this.dwellRecorded&&o>=5&&(this.record("dwell",this.hover,o),this.dwellRecorded=!0)}consumeMeaningfulInteraction(){const d=this.meaningful;return this.meaningful=!1,d}consumePageActivity(){const d=this.pageActivity;return this.pageActivity=!1,d}snapshot({locale:d,dnd:r,proactiveCount:o}){const p=this.context(),D=performance.now(),z=this.events.slice(-59);return this.hover&&!document.hidden&&z.push({type:"hover",...this.metadata(this.hover),duration:(D-this.entered)/1e3}),{route:p.activeWindow||"desktop",window:p.activeWindow,activePanel:p.activePanel,locale:d,dnd:r,proactiveCount:o,events:z,idleSeconds:Math.min(7200,(D-this.lastActivity)/1e3)}}}function wA(u){if(/[\u3400-\u9fff]/.test(u))return"zh";if(/[A-Za-z]/.test(u))return"en"}function Pp(u){if(!u||typeof u!="object")return null;const d=u;return typeof d.type!="string"||typeof d.target!="string"||typeof d.value!="string"||d.value.length>200||d.target.length>160||!/^[a-zA-Z0-9:_-]*$/.test(d.target)||!["speak","setState","highlight","guideTo","showHint","showRecommendation"].includes(d.type)||["highlight","guideTo"].includes(d.type)&&!d.target||!["highlight","guideTo"].includes(d.type)&&d.target||["speak","showHint","showRecommendation"].includes(d.type)&&!d.value.trim()||d.type==="setState"&&!["idle","observing","thinking","speaking","guiding","dozing","sleeping","waking"].includes(d.value)?null:d}function Fp(u,d){const r=Pp(u);if(!r)return{instruction:null,reason:"malformed-or-unknown"};if(r.type==="highlight"||r.type==="guideTo"){const o=d.find(p=>p.id===r.target);if(!(o!=null&&o.capabilities.includes(r.type))||(r.type==="highlight"?!(o.visible??o.available):!(o.guideable??o.available)))return{instruction:null,reason:"target-unavailable"}}return{instruction:r}}const Wp={firstEvaluationMs:3e4,cooldownMs:9e4,maxMessages:2,maxUnanswered:2,dwellSeconds:5,allowLightInvite:!0};function EA(u,d,r){const o=r==null?void 0:r.names[u];return d==="invite"?u==="zh"?"需要我帮你快速定位一个项目或经历吗？":"Would you like a quick guide to a project or experience?":u==="zh"?`想了解${o||"这个项目"}的背景或关键成果吗？`:`Would you like a concise walkthrough of ${o||"this project"}?`}function $p(u,d,r,o,p=Wp){if(u.dnd||o-r.startedAt<p.firstEvaluationMs||r.proactiveCount>=p.maxMessages||r.unanswered>=p.maxUnanswered)return{kind:"silent"};if(r.lastMessageAt!==null&&o-r.lastMessageAt<p.cooldownMs)return{kind:"silent"};const D=u.events.slice().reverse().find(z=>z.type==="dwell"&&z.duration>=p.dwellSeconds||z.type==="click"&&(!!z.projectId||!!z.tag)||z.type==="visit"&&z.target.startsWith("project:"));if(D){const z=d.find(C=>C.id===D.target)||d.find(C=>C.projectId===D.projectId&&C.available);return{kind:"recommendation",message:EA(u.locale,"recommendation",z)}}return p.allowLightInvite&&!r.lightInviteUsed?{kind:"invite",message:EA(u.locale,"invite")}:{kind:"silent"}}function tv(u,d){return u==="sleeping"?["waking","idle"]:u==="dozing"&&d==="interaction"?["observing"]:["thinking"]}function ev(u,d,r=60,o=120){return u==="sleeping"?u:d>=o?"sleeping":u==="idle"&&d>=r?"dozing":u}const nv=["speak","setState","highlight","guideTo","showHint","showRecommendation"];function av(u,d,r,o,p){return{state:u,observations:((d==null?void 0:d.events)||[]).slice(-8).map(({type:D,target:z,projectId:C,tag:N})=>({type:D,target:z,...C?{projectId:C}:{},...N?{tag:N}:{}})),targets:r.filter(D=>D.available).map(D=>({id:D.id,en:D.names.en,zh:D.names.zh,capabilities:D.capabilities})),allowedActions:nv,tools:o.filter(D=>D==="searchKnowledge"||D==="readKnowledge"||D==="present").slice(-8),sources:p.slice(-8).map(D=>({title:D.title,...D.url?{url:D.url}:{},...D.sourceType?{sourceType:D.sourceType}:{}}))}}function ks(u){window.dispatchEvent(new CustomEvent("crt-agent-cue",{detail:{...u,until:u.persistent?Number.POSITIVE_INFINITY:Object.keys(u).length?performance.now()+6e3:0}}))}function lv(u){var q;const d=wl(),r=Q.useRef(d);r.current=d;const o=Q.useRef(new Kp),p=Q.useRef(null),D=Q.useRef(""),z=Q.useRef(null),C=Q.useRef("idle"),N=Q.useRef({startedAt:performance.now(),lastMessageAt:null,proactiveCount:0,unanswered:0,lightInviteUsed:!1}),[V,R]=Q.useState([]),[E,_]=Q.useState(""),[nt,K]=Q.useState(!1),[pt,at]=Q.useState(!1),[vt,F]=Q.useState(!1),[Ft,jt]=Q.useState("idle"),[Kt,bt]=Q.useState(!1),[tt,rt]=Q.useState([]),[Zt,ae]=Q.useState(u),Lt=Q.useRef({dnd:vt});Lt.current={dnd:vt};const Ht=Q.useRef(0),zt=Q.useRef([]),Ut=Q.useRef(null),St=Q.useRef(null),I=(x,Y)=>R(H=>H.map(O=>O.id===x?Y(O):O)),X=(x,Y=!0)=>{C.current=x,jt(x),Y&&ks({state:x,gesture:x==="thinking"?"think":x==="guiding"?"point":"idle"})},P=x=>{const[Y,H]=tv(C.current,x);X(Y),H&&setTimeout(()=>X(H),180)},lt=()=>{var x,Y;Ht.current++,(x=p.current)==null||x.abort(),p.current=null,(Y=St.current)==null||Y.abort(),St.current=null,Ut.current=null,D.current&&o.current.cancel(D.current),D.current="",K(!1),bt(!1),C.current="idle",jt("idle"),ks({}),document.querySelectorAll(".agent-highlight").forEach(H=>H.classList.remove("agent-highlight"))};Q.useEffect(()=>{const x=()=>{C.current==="sleeping"&&P("interaction")},Y=G=>{var Ot,Rt,Bt,J;if((Rt=(Ot=G.target)==null?void 0:Ot.closest)!=null&&Rt.call(Ot,"[data-agent-ui]"))return;r.current.touch();const ut=Ut.current;if(G.type==="pointerdown"&&ut){const $=(J=(Bt=G.target)==null?void 0:Bt.closest("[data-agent-id]"))==null?void 0:J.dataset.agentId;if($===ut.targetId){const Et=r.current.targetRegistry.completion($);if(!Et){lt();return}Ut.current={...ut,awaiting:!0};const Se=new AbortController;St.current=Se,r.current.targetRegistry.waitForReady({activeWindow:Et.window,activePanel:Et.panel||""},Se.signal).then(()=>{var ve;Se.signal.aborted||((ve=Ut.current)==null?void 0:ve.targetId)!==$||(Ut.current=null,St.current=null,m.current(`The visitor completed guide target ${$}. Propose only the next available guide step, or explain and finish.`,!1,!0))}).catch(()=>{});return}lt();return}p.current&&lt()},H=G=>{G.key==="Escape"&&C.current==="guiding"&&(G.preventDefault(),lt())};document.addEventListener("pointermove",x,{passive:!0}),document.addEventListener("pointerdown",x,{passive:!0}),document.addEventListener("keydown",x),document.addEventListener("pointerdown",Y,!0),document.addEventListener("wheel",Y,{passive:!0,capture:!0}),document.addEventListener("scroll",Y,!0),document.addEventListener("keydown",H,!0);const O=()=>{document.hidden&&lt()};return document.addEventListener("visibilitychange",O),()=>{var G;document.removeEventListener("pointermove",x),document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",x),document.removeEventListener("pointerdown",Y,!0),document.removeEventListener("wheel",Y,!0),document.removeEventListener("scroll",Y,!0),document.removeEventListener("keydown",H,!0),document.removeEventListener("visibilitychange",O),(G=p.current)==null||G.abort(),o.current.clear()}},[]),Q.useEffect(()=>{const x=new Zp(()=>r.current.snapshot());return z.current=x,x.attach()},[]);function ct(x,Y,H){zt.current=[...zt.current.slice(-19),{kind:x,instruction:Y,reason:H}]}function Wt(x,Y,H){const O=r.current.snapshot(),G=Fp(x,O.targets),ut=G.instruction;if(!ut){ct("ignored-instruction",void 0,G.reason);return}if(ut.type==="highlight"||ut.type==="guideTo"){const Ot=r.current.targetRegistry.resolve(ut.target,ut.type,O),Rt=Ot.element;if(!Rt){ct("ignored-instruction",ut.type,Ot.reason);return}if(ut.type==="highlight"){Rt.classList.add("agent-highlight");const Bt=setTimeout(()=>Rt.classList.remove("agent-highlight"),4500);H.addEventListener("abort",()=>{clearTimeout(Bt),Rt.classList.remove("agent-highlight")},{once:!0})}else Ut.current={targetId:ut.target,startedAt:performance.now()},X("guiding"),ks({target:ut.target,state:"guiding",persistent:!0})}else ut.type==="speak"||ut.type==="showRecommendation"?(X("speaking"),I(Y,Ot=>({...Ot,text:Ot.text+(Ot.text?`
`:"")+ut.value}))):ut.type==="showHint"?ks({text:ut.value}):X(ut.value);ct("presentation",ut.type)}async function De(x,Y,H,O,G,ut=!1){let Ot=x,Rt=Y;for(;!O.signal.aborted&&G===Ht.current;){let Bt=!1;for await(const J of o.current.stream(Ot,Rt,O.signal)){if(G!==Ht.current||O.signal.aborted)return;if(J.type==="run"&&(D.current=J.runId),J.type==="delta"&&(bt(!1),X("speaking"),I(H,$=>({...$,text:$.text+J.text}))),J.type==="status"&&(bt(!1),_(J.text),X("thinking")),J.type==="source"&&I(H,$=>({...$,sources:[...$.sources.filter(Et=>Et.id!==J.source.id),J.source]})),J.type==="activity"&&(rt($=>[...$.slice(-7),J.name]),bt(J.name==="searchKnowledge"||J.name==="readKnowledge")),J.type==="presentation"&&Wt(J.instruction,H,O.signal),J.type==="error"){Bt=!0,ct("stream-error");const $=u==="zh"?"CRT.AGENT 暂时不可用。":"CRT.AGENT is temporarily unavailable.";_($),I(H,Et=>({...Et,text:Et.text+`
`+$}))}J.type==="done"&&!J.waiting&&(D.current="",p.current=null,K(!1),bt(!1),Bt||_(""),ut&&!Ut.current?lt():C.current!=="guiding"&&X("idle",!1))}return}}async function he(x,Y=!1,H=!1){var Bt;if(!Y&&!H)lt();else if(Y&&p.current)return;const O=(Bt=z.current)==null?void 0:Bt.snapshot({locale:u,dnd:Lt.current.dnd,proactiveCount:N.current.proactiveCount});let G=x;if(Y){if(!O)return;const J=$p(O,r.current.snapshot().targets,N.current,performance.now());if(J.kind==="silent")return;G=J.message,N.current={...N.current,proactiveCount:N.current.proactiveCount+1,unanswered:N.current.unanswered+1,lastMessageAt:performance.now(),lightInviteUsed:N.current.lightInviteUsed||J.kind==="invite"}}else N.current={...N.current,unanswered:0},ae(wA(x)||u),P("message");const ut=Ht.current,Ot=new AbortController;p.current=Ot,K(!0),Y||at(!0);const Rt=crypto.randomUUID();R(J=>[...J.slice(-40),...Y?[]:[{id:crypto.randomUUID(),role:"user",text:x,sources:[]}],{id:Rt,role:"ghost",text:"",sources:[]}]);try{await De(Y?"/observe":"/chat",{requestId:crypto.randomUUID(),message:G,messageLocale:Y?void 0:wA(G),pageContext:r.current.snapshot(),dnd:Lt.current.dnd,guideStep:H,behavior:O},Rt,Ot,ut,H)}catch{if(!Ot.signal.aborted){ct("stream-failure");const J=u==="zh"?"CRT.AGENT 暂时不可用。":"CRT.AGENT is temporarily unavailable.";_(J),I(Rt,$=>({...$,text:$.text+`
`+J})),lt()}}}const m=Q.useRef(he);m.current=he,Q.useEffect(()=>{const x=setInterval(()=>{var Rt;const Y=z.current;if(!Y)return;const H=r.current.snapshot();if(Y.tick(H),Ut.current&&performance.now()-Ut.current.startedAt>45e3){lt();return}const O=Y.snapshot({locale:u,dnd:Lt.current.dnd,proactiveCount:N.current.proactiveCount}),G=ev(C.current,O.idleSeconds);G!==C.current&&X(G);const ut=Y.consumeMeaningfulInteraction(),Ot=Y.consumePageActivity();(C.current==="sleeping"&&ut||C.current==="dozing"&&Ot)&&P("interaction"),!(document.hidden||Lt.current.dnd||p.current||Ut.current||document.querySelector('.monitor-screen[data-booting="true"]'))&&((Rt=document.activeElement)!=null&&Rt.matches('input,textarea,[contenteditable="true"]')||[...document.querySelectorAll("video")].some(Bt=>!Bt.paused&&!Bt.ended)||m.current("",!0))},1e3);return()=>clearInterval(x)},[u]);const B=(q=z.current)==null?void 0:q.snapshot({locale:Zt,dnd:vt,proactiveCount:N.current.proactiveCount}),k=av(Ft,B,r.current.snapshot().targets,tt,V.flatMap(x=>x.sources));return{lines:V,status:E,busy:nt,open:pt,setOpen:at,dnd:vt,start:he,stop:lt,state:Ft,scanning:Kt,activity:k,activityLocale:Zt,debug:()=>{var x;return{behavior:((x=z.current)==null?void 0:x.snapshot({locale:u,dnd:vt,proactiveCount:N.current.proactiveCount}))??null,context:r.current.snapshot(),runId:D.current,activitySafeTrace:zt.current}},setDnd:x=>{F(x),window.dispatchEvent(new CustomEvent("crt-agent-dnd",{detail:x}))},clear:async()=>{lt(),R([]),_(""),await o.current.clear()}}}const _A=Q.createContext(null);function iv({language:u,children:d}){const r=lv(u);return h.jsx(_A.Provider,{value:r,children:d})}function Ks(){const u=Q.useContext(_A);if(!u)throw new Error("Missing AgentProvider");return u}function sv({language:u,open:d}){const r=Ks(),o=u==="zh",p=r.lines.filter(_=>_.role==="ghost").at(-1),[D,z]=Q.useState(""),[C,N]=Q.useState(),V=Q.useRef(null),R=Q.useRef(null),E=(p==null?void 0:p.text.trim())||r.status||(r.busy?o?"想一想…":"Thinking…":"");return Q.useEffect(()=>{if(!E){z("");return}if(!E.startsWith(D)){z("");return}if(D.length>=E.length)return;const _=window.setTimeout(()=>z(E.slice(0,Math.min(E.length,D.length+3))),16);return()=>window.clearTimeout(_)},[E,D]),Q.useLayoutEffect(()=>{const _=V.current,nt=R.current;if(!_||!nt)return;const K=()=>{const at=getComputedStyle(_),vt=["paddingTop","paddingBottom","borderTopWidth","borderBottomWidth"].reduce((F,Ft)=>F+parseFloat(at[Ft]||"0"),0);N(Math.min(nt.getBoundingClientRect().height+vt,Math.min(280,window.innerHeight*.42)))};K();const pt=new ResizeObserver(K);return pt.observe(nt),window.addEventListener("resize",K),()=>{pt.disconnect(),window.removeEventListener("resize",K)}},[d]),!d&&!E?null:h.jsx("section",{ref:V,className:"crt-agent-speech","data-agent-ui":!0,"aria-label":o?"CRT.AGENT 消息":"CRT.AGENT message",style:C?{height:C}:void 0,children:h.jsxs("div",{ref:R,className:"crt-agent-speech-content",children:[h.jsxs("p",{className:"crt-agent-utterance","aria-live":"polite",children:[D,h.jsx("span",{className:"typing-caret","aria-hidden":"true",children:"▋"})]}),!!(p!=null&&p.sources.length)&&h.jsxs("details",{children:[h.jsx("summary",{children:o?"来源":"Sources"}),h.jsx("div",{className:"crt-agent-sources",children:p.sources.map(_=>_.url?h.jsx("a",{href:_.url,target:"_blank",rel:"noreferrer",children:_.title},_.id):h.jsx("span",{children:_.title},_.id))})]})]})})}function cv({language:u,summary:d}){const r=u==="zh",o=p=>r?p.zh:p.en;return h.jsxs("section",{id:"agent-activity-panel",className:"agent-activity-panel","aria-label":r?"CRT.AGENT 活动摘要":"CRT.AGENT activity summary",children:[h.jsxs("p",{className:"activity-state",children:[r?"状态":"State",": ",h.jsx("strong",{children:d.state})]}),h.jsx(qs,{title:r?"近期语义观察":"Recent semantic observations",items:d.observations.map(p=>`${p.type} · ${p.target}`)}),h.jsx(qs,{title:r?"当前可见目标":"Visible targets",items:d.targets.map(p=>`${o(p)} · ${p.id}`)}),h.jsx(qs,{title:r?"允许的展示动作":"Allowed display actions",items:d.allowedActions}),h.jsx(qs,{title:r?"已使用工具":"Tools used",items:d.tools}),h.jsxs("div",{children:[h.jsx("h3",{children:r?"来源":"Sources"}),d.sources.length?h.jsx("ul",{children:d.sources.map((p,D)=>h.jsx("li",{children:p.url?h.jsx("a",{href:p.url,target:"_blank",rel:"noreferrer",children:p.title}):p.title},`${p.title}-${D}`))}):h.jsx("p",{children:r?"尚无来源。":"No sources yet."})]})]})}function qs({title:u,items:d}){return h.jsxs("div",{children:[h.jsx("h3",{children:u}),d.length?h.jsx("ul",{children:d.map((r,o)=>h.jsx("li",{children:r},`${r}-${o}`))}):h.jsx("p",{children:"—"})]})}function uv({language:u}){const d=Ks(),r=u==="zh";return h.jsxs("section",{className:"crt-agent-settings","data-agent-ui":!0,"aria-label":r?"CRT.AGENT 设置":"CRT.AGENT settings",children:[h.jsx("h2",{children:r?"设置":"Settings"}),h.jsxs("label",{children:[h.jsx("input",{type:"checkbox","aria-label":r?"CRT.AGENT 免打扰":"CRT.AGENT do not disturb",checked:d.dnd,onChange:o=>d.setDnd(o.target.checked)}),r?"免打扰":"Do not disturb"]}),h.jsx("button",{onClick:()=>void d.clear(),children:r?"清空本次会话":"Clear this session"}),h.jsx("p",{children:r?"仅在本次会话中使用语义浏览摘要；刷新后重置。":"A semantic browsing summary is used only for this session and resets on refresh."}),h.jsxs("details",{children:[h.jsx("summary",{children:r?"会话活动":"Session activity"}),h.jsx(cv,{language:d.activityLocale,summary:d.activity})]})]})}function ov(u,d){return{marker:`crt-${u}`,wakingEffect:u==="waking"?d?"waking-static":"waking-flash":"none"}}function rv(u,d){return d==="zh"?{idle:"空闲",observing:"观察中",thinking:"思考中",speaking:"回复中",guiding:"引导中",dozing:"打盹",sleeping:"休眠",waking:"已唤醒"}[u]:u}function dv(u,d,r,o,p){return r?"speaking":o?"scan":p==="dozing"?"dozing":p==="sleeping"?"sleep":u==="move"?"travel":u==="look"?"idle":u==="point"?d?"guide-left":"guide-right":"idle"}function fv(u){return u==="guiding"?"point":u==="observing"||u==="thinking"||u==="waking"?"look":"idle"}function hv({language:u,launchFromCenter:d=!1}){const r=Ks(),o=wl(),p=Q.useRef(o);p.current=o;const[D,z]=Q.useState(!1),[C,N]=Q.useState(!1),V=Q.useRef(null),R=Q.useRef(r.busy);R.current=r.busy;const E=Q.useRef(r.scanning);E.current=r.scanning;const _=Q.useRef(r.state);_.current=r.state;const nt=matchMedia("(prefers-reduced-motion: reduce)").matches,K=ov(r.state,nt),pt=Q.useRef({dnd:r.dnd});pt.current={dnd:r.dnd};const at=Q.useRef(null),vt=Q.useRef(null);return Q.useEffect(()=>{fetch("/assets/crt-agent.json?v=crt-agent-v3").then(F=>F.ok?F.json():Promise.reject()).then(F=>{V.current=F}).catch(()=>{})},[]),Q.useEffect(()=>{const F=at.current,Ft=vt.current,jt=B=>({x:innerWidth-B-(innerWidth<=700?34:64),y:innerHeight-B-(innerWidth<=700?48:74)}),Kt=innerWidth<=700?62:100;let bt=d?(innerWidth-Kt)/2:jt(Kt).x,tt=d?(innerHeight-Kt)/2:jt(Kt).y;performance.now();let rt=0,Zt=0,ae="",Lt=0,Ht="",zt={until:0},Ut=!1;const St=matchMedia("(prefers-reduced-motion: reduce)").matches,I=B=>{zt=B.detail},X=B=>{Ut=B.detail};window.addEventListener("crt-agent-cue",I),window.addEventListener("crt-agent-dnd",X);const P=()=>{performance.now()},lt=()=>{performance.now()},ct=()=>{performance.now(),zt.target&&zt.persistent&&window.dispatchEvent(new CustomEvent("crt-agent-guide-ended"))},Wt=()=>{},De=B=>{Ht!==B&&(Ft.textContent=B,Ft.hidden=!B,Ht=B)},he=B=>{var An;const k=Math.min((B-rt)/1e3||.016,.05);rt=B;const x=innerWidth<=700?62:100,Y=jt(x);let H=Y.x,O=Y.y,G=fv(_.current),ut="";St||(H+=Math.sin(B/5400)*8,O+=Math.sin(B/1800)*5);const Ot=Math.max(10,innerWidth-x-15),Rt=Math.max(10,innerHeight-x-24);(Ut||pt.current.dnd)&&(ut="");let Bt=!1;if(zt.until>performance.now()){zt.text&&(ut=zt.text),F.dataset.gesture=zt.gesture||"";const On=zt.target?p.current.targetRegistry.resolve(zt.target,"guideTo",p.current.snapshot()).element:null;if(On&&MA(On)){On.classList.add("agent-highlight"),Bt=!0;const Ze=On.getBoundingClientRect();H=Ze.right+16,O=Ze.top-x;const mn=(An=document.querySelector(".crt-agent-drawer"))==null?void 0:An.getBoundingClientRect();mn&&H<mn.right&&H+x>mn.left&&O+x>mn.top&&(O=mn.top-x-16),G=Math.hypot(H-bt,O-tt)>8?"move":"point",F.dataset.visibilityDirection="visible"}else if(zt.target){const Ze=p.current.targetRegistry.direction(zt.target,p.current.snapshot());F.dataset.visibilityDirection=Ze,ut=Ze==="above"?u==="zh"?"目标在上方，请向上滚动。":"The target is above. Please scroll up.":Ze==="below"?u==="zh"?"目标在下方，请向下滚动。":"The target is below. Please scroll down.":u==="zh"?"请先打开对应内容后再继续。":"Please open the relevant content, then continue."}}else F.dataset.gesture="";F.dataset.agentState=zt.until>performance.now()&&zt.state||_.current,!Bt&&Math.hypot(H-bt,O-tt)>8&&(G="move"),H=Math.max(10,Math.min(H,Ot)),O=Math.max(55,Math.min(O,Rt)),bt+=(H-bt)*(St?1:Math.min(1,k*2.4)),tt+=(O-tt)*(St?1:Math.min(1,k*2.4)),bt=Math.max(10,Math.min(bt,Ot)),tt=Math.max(10,Math.min(tt,Rt)),F.style.transform=`translate3d(${Math.round(bt)}px,${Math.round(tt)}px,0)`;const J=V.current,$=dv(G,H<bt,R.current,E.current,_.current);$!==ae&&(ae=$,Lt=B);const Et=J==null?void 0:J.animations[$],Se=(Et==null?void 0:Et.frames)??[0],ve=Math.floor((B-Lt)/(1e3/((Et==null?void 0:Et.fps)??6))),za=Et!=null&&Et.loop?ve%Se.length:Math.min(ve,Se.length-1),Ye=J==null?void 0:J.frames[Se[za]??0];Ye&&J&&(F.style.setProperty("--frame-x",`${Ye.x*100/(J.sheet.width-Ye.w)}%`),F.style.setProperty("--frame-y",`${Ye.y*100/(J.sheet.height-Ye.h)}%`),F.style.setProperty("--sprite-offset-x",`${Ye.offset[0]}px`),F.style.setProperty("--sprite-offset-y",`${Ye.offset[1]}px`)),F.dataset.mode=G,F.dataset.reduced=String(St),F.classList.remove("face-right"),F.classList.toggle("bubble-right",bt<200),F.classList.toggle("speech-below",tt<innerHeight/2),De(ut),Zt=requestAnimationFrame(he)},m=()=>{cancelAnimationFrame(Zt),document.hidden||(rt=0,Zt=requestAnimationFrame(he))};return document.addEventListener("pointermove",P,{passive:!0}),document.addEventListener("pointerdown",ct,{passive:!0}),document.addEventListener("keydown",ct),document.addEventListener("focusin",lt),document.addEventListener("focusout",Wt),document.documentElement.addEventListener("pointerleave",Wt),document.addEventListener("visibilitychange",m),Zt=requestAnimationFrame(he),()=>{window.removeEventListener("crt-agent-cue",I),window.removeEventListener("crt-agent-dnd",X),cancelAnimationFrame(Zt),document.removeEventListener("pointermove",P),document.removeEventListener("pointerdown",ct),document.removeEventListener("keydown",ct),document.removeEventListener("focusin",lt),document.removeEventListener("focusout",Wt),document.documentElement.removeEventListener("pointerleave",Wt),document.removeEventListener("visibilitychange",m)}},[u]),h.jsxs("div",{className:"crt-agent-overlay",ref:at,"data-agent-ui":!0,"data-visual-state":K.marker,"data-waking-effect":K.wakingEffect,children:[h.jsx("div",{className:"crt-agent-bubble",ref:vt,hidden:!0,"aria-hidden":"true"}),h.jsx(sv,{language:u,open:D}),h.jsx("span",{className:"agent-badge","aria-hidden":"true",children:"CRT"}),h.jsx("button",{className:"crt-agent-avatar","aria-label":u==="zh"?"打开 CRT 机器人对话":"Open CRT agent chat","aria-expanded":D,onClick:()=>{z(F=>!F),N(!1)},children:h.jsx("span",{className:"crt-agent-sprite"})}),h.jsx("span",{className:"crt-agent-caption",children:"CRT.AGENT"}),D&&h.jsxs("div",{className:"agent-settings-control",children:[h.jsx("button",{className:"activity-toggle","aria-label":u==="zh"?"打开 CRT.AGENT 设置":"Open CRT.AGENT settings","aria-expanded":C,onClick:()=>N(F=>!F),children:"⚙"}),C&&h.jsx(uv,{language:u})]}),h.jsx("span",{className:"sr-only",role:"status",children:rv(r.state,u)})]})}const No=[{role:"系统工程师 · PingPong Vision",summary:"为 MULTIVAC 构建并部署智能设备监测系统，将工厂调研与真实设备测试转化为持续状态追踪、持久化存储和异常告警工作流。",highlights:["把 15 次以上工厂走访与制造企业访谈中的发现，转化为持续设备状态追踪和面向操作员的告警方案。","实现低开销监测流程，涵盖设备状态存储、结构化事件日志与异常状态检测。","连接摄像头及 ESP32/MQTT 电流与光电传感器，构建 FastAPI WebSocket/MJPEG、Flask REST API、TimescaleDB 和 React/Vite 看板的数据链路。","实现透视校正、数值归一化、重试与退避、连续失败自动停止、限流和不可读数据处理等可靠性机制。","使用 Docker / Docker Compose 容器化服务，通过 Coolify 和反向代理部署，密钥仅保留在后端。","以操作员动作、摄像头移动、屏幕变化和异常读数驱动监测逻辑，并在真实 MULTIVAC 设备上完成验证。"]},{role:"平台工程师 · 学生兼职",summary:"参与基于 Backstage 的内部开发者平台与云原生平台运维，连接服务目录、工程模板、CI/CD、OpenShift 部署和团队入驻流程。",highlights:["维护服务于 20 多个内部工程团队的 Backstage 平台，负责版本升级、插件评估、配置和上游变更适配。","设计复用超过 100 次的标准工程模板，自动化服务初始化、代码仓库设置、CI/CD、Helm 部署和团队入驻。","帮助团队以标准项目结构和开发 / 生产部署流程快速启动可交付服务。","支持 OpenShift 上的生命周期管理，包括 Helm 分阶段部署、配置更新、补丁、下线及 GitOps 工作流。","将项目纳入集中软件目录，并改进 Backstage 搜索，提升服务与文档的可发现性。","通过平台集成、目录元数据和可复用的入驻流程提升开发效率。"]},{role:"全栈开发工程师 · 学生兼职",summary:"构建 AI 增强型智能 ERP，涵盖订单管理、基于 RAG 的订单问答、用户权限与业务数据看板。",highlights:["参与构建供 200 多名内部员工使用的智能 ERP，以及面向订单的 RAG 问答流程。","实现文档解析、结构感知的语义分块、检索，以及订单和业务文档的 PDF 自动生成。","设计 REST API、关系数据模型、校验逻辑及订单、用户、角色、看板和知识工作流的业务规则。","实现身份认证、基于角色的访问控制和多种企业角色的权限流程。","通过后端数据聚合和看板，将生产、订单和文档数据转化为运营决策信息。","整理复杂业务数据，构建分析与可视化功能，呈现可行动的运营洞察。","容器化应用服务并参与 CI/CD，支持可复现的构建、测试和部署。","根据部署环境使用 Docker Compose、Nginx、AWS EC2/GCP，处理安全组、环境变量和运行时问题。"]},{role:"软件工程师 · 编译器 / LLVM / CI",summary:"参与科学计算负载优化、Linux 兼容性排查、编译器构建环境和 CI/CD 工作流维护。",highlights:["参与基于 Fortran 的科学与气象计算优化，关注数值性能及稳定性。","优化科学计算负载，处理编译器构建环境中的 Linux 兼容性问题。","排查跨 Linux 环境的构建、依赖、安装和兼容性问题。","维护用于编译器构建、测试和发布的 Jenkins 与 GitLab CI 流水线。","与开发和 QA 团队协作诊断构建失败，提升自动化验证流程的可靠性。"]}],TA=[{title:"面向 LLM 代码生成的结构化中间表示",summary:"研究“问题 → 中间表示 → 代码”的两阶段流程，对比 YAML、Mermaid、伪代码和自定义 DSL，在复杂任务上实现 12–14% 的代码生成性能提升，并控制提示与 token 开销。"},{title:"Web Harvest RAG",summary:"构建可配置的网站 / PDF 知识库与检索实验平台，比较分块、向量检索、BM25、混合融合、重排与查询改写；在 MULTIVAC 语料上达到 96.7% recall@5，并使用 LLM-as-judge 分析答案忠实度。"},{title:"自动化软件开发多智能体系统",summary:"使用 LangGraph / LangChain 构建四智能体协作流程，连接规划、执行、工单与 GraphQL 工具，任务成功率超过 83%；在 AWS 上部署，并结合基础设施即代码工作流。"},{title:"个人网站 · huxiaoheng.com",summary:"以 React、Express.js 和 MongoDB 构建项目、博客与演示管理平台，使用 Docker、Nginx 和 Google Cloud 部署。"},{title:"Python Artifact Logger & Viewer",summary:"构建跨本地、AWS S3 与数据库元数据的实验产物追踪模块，以 Flask 提供查询、比较和可视化，并接入 Dynatrace 可用性监控。"},{title:"无人机仿真系统",summary:"连接 PX4、基于 seL4 的伴随计算机与 Raspberry Pi，实现 C++ 传感器数据代理，将原始数据转为控制与监测所需的结构化信息。"}],Av={programmingLanguages:["Languages","编程语言"],backendAndApis:["Backend & APIs","后端与 API"],frontend:["Frontend","前端"],databasesAndData:["Databases & data","数据库与数据"],aiLlmEngineering:["AI & LLM engineering","AI 与大模型工程"],cloudDevOpsPlatform:["Cloud & platform","云与平台工程"],mlopsDataops:["MLOps & DataOps","MLOps 与 DataOps"],collaborationAndTools:["Collaboration & tools","协作工具"]},Qe={location:"Munich, Germany",email:"huxiaoheng33@gmail.com",linkedIn:"https://www.linkedin.com/in/xiaohenghu",summary:"Software engineer with experience across fullstack product development, AI/LLM applications, internal developer platforms, CI/CD, cloud deployment, and MLOps-adjacent artifact/data workflows.",languages:{English:"C1 - Advanced",Chinese:"Native",German:"A2 - Basic"},experience:[{date:"Apr 2026 - Jul 2026",company:"Digital Product School / UnternehmerTUM & MULTIVAC",location:"Munich, Germany",role:"System Engineer, PingPong Vision",summary:"Built and deployed a smart monitoring agent system for continuous machine-state tracking and alert-ready workflows.",highlights:["Translated insights from 15+ factory visits into a smart monitoring agent concept.","Built persistent state storage, structured event logs, and abnormal-state detection."],technologies:["React","Vite","FastAPI","Flask","TimescaleDB","OpenCV","Docker"]},{date:"Dec 2024 - Mar 2026",company:"Infineon Technologies",location:"Neubiberg, Germany",role:"Platform Engineer (Working Student)",summary:"Worked on a Backstage-based internal developer platform and cloud-native platform operations.",highlights:["Maintained a platform serving 20+ internal engineering teams.","Designed golden-path templates reused 100+ times."],technologies:["Backstage","OpenShift","Kubernetes","Helm","GitLab CI","Docker"]},{date:"Jul 2024 - Dec 2024",company:"Innocoso",location:"Oberhaching, Germany",role:"Fullstack Developer (Working Student)",summary:"Built an AI-augmented smart ERP platform with order workflows, RAG-backed Q&A, and dashboards.",highlights:["Built order-management and RAG workflows for 200+ internal employees.","Implemented APIs, role-based access control, and operational dashboards."],technologies:["Python","Django","PostgreSQL","React","RAG","Docker"]},{date:"Sep 2021 - Jul 2022",company:"Huawei",location:"Hangzhou, China",role:"Software Engineer (Compiler / LLVM / CI)",summary:"Worked on scientific computation workloads, Linux compatibility, compiler build environments, and CI/CD.",highlights:["Optimized scientific workloads and resolved Linux compatibility issues.","Maintained Jenkins and GitLab CI pipelines."],technologies:["C++","Fortran","LLVM","Linux","Jenkins","GitLab CI"]}],education:[{date:"Oct 2023 - Mar 2026",title:"M.Sc. Informatics",school:"Technical University of Munich",location:"Munich, Germany",grade:"2.2",courses:["Cloud Information Systems","Natural Language Processing","Computer Vision II"]},{date:"Sep 2017 - Jul 2021",title:"B.Sc. Software Engineering",school:"Wuhan University of Technology",location:"Wuhan, China",grade:"1.6 (German system)",courses:["Data Structures & Algorithms","Operating Systems","Database Systems"]}],projects:[{date:"Mar 2025 - Oct 2025",title:"Structured Intermediate Representations for LLM Code Generation",org:"Master Thesis, Technical University of Munich",summary:"Researched structured intermediate representations for improving LLM code generation.",details:["Designed a two-stage Problem → IR → Code pipeline.","Improved performance by 12–14% on complex tasks."],technologies:["LLM evaluation","YAML","Mermaid","Python"]},{date:"Mar 2026 - Apr 2026",title:"Web Harvest RAG",org:"Personal Project",summary:"Built a config-driven full-stack RAG chatbot and retrieval experimentation lab.",details:["Implemented ingestion, hybrid retrieval, and evaluation workflows."],technologies:["Next.js","FastAPI","RAG","BM25"]},{date:"Sep 2024 - Feb 2025",title:"Multi-Agent System for Automated Software Development",org:"TUM-DI-LAB & Reply",summary:"Built a LangGraph/LangChain-based multi-agent system for software delivery.",details:["Coordinated planning, task execution, and ticket workflows."],technologies:["LangGraph","LangChain","GraphQL","AWS"]},{date:"May 2024 - Oct 2024",title:"Personal Website Development - huxiaoheng.com",org:"Personal Project",summary:"Built and deployed a full-stack portfolio website.",details:["Built React, Express.js, MongoDB, Docker, Nginx, and GCP modules."],technologies:["React","Express.js","MongoDB","GCP"]},{date:"Oct 2023 - Feb 2024",title:"Python Artifact Logger & Viewer Module",org:"Personal Project",summary:"Built an artifact tracking module and Flask viewer for experiment outputs.",details:["Tracked local, cloud, and database-backed artifacts."],technologies:["Python","Flask","AWS S3"]},{date:"Feb 2023 - Aug 2023",title:"Drone Simulator Project",org:"Academic Project",summary:"Built parts of a PX4 and seL4 drone-control simulation system.",details:["Developed a C++ sensor-data proxy for the companion computer."],technologies:["C++","PX4","seL4","Raspberry Pi"]}],skills:{programmingLanguages:["Python","TypeScript","JavaScript","C++","Java"],backendAndApis:["Django","Flask","Node.js","REST APIs","GraphQL"],frontend:["React","Next.js","Tailwind CSS"],databasesAndData:["PostgreSQL","MongoDB","BM25","Vector retrieval"],aiLlmEngineering:["LangChain","LangGraph","RAG systems","LLM evaluation"],cloudDevOpsPlatform:["AWS","Docker","Kubernetes","OpenShift","Backstage"],mlopsDataops:["Artifact tracking","Experiment management","AWS S3"],collaborationAndTools:["GitHub","Figma","Codex","CI/CD workflows"]}};function mv(u,d){return`${u.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"tag"}-${d}`}function gv({value:u,id:d,scope:r,projectId:o}){const p=_a({id:d,names:{en:u,zh:u},scope:r,capabilities:["highlight","guideTo"],...o?{projectId:o}:{},tag:u});return h.jsx("span",{ref:p,"data-agent-id":d,children:u})}function yl({values:u,targetPrefix:d,scope:r,projectId:o}){return h.jsx("div",{className:"content-tags",children:u.map((p,D)=>d&&r?h.jsx(gv,{value:p,id:`${d}:${mv(p,D)}`,scope:r,projectId:o},p):h.jsx("span",{children:p},p))})}function pv({id:u,en:d,zh:r,language:o,selected:p,onSelect:D}){const z=_a({id:`about-tab:${u}`,names:{en:d,zh:r},scope:{window:"about"},capabilities:["highlight","guideTo"],completion:{window:"about",panel:u}});return h.jsx("button",{ref:z,"data-agent-id":`about-tab:${u}`,"aria-pressed":p,onClick:()=>D(u),children:o==="en"?d:r})}function zA({language:u}){return h.jsx("div",{className:"resume-timeline",children:Qe.experience.map((d,r)=>h.jsxs("article",{className:"resume-entry",children:[h.jsxs("span",{className:"content-kicker",children:[d.date," · ",d.location]}),h.jsx("h2",{children:d.company}),h.jsx("h3",{children:u==="zh"?No[r].role:d.role}),h.jsx("p",{children:u==="zh"?No[r].summary:d.summary}),h.jsxs("details",{children:[h.jsx("summary",{children:u==="en"?"Responsibilities & impact":"工作内容与成果"}),h.jsx("ul",{children:(u==="zh"?No[r].highlights:d.highlights).map(o=>h.jsx("li",{children:o},o))})]}),h.jsx(yl,{values:d.technologies,targetPrefix:`about:experience:${r}:tag`,scope:{window:"about",panel:"experience"}})]},d.company))})}function vv({language:u}){return h.jsxs("div",{className:"contact-content",children:[h.jsx("span",{className:"content-kicker",children:"LET’S CONNECT"}),h.jsx("h1",{children:u==="en"?"Say hello.":"来打个招呼。"}),h.jsx("p",{children:u==="en"?"For conversations about software, AI and useful things to build.":"聊聊软件、AI，以及值得一起构建的东西。"}),h.jsxs("a",{href:`mailto:${Qe.email}`,children:[Qe.email," ↗"]}),h.jsx("a",{href:Qe.linkedIn,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn / Xiaoheng Hu ↗"}),h.jsx("p",{className:"content-muted",children:u==="en"?Qe.location:"德国 · 慕尼黑"})]})}function bv({language:u}){const d=wl(),r=d.state.aboutTab,o=d.selectTab,p=[["profile","Profile","简介"],["experience","Experience","工作经历"],["education","Education","教育"],["skills","Toolkit","技能"],["research","Research & projects","研究与项目"]],D=p.find(([C])=>C===r),z=_a({id:`about:${r}`,names:{en:D[1],zh:D[2]},scope:{window:"about",panel:r},capabilities:["highlight","guideTo"]});return h.jsxs("div",{className:"about-content",children:[h.jsxs("header",{className:"profile-header",children:[h.jsx("span",{className:"content-kicker",children:"ABOUT / XIAOHENG HU"}),h.jsxs("h1",{children:["胡晓亨 ",h.jsx("span",{children:"Xiaoheng Hu"})]}),h.jsx("p",{className:"profile-role",children:u==="en"?"Software Engineer · AI & Fullstack · Platform":"软件工程师 · AI 与全栈开发 · 平台工程"}),h.jsxs("p",{className:"content-muted",children:[u==="en"?Qe.location:"德国 · 慕尼黑"," ",h.jsx("span",{"aria-hidden":"true",children:" / "}),h.jsx("a",{href:`mailto:${Qe.email}`,children:"Email ↗"})," ",h.jsx("a",{href:Qe.linkedIn,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn ↗"})]})]}),h.jsx("nav",{className:"content-tabs","aria-label":u==="en"?"About sections":"关于页面分区",children:p.map(([C,N,V])=>h.jsx(pv,{id:C,en:N,zh:V,language:u,selected:r===C,onSelect:o},C))}),h.jsxs("div",{ref:z,className:"about-section","data-agent-id":`about:${r}`,children:[r==="profile"&&h.jsxs(h.Fragment,{children:[h.jsx("p",{className:"profile-intro",children:u==="en"?Qe.summary:"我的经历横跨全栈产品开发、AI / 大模型应用、内部开发者平台、CI/CD 和云部署，也涉及实验产物追踪与数据工作流。喜欢把复杂技术连接到真实使用场景，构建能够交付、使用和持续维护的软件。"}),h.jsxs("div",{className:"profile-focus",children:[h.jsxs("article",{children:[h.jsx("span",{children:"01 / BUILD"}),h.jsx("h2",{children:"Fullstack"}),h.jsx("p",{children:u==="en"?"Enterprise workflows, APIs, data models and operational dashboards.":"企业业务流程、API、数据模型与运营看板。"})]}),h.jsxs("article",{children:[h.jsx("span",{children:"02 / CONNECT"}),h.jsx("h2",{children:"AI & Agents"}),h.jsx("p",{children:u==="en"?"RAG, multi-agent systems and evaluation-driven LLM applications.":"RAG、多智能体协作与基于评估的大模型应用。"})]}),h.jsxs("article",{children:[h.jsx("span",{children:"03 / SHIP"}),h.jsx("h2",{children:"Platform"}),h.jsx("p",{children:u==="en"?"Developer platforms, reproducible builds and cloud delivery.":"开发者平台、可复现构建和云端交付。"})]})]}),h.jsx("h2",{children:u==="en"?"Languages":"语言"}),h.jsx(yl,{values:Object.entries(Qe.languages).map(([C,N])=>`${C} · ${N}`),targetPrefix:"about:profile:tag",scope:{window:"about",panel:"profile"}})]}),r==="experience"&&h.jsx(zA,{language:u}),r==="education"&&Qe.education.map((C,N)=>h.jsxs("article",{className:"resume-entry",children:[h.jsxs("span",{className:"content-kicker",children:[C.date," · ",C.location]}),h.jsx("h2",{children:u==="zh"?["慕尼黑工业大学","武汉理工大学"][N]:C.school}),h.jsx("h3",{children:u==="zh"?["信息学硕士 · M.Sc. Informatics","软件工程学士 · B.Sc. Software Engineering"][N]:C.title}),h.jsxs("p",{children:[u==="en"?"Grade":"成绩",": ",C.grade]}),h.jsx(yl,{values:C.courses,targetPrefix:`about:education:${N}:tag`,scope:{window:"about",panel:"education"}})]},C.school)),r==="skills"&&Object.entries(Qe.skills).map(([C,N])=>h.jsxs("section",{className:"skill-section",children:[h.jsx("h2",{children:Av[C][u==="en"?0:1]}),h.jsx(yl,{values:N,targetPrefix:`about:skills:${C}:tag`,scope:{window:"about",panel:"skills"}})]},C)),r==="research"&&Qe.projects.map((C,N)=>h.jsxs("article",{className:"resume-entry",children:[h.jsxs("span",{className:"content-kicker",children:[C.date," · ",C.org]}),h.jsx("h2",{children:u==="zh"?TA[N].title:C.title}),h.jsx("p",{children:u==="zh"?TA[N].summary:C.summary}),h.jsxs("details",{children:[h.jsx("summary",{children:u==="en"?"Project details":"完整项目记录（英文）"}),h.jsx("ul",{children:C.details.map(V=>h.jsx("li",{children:V},V))})]}),h.jsx(yl,{values:C.technologies,targetPrefix:`about:research:${N}:tag`,scope:{window:"about",panel:"research"}})]},C.title))]},r)]})}const yv=`<!doctype html>\r
<html lang="en">\r
<head>\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1">\r
<title>Stereo Reconstruction</title>\r
<link rel="stylesheet" href="../assets/style.css">\r
</head>\r
<body>\r
<main>\r
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/3d-reconstruction.html">中文</a></nav>\r
\r
<header class="hero">\r
  <p class="eyebrow">3D Scanning and Motion Capturing · TUM</p>\r
  <h1>Stereo Reconstruction</h1>\r
  <p class="lead">A complete stereo reconstruction pipeline – from image pairs through sparse matching, rectification and dense matching to disparity maps, point clouds and meshes – evaluated on the TUM Intrinsic3D and KITTI datasets.</p>\r
  <ul class="tags"><li>C++</li><li>OpenCV</li><li>Eigen</li><li>FLANN</li><li>Ceres Solver</li><li>SGBM</li></ul>\r
</header>\r
\r
<figure>\r
  <video controls preload="metadata" src="../../videos/3D.mp4"></video>\r
  <figcaption>Demo video</figcaption>\r
</figure>\r
\r
<h2>Motivation and idea</h2>\r
<h3>Applications</h3>\r
<figure>\r
  <img src="../assets/3DReconstruction/p03.webp" alt="3D heart model, a castle model and a city street model">\r
  <figcaption>3D models of human organs for surgical planning · reconstruction of historical architecture · environment reconstruction for robot navigation</figcaption>\r
</figure>\r
<figure class="fig-md">\r
  <img src="../assets/3DReconstruction/p04.webp" alt="Point cloud reconstruction of Notre Dame">\r
  <figcaption>Reconstruction of Notre Dame</figcaption>\r
</figure>\r
<h3>Our idea</h3>\r
<p>Take multiple photographs of an object as input, run the reconstruction and output a 3D model.</p>\r
<figure>\r
  <img src="../assets/3DReconstruction/p05.webp" alt="Several input photos of a relief → Input → Reconstruction → Output → 3D model">\r
  <figcaption>Input images → reconstruction → 3D model</figcaption>\r
</figure>\r
\r
<h2>Related work</h2>\r
<h3>Datasets</h3>\r
<div class="grid">\r
  <div class="card">\r
    <h4>TUM Intrinsic3D – Bricks RGBD</h4>\r
    <p>Color and depth images · color and depth camera intrinsics · camera pose matrix · multiple views of a single object</p>\r
  </div>\r
  <div class="card">\r
    <h4>KITTI Stereo 2015</h4>\r
    <p>Disparity maps · color images · camera distortion coefficients · camera extrinsics · images of different scenarios</p>\r
  </div>\r
</div>\r
<figure>\r
  <div class="pair">\r
  <img src="../assets/3DReconstruction/p07.webp" alt="TUM Intrinsic3D Bricks preview">\r
  <img src="../assets/3DReconstruction/p08.webp" alt="KITTI Stereo Evaluation 2015 preview">\r
  </div>\r
  <figcaption>TUM Intrinsic3D Bricks (left) and KITTI Stereo 2015 (right)</figcaption>\r
</figure>\r
\r
<h3>Dataset comparison</h3>\r
<div class="table-wrap"><table>\r
  <thead><tr><th></th><th>TUM Intrinsic3D</th><th>KITTI Stereo 2015</th></tr></thead>\r
  <tbody>\r
    <tr><th scope="row">Pros</th>\r
      <td><ul><li>No need to consider camera distortion</li><li>Able to apply ICP</li><li>Provides ground-truth depth</li></ul></td>\r
      <td><ul><li>Camera parameters can be loaded easily</li><li>Ground-truth disparity can be used directly for evaluation</li></ul></td></tr>\r
    <tr><th scope="row">Cons</th>\r
      <td><ul><li>No ground-truth disparity</li></ul></td>\r
      <td><ul><li>Images of a single scenario are not sufficient</li></ul></td></tr>\r
  </tbody>\r
</table></div>\r
\r
<h3>Libraries</h3>\r
<div class="grid">\r
  <div class="card"><h4>OpenCV</h4><p>Computer vision algorithms</p></div>\r
  <div class="card"><h4>Eigen</h4><p>Matrix computation</p></div>\r
  <div class="card"><h4>FLANN</h4><p>Nearest-neighbour search</p></div>\r
  <div class="card"><h4>Ceres Solver</h4><p>Non-linear optimization</p></div>\r
</div>\r
\r
<h3>Reconstruction pipeline</h3>\r
<figure>\r
  <img src="../assets/3DReconstruction/p11.webp" alt="Pipeline: image pairs → key points → feature matches → rectified images → disparity map → depth map → mesh">\r
  <figcaption>Image pairs → undistortion &amp; key-point detection → feature descriptor matching → sparse matching (camera pose / fundamental matrix) → image rectification → dense matching → disparity map → depth map → triangulation → mesh</figcaption>\r
</figure>\r
\r
<h2>Methods</h2>\r
<h3>Sparse matching – key-point detectors</h3>\r
<p>Six detectors were compared: ORB, BRISK, FAST, Shi-Tomasi, SURF and SIFT.</p>\r
<figure>\r
  <img src="../assets/3DReconstruction/p14.webp" alt="Detected key points of ORB, Brisk, Fast, Shi-Tomasi, SURF and SIFT on the same image">\r
  <figcaption>Key points detected by each method</figcaption>\r
</figure>\r
\r
<h3>Key-point detector and feature descriptor comparison</h3>\r
<p class="table-note">RANSAC used for fundamental-matrix calculation, FLANN for descriptor matching.</p>\r
<div class="table-wrap"><table>\r
  <thead><tr><th>Dataset</th><th>Measurement</th><th class="num">BRISK</th><th class="num">ORB</th><th class="num">Shi-Tomasi</th><th class="num">SIFT</th><th class="num">SURF</th><th class="num">FAST</th></tr></thead>\r
  <tbody>\r
    <tr><th scope="row" rowspan="4">TUM Intrinsic</th><td>Average rotation error</td><td class="num best">0.0616</td><td class="num">0.1241</td><td class="num">0.1053</td><td class="num">0.1014</td><td class="num">0.0838</td><td class="num">0.0619</td></tr>\r
    <tr><td>Abnormal fundamental matrix count</td><td class="num best">20</td><td class="num">40</td><td class="num">33</td><td class="num">33</td><td class="num">27</td><td class="num best">20</td></tr>\r
    <tr><td>Average translation error</td><td class="num">0.9993</td><td class="num">0.9998</td><td class="num">0.9993</td><td class="num">0.9994</td><td class="num">0.9993</td><td class="num">0.9994</td></tr>\r
    <tr><td>Time to process 10 image pairs (s)</td><td class="num best">22.5254</td><td class="num">57.269</td><td class="num">62.391</td><td class="num">430.32</td><td class="num">44.541</td><td class="num">670.31</td></tr>\r
    <tr><th scope="row" rowspan="3">KITTI Raw</th><td>Average rotation error</td><td class="num">0.0125</td><td class="num">0.0318</td><td class="num">0.0097</td><td class="num best">0.0078</td><td class="num">–</td><td class="num">0.0111</td></tr>\r
    <tr><td>Abnormal fundamental matrix count</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">–</td><td class="num">0</td></tr>\r
    <tr><td>Average translation error</td><td class="num">0.7645</td><td class="num">1.03877</td><td class="num">0.5479</td><td class="num best">0.5403</td><td class="num">–</td><td class="num">0.6106</td></tr>\r
  </tbody>\r
</table></div>\r
<p class="table-note">Translation error is too high for all methods, so ground-truth translation was used for the subsequent steps.</p>\r
\r
<h3>Fundamental matrix estimation</h3>\r
<p>To evaluate the sparse matching method, the fundamental matrix estimated from detected key points is converted into an essential matrix and decomposed into rotation and translation, which are then compared against the ground-truth camera pose (MSE of rotation and translation).</p>\r
<figure>\r
  <img src="../assets/3DReconstruction/p17.webp" alt="Sparse matching → detected key points → fundamental matrix → essential matrix → rotation and translation, compared with ground truth camera pose">\r
  <figcaption>Evaluating the sparse matching method</figcaption>\r
</figure>\r
<p class="table-note">BRISK used as key-point detector and feature descriptor, FLANN for descriptor matching.</p>\r
<div class="table-wrap"><table>\r
  <thead><tr><th>Dataset</th><th>Measurement</th><th class="num">RANSAC</th><th class="num">LMEDS</th><th class="num">7-Point</th><th class="num">8-Point</th></tr></thead>\r
  <tbody>\r
    <tr><th scope="row" rowspan="3">TUM Intrinsic</th><td>Average rotation error</td><td class="num">0.0616</td><td class="num">0.1813</td><td class="num">0.1813</td><td class="num best">0.0296</td></tr>\r
    <tr><td>Abnormal fundamental matrix count</td><td class="num">20</td><td class="num">60</td><td class="num">60</td><td class="num best">9</td></tr>\r
    <tr><td>Average translation error</td><td class="num">0.9993</td><td class="num">0.9998</td><td class="num">0.9998</td><td class="num">0.9995</td></tr>\r
    <tr><th scope="row" rowspan="3">KITTI Raw</th><td>Average rotation error</td><td class="num">0.0125</td><td class="num best">0.0055</td><td class="num best">0.0055</td><td class="num">0.0199</td></tr>\r
    <tr><td>Abnormal fundamental matrix count</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>\r
    <tr><td>Average translation error</td><td class="num">0.7645</td><td class="num best">0.5275</td><td class="num best">0.5275</td><td class="num">0.9225</td></tr>\r
  </tbody>\r
</table></div>\r
<p class="table-note">Again, translation error is too high for all methods, so ground-truth translation was used for the subsequent steps.</p>\r
\r
<h3>Image rectification</h3>\r
<figure>\r
  <img src="../assets/3DReconstruction/p19.webp" alt="Image pairs of the relief and a KITTI street scene before and after rectification">\r
  <figcaption>Image pairs before and after rectification (TUM and KITTI)</figcaption>\r
</figure>\r
<figure>\r
  <img src="../assets/3DReconstruction/p20.webp" alt="Epipolar geometry diagram and epipolar lines drawn on a KITTI stereo pair">\r
  <figcaption>The fundamental matrix determines the epipolar lines</figcaption>\r
</figure>\r
\r
<h3>Dense matching</h3>\r
<p>Once the fundamental, essential, translation and rotation matrices are known, the rectified pair is used to calculate a disparity map.</p>\r
<figure class="fig-md">\r
  <img src="../assets/3DReconstruction/p22.webp" alt="Rectified image with matches → calculate disparity → disparity map">\r
</figure>\r
\r
<h4>Block Matching (BM)</h4>\r
<ul>\r
  <li>Once correspondences lie on parallel epipolar lines, the left image can be scanned line by line.</li>\r
  <li>For each pixel, find “similar” pixels in the right image.</li>\r
  <li>Individual pixels are hard to match, so a block of flattened pixels of size K×K is used.</li>\r
  <li>The difference along the x-axis gives the disparity.</li>\r
</ul>\r
<p>Similarity is measured as the sum of absolute differences (SAD) between two K×K windows flattened to vectors <b>w</b><sub>L</sub>, <b>w</b><sub>R</sub>:</p>\r
<p class="formula">SAD(x, y, d) = ‖ <b>w</b><sub>L</sub>(x, y) − <b>w</b><sub>R</sub>(x − d, y) ‖</p>\r
<figure>\r
  <div class="pair">\r
  <img src="../assets/3DReconstruction/p23.webp" alt="Left and right image with scanline and matching score curve">\r
  <img src="../assets/3DReconstruction/p24.webp" alt="Left and right image with windows wL and wR">\r
  </div>\r
  <figcaption>Scanning along the scanline and the resulting matching score</figcaption>\r
</figure>\r
\r
<h4>Semi-Global Block Matching (SGBM)</h4>\r
<ul>\r
  <li>“Global” because it considers information available in the whole image.</li>\r
  <li>It does so by considering neighbouring pixels in multiple directions to calculate the disparity.</li>\r
  <li>Again a K×K block is used, and 8 directions around it are considered.</li>\r
  <li>The direction with the minimum aggregated matching cost is used to calculate the disparity.</li>\r
  <li>Uses the Birchfield–Tomasi dissimilarity to find “similar” pixels. For left and right images with columns x<sub>l</sub>, x<sub>r</sub> on the same scanline, symmetric functions are defined using the linear interpolation functions Î<sub>l</sub>, Î<sub>r</sub> of the image intensities I<sub>l</sub>, I<sub>r</sub>; the minimum of the two gives the dissimilarity.</li>\r
</ul>\r
<p class="formula">d̄(x<sub>l</sub>, x<sub>r</sub>, I<sub>l</sub>, I<sub>r</sub>) = min<sub>x<sub>r</sub>−½ ≤ x ≤ x<sub>r</sub>+½</sub> | I<sub>l</sub>(x<sub>l</sub>) − Î<sub>r</sub>(x) |</p>\r
<p class="formula">d(x<sub>l</sub>, x<sub>r</sub>) = min{ d̄(x<sub>l</sub>, x<sub>r</sub>, I<sub>l</sub>, I<sub>r</sub>), d̄(x<sub>r</sub>, x<sub>l</sub>, I<sub>r</sub>, I<sub>l</sub>) }</p>\r
<p>With D the dissimilarity term and R a regularisation term computed from neighbouring pixels, the total cost minimised for the disparity is <span class="formula" style="display:inline;padding:0">E = D + R</span>.</p>\r
<figure>\r
  <img src="../assets/3DReconstruction/p25.webp" alt="8 path directions for cost aggregation and illustration of matching windows">\r
  <figcaption>Aggregation along multiple directions</figcaption>\r
</figure>\r
\r
<h3>Generated disparity maps</h3>\r
<figure>\r
  <img src="../assets/3DReconstruction/p27.webp" alt="BM and SGBM disparity maps for TUM and KITTI without post filtering, very noisy">\r
  <figcaption>Without post-filtering (top: BM, bottom: SGBM; left: TUM, right: KITTI Raw)</figcaption>\r
</figure>\r
<figure>\r
  <img src="../assets/3DReconstruction/p28.webp" alt="BM and SGBM disparity maps for TUM and KITTI with post filtering, smooth">\r
  <figcaption>With post-filtering</figcaption>\r
</figure>\r
\r
<h3>Dense matching evaluation</h3>\r
<p>The generated depth map is compared pixel-wise with the ground-truth depth map. A pixel counts as an error when its difference exceeds both 3 px and 5 %:</p>\r
<p class="formula">Error = count( |d<sub>ij</sub> − d′<sub>ij</sub>| &gt; 3 px &amp; |d<sub>ij</sub> − d′<sub>ij</sub>| / d′<sub>ij</sub> &gt; 0.05 ) / total valid pixels</p>\r
<figure class="fig-md">\r
  <img src="../assets/3DReconstruction/p29.webp" alt="Generated depth map compared pixel-wise with ground truth depth map">\r
</figure>\r
<figure>\r
  <div class="pair">\r
  <img src="../assets/3DReconstruction/p30.webp" alt="Line chart of depth error over ~350 image pairs; block matching (red) has many high spikes, SGBM (blue) stays low">\r
  <img src="../assets/3DReconstruction/p31.webp" alt="Line chart of disparity error on KITTI over ~200 image pairs; SGBM (blue) mostly below BM (red)">\r
  </div>\r
  <figcaption>Left: depth error vs. ground-truth depth (TUM). Right: disparity error vs. ground-truth disparity (KITTI). Red = Block Matching, blue = Semi-Global Block Matching – SGBM is consistently lower.</figcaption>\r
</figure>\r
\r
<h2>3D model generation</h2>\r
<figure class="fig-sm">\r
  <img src="../assets/3DReconstruction/p33.webp" alt="Diagram of left and right cameras observing a scene, used to triangulate points">\r
  <figcaption>Disparity map to point cloud by triangulation</figcaption>\r
</figure>\r
<figure>\r
  <img src="../assets/3DReconstruction/p34.webp" alt="Disparity maps and resulting 3D models for TUM and KITTI">\r
  <figcaption>Disparity map → 3D model (left: TUM, right: KITTI Raw)</figcaption>\r
</figure>\r
<figure>\r
  <div class="pair">\r
  <img src="../assets/3DReconstruction/p35.webp" alt="Textured mesh of the relief">\r
  <img src="../assets/3DReconstruction/p36.webp" alt="Point cloud of a KITTI street">\r
  </div>\r
  <figcaption>Generated mesh (TUM Intrinsic3D) and generated point cloud (KITTI)</figcaption>\r
</figure>\r
\r
<h2>Conclusion</h2>\r
<ol>\r
  <li>Implemented a stereo reconstruction pipeline.</li>\r
  <li>Covered key steps such as calibration, key-point calculation and 3D model construction.</li>\r
  <li>Results show the ease and efficiency of reconstructing 3D models from stereo images.</li>\r
  <li>The generated 3D models have potential applications in scene understanding, object recognition and navigation.</li>\r
</ol>\r
<h2>Discussion</h2>\r
<ol>\r
  <li>The project serves as a starting point for further research and development.</li>\r
  <li>ICP methods and other data could be incorporated for improved 3D models.</li>\r
  <li>New applications could be explored in fields such as robotics and autonomous vehicles.</li>\r
  <li>There is room to improve the accuracy and robustness of the 3D models.</li>\r
  <li>New algorithms and techniques could be integrated for better performance.</li>\r
</ol>\r
\r
<footer>Converted from the project presentation (3DReconstruction.pdf).</footer>\r
</main>\r
</body>\r
</html>\r
`,wv=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Drone Simulator on seL4 / TRENTOS</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/drone.html">中文</a></nav>

<header class="hero">
  <p class="eyebrow">Operating Systems · seL4 &amp; TRENTOS · TUM</p>
  <h1>Drone Simulator</h1>
  <p class="lead">A flight task running on a TRENTOS-based companion computer that sends MAVLink commands to PX4 and flies a simulated drone in Gazebo to a predefined destination, guided by GPS and altitude sensor data.</p>
  <ul class="tags"><li>seL4</li><li>TRENTOS</li><li>PX4 SITL</li><li>Gazebo Garden</li><li>MAVLink</li><li>C / C++</li><li>Raspberry Pi 3</li><li>Docker</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/DroneDemo.mp4"></video>
  <figcaption>Demo video</figcaption>
</figure>

<h2>Project overview</h2>
<div class="callout"><p><strong>Goal:</strong> implement a flight task on the companion computer (TRENTOS) that sends actuator MAVLink messages to PX4 in order to fly the simulated drone to a predefined destination, guided by GPS and altitude sensor data from Gazebo.</p></div>

<h3>System architecture</h3>
<p>The system consists of four components:</p>
<ul>
  <li><strong>Gazebo Garden</strong> – the simulator</li>
  <li><strong>PX4</strong> – the flight control app (SITL)</li>
  <li><strong>C++ Proxy</strong> – bridges simulator sensor data to the companion computer</li>
  <li><strong>TRENTOS-based companion computer</strong> – runs the flight task</li>
</ul>
<figure class="fig-md">
  <img src="../assets/Drone/p03.webp" alt="Component diagram: flight control (PX4 SITL), companion computer (TrentOS), C++ proxy and Gazebo simulator, connected via MAVLink control data, socket/custom RPC sensor data and Gazebo Transport">
  <figcaption>Drone software components and their interfaces</figcaption>
</figure>

<h2>PX4 SITL (flight control app)</h2>
<div class="grid">
  <div class="card"><h4>What is PX4?</h4><p>“The brain of a drone”. Its architecture consists of concurrent modules that communicate asynchronously via the uORB message bus, and it talks to the outside world through MAVLink.</p></div>
  <div class="card"><h4>How to communicate?</h4><p>Through PX4 startup and its predefined MAVLink channels.</p></div>
  <div class="card"><h4>What to communicate?</h4><p>Flight modes – in particular <em>offboard</em> mode – and standard MAVLink messages.</p></div>
</div>
<figure class="fig-sm">
  <img src="../assets/Drone/p05.webp" alt="PX4 module architecture diagram">
  <figcaption>PX4 architecture overview</figcaption>
</figure>

<h3>Patches to PX4</h3>
<p>PX4 almost has everything needed – except that the default PX4 drone model for Gazebo has no GPS or altitude sensor. Models are specified in SDF, an XML-based format, so the PX4-Autopilot repository was patched with:</p>
<ul>
  <li>a custom drone model</li>
  <li>a custom world</li>
  <li>a custom (minimal) MAVLink message channel</li>
</ul>

<h2>C++ Proxy &amp; Gazebo</h2>
<p>Two major questions: how to get sensor data from Gazebo, and how to communicate with TRENTOS.</p>
<p><strong>Gazebo</strong> is a 3D robotics simulator with a plugin system for modifying models and pub-sub communication. The work needed was (1) sensor integration and (2) world modification.</p>
<figure>
  <img src="../assets/Drone/p09.webp" alt="Gazebo publishes GPS and altitude data over GZ transport to the C++ proxy, which encodes with Jansson and sends over UDP to the companion computer">
  <figcaption>The proxy subscribes to <code>/gps_sensor/navsat</code> and <code>/altitude_sensor/altimeter</code> via GZ Transport, encodes the data as JSON with Jansson and forwards it over UDP.</figcaption>
</figure>

<h2>Companion computer &amp; MAVLink</h2>
<p>MAVLink is a binary telemetry protocol and a transport-agnostic library. The most important commands used:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Command</th><th>Purpose in the flight task</th></tr></thead>
  <tbody>
    <tr><td><code>MAV_CMD_DO_SET_MODE</code></td><td>Switch PX4 into offboard mode</td></tr>
    <tr><td><code>MAV_CMD_COMPONENT_ARM_DISARM</code></td><td>Arm the drone</td></tr>
    <tr><td><code>SET_POSITION_TARGET_LOCAL_NED</code></td><td>Send position setpoints (take-off height, target coordinates)</td></tr>
    <tr><td><code>MAV_CMD_NAV_LAND</code></td><td>Land the drone</td></tr>
  </tbody>
</table></div>
<figure>
  <img src="../assets/Drone/p12.webp" alt="TRENTOS component diagram: libs (ds_sensor_data, mavlink), CompanionComputer (main, ds_timer, ds_flight_task_sm), Network Stack, NIC driver and Time Server">
  <figcaption>Companion computer components on TRENTOS</figcaption>
</figure>

<h3>State machine</h3>
<figure>
  <img src="../assets/Drone/p13.webp" alt="State machine: PRE_READY → CHANGE_MODE → ARM → TAKEOFF → FLY_PHASE → LAND">
  <figcaption>Flight task state machine</figcaption>
</figure>
<ol class="flow">
  <li><code>PRE_READY</code> initial state</li><li class="arrow">→</li>
  <li><code>CHANGE_MODE</code> to offboard</li><li class="arrow">→</li>
  <li><code>ARM</code> the drone</li><li class="arrow">→</li>
  <li><code>TAKEOFF</code> to predefined height</li><li class="arrow">→</li>
  <li><code>FLY_PHASE</code> to predefined coordinates</li><li class="arrow">→</li>
  <li><code>LAND</code></li>
</ol>

<h2>Final setup</h2>
<h3>Hardware</h3>
<figure class="fig-md">
  <img src="../assets/Drone/p15.webp" alt="Raspberry Pi 3 with an Ethernet cable and serial adapter">
  <figcaption>TRENTOS running on a Raspberry Pi 3</figcaption>
</figure>
<h3>Network architecture</h3>
<p>The TRENTOS application on the RPi 3 is connected to the host PC via Ethernet (point-to-point network <code>10.0.0.x/24</code>). The host forwards UDP between <code>10.0.0.11</code> and <code>host.docker.internal</code>; inside Docker, the <code>ds_px4</code> container runs Gazebo, PX4 SITL (sending to port 11001) and the C++ proxy (sending to port 11000).</p>
<figure>
  <img src="../assets/Drone/p16.webp" alt="Network diagram: ethernet point-to-point 10.0.0.0/24, host UDP forwarders, trentos_app_rpi3 listening on ports 11000 and 11001, docker default bridge with ds_px4 container">
  <figcaption>Network architecture</figcaption>
</figure>

<h2>Project details</h2>
<h3>Problems faced</h3>
<ul>
  <li>Jansson: <code>sys_clock_gettime()</code> not implemented</li>
  <li>Docker GUI (had to disable X11 authentication)</li>
  <li>Firewall on NixOS</li>
  <li>Socket can’t handle large traffic on QEMU</li>
  <li><code>OS_Socket_recvfrom()</code> bug (or feature?): when nothing is received, <code>srcAddr</code> is set to the last address from which something was received</li>
  <li>Can’t use a more complex world (some models take a long time to load)</li>
</ul>
<h3>Ways to improve</h3>
<ul>
  <li><strong>UDP forwarding is a hassle</strong> – better utility scripts that set up all components (instead of opening many terminals); <code>iptables</code> in a production setting.</li>
  <li><strong>Make the flight task even more robust</strong> – handle the scenario where PX4 and Gazebo are killed and restarted.</li>
</ul>

<h3>Repository structure</h3>
<pre><code>.
├── Dockerfile          # Dockerfile for the \`ds_px4\` container
├── external            # Where external dependencies are placed
│   ├── mavlink/        # Pre-compiled MAVLink headers for C/C++
│   └── PX4-Autopilot/  # PX4 repository
├── Trentos             # TrentOS folder added manually
│   ├── docker/         # TrentOS docker containers
│   └── sdk/            # TrentOS sdk
├── px4.patch           # Patches to PX4-Autopilot
├── scripts/            # Utility script
└── src                 # Source code
    ├── apps
    │   ├── proxy/      # C++ proxy source code
    │   └── trentos/    # TrentOS application (companion computer) source code
    └── libs/           # Modules shared between proxy/ and trentos/</code></pre>

<footer>Converted from the project presentation (Drone.pdf).</footer>
</main>
</body>
</html>
`,Ev=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>FAST AI Movie Web</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/fast-ai-movie.html">中文</a></nav>

<header class="hero">
  <p class="eyebrow">Web application · FAST AI Movies</p>
  <h1>FAST AI Movie Web</h1>
  <p class="lead">A web platform that turns text and images into customized training videos with an AI speaker – and lets users edit every part of the generated video.</p>
  <ul class="tags"><li>Frontend</li><li>Reusable components</li><li>Video editing</li><li>AI video generation</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/FASTAIMOVIE.mp4"></video>
  <figcaption>Video demo</figcaption>
</figure>

<h2>Project overview</h2>
<ol class="flow">
  <li>Input text and images</li><li class="arrow">→</li><li>Choose a speaker for the video</li><li class="arrow">→</li><li>Customized training video</li>
</ol>
<figure class="fig-md">
  <img src="../assets/FASTAIMOVIE/p02.webp" alt="Illustration: upload text, logo, fonts and images, then receive a training video">
</figure>

<div class="pair">
  <figure style="margin:0"><img src="../assets/FASTAIMOVIE/p03.webp" alt="Five steps: configure corporate design, upload product sheets and compliance regulations, configure additional settings, generate video, keep video up to date"></figure>
  <div>
    <h3 style="margin-top:0">User workflow</h3>
    <ol>
      <li>Configure corporate design</li>
      <li>Upload existing product sheets, compliance regulations, …</li>
      <li>Configure additional settings</li>
      <li>Generate the video</li>
      <li>Keep the video up to date</li>
    </ol>
    <h3>Our work</h3>
    <p>Generating videos and making them editable – including chapter texts, audio, slides, icons and quizzes – plus corporate design configuration, admin settings, asset management and internal visualization.</p>
  </div>
</div>

<h2>Chapter edit function</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p05.webp" alt="Edit Video screen with numbered controls for chapters and subchapters">
</figure>
<div class="table-wrap"><table>
  <thead><tr><th>#</th><th>Control</th></tr></thead>
  <tbody>
    <tr><td>①</td><td>Add a new subchapter (major)</td></tr>
    <tr><td>②</td><td>Choose a subchapter title</td></tr>
    <tr><td>③</td><td>A: move subchapter up · B: move subchapter down · C: add a new subchapter</td></tr>
    <tr><td>④</td><td>Delete a subchapter</td></tr>
    <tr><td>⑤</td><td>Play audio</td></tr>
    <tr><td>⑥</td><td>Choose a chapter title</td></tr>
    <tr><td>⑦</td><td>Delete the whole chapter</td></tr>
  </tbody>
</table></div>

<h2>Chapter overview function</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p06.webp" alt="Chapter overview side panel with highlighted current subchapter">
</figure>
<ol>
  <li>Click to collapse or expand the chapter overview.</li>
  <li>The currently viewed subchapter is highlighted.</li>
  <li>Click to jump to the corresponding subchapter.</li>
</ol>

<h2>Image component function</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p07.webp" alt="Image list panel with upload, edit, delete and drag-to-insert controls">
</figure>
<ol>
  <li>Upload an image from local storage.</li>
  <li>Click to edit an image.</li>
  <li>Delete an image.</li>
  <li>Drag an image from the image list into the text area to insert it.</li>
</ol>

<h2>Image edit function</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p08.webp" alt="Image editor with focus areas, delete, save, replace buttons and settings panel">
</figure>
<ol>
  <li>Edit focus areas – move, resize and delete.</li>
  <li>Delete the current image.</li>
  <li>Duplicate as a new image with the current changes.</li>
  <li>Replace the current image with the current changes.</li>
  <li>Add a new focus area.</li>
  <li>Edit image settings (border color, background style, image type: full-screen / half-screen / small corner, visualization time).</li>
</ol>

<h2>Integration of reusable components</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p09.webp" alt="New Video page reusing the textarea and image components">
</figure>
<ol>
  <li>Editable textarea component.</li>
  <li>Image component (with drag-to-insert and image editing).</li>
</ol>

<footer>Converted from the project presentation (FASTAIMOVIE.pdf).</footer>
</main>
</body>
</html>
`,Tv=`<!doctype html>\r
<html lang="en">\r
<head>\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1">\r
<title>Project Portfolio</title>\r
<link rel="stylesheet" href="../assets/style.css">\r
</head>\r
<body>\r
<main>\r
<nav class="topbar"><span></span><a class="lang" href="../zh/index.html">中文</a></nav>\r
<header class="hero">\r
  <p class="eyebrow">Xiaoheng Hu</p>\r
  <h1>Projects</h1>\r
</header>\r
<ul class="index-list">\r
  <li><a href="pingpong-vision.html"><img class="pixel-icon" src="../assets/icons/pingpong-vision@4x.png" alt="" width="64" height="64"><b>PingPong Vision</b><span>Camera + AI OCR that reads production-machine HMI screens and turns them into live dashboard data.</span></a></li>\r
  <li><a href="web-harvest-rag.html"><img class="pixel-icon" src="../assets/icons/web-harvest-rag@4x.png" alt="" width="64" height="64"><b>Web Harvest RAG</b><span>Config-driven RAG chatbot with hybrid vector + BM25 retrieval, benchmarked on BEIR and deployed to production.</span></a></li>\r
  <li><a href="you-dont-need-rag.html"><img class="pixel-icon" src="../assets/icons/you-dont-need-rag@4x.png" alt="" width="64" height="64"><b>You Don’t Need RAG</b><span>Turn a list of URLs into one clean text file or a RAG-ready ZIP – whichever the knowledge base actually needs.</span></a></li>\r
  <li><a href="fast-ai-movie.html"><img class="pixel-icon" src="../assets/icons/fast-ai-movie@4x.png" alt="" width="64" height="64"><b>FAST AI Movie Web</b><span>Web platform for generating and editing AI training videos from text and images.</span></a></li>\r
  <li><a href="vehicle-identification.html"><img class="pixel-icon" src="../assets/icons/vehicle-identification@4x.png" alt="" width="64" height="64"><b>Vehicle Noise Classification</b><span>Classifying cars, trucks and other vehicles from roadside acoustic measurements (Müller-BBM, TUM).</span></a></li>\r
  <li><a href="3d-reconstruction.html"><img class="pixel-icon" src="../assets/icons/3d-reconstruction@4x.png" alt="" width="64" height="64"><b>Stereo Reconstruction</b><span>Stereo pipeline from image pairs to disparity maps, point clouds and meshes on TUM and KITTI data.</span></a></li>\r
  <li><a href="drone.html"><img class="pixel-icon" src="../assets/icons/drone@4x.png" alt="" width="64" height="64"><b>Drone Simulator on seL4 / TRENTOS</b><span>Companion computer on TRENTOS flying a PX4 / Gazebo simulated drone via MAVLink.</span></a></li>\r
</ul>\r
</main>\r
</body>\r
</html>\r
`,Cv=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PingPong Vision</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/pingpong-vision.html">中文</a></nav>

<header class="hero">
  <p class="eyebrow">HMI monitoring platform</p>
  <h1>PingPong Vision – camera-based HMI visibility</h1>
  <p class="lead">PingPong Vision reads production-machine HMI screens with a camera and AI OCR, then turns the readings into live dashboard data.</p>
  <ul class="tags"><li>Camera input</li><li>Gemini OCR</li><li>FastAPI</li><li>Flask</li><li>TimescaleDB</li><li>React</li><li>nginx</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/pingpong.mp4"></video>
  <figcaption>Demo video</figcaption>
</figure>

<div class="stats">
  <div class="stat"><b>Camera</b><span>Input</span></div>
  <div class="stat"><b>AI OCR</b><span>Field reading</span></div>
  <div class="stat"><b>DB</b><span>History + events</span></div>
</div>

<h2>Problem: machine data is trapped behind HMI screens</h2>
<p>Older machines and vendor-controlled platforms may not expose PLC/API data. The visible screen is often the only universal interface.</p>
<div class="grid">
  <div class="card"><h4><span class="n">01</span>No PLC integration</h4><p>The system avoids control commands, OPC UA tags and machine automation logic.</p></div>
  <div class="card"><h4><span class="n">02</span>Works across brands</h4><p>A camera can observe Siemens, Multivac, legacy panels and analog-like interfaces.</p></div>
  <div class="card"><h4><span class="n">03</span>Creates history</h4><p>Visible values become structured readings, events and dashboard trends.</p></div>
</div>

<h2>Core workflow: one camera turns screens into data</h2>
<p>The operator configures the HMI once, then the worker repeatedly reads the configured fields from live frames.</p>
<ol class="flow">
  <li><strong>01 Capture HMI</strong> – a USB camera streams the machine screen locally or through the relay</li><li class="arrow">→</li>
  <li><strong>02 Calibrate fields</strong> – onboarding stores screen corners and field bounding boxes</li><li class="arrow">→</li>
  <li><strong>03 Read + persist</strong> – the worker applies perspective correction, calls Gemini OCR and saves readings</li>
</ol>

<h2>Architecture</h2>
<figure>
  <img src="../assets/pingpong/p04.webp" alt="Architecture: on-site PC camera-server pushes frames over WebSocket to cloud relay-server (FastAPI, :8080); hmi-data-server (Flask API, :5100) fetches latest frame, does perspective correction and Gemini OCR, writes to TimescaleDB (:5432); browser shows live view via MJPEG and a React + nginx dashboard via REST">
  <figcaption>On-site PC → cloud / server → browser</figcaption>
</figure>

<h3>Each service owns one part of the vision pipeline</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Service</th><th>Responsibility</th></tr></thead>
  <tbody>
    <tr><td><code>camera-server</code></td><td>Runs on the camera PC; exposes LAN MJPEG or pushes frames to the relay.</td></tr>
    <tr><td><code>relay-server</code></td><td>Buffers the latest frame per camera and fans out MJPEG to the frontend and worker.</td></tr>
    <tr><td><code>hmi-data-server</code></td><td>Business REST API; owns HMI pages, fields, readings, events and monitor jobs.</td></tr>
    <tr><td><code>hmi-monitor-worker</code></td><td>A single process that actually runs the OCR loops and writes readings.</td></tr>
    <tr><td>TimescaleDB</td><td>Stores HMI pages, field definitions, time-series readings, events and worker status.</td></tr>
  </tbody>
</table></div>

<h2>Data model: HMI data lives in the backend</h2>
<p>The browser owns only temporary session state. HMI business data is loaded from and written to the HMI data server.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Table</th><th>Content</th></tr></thead>
  <tbody>
    <tr><td><code>hmi_pages</code></td><td>Configured camera/HMI page or machine location.</td></tr>
    <tr><td><code>hmi_fields</code></td><td>Detected labels, units, visual types and <code>bbox_percent</code>.</td></tr>
    <tr><td><code>hmi_readings</code></td><td>Time-series OCR values, confidence, latency, metadata.</td></tr>
    <tr><td><code>hmi_events</code></td><td>Image-change, operational and field-threshold incidents.</td></tr>
    <tr><td><code>hmi_monitor_jobs</code></td><td>Desired monitor state plus worker heartbeat/status.</td></tr>
  </tbody>
</table></div>

<h2>Events and reliability: monitoring is more than OCR values</h2>
<div class="grid">
  <div class="card"><h4><span class="n">01</span>Image-change AI</h4><p>Compares baseline and live frames to detect hands, a moved camera, page changes or value changes.</p></div>
  <div class="card"><h4><span class="n">02</span>Operational events</h4><p>The worker records <code>camera_connection_lost</code> and <code>repeated_unreadable_values</code>.</p></div>
  <div class="card"><h4><span class="n">03</span>Field thresholds</h4><p>Dashboard rules turn readings into warnings and alerts.</p></div>
</div>
<div class="callout"><p><strong>Known constraint:</strong> calibration depends on camera alignment and HMI page stability. If the camera moves or the screen layout changes, the stored field boxes can stop matching the live image.</p></div>

<h2>Takeaway</h2>
<p><strong>PingPong Vision reads the machine screen, not the machine controller.</strong> The project demonstrates a non-invasive path to production visibility: camera capture, AI OCR, time-series storage, event logging, and a dashboard for HMI-based machine monitoring.</p>

<footer>Converted from the project presentation (pingpong.pdf).</footer>
</main>
</body>
</html>
`,Dv=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vehicle Noise Classification</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/vehicle-identification.html">中文</a></nav>

<header class="hero">
  <p class="eyebrow">Müller-BBM Industry Solutions GmbH · Federal Department of Environment · TUM 1.000+ Project</p>
  <h1>Determining the Noise Behaviour of the German Vehicle Fleet by Measurement</h1>
  <p class="lead">Classifying passenger cars (PKW), heavy vehicles (LKW) and other vehicles from roadside acoustic measurements – data analysis, feature engineering and two machine-learning approaches, built in a five-day project week.</p>
  <ul class="tags"><li>Python</li><li>pandas</li><li>TensorFlow / Keras</li><li>Transformer</li><li>Dense NN</li><li>KNN</li><li>Acoustics</li></ul>
</header>

<h2>Project of the Federal Department of Environment</h2>
<p>Determine the <strong>noise behaviour</strong> of the German vehicle fleet by making measurements at <strong>30 different locations</strong>.</p>
<div class="callout"><p><strong>Project aim:</strong> develop a classification method for passenger cars and heavy vehicles in order to distinguish them.</p></div>
<figure class="fig-md">
  <img src="../assets/VehicleIdentification/p02.webp" alt="Roadside microphone mast → sound signal → car or truck">
  <figcaption>Roadside measurement → acoustic signal → vehicle class</figcaption>
</figure>

<h2>Timeline</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Day</th><th>Activities</th></tr></thead>
  <tbody>
    <tr><td>Day 1 – 08/01</td><td>Kick-off · introduction to the problem · project management · data processing: analyse data distribution and use different data features · machine learning: try different models</td></tr>
    <tr><td>Day 2 – 09/01</td><td>Continue with data processing · machine learning: build one big model</td></tr>
    <tr><td>Day 3 – 10/01</td><td>Continue with data processing · model training · model testing · performance analysis · look into further approaches · <strong>reflection meeting</strong></td></tr>
    <tr><td>Day 4 – 11/01</td><td>Look deeper into further approaches · analyse results · documentation</td></tr>
    <tr><td>Day 5 – 12/01</td><td>Presentation · poster creation</td></tr>
  </tbody>
</table></div>

<h2>Problem approach</h2>
<ol class="flow">
  <li>Data</li><li class="arrow">→</li><li>Data processing</li><li class="arrow">+</li><li>Build ML models</li><li class="arrow">→</li>
  <li>Model training</li><li class="arrow">⇄</li><li>Model validation &amp; parameter adjustment</li><li class="arrow">→</li><li>Model testing</li><li class="arrow">→</li><li>Presentation of results</li>
</ol>
<figure>
  <img src="../assets/VehicleIdentification/p04.webp" alt="Workflow icons from data to presentation of results">
</figure>

<h2>Captured data</h2>
<p>Each pass-by record contains 34 fields. The fields highlighted in the original slide (outlined below) were the ones selected for modelling.</p>
<figure>
  <img src="../assets/VehicleIdentification/p05.webp" alt="List of 34 captured data fields with descriptions; selected fields highlighted">
  <figcaption>All captured fields (selected fields highlighted)</figcaption>
</figure>
<h3>Examples</h3>
<figure>
  <img src="../assets/VehicleIdentification/p06.webp" alt="Three plots: level of the pass-by over time, third-octave spectrum, and localization trajectory">
  <figcaption>Level of the pass-by · third-octave spectrum · localization trajectory</figcaption>
</figure>
<ul>
  <li><code>Lmax</code>: maximum sound pressure level (max of the <code>levelTime</code> curve)
    <ul><li><code>T_6</code>: width of the peak in the <code>levelTime</code> curve at (Lmax − 6) dB</li></ul></li>
  <li><code>thirdSpectrum</code>: third-octave spectrum measured in a short time interval around the time of maximum sound level</li>
  <li><code>trajectory</code>: measure of vehicle localization (angle between the microphone-pair axis and the direction of sound)</li>
</ul>

<h2>Data processing</h2>
<h3>Slope of trajectory as an additional feature</h3>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p07.webp" alt="Localization trajectories of a PKW and an LKW, and the point-wise slope of the trajectory"></figure>
  <div>
    <ul>
      <li>LKWs are longer ⇒ slower increase of the localization angle.</li>
      <li>The point-wise slope of <code>trajectory</code> can be used as an additional data feature.</li>
    </ul>
  </div>
</div>

<h3>Filtering out noise in level-time curves</h3>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p08.webp" alt="Level-time curve with the T_6 interval at 6 dB below the peak highlighted in green, other regions in red"></figure>
  <div>
    <ul>
      <li>Cropping <code>levelTime</code> data to the T_6 interval helps remove noise produced by non-target cars in the audio recordings.</li>
      <li>This should be handled carefully for closely following cars (their peaks might not be resolved by the 6 dB criterion).</li>
    </ul>
  </div>
</div>

<h3>Removing features by normalization</h3>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p09.webp" alt="Scatter plot of Lmax vs. velocity for PKW, LKW and else with regression curves"><figcaption>Lmax vs. velocity with regression curves</figcaption></figure>
  <div>
    <ul>
      <li>The maximum sound pressure level (Lmax) increases linearly with lg(velocity).</li>
      <li>The feature <code>velocity</code> can be discarded if Lmax values are normalized by lg(velocity).</li>
    </ul>
  </div>
</div>

<h3>Vehicle class distribution</h3>
<figure class="fig-md">
  <img src="../assets/VehicleIdentification/p10.webp" alt="Bar chart of vehicle class occurrences; PKW about 30,000, LKW about 3,500, other classes small">
  <figcaption>PKW dominates the dataset (~30,000 samples); LKW is second (~3,500)</figcaption>
</figure>

<h3>Filtering features</h3>
<p><code>df</code> – all data points, all features (40114 × <strong>34</strong>) → <code>filtered_df</code> – all data points, suggested features (40114 × <strong>9</strong>):</p>
<p><code>ID</code> · <code>MP</code> · <code>Lmax1</code> · <code>levelTime1</code> · <code>T6_1</code> · <code>thirdSpectrum1</code> · <code>trajectory</code> · <code>radarPulses</code> · <code>vehicleClass</code></p>

<h3>Adjusting the class distribution</h3>
<p>The data table is shuffled, then an equal number of data points is extracted for each class, giving <code>filtered_final_df</code> with an equal ratio <code>Else : LKW : PKW</code> (<strong>10563</strong> × 9).</p>
<figure>
  <img src="../assets/VehicleIdentification/p12.webp" alt="Shuffled data table excerpt, class distribution before and after balancing">
  <figcaption>Shuffled table and class distribution before / after balancing</figcaption>
</figure>

<h3>Normalization</h3>
<ul>
  <li><strong>Single values:</strong> find min and max in the column and normalize as <code>new_x = (x − min) / (max − min)</code>.</li>
  <li><strong>Arrays:</strong> divide each value in every array by the maximum value found in the column.</li>
</ul>
<p>Locations with special conditions were removed:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Location</th><th>Condition</th></tr></thead>
  <tbody>
    <tr><td>MP 30, MP 5</td><td>Road surface</td></tr>
    <tr><td>MP 12, MP 13</td><td>Winter</td></tr>
  </tbody>
</table></div>

<h3>Datasets</h3>
<p class="table-note">Status: <span style="opacity:.6">designed</span> (grey), created, <strong>used</strong> (highlighted).</p>
<div class="table-wrap"><table>
  <thead><tr><th>Name</th><th>Description</th><th class="num">Size</th></tr></thead>
  <tbody>
    <tr><td>ID1</td><td>all data points, all features</td><td class="num">29882 × 34</td></tr>
    <tr><td>ID2</td><td>all data points, selected features</td><td class="num">39676 × 9</td></tr>
    <tr class="dim"><td>ID3</td><td>all data points, all features, 3 classes</td><td class="num"></td></tr>
    <tr class="hl"><td>ID4</td><td>all data points, selected features, 3 vehicle classes</td><td class="num">39676 × 9</td></tr>
    <tr class="dim"><td>ID5</td><td>all features, 3 equally distributed vehicle classes</td><td class="num"></td></tr>
    <tr class="hl"><td>ID6</td><td>selected features, 3 equally distributed vehicle classes</td><td class="num">10419 × 9</td></tr>
    <tr class="dim"><td>ID7</td><td>all features, 3 equally distributed classes, special locations in bottom rows</td><td class="num"></td></tr>
    <tr><td>ID8</td><td>selected features, 3 equally distributed vehicle classes, special locations in bottom rows</td><td class="num">10419 × 9</td></tr>
    <tr class="hl"><td>ID9</td><td>selected features, 3 equally distributed vehicle classes, special locations excluded</td><td class="num">9873 × 9</td></tr>
    <tr class="dim"><td>ID10</td><td>selected features, 3 equally distributed vehicle classes, additional features</td><td class="num"></td></tr>
  </tbody>
</table></div>

<h2>Approach 1: neural network</h2>
<p>Model 1 is a Transformer applied to the <code>levelTime1</code> sequence; its output is combined with the other parameters and fed into Model 2, a dense neural network that outputs one of three classes: <code>PKW</code>, <code>LKW</code> or <code>ELSE</code>.</p>
<figure>
  <img src="../assets/VehicleIdentification/p15.webp" alt="Model 1 Transformer on levelTime1 feeding Model 2 dense neural network with other parameters, outputs PKW, LKW, ELSE">
</figure>
<figure>
  <img src="../assets/VehicleIdentification/p16.webp" alt="Keras model graph: input → multi-head attention → layer normalization → global max pooling, concatenated with second input → dense/dropout layers → 3 outputs">
  <figcaption>Keras model graph. Input 1 – a 24-band third-octave spectrum (24×1) → multi-head attention → layer normalization → global max pooling (1); input 2 – two scalar features (Lmax / velocity) → concatenate (3) → Dense(64) → Dropout → Dense(64) → Dropout → Dense(3)</figcaption>
</figure>

<h3>Model testing</h3>
<figure>
  <img src="../assets/VehicleIdentification/p17.webp" alt="Epoch loss falling from ~0.8 to ~0.62 and epoch accuracy rising to ~0.70 over 15 epochs">
  <figcaption>Epoch loss and accuracy – epochs = 15, batch_size = 64, learning_rate = 1e-2</figcaption>
</figure>

<h3>Test accuracy</h3>
<p class="table-note">Confusion matrix from test group ID 2 (rows = true labels, columns = predicted labels).</p>
<div class="table-wrap"><table>
  <thead><tr><th>True \\ Predicted</th><th class="num">LKW</th><th class="num">PKW</th><th class="num">Else</th><th class="num">True positive rate</th></tr></thead>
  <tbody>
    <tr><th scope="row">LKW</th><td class="num best">1574</td><td class="num">22</td><td class="num">125</td><td class="num">91.4 %</td></tr>
    <tr><th scope="row">PKW</th><td class="num">16</td><td class="num best">1470</td><td class="num">210</td><td class="num">86.7 %</td></tr>
    <tr><th scope="row">Else</th><td class="num">267</td><td class="num">824</td><td class="num best">600</td><td class="num">35.5 %</td></tr>
  </tbody>
</table></div>
<p class="table-note">For the “Else” class, 48.7 % are misclassified as PKW and 15.8 % as LKW.</p>
<figure class="fig-md">
  <img src="../assets/VehicleIdentification/p18.webp" alt="Confusion matrix heat map with true positive rates">
</figure>

<h3>Results</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Group</th><th class="num">Accuracy</th><th class="num">PKW (TPR)</th><th class="num">LKW (TPR)</th><th class="num">Else (TPR)</th></tr></thead>
  <tbody>
    <tr class="hl"><td>Model validation – train and test <em>with</em> special roads</td><td class="num">0.7091</td><td class="num">0.867</td><td class="num">0.914</td><td class="num">0.355</td></tr>
    <tr><td>Train with special roads, test on all datasets</td><td class="num best">0.7637</td><td class="num">0.836</td><td class="num">0.938</td><td class="num">0.362</td></tr>
    <tr class="hl"><td>Model validation – train and test <em>without</em> special roads</td><td class="num">0.7062</td><td class="num">0.866</td><td class="num">0.922</td><td class="num">0.354</td></tr>
    <tr><td>Train with special roads, test without special roads</td><td class="num">0.6759</td><td class="num">0.941</td><td class="num">0.965</td><td class="num">0.118</td></tr>
    <tr><td>Train without special roads, test with special roads</td><td class="num" style="color:var(--warn);font-weight:700">0.4532</td><td class="num">0.914</td><td class="num">0.765</td><td class="num">0.45</td></tr>
  </tbody>
</table></div>
<ul>
  <li>Robust classification between LKW (trucks) and PKW (cars) on the given datasets.</li>
  <li>A noticeable limitation when identifying the “Else” group, evidenced by its lower true positive rate.</li>
  <li>The model trained with special-road data performs well on the other datasets, but not the other way round. Using the dataset with special roads for training is recommended.</li>
</ul>

<h2>Approach 2: conventional ML – K-Nearest Neighbors</h2>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p21.webp" alt="KNN illustration: a point P with arrows to its nearest neighbours in classes A, B and C"><figcaption>KNN illustration (source: medium.com/@sachinsoni600517)</figcaption></figure>
  <div>
    <p><strong>Three classes:</strong> PKW, LKW, Else</p>
    <p><strong>Input:</strong> float array</p>
    <p><strong>Output:</strong> classification index</p>
  </div>
</div>

<h3>Testing results</h3>
<p class="table-note">Full input = <code>levelTime1</code>, <code>trajectory</code>, <code>thirdSpectrum1</code>, <code>T6_1</code>, <code>Lmax1</code>, <code>RadarPulse</code>.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Training size</th><th>Dataset</th><th>Input</th><th class="num">All</th><th class="num">LKW</th><th class="num">PKW</th><th class="num">Else</th></tr></thead>
  <tbody>
    <tr><td>(23243, 188)</td><td>ID4_normalized.csv</td><td>full input</td><td class="num best">0.81524</td><td class="num">0.81905</td><td class="num best">0.94997</td><td class="num">0.23712</td></tr>
    <tr><td>(6130, 188) – three classes equally distributed</td><td>ID6_normalized.csv</td><td>full input</td><td class="num">0.69073</td><td class="num">0.91007</td><td class="num">0.72144</td><td class="num">0.43209</td></tr>
    <tr><td>(5794, 188) – special locations removed</td><td>ID9_normalized.csv</td><td>full input</td><td class="num">0.70075</td><td class="num">0.90214</td><td class="num">0.74240</td><td class="num">0.45900</td></tr>
    <tr><td>(6130, 24)</td><td>ID6_normalized.csv</td><td><code>thirdSpectrum1</code> only</td><td class="num">0.69195</td><td class="num best">0.91223</td><td class="num">0.67797</td><td class="num best">0.47761</td></tr>
    <tr><td>(2043, 188) – reduced training size</td><td>ID6_normalized.csv</td><td>full input</td><td class="num">0.67813</td><td class="num">0.90214</td><td class="num">0.74240</td><td class="num">0.45900</td></tr>
    <tr><td>(8173, 188) – increased training size</td><td>ID6_normalized.csv</td><td>full input</td><td class="num">0.69814</td><td class="num">0.91079</td><td class="num">0.73252</td><td class="num">0.45152</td></tr>
  </tbody>
</table></div>
<p class="table-note">The high overall accuracy of ID4 reflects its unbalanced class distribution (dominated by PKW); its “Else” rate is the lowest.</p>
<ul>
  <li>Commendable performance with a small dataset; as the volume of data increases, the model improves slightly.</li>
  <li>The model is good at distinguishing PKW and LKW, but its ability to recognise the “Else” category is relatively weak.</li>
  <li>The <code>thirdSpectrum</code> feature plays a crucial role in the model’s performance.</li>
</ul>

<h2>Final results</h2>
<div class="pair">
  <ul>
    <li>Two machine-learning approaches to classify the vehicles</li>
    <li>Several data-processing steps to improve the classification</li>
    <li>Improvement of soft skills</li>
    <li>A poster giving an overview of the project week</li>
  </ul>
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p25.webp" alt="Project poster" style="max-width:280px"><figcaption>Project poster</figcaption></figure>
</div>

<h2>Conclusion</h2>
<ul>
  <li>The dataset contains a lot of information and measurements.</li>
  <li>Vehicle classes are unevenly distributed → this gives a false impression of a high-performing model.</li>
  <li>In-depth analysis of the recorded data has much potential (sound pressure level vs. velocity, …).</li>
  <li>Model fine-tuning has some impact.</li>
  <li>Both models classify well between LKW and PKW.</li>
  <li>The “Else” group is difficult to classify.</li>
</ul>
<h2>Outlook</h2>
<ul>
  <li>Put more focus on data processing, especially physical analyses.</li>
  <li>Increase the number of relevant features.</li>
  <li>Investigate whether some features can be excluded due to missing impact.</li>
  <li>Determine features for distinguishing between LKW and Else.</li>
  <li>Collect more data from under-represented classes for training.</li>
</ul>

<footer>Converted from the project presentation (VehicleIdentification.pdf).</footer>
</main>
</body>
</html>
`,Sv=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Web Harvest RAG</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/web-harvest-rag.html">中文</a></nav>

<header class="hero">
  <p class="eyebrow">RAG · Retrieval research · Production deployment</p>
  <h1>Web Harvest RAG</h1>
  <p class="lead">A config-driven RAG chatbot starter – scrape any site or PDF, chunk and embed it, retrieve with hybrid vector + keyword search, and chat over it. Built, benchmarked against a public IR baseline, and deployed to production.</p>
  <ul class="tags"><li>Next.js 15</li><li>FastAPI</li><li>Supabase pgvector</li><li>FAISS</li><li>BM25</li><li>OpenAI</li><li>Docker + nginx</li></ul>
  <div class="links">
    <a href="https://webrag.huxiaoheng.com"><span>Live demo</span>webrag.huxiaoheng.com</a>
    <a href="https://github.com/huxiaoheng44/web-harvest-rag"><span>Source</span>github.com/huxiaoheng44/web-harvest-rag</a>
  </div>
</header>

<h2>Architecture: Scrape → Chunk → Embed → Retrieve → Chat</h2>
<p>Six stages, each independently swappable – the retrieval stage is where most of the engineering work actually happened.</p>
<div class="grid">
  <div class="card"><h4><span class="n">1</span>Scrape</h4><p><code>config/sources.json</code> → <code>scraper.py</code> pulls HTML pages and PDFs and extracts clean readable content.</p></div>
  <div class="card"><h4><span class="n">2</span>Chunk</h4><p>Fixed-size token windows or structural (heading-aware) splitting – compared systematically, not assumed.</p></div>
  <div class="card"><h4><span class="n">3</span>Embed</h4><p>OpenAI <code>text-embedding-3-small</code>, cached by content hash so re-runs don’t re-pay the API.</p></div>
  <div class="card"><h4><span class="n">4</span>Retrieve</h4><p>Vector (FAISS / Supabase pgvector) + BM25, fused.</p></div>
  <div class="card"><h4><span class="n">5</span>Generate</h4><p>The FastAPI backend builds context from retrieved chunks, calls the chat model and stores the conversation.</p></div>
  <div class="card"><h4><span class="n">6</span>Chat</h4><p>Next.js UI – add sources, watch the index build live, ask questions, see cited sources.</p></div>
</div>
<div class="callout"><p>Production uses <strong>Supabase pgvector</strong> for retrieval. A separate, standalone module – <strong>retrieval_lab</strong> – exists purely to answer “is this actually the best way to do stage 4?” without touching the live app.</p></div>

<h2>retrieval_lab: a standalone experimentation harness</h2>
<p>Questions about retrieval quality, each answered with real numbers instead of assumptions – kept fully separate from the production app.</p>
<div class="grid">
  <div class="card"><h4><span class="n">1</span>Chunking strategies</h4><p>Fixed-size token windows vs. structural (heading-aware) splitting, compared head to head.</p></div>
  <div class="card"><h4><span class="n">2</span>Vector vs. BM25 vs. Hybrid</h4><p>FAISS cosine search, rank_bm25 keyword search, and two fusion strategies (linear + RRF).</p></div>
  <div class="card"><h4><span class="n">3</span>Cross-encoder rerank</h4><p>ms-marco-MiniLM reranking the hybrid candidate pool – tested, not assumed to help.</p></div>
  <div class="card"><h4><span class="n">4</span>Chunk-size sweep</h4><p>200 / 500 / 1,000-token chunks, measuring the completeness-vs-noise trade-off directly.</p></div>
  <div class="card"><h4><span class="n">5</span>LLM query rewriting</h4><p>Paraphrase each query into variants, retrieve for each, merge via reciprocal rank fusion.</p></div>
  <div class="card"><h4><span class="n">6</span>Error-bucket analysis</h4><p>Every imperfect-recall query auto-sorted into a failure category, then read through by hand.</p></div>
  <div class="card"><h4><span class="n">7</span>Alpha tuning</h4><p>Hybrid fusion weight swept on a held-out validation split, evaluated on a separate test split.</p></div>
  <div class="card"><h4><span class="n">8</span>LLM-as-judge answer eval</h4><p>Not just “was the right chunk retrieved” – is the generated answer actually faithful to it?</p></div>
</div>
<div class="table-wrap"><table>
  <thead><tr><th>Corpus</th><th>Content</th></tr></thead>
  <tbody>
    <tr><td>A – MULTIVAC</td><td>24 scraped company pages/PDFs, 30 hand-labeled queries</td></tr>
    <tr><td>B – NFCorpus</td><td>Public BEIR benchmark: 3,633 docs, 323 official test queries</td></tr>
  </tbody>
</table></div>

<h2>Five real bugs, found by actually testing</h2>
<p>Every one of these was caught by running the system end to end and looking hard at the output – not by code review alone.</p>
<div class="grid">
  <div class="card"><span class="badge">Security</span><h4>Unauthenticated secrets endpoint</h4><p>The in-app settings panel let anyone GET the real OpenAI/Supabase keys in plain JSON with zero auth. Disabled in production before the first public deploy.</p></div>
  <div class="card"><span class="badge">Correctness</span><h4>Zero-fill scoring bug in hybrid fusion</h4><p>Candidates outside one method’s top-20 were scored 0 instead of their real value – unfairly penalizing chunks only one method liked. Fixed with exact re-scoring over the full candidate union.</p></div>
  <div class="card"><span class="badge">Reproducibility</span><h4>Non-deterministic recall@k</h4><p>The same query, index and alpha produced three different recall@1 scores across three runs – a bare Python <code>set()</code>’s hash-seed-dependent iteration order was silently reshuffling score ties.</p></div>
  <div class="card"><span class="badge">Eval calibration</span><h4>LLM judge conflated two failure modes</h4><p>A correct “I can’t confirm this” refusal was scored as harshly as a hallucination. Average score jumped 3.32 → 4.92 / 5 once the judge prompt separated retrieval failure from generation failure.</p></div>
  <div class="card"><span class="badge">Production</span><h4>Dependency drift broke the live chat</h4><p>An unpinned supabase client picked up a newer API where <code>.insert().select().single()</code> no longer exists – every <code>/chat</code> call returned 500. Found by smoke-testing the fresh deploy, not by CI.</p></div>
</div>

<h2>Findings: what actually won, and where</h2>
<h3>MULTIVAC – structural-500</h3>
<p class="table-note">recall@k, 30 hand-labeled queries</p>
<div class="table-wrap"><table>
  <thead><tr><th>Method</th><th class="num">Recall@1</th><th class="num">Recall@5</th></tr></thead>
  <tbody>
    <tr><td>Vector only</td><td class="num">60.0 %</td><td class="num">93.3 %</td></tr>
    <tr><td>BM25 only</td><td class="num">75.0 %</td><td class="num">95.0 %</td></tr>
    <tr><td>Hybrid (linear)</td><td class="num best">78.3 %</td><td class="num best">96.7 %</td></tr>
  </tbody>
</table></div>
<h3>NFCorpus – fixed-500 (BEIR)</h3>
<p class="table-note">recall@k, 323 official test queries, tuned α = 0.8</p>
<div class="table-wrap"><table>
  <thead><tr><th>Method</th><th class="num">Recall@5</th><th class="num">Recall@100</th></tr></thead>
  <tbody>
    <tr><td>Vector only</td><td class="num">13.9 %</td><td class="num">35.4 %</td></tr>
    <tr><td>BM25 only</td><td class="num">11.6 %</td><td class="num">23.0 %</td></tr>
    <tr><td>Hybrid (linear)</td><td class="num best">14.4 %</td><td class="num best">36.0 %</td></tr>
  </tbody>
</table></div>
<div class="callout">
  <p><strong>BM25 wins on MULTIVAC</strong> – brand-heavy content (“MLC”, “PEAQ”, “GS1 Digital Link”) rewards exact keyword match. <strong>Vector wins on NFCorpus</strong> – technical medical abstracts vs. colloquial queries create a vocabulary gap that only semantic search bridges. Hybrid beats the better of the two on both corpora, but only once tuned per corpus. Neither method is a safe default.</p>
</div>
<p class="table-note">Validation: this harness’s BM25 recall@100 on NFCorpus (23.0 %) lands within 2 points of BEIR’s published official BM25 baseline (25.0 %) – the low absolute numbers are a property of the dataset, not a bug in the implementation.</p>

<h2>Deployed, not just demoed</h2>
<p><a href="https://webrag.huxiaoheng.com">webrag.huxiaoheng.com</a> – a real conversation, retrieving from the production index.</p>
<figure class="fig-md">
  <img src="../assets/WebHarvestRAG/p06.webp" alt="Screenshot of the Web Harvest Chatbot answering a question with cited sources">
</figure>
<div class="grid">
  <div class="card"><h4>Infrastructure</h4><p>Docker Compose – isolated FastAPI + Next.js containers, bound to localhost only, <code>restart: unless-stopped</code>.</p></div>
  <div class="card"><h4>Edge</h4><p>nginx reverse proxy + Let’s Encrypt TLS, sharing the host with two other live projects.</p></div>
  <div class="card"><h4>Data</h4><p>Production Supabase index rebuilt end to end: 81 → 340 chunks across all 24 source documents.</p></div>
  <div class="card"><h4>Verified</h4><p>Real question in, real cited answer out – checked through the public HTTPS domain, not just localhost.</p></div>
</div>

<h2>Stack: everything that shipped</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Technology</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td>Next.js 15</td><td>Chat UI, App Router</td></tr>
    <tr><td>FastAPI</td><td>RAG, sources, conversations</td></tr>
    <tr><td>Supabase</td><td>pgvector, <code>match_chunks</code> RPC</td></tr>
    <tr><td>OpenAI</td><td>gpt-4o-mini + text-embedding-3-small</td></tr>
    <tr><td>FAISS</td><td>Local vector search (retrieval_lab)</td></tr>
    <tr><td>rank_bm25</td><td>Keyword search (retrieval_lab)</td></tr>
    <tr><td>sentence-transformers</td><td>Cross-encoder rerank</td></tr>
    <tr><td>Docker + nginx</td><td>Production deployment</td></tr>
  </tbody>
</table></div>

<footer>Converted from the project presentation (WebHarvestRAG.pdf).</footer>
</main>
</body>
</html>
`,Mv=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>You Don't Need RAG</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← All projects</a><a class="lang" href="../zh/you-dont-need-rag.html">中文</a></nav>

<header class="hero">
  <p class="eyebrow">Tool · Knowledge-base export</p>
  <h1>You Don’t Need RAG</h1>
  <p class="lead">Paste a list of URLs, get one clean text file or a structured RAG-ready ZIP – whichever your knowledge base actually needs. A tool built on a simple bet: most “you need RAG” problems fit in a context window.</p>
  <ul class="tags"><li>Next.js 15</li><li>React 19</li><li>Python scraper</li><li>No vector DB</li><li>No embeddings</li></ul>
  <div class="links">
    <a href="https://rag.huxiaoheng.com"><span>Live demo</span>rag.huxiaoheng.com</a>
    <a href="https://github.com/huxiaoheng44/You-Don-t-Need-RAG"><span>Source</span>github.com/huxiaoheng44/You-Don-t-Need-RAG</a>
  </div>
</header>

<h2>Why this exists: RAG has become the default answer to everything</h2>
<p>Need to query your docs? RAG. Answer questions about a website? RAG. Give context to a chatbot? RAG. The pattern has real merits – but a long tail of real costs.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Cost</th><th>Why it hurts</th></tr></thead>
  <tbody>
    <tr><td><strong>Chunking is lossy</strong></td><td>Splitting documents into fixed-size chunks destroys context that spans paragraphs. The model only sees fragments.</td></tr>
    <tr><td><strong>Retrieval is imperfect</strong></td><td>Embedding similarity does not equal semantic relevance – the model confidently answers from the wrong chunk anyway.</td></tr>
    <tr><td><strong>Operationally heavy</strong></td><td>An embedding model, a vector database, an ingestion pipeline, a retrieval layer – every piece can fail or drift silently.</td></tr>
    <tr><td><strong>Evaluation is hard</strong></td><td>No single obvious quality metric. Hallucinations can trace back to any layer of the stack.</td></tr>
    <tr><td><strong>Latency adds up</strong></td><td>Every query needs an embedding round-trip plus a vector search before the LLM sees a token.</td></tr>
  </tbody>
</table></div>
<blockquote>“The engineering tendency is to reach for the most sophisticated tool available. The complexity was the overhead, not the solution.”</blockquote>

<h2>The real fix: modern LLMs already fit the whole knowledge base</h2>
<p>GPT-4o, Claude and Gemini 1.5 Pro support 128K to 1M+ token context windows. A 300 KB text file is roughly 75K tokens. No chunking. No retrieval. No pipeline. Just paste.</p>
<div class="stats">
  <div class="stat"><b>128K–1M</b><span>tokens of context in modern LLMs</span></div>
  <div class="stat"><b>75K</b><span>tokens in a 300 KB text file</span></div>
</div>
<ol class="flow">
  <li><strong>Step 1</strong> – scrape the URLs, extract clean readable content</li><li class="arrow">→</li>
  <li><strong>Step 2</strong> – measure the actual size of the scraped content</li><li class="arrow">→</li>
  <li><strong>Decision</strong> – fits a context window? paste the plain-text file. Genuinely large / live-updating / multi-tenant? export the RAG ZIP.</li>
</ol>

<h2>How it works: four steps, no configuration</h2>
<figure>
  <img src="../assets/YouDontNeedRAG/p04.webp" alt="Two screenshots: Add sources step and Review sources step">
</figure>
<div class="grid">
  <div class="card"><h4><span class="n">01</span>Add sources</h4><p>Paste anything with links in it – a list, an email, a markdown doc – and every URL is extracted automatically. Local files (PDF, TXT, MD, JSON, CSV) work too.</p></div>
  <div class="card"><h4><span class="n">02</span>Review</h4><p>URLs and uploaded files are listed separately before scraping starts – nothing runs until you confirm.</p></div>
  <div class="card"><h4><span class="n">03</span>Scrape</h4><p>The content is scraped and its real size measured.</p></div>
  <div class="card"><h4><span class="n">04</span>Export</h4><p>Choose plain text or the RAG ZIP, based on the actual content size.</p></div>
</div>

<h2>Output: two formats, recommended by actual size</h2>
<p>The tool measures the real scraped content and tells you which format fits – it doesn’t make you guess.</p>
<div class="pair">
  <div class="card">
    <h4>Plain Text</h4>
    <p><code>knowledge_base.txt</code> – paste directly into any LLM</p>
<pre><code>=== Page Title ===
URL: https://example.com
Scraped: 2026-01-01T00:00:00Z

Full page content here...

---

=== Next Page ===
...</code></pre>
    <span class="badge">Recommended when it fits a context window</span>
  </div>
  <div class="card">
    <h4>RAG ZIP</h4>
    <p><code>knowledge_base.zip</code> – ready for an embedding pipeline</p>
<pre><code>knowledge_base.zip
├── manifest.json   # id, url, title, char_count
└── pages/
    ├── example-com-abc123.json
    ├── example-com-docs-def456.json
    └── ...</code></pre>
    <span class="badge">Recommended when RAG is actually the right tool</span>
  </div>
</div>

<h2>Not anti-RAG: when you actually do need RAG</h2>
<p>This tool isn’t anti-RAG; it’s pro-pragmatism. RAG is the right call when:</p>
<ul>
  <li>Your knowledge base is genuinely large – millions of tokens, not thousands.</li>
  <li>You need sub-second retrieval over a live-updating corpus.</li>
  <li>You want to retrieve across many different users’ private datasets.</li>
  <li>Your queries are specific enough that full-document context would mostly be noise.</li>
</ul>
<div class="callout"><p><em>“For everything else – try the plain text file first.”</em></p></div>

<h2>Stack: everything that shipped</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Component</th><th>Details</th></tr></thead>
  <tbody>
    <tr><td>Next.js 15</td><td>App Router, React 19</td></tr>
    <tr><td>Python scraper</td><td>requests, BeautifulSoup, markdownify, pdfplumber</td></tr>
    <tr><td>File-based jobs</td><td>Async scraping jobs in <code>data/jobs/&lt;uuid&gt;</code></td></tr>
    <tr><td>Plain text output</td><td>Single concatenated <code>.txt</code>, paste-ready</td></tr>
    <tr><td>RAG ZIP output</td><td><code>manifest.json</code> + per-page JSON via <code>zipfile</code></td></tr>
    <tr><td>No vector DB</td><td>The point of the project – zero infrastructure by default</td></tr>
  </tbody>
</table></div>

<footer>Converted from the project presentation (YouDontNeedRAG.pdf).</footer>
</main>
</body>
</html>
`,Bv=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>立体视觉三维重建</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/3d-reconstruction.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">3D Scanning and Motion Capturing · 慕尼黑工业大学</p>
  <h1>立体视觉三维重建</h1>
  <p class="lead">完整的立体重建流程——从图像对出发，经过稀疏匹配、图像校正和稠密匹配，生成视差图、点云和网格，并在 TUM Intrinsic3D 与 KITTI 数据集上进行评估。</p>
  <ul class="tags"><li>C++</li><li>OpenCV</li><li>Eigen</li><li>FLANN</li><li>Ceres Solver</li><li>SGBM</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/3D.mp4"></video>
  <figcaption>演示视频</figcaption>
</figure>

<h2>动机与思路</h2>
<h3>应用场景</h3>
<figure>
  <img src="../assets/3DReconstruction/p03.webp" alt="心脏三维模型、城堡模型和城市街道模型">
  <figcaption>用于手术规划的人体器官三维模型 · 历史建筑重建 · 为机器人导航重建环境</figcaption>
</figure>
<figure class="fig-md">
  <img src="../assets/3DReconstruction/p04.webp" alt="巴黎圣母院的点云重建">
  <figcaption>巴黎圣母院重建</figcaption>
</figure>
<h3>我们的思路</h3>
<p>以同一物体的多张照片作为输入，经过重建，输出三维模型。</p>
<figure>
  <img src="../assets/3DReconstruction/p05.webp" alt="多张浮雕照片 → 输入 → 重建 → 输出 → 三维模型">
  <figcaption>输入图像 → 重建 → 三维模型</figcaption>
</figure>

<h2>相关工作</h2>
<h3>数据集</h3>
<div class="grid">
  <div class="card">
    <h4>TUM Intrinsic3D – Bricks RGBD</h4>
    <p>彩色图和深度图 · 彩色与深度相机内参 · 相机位姿矩阵 · 单个物体的多视角图像</p>
  </div>
  <div class="card">
    <h4>KITTI Stereo 2015</h4>
    <p>视差图 · 彩色图 · 相机畸变系数 · 相机外参 · 不同场景的图像</p>
  </div>
</div>
<figure>
  <div class="pair">
  <img src="../assets/3DReconstruction/p07.webp" alt="TUM Intrinsic3D Bricks 预览">
  <img src="../assets/3DReconstruction/p08.webp" alt="KITTI Stereo Evaluation 2015 预览">
  </div>
  <figcaption>TUM Intrinsic3D Bricks（左）与 KITTI Stereo 2015（右）</figcaption>
</figure>

<h3>数据集对比</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>TUM Intrinsic3D</th><th>KITTI Stereo 2015</th></tr></thead>
  <tbody>
    <tr><th scope="row">优点</th>
      <td><ul><li>无需考虑相机畸变</li><li>可以使用 ICP</li><li>提供真实深度（ground truth）</li></ul></td>
      <td><ul><li>相机参数易于加载</li><li>真实视差可直接用于评估</li></ul></td></tr>
    <tr><th scope="row">缺点</th>
      <td><ul><li>没有真实视差</li></ul></td>
      <td><ul><li>单一场景的图像数量不足</li></ul></td></tr>
  </tbody>
</table></div>

<h3>使用的库</h3>
<div class="grid">
  <div class="card"><h4>OpenCV</h4><p>计算机视觉算法</p></div>
  <div class="card"><h4>Eigen</h4><p>矩阵运算</p></div>
  <div class="card"><h4>FLANN</h4><p>最近邻搜索</p></div>
  <div class="card"><h4>Ceres Solver</h4><p>非线性优化</p></div>
</div>

<h3>重建流程</h3>
<figure>
  <img src="../assets/3DReconstruction/p11.webp" alt="流程：图像对 → 关键点 → 特征匹配 → 校正图像 → 视差图 → 深度图 → 网格">
  <figcaption>图像对 → 去畸变与关键点检测 → 特征描述子匹配 → 稀疏匹配（估计相机位姿 / 基础矩阵）→ 图像校正 → 稠密匹配 → 视差图 → 深度图 → 三角化 → 网格</figcaption>
</figure>

<h2>方法</h2>
<h3>稀疏匹配——关键点检测器</h3>
<p>对比了六种检测器：ORB、BRISK、FAST、Shi-Tomasi、SURF 和 SIFT。</p>
<figure>
  <img src="../assets/3DReconstruction/p14.webp" alt="ORB、Brisk、Fast、Shi-Tomasi、SURF、SIFT 在同一图像上检测到的关键点">
  <figcaption>各方法检测到的关键点</figcaption>
</figure>

<h3>关键点检测器与特征描述子对比</h3>
<p class="table-note">基础矩阵计算使用 RANSAC，描述子匹配使用 FLANN。</p>
<div class="table-wrap"><table>
  <thead><tr><th>数据集</th><th>指标</th><th class="num">BRISK</th><th class="num">ORB</th><th class="num">Shi-Tomasi</th><th class="num">SIFT</th><th class="num">SURF</th><th class="num">FAST</th></tr></thead>
  <tbody>
    <tr><th scope="row" rowspan="4">TUM Intrinsic</th><td>平均旋转误差</td><td class="num best">0.0616</td><td class="num">0.1241</td><td class="num">0.1053</td><td class="num">0.1014</td><td class="num">0.0838</td><td class="num">0.0619</td></tr>
    <tr><td>异常基础矩阵数量</td><td class="num best">20</td><td class="num">40</td><td class="num">33</td><td class="num">33</td><td class="num">27</td><td class="num best">20</td></tr>
    <tr><td>平均平移误差</td><td class="num">0.9993</td><td class="num">0.9998</td><td class="num">0.9993</td><td class="num">0.9994</td><td class="num">0.9993</td><td class="num">0.9994</td></tr>
    <tr><td>处理 10 对图像耗时（秒）</td><td class="num best">22.5254</td><td class="num">57.269</td><td class="num">62.391</td><td class="num">430.32</td><td class="num">44.541</td><td class="num">670.31</td></tr>
    <tr><th scope="row" rowspan="3">KITTI Raw</th><td>平均旋转误差</td><td class="num">0.0125</td><td class="num">0.0318</td><td class="num">0.0097</td><td class="num best">0.0078</td><td class="num">–</td><td class="num">0.0111</td></tr>
    <tr><td>异常基础矩阵数量</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">–</td><td class="num">0</td></tr>
    <tr><td>平均平移误差</td><td class="num">0.7645</td><td class="num">1.03877</td><td class="num">0.5479</td><td class="num best">0.5403</td><td class="num">–</td><td class="num">0.6106</td></tr>
  </tbody>
</table></div>
<p class="table-note">所有方法的平移误差都过高，因此后续步骤使用真实平移量。</p>

<h3>基础矩阵估计</h3>
<p>为了评估稀疏匹配方法，先由检测到的关键点估计基础矩阵，再转换为本质矩阵并分解出旋转和平移，与真实相机位姿进行比较（旋转和平移的均方误差）。</p>
<figure>
  <img src="../assets/3DReconstruction/p17.webp" alt="稀疏匹配 → 检测到的关键点 → 基础矩阵 → 本质矩阵 → 旋转与平移，与真实相机位姿比较">
  <figcaption>稀疏匹配方法的评估流程</figcaption>
</figure>
<p class="table-note">使用 BRISK 作为关键点检测器和特征描述子，FLANN 进行描述子匹配。</p>
<div class="table-wrap"><table>
  <thead><tr><th>数据集</th><th>指标</th><th class="num">RANSAC</th><th class="num">LMEDS</th><th class="num">七点法</th><th class="num">八点法</th></tr></thead>
  <tbody>
    <tr><th scope="row" rowspan="3">TUM Intrinsic</th><td>平均旋转误差</td><td class="num">0.0616</td><td class="num">0.1813</td><td class="num">0.1813</td><td class="num best">0.0296</td></tr>
    <tr><td>异常基础矩阵数量</td><td class="num">20</td><td class="num">60</td><td class="num">60</td><td class="num best">9</td></tr>
    <tr><td>平均平移误差</td><td class="num">0.9993</td><td class="num">0.9998</td><td class="num">0.9998</td><td class="num">0.9995</td></tr>
    <tr><th scope="row" rowspan="3">KITTI Raw</th><td>平均旋转误差</td><td class="num">0.0125</td><td class="num best">0.0055</td><td class="num best">0.0055</td><td class="num">0.0199</td></tr>
    <tr><td>异常基础矩阵数量</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>
    <tr><td>平均平移误差</td><td class="num">0.7645</td><td class="num best">0.5275</td><td class="num best">0.5275</td><td class="num">0.9225</td></tr>
  </tbody>
</table></div>
<p class="table-note">同样，所有方法的平移误差都过高，后续步骤使用真实平移量。</p>

<h3>图像校正</h3>
<figure>
  <img src="../assets/3DReconstruction/p19.webp" alt="浮雕和 KITTI 街景图像对在校正前后的对比">
  <figcaption>校正前后的图像对（TUM 与 KITTI）</figcaption>
</figure>
<figure>
  <img src="../assets/3DReconstruction/p20.webp" alt="对极几何示意图以及在 KITTI 立体图像对上绘制的极线">
  <figcaption>基础矩阵决定了极线</figcaption>
</figure>

<h3>稠密匹配</h3>
<p>得到基础矩阵、本质矩阵、平移矩阵和旋转矩阵后，利用校正后的图像对计算视差图。</p>
<figure class="fig-md">
  <img src="../assets/3DReconstruction/p22.webp" alt="带匹配的校正图像 → 计算视差 → 视差图">
</figure>

<h4>块匹配（Block Matching, BM）</h4>
<ul>
  <li>当对应点位于平行的极线上时，就可以逐行扫描左图。</li>
  <li>对每个像素，在右图中寻找“相似”的像素。</li>
  <li>单个像素难以匹配，因此使用大小为 K×K 的像素块（展平为向量）。</li>
  <li>x 方向上的差值即为视差。</li>
</ul>
<p>相似度用两个展平为向量 <b>w</b><sub>L</sub>、<b>w</b><sub>R</sub> 的 K×K 窗口之间的绝对差之和（SAD）来衡量：</p>
<p class="formula">SAD(x, y, d) = ‖ <b>w</b><sub>L</sub>(x, y) − <b>w</b><sub>R</sub>(x − d, y) ‖</p>
<figure>
  <div class="pair">
  <img src="../assets/3DReconstruction/p23.webp" alt="左右图像中的扫描线及匹配得分曲线">
  <img src="../assets/3DReconstruction/p24.webp" alt="左右图像中的窗口 wL 与 wR">
  </div>
  <figcaption>沿扫描线搜索及得到的匹配得分</figcaption>
</figure>

<h4>半全局块匹配（Semi-Global Block Matching, SGBM）</h4>
<ul>
  <li>之所以称为“全局”，是因为它会利用整幅图像中的信息。</li>
  <li>具体做法是在多个方向上考虑相邻像素来计算视差。</li>
  <li>同样取 K×K 的块，并考虑其周围的 8 个方向。</li>
  <li>选择聚合匹配代价最小的方向来计算视差。</li>
  <li>使用 Birchfield–Tomasi 相异度寻找“相似”像素：对于同一扫描线上左右图像的列 x<sub>l</sub>、x<sub>r</sub>，利用图像强度 I<sub>l</sub>、I<sub>r</sub> 的线性插值函数 Î<sub>l</sub>、Î<sub>r</sub> 定义一对对称函数，二者的最小值即为相异度。</li>
</ul>
<p class="formula">d̄(x<sub>l</sub>, x<sub>r</sub>, I<sub>l</sub>, I<sub>r</sub>) = min<sub>x<sub>r</sub>−½ ≤ x ≤ x<sub>r</sub>+½</sub> | I<sub>l</sub>(x<sub>l</sub>) − Î<sub>r</sub>(x) |</p>
<p class="formula">d(x<sub>l</sub>, x<sub>r</sub>) = min{ d̄(x<sub>l</sub>, x<sub>r</sub>, I<sub>l</sub>, I<sub>r</sub>), d̄(x<sub>r</sub>, x<sub>l</sub>, I<sub>r</sub>, I<sub>l</sub>) }</p>
<p>记 D 为相异度项，R 为由相邻像素计算的正则项，则用于求视差的总代价为 <span class="formula" style="display:inline;padding:0">E = D + R</span>。</p>
<figure>
  <img src="../assets/3DReconstruction/p25.webp" alt="代价聚合的 8 个路径方向及匹配窗口示意">
  <figcaption>沿多个方向进行代价聚合</figcaption>
</figure>

<h3>生成的视差图</h3>
<figure>
  <img src="../assets/3DReconstruction/p27.webp" alt="未经后处理滤波的 BM 和 SGBM 视差图，噪声很多">
  <figcaption>未经后处理滤波（上：BM，下：SGBM；左：TUM，右：KITTI Raw）</figcaption>
</figure>
<figure>
  <img src="../assets/3DReconstruction/p28.webp" alt="经过后处理滤波的 BM 和 SGBM 视差图，较为平滑">
  <figcaption>经过后处理滤波</figcaption>
</figure>

<h3>稠密匹配评估</h3>
<p>将生成的深度图与真实深度图逐像素比较。当某像素的差值同时超过 3 像素和 5% 时，记为错误：</p>
<p class="formula">Error = count( |d<sub>ij</sub> − d′<sub>ij</sub>| &gt; 3 px &amp; |d<sub>ij</sub> − d′<sub>ij</sub>| / d′<sub>ij</sub> &gt; 0.05 ) / 有效像素总数</p>
<figure class="fig-md">
  <img src="../assets/3DReconstruction/p29.webp" alt="生成的深度图与真实深度图逐像素比较">
</figure>
<figure>
  <div class="pair">
  <img src="../assets/3DReconstruction/p30.webp" alt="约 350 对图像的深度误差折线图；块匹配（红）有大量尖峰，SGBM（蓝）保持较低">
  <img src="../assets/3DReconstruction/p31.webp" alt="KITTI 上约 200 对图像的视差误差折线图；SGBM（蓝）大多低于 BM（红）">
  </div>
  <figcaption>左：与真实深度图对比的深度误差（TUM）；右：与真实视差图对比的视差误差（KITTI）。红色为块匹配，蓝色为半全局块匹配——SGBM 的误差始终更低。</figcaption>
</figure>

<h2>三维模型生成</h2>
<figure class="fig-sm">
  <img src="../assets/3DReconstruction/p33.webp" alt="左右相机观察场景并进行三角化的示意图">
  <figcaption>通过三角化将视差图转换为点云</figcaption>
</figure>
<figure>
  <img src="../assets/3DReconstruction/p34.webp" alt="TUM 和 KITTI 的视差图及对应三维模型">
  <figcaption>视差图 → 三维模型（左：TUM，右：KITTI Raw）</figcaption>
</figure>
<figure>
  <div class="pair">
  <img src="../assets/3DReconstruction/p35.webp" alt="浮雕的纹理网格">
  <img src="../assets/3DReconstruction/p36.webp" alt="KITTI 街道点云">
  </div>
  <figcaption>生成的网格（TUM Intrinsic3D）与生成的点云（KITTI）</figcaption>
</figure>

<h2>结论</h2>
<ol>
  <li>实现了立体重建流程。</li>
  <li>涵盖标定、关键点计算和三维模型构建等关键步骤。</li>
  <li>结果表明，从立体图像重建三维模型简单且高效。</li>
  <li>生成的三维模型在场景理解、物体识别和导航等方面具有应用潜力。</li>
</ol>
<h2>讨论</h2>
<ol>
  <li>本项目可作为进一步研究和开发的起点。</li>
  <li>可以引入 ICP 方法和其他数据来改进三维模型。</li>
  <li>可在机器人、自动驾驶等领域探索新的应用。</li>
  <li>三维模型的精度和鲁棒性仍有提升空间。</li>
  <li>可以集成新的算法和技术以获得更好的性能。</li>
</ol>

<footer>根据项目演示文稿（3DReconstruction.pdf）转换。</footer>
</main>
</body>
</html>
`,_v=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>无人机模拟器</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/drone.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">操作系统 · seL4 &amp; TRENTOS · 慕尼黑工业大学</p>
  <h1>无人机模拟器</h1>
  <p class="lead">在基于 TRENTOS 的伴飞计算机（Companion Computer）上运行飞行任务，向 PX4 发送 MAVLink 指令，依据 GPS 和高度传感器数据，让 Gazebo 中的模拟无人机飞往预定目的地。</p>
  <ul class="tags"><li>seL4</li><li>TRENTOS</li><li>PX4 SITL</li><li>Gazebo Garden</li><li>MAVLink</li><li>C / C++</li><li>Raspberry Pi 3</li><li>Docker</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/DroneDemo.mp4"></video>
  <figcaption>演示视频</figcaption>
</figure>

<h2>项目概览</h2>
<div class="callout"><p><strong>目标：</strong>在伴飞计算机（TRENTOS）上实现飞行任务，向 PX4 发送执行器 MAVLink 消息，利用 Gazebo 提供的 GPS 和高度传感器数据，引导模拟无人机飞到预定目的地。</p></div>

<h3>系统架构</h3>
<p>系统由四个组件构成：</p>
<ul>
  <li><strong>Gazebo Garden</strong>——仿真器</li>
  <li><strong>PX4</strong>——飞控程序（SITL）</li>
  <li><strong>C++ 代理（Proxy）</strong>——把仿真器的传感器数据转发给伴飞计算机</li>
  <li><strong>基于 TRENTOS 的伴飞计算机</strong>——运行飞行任务</li>
</ul>
<figure class="fig-md">
  <img src="../assets/Drone/p03.webp" alt="组件图：飞控（PX4 SITL）、伴飞计算机（TrentOS）、C++ 代理和 Gazebo 仿真器，分别通过 MAVLink 控制数据、socket/自定义 RPC 传感器数据和 Gazebo Transport 连接">
  <figcaption>无人机软件组件及其接口</figcaption>
</figure>

<h2>PX4 SITL（飞控程序）</h2>
<div class="grid">
  <div class="card"><h4>PX4 是什么？</h4><p>“无人机的大脑”。其架构由并发模块组成，模块之间通过 uORB 消息总线异步通信，并通过 MAVLink 与外部世界交互。</p></div>
  <div class="card"><h4>如何通信？</h4><p>通过 PX4 启动配置及其预定义的 MAVLink 通道。</p></div>
  <div class="card"><h4>通信内容是什么？</h4><p>飞行模式（尤其是 <em>offboard</em> 模式）以及标准 MAVLink 消息。</p></div>
</div>
<figure class="fig-sm">
  <img src="../assets/Drone/p05.webp" alt="PX4 模块架构图">
  <figcaption>PX4 架构概览</figcaption>
</figure>

<h3>对 PX4 的补丁</h3>
<p>PX4 几乎具备所需的一切——只是 PX4 为 Gazebo 提供的默认无人机模型没有 GPS 和高度传感器。模型使用基于 XML 的 SDF 格式描述，因此我们对 PX4-Autopilot 仓库打了补丁，加入：</p>
<ul>
  <li>自定义无人机模型</li>
  <li>自定义世界（world）</li>
  <li>自定义（精简的）MAVLink 消息通道</li>
</ul>

<h2>C++ 代理与 Gazebo</h2>
<p>两个核心问题：如何从 Gazebo 获取传感器数据，以及如何与 TRENTOS 通信。</p>
<p><strong>Gazebo</strong> 是一个三维机器人仿真器，具有用于修改模型的插件系统和发布-订阅式通信机制。需要完成的工作是：(1) 传感器集成；(2) 世界场景修改。</p>
<figure>
  <img src="../assets/Drone/p09.webp" alt="Gazebo 通过 GZ transport 向 C++ 代理发布 GPS 和高度数据，代理用 Jansson 编码后通过 UDP 发送到伴飞计算机">
  <figcaption>代理通过 GZ Transport 订阅 <code>/gps_sensor/navsat</code> 和 <code>/altitude_sensor/altimeter</code>，用 Jansson 编码为 JSON，再经 UDP 转发。</figcaption>
</figure>

<h2>伴飞计算机与 MAVLink</h2>
<p>MAVLink 是一种二进制遥测协议，也是一个与传输层无关的库。使用到的主要指令：</p>
<div class="table-wrap"><table>
  <thead><tr><th>指令</th><th>在飞行任务中的作用</th></tr></thead>
  <tbody>
    <tr><td><code>MAV_CMD_DO_SET_MODE</code></td><td>将 PX4 切换到 offboard 模式</td></tr>
    <tr><td><code>MAV_CMD_COMPONENT_ARM_DISARM</code></td><td>解锁（Arm）无人机</td></tr>
    <tr><td><code>SET_POSITION_TARGET_LOCAL_NED</code></td><td>发送位置设定点（起飞高度、目标坐标）</td></tr>
    <tr><td><code>MAV_CMD_NAV_LAND</code></td><td>降落</td></tr>
  </tbody>
</table></div>
<figure>
  <img src="../assets/Drone/p12.webp" alt="TRENTOS 组件图：libs（ds_sensor_data、mavlink）、CompanionComputer（main、ds_timer、ds_flight_task_sm）、网络协议栈、网卡驱动和时间服务">
  <figcaption>TRENTOS 上的伴飞计算机组件</figcaption>
</figure>

<h3>状态机</h3>
<figure>
  <img src="../assets/Drone/p13.webp" alt="状态机：PRE_READY → CHANGE_MODE → ARM → TAKEOFF → FLY_PHASE → LAND">
  <figcaption>飞行任务状态机</figcaption>
</figure>
<ol class="flow">
  <li><code>PRE_READY</code> 初始状态</li><li class="arrow">→</li>
  <li><code>CHANGE_MODE</code> 切换到 offboard</li><li class="arrow">→</li>
  <li><code>ARM</code> 解锁</li><li class="arrow">→</li>
  <li><code>TAKEOFF</code> 升至预定高度</li><li class="arrow">→</li>
  <li><code>FLY_PHASE</code> 飞往预定坐标</li><li class="arrow">→</li>
  <li><code>LAND</code> 降落</li>
</ol>

<h2>最终部署</h2>
<h3>硬件</h3>
<figure class="fig-md">
  <img src="../assets/Drone/p15.webp" alt="连接网线和串口适配器的树莓派 3">
  <figcaption>运行在树莓派 3 上的 TRENTOS</figcaption>
</figure>
<h3>网络架构</h3>
<p>树莓派 3 上的 TRENTOS 应用通过以太网与主机相连（点对点网络 <code>10.0.0.x/24</code>）。主机在 <code>10.0.0.11</code> 与 <code>host.docker.internal</code> 之间转发 UDP；Docker 内的 <code>ds_px4</code> 容器运行 Gazebo、PX4 SITL（发往 11001 端口）和 C++ 代理（发往 11000 端口）。</p>
<figure>
  <img src="../assets/Drone/p16.webp" alt="网络示意图：以太网点对点 10.0.0.0/24、主机 UDP 转发、监听 11000 和 11001 端口的 trentos_app_rpi3、Docker 默认网桥及 ds_px4 容器">
  <figcaption>网络架构</figcaption>
</figure>

<h2>项目细节</h2>
<h3>遇到的问题</h3>
<ul>
  <li>Jansson：<code>sys_clock_gettime()</code> 未实现</li>
  <li>Docker 图形界面（需要关闭 X11 认证）</li>
  <li>NixOS 上的防火墙</li>
  <li>QEMU 上的 socket 无法承受大流量</li>
  <li><code>OS_Socket_recvfrom()</code> 的 bug（还是特性？）：没有收到数据时，<code>srcAddr</code> 会被设为上一次收到数据的地址</li>
  <li>无法使用更复杂的世界场景（部分模型加载耗时很长）</li>
</ul>
<h3>改进方向</h3>
<ul>
  <li><strong>UDP 转发很麻烦</strong>——编写更好的工具脚本，一次性启动所有组件（而不是开一堆终端）；生产环境中使用 <code>iptables</code>。</li>
  <li><strong>让飞行任务更健壮</strong>——处理 PX4 和 Gazebo 被终止后重启的情况。</li>
</ul>

<h3>仓库结构</h3>
<pre><code>.
├── Dockerfile          # \`ds_px4\` 容器的 Dockerfile
├── external            # 外部依赖存放位置
│   ├── mavlink/        # 预编译的 C/C++ MAVLink 头文件
│   └── PX4-Autopilot/  # PX4 仓库
├── Trentos             # 手动添加的 TrentOS 目录
│   ├── docker/         # TrentOS docker 容器
│   └── sdk/            # TrentOS SDK
├── px4.patch           # 对 PX4-Autopilot 的补丁
├── scripts/            # 工具脚本
└── src                 # 源代码
    ├── apps
    │   ├── proxy/      # C++ 代理源码
    │   └── trentos/    # TrentOS 应用（伴飞计算机）源码
    └── libs/           # proxy/ 与 trentos/ 共用的模块</code></pre>

<footer>根据项目演示文稿（Drone.pdf）转换。</footer>
</main>
</body>
</html>
`,zv=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>FAST AI Movie Web</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/fast-ai-movie.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">Web 应用 · FAST AI Movies</p>
  <h1>FAST AI Movie Web</h1>
  <p class="lead">一个把文字和图片转化为带 AI 讲解员的定制培训视频的 Web 平台——用户可以编辑生成视频的每一个部分。</p>
  <ul class="tags"><li>前端</li><li>可复用组件</li><li>视频编辑</li><li>AI 视频生成</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/FASTAIMOVIE.mp4"></video>
  <figcaption>视频演示</figcaption>
</figure>

<h2>项目概览</h2>
<ol class="flow">
  <li>输入文字和图片</li><li class="arrow">→</li><li>为视频选择讲解员</li><li class="arrow">→</li><li>定制化培训视频</li>
</ol>
<figure class="fig-md">
  <img src="../assets/FASTAIMOVIE/p02.webp" alt="插图：上传文字、Logo、字体和图片，生成培训视频">
</figure>

<div class="pair">
  <figure style="margin:0"><img src="../assets/FASTAIMOVIE/p03.webp" alt="五个步骤：配置企业设计、上传产品资料和合规条例、配置附加设置、生成视频、保持视频更新"></figure>
  <div>
    <h3 style="margin-top:0">用户流程</h3>
    <ol>
      <li>配置企业视觉设计（Corporate Design）</li>
      <li>上传已有的产品说明书、合规条例等</li>
      <li>配置附加设置</li>
      <li>生成视频</li>
      <li>保持视频内容最新</li>
    </ol>
    <h3>我们的工作</h3>
    <p>生成视频并使其可编辑——包括章节文字、音频、幻灯片、图标和测验题——以及企业设计配置、管理员设置、素材管理和内部可视化。</p>
  </div>
</div>

<h2>章节编辑功能</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p05.webp" alt="视频编辑界面，章节和子章节控件带编号标注">
</figure>
<div class="table-wrap"><table>
  <thead><tr><th>编号</th><th>功能</th></tr></thead>
  <tbody>
    <tr><td>①</td><td>新增子章节（major）</td></tr>
    <tr><td>②</td><td>选择子章节标题</td></tr>
    <tr><td>③</td><td>A：子章节上移 · B：子章节下移 · C：新增子章节</td></tr>
    <tr><td>④</td><td>删除子章节</td></tr>
    <tr><td>⑤</td><td>播放音频</td></tr>
    <tr><td>⑥</td><td>选择章节标题</td></tr>
    <tr><td>⑦</td><td>删除整个章节</td></tr>
  </tbody>
</table></div>

<h2>章节概览功能</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p06.webp" alt="章节概览侧栏，当前子章节高亮显示">
</figure>
<ol>
  <li>点击折叠或展开章节概览。</li>
  <li>高亮显示当前正在查看的子章节。</li>
  <li>点击跳转到对应的子章节。</li>
</ol>

<h2>图片组件功能</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p07.webp" alt="图片列表面板，含上传、编辑、删除和拖拽插入">
</figure>
<ol>
  <li>从本地上传图片。</li>
  <li>点击编辑图片。</li>
  <li>删除图片。</li>
  <li>将图片从图片列表拖入文本区域即可插入。</li>
</ol>

<h2>图片编辑功能</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p08.webp" alt="图片编辑器，包含焦点区域、删除、保存、替换按钮和设置面板">
</figure>
<ol>
  <li>编辑焦点区域——移动、缩放和删除。</li>
  <li>删除当前图片。</li>
  <li>基于当前修改复制出一张新图片。</li>
  <li>用当前修改替换原图片。</li>
  <li>新增焦点区域。</li>
  <li>编辑图片设置（边框颜色、背景样式、图片类型：全屏 / 半屏 / 小角落、展示时机）。</li>
</ol>

<h2>可复用组件的集成</h2>
<figure>
  <img src="../assets/FASTAIMOVIE/p09.webp" alt="新建视频页面复用了文本框组件和图片组件">
</figure>
<ol>
  <li>可编辑的文本框组件。</li>
  <li>图片组件（支持拖拽插入和图片编辑）。</li>
</ol>

<footer>根据项目演示文稿（FASTAIMOVIE.pdf）转换。</footer>
</main>
</body>
</html>
`,Ov=`<!doctype html>\r
<html lang="zh-CN">\r
<head>\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1">\r
<title>项目作品集</title>\r
<link rel="stylesheet" href="../assets/style.css">\r
</head>\r
<body>\r
<main>\r
<nav class="topbar"><span></span><a class="lang" href="../en/index.html">English</a></nav>\r
<header class="hero">\r
  <p class="eyebrow">Xiaoheng Hu</p>\r
  <h1>项目</h1>\r
</header>\r
<ul class="index-list">\r
  <li><a href="pingpong-vision.html"><img class="pixel-icon" src="../assets/icons/pingpong-vision@4x.png" alt="" width="64" height="64"><b>PingPong Vision</b><span>用摄像头 + AI OCR 读取生产设备的 HMI 屏幕，并转化为实时看板数据。</span></a></li>\r
  <li><a href="web-harvest-rag.html"><img class="pixel-icon" src="../assets/icons/web-harvest-rag@4x.png" alt="" width="64" height="64"><b>Web Harvest RAG</b><span>配置驱动的 RAG 聊天机器人，向量 + BM25 混合检索，在 BEIR 上做了基准评测并已部署上线。</span></a></li>\r
  <li><a href="you-dont-need-rag.html"><img class="pixel-icon" src="../assets/icons/you-dont-need-rag@4x.png" alt="" width="64" height="64"><b>You Don’t Need RAG</b><span>把一组 URL 变成一个干净的文本文件或可直接用于 RAG 的 ZIP——按知识库的实际需要来选。</span></a></li>\r
  <li><a href="fast-ai-movie.html"><img class="pixel-icon" src="../assets/icons/fast-ai-movie@4x.png" alt="" width="64" height="64"><b>FAST AI Movie Web</b><span>根据文字和图片生成并编辑 AI 培训视频的 Web 平台。</span></a></li>\r
  <li><a href="vehicle-identification.html"><img class="pixel-icon" src="../assets/icons/vehicle-identification@4x.png" alt="" width="64" height="64"><b>车辆噪声分类</b><span>基于路边声学测量数据区分小汽车、卡车和其他车辆（Müller-BBM，TUM）。</span></a></li>\r
  <li><a href="3d-reconstruction.html"><img class="pixel-icon" src="../assets/icons/3d-reconstruction@4x.png" alt="" width="64" height="64"><b>立体视觉三维重建</b><span>从图像对到视差图、点云和网格的完整立体重建流程，基于 TUM 和 KITTI 数据集。</span></a></li>\r
  <li><a href="drone.html"><img class="pixel-icon" src="../assets/icons/drone@4x.png" alt="" width="64" height="64"><b>基于 seL4 / TRENTOS 的无人机模拟器</b><span>运行在 TRENTOS 上的伴飞计算机，通过 MAVLink 控制 PX4 / Gazebo 中的模拟无人机。</span></a></li>\r
</ul>\r
</main>\r
</body>\r
</html>\r
`,Rv=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PingPong Vision</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/pingpong-vision.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">HMI 监控平台</p>
  <h1>PingPong Vision——基于摄像头的 HMI 可视化</h1>
  <p class="lead">PingPong Vision 用摄像头和 AI OCR 读取生产设备的 HMI 屏幕，再把读数转化为实时看板数据。</p>
  <ul class="tags"><li>摄像头输入</li><li>Gemini OCR</li><li>FastAPI</li><li>Flask</li><li>TimescaleDB</li><li>React</li><li>nginx</li></ul>
</header>

<figure>
  <video controls preload="metadata" src="../../videos/pingpong.mp4"></video>
  <figcaption>演示视频</figcaption>
</figure>

<div class="stats">
  <div class="stat"><b>摄像头</b><span>输入</span></div>
  <div class="stat"><b>AI OCR</b><span>字段读取</span></div>
  <div class="stat"><b>数据库</b><span>历史 + 事件</span></div>
</div>

<h2>问题：设备数据被困在 HMI 屏幕后面</h2>
<p>老旧设备和厂商封闭的平台往往不开放 PLC/API 数据。可见的屏幕常常是唯一通用的接口。</p>
<div class="grid">
  <div class="card"><h4><span class="n">01</span>无需 PLC 集成</h4><p>系统不涉及控制指令、OPC UA 标签和设备自动化逻辑。</p></div>
  <div class="card"><h4><span class="n">02</span>跨品牌通用</h4><p>摄像头可以观察西门子、Multivac、老式面板以及类模拟仪表界面。</p></div>
  <div class="card"><h4><span class="n">03</span>形成历史数据</h4><p>屏幕上可见的数值变成结构化读数、事件和看板趋势。</p></div>
</div>

<h2>核心流程：一个摄像头把屏幕变成数据</h2>
<p>操作员只需配置一次 HMI，之后 worker 会持续从实时画面中读取已配置的字段。</p>
<ol class="flow">
  <li><strong>01 采集 HMI</strong>——USB 摄像头在本地或通过中继服务推流设备屏幕</li><li class="arrow">→</li>
  <li><strong>02 标定字段</strong>——初始化时保存屏幕四角和各字段的边界框</li><li class="arrow">→</li>
  <li><strong>03 读取 + 存储</strong>——worker 做透视校正、调用 Gemini OCR 并保存读数</li>
</ol>

<h2>架构</h2>
<figure>
  <img src="../assets/pingpong/p04.webp" alt="架构：现场 PC 上的 camera-server 通过 WebSocket 推帧到云端 relay-server（FastAPI，:8080）；hmi-data-server（Flask API，:5100）获取最新帧，做透视校正和 Gemini OCR，写入 TimescaleDB（:5432）；浏览器通过 MJPEG 查看实时画面，并通过 REST 访问 React + nginx 看板">
  <figcaption>现场 PC → 云端 / 服务器 → 浏览器</figcaption>
</figure>

<h3>每个服务负责视觉流水线中的一部分</h3>
<div class="table-wrap"><table>
  <thead><tr><th>服务</th><th>职责</th></tr></thead>
  <tbody>
    <tr><td><code>camera-server</code></td><td>运行在摄像头所连的 PC 上；在局域网提供 MJPEG，或把画面推送到中继。</td></tr>
    <tr><td><code>relay-server</code></td><td>为每个摄像头缓存最新一帧，并把 MJPEG 分发给前端和 worker。</td></tr>
    <tr><td><code>hmi-data-server</code></td><td>业务 REST API；管理 HMI 页面、字段、读数、事件和监控任务。</td></tr>
    <tr><td><code>hmi-monitor-worker</code></td><td>真正执行 OCR 循环并写入读数的单一进程。</td></tr>
    <tr><td>TimescaleDB</td><td>存储 HMI 页面、字段定义、时序读数、事件和 worker 状态。</td></tr>
  </tbody>
</table></div>

<h2>数据模型：HMI 数据保存在后端</h2>
<p>浏览器只保存临时的会话状态。HMI 业务数据都从 HMI 数据服务器读取、写入。</p>
<div class="table-wrap"><table>
  <thead><tr><th>表</th><th>内容</th></tr></thead>
  <tbody>
    <tr><td><code>hmi_pages</code></td><td>已配置的摄像头/HMI 页面或设备位置。</td></tr>
    <tr><td><code>hmi_fields</code></td><td>识别出的标签、单位、可视类型和 <code>bbox_percent</code>。</td></tr>
    <tr><td><code>hmi_readings</code></td><td>时序 OCR 数值、置信度、延迟和元数据。</td></tr>
    <tr><td><code>hmi_events</code></td><td>画面变化、运行事件和字段阈值告警。</td></tr>
    <tr><td><code>hmi_monitor_jobs</code></td><td>期望的监控状态，以及 worker 心跳/状态。</td></tr>
  </tbody>
</table></div>

<h2>事件与可靠性：监控不只是 OCR 数值</h2>
<div class="grid">
  <div class="card"><h4><span class="n">01</span>画面变化 AI</h4><p>比较基准帧与实时帧，检测手部遮挡、摄像头移动、页面切换或数值变化。</p></div>
  <div class="card"><h4><span class="n">02</span>运行事件</h4><p>worker 会记录 <code>camera_connection_lost</code> 和 <code>repeated_unreadable_values</code>。</p></div>
  <div class="card"><h4><span class="n">03</span>字段阈值</h4><p>看板规则可以把读数转化为警告和告警。</p></div>
</div>
<div class="callout"><p><strong>已知限制：</strong>标定依赖于摄像头的对准和 HMI 页面的稳定。如果摄像头移动或屏幕布局变化，已保存的字段框可能不再与实时画面对应。</p></div>

<h2>总结</h2>
<p><strong>PingPong Vision 读取的是设备屏幕，而不是设备控制器。</strong>该项目展示了一条无侵入式实现生产可视化的路径：摄像头采集、AI OCR、时序存储、事件记录，以及面向 HMI 设备监控的看板。</p>

<footer>根据项目演示文稿（pingpong.pdf）转换。</footer>
</main>
</body>
</html>
`,xv=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>车辆噪声分类</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/vehicle-identification.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">Müller-BBM Industry Solutions GmbH · 德国联邦环境部项目 · TUM 1.000+ Project</p>
  <h1>通过测量确定德国车队的噪声特性</h1>
  <p class="lead">基于路边声学测量数据，区分小汽车（PKW）、重型车辆（LKW）和其他车辆——在为期五天的项目周中完成了数据分析、特征工程以及两种机器学习方法。</p>
  <ul class="tags"><li>Python</li><li>pandas</li><li>TensorFlow / Keras</li><li>Transformer</li><li>全连接神经网络</li><li>KNN</li><li>声学</li></ul>
</header>

<h2>德国联邦环境部项目</h2>
<p>在 <strong>30 个不同地点</strong>进行测量，以确定德国车队的<strong>噪声特性</strong>。</p>
<div class="callout"><p><strong>项目目标：</strong>开发一种能够区分小汽车和重型车辆的分类方法。</p></div>
<figure class="fig-md">
  <img src="../assets/VehicleIdentification/p02.webp" alt="路边麦克风杆 → 声音信号 → 小汽车或卡车">
  <figcaption>路边测量 → 声学信号 → 车辆类别</figcaption>
</figure>

<h2>时间安排</h2>
<div class="table-wrap"><table>
  <thead><tr><th>日期</th><th>工作内容</th></tr></thead>
  <tbody>
    <tr><td>第 1 天 – 1月8日</td><td>项目启动 · 问题介绍 · 项目管理 · 数据处理：分析数据分布、尝试不同的数据特征 · 机器学习：尝试不同模型</td></tr>
    <tr><td>第 2 天 – 1月9日</td><td>继续数据处理 · 机器学习：构建一个整体大模型</td></tr>
    <tr><td>第 3 天 – 1月10日</td><td>继续数据处理 · 模型训练 · 模型测试 · 性能分析 · 探索其他方法 · <strong>复盘会议</strong></td></tr>
    <tr><td>第 4 天 – 1月11日</td><td>深入探索其他方法 · 分析结果 · 撰写文档</td></tr>
    <tr><td>第 5 天 – 1月12日</td><td>项目展示 · 制作海报</td></tr>
  </tbody>
</table></div>

<h2>解决思路</h2>
<ol class="flow">
  <li>数据</li><li class="arrow">→</li><li>数据处理</li><li class="arrow">+</li><li>构建机器学习模型</li><li class="arrow">→</li>
  <li>模型训练</li><li class="arrow">⇄</li><li>模型验证与参数调整</li><li class="arrow">→</li><li>模型测试</li><li class="arrow">→</li><li>结果展示</li>
</ol>
<figure>
  <img src="../assets/VehicleIdentification/p04.webp" alt="从数据到结果展示的流程图标">
</figure>

<h2>采集的数据</h2>
<p>每条车辆通过记录包含 34 个字段。原幻灯片中被框出的字段即为建模时选用的特征。</p>
<figure>
  <img src="../assets/VehicleIdentification/p05.webp" alt="34 个采集字段及说明，选用字段被高亮">
  <figcaption>全部采集字段（高亮为选用字段）</figcaption>
</figure>
<h3>数据示例</h3>
<figure>
  <img src="../assets/VehicleIdentification/p06.webp" alt="三幅图：车辆通过时的声级随时间变化、三分之一倍频程频谱、定位轨迹">
  <figcaption>通过声级 · 三分之一倍频程频谱 · 定位轨迹</figcaption>
</figure>
<ul>
  <li><code>Lmax</code>：最大声压级（<code>levelTime</code> 曲线的最大值）
    <ul><li><code>T_6</code>：<code>levelTime</code> 曲线在 (Lmax − 6) dB 处的峰宽</li></ul></li>
  <li><code>thirdSpectrum</code>：在最大声级时刻附近一个短时间段内测得的三分之一倍频程频谱</li>
  <li><code>trajectory</code>：车辆定位量（麦克风对轴线与声音方向之间的夹角）</li>
</ul>

<h2>数据处理</h2>
<h3>将轨迹斜率作为额外特征</h3>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p07.webp" alt="小汽车和卡车的定位轨迹，以及轨迹的逐点斜率"></figure>
  <div>
    <ul>
      <li>卡车车身更长 ⇒ 定位角增长更慢。</li>
      <li>逐点计算的 <code>trajectory</code> 斜率可以作为额外的数据特征。</li>
    </ul>
  </div>
</div>

<h3>过滤声级-时间曲线中的噪声</h3>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p08.webp" alt="声级-时间曲线，峰值下 6 dB 的 T_6 区间以绿色标出，其余部分为红色"></figure>
  <div>
    <ul>
      <li>将 <code>levelTime</code> 数据裁剪到 T_6 区间，有助于去除录音中非目标车辆产生的噪声。</li>
      <li>对于紧随其后的车辆需谨慎处理（6 dB 准则可能无法分辨两个峰）。</li>
    </ul>
  </div>
</div>

<h3>通过归一化去掉特征</h3>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p09.webp" alt="PKW、LKW 和其他车辆的 Lmax 与车速散点图及回归曲线"><figcaption>Lmax 与车速的散点图及回归曲线</figcaption></figure>
  <div>
    <ul>
      <li>最大声压级（Lmax）随 lg(车速) 线性增长。</li>
      <li>若用 lg(车速) 对 Lmax 进行归一化，就可以舍弃 <code>velocity</code> 特征。</li>
    </ul>
  </div>
</div>

<h3>车辆类别分布</h3>
<figure class="fig-md">
  <img src="../assets/VehicleIdentification/p10.webp" alt="车辆类别出现次数柱状图；PKW 约 30000，LKW 约 3500，其他类别很少">
  <figcaption>PKW 在数据集中占绝对多数（约 30000 条），LKW 次之（约 3500 条）</figcaption>
</figure>

<h3>特征筛选</h3>
<p><code>df</code>——全部数据点、全部特征（40114 × <strong>34</strong>）→ <code>filtered_df</code>——全部数据点、建议特征（40114 × <strong>9</strong>）：</p>
<p><code>ID</code> · <code>MP</code> · <code>Lmax1</code> · <code>levelTime1</code> · <code>T6_1</code> · <code>thirdSpectrum1</code> · <code>trajectory</code> · <code>radarPulses</code> · <code>vehicleClass</code></p>

<h3>调整类别分布</h3>
<p>先打乱数据表，再为每个类别抽取相同数量的数据点，得到类别比例 <code>Else : LKW : PKW</code> 相等的 <code>filtered_final_df</code>（<strong>10563</strong> × 9）。</p>
<figure>
  <img src="../assets/VehicleIdentification/p12.webp" alt="打乱后的数据表片段，以及平衡前后的类别分布">
  <figcaption>打乱后的数据表，以及平衡前后的类别分布</figcaption>
</figure>

<h3>归一化</h3>
<ul>
  <li><strong>单个数值：</strong>求出该列的最小值和最大值，按 <code>new_x = (x − min) / (max − min)</code> 归一化。</li>
  <li><strong>数组：</strong>将每个数组中的每个值除以该列中出现的最大值。</li>
</ul>
<p>剔除具有特殊条件的测量地点：</p>
<div class="table-wrap"><table>
  <thead><tr><th>地点</th><th>特殊条件</th></tr></thead>
  <tbody>
    <tr><td>MP 30、MP 5</td><td>路面</td></tr>
    <tr><td>MP 12、MP 13</td><td>冬季</td></tr>
  </tbody>
</table></div>

<h3>数据集</h3>
<p class="table-note">状态：<span style="opacity:.6">已设计</span>（灰色）、已创建、<strong>已使用</strong>（高亮）。</p>
<div class="table-wrap"><table>
  <thead><tr><th>名称</th><th>说明</th><th class="num">规模</th></tr></thead>
  <tbody>
    <tr><td>ID1</td><td>全部数据点，全部特征</td><td class="num">29882 × 34</td></tr>
    <tr><td>ID2</td><td>全部数据点，选定特征</td><td class="num">39676 × 9</td></tr>
    <tr class="dim"><td>ID3</td><td>全部数据点，全部特征，3 个类别</td><td class="num"></td></tr>
    <tr class="hl"><td>ID4</td><td>全部数据点，选定特征，3 个车辆类别</td><td class="num">39676 × 9</td></tr>
    <tr class="dim"><td>ID5</td><td>全部特征，3 个均匀分布的车辆类别</td><td class="num"></td></tr>
    <tr class="hl"><td>ID6</td><td>选定特征，3 个均匀分布的车辆类别</td><td class="num">10419 × 9</td></tr>
    <tr class="dim"><td>ID7</td><td>全部特征，3 个均匀分布的类别，特殊地点数据放在末尾</td><td class="num"></td></tr>
    <tr><td>ID8</td><td>选定特征，3 个均匀分布的车辆类别，特殊地点数据放在末尾</td><td class="num">10419 × 9</td></tr>
    <tr class="hl"><td>ID9</td><td>选定特征，3 个均匀分布的车辆类别，剔除特殊地点</td><td class="num">9873 × 9</td></tr>
    <tr class="dim"><td>ID10</td><td>选定特征，3 个均匀分布的车辆类别，附加特征</td><td class="num"></td></tr>
  </tbody>
</table></div>

<h2>方法一：神经网络</h2>
<p>模型 1 是作用于 <code>levelTime1</code> 序列的 Transformer；其输出与其他参数合并后输入模型 2——一个全连接神经网络，输出三个类别之一：<code>PKW</code>、<code>LKW</code> 或 <code>ELSE</code>。</p>
<figure>
  <img src="../assets/VehicleIdentification/p15.webp" alt="模型 1 Transformer 处理 levelTime1，与其他参数一起输入模型 2 全连接网络，输出 PKW、LKW、ELSE">
</figure>
<figure>
  <img src="../assets/VehicleIdentification/p16.webp" alt="Keras 模型结构图：输入 → 多头注意力 → 层归一化 → 全局最大池化，与第二个输入拼接 → 全连接/Dropout 层 → 3 个输出">
  <figcaption>Keras 模型结构。输入 1——24 个频带的三分之一倍频程频谱（24×1）→ 多头注意力 → 层归一化 → 全局最大池化（1）；输入 2——两个标量特征（Lmax / 车速）→ 拼接（3）→ Dense(64) → Dropout → Dense(64) → Dropout → Dense(3)</figcaption>
</figure>

<h3>模型测试</h3>
<figure>
  <img src="../assets/VehicleIdentification/p17.webp" alt="15 个 epoch 内损失从约 0.8 降至约 0.62，准确率升至约 0.70">
  <figcaption>每轮损失与准确率——epochs = 15，batch_size = 64，learning_rate = 1e-2</figcaption>
</figure>

<h3>测试准确率</h3>
<p class="table-note">来自测试组 ID 2 的混淆矩阵（行 = 真实标签，列 = 预测标签）。</p>
<div class="table-wrap"><table>
  <thead><tr><th>真实 \\ 预测</th><th class="num">LKW</th><th class="num">PKW</th><th class="num">Else</th><th class="num">真正例率</th></tr></thead>
  <tbody>
    <tr><th scope="row">LKW</th><td class="num best">1574</td><td class="num">22</td><td class="num">125</td><td class="num">91.4%</td></tr>
    <tr><th scope="row">PKW</th><td class="num">16</td><td class="num best">1470</td><td class="num">210</td><td class="num">86.7%</td></tr>
    <tr><th scope="row">Else</th><td class="num">267</td><td class="num">824</td><td class="num best">600</td><td class="num">35.5%</td></tr>
  </tbody>
</table></div>
<p class="table-note">“Else”类中有 48.7% 被误判为 PKW，15.8% 被误判为 LKW。</p>
<figure class="fig-md">
  <img src="../assets/VehicleIdentification/p18.webp" alt="带真正例率的混淆矩阵热力图">
</figure>

<h3>结果</h3>
<div class="table-wrap"><table>
  <thead><tr><th>分组</th><th class="num">准确率</th><th class="num">PKW（TPR）</th><th class="num">LKW（TPR）</th><th class="num">Else（TPR）</th></tr></thead>
  <tbody>
    <tr class="hl"><td>模型验证——<em>包含</em>特殊路段的训练和测试</td><td class="num">0.7091</td><td class="num">0.867</td><td class="num">0.914</td><td class="num">0.355</td></tr>
    <tr><td>用含特殊路段数据训练，在全部数据集上测试</td><td class="num best">0.7637</td><td class="num">0.836</td><td class="num">0.938</td><td class="num">0.362</td></tr>
    <tr class="hl"><td>模型验证——<em>不含</em>特殊路段的训练和测试</td><td class="num">0.7062</td><td class="num">0.866</td><td class="num">0.922</td><td class="num">0.354</td></tr>
    <tr><td>用含特殊路段数据训练，在不含特殊路段的数据上测试</td><td class="num">0.6759</td><td class="num">0.941</td><td class="num">0.965</td><td class="num">0.118</td></tr>
    <tr><td>用不含特殊路段数据训练，在含特殊路段的数据上测试</td><td class="num" style="color:var(--warn);font-weight:700">0.4532</td><td class="num">0.914</td><td class="num">0.765</td><td class="num">0.45</td></tr>
  </tbody>
</table></div>
<ul>
  <li>在给定数据集上，能够稳健地区分 LKW（卡车）和 PKW（小汽车）。</li>
  <li>识别“Else”组存在明显局限，其真正例率较低。</li>
  <li>用含特殊路段数据训练的模型在其他数据集上表现良好，反之则不然。建议使用包含特殊路段的数据集进行训练。</li>
</ul>

<h2>方法二：传统机器学习——K 近邻（KNN）</h2>
<div class="pair">
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p21.webp" alt="KNN 示意图：点 P 指向 A、B、C 三类中的最近邻"><figcaption>KNN 示意图（来源：medium.com/@sachinsoni600517）</figcaption></figure>
  <div>
    <p><strong>三个类别：</strong>PKW、LKW、Else</p>
    <p><strong>输入：</strong>浮点数组</p>
    <p><strong>输出：</strong>类别索引</p>
  </div>
</div>

<h3>测试结果</h3>
<p class="table-note">完整输入 = <code>levelTime1</code>、<code>trajectory</code>、<code>thirdSpectrum1</code>、<code>T6_1</code>、<code>Lmax1</code>、<code>RadarPulse</code>。</p>
<div class="table-wrap"><table>
  <thead><tr><th>训练规模</th><th>数据集</th><th>输入</th><th class="num">整体</th><th class="num">LKW</th><th class="num">PKW</th><th class="num">Else</th></tr></thead>
  <tbody>
    <tr><td>(23243, 188)</td><td>ID4_normalized.csv</td><td>完整输入</td><td class="num best">0.81524</td><td class="num">0.81905</td><td class="num best">0.94997</td><td class="num">0.23712</td></tr>
    <tr><td>(6130, 188)——三类均匀分布</td><td>ID6_normalized.csv</td><td>完整输入</td><td class="num">0.69073</td><td class="num">0.91007</td><td class="num">0.72144</td><td class="num">0.43209</td></tr>
    <tr><td>(5794, 188)——剔除特殊地点</td><td>ID9_normalized.csv</td><td>完整输入</td><td class="num">0.70075</td><td class="num">0.90214</td><td class="num">0.74240</td><td class="num">0.45900</td></tr>
    <tr><td>(6130, 24)</td><td>ID6_normalized.csv</td><td>仅 <code>thirdSpectrum1</code></td><td class="num">0.69195</td><td class="num best">0.91223</td><td class="num">0.67797</td><td class="num best">0.47761</td></tr>
    <tr><td>(2043, 188)——缩小训练规模</td><td>ID6_normalized.csv</td><td>完整输入</td><td class="num">0.67813</td><td class="num">0.90214</td><td class="num">0.74240</td><td class="num">0.45900</td></tr>
    <tr><td>(8173, 188)——扩大训练规模</td><td>ID6_normalized.csv</td><td>完整输入</td><td class="num">0.69814</td><td class="num">0.91079</td><td class="num">0.73252</td><td class="num">0.45152</td></tr>
  </tbody>
</table></div>
<p class="table-note">ID4 整体准确率高，是因为其类别分布不平衡（以 PKW 为主）；它的“Else”识别率也是最低的。</p>
<ul>
  <li>在小数据集上表现不错；随着数据量增加，模型略有提升。</li>
  <li>模型擅长区分 PKW 和 LKW，但识别“Else”类的能力相对较弱。</li>
  <li><code>thirdSpectrum</code> 特征对提升模型性能起着关键作用。</li>
</ul>

<h2>最终成果</h2>
<div class="pair">
  <ul>
    <li>两种用于车辆分类的机器学习方法</li>
    <li>多个改进分类效果的数据处理步骤</li>
    <li>软技能的提升</li>
    <li>一张概述项目周的海报</li>
  </ul>
  <figure style="margin:0"><img src="../assets/VehicleIdentification/p25.webp" alt="项目海报" style="max-width:280px"><figcaption>项目海报</figcaption></figure>
</div>

<h2>结论</h2>
<ul>
  <li>数据集包含大量信息和测量值。</li>
  <li>车辆类别分布不均 → 容易造成模型表现很好的错觉。</li>
  <li>对录制数据进行深入分析潜力很大（声压级与车速的关系等）。</li>
  <li>模型微调有一定效果。</li>
  <li>两种模型都能很好地区分 LKW 和 PKW。</li>
  <li>“Else”组很难分类。</li>
</ul>
<h2>展望</h2>
<ul>
  <li>更加重视数据处理，尤其是物理层面的分析。</li>
  <li>增加相关特征的数量。</li>
  <li>研究是否可以剔除影响不大的特征。</li>
  <li>寻找能够区分 LKW 和 Else 的特征。</li>
  <li>为样本较少的类别收集更多训练数据。</li>
</ul>

<footer>根据项目演示文稿（VehicleIdentification.pdf）转换。</footer>
</main>
</body>
</html>
`,Nv=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Web Harvest RAG</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/web-harvest-rag.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">RAG · 检索研究 · 生产部署</p>
  <h1>Web Harvest RAG</h1>
  <p class="lead">一个配置驱动的 RAG 聊天机器人脚手架——抓取任意网站或 PDF，分块并向量化，用向量 + 关键词混合检索，然后基于这些内容对话。已完成开发、对照公开信息检索基线做了评测，并部署到生产环境。</p>
  <ul class="tags"><li>Next.js 15</li><li>FastAPI</li><li>Supabase pgvector</li><li>FAISS</li><li>BM25</li><li>OpenAI</li><li>Docker + nginx</li></ul>
  <div class="links">
    <a href="https://webrag.huxiaoheng.com"><span>在线演示</span>webrag.huxiaoheng.com</a>
    <a href="https://github.com/huxiaoheng44/web-harvest-rag"><span>源码</span>github.com/huxiaoheng44/web-harvest-rag</a>
  </div>
</header>

<h2>架构：抓取 → 分块 → 向量化 → 检索 → 对话</h2>
<p>六个阶段，每个都可以独立替换——本项目的大部分工程工作都集中在检索阶段。</p>
<div class="grid">
  <div class="card"><h4><span class="n">1</span>抓取</h4><p><code>config/sources.json</code> → <code>scraper.py</code> 拉取 HTML 页面和 PDF，提取干净可读的内容。</p></div>
  <div class="card"><h4><span class="n">2</span>分块</h4><p>固定大小的 token 窗口或结构化（按标题）切分——经过系统比较，而不是想当然。</p></div>
  <div class="card"><h4><span class="n">3</span>向量化</h4><p>OpenAI <code>text-embedding-3-small</code>，按内容哈希缓存，重复运行不必重复付费调用 API。</p></div>
  <div class="card"><h4><span class="n">4</span>检索</h4><p>向量检索（FAISS / Supabase pgvector）+ BM25，融合排序。</p></div>
  <div class="card"><h4><span class="n">5</span>生成</h4><p>FastAPI 后端用检索到的分块构建上下文，调用对话模型，并保存会话。</p></div>
  <div class="card"><h4><span class="n">6</span>对话</h4><p>Next.js 界面——添加数据源、实时查看索引构建、提问、查看引用来源。</p></div>
</div>
<div class="callout"><p>生产环境使用 <strong>Supabase pgvector</strong> 做检索。另有一个独立模块 <strong>retrieval_lab</strong>，专门用来回答“第 4 阶段这样做真的是最好的吗？”，且不影响线上应用。</p></div>

<h2>retrieval_lab：独立的实验框架</h2>
<p>围绕检索质量提出问题，每一个都用真实数据而不是假设来回答——与生产应用完全隔离。</p>
<div class="grid">
  <div class="card"><h4><span class="n">1</span>分块策略</h4><p>固定大小 token 窗口与结构化（按标题）切分的正面对比。</p></div>
  <div class="card"><h4><span class="n">2</span>向量 vs. BM25 vs. 混合</h4><p>FAISS 余弦检索、rank_bm25 关键词检索，以及两种融合策略（线性加权 + RRF）。</p></div>
  <div class="card"><h4><span class="n">3</span>交叉编码器重排序</h4><p>用 ms-marco-MiniLM 对混合检索候选集重排序——经过测试验证，而非默认有效。</p></div>
  <div class="card"><h4><span class="n">4</span>分块大小扫描</h4><p>200 / 500 / 1,000 token 的分块，直接衡量完整性与噪声之间的权衡。</p></div>
  <div class="card"><h4><span class="n">5</span>LLM 查询改写</h4><p>把每个查询改写成多个变体，分别检索，再用倒数排名融合（RRF）合并。</p></div>
  <div class="card"><h4><span class="n">6</span>错误归类分析</h4><p>每个召回不完美的查询都会被自动归入某个失败类别，再逐条人工阅读。</p></div>
  <div class="card"><h4><span class="n">7</span>Alpha 调参</h4><p>在留出的验证集上扫描混合融合权重，再在独立的测试集上评估。</p></div>
  <div class="card"><h4><span class="n">8</span>LLM 评审答案</h4><p>不只是“有没有检索到正确的分块”——生成的答案是否真的忠实于它？</p></div>
</div>
<div class="table-wrap"><table>
  <thead><tr><th>语料库</th><th>内容</th></tr></thead>
  <tbody>
    <tr><td>A – MULTIVAC</td><td>24 个抓取的公司网页/PDF，30 条人工标注查询</td></tr>
    <tr><td>B – NFCorpus</td><td>公开的 BEIR 基准：3,633 篇文档，323 条官方测试查询</td></tr>
  </tbody>
</table></div>

<h2>五个真实的 bug，都是实际测试中发现的</h2>
<p>每一个都是通过端到端运行系统、仔细检查输出发现的——而不是仅靠代码审查。</p>
<div class="grid">
  <div class="card"><span class="badge">安全</span><h4>未鉴权的密钥接口</h4><p>应用内的设置面板允许任何人通过 GET 请求以明文 JSON 获取真实的 OpenAI/Supabase 密钥，且无任何鉴权。已在首次公开部署前在生产环境中禁用。</p></div>
  <div class="card"><span class="badge">正确性</span><h4>混合融合中的补零打分 bug</h4><p>不在某一方法 top-20 中的候选被记为 0 分而不是真实得分——不公平地惩罚了只被一种方法看好的分块。改为在全部候选并集上精确重新打分后修复。</p></div>
  <div class="card"><span class="badge">可复现性</span><h4>recall@k 结果不确定</h4><p>相同的查询、索引和 alpha 在三次运行中得到三个不同的 recall@1——原因是 Python 原生 <code>set()</code> 的迭代顺序依赖哈希种子，悄悄打乱了同分结果的顺序。</p></div>
  <div class="card"><span class="badge">评估校准</span><h4>LLM 评审混淆了两种失败</h4><p>一个正确的“我无法确认”的拒答被打出和幻觉一样低的分。评审提示词区分检索失败与生成失败后，平均分从 3.32 升至 4.92 / 5。</p></div>
  <div class="card"><span class="badge">生产</span><h4>依赖漂移导致线上对话崩溃</h4><p>未锁定版本的 supabase 客户端升级到新 API，其中 <code>.insert().select().single()</code> 已不存在——所有 <code>/chat</code> 请求都返回 500。这是在新部署上做冒烟测试时发现的，而不是 CI。</p></div>
</div>

<h2>结论：谁赢了，在哪里赢</h2>
<h3>MULTIVAC——structural-500</h3>
<p class="table-note">recall@k，30 条人工标注查询</p>
<div class="table-wrap"><table>
  <thead><tr><th>方法</th><th class="num">Recall@1</th><th class="num">Recall@5</th></tr></thead>
  <tbody>
    <tr><td>仅向量</td><td class="num">60.0%</td><td class="num">93.3%</td></tr>
    <tr><td>仅 BM25</td><td class="num">75.0%</td><td class="num">95.0%</td></tr>
    <tr><td>混合（线性）</td><td class="num best">78.3%</td><td class="num best">96.7%</td></tr>
  </tbody>
</table></div>
<h3>NFCorpus——fixed-500（BEIR）</h3>
<p class="table-note">recall@k，323 条官方测试查询，调优后 α = 0.8</p>
<div class="table-wrap"><table>
  <thead><tr><th>方法</th><th class="num">Recall@5</th><th class="num">Recall@100</th></tr></thead>
  <tbody>
    <tr><td>仅向量</td><td class="num">13.9%</td><td class="num">35.4%</td></tr>
    <tr><td>仅 BM25</td><td class="num">11.6%</td><td class="num">23.0%</td></tr>
    <tr><td>混合（线性）</td><td class="num best">14.4%</td><td class="num best">36.0%</td></tr>
  </tbody>
</table></div>
<div class="callout">
  <p><strong>BM25 在 MULTIVAC 上胜出</strong>——品牌术语密集的内容（“MLC”“PEAQ”“GS1 Digital Link”）更适合精确关键词匹配。<strong>向量检索在 NFCorpus 上胜出</strong>——专业的医学摘要与口语化查询之间存在词汇鸿沟，只有语义检索能跨越。混合检索在两个语料上都优于两者中更好的那个，但前提是针对每个语料单独调参。没有哪种方法可以作为万无一失的默认选择。</p>
</div>
<p class="table-note">验证：本框架在 NFCorpus 上的 BM25 recall@100（23.0%）与 BEIR 官方公布的 BM25 基线（25.0%）相差不到 2 个百分点——绝对数值偏低是数据集本身的特性，而不是实现有 bug。</p>

<h2>真正上线，而不只是演示</h2>
<p><a href="https://webrag.huxiaoheng.com">webrag.huxiaoheng.com</a>——一次真实对话，从生产索引中检索。</p>
<figure class="fig-md">
  <img src="../assets/WebHarvestRAG/p06.webp" alt="Web Harvest Chatbot 回答问题并给出引用来源的截图">
</figure>
<div class="grid">
  <div class="card"><h4>基础设施</h4><p>Docker Compose——相互隔离的 FastAPI 与 Next.js 容器，只绑定 localhost，<code>restart: unless-stopped</code>。</p></div>
  <div class="card"><h4>边缘层</h4><p>nginx 反向代理 + Let’s Encrypt TLS，与另外两个线上项目共用同一台主机。</p></div>
  <div class="card"><h4>数据</h4><p>端到端重建生产 Supabase 索引：覆盖全部 24 个源文档，分块数从 81 增至 340。</p></div>
  <div class="card"><h4>验证</h4><p>真实提问、真实带引用的回答——通过公网 HTTPS 域名验证，而不只是 localhost。</p></div>
</div>

<h2>技术栈</h2>
<div class="table-wrap"><table>
  <thead><tr><th>技术</th><th>用途</th></tr></thead>
  <tbody>
    <tr><td>Next.js 15</td><td>聊天界面，App Router</td></tr>
    <tr><td>FastAPI</td><td>RAG、数据源、会话</td></tr>
    <tr><td>Supabase</td><td>pgvector，<code>match_chunks</code> RPC</td></tr>
    <tr><td>OpenAI</td><td>gpt-4o-mini + text-embedding-3-small</td></tr>
    <tr><td>FAISS</td><td>本地向量检索（retrieval_lab）</td></tr>
    <tr><td>rank_bm25</td><td>关键词检索（retrieval_lab）</td></tr>
    <tr><td>sentence-transformers</td><td>交叉编码器重排序</td></tr>
    <tr><td>Docker + nginx</td><td>生产部署</td></tr>
  </tbody>
</table></div>

<footer>根据项目演示文稿（WebHarvestRAG.pdf）转换。</footer>
</main>
</body>
</html>
`,Iv=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>You Don't Need RAG</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<main>
<nav class="topbar"><a href="index.html">← 全部项目</a><a class="lang" href="../en/you-dont-need-rag.html">English</a></nav>

<header class="hero">
  <p class="eyebrow">工具 · 知识库导出</p>
  <h1>You Don’t Need RAG</h1>
  <p class="lead">粘贴一组 URL，得到一个干净的文本文件，或一个结构化、可直接用于 RAG 的 ZIP——按你的知识库实际需要来选。这个工具基于一个简单的判断：大多数“你需要 RAG”的问题，其实都装得进上下文窗口。</p>
  <ul class="tags"><li>Next.js 15</li><li>React 19</li><li>Python 爬虫</li><li>无向量数据库</li><li>无嵌入</li></ul>
  <div class="links">
    <a href="https://rag.huxiaoheng.com"><span>在线演示</span>rag.huxiaoheng.com</a>
    <a href="https://github.com/huxiaoheng44/You-Don-t-Need-RAG"><span>源码</span>github.com/huxiaoheng44/You-Don-t-Need-RAG</a>
  </div>
</header>

<h2>为什么做这个：RAG 已经成了万能答案</h2>
<p>要查询文档？RAG。要回答关于某个网站的问题？RAG。要给聊天机器人提供上下文？RAG。这种模式确有价值——但也伴随着一长串实实在在的代价。</p>
<div class="table-wrap"><table>
  <thead><tr><th>代价</th><th>问题所在</th></tr></thead>
  <tbody>
    <tr><td><strong>分块会丢信息</strong></td><td>把文档切成固定大小的块，会破坏跨段落的上下文。模型只能看到碎片。</td></tr>
    <tr><td><strong>检索并不完美</strong></td><td>嵌入相似度不等于语义相关——模型照样会基于错误的分块自信作答。</td></tr>
    <tr><td><strong>运维负担重</strong></td><td>嵌入模型、向量数据库、数据摄取管道、检索层——每一环都可能悄无声息地出错或漂移。</td></tr>
    <tr><td><strong>评估困难</strong></td><td>没有一个显而易见的质量指标。幻觉可能来自技术栈的任何一层。</td></tr>
    <tr><td><strong>延迟累加</strong></td><td>每次查询都要先做一次嵌入请求和向量检索，LLM 才能看到第一个 token。</td></tr>
  </tbody>
</table></div>
<blockquote>“工程师的本能是去找最复杂的工具。但复杂性本身就是负担，而不是解决方案。”</blockquote>

<h2>真正的解法：现代 LLM 已经能装下整个知识库</h2>
<p>GPT-4o、Claude、Gemini 1.5 Pro 都支持 128K 到 1M+ token 的上下文窗口。一个 300 KB 的文本文件大约是 75K token。不分块，不检索，不搭管道。直接粘贴即可。</p>
<div class="stats">
  <div class="stat"><b>128K–1M</b><span>现代 LLM 的上下文 token 数</span></div>
  <div class="stat"><b>75K</b><span>一个 300 KB 文本文件的 token 数</span></div>
</div>
<ol class="flow">
  <li><strong>第 1 步</strong>——抓取 URL，提取干净可读的内容</li><li class="arrow">→</li>
  <li><strong>第 2 步</strong>——测量抓取内容的实际大小</li><li class="arrow">→</li>
  <li><strong>决策</strong>——装得进上下文窗口？粘贴纯文本文件。确实很大 / 实时更新 / 多租户？导出 RAG ZIP。</li>
</ol>

<h2>使用方式：四步完成，无需配置</h2>
<figure>
  <img src="../assets/YouDontNeedRAG/p04.webp" alt="两张截图：添加数据源和审核数据源">
</figure>
<div class="grid">
  <div class="card"><h4><span class="n">01</span>添加数据源</h4><p>粘贴任何包含链接的内容——列表、邮件、Markdown 文档——所有 URL 都会被自动提取。也支持本地文件（PDF、TXT、MD、JSON、CSV）。</p></div>
  <div class="card"><h4><span class="n">02</span>审核</h4><p>开始抓取前，URL 和上传的文件会分别列出——确认之前不会执行任何操作。</p></div>
  <div class="card"><h4><span class="n">03</span>抓取</h4><p>抓取内容并测量其真实大小。</p></div>
  <div class="card"><h4><span class="n">04</span>导出</h4><p>根据内容的实际大小，选择纯文本或 RAG ZIP。</p></div>
</div>

<h2>输出：两种格式，按实际大小推荐</h2>
<p>工具会测量实际抓取到的内容，并告诉你哪种格式合适——不需要你去猜。</p>
<div class="pair">
  <div class="card">
    <h4>纯文本</h4>
    <p><code>knowledge_base.txt</code>——直接粘贴到任意 LLM</p>
<pre><code>=== Page Title ===
URL: https://example.com
Scraped: 2026-01-01T00:00:00Z

Full page content here...

---

=== Next Page ===
...</code></pre>
    <span class="badge">内容装得进上下文窗口时推荐</span>
  </div>
  <div class="card">
    <h4>RAG ZIP</h4>
    <p><code>knowledge_base.zip</code>——可直接进入嵌入管道</p>
<pre><code>knowledge_base.zip
├── manifest.json   # id, url, title, char_count
└── pages/
    ├── example-com-abc123.json
    ├── example-com-docs-def456.json
    └── ...</code></pre>
    <span class="badge">确实需要 RAG 时推荐</span>
  </div>
</div>

<h2>并不反对 RAG：什么时候真的需要 RAG</h2>
<p>这个工具不是反 RAG，而是讲求务实。以下情况下 RAG 才是正确选择：</p>
<ul>
  <li>知识库确实很大——数百万 token，而不是几千。</li>
  <li>需要在实时更新的语料上实现亚秒级检索。</li>
  <li>需要在许多不同用户的私有数据集之间检索。</li>
  <li>查询非常具体，完整文档上下文大部分都会是噪声。</li>
</ul>
<div class="callout"><p><em>“其他所有情况——先试试纯文本文件。”</em></p></div>

<h2>技术栈</h2>
<div class="table-wrap"><table>
  <thead><tr><th>组件</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>Next.js 15</td><td>App Router，React 19</td></tr>
    <tr><td>Python 爬虫</td><td>requests、BeautifulSoup、markdownify、pdfplumber</td></tr>
    <tr><td>基于文件的任务</td><td>异步抓取任务存放在 <code>data/jobs/&lt;uuid&gt;</code></td></tr>
    <tr><td>纯文本输出</td><td>单个拼接好的 <code>.txt</code>，可直接粘贴</td></tr>
    <tr><td>RAG ZIP 输出</td><td><code>manifest.json</code> + 每页一个 JSON，通过 <code>zipfile</code> 打包</td></tr>
    <tr><td>无向量数据库</td><td>这正是项目的意义——默认零基础设施</td></tr>
  </tbody>
</table></div>

<footer>根据项目演示文稿（YouDontNeedRAG.pdf）转换。</footer>
</main>
</body>
</html>
`,jv="/assets/p03-BTMRXgvx.webp",Gv="/assets/p04-Bk65-ZJy.webp",Qv="/assets/p05-5eU5q1Vb.webp",Yv="/assets/p07-CPskfqo9.webp",Lv="/assets/p08-DJ4dzVo-.webp",Hv="/assets/p11-B0y402ra.webp",Uv="/assets/p14-Uk-GlUV-.webp",Vv="/assets/p17-Ua8hIqo5.webp",Xv="/assets/p19-CGwWffZn.webp",kv="/assets/p20-BfHg8LB9.webp",qv="/assets/p22-Btza1shv.webp",Jv="/assets/p23-BNjGTJg6.webp",Kv="/assets/p24-Dqc8VthJ.webp",Zv="/assets/p25-D9M7B7jt.webp",Pv="/assets/p27-BIKlBa2J.webp",Fv="/assets/p28-DOnSEluO.webp",Wv="/assets/p29-D8XRs0ed.webp",$v="/assets/p30-DJLVNbFb.webp",tb="/assets/p31-DO0MkuPv.webp",eb="/assets/p33-2ch0vgsj.webp",nb="/assets/p34-C9gcRt2y.webp",ab="/assets/p35-Bwz8aiKM.webp",lb="/assets/p36-DB9PPM3i.webp",ib="/assets/p03-B6FXesv8.webp",sb="/assets/p05-5AHqa-tW.webp",cb="/assets/p09-BlhX6fL2.webp",ub="/assets/p12-Br5km9mq.webp",ob="/assets/p13-DsYEscDM.webp",rb="/assets/p15-B4uGVpr2.webp",db="/assets/p16-CskQbUxV.webp",fb="/assets/p02-CWYRD_ug.webp",hb="/assets/p03-DcqL31DT.webp",Ab="/assets/p05-BbPihYi_.webp",mb="/assets/p06-p0PMq3Cw.webp",gb="/assets/p07-Cll5rbQc.webp",pb="/assets/p08-BhLInLmj.webp",vb="/assets/p09-Bamh211f.webp",bb="/assets/p02-DwwDt-uB.webp",yb="/assets/p03-DJ2oE7s-.webp",wb="/assets/p04-n6CfN52O.webp",Eb="/assets/p05-B5NCvDCl.webp",Tb="/assets/p06-IlDVyzR0.webp",Cb="/assets/p07-AeVGgaIM.webp",Db="/assets/p08-CZ03wvXc.webp",Sb="/assets/p09-CERkJp_h.webp",Mb="/assets/p10-CY9qdGkO.webp",Bb="/assets/p12-yOJWyxrx.webp",_b="/assets/p15-DLCN9x8T.webp",zb="/assets/p16-3bl03KXT.webp",Ob="/assets/p17-Bgct4rq4.webp",Rb="/assets/p18-k0euEacx.webp",xb="/assets/p21-Ds3AhebA.webp",Nb="/assets/p25-CQmzhlTX.webp",Ib="/assets/p06-D6xtHpws.webp",jb="/assets/p04-DUuwBRx-.webp",Gb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVR4nGNgGOqgfoH/f5pbcuZ743966hv40KqnR7BSAwgI8f0HYapFyxki4wxm8d8f7/6D9JDjEBhgJEUxzJK3zx5glReWUgDTH959ItpcRmpYTIlDmAhZDMIgi0H4/P/JRDlgz9NisHpiooYRn+XYfNy0IhFM10XMJ1oOFCK4QoMRl+UgX7zYJsPg6R2I1YEwy3zDjRg2rzyH01Hbt64H0xJeTxhMOOsZiXbAvUvHwOxjJ0+CaWwOgTkCm+Uwi2EgJrUQayiwMBAAVubmKAaCHIItqGFiprx+hIwkzQHIDrknvBZsEcgS9BCBWXz68yZwtICij6oOAAFQXOe7tGKECHJwgxyyeeUmBlNe4hzARG75DwoRECY2axJ0QGPCRowEMnFPNUEDLi5gwysPihIQxlXks+DTDApumCNgQU8sgFmKSJT74XLI2ZGFkEEwi0EOASUuhreELaZJIswHhcZKUGicwxoiyD4mJRGyEOsAZIeAACxq5BgswJaTmv/JdgC6Q9Zv3ky25SCAtTYEFZlKelYM1AK4imEQwBkCUEeAswusXiDHYphZZLUHPrz7xAgLDVJDBOZrQo0SRlIMhTUukEMElAbExcTglsIczkAOOENio/Tdkyv/505vJ7lRSrVmvwAFreFRMGgAANJJBTJXCxfxAAAAAElFTkSuQmCC",Qb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADiElEQVR4nO3dMWsUQRjG8Vk5BIuIeHARFRE/gKB4RNIJaVRUrLS4QgtLCWIpeCRgqSB+AFN6hRx6aJqAXSCc5NAPECxUbCJBC8vYulPsMO7s7sw+/1+3bMhdwsP7vjuzt2cMAABQlBlxw7Ub+/8er9x5I/U/OdD0G0CzCIA4AiAuun738c9KridfODSM7j226e+jAogjAOIIgLhW9VcFw8DrFlQAcQRAHAEQF3wGUF9bTw0VQBwBEEcAxMn15yNHD+dmFNvez1+Z0t4CFUAcARBHAMRlqe9n+/b43e9fcsez/Re546UTT02bZgQXKoA4AiCOAIhLrp/59vjQusdPt2pGoAKIIwDiCIC46PpV0z1ebUagAogjAOIIgLgstR5vr92fy+6bmMwc7y+2GYEKII4AiCMA4rK6e37o6/jVV3cLzz++/TKp1+taM0LVMwEVQBwBEEcAxGVV9/yNbw9z53+8P5k7vnz1pqmSq2dfu3U+dzwZbdc6U6y/GxeeP3blq6nyHkwqgDgCII4AiKt8Btj5vFn485tbW4XnQ88IrpkgdM939XiXwb0Hla4LUAHEEQBxBEBcp+k3sLiwUKqH2jNC6LX6Vcfv689dNymjAogjAOIIgLjGZwDfGWGn+7qwR9s9uew6Qt/R46e/3xbuLdh7H7GhAogjAOIIgLjoZwCbvV+/vPQk6DrCuufavT0jTEb5maA/xwyAiNECxBEAcZ22P//ftdcwsz7LZ0zcPTs0KoA4AiCOAIhzzgChe/7zjUde1/FV+7R2MHc836v39e29hLJ8n+VMBRBHAMQRAHG17wXYPd+eCVw/n5qpo8e77yn84PV6fGcQvNACxBEAcY3fD+Dq8faMYN9zZ3ZNo6bcE4iU0QLEEQBxjc8A3usGI3vdYLvSdYSp53U89wQiKbQAcQRAXPQzQOh1BNspc7Gw56f++X8XKoA4AiCOAIhLfgYoOyOMJxOpnm+jAogjAOIIgLjgM4D9LNszZxe9nh2sblDxs4FtVABxBEAcARBX+TqAayawtX1GGFg93sZ3B6NWtABxBEBc7XsBrh7nmhGWn10yKRnUfF3viwogjgCIIwDioupH//O9hGXXEcbW/QDzvV5S1/FlUQHEEQBxBEBcp+rn0MW2juCaEQaJ93jfZztTAcQRAHEEQFzU/ayJdYS9yHt8aFQAcQRAHAEAAAAAAAAAAABosb97ZAz5geJM+QAAAABJRU5ErkJggg==",Yb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFuElEQVR4nO3dv2tdZRzH8XtFhAwppYFUVET8AwRLQqWb0EWlBqc6dKhDRynFUfASwVFB+geY0QwS4sW6FNwCpSHF/gHBQaVLS6lDxvgfPI/y5HB+fF6v9Xhvr2n65oHv954zmwEAAAAAAAAAUzHv+wPQr8XO1mnp+vbNfb8jE/ZS3x8A6I8AQDABgGACAMEEAIIJAAQTAAhmxltxeLJdnJNvrCz8DAfM31+ZEwAEEwAIJgAQTAAgmABAMAGAYAIAwcywIfh+C04AEEwAIJgAQDABgGACAMEEAIIJAAQb/B7A0OeoMGZOABBMACCYAEAwAYBgAgDBBACCCQAEM0OfuPMXzhX3KGqeP3vhd2TCzy1wAoBgAgDBBACCCQAEEwAIJgAQTAAg2Hzqc870Of7Tv/8oXn90erd4/err37b88fYIBs4JAIIJAAQTAAgmABBMACCYAEAwAYBgZvAjn+MP3dprbzW93v0IuuUEAMEEAIIJAAQTAAgmABBMACCYAEAwewAV6XP8vtkj6JYTAAQTAAgmABBMACCYAEAwAYBgAgDBJr8H0Pccv3bf/Xfnnze9/9S1/vzsEZQ5AUAwAYBgAgDBBACCCQAEEwAIJgAQbD71Of/Qv4//9Y+fNb3+q09/mA3Z2P//1irPNRj7cwucACCYAEAwAYBgAgDBBACCCQAEEwAINh/7nP/+X18UX//k3hvF6x989MlszFrn7NeuXypeX+4ejXqOX/PrL3tNr3/1wz+L1zdWFoP+N+YEAMEEAIIJAAQTAAgmABBMACCYAECwQc8o/8sewPHjg6b3P3jwoOn1Q98jaN0TGPqcv3WO3+rGrTujvl+AEwAEEwAIJgAQTAAgmABAMAGAYAIAwV6ehbty+XKvc+jaHsHQ76vf+vk2Vz8+s8/C/+cEAMEEAIIJAAQTAAgmABBMACCYAECw+D2ArvcIjtd+apqj1+bkfd+PoHWO//Cfn5ueW1B77gNlTgAQTAAgmABAMAGAYAIAwQQAggkABLMH0LHl7lHx+u2r3wz6fgRd33e/tkew3C3vCWyu2gNo4QQAwQQAggkABBMACCYAEEwAIJgAQLDmPYDFztZp6fr2zf1BPx89/bkGj07vVv4Lc/YpcwKAYAIAwQQAggkABBMACCYAEEwAIFjzHsDQ5/zf3/+y0+/jj93vO68Ur19cn03aw8pzCfp2eLJd3LPZWFk0/ftzAoBgAgDBBACCCQAEEwAIJgAQTAAg2OSfC1Cb89f2BFrfn2HP8TcrzyWo+23WpdY5f40TAAQTAAgmABBMACCYAEAwAYBgAgDBJr8H0PUcv7ZHcO36pfIbPJ1Fq83xaz+/J/c8t6CFEwAEEwAIJgAQTAAgmABAMAGAYAIAweL3ADq/38Bu7X4DR53++WP/Pv5yt/z+m6v2AFo4AUAwAYBgAgDBBACCCQAEEwAIJgAQzB7AxO9HUPPm7L2mOX/7ffXpkxMABBMACCYAEEwAIJgAQDABgGACAMHsAYTvEewtl8Xr5vzT5gQAwQQAggkABBMACCYAEEwAIJgAQLDB7wE8f/ZiXrr+9jtXTkvXjx8fnPlnIseNW3eafj+HzgkAggkABBMACCYAEEwAIJgAQDABgGCD3wPoek+gxh7BtOf4NWOf89c4AUAwAYBgAgDBBACCCQAEEwAIJgAQbPR7AF3PcVv3CG5/937Lywn/vn7XnAAgmABAMAGAYAIAwQQAggkABBMACGZG2rHzF84N+n4Ee8tl8frF9fWm9/d9/GFzAoBgAgDBBACCCQAEEwAIJgAQTAAgWOf3Azg82S7OwTdWFpPeRej7fgStewTm+P1a7GwV//63b+43/X45AUAwAYBgAgDBBACCCQAEEwAIJgAQbNIzeNrvR+C++tPmBADBBACCCQAEEwAIJgAQTAAgmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA7Oz9C/+sDdlXpsgvAAAAAElFTkSuQmCC",Lb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABn0lEQVR4nGNgGAVDGQgI8f0H4QGz/O8rCzCmxBFMFLvk8AmGAQECQnz/oyICKI4CFphhxGr48O4TIyGHkWIWC0jDvUvHiNXDoKRn9R+XI8gxiwXEOHbyJIrEstWbwXRUqC9RvkTmk2oWIzYDvdycwPS2XfvA9NtnDxjIAcJSChhmYUQBA1K84ou/j2+ekWQ5ekigWwxjM8IYIMt7WyvB7L0HIZqd7c3BdEJiOtgBSnpWRFkOSgcgB7x89QrDLBAorm6HO4IFmwHIitGBgCQ/Xss/PP9ItFkggJKacUUBKA3AQmDP02KwWIjJHBQ1a86kgGkX6V54CMSkFhKMAhZcEoQcRa1yg4lhgAELqRrQg56QOCHAxDDUQuADWiqnqwPukVDOU90Bx/CUbHRrem1ZOxdM48PIaqjqgC1Qg2Fi4ObYWgYIfmXxH59aqlsOA9/a2f6DMAMaIMURTLgkiAnGH9d/MXBV/mJ8F8fwn1xzGHFpwpbiQXUBMU0yfHpBUcYcjLCXEZ9B6GKELCekF2Q5g60FuCWN7Ai6ArAjRsFgAgAaxfaDBf79dgAAAABJRU5ErkJggg==",Hb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADPUlEQVR4nO3dvWsUQRzG8VlzWFicSwLiSyOpxCKVYAiIoGIhWKlNUFFQ7ARJFawlVfAP0ErERq2EFEEFCRwXsLJIUgUbIx4mJBYigXDWO5FZxn2ZnX2+n+6yl2Vv8/D7zc3ObowBAAAAAAAAAABtlhgx6Wh36Nq+vfVL6pwcCH0ACIsAiCMA4hK1nr+5dtr5/rFTK1JjAiqAOAIgjgCI6xh1S33rB12jhAogjgCIIwDi5MYAtx4ezbxeWOxKfe+3UQHEEQBxBEBcx/d6edOE7tlp5OeLCiCOAIgjAOI6dg9b/9IzMRmfmBrWOSZIW3a+qADiCIA4AiBu3zxAb3m50A5fvX7n3D5946pp8vfy1PP3Yz9fVABxBEAcARCXlN1Dr1y+4Ny+sPjRuX1z46tps7HjJ0s9X764FoAMWoA4AiBu3zxA3lx63de/d35umJj1Cs4T+PK9FkIFEEcAxBEAcbn9wu75809mne//8Mnd8y6eP+vcfufuA+cYYHxiyjTZurU+wB4D/BgMSj1ftpnHc15jAiqAOAIgjgCIK/3eQN+eVVR67LAJafv7TlTny0YFEEcAxBEAcd5r6Ku+FmCvB8ibB3j/bca5v+tnnhc6njef7zm3Xzox7zUPcPP+I1MlrgXACy1AHAEQ5z0PUPa9d7HdX9+25xtQAcQRAHEEQBwBEEcAxBEAcQRAXPTPCi461x96/6FRAcQRAHEEQBwBEEcAxBEAcQRAXPTzAEXX5aujAogjAOIIgLjoxgCxPZ+/6agA4giAOAIgrvFjgLqfs6eGCiCOAIgjAOKC3pf2P/cKvnz2tNb77fP4Hk/oewFtVABxBEAcARDXqH70rzFAXo/N66l7g8nsmGKp7z6Ac5OZlyNH+kmdx1s3KoA4AiCOAIgL3o/q7qG/5w465xkOze4W2n9sYwIqgDgCII4AiKt8PUDTngP4Z3U383r0RXYctHXbDF3b6z4/VY8RqADiCIA4AiAuqbqnlb2O3/5/AaG/R6eBP+/e2+yYZeSa39+UCiCOAIgjAOKS2OYBQvf80J/X7vn2+gV7vUPemIAKII4AiCMA4hrdT5GPeQAUQgsQRwAAAAAAAAAAAABa7C/nx+6gVGKixwAAAABJRU5ErkJggg==",Ub="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFIElEQVR4nO3dPYtcVQCA4btmsbCIIQHxo5FUYpFKMASCYMRCsFIbiaJgsBNCqmAtqYI/QCsRG7USUgQVJLBkwWoLtQppTDCYsEkhEgjrL3AGvLne2Xmfp529M5edsy9nOGfPDAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCVjcmemZVw6PDBvTHX7965Z4yssUfmvgFgPgIAYQIAYQIAYQIAYQIAYQIAYdZ413yd//Zvz496/iPP/bLwcfsE9jczAAgTAAgTAAgTAAgTAAgTAAgTAAjbnPsGmNmVq0t+4OD/dCPMwQwAwgQAwgQAwgQAwgQAwgQAwgQAwuwDWHPvfPTkwscvXV68zu///debGQCECQCECQCECQCECQCECQCECQCEbU79/fIsVl9nN77mHV9mABAmABAmABAmABAmABAmABAmABC2uWwd9trO1v93N0FHj53YW+d9AsbXao8vMwAIEwAIEwAIEwAIEwAIEwAIEwAIW3oewNb29jCnr77+btT1b7/1+rCfzf3/8lO/vvE1LzMACBMACBMACBMACBMACBMACBMACNtY9XXo1159edT1ly7/OOr62zeuj7qeeR15+tmVHl9T870AwL/yEQDCBADCBADCBADCBADCBADClp4HMPZc+rn3EUzt7p835r6FtLnPE5ja1N8LYQYAYQIAYQIAYQIAYQIAYQIAYQIAYaPXGJet81/85Pyo5//hp3HrvKdeenHU9e+9/+GofQBHj50Y9fp113a2Ru0D+OPWrZUeX8uc+/jCpPsEzAAgTAAgTAAgTAAgTAAgTAAgTAAgbOl5AHObep11boeeenwo2715d9bXP7Xm42sZMwAIEwAIEwAIEwAIEwAIEwAIEwAIm/TM8XX4XoDbN65Peh7A97+fG8Z484XPhzl98/MHo65/5ZmLk54HcPrM2WE/2/W9AMBUfASAMAGAMAGAMAGAMAGAMAGAsM39vo5Z36fAeo/PqZkBQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNjk5wGw2uf61++/zgwAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwpwHMLPdm3fnvgXCzAAgTAAgTAAgTAAgTAAgTAAgTAAgzD6AiV3b2Zr6JeA/MwOAMAGAMAGAMAGAMAGAMAGAMAGAMPsARtra3n447wTMwAwAwgQAwgQAwgQAwgQAwgQAwgQAwjbmvoFVd+jwwb0x13/52acLHz995uxQNvXvZ/fOPWN8ATMACBMACBMACBMACBMACBMACBMACLNGOnIfwNh17LHr1A9uHV+8T+HK1TFPPwwnjy98+MATVzfW+fe77swAIEwAIEwAIEwAIEwAIEwAIEwAICy/Rrru69B/XXh01HkGj52/P+v9r/v7MzczAAgTAAgTAAgTAAgTAAgTAAgTAAjbHOLn9q+7v3+9v/Dxw18s3gty591hb8z16z5+dvf5PgIzAAgTAAgTAAgTAAgTAAgTAAgTAAjb2O/rtNd2toZVdvTYibVeRx6r/v4++HbxPosDb0z7N2oGAGECAGECAGECAGECAGECAGECAGH7fg161c8DqK/z19/fB0vW+YeTxxe/wJWrw5T7BMwAIEwAIEwAIEwAIEwAIEwAIEwAIMwaNczIeQDAbHwEgDABgDABgDABgDABgDABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOHh+wfTre9wxwcbxAAAAABJRU5ErkJggg==",Vb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABXUlEQVR4nGNgGOmAkVYGCwjx/ccm/uHdJ0aqOkAAh0Vebk4MU3pawOyckhq4+LZd+1AcwUKpZSCLQACbZcQAFmItooZl2AATusUgDLIIhu9dOgbGMMvJATAH43WAgBDff5hllBiMzzJsgIUUy0gNciU9K4K5gIWelmEDLMiKlfSswNFAK8vwOkBAiO//29mfGBhO6kBFAqhuGV4HoANQgYEL4MqmxACi0gAIvH32gIEWQFhK4T+yIxiRJWFZETkBYit0KBFDL4qZGAYYMGKUhJL8NLXww/OP9A+Bu/ulccoxkWXg2YukWX74BE5HMDGQCdacSQFjYixn8H6H0xFM5DoA2SG4gLLjUwYGWwsGhq1CYBrMp7YDCIUGzBHYLAcBqiZCXA7BZTkIkNQkIwRCTOaQrIdloCymWhSEUGA5CLAMlMUUhYCysT5VLCfbAdQEjNRsbBADqNmaYhgWAACGz6ahFPQlcwAAAABJRU5ErkJggg==",Xb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAACzUlEQVR4nO3doW4UURiG4QMZDZtWAYa0BtEU0YqmCaIIRDGIvYRKJBJZiayDS8C2AkEFCYGkCPAlGEC1Kb2BoueImZzMObtn5n0fN9lmu2m//N+/u7OzIUiSJEmSJIpby34AUzdbuXNT8v6vLq8H/Q9v53soGiMDAGcA4PA7wKxwR+8/e9o6Pnpz2PnzL1+9Trr/kw8fB+0ETgA4AwBnAOCaAO/s/aijY7k7uzZOADgDAGcA4JqxP6+mdXZuTgA4AwBnAOCa3B3f19ExO7v771F6Z3ECwBkAOAMA16R2/s8fn0f9PDt3xx4tuLNzcwLAGQA4AwBX/fkAY+/Y2NrmbsjJzwVoECsAzgDAZd8B7OyynZ2bEwDOAMAZALgmtbPWNneT3hugP8+unRMAzgDAGQC45PMBLt5et3/g60bPPbzovNXOXi4nAJwBgDMAcMXPB4ivYVNa6c8m1sbzATSIFQBnAOCK7wAXf36V/hVoq/cftnYerxOoJFYAnAGAS36vu++zgqnn7ee+PgDt/k68VrCGsALgDACcAYAzAHAGAM4AwA1+HWB2727WB6Q0V3//tY/9ziClsALgDABc9dcIojk/fdA6Xt/7XfT3OQHgDACcAYCb3A5w/u1763h963EYU+eHT1+i23eK7gROADgDAGcA4Ca3A8Tenx103j7ffhdq6vzw/LJ9fLzSuROsPmq/F5DKCQBnAOAMANzkd4DUHWFeeCeIn8fHnR53fnji6wAqyAqAMwBw+B1g2a8b9O0Eng+goqwAOAMA5w5Q2Y5QuvNjTgA4AwBnAODcARIt+vyB0pwAcAYAzgDAuQNMvOP7OAHgDACcAYDD7wBzWOfHnABwBgDOAMBNfgegd3wfJwCcAYAzAHCT2wFqvyZQbZwAcAYAzgDAGQA4AwBnAOAMAFzydwb1fYeQFiv1O4JiTgA4AwBnACRJkiRJkiD+A0IUqjl9HFXTAAAAAElFTkSuQmCC",kb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEu0lEQVR4nO3doY4dZRiA4VmyetlsFWBI1yBIK4ogTRAgEGAQXAKysrKysrIOLgFLRUURJA0kIKjfBgOobpa9geUOZhImw8yc93nsyTk72ey++U++78wZBgAAAAAAAAAAAAAAAAAAAGBrjta+AJjj9OzkZs+/wavL61X/B99a84cD6xIACBMACBMACBMACBMACBMACLMHELf3OfoXn382+vjTJ49nvf6Dh4+GJT17/mLVPQEnAAgTAAgTAAgTAAgTAAgTAAgTAAg7XvsCDt3W5+xTc/QpW5+zM84JAMIEAMIEAMIEAMIEAMIEAMIEAMI2vwew9Tn6FHN2tswJAMIEAMIEAMIEAMIEAMIEAMIEAMKOtz7HnztHn+Lz7Mz5+9j7/QycACBMACBMACBMACBMACBMACBMACDseOk5/+tXL2e9/t7nrGvb+hx769d36JwAIEwAIEwAIEwAIEwAIEwAIEwAIGzz3wuwdebY23b7zv1hy64ur4/W/PlOABAmABAmABAmABAmABAmABAmABC2+T0Ac/ZtM2ffNycACBMACBMACBMACBMACBMACBMACDte+vPMt+/cX/R7Aw6dOTtLcgKAMAGAMAGAMAGAMAGAMAGAMAGAsNl7AKdnJ6Nz/jffXo+/wC8fzryCr2Y925ydMicACBMACBMACBMACBMACBMACBMACNv89wJMefb8xXDIpvYs2LeriftpLM0JAMIEAMIEAMIEAMIEAMIEAMIEAMJ2vwfw5q8/1r4E+M9uvfv+zZp7Ak4AECYAECYAECYAECYAECYAECYAEHa09ufZX796Ofr8Bw8fDUt6+uTxrOe7Pr+/Je9nYQ8AWIy3ABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABC2+v0ATt95e+lLgM26+vuf8cd9LwCwFG8BIEwAIEwAIEwAIEwAIEwAIOx47QuALbv48b3Rx88//XPYMycACBMACBMACBMACBMACBMACBMACLMHsHEXv/0++vj5vbv/27UU5/zDTz9PPP/jXe8JOAFAmABAmABAmABAmABAmABAmABAmD2Anfv+129mPf/rj74bDtncOf/w5eX44z+czdoTuPXB+PcCLM0JAMIEAMIEAMIEAMIEAMIEAMIEAMLsAcRN7RHsfU9g6vP4FxNz+qk5//CJ+wEAO+UtAIQJAIQJAIQJAIQJAIQJAITZAyB9v4HzmXsCW7/v/xQnAAgTAAgTAAgTAAgTAAgTAAgTAAizB8Ci9r5HcL7zOf8UJwAIEwAIEwAIEwAIEwAIEwAIEwAIswfAotae4zPOCQDCBADCBADCBADCBADCBADCBADC7AEwyhz/sDkBQJgAQJgAQJgAQJgAQJgAQJgAQJg9gDhz/jYnAAgTAAgTAAgTAAgTAAgTAAgTAAizB7Bz5vjM4QQAYQIAYQIAYQIAYQIAYQIAYQIAYfYANu783t21L4ED5gQAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYUdrX8Dp2cnN2tcAa7m6vF71f9AJAMIEAMIEAMIEAMIEAMIEAMIEAAAAAAAAAAAAAAAAAAAAAACG7fgXsLirGQrWfYEAAAAASUVORK5CYII=",qb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABtElEQVR4nGNgGGDACCL+rmX4jyzIHAwRpzbAac9fNAl6AJidTAwDDJgG2gGMhBQICPFhjZ4P7z5RJZ0wErL83qVjWOWU9Kyo4ggWQgqOnTxJqR2kO0AAR7CTqw4GsIUYIzZD3z57wEALICylgOEIFlyKP755htcwUBpABrjSCqGoZMGrC4/Fva2VWMVhDuFnS2H4Ofccw4/Yc3jNYyHVcpjFzVOmocjBxEFqQI4AWU7VgkgJj+XIYiA1ILUgnxPyPUkOQLfo7tmLYBxfagTGuBxGdQcgg/P/JzP4hkMsJxcwkRL8MB+CfAyyHAZAjkAOBVg0UM0B9y4dYyiubmeozckC8xd2n2PYvBIRvyA2SAwEQGpAagllS7KzITJAdgS5gIVUDSAfgoIZ5mN0OZolwnvQaMBlEUyMlOAHAZJCAGQwrpIQ5jhSLCfZAcgWkFoXkOyAYwTaAUtm95OkHhdgJLeeR3dATGohWe0BFmIVEuNAcppoLMQqJCZUkNUQ6xhGWCcBX28IX+MUFyDUaIXZyUKsgbRqnLIQowjkk5jUQooboHgd8Bepf4gtOqjRBxiIPihBAAB3CdT3DskxpAAAAABJRU5ErkJggg==",Jb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADUUlEQVR4nO3dMWsUQRiH8TuzWGrQzkryASxS+h1SpbCJiGAasQmHhYiNIhYSLBQbsRAstEiV7xBIYUR7D6tUUaKVFiHWOyc3DDt7O5Pn+XWbhM0e9+d935vZZEcjSZJENA6/cLIzOu1ywqX12XMqn9zvz7nOV6SqGQA4AwDXxH7Anl6W1PcjNjNYAeAMAJwBgDMAcAYAzgDAGQA4AwBnAOAMAJwBgBt873750oVO+9sxxz9/D/4aS2YFgDMAcAYAbjx0z59+3ev1961cu946diZoswLAGQA4AwAXvSewb3v7+0NfApoVAM4AwBkAuKa2tf2zfn0xudcxrABwBgDOAMCNc/fUH4ffu55Sc1y+cjXrTGAFgDMAcAYArve9gF9Hh6MhhfcDpJr2fL/C0HslVgA4AwBnAOAGvx+g7x6//fRBr+efRmaEi+fvtI7/vj1oHf+52T5eNCsAnAGAMwBw1c0AYU+O9fgnr153+n3bkfOH1xPOBGHPL40VAM4AwBkAuOJngEX3/Nj5Ht27O/d6ZmcCZwAVzBYAZwDgip8BYmI9/9unL3O///jD7bnff/f8IGkmqI0VAM4AwBkAuOpngFSfT1+2jtdurLaOdz+W/bk9NysAnAGAMwBwTW1r/7HP/bfur87t+TFrwUyQui4Q3xsY9u8MQlYAOAMAZwDgipsBwh6ZOhOEPTq1x+8G6wCx84V7AZOHz4ru+SErAJwBgDMAcMXNAH2jrfXHWAHgDACcAYCrfgYIP4enrgukqv0ewJAVAM4AwBkAuOJngNS9gdhMkLvnTypb+w9ZAeAMAJwBgCt+BkidCXL/n8BJ0ONj11MbKwCcAYAzAHDVzQCpPbj25wX0zQoAZwDgDABcU/szb2Lev3lR9fX3zQoAZwDgDABc1mfR/+9ZwkPrOgNsbG6NStL1WcEhKwCcAYAzAHBN6T2qtBnkeODXl5sVAM4AwBkAuOLvByhtXWE58XpKnxmsAHAGAM4AwM30p5OdUavHLa3n3y9I6bG135O3EtyTuOiZIPZ+WgHgDACcAYArfh3grN+TNzQrAJwBgDMAcMXNAOHn5I3NraL2AlK5F6Ci2QLgDABck7qWHJN776D0Hrpoqe9HjBUAzgDAGQBJkiSgf19l2yPiyVMyAAAAAElFTkSuQmCC",Kb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFP0lEQVR4nO3dsaocZRiA4TkmWMYQOys5F5AiZe7BKoVNRATTiE0QCxEbRSxELBQbsRAstEjlPSycwojpDVapYoiptDjECxB2wD+Tmd33edpNciZ72JcP/m9npgkAAAAAAAAAOBYnc3/g/M70dFrRhRvz1whbdb7xz88Lz+9SgK0RAAgTAAgTAAgTAAgTAAgTAAi7OPoPOKeH9T4fo3sGJgAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIW/Se5Yfg8pVLqz6/fdTjR0/yv0P+PxMAhAkAhAkAhAkAhAkAhAkAhAkAhJ3Uz/nv39tNh+z06vW9r9sTYB8TAIQJAIQJAIQJAIQJAIQJAIQJAIRdnOJ2Z2drXwKsxgQAYQIAYQIAYQIAYQIAYQIAYQIAYZvfAzj0+/avzfu3rscbf26DCQDCBADCBADCBADCBADCBADCBADCTrZ+Tv3ngz+e38XAM/byK69uek/ABABhAgBhAgBhAgBhAgBhAgBhAgBhm78fwJy/Hj6Yyk6vXl/159+/t5vKdgf+XAkTAIQJAIQJAIQJAIQJAIQJAIQJAIQd/B5A/Rz/i08/mA75+kf3CF568e29r//z3d29r//9xv7Xj50JAMIEAMIEAMIEAMIEAMIEAMIEAMLsAax8Tj56jv/J199Maxq9/rn3Z25PYO6cn/1MABAmABAmABAmABAmABAmABAmABBmD2DQsZ/zj17fR+++M/T+zO8J2AMYYQKAMAGAMAGAMAGAMAGAMAGAMAGAMHsAKxs95//9l9+G/v7HP7419Pe///zuonsCLMsEAGECAGECAGECAGECAGECAGECAGH2AI7cr0+/2vv6a69f2/v6zz/5vv0xMwFAmABAmABAmABAmABAmABAmABAmD2Ahe/7P/p9/zffvzZ0zj9qbk9g6fsFjD83YLf39ToTAIQJAIQJAIQJAIQJAIQJAIQJAITZA5gxd4689J7A3Dn60uf4c/cDGL2+uecCvPfhZ3tfd84/xgQAYQIAYQIAYQIAYQIAYQIAYQIAYfYAjpz7+rOPCQDCBADCBADCBADCBADCBADCBADC7AGsbO778EvfL2Dt/x/rMgFAmABAmABAmABAmABAmABAmABAmD2AjT83YHRPYOvn/O77vy4TAIQJAIQJAIQJAIQJAIQJAIQJAITZA9j4nsCcuT2Cpc2d44++PyzLBABhAgBhAgBhAgBhAgBhAgBhAgBh9gBWNnoOPrpHMMo5/mEzAUCYAECYAECYAECYAECYAECYAEDYwe8B7M7OprIfvv1y1Z9ff/8PnQkAwgQAwgQAwgQAwgQAwgQAwgQAwk6mjbt85dLTta9hy9beA7h56/aqP3/rHj96sunPmAkAwgQAwgQAwgQAwgQAwgQAwgQAwjZ/P4Ctn6Mu7dD3IOq/v60zAUCYAECYAECYAECYAECYAECYAEDY5vcAtu7Qz+kP/f2xZzDGBABhAgBhAgBhAgBhAgBhAgBhAgBhs9/VPr8z7T3HvXBj+88WWPIc+/693fO7GP7j9Or19J7A+eDn0wQAYQIAYQIAYQIAYQIAYQIAYQIAYe4HMGh3dvZsfhOwAhMAhAkAhAkAhAkAhAkAhAkAhAkAhNkDmDH3ffKbt257LsCKjv37/kszAUCYAECYAECYAECYAECYAECYAEDYxaXvSz5q688dcA7Nmp+PUSYACBMACBMACBMACBMACBMACBMAAAAAAAAAAACYDt+/F1jcEwEywdoAAAAASUVORK5CYII=",Zb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABj0lEQVR4nGNgGO7gXRzDfxAeMMsZBgq8Q7P8Wzvb/wFzwLfBYvnftZhRwkQvR2GznGYAFgKEfA8CLDCGgBAfRS788O4TIzn6GGGWv332gBL7GYSlFOCOAIWA0CKI2aBQ4Kr8hdNxLMicj2+eMVADwCwHAXyWYziAUoAtGglFDQu6wLGTJ0my1MrcnEFJz4rh3qVjWOWV9Kz+43MECzYDKQFG7p5w9rmd28EOw+cIJgYagDVnUlAcA3IErlzGQo0owAdAjsAXEozI2ZDcXICcBpCjABmAHAFTi+wIFgYqA5hFxAImhgEGLPSyiJ8NkjBHbgh8/DUHyrLC7YBjJGZBcvQumd3PEJNaCM+OjLBs6OXmBFe0/wRqsepoYYVXHBvAp3bbrn3wrMhESCNMDJc4MZbjU8sIY8CKSk4+DjC/pbwQTNd09qNoQBf//ukHhqG4zICpRS6IGJE1ghwB00wsABmKbCA+M9DVggBKFIAksfkIJIZLHN1AfGZgqxFZ0AWgilBqLiSNuMRJMWMUDC4AAOFs8osFTHsAAAAAAElFTkSuQmCC",Pb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADEElEQVR4nO3dv2oUURiG8VldglpEWTsr2QtIIcLKdrFQtNVSrPQCUolgKYiVF6CVWGqraKFdMCAWXoBYpYohSWEkIGs9o8xwOOfMmezz/Loh2clk9uX7vvm3W1WSJIloVHoD6HbvVou2n09e5n2PTuRcuYbPAMAZADhngMI9P3eP72IFgDMAcAYAzhlg4D3/15OV2uvPPDxK+p5ZAeAMAJwBgBuX3gD12/ObrABwBgDOAMB5HqDwcX9oz//zpr7+k7fi3kMrAJwBgDMAcJ4HGLhmz0/NCgBnAOAMAJwzwDE71x973N9kBYAzAHAGAK5zBjg3Wc16HDp0e7sHS329xAoAZwDgDADcqKvn/9z+UZGdv3AxaCbIfT9AalYAOAMAZwDggq8F7O9s59mSJTEJfPav757fZAWAMwBwBgDO+wECpb42UvpagxUAzgDAGQC46Blgc2urOs7ms1ltebo2ry1//7aZ9e9P1+aLkjOBFQDOAMAZALhx6h5Kc+n6jaDf//r+XeuM0fdMYAWAMwBwBgDOawGJvf5yr7Z8+/KL1pmh9ExgBYAzAHAGAM5rAbOy5zFKzwRWADgDAGcA4IKfDVz25wKmgfcDhF4LCNWcCbq2N3QmsALAGQA4AwDntYDMPXrorABwBgDOAMAZADgDAGcA4AwAnOcBBu7sSv0ew9SsAHAGAM4AwBkAOAMAZwDgDACc5wEGbv+o/mzhv+r3BIayAsAZADgDADemfS7gsv2/r54/qy3fub8R9OygFQDOAMAZALjOZwNvXrsatMJPn+M+W3f9yrzo+lPre3vffvhYW3YGUCtbAJwBgIueAWJ7XGnriWeC3Puja3udARTEFgBnAOBGsd+Td3r1VOvrHz/YaP35o6f1c9mhYtd/ePC7Sin3/ujaXj8jSEFsAXAGAC74c2abM0FXzxu6w0ZPDe2hfe+P2O1tsgLAGQA4AwAX/f0zqXtg13Fu6vXvJf4Ontz7w+8MUlK2ADgDABf9bOB/etIi8fqqntd/3PZHFCsAnAGAMwCSJEmSJEmSJElL7C9Ccu1mKUL5uAAAAABJRU5ErkJggg==",Fb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFKklEQVR4nO3dsYpcZRiA4YkJQVOsYe2sZC8gRRAi28VC0VZLSRUvIJUIloJYeQGmCpbaKlpot7ggKbwASbVVsmxSbCQg8Q7OhJwc/pl5n6c9TOZwMvPyL98/56xWAAAAAAAAAMCuuDD6BGCk01ur53Nev39vu79Dr40+AWAcAYAwAYAwAYAwAYAwAYAwAYCwrZ5hwtw5//6Wz/HnsgKAMAGAMAGAMAGAMAGAMAGAMAGAsPQMlO03es5//s3lyfe/8uWzjf6OWQFAmABAmABAmABAmABAmABAmABA2KXRJwCb7HzL5/zrWAFAmABAmABAmABAmABAmABAmABA2FbPMNl9S//e/3zhOf9/P02f/8VPxn4HrQAgTAAgTAAgTAAgTAAgTAAgTAAgzP0AYME5/6azAoAwAYAwAYAwAYAwAYAwAYAwAYAw+wDYaaPv639x8O/917ECgDABgDABgDABgDABgDABgDABgLDZ+wCu7u9t9e+hmefs9MlGz7mZZgUAYQIAYQIAYQIAYQIAYQIAYQIAYRfmzvkfnTx4pSfEdnnr7XcW3Sdwemv6vvv79+b93v588P0CRrMCgDABgDABgDABgDABgDABgDABgLDFnwvw+OHJ0m/BDps751/nyo7P+dexAoAwAYAwAYAwAYAwAYAwAYAwAYCwxfcB0Lbpz404iz/XwAoAwgQAwgQAwgQAwgQAwgQAwgQAwobvAzg6Ph59CmmHN25MHj+4djh5/J+/j1bb7ODa4fPyPgErAAgTAAgTAAgTAAgTAAgTAAgTAAi7tOlzaHbb9Q8/WvTfv//rL7P2MRzs+D4BKwAIEwAIEwAIEwAIEwAIEwAIEwAIG74PAKb8+NftyeOfvnt31j6D+/F9AlYAECYAECYAECYAECYAECYAECYAEDZ8H4DnAoxVvx/D9fg+ASsACBMACBMACBMACBMACBMACBMACFs7g7y6vzc5x3x08mDy9Y8fnrzEabEpDq4dzpqDj34uwNLur9knMPf6Lr1PwAoAwgQAwgQAwgQAwgQAwgQAwgQAwobfD4C2uXN05rECgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDD3A4AZ3rx8e7XNrAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgzP0AYIbHz+7OeflqtTpcjWQFAGECAGECAGECAGECAGECAGECAGGL7wM4Oj5e+i0YyP/vPD98/93k8c8+v/N86vjZ6ZMLc97fCgDCBADCBADCBADCBADCBADCBADC1s4Qr+7vTc4hP/7g/dWS/vjzaDXSzfcO0+e/6Xb9+v782++Tx+0DAF6aPwEgTAAgTAAgTAAgTAAgTAAgbPg+gNFz3LpN3yew7Z+PmzOvr30AwGL8CQBhAgBhAgBhAgBhAgBhAgBhs+4p/iL7BNZ5Y+/1We//9Rd3Zr3+q2+n78u+tNHn//TJv6tNtu2fj6czr+/c3/uvYwUAYQIAYQIAYQIAYQIAYQIAYQIAYYvOGF9kn8DcOS+rRefUS8+hd/3z8XTw9V3HCgDCBADCBADCBADCBADCBADCBADChs4gt2EOPPf33Jt+/qPn0Lv++Tjb8OtrBQBhAgBhAgBhAgBhAgBhAgBhAgBhl0afwAvMSWc9d2CuVzDH3fbzHyrw+RjKCgDCBADCBADCBADCBADCBADCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWr97/TtnuRjmmzDQAAAAASUVORK5CYII=",Wb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB1klEQVR4nGNgGOmAkRhFAkJ8//HJf3j3iZEmDhCAWrznaTGYv3nlOazqJhbtp9ghWC0/870RjBW0Zf/XL/AH09jEQDQIEwopki1X0JZFsQjdAehy5DiCCZvloCAPMZlDssMXdp9jyO9zJJhmcDpAAIvl8aVGYIPxWQpSQ64jmBgGGDBRI+jRASmhwMQwwIAJmYMrn9MSMMIYoOACBZtvOCJBUQJAngEVUIQKJyaGAQYs6ALoiRA9G645k4KhDltWRc6aJDmAXHD37EU4++ObZ2A6/xIDg5Ke1X980cDEQAVQFzEfp9y9S8fwZkcmGAPkSlCiITbosPlcRkMDjLVtnMCYGEcwkWQbAcvRATGOYELmYAsF9LIeG4BZvvl6NhinNViCMbojiAqBD2RGBbmFGQs2QagjwAUTciigZzVYaifG8mMnTxLvAGRHgNgwh4AcAbOE3BCiaqP03qVjcDauuL56ZB88BGJSCzGKZkbS3IvpMHyOIGQ5xQ7A5gh0ALLckyGZ4ectNgapbg7qhgAuRyAnOJDP387+BGZjcwQjA5UArnQCsgwkh88RdAEgR/xdywDG39rZ4M13Rno7Aj0kmOjpAFCwC6fygdnsar/oaTUqAIUELAoAwJ83V+yJE/kAAAAASUVORK5CYII=",$b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADP0lEQVR4nO3dP2gUQRiG8T0JYhVEO0llFRAsxEpstLOwE7QQrtBUFsGIrdgHhLQqyJWC3bViGokEVDAQBMF0WqloOqtYzyA3LDO7O3fP8+uG/LkjvHzfdzuzm6aRJEmSJEkUo6YyJ08tHw35+r9/HVb3N+nSsaHfgIZlAOAMANyoth7/+tuDmT8/ffmx6dLWxjZqRrACwBkAOAMAN+q756d6/I2Lz4P1+OGFYD3ZDGeAV+/vFv194+jrqRlh3mcCKwCcAYAzAHBLfff8uCfHUj06V6rnTxKvt/7kSrDe2tg+mueZwAoAZwDgDADc0tA9f95Mohlh3mcCKwCcAYAzAHCjoXt+7uf+tnsBXb+fcfTzte8dWAHgDACcAYAzAHAGAM4AwBkAuOReAO1aP22vwAoAZwDgDACcAYAzAHAGAM4AwLU+E9j1/fnqlxUAzgDAGQC4Udu9gPja9vWbs++np5tGM1NtZwStAHAGAM4AwBkAOAMAZwDgDABc9vMBcs8ELtq9gbHUcweHZgWAMwBwBgCu+HMCF83XD59aff+fH99nfn19L1yfPX9p0PsErABwBgDOAMA5A0Qe3XrR9Olgb2fQmcAKAGcA4AwAXHIGiHtQfH97fEaw9PP9a/ucv7K6mvV6+2/fVDUTWAHgDACcAYDDXQfou+fHzl2+WtVMYAWAMwBwBgCu9QxQ+rpA7v/xK20l0fOnn+9lPT/h6eN3WTNBaVYAOAMAZwDgsq8DLPpewaI/M8kKAGcA4AwAXPG9gLYzQd/XBVLn9mvr+Tu7u53+fisAnAGAMwBwnZ8HSM0EsdSMEM8EqZ5c+/35Q7MCwBkAOAMAV9X/sv/fs4lLi8/YpcT79aWl9v/j6wC31+4Ha88EKostAM4AwFU3A/Q9Yxz0PBMM3fNjVgA4AwBnAOBwM0DpmSBX3POvNXeC9d8vx4P1mc0TwdrrAMpiC4AzAHD4GaD0TND2DF/8Of/ns8OZ3196JrACwBkAOAMA5www8PmEuGfHr9f1TGAFgDMAcAYAzhmgcl3PBFYAOAMAZwDgnAHgM4EVAM4AwBkAOGcA2Exwem05WFsB4AwAnAGAcwaAnV9wL0ABWwCcAYD7B5UvSDcK4TLxAAAAAElFTkSuQmCC",t0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFY0lEQVR4nO3dsatWdRzA4feGRJOIbdHUJAgN4hQuujW0CTUIDunUcOmGa7QLwl1LCEfBzTW8i9wQLEiQIMgtJxN1a7K/oHOgw+Gc9/08z3o473nvq/fD7/L7vudsNgAAAAAAAAAAAAAAAAAAAMDa7C39Btbu1OmTbzdhr16+8X9kh72z9BsAliMAECYAECYAECYAECYAECYAELbze7xT9/F/+uubSde/f/fXzTY7PDiadL45gnWzAoAwAYAwAYAwAYAwAYAwAYAwAYCwvV3f55+6j3/5/O3B41dvnBs8fufm8BzAvcfXNmt+f2PnT50jMCewLCsACBMACBMACBMACBMACBMACBMACDux2fF9/rF98jFT99GXNnWff+rPt3/r4uDxw4OjwX9fcwLzsgKAMAGAMAGAMAGAMAGAMAGAMAGAsBP1fX7mNTZHYE5gWVYAECYAECYAECYAECYAECYAECYAELZX3+df+vv+cz8XYNs/n7Hre+7ANFYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAEHZi17/vz3bzXIF5WQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2OT7AYy5f3fe58cD/58VAIQJAIQJAIQJAIQJAIQJAIQJAITtzf1cgP1bFwfP/+zzc1PfAmFjcyaHB0eDx1+9fDP5d2CbWQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2OzPBRhz+fztRa9/9cbw/Qju3Jz3uQb3Hl9b9ee39Ocz9f0xzAoAwgQAwgQAwgQAwgQAwgQAwgQAwhafA2C7/fnLb7O+/usXzyedv/9k+PhHH3/ytvzcACsACBMACBMACBMACBMACBMACBMACDMHwKBvv/hxpz+hZ0+O03MCVgAQJgAQJgAQJgAQJgAQJgAQJgAQNnkOYGwf9PDgaHAfdf/WxVXfd37Xzf19/g/PnNks6enDB5POf7bjcwJWABAmABAmABAmABAmABAmABAmABDmfgA7btf3+cecvXBp8PjT+JyAFQCECQCECQCECQCECQCECQCECQCEzT4HsPb7BYydf/XGuVmvv3ZT9/nv//7VtPPvTvt8v//u50XnBNbOCgDCBADCBADCBADCBADCBADCBADCFr8fwNrnBJjX1H1+prECgDABgDABgDABgDABgDABgDABgLDF5wCWnhPY9fsFvH7xfNHr7/o+//GjR5ttZgUAYQIAYQIAYQIAYQIAYQIAYQIAYaufA5h7TmDM1DmCsTmBqfvkY68PQ6wAIEwAIEwAIEwAIEwAIEwAIEwAIGxwD53N5tTpk5PmCJb27MnxrK9/9sKlzTZ7+vDBrPcDuHL960lzLHOzAoAwAYAwAYAwAYAwAYAwAYAwAYAwcwDxOYZdnxOo7/OPsQKAMAGAMAGAMAGAMAGAMAGAMAGAsFXvUbL7cwJLOx7Z5/908+Xg8X/+eHfw+Ac331v1nIAVAIQJAIQJAIQJAIQJAIQJAIQJAISZA2DVcwJj+/RTXRn5Pv/fP7yZ9PprnxOwAoAwAYAwAYAwAYAwAYAwAYAwAYAwcwDMOiewdq9G9tnHfr5tnxOwAoAwAYAwAYAwAYAwAYAwAYAwAYAwcwAwwbbPCVgBQJgAQJgAQJgAQJgAQJgAQJgAQJg5AAjPCVgBQJgAQJgAQJgAQJgAQJgAQJgAQJg5ANjhOYH3r58cPG4FAGECAGECAGECAGECAGECAGECAGHmAGCL5wTGeC4A8J/8CQBhAgBhAgBhAgBhAgBhAgCbrn8BBttJJxxV77sAAAAASUVORK5CYII=",e0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQklEQVR4nGNgGGDAiEtCQIjvPyUGf3j3iZFsBwgI8f1/++wB2ZYvmD+Tobi6nShHsOCT/PjmGQOtAROtDF4yu5+oaGSilQOIdQQTLR1AjCOYaO0AZEdgcwgjvlxAbiJcv3kzTjn03MFICwdgA8dOnmSISS3EyJosxGg2cvekyPJzO7fjlGMh1pA1Z1LIsjzEZA5eeRZqGUQuYCFWYXypEdGGLuw+R30HLCTBUFIACy3TADHRxkJNwwY8DSwkI5pYiFWIy3BQ1FASOiy0LgeGRxo4h6copYsD+NlID/6Pv+ZQMQoOn2AQTuWDc9/O/gTmo9PI8gzmxDmUiThlUEORaFLlKXYAOkD2PSWAiVyN2IKerg6gFmAhRtHPW2xg+lnpDww2NjEwMKeCA46dPAlhqE1nIBnA9A5U55QBCyC2w0pXAAC+a5TLNL4sQgAAAABJRU5ErkJggg==",n0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAACtElEQVR4nO3cv0ocURiG8bMilqvoPXgBEsglhPSWgk32AkSsvIAUKSwlKCRCSsHCQlIL4oB4AalSbaWiW0WbTT0jrMjszHxznufXDbvr8c/Ld96dmTUlSZJENGh6gZXV4TSBPT5MGv8d17HQ9TegbhkAOAMAN2h6z78f/00kP398Lx3v7n8N3QmcAHAGAM4AwC22veDT3bjtJTWDEwDOAMAZALjWOwDNr6OD0vHWaGca6byAEwDOAMAZADg7ALwTOAHgDACcAYCzA8A7gRMAzgDAGQA4O0DPOkFV3Y7gBIAzAHAGAK71zwXkfk/g2fl5q+vV/dyBEwDOAMAZADg7QHBXRVE63hrtlI49D6Ba3ALgDABcuGsBG58+J7Lb3xetrucEgDMAcAYALlwHqDq9+ZJytvnhuNP1nQBwBgDOAMCF7wBd75G5cwLAGQA4AwAXvgNs722kPjn5dpv6xAkAZwDgDABc+A7Qtz21b5wAcAYAzgDAhe8Aud0PsBns2oYTAM4AwBkAuPAdINqemRsnAJwBgDMAcOE7QLT7AU4yuzbhBIAzAHAGAC58B2h6zz2tXGugnXdwAsAZADgDABe+A+R2P0A0TgA4AwBnAODCdwDa+/K2OQHgDACcAYBbpP+vXDonAJwBgDMAcOE6wPJSXuf+n15in8dwAsAZADgDABeuA6TL69Lh2mj4rpffH01mvr7u42+pvj59TKE5AeAMAJwBgIvXASreu2fntn7TnABwBgDOAMCF7wB15b6H1+UEgDMAcAYALvsOUPdaQO6cAHAGAM4AwBkAOAMAZwDgDABcuPMAz3+WZj4+3vs31+eP5/z1XvGeQEXmFgBnAOBa7wBXRTH7CeuHKSvFGz9vx5wAcAYAzgDADZpeYGV1OG16DZLHh8lc/2ZOADgDAGcAJEmSgP4D8kmnMKDRPzUAAAAASUVORK5CYII=",a0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEtElEQVR4nO3dMWocBxSA4VUILhWh3CEHEAEfIaR3aXBjHcAYVT6AixQpQ7AhCbg0uHBhXAdMBEYHSOVKlWUkVUka5wLJbDG7Ozvzf187rHa8Y/88M087qxUAAAAAAAAAsBQHq5k7Oj78PPU5MJ3rT7ez/zs8pS8mfXdgUgIAYQIAYQIAYQIAYQIAYQIAYQdzv89/dflhdyfDzv36y8+Dxx8/eTp43J7AMBMAhAkAhAkAhAkAhAkAhAkAhAkAhH25Wribj5dTnwLsLRMAhAkAhAkAhAkAhAkAhAkAhAkAhC1+D4Ble/Hsx8Hj908fDX6fxHX8uQImAAgTAAgTAAgTAAgTAAgTAAgTAAizB8Ci2RMYZgKAMAGAMAGAMAGAMAGAMAGAMAGAMHsApL2If5+ACQDCBADCBADCBADCBADCBADCBADC7AHAFvcE1pl6j8AEAGECAGECAGECAGECAGECAGECAGF7/7vMR8eHg/dZry4/DL7+5uPlpk+JHXr1+vWiP+/HT55OuidgAoAwAYAwAYAwAYAwAYAwAYAwAYAwewAwwrvz88Hj908fDR73fQDAZPwXAMIEAMIEAMIEAMIEAMIEAMI8F2CNk+++382VYC9dvH2zWjITAIQJAIQJAIQJAIQJAIQJAIQJAITZAxjp5fuHm7kSTOLet8/Tn7wJAMIEAMIEAMIEAMIEAMIEAMIEAMLsAYxUv4/MvJkAIEwAIEwAIEwAIEwAIEwAIEwAIMwewEgPzk42cyX4T7/9cOGT2SITAIQJAIQJAIQJAIQJAIQJAIQJAITZAxjJfWrmzAQAYQIAYQIAYQIAYQIAYQIAYQIAYfYARnr5/uFmrgRb4bkNw0wAECYAECYAECYAECYAECYAECYAEGYPYCT3mZkzEwCECQCECQCECQCECQCECQCECQCE2QMY6cHZyWauxEJ5bsJ+MwFAmABAmABAmABAmABAmABAmABAmD2A+H3udc818H0Hy2YCgDABgDABgDABgDABgDABgDABgDB7AFu+jw77zAQAYQIAYQIAYQIAYQIAYQIAYQIAYfYARvL78syZCQDCBADCBADCBADCBADCBADCBADC7AGscfH2zW6uBEzABABhAgBhAgBhAgBhAgBhAgBhAgBh9gDW+OqO7/3fZzf/PJ/6FGbNBABhAgBhAgBhAgBhAgBhAgBhAgBh9gDW+f2PwcNfnx6utunq2e2o95/69WOte//V3a2+/eKZACBMACBMACBMACBMACBMACBMACDMHsBI277Pvu/qf/65MwFAmABAmABAmABAmABAmABAmABAmD2AmXMfnjFMABAmABAmABAmABAmABAmABAmABBmD2Dmpn4uAPNmAoAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAw3wewxt9/3hn1AV+e/bXXP3/fz2+tu+NeXmcCgDABgDABgDABgDABgDABgDABgLDF7wG8Oz8f9wO++WlTp8I2jL2+cSYACBMACBMACBMACBMACBMACBMACDtYzdzR8eHnqc8B/s/1p9u9/jdmAoAwAYAwAYAwAYAwAYAwAYAwAQAAAAAAAAAAgNX8/QsQZqggL/0wUQAAAABJRU5ErkJggg==",l0="/assets/p04-auD5xrC0.webp",i0="/assets/style-BC5sDhYl.css",s0="/assets/3DReconstruction-CLiPht2l.pdf",c0="/assets/Drone-CnhOO8FH.pdf",u0="/assets/FASTAIMOVIE-CDebCQNv.pdf",o0="/assets/VehicleIdentification-BZ6cG__y.pdf",r0="/assets/WebHarvestRAG-CdmwNVLP.pdf",d0="/assets/YouDontNeedRAG-Ccxy0SNZ.pdf",f0="/assets/pingpong-BOCMlQx_.pdf",h0="/assets/3D-Bp4UFUal.mp4",A0="/assets/DroneDemo-jcg3Gykv.mp4",m0="/assets/FASTAIMOVIE-owzivxfR.mp4",g0="/assets/dilab-Cmjk3Fml.mp4",p0="/assets/innocoso-DFjwe0Nb.mp4",v0="/assets/pingpong-6BuY0ot1.mp4",b0=Object.assign({"../../../content/html/en/3d-reconstruction.html":yv,"../../../content/html/en/drone.html":wv,"../../../content/html/en/fast-ai-movie.html":Ev,"../../../content/html/en/index.html":Tv,"../../../content/html/en/pingpong-vision.html":Cv,"../../../content/html/en/vehicle-identification.html":Dv,"../../../content/html/en/web-harvest-rag.html":Sv,"../../../content/html/en/you-dont-need-rag.html":Mv,"../../../content/html/zh/3d-reconstruction.html":Bv,"../../../content/html/zh/drone.html":_v,"../../../content/html/zh/fast-ai-movie.html":zv,"../../../content/html/zh/index.html":Ov,"../../../content/html/zh/pingpong-vision.html":Rv,"../../../content/html/zh/vehicle-identification.html":xv,"../../../content/html/zh/web-harvest-rag.html":Nv,"../../../content/html/zh/you-dont-need-rag.html":Iv}),y0=Object.assign({"../../../content/html/assets/3DReconstruction/p03.webp":jv,"../../../content/html/assets/3DReconstruction/p04.webp":Gv,"../../../content/html/assets/3DReconstruction/p05.webp":Qv,"../../../content/html/assets/3DReconstruction/p07.webp":Yv,"../../../content/html/assets/3DReconstruction/p08.webp":Lv,"../../../content/html/assets/3DReconstruction/p11.webp":Hv,"../../../content/html/assets/3DReconstruction/p14.webp":Uv,"../../../content/html/assets/3DReconstruction/p17.webp":Vv,"../../../content/html/assets/3DReconstruction/p19.webp":Xv,"../../../content/html/assets/3DReconstruction/p20.webp":kv,"../../../content/html/assets/3DReconstruction/p22.webp":qv,"../../../content/html/assets/3DReconstruction/p23.webp":Jv,"../../../content/html/assets/3DReconstruction/p24.webp":Kv,"../../../content/html/assets/3DReconstruction/p25.webp":Zv,"../../../content/html/assets/3DReconstruction/p27.webp":Pv,"../../../content/html/assets/3DReconstruction/p28.webp":Fv,"../../../content/html/assets/3DReconstruction/p29.webp":Wv,"../../../content/html/assets/3DReconstruction/p30.webp":$v,"../../../content/html/assets/3DReconstruction/p31.webp":tb,"../../../content/html/assets/3DReconstruction/p33.webp":eb,"../../../content/html/assets/3DReconstruction/p34.webp":nb,"../../../content/html/assets/3DReconstruction/p35.webp":ab,"../../../content/html/assets/3DReconstruction/p36.webp":lb,"../../../content/html/assets/Drone/p03.webp":ib,"../../../content/html/assets/Drone/p05.webp":sb,"../../../content/html/assets/Drone/p09.webp":cb,"../../../content/html/assets/Drone/p12.webp":ub,"../../../content/html/assets/Drone/p13.webp":ob,"../../../content/html/assets/Drone/p15.webp":rb,"../../../content/html/assets/Drone/p16.webp":db,"../../../content/html/assets/FASTAIMOVIE/p02.webp":fb,"../../../content/html/assets/FASTAIMOVIE/p03.webp":hb,"../../../content/html/assets/FASTAIMOVIE/p05.webp":Ab,"../../../content/html/assets/FASTAIMOVIE/p06.webp":mb,"../../../content/html/assets/FASTAIMOVIE/p07.webp":gb,"../../../content/html/assets/FASTAIMOVIE/p08.webp":pb,"../../../content/html/assets/FASTAIMOVIE/p09.webp":vb,"../../../content/html/assets/VehicleIdentification/p02.webp":bb,"../../../content/html/assets/VehicleIdentification/p03.webp":yb,"../../../content/html/assets/VehicleIdentification/p04.webp":wb,"../../../content/html/assets/VehicleIdentification/p05.webp":Eb,"../../../content/html/assets/VehicleIdentification/p06.webp":Tb,"../../../content/html/assets/VehicleIdentification/p07.webp":Cb,"../../../content/html/assets/VehicleIdentification/p08.webp":Db,"../../../content/html/assets/VehicleIdentification/p09.webp":Sb,"../../../content/html/assets/VehicleIdentification/p10.webp":Mb,"../../../content/html/assets/VehicleIdentification/p12.webp":Bb,"../../../content/html/assets/VehicleIdentification/p15.webp":_b,"../../../content/html/assets/VehicleIdentification/p16.webp":zb,"../../../content/html/assets/VehicleIdentification/p17.webp":Ob,"../../../content/html/assets/VehicleIdentification/p18.webp":Rb,"../../../content/html/assets/VehicleIdentification/p21.webp":xb,"../../../content/html/assets/VehicleIdentification/p25.webp":Nb,"../../../content/html/assets/WebHarvestRAG/p06.webp":Ib,"../../../content/html/assets/YouDontNeedRAG/p04.webp":jb,"../../../content/html/assets/icons/3d-reconstruction.png":Gb,"../../../content/html/assets/icons/3d-reconstruction@4x.png":Qb,"../../../content/html/assets/icons/3d-reconstruction@8x.png":Yb,"../../../content/html/assets/icons/drone.png":Lb,"../../../content/html/assets/icons/drone@4x.png":Hb,"../../../content/html/assets/icons/drone@8x.png":Ub,"../../../content/html/assets/icons/fast-ai-movie.png":Vb,"../../../content/html/assets/icons/fast-ai-movie@4x.png":Xb,"../../../content/html/assets/icons/fast-ai-movie@8x.png":kb,"../../../content/html/assets/icons/pingpong-vision.png":qb,"../../../content/html/assets/icons/pingpong-vision@4x.png":Jb,"../../../content/html/assets/icons/pingpong-vision@8x.png":Kb,"../../../content/html/assets/icons/vehicle-identification.png":Zb,"../../../content/html/assets/icons/vehicle-identification@4x.png":Pb,"../../../content/html/assets/icons/vehicle-identification@8x.png":Fb,"../../../content/html/assets/icons/web-harvest-rag.png":Wb,"../../../content/html/assets/icons/web-harvest-rag@4x.png":$b,"../../../content/html/assets/icons/web-harvest-rag@8x.png":t0,"../../../content/html/assets/icons/you-dont-need-rag.png":e0,"../../../content/html/assets/icons/you-dont-need-rag@4x.png":n0,"../../../content/html/assets/icons/you-dont-need-rag@8x.png":a0,"../../../content/html/assets/pingpong/p04.webp":l0,"../../../content/html/assets/style.css":i0,"../../../content/pdf/3DReconstruction.pdf":s0,"../../../content/pdf/Drone.pdf":c0,"../../../content/pdf/FASTAIMOVIE.pdf":u0,"../../../content/pdf/VehicleIdentification.pdf":o0,"../../../content/pdf/WebHarvestRAG.pdf":r0,"../../../content/pdf/YouDontNeedRAG.pdf":d0,"../../../content/pdf/pingpong.pdf":f0,"../../../content/videos/3D.mp4":h0,"../../../content/videos/DroneDemo.mp4":A0,"../../../content/videos/FASTAIMOVIE.mp4":m0,"../../../content/videos/dilab.mp4":g0,"../../../content/videos/innocoso.mp4":p0,"../../../content/videos/pingpong.mp4":v0}),pi=[{id:"pingpong-vision",document:"pingpong-vision",title:"PingPong Vision",zh:"PingPong Vision",category:"AI / INDUSTRIAL SYSTEMS",tags:["AI OCR","FastAPI","TimescaleDB"],thumbnail:"html/assets/pingpong/p04.webp",icon:"html/assets/icons/pingpong-vision@4x.png",pdf:"pdf/pingpong.pdf"},{id:"web-harvest-rag",document:"web-harvest-rag",title:"Web Harvest RAG",zh:"Web Harvest RAG",category:"AI / RETRIEVAL",tags:["RAG","BM25","Vector search"],thumbnail:"html/assets/WebHarvestRAG/p06.webp",icon:"html/assets/icons/web-harvest-rag@4x.png",pdf:"pdf/WebHarvestRAG.pdf"},{id:"you-dont-need-rag",document:"you-dont-need-rag",title:"You Don’t Need RAG",zh:"You Don’t Need RAG",category:"AI / KNOWLEDGE TOOLS",tags:["Web scraping","RAG","Data preparation"],thumbnail:"html/assets/YouDontNeedRAG/p04.webp",icon:"html/assets/icons/you-dont-need-rag@4x.png",pdf:"pdf/YouDontNeedRAG.pdf"},{id:"fast-ai-movie",document:"fast-ai-movie",title:"FAST AI Movie Web",zh:"FAST AI 视频编辑平台",category:"PRODUCT ENGINEERING",tags:["AI video","Editing workflows","Web"],thumbnail:"html/assets/FASTAIMOVIE/p02.webp",icon:"html/assets/icons/fast-ai-movie@4x.png",pdf:"pdf/FASTAIMOVIE.pdf"},{id:"vehicle-identification",document:"vehicle-identification",title:"Vehicle Noise Classification",zh:"道路噪声车辆分类",category:"MACHINE LEARNING",tags:["Acoustics","KNN","Neural networks"],thumbnail:"html/assets/VehicleIdentification/p02.webp",icon:"html/assets/icons/vehicle-identification@4x.png",pdf:"pdf/VehicleIdentification.pdf"},{id:"3d-reconstruction",document:"3d-reconstruction",title:"Stereo 3D Reconstruction",zh:"双目视觉三维重建",category:"COMPUTER VISION",tags:["Stereo vision","BM / SGBM","Point clouds"],thumbnail:"html/assets/3DReconstruction/p03.webp",icon:"html/assets/icons/3d-reconstruction@4x.png",pdf:"pdf/3DReconstruction.pdf"},{id:"drone-simulator",document:"drone",title:"Drone Simulator",zh:"无人机仿真与控制",category:"SYSTEMS / ROBOTICS",tags:["seL4 / TrentOS","PX4","C++"],thumbnail:"html/assets/Drone/p03.webp",icon:"html/assets/icons/drone@4x.png",pdf:"pdf/Drone.pdf"}];function Js(u){return y0[`../../../content/${u.replace(/^\//,"")}`]}function OA(u,d){return b0[`../../../content/html/${d}/${u.document}.html`]??""}function w0(u){if(u.startsWith("../assets/"))return Js(`html/assets/${u.slice(10)}`);if(u.startsWith("../../videos/"))return Js(`videos/${u.slice(12)}`)}function E0(u,d){var o;return(((o=OA(u,d).match(/<main\b[^>]*>([\s\S]*?)<\/main>/i))==null?void 0:o[1])??"").replace(/<nav\b[^>]*class=["']topbar["'][^>]*>[\s\S]*?<\/nav>/i,"").replace(/\bsrc=(["'])([^"']+)\1/gi,(p,D,z)=>{const C=w0(z);return C?`src=${D}${C}${D}`:/^(\.\.\/|\/)/.test(z)?"":p})}function RA(u,d){var r;return((r=OA(u,d).match(/<p\b[^>]*class=["']lead["'][^>]*>([\s\S]*?)<\/p>/i))==null?void 0:r[1].replace(/<[^>]*>/g,"").trim())??""}function T0({item:u,language:d,onSelect:r}){const o=_a({id:`project-card:${u.id}`,names:{en:u.title,zh:u.zh},scope:{window:"projects",panel:"collection"},capabilities:["highlight","guideTo"],projectId:u.id,completion:{window:`project:${u.id}`,panel:"detail"}});return h.jsxs("button",{ref:o,className:"project-file","data-agent-id":`project-card:${u.id}`,onClick:()=>r(u.id),children:[h.jsx("img",{src:Js(u.icon),alt:""}),h.jsx("span",{children:d==="en"?u.title:u.zh}),h.jsx("small",{children:d==="en"?"HTML document":"HTML 文档"}),h.jsx("span",{className:"project-file-tooltip",role:"tooltip",children:RA(u,d)})]})}function C0({language:u,visible:d,projectId:r,onSelect:o}){const p=r,D=o,z=Q.useRef(null);Q.useEffect(()=>{var V;d||(V=z.current)==null||V.querySelectorAll("video").forEach(R=>R.pause())},[d]);const C=pi.find(V=>V.id===p),N=_a({id:`project:${(C==null?void 0:C.id)??"inactive"}`,names:{en:(C==null?void 0:C.title)??"Project detail",zh:(C==null?void 0:C.zh)??"项目详情"},scope:{window:`project:${(C==null?void 0:C.id)??"inactive"}`,panel:"detail"},capabilities:["highlight","guideTo"],...C?{projectId:C.id}:{}});return Q.useEffect(()=>{var R;const V=(R=z.current)==null?void 0:R.closest(".content-scroll");V&&(V.scrollTop=0)},[p,u]),C?h.jsxs("div",{ref:N,className:"project-detail","data-agent-id":`project:${C.id}`,children:[h.jsxs("div",{className:"project-detail-nav",children:[h.jsxs("button",{onClick:()=>D(null),children:["← ",u==="en"?"All projects":"全部项目"]}),h.jsx("a",{href:Js(C.pdf),target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]}),h.jsx("span",{className:"content-kicker",children:C.category}),h.jsx("h1",{children:u==="en"?C.title:C.zh}),h.jsx("p",{className:"project-summary",children:RA(C,u)}),h.jsx(yl,{values:C.tags,targetPrefix:`project:${C.id}:tag`,scope:{window:`project:${C.id}`,panel:"detail"},projectId:C.id}),h.jsx("article",{className:"html-content markdown-content",dangerouslySetInnerHTML:{__html:E0(C,u)}}),h.jsxs("button",{className:"content-back",onClick:()=>D(null),children:["← ",u==="en"?"Back to projects":"返回项目列表"]})]}):h.jsxs("div",{ref:z,className:"projects-content",children:[h.jsxs("header",{className:"collection-header",children:[h.jsxs("span",{className:"content-kicker",children:["PROJECTS / ",String(pi.length).padStart(2,"0")," ITEMS"]}),h.jsx("h1",{children:u==="en"?"Projects directory":"项目目录"}),h.jsx("p",{children:u==="en"?"Open an HTML document to view a project.":"打开一个 HTML 文档以查看项目详情。"})]}),h.jsx("div",{className:"project-directory",role:"list",children:pi.map((V,R)=>h.jsx(T0,{item:V,index:R,language:u,onSelect:D},V.id))})]})}const D0={en:`README.txt
==========

xiaohengOS v1.0 — the personal computer of Xiaoheng Hu


HELLO
  I'm Xiaoheng Hu (胡晓亨), a software engineer in Munich working on
  full-stack products, AI/LLM applications and developer platforms.
  This little computer is my portfolio.


WHAT'S ON THIS DESKTOP
  Projects/        7 projects with write-ups, figures and demo videos
  README.txt       this file: what this site is, plus my profile below
  Experience.exe   where I've worked and what I built there
  Contact          email and LinkedIn


CRT.AGENT
  The small robot living in the screen is CRT.AGENT, a guide for this
  portfolio. Ask it anything in the terminal at the bottom
  ("ask CRT.AGENT…"): my projects, skills, or the public source code of
  this site. It answers in your language and can point at things on the
  page, but it never clicks, scrolls, navigates or types for you.

  Privacy: it only sees a short summary of this visit (which window is
  open, what you hovered or clicked). Never mouse positions or text you
  type elsewhere, and nothing is kept after the visit.


TIPS
  · Click a desktop icon to open it. Windows can be minimized,
    maximized and closed like on any desktop.
  · ▦ Wallpaper in the taskbar picks a random wallpaper.
  · EN / 中 switches the language. ⏻ turns the computer off.


HOW IT'S BUILT
  Frontend   React · TypeScript · Vite, pixel-art desk and CRT monitor
  Agent      Python · FastAPI · LangGraph, retrieval over the portfolio
             content and this site's public GitHub repository
  Source     github.com/huxiaoheng44/xiaoheng-web-v3
`,zh:`README.txt
==========

xiaohengOS v1.0 —— 胡晓亨的个人电脑


你好
  我是胡晓亨（Xiaoheng Hu），在慕尼黑工作的软件工程师，做过全栈产品、
  AI/LLM 应用和开发者平台。这台小电脑就是我的作品集。


桌面上有什么
  项目/            7 个项目，附说明、图表和演示视频
  README.txt       就是这个文件：介绍这个网站，下面是我的个人资料
  经历.exe         我的工作经历和做过的事情
  联系             邮箱和 LinkedIn


CRT.AGENT
  住在屏幕里的小机器人叫 CRT.AGENT，是这个作品集的向导。
  在底部的终端（"ask CRT.AGENT…"）里问它任何问题都可以：
  我的项目、技能，或者这个网站公开的源代码。
  它会用你的语言回答，也能在页面上指给你看，
  但它从不替你点击、滚动、跳转或输入。

  隐私：它只能看到这次访问的简短摘要（打开了哪个窗口、
  悬停或点击了什么），不会看到鼠标坐标或你在别处输入的文字，
  离开后也不会保留任何记录。


小提示
  · 点击桌面图标即可打开；窗口可以像普通桌面一样最小化、最大化和关闭。
  · 任务栏里的 ▦ 壁纸 按钮会随机换一张壁纸。
  · EN / 中 切换语言，⏻ 关闭电脑。


技术实现
  前端      React · TypeScript · Vite，像素风书桌与 CRT 显示器
  Agent     Python · FastAPI · LangGraph，检索作品集内容和
            本网站在 GitHub 上的公开仓库
  源码      github.com/huxiaoheng44/xiaoheng-web-v3
`};function S0({language:u}){return h.jsxs(h.Fragment,{children:[h.jsx("pre",{className:"readme-file",children:D0[u]}),h.jsxs("div",{className:"readme-divider","aria-hidden":"true",children:["── ",u==="en"?"PROFILE":"个人资料"," ──"]})]})}function M0({language:u,now:d}){const[r,o]=Q.useState(()=>navigator.onLine),[p,D]=Q.useState(null);Q.useEffect(()=>{const V=()=>o(navigator.onLine);return window.addEventListener("online",V),window.addEventListener("offline",V),()=>{window.removeEventListener("online",V),window.removeEventListener("offline",V)}},[]),Q.useEffect(()=>{var nt;let V=!0,R;const E=()=>{V&&R&&D({level:R.level,charging:R.charging})},_=navigator;return(nt=_.getBattery)==null||nt.call(_).then(K=>{V&&(R=K,E(),K.addEventListener("levelchange",E),K.addEventListener("chargingchange",E))}),()=>{V=!1,R&&(R.removeEventListener("levelchange",E),R.removeEventListener("chargingchange",E))}},[]);const z=u==="zh"?"zh-CN":void 0,C=d.toLocaleTimeString(z,{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),N=p?`${Math.round(p.level*100)}%${p.charging?" ⚡":""}`:"--";return h.jsxs("div",{className:"system-status","aria-label":u==="zh"?"系统状态":"System status",children:[h.jsxs("span",{title:r?u==="zh"?"网络已连接":"Network connected":u==="zh"?"网络未连接":"Network offline",children:["⌁ ",r?u==="zh"?"网络":"NET":u==="zh"?"离线":"OFF"]}),h.jsxs("span",{title:u==="zh"?"电池状态":"Battery status",children:["▱ ",N]}),h.jsx("time",{dateTime:d.toISOString(),title:Intl.DateTimeFormat().resolvedOptions().timeZone,children:C})]})}function B0({language:u,now:d}){const r=Ks(),[o,p]=Q.useState(""),D=z=>{z.preventDefault(),o.trim()&&(r.start(o.trim()),p(""))};return h.jsxs("footer",{className:"crt-agent-terminal os-terminal","data-agent-ui":!0,children:[h.jsx("label",{htmlFor:"ghost-command",className:"terminal-user",children:"xiaoheng@portfolio:~$"}),h.jsx("form",{onSubmit:D,children:h.jsx("input",{id:"ghost-command","aria-label":"Ask CRT.AGENT",placeholder:"ask CRT.AGENT…",value:o,maxLength:4e3,autoComplete:"off",onChange:z=>p(z.target.value)})}),h.jsx(M0,{language:u,now:d}),h.jsx("span",{className:"sr-only",children:u==="zh"?"回车发送，悬停 CRT.AGENT 查看帮助":"Enter to send. Hover CRT.AGENT for help."})]})}function _0(u){const d=Q.useRef(null),[r,o]=Q.useState(!1);return Q.useEffect(()=>{const p=d.current,D=p==null?void 0:p.querySelector(".monitor-screen");if(!p||!D)return;const z=()=>matchMedia("(min-width: 701px)").matches,C=()=>{if(!u||!z()){p.style.transform="translate3d(0px,0px,0) scale(1)";return}const R=new DOMMatrix(getComputedStyle(p).transform),E=p.getBoundingClientRect(),_=D.getBoundingClientRect(),nt=R.a||1,K=E.left-R.e,pt=E.top-R.f,at=(_.left-E.left)/nt,vt=(_.top-E.top)/nt,F=_.width/nt,Ft=_.height/nt,jt=Math.max(1,Math.min((innerWidth-180)/F,(innerHeight-40)/Ft,2.4)),Kt=(innerWidth-F*jt)/2-K-at*jt,bt=(innerHeight-Ft*jt)/2-pt-vt*jt;p.style.transform=`translate3d(${Kt}px,${bt}px,0) scale(${jt})`},N=()=>{o(u&&z()),C()};N();const V=new ResizeObserver(N);return V.observe(p),window.addEventListener("resize",N),()=>{V.disconnect(),window.removeEventListener("resize",N)}},[u]),{stageRef:d,focused:r}}const Io=[1,2,3,4,5,6].map(u=>`/assets/wallpapers/${u}.webp`),CA="xiaohengos.wallpaper";function z0(){const[u,d]=Q.useState(()=>{try{const o=Number(localStorage.getItem(CA));return Number.isInteger(o)&&o>=0&&o<Io.length?o:0}catch{return 0}});Q.useEffect(()=>{try{localStorage.setItem(CA,String(u))}catch{}},[u]);const r=()=>d(o=>(o+1)%Io.length);return{index:u,src:Io[u],next:r}}function O0({id:u}){return h.jsx("img",{"aria-hidden":"true",className:"desktop-icon",src:`/assets/desktop-icons/${u}.png`,alt:"",width:36,height:36})}function jo(u,d){if(u.startsWith("project:")){const r=pi.find(o=>o.id===u.slice(8));return(d==="zh"?r==null?void 0:r.zh:r==null?void 0:r.title)||u}return SA[u][d]}function R0({id:u,language:d,active:r,dispatch:o}){const p=_a({id:`folder:${u}`,names:Xp[u],scope:{},capabilities:["highlight","guideTo"],completion:u==="projects"?{window:"projects",panel:"collection"}:{window:u,panel:""}});return h.jsxs("button",{ref:p,"data-guide":u,"data-agent-id":`folder:${u}`,className:`folder ${r===u?"selected":""}`,onClick:()=>o({type:"open",id:u}),children:[h.jsx(O0,{id:u}),h.jsx("span",{children:SA[u][d]})]})}function x0({language:u}){const d=_a({id:"experience:timeline",names:{en:"Work experience",zh:"工作经历"},scope:{window:"experience"},capabilities:["highlight","guideTo"]});return h.jsxs("div",{ref:d,className:"standalone-experience","data-agent-id":"experience:timeline",children:[h.jsx("h1",{children:u==="en"?"Experience":"工作经历"}),h.jsx(zA,{language:u})]})}function N0({language:u,active:d,dispatch:r}){return h.jsx("nav",{className:"desktop-folders","aria-label":u==="en"?"Desktop folders":"桌面文件夹",children:Vp.map(o=>h.jsx(R0,{id:o,language:u,active:d,dispatch:r},o))})}function I0({window:u,language:d,dispatch:r,index:o,active:p}){const D=wl(),z=jo(u.id,d),C=u.id.startsWith("project:")?u.id.slice(8):void 0;return h.jsxs("section",{hidden:u.minimized,"data-window-id":u.id,role:"region","aria-label":z,className:`desktop-window ${u.maximized?"maximized":""} ${p?"active":""}`,style:{zIndex:o+1,"--offset":`${o%4*10}px`},onPointerDown:()=>{p||r({type:"open",id:u.id})},onFocusCapture:()=>{p||r({type:"open",id:u.id})},children:[h.jsxs("header",{className:"window-title",children:[h.jsx("span",{"aria-hidden":"true",children:"▣"}),h.jsxs("span",{children:["/",z]}),h.jsx("div",{className:"window-controls",children:["minimize","maximize","close"].map((N,V)=>h.jsx("button",{"data-guide":"control","aria-label":d==="en"?`${N} ${z}`:`${["最小化","最大化","关闭"][V]}${z}`,onClick:()=>r({type:N,id:u.id}),children:["−",u.maximized?"▣":"□","×"][V]},N))})]}),h.jsxs("div",{className:"window-toolbar",children:[h.jsxs("span",{children:[d==="en"?"Directory":"目录"," / ",z]}),h.jsx("span",{children:C?"PROJECT":u.id==="projects"?`${String(pi.length).padStart(2,"0")} PROJECTS`:u.id==="experience"?"04 ROLES":u.id==="about"?"PROFILE":u.id==="doom"?"SHAREWARE · 1993":"CONNECT"})]}),h.jsxs("div",{className:"content-scroll",tabIndex:0,"aria-label":d==="en"?`${z} content`:`${z}内容`,children:[u.id==="about"&&h.jsxs(h.Fragment,{children:[h.jsx(S0,{language:d}),h.jsx(bv,{language:d})]}),(u.id==="projects"||C)&&h.jsx(C0,{language:d,visible:!u.minimized&&p,projectId:C,onSelect:N=>D.navigate(N?`project:${N}`:"projects")}),u.id==="experience"&&h.jsx(x0,{language:d}),u.id==="contact"&&h.jsx(vv,{language:d}),u.id==="doom"&&h.jsx("iframe",{className:"doom-frame",src:"/apps/doom/index.html",title:"DOOM",sandbox:"allow-scripts",allow:"autoplay"})]}),h.jsxs("footer",{className:"window-footer",children:[h.jsx("span",{children:u.id==="doom"?d==="en"?"Click the game first · Arrows move · Ctrl fire · Space open · Esc menu":"先点一下画面 · 方向键移动 · Ctrl 开火 · 空格开门 · Esc 菜单":d==="en"?"Scroll to explore · Made with curiosity.":"滚动查看更多 · 保持好奇。"}),h.jsx("span",{children:"↕"})]})]})}function j0({language:u,setLanguage:d,active:r,onEnter:o,onShutdown:p}){const{state:D,active:z,dispatch:C,reset:N}=wl(),[V,R]=Q.useState(new Date),E=z0();return Q.useEffect(()=>{const _=setInterval(()=>R(new Date),1e3);return()=>clearInterval(_)},[]),h.jsxs("div",{className:"monitor-screen","data-booting":!r,children:[h.jsxs("div",{className:"os-shell",inert:!r,children:[h.jsxs("header",{className:"os-header",children:[h.jsxs("span",{className:"os-brand",children:[h.jsx("b",{children:"▣"})," xiaohengOS ",h.jsx("small",{children:"v1.0"})]}),h.jsxs("span",{children:[h.jsx("button",{className:"language-toggle","data-guide":"language","aria-label":u==="en"?"Switch to Chinese":"切换为英文",onClick:()=>d(u==="en"?"zh":"en"),children:u==="en"?"EN / 中":"中 / EN"}),h.jsx("button",{className:"power-control","aria-label":u==="en"?"Shut down xiaohengOS":"关闭 xiaohengOS",onClick:()=>{N(),p()},children:"⏻"})]})]}),h.jsxs("div",{className:"desktop-area",children:[h.jsx("div",{className:"wallpaper has-image","aria-hidden":"true",children:h.jsx("img",{className:"wallpaper-image",src:E.src,alt:""},E.src)}),h.jsx("button",{className:"wallpaper-next","data-guide":"wallpaper","data-hint":u==="en"?"Next wallpaper":"切换壁纸","aria-label":u==="en"?"Next wallpaper":"切换壁纸",onClick:E.next,children:h.jsx("svg",{viewBox:"0 0 22 22",width:"22",height:"22","aria-hidden":"true",shapeRendering:"crispEdges",children:h.jsx("path",{d:"M2 8h9V3h2v2h2v2h2v2h2v4h-2v2h-2v2h-2v2h-2v-5H2z",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})})}),h.jsx(N0,{language:u,active:z,dispatch:C}),h.jsx("div",{className:"window-layer",children:D.windows.map((_,nt)=>h.jsx(I0,{window:_,index:nt,active:z===_.id,language:u,dispatch:C},_.id))})]}),h.jsxs("div",{className:"task-tray",children:[h.jsxs("button",{className:"show-desktop",disabled:!D.windows.length,"aria-label":u==="en"?"Show desktop":"显示桌面",onClick:()=>C({type:"showDesktop"}),children:["▤ ",z?u==="en"?"Desktop":"桌面":D.windows.length?u==="en"?"Restore":"恢复":u==="en"?"Desktop":"桌面"]}),D.windows.map(_=>h.jsxs("button",{"aria-label":`Restore ${jo(_.id,u)}`,"aria-pressed":z===_.id,onClick:()=>C({type:"open",id:_.id}),children:["▣ ",jo(_.id,u)]},_.id))]}),h.jsx(B0,{language:u,now:V})]}),!r&&h.jsxs("div",{className:"boot-overlay",role:"dialog","aria-label":u==="en"?"Start CRT.AGENT":"启动 CRT.AGENT",children:[h.jsxs("div",{className:"boot-center",children:[h.jsx("div",{className:"startup-agent","aria-hidden":"true",children:h.jsx("span",{className:"crt-agent-sprite"})}),h.jsx("button",{className:"boot-skip","aria-label":u==="en"?"Power on":"开机",title:u==="en"?"Power on":"开机",onClick:o,children:h.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22","aria-hidden":"true",children:[h.jsx("path",{d:"M12 3v8",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"}),h.jsx("path",{d:"M7.2 6.4a7.5 7.5 0 1 0 9.6 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"})]})})]}),h.jsxs("small",{className:"boot-copyright",children:["© 2026 ",u==="en"?"Xiaoheng Hu":"胡晓亨"]})]})]})}function G0(){const[u,d]=Q.useState("en"),[r,o]=Q.useState(!1),{stageRef:p,focused:D}=_0(r);return Q.useEffect(()=>{document.documentElement.lang=u==="en"?"en":"zh-CN"},[u]),h.jsx(Jp,{language:u,children:h.jsx(iv,{language:u,children:h.jsxs("main",{className:`portfolio-scene ${D?"screen-focused":""}`,children:[h.jsxs("header",{className:"page-header",children:[h.jsxs("span",{children:["XH",h.jsx("span",{className:"tiny-square",children:"■"})]}),h.jsx("span",{children:"PERSONAL SPACE / 001"})]}),h.jsxs("div",{className:"stage",ref:p,children:[h.jsx("div",{className:"desk-surface"}),h.jsx("img",{className:"desk-object desk-prop desk-art",src:"/assets/desk/desk.png",alt:""}),h.jsx("img",{className:"desk-object desk-prop tray-prop",src:"/assets/desk/paper-tray.png",alt:""}),h.jsx("img",{className:"desk-object desk-prop sheet-prop",src:"/assets/desk/paper-sheet.png",alt:""}),h.jsx("img",{className:"desk-object desk-prop stack-prop",src:"/assets/desk/paper-stack.png",alt:""}),h.jsx("img",{className:"desk-object desk-prop binders-prop",src:"/assets/desk/binders.png",alt:""}),h.jsx("img",{className:"desk-object desk-prop folder-prop",src:"/assets/desk/file-folder.png",alt:""}),h.jsx("img",{className:"desk-object desk-prop envelope-prop",src:"/assets/desk/document-envelope.png",alt:""}),h.jsxs("div",{className:"monitor-object",children:[h.jsx("img",{className:"monitor-art",src:"/assets/monitor-v2.png",alt:""}),h.jsx(j0,{language:u,setLanguage:d,active:r,onEnter:()=>o(!0),onShutdown:()=>o(!1)})]}),h.jsx("img",{className:"desk-object keyboard-object",src:"/assets/keyboard.png",alt:""}),h.jsx("img",{className:"desk-object mouse-object",src:"/assets/mouse-v2.png",alt:""}),h.jsx("img",{className:"desk-object mug-object",src:"/assets/mug.png",alt:""})]}),h.jsxs("div",{className:"scene-caption",children:[h.jsx("span",{children:"BUILT WITH CURIOSITY."}),h.jsx("span",{children:u==="en"?"TAKE YOUR TIME. LOOK AROUND.":"慢慢看，随意逛。"})]}),r&&h.jsx(hv,{language:u,launchFromCenter:!0})]})})})}Up.createRoot(document.getElementById("root")).render(h.jsx(Np.StrictMode,{children:h.jsx(G0,{})}));
