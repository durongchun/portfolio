(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var eh={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function bS(){if(Bg)return Uo;Bg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var Ig;function AS(){return Ig||(Ig=1,eh.exports=bS()),eh.exports}var L=AS(),th={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function RS(){if(Fg)return st;Fg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function v(D,X,le){this.props=D,this.context=X,this.refs=R,this.updater=le||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=v.prototype;function U(D,X,le){this.props=D,this.context=X,this.refs=R,this.updater=le||M}var A=U.prototype=new _;A.constructor=U,E(A,v.prototype),A.isPureReactComponent=!0;var N=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function I(D,X,le,me,j,fe){return le=fe.ref,{$$typeof:r,type:D,key:X,ref:le!==void 0?le:null,props:fe}}function ne(D,X){return I(D.type,X,void 0,void 0,void 0,D.props)}function xe(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function w(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(le){return X[le]})}var z=/\/+/g;function ye(D,X){return typeof D=="object"&&D!==null&&D.key!=null?w(""+D.key):X.toString(36)}function Me(){}function V(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(Me,Me):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ce(D,X,le,me,j){var fe=typeof D;(fe==="undefined"||fe==="boolean")&&(D=null);var ve=!1;if(D===null)ve=!0;else switch(fe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(D.$$typeof){case r:case e:ve=!0;break;case g:return ve=D._init,ce(ve(D._payload),X,le,me,j)}}if(ve)return j=j(D),ve=me===""?"."+ye(D,0):me,N(j)?(le="",ve!=null&&(le=ve.replace(z,"$&/")+"/"),ce(j,X,le,"",function(Ne){return Ne})):j!=null&&(xe(j)&&(j=ne(j,le+(j.key==null||D&&D.key===j.key?"":(""+j.key).replace(z,"$&/")+"/")+ve)),X.push(j)),1;ve=0;var Ie=me===""?".":me+":";if(N(D))for(var Ce=0;Ce<D.length;Ce++)me=D[Ce],fe=Ie+ye(me,Ce),ve+=ce(me,X,le,fe,j);else if(Ce=S(D),typeof Ce=="function")for(D=Ce.call(D),Ce=0;!(me=D.next()).done;)me=me.value,fe=Ie+ye(me,Ce++),ve+=ce(me,X,le,fe,j);else if(fe==="object"){if(typeof D.then=="function")return ce(V(D),X,le,me,j);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ve}function P(D,X,le){if(D==null)return D;var me=[],j=0;return ce(D,me,"","",function(fe){return X.call(le,fe,j++)}),me}function Y(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(le){(D._status===0||D._status===-1)&&(D._status=1,D._result=le)},function(le){(D._status===0||D._status===-1)&&(D._status=2,D._result=le)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var Z=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function oe(){}return st.Children={map:P,forEach:function(D,X,le){P(D,function(){X.apply(this,arguments)},le)},count:function(D){var X=0;return P(D,function(){X++}),X},toArray:function(D){return P(D,function(X){return X})||[]},only:function(D){if(!xe(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},st.Component=v,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=s,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(D){return F.H.useMemoCache(D)}},st.cache=function(D){return function(){return D.apply(null,arguments)}},st.cloneElement=function(D,X,le){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var me=E({},D.props),j=D.key,fe=void 0;if(X!=null)for(ve in X.ref!==void 0&&(fe=void 0),X.key!==void 0&&(j=""+X.key),X)!H.call(X,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&X.ref===void 0||(me[ve]=X[ve]);var ve=arguments.length-2;if(ve===1)me.children=le;else if(1<ve){for(var Ie=Array(ve),Ce=0;Ce<ve;Ce++)Ie[Ce]=arguments[Ce+2];me.children=Ie}return I(D.type,j,void 0,void 0,fe,me)},st.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},st.createElement=function(D,X,le){var me,j={},fe=null;if(X!=null)for(me in X.key!==void 0&&(fe=""+X.key),X)H.call(X,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(j[me]=X[me]);var ve=arguments.length-2;if(ve===1)j.children=le;else if(1<ve){for(var Ie=Array(ve),Ce=0;Ce<ve;Ce++)Ie[Ce]=arguments[Ce+2];j.children=Ie}if(D&&D.defaultProps)for(me in ve=D.defaultProps,ve)j[me]===void 0&&(j[me]=ve[me]);return I(D,fe,void 0,void 0,null,j)},st.createRef=function(){return{current:null}},st.forwardRef=function(D){return{$$typeof:f,render:D}},st.isValidElement=xe,st.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Y}},st.memo=function(D,X){return{$$typeof:m,type:D,compare:X===void 0?null:X}},st.startTransition=function(D){var X=F.T,le={};F.T=le;try{var me=D(),j=F.S;j!==null&&j(le,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(oe,Z)}catch(fe){Z(fe)}finally{F.T=X}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(D){return F.H.use(D)},st.useActionState=function(D,X,le){return F.H.useActionState(D,X,le)},st.useCallback=function(D,X){return F.H.useCallback(D,X)},st.useContext=function(D){return F.H.useContext(D)},st.useDebugValue=function(){},st.useDeferredValue=function(D,X){return F.H.useDeferredValue(D,X)},st.useEffect=function(D,X,le){var me=F.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return me.useEffect(D,X)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(D,X,le){return F.H.useImperativeHandle(D,X,le)},st.useInsertionEffect=function(D,X){return F.H.useInsertionEffect(D,X)},st.useLayoutEffect=function(D,X){return F.H.useLayoutEffect(D,X)},st.useMemo=function(D,X){return F.H.useMemo(D,X)},st.useOptimistic=function(D,X){return F.H.useOptimistic(D,X)},st.useReducer=function(D,X,le){return F.H.useReducer(D,X,le)},st.useRef=function(D){return F.H.useRef(D)},st.useState=function(D){return F.H.useState(D)},st.useSyncExternalStore=function(D,X,le){return F.H.useSyncExternalStore(D,X,le)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var Hg;function Jh(){return Hg||(Hg=1,th.exports=RS()),th.exports}var he=Jh(),nh={exports:{}},No={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function wS(){return Gg||(Gg=1,function(r){function e(P,Y){var Z=P.length;P.push(Y);e:for(;0<Z;){var oe=Z-1>>>1,D=P[oe];if(0<l(D,Y))P[oe]=Y,P[Z]=D,Z=oe;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Y=P[0],Z=P.pop();if(Z!==Y){P[0]=Z;e:for(var oe=0,D=P.length,X=D>>>1;oe<X;){var le=2*(oe+1)-1,me=P[le],j=le+1,fe=P[j];if(0>l(me,Z))j<D&&0>l(fe,me)?(P[oe]=fe,P[j]=Z,oe=j):(P[oe]=me,P[le]=Z,oe=le);else if(j<D&&0>l(fe,Z))P[oe]=fe,P[j]=Z,oe=j;else break e}}return Y}function l(P,Y){var Z=P.sortIndex-Y.sortIndex;return Z!==0?Z:P.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],m=[],g=1,x=null,S=3,M=!1,E=!1,R=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var Y=i(m);Y!==null;){if(Y.callback===null)s(m);else if(Y.startTime<=P)s(m),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=i(m)}}function F(P){if(R=!1,N(P),!E)if(i(p)!==null)E=!0,H||(H=!0,ye());else{var Y=i(m);Y!==null&&ce(F,Y.startTime-P)}}var H=!1,I=-1,ne=5,xe=-1;function w(){return v?!0:!(r.unstable_now()-xe<ne)}function z(){if(v=!1,H){var P=r.unstable_now();xe=P;var Y=!0;try{e:{E=!1,R&&(R=!1,U(I),I=-1),M=!0;var Z=S;try{t:{for(N(P),x=i(p);x!==null&&!(x.expirationTime>P&&w());){var oe=x.callback;if(typeof oe=="function"){x.callback=null,S=x.priorityLevel;var D=oe(x.expirationTime<=P);if(P=r.unstable_now(),typeof D=="function"){x.callback=D,N(P),Y=!0;break t}x===i(p)&&s(p),N(P)}else s(p);x=i(p)}if(x!==null)Y=!0;else{var X=i(m);X!==null&&ce(F,X.startTime-P),Y=!1}}break e}finally{x=null,S=Z,M=!1}Y=void 0}}finally{Y?ye():H=!1}}}var ye;if(typeof A=="function")ye=function(){A(z)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,V=Me.port2;Me.port1.onmessage=z,ye=function(){V.postMessage(null)}}else ye=function(){_(z,0)};function ce(P,Y){I=_(function(){P(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var Z=S;S=Y;try{return P()}finally{S=Z}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=S;S=P;try{return Y()}finally{S=Z}},r.unstable_scheduleCallback=function(P,Y,Z){var oe=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Z+D,P={id:g++,callback:Y,priorityLevel:P,startTime:Z,expirationTime:D,sortIndex:-1},Z>oe?(P.sortIndex=Z,e(m,P),i(p)===null&&P===i(m)&&(R?(U(I),I=-1):R=!0,ce(F,Z-oe))):(P.sortIndex=D,e(p,P),E||M||(E=!0,H||(H=!0,ye()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var Y=S;return function(){var Z=S;S=Y;try{return P.apply(this,arguments)}finally{S=Z}}}}(ah)),ah}var Vg;function CS(){return Vg||(Vg=1,ih.exports=wS()),ih.exports}var rh={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function DS(){if(kg)return yn;kg=1;var r=Jh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,yn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},yn.flushSync=function(p){var m=d.T,g=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=g,s.d.f()}},yn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},yn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},yn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=f(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},yn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},yn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=f(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},yn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},yn.requestFormReset=function(p){s.d.r(p)},yn.unstable_batchedUpdates=function(p,m){return p(m)},yn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.1.0",yn}var Wg;function LS(){if(Wg)return rh.exports;Wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rh.exports=DS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function US(){if(Xg)return No;Xg=1;var r=CS(),e=Jh(),i=LS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function f(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return f(c),t;if(h===o)return f(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=h;else{for(var y=!1,T=c.child;T;){if(T===a){y=!0,a=c,o=h;break}if(T===o){y=!0,o=c,a=h;break}T=T.sibling}if(!y){for(T=h.child;T;){if(T===a){y=!0,a=h,o=c;break}if(T===o){y=!0,o=h,a=c;break}T=T.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),A=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function ye(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Symbol.for("react.client.reference");function V(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case v:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case xe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case A:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:V(t.type)||"Memo";case ne:n=t._payload,t=t._init;try{return V(t(n))}catch{}}return null}var ce=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},oe=[],D=-1;function X(t){return{current:t}}function le(t){0>D||(t.current=oe[D],oe[D]=null,D--)}function me(t,n){D++,oe[D]=t.current,t.current=n}var j=X(null),fe=X(null),ve=X(null),Ie=X(null);function Ce(t,n){switch(me(ve,n),me(fe,t),me(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?fg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=fg(n),t=hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}le(j),me(j,t)}function Ne(){le(j),le(fe),le(ve)}function xt(t){t.memoizedState!==null&&me(Ie,t);var n=j.current,a=hg(n,t.type);n!==a&&(me(fe,t),me(j,a))}function Ye(t){fe.current===t&&(le(j),le(fe)),Ie.current===t&&(le(Ie),Ro._currentValue=Z)}var Q=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,Ve=r.unstable_cancelCallback,ot=r.unstable_shouldYield,qe=r.unstable_requestPaint,$e=r.unstable_now,at=r.unstable_getCurrentPriorityLevel,lt=r.unstable_ImmediatePriority,Vt=r.unstable_UserBlockingPriority,O=r.unstable_NormalPriority,b=r.unstable_LowPriority,ue=r.unstable_IdlePriority,_e=r.log,Te=r.unstable_setDisableYieldValue,Se=null,ke=null;function Ge(t){if(typeof _e=="function"&&Te(t),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Se,t)}catch{}}var Ee=Math.clz32?Math.clz32:be,De=Math.log,nt=Math.LN2;function be(t){return t>>>=0,t===0?32:31-(De(t)/nt|0)|0}var It=256,it=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Pe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?c=Be(o):(y&=T,y!==0?c=Be(y):a||(a=T&~t,a!==0&&(c=Be(a))))):(T=o&~h,T!==0?c=Be(T):y!==0?c=Be(y):a||(a=o&~t,a!==0&&(c=Be(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function gt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var t=It;return It<<=1,(It&4194048)===0&&(It=256),t}function Nt(){var t=it;return it<<=1,(it&62914560)===0&&(it=4194304),t}function k(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Re(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ie(t,n,a,o,c,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=y&~a;0<a;){var de=31-Ee(a),ge=1<<de;T[de]=0,B[de]=-1;var ee=J[de];if(ee!==null)for(J[de]=null,de=0;de<ee.length;de++){var te=ee[de];te!==null&&(te.lane&=-536870913)}a&=~ge}o!==0&&Ae(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function Ae(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ee(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Le(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ee(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jt(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Lg(t.type))}function Cn(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var _t=Math.random().toString(36).slice(2),St="__reactFiber$"+_t,Ft="__reactProps$"+_t,Mi="__reactContainer$"+_t,Ps="__reactEvents$"+_t,yr="__reactListeners$"+_t,el="__reactHandles$"+_t,Ha="__reactResources$"+_t,Ji="__reactMarker$"+_t;function Mr(t){delete t[St],delete t[Ft],delete t[Ps],delete t[yr],delete t[el]}function $i(t){var n=t[St];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mi]||a[St]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=gg(t);t!==null;){if(a=t[St])return a;t=gg(t)}return n}t=a,a=t.parentNode}return null}function ea(t){if(t=t[St]||t[Mi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ga(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function C(t){var n=t[Ha];return n||(n=t[Ha]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[Ji]=!0}var ae=new Set,se={};function $(t,n){Ue(t,n),Ue(t+"Capture",n)}function Ue(t,n){for(se[t]=n,t=0;t<n.length;t++)ae.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),We={},Ze={};function rt(t){return Q.call(Ze,t)?!0:Q.call(We,t)?!1:Fe.test(t)?Ze[t]=!0:(We[t]=!0,!1)}function Qe(t,n,a){if(rt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Mt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var pn,Zt;function xn(t){if(pn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);pn=n&&n[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pn+t+Zt}var Ot=!1;function tt(t,n){if(!t||Ot)return"";Ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(te){var ee=te}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(te){ee=te}t.call(ge.prototype)}}else{try{throw Error()}catch(te){ee=te}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(te){if(te&&ee&&typeof te.stack=="string")return[te.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],T=h[1];if(y&&T){var B=y.split(`
`),J=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===J.length)for(o=B.length-1,c=J.length-1;1<=o&&0<=c&&B[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==J[c]){var de=`
`+B[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=c);break}}}finally{Ot=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xn(a):""}function zs(t){switch(t.tag){case 26:case 27:case 5:return xn(t.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return xn("Activity");default:return""}}function Pt(t){try{var n="";do n+=zs(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bs(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Va(t){var n=Bs(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ta(t){t._valueTracker||(t._valueTracker=Va(t))}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Bs(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function qn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Is=/[\n"\\]/g;function Ht(t){return t.replace(Is,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ka(t,n,a,o,c,h,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Er(t,y,$t(n)):a!=null?Er(t,y,$t(a)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+$t(T):t.removeAttribute("name")}function tl(t,n,a,o,c,h,y,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Er(t,n,a){n==="number"&&qn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ud(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function cd(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ce(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var M0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||M0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&fd(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&fd(t,h,n[h])}function Ju(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return T0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $u=null;function ec(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,Rr=null;function dd(t){var n=ea(t);if(n&&(t=n.stateNode)){var a=t[Ft]||null;e:switch(t=n.stateNode,n.type){case"input":if(ka(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Ft]||null;if(!c)throw Error(s(90));ka(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&rn(o)}break e;case"textarea":ud(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var tc=!1;function pd(t,n,a){if(tc)return t(n,a);tc=!0;try{var o=t(n);return o}finally{if(tc=!1,(Ar!==null||Rr!==null)&&(Gl(),Ar&&(n=Ar,t=Rr,Rr=Ar=null,dd(n),t)))for(n=0;n<t.length;n++)dd(t[n])}}function Fs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Ft]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=!1;if(Ei)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{nc=!1}var na=null,ic=null,il=null;function md(){if(il)return il;var t,n=ic,a=n.length,o,c="value"in na?na.value:na.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===c[h-o];o++);return il=c.slice(t,1<o?1-o:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function gd(){return!1}function Dn(t){function n(a,o,c,h,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?rl:gd,this.isPropagationStopped=gd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Dn(Wa),Gs=g({},Wa,{view:0,detail:0}),b0=Dn(Gs),ac,rc,Vs,ol=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(ac=t.screenX-Vs.screenX,rc=t.screenY-Vs.screenY):rc=ac=0,Vs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),_d=Dn(ol),A0=g({},ol,{dataTransfer:0}),R0=Dn(A0),w0=g({},Gs,{relatedTarget:0}),sc=Dn(w0),C0=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=Dn(C0),L0=g({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=Dn(L0),N0=g({},Wa,{data:0}),vd=Dn(N0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=z0[t])?!!n[t]:!1}function oc(){return B0}var I0=g({},Gs,{key:function(t){if(t.key){var n=O0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F0=Dn(I0),H0=g({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Dn(H0),G0=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),V0=Dn(G0),k0=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=Dn(k0),X0=g({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Dn(X0),q0=g({},Wa,{newState:0,oldState:0}),Y0=Dn(q0),Z0=[9,13,27,32],lc=Ei&&"CompositionEvent"in window,ks=null;Ei&&"documentMode"in document&&(ks=document.documentMode);var K0=Ei&&"TextEvent"in window&&!ks,Sd=Ei&&(!lc||ks&&8<ks&&11>=ks),yd=" ",Md=!1;function Ed(t,n){switch(t){case"keyup":return Z0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function Q0(t,n){switch(t){case"compositionend":return Td(n);case"keypress":return n.which!==32?null:(Md=!0,yd);case"textInput":return t=n.data,t===yd&&Md?null:t;default:return null}}function J0(t,n){if(wr)return t==="compositionend"||!lc&&Ed(t,n)?(t=md(),il=ic=na=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sd&&n.locale!=="ko"?null:n.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$0[t.type]:n==="textarea"}function Ad(t,n,a,o){Ar?Rr?Rr.push(o):Rr=[o]:Ar=o,n=ql(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ws=null,Xs=null;function ex(t){sg(t,0)}function ll(t){var n=Ga(t);if(rn(n))return t}function Rd(t,n){if(t==="change")return n}var wd=!1;if(Ei){var uc;if(Ei){var cc="oninput"in document;if(!cc){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),cc=typeof Cd.oninput=="function"}uc=cc}else uc=!1;wd=uc&&(!document.documentMode||9<document.documentMode)}function Dd(){Ws&&(Ws.detachEvent("onpropertychange",Ld),Xs=Ws=null)}function Ld(t){if(t.propertyName==="value"&&ll(Xs)){var n=[];Ad(n,Xs,t,ec(t)),pd(ex,n)}}function tx(t,n,a){t==="focusin"?(Dd(),Ws=n,Xs=a,Ws.attachEvent("onpropertychange",Ld)):t==="focusout"&&Dd()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(Xs)}function ix(t,n){if(t==="click")return ll(n)}function ax(t,n){if(t==="input"||t==="change")return ll(n)}function rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:rx;function js(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Q.call(n,c)||!In(t[c],n[c]))return!1}return!0}function Ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,n){var a=Ud(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ud(a)}}function Od(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Od(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qn(t.document)}return n}function fc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var sx=Ei&&"documentMode"in document&&11>=document.documentMode,Cr=null,hc=null,qs=null,dc=!1;function zd(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||Cr==null||Cr!==qn(o)||(o=Cr,"selectionStart"in o&&fc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qs&&js(qs,o)||(qs=o,o=ql(hc,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},pc={},Bd={};Ei&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function ja(t){if(pc[t])return pc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bd)return pc[t]=n[a];return t}var Id=ja("animationend"),Fd=ja("animationiteration"),Hd=ja("animationstart"),ox=ja("transitionrun"),lx=ja("transitionstart"),ux=ja("transitioncancel"),Gd=ja("transitionend"),Vd=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function ii(t,n){Vd.set(t,n),$(n,[t])}var kd=new WeakMap;function Yn(t,n){if(typeof t=="object"&&t!==null){var a=kd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pt(n)},kd.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var Zn=[],Lr=0,gc=0;function ul(){for(var t=Lr,n=gc=Lr=0;n<t;){var a=Zn[n];Zn[n++]=null;var o=Zn[n];Zn[n++]=null;var c=Zn[n];Zn[n++]=null;var h=Zn[n];if(Zn[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}h!==0&&Wd(a,c,h)}}function cl(t,n,a,o){Zn[Lr++]=t,Zn[Lr++]=n,Zn[Lr++]=a,Zn[Lr++]=o,gc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _c(t,n,a,o){return cl(t,n,a,o),fl(t)}function Ur(t,n){return cl(t,null,null,n),fl(t)}function Wd(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Ee(a),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function fl(t){if(50<xo)throw xo=0,Tf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function cx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,n,a,o){return new cx(t,n,a,o)}function vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ti(t,n){var a=t.alternate;return a===null?(a=Fn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,o,c,h){var y=0;if(o=t,typeof t=="function")vc(t)&&(y=1);else if(typeof t=="string")y=hS(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case xe:return t=Fn(31,a,n,c),t.elementType=xe,t.lanes=h,t;case E:return qa(a.children,c,h,n);case R:y=8,c|=24;break;case v:return t=Fn(12,a,n,c|2),t.elementType=v,t.lanes=h,t;case F:return t=Fn(13,a,n,c),t.elementType=F,t.lanes=h,t;case H:return t=Fn(19,a,n,c),t.elementType=H,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case A:y=10;break e;case U:y=9;break e;case N:y=11;break e;case I:y=14;break e;case ne:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Fn(y,a,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function qa(t,n,a,o){return t=Fn(7,t,o,n),t.lanes=a,t}function xc(t,n,a){return t=Fn(6,t,null,n),t.lanes=a,t}function Sc(t,n,a){return n=Fn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Or=[],Pr=0,dl=null,pl=0,Kn=[],Qn=0,Ya=null,bi=1,Ai="";function Za(t,n){Or[Pr++]=pl,Or[Pr++]=dl,dl=t,pl=n}function jd(t,n,a){Kn[Qn++]=bi,Kn[Qn++]=Ai,Kn[Qn++]=Ya,Ya=t;var o=bi;t=Ai;var c=32-Ee(o)-1;o&=~(1<<c),a+=1;var h=32-Ee(n)+c;if(30<h){var y=c-c%5;h=(o&(1<<y)-1).toString(32),o>>=y,c-=y,bi=1<<32-Ee(n)+c|a<<c|o,Ai=h+t}else bi=1<<h|a<<c|o,Ai=t}function yc(t){t.return!==null&&(Za(t,1),jd(t,1,0))}function Mc(t){for(;t===dl;)dl=Or[--Pr],Or[Pr]=null,pl=Or[--Pr],Or[Pr]=null;for(;t===Ya;)Ya=Kn[--Qn],Kn[Qn]=null,Ai=Kn[--Qn],Kn[Qn]=null,bi=Kn[--Qn],Kn[Qn]=null}var Tn=null,jt=null,Et=!1,Ka=null,fi=!1,Ec=Error(s(519));function Qa(t){var n=Error(s(418,""));throw Ks(Yn(n,t)),Ec}function qd(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[St]=t,n[Ft]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)mt(yo[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),tl(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ta(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),cd(n,o.value,o.defaultValue,o.children),ta(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||cg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Yl),n=!0):n=!1,n||Qa(t)}function Yd(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Ys(t){if(t!==Tn)return!1;if(!Et)return Yd(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&jt&&Qa(t),Yd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){jt=ri(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}jt=null}}else n===27?(n=jt,va(t.type)?(t=Wf,Wf=null,jt=t):jt=n):jt=Tn?ri(t.stateNode.nextSibling):null;return!0}function Zs(){jt=Tn=null,Et=!1}function Zd(){var t=Ka;return t!==null&&(Nn===null?Nn=t:Nn.push.apply(Nn,t),Ka=null),t}function Ks(t){Ka===null?Ka=[t]:Ka.push(t)}var Tc=X(null),Ja=null,Ri=null;function ia(t,n,a){me(Tc,n._currentValue),n._currentValue=a}function wi(t){t._currentValue=Tc.current,le(Tc)}function bc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ac(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),bc(h.return,a,t),o||(y=null);break e}h=T.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),bc(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Qs(t,n,a,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=c.type;In(c.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(c===Ie.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}c=c.return}t!==null&&Ac(n,t,a,o),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Ri=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Kd(Ja,t)}function gl(t,n){return Ja===null&&$a(t),Kd(t,n)}function Kd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ri===null){if(t===null)throw Error(s(308));Ri=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ri=Ri.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hx=r.unstable_scheduleCallback,dx=r.unstable_NormalPriority,sn={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new fx,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&hx(dx,function(){t.controller.abort()})}var $s=null,wc=0,zr=0,Br=null;function px(t,n){if($s===null){var a=$s=[];wc=0,zr=Lf(),Br={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wc++,n.then(Qd,Qd),n}function Qd(){if(--wc===0&&$s!==null){Br!==null&&(Br.status="fulfilled");var t=$s;$s=null,zr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Jd=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(t,n),Jd!==null&&Jd(t,n)};var er=X(null);function Cc(){var t=er.current;return t!==null?t:Bt.pooledCache}function _l(t,n){n===null?me(er,er.current):me(er,n.pool)}function $d(){var t=Cc();return t===null?null:{parent:sn._currentValue,pool:t}}var eo=Error(s(460)),ep=Error(s(474)),vl=Error(s(542)),Dc={then:function(){}};function tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xl(){}function np(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(xl,xl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t;default:if(typeof n.status=="string")n.then(xl,xl);else{if(t=Bt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t}throw to=n,eo}}var to=null;function ip(){if(to===null)throw Error(s(459));var t=to;return to=null,t}function ap(t){if(t===eo||t===vl)throw Error(s(483))}var aa=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(At&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=fl(t),Wd(t,null,a),n}return cl(t,o,n,a),fl(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Le(t,a)}}function Nc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Oc=!1;function io(){if(Oc){var t=Br;if(t!==null)throw t}}function ao(t,n,a,o){Oc=!1;var c=t.updateQueue;aa=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,J=B.next;B.next=null,y===null?h=J:y.next=J,y=B;var de=t.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==y&&(T===null?de.firstBaseUpdate=J:T.next=J,de.lastBaseUpdate=B))}if(h!==null){var ge=c.baseState;y=0,de=J=B=null,T=h;do{var ee=T.lane&-536870913,te=ee!==T.lane;if(te?(vt&ee)===ee:(o&ee)===ee){ee!==0&&ee===zr&&(Oc=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ke=t,Xe=T;ee=n;var Lt=a;switch(Xe.tag){case 1:if(Ke=Xe.payload,typeof Ke=="function"){ge=Ke.call(Lt,ge,ee);break e}ge=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Xe.payload,ee=typeof Ke=="function"?Ke.call(Lt,ge,ee):Ke,ee==null)break e;ge=g({},ge,ee);break e;case 2:aa=!0}}ee=T.callback,ee!==null&&(t.flags|=64,te&&(t.flags|=8192),te=c.callbacks,te===null?c.callbacks=[ee]:te.push(ee))}else te={lane:ee,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(J=de=te,B=ge):de=de.next=te,y|=ee;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;te=T,T=te.next,te.next=null,c.lastBaseUpdate=te,c.shared.pending=null}}while(!0);de===null&&(B=ge),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=de,h===null&&(c.shared.lanes=0),pa|=y,t.lanes=y,t.memoizedState=ge}}function rp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rp(a[t],n)}var Ir=X(null),Sl=X(0);function op(t,n){t=Pi,me(Sl,t),me(Ir,n),Pi=t|n.baseLanes}function Pc(){me(Sl,Pi),me(Ir,Ir.current)}function zc(){Pi=Sl.current,le(Ir),le(Sl)}var oa=0,ht=null,Ct=null,en=null,yl=!1,Fr=!1,tr=!1,Ml=0,ro=0,Hr=null,gx=0;function Kt(){throw Error(s(321))}function Bc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function Ic(t,n,a,o,c,h){return oa=h,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Wp:Xp,tr=!1,h=a(o,c),tr=!1,Fr&&(h=up(n,a,o,c)),lp(t),h}function lp(t){P.H=wl;var n=Ct!==null&&Ct.next!==null;if(oa=0,en=Ct=ht=null,yl=!1,ro=0,Hr=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&ml(t)&&(cn=!0))}function up(t,n,a,o){ht=t;var c=0;do{if(Fr&&(Hr=null),ro=0,Fr=!1,25<=c)throw Error(s(301));if(c+=1,en=Ct=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Ex,h=n(a,o)}while(Fr);return h}function _x(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(ht.flags|=1024),n}function Fc(){var t=Ml!==0;return Ml=0,t}function Hc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gc(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}oa=0,en=Ct=ht=null,Fr=!1,ro=Ml=0,Hr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ht.memoizedState=en=t:en=en.next=t,en}function tn(){if(Ct===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var n=en===null?ht.memoizedState:en.next;if(n!==null)en=n,Ct=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},en===null?ht.memoizedState=en=t:en=en.next=t}return en}function Vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ro;return ro+=1,Hr===null&&(Hr=[]),t=np(Hr,t,n),n=ht,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Wp:Xp),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===A)return Sn(t)}throw Error(s(438,String(t)))}function kc(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vc(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Ci(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=tn();return Wc(n,Ct,t)}function Wc(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var T=y=null,B=null,J=n,de=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(vt&ge)===ge:(oa&ge)===ge){var ee=J.revertLane;if(ee===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===zr&&(de=!0);else if((oa&ee)===ee){J=J.next,ee===zr&&(de=!0);continue}else ge={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=ge,y=h):B=B.next=ge,ht.lanes|=ee,pa|=ee;ge=J.action,tr&&a(h,ge),h=J.hasEagerState?J.eagerState:a(h,ge)}else ee={lane:ge,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=ee,y=h):B=B.next=ee,ht.lanes|=ge,pa|=ge;J=J.next}while(J!==null&&J!==n);if(B===null?y=h:B.next=T,!In(h,t.memoizedState)&&(cn=!0,de&&(a=Br,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=B,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Xc(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do h=t(h,y.action),y=y.next;while(y!==c);In(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function cp(t,n,a){var o=ht,c=tn(),h=Et;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!In((Ct||c).memoizedState,a);y&&(c.memoizedState=a,cn=!0),c=c.queue;var T=dp.bind(null,o,c,t);if(oo(2048,8,T,[t]),c.getSnapshot!==n||y||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Gr(9,bl(),hp.bind(null,o,c,a,n),null),Bt===null)throw Error(s(349));h||(oa&124)!==0||fp(o,n,a)}return a}function fp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Vc(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hp(t,n,a,o){n.value=a,n.getSnapshot=o,pp(n)&&mp(t)}function dp(t,n,a){return a(function(){pp(n)&&mp(t)})}function pp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function mp(t){var n=Ur(t,2);n!==null&&Wn(n,t,2)}function jc(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),tr){Ge(!0);try{a()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:t},n}function gp(t,n,a,o){return t.baseState=a,Wc(t,Ct,typeof o=="function"?o:Ci)}function vx(t,n,a,o,c){if(Rl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,_p(n,h)):(h.next=a.next,n.pending=a.next=h)}}function _p(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var T=a(c,o),B=P.S;B!==null&&B(y,T),vp(t,n,T)}catch(J){qc(t,n,J)}finally{P.T=h}}else try{h=a(c,o),vp(t,n,h)}catch(J){qc(t,n,J)}}function vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){xp(t,n,o)},function(o){return qc(t,n,o)}):xp(t,n,a)}function xp(t,n,a){n.status="fulfilled",n.value=a,Sp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_p(t,a)))}function qc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Sp(n),n=n.next;while(n!==o)}t.action=null}function Sp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function yp(t,n){return n}function Mp(t,n){if(Et){var a=Bt.formState;if(a!==null){e:{var o=ht;if(Et){if(jt){t:{for(var c=jt,h=fi;c.nodeType!==8;){if(!h){c=null;break t}if(c=ri(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){jt=ri(c.nextSibling),o=c.data==="F!";break e}}Qa(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yp,lastRenderedState:n},a.queue=o,a=Gp.bind(null,ht,o),o.dispatch=a,o=jc(!1),h=Jc.bind(null,ht,!1,o.queue),o=Ln(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=vx.bind(null,ht,c,h,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Ep(t){var n=tn();return Tp(n,Ct,t)}function Tp(t,n,a){if(n=Wc(t,n,yp)[0],t=Tl(Ci)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(y){throw y===eo?vl:y}else o=n;n=tn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,Gr(9,bl(),xx.bind(null,c,a),null)),[o,h,t]}function xx(t,n){t.action=n}function bp(t){var n=tn(),a=Ct;if(a!==null)return Tp(n,a,t);tn(),n=n.memoizedState,a=tn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Gr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Vc(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function bl(){return{destroy:void 0,resource:void 0}}function Ap(){return tn().memoizedState}function Al(t,n,a,o){var c=Ln();o=o===void 0?null:o,ht.flags|=t,c.memoizedState=Gr(1|n,bl(),a,o)}function oo(t,n,a,o){var c=tn();o=o===void 0?null:o;var h=c.memoizedState.inst;Ct!==null&&o!==null&&Bc(o,Ct.memoizedState.deps)?c.memoizedState=Gr(n,h,a,o):(ht.flags|=t,c.memoizedState=Gr(1|n,h,a,o))}function Rp(t,n){Al(8390656,8,t,n)}function wp(t,n){oo(2048,8,t,n)}function Cp(t,n){return oo(4,2,t,n)}function Dp(t,n){return oo(4,4,t,n)}function Lp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Up(t,n,a){a=a!=null?a.concat([t]):null,oo(4,4,Lp.bind(null,n,t),a)}function Yc(){}function Np(t,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Op(t,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bc(n,o[1]))return o[0];if(o=t(),tr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o}function Zc(t,n,a){return a===void 0||(oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Bm(),ht.lanes|=t,pa|=t,a)}function Pp(t,n,a,o){return In(a,n)?a:Ir.current!==null?(t=Zc(t,a,o),In(t,n)||(cn=!0),t):(oa&42)===0?(cn=!0,t.memoizedState=a):(t=Bm(),ht.lanes|=t,pa|=t,n)}function zp(t,n,a,o,c){var h=Y.p;Y.p=h!==0&&8>h?h:8;var y=P.T,T={};P.T=T,Jc(t,!1,n,a);try{var B=c(),J=P.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=mx(B,o);lo(t,n,de,kn(t))}else lo(t,n,o,kn(t))}catch(ge){lo(t,n,{then:function(){},status:"rejected",reason:ge},kn())}finally{Y.p=h,P.T=y}}function Sx(){}function Kc(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=Bp(t).queue;zp(t,c,n,Z,a===null?Sx:function(){return Ip(t),a(o)})}function Bp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ip(t){var n=Bp(t).next.queue;lo(t,n,{},kn())}function Qc(){return Sn(Ro)}function Fp(){return tn().memoizedState}function Hp(){return tn().memoizedState}function yx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=ra(a);var o=sa(n,t,a);o!==null&&(Wn(o,n,a),no(o,n,a)),n={cache:Rc()},t.payload=n;return}n=n.return}}function Mx(t,n,a){var o=kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?Vp(n,a):(a=_c(t,n,a,o),a!==null&&(Wn(a,t,o),kp(a,n,o)))}function Gp(t,n,a){var o=kn();lo(t,n,a,o)}function lo(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))Vp(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,T=h(y,a);if(c.hasEagerState=!0,c.eagerState=T,In(T,y))return cl(t,n,c,0),Bt===null&&ul(),!1}catch{}finally{}if(a=_c(t,n,c,o),a!==null)return Wn(a,t,o),kp(a,n,o),!0}return!1}function Jc(t,n,a,o){if(o={lane:2,revertLane:Lf(),action:o,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(s(479))}else n=_c(t,a,o,2),n!==null&&Wn(n,t,2)}function Rl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function Vp(t,n){Fr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function kp(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Le(t,a)}}var wl={readContext:Sn,use:El,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt},Wp={readContext:Sn,use:El,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Rp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,Lp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(tr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var c=a(n);if(tr){Ge(!0);try{a(n)}finally{Ge(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Mx.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=jc(t);var n=t.queue,a=Gp.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Yc,useDeferredValue:function(t,n){var a=Ln();return Zc(a,t,n)},useTransition:function(){var t=jc(!1);return t=zp.bind(null,ht,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,c=Ln();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Bt===null)throw Error(s(349));(vt&124)!==0||fp(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,Rp(dp.bind(null,o,h,t),[t]),o.flags|=2048,Gr(9,bl(),hp.bind(null,o,h,a,n),null),a},useId:function(){var t=Ln(),n=Bt.identifierPrefix;if(Et){var a=Ai,o=bi;a=(o&~(1<<32-Ee(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=gx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Qc,useFormState:Mp,useActionState:Mp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Jc.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:kc,useCacheRefresh:function(){return Ln().memoizedState=yx.bind(null,ht)}},Xp={readContext:Sn,use:El,useCallback:Np,useContext:Sn,useEffect:wp,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:Dp,useMemo:Op,useReducer:Tl,useRef:Ap,useState:function(){return Tl(Ci)},useDebugValue:Yc,useDeferredValue:function(t,n){var a=tn();return Pp(a,Ct.memoizedState,t,n)},useTransition:function(){var t=Tl(Ci)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:cp,useId:Fp,useHostTransitionStatus:Qc,useFormState:Ep,useActionState:Ep,useOptimistic:function(t,n){var a=tn();return gp(a,Ct,t,n)},useMemoCache:kc,useCacheRefresh:Hp},Ex={readContext:Sn,use:El,useCallback:Np,useContext:Sn,useEffect:wp,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:Dp,useMemo:Op,useReducer:Xc,useRef:Ap,useState:function(){return Xc(Ci)},useDebugValue:Yc,useDeferredValue:function(t,n){var a=tn();return Ct===null?Zc(a,t,n):Pp(a,Ct.memoizedState,t,n)},useTransition:function(){var t=Xc(Ci)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:cp,useId:Fp,useHostTransitionStatus:Qc,useFormState:bp,useActionState:bp,useOptimistic:function(t,n){var a=tn();return Ct!==null?gp(a,Ct,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kc,useCacheRefresh:Hp},Vr=null,uo=0;function Cl(t){var n=uo;return uo+=1,Vr===null&&(Vr=[]),np(Vr,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){var n=t._init;return n(t._payload)}function qp(t){function n(q,G){if(t){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Ti(q,G),q.index=0,q.sibling=null,q}function h(q,G,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=67108866,G):K):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,G,K,pe){return G===null||G.tag!==6?(G=xc(K,q.mode,pe),G.return=q,G):(G=c(G,K),G.return=q,G)}function B(q,G,K,pe){var Oe=K.type;return Oe===E?de(q,G,K.props.children,pe,K.key):G!==null&&(G.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===ne&&jp(Oe)===G.type)?(G=c(G,K.props),co(G,K),G.return=q,G):(G=hl(K.type,K.key,K.props,null,q.mode,pe),co(G,K),G.return=q,G)}function J(q,G,K,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Sc(K,q.mode,pe),G.return=q,G):(G=c(G,K.children||[]),G.return=q,G)}function de(q,G,K,pe,Oe){return G===null||G.tag!==7?(G=qa(K,q.mode,pe,Oe),G.return=q,G):(G=c(G,K),G.return=q,G)}function ge(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=xc(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return K=hl(G.type,G.key,G.props,null,q.mode,K),co(K,G),K.return=q,K;case M:return G=Sc(G,q.mode,K),G.return=q,G;case ne:var pe=G._init;return G=pe(G._payload),ge(q,G,K)}if(ce(G)||ye(G))return G=qa(G,q.mode,K,null),G.return=q,G;if(typeof G.then=="function")return ge(q,Cl(G),K);if(G.$$typeof===A)return ge(q,gl(q,G),K);Dl(q,G)}return null}function ee(q,G,K,pe){var Oe=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Oe!==null?null:T(q,G,""+K,pe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===Oe?B(q,G,K,pe):null;case M:return K.key===Oe?J(q,G,K,pe):null;case ne:return Oe=K._init,K=Oe(K._payload),ee(q,G,K,pe)}if(ce(K)||ye(K))return Oe!==null?null:de(q,G,K,pe,null);if(typeof K.then=="function")return ee(q,G,Cl(K),pe);if(K.$$typeof===A)return ee(q,G,gl(q,K),pe);Dl(q,K)}return null}function te(q,G,K,pe,Oe){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return q=q.get(K)||null,T(G,q,""+pe,Oe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case S:return q=q.get(pe.key===null?K:pe.key)||null,B(G,q,pe,Oe);case M:return q=q.get(pe.key===null?K:pe.key)||null,J(G,q,pe,Oe);case ne:var dt=pe._init;return pe=dt(pe._payload),te(q,G,K,pe,Oe)}if(ce(pe)||ye(pe))return q=q.get(K)||null,de(G,q,pe,Oe,null);if(typeof pe.then=="function")return te(q,G,K,Cl(pe),Oe);if(pe.$$typeof===A)return te(q,G,K,gl(G,pe),Oe);Dl(G,pe)}return null}function Ke(q,G,K,pe){for(var Oe=null,dt=null,He=G,je=G=0,hn=null;He!==null&&je<K.length;je++){He.index>je?(hn=He,He=null):hn=He.sibling;var yt=ee(q,He,K[je],pe);if(yt===null){He===null&&(He=hn);break}t&&He&&yt.alternate===null&&n(q,He),G=h(yt,G,je),dt===null?Oe=yt:dt.sibling=yt,dt=yt,He=hn}if(je===K.length)return a(q,He),Et&&Za(q,je),Oe;if(He===null){for(;je<K.length;je++)He=ge(q,K[je],pe),He!==null&&(G=h(He,G,je),dt===null?Oe=He:dt.sibling=He,dt=He);return Et&&Za(q,je),Oe}for(He=o(He);je<K.length;je++)hn=te(He,q,je,K[je],pe),hn!==null&&(t&&hn.alternate!==null&&He.delete(hn.key===null?je:hn.key),G=h(hn,G,je),dt===null?Oe=hn:dt.sibling=hn,dt=hn);return t&&He.forEach(function(Ea){return n(q,Ea)}),Et&&Za(q,je),Oe}function Xe(q,G,K,pe){if(K==null)throw Error(s(151));for(var Oe=null,dt=null,He=G,je=G=0,hn=null,yt=K.next();He!==null&&!yt.done;je++,yt=K.next()){He.index>je?(hn=He,He=null):hn=He.sibling;var Ea=ee(q,He,yt.value,pe);if(Ea===null){He===null&&(He=hn);break}t&&He&&Ea.alternate===null&&n(q,He),G=h(Ea,G,je),dt===null?Oe=Ea:dt.sibling=Ea,dt=Ea,He=hn}if(yt.done)return a(q,He),Et&&Za(q,je),Oe;if(He===null){for(;!yt.done;je++,yt=K.next())yt=ge(q,yt.value,pe),yt!==null&&(G=h(yt,G,je),dt===null?Oe=yt:dt.sibling=yt,dt=yt);return Et&&Za(q,je),Oe}for(He=o(He);!yt.done;je++,yt=K.next())yt=te(He,q,je,yt.value,pe),yt!==null&&(t&&yt.alternate!==null&&He.delete(yt.key===null?je:yt.key),G=h(yt,G,je),dt===null?Oe=yt:dt.sibling=yt,dt=yt);return t&&He.forEach(function(TS){return n(q,TS)}),Et&&Za(q,je),Oe}function Lt(q,G,K,pe){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:e:{for(var Oe=K.key;G!==null;){if(G.key===Oe){if(Oe=K.type,Oe===E){if(G.tag===7){a(q,G.sibling),pe=c(G,K.props.children),pe.return=q,q=pe;break e}}else if(G.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===ne&&jp(Oe)===G.type){a(q,G.sibling),pe=c(G,K.props),co(pe,K),pe.return=q,q=pe;break e}a(q,G);break}else n(q,G);G=G.sibling}K.type===E?(pe=qa(K.props.children,q.mode,pe,K.key),pe.return=q,q=pe):(pe=hl(K.type,K.key,K.props,null,q.mode,pe),co(pe,K),pe.return=q,q=pe)}return y(q);case M:e:{for(Oe=K.key;G!==null;){if(G.key===Oe)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),pe=c(G,K.children||[]),pe.return=q,q=pe;break e}else{a(q,G);break}else n(q,G);G=G.sibling}pe=Sc(K,q.mode,pe),pe.return=q,q=pe}return y(q);case ne:return Oe=K._init,K=Oe(K._payload),Lt(q,G,K,pe)}if(ce(K))return Ke(q,G,K,pe);if(ye(K)){if(Oe=ye(K),typeof Oe!="function")throw Error(s(150));return K=Oe.call(K),Xe(q,G,K,pe)}if(typeof K.then=="function")return Lt(q,G,Cl(K),pe);if(K.$$typeof===A)return Lt(q,G,gl(q,K),pe);Dl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),pe=c(G,K),pe.return=q,q=pe):(a(q,G),pe=xc(K,q.mode,pe),pe.return=q,q=pe),y(q)):a(q,G)}return function(q,G,K,pe){try{uo=0;var Oe=Lt(q,G,K,pe);return Vr=null,Oe}catch(He){if(He===eo||He===vl)throw He;var dt=Fn(29,He,null,q.mode);return dt.lanes=pe,dt.return=q,dt}finally{}}}var kr=qp(!0),Yp=qp(!1),Jn=X(null),hi=null;function la(t){var n=t.alternate;me(on,on.current&1),me(Jn,t),hi===null&&(n===null||Ir.current!==null||n.memoizedState!==null)&&(hi=t)}function Zp(t){if(t.tag===22){if(me(on,on.current),me(Jn,t),hi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(hi=t)}}else ua()}function ua(){me(on,on.current),me(Jn,Jn.current)}function Di(t){le(Jn),hi===t&&(hi=null),le(on)}var on=X(0);function Ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||kf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function $c(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=kn(),c=ra(o);c.payload=n,a!=null&&(c.callback=a),n=sa(t,c,o),n!==null&&(Wn(n,t,o),no(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=kn(),c=ra(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=sa(t,c,o),n!==null&&(Wn(n,t,o),no(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),o=ra(a);o.tag=2,n!=null&&(o.callback=n),n=sa(t,o,a),n!==null&&(Wn(n,t,a),no(n,t,a))}};function Kp(t,n,a,o,c,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!js(a,o)||!js(c,h):!0}function Qp(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ef.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jp(t){Ul(t)}function $p(t){console.error(t)}function em(t){Ul(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tf(t,n,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function nm(t){return t=ra(t),t.tag=3,t}function im(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){tm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){tm(n,a,o),typeof c!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Tx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return hi===null?Af():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Dc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(t,o,c)),!1;case 22:return a.flags|=65536,o===Dc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(t,o,c)),!1}throw Error(s(435,a.tag))}return wf(t,o,c),Af(),!1}if(Et)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ec&&(t=Error(s(422),{cause:o}),Ks(Yn(t,a)))):(o!==Ec&&(n=Error(s(423),{cause:o}),Ks(Yn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Yn(o,a),c=tf(t.stateNode,o,c),Nc(t,c),qt!==4&&(qt=2)),!1;var h=Error(s(520),{cause:o});if(h=Yn(h,a),vo===null?vo=[h]:vo.push(h),qt!==4&&(qt=2),n===null)return!0;o=Yn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=tf(a.stateNode,o,t),Nc(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ma===null||!ma.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=nm(c),im(c,t,a,o),Nc(a,c),!1}a=a.return}while(a!==null);return!1}var am=Error(s(461)),cn=!1;function mn(t,n,a,o){n.child=t===null?Yp(n,null,a,o):kr(n,t.child,a,o)}function rm(t,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return $a(n),o=Ic(t,n,a,y,h,c),T=Fc(),t!==null&&!cn?(Hc(t,n,c),Li(t,n,c)):(Et&&T&&yc(n),n.flags|=1,mn(t,n,o,c),n.child)}function sm(t,n,a,o,c){if(t===null){var h=a.type;return typeof h=="function"&&!vc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,om(t,n,h,o,c)):(t=hl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!cf(t,c)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:js,a(y,o)&&t.ref===n.ref)return Li(t,n,c)}return n.flags|=1,t=Ti(h,o),t.ref=n.ref,t.return=n,n.child=t}function om(t,n,a,o,c){if(t!==null){var h=t.memoizedProps;if(js(h,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=h,cf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Li(t,n,c)}return nf(t,n,a,o,c)}function lm(t,n,a){var o=n.pendingProps,c=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(c=n.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return um(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(n,h!==null?h.cachePool:null),h!==null?op(n,h):Pc(),Zp(n);else return n.lanes=n.childLanes=536870912,um(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(_l(n,h.cachePool),op(n,h),ua(),n.memoizedState=null):(t!==null&&_l(n,null),Pc(),ua());return mn(t,n,c,a),n.child}function um(t,n,a,o){var c=Cc();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&_l(n,null),Pc(),Zp(n),t!==null&&Qs(t,n,o,!0),null}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nf(t,n,a,o,c){return $a(n),a=Ic(t,n,a,o,void 0,c),o=Fc(),t!==null&&!cn?(Hc(t,n,c),Li(t,n,c)):(Et&&o&&yc(n),n.flags|=1,mn(t,n,a,c),n.child)}function cm(t,n,a,o,c,h){return $a(n),n.updateQueue=null,a=up(n,o,a,c),lp(t),o=Fc(),t!==null&&!cn?(Hc(t,n,h),Li(t,n,h)):(Et&&o&&yc(n),n.flags|=1,mn(t,n,a,h),n.child)}function fm(t,n,a,o,c){if($a(n),n.stateNode===null){var h=Nr,y=a.contextType;typeof y=="object"&&y!==null&&(h=Sn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ef,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Lc(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Sn(y):Nr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&($c(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&ef.enqueueReplaceState(h,h.state,null),ao(n,o,h,c),io(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var T=n.memoizedProps,B=nr(a,T);h.props=B;var J=h.context,de=a.contextType;y=Nr,typeof de=="object"&&de!==null&&(y=Sn(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||J!==y)&&Qp(n,h,o,y),aa=!1;var ee=n.memoizedState;h.state=ee,ao(n,o,h,c),io(),J=n.memoizedState,T||ee!==J||aa?(typeof ge=="function"&&($c(n,a,ge,o),J=n.memoizedState),(B=aa||Kp(n,a,B,o,ee,J,y))?(de||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),h.props=o,h.state=J,h.context=y,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Uc(t,n),y=n.memoizedProps,de=nr(a,y),h.props=de,ge=n.pendingProps,ee=h.context,J=a.contextType,B=Nr,typeof J=="object"&&J!==null&&(B=Sn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==ge||ee!==B)&&Qp(n,h,o,B),aa=!1,ee=n.memoizedState,h.state=ee,ao(n,o,h,c),io();var te=n.memoizedState;y!==ge||ee!==te||aa||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof T=="function"&&($c(n,a,T,o),te=n.memoizedState),(de=aa||Kp(n,a,de,o,ee,te,B)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,te,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,te,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=te),h.props=o,h.state=te,h.context=B,o=de):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ol(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=kr(n,t.child,null,c),n.child=kr(n,null,a,c)):mn(t,n,a,c),n.memoizedState=h.state,t=n.child):t=Li(t,n,c),t}function hm(t,n,a,o){return Zs(),n.flags|=256,mn(t,n,a,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(t){return{baseLanes:t,cachePool:$d()}}function sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function dm(t,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(c?la(n):ua(),Et){var T=jt,B;if(B=T){e:{for(B=T,T=fi;B.nodeType!==8;){if(!T){T=null;break e}if(B=ri(B.nextSibling),B===null){T=null;break e}}T=B}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ya!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},B=Fn(18,null,null,0),B.stateNode=T,B.return=n,n.child=B,Tn=n,jt=null,B=!0):B=!1}B||Qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return kf(T)?n.lanes=32:n.lanes=536870912,null;Di(n)}return T=o.children,o=o.fallback,c?(ua(),c=n.mode,T=Pl({mode:"hidden",children:T},c),o=qa(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=rf(a),c.childLanes=sf(t,y,a),n.memoizedState=af,o):(la(n),of(n,T))}if(B=t.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(h)n.flags&256?(la(n),n.flags&=-257,n=lf(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),c=o.fallback,T=n.mode,o=Pl({mode:"visible",children:o.children},T),c=qa(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,kr(n,t.child,null,a),o=n.child,o.memoizedState=rf(a),o.childLanes=sf(t,y,a),n.memoizedState=af,n=c);else if(la(n),kf(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(s(419)),o.stack="",o.digest=y,Ks({value:o,source:null,stack:null}),n=lf(t,n,a)}else if(cn||Qs(t,n,a,!1),y=(a&t.childLanes)!==0,cn||y){if(y=Bt,y!==null&&(o=a&-a,o=(o&42)!==0?1:ut(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Ur(t,o),Wn(y,t,o),am;T.data==="$?"||Af(),n=lf(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,jt=ri(T.nextSibling),Tn=n,Et=!0,Ka=null,fi=!1,t!==null&&(Kn[Qn++]=bi,Kn[Qn++]=Ai,Kn[Qn++]=Ya,bi=t.id,Ai=t.overflow,Ya=n),n=of(n,o.children),n.flags|=4096);return n}return c?(ua(),c=o.fallback,T=n.mode,B=t.child,J=B.sibling,o=Ti(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?c=Ti(J,c):(c=qa(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=rf(a):(B=T.cachePool,B!==null?(J=sn._currentValue,B=B.parent!==J?{parent:J,pool:J}:B):B=$d(),T={baseLanes:T.baseLanes|a,cachePool:B}),c.memoizedState=T,c.childLanes=sf(t,y,a),n.memoizedState=af,o):(la(n),a=t.child,t=a.sibling,a=Ti(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function of(t,n){return n=Pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pl(t,n){return t=Fn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function lf(t,n,a){return kr(n,t.child,null,a),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function pm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),bc(t.return,n,a)}function uf(t,n,a,o,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c)}function mm(t,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(mn(t,n,o.children,a),o=on.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,a,n);else if(t.tag===19)pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(me(on,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ll(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),uf(n,!1,c,a,h);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ll(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}uf(n,!0,a,null,h);break;case"together":uf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Li(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ti(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ti(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function bx(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),ia(n,sn,t.memoizedState.cache),Zs();break;case 27:case 5:xt(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(la(n),n.flags|=128,null):(a&n.child.childLanes)!==0?dm(t,n,a):(la(n),t=Li(t,n,a),t!==null?t.sibling:null);la(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return mm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),me(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,lm(t,n,a);case 24:ia(n,sn,t.memoizedState.cache)}return Li(t,n,a)}function gm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!cf(t,a)&&(n.flags&128)===0)return cn=!1,bx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Et&&(n.flags&1048576)!==0&&jd(n,pl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")vc(o)?(t=nr(o,t),n.tag=1,n=fm(null,n,o,t,a)):(n.tag=0,n=nf(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===N){n.tag=11,n=rm(null,n,o,t,a);break e}else if(c===I){n.tag=14,n=sm(null,n,o,t,a);break e}}throw n=V(o)||o,Error(s(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=nr(o,n.pendingProps),fm(t,n,o,c,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Uc(t,n),ao(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ia(n,sn,o),o!==h.cache&&Ac(n,[sn],a,!0),io(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=hm(t,n,o,a);break e}else if(o!==c){c=Yn(Error(s(424)),n),Ks(c),n=hm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=ri(t.firstChild),Tn=n,Et=!0,Ka=null,fi=!0,a=Yp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zs(),o===c){n=Li(t,n,a);break e}mn(t,n,o,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=Zl(ve.current).createElement(a),o[St]=n,o[Ft]=t,_n(o,a,t),W(o),n.stateNode=o):n.memoizedState=Sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return xt(n),t===null&&Et&&(o=n.stateNode=_g(n.type,n.pendingProps,ve.current),Tn=n,fi=!0,c=jt,va(n.type)?(Wf=c,jt=ri(o.firstChild)):jt=c),mn(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((c=o=jt)&&(o=$x(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Tn=n,jt=ri(o.firstChild),fi=!1,c=!0):c=!1),c||Qa(n)),xt(n),c=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,Hf(c,h)?o=null:y!==null&&Hf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Ic(t,n,_x,null,null,a),Ro._currentValue=c),Ol(t,n),mn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=jt)&&(a=eS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,jt=null,t=!0):t=!1),t||Qa(n)),null;case 13:return dm(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=kr(n,null,o,a):mn(t,n,o,a),n.child;case 11:return rm(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ia(n,n.type,o.value),mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,$a(n),c=Sn(c),o=o(c),n.flags|=1,mn(t,n,o,a),n.child;case 14:return sm(t,n,n.type,n.pendingProps,a);case 15:return om(t,n,n.type,n.pendingProps,a);case 19:return mm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Pl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ti(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return lm(t,n,a);case 24:return $a(n),o=Sn(sn),t===null?(c=Cc(),c===null&&(c=Bt,h=Rc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Lc(n),ia(n,sn,c)):((t.lanes&a)!==0&&(Uc(t,n),ao(n,null,null,a),io()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ia(n,sn,o)):(o=h.cache,ia(n,sn,o),o!==c.cache&&Ac(n,[sn],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ui(t){t.flags|=4}function _m(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bg(n)){if(n=Jn.current,n!==null&&((vt&4194048)===vt?hi!==null:(vt&62914560)!==vt&&(vt&536870912)===0||n!==hi))throw to=Dc,ep;t.flags|=8192}}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nt():536870912,t.lanes|=n,qr|=n)}function fo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ax(t,n,a){var o=n.pendingProps;switch(Mc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),wi(sn),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?Ui(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zd())),Wt(n),null;case 26:return a=n.memoizedState,t===null?(Ui(n),a!==null?(Wt(n),_m(n,a)):(Wt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ui(n),Wt(n),_m(n,a)):(Wt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Ui(n),Wt(n),n.flags&=-16777217),null;case 27:Ye(n),a=ve.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ui(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}t=j.current,Ys(n)?qd(n):(t=_g(c,o,a),n.stateNode=t,Ui(n))}return Wt(n),null;case 5:if(Ye(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ui(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}if(t=j.current,Ys(n))qd(n);else{switch(c=Zl(ve.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[St]=n,t[Ft]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(_n(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ui(n)}}return Wt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ui(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ve.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[St]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||cg(t.nodeValue,a)),t||Qa(n)}else t=Zl(t).createTextNode(o),t[St]=n,n.stateNode=t}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ys(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[St]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=Zd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Di(n),n):(Di(n),null)}if(Di(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Wt(n),null;case 4:return Ne(),t===null&&Pf(n.stateNode.containerInfo),Wt(n),null;case 10:return wi(n.type),Wt(n),null;case 19:if(le(on),c=n.memoizedState,c===null)return Wt(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)fo(c,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ll(t),h!==null){for(n.flags|=128,fo(c,!1),t=h.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xd(a,t),a=a.sibling;return me(on,on.current&1|2),n.child}t=t.sibling}c.tail!==null&&$e()>Fl&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Ll(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Et)return Wt(n),null}else 2*$e()-c.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(t=c.last,t!==null?t.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=$e(),n.sibling=null,t=on.current,me(on,o?t&1|2:t&1),n):(Wt(n),null);case 22:case 23:return Di(n),zc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&le(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wi(sn),Wt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Rx(t,n){switch(Mc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return wi(sn),Ne(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 13:if(Di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return le(on),null;case 4:return Ne(),null;case 10:return wi(n.type),null;case 22:case 23:return Di(n),zc(),t!==null&&le(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return wi(sn),null;case 25:return null;default:return null}}function vm(t,n){switch(Mc(n),n.tag){case 3:wi(sn),Ne();break;case 26:case 27:case 5:Ye(n);break;case 4:Ne();break;case 13:Di(n);break;case 19:le(on);break;case 10:wi(n.type);break;case 22:case 23:Di(n),zc(),t!==null&&le(er);break;case 24:wi(sn)}}function ho(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function ca(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,c=n;var B=a,J=T;try{J()}catch(de){zt(c,B,de)}}}o=o.next}while(o!==h)}}catch(de){zt(n,n.return,de)}}function xm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sp(n,a)}catch(o){zt(t,t.return,o)}}}function Sm(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){zt(t,n,c)}}function di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){zt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(t,n,c)}else a.current=null}function ym(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){zt(t,t.return,c)}}function ff(t,n,a){try{var o=t.stateNode;Yx(o,t.type,a,n),o[Ft]=n}catch(c){zt(t,t.return,c)}}function Mm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yl));else if(o!==4&&(o===27&&va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(df(t,n,a),t=t.sibling;t!==null;)df(t,n,a),t=t.sibling}function Bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function Em(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);_n(n,o,a),n[St]=t,n[Ft]=a}catch(h){zt(t,t.return,h)}}var Ni=!1,Qt=!1,pf=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function wx(t,n){if(t=t.containerInfo,If=tu,t=Pd(t),fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var y=0,T=-1,B=-1,J=0,de=0,ge=t,ee=null;t:for(;;){for(var te;ge!==a||c!==0&&ge.nodeType!==3||(T=y+c),ge!==h||o!==0&&ge.nodeType!==3||(B=y+o),ge.nodeType===3&&(y+=ge.nodeValue.length),(te=ge.firstChild)!==null;)ee=ge,ge=te;for(;;){if(ge===t)break t;if(ee===a&&++J===c&&(T=y),ee===h&&++de===o&&(B=y),(te=ge.nextSibling)!==null)break;ge=ee,ee=ge.parentNode}ge=te}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:t,selectionRange:a},tu=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ke=nr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(Ke,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(Xe){zt(a,a.return,Xe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function bm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&ho(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){zt(a,a.return,y)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(a,a.return,y)}}o&64&&xm(a),o&512&&po(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sp(t,n)}catch(y){zt(a,a.return,y)}}break;case 27:n===null&&o&4&&Em(a);case 26:case 5:fa(t,a),n===null&&o&4&&ym(a),o&512&&po(a,a.return);break;case 12:fa(t,a);break;case 13:fa(t,a),o&4&&wm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Bx.bind(null,a),tS(t,a))));break;case 22:if(o=a.memoizedState!==null||Ni,!o){n=n!==null&&n.memoizedState!==null||Qt,c=Ni;var h=Qt;Ni=o,(Qt=n)&&!h?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),Ni=c,Qt=h}break;case 30:break;default:fa(t,a)}}function Am(t){var n=t.alternate;n!==null&&(t.alternate=null,Am(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Mr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,Un=!1;function Oi(t,n,a){for(a=a.child;a!==null;)Rm(t,n,a),a=a.sibling}function Rm(t,n,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:Qt||di(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qt||di(a,n);var o=kt,c=Un;va(a.type)&&(kt=a.stateNode,Un=!1),Oi(t,n,a),Eo(a.stateNode),kt=o,Un=c;break;case 5:Qt||di(a,n);case 6:if(o=kt,c=Un,kt=null,Oi(t,n,a),kt=o,Un=c,kt!==null)if(Un)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(a.stateNode)}catch(h){zt(a,n,h)}else try{kt.removeChild(a.stateNode)}catch(h){zt(a,n,h)}break;case 18:kt!==null&&(Un?(t=kt,mg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Lo(t)):mg(kt,a.stateNode));break;case 4:o=kt,c=Un,kt=a.stateNode.containerInfo,Un=!0,Oi(t,n,a),kt=o,Un=c;break;case 0:case 11:case 14:case 15:Qt||ca(2,a,n),Qt||ca(4,a,n),Oi(t,n,a);break;case 1:Qt||(di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Sm(a,n,o)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Qt=(o=Qt)||a.memoizedState!==null,Oi(t,n,a),Qt=o;break;default:Oi(t,n,a)}}function wm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lo(t)}catch(a){zt(n,n.return,a)}}function Cx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tm),n;default:throw Error(s(435,t.tag))}}function mf(t,n){var a=Cx(t);n.forEach(function(o){var c=Ix.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=t,y=n,T=y;e:for(;T!==null;){switch(T.tag){case 27:if(va(T.type)){kt=T.stateNode,Un=!1;break e}break;case 5:kt=T.stateNode,Un=!1;break e;case 3:case 4:kt=T.stateNode.containerInfo,Un=!0;break e}T=T.return}if(kt===null)throw Error(s(160));Rm(h,y,c),kt=null,Un=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cm(n,t),n=n.sibling}var ai=null;function Cm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(ca(3,t,t.return),ho(3,t),ca(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(Qt||a===null||di(a,a.return)),o&64&&Ni&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ai;if(Hn(n,t),Gn(t),o&512&&(Qt||a===null||di(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Ji]||h[St]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),_n(h,o,a),h[St]=t,W(h),o=h;break e;case"link":var y=Eg("link","href",c).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(h=y[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break t}}h=c.createElement(o),_n(h,o,a),c.head.appendChild(h);break;case"meta":if(y=Eg("meta","content",c).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(h=y[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break t}}h=c.createElement(o),_n(h,o,a),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[St]=t,W(h),o=h}t.stateNode=o}else Tg(c,t.type,t.stateNode);else t.stateNode=Mg(c,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Tg(c,t.type,t.stateNode):Mg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(Qt||a===null||di(a,a.return)),a!==null&&o&4&&ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(Qt||a===null||di(a,a.return)),t.flags&32){c=t.stateNode;try{br(c,"")}catch(te){zt(t,t.return,te)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,ff(t,c,a!==null?a.memoizedProps:c)),o&1024&&(pf=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(te){zt(t,t.return,te)}}break;case 3:if(Jl=null,c=ai,ai=Kl(n.containerInfo),Hn(n,t),ai=c,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(te){zt(t,t.return,te)}pf&&(pf=!1,Dm(t));break;case 4:o=ai,ai=Kl(t.stateNode.containerInfo),Hn(n,t),Gn(t),ai=o;break;case 12:Hn(n,t),Gn(t);break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yf=$e()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mf(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Ni,de=Qt;if(Ni=J||c,Qt=de||B,Hn(n,t),Qt=de,Ni=J,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Ni||Qt||ir(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=B.stateNode;var ge=B.memoizedProps.style,ee=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(te){zt(B,B.return,te)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(te){zt(B,B.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,mf(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mf(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Mm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,h=hf(t);Bl(t,h,c);break;case 5:var y=a.stateNode;a.flags&32&&(br(y,""),a.flags&=-33);var T=hf(t);Bl(t,T,y);break;case 3:case 4:var B=a.stateNode.containerInfo,J=hf(t);df(t,J,B);break;default:throw Error(s(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(t,n.alternate,n),n=n.sibling}function ir(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ca(4,n,n.return),ir(n);break;case 1:di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Sm(n,n.return,a),ir(n);break;case 27:Eo(n.stateNode);case 26:case 5:di(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ha(c,h,a),ho(4,h);break;case 1:if(ha(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){zt(o,o.return,J)}if(o=h,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)rp(B[c],T)}catch(J){zt(o,o.return,J)}}a&&y&64&&xm(h),po(h,h.return);break;case 27:Em(h);case 26:case 5:ha(c,h,a),a&&o===null&&y&4&&ym(h),po(h,h.return);break;case 12:ha(c,h,a);break;case 13:ha(c,h,a),a&&y&4&&wm(c,h);break;case 22:h.memoizedState===null&&ha(c,h,a),po(h,h.return);break;case 30:break;default:ha(c,h,a)}n=n.sibling}}function gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function _f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function pi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lm(t,n,a,o),n=n.sibling}function Lm(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:pi(t,n,a,o),c&2048&&ho(9,n);break;case 1:pi(t,n,a,o);break;case 3:pi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){pi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,T=h.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else pi(t,n,a,o);break;case 13:pi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?pi(t,n,a,o):mo(t,n):h._visibility&2?pi(t,n,a,o):(h._visibility|=2,Wr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&gf(y,n);break;case 24:pi(t,n,a,o),c&2048&&_f(n.alternate,n);break;default:pi(t,n,a,o)}}function Wr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,y=n,T=a,B=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:Wr(h,y,T,B,c),ho(8,y);break;case 23:break;case 22:var de=y.stateNode;y.memoizedState!==null?de._visibility&2?Wr(h,y,T,B,c):mo(h,y):(de._visibility|=2,Wr(h,y,T,B,c)),c&&J&2048&&gf(y.alternate,y);break;case 24:Wr(h,y,T,B,c),c&&J&2048&&_f(y.alternate,y);break;default:Wr(h,y,T,B,c)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:mo(a,o),c&2048&&gf(o.alternate,o);break;case 24:mo(a,o),c&2048&&_f(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function Xr(t){if(t.subtreeFlags&go)for(t=t.child;t!==null;)Um(t),t=t.sibling}function Um(t){switch(t.tag){case 26:Xr(t),t.flags&go&&t.memoizedState!==null&&pS(ai,t.memoizedState,t.memoizedProps);break;case 5:Xr(t);break;case 3:case 4:var n=ai;ai=Kl(t.stateNode.containerInfo),Xr(t),ai=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Xr(t),go=n):Xr(t));break;default:Xr(t)}}function Nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];fn=o,Pm(o,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(t),t=t.sibling}function Om(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&ca(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Il(t)):_o(t);break;default:_o(t)}}function Il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];fn=o,Pm(o,t)}Nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ca(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}t=t.sibling}}function Pm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,fn=o;else e:for(a=t;fn!==null;){o=fn;var c=o.sibling,h=o.return;if(Am(o),o===a){fn=null;break e}if(c!==null){c.return=h,fn=c;break e}fn=h}}}var Dx={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Lx=typeof WeakMap=="function"?WeakMap:Map,At=0,Bt=null,pt=null,vt=0,Rt=0,Vn=null,da=!1,jr=!1,vf=!1,Pi=0,qt=0,pa=0,ar=0,xf=0,$n=0,qr=0,vo=null,Nn=null,Sf=!1,yf=0,Fl=1/0,Hl=null,ma=null,gn=0,ga=null,Yr=null,Zr=0,Mf=0,Ef=null,zm=null,xo=0,Tf=null;function kn(){if((At&2)!==0&&vt!==0)return vt&-vt;if(P.T!==null){var t=zr;return t!==0?t:Lf()}return Jt()}function Bm(){$n===0&&($n=(vt&536870912)===0||Et?et():536870912);var t=Jn.current;return t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===Bt&&(Rt===2||Rt===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),_a(t,vt,$n,!1)),Re(t,a),((At&2)===0||t!==Bt)&&(t===Bt&&((At&2)===0&&(ar|=a),qt===4&&_a(t,vt,$n,!1)),mi(t))}function Im(t,n,a){if((At&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||ze(t,n),c=o?Ox(t,n):Rf(t,n,!0),h=o;do{if(c===0){jr&&!o&&_a(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Ux(a)){c=Rf(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var T=t;c=vo;var B=T.current.memoizedState.isDehydrated;if(B&&(Kr(T,y).flags|=256),y=Rf(T,y,!1),y!==2){if(vf&&!B){T.errorRecoveryDisabledLanes|=h,ar|=h,c=4;break e}h=Nn,Nn=c,h!==null&&(Nn===null?Nn=h:Nn.push.apply(Nn,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){Kr(t,0),_a(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:_a(o,n,$n,!da);break e;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=yf+300-$e(),10<c)){if(_a(o,n,$n,!da),Pe(o,0,!0)!==0)break e;o.timeoutHandle=dg(Fm.bind(null,o,a,Nn,Hl,Sf,n,$n,ar,qr,da,h,2,-0,0),c);break e}Fm(o,a,Nn,Hl,Sf,n,$n,ar,qr,da,h,0,-0,0)}}break}while(!0);mi(t)}function Fm(t,n,a,o,c,h,y,T,B,J,de,ge,ee,te){if(t.timeoutHandle=-1,ge=n.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:dS},Um(n),ge=mS(),ge!==null)){t.cancelPendingCommit=ge(jm.bind(null,t,n,h,a,o,c,y,T,B,de,1,ee,te)),_a(t,h,y,!J);return}jm(t,n,h,a,o,c,y,T,B)}function Ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!In(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _a(t,n,a,o){n&=~xf,n&=~ar,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Ee(c),y=1<<h;o[h]=-1,c&=~y}a!==0&&Ae(t,a,n)}function Gl(){return(At&6)===0?(So(0),!1):!0}function bf(){if(pt!==null){if(Rt===0)var t=pt.return;else t=pt,Ri=Ja=null,Gc(t),Vr=null,uo=0,t=pt;for(;t!==null;)vm(t.alternate,t),t=t.return;pt=null}}function Kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),bf(),Bt=t,pt=a=Ti(t.current,null),vt=n,Rt=0,Vn=null,da=!1,jr=ze(t,n),vf=!1,qr=$n=xf=ar=pa=qt=0,Nn=vo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ee(o),h=1<<c;n|=t[c],o&=~h}return Pi=n,ul(),a}function Hm(t,n){ht=null,P.H=wl,n===eo||n===vl?(n=ip(),Rt=3):n===ep?(n=ip(),Rt=4):Rt=n===am?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,pt===null&&(qt=1,Nl(t,Yn(n,t.current)))}function Gm(){var t=P.H;return P.H=wl,t===null?wl:t}function Vm(){var t=P.A;return P.A=Dx,t}function Af(){qt=4,da||(vt&4194048)!==vt&&Jn.current!==null||(jr=!0),(pa&134217727)===0&&(ar&134217727)===0||Bt===null||_a(Bt,vt,$n,!1)}function Rf(t,n,a){var o=At;At|=2;var c=Gm(),h=Vm();(Bt!==t||vt!==n)&&(Hl=null,Kr(t,n)),n=!1;var y=qt;e:do try{if(Rt!==0&&pt!==null){var T=pt,B=Vn;switch(Rt){case 8:bf(),y=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var J=Rt;if(Rt=0,Vn=null,Qr(t,T,B,J),a&&jr){y=0;break e}break;default:J=Rt,Rt=0,Vn=null,Qr(t,T,B,J)}}Nx(),y=qt;break}catch(de){Hm(t,de)}while(!0);return n&&t.shellSuspendCounter++,Ri=Ja=null,At=o,P.H=c,P.A=h,pt===null&&(Bt=null,vt=0,ul()),y}function Nx(){for(;pt!==null;)km(pt)}function Ox(t,n){var a=At;At|=2;var o=Gm(),c=Vm();Bt!==t||vt!==n?(Hl=null,Fl=$e()+500,Kr(t,n)):jr=ze(t,n);e:do try{if(Rt!==0&&pt!==null){n=pt;var h=Vn;t:switch(Rt){case 1:Rt=0,Vn=null,Qr(t,n,h,1);break;case 2:case 9:if(tp(h)){Rt=0,Vn=null,Wm(n);break}n=function(){Rt!==2&&Rt!==9||Bt!==t||(Rt=7),mi(t)},h.then(n,n);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:tp(h)?(Rt=0,Vn=null,Wm(n)):(Rt=0,Vn=null,Qr(t,n,h,7));break;case 5:var y=null;switch(pt.tag){case 26:y=pt.memoizedState;case 5:case 27:var T=pt;if(!y||bg(y)){Rt=0,Vn=null;var B=T.sibling;if(B!==null)pt=B;else{var J=T.return;J!==null?(pt=J,Vl(J)):pt=null}break t}}Rt=0,Vn=null,Qr(t,n,h,5);break;case 6:Rt=0,Vn=null,Qr(t,n,h,6);break;case 8:bf(),qt=6;break e;default:throw Error(s(462))}}Px();break}catch(de){Hm(t,de)}while(!0);return Ri=Ja=null,P.H=o,P.A=c,At=a,pt!==null?0:(Bt=null,vt=0,ul(),qt)}function Px(){for(;pt!==null&&!ot();)km(pt)}function km(t){var n=gm(t.alternate,t,Pi);t.memoizedProps=t.pendingProps,n===null?Vl(t):pt=n}function Wm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=cm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=cm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Gc(n);default:vm(a,n),n=pt=Xd(n,Pi),n=gm(a,n,Pi)}t.memoizedProps=t.pendingProps,n===null?Vl(t):pt=n}function Qr(t,n,a,o){Ri=Ja=null,Gc(n),Vr=null,uo=0;var c=n.return;try{if(Tx(t,c,n,a,vt)){qt=1,Nl(t,Yn(a,t.current)),pt=null;return}}catch(h){if(c!==null)throw pt=c,h;qt=1,Nl(t,Yn(a,t.current)),pt=null;return}n.flags&32768?(Et||o===1?t=!0:jr||(vt&536870912)!==0?t=!1:(da=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xm(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){Xm(n,da);return}t=n.return;var a=Ax(n.alternate,n,Pi);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);qt===0&&(qt=5)}function Xm(t,n){do{var a=Rx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);qt=6,pt=null}function jm(t,n,a,o,c,h,y,T,B){t.cancelPendingCommit=null;do kl();while(gn!==0);if((At&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=gc,ie(t,a,h,y,T,B),t===Bt&&(pt=Bt=null,vt=0),Yr=n,ga=t,Zr=a,Mf=h,Ef=c,zm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fx(O,function(){return Qm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=Y.p,Y.p=2,y=At,At|=4;try{wx(t,n,a)}finally{At=y,Y.p=c,P.T=o}}gn=1,qm(),Ym(),Zm()}}function qm(){if(gn===1){gn=0;var t=ga,n=Yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var c=At;At|=4;try{Cm(n,t);var h=Ff,y=Pd(t.containerInfo),T=h.focusedElem,B=h.selectionRange;if(y!==T&&T&&T.ownerDocument&&Od(T.ownerDocument.documentElement,T)){if(B!==null&&fc(T)){var J=B.start,de=B.end;if(de===void 0&&(de=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(de,T.value.length);else{var ge=T.ownerDocument||document,ee=ge&&ge.defaultView||window;if(ee.getSelection){var te=ee.getSelection(),Ke=T.textContent.length,Xe=Math.min(B.start,Ke),Lt=B.end===void 0?Xe:Math.min(B.end,Ke);!te.extend&&Xe>Lt&&(y=Lt,Lt=Xe,Xe=y);var q=Nd(T,Xe),G=Nd(T,Lt);if(q&&G&&(te.rangeCount!==1||te.anchorNode!==q.node||te.anchorOffset!==q.offset||te.focusNode!==G.node||te.focusOffset!==G.offset)){var K=ge.createRange();K.setStart(q.node,q.offset),te.removeAllRanges(),Xe>Lt?(te.addRange(K),te.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),te.addRange(K))}}}}for(ge=[],te=T;te=te.parentNode;)te.nodeType===1&&ge.push({element:te,left:te.scrollLeft,top:te.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var pe=ge[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}tu=!!If,Ff=If=null}finally{At=c,Y.p=o,P.T=a}}t.current=n,gn=2}}function Ym(){if(gn===2){gn=0;var t=ga,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var c=At;At|=4;try{bm(t,n.alternate,n)}finally{At=c,Y.p=o,P.T=a}}gn=3}}function Zm(){if(gn===4||gn===3){gn=0,qe();var t=ga,n=Yr,a=Zr,o=zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,Yr=ga=null,Km(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ma=null),bt(a),n=n.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Se,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=Y.p,Y.p=2,P.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var T=o[y];h(T.value,{componentStack:T.stack})}}finally{P.T=n,Y.p=c}}(Zr&3)!==0&&kl(),mi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Tf?xo++:(xo=0,Tf=t):xo=0,So(0)}}function Km(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function kl(t){return qm(),Ym(),Zm(),Qm()}function Qm(){if(gn!==5)return!1;var t=ga,n=Mf;Mf=0;var a=bt(Zr),o=P.T,c=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Ef,Ef=null;var h=ga,y=Zr;if(gn=0,Yr=ga=null,Zr=0,(At&6)!==0)throw Error(s(331));var T=At;if(At|=4,Om(h.current),Lm(h,h.current,y,a),At=T,So(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Se,h)}catch{}return!0}finally{Y.p=c,P.T=o,Km(t,n)}}function Jm(t,n,a){n=Yn(a,n),n=tf(t.stateNode,n,2),t=sa(t,n,2),t!==null&&(Re(t,2),mi(t))}function zt(t,n,a){if(t.tag===3)Jm(t,t,a);else for(;n!==null;){if(n.tag===3){Jm(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ma===null||!ma.has(o))){t=Yn(a,t),a=nm(2),o=sa(n,a,2),o!==null&&(im(a,o,n,t),Re(o,2),mi(o));break}}n=n.return}}function wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Lx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(vf=!0,c.add(a),t=zx.bind(null,t,n,a),n.then(t,t))}function zx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Bt===t&&(vt&a)===a&&(qt===4||qt===3&&(vt&62914560)===vt&&300>$e()-yf?(At&2)===0&&Kr(t,0):xf|=a,qr===vt&&(qr=0)),mi(t)}function $m(t,n){n===0&&(n=Nt()),t=Ur(t,n),t!==null&&(Re(t,n),mi(t))}function Bx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$m(t,a)}function Ix(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),$m(t,a)}function Fx(t,n){return Yt(t,n)}var Wl=null,Jr=null,Cf=!1,Xl=!1,Df=!1,rr=0;function mi(t){t!==Jr&&t.next===null&&(Jr===null?Wl=Jr=t:Jr=Jr.next=t),Xl=!0,Cf||(Cf=!0,Gx())}function So(t,n){if(!Df&&Xl){Df=!0;do for(var a=!1,o=Wl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var y=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Ee(42|t)+1)-1,h&=c&~(y&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,ig(o,h))}else h=vt,h=Pe(o,o===Bt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ze(o,h)||(a=!0,ig(o,h));o=o.next}while(a);Df=!1}}function Hx(){eg()}function eg(){Xl=Cf=!1;var t=0;rr!==0&&(Zx()&&(t=rr),rr=0);for(var n=$e(),a=null,o=Wl;o!==null;){var c=o.next,h=tg(o,n);h===0?(o.next=null,a===null?Wl=c:a.next=c,c===null&&(Jr=a)):(a=o,(t!==0||(h&3)!==0)&&(Xl=!0)),o=c}So(t)}function tg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-Ee(h),T=1<<y,B=c[y];B===-1?((T&a)===0||(T&o)!==0)&&(c[y]=gt(T,n)):B<=n&&(t.expiredLanes|=T),h&=~T}if(n=Bt,a=vt,a=Pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Rt===2||Rt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ve(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ze(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ve(o),bt(a)){case 2:case 8:a=Vt;break;case 32:a=O;break;case 268435456:a=ue;break;default:a=O}return o=ng.bind(null,t),a=Yt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ve(o),t.callbackPriority=2,t.callbackNode=null,2}function ng(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kl()&&t.callbackNode!==a)return null;var o=vt;return o=Pe(t,t===Bt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Im(t,o,n),tg(t,$e()),t.callbackNode!=null&&t.callbackNode===a?ng.bind(null,t):null)}function ig(t,n){if(kl())return null;Im(t,n,!0)}function Gx(){Qx(function(){(At&6)!==0?Yt(lt,Hx):eg()})}function Lf(){return rr===0&&(rr=et()),rr}function ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Vx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=ag((c[Ft]||null).action),y=o.submitter;y&&(n=(n=y[Ft]||null)?ag(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var T=new sl("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rr!==0){var B=y?rg(c,y):new FormData(c);Kc(a,{pending:!0,data:B,method:c.method,action:h},null,B)}}else typeof h=="function"&&(T.preventDefault(),B=y?rg(c,y):new FormData(c),Kc(a,{pending:!0,data:B,method:c.method,action:h},h,B))},currentTarget:c}]})}}for(var Uf=0;Uf<mc.length;Uf++){var Nf=mc[Uf],kx=Nf.toLowerCase(),Wx=Nf[0].toUpperCase()+Nf.slice(1);ii(kx,"on"+Wx)}ii(Id,"onAnimationEnd"),ii(Fd,"onAnimationIteration"),ii(Hd,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(ox,"onTransitionRun"),ii(lx,"onTransitionStart"),ii(ux,"onTransitionCancel"),ii(Gd,"onTransitionEnd"),Ue("onMouseEnter",["mouseout","mouseover"]),Ue("onMouseLeave",["mouseout","mouseover"]),Ue("onPointerEnter",["pointerout","pointerover"]),Ue("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==h&&c.isPropagationStopped())break e;h=T,c.currentTarget=J;try{h(c)}catch(de){Ul(de)}c.currentTarget=null,h=B}else for(y=0;y<o.length;y++){if(T=o[y],B=T.instance,J=T.currentTarget,T=T.listener,B!==h&&c.isPropagationStopped())break e;h=T,c.currentTarget=J;try{h(c)}catch(de){Ul(de)}c.currentTarget=null,h=B}}}}function mt(t,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var o=t+"__bubble";a.has(o)||(og(n,t,2,!1),a.add(o))}function Of(t,n,a){var o=0;n&&(o|=4),og(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Pf(t){if(!t[jl]){t[jl]=!0,ae.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Of(a,!1,t),Of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Of("selectionchange",!1,n))}}function og(t,n,a,o){switch(Lg(n)){case 2:var c=vS;break;case 8:c=xS;break;default:c=Zf}a=c.bind(null,n,a,t),c=void 0,!nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function zf(t,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===c)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;T!==null;){if(y=$i(T),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=h=y;continue e}T=T.parentNode}}o=o.return}pd(function(){var J=h,de=ec(a),ge=[];e:{var ee=Vd.get(t);if(ee!==void 0){var te=sl,Ke=t;switch(t){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":te=F0;break;case"focusin":Ke="focus",te=sc;break;case"focusout":Ke="blur",te=sc;break;case"beforeblur":case"afterblur":te=sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=V0;break;case Id:case Fd:case Hd:te=D0;break;case Gd:te=W0;break;case"scroll":case"scrollend":te=b0;break;case"wheel":te=j0;break;case"copy":case"cut":case"paste":te=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=xd;break;case"toggle":case"beforetoggle":te=Y0}var Xe=(n&4)!==0,Lt=!Xe&&(t==="scroll"||t==="scrollend"),q=Xe?ee!==null?ee+"Capture":null:ee;Xe=[];for(var G=J,K;G!==null;){var pe=G;if(K=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||K===null||q===null||(pe=Fs(G,q),pe!=null&&Xe.push(Mo(G,pe,K))),Lt)break;G=G.return}0<Xe.length&&(ee=new te(ee,Ke,null,a,de),ge.push({event:ee,listeners:Xe}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",te=t==="mouseout"||t==="pointerout",ee&&a!==$u&&(Ke=a.relatedTarget||a.fromElement)&&($i(Ke)||Ke[Mi]))break e;if((te||ee)&&(ee=de.window===de?de:(ee=de.ownerDocument)?ee.defaultView||ee.parentWindow:window,te?(Ke=a.relatedTarget||a.toElement,te=J,Ke=Ke?$i(Ke):null,Ke!==null&&(Lt=u(Ke),Xe=Ke.tag,Ke!==Lt||Xe!==5&&Xe!==27&&Xe!==6)&&(Ke=null)):(te=null,Ke=J),te!==Ke)){if(Xe=_d,pe="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=xd,pe="onPointerLeave",q="onPointerEnter",G="pointer"),Lt=te==null?ee:Ga(te),K=Ke==null?ee:Ga(Ke),ee=new Xe(pe,G+"leave",te,a,de),ee.target=Lt,ee.relatedTarget=K,pe=null,$i(de)===J&&(Xe=new Xe(q,G+"enter",Ke,a,de),Xe.target=K,Xe.relatedTarget=Lt,pe=Xe),Lt=pe,te&&Ke)t:{for(Xe=te,q=Ke,G=0,K=Xe;K;K=$r(K))G++;for(K=0,pe=q;pe;pe=$r(pe))K++;for(;0<G-K;)Xe=$r(Xe),G--;for(;0<K-G;)q=$r(q),K--;for(;G--;){if(Xe===q||q!==null&&Xe===q.alternate)break t;Xe=$r(Xe),q=$r(q)}Xe=null}else Xe=null;te!==null&&lg(ge,ee,te,Xe,!1),Ke!==null&&Lt!==null&&lg(ge,Lt,Ke,Xe,!0)}}e:{if(ee=J?Ga(J):window,te=ee.nodeName&&ee.nodeName.toLowerCase(),te==="select"||te==="input"&&ee.type==="file")var Oe=Rd;else if(bd(ee))if(wd)Oe=ax;else{Oe=nx;var dt=tx}else te=ee.nodeName,!te||te.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&Ju(J.elementType)&&(Oe=Rd):Oe=ix;if(Oe&&(Oe=Oe(t,J))){Ad(ge,Oe,a,de);break e}dt&&dt(t,ee,J),t==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Er(ee,"number",ee.value)}switch(dt=J?Ga(J):window,t){case"focusin":(bd(dt)||dt.contentEditable==="true")&&(Cr=dt,hc=J,qs=null);break;case"focusout":qs=hc=Cr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,zd(ge,a,de);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":zd(ge,a,de)}var He;if(lc)e:{switch(t){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else wr?Ed(t,a)&&(je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(Sd&&a.locale!=="ko"&&(wr||je!=="onCompositionStart"?je==="onCompositionEnd"&&wr&&(He=md()):(na=de,ic="value"in na?na.value:na.textContent,wr=!0)),dt=ql(J,je),0<dt.length&&(je=new vd(je,t,null,a,de),ge.push({event:je,listeners:dt}),He?je.data=He:(He=Td(a),He!==null&&(je.data=He)))),(He=K0?Q0(t,a):J0(t,a))&&(je=ql(J,"onBeforeInput"),0<je.length&&(dt=new vd("onBeforeInput","beforeinput",null,a,de),ge.push({event:dt,listeners:je}),dt.data=He)),Vx(ge,t,J,a,de)}sg(ge,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Fs(t,a),c!=null&&o.unshift(Mo(t,c,h)),c=Fs(t,n),c!=null&&o.push(Mo(t,c,h))),t.tag===3)return o;t=t.return}return[]}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lg(t,n,a,o,c){for(var h=n._reactName,y=[];a!==null&&a!==o;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||J===null||(B=J,c?(J=Fs(a,h),J!=null&&y.unshift(Mo(a,J,B))):c||(J=Fs(a,h),J!=null&&y.push(Mo(a,J,B)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var jx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(qx,"")}function cg(t,n){return n=ug(n),ug(t)===n}function Yl(){}function Dt(t,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||br(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&br(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,a,o);break;case"style":hd(t,o,h);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=nl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Dt(t,n,"name",c.name,c,null),Dt(t,n,"formEncType",c.formEncType,c,null),Dt(t,n,"formMethod",c.formMethod,c,null),Dt(t,n,"formTarget",c.formTarget,c,null)):(Dt(t,n,"encType",c.encType,c,null),Dt(t,n,"method",c.method,c,null),Dt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=nl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Yl);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Qe(t,"popover",o);break;case"xlinkActuate":Mt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Mt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Mt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Mt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Mt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Mt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Mt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Mt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Mt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=E0.get(a)||a,Qe(t,a,o))}}function Bf(t,n,a,o,c,h){switch(a){case"style":hd(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?br(t,o):(typeof o=="number"||typeof o=="bigint")&&br(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[Ft]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Qe(t,a,o)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(t,n,h,y,a,null)}}c&&Dt(t,n,"srcSet",a.srcSet,a,null),o&&Dt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var T=h=y=c=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":c=de;break;case"type":y=de;break;case"checked":B=de;break;case"defaultChecked":J=de;break;case"value":h=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Dt(t,n,o,de,a,null)}}tl(t,h,T,B,J,y,c,!1),ta(t);return;case"select":mt("invalid",t),o=y=h=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":h=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:Dt(t,n,c,T,a,null)}n=h,a=y,t.multiple=!!o,n!=null?Tr(t,!!o,n,!1):a!=null&&Tr(t,!!o,a,!0);return;case"textarea":mt("invalid",t),h=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":c=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Dt(t,n,y,T,a,null)}cd(t,o,c,h),ta(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Dt(t,n,B,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<yo.length;o++)mt(yo[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(t,n,J,o,a,null)}return;default:if(Ju(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Bf(t,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Dt(t,n,T,o,a,null))}function Yx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,T=null,B=null,J=null,de=null;for(te in a){var ge=a[te];if(a.hasOwnProperty(te)&&ge!=null)switch(te){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(te)||Dt(t,n,te,null,o,ge)}}for(var ee in o){var te=o[ee];if(ge=a[ee],o.hasOwnProperty(ee)&&(te!=null||ge!=null))switch(ee){case"type":h=te;break;case"name":c=te;break;case"checked":J=te;break;case"defaultChecked":de=te;break;case"value":y=te;break;case"defaultValue":T=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(s(137,n));break;default:te!==ge&&Dt(t,n,ee,te,o,ge)}}ka(t,y,T,B,J,de,h,c);return;case"select":te=y=T=ee=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":te=B;default:o.hasOwnProperty(h)||Dt(t,n,h,null,o,B)}for(c in o)if(h=o[c],B=a[c],o.hasOwnProperty(c)&&(h!=null||B!=null))switch(c){case"value":ee=h;break;case"defaultValue":T=h;break;case"multiple":y=h;default:h!==B&&Dt(t,n,c,h,o,B)}n=T,a=y,o=te,ee!=null?Tr(t,!!a,ee,!1):!!o!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":te=ee=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Dt(t,n,T,null,o,c)}for(y in o)if(c=o[y],h=a[y],o.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":ee=c;break;case"defaultValue":te=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Dt(t,n,y,c,o,h)}ud(t,ee,te);return;case"option":for(var Ke in a)if(ee=a[Ke],a.hasOwnProperty(Ke)&&ee!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Dt(t,n,Ke,null,o,ee)}for(B in o)if(ee=o[B],te=a[B],o.hasOwnProperty(B)&&ee!==te&&(ee!=null||te!=null))switch(B){case"selected":t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Dt(t,n,B,ee,o,te)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xe in a)ee=a[Xe],a.hasOwnProperty(Xe)&&ee!=null&&!o.hasOwnProperty(Xe)&&Dt(t,n,Xe,null,o,ee);for(J in o)if(ee=o[J],te=a[J],o.hasOwnProperty(J)&&ee!==te&&(ee!=null||te!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Dt(t,n,J,ee,o,te)}return;default:if(Ju(n)){for(var Lt in a)ee=a[Lt],a.hasOwnProperty(Lt)&&ee!==void 0&&!o.hasOwnProperty(Lt)&&Bf(t,n,Lt,void 0,o,ee);for(de in o)ee=o[de],te=a[de],!o.hasOwnProperty(de)||ee===te||ee===void 0&&te===void 0||Bf(t,n,de,ee,o,te);return}}for(var q in a)ee=a[q],a.hasOwnProperty(q)&&ee!=null&&!o.hasOwnProperty(q)&&Dt(t,n,q,null,o,ee);for(ge in o)ee=o[ge],te=a[ge],!o.hasOwnProperty(ge)||ee===te||ee==null&&te==null||Dt(t,n,ge,ee,o,te)}var If=null,Ff=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function fg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function Zx(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(Jx)}:dg;function Jx(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function mg(t,n){var a=n,o=0,c=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var y=t.ownerDocument;if(a&1&&Eo(y.documentElement),a&2&&Eo(y.body),a&4)for(a=y.head,Eo(a),y=a.firstChild;y;){var T=y.nextSibling,B=y.nodeName;y[Ji]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=T}}if(c===0){t.removeChild(h),Lo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Lo(n)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Mr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $x(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ri(t.nextSibling),t===null)break}return null}function eS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ri(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function tS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Wf=null;function gg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function _g(t,n,a){switch(n=Zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Mr(t)}var ei=new Map,vg=new Set;function Kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var zi=Y.d;Y.d={f:nS,r:iS,D:aS,C:rS,L:sS,m:oS,X:uS,S:lS,M:cS};function nS(){var t=zi.f(),n=Gl();return t||n}function iS(t){var n=ea(t);n!==null&&n.tag===5&&n.type==="form"?Ip(n):zi.r(t)}var es=typeof document>"u"?null:document;function xg(t,n,a){var o=es;if(o&&typeof n=="string"&&n){var c=Ht(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),vg.has(c)||(vg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),_n(n,"link",t),W(n),o.head.appendChild(n)))}}function aS(t){zi.D(t),xg("dns-prefetch",t,null)}function rS(t,n){zi.C(t,n),xg("preconnect",t,n)}function sS(t,n,a){zi.L(t,n,a);var o=es;if(o&&t&&n){var c='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ht(a.imageSizes)+'"]')):c+='[href="'+Ht(t)+'"]';var h=c;switch(n){case"style":h=ts(t);break;case"script":h=ns(t)}ei.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(To(h))||n==="script"&&o.querySelector(bo(h))||(n=o.createElement("link"),_n(n,"link",t),W(n),o.head.appendChild(n)))}}function oS(t,n){zi.m(t,n);var a=es;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ns(t)}if(!ei.has(h)&&(t=g({rel:"modulepreload",href:t},n),ei.set(h,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(h)))return}o=a.createElement("link"),_n(o,"link",t),W(o),a.head.appendChild(o)}}}function lS(t,n,a){zi.S(t,n,a);var o=es;if(o&&t){var c=C(o).hoistableStyles,h=ts(t);n=n||"default";var y=c.get(h);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(To(h)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(h))&&Xf(t,a);var B=y=o.createElement("link");W(B),_n(B,"link",t),B._p=new Promise(function(J,de){B.onload=J,B.onerror=de}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ql(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},c.set(h,y)}}}function uS(t,n){zi.X(t,n);var a=es;if(a&&t){var o=C(a).hoistableScripts,c=ns(t),h=o.get(c);h||(h=a.querySelector(bo(c)),h||(t=g({src:t,async:!0},n),(n=ei.get(c))&&jf(t,n),h=a.createElement("script"),W(h),_n(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function cS(t,n){zi.M(t,n);var a=es;if(a&&t){var o=C(a).hoistableScripts,c=ns(t),h=o.get(c);h||(h=a.querySelector(bo(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=ei.get(c))&&jf(t,n),h=a.createElement("script"),W(h),_n(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Sg(t,n,a,o){var c=(c=ve.current)?Kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=C(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ts(a.href);var h=C(c).hoistableStyles,y=h.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=c.querySelector(To(t)))&&!h._p&&(y.instance=h,y.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),h||fS(c,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=C(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ts(t){return'href="'+Ht(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function yg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function fS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),_n(n,"link",a),W(n),t.head.appendChild(n))}function ns(t){return'[src="'+Ht(t)+'"]'}function bo(t){return"script[async]"+t}function Mg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,W(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),W(o),_n(o,"style",c),Ql(o,a.precedence,t),n.instance=o;case"stylesheet":c=ts(a.href);var h=t.querySelector(To(c));if(h)return n.state.loading|=4,n.instance=h,W(h),h;o=yg(a),(c=ei.get(c))&&Xf(o,c),h=(t.ownerDocument||t).createElement("link"),W(h);var y=h;return y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),_n(h,"link",o),n.state.loading|=4,Ql(h,a.precedence,t),n.instance=h;case"script":return h=ns(a.src),(c=t.querySelector(bo(h)))?(n.instance=c,W(c),c):(o=a,(c=ei.get(h))&&(o=g({},a),jf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),W(c),_n(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ql(o,a.precedence,t));return n.instance}function Ql(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)h=T;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Jl=null;function Eg(t,n,a){if(Jl===null){var o=new Map,c=Jl=new Map;c.set(a,o)}else c=Jl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[Ji]||h[St]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var T=o.get(y);T?T.push(h):o.set(y,[h])}}return o}function Tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ao=null;function dS(){}function pS(t,n,a){if(Ao===null)throw Error(s(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ts(a.href),h=t.querySelector(To(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=$l.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,W(h);return}h=t.ownerDocument||t,a=yg(a),(c=ei.get(c))&&Xf(a,c),h=h.createElement("link"),W(h);var y=h;y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),_n(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=$l.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function mS(){if(Ao===null)throw Error(s(475));var t=Ao;return t.stylesheets&&t.count===0&&qf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&qf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function $l(){if(this.count--,this.count===0){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var eu=null;function qf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,eu=new Map,n.forEach(gS,t),eu=null,$l.call(t))}function gS(t,n){if(!(n.state.loading&4)){var a=eu.get(t);if(a)var o=a.get(null);else{a=new Map,eu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,c),a.set(y,c),this.count++,o=$l.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:A,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function _S(t,n,a,o,c,h,y,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=k(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=k(0),this.hiddenUpdates=k(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ag(t,n,a,o,c,h,y,T,B,J,de,ge){return t=new _S(t,n,a,y,T,B,J,ge),n=1,h===!0&&(n|=24),h=Fn(3,null,null,n),t.current=h,h.stateNode=t,n=Rc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Lc(h),t}function Rg(t){return t?(t=Nr,t):Nr}function wg(t,n,a,o,c,h){c=Rg(c),o.context===null?o.context=c:o.pendingContext=c,o=ra(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=sa(t,o,n),a!==null&&(Wn(a,t,n),no(a,t,n))}function Cg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Yf(t,n){Cg(t,n),(t=t.alternate)&&Cg(t,n)}function Dg(t){if(t.tag===13){var n=Ur(t,67108864);n!==null&&Wn(n,t,67108864),Yf(t,67108864)}}var tu=!0;function vS(t,n,a,o){var c=P.T;P.T=null;var h=Y.p;try{Y.p=2,Zf(t,n,a,o)}finally{Y.p=h,P.T=c}}function xS(t,n,a,o){var c=P.T;P.T=null;var h=Y.p;try{Y.p=8,Zf(t,n,a,o)}finally{Y.p=h,P.T=c}}function Zf(t,n,a,o){if(tu){var c=Kf(o);if(c===null)zf(t,n,o,nu,a),Ug(t,o);else if(yS(c,t,n,a,o))o.stopPropagation();else if(Ug(t,o),n&4&&-1<SS.indexOf(t)){for(;c!==null;){var h=ea(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Be(h.pendingLanes);if(y!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var B=1<<31-Ee(y);T.entanglements[1]|=B,y&=~B}mi(h),(At&6)===0&&(Fl=$e()+500,So(0))}}break;case 13:T=Ur(h,2),T!==null&&Wn(T,h,2),Gl(),Yf(h,2)}if(h=Kf(o),h===null&&zf(t,n,o,nu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else zf(t,n,o,null,a)}}function Kf(t){return t=ec(t),Qf(t)}var nu=null;function Qf(t){if(nu=null,t=$i(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nu=t,null}function Lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case lt:return 2;case Vt:return 8;case O:case b:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Jf=!1,xa=null,Sa=null,ya=null,wo=new Map,Co=new Map,Ma=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(t,n){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function Do(t,n,a,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=ea(n),n!==null&&Dg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function yS(t,n,a,o,c){switch(n){case"focusin":return xa=Do(xa,t,n,a,o,c),!0;case"dragenter":return Sa=Do(Sa,t,n,a,o,c),!0;case"mouseover":return ya=Do(ya,t,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return wo.set(h,Do(wo.get(h)||null,t,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Co.set(h,Do(Co.get(h)||null,t,n,a,o,c)),!0}return!1}function Ng(t){var n=$i(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Cn(t.priority,function(){if(a.tag===13){var o=kn();o=ut(o);var c=Ur(a,o);c!==null&&Wn(c,a,o),Yf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function iu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);$u=o,a.target.dispatchEvent(o),$u=null}else return n=ea(a),n!==null&&Dg(n),t.blockedOn=a,!1;n.shift()}return!0}function Og(t,n,a){iu(t)&&a.delete(n)}function MS(){Jf=!1,xa!==null&&iu(xa)&&(xa=null),Sa!==null&&iu(Sa)&&(Sa=null),ya!==null&&iu(ya)&&(ya=null),wo.forEach(Og),Co.forEach(Og)}function au(t,n){t.blockedOn===n&&(t.blockedOn=null,Jf||(Jf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,MS)))}var ru=null;function Pg(t){ru!==t&&(ru=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ru===t&&(ru=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Qf(o||a)===null)continue;break}var h=ea(a);h!==null&&(t.splice(n,3),n-=3,Kc(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Lo(t){function n(B){return au(B,t)}xa!==null&&au(xa,t),Sa!==null&&au(Sa,t),ya!==null&&au(ya,t),wo.forEach(n),Co.forEach(n);for(var a=0;a<Ma.length;a++){var o=Ma[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Ng(a),a.blockedOn===null&&Ma.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],y=c[Ft]||null;if(typeof h=="function")y||Pg(a);else if(y){var T=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[Ft]||null)T=y.formAction;else if(Qf(c)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Pg(a)}}}function $f(t){this._internalRoot=t}su.prototype.render=$f.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=kn();wg(a,o,t,n,null,null)},su.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;wg(t.current,2,null,t,null,null),Gl(),n[Mi]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var n=Jt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ma.length&&n!==0&&n<Ma[a].priority;a++);Ma.splice(a,0,t),a===0&&Ng(t)}};var zg=e.version;if(zg!=="19.1.0")throw Error(s(527,zg,"19.1.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Se=ou.inject(ES),ke=ou}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=Jp,h=$p,y=em,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Ag(t,1,!1,null,null,a,o,c,h,y,T,null),t[Mi]=n.current,Pf(t),new $f(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",h=Jp,y=$p,T=em,B=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Ag(t,1,!0,n,a??null,o,c,h,y,T,B,J),n.context=Rg(null),a=n.current,o=kn(),o=ut(o),c=ra(o),c.callback=null,sa(a,c,o),a=o,n.current.lanes=a,Re(n,a),mi(n),t[Mi]=n.current,Pf(t),new su(n)},No.version="19.1.0",No}var jg;function NS(){if(jg)return nh.exports;jg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),nh.exports=US(),nh.exports}var OS=NS(),Oo={},qg;function PS(){if(qg)return Oo;qg=1,Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.parse=d,Oo.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function d(S,M){const E=new u,R=S.length;if(R<2)return E;const v=(M==null?void 0:M.decode)||g;let _=0;do{const U=S.indexOf("=",_);if(U===-1)break;const A=S.indexOf(";",_),N=A===-1?R:A;if(U>N){_=S.lastIndexOf(";",U-1)+1;continue}const F=f(S,_,U),H=p(S,U,F),I=S.slice(F,H);if(E[I]===void 0){let ne=f(S,U+1,N),xe=p(S,N,ne);const w=v(S.slice(ne,xe));E[I]=w}_=N+1}while(_<R);return E}function f(S,M,E){do{const R=S.charCodeAt(M);if(R!==32&&R!==9)return M}while(++M<E);return E}function p(S,M,E){for(;M>E;){const R=S.charCodeAt(--M);if(R!==32&&R!==9)return M+1}return E}function m(S,M,E){const R=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(S))throw new TypeError(`argument name is invalid: ${S}`);const v=R(M);if(!e.test(v))throw new TypeError(`argument val is invalid: ${M}`);let _=S+"="+v;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function x(S){return l.call(S)==="[object Date]"}return Oo}PS();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function zS(r={}){function e(s,l){let{pathname:u,search:d,hash:f}=s.location;return Hh("",{pathname:u,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:ko(l)}return IS(e,i,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Si(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BS(){return Math.random().toString(36).substring(2,10)}function Zg(r,e){return{usr:r.state,key:r.key,idx:e}}function Hh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Cs(e):e,state:i,key:e&&e.key||s||BS()}}function ko({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Cs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function IS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,d=l.history,f="POP",p=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function x(){f="POP";let v=g(),_=v==null?null:v-m;m=v,p&&p({action:f,location:R.location,delta:_})}function S(v,_){f="PUSH";let U=Hh(R.location,v,_);m=g()+1;let A=Zg(U,m),N=R.createHref(U);try{d.pushState(A,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(N)}u&&p&&p({action:f,location:R.location,delta:1})}function M(v,_){f="REPLACE";let U=Hh(R.location,v,_);m=g();let A=Zg(U,m),N=R.createHref(U);d.replaceState(A,"",N),u&&p&&p({action:f,location:R.location,delta:0})}function E(v){let _=l.location.origin!=="null"?l.location.origin:l.location.href,U=typeof v=="string"?v:ko(v);return U=U.replace(/ $/,"%20"),Xt(_,`No window.location.(origin|href) available to create URL for href: ${U}`),new URL(U,_)}let R={get action(){return f},get location(){return r(l,d)},listen(v){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Yg,x),p=v,()=>{l.removeEventListener(Yg,x),p=null}},createHref(v){return e(l,v)},createURL:E,encodeLocation(v){let _=E(v);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:M,go(v){return d.go(v)}};return R}function Tv(r,e,i="/"){return FS(r,e,i,!1)}function FS(r,e,i,s){let l=typeof e=="string"?Cs(e):e,u=Yi(l.pathname||"/",i);if(u==null)return null;let d=bv(r);HS(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let m=QS(u);f=ZS(d[p],m,s)}return f}function bv(r,e=[],i=[],s=""){let l=(u,d,f)=>{let p={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};p.relativePath.startsWith("/")&&(Xt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=qi([s,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Xt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),bv(u.children,e,g,m)),!(u.path==null&&!u.index)&&e.push({path:m,score:qS(m,u.index),routesMeta:g})};return r.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,d);else for(let p of Av(u.path))l(u,d,p)}),e}function Av(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let d=Av(s.join("/")),f=[];return f.push(...d.map(p=>p===""?u:[u,p].join("/"))),l&&f.push(...d),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function HS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:YS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var GS=/^:[\w-]+$/,VS=3,kS=2,WS=1,XS=10,jS=-2,Kg=r=>r==="*";function qS(r,e){let i=r.split("/"),s=i.length;return i.some(Kg)&&(s+=jS),e&&(s+=kS),i.filter(l=>!Kg(l)).reduce((l,u)=>l+(GS.test(u)?VS:u===""?WS:XS),s)}function YS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function ZS(r,e,i=!1){let{routesMeta:s}=r,l={},u="/",d=[];for(let f=0;f<s.length;++f){let p=s[f],m=f===s.length-1,g=u==="/"?e:e.slice(u.length)||"/",x=zu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),S=p.route;if(!x&&m&&i&&!s[s.length-1].route.index&&(x=zu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),d.push({params:l,pathname:qi([u,x.pathname]),pathnameBase:ty(qi([u,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(u=qi([u,x.pathnameBase]))}return d}function zu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=KS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:x},S)=>{if(g==="*"){let E=f[S]||"";d=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=f[S];return x&&!M?m[g]=void 0:m[g]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:r}}function KS(r,e=!1,i=!0){Si(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function QS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Yi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function JS(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Cs(r):r;return{pathname:i?i.startsWith("/")?i:$S(i,e):e,search:ny(s),hash:iy(l)}}function $S(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sh(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ey(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Rv(r){let e=ey(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function wv(r,e,i,s=!1){let l;typeof r=="string"?l=Cs(r):(l={...r},Xt(!l.pathname||!l.pathname.includes("?"),sh("?","pathname","search",l)),Xt(!l.pathname||!l.pathname.includes("#"),sh("#","pathname","hash",l)),Xt(!l.search||!l.search.includes("#"),sh("#","search","hash",l)));let u=r===""||l.pathname==="",d=u?"/":l.pathname,f;if(d==null)f=i;else{let x=e.length-1;if(!s&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),x-=1;l.pathname=S.join("/")}f=x>=0?e[x]:"/"}let p=JS(l,f),m=d&&d!=="/"&&d.endsWith("/"),g=(u||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var qi=r=>r.join("/").replace(/\/\/+/g,"/"),ty=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ny=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,iy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function ay(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Cv=["POST","PUT","PATCH","DELETE"];new Set(Cv);var ry=["GET",...Cv];new Set(ry);var Ds=he.createContext(null);Ds.displayName="DataRouter";var Wu=he.createContext(null);Wu.displayName="DataRouterState";var Dv=he.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var sy=he.createContext(new Map);sy.displayName="Fetchers";var oy=he.createContext(null);oy.displayName="Await";var yi=he.createContext(null);yi.displayName="Navigation";var qo=he.createContext(null);qo.displayName="Location";var Ki=he.createContext({outlet:null,matches:[],isDataRoute:!1});Ki.displayName="Route";var $h=he.createContext(null);$h.displayName="RouteError";function ly(r,{relative:e}={}){Xt(Yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=he.useContext(yi),{hash:l,pathname:u,search:d}=Zo(r,{relative:e}),f=u;return i!=="/"&&(f=u==="/"?i:qi([i,u])),s.createHref({pathname:f,search:d,hash:l})}function Yo(){return he.useContext(qo)!=null}function Ia(){return Xt(Yo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(qo).location}var Lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uv(r){he.useContext(yi).static||he.useLayoutEffect(r)}function uy(){let{isDataRoute:r}=he.useContext(Ki);return r?My():cy()}function cy(){Xt(Yo(),"useNavigate() may be used only in the context of a <Router> component.");let r=he.useContext(Ds),{basename:e,navigator:i}=he.useContext(yi),{matches:s}=he.useContext(Ki),{pathname:l}=Ia(),u=JSON.stringify(Rv(s)),d=he.useRef(!1);return Uv(()=>{d.current=!0}),he.useCallback((p,m={})=>{if(Si(d.current,Lv),!d.current)return;if(typeof p=="number"){i.go(p);return}let g=wv(p,JSON.parse(u),l,m.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:qi([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,u,l,r])}he.createContext(null);function Zo(r,{relative:e}={}){let{matches:i}=he.useContext(Ki),{pathname:s}=Ia(),l=JSON.stringify(Rv(i));return he.useMemo(()=>wv(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function fy(r,e){return Nv(r,e)}function Nv(r,e,i,s){var U;Xt(Yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=he.useContext(yi),{matches:d}=he.useContext(Ki),f=d[d.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",x=f&&f.route;{let A=x&&x.path||"";Ov(m,!x||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let S=Ia(),M;if(e){let A=typeof e=="string"?Cs(e):e;Xt(g==="/"||((U=A.pathname)==null?void 0:U.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),M=A}else M=S;let E=M.pathname||"/",R=E;if(g!=="/"){let A=g.replace(/^\//,"").split("/");R="/"+E.replace(/^\//,"").split("/").slice(A.length).join("/")}let v=!u&&i&&i.matches&&i.matches.length>0?i.matches:Tv(r,{pathname:R});Si(x||v!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Si(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=gy(v&&v.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:qi([g,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:qi([g,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,i,s);return e&&_?he.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function hy(){let r=yy(),e=ay(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:u},"ErrorBoundary")," or"," ",he.createElement("code",{style:u},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,d)}var dy=he.createElement(hy,null),py=class extends he.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?he.createElement(Ki.Provider,{value:this.props.routeContext},he.createElement($h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function my({routeContext:r,match:e,children:i}){let s=he.useContext(Ds);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Ki.Provider,{value:r},i)}function gy(r,e=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,u=i==null?void 0:i.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Xt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let d=!1,f=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:g,errors:x}=i,S=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||S){d=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let x,S=!1,M=null,E=null;i&&(x=u&&m.route.id?u[m.route.id]:void 0,M=m.route.errorElement||dy,d&&(f<0&&g===0?(Ov("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):f===g&&(S=!0,E=m.route.hydrateFallbackElement||null)));let R=e.concat(l.slice(0,g+1)),v=()=>{let _;return x?_=M:S?_=E:m.route.Component?_=he.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,he.createElement(my,{match:m,routeContext:{outlet:p,matches:R,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?he.createElement(py,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:v(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):v()},null)}function ed(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _y(r){let e=he.useContext(Ds);return Xt(e,ed(r)),e}function vy(r){let e=he.useContext(Wu);return Xt(e,ed(r)),e}function xy(r){let e=he.useContext(Ki);return Xt(e,ed(r)),e}function td(r){let e=xy(r),i=e.matches[e.matches.length-1];return Xt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Sy(){return td("useRouteId")}function yy(){var s;let r=he.useContext($h),e=vy("useRouteError"),i=td("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function My(){let{router:r}=_y("useNavigate"),e=td("useNavigate"),i=he.useRef(!1);return Uv(()=>{i.current=!0}),he.useCallback(async(l,u={})=>{Si(i.current,Lv),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...u}))},[r,e])}var Qg={};function Ov(r,e,i){!e&&!Qg[r]&&(Qg[r]=!0,Si(!1,i))}he.memo(Ey);function Ey({routes:r,future:e,state:i}){return Nv(r,void 0,i,e)}function hr(r){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ty({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}){Xt(!Yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),f=he.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof i=="string"&&(i=Cs(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:S="default"}=i,M=he.useMemo(()=>{let E=Yi(p,d);return E==null?null:{location:{pathname:E,search:m,hash:g,state:x,key:S},navigationType:s}},[d,p,m,g,x,S,s]);return Si(M!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:he.createElement(yi.Provider,{value:f},he.createElement(qo.Provider,{children:e,value:M}))}function by({children:r,location:e}){return fy(Gh(r),e)}function Gh(r,e=[]){let i=[];return he.Children.forEach(r,(s,l)=>{if(!he.isValidElement(s))return;let u=[...e,l];if(s.type===he.Fragment){i.push.apply(i,Gh(s.props.children,u));return}Xt(s.type===hr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Gh(s.props.children,u)),i.push(d)}),i}var Nu="get",Ou="application/x-www-form-urlencoded";function Xu(r){return r!=null&&typeof r.tagName=="string"}function Ay(r){return Xu(r)&&r.tagName.toLowerCase()==="button"}function Ry(r){return Xu(r)&&r.tagName.toLowerCase()==="form"}function wy(r){return Xu(r)&&r.tagName.toLowerCase()==="input"}function Cy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Dy(r,e){return r.button===0&&(!e||e==="_self")&&!Cy(r)}var lu=null;function Ly(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var Uy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oh(r){return r!=null&&!Uy.has(r)?(Si(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),null):r}function Ny(r,e){let i,s,l,u,d;if(Ry(r)){let f=r.getAttribute("action");s=f?Yi(f,e):null,i=r.getAttribute("method")||Nu,l=oh(r.getAttribute("enctype"))||Ou,u=new FormData(r)}else if(Ay(r)||wy(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?Yi(p,e):null,i=r.getAttribute("formmethod")||f.getAttribute("method")||Nu,l=oh(r.getAttribute("formenctype"))||oh(f.getAttribute("enctype"))||Ou,u=new FormData(f,r),!Ly()){let{name:m,type:g,value:x}=r;if(g==="image"){let S=m?`${m}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else m&&u.append(m,x)}}else{if(Xu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,s=null,l=Ou,d=r}return u&&l==="text/plain"&&(d=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:d}}function nd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Oy(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Py(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function zy(r,e,i){let s=await Promise.all(r.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await Oy(u,i);return d.links?d.links():[]}return[]}));return Hy(s.flat(1).filter(Py).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Jg(r,e,i,s,l,u){let d=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,f=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,m)=>d(p,m)||f(p,m)):u==="data"?e.filter((p,m)=>{var x;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function By(r,e,{includeHydrateFallback:i}={}){return Iy(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Iy(r){return[...new Set(r)]}function Fy(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function Hy(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let u=JSON.stringify(Fy(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function Gy(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&Yi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Pv(){let r=he.useContext(Ds);return nd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Vy(){let r=he.useContext(Wu);return nd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var id=he.createContext(void 0);id.displayName="FrameworkContext";function zv(){let r=he.useContext(id);return nd(r,"You must render this element inside a <HydratedRouter> element"),r}function ky(r,e){let i=he.useContext(id),[s,l]=he.useState(!1),[u,d]=he.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=e,S=he.useRef(null);he.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let R=_=>{_.forEach(U=>{d(U.isIntersecting)})},v=new IntersectionObserver(R,{threshold:.5});return S.current&&v.observe(S.current),()=>{v.disconnect()}}},[r]),he.useEffect(()=>{if(s){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),d(!1)};return i?r!=="intent"?[u,S,{}]:[u,S,{onFocus:Po(f,M),onBlur:Po(p,E),onMouseEnter:Po(m,M),onMouseLeave:Po(g,E),onTouchStart:Po(x,M)}]:[!1,S,{}]}function Po(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function Wy({page:r,...e}){let{router:i}=Pv(),s=he.useMemo(()=>Tv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?he.createElement(jy,{page:r,matches:s,...e}):null}function Xy(r){let{manifest:e,routeModules:i}=zv(),[s,l]=he.useState([]);return he.useEffect(()=>{let u=!1;return zy(r,e,i).then(d=>{u||l(d)}),()=>{u=!0}},[r,e,i]),s}function jy({page:r,matches:e,...i}){let s=Ia(),{manifest:l,routeModules:u}=zv(),{basename:d}=Pv(),{loaderData:f,matches:p}=Vy(),m=he.useMemo(()=>Jg(r,e,p,l,s,"data"),[r,e,p,l,s]),g=he.useMemo(()=>Jg(r,e,p,l,s,"assets"),[r,e,p,l,s]),x=he.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,R=!1;if(e.forEach(_=>{var A;let U=l.routes[_.route.id];!U||!U.hasLoader||(!m.some(N=>N.route.id===_.route.id)&&_.route.id in f&&((A=u[_.route.id])!=null&&A.shouldRevalidate)||U.hasClientLoader?R=!0:E.add(_.route.id))}),E.size===0)return[];let v=Gy(r,d);return R&&E.size>0&&v.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[v.pathname+v.search]},[d,f,s,l,m,e,r,u]),S=he.useMemo(()=>By(g,l),[g,l]),M=Xy(g);return he.createElement(he.Fragment,null,x.map(E=>he.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),S.map(E=>he.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:R})=>he.createElement("link",{key:E,...R})))}function qy(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bv&&(window.__reactRouterVersion="7.5.0")}catch{}function Yy({basename:r,children:e,window:i}){let s=he.useRef();s.current==null&&(s.current=zS({window:i,v5Compat:!0}));let l=s.current,[u,d]=he.useState({action:l.action,location:l.location}),f=he.useCallback(p=>{he.startTransition(()=>d(p))},[d]);return he.useLayoutEffect(()=>l.listen(f),[l,f]),he.createElement(Ty,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l})}var Iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ju=he.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:d,state:f,target:p,to:m,preventScrollReset:g,viewTransition:x,...S},M){let{basename:E}=he.useContext(yi),R=typeof m=="string"&&Iv.test(m),v,_=!1;if(typeof m=="string"&&R&&(v=m,Bv))try{let xe=new URL(window.location.href),w=m.startsWith("//")?new URL(xe.protocol+m):new URL(m),z=Yi(w.pathname,E);w.origin===xe.origin&&z!=null?m=z+w.search+w.hash:_=!0}catch{Si(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=ly(m,{relative:l}),[A,N,F]=ky(s,S),H=Qy(m,{replace:d,state:f,target:p,preventScrollReset:g,relative:l,viewTransition:x});function I(xe){e&&e(xe),xe.defaultPrevented||H(xe)}let ne=he.createElement("a",{...S,...F,href:v||U,onClick:_||u?e:I,ref:qy(M,N),target:p,"data-discover":!R&&i==="render"?"true":void 0});return A&&!R?he.createElement(he.Fragment,null,ne,he.createElement(Wy,{page:U})):ne});ju.displayName="Link";var xs=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:d,viewTransition:f,children:p,...m},g){let x=Zo(d,{relative:m.relative}),S=Ia(),M=he.useContext(Wu),{navigator:E,basename:R}=he.useContext(yi),v=M!=null&&nM(x)&&f===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,U=S.pathname,A=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(U=U.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&R&&(A=Yi(A,R)||A);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=U===_||!l&&U.startsWith(_)&&U.charAt(N)==="/",H=A!=null&&(A===_||!l&&A.startsWith(_)&&A.charAt(_.length)==="/"),I={isActive:F,isPending:H,isTransitioning:v},ne=F?e:void 0,xe;typeof s=="function"?xe=s(I):xe=[s,F?"active":null,H?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(I):u;return he.createElement(ju,{...m,"aria-current":ne,className:xe,ref:g,style:w,to:d,viewTransition:f},typeof p=="function"?p(I):p)});xs.displayName="NavLink";var Zy=he.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:d=Nu,action:f,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,...S},M)=>{let E=eM(),R=tM(f,{relative:m}),v=d.toLowerCase()==="get"?"get":"post",_=typeof f=="string"&&Iv.test(f),U=A=>{if(p&&p(A),A.defaultPrevented)return;A.preventDefault();let N=A.nativeEvent.submitter,F=(N==null?void 0:N.getAttribute("formmethod"))||d;E(N||A.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:x})};return he.createElement("form",{ref:M,method:v,action:R,onSubmit:s?p:U,...S,"data-discover":!_&&r==="render"?"true":void 0})});Zy.displayName="Form";function Ky(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fv(r){let e=he.useContext(Ds);return Xt(e,Ky(r)),e}function Qy(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:d}={}){let f=uy(),p=Ia(),m=Zo(r,{relative:u});return he.useCallback(g=>{if(Dy(g,e)){g.preventDefault();let x=i!==void 0?i:ko(p)===ko(m);f(r,{replace:x,state:s,preventScrollReset:l,relative:u,viewTransition:d})}},[p,f,m,i,s,e,r,l,u,d])}var Jy=0,$y=()=>`__${String(++Jy)}__`;function eM(){let{router:r}=Fv("useSubmit"),{basename:e}=he.useContext(yi),i=Sy();return he.useCallback(async(s,l={})=>{let{action:u,method:d,encType:f,formData:p,body:m}=Ny(s,e);if(l.navigate===!1){let g=l.fetcherKey||$y();await r.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||d,formEncType:l.encType||f,flushSync:l.flushSync})}else await r.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||d,formEncType:l.encType||f,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function tM(r,{relative:e}={}){let{basename:i}=he.useContext(yi),s=he.useContext(Ki);Xt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...Zo(r||".",{relative:e})},d=Ia();if(r==null){u.search=d.search;let f=new URLSearchParams(u.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let g=f.toString();u.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:qi([i,u.pathname])),ko(u)}function nM(r,e={}){let i=he.useContext(Dv);Xt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Fv("useViewTransitionState"),l=Zo(r,{relative:e.relative});if(!i.isTransitioning)return!1;let u=Yi(i.currentLocation.pathname,s)||i.currentLocation.pathname,d=Yi(i.nextLocation.pathname,s)||i.nextLocation.pathname;return zu(l.pathname,d)!=null||zu(l.pathname,u)!=null}new TextEncoder;const iM=()=>{const r=he.useRef(null),e=he.useRef(null),i=Ia();return he.useEffect(()=>{var d;const s=r.current,{pathname:l}=i;if(l==="/resume"||l==="/email"){s&&(s.style.opacity="0",s.style.width="0");return}const u=(d=e.current)==null?void 0:d.querySelector(".nav-link.active");if(u&&s){const{offsetLeft:f,offsetWidth:p}=u;s.style.left=`${f}px`,s.style.width=`${p}px`,s.style.opacity="1"}},[i]),L.jsxs("nav",{className:"nav",children:[L.jsxs("div",{className:"nav-left",ref:e,children:[L.jsx("div",{className:"nav-highlight",ref:r}),L.jsx(xs,{to:"/",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"LD"}),L.jsx(xs,{to:"/projects",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"Projects"}),L.jsx(xs,{to:"/about",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"About"})]}),L.jsxs("div",{className:"nav-right",children:[L.jsx("div",{className:"nav-right__resume",children:L.jsx(xs,{to:"/resume",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"RESUME"})}),L.jsx("div",{className:"nav-right__email",children:L.jsx(xs,{to:"/email",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"Email"})})]})]})};function aM(){return new Date().getFullYear()}aM();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="162",rM=0,$g=1,sM=2,Hv=1,oM=2,Vi=3,za=0,Pn=1,ki=2,Ua=0,Es=1,e_=2,t_=3,n_=4,lM=5,mr=100,uM=101,cM=102,i_=103,a_=104,fM=200,hM=201,dM=202,pM=203,Vh=204,kh=205,mM=206,gM=207,_M=208,vM=209,xM=210,SM=211,yM=212,MM=213,EM=214,TM=0,bM=1,AM=2,Bu=3,RM=4,wM=5,CM=6,DM=7,Gv=0,LM=1,UM=2,Na=0,NM=1,OM=2,PM=3,zM=4,BM=5,IM=6,FM=7,Vv=300,bs=301,As=302,Wh=303,Xh=304,qu=306,jh=1e3,ui=1001,qh=1002,Rn=1003,r_=1004,zo=1005,On=1006,lh=1007,_r=1008,Oa=1009,HM=1010,GM=1011,rd=1012,kv=1013,La=1014,Wi=1015,Wo=1016,Wv=1017,Xv=1018,vr=1020,VM=1021,ci=1023,kM=1024,WM=1025,xr=1026,Rs=1027,XM=1028,jv=1029,jM=1030,qv=1031,Yv=1033,uh=33776,ch=33777,fh=33778,hh=33779,s_=35840,o_=35841,l_=35842,u_=35843,Zv=36196,c_=37492,f_=37496,h_=37808,d_=37809,p_=37810,m_=37811,g_=37812,__=37813,v_=37814,x_=37815,S_=37816,y_=37817,M_=37818,E_=37819,T_=37820,b_=37821,dh=36492,A_=36494,R_=36495,qM=36283,w_=36284,C_=36285,D_=36286,YM=3200,ZM=3201,KM=0,QM=1,Da="",gi="srgb",Fa="srgb-linear",sd="display-p3",Yu="display-p3-linear",Iu="linear",Gt="srgb",Fu="rec709",Hu="p3",is=7680,L_=519,JM=512,$M=513,eE=514,Kv=515,tE=516,nE=517,iE=518,aE=519,U_=35044,N_="300 es",Yh=1035,Xi=2e3,Gu=2001;class Ls{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let O_=1234567;const Go=Math.PI/180,Xo=180/Math.PI;function Us(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[i&63|128]+Mn[i>>8&255]+"-"+Mn[i>>16&255]+Mn[i>>24&255]+Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]).toLowerCase()}function wn(r,e,i){return Math.max(e,Math.min(i,r))}function od(r,e){return(r%e+e)%e}function rE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function sE(r,e,i){return r!==e?(i-r)/(e-r):0}function Vo(r,e,i){return(1-i)*r+i*e}function oE(r,e,i,s){return Vo(r,e,1-Math.exp(-i*s))}function lE(r,e=1){return e-Math.abs(od(r,e*2)-e)}function uE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function cE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function fE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function hE(r,e){return r+Math.random()*(e-r)}function dE(r){return r*(.5-Math.random())}function pE(r){r!==void 0&&(O_=r);let e=O_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mE(r){return r*Go}function gE(r){return r*Xo}function Zh(r){return(r&r-1)===0&&r!==0}function _E(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vE(r,e,i,s,l){const u=Math.cos,d=Math.sin,f=u(i/2),p=d(i/2),m=u((e+s)/2),g=d((e+s)/2),x=u((e-s)/2),S=d((e-s)/2),M=u((s-e)/2),E=d((s-e)/2);switch(l){case"XYX":r.set(f*g,p*x,p*S,f*m);break;case"YZY":r.set(p*S,f*g,p*x,f*m);break;case"ZXZ":r.set(p*x,p*S,f*g,f*m);break;case"XZX":r.set(f*g,p*E,p*M,f*m);break;case"YXY":r.set(p*M,f*g,p*E,f*m);break;case"ZYZ":r.set(p*E,p*M,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ss(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ph={DEG2RAD:Go,RAD2DEG:Xo,generateUUID:Us,clamp:wn,euclideanModulo:od,mapLinear:rE,inverseLerp:sE,lerp:Vo,damp:oE,pingpong:lE,smoothstep:uE,smootherstep:cE,randInt:fE,randFloat:hE,randFloatSpread:dE,seededRandom:pE,degToRad:mE,radToDeg:gE,isPowerOfTwo:Zh,ceilPowerOfTwo:_E,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:vE,normalize:bn,denormalize:Ss};class Tt{constructor(e=0,i=0){Tt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,i,s,l,u,d,f,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,f,p,m)}set(e,i,s,l,u,d,f,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=f,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],f=s[3],p=s[6],m=s[1],g=s[4],x=s[7],S=s[2],M=s[5],E=s[8],R=l[0],v=l[3],_=l[6],U=l[1],A=l[4],N=l[7],F=l[2],H=l[5],I=l[8];return u[0]=d*R+f*U+p*F,u[3]=d*v+f*A+p*H,u[6]=d*_+f*N+p*I,u[1]=m*R+g*U+x*F,u[4]=m*v+g*A+x*H,u[7]=m*_+g*N+x*I,u[2]=S*R+M*U+E*F,u[5]=S*v+M*A+E*H,u[8]=S*_+M*N+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*f*m-s*u*g+s*f*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],x=g*d-f*m,S=f*p-g*u,M=m*u-d*p,E=i*x+s*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=x*R,e[1]=(l*m-g*s)*R,e[2]=(f*s-l*d)*R,e[3]=S*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-f*i)*R,e[6]=M*R,e[7]=(s*p-m*i)*R,e[8]=(d*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,f){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*d+m*f)+d+e,-l*m,l*p,-l*(-m*d+p*f)+f+i,0,0,1),this}scale(e,i){return this.premultiply(mh.makeScale(e,i)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,i){return this.premultiply(mh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new ft;function Qv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ku(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xE(){const r=ku("canvas");return r.style.display="block",r}const P_={};function SE(r){r in P_||(P_[r]=!0,console.warn(r))}const z_=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),B_=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uu={[Fa]:{transfer:Iu,primaries:Fu,toReference:r=>r,fromReference:r=>r},[gi]:{transfer:Gt,primaries:Fu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Yu]:{transfer:Iu,primaries:Hu,toReference:r=>r.applyMatrix3(B_),fromReference:r=>r.applyMatrix3(z_)},[sd]:{transfer:Gt,primaries:Hu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(B_),fromReference:r=>r.applyMatrix3(z_).convertLinearToSRGB()}},yE=new Set([Fa,Yu]),Ut={enabled:!0,_workingColorSpace:Fa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!yE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,i){if(this.enabled===!1||e===i||!e||!i)return r;const s=uu[e].toReference,l=uu[i].fromReference;return l(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return uu[r].primaries},getTransfer:function(r){return r===Da?Iu:uu[r].transfer}};function Ts(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=ku("canvas")),as.width=e.width,as.height=e.height;const s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ku("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ts(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ts(i[s]/255)*255):i[s]=Ts(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class $v{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?u.push(_h(l[d].image)):u.push(_h(l[d]))}else u=_h(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function _h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EE=0;class zn extends Ls{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=ui,l=ui,u=On,d=_r,f=ci,p=Oa,m=zn.DEFAULT_ANISOTROPY,g=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Us(),this.name="",this.source=new $v(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Vv;zn.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,i=0,s=0,l=1){vn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,m=p[0],g=p[4],x=p[8],S=p[1],M=p[5],E=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(x-R)<.01&&Math.abs(E-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+R)<.1&&Math.abs(E+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const A=(m+1)/2,N=(M+1)/2,F=(_+1)/2,H=(g+S)/4,I=(x+R)/4,ne=(E+v)/4;return A>N&&A>F?A<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(A),l=H/s,u=I/s):N>F?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=H/l,u=ne/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=I/u,l=ne/u),this.set(s,l,u,i),this}let U=Math.sqrt((v-E)*(v-E)+(x-R)*(x-R)+(S-g)*(S-g));return Math.abs(U)<.001&&(U=1),this.x=(v-E)/U,this.y=(x-R)/U,this.z=(S-g)/U,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TE extends Ls{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},s);const u=new zn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new $v(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends TE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class e0 extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bE extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,f){let p=s[l+0],m=s[l+1],g=s[l+2],x=s[l+3];const S=u[d+0],M=u[d+1],E=u[d+2],R=u[d+3];if(f===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x;return}if(f===1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=R;return}if(x!==R||p!==S||m!==M||g!==E){let v=1-f;const _=p*S+m*M+g*E+x*R,U=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const F=Math.sqrt(A),H=Math.atan2(F,_*U);v=Math.sin(v*H)/F,f=Math.sin(f*H)/F}const N=f*U;if(p=p*v+S*N,m=m*v+M*N,g=g*v+E*N,x=x*v+R*N,v===1-f){const F=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=F,m*=F,g*=F,x*=F}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const f=s[l],p=s[l+1],m=s[l+2],g=s[l+3],x=u[d],S=u[d+1],M=u[d+2],E=u[d+3];return e[i]=f*E+g*x+p*M-m*S,e[i+1]=p*E+g*S+m*x-f*M,e[i+2]=m*E+g*M+f*S-p*x,e[i+3]=g*E-f*x-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(s/2),g=f(l/2),x=f(u/2),S=p(s/2),M=p(l/2),E=p(u/2);switch(d){case"XYZ":this._x=S*g*x+m*M*E,this._y=m*M*x-S*g*E,this._z=m*g*E+S*M*x,this._w=m*g*x-S*M*E;break;case"YXZ":this._x=S*g*x+m*M*E,this._y=m*M*x-S*g*E,this._z=m*g*E-S*M*x,this._w=m*g*x+S*M*E;break;case"ZXY":this._x=S*g*x-m*M*E,this._y=m*M*x+S*g*E,this._z=m*g*E+S*M*x,this._w=m*g*x-S*M*E;break;case"ZYX":this._x=S*g*x-m*M*E,this._y=m*M*x+S*g*E,this._z=m*g*E-S*M*x,this._w=m*g*x+S*M*E;break;case"YZX":this._x=S*g*x+m*M*E,this._y=m*M*x+S*g*E,this._z=m*g*E-S*M*x,this._w=m*g*x-S*M*E;break;case"XZY":this._x=S*g*x-m*M*E,this._y=m*M*x-S*g*E,this._z=m*g*E+S*M*x,this._w=m*g*x+S*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],f=i[5],p=i[9],m=i[2],g=i[6],x=i[10],S=s+f+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(s>f&&s>x){const M=2*Math.sqrt(1+s-f-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(f>x){const M=2*Math.sqrt(1+f-s-x);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-s-f);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,f=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+d*f+l*m-u*p,this._y=l*g+d*p+u*f-s*m,this._z=u*g+d*m+s*p-l*f,this._w=d*g-s*f-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let f=d*e._w+s*e._x+l*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,f),x=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=d*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(I_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(I_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*l-f*s),g=2*(f*i-u*l),x=2*(u*s-d*i);return this.x=i+p*m+d*x-f*g,this.y=s+p*g+f*m-u*x,this.z=l+p*x+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,f=i.y,p=i.z;return this.x=l*p-u*f,this.y=u*d-s*p,this.z=s*f-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new re,I_=new Ko;class Qo{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,si):si.fromBufferAttribute(u,d),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cu.copy(s.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),fu.subVectors(this.max,Bo),rs.subVectors(e.a,Bo),ss.subVectors(e.b,Bo),os.subVectors(e.c,Bo),Ta.subVectors(ss,rs),ba.subVectors(os,ss),sr.subVectors(rs,os);let i=[0,-Ta.z,Ta.y,0,-ba.z,ba.y,0,-sr.z,sr.y,Ta.z,0,-Ta.x,ba.z,0,-ba.x,sr.z,0,-sr.x,-Ta.y,Ta.x,0,-ba.y,ba.x,0,-sr.y,sr.x,0];return!xh(i,rs,ss,os,fu)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,rs,ss,os,fu))?!1:(hu.crossVectors(Ta,ba),i=[hu.x,hu.y,hu.z],xh(i,rs,ss,os,fu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new re,new re,new re,new re,new re,new re,new re,new re],si=new re,cu=new Qo,rs=new re,ss=new re,os=new re,Ta=new re,ba=new re,sr=new re,Bo=new re,fu=new re,hu=new re,or=new re;function xh(r,e,i,s,l){for(let u=0,d=r.length-3;u<=d;u+=3){or.fromArray(r,u);const f=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),p=e.dot(or),m=i.dot(or),g=s.dot(or);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const AE=new Qo,Io=new re,Sh=new re;class Zu{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):AE.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Sh)),this.expandByPoint(Io.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new re,yh=new re,du=new re,Aa=new re,Mh=new re,pu=new re,Eh=new re;class t0{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ii.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,i),Ii.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){yh.copy(e).add(i).multiplyScalar(.5),du.copy(i).sub(e).normalize(),Aa.copy(this.origin).sub(yh);const u=e.distanceTo(i)*.5,d=-this.direction.dot(du),f=Aa.dot(this.direction),p=-Aa.dot(du),m=Aa.lengthSq(),g=Math.abs(1-d*d);let x,S,M,E;if(g>0)if(x=d*p-f,S=d*f-p,E=u*g,x>=0)if(S>=-E)if(S<=E){const R=1/g;x*=R,S*=R,M=x*(x+d*S+2*f)+S*(d*x+S+2*p)+m}else S=u,x=Math.max(0,-(d*S+f)),M=-x*x+S*(S+2*p)+m;else S=-u,x=Math.max(0,-(d*S+f)),M=-x*x+S*(S+2*p)+m;else S<=-E?(x=Math.max(0,-(-d*u+f)),S=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m):S<=E?(x=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(x=Math.max(0,-(d*u+f)),S=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m);else S=d>0?-u:u,x=Math.max(0,-(d*S+f)),M=-x*x+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(yh).addScaledVector(du,S),M}intersectSphere(e,i){Ii.subVectors(e.center,this.origin);const s=Ii.dot(this.direction),l=Ii.dot(Ii)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),f=s-d,p=s+d;return p<0?null:f<0?this.at(p,i):this.at(f,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,f,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,d=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,d=(e.min.y-S.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(f=(e.min.z-S.z)*x,p=(e.max.z-S.z)*x):(f=(e.max.z-S.z)*x,p=(e.min.z-S.z)*x),s>p||f>l)||((f>s||s!==s)&&(s=f),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,i,s,l,u){Mh.subVectors(i,e),pu.subVectors(s,e),Eh.crossVectors(Mh,pu);let d=this.direction.dot(Eh),f;if(d>0){if(l)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Aa.subVectors(this.origin,e);const p=f*this.direction.dot(pu.crossVectors(Aa,pu));if(p<0)return null;const m=f*this.direction.dot(Mh.cross(Aa));if(m<0||p+m>d)return null;const g=-f*Aa.dot(Eh);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,s,l,u,d,f,p,m,g,x,S,M,E,R,v){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,f,p,m,g,x,S,M,E,R,v)}set(e,i,s,l,u,d,f,p,m,g,x,S,M,E,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=S,_[3]=M,_[7]=E,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),d=1/ls.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),f=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=d*g,M=d*x,E=f*g,R=f*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+E*m,i[5]=S-R*m,i[9]=-f*p,i[2]=R-S*m,i[6]=E+M*m,i[10]=d*p}else if(e.order==="YXZ"){const S=p*g,M=p*x,E=m*g,R=m*x;i[0]=S+R*f,i[4]=E*f-M,i[8]=d*m,i[1]=d*x,i[5]=d*g,i[9]=-f,i[2]=M*f-E,i[6]=R+S*f,i[10]=d*p}else if(e.order==="ZXY"){const S=p*g,M=p*x,E=m*g,R=m*x;i[0]=S-R*f,i[4]=-d*x,i[8]=E+M*f,i[1]=M+E*f,i[5]=d*g,i[9]=R-S*f,i[2]=-d*m,i[6]=f,i[10]=d*p}else if(e.order==="ZYX"){const S=d*g,M=d*x,E=f*g,R=f*x;i[0]=p*g,i[4]=E*m-M,i[8]=S*m+R,i[1]=p*x,i[5]=R*m+S,i[9]=M*m-E,i[2]=-m,i[6]=f*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,E=f*p,R=f*m;i[0]=p*g,i[4]=R-S*x,i[8]=E*x+M,i[1]=x,i[5]=d*g,i[9]=-f*g,i[2]=-m*g,i[6]=M*x+E,i[10]=S-R*x}else if(e.order==="XZY"){const S=d*p,M=d*m,E=f*p,R=f*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=S*x+R,i[5]=d*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=f*g,i[10]=R*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,wE)}lookAt(e,i,s){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ra.crossVectors(s,Xn),Ra.lengthSq()===0&&(Math.abs(s.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ra.crossVectors(s,Xn)),Ra.normalize(),mu.crossVectors(Xn,Ra),l[0]=Ra.x,l[4]=mu.x,l[8]=Xn.x,l[1]=Ra.y,l[5]=mu.y,l[9]=Xn.y,l[2]=Ra.z,l[6]=mu.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],f=s[4],p=s[8],m=s[12],g=s[1],x=s[5],S=s[9],M=s[13],E=s[2],R=s[6],v=s[10],_=s[14],U=s[3],A=s[7],N=s[11],F=s[15],H=l[0],I=l[4],ne=l[8],xe=l[12],w=l[1],z=l[5],ye=l[9],Me=l[13],V=l[2],ce=l[6],P=l[10],Y=l[14],Z=l[3],oe=l[7],D=l[11],X=l[15];return u[0]=d*H+f*w+p*V+m*Z,u[4]=d*I+f*z+p*ce+m*oe,u[8]=d*ne+f*ye+p*P+m*D,u[12]=d*xe+f*Me+p*Y+m*X,u[1]=g*H+x*w+S*V+M*Z,u[5]=g*I+x*z+S*ce+M*oe,u[9]=g*ne+x*ye+S*P+M*D,u[13]=g*xe+x*Me+S*Y+M*X,u[2]=E*H+R*w+v*V+_*Z,u[6]=E*I+R*z+v*ce+_*oe,u[10]=E*ne+R*ye+v*P+_*D,u[14]=E*xe+R*Me+v*Y+_*X,u[3]=U*H+A*w+N*V+F*Z,u[7]=U*I+A*z+N*ce+F*oe,u[11]=U*ne+A*ye+N*P+F*D,u[15]=U*xe+A*Me+N*Y+F*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],f=e[5],p=e[9],m=e[13],g=e[2],x=e[6],S=e[10],M=e[14],E=e[3],R=e[7],v=e[11],_=e[15];return E*(+u*p*x-l*m*x-u*f*S+s*m*S+l*f*M-s*p*M)+R*(+i*p*M-i*m*S+u*d*S-l*d*M+l*m*g-u*p*g)+v*(+i*m*x-i*f*M-u*d*x+s*d*M+u*f*g-s*m*g)+_*(-l*f*g-i*p*x+i*f*S+l*d*x-s*d*S+s*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],x=e[9],S=e[10],M=e[11],E=e[12],R=e[13],v=e[14],_=e[15],U=x*v*m-R*S*m+R*p*M-f*v*M-x*p*_+f*S*_,A=E*S*m-g*v*m-E*p*M+d*v*M+g*p*_-d*S*_,N=g*R*m-E*x*m+E*f*M-d*R*M-g*f*_+d*x*_,F=E*x*p-g*R*p-E*f*S+d*R*S+g*f*v-d*x*v,H=i*U+s*A+l*N+u*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return e[0]=U*I,e[1]=(R*S*u-x*v*u-R*l*M+s*v*M+x*l*_-s*S*_)*I,e[2]=(f*v*u-R*p*u+R*l*m-s*v*m-f*l*_+s*p*_)*I,e[3]=(x*p*u-f*S*u-x*l*m+s*S*m+f*l*M-s*p*M)*I,e[4]=A*I,e[5]=(g*v*u-E*S*u+E*l*M-i*v*M-g*l*_+i*S*_)*I,e[6]=(E*p*u-d*v*u-E*l*m+i*v*m+d*l*_-i*p*_)*I,e[7]=(d*S*u-g*p*u+g*l*m-i*S*m-d*l*M+i*p*M)*I,e[8]=N*I,e[9]=(E*x*u-g*R*u-E*s*M+i*R*M+g*s*_-i*x*_)*I,e[10]=(d*R*u-E*f*u+E*s*m-i*R*m-d*s*_+i*f*_)*I,e[11]=(g*f*u-d*x*u-g*s*m+i*x*m+d*s*M-i*f*M)*I,e[12]=F*I,e[13]=(g*R*l-E*x*l+E*s*S-i*R*S-g*s*v+i*x*v)*I,e[14]=(E*f*l-d*R*l-E*s*p+i*R*p+d*s*v-i*f*v)*I,e[15]=(d*x*l-g*f*l+g*s*p-i*x*p-d*s*S+i*f*S)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,f=e.y,p=e.z,m=u*d,g=u*f;return this.set(m*d+s,m*f-l*p,m*p+l*f,0,m*f+l*p,g*f+s,g*p-l*d,0,m*p-l*f,g*p+l*d,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,f=i._z,p=i._w,m=u+u,g=d+d,x=f+f,S=u*m,M=u*g,E=u*x,R=d*g,v=d*x,_=f*x,U=p*m,A=p*g,N=p*x,F=s.x,H=s.y,I=s.z;return l[0]=(1-(R+_))*F,l[1]=(M+N)*F,l[2]=(E-A)*F,l[3]=0,l[4]=(M-N)*H,l[5]=(1-(S+_))*H,l[6]=(v+U)*H,l[7]=0,l[8]=(E+A)*I,l[9]=(v-U)*I,l[10]=(1-(S+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const d=ls.set(l[4],l[5],l[6]).length(),f=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],oi.copy(this);const m=1/u,g=1/d,x=1/f;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=x,oi.elements[9]*=x,oi.elements[10]*=x,i.setFromRotationMatrix(oi),s.x=u,s.y=d,s.z=f,this}makePerspective(e,i,s,l,u,d,f=Xi){const p=this.elements,m=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let M,E;if(f===Xi)M=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(f===Gu)M=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,d,f=Xi){const p=this.elements,m=1/(i-e),g=1/(s-l),x=1/(d-u),S=(i+e)*m,M=(s+l)*g;let E,R;if(f===Xi)E=(d+u)*x,R=-2*x;else if(f===Gu)E=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ls=new re,oi=new an,RE=new re(0,0,0),wE=new re(1,1,1),Ra=new re,mu=new re,Xn=new re,F_=new an,H_=new Ko;class Zi{constructor(e=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-wn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return F_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return H_.setFromEuler(this),this.setFromQuaternion(H_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class n0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CE=0;const G_=new re,us=new Ko,Fi=new an,gu=new re,Fo=new re,DE=new re,LE=new Ko,V_=new re(1,0,0),k_=new re(0,1,0),W_=new re(0,0,1),UE={type:"added"},NE={type:"removed"},Th={type:"childadded",child:null},bh={type:"childremoved",child:null};class Bn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new re,i=new Zi,s=new Ko,l=new re(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ft}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(V_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(W_,e)}translateOnAxis(e,i){return G_.copy(e).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(V_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(W_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?gu.copy(e):gu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Fo,gu,this.up):Fi.lookAt(gu,Fo,this.up),this.quaternion.setFromRotationMatrix(Fi),l&&(Fi.extractRotation(l.matrixWorld),us.setFromRotationMatrix(Fi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(UE),Th.child=e,this.dispatchEvent(Th),Th.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(NE),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,DE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,LE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const u=i[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const f=l[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(u(e.materials,this.material[p]));l.material=f}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];l.animations.push(u(e.animations,p))}}if(i){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),x=d(e.shapes),S=d(e.skeletons),M=d(e.animations),E=d(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new re(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new re,Hi=new re,Ah=new re,Gi=new re,cs=new re,fs=new re,X_=new re,Rh=new re,wh=new re,Ch=new re;class vi{constructor(e=new re,i=new re,s=new re){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),li.subVectors(e,i),l.cross(li);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){li.subVectors(l,i),Hi.subVectors(s,i),Ah.subVectors(e,i);const d=li.dot(li),f=li.dot(Hi),p=li.dot(Ah),m=Hi.dot(Hi),g=Hi.dot(Ah),x=d*m-f*f;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(m*p-f*g)*S,E=(d*g-f*p)*S;return u.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,i,s,l,u,d,f,p){return this.getBarycoord(e,i,s,l,Gi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Gi.x),p.addScaledVector(d,Gi.y),p.addScaledVector(f,Gi.z),p)}static isFrontFacing(e,i,s,l){return li.subVectors(s,i),Hi.subVectors(e,i),li.cross(Hi).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,f;cs.subVectors(l,s),fs.subVectors(u,s),Rh.subVectors(e,s);const p=cs.dot(Rh),m=fs.dot(Rh);if(p<=0&&m<=0)return i.copy(s);wh.subVectors(e,l);const g=cs.dot(wh),x=fs.dot(wh);if(g>=0&&x<=g)return i.copy(l);const S=p*x-g*m;if(S<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(s).addScaledVector(cs,d);Ch.subVectors(e,u);const M=cs.dot(Ch),E=fs.dot(Ch);if(E>=0&&M<=E)return i.copy(u);const R=M*m-p*E;if(R<=0&&m>=0&&E<=0)return f=m/(m-E),i.copy(s).addScaledVector(fs,f);const v=g*E-M*x;if(v<=0&&x-g>=0&&M-E>=0)return X_.subVectors(u,l),f=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(X_,f);const _=1/(v+R+S);return d=R*_,f=S*_,i.copy(s).addScaledVector(cs,d).addScaledVector(fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Dh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class wt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ut.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ut.workingColorSpace){if(e=od(e,1),i=wn(i,0,1),s=wn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Dh(d,u,e+1/3),this.g=Dh(d,u,e),this.b=Dh(d,u,e-1/3)}return Ut.toWorkingColorSpace(this,l),this}setStyle(e,i=gi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const s=i0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=gh(e.r),this.g=gh(e.g),this.b=gh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Ut.fromWorkingColorSpace(En.copy(this),e),Math.round(wn(En.r*255,0,255))*65536+Math.round(wn(En.g*255,0,255))*256+Math.round(wn(En.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.fromWorkingColorSpace(En.copy(this),i);const s=En.r,l=En.g,u=En.b,d=Math.max(s,l,u),f=Math.min(s,l,u);let p,m;const g=(f+d)/2;if(f===d)p=0,m=0;else{const x=d-f;switch(m=g<=.5?x/(d+f):x/(2-d-f),d){case s:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-s)/x+2;break;case u:p=(s-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=gi){Ut.fromWorkingColorSpace(En.copy(this),e);const i=En.r,s=En.g,l=En.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL(_u);const s=Vo(wa.h,_u.h,i),l=Vo(wa.s,_u.s,i),u=Vo(wa.l,_u.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new wt;wt.NAMES=i0;let OE=0;class Jo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Es,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Bu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(s.blending=this.blending),this.side!==za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==mr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bu&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class a0 extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new re,vu=new Tt;class xi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=U_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return SE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(e),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ss(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=bn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ss(i,this.array)),i}setX(e,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ss(i,this.array)),i}setY(e,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ss(i,this.array)),i}setZ(e,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ss(i,this.array)),i}setW(e,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=bn(i,this.array),s=bn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=bn(i,this.array),s=bn(s,this.array),l=bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=bn(i,this.array),s=bn(s,this.array),l=bn(l,this.array),u=bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U_&&(e.usage=this.usage),e}}class r0 extends xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class s0 extends xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Pa extends xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let PE=0;const ti=new an,Lh=new Bn,hs=new re,jn=new Qo,Ho=new Qo,dn=new re;class Qi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?s0:r0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ft().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,i,s){return ti.makeTranslation(e,i,s),this.applyMatrix4(ti),this}scale(e,i,s){return ti.makeScale(e,i,s),this.applyMatrix4(ti),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Pa(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const f=i[u];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(dn.addVectors(jn.min,Ho.min),jn.expandByPoint(dn),dn.addVectors(jn.max,Ho.max),jn.expandByPoint(dn)):(jn.expandByPoint(Ho.min),jn.expandByPoint(Ho.max))}jn.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(dn));if(i)for(let u=0,d=i.length;u<d;u++){const f=i[u],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)dn.fromBufferAttribute(f,m),p&&(hs.fromBufferAttribute(e,m),dn.add(hs)),l=Math.max(l,s.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let ne=0;ne<s.count;ne++)f[ne]=new re,p[ne]=new re;const m=new re,g=new re,x=new re,S=new Tt,M=new Tt,E=new Tt,R=new re,v=new re;function _(ne,xe,w){m.fromBufferAttribute(s,ne),g.fromBufferAttribute(s,xe),x.fromBufferAttribute(s,w),S.fromBufferAttribute(u,ne),M.fromBufferAttribute(u,xe),E.fromBufferAttribute(u,w),g.sub(m),x.sub(m),M.sub(S),E.sub(S);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(z),v.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(z),f[ne].add(R),f[xe].add(R),f[w].add(R),p[ne].add(v),p[xe].add(v),p[w].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let ne=0,xe=U.length;ne<xe;++ne){const w=U[ne],z=w.start,ye=w.count;for(let Me=z,V=z+ye;Me<V;Me+=3)_(e.getX(Me+0),e.getX(Me+1),e.getX(Me+2))}const A=new re,N=new re,F=new re,H=new re;function I(ne){F.fromBufferAttribute(l,ne),H.copy(F);const xe=f[ne];A.copy(xe),A.sub(F.multiplyScalar(F.dot(xe))).normalize(),N.crossVectors(H,xe);const z=N.dot(p[ne])<0?-1:1;d.setXYZW(ne,A.x,A.y,A.z,z)}for(let ne=0,xe=U.length;ne<xe;++ne){const w=U[ne],z=w.start,ye=w.count;for(let Me=z,V=z+ye;Me<V;Me+=3)I(e.getX(Me+0)),I(e.getX(Me+1)),I(e.getX(Me+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,f=new re,p=new re,m=new re,g=new re,x=new re;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),R=e.getX(S+1),v=e.getX(S+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,v),f.add(g),p.add(g),m.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(v,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(f,p){const m=f.array,g=f.itemSize,x=f.normalized,S=new m.constructor(p.length*g);let M=0,E=0;for(let R=0,v=p.length;R<v;R++){f.isInterleavedBufferAttribute?M=p[R]*f.data.stride+f.offset:M=p[R]*g;for(let _=0;_<g;_++)S[E++]=m[M++]}return new xi(S,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,s=this.index.array,l=this.attributes;for(const f in l){const p=l[f],m=e(p,s);i.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const p=[],m=u[f];for(let g=0,x=m.length;g<x;g++){const S=m[g],M=e(S,s);p.push(M)}i.morphAttributes[f]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,S=m.length;x<S;x++){const M=m[x];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],x=u[m];for(let S=0,M=x.length;S<M;S++)g.push(x[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j_=new an,lr=new t0,xu=new Zu,q_=new re,ds=new re,ps=new re,ms=new re,Uh=new re,Su=new re,yu=new Tt,Mu=new Tt,Eu=new Tt,Y_=new re,Z_=new re,K_=new re,Tu=new re,bu=new re;class ji extends Bn{constructor(e=new Qi,i=new a0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const f=this.morphTargetInfluences;if(u&&f){Su.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=f[p],x=u[p];g!==0&&(Uh.fromBufferAttribute(x,e),d?Su.addScaledVector(Uh,g):Su.addScaledVector(Uh.sub(i),g))}i.add(Su)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xu.copy(s.boundingSphere),xu.applyMatrix4(u),lr.copy(e.ray).recast(e.near),!(xu.containsPoint(lr.origin)===!1&&(lr.intersectSphere(xu,q_)===null||lr.origin.distanceToSquared(q_)>(e.far-e.near)**2))&&(j_.copy(u).invert(),lr.copy(e.ray).applyMatrix4(j_),!(s.boundingBox!==null&&lr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,R=S.length;E<R;E++){const v=S[E],_=d[v.materialIndex],U=Math.max(v.start,M.start),A=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let N=U,F=A;N<F;N+=3){const H=f.getX(N),I=f.getX(N+1),ne=f.getX(N+2);l=Au(this,_,e,s,m,g,x,H,I,ne),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let v=E,_=R;v<_;v+=3){const U=f.getX(v),A=f.getX(v+1),N=f.getX(v+2);l=Au(this,d,e,s,m,g,x,U,A,N),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,R=S.length;E<R;E++){const v=S[E],_=d[v.materialIndex],U=Math.max(v.start,M.start),A=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let N=U,F=A;N<F;N+=3){const H=N,I=N+1,ne=N+2;l=Au(this,_,e,s,m,g,x,H,I,ne),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=E,_=R;v<_;v+=3){const U=v,A=v+1,N=v+2;l=Au(this,d,e,s,m,g,x,U,A,N),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function zE(r,e,i,s,l,u,d,f){let p;if(e.side===Pn?p=s.intersectTriangle(d,u,l,!0,f):p=s.intersectTriangle(l,u,d,e.side===za,f),p===null)return null;bu.copy(f),bu.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(bu);return m<i.near||m>i.far?null:{distance:m,point:bu.clone(),object:r}}function Au(r,e,i,s,l,u,d,f,p,m){r.getVertexPosition(f,ds),r.getVertexPosition(p,ps),r.getVertexPosition(m,ms);const g=zE(r,e,i,s,ds,ps,ms,Tu);if(g){l&&(yu.fromBufferAttribute(l,f),Mu.fromBufferAttribute(l,p),Eu.fromBufferAttribute(l,m),g.uv=vi.getInterpolation(Tu,ds,ps,ms,yu,Mu,Eu,new Tt)),u&&(yu.fromBufferAttribute(u,f),Mu.fromBufferAttribute(u,p),Eu.fromBufferAttribute(u,m),g.uv1=vi.getInterpolation(Tu,ds,ps,ms,yu,Mu,Eu,new Tt)),d&&(Y_.fromBufferAttribute(d,f),Z_.fromBufferAttribute(d,p),K_.fromBufferAttribute(d,m),g.normal=vi.getInterpolation(Tu,ds,ps,ms,Y_,Z_,K_,new re),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new re,materialIndex:0};vi.getNormal(ds,ps,ms,x.normal),g.face=x}return g}class $o extends Qi{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const f=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],x=[];let S=0,M=0;E("z","y","x",-1,-1,s,i,e,d,u,0),E("z","y","x",1,-1,s,i,-e,d,u,1),E("x","z","y",1,1,e,s,i,l,d,2),E("x","z","y",1,-1,e,s,-i,l,d,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Pa(m,3)),this.setAttribute("normal",new Pa(g,3)),this.setAttribute("uv",new Pa(x,2));function E(R,v,_,U,A,N,F,H,I,ne,xe){const w=N/I,z=F/ne,ye=N/2,Me=F/2,V=H/2,ce=I+1,P=ne+1;let Y=0,Z=0;const oe=new re;for(let D=0;D<P;D++){const X=D*z-Me;for(let le=0;le<ce;le++){const me=le*w-ye;oe[R]=me*U,oe[v]=X*A,oe[_]=V,m.push(oe.x,oe.y,oe.z),oe[R]=0,oe[v]=0,oe[_]=H>0?1:-1,g.push(oe.x,oe.y,oe.z),x.push(le/I),x.push(1-D/ne),Y+=1}}for(let D=0;D<ne;D++)for(let X=0;X<I;X++){const le=S+X+ce*D,me=S+X+ce*(D+1),j=S+(X+1)+ce*(D+1),fe=S+(X+1)+ce*D;p.push(le,me,fe),p.push(me,j,fe),Z+=6}f.addGroup(M,Z,xe),M+=Z,S+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function An(r){const e={};for(let i=0;i<r.length;i++){const s=ws(r[i]);for(const l in s)e[l]=s[l]}return e}function BE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function o0(r){return r.getRenderTarget()===null?r.outputColorSpace:Ut.workingColorSpace}const IE={clone:ws,merge:An};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ba extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class l0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Xi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ca=new re,Q_=new Tt,J_=new Tt;class ni extends l0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ca.x,Ca.y).multiplyScalar(-e/Ca.z),Ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ca.x,Ca.y).multiplyScalar(-e/Ca.z)}getViewSize(e,i){return this.getViewBounds(e,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Go*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class GE extends Bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new ni(gs,_s,e,i);u.layers=this.layers,this.add(u);const d=new ni(gs,_s,e,i);d.layers=this.layers,this.add(d);const f=new ni(gs,_s,e,i);f.layers=this.layers,this.add(f);const p=new ni(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new ni(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,f,p]=i;for(const m of i)this.remove(m);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,m,g]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,f),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,S,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class u0 extends zn{constructor(e,i,s,l,u,d,f,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:bs,super(e,i,s,l,u,d,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VE extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new u0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:On}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $o(5,5,5),u=new Ba({name:"CubemapFromEquirect",uniforms:ws(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:Ua});u.uniforms.tEquirect.value=i;const d=new ji(l,u),f=i.minFilter;return i.minFilter===_r&&(i.minFilter=On),new GE(1,10,this).update(e,d),i.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const Nh=new re,kE=new re,WE=new ft;class dr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Nh.subVectors(s,i).cross(kE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||WE.getNormalMatrix(e),l=this.coplanarPoint(Nh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Zu,Ru=new re;class c0{constructor(e=new dr,i=new dr,s=new dr,l=new dr,u=new dr,d=new dr){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(i),f[2].copy(s),f[3].copy(l),f[4].copy(u),f[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi){const s=this.planes,l=e.elements,u=l[0],d=l[1],f=l[2],p=l[3],m=l[4],g=l[5],x=l[6],S=l[7],M=l[8],E=l[9],R=l[10],v=l[11],_=l[12],U=l[13],A=l[14],N=l[15];if(s[0].setComponents(p-u,S-m,v-M,N-_).normalize(),s[1].setComponents(p+u,S+m,v+M,N+_).normalize(),s[2].setComponents(p+d,S+g,v+E,N+U).normalize(),s[3].setComponents(p-d,S-g,v-E,N-U).normalize(),s[4].setComponents(p-f,S-x,v-R,N-A).normalize(),i===Xi)s[5].setComponents(p+f,S+x,v+R,N+A).normalize();else if(i===Gu)s[5].setComponents(f,x,R,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ru.x=l.normal.x>0?e.max.x:e.min.x,Ru.y=l.normal.y>0?e.max.y:e.min.y,Ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let r=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function XE(r,e){const i=e.isWebGL2,s=new WeakMap;function l(m,g){const x=m.array,S=m.usage,M=x.byteLength,E=r.createBuffer();r.bindBuffer(g,E),r.bufferData(g,x,S),m.onUploadCallback();let R;if(x instanceof Float32Array)R=r.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)R=r.SHORT;else if(x instanceof Uint32Array)R=r.UNSIGNED_INT;else if(x instanceof Int32Array)R=r.INT;else if(x instanceof Int8Array)R=r.BYTE;else if(x instanceof Uint8Array)R=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)R=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:E,type:R,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,x){const S=g.array,M=g._updateRange,E=g.updateRanges;if(r.bindBuffer(x,m),M.count===-1&&E.length===0&&r.bufferSubData(x,0,S),E.length!==0){for(let R=0,v=E.length;R<v;R++){const _=E[R];i?r.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):r.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?r.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):r.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(r.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=s.get(m);(!S||S.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=s.get(m);if(x===void 0)s.set(m,l(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,m,g),x.version=m.version}}return{get:d,remove:f,update:p}}class Ku extends Qi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,f=Math.floor(s),p=Math.floor(l),m=f+1,g=p+1,x=e/f,S=i/p,M=[],E=[],R=[],v=[];for(let _=0;_<g;_++){const U=_*S-d;for(let A=0;A<m;A++){const N=A*x-u;E.push(N,-U,0),R.push(0,0,1),v.push(A/f),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let U=0;U<f;U++){const A=U+m*_,N=U+m*(_+1),F=U+1+m*(_+1),H=U+1+m*_;M.push(A,N,H),M.push(N,F,H)}this.setIndex(M),this.setAttribute("position",new Pa(E,3)),this.setAttribute("normal",new Pa(R,3)),this.setAttribute("uv",new Pa(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.widthSegments,e.heightSegments)}}var jE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ET=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$b=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_A=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:jE,alphahash_pars_fragment:qE,alphamap_fragment:YE,alphamap_pars_fragment:ZE,alphatest_fragment:KE,alphatest_pars_fragment:QE,aomap_fragment:JE,aomap_pars_fragment:$E,batching_pars_vertex:eT,batching_vertex:tT,begin_vertex:nT,beginnormal_vertex:iT,bsdfs:aT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:lT,clipping_planes_pars_vertex:uT,clipping_planes_vertex:cT,color_fragment:fT,color_pars_fragment:hT,color_pars_vertex:dT,color_vertex:pT,common:mT,cube_uv_reflection_fragment:gT,defaultnormal_vertex:_T,displacementmap_pars_vertex:vT,displacementmap_vertex:xT,emissivemap_fragment:ST,emissivemap_pars_fragment:yT,colorspace_fragment:MT,colorspace_pars_fragment:ET,envmap_fragment:TT,envmap_common_pars_fragment:bT,envmap_pars_fragment:AT,envmap_pars_vertex:RT,envmap_physical_pars_fragment:FT,envmap_vertex:wT,fog_vertex:CT,fog_pars_vertex:DT,fog_fragment:LT,fog_pars_fragment:UT,gradientmap_pars_fragment:NT,lightmap_fragment:OT,lightmap_pars_fragment:PT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:BT,lights_pars_begin:IT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:VT,lights_phong_pars_fragment:kT,lights_physical_fragment:WT,lights_physical_pars_fragment:XT,lights_fragment_begin:jT,lights_fragment_maps:qT,lights_fragment_end:YT,logdepthbuf_fragment:ZT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:JT,map_fragment:$T,map_pars_fragment:eb,map_particle_fragment:tb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:ub,normal_fragment_begin:cb,normal_fragment_maps:fb,normal_pars_fragment:hb,normal_pars_vertex:db,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:Sb,packing:yb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:Tb,dithering_pars_fragment:bb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Db,shadowmask_pars_fragment:Lb,skinbase_vertex:Ub,skinning_pars_vertex:Nb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:zb,specularmap_pars_fragment:Bb,tonemapping_fragment:Ib,tonemapping_pars_fragment:Fb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Wb,worldpos_vertex:Xb,background_vert:jb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:Zb,cube_vert:Kb,cube_frag:Qb,depth_vert:Jb,depth_frag:$b,distanceRGBA_vert:eA,distanceRGBA_frag:tA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:uA,meshmatcap_vert:cA,meshmatcap_frag:fA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:SA,points_frag:yA,shadow_vert:MA,shadow_frag:EA,sprite_vert:TA,sprite_frag:bA},we={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},_i={basic:{uniforms:An([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:An([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:An([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:An([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:An([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:An([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:An([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:An([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:An([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:An([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:An([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:An([we.common,we.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:An([we.lights,we.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:An([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const wu={r:0,b:0,g:0},cr=new Zi,AA=new an;function RA(r,e,i,s,l,u,d){const f=new wt(0);let p=u===!0?0:1,m,g,x=null,S=0,M=null;function E(v,_){let U=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=(_.backgroundBlurriness>0?i:e).get(A)),A===null?R(f,p):A&&A.isColor&&(R(A,1),U=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||U)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===qu)?(g===void 0&&(g=new ji(new $o(1,1,1),new Ba({name:"BackgroundCubeMaterial",uniforms:ws(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,H,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(cr)),g.material.toneMapped=Ut.getTransfer(A.colorSpace)!==Gt,(x!==A||S!==A.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,x=A,S=A.version,M=r.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new ji(new Ku(2,2),new Ba({name:"BackgroundMaterial",uniforms:ws(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(A.colorSpace)!==Gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||S!==A.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,x=A,S=A.version,M=r.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(wu,o0(r)),s.buffers.color.setClear(wu.r,wu.g,wu.b,_,d)}return{getClearColor:function(){return f},setClearColor:function(v,_=1){f.set(v),p=_,R(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(f,p)},render:E}}function wA(r,e,i,s){const l=r.getParameter(r.MAX_VERTEX_ATTRIBS),u=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,f={},p=v(null);let m=p,g=!1;function x(V,ce,P,Y,Z){let oe=!1;if(d){const D=R(Y,P,ce);m!==D&&(m=D,M(m.object)),oe=_(V,Y,P,Z),oe&&U(V,Y,P,Z)}else{const D=ce.wireframe===!0;(m.geometry!==Y.id||m.program!==P.id||m.wireframe!==D)&&(m.geometry=Y.id,m.program=P.id,m.wireframe=D,oe=!0)}Z!==null&&i.update(Z,r.ELEMENT_ARRAY_BUFFER),(oe||g)&&(g=!1,ne(V,ce,P,Y),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.get(Z).buffer))}function S(){return s.isWebGL2?r.createVertexArray():u.createVertexArrayOES()}function M(V){return s.isWebGL2?r.bindVertexArray(V):u.bindVertexArrayOES(V)}function E(V){return s.isWebGL2?r.deleteVertexArray(V):u.deleteVertexArrayOES(V)}function R(V,ce,P){const Y=P.wireframe===!0;let Z=f[V.id];Z===void 0&&(Z={},f[V.id]=Z);let oe=Z[ce.id];oe===void 0&&(oe={},Z[ce.id]=oe);let D=oe[Y];return D===void 0&&(D=v(S()),oe[Y]=D),D}function v(V){const ce=[],P=[],Y=[];for(let Z=0;Z<l;Z++)ce[Z]=0,P[Z]=0,Y[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ce,enabledAttributes:P,attributeDivisors:Y,object:V,attributes:{},index:null}}function _(V,ce,P,Y){const Z=m.attributes,oe=ce.attributes;let D=0;const X=P.getAttributes();for(const le in X)if(X[le].location>=0){const j=Z[le];let fe=oe[le];if(fe===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(fe=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(fe=V.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;D++}return m.attributesNum!==D||m.index!==Y}function U(V,ce,P,Y){const Z={},oe=ce.attributes;let D=0;const X=P.getAttributes();for(const le in X)if(X[le].location>=0){let j=oe[le];j===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(j=V.instanceColor));const fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),Z[le]=fe,D++}m.attributes=Z,m.attributesNum=D,m.index=Y}function A(){const V=m.newAttributes;for(let ce=0,P=V.length;ce<P;ce++)V[ce]=0}function N(V){F(V,0)}function F(V,ce){const P=m.newAttributes,Y=m.enabledAttributes,Z=m.attributeDivisors;P[V]=1,Y[V]===0&&(r.enableVertexAttribArray(V),Y[V]=1),Z[V]!==ce&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,ce),Z[V]=ce)}function H(){const V=m.newAttributes,ce=m.enabledAttributes;for(let P=0,Y=ce.length;P<Y;P++)ce[P]!==V[P]&&(r.disableVertexAttribArray(P),ce[P]=0)}function I(V,ce,P,Y,Z,oe,D){D===!0?r.vertexAttribIPointer(V,ce,P,Z,oe):r.vertexAttribPointer(V,ce,P,Y,Z,oe)}function ne(V,ce,P,Y){if(s.isWebGL2===!1&&(V.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const Z=Y.attributes,oe=P.getAttributes(),D=ce.defaultAttributeValues;for(const X in oe){const le=oe[X];if(le.location>=0){let me=Z[X];if(me===void 0&&(X==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),X==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),me!==void 0){const j=me.normalized,fe=me.itemSize,ve=i.get(me);if(ve===void 0)continue;const Ie=ve.buffer,Ce=ve.type,Ne=ve.bytesPerElement,xt=s.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||me.gpuType===kv);if(me.isInterleavedBufferAttribute){const Ye=me.data,Q=Ye.stride,Yt=me.offset;if(Ye.isInstancedInterleavedBuffer){for(let Ve=0;Ve<le.locationSize;Ve++)F(le.location+Ve,Ye.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Ve=0;Ve<le.locationSize;Ve++)N(le.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Ve=0;Ve<le.locationSize;Ve++)I(le.location+Ve,fe/le.locationSize,Ce,j,Q*Ne,(Yt+fe/le.locationSize*Ve)*Ne,xt)}else{if(me.isInstancedBufferAttribute){for(let Ye=0;Ye<le.locationSize;Ye++)F(le.location+Ye,me.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ye=0;Ye<le.locationSize;Ye++)N(le.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Ye=0;Ye<le.locationSize;Ye++)I(le.location+Ye,fe/le.locationSize,Ce,j,fe*Ne,fe/le.locationSize*Ye*Ne,xt)}}else if(D!==void 0){const j=D[X];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(le.location,j);break;case 3:r.vertexAttrib3fv(le.location,j);break;case 4:r.vertexAttrib4fv(le.location,j);break;default:r.vertexAttrib1fv(le.location,j)}}}}H()}function xe(){ye();for(const V in f){const ce=f[V];for(const P in ce){const Y=ce[P];for(const Z in Y)E(Y[Z].object),delete Y[Z];delete ce[P]}delete f[V]}}function w(V){if(f[V.id]===void 0)return;const ce=f[V.id];for(const P in ce){const Y=ce[P];for(const Z in Y)E(Y[Z].object),delete Y[Z];delete ce[P]}delete f[V.id]}function z(V){for(const ce in f){const P=f[ce];if(P[V.id]===void 0)continue;const Y=P[V.id];for(const Z in Y)E(Y[Z].object),delete Y[Z];delete P[V.id]}}function ye(){Me(),g=!0,m!==p&&(m=p,M(m.object))}function Me(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ye,resetDefaultState:Me,dispose:xe,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:N,disableUnusedAttributes:H}}function CA(r,e,i,s){const l=s.isWebGL2;let u;function d(g){u=g}function f(g,x){r.drawArrays(u,g,x),i.update(x,u,1)}function p(g,x,S){if(S===0)return;let M,E;if(l)M=r,E="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[E](u,g,x,S),i.update(x,u,S)}function m(g,x,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<S;E++)this.render(g[E],x[E]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,S);let E=0;for(let R=0;R<S;R++)E+=x[R];i.update(E,u,1)}}this.setMode=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m}function DA(r,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let f=i.precision!==void 0?i.precision:"highp";const p=u(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),R=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=S>0,N=d||e.has("OES_texture_float"),F=A&&N,H=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:f,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:E,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:U,vertexTextures:A,floatFragmentTextures:N,floatVertexTextures:F,maxSamples:H}}function LA(r){const e=this;let i=null,s=0,l=!1,u=!1;const d=new dr,f=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||l;return l=S,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,M){const E=x.clippingPlanes,R=x.clipIntersection,v=x.clipShadows,_=r.get(x);if(!l||E===null||E.length===0||u&&!v)u?g(null):m();else{const U=u?0:s,A=U*4;let N=_.clippingState||null;p.value=N,N=g(E,S,A,M);for(let F=0;F!==A;++F)N[F]=i[F];_.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,S,M,E){const R=x!==null?x.length:0;let v=null;if(R!==0){if(v=p.value,E!==!0||v===null){const _=M+R*4,U=S.matrixWorldInverse;f.getNormalMatrix(U),(v===null||v.length<_)&&(v=new Float32Array(_));for(let A=0,N=M;A!==R;++A,N+=4)d.copy(x[A]).applyMatrix4(U,f),d.normal.toArray(v,N),v[N+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function UA(r){let e=new WeakMap;function i(d,f){return f===Wh?d.mapping=bs:f===Xh&&(d.mapping=As),d}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Wh||f===Xh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new VE(p.height);return m.fromEquirectangularTexture(r,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class NA extends l0{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,f=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ys=4,$_=[.125,.215,.35,.446,.526,.582],gr=20,Oh=new NA,ev=new wt;let Ph=null,zh=0,Bh=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,tv=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,pr,vs),new re(0,pr,-vs),new re(vs,0,pr),new re(-vs,0,pr),new re(pr,vs,0),new re(-pr,vs,0)];class nv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,zh,Bh),e.scissorTest=!1,Cu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===bs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Wo,format:ci,colorSpace:Fa,depthBuffer:!1},l=iv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(u)),this._blurMaterial=PA(u,e,i)}return l}_compileMaterial(e){const i=new ji(this._lodPlanes[0],e);this._renderer.compile(i,Oh)}_sceneToCubeUV(e,i,s,l){const f=new ni(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(ev),g.toneMapping=Na,g.autoClear=!1;const M=new a0({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),E=new ji(new $o,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(ev),R=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(f.up.set(0,p[_],0),f.lookAt(m[_],0,0)):U===1?(f.up.set(0,0,p[_]),f.lookAt(0,m[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,m[_]));const A=this._cubeSize;Cu(l,U*A,_>2?A:0,A,A),g.setRenderTarget(l),R&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=v}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===bs||e.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ji(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;Cu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Oh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=tv[(l-1)%tv.length];this._blur(e,l-1,l,u,d)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ji(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),R=u/E,v=isFinite(u)?1+Math.floor(g*R):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let U=0;for(let I=0;I<gr;++I){const ne=I/R,xe=Math.exp(-ne*ne/2);_.push(xe),I===0?U+=xe:I<v&&(U+=2*xe)}for(let I=0;I<_.length;I++)_[I]=_[I]/U;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=_,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:A}=this;S.dTheta.value=E,S.mipInt.value=A-s;const N=this._sizeLods[l],F=3*N*(l>A-ys?l-A+ys:0),H=4*(this._cubeSize-N);Cu(i,F,H,3*N,2*N),p.setRenderTarget(i),p.render(x,Oh)}}function OA(r){const e=[],i=[],s=[];let l=r;const u=r-ys+1+$_.length;for(let d=0;d<u;d++){const f=Math.pow(2,l);i.push(f);let p=1/f;d>r-ys?p=$_[d-r+ys-1]:d===0&&(p=0),s.push(p);const m=1/(f-2),g=-m,x=1+m,S=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,R=3,v=2,_=1,U=new Float32Array(R*E*M),A=new Float32Array(v*E*M),N=new Float32Array(_*E*M);for(let H=0;H<M;H++){const I=H%3*2/3-1,ne=H>2?0:-1,xe=[I,ne,0,I+2/3,ne,0,I+2/3,ne+1,0,I,ne,0,I+2/3,ne+1,0,I,ne+1,0];U.set(xe,R*E*H),A.set(S,v*E*H);const w=[H,H,H,H,H,H];N.set(w,_*E*H)}const F=new Qi;F.setAttribute("position",new xi(U,R)),F.setAttribute("uv",new xi(A,v)),F.setAttribute("faceIndex",new xi(N,_)),e.push(F),l>ys&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function iv(r,e,i){const s=new Sr(r,e,i);return s.texture.mapping=qu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cu(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function PA(r,e,i){const s=new Float32Array(gr),l=new re(0,1,0);return new Ba({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function av(){return new Ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function rv(){return new Ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zA(r){let e=new WeakMap,i=null;function s(f){if(f&&f.isTexture){const p=f.mapping,m=p===Wh||p===Xh,g=p===bs||p===As;if(m||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let x=e.get(f);return i===null&&(i=new nv(r)),x=m?i.fromEquirectangular(f,x):i.fromCubemap(f,x),e.set(f,x),x.texture}else{if(e.has(f))return e.get(f).texture;{const x=f.image;if(m&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new nv(r));const S=m?i.fromEquirectangular(f):i.fromCubemap(f);return e.set(f,S),f.addEventListener("dispose",u),S.texture}else return null}}}return f}function l(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function BA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function IA(r,e,i,s){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);for(const E in S.morphAttributes){const R=S.morphAttributes[E];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function f(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function p(x){const S=x.attributes;for(const E in S)e.update(S[E],r.ARRAY_BUFFER);const M=x.morphAttributes;for(const E in M){const R=M[E];for(let v=0,_=R.length;v<_;v++)e.update(R[v],r.ARRAY_BUFFER)}}function m(x){const S=[],M=x.index,E=x.attributes.position;let R=0;if(M!==null){const U=M.array;R=M.version;for(let A=0,N=U.length;A<N;A+=3){const F=U[A+0],H=U[A+1],I=U[A+2];S.push(F,H,H,I,I,F)}}else if(E!==void 0){const U=E.array;R=E.version;for(let A=0,N=U.length/3-1;A<N;A+=3){const F=A+0,H=A+1,I=A+2;S.push(F,H,H,I,I,F)}}else return;const v=new(Qv(S)?s0:r0)(S,1);v.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,v)}function g(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:f,update:p,getWireframeAttribute:g}}function FA(r,e,i,s){const l=s.isWebGL2;let u;function d(M){u=M}let f,p;function m(M){f=M.type,p=M.bytesPerElement}function g(M,E){r.drawElements(u,E,f,M*p),i.update(E,u,1)}function x(M,E,R){if(R===0)return;let v,_;if(l)v=r,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,E,f,M*p,R),i.update(E,u,R)}function S(M,E,R){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,E[_]);else{v.multiDrawElementsWEBGL(u,E,0,f,M,0,R);let _=0;for(let U=0;U<R;U++)_+=E[U];i.update(_,u,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=S}function HA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,f){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=f*(u/3);break;case r.LINES:i.lines+=f*(u/2);break;case r.LINE_STRIP:i.lines+=f*(u-1);break;case r.LINE_LOOP:i.lines+=f*u;break;case r.POINTS:i.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function GA(r,e){return r[0]-e[0]}function VA(r,e){return Math.abs(e[1])-Math.abs(r[1])}function kA(r,e,i){const s={},l=new Float32Array(8),u=new WeakMap,d=new vn,f=[];for(let m=0;m<8;m++)f[m]=[m,0];function p(m,g,x){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=E!==void 0?E.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let Me=function(){z.dispose(),u.delete(g),g.removeEventListener("dispose",Me)};var M=Me;v!==void 0&&v.texture.dispose();const _=g.morphAttributes.position!==void 0,U=g.morphAttributes.normal!==void 0,A=g.morphAttributes.color!==void 0,N=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],H=g.morphAttributes.color||[];let I=0;_===!0&&(I=1),U===!0&&(I=2),A===!0&&(I=3);let ne=g.attributes.position.count*I,xe=1;ne>e.maxTextureSize&&(xe=Math.ceil(ne/e.maxTextureSize),ne=e.maxTextureSize);const w=new Float32Array(ne*xe*4*R),z=new e0(w,ne,xe,R);z.type=Wi,z.needsUpdate=!0;const ye=I*4;for(let V=0;V<R;V++){const ce=N[V],P=F[V],Y=H[V],Z=ne*xe*4*V;for(let oe=0;oe<ce.count;oe++){const D=oe*ye;_===!0&&(d.fromBufferAttribute(ce,oe),w[Z+D+0]=d.x,w[Z+D+1]=d.y,w[Z+D+2]=d.z,w[Z+D+3]=0),U===!0&&(d.fromBufferAttribute(P,oe),w[Z+D+4]=d.x,w[Z+D+5]=d.y,w[Z+D+6]=d.z,w[Z+D+7]=0),A===!0&&(d.fromBufferAttribute(Y,oe),w[Z+D+8]=d.x,w[Z+D+9]=d.y,w[Z+D+10]=d.z,w[Z+D+11]=Y.itemSize===4?d.w:1)}}v={count:R,texture:z,size:new Tt(ne,xe)},u.set(g,v),g.addEventListener("dispose",Me)}if(m.isInstancedMesh===!0&&m.morphTexture!==null)x.getUniforms().setValue(r,"morphTexture",m.morphTexture,i);else{let _=0;for(let A=0;A<S.length;A++)_+=S[A];const U=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(r,"morphTargetBaseInfluence",U),x.getUniforms().setValue(r,"morphTargetInfluences",S)}x.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const E=S===void 0?0:S.length;let R=s[g.id];if(R===void 0||R.length!==E){R=[];for(let N=0;N<E;N++)R[N]=[N,0];s[g.id]=R}for(let N=0;N<E;N++){const F=R[N];F[0]=N,F[1]=S[N]}R.sort(VA);for(let N=0;N<8;N++)N<E&&R[N][1]?(f[N][0]=R[N][0],f[N][1]=R[N][1]):(f[N][0]=Number.MAX_SAFE_INTEGER,f[N][1]=0);f.sort(GA);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let U=0;for(let N=0;N<8;N++){const F=f[N],H=F[0],I=F[1];H!==Number.MAX_SAFE_INTEGER&&I?(v&&g.getAttribute("morphTarget"+N)!==v[H]&&g.setAttribute("morphTarget"+N,v[H]),_&&g.getAttribute("morphNormal"+N)!==_[H]&&g.setAttribute("morphNormal"+N,_[H]),l[N]=I,U+=I):(v&&g.hasAttribute("morphTarget"+N)===!0&&g.deleteAttribute("morphTarget"+N),_&&g.hasAttribute("morphNormal"+N)===!0&&g.deleteAttribute("morphNormal"+N),l[N]=0)}const A=g.morphTargetsRelative?1:1-U;x.getUniforms().setValue(r,"morphTargetBaseInfluence",A),x.getUniforms().setValue(r,"morphTargetInfluences",l)}}return{update:p}}function WA(r,e,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,g=p.geometry,x=e.get(p,g);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return x}function d(){l=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class h0 extends zn{constructor(e,i,s,l,u,d,f,p,m,g){if(g=g!==void 0?g:xr,g!==xr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===xr&&(s=La),s===void 0&&g===Rs&&(s=vr),super(null,l,u,d,f,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=f!==void 0?f:Rn,this.minFilter=p!==void 0?p:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const d0=new zn,p0=new h0(1,1);p0.compareFunction=Kv;const m0=new e0,g0=new bE,_0=new u0,sv=[],ov=[],lv=new Float32Array(16),uv=new Float32Array(9),cv=new Float32Array(4);function Ns(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=sv[l];if(u===void 0&&(u=new Float32Array(l),sv[l]=u),e!==0){s.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=i,r[d].toArray(u,f)}return u}function ln(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function un(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Qu(r,e){let i=ov[e];i===void 0&&(i=new Int32Array(e),ov[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function XA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function jA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;r.uniform2fv(this.addr,e),un(i,e)}}function qA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;r.uniform3fv(this.addr,e),un(i,e)}}function YA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;r.uniform4fv(this.addr,e),un(i,e)}}function ZA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(ln(i,s))return;cv.set(s),r.uniformMatrix2fv(this.addr,!1,cv),un(i,s)}}function KA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(ln(i,s))return;uv.set(s),r.uniformMatrix3fv(this.addr,!1,uv),un(i,s)}}function QA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(ln(i,s))return;lv.set(s),r.uniformMatrix4fv(this.addr,!1,lv),un(i,s)}}function JA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function $A(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;r.uniform2iv(this.addr,e),un(i,e)}}function e1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;r.uniform3iv(this.addr,e),un(i,e)}}function t1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;r.uniform4iv(this.addr,e),un(i,e)}}function n1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function i1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;r.uniform2uiv(this.addr,e),un(i,e)}}function a1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;r.uniform3uiv(this.addr,e),un(i,e)}}function r1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;r.uniform4uiv(this.addr,e),un(i,e)}}function s1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);const u=this.type===r.SAMPLER_2D_SHADOW?p0:d0;i.setTexture2D(e||u,l)}function o1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||g0,l)}function l1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||_0,l)}function u1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||m0,l)}function c1(r){switch(r){case 5126:return XA;case 35664:return jA;case 35665:return qA;case 35666:return YA;case 35674:return ZA;case 35675:return KA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return u1}}function f1(r,e){r.uniform1fv(this.addr,e)}function h1(r,e){const i=Ns(e,this.size,2);r.uniform2fv(this.addr,i)}function d1(r,e){const i=Ns(e,this.size,3);r.uniform3fv(this.addr,i)}function p1(r,e){const i=Ns(e,this.size,4);r.uniform4fv(this.addr,i)}function m1(r,e){const i=Ns(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function g1(r,e){const i=Ns(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _1(r,e){const i=Ns(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function v1(r,e){r.uniform1iv(this.addr,e)}function x1(r,e){r.uniform2iv(this.addr,e)}function S1(r,e){r.uniform3iv(this.addr,e)}function y1(r,e){r.uniform4iv(this.addr,e)}function M1(r,e){r.uniform1uiv(this.addr,e)}function E1(r,e){r.uniform2uiv(this.addr,e)}function T1(r,e){r.uniform3uiv(this.addr,e)}function b1(r,e){r.uniform4uiv(this.addr,e)}function A1(r,e,i){const s=this.cache,l=e.length,u=Qu(i,l);ln(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||d0,u[d])}function R1(r,e,i){const s=this.cache,l=e.length,u=Qu(i,l);ln(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||g0,u[d])}function w1(r,e,i){const s=this.cache,l=e.length,u=Qu(i,l);ln(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||_0,u[d])}function C1(r,e,i){const s=this.cache,l=e.length,u=Qu(i,l);ln(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||m0,u[d])}function D1(r){switch(r){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return S1;case 35669:case 35673:return y1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return C1}}class L1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=c1(i.type)}}class U1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=D1(i.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const f=l[u];f.setValue(e,i[f.id],s)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function fv(r,e){r.seq.push(e),r.map[e.id]=e}function O1(r,e,i){const s=r.name,l=s.length;for(Ih.lastIndex=0;;){const u=Ih.exec(s),d=Ih.lastIndex;let f=u[1];const p=u[2]==="]",m=u[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===l){fv(i,m===void 0?new L1(f,r,e):new U1(f,r,e));break}else{let x=i.map[f];x===void 0&&(x=new N1(f),fv(i,x)),i=x}}}class Pu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);O1(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const f=i[u],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function hv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const P1=37297;let z1=0;function B1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const f=d+1;s.push(`${f===e?">":" "} ${f}: ${i[d]}`)}return s.join(`
`)}function I1(r){const e=Ut.getPrimaries(Ut.workingColorSpace),i=Ut.getPrimaries(r);let s;switch(e===i?s="":e===Hu&&i===Fu?s="LinearDisplayP3ToLinearSRGB":e===Fu&&i===Hu&&(s="LinearSRGBToLinearDisplayP3"),r){case Fa:case Yu:return[s,"LinearTransferOETF"];case gi:case sd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function dv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+B1(r.getShaderSource(e),d)}else return l}function F1(r,e){const i=I1(e);return`vec4 ${r}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function H1(r,e){let i;switch(e){case NM:i="Linear";break;case OM:i="Reinhard";break;case PM:i="OptimizedCineon";break;case zM:i="ACESFilmic";break;case IM:i="AgX";break;case FM:i="Neutral";break;case BM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function G1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function V1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function k1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function W1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),d=u.name;let f=1;u.type===r.FLOAT_MAT2&&(f=2),u.type===r.FLOAT_MAT3&&(f=3),u.type===r.FLOAT_MAT4&&(f=4),i[d]={type:u.type,location:r.getAttribLocation(e,d),locationSize:f}}return i}function Ms(r){return r!==""}function pv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(r){return r.replace(X1,q1)}const j1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function q1(r,e){let i=ct[e];if(i===void 0){const s=j1.get(e);if(s!==void 0)i=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Kh(i)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(Y1,Z1)}function Z1(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function _v(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===oM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Q1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case As:e="ENVMAP_TYPE_CUBE";break;case qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gv:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case UM:e="ENVMAP_BLENDING_ADD";break}return e}function eR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function tR(r,e,i,s){const l=r.getContext(),u=i.defines;let d=i.vertexShader,f=i.fragmentShader;const p=K1(i),m=Q1(i),g=J1(i),x=$1(i),S=eR(i),M=i.isWebGL2?"":G1(i),E=V1(i),R=k1(u),v=l.createProgram();let _,U,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),_.length>0&&(_+=`
`),U=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),U.length>0&&(U+=`
`)):(_=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),U=[M,_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?ct.tonemapping_pars_fragment:"",i.toneMapping!==Na?H1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,F1("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ms).join(`
`)),d=Kh(d),d=pv(d,i),d=mv(d,i),f=Kh(f),f=pv(f,i),f=mv(f,i),d=gv(d),f=gv(f),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,U=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===N_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const N=A+_+d,F=A+U+f,H=hv(l,l.VERTEX_SHADER,N),I=hv(l,l.FRAGMENT_SHADER,F);l.attachShader(v,H),l.attachShader(v,I),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function ne(ye){if(r.debug.checkShaderErrors){const Me=l.getProgramInfoLog(v).trim(),V=l.getShaderInfoLog(H).trim(),ce=l.getShaderInfoLog(I).trim();let P=!0,Y=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(P=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,v,H,I);else{const Z=dv(l,H,"vertex"),oe=dv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+ye.name+`
Material Type: `+ye.type+`

Program Info Log: `+Me+`
`+Z+`
`+oe)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(V===""||ce==="")&&(Y=!1);Y&&(ye.diagnostics={runnable:P,programLog:Me,vertexShader:{log:V,prefix:_},fragmentShader:{log:ce,prefix:U}})}l.deleteShader(H),l.deleteShader(I),xe=new Pu(l,v),w=W1(l,v)}let xe;this.getUniforms=function(){return xe===void 0&&ne(this),xe};let w;this.getAttributes=function(){return w===void 0&&ne(this),w};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=l.getProgramParameter(v,P1)),z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=I,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new aR(e),i.set(e,s)),s}}class aR{constructor(e){this.id=nR++,this.code=e,this.usedTimes=0}}function rR(r,e,i,s,l,u,d){const f=new n0,p=new iR,m=new Set,g=[],x=l.isWebGL2,S=l.logarithmicDepthBuffer,M=l.vertexTextures;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return m.add(w),w===0?"uv":`uv${w}`}function _(w,z,ye,Me,V){const ce=Me.fog,P=V.geometry,Y=w.isMeshStandardMaterial?Me.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||Y),oe=Z&&Z.mapping===qu?Z.image.height:null,D=R[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,le=X!==void 0?X.length:0;let me=0;P.morphAttributes.position!==void 0&&(me=1),P.morphAttributes.normal!==void 0&&(me=2),P.morphAttributes.color!==void 0&&(me=3);let j,fe,ve,Ie;if(D){const bt=_i[D];j=bt.vertexShader,fe=bt.fragmentShader}else j=w.vertexShader,fe=w.fragmentShader,p.update(w),ve=p.getVertexShaderID(w),Ie=p.getFragmentShaderID(w);const Ce=r.getRenderTarget(),Ne=V.isInstancedMesh===!0,xt=V.isBatchedMesh===!0,Ye=!!w.map,Q=!!w.matcap,Yt=!!Z,Ve=!!w.aoMap,ot=!!w.lightMap,qe=!!w.bumpMap,$e=!!w.normalMap,at=!!w.displacementMap,lt=!!w.emissiveMap,Vt=!!w.metalnessMap,O=!!w.roughnessMap,b=w.anisotropy>0,ue=w.clearcoat>0,_e=w.iridescence>0,Te=w.sheen>0,Se=w.transmission>0,ke=b&&!!w.anisotropyMap,Ge=ue&&!!w.clearcoatMap,Ee=ue&&!!w.clearcoatNormalMap,De=ue&&!!w.clearcoatRoughnessMap,nt=_e&&!!w.iridescenceMap,be=_e&&!!w.iridescenceThicknessMap,It=Te&&!!w.sheenColorMap,it=Te&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Pe=!!w.specularColorMap,ze=!!w.specularIntensityMap,gt=Se&&!!w.transmissionMap,et=Se&&!!w.thicknessMap,Nt=!!w.gradientMap,k=!!w.alphaMap,Re=w.alphaTest>0,ie=!!w.alphaHash,Ae=!!w.extensions;let Le=Na;w.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Le=r.toneMapping);const ut={isWebGL2:x,shaderID:D,shaderType:w.type,shaderName:w.name,vertexShader:j,fragmentShader:fe,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:Ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:xt,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,instancingMorph:Ne&&V.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Fa,alphaToCoverage:!!w.alphaToCoverage,map:Ye,matcap:Q,envMap:Yt,envMapMode:Yt&&Z.mapping,envMapCubeUVHeight:oe,aoMap:Ve,lightMap:ot,bumpMap:qe,normalMap:$e,displacementMap:M&&at,emissiveMap:lt,normalMapObjectSpace:$e&&w.normalMapType===QM,normalMapTangentSpace:$e&&w.normalMapType===KM,metalnessMap:Vt,roughnessMap:O,anisotropy:b,anisotropyMap:ke,clearcoat:ue,clearcoatMap:Ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:De,iridescence:_e,iridescenceMap:nt,iridescenceThicknessMap:be,sheen:Te,sheenColorMap:It,sheenRoughnessMap:it,specularMap:Be,specularColorMap:Pe,specularIntensityMap:ze,transmission:Se,transmissionMap:gt,thicknessMap:et,gradientMap:Nt,opaque:w.transparent===!1&&w.blending===Es&&w.alphaToCoverage===!1,alphaMap:k,alphaTest:Re,alphaHash:ie,combine:w.combine,mapUv:Ye&&v(w.map.channel),aoMapUv:Ve&&v(w.aoMap.channel),lightMapUv:ot&&v(w.lightMap.channel),bumpMapUv:qe&&v(w.bumpMap.channel),normalMapUv:$e&&v(w.normalMap.channel),displacementMapUv:at&&v(w.displacementMap.channel),emissiveMapUv:lt&&v(w.emissiveMap.channel),metalnessMapUv:Vt&&v(w.metalnessMap.channel),roughnessMapUv:O&&v(w.roughnessMap.channel),anisotropyMapUv:ke&&v(w.anisotropyMap.channel),clearcoatMapUv:Ge&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:it&&v(w.sheenRoughnessMap.channel),specularMapUv:Be&&v(w.specularMap.channel),specularColorMapUv:Pe&&v(w.specularColorMap.channel),specularIntensityMapUv:ze&&v(w.specularIntensityMap.channel),transmissionMapUv:gt&&v(w.transmissionMap.channel),thicknessMapUv:et&&v(w.thicknessMap.channel),alphaMapUv:k&&v(w.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&($e||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!P.attributes.uv&&(Ye||k),fog:!!ce,useFog:w.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:V.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:me,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&ye.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ye&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ki,flipSided:w.side===Pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ae&&w.extensions.derivatives===!0,extensionFragDepth:Ae&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ae&&w.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ut.vertexUv1s=m.has(1),ut.vertexUv2s=m.has(2),ut.vertexUv3s=m.has(3),m.clear(),ut}function U(w){const z=[];if(w.shaderID?z.push(w.shaderID):(z.push(w.customVertexShaderID),z.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ye in w.defines)z.push(ye),z.push(w.defines[ye]);return w.isRawShaderMaterial===!1&&(A(z,w),N(z,w),z.push(r.outputColorSpace)),z.push(w.customProgramCacheKey),z.join()}function A(w,z){w.push(z.precision),w.push(z.outputColorSpace),w.push(z.envMapMode),w.push(z.envMapCubeUVHeight),w.push(z.mapUv),w.push(z.alphaMapUv),w.push(z.lightMapUv),w.push(z.aoMapUv),w.push(z.bumpMapUv),w.push(z.normalMapUv),w.push(z.displacementMapUv),w.push(z.emissiveMapUv),w.push(z.metalnessMapUv),w.push(z.roughnessMapUv),w.push(z.anisotropyMapUv),w.push(z.clearcoatMapUv),w.push(z.clearcoatNormalMapUv),w.push(z.clearcoatRoughnessMapUv),w.push(z.iridescenceMapUv),w.push(z.iridescenceThicknessMapUv),w.push(z.sheenColorMapUv),w.push(z.sheenRoughnessMapUv),w.push(z.specularMapUv),w.push(z.specularColorMapUv),w.push(z.specularIntensityMapUv),w.push(z.transmissionMapUv),w.push(z.thicknessMapUv),w.push(z.combine),w.push(z.fogExp2),w.push(z.sizeAttenuation),w.push(z.morphTargetsCount),w.push(z.morphAttributeCount),w.push(z.numDirLights),w.push(z.numPointLights),w.push(z.numSpotLights),w.push(z.numSpotLightMaps),w.push(z.numHemiLights),w.push(z.numRectAreaLights),w.push(z.numDirLightShadows),w.push(z.numPointLightShadows),w.push(z.numSpotLightShadows),w.push(z.numSpotLightShadowsWithMaps),w.push(z.numLightProbes),w.push(z.shadowMapType),w.push(z.toneMapping),w.push(z.numClippingPlanes),w.push(z.numClipIntersection),w.push(z.depthPacking)}function N(w,z){f.disableAll(),z.isWebGL2&&f.enable(0),z.supportsVertexTextures&&f.enable(1),z.instancing&&f.enable(2),z.instancingColor&&f.enable(3),z.instancingMorph&&f.enable(4),z.matcap&&f.enable(5),z.envMap&&f.enable(6),z.normalMapObjectSpace&&f.enable(7),z.normalMapTangentSpace&&f.enable(8),z.clearcoat&&f.enable(9),z.iridescence&&f.enable(10),z.alphaTest&&f.enable(11),z.vertexColors&&f.enable(12),z.vertexAlphas&&f.enable(13),z.vertexUv1s&&f.enable(14),z.vertexUv2s&&f.enable(15),z.vertexUv3s&&f.enable(16),z.vertexTangents&&f.enable(17),z.anisotropy&&f.enable(18),z.alphaHash&&f.enable(19),z.batching&&f.enable(20),w.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.skinning&&f.enable(4),z.morphTargets&&f.enable(5),z.morphNormals&&f.enable(6),z.morphColors&&f.enable(7),z.premultipliedAlpha&&f.enable(8),z.shadowMapEnabled&&f.enable(9),z.useLegacyLights&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.alphaToCoverage&&f.enable(20),w.push(f.mask)}function F(w){const z=R[w.type];let ye;if(z){const Me=_i[z];ye=IE.clone(Me.uniforms)}else ye=w.uniforms;return ye}function H(w,z){let ye;for(let Me=0,V=g.length;Me<V;Me++){const ce=g[Me];if(ce.cacheKey===z){ye=ce,++ye.usedTimes;break}}return ye===void 0&&(ye=new tR(r,z,w,u),g.push(ye)),ye}function I(w){if(--w.usedTimes===0){const z=g.indexOf(w);g[z]=g[g.length-1],g.pop(),w.destroy()}}function ne(w){p.remove(w)}function xe(){p.dispose()}return{getParameters:_,getProgramCacheKey:U,getUniforms:F,acquireProgram:H,releaseProgram:I,releaseShaderCache:ne,programs:g,dispose:xe}}function sR(){let r=new WeakMap;function e(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function i(u){r.delete(u)}function s(u,d,f){r.get(u)[d]=f}function l(){r=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function oR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xv(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(x,S,M,E,R,v){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:E,renderOrder:x.renderOrder,z:R,group:v},r[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=R,_.group=v),e++,_}function f(x,S,M,E,R,v){const _=d(x,S,M,E,R,v);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(x,S,M,E,R,v){const _=d(x,S,M,E,R,v);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,S){i.length>1&&i.sort(x||oR),s.length>1&&s.sort(S||vv),l.length>1&&l.sort(S||vv)}function g(){for(let x=e,S=r.length;x<S;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:f,unshift:p,finish:g,sort:m}}function lR(){let r=new WeakMap;function e(s,l){const u=r.get(s);let d;return u===void 0?(d=new xv,r.set(s,[d])):l>=u.length?(d=new xv,u.push(d)):d=u[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function uR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new wt};break;case"SpotLight":i={position:new re,direction:new re,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=i,i}}}function cR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let fR=0;function hR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dR(r,e){const i=new uR,s=cR(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new re);const u=new re,d=new an,f=new an;function p(g,x){let S=0,M=0,E=0;for(let ye=0;ye<9;ye++)l.probe[ye].set(0,0,0);let R=0,v=0,_=0,U=0,A=0,N=0,F=0,H=0,I=0,ne=0,xe=0;g.sort(hR);const w=x===!0?Math.PI:1;for(let ye=0,Me=g.length;ye<Me;ye++){const V=g[ye],ce=V.color,P=V.intensity,Y=V.distance,Z=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)S+=ce.r*P*w,M+=ce.g*P*w,E+=ce.b*P*w;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)l.probe[oe].addScaledVector(V.sh.coefficients[oe],P);xe++}else if(V.isDirectionalLight){const oe=i.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity*w),V.castShadow){const D=V.shadow,X=s.get(V);X.shadowBias=D.bias,X.shadowNormalBias=D.normalBias,X.shadowRadius=D.radius,X.shadowMapSize=D.mapSize,l.directionalShadow[R]=X,l.directionalShadowMap[R]=Z,l.directionalShadowMatrix[R]=V.shadow.matrix,N++}l.directional[R]=oe,R++}else if(V.isSpotLight){const oe=i.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(ce).multiplyScalar(P*w),oe.distance=Y,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,l.spot[_]=oe;const D=V.shadow;if(V.map&&(l.spotLightMap[I]=V.map,I++,D.updateMatrices(V),V.castShadow&&ne++),l.spotLightMatrix[_]=D.matrix,V.castShadow){const X=s.get(V);X.shadowBias=D.bias,X.shadowNormalBias=D.normalBias,X.shadowRadius=D.radius,X.shadowMapSize=D.mapSize,l.spotShadow[_]=X,l.spotShadowMap[_]=Z,H++}_++}else if(V.isRectAreaLight){const oe=i.get(V);oe.color.copy(ce).multiplyScalar(P),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),l.rectArea[U]=oe,U++}else if(V.isPointLight){const oe=i.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity*w),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const D=V.shadow,X=s.get(V);X.shadowBias=D.bias,X.shadowNormalBias=D.normalBias,X.shadowRadius=D.radius,X.shadowMapSize=D.mapSize,X.shadowCameraNear=D.camera.near,X.shadowCameraFar=D.camera.far,l.pointShadow[v]=X,l.pointShadowMap[v]=Z,l.pointShadowMatrix[v]=V.shadow.matrix,F++}l.point[v]=oe,v++}else if(V.isHemisphereLight){const oe=i.get(V);oe.skyColor.copy(V.color).multiplyScalar(P*w),oe.groundColor.copy(V.groundColor).multiplyScalar(P*w),l.hemi[A]=oe,A++}}U>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=we.LTC_FLOAT_1,l.rectAreaLTC2=we.LTC_FLOAT_2):(l.rectAreaLTC1=we.LTC_HALF_1,l.rectAreaLTC2=we.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=we.LTC_FLOAT_1,l.rectAreaLTC2=we.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=we.LTC_HALF_1,l.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=M,l.ambient[2]=E;const z=l.hash;(z.directionalLength!==R||z.pointLength!==v||z.spotLength!==_||z.rectAreaLength!==U||z.hemiLength!==A||z.numDirectionalShadows!==N||z.numPointShadows!==F||z.numSpotShadows!==H||z.numSpotMaps!==I||z.numLightProbes!==xe)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=U,l.point.length=v,l.hemi.length=A,l.directionalShadow.length=N,l.directionalShadowMap.length=N,l.pointShadow.length=F,l.pointShadowMap.length=F,l.spotShadow.length=H,l.spotShadowMap.length=H,l.directionalShadowMatrix.length=N,l.pointShadowMatrix.length=F,l.spotLightMatrix.length=H+I-ne,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=ne,l.numLightProbes=xe,z.directionalLength=R,z.pointLength=v,z.spotLength=_,z.rectAreaLength=U,z.hemiLength=A,z.numDirectionalShadows=N,z.numPointShadows=F,z.numSpotShadows=H,z.numSpotMaps=I,z.numLightProbes=xe,l.version=fR++)}function m(g,x){let S=0,M=0,E=0,R=0,v=0;const _=x.matrixWorldInverse;for(let U=0,A=g.length;U<A;U++){const N=g[U];if(N.isDirectionalLight){const F=l.directional[S];F.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(_),S++}else if(N.isSpotLight){const F=l.spot[E];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(_),F.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(_),E++}else if(N.isRectAreaLight){const F=l.rectArea[R];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(_),f.identity(),d.copy(N.matrixWorld),d.premultiply(_),f.extractRotation(d),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),F.halfWidth.applyMatrix4(f),F.halfHeight.applyMatrix4(f),R++}else if(N.isPointLight){const F=l.point[M];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(_),M++}else if(N.isHemisphereLight){const F=l.hemi[v];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function Sv(r,e){const i=new dR(r,e),s=[],l=[];function u(){s.length=0,l.length=0}function d(x){s.push(x)}function f(x){l.push(x)}function p(x){i.setup(s,x)}function m(x){i.setupView(s,x)}return{init:u,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:f}}function pR(r,e){let i=new WeakMap;function s(u,d=0){const f=i.get(u);let p;return f===void 0?(p=new Sv(r,e),i.set(u,[p])):d>=f.length?(p=new Sv(r,e),f.push(p)):p=f[d],p}function l(){i=new WeakMap}return{get:s,dispose:l}}class mR extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gR extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xR(r,e,i){let s=new c0;const l=new Tt,u=new Tt,d=new vn,f=new mR({depthPacking:ZM}),p=new gR,m={},g=i.maxTextureSize,x={[za]:Pn,[Pn]:za,[ki]:ki},S=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:_R,fragmentShader:vR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new Qi;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ji(E,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let _=this.type;this.render=function(H,I,ne){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||H.length===0)return;const xe=r.getRenderTarget(),w=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),ye=r.state;ye.setBlending(Ua),ye.buffers.color.setClear(1,1,1,1),ye.buffers.depth.setTest(!0),ye.setScissorTest(!1);const Me=_!==Vi&&this.type===Vi,V=_===Vi&&this.type!==Vi;for(let ce=0,P=H.length;ce<P;ce++){const Y=H[ce],Z=Y.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const oe=Z.getFrameExtents();if(l.multiply(oe),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/oe.x),l.x=u.x*oe.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/oe.y),l.y=u.y*oe.y,Z.mapSize.y=u.y)),Z.map===null||Me===!0||V===!0){const X=this.type!==Vi?{minFilter:Rn,magFilter:Rn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Sr(l.x,l.y,X),Z.map.texture.name=Y.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const D=Z.getViewportCount();for(let X=0;X<D;X++){const le=Z.getViewport(X);d.set(u.x*le.x,u.y*le.y,u.x*le.z,u.y*le.w),ye.viewport(d),Z.updateMatrices(Y,X),s=Z.getFrustum(),N(I,ne,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===Vi&&U(Z,ne),Z.needsUpdate=!1}_=this.type,v.needsUpdate=!1,r.setRenderTarget(xe,w,z)};function U(H,I){const ne=e.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(I,null,ne,S,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(I,null,ne,M,R,null)}function A(H,I,ne,xe){let w=null;const z=ne.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)w=z;else if(w=ne.isPointLight===!0?p:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ye=w.uuid,Me=I.uuid;let V=m[ye];V===void 0&&(V={},m[ye]=V);let ce=V[Me];ce===void 0&&(ce=w.clone(),V[Me]=ce,I.addEventListener("dispose",F)),w=ce}if(w.visible=I.visible,w.wireframe=I.wireframe,xe===Vi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:x[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,ne.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ye=r.properties.get(w);ye.light=ne}return w}function N(H,I,ne,xe,w){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Vi)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,H.matrixWorld);const Me=e.update(H),V=H.material;if(Array.isArray(V)){const ce=Me.groups;for(let P=0,Y=ce.length;P<Y;P++){const Z=ce[P],oe=V[Z.materialIndex];if(oe&&oe.visible){const D=A(H,oe,xe,w);H.onBeforeShadow(r,H,I,ne,Me,D,Z),r.renderBufferDirect(ne,null,Me,D,H,Z),H.onAfterShadow(r,H,I,ne,Me,D,Z)}}}else if(V.visible){const ce=A(H,V,xe,w);H.onBeforeShadow(r,H,I,ne,Me,ce,null),r.renderBufferDirect(ne,null,Me,ce,H,null),H.onAfterShadow(r,H,I,ne,Me,ce,null)}}const ye=H.children;for(let Me=0,V=ye.length;Me<V;Me++)N(ye[Me],I,ne,xe,w)}function F(H){H.target.removeEventListener("dispose",F);for(const ne in m){const xe=m[ne],w=H.target.uuid;w in xe&&(xe[w].dispose(),delete xe[w])}}}function SR(r,e,i){const s=i.isWebGL2;function l(){let k=!1;const Re=new vn;let ie=null;const Ae=new vn(0,0,0,0);return{setMask:function(Le){ie!==Le&&!k&&(r.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){k=Le},setClear:function(Le,ut,bt,Jt,Cn){Cn===!0&&(Le*=Jt,ut*=Jt,bt*=Jt),Re.set(Le,ut,bt,Jt),Ae.equals(Re)===!1&&(r.clearColor(Le,ut,bt,Jt),Ae.copy(Re))},reset:function(){k=!1,ie=null,Ae.set(-1,0,0,0)}}}function u(){let k=!1,Re=null,ie=null,Ae=null;return{setTest:function(Le){Le?Ne(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(Le){Re!==Le&&!k&&(r.depthMask(Le),Re=Le)},setFunc:function(Le){if(ie!==Le){switch(Le){case TM:r.depthFunc(r.NEVER);break;case bM:r.depthFunc(r.ALWAYS);break;case AM:r.depthFunc(r.LESS);break;case Bu:r.depthFunc(r.LEQUAL);break;case RM:r.depthFunc(r.EQUAL);break;case wM:r.depthFunc(r.GEQUAL);break;case CM:r.depthFunc(r.GREATER);break;case DM:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ie=Le}},setLocked:function(Le){k=Le},setClear:function(Le){Ae!==Le&&(r.clearDepth(Le),Ae=Le)},reset:function(){k=!1,Re=null,ie=null,Ae=null}}}function d(){let k=!1,Re=null,ie=null,Ae=null,Le=null,ut=null,bt=null,Jt=null,Cn=null;return{setTest:function(_t){k||(_t?Ne(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!k&&(r.stencilMask(_t),Re=_t)},setFunc:function(_t,St,Ft){(ie!==_t||Ae!==St||Le!==Ft)&&(r.stencilFunc(_t,St,Ft),ie=_t,Ae=St,Le=Ft)},setOp:function(_t,St,Ft){(ut!==_t||bt!==St||Jt!==Ft)&&(r.stencilOp(_t,St,Ft),ut=_t,bt=St,Jt=Ft)},setLocked:function(_t){k=_t},setClear:function(_t){Cn!==_t&&(r.clearStencil(_t),Cn=_t)},reset:function(){k=!1,Re=null,ie=null,Ae=null,Le=null,ut=null,bt=null,Jt=null,Cn=null}}}const f=new l,p=new u,m=new d,g=new WeakMap,x=new WeakMap;let S={},M={},E=new WeakMap,R=[],v=null,_=!1,U=null,A=null,N=null,F=null,H=null,I=null,ne=null,xe=new wt(0,0,0),w=0,z=!1,ye=null,Me=null,V=null,ce=null,P=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,oe=0;const D=r.getParameter(r.VERSION);D.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(D)[1]),Z=oe>=1):D.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Z=oe>=2);let X=null,le={};const me=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),fe=new vn().fromArray(me),ve=new vn().fromArray(j);function Ie(k,Re,ie,Ae){const Le=new Uint8Array(4),ut=r.createTexture();r.bindTexture(k,ut),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<ie;bt++)s&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(Re,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Re+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return ut}const Ce={};Ce[r.TEXTURE_2D]=Ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=Ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ce[r.TEXTURE_2D_ARRAY]=Ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=Ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ne(r.DEPTH_TEST),p.setFunc(Bu),at(!1),lt($g),Ne(r.CULL_FACE),qe(Ua);function Ne(k){S[k]!==!0&&(r.enable(k),S[k]=!0)}function xt(k){S[k]!==!1&&(r.disable(k),S[k]=!1)}function Ye(k,Re){return M[k]!==Re?(r.bindFramebuffer(k,Re),M[k]=Re,s&&(k===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=Re),k===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=Re)),!0):!1}function Q(k,Re){let ie=R,Ae=!1;if(k){ie=E.get(Re),ie===void 0&&(ie=[],E.set(Re,ie));const Le=k.textures;if(ie.length!==Le.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,bt=Le.length;ut<bt;ut++)ie[ut]=r.COLOR_ATTACHMENT0+ut;ie.length=Le.length,Ae=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,Ae=!0);if(Ae)if(i.isWebGL2)r.drawBuffers(ie);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Yt(k){return v!==k?(r.useProgram(k),v=k,!0):!1}const Ve={[mr]:r.FUNC_ADD,[uM]:r.FUNC_SUBTRACT,[cM]:r.FUNC_REVERSE_SUBTRACT};if(s)Ve[i_]=r.MIN,Ve[a_]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Ve[i_]=k.MIN_EXT,Ve[a_]=k.MAX_EXT)}const ot={[fM]:r.ZERO,[hM]:r.ONE,[dM]:r.SRC_COLOR,[Vh]:r.SRC_ALPHA,[xM]:r.SRC_ALPHA_SATURATE,[_M]:r.DST_COLOR,[mM]:r.DST_ALPHA,[pM]:r.ONE_MINUS_SRC_COLOR,[kh]:r.ONE_MINUS_SRC_ALPHA,[vM]:r.ONE_MINUS_DST_COLOR,[gM]:r.ONE_MINUS_DST_ALPHA,[SM]:r.CONSTANT_COLOR,[yM]:r.ONE_MINUS_CONSTANT_COLOR,[MM]:r.CONSTANT_ALPHA,[EM]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(k,Re,ie,Ae,Le,ut,bt,Jt,Cn,_t){if(k===Ua){_===!0&&(xt(r.BLEND),_=!1);return}if(_===!1&&(Ne(r.BLEND),_=!0),k!==lM){if(k!==U||_t!==z){if((A!==mr||H!==mr)&&(r.blendEquation(r.FUNC_ADD),A=mr,H=mr),_t)switch(k){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case e_:r.blendFunc(r.ONE,r.ONE);break;case t_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case e_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case t_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,F=null,I=null,ne=null,xe.set(0,0,0),w=0,U=k,z=_t}return}Le=Le||Re,ut=ut||ie,bt=bt||Ae,(Re!==A||Le!==H)&&(r.blendEquationSeparate(Ve[Re],Ve[Le]),A=Re,H=Le),(ie!==N||Ae!==F||ut!==I||bt!==ne)&&(r.blendFuncSeparate(ot[ie],ot[Ae],ot[ut],ot[bt]),N=ie,F=Ae,I=ut,ne=bt),(Jt.equals(xe)===!1||Cn!==w)&&(r.blendColor(Jt.r,Jt.g,Jt.b,Cn),xe.copy(Jt),w=Cn),U=k,z=!1}function $e(k,Re){k.side===ki?xt(r.CULL_FACE):Ne(r.CULL_FACE);let ie=k.side===Pn;Re&&(ie=!ie),at(ie),k.blending===Es&&k.transparent===!1?qe(Ua):qe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),p.setFunc(k.depthFunc),p.setTest(k.depthTest),p.setMask(k.depthWrite),f.setMask(k.colorWrite);const Ae=k.stencilWrite;m.setTest(Ae),Ae&&(m.setMask(k.stencilWriteMask),m.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),m.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),O(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){ye!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),ye=k)}function lt(k){k!==rM?(Ne(r.CULL_FACE),k!==Me&&(k===$g?r.cullFace(r.BACK):k===sM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),Me=k}function Vt(k){k!==V&&(Z&&r.lineWidth(k),V=k)}function O(k,Re,ie){k?(Ne(r.POLYGON_OFFSET_FILL),(ce!==Re||P!==ie)&&(r.polygonOffset(Re,ie),ce=Re,P=ie)):xt(r.POLYGON_OFFSET_FILL)}function b(k){k?Ne(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function ue(k){k===void 0&&(k=r.TEXTURE0+Y-1),X!==k&&(r.activeTexture(k),X=k)}function _e(k,Re,ie){ie===void 0&&(X===null?ie=r.TEXTURE0+Y-1:ie=X);let Ae=le[ie];Ae===void 0&&(Ae={type:void 0,texture:void 0},le[ie]=Ae),(Ae.type!==k||Ae.texture!==Re)&&(X!==ie&&(r.activeTexture(ie),X=ie),r.bindTexture(k,Re||Ce[k]),Ae.type=k,Ae.texture=Re)}function Te(){const k=le[X];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Se(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){fe.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),fe.copy(k))}function ze(k){ve.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ve.copy(k))}function gt(k,Re){let ie=x.get(Re);ie===void 0&&(ie=new WeakMap,x.set(Re,ie));let Ae=ie.get(k);Ae===void 0&&(Ae=r.getUniformBlockIndex(Re,k.name),ie.set(k,Ae))}function et(k,Re){const Ae=x.get(Re).get(k);g.get(Re)!==Ae&&(r.uniformBlockBinding(Re,Ae,k.__bindingPointIndex),g.set(Re,Ae))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},X=null,le={},M={},E=new WeakMap,R=[],v=null,_=!1,U=null,A=null,N=null,F=null,H=null,I=null,ne=null,xe=new wt(0,0,0),w=0,z=!1,ye=null,Me=null,V=null,ce=null,P=null,fe.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:Ne,disable:xt,bindFramebuffer:Ye,drawBuffers:Q,useProgram:Yt,setBlending:qe,setMaterial:$e,setFlipSided:at,setCullFace:lt,setLineWidth:Vt,setPolygonOffset:O,setScissorTest:b,activeTexture:ue,bindTexture:_e,unbindTexture:Te,compressedTexImage2D:Se,compressedTexImage3D:ke,texImage2D:it,texImage3D:Be,updateUBOMapping:gt,uniformBlockBinding:et,texStorage2D:be,texStorage3D:It,texSubImage2D:Ge,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:nt,scissor:Pe,viewport:ze,reset:Nt}}function yR(r,e,i,s,l,u,d){const f=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Tt,x=new WeakMap;let S;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(O,b){return E?new OffscreenCanvas(O,b):ku("canvas")}function v(O,b,ue,_e){let Te=1;const Se=Vt(O);if((Se.width>_e||Se.height>_e)&&(Te=_e/Math.max(Se.width,Se.height)),Te<1||b===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ke=b?Vu:Math.floor,Ge=ke(Te*Se.width),Ee=ke(Te*Se.height);S===void 0&&(S=R(Ge,Ee));const De=ue?R(Ge,Ee):S;return De.width=Ge,De.height=Ee,De.getContext("2d").drawImage(O,0,0,Ge,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Ge+"x"+Ee+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),O;return O}function _(O){const b=Vt(O);return Zh(b.width)&&Zh(b.height)}function U(O){return f?!1:O.wrapS!==ui||O.wrapT!==ui||O.minFilter!==Rn&&O.minFilter!==On}function A(O,b){return O.generateMipmaps&&b&&O.minFilter!==Rn&&O.minFilter!==On}function N(O){r.generateMipmap(O)}function F(O,b,ue,_e,Te=!1){if(f===!1)return b;if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Se=b;if(b===r.RED&&(ue===r.FLOAT&&(Se=r.R32F),ue===r.HALF_FLOAT&&(Se=r.R16F),ue===r.UNSIGNED_BYTE&&(Se=r.R8)),b===r.RED_INTEGER&&(ue===r.UNSIGNED_BYTE&&(Se=r.R8UI),ue===r.UNSIGNED_SHORT&&(Se=r.R16UI),ue===r.UNSIGNED_INT&&(Se=r.R32UI),ue===r.BYTE&&(Se=r.R8I),ue===r.SHORT&&(Se=r.R16I),ue===r.INT&&(Se=r.R32I)),b===r.RG&&(ue===r.FLOAT&&(Se=r.RG32F),ue===r.HALF_FLOAT&&(Se=r.RG16F),ue===r.UNSIGNED_BYTE&&(Se=r.RG8)),b===r.RG_INTEGER&&(ue===r.UNSIGNED_BYTE&&(Se=r.RG8UI),ue===r.UNSIGNED_SHORT&&(Se=r.RG16UI),ue===r.UNSIGNED_INT&&(Se=r.RG32UI),ue===r.BYTE&&(Se=r.RG8I),ue===r.SHORT&&(Se=r.RG16I),ue===r.INT&&(Se=r.RG32I)),b===r.RGBA){const ke=Te?Iu:Ut.getTransfer(_e);ue===r.FLOAT&&(Se=r.RGBA32F),ue===r.HALF_FLOAT&&(Se=r.RGBA16F),ue===r.UNSIGNED_BYTE&&(Se=ke===Gt?r.SRGB8_ALPHA8:r.RGBA8),ue===r.UNSIGNED_SHORT_4_4_4_4&&(Se=r.RGBA4),ue===r.UNSIGNED_SHORT_5_5_5_1&&(Se=r.RGB5_A1)}return(Se===r.R16F||Se===r.R32F||Se===r.RG16F||Se===r.RG32F||Se===r.RGBA16F||Se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function H(O,b,ue){return A(O,ue)===!0||O.isFramebufferTexture&&O.minFilter!==Rn&&O.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){return O===Rn||O===r_||O===zo?r.NEAREST:r.LINEAR}function ne(O){const b=O.target;b.removeEventListener("dispose",ne),w(b),b.isVideoTexture&&x.delete(b)}function xe(O){const b=O.target;b.removeEventListener("dispose",xe),ye(b)}function w(O){const b=s.get(O);if(b.__webglInit===void 0)return;const ue=O.source,_e=M.get(ue);if(_e){const Te=_e[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&z(O),Object.keys(_e).length===0&&M.delete(ue)}s.remove(O)}function z(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const ue=O.source,_e=M.get(ue);delete _e[b.__cacheKey],d.memory.textures--}function ye(O){const b=s.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let Te=0;Te<b.__webglFramebuffer[_e].length;Te++)r.deleteFramebuffer(b.__webglFramebuffer[_e][Te]);else r.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)r.deleteFramebuffer(b.__webglFramebuffer[_e]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ue=O.textures;for(let _e=0,Te=ue.length;_e<Te;_e++){const Se=s.get(ue[_e]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),d.memory.textures--),s.remove(ue[_e])}s.remove(O)}let Me=0;function V(){Me=0}function ce(){const O=Me;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),Me+=1,O}function P(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function Y(O,b){const ue=s.get(O);if(O.isVideoTexture&&at(O),O.isRenderTargetTexture===!1&&O.version>0&&ue.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(ue,O,b);return}}i.bindTexture(r.TEXTURE_2D,ue.__webglTexture,r.TEXTURE0+b)}function Z(O,b){const ue=s.get(O);if(O.version>0&&ue.__version!==O.version){ve(ue,O,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ue.__webglTexture,r.TEXTURE0+b)}function oe(O,b){const ue=s.get(O);if(O.version>0&&ue.__version!==O.version){ve(ue,O,b);return}i.bindTexture(r.TEXTURE_3D,ue.__webglTexture,r.TEXTURE0+b)}function D(O,b){const ue=s.get(O);if(O.version>0&&ue.__version!==O.version){Ie(ue,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture,r.TEXTURE0+b)}const X={[jh]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[qh]:r.MIRRORED_REPEAT},le={[Rn]:r.NEAREST,[r_]:r.NEAREST_MIPMAP_NEAREST,[zo]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[lh]:r.LINEAR_MIPMAP_NEAREST,[_r]:r.LINEAR_MIPMAP_LINEAR},me={[JM]:r.NEVER,[aE]:r.ALWAYS,[$M]:r.LESS,[Kv]:r.LEQUAL,[eE]:r.EQUAL,[iE]:r.GEQUAL,[tE]:r.GREATER,[nE]:r.NOTEQUAL};function j(O,b,ue){if(b.type===Wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===lh||b.magFilter===zo||b.magFilter===_r||b.minFilter===On||b.minFilter===lh||b.minFilter===zo||b.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ue?(r.texParameteri(O,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,X[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,le[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,le[b.minFilter])):(r.texParameteri(O,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(O,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==ui||b.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(O,r.TEXTURE_MAG_FILTER,I(b.magFilter)),r.texParameteri(O,r.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Rn&&b.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==zo&&b.minFilter!==_r||b.type===Wi&&e.has("OES_texture_float_linear")===!1||f===!1&&b.type===Wo&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const _e=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function fe(O,b){let ue=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",ne));const _e=b.source;let Te=M.get(_e);Te===void 0&&(Te={},M.set(_e,Te));const Se=P(b);if(Se!==O.__cacheKey){Te[Se]===void 0&&(Te[Se]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ue=!0),Te[Se].usedTimes++;const ke=Te[O.__cacheKey];ke!==void 0&&(Te[O.__cacheKey].usedTimes--,ke.usedTimes===0&&z(b)),O.__cacheKey=Se,O.__webglTexture=Te[Se].texture}return ue}function ve(O,b,ue){let _e=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=r.TEXTURE_3D);const Te=fe(O,b),Se=b.source;i.bindTexture(_e,O.__webglTexture,r.TEXTURE0+ue);const ke=s.get(Se);if(Se.version!==ke.__version||Te===!0){i.activeTexture(r.TEXTURE0+ue);const Ge=Ut.getPrimaries(Ut.workingColorSpace),Ee=b.colorSpace===Da?null:Ut.getPrimaries(b.colorSpace),De=b.colorSpace===Da||Ge===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const nt=U(b)&&_(b.image)===!1;let be=v(b.image,nt,!1,l.maxTextureSize);be=lt(b,be);const It=_(be)||f,it=u.convert(b.format,b.colorSpace);let Be=u.convert(b.type),Pe=F(b.internalFormat,it,Be,b.colorSpace,b.isVideoTexture);j(_e,b,It);let ze;const gt=b.mipmaps,et=f&&b.isVideoTexture!==!0&&Pe!==Zv,Nt=ke.__version===void 0||Te===!0,k=Se.dataReady,Re=H(b,be,It);if(b.isDepthTexture)Pe=r.DEPTH_COMPONENT,f?b.type===Wi?Pe=r.DEPTH_COMPONENT32F:b.type===La?Pe=r.DEPTH_COMPONENT24:b.type===vr?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:b.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===xr&&Pe===r.DEPTH_COMPONENT&&b.type!==rd&&b.type!==La&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=La,Be=u.convert(b.type)),b.format===Rs&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,b.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=vr,Be=u.convert(b.type))),Nt&&(et?i.texStorage2D(r.TEXTURE_2D,1,Pe,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,Pe,be.width,be.height,0,it,Be,null));else if(b.isDataTexture)if(gt.length>0&&It){et&&Nt&&i.texStorage2D(r.TEXTURE_2D,Re,Pe,gt[0].width,gt[0].height);for(let ie=0,Ae=gt.length;ie<Ae;ie++)ze=gt[ie],et?k&&i.texSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,it,Be,ze.data):i.texImage2D(r.TEXTURE_2D,ie,Pe,ze.width,ze.height,0,it,Be,ze.data);b.generateMipmaps=!1}else et?(Nt&&i.texStorage2D(r.TEXTURE_2D,Re,Pe,be.width,be.height),k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,be.width,be.height,it,Be,be.data)):i.texImage2D(r.TEXTURE_2D,0,Pe,be.width,be.height,0,it,Be,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Pe,gt[0].width,gt[0].height,be.depth);for(let ie=0,Ae=gt.length;ie<Ae;ie++)ze=gt[ie],b.format!==ci?it!==null?et?k&&i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,be.depth,it,ze.data,0,0):i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Pe,ze.width,ze.height,be.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,be.depth,it,Be,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ie,Pe,ze.width,ze.height,be.depth,0,it,Be,ze.data)}else{et&&Nt&&i.texStorage2D(r.TEXTURE_2D,Re,Pe,gt[0].width,gt[0].height);for(let ie=0,Ae=gt.length;ie<Ae;ie++)ze=gt[ie],b.format!==ci?it!==null?et?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,it,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,ie,Pe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&i.texSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,it,Be,ze.data):i.texImage2D(r.TEXTURE_2D,ie,Pe,ze.width,ze.height,0,it,Be,ze.data)}else if(b.isDataArrayTexture)et?(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Pe,be.width,be.height,be.depth),k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,it,Be,be.data)):i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,be.width,be.height,be.depth,0,it,Be,be.data);else if(b.isData3DTexture)et?(Nt&&i.texStorage3D(r.TEXTURE_3D,Re,Pe,be.width,be.height,be.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,it,Be,be.data)):i.texImage3D(r.TEXTURE_3D,0,Pe,be.width,be.height,be.depth,0,it,Be,be.data);else if(b.isFramebufferTexture){if(Nt)if(et)i.texStorage2D(r.TEXTURE_2D,Re,Pe,be.width,be.height);else{let ie=be.width,Ae=be.height;for(let Le=0;Le<Re;Le++)i.texImage2D(r.TEXTURE_2D,Le,Pe,ie,Ae,0,it,Be,null),ie>>=1,Ae>>=1}}else if(gt.length>0&&It){if(et&&Nt){const ie=Vt(gt[0]);i.texStorage2D(r.TEXTURE_2D,Re,Pe,ie.width,ie.height)}for(let ie=0,Ae=gt.length;ie<Ae;ie++)ze=gt[ie],et?k&&i.texSubImage2D(r.TEXTURE_2D,ie,0,0,it,Be,ze):i.texImage2D(r.TEXTURE_2D,ie,Pe,it,Be,ze);b.generateMipmaps=!1}else if(et){if(Nt){const ie=Vt(be);i.texStorage2D(r.TEXTURE_2D,Re,Pe,ie.width,ie.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,it,Be,be)}else i.texImage2D(r.TEXTURE_2D,0,Pe,it,Be,be);A(b,It)&&N(_e),ke.__version=Se.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ie(O,b,ue){if(b.image.length!==6)return;const _e=fe(O,b),Te=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ue);const Se=s.get(Te);if(Te.version!==Se.__version||_e===!0){i.activeTexture(r.TEXTURE0+ue);const ke=Ut.getPrimaries(Ut.workingColorSpace),Ge=b.colorSpace===Da?null:Ut.getPrimaries(b.colorSpace),Ee=b.colorSpace===Da||ke===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,be=[];for(let ie=0;ie<6;ie++)!De&&!nt?be[ie]=v(b.image[ie],!1,!0,l.maxCubemapSize):be[ie]=nt?b.image[ie].image:b.image[ie],be[ie]=lt(b,be[ie]);const It=be[0],it=_(It)||f,Be=u.convert(b.format,b.colorSpace),Pe=u.convert(b.type),ze=F(b.internalFormat,Be,Pe,b.colorSpace),gt=f&&b.isVideoTexture!==!0,et=Se.__version===void 0||_e===!0,Nt=Te.dataReady;let k=H(b,It,it);j(r.TEXTURE_CUBE_MAP,b,it);let Re;if(De){gt&&et&&i.texStorage2D(r.TEXTURE_CUBE_MAP,k,ze,It.width,It.height);for(let ie=0;ie<6;ie++){Re=be[ie].mipmaps;for(let Ae=0;Ae<Re.length;Ae++){const Le=Re[Ae];b.format!==ci?Be!==null?gt?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Le.width,Le.height,Be,Le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Le.width,Le.height,Be,Pe,Le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,ze,Le.width,Le.height,0,Be,Pe,Le.data)}}}else{if(Re=b.mipmaps,gt&&et){Re.length>0&&k++;const ie=Vt(be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,k,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(nt){gt?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be[ie].width,be[ie].height,Be,Pe,be[ie].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,be[ie].width,be[ie].height,0,Be,Pe,be[ie].data);for(let Ae=0;Ae<Re.length;Ae++){const ut=Re[Ae].image[ie].image;gt?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,ut.width,ut.height,Be,Pe,ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,ze,ut.width,ut.height,0,Be,Pe,ut.data)}}else{gt?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,Pe,be[ie]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Be,Pe,be[ie]);for(let Ae=0;Ae<Re.length;Ae++){const Le=Re[Ae];gt?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Be,Pe,Le.image[ie]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,ze,Be,Pe,Le.image[ie])}}}A(b,it)&&N(r.TEXTURE_CUBE_MAP),Se.__version=Te.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ce(O,b,ue,_e,Te,Se){const ke=u.convert(ue.format,ue.colorSpace),Ge=u.convert(ue.type),Ee=F(ue.internalFormat,ke,Ge,ue.colorSpace);if(!s.get(b).__hasExternalTextures){const nt=Math.max(1,b.width>>Se),be=Math.max(1,b.height>>Se);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?i.texImage3D(Te,Se,Ee,nt,be,b.depth,0,ke,Ge,null):i.texImage2D(Te,Se,Ee,nt,be,0,ke,Ge,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),$e(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Te,s.get(ue).__webglTexture,0,qe(b)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Te,s.get(ue).__webglTexture,Se),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(O,b,ue){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer&&!b.stencilBuffer){let _e=f===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ue||$e(b)){const Te=b.depthTexture;Te&&Te.isDepthTexture&&(Te.type===Wi?_e=r.DEPTH_COMPONENT32F:Te.type===La&&(_e=r.DEPTH_COMPONENT24));const Se=qe(b);$e(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,_e,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,_e,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,_e,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,O)}else if(b.depthBuffer&&b.stencilBuffer){const _e=qe(b);ue&&$e(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,r.DEPTH24_STENCIL8,b.width,b.height):$e(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,O)}else{const _e=b.textures;for(let Te=0;Te<_e.length;Te++){const Se=_e[Te],ke=u.convert(Se.format,Se.colorSpace),Ge=u.convert(Se.type),Ee=F(Se.internalFormat,ke,Ge,Se.colorSpace),De=qe(b);ue&&$e(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Ee,b.width,b.height):$e(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,Ee,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const _e=s.get(b.depthTexture).__webglTexture,Te=qe(b);if(b.depthTexture.format===xr)$e(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(b.depthTexture.format===Rs)$e(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ye(O){const b=s.get(O),ue=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(ue)throw new Error("target.depthTexture not supported in Cube render targets");xt(b.__webglFramebuffer,O)}else if(ue){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]=r.createRenderbuffer(),Ne(b.__webglDepthbuffer[_e],O,!1)}else i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),Ne(b.__webglDepthbuffer,O,!1);i.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(O,b,ue){const _e=s.get(O);b!==void 0&&Ce(_e.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ue!==void 0&&Ye(O)}function Yt(O){const b=O.texture,ue=s.get(O),_e=s.get(b);O.addEventListener("dispose",xe);const Te=O.textures,Se=O.isWebGLCubeRenderTarget===!0,ke=Te.length>1,Ge=_(O)||f;if(ke||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=b.version,d.memory.textures++),Se){ue.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(f&&b.mipmaps&&b.mipmaps.length>0){ue.__webglFramebuffer[Ee]=[];for(let De=0;De<b.mipmaps.length;De++)ue.__webglFramebuffer[Ee][De]=r.createFramebuffer()}else ue.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(f&&b.mipmaps&&b.mipmaps.length>0){ue.__webglFramebuffer=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)ue.__webglFramebuffer[Ee]=r.createFramebuffer()}else ue.__webglFramebuffer=r.createFramebuffer();if(ke)if(l.drawBuffers)for(let Ee=0,De=Te.length;Ee<De;Ee++){const nt=s.get(Te[Ee]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),d.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&O.samples>0&&$e(O)===!1){ue.__webglMultisampledFramebuffer=r.createFramebuffer(),ue.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Te.length;Ee++){const De=Te[Ee];ue.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]);const nt=u.convert(De.format,De.colorSpace),be=u.convert(De.type),It=F(De.internalFormat,nt,be,De.colorSpace,O.isXRRenderTarget===!0),it=qe(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,It,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ue.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(ue.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Se){i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),j(r.TEXTURE_CUBE_MAP,b,Ge);for(let Ee=0;Ee<6;Ee++)if(f&&b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)Ce(ue.__webglFramebuffer[Ee][De],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,De);else Ce(ue.__webglFramebuffer[Ee],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);A(b,Ge)&&N(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ke){for(let Ee=0,De=Te.length;Ee<De;Ee++){const nt=Te[Ee],be=s.get(nt);i.bindTexture(r.TEXTURE_2D,be.__webglTexture),j(r.TEXTURE_2D,nt,Ge),Ce(ue.__webglFramebuffer,O,nt,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),A(nt,Ge)&&N(r.TEXTURE_2D)}i.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(f?Ee=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Ee,_e.__webglTexture),j(Ee,b,Ge),f&&b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)Ce(ue.__webglFramebuffer[De],O,b,r.COLOR_ATTACHMENT0,Ee,De);else Ce(ue.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,Ee,0);A(b,Ge)&&N(Ee),i.unbindTexture()}O.depthBuffer&&Ye(O)}function Ve(O){const b=_(O)||f,ue=O.textures;for(let _e=0,Te=ue.length;_e<Te;_e++){const Se=ue[_e];if(A(Se,b)){const ke=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ge=s.get(Se).__webglTexture;i.bindTexture(ke,Ge),N(ke),i.unbindTexture()}}}function ot(O){if(f&&O.samples>0&&$e(O)===!1){const b=O.textures,ue=O.width,_e=O.height;let Te=r.COLOR_BUFFER_BIT;const Se=[],ke=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(O),Ee=b.length>1;if(Ee)for(let De=0;De<b.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let De=0;De<b.length;De++){Se.push(r.COLOR_ATTACHMENT0+De),O.depthBuffer&&Se.push(ke);const nt=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(nt===!1&&(O.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),Ee&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[De]),nt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ke]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ke])),Ee){const be=s.get(b[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,ue,_e,0,0,ue,_e,Te,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se)}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let De=0;De<b.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[De]);const nt=s.get(b[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,nt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function qe(O){return Math.min(l.maxSamples,O.samples)}function $e(O){const b=s.get(O);return f&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(O){const b=d.render.frame;x.get(O)!==b&&(x.set(O,b),O.update())}function lt(O,b){const ue=O.colorSpace,_e=O.format,Te=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Yh||ue!==Fa&&ue!==Da&&(Ut.getTransfer(ue)===Gt?f===!1?e.has("EXT_sRGB")===!0&&_e===ci?(O.format=Yh,O.minFilter=On,O.generateMipmaps=!1):b=Jv.sRGBToLinear(b):(_e!==ci||Te!==Oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ue)),b}function Vt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=ce,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=D,this.rebindTextures=Q,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=$e}function MR(r,e,i){const s=i.isWebGL2;function l(u,d=Da){let f;const p=Ut.getTransfer(d);if(u===Oa)return r.UNSIGNED_BYTE;if(u===Wv)return r.UNSIGNED_SHORT_4_4_4_4;if(u===Xv)return r.UNSIGNED_SHORT_5_5_5_1;if(u===HM)return r.BYTE;if(u===GM)return r.SHORT;if(u===rd)return r.UNSIGNED_SHORT;if(u===kv)return r.INT;if(u===La)return r.UNSIGNED_INT;if(u===Wi)return r.FLOAT;if(u===Wo)return s?r.HALF_FLOAT:(f=e.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(u===VM)return r.ALPHA;if(u===ci)return r.RGBA;if(u===kM)return r.LUMINANCE;if(u===WM)return r.LUMINANCE_ALPHA;if(u===xr)return r.DEPTH_COMPONENT;if(u===Rs)return r.DEPTH_STENCIL;if(u===Yh)return f=e.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(u===XM)return r.RED;if(u===jv)return r.RED_INTEGER;if(u===jM)return r.RG;if(u===qv)return r.RG_INTEGER;if(u===Yv)return r.RGBA_INTEGER;if(u===uh||u===ch||u===fh||u===hh)if(p===Gt)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(u===uh)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===ch)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===fh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===hh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(u===uh)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===ch)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===fh)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===hh)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===s_||u===o_||u===l_||u===u_)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(u===s_)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===o_)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===l_)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===u_)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Zv)return f=e.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===c_||u===f_)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(u===c_)return p===Gt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(u===f_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===h_||u===d_||u===p_||u===m_||u===g_||u===__||u===v_||u===x_||u===S_||u===y_||u===M_||u===E_||u===T_||u===b_)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(u===h_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===d_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===p_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===m_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===g_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===__)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===v_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===x_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===S_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===y_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===M_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===E_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===T_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===b_)return p===Gt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===dh||u===A_||u===R_)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(u===dh)return p===Gt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===A_)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===R_)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===qM||u===w_||u===C_||u===D_)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(u===dh)return f.COMPRESSED_RED_RGTC1_EXT;if(u===w_)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===C_)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===D_)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?s?r.UNSIGNED_INT_24_8:(f=e.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):r[u]!==void 0?r[u]:null}return{convert:l}}class ER extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Du extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TR={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,s),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=g.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&S>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(TR)))}return f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Du;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const bR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new zn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const s=i.cameras[0].viewport,l=new Ba({extensions:{fragDepth:!0},vertexShader:bR,fragmentShader:AR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new ji(new Ku(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class wR extends Ls{constructor(e,i){super();const s=this;let l=null,u=1,d=null,f="local-floor",p=1,m=null,g=null,x=null,S=null,M=null,E=null;const R=new RR,v=i.getContextAttributes();let _=null,U=null;const A=[],N=[],F=new Tt;let H=null;const I=new ni;I.layers.enable(1),I.viewport=new vn;const ne=new ni;ne.layers.enable(2),ne.viewport=new vn;const xe=[I,ne],w=new ER;w.layers.enable(1),w.layers.enable(2);let z=null,ye=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=A[j];return fe===void 0&&(fe=new Fh,A[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=A[j];return fe===void 0&&(fe=new Fh,A[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=A[j];return fe===void 0&&(fe=new Fh,A[j]=fe),fe.getHandSpace()};function Me(j){const fe=N.indexOf(j.inputSource);if(fe===-1)return;const ve=A[fe];ve!==void 0&&(ve.update(j.inputSource,j.frame,m||d),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){l.removeEventListener("select",Me),l.removeEventListener("selectstart",Me),l.removeEventListener("selectend",Me),l.removeEventListener("squeeze",Me),l.removeEventListener("squeezestart",Me),l.removeEventListener("squeezeend",Me),l.removeEventListener("end",V),l.removeEventListener("inputsourceschange",ce);for(let j=0;j<A.length;j++){const fe=N[j];fe!==null&&(N[j]=null,A[j].disconnect(fe))}z=null,ye=null,R.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,U=null,me.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",Me),l.addEventListener("selectstart",Me),l.addEventListener("selectend",Me),l.addEventListener("squeeze",Me),l.addEventListener("squeezestart",Me),l.addEventListener("squeezeend",Me),l.addEventListener("end",V),l.addEventListener("inputsourceschange",ce),v.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(F),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,fe),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Sr(M.framebufferWidth,M.framebufferHeight,{format:ci,type:Oa,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,ve=null,Ie=null;v.depth&&(Ie=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,fe=v.stencil?Rs:xr,ve=v.stencil?vr:La);const Ce={colorFormat:i.RGBA8,depthFormat:Ie,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Ce),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Sr(S.textureWidth,S.textureHeight,{format:ci,type:Oa,depthTexture:new h0(S.textureWidth,S.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ne=e.properties.get(U);Ne.__ignoreDepthValues=S.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(f),me.setContext(l),me.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ce(j){for(let fe=0;fe<j.removed.length;fe++){const ve=j.removed[fe],Ie=N.indexOf(ve);Ie>=0&&(N[Ie]=null,A[Ie].disconnect(ve))}for(let fe=0;fe<j.added.length;fe++){const ve=j.added[fe];let Ie=N.indexOf(ve);if(Ie===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=N.length){N.push(ve),Ie=Ne;break}else if(N[Ne]===null){N[Ne]=ve,Ie=Ne;break}if(Ie===-1)break}const Ce=A[Ie];Ce&&Ce.connect(ve)}}const P=new re,Y=new re;function Z(j,fe,ve){P.setFromMatrixPosition(fe.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const Ie=P.distanceTo(Y),Ce=fe.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,xt=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),Q=(Ce[9]+1)/Ce[5],Yt=(Ce[9]-1)/Ce[5],Ve=(Ce[8]-1)/Ce[0],ot=(Ne[8]+1)/Ne[0],qe=xt*Ve,$e=xt*ot,at=Ie/(-Ve+ot),lt=at*-Ve;fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(lt),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Vt=xt+at,O=Ye+at,b=qe-lt,ue=$e+(Ie-lt),_e=Q*Ye/O*Vt,Te=Yt*Ye/O*Vt;j.projectionMatrix.makePerspective(b,ue,_e,Te,Vt,O),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function oe(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;R.texture!==null&&(j.near=R.depthNear,j.far=R.depthFar),w.near=ne.near=I.near=j.near,w.far=ne.far=I.far=j.far,(z!==w.near||ye!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,ye=w.far,I.near=z,I.far=ye,ne.near=z,ne.far=ye,I.updateProjectionMatrix(),ne.updateProjectionMatrix(),j.updateProjectionMatrix());const fe=j.parent,ve=w.cameras;oe(w,fe);for(let Ie=0;Ie<ve.length;Ie++)oe(ve[Ie],fe);ve.length===2?Z(w,I,ne):w.projectionMatrix.copy(I.projectionMatrix),D(j,w,fe)};function D(j,fe,ve){ve===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(j){p=j,S!==null&&(S.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return R.texture!==null};let X=null;function le(j,fe){if(g=fe.getViewerPose(m||d),E=fe,g!==null){const ve=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ie=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,Ie=!0);for(let Ne=0;Ne<ve.length;Ne++){const xt=ve[Ne];let Ye=null;if(M!==null)Ye=M.getViewport(xt);else{const Yt=x.getViewSubImage(S,xt);Ye=Yt.viewport,Ne===0&&(e.setRenderTargetTextures(U,Yt.colorTexture,S.ignoreDepthValues?void 0:Yt.depthStencilTexture),e.setRenderTarget(U))}let Q=xe[Ne];Q===void 0&&(Q=new ni,Q.layers.enable(Ne),Q.viewport=new vn,xe[Ne]=Q),Q.matrix.fromArray(xt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(xt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ne===0&&(w.matrix.copy(Q.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ie===!0&&w.cameras.push(Q)}const Ce=l.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ne=x.getDepthInformation(ve[0]);Ne&&Ne.isValid&&Ne.texture&&R.init(e,Ne,l.renderState)}}for(let ve=0;ve<A.length;ve++){const Ie=N[ve],Ce=A[ve];Ie!==null&&Ce!==void 0&&Ce.update(Ie,fe,m||d)}R.render(e,w),X&&X(j,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const me=new f0;me.setAnimationLoop(le),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}}const fr=new Zi,CR=new an;function DR(r,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function s(v,_){_.color.getRGB(v.fogColor.value,o0(r)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,U,A,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),x(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),S(v,_),_.isMeshPhysicalMaterial&&M(v,_,N)):_.isMeshMatcapMaterial?(u(v,_),E(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?p(v,_,U,A):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Pn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Pn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const U=e.get(_),A=U.envMap,N=U.envMapRotation;if(A&&(v.envMap.value=A,fr.copy(N),fr.x*=-1,fr.y*=-1,fr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),v.envMapRotation.value.setFromMatrix4(CR.makeRotationFromEuler(fr)),v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const F=r._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*F,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,U,A){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*U,v.scale.value=A*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function S(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,U){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const U=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function LR(r,e,i,s){let l={},u={},d=[];const f=i.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(U,A){const N=A.program;s.uniformBlockBinding(U,N)}function m(U,A){let N=l[U.id];N===void 0&&(E(U),N=g(U),l[U.id]=N,U.addEventListener("dispose",v));const F=A.program;s.updateUBOMapping(U,F);const H=e.render.frame;u[U.id]!==H&&(S(U),u[U.id]=H)}function g(U){const A=x();U.__bindingPointIndex=A;const N=r.createBuffer(),F=U.__size,H=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,N),N}function x(){for(let U=0;U<f;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const A=l[U.id],N=U.uniforms,F=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let H=0,I=N.length;H<I;H++){const ne=Array.isArray(N[H])?N[H]:[N[H]];for(let xe=0,w=ne.length;xe<w;xe++){const z=ne[xe];if(M(z,H,xe,F)===!0){const ye=z.__offset,Me=Array.isArray(z.value)?z.value:[z.value];let V=0;for(let ce=0;ce<Me.length;ce++){const P=Me[ce],Y=R(P);typeof P=="number"||typeof P=="boolean"?(z.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ye+V,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=0,z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=0,z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=0):(P.toArray(z.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ye,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,A,N,F){const H=U.value,I=A+"_"+N;if(F[I]===void 0)return typeof H=="number"||typeof H=="boolean"?F[I]=H:F[I]=H.clone(),!0;{const ne=F[I];if(typeof H=="number"||typeof H=="boolean"){if(ne!==H)return F[I]=H,!0}else if(ne.equals(H)===!1)return ne.copy(H),!0}return!1}function E(U){const A=U.uniforms;let N=0;const F=16;for(let I=0,ne=A.length;I<ne;I++){const xe=Array.isArray(A[I])?A[I]:[A[I]];for(let w=0,z=xe.length;w<z;w++){const ye=xe[w],Me=Array.isArray(ye.value)?ye.value:[ye.value];for(let V=0,ce=Me.length;V<ce;V++){const P=Me[V],Y=R(P),Z=N%F;Z!==0&&F-Z<Y.boundary&&(N+=F-Z),ye.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ye.__offset=N,N+=Y.storage}}}const H=N%F;return H>0&&(N+=F-H),U.__size=N,U.__cache={},this}function R(U){const A={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(A.boundary=4,A.storage=4):U.isVector2?(A.boundary=8,A.storage=8):U.isVector3||U.isColor?(A.boundary=16,A.storage=12):U.isVector4?(A.boundary=16,A.storage=16):U.isMatrix3?(A.boundary=48,A.storage=48):U.isMatrix4?(A.boundary=64,A.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),A}function v(U){const A=U.target;A.removeEventListener("dispose",v);const N=d.indexOf(A.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(l[A.id]),delete l[A.id],delete u[A.id]}function _(){for(const U in l)r.deleteBuffer(l[U]);d=[],l={},u={}}return{bind:p,update:m,dispose:_}}class v0{constructor(e={}){const{canvas:i=xE(),context:s=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=d;const M=new Uint32Array(4),E=new Int32Array(4);let R=null,v=null;const _=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this._useLegacyLights=!1,this.toneMapping=Na,this.toneMappingExposure=1;const A=this;let N=!1,F=0,H=0,I=null,ne=-1,xe=null;const w=new vn,z=new vn;let ye=null;const Me=new wt(0);let V=0,ce=i.width,P=i.height,Y=1,Z=null,oe=null;const D=new vn(0,0,ce,P),X=new vn(0,0,ce,P);let le=!1;const me=new c0;let j=!1,fe=!1,ve=null;const Ie=new an,Ce=new Tt,Ne=new re,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return I===null?Y:1}let Q=s;function Yt(C,W){for(let ae=0;ae<C.length;ae++){const se=C[ae],$=i.getContext(se,W);if($!==null)return $}return null}try{const C={alpha:!0,depth:l,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ad}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",k,!1),i.addEventListener("webglcontextcreationerror",Re,!1),Q===null){const W=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&W.shift(),Q=Yt(W,C),Q===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ve,ot,qe,$e,at,lt,Vt,O,b,ue,_e,Te,Se,ke,Ge,Ee,De,nt,be,It,it,Be,Pe,ze;function gt(){Ve=new BA(Q),ot=new DA(Q,Ve,e),Ve.init(ot),Be=new MR(Q,Ve,ot),qe=new SR(Q,Ve,ot),$e=new HA(Q),at=new sR,lt=new yR(Q,Ve,qe,at,ot,Be,$e),Vt=new UA(A),O=new zA(A),b=new XE(Q,ot),Pe=new wA(Q,Ve,b,ot),ue=new IA(Q,b,$e,Pe),_e=new WA(Q,ue,b,$e),be=new kA(Q,ot,lt),Ee=new LA(at),Te=new rR(A,Vt,O,Ve,ot,Pe,Ee),Se=new DR(A,at),ke=new lR,Ge=new pR(Ve,ot),nt=new RA(A,Vt,O,qe,_e,S,p),De=new xR(A,_e,ot),ze=new LR(Q,$e,ot,qe),It=new CA(Q,Ve,$e,ot),it=new FA(Q,Ve,$e,ot),$e.programs=Te.programs,A.capabilities=ot,A.extensions=Ve,A.properties=at,A.renderLists=ke,A.shadowMap=De,A.state=qe,A.info=$e}gt();const et=new wR(A,Q);this.xr=et,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=Ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(ce,P,!1))},this.getSize=function(C){return C.set(ce,P)},this.setSize=function(C,W,ae=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,P=W,i.width=Math.floor(C*Y),i.height=Math.floor(W*Y),ae===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ce*Y,P*Y).floor()},this.setDrawingBufferSize=function(C,W,ae){ce=C,P=W,Y=ae,i.width=Math.floor(C*ae),i.height=Math.floor(W*ae),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,W,ae,se){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,W,ae,se),qe.viewport(w.copy(D).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,W,ae,se){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,W,ae,se),qe.scissor(z.copy(X).multiplyScalar(Y).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){qe.setScissorTest(le=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(C=!0,W=!0,ae=!0){let se=0;if(C){let $=!1;if(I!==null){const Ue=I.texture.format;$=Ue===Yv||Ue===qv||Ue===jv}if($){const Ue=I.texture.type,Fe=Ue===Oa||Ue===La||Ue===rd||Ue===vr||Ue===Wv||Ue===Xv,We=nt.getClearColor(),Ze=nt.getClearAlpha(),rt=We.r,Qe=We.g,Je=We.b;Fe?(M[0]=rt,M[1]=Qe,M[2]=Je,M[3]=Ze,Q.clearBufferuiv(Q.COLOR,0,M)):(E[0]=rt,E[1]=Qe,E[2]=Je,E[3]=Ze,Q.clearBufferiv(Q.COLOR,0,E))}else se|=Q.COLOR_BUFFER_BIT}W&&(se|=Q.DEPTH_BUFFER_BIT),ae&&(se|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",k,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),ke.dispose(),Ge.dispose(),at.dispose(),Vt.dispose(),O.dispose(),_e.dispose(),Pe.dispose(),ze.dispose(),Te.dispose(),et.dispose(),et.removeEventListener("sessionstart",Cn),et.removeEventListener("sessionend",_t),ve&&(ve.dispose(),ve=null),St.stop()};function Nt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=$e.autoReset,W=De.enabled,ae=De.autoUpdate,se=De.needsUpdate,$=De.type;gt(),$e.autoReset=C,De.enabled=W,De.autoUpdate=ae,De.needsUpdate=se,De.type=$}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const W=C.target;W.removeEventListener("dispose",ie),Ae(W)}function Ae(C){Le(C),at.remove(C)}function Le(C){const W=at.get(C).programs;W!==void 0&&(W.forEach(function(ae){Te.releaseProgram(ae)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ae,se,$,Ue){W===null&&(W=xt);const Fe=$.isMesh&&$.matrixWorld.determinant()<0,We=$i(C,W,ae,se,$);qe.setMaterial(se,Fe);let Ze=ae.index,rt=1;if(se.wireframe===!0){if(Ze=ue.getWireframeAttribute(ae),Ze===void 0)return;rt=2}const Qe=ae.drawRange,Je=ae.attributes.position;let Mt=Qe.start*rt,pn=(Qe.start+Qe.count)*rt;Ue!==null&&(Mt=Math.max(Mt,Ue.start*rt),pn=Math.min(pn,(Ue.start+Ue.count)*rt)),Ze!==null?(Mt=Math.max(Mt,0),pn=Math.min(pn,Ze.count)):Je!=null&&(Mt=Math.max(Mt,0),pn=Math.min(pn,Je.count));const Zt=pn-Mt;if(Zt<0||Zt===1/0)return;Pe.setup($,se,We,ae,Ze);let xn,Ot=It;if(Ze!==null&&(xn=b.get(Ze),Ot=it,Ot.setIndex(xn)),$.isMesh)se.wireframe===!0?(qe.setLineWidth(se.wireframeLinewidth*Ye()),Ot.setMode(Q.LINES)):Ot.setMode(Q.TRIANGLES);else if($.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),qe.setLineWidth(tt*Ye()),$.isLineSegments?Ot.setMode(Q.LINES):$.isLineLoop?Ot.setMode(Q.LINE_LOOP):Ot.setMode(Q.LINE_STRIP)}else $.isPoints?Ot.setMode(Q.POINTS):$.isSprite&&Ot.setMode(Q.TRIANGLES);if($.isBatchedMesh)Ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ot.renderInstances(Mt,Zt,$.count);else if(ae.isInstancedBufferGeometry){const tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,zs=Math.min(ae.instanceCount,tt);Ot.renderInstances(Mt,Zt,zs)}else Ot.render(Mt,Zt)};function ut(C,W,ae){C.transparent===!0&&C.side===ki&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Ha(C,W,ae),C.side=za,C.needsUpdate=!0,Ha(C,W,ae),C.side=ki):Ha(C,W,ae)}this.compile=function(C,W,ae=null){ae===null&&(ae=C),v=Ge.get(ae),v.init(),U.push(v),ae.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),C!==ae&&C.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights(A._useLegacyLights);const se=new Set;return C.traverse(function($){const Ue=$.material;if(Ue)if(Array.isArray(Ue))for(let Fe=0;Fe<Ue.length;Fe++){const We=Ue[Fe];ut(We,ae,$),se.add(We)}else ut(Ue,ae,$),se.add(Ue)}),U.pop(),v=null,se},this.compileAsync=function(C,W,ae=null){const se=this.compile(C,W,ae);return new Promise($=>{function Ue(){if(se.forEach(function(Fe){at.get(Fe).currentProgram.isReady()&&se.delete(Fe)}),se.size===0){$(C);return}setTimeout(Ue,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let bt=null;function Jt(C){bt&&bt(C)}function Cn(){St.stop()}function _t(){St.start()}const St=new f0;St.setAnimationLoop(Jt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(C){bt=C,et.setAnimationLoop(C),C===null?St.stop():St.start()},et.addEventListener("sessionstart",Cn),et.addEventListener("sessionend",_t),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(W),W=et.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,W,I),v=Ge.get(C,U.length),v.init(),U.push(v),Ie.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),me.setFromProjectionMatrix(Ie),fe=this.localClippingEnabled,j=Ee.init(this.clippingPlanes,fe),R=ke.get(C,_.length),R.init(),_.push(R),Ft(C,W,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(Z,oe),this.info.render.frame++,j===!0&&Ee.beginShadows();const ae=v.state.shadowsArray;if(De.render(ae,C,W),j===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1)&&nt.render(R,C),v.setupLights(A._useLegacyLights),W.isArrayCamera){const se=W.cameras;for(let $=0,Ue=se.length;$<Ue;$++){const Fe=se[$];Mi(R,C,Fe,Fe.viewport)}}else Mi(R,C,W);I!==null&&(lt.updateMultisampleRenderTarget(I),lt.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(A,C,W),Pe.resetDefaultState(),ne=-1,xe=null,U.pop(),U.length>0?v=U[U.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Ft(C,W,ae,se){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||me.intersectsSprite(C)){se&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);const Fe=_e.update(C),We=C.material;We.visible&&R.push(C,Fe,We,ae,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||me.intersectsObject(C))){const Fe=_e.update(C),We=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ne.copy(Fe.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(We)){const Ze=Fe.groups;for(let rt=0,Qe=Ze.length;rt<Qe;rt++){const Je=Ze[rt],Mt=We[Je.materialIndex];Mt&&Mt.visible&&R.push(C,Fe,Mt,ae,Ne.z,Je)}}else We.visible&&R.push(C,Fe,We,ae,Ne.z,null)}}const Ue=C.children;for(let Fe=0,We=Ue.length;Fe<We;Fe++)Ft(Ue[Fe],W,ae,se)}function Mi(C,W,ae,se){const $=C.opaque,Ue=C.transmissive,Fe=C.transparent;v.setupLightsView(ae),j===!0&&Ee.setGlobalState(A.clippingPlanes,ae),Ue.length>0&&Ps($,Ue,W,ae),se&&qe.viewport(w.copy(se)),$.length>0&&yr($,W,ae),Ue.length>0&&yr(Ue,W,ae),Fe.length>0&&yr(Fe,W,ae),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Ps(C,W,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ue=ot.isWebGL2;ve===null&&(ve=new Sr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?Wo:Oa,minFilter:_r,samples:Ue?4:0})),A.getDrawingBufferSize(Ce),Ue?ve.setSize(Ce.x,Ce.y):ve.setSize(Vu(Ce.x),Vu(Ce.y));const Fe=A.getRenderTarget();A.setRenderTarget(ve),A.getClearColor(Me),V=A.getClearAlpha(),V<1&&A.setClearColor(16777215,.5),A.clear();const We=A.toneMapping;A.toneMapping=Na,yr(C,ae,se),lt.updateMultisampleRenderTarget(ve),lt.updateRenderTargetMipmap(ve);let Ze=!1;for(let rt=0,Qe=W.length;rt<Qe;rt++){const Je=W[rt],Mt=Je.object,pn=Je.geometry,Zt=Je.material,xn=Je.group;if(Zt.side===ki&&Mt.layers.test(se.layers)){const Ot=Zt.side;Zt.side=Pn,Zt.needsUpdate=!0,el(Mt,ae,se,pn,Zt,xn),Zt.side=Ot,Zt.needsUpdate=!0,Ze=!0}}Ze===!0&&(lt.updateMultisampleRenderTarget(ve),lt.updateRenderTargetMipmap(ve)),A.setRenderTarget(Fe),A.setClearColor(Me,V),A.toneMapping=We}function yr(C,W,ae){const se=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Ue=C.length;$<Ue;$++){const Fe=C[$],We=Fe.object,Ze=Fe.geometry,rt=se===null?Fe.material:se,Qe=Fe.group;We.layers.test(ae.layers)&&el(We,W,ae,Ze,rt,Qe)}}function el(C,W,ae,se,$,Ue){C.onBeforeRender(A,W,ae,se,$,Ue),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,W,ae,se,C,Ue),$.transparent===!0&&$.side===ki&&$.forceSinglePass===!1?($.side=Pn,$.needsUpdate=!0,A.renderBufferDirect(ae,W,se,$,C,Ue),$.side=za,$.needsUpdate=!0,A.renderBufferDirect(ae,W,se,$,C,Ue),$.side=ki):A.renderBufferDirect(ae,W,se,$,C,Ue),C.onAfterRender(A,W,ae,se,$,Ue)}function Ha(C,W,ae){W.isScene!==!0&&(W=xt);const se=at.get(C),$=v.state.lights,Ue=v.state.shadowsArray,Fe=$.state.version,We=Te.getParameters(C,$.state,Ue,W,ae),Ze=Te.getProgramCacheKey(We);let rt=se.programs;se.environment=C.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(C.isMeshStandardMaterial?O:Vt).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ie),rt=new Map,se.programs=rt);let Qe=rt.get(Ze);if(Qe!==void 0){if(se.currentProgram===Qe&&se.lightsStateVersion===Fe)return Mr(C,We),Qe}else We.uniforms=Te.getUniforms(C),C.onBuild(ae,We,A),C.onBeforeCompile(We,A),Qe=Te.acquireProgram(We,Ze),rt.set(Ze,Qe),se.uniforms=We.uniforms;const Je=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=Ee.uniform),Mr(C,We),se.needsLights=Ga(C),se.lightsStateVersion=Fe,se.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=Qe,se.uniformsList=null,Qe}function Ji(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Pu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Mr(C,W){const ae=at.get(C);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function $i(C,W,ae,se,$){W.isScene!==!0&&(W=xt),lt.resetTextureUnits();const Ue=W.fog,Fe=se.isMeshStandardMaterial?W.environment:null,We=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fa,Ze=(se.isMeshStandardMaterial?O:Vt).get(se.envMap||Fe),rt=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Qe=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,pn=!!ae.morphAttributes.color;let Zt=Na;se.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Zt=A.toneMapping);const xn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ot=xn!==void 0?xn.length:0,tt=at.get(se),zs=v.state.lights;if(j===!0&&(fe===!0||C!==xe)){const Ht=C===xe&&se.id===ne;Ee.setState(se,C,Ht)}let Pt=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==zs.state.version||tt.outputColorSpace!==We||$.isBatchedMesh&&tt.batching===!1||!$.isBatchedMesh&&tt.batching===!0||$.isInstancedMesh&&tt.instancing===!1||!$.isInstancedMesh&&tt.instancing===!0||$.isSkinnedMesh&&tt.skinning===!1||!$.isSkinnedMesh&&tt.skinning===!0||$.isInstancedMesh&&tt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&tt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&tt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&tt.instancingMorph===!1&&$.morphTexture!==null||tt.envMap!==Ze||se.fog===!0&&tt.fog!==Ue||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ee.numPlanes||tt.numIntersection!==Ee.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==Qe||tt.morphTargets!==Je||tt.morphNormals!==Mt||tt.morphColors!==pn||tt.toneMapping!==Zt||ot.isWebGL2===!0&&tt.morphTargetsCount!==Ot)&&(Pt=!0):(Pt=!0,tt.__version=se.version);let $t=tt.currentProgram;Pt===!0&&($t=Ha(se,W,$));let Bs=!1,Va=!1,ta=!1;const rn=$t.getUniforms(),qn=tt.uniforms;if(qe.useProgram($t.program)&&(Bs=!0,Va=!0,ta=!0),se.id!==ne&&(ne=se.id,Va=!0),Bs||xe!==C){rn.setValue(Q,"projectionMatrix",C.projectionMatrix),rn.setValue(Q,"viewMatrix",C.matrixWorldInverse);const Ht=rn.map.cameraPosition;Ht!==void 0&&Ht.setValue(Q,Ne.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&rn.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&rn.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),xe!==C&&(xe=C,Va=!0,ta=!0)}if($.isSkinnedMesh){rn.setOptional(Q,$,"bindMatrix"),rn.setOptional(Q,$,"bindMatrixInverse");const Ht=$.skeleton;Ht&&(ot.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),rn.setValue(Q,"boneTexture",Ht.boneTexture,lt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(rn.setOptional(Q,$,"batchingTexture"),rn.setValue(Q,"batchingTexture",$._matricesTexture,lt));const Is=ae.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&ot.isWebGL2===!0)&&be.update($,ae,$t),(Va||tt.receiveShadow!==$.receiveShadow)&&(tt.receiveShadow=$.receiveShadow,rn.setValue(Q,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(qn.envMap.value=Ze,qn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Va&&(rn.setValue(Q,"toneMappingExposure",A.toneMappingExposure),tt.needsLights&&ea(qn,ta),Ue&&se.fog===!0&&Se.refreshFogUniforms(qn,Ue),Se.refreshMaterialUniforms(qn,se,Y,P,ve),Pu.upload(Q,Ji(tt),qn,lt)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Pu.upload(Q,Ji(tt),qn,lt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&rn.setValue(Q,"center",$.center),rn.setValue(Q,"modelViewMatrix",$.modelViewMatrix),rn.setValue(Q,"normalMatrix",$.normalMatrix),rn.setValue(Q,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Ht=se.uniformsGroups;for(let ka=0,tl=Ht.length;ka<tl;ka++)if(ot.isWebGL2){const Er=Ht[ka];ze.update(Er,$t),ze.bind(Er,$t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $t}function ea(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ga(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,W,ae){at.get(C.texture).__webglTexture=W,at.get(C.depthTexture).__webglTexture=ae;const se=at.get(C);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ae===void 0,se.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ae=at.get(C);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ae=0){I=C,F=W,H=ae;let se=!0,$=null,Ue=!1,Fe=!1;if(C){const Ze=at.get(C);Ze.__useDefaultFramebuffer!==void 0?(qe.bindFramebuffer(Q.FRAMEBUFFER,null),se=!1):Ze.__webglFramebuffer===void 0?lt.setupRenderTarget(C):Ze.__hasExternalTextures&&lt.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Fe=!0);const Qe=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?$=Qe[W][ae]:$=Qe[W],Ue=!0):ot.isWebGL2&&C.samples>0&&lt.useMultisampledRTT(C)===!1?$=at.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?$=Qe[ae]:$=Qe,w.copy(C.viewport),z.copy(C.scissor),ye=C.scissorTest}else w.copy(D).multiplyScalar(Y).floor(),z.copy(X).multiplyScalar(Y).floor(),ye=le;if(qe.bindFramebuffer(Q.FRAMEBUFFER,$)&&ot.drawBuffers&&se&&qe.drawBuffers(C,$),qe.viewport(w),qe.scissor(z),qe.setScissorTest(ye),Ue){const Ze=at.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ze.__webglTexture,ae)}else if(Fe){const Ze=at.get(C.texture),rt=W||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ze.__webglTexture,ae||0,rt)}ne=-1},this.readRenderTargetPixels=function(C,W,ae,se,$,Ue,Fe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(We=We[Fe]),We){qe.bindFramebuffer(Q.FRAMEBUFFER,We);try{const Ze=C.texture,rt=Ze.format,Qe=Ze.type;if(rt!==ci&&Be.convert(rt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Qe===Wo&&(Ve.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(Qe!==Oa&&Be.convert(Qe)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Wi&&(ot.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-se&&ae>=0&&ae<=C.height-$&&Q.readPixels(W,ae,se,$,Be.convert(rt),Be.convert(Qe),Ue)}finally{const Ze=I!==null?at.get(I).__webglFramebuffer:null;qe.bindFramebuffer(Q.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(C,W,ae=0){const se=Math.pow(2,-ae),$=Math.floor(W.image.width*se),Ue=Math.floor(W.image.height*se);lt.setTexture2D(W,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ae,0,0,C.x,C.y,$,Ue),qe.unbindTexture()},this.copyTextureToTexture=function(C,W,ae,se=0){const $=W.image.width,Ue=W.image.height,Fe=Be.convert(ae.format),We=Be.convert(ae.type);lt.setTexture2D(ae,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ae.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ae.unpackAlignment),W.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,se,C.x,C.y,$,Ue,Fe,We,W.image.data):W.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,se,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Fe,W.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,se,C.x,C.y,Fe,We,W.image),se===0&&ae.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ae,se,$=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=Math.round(C.max.x-C.min.x),Fe=Math.round(C.max.y-C.min.y),We=C.max.z-C.min.z+1,Ze=Be.convert(se.format),rt=Be.convert(se.type);let Qe;if(se.isData3DTexture)lt.setTexture3D(se,0),Qe=Q.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)lt.setTexture2DArray(se,0),Qe=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,se.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,se.unpackAlignment);const Je=Q.getParameter(Q.UNPACK_ROW_LENGTH),Mt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),pn=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Zt=Q.getParameter(Q.UNPACK_SKIP_ROWS),xn=Q.getParameter(Q.UNPACK_SKIP_IMAGES),Ot=ae.isCompressedTexture?ae.mipmaps[$]:ae.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Ot.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ot.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,C.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,C.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,C.min.z),ae.isDataTexture||ae.isData3DTexture?Q.texSubImage3D(Qe,$,W.x,W.y,W.z,Ue,Fe,We,Ze,rt,Ot.data):se.isCompressedArrayTexture?Q.compressedTexSubImage3D(Qe,$,W.x,W.y,W.z,Ue,Fe,We,Ze,Ot.data):Q.texSubImage3D(Qe,$,W.x,W.y,W.z,Ue,Fe,We,Ze,rt,Ot),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Je),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Mt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,pn),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Zt),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,xn),$===0&&se.generateMipmaps&&Q.generateMipmap(Qe),qe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?lt.setTextureCube(C,0):C.isData3DTexture?lt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?lt.setTexture2DArray(C,0):lt.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){F=0,H=0,I=null,qe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===sd?"display-p3":"srgb",i.unpackColorSpace=Ut.workingColorSpace===Yu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UR extends v0{}UR.prototype.isWebGL1Renderer=!0;class NR extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class x0 extends Jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yv=new an,Qh=new t0,Lu=new Zu,Uu=new re;class OR extends Bn{constructor(e=new Qi,i=new x0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lu.copy(s.boundingSphere),Lu.applyMatrix4(l),Lu.radius+=u,e.ray.intersectsSphere(Lu)===!1)return;yv.copy(l).invert(),Qh.copy(e.ray).applyMatrix4(yv);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=s.index,x=s.attributes.position;if(m!==null){const S=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let E=S,R=M;E<R;E++){const v=m.getX(E);Uu.fromBufferAttribute(x,v),Mv(Uu,v,p,l,e,i,this)}}else{const S=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let E=S,R=M;E<R;E++)Uu.fromBufferAttribute(x,E),Mv(Uu,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function Mv(r,e,i,s,l,u,d){const f=Qh.distanceSqToPoint(r);if(f<i){const p=new re;Qh.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,object:d})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);const PR=()=>{const r=he.useRef();return he.useEffect(()=>{const e=r.current,i=new NR,s=new ni(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=5;const l=new v0({canvas:e,antialias:!0});l.setSize(window.innerWidth,window.innerHeight);const u=new Qi,d=[];for(let x=0;x<1e4;x++)d.push(ph.randFloatSpread(200),ph.randFloatSpread(200),ph.randFloatSpread(200));u.setAttribute("position",new Pa(d,3));const f=new x0({color:16777215,size:.5}),p=new OR(u,f);i.add(p);const m=()=>{requestAnimationFrame(m),p.rotation.x+=5e-4,p.rotation.y+=.001,l.render(i,s)};m();const g=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),L.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,zIndex:-1,width:"100%",height:"100%"}})},Os="My fortfolio";function zR(){return he.useEffect(()=>{document.title=`${Os} - Home`},[]),L.jsx(L.Fragment,{children:L.jsxs("main",{children:[L.jsxs("div",{className:"name",children:[L.jsx("h2",{children:"Lucy Du"}),L.jsx("h2",{children:"Software Developer"}),L.jsxs("div",{className:"introduction",children:[L.jsx("p",{children:"I am a full stack developer with a passion for building user-friendly web applications. My expertise includes C#, .NET, JavaScript, React, and Node.js, and I have experience in both front-end and back-end development."}),L.jsx("p",{children:"With a strong foundation in full stack development, practical industry project experience, and a soon-to-be-completed Software Systems Development certificate from BCIT, I am confident in my ability to contribute effectively to your development team. Throughout my academic and professional journey, I’ve taken on progressively responsible roles that required both individual initiative and teamwork. At BCIT, I led a team in developing a shopping cart backend for an industry-sponsored project, where I implemented RESTful APIs, designed SQL Server tables, and applied the DTO pattern for clean data management. My hands-on experience extends to modern frameworks like React, Node.js, and .NET Core MVC, and I’ve built and deployed scalable web applications on AWS. In my role at Foggix, I contributed to a real-time elevator monitoring platform, using Vue.js, PostgreSQL, and Node.js, and introduced automated fault detection that improved maintenance efficiency. At Holinova, I worked on system integration and built an automation testing framework, enhancing software reliability. My diverse technical skill set, combined with my ability to adapt quickly and communicate effectively in both English and Chinese, make me a strong candidate for this role. I am particularly drawn to [Company Name] because of your commitment to innovation and the opportunity to work with a team that values quality and user-focused development. I would welcome the chance to discuss how I can contribute to your team. Thank you for considering my application. I look forward to the opportunity to speak with you further."}),L.jsxs(ju,{to:"/about",className:"see-more-link",children:["See more about me",L.jsx("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fill:"white",fillRule:"evenodd",clipRule:"evenodd",children:L.jsx("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})})]})]})]}),L.jsx(PR,{}),L.jsx("div",{})]})})}const BR="/portfolio/assets/peakmotion-small-zvy540_x.gif",IR="/portfolio/assets/movie-small-D6s1RF_4.gif",FR="/portfolio/assets/aivideogenerator-small-fxaEKSfe.gif",HR="/portfolio/assets/postdashboard-small-B9ATKDzt.gif",GR="/portfolio/assets/news-small-C64Z8zpg.gif",VR="/portfolio/assets/openworld-small-CLJGXYLn.gif";function kR({isOpen:r,onClose:e,children:i,projectLink:s}){return L.jsxs(L.Fragment,{children:[r&&L.jsx("div",{className:"overlay",onClick:e}),L.jsxs("div",{className:`slide-panel ${r?"open":""}`,children:[L.jsxs("div",{className:"panel-header",children:[L.jsx("button",{onClick:e,className:"close-button",children:L.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:L.jsx("path",{d:"M15 18L9 12L15 6",stroke:"silver",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),L.jsx("a",{href:"#",onClick:e,className:"back-button",children:"Back to Projects"})]}),L.jsx("div",{className:"underline"}),L.jsx("div",{className:"panel-content",children:i}),s&&L.jsx("div",{className:"open-project",children:L.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:["Open Project",L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",style:{marginLeft:"0.5rem"},children:L.jsx("path",{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z",fill:"currentColor"})})]})})]})]})}const WR="/portfolio/assets/peakmotion-D0Vszsfp.gif";function XR(){return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"project-summary",children:[L.jsx("h4",{children:"PeakMotion"}),L.jsx("p",{children:"The website allows users to browse products, add them to their cart, and complete purchases securely. The admin panel enables easy management of products, orders, and user accounts."}),L.jsx("img",{src:WR,alt:"peakmotion ecommerce website",className:"clickable"})]}),L.jsxs("div",{className:"project-about",children:[L.jsx("h4",{children:"About"}),L.jsx("p",{children:"Peakmotion is an e-commerce website that I developed using ASP.NET, MVC Pattern, and the Identity framework. It features a user-friendly interface, secure authentication, and a seamless shopping experience."})]}),L.jsxs("div",{className:"project-technologies",children:[L.jsx("h4",{children:"Technologies"}),L.jsxs("ul",{children:[L.jsx("li",{children:"C#"}),L.jsx("li",{children:"MVC"}),L.jsx("li",{children:"Identity framework"}),L.jsx("li",{children:"JavaScript (ES6+)"}),L.jsx("li",{children:"Bootstrap & CSS3"}),L.jsx("li",{children:"HTML5"}),L.jsx("li",{children:"PostgreSQL"})]})]}),L.jsxs("div",{className:"project-website",children:[L.jsx("h4",{children:"Website"}),L.jsx("a",{href:""})]}),L.jsxs("div",{className:"project-links",children:[L.jsx("h4",{children:"Github"}),L.jsx("a",{href:"https://github.com/durongchun/peakmotion",children:"https://github.com/durongchun/peakmotion"})]})]})}const jR="/portfolio/assets/movie-Bi_0iaj6.gif";function qR(){return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"project-summary",children:[L.jsx("h4",{children:"Movie"}),L.jsx("p",{children:"Movie is a full-stack website that allows users to filter movies and manage their favorite movies or watch later lists."}),L.jsx("img",{src:jR,alt:"movie website",className:"clickable"})]}),L.jsxs("div",{className:"project-about",children:[L.jsx("h4",{children:"About"}),L.jsxs("p",{children:["Movie is a full-stack website that provides a platform for users to filter movies, and add, remove favorite movies or watch later. It features a user-friendly interface with a responsive design, ensuring a seamless experience across devices. The website is built using React for the frontend and Node.js for the backend, with DynamoDB as the database solution.",L.jsx("br",{})]})]}),L.jsxs("div",{className:"project-technologies",children:[L.jsx("h4",{children:"Technologies"}),L.jsxs("ul",{children:[L.jsx("li",{children:"React"}),L.jsx("li",{children:"Node"}),L.jsx("li",{children:"DynamoDB"}),L.jsx("li",{children:"JavaScript (ES6+)"}),L.jsx("li",{children:"Sass & CSS3"}),L.jsx("li",{children:"HTML5"})]})]}),L.jsxs("div",{className:"project-website",children:[L.jsx("h4",{children:"Website"}),L.jsx("a",{href:""})]}),L.jsxs("div",{className:"project-links",children:[L.jsx("h4",{children:"Github"}),L.jsx("a",{href:"https://github.com/durongchun/movie",children:"https://github.com/durongchun/movie"})]})]})}const YR="/portfolio/assets/aivideogenerator-CDRFTImt.gif";function ZR(){return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"project-summary",children:[L.jsx("h4",{children:"Ai Video Generator"}),L.jsx("img",{src:YR,alt:"aivideogenerator website",className:"clickable"})]}),L.jsxs("div",{className:"project-about",children:[L.jsx("h4",{children:"About"}),L.jsxs("p",{children:["Ai Video Generator is started developing with Vue 3 in Vite to filter Video. It features a user-friendly interface with a responsive design, ensuring a seamless experience across devices.",L.jsx("br",{})]})]}),L.jsxs("div",{className:"project-technologies",children:[L.jsx("h4",{children:"Technologies"}),L.jsxs("ul",{children:[L.jsx("li",{children:"Vue"}),L.jsx("li",{children:"JavaScript (ES6+)"}),L.jsx("li",{children:"CSS3"}),L.jsx("li",{children:"HTML5"}),L.jsx("li",{children:"Vite"})]})]}),L.jsxs("div",{className:"project-website",children:[L.jsx("h4",{children:"Website"}),L.jsx("a",{href:""})]}),L.jsxs("div",{className:"project-links",children:[L.jsx("h4",{children:"Github"}),L.jsx("a",{href:"https://github.com/durongchun/vue-aivideogenerator",children:"https://github.com/durongchun/vue-aivideogenerator"})]})]})}const KR="/portfolio/assets/postdashboard-IxcqNtCb.gif";function QR(){return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"project-summary",children:[L.jsx("h4",{children:"PostDashboard"}),L.jsx("img",{src:KR,alt:"postdashboard website",className:"clickable"})]}),L.jsxs("div",{className:"project-about",children:[L.jsx("h4",{children:"About"}),L.jsxs("p",{children:["PostDashboard is add/remove favorite posts website, which is using Angular Pipes - Creating and using a custom pipe, Filter projects by tag, Refactoring for modularity, Setting up interfaces for data and Component Communication (Input/Output).",L.jsx("br",{})]})]}),L.jsxs("div",{className:"project-technologies",children:[L.jsx("h4",{children:"Technologies"}),L.jsxs("ul",{children:[L.jsx("li",{children:"Angular"}),L.jsx("li",{children:"TypeScript"}),L.jsx("li",{children:"CSS3"}),L.jsx("li",{children:"HTML5"})]})]}),L.jsxs("div",{className:"project-website",children:[L.jsx("h4",{children:"Website"}),L.jsx("a",{href:""})]}),L.jsxs("div",{className:"project-links",children:[L.jsx("h4",{children:"Github"}),L.jsx("a",{href:"https://github.com/durongchun/angular-postsdashboard",children:"https://github.com/durongchun/angular-postsdashboard"})]})]})}const JR="/portfolio/assets/news-BNyx51x9.gif";function $R(){return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"project-summary",children:[L.jsx("h4",{children:"Eddy News"}),L.jsx("img",{src:JR,alt:"news website",className:"clickable"})]}),L.jsxs("div",{className:"project-about",children:[L.jsx("h4",{children:"About"}),L.jsxs("p",{children:["Eddy News is a website that provides a platform for users to read eddy news. It features a user-friendly interface with a responsive design, ensuring a seamless experience across devices. The website is built using Sass, CSS animation and Javascript.",L.jsx("br",{})]})]}),L.jsxs("div",{className:"project-technologies",children:[L.jsx("h4",{children:"Technologies"}),L.jsxs("ul",{children:[L.jsx("li",{children:"JavaScript (ES6+)"}),L.jsx("li",{children:"Sass & CSS3"}),L.jsx("li",{children:"HTML5"})]})]}),L.jsxs("div",{className:"project-website",children:[L.jsx("h4",{children:"Website"}),L.jsx("a",{href:""})]}),L.jsxs("div",{className:"project-links",children:[L.jsx("h4",{children:"Github"}),L.jsx("a",{href:"https://github.com/durongchun/news",children:"https://github.com/durongchun/news"})]})]})}const ew="/portfolio/assets/openworld-78l2pBAV.gif";function tw(){return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"project-summary",children:[L.jsx("h4",{children:"OpenWorld"}),L.jsx("img",{src:ew,alt:"news website",className:"clickable"})]}),L.jsxs("div",{className:"project-about",children:[L.jsx("h4",{children:"About"}),L.jsxs("p",{children:["OpenWorld is a website that provides a platform for users to choose the different travel locations in the world. It features a user-friendly interface with a responsive design, ensuring a seamless experience across devices. The website is built using Sass, CSS and Javascript.",L.jsx("br",{})]})]}),L.jsxs("div",{className:"project-technologies",children:[L.jsx("h4",{children:"Technologies"}),L.jsxs("ul",{children:[L.jsx("li",{children:"JavaScript (ES6+)"}),L.jsx("li",{children:"Sass & CSS3"}),L.jsx("li",{children:"HTML5"})]})]}),L.jsxs("div",{className:"project-website",children:[L.jsx("h4",{children:"Website"}),L.jsx("a",{href:""})]}),L.jsxs("div",{className:"project-links",children:[L.jsx("h4",{children:"Github"}),L.jsx("a",{href:"https://github.com/durongchun/openworld",children:"https://github.com/durongchun/openworld"})]})]})}function nw(){he.useEffect(()=>{document.title=`${Os} - Projects`},[]);const[r,e]=he.useState(null),i={peakmotion:"https://github.com/durongchun/peakmotion",movie:"https://github.com/durongchun/movie",news:"https://github.com/durongchun/news",aivideogenerator:"https://github.com/durongchun/vue-aivideogenerator",postdashboard:"https://github.com/durongchun/angular-postsdashboard",openworld:"https://github.com/durongchun/openworld"},s=u=>{e(u)},l=()=>{e(null)};return L.jsxs(L.Fragment,{children:[L.jsx("main",{children:L.jsxs("div",{className:"projects-container",children:[L.jsxs("div",{className:"projects",children:[L.jsx("div",{children:L.jsx("img",{src:BR,alt:"peakmotion ecommerce website",onClick:()=>s("peakmotion"),className:"clickable"})}),L.jsx("div",{children:L.jsx("img",{src:IR,alt:"movie website",onClick:()=>s("movie"),className:"clickable"})})]}),L.jsxs("div",{className:"projects",children:[L.jsx("div",{children:L.jsx("img",{src:GR,alt:"news",onClick:()=>s("news"),className:"clickable"})}),L.jsx("div",{children:L.jsx("img",{src:HR,alt:"postdashboard",onClick:()=>s("postdashboard"),className:"clickable"})})]}),L.jsxs("div",{className:"projects",children:[L.jsx("div",{children:L.jsx("img",{src:FR,alt:"ai video generator",onClick:()=>s("aivideogenerator"),className:"clickable"})}),L.jsx("div",{children:L.jsx("img",{src:VR,alt:"openworld",onClick:()=>s("openworld"),className:"clickable"})})]})]})}),L.jsxs(kR,{isOpen:!!r,onClose:l,projectLink:i[r],children:[r==="peakmotion"&&L.jsx(XR,{}),r==="movie"&&L.jsx(qR,{}),r==="news"&&L.jsx($R,{}),r==="aivideogenerator"&&L.jsx(ZR,{}),r==="postdashboard"&&L.jsx(QR,{}),r==="openworld"&&L.jsx(tw,{})]})]})}function iw(){return he.useEffect(()=>{document.title=`${Os} - About`},[]),L.jsx("main",{children:L.jsxs("section",{className:"about timeline",children:[L.jsx("h2",{children:"About Me."}),L.jsxs("div",{className:"timeline-item",children:[L.jsx("p",{children:" Heymate - BCIT Industry Client Project"}),L.jsx("p",{children:"Led a team of 3 students through the full SDLC—from requirement gathering to development, testing, and delivery."}),L.jsx("p",{children:". Developed the shopping cart backend, implementing 12 RESTful API endpoints across three controllers: RetailStoreController, RetailCartController, and RetailProductController."}),L.jsx("p",{children:". Designed and created two SQL Server tables: RetailCart and RetailCartItem, and implemented two stored procedures to handle core operations."}),L.jsx("p",{children:". Applied the DTO pattern to ensure clean separation between data models and API contracts."}),L.jsx("p",{children:". Collaborated with the frontend team during integration testing, resolving issues and verifying data flow across components.  Managed version control using Bitbucket, handling branch strategy, code reviews, merges."})]}),L.jsxs("div",{className:"timeline-item",children:[L.jsx("p",{children:"Foggix - Real-time Elevator Monitoring Platform"}),L.jsx("p",{children:". Contributed to the development of a real-time elevator monitoring platform, enhancing system reliability and performance."}),L.jsx("p",{children:". Developed the frontend using Vue.js, integrating with a PostgreSQL database and Node.js backend."}),L.jsx("p",{children:". Implemented automated fault detection algorithms, improving maintenance efficiency by 30%."})]}),L.jsxs("div",{className:"timeline-item",children:[L.jsx("p",{children:"Holinova - System Integration and Automation Testing"}),L.jsx("p",{children:". Worked on system integration for a large-scale software project, ensuring seamless communication between components."}),L.jsx("p",{children:". Developed an automation testing framework using Python and Selenium, enhancing software reliability and reducing manual testing time by 40%."})]})]})})}const aw="/portfolio/assets/photo-DJRPt6K2.jpeg";function rw(){he.useEffect(()=>{document.title=`${Os} - Resume`},[]);const r=()=>{const e="/Lucy_Resume.pdf",i=document.createElement("a");i.href=e,i.download="Lucy_Resume.pdf",document.body.appendChild(i),i.click(),document.body.removeChild(i)};return L.jsx("main",{children:L.jsxs("div",{className:"resume",children:[L.jsxs("div",{children:[L.jsx("img",{src:aw,alt:"Lucy-photo",className:"photo"}),L.jsx("h1",{children:"Full Stack Developer"}),L.jsx("p",{children:"I’m Lucy, a Full Stack Web Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js). I am proficient in C#, HTML, CSS, JavaScript, SQL, and frameworks like .NET Core, React, Angular, and Node.js. Experienced with databases such as MongoDB, MySQL, and DynamoDB, and cloud services like AWS and Firebase. I’m passionate about building scalable solutions and continuously enhancing my skills."})]}),L.jsx("button",{onClick:r,className:"download-button",children:"Download Resume"})]})})}const jo={_origin:"https://api.emailjs.com"},sw=(r,e="https://api.emailjs.com")=>{jo._userID=r,jo._origin=e},S0=(r,e,i)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ev{constructor(e){this.status=e.status,this.text=e.responseText}}const y0=(r,e,i={})=>new Promise((s,l)=>{const u=new XMLHttpRequest;u.addEventListener("load",({target:d})=>{const f=new Ev(d);f.status===200||f.text==="OK"?s(f):l(f)}),u.addEventListener("error",({target:d})=>{l(new Ev(d))}),u.open("POST",jo._origin+r,!0),Object.keys(i).forEach(d=>{u.setRequestHeader(d,i[d])}),u.send(e)}),ow=(r,e,i,s)=>{const l=s||jo._userID;return S0(l,r,e),y0("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:r,template_id:e,template_params:i}),{"Content-type":"application/json"})},lw=r=>{let e;if(typeof r=="string"?e=document.querySelector(r):e=r,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},uw=(r,e,i,s)=>{const l=s||jo._userID,u=lw(i);S0(l,r,e);const d=new FormData(u);return d.append("lib_version","3.2.0"),d.append("service_id",r),d.append("template_id",e),d.append("user_id",l),y0("/api/v1.0/email/send-form",d)},cw={init:sw,send:ow,sendForm:uw};function fw(){he.useEffect(()=>{document.title=`${Os} - Email`},[]);const r=e=>{e.preventDefault(),cw.sendForm("service_9qh6mb9","template_qbuu0ea",e.target,"BkixjSpZH3z8-od7x").then(()=>{alert("Message sent!")},()=>{alert("Failed to send message.")}),e.target.reset()};return L.jsx("main",{children:L.jsxs("section",{className:"contact",children:[L.jsx("h2",{children:"Contact."}),L.jsxs("p",{children:["Get in touch or shoot me an email directly at"," ",L.jsx("a",{href:"mailto:durongchun@hotmail.com",className:"email",children:"durongchun@hotmail.com"})]}),L.jsxs("form",{onSubmit:r,children:[L.jsx("div",{children:L.jsx("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",required:!0})}),L.jsx("div",{children:L.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",required:!0})}),L.jsx("div",{children:L.jsx("textarea",{name:"message",rows:"5",className:"form-control",placeholder:"Message",required:!0})}),L.jsx("button",{type:"submit",children:"Send Message"})]})]})})}function hw(){return he.useEffect(()=>{document.title=`${Os} - Page Not Found`},[]),L.jsx("main",{children:L.jsxs("section",{children:[L.jsx("h2",{children:"404 ... : ("}),L.jsx("p",{children:"Page not found."}),L.jsxs("p",{children:["Go to ",L.jsx(ju,{to:"/",children:"Home"})," page."]})]})})}function dw(){const[r,e]=he.useState({x:0,y:0});return he.useEffect(()=>{const i=s=>{e({x:s.clientX,y:s.clientY})};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]),L.jsx("div",{className:"custom-cursor",style:{left:`${r.x}px`,top:`${r.y}px`}})}function pw(){return L.jsx(Yy,{basename:"/portfolio",children:L.jsxs("div",{className:"wrapper",children:[L.jsx(dw,{}),L.jsx(iM,{}),L.jsxs(by,{children:[L.jsx(hr,{path:"/",exact:!0,element:L.jsx(zR,{})}),L.jsx(hr,{path:"/projects",element:L.jsx(nw,{})}),L.jsx(hr,{path:"/about",element:L.jsx(iw,{})}),L.jsx(hr,{path:"/resume",element:L.jsx(rw,{})}),L.jsx(hr,{path:"/email",element:L.jsx(fw,{})}),L.jsx(hr,{path:"*",element:L.jsx(hw,{})})]})]})})}OS.createRoot(document.getElementById("root")).render(L.jsx(he.StrictMode,{children:L.jsx(pw,{})}));
