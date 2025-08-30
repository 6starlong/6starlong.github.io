const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D98rFPTH.js","./CfiUjsuU.js","./error-404.BgodYyxl.css","./Ff-pyl2P.js","./error-500.B20WKwOi.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},ir=[],bn=()=>{},Vf=()=>!1,is=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Gl=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Wl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vp=Object.prototype.hasOwnProperty,tt=(n,e)=>vp.call(n,e),ke=Array.isArray,rr=n=>So(n)==="[object Map]",Gf=n=>So(n)==="[object Set]",Be=n=>typeof n=="function",pt=n=>typeof n=="string",ci=n=>typeof n=="symbol",ut=n=>n!==null&&typeof n=="object",Wf=n=>(ut(n)||Be(n))&&Be(n.then)&&Be(n.catch),Xf=Object.prototype.toString,So=n=>Xf.call(n),xp=n=>So(n).slice(8,-1),qf=n=>So(n)==="[object Object]",Xl=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,sr=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},yp=/-(\w)/g,rn=Eo(n=>n.replace(yp,(e,t)=>t?t.toUpperCase():"")),Mp=/\B([A-Z])/g,Ui=Eo(n=>n.replace(Mp,"-$1").toLowerCase()),To=Eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=Eo(n=>n?`on${To(n)}`:""),ni=(n,e)=>!Object.is(n,e),Ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},$f=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ep=n=>{const e=pt(n)?Number(n):NaN;return isNaN(e)?n:e};let Wc;const bo=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=pt(i)?wp(i):Ao(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(pt(n)||ut(n))return n}const Tp=/;(?![^(]*\))/g,bp=/:([^]+)/,Ap=/\/\*[^]*?\*\//g;function wp(n){const e={};return n.replace(Ap,"").split(Tp).forEach(t=>{if(t){const i=t.split(bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wo(n){let e="";if(pt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=wo(n[t]);i&&(e+=i+" ")}else if(ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Rp(n){if(!n)return null;let{class:e,style:t}=n;return e&&!pt(e)&&(n.class=wo(e)),t&&(n.style=Ao(t)),n}const Cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pp=Vl(Cp);function Yf(n){return!!n||n===""}const jf=n=>!!(n&&n.__v_isRef===!0),Dp=n=>pt(n)?n:n==null?"":ke(n)||ut(n)&&(n.toString===Xf||!Be(n.toString))?jf(n)?Dp(n.value):JSON.stringify(n,Kf,2):String(n),Kf=(n,e)=>jf(e)?Kf(n,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[zo(i,s)+" =>"]=r,t),{})}:Gf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>zo(t))}:ci(e)?zo(e):ut(e)&&!ke(e)&&!qf(e)?String(e):e,zo=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class Zf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){this._on>0&&--this._on===0&&(Ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Lp(n){return new Zf(n)}function Jf(){return Ht}let ot;const ko=new WeakSet;class Qf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ko.has(this)&&(ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xc(this),nh(this);const e=ot,t=pn;ot=this,pn=!0;try{return this.fn()}finally{ih(this),ot=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,Xc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ia(this)&&this.run()}get dirty(){return Ia(this)}}let eh=0,zr,kr;function th(n,e=!1){if(n.flags|=8,e){n.next=kr,kr=n;return}n.next=zr,zr=n}function ql(){eh++}function $l(){if(--eh>0)return;if(kr){let e=kr;for(kr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zr;){let e=zr;for(zr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ih(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Yl(i),Ip(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ia(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===$r)||(n.globalVersion=$r,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ia(n))))return;n.flags|=2;const e=n.dep,t=ot,i=pn;ot=n,pn=!0;try{nh(n);const r=n.fn(n._value);(e.version===0||ni(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,pn=i,ih(n),n.flags&=-3}}function Yl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Yl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ip(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pn=!0;const sh=[];function Hn(){sh.push(pn),pn=!1}function zn(){const n=sh.pop();pn=n===void 0?!0:n}function Xc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let $r=0;class Up{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ot||!pn||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new Up(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,oh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,$r++,this.notify(e)}notify(e){ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$l()}}}function oh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)oh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ro=new WeakMap,Ri=Symbol(""),Ua=Symbol(""),Yr=Symbol("");function wt(n,e,t){if(pn&&ot){let i=ro.get(n);i||ro.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new jl),r.map=i,r.key=t),r.track()}}function Fn(n,e,t,i,r,s){const o=ro.get(n);if(!o){$r++;return}const a=l=>{l&&l.trigger()};if(ql(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Xl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Yr||!ci(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Yr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ri)),rr(n)&&a(o.get(Ua)));break;case"delete":l||(a(o.get(Ri)),rr(n)&&a(o.get(Ua)));break;case"set":rr(n)&&a(o.get(Ri));break}}$l()}function Np(n,e){const t=ro.get(n);return t&&t.get(e)}function Fi(n){const e=Qe(n);return e===n?e:(wt(e,"iterate",Yr),mn(n)?e:e.map(It))}function Kl(n){return wt(n=Qe(n),"iterate",Yr),n}const Fp={__proto__:null,[Symbol.iterator](){return Vo(this,Symbol.iterator,It)},concat(...n){return Fi(this).concat(...n.map(e=>ke(e)?Fi(e):e))},entries(){return Vo(this,"entries",n=>(n[1]=It(n[1]),n))},every(n,e){return Rn(this,"every",n,e,void 0,arguments)},filter(n,e){return Rn(this,"filter",n,e,t=>t.map(It),arguments)},find(n,e){return Rn(this,"find",n,e,It,arguments)},findIndex(n,e){return Rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Rn(this,"findLast",n,e,It,arguments)},findLastIndex(n,e){return Rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Go(this,"includes",n)},indexOf(...n){return Go(this,"indexOf",n)},join(n){return Fi(this).join(n)},lastIndexOf(...n){return Go(this,"lastIndexOf",n)},map(n,e){return Rn(this,"map",n,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...n){return Pr(this,"push",n)},reduce(n,...e){return qc(this,"reduce",n,e)},reduceRight(n,...e){return qc(this,"reduceRight",n,e)},shift(){return Pr(this,"shift")},some(n,e){return Rn(this,"some",n,e,void 0,arguments)},splice(...n){return Pr(this,"splice",n)},toReversed(){return Fi(this).toReversed()},toSorted(n){return Fi(this).toSorted(n)},toSpliced(...n){return Fi(this).toSpliced(...n)},unshift(...n){return Pr(this,"unshift",n)},values(){return Vo(this,"values",It)}};function Vo(n,e,t){const i=Kl(n),r=i[e]();return i!==n&&!mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Op=Array.prototype;function Rn(n,e,t,i,r,s){const o=Kl(n),a=o!==n&&!mn(n),l=o[e];if(l!==Op[e]){const f=l.apply(n,s);return a?It(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,It(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function qc(n,e,t,i){const r=Kl(n);let s=t;return r!==n&&(mn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,It(a),l,n)}),r[e](s,...i)}function Go(n,e,t){const i=Qe(n);wt(i,"iterate",Yr);const r=i[e](...t);return(r===-1||r===!1)&&Ql(t[0])?(t[0]=Qe(t[0]),i[e](...t)):r}function Pr(n,e,t=[]){Hn(),ql();const i=Qe(n)[e].apply(n,t);return $l(),zn(),i}const Bp=Vl("__proto__,__v_isRef,__isVue"),ah=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function Hp(n){ci(n)||(n=String(n));const e=Qe(this);return wt(e,"has",n),e.hasOwnProperty(n)}class lh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?jp:hh:s?fh:uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=Fp[t]))return l;if(t==="hasOwnProperty")return Hp}const a=Reflect.get(e,t,xt(e)?e:i);return(ci(t)?ah.has(t):Bp(t))||(r||wt(e,"get",t),s)?a:xt(a)?o&&Xl(t)?a:a.value:ut(a)?r?dh(a):oi(a):a}}class ch extends lh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ai(s);if(!mn(i)&&!ai(i)&&(s=Qe(s),i=Qe(i)),!ke(e)&&xt(s)&&!xt(i))return l||(s.value=i),!0}const o=ke(e)&&Xl(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,xt(e)?e:r);return e===Qe(r)&&(o?ni(i,s)&&Fn(e,"set",t,i):Fn(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Fn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!ah.has(t))&&wt(e,"has",t),i}ownKeys(e){return wt(e,"iterate",ke(e)?"length":Ri),Reflect.ownKeys(e)}}class zp extends lh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const kp=new ch,Vp=new zp,Gp=new ch(!0);const Na=n=>n,ms=n=>Reflect.getPrototypeOf(n);function Wp(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=rr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Na:e?Fa:It;return!e&&wt(s,"iterate",l?Ua:Ri),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function gs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Xp(n,e){const t={get(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);n||(ni(r,a)&&wt(o,"get",r),wt(o,"get",a));const{has:l}=ms(o),c=e?Na:n?Fa:It;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&wt(Qe(r),"iterate",Ri),r.size},has(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);return n||(ni(r,a)&&wt(o,"has",r),wt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qe(a),c=e?Na:n?Fa:It;return!n&&wt(l,"iterate",Ri),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Rt(t,n?{add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear")}:{add(r){!e&&!mn(r)&&!ai(r)&&(r=Qe(r));const s=Qe(this);return ms(s).has.call(s,r)||(s.add(r),Fn(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!ai(s)&&(s=Qe(s));const o=Qe(this),{has:a,get:l}=ms(o);let c=a.call(o,r);c||(r=Qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ni(s,u)&&Fn(o,"set",r,s):Fn(o,"add",r,s),this},delete(r){const s=Qe(this),{has:o,get:a}=ms(s);let l=o.call(s,r);l||(r=Qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Fn(s,"delete",r,void 0),c},clear(){const r=Qe(this),s=r.size!==0,o=r.clear();return s&&Fn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wp(r,n,e)}),t}function Zl(n,e){const t=Xp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const qp={get:Zl(!1,!1)},$p={get:Zl(!1,!0)},Yp={get:Zl(!0,!1)};const uh=new WeakMap,fh=new WeakMap,hh=new WeakMap,jp=new WeakMap;function Kp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zp(n){return n.__v_skip||!Object.isExtensible(n)?0:Kp(xp(n))}function oi(n){return ai(n)?n:Jl(n,!1,kp,qp,uh)}function er(n){return Jl(n,!1,Gp,$p,fh)}function dh(n){return Jl(n,!0,Vp,Yp,hh)}function Jl(n,e,t,i,r){if(!ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Zp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function or(n){return ai(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function Ql(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Jp(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&$f(n,"__v_skip",!0),n}const It=n=>ut(n)?oi(n):n,Fa=n=>ut(n)?dh(n):n;function xt(n){return n?n.__v_isRef===!0:!1}function ii(n){return ph(n,!1)}function $c(n){return ph(n,!0)}function ph(n,e){return xt(n)?n:new Qp(n,e)}class Qp{constructor(e,t){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:It(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||ai(e);e=i?e:Qe(e),ni(e,t)&&(this._rawValue=e,this._value=i?e:It(e),this.dep.trigger())}}function Et(n){return xt(n)?n.value:n}function em(n){return Be(n)?n():Et(n)}const tm={get:(n,e,t)=>e==="__v_raw"?n:Et(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return xt(r)&&!xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function mh(n){return or(n)?n:new Proxy(n,tm)}class nm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Np(Qe(this._object),this._key)}}class im{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function rm(n,e,t){return xt(n)?n:Be(n)?new im(n):ut(n)&&arguments.length>1?sm(n,e,t):ii(n)}function sm(n,e,t){const i=n[e];return xt(i)?i:new nm(n,e,t)}class om{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return th(this,!0),!0}get value(){const e=this.dep.track();return rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function am(n,e,t=!1){let i,r;return Be(n)?i=n:(i=n.get,r=n.set),new om(i,r,t)}const _s={},so=new WeakMap;let Mi;function lm(n,e=!1,t=Mi){if(t){let i=so.get(t);i||so.set(t,i=[]),i.push(n)}}function cm(n,e,t=at){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:mn(y)||r===!1||r===0?Qn(y,1):Qn(y);let u,f,d,h,m=!1,_=!1;if(xt(n)?(f=()=>n.value,m=mn(n)):or(n)?(f=()=>c(n),m=!0):ke(n)?(_=!0,m=n.some(y=>or(y)||mn(y)),f=()=>n.map(y=>{if(xt(y))return y.value;if(or(y))return c(y);if(Be(y))return l?l(y,2):y()})):Be(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Hn();try{d()}finally{zn()}}const y=Mi;Mi=u;try{return l?l(n,3,[h]):n(h)}finally{Mi=y}}:f=bn,e&&r){const y=f,w=r===!0?1/0:r;f=()=>Qn(y(),w)}const g=Jf(),p=()=>{u.stop(),g&&g.active&&Wl(g.effects,u)};if(s&&e){const y=e;e=(...w)=>{y(...w),p()}}let A=_?new Array(n.length).fill(_s):_s;const M=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const w=u.run();if(r||m||(_?w.some((R,D)=>ni(R,A[D])):ni(w,A))){d&&d();const R=Mi;Mi=u;try{const D=[w,A===_s?void 0:_&&A[0]===_s?[]:A,h];A=w,l?l(e,3,D):e(...D)}finally{Mi=R}}}else u.run()};return a&&a(M),u=new Qf(f),u.scheduler=o?()=>o(M,!1):M,h=y=>lm(y,!1,u),d=u.onStop=()=>{const y=so.get(u);if(y){if(l)l(y,4);else for(const w of y)w();so.delete(u)}},e?i?M(!0):A=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Qn(n,e=1/0,t){if(e<=0||!ut(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,xt(n))Qn(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(Gf(n)||rr(n))n.forEach(i=>{Qn(i,e,t)});else if(qf(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(n,e,t,i){try{return i?n(...i):n()}catch(r){Tr(r,e,t)}}function An(n,e,t,i){if(Be(n)){const r=rs(n,e,t,i);return r&&Wf(r)&&r.catch(s=>{Tr(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(An(n[s],e,t,i));return r}}function Tr(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Hn(),rs(s,null,10,[n,l,c]),zn();return}}um(n,t,r,i,o)}function um(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let xn=-1;const ar=[];let Zn=null,Ji=0;const gh=Promise.resolve();let oo=null;function _h(n){const e=oo||gh;return n?e.then(this?n.bind(this):n):e}function fm(n){let e=xn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ec(n){if(!(n.flags&1)){const e=jr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=jr(t)?Ut.push(n):Ut.splice(fm(e),0,n),n.flags|=1,vh()}}function vh(){oo||(oo=gh.then(xh))}function Oa(n){ke(n)?ar.push(...n):Zn&&n.id===-1?Zn.splice(Ji+1,0,n):n.flags&1||(ar.push(n),n.flags|=1),vh()}function Yc(n,e,t=xn+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ao(n){if(ar.length){const e=[...new Set(ar)].sort((t,i)=>jr(t)-jr(i));if(ar.length=0,Zn){Zn.push(...e);return}for(Zn=e,Ji=0;Ji<Zn.length;Ji++){const t=Zn[Ji];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zn=null,Ji=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xh(n){try{for(xn=0;xn<Ut.length;xn++){const e=Ut[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Ut.length;xn++){const e=Ut[xn];e&&(e.flags&=-2)}xn=-1,Ut.length=0,ao(),oo=null,(Ut.length||ar.length)&&xh()}}let hn=null,yh=null;function lo(n){const e=hn;return hn=n,yh=n&&n.type.__scopeId||null,e}function Mh(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&au(-1);const s=lo(e);let o;try{o=n(...r)}finally{lo(s),i._d&&au(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function yn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Hn(),An(l,t,8,[n.el,a,n,e]),zn())}}const hm=Symbol("_vte"),dm=n=>n.__isTeleport,pm=Symbol("_leaveCb");function tc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,tc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sh(n,e){return Be(n)?Rt({name:n.name},e,{setup:n}):n}function nc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function lr(n,e,t,i,r=!1){if(ke(n)){n.forEach((m,_)=>lr(m,e&&(ke(e)?e[_]:e),t,i,r));return}if(cr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?hc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState,d=Qe(f),h=f===at?Vf:m=>tt(d,m);if(c!=null&&c!==l){if(pt(c))u[c]=null,h(c)&&(f[c]=null);else if(xt(c)){c.value=null;const m=e;m.k&&(u[m.k]=null)}}if(Be(l))rs(l,a,12,[o,u]);else{const m=pt(l),_=xt(l);if(m||_){const g=()=>{if(n.f){const p=m?h(l)?f[l]:u[l]:l.value;if(r)ke(p)&&Wl(p,s);else if(ke(p))p.includes(s)||p.push(s);else if(m)u[l]=[s],h(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,n.k&&(u[n.k]=A)}}else m?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,$t(g,t)):g()}}}let jc=!1;const Oi=()=>{jc||(console.error("Hydration completed but contains mismatches."),jc=!0)},mm=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",gm=n=>n.namespaceURI.includes("MathML"),vs=n=>{if(n.nodeType===1){if(mm(n))return"svg";if(gm(n))return"mathml"}},tr=n=>n.nodeType===8;function _m(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(M,y)=>{if(!y.hasChildNodes()){t(null,M,y),ao(),y._vnode=M;return}f(y.firstChild,M,null,null,null),ao(),y._vnode=M},f=(M,y,w,R,D,P=!1)=>{P=P||!!y.dynamicChildren;const E=tr(M)&&M.data==="[",S=()=>_(M,y,w,R,D,E),{type:C,ref:z,shapeFlag:V,patchFlag:G}=y;let K=M.nodeType;y.el=M,G===-2&&(P=!1,y.dynamicChildren=null);let F=null;switch(C){case Pi:K!==3?y.children===""?(l(y.el=r(""),o(M),M),F=M):F=S():(M.data!==y.children&&(Oi(),M.data=y.children),F=s(M));break;case kn:A(M)?(F=s(M),p(y.el=M.content.firstChild,M,w)):K!==8||E?F=S():F=s(M);break;case Gr:if(E&&(M=s(M),K=M.nodeType),K===1||K===3){F=M;const Z=!y.children.length;for(let U=0;U<y.staticCount;U++)Z&&(y.children+=F.nodeType===1?F.outerHTML:F.data),U===y.staticCount-1&&(y.anchor=F),F=s(F);return E?s(F):F}else S();break;case cn:E?F=m(M,y,w,R,D,P):F=S();break;default:if(V&1)(K!==1||y.type.toLowerCase()!==M.tagName.toLowerCase())&&!A(M)?F=S():F=d(M,y,w,R,D,P);else if(V&6){y.slotScopeIds=D;const Z=o(M);if(E?F=g(M):tr(M)&&M.data==="teleport start"?F=g(M,M.data,"teleport end"):F=s(M),e(y,Z,null,w,R,vs(Z),P),cr(y)&&!y.type.__asyncResolved){let U;E?(U=gt(cn),U.anchor=F?F.previousSibling:Z.lastChild):U=M.nodeType===3?id(""):gt("div"),U.el=M,y.component.subTree=U}}else V&64?K!==8?F=S():F=y.type.hydrate(M,y,w,R,D,P,n,h):V&128&&(F=y.type.hydrate(M,y,w,R,vs(o(M)),D,P,n,f))}return z!=null&&lr(z,null,R,y),F},d=(M,y,w,R,D,P)=>{P=P||!!y.dynamicChildren;const{type:E,props:S,patchFlag:C,shapeFlag:z,dirs:V,transition:G}=y,K=E==="input"||E==="option";if(K||C!==-1){V&&yn(y,null,w,"created");let F=!1;if(A(M)){F=Wh(null,G)&&w&&w.vnode.props&&w.vnode.props.appear;const U=M.content.firstChild;if(F){const se=U.getAttribute("class");se&&(U.$cls=se),G.beforeEnter(U)}p(U,M,w),y.el=M=U}if(z&16&&!(S&&(S.innerHTML||S.textContent))){let U=h(M.firstChild,y,M,w,R,D,P);for(;U;){xs(M,1)||Oi();const se=U;U=U.nextSibling,a(se)}}else if(z&8){let U=y.children;U[0]===`
`&&(M.tagName==="PRE"||M.tagName==="TEXTAREA")&&(U=U.slice(1)),M.textContent!==U&&(xs(M,0)||Oi(),M.textContent=y.children)}if(S){if(K||!P||C&48){const U=M.tagName.includes("-");for(const se in S)(K&&(se.endsWith("value")||se==="indeterminate")||is(se)&&!sr(se)||se[0]==="."||U)&&i(M,se,null,S[se],void 0,w)}else if(S.onClick)i(M,"onClick",null,S.onClick,void 0,w);else if(C&4&&or(S.style))for(const U in S.style)S.style[U]}let Z;(Z=S&&S.onVnodeBeforeMount)&&Jt(Z,w,y),V&&yn(y,null,w,"beforeMount"),((Z=S&&S.onVnodeMounted)||V||F)&&Zh(()=>{Z&&Jt(Z,w,y),F&&G.enter(M),V&&yn(y,null,w,"mounted")},R)}return M.nextSibling},h=(M,y,w,R,D,P,E)=>{E=E||!!y.dynamicChildren;const S=y.children,C=S.length;for(let z=0;z<C;z++){const V=E?S[z]:S[z]=Yt(S[z]),G=V.type===Pi;M?(G&&!E&&z+1<C&&Yt(S[z+1]).type===Pi&&(l(r(M.data.slice(V.children.length)),w,s(M)),M.data=V.children),M=f(M,V,R,D,P,E)):G&&!V.children?l(V.el=r(""),w):(xs(w,1)||Oi(),t(null,V,w,null,R,D,vs(w),P))}return M},m=(M,y,w,R,D,P)=>{const{slotScopeIds:E}=y;E&&(D=D?D.concat(E):E);const S=o(M),C=h(s(M),y,S,w,R,D,P);return C&&tr(C)&&C.data==="]"?s(y.anchor=C):(Oi(),l(y.anchor=c("]"),S,C),C)},_=(M,y,w,R,D,P)=>{if(xs(M.parentElement,1)||Oi(),y.el=null,P){const C=g(M);for(;;){const z=s(M);if(z&&z!==C)a(z);else break}}const E=s(M),S=o(M);return a(M),t(null,y,S,E,w,R,vs(S),D),w&&(w.vnode.el=y.el,Po(w,y.el)),E},g=(M,y="[",w="]")=>{let R=0;for(;M;)if(M=s(M),M&&tr(M)&&(M.data===y&&R++,M.data===w)){if(R===0)return s(M);R--}return M},p=(M,y,w)=>{const R=y.parentNode;R&&R.replaceChild(M,y);let D=w;for(;D;)D.vnode.el===y&&(D.vnode.el=D.subTree.el=M),D=D.parent},A=M=>M.nodeType===1&&M.tagName==="TEMPLATE";return[u,f]}const Kc="data-allow-mismatch",vm={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function xs(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(Kc);)n=n.parentElement;const t=n&&n.getAttribute(Kc);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:i.includes(vm[e])}}bo().requestIdleCallback;bo().cancelIdleCallback;function xm(n,e){if(tr(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(tr(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const cr=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Zc(n){Be(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,f=0;const d=()=>(f++,c=null,h()),h=()=>{let m;return c||(m=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,p)=>{l(_,()=>g(d()),()=>p(_),f+1)});throw _}).then(_=>m!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return Sh({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(m,_,g){let p=!1;(_.bu||(_.bu=[])).push(()=>p=!0);const A=()=>{p||g()},M=s?()=>{const y=s(A,w=>xm(m,w));y&&(_.bum||(_.bum=[])).push(y)}:A;u?M():h().then(()=>!_.isUnmounted&&M())},get __asyncResolved(){return u},setup(){const m=Tt;if(nc(m),u)return()=>Wo(u,m);const _=M=>{c=null,Tr(M,m,13,!i)};if(a&&m.suspense||_r)return h().then(M=>()=>Wo(M,m)).catch(M=>(_(M),()=>i?gt(i,{error:M}):null));const g=ii(!1),p=ii(),A=ii(!!r);return r&&setTimeout(()=>{A.value=!1},r),o!=null&&setTimeout(()=>{if(!g.value&&!p.value){const M=new Error(`Async component timed out after ${o}ms.`);_(M),p.value=M}},o),h().then(()=>{g.value=!0,m.parent&&ic(m.parent.vnode)&&m.parent.update()}).catch(M=>{_(M),p.value=M}),()=>{if(g.value&&u)return Wo(u,m);if(p.value&&i)return gt(i,{error:p.value});if(t&&!A.value)return gt(t)}}})}function Wo(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=gt(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const ic=n=>n.type.__isKeepAlive;function Eh(n,e){bh(n,"a",e)}function Th(n,e){bh(n,"da",e)}function bh(n,e,t=Tt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ro(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ic(r.parent.vnode)&&ym(i,e,t,r),r=r.parent}}function ym(n,e,t,i){const r=Ro(e,n,i,!0);Ah(()=>{Wl(i[e],r)},t)}function Ro(n,e,t=Tt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Hn();const a=ss(t),l=An(e,t,n,o);return a(),zn(),l});return i?r.unshift(s):r.push(s),s}}const Wn=n=>(e,t=Tt)=>{(!_r||n==="sp")&&Ro(n,(...i)=>e(...i),t)},Mm=Wn("bm"),rc=Wn("m"),Sm=Wn("bu"),Em=Wn("u"),sc=Wn("bum"),Ah=Wn("um"),Tm=Wn("sp"),bm=Wn("rtg"),Am=Wn("rtc");function wh(n,e=Tt){Ro("ec",n,e)}const Rh="components";function FT(n,e){return Ph(Rh,n,!0,e)||n}const Ch=Symbol.for("v-ndc");function wm(n){return pt(n)?Ph(Rh,n,!1)||n:n||Ch}function Ph(n,e,t=!0,i=!1){const r=hn||Tt;if(r){const s=r.type;{const a=vg(s,!1);if(a&&(a===e||a===rn(e)||a===To(rn(e))))return s}const o=Jc(r[n]||s[n],e)||Jc(r.appContext[n],e);return!o&&i?s:o}}function Jc(n,e){return n&&(n[e]||n[rn(e)]||n[To(rn(e))])}const Ba=n=>n?rd(n)?hc(n):Ba(n.parent):null,Vr=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ba(n.parent),$root:n=>Ba(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Lh(n),$forceUpdate:n=>n.f||(n.f=()=>{ec(n.update)}),$nextTick:n=>n.n||(n.n=_h.bind(n.proxy)),$watch:n=>Ym.bind(n)}),Xo=(n,e)=>n!==at&&!n.__isScriptSetup&&tt(n,e),Rm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xo(i,e))return o[e]=1,i[e];if(r!==at&&tt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(t!==at&&tt(t,e))return o[e]=4,t[e];Ha&&(o[e]=0)}}const u=Vr[e];let f,d;if(u)return e==="$attrs"&&wt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&tt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xo(r,e)?(r[e]=t,!0):i!==at&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(t[a]||n!==at&&a[0]!=="$"&&tt(n,a)||Xo(e,a)||(l=s[0])&&tt(l,a)||tt(i,a)||tt(Vr,a)||tt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qc(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ha=!0;function Cm(n){const e=Lh(n),t=n.proxy,i=n.ctx;Ha=!1,e.beforeCreate&&eu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:m,activated:_,deactivated:g,beforeDestroy:p,beforeUnmount:A,destroyed:M,unmounted:y,render:w,renderTracked:R,renderTriggered:D,errorCaptured:P,serverPrefetch:E,expose:S,inheritAttrs:C,components:z,directives:V,filters:G}=e;if(c&&Pm(c,i,null),o)for(const Z in o){const U=o[Z];Be(U)&&(i[Z]=U.bind(t))}if(r){const Z=r.call(t,t);ut(Z)&&(n.data=oi(Z))}if(Ha=!0,s)for(const Z in s){const U=s[Z],se=Be(U)?U.bind(t,t):Be(U.get)?U.get.bind(t,t):bn,me=!Be(U)&&Be(U.set)?U.set.bind(t):bn,Te=od({get:se,set:me});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Ce=>Te.value=Ce})}if(a)for(const Z in a)Dh(a[Z],i,t,Z);if(l){const Z=Be(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(U=>{Uh(U,Z[U])})}u&&eu(u,n,"c");function F(Z,U){ke(U)?U.forEach(se=>Z(se.bind(t))):U&&Z(U.bind(t))}if(F(Mm,f),F(rc,d),F(Sm,h),F(Em,m),F(Eh,_),F(Th,g),F(wh,P),F(Am,R),F(bm,D),F(sc,A),F(Ah,y),F(Tm,E),ke(S))if(S.length){const Z=n.exposed||(n.exposed={});S.forEach(U=>{Object.defineProperty(Z,U,{get:()=>t[U],set:se=>t[U]=se,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===bn&&(n.render=w),C!=null&&(n.inheritAttrs=C),z&&(n.components=z),V&&(n.directives=V),E&&nc(n)}function Pm(n,e,t=bn){ke(n)&&(n=za(n));for(const i in n){const r=n[i];let s;ut(r)?"default"in r?s=ur(r.from||i,r.default,!0):s=ur(r.from||i):s=ur(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function eu(n,e,t){An(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Dh(n,e,t,i){let r=i.includes(".")?$h(t,i):()=>t[i];if(pt(n)){const s=e[n];Be(s)&&$o(r,s)}else if(Be(n))$o(r,n.bind(t));else if(ut(n))if(ke(n))n.forEach(s=>Dh(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&$o(r,s,n)}}function Lh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>co(l,c,o,!0)),co(l,e,o)),ut(e)&&s.set(e,l),l}function co(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&co(n,s,t,!0),r&&r.forEach(o=>co(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Dm={data:tu,props:nu,emits:nu,methods:Br,computed:Br,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Br,directives:Br,watch:Im,provide:tu,inject:Lm};function tu(n,e){return e?n?function(){return Rt(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function Lm(n,e){return Br(za(n),za(e))}function za(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?Rt(Object.create(null),n,e):e}function nu(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Qc(n),Qc(e??{})):e}function Im(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function Ih(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Um=0;function Nm(n,e){return function(i,r=null){Be(i)||(i=Rt({},i)),r!=null&&!ut(r)&&(r=null);const s=Ih(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Um++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Mg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Be(u.install)?(o.add(u),u.install(c,...f)):Be(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||gt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,u):n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,hc(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(An(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Ci;Ci=c;try{return u()}finally{Ci=f}}};return c}}let Ci=null;function Uh(n,e){if(Tt){let t=Tt.provides;const i=Tt.parent&&Tt.parent.provides;i===t&&(t=Tt.provides=Object.create(i)),t[n]=e}}function ur(n,e,t=!1){const i=Do();if(i||Ci){let r=Ci?Ci._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}function oc(){return!!(Do()||Ci)}const Nh={},Fh=()=>Object.create(Nh),Oh=n=>Object.getPrototypeOf(n)===Nh;function Fm(n,e,t,i=!1){const r={},s=Fh();n.propsDefaults=Object.create(null),Bh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:er(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Om(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Co(n.emitsOptions,d))continue;const h=e[d];if(l)if(tt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const m=rn(d);r[m]=ka(l,a,m,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Bh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=Ui(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ka(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&Fn(n.attrs,"set","")}function Bh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(sr(l))continue;const c=e[l];let u;r&&tt(r,u=rn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Co(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ka(r,l,f,c[f],n,!tt(c,f))}}return o}function ka(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Be(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ss(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const Bm=new WeakMap;function Hh(n,e,t=!1){const i=t?Bm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[d,h]=Hh(f,e,!0);Rt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ut(n)&&i.set(n,ir),ir;if(ke(s))for(let u=0;u<s.length;u++){const f=rn(s[u]);iu(f)&&(o[f]=at)}else if(s)for(const u in s){const f=rn(u);if(iu(f)){const d=s[u],h=o[f]=ke(d)||Be(d)?{type:d}:Rt({},d),m=h.type;let _=!1,g=!0;if(ke(m))for(let p=0;p<m.length;++p){const A=m[p],M=Be(A)&&A.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(g=!1)}else _=Be(m)&&m.name==="Boolean";h[0]=_,h[1]=g,(_||tt(h,"default"))&&a.push(f)}}const c=[o,a];return ut(n)&&i.set(n,c),c}function iu(n){return n[0]!=="$"&&!sr(n)}const ac=n=>n==="_"||n==="_ctx"||n==="$stable",lc=n=>ke(n)?n.map(Yt):[Yt(n)],Hm=(n,e,t)=>{if(e._n)return e;const i=Mh((...r)=>lc(e(...r)),t);return i._c=!1,i},zh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ac(r))continue;const s=n[r];if(Be(s))e[r]=Hm(r,s,i);else if(s!=null){const o=lc(s);e[r]=()=>o}}},kh=(n,e)=>{const t=lc(e);n.slots.default=()=>t},Vh=(n,e,t)=>{for(const i in e)(t||!ac(i))&&(n[i]=e[i])},zm=(n,e,t)=>{const i=n.slots=Fh();if(n.vnode.shapeFlag&32){const r=e._;r?(Vh(i,e,t),t&&$f(i,"_",r,!0)):zh(e,i)}else e&&kh(n,e)},km=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Vh(r,e,t):(s=!e.$stable,zh(e,r)),o=e}else e&&(kh(n,e),o={default:1});if(s)for(const a in r)!ac(a)&&o[a]==null&&delete r[a]},$t=Zh;function Vm(n){return Gh(n)}function Gm(n){return Gh(n,_m)}function Gh(n,e){const t=bo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=bn,insertStaticContent:m}=n,_=(v,I,O,ee=null,X=null,te=null,j=void 0,ne=null,ae=!!I.dynamicChildren)=>{if(v===I)return;v&&!ei(v,I)&&(ee=he(v),Ce(v,X,te,!0),v=null),I.patchFlag===-2&&(ae=!1,I.dynamicChildren=null);const{type:ie,ref:b,shapeFlag:x}=I;switch(ie){case Pi:g(v,I,O,ee);break;case kn:p(v,I,O,ee);break;case Gr:v==null&&A(I,O,ee,j);break;case cn:z(v,I,O,ee,X,te,j,ne,ae);break;default:x&1?w(v,I,O,ee,X,te,j,ne,ae):x&6?V(v,I,O,ee,X,te,j,ne,ae):(x&64||x&128)&&ie.process(v,I,O,ee,X,te,j,ne,ae,Ne)}b!=null&&X?lr(b,v&&v.ref,te,I||v,!I):b==null&&v&&v.ref!=null&&lr(v.ref,null,te,v,!0)},g=(v,I,O,ee)=>{if(v==null)i(I.el=a(I.children),O,ee);else{const X=I.el=v.el;I.children!==v.children&&c(X,I.children)}},p=(v,I,O,ee)=>{v==null?i(I.el=l(I.children||""),O,ee):I.el=v.el},A=(v,I,O,ee)=>{[v.el,v.anchor]=m(v.children,I,O,ee,v.el,v.anchor)},M=({el:v,anchor:I},O,ee)=>{let X;for(;v&&v!==I;)X=d(v),i(v,O,ee),v=X;i(I,O,ee)},y=({el:v,anchor:I})=>{let O;for(;v&&v!==I;)O=d(v),r(v),v=O;r(I)},w=(v,I,O,ee,X,te,j,ne,ae)=>{I.type==="svg"?j="svg":I.type==="math"&&(j="mathml"),v==null?R(I,O,ee,X,te,j,ne,ae):E(v,I,X,te,j,ne,ae)},R=(v,I,O,ee,X,te,j,ne)=>{let ae,ie;const{props:b,shapeFlag:x,transition:L,dirs:k}=v;if(ae=v.el=o(v.type,te,b&&b.is,b),x&8?u(ae,v.children):x&16&&P(v.children,ae,null,ee,X,qo(v,te),j,ne),k&&yn(v,null,ee,"created"),D(ae,v,v.scopeId,j,ee),b){for(const q in b)q!=="value"&&!sr(q)&&s(ae,q,null,b[q],te,ee);"value"in b&&s(ae,"value",null,b.value,te),(ie=b.onVnodeBeforeMount)&&Jt(ie,ee,v)}k&&yn(v,null,ee,"beforeMount");const J=Wh(X,L);J&&L.beforeEnter(ae),i(ae,I,O),((ie=b&&b.onVnodeMounted)||J||k)&&$t(()=>{ie&&Jt(ie,ee,v),J&&L.enter(ae),k&&yn(v,null,ee,"mounted")},X)},D=(v,I,O,ee,X)=>{if(O&&h(v,O),ee)for(let te=0;te<ee.length;te++)h(v,ee[te]);if(X){let te=X.subTree;if(I===te||jh(te.type)&&(te.ssContent===I||te.ssFallback===I)){const j=X.vnode;D(v,j,j.scopeId,j.slotScopeIds,X.parent)}}},P=(v,I,O,ee,X,te,j,ne,ae=0)=>{for(let ie=ae;ie<v.length;ie++){const b=v[ie]=ne?Jn(v[ie]):Yt(v[ie]);_(null,b,I,O,ee,X,te,j,ne)}},E=(v,I,O,ee,X,te,j)=>{const ne=I.el=v.el;let{patchFlag:ae,dynamicChildren:ie,dirs:b}=I;ae|=v.patchFlag&16;const x=v.props||at,L=I.props||at;let k;if(O&&di(O,!1),(k=L.onVnodeBeforeUpdate)&&Jt(k,O,I,v),b&&yn(I,v,O,"beforeUpdate"),O&&di(O,!0),(x.innerHTML&&L.innerHTML==null||x.textContent&&L.textContent==null)&&u(ne,""),ie?S(v.dynamicChildren,ie,ne,O,ee,qo(I,X),te):j||U(v,I,ne,null,O,ee,qo(I,X),te,!1),ae>0){if(ae&16)C(ne,x,L,O,X);else if(ae&2&&x.class!==L.class&&s(ne,"class",null,L.class,X),ae&4&&s(ne,"style",x.style,L.style,X),ae&8){const J=I.dynamicProps;for(let q=0;q<J.length;q++){const de=J[q],le=x[de],xe=L[de];(xe!==le||de==="value")&&s(ne,de,le,xe,X,O)}}ae&1&&v.children!==I.children&&u(ne,I.children)}else!j&&ie==null&&C(ne,x,L,O,X);((k=L.onVnodeUpdated)||b)&&$t(()=>{k&&Jt(k,O,I,v),b&&yn(I,v,O,"updated")},ee)},S=(v,I,O,ee,X,te,j)=>{for(let ne=0;ne<I.length;ne++){const ae=v[ne],ie=I[ne],b=ae.el&&(ae.type===cn||!ei(ae,ie)||ae.shapeFlag&198)?f(ae.el):O;_(ae,ie,b,null,ee,X,te,j,!0)}},C=(v,I,O,ee,X)=>{if(I!==O){if(I!==at)for(const te in I)!sr(te)&&!(te in O)&&s(v,te,I[te],null,X,ee);for(const te in O){if(sr(te))continue;const j=O[te],ne=I[te];j!==ne&&te!=="value"&&s(v,te,ne,j,X,ee)}"value"in O&&s(v,"value",I.value,O.value,X)}},z=(v,I,O,ee,X,te,j,ne,ae)=>{const ie=I.el=v?v.el:a(""),b=I.anchor=v?v.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:k}=I;k&&(ne=ne?ne.concat(k):k),v==null?(i(ie,O,ee),i(b,O,ee),P(I.children||[],O,b,X,te,j,ne,ae)):x>0&&x&64&&L&&v.dynamicChildren?(S(v.dynamicChildren,L,O,X,te,j,ne),(I.key!=null||X&&I===X.subTree)&&Xh(v,I,!0)):U(v,I,O,b,X,te,j,ne,ae)},V=(v,I,O,ee,X,te,j,ne,ae)=>{I.slotScopeIds=ne,v==null?I.shapeFlag&512?X.ctx.activate(I,O,ee,j,ae):G(I,O,ee,X,te,j,ae):K(v,I,ae)},G=(v,I,O,ee,X,te,j)=>{const ne=v.component=dg(v,ee,X);if(ic(v)&&(ne.ctx.renderer=Ne),pg(ne,!1,j),ne.asyncDep){if(X&&X.registerDep(ne,F,j),!v.el){const ae=ne.subTree=gt(kn);p(null,ae,I,O),v.placeholder=ae.el}}else F(ne,v,I,O,X,te,j)},K=(v,I,O)=>{const ee=I.component=v.component;if(eg(v,I,O))if(ee.asyncDep&&!ee.asyncResolved){Z(ee,I,O);return}else ee.next=I,ee.update();else I.el=v.el,ee.vnode=I},F=(v,I,O,ee,X,te,j)=>{const ne=()=>{if(v.isMounted){let{next:x,bu:L,u:k,parent:J,vnode:q}=v;{const oe=qh(v);if(oe){x&&(x.el=q.el,Z(v,x,j)),oe.asyncDep.then(()=>{v.isUnmounted||ne()});return}}let de=x,le;di(v,!1),x?(x.el=q.el,Z(v,x,j)):x=q,L&&Ho(L),(le=x.props&&x.props.onVnodeBeforeUpdate)&&Jt(le,J,x,q),di(v,!0);const xe=Yo(v),Ee=v.subTree;v.subTree=xe,_(Ee,xe,f(Ee.el),he(Ee),v,X,te),x.el=xe.el,de===null&&Po(v,xe.el),k&&$t(k,X),(le=x.props&&x.props.onVnodeUpdated)&&$t(()=>Jt(le,J,x,q),X)}else{let x;const{el:L,props:k}=I,{bm:J,m:q,parent:de,root:le,type:xe}=v,Ee=cr(I);if(di(v,!1),J&&Ho(J),!Ee&&(x=k&&k.onVnodeBeforeMount)&&Jt(x,de,I),di(v,!0),L&&qe){const oe=()=>{v.subTree=Yo(v),qe(L,v.subTree,v,X,null)};Ee&&xe.__asyncHydrate?xe.__asyncHydrate(L,v,oe):oe()}else{le.ce&&le.ce._def.shadowRoot!==!1&&le.ce._injectChildStyle(xe);const oe=v.subTree=Yo(v);_(null,oe,O,ee,v,X,te),I.el=oe.el}if(q&&$t(q,X),!Ee&&(x=k&&k.onVnodeMounted)){const oe=I;$t(()=>Jt(x,de,oe),X)}(I.shapeFlag&256||de&&cr(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&$t(v.a,X),v.isMounted=!0,I=O=ee=null}};v.scope.on();const ae=v.effect=new Qf(ne);v.scope.off();const ie=v.update=ae.run.bind(ae),b=v.job=ae.runIfDirty.bind(ae);b.i=v,b.id=v.uid,ae.scheduler=()=>ec(b),di(v,!0),ie()},Z=(v,I,O)=>{I.component=v;const ee=v.vnode.props;v.vnode=I,v.next=null,Om(v,I.props,ee,O),km(v,I.children,O),Hn(),Yc(v),zn()},U=(v,I,O,ee,X,te,j,ne,ae=!1)=>{const ie=v&&v.children,b=v?v.shapeFlag:0,x=I.children,{patchFlag:L,shapeFlag:k}=I;if(L>0){if(L&128){me(ie,x,O,ee,X,te,j,ne,ae);return}else if(L&256){se(ie,x,O,ee,X,te,j,ne,ae);return}}k&8?(b&16&&ge(ie,X,te),x!==ie&&u(O,x)):b&16?k&16?me(ie,x,O,ee,X,te,j,ne,ae):ge(ie,X,te,!0):(b&8&&u(O,""),k&16&&P(x,O,ee,X,te,j,ne,ae))},se=(v,I,O,ee,X,te,j,ne,ae)=>{v=v||ir,I=I||ir;const ie=v.length,b=I.length,x=Math.min(ie,b);let L;for(L=0;L<x;L++){const k=I[L]=ae?Jn(I[L]):Yt(I[L]);_(v[L],k,O,null,X,te,j,ne,ae)}ie>b?ge(v,X,te,!0,!1,x):P(I,O,ee,X,te,j,ne,ae,x)},me=(v,I,O,ee,X,te,j,ne,ae)=>{let ie=0;const b=I.length;let x=v.length-1,L=b-1;for(;ie<=x&&ie<=L;){const k=v[ie],J=I[ie]=ae?Jn(I[ie]):Yt(I[ie]);if(ei(k,J))_(k,J,O,null,X,te,j,ne,ae);else break;ie++}for(;ie<=x&&ie<=L;){const k=v[x],J=I[L]=ae?Jn(I[L]):Yt(I[L]);if(ei(k,J))_(k,J,O,null,X,te,j,ne,ae);else break;x--,L--}if(ie>x){if(ie<=L){const k=L+1,J=k<b?I[k].el:ee;for(;ie<=L;)_(null,I[ie]=ae?Jn(I[ie]):Yt(I[ie]),O,J,X,te,j,ne,ae),ie++}}else if(ie>L)for(;ie<=x;)Ce(v[ie],X,te,!0),ie++;else{const k=ie,J=ie,q=new Map;for(ie=J;ie<=L;ie++){const Se=I[ie]=ae?Jn(I[ie]):Yt(I[ie]);Se.key!=null&&q.set(Se.key,ie)}let de,le=0;const xe=L-J+1;let Ee=!1,oe=0;const ve=new Array(xe);for(ie=0;ie<xe;ie++)ve[ie]=0;for(ie=k;ie<=x;ie++){const Se=v[ie];if(le>=xe){Ce(Se,X,te,!0);continue}let pe;if(Se.key!=null)pe=q.get(Se.key);else for(de=J;de<=L;de++)if(ve[de-J]===0&&ei(Se,I[de])){pe=de;break}pe===void 0?Ce(Se,X,te,!0):(ve[pe-J]=ie+1,pe>=oe?oe=pe:Ee=!0,_(Se,I[pe],O,null,X,te,j,ne,ae),le++)}const Ie=Ee?Wm(ve):ir;for(de=Ie.length-1,ie=xe-1;ie>=0;ie--){const Se=J+ie,pe=I[Se],ze=I[Se+1],N=Se+1<b?ze.el||ze.placeholder:ee;ve[ie]===0?_(null,pe,O,N,X,te,j,ne,ae):Ee&&(de<0||ie!==Ie[de]?Te(pe,O,N,2):de--)}}},Te=(v,I,O,ee,X=null)=>{const{el:te,type:j,transition:ne,children:ae,shapeFlag:ie}=v;if(ie&6){Te(v.component.subTree,I,O,ee);return}if(ie&128){v.suspense.move(I,O,ee);return}if(ie&64){j.move(v,I,O,Ne);return}if(j===cn){i(te,I,O);for(let x=0;x<ae.length;x++)Te(ae[x],I,O,ee);i(v.anchor,I,O);return}if(j===Gr){M(v,I,O);return}if(ee!==2&&ie&1&&ne)if(ee===0)ne.beforeEnter(te),i(te,I,O),$t(()=>ne.enter(te),X);else{const{leave:x,delayLeave:L,afterLeave:k}=ne,J=()=>{v.ctx.isUnmounted?r(te):i(te,I,O)},q=()=>{te._isLeaving&&te[pm](!0),x(te,()=>{J(),k&&k()})};L?L(te,J,q):q()}else i(te,I,O)},Ce=(v,I,O,ee=!1,X=!1)=>{const{type:te,props:j,ref:ne,children:ae,dynamicChildren:ie,shapeFlag:b,patchFlag:x,dirs:L,cacheIndex:k}=v;if(x===-2&&(X=!1),ne!=null&&(Hn(),lr(ne,null,O,v,!0),zn()),k!=null&&(I.renderCache[k]=void 0),b&256){I.ctx.deactivate(v);return}const J=b&1&&L,q=!cr(v);let de;if(q&&(de=j&&j.onVnodeBeforeUnmount)&&Jt(de,I,v),b&6)Q(v.component,O,ee);else{if(b&128){v.suspense.unmount(O,ee);return}J&&yn(v,null,I,"beforeUnmount"),b&64?v.type.remove(v,I,O,Ne,ee):ie&&!ie.hasOnce&&(te!==cn||x>0&&x&64)?ge(ie,I,O,!1,!0):(te===cn&&x&384||!X&&b&16)&&ge(ae,I,O),ee&&je(v)}(q&&(de=j&&j.onVnodeUnmounted)||J)&&$t(()=>{de&&Jt(de,I,v),J&&yn(v,null,I,"unmounted")},O)},je=v=>{const{type:I,el:O,anchor:ee,transition:X}=v;if(I===cn){He(O,ee);return}if(I===Gr){y(v);return}const te=()=>{r(O),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(v.shapeFlag&1&&X&&!X.persisted){const{leave:j,delayLeave:ne}=X,ae=()=>j(O,te);ne?ne(v.el,te,ae):ae()}else te()},He=(v,I)=>{let O;for(;v!==I;)O=d(v),r(v),v=O;r(I)},Q=(v,I,O)=>{const{bum:ee,scope:X,job:te,subTree:j,um:ne,m:ae,a:ie}=v;ru(ae),ru(ie),ee&&Ho(ee),X.stop(),te&&(te.flags|=8,Ce(j,v,I,O)),ne&&$t(ne,I),$t(()=>{v.isUnmounted=!0},I)},ge=(v,I,O,ee=!1,X=!1,te=0)=>{for(let j=te;j<v.length;j++)Ce(v[j],I,O,ee,X)},he=v=>{if(v.shapeFlag&6)return he(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=d(v.anchor||v.el),O=I&&I[hm];return O?d(O):I};let Pe=!1;const Le=(v,I,O)=>{v==null?I._vnode&&Ce(I._vnode,null,null,!0):_(I._vnode||null,v,I,null,null,null,O),I._vnode=v,Pe||(Pe=!0,Yc(),ao(),Pe=!1)},Ne={p:_,um:Ce,m:Te,r:je,mt:G,mc:P,pc:U,pbc:S,n:he,o:n};let lt,qe;return e&&([lt,qe]=e(Ne)),{render:Le,hydrate:lt,createApp:Nm(Le,lt)}}function qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xh(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Jn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Xh(o,a)),a.type===Pi&&a.patchFlag!==-1&&(a.el=o.el),a.type===kn&&!a.el&&(a.el=o.el)}}function Wm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function qh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qh(e)}function ru(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Xm=Symbol.for("v-scx"),qm=()=>ur(Xm);function $m(n,e){return cc(n,null,e)}function $o(n,e,t){return cc(n,e,t)}function cc(n,e,t=at){const{immediate:i,deep:r,flush:s,once:o}=t,a=Rt({},t),l=e&&i||!e&&s!=="post";let c;if(_r){if(s==="sync"){const h=qm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=bn,h.resume=bn,h.pause=bn,h}}const u=Tt;a.call=(h,m,_)=>An(h,u,m,_);let f=!1;s==="post"?a.scheduler=h=>{$t(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,m)=>{m?h():ec(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=cm(n,e,a);return _r&&(c?c.push(d):l&&d()),d}function Ym(n,e,t){const i=this.proxy,r=pt(n)?n.includes(".")?$h(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const o=ss(this),a=cc(r,s.bind(i),t);return o(),a}function $h(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const jm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${rn(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function Km(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&jm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>pt(u)?u.trim():u)),o.number&&(r=t.map(Sp)));let a,l=i[a=Bo(e)]||i[a=Bo(rn(e))];!l&&s&&(l=i[a=Bo(Ui(e))]),l&&An(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,An(c,n,6,r)}}function Yh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Be(n)){const l=c=>{const u=Yh(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ut(n)&&i.set(n,null),null):(ke(s)?s.forEach(l=>o[l]=null):Rt(o,s),ut(n)&&i.set(n,o),o)}function Co(n,e){return!n||!is(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Ui(e))||tt(n,e))}function Yo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:m,inheritAttrs:_}=n,g=lo(n);let p,A;try{if(t.shapeFlag&4){const y=r||i,w=y;p=Yt(c.call(w,y,u,f,h,d,m)),A=a}else{const y=e;p=Yt(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),A=e.props?a:Jm(a)}}catch(y){Wr.length=0,Tr(y,n,1),p=gt(kn)}let M=p;if(A&&_!==!1){const y=Object.keys(A),{shapeFlag:w}=M;y.length&&w&7&&(s&&y.some(Gl)&&(A=Qm(A,s)),M=gr(M,A,!1,!0))}return t.dirs&&(M=gr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&tc(M,t.transition),p=M,lo(g),p}function Zm(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(Zr(r)){if(r.type!==kn||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Jm=n=>{let e;for(const t in n)(t==="class"||t==="style"||is(t))&&((e||(e={}))[t]=n[t]);return e},Qm=(n,e)=>{const t={};for(const i in n)(!Gl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function eg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Co(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?su(i,o,c):!0:!!o;return!1}function su(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Co(t,s))return!0}return!1}function Po({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const jh=n=>n.__isSuspense;let Va=0;const tg={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,c){if(n==null)ig(e,t,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}rg(n,e,t,i,r,o,a,l,c)}},hydrate:sg,normalize:og},ng=tg;function Kr(n,e){const t=n.props&&n.props[e];Be(t)&&t()}function ig(n,e,t,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=n.suspense=Kh(n,r,i,e,f,t,s,o,a,l);c(null,d.pendingBranch=n.ssContent,f,null,i,d,s,o),d.deps>0?(Kr(n,"onPending"),Kr(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,s,o),fr(d,n.ssFallback)):d.resolve(!1,!0)}function rg(n,e,t,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:m,pendingBranch:_,isInFallback:g,isHydrating:p}=f;if(_)f.pendingBranch=d,ei(d,_)?(l(_,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():g&&(p||(l(m,h,t,i,r,null,s,o,a),fr(f,h)))):(f.pendingId=Va++,p?(f.isHydrating=!1,f.activeBranch=_):c(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),g?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(m,h,t,i,r,null,s,o,a),fr(f,h))):m&&ei(d,m)?(l(m,d,t,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(m&&ei(d,m))l(m,d,t,i,r,f,s,o,a),fr(f,d);else if(Kr(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Va++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:A,pendingId:M}=f;A>0?setTimeout(()=>{f.pendingId===M&&f.fallback(h)},A):A===0&&f.fallback(h)}}function Kh(n,e,t,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:h,n:m,o:{parentNode:_,remove:g}}=c;let p;const A=ag(n);A&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const M=n.props?Ep(n.props.timeout):void 0,y=s,w={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Va++,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,D=!1){const{vnode:P,activeBranch:E,pendingBranch:S,pendingId:C,effects:z,parentComponent:V,container:G}=w;let K=!1;w.isHydrating?w.isHydrating=!1:R||(K=E&&S.transition&&S.transition.mode==="out-in",K&&(E.transition.afterLeave=()=>{C===w.pendingId&&(d(S,G,s===y?m(E):s,0),Oa(z))}),E&&(_(E.el)===G&&(s=m(E)),h(E,V,w,!0)),K||d(S,G,s,0)),fr(w,S),w.pendingBranch=null,w.isInFallback=!1;let F=w.parent,Z=!1;for(;F;){if(F.pendingBranch){F.effects.push(...z),Z=!0;break}F=F.parent}!Z&&!K&&Oa(z),w.effects=[],A&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!D&&e.resolve()),Kr(P,"onResolve")},fallback(R){if(!w.pendingBranch)return;const{vnode:D,activeBranch:P,parentComponent:E,container:S,namespace:C}=w;Kr(D,"onFallback");const z=m(P),V=()=>{w.isInFallback&&(f(null,R,S,z,E,null,C,a,l),fr(w,R))},G=R.transition&&R.transition.mode==="out-in";G&&(P.transition.afterLeave=V),w.isInFallback=!0,h(P,E,null,!0),G||V()},move(R,D,P){w.activeBranch&&d(w.activeBranch,R,D,P),w.container=R},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(R,D,P){const E=!!w.pendingBranch;E&&w.deps++;const S=R.vnode.el;R.asyncDep.catch(C=>{Tr(C,R,0)}).then(C=>{if(R.isUnmounted||w.isUnmounted||w.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:z}=R;Wa(R,C),S&&(z.el=S);const V=!S&&R.subTree.el;D(R,z,_(S||R.subTree.el),S?null:m(R.subTree),w,o,P),V&&g(V),Po(R,z.el),E&&--w.deps===0&&w.resolve()})},unmount(R,D){w.isUnmounted=!0,w.activeBranch&&h(w.activeBranch,t,R,D),w.pendingBranch&&h(w.pendingBranch,t,R,D)}};return w}function sg(n,e,t,i,r,s,o,a,l){const c=e.suspense=Kh(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function og(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=ou(i?t.default:t),n.ssFallback=i?ou(t.fallback):gt(kn)}function ou(n){let e;if(Be(n)){const t=mr&&n._c;t&&(n._d=!1,Mn()),n=n(),t&&(n._d=!0,e=zt,Jh())}return ke(n)&&(n=Zm(n)),n=Yt(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function Zh(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Oa(n)}function fr(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,Po(i,r))}function ag(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const cn=Symbol.for("v-fgt"),Pi=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Gr=Symbol.for("v-stc"),Wr=[];let zt=null;function Mn(n=!1){Wr.push(zt=n?null:[])}function Jh(){Wr.pop(),zt=Wr[Wr.length-1]||null}let mr=1;function au(n,e=!1){mr+=n,n<0&&zt&&e&&(zt.hasOnce=!0)}function Qh(n){return n.dynamicChildren=mr>0?zt||ir:null,Jh(),mr>0&&zt&&zt.push(n),n}function uc(n,e,t,i,r,s){return Qh(td(n,e,t,i,r,s,!0))}function Qi(n,e,t,i,r){return Qh(gt(n,e,t,i,r,!0))}function Zr(n){return n?n.__v_isVNode===!0:!1}function ei(n,e){return n.type===e.type&&n.key===e.key}const ed=({key:n})=>n??null,Ys=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||xt(n)||Be(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function td(n,e=null,t=null,i=0,r=null,s=n===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ed(e),ref:e&&Ys(e),scopeId:yh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(fc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),mr>0&&!o&&zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&zt.push(l),l}const gt=lg;function lg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ch)&&(n=kn),Zr(n)){const a=gr(n,e,!0);return t&&fc(a,t),mr>0&&!s&&zt&&(a.shapeFlag&6?zt[zt.indexOf(n)]=a:zt.push(a)),a.patchFlag=-2,a}if(xg(n)&&(n=n.__vccOpts),e){e=nd(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=wo(a)),ut(l)&&(Ql(l)&&!ke(l)&&(l=Rt({},l)),e.style=Ao(l))}const o=pt(n)?1:jh(n)?128:dm(n)?64:ut(n)?4:Be(n)?2:0;return td(n,e,t,i,r,o,s,!0)}function nd(n){return n?Ql(n)||Oh(n)?Rt({},n):n:null}function gr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?ug(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ed(c),ref:e&&e.ref?t&&s?ke(s)?s.concat(Ys(e)):[s,Ys(e)]:Ys(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==cn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gr(n.ssContent),ssFallback:n.ssFallback&&gr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&tc(u,l.clone(u)),u}function id(n=" ",e=0){return gt(Pi,null,n,e)}function cg(n,e){const t=gt(Gr,null,n);return t.staticCount=e,t}function Yt(n){return n==null||typeof n=="boolean"?gt(kn):ke(n)?gt(cn,null,n.slice()):Zr(n)?Jn(n):gt(Pi,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gr(n)}function fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),fc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Oh(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[id(e)]):t=8);n.children=e,n.shapeFlag|=t}function ug(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=wo([e.class,i.class]));else if(r==="style")e.style=Ao([e.style,i.style]);else if(is(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Jt(n,e,t,i=null){An(n,e,7,[t,i])}const fg=Ih();let hg=0;function dg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||fg,s={uid:hg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hh(i,r),emitsOptions:Yh(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Km.bind(null,s),n.ce&&n.ce(s),s}let Tt=null;const Do=()=>Tt||hn;let uo,Ga;{const n=bo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};uo=e("__VUE_INSTANCE_SETTERS__",t=>Tt=t),Ga=e("__VUE_SSR_SETTERS__",t=>_r=t)}const ss=n=>{const e=Tt;return uo(n),n.scope.on(),()=>{n.scope.off(),uo(e)}},lu=()=>{Tt&&Tt.scope.off(),uo(null)};function rd(n){return n.vnode.shapeFlag&4}let _r=!1;function pg(n,e=!1,t=!1){e&&Ga(e);const{props:i,children:r}=n.vnode,s=rd(n);Fm(n,i,s,e),zm(n,r,t||e);const o=s?mg(n,e):void 0;return e&&Ga(!1),o}function mg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rm);const{setup:i}=t;if(i){Hn();const r=n.setupContext=i.length>1?_g(n):null,s=ss(n),o=rs(i,n,0,[n.props,r]),a=Wf(o);if(zn(),s(),(a||n.sp)&&!cr(n)&&nc(n),a){if(o.then(lu,lu),e)return o.then(l=>{Wa(n,l)}).catch(l=>{Tr(l,n,0)});n.asyncDep=o}else Wa(n,o)}else sd(n)}function Wa(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ut(e)&&(n.setupState=mh(e)),sd(n)}function sd(n,e,t){const i=n.type;n.render||(n.render=i.render||bn);{const r=ss(n);Hn();try{Cm(n)}finally{zn(),r()}}}const gg={get(n,e){return wt(n,"get",""),n[e]}};function _g(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,gg),slots:n.slots,emit:n.emit,expose:e}}function hc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(mh(Jp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vr)return Vr[t](n)},has(e,t){return t in e||t in Vr}})):n.proxy}function vg(n,e=!0){return Be(n)?n.displayName||n.name:n.name||e&&n.__name}function xg(n){return Be(n)&&"__vccOpts"in n}const od=(n,e)=>am(n,e,_r);function yg(n,e,t){const i=arguments.length;return i===2?ut(e)&&!ke(e)?Zr(e)?gt(n,null,[e]):gt(n,e):gt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Zr(t)&&(t=[t]),gt(n,e,t))}const Mg="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xa;const cu=typeof window<"u"&&window.trustedTypes;if(cu)try{Xa=cu.createPolicy("vue",{createHTML:n=>n})}catch{}const ad=Xa?n=>Xa.createHTML(n):n=>n,Sg="http://www.w3.org/2000/svg",Eg="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,uu=Nn&&Nn.createElement("template"),Tg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(Sg,n):e==="mathml"?Nn.createElementNS(Eg,n):t?Nn.createElement(n,{is:t}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{uu.innerHTML=ad(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=uu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bg=Symbol("_vtc");function Ag(n,e,t){const i=n[bg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fu=Symbol("_vod"),wg=Symbol("_vsh"),Rg=Symbol(""),Cg=/(^|;)\s*display\s*:/;function Pg(n,e,t){const i=n.style,r=pt(t);let s=!1;if(t&&!r){if(e)if(pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&js(i,a,"")}else for(const o in e)t[o]==null&&js(i,o,"");for(const o in t)o==="display"&&(s=!0),js(i,o,t[o])}else if(r){if(e!==t){const o=i[Rg];o&&(t+=";"+o),i.cssText=t,s=Cg.test(t)}}else e&&n.removeAttribute("style");fu in n&&(n[fu]=s?i.display:"",n[wg]&&(i.display="none"))}const hu=/\s*!important$/;function js(n,e,t){if(ke(t))t.forEach(i=>js(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Dg(n,e);hu.test(t)?n.setProperty(Ui(i),t.replace(hu,""),"important"):n[i]=t}}const du=["Webkit","Moz","ms"],jo={};function Dg(n,e){const t=jo[e];if(t)return t;let i=rn(e);if(i!=="filter"&&i in n)return jo[e]=i;i=To(i);for(let r=0;r<du.length;r++){const s=du[r]+i;if(s in n)return jo[e]=s}return e}const pu="http://www.w3.org/1999/xlink";function mu(n,e,t,i,r,s=Pp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(pu,e.slice(6,e.length)):n.setAttributeNS(pu,e,t):t==null||s&&!Yf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ci(t)?String(t):t)}function gu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ad(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Yf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Lg(n,e,t,i){n.addEventListener(e,t,i)}function Ig(n,e,t,i){n.removeEventListener(e,t,i)}const _u=Symbol("_vei");function Ug(n,e,t,i,r=null){const s=n[_u]||(n[_u]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ng(e);if(i){const c=s[e]=Bg(i,r);Lg(n,a,c,l)}else o&&(Ig(n,a,o,l),s[e]=void 0)}}const vu=/(?:Once|Passive|Capture)$/;function Ng(n){let e;if(vu.test(n)){e={};let i;for(;i=n.match(vu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let Ko=0;const Fg=Promise.resolve(),Og=()=>Ko||(Fg.then(()=>Ko=0),Ko=Date.now());function Bg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(Hg(i,t.value),e,5,[i])};return t.value=n,t.attached=Og(),t}function Hg(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const xu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Ag(n,i,o):e==="style"?Pg(n,t,i):is(e)?Gl(e)||Ug(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kg(n,e,i,o))?(gu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!pt(i))?gu(n,rn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),mu(n,e,i,o))};function kg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&xu(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xu(e)&&pt(t)?!1:e in n}const ld=Rt({patchProp:zg},Tg);let Xr,yu=!1;function Vg(){return Xr||(Xr=Vm(ld))}function Gg(){return Xr=yu?Xr:Gm(ld),yu=!0,Xr}const Wg=((...n)=>{const e=Vg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=ud(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,cd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),Xg=((...n)=>{const e=Gg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=ud(i);if(r)return t(r,!0,cd(r))},e});function cd(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ud(n){return pt(n)?document.querySelector(n):n}const qg=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,$g=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Yg=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function jg(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Kg(n);return}return e}function Kg(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function fo(n,e={}){if(typeof n!="string")return n;if(n[0]==='"'&&n[n.length-1]==='"'&&n.indexOf("\\")===-1)return n.slice(1,-1);const t=n.trim();if(t.length<=9)switch(t.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!Yg.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(qg.test(n)||$g.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,jg)}return JSON.parse(n)}catch(i){if(e.strict)throw i;return n}}const Zg=/#/g,Jg=/&/g,Qg=/\//g,e_=/=/g,dc=/\+/g,t_=/%5e/gi,n_=/%60/gi,i_=/%7c/gi,r_=/%20/gi;function s_(n){return encodeURI(""+n).replace(i_,"|")}function qa(n){return s_(typeof n=="string"?n:JSON.stringify(n)).replace(dc,"%2B").replace(r_,"+").replace(Zg,"%23").replace(Jg,"%26").replace(n_,"`").replace(t_,"^").replace(Qg,"%2F")}function Zo(n){return qa(n).replace(e_,"%3D")}function ho(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function o_(n){return ho(n.replace(dc," "))}function a_(n){return ho(n.replace(dc," "))}function pc(n=""){const e=Object.create(null);n[0]==="?"&&(n=n.slice(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=o_(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=a_(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function l_(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${Zo(n)}=${qa(t)}`).join("&"):`${Zo(n)}=${qa(e)}`:Zo(n)}function fd(n){return Object.keys(n).filter(e=>n[e]!==void 0).map(e=>l_(e,n[e])).filter(Boolean).join("&")}const c_=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,u_=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,f_=/^([/\\]\s*){2,}[^/\\]/,h_=/^[\s\0]*(blob|data|javascript|vbscript):$/i,d_=/\/$|\/\?|\/#/,p_=/^\.?\//;function br(n,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?c_.test(n):u_.test(n)||(e.acceptRelative?f_.test(n):!1)}function m_(n){return!!n&&h_.test(n)}function $a(n="",e){return e?d_.test(n):n.endsWith("/")}function mc(n="",e){if(!e)return($a(n)?n.slice(0,-1):n)||"/";if(!$a(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");r!==-1&&(t=n.slice(0,r),i=n.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Ya(n="",e){if(!e)return n.endsWith("/")?n:n+"/";if($a(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");if(r!==-1&&(t=n.slice(0,r),i=n.slice(r),!t))return i;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function g_(n=""){return n.startsWith("/")}function Mu(n=""){return g_(n)?n:"/"+n}function __(n,e){if(dd(e)||br(n))return n;const t=mc(e);return n.startsWith(t)?n:Lo(t,n)}function v_(n,e){if(dd(e))return n;const t=mc(e);if(!n.startsWith(t))return n;const i=n.slice(t.length);return i[0]==="/"?i:"/"+i}function hd(n,e){const t=gd(n),i={...pc(t.search),...e};return t.search=fd(i),_d(t)}function dd(n){return!n||n==="/"}function x_(n){return n&&n!=="/"}function Lo(n,...e){let t=n||"";for(const i of e.filter(r=>x_(r)))if(t){const r=i.replace(p_,"");t=Ya(t)+r}else t=i;return t}function pd(...n){const e=/\/(?!\/)/,t=n.filter(Boolean),i=[];let r=0;for(const o of t)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&br(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?t[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:t[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,t[t.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function y_(n,e,t={}){return t.trailingSlash||(n=Ya(n),e=Ya(e)),t.leadingSlash||(n=Mu(n),e=Mu(e)),t.encoding||(n=ho(n),e=ho(e)),n===e}const md=Symbol.for("ufo:protocolRelative");function gd(n="",e){const t=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,f,d=""]=t;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!br(n,{acceptRelative:!0}))return Su(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:c,hash:u}=Su(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[md]:!i}}function Su(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function _d(n){const e=n.pathname||"",t=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[md]?(n.protocol||"")+"//":"")+r+s+e+t+i}class M_ extends Error{constructor(e,t){super(e,t),this.name="FetchError",t?.cause&&!this.cause&&(this.cause=t.cause)}}function S_(n){const e=n.error?.message||n.error?.toString()||"",t=n.request?.method||n.options?.method||"GET",i=n.request?.url||String(n.request)||"/",r=`[${t}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new M_(o,n.error?{cause:n.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return n[l]}});for(const[l,c]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return n.response&&n.response[c]}});return a}const E_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Eu(n="GET"){return E_.has(n.toUpperCase())}function T_(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.buffer?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const b_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),A_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function w_(n=""){if(!n)return"json";const e=n.split(";").shift()||"";return A_.test(e)?"json":b_.has(e)||e.startsWith("text/")?"text":"blob"}function R_(n,e,t,i){const r=C_(e?.headers??n?.headers,t?.headers,i);let s;return(t?.query||t?.params||e?.params||e?.query)&&(s={...t?.params,...t?.query,...e?.params,...e?.query}),{...t,...e,query:s,params:s,headers:r}}function C_(n,e,t){if(!e)return new t(n);const i=new t(e);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new t(n))i.set(r,s);return i}async function ys(n,e){if(e)if(Array.isArray(e))for(const t of e)await t(n);else await e(n)}const P_=new Set([408,409,425,429,500,502,503,504]),D_=new Set([101,204,205,304]);function vd(n={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Eu(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):P_.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:u-1})}}const c=S_(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){const u={request:l,options:R_(l,c,n.defaults,t),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await ys(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=__(u.request,u.options.baseURL)),u.options.query&&(u.request=hd(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&Eu(u.options.method)&&(T_(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new t(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const h=new i;f=setTimeout(()=>{const m=new Error("[TimeoutError]: The operation was aborted due to timeout");m.name="TimeoutError",m.code=23,h.abort(m)},u.options.timeout),u.options.signal=h.signal}try{u.response=await e(u.request,u.options)}catch(h){return u.error=h,u.options.onRequestError&&await ys(u,u.options.onRequestError),await r(u)}finally{f&&clearTimeout(f)}if((u.response.body||u.response._bodyInit)&&!D_.has(u.response.status)&&u.options.method!=="HEAD"){const h=(u.options.parseResponse?"json":u.options.responseType)||w_(u.response.headers.get("content-type")||"");switch(h){case"json":{const m=await u.response.text(),_=u.options.parseResponse||fo;u.response._data=_(m);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[h]()}}return u.options.onResponse&&await ys(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await ys(u,u.options.onResponseError),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>vd({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const po=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),L_=po.fetch?(...n)=>po.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),I_=po.Headers,U_=po.AbortController,N_=vd({fetch:L_,Headers:I_,AbortController:U_}),F_=N_,O_=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,gc=()=>O_().app,B_=()=>gc().baseURL,H_=()=>gc().buildAssetsDir,_c=(...n)=>pd(xd(),H_(),...n),xd=(...n)=>{const e=gc(),t=e.cdnURL||e.baseURL;return n.length?pd(t,...n):t};globalThis.__buildAssetsURL=_c,globalThis.__publicAssetsURL=xd;globalThis.$fetch||(globalThis.$fetch=F_.create({baseURL:B_()}));"global"in globalThis||(globalThis.global=globalThis);function ja(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?ja(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const z_={run:n=>n()},k_=()=>z_,yd=typeof console.createTask<"u"?console.createTask:k_;function V_(n,e){const t=e.shift(),i=yd(t);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function G_(n,e){const t=e.shift(),i=yd(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}function Jo(n,e){for(const t of[...n])t(e)}class W_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=ja(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const t=ja(e);for(const i in t)this.removeHook(i,t[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(V_,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(G_,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&Jo(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Jo(this._after,r)}):(this._after&&r&&Jo(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Md(){return new W_}function X_(n={}){let e,t=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;Ka.add(c);try{const u=r?r.run(o,a):a();return t||(e=void 0),await u}finally{Ka.delete(c)}}}}function q_(n={}){const e={};return{get(t,i={}){return e[t]||(e[t]=X_({...n,...i})),e[t]}}}const mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Tu="__unctx__",$_=mo[Tu]||(mo[Tu]=q_()),Y_=(n,e={})=>$_.get(n,e),bu="__unctx_async_handlers__",Ka=mo[bu]||(mo[bu]=new Set);function Sd(n){const e=[];for(const r of Ka){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw t(),r})),[i,t]}const Au={id:"__nuxt-loader"},OT={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},j_="#__nuxt",Ed="nuxt-app",wu=36e5,K_="vite:preloadError";function Td(n=Ed){return Y_(n,{asyncContext:!1})}const Z_="__nuxt_plugin";function J_(n){let e=0;const t={_id:n.id||Ed||"nuxt-app",_scope:Lp(),provide:void 0,versions:{get nuxt(){return"4.0.3"},get vue(){return t.vueApp.version}},payload:er({...n.ssrContext?.payload||{},data:er({}),state:oi({}),once:new Set,_errors:er({})}),static:{data:{}},runWithContext(r){return t._scope.active&&!Jf()?t._scope.run(()=>Ru(t,r)):Ru(t,r)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:er({}),_payloadRevivers:{},...n};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(t.payload[s],r[s]);break;default:t.payload[s]=r[s]}}t.hooks=Md(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(r,s)=>{const o="$"+r;Ms(t,o,s),Ms(t.vueApp.config.globalProperties,o,s)},Ms(t.vueApp,"$nuxt",t),Ms(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener(K_,s=>{t.callHook("app:chunkError",{error:s.payload}),s.payload.message.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=Ct;const r=t.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});t.hook("app:mounted",r)}const i=t.payload.config;return t.provide("config",i),t}function Q_(n,e){e.hooks&&n.hooks.addHooks(e.hooks)}async function e0(n,e){if(typeof e=="function"){const{provide:t}=await n.runWithContext(()=>e(n))||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}}async function t0(n,e){const t=new Set,i=[],r=[];let s,o=0;async function a(l){const c=l.dependsOn?.filter(u=>e.some(f=>f._name===u)&&!t.has(u))??[];if(c.length>0)i.push([new Set(c),l]);else{const u=e0(n,l).then(async()=>{l._name&&(t.add(l._name),await Promise.all(i.map(async([f,d])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(d)))})))}).catch(f=>{if(!l.parallel&&!n.payload.error)throw f;s||=f});l.parallel?r.push(u):await u}}for(const l of e)Q_(n,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw n.payload.error||s}function ui(n){if(typeof n=="function")return n;const e=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[Z_]:!0,_name:e})}function Ru(n,e,t){const i=()=>e();return Td(n._id).set(n),n.vueApp.runWithContext(i)}function n0(n){let e;return oc()&&(e=Do()?.appContext.app.$nuxt),e||=Td(n).tryUse(),e||null}function Ct(n){const e=n0(n);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Jr(n){return Ct().$config}function Ms(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function i0(n,e){return{ctx:{table:n},matchAll:t=>Ad(t,n)}}function bd(n){const e={};for(const t in n)e[t]=t==="dynamic"?new Map(Object.entries(n[t]).map(([i,r])=>[i,bd(r)])):new Map(Object.entries(n[t]));return e}function r0(n){return i0(bd(n))}function Ad(n,e,t){n.endsWith("/")&&(n=n.slice(0,-1)||"/");const i=[];for(const[s,o]of Cu(e.wildcard))(n===s||n.startsWith(s+"/"))&&i.push(o);for(const[s,o]of Cu(e.dynamic))if(n.startsWith(s+"/")){const a="/"+n.slice(s.length).split("/").splice(2).join("/");i.push(...Ad(a,o))}const r=e.static.get(n);return r&&i.push(r),i.filter(Boolean)}function Cu(n){return[...n.entries()].sort((e,t)=>e[0].length-t[0].length)}function Qo(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Za(n,e,t=".",i){if(!Qo(e))return Za(n,{},t,i);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Qo(o)&&Qo(r[s])?r[s]=Za(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function s0(n){return(...e)=>e.reduce((t,i)=>Za(t,i,"",n),{})}const o0=s0();function a0(n,e){try{return e in n}catch{return!1}}class Pu extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,t={}){super(e,t),t.cause&&!this.cause&&(this.cause=t.cause)}toJSON(){const e={message:this.message,statusCode:Ja(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=wd(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function l0(n){if(typeof n=="string")return new Pu(n);if(c0(n))return n;const e=new Pu(n.message??n.statusMessage??"",{cause:n.cause||n});if(a0(n,"stack"))try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}if(n.data&&(e.data=n.data),n.statusCode?e.statusCode=Ja(n.statusCode,e.statusCode):n.status&&(e.statusCode=Ja(n.status,e.statusCode)),n.statusMessage?e.statusMessage=n.statusMessage:n.statusText&&(e.statusMessage=n.statusText),e.statusMessage){const t=e.statusMessage;wd(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function c0(n){return n?.constructor?.__h3_error__===!0}const u0=/[^\u0009\u0020-\u007E]/g;function wd(n=""){return n.replace(u0,"")}function Ja(n,e=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?e:n}const Rd=Symbol("route"),Di=()=>Ct()?.$router,Cd=()=>oc()?ur(Rd,Ct()._route):Ct()._route;const f0=()=>{try{if(Ct()._processingMiddleware)return!0}catch{return!1}return!1},h0=(n,e)=>{n||="/";const t=typeof n=="string"?n:"path"in n?d0(n):Di().resolve(n).href;if(e?.open){const{target:l="_blank",windowFeatures:c={}}=e.open,u=Object.entries(c).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(t,l,u),Promise.resolve()}const i=br(t,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(t,window.location.href);if(l&&m_(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=f0();if(!r&&s){if(e?.replace){if(typeof n=="string"){const{pathname:l,search:c,hash:u}=gd(n);return{path:l,...c&&{query:pc(c)},...u&&{hash:u},replace:!0}}return{...n,replace:!0}}return n}const o=Di(),a=Ct();return r?(a._scope.stop(),e?.replace?location.replace(t):location.href=t,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(n):o.push(n)};function d0(n){return hd(n.path||"",n.query||{})+(n.hash||"")}const Pd="__nuxt_error",vc=()=>rm(Ct().payload,"error"),p0=n=>{const e=xc(n);try{const t=Ct(),i=vc();t.hooks.callHook("app:error",e),i.value||=e}catch{throw e}return e},m0=async(n={})=>{const e=Ct(),t=vc();e.callHook("app:error:cleared",n),n.redirect&&await Di().replace(n.redirect),t.value=void 0},g0=n=>!!n&&typeof n=="object"&&Pd in n,xc=n=>{const e=l0(n);return Object.defineProperty(e,Pd,{value:!0,configurable:!1,writable:!1}),e};function _0(n){const e=x0(n),t=new ArrayBuffer(e.length),i=new DataView(t);for(let r=0;r<t.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return t}const v0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function x0(n){n.length%4===0&&(n=n.replace(/==?$/,""));let e="",t=0,i=0;for(let r=0;r<n.length;r++)t<<=6,t|=v0.indexOf(n[r]),i+=6,i===24&&(e+=String.fromCharCode((t&16711680)>>16),e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255),t=i=0);return i===12?(t>>=4,e+=String.fromCharCode(t)):i===18&&(t>>=2,e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255)),e}const y0=-1,M0=-2,S0=-3,E0=-4,T0=-5,b0=-6;function A0(n,e){return w0(JSON.parse(n),e)}function w0(n,e){if(typeof n=="number")return r(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const t=n,i=Array(t.length);function r(s,o=!1){if(s===y0)return;if(s===S0)return NaN;if(s===E0)return 1/0;if(s===T0)return-1/0;if(s===b0)return-0;if(o||typeof s!="number")throw new Error("Invalid input");if(s in i)return i[s];const a=t[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e?.[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let h=1;h<a.length;h+=1)u.add(r(a[h]));break;case"Map":const f=new Map;i[s]=f;for(let h=1;h<a.length;h+=2)f.set(r(a[h]),r(a[h+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const d=Object.create(null);i[s]=d;for(let h=1;h<a.length;h+=2)d[a[h]]=r(a[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[l],m=new h(r(a[1]));i[s]=a[2]!==void 0?m.subarray(a[2],a[3]):m;break}case"ArrayBuffer":{const h=a[1],m=_0(h);i[s]=m;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const h=l.slice(9);i[s]=Temporal[h].from(a[1]);break}case"URL":{const h=new URL(a[1]);i[s]=h;break}case"URLSearchParams":{const h=new URLSearchParams(a[1]);i[s]=h;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==M0&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){if(c==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}const R0=new Set(["link","style","script","noscript"]),C0=new Set(["title","titleTemplate","script","style","noscript"]),Du=new Set(["base","meta","link","style","script","noscript"]),P0=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),D0=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),L0=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),I0=new Set(["templateParams","htmlAttrs","bodyAttrs"]),U0=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),N0=["name","property","http-equiv"],F0=new Set(["viewport","description","keywords","robots"]);function Dd(n){const e=n.split(":");return e.length?U0.has(e[1]):!1}function Qa(n){const{props:e,tag:t}=n;if(D0.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(n.tag==="meta"){for(const i of N0)if(e[i]!==void 0){const r=e[i],s=r.includes(":"),o=F0.has(r),l=!(s||o)&&n.key?`:key:${n.key}`:"";return`${t}:${r}${l}`}}if(n.key)return`${t}:key:${n.key}`;if(e.id)return`${t}:id:${e.id}`;if(C0.has(t)){const i=n.textContent||n.innerHTML;if(i)return`${t}:content:${i}`}}function Lu(n){const e=n._h||n._d;if(e)return e;const t=n.textContent||n.innerHTML;return t||`${n.tag}:${Object.entries(n.props).map(([i,r])=>`${i}:${String(r)}`).join(",")}`}function go(n,e,t){typeof n==="function"&&(!t||t!=="titleTemplate"&&!(t[0]==="o"&&t[1]==="n"))&&(n=n());let r;if(e&&(r=e(t,n)),Array.isArray(r))return r.map(s=>go(s,e));if(r?.constructor===Object){const s={};for(const o of Object.keys(r))s[o]=go(r[o],e,o);return s}return r}function O0(n,e){const t=n==="style"?new Map:new Set;function i(r){const s=r.trim();if(s)if(n==="style"){const[o,...a]=s.split(":").map(l=>l.trim());o&&a.length&&t.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>t.add(o))}return typeof e=="string"?n==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(n==="style"?t.set(r.trim(),s):i(r))}),t}function Ld(n,e){return n.props=n.props||{},e?n.tag==="templateParams"?(n.props=e,n):(Object.entries(e).forEach(([t,i])=>{if(i===null){n.props[t]=null;return}if(t==="class"||t==="style"){n.props[t]=O0(t,i);return}if(L0.has(t)){if(["textContent","innerHTML"].includes(t)&&typeof i=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,n.props.type=o,n[t]=JSON.stringify(i)}else n[t]=i;return}const r=String(i),s=t.startsWith("data-");r==="true"||r===""?n.props[t]=s?r:!0:!i&&s&&r==="false"?n.props[t]="false":i!==void 0&&(n.props[t]=i)}),n):n}function B0(n,e){const t=typeof e=="object"&&typeof e!="function"?e:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},i=Ld({tag:n,props:{}},t);return i.key&&R0.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function H0(n,e){if(!n)return[];typeof n=="function"&&(n=n());const t=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};n=t(void 0,n);const i=[];return n=go(n,t),Object.entries(n||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(B0(r,o))}),i.flat()}const Iu=(n,e)=>n._w===e._w?n._p-e._p:n._w-e._w,Uu={base:-10,title:10},z0={critical:-8,high:-1,low:2},Nu={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},k0=/@import/,Dr=n=>n===""||n===!0;function V0(n,e){if(typeof e.tagPriority=="number")return e.tagPriority;let t=100;const i=z0[e.tagPriority]||0,r=n.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Nu;if(e.tag in Uu)t=Uu[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(t=Nu.meta[s])}else e.tag==="link"&&e.props.rel?t=r.link[e.props.rel]:e.tag==="script"?Dr(e.props.async)?t=r.script.async:e.props.src&&!Dr(e.props.defer)&&!Dr(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?t=r.script.sync:Dr(e.props.defer)&&e.props.src&&!Dr(e.props.async)&&(t=r.script.defer):e.tag==="style"&&(t=e.innerHTML&&k0.test(e.innerHTML)?r.style.imported:r.style.sync);return(t||100)+i}function Fu(n,e){const t=typeof e=="function"?e(n):e,i=t.key||String(n.plugins.size+1);n.plugins.get(i)||(n.plugins.set(i,t),n.hooks.addHooks(t.hooks||{}))}function G0(n={}){const e=Md();e.addHooks(n.hooks||{});const t=!n.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:n,hooks:e,ssr:t,entries:i,headEntries(){return[...i.values()]},use:a=>Fu(o,a),push(a,l){const c={...l||{}};delete c.head;const u=c._index??o._entryCount++,f={_i:u,input:a,options:c},d={_poll(h=!1){o.dirty=!0,!h&&s.add(u),e.callHook("entries:updated",o)},dispose(){i.delete(u)&&o.invalidate()},patch(h){(!c.mode||c.mode==="server"&&t||c.mode==="client"&&!t)&&(f.input=h,i.set(u,f),d._poll())}};return d.patch(a),d},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const d=s.values().next().value;s.delete(d);const h=i.get(d);if(h){const m={tags:H0(h.input,n.propResolvers||[]).map(_=>Object.assign(_,h.options)),entry:h};await e.callHook("entries:normalize",m),h._tags=m.tags.map((_,g)=>(_._w=V0(o,_),_._p=(h._i<<10)+g,_._d=Qa(_),_))}}let l=!1;a.entries.flatMap(d=>(d._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(Iu).reduce((d,h)=>{const m=String(h._d||h._p);if(!d.has(m))return d.set(m,h);const _=d.get(m);if((h?.tagDuplicateStrategy||(I0.has(h.tag)?"merge":null)||(h.key&&h.key===_.key?"merge":null))==="merge"){const p={..._.props};Object.entries(h.props).forEach(([A,M])=>p[A]=A==="style"?new Map([..._.props.style||new Map,...M]):A==="class"?new Set([..._.props.class||new Set,...M]):M),d.set(m,{...h,props:p})}else h._p>>10===_._p>>10&&h.tag==="meta"&&Dd(m)?(d.set(m,Object.assign([...Array.isArray(_)?_:[_],h],h)),l=!0):(h._w===_._w?h._p>_._p:h?._w<_?._w)&&d.set(m,h);return d},a.tagMap);const c=a.tagMap.get("title"),u=a.tagMap.get("titleTemplate");if(o._title=c?.textContent,u){const d=u?.textContent;if(o._titleTemplate=d,d){let h=typeof d=="function"?d(c?.textContent):d;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",c?.textContent||"")),c?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...c,textContent:h}):(u.tag="title",u.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Iu)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const d of a.tags){const{innerHTML:h,tag:m,props:_}=d;if(P0.has(m)&&!(Object.keys(_).length===0&&!d.innerHTML&&!d.textContent)&&!(m==="meta"&&!_.content&&!_["http-equiv"]&&!_.charset)){if(m==="script"&&h){if(_.type?.endsWith("json")){const g=typeof h=="string"?h:JSON.stringify(h);d.innerHTML=g.replace(/</g,"\\u003C")}else typeof h=="string"&&(d.innerHTML=h.replace(new RegExp(`</${m}`,"g"),`<\\/${m}`));d._d=Qa(d)}f.push(d)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(n?.plugins||[]).forEach(a=>Fu(o,a)),o.hooks.callHook("init",o),n.init?.forEach(a=>a&&o.push(a)),o}const W0=(n,e)=>xt(e)?em(e):e,Id="usehead";function X0(n){return{install(t){t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(Id,n)}}.install}function q0(){if(oc()){const n=ur(Id);if(!n)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return n}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function BT(n,e={}){const t=e.head||q0();return t.ssr?t.push(n||{},e):$0(t,n,e)}function $0(n,e,t={}){const i=ii(!1);let r;return $m(()=>{const o=i.value?{}:go(e,W0);r?r.patch(o):r=n.push(o,t)}),Do()&&(sc(()=>{r.dispose()}),Th(()=>{i.value=!0}),Eh(()=>{i.value=!1})),r}const Y0="modulepreload",j0=function(n,e){return new URL(n,e).href},Ou={},Bu=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=c(t.map(u=>{if(u=j0(u,i),u in Ou)return;Ou[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const g=o[_];if(g.href===u&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":Y0,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((_,g)=>{m.addEventListener("load",_),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let Ks,Zs;function K0(){return Ks=$fetch(_c(`builds/meta/${Jr().app.buildId}.json`),{responseType:"json"}),Ks.then(n=>{Zs=r0(n.matcher)}).catch(n=>{console.error("[nuxt] Error fetching app manifest.",n)}),Ks}function Io(){return Ks||K0()}async function yc(n){const e=typeof n=="string"?n:n.path;if(await Io(),!Zs)return console.error("[nuxt] Error creating app manifest matcher.",Zs),{};try{return o0({},...Zs.matchAll(e).reverse())}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function Hu(n,e={}){if(!await Nd(n))return null;const i=await J0(n,e);return await Ud(i)||null}const Z0="_payload.json";async function J0(n,e={}){const t=new URL(n,"http://localhost");if(t.host!=="localhost"||br(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=Jr(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await Nd(n)?s:i.app.baseURL;return Lo(o,t.pathname,Z0+(r?`?${r}`:""))}async function Ud(n){const e=fetch(n,{cache:"force-cache"}).then(t=>t.text().then(Fd));try{return await e}catch(t){console.warn("[nuxt] Cannot load payload ",n,t)}return null}async function Nd(n=Cd().path){const e=Ct();return n=mc(n),(await Io()).prerendered.includes(n)?!0:e.runWithContext(async()=>{const i=await yc({path:n});return!!i.prerender&&!i.redirect})}let pi=null;async function Q0(){if(pi)return pi;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const e=await Fd(n.textContent||""),t=n.dataset.src?await Ud(n.dataset.src):void 0;return pi={...e,...t,...window.__NUXT__},pi.config?.public&&(pi.config.public=oi(pi.config.public)),pi}async function Fd(n){return await A0(n,Ct()._payloadRevivers)}function ev(n,e){Ct()._payloadRevivers[n]=e}const tv=[["NuxtError",n=>xc(n)],["EmptyShallowRef",n=>$c(n==="_"?void 0:n==="0n"?BigInt(0):fo(n))],["EmptyRef",n=>ii(n==="_"?void 0:n==="0n"?BigInt(0):fo(n))],["ShallowRef",n=>$c(n)],["ShallowReactive",n=>er(n)],["Ref",n=>ii(n)],["Reactive",n=>oi(n)]],nv=ui({name:"nuxt:revive-payload:client",order:-30,async setup(n){let e,t;for(const[i,r]of tv)ev(i,r);Object.assign(n.payload,([e,t]=Sd(()=>n.runWithContext(Q0)),e=await e,t(),e)),delete window.__NUXT__}});async function Mc(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(h=>{n.resolveTags().then(m=>{h(m.map(_=>{const g=s.get(_._d)||0,p={tag:_,id:(g?`${_._d}:${g}`:_._d)||Lu(_),shouldRender:!0};return _._d&&Dd(_._d)&&s.set(_._d,g+1),p}))})});let a=n._dom;if(!a){a={title:t.title,elMap:new Map().set("htmlAttrs",t.documentElement).set("bodyAttrs",t.body)};for(const h of["body","head"]){const m=t[h]?.children;for(const _ of m){const g=_.tagName.toLowerCase();if(!Du.has(g))continue;const p=Ld({tag:g,props:{}},{innerHTML:_.innerHTML,..._.getAttributeNames().reduce((A,M)=>(A[M]=_.getAttribute(M),A),{})||{}});if(p.key=_.getAttribute("data-hid")||void 0,p._d=Qa(p)||Lu(p),a.elMap.has(p._d)){let A=1,M=p._d;for(;a.elMap.has(M);)M=`${p._d}:${A++}`;a.elMap.set(M,_)}else a.elMap.set(p._d,_)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,m,_){const g=`${h}:${m}`;a.sideEffects[g]=_,delete a.pendingSideEffects[g]}function c({id:h,$el:m,tag:_}){const g=_.tag.endsWith("Attrs");a.elMap.set(h,m),g||(_.textContent&&_.textContent!==m.textContent&&(m.textContent=_.textContent),_.innerHTML&&_.innerHTML!==m.innerHTML&&(m.innerHTML=_.innerHTML),l(h,"el",()=>{m?.remove(),a.elMap.delete(h)}));for(const p in _.props){if(!Object.prototype.hasOwnProperty.call(_.props,p))continue;const A=_.props[p];if(p.startsWith("on")&&typeof A=="function"){const y=m?.dataset;if(y&&y[`${p}fired`]){const w=p.slice(0,-5);A.call(m,new Event(w.substring(2)))}m.getAttribute(`data-${p}`)!==""&&((_.tag==="bodyAttrs"?t.defaultView:m).addEventListener(p.substring(2),A.bind(m)),m.setAttribute(`data-${p}`,""));continue}const M=`attr:${p}`;if(p==="class"){if(!A)continue;for(const y of A)g&&l(h,`${M}:${y}`,()=>m.classList.remove(y)),!m.classList.contains(y)&&m.classList.add(y)}else if(p==="style"){if(!A)continue;for(const[y,w]of A)l(h,`${M}:${y}`,()=>{m.style.removeProperty(y)}),m.style.setProperty(y,w)}else A!==!1&&A!==null&&(m.getAttribute(p)!==A&&m.setAttribute(p,A===!0?"":String(A)),g&&l(h,M,()=>m.removeAttribute(p)))}}const u=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const h of d){const{tag:m,shouldRender:_,id:g}=h;if(_){if(m.tag==="title"){t.title=m.textContent,l("title","",()=>t.title=a.title);continue}h.$el=h.$el||a.elMap.get(g),h.$el?c(h):Du.has(m.tag)&&u.push(h)}}for(const h of u){const m=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),c(h),f[m]=f[m]||t.createDocumentFragment(),f[m].appendChild(h.$el)}for(const h of d)await n.hooks.callHook("dom:renderTag",h,t,l);f.head&&t.head.appendChild(f.head),f.bodyOpen&&t.body.insertBefore(f.bodyOpen,t.body.firstChild),f.bodyClose&&t.body.appendChild(f.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();n._dom=a,await n.hooks.callHook("dom:rendered",{renders:d}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function iv(n={}){const e=n.domOptions?.render||Mc;n.document=n.document||(typeof window<"u"?document:void 0);const t=n.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return G0({...n,plugins:[...n.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[t?JSON.parse(t):!1,...n.init||[]]})}function rv(n,e){let t=0;return()=>{const i=++t;e(()=>{t===i&&n()})}}function sv(n={}){const e=iv({domOptions:{render:rv(()=>Mc(e),t=>setTimeout(t,0))},...n});return e.install=X0(e),e}const ov={disableDefaults:!0},av=ui({name:"nuxt:head",enforce:"pre",setup(n){const e=sv(ov);n.vueApp.use(e);{let t=!0;const i=async()=>{t=!1,await Mc(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!t}),n.hooks.hook("page:start",()=>{t=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i)}}}),lv=async n=>{let e,t;const i=([e,t]=Sd(()=>yc({path:n.path})),e=await e,t(),e);if(i.redirect)return br(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},cv=[lv];function ea(n){const e=n&&typeof n=="object"?n:{};typeof n=="object"&&(n=_d({pathname:n.path||"",search:fd(n.query||{}),hash:n.hash||""}));const t=new URL(n.toString(),window.location.href);return{path:t.pathname,fullPath:n,query:pc(t.search),hash:t.hash,params:e.params||{},name:void 0,matched:e.matched||[],redirectedFrom:void 0,meta:e.meta||{},href:n}}const uv=ui({name:"nuxt:router",enforce:"pre",setup(n){const e=v_(window.location.pathname,Jr().app.baseURL)+window.location.search+window.location.hash,t=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(f,d)=>(i[f].push(d),()=>i[f].splice(i[f].indexOf(d),1)),s=Jr().app.baseURL,o=oi(ea(e));async function a(f,d){try{const h=ea(f);for(const m of i["navigate:before"]){const _=await m(h,o);if(_===!1||_ instanceof Error)return;if(typeof _=="string"&&_.length)return a(_,!0)}for(const m of i["resolve:before"])await m(h,o);Object.assign(o,h),window.history[d?"replaceState":"pushState"]({},"",Lo(s,h.fullPath)),n.isHydrating||await n.runWithContext(m0);for(const m of i["navigate:after"])await m(h,o)}catch(h){for(const m of i.error)await m(h)}}const c={currentRoute:od(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:f=>a(f,!1),replace:f=>a(f,!0),back:()=>window.history.go(-1),go:f=>window.history.go(f),forward:()=>window.history.go(1),beforeResolve:f=>r("resolve:before",f),beforeEach:f=>r("navigate:before",f),afterEach:f=>r("navigate:after",f),onError:f=>r("error",f),resolve:ea,addRoute:(f,d)=>{t.push(d)},getRoutes:()=>t,hasRoute:f=>t.some(d=>d.name===f),removeRoute:f=>{const d=t.findIndex(h=>h.name===f);d!==-1&&t.splice(d,1)}};n.vueApp.component("RouterLink",Sh({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(f,{slots:d})=>{const h=()=>a(f.to,f.replace);return()=>{const m=c.resolve(f.to);return f.custom?d.default?.({href:f.to,navigate:h,route:m}):yg("a",{href:f.to,onClick:_=>(_.preventDefault(),h())},d)}}})),window.addEventListener("popstate",f=>{const d=f.target.location;c.replace(d.href.replace(d.origin,""))}),n._route=o,n._middleware||={global:[],named:{}};const u=n.payload.state._layout;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(f,d)=>{f.meta=oi(f.meta||{}),n.isHydrating&&u&&!ai(f.meta.layout)&&(f.meta.layout=u),n._processingMiddleware=!0;{const h=new Set([...cv,...n._middleware.global]);{const m=await n.runWithContext(()=>yc({path:f.path}));if(m.appMiddleware)for(const _ in m.appMiddleware){const g=n._middleware.named[_];if(!g)return;m.appMiddleware[_]?h.add(g):h.delete(g)}}for(const m of h){const _=await n.runWithContext(()=>m(f,d));if(_!==!0&&(_||_===!1))return _}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(e),y_(o.fullPath,e)||await n.runWithContext(()=>h0(o.fullPath))}),{provide:{route:o,router:c}}}}),zu=globalThis.requestIdleCallback||(n=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{n(t)},1)}),HT=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),Sc=n=>{const e=Ct();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{zu(()=>n())}):zu(()=>n())},fv=ui({name:"nuxt:payload",setup(n){const e=new Set;Di().beforeResolve(async(t,i)=>{if(t.path===i.path)return;const r=await Hu(t.path);if(r){for(const s of e)delete n.static.data[s];for(const s in r.data)s in n.static.data||e.add(s),n.static.data[s]=r.data[s]}}),Sc(()=>{n.hooks.hook("link:prefetch",async t=>{const{hostname:i}=new URL(t,window.location.href);i===window.location.hostname&&await Hu(t).catch(()=>{console.warn("[nuxt] Error preloading payload for",t)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Io,1e3)})}}),hv=ui(()=>{const n=Di();Sc(()=>{n.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),dv=ui(n=>{let e;async function t(){const i=await Io();e&&clearTimeout(e),e=setTimeout(t,wu);try{const r=await $fetch(_c("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&n.hooks.callHook("app:manifest:update",r)}catch{}}Sc(()=>{e=setTimeout(t,wu)})});function pv(n={}){const e=n.path||window.location.pathname;let t={};try{t=fo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||t?.path!==e||t?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ct().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const mv=ui({name:"nuxt:chunk-reload",setup(n){const e=Di(),t=Jr(),i=new Set;e.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=Lo(t.app.baseURL,s.fullPath);pv({path:o,persistState:!0})}n.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),gv=ui({name:"nuxt:global-components"}),_v=[nv,av,uv,fv,hv,dv,mv,gv];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="179",vv=0,ku=1,xv=2,Od=1,yv=2,Un=3,li=0,kt=1,un=2,ri=0,hr=1,qr=2,Vu=3,Gu=4,Mv=5,Ti=100,Sv=101,Ev=102,Tv=103,bv=104,Av=200,wv=201,Rv=202,Cv=203,el=204,tl=205,Pv=206,Dv=207,Lv=208,Iv=209,Uv=210,Nv=211,Fv=212,Ov=213,Bv=214,nl=0,il=1,rl=2,vr=3,sl=4,ol=5,al=6,ll=7,Bd=0,Hv=1,zv=2,si=0,kv=1,Vv=2,Gv=3,Wv=4,Xv=5,qv=6,$v=7,Hd=300,xr=301,yr=302,cl=303,ul=304,Uo=306,fl=1e3,Ai=1001,hl=1002,gn=1003,Yv=1004,Ss=1005,En=1006,ta=1007,wi=1008,Vn=1009,zd=1010,kd=1011,Qr=1012,Tc=1013,Li=1014,On=1015,os=1016,bc=1017,Ac=1018,es=1020,Vd=35902,Gd=1021,Wd=1022,dn=1023,ts=1026,ns=1027,Xd=1028,wc=1029,qd=1030,Rc=1031,Cc=1033,Js=33776,Qs=33777,eo=33778,to=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,yl=37808,Ml=37809,Sl=37810,El=37811,Tl=37812,bl=37813,Al=37814,wl=37815,Rl=37816,Cl=37817,Pl=37818,Dl=37819,Ll=37820,Il=37821,no=36492,Ul=36494,Nl=36495,$d=36283,Fl=36284,Ol=36285,Bl=36286,jv=3200,Kv=3201,Zv=0,Jv=1,ti="",Qt="srgb",Mr="srgb-linear",_o="linear",it="srgb",Bi=7680,Wu=519,Qv=512,ex=513,tx=514,Yd=515,nx=516,ix=517,rx=518,sx=519,Xu=35044,qu="300 es",Tn=2e3,vo=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Hl=180/Math.PI;function as(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function ox(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function Lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ls{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==m){let g=1-a;const p=l*d+c*h+u*m+f*_,A=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),R=Math.atan2(w,p*A);g=Math.sin(g*R)/w,a=Math.sin(a*R)/w}const y=a*A;if(l=l*g+d*y,c=c*g+h*y,u=u*g+m*y,f=f*g+_*y,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+u*f+l*h-c*d,e[t+1]=l*m+u*d+c*f-a*h,e[t+2]=c*m+u*h+a*d-l*f,e[t+3]=u*m-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*m,this._y=c*h*f-d*u*m,this._z=c*u*m+d*h*f,this._w=c*u*f-d*h*m;break;case"YXZ":this._x=d*u*f+c*h*m,this._y=c*h*f-d*u*m,this._z=c*u*m-d*h*f,this._w=c*u*f+d*h*m;break;case"ZXY":this._x=d*u*f-c*h*m,this._y=c*h*f+d*u*m,this._z=c*u*m+d*h*f,this._w=c*u*f-d*h*m;break;case"ZYX":this._x=d*u*f-c*h*m,this._y=c*h*f+d*u*m,this._z=c*u*m-d*h*f,this._w=c*u*f+d*h*m;break;case"YZX":this._x=d*u*f+c*h*m,this._y=c*h*f+d*u*m,this._z=c*u*m-d*h*f,this._w=c*u*f-d*h*m;break;case"XZY":this._x=d*u*f-c*h*m,this._y=c*h*f-d*u*m,this._z=c*u*m+d*h*f,this._w=c*u*f+d*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new W,$u=new ls;class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],A=r[1],M=r[4],y=r[7],w=r[2],R=r[5],D=r[8];return s[0]=o*_+a*A+l*w,s[3]=o*g+a*M+l*R,s[6]=o*p+a*y+l*D,s[1]=c*_+u*A+f*w,s[4]=c*g+u*M+f*R,s[7]=c*p+u*y+f*D,s[2]=d*_+h*A+m*w,s[5]=d*g+h*M+m*R,s[8]=d*p+h*y+m*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,m=t*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new Ge;function jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ax(){const n=xo("canvas");return n.style.display="block",n}const Yu={};function dr(n){n in Yu||(Yu[n]=!0,console.warn(n))}function lx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ju=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){const n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?_o:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:_o,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Ze=cx();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class ux{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=xo("canvas")),Hi.width=e.width,Hi.height=e.height;const r=Hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oa(r[o].image)):s.push(oa(r[o]))}else s=oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ux.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;const aa=new W;class Vt extends Ar{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Ai,r=Ai,s=En,o=wi,a=dn,l=Vn,c=Vt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=as(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fl:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fl:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Hd;Vt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(h+1)/2,w=(p+1)/2,R=(u+d)/4,D=(f+_)/4,P=(m+g)/4;return M>y&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=D/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=P/s),this.set(i,r,s,t),this}let A=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-m)/A,this.y=(f-_)/A,this.z=(d-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends Ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends dx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kd extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class px extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ts.subVectors(this.max,Ir),zi.subVectors(e.a,Ir),ki.subVectors(e.b,Ir),Vi.subVectors(e.c,Ir),Xn.subVectors(ki,zi),qn.subVectors(Vi,ki),mi.subVectors(zi,Vi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!la(t,zi,ki,Vi,Ts)||(t=[1,0,0,0,1,0,0,0,1],!la(t,zi,ki,Vi,Ts))?!1:(bs.crossVectors(Xn,qn),t=[bs.x,bs.y,bs.z],la(t,zi,ki,Vi,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new W,new W,new W,new W,new W,new W,new W,new W],on=new W,Es=new cs,zi=new W,ki=new W,Vi=new W,Xn=new W,qn=new W,mi=new W,Ir=new W,Ts=new W,bs=new W,gi=new W;function la(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gi.fromArray(n,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mx=new cs,Ur=new W,ca=new W;class us{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(ca)),this.expandByPoint(Ur.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new W,ua=new W,As=new W,$n=new W,fa=new W,ws=new W,ha=new W;class Dc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ua.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(ua);const s=e.distanceTo(t)*.5,o=-this.direction.dot(As),a=$n.dot(this.direction),l=-$n.dot(As),c=$n.lengthSq(),u=Math.abs(1-o*o);let f,d,h,m;if(u>0)if(f=o*l-a,d=o*a-l,m=s*u,f>=0)if(d>=-m)if(d<=m){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ua).addScaledVector(As,d),h}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){fa.subVectors(t,e),ws.subVectors(i,e),ha.crossVectors(fa,ws);let o=this.direction.dot(ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(ws.crossVectors($n,ws));if(l<0)return null;const c=a*this.direction.dot(fa.cross($n));if(c<0||l+c>o)return null;const u=-a*$n.dot(ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,m,_,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,m,_,g)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,m=c*u,_=c*f;t[0]=d+_*a,t[4]=m*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,m=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=m*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=m*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+m,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-m,t[2]=m*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,_x)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Yn.crossVectors(i,Xt),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Yn.crossVectors(i,Xt)),Yn.normalize(),Rs.crossVectors(Xt,Yn),r[0]=Yn.x,r[4]=Rs.x,r[8]=Xt.x,r[1]=Yn.y,r[5]=Rs.y,r[9]=Xt.y,r[2]=Yn.z,r[6]=Rs.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],A=i[3],M=i[7],y=i[11],w=i[15],R=r[0],D=r[4],P=r[8],E=r[12],S=r[1],C=r[5],z=r[9],V=r[13],G=r[2],K=r[6],F=r[10],Z=r[14],U=r[3],se=r[7],me=r[11],Te=r[15];return s[0]=o*R+a*S+l*G+c*U,s[4]=o*D+a*C+l*K+c*se,s[8]=o*P+a*z+l*F+c*me,s[12]=o*E+a*V+l*Z+c*Te,s[1]=u*R+f*S+d*G+h*U,s[5]=u*D+f*C+d*K+h*se,s[9]=u*P+f*z+d*F+h*me,s[13]=u*E+f*V+d*Z+h*Te,s[2]=m*R+_*S+g*G+p*U,s[6]=m*D+_*C+g*K+p*se,s[10]=m*P+_*z+g*F+p*me,s[14]=m*E+_*V+g*Z+p*Te,s[3]=A*R+M*S+y*G+w*U,s[7]=A*D+M*C+y*K+w*se,s[11]=A*P+M*z+y*F+w*me,s[15]=A*E+M*V+y*Z+w*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+g*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],A=f*g*c-_*d*c+_*l*h-a*g*h-f*l*p+a*d*p,M=m*d*c-u*g*c-m*l*h+o*g*h+u*l*p-o*d*p,y=u*_*c-m*f*c+m*a*h-o*_*h-u*a*p+o*f*p,w=m*f*l-u*_*l-m*a*d+o*_*d+u*a*g-o*f*g,R=t*A+i*M+r*y+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=A*D,e[1]=(_*d*s-f*g*s-_*r*h+i*g*h+f*r*p-i*d*p)*D,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*D,e[4]=M*D,e[5]=(u*g*s-m*d*s+m*r*h-t*g*h-u*r*p+t*d*p)*D,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*p-t*l*p)*D,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*D,e[8]=y*D,e[9]=(m*f*s-u*_*s-m*i*h+t*_*h+u*i*p-t*f*p)*D,e[10]=(o*_*s-m*a*s+m*i*c-t*_*c-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*D,e[12]=w*D,e[13]=(u*_*r-m*f*r+m*i*d-t*_*d-u*i*g+t*f*g)*D,e[14]=(m*a*r-o*_*r-m*i*l+t*_*l+o*i*g-t*a*g)*D,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,m=s*f,_=o*u,g=o*f,p=a*f,A=l*c,M=l*u,y=l*f,w=i.x,R=i.y,D=i.z;return r[0]=(1-(_+p))*w,r[1]=(h+y)*w,r[2]=(m-M)*w,r[3]=0,r[4]=(h-y)*R,r[5]=(1-(d+p))*R,r[6]=(g+A)*R,r[7]=0,r[8]=(m+M)*D,r[9]=(g-A)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Tn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vo)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Tn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===vo)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new W,an=new _t,gx=new W(0,0,0),_x=new W(1,1,1),Yn=new W,Rs=new W,Xt=new W,Zu=new _t,Ju=new ls;class Gn{constructor(e=0,t=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vx=0;const Qu=new W,Wi=new ls,Dn=new _t,Cs=new W,Nr=new W,xx=new W,yx=new ls,ef=new W(1,0,0),tf=new W(0,1,0),nf=new W(0,0,1),rf={type:"added"},Mx={type:"removed"},Xi={type:"childadded",child:null},da={type:"childremoved",child:null};class Ft extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new W,t=new Gn,i=new ls,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ge}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Nr,Cs,this.up):Dn.lookAt(Cs,Nr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mx),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new W(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new W,Ln=new W,pa=new W,In=new W,qi=new W,$i=new W,sf=new W,ma=new W,ga=new W,_a=new W,va=new mt,xa=new mt,ya=new mt;class fn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Ln.subVectors(i,t),pa.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Ln),l=ln.dot(pa),c=Ln.dot(Ln),u=Ln.dot(pa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return va.setScalar(0),xa.setScalar(0),ya.setScalar(0),va.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(va,s.x),o.addScaledVector(xa,s.y),o.addScaledVector(ya,s.z),o}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Ln.subVectors(e,t),ln.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),$i.subVectors(s,i),ma.subVectors(e,i);const l=qi.dot(ma),c=$i.dot(ma);if(l<=0&&c<=0)return t.copy(i);ga.subVectors(e,r);const u=qi.dot(ga),f=$i.dot(ga);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qi,o);_a.subVectors(e,s);const h=qi.dot(_a),m=$i.dot(_a);if(m>=0&&h<=m)return t.copy(s);const _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector($i,a);const g=u*m-h*f;if(g<=0&&f-u>=0&&h-m>=0)return sf.subVectors(s,r),a=(f-u)/(f-u+(h-m)),t.copy(r).addScaledVector(sf,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(qi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=ox(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ze.workingToColorSpace(At.copy(this),e),Math.round(Ye(At.r*255,0,255))*65536+Math.round(Ye(At.g*255,0,255))*256+Math.round(Ye(At.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Qt){Ze.workingToColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Ps);const i=ia(jn.h,Ps.h,t),r=ia(jn.s,Ps.s,t),s=ia(jn.l,Ps.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Xe;Xe.NAMES=Jd;let Sx=0;class wr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=as(),this.name="",this.type="Material",this.blending=hr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lc extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new W,Ds=new Je;let Ex=0;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xu,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),e}}class Qd extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ep extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tx=0;const Zt=new _t,Sa=new Ft,Yi=new W,qt=new cs,Fr=new cs,St=new W;class sn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?ep:Qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(qt.min,Fr.min),qt.expandByPoint(St),St.addVectors(qt.max,Fr.max),qt.expandByPoint(St)):(qt.expandByPoint(Fr.min),qt.expandByPoint(Fr.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),St.add(Yi)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new W,l[P]=new W;const c=new W,u=new W,f=new W,d=new Je,h=new Je,m=new Je,_=new W,g=new W;function p(P,E,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,S),u.sub(c),f.sub(c),h.sub(d),m.sub(d);const C=1/(h.x*m.y-m.x*h.y);isFinite(C)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(C),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(C),a[P].add(_),a[E].add(_),a[S].add(_),l[P].add(g),l[E].add(g),l[S].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,E=A.length;P<E;++P){const S=A[P],C=S.start,z=S.count;for(let V=C,G=C+z;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new W,y=new W,w=new W,R=new W;function D(P){w.fromBufferAttribute(r,P),R.copy(w);const E=a[P];M.copy(E),M.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(R,E);const C=y.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,C)}for(let P=0,E=A.length;P<E;++P){const S=A[P],C=S.start,z=S.count;for(let V=C,G=C+z;V<G;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,h=e.count;d<h;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[h++]}return new Nt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const of=new _t,_i=new Dc,Ls=new us,af=new W,Is=new W,Us=new W,Ns=new W,Ea=new W,Fs=new W,lf=new W,Os=new W;class tn extends Ft{constructor(e=new sn,t=new Lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ea.fromBufferAttribute(f,e),o?Fs.addScaledVector(Ea,u):Fs.addScaledVector(Ea.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Ls.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Ls,af)===null||_i.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(of.copy(s).invert(),_i.copy(e.ray).applyMatrix4(of),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],A=Math.max(g.start,h.start),M=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=A,w=M;y<w;y+=3){const R=a.getX(y),D=a.getX(y+1),P=a.getX(y+2);r=Bs(this,p,e,i,c,u,f,R,D,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const A=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);r=Bs(this,o,e,i,c,u,f,A,M,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],A=Math.max(g.start,h.start),M=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=A,w=M;y<w;y+=3){const R=y,D=y+1,P=y+2;r=Bs(this,p,e,i,c,u,f,R,D,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const A=g,M=g+1,y=g+2;r=Bs(this,o,e,i,c,u,f,A,M,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function bx(n,e,t,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===li,a),l===null)return null;Os.copy(a),Os.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:n}}function Bs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Is),n.getVertexPosition(l,Us),n.getVertexPosition(c,Ns);const u=bx(n,e,t,i,Is,Us,Ns,lf);if(u){const f=new W;fn.getBarycoord(lf,Is,Us,Ns,f),r&&(u.uv=fn.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=fn.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};fn.getNormal(Is,Us,Ns,d.normal),u.face=d,u.barycoord=f}return u}class fs extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(f,2));function m(_,g,p,A,M,y,w,R,D,P,E){const S=y/D,C=w/P,z=y/2,V=w/2,G=R/2,K=D+1,F=P+1;let Z=0,U=0;const se=new W;for(let me=0;me<F;me++){const Te=me*C-V;for(let Ce=0;Ce<K;Ce++){const je=Ce*S-z;se[_]=je*A,se[g]=Te*M,se[p]=G,c.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[p]=R>0?1:-1,u.push(se.x,se.y,se.z),f.push(Ce/D),f.push(1-me/P),Z+=1}}for(let me=0;me<P;me++)for(let Te=0;Te<D;Te++){const Ce=d+Te+K*me,je=d+Te+K*(me+1),He=d+(Te+1)+K*(me+1),Q=d+(Te+1)+K*me;l.push(Ce,je,Q),l.push(je,He,Q),U+=6}a.addGroup(h,U,E),h+=U,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ax(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const wx={clone:Sr,merge:Lt};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class np extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new W,cf=new Je,uf=new Je;class en extends np{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,cf,uf),t.subVectors(uf,cf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class Px extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(ji,Ki,e,t);r.layers=this.layers,this.add(r);const s=new en(ji,Ki,e,t);s.layers=this.layers,this.add(s);const o=new en(ji,Ki,e,t);o.layers=this.layers,this.add(o);const a=new en(ji,Ki,e,t);a.layers=this.layers,this.add(a);const l=new en(ji,Ki,e,t);l.layers=this.layers,this.add(l);const c=new en(ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ip extends Vt{constructor(e=[],t=xr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dx extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ip(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fs(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ri});s.uniforms.tEquirect.value=t;const o=new tn(r,s),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=En),new Px(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Hs extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lx={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,m=.005;c.inputState.pinching&&d>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ic{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new Ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ix extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ba=new W,Ux=new W,Nx=new Ge;class Si{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ba.subVectors(i,t).cross(Ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nx.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new us,Fx=new Je(.5,.5),zs=new W;class rp{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],A=s[12],M=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-o,h-u,p-m,w-A).normalize(),r[1].setComponents(c+o,h+u,p+m,w+A).normalize(),r[2].setComponents(c+a,h+f,p+_,w+M).normalize(),r[3].setComponents(c-a,h-f,p-_,w-M).normalize(),i)r[4].setComponents(l,d,g,y).normalize(),r[5].setComponents(c-l,h-d,p-g,w-y).normalize();else if(r[4].setComponents(c-l,h-d,p-g,w-y).normalize(),t===Tn)r[5].setComponents(c+l,h+d,p+g,w+y).normalize();else if(t===vo)r[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=Fx.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zs.x=r.normal.x>0?e.max.x:e.min.x,zs.y=r.normal.y>0?e.max.y:e.min.y,zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ox extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new W,Mo=new W,ff=new _t,Or=new Dc,ks=new us,Aa=new W,hf=new W;class Bx extends Ft{constructor(e=new sn,t=new Ox){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)yo.fromBufferAttribute(t,r-1),Mo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=yo.distanceTo(Mo);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;ff.copy(r).invert(),Or.copy(e.ray).applyMatrix4(ff);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=c){const p=u.getX(_),A=u.getX(_+1),M=Vs(this,e,Or,l,p,A,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(h),p=Vs(this,e,Or,l,_,g,m-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=c){const p=Vs(this,e,Or,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Vs(this,e,Or,l,m-1,h,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(yo.fromBufferAttribute(a,r),Mo.fromBufferAttribute(a,s),t.distanceSqToSegment(yo,Mo,Aa,hf)>i)return;Aa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Aa);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Hx extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const df=new _t,zl=new Dc,Gs=new us,Ws=new W;class zx extends Ft{constructor(e=new sn,t=new Hx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(r),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;df.copy(r).invert(),zl.copy(e.ray).applyMatrix4(df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=d,_=h;m<_;m++){const g=c.getX(m);Ws.fromBufferAttribute(f,g),pf(Ws,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=d,_=h;m<_;m++)Ws.fromBufferAttribute(f,m),pf(Ws,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pf(n,e,t,i,r,s,o){const a=zl.distanceSqToPoint(n);if(a<t){const l=new W;zl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sp extends Vt{constructor(e,t,i=Li,r,s,o,a=gn,l=gn,c,u=ts,f=1){if(u!==ts&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hs extends sn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(s.slice(),3)),this.setAttribute("uv",new _n(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const M=new W,y=new W,w=new W;for(let R=0;R<t.length;R+=3)h(t[R+0],M),h(t[R+1],y),h(t[R+2],w),l(M,y,w,A)}function l(A,M,y,w){const R=w+1,D=[];for(let P=0;P<=R;P++){D[P]=[];const E=A.clone().lerp(y,P/R),S=M.clone().lerp(y,P/R),C=R-P;for(let z=0;z<=C;z++)z===0&&P===R?D[P][z]=E:D[P][z]=E.clone().lerp(S,z/C)}for(let P=0;P<R;P++)for(let E=0;E<2*(R-P)-1;E++){const S=Math.floor(E/2);E%2===0?(d(D[P][S+1]),d(D[P+1][S]),d(D[P][S])):(d(D[P][S+1]),d(D[P+1][S+1]),d(D[P+1][S]))}}function c(A){const M=new W;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(A),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function u(){const A=new W;for(let M=0;M<s.length;M+=3){A.x=s[M+0],A.y=s[M+1],A.z=s[M+2];const y=g(A)/2/Math.PI+.5,w=p(A)/Math.PI+.5;o.push(y,1-w)}m(),f()}function f(){for(let A=0;A<o.length;A+=6){const M=o[A+0],y=o[A+2],w=o[A+4],R=Math.max(M,y,w),D=Math.min(M,y,w);R>.9&&D<.1&&(M<.2&&(o[A+0]+=1),y<.2&&(o[A+2]+=1),w<.2&&(o[A+4]+=1))}}function d(A){s.push(A.x,A.y,A.z)}function h(A,M){const y=A*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function m(){const A=new W,M=new W,y=new W,w=new W,R=new Je,D=new Je,P=new Je;for(let E=0,S=0;E<s.length;E+=9,S+=6){A.set(s[E+0],s[E+1],s[E+2]),M.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),R.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),w.copy(A).add(M).add(y).divideScalar(3);const C=g(w);_(R,S+0,A,C),_(D,S+2,M,C),_(P,S+4,y,C)}}function _(A,M,y,w){w<0&&A.x===1&&(o[M]=A.x-1),y.x===0&&y.z===0&&(o[M]=w/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.vertices,e.indices,e.radius,e.details)}}class Uc extends hs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uc(e.radius,e.detail)}}class Nc extends hs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nc(e.radius,e.detail)}}class Er extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const A=p*d-o;for(let M=0;M<c;M++){const y=M*f-s;m.push(y,-A,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const M=A+c*p,y=A+c*(p+1),w=A+1+c*(p+1),R=A+1+c*p;h.push(M,y,R),h.push(y,w,R)}this.setIndex(h),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fc extends hs{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fc(e.radius,e.detail)}}class kx extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gx extends np{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wx extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mf(n,e,t,i){const r=qx(i);switch(t){case Gd:return n*e;case Xd:return n*e/r.components*r.byteLength;case wc:return n*e/r.components*r.byteLength;case qd:return n*e*2/r.components*r.byteLength;case Rc:return n*e*2/r.components*r.byteLength;case Wd:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case Cc:return n*e*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(e,8)/4;case dl:case ml:return Math.max(n,8)*Math.max(e,8)/2;case _l:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case no:case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $d:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(n){switch(n){case Vn:case zd:return{byteLength:1,components:1};case Qr:case kd:case os:return{byteLength:2,components:1};case bc:case Ac:return{byteLength:2,components:4};case Li:case Tc:case On:return{byteLength:4,components:1};case Vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function op(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $x(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<f.length;h++){const m=f[d],_=f[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,m=f.length;h<m;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
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
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_y=`#define PI 3.141592653589793
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
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xy=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,qy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,$y=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ky=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iM=`#if defined( USE_POINTS_UV )
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
#endif`,rM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
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
#endif`,_M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,eS=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tS=`#define DISTANCE
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
}`,nS=`#define DISTANCE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`uniform float scale;
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
}`,oS=`uniform vec3 diffuse;
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
}`,aS=`#include <common>
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
}`,lS=`uniform vec3 diffuse;
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
}`,cS=`#define LAMBERT
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
}`,uS=`#define LAMBERT
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
}`,fS=`#define MATCAP
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
}`,hS=`#define MATCAP
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
}`,dS=`#define NORMAL
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
}`,pS=`#define NORMAL
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
}`,mS=`#define PHONG
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
}`,gS=`#define PHONG
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
}`,_S=`#define STANDARD
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
}`,vS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,xS=`#define TOON
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
}`,yS=`#define TOON
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
}`,MS=`uniform float size;
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
}`,SS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 color;
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
}`,bS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,AS=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Yx,alphahash_pars_fragment:jx,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:ey,aomap_pars_fragment:ty,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:ry,beginnormal_vertex:sy,bsdfs:oy,iridescence_fragment:ay,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:hy,color_fragment:dy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:_y,cube_uv_reflection_fragment:vy,defaultnormal_vertex:xy,displacementmap_pars_vertex:yy,displacementmap_vertex:My,emissivemap_fragment:Sy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:by,envmap_fragment:Ay,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ry,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:zy,envmap_vertex:Py,fog_vertex:Dy,fog_pars_vertex:Ly,fog_fragment:Iy,fog_pars_fragment:Uy,gradientmap_pars_fragment:Ny,lightmap_pars_fragment:Fy,lights_lambert_fragment:Oy,lights_lambert_pars_fragment:By,lights_pars_begin:Hy,lights_toon_fragment:ky,lights_toon_pars_fragment:Vy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Xy,lights_physical_pars_fragment:qy,lights_fragment_begin:$y,lights_fragment_maps:Yy,lights_fragment_end:jy,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Jy,logdepthbuf_vertex:Qy,map_fragment:eM,map_pars_fragment:tM,map_particle_fragment:nM,map_particle_pars_fragment:iM,metalnessmap_fragment:rM,metalnessmap_pars_fragment:sM,morphinstance_vertex:oM,morphcolor_vertex:aM,morphnormal_vertex:lM,morphtarget_pars_vertex:cM,morphtarget_vertex:uM,normal_fragment_begin:fM,normal_fragment_maps:hM,normal_pars_fragment:dM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:_M,clearcoat_normal_fragment_maps:vM,clearcoat_pars_fragment:xM,iridescence_pars_fragment:yM,opaque_fragment:MM,packing:SM,premultiplied_alpha_fragment:EM,project_vertex:TM,dithering_fragment:bM,dithering_pars_fragment:AM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:PM,shadowmap_vertex:DM,shadowmask_pars_fragment:LM,skinbase_vertex:IM,skinning_pars_vertex:UM,skinning_vertex:NM,skinnormal_vertex:FM,specularmap_fragment:OM,specularmap_pars_fragment:BM,tonemapping_fragment:HM,tonemapping_pars_fragment:zM,transmission_fragment:kM,transmission_pars_fragment:VM,uv_pars_fragment:GM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:qM,background_vert:$M,background_frag:YM,backgroundCube_vert:jM,backgroundCube_frag:KM,cube_vert:ZM,cube_frag:JM,depth_vert:QM,depth_frag:eS,distanceRGBA_vert:tS,distanceRGBA_frag:nS,equirect_vert:iS,equirect_frag:rS,linedashed_vert:sS,linedashed_frag:oS,meshbasic_vert:aS,meshbasic_frag:lS,meshlambert_vert:cS,meshlambert_frag:uS,meshmatcap_vert:fS,meshmatcap_frag:hS,meshnormal_vert:dS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:gS,meshphysical_vert:_S,meshphysical_frag:vS,meshtoon_vert:xS,meshtoon_frag:yS,points_vert:MS,points_frag:SS,shadow_vert:ES,shadow_frag:TS,sprite_vert:bS,sprite_frag:AS},ye={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Sn={basic:{uniforms:Lt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Lt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Lt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Lt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Lt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Lt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Lt([ye.points,ye.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Lt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Lt([ye.common,ye.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Lt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Lt([ye.sprite,ye.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Lt([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Lt([ye.lights,ye.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Sn.physical={uniforms:Lt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Xs={r:0,b:0,g:0},xi=new Gn,wS=new _t;function RS(n,e,t,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const w=m(M);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){const w=m(y);w&&(w.isCubeTexture||w.mapping===Uo)?(u===void 0&&(u=new tn(new fs(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Sr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wS.makeRotationFromEuler(xi)),u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==it,(f!==w||d!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new tn(new Er(2,2),new nn({name:"BackgroundMaterial",uniforms:Sr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Xs,tp(n)),i.buffers.color.setClear(Xs.r,Xs.g,Xs.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g,dispose:A}}function CS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,C,z,V,G){let K=!1;const F=f(V,z,C);s!==F&&(s=F,c(s.object)),K=h(S,V,z,G),K&&m(S,V,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(S,C,z,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,C,z){const V=z.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let K=G[C.id];K===void 0&&(K={},G[C.id]=K);let F=K[V];return F===void 0&&(F=d(l()),K[V]=F),F}function d(S){const C=[],z=[],V=[];for(let G=0;G<t;G++)C[G]=0,z[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:V,object:S,attributes:{},index:null}}function h(S,C,z,V){const G=s.attributes,K=C.attributes;let F=0;const Z=z.getAttributes();for(const U in Z)if(Z[U].location>=0){const me=G[U];let Te=K[U];if(Te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;F++}return s.attributesNum!==F||s.index!==V}function m(S,C,z,V){const G={},K=C.attributes;let F=0;const Z=z.getAttributes();for(const U in Z)if(Z[U].location>=0){let me=K[U];me===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),G[U]=Te,F++}s.attributes=G,s.attributesNum=F,s.index=V}function _(){const S=s.newAttributes;for(let C=0,z=S.length;C<z;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){const z=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;z[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),G[S]!==C&&(n.vertexAttribDivisor(S,C),G[S]=C)}function A(){const S=s.newAttributes,C=s.enabledAttributes;for(let z=0,V=C.length;z<V;z++)C[z]!==S[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function M(S,C,z,V,G,K,F){F===!0?n.vertexAttribIPointer(S,C,z,G,K):n.vertexAttribPointer(S,C,z,V,G,K)}function y(S,C,z,V){_();const G=V.attributes,K=z.getAttributes(),F=C.defaultAttributeValues;for(const Z in K){const U=K[Z];if(U.location>=0){let se=G[Z];if(se===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const me=se.normalized,Te=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;const je=Ce.buffer,He=Ce.type,Q=Ce.bytesPerElement,ge=He===n.INT||He===n.UNSIGNED_INT||se.gpuType===Tc;if(se.isInterleavedBufferAttribute){const he=se.data,Pe=he.stride,Le=se.offset;if(he.isInstancedInterleavedBuffer){for(let Ne=0;Ne<U.locationSize;Ne++)p(U.location+Ne,he.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ne=0;Ne<U.locationSize;Ne++)g(U.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ne=0;Ne<U.locationSize;Ne++)M(U.location+Ne,Te/U.locationSize,He,me,Pe*Q,(Le+Te/U.locationSize*Ne)*Q,ge)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<U.locationSize;he++)p(U.location+he,se.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<U.locationSize;he++)g(U.location+he);n.bindBuffer(n.ARRAY_BUFFER,je);for(let he=0;he<U.locationSize;he++)M(U.location+he,Te/U.locationSize,He,me,Te*Q,Te/U.locationSize*he*Q,ge)}}else if(F!==void 0){const me=F[Z];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(U.location,me);break;case 3:n.vertexAttrib3fv(U.location,me);break;case 4:n.vertexAttrib4fv(U.location,me);break;default:n.vertexAttrib1fv(U.location,me)}}}}A()}function w(){P();for(const S in i){const C=i[S];for(const z in C){const V=C[z];for(const G in V)u(V[G].object),delete V[G];delete C[z]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const z in C){const V=C[z];for(const G in V)u(V[G].object),delete V[G];delete C[z]}delete i[S.id]}function D(S){for(const C in i){const z=i[C];if(z[S.id]===void 0)continue;const V=z[S.id];for(const G in V)u(V[G].object),delete V[G];delete z[S.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:A}}function PS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_]*d[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==dn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const P=D===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Vn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==On&&!P)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:R}}function LS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Si,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const A=s?0:i,M=A*4;let y=p.clippingState||null;l.value=y,y=u(m,d,M,h);for(let w=0;w!==M;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=h+_*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=h;M!==_;++M,y+=4)o.copy(f[M]).applyMatrix4(A,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function IS(n){let e=new WeakMap;function t(o,a){return a===cl?o.mapping=xr:a===ul&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cl||a===ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const nr=4,gf=[.125,.215,.35,.446,.526,.582],bi=20,wa=new Gx,_f=new Xe;let Ra=null,Ca=0,Pa=0,Da=!1;const Ei=(1+Math.sqrt(5))/2,Zi=1/Ei,vf=[new W(-Ei,Zi,0),new W(Ei,Zi,0),new W(-Zi,0,Ei),new W(Zi,0,Ei),new W(0,Ei,-Zi),new W(0,Ei,Zi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],US=new W;class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=US}=s;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Da,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:os,format:dn,colorSpace:Mr,depthBuffer:!1},r=yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NS(s)),this._blurMaterial=FS(s,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,r,s){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(_f),f.toneMapping=si,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new Lc({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new tn(new fs,_);let p=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,p=!0):(_.color.copy(_f),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const w=this._cubeSize;qs(r,y*w,M>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vf[(r-s-1)%vf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new tn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*bi-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):bi;g>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);const p=[];let A=0;for(let D=0;D<bi;++D){const P=D/_,E=Math.exp(-P*P/2);p.push(E),D===0?A+=E:D<g&&(A+=2*E)}for(let D=0;D<p.length;D++)p[D]=p[D]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;const y=this._sizeLods[r],w=3*y*(r>M-nr?r-M+nr:0),R=4*(this._cubeSize-y);qs(t,w,R,3*y,2*y),l.setRenderTarget(t),l.render(f,wa)}}function NS(n){const e=[],t=[],i=[];let r=n;const s=n-nr+1+gf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-nr?l=gf[o-n+nr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,m=6,_=3,g=2,p=1,A=new Float32Array(_*m*h),M=new Float32Array(g*m*h),y=new Float32Array(p*m*h);for(let R=0;R<h;R++){const D=R%3*2/3-1,P=R>2?0:-1,E=[D,P,0,D+2/3,P,0,D+2/3,P+1,0,D,P,0,D+2/3,P+1,0,D,P+1,0];A.set(E,_*m*R),M.set(d,g*m*R);const S=[R,R,R,R,R,R];y.set(S,p*m*R)}const w=new sn;w.setAttribute("position",new Nt(A,_)),w.setAttribute("uv",new Nt(M,g)),w.setAttribute("faceIndex",new Nt(y,p)),e.push(w),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yf(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function FS(n,e,t){const i=new Float32Array(bi),r=new W(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Mf(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Sf(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function OS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cl||l===ul,u=l===xr||l===yr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new xf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function BS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HS(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,m=f.attributes.position;let _=0;if(h!==null){const A=h.array;_=h.version;for(let M=0,y=A.length;M<y;M+=3){const w=A[M+0],R=A[M+1],D=A[M+2];d.push(w,R,R,D,D,w)}}else if(m!==void 0){const A=m.array;_=m.version;for(let M=0,y=A.length/3-1;M<y;M+=3){const w=M+0,R=M+1,D=M+2;d.push(w,R,R,D,D,w)}}else return;const g=new(jd(d)?ep:Qd)(d,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function zS(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];t.update(g,i,1)}function f(d,h,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,m);let p=0;for(let A=0;A<m;A++)p+=h[A]*_[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function VS(n,e,t){const i=new WeakMap,r=new mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*w*4*f),D=new Kd(R,y,w,f);D.type=On,D.needsUpdate=!0;const P=M*4;for(let S=0;S<f;S++){const C=g[S],z=p[S],V=A[S],G=y*w*4*S;for(let K=0;K<C.count;K++){const F=K*P;h===!0&&(r.fromBufferAttribute(C,K),R[G+F+0]=r.x,R[G+F+1]=r.y,R[G+F+2]=r.z,R[G+F+3]=0),m===!0&&(r.fromBufferAttribute(z,K),R[G+F+4]=r.x,R[G+F+5]=r.y,R[G+F+6]=r.z,R[G+F+7]=0),_===!0&&(r.fromBufferAttribute(V,K),R[G+F+8]=r.x,R[G+F+9]=r.y,R[G+F+10]=r.z,R[G+F+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Je(y,w)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function GS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ap=new Vt,Ef=new sp(1,1),lp=new Kd,cp=new px,up=new ip,Tf=[],bf=[],Af=new Float32Array(16),wf=new Float32Array(9),Rf=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tf[r];if(s===void 0&&(s=new Float32Array(r),Tf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function WS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function YS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),Mt(t,i)}}function jS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;wf.set(i),n.uniformMatrix3fv(this.addr,!1,wf),Mt(t,i)}}function KS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Mt(t,i)}}function ZS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function eE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function tE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function iE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function rE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function sE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ef.compareFunction=Yd,s=Ef):s=ap,t.setTexture2D(e||s,r)}function oE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cp,r)}function aE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||up,r)}function lE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lp,r)}function cE(n){switch(n){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return $S;case 35674:return YS;case 35675:return jS;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return lE}}function uE(n,e){n.uniform1fv(this.addr,e)}function fE(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function hE(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function dE(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function pE(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mE(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gE(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _E(n,e){n.uniform1iv(this.addr,e)}function vE(n,e){n.uniform2iv(this.addr,e)}function xE(n,e){n.uniform3iv(this.addr,e)}function yE(n,e){n.uniform4iv(this.addr,e)}function ME(n,e){n.uniform1uiv(this.addr,e)}function SE(n,e){n.uniform2uiv(this.addr,e)}function EE(n,e){n.uniform3uiv(this.addr,e)}function TE(n,e){n.uniform4uiv(this.addr,e)}function bE(n,e,t){const i=this.cache,r=e.length,s=No(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ap,s[o])}function AE(n,e,t){const i=this.cache,r=e.length,s=No(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cp,s[o])}function wE(n,e,t){const i=this.cache,r=e.length,s=No(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||up,s[o])}function RE(n,e,t){const i=this.cache,r=e.length,s=No(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lp,s[o])}function CE(n){switch(n){case 5126:return uE;case 35664:return fE;case 35665:return hE;case 35666:return dE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return _E;case 35667:case 35671:return vE;case 35668:case 35672:return xE;case 35669:case 35673:return yE;case 5125:return ME;case 36294:return SE;case 36295:return EE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return RE}}class PE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cE(t.type)}}class DE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CE(t.type)}}class LE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Cf(n,e){n.seq.push(e),n.map[e.id]=e}function IE(n,e,t){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),o=La.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cf(t,c===void 0?new PE(a,n,e):new DE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new LE(a),Cf(t,f)),t=f}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);IE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UE=37297;let NE=0;function FE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Df=new Ge;function OE(n){Ze._getMatrix(Df,Ze.workingColorSpace,n);const e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case _o:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+FE(n.getShaderSource(e),a)}else return s}function BE(n,e){const t=OE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HE(n,e){let t;switch(e){case kv:t="Linear";break;case Vv:t="Reinhard";break;case Gv:t="Cineon";break;case Wv:t="ACESFilmic";break;case qv:t="AgX";break;case $v:t="Neutral";break;case Xv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new W;function zE(){Ze.getLuminanceCoefficients($s);const n=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function VE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hr(n){return n!==""}function If(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(WE,qE)}const XE=new Map;function qE(n,e){let t=We[e];if(t===void 0){const i=XE.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(n){return n.replace($E,YE)}function YE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ff(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function KE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function JE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bd:e="ENVMAP_BLENDING_MULTIPLY";break;case Hv:e="ENVMAP_BLENDING_MIX";break;case zv:e="ENVMAP_BLENDING_ADD";break}return e}function QE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function eT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jE(t),c=KE(t),u=ZE(t),f=JE(t),d=QE(t),h=kE(t),m=VE(s),_=r.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?We.tonemapping_pars_fragment:"",t.toneMapping!==si?HE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,BE("linearToOutputTexel",t.outputColorSpace),zE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=kl(o),o=If(o,t),o=Uf(o,t),a=kl(a),a=If(a,t),a=Uf(a,t),o=Nf(o),a=Nf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=A+g+o,y=A+p+a,w=Pf(r,r.VERTEX_SHADER,M),R=Pf(r,r.FRAGMENT_SHADER,y);r.attachShader(_,w),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(C){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(w)||"",G=r.getShaderInfoLog(R)||"",K=z.trim(),F=V.trim(),Z=G.trim();let U=!0,se=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,R);else{const me=Lf(r,w,"vertex"),Te=Lf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+K+`
`+me+`
`+Te)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(F===""||Z==="")&&(se=!1);se&&(C.diagnostics={runnable:U,programLog:K,vertexShader:{log:F,prefix:g},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(w),r.deleteShader(R),P=new io(r,_),E=GE(r,_)}let P;this.getUniforms=function(){return P===void 0&&D(this),P};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,UE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let tT=0;class nT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iT(e),t.set(e,i)),i}}class iT{constructor(e){this.id=tT++,this.code=e,this.usedTimes=0}}function rT(n,e,t,i,r,s,o){const a=new Zd,l=new nT,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,C,z,V){const G=z.fog,K=V.geometry,F=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),U=Z&&Z.mapping===Uo?Z.image.height:null,se=m[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=me!==void 0?me.length:0;let Ce=0;K.morphAttributes.position!==void 0&&(Ce=1),K.morphAttributes.normal!==void 0&&(Ce=2),K.morphAttributes.color!==void 0&&(Ce=3);let je,He,Q,ge;if(se){const et=Sn[se];je=et.vertexShader,He=et.fragmentShader}else je=E.vertexShader,He=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Le=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,lt=!!E.map,qe=!!E.matcap,v=!!Z,I=!!E.aoMap,O=!!E.lightMap,ee=!!E.bumpMap,X=!!E.normalMap,te=!!E.displacementMap,j=!!E.emissiveMap,ne=!!E.metalnessMap,ae=!!E.roughnessMap,ie=E.anisotropy>0,b=E.clearcoat>0,x=E.dispersion>0,L=E.iridescence>0,k=E.sheen>0,J=E.transmission>0,q=ie&&!!E.anisotropyMap,de=b&&!!E.clearcoatMap,le=b&&!!E.clearcoatNormalMap,xe=b&&!!E.clearcoatRoughnessMap,Ee=L&&!!E.iridescenceMap,oe=L&&!!E.iridescenceThicknessMap,ve=k&&!!E.sheenColorMap,Ie=k&&!!E.sheenRoughnessMap,Se=!!E.specularMap,pe=!!E.specularColorMap,ze=!!E.specularIntensityMap,N=J&&!!E.transmissionMap,fe=J&&!!E.thicknessMap,_e=!!E.gradientMap,Ae=!!E.alphaMap,ce=E.alphaTest>0,re=!!E.alphaHash,Re=!!E.extensions;let Ve=si;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const st={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:He,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Mr,alphaToCoverage:!!E.alphaToCoverage,map:lt,matcap:qe,envMap:v,envMapMode:v&&Z.mapping,envMapCubeUVHeight:U,aoMap:I,lightMap:O,bumpMap:ee,normalMap:X,displacementMap:d&&te,emissiveMap:j,normalMapObjectSpace:X&&E.normalMapType===Jv,normalMapTangentSpace:X&&E.normalMapType===Zv,metalnessMap:ne,roughnessMap:ae,anisotropy:ie,anisotropyMap:q,clearcoat:b,clearcoatMap:de,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:x,iridescence:L,iridescenceMap:Ee,iridescenceThicknessMap:oe,sheen:k,sheenColorMap:ve,sheenRoughnessMap:Ie,specularMap:Se,specularColorMap:pe,specularIntensityMap:ze,transmission:J,transmissionMap:N,thicknessMap:fe,gradientMap:_e,opaque:E.transparent===!1&&E.blending===hr&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ce,alphaHash:re,combine:E.combine,mapUv:lt&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:O&&_(E.lightMap.channel),bumpMapUv:ee&&_(E.bumpMap.channel),normalMapUv:X&&_(E.normalMap.channel),displacementMapUv:te&&_(E.displacementMap.channel),emissiveMapUv:j&&_(E.emissiveMap.channel),metalnessMapUv:ne&&_(E.metalnessMap.channel),roughnessMapUv:ae&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:de&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(E.sheenRoughnessMap.channel),specularMapUv:Se&&_(E.specularMap.channel),specularColorMapUv:pe&&_(E.specularColorMap.channel),specularIntensityMapUv:ze&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:fe&&_(E.thicknessMap.channel),alphaMapUv:Ae&&_(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(X||ie),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(lt||Ae),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:lt&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===it,decodeVideoTextureEmissive:j&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(A(S,E),M(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=m[E.type];let C;if(S){const z=Sn[S];C=wx.clone(z.uniforms)}else C=E.uniforms;return C}function w(E,S){let C;for(let z=0,V=u.length;z<V;z++){const G=u[z];if(G.cacheKey===S){C=G,++C.usedTimes;break}}return C===void 0&&(C=new eT(n,S,E,s),u.push(C)),C}function R(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function D(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:P}}function sT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,m,_,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,d,h,m,_,g){const p=o(f,d,h,m,_,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,m,_,g){const p=o(f,d,h,m,_,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||oT),i.length>1&&i.sort(d||Of),r.length>1&&r.sort(d||Of)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function aT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bf,n.set(i,[o])):r>=s.length?(o=new Bf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Xe};break;case"SpotLight":t={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function cT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uT=0;function fT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hT(n){const e=new lT,t=cT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new _t,o=new _t;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,A=0,M=0,y=0,w=0,R=0,D=0;c.sort(fT);for(let E=0,S=c.length;E<S;E++){const C=c[E],z=C.color,V=C.intensity,G=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*V,f+=z.g*V,d+=z.b*V;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],V);D++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,U=t.get(C);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=C.shadow.matrix,A++}i.directional[h]=F,h++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(z).multiplyScalar(V),F.distance=G,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const Z=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,Z.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[_]=Z.matrix,C.castShadow){const U=t.get(C);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=K,y++}_++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(z).multiplyScalar(V),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=F,g++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const Z=C.shadow,U=t.get(C);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=F,m++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(V),F.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[p]=F,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==h||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==A||P.numPointShadows!==M||P.numSpotShadows!==y||P.numSpotMaps!==w||P.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,P.directionalLength=h,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=A,P.numPointShadows=M,P.numSpotShadows=y,P.numSpotMaps=w,P.numLightProbes=D,i.version=uT++)}function l(c,u){let f=0,d=0,h=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(M.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(M.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Hf(n){const e=new hT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hf(n),e.set(r,[a])):s>=o.length?(a=new Hf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
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
}`;function gT(n,e,t){let i=new rp;const r=new Je,s=new Je,o=new mt,a=new kx({depthPacking:Kv}),l=new Vx,c={},u=t.maxTextureSize,f={[li]:kt,[kt]:li,[un]:un},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new sn;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tn(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Od;let p=this.type;this.render=function(R,D,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ri),z.buffers.depth.getReversed()?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=p!==Un&&this.type===Un,G=p===Un&&this.type!==Un;for(let K=0,F=R.length;K<F;K++){const Z=R[K],U=Z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const se=U.getFrameExtents();if(r.multiply(se),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,U.mapSize.y=s.y)),U.map===null||V===!0||G===!0){const Te=this.type!==Un?{minFilter:gn,magFilter:gn}:{};U.map!==null&&U.map.dispose(),U.map=new Ii(r.x,r.y,Te),U.map.texture.name=Z.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const me=U.getViewportCount();for(let Te=0;Te<me;Te++){const Ce=U.getViewport(Te);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),z.viewport(o),U.updateMatrices(Z,Te),i=U.getFrustum(),y(D,P,U.camera,Z,this.type)}U.isPointLightShadow!==!0&&this.type===Un&&A(U,P),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,C)};function A(R,D){const P=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ii(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(D,null,P,d,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(D,null,P,h,_,null)}function M(R,D,P,E){let S=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const z=S.uuid,V=D.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let K=G[V];K===void 0&&(K=S.clone(),G[V]=K,D.addEventListener("dispose",w)),S=K}if(S.visible=D.visible,S.wireframe=D.wireframe,E===Un?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=P}return S}function y(R,D,P,E,S){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Un)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const V=e.update(R),G=R.material;if(Array.isArray(G)){const K=V.groups;for(let F=0,Z=K.length;F<Z;F++){const U=K[F],se=G[U.materialIndex];if(se&&se.visible){const me=M(R,se,E,S);R.onBeforeShadow(n,R,D,P,V,me,U),n.renderBufferDirect(P,null,V,me,R,U),R.onAfterShadow(n,R,D,P,V,me,U)}}}else if(G.visible){const K=M(R,G,E,S);R.onBeforeShadow(n,R,D,P,V,K,null),n.renderBufferDirect(P,null,V,K,R,null),R.onAfterShadow(n,R,D,P,V,K,null)}}const z=R.children;for(let V=0,G=z.length;V<G;V++)y(z[V],D,P,E,S)}function w(R){R.target.removeEventListener("dispose",w);for(const P in c){const E=c[P],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const _T={[nl]:il,[rl]:al,[sl]:ll,[vr]:ol,[il]:nl,[al]:rl,[ll]:sl,[ol]:vr};function vT(n,e){function t(){let N=!1;const fe=new mt;let _e=null;const Ae=new mt(0,0,0,0);return{setMask:function(ce){_e!==ce&&!N&&(n.colorMask(ce,ce,ce,ce),_e=ce)},setLocked:function(ce){N=ce},setClear:function(ce,re,Re,Ve,st){st===!0&&(ce*=Ve,re*=Ve,Re*=Ve),fe.set(ce,re,Re,Ve),Ae.equals(fe)===!1&&(n.clearColor(ce,re,Re,Ve),Ae.copy(fe))},reset:function(){N=!1,_e=null,Ae.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,_e=null,Ae=null,ce=null;return{setReversed:function(re){if(fe!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Ve=ce;ce=null,this.setClear(Ve)}},getReversed:function(){return fe},setTest:function(re){re?he(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(re){_e!==re&&!N&&(n.depthMask(re),_e=re)},setFunc:function(re){if(fe&&(re=_T[re]),Ae!==re){switch(re){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=re}},setLocked:function(re){N=re},setClear:function(re){ce!==re&&(fe&&(re=1-re),n.clearDepth(re),ce=re)},reset:function(){N=!1,_e=null,Ae=null,ce=null,fe=!1}}}function r(){let N=!1,fe=null,_e=null,Ae=null,ce=null,re=null,Re=null,Ve=null,st=null;return{setTest:function(et){N||(et?he(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(et){fe!==et&&!N&&(n.stencilMask(et),fe=et)},setFunc:function(et,wn,vn){(_e!==et||Ae!==wn||ce!==vn)&&(n.stencilFunc(et,wn,vn),_e=et,Ae=wn,ce=vn)},setOp:function(et,wn,vn){(re!==et||Re!==wn||Ve!==vn)&&(n.stencilOp(et,wn,vn),re=et,Re=wn,Ve=vn)},setLocked:function(et){N=et},setClear:function(et){st!==et&&(n.clearStencil(et),st=et)},reset:function(){N=!1,fe=null,_e=null,Ae=null,ce=null,re=null,Re=null,Ve=null,st=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,_=!1,g=null,p=null,A=null,M=null,y=null,w=null,R=null,D=new Xe(0,0,0),P=0,E=!1,S=null,C=null,z=null,V=null,G=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=Z>=1):U.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=Z>=2);let se=null,me={};const Te=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),je=new mt().fromArray(Te),He=new mt().fromArray(Ce);function Q(N,fe,_e,Ae){const ce=new Uint8Array(4),re=n.createTexture();n.bindTexture(N,re),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<_e;Re++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(fe+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return re}const ge={};ge[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(vr),ee(!1),X(ku),he(n.CULL_FACE),I(ri);function he(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Pe(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Le(N,fe){return f[N]!==fe?(n.bindFramebuffer(N,fe),f[N]=fe,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=fe),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ne(N,fe){let _e=h,Ae=!1;if(N){_e=d.get(fe),_e===void 0&&(_e=[],d.set(fe,_e));const ce=N.textures;if(_e.length!==ce.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Re=ce.length;re<Re;re++)_e[re]=n.COLOR_ATTACHMENT0+re;_e.length=ce.length,Ae=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(_e)}function lt(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const qe={[Ti]:n.FUNC_ADD,[Sv]:n.FUNC_SUBTRACT,[Ev]:n.FUNC_REVERSE_SUBTRACT};qe[Tv]=n.MIN,qe[bv]=n.MAX;const v={[Av]:n.ZERO,[wv]:n.ONE,[Rv]:n.SRC_COLOR,[el]:n.SRC_ALPHA,[Uv]:n.SRC_ALPHA_SATURATE,[Lv]:n.DST_COLOR,[Pv]:n.DST_ALPHA,[Cv]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[Iv]:n.ONE_MINUS_DST_COLOR,[Dv]:n.ONE_MINUS_DST_ALPHA,[Nv]:n.CONSTANT_COLOR,[Fv]:n.ONE_MINUS_CONSTANT_COLOR,[Ov]:n.CONSTANT_ALPHA,[Bv]:n.ONE_MINUS_CONSTANT_ALPHA};function I(N,fe,_e,Ae,ce,re,Re,Ve,st,et){if(N===ri){_===!0&&(Pe(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),N!==Mv){if(N!==g||et!==E){if((p!==Ti||y!==Ti)&&(n.blendEquation(n.FUNC_ADD),p=Ti,y=Ti),et)switch(N){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qr:n.blendFunc(n.ONE,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,M=null,w=null,R=null,D.set(0,0,0),P=0,g=N,E=et}return}ce=ce||fe,re=re||_e,Re=Re||Ae,(fe!==p||ce!==y)&&(n.blendEquationSeparate(qe[fe],qe[ce]),p=fe,y=ce),(_e!==A||Ae!==M||re!==w||Re!==R)&&(n.blendFuncSeparate(v[_e],v[Ae],v[re],v[Re]),A=_e,M=Ae,w=re,R=Re),(Ve.equals(D)===!1||st!==P)&&(n.blendColor(Ve.r,Ve.g,Ve.b,st),D.copy(Ve),P=st),g=N,E=!1}function O(N,fe){N.side===un?Pe(n.CULL_FACE):he(n.CULL_FACE);let _e=N.side===kt;fe&&(_e=!_e),ee(_e),N.blending===hr&&N.transparent===!1?I(ri):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ae=N.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),j(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function X(N){N!==vv?(he(n.CULL_FACE),N!==C&&(N===ku?n.cullFace(n.BACK):N===xv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),C=N}function te(N){N!==z&&(F&&n.lineWidth(N),z=N)}function j(N,fe,_e){N?(he(n.POLYGON_OFFSET_FILL),(V!==fe||G!==_e)&&(n.polygonOffset(fe,_e),V=fe,G=_e)):Pe(n.POLYGON_OFFSET_FILL)}function ne(N){N?he(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function ae(N){N===void 0&&(N=n.TEXTURE0+K-1),se!==N&&(n.activeTexture(N),se=N)}function ie(N,fe,_e){_e===void 0&&(se===null?_e=n.TEXTURE0+K-1:_e=se);let Ae=me[_e];Ae===void 0&&(Ae={type:void 0,texture:void 0},me[_e]=Ae),(Ae.type!==N||Ae.texture!==fe)&&(se!==_e&&(n.activeTexture(_e),se=_e),n.bindTexture(N,fe||ge[N]),Ae.type=N,Ae.texture=fe)}function b(){const N=me[se];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Ie(N){He.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Se(N,fe){let _e=c.get(fe);_e===void 0&&(_e=new WeakMap,c.set(fe,_e));let Ae=_e.get(N);Ae===void 0&&(Ae=n.getUniformBlockIndex(fe,N.name),_e.set(N,Ae))}function pe(N,fe){const Ae=c.get(fe).get(N);l.get(fe)!==Ae&&(n.uniformBlockBinding(fe,Ae,N.__bindingPointIndex),l.set(fe,Ae))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,me={},f={},d=new WeakMap,h=[],m=null,_=!1,g=null,p=null,A=null,M=null,y=null,w=null,R=null,D=new Xe(0,0,0),P=0,E=!1,S=null,C=null,z=null,V=null,G=null,je.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Pe,bindFramebuffer:Le,drawBuffers:Ne,useProgram:lt,setBlending:I,setMaterial:O,setFlipSided:ee,setCullFace:X,setLineWidth:te,setPolygonOffset:j,setScissorTest:ne,activeTexture:ae,bindTexture:ie,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:Ee,texImage3D:oe,updateUBOMapping:Se,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:xe,texSubImage2D:k,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:de,scissor:ve,viewport:Ie,reset:ze}}function xT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return h?new OffscreenCanvas(b,x):xo("canvas")}function _(b,x,L){let k=1;const J=ie(b);if((J.width>L||J.height>L)&&(k=L/Math.max(J.width,J.height)),k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(k*J.width),de=Math.floor(k*J.height);f===void 0&&(f=m(q,de));const le=x?m(q,de):f;return le.width=q,le.height=de,le.getContext("2d").drawImage(b,0,0,q,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+de+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,x,L,k,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=x;if(x===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),x===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),x===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),x===n.RGBA){const de=J?_o:Ze.getTransfer(k);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=de===it?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(b,x){let L;return b?x===null||x===Li||x===es?L=n.DEPTH24_STENCIL8:x===On?L=n.DEPTH32F_STENCIL8:x===Qr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===es?L=n.DEPTH_COMPONENT24:x===On?L=n.DEPTH_COMPONENT32F:x===Qr&&(L=n.DEPTH_COMPONENT16),L}function w(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&u.delete(x)}function D(b){const x=b.target;x.removeEventListener("dispose",D),S(x)}function P(b){const x=i.get(b);if(x.__webglInit===void 0)return;const L=b.source,k=d.get(L);if(k){const J=k[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(b),Object.keys(k).length===0&&d.delete(L)}i.remove(b)}function E(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const L=b.source,k=d.get(L);delete k[x.__cacheKey],o.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let J=0;J<x.__webglFramebuffer[k].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[k][J]);else n.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)n.deleteFramebuffer(x.__webglFramebuffer[k]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=b.textures;for(let k=0,J=L.length;k<J;k++){const q=i.get(L[k]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[k])}i.remove(b)}let C=0;function z(){C=0}function V(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function G(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function K(b,x){const L=i.get(b);if(b.isVideoTexture&&ne(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){const k=b.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(L,b,x);return}}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function F(b,x){const L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){ge(L,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function Z(b,x){const L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){ge(L,b,x);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function U(b,x){const L=i.get(b);if(b.version>0&&L.__version!==b.version){he(L,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}const se={[fl]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},me={[gn]:n.NEAREST,[Yv]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Te={[Qv]:n.NEVER,[sx]:n.ALWAYS,[ex]:n.LESS,[Yd]:n.LEQUAL,[tx]:n.EQUAL,[rx]:n.GEQUAL,[nx]:n.GREATER,[ix]:n.NOTEQUAL};function Ce(b,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===ta||x.magFilter===Ss||x.magFilter===wi||x.minFilter===En||x.minFilter===ta||x.minFilter===Ss||x.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,se[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,se[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,se[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==Ss&&x.minFilter!==wi||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function je(b,x){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const k=x.source;let J=d.get(k);J===void 0&&(J={},d.set(k,J));const q=G(x);if(q!==b.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[q].usedTimes++;const de=J[b.__cacheKey];de!==void 0&&(J[b.__cacheKey].usedTimes--,de.usedTimes===0&&E(x)),b.__cacheKey=q,b.__webglTexture=J[q].texture}return L}function He(b,x,L){return Math.floor(Math.floor(b/L)/x)}function Q(b,x,L,k){const q=b.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,L,k,x.data);else{q.sort((oe,ve)=>oe.start-ve.start);let de=0;for(let oe=1;oe<q.length;oe++){const ve=q[de],Ie=q[oe],Se=ve.start+ve.count,pe=He(Ie.start,x.width,4),ze=He(ve.start,x.width,4);Ie.start<=Se+1&&pe===ze&&He(Ie.start+Ie.count-1,x.width,4)===pe?ve.count=Math.max(ve.count,Ie.start+Ie.count-ve.start):(++de,q[de]=Ie)}q.length=de+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let oe=0,ve=q.length;oe<ve;oe++){const Ie=q[oe],Se=Math.floor(Ie.start/4),pe=Math.ceil(Ie.count/4),ze=Se%x.width,N=Math.floor(Se/x.width),fe=pe,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ze,N,fe,_e,L,k,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function ge(b,x,L){let k=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=n.TEXTURE_3D);const J=je(b,x),q=x.source;t.bindTexture(k,b.__webglTexture,n.TEXTURE0+L);const de=i.get(q);if(q.version!==de.__version||J===!0){t.activeTexture(n.TEXTURE0+L);const le=Ze.getPrimaries(Ze.workingColorSpace),xe=x.colorSpace===ti?null:Ze.getPrimaries(x.colorSpace),Ee=x.colorSpace===ti||le===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let oe=_(x.image,!1,r.maxTextureSize);oe=ae(x,oe);const ve=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type);let Se=M(x.internalFormat,ve,Ie,x.colorSpace,x.isVideoTexture);Ce(k,x);let pe;const ze=x.mipmaps,N=x.isVideoTexture!==!0,fe=de.__version===void 0||J===!0,_e=q.dataReady,Ae=w(x,oe);if(x.isDepthTexture)Se=y(x.format===ns,x.type),fe&&(N?t.texStorage2D(n.TEXTURE_2D,1,Se,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Se,oe.width,oe.height,0,ve,Ie,null));else if(x.isDataTexture)if(ze.length>0){N&&fe&&t.texStorage2D(n.TEXTURE_2D,Ae,Se,ze[0].width,ze[0].height);for(let ce=0,re=ze.length;ce<re;ce++)pe=ze[ce],N?_e&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,pe.width,pe.height,ve,Ie,pe.data):t.texImage2D(n.TEXTURE_2D,ce,Se,pe.width,pe.height,0,ve,Ie,pe.data);x.generateMipmaps=!1}else N?(fe&&t.texStorage2D(n.TEXTURE_2D,Ae,Se,oe.width,oe.height),_e&&Q(x,oe,ve,Ie)):t.texImage2D(n.TEXTURE_2D,0,Se,oe.width,oe.height,0,ve,Ie,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Se,ze[0].width,ze[0].height,oe.depth);for(let ce=0,re=ze.length;ce<re;ce++)if(pe=ze[ce],x.format!==dn)if(ve!==null)if(N){if(_e)if(x.layerUpdates.size>0){const Re=mf(pe.width,pe.height,x.format,x.type);for(const Ve of x.layerUpdates){const st=pe.data.subarray(Ve*Re/pe.data.BYTES_PER_ELEMENT,(Ve+1)*Re/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ve,pe.width,pe.height,1,ve,st)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,oe.depth,ve,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Se,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,oe.depth,ve,Ie,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Se,pe.width,pe.height,oe.depth,0,ve,Ie,pe.data)}else{N&&fe&&t.texStorage2D(n.TEXTURE_2D,Ae,Se,ze[0].width,ze[0].height);for(let ce=0,re=ze.length;ce<re;ce++)pe=ze[ce],x.format!==dn?ve!==null?N?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Se,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?_e&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,pe.width,pe.height,ve,Ie,pe.data):t.texImage2D(n.TEXTURE_2D,ce,Se,pe.width,pe.height,0,ve,Ie,pe.data)}else if(x.isDataArrayTexture)if(N){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Se,oe.width,oe.height,oe.depth),_e)if(x.layerUpdates.size>0){const ce=mf(oe.width,oe.height,x.format,x.type);for(const re of x.layerUpdates){const Re=oe.data.subarray(re*ce/oe.data.BYTES_PER_ELEMENT,(re+1)*ce/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,ve,Ie,Re)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ie,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,oe.width,oe.height,oe.depth,0,ve,Ie,oe.data);else if(x.isData3DTexture)N?(fe&&t.texStorage3D(n.TEXTURE_3D,Ae,Se,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Se,oe.width,oe.height,oe.depth,0,ve,Ie,oe.data);else if(x.isFramebufferTexture){if(fe)if(N)t.texStorage2D(n.TEXTURE_2D,Ae,Se,oe.width,oe.height);else{let ce=oe.width,re=oe.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,Se,ce,re,0,ve,Ie,null),ce>>=1,re>>=1}}else if(ze.length>0){if(N&&fe){const ce=ie(ze[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Se,ce.width,ce.height)}for(let ce=0,re=ze.length;ce<re;ce++)pe=ze[ce],N?_e&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ve,Ie,pe):t.texImage2D(n.TEXTURE_2D,ce,Se,ve,Ie,pe);x.generateMipmaps=!1}else if(N){if(fe){const ce=ie(oe);t.texStorage2D(n.TEXTURE_2D,Ae,Se,ce.width,ce.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,oe)}else t.texImage2D(n.TEXTURE_2D,0,Se,ve,Ie,oe);g(x)&&p(k),de.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function he(b,x,L){if(x.image.length!==6)return;const k=je(b,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const q=i.get(J);if(J.version!==q.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const de=Ze.getPrimaries(Ze.workingColorSpace),le=x.colorSpace===ti?null:Ze.getPrimaries(x.colorSpace),xe=x.colorSpace===ti||de===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!Ee&&!oe?ve[re]=_(x.image[re],!0,r.maxCubemapSize):ve[re]=oe?x.image[re].image:x.image[re],ve[re]=ae(x,ve[re]);const Ie=ve[0],Se=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),ze=M(x.internalFormat,Se,pe,x.colorSpace),N=x.isVideoTexture!==!0,fe=q.__version===void 0||k===!0,_e=J.dataReady;let Ae=w(x,Ie);Ce(n.TEXTURE_CUBE_MAP,x);let ce;if(Ee){N&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,ze,Ie.width,Ie.height);for(let re=0;re<6;re++){ce=ve[re].mipmaps;for(let Re=0;Re<ce.length;Re++){const Ve=ce[Re];x.format!==dn?Se!==null?N?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ve.width,Ve.height,Se,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,ze,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ve.width,Ve.height,Se,pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,ze,Ve.width,Ve.height,0,Se,pe,Ve.data)}}}else{if(ce=x.mipmaps,N&&fe){ce.length>0&&Ae++;const re=ie(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,ze,re.width,re.height)}for(let re=0;re<6;re++)if(oe){N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Se,pe,ve[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,ve[re].width,ve[re].height,0,Se,pe,ve[re].data);for(let Re=0;Re<ce.length;Re++){const st=ce[Re].image[re].image;N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,st.width,st.height,Se,pe,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,ze,st.width,st.height,0,Se,pe,st.data)}}else{N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se,pe,ve[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Se,pe,ve[re]);for(let Re=0;Re<ce.length;Re++){const Ve=ce[Re];N?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Se,pe,Ve.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,ze,Se,pe,Ve.image[re])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Pe(b,x,L,k,J,q){const de=s.convert(L.format,L.colorSpace),le=s.convert(L.type),xe=M(L.internalFormat,de,le,L.colorSpace),Ee=i.get(x),oe=i.get(L);if(oe.__renderTarget=x,!Ee.__hasExternalTextures){const ve=Math.max(1,x.width>>q),Ie=Math.max(1,x.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,q,xe,ve,Ie,x.depth,0,de,le,null):t.texImage2D(J,q,xe,ve,Ie,0,de,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),j(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,J,oe.__webglTexture,0,te(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,J,oe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const k=x.depthTexture,J=k&&k.isDepthTexture?k.type:null,q=y(x.stencilBuffer,J),de=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=te(x);j(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,q,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,b)}else{const k=x.textures;for(let J=0;J<k.length;J++){const q=k[J],de=s.convert(q.format,q.colorSpace),le=s.convert(q.type),xe=M(q.internalFormat,de,le,q.colorSpace),Ee=te(x);L&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,xe,x.width,x.height):j(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const J=k.__webglTexture,q=te(x);if(x.depthTexture.format===ts)j(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===ns)j(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function lt(b){const x=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const k=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",J)};k.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=k}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const k=b.texture.mipmaps;k&&k.length>0?Ne(x.__webglFramebuffer[0],b):Ne(x.__webglFramebuffer,b)}else if(L){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=n.createRenderbuffer(),Le(x.__webglDepthbuffer[k],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else{const k=b.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Le(x.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(b,x,L){const k=i.get(b);x!==void 0&&Pe(k.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&lt(b)}function v(b){const x=b.texture,L=i.get(b),k=i.get(x);b.addEventListener("dispose",D);const J=b.textures,q=b.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=x.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[le]=[];for(let xe=0;xe<x.mipmaps.length;xe++)L.__webglFramebuffer[le][xe]=n.createFramebuffer()}else L.__webglFramebuffer[le]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)L.__webglFramebuffer[le]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(de)for(let le=0,xe=J.length;le<xe;le++){const Ee=i.get(J[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&j(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const xe=J[le];L.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[le]);const Ee=s.convert(xe.format,xe.colorSpace),oe=s.convert(xe.type),ve=M(xe.internalFormat,Ee,oe,xe.colorSpace,b.isXRRenderTarget===!0),Ie=te(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,L.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Pe(L.__webglFramebuffer[le][xe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else Pe(L.__webglFramebuffer[le],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let le=0,xe=J.length;le<xe;le++){const Ee=J[le],oe=i.get(Ee);let ve=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),Ce(ve,Ee),Pe(L.__webglFramebuffer,b,Ee,n.COLOR_ATTACHMENT0+le,ve,0),g(Ee)&&p(ve)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,k.__webglTexture),Ce(le,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Pe(L.__webglFramebuffer[xe],b,x,n.COLOR_ATTACHMENT0,le,xe);else Pe(L.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,le,0);g(x)&&p(le),t.unbindTexture()}b.depthBuffer&&lt(b)}function I(b){const x=b.textures;for(let L=0,k=x.length;L<k;L++){const J=x[L];if(g(J)){const q=A(b),de=i.get(J).__webglTexture;t.bindTexture(q,de),p(q),t.unbindTexture()}}}const O=[],ee=[];function X(b){if(b.samples>0){if(j(b)===!1){const x=b.textures,L=b.width,k=b.height;let J=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),le=x.length>1;if(le)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const xe=b.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]);const oe=i.get(x[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,J,n.NEAREST),l===!0&&(O.length=0,ee.length=0,O.push(n.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(O.push(q),ee.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]);const oe=i.get(x[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function te(b){return Math.min(r.maxSamples,b.samples)}function j(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ae(b,x){const L=b.colorSpace,k=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Mr&&L!==ti&&(Ze.getTransfer(L)===it?(k!==dn||J!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),x}function ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=U,this.rebindTextures=qe,this.setupRenderTarget=v,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=j}function yT(n,e){function t(i,r=ti){let s;const o=Ze.getTransfer(r);if(i===Vn)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zd)return n.BYTE;if(i===kd)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===Tc)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===Gd)return n.ALPHA;if(i===Wd)return n.RGB;if(i===dn)return n.RGBA;if(i===ts)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Xd)return n.RED;if(i===wc)return n.RED_INTEGER;if(i===qd)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Js||i===Qs||i===eo||i===to)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===vl||i===xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_l||i===vl)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===Ml||i===Sl||i===El||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===Ul||i===Nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===no)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===Fl||i===Ol||i===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class fp extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ST=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ET{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nn({vertexShader:MT,fragmentShader:ST,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends Ar{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,m=null;const _=new ET,g={},p=t.getContextAttributes();let A=null,M=null;const y=[],w=[],R=new Je;let D=null;const P=new en;P.viewport=new mt;const E=new en;E.viewport=new mt;const S=[P,E],C=new Wx;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=y[Q];return ge===void 0&&(ge=new Ta,y[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=y[Q];return ge===void 0&&(ge=new Ta,y[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=y[Q];return ge===void 0&&(ge=new Ta,y[Q]=ge),ge.getHandSpace()};function G(Q){const ge=w.indexOf(Q.inputSource);if(ge===-1)return;const he=y[ge];he!==void 0&&(he.update(Q.inputSource,Q.frame,c||o),he.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",F);for(let Q=0;Q<y.length;Q++){const ge=w[Q];ge!==null&&(w[Q]=null,y[Q].disconnect(ge))}z=null,V=null,_.reset();for(const Q in g)delete g[Q];e.setRenderTarget(A),h=null,d=null,f=null,r=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Pe=null,Le=null;p.depth&&(Le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?ns:ts,Pe=p.stencil?es:Li);const Ne={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ii(d.textureWidth,d.textureHeight,{format:dn,type:Vn,depthTexture:new sp(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Ii(h.framebufferWidth,h.framebufferHeight,{format:dn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(Q){for(let ge=0;ge<Q.removed.length;ge++){const he=Q.removed[ge],Pe=w.indexOf(he);Pe>=0&&(w[Pe]=null,y[Pe].disconnect(he))}for(let ge=0;ge<Q.added.length;ge++){const he=Q.added[ge];let Pe=w.indexOf(he);if(Pe===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=w.length){w.push(he),Pe=Ne;break}else if(w[Ne]===null){w[Ne]=he,Pe=Ne;break}if(Pe===-1)break}const Le=y[Pe];Le&&Le.connect(he)}}const Z=new W,U=new W;function se(Q,ge,he){Z.setFromMatrixPosition(ge.matrixWorld),U.setFromMatrixPosition(he.matrixWorld);const Pe=Z.distanceTo(U),Le=ge.projectionMatrix.elements,Ne=he.projectionMatrix.elements,lt=Le[14]/(Le[10]-1),qe=Le[14]/(Le[10]+1),v=(Le[9]+1)/Le[5],I=(Le[9]-1)/Le[5],O=(Le[8]-1)/Le[0],ee=(Ne[8]+1)/Ne[0],X=lt*O,te=lt*ee,j=Pe/(-O+ee),ne=j*-O;if(ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ne),Q.translateZ(j),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ae=lt+j,ie=qe+j,b=X-ne,x=te+(Pe-ne),L=v*qe/ie*ae,k=I*qe/ie*ae;Q.projectionMatrix.makePerspective(b,x,L,k,ae,ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function me(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ge=Q.near,he=Q.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(he=_.depthFar)),C.near=E.near=P.near=ge,C.far=E.far=P.far=he,(z!==C.near||V!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,V=C.far),C.layers.mask=Q.layers.mask|6,P.layers.mask=C.layers.mask&3,E.layers.mask=C.layers.mask&5;const Pe=Q.parent,Le=C.cameras;me(C,Pe);for(let Ne=0;Ne<Le.length;Ne++)me(Le[Ne],Pe);Le.length===2?se(C,P,E):C.projectionMatrix.copy(P.projectionMatrix),Te(Q,C,Pe)};function Te(Q,ge,he){he===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(he.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(Q){return g[Q]};let Ce=null;function je(Q,ge){if(u=ge.getViewerPose(c||o),m=ge,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Pe=!1;he.length!==C.cameras.length&&(C.cameras.length=0,Pe=!0);for(let qe=0;qe<he.length;qe++){const v=he[qe];let I=null;if(h!==null)I=h.getViewport(v);else{const ee=f.getViewSubImage(d,v);I=ee.viewport,qe===0&&(e.setRenderTargetTextures(M,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(M))}let O=S[qe];O===void 0&&(O=new en,O.layers.enable(qe),O.viewport=new mt,S[qe]=O),O.matrix.fromArray(v.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(v.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(I.x,I.y,I.width,I.height),qe===0&&(C.matrix.copy(O.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Pe===!0&&C.cameras.push(O)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const qe=f.getDepthInformation(he[0]);qe&&qe.isValid&&qe.texture&&_.init(qe,r.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),f))for(let qe=0;qe<he.length;qe++){const v=he[qe].camera;if(v){let I=g[v];I||(I=new fp,g[v]=I);const O=f.getCameraImage(v);I.sourceTexture=O}}}for(let he=0;he<y.length;he++){const Pe=w[he],Le=y[he];Pe!==null&&Le!==void 0&&Le.update(Pe,ge,c||o)}Ce&&Ce(Q,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),m=null}const He=new op;He.setAnimationLoop(je),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}}const yi=new Gn,bT=new _t;function AT(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,tp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,A,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),M=A.envMap,y=A.envMapRotation;M&&(g.envMap.value=M,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(bT.makeRotationFromEuler(yi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wT(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const y=M.program;i.uniformBlockBinding(A,y)}function c(A,M){let y=r[A.id];y===void 0&&(m(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",g));const w=M.program;i.updateUBOMapping(A,w);const R=e.render.frame;s[A.id]!==R&&(d(A),s[A.id]=R)}function u(A){const M=f();A.__bindingPointIndex=M;const y=n.createBuffer(),w=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const M=r[A.id],y=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,D=y.length;R<D;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=P.length;E<S;E++){const C=P[E];if(h(C,R,E,w)===!0){const z=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let K=0;K<V.length;K++){const F=V[K],Z=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,z+G,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(A,M,y,w){const R=A.value,D=M+"_"+y;if(w[D]===void 0)return typeof R=="number"||typeof R=="boolean"?w[D]=R:w[D]=R.clone(),!0;{const P=w[D];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[D]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function m(A){const M=A.uniforms;let y=0;const w=16;for(let D=0,P=M.length;D<P;D++){const E=Array.isArray(M[D])?M[D]:[M[D]];for(let S=0,C=E.length;S<C;S++){const z=E[S],V=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=V.length;G<K;G++){const F=V[G],Z=_(F),U=y%w,se=U%Z.boundary,me=U+se;y+=se,me!==0&&w-me<Z.storage&&(y+=w-me),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}const R=y%w;return R>0&&(y+=w-R),A.__size=y,A.__cache={},this}function _(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function g(A){const M=A.target;M.removeEventListener("dispose",g);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class RT{constructor(e={}){const{canvas:t=ax(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const A=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Qt;let R=0,D=0,P=null,E=-1,S=null;const C=new mt,z=new mt;let V=null;const G=new Xe(0);let K=0,F=t.width,Z=t.height,U=1,se=null,me=null;const Te=new mt(0,0,F,Z),Ce=new mt(0,0,F,Z);let je=!1;const He=new rp;let Q=!1,ge=!1;const he=new _t,Pe=new W,Le=new mt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function qe(){return P===null?U:1}let v=i;function I(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ce,!1),v===null){const B="webgl2";if(v=I(B,T),v===null)throw I(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let O,ee,X,te,j,ne,ae,ie,b,x,L,k,J,q,de,le,xe,Ee,oe,ve,Ie,Se,pe,ze;function N(){O=new BS(v),O.init(),Se=new yT(v,O),ee=new DS(v,O,e,Se),X=new vT(v,O),ee.reversedDepthBuffer&&d&&X.buffers.depth.setReversed(!0),te=new kS(v),j=new sT,ne=new xT(v,O,X,j,ee,Se,te),ae=new IS(y),ie=new OS(y),b=new $x(v),pe=new CS(v,b),x=new HS(v,b,te,pe),L=new GS(v,x,b,te),oe=new VS(v,ee,ne),le=new LS(j),k=new rT(y,ae,ie,O,ee,pe,le),J=new AT(y,j),q=new aT,de=new dT(O),Ee=new RS(y,ae,ie,X,L,h,l),xe=new gT(y,L,ee),ze=new wT(v,te,ee,X),ve=new PS(v,O,te),Ie=new zS(v,O,te),te.programs=k.programs,y.capabilities=ee,y.extensions=O,y.properties=j,y.renderLists=q,y.shadowMap=xe,y.state=X,y.info=te}N();const fe=new TT(y,v);this.xr=fe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=O.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=O.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(F,Z,!1))},this.getSize=function(T){return T.set(F,Z)},this.setSize=function(T,B,$=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,Z=B,t.width=Math.floor(T*U),t.height=Math.floor(B*U),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(F*U,Z*U).floor()},this.setDrawingBufferSize=function(T,B,$){F=T,Z=B,U=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,B,$,Y){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,B,$,Y),X.viewport(C.copy(Te).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,B,$,Y){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,B,$,Y),X.scissor(z.copy(Ce).multiplyScalar(U).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){X.setScissorTest(je=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,$=!0){let Y=0;if(T){let H=!1;if(P!==null){const ue=P.texture.format;H=ue===Cc||ue===Rc||ue===wc}if(H){const ue=P.texture.type,Me=ue===Vn||ue===Li||ue===Qr||ue===es||ue===bc||ue===Ac,we=Ee.getClearColor(),be=Ee.getClearAlpha(),Fe=we.r,Oe=we.g,De=we.b;Me?(m[0]=Fe,m[1]=Oe,m[2]=De,m[3]=be,v.clearBufferuiv(v.COLOR,0,m)):(_[0]=Fe,_[1]=Oe,_[2]=De,_[3]=be,v.clearBufferiv(v.COLOR,0,_))}else Y|=v.COLOR_BUFFER_BIT}B&&(Y|=v.DEPTH_BUFFER_BIT),$&&(Y|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ee.dispose(),q.dispose(),de.dispose(),j.dispose(),ae.dispose(),ie.dispose(),L.dispose(),pe.dispose(),ze.dispose(),k.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",vn),fe.removeEventListener("sessionend",Bc),fi.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=te.autoReset,B=xe.enabled,$=xe.autoUpdate,Y=xe.needsUpdate,H=xe.type;N(),te.autoReset=T,xe.enabled=B,xe.autoUpdate=$,xe.needsUpdate=Y,xe.type=H}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const B=T.target;B.removeEventListener("dispose",re),Re(B)}function Re(T){Ve(T),j.remove(T)}function Ve(T){const B=j.get(T).programs;B!==void 0&&(B.forEach(function($){k.releaseProgram($)}),T.isShaderMaterial&&k.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,Y,H,ue){B===null&&(B=Ne);const Me=H.isMesh&&H.matrixWorld.determinant()<0,we=hp(T,B,$,Y,H);X.setMaterial(Y,Me);let be=$.index,Fe=1;if(Y.wireframe===!0){if(be=x.getWireframeAttribute($),be===void 0)return;Fe=2}const Oe=$.drawRange,De=$.attributes.position;let $e=Oe.start*Fe,nt=(Oe.start+Oe.count)*Fe;ue!==null&&($e=Math.max($e,ue.start*Fe),nt=Math.min(nt,(ue.start+ue.count)*Fe)),be!==null?($e=Math.max($e,0),nt=Math.min(nt,be.count)):De!=null&&($e=Math.max($e,0),nt=Math.min(nt,De.count));const dt=nt-$e;if(dt<0||dt===1/0)return;pe.setup(H,Y,we,$,be);let ct,rt=ve;if(be!==null&&(ct=b.get(be),rt=Ie,rt.setIndex(ct)),H.isMesh)Y.wireframe===!0?(X.setLineWidth(Y.wireframeLinewidth*qe()),rt.setMode(v.LINES)):rt.setMode(v.TRIANGLES);else if(H.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),X.setLineWidth(Ue*qe()),H.isLineSegments?rt.setMode(v.LINES):H.isLineLoop?rt.setMode(v.LINE_LOOP):rt.setMode(v.LINE_STRIP)}else H.isPoints?rt.setMode(v.POINTS):H.isSprite&&rt.setMode(v.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ue=H._multiDrawStarts,ft=H._multiDrawCounts,Ke=H._multiDrawCount,Gt=be?b.get(be).bytesPerElement:1,Ni=j.get(Y).currentProgram.getUniforms();for(let Wt=0;Wt<Ke;Wt++)Ni.setValue(v,"_gl_DrawID",Wt),rt.render(Ue[Wt]/Gt,ft[Wt])}else if(H.isInstancedMesh)rt.renderInstances($e,dt,H.count);else if($.isInstancedBufferGeometry){const Ue=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ft=Math.min($.instanceCount,Ue);rt.renderInstances($e,dt,ft)}else rt.render($e,dt)};function st(T,B,$){T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,ps(T,B,$),T.side=li,T.needsUpdate=!0,ps(T,B,$),T.side=un):ps(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),p=de.get($),p.init(B),M.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==$&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const we=ue[Me];st(we,$,H),Y.add(we)}else st(ue,$,H),Y.add(ue)}),p=M.pop(),Y},this.compileAsync=function(T,B,$=null){const Y=this.compile(T,B,$);return new Promise(H=>{function ue(){if(Y.forEach(function(Me){j.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){H(T);return}setTimeout(ue,10)}O.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let et=null;function wn(T){et&&et(T)}function vn(){fi.stop()}function Bc(){fi.start()}const fi=new op;fi.setAnimationLoop(wn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(T){et=T,fe.setAnimationLoop(T),T===null?fi.stop():fi.start()},fe.addEventListener("sessionstart",vn),fe.addEventListener("sessionend",Bc),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,P),p=de.get(T,M.length),p.init(B),M.push(p),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),He.setFromProjectionMatrix(he,Tn,B.reversedDepth),ge=this.localClippingEnabled,Q=le.init(this.clippingPlanes,ge),g=q.get(T,A.length),g.init(),A.push(g),fe.enabled===!0&&fe.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&Fo(ue,B,-1/0,y.sortObjects)}Fo(T,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(se,me),lt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,lt&&Ee.addToRenderList(g,T),this.info.render.frame++,Q===!0&&le.beginShadows();const $=p.state.shadowsArray;xe.render($,T,B),Q===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,H=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ue=B.cameras;if(H.length>0)for(let Me=0,we=ue.length;Me<we;Me++){const be=ue[Me];zc(Y,H,T,be)}lt&&Ee.render(T);for(let Me=0,we=ue.length;Me<we;Me++){const be=ue[Me];Hc(g,T,be,be.viewport)}}else H.length>0&&zc(Y,H,T,B),lt&&Ee.render(T),Hc(g,T,B);P!==null&&D===0&&(ne.updateMultisampleRenderTarget(P),ne.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,B),pe.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&le.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function Fo(T,B,$,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){Y&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Me=L.update(T),we=T.material;we.visible&&g.push(T,Me,we,$,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){const Me=L.update(T),we=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Le.copy(Me.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const be=Me.groups;for(let Fe=0,Oe=be.length;Fe<Oe;Fe++){const De=be[Fe],$e=we[De.materialIndex];$e&&$e.visible&&g.push(T,Me,$e,$,Le.z,De)}}else we.visible&&g.push(T,Me,we,$,Le.z,null)}}const ue=T.children;for(let Me=0,we=ue.length;Me<we;Me++)Fo(ue[Me],B,$,Y)}function Hc(T,B,$,Y){const H=T.opaque,ue=T.transmissive,Me=T.transparent;p.setupLightsView($),Q===!0&&le.setGlobalState(y.clippingPlanes,$),Y&&X.viewport(C.copy(Y)),H.length>0&&ds(H,B,$),ue.length>0&&ds(ue,B,$),Me.length>0&&ds(Me,B,$),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function zc(T,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ii(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?os:Vn,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ue=p.state.transmissionRenderTarget[Y.id],Me=Y.viewport||C;ue.setSize(Me.z*y.transmissionResolutionScale,Me.w*y.transmissionResolutionScale);const we=y.getRenderTarget(),be=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(G),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),lt&&Ee.render($);const Oe=y.toneMapping;y.toneMapping=si;const De=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Q===!0&&le.setGlobalState(y.clippingPlanes,Y),ds(T,$,Y),ne.updateMultisampleRenderTarget(ue),ne.updateRenderTargetMipmap(ue),O.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let nt=0,dt=B.length;nt<dt;nt++){const ct=B[nt],rt=ct.object,Ue=ct.geometry,ft=ct.material,Ke=ct.group;if(ft.side===un&&rt.layers.test(Y.layers)){const Gt=ft.side;ft.side=kt,ft.needsUpdate=!0,kc(rt,$,Y,Ue,ft,Ke),ft.side=Gt,ft.needsUpdate=!0,$e=!0}}$e===!0&&(ne.updateMultisampleRenderTarget(ue),ne.updateRenderTargetMipmap(ue))}y.setRenderTarget(we,be,Fe),y.setClearColor(G,K),De!==void 0&&(Y.viewport=De),y.toneMapping=Oe}function ds(T,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ue=T.length;H<ue;H++){const Me=T[H],we=Me.object,be=Me.geometry,Fe=Me.group;let Oe=Me.material;Oe.allowOverride===!0&&Y!==null&&(Oe=Y),we.layers.test($.layers)&&kc(we,B,$,be,Oe,Fe)}}function kc(T,B,$,Y,H,ue){T.onBeforeRender(y,B,$,Y,H,ue),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,B,$,Y,T,ue),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=kt,H.needsUpdate=!0,y.renderBufferDirect($,B,Y,H,T,ue),H.side=li,H.needsUpdate=!0,y.renderBufferDirect($,B,Y,H,T,ue),H.side=un):y.renderBufferDirect($,B,Y,H,T,ue),T.onAfterRender(y,B,$,Y,H,ue)}function ps(T,B,$){B.isScene!==!0&&(B=Ne);const Y=j.get(T),H=p.state.lights,ue=p.state.shadowsArray,Me=H.state.version,we=k.getParameters(T,H.state,ue,B,$),be=k.getProgramCacheKey(we);let Fe=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?ie:ae).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",re),Fe=new Map,Y.programs=Fe);let Oe=Fe.get(be);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===Me)return Gc(T,we),Oe}else we.uniforms=k.getUniforms(T),T.onBeforeCompile(we,y),Oe=k.acquireProgram(we,be),Fe.set(be,Oe),Y.uniforms=we.uniforms;const De=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=le.uniform),Gc(T,we),Y.needsLights=pp(T),Y.lightsStateVersion=Me,Y.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Vc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=io.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Gc(T,B){const $=j.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function hp(T,B,$,Y,H){B.isScene!==!0&&(B=Ne),ne.resetTextureUnits();const ue=B.fog,Me=Y.isMeshStandardMaterial?B.environment:null,we=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mr,be=(Y.isMeshStandardMaterial?ie:ae).get(Y.envMap||Me),Fe=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Oe=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,nt=!!$.morphAttributes.color;let dt=si;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=y.toneMapping);const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rt=ct!==void 0?ct.length:0,Ue=j.get(Y),ft=p.state.lights;if(Q===!0&&(ge===!0||T!==S)){const Pt=T===S&&Y.id===E;le.setState(Y,T,Pt)}let Ke=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==ft.state.version||Ue.outputColorSpace!==we||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==be||Y.fog===!0&&Ue.fog!==ue||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==Oe||Ue.morphTargets!==De||Ue.morphNormals!==$e||Ue.morphColors!==nt||Ue.toneMapping!==dt||Ue.morphTargetsCount!==rt)&&(Ke=!0):(Ke=!0,Ue.__version=Y.version);let Gt=Ue.currentProgram;Ke===!0&&(Gt=ps(Y,B,H));let Ni=!1,Wt=!1,Cr=!1;const ht=Gt.getUniforms(),jt=Ue.uniforms;if(X.useProgram(Gt.program)&&(Ni=!0,Wt=!0,Cr=!0),Y.id!==E&&(E=Y.id,Wt=!0),Ni||S!==T){X.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ht.setValue(v,"projectionMatrix",T.projectionMatrix),ht.setValue(v,"viewMatrix",T.matrixWorldInverse);const Ot=ht.map.cameraPosition;Ot!==void 0&&Ot.setValue(v,Pe.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&ht.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Wt=!0,Cr=!0)}if(H.isSkinnedMesh){ht.setOptional(v,H,"bindMatrix"),ht.setOptional(v,H,"bindMatrixInverse");const Pt=H.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ht.setValue(v,"boneTexture",Pt.boneTexture,ne))}H.isBatchedMesh&&(ht.setOptional(v,H,"batchingTexture"),ht.setValue(v,"batchingTexture",H._matricesTexture,ne),ht.setOptional(v,H,"batchingIdTexture"),ht.setValue(v,"batchingIdTexture",H._indirectTexture,ne),ht.setOptional(v,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(v,"batchingColorTexture",H._colorsTexture,ne));const Kt=$.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&oe.update(H,$,Gt),(Wt||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,ht.setValue(v,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(jt.envMap.value=be,jt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(jt.envMapIntensity.value=B.environmentIntensity),Wt&&(ht.setValue(v,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&dp(jt,Cr),ue&&Y.fog===!0&&J.refreshFogUniforms(jt,ue),J.refreshMaterialUniforms(jt,Y,U,Z,p.state.transmissionRenderTarget[T.id]),io.upload(v,Vc(Ue),jt,ne)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(io.upload(v,Vc(Ue),jt,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(v,"center",H.center),ht.setValue(v,"modelViewMatrix",H.modelViewMatrix),ht.setValue(v,"normalMatrix",H.normalMatrix),ht.setValue(v,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Pt=Y.uniformsGroups;for(let Ot=0,Oo=Pt.length;Ot<Oo;Ot++){const hi=Pt[Ot];ze.update(hi,Gt),ze.bind(hi,Gt)}}return Gt}function dp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function pp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,$){const Y=j.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=B,j.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const $=j.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const mp=v.createFramebuffer();this.setRenderTarget=function(T,B=0,$=0){P=T,R=B,D=$;let Y=!0,H=null,ue=!1,Me=!1;if(T){const be=j.get(T);if(be.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(v.FRAMEBUFFER,null),Y=!1;else if(be.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(be.__hasExternalTextures)ne.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&j.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Oe=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?H=Oe[B][$]:H=Oe[B],ue=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?H=j.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[$]:H=Oe,C.copy(T.viewport),z.copy(T.scissor),V=T.scissorTest}else C.copy(Te).multiplyScalar(U).floor(),z.copy(Ce).multiplyScalar(U).floor(),V=je;if($!==0&&(H=mp),X.bindFramebuffer(v.FRAMEBUFFER,H)&&Y&&X.drawBuffers(T,H),X.viewport(C),X.scissor(z),X.setScissorTest(V),ue){const be=j.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,$)}else if(Me){const be=B;for(let Fe=0;Fe<T.textures.length;Fe++){const Oe=j.get(T.textures[Fe]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,$,be)}}else if(T!==null&&$!==0){const be=j.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,be.__webglTexture,$)}E=-1},this.readRenderTargetPixels=function(T,B,$,Y,H,ue,Me,we=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){X.bindFramebuffer(v.FRAMEBUFFER,be);try{const Fe=T.textures[we],Oe=Fe.format,De=Fe.type;if(!ee.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-H&&(T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+we),v.readPixels(B,$,Y,H,Se.convert(Oe),Se.convert(De),ue))}finally{const Fe=P!==null?j.get(P).__webglFramebuffer:null;X.bindFramebuffer(v.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,Y,H,ue,Me,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-H){X.bindFramebuffer(v.FRAMEBUFFER,be);const Fe=T.textures[we],Oe=Fe.format,De=Fe.type;if(!ee.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,$e),v.bufferData(v.PIXEL_PACK_BUFFER,ue.byteLength,v.STREAM_READ),T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+we),v.readPixels(B,$,Y,H,Se.convert(Oe),Se.convert(De),0);const nt=P!==null?j.get(P).__webglFramebuffer:null;X.bindFramebuffer(v.FRAMEBUFFER,nt);const dt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await lx(v,dt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,$e),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,ue),v.deleteBuffer($e),v.deleteSync(dt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,$=0){const Y=Math.pow(2,-$),H=Math.floor(T.image.width*Y),ue=Math.floor(T.image.height*Y),Me=B!==null?B.x:0,we=B!==null?B.y:0;ne.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,$,0,0,Me,we,H,ue),X.unbindTexture()};const gp=v.createFramebuffer(),_p=v.createFramebuffer();this.copyTextureToTexture=function(T,B,$=null,Y=null,H=0,ue=null){ue===null&&(H!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=H,H=0):ue=0);let Me,we,be,Fe,Oe,De,$e,nt,dt;const ct=T.isCompressedTexture?T.mipmaps[ue]:T.image;if($!==null)Me=$.max.x-$.min.x,we=$.max.y-$.min.y,be=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,Oe=$.min.y,De=$.isBox3?$.min.z:0;else{const Kt=Math.pow(2,-H);Me=Math.floor(ct.width*Kt),we=Math.floor(ct.height*Kt),T.isDataArrayTexture?be=ct.depth:T.isData3DTexture?be=Math.floor(ct.depth*Kt):be=1,Fe=0,Oe=0,De=0}Y!==null?($e=Y.x,nt=Y.y,dt=Y.z):($e=0,nt=0,dt=0);const rt=Se.convert(B.format),Ue=Se.convert(B.type);let ft;B.isData3DTexture?(ne.setTexture3D(B,0),ft=v.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ne.setTexture2DArray(B,0),ft=v.TEXTURE_2D_ARRAY):(ne.setTexture2D(B,0),ft=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,B.unpackAlignment);const Ke=v.getParameter(v.UNPACK_ROW_LENGTH),Gt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ni=v.getParameter(v.UNPACK_SKIP_PIXELS),Wt=v.getParameter(v.UNPACK_SKIP_ROWS),Cr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ct.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ct.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Fe),v.pixelStorei(v.UNPACK_SKIP_ROWS,Oe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,De);const ht=T.isDataArrayTexture||T.isData3DTexture,jt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Kt=j.get(T),Pt=j.get(B),Ot=j.get(Kt.__renderTarget),Oo=j.get(Pt.__renderTarget);X.bindFramebuffer(v.READ_FRAMEBUFFER,Ot.__webglFramebuffer),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,Oo.__webglFramebuffer);for(let hi=0;hi<be;hi++)ht&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(T).__webglTexture,H,De+hi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(B).__webglTexture,ue,dt+hi)),v.blitFramebuffer(Fe,Oe,Me,we,$e,nt,Me,we,v.DEPTH_BUFFER_BIT,v.NEAREST);X.bindFramebuffer(v.READ_FRAMEBUFFER,null),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||j.has(T)){const Kt=j.get(T),Pt=j.get(B);X.bindFramebuffer(v.READ_FRAMEBUFFER,gp),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,_p);for(let Ot=0;Ot<be;Ot++)ht?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Kt.__webglTexture,H,De+Ot):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Kt.__webglTexture,H),jt?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Pt.__webglTexture,ue,dt+Ot):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Pt.__webglTexture,ue),H!==0?v.blitFramebuffer(Fe,Oe,Me,we,$e,nt,Me,we,v.COLOR_BUFFER_BIT,v.NEAREST):jt?v.copyTexSubImage3D(ft,ue,$e,nt,dt+Ot,Fe,Oe,Me,we):v.copyTexSubImage2D(ft,ue,$e,nt,Fe,Oe,Me,we);X.bindFramebuffer(v.READ_FRAMEBUFFER,null),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else jt?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(ft,ue,$e,nt,dt,Me,we,be,rt,Ue,ct.data):B.isCompressedArrayTexture?v.compressedTexSubImage3D(ft,ue,$e,nt,dt,Me,we,be,rt,ct.data):v.texSubImage3D(ft,ue,$e,nt,dt,Me,we,be,rt,Ue,ct):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,ue,$e,nt,Me,we,rt,Ue,ct.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,ue,$e,nt,ct.width,ct.height,rt,ct.data):v.texSubImage2D(v.TEXTURE_2D,ue,$e,nt,Me,we,rt,Ue,ct);v.pixelStorei(v.UNPACK_ROW_LENGTH,Ke),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Gt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ni),v.pixelStorei(v.UNPACK_SKIP_ROWS,Wt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Cr),ue===0&&B.generateMipmaps&&v.generateMipmap(ft),X.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$=null,Y=null,H=0){return dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,$,Y,H)},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){R=0,D=0,P=null,X.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const CT=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},PT={__name:"BackgroundAnimation",setup(n){const e=ii(null);let t,i,r,s,o,a,l,c,u,f;const d=[],h={gridExtent:1e3,starCount:8e3,maxMeteors:10,decorativeCount:10,fogDensity:.0015};function m(){t=new Ix,t.fog=new Ic(658964,.001),i=new en(60,window.innerWidth/window.innerHeight,.1,3e3),i.position.set(0,40,100),i.lookAt(0,0,-300),r=new RT({alpha:!0,antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(658964,1),e.value.appendChild(r.domElement),o=new Xx,_(),g(),p(),A(),y(),R()}function _(){l=new nn({uniforms:{time:{value:0},resolution:{value:new Je(window.innerWidth,window.innerHeight)},fogColor:{value:new Xe(658964)},fogDensity:{value:h.fogDensity}},vertexShader:`
      varying vec3 vPosition;

      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform vec2 resolution;
      uniform vec3 fogColor;
      uniform float fogDensity;

      varying vec3 vPosition;

      void main() {
        // 计算网格线
        float cellSize = 50.0;
        vec2 grid = abs(fract(vPosition.xz / cellSize + time * 0.4) - 0.5) / fwidth(vPosition.xz) * cellSize;
        float line = max(1.0 - min(grid.x, 1.0), 1.0 - min(grid.y, 1.0));

        // 根据距离调整亮度
        float dist = length(vPosition.xz);
        float brightness = 1.0 - smoothstep(0.0, 1000.0, dist);

        // 计算颜色
        vec3 lineColor = mix(vec3(0.0, 0.8, 1.0), vec3(1.0, 0.2, 0.8), sin(time * 0.2) * 0.5 + 0.5);
        vec3 color = lineColor * line * brightness;

        // 应用雾效果
        float fogFactor = 1.0 - exp(-fogDensity * dist);
        color = mix(color, fogColor, fogFactor);

        gl_FragColor = vec4(color, 1.0);
      }
    `,transparent:!0,side:un});const P=new Er(h.gridExtent*2,h.gridExtent*2,1,1);P.rotateX(-Math.PI/2),a=new tn(P,l),t.add(a)}function g(){const P=new sn,E=new Float32Array(h.starCount*3),S=new Float32Array(h.starCount),C=new Float32Array(h.starCount*3),z=new Float32Array(h.starCount);for(let G=0;G<h.starCount;G++){const K=G*3,F=2*Math.PI*Math.random(),Z=Math.acos(Math.random()),U=Math.pow(Math.random(),.5)*2500;E[K]=U*Math.sin(Z)*Math.cos(F),E[K+1]=Math.abs(U*Math.cos(Z))+50,E[K+2]=U*Math.sin(Z)*Math.sin(F),S[G]=Math.pow(Math.random(),1.5)*2.5+.8,z[G]=Math.pow(Math.random(),.8);const se=Math.random(),me=se>.8?new Xe(65535):se>.6?new Xe(16711935):se>.3?new Xe(16777130):new Xe(16777215);C[K]=me.r,C[K+1]=me.g,C[K+2]=me.b}P.setAttribute("position",new Nt(E,3)),P.setAttribute("size",new Nt(S,1)),P.setAttribute("color",new Nt(C,3)),P.setAttribute("brightness",new Nt(z,1));const V=new nn({uniforms:{time:{value:0}},vertexShader:`
      attribute float size;
      attribute vec3 color;
      attribute float brightness;
      varying vec3 vColor;
      varying float vBrightness;
      uniform float time;

      void main() {
        vColor = color;
        vBrightness = brightness;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float flickerSpeed = position.x * position.y * position.z * 0.0001;
        float flicker = sin(time * (1.0 + flickerSpeed) + flickerSpeed * 100.0) * 0.2 + 0.8;
        gl_PointSize = size * flicker * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vBrightness;

      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        float alpha = (1.0 - smoothstep(0.3, 0.5, dist)) * vBrightness;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,transparent:!0,blending:qr,depthWrite:!1});c=new zx(P,V),t.add(c)}function p(){const P=Math.random()*Math.PI*2,E=Math.random()*Math.PI*2,S=Math.random()*Math.PI*2,C=Math.random()*Math.PI*2,z=new Er(2e3,2e3),V=new nn({uniforms:{time:{value:0},phaseOffset1:{value:P},phaseOffset2:{value:E},phaseOffset3:{value:S},phaseOffset4:{value:C}},vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform float phaseOffset1;
      uniform float phaseOffset2;
      uniform float phaseOffset3;
      uniform float phaseOffset4;
      varying vec2 vUv;

      // 简单的噪声函数
      float noise(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // 改进的分形噪声函数
      float fbm(vec2 p) {
        float f = 0.0;
        float w = 0.5;
        for (int i = 0; i < 5; i++) {
          f += w * noise(p);
          p *= 2.0;
          w *= 0.5;
        }
        return f;
      }

      // 极光纹理函数
      float auroraPattern(vec2 p, float time) {
        float scale = 8.0;
        float t = time * 0.12;
        float result = 0.0;

        // 多层次的波浪叠加
        result += sin(p.x * scale * 1.0 + t) * 0.5 + 0.5;
        result += sin(p.x * scale * 0.5 + t * 1.1 + 1.0) * 0.25 + 0.25;
        result *= sin(p.x * scale * 0.25 - t * 0.8) * 0.5 + 0.5;

        // 垂直方向的扰动
        float vDisturb = sin(p.x * scale * 0.3 + t * 1.2) * sin(p.y * 2.0);
        result *= smoothstep(0.0, 1.0, vDisturb * 0.5 + 0.5);

        return result;
      }

      void main() {
        vec2 center = vUv - 0.5;
        float dist = length(center);

        // 创建更自然的径向渐变
        float radialGradient = smoothstep(0.5, 0.12, dist);

        // 更加活跃的脉动效果 - 添加随机相位
        float primaryPulse = (sin(time * 0.23 + phaseOffset1) * 0.5 + 0.5) * 0.18;
        float secondaryPulse = (sin(time * 0.41 + phaseOffset2 + 2.0) * 0.5 + 0.5) * 0.12;
        float tertiaryPulse = (sin(time * 0.11 + phaseOffset3 + 4.0) * 0.5 + 0.5) * 0.08;
        float fastPulse = (sin(time * 0.82 + phaseOffset4 + 1.5) * 0.5 + 0.5) * 0.05;

        // 激活的极光颜色系统 - 保持深沉基础但增加更多变化
        vec3 color1 = vec3(0.04, 0.14, 0.20); // 深青蓝色
        vec3 color2 = vec3(0.06, 0.18, 0.09); // 深青绿色
        vec3 color3 = vec3(0.12, 0.04, 0.20); // 深紫色
        vec3 color4 = vec3(0.16, 0.06, 0.02); // 深红橙色
        vec3 color5 = vec3(0.02, 0.15, 0.15); // 深青色
        vec3 color6 = vec3(0.15, 0.12, 0.02); // 深金色

        // 非线性颜色混合 - 更加活跃的变化 - 添加随机相位
        float t1 = sin(time * 0.13 + phaseOffset1) * 0.5 + 0.5;
        float t2 = sin(time * 0.19 + phaseOffset2 + 1.5) * 0.5 + 0.5;
        float t3 = sin(time * 0.09 + phaseOffset3 + 3.0) * 0.5 + 0.5;
        float t4 = sin(time * 0.15 + phaseOffset4 + 5.0) * 0.5 + 0.5;

        // 更复杂的颜色混合系统
        vec3 colorMix1 = mix(color1, color2, smoothstep(0.0, 1.0, t1));
        vec3 colorMix2 = mix(color3, color4, smoothstep(0.0, 1.0, t2));
        vec3 colorMix3 = mix(color5, color6, smoothstep(0.0, 1.0, t3));

        vec3 colorA = mix(colorMix1, colorMix2, smoothstep(0.2, 0.8, t2));
        vec3 colorB = mix(colorMix2, colorMix3, smoothstep(0.3, 0.7, t3));
        vec3 baseColor = mix(colorA, colorB, smoothstep(0.1, 0.9, t4));

        // 增强的分形噪声
        float noiseScale = 5.0 + sin(time * 0.2 + phaseOffset1) * 1.0;
        float noiseVal = fbm(center * noiseScale + time * 0.05);
        float noiseDetail = fbm(center * 12.0 - time * 0.03) * 0.3;
        noiseVal = noiseVal * 0.7 + noiseDetail;

        // 极光纹理
        float aurora = auroraPattern(center + vec2(0.0, time * 0.05), time + phaseOffset2);

        // 更复杂的颜色层次化
        vec3 color = baseColor;

        // 增加高光区域
        float highlights = smoothstep(0.5, 0.8, noiseVal) * (0.2 + primaryPulse * 0.3);
        color += vec3(0.08, 0.15, 0.1) * highlights * radialGradient;

        // 极光幕布效果
        float curtain = aurora * smoothstep(0.3, 0.0, dist);
        color += vec3(0.07, 0.1, 0.03) * curtain * (0.8 + fastPulse);

        // 颜色强化
        color = mix(color, color * 1.2, noiseVal * (0.4 + tertiaryPulse));

        // 计算透明度
        float alpha = radialGradient * (0.1 + primaryPulse + secondaryPulse + tertiaryPulse + fastPulse * 0.8);

        // 边缘处理
        alpha *= smoothstep(1.0, 0.5, dist);

        // 增加边缘的噪声变化
        alpha *= 0.7 + noiseVal * 0.4 + aurora * 0.2;

        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,blending:qr,depthWrite:!1,side:un});u=new tn(z,V),u.position.y=50,u.rotation.x=-Math.PI/2-.06,t.add(u)}function A(){f={meteors:[],lastMeteorTime:0,meteorCycle:0,createMeteor(){const P=Math.random()*Math.PI*2,E=300+Math.random()*500,S=100+Math.random()*300,C=Math.sin(P)*E,z=S,V=Math.cos(P)*E-300,G=20+Math.random()*100,K=Math.random()*.6-.3,F=-.7-Math.random()*.3,Z=Math.random()*.6-.3,U=[],se=12;for(let He=0;He<=se;He++){const Q=He/se;U.push(new W(C-K*G*Q,z-F*G*Q,V-Z*G*Q))}const me=new sn().setFromPoints(U),Te=new Float32Array(se+1);for(let He=0;He<=se;He++)Te[He]=1-He/se*.9;me.setAttribute("alpha",new Nt(Te,1));const Ce=new nn({uniforms:{color:{value:new Xe(M())},time:{value:0},globalOpacity:{value:1}},vertexShader:`
          attribute float alpha;
          varying float vAlpha;
          varying vec2 vUv;

          void main() {
            vAlpha = alpha;
            vUv = position.xy * 0.01;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float globalOpacity;
          uniform float time;
          varying float vAlpha;
          varying vec2 vUv;

          // 扰动函数
          float noise(vec2 p) {
            return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }

          void main() {
            // 尾迹渐变核心
            float coreGlow = smoothstep(0.0, 0.4, vAlpha) * vAlpha * 2.0;

            // 增加随机扰动效果，模拟大气阻力和微小颗粒
            float distortion = noise(vUv + time * 0.1) * 0.08;

            // 创建更复杂的发光效果
            vec3 baseGlow = mix(color, vec3(1.0), 0.4);

            // 添加颜色渐变 - 头部偏白，尾部保持原色
            vec3 finalColor = mix(baseGlow, vec3(1.0, 0.95, 0.85), coreGlow * 0.7);

            // 添加轻微的蓝色/青色边缘，模拟热效应
            finalColor += vec3(0.0, 0.2, 0.5) * (1.0 - vAlpha) * 0.2;

            // 计算最终不透明度，包含扰动效果
            float opacity = vAlpha * globalOpacity * (1.0 + distortion);

            // 增强尾迹边缘发光感
            float edgeGlow = smoothstep(0.4, 0.0, vAlpha) * 0.3;
            opacity += edgeGlow * globalOpacity;

            gl_FragColor = vec4(finalColor, opacity);
          }
        `,transparent:!0,blending:qr,depthWrite:!1}),je=new Bx(me,Ce);return je.userData={velocity:new W(K*1.2,F*1.2,Z*1.2),speed:1+Math.random()*2,life:1,decay:.002+Math.random()*.005,flickerRate:.2+Math.random()*.3},t.add(je),this.meteors.push(je),je},update(){const P=o.getElapsedTime();this.updateMeteorGeneration(P);for(let E=this.meteors.length-1;E>=0;E--){const S=this.meteors[E];S.position.x+=S.userData.velocity.x*S.userData.speed,S.position.y+=S.userData.velocity.y*S.userData.speed,S.position.z+=S.userData.velocity.z*S.userData.speed,S.userData.life-=S.userData.decay;const C=Math.sin(P*5*S.userData.flickerRate)*.1+.9;S.material.uniforms.globalOpacity.value=S.userData.life*C,S.userData.life<=0&&(t.remove(S),S.geometry.dispose(),S.material.dispose(),this.meteors.splice(E,1))}},updateMeteorGeneration(P){const E=P-this.lastMeteorTime;this.meteorCycle=Math.sin(P*.05)*.5+.5;let S=.005+this.meteorCycle*.01;E>5&&(S+=(E-5)*.01),this.meteors.length>=h.maxMeteors?S=0:this.meteors.length>h.maxMeteors*.7&&(S*=.5),Math.sin(P*.01)>.95&&this.meteors.length<h.maxMeteors*.8&&(S*=3),Math.random()<S&&(this.createMeteor(),this.lastMeteorTime=P)}}}function M(){const P=[16777215,13431551,16777164,16768443,14540287];return Math.random()<.6?P[0]:P[Math.floor(Math.random()*P.length)]}function y(){const P=[new Fc(3),new Nc(3),new Uc(3)],E=[{prob:.25,distance:[100,200],size:[2.2,3.2]},{prob:.65,distance:[150,290],size:[1.8,2.6]},{prob:1,distance:[250,430],size:[1.4,2.2]}];for(let S=0;S<h.decorativeCount;S++){const C=Math.random(),z=E.find(Q=>C<Q.prob),V=z.distance[0]+Math.random()*(z.distance[1]-z.distance[0]),G=z.size[0]+Math.random()*(z.size[1]-z.size[0]),K=Math.random()*Math.PI*2,F=Math.sin(K)*V,Z=Math.random()*180-20,U=Math.cos(K)*V-80,me=P[Math.floor(Math.random()*P.length)].clone().scale(G,G,G),Te=Math.sqrt(F*F+(U+100)*(U+100)),Ce=Math.max(.3,1-Te/500)*(.4+Math.random()*.4),je=new Lc({color:new Xe().setHSL(Math.random(),.7,.5),wireframe:!0,transparent:!0,opacity:Ce}),He=new tn(me,je);He.position.set(F,Z,U),He.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),He.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},initialPosition:He.position.clone(),floatOffset:Math.random()*Math.PI*2,floatAmplitude:{x:Math.random()*8+2,y:Math.random()*6+1,z:Math.random()*8+2},driftFreq:{x:Math.random()*.3+.2,y:Math.random()*.4+.3,z:Math.random()*.25+.15}},d.push(He),t.add(He)}}function w(){const P=o.getElapsedTime();[l,c?.material,u?.material].forEach(S=>S&&(S.uniforms.time.value=P)),f?.update(),d.forEach(S=>{const{rotationSpeed:C,initialPosition:z,floatOffset:V,floatAmplitude:G,driftFreq:K}=S.userData,F=P+V;S.rotation.x+=C.x,S.rotation.y+=C.y,S.rotation.z+=C.z,S.position.x=z.x+Math.sin(F*K.x)*G.x,S.position.y=z.y+Math.sin(F*K.y)*G.y,S.position.z=z.z+Math.cos(F*K.z)*G.z}),i.position.y=40+Math.sin(P*.3)*3,i.position.x=Math.sin(P*.1)*15,i.position.z=100+Math.cos(P*.07)*10}function R(){s=requestAnimationFrame(R),w(),r.render(t,i)}function D(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),l?.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)}return rc(()=>{m(),window.addEventListener("resize",D)}),sc(()=>{window.removeEventListener("resize",D),s&&cancelAnimationFrame(s);const P=(E,S)=>{E&&(t.remove(E),E.geometry.dispose(),S&&S.dispose())};P(a,l),P(c,c?.material),P(u,u?.material),f?.meteors.forEach(E=>{P(E,E.material)}),d.forEach(E=>{P(E,E.material)}),r&&(r.dispose(),e.value.removeChild(r.domElement))}),(P,E)=>(Mn(),uc("div",{ref_key:"container",ref:e,class:"background-animation"},null,512))}},DT=CT(PT,[["__scopeId","data-v-762b36dc"]]),LT={class:"container"},IT={__name:"app",setup(n){rc(()=>{const o=document.querySelectorAll(".typing-effect"),a=document.getElementById("cursor-line"),l=document.querySelector(".contact-command"),c=document.querySelector(".typing-command"),u=document.querySelector(".contact-items");e(l,c,u,a),t(o,l,c,u,a)});function e(o,a,l,c){o.style.opacity="0",a.textContent="",l.style.opacity="0",c.style.opacity="0"}function t(o,a,l,c,u){o.forEach(f=>{if(f.closest(".contact-items"))return;const d=Array.from(f.children);let h=0;d.forEach((m,_)=>{setTimeout(()=>{m.style.opacity="1",m.classList.add("typed"),_===d.length-1&&setTimeout(()=>i(a,l,c,u),400)},h),h+=800})})}function i(o,a,l,c){o.style.opacity="1",setTimeout(()=>{r(a,"contact --show",0,()=>{setTimeout(()=>s(l,c),400)})},200)}function r(o,a,l,c){l<a.length?(o.textContent+=a.charAt(l),setTimeout(()=>r(o,a,l+1,c),100)):c&&c()}function s(o,a){const l=Array.from(o.children);o.style.opacity="1",l.forEach((c,u)=>{c.style.opacity="0",c.style.transform="translateY(-10px)",setTimeout(()=>{c.style.opacity="1",c.style.transform="translateY(0)"},u*200)}),setTimeout(()=>{a.style.opacity="1"},l.length*200+300)}return(o,a)=>{const l=DT;return Mn(),uc("div",LT,[gt(l),a[0]||(a[0]=cg('<div class="terminal"><div class="terminal-header"><div class="terminal-buttons"><div class="terminal-button close"></div><div class="terminal-button minimize"></div><div class="terminal-button maximize"></div></div><div class="terminal-title"> user@starlong:~ </div></div><div class="terminal-content"><div class="command-line"><span class="prompt">$ </span><span class="command">cat about.me</span></div><div class="output"><div class="typing-effect"><h1>你好，世界！👋</h1><p>我是一名热爱编程的高级前端开发者。</p><p>专注于构建高性能的现代 Web 应用，热衷于新技术以及 AI 领域的探索。</p><p>正在使用 JavaScript/TypeScript, Vue, React, Node.js 🚀</p><p class="code-line"><span class="code-keyword">if </span><span class="code-parens">(</span><span class="code-object">coffee</span>.<span class="code-method">isEmpty</span><span class="code-parens">()</span><span class="code-parens">)</span><span class="code-parens"> { </span><span class="code-object">coffee</span>.<span class="code-method">refill</span><span class="code-parens">()</span><span class="code-parens"> }</span><span class="code-comment">// 来杯咖啡，聊聊代码</span><span class="code-emoji">☕</span></p></div></div><div class="command-line contact-command"><span class="prompt">$ </span><span class="command typing-command"></span></div><div class="output contact-info"><div class="contact-items typing-effect"><div class="contact-item"><a href="https://github.com/6starlong" target="_blank" class="contact-link"><svg height="18" width="18" viewBox="0 0 16 16" class="contact-icon"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg><span class="contact-text">GitHub</span></a></div><div class="contact-item"><a href="mailto:starlong.lu@gmail.com" class="contact-link"><svg height="18" width="18" viewBox="0 0 24 24" class="contact-icon"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><span class="contact-text">Email</span></a></div></div></div><div id="cursor-line" class="command-line"><span class="prompt">$ </span><span class="command blink">_</span></div></div></div>',1))])}}},UT={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error;t.stack&&t.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(t.statusCode||500),r=i===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,u=r?Zc(()=>Bu(()=>import("./D98rFPTH.js"),__vite__mapDeps([0,1,2]),import.meta.url)):Zc(()=>Bu(()=>import("./Ff-pyl2P.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(f,d)=>(Mn(),Qi(Et(u),Rp(nd({statusCode:Et(i),statusMessage:Et(s),description:Et(o),stack:Et(a)})),null,16))}},NT={key:0},zf={__name:"nuxt-root",setup(n){const e=()=>null,t=Ct(),i=t.deferHydration();if(t.isHydrating){const c=t.hooks.hookOnce("app:error",i);Di().beforeEach(c)}const r=!1;Uh(Rd,Cd()),t.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const s=vc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;wh((c,u,f)=>{if(t.hooks.callHook("vue:error",c,u,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return t.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(g0(c)&&(c.fatal||c.unhandled))return t.runWithContext(()=>p0(c)),!1});const l=!1;return(c,u)=>(Mn(),Qi(ng,{onResolve:Et(i)},{default:Mh(()=>[Et(o)?(Mn(),uc("div",NT)):Et(s)?(Mn(),Qi(Et(UT),{key:1,error:Et(s)},null,8,["error"])):Et(l)?(Mn(),Qi(Et(e),{key:2,context:Et(l)},null,8,["context"])):Et(r)?(Mn(),Qi(wm(Et(r)),{key:3})):(Mn(),Qi(Et(IT),{key:4}))]),_:1},8,["onResolve"]))}};let kf;{let n;kf=async function(){if(n)return n;const t=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),i=t?Xg(zf):Wg(zf),r=J_({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=xc(o)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)}),!t&&Au.id&&r.hook("app:suspense:resolve",()=>{document.getElementById(Au.id)?.remove()});try{await t0(r,_v)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(j_),await r.hooks.callHook("app:mounted",i),await _h()}catch(o){s(o)}return i},n=kf().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{gt as A,Mh as B,id as C,BT as D,oc as E,ur as F,Id as G,CT as _,Ct as a,Sc as b,zu as c,Sh as d,sc as e,HT as f,FT as g,yg as h,d0 as i,od as j,br as k,Lo as l,Jr as m,h0 as n,rc as o,pc as p,mc as q,ii as r,$c as s,OT as t,Di as u,uc as v,Ya as w,Mn as x,td as y,Dp as z};
