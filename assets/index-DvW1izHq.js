var Ip=Object.defineProperty;var Gp=(c,d,r)=>d in c?Ip(c,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[d]=r;var Zt=(c,d,r)=>Gp(c,typeof d!="symbol"?d+"":d,r);(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))u(A);new MutationObserver(A=>{for(const E of A)if(E.type==="childList")for(const B of E.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&u(B)}).observe(document,{childList:!0,subtree:!0});function r(A){const E={};return A.integrity&&(E.integrity=A.integrity),A.referrerPolicy&&(E.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?E.credentials="include":A.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function u(A){if(A.ep)return;A.ep=!0;const E=r(A);fetch(A.href,E)}})();function _A(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var jo={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AA;function Lp(){if(AA)return Bi;AA=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function r(u,A,E){var B=null;if(E!==void 0&&(B=""+E),A.key!==void 0&&(B=""+A.key),"key"in A){E={};for(var y in A)y!=="key"&&(E[y]=A[y])}else E=A;return A=E.ref,{$$typeof:c,type:u,key:B,ref:A!==void 0?A:null,props:E}}return Bi.Fragment=d,Bi.jsx=r,Bi.jsxs=r,Bi}var mA;function Qp(){return mA||(mA=1,jo.exports=Lp()),jo.exports}var f=Qp(),Io={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA;function Yp(){if(gA)return lt;gA=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),B=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.view_transition"),L=Symbol.iterator;function G(g){return g===null||typeof g!="object"?null:(g=L&&g[L]||g["@@iterator"],typeof g=="function"?g:null)}var it={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Et={};function Bt(g,R,X){this.props=g,this.context=R,this.refs=Et,this.updater=X||it}Bt.prototype.isReactComponent={},Bt.prototype.setState=function(g,R){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,R,"setState")},Bt.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function nt(){}nt.prototype=Bt.prototype;function Vt(g,R,X){this.props=g,this.context=R,this.refs=Et,this.updater=X||it}var Gt=Vt.prototype=new nt;Gt.constructor=Vt,K(Gt,Bt.prototype),Gt.isPureReactComponent=!0;var Xt=Array.isArray;function tt(){}var rt={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function Yt(g,R,X){var k=X.ref;return{$$typeof:c,type:g,key:R,ref:k!==void 0?k:null,props:X}}function fe(g,R){return Yt(g.type,R,g.props)}function ne(g){return typeof g=="object"&&g!==null&&g.$$typeof===c}function ze(g){var R={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(X){return R[X]})}var _e=/\/+/g;function Tt(g,R){return typeof g=="object"&&g!==null&&g.key!=null?ze(""+g.key):R.toString(36)}function j(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(tt,tt):(g.status="pending",g.then(function(R){g.status==="pending"&&(g.status="fulfilled",g.value=R)},function(R){g.status==="pending"&&(g.status="rejected",g.reason=R)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function W(g,R,X,k,H){var ct=typeof g;(ct==="undefined"||ct==="boolean")&&(g=null);var st=!1;if(g===null)st=!0;else switch(ct){case"bigint":case"string":case"number":st=!0;break;case"object":switch(g.$$typeof){case c:case d:st=!0;break;case _:return st=g._init,W(st(g._payload),R,X,k,H)}}if(st)return H=H(g),st=k===""?"."+Tt(g,0):k,Xt(H)?(X="",st!=null&&(X=st.replace(_e,"$&/")+"/"),W(H,R,X,"",function(zt){return zt})):H!=null&&(ne(H)&&(H=fe(H,X+(H.key==null||g&&g.key===H.key?"":(""+H.key).replace(_e,"$&/")+"/")+st)),R.push(H)),1;st=0;var Q=k===""?".":k+":";if(Xt(g))for(var J=0;J<g.length;J++)k=g[J],ct=Q+Tt(k,J),st+=W(k,R,X,ct,H);else if(J=G(g),typeof J=="function")for(g=J.call(g),J=0;!(k=g.next()).done;)k=k.value,ct=Q+Tt(k,J++),st+=W(k,R,X,ct,H);else if(ct==="object"){if(typeof g.then=="function")return W(j(g),R,X,k,H);throw R=String(g),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return st}function F(g,R,X){if(g==null)return g;var k=[],H=0;return W(g,k,"","",function(ct){return R.call(X,ct,H++)}),k}function Mt(g){if(g._status===-1){var R=g._result,X=R();X.then(function(k){(g._status===0||g._status===-1)&&(g._status=1,g._result=k,X.status===void 0&&(X.status="fulfilled",X.value=k))},function(k){(g._status===0||g._status===-1)&&(g._status=2,g._result=k,X.status===void 0&&(X.status="rejected",X.reason=k))}),g._status===-1&&(g._status=0,g._result=X)}if(g._status===1)return g._result.default;throw g._result}var ht=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function qt(g){var R=rt.T,X={};X.types=R!==null?R.types:null,rt.T=X;try{var k=g(),H=rt.S;H!==null&&H(X,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(tt,ht)}catch(ct){ht(ct)}finally{R!==null&&X.types!==null&&(R.types=X.types),rt.T=R}}function ye(g){var R=rt.T;if(R!==null){var X=R.types;X===null?R.types=[g]:X.indexOf(g)===-1&&X.push(g)}else qt(ye.bind(null,g))}var Ht={map:F,forEach:function(g,R,X){F(g,function(){R.apply(this,arguments)},X)},count:function(g){var R=0;return F(g,function(){R++}),R},toArray:function(g){return F(g,function(R){return R})||[]},only:function(g){if(!ne(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return lt.Activity=w,lt.Children=Ht,lt.Component=Bt,lt.Fragment=r,lt.Profiler=A,lt.PureComponent=Vt,lt.StrictMode=u,lt.Suspense=x,lt.ViewTransition=O,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rt,lt.__COMPILER_RUNTIME={__proto__:null,c:function(g){return rt.H.useMemoCache(g)}},lt.addTransitionType=ye,lt.cache=function(g){return function(){return g.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(g,R,X){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var k=K({},g.props),H=g.key;if(R!=null)for(ct in R.key!==void 0&&(H=""+R.key),R)!se.call(R,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&R.ref===void 0||(k[ct]=R[ct]);var ct=arguments.length-2;if(ct===1)k.children=X;else if(1<ct){for(var st=Array(ct),Q=0;Q<ct;Q++)st[Q]=arguments[Q+2];k.children=st}return Yt(g.type,H,k)},lt.createContext=function(g){return g={$$typeof:B,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:E,_context:g},g},lt.createElement=function(g,R,X){var k,H={},ct=null;if(R!=null)for(k in R.key!==void 0&&(ct=""+R.key),R)se.call(R,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(H[k]=R[k]);var st=arguments.length-2;if(st===1)H.children=X;else if(1<st){for(var Q=Array(st),J=0;J<st;J++)Q[J]=arguments[J+2];H.children=Q}if(g&&g.defaultProps)for(k in st=g.defaultProps,st)H[k]===void 0&&(H[k]=st[k]);return Yt(g,ct,H)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(g){return{$$typeof:y,render:g}},lt.isValidElement=ne,lt.lazy=function(g){return{$$typeof:_,_payload:{_status:-1,_result:g},_init:Mt}},lt.memo=function(g,R){return{$$typeof:N,type:g,compare:R===void 0?null:R}},lt.startTransition=qt,lt.unstable_useCacheRefresh=function(){return rt.H.useCacheRefresh()},lt.use=function(g){return rt.H.use(g)},lt.useActionState=function(g,R,X){return rt.H.useActionState(g,R,X)},lt.useCallback=function(g,R){return rt.H.useCallback(g,R)},lt.useContext=function(g){return rt.H.useContext(g)},lt.useDebugValue=function(){},lt.useDeferredValue=function(g,R){return rt.H.useDeferredValue(g,R)},lt.useEffect=function(g,R){return rt.H.useEffect(g,R)},lt.useEffectEvent=function(g){return rt.H.useEffectEvent(g)},lt.useId=function(){return rt.H.useId()},lt.useImperativeHandle=function(g,R,X){return rt.H.useImperativeHandle(g,R,X)},lt.useInsertionEffect=function(g,R){return rt.H.useInsertionEffect(g,R)},lt.useLayoutEffect=function(g,R){return rt.H.useLayoutEffect(g,R)},lt.useMemo=function(g,R){return rt.H.useMemo(g,R)},lt.useOptimistic=function(g,R){return rt.H.useOptimistic(g,R)},lt.useReducer=function(g,R,X){return rt.H.useReducer(g,R,X)},lt.useRef=function(g){return rt.H.useRef(g)},lt.useState=function(g){return rt.H.useState(g)},lt.useSyncExternalStore=function(g,R,X){return rt.H.useSyncExternalStore(g,R,X)},lt.useTransition=function(){return rt.H.useTransition()},lt.version="19.3.0",lt}var pA;function ko(){return pA||(pA=1,Io.exports=Yp()),Io.exports}var z=ko();const Hp=_A(z);var Go={exports:{}},xi={},Lo={exports:{}},Qo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vA;function Up(){return vA||(vA=1,(function(c){function d(j,W){var F=j.length;j.push(W);t:for(;0<F;){var Mt=F-1>>>1,ht=j[Mt];if(0<A(ht,W))j[Mt]=W,j[F]=ht,F=Mt;else break t}}function r(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var W=j[0],F=j.pop();if(F!==W){j[0]=F;t:for(var Mt=0,ht=j.length,qt=ht>>>1;Mt<qt;){var ye=2*(Mt+1)-1,Ht=j[ye],g=ye+1,R=j[g];if(0>A(Ht,F))g<ht&&0>A(R,Ht)?(j[Mt]=R,j[g]=F,Mt=g):(j[Mt]=Ht,j[ye]=F,Mt=ye);else if(g<ht&&0>A(R,F))j[Mt]=R,j[g]=F,Mt=g;else break t}}return W}function A(j,W){var F=j.sortIndex-W.sortIndex;return F!==0?F:j.id-W.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;c.unstable_now=function(){return E.now()}}else{var B=Date,y=B.now();c.unstable_now=function(){return B.now()-y}}var x=[],N=[],_=1,w=null,O=3,L=!1,G=!1,it=!1,K=!1,Et=typeof setTimeout=="function"?setTimeout:null,Bt=typeof clearTimeout=="function"?clearTimeout:null,nt=typeof setImmediate<"u"?setImmediate:null;function Vt(j){for(var W=r(N);W!==null;){if(W.callback===null)u(N);else if(W.startTime<=j)u(N),W.sortIndex=W.expirationTime,d(x,W);else break;W=r(N)}}function Gt(j){if(it=!1,Vt(j),!G)if(r(x)!==null)G=!0,Xt||(Xt=!0,ne());else{var W=r(N);W!==null&&Tt(Gt,W.startTime-j)}}var Xt=!1,tt=-1,rt=5,se=-1;function Yt(){return K?!0:!(c.unstable_now()-se<rt)}function fe(){if(K=!1,Xt){var j=c.unstable_now();se=j;var W=!0;try{t:{G=!1,it&&(it=!1,Bt(tt),tt=-1),L=!0;var F=O;try{e:{for(Vt(j),w=r(x);w!==null&&!(w.expirationTime>j&&Yt());){var Mt=w.callback;if(typeof Mt=="function"){w.callback=null,O=w.priorityLevel;var ht=Mt(w.expirationTime<=j);if(j=c.unstable_now(),typeof ht=="function"){w.callback=ht,Vt(j),W=!0;break e}w===r(x)&&u(x),Vt(j)}else u(x);w=r(x)}if(w!==null)W=!0;else{var qt=r(N);qt!==null&&Tt(Gt,qt.startTime-j),W=!1}}break t}finally{w=null,O=F,L=!1}W=void 0}}finally{W?ne():Xt=!1}}}var ne;if(typeof nt=="function")ne=function(){nt(fe)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,_e=ze.port2;ze.port1.onmessage=fe,ne=function(){_e.postMessage(null)}}else ne=function(){Et(fe,0)};function Tt(j,W){tt=Et(function(){j(c.unstable_now())},W)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(j){j.callback=null},c.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<j?Math.floor(1e3/j):5},c.unstable_getCurrentPriorityLevel=function(){return O},c.unstable_next=function(j){switch(O){case 1:case 2:case 3:var W=3;break;default:W=O}var F=O;O=W;try{return j()}finally{O=F}},c.unstable_requestPaint=function(){K=!0},c.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=O;O=j;try{return W()}finally{O=F}},c.unstable_scheduleCallback=function(j,W,F){var Mt=c.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Mt+F:Mt):F=Mt,j){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=F+ht,j={id:_++,callback:W,priorityLevel:j,startTime:F,expirationTime:ht,sortIndex:-1},F>Mt?(j.sortIndex=F,d(N,j),r(x)===null&&j===r(N)&&(it?(Bt(tt),tt=-1):it=!0,Tt(Gt,F-Mt))):(j.sortIndex=ht,d(x,j),G||L||(G=!0,Xt||(Xt=!0,ne()))),j},c.unstable_shouldYield=Yt,c.unstable_wrapCallback=function(j){var W=O;return function(){var F=O;O=W;try{return j.apply(this,arguments)}finally{O=F}}}})(Qo)),Qo}var bA;function Vp(){return bA||(bA=1,Lo.exports=Up()),Lo.exports}var Yo={exports:{}},be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yA;function kp(){if(yA)return be;yA=1;var c=ko();function d(_){var w="https://react.dev/errors/"+_;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)w+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+_+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(d(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},A=Symbol.for("react.portal"),E=Symbol.for("react.recoverable"),B=Symbol.for("react.optimistic_key");function y(_,w,O){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:L==null?null:L===B?B:""+L,children:_,containerInfo:w,implementation:O}}var x=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(_,w){if(_==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,be.browser=function(_){return{$$typeof:E,_reason:_}},be.createPortal=function(_,w){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(d(299));return y(_,w,null,O)},be.flushSync=function(_){var w=x.T,O=u.p;try{if(x.T=null,u.p=2,_)return _()}finally{x.T=w,u.p=O,u.d.f()}},be.preconnect=function(_,w){typeof _=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,u.d.C(_,w))},be.prefetchDNS=function(_){typeof _=="string"&&u.d.D(_)},be.preinit=function(_,w){if(typeof _=="string"&&w&&typeof w.as=="string"){var O=w.as,L=N(O,w.crossOrigin),G=typeof w.integrity=="string"?w.integrity:void 0,it=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;O==="style"?u.d.S(_,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:L,integrity:G,fetchPriority:it}):O==="script"&&u.d.X(_,{crossOrigin:L,integrity:G,fetchPriority:it,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},be.preinitModule=function(_,w){if(typeof _=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var O=N(w.as,w.crossOrigin);u.d.M(_,{crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0})}}else w==null&&u.d.M(_)},be.preload=function(_,w){if(typeof _=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var O=w.as,L=N(O,w.crossOrigin);u.d.L(_,O,{crossOrigin:L,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},be.preloadModule=function(_,w){if(typeof _=="string")if(w){var O=N(w.as,w.crossOrigin);u.d.m(_,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0})}else u.d.m(_)},be.requestFormReset=function(_){u.d.r(_)},be.unstable_batchedUpdates=function(_,w){return _(w)},be.useFormState=function(_,w,O){return x.H.useFormState(_,w,O)},be.useFormStatus=function(){return x.H.useHostTransitionStatus()},be.version="19.3.0",be}var wA;function OA(){if(wA)return Yo.exports;wA=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),Yo.exports=kp(),Yo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EA;function Xp(){if(EA)return xi;EA=1;var c=Vp(),d=ko(),r=OA();function u(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function E(t){for(var e=t,n=e;n&&!n.alternate;)e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function B(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(E(t)!==t)throw Error(u(188))}function N(t){var e=t.alternate;if(!e){if(e=E(t),e===null)throw Error(u(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return x(l),t;if(i===a)return x(l),e;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=i;else{for(var s=!1,o=l.child;o;){if(o===n){s=!0,n=l,a=i;break}if(o===a){s=!0,a=l,n=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===n){s=!0,n=i,a=l;break}if(o===a){s=!0,a=i,n=l;break}o=o.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?t:e}function _(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=_(t),e!==null)return e;t=t.sibling}return null}function w(t,e,n,a,l,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,a,l,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&w(t.child,e,n,a,l,i))return!0;t=t.sibling}return!1}function O(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function L(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function G(t){var e=[null,null],n=O(t);return n===null||it(e,t,n.child,{foundSelf:!1}),e}function it(t,e,n,a){for(;n!==null;){if(n===e)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&it(t,e,n.child,a))return!0;n=n.sibling}return!1}function K(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(u(559))}}var Et=null,Bt=null;function nt(t,e,n){return t===n?!0:t===e?(Et=t,!0):!1}function Vt(t,e,n){return t===n?(Bt=t,!1):t===e?(Bt!==null&&(Et=t),!0):!1}function Gt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Xt(t,e,n){for(var a=0,l=t;l;l=n(l))a++;l=0;for(var i=e;i;i=n(i))l++;for(;0<a-l;)t=n(t),a--;for(;0<l-a;)e=n(e),l--;for(;a--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var tt=Object.assign,rt=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),Yt=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),_e=Symbol.for("react.consumer"),Tt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),qt=Symbol.for("react.activity"),ye=Symbol.for("react.legacy_hidden"),Ht=Symbol.for("react.memo_cache_sentinel"),g=Symbol.for("react.view_transition"),R=Symbol.for("react.recoverable"),X=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var H=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===H?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fe:return"Fragment";case ze:return"Profiler";case ne:return"StrictMode";case W:return"Suspense";case F:return"SuspenseList";case qt:return"Activity";case g:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Yt:return"Portal";case Tt:return t.displayName||"Context";case _e:return(t._context.displayName||"Context")+".Consumer";case j:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mt:return e=t.displayName||null,e!==null?e:ct(t.type)||"Memo";case ht:e=t._payload,t=t._init;try{return ct(t(e))}catch{}}return null}var st=Array.isArray,Q=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt={pending:!1,data:null,method:null,action:null},Pt=[],we=-1;function ae(t){return{current:t}}function _t(t){0>we||(t.current=Pt[we],Pt[we]=null,we--)}function Ct(t,e){we++,Pt[we]=t.current,t.current=e}var Ce=ae(null),le=ae(null),Me=ae(null),Ee=ae(null);function An(t,e){switch(Ct(Me,e),Ct(le,t),Ct(Ce,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Th(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Th(e),t=Ch(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_t(Ce),Ct(Ce,t)}function Fe(){_t(Ce),_t(le),_t(Me)}function U(t){var e=t.memoizedState;e!==null&&(xl._currentValue=e.memoizedState,Ct(Ee,t)),e=Ce.current;var n=Ch(e,t.type);e!==n&&(Ct(le,t),Ct(Ce,n))}function q(t){le.current===t&&(_t(Ce),_t(le)),Ee.current===t&&(_t(Ee),xl._currentValue=zt)}var ut,bt;function at(t){if(ut===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ut=e&&e[1]||"",bt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+bt}var $=!1;function yt(t,e){if(!t||$)return"";$=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(I){var p=I}Reflect.construct(t,[],D)}else{try{D.call()}catch(I){p=I}D=!1;try{var C=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),D=!0,new t}finally{D&&(C!==void 0?Object.defineProperty(t.prototype,"props",C):delete t.prototype.props)}}}else{try{throw Error()}catch(I){p=I}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(I){if(I&&p&&typeof I.stack=="string")return[I.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var h=s.split(`
`),b=o.split(`
`);for(l=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;if(a===h.length||l===b.length)for(a=h.length-1,l=b.length-1;1<=a&&0<=l&&h[a]!==b[l];)l--;for(;1<=a&&0<=l;a--,l--)if(h[a]!==b[l]){if(a!==1||l!==1)do if(a--,l--,0>l||h[a]!==b[l]){var M=`
`+h[a].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=a&&0<=l);break}}}finally{$=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?at(n):""}function Z(t,e){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==e&&e!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return at("Activity");case 30:return at("ViewTransition");default:return""}}function ot(t){try{var e="",n=null;do e+=Z(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ce=Object.prototype.hasOwnProperty,Oe=c.unstable_scheduleCallback,Ha=c.unstable_cancelCallback,Ua=c.unstable_shouldYield,Oi=c.unstable_requestPaint,Qe=c.unstable_now,VA=c.unstable_getCurrentPriorityLevel,Xo=c.unstable_ImmediatePriority,qo=c.unstable_UserBlockingPriority,Ri=c.unstable_NormalPriority,kA=c.unstable_LowPriority,Jo=c.unstable_IdlePriority,XA=c.log,qA=c.unstable_setDisableYieldValue,jl=null,Ye=null;function Un(t){if(typeof XA=="function"&&qA(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(jl,t)}catch{}}var He=Math.clz32?Math.clz32:ZA,JA=Math.log,KA=Math.LN2;function ZA(t){return t>>>=0,t===0?32:31-(JA(t)/KA|0)|0}var Ni=256,ji=262144,Ii=4194304;function ga(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gi(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?l=ga(a):(s&=o,s!==0?l=ga(s):n||(n=o&~t,n!==0&&(l=ga(n))))):(o=a&~i,o!==0?l=ga(o):s!==0?l=ga(s):n||(n=a&~t,n!==0&&(l=ga(n)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:l}function Il(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ko(t,e){(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-He(n),l=1<<a;e|=t[a],n&=~l}return e}function PA(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zo(){var t=Ii;return Ii<<=1,(Ii&62914560)===0&&(Ii=4194304),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function FA(t,e,n,a,l,i){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,h=t.expirationTimes,b=t.hiddenUpdates;for(n=s&~n;0<n;){var M=31-He(n),D=1<<M;o[M]=0,h[M]=-1;var p=b[M];if(p!==null)for(b[M]=null,M=0;M<p.length;M++){var C=p[M];C!==null&&(C.lane&=-536870913)}n&=~D}a!==0&&Po(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function Po(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-He(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function Fo(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-He(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Wo(t,e){var n=e&-e;return n=(n&42)!==0?1:uc(n),(n&(t.suspendedLanes|e))!==0?0:n}function uc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $o(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:cA(t.type))}function tr(t,e){var n=J.p;try{return J.p=t,e()}finally{J.p=n}}var Sn=Math.random().toString(36).slice(2),he="__reactFiber$"+Sn,Re="__reactProps$"+Sn,Va="__reactContainer$"+Sn,er="__reactEvents$"+Sn,WA="__reactListeners$"+Sn,$A="__reactHandles$"+Sn,nr="__reactResources$"+Sn,Ll="__reactMarker$"+Sn,Li="__reactLoad$"+Sn;function Qi(t){delete t[he],delete t[Re],delete t[WA],delete t[$A]}function pa(t){var e;if(e=t[he])return e;for(var n=t.parentNode;n;){if(e=n[Va]||n[he]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[he])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function ka(t){if(t=t[he]||t[Va]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ql(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(u(33))}function Xa(t){var e=t[nr];return e||(e=t[nr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[Ll]=!0}function ar(t){t[Li]=void 0}var lr=new Set,ir={};function va(t,e){qa(t,e),qa(t+"Capture",e)}function qa(t,e){for(ir[t]=e,t=0;t<e.length;t++)lr.add(e[t])}var tm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sr={},cr={};function em(t){return ce.call(cr,t)?!0:ce.call(sr,t)?!1:tm.test(t)?cr[t]=!0:(sr[t]=!0,!1)}var St=!1;function ur(){var t=St;return St=!1,t}function Yi(t,e,n){if(em(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Hi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function Dn(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,a)}}function Ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function or(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nm(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rc(t){if(!t._valueTracker){var e=or(t)?"checked":"value";t._valueTracker=nm(t,e,""+t[e])}}function rr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=or(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}var am=/[\n"\\]/g;function We(t){return t.replace(am,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function dc(t,e,n,a,l,i,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ue(e)):t.value!==""+Ue(e)&&(t.value=""+Ue(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?fc(t,Ue(t.value)):fc(t,Ue(e)):n!=null?fc(t,Ue(n)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Ue(o):t.removeAttribute("name")}function dr(t,e,n,a,l,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){rc(t);return}n=n!=null?""+Ue(n):"",e=e!=null?""+Ue(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),rc(t)}function fc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ja(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ue(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function fr(t,e,n){if(e!=null&&(e=""+Ue(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ue(n):""}function hr(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(u(92));if(st(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ue(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),rc(t)}function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ar(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||lm.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function mr(t,e,n){if(e!=null&&typeof e!="object")throw Error(u(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="",St=!0);for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&(Ar(t,l,a),St=!0)}else for(var i in e)e.hasOwnProperty(i)&&Ar(t,i,e[i])}function hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(t){return sm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function mn(){}var Ac=null;function mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Za=null,Pa=null;function gr(t){var e=ka(t);if(e&&(t=e.stateNode)){var n=t[Re]||null;t:switch(t=e.stateNode,e.type){case"input":if(dc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+We(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[Re]||null;if(!l)throw Error(u(90));dc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&rr(a)}break t;case"textarea":fr(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ja(t,!!n.multiple,e,!1)}}}var gc=!1;function pr(t,e,n){if(gc)return t(e,n);gc=!0;try{var a=t(e);return a}finally{if(gc=!1,(Za!==null||Pa!==null)&&(Us(),Za&&(e=Za,t=Pa,Pa=Za=null,gr(e),t)))for(e=0;e<t.length;e++)gr(t[e])}}function Yl(t,e){var n=t.stateNode;if(n===null)return null;var a=n[Re]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(u(231,e,typeof n));return n}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=!1;if(Bn)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){pc=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{pc=!1}var Vn=null,vc=null,Vi=null;function vr(){if(Vi)return Vi;var t,e=vc,n=e.length,a,l="value"in Vn?Vn.value:Vn.textContent,i=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===l[i-a];a++);return Vi=l.slice(t,1<a?1-a:void 0)}function ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function br(){return!1}function Se(t){function e(n,a,l,i,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xi:br,this.isPropagationStopped=br,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),e}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Se(kn),Ul=tt({},kn,{view:0,detail:0}),cm=Se(Ul),bc,yc,Vl,Ji=tt({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vl&&(Vl&&t.type==="mousemove"?(bc=t.screenX-Vl.screenX,yc=t.screenY-Vl.screenY):yc=bc=0,Vl=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),yr=Se(Ji),um=tt({},Ji,{dataTransfer:0}),om=Se(um),rm=tt({},Ul,{relatedTarget:0}),wc=Se(rm),dm=tt({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=Se(dm),hm=tt({},kn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Am=Se(hm),mm=tt({},kn,{data:0}),wr=Se(mm),gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vm[t])?!!e[t]:!1}function Ec(){return bm}var ym=tt({},Ul,{key:function(t){if(t.key){var e=gm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wm=Se(ym),Em=tt({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Er=Se(Em),Tm=tt({},kn,{submitter:0}),Cm=Se(Tm),Mm=tt({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Sm=Se(Mm),Dm=tt({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bm=Se(Dm),xm=tt({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=Se(xm),_m=tt({},kn,{newState:0,oldState:0,source:0}),Om=Se(_m),Rm=[9,13,27,32],Tc=Bn&&"CompositionEvent"in window,kl=null;Bn&&"documentMode"in document&&(kl=document.documentMode);var Nm=Bn&&"TextEvent"in window&&!kl,Tr=Bn&&(!Tc||kl&&8<kl&&11>=kl),Cr=" ",Mr=!1;function Sr(t,e){switch(t){case"keyup":return Rm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fa=!1;function jm(t,e){switch(t){case"compositionend":return Dr(e);case"keypress":return e.which!==32?null:(Mr=!0,Cr);case"textInput":return t=e.data,t===Cr&&Mr?null:t;default:return null}}function Im(t,e){if(Fa)return t==="compositionend"||!Tc&&Sr(t,e)?(t=vr(),Vi=vc=Vn=null,Fa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tr&&e.locale!=="ko"?null:e.data;default:return null}}var Gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gm[t.type]:e==="textarea"}function xr(t,e,n,a){Za?Pa?Pa.push(a):Pa=[a]:Za=a,e=Ks(e,"onChange"),0<e.length&&(n=new qi("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Xl=null,ql=null;function Lm(t){ph(t,0)}function Ki(t){var e=Ql(t);if(rr(e))return t}function zr(t,e){if(t==="change")return e}var _r=!1;if(Bn){var Cc;if(Bn){var Mc="oninput"in document;if(!Mc){var Or=document.createElement("div");Or.setAttribute("oninput","return;"),Mc=typeof Or.oninput=="function"}Cc=Mc}else Cc=!1;_r=Cc&&(!document.documentMode||9<document.documentMode)}function Rr(){Xl&&(Xl.detachEvent("onpropertychange",Nr),ql=Xl=null)}function Nr(t){if(t.propertyName==="value"&&Ki(ql)){var e=[];xr(e,ql,t,mc(t)),pr(Lm,e)}}function Qm(t,e,n){t==="focusin"?(Rr(),Xl=e,ql=n,Xl.attachEvent("onpropertychange",Nr)):t==="focusout"&&Rr()}function Ym(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ki(ql)}function Hm(t,e){if(t==="click")return Ki(e)}function Um(t,e){if(t==="input"||t==="change")return Ki(e)}function Vm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ve=typeof Object.is=="function"?Object.is:Vm;function Jl(t,e){if(Ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!ce.call(e,l)||!Ve(t[l],e[l]))return!1}return!0}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ir(t,e){var n=jr(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=jr(n)}}function Gr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Sc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function Dc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var km=Bn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Bc=null,Kl=null,xc=!1;function Qr(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Wa==null||Wa!==Sc(a)||(a=Wa,"selectionStart"in a&&Dc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Kl&&Jl(Kl,a)||(Kl=a,a=Ks(Bc,"onSelect"),0<a.length&&(e=new qi("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=Wa)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $a={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},zc={},Yr={};Bn&&(Yr=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function ya(t){if(zc[t])return zc[t];if(!$a[t])return t;var e=$a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yr)return zc[t]=e[n];return t}var Hr=ya("animationend"),Ur=ya("animationiteration"),Vr=ya("animationstart"),Xm=ya("transitionrun"),qm=ya("transitionstart"),Jm=ya("transitioncancel"),kr=ya("transitionend"),Xr=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function un(t,e){Xr.set(t,e),va(e,[t])}var Km=0;function xn(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=fn.identifierPrefix;var n=Km++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function qr(t){if(t==null||typeof t=="string")return t;var e=null,n=bl;if(n!==null)for(var a=0;a<n.length;a++){var l=t[n[a]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function zn(t,e){return t=qr(t),e=qr(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Zi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$e=[],tl=0,Oc=0;function Pi(){for(var t=tl,e=Oc=tl=0;e<t;){var n=$e[e];$e[e++]=null;var a=$e[e];$e[e++]=null;var l=$e[e];$e[e++]=null;var i=$e[e];if($e[e++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}i!==0&&Jr(n,l,i)}}function Fi(t,e,n,a){$e[tl++]=t,$e[tl++]=e,$e[tl++]=n,$e[tl++]=a,Oc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Rc(t,e,n,a){return Fi(t,e,n,a),Wi(t)}function wa(t,e){return Fi(t,null,null,e),Wi(t)}function Jr(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=t.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-He(n),t=i.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),i):null}function Wi(t){if(50<gi)throw gi=0,Hs=null,Error(u(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var el={};function Zm(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(t,e,n,a){return new Zm(t,e,n,a)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _n(t,e){var n=t.alternate;return n===null?(n=Ne(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Kr(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function $i(t,e,n,a,l,i){var s=0;if(a=t,typeof a=="function")Nc(a)&&(s=1);else if(typeof a=="string")s=Tp(t,n,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(a){case qt:return t=Ne(31,n,e,l),t.elementType=qt,t.lanes=i,t;case fe:return Ea(n.children,l,i,e);case ne:s=8,l|=24;break;case ze:return t=Ne(12,n,e,l|2),t.elementType=ze,t.lanes=i,t;case W:return t=Ne(13,n,e,l),t.elementType=W,t.lanes=i,t;case F:return t=Ne(19,n,e,l),t.elementType=F,t.lanes=i,t;case ye:case g:return t=l|32,t=Ne(30,n,e,t),t.elementType=g,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Tt:s=10;break t;case _e:s=9;break t;case j:s=11;break t;case Mt:s=14;break t;case ht:s=16,a=null;break t}s=29,n=Error(u(130,t===null?"null":typeof t,"")),a=null}return e=Ne(s,n,e,l),e.elementType=t,e.type=a,e.lanes=i,e}function Ea(t,e,n,a){return t=Ne(7,t,a,e),t.lanes=n,t}function jc(t,e,n){return t=Ne(6,t,null,e),t.lanes=n,t}function Zr(t){var e=Ne(18,null,null,0);return e.stateNode=t,e}function Ic(t,e,n){return e=Ne(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pr=new WeakMap;function tn(t,e){if(typeof t=="object"&&t!==null){var n=Pr.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ot(e)},Pr.set(t,e),e)}return{value:t,source:e,stack:ot(e)}}var nl=[],al=0,ts=null,Zl=0,en=[],nn=0,Xn=null,gn=1,pn="";function On(t,e){nl[al++]=Zl,nl[al++]=ts,ts=t,Zl=e}function Fr(t,e,n){en[nn++]=gn,en[nn++]=pn,en[nn++]=Xn,Xn=t;var a=gn;t=pn;var l=32-He(a)-1;a&=~(1<<l),n+=1;var i=32-He(e)+l;if(30<i){var s=l-l%5;i=(a&(1<<s)-1).toString(32),a>>=s,l-=s,gn=1<<32-He(e)+l|n<<l|a,pn=i+t}else gn=1<<i|n<<l|a,pn=t}function es(t){t.return!==null&&(On(t,1),Fr(t,1,0))}function Gc(t){for(;t===ts;)ts=nl[--al],nl[al]=null,Zl=nl[--al],nl[al]=null;for(;t===Xn;)Xn=en[--nn],en[nn]=null,pn=en[--nn],en[nn]=null,gn=en[--nn],en[nn]=null}function Wr(t,e){en[nn++]=gn,en[nn++]=pn,en[nn++]=Xn,gn=e.id,pn=e.overflow,Xn=t}var oe=null,Lt=null,At=!1,qn=null,an=!1,Lc=Error(u(519));function Jn(t){var e=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(tn(e,t)),Lc}function $r(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[he]=t,e[Re]=a,n){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(n=0;n<vi.length;n++)gt(vi[n],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),dr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),hr(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||wh(e.textContent,n)?(a.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),a.onScroll!=null&&gt("scroll",e),a.onScrollEnd!=null&&gt("scrollend",e),a.onClick!=null&&(e.onclick=mn),e=!0):e=!1,e||Jn(t,!0)}function ns(t){for(oe=t.return;oe;)switch(oe.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:oe=oe.return}}function ll(t){if(t!==oe)return!1;if(!At)return ns(t),At=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||mo(t.type,t.memoizedProps)),n=!n),n&&Lt&&Jn(t),ns(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));Lt=Yh(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));Lt=Yh(t)}else e===27?(e=Lt,oa(t.type)?(t=Co,Co=null,Lt=t):Lt=e):Lt=oe?sn(t.stateNode.nextSibling):null;return!0}function Ta(){Lt=oe=null,At=!1}function Qc(){var t=qn;return t!==null&&(Ge===null?Ge=t:Ge.push.apply(Ge,t),qn=null),t}function Pl(t){qn===null?qn=[t]:qn.push(t)}var Yc=ae(null),Ca=null,Rn=null;function Kn(t,e,n){Ct(Yc,e._currentValue),e._currentValue=n}function Nn(t){t._currentValue=Yc.current,_t(Yc)}function as(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Hc(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=l;for(var h=0;h<e.length;h++)if(o.context===e[h]){i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),as(i.return,n,t),a||(s=null);break t}i=o.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),as(s,n,t),s=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),as(l.return,n,t),s=l.child,s=s!==null?s.sibling:null):s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Ma(t,e,n,a){t=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var o=l.type;Ve(l.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(l===Ee.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(xl):t=[xl])}l=l.return}return t!==null&&Hc(e,t,n,a),e.flags|=262144,t!==null}function ls(t){for(t=t.firstContext;t!==null;){if(!Ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sa(t){Ca=t,Rn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ae(t){return td(Ca,t)}function is(t,e){return Ca===null&&Sa(t),td(t,e)}function td(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Rn===null){if(t===null)throw Error(u(308));Rn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Rn=Rn.next=e;return n}var Pm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Fm=c.unstable_scheduleCallback,Wm=c.unstable_NormalPriority,Wt={$$typeof:Tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new Pm,data:new Map,refCount:0}}function Fl(t){t.refCount--,t.refCount===0&&Fm(Wm,function(){t.controller.abort()})}function ed(t,e){if((t.pendingLanes&4194048)!==0){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var a=e[t];n.indexOf(a)===-1&&n.push(a)}}}var Wl=null;function $m(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var $l=null,Vc=0,Da=0,il=null;function tg(t,e){if($l===null){var n=$l=[];Vc=0,Da=io(),il={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Vc++,e.then(nd,nd),e}function nd(){if(--Vc===0&&(Wl=null,$l!==null)){il!==null&&(il.status="fulfilled");var t=$l;$l=null,Da=0,il=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function eg(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var ad=Q.S;Q.S=function(t,e){if(Pf=Qe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&tg(t,e),Wl!==null)for(var n=Tl;n!==null;)ed(n,Wl),n=n.next;if(n=t.types,n!==null){for(var a=Tl;a!==null;)ed(a,n),a=a.next;if(Da!==0){a=Wl,a===null&&(a=Wl=[]);for(var l=0;l<n.length;l++){var i=n[l];a.indexOf(i)===-1&&a.push(i)}}}ad!==null&&ad(t,e)};var Ba=ae(null);function kc(){var t=Ba.current;return t!==null?t:It.pooledCache}function ss(t,e){e===null?Ct(Ba,Ba.current):Ct(Ba,e.pool)}function ld(){var t=kc();return t===null?null:{parent:Wt._currentValue,pool:t}}var sl=Error(u(460)),Xc=Error(u(474)),cs=Error(u(542)),us={then:function(){}};function id(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(mn,mn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ud(t),t===void 0&&!("reason"in e)?Error(u(600)):t;default:if(typeof e.status=="string")e.then(mn,mn);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ud(t),t}throw za=e,sl}}function xa(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,sl):n}}var za=null;function cd(){if(za===null)throw Error(u(459));var t=za;return za=null,t}function ud(t){if(t===sl||t===cs)throw Error(u(483))}var cl=null,ti=0;function os(t){var e=ti;return ti+=1,cl===null&&(cl=[]),sd(cl,t,e)}function Zn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function rs(t,e){throw e.$$typeof===rt?Error(u(525)):(t=Object.prototype.toString.call(e),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function od(t){function e(v,m){if(t){var T=v.deletions;T===null?(v.deletions=[m],v.flags|=16):T.push(m)}}function n(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function a(v){for(var m=new Map;v!==null;)v.key===null?m.set(v.index,v):m.set(v.key,v),v=v.sibling;return m}function l(v,m){return v=_n(v,m),v.index=0,v.sibling=null,v}function i(v,m,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<m?(v.flags|=2,m):T):(v.flags|=134217730,m)):(v.flags|=1048576,m)}function s(v){return t&&v.alternate===null&&(v.flags|=134217730),v}function o(v,m,T,S){return m===null||m.tag!==6?(m=jc(T,v.mode,S),m.return=v,m):(m=l(m,T),m.return=v,m)}function h(v,m,T,S){var Y=T.type;return Y===fe?(v=M(v,m,T.props.children,S,T.key),Zn(v,T),v):m!==null&&(m.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===ht&&xa(Y)===m.type)?(m=l(m,T.props),Zn(m,T),m.return=v,m):(m=$i(T.type,T.key,T.props,null,v.mode,S),Zn(m,T),m.return=v,m)}function b(v,m,T,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==T.containerInfo||m.stateNode.implementation!==T.implementation?(m=Ic(T,v.mode,S),m.return=v,m):(m=l(m,T.children||[]),m.return=v,m)}function M(v,m,T,S,Y){return m===null||m.tag!==7?(m=Ea(T,v.mode,S,Y),m.return=v,m):(m=l(m,T),m.return=v,m)}function D(v,m,T){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=jc(""+m,v.mode,T),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case se:return T=$i(m.type,m.key,m.props,null,v.mode,T),Zn(T,m),T.return=v,T;case Yt:return m=Ic(m,v.mode,T),m.return=v,m;case ht:return m=xa(m),D(v,m,T)}if(st(m)||k(m))return m=Ea(m,v.mode,T,null),m.return=v,m;if(typeof m.then=="function")return D(v,os(m),T);if(m.$$typeof===Tt)return D(v,is(v,m),T);rs(v,m)}return null}function p(v,m,T,S){var Y=m!==null?m.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return Y!==null?null:o(v,m,""+T,S);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case se:return T.key===Y?h(v,m,T,S):null;case Yt:return T.key===Y?b(v,m,T,S):null;case ht:return T=xa(T),p(v,m,T,S)}if(st(T)||k(T))return Y!==null?null:M(v,m,T,S,null);if(typeof T.then=="function")return p(v,m,os(T),S);if(T.$$typeof===Tt)return p(v,m,is(v,T),S);rs(v,T)}return null}function C(v,m,T,S,Y){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return v=v.get(T)||null,o(m,v,""+S,Y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case se:return v=v.get(S.key===null?T:S.key)||null,h(m,v,S,Y);case Yt:return v=v.get(S.key===null?T:S.key)||null,b(m,v,S,Y);case ht:return S=xa(S),C(v,m,T,S,Y)}if(st(S)||k(S))return v=v.get(T)||null,M(m,v,S,Y,null);if(typeof S.then=="function")return C(v,m,T,os(S),Y);if(S.$$typeof===Tt)return C(v,m,T,is(m,S),Y);rs(m,S)}return null}function I(v,m,T,S){for(var Y=null,vt=null,P=m,et=m=0,ee=null;P!==null&&et<T.length;et++){P.index>et?(ee=P,P=null):ee=P.sibling;var wt=p(v,P,T[et],S);if(wt===null){P===null&&(P=ee);break}t&&P&&wt.alternate===null&&e(v,P),m=i(wt,m,et),vt===null?Y=wt:vt.sibling=wt,vt=wt,P=ee}if(et===T.length)return n(v,P),At&&On(v,et),Y;if(P===null){for(;et<T.length;et++)P=D(v,T[et],S),P!==null&&(m=i(P,m,et),vt===null?Y=P:vt.sibling=P,vt=P);return At&&On(v,et),Y}for(P=a(P);et<T.length;et++)ee=C(P,v,et,T[et],S),ee!==null&&(t&&(wt=ee.alternate,wt!==null&&P.delete(wt.key===null?et:wt.key)),m=i(ee,m,et),vt===null?Y=ee:vt.sibling=ee,vt=ee);return t&&P.forEach(function(Aa){return e(v,Aa)}),At&&On(v,et),Y}function V(v,m,T,S){if(T==null)throw Error(u(151));for(var Y=null,vt=null,P=m,et=m=0,ee=null,wt=T.next();P!==null&&!wt.done;et++,wt=T.next()){P.index>et?(ee=P,P=null):ee=P.sibling;var Aa=p(v,P,wt.value,S);if(Aa===null){P===null&&(P=ee);break}t&&P&&Aa.alternate===null&&e(v,P),m=i(Aa,m,et),vt===null?Y=Aa:vt.sibling=Aa,vt=Aa,P=ee}if(wt.done)return n(v,P),At&&On(v,et),Y;if(P===null){for(;!wt.done;et++,wt=T.next())wt=D(v,wt.value,S),wt!==null&&(m=i(wt,m,et),vt===null?Y=wt:vt.sibling=wt,vt=wt);return At&&On(v,et),Y}for(P=a(P);!wt.done;et++,wt=T.next())wt=C(P,v,et,wt.value,S),wt!==null&&(t&&(ee=wt.alternate,ee!==null&&P.delete(ee.key===null?et:ee.key)),m=i(wt,m,et),vt===null?Y=wt:vt.sibling=wt,vt=wt);return t&&P.forEach(function(jp){return e(v,jp)}),At&&On(v,et),Y}function ft(v,m,T,S){if(typeof T=="object"&&T!==null&&T.type===fe&&T.key===null&&T.props.ref===void 0&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case se:t:{for(var Y=T.key;m!==null;){if(m.key===Y){if(Y=T.type,Y===fe){if(m.tag===7){n(v,m.sibling),S=l(m,T.props.children),Zn(S,T),S.return=v,v=S;break t}}else if(m.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===ht&&xa(Y)===m.type){n(v,m.sibling),S=l(m,T.props),Zn(S,T),S.return=v,v=S;break t}n(v,m);break}else e(v,m);m=m.sibling}T.type===fe?(S=Ea(T.props.children,v.mode,S,T.key),Zn(S,T),S.return=v,v=S):(S=$i(T.type,T.key,T.props,null,v.mode,S),Zn(S,T),S.return=v,v=S)}return s(v);case Yt:t:{for(Y=T.key;m!==null;){if(m.key===Y)if(m.tag===4&&m.stateNode.containerInfo===T.containerInfo&&m.stateNode.implementation===T.implementation){n(v,m.sibling),S=l(m,T.children||[]),S.return=v,v=S;break t}else{n(v,m);break}else e(v,m);m=m.sibling}S=Ic(T,v.mode,S),S.return=v,v=S}return s(v);case ht:return T=xa(T),ft(v,m,T,S)}if(st(T))return I(v,m,T,S);if(k(T)){if(Y=k(T),typeof Y!="function")throw Error(u(150));return T=Y.call(T),V(v,m,T,S)}if(typeof T.then=="function")return ft(v,m,os(T),S);if(T.$$typeof===Tt)return ft(v,m,is(v,T),S);rs(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,m!==null&&m.tag===6?(n(v,m.sibling),S=l(m,T),S.return=v,v=S):(n(v,m),S=jc(T,v.mode,S),S.return=v,v=S),s(v)):n(v,m)}return function(v,m,T,S){try{ti=0;var Y=ft(v,m,T,S);return cl=null,Y}catch(P){if(P===sl||P===cs)throw P;var vt=Ne(29,P,null,v.mode);return vt.lanes=S,vt.return=v,vt}finally{}}}var _a=od(!0),rd=od(!1),Pn=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Dt&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=Wi(t),Jr(t,null,n),e}return Fi(t,a,e,n),Wi(t)}function ei(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Fo(t,n)}}function Kc(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=e:i=i.next=e}else l=i=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Zc=!1;function ni(){if(Zc){var t=il;if(t!==null)throw t}}function ai(t,e,n,a){Zc=!1;var l=t.updateQueue;Pn=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var h=o,b=h.next;h.next=null,s===null?i=b:s.next=b,s=h;var M=t.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==s&&(o===null?M.firstBaseUpdate=b:o.next=b,M.lastBaseUpdate=h))}if(i!==null){var D=l.baseState;s=0,M=b=h=null,o=i;do{var p=o.lane&-536870913,C=p!==o.lane;if(C?(pt&p)===p:(a&p)===p){p!==0&&p===Da&&(Zc=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var I=t,V=o;p=e;var ft=n;switch(V.tag){case 1:if(I=V.payload,typeof I=="function"){D=I.call(ft,D,p);break t}D=I;break t;case 3:I.flags=I.flags&-65537|128;case 0:if(I=V.payload,p=typeof I=="function"?I.call(ft,D,p):I,p==null)break t;D=tt({},D,p);break t;case 2:Pn=!0}}p=o.callback,p!==null&&(t.flags|=64,C&&(t.flags|=8192),C=l.callbacks,C===null?l.callbacks=[p]:C.push(p))}else C={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(b=M=C,h=D):M=M.next=C,s|=p;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;C=o,o=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);M===null&&(h=D),l.baseState=h,l.firstBaseUpdate=b,l.lastBaseUpdate=M,i===null&&(l.shared.lanes=0),ia|=s,t.lanes=s,t.memoizedState=D}}function dd(t,e){if(typeof t!="function")throw Error(u(191,t));t.call(e)}function fd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)dd(n[t],e)}var $n=ae(null),ds=ae(0);function hd(t,e){t=Qn,Ct(ds,t),Ct($n,e),Qn=t|e.baseLanes}function Pc(){Ct(ds,Qn),Ct($n,$n.current)}function Fc(){Qn=ds.current,_t($n),_t(ds)}var me=ae(null),Te=null;function ta(t){var e=t.alternate;Ct(ge,ge.current&1),Ct(me,t),Te===null&&(e===null||$n.current!==null||e.memoizedState!==null)&&(Te=t)}function Wc(t){Ct(ge,ge.current),Ct(me,t),Te===null&&(Te=t)}function Ad(t){t.tag===22?(Ct(ge,ge.current),Ct(me,t),Te===null&&(Te=t)):ea()}function ea(){Ct(ge,ge.current),Ct(me,me.current)}function ke(t){_t(me),Te===t&&(Te=null),_t(ge)}var ge=ae(0);function li(t,e){Ct(me,me.current),Ct(ge,e)}function $c(t){_t(ge),_t(me),Te===t&&(Te=null)}function fs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Eo(n)||To(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jn=0,dt=null,jt=null,$t=null,hs=!1,ul=!1,Oa=!1,As=0,ii=0,ol=null,ng=0;function Jt(){throw Error(u(321))}function tu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ve(t[n],e[n]))return!1;return!0}function eu(t,e,n,a,l,i){return jn=i,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Q.H=t===null||t.memoizedState===null?Fd:Wd,Oa=!1,i=n(a,l),Oa=!1,ul&&(i=gd(e,n,a,l)),md(t),i}function md(t){Q.H=ws;var e=jt!==null&&jt.next!==null;if(jn=0,$t=jt=dt=null,hs=!1,ii=0,ol=null,e)throw Error(u(300));t===null||te||(t=t.dependencies,t!==null&&ls(t)&&(te=!0))}function gd(t,e,n,a){dt=t;var l=0;do{if(ul&&(ol=null),ii=0,ul=!1,25<=l)throw Error(u(301));if(l+=1,$t=jt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}Q.H=rg,i=e(n,a)}while(ul);return i}function ag(){var t=Q.H,e=t.useState()[0];return e=typeof e.then=="function"?si(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(dt.flags|=1024),e}function nu(){var t=As!==0;return As=0,t}function au(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function lu(t){if(hs){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hs=!1}jn=0,$t=jt=dt=null,ul=!1,ii=As=0,ol=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?dt.memoizedState=$t=t:$t=$t.next=t,$t}function Ft(){if(jt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=$t===null?dt.memoizedState:$t.next;if(e!==null)$t=e,jt=t;else{if(t===null)throw dt.alternate===null?Error(u(467)):Error(u(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},$t===null?dt.memoizedState=$t=t:$t=$t.next=t}return $t}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function si(t){var e=ii;return ii+=1,ol===null&&(ol=[]),t=sd(ol,t,e),e=dt,($t===null?e.memoizedState:$t.next)===null&&(e=e.alternate,Q.H=e===null||e.memoizedState===null?Fd:Wd),t}function gs(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return si(t);if(t.$$typeof===R)return;if(t.$$typeof===Tt)return Ae(t)}throw Error(u(438,String(t)))}function iu(t){var e=null,n=dt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=dt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ms(),dt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=Ht;return e.index++,n}function In(t,e){return typeof e=="function"?e(t):e}function ps(t){var e=Ft();return su(e,jt,t)}function su(t,e,n){var a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}e.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var o=s=null,h=null,b=e,M=!1;do{var D=b.lane&-536870913;if(D!==b.lane?(pt&D)===D:(jn&D)===D){var p=b.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),D===Da&&(M=!0);else if((jn&p)===p){b=b.next,p===Da&&(M=!0);continue}else D={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},h===null?(o=h=D,s=i):h=h.next=D,dt.lanes|=p,ia|=p;D=b.action,Oa&&n(i,D),i=b.hasEagerState?b.eagerState:n(i,D)}else p={lane:D,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},h===null?(o=h=p,s=i):h=h.next=p,dt.lanes|=D,ia|=D;b=b.next}while(b!==null&&b!==e);if(h===null?s=i:h.next=o,!Ve(i,t.memoizedState)&&(te=!0,M&&(n=il,n!==null)))throw n;t.memoizedState=i,t.baseState=s,t.baseQueue=h,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function cu(t){var e=Ft(),n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,i=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=t(i,s.action),s=s.next;while(s!==l);Ve(i,e.memoizedState)||(te=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,a]}function pd(t,e,n){var a=dt,l=Ft(),i=At;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=e();var s=!Ve((jt||l).memoizedState,n);if(s&&(l.memoizedState=n,te=!0),l=l.queue,ru(yd.bind(null,a,l,t),[t]),t=l.getSnapshot!==e||s||$t!==null&&($t.memoizedState.tag&1)!==0,rl(t?9:8,{destroy:void 0},bd.bind(null,a,l,n,e),null),t){if(a.flags|=2048,It===null)throw Error(u(349));i||(jn&127)!==0||vd(a,e,n)}return n}function vd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e=ms(),dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bd(t,e,n,a){e.value=n,e.getSnapshot=a,wd(e)&&Ed(t)}function yd(t,e,n){return n(function(){wd(e)&&Ed(t)})}function wd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ve(t,n)}catch{return!0}}function Ed(t){var e=wa(t,2);e!==null&&Le(e,t,2)}function uu(t){var e=De();if(typeof t=="function"){var n=t;if(t=n(),Oa){Un(!0);try{n()}finally{Un(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:t},e}function Td(t,e,n,a){return t.baseState=n,su(t,jt,typeof a=="function"?a:In)}function lg(t,e,n,a,l){if(ys(t))throw Error(u(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};Q.T!==null?n(!0):i.isTransition=!1,a(i),n=e.pending,n===null?(i.next=e.pending=i,Cd(e,i)):(i.next=n.next,e.pending=n.next=i)}}function Cd(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var i=Q.T,s={};s.types=i!==null?i.types:null,Q.T=s;try{var o=n(l,a),h=Q.S;h!==null&&h(s,o),Md(t,e,o)}catch(b){ou(t,e,b)}finally{i!==null&&s.types!==null&&(i.types=s.types),Q.T=i}}else try{i=n(l,a),Md(t,e,i)}catch(b){ou(t,e,b)}}function Md(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Sd(t,e,a)},function(a){return ou(t,e,a)}):Sd(t,e,n)}function Sd(t,e,n){e.status="fulfilled",e.value=n,Dd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Cd(t,n)))}function ou(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Dd(e),e=e.next;while(e!==a)}t.action=null}function Dd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Bd(t,e){return e}function xd(t,e){if(At){var n=It.formState;if(n!==null){t:{var a=dt;if(At){if(Lt){e:{for(var l=Lt,i=an;l.nodeType!==8;){if(!i){l=null;break e}if(l=sn(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Lt=sn(l.nextSibling),a=l.data==="F!";break t}}Jn(a)}a=!1}a&&(e=n[0])}}return n=De(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bd,lastRenderedState:e},n.queue=a,n=Kd.bind(null,dt,a),a.dispatch=n,a=uu(!1),i=mu.bind(null,dt,!1,a.queue),a=De(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=lg.bind(null,dt,l,i,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function zd(t){var e=Ft();return _d(e,jt,t)}function _d(t,e,n){if(e=su(t,e,Bd)[0],t=ps(In)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=si(e)}catch(s){throw s===sl?cs:s}else a=e;e=Ft();var l=e.queue,i=l.dispatch;return n!==e.memoizedState&&(dt.flags|=2048,rl(9,{destroy:void 0},ig.bind(null,l,n),null)),[a,i,t]}function ig(t,e){t.action=e}function Od(t){var e=Ft(),n=jt;if(n!==null)return _d(e,n,t);Ft(),e=e.memoizedState,n=Ft();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function rl(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=dt.updateQueue,e===null&&(e=ms(),dt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Rd(){return Ft().memoizedState}function vs(t,e,n,a){var l=De();dt.flags|=t,l.memoizedState=rl(1|e,{destroy:void 0},n,a===void 0?null:a)}function bs(t,e,n,a){var l=Ft();a=a===void 0?null:a;var i=l.memoizedState.inst;jt!==null&&a!==null&&tu(a,jt.memoizedState.deps)?l.memoizedState=rl(e,i,n,a):(dt.flags|=t,l.memoizedState=rl(1|e,i,n,a))}function Nd(t,e){vs(8390656,8,t,e)}function ru(t,e){bs(2048,8,t,e)}function sg(t){dt.flags|=4;var e=dt.updateQueue;if(e===null)e=ms(),dt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function jd(t){var e=Ft().memoizedState;return sg({ref:e,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}function Id(t,e){return bs(4,2,t,e)}function Gd(t,e){return bs(4,4,t,e)}function Ld(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qd(t,e,n){n=n!=null?n.concat([t]):null,bs(4,4,Ld.bind(null,e,t),n)}function du(){}function Yd(t,e){var n=Ft();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&tu(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Hd(t,e){var n=Ft();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&tu(e,a[1]))return a[0];if(a=t(),Oa){Un(!0);try{t()}finally{Un(!1)}}return n.memoizedState=[a,e],a}function fu(t,e,n){return n===void 0||(jn&1073741824)!==0&&(pt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Wf(),dt.lanes|=t,ia|=t,n)}function Ud(t,e,n,a){return Ve(n,e)?n:$n.current!==null?(t=fu(t,n,a),Ve(t,e)||(te=!0),t):(jn&106)===0||(jn&1073741824)!==0&&(pt&261930)===0?(te=!0,t.memoizedState=n):(t=Wf(),dt.lanes|=t,ia|=t,e)}function Vd(t,e,n,a,l){var i=J.p;J.p=i!==0&&8>i?i:8;var s=Q.T,o={};o.types=s!==null?s.types:null,Q.T=o,mu(t,!1,e,n);try{var h=l(),b=Q.S;if(b!==null&&b(o,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var M=eg(h,a);ci(t,e,M,Ke(t))}else ci(t,e,a,Ke(t))}catch(D){ci(t,e,{then:function(){},status:"rejected",reason:D},Ke())}finally{J.p=i,s!==null&&o.types!==null&&(s.types=o.types),Q.T=s}}function cg(){}function hu(t,e,n,a){if(t.tag!==5)throw Error(u(476));var l=kd(t).queue;Vd(t,l,e,zt,n===null?cg:function(){return Xd(t),n(a)})}function kd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:zt,baseState:zt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:zt},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Xd(t){var e=kd(t);e.next===null&&(e=t.alternate.memoizedState),ci(t,e.next.queue,{},Ke())}function Au(){return Ae(xl)}function qd(){return Ft().memoizedState}function Jd(){return Ft().memoizedState}function ug(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ke();t=Fn(n);var a=Wn(e,t,n);a!==null&&(Le(a,e,n),ei(a,e,n)),e={cache:Uc()},t.payload=e;return}e=e.return}}function og(t,e,n){var a=Ke();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ys(t)?Zd(e,n):(n=Rc(t,e,n,a),n!==null&&(Le(n,t,a),Pd(n,e,a)))}function Kd(t,e,n){var a=Ke();ci(t,e,n,a)}function ci(t,e,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ys(t))Zd(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,o=i(s,n);if(l.hasEagerState=!0,l.eagerState=o,Ve(o,s))return Fi(t,e,l,0),It===null&&Pi(),!1}catch{}finally{}if(n=Rc(t,e,l,a),n!==null)return Le(n,t,a),Pd(n,e,a),!0}return!1}function mu(t,e,n,a){if(a={lane:2,revertLane:io(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ys(t)){if(e)throw Error(u(479))}else e=Rc(t,n,a,2),e!==null&&Le(e,t,2)}function ys(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Zd(t,e){ul=hs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pd(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Fo(t,n)}}var ws={readContext:Ae,use:gs,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt,useEffectEvent:Jt},Fd={readContext:Ae,use:gs,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:Ae,useEffect:Nd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,vs(4194308,4,Ld.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vs(4194308,4,t,e)},useInsertionEffect:function(t,e){vs(4,2,t,e)},useMemo:function(t,e){var n=De();e=e===void 0?null:e;var a=t();if(Oa){Un(!0);try{t()}finally{Un(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=De();if(n!==void 0){var l=n(e);if(Oa){Un(!0);try{n(e)}finally{Un(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=og.bind(null,dt,t),[a.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:function(t){t=uu(t);var e=t.queue,n=Kd.bind(null,dt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:du,useDeferredValue:function(t,e){var n=De();return fu(n,t,e)},useTransition:function(){var t=uu(!1);return t=Vd.bind(null,dt,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=dt,l=De();if(At){if(n===void 0)throw Error(u(407));n=n()}else{if(n=e(),It===null)throw Error(u(349));(pt&127)!==0||vd(a,e,n)}l.memoizedState=n;var i={value:n,getSnapshot:e};return l.queue=i,Nd(yd.bind(null,a,i,t),[t]),a.flags|=2048,rl(9,{destroy:void 0},bd.bind(null,a,i,n,e),null),n},useId:function(){var t=De(),e=It.identifierPrefix;if(At){var n=pn,a=gn;n=(a&~(1<<32-He(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=As++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=ng++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Au,useFormState:xd,useActionState:xd,useOptimistic:function(t){var e=De();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=mu.bind(null,dt,!0,n),n.dispatch=e,[t,e]},useMemoCache:iu,useCacheRefresh:function(){return De().memoizedState=ug.bind(null,dt)},useEffectEvent:function(t){var e=De(),n={impl:t};return e.memoizedState=n,function(){if((Dt&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Wd={readContext:Ae,use:gs,useCallback:Yd,useContext:Ae,useEffect:ru,useImperativeHandle:Qd,useInsertionEffect:Id,useLayoutEffect:Gd,useMemo:Hd,useReducer:ps,useRef:Rd,useState:function(){return ps(In)},useDebugValue:du,useDeferredValue:function(t,e){var n=Ft();return Ud(n,jt.memoizedState,t,e)},useTransition:function(){var t=ps(In)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:si(t),e]},useSyncExternalStore:pd,useId:qd,useHostTransitionStatus:Au,useFormState:zd,useActionState:zd,useOptimistic:function(t,e){var n=Ft();return Td(n,jt,t,e)},useMemoCache:iu,useCacheRefresh:Jd,useEffectEvent:jd},rg={readContext:Ae,use:gs,useCallback:Yd,useContext:Ae,useEffect:ru,useImperativeHandle:Qd,useInsertionEffect:Id,useLayoutEffect:Gd,useMemo:Hd,useReducer:cu,useRef:Rd,useState:function(){return cu(In)},useDebugValue:du,useDeferredValue:function(t,e){var n=Ft();return jt===null?fu(n,t,e):Ud(n,jt.memoizedState,t,e)},useTransition:function(){var t=cu(In)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:si(t),e]},useSyncExternalStore:pd,useId:qd,useHostTransitionStatus:Au,useFormState:Od,useActionState:Od,useOptimistic:function(t,e){var n=Ft();return jt!==null?Td(n,jt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:iu,useCacheRefresh:Jd,useEffectEvent:jd};function gu(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pu={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=Ke(),l=Fn(a);l.payload=e,n!=null&&(l.callback=n),e=Wn(t,l,a),e!==null&&(Le(e,t,a),ei(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=Ke(),l=Fn(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=Wn(t,l,a),e!==null&&(Le(e,t,a),ei(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ke(),a=Fn(n);a.tag=2,e!=null&&(a.callback=e),e=Wn(t,a,n),e!==null&&(Le(e,t,n),ei(e,t,n))}};function $d(t,e,n,a,l,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!Jl(n,a)||!Jl(l,i):!0}function tf(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&pu.enqueueReplaceState(e,e.state,null)}function Ra(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=tt({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function ef(t){Zi(t)}function nf(t){console.error(t)}function af(t){Zi(t)}function Es(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function lf(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vu(t,e,n){return n=Fn(n),n.tag=3,n.payload={element:null},n.callback=function(){Es(t,e)},n}function sf(t){return t=Fn(t),t.tag=3,t}function cf(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){lf(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){lf(e,n,a),typeof l!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function dg(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&Ma(e,n,l,!0),n=me.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Te===null?Vs():n.alternate===null&&Kt===0&&(Kt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===us?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),no(t,a,l)),!1;case 22:return n.flags|=65536,a===us?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),no(t,a,l)),!1}throw Error(u(435,n.tag))}return no(t,a,l),Vs(),!1}if(At)return e=me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Lc&&(t=Error(u(422),{cause:a}),Pl(tn(t,n)))):(a!==Lc&&(e=Error(u(423),{cause:a}),Pl(tn(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=tn(a,n),l=vu(t.stateNode,a,l),Kc(t,l),Kt!==4&&(Kt=2)),!1;var i=Error(u(520),{cause:a});if(i=tn(i,n),mi===null?mi=[i]:mi.push(i),Kt!==4&&(Kt=2),e===null)return!0;a=tn(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=vu(n.stateNode,a,t),Kc(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=sf(l),cf(l,t,n,a),Kc(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var bu=Error(u(461)),te=!1;function ie(t,e,n,a){e.child=t===null?rd(e,null,n,a):_a(e,t.child,n,a)}function uf(t,e,n,a,l){n=n.render;var i=e.ref;if("ref"in a){var s={};for(var o in a)o!=="ref"&&(s[o]=a[o])}else s=a;return Sa(e),a=eu(t,e,n,s,i,l),o=nu(),t!==null&&!te?(au(t,e,l),Gn(t,e,l)):(At&&o&&es(e),e.flags|=1,ie(t,e,a,l),e.child)}function of(t,e,n,a,l){if(t===null){var i=n.type;return typeof i=="function"&&!Nc(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,rf(t,e,i,a,l)):(t=$i(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Du(t,l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jl,n(s,a)&&t.ref===e.ref)return Gn(t,e,l)}return e.flags|=1,t=_n(i,a),t.ref=e.ref,t.return=e,e.child=t}function rf(t,e,n,a,l){if(t!==null){var i=t.memoizedProps;if(Jl(i,a)&&t.ref===e.ref)if(te=!1,e.pendingProps=a=i,Du(t,l))(t.flags&131072)!==0&&(te=!0);else return e.lanes=t.lanes,Gn(t,e,l)}return yu(t,e,n,a,l)}function df(t,e,n,a){var l=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,t!==null){for(a=e.child=t.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,e.child=null;return ff(t,e,i,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ss(e,i!==null?i.cachePool:null),i!==null?hd(e,i):Pc(),Ad(e);else return a=e.lanes=536870912,ff(t,e,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(ss(e,i.cachePool),hd(e,i),ea(),e.memoizedState=null):(t!==null&&ss(e,null),Pc(),ea());return ie(t,e,l,n),e.child}function ui(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ff(t,e,n,a,l){var i=kc();return i=i===null?null:{parent:Wt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&ss(e,null),Pc(),Ad(e),t!==null&&Ma(t,e,a,!0),e.childLanes=l,null}function Ts(t,e){return e=Cs({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function hf(t,e,n){return _a(e,t.child,null,n),t=Ts(e,e.pendingProps),t.flags|=2,ke(e),e.memoizedState=null,t}function fg(t,e,n){var a=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(At){if(a.mode==="hidden")return t=Ts(e,a),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ui(null,t);if(Wc(e),(t=Lt)?(t=Qh(t,an),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Xn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Zr(t),n.return=e,e.child=n,oe=e,Lt=null)):t=null,t===null)throw Jn(e);return e.lanes=536870912,null}return Ts(e,a)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(Wc(e),l)if(e.flags&256)e.flags&=-257,e=hf(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(u(558));else if(te||Ma(t,e,n,!1),l=(n&t.childLanes)!==0,te||l){if($n.current===null){if(a=It,a!==null&&(s=Wo(a,n),s!==0&&s!==i.retryLane))throw i.retryLane=s,wa(t,s),Le(a,t,s),bu;Vs()}e=hf(t,e,n)}else t=i.treeContext,Lt=sn(s.nextSibling),oe=e,At=!0,qn=null,an=!1,t!==null&&Wr(e,t),e=Ts(e,a),e.flags|=134221824;return e}return t=_n(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function dl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function yu(t,e,n,a,l){return Sa(e),n=eu(t,e,n,a,void 0,l),a=nu(),t!==null&&!te?(au(t,e,l),Gn(t,e,l)):(At&&a&&es(e),e.flags|=1,ie(t,e,n,l),e.child)}function Af(t,e,n,a,l,i){return Sa(e),e.updateQueue=null,n=gd(e,a,n,l),md(t),a=nu(),t!==null&&!te?(au(t,e,i),Gn(t,e,i)):(At&&a&&es(e),e.flags|=1,ie(t,e,n,i),e.child)}function mf(t,e,n,a,l){if(Sa(e),e.stateNode===null){var i=el,s=n.contextType;typeof s=="object"&&s!==null&&(i=Ae(s)),i=new n(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pu,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},qc(e),s=n.contextType,i.context=typeof s=="object"&&s!==null?Ae(s):el,i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(gu(e,n,s,a),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&pu.enqueueReplaceState(i,i.state,null),ai(e,a,i,l),ni(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,h=Ra(n,o);i.props=h;var b=i.context,M=n.contextType;s=el,typeof M=="object"&&M!==null&&(s=Ae(M));var D=n.getDerivedStateFromProps;M=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||b!==s)&&tf(e,i,a,s),Pn=!1;var p=e.memoizedState;i.state=p,ai(e,a,i,l),ni(),b=e.memoizedState,o||p!==b||Pn?(typeof D=="function"&&(gu(e,n,D,a),b=e.memoizedState),(h=Pn||$d(e,n,h,a,p,b,s))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=b),i.props=a,i.state=b,i.context=s,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Jc(t,e),s=e.memoizedProps,M=Ra(n,s),i.props=M,D=e.pendingProps,p=i.context,b=n.contextType,h=el,typeof b=="object"&&b!==null&&(h=Ae(b)),o=n.getDerivedStateFromProps,(b=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==D||p!==h)&&tf(e,i,a,h),Pn=!1,p=e.memoizedState,i.state=p,ai(e,a,i,l),ni();var C=e.memoizedState;s!==D||p!==C||Pn||t!==null&&t.dependencies!==null&&ls(t.dependencies)?(typeof o=="function"&&(gu(e,n,o,a),C=e.memoizedState),(M=Pn||$d(e,n,M,a,p,C,h)||t!==null&&t.dependencies!==null&&ls(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,C,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,C,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=C),i.props=a,i.state=C,i.context=h,a=M):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,dl(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=_a(e,t.child,null,l),e.child=_a(e,null,n,l)):ie(t,e,n,l),e.memoizedState=i.state,t=e.child):t=Gn(t,e,l),t}function gf(t,e,n,a){return Ta(),e.flags|=256,ie(t,e,n,a),e.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(t){return{baseLanes:t,cachePool:ld()}}function Tu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Je),t}function pf(t,e,n){var a=e.pendingProps,l=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(ge.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(At){if(l?ta(e):ea(),(t=Lt)?(t=Qh(t,an),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Xn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Zr(t),n.return=e,e.child=n,oe=e,Lt=null)):t=null,t===null)throw Jn(e);return To(t)?e.lanes=32:e.lanes=536870912,null}return i=a.children,a=a.fallback,l?(ea(),l=e.mode,i=Cs({mode:"hidden",children:i},l),a=Ea(a,l,n,null),i.return=e,a.return=e,i.sibling=a,e.child=i,a=e.child,a.memoizedState=Eu(n),a.childLanes=Tu(t,s,n),e.memoizedState=wu,ui(null,a)):(ta(e),Cu(e,i))}var o=t.memoizedState;if(o!==null){var h=o.dehydrated;if(h!==null)return hg(t,e,i,s,a,h,o,n)}return l?(ea(),l=a.fallback,i=e.mode,o=t.child,h=o.sibling,a=_n(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&1206910976,h!==null?l=_n(h,l):(l=Ea(l,i,n,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,ui(null,a),a=e.child,l=t.child.memoizedState,l===null?l=Eu(n):(i=l.cachePool,i!==null?(o=Wt._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=ld(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=Tu(t,s,n),e.memoizedState=wu,ui(t.child,a)):(ta(e),n=t.child,t=n.sibling,n=_n(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Cu(t,e){return e=Cs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Cs(t,e){return t=Ne(22,t,null,e),t.lanes=0,t}function Ms(t,e,n){return _a(e,t.child,null,n),t=Cu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hg(t,e,n,a,l,i,s,o){if(n)return e.flags&256?(ta(e),e.flags&=-257,Ms(t,e,o)):e.memoizedState!==null?(ea(),e.child=t.child,e.flags|=128,null):(ea(),i=l.fallback,s=e.mode,l=Cs({mode:"visible",children:l.children},s),i=Ea(i,s,o,null),i.flags|=2,l.return=e,i.return=e,l.sibling=i,e.child=l,_a(e,t.child,null,o),l=e.child,l.memoizedState=Eu(o),l.childLanes=Tu(t,a,o),e.memoizedState=wu,ui(null,l));if(ta(e),To(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var h=a.dgst;return a=h,a!==""&&(l=Error(u(419)),l.stack="",l.digest=a,Pl({value:l,source:null,stack:null})),Ms(t,e,o)}if(te||Ma(t,e,o,!1),a=(o&t.childLanes)!==0,te||a){if($n.current!==null)return Ms(t,e,o);if(a=It,a!==null&&(l=Wo(a,o),l!==0&&l!==s.retryLane))throw s.retryLane=l,wa(t,l),Le(a,t,l),bu;return Eo(i)||Vs(),Ms(t,e,o)}return Eo(i)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,Lt=sn(i.nextSibling),oe=e,At=!0,qn=null,an=!1,t!==null&&Wr(e,t),e=Cu(e,l.children),e.flags|=134221824,e)}function vf(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),as(t.return,e,n)}function bf(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&fs(n)===null&&(e=t),t=t.sibling}return e}function Ss(t,e,n,a,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=l,s.treeForkCount=i)}function Mu(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function Su(t,e,n){var a=e.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var s=ge.current;if(e.flags&128)return li(e,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,li(e,s),l==="backwards"&&t!==null?(Mu(t),ie(t,e,a,n),Mu(t)):ie(t,e,a,n),a=At?Zl:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vf(t,n,e);else if(t.tag===19)vf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":n=bf(e.child),n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null,Mu(e)),Ss(e,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&fs(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Ss(e,!0,n,null,i,a);break;case"together":Ss(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:n=bf(e.child),n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Ss(e,!1,l,n,i,a)}return e.child}function yf(t,e,n){var a=e.pendingProps;return Kn(e,e.type,a.value),ie(t,e,a.children,n),e.child}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ia|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Ma(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(u(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Du(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ls(t)))}function Ag(t,e,n){switch(e.tag){case 3:An(e,e.stateNode.containerInfo),Kn(e,Wt,t.memoizedState.cache),Ta();break;case 27:case 5:U(e);break;case 4:An(e,e.stateNode.containerInfo);break;case 10:Kn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Wc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return ta(e),e.flags|=128,null;a=Ma(t,e,n,!1);var l=e.child.childLanes;return a||(n&l)!==0?pf(t,e,n):(ta(e),t=Gn(t,e,n),t!==null?t.sibling:null)}ta(e);break;case 19:if(e.flags&128)return Su(t,e,n);if(l=(t.flags&128)!==0,a=(n&e.childLanes)!==0,a||(Ma(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return Su(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),li(e,ge.current),a)break;return null;case 22:return e.lanes=0,df(t,e,n,e.pendingProps);case 24:Kn(e,Wt,t.memoizedState.cache)}return Gn(t,e,n)}function wf(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)te=!0;else{if(!Du(t,n)&&(e.flags&128)===0)return te=!1,Ag(t,e,n);te=(t.flags&131072)!==0}else te=!1,At&&(e.flags&1048576)!==0&&Fr(e,Zl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=xa(e.elementType),e.type=t,typeof t=="function")Nc(t)?(a=Ra(t,a),e.tag=1,e=mf(null,e,t,a,n)):(e.tag=0,e=yu(null,e,t,a,n));else{if(t!=null){var l=t.$$typeof;if(l===j){e.tag=11,e=uf(null,e,t,a,n);break t}else if(l===Mt){e.tag=14,e=of(null,e,t,a,n);break t}else if(l===Tt){e.tag=10,e.type=t,e=yf(null,e,n);break t}}throw e=ct(t)||t,Error(u(306,e,""))}}return e;case 0:return yu(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=Ra(a,e.pendingProps),mf(t,e,a,l,n);case 3:t:{if(An(e,e.stateNode.containerInfo),t===null)throw Error(u(387));a=e.pendingProps;var i=e.memoizedState;l=i.element,Jc(t,e),ai(e,a,null,n);var s=e.memoizedState;if(a=s.cache,Kn(e,Wt,a),a!==i.cache&&Hc(e,[Wt],n,!0),ni(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=gf(t,e,a,n);break t}else if(a!==l){l=tn(Error(u(424)),e),Pl(l),e=gf(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Lt=sn(t.firstChild),oe=e,At=!0,qn=null,an=!0,n=rd(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ta(),a===l){e=Gn(t,e,n);break t}ie(t,e,a,n)}e=e.child}return e;case 26:return dl(t,e),t===null?(n=qh(e.type,null,e.pendingProps,null))?e.memoizedState=n:At||(e.stateNode=Mh(e.type,e.pendingProps,Me.current,e)):e.memoizedState=qh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return U(e),t===null&&At&&(a=e.stateNode=Uh(e.type,e.pendingProps,Me.current),oe=e,an=!0,l=Lt,oa(e.type)?(Co=l,Lt=sn(a.firstChild)):Lt=l),ie(t,e,e.pendingProps.children,n),dl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&At&&((l=a=Lt)&&(a=up(a,e.type,e.pendingProps,an),a!==null?(e.stateNode=a,oe=e,Lt=sn(a.firstChild),an=!1,l=!0):l=!1),l||Jn(e)),U(e),l=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,mo(l,i)?a=null:s!==null&&mo(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=eu(t,e,ag,null,null,n),xl._currentValue=l),dl(t,e),ie(t,e,a,n),e.child;case 6:return t===null&&At&&((t=n=Lt)&&(n=op(n,e.pendingProps,an),n!==null?(e.stateNode=n,oe=e,Lt=null,t=!0):t=!1),t||Jn(e)),null;case 13:return pf(t,e,n);case 4:return An(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=_a(e,null,a,n):ie(t,e,a,n),e.child;case 11:return uf(t,e,e.type,e.pendingProps,n);case 7:return a=e.pendingProps,dl(t,e),ie(t,e,a,n),e.child;case 8:return ie(t,e,e.pendingProps.children,n),e.child;case 12:return ie(t,e,e.pendingProps.children,n),e.child;case 10:return yf(t,e,n);case 9:return l=e.type._context,a=e.pendingProps.children,Sa(e),l=Ae(l),a=a(l),e.flags|=1,ie(t,e,a,n),e.child;case 14:return of(t,e,e.type,e.pendingProps,n);case 15:return rf(t,e,e.type,e.pendingProps,n);case 19:return Su(t,e,n);case 31:return fg(t,e,n);case 22:return df(t,e,n,e.pendingProps);case 24:return Sa(e),a=Ae(Wt),t===null?(l=kc(),l===null&&(l=It,i=Uc(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),e.memoizedState={parent:a,cache:l},qc(e),Kn(e,Wt,l)):((t.lanes&n)!==0&&(Jc(t,e),ai(e,null,null,n),ni()),l=t.memoizedState,i=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Kn(e,Wt,a)):(a=i.cache,Kn(e,Wt,a),a!==l.cache&&Hc(e,[Wt],n,!0))),ie(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=t===null?18882560:18874368:At&&es(e),t!==null&&t.memoizedProps.name!==a.name?e.flags|=4194816:dl(t,e),ie(t,e,a.children,n),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function Ln(t){t.flags|=4}function Bu(t,e,n,a,l){var i;if((i=(t.mode&32)!==0)&&(i=n===null?Ph(e,a):Ph(e,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(nh())t.flags|=8192;else throw za=us,Xc}else t.flags&=-16777217}function Ef(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fh(e))if(nh())t.flags|=8192;else throw za=us,Xc}function Ds(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Zo():536870912,t.lanes|=e,gl|=e)}function oi(t,e){if(!At)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function mg(t,e,n){var a=e.pendingProps;switch(Gc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Qt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Nn(Wt),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ll(e)?Ln(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Qc())),Qt(e),null;case 26:var l=e.type,i=e.memoizedState;return t===null?(Ln(e),i!==null?(Qt(e),Ef(e,i)):(Qt(e),Bu(e,l,null,a,n))):i?i!==t.memoizedState?(Ln(e),Qt(e),Ef(e,i)):(Qt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ln(e),Qt(e),Bu(e,l,t,a,n)),null;case 27:if(q(e),n=Me.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ln(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Qt(e),e.subtreeFlags&=-33554433,null}t=Ce.current,ll(e)?$r(e):(t=Uh(l,a,n),e.stateNode=t,Ln(e))}return Qt(e),e.subtreeFlags&=-33554433,null;case 5:if(q(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ln(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Qt(e),e.subtreeFlags&=-33554433,null}if(i=Ce.current,ll(e))$r(e);else{var s=yi(Me.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}i[he]=e,i[Re]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=i;t:switch(ve(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ln(e)}}return Qt(e),e.subtreeFlags&=-33554433,Bu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ln(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(u(166));if(t=Me.current,ll(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=oe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[he]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||wh(t.nodeValue,n)),t||Jn(e,!0)}else t=yi(t).createTextNode(a),t[he]=e,e.stateNode=t}return Qt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=ll(e),n!==null){if(t===null){if(!a)throw Error(u(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(557));t[he]=e}else Ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),t=!1}else n=Qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(ke(e),e):(ke(e),null);if((e.flags&128)!==0)throw Error(u(558))}return Qt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ll(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(u(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[he]=e}else Ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),l=!1}else l=Qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(ke(e),e):(ke(e),null)}return ke(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Ds(e,e.updateQueue),Qt(e),null);case 4:return Fe(),t===null&&oo(e.stateNode.containerInfo),e.flags|=67108864,Qt(e),null;case 10:return Nn(e.type),Qt(e),null;case 19:if($c(e),a=e.memoizedState,a===null)return Qt(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)oi(a,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=fs(t),i!==null){for(e.flags|=128,oi(a,!1),t=i.updateQueue,e.updateQueue=t,Ds(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Kr(n,t),n=n.sibling;return li(e,ge.current&1|2),At&&On(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Qe()>Qs&&(e.flags|=128,l=!0,oi(a,!1),e.lanes=4194304)}else{if(!l)if(t=fs(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Ds(e,t),oi(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!At)return Qt(e),null}else 2*Qe()-a.renderingStartTime>Qs&&n!==536870912&&(e.flags|=128,l=!0,oi(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}if(a.tail!==null){t=a.tail;t:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,i=ge.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||At?li(e,i):(n=i,Ct(me,e),Ct(ge,n),Te===null&&(Te=e)),At&&On(e,a.treeForkCount),t}return Qt(e),null;case 22:case 23:return ke(e),Fc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),n=e.updateQueue,n!==null&&Ds(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&_t(Ba),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Nn(Wt),Qt(e),null;case 25:return null;case 30:return e.flags|=33554432,Qt(e),null}throw Error(u(156,e.tag))}function gg(t,e){switch(Gc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Nn(Wt),Fe(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return q(e),null;case 31:if(e.memoizedState!==null){if(ke(e),e.alternate===null)throw Error(u(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ke(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(u(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $c(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Fe(),null;case 10:return Nn(e.type),null;case 22:case 23:return ke(e),Fc(),t!==null&&_t(Ba),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Nn(Wt),null;case 25:return null;default:return null}}function Tf(t,e){switch(Gc(e),e.tag){case 3:Nn(Wt),Fe();break;case 26:case 27:case 5:q(e);break;case 4:Fe();break;case 31:e.memoizedState!==null&&ke(e);break;case 13:ke(e);break;case 19:$c(e);break;case 10:Nn(e.type);break;case 22:case 23:ke(e),Fc(),t!==null&&_t(Ba);break;case 24:Nn(Wt)}}function ri(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var i=n.create,s=n.inst;a=i(),s.destroy=a}n=n.next}while(n!==l)}}catch(o){Rt(e,e.return,o)}}function na(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var s=a.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,l=e;var h=n,b=o;try{b()}catch(M){Rt(l,h,M)}}}a=a.next}while(a!==i)}}catch(M){Rt(e,e.return,M)}}function Cf(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{fd(e,n)}catch(a){Rt(t,t.return,a)}}}function Mf(t,e,n){n.props=Ra(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Rt(t,e,a)}}function vn(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:var l=t.stateNode,i=xn(t.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=Oh(i)),a=l.ref;break;case 7:if(t.stateNode===null){var s=new Ze(t);w(t.child,!1,sp,s,void 0,void 0),t.stateNode=s}a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(o){Rt(t,e,o)}}function pe(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Rt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Rt(t,e,l)}else n.current=null}function Bs(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)Lh(t.stateNode,e[n])}function Sf(t){for(var e=t.return;e!==null&&(zu(e)&&Lh(t.stateNode,e.stateNode),!xu(e));)e=e.return}function di(t){for(var e=t.return;e!==null&&(zu(e)&&cp(t.stateNode,e.stateNode),!xu(e));)e=e.return}function xu(t){return t.tag===5||t.tag===3||t.tag===27}function zu(t){return t&&t.tag===7&&t.stateNode!==null}function _u(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Rt(t,t.return,l)}}function Ou(t,e,n){try{var a=t.stateNode;Ug(a,t.type,n,e),a[Re]=e}catch(l){Rt(t,t.return,l)}}function Df(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&oa(t.type)||t.tag===4}function Ru(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Df(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,e,n,a){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(l),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mn)),Bs(t,a),St=!0;else if(l!==4&&(l===27&&(Bs(t,a),a=null,oa(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Nu(t,e,n,a),t=t.sibling;t!==null;)Nu(t,e,n,a),t=t.sibling}function xs(t,e,n,a){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?n.insertBefore(l,e):n.appendChild(l),Bs(t,a),St=!0;else if(l!==4&&(l===27&&(Bs(t,a),a=null,oa(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(xs(t,e,n,a),t=t.sibling;t!==null;)xs(t,e,n,a),t=t.sibling}function Bf(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);ve(e,a,n),e[he]=t,e[Re]=n}catch(i){Rt(t,t.return,i)}}var zs=!1,Xe=null;function xf(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(zs=!0)}var bn=null;function zf(){var t=bn;return bn=null,t}var je=0;function fl(t,e,n,a,l){return je=0,_f(t.child,e,n,a,l)}function _f(t,e,n,a,l){for(var i=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(a!==null){var o=vo(s);a.push(o),o.view&&(i=!0)}else i||vo(s).view&&(i=!0);zs=!0,zh(s,je===0?e:e+"_"+je,n),je++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||_f(t.child,e,n,a,l)&&(i=!0));t=t.sibling}return i}function yn(t,e){for(;t!==null;)t.tag===5?_h(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||yn(t.child,e)),t=t.sibling}function _s(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(_s(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(u(544));var n=e.name;e=zn(e.default,e.share),e!=="none"&&(fl(t,n,e,null,!1)||yn(t.child,!1))}t=t.sibling}}function ju(t,e){if(t.tag===30){var n=t.stateNode,a=t.memoizedProps,l=xn(a,n),i=zn(a.default,n.paired?a.share:a.enter);i!=="none"?fl(t,l,i,null,!1)?(_s(t),n.paired||e||yl(t,a.onEnter)):yn(t.child,!1):_s(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ju(t,e),t=t.sibling;else _s(t)}function Iu(t){if(Xe!==null&&Xe.size!==0){var e=Xe;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=e.get(a);if(l!==void 0){var i=zn(n.default,n.share);if(i!=="none"&&(fl(t,a,i,null,!1)?(i=t.stateNode,l.paired=i,i.paired=l,yl(t,n.onShare)):yn(t.child,!1)),e.delete(a),e.size===0)break}}}Iu(t)}t=t.sibling}}}function Gu(t){if(t.tag===30){var e=t.memoizedProps,n=xn(e,t.stateNode),a=Xe!==null?Xe.get(n):void 0,l=zn(e.default,a!==void 0?e.share:e.exit);l!=="none"&&(fl(t,n,l,null,!1)?a!==void 0?(l=t.stateNode,a.paired=l,l.paired=a,Xe.delete(n),yl(t,e.onShare)):yl(t,e.onExit):yn(t.child,!1)),Xe!==null&&Iu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gu(t),t=t.sibling;else Xe!==null&&Iu(t)}function Of(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=xn(e,t.stateNode);e=zn(e.default,e.update),t.flags&=-5,e!=="none"&&fl(t,n,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Of(t);t=t.sibling}}function Lu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,yn(t.child,!1))}Lu(t)}t=t.sibling}}function Os(t){if(t.tag===30)t.stateNode.paired=null,yn(t.child,!1),Lu(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Os(t),t=t.sibling;else Lu(t)}function Rf(t){for(t=t.child;t!==null;)t.tag===30?yn(t.child,!1):(t.subtreeFlags&33554432)!==0&&Rf(t),t=t.sibling}function Qu(t,e,n,a,l,i,s){for(var o=!1;e!==null;){if(e.tag===5){var h=e.stateNode;if(i!==null&&je<i.length){var b=i[je],M=vo(h);(b.view||M.view)&&(o=!0);var D;if(D=(t.flags&4)===0)if(M.clip)D=!0;else{D=b.rect;var p=M.rect;D=D.y!==p.y||D.x!==p.x||D.height!==p.height||D.width!==p.width}D&&(t.flags|=4),M.abs?M=!b.abs:(b=b.rect,M=M.rect,M=b.height!==M.height||b.width!==M.width),M&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&zh(h,je===0?n:n+"_"+je,l),o&&(t.flags&4)!==0||(bn===null&&(bn=[]),bn.push(h,je===0?a:a+"_"+je,e.memoizedProps)),je++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:Qu(t,e.child,n,a,l,i,s)&&(o=!0));e=e.sibling}return o}function Nf(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=t.stateNode,l=xn(n,a),i=zn(n.default,n.update),s;s=t.memoizedState,t.memoizedState=null,a=t;var o=t.child;je=0,l=Qu(a,o,l,l,i,s,!1),(t.flags&4)!==0&&l&&yl(t,n.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Nf(t);t=t.sibling}}var re=!1,xt=!1,wn=!1,Yu=!1,jf=typeof WeakSet=="function"?WeakSet:Set,de=null,En=!1,fi=!1,Rs=!1,Hu=!1;function pg(t,e,n){if(t=t.containerInfo,ho=zl,t=Lr(t),Dc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break t}var o=0,h=-1,b=-1,M=0,D=0,p=t,C=null;e:for(;;){for(var I;p!==a||i!==0&&p.nodeType!==3||(h=o+i),p!==s||l!==0&&p.nodeType!==3||(b=o+l),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)C=p,p=I;for(;;){if(p===t)break e;if(C===a&&++M===i&&(h=o),C===s&&++D===l&&(b=o),(I=p.nextSibling)!==null)break;p=C,C=p.parentNode}p=I}a=h===-1||b===-1?null:{start:h,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ao={focusedElem:t,selectionRange:a},zl=!1,n=(n&335544064)===n,de=e,e=n?9270:1024;de!==null;){if(t=de,n&&(a=t.deletions,a!==null))for(i=0;i<a.length;i++)n&&Gu(a[i]);if(t.alternate===null&&(t.flags&2)!==0)n&&xf(t),Ns(n);else{if(t.tag===22){if(a=t.alternate,t.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&Gu(a),Ns(n);continue}else if(a!==null&&a.memoizedState!==null){n&&xf(t),Ns(n);continue}}a=t.child,(t.subtreeFlags&e)!==0&&a!==null?(a.return=t,de=a):(n&&Of(t),Ns(n))}}Xe=null}function Ns(t){for(;de!==null;){var e=de,n=t,a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var i=e.stateNode;try{var s=Ra(e.type,l);n=i.getSnapshotBeforeUpdate(s,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(o){Rt(e,e.return,o)}}break;case 3:if((l&1024)!==0){if(a=e.stateNode.containerInfo,n=a.nodeType,n===9)wo(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":wo(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=xn(a.memoizedProps,a.stateNode),l=e.memoizedProps,l=zn(l.default,l.update),l!=="none"&&fl(a,n,l,a.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(u(163))}if(a=e.sibling,a!==null){a.return=e.return,de=a;break}de=e.return}}function If(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(t,n),a&4&&ri(5,n);break;case 1:if(Tn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Rt(n,n.return,s)}else{var l=Ra(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Rt(n,n.return,s)}}a&64&&Cf(n),a&512&&vn(n,n.return);break;case 3:if(Tn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{fd(t,e)}catch(s){Rt(n,n.return,s)}}break;case 27:e===null&&a&4&&Bf(n);case 26:case 5:Tn(t,n),e===null&&a&4&&_u(n),a&512&&vn(n,n.return);break;case 12:Tn(t,n);break;case 31:Tn(t,n),a&4&&Yf(t,n);break;case 13:Tn(t,n),a&4&&Hf(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=xg.bind(null,n),rp(t,n))));break;case 22:if(a=n.memoizedState!==null||re,!a){var i=e!==null&&e.memoizedState!==null||xt;e=re,l=xt,re=a,(xt=i)&&!l?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),dn(t,n,a)):Tn(t,n),re=e,xt=l}break;case 30:Tn(t,n),a&512&&vn(n,n.return);break;case 7:a&512&&vn(n,n.return);default:Tn(t,n)}}function Uu(t,e){for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=t.stateNode,i=t.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(h){Rt(t,t.return,h)}Vu(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,St=!0}catch(h){Rt(t,t.return,h)}break;case 18:try{var o=t.stateNode;e?xh(o,!0):xh(t.stateNode,!1)}catch(h){Rt(t,t.return,h)}break;case 22:case 23:t.memoizedState===null&&Uu(t,e);break;default:Uu(t,e)}}function Vu(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var n=t,a=e;switch(n.tag){case 4:Gf(n,a);break t;case 22:n.memoizedState===null&&Vu(n,a);break t;default:Vu(n,a)}}t=t.sibling}}function Lf(t){var e=t.alternate;e!==null&&(t.alternate=null,Lf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,Ie=!1;function on(t,e,n){for(n=n.child;n!==null;)Qf(t,e,n),n=n.sibling}function Qf(t,e,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 26:xt||pe(n,e),on(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!xt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||pe(n,e),di(n);var a=Ut,l=Ie;oa(n.type)&&(Ut=n.stateNode,Ie=!1),on(t,e,n),Vh(n.stateNode,n.type,n.memoizedProps),Ut=a,Ie=l;break;case 5:xt||pe(n,e),di(n);case 6:if(n.tag===6&&di(n),a=Ut,l=Ie,Ut=null,on(t,e,n),Ut=a,Ie=l,Ut!==null)if(Ie)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(n.stateNode),St=!0}catch(i){Rt(n,e,i)}else try{Ut.removeChild(n.stateNode),St=!0}catch(i){Rt(n,e,i)}break;case 18:Ut!==null&&(Ie?(t=Ut,Bh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),_l(t)):Bh(Ut,n.stateNode));break;case 4:a=Ut,l=Ie,Ut=n.stateNode.containerInfo,Ie=!0,on(t,e,n),Ut=a,Ie=l;break;case 0:case 11:case 14:case 15:na(2,n,e),xt||na(4,n,e),on(t,e,n);break;case 1:xt||(pe(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Mf(n,e,a)),on(t,e,n);break;case 21:on(t,e,n);break;case 22:xt=(a=xt)||n.memoizedState!==null,on(t,e,n),xt=a;break;case 30:pe(n,e),on(t,e,n);break;case 7:xt||pe(n,e),on(t,e,n);break;default:on(t,e,n)}}function Yf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_l(t)}catch(n){Rt(e,e.return,n)}}}function Hf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_l(t)}catch(n){Rt(e,e.return,n)}}function vg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new jf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new jf),e;default:throw Error(u(435,t.tag))}}function js(t,e){var n=vg(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var l=zg.bind(null,t,a);a.then(l,l)}})}function Be(t,e,n){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],s=t,o=e,h=o;t:for(;h!==null;){switch(h.tag){case 27:if(oa(h.type)){Ut=h.stateNode,Ie=!1;break t}break;case 5:Ut=h.stateNode,Ie=!1;break t;case 3:case 4:Ut=h.stateNode.containerInfo,Ie=!0;break t}h=h.return}if(Ut===null)throw Error(u(160));Qf(s,o,i),Ut=null,Ie=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Uf(e,t,n),e=e.sibling}var rn=null;function Uf(t,e,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var s=a[i];s.ref.impl=s.nextImpl}Be(e,t,n),xe(t),l&4&&(na(3,t,t.return),ri(3,t),na(5,t,t.return));break;case 1:Be(e,t,n),xe(t),l&512&&(xt||a===null||pe(a,a.return)),l&64&&re&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(i=rn,Be(e,t,n),xe(t),l&512&&(xt||a===null||pe(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null)if(re)t.stateNode=Mh(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,n=t.memoizedProps,l=i.ownerDocument||i;e:switch(e){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Ll]||a[he]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(e),l.head.insertBefore(a,l.querySelector("head > title"))),ve(a,e,n),a[he]=t,ue(a),e=a;break t;case"link":if(i=Zh("link","href",l).get(e+(n.href||""))){for(s=0;s<i.length;s++)if(a=i[s],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(s,1);break e}}a=l.createElement(e),ve(a,e,n),l.head.appendChild(a);break;case"meta":if(i=Zh("meta","content",l).get(e+(n.content||""))){for(s=0;s<i.length;s++)if(a=i[s],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(s,1);break e}}a=l.createElement(e),ve(a,e,n),l.head.appendChild(a);break;default:throw Error(u(468,e))}a[he]=t,ue(a),e=a}t.stateNode=e}else re||Bo(i,t.type,t.stateNode);else t.stateNode=Kh(i,n,t.memoizedProps);else l!==n?(l===null?(e=a.stateNode,e===null||xt||e.parentNode.removeChild(e)):l.count--,n===null?re||Bo(i,t.type,t.stateNode):Kh(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Ou(t,t.memoizedProps,a.memoizedProps);break;case 27:Be(e,t,n),xe(t),l&512&&(xt||a===null||pe(a,a.return)),a!==null&&l&4&&Ou(t,t.memoizedProps,a.memoizedProps);break;case 5:if(i=wn,wn=!1,Be(e,t,n),wn=i,xe(t),l&512&&(xt||a===null||pe(a,a.return)),t.flags&32){e=t.stateNode;try{Ka(e,""),St=!0}catch(M){Rt(t,t.return,M)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Ou(t,e,a!==null?a.memoizedProps:e)),l&1024&&(Yu=!0);break;case 6:if(Be(e,t,n),xe(t),l&4){if(t.stateNode===null)throw Error(u(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,St=!0}catch(M){Rt(t,t.return,M)}}break;case 3:if(St=!1,Ps=null,i=rn,rn=wi(e.containerInfo),Be(e,t,n),rn=i,xe(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(e.containerInfo)}catch(M){Rt(t,t.return,M)}Yu&&(Yu=!1,Vf(t)),St=!1;break;case 4:l=wn,wn=re,a=ur(),i=rn,rn=wi(t.stateNode.containerInfo),Be(e,t,n),xe(t),rn=i,St&&fi&&(Rs=!0),St=a,wn=l;break;case 12:Be(e,t,n),xe(t);break;case 31:Be(e,t,n),xe(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,js(t,e)));break;case 13:Be(e,t,n),xe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ls=Qe()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,js(t,e)));break;case 22:i=t.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var o=re,h=xt,b=wn;re=o||i,wn=b||i,xt=h||s,Be(e,t,n),xt=h,wn=b,re=o,xe(t),l&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||a===null||s||re||xt||(e=s||xt,n=re,a=xt,re=i||re,xt=e,aa(t,2),re=n,xt=a),!i&&wn||Uu(t,i)),l&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,js(t,n))));break;case 19:Be(e,t,n),xe(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,js(t,e)));break;case 30:l&512&&(xt||a===null||pe(a,a.return)),l=ur(),i=fi,s=(n&335544064)===n,o=t.memoizedProps,fi=s&&zn(o.default,o.update)!=="none",Be(e,t,n),xe(t),s&&a!==null&&St&&(t.flags|=4),fi=i,St=l;break;case 21:break;case 7:l&512&&(xt||a===null||pe(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=t);default:Be(e,t,n),xe(t)}}function xe(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Df(a)){n=a;break}a=a.return}a=null;for(var l=t.return;l!==null;){if(zu(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(xu(l))break;l=l.return}var s=a;if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,h=Ru(t);xs(t,h,o,s);break;case 5:var b=n.stateNode;n.flags&32&&(Ka(b,""),n.flags&=-33);var M=Ru(t);xs(t,M,b,s);break;case 3:case 4:var D=n.stateNode.containerInfo,p=Ru(t);Nu(t,p,D,s);break;default:throw Error(u(161))}}catch(C){Rt(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Vf(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,zl=!0,e.reset(),zl=!1),t=t.sibling}}function hl(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)kf(e,t),e=e.sibling;else Nf(e)}function kf(t,e){var n=t.alternate;if(n===null)ju(t,!1);else switch(t.tag){case 3:if(Hu=En=!1,zf(),hl(e,t),!En&&!Rs){if(t=bn,t!==null)for(var a=0;a<t.length;a+=3){n=t[a];var l=t[a+1];_h(n,t[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hu=!0}bn=null;break;case 5:hl(e,t);break;case 4:a=En,En=!1,hl(e,t),En&&(Rs=!0),En=a;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?ju(t,!1):hl(e,t));break;case 30:a=En,l=zf(),En=!1,hl(e,t),En&&(t.flags|=4);var i=t.memoizedProps,s=t.stateNode;e=xn(i,s),s=xn(n.memoizedProps,s);var o=zn(i.default,i.update);o==="none"?e=!1:(i=n.memoizedState,n.memoizedState=null,n=t.child,je=0,e=Qu(t,n,e,s,o,i,!0),je!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(yl(t,t.memoizedProps.onUpdate),bn=l):l!==null&&(l.push.apply(l,bn),bn=l),En=(t.flags&32)!==0?!0:a;break;default:hl(e,t)}}function Tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)If(t,e.alternate,e),e=e.sibling}function aa(t,e){for(t=t.child;t!==null;){var n=t,a=e;switch(n.tag){case 0:case 11:case 14:case 15:na(4,n,n.return),aa(n,a);break;case 1:pe(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Mf(n,n.return,l),aa(n,a);break;case 27:(a&2)!==0&&Vh(n.stateNode,n.type,n.memoizedProps);case 5:pe(n,n.return),n.tag!==5&&n.tag!==27||di(n),aa(n,a);break;case 6:di(n);break;case 26:pe(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||xt||l.parentNode.removeChild(l),aa(n,a);break;case 22:n.memoizedState===null&&aa(n,a);break;case 30:pe(n,n.return),aa(n,a);break;case 7:pe(n,n.return);default:aa(n,a)}t=t.sibling}}function dn(t,e,n){for(n=(e.subtreeFlags&8772)!==0?n:n&-2,e=e.child;e!==null;){var a=e.alternate,l=t,i=e,s=i.flags,o=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:dn(l,i,n),ri(4,i);break;case 1:if(dn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Rt(a,a.return,M)}if(a=i,l=a.updateQueue,l!==null){var h=a.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)dd(b[l],h)}catch(M){Rt(a,a.return,M)}}o&&s&64&&Cf(i),vn(i,i.return);break;case 27:(n&2)!==0&&Bf(i);case 5:i.tag!==5&&i.tag!==27||Sf(i),dn(l,i,n),o&&a===null&&s&4&&_u(i),vn(i,i.return);break;case 6:Sf(i);break;case 26:h=i.stateNode,i.memoizedState!==null||h===null||re||Bo(wi(h.ownerDocument),i.type,h),dn(l,i,n),o&&a===null&&s&4&&_u(i),vn(i,i.return);break;case 12:dn(l,i,n);break;case 31:dn(l,i,n),o&&s&4&&Yf(l,i);break;case 13:dn(l,i,n),o&&s&4&&Hf(l,i);break;case 22:i.memoizedState===null&&dn(l,i,n),vn(i,i.return);break;case 30:dn(l,i,n),vn(i,i.return);break;case 7:vn(i,i.return);default:dn(l,i,n)}e=e.sibling}}function ku(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Fl(n))}function Xu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fl(t))}function ln(t,e,n,a){var l=(n&335544064)===n;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)Xf(t,e,n,a),e=e.sibling;else l&&Rf(e)}function Xf(t,e,n,a){var l=(n&335544064)===n;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Os(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:ln(t,e,n,a),i&2048&&ri(9,e);break;case 1:ln(t,e,n,a);break;case 3:ln(t,e,n,a),l&&Hu&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Fl(i)));break;case 12:if(i&2048){ln(t,e,n,a),i=e.stateNode;try{var s=e.memoizedProps,o=s.id,h=s.onPostCommit;typeof h=="function"&&h(o,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(b){Rt(e,e.return,b)}}else ln(t,e,n,a);break;case 31:ln(t,e,n,a);break;case 13:ln(t,e,n,a);break;case 23:break;case 22:s=e.stateNode,o=e.alternate,e.memoizedState!==null?(l&&o!==null&&o.memoizedState===null&&Os(o),s._visibility&2?ln(t,e,n,a):hi(t,e)):(l&&o!==null&&o.memoizedState!==null&&Os(e),s._visibility&2?ln(t,e,n,a):(s._visibility|=2,Al(t,e,n,a,(e.subtreeFlags&10256)!==0||!1))),i&2048&&ku(o,e);break;case 24:ln(t,e,n,a),i&2048&&Xu(e.alternate,e);break;case 30:l&&(i=e.alternate,i!==null&&(yn(i.child,!0),yn(e.child,!0))),ln(t,e,n,a);break;default:ln(t,e,n,a)}}function Al(t,e,n,a,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,s=e,o=n,h=a,b=s.flags;switch(s.tag){case 0:case 11:case 15:Al(i,s,o,h,l),ri(8,s);break;case 23:break;case 22:var M=s.stateNode;s.memoizedState!==null?M._visibility&2?Al(i,s,o,h,l):hi(i,s):(M._visibility|=2,Al(i,s,o,h,l)),l&&b&2048&&ku(s.alternate,s);break;case 24:Al(i,s,o,h,l),l&&b&2048&&Xu(s.alternate,s);break;default:Al(i,s,o,h,l)}e=e.sibling}}function hi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:hi(n,a),l&2048&&ku(a.alternate,a);break;case 24:hi(n,a),l&2048&&Xu(a.alternate,a);break;default:hi(n,a)}e=e.sibling}}var Na=8192;function ja(t,e,n){if(t.subtreeFlags&Na)for(t=t.child;t!==null;)qf(t,e,n),t=t.sibling}function qf(t,e,n){switch(t.tag){case 26:ja(t,e,n),t.flags&Na&&(t.memoizedState!==null?Cp(n,rn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&$h(n,t)));break;case 5:ja(t,e,n),t.flags&Na&&(t=t.stateNode,(e&335544128)===e&&$h(n,t));break;case 3:case 4:var a=rn;rn=wi(t.stateNode.containerInfo),ja(t,e,n),rn=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Na,Na=16777216,ja(t,e,n),Na=a):ja(t,e,n));break;case 30:if((t.flags&Na)!==0&&(a=t.memoizedProps.name,a!=null&&a!=="auto")){var l=t.stateNode;l.paired=null,Xe===null&&(Xe=new Map),Xe.set(a,l)}ja(t,e,n);break;default:ja(t,e,n)}}function Jf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ai(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];de=a,Zf(a,t)}Jf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kf(t),t=t.sibling}function Kf(t){switch(t.tag){case 0:case 11:case 15:Ai(t),t.flags&2048&&na(9,t,t.return);break;case 3:Ai(t);break;case 12:Ai(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Is(t)):Ai(t);break;default:Ai(t)}}function Is(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];de=a,Zf(a,t)}Jf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:na(8,e,e.return),Is(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Is(e));break;default:Is(e)}t=t.sibling}}function Zf(t,e){for(;de!==null;){var n=de;switch(n.tag){case 0:case 11:case 15:na(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,de=a;else t:for(n=t;de!==null;){a=de;var l=a.sibling,i=a.return;if(Lf(a),a===n){de=null;break t}if(l!==null){l.return=i,de=l;break t}de=i}}}var bg={getCacheForType:function(t){var e=Ae(Wt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Ae(Wt).controller.signal}},yg=typeof WeakMap=="function"?WeakMap:Map,Dt=0,It=null,mt=null,pt=0,Ot=0,qe=null,la=!1,ml=!1,qu=!1,Qn=0,Kt=0,ia=0,Ia=0,Gs=0,Je=0,gl=0,mi=null,Ge=null,Ju=!1,Ls=0,Pf=0,Qs=1/0,Ys=null,sa=null,kt=0,fn=null,Ga=null,Cn=0,Ku=0,Zu=null,Ff=null,pl=null,vl=null,bl=null,gi=0,Hs=null;function Ke(){return(Dt&2)!==0&&pt!==0?pt&-pt:Q.T!==null?io():$o()}function Wf(){if(Je===0)if((pt&536870912)===0||At){var t=ji;ji<<=1,(ji&3932160)===0&&(ji=262144),Je=t}else Je=536870912;return t=me.current,t!==null&&(t.flags|=32),Je}function yl(t,e){if(e!=null){var n=t.stateNode,a=n.ref;a===null&&(a=n.ref=Oh(xn(t.memoizedProps,n))),vl===null&&(vl=[]),vl.push(e.bind(null,a))}}function Le(t,e,n){(t===It&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(wl(t,0),ca(t,pt,Je,!1)),Gl(t,n),((Dt&2)===0||t!==It)&&(t===It&&((Dt&2)===0&&(Ia|=n),Kt===4&&ca(t,pt,Je,!1)),Mn(t))}function $f(t,e,n){if((Dt&6)!==0)throw Error(u(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Il(t,e),l=a?Tg(t,e):Fu(t,e,!0),i=a;do{if(l===0){ml&&!a&&ca(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!wg(n)){l=Fu(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var o=t;l=mi;var h=o.current.memoizedState.isDehydrated;if(h&&(wl(o,s).flags|=256),s=Fu(o,s,!1),s!==2&&s!==6){if(qu&&!h){o.errorRecoveryDisabledLanes|=i,Ia|=i,l=4;break t}i=Ge,Ge=l,i!==null&&(Ge===null?Ge=i:Ge.push.apply(Ge,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){wl(t,0),ca(t,e,0,!0);break}t:{switch(a=t,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ca(a,e,Je,!la);break t;case 2:Ge=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(l=Ls+300-Qe(),10<l)){if(ca(a,e,Je,!la),Gi(a,0,!0)!==0)break t;Cn=e,a.timeoutHandle=po(th.bind(null,a,n,Ge,Ys,Ju,e,Je,Ia,gl,la,i,"Throttled",-0,0),l);break t}th(a,n,Ge,Ys,Ju,e,Je,Ia,gl,la,i,null,-0,0)}}break}while(!0);Mn(t)}function th(t,e,n,a,l,i,s,o,h,b,M,D,p,C){t.timeoutHandle=-1;var I=e.subtreeFlags,V=(i&335544064)===i;if(D=null,(V||I&8192||(I&16785408)===16785408)&&(D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Xe=null,qf(e,i,D),V&&(I=D,V=t.containerInfo,V=(V.nodeType===9?V:V.ownerDocument).__reactViewTransition,V!=null&&(I.count++,I.waitingForViewTransition=!0,I=Ci.bind(I),V.finished.then(I,I))),I=(i&62914560)===i?Ls-Qe():(i&4194048)===i?Pf-Qe():0,I=Mp(D,I),I!==null)){Cn=i,t.cancelPendingCommit=I(uh.bind(null,t,e,i,n,a,l,s,o,h,b,M,D,null,p,C)),ca(t,i,s,!b);return}uh(t,e,i,n,a,l,s,o,h,b,M,D)}function wg(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Ve(i(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ca(t,e,n,a){e=Ko(t,e),e&=~Gs,e&=~Ia,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var i=31-He(l),s=1<<i;a[i]=-1,l&=~s}n!==0&&Po(t,n,e)}function Us(){return(Dt&6)===0?(pi(0),!1):!0}function Pu(){if(mt!==null){if(Ot===0)var t=mt.return;else t=mt,Rn=Ca=null,lu(t),cl=null,ti=0,t=mt;for(;t!==null;)Tf(t.alternate,t),t=t.return;mt=null}}function wl(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,Xg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Cn=0,Pu(),It=t,mt=n=_n(t.current,null),pt=e,Ot=0,qe=null,la=!1,ml=Il(t,e),qu=!1,gl=Je=Gs=Ia=ia=Kt=0,Ge=mi=null,Ju=!1,Qn=Ko(t,e),Pi(),n}function eh(t,e){dt=null,Q.H=ws,e===sl||e===cs?(e=cd(),Ot=3):e===Xc?(e=cd(),Ot=4):Ot=e===bu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qe=e,mt===null&&(Kt=1,Es(t,tn(e,t.current)))}function nh(){var t=me.current;return t===null?!0:(pt&4194048)===pt?Te===null:(pt&62914560)===pt||(pt&536870912)!==0?t===Te:!1}function ah(){var t=Q.H;return Q.H=ws,t===null?ws:t}function lh(){var t=Q.A;return Q.A=bg,t}function Vs(){Kt=4,la||(pt&4194048)!==pt&&me.current!==null||(ml=!0),(ia&134217727)===0&&(Ia&134217727)===0||It===null||ca(It,pt,Je,!1)}function Fu(t,e,n){var a=Dt;Dt|=2;var l=ah(),i=lh();(It!==t||pt!==e)&&(Ys=null,wl(t,e)),e=!1;var s=Kt;t:do try{if(Ot!==0&&mt!==null){var o=mt,h=qe;switch(Ot){case 8:Pu(),s=6;break t;case 3:case 2:case 9:case 6:me.current===null&&(e=!0);var b=Ot;if(Ot=0,qe=null,El(t,o,h,b),n&&ml){s=0;break t}break;default:b=Ot,Ot=0,qe=null,El(t,o,h,b)}}Eg(),s=Kt;break}catch(M){eh(t,M)}while(!0);return e&&t.shellSuspendCounter++,Rn=Ca=null,Dt=a,Q.H=l,Q.A=i,mt===null&&(It=null,pt=0,Pi()),s}function Eg(){for(;mt!==null;)ih(mt)}function Tg(t,e){var n=Dt;Dt|=2;var a=ah(),l=lh();It!==t||pt!==e?(Ys=null,Qs=Qe()+500,wl(t,e)):ml=Il(t,e);t:do try{if(Ot!==0&&mt!==null){e=mt;var i=qe;e:switch(Ot){case 1:Ot=0,qe=null,El(t,e,i,1);break;case 2:case 9:if(id(i)){Ot=0,qe=null,sh(e);break}e=function(){Ot!==2&&Ot!==9||It!==t||(Ot=7),Mn(t)},i.then(e,e);break t;case 3:Ot=7;break t;case 4:Ot=5;break t;case 7:id(i)?(Ot=0,qe=null,sh(e)):(Ot=0,qe=null,El(t,e,i,7));break;case 5:var s=null;switch(mt.tag){case 26:s=mt.memoizedState;case 5:case 27:var o=mt;if(s?Fh(s):o.stateNode.complete){Ot=0,qe=null;var h=o.sibling;if(h!==null)mt=h;else{var b=o.return;b!==null?(mt=b,ks(b)):mt=null}break e}}Ot=0,qe=null,El(t,e,i,5);break;case 6:Ot=0,qe=null,El(t,e,i,6);break;case 8:Pu(),Kt=6;break t;default:throw Error(u(462))}}Cg();break}catch(M){eh(t,M)}while(!0);return Rn=Ca=null,Q.H=a,Q.A=l,Dt=n,mt!==null?0:(It=null,pt=0,Pi(),Kt)}function Cg(){for(;mt!==null&&!Ua();)ih(mt)}function ih(t){var e=wf(t.alternate,t,Qn);t.memoizedProps=t.pendingProps,e===null?ks(t):mt=e}function sh(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Af(n,e,e.pendingProps,e.type,void 0,pt);break;case 11:e=Af(n,e,e.pendingProps,e.type.render,e.ref,pt);break;case 5:lu(e);var a=e;a===oe&&(At?(ns(a),a.tag===5&&a.stateNode!=null&&(Lt=a.stateNode)):(ns(a),At=!0));default:Tf(n,e),e=mt=Kr(e,Qn),e=wf(n,e,Qn)}t.memoizedProps=t.pendingProps,e===null?ks(t):mt=e}function El(t,e,n,a){Rn=Ca=null,lu(e),cl=null,ti=0;var l=e.return;try{if(dg(t,l,e,n,pt)){Kt=1,Es(t,tn(n,t.current)),mt=null;return}}catch(i){if(l!==null)throw mt=l,i;Kt=1,Es(t,tn(n,t.current)),mt=null;return}e.flags&32768?(At||a===1?t=!0:ml||(pt&536870912)!==0?t=!1:(la=t=!0,(a===2||a===9||a===3||a===6)&&(a=me.current,a!==null&&a.tag===13&&(a.flags|=16384))),ch(e,t)):ks(e)}function ks(t){var e=t;do{if((e.flags&32768)!==0){ch(e,la);return}t=e.return;var n=mg(e.alternate,e,Qn);if(n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Kt===0&&(Kt=5)}function ch(t,e){do{var n=gg(t.alternate,t);if(n!==null){n.flags&=32767,mt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){mt=t;return}mt=t=n}while(t!==null);Kt=6,mt=null}function uh(t,e,n,a,l,i,s,o,h,b,M,D){t.cancelPendingCommit=null;do Xs();while(kt!==0);if((Dt&6)!==0)throw Error(u(327));if(e!==null){if(e===t.current)throw Error(u(177));t===It&&(mt=It=null,pt=0),Ga=e,fn=t,Cn=n,Zu=l,Ff=a,Mg(t,e,n,s,o,h,D)}}function Mg(t,e,n,a,l,i,s){var o=e.lanes|e.childLanes;if(Ku=o,o|=Oc,FA(t,n,o,a,l,i),vl=null,(n&335544064)===n?(bl=$m(t),a=10262):(bl=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(t.callbackNode=null,t.callbackPriority=0,_g(Ri,function(){return eo(),null})):(t.callbackNode=null,t.callbackPriority=0),zs=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null,l=J.p,J.p=2,i=Dt,Dt|=4;try{pg(t,e,n)}finally{Dt=i,J.p=l,Q.T=a}}kt=1,zs?pl=Fg(s,t.containerInfo,bl,Wu,$u,Dg,to,eo,Sg):(Wu(),$u(),to())}function Sg(t){if(kt!==0){var e=fn.onRecoverableError;e(t,{componentStack:null})}}function Dg(){kt===3&&(kt=0,kf(Ga,fn),kt=4)}function Wu(){if(kt===1){kt=0;var t=fn,e=Ga,n=Cn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null;var l=J.p;J.p=2;var i=Dt;Dt|=4;try{fi=Rs=!1,Uf(e,t,n),n=Ao;var s=Lr(t.containerInfo),o=n.focusedElem,h=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&Gr(o.ownerDocument.documentElement,o)){if(h!==null&&Dc(o)){var b=h.start,M=h.end;if(M===void 0&&(M=b),"selectionStart"in o)o.selectionStart=b,o.selectionEnd=Math.min(M,o.value.length);else{var D=o.ownerDocument||document,p=D&&D.defaultView||window;if(p.getSelection){var C=p.getSelection(),I=o.textContent.length,V=Math.min(h.start,I),ft=h.end===void 0?V:Math.min(h.end,I);!C.extend&&V>ft&&(s=ft,ft=V,V=s);var v=Ir(o,V),m=Ir(o,ft);if(v&&m&&(C.rangeCount!==1||C.anchorNode!==v.node||C.anchorOffset!==v.offset||C.focusNode!==m.node||C.focusOffset!==m.offset)){var T=D.createRange();T.setStart(v.node,v.offset),C.removeAllRanges(),V>ft?(C.addRange(T),C.extend(m.node,m.offset)):(T.setEnd(m.node,m.offset),C.addRange(T))}}}}for(D=[],C=o;C=C.parentNode;)C.nodeType===1&&D.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<D.length;o++){var S=D[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}zl=!!ho,Ao=ho=null}finally{Dt=i,J.p=l,Q.T=a}}t.current=e,kt=2}}function $u(){if(kt===2){kt=0;var t=fn,e=Ga,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Q.T,Q.T=null;var a=J.p;J.p=2;var l=Dt;Dt|=4;try{If(t,e.alternate,e)}finally{Dt=l,J.p=a,Q.T=n}}kt=3}}function to(){if(kt===4||kt===3){kt=0;var t=pl;pl=null,Oi();var e=fn,n=Ga,a=Cn,l=Ff,i=(a&335544064)===a?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?kt=5:(kt=0,Ga=fn=null,oh(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(sa=null),oc(a),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(jl,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=Q.T,i=J.p,J.p=2,Q.T=null;try{for(var s=e.onRecoverableError,o=0;o<l.length;o++){var h=l[o];s(h.value,{componentStack:h.stack})}}finally{Q.T=n,J.p=i}}if(l=vl,s=bl,bl=null,l!==null&&(vl=null,s===null&&(s=[]),t!==null))for(h=0;h<l.length;h++)n=(0,l[h])(s),n!==void 0&&t.finished.finally(n);(Cn&3)!==0&&Xs(),Mn(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Hs?gi++:(gi=0,Hs=e):(gi=0,Hs=null),pi(0)}}function oh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Fl(e)))}function Xs(){return pl!==null&&(pl.skipTransition(),pl=null),Wu(),$u(),to(),eo()}function eo(){if(kt!==5)return!1;var t=fn,e=Ku;Ku=0;var n=oc(Cn),a=Q.T,l=J.p;try{J.p=32>n?32:n,Q.T=null,n=Zu,Zu=null;var i=fn,s=Cn;if(kt=0,Ga=fn=null,Cn=0,(Dt&6)!==0)throw Error(u(331));var o=Dt;if(Dt|=4,Kf(i.current),Xf(i,i.current,s,n),Dt=o,pi(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(jl,i)}catch{}return!0}finally{J.p=l,Q.T=a,oh(t,e)}}function rh(t,e,n){e=tn(n,e),e=vu(t.stateNode,e,2),t=Wn(t,e,2),t!==null&&(Gl(t,2),Mn(t))}function Rt(t,e,n){if(t.tag===3)rh(t,t,n);else for(;e!==null;){if(e.tag===3){rh(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))){t=tn(n,t),n=sf(2),a=Wn(e,n,2),a!==null&&(cf(n,a,e,t),Gl(a,2),Mn(a));break}}e=e.return}}function no(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new yg;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(qu=!0,l.add(n),t=Bg.bind(null,t,e,n),e.then(t,t))}function Bg(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,It===t&&(pt&n)===n&&((Kt===4||Kt===3&&(pt&62914560)===pt&&300>Qe()-Ls)&&(Dt&2)===0?wl(t,0):Gs|=n,gl===pt&&(gl=0)),Mn(t)}function dh(t,e){e===0&&(e=Zo()),t=wa(t,e),t!==null&&(Gl(t,e),Mn(t))}function xg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dh(t,n)}function zg(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(e),dh(t,n)}function _g(t,e){return Oe(t,e)}var Tl=null,Cl=null,ao=!1,qs=!1,lo=!1,ua=0;function Mn(t){t!==Cl&&t.next===null&&(Cl===null?Tl=Cl=t:Cl=Cl.next=t),qs=!0,ao||(ao=!0,Rg())}function pi(t,e){if(!lo&&qs){lo=!0;do for(var n=!1,a=Tl;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var s=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-He(42|t)+1)-1,i&=l&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,mh(a,i))}else i=pt,i=Gi(a,a===It?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Il(a,i)||(n=!0,mh(a,i));a=a.next}while(n);lo=!1}}function Og(){fh()}function fh(){qs=ao=!1;var t=0;ua!==0&&kg()&&(t=ua);for(var e=Qe(),n=null,a=Tl;a!==null;){var l=a.next,i=hh(a,e);i===0?(a.next=null,n===null?Tl=l:n.next=l,l===null&&(Cl=n)):(n=a,(t!==0||(i&3)!==0)&&(qs=!0)),a=l}kt!==0&&kt!==5||pi(t),ua!==0&&(ua=0)}function hh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-He(i),o=1<<s,h=l[s];h===-1?((o&n)===0||(o&a)!==0)&&(l[s]=PA(o,e)):h<=e&&(t.expiredLanes|=o),i&=~o}if(e=It,n=pt,n=Gi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ha(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Il(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Ha(a),oc(n)){case 2:case 8:n=qo;break;case 32:n=Ri;break;case 268435456:n=Jo;break;default:n=Ri}return a=Ah.bind(null,t),n=Oe(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Ha(a),t.callbackPriority=2,t.callbackNode=null,2}function Ah(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var a=pt;return a=Gi(t,t===It?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:($f(t,a,e),hh(t,Qe()),t.callbackNode!=null&&t.callbackNode===n?Ah.bind(null,t):null)}function mh(t,e){if(Xs())return null;$f(t,e,!0)}function Rg(){qg(function(){(Dt&6)!==0?Oe(Xo,Og):fh()})}function io(){if(ua===0){var t=Da;t===0&&(t=Ni,Ni<<=1,(Ni&261888)===0&&(Ni=256)),ua=t}return ua}function gh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ui(t)}function Ng(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var i=gh((l[Re]||null).action),s=a.submitter;s&&(e=(e=s[Re]||null)?gh(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var o=new qi("action","action",null,a,l);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ua!==0){var h=new FormData(l,s);hu(n,{pending:!0,data:h,method:l.method,action:i},null,h)}}else typeof i=="function"&&(o.preventDefault(),h=new FormData(l,s),hu(n,{pending:!0,data:h,method:l.method,action:i},i,h))},currentTarget:l}]})}}for(var so=0;so<_c.length;so++){var co=_c[so],jg=co.toLowerCase(),Ig=co[0].toUpperCase()+co.slice(1);un(jg,"on"+Ig)}un(Hr,"onAnimationEnd"),un(Ur,"onAnimationIteration"),un(Vr,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(Xm,"onTransitionRun"),un(qm,"onTransitionStart"),un(Jm,"onTransitionCancel"),un(kr,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function ph(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var o=a[s],h=o.instance,b=o.currentTarget;if(o=o.listener,h!==i&&l.isPropagationStopped())break t;i=o,l.currentTarget=b;try{i(l)}catch(M){Zi(M)}l.currentTarget=null,i=h}else for(s=0;s<a.length;s++){if(o=a[s],h=o.instance,b=o.currentTarget,o=o.listener,h!==i&&l.isPropagationStopped())break t;i=o,l.currentTarget=b;try{i(l)}catch(M){Zi(M)}l.currentTarget=null,i=h}}}}function gt(t,e){var n=e[er];n===void 0&&(n=e[er]=new Set);var a=t+"__bubble";n.has(a)||(vh(e,t,2,!1),n.add(a))}function uo(t,e,n){var a=0;e&&(a|=4),vh(n,t,a,e)}var Js="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[Js]){t[Js]=!0,lr.forEach(function(n){n!=="selectionchange"&&(Gg.has(n)||uo(n,!1,t),uo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Js]||(e[Js]=!0,uo("selectionchange",!1,e))}}function vh(t,e,n,a){switch(cA(e)){case 2:var l=xp;break;case 8:l=zp;break;default:l=zo}n=l.bind(null,e,n,t),l=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function ro(t,e,n,a,l){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===l)break;if(s===4)for(s=a.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;o!==null;){if(s=pa(o),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){a=i=s;continue t}o=o.parentNode}}a=a.return}pr(function(){var b=i,M=mc(n),D=[];t:{var p=Xr.get(t);if(p!==void 0){var C=qi,I=t;switch(t){case"keypress":if(ki(n)===0)break t;case"keydown":case"keyup":C=wm;break;case"focusin":I="focus",C=wc;break;case"focusout":I="blur",C=wc;break;case"beforeblur":case"afterblur":C=wc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=yr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Sm;break;case Hr:case Ur:case Vr:C=fm;break;case kr:C=Bm;break;case"scroll":case"scrollend":C=cm;break;case"wheel":C=zm;break;case"copy":case"cut":case"paste":C=Am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Er;break;case"submit":C=Cm;break;case"toggle":case"beforetoggle":C=Om}var V=(e&4)!==0,ft=!V&&(t==="scroll"||t==="scrollend"),v=V?p!==null?p+"Capture":null:p;V=[];for(var m=b,T;m!==null;){var S=m;if(T=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||T===null||v===null||(S=Yl(m,v),S!=null&&V.push(bi(m,S,T))),ft)break;m=m.return}0<V.length&&(p=new C(p,I,null,n,M),D.push({event:p,listeners:V}))}}if((e&7)===0){t:{if(C=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",C&&n!==Ac&&(I=n.relatedTarget||n.fromElement)&&(pa(I)||I[Va]))break t;(p||C)&&(I=M.window===M?M:(C=M.ownerDocument)?C.defaultView||C.parentWindow:window,p?(C=n.relatedTarget||n.toElement,p=b,C=C?pa(C):null,C!==null&&(ft=E(C),V=C.tag,C!==ft||V!==5&&V!==27&&V!==6)&&(C=null)):(p=null,C=b),p!==C&&(V=yr,S="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(V=Er,S="onPointerLeave",v="onPointerEnter",m="pointer"),ft=p==null?I:Ql(p),T=C==null?I:Ql(C),I=new V(S,m+"leave",p,n,M),I.target=ft,I.relatedTarget=T,S=null,pa(M)===b&&(V=new V(v,m+"enter",C,n,M),V.target=T,V.relatedTarget=ft,S=V),ft=S,V=p&&C?Xt(p,C,Lg):null,p!==null&&bh(D,I,p,V,!1),C!==null&&ft!==null&&bh(D,ft,C,V,!0)))}t:{if(p=b?Ql(b):window,C=p.nodeName&&p.nodeName.toLowerCase(),C==="select"||C==="input"&&p.type==="file")var Y=zr;else if(Br(p))if(_r)Y=Um;else{Y=Ym;var vt=Qm}else C=p.nodeName,!C||C.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?b&&hc(b.elementType)&&(Y=zr):Y=Hm;if(Y&&(Y=Y(t,b))){xr(D,Y,n,M);break t}vt&&vt(t,p,b)}switch(vt=b?Ql(b):window,t){case"focusin":(Br(vt)||vt.contentEditable==="true")&&(Wa=vt,Bc=b,Kl=null);break;case"focusout":Kl=Bc=Wa=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Qr(D,n,M);break;case"selectionchange":if(km)break;case"keydown":case"keyup":Qr(D,n,M)}var P;if(Tc)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else Fa?Sr(t,n)&&(et="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(et="onCompositionStart");et&&(Tr&&n.locale!=="ko"&&(Fa||et!=="onCompositionStart"?et==="onCompositionEnd"&&Fa&&(P=vr()):(Vn=M,vc="value"in Vn?Vn.value:Vn.textContent,Fa=!0)),vt=Ks(b,et),0<vt.length&&(et=new wr(et,t,null,n,M),D.push({event:et,listeners:vt}),P?et.data=P:(P=Dr(n),P!==null&&(et.data=P)))),(P=Nm?jm(t,n):Im(t,n))&&(et=Ks(b,"onBeforeInput"),0<et.length&&(vt=new wr("onBeforeInput","beforeinput",null,n,M),D.push({event:vt,listeners:et}),vt.data=P)),Ng(D,t,b,n,M)}ph(D,e)})}function bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ks(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Yl(t,n),l!=null&&a.unshift(bi(t,l,i)),l=Yl(t,e),l!=null&&a.push(bi(t,l,i))),t.tag===3)return a;t=t.return}return[]}function Lg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bh(t,e,n,a,l){for(var i=e._reactName,s=[];n!==null&&n!==a;){var o=n,h=o.alternate,b=o.stateNode;if(o=o.tag,h!==null&&h===a)break;o!==5&&o!==26&&o!==27||b===null||(h=b,l?(b=Yl(n,i),b!=null&&s.unshift(bi(n,b,h))):l||(b=Yl(n,i),b!=null&&s.push(bi(n,b,h)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Qg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function yh(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Yg,"")}function wh(t,e){return e=yh(e),yh(t)===e}function Nt(t,e,n,a,l,i){switch(n){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Ka(t,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Ka(t,""+a);else return;break;case"className":Hi(t,"class",a);break;case"tabIndex":Hi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hi(t,n,a);break;case"style":mr(t,a,i);return;case"data":if(e!=="object"){Hi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Ui(a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&Nt(t,e,"name",l.name,l,null),Nt(t,e,"formEncType",l.formEncType,l,null),Nt(t,e,"formMethod",l.formMethod,l,null),Nt(t,e,"formTarget",l.formTarget,l,null)):(Nt(t,e,"encType",l.encType,l,null),Nt(t,e,"method",l.method,l,null),Nt(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Ui(a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=mn);return;case"onScroll":a!=null&&gt("scroll",t);return;case"onScrollEnd":a!=null&&gt("scrollend",t);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));(i!=null?i.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Ui(a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Yi(t,"popover",a);break;case"xlinkActuate":Dn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Dn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Dn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Dn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Dn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Dn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Dn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Dn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Dn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yi(t,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=im.get(n)||n,Yi(t,n,a);else return}St=!0}function fo(t,e,n,a,l,i){switch(n){case"style":mr(t,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));(i!=null?i.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof a=="string")Ka(t,a);else if(typeof a=="number"||typeof a=="bigint")Ka(t,""+a);else return;break;case"onScroll":a!=null&&gt("scroll",t);return;case"onScrollEnd":a!=null&&gt("scrollend",t);return;case"onClick":a!=null&&(t.onclick=mn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ir.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),i=n.slice(2,l?n.length-7:void 0),e=t[Re]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(i,e,l),typeof a=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(i,a,l);break t}St=!0,n in t?t[n]=a:a===!0?t.setAttribute(n,""):Yi(t,n,a)}return}St=!0}function ve(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Nt(t,e,i,s,n,null)}}l&&Nt(t,e,"srcSet",n.srcSet,n,null),a&&Nt(t,e,"src",n.src,n,null);return;case"input":gt("invalid",t);var o=i=s=l=null,h=null,b=null;for(a in n)if(n.hasOwnProperty(a)){var M=n[a];if(M!=null)switch(a){case"name":l=M;break;case"type":s=M;break;case"checked":h=M;break;case"defaultChecked":b=M;break;case"value":i=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,e));break;default:Nt(t,e,a,M,n,null)}}dr(t,i,o,h,b,s,l,!1);return;case"select":gt("invalid",t),a=s=i=null;for(l in n)if(n.hasOwnProperty(l)&&(o=n[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":a=o;default:Nt(t,e,l,o,n,null)}e=i,n=s,t.multiple=!!a,e!=null?Ja(t,!!a,e,!1):n!=null&&Ja(t,!!a,n,!0);return;case"textarea":gt("invalid",t),i=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:Nt(t,e,s,o,n,null)}hr(t,a,l,i);return;case"option":for(h in n)if(n.hasOwnProperty(h)&&(a=n[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Nt(t,e,h,a,n,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(a=0;a<vi.length;a++)gt(vi[a],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Nt(t,e,b,a,n,null)}return;default:if(hc(e)){for(M in n)n.hasOwnProperty(M)&&(a=n[M],a!==void 0&&fo(t,e,M,a,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(a=n[o],a!=null&&Nt(t,e,o,a,n,null))}var Hg={};function Ug(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,o=null,h=null,b=null,M=null;for(C in n){var D=n[C];if(n.hasOwnProperty(C)&&D!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":h=D;default:a.hasOwnProperty(C)||Nt(t,e,C,null,a,D)}}for(var p in a){var C=a[p];if(D=n[p],a.hasOwnProperty(p)&&(C!=null||D!=null))switch(p){case"type":C!==D&&(St=!0),i=C;break;case"name":C!==D&&(St=!0),l=C;break;case"checked":C!==D&&(St=!0),b=C;break;case"defaultChecked":C!==D&&(St=!0),M=C;break;case"value":C!==D&&(St=!0),s=C;break;case"defaultValue":C!==D&&(St=!0),o=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,e));break;default:C!==D&&Nt(t,e,p,C,a,D)}}dc(t,s,o,h,b,M,i,l);return;case"select":C=s=o=p=null;for(i in n)if(h=n[i],n.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":C=h;default:a.hasOwnProperty(i)||Nt(t,e,i,null,a,h)}for(l in a)if(i=a[l],h=n[l],a.hasOwnProperty(l)&&(i!=null||h!=null))switch(l){case"value":i!==h&&(St=!0),p=i;break;case"defaultValue":i!==h&&(St=!0),o=i;break;case"multiple":i!==h&&(St=!0),s=i;default:i!==h&&Nt(t,e,l,i,a,h)}e=o,n=s,a=C,p!=null?Ja(t,!!n,p,!1):!!a!=!!n&&(e!=null?Ja(t,!!n,e,!0):Ja(t,!!n,n?[]:"",!1));return;case"textarea":C=p=null;for(o in n)if(l=n[o],n.hasOwnProperty(o)&&l!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Nt(t,e,o,null,a,l)}for(s in a)if(l=a[s],i=n[s],a.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":l!==i&&(St=!0),p=l;break;case"defaultValue":l!==i&&(St=!0),C=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&Nt(t,e,s,l,a,i)}fr(t,p,C);return;case"option":for(var I in n)if(p=n[I],n.hasOwnProperty(I)&&p!=null&&!a.hasOwnProperty(I))switch(I){case"selected":t.selected=!1;break;default:Nt(t,e,I,null,a,p)}for(h in a)if(p=a[h],C=n[h],a.hasOwnProperty(h)&&p!==C&&(p!=null||C!=null))switch(h){case"selected":p!==C&&(St=!0),t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Nt(t,e,h,p,a,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in n)p=n[V],n.hasOwnProperty(V)&&p!=null&&!a.hasOwnProperty(V)&&Nt(t,e,V,null,a,p);for(b in a)if(p=a[b],C=n[b],a.hasOwnProperty(b)&&p!==C&&(p!=null||C!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(137,e));break;default:Nt(t,e,b,p,a,C)}return;default:if(hc(e)){for(var ft in n)p=n[ft],n.hasOwnProperty(ft)&&p!==void 0&&!a.hasOwnProperty(ft)&&fo(t,e,ft,void 0,a,p);for(M in a)p=a[M],C=n[M],!a.hasOwnProperty(M)||p===C||p===void 0&&C===void 0||fo(t,e,M,p,a,C);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!a.hasOwnProperty(v)&&Nt(t,e,v,null,a,p);for(D in a)p=a[D],C=n[D],!a.hasOwnProperty(D)||p===C||p==null&&C==null||Nt(t,e,D,p,a,C)}function Eh(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,s=l.initiatorType,o=l.duration;if(i&&o&&Eh(s)){for(s=0,o=l.responseEnd,a+=1;a<n.length;a++){var h=n[a],b=h.startTime;if(b>o)break;var M=h.transferSize,D=h.initiatorType;M&&Eh(D)&&(h=h.responseEnd,s+=M*(h<o?1:(o-b)/(h-b)))}if(--a,e+=8*(i+s)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ho=null,Ao=null;function yi(t){return t.nodeType===9?t:t.ownerDocument}function Th(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ch(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Mh(t,e,n,a){return n=yi(n).createElement(t),n[he]=a,n[Re]=e,ve(n,t,e),ue(n),n}function mo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var go=null;function kg(){var t=window.event;return t&&t.type==="popstate"?t===go?!1:(go=t,!0):(go=null,!1)}var po=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,Dh=typeof requestAnimationFrame=="function"?requestAnimationFrame:po,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(t){return Sh.resolve(null).then(t).catch(Jg)}:po;function Jg(t){setTimeout(function(){throw t})}function oa(t){return t==="head"}function Bh(t,e){var n=e,a=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(l),_l(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Mo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Mo(n);for(var i=n.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[Ll]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=s}}else n==="body"&&Mo(t.ownerDocument.body);n=l}while(n);_l(e)}function xh(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function zh(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var a=1;else for(var l=a=0;l<e.length;l++){var i=e[l];0<i.width&&0<i.height&&a++}a===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function _h(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Kg(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function vo(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return Kg(e,n,t)}function Zg(t){return t.documentElement.clientHeight}function Pg(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Fg(t,e,n,a,l,i,s,o,h){var b=e.nodeType===9?e:e.ownerDocument;try{var M=b.startViewTransition({update:function(){var p=b.defaultView,C=p.navigation&&p.navigation.transition,I=b.fonts.status;a();var V=[];if(I==="loaded"&&(Zg(b),b.fonts.status==="loading"&&V.push(b.fonts.ready)),I=V.length,t!==null)for(var ft=t.suspenseyImages,v=0,m=0;m<ft.length;m++){var T=ft[m];if(!T.complete){var S=T.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<p.innerHeight&&S.left<p.innerWidth){if(v+=Wh(T),v>Fs){V.length=I;break}T=new Promise(Pg.bind(T)),V.push(T)}}}if(0<V.length)return p=Promise.race([Promise.all(V),new Promise(function(Y){return setTimeout(Y,500)})]).then(l,l),(C?Promise.allSettled([C.finished,p]):p).then(i,i);if(l(),C)return C.finished.then(i,i);i()},types:n});b.__reactViewTransition=M;var D=[];return M.ready.then(function(){for(var p=b.documentElement.getAnimations({subtree:!0}),C=0;C<p.length;C++){var I=p[C],V=I.effect,ft=V.pseudoElement;if(ft!=null&&ft.startsWith("::view-transition")){D.push(I),I=V.getKeyframes();for(var v=ft=void 0,m=!0,T=0;T<I.length;T++){var S=I[T],Y=S.width;if(ft===void 0)ft=Y;else if(ft!==Y){m=!1;break}if(Y=S.height,v===void 0)v=Y;else if(v!==Y){m=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}m&&ft!==void 0&&v!==void 0&&(V.setKeyframes(I),m=getComputedStyle(V.target,V.pseudoElement),m.width!==ft||m.height!==v)&&(m=I[0],m.width=ft,m.height=v,m=I[I.length-1],m.width=ft,m.height=v,V.setKeyframes(I))}}s()},function(p){b.__reactViewTransition===M&&(b.__reactViewTransition=null);try{if(typeof p=="object"&&p!==null)switch(p.name){case"InvalidStateError":(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null)}p!==null&&h(p)}finally{a(),l(),s()}}),M.finished.finally(function(){for(var p=0;p<D.length;p++)D[p].cancel();b.__reactViewTransition===M&&(b.__reactViewTransition=null),o()}),M}catch{return a(),l(),s(),null}}function La(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}La.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:tt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},La.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var i=n[l].effect;i!==null&&i.target===t&&i.pseudoElement===e&&a.push(n[l])}return a},La.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Oh(t){return{name:t,group:new La("group",t),imagePair:new La("image-pair",t),old:new La("old",t),new:new La("new",t)}}function Ze(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ze.prototype.addEventListener=function(t,e,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Nh(i,t,e,n)===-1){var s=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(h){s.removeEventListener(t,e,n),typeof e=="function"?e.call(this,h):e.handleEvent(h)}),a!==null&&(l=s.removeEventListener.bind(s,t,e,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=Ml(n),i.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:l}),w(this._fragmentFiber.child,!1,Wg,t,o,a)}this._eventListeners=i}};function Wg(t,e,n,a){return K(t).addEventListener(e,n,a),!1}Ze.prototype.removeEventListener=function(t,e,n){var a=this._eventListeners;if(a!==null&&(e=Nh(a,t,e,n),e!==-1)){var l=a[e];n=l.attachedListener;var i=l.cleanup;l=Ml(l.optionsOrUseCapture),w(this._fragmentFiber.child,!1,$g,t,n,l),a.splice(e,1),i!==null&&i()}};function $g(t,e,n,a){return K(t).removeEventListener(e,n,a),!1}function Ml(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Rh(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Nh(t,e,n,a){if(t.length===0)return-1;a=Rh(a);for(var l=0;l<t.length;l++){var i=t[l];if(i.type===e&&i.listener===n&&Rh(i.optionsOrUseCapture)===a)return l}return-1}Ze.prototype.dispatchEvent=function(t){var e=O(this._fragmentFiber);if(e===null)return!0;e=K(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var i=n[l];a.addEventListener(i.type,i.attachedListener,Ml(i.optionsOrUseCapture))}if(e.appendChild(a),t=a.dispatchEvent(t),n)for(l=0;l<n.length;l++)i=n[l],a.removeEventListener(i.type,i.attachedListener,Ml(i.optionsOrUseCapture));return e.removeChild(a),t}return e.dispatchEvent(t)},Ze.prototype.focus=function(t){w(this._fragmentFiber.child,!0,jh,t,void 0,void 0)};function jh(t,e){return t.tag===6?!1:(t=K(t),dp(t,e))}Ze.prototype.focusLast=function(t){var e=[];w(this._fragmentFiber.child,!0,bo,e,void 0,void 0);for(var n=e.length-1;0<=n&&!jh(e[n],t);n--);};function bo(t,e){return e.push(t),!1}Ze.prototype.blur=function(){var t=O(this._fragmentFiber);t!==null&&(t=K(t),t=yi(t).activeElement,t!==null&&w(this._fragmentFiber.child,!1,tp,t,void 0,void 0))};function tp(t,e){return t.tag===6?!1:(t=K(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Ze.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),w(this._fragmentFiber.child,!1,ep,t,void 0,void 0)};function ep(t,e){return t.tag===6||(t=K(t),e.observe(t)),!1}Ze.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),w(this._fragmentFiber.child,!1,np,t,void 0,void 0);for(var n=e=0;n<hn.length;n++){var a=hn[n];a.fragmentInstance===this&&a.observer===t?t.unobserve(a.instance):hn[e++]=a}hn.length=e}};function np(t,e){return t.tag===6||(t=K(t),e.unobserve(t)),!1}var hn=[],yo=!1;function ap(t,e,n){hn.push({fragmentInstance:t,observer:e,instance:n}),yo||(yo=!0,fp(function(){yo=!1;var a=hn;hn=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}Ze.prototype.getClientRects=function(){var t=[];return w(this._fragmentFiber.child,!1,lp,t,void 0,void 0),t};function lp(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=K(t),e.push.apply(e,t.getClientRects());return!1}Ze.prototype.getRootNode=function(t){var e=O(this._fragmentFiber);return e===null?this:K(e).getRootNode(t)},Ze.prototype.compareDocumentPosition=function(t){var e=O(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];w(this._fragmentFiber.child,!1,bo,n,void 0,void 0);var a=K(e);if(n.length===0){if(n=a,L(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var l=a=n.compareDocumentPosition(t);return n===t?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=G(e)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=K(n).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=K(n[0]),l=K(n[n.length-1]);var i=L(this._fragmentFiber)?e.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),o=l.compareDocumentPosition(t),h=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=a&&i&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===t||i&&l===t||h||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===t||!i&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ip(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ip(t,e,n,a,l){var i=pa(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){n=!0;break t}i=i.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;t:{for(i=e,e=O(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===n)&&(e=Xt(n,i,Gt),e===null?e=!1:(w(e,!0,nt,i,n),i=Et,Et=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===a)&&(e=Xt(a,i,Gt),e===null?e=!1:(w(e,!0,Vt,i,a),i=Et,Bt=Et=null,e=i!==null)),e):!1}function Ih(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ze.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(u(566));var e=[];w(this._fragmentFiber.child,!1,bo,e,void 0,void 0);var n=t!==!1;if(e.length===0){var a=G(this._fragmentFiber);if(a=n?a[1]||a[0]||O(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){t=K(a),Ih(t,n);return}if(a=K(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(t);return}a.scrollIntoView(t)}}for(a=n?e.length-1:0;a!==(n?-1:e.length);){var l=e[a];l.tag===6?(l=K(l),Ih(l,n)):K(l).scrollIntoView(t),a+=n?-1:1}};function sp(t,e){return t=K(t),Gh(t,e),!1}function Gh(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function Lh(t,e){var n=e._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];t.addEventListener(l.type,l.attachedListener,Ml(l.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(i){for(var s=0,o=0;o<hn.length;o++){var h=hn[o];(h.fragmentInstance!==e||h.observer!==i||h.instance!==t)&&(hn[s++]=h)}hn.length=s,i.observe(t)}),Gh(t,e))}function cp(t,e){var n=e._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];t.removeEventListener(l.type,l.attachedListener,Ml(l.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?ap(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function wo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wo(n),Qi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function up(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ll])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=sn(t.nextSibling),t===null)break}return null}function op(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=sn(t.nextSibling),t===null))return null;return t}function Qh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=sn(t.nextSibling),t===null))return null;return t}function Eo(t){return t.data==="$?"||t.data==="$~"}function To(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rp(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Co=null;function Yh(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return sn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function dp(t,e){function n(){a=!0}if(t.ownerDocument.activeElement===t)return!0;var a=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return a}function fp(t){Dh(function(){Dh(function(e){return t(e)})})}function Uh(t,e,n){switch(e=yi(n),t){case"html":if(t=e.documentElement,!t)throw Error(u(452));return t;case"head":if(t=e.head,!t)throw Error(u(453));return t;case"body":if(t=e.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function Vh(t,e,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&Nt(t,e,a,null,Hg,l)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===mn&&(t.onclick=null),Qi(t)}function Mo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Qi(t)}var cn=new Map,kh=new Set;function wi(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Yn=J.d;J.d={f:hp,r:Ap,D:mp,C:gp,L:pp,m:vp,X:yp,S:bp,M:wp};function hp(){var t=Yn.f(),e=Us();return t||e}function Ap(t){var e=ka(t);e!==null&&e.tag===5&&e.type==="form"?Xd(e):Yn.r(t)}var Sl=typeof document>"u"?null:document;function Xh(t,e,n){var a=Sl;if(a&&typeof e=="string"&&e){var l=We(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),kh.has(l)||(kh.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),ve(e,"link",t),ue(e),a.head.appendChild(e)))}}function mp(t){Yn.D(t),Xh("dns-prefetch",t,null)}function gp(t,e){Yn.C(t,e),Xh("preconnect",t,e)}function pp(t,e,n){Yn.L(t,e,n);var a=Sl;if(a&&t&&e){var l='link[rel="preload"][as="'+We(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+We(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+We(n.imageSizes)+'"]')):l+='[href="'+We(t)+'"]';var i=l;switch(e){case"style":i=Dl(t);break;case"script":i=Bl(t)}if(!(cn.has(i)||(t=tt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),cn.set(i,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(Ei(i))||e==="script"&&a.querySelector(Ti(i))))){var s=a.createElement("link");ve(s,"link",t),e==="style"&&(s[Li]=!0,s.onload=s.onerror=function(){ar(s)}),ue(s),a.head.appendChild(s)}}}function vp(t,e){Yn.m(t,e);var n=Sl;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+We(a)+'"][href="'+We(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(t)}if(!cn.has(i)&&(t=tt({rel:"modulepreload",href:t},e),cn.set(i,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ti(i)))return}a=n.createElement("link"),ve(a,"link",t),ue(a),n.head.appendChild(a)}}}function bp(t,e,n){Yn.S(t,e,n);var a=Sl;if(a&&t){var l=Xa(a).hoistableStyles,i=Dl(t);e=e||"default";var s=l.get(i);if(!s){var o={loading:0,preload:null};if(s=a.querySelector(Ei(i)))o.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=cn.get(i))&&So(t,n);var h=s=a.createElement("link");ue(h),ve(h,"link",t),h._p=new Promise(function(b,M){h.onload=b,h.onerror=M}),h.addEventListener("load",function(){o.loading|=1}),h.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Zs(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:o},l.set(i,s)}}}function yp(t,e){Yn.X(t,e);var n=Sl;if(n&&t){var a=Xa(n).hoistableScripts,l=Bl(t),i=a.get(l);i||(i=n.querySelector(Ti(l)),i||(t=tt({src:t,async:!0},e),(e=cn.get(l))&&Do(t,e),i=n.createElement("script"),ue(i),ve(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function wp(t,e){Yn.M(t,e);var n=Sl;if(n&&t){var a=Xa(n).hoistableScripts,l=Bl(t),i=a.get(l);i||(i=n.querySelector(Ti(l)),i||(t=tt({src:t,async:!0,type:"module"},e),(e=cn.get(l))&&Do(t,e),i=n.createElement("script"),ue(i),ve(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function qh(t,e,n,a){var l=(l=Me.current)?wi(l):null;if(!l)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Dl(n.href),e=Xa(l).hoistableStyles,a=e.get(n),a||(a={type:"style",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Dl(n.href);var i=Xa(l).hoistableStyles,s=i.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=l.querySelector(Ei(t)))?i._p||(s.instance=i,s.state.loading=5):(i=cn.get(t),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},cn.set(t,i)),Ep(l,t,i,s.state))),e&&a===null)throw Error(u(528,""));return s}if(e&&a!==null)throw Error(u(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=Bl(n),e=Xa(l).hoistableScripts,a=e.get(n),a||(a={type:"script",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function Dl(t){return'href="'+We(t)+'"'}function Ei(t){return'link[rel="stylesheet"]['+t+"]"}function Jh(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function Ep(t,e,n,a){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Li]!==!0){a.loading=1;return}}else e=t.createElement("link"),e[Li]=!0,e.onload=e.onerror=ar.bind(null,e),ve(e,"link",n),ue(e),t.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function Bl(t){return'[src="'+We(t)+'"]'}function Ti(t){return"script[async]"+t}function Kh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+We(n.href)+'"]');if(a)return e.instance=a,ue(a),a;var l=tt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ue(a),ve(a,"style",l),Zs(a,n.precedence,t),e.instance=a;case"stylesheet":l=Dl(n.href);var i=t.querySelector(Ei(l));if(i)return e.state.loading|=4,e.instance=i,ue(i),i;a=Jh(n),(l=cn.get(l))&&So(a,l),i=(t.ownerDocument||t).createElement("link"),ue(i);var s=i;return s._p=new Promise(function(o,h){s.onload=o,s.onerror=h}),ve(i,"link",a),e.state.loading|=4,Zs(i,n.precedence,t),e.instance=i;case"script":return i=Bl(n.src),(l=t.querySelector(Ti(i)))?(e.instance=l,ue(l),l):(a=n,(l=cn.get(i))&&(a=tt({},n),Do(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),ue(l),ve(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Zs(a,n.precedence,t));return e.instance}function Zs(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,s=0;s<a.length;s++){var o=a[s];if(o.dataset.precedence===e)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function So(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Do(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ps=null;function Zh(t,e,n){if(Ps===null){var a=new Map,l=Ps=new Map;l.set(n,a)}else l=Ps,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var i=n[l];if(!(i[Ll]||i[he]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var o=a.get(s);o?o.push(i):a.set(s,[i])}}return a}function Bo(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Tp(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ph(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Fh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wh(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function $h(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Wh(e),t.suspenseyImages.push(e)),t=Sp.bind(t),e.decode().then(t,t))}function Cp(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Dl(a.href),i=e.querySelector(Ei(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ci.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=i,ue(i);return}i=e.ownerDocument||e,a=Jh(a),(l=cn.get(l))&&So(a,l),i=i.createElement("link"),ue(i);var s=i;s._p=new Promise(function(o,h){s.onload=o,s.onerror=h}),ve(i,"link",a),n.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ci.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Fs=0;function Mp(t,e){return t.stylesheets&&t.count===0&&$s(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&$s(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Fs===0&&(Fs=62500*Vg());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$s(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Fs?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function tA(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)$s(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Ci(){this.count--,tA(this)}function Sp(){this.imgCount--,tA(this)}var Ws=null;function $s(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ws=new Map,e.forEach(Dp,t),Ws=null,Ci.call(t))}function Dp(t,e){if(!(e.state.loading&4)){var n=Ws.get(t);if(n)var a=n.get(null);else{n=new Map,Ws.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=e.instance,s=l.getAttribute("data-precedence"),i=n.get(s)||a,i===a&&n.set(null,l),n.set(s,l),this.count++,a=Ci.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var xl={$$typeof:Tt,Provider:null,Consumer:null,_currentValue:zt,_currentValue2:zt,_threadCount:0};function Bp(t,e,n,a,l,i,s,o,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.hiddenUpdates=cc(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.transitionTypes=null,this.incompleteTransitions=new Map}function eA(t,e,n,a,l,i,s,o,h,b,M,D){return t=new Bp(t,e,n,s,h,b,M,D,o),e=1,i===!0&&(e|=24),i=Ne(3,null,null,e),t.current=i,i.stateNode=t,e=Uc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:e},qc(i),t}function nA(t){return t?(t=el,t):el}function aA(t,e,n,a,l,i){l=nA(l),a.context===null?a.context=l:a.pendingContext=l,a=Fn(e),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Wn(t,a,e),n!==null&&(Le(n,t,e),ei(n,t,e))}function lA(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xo(t,e){lA(t,e),(t=t.alternate)&&lA(t,e)}function iA(t){if(t.tag===13||t.tag===31){var e=wa(t,67108864);e!==null&&Le(e,t,67108864),xo(t,67108864)}}function sA(t){if(t.tag===13||t.tag===31){var e=Ke();e=uc(e);var n=wa(t,e);n!==null&&Le(n,t,e),xo(t,e)}}var zl=!0;function xp(t,e,n,a){var l=Q.T;Q.T=null;var i=J.p;try{J.p=2,zo(t,e,n,a)}finally{J.p=i,Q.T=l}}function zp(t,e,n,a){var l=Q.T;Q.T=null;var i=J.p;try{J.p=8,zo(t,e,n,a)}finally{J.p=i,Q.T=l}}function zo(t,e,n,a){if(zl){var l=_o(a);if(l===null)ro(t,e,a,tc,n),uA(t,a);else if(Op(l,t,e,n,a))a.stopPropagation();else if(uA(t,a),e&4&&-1<_p.indexOf(t)){for(;l!==null;){var i=ka(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=ga(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var h=1<<31-He(s);o.entanglements[1]|=h,s&=~h}Mn(i),(Dt&6)===0&&(Qs=Qe()+500,pi(0))}}break;case 31:case 13:o=wa(i,2),o!==null&&Le(o,i,2),Us(),xo(i,2)}if(i=_o(a),i===null&&ro(t,e,a,tc,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else ro(t,e,a,null,n)}}function _o(t){return t=mc(t),Oo(t)}var tc=null;function Oo(t){if(tc=null,t=pa(t),t!==null){var e=E(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=B(e),t!==null)return t;t=null}else if(n===31){if(t=y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return tc=t,null}function cA(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(VA()){case Xo:return 2;case qo:return 8;case Ri:case kA:return 32;case Jo:return 268435456;default:return 32}default:return 32}}var Ro=!1,ra=null,da=null,fa=null,Mi=new Map,Si=new Map,ha=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uA(t,e){switch(t){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(e.pointerId)}}function Di(t,e,n,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},e!==null&&(e=ka(e),e!==null&&iA(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Op(t,e,n,a,l){switch(e){case"focusin":return ra=Di(ra,t,e,n,a,l),!0;case"dragenter":return da=Di(da,t,e,n,a,l),!0;case"mouseover":return fa=Di(fa,t,e,n,a,l),!0;case"pointerover":var i=l.pointerId;return Mi.set(i,Di(Mi.get(i)||null,t,e,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Si.set(i,Di(Si.get(i)||null,t,e,n,a,l)),!0}return!1}function oA(t){var e=pa(t.target);if(e!==null){var n=E(e);if(n!==null){if(e=n.tag,e===13){if(e=B(n),e!==null){t.blockedOn=e,tr(t.priority,function(){sA(n)});return}}else if(e===31){if(e=y(n),e!==null){t.blockedOn=e,tr(t.priority,function(){sA(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_o(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Ac=a,n.target.dispatchEvent(a),Ac=null}else return e=ka(n),e!==null&&iA(e),t.blockedOn=n,!1;e.shift()}return!0}function rA(t,e,n){ec(t)&&n.delete(e)}function Rp(){Ro=!1,ra!==null&&ec(ra)&&(ra=null),da!==null&&ec(da)&&(da=null),fa!==null&&ec(fa)&&(fa=null),Mi.forEach(rA),Si.forEach(rA)}function nc(t,e){t.blockedOn===e&&(t.blockedOn=null,Ro||(Ro=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Rp)))}var ac=null;function dA(t){ac!==t&&(ac=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(Oo(a||n)===null)continue;break}var i=ka(n);i!==null&&(t.splice(e,3),e-=3,hu(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function _l(t){function e(h){return nc(h,t)}ra!==null&&nc(ra,t),da!==null&&nc(da,t),fa!==null&&nc(fa,t),Mi.forEach(e),Si.forEach(e);for(var n=0;n<ha.length;n++){var a=ha[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ha.length&&(n=ha[0],n.blockedOn===null);)oA(n),n.blockedOn===null&&ha.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],s=l[Re]||null;if(typeof i=="function")s||dA(n);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Re]||null)o=s.formAction;else if(Oo(l)!==null)continue}else o=s.action;typeof o=="function"?n[a+1]=o:(n.splice(a,3),a-=3),dA(n)}}}function fA(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function No(t){this._internalRoot=t}lc.prototype.render=No.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(u(409));var n=e.current,a=Ke();aA(n,a,t,e,null,null)},lc.prototype.unmount=No.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;aA(t.current,2,null,t,null,null),Us(),e[Va]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$o();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ha.length&&e!==0&&e<ha[n].priority;n++);ha.splice(n,0,t),n===0&&oA(t)}};var hA=d.version;if(hA!=="19.3.0")throw Error(u(527,hA,"19.3.0"));J.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=N(e),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Np={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{jl=ic.inject(Np),Ye=ic}catch{}}return xi.createRoot=function(t,e){if(!A(t))throw Error(u(299));var n=!1,a="",l=ef,i=nf,s=af;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=eA(t,1,!1,null,null,n,a,null,l,i,s,fA),t[Va]=e.current,oo(t),new No(e)},xi.hydrateRoot=function(t,e,n){if(!A(t))throw Error(u(299));var a=!1,l="",i=ef,s=nf,o=af,h=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(h=n.formState)),e=eA(t,1,!0,e,n??null,a,l,h,i,s,o,fA),e.context=nA(null),n=e.current,a=Ke(),a=uc(a),l=Fn(a),l.callback=null,Wn(n,l,a),n=a,e.current.lanes=n,Gl(e,n),Mn(e),t[Va]=e.current,oo(t),new lc(e)},xi.version="19.3.0",xi}var TA;function qp(){if(TA)return Go.exports;TA=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),Go.exports=Xp(),Go.exports}var Jp=qp();const Kp=_A(Jp),Uo=["projects","about","experience","contact","doom"],RA={projects:{en:"Projects",zh:"项目"},about:{en:"About",zh:"关于"},experience:{en:"Experience",zh:"经历"},contact:{en:"Contact",zh:"联系"},doom:{en:"DOOM",zh:"毁灭战士"}},NA={projects:{en:"Projects",zh:"项目"},about:{en:"README",zh:"README"},experience:{en:"Experience",zh:"经历"},contact:{en:"Contact",zh:"联系"},doom:{en:"DOOM.exe",zh:"DOOM.exe"}};function CA(c,d){if(d.type==="showDesktop"){const u=c.some(A=>!A.minimized);return c.map(A=>({...A,minimized:u}))}const r=c.find(u=>u.id===d.id);return d.type==="close"?c.filter(u=>u.id!==d.id):d.type==="open"?[...c.filter(u=>u.id!==d.id),{id:d.id,minimized:!1,maximized:(r==null?void 0:r.maximized)??!1}]:c.map(u=>u.id!==d.id?u:d.type==="minimize"?{...u,minimized:!0}:{...u,maximized:!u.maximized})}const Ya=[{id:"fast-ai-movie",aliases:["FAST AI Movie","视频编辑","电影"],topics:["ai","full-stack","web"],title:"FAST AI Movie Web",description:{en:"AI video generation and editing",zh:"AI 视频生成与编辑"}},{id:"pingpong-vision",aliases:["PingPong","乒乓"],topics:["ai","full-stack","vision","llm","multimodal","ocr"],title:"PingPong Vision",description:{en:"Gemini multimodal OCR for camera readings",zh:"Gemini 多模态 OCR 与摄像头读数"}},{id:"web-harvest-rag",aliases:["Web Harvest","网页采集"],topics:["ai","rag","web","llm"],title:"Web Harvest RAG",description:{en:"RAG chatbot with hybrid retrieval and query rewriting",zh:"混合检索、查询改写与 RAG 聊天系统"}},{id:"you-dont-need-rag",aliases:["You Don't Need RAG","You Don’t Need RAG"],topics:["ai","rag","web","llm"],title:"You Don’t Need RAG",description:{en:"Prepare knowledge for long-context LLMs or RAG",zh:"为长上下文 LLM 或 RAG 整理知识"}},{id:"vehicle-identification",aliases:["Vehicle Noise","车辆","噪声"],topics:["ai","machine-learning"],title:"Vehicle Noise Classification",description:{en:"Machine learning for acoustic classification",zh:"基于机器学习的车辆声学分类"}},{id:"3d-reconstruction",aliases:["Stereo 3D","三维","双目"],topics:["vision","3d","ai"],title:"Stereo 3D Reconstruction",description:{en:"Computer vision and stereo reconstruction",zh:"计算机视觉与双目三维重建"}},{id:"drone-simulator",aliases:["Drone","无人机","PX4"],topics:["robotics","systems"],title:"Drone Simulator",description:{en:"PX4 robotics and flight simulation",zh:"PX4 机器人与飞行仿真"}}];function Zp(c,d){const r=c.right-c.left,u=c.bottom-c.top;return r>0&&u>0&&Math.min(c.right,d.right)-Math.max(c.left,d.left)>=Math.min(r/2,48)&&Math.min(c.bottom,d.bottom)-Math.max(c.top,d.top)>=Math.min(u/2,48)}class Pp{constructor(d){Zt(this,"targets",new Map);Zt(this,"revision",0);Zt(this,"listeners",new Set);this.isVisible=d}register(d,r){return this.targets.set(d.id,{...d,element:r}),this.publish(),()=>{var u;((u=this.targets.get(d.id))==null?void 0:u.element)===r&&(this.targets.delete(d.id),this.publish())}}getRevision(){return this.revision}contextChanged(){this.publish()}subscribe(d){return this.listeners.add(d),()=>{this.listeners.delete(d)}}waitFor(d,r){return r!=null&&r.aborted?Promise.reject(new DOMException("Aborted","AbortError")):d()?Promise.resolve():new Promise((u,A)=>{const E=()=>{x(),r==null||r.removeEventListener("abort",y),u()},B=()=>{d()&&E()},y=()=>{x(),A(new DOMException("Aborted","AbortError"))},x=this.subscribe(B);r==null||r.addEventListener("abort",y,{once:!0}),B()})}ready(d){return[...this.targets.values()].some(r=>(r.scope.window??null)===d.activeWindow&&(!r.scope.panel||r.scope.panel===d.activePanel)&&r.element.isConnected&&this.isVisible(r.element)&&r.capabilities.includes("guideTo"))}waitForReady(d,r){return this.waitFor(()=>this.ready(d),r)}completion(d){var r;return(r=this.targets.get(d))==null?void 0:r.completion}names(d){var r;return(r=this.targets.get(d))==null?void 0:r.names}snapshot(d){return[...this.targets.values()].sort((r,u)=>r.id.localeCompare(u.id)).flatMap(r=>{const u=this.matchesScope(r.scope,d)&&r.element.isConnected&&r.capabilities.includes("guideTo"),A=u&&this.isVisible(r.element);return u?[{id:r.id,available:A,visible:A,guideable:u,capabilities:r.capabilities,names:r.names,...r.projectId?{projectId:r.projectId}:{},...r.tag?{tag:r.tag}:{}}]:[]})}resolve(d,r,u){const A=this.targets.get(d);return!A||!A.capabilities.includes(r)?{element:null,reason:"target-unregistered"}:!this.matchesScope(A.scope,u)||!A.element.isConnected||r==="highlight"&&!this.isVisible(A.element)?{element:null,reason:"target-unavailable"}:{element:A.element}}direction(d,r){var y;const u=this.targets.get(d);if(!u||!this.matchesScope(u.scope,r)||!u.element.isConnected)return"unavailable";const A=u.element.getBoundingClientRect();if(this.isVisible(u.element))return"visible";const E=(y=u.element.closest(".content-scroll"))==null?void 0:y.getBoundingClientRect(),B={top:Math.max(0,(E==null?void 0:E.top)??0),bottom:Math.min(innerHeight,(E==null?void 0:E.bottom)??innerHeight),left:Math.max(0,(E==null?void 0:E.left)??0),right:Math.min(innerWidth,(E==null?void 0:E.right)??innerWidth)};return A.top<B.top?"above":A.bottom>B.bottom?"below":A.left<B.left?"left":A.right>B.right?"right":"unavailable"}matchesScope(d,r){return(!d.window||d.window===r.activeWindow)&&(!d.panel||d.panel===r.activePanel)}publish(){this.revision++,this.listeners.forEach(d=>d())}}function jA(c){var A;if(c.closest("[hidden]")||!c.getClientRects().length)return!1;const d=c.closest(".desktop-window");if(d&&!d.classList.contains("active"))return!1;const r=c.getBoundingClientRect(),u=(A=c.closest(".content-scroll"))==null?void 0:A.getBoundingClientRect();return Zp(r,{top:Math.max(0,(u==null?void 0:u.top)??0),bottom:Math.min(innerHeight,(u==null?void 0:u.bottom)??innerHeight),left:Math.max(0,(u==null?void 0:u.left)??0),right:Math.min(innerWidth,(u==null?void 0:u.right)??innerWidth)})}function Fp(c){var L;const[d,r]=z.useState({windows:[],aboutTab:"profile"}),u=z.useRef(d),A=z.useRef(0),E=z.useRef(new Pp(jA)).current;z.useEffect(()=>{E.contextChanged()},[d,E]),z.useEffect(()=>{A.current++},[c]),z.useEffect(()=>{const G=()=>{A.current++};return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);const B=(L=d.windows.filter(G=>!G.minimized).at(-1))==null?void 0:L.id,y=G=>{u.current=G,A.current++,r(G)},x=G=>y({...u.current,windows:CA(u.current.windows,G)});return{state:d,active:B,dispatch:x,reset:()=>y({windows:[],aboutTab:"profile"}),navigate:G=>{const it=u.current.windows.filter(Bt=>!Bt.minimized).at(-1),K=u.current.windows.find(Bt=>Bt.id===G),Et=(it==null?void 0:it.maximized)??(K==null?void 0:K.maximized)??!1;y({...u.current,windows:[...u.current.windows.filter(Bt=>Bt.id!==G),{id:G,minimized:!1,maximized:Et}]})},selectTab:G=>y({...u.current,aboutTab:G,windows:CA(u.current.windows,{type:"open",id:"about"})}),snapshot:()=>{var K;const G=((K=u.current.windows.filter(Et=>!Et.minimized).at(-1))==null?void 0:K.id)??null,it=G==="about"?u.current.aboutTab:G==="projects"?"collection":G!=null&&G.startsWith("project:")?"detail":"";return{language:c,contextVersion:A.current,activeWindow:G,activePanel:it,windows:u.current.windows.map(Et=>Et.id),aboutTab:u.current.aboutTab,targets:E.snapshot({activeWindow:G,activePanel:it})}},version:A,targetRegistry:E,touch:()=>{A.current++},open:G=>x({type:"open",id:G})}}const IA=z.createContext(null);function Wp({language:c,children:d}){const r=Fp(c);return f.jsx(IA.Provider,{value:r,children:d})}function Rl(){const c=z.useContext(IA);if(!c)throw new Error("Missing DesktopProvider");return c}function Hn(c){const d=Rl(),r=z.useRef(null);return z.useEffect(()=>{if(r.current)return d.targetRegistry.register(c,r.current)},[d.targetRegistry,c.id,c.names.en,c.names.zh,c.scope.window,c.scope.panel,c.capabilities.join("|"),c.projectId,c.tag,JSON.stringify(c.completion)]),r}const MA="https://monty-api.huxiaoheng.com";class ma extends Error{constructor(d,r=0){super(d),this.code=d,this.status=r}}function $p(c,d){return new Promise((r,u)=>{d==null||d.throwIfAborted();const A=()=>{clearTimeout(E),u(d==null?void 0:d.reason)},E=setTimeout(()=>{d==null||d.removeEventListener("abort",A),r()},c);d==null||d.addEventListener("abort",A,{once:!0})})}class tv{constructor(){Zt(this,"token","");Zt(this,"configured",!1);Zt(this,"usage",null)}async session(d){if(this.token)return;const r=await fetch(`${MA}/api/session`,{method:"POST",signal:d});if(!r.ok)throw new ma("http",r.status);const u=await r.json();this.token=u.token,this.configured=u.configured,this.usage=u.usage??null}async request(d,r,u,A="POST"){var y;const E=d==="/chat"||d==="/observe";let B=!1;for(let x=0;;){u==null||u.throwIfAborted();try{await this.session(u);const N=await fetch(`${MA}/api${d}`,{method:A,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:r===void 0?void 0:JSON.stringify(r),signal:u});if(N.ok)return N;if(await((y=N.body)==null?void 0:y.cancel()),N.status===401&&(this.token="",E&&!B)){if(r&&typeof r=="object"&&"guideStep"in r&&r.guideStep)throw new ma("guide-expired");B=!0;continue}throw new ma("http",N.status)}catch(N){if(u!=null&&u.aborted)throw N;const _=N instanceof TypeError||N instanceof ma&&[408,500,502,503,504].includes(N.status);if(!E||!_||x>=2)throw N;await $p([800,1600][x++],u)}}}async*stream(d,r,u){const A=await this.request(d,r,u);if(!A.body)throw new ma("interrupted");const E=A.body.getReader(),B=new TextDecoder;let y="",x=!1;try{for(;;){const{done:N,value:_}=await E.read();if(N)break;y+=B.decode(_,{stream:!0}).replace(/\r/g,"");let w;for(;(w=y.indexOf(`

`))>=0;){const O=y.slice(0,w);y=y.slice(w+2);const L=O.split(`
`).filter(G=>G.startsWith("data:")).map(G=>G.slice(5).trim()).join(`
`);if(L){const G=JSON.parse(L);if(G.type==="done"&&(x=!0),yield G,x)return}}}if(!x&&!u.aborted)throw new ma("interrupted")}finally{await E.cancel().catch(()=>{}),E.releaseLock()}}async quota(d){const r=await this.request("/session/usage",void 0,d,"GET");return this.usage=await r.json(),this.usage}cancel(d){if(this.token)return this.request(`/runs/${encodeURIComponent(d)}/cancel`).catch(()=>{})}async clear(){this.token&&await this.request("/session",void 0,void 0,"DELETE").catch(()=>{}),this.token="",this.usage=null}}function ev(c,d){const r=d==="zh",u=c instanceof ma?c:null;return(u==null?void 0:u.code)==="Monty is offline on this preview"?r?"当前是静态预览，尚未连接 Monty 后端。":"This is a static preview; Monty’s backend is not connected.":(u==null?void 0:u.code)==="budget"?r?"本次会话的回复额度已用完，仍可查看聊天记录和浏览项目。":"This session’s reply allowance is used up. You can still read the history and explore projects.":(u==null?void 0:u.code)==="guide-expired"?r?"导览会话已过期，请重新告诉我想看哪个项目。":"The tour session expired. Please tell me which project you would like to see again.":(u==null?void 0:u.status)===429||(u==null?void 0:u.code)==="rate-limit"?r?"请求有点多，请稍后再试。":"Too many requests. Please try again shortly.":(u==null?void 0:u.code)==="timeout"?r?"这次回复等待超时了，请再试一次。":"This reply took too long. Please try again.":(u==null?void 0:u.code)==="configuration"?r?"模型服务配置有问题，请联系站点维护者。":"The model service needs configuration. Please contact the site owner.":(u==null?void 0:u.code)==="interrupted"||(u==null?void 0:u.status)===409?r?"这次回复中断了，你可以重新发送问题。":"This reply was interrupted. You can send your question again.":c instanceof TypeError||(u==null?void 0:u.code)==="connection"||[408,500,502,503,504].includes((u==null?void 0:u.status)??0)?r?"连接暂时不稳定，请稍后再试。":"The connection is temporarily unstable. Please try again shortly.":r?"这次请求未能完成，请再试一次。":"This request could not be completed. Please try again."}class nv{constructor(d){Zt(this,"events",[]);Zt(this,"lastActivity",performance.now());Zt(this,"entered",performance.now());Zt(this,"hover","");Zt(this,"lastView","");Zt(this,"dwellRecorded",!1);Zt(this,"meaningful",!1);Zt(this,"pageActivity",!1);Zt(this,"hoverTarget",d=>{var A,E;const r=performance.now();this.lastActivity=r,this.pageActivity=!0;const u=((A=d.target.closest("[data-agent-id]"))==null?void 0:A.dataset.agentId)||"";u!==this.hover&&(this.hover&&this.record("hover",this.hover,(r-this.entered)/1e3),this.hover=((E=this.metadata(u))==null?void 0:E.target)||"",this.entered=r,this.dwellRecorded=!1)});Zt(this,"click",d=>{var u;this.lastActivity=performance.now(),this.pageActivity=!0;const r=((u=d.target.closest("[data-agent-id]"))==null?void 0:u.dataset.agentId)||"";this.metadata(r)&&this.record("click",r)});Zt(this,"visibility",()=>{this.entered=performance.now(),this.hover="",this.dwellRecorded=!1,this.events.push({type:"visibility",target:"page",duration:0})});this.context=d}metadata(d){const r=this.context().targets.find(u=>u.id===d&&u.available);return r?{target:r.id,...r.projectId?{projectId:r.projectId}:{},...r.tag?{tag:r.tag}:{}}:null}push(d){this.events.push(d),this.events=this.events.slice(-60),d.type!=="visibility"&&(this.meaningful=!0)}record(d,r,u=0){const A=this.metadata(r);A&&this.push({type:d,...A,duration:u})}attach(){return document.addEventListener("pointerover",this.hoverTarget,{passive:!0}),document.addEventListener("click",this.click),document.addEventListener("visibilitychange",this.visibility),()=>{document.removeEventListener("pointerover",this.hoverTarget),document.removeEventListener("click",this.click),document.removeEventListener("visibilitychange",this.visibility)}}tick(d){if(document.hidden)return;const r=`${d.activeWindow||"desktop"}:${d.activePanel}`;r!==this.lastView&&(this.lastView=r,this.events.push({type:"visit",target:r,duration:0}),this.meaningful=!0);const u=(performance.now()-this.entered)/1e3;this.hover&&!this.dwellRecorded&&u>=5&&(this.record("dwell",this.hover,u),this.dwellRecorded=!0)}consumeMeaningfulInteraction(){const d=this.meaningful;return this.meaningful=!1,d}consumePageActivity(){const d=this.pageActivity;return this.pageActivity=!1,d}snapshot({locale:d,dnd:r,proactiveCount:u}){const A=this.context(),E=performance.now(),B=this.events.slice(-59),y=this.hover?this.metadata(this.hover):null;return y&&!document.hidden&&B.push({type:"hover",...y,duration:(E-this.entered)/1e3}),{route:A.activeWindow||"desktop",window:A.activeWindow,activePanel:A.activePanel,locale:d,dnd:r,proactiveCount:u,events:B,idleSeconds:Math.min(7200,(E-this.lastActivity)/1e3)}}}function av(c){if(/[\u3400-\u9fff]/.test(c))return"zh";if(/[A-Za-z]/.test(c))return"en"}function lv(c){if(!c||typeof c!="object")return null;const d=c;return typeof d.type!="string"||typeof d.target!="string"||typeof d.value!="string"||d.value.length>200||d.target.length>160||!/^[a-zA-Z0-9:_-]*$/.test(d.target)||!["speak","setState","highlight","guideTo","showHint","showRecommendation"].includes(d.type)||["highlight","guideTo"].includes(d.type)&&!d.target||!["highlight","guideTo"].includes(d.type)&&d.target||["speak","showHint","showRecommendation"].includes(d.type)&&!d.value.trim()||d.type==="setState"&&!["idle","observing","thinking","speaking","guiding","dozing","sleeping","waking"].includes(d.value)?null:d}function iv(c,d){const r=lv(c);if(!r)return{instruction:null,reason:"malformed-or-unknown"};if(r.type==="highlight"||r.type==="guideTo"){const u=d.find(A=>A.id===r.target);if(!(u!=null&&u.capabilities.includes(r.type))||(r.type==="highlight"?!(u.visible??u.available):!(u.guideable??u.available)))return{instruction:null,reason:"target-unavailable"}}return{instruction:r}}const sv={firstEvaluationMs:3e4,cooldownMs:9e4,maxMessages:2,maxUnanswered:2,dwellSeconds:5,allowLightInvite:!0};function SA(c,d,r){const u=r==null?void 0:r.names[c];return d==="invite"?c==="zh"?"需要我帮你快速定位一个项目或经历吗？":"Would you like a quick guide to a project or experience?":c==="zh"?`想了解${u||"这个项目"}的背景或关键成果吗？`:`Would you like a concise walkthrough of ${u||"this project"}?`}function cv(c,d,r,u,A=sv){if(c.dnd||u-r.startedAt<A.firstEvaluationMs||r.proactiveCount>=A.maxMessages||r.unanswered>=A.maxUnanswered)return{kind:"silent"};if(r.lastMessageAt!==null&&u-r.lastMessageAt<A.cooldownMs)return{kind:"silent"};const E=c.events.slice().reverse().find(B=>B.type==="dwell"&&B.duration>=A.dwellSeconds||B.type==="click"&&(!!B.projectId||!!B.tag)||B.type==="visit"&&B.target.startsWith("project:"));if(E){const B=d.find(y=>y.id===E.target)||d.find(y=>y.projectId===E.projectId&&y.available);return{kind:"recommendation",message:SA(c.locale,"recommendation",B)}}return A.allowLightInvite&&!r.lightInviteUsed?{kind:"invite",message:SA(c.locale,"invite")}:{kind:"silent"}}function uv(c,d){return c==="sleeping"?["waking","idle"]:c==="dozing"&&d==="interaction"?["observing"]:["thinking"]}function ov(c,d,r=60,u=120){return c==="sleeping"?c:d>=u?"sleeping":c==="idle"&&d>=r?"dozing":c}const rv=["speak","setState","highlight","guideTo","showHint","showRecommendation"];function dv(c,d,r,u,A){return{state:c,observations:((d==null?void 0:d.events)||[]).slice(-8).map(({type:E,target:B,projectId:y,tag:x})=>({type:E,target:B,...y?{projectId:y}:{},...x?{tag:x}:{}})),targets:r.filter(E=>E.available).map(E=>({id:E.id,en:E.names.en,zh:E.names.zh,capabilities:E.capabilities})),allowedActions:rv,tools:u.filter(E=>E==="searchKnowledge"||E==="readKnowledge"||E==="present").slice(-8),sources:A.slice(-8).map(E=>({title:E.title,...E.url?{url:E.url}:{},...E.sourceType?{sourceType:E.sourceType}:{}}))}}class fv{constructor(){Zt(this,"destination","");Zt(this,"locale","en");Zt(this,"route",[]);Zt(this,"recovery",[])}start(d,r){return!Ya.some(u=>u.id===d)&&!Uo.some(u=>`folder:${u}`===d)?!1:(this.destination=d,this.locale=r,this.route=this.path(),this.recovery=[],!0)}cancel(){this.destination="",this.route=[],this.recovery=[]}get active(){return!!this.destination}snapshot(){return{destination:this.destination,route:[...this.route],recovery:[...this.recovery]}}path(){return this.destination.startsWith("folder:")?[this.destination.slice(7)]:["projects",`project:${this.destination}`]}update(d){var B;if(!this.active)return null;const r=d.windows.filter(y=>!y.minimized),u=(B=r.at(-1))==null?void 0:B.id,A=this.path(),E=A.at(-1);if(u===E){const y=Ya.find(_=>_.id===this.destination),x=Uo.find(_=>_===E),N=y?`${this.locale==="zh"?"已到达项目详情。":"You have reached the project details. "}${y.title} — ${y.description[this.locale]}`:`${this.locale==="zh"?"已打开你要看的内容：":"The requested content is open: "}${x?RA[x][this.locale]:E}。`;return this.cancel(),{done:!0,message:N}}if(this.route=u==="projects"&&A.length>1?[E]:A,this.recovery=[],u==="projects"&&A.length>1)return{done:!1,step:{kind:"path",target:`project-card:${this.destination}`}};if(u){const x=r.slice(0,-1).some(N=>A.includes(N.id))||r.length===1?`window:minimize:${u}`:"desktop:show";return this.recovery=[{kind:"recovery",target:x}],{done:!1,step:this.recovery[0]}}return{done:!1,step:{kind:"path",target:`folder:${A[0]}`}}}}function Qa(c){window.dispatchEvent(new CustomEvent("monty-cue",{detail:{...c,until:c.persistent?Number.POSITIVE_INFINITY:Object.keys(c).length?performance.now()+6e3:0}}))}function hv(c){var Fe;const d=Rl(),r=z.useRef(d);r.current=d;const u=z.useRef(new tv),A=z.useRef(null),E=z.useRef(""),B=z.useRef(null),y=z.useRef("idle"),x=z.useRef({startedAt:performance.now(),lastMessageAt:null,proactiveCount:0,unanswered:0,lightInviteUsed:!1}),N=z.useRef(""),[_,w]=z.useState([]),[O,L]=z.useState(!1),[G,it]=z.useState(null);z.useEffect(()=>{O&&(x.current.lightInviteUsed=!0,x.current.lastMessageAt=performance.now())},[O]);const[K,Et]=z.useState(null),[Bt,nt]=z.useState([]),[Vt,Gt]=z.useState(""),[Xt,tt]=z.useState(!1),[rt,se]=z.useState(!1),[Yt,fe]=z.useState(!1),[ne,ze]=z.useState("idle"),[_e,Tt]=z.useState(!1),[j,W]=z.useState([]),[F,Mt]=z.useState(c),ht=z.useRef({dnd:Yt,welcomeVisible:O,choosing:!1});ht.current={dnd:Yt,welcomeVisible:O,choosing:_.length>0};const qt=z.useRef(0),ye=z.useRef([]),Ht=z.useRef(null),g=z.useRef(new fv),R=z.useRef(""),[X,k]=z.useState(null),H=z.useRef(c);z.useEffect(()=>{const U=q=>{const ut=q.detail;k(ut),ut&&nt(bt=>bt.map(at=>at.id===N.current&&at.steps.at(-1)!==ut.text?{...at,steps:[...at.steps,ut.text]}:at))};return window.addEventListener("monty-guide-progress",U),()=>window.removeEventListener("monty-guide-progress",U)},[]);const ct=(U,q)=>nt(ut=>ut.map(bt=>bt.id===U?q(bt):bt)),st=(U,q=!0)=>{y.current=U,ze(U),q&&Qa({state:U,gesture:U==="thinking"?"think":U==="guiding"?"point":"idle"})},Q=U=>{const[q,ut]=uv(y.current,U);st(q),ut&&setTimeout(()=>{y.current===q&&!Ht.current&&st(ut)},180)},J=()=>{var U;w([]),qt.current++,(U=A.current)==null||U.abort(),A.current=null,g.current.cancel(),R.current="",Ht.current=null,k(null),E.current&&u.current.cancel(E.current),E.current="",tt(!1),Tt(!1),y.current="idle",ze("idle"),Qa({}),document.querySelectorAll(".agent-highlight").forEach(q=>q.classList.remove("agent-highlight"))};function zt(){var ut;const U=g.current.update(r.current.state);if(!U)return;if(U.done){Ht.current=null,k(null),Qa({}),st("idle",!1),document.querySelectorAll(".agent-highlight").forEach(bt=>bt.classList.remove("agent-highlight")),ct(N.current,bt=>({...bt,text:U.message}));return}const q=U.step.target;((ut=Ht.current)==null?void 0:ut.targetId)!==q&&(Ht.current={targetId:q,startedAt:performance.now()},st("guiding",!1),Qa({target:q,state:"guiding",persistent:!0}))}function Pt(U,q){g.current.start(U,H.current)&&(R.current=q,N.current=q,w([]),zt())}function we(U){const q=H.current;J(),H.current=q,se(!0),L(!1);const ut=crypto.randomUUID();N.current=ut;const bt=Ya.find(at=>at.id===U);nt(at=>[...at,{id:crypto.randomUUID(),role:"user",text:`${q==="zh"?"带我看":"Take me to"} ${(bt==null?void 0:bt.title)??U}`,sources:[],createdAt:Date.now(),activity:[],steps:[]},{id:ut,role:"monty",text:"",sources:[],createdAt:Date.now(),activity:[],steps:[]}]),Pt(U,ut)}const ae=z.useRef(zt);ae.current=zt,z.useEffect(()=>{ae.current()},[d.state]),z.useEffect(()=>d.targetRegistry.subscribe(()=>queueMicrotask(()=>ae.current())),[d.targetRegistry]),z.useEffect(()=>{const U=()=>{y.current==="sleeping"&&Q("interaction")},q=at=>{var ot,ce,Oe,Ha,Ua,Oi;const $=(ce=(ot=at.target)==null?void 0:ot.closest)==null?void 0:ce.call(ot,"[data-agent-id]"),yt=$==null?void 0:$.dataset.agentId;at.type==="click"&&($==null||$.classList.remove("agent-highlight"));const Z=Ht.current;if((Ha=(Oe=at.target)==null?void 0:Oe.closest)!=null&&Ha.call(Oe,".power-control")){J();return}if(Z){if(at.type==="click"&&yt===Z.targetId&&(Ht.current={...Z,awaiting:!0},Qa({target:yt,state:"guiding",persistent:!0,waiting:!0}),!g.current.active)){J();return}queueMicrotask(()=>ae.current());return}(Oi=(Ua=at.target)==null?void 0:Ua.closest)!=null&&Oi.call(Ua,"[data-agent-ui]")||(r.current.touch(),at.type==="click"&&A.current&&J())},ut=at=>{at.key==="Escape"&&(at.preventDefault(),J())};document.addEventListener("pointermove",U,{passive:!0}),document.addEventListener("pointerdown",U,{passive:!0}),document.addEventListener("keydown",U),document.addEventListener("click",q,!0),document.addEventListener("keydown",ut,!0);const bt=()=>{document.hidden&&!Ht.current&&J()};return document.addEventListener("visibilitychange",bt),()=>{var at;document.removeEventListener("pointermove",U),document.removeEventListener("pointerdown",U),document.removeEventListener("keydown",U),document.removeEventListener("click",q,!0),document.removeEventListener("keydown",ut,!0),document.removeEventListener("visibilitychange",bt),(at=A.current)==null||at.abort(),u.current.clear()}},[]),z.useEffect(()=>{const U=new nv(()=>r.current.snapshot());return B.current=U,U.attach()},[]);function _t(U,q,ut){ye.current=[...ye.current.slice(-19),{kind:U,instruction:q,reason:ut}]}function Ct(U,q,ut){const bt=r.current.snapshot(),at=iv(U,bt.targets),$=at.instruction;if(R.current!==q){if(!$){_t("ignored-instruction",void 0,at.reason);return}if($.type==="highlight"||$.type==="guideTo"){const yt=r.current.targetRegistry.resolve($.target,$.type,bt),Z=yt.element;if(!Z){_t("ignored-instruction",$.type,yt.reason);return}if($.type==="highlight")Z.classList.add("agent-highlight"),ut.addEventListener("abort",()=>Z.classList.remove("agent-highlight"),{once:!0});else{const ot=$.target.startsWith("project-card:")?$.target.slice(13):$.target;Ya.some(ce=>ce.id===ot)||ot.startsWith("folder:")?Pt(ot,q):(Ht.current={targetId:$.target,startedAt:performance.now()},st("guiding",!1),Qa({target:$.target,state:"guiding",persistent:!0}))}}else $.type==="speak"||$.type==="showRecommendation"?(st("speaking"),ct(q,yt=>({...yt,text:yt.text+(yt.text?`
`:"")+$.value}))):$.type==="showHint"?Qa({text:$.value}):st($.value);_t("presentation",$.type)}}async function Ce(U,q,ut,bt,at){let $=U,yt=q;for(;!bt.signal.aborted&&at===qt.current;){for await(const Z of u.current.stream($,yt,bt.signal)){if(at!==qt.current||bt.signal.aborted)return;if(u.current.usage&&Et(u.current.usage),Z.type==="usage"&&(u.current.usage=Z.usage,Et(Z.usage)),Z.type==="run"&&(E.current=Z.runId),Z.type==="guidePlan"&&Pt(Z.destination,ut),Z.type==="projectChoices"&&(w(Ya.filter(ot=>Array.isArray(Z.ids)&&Z.ids.includes(ot.id)).map(ot=>ot.id)),ct(ut,ot=>({...ot,text:Z.message}))),Z.type==="delta"&&(Tt(!1),st("speaking"),ct(ut,ot=>({...ot,text:ot.text+Z.text}))),Z.type==="status"&&(Tt(!1),Gt(Z.text),st("thinking")),Z.type==="source"&&ct(ut,ot=>({...ot,sources:[...ot.sources.filter(ce=>ce.id!==Z.source.id),Z.source]})),Z.type==="activity"&&(ct(ut,ot=>({...ot,activity:[...ot.activity,Z.name]})),W(ot=>[...ot.slice(-7),Z.name]),Tt(Z.name==="searchKnowledge"||Z.name==="readKnowledge")),Z.type==="presentation"&&Ct(Z.instruction,ut,bt.signal),Z.type==="error")throw _t("stream-error"),new ma(Z.code||"request-failed");Z.type==="done"&&!Z.waiting&&(E.current="",A.current=null,tt(!1),Tt(!1),Gt(""),y.current!=="guiding"&&st("idle",!1))}return}}async function le(U,q=!1){var Z;if(!q)J(),H.current=av(U)||c;else if(q&&A.current)return;const ut=(Z=B.current)==null?void 0:Z.snapshot({locale:c,dnd:ht.current.dnd,proactiveCount:x.current.proactiveCount});let bt=U;if(q){if(!ut)return;const ot=cv(ut,r.current.snapshot().targets,x.current,performance.now());if(ot.kind==="silent")return;bt=ot.message,x.current={...x.current,proactiveCount:x.current.proactiveCount+1,unanswered:x.current.unanswered+1,lastMessageAt:performance.now(),lightInviteUsed:x.current.lightInviteUsed||ot.kind==="invite"}}else x.current={...x.current,unanswered:0},Mt(H.current),Q("message");const at=qt.current,$=new AbortController;A.current=$,tt(!0),Gt(""),q||se(!0);const yt=crypto.randomUUID();N.current=yt,nt(ot=>[...ot,...q?[]:[{id:crypto.randomUUID(),role:"user",text:U,sources:[],createdAt:Date.now(),activity:[],steps:[]}],{id:yt,role:"monty",text:"",sources:[],createdAt:Date.now(),activity:[],steps:[]}]);try{await Ce(q?"/observe":"/chat",{requestId:crypto.randomUUID(),message:bt,messageLocale:q?void 0:H.current,pageContext:r.current.snapshot(),dnd:ht.current.dnd,behavior:ut},yt,$,at)}catch(ot){if(!$.signal.aborted&&at===qt.current){if(R.current===yt&&g.current.active){A.current=null,E.current="",tt(!1),Tt(!1),Gt("");return}if(_t("stream-failure"),J(),q)nt(ce=>ce.filter(Oe=>Oe.id!==yt)),Gt("");else{const ce=ev(ot,H.current);Gt(ce),ct(yt,Oe=>({...Oe,text:Oe.text+(Oe.text?`
`:"")+ce}))}}}}const Me=z.useRef(le);Me.current=le,z.useEffect(()=>{const U=setInterval(()=>{var Z;const q=B.current;if(!q)return;const ut=r.current.snapshot();if(q.tick(ut),Ht.current)return;const bt=q.snapshot({locale:c,dnd:ht.current.dnd,proactiveCount:x.current.proactiveCount}),at=ov(y.current,bt.idleSeconds);at!==y.current&&st(at);const $=q.consumeMeaningfulInteraction(),yt=q.consumePageActivity();(y.current==="sleeping"&&$||y.current==="dozing"&&yt)&&Q("interaction"),!(document.hidden||ht.current.dnd||ht.current.welcomeVisible||ht.current.choosing||A.current||Ht.current||document.querySelector('.monitor-screen[data-booting="true"]'))&&((Z=document.activeElement)!=null&&Z.matches('input,textarea,[contenteditable="true"]')||[...document.querySelectorAll("video")].some(ot=>!ot.paused&&!ot.ended)||Me.current("",!0))},1e3);return()=>clearInterval(U)},[c]);const Ee=(Fe=B.current)==null?void 0:Fe.snapshot({locale:F,dnd:Yt,proactiveCount:x.current.proactiveCount}),An=dv(ne,Ee,r.current.snapshot().targets,j,Bt.flatMap(U=>U.sources));return{startGuide:we,projectChoices:_,welcomeVisible:O,welcomeHost:G,setWelcomeHost:it,setWelcomeVisible:L,usage:K,refreshUsage:async()=>{const U=qt.current;try{const q=await u.current.quota();U===qt.current&&Et(q)}catch{}},guideProgress:X,guideLocale:H.current,lines:Bt,status:Vt,busy:Xt,open:rt,setOpen:se,dnd:Yt,start:le,stop:J,state:ne,scanning:_e,activity:An,activityLocale:F,debug:()=>{var U;return{behavior:((U=B.current)==null?void 0:U.snapshot({locale:c,dnd:Yt,proactiveCount:x.current.proactiveCount}))??null,context:r.current.snapshot(),runId:E.current,activitySafeTrace:ye.current,localGuide:g.current.snapshot()}},setDnd:U=>{fe(U),window.dispatchEvent(new CustomEvent("monty-dnd",{detail:U}))},clear:async()=>{J(),N.current="",nt([]),Gt(""),Et(null),await u.current.clear()}}}const GA=z.createContext(null);function Av({language:c,children:d}){const r=hv(c);return f.jsx(GA.Provider,{value:r,children:d})}function Nl(){const c=z.useContext(GA);if(!c)throw new Error("Missing AgentProvider");return c}function mv({language:c,open:d}){var L;const r=Nl(),u=c==="zh",A=r.lines.filter(G=>G.role==="monty").at(-1),[E,B]=z.useState(""),[y,x]=z.useState(),N=z.useRef(null),_=z.useRef(null),w=((L=r.guideProgress)==null?void 0:L.text)||(A==null?void 0:A.text.trim())||r.status||(r.busy?u?"想一想…":"Thinking…":"");if(z.useEffect(()=>{if(!w){B("");return}if(!w.startsWith(E)){B("");return}if(E.length>=w.length)return;const G=window.setTimeout(()=>B(w.slice(0,Math.min(w.length,E.length+3))),16);return()=>window.clearTimeout(G)},[w,E]),z.useLayoutEffect(()=>{const G=N.current,it=_.current;if(!G||!it)return;const K=()=>{const Bt=getComputedStyle(G),nt=["paddingTop","paddingBottom","borderTopWidth","borderBottomWidth"].reduce((Vt,Gt)=>Vt+parseFloat(Bt[Gt]||"0"),0);x(Math.min(it.getBoundingClientRect().height+nt,Math.min(280,window.innerHeight*.42)))};K();const Et=new ResizeObserver(K);return Et.observe(it),window.addEventListener("resize",K),()=>{Et.disconnect(),window.removeEventListener("resize",K)}},[d,w,r.projectChoices.length]),!d&&!w)return null;const O=r.guideProgress?w:E;return f.jsx("section",{ref:N,className:`monty-speech${r.guideProgress?" is-guiding":""}`,"data-agent-ui":!0,"aria-label":u?"Monty 消息":"Monty message",style:y?{height:y}:void 0,children:f.jsxs("div",{ref:_,className:"monty-speech-content",children:[f.jsxs("p",{className:"monty-utterance","aria-live":"polite",children:[O,f.jsx("span",{className:"typing-caret","aria-hidden":"true",children:"▋"})]}),!!r.projectChoices.length&&f.jsx("div",{className:"terminal-offer-list project-choice-list",children:r.projectChoices.map((G,it)=>{const K=Ya.find(Et=>Et.id===G);return f.jsxs("div",{children:[f.jsxs("button",{type:"button","data-project-choice":G,disabled:r.busy,onClick:()=>r.startGuide(K.id),children:[it+1,". ",K.title]}),f.jsx("small",{children:K.description[r.guideLocale]})]},G)})}),!r.guideProgress&&!!(A!=null&&A.sources.length)&&f.jsxs("details",{children:[f.jsx("summary",{children:u?"来源":"Sources"}),f.jsx("div",{className:"monty-sources",children:A.sources.map(G=>G.url?f.jsx("a",{href:G.url,target:"_blank",rel:"noreferrer",children:G.title},G.id):f.jsx("span",{children:G.title},G.id))})]})]})})}function LA({language:c,summary:d}){const r=c==="zh",u=A=>r?A.zh:A.en;return f.jsxs("section",{id:"agent-activity-panel",className:"agent-activity-panel","aria-label":r?"Monty 活动摘要":"Monty activity summary",children:[f.jsxs("p",{className:"activity-state",children:[r?"状态":"State",": ",f.jsx("strong",{children:d.state})]}),f.jsx(sc,{title:r?"近期语义观察":"Recent semantic observations",items:d.observations.map(A=>`${A.type} · ${A.target}`)}),f.jsx(sc,{title:r?"当前可见目标":"Visible targets",items:d.targets.map(A=>`${u(A)} · ${A.id}`)}),f.jsx(sc,{title:r?"允许的展示动作":"Allowed display actions",items:d.allowedActions}),f.jsx(sc,{title:r?"已使用工具":"Tools used",items:d.tools}),f.jsxs("div",{children:[f.jsx("h3",{children:r?"来源":"Sources"}),d.sources.length?f.jsx("ul",{children:d.sources.map((A,E)=>f.jsx("li",{children:A.url?f.jsx("a",{href:A.url,target:"_blank",rel:"noreferrer",children:A.title}):A.title},`${A.title}-${E}`))}):f.jsx("p",{children:r?"尚无来源。":"No sources yet."})]})]})}function sc({title:c,items:d}){return f.jsxs("div",{children:[f.jsx("h3",{children:c}),d.length?f.jsx("ul",{children:d.map((r,u)=>f.jsx("li",{children:r},`${r}-${u}`))}):f.jsx("p",{children:"—"})]})}function gv({language:c}){const d=Nl(),r=c==="zh";return f.jsxs("section",{className:"monty-settings","data-agent-ui":!0,"aria-label":r?"Monty 设置":"Monty settings",children:[f.jsx("h2",{children:r?"设置":"Settings"}),f.jsxs("label",{children:[f.jsx("input",{type:"checkbox","aria-label":r?"Monty 免打扰":"Monty do not disturb",checked:d.dnd,onChange:u=>d.setDnd(u.target.checked)}),r?"免打扰":"Do not disturb"]}),f.jsx("button",{onClick:()=>void d.clear(),children:r?"清空本次会话":"Clear this session"}),f.jsx("p",{children:r?"仅在本次会话中使用语义浏览摘要；刷新后重置。":"A semantic browsing summary is used only for this session and resets on refresh."}),f.jsxs("details",{children:[f.jsx("summary",{children:r?"会话活动":"Session activity"}),f.jsx(LA,{language:d.activityLocale,summary:d.activity})]})]})}function pv(c,d){if(!Ya.some(r=>r.id===c))throw new Error(`Missing Monty guide catalog entry: ${c}`);return{id:`project-card:${c}`,names:d,scope:{window:"projects",panel:"collection"},capabilities:["highlight","guideTo"],projectId:c,completion:{window:`project:${c}`,panel:"detail"}}}function vv(c,d,r,u,A,E=""){const B=A==="zh";if(E==="desktop:show")return{phase:r?"waiting-for-window":d?"waiting-for-click":"travel-to-target",direction:c,text:B?"请点击「显示桌面」，收起这些窗口后继续。":"Click “Show desktop” to put these windows away and continue."};if(E.startsWith("window:minimize:"))return r?{phase:"waiting-for-window",direction:c,text:B?"正在等待窗口收起，再继续带你过去…":"Waiting for the window to minimize, then we’ll continue…"}:{phase:d?"waiting-for-click":"travel-to-target",direction:c,text:B?`请点击「${u}」，先收起这个窗口，再继续前往目标。`:`Click “${u}” to put this window away, then we’ll continue to your destination.`};if(r)return{phase:"waiting-for-window",direction:c,text:B?"正在等待内容打开…":"Waiting for the content to open…"};if(c==="visible")return d?{phase:"waiting-for-click",direction:c,text:B?`找到了「${u}」，请点击继续。`:`Found ${u}. Click it to continue.`}:{phase:"travel-to-target",direction:c,text:B?`正在指向「${u}」…`:`Moving to ${u}…`};if(c==="unavailable")return{phase:"unavailable",direction:c,text:B?"请先打开对应内容后再继续。":"Please open the relevant content to continue."};const y={above:["上","up"],below:["下","down"],left:["左","left"],right:["右","right"]}[c];return{phase:"scroll-cue",direction:c,text:B?`请向${y[0]}滚动，找到「${u}」后我会指给你看。`:`Scroll ${y[1]} to find ${u}. I’ll point to it when it appears.`}}function bv(c,d){return{marker:`monty-${c}`,wakingEffect:c==="waking"?d?"waking-static":"waking-flash":"none"}}function yv(c,d){return d==="zh"?{idle:"空闲",observing:"观察中",thinking:"思考中",speaking:"回复中",guiding:"引导中",dozing:"打盹",sleeping:"休眠",waking:"已唤醒"}[c]:c}function wv(c,d,r,u,A){return r?"speaking":u?"scan":A==="dozing"?"dozing":A==="sleeping"?"sleep":c==="move"?"travel":c==="look"?"idle":c==="point"?d?"guide-left":"guide-right":"idle"}function Ev(c){return c==="guiding"?"point":c==="observing"||c==="thinking"||c==="waking"?"look":"idle"}function Tv({language:c,launchFromCenter:d=!1}){const r=Nl(),u=Rl(),A=z.useRef(r.guideLocale);A.current=r.guideLocale;const E=z.useRef(u);E.current=u;const[B,y]=z.useState(!1),[x,N]=z.useState(!1),_=z.useRef(null),w=z.useRef(r.busy);w.current=r.busy;const O=z.useRef(r.scanning);O.current=r.scanning;const L=z.useRef(r.state);L.current=r.state;const G=matchMedia("(prefers-reduced-motion: reduce)").matches,it=bv(r.state,G),K=z.useRef({dnd:r.dnd});K.current={dnd:r.dnd};const Et=z.useRef(null),Bt=z.useRef(null);return z.useEffect(()=>{fetch("/assets/monty.json?v=monty-v3").then(nt=>nt.ok?nt.json():Promise.reject()).then(nt=>{_.current=nt}).catch(()=>{})},[]),z.useEffect(()=>{const nt=Et.current,Vt=Bt.current,Gt=H=>({x:innerWidth-H-(innerWidth<=700?34:64),y:innerHeight-H-(innerWidth<=700?48:74)}),Xt=innerWidth<=700?62:100;let tt=d?(innerWidth-Xt)/2:Gt(Xt).x,rt=d?(innerHeight-Xt)/2:Gt(Xt).y;performance.now();let se=0,Yt=0,fe="",ne=0,ze="",_e="";const Tt=new Set;let j={until:0},W=!1;const F=matchMedia("(prefers-reduced-motion: reduce)").matches,Mt=H=>{j=H.detail},ht=H=>{W=H.detail};window.addEventListener("monty-cue",Mt),window.addEventListener("monty-dnd",ht);const qt=()=>{performance.now()},ye=()=>{performance.now()},Ht=()=>{performance.now()},g=()=>{},R=H=>{ze!==H&&(Vt.textContent=H,Vt.hidden=!H,ze=H)},X=H=>{var ut,bt,at;const ct=Math.min((H-se)/1e3||.016,.05);se=H;const Q=innerWidth<=700?62:100,J=Gt(Q);let zt=J.x,Pt=J.y,we=Ev(L.current),ae="";F||(zt+=Math.sin(H/5400)*8,Pt+=Math.sin(H/1800)*5);const _t=Math.max(10,innerWidth-Q-15),Ct=Math.max(10,innerHeight-Q-24);(W||K.current.dnd)&&(ae="");let Ce=!1;if(j.until>performance.now()){j.text&&(ae=j.text),nt.dataset.gesture=j.gesture||"";const $=j.target?E.current.targetRegistry.resolve(j.target,"guideTo",E.current.snapshot()).element:null;if($&&jA($)){Ce=!0;const yt=$.getBoundingClientRect();zt=yt.right+16,Pt=yt.top-Q,zt>_t&&(zt=yt.left-Q-16),zt=Math.max(10,Math.min(zt,_t)),Pt=Math.max(55,Math.min(Pt,Ct));const Z=(ut=document.querySelector(".monty-drawer"))==null?void 0:ut.getBoundingClientRect();Z&&zt<Z.right&&zt+Q>Z.left&&Pt+Q>Z.top&&(Pt=Z.top-Q-16),we=Math.hypot(zt-tt,Pt-rt)>8?"move":"point",nt.dataset.visibilityDirection="visible",!j.waiting&&(we==="point"||$.classList.contains("agent-highlight"))&&($.classList.add("agent-highlight"),Tt.add($))}else if(j.target){const yt=E.current.targetRegistry.direction(j.target,E.current.snapshot());nt.dataset.visibilityDirection=yt;const Z=(bt=$==null?void 0:$.closest(".content-scroll"))==null?void 0:bt.getBoundingClientRect();Z&&(zt=Math.min(_t,Z.right+12),Pt=Math.max(55,Math.min(Ct,(Z.top+Z.bottom-Q)/2))),!F&&(yt==="above"||yt==="below")&&(Pt+=Math.sin(H/280)*10),we="look"}if(j.target){const yt=E.current.targetRegistry.direction(j.target,E.current.snapshot()),Z=((at=E.current.targetRegistry.names(j.target))==null?void 0:at[A.current])??j.target,ot=vv(yt,we==="point",!!j.waiting,Z,A.current,j.target);nt.dataset.guidePhase=ot.phase;const ce=JSON.stringify(ot);ce!==_e&&(_e=ce,window.dispatchEvent(new CustomEvent("monty-guide-progress",{detail:ot})))}}else nt.dataset.gesture="",delete nt.dataset.visibilityDirection,delete nt.dataset.guidePhase,Tt.forEach($=>$.classList.remove("agent-highlight")),Tt.clear(),_e&&(_e="",window.dispatchEvent(new CustomEvent("monty-guide-progress",{detail:null})));nt.dataset.agentState=j.until>performance.now()&&j.state||L.current,!j.target&&!Ce&&Math.hypot(zt-tt,Pt-rt)>8&&(we="move"),zt=Math.max(10,Math.min(zt,_t)),Pt=Math.max(55,Math.min(Pt,Ct)),tt+=(zt-tt)*(F?1:Math.min(1,ct*2.4)),rt+=(Pt-rt)*(F?1:Math.min(1,ct*2.4)),tt=Math.max(10,Math.min(tt,_t)),rt=Math.max(10,Math.min(rt,Ct)),nt.style.transform=`translate3d(${Math.round(tt)}px,${Math.round(rt)}px,0)`;const le=_.current,Me=wv(we,zt<tt,w.current,O.current,L.current);Me!==fe&&(fe=Me,ne=H);const Ee=le==null?void 0:le.animations[Me],An=(Ee==null?void 0:Ee.frames)??[0],Fe=Math.floor((H-ne)/(1e3/((Ee==null?void 0:Ee.fps)??6))),U=Ee!=null&&Ee.loop?Fe%An.length:Math.min(Fe,An.length-1),q=le==null?void 0:le.frames[An[U]??0];q&&le&&(nt.style.setProperty("--frame-x",`${q.x*100/(le.sheet.width-q.w)}%`),nt.style.setProperty("--frame-y",`${q.y*100/(le.sheet.height-q.h)}%`),nt.style.setProperty("--sprite-offset-x",`${q.offset[0]}px`),nt.style.setProperty("--sprite-offset-y",`${q.offset[1]}px`)),nt.dataset.mode=we,nt.dataset.reduced=String(F),nt.classList.remove("face-right"),nt.classList.toggle("bubble-right",tt<200),nt.classList.toggle("speech-below",rt<innerHeight/2),Tt.forEach($=>{$.isConnected||Tt.delete($)}),R(ae),Yt=requestAnimationFrame(X)},k=()=>{cancelAnimationFrame(Yt),document.hidden||(se=0,Yt=requestAnimationFrame(X))};return document.addEventListener("pointermove",qt,{passive:!0}),document.addEventListener("pointerdown",Ht,{passive:!0}),document.addEventListener("keydown",Ht),document.addEventListener("focusin",ye),document.addEventListener("focusout",g),document.documentElement.addEventListener("pointerleave",g),document.addEventListener("visibilitychange",k),Yt=requestAnimationFrame(X),()=>{window.removeEventListener("monty-cue",Mt),window.removeEventListener("monty-dnd",ht),cancelAnimationFrame(Yt),Tt.forEach(H=>H.classList.remove("agent-highlight")),Tt.clear(),document.removeEventListener("pointermove",qt),document.removeEventListener("pointerdown",Ht),document.removeEventListener("keydown",Ht),document.removeEventListener("focusin",ye),document.removeEventListener("focusout",g),document.documentElement.removeEventListener("pointerleave",g),document.removeEventListener("visibilitychange",k)}},[]),f.jsxs("div",{className:"monty-overlay",ref:Et,"data-agent-ui":!0,"data-visual-state":it.marker,"data-waking-effect":it.wakingEffect,children:[f.jsx("div",{ref:r.setWelcomeHost}),f.jsx("div",{className:"monty-bubble",ref:Bt,hidden:!0,"aria-hidden":"true"}),!r.welcomeVisible&&(u.active!=="monty-history"||r.guideProgress)&&f.jsx(mv,{language:c,open:B}),f.jsx("button",{className:"monty-avatar","aria-label":c==="zh"?"和 Monty 聊天":"Chat with Monty","aria-expanded":B,onClick:()=>{y(nt=>!nt),N(!1)},children:f.jsx("span",{className:"monty-sprite"})}),f.jsx("span",{className:"monty-scroll-arrow","aria-hidden":"true"}),f.jsx("span",{className:"monty-caption",children:"monty.exe"}),B&&f.jsxs("div",{className:"agent-settings-control",children:[f.jsx("button",{className:"activity-toggle","aria-label":c==="zh"?"打开 Monty 设置":"Open Monty settings","aria-expanded":x,onClick:()=>N(nt=>!nt),children:"⚙"}),f.jsx("button",{className:"activity-toggle history-toggle","aria-label":c==="zh"?"打开聊天记录":"Open chat history",title:c==="zh"?"聊天记录":"Chat history",onClick:()=>{u.open("monty-history"),N(!1)},children:f.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:f.jsx("path",{d:"M6 4h13v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h11v1a3 3 0 0 0 6 0M6 4a3 3 0 0 0-3 3v2h3V4Zm0 0v13M9 8h7M9 11h7M9 14h5"})})}),x&&f.jsx(gv,{language:c})]}),f.jsx("span",{className:"sr-only",role:"status",children:yv(r.state,c)})]})}const Ho=[{role:"系统工程师 · PingPong Vision",summary:"为 MULTIVAC 构建并部署智能设备监测系统，将工厂调研与真实设备测试转化为持续状态追踪、持久化存储和异常告警工作流。",highlights:["把 15 次以上工厂走访与制造企业访谈中的发现，转化为持续设备状态追踪和面向操作员的告警方案。","实现低开销监测流程，涵盖设备状态存储、结构化事件日志与异常状态检测。","连接摄像头及 ESP32/MQTT 电流与光电传感器，构建 FastAPI WebSocket/MJPEG、Flask REST API、TimescaleDB 和 React/Vite 看板的数据链路。","实现透视校正、数值归一化、重试与退避、连续失败自动停止、限流和不可读数据处理等可靠性机制。","使用 Docker / Docker Compose 容器化服务，通过 Coolify 和反向代理部署，密钥仅保留在后端。","以操作员动作、摄像头移动、屏幕变化和异常读数驱动监测逻辑，并在真实 MULTIVAC 设备上完成验证。"]},{role:"平台工程师 · 学生兼职",summary:"参与基于 Backstage 的内部开发者平台与云原生平台运维，连接服务目录、工程模板、CI/CD、OpenShift 部署和团队入驻流程。",highlights:["维护服务于 20 多个内部工程团队的 Backstage 平台，负责版本升级、插件评估、配置和上游变更适配。","设计复用超过 100 次的标准工程模板，自动化服务初始化、代码仓库设置、CI/CD、Helm 部署和团队入驻。","帮助团队以标准项目结构和开发 / 生产部署流程快速启动可交付服务。","支持 OpenShift 上的生命周期管理，包括 Helm 分阶段部署、配置更新、补丁、下线及 GitOps 工作流。","将项目纳入集中软件目录，并改进 Backstage 搜索，提升服务与文档的可发现性。","通过平台集成、目录元数据和可复用的入驻流程提升开发效率。"]},{role:"全栈开发工程师 · 学生兼职",summary:"构建 AI 增强型智能 ERP，涵盖订单管理、基于 RAG 的订单问答、用户权限与业务数据看板。",highlights:["参与构建供 200 多名内部员工使用的智能 ERP，以及面向订单的 RAG 问答流程。","实现文档解析、结构感知的语义分块、检索，以及订单和业务文档的 PDF 自动生成。","设计 REST API、关系数据模型、校验逻辑及订单、用户、角色、看板和知识工作流的业务规则。","实现身份认证、基于角色的访问控制和多种企业角色的权限流程。","通过后端数据聚合和看板，将生产、订单和文档数据转化为运营决策信息。","整理复杂业务数据，构建分析与可视化功能，呈现可行动的运营洞察。","容器化应用服务并参与 CI/CD，支持可复现的构建、测试和部署。","根据部署环境使用 Docker Compose、Nginx、AWS EC2/GCP，处理安全组、环境变量和运行时问题。"]},{role:"软件工程师 · 编译器 / LLVM / CI",summary:"参与科学计算负载优化、Linux 兼容性排查、编译器构建环境和 CI/CD 工作流维护。",highlights:["参与基于 Fortran 的科学与气象计算优化，关注数值性能及稳定性。","优化科学计算负载，处理编译器构建环境中的 Linux 兼容性问题。","排查跨 Linux 环境的构建、依赖、安装和兼容性问题。","维护用于编译器构建、测试和发布的 Jenkins 与 GitLab CI 流水线。","与开发和 QA 团队协作诊断构建失败，提升自动化验证流程的可靠性。"]}],DA=[{title:"面向 LLM 代码生成的结构化中间表示",summary:"研究“问题 → 中间表示 → 代码”的两阶段流程，对比 YAML、Mermaid、伪代码和自定义 DSL，在复杂任务上实现 12–14% 的代码生成性能提升，并控制提示与 token 开销。"},{title:"Web Harvest RAG",summary:"构建可配置的网站 / PDF 知识库与检索实验平台，比较分块、向量检索、BM25、混合融合、重排与查询改写；在 MULTIVAC 语料上达到 96.7% recall@5，并使用 LLM-as-judge 分析答案忠实度。"},{title:"自动化软件开发多智能体系统",summary:"使用 LangGraph / LangChain 构建四智能体协作流程，连接规划、执行、工单与 GraphQL 工具，任务成功率超过 83%；在 AWS 上部署，并结合基础设施即代码工作流。"},{title:"个人网站 · huxiaoheng.com",summary:"以 React、Express.js 和 MongoDB 构建项目、博客与演示管理平台，使用 Docker、Nginx 和 Google Cloud 部署。"},{title:"Python Artifact Logger & Viewer",summary:"构建跨本地、AWS S3 与数据库元数据的实验产物追踪模块，以 Flask 提供查询、比较和可视化，并接入 Dynatrace 可用性监控。"},{title:"无人机仿真系统",summary:"连接 PX4、基于 seL4 的伴随计算机与 Raspberry Pi，实现 C++ 传感器数据代理，将原始数据转为控制与监测所需的结构化信息。"}],Cv={programmingLanguages:["Languages","编程语言"],backendAndApis:["Backend & APIs","后端与 API"],frontend:["Frontend","前端"],databasesAndData:["Databases & data","数据库与数据"],aiLlmEngineering:["AI & LLM engineering","AI 与大模型工程"],cloudDevOpsPlatform:["Cloud & platform","云与平台工程"],mlopsDataops:["MLOps & DataOps","MLOps 与 DataOps"],collaborationAndTools:["Collaboration & tools","协作工具"]},Pe={location:"Munich, Germany",email:"huxiaoheng33@gmail.com",linkedIn:"https://www.linkedin.com/in/xiaohenghu",summary:"Software engineer with experience across fullstack product development, AI/LLM applications, internal developer platforms, CI/CD, cloud deployment, and MLOps-adjacent artifact/data workflows.",languages:{English:"C1 - Advanced",Chinese:"Native",German:"A2 - Basic"},experience:[{date:"Apr 2026 - Jul 2026",company:"Digital Product School / UnternehmerTUM & MULTIVAC",location:"Munich, Germany",role:"System Engineer, PingPong Vision",summary:"Built and deployed a smart monitoring agent system for continuous machine-state tracking and alert-ready workflows.",highlights:["Translated insights from 15+ factory visits into a smart monitoring agent concept.","Built persistent state storage, structured event logs, and abnormal-state detection."],technologies:["React","Vite","FastAPI","Flask","TimescaleDB","OpenCV","Docker"]},{date:"Dec 2024 - Mar 2026",company:"Infineon Technologies",location:"Neubiberg, Germany",role:"Platform Engineer (Working Student)",summary:"Worked on a Backstage-based internal developer platform and cloud-native platform operations.",highlights:["Maintained a platform serving 20+ internal engineering teams.","Designed golden-path templates reused 100+ times."],technologies:["Backstage","OpenShift","Kubernetes","Helm","GitLab CI","Docker"]},{date:"Jul 2024 - Dec 2024",company:"Innocoso",location:"Oberhaching, Germany",role:"Fullstack Developer (Working Student)",summary:"Built an AI-augmented smart ERP platform with order workflows, RAG-backed Q&A, and dashboards.",highlights:["Built order-management and RAG workflows for 200+ internal employees.","Implemented APIs, role-based access control, and operational dashboards."],technologies:["Python","Django","PostgreSQL","React","RAG","Docker"]},{date:"Sep 2021 - Jul 2022",company:"Huawei",location:"Hangzhou, China",role:"Software Engineer (Compiler / LLVM / CI)",summary:"Worked on scientific computation workloads, Linux compatibility, compiler build environments, and CI/CD.",highlights:["Optimized scientific workloads and resolved Linux compatibility issues.","Maintained Jenkins and GitLab CI pipelines."],technologies:["C++","Fortran","LLVM","Linux","Jenkins","GitLab CI"]}],education:[{date:"Oct 2023 - Mar 2026",title:"M.Sc. Informatics",school:"Technical University of Munich",location:"Munich, Germany",grade:"2.2",courses:["Cloud Information Systems","Natural Language Processing","Computer Vision II"]},{date:"Sep 2017 - Jul 2021",title:"B.Sc. Software Engineering",school:"Wuhan University of Technology",location:"Wuhan, China",grade:"1.6 (German system)",courses:["Data Structures & Algorithms","Operating Systems","Database Systems"]}],projects:[{date:"Mar 2025 - Oct 2025",title:"Structured Intermediate Representations for LLM Code Generation",org:"Master Thesis, Technical University of Munich",summary:"Researched structured intermediate representations for improving LLM code generation.",details:["Designed a two-stage Problem → IR → Code pipeline.","Improved performance by 12–14% on complex tasks."],technologies:["LLM evaluation","YAML","Mermaid","Python"]},{date:"Mar 2026 - Apr 2026",title:"Web Harvest RAG",org:"Personal Project",summary:"Built a config-driven full-stack RAG chatbot and retrieval experimentation lab.",details:["Implemented ingestion, hybrid retrieval, and evaluation workflows."],technologies:["Next.js","FastAPI","RAG","BM25"]},{date:"Sep 2024 - Feb 2025",title:"Multi-Agent System for Automated Software Development",org:"TUM-DI-LAB & Reply",summary:"Built a LangGraph/LangChain-based multi-agent system for software delivery.",details:["Coordinated planning, task execution, and ticket workflows."],technologies:["LangGraph","LangChain","GraphQL","AWS"]},{date:"May 2024 - Oct 2024",title:"Personal Website Development - huxiaoheng.com",org:"Personal Project",summary:"Built and deployed a full-stack portfolio website.",details:["Built React, Express.js, MongoDB, Docker, Nginx, and GCP modules."],technologies:["React","Express.js","MongoDB","GCP"]},{date:"Oct 2023 - Feb 2024",title:"Python Artifact Logger & Viewer Module",org:"Personal Project",summary:"Built an artifact tracking module and Flask viewer for experiment outputs.",details:["Tracked local, cloud, and database-backed artifacts."],technologies:["Python","Flask","AWS S3"]},{date:"Feb 2023 - Aug 2023",title:"Drone Simulator Project",org:"Academic Project",summary:"Built parts of a PX4 and seL4 drone-control simulation system.",details:["Developed a C++ sensor-data proxy for the companion computer."],technologies:["C++","PX4","seL4","Raspberry Pi"]}],skills:{programmingLanguages:["Python","TypeScript","JavaScript","C++","Java"],backendAndApis:["Django","Flask","Node.js","REST APIs","GraphQL"],frontend:["React","Next.js","Tailwind CSS"],databasesAndData:["PostgreSQL","MongoDB","BM25","Vector retrieval"],aiLlmEngineering:["LangChain","LangGraph","RAG systems","LLM evaluation"],cloudDevOpsPlatform:["AWS","Docker","Kubernetes","OpenShift","Backstage"],mlopsDataops:["Artifact tracking","Experiment management","AWS S3"],collaborationAndTools:["GitHub","Figma","Codex","CI/CD workflows"]}};function Mv(c,d){return`${c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"tag"}-${d}`}function Sv({value:c,id:d,scope:r,projectId:u}){const A=Hn({id:d,names:{en:c,zh:c},scope:r,capabilities:["highlight","guideTo"],...u?{projectId:u}:{},tag:c});return f.jsx("span",{ref:A,"data-agent-id":d,children:c})}function Ol({values:c,targetPrefix:d,scope:r,projectId:u}){return f.jsx("div",{className:"content-tags",children:c.map((A,E)=>d&&r?f.jsx(Sv,{value:A,id:`${d}:${Mv(A,E)}`,scope:r,projectId:u},A):f.jsx("span",{children:A},A))})}function Dv({id:c,en:d,zh:r,language:u,selected:A,onSelect:E}){const B=Hn({id:`about-tab:${c}`,names:{en:d,zh:r},scope:{window:"about"},capabilities:["highlight","guideTo"],completion:{window:"about",panel:c}});return f.jsx("button",{ref:B,"data-agent-id":`about-tab:${c}`,"aria-pressed":A,onClick:()=>E(c),children:u==="en"?d:r})}function QA({language:c}){return f.jsx("div",{className:"resume-timeline",children:Pe.experience.map((d,r)=>f.jsxs("article",{className:"resume-entry",children:[f.jsxs("span",{className:"content-kicker",children:[d.date," · ",d.location]}),f.jsx("h2",{children:d.company}),f.jsx("h3",{children:c==="zh"?Ho[r].role:d.role}),f.jsx("p",{children:c==="zh"?Ho[r].summary:d.summary}),f.jsxs("details",{children:[f.jsx("summary",{children:c==="en"?"Responsibilities & impact":"工作内容与成果"}),f.jsx("ul",{children:(c==="zh"?Ho[r].highlights:d.highlights).map(u=>f.jsx("li",{children:u},u))})]}),f.jsx(Ol,{values:d.technologies,targetPrefix:`about:experience:${r}:tag`,scope:{window:"about",panel:"experience"}})]},d.company))})}function Bv({language:c}){return f.jsxs("div",{className:"contact-content",children:[f.jsx("span",{className:"content-kicker",children:"LET’S CONNECT"}),f.jsx("h1",{children:c==="en"?"Say hello.":"来打个招呼。"}),f.jsx("p",{children:c==="en"?"For conversations about software, AI and useful things to build.":"聊聊软件、AI，以及值得一起构建的东西。"}),f.jsxs("a",{href:`mailto:${Pe.email}`,children:[Pe.email," ↗"]}),f.jsx("a",{href:Pe.linkedIn,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn / Xiaoheng Hu ↗"}),f.jsx("p",{className:"content-muted",children:c==="en"?Pe.location:"德国 · 慕尼黑"})]})}function xv({language:c}){const d=Rl(),r=d.state.aboutTab,u=d.selectTab,A=[["profile","Profile","简介"],["experience","Experience","工作经历"],["education","Education","教育"],["skills","Toolkit","技能"],["research","Research & projects","研究与项目"]],E=A.find(([y])=>y===r),B=Hn({id:`about:${r}`,names:{en:E[1],zh:E[2]},scope:{window:"about",panel:r},capabilities:["highlight","guideTo"]});return f.jsxs("div",{className:"about-content",children:[f.jsxs("header",{className:"profile-header",children:[f.jsx("span",{className:"content-kicker",children:"ABOUT / XIAOHENG HU"}),f.jsxs("h1",{children:["胡晓亨 ",f.jsx("span",{children:"Xiaoheng Hu"})]}),f.jsx("p",{className:"profile-role",children:c==="en"?"Software Engineer · AI & Fullstack · Platform":"软件工程师 · AI 与全栈开发 · 平台工程"}),f.jsxs("p",{className:"content-muted",children:[c==="en"?Pe.location:"德国 · 慕尼黑"," ",f.jsx("span",{"aria-hidden":"true",children:" / "}),f.jsx("a",{href:`mailto:${Pe.email}`,children:"Email ↗"})," ",f.jsx("a",{href:Pe.linkedIn,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn ↗"})]})]}),f.jsx("nav",{className:"content-tabs","aria-label":c==="en"?"About sections":"关于页面分区",children:A.map(([y,x,N])=>f.jsx(Dv,{id:y,en:x,zh:N,language:c,selected:r===y,onSelect:u},y))}),f.jsxs("div",{ref:B,className:"about-section","data-agent-id":`about:${r}`,children:[r==="profile"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"profile-intro",children:c==="en"?Pe.summary:"我的经历横跨全栈产品开发、AI / 大模型应用、内部开发者平台、CI/CD 和云部署，也涉及实验产物追踪与数据工作流。喜欢把复杂技术连接到真实使用场景，构建能够交付、使用和持续维护的软件。"}),f.jsxs("div",{className:"profile-focus",children:[f.jsxs("article",{children:[f.jsx("span",{children:"01 / BUILD"}),f.jsx("h2",{children:"Fullstack"}),f.jsx("p",{children:c==="en"?"Enterprise workflows, APIs, data models and operational dashboards.":"企业业务流程、API、数据模型与运营看板。"})]}),f.jsxs("article",{children:[f.jsx("span",{children:"02 / CONNECT"}),f.jsx("h2",{children:"AI & Agents"}),f.jsx("p",{children:c==="en"?"RAG, multi-agent systems and evaluation-driven LLM applications.":"RAG、多智能体协作与基于评估的大模型应用。"})]}),f.jsxs("article",{children:[f.jsx("span",{children:"03 / SHIP"}),f.jsx("h2",{children:"Platform"}),f.jsx("p",{children:c==="en"?"Developer platforms, reproducible builds and cloud delivery.":"开发者平台、可复现构建和云端交付。"})]})]}),f.jsx("h2",{children:c==="en"?"Languages":"语言"}),f.jsx(Ol,{values:Object.entries(Pe.languages).map(([y,x])=>`${y} · ${x}`),targetPrefix:"about:profile:tag",scope:{window:"about",panel:"profile"}})]}),r==="experience"&&f.jsx(QA,{language:c}),r==="education"&&Pe.education.map((y,x)=>f.jsxs("article",{className:"resume-entry",children:[f.jsxs("span",{className:"content-kicker",children:[y.date," · ",y.location]}),f.jsx("h2",{children:c==="zh"?["慕尼黑工业大学","武汉理工大学"][x]:y.school}),f.jsx("h3",{children:c==="zh"?["信息学硕士 · M.Sc. Informatics","软件工程学士 · B.Sc. Software Engineering"][x]:y.title}),f.jsxs("p",{children:[c==="en"?"Grade":"成绩",": ",y.grade]}),f.jsx(Ol,{values:y.courses,targetPrefix:`about:education:${x}:tag`,scope:{window:"about",panel:"education"}})]},y.school)),r==="skills"&&Object.entries(Pe.skills).map(([y,x])=>f.jsxs("section",{className:"skill-section",children:[f.jsx("h2",{children:Cv[y][c==="en"?0:1]}),f.jsx(Ol,{values:x,targetPrefix:`about:skills:${y}:tag`,scope:{window:"about",panel:"skills"}})]},y)),r==="research"&&Pe.projects.map((y,x)=>f.jsxs("article",{className:"resume-entry",children:[f.jsxs("span",{className:"content-kicker",children:[y.date," · ",y.org]}),f.jsx("h2",{children:c==="zh"?DA[x].title:y.title}),f.jsx("p",{children:c==="zh"?DA[x].summary:y.summary}),f.jsxs("details",{children:[f.jsx("summary",{children:c==="en"?"Project details":"完整项目记录（英文）"}),f.jsx("ul",{children:y.details.map(N=>f.jsx("li",{children:N},N))})]}),f.jsx(Ol,{values:y.technologies,targetPrefix:`about:research:${x}:tag`,scope:{window:"about",panel:"research"}})]},y.title))]},r)]})}var YA=OA();const zv=`<!doctype html>\r
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
</main>\r
</body>\r
</html>\r
`,_v=`<!doctype html>
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

</main>
</body>
</html>
`,Ov=`<!doctype html>
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

</main>
</body>
</html>
`,Rv=`<!doctype html>\r
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
`,Nv=`<!doctype html>
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

</main>
</body>
</html>
`,jv=`<!doctype html>
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

</main>
</body>
</html>
`,Iv=`<!doctype html>
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

</main>
</body>
</html>
`,Gv=`<!doctype html>
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

</main>
</body>
</html>
`,Lv=`<!doctype html>
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

</main>
</body>
</html>
`,Qv=`<!doctype html>
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

</main>
</body>
</html>
`,Yv=`<!doctype html>
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

</main>
</body>
</html>
`,Hv=`<!doctype html>\r
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
`,Uv=`<!doctype html>
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

</main>
</body>
</html>
`,Vv=`<!doctype html>
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

</main>
</body>
</html>
`,kv=`<!doctype html>
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

</main>
</body>
</html>
`,Xv=`<!doctype html>
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

</main>
</body>
</html>
`,qv="/assets/p03-BTMRXgvx.webp",Jv="/assets/p04-Bk65-ZJy.webp",Kv="/assets/p05-5eU5q1Vb.webp",Zv="/assets/p07-CPskfqo9.webp",Pv="/assets/p08-DJ4dzVo-.webp",Fv="/assets/p11-B0y402ra.webp",Wv="/assets/p14-Uk-GlUV-.webp",$v="/assets/p17-Ua8hIqo5.webp",tb="/assets/p19-CGwWffZn.webp",eb="/assets/p20-BfHg8LB9.webp",nb="/assets/p22-Btza1shv.webp",ab="/assets/p23-BNjGTJg6.webp",lb="/assets/p24-Dqc8VthJ.webp",ib="/assets/p25-D9M7B7jt.webp",sb="/assets/p27-BIKlBa2J.webp",cb="/assets/p28-DOnSEluO.webp",ub="/assets/p29-D8XRs0ed.webp",ob="/assets/p30-DJLVNbFb.webp",rb="/assets/p31-DO0MkuPv.webp",db="/assets/p33-2ch0vgsj.webp",fb="/assets/p34-C9gcRt2y.webp",hb="/assets/p35-Bwz8aiKM.webp",Ab="/assets/p36-DB9PPM3i.webp",mb="/assets/p03-B6FXesv8.webp",gb="/assets/p05-5AHqa-tW.webp",pb="/assets/p09-BlhX6fL2.webp",vb="/assets/p12-Br5km9mq.webp",bb="/assets/p13-DsYEscDM.webp",yb="/assets/p15-B4uGVpr2.webp",wb="/assets/p16-CskQbUxV.webp",Eb="/assets/p02-CWYRD_ug.webp",Tb="/assets/p03-DcqL31DT.webp",Cb="/assets/p05-BbPihYi_.webp",Mb="/assets/p06-p0PMq3Cw.webp",Sb="/assets/p07-Cll5rbQc.webp",Db="/assets/p08-BhLInLmj.webp",Bb="/assets/p09-Bamh211f.webp",xb="/assets/p02-DwwDt-uB.webp",zb="/assets/p03-DJ2oE7s-.webp",_b="/assets/p04-n6CfN52O.webp",Ob="/assets/p05-B5NCvDCl.webp",Rb="/assets/p06-IlDVyzR0.webp",Nb="/assets/p07-AeVGgaIM.webp",jb="/assets/p08-CZ03wvXc.webp",Ib="/assets/p09-CERkJp_h.webp",Gb="/assets/p10-CY9qdGkO.webp",Lb="/assets/p12-yOJWyxrx.webp",Qb="/assets/p15-DLCN9x8T.webp",Yb="/assets/p16-3bl03KXT.webp",Hb="/assets/p17-Bgct4rq4.webp",Ub="/assets/p18-k0euEacx.webp",Vb="/assets/p21-Ds3AhebA.webp",kb="/assets/p25-CQmzhlTX.webp",Xb="/assets/p06-D6xtHpws.webp",qb="/assets/p04-DUuwBRx-.webp",Jb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVR4nGNgGOqgfoH/f5pbcuZ743966hv40KqnR7BSAwgI8f0HYapFyxki4wxm8d8f7/6D9JDjEBhgJEUxzJK3zx5glReWUgDTH959ItpcRmpYTIlDmAhZDMIgi0H4/P/JRDlgz9NisHpiooYRn+XYfNy0IhFM10XMJ1oOFCK4QoMRl+UgX7zYJsPg6R2I1YEwy3zDjRg2rzyH01Hbt64H0xJeTxhMOOsZiXbAvUvHwOxjJ0+CaWwOgTkCm+Uwi2EgJrUQayiwMBAAVubmKAaCHIItqGFiprx+hIwkzQHIDrknvBZsEcgS9BCBWXz68yZwtICij6oOAAFQXOe7tGKECHJwgxyyeeUmBlNe4hzARG75DwoRECY2axJ0QGPCRowEMnFPNUEDLi5gwysPihIQxlXks+DTDApumCNgQU8sgFmKSJT74XLI2ZGFkEEwi0EOASUuhreELaZJIswHhcZKUGicwxoiyD4mJRGyEOsAZIeAACxq5BgswJaTmv/JdgC6Q9Zv3ky25SCAtTYEFZlKelYM1AK4imEQwBkCUEeAswusXiDHYphZZLUHPrz7xAgLDVJDBOZrQo0SRlIMhTUukEMElAbExcTglsIczkAOOENio/Tdkyv/505vJ7lRSrVmvwAFreFRMGgAANJJBTJXCxfxAAAAAElFTkSuQmCC",Kb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADiElEQVR4nO3dMWsUQRjG8Vk5BIuIeHARFRE/gKB4RNIJaVRUrLS4QgtLCWIpeCRgqSB+AFN6hRx6aJqAXSCc5NAPECxUbCJBC8vYulPsMO7s7sw+/1+3bMhdwsP7vjuzt2cMAABQlBlxw7Ub+/8er9x5I/U/OdD0G0CzCIA4AiAuun738c9KridfODSM7j226e+jAogjAOIIgLhW9VcFw8DrFlQAcQRAHAEQF3wGUF9bTw0VQBwBEEcAxMn15yNHD+dmFNvez1+Z0t4CFUAcARBHAMRlqe9n+/b43e9fcsez/Re546UTT02bZgQXKoA4AiCOAIhLrp/59vjQusdPt2pGoAKIIwDiCIC46PpV0z1ebUagAogjAOIIgLgstR5vr92fy+6bmMwc7y+2GYEKII4AiCMA4rK6e37o6/jVV3cLzz++/TKp1+taM0LVMwEVQBwBEEcAxGVV9/yNbw9z53+8P5k7vnz1pqmSq2dfu3U+dzwZbdc6U6y/GxeeP3blq6nyHkwqgDgCII4AiKt8Btj5vFn485tbW4XnQ88IrpkgdM939XiXwb0Hla4LUAHEEQBxBEBcp+k3sLiwUKqH2jNC6LX6Vcfv689dNymjAogjAOIIgLjGZwDfGWGn+7qwR9s9uew6Qt/R46e/3xbuLdh7H7GhAogjAOIIgLjoZwCbvV+/vPQk6DrCuufavT0jTEb5maA/xwyAiNECxBEAcZ22P//ftdcwsz7LZ0zcPTs0KoA4AiCOAIhzzgChe/7zjUde1/FV+7R2MHc836v39e29hLJ8n+VMBRBHAMQRAHG17wXYPd+eCVw/n5qpo8e77yn84PV6fGcQvNACxBEAcY3fD+Dq8faMYN9zZ3ZNo6bcE4iU0QLEEQBxjc8A3usGI3vdYLvSdYSp53U89wQiKbQAcQRAXPQzQOh1BNspc7Gw56f++X8XKoA4AiCOAIhLfgYoOyOMJxOpnm+jAogjAOIIgLjgM4D9LNszZxe9nh2sblDxs4FtVABxBEAcARBX+TqAayawtX1GGFg93sZ3B6NWtABxBEBc7XsBrh7nmhGWn10yKRnUfF3viwogjgCIIwDioupH//O9hGXXEcbW/QDzvV5S1/FlUQHEEQBxBEBcp+rn0MW2juCaEQaJ93jfZztTAcQRAHEEQFzU/ayJdYS9yHt8aFQAcQRAHAEAAAAAAAAAAABosb97ZAz5geJM+QAAAABJRU5ErkJggg==",Zb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFuElEQVR4nO3dv2tdZRzH8XtFhAwppYFUVET8AwRLQqWb0EWlBqc6dKhDRynFUfASwVFB+geY0QwS4sW6FNwCpSHF/gHBQaVLS6lDxvgfPI/y5HB+fF6v9Xhvr2n65oHv954zmwEAAAAAAAAAUzHv+wPQr8XO1mnp+vbNfb8jE/ZS3x8A6I8AQDABgGACAMEEAIIJAAQTAAhmxltxeLJdnJNvrCz8DAfM31+ZEwAEEwAIJgAQTAAgmABAMAGAYAIAwcywIfh+C04AEEwAIJgAQDABgGACAMEEAIIJAAQb/B7A0OeoMGZOABBMACCYAEAwAYBgAgDBBACCCQAEM0OfuPMXzhX3KGqeP3vhd2TCzy1wAoBgAgDBBACCCQAEEwAIJgAQTAAg2Hzqc870Of7Tv/8oXn90erd4/err37b88fYIBs4JAIIJAAQTAAgmABBMACCYAEAwAYBgZvAjn+MP3dprbzW93v0IuuUEAMEEAIIJAAQTAAgmABBMACCYAEAwewAV6XP8vtkj6JYTAAQTAAgmABBMACCYAEAwAYBgAgDBJr8H0Pccv3bf/Xfnnze9/9S1/vzsEZQ5AUAwAYBgAgDBBACCCQAEEwAIJgAQbD71Of/Qv4//9Y+fNb3+q09/mA3Z2P//1irPNRj7cwucACCYAEAwAYBgAgDBBACCCQAEEwAINh/7nP/+X18UX//k3hvF6x989MlszFrn7NeuXypeX+4ejXqOX/PrL3tNr3/1wz+L1zdWFoP+N+YEAMEEAIIJAAQTAAgmABBMACCYAECwQc8o/8sewPHjg6b3P3jwoOn1Q98jaN0TGPqcv3WO3+rGrTujvl+AEwAEEwAIJgAQTAAgmABAMAGAYAIAwV6ehbty+XKvc+jaHsHQ76vf+vk2Vz8+s8/C/+cEAMEEAIIJAAQTAAgmABBMACCYAECw+D2ArvcIjtd+apqj1+bkfd+PoHWO//Cfn5ueW1B77gNlTgAQTAAgmABAMAGAYAIAwQQAggkABLMH0LHl7lHx+u2r3wz6fgRd33e/tkew3C3vCWyu2gNo4QQAwQQAggkABBMACCYAEEwAIJgAQLDmPYDFztZp6fr2zf1BPx89/bkGj07vVv4Lc/YpcwKAYAIAwQQAggkABBMACCYAEEwAIFjzHsDQ5/zf3/+y0+/jj93vO68Ur19cn03aw8pzCfp2eLJd3LPZWFk0/ftzAoBgAgDBBACCCQAEEwAIJgAQTAAg2OSfC1Cb89f2BFrfn2HP8TcrzyWo+23WpdY5f40TAAQTAAgmABBMACCYAEAwAYBgAgDBJr8H0PUcv7ZHcO36pfIbPJ1Fq83xaz+/J/c8t6CFEwAEEwAIJgAQTAAgmABAMAGAYAIAweL3ADq/38Bu7X4DR53++WP/Pv5yt/z+m6v2AFo4AUAwAYBgAgDBBACCCQAEEwAIJgAQzB7AxO9HUPPm7L2mOX/7ffXpkxMABBMACCYAEEwAIJgAQDABgGACAMHsAYTvEewtl8Xr5vzT5gQAwQQAggkABBMACCYAEEwAIJgAQLDB7wE8f/ZiXrr+9jtXTkvXjx8fnPlnIseNW3eafj+HzgkAggkABBMACCYAEEwAIJgAQDABgGCD3wPoek+gxh7BtOf4NWOf89c4AUAwAYBgAgDBBACCCQAEEwAIJgAQbPR7AF3PcVv3CG5/937Lywn/vn7XnAAgmABAMAGAYAIAwQQAggkABBMACGZG2rHzF84N+n4Ee8tl8frF9fWm9/d9/GFzAoBgAgDBBACCCQAEEwAIJgAQTAAgWOf3Azg82S7OwTdWFpPeRej7fgStewTm+P1a7GwV//63b+43/X45AUAwAYBgAgDBBACCCQAEEwAIJgAQbNIzeNrvR+C++tPmBADBBACCCQAEEwAIJgAQTAAgmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA7Oz9C/+sDdlXpsgvAAAAAElFTkSuQmCC",Pb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABn0lEQVR4nGNgGAVDGQgI8f0H4QGz/O8rCzCmxBFMFLvk8AmGAQECQnz/oyICKI4CFphhxGr48O4TIyGHkWIWC0jDvUvHiNXDoKRn9R+XI8gxiwXEOHbyJIrEstWbwXRUqC9RvkTmk2oWIzYDvdycwPS2XfvA9NtnDxjIAcJSChhmYUQBA1K84ou/j2+ekWQ5ekigWwxjM8IYIMt7WyvB7L0HIZqd7c3BdEJiOtgBSnpWRFkOSgcgB7x89QrDLBAorm6HO4IFmwHIitGBgCQ/Xss/PP9ItFkggJKacUUBKA3AQmDP02KwWIjJHBQ1a86kgGkX6V54CMSkFhKMAhZcEoQcRa1yg4lhgAELqRrQg56QOCHAxDDUQuADWiqnqwPukVDOU90Bx/CUbHRrem1ZOxdM48PIaqjqgC1Qg2Fi4ObYWgYIfmXxH59aqlsOA9/a2f6DMAMaIMURTLgkiAnGH9d/MXBV/mJ8F8fwn1xzGHFpwpbiQXUBMU0yfHpBUcYcjLCXEZ9B6GKELCekF2Q5g60FuCWN7Ai6ArAjRsFgAgAaxfaDBf79dgAAAABJRU5ErkJggg==",Fb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADPUlEQVR4nO3dvWsUQRzG8VlzWFicSwLiSyOpxCKVYAiIoGIhWKlNUFFQ7ARJFawlVfAP0ErERq2EFEEFCRwXsLJIUgUbIx4mJBYigXDWO5FZxn2ZnX2+n+6yl2Vv8/D7zc3ObowBAAAAAAAAAABtlhgx6Wh36Nq+vfVL6pwcCH0ACIsAiCMA4hK1nr+5dtr5/rFTK1JjAiqAOAIgjgCI6xh1S33rB12jhAogjgCIIwDi5MYAtx4ezbxeWOxKfe+3UQHEEQBxBEBcx/d6edOE7tlp5OeLCiCOAIgjAOI6dg9b/9IzMRmfmBrWOSZIW3a+qADiCIA4AiBu3zxAb3m50A5fvX7n3D5946pp8vfy1PP3Yz9fVABxBEAcARCXlN1Dr1y+4Ny+sPjRuX1z46tps7HjJ0s9X764FoAMWoA4AiBu3zxA3lx63de/d35umJj1Cs4T+PK9FkIFEEcAxBEAcbn9wu75809mne//8Mnd8y6eP+vcfufuA+cYYHxiyjTZurU+wB4D/BgMSj1ftpnHc15jAiqAOAIgjgCIK/3eQN+eVVR67LAJafv7TlTny0YFEEcAxBEAcd5r6Ku+FmCvB8ibB3j/bca5v+tnnhc6njef7zm3Xzox7zUPcPP+I1MlrgXACy1AHAEQ5z0PUPa9d7HdX9+25xtQAcQRAHEEQBwBEEcAxBEAcQRAXPTPCi461x96/6FRAcQRAHEEQBwBEEcAxBEAcQRAXPTzAEXX5aujAogjAOIIgLjoxgCxPZ+/6agA4giAOAIgrvFjgLqfs6eGCiCOAIgjAOKC3pf2P/cKvnz2tNb77fP4Hk/oewFtVABxBEAcARDXqH70rzFAXo/N66l7g8nsmGKp7z6Ac5OZlyNH+kmdx1s3KoA4AiCOAIgL3o/q7qG/5w465xkOze4W2n9sYwIqgDgCII4AiKt8PUDTngP4Z3U383r0RXYctHXbDF3b6z4/VY8RqADiCIA4AiAuqbqnlb2O3/5/AaG/R6eBP+/e2+yYZeSa39+UCiCOAIgjAOKS2OYBQvf80J/X7vn2+gV7vUPemIAKII4AiCMA4hrdT5GPeQAUQgsQRwAAAAAAAAAAAABa7C/nx+6gVGKixwAAAABJRU5ErkJggg==",Wb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFIElEQVR4nO3dPYtcVQCA4btmsbCIIQHxo5FUYpFKMASCYMRCsFIbiaJgsBNCqmAtqYI/QCsRG7USUgQVJLBkwWoLtQppTDCYsEkhEgjrL3AGvLne2Xmfp529M5edsy9nOGfPDAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCVjcmemZVw6PDBvTHX7965Z4yssUfmvgFgPgIAYQIAYQIAYQIAYQIAYQIAYdZ413yd//Zvz496/iPP/bLwcfsE9jczAAgTAAgTAAgTAAgTAAgTAAgTAAjbnPsGmNmVq0t+4OD/dCPMwQwAwgQAwgQAwgQAwgQAwgQAwgQAwuwDWHPvfPTkwscvXV68zu///debGQCECQCECQCECQCECQCECQCECQCEbU79/fIsVl9nN77mHV9mABAmABAmABAmABAmABAmABAmABC2uWwd9trO1v93N0FHj53YW+d9AsbXao8vMwAIEwAIEwAIEwAIEwAIEwAIEwAIW3oewNb29jCnr77+btT1b7/1+rCfzf3/8lO/vvE1LzMACBMACBMACBMACBMACBMACBMACNtY9XXo1159edT1ly7/OOr62zeuj7qeeR15+tmVHl9T870AwL/yEQDCBADCBADCBADCBADCBADClp4HMPZc+rn3EUzt7p835r6FtLnPE5ja1N8LYQYAYQIAYQIAYQIAYQIAYQIAYQIAYaPXGJet81/85Pyo5//hp3HrvKdeenHU9e+9/+GofQBHj50Y9fp113a2Ru0D+OPWrZUeX8uc+/jCpPsEzAAgTAAgTAAgTAAgTAAgTAAgTAAgbOl5AHObep11boeeenwo2715d9bXP7Xm42sZMwAIEwAIEwAIEwAIEwAIEwAIEwAIm/TM8XX4XoDbN65Peh7A97+fG8Z484XPhzl98/MHo65/5ZmLk54HcPrM2WE/2/W9AMBUfASAMAGAMAGAMAGAMAGAMAGAsM39vo5Z36fAeo/PqZkBQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNjk5wGw2uf61++/zgwAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwpwHMLPdm3fnvgXCzAAgTAAgTAAgTAAgTAAgTAAgTAAgzD6AiV3b2Zr6JeA/MwOAMAGAMAGAMAGAMAGAMAGAMAGAMPsARtra3n447wTMwAwAwgQAwgQAwgQAwgQAwgQAwgQAwjbmvoFVd+jwwb0x13/52acLHz995uxQNvXvZ/fOPWN8ATMACBMACBMACBMACBMACBMACBMACLNGOnIfwNh17LHr1A9uHV+8T+HK1TFPPwwnjy98+MATVzfW+fe77swAIEwAIEwAIEwAIEwAIEwAIEwAICy/Rrru69B/XXh01HkGj52/P+v9r/v7MzczAAgTAAgTAAgTAAgTAAgTAAgTAAjbHOLn9q+7v3+9v/Dxw18s3gty591hb8z16z5+dvf5PgIzAAgTAAgTAAgTAAgTAAgTAAgTAAjb2O/rtNd2toZVdvTYibVeRx6r/v4++HbxPosDb0z7N2oGAGECAGECAGECAGECAGECAGECAGH7fg161c8DqK/z19/fB0vW+YeTxxe/wJWrw5T7BMwAIEwAIEwAIEwAIEwAIEwAIEwAIMwaNczIeQDAbHwEgDABgDABgDABgDABgDABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOHh+wfTre9wxwcbxAAAAABJRU5ErkJggg==",$b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABXUlEQVR4nGNgGOmAkVYGCwjx/ccm/uHdJ0aqOkAAh0Vebk4MU3pawOyckhq4+LZd+1AcwUKpZSCLQACbZcQAFmItooZl2AATusUgDLIIhu9dOgbGMMvJATAH43WAgBDff5hllBiMzzJsgIUUy0gNciU9K4K5gIWelmEDLMiKlfSswNFAK8vwOkBAiO//29mfGBhO6kBFAqhuGV4HoANQgYEL4MqmxACi0gAIvH32gIEWQFhK4T+yIxiRJWFZETkBYit0KBFDL4qZGAYYMGKUhJL8NLXww/OP9A+Bu/ulccoxkWXg2YukWX74BE5HMDGQCdacSQFjYixn8H6H0xFM5DoA2SG4gLLjUwYGWwsGhq1CYBrMp7YDCIUGzBHYLAcBqiZCXA7BZTkIkNQkIwRCTOaQrIdloCymWhSEUGA5CLAMlMUUhYCysT5VLCfbAdQEjNRsbBADqNmaYhgWAACGz6ahFPQlcwAAAABJRU5ErkJggg==",t0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAACzUlEQVR4nO3doW4UURiG4QMZDZtWAYa0BtEU0YqmCaIIRDGIvYRKJBJZiayDS8C2AkEFCYGkCPAlGEC1Kb2BoueImZzMObtn5n0fN9lmu2m//N+/u7OzIUiSJEmSJIpby34AUzdbuXNT8v6vLq8H/Q9v53soGiMDAGcA4PA7wKxwR+8/e9o6Pnpz2PnzL1+9Trr/kw8fB+0ETgA4AwBnAOCaAO/s/aijY7k7uzZOADgDAGcA4JqxP6+mdXZuTgA4AwBnAOCa3B3f19ExO7v771F6Z3ECwBkAOAMA16R2/s8fn0f9PDt3xx4tuLNzcwLAGQA4AwBX/fkAY+/Y2NrmbsjJzwVoECsAzgDAZd8B7OyynZ2bEwDOAMAZALgmtbPWNneT3hugP8+unRMAzgDAGQC45PMBLt5et3/g60bPPbzovNXOXi4nAJwBgDMAcMXPB4ivYVNa6c8m1sbzATSIFQBnAOCK7wAXf36V/hVoq/cftnYerxOoJFYAnAGAS36vu++zgqnn7ee+PgDt/k68VrCGsALgDACcAYAzAHAGAM4AwA1+HWB2727WB6Q0V3//tY/9ziClsALgDABc9dcIojk/fdA6Xt/7XfT3OQHgDACcAYCb3A5w/u1763h963EYU+eHT1+i23eK7gROADgDAGcA4Ca3A8Tenx103j7ffhdq6vzw/LJ9fLzSuROsPmq/F5DKCQBnAOAMANzkd4DUHWFeeCeIn8fHnR53fnji6wAqyAqAMwBw+B1g2a8b9O0Eng+goqwAOAMA5w5Q2Y5QuvNjTgA4AwBnAODcARIt+vyB0pwAcAYAzgDAuQNMvOP7OAHgDACcAYDD7wBzWOfHnABwBgDOAMBNfgegd3wfJwCcAYAzAHCT2wFqvyZQbZwAcAYAzgDAGQA4AwBnAOAMAFzydwb1fYeQFiv1O4JiTgA4AwBnACRJkiRJkiD+A0IUqjl9HFXTAAAAAElFTkSuQmCC",e0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEu0lEQVR4nO3doY4dZRiA4VmyetlsFWBI1yBIK4ogTRAgEGAQXAKysrKysrIOLgFLRUURJA0kIKjfBgOobpa9geUOZhImw8yc93nsyTk72ey++U++78wZBgAAAAAAAAAAAAAAAAAAAGBrjta+AJjj9OzkZs+/wavL61X/B99a84cD6xIACBMACBMACBMACBMACBMACLMHELf3OfoXn382+vjTJ49nvf6Dh4+GJT17/mLVPQEnAAgTAAgTAAgTAAgTAAgTAAgTAAg7XvsCDt3W5+xTc/QpW5+zM84JAMIEAMIEAMIEAMIEAMIEAMIEAMI2vwew9Tn6FHN2tswJAMIEAMIEAMIEAMIEAMIEAMIEAMKOtz7HnztHn+Lz7Mz5+9j7/QycACBMACBMACBMACBMACBMACBMACDseOk5/+tXL2e9/t7nrGvb+hx769d36JwAIEwAIEwAIEwAIEwAIEwAIEwAIGzz3wuwdebY23b7zv1hy64ur4/W/PlOABAmABAmABAmABAmABAmABAmABC2+T0Ac/ZtM2ffNycACBMACBMACBMACBMACBMACBMACDte+vPMt+/cX/R7Aw6dOTtLcgKAMAGAMAGAMAGAMAGAMAGAMAGAsNl7AKdnJ6Nz/jffXo+/wC8fzryCr2Y925ydMicACBMACBMACBMACBMACBMACBMACNv89wJMefb8xXDIpvYs2LeriftpLM0JAMIEAMIEAMIEAMIEAMIEAMIEAMJ2vwfw5q8/1r4E+M9uvfv+zZp7Ak4AECYAECYAECYAECYAECYAECYAEHa09ufZX796Ofr8Bw8fDUt6+uTxrOe7Pr+/Je9nYQ8AWIy3ABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABC2+v0ATt95e+lLgM26+vuf8cd9LwCwFG8BIEwAIEwAIEwAIEwAIEwAIOx47QuALbv48b3Rx88//XPYMycACBMACBMACBMACBMACBMACBMACLMHsHEXv/0++vj5vbv/27UU5/zDTz9PPP/jXe8JOAFAmABAmABAmABAmABAmABAmABAmD2Anfv+129mPf/rj74bDtncOf/w5eX44z+czdoTuPXB+PcCLM0JAMIEAMIEAMIEAMIEAMIEAMIEAMLsAcRN7RHsfU9g6vP4FxNz+qk5//CJ+wEAO+UtAIQJAIQJAIQJAIQJAIQJAITZAyB9v4HzmXsCW7/v/xQnAAgTAAgTAAgTAAgTAAgTAAgTAAizB8Ci9r5HcL7zOf8UJwAIEwAIEwAIEwAIEwAIEwAIEwAIswfAotae4zPOCQDCBADCBADCBADCBADCBADCBADC7AEwyhz/sDkBQJgAQJgAQJgAQJgAQJgAQJgAQJg9gDhz/jYnAAgTAAgTAAgTAAgTAAgTAAgTAAizB7Bz5vjM4QQAYQIAYQIAYQIAYQIAYQIAYQIAYfYANu783t21L4ED5gQAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYUdrX8Dp2cnN2tcAa7m6vF71f9AJAMIEAMIEAMIEAMIEAMIEAMIEAAAAAAAAAAAAAAAAAAAAAACG7fgXsLirGQrWfYEAAAAASUVORK5CYII=",n0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABtElEQVR4nGNgGGDACCL+rmX4jyzIHAwRpzbAac9fNAl6AJidTAwDDJgG2gGMhBQICPFhjZ4P7z5RJZ0wErL83qVjWOWU9Kyo4ggWQgqOnTxJqR2kO0AAR7CTqw4GsIUYIzZD3z57wEALICylgOEIFlyKP755htcwUBpABrjSCqGoZMGrC4/Fva2VWMVhDuFnS2H4Ofccw4/Yc3jNYyHVcpjFzVOmocjBxEFqQI4AWU7VgkgJj+XIYiA1ILUgnxPyPUkOQLfo7tmLYBxfagTGuBxGdQcgg/P/JzP4hkMsJxcwkRL8MB+CfAyyHAZAjkAOBVg0UM0B9y4dYyiubmeozckC8xd2n2PYvBIRvyA2SAwEQGpAagllS7KzITJAdgS5gIVUDSAfgoIZ5mN0OZolwnvQaMBlEUyMlOAHAZJCAGQwrpIQ5jhSLCfZAcgWkFoXkOyAYwTaAUtm95OkHhdgJLeeR3dATGohWe0BFmIVEuNAcppoLMQqJCZUkNUQ6xhGWCcBX28IX+MUFyDUaIXZyUKsgbRqnLIQowjkk5jUQooboHgd8Bepf4gtOqjRBxiIPihBAAB3CdT3DskxpAAAAABJRU5ErkJggg==",a0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADUUlEQVR4nO3dMWsUQRiH8TuzWGrQzkryASxS+h1SpbCJiGAasQmHhYiNIhYSLBQbsRAstEiV7xBIYUR7D6tUUaKVFiHWOyc3DDt7O5Pn+XWbhM0e9+d935vZZEcjSZJENA6/cLIzOu1ywqX12XMqn9zvz7nOV6SqGQA4AwDXxH7Anl6W1PcjNjNYAeAMAJwBgDMAcAYAzgDAGQA4AwBnAOAMAJwBgBt873750oVO+9sxxz9/D/4aS2YFgDMAcAYAbjx0z59+3ev1961cu946diZoswLAGQA4AwAXvSewb3v7+0NfApoVAM4AwBkAuKa2tf2zfn0xudcxrABwBgDOAMCNc/fUH4ffu55Sc1y+cjXrTGAFgDMAcAYArve9gF9Hh6MhhfcDpJr2fL/C0HslVgA4AwBnAOAGvx+g7x6//fRBr+efRmaEi+fvtI7/vj1oHf+52T5eNCsAnAGAMwBw1c0AYU+O9fgnr153+n3bkfOH1xPOBGHPL40VAM4AwBkAuOJngEX3/Nj5Ht27O/d6ZmcCZwAVzBYAZwDgip8BYmI9/9unL3O///jD7bnff/f8IGkmqI0VAM4AwBkAuOpngFSfT1+2jtdurLaOdz+W/bk9NysAnAGAMwBwTW1r/7HP/bfur87t+TFrwUyQui4Q3xsY9u8MQlYAOAMAZwDgipsBwh6ZOhOEPTq1x+8G6wCx84V7AZOHz4ru+SErAJwBgDMAcMXNAH2jrfXHWAHgDACcAYCrfgYIP4enrgukqv0ewJAVAM4AwBkAuOJngNS9gdhMkLvnTypb+w9ZAeAMAJwBgCt+BkidCXL/n8BJ0ONj11MbKwCcAYAzAHDVzQCpPbj25wX0zQoAZwDgDABcU/szb2Lev3lR9fX3zQoAZwDgDABc1mfR/+9ZwkPrOgNsbG6NStL1WcEhKwCcAYAzAHBN6T2qtBnkeODXl5sVAM4AwBkAuOLvByhtXWE58XpKnxmsAHAGAM4AwM30p5OdUavHLa3n3y9I6bG135O3EtyTuOiZIPZ+WgHgDACcAYArfh3grN+TNzQrAJwBgDMAcMXNAOHn5I3NraL2AlK5F6Ci2QLgDABck7qWHJN776D0Hrpoqe9HjBUAzgDAGQBJkiSgf19l2yPiyVMyAAAAAElFTkSuQmCC",l0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFP0lEQVR4nO3dsaocZRiA4TkmWMYQOys5F5AiZe7BKoVNRATTiE0QCxEbRSxELBQbsRAstEjlPSycwojpDVapYoiptDjECxB2wD+Tmd33edpNciZ72JcP/m9npgkAAAAAAAAAOBYnc3/g/M70dFrRhRvz1whbdb7xz88Lz+9SgK0RAAgTAAgTAAgTAAgTAAgTAAi7OPoPOKeH9T4fo3sGJgAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIW/Se5Yfg8pVLqz6/fdTjR0/yv0P+PxMAhAkAhAkAhAkAhAkAhAkAhAkAhJ3Uz/nv39tNh+z06vW9r9sTYB8TAIQJAIQJAIQJAIQJAIQJAIQJAIRdnOJ2Z2drXwKsxgQAYQIAYQIAYQIAYQIAYQIAYQIAYZvfAzj0+/avzfu3rscbf26DCQDCBADCBADCBADCBADCBADCBADCTrZ+Tv3ngz+e38XAM/byK69uek/ABABhAgBhAgBhAgBhAgBhAgBhAgBhm78fwJy/Hj6Yyk6vXl/159+/t5vKdgf+XAkTAIQJAIQJAIQJAIQJAIQJAIQJAIQd/B5A/Rz/i08/mA75+kf3CF568e29r//z3d29r//9xv7Xj50JAMIEAMIEAMIEAMIEAMIEAMIEAMLsAax8Tj56jv/J199Maxq9/rn3Z25PYO6cn/1MABAmABAmABAmABAmABAmABAmABBmD2DQsZ/zj17fR+++M/T+zO8J2AMYYQKAMAGAMAGAMAGAMAGAMAGAMAGAMHsAKxs95//9l9+G/v7HP7419Pe///zuonsCLMsEAGECAGECAGECAGECAGECAGECAGH2AI7cr0+/2vv6a69f2/v6zz/5vv0xMwFAmABAmABAmABAmABAmABAmABAmD2Ahe/7P/p9/zffvzZ0zj9qbk9g6fsFjD83YLf39ToTAIQJAIQJAIQJAIQJAIQJAIQJAITZA5gxd4689J7A3Dn60uf4c/cDGL2+uecCvPfhZ3tfd84/xgQAYQIAYQIAYQIAYQIAYQIAYQIAYfYAjpz7+rOPCQDCBADCBADCBADCBADCBADCBADC7AGsbO778EvfL2Dt/x/rMgFAmABAmABAmABAmABAmABAmABAmD2AjT83YHRPYOvn/O77vy4TAIQJAIQJAIQJAIQJAIQJAIQJAITZA9j4nsCcuT2Cpc2d44++PyzLBABhAgBhAgBhAgBhAgBhAgBhAgBh9gBWNnoOPrpHMMo5/mEzAUCYAECYAECYAECYAECYAECYAEDYwe8B7M7OprIfvv1y1Z9ff/8PnQkAwgQAwgQAwgQAwgQAwgQAwgQAwk6mjbt85dLTta9hy9beA7h56/aqP3/rHj96sunPmAkAwgQAwgQAwgQAwgQAwgQAwgQAwjZ/P4Ctn6Mu7dD3IOq/v60zAUCYAECYAECYAECYAECYAECYAEDY5vcAtu7Qz+kP/f2xZzDGBABhAgBhAgBhAgBhAgBhAgBhAgBhs9/VPr8z7T3HvXBj+88WWPIc+/693fO7GP7j9Or19J7A+eDn0wQAYQIAYQIAYQIAYQIAYQIAYQIAYe4HMGh3dvZsfhOwAhMAhAkAhAkAhAkAhAkAhAkAhAkAhNkDmDH3ffKbt257LsCKjv37/kszAUCYAECYAECYAECYAECYAECYAEDYxaXvSz5q688dcA7Nmp+PUSYACBMACBMACBMACBMACBMACBMAAAAAAAAAAACYDt+/F1jcEwEywdoAAAAASUVORK5CYII=",i0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABj0lEQVR4nGNgGO7gXRzDfxAeMMsZBgq8Q7P8Wzvb/wFzwLfBYvnftZhRwkQvR2GznGYAFgKEfA8CLDCGgBAfRS788O4TIzn6GGGWv332gBL7GYSlFOCOAIWA0CKI2aBQ4Kr8hdNxLMicj2+eMVADwCwHAXyWYziAUoAtGglFDQu6wLGTJ0my1MrcnEFJz4rh3qVjWOWV9Kz+43MECzYDKQFG7p5w9rmd28EOw+cIJgYagDVnUlAcA3IErlzGQo0owAdAjsAXEozI2ZDcXICcBpCjABmAHAFTi+wIFgYqA5hFxAImhgEGLPSyiJ8NkjBHbgh8/DUHyrLC7YBjJGZBcvQumd3PEJNaCM+OjLBs6OXmBFe0/wRqsepoYYVXHBvAp3bbrn3wrMhESCNMDJc4MZbjU8sIY8CKSk4+DjC/pbwQTNd09qNoQBf//ukHhqG4zICpRS6IGJE1ghwB00wsABmKbCA+M9DVggBKFIAksfkIJIZLHN1AfGZgqxFZ0AWgilBqLiSNuMRJMWMUDC4AAOFs8osFTHsAAAAAAElFTkSuQmCC",s0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADEElEQVR4nO3dv2oUURiG8VldglpEWTsr2QtIIcLKdrFQtNVSrPQCUolgKYiVF6CVWGqraKFdMCAWXoBYpYohSWEkIGs9o8xwOOfMmezz/Loh2clk9uX7vvm3W1WSJIloVHoD6HbvVou2n09e5n2PTuRcuYbPAMAZADhngMI9P3eP72IFgDMAcAYAzhlg4D3/15OV2uvPPDxK+p5ZAeAMAJwBgBuX3gD12/ObrABwBgDOAMB5HqDwcX9oz//zpr7+k7fi3kMrAJwBgDMAcJ4HGLhmz0/NCgBnAOAMAJwzwDE71x973N9kBYAzAHAGAK5zBjg3Wc16HDp0e7sHS329xAoAZwDgDADcqKvn/9z+UZGdv3AxaCbIfT9AalYAOAMAZwDggq8F7O9s59mSJTEJfPav757fZAWAMwBwBgDO+wECpb42UvpagxUAzgDAGQC46Blgc2urOs7ms1ltebo2ry1//7aZ9e9P1+aLkjOBFQDOAMAZALhx6h5Kc+n6jaDf//r+XeuM0fdMYAWAMwBwBgDOawGJvf5yr7Z8+/KL1pmh9ExgBYAzAHAGAM5rAbOy5zFKzwRWADgDAGcA4IKfDVz25wKmgfcDhF4LCNWcCbq2N3QmsALAGQA4AwDntYDMPXrorABwBgDOAMAZADgDAGcA4AwAnOcBBu7sSv0ew9SsAHAGAM4AwBkAOAMAZwDgDACc5wEGbv+o/mzhv+r3BIayAsAZADgDADemfS7gsv2/r54/qy3fub8R9OygFQDOAMAZALjOZwNvXrsatMJPn+M+W3f9yrzo+lPre3vffvhYW3YGUCtbAJwBgIueAWJ7XGnriWeC3Puja3udARTEFgBnAOBGsd+Td3r1VOvrHz/YaP35o6f1c9mhYtd/ePC7Sin3/ujaXj8jSEFsAXAGAC74c2abM0FXzxu6w0ZPDe2hfe+P2O1tsgLAGQA4AwAX/f0zqXtg13Fu6vXvJf4Ontz7w+8MUlK2ADgDABf9bOB/etIi8fqqntd/3PZHFCsAnAGAMwCSJEmSJEmSJElL7C9Ccu1mKUL5uAAAAABJRU5ErkJggg==",c0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFKklEQVR4nO3dsYpcZRiA4YkJQVOsYe2sZC8gRRAi28VC0VZLSRUvIJUIloJYeQGmCpbaKlpot7ggKbwASbVVsmxSbCQg8Q7OhJwc/pl5n6c9TOZwMvPyL98/56xWAAAAAAAAAMCuuDD6BGCk01ur53Nev39vu79Dr40+AWAcAYAwAYAwAYAwAYAwAYAwAYCwrZ5hwtw5//6Wz/HnsgKAMAGAMAGAMAGAMAGAMAGAMAGAsPQMlO03es5//s3lyfe/8uWzjf6OWQFAmABAmABAmABAmABAmABAmABA2KXRJwCb7HzL5/zrWAFAmABAmABAmABAmABAmABAmABA2FbPMNl9S//e/3zhOf9/P02f/8VPxn4HrQAgTAAgTAAgTAAgTAAgTAAgTAAgzP0AYME5/6azAoAwAYAwAYAwAYAwAYAwAYAwAYAw+wDYaaPv639x8O/917ECgDABgDABgDABgDABgDABgDABgLDZ+wCu7u9t9e+hmefs9MlGz7mZZgUAYQIAYQIAYQIAYQIAYQIAYQIAYRfmzvkfnTx4pSfEdnnr7XcW3Sdwemv6vvv79+b93v588P0CRrMCgDABgDABgDABgDABgDABgDABgLDFnwvw+OHJ0m/BDps751/nyo7P+dexAoAwAYAwAYAwAYAwAYAwAYAwAYCwxfcB0Lbpz404iz/XwAoAwgQAwgQAwgQAwgQAwgQAwgQAwobvAzg6Ph59CmmHN25MHj+4djh5/J+/j1bb7ODa4fPyPgErAAgTAAgTAAgTAAgTAAgTAAgTAAi7tOlzaHbb9Q8/WvTfv//rL7P2MRzs+D4BKwAIEwAIEwAIEwAIEwAIEwAIEwAIG74PAKb8+NftyeOfvnt31j6D+/F9AlYAECYAECYAECYAECYAECYAECYAEDZ8H4DnAoxVvx/D9fg+ASsACBMACBMACBMACBMACBMACBMACFs7g7y6vzc5x3x08mDy9Y8fnrzEabEpDq4dzpqDj34uwNLur9knMPf6Lr1PwAoAwgQAwgQAwgQAwgQAwgQAwgQAwobfD4C2uXN05rECgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDD3A4AZ3rx8e7XNrAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgzP0AYIbHz+7OeflqtTpcjWQFAGECAGECAGECAGECAGECAGECAGGL7wM4Oj5e+i0YyP/vPD98/93k8c8+v/N86vjZ6ZMLc97fCgDCBADCBADCBADCBADCBADCBADC1s4Qr+7vTc4hP/7g/dWS/vjzaDXSzfcO0+e/6Xb9+v782++Tx+0DAF6aPwEgTAAgTAAgTAAgTAAgTAAgbPg+gNFz3LpN3yew7Z+PmzOvr30AwGL8CQBhAgBhAgBhAgBhAgBhAgBhs+4p/iL7BNZ5Y+/1We//9Rd3Zr3+q2+n78u+tNHn//TJv6tNtu2fj6czr+/c3/uvYwUAYQIAYQIAYQIAYQIAYQIAYQIAYYvOGF9kn8DcOS+rRefUS8+hd/3z8XTw9V3HCgDCBADCBADCBADCBADCBADCBADChs4gt2EOPPf33Jt+/qPn0Lv++Tjb8OtrBQBhAgBhAgBhAgBhAgBhAgBhAgBhl0afwAvMSWc9d2CuVzDH3fbzHyrw+RjKCgDCBADCBADCBADCBADCBADCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWr97/TtnuRjmmzDQAAAAASUVORK5CYII=",u0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB1klEQVR4nGNgGOmAkRhFAkJ8//HJf3j3iZEmDhCAWrznaTGYv3nlOazqJhbtp9ghWC0/870RjBW0Zf/XL/AH09jEQDQIEwopki1X0JZFsQjdAehy5DiCCZvloCAPMZlDssMXdp9jyO9zJJhmcDpAAIvl8aVGYIPxWQpSQ64jmBgGGDBRI+jRASmhwMQwwIAJmYMrn9MSMMIYoOACBZtvOCJBUQJAngEVUIQKJyaGAQYs6ALoiRA9G645k4KhDltWRc6aJDmAXHD37EU4++ObZ2A6/xIDg5Ke1X980cDEQAVQFzEfp9y9S8fwZkcmGAPkSlCiITbosPlcRkMDjLVtnMCYGEcwkWQbAcvRATGOYELmYAsF9LIeG4BZvvl6NhinNViCMbojiAqBD2RGBbmFGQs2QagjwAUTciigZzVYaifG8mMnTxLvAGRHgNgwh4AcAbOE3BCiaqP03qVjcDauuL56ZB88BGJSCzGKZkbS3IvpMHyOIGQ5xQ7A5gh0ALLckyGZ4ectNgapbg7qhgAuRyAnOJDP387+BGZjcwQjA5UArnQCsgwkh88RdAEgR/xdywDG39rZ4M13Rno7Aj0kmOjpAFCwC6fygdnsar/oaTUqAIUELAoAwJ83V+yJE/kAAAAASUVORK5CYII=",o0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADP0lEQVR4nO3dP2gUQRiG8T0JYhVEO0llFRAsxEpstLOwE7QQrtBUFsGIrdgHhLQqyJWC3bViGokEVDAQBMF0WqloOqtYzyA3LDO7O3fP8+uG/LkjvHzfdzuzm6aRJEmSJEkUo6YyJ08tHw35+r9/HVb3N+nSsaHfgIZlAOAMANyoth7/+tuDmT8/ffmx6dLWxjZqRrACwBkAOAMAN+q756d6/I2Lz4P1+OGFYD3ZDGeAV+/vFv194+jrqRlh3mcCKwCcAYAzAHBLfff8uCfHUj06V6rnTxKvt/7kSrDe2tg+mueZwAoAZwDgDADc0tA9f95Mohlh3mcCKwCcAYAzAHCjoXt+7uf+tnsBXb+fcfTzte8dWAHgDACcAYAzAHAGAM4AwBkAuOReAO1aP22vwAoAZwDgDACcAYAzAHAGAM4AwLU+E9j1/fnqlxUAzgDAGQC4Udu9gPja9vWbs++np5tGM1NtZwStAHAGAM4AwBkAOAMAZwDgDABc9vMBcs8ELtq9gbHUcweHZgWAMwBwBgCu+HMCF83XD59aff+fH99nfn19L1yfPX9p0PsErABwBgDOAMA5A0Qe3XrR9Olgb2fQmcAKAGcA4AwAXHIGiHtQfH97fEaw9PP9a/ucv7K6mvV6+2/fVDUTWAHgDACcAYDDXQfou+fHzl2+WtVMYAWAMwBwBgCu9QxQ+rpA7v/xK20l0fOnn+9lPT/h6eN3WTNBaVYAOAMAZwDgsq8DLPpewaI/M8kKAGcA4AwAXPG9gLYzQd/XBVLn9mvr+Tu7u53+fisAnAGAMwBwnZ8HSM0EsdSMEM8EqZ5c+/35Q7MCwBkAOAMAV9X/sv/fs4lLi8/YpcT79aWl9v/j6wC31+4Ha88EKostAM4AwFU3A/Q9Yxz0PBMM3fNjVgA4AwBnAOBwM0DpmSBX3POvNXeC9d8vx4P1mc0TwdrrAMpiC4AzAHD4GaD0TND2DF/8Of/ns8OZ3196JrACwBkAOAMA5www8PmEuGfHr9f1TGAFgDMAcAYAzhmgcl3PBFYAOAMAZwDgnAHgM4EVAM4AwBkAOGcA2Exwem05WFsB4AwAnAGAcwaAnV9wL0ABWwCcAYD7B5UvSDcK4TLxAAAAAElFTkSuQmCC",r0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFY0lEQVR4nO3dsatWdRzA4feGRJOIbdHUJAgN4hQuujW0CTUIDunUcOmGa7QLwl1LCEfBzTW8i9wQLEiQIMgtJxN1a7K/oHOgw+Gc9/08z3o473nvq/fD7/L7vudsNgAAAAAAAAAAAAAAAAAAAMDa7C39Btbu1OmTbzdhr16+8X9kh72z9BsAliMAECYAECYAECYAECYAECYAELbze7xT9/F/+uubSde/f/fXzTY7PDiadL45gnWzAoAwAYAwAYAwAYAwAYAwAYAwAYCwvV3f55+6j3/5/O3B41dvnBs8fufm8BzAvcfXNmt+f2PnT50jMCewLCsACBMACBMACBMACBMACBMACBMACDux2fF9/rF98jFT99GXNnWff+rPt3/r4uDxw4OjwX9fcwLzsgKAMAGAMAGAMAGAMAGAMAGAMAGAsBP1fX7mNTZHYE5gWVYAECYAECYAECYAECYAECYAECYAELZX3+df+vv+cz8XYNs/n7Hre+7ANFYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAEHZi17/vz3bzXIF5WQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2OT7AYy5f3fe58cD/58VAIQJAIQJAIQJAIQJAIQJAIQJAITtzf1cgP1bFwfP/+zzc1PfAmFjcyaHB0eDx1+9fDP5d2CbWQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2OzPBRhz+fztRa9/9cbw/Qju3Jz3uQb3Hl9b9ee39Ocz9f0xzAoAwgQAwgQAwgQAwgQAwgQAwgQAwhafA2C7/fnLb7O+/usXzyedv/9k+PhHH3/ytvzcACsACBMACBMACBMACBMACBMACBMACDMHwKBvv/hxpz+hZ0+O03MCVgAQJgAQJgAQJgAQJgAQJgAQJgAQNnkOYGwf9PDgaHAfdf/WxVXfd37Xzf19/g/PnNks6enDB5POf7bjcwJWABAmABAmABAmABAmABAmABAmABDmfgA7btf3+cecvXBp8PjT+JyAFQCECQCECQCECQCECQCECQCECQCEzT4HsPb7BYydf/XGuVmvv3ZT9/nv//7VtPPvTvt8v//u50XnBNbOCgDCBADCBADCBADCBADCBADCBADCFr8fwNrnBJjX1H1+prECgDABgDABgDABgDABgDABgDABgLDF5wCWnhPY9fsFvH7xfNHr7/o+//GjR5ttZgUAYQIAYQIAYQIAYQIAYQIAYQIAYaufA5h7TmDM1DmCsTmBqfvkY68PQ6wAIEwAIEwAIEwAIEwAIEwAIEwAIGxwD53N5tTpk5PmCJb27MnxrK9/9sKlzTZ7+vDBrPcDuHL960lzLHOzAoAwAYAwAYAwAYAwAYAwAYAwAYAwcwDxOYZdnxOo7/OPsQKAMAGAMAGAMAGAMAGAMAGAMAGAsFXvUbL7cwJLOx7Z5/908+Xg8X/+eHfw+Ac331v1nIAVAIQJAIQJAIQJAIQJAIQJAIQJAISZA2DVcwJj+/RTXRn5Pv/fP7yZ9PprnxOwAoAwAYAwAYAwAYAwAYAwAYAwAYAwcwDMOiewdq9G9tnHfr5tnxOwAoAwAYAwAYAwAYAwAYAwAYAwAYAwcwAwwbbPCVgBQJgAQJgAQJgAQJgAQJgAQJgAQJg5AAjPCVgBQJgAQJgAQJgAQJgAQJgAQJgAQJg5ANjhOYH3r58cPG4FAGECAGECAGECAGECAGECAGECAGHmAGCL5wTGeC4A8J/8CQBhAgBhAgBhAgBhAgBhAgCbrn8BBttJJxxV77sAAAAASUVORK5CYII=",d0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQklEQVR4nGNgGGDAiEtCQIjvPyUGf3j3iZFsBwgI8f1/++wB2ZYvmD+Tobi6nShHsOCT/PjmGQOtAROtDF4yu5+oaGSilQOIdQQTLR1AjCOYaO0AZEdgcwgjvlxAbiJcv3kzTjn03MFICwdgA8dOnmSISS3EyJosxGg2cvekyPJzO7fjlGMh1pA1Z1LIsjzEZA5eeRZqGUQuYCFWYXypEdGGLuw+R30HLCTBUFIACy3TADHRxkJNwwY8DSwkI5pYiFWIy3BQ1FASOiy0LgeGRxo4h6copYsD+NlID/6Pv+ZQMQoOn2AQTuWDc9/O/gTmo9PI8gzmxDmUiThlUEORaFLlKXYAOkD2PSWAiVyN2IKerg6gFmAhRtHPW2xg+lnpDww2NjEwMKeCA46dPAlhqE1nIBnA9A5U55QBCyC2w0pXAAC+a5TLNL4sQgAAAABJRU5ErkJggg==",f0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAACtElEQVR4nO3cv0ocURiG8bMilqvoPXgBEsglhPSWgk32AkSsvIAUKSwlKCRCSsHCQlIL4oB4AalSbaWiW0WbTT0jrMjszHxznufXDbvr8c/Ld96dmTUlSZJENGh6gZXV4TSBPT5MGv8d17HQ9TegbhkAOAMAN2h6z78f/00kP398Lx3v7n8N3QmcAHAGAM4AwC22veDT3bjtJTWDEwDOAMAZALjWOwDNr6OD0vHWaGca6byAEwDOAMAZADg7ALwTOAHgDACcAYCzA8A7gRMAzgDAGQA4O0DPOkFV3Y7gBIAzAHAGAK71zwXkfk/g2fl5q+vV/dyBEwDOAMAZADg7QHBXRVE63hrtlI49D6Ba3ALgDABcuGsBG58+J7Lb3xetrucEgDMAcAYALlwHqDq9+ZJytvnhuNP1nQBwBgDOAMCF7wBd75G5cwLAGQA4AwAXvgNs722kPjn5dpv6xAkAZwDgDABc+A7Qtz21b5wAcAYAzgDAhe8Aud0PsBns2oYTAM4AwBkAuPAdINqemRsnAJwBgDMAcOE7QLT7AU4yuzbhBIAzAHAGAC58B2h6zz2tXGugnXdwAsAZADgDABe+A+R2P0A0TgA4AwBnAODCdwDa+/K2OQHgDACcAYBbpP+vXDonAJwBgDMAcOE6wPJSXuf+n15in8dwAsAZADgDABeuA6TL69Lh2mj4rpffH01mvr7u42+pvj59TKE5AeAMAJwBgIvXASreu2fntn7TnABwBgDOAMCF7wB15b6H1+UEgDMAcAYALvsOUPdaQO6cAHAGAM4AwBkAOAMAZwDgDABcuPMAz3+WZj4+3vs31+eP5/z1XvGeQEXmFgBnAOBa7wBXRTH7CeuHKSvFGz9vx5wAcAYAzgDADZpeYGV1OG16DZLHh8lc/2ZOADgDAGcAJEmSgP4D8kmnMKDRPzUAAAAASUVORK5CYII=",h0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEtElEQVR4nO3dMWocBxSA4VUILhWh3CEHEAEfIaR3aXBjHcAYVT6AixQpQ7AhCbg0uHBhXAdMBEYHSOVKlWUkVUka5wLJbDG7Ozvzf187rHa8Y/88M087qxUAAAAAAAAAsBQHq5k7Oj78PPU5MJ3rT7ez/zs8pS8mfXdgUgIAYQIAYQIAYQIAYQIAYQIAYQdzv89/dflhdyfDzv36y8+Dxx8/eTp43J7AMBMAhAkAhAkAhAkAhAkAhAkAhAkAhH25Wribj5dTnwLsLRMAhAkAhAkAhAkAhAkAhAkAhAkAhC1+D4Ble/Hsx8Hj908fDX6fxHX8uQImAAgTAAgTAAgTAAgTAAgTAAgTAAizB8Ci2RMYZgKAMAGAMAGAMAGAMAGAMAGAMAGAMHsApL2If5+ACQDCBADCBADCBADCBADCBADCBADC7AHAFvcE1pl6j8AEAGECAGECAGECAGECAGECAGECAGF7/7vMR8eHg/dZry4/DL7+5uPlpk+JHXr1+vWiP+/HT55OuidgAoAwAYAwAYAwAYAwAYAwAYAwAYAwewAwwrvz88Hj908fDR73fQDAZPwXAMIEAMIEAMIEAMIEAMIEAMI8F2CNk+++382VYC9dvH2zWjITAIQJAIQJAIQJAIQJAIQJAIQJAITZAxjp5fuHm7kSTOLet8/Tn7wJAMIEAMIEAMIEAMIEAMIEAMIEAMLsAYxUv4/MvJkAIEwAIEwAIEwAIEwAIEwAIEwAIMwewEgPzk42cyX4T7/9cOGT2SITAIQJAIQJAIQJAIQJAIQJAIQJAITZAxjJfWrmzAQAYQIAYQIAYQIAYQIAYQIAYQIAYfYARnr5/uFmrgRb4bkNw0wAECYAECYAECYAECYAECYAECYAEGYPYCT3mZkzEwCECQCECQCECQCECQCECQCECQCE2QMY6cHZyWauxEJ5bsJ+MwFAmABAmABAmABAmABAmABAmABAmD2A+H3udc818H0Hy2YCgDABgDABgDABgDABgDABgDABgDB7AFu+jw77zAQAYQIAYQIAYQIAYQIAYQIAYQIAYfYARvL78syZCQDCBADCBADCBADCBADCBADCBADC7AGscfH2zW6uBEzABABhAgBhAgBhAgBhAgBhAgBhAgBh9gDW+OqO7/3fZzf/PJ/6FGbNBABhAgBhAgBhAgBhAgBhAgBhAgBh9gDW+f2PwcNfnx6utunq2e2o95/69WOte//V3a2+/eKZACBMACBMACBMACBMACBMACBMACDMHsBI277Pvu/qf/65MwFAmABAmABAmABAmABAmABAmABAmD2AmXMfnjFMABAmABAmABAmABAmABAmABAmABBmD2Dmpn4uAPNmAoAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAw3wewxt9/3hn1AV+e/bXXP3/fz2+tu+NeXmcCgDABgDABgDABgDABgDABgDABgLDF7wG8Oz8f9wO++WlTp8I2jL2+cSYACBMACBMACBMACBMACBMACBMACDtYzdzR8eHnqc8B/s/1p9u9/jdmAoAwAYAwAYAwAYAwAYAwAYAwAQAAAAAAAAAAgNX8/QsQZqggL/0wUQAAAABJRU5ErkJggg==",A0="/assets/p04-auD5xrC0.webp",m0="/assets/style-BC5sDhYl.css",g0="/assets/3DReconstruction-CLiPht2l.pdf",p0="/assets/Drone-CnhOO8FH.pdf",v0="/assets/FASTAIMOVIE-CDebCQNv.pdf",b0="/assets/VehicleIdentification-BZ6cG__y.pdf",y0="/assets/WebHarvestRAG-CdmwNVLP.pdf",w0="/assets/YouDontNeedRAG-Ccxy0SNZ.pdf",E0="/assets/pingpong-BOCMlQx_.pdf",T0="/assets/3D-Bp4UFUal.mp4",C0="/assets/DroneDemo-jcg3Gykv.mp4",M0="/assets/FASTAIMOVIE-owzivxfR.mp4",S0=Object.assign({"../../../content/html/en/3d-reconstruction.html":zv,"../../../content/html/en/drone.html":_v,"../../../content/html/en/fast-ai-movie.html":Ov,"../../../content/html/en/index.html":Rv,"../../../content/html/en/pingpong-vision.html":Nv,"../../../content/html/en/vehicle-identification.html":jv,"../../../content/html/en/web-harvest-rag.html":Iv,"../../../content/html/en/you-dont-need-rag.html":Gv,"../../../content/html/zh/3d-reconstruction.html":Lv,"../../../content/html/zh/drone.html":Qv,"../../../content/html/zh/fast-ai-movie.html":Yv,"../../../content/html/zh/index.html":Hv,"../../../content/html/zh/pingpong-vision.html":Uv,"../../../content/html/zh/vehicle-identification.html":Vv,"../../../content/html/zh/web-harvest-rag.html":kv,"../../../content/html/zh/you-dont-need-rag.html":Xv}),D0=Object.assign({"../../../content/html/assets/3DReconstruction/p03.webp":qv,"../../../content/html/assets/3DReconstruction/p04.webp":Jv,"../../../content/html/assets/3DReconstruction/p05.webp":Kv,"../../../content/html/assets/3DReconstruction/p07.webp":Zv,"../../../content/html/assets/3DReconstruction/p08.webp":Pv,"../../../content/html/assets/3DReconstruction/p11.webp":Fv,"../../../content/html/assets/3DReconstruction/p14.webp":Wv,"../../../content/html/assets/3DReconstruction/p17.webp":$v,"../../../content/html/assets/3DReconstruction/p19.webp":tb,"../../../content/html/assets/3DReconstruction/p20.webp":eb,"../../../content/html/assets/3DReconstruction/p22.webp":nb,"../../../content/html/assets/3DReconstruction/p23.webp":ab,"../../../content/html/assets/3DReconstruction/p24.webp":lb,"../../../content/html/assets/3DReconstruction/p25.webp":ib,"../../../content/html/assets/3DReconstruction/p27.webp":sb,"../../../content/html/assets/3DReconstruction/p28.webp":cb,"../../../content/html/assets/3DReconstruction/p29.webp":ub,"../../../content/html/assets/3DReconstruction/p30.webp":ob,"../../../content/html/assets/3DReconstruction/p31.webp":rb,"../../../content/html/assets/3DReconstruction/p33.webp":db,"../../../content/html/assets/3DReconstruction/p34.webp":fb,"../../../content/html/assets/3DReconstruction/p35.webp":hb,"../../../content/html/assets/3DReconstruction/p36.webp":Ab,"../../../content/html/assets/Drone/p03.webp":mb,"../../../content/html/assets/Drone/p05.webp":gb,"../../../content/html/assets/Drone/p09.webp":pb,"../../../content/html/assets/Drone/p12.webp":vb,"../../../content/html/assets/Drone/p13.webp":bb,"../../../content/html/assets/Drone/p15.webp":yb,"../../../content/html/assets/Drone/p16.webp":wb,"../../../content/html/assets/FASTAIMOVIE/p02.webp":Eb,"../../../content/html/assets/FASTAIMOVIE/p03.webp":Tb,"../../../content/html/assets/FASTAIMOVIE/p05.webp":Cb,"../../../content/html/assets/FASTAIMOVIE/p06.webp":Mb,"../../../content/html/assets/FASTAIMOVIE/p07.webp":Sb,"../../../content/html/assets/FASTAIMOVIE/p08.webp":Db,"../../../content/html/assets/FASTAIMOVIE/p09.webp":Bb,"../../../content/html/assets/VehicleIdentification/p02.webp":xb,"../../../content/html/assets/VehicleIdentification/p03.webp":zb,"../../../content/html/assets/VehicleIdentification/p04.webp":_b,"../../../content/html/assets/VehicleIdentification/p05.webp":Ob,"../../../content/html/assets/VehicleIdentification/p06.webp":Rb,"../../../content/html/assets/VehicleIdentification/p07.webp":Nb,"../../../content/html/assets/VehicleIdentification/p08.webp":jb,"../../../content/html/assets/VehicleIdentification/p09.webp":Ib,"../../../content/html/assets/VehicleIdentification/p10.webp":Gb,"../../../content/html/assets/VehicleIdentification/p12.webp":Lb,"../../../content/html/assets/VehicleIdentification/p15.webp":Qb,"../../../content/html/assets/VehicleIdentification/p16.webp":Yb,"../../../content/html/assets/VehicleIdentification/p17.webp":Hb,"../../../content/html/assets/VehicleIdentification/p18.webp":Ub,"../../../content/html/assets/VehicleIdentification/p21.webp":Vb,"../../../content/html/assets/VehicleIdentification/p25.webp":kb,"../../../content/html/assets/WebHarvestRAG/p06.webp":Xb,"../../../content/html/assets/YouDontNeedRAG/p04.webp":qb,"../../../content/html/assets/icons/3d-reconstruction.png":Jb,"../../../content/html/assets/icons/3d-reconstruction@4x.png":Kb,"../../../content/html/assets/icons/3d-reconstruction@8x.png":Zb,"../../../content/html/assets/icons/drone.png":Pb,"../../../content/html/assets/icons/drone@4x.png":Fb,"../../../content/html/assets/icons/drone@8x.png":Wb,"../../../content/html/assets/icons/fast-ai-movie.png":$b,"../../../content/html/assets/icons/fast-ai-movie@4x.png":t0,"../../../content/html/assets/icons/fast-ai-movie@8x.png":e0,"../../../content/html/assets/icons/pingpong-vision.png":n0,"../../../content/html/assets/icons/pingpong-vision@4x.png":a0,"../../../content/html/assets/icons/pingpong-vision@8x.png":l0,"../../../content/html/assets/icons/vehicle-identification.png":i0,"../../../content/html/assets/icons/vehicle-identification@4x.png":s0,"../../../content/html/assets/icons/vehicle-identification@8x.png":c0,"../../../content/html/assets/icons/web-harvest-rag.png":u0,"../../../content/html/assets/icons/web-harvest-rag@4x.png":o0,"../../../content/html/assets/icons/web-harvest-rag@8x.png":r0,"../../../content/html/assets/icons/you-dont-need-rag.png":d0,"../../../content/html/assets/icons/you-dont-need-rag@4x.png":f0,"../../../content/html/assets/icons/you-dont-need-rag@8x.png":h0,"../../../content/html/assets/pingpong/p04.webp":A0,"../../../content/html/assets/style.css":m0,"../../../content/pdf/3DReconstruction.pdf":g0,"../../../content/pdf/Drone.pdf":p0,"../../../content/pdf/FASTAIMOVIE.pdf":v0,"../../../content/pdf/VehicleIdentification.pdf":b0,"../../../content/pdf/WebHarvestRAG.pdf":y0,"../../../content/pdf/YouDontNeedRAG.pdf":w0,"../../../content/pdf/pingpong.pdf":E0,"../../../content/videos/3D.mp4":T0,"../../../content/videos/DroneDemo.mp4":C0,"../../../content/videos/FASTAIMOVIE.mp4":M0}),zi=[{id:"pingpong-vision",document:"pingpong-vision",title:"PingPong Vision",zh:"PingPong Vision",category:"AI / INDUSTRIAL SYSTEMS",tags:["AI OCR","FastAPI","TimescaleDB"],thumbnail:"html/assets/pingpong/p04.webp",icon:"html/assets/icons/pingpong-vision@4x.png",pdf:"pdf/pingpong.pdf"},{id:"web-harvest-rag",document:"web-harvest-rag",title:"Web Harvest RAG",zh:"Web Harvest RAG",category:"AI / RETRIEVAL",tags:["RAG","BM25","Vector search"],thumbnail:"html/assets/WebHarvestRAG/p06.webp",icon:"html/assets/icons/web-harvest-rag@4x.png",pdf:"pdf/WebHarvestRAG.pdf"},{id:"you-dont-need-rag",document:"you-dont-need-rag",title:"You Don’t Need RAG",zh:"You Don’t Need RAG",category:"AI / KNOWLEDGE TOOLS",tags:["Web scraping","RAG","Data preparation"],thumbnail:"html/assets/YouDontNeedRAG/p04.webp",icon:"html/assets/icons/you-dont-need-rag@4x.png",pdf:"pdf/YouDontNeedRAG.pdf"},{id:"fast-ai-movie",document:"fast-ai-movie",title:"FAST AI Movie Web",zh:"FAST AI 视频编辑平台",category:"PRODUCT ENGINEERING",tags:["AI video","Editing workflows","Web"],thumbnail:"html/assets/FASTAIMOVIE/p02.webp",icon:"html/assets/icons/fast-ai-movie@4x.png",pdf:"pdf/FASTAIMOVIE.pdf"},{id:"vehicle-identification",document:"vehicle-identification",title:"Vehicle Noise Classification",zh:"道路噪声车辆分类",category:"MACHINE LEARNING",tags:["Acoustics","KNN","Neural networks"],thumbnail:"html/assets/VehicleIdentification/p02.webp",icon:"html/assets/icons/vehicle-identification@4x.png",pdf:"pdf/VehicleIdentification.pdf"},{id:"3d-reconstruction",document:"3d-reconstruction",title:"Stereo 3D Reconstruction",zh:"双目视觉三维重建",category:"COMPUTER VISION",tags:["Stereo vision","BM / SGBM","Point clouds"],thumbnail:"html/assets/3DReconstruction/p03.webp",icon:"html/assets/icons/3d-reconstruction@4x.png",pdf:"pdf/3DReconstruction.pdf"},{id:"drone-simulator",document:"drone",title:"Drone Simulator",zh:"无人机仿真与控制",category:"SYSTEMS / ROBOTICS",tags:["seL4 / TrentOS","PX4","C++"],thumbnail:"html/assets/Drone/p03.webp",icon:"html/assets/icons/drone@4x.png",pdf:"pdf/Drone.pdf"}];function Vo(c){return D0[`../../../content/${c.replace(/^\//,"")}`]}function HA(c,d){return S0[`../../../content/html/${d}/${c.document}.html`]??""}function B0(c){if(c.startsWith("../assets/"))return Vo(`html/assets/${c.slice(10)}`);if(c.startsWith("../../videos/"))return Vo(`videos/${c.slice(12)}`)}function x0(c,d){var u;return(((u=HA(c,d).match(/<main\b[^>]*>([\s\S]*?)<\/main>/i))==null?void 0:u[1])??"").replace(/<nav\b[^>]*class=["']topbar["'][^>]*>[\s\S]*?<\/nav>/i,"").replace(/\bsrc=(["'])([^"']+)\1/gi,(A,E,B)=>{const y=B0(B);return y?`src=${E}${y}${E}`:/^(\.\.\/|\/)/.test(B)?"":A})}function UA(c,d){var r;return((r=HA(c,d).match(/<p\b[^>]*class=["']lead["'][^>]*>([\s\S]*?)<\/p>/i))==null?void 0:r[1].replace(/<[^>]*>/g,"").trim())??""}function z0({item:c,language:d,onSelect:r}){const u=Hn(pv(c.id,{en:c.title,zh:c.zh}));return f.jsxs("button",{ref:u,className:"project-file","data-agent-id":`project-card:${c.id}`,onClick:()=>r(c.id),children:[f.jsx("img",{src:Vo(c.icon),alt:""}),f.jsx("span",{children:d==="en"?c.title:c.zh}),f.jsx("span",{className:"project-file-tooltip",role:"tooltip",children:UA(c,d)})]})}function _0({image:c,language:d,onClose:r}){return z.useEffect(()=>{const u=A=>{A.key==="Escape"&&r()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[r]),YA.createPortal(f.jsxs("div",{className:"image-viewer",role:"dialog","aria-modal":"true","aria-label":c.alt||(d==="en"?"Image preview":"图片预览"),onClick:r,children:[f.jsx("img",{src:c.src,alt:c.alt}),f.jsx("button",{className:"image-viewer-close","aria-label":d==="en"?"Close preview":"关闭预览",onClick:r,children:"×"})]}),document.body)}function O0({language:c,visible:d,projectId:r,onSelect:u}){const A=r,E=u,B=z.useRef(null);z.useEffect(()=>{var O;d||(O=B.current)==null||O.querySelectorAll("video").forEach(L=>L.pause())},[d]);const y=zi.find(O=>O.id===A),[x,N]=z.useState(null);z.useEffect(()=>N(null),[A]);const _=O=>{const L=O.target.closest("img");L&&N({src:L.currentSrc||L.src,alt:L.alt})},w=Hn({id:`project:${(y==null?void 0:y.id)??"inactive"}`,names:{en:(y==null?void 0:y.title)??"Project detail",zh:(y==null?void 0:y.zh)??"项目详情"},scope:{window:`project:${(y==null?void 0:y.id)??"inactive"}`,panel:"detail"},capabilities:["highlight","guideTo"],...y?{projectId:y.id}:{}});return z.useEffect(()=>{var L;const O=(L=B.current)==null?void 0:L.closest(".content-scroll");O&&(O.scrollTop=0)},[A,c]),y?f.jsxs("div",{ref:w,className:"project-detail","data-agent-id":`project:${y.id}`,children:[f.jsx("div",{className:"project-detail-nav",children:f.jsxs("button",{onClick:()=>E(null),children:["← ",c==="en"?"All projects":"全部项目"]})}),f.jsx("span",{className:"content-kicker",children:y.category}),f.jsx("h1",{children:c==="en"?y.title:y.zh}),f.jsx("p",{className:"project-summary",children:UA(y,c)}),f.jsx(Ol,{values:y.tags,targetPrefix:`project:${y.id}:tag`,scope:{window:`project:${y.id}`,panel:"detail"},projectId:y.id}),f.jsx("article",{className:"html-content markdown-content",onClick:_,dangerouslySetInnerHTML:{__html:x0(y,c)}}),f.jsxs("button",{className:"content-back",onClick:()=>E(null),children:["← ",c==="en"?"Back to projects":"返回项目列表"]}),x&&f.jsx(_0,{image:x,language:c,onClose:()=>N(null)})]}):f.jsxs("div",{ref:B,className:"projects-content",children:[f.jsxs("header",{className:"collection-header",children:[f.jsxs("span",{className:"content-kicker",children:["PROJECTS / ",String(zi.length).padStart(2,"0")," ITEMS"]}),f.jsx("h1",{children:c==="en"?"Projects directory":"项目目录"})]}),f.jsx("div",{className:"project-directory",role:"list",children:zi.map((O,L)=>f.jsx(z0,{item:O,index:L,language:c,onSelect:E},O.id))})]})}const R0={en:`README
======

xiaohengOS v1.0 — the personal computer of Xiaoheng Hu


HELLO
  I'm Xiaoheng Hu (胡晓亨), a software engineer in Munich working on
  full-stack products, AI/LLM applications and developer platforms.
  This little computer is my portfolio.


WHAT'S ON THIS DESKTOP
  Projects/        7 projects with write-ups, figures and demo videos
  README           this file: what this site is, plus my profile below
  Experience       where I've worked and what I built there
  Contact          email and LinkedIn
  DOOM.exe         the 1993 shareware episode, playable right here


MEET MONTY
  The little robot living in this screen is Monty, the agent of this
  computer. Type in the terminal at the bottom ("ask Monty…") and press
  Enter, or click Monty itself. What Monty can do:

  · Answer questions about my projects, experience and skills, using
    the content of this portfolio, and show where the answer came from.
  · Explain the public source code of this site (stack, structure, a
    specific module) with links to the files on GitHub.
  · Reply in your language: write in English or Chinese and Monty
    follows you.
  · Show you the way: Monty flies next to the folder, project or tag
    you're looking for and highlights it. The clicking stays with you.
  · Suggest something now and then: if you linger on a project, it may
    point out a related one. At most two unprompted messages per visit.
  · Rest: after a quiet while Monty dozes off, and wakes up when you
    interact again.

  Settings (⚙ next to Monty while the chat is open):
  · Do not disturb: no more unprompted messages.
  · Clear this session.
  · Session activity: what Monty noticed, which tools it used and
    which sources it read.

  Monty never clicks, scrolls, navigates or types for you.
  Privacy: it only sees a short summary of this visit (which window is
  open, what you hovered or clicked). Never mouse positions or text you
  type elsewhere, and everything resets when you leave or refresh.


TIPS
  · Click a desktop icon to open it. Windows can be minimized,
    maximized and closed like on any desktop.
  · The thin button at the far right of the status bar shows the
    desktop; click it again to bring the windows back.
  · The arrow in the bottom-right corner of the desktop switches to the
    next wallpaper.
  · Click a figure inside a project to view it full size.
  · EN / 中 switches the language. ⏻ turns the computer off.
  · Outside the screen: the button on the monitor's bezel turns the
    monitor off and on, and the desk lamp can be switched off too.


HOW IT'S BUILT
  Frontend   React · TypeScript · Vite, pixel-art desk and CRT monitor
  Agent      Python · FastAPI · LangGraph, retrieval over the portfolio
             content and this site's public GitHub repository
  Source     github.com/huxiaoheng44/xiaoheng-web-v3
`,zh:`README
======

xiaohengOS v1.0 —— 胡晓亨的个人电脑


你好
  我是胡晓亨（Xiaoheng Hu），在慕尼黑工作的软件工程师，做过全栈产品、
  AI/LLM 应用和开发者平台。这台小电脑就是我的作品集。


桌面上有什么
  项目/            7 个项目，附说明、图表和演示视频
  README           就是这个文件：介绍这个网站，下面是我的个人资料
  经历             我的工作经历和做过的事情
  联系             邮箱和 LinkedIn
  DOOM.exe         1993 年的《毁灭战士》共享版，可以直接在这里玩


认识 Monty
  住在这块屏幕里的小机器人叫 Monty，是这台电脑的 Agent。
  在底部终端（"ask Monty…"）里输入问题后按回车，或者直接点击 Monty。
  Monty 能做的事：

  · 回答关于我的项目、经历和技能的问题，依据是这个作品集里的内容，
    并告诉你答案出自哪里。
  · 讲解这个网站公开的源代码（技术栈、结构、某个模块），
    附上 GitHub 上对应文件的链接。
  · 用你的语言回答：你用中文或英文提问，它就用同样的语言回复。
  · 给你指路：Monty 会飞到你要找的文件夹、项目或标签旁边并高亮它，
    点不点由你决定。
  · 偶尔给点建议：你在某个项目上停留时，它可能推荐一个相关的项目。
    每次访问最多主动说两次话。
  · 会休息：你一段时间没有操作，它会打瞌睡；你再次操作时它会醒来。

  设置（打开对话后，Monty 旁边的 ⚙）：
  · 免打扰：不再主动发消息。
  · 清空本次会话。
  · 会话活动：Monty 注意到了什么、用了哪些工具、读了哪些资料。

  Monty 从不替你点击、滚动、跳转或输入。
  隐私：它只能看到这次访问的简短摘要（打开了哪个窗口、
  悬停或点击了什么），不会看到鼠标坐标或你在别处输入的文字，
  离开或刷新页面后一切都会重置。


小提示
  · 点击桌面图标即可打开；窗口可以像普通桌面一样最小化、最大化和关闭。
  · 状态栏最右边的细长按钮可以显示桌面，再点一次恢复窗口。
  · 桌面右下角的箭头可以切换到下一张壁纸。
  · 点击项目里的图片可以放大查看。
  · EN / 中 切换语言，⏻ 关闭电脑。
  · 屏幕外面：显示器边框上的按钮可以开关显示器，台灯也可以关掉。


技术实现
  前端      React · TypeScript · Vite，像素风书桌与 CRT 显示器
  Agent     Python · FastAPI · LangGraph，检索作品集内容和
            本网站在 GitHub 上的公开仓库
  源码      github.com/huxiaoheng44/xiaoheng-web-v3
`};function N0({language:c}){return f.jsxs(f.Fragment,{children:[f.jsx("pre",{className:"readme-file",children:R0[c]}),f.jsxs("div",{className:"readme-divider","aria-hidden":"true",children:["── ",c==="en"?"PROFILE":"个人资料"," ──"]})]})}const j0={searchKnowledge:{en:"Searched the knowledge base",zh:"检索知识库"},readKnowledge:{en:"Read a source",zh:"阅读资料"},present:{en:"Presented guidance",zh:"展示导览提示"}};function I0({language:c,visible:d}){const r=Nl(),u=c==="zh",A=z.useRef(null),E=z.useRef(!0);z.useEffect(()=>{var N;const y=(N=A.current)==null?void 0:N.closest(".content-scroll");if(!y)return;const x=()=>{E.current=y.scrollHeight-y.scrollTop-y.clientHeight<60};return y.addEventListener("scroll",x,{passive:!0}),()=>y.removeEventListener("scroll",x)},[]),z.useLayoutEffect(()=>{var x;const y=(x=A.current)==null?void 0:x.closest(".content-scroll");d&&y&&E.current&&(y.scrollTop=y.scrollHeight)},[d,r.lines,r.busy]),z.useEffect(()=>{d&&r.refreshUsage()},[d,r.busy]);const B=r.lines.filter(y=>y.role==="user"||y.text||y.steps.length||y.activity.length||y.sources.length);return f.jsxs("div",{ref:A,className:"monty-history","data-agent-ui":!0,children:[f.jsxs("div",{className:"monty-history-intro",children:[f.jsx("span",{children:u?"对话记录":"CONVERSATION LOG"}),f.jsx("p",{children:u?"保留本次页面会话的全部记录；刷新或清空会话后重置。":"All messages from this page session. Resets when you refresh or clear the session."})]}),!B.length&&f.jsx("p",{className:"monty-history-empty",children:u?"还没有聊天记录。在下方输入框和 Monty 打个招呼吧。":"No messages yet. Say hello to Monty in the command bar below."}),f.jsx("ol",{className:"monty-history-lines","aria-label":u?"聊天记录":"Chat history",children:B.map(y=>f.jsxs("li",{className:`history-line history-${y.role}`,children:[f.jsxs("header",{children:[f.jsx("strong",{children:y.role==="user"?u?"你":"YOU":"MONTY"}),f.jsx("time",{dateTime:new Date(y.createdAt).toISOString(),children:new Date(y.createdAt).toLocaleTimeString(u?"zh-CN":"en-GB",{hour:"2-digit",minute:"2-digit"})})]}),y.text&&f.jsx("p",{children:y.text}),!!y.steps.length&&f.jsx("ol",{className:"history-guide-steps",children:y.steps.map((x,N)=>f.jsx("li",{children:x},N))}),!!y.sources.length&&f.jsxs("div",{className:"history-sources",children:[f.jsx("span",{children:u?"来源":"Sources"}),y.sources.map(x=>x.url?f.jsxs("a",{href:x.url,target:"_blank",rel:"noreferrer",children:[x.title," ↗"]},x.id):f.jsx("span",{children:x.title},x.id))]}),!!y.activity.length&&f.jsxs("details",{className:"history-tools",children:[f.jsx("summary",{children:u?"本次回复的活动":"Activity for this reply"}),f.jsx("ul",{children:y.activity.map((x,N)=>{var _;return f.jsx("li",{children:((_=j0[x])==null?void 0:_[c])??x},N)})})]})]},y.id))}),r.busy&&f.jsx("p",{className:"history-pending",role:"status",children:u?"Monty 正在回复…":"Monty is replying…"}),f.jsxs("details",{className:"history-observations",children:[f.jsx("summary",{children:u?"当前会话活动摘要":"Current session activity"}),f.jsx(LA,{language:c,summary:r.activity})]})]})}function G0({language:c}){const{usage:d}=Nl(),r=c==="zh",u=A=>A.toLocaleString(r?"zh-CN":"en-US");return f.jsxs("footer",{className:"monty-history-footer","data-agent-ui":!0,children:[f.jsx("span",{children:r?"仅本次会话":"THIS SESSION"}),f.jsx("span",{className:"monty-token-balance",title:r?"仅计算模型生成的回复 token，包含推理；不包含输入 token。用量缺失时按预留额度计入。":"Reply tokens, including reasoning; excludes input tokens. Missing usage is charged at the reserved allowance.",children:d?f.jsxs(f.Fragment,{children:[d.estimated?"≈ ":"",u(d.remaining)," / ",u(d.limit)," ",r?"回复 token 剩余":"reply tokens left",d.reserved>0&&f.jsxs("small",{children:[" · ",r?"回复中":"in progress"]})]}):f.jsx(f.Fragment,{children:r?"回复额度：暂无数据":"Reply allowance: no data yet"})})]})}const BA=[{id:"ai",label:{en:"AI projects",zh:"AI 项目"},question:{en:"Show me AI projects",zh:"带我看 AI 项目"}},{id:"drone",label:{en:"Drone simulator",zh:"无人机仿真"},question:{en:"Take me to the drone simulator",zh:"带我看无人机仿真项目"}},{id:"experience",label:{en:"Work experience",zh:"工作经历"},question:{en:"Show me your work experience",zh:"带我看工作经历"}}];function L0({language:c,onSelect:d,onDismiss:r}){const u=c==="zh",A=u?"你好，我是 Monty。想先看看什么？":"Hi, I’m Monty. What would you like to explore?",E=A.length+BA.reduce((_,w)=>_+w.label[c].length,0),B=matchMedia("(prefers-reduced-motion: reduce)").matches,[y,x]=z.useState(B?E:0);z.useEffect(()=>{x(B?E:0)},[c,B,E]),z.useEffect(()=>{if(y>=E)return;const _=setTimeout(()=>x(w=>Math.min(E,w+2)),24);return()=>clearTimeout(_)},[y,E]);let N=A.length;return f.jsxs("section",{className:"monty-speech terminal-welcome","data-monty-welcome":!0,"aria-label":u?"Monty 快捷提问":"Monty quick questions",children:[f.jsxs("header",{children:[f.jsx("span",{children:"Monty"}),f.jsx("button",{type:"button","aria-label":u?"关闭快捷提问":"Dismiss quick questions",onClick:r,children:"×"})]}),f.jsxs("p",{className:"terminal-welcome-copy",children:[f.jsxs("span",{"aria-hidden":"true",children:[A.slice(0,y),y<A.length&&f.jsx("span",{className:"terminal-type-caret",children:"▋"})]}),f.jsx("span",{className:"sr-only",children:A})]}),f.jsx("div",{className:"terminal-offer-list",children:BA.map((_,w)=>{const O=_.label[c],L=Math.max(0,Math.min(O.length,y-N));return N+=O.length,f.jsxs("button",{type:"button","data-offer-id":_.id,"aria-label":O,disabled:L<O.length,onClick:()=>d(_.question[c]),children:[f.jsxs("span",{className:"terminal-offer-number","aria-hidden":"true",children:[w+1,"."]}),f.jsxs("span",{"aria-hidden":"true",children:[O.slice(0,L),L>0&&L<O.length&&f.jsx("span",{className:"terminal-type-caret",children:"▋"})]})]},_.id)})}),f.jsx("small",{children:u?"点击填入问题，然后按 Enter 开始。也可以直接输入你的问题。":"Choose a question, then press Enter to start. Or type your own."})]})}function Q0({language:c,now:d}){const[r,u]=z.useState(()=>navigator.onLine),[A,E]=z.useState(null);z.useEffect(()=>{const N=()=>u(navigator.onLine);return window.addEventListener("online",N),window.addEventListener("offline",N),()=>{window.removeEventListener("online",N),window.removeEventListener("offline",N)}},[]),z.useEffect(()=>{var L;let N=!0,_;const w=()=>{N&&_&&E({level:_.level,charging:_.charging})},O=navigator;return(L=O.getBattery)==null||L.call(O).then(G=>{N&&(_=G,w(),G.addEventListener("levelchange",w),G.addEventListener("chargingchange",w))}),()=>{N=!1,_&&(_.removeEventListener("levelchange",w),_.removeEventListener("chargingchange",w))}},[]);const B=c==="zh"?"zh-CN":void 0,y=d.toLocaleTimeString(B,{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),x=A?`${Math.round(A.level*100)}%${A.charging?" ⚡":""}`:"--";return f.jsxs("div",{className:"system-status","aria-label":c==="zh"?"系统状态":"System status",children:[f.jsx("span",{className:"network-status",role:"img","aria-label":r?c==="zh"?"网络已连接":"Network connected":c==="zh"?"网络未连接":"Network offline",title:r?c==="zh"?"网络已连接":"Network connected":c==="zh"?"网络未连接":"Network offline",children:f.jsxs("svg",{viewBox:"0 0 24 20",width:"18",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true",children:[f.jsx("path",{d:"M2 6a16 16 0 0 1 20 0M5 10a11 11 0 0 1 14 0M8.5 14a5.5 5.5 0 0 1 7 0"}),f.jsx("circle",{cx:"12",cy:"18",r:"1",fill:"currentColor"}),!r&&f.jsx("path",{d:"M3 2l18 17",strokeWidth:"2"})]})}),f.jsxs("span",{title:c==="zh"?"电池状态":"Battery status",children:["▱ ",x]}),f.jsx("time",{dateTime:d.toISOString(),title:Intl.DateTimeFormat().resolvedOptions().timeZone,children:y})]})}function Y0({language:c,now:d,trailing:r,active:u=!1}){const A=Nl(),[E,B]=z.useState(""),y=z.useRef(null),x=z.useRef(!1),[N,_]=z.useState(!1),[w,O]=z.useState(null);z.useEffect(()=>{u&&!x.current?(x.current=!0,_(!0)):u||(_(!1),O(null))},[u]),z.useEffect(()=>(A.setWelcomeVisible(N),()=>A.setWelcomeVisible(!1)),[N,A.setWelcomeVisible]),z.useEffect(()=>{A.busy&&_(!1)},[A.busy]),z.useEffect(()=>{if(!w)return;const it=setTimeout(()=>{const K=Math.min(w.text.length,w.index+2);B(w.text.slice(0,K)),O(K===w.text.length?null:{...w,index:K})},24);return()=>clearTimeout(it)},[w]);const L=it=>{var K;_(!1),matchMedia("(prefers-reduced-motion: reduce)").matches?(B(it),O(null)):(B(""),O({text:it,index:0})),(K=y.current)==null||K.focus()},G=it=>{it.preventDefault();const K=((w==null?void 0:w.text)??E).trim();K&&(O(null),_(!1),A.start(K),B(""))};return f.jsxs("footer",{className:"monty-terminal os-terminal","data-agent-ui":!0,children:[u&&N&&A.welcomeHost&&YA.createPortal(f.jsx(L0,{language:c,onSelect:L,onDismiss:()=>_(!1)}),A.welcomeHost),f.jsx("label",{htmlFor:"monty-command",className:"terminal-user",children:"xiaoheng@portfolio:~$"}),f.jsx("form",{onSubmit:G,children:f.jsx("input",{ref:y,id:"monty-command","aria-label":"Ask Monty",placeholder:"ask Monty…",value:E,maxLength:4e3,autoComplete:"off",onChange:it=>{O(null),_(!1),B(it.target.value)},onKeyDown:it=>{it.key==="Escape"&&(O(null),_(!1))}})}),f.jsx(Q0,{language:c,now:d}),r,f.jsx("span",{className:"sr-only",children:c==="zh"?"回车发送，悬停 Monty 查看帮助":"Enter to send. Hover Monty for help."})]})}function H0(c){const d=z.useRef(null),[r,u]=z.useState(!1);return z.useEffect(()=>{const A=d.current,E=A==null?void 0:A.querySelector(".monitor-screen");if(!A||!E)return;const B=()=>matchMedia("(min-width: 701px)").matches,y=()=>{if(!c||!B()){A.style.transform="translate3d(0px,0px,0) scale(1)";return}const _=new DOMMatrix(getComputedStyle(A).transform),w=A.getBoundingClientRect(),O=E.getBoundingClientRect(),L=_.a||1,G=w.left-_.e,it=w.top-_.f,K=(O.left-w.left)/L,Et=(O.top-w.top)/L,Bt=O.width/L,nt=O.height/L,Vt=Math.max(1,Math.min((innerWidth-180)/Bt,(innerHeight-40)/nt,2.4)),Gt=(innerWidth-Bt*Vt)/2-G-K*Vt,Xt=(innerHeight-nt*Vt)/2-it-Et*Vt;A.style.transform=`translate3d(${Gt}px,${Xt}px,0) scale(${Vt})`},x=()=>{u(c&&B()),y()};x();const N=new ResizeObserver(x);return N.observe(A),window.addEventListener("resize",x),()=>{N.disconnect(),window.removeEventListener("resize",x)}},[c]),{stageRef:d,focused:r}}const xA=[1,2,3,4,5,6].map(c=>`/assets/wallpapers/${c}.webp`);function U0(){const[c,d]=z.useState(0),r=()=>d(u=>(u+1)%xA.length);return{index:c,src:xA[c],next:r}}const zA="xiaohengos.lamp";function V0(){const[c,d]=z.useState(()=>{try{return localStorage.getItem(zA)!=="off"}catch{return!0}});return z.useEffect(()=>{try{localStorage.setItem(zA,c?"on":"off")}catch{}},[c]),{on:c,toggle:()=>d(r=>!r)}}function k0(){const[c,d]=z.useState("initial");return{power:c,on:c!=="off",toggle:()=>d(r=>r==="off"?"on":"off")}}function X0({id:c}){return f.jsx("img",{"aria-hidden":"true",className:"desktop-icon",src:`/assets/desktop-icons/${c}.png`,alt:"",width:36,height:36})}function _i(c,d){if(c==="monty-history")return d==="zh"?"Monty 聊天记录":"Monty Chat History";if(c.startsWith("project:")){const r=zi.find(u=>u.id===c.slice(8));return(d==="zh"?r==null?void 0:r.zh:r==null?void 0:r.title)||c}return NA[c][d]}function q0({id:c,language:d,active:r,dispatch:u}){const A=Hn({id:`folder:${c}`,names:RA[c],scope:{},capabilities:["highlight","guideTo"],completion:c==="projects"?{window:"projects",panel:"collection"}:{window:c,panel:c==="about"?"profile":""}});return f.jsxs("button",{ref:A,"data-guide":c,"data-agent-id":`folder:${c}`,className:`folder ${r===c?"selected":""}`,onClick:()=>u({type:"open",id:c}),children:[f.jsx(X0,{id:c}),f.jsx("span",{children:NA[c][d]})]})}function J0({language:c}){const d=Hn({id:"experience:timeline",names:{en:"Work experience",zh:"工作经历"},scope:{window:"experience"},capabilities:["highlight","guideTo"]});return f.jsxs("div",{ref:d,className:"standalone-experience","data-agent-id":"experience:timeline",children:[f.jsx("h1",{children:c==="en"?"Experience":"工作经历"}),f.jsx(QA,{language:c})]})}function K0({language:c,active:d,dispatch:r}){return f.jsx("nav",{className:"desktop-folders","aria-label":c==="en"?"Desktop folders":"桌面文件夹",children:Uo.map(u=>f.jsx(q0,{id:u,language:c,active:d,dispatch:r},u))})}function Z0({window:c,language:d,dispatch:r,index:u,active:A}){const E=Rl(),B=_i(c.id,d),y=c.id.startsWith("project:")?c.id.slice(8):void 0,x=Hn({id:`window:minimize:${c.id}`,names:{en:`Minimize ${_i(c.id,"en")}`,zh:`最小化${_i(c.id,"zh")}`},scope:{window:c.id},capabilities:["highlight","guideTo"],completion:{minimizedWindow:c.id}});return f.jsxs("section",{"data-agent-ui":c.id==="monty-history"?!0:void 0,hidden:c.minimized,"data-window-id":c.id,role:"region","aria-label":B,className:`desktop-window ${c.maximized?"maximized":""} ${A?"active":""}`,style:{zIndex:u+1,"--offset":`${u%4*10}px`},onPointerDown:()=>{A||r({type:"open",id:c.id})},onFocusCapture:()=>{A||r({type:"open",id:c.id})},children:[f.jsxs("header",{className:"window-title",children:[f.jsx("span",{"aria-hidden":"true",children:"▣"}),f.jsxs("span",{children:["/",B]}),f.jsx("div",{className:"window-controls",children:["minimize","maximize","close"].map((N,_)=>f.jsx("button",{ref:N==="minimize"?x:void 0,"data-agent-id":N==="minimize"?`window:minimize:${c.id}`:void 0,"data-guide":"control","aria-label":d==="en"?`${N} ${B}`:`${["最小化","最大化","关闭"][_]}${B}`,onClick:()=>r({type:N,id:c.id}),children:["−",c.maximized?"▣":"□","×"][_]},N))})]}),f.jsxs("div",{className:"window-toolbar",children:[f.jsxs("span",{children:[c.id==="monty-history"?d==="zh"?"本次会话":"THIS SESSION":d==="en"?"Directory":"目录"," / ",B]}),f.jsx("span",{children:c.id==="monty-history"?"MONTY.LOG":y?"PROJECT":c.id==="projects"?`${String(zi.length).padStart(2,"0")} PROJECTS`:c.id==="experience"?"04 ROLES":c.id==="about"?"PROFILE":c.id==="doom"?"SHAREWARE · 1993":"CONNECT"})]}),f.jsxs("div",{className:"content-scroll",tabIndex:0,"aria-label":d==="en"?`${B} content`:`${B}内容`,children:[c.id==="about"&&f.jsxs(f.Fragment,{children:[f.jsx(N0,{language:d}),f.jsx(xv,{language:d})]}),(c.id==="projects"||y)&&f.jsx(O0,{language:d,visible:!c.minimized&&A,projectId:y,onSelect:N=>E.navigate(N?`project:${N}`:"projects")}),c.id==="experience"&&f.jsx(J0,{language:d}),c.id==="monty-history"&&f.jsx(I0,{language:d,visible:A&&!c.minimized}),c.id==="contact"&&f.jsx(Bv,{language:d}),c.id==="doom"&&f.jsx("iframe",{className:"doom-frame",src:"/apps/doom/index.html",title:"DOOM",sandbox:"allow-scripts",allow:"autoplay"})]}),c.id==="monty-history"&&f.jsx(G0,{language:d})," ",c.id==="doom"&&f.jsx("footer",{className:"window-footer",children:f.jsx("span",{children:d==="en"?"Click the game first · Arrows move · Ctrl fire · Space open · Esc menu":"先点一下画面 · 方向键移动 · Ctrl 开火 · 空格开门 · Esc 菜单"})})]})}function P0({language:c,state:d,dispatch:r}){const u=Hn({id:"desktop:show",names:{en:"Show desktop",zh:"显示桌面"},scope:{},capabilities:["highlight","guideTo"]}),A=d.windows.length>0&&d.windows.every(B=>B.minimized),E=c==="en"?A?"Restore windows":"Show desktop":A?"恢复窗口":"显示桌面";return f.jsx("button",{ref:u,"data-agent-id":"desktop:show",className:"show-desktop","data-hint":E,title:E,"aria-label":c==="en"?"Show desktop":"显示桌面","aria-pressed":A,disabled:!d.windows.length,onClick:()=>r({type:"showDesktop"}),children:f.jsx("span",{"aria-hidden":"true"})})}function F0({language:c,setLanguage:d,active:r,powered:u=!0,onEnter:A,onShutdown:E}){const{state:B,active:y,dispatch:x,reset:N}=Rl(),[_,w]=z.useState(new Date),O=U0();return z.useEffect(()=>{const L=setInterval(()=>w(new Date),1e3);return()=>clearInterval(L)},[]),f.jsxs("div",{className:"monitor-screen","data-booting":!r,inert:!u,children:[f.jsxs("div",{className:"os-shell",inert:!r,children:[f.jsxs("header",{className:"os-header",children:[f.jsxs("span",{className:"os-brand",children:[f.jsx("b",{children:"▣"})," xiaohengOS ",f.jsx("small",{children:"v1.0"})]}),f.jsxs("span",{children:[f.jsx("button",{className:"language-toggle","data-guide":"language","aria-label":c==="en"?"Switch to Chinese":"切换为英文",onClick:()=>d(c==="en"?"zh":"en"),children:c==="en"?"EN / 中":"中 / EN"}),f.jsx("button",{className:"power-control","aria-label":c==="en"?"Shut down xiaohengOS":"关闭 xiaohengOS",onClick:()=>{N(),E()},children:"⏻"})]})]}),f.jsxs("div",{className:"desktop-area",children:[f.jsx("div",{className:"wallpaper has-image","aria-hidden":"true",children:f.jsx("img",{className:"wallpaper-image",src:O.src,alt:""},O.src)}),f.jsx("button",{className:"wallpaper-next","data-guide":"wallpaper","data-hint":c==="en"?"Next wallpaper":"切换壁纸","aria-label":c==="en"?"Next wallpaper":"切换壁纸",onClick:O.next,children:f.jsx("svg",{viewBox:"0 0 22 22",width:"22",height:"22","aria-hidden":"true",shapeRendering:"crispEdges",children:f.jsx("path",{d:"M2 8h9V3h2v2h2v2h2v2h2v4h-2v2h-2v2h-2v2h-2v-5H2z",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})})}),f.jsx(K0,{language:c,active:y,dispatch:x}),f.jsx("div",{className:"window-layer",children:B.windows.map((L,G)=>f.jsx(Z0,{window:L,index:G,active:y===L.id,language:c,dispatch:x},L.id))})]}),f.jsx("div",{className:"task-tray",children:B.windows.map(L=>f.jsxs("button",{"aria-label":`Restore ${_i(L.id,c)}`,"aria-pressed":y===L.id,onClick:()=>x({type:"open",id:L.id}),children:["▣ ",_i(L.id,c)]},L.id))}),f.jsx(Y0,{active:r&&u,language:c,now:_,trailing:f.jsx(P0,{language:c,state:B,dispatch:x})})]}),!r&&f.jsxs("div",{className:"boot-overlay",role:"dialog","aria-label":c==="en"?"Start Monty":"启动 Monty",children:[f.jsxs("div",{className:"boot-center",children:[f.jsx("div",{className:"startup-agent","aria-hidden":"true",children:f.jsx("span",{className:"monty-sprite"})}),f.jsx("button",{className:"boot-skip","aria-label":c==="en"?"Power on":"开机",title:c==="en"?"Power on":"开机",onClick:A,children:f.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22","aria-hidden":"true",children:[f.jsx("path",{d:"M12 3v8",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"}),f.jsx("path",{d:"M7.2 6.4a7.5 7.5 0 1 0 9.6 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"})]})})]}),f.jsxs("small",{className:"boot-copyright",children:["© 2026 ",c==="en"?"Xiaoheng Hu":"胡晓亨"]})]})]})}function W0(){const[c,d]=z.useState("en"),[r,u]=z.useState(!1),A=V0(),E=k0(),{stageRef:B,focused:y}=H0(r);z.useEffect(()=>{document.documentElement.lang=c==="en"?"en":"zh-CN"},[c]);const x=c==="en",N=x?A.on?"Turn the desk lamp off":"Turn the desk lamp on":A.on?"关台灯":"开台灯",_=x?E.on?"Turn the monitor off":"Turn the monitor on":E.on?"关闭显示器":"打开显示器";return f.jsx(Wp,{language:c,children:f.jsx(Av,{language:c,children:f.jsxs("main",{className:`portfolio-scene ${y?"screen-focused":""} ${A.on?"":"lamp-off"} ${E.on?"":"monitor-off"}`,onDragStart:w=>w.preventDefault(),children:[f.jsxs("div",{className:"stage",ref:B,children:[f.jsx("div",{className:"desk-surface"}),f.jsx("img",{className:"desk-object desk-prop desk-art",src:"/assets/desk/desk.png",alt:""}),f.jsx("img",{className:"desk-object desk-prop binders-prop",src:"/assets/desk/binders.png",alt:""}),f.jsx("img",{className:"desk-object desk-prop tray-prop",src:"/assets/desk/paper-tray.png",alt:""}),f.jsx("img",{className:"desk-object desk-prop sheet-prop",src:"/assets/desk/paper-sheet.png",alt:""}),f.jsx("img",{className:"desk-object desk-prop stack-prop",src:"/assets/desk/paper-stack.png",alt:""}),f.jsxs("button",{className:"desk-prop lamp-object","aria-pressed":A.on,"aria-label":N,title:N,onClick:A.toggle,children:[f.jsx("img",{className:"lamp-sprite",src:"/assets/desk/desk-lamp.png",alt:""}),f.jsx("img",{className:"lamp-bulb-glow",src:"/assets/desk/desk-lamp.png",alt:"","aria-hidden":"true"}),f.jsxs("span",{className:"lamp-light","aria-hidden":"true",children:[f.jsx("i",{}),f.jsx("i",{}),f.jsx("i",{}),f.jsx("i",{}),f.jsx("i",{}),f.jsx("i",{})]})]}),f.jsx("img",{className:"desk-object desk-prop folder-prop",src:"/assets/desk/file-folder.png",alt:""}),f.jsx("img",{className:"desk-object desk-prop envelope-prop",src:"/assets/desk/document-envelope.png",alt:""}),f.jsxs("div",{className:`monitor-object power-${E.power} ${r?"is-on":""}`,children:[f.jsx("img",{className:"monitor-art",src:"/assets/monitor-v2.png",alt:""}),f.jsx("button",{className:"monitor-power","aria-pressed":E.on,"aria-label":_,title:_,onClick:E.toggle,children:f.jsx("span",{className:"power-led"})}),f.jsx(F0,{language:c,setLanguage:d,active:r,powered:E.on,onEnter:()=>u(!0),onShutdown:()=>u(!1)})]}),f.jsx("div",{className:"screen-spill","aria-hidden":"true"}),f.jsx("img",{className:"desk-object keyboard-object",src:"/assets/keyboard.png",alt:""}),f.jsx("img",{className:"desk-object mouse-object",src:"/assets/mouse-v2.png",alt:""}),f.jsx("img",{className:"desk-object mug-object",src:"/assets/mug.png",alt:""})]}),r&&f.jsx(Tv,{language:c,launchFromCenter:!0})]})})})}Kp.createRoot(document.getElementById("root")).render(f.jsx(Hp.StrictMode,{children:f.jsx(W0,{})}));
