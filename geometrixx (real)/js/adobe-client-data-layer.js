(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="cloneDeep,cloneDeepWith,find,get,has,includes,isEmpty,isEqual,isNull,isPlainObject,isObject,merge,mergeWith,omit,reject" -p -o custom-lodash.js`
 */
;(function(){function t(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function e(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&false!==e(t[n],n,t););}function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,u=[];++n<r;){var c=t[n];e(c,n,t)&&(u[o++]=c)}return u}function r(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function o(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];
return t}function u(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return true;return false}function c(t,e,n){var r=t.length;for(n+=-1;++n<r;)if(e(t[n],n,t))return n;return-1}function i(t){return t!==t}function a(t){return function(e){return null==e?re:e[t]}}function f(t){return function(e){return t(e)}}function l(t,e){return r(e,function(e){return t[e]})}function s(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function b(t){var e=Object;return function(n){return t(e(n));
}}function h(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function p(){}function y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function g(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new _;++e<n;)this.add(t[e])}function v(t){
this.size=(this.__data__=new j(t)).size}function d(t,e){var n=xn(t),r=!n&&zn(t),o=!n&&!r&&En(t),u=!n&&!r&&!o&&Mn(t);if(n=n||r||o||u){for(var r=t.length,c=String,i=-1,a=Array(r);++i<r;)a[i]=c(i);r=a}else r=[];var f,c=r.length;for(f in t)!e&&!Ue.call(t,f)||n&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||vt(f,c))||r.push(f);return r}function A(t,e,n){(n===re||Ft(t[e],n))&&(n!==re||e in t)||k(t,e,n)}function w(t,e,n){var r=t[e];Ue.call(t,e)&&Ft(r,n)&&(n!==re||e in t)||k(t,e,n);
}function m(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1}function O(t,e){return t&&et(e,Jt(e),t)}function S(t,e){return t&&et(e,Kt(e),t)}function k(t,e,n){"__proto__"==e&&Qe?Qe(t,e,{configurable:true,enumerable:true,value:n,writable:true}):t[e]=n}function z(t,n,r,o,u,c){var i,a=1&n,f=2&n,l=4&n;if(r&&(i=u?r(t,o,u,c):r(t)),i!==re)return i;if(!Bt(t))return t;if(o=xn(t)){if(i=yt(t),!a)return tt(t,i)}else{var s=mn(t),b="[object Function]"==s||"[object GeneratorFunction]"==s;if(En(t))return X(t,a);
if("[object Object]"==s||"[object Arguments]"==s||b&&!u){if(i=f||b?{}:jt(t),!a)return f?rt(t,S(i,t)):nt(t,O(i,t))}else{if(!ge[s])return u?t:{};i=_t(t,s,a)}}if(c||(c=new v),u=c.get(t))return u;if(c.set(t,i),Fn(t))return t.forEach(function(e){i.add(z(e,n,r,e,t,c))}),i;if(In(t))return t.forEach(function(e,o){i.set(o,z(e,n,r,o,t,c))}),i;var f=l?f?ft:at:f?Kt:Jt,h=o?re:f(t);return e(h||t,function(e,o){h&&(o=e,e=t[o]),w(i,o,z(e,n,r,o,t,c))}),i}function x(t,e){var n=[];return gn(t,function(t,r,o){e(t,r,o)&&n.push(t);
}),n}function E(t,e,n,r,u){var c=-1,i=t.length;for(n||(n=gt),u||(u=[]);++c<i;){var a=t[c];0<e&&n(a)?1<e?E(a,e-1,n,r,u):o(u,a):r||(u[u.length]=a)}return u}function I(t,e){e=Q(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[Ot(e[n++])];return n&&n==r?t:re}function F(t,e,n){return e=e(t),xn(t)?e:o(e,n(t))}function M(t){if(null==t)t=t===re?"[object Undefined]":"[object Null]";else if(Ke&&Ke in Object(t)){var e=Ue.call(t,Ke),n=t[Ke];try{t[Ke]=re;var r=true}catch(t){}var o=Pe.call(t);r&&(e?t[Ke]=n:delete t[Ke]),
t=o}else t=Pe.call(t);return t}function $(t,e){return null!=t&&Ue.call(t,e)}function D(t,e){return null!=t&&e in Object(t)}function U(t){return Pt(t)&&"[object Arguments]"==M(t)}function B(t,e,n,r,o){if(t===e)e=true;else if(null==t||null==e||!Pt(t)&&!Pt(e))e=t!==t&&e!==e;else t:{var u=xn(t),c=xn(e),i=u?"[object Array]":mn(t),a=c?"[object Array]":mn(e),i="[object Arguments]"==i?"[object Object]":i,a="[object Arguments]"==a?"[object Object]":a,f="[object Object]"==i,c="[object Object]"==a;if((a=i==a)&&En(t)){
if(!En(e)){e=false;break t}u=true,f=false}if(a&&!f)o||(o=new v),e=u||Mn(t)?ct(t,e,n,r,B,o):it(t,e,i,n,r,B,o);else{if(!(1&n)&&(u=f&&Ue.call(t,"__wrapped__"),i=c&&Ue.call(e,"__wrapped__"),u||i)){t=u?t.value():t,e=i?e.value():e,o||(o=new v),e=B(t,e,n,r,o);break t}if(a)e:if(o||(o=new v),u=1&n,i=at(t),c=i.length,a=at(e).length,c==a||u){for(f=c;f--;){var l=i[f];if(!(u?l in e:Ue.call(e,l))){e=false;break e}}if((a=o.get(t))&&o.get(e))e=a==e;else{a=true,o.set(t,e),o.set(e,t);for(var s=u;++f<c;){var l=i[f],b=t[l],h=e[l];
if(r)var p=u?r(h,b,l,e,t,o):r(b,h,l,t,e,o);if(p===re?b!==h&&!B(b,h,n,r,o):!p){a=false;break}s||(s="constructor"==l)}a&&!s&&(n=t.constructor,r=e.constructor,n!=r&&"constructor"in t&&"constructor"in e&&!(typeof n=="function"&&n instanceof n&&typeof r=="function"&&r instanceof r)&&(a=false)),o.delete(t),o.delete(e),e=a}}else e=false;else e=false}}return e}function P(t){return Pt(t)&&"[object Map]"==mn(t)}function L(t,e){var n=e.length,r=n;if(null==t)return!r;for(t=Object(t);n--;){var o=e[n];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return false;
}for(;++n<r;){var o=e[n],u=o[0],c=t[u],i=o[1];if(o[2]){if(c===re&&!(u in t))return false}else if(o=new v,void 0===re?!B(i,c,3,void 0,o):1)return false}return true}function N(t){return Pt(t)&&"[object Set]"==mn(t)}function C(t){return Pt(t)&&Ut(t.length)&&!!_e[M(t)]}function T(t){return typeof t=="function"?t:null==t?Yt:typeof t=="object"?xn(t)?W(t[0],t[1]):R(t):te(t)}function V(t){if(!At(t))return Ze(t);var e,n=[];for(e in Object(t))Ue.call(t,e)&&"constructor"!=e&&n.push(e);return n}function R(t){var e=bt(t);
return 1==e.length&&e[0][2]?wt(e[0][0],e[0][1]):function(n){return n===t||L(n,e)}}function W(t,e){return dt(t)&&e===e&&!Bt(e)?wt(Ot(t),e):function(n){var r=Gt(n,t);return r===re&&r===e?Ht(n,t):B(e,r,3)}}function q(t,e,n,r,o){t!==e&&vn(e,function(u,c){if(Bt(u)){o||(o=new v);var i=o,a="__proto__"==c?re:t[c],f="__proto__"==c?re:e[c],l=i.get(f);if(l)A(t,c,l);else{var l=r?r(a,f,c+"",t,e,i):re,s=l===re;if(s){var b=xn(f),h=!b&&En(f),p=!b&&!h&&Mn(f),l=f;b||h||p?xn(a)?l=a:$t(a)?l=tt(a):h?(s=false,l=X(f,true)):p?(s=false,
l=Z(f,true)):l=[]:Lt(f)||zn(f)?(l=a,zn(a)?l=Wt(a):(!Bt(a)||n&&Dt(a))&&(l=jt(f))):s=false}s&&(i.set(f,l),q(l,f,n,r,i),i.delete(f)),A(t,c,l)}}else i=r?r("__proto__"==c?re:t[c],u,c+"",t,e,o):re,i===re&&(i=u),A(t,c,i)},Kt)}function G(t){return function(e){return I(e,t)}}function H(t){return On(mt(t,void 0,Yt),t+"")}function J(t){if(typeof t=="string")return t;if(xn(t))return r(t,J)+"";if(Ct(t))return jn?jn.call(t):"";var e=t+"";return"0"==e&&1/t==-oe?"-0":e}function K(t,e){e=Q(e,t);var n;if(2>e.length)n=t;else{
n=e;var r=0,o=-1,u=-1,c=n.length;for(0>r&&(r=-r>c?0:c+r),o=o>c?c:o,0>o&&(o+=c),c=r>o?0:o-r>>>0,r>>>=0,o=Array(c);++u<c;)o[u]=n[u+r];n=I(t,o)}t=n,null==t||delete t[Ot(xt(e))]}function Q(t,e){return xn(t)?t:dt(t,e)?[t]:Sn(qt(t))}function X(t,e){if(e)return t.slice();var n=t.length,n=Re?Re(n):new t.constructor(n);return t.copy(n),n}function Y(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e}function Z(t,e){return new t.constructor(e?Y(t.buffer):t.buffer,t.byteOffset,t.length);
}function tt(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function et(t,e,n){var r=!n;n||(n={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=re;i===re&&(i=t[c]),r?k(n,c,i):w(n,c,i)}return n}function nt(t,e){return et(t,An(t),e)}function rt(t,e){return et(t,wn(t),e)}function ot(t){return H(function(e,n){var r,o=-1,u=n.length,c=1<u?n[u-1]:re,i=2<u?n[2]:re,c=3<t.length&&typeof c=="function"?(u--,c):re;if(r=i){r=n[0];var a=n[1];if(Bt(i)){var f=typeof a;r=!!("number"==f?Mt(i)&&vt(a,i.length):"string"==f&&a in i)&&Ft(i[a],r);
}else r=false}for(r&&(c=3>u?re:c,u=1),e=Object(e);++o<u;)(i=n[o])&&t(e,i,o,c);return e})}function ut(t){return Lt(t)?re:t}function ct(t,e,n,r,o,c){var i=1&n,a=t.length,f=e.length;if(a!=f&&!(i&&f>a))return false;if((f=c.get(t))&&c.get(e))return f==e;var f=-1,l=true,s=2&n?new g:re;for(c.set(t,e),c.set(e,t);++f<a;){var b=t[f],h=e[f];if(r)var p=i?r(h,b,f,e,t,c):r(b,h,f,t,e,c);if(p!==re){if(p)continue;l=false;break}if(s){if(!u(e,function(t,e){if(!s.has(e)&&(b===t||o(b,t,n,r,c)))return s.push(e)})){l=false;break}}else if(b!==h&&!o(b,h,n,r,c)){
l=false;break}}return c.delete(t),c.delete(e),l}function it(t,e,n,r,o,u,c){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!u(new Ve(t),new Ve(e)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return Ft(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":
var i=s;case"[object Set]":if(i||(i=h),t.size!=e.size&&!(1&r))break;return(n=c.get(t))?n==e:(r|=2,c.set(t,e),e=ct(i(t),i(e),r,o,u,c),c.delete(t),e);case"[object Symbol]":if(yn)return yn.call(t)==yn.call(e)}return false}function at(t){return F(t,Jt,An)}function ft(t){return F(t,Kt,wn)}function lt(){var t=p.iteratee||Zt,t=t===Zt?T:t;return arguments.length?t(arguments[0],arguments[1]):t}function st(t,e){var n=t.__data__,r=typeof e;return("string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?n[typeof e=="string"?"string":"hash"]:n.map;
}function bt(t){for(var e=Jt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,o===o&&!Bt(o)]}return e}function ht(t,e){var n=null==t?re:t[e];return(!Bt(n)||Be&&Be in n?0:(Dt(n)?Ne:pe).test(St(n)))?n:re}function pt(t,e,n){e=Q(e,t);for(var r=-1,o=e.length,u=false;++r<o;){var c=Ot(e[r]);if(!(u=null!=t&&n(t,c)))break;t=t[c]}return u||++r!=o?u:(o=null==t?0:t.length,!!o&&Ut(o)&&vt(c,o)&&(xn(t)||zn(t)))}function yt(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Ue.call(t,"index")&&(n.index=t.index,
n.input=t.input),n}function jt(t){return typeof t.constructor!="function"||At(t)?{}:_n(We(t))}function _t(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return Y(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return e=n?Y(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":
case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Z(t,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return e=new t.constructor(t.source,se.exec(t)),e.lastIndex=t.lastIndex,e;case"[object Set]":return new r;case"[object Symbol]":return yn?Object(yn.call(t)):{}}}function gt(t){return xn(t)||zn(t)||!!(Je&&t&&t[Je])}function vt(t,e){var n=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==n||"symbol"!=n&&je.test(t))&&-1<t&&0==t%1&&t<e;
}function dt(t,e){if(xn(t))return false;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ct(t))||(ie.test(t)||!ce.test(t)||null!=e&&t in Object(e))}function At(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||Me)}function wt(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==re||t in Object(n)))}}function mt(e,n,r){return n=tn(n===re?e.length-1:n,0),function(){for(var o=arguments,u=-1,c=tn(o.length-n,0),i=Array(c);++u<c;)i[u]=o[n+u];for(u=-1,c=Array(n+1);++u<n;)c[u]=o[u];
return c[n]=r(i),t(e,this,c)}}function Ot(t){if(typeof t=="string"||Ct(t))return t;var e=t+"";return"0"==e&&1/t==-oe?"-0":e}function St(t){if(null!=t){try{return De.call(t)}catch(t){}return t+""}return""}function kt(t,e,n){var r=null==t?0:t.length;return r?(n=null==n?0:Vt(n),0>n&&(n=tn(r+n,0)),c(t,lt(e,3),n)):-1}function zt(t){return(null==t?0:t.length)?E(t,1):[]}function xt(t){var e=null==t?0:t.length;return e?t[e-1]:re}function Et(t,e){function n(){var r=arguments,o=e?e.apply(this,r):r[0],u=n.cache;
return u.has(o)?u.get(o):(r=t.apply(this,r),n.cache=u.set(o,r)||u,r)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");return n.cache=new(Et.Cache||_),n}function It(t){if(typeof t!="function")throw new TypeError("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Ft(t,e){
return t===e||t!==t&&e!==e}function Mt(t){return null!=t&&Ut(t.length)&&!Dt(t)}function $t(t){return Pt(t)&&Mt(t)}function Dt(t){return!!Bt(t)&&(t=M(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Ut(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function Bt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Pt(t){return null!=t&&typeof t=="object"}function Lt(t){return!(!Pt(t)||"[object Object]"!=M(t))&&(t=We(t),
null===t||(t=Ue.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&De.call(t)==Le))}function Nt(t){return typeof t=="string"||!xn(t)&&Pt(t)&&"[object String]"==M(t)}function Ct(t){return typeof t=="symbol"||Pt(t)&&"[object Symbol]"==M(t)}function Tt(t){return t?(t=Rt(t),t===oe||t===-oe?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function Vt(t){t=Tt(t);var e=t%1;return t===t?e?t-e:t:0}function Rt(t){if(typeof t=="number")return t;if(Ct(t))return ue;if(Bt(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,
t=Bt(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(fe,"");var e=he.test(t);return e||ye.test(t)?de(t.slice(2),e?2:8):be.test(t)?ue:+t}function Wt(t){return et(t,Kt(t))}function qt(t){return null==t?"":J(t)}function Gt(t,e,n){return t=null==t?re:I(t,e),t===re?n:t}function Ht(t,e){return null!=t&&pt(t,e,D)}function Jt(t){return Mt(t)?d(t):V(t)}function Kt(t){if(Mt(t))t=d(t,true);else if(Bt(t)){var e,n=At(t),r=[];for(e in t)("constructor"!=e||!n&&Ue.call(t,e))&&r.push(e);t=r}else{if(e=[],
null!=t)for(n in Object(t))e.push(n);t=e}return t}function Qt(t){return null==t?[]:l(t,Jt(t))}function Xt(t){return function(){return t}}function Yt(t){return t}function Zt(t){return T(typeof t=="function"?t:z(t,1))}function te(t){return dt(t)?a(Ot(t)):G(t)}function ee(){return[]}function ne(){return false}var re,oe=1/0,ue=NaN,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ie=/^\w*$/,ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fe=/^\s+|\s+$/g,le=/\\(\\)?/g,se=/\w*$/,be=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,je=/^(?:0|[1-9]\d*)$/,_e={};
_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=true,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=false;
var ge={};ge["[object Arguments]"]=ge["[object Array]"]=ge["[object ArrayBuffer]"]=ge["[object DataView]"]=ge["[object Boolean]"]=ge["[object Date]"]=ge["[object Float32Array]"]=ge["[object Float64Array]"]=ge["[object Int8Array]"]=ge["[object Int16Array]"]=ge["[object Int32Array]"]=ge["[object Map]"]=ge["[object Number]"]=ge["[object Object]"]=ge["[object RegExp]"]=ge["[object Set]"]=ge["[object String]"]=ge["[object Symbol]"]=ge["[object Uint8Array]"]=ge["[object Uint8ClampedArray]"]=ge["[object Uint16Array]"]=ge["[object Uint32Array]"]=true,
ge["[object Error]"]=ge["[object Function]"]=ge["[object WeakMap]"]=false;var ve,de=parseInt,Ae=typeof global=="object"&&global&&global.Object===Object&&global,we=typeof self=="object"&&self&&self.Object===Object&&self,me=Ae||we||Function("return this")(),Oe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Se=Oe&&typeof module=="object"&&module&&!module.nodeType&&module,ke=Se&&Se.exports===Oe,ze=ke&&Ae.process;t:{try{ve=ze&&ze.binding&&ze.binding("util");break t}catch(t){}ve=void 0}var xe=ve&&ve.isMap,Ee=ve&&ve.isSet,Ie=ve&&ve.isTypedArray,Fe=Array.prototype,Me=Object.prototype,$e=me["__core-js_shared__"],De=Function.prototype.toString,Ue=Me.hasOwnProperty,Be=function(){
var t=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Pe=Me.toString,Le=De.call(Object),Ne=RegExp("^"+De.call(Ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ce=ke?me.Buffer:re,Te=me.Symbol,Ve=me.Uint8Array,Re=Ce?Ce.a:re,We=b(Object.getPrototypeOf),qe=Object.create,Ge=Me.propertyIsEnumerable,He=Fe.splice,Je=Te?Te.isConcatSpreadable:re,Ke=Te?Te.toStringTag:re,Qe=function(){try{var t=ht(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),Xe=Object.getOwnPropertySymbols,Ye=Ce?Ce.isBuffer:re,Ze=b(Object.keys),tn=Math.max,en=Date.now,nn=ht(me,"DataView"),rn=ht(me,"Map"),on=ht(me,"Promise"),un=ht(me,"Set"),cn=ht(me,"WeakMap"),an=ht(Object,"create"),fn=St(nn),ln=St(rn),sn=St(on),bn=St(un),hn=St(cn),pn=Te?Te.prototype:re,yn=pn?pn.valueOf:re,jn=pn?pn.toString:re,_n=function(){function t(){}return function(e){return Bt(e)?qe?qe(e):(t.prototype=e,e=new t,t.prototype=re,e):{}}}();y.prototype.clear=function(){
this.__data__=an?an(null):{},this.size=0},y.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},y.prototype.get=function(t){var e=this.__data__;return an?(t=e[t],"__lodash_hash_undefined__"===t?re:t):Ue.call(e,t)?e[t]:re},y.prototype.has=function(t){var e=this.__data__;return an?e[t]!==re:Ue.call(e,t)},y.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=an&&e===re?"__lodash_hash_undefined__":e,this},j.prototype.clear=function(){
this.__data__=[],this.size=0},j.prototype.delete=function(t){var e=this.__data__;return t=m(e,t),!(0>t)&&(t==e.length-1?e.pop():He.call(e,t,1),--this.size,true)},j.prototype.get=function(t){var e=this.__data__;return t=m(e,t),0>t?re:e[t][1]},j.prototype.has=function(t){return-1<m(this.__data__,t)},j.prototype.set=function(t,e){var n=this.__data__,r=m(n,t);return 0>r?(++this.size,n.push([t,e])):n[r][1]=e,this},_.prototype.clear=function(){this.size=0,this.__data__={hash:new y,map:new(rn||j),string:new y
}},_.prototype.delete=function(t){return t=st(this,t).delete(t),this.size-=t?1:0,t},_.prototype.get=function(t){return st(this,t).get(t)},_.prototype.has=function(t){return st(this,t).has(t)},_.prototype.set=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},g.prototype.add=g.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},g.prototype.has=function(t){return this.__data__.has(t)},v.prototype.clear=function(){this.__data__=new j,
this.size=0},v.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},v.prototype.get=function(t){return this.__data__.get(t)},v.prototype.has=function(t){return this.__data__.has(t)},v.prototype.set=function(t,e){var n=this.__data__;if(n instanceof j){var r=n.__data__;if(!rn||199>r.length)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new _(r)}return n.set(t,e),this.size=n.size,this};var gn=function(t,e){return function(n,r){if(null==n)return n;if(!Mt(n))return t(n,r);
for(var o=n.length,u=e?o:-1,c=Object(n);(e?u--:++u<o)&&false!==r(c[u],u,c););return n}}(function(t,e){return t&&vn(t,e,Jt)}),vn=function(t){return function(e,n,r){var o=-1,u=Object(e);r=r(e);for(var c=r.length;c--;){var i=r[t?c:++o];if(false===n(u[i],i,u))break}return e}}(),dn=Qe?function(t,e){return Qe(t,"toString",{configurable:true,enumerable:false,value:Xt(e),writable:true})}:Yt,An=Xe?function(t){return null==t?[]:(t=Object(t),n(Xe(t),function(e){return Ge.call(t,e)}))}:ee,wn=Xe?function(t){for(var e=[];t;)o(e,An(t)),
t=We(t);return e}:ee,mn=M;(nn&&"[object DataView]"!=mn(new nn(new ArrayBuffer(1)))||rn&&"[object Map]"!=mn(new rn)||on&&"[object Promise]"!=mn(on.resolve())||un&&"[object Set]"!=mn(new un)||cn&&"[object WeakMap]"!=mn(new cn))&&(mn=function(t){var e=M(t);if(t=(t="[object Object]"==e?t.constructor:re)?St(t):"")switch(t){case fn:return"[object DataView]";case ln:return"[object Map]";case sn:return"[object Promise]";case bn:return"[object Set]";case hn:return"[object WeakMap]"}return e});var On=function(t){
var e=0,n=0;return function(){var r=en(),o=16-(r-n);if(n=r,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(re,arguments)}}(dn),Sn=function(t){t=Et(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ae,function(t,n,r,o){e.push(r?o.replace(le,"$1"):n||t)}),e}),kn=function(t){return function(e,n,r){var o=Object(e);if(!Mt(e)){var u=lt(n,3);e=Jt(e),n=function(t){return u(o[t],t,o)}}return n=t(e,n,r),
-1<n?o[u?e[n]:n]:re}}(kt);Et.Cache=_;var zn=U(function(){return arguments}())?U:function(t){return Pt(t)&&Ue.call(t,"callee")&&!Ge.call(t,"callee")},xn=Array.isArray,En=Ye||ne,In=xe?f(xe):P,Fn=Ee?f(Ee):N,Mn=Ie?f(Ie):C,$n=ot(function(t,e,n){q(t,e,n)}),Dn=ot(function(t,e,n,r){q(t,e,n,r)}),Un=function(t){return On(mt(t,re,zt),t+"")}(function(t,e){var n={};if(null==t)return n;var o=false;e=r(e,function(e){return e=Q(e,t),o||(o=1<e.length),e}),et(t,ft(t),n),o&&(n=z(n,7,ut));for(var u=e.length;u--;)K(n,e[u]);
return n});p.constant=Xt,p.flatten=zt,p.iteratee=Zt,p.keys=Jt,p.keysIn=Kt,p.memoize=Et,p.merge=$n,p.mergeWith=Dn,p.negate=It,p.omit=Un,p.property=te,p.reject=function(t,e){return(xn(t)?n:x)(t,It(lt(e,3)))},p.toPlainObject=Wt,p.values=Qt,p.cloneDeep=function(t){return z(t,5)},p.cloneDeepWith=function(t,e){return e=typeof e=="function"?e:re,z(t,5,e)},p.eq=Ft,p.find=kn,p.findIndex=kt,p.get=Gt,p.has=function(t,e){return null!=t&&pt(t,e,$)},p.hasIn=Ht,p.identity=Yt,p.includes=function(t,e,n,r){if(t=Mt(t)?t:Qt(t),
n=n&&!r?Vt(n):0,r=t.length,0>n&&(n=tn(r+n,0)),Nt(t))t=n<=r&&-1<t.indexOf(e,n);else{if(r=!!r){if(e===e)t:{for(n-=1,r=t.length;++n<r;)if(t[n]===e){t=n;break t}t=-1}else t=c(t,i,n);r=-1<t}t=r}return t},p.isArguments=zn,p.isArray=xn,p.isArrayLike=Mt,p.isArrayLikeObject=$t,p.isBuffer=En,p.isEmpty=function(t){if(null==t)return true;if(Mt(t)&&(xn(t)||typeof t=="string"||typeof t.splice=="function"||En(t)||Mn(t)||zn(t)))return!t.length;var e=mn(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(At(t))return!V(t).length;
for(var n in t)if(Ue.call(t,n))return false;return true},p.isEqual=function(t,e){return B(t,e)},p.isFunction=Dt,p.isLength=Ut,p.isMap=In,p.isNull=function(t){return null===t},p.isObject=Bt,p.isObjectLike=Pt,p.isPlainObject=Lt,p.isSet=Fn,p.isString=Nt,p.isSymbol=Ct,p.isTypedArray=Mn,p.last=xt,p.stubArray=ee,p.stubFalse=ne,p.toFinite=Tt,p.toInteger=Vt,p.toNumber=Rt,p.toString=qt,p.VERSION="4.17.5",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(me._=p, define(function(){return p})):Se?((Se.exports=p)._=p,
Oe._=p):me._=p}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const CONSTANTS = {
  /**
   * @typedef {String} ItemType
   **/

  /**
   * Enumeration of data layer item types.
   *
   * @enum {ItemType}
   * @readonly
   */
  itemType: {
    /** Represents an item of type data */
    DATA: 'data',
    /** Represents an item of type function */
    FCTN: 'fctn',
    /** Represents an item of type event */
    EVENT: 'event',
    /** Represents an item of type listener on */
    LISTENER_ON: 'listenerOn',
    /** Represents an item of type listener off */
    LISTENER_OFF: 'listenerOff'
  },

  /**
   * @typedef {String} DataLayerEvent
   **/

  /**
   * Enumeration of data layer events.
   *
   * @enum {DataLayerEvent}
   * @readonly
   */
  dataLayerEvent: {
    /** Represents an event triggered for any change in the data layer state */
    CHANGE: 'adobeDataLayer:change',
    /** Represents an event triggered for any event push to the data layer */
    EVENT: 'adobeDataLayer:event'
  },

  /**
   * @typedef {String} ListenerScope
   **/

  /**
   * Enumeration of listener scopes.
   *
   * @enum {ListenerScope}
   * @readonly
   */
  listenerScope: {
    /** Past events only */
    PAST: 'past',
    /** Future events only */
    FUTURE: 'future',
    /** All events, past and future */
    ALL: 'all'
  }
};

module.exports = CONSTANTS;

},{}],3:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const version = require('../version.json').version;
const cloneDeep = _.cloneDeep;
const get = _.get;

const Item = require('./item');
const Listener = require('./listener');
const ListenerManager = require('./listenerManager');
const CONSTANTS = require('./constants');
const customMerge = require('./utils/customMerge');

/**
 * Manager
 *
 * @class Manager
 * @classdesc Data Layer manager that augments the passed data layer array and handles eventing.
 * @param {Object} config The Data Layer manager configuration.
 */
module.exports = function(config) {
  const _config = config || {};
  let _dataLayer = [];
  let _preLoadedItems = [];
  let _state = {};
  let _previousStateCopy = {};
  let _listenerManager;

  const DataLayerManager = {
    getState: function() {
      return _state;
    },
    getDataLayer: function() {
      return _dataLayer;
    },
    getPreviousState: function() {
      return _previousStateCopy;
    }
  };

  _initialize();
  _augment();
  _processItems();

  /**
   * Initializes the data layer.
   *
   * @private
   */
  function _initialize() {
    if (!Array.isArray(_config.dataLayer)) {
      _config.dataLayer = [];
    }

    // Remove preloaded items from the data layer array and add those to the array of preloaded items
    _preLoadedItems = _config.dataLayer.splice(0, _config.dataLayer.length);
    _dataLayer = _config.dataLayer;
    _dataLayer.version = version;
    _state = {};
    _previousStateCopy = {};
    _listenerManager = ListenerManager(DataLayerManager);
  };

  /**
   * Updates the state with the item.
   *
   * @param {Item} item The item.
   * @private
   */
  function _updateState(item) {
    _previousStateCopy = cloneDeep(_state);
    _state = customMerge(_state, item.data);
  };

  /**
   * Augments the data layer Array Object, overriding: push() and adding getState(), addEventListener and removeEventListener.
   *
   * @private
   */
  function _augment() {
    /**
     * Pushes one or more items to the data layer.
     *
     * @param {...ItemConfig} var_args The items to add to the data layer.
     * @returns {Number} The length of the data layer following push.
     */
    _dataLayer.push = function(var_args) { /* eslint-disable-line camelcase */
      const pushArguments = arguments;
      const filteredArguments = arguments;

      Object.keys(pushArguments).forEach(function(key) {
        const itemConfig = pushArguments[key];
        const item = Item(itemConfig);

        if (!item.valid) {
          _logInvalidItemError(item);
          delete filteredArguments[key];
        }
        switch (item.type) {
          case CONSTANTS.itemType.DATA:
          case CONSTANTS.itemType.EVENT: {
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.FCTN: {
            delete filteredArguments[key];
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.LISTENER_ON:
          case CONSTANTS.itemType.LISTENER_OFF: {
            delete filteredArguments[key];
          }
        }
      });

      if (filteredArguments[0]) {
        return Array.prototype.push.apply(this, filteredArguments);
      }
    };

    /**
     * Returns a deep copy of the data layer state or of the object defined by the path.
     *
     * @param {Array|String} path The path of the property to get.
     * @returns {*} Returns a deep copy of the resolved value if a path is passed, a deep copy of the data layer state otherwise.
     */
    _dataLayer.getState = function(path) {
      if (path) {
        return get(cloneDeep(_state), path);
      }
      return cloneDeep(_state);
    };

    /**
     * Event listener callback.
     *
     * @callback eventListenerCallback A function that is called when the event of the specified type occurs.
     * @this {DataLayer}
     * @param {Object} event The event object pushed to the data layer that triggered the callback.
     * @param {Object} [beforeState] The state before the change caused by the event. Available only when the event
     * object has data that modify the state. If a path filter option has been provided when registering the event,
     * the object will only contain the data at the defined path.
     * @param {Object} [afterState] The state after the change caused by the event. Available only when the event
     * object has data that modify the state. If a path filter option has been provided when registering the event,
     * the object will only contain the data at the defined path.
     */

    /**
     * Sets up a function that will be called whenever the specified event is triggered.
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {eventListenerCallback} callback A function that is called when the event of the specified type occurs.
     * @param {Object} [options] Optional characteristics of the event listener.
     * @param {String} [options.path] The path in the state object to filter the listening to.
     * @param {('past'|'future'|'all')} [options.scope] The timing to filter the listening to:
     *      - {String} past The listener is triggered for past events only.
     *      - {String} future The listener is triggered for future events only.
     *      - {String} all The listener is triggered for both past and future events (default value).
     */
    _dataLayer.addEventListener = function(type, callback, options) {
      const eventListenerItem = Item({
        on: type,
        handler: callback,
        scope: options && options.scope,
        path: options && options.path
      });

      _processItem(eventListenerItem);
    };

    /**
     * Removes an event listener previously registered with addEventListener().
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {Function} [listener] Optional function that is to be removed.
     */
    _dataLayer.removeEventListener = function(type, listener) {
      const eventListenerItem = Item({
        off: type,
        handler: listener
      });

      _processItem(eventListenerItem);
    };
  };

  /**
   * Processes all items that already exist on the stack.
   *
   * @private
   */
  function _processItems() {
    for (let i = 0; i < _preLoadedItems.length; i++) {
      _dataLayer.push(_preLoadedItems[i]);
    }
  };

  /**
   * Processes an item pushed to the stack.
   *
   * @param {Item} item The item to process.
   * @private
   */
  function _processItem(item) {
    if (!item.valid) {
      _logInvalidItemError(item);
      return;
    }

    /**
     * Returns all items before the provided one.
     *
     * @param {Item} item The item.
     * @returns {Array<Item>} The items before.
     * @private
     */
    function _getBefore(item) {
      if (!(_dataLayer.length === 0 || item.index > _dataLayer.length - 1)) {
        return _dataLayer.slice(0, item.index).map(itemConfig => Item(itemConfig));
      }
      return [];
    }

    const typeProcessors = {
      data: function(item) {
        _updateState(item);
        _listenerManager.triggerListeners(item);
      },
      fctn: function(item) {
        item.config.call(_dataLayer, _dataLayer);
      },
      event: function(item) {
        if (item.data) {
          _updateState(item);
        }
        _listenerManager.triggerListeners(item);
      },
      listenerOn: function(item) {
        const listener = Listener(item);
        switch (listener.scope) {
          case CONSTANTS.listenerScope.PAST: {
            for (const registeredItem of _getBefore(item)) {
              _listenerManager.triggerListener(listener, registeredItem);
            }
            break;
          }
          case CONSTANTS.listenerScope.FUTURE: {
            _listenerManager.register(listener);
            break;
          }
          case CONSTANTS.listenerScope.ALL: {
            const registered = _listenerManager.register(listener);
            if (registered) {
              for (const registeredItem of _getBefore(item)) {
                _listenerManager.triggerListener(listener, registeredItem);
              }
            }
          }
        }
      },
      listenerOff: function(item) {
        _listenerManager.unregister(Listener(item));
      }
    };

    typeProcessors[item.type](item);
  };

  /**
   * Logs error for invalid item pushed to the data layer.
   *
   * @param {Item} item The invalid item.
   * @private
   */
  function _logInvalidItemError(item) {
    const message = 'The following item cannot be handled by the data layer ' +
      'because it does not have a valid format: ' +
      JSON.stringify(item.config);
    console.error(message);
  };

  return DataLayerManager;
};

},{"../custom-lodash":1,"../version.json":14,"./constants":2,"./item":5,"./listener":7,"./listenerManager":8,"./utils/customMerge":10}],4:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const DataLayerManager = require('./dataLayerManager');

/**
 * Data Layer.
 *
 * @type {Object}
 */
const DataLayer = {
  Manager: DataLayerManager
};

window.adobeDataLayer = window.adobeDataLayer || [];

DataLayer.Manager({
  dataLayer: window.adobeDataLayer
});

/**
 * @typedef  {Object} ListenerOnConfig
 * @property {String} on Name of the event to bind to.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} handler Handler to execute when the bound event is triggered.
 */

/**
 * @typedef  {Object} ListenerOffConfig
 * @property {String} off Name of the event to unbind.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} [handler] Handler for a previously attached event to unbind.
 */

/**
 * @typedef {Object} DataConfig
 * @property {Object} data Data to be updated in the state.
 */

/**
 * @typedef {Object} EventConfig
 * @property {String} event Name of the event.
 * @property {Object} [eventInfo] Additional information to pass to the event handler.
 * @property {DataConfig.data} [data] Data to be updated in the state.
 */

/**
 * @typedef {DataConfig | EventConfig | ListenerOnConfig | ListenerOffConfig} ItemConfig
 */

/**
 * Triggered when there is change in the data layer state.
 *
 * @event DataLayerEvent.CHANGE
 * @type {Object}
 * @property {Object} data Data pushed that caused a change in the data layer state.
 */

/**
 * Triggered when an event is pushed to the data layer.
 *
 * @event DataLayerEvent.EVENT
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

/**
 * Triggered when an arbitrary event is pushed to the data layer.
 *
 * @event <custom>
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

module.exports = DataLayer;

},{"./dataLayerManager":3}],5:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const isPlainObject = _.isPlainObject;
const isEmpty = _.isEmpty;
const omit = _.omit;
const find = _.find;

const dataMatchesContraints = require('./utils/dataMatchesContraints');
const ITEM_CONSTRAINTS = require('./itemConstraints');
const CONSTANTS = require('./constants');

/**
 * Constructs a data layer item.
 *
 * @param {ItemConfig} itemConfig The data layer item configuration.
 * @param {Number} index The item index in the array of existing items.
 */

module.exports = function(itemConfig, index) {
  const _config = itemConfig;
  const _index = index;
  const _type = getType();
  const _data = getData();
  const _valid = !!_type;

  function getType() {
    return find(Object.keys(ITEM_CONSTRAINTS), key => dataMatchesContraints(_config, ITEM_CONSTRAINTS[key])) ||
      (typeof _config === 'function' && CONSTANTS.itemType.FCTN) ||
      (isPlainObject(_config) && CONSTANTS.itemType.DATA);
  }

  function getData() {
    const data = omit(_config, Object.keys(ITEM_CONSTRAINTS.event));
    if (!isEmpty(data)) {
      return data;
    }
  }

  return {
    /**
     * Returns the item configuration.
     *
     * @returns {ItemConfig} The item configuration.
     */
    config: _config,

    /**
     * Returns the item type.
     *
     * @returns {itemType} The item type.
     */
    type: _type,

    /**
     * Returns the item data.
     *
     * @returns {DataConfig} The item data.
     */
    data: _data,

    /**
     * Indicates whether the item is valid.
     *
     * @returns {Boolean} true if the item is valid, false otherwise.
     */
    valid: _valid,

    /**
     * Returns the index of the item in the array of existing items (added with the standard Array.prototype.push())
     *
     * @returns {Number} The index of the item in the array of existing items if it exists, -1 otherwise.
     */
    index: _index
  };
};

},{"../custom-lodash":1,"./constants":2,"./itemConstraints":6,"./utils/dataMatchesContraints":11}],6:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Constraints for each type of the item configuration.
 */

const itemConstraints = {
  event: {
    event: {
      type: 'string'
    },
    eventInfo: {
      optional: true
    }
  },
  listenerOn: {
    on: {
      type: 'string'
    },
    handler: {
      type: 'function'
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  },
  listenerOff: {
    off: {
      type: 'string'
    },
    handler: {
      type: 'function',
      optional: true
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  }
};

module.exports = itemConstraints;

},{}],7:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const CONSTANTS = require('./constants');

/**
 * Constructs a data layer listener.
 *
 * @param {Item} item The item from which to construct the listener.
 */

module.exports = function(item) {
  const _event = item.config.on || item.config.off;
  const _handler = item.config.handler || null;
  const _scope = item.config.scope || (item.config.on && CONSTANTS.listenerScope.ALL) || null;
  const _path = item.config.path || null;

  return {
    /**
     * Returns the listener event name.
     *
     * @returns {String} The listener event name.
     */
    event: _event,

    /**
     * Returns the listener handler.
     *
     * @returns {(Function|null)} The listener handler.
     */
    handler: _handler,

    /**
     * Returns the listener scope.
     *
     * @returns {(String|null)} The listener scope.
     */
    scope: _scope,

    /**
     * Returns the listener path.
     *
     * @returns {(String|null)} The listener path.
     */
    path: _path
  };
};

},{"./constants":2}],8:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const cloneDeep = _.cloneDeep;
const get = _.get;

const constants = require('./constants');
const listenerMatch = require('./utils/listenerMatch');
const indexOfListener = require('./utils/indexOfListener');

/**
 * Creates a listener manager.
 *
 * @param {Manager} dataLayerManager The data layer manager.
 * @returns {ListenerManager} A listener manager.
 */
module.exports = function(dataLayerManager) {
  const _listeners = {};
  const _dataLayerManager = dataLayerManager;

  /**
   * Find index of listener in listeners object.
   */
  const _indexOfListener = indexOfListener.bind(null, _listeners);

  const ListenerManager = {
    /**
     * Registers a listener.
     *
     * @function
     * @param {Listener} listener The listener to register.
     * @returns {Boolean} true if the listener was registered, false otherwise.
     */
    register: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (_indexOfListener(listener) === -1) {
          _listeners[listener.event].push(listener);
          return true;
        }
      } else {
        _listeners[listener.event] = [listener];
        return true;
      }
      return false;
    },
    /**
     * Unregisters a listener.
     *
     * @function
     * @param {Listener} listener The listener to unregister.
     */
    unregister: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (!(listener.handler || listener.scope || listener.path)) {
          _listeners[event] = [];
        } else {
          const index = _indexOfListener(listener);
          if (index > -1) {
            _listeners[event].splice(index, 1);
          }
        }
      }
    },
    /**
     * Triggers listeners related to the passed item.
     *
     * @function
     * @param {Item} item Item to trigger listener for.
     */
    triggerListeners: function(item) {
      const triggeredEvents = _getTriggeredEvents(item);
      triggeredEvents.forEach(function(event) {
        if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
          for (const listener of _listeners[event]) {
            _callHandler(listener, item, false);
          }
        }
      });
    },
    /**
     * Triggers a single listener on the passed item.
     *
     * @function
     * @param {Listener} listener Listener to call.
     * @param {Item} item Item to call the listener with.
     */
    triggerListener: function(listener, item) {
      _callHandler(listener, item, true);
    }
  };

  /**
   * Calls the listener handler on the item if a match is found.
   *
   * @param {Listener} listener The listener.
   * @param {Item} item The item.
   * @param {Boolean} isPastItem Flag indicating whether the item was registered before the listener.
   * @private
   */
  function _callHandler(listener, item, isPastItem) {
    if (listenerMatch(listener, item)) {
      const callbackArgs = [cloneDeep(item.config)];

      if (item.data) {
        if (listener.path) {
          const oldValue = get(_dataLayerManager.getPreviousState(), listener.path);
          const newValue = get(cloneDeep(item.data), listener.path);
          callbackArgs.push(oldValue, newValue);
        } else if (!isPastItem) {
          const oldState = _dataLayerManager.getPreviousState();
          const newState = cloneDeep(_dataLayerManager.getState());
          callbackArgs.push(oldState, newState);
        }
      }

      listener.handler.apply(_dataLayerManager.getDataLayer(), callbackArgs);
    }
  }

  /**
   * Returns the names of the events that are triggered for this item.
   *
   * @param {Item} item The item.
   * @returns {Array<String>} The names of the events that are triggered for this item.
   * @private
   */
  function _getTriggeredEvents(item) {
    const triggeredEvents = [];

    switch (item.type) {
      case constants.itemType.DATA: {
        triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        break;
      }
      case constants.itemType.EVENT: {
        triggeredEvents.push(constants.dataLayerEvent.EVENT);
        if (item.data) triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        if (item.config.event !== constants.dataLayerEvent.CHANGE) {
          triggeredEvents.push(item.config.event);
        }
        break;
      }
    }
    return triggeredEvents;
  }

  return ListenerManager;
};

},{"../custom-lodash":1,"./constants":2,"./utils/indexOfListener":12,"./utils/listenerMatch":13}],9:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const has = _.has;
const get = _.get;

/**
  * Checks if the object contains an ancestor that is set to null or undefined.
  *
  * @param {Object} object The object to check.
  * @param {String} path The path to check.
  * @returns {Boolean} true if the object contains an ancestor that is set to null or undefined, false otherwise.
  * @private
  */
module.exports = function(object, path) {
  let ancestorPath = path.substring(0, path.lastIndexOf('.'));
  while (ancestorPath) {
    if (has(object, ancestorPath)) {
      const ancestorValue = get(object, ancestorPath);
      if (ancestorValue === null || ancestorValue === undefined) {
        return true;
      }
    }
    ancestorPath = ancestorPath.substring(0, ancestorPath.lastIndexOf('.'));
  }

  return false;
};

},{"../../custom-lodash":1}],10:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const cloneDeepWith = _.cloneDeepWith;
const isObject = _.isObject;
const isArray = _.isArray;
const reject = _.reject;
const mergeWith = _.mergeWith;
const isNull = _.isNull;

/**
 * Merges the source into the object and sets objects as 'undefined' if they are 'undefined' in the source object.
 *
 * @param {Object} object The object into which to merge.
 * @param {Object} source The source to merge with.
 * @returns {Object} The object into which source was merged in.
 */
module.exports = function(object, source) {
  const makeOmittingCloneDeepCustomizer = function(predicate) {
    return function omittingCloneDeepCustomizer(value, key, object, stack) {
      if (isObject(value)) {
        if (isArray(value)) {
          return reject(value, predicate).map(item => cloneDeepWith(item, omittingCloneDeepCustomizer));
        }

        const clone = {};
        for (const subKey of Object.keys(value)) {
          if (!predicate(value[subKey])) {
            clone[subKey] = cloneDeepWith(value[subKey], omittingCloneDeepCustomizer);
          }
        }
        return clone;
      }
      return undefined;
    };
  };

  const customizer = function(objValue, srcValue, key, object) {
    if (typeof srcValue === 'undefined' || srcValue === null) {
      return null;
    }
  };

  const omitDeep = function(value, predicate = (val) => !val) {
    return cloneDeepWith(value, makeOmittingCloneDeepCustomizer(predicate));
  };

  mergeWith(object, source, customizer);

  // Remove null or undefined objects
  object = omitDeep(object, isNull);

  return object;
};

},{"../../custom-lodash":1}],11:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const find = _.find;
const includes = _.includes;

module.exports = function(data, constraints) {
  // Go through all constraints and find one which does not match the data
  const foundObjection = find(Object.keys(constraints), key => {
    const type = constraints[key].type;
    const supportedValues = key && constraints[key].values;
    const mandatory = !constraints[key].optional;
    const value = data[key];
    const valueType = typeof value;
    const incorrectType = type && valueType !== type;
    const noMatchForSupportedValues = supportedValues && !includes(supportedValues, value);
    if (mandatory) {
      return !value || incorrectType || noMatchForSupportedValues;
    } else {
      return value && (incorrectType || noMatchForSupportedValues);
    }
  });
  // If no objections found then data matches contraints
  return typeof foundObjection === 'undefined';
};

},{"../../custom-lodash":1}],12:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const isEqual = _.isEqual;

module.exports = function(listeners, listener) {
  const event = listener.event;

  if (Object.prototype.hasOwnProperty.call(listeners, event)) {
    for (const [index, registeredListener] of listeners[event].entries()) {
      if (isEqual(registeredListener.handler, listener.handler)) {
        return index;
      }
    }
  }
  return -1;
};

},{"../../custom-lodash":1}],13:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const has = _.has;

const CONSTANTS = require('../constants');
const ancestorRemoved = require('./ancestorRemoved');

/**
 * Checks if the listener matches the item.
 *
 * @param {Listener} listener The listener.
 * @param {Item} item The item.
 * @returns {Boolean} true if listener matches the item, false otherwise.
 */
function listenerMatch(listener, item) {
  const event = listener.event;
  const itemConfig = item.config;
  let matches = false;

  if (item.type === CONSTANTS.itemType.DATA) {
    if (event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  } else if (item.type === CONSTANTS.itemType.EVENT) {
    if (event === CONSTANTS.dataLayerEvent.EVENT || event === itemConfig.event) {
      matches = selectorMatches(listener, item);
    }
    if (item.data && event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  }

  return matches;
}

/**
 * Checks if a listener has a selector that points to an object in the data payload of an item.
 *
 * @param {Listener} listener The listener to extract the selector from.
 * @param {Item} item The item.
 * @returns {Boolean} true if a selector is not provided or if the given selector is matching, false otherwise.
 * @private
 */
function selectorMatches(listener, item) {
  if (item.data && listener.path) {
    return has(item.data, listener.path) || ancestorRemoved(item.data, listener.path);
  }

  return true;
}

module.exports = listenerMatch;

},{"../../custom-lodash":1,"../constants":2,"./ancestorRemoved":9}],14:[function(require,module,exports){
module.exports={
  "version": "1.1.4"
}

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjdXN0b20tbG9kYXNoLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9kYXRhTGF5ZXJNYW5hZ2VyLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL2l0ZW0uanMiLCJzcmMvaXRlbUNvbnN0cmFpbnRzLmpzIiwic3JjL2xpc3RlbmVyLmpzIiwic3JjL2xpc3RlbmVyTWFuYWdlci5qcyIsInNyYy91dGlscy9hbmNlc3RvclJlbW92ZWQuanMiLCJzcmMvdXRpbHMvY3VzdG9tTWVyZ2UuanMiLCJzcmMvdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzLmpzIiwic3JjL3V0aWxzL2luZGV4T2ZMaXN0ZW5lci5qcyIsInNyYy91dGlscy9saXN0ZW5lck1hdGNoLmpzIiwidmVyc2lvbi5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSBsb2Rhc2guY29tL2xpY2Vuc2UgfCBVbmRlcnNjb3JlLmpzIDEuOC4zIHVuZGVyc2NvcmVqcy5vcmcvTElDRU5TRVxuICogQnVpbGQ6IGBsb2Rhc2ggaW5jbHVkZT1cImNsb25lRGVlcCxjbG9uZURlZXBXaXRoLGZpbmQsZ2V0LGhhcyxpbmNsdWRlcyxpc0VtcHR5LGlzRXF1YWwsaXNOdWxsLGlzUGxhaW5PYmplY3QsaXNPYmplY3QsbWVyZ2UsbWVyZ2VXaXRoLG9taXQscmVqZWN0XCIgLXAgLW8gY3VzdG9tLWxvZGFzaC5qc2BcbiAqL1xuOyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4pe3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwoZSk7Y2FzZSAxOnJldHVybiB0LmNhbGwoZSxuWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChlLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0sblsyXSl9cmV0dXJuIHQuYXBwbHkoZSxuKX1mdW5jdGlvbiBlKHQsZSl7Zm9yKHZhciBuPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoOysrbjxyJiZmYWxzZSE9PWUodFtuXSxuLHQpOyk7fWZ1bmN0aW9uIG4odCxlKXtmb3IodmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGgsbz0wLHU9W107KytuPHI7KXt2YXIgYz10W25dO2UoYyxuLHQpJiYodVtvKytdPWMpfXJldHVybiB1fWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGgsbz1BcnJheShyKTsrK248cjspb1tuXT1lKHRbbl0sbix0KTtyZXR1cm4gb31mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPS0xLHI9ZS5sZW5ndGgsbz10Lmxlbmd0aDsrK248cjspdFtvK25dPWVbbl07XG5yZXR1cm4gdH1mdW5jdGlvbiB1KHQsZSl7Zm9yKHZhciBuPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoOysrbjxyOylpZihlKHRbbl0sbix0KSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gYyh0LGUsbil7dmFyIHI9dC5sZW5ndGg7Zm9yKG4rPS0xOysrbjxyOylpZihlKHRbbl0sbix0KSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBpKHQpe3JldHVybiB0IT09dH1mdW5jdGlvbiBhKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9yZTplW3RdfX1mdW5jdGlvbiBmKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdChlKX19ZnVuY3Rpb24gbCh0LGUpe3JldHVybiByKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19KX1mdW5jdGlvbiBzKHQpe3ZhciBlPS0xLG49QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7blsrK2VdPVtyLHRdfSksbn1mdW5jdGlvbiBiKHQpe3ZhciBlPU9iamVjdDtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQoZShuKSk7XG59fWZ1bmN0aW9uIGgodCl7dmFyIGU9LTEsbj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7blsrK2VdPXR9KSxufWZ1bmN0aW9uIHAoKXt9ZnVuY3Rpb24geSh0KXt2YXIgZT0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxuOyl7dmFyIHI9dFtlXTt0aGlzLnNldChyWzBdLHJbMV0pfX1mdW5jdGlvbiBqKHQpe3ZhciBlPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPG47KXt2YXIgcj10W2VdO3RoaXMuc2V0KHJbMF0sclsxXSl9fWZ1bmN0aW9uIF8odCl7dmFyIGU9LTEsbj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8bjspe3ZhciByPXRbZV07dGhpcy5zZXQoclswXSxyWzFdKX19ZnVuY3Rpb24gZyh0KXt2YXIgZT0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5fX2RhdGFfXz1uZXcgXzsrK2U8bjspdGhpcy5hZGQodFtlXSl9ZnVuY3Rpb24gdih0KXtcbnRoaXMuc2l6ZT0odGhpcy5fX2RhdGFfXz1uZXcgaih0KSkuc2l6ZX1mdW5jdGlvbiBkKHQsZSl7dmFyIG49eG4odCkscj0hbiYmem4odCksbz0hbiYmIXImJkVuKHQpLHU9IW4mJiFyJiYhbyYmTW4odCk7aWYobj1ufHxyfHxvfHx1KXtmb3IodmFyIHI9dC5sZW5ndGgsYz1TdHJpbmcsaT0tMSxhPUFycmF5KHIpOysraTxyOylhW2ldPWMoaSk7cj1hfWVsc2Ugcj1bXTt2YXIgZixjPXIubGVuZ3RoO2ZvcihmIGluIHQpIWUmJiFVZS5jYWxsKHQsZil8fG4mJihcImxlbmd0aFwiPT1mfHxvJiYoXCJvZmZzZXRcIj09Znx8XCJwYXJlbnRcIj09Zil8fHUmJihcImJ1ZmZlclwiPT1mfHxcImJ5dGVMZW5ndGhcIj09Znx8XCJieXRlT2Zmc2V0XCI9PWYpfHx2dChmLGMpKXx8ci5wdXNoKGYpO3JldHVybiByfWZ1bmN0aW9uIEEodCxlLG4peyhuPT09cmV8fEZ0KHRbZV0sbikpJiYobiE9PXJlfHxlIGluIHQpfHxrKHQsZSxuKX1mdW5jdGlvbiB3KHQsZSxuKXt2YXIgcj10W2VdO1VlLmNhbGwodCxlKSYmRnQocixuKSYmKG4hPT1yZXx8ZSBpbiB0KXx8ayh0LGUsbik7XG59ZnVuY3Rpb24gbSh0LGUpe2Zvcih2YXIgbj10Lmxlbmd0aDtuLS07KWlmKEZ0KHRbbl1bMF0sZSkpcmV0dXJuIG47cmV0dXJuLTF9ZnVuY3Rpb24gTyh0LGUpe3JldHVybiB0JiZldChlLEp0KGUpLHQpfWZ1bmN0aW9uIFModCxlKXtyZXR1cm4gdCYmZXQoZSxLdChlKSx0KX1mdW5jdGlvbiBrKHQsZSxuKXtcIl9fcHJvdG9fX1wiPT1lJiZRZT9RZSh0LGUse2NvbmZpZ3VyYWJsZTp0cnVlLGVudW1lcmFibGU6dHJ1ZSx2YWx1ZTpuLHdyaXRhYmxlOnRydWV9KTp0W2VdPW59ZnVuY3Rpb24geih0LG4scixvLHUsYyl7dmFyIGksYT0xJm4sZj0yJm4sbD00Jm47aWYociYmKGk9dT9yKHQsbyx1LGMpOnIodCkpLGkhPT1yZSlyZXR1cm4gaTtpZighQnQodCkpcmV0dXJuIHQ7aWYobz14bih0KSl7aWYoaT15dCh0KSwhYSlyZXR1cm4gdHQodCxpKX1lbHNle3ZhciBzPW1uKHQpLGI9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1zfHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXM7aWYoRW4odCkpcmV0dXJuIFgodCxhKTtcbmlmKFwiW29iamVjdCBPYmplY3RdXCI9PXN8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PXN8fGImJiF1KXtpZihpPWZ8fGI/e306anQodCksIWEpcmV0dXJuIGY/cnQodCxTKGksdCkpOm50KHQsTyhpLHQpKX1lbHNle2lmKCFnZVtzXSlyZXR1cm4gdT90Ont9O2k9X3QodCxzLGEpfX1pZihjfHwoYz1uZXcgdiksdT1jLmdldCh0KSlyZXR1cm4gdTtpZihjLnNldCh0LGkpLEZuKHQpKXJldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSl7aS5hZGQoeihlLG4scixlLHQsYykpfSksaTtpZihJbih0KSlyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUsbyl7aS5zZXQobyx6KGUsbixyLG8sdCxjKSl9KSxpO3ZhciBmPWw/Zj9mdDphdDpmP0t0Okp0LGg9bz9yZTpmKHQpO3JldHVybiBlKGh8fHQsZnVuY3Rpb24oZSxvKXtoJiYobz1lLGU9dFtvXSksdyhpLG8seihlLG4scixvLHQsYykpfSksaX1mdW5jdGlvbiB4KHQsZSl7dmFyIG49W107cmV0dXJuIGduKHQsZnVuY3Rpb24odCxyLG8pe2UodCxyLG8pJiZuLnB1c2godCk7XG59KSxufWZ1bmN0aW9uIEUodCxlLG4scix1KXt2YXIgYz0tMSxpPXQubGVuZ3RoO2ZvcihufHwobj1ndCksdXx8KHU9W10pOysrYzxpOyl7dmFyIGE9dFtjXTswPGUmJm4oYSk/MTxlP0UoYSxlLTEsbixyLHUpOm8odSxhKTpyfHwodVt1Lmxlbmd0aF09YSl9cmV0dXJuIHV9ZnVuY3Rpb24gSSh0LGUpe2U9UShlLHQpO2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bnVsbCE9dCYmbjxyOyl0PXRbT3QoZVtuKytdKV07cmV0dXJuIG4mJm49PXI/dDpyZX1mdW5jdGlvbiBGKHQsZSxuKXtyZXR1cm4gZT1lKHQpLHhuKHQpP2U6byhlLG4odCkpfWZ1bmN0aW9uIE0odCl7aWYobnVsbD09dCl0PXQ9PT1yZT9cIltvYmplY3QgVW5kZWZpbmVkXVwiOlwiW29iamVjdCBOdWxsXVwiO2Vsc2UgaWYoS2UmJktlIGluIE9iamVjdCh0KSl7dmFyIGU9VWUuY2FsbCh0LEtlKSxuPXRbS2VdO3RyeXt0W0tlXT1yZTt2YXIgcj10cnVlfWNhdGNoKHQpe312YXIgbz1QZS5jYWxsKHQpO3ImJihlP3RbS2VdPW46ZGVsZXRlIHRbS2VdKSxcbnQ9b31lbHNlIHQ9UGUuY2FsbCh0KTtyZXR1cm4gdH1mdW5jdGlvbiAkKHQsZSl7cmV0dXJuIG51bGwhPXQmJlVlLmNhbGwodCxlKX1mdW5jdGlvbiBEKHQsZSl7cmV0dXJuIG51bGwhPXQmJmUgaW4gT2JqZWN0KHQpfWZ1bmN0aW9uIFUodCl7cmV0dXJuIFB0KHQpJiZcIltvYmplY3QgQXJndW1lbnRzXVwiPT1NKHQpfWZ1bmN0aW9uIEIodCxlLG4scixvKXtpZih0PT09ZSllPXRydWU7ZWxzZSBpZihudWxsPT10fHxudWxsPT1lfHwhUHQodCkmJiFQdChlKSllPXQhPT10JiZlIT09ZTtlbHNlIHQ6e3ZhciB1PXhuKHQpLGM9eG4oZSksaT11P1wiW29iamVjdCBBcnJheV1cIjptbih0KSxhPWM/XCJbb2JqZWN0IEFycmF5XVwiOm1uKGUpLGk9XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09aT9cIltvYmplY3QgT2JqZWN0XVwiOmksYT1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1hP1wiW29iamVjdCBPYmplY3RdXCI6YSxmPVwiW29iamVjdCBPYmplY3RdXCI9PWksYz1cIltvYmplY3QgT2JqZWN0XVwiPT1hO2lmKChhPWk9PWEpJiZFbih0KSl7XG5pZighRW4oZSkpe2U9ZmFsc2U7YnJlYWsgdH11PXRydWUsZj1mYWxzZX1pZihhJiYhZilvfHwobz1uZXcgdiksZT11fHxNbih0KT9jdCh0LGUsbixyLEIsbyk6aXQodCxlLGksbixyLEIsbyk7ZWxzZXtpZighKDEmbikmJih1PWYmJlVlLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpLGk9YyYmVWUuY2FsbChlLFwiX193cmFwcGVkX19cIiksdXx8aSkpe3Q9dT90LnZhbHVlKCk6dCxlPWk/ZS52YWx1ZSgpOmUsb3x8KG89bmV3IHYpLGU9Qih0LGUsbixyLG8pO2JyZWFrIHR9aWYoYSllOmlmKG98fChvPW5ldyB2KSx1PTEmbixpPWF0KHQpLGM9aS5sZW5ndGgsYT1hdChlKS5sZW5ndGgsYz09YXx8dSl7Zm9yKGY9YztmLS07KXt2YXIgbD1pW2ZdO2lmKCEodT9sIGluIGU6VWUuY2FsbChlLGwpKSl7ZT1mYWxzZTticmVhayBlfX1pZigoYT1vLmdldCh0KSkmJm8uZ2V0KGUpKWU9YT09ZTtlbHNle2E9dHJ1ZSxvLnNldCh0LGUpLG8uc2V0KGUsdCk7Zm9yKHZhciBzPXU7KytmPGM7KXt2YXIgbD1pW2ZdLGI9dFtsXSxoPWVbbF07XG5pZihyKXZhciBwPXU/cihoLGIsbCxlLHQsbyk6cihiLGgsbCx0LGUsbyk7aWYocD09PXJlP2IhPT1oJiYhQihiLGgsbixyLG8pOiFwKXthPWZhbHNlO2JyZWFrfXN8fChzPVwiY29uc3RydWN0b3JcIj09bCl9YSYmIXMmJihuPXQuY29uc3RydWN0b3Iscj1lLmNvbnN0cnVjdG9yLG4hPXImJlwiY29uc3RydWN0b3JcImluIHQmJlwiY29uc3RydWN0b3JcImluIGUmJiEodHlwZW9mIG49PVwiZnVuY3Rpb25cIiYmbiBpbnN0YW5jZW9mIG4mJnR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIgaW5zdGFuY2VvZiByKSYmKGE9ZmFsc2UpKSxvLmRlbGV0ZSh0KSxvLmRlbGV0ZShlKSxlPWF9fWVsc2UgZT1mYWxzZTtlbHNlIGU9ZmFsc2V9fXJldHVybiBlfWZ1bmN0aW9uIFAodCl7cmV0dXJuIFB0KHQpJiZcIltvYmplY3QgTWFwXVwiPT1tbih0KX1mdW5jdGlvbiBMKHQsZSl7dmFyIG49ZS5sZW5ndGgscj1uO2lmKG51bGw9PXQpcmV0dXJuIXI7Zm9yKHQ9T2JqZWN0KHQpO24tLTspe3ZhciBvPWVbbl07aWYob1syXT9vWzFdIT09dFtvWzBdXTohKG9bMF1pbiB0KSlyZXR1cm4gZmFsc2U7XG59Zm9yKDsrK248cjspe3ZhciBvPWVbbl0sdT1vWzBdLGM9dFt1XSxpPW9bMV07aWYob1syXSl7aWYoYz09PXJlJiYhKHUgaW4gdCkpcmV0dXJuIGZhbHNlfWVsc2UgaWYobz1uZXcgdix2b2lkIDA9PT1yZT8hQihpLGMsMyx2b2lkIDAsbyk6MSlyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9ZnVuY3Rpb24gTih0KXtyZXR1cm4gUHQodCkmJlwiW29iamVjdCBTZXRdXCI9PW1uKHQpfWZ1bmN0aW9uIEModCl7cmV0dXJuIFB0KHQpJiZVdCh0Lmxlbmd0aCkmJiEhX2VbTSh0KV19ZnVuY3Rpb24gVCh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90Om51bGw9PXQ/WXQ6dHlwZW9mIHQ9PVwib2JqZWN0XCI/eG4odCk/Vyh0WzBdLHRbMV0pOlIodCk6dGUodCl9ZnVuY3Rpb24gVih0KXtpZighQXQodCkpcmV0dXJuIFplKHQpO3ZhciBlLG49W107Zm9yKGUgaW4gT2JqZWN0KHQpKVVlLmNhbGwodCxlKSYmXCJjb25zdHJ1Y3RvclwiIT1lJiZuLnB1c2goZSk7cmV0dXJuIG59ZnVuY3Rpb24gUih0KXt2YXIgZT1idCh0KTtcbnJldHVybiAxPT1lLmxlbmd0aCYmZVswXVsyXT93dChlWzBdWzBdLGVbMF1bMV0pOmZ1bmN0aW9uKG4pe3JldHVybiBuPT09dHx8TChuLGUpfX1mdW5jdGlvbiBXKHQsZSl7cmV0dXJuIGR0KHQpJiZlPT09ZSYmIUJ0KGUpP3d0KE90KHQpLGUpOmZ1bmN0aW9uKG4pe3ZhciByPUd0KG4sdCk7cmV0dXJuIHI9PT1yZSYmcj09PWU/SHQobix0KTpCKGUsciwzKX19ZnVuY3Rpb24gcSh0LGUsbixyLG8pe3QhPT1lJiZ2bihlLGZ1bmN0aW9uKHUsYyl7aWYoQnQodSkpe298fChvPW5ldyB2KTt2YXIgaT1vLGE9XCJfX3Byb3RvX19cIj09Yz9yZTp0W2NdLGY9XCJfX3Byb3RvX19cIj09Yz9yZTplW2NdLGw9aS5nZXQoZik7aWYobClBKHQsYyxsKTtlbHNle3ZhciBsPXI/cihhLGYsYytcIlwiLHQsZSxpKTpyZSxzPWw9PT1yZTtpZihzKXt2YXIgYj14bihmKSxoPSFiJiZFbihmKSxwPSFiJiYhaCYmTW4oZiksbD1mO2J8fGh8fHA/eG4oYSk/bD1hOiR0KGEpP2w9dHQoYSk6aD8ocz1mYWxzZSxsPVgoZix0cnVlKSk6cD8ocz1mYWxzZSxcbmw9WihmLHRydWUpKTpsPVtdOkx0KGYpfHx6bihmKT8obD1hLHpuKGEpP2w9V3QoYSk6KCFCdChhKXx8biYmRHQoYSkpJiYobD1qdChmKSkpOnM9ZmFsc2V9cyYmKGkuc2V0KGYsbCkscShsLGYsbixyLGkpLGkuZGVsZXRlKGYpKSxBKHQsYyxsKX19ZWxzZSBpPXI/cihcIl9fcHJvdG9fX1wiPT1jP3JlOnRbY10sdSxjK1wiXCIsdCxlLG8pOnJlLGk9PT1yZSYmKGk9dSksQSh0LGMsaSl9LEt0KX1mdW5jdGlvbiBHKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gSShlLHQpfX1mdW5jdGlvbiBIKHQpe3JldHVybiBPbihtdCh0LHZvaWQgMCxZdCksdCtcIlwiKX1mdW5jdGlvbiBKKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXJldHVybiB0O2lmKHhuKHQpKXJldHVybiByKHQsSikrXCJcIjtpZihDdCh0KSlyZXR1cm4gam4/am4uY2FsbCh0KTpcIlwiO3ZhciBlPXQrXCJcIjtyZXR1cm5cIjBcIj09ZSYmMS90PT0tb2U/XCItMFwiOmV9ZnVuY3Rpb24gSyh0LGUpe2U9UShlLHQpO3ZhciBuO2lmKDI+ZS5sZW5ndGgpbj10O2Vsc2V7XG5uPWU7dmFyIHI9MCxvPS0xLHU9LTEsYz1uLmxlbmd0aDtmb3IoMD5yJiYocj0tcj5jPzA6YytyKSxvPW8+Yz9jOm8sMD5vJiYobys9YyksYz1yPm8/MDpvLXI+Pj4wLHI+Pj49MCxvPUFycmF5KGMpOysrdTxjOylvW3VdPW5bdStyXTtuPUkodCxvKX10PW4sbnVsbD09dHx8ZGVsZXRlIHRbT3QoeHQoZSkpXX1mdW5jdGlvbiBRKHQsZSl7cmV0dXJuIHhuKHQpP3Q6ZHQodCxlKT9bdF06U24ocXQodCkpfWZ1bmN0aW9uIFgodCxlKXtpZihlKXJldHVybiB0LnNsaWNlKCk7dmFyIG49dC5sZW5ndGgsbj1SZT9SZShuKTpuZXcgdC5jb25zdHJ1Y3RvcihuKTtyZXR1cm4gdC5jb3B5KG4pLG59ZnVuY3Rpb24gWSh0KXt2YXIgZT1uZXcgdC5jb25zdHJ1Y3Rvcih0LmJ5dGVMZW5ndGgpO3JldHVybiBuZXcgVmUoZSkuc2V0KG5ldyBWZSh0KSksZX1mdW5jdGlvbiBaKHQsZSl7cmV0dXJuIG5ldyB0LmNvbnN0cnVjdG9yKGU/WSh0LmJ1ZmZlcik6dC5idWZmZXIsdC5ieXRlT2Zmc2V0LHQubGVuZ3RoKTtcbn1mdW5jdGlvbiB0dCh0LGUpe3ZhciBuPS0xLHI9dC5sZW5ndGg7Zm9yKGV8fChlPUFycmF5KHIpKTsrK248cjspZVtuXT10W25dO3JldHVybiBlfWZ1bmN0aW9uIGV0KHQsZSxuKXt2YXIgcj0hbjtufHwobj17fSk7Zm9yKHZhciBvPS0xLHU9ZS5sZW5ndGg7KytvPHU7KXt2YXIgYz1lW29dLGk9cmU7aT09PXJlJiYoaT10W2NdKSxyP2sobixjLGkpOncobixjLGkpfXJldHVybiBufWZ1bmN0aW9uIG50KHQsZSl7cmV0dXJuIGV0KHQsQW4odCksZSl9ZnVuY3Rpb24gcnQodCxlKXtyZXR1cm4gZXQodCx3bih0KSxlKX1mdW5jdGlvbiBvdCh0KXtyZXR1cm4gSChmdW5jdGlvbihlLG4pe3ZhciByLG89LTEsdT1uLmxlbmd0aCxjPTE8dT9uW3UtMV06cmUsaT0yPHU/blsyXTpyZSxjPTM8dC5sZW5ndGgmJnR5cGVvZiBjPT1cImZ1bmN0aW9uXCI/KHUtLSxjKTpyZTtpZihyPWkpe3I9blswXTt2YXIgYT1uWzFdO2lmKEJ0KGkpKXt2YXIgZj10eXBlb2YgYTtyPSEhKFwibnVtYmVyXCI9PWY/TXQoaSkmJnZ0KGEsaS5sZW5ndGgpOlwic3RyaW5nXCI9PWYmJmEgaW4gaSkmJkZ0KGlbYV0scik7XG59ZWxzZSByPWZhbHNlfWZvcihyJiYoYz0zPnU/cmU6Yyx1PTEpLGU9T2JqZWN0KGUpOysrbzx1OykoaT1uW29dKSYmdChlLGksbyxjKTtyZXR1cm4gZX0pfWZ1bmN0aW9uIHV0KHQpe3JldHVybiBMdCh0KT9yZTp0fWZ1bmN0aW9uIGN0KHQsZSxuLHIsbyxjKXt2YXIgaT0xJm4sYT10Lmxlbmd0aCxmPWUubGVuZ3RoO2lmKGEhPWYmJiEoaSYmZj5hKSlyZXR1cm4gZmFsc2U7aWYoKGY9Yy5nZXQodCkpJiZjLmdldChlKSlyZXR1cm4gZj09ZTt2YXIgZj0tMSxsPXRydWUscz0yJm4/bmV3IGc6cmU7Zm9yKGMuc2V0KHQsZSksYy5zZXQoZSx0KTsrK2Y8YTspe3ZhciBiPXRbZl0saD1lW2ZdO2lmKHIpdmFyIHA9aT9yKGgsYixmLGUsdCxjKTpyKGIsaCxmLHQsZSxjKTtpZihwIT09cmUpe2lmKHApY29udGludWU7bD1mYWxzZTticmVha31pZihzKXtpZighdShlLGZ1bmN0aW9uKHQsZSl7aWYoIXMuaGFzKGUpJiYoYj09PXR8fG8oYix0LG4scixjKSkpcmV0dXJuIHMucHVzaChlKX0pKXtsPWZhbHNlO2JyZWFrfX1lbHNlIGlmKGIhPT1oJiYhbyhiLGgsbixyLGMpKXtcbmw9ZmFsc2U7YnJlYWt9fXJldHVybiBjLmRlbGV0ZSh0KSxjLmRlbGV0ZShlKSxsfWZ1bmN0aW9uIGl0KHQsZSxuLHIsbyx1LGMpe3N3aXRjaChuKXtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOmlmKHQuYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHx0LmJ5dGVPZmZzZXQhPWUuYnl0ZU9mZnNldClicmVhazt0PXQuYnVmZmVyLGU9ZS5idWZmZXI7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjppZih0LmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8IXUobmV3IFZlKHQpLG5ldyBWZShlKSkpYnJlYWs7cmV0dXJuIHRydWU7Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOmNhc2VcIltvYmplY3QgRGF0ZV1cIjpjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpyZXR1cm4gRnQoK3QsK2UpO2Nhc2VcIltvYmplY3QgRXJyb3JdXCI6cmV0dXJuIHQubmFtZT09ZS5uYW1lJiZ0Lm1lc3NhZ2U9PWUubWVzc2FnZTtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gdD09ZStcIlwiO2Nhc2VcIltvYmplY3QgTWFwXVwiOlxudmFyIGk9cztjYXNlXCJbb2JqZWN0IFNldF1cIjppZihpfHwoaT1oKSx0LnNpemUhPWUuc2l6ZSYmISgxJnIpKWJyZWFrO3JldHVybihuPWMuZ2V0KHQpKT9uPT1lOihyfD0yLGMuc2V0KHQsZSksZT1jdChpKHQpLGkoZSkscixvLHUsYyksYy5kZWxldGUodCksZSk7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6aWYoeW4pcmV0dXJuIHluLmNhbGwodCk9PXluLmNhbGwoZSl9cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGF0KHQpe3JldHVybiBGKHQsSnQsQW4pfWZ1bmN0aW9uIGZ0KHQpe3JldHVybiBGKHQsS3Qsd24pfWZ1bmN0aW9uIGx0KCl7dmFyIHQ9cC5pdGVyYXRlZXx8WnQsdD10PT09WnQ/VDp0O3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QoYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk6dH1mdW5jdGlvbiBzdCh0LGUpe3ZhciBuPXQuX19kYXRhX18scj10eXBlb2YgZTtyZXR1cm4oXCJzdHJpbmdcIj09cnx8XCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIj09cnx8XCJib29sZWFuXCI9PXI/XCJfX3Byb3RvX19cIiE9PWU6bnVsbD09PWUpP25bdHlwZW9mIGU9PVwic3RyaW5nXCI/XCJzdHJpbmdcIjpcImhhc2hcIl06bi5tYXA7XG59ZnVuY3Rpb24gYnQodCl7Zm9yKHZhciBlPUp0KHQpLG49ZS5sZW5ndGg7bi0tOyl7dmFyIHI9ZVtuXSxvPXRbcl07ZVtuXT1bcixvLG89PT1vJiYhQnQobyldfXJldHVybiBlfWZ1bmN0aW9uIGh0KHQsZSl7dmFyIG49bnVsbD09dD9yZTp0W2VdO3JldHVybighQnQobil8fEJlJiZCZSBpbiBuPzA6KER0KG4pP05lOnBlKS50ZXN0KFN0KG4pKSk/bjpyZX1mdW5jdGlvbiBwdCh0LGUsbil7ZT1RKGUsdCk7Zm9yKHZhciByPS0xLG89ZS5sZW5ndGgsdT1mYWxzZTsrK3I8bzspe3ZhciBjPU90KGVbcl0pO2lmKCEodT1udWxsIT10JiZuKHQsYykpKWJyZWFrO3Q9dFtjXX1yZXR1cm4gdXx8KytyIT1vP3U6KG89bnVsbD09dD8wOnQubGVuZ3RoLCEhbyYmVXQobykmJnZ0KGMsbykmJih4bih0KXx8em4odCkpKX1mdW5jdGlvbiB5dCh0KXt2YXIgZT10Lmxlbmd0aCxuPW5ldyB0LmNvbnN0cnVjdG9yKGUpO3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgdFswXSYmVWUuY2FsbCh0LFwiaW5kZXhcIikmJihuLmluZGV4PXQuaW5kZXgsXG5uLmlucHV0PXQuaW5wdXQpLG59ZnVuY3Rpb24ganQodCl7cmV0dXJuIHR5cGVvZiB0LmNvbnN0cnVjdG9yIT1cImZ1bmN0aW9uXCJ8fEF0KHQpP3t9Ol9uKFdlKHQpKX1mdW5jdGlvbiBfdCh0LGUsbil7dmFyIHI9dC5jb25zdHJ1Y3Rvcjtzd2l0Y2goZSl7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjpyZXR1cm4gWSh0KTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOnJldHVybiBuZXcgcigrdCk7Y2FzZVwiW29iamVjdCBEYXRhVmlld11cIjpyZXR1cm4gZT1uP1kodC5idWZmZXIpOnQuYnVmZmVyLG5ldyB0LmNvbnN0cnVjdG9yKGUsdC5ieXRlT2Zmc2V0LHQuYnl0ZUxlbmd0aCk7Y2FzZVwiW29iamVjdCBGbG9hdDMyQXJyYXldXCI6Y2FzZVwiW29iamVjdCBGbG9hdDY0QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQ4QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQxNkFycmF5XVwiOmNhc2VcIltvYmplY3QgSW50MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCI6XG5jYXNlXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MzJBcnJheV1cIjpyZXR1cm4gWih0LG4pO2Nhc2VcIltvYmplY3QgTWFwXVwiOnJldHVybiBuZXcgcjtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gbmV3IHIodCk7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6cmV0dXJuIGU9bmV3IHQuY29uc3RydWN0b3IodC5zb3VyY2Usc2UuZXhlYyh0KSksZS5sYXN0SW5kZXg9dC5sYXN0SW5kZXgsZTtjYXNlXCJbb2JqZWN0IFNldF1cIjpyZXR1cm4gbmV3IHI7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6cmV0dXJuIHluP09iamVjdCh5bi5jYWxsKHQpKTp7fX19ZnVuY3Rpb24gZ3QodCl7cmV0dXJuIHhuKHQpfHx6bih0KXx8ISEoSmUmJnQmJnRbSmVdKX1mdW5jdGlvbiB2dCh0LGUpe3ZhciBuPXR5cGVvZiB0O3JldHVybiBlPW51bGw9PWU/OTAwNzE5OTI1NDc0MDk5MTplLCEhZSYmKFwibnVtYmVyXCI9PW58fFwic3ltYm9sXCIhPW4mJmplLnRlc3QodCkpJiYtMTx0JiYwPT10JTEmJnQ8ZTtcbn1mdW5jdGlvbiBkdCh0LGUpe2lmKHhuKHQpKXJldHVybiBmYWxzZTt2YXIgbj10eXBlb2YgdDtyZXR1cm4hKFwibnVtYmVyXCIhPW4mJlwic3ltYm9sXCIhPW4mJlwiYm9vbGVhblwiIT1uJiZudWxsIT10JiYhQ3QodCkpfHwoaWUudGVzdCh0KXx8IWNlLnRlc3QodCl8fG51bGwhPWUmJnQgaW4gT2JqZWN0KGUpKX1mdW5jdGlvbiBBdCh0KXt2YXIgZT10JiZ0LmNvbnN0cnVjdG9yO3JldHVybiB0PT09KHR5cGVvZiBlPT1cImZ1bmN0aW9uXCImJmUucHJvdG90eXBlfHxNZSl9ZnVuY3Rpb24gd3QodCxlKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJihuW3RdPT09ZSYmKGUhPT1yZXx8dCBpbiBPYmplY3QobikpKX19ZnVuY3Rpb24gbXQoZSxuLHIpe3JldHVybiBuPXRuKG49PT1yZT9lLmxlbmd0aC0xOm4sMCksZnVuY3Rpb24oKXtmb3IodmFyIG89YXJndW1lbnRzLHU9LTEsYz10bihvLmxlbmd0aC1uLDApLGk9QXJyYXkoYyk7Kyt1PGM7KWlbdV09b1tuK3VdO2Zvcih1PS0xLGM9QXJyYXkobisxKTsrK3U8bjspY1t1XT1vW3VdO1xucmV0dXJuIGNbbl09cihpKSx0KGUsdGhpcyxjKX19ZnVuY3Rpb24gT3QodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCJ8fEN0KHQpKXJldHVybiB0O3ZhciBlPXQrXCJcIjtyZXR1cm5cIjBcIj09ZSYmMS90PT0tb2U/XCItMFwiOmV9ZnVuY3Rpb24gU3QodCl7aWYobnVsbCE9dCl7dHJ5e3JldHVybiBEZS5jYWxsKHQpfWNhdGNoKHQpe31yZXR1cm4gdCtcIlwifXJldHVyblwiXCJ9ZnVuY3Rpb24ga3QodCxlLG4pe3ZhciByPW51bGw9PXQ/MDp0Lmxlbmd0aDtyZXR1cm4gcj8obj1udWxsPT1uPzA6VnQobiksMD5uJiYobj10bihyK24sMCkpLGModCxsdChlLDMpLG4pKTotMX1mdW5jdGlvbiB6dCh0KXtyZXR1cm4obnVsbD09dD8wOnQubGVuZ3RoKT9FKHQsMSk6W119ZnVuY3Rpb24geHQodCl7dmFyIGU9bnVsbD09dD8wOnQubGVuZ3RoO3JldHVybiBlP3RbZS0xXTpyZX1mdW5jdGlvbiBFdCh0LGUpe2Z1bmN0aW9uIG4oKXt2YXIgcj1hcmd1bWVudHMsbz1lP2UuYXBwbHkodGhpcyxyKTpyWzBdLHU9bi5jYWNoZTtcbnJldHVybiB1LmhhcyhvKT91LmdldChvKToocj10LmFwcGx5KHRoaXMsciksbi5jYWNoZT11LnNldChvLHIpfHx1LHIpfWlmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCJ8fG51bGwhPWUmJnR5cGVvZiBlIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG4uY2FjaGU9bmV3KEV0LkNhY2hlfHxfKSxufWZ1bmN0aW9uIEl0KHQpe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzO3N3aXRjaChlLmxlbmd0aCl7Y2FzZSAwOnJldHVybiF0LmNhbGwodGhpcyk7Y2FzZSAxOnJldHVybiF0LmNhbGwodGhpcyxlWzBdKTtjYXNlIDI6cmV0dXJuIXQuY2FsbCh0aGlzLGVbMF0sZVsxXSk7Y2FzZSAzOnJldHVybiF0LmNhbGwodGhpcyxlWzBdLGVbMV0sZVsyXSl9cmV0dXJuIXQuYXBwbHkodGhpcyxlKX19ZnVuY3Rpb24gRnQodCxlKXtcbnJldHVybiB0PT09ZXx8dCE9PXQmJmUhPT1lfWZ1bmN0aW9uIE10KHQpe3JldHVybiBudWxsIT10JiZVdCh0Lmxlbmd0aCkmJiFEdCh0KX1mdW5jdGlvbiAkdCh0KXtyZXR1cm4gUHQodCkmJk10KHQpfWZ1bmN0aW9uIER0KHQpe3JldHVybiEhQnQodCkmJih0PU0odCksXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgUHJveHldXCI9PXQpfWZ1bmN0aW9uIFV0KHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmLTE8dCYmMD09dCUxJiY5MDA3MTk5MjU0NzQwOTkxPj10fWZ1bmN0aW9uIEJ0KHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiBudWxsIT10JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX1mdW5jdGlvbiBQdCh0KXtyZXR1cm4gbnVsbCE9dCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ9ZnVuY3Rpb24gTHQodCl7cmV0dXJuISghUHQodCl8fFwiW29iamVjdCBPYmplY3RdXCIhPU0odCkpJiYodD1XZSh0KSxcbm51bGw9PT10fHwodD1VZS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3Rvcix0eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ0IGluc3RhbmNlb2YgdCYmRGUuY2FsbCh0KT09TGUpKX1mdW5jdGlvbiBOdCh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwic3RyaW5nXCJ8fCF4bih0KSYmUHQodCkmJlwiW29iamVjdCBTdHJpbmddXCI9PU0odCl9ZnVuY3Rpb24gQ3QodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN5bWJvbFwifHxQdCh0KSYmXCJbb2JqZWN0IFN5bWJvbF1cIj09TSh0KX1mdW5jdGlvbiBUdCh0KXtyZXR1cm4gdD8odD1SdCh0KSx0PT09b2V8fHQ9PT0tb2U/MS43OTc2OTMxMzQ4NjIzMTU3ZTMwOCooMD50Py0xOjEpOnQ9PT10P3Q6MCk6MD09PXQ/dDowfWZ1bmN0aW9uIFZ0KHQpe3Q9VHQodCk7dmFyIGU9dCUxO3JldHVybiB0PT09dD9lP3QtZTp0OjB9ZnVuY3Rpb24gUnQodCl7aWYodHlwZW9mIHQ9PVwibnVtYmVyXCIpcmV0dXJuIHQ7aWYoQ3QodCkpcmV0dXJuIHVlO2lmKEJ0KHQpJiYodD10eXBlb2YgdC52YWx1ZU9mPT1cImZ1bmN0aW9uXCI/dC52YWx1ZU9mKCk6dCxcbnQ9QnQodCk/dCtcIlwiOnQpLHR5cGVvZiB0IT1cInN0cmluZ1wiKXJldHVybiAwPT09dD90Oit0O3Q9dC5yZXBsYWNlKGZlLFwiXCIpO3ZhciBlPWhlLnRlc3QodCk7cmV0dXJuIGV8fHllLnRlc3QodCk/ZGUodC5zbGljZSgyKSxlPzI6OCk6YmUudGVzdCh0KT91ZTordH1mdW5jdGlvbiBXdCh0KXtyZXR1cm4gZXQodCxLdCh0KSl9ZnVuY3Rpb24gcXQodCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpKKHQpfWZ1bmN0aW9uIEd0KHQsZSxuKXtyZXR1cm4gdD1udWxsPT10P3JlOkkodCxlKSx0PT09cmU/bjp0fWZ1bmN0aW9uIEh0KHQsZSl7cmV0dXJuIG51bGwhPXQmJnB0KHQsZSxEKX1mdW5jdGlvbiBKdCh0KXtyZXR1cm4gTXQodCk/ZCh0KTpWKHQpfWZ1bmN0aW9uIEt0KHQpe2lmKE10KHQpKXQ9ZCh0LHRydWUpO2Vsc2UgaWYoQnQodCkpe3ZhciBlLG49QXQodCkscj1bXTtmb3IoZSBpbiB0KShcImNvbnN0cnVjdG9yXCIhPWV8fCFuJiZVZS5jYWxsKHQsZSkpJiZyLnB1c2goZSk7dD1yfWVsc2V7aWYoZT1bXSxcbm51bGwhPXQpZm9yKG4gaW4gT2JqZWN0KHQpKWUucHVzaChuKTt0PWV9cmV0dXJuIHR9ZnVuY3Rpb24gUXQodCl7cmV0dXJuIG51bGw9PXQ/W106bCh0LEp0KHQpKX1mdW5jdGlvbiBYdCh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19ZnVuY3Rpb24gWXQodCl7cmV0dXJuIHR9ZnVuY3Rpb24gWnQodCl7cmV0dXJuIFQodHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90OnoodCwxKSl9ZnVuY3Rpb24gdGUodCl7cmV0dXJuIGR0KHQpP2EoT3QodCkpOkcodCl9ZnVuY3Rpb24gZWUoKXtyZXR1cm5bXX1mdW5jdGlvbiBuZSgpe3JldHVybiBmYWxzZX12YXIgcmUsb2U9MS8wLHVlPU5hTixjZT0vXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLGllPS9eXFx3KiQvLGFlPS9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZyxmZT0vXlxccyt8XFxzKyQvZyxsZT0vXFxcXChcXFxcKT8vZyxzZT0vXFx3KiQvLGJlPS9eWy0rXTB4WzAtOWEtZl0rJC9pLGhlPS9eMGJbMDFdKyQvaSxwZT0vXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvLHllPS9eMG9bMC03XSskL2ksamU9L14oPzowfFsxLTldXFxkKikkLyxfZT17fTtcbl9lW1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPV9lW1wiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdPV9lW1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPV9lW1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT1fZVtcIltvYmplY3QgSW50MzJBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPV9lW1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDMyQXJyYXldXCJdPXRydWUsX2VbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09X2VbXCJbb2JqZWN0IEFycmF5XVwiXT1fZVtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPV9lW1wiW29iamVjdCBCb29sZWFuXVwiXT1fZVtcIltvYmplY3QgRGF0YVZpZXddXCJdPV9lW1wiW29iamVjdCBEYXRlXVwiXT1fZVtcIltvYmplY3QgRXJyb3JdXCJdPV9lW1wiW29iamVjdCBGdW5jdGlvbl1cIl09X2VbXCJbb2JqZWN0IE1hcF1cIl09X2VbXCJbb2JqZWN0IE51bWJlcl1cIl09X2VbXCJbb2JqZWN0IE9iamVjdF1cIl09X2VbXCJbb2JqZWN0IFJlZ0V4cF1cIl09X2VbXCJbb2JqZWN0IFNldF1cIl09X2VbXCJbb2JqZWN0IFN0cmluZ11cIl09X2VbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO1xudmFyIGdlPXt9O2dlW1wiW29iamVjdCBBcmd1bWVudHNdXCJdPWdlW1wiW29iamVjdCBBcnJheV1cIl09Z2VbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1nZVtcIltvYmplY3QgRGF0YVZpZXddXCJdPWdlW1wiW29iamVjdCBCb29sZWFuXVwiXT1nZVtcIltvYmplY3QgRGF0ZV1cIl09Z2VbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09Z2VbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09Z2VbXCJbb2JqZWN0IEludDhBcnJheV1cIl09Z2VbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPWdlW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1nZVtcIltvYmplY3QgTWFwXVwiXT1nZVtcIltvYmplY3QgTnVtYmVyXVwiXT1nZVtcIltvYmplY3QgT2JqZWN0XVwiXT1nZVtcIltvYmplY3QgUmVnRXhwXVwiXT1nZVtcIltvYmplY3QgU2V0XVwiXT1nZVtcIltvYmplY3QgU3RyaW5nXVwiXT1nZVtcIltvYmplY3QgU3ltYm9sXVwiXT1nZVtcIltvYmplY3QgVWludDhBcnJheV1cIl09Z2VbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1nZVtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPWdlW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxcbmdlW1wiW29iamVjdCBFcnJvcl1cIl09Z2VbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1nZVtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7dmFyIHZlLGRlPXBhcnNlSW50LEFlPXR5cGVvZiBnbG9iYWw9PVwib2JqZWN0XCImJmdsb2JhbCYmZ2xvYmFsLk9iamVjdD09PU9iamVjdCYmZ2xvYmFsLHdlPXR5cGVvZiBzZWxmPT1cIm9iamVjdFwiJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixtZT1BZXx8d2V8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxPZT10eXBlb2YgZXhwb3J0cz09XCJvYmplY3RcIiYmZXhwb3J0cyYmIWV4cG9ydHMubm9kZVR5cGUmJmV4cG9ydHMsU2U9T2UmJnR5cGVvZiBtb2R1bGU9PVwib2JqZWN0XCImJm1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLGtlPVNlJiZTZS5leHBvcnRzPT09T2UsemU9a2UmJkFlLnByb2Nlc3M7dDp7dHJ5e3ZlPXplJiZ6ZS5iaW5kaW5nJiZ6ZS5iaW5kaW5nKFwidXRpbFwiKTticmVhayB0fWNhdGNoKHQpe312ZT12b2lkIDB9dmFyIHhlPXZlJiZ2ZS5pc01hcCxFZT12ZSYmdmUuaXNTZXQsSWU9dmUmJnZlLmlzVHlwZWRBcnJheSxGZT1BcnJheS5wcm90b3R5cGUsTWU9T2JqZWN0LnByb3RvdHlwZSwkZT1tZVtcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxEZT1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsVWU9TWUuaGFzT3duUHJvcGVydHksQmU9ZnVuY3Rpb24oKXtcbnZhciB0PS9bXi5dKyQvLmV4ZWMoJGUmJiRlLmtleXMmJiRlLmtleXMuSUVfUFJPVE98fFwiXCIpO3JldHVybiB0P1wiU3ltYm9sKHNyYylfMS5cIit0OlwiXCJ9KCksUGU9TWUudG9TdHJpbmcsTGU9RGUuY2FsbChPYmplY3QpLE5lPVJlZ0V4cChcIl5cIitEZS5jYWxsKFVlKS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLENlPWtlP21lLkJ1ZmZlcjpyZSxUZT1tZS5TeW1ib2wsVmU9bWUuVWludDhBcnJheSxSZT1DZT9DZS5hOnJlLFdlPWIoT2JqZWN0LmdldFByb3RvdHlwZU9mKSxxZT1PYmplY3QuY3JlYXRlLEdlPU1lLnByb3BlcnR5SXNFbnVtZXJhYmxlLEhlPUZlLnNwbGljZSxKZT1UZT9UZS5pc0NvbmNhdFNwcmVhZGFibGU6cmUsS2U9VGU/VGUudG9TdHJpbmdUYWc6cmUsUWU9ZnVuY3Rpb24oKXt0cnl7dmFyIHQ9aHQoT2JqZWN0LFwiZGVmaW5lUHJvcGVydHlcIik7XG5yZXR1cm4gdCh7fSxcIlwiLHt9KSx0fWNhdGNoKHQpe319KCksWGU9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxZZT1DZT9DZS5pc0J1ZmZlcjpyZSxaZT1iKE9iamVjdC5rZXlzKSx0bj1NYXRoLm1heCxlbj1EYXRlLm5vdyxubj1odChtZSxcIkRhdGFWaWV3XCIpLHJuPWh0KG1lLFwiTWFwXCIpLG9uPWh0KG1lLFwiUHJvbWlzZVwiKSx1bj1odChtZSxcIlNldFwiKSxjbj1odChtZSxcIldlYWtNYXBcIiksYW49aHQoT2JqZWN0LFwiY3JlYXRlXCIpLGZuPVN0KG5uKSxsbj1TdChybiksc249U3Qob24pLGJuPVN0KHVuKSxobj1TdChjbikscG49VGU/VGUucHJvdG90eXBlOnJlLHluPXBuP3BuLnZhbHVlT2Y6cmUsam49cG4/cG4udG9TdHJpbmc6cmUsX249ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gQnQoZSk/cWU/cWUoZSk6KHQucHJvdG90eXBlPWUsZT1uZXcgdCx0LnByb3RvdHlwZT1yZSxlKTp7fX19KCk7eS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtcbnRoaXMuX19kYXRhX189YW4/YW4obnVsbCk6e30sdGhpcy5zaXplPTB9LHkucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdD10aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF0sdGhpcy5zaXplLT10PzE6MCx0fSx5LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gYW4/KHQ9ZVt0XSxcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIj09PXQ/cmU6dCk6VWUuY2FsbChlLHQpP2VbdF06cmV9LHkucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBhbj9lW3RdIT09cmU6VWUuY2FsbChlLHQpfSx5LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiB0aGlzLnNpemUrPXRoaXMuaGFzKHQpPzA6MSxuW3RdPWFuJiZlPT09cmU/XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI6ZSx0aGlzfSxqLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe1xudGhpcy5fX2RhdGFfXz1bXSx0aGlzLnNpemU9MH0sai5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9bShlLHQpLCEoMD50KSYmKHQ9PWUubGVuZ3RoLTE/ZS5wb3AoKTpIZS5jYWxsKGUsdCwxKSwtLXRoaXMuc2l6ZSx0cnVlKX0sai5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9bShlLHQpLDA+dD9yZTplW3RdWzFdfSxqLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuLTE8bSh0aGlzLl9fZGF0YV9fLHQpfSxqLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9fZGF0YV9fLHI9bShuLHQpO3JldHVybiAwPnI/KCsrdGhpcy5zaXplLG4ucHVzaChbdCxlXSkpOm5bcl1bMV09ZSx0aGlzfSxfLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2l6ZT0wLHRoaXMuX19kYXRhX189e2hhc2g6bmV3IHksbWFwOm5ldyhybnx8aiksc3RyaW5nOm5ldyB5XG59fSxfLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9c3QodGhpcyx0KS5kZWxldGUodCksdGhpcy5zaXplLT10PzE6MCx0fSxfLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHN0KHRoaXMsdCkuZ2V0KHQpfSxfLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHN0KHRoaXMsdCkuaGFzKHQpfSxfLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1zdCh0aGlzLHQpLHI9bi5zaXplO3JldHVybiBuLnNldCh0LGUpLHRoaXMuc2l6ZSs9bi5zaXplPT1yPzA6MSx0aGlzfSxnLnByb3RvdHlwZS5hZGQ9Zy5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQodCxcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIiksdGhpc30sZy5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX0sdi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyBqLFxudGhpcy5zaXplPTB9LHYucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiB0PWUuZGVsZXRlKHQpLHRoaXMuc2l6ZT1lLnNpemUsdH0sdi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldCh0KX0sdi5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX0sdi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5fX2RhdGFfXztpZihuIGluc3RhbmNlb2Ygail7dmFyIHI9bi5fX2RhdGFfXztpZighcm58fDE5OT5yLmxlbmd0aClyZXR1cm4gci5wdXNoKFt0LGVdKSx0aGlzLnNpemU9KytuLnNpemUsdGhpcztuPXRoaXMuX19kYXRhX189bmV3IF8ocil9cmV0dXJuIG4uc2V0KHQsZSksdGhpcy5zaXplPW4uc2l6ZSx0aGlzfTt2YXIgZ249ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24obixyKXtpZihudWxsPT1uKXJldHVybiBuO2lmKCFNdChuKSlyZXR1cm4gdChuLHIpO1xuZm9yKHZhciBvPW4ubGVuZ3RoLHU9ZT9vOi0xLGM9T2JqZWN0KG4pOyhlP3UtLTorK3U8bykmJmZhbHNlIT09cihjW3VdLHUsYyk7KTtyZXR1cm4gbn19KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQmJnZuKHQsZSxKdCl9KSx2bj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuLHIpe3ZhciBvPS0xLHU9T2JqZWN0KGUpO3I9cihlKTtmb3IodmFyIGM9ci5sZW5ndGg7Yy0tOyl7dmFyIGk9clt0P2M6KytvXTtpZihmYWxzZT09PW4odVtpXSxpLHUpKWJyZWFrfXJldHVybiBlfX0oKSxkbj1RZT9mdW5jdGlvbih0LGUpe3JldHVybiBRZSh0LFwidG9TdHJpbmdcIix7Y29uZmlndXJhYmxlOnRydWUsZW51bWVyYWJsZTpmYWxzZSx2YWx1ZTpYdChlKSx3cml0YWJsZTp0cnVlfSl9Oll0LEFuPVhlP2Z1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1tdOih0PU9iamVjdCh0KSxuKFhlKHQpLGZ1bmN0aW9uKGUpe3JldHVybiBHZS5jYWxsKHQsZSl9KSl9OmVlLHduPVhlP2Z1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXTt0OylvKGUsQW4odCkpLFxudD1XZSh0KTtyZXR1cm4gZX06ZWUsbW49TTsobm4mJlwiW29iamVjdCBEYXRhVmlld11cIiE9bW4obmV3IG5uKG5ldyBBcnJheUJ1ZmZlcigxKSkpfHxybiYmXCJbb2JqZWN0IE1hcF1cIiE9bW4obmV3IHJuKXx8b24mJlwiW29iamVjdCBQcm9taXNlXVwiIT1tbihvbi5yZXNvbHZlKCkpfHx1biYmXCJbb2JqZWN0IFNldF1cIiE9bW4obmV3IHVuKXx8Y24mJlwiW29iamVjdCBXZWFrTWFwXVwiIT1tbihuZXcgY24pKSYmKG1uPWZ1bmN0aW9uKHQpe3ZhciBlPU0odCk7aWYodD0odD1cIltvYmplY3QgT2JqZWN0XVwiPT1lP3QuY29uc3RydWN0b3I6cmUpP1N0KHQpOlwiXCIpc3dpdGNoKHQpe2Nhc2UgZm46cmV0dXJuXCJbb2JqZWN0IERhdGFWaWV3XVwiO2Nhc2UgbG46cmV0dXJuXCJbb2JqZWN0IE1hcF1cIjtjYXNlIHNuOnJldHVyblwiW29iamVjdCBQcm9taXNlXVwiO2Nhc2UgYm46cmV0dXJuXCJbb2JqZWN0IFNldF1cIjtjYXNlIGhuOnJldHVyblwiW29iamVjdCBXZWFrTWFwXVwifXJldHVybiBlfSk7dmFyIE9uPWZ1bmN0aW9uKHQpe1xudmFyIGU9MCxuPTA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHI9ZW4oKSxvPTE2LShyLW4pO2lmKG49ciwwPG8pe2lmKDgwMDw9KytlKXJldHVybiBhcmd1bWVudHNbMF19ZWxzZSBlPTA7cmV0dXJuIHQuYXBwbHkocmUsYXJndW1lbnRzKX19KGRuKSxTbj1mdW5jdGlvbih0KXt0PUV0KHQsZnVuY3Rpb24odCl7cmV0dXJuIDUwMD09PWUuc2l6ZSYmZS5jbGVhcigpLHR9KTt2YXIgZT10LmNhY2hlO3JldHVybiB0fShmdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gNDY9PT10LmNoYXJDb2RlQXQoMCkmJmUucHVzaChcIlwiKSx0LnJlcGxhY2UoYWUsZnVuY3Rpb24odCxuLHIsbyl7ZS5wdXNoKHI/by5yZXBsYWNlKGxlLFwiJDFcIik6bnx8dCl9KSxlfSksa249ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbixyKXt2YXIgbz1PYmplY3QoZSk7aWYoIU10KGUpKXt2YXIgdT1sdChuLDMpO2U9SnQoZSksbj1mdW5jdGlvbih0KXtyZXR1cm4gdShvW3RdLHQsbyl9fXJldHVybiBuPXQoZSxuLHIpLFxuLTE8bj9vW3U/ZVtuXTpuXTpyZX19KGt0KTtFdC5DYWNoZT1fO3ZhciB6bj1VKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/VTpmdW5jdGlvbih0KXtyZXR1cm4gUHQodCkmJlVlLmNhbGwodCxcImNhbGxlZVwiKSYmIUdlLmNhbGwodCxcImNhbGxlZVwiKX0seG49QXJyYXkuaXNBcnJheSxFbj1ZZXx8bmUsSW49eGU/Zih4ZSk6UCxGbj1FZT9mKEVlKTpOLE1uPUllP2YoSWUpOkMsJG49b3QoZnVuY3Rpb24odCxlLG4pe3EodCxlLG4pfSksRG49b3QoZnVuY3Rpb24odCxlLG4scil7cSh0LGUsbixyKX0pLFVuPWZ1bmN0aW9uKHQpe3JldHVybiBPbihtdCh0LHJlLHp0KSx0K1wiXCIpfShmdW5jdGlvbih0LGUpe3ZhciBuPXt9O2lmKG51bGw9PXQpcmV0dXJuIG47dmFyIG89ZmFsc2U7ZT1yKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9UShlLHQpLG98fChvPTE8ZS5sZW5ndGgpLGV9KSxldCh0LGZ0KHQpLG4pLG8mJihuPXoobiw3LHV0KSk7Zm9yKHZhciB1PWUubGVuZ3RoO3UtLTspSyhuLGVbdV0pO1xucmV0dXJuIG59KTtwLmNvbnN0YW50PVh0LHAuZmxhdHRlbj16dCxwLml0ZXJhdGVlPVp0LHAua2V5cz1KdCxwLmtleXNJbj1LdCxwLm1lbW9pemU9RXQscC5tZXJnZT0kbixwLm1lcmdlV2l0aD1EbixwLm5lZ2F0ZT1JdCxwLm9taXQ9VW4scC5wcm9wZXJ0eT10ZSxwLnJlamVjdD1mdW5jdGlvbih0LGUpe3JldHVybih4bih0KT9uOngpKHQsSXQobHQoZSwzKSkpfSxwLnRvUGxhaW5PYmplY3Q9V3QscC52YWx1ZXM9UXQscC5jbG9uZURlZXA9ZnVuY3Rpb24odCl7cmV0dXJuIHoodCw1KX0scC5jbG9uZURlZXBXaXRoPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGU9dHlwZW9mIGU9PVwiZnVuY3Rpb25cIj9lOnJlLHoodCw1LGUpfSxwLmVxPUZ0LHAuZmluZD1rbixwLmZpbmRJbmRleD1rdCxwLmdldD1HdCxwLmhhcz1mdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT10JiZwdCh0LGUsJCl9LHAuaGFzSW49SHQscC5pZGVudGl0eT1ZdCxwLmluY2x1ZGVzPWZ1bmN0aW9uKHQsZSxuLHIpe2lmKHQ9TXQodCk/dDpRdCh0KSxcbm49biYmIXI/VnQobik6MCxyPXQubGVuZ3RoLDA+biYmKG49dG4ocituLDApKSxOdCh0KSl0PW48PXImJi0xPHQuaW5kZXhPZihlLG4pO2Vsc2V7aWYocj0hIXIpe2lmKGU9PT1lKXQ6e2ZvcihuLT0xLHI9dC5sZW5ndGg7KytuPHI7KWlmKHRbbl09PT1lKXt0PW47YnJlYWsgdH10PS0xfWVsc2UgdD1jKHQsaSxuKTtyPS0xPHR9dD1yfXJldHVybiB0fSxwLmlzQXJndW1lbnRzPXpuLHAuaXNBcnJheT14bixwLmlzQXJyYXlMaWtlPU10LHAuaXNBcnJheUxpa2VPYmplY3Q9JHQscC5pc0J1ZmZlcj1FbixwLmlzRW1wdHk9ZnVuY3Rpb24odCl7aWYobnVsbD09dClyZXR1cm4gdHJ1ZTtpZihNdCh0KSYmKHhuKHQpfHx0eXBlb2YgdD09XCJzdHJpbmdcInx8dHlwZW9mIHQuc3BsaWNlPT1cImZ1bmN0aW9uXCJ8fEVuKHQpfHxNbih0KXx8em4odCkpKXJldHVybiF0Lmxlbmd0aDt2YXIgZT1tbih0KTtpZihcIltvYmplY3QgTWFwXVwiPT1lfHxcIltvYmplY3QgU2V0XVwiPT1lKXJldHVybiF0LnNpemU7aWYoQXQodCkpcmV0dXJuIVYodCkubGVuZ3RoO1xuZm9yKHZhciBuIGluIHQpaWYoVWUuY2FsbCh0LG4pKXJldHVybiBmYWxzZTtyZXR1cm4gdHJ1ZX0scC5pc0VxdWFsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEIodCxlKX0scC5pc0Z1bmN0aW9uPUR0LHAuaXNMZW5ndGg9VXQscC5pc01hcD1JbixwLmlzTnVsbD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09PXR9LHAuaXNPYmplY3Q9QnQscC5pc09iamVjdExpa2U9UHQscC5pc1BsYWluT2JqZWN0PUx0LHAuaXNTZXQ9Rm4scC5pc1N0cmluZz1OdCxwLmlzU3ltYm9sPUN0LHAuaXNUeXBlZEFycmF5PU1uLHAubGFzdD14dCxwLnN0dWJBcnJheT1lZSxwLnN0dWJGYWxzZT1uZSxwLnRvRmluaXRlPVR0LHAudG9JbnRlZ2VyPVZ0LHAudG9OdW1iZXI9UnQscC50b1N0cmluZz1xdCxwLlZFUlNJT049XCI0LjE3LjVcIix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBkZWZpbmUuYW1kPT1cIm9iamVjdFwiJiZkZWZpbmUuYW1kPyhtZS5fPXAsIGRlZmluZShmdW5jdGlvbigpe3JldHVybiBwfSkpOlNlPygoU2UuZXhwb3J0cz1wKS5fPXAsXG5PZS5fPXApOm1lLl89cH0pLmNhbGwodGhpcyk7IiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7U3RyaW5nfSBJdGVtVHlwZVxuICAgKiovXG5cbiAgLyoqXG4gICAqIEVudW1lcmF0aW9uIG9mIGRhdGEgbGF5ZXIgaXRlbSB0eXBlcy5cbiAgICpcbiAgICogQGVudW0ge0l0ZW1UeXBlfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGl0ZW1UeXBlOiB7XG4gICAgLyoqIFJlcHJlc2VudHMgYW4gaXRlbSBvZiB0eXBlIGRhdGEgKi9cbiAgICBEQVRBOiAnZGF0YScsXG4gICAgLyoqIFJlcHJlc2VudHMgYW4gaXRlbSBvZiB0eXBlIGZ1bmN0aW9uICovXG4gICAgRkNUTjogJ2ZjdG4nLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBldmVudCAqL1xuICAgIEVWRU5UOiAnZXZlbnQnLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBsaXN0ZW5lciBvbiAqL1xuICAgIExJU1RFTkVSX09OOiAnbGlzdGVuZXJPbicsXG4gICAgLyoqIFJlcHJlc2VudHMgYW4gaXRlbSBvZiB0eXBlIGxpc3RlbmVyIG9mZiAqL1xuICAgIExJU1RFTkVSX09GRjogJ2xpc3RlbmVyT2ZmJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7U3RyaW5nfSBEYXRhTGF5ZXJFdmVudFxuICAgKiovXG5cbiAgLyoqXG4gICAqIEVudW1lcmF0aW9uIG9mIGRhdGEgbGF5ZXIgZXZlbnRzLlxuICAgKlxuICAgKiBAZW51bSB7RGF0YUxheWVyRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZGF0YUxheWVyRXZlbnQ6IHtcbiAgICAvKiogUmVwcmVzZW50cyBhbiBldmVudCB0cmlnZ2VyZWQgZm9yIGFueSBjaGFuZ2UgaW4gdGhlIGRhdGEgbGF5ZXIgc3RhdGUgKi9cbiAgICBDSEFOR0U6ICdhZG9iZURhdGFMYXllcjpjaGFuZ2UnLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGV2ZW50IHRyaWdnZXJlZCBmb3IgYW55IGV2ZW50IHB1c2ggdG8gdGhlIGRhdGEgbGF5ZXIgKi9cbiAgICBFVkVOVDogJ2Fkb2JlRGF0YUxheWVyOmV2ZW50J1xuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7U3RyaW5nfSBMaXN0ZW5lclNjb3BlXG4gICAqKi9cblxuICAvKipcbiAgICogRW51bWVyYXRpb24gb2YgbGlzdGVuZXIgc2NvcGVzLlxuICAgKlxuICAgKiBAZW51bSB7TGlzdGVuZXJTY29wZX1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBsaXN0ZW5lclNjb3BlOiB7XG4gICAgLyoqIFBhc3QgZXZlbnRzIG9ubHkgKi9cbiAgICBQQVNUOiAncGFzdCcsXG4gICAgLyoqIEZ1dHVyZSBldmVudHMgb25seSAqL1xuICAgIEZVVFVSRTogJ2Z1dHVyZScsXG4gICAgLyoqIEFsbCBldmVudHMsIHBhc3QgYW5kIGZ1dHVyZSAqL1xuICAgIEFMTDogJ2FsbCdcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDT05TVEFOVFM7XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IHZlcnNpb24gPSByZXF1aXJlKCcuLi92ZXJzaW9uLmpzb24nKS52ZXJzaW9uO1xuY29uc3QgY2xvbmVEZWVwID0gXy5jbG9uZURlZXA7XG5jb25zdCBnZXQgPSBfLmdldDtcblxuY29uc3QgSXRlbSA9IHJlcXVpcmUoJy4vaXRlbScpO1xuY29uc3QgTGlzdGVuZXIgPSByZXF1aXJlKCcuL2xpc3RlbmVyJyk7XG5jb25zdCBMaXN0ZW5lck1hbmFnZXIgPSByZXF1aXJlKCcuL2xpc3RlbmVyTWFuYWdlcicpO1xuY29uc3QgQ09OU1RBTlRTID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IGN1c3RvbU1lcmdlID0gcmVxdWlyZSgnLi91dGlscy9jdXN0b21NZXJnZScpO1xuXG4vKipcbiAqIE1hbmFnZXJcbiAqXG4gKiBAY2xhc3MgTWFuYWdlclxuICogQGNsYXNzZGVzYyBEYXRhIExheWVyIG1hbmFnZXIgdGhhdCBhdWdtZW50cyB0aGUgcGFzc2VkIGRhdGEgbGF5ZXIgYXJyYXkgYW5kIGhhbmRsZXMgZXZlbnRpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBEYXRhIExheWVyIG1hbmFnZXIgY29uZmlndXJhdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgX2NvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgbGV0IF9kYXRhTGF5ZXIgPSBbXTtcbiAgbGV0IF9wcmVMb2FkZWRJdGVtcyA9IFtdO1xuICBsZXQgX3N0YXRlID0ge307XG4gIGxldCBfcHJldmlvdXNTdGF0ZUNvcHkgPSB7fTtcbiAgbGV0IF9saXN0ZW5lck1hbmFnZXI7XG5cbiAgY29uc3QgRGF0YUxheWVyTWFuYWdlciA9IHtcbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX3N0YXRlO1xuICAgIH0sXG4gICAgZ2V0RGF0YUxheWVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfZGF0YUxheWVyO1xuICAgIH0sXG4gICAgZ2V0UHJldmlvdXNTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX3ByZXZpb3VzU3RhdGVDb3B5O1xuICAgIH1cbiAgfTtcblxuICBfaW5pdGlhbGl6ZSgpO1xuICBfYXVnbWVudCgpO1xuICBfcHJvY2Vzc0l0ZW1zKCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBkYXRhIGxheWVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF9jb25maWcuZGF0YUxheWVyKSkge1xuICAgICAgX2NvbmZpZy5kYXRhTGF5ZXIgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgcHJlbG9hZGVkIGl0ZW1zIGZyb20gdGhlIGRhdGEgbGF5ZXIgYXJyYXkgYW5kIGFkZCB0aG9zZSB0byB0aGUgYXJyYXkgb2YgcHJlbG9hZGVkIGl0ZW1zXG4gICAgX3ByZUxvYWRlZEl0ZW1zID0gX2NvbmZpZy5kYXRhTGF5ZXIuc3BsaWNlKDAsIF9jb25maWcuZGF0YUxheWVyLmxlbmd0aCk7XG4gICAgX2RhdGFMYXllciA9IF9jb25maWcuZGF0YUxheWVyO1xuICAgIF9kYXRhTGF5ZXIudmVyc2lvbiA9IHZlcnNpb247XG4gICAgX3N0YXRlID0ge307XG4gICAgX3ByZXZpb3VzU3RhdGVDb3B5ID0ge307XG4gICAgX2xpc3RlbmVyTWFuYWdlciA9IExpc3RlbmVyTWFuYWdlcihEYXRhTGF5ZXJNYW5hZ2VyKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3RhdGUgd2l0aCB0aGUgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX3VwZGF0ZVN0YXRlKGl0ZW0pIHtcbiAgICBfcHJldmlvdXNTdGF0ZUNvcHkgPSBjbG9uZURlZXAoX3N0YXRlKTtcbiAgICBfc3RhdGUgPSBjdXN0b21NZXJnZShfc3RhdGUsIGl0ZW0uZGF0YSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1Z21lbnRzIHRoZSBkYXRhIGxheWVyIEFycmF5IE9iamVjdCwgb3ZlcnJpZGluZzogcHVzaCgpIGFuZCBhZGRpbmcgZ2V0U3RhdGUoKSwgYWRkRXZlbnRMaXN0ZW5lciBhbmQgcmVtb3ZlRXZlbnRMaXN0ZW5lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9hdWdtZW50KCkge1xuICAgIC8qKlxuICAgICAqIFB1c2hlcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZGF0YSBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4uSXRlbUNvbmZpZ30gdmFyX2FyZ3MgVGhlIGl0ZW1zIHRvIGFkZCB0byB0aGUgZGF0YSBsYXllci5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbGVuZ3RoIG9mIHRoZSBkYXRhIGxheWVyIGZvbGxvd2luZyBwdXNoLlxuICAgICAqL1xuICAgIF9kYXRhTGF5ZXIucHVzaCA9IGZ1bmN0aW9uKHZhcl9hcmdzKSB7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlICovXG4gICAgICBjb25zdCBwdXNoQXJndW1lbnRzID0gYXJndW1lbnRzO1xuICAgICAgY29uc3QgZmlsdGVyZWRBcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHB1c2hBcmd1bWVudHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db25maWcgPSBwdXNoQXJndW1lbnRzW2tleV07XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBJdGVtKGl0ZW1Db25maWcpO1xuXG4gICAgICAgIGlmICghaXRlbS52YWxpZCkge1xuICAgICAgICAgIF9sb2dJbnZhbGlkSXRlbUVycm9yKGl0ZW0pO1xuICAgICAgICAgIGRlbGV0ZSBmaWx0ZXJlZEFyZ3VtZW50c1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuREFUQTpcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5pdGVtVHlwZS5FVkVOVDoge1xuICAgICAgICAgICAgX3Byb2Nlc3NJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLml0ZW1UeXBlLkZDVE46IHtcbiAgICAgICAgICAgIGRlbGV0ZSBmaWx0ZXJlZEFyZ3VtZW50c1trZXldO1xuICAgICAgICAgICAgX3Byb2Nlc3NJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLml0ZW1UeXBlLkxJU1RFTkVSX09OOlxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLml0ZW1UeXBlLkxJU1RFTkVSX09GRjoge1xuICAgICAgICAgICAgZGVsZXRlIGZpbHRlcmVkQXJndW1lbnRzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpbHRlcmVkQXJndW1lbnRzWzBdKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLCBmaWx0ZXJlZEFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBkZWVwIGNvcHkgb2YgdGhlIGRhdGEgbGF5ZXIgc3RhdGUgb3Igb2YgdGhlIG9iamVjdCBkZWZpbmVkIGJ5IHRoZSBwYXRoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAgICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBhIGRlZXAgY29weSBvZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaWYgYSBwYXRoIGlzIHBhc3NlZCwgYSBkZWVwIGNvcHkgb2YgdGhlIGRhdGEgbGF5ZXIgc3RhdGUgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIF9kYXRhTGF5ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICBpZiAocGF0aCkge1xuICAgICAgICByZXR1cm4gZ2V0KGNsb25lRGVlcChfc3RhdGUpLCBwYXRoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZURlZXAoX3N0YXRlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAY2FsbGJhY2sgZXZlbnRMaXN0ZW5lckNhbGxiYWNrIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgb2YgdGhlIHNwZWNpZmllZCB0eXBlIG9jY3Vycy5cbiAgICAgKiBAdGhpcyB7RGF0YUxheWVyfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IHB1c2hlZCB0byB0aGUgZGF0YSBsYXllciB0aGF0IHRyaWdnZXJlZCB0aGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtiZWZvcmVTdGF0ZV0gVGhlIHN0YXRlIGJlZm9yZSB0aGUgY2hhbmdlIGNhdXNlZCBieSB0aGUgZXZlbnQuIEF2YWlsYWJsZSBvbmx5IHdoZW4gdGhlIGV2ZW50XG4gICAgICogb2JqZWN0IGhhcyBkYXRhIHRoYXQgbW9kaWZ5IHRoZSBzdGF0ZS4gSWYgYSBwYXRoIGZpbHRlciBvcHRpb24gaGFzIGJlZW4gcHJvdmlkZWQgd2hlbiByZWdpc3RlcmluZyB0aGUgZXZlbnQsXG4gICAgICogdGhlIG9iamVjdCB3aWxsIG9ubHkgY29udGFpbiB0aGUgZGF0YSBhdCB0aGUgZGVmaW5lZCBwYXRoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbYWZ0ZXJTdGF0ZV0gVGhlIHN0YXRlIGFmdGVyIHRoZSBjaGFuZ2UgY2F1c2VkIGJ5IHRoZSBldmVudC4gQXZhaWxhYmxlIG9ubHkgd2hlbiB0aGUgZXZlbnRcbiAgICAgKiBvYmplY3QgaGFzIGRhdGEgdGhhdCBtb2RpZnkgdGhlIHN0YXRlLiBJZiBhIHBhdGggZmlsdGVyIG9wdGlvbiBoYXMgYmVlbiBwcm92aWRlZCB3aGVuIHJlZ2lzdGVyaW5nIHRoZSBldmVudCxcbiAgICAgKiB0aGUgb2JqZWN0IHdpbGwgb25seSBjb250YWluIHRoZSBkYXRhIGF0IHRoZSBkZWZpbmVkIHBhdGguXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgc3BlY2lmaWVkIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIEEgY2FzZS1zZW5zaXRpdmUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yLlxuICAgICAqIEBwYXJhbSB7ZXZlbnRMaXN0ZW5lckNhbGxiYWNrfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBvY2N1cnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25hbCBjaGFyYWN0ZXJpc3RpY3Mgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wYXRoXSBUaGUgcGF0aCBpbiB0aGUgc3RhdGUgb2JqZWN0IHRvIGZpbHRlciB0aGUgbGlzdGVuaW5nIHRvLlxuICAgICAqIEBwYXJhbSB7KCdwYXN0J3wnZnV0dXJlJ3wnYWxsJyl9IFtvcHRpb25zLnNjb3BlXSBUaGUgdGltaW5nIHRvIGZpbHRlciB0aGUgbGlzdGVuaW5nIHRvOlxuICAgICAqICAgICAgLSB7U3RyaW5nfSBwYXN0IFRoZSBsaXN0ZW5lciBpcyB0cmlnZ2VyZWQgZm9yIHBhc3QgZXZlbnRzIG9ubHkuXG4gICAgICogICAgICAtIHtTdHJpbmd9IGZ1dHVyZSBUaGUgbGlzdGVuZXIgaXMgdHJpZ2dlcmVkIGZvciBmdXR1cmUgZXZlbnRzIG9ubHkuXG4gICAgICogICAgICAtIHtTdHJpbmd9IGFsbCBUaGUgbGlzdGVuZXIgaXMgdHJpZ2dlcmVkIGZvciBib3RoIHBhc3QgYW5kIGZ1dHVyZSBldmVudHMgKGRlZmF1bHQgdmFsdWUpLlxuICAgICAqL1xuICAgIF9kYXRhTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVySXRlbSA9IEl0ZW0oe1xuICAgICAgICBvbjogdHlwZSxcbiAgICAgICAgaGFuZGxlcjogY2FsbGJhY2ssXG4gICAgICAgIHNjb3BlOiBvcHRpb25zICYmIG9wdGlvbnMuc2NvcGUsXG4gICAgICAgIHBhdGg6IG9wdGlvbnMgJiYgb3B0aW9ucy5wYXRoXG4gICAgICB9KTtcblxuICAgICAgX3Byb2Nlc3NJdGVtKGV2ZW50TGlzdGVuZXJJdGVtKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBwcmV2aW91c2x5IHJlZ2lzdGVyZWQgd2l0aCBhZGRFdmVudExpc3RlbmVyKCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBBIGNhc2Utc2Vuc2l0aXZlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGV2ZW50IHR5cGUgdG8gbGlzdGVuIGZvci5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbGlzdGVuZXJdIE9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgaXMgdG8gYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBfZGF0YUxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lckl0ZW0gPSBJdGVtKHtcbiAgICAgICAgb2ZmOiB0eXBlLFxuICAgICAgICBoYW5kbGVyOiBsaXN0ZW5lclxuICAgICAgfSk7XG5cbiAgICAgIF9wcm9jZXNzSXRlbShldmVudExpc3RlbmVySXRlbSk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGFsbCBpdGVtcyB0aGF0IGFscmVhZHkgZXhpc3Qgb24gdGhlIHN0YWNrLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX3Byb2Nlc3NJdGVtcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wcmVMb2FkZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgX2RhdGFMYXllci5wdXNoKF9wcmVMb2FkZWRJdGVtc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgYW4gaXRlbSBwdXNoZWQgdG8gdGhlIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gcHJvY2Vzcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9wcm9jZXNzSXRlbShpdGVtKSB7XG4gICAgaWYgKCFpdGVtLnZhbGlkKSB7XG4gICAgICBfbG9nSW52YWxpZEl0ZW1FcnJvcihpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyBiZWZvcmUgdGhlIHByb3ZpZGVkIG9uZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8SXRlbT59IFRoZSBpdGVtcyBiZWZvcmUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0QmVmb3JlKGl0ZW0pIHtcbiAgICAgIGlmICghKF9kYXRhTGF5ZXIubGVuZ3RoID09PSAwIHx8IGl0ZW0uaW5kZXggPiBfZGF0YUxheWVyLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgIHJldHVybiBfZGF0YUxheWVyLnNsaWNlKDAsIGl0ZW0uaW5kZXgpLm1hcChpdGVtQ29uZmlnID0+IEl0ZW0oaXRlbUNvbmZpZykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVQcm9jZXNzb3JzID0ge1xuICAgICAgZGF0YTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBfdXBkYXRlU3RhdGUoaXRlbSk7XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudHJpZ2dlckxpc3RlbmVycyhpdGVtKTtcbiAgICAgIH0sXG4gICAgICBmY3RuOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0uY29uZmlnLmNhbGwoX2RhdGFMYXllciwgX2RhdGFMYXllcik7XG4gICAgICB9LFxuICAgICAgZXZlbnQ6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGF0YSkge1xuICAgICAgICAgIF91cGRhdGVTdGF0ZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnRyaWdnZXJMaXN0ZW5lcnMoaXRlbSk7XG4gICAgICB9LFxuICAgICAgbGlzdGVuZXJPbjogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IExpc3RlbmVyKGl0ZW0pO1xuICAgICAgICBzd2l0Y2ggKGxpc3RlbmVyLnNjb3BlKSB7XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMubGlzdGVuZXJTY29wZS5QQVNUOiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlZ2lzdGVyZWRJdGVtIG9mIF9nZXRCZWZvcmUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXIobGlzdGVuZXIsIHJlZ2lzdGVyZWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLkZVVFVSRToge1xuICAgICAgICAgICAgX2xpc3RlbmVyTWFuYWdlci5yZWdpc3RlcihsaXN0ZW5lcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMubGlzdGVuZXJTY29wZS5BTEw6IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSBfbGlzdGVuZXJNYW5hZ2VyLnJlZ2lzdGVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmVnaXN0ZXJlZEl0ZW0gb2YgX2dldEJlZm9yZShpdGVtKSkge1xuICAgICAgICAgICAgICAgIF9saXN0ZW5lck1hbmFnZXIudHJpZ2dlckxpc3RlbmVyKGxpc3RlbmVyLCByZWdpc3RlcmVkSXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lck9mZjogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnVucmVnaXN0ZXIoTGlzdGVuZXIoaXRlbSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0eXBlUHJvY2Vzc29yc1tpdGVtLnR5cGVdKGl0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dzIGVycm9yIGZvciBpbnZhbGlkIGl0ZW0gcHVzaGVkIHRvIHRoZSBkYXRhIGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGludmFsaWQgaXRlbS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9sb2dJbnZhbGlkSXRlbUVycm9yKGl0ZW0pIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ1RoZSBmb2xsb3dpbmcgaXRlbSBjYW5ub3QgYmUgaGFuZGxlZCBieSB0aGUgZGF0YSBsYXllciAnICtcbiAgICAgICdiZWNhdXNlIGl0IGRvZXMgbm90IGhhdmUgYSB2YWxpZCBmb3JtYXQ6ICcgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkoaXRlbS5jb25maWcpO1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH07XG5cbiAgcmV0dXJuIERhdGFMYXllck1hbmFnZXI7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IERhdGFMYXllck1hbmFnZXIgPSByZXF1aXJlKCcuL2RhdGFMYXllck1hbmFnZXInKTtcblxuLyoqXG4gKiBEYXRhIExheWVyLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERhdGFMYXllciA9IHtcbiAgTWFuYWdlcjogRGF0YUxheWVyTWFuYWdlclxufTtcblxud2luZG93LmFkb2JlRGF0YUxheWVyID0gd2luZG93LmFkb2JlRGF0YUxheWVyIHx8IFtdO1xuXG5EYXRhTGF5ZXIuTWFuYWdlcih7XG4gIGRhdGFMYXllcjogd2luZG93LmFkb2JlRGF0YUxheWVyXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiAge09iamVjdH0gTGlzdGVuZXJPbkNvbmZpZ1xuICogQHByb3BlcnR5IHtTdHJpbmd9IG9uIE5hbWUgb2YgdGhlIGV2ZW50IHRvIGJpbmQgdG8uXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW3BhdGhdIE9iamVjdCBrZXkgaW4gdGhlIHN0YXRlIHRvIGJpbmQgdG8uXG4gKiBAcHJvcGVydHkge0xpc3RlbmVyU2NvcGV9IFtzY29wZV0gU2NvcGUgb2YgdGhlIGxpc3RlbmVyLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIHRvIGV4ZWN1dGUgd2hlbiB0aGUgYm91bmQgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgIHtPYmplY3R9IExpc3RlbmVyT2ZmQ29uZmlnXG4gKiBAcHJvcGVydHkge1N0cmluZ30gb2ZmIE5hbWUgb2YgdGhlIGV2ZW50IHRvIHVuYmluZC5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGF0aF0gT2JqZWN0IGtleSBpbiB0aGUgc3RhdGUgdG8gYmluZCB0by5cbiAqIEBwcm9wZXJ0eSB7TGlzdGVuZXJTY29wZX0gW3Njb3BlXSBTY29wZSBvZiB0aGUgbGlzdGVuZXIuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbaGFuZGxlcl0gSGFuZGxlciBmb3IgYSBwcmV2aW91c2x5IGF0dGFjaGVkIGV2ZW50IHRvIHVuYmluZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERhdGFDb25maWdcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgdXBkYXRlZCBpbiB0aGUgc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudENvbmZpZ1xuICogQHByb3BlcnR5IHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHByb3BlcnR5IHtPYmplY3R9IFtldmVudEluZm9dIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gcGFzcyB0byB0aGUgZXZlbnQgaGFuZGxlci5cbiAqIEBwcm9wZXJ0eSB7RGF0YUNvbmZpZy5kYXRhfSBbZGF0YV0gRGF0YSB0byBiZSB1cGRhdGVkIGluIHRoZSBzdGF0ZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtEYXRhQ29uZmlnIHwgRXZlbnRDb25maWcgfCBMaXN0ZW5lck9uQ29uZmlnIHwgTGlzdGVuZXJPZmZDb25maWd9IEl0ZW1Db25maWdcbiAqL1xuXG4vKipcbiAqIFRyaWdnZXJlZCB3aGVuIHRoZXJlIGlzIGNoYW5nZSBpbiB0aGUgZGF0YSBsYXllciBzdGF0ZS5cbiAqXG4gKiBAZXZlbnQgRGF0YUxheWVyRXZlbnQuQ0hBTkdFXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEgRGF0YSBwdXNoZWQgdGhhdCBjYXVzZWQgYSBjaGFuZ2UgaW4gdGhlIGRhdGEgbGF5ZXIgc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBUcmlnZ2VyZWQgd2hlbiBhbiBldmVudCBpcyBwdXNoZWQgdG8gdGhlIGRhdGEgbGF5ZXIuXG4gKlxuICogQGV2ZW50IERhdGFMYXllckV2ZW50LkVWRU5UXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgY29tbWl0dGVkIGV2ZW50LlxuICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50SW5mbyBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHBhc3NlZCB3aXRoIHRoZSBjb21taXR0ZWQgZXZlbnQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSBEYXRhIHRoYXQgd2FzIHB1c2hlZCBhbG9uZ3NpZGUgdGhlIGV2ZW50LlxuICovXG5cbi8qKlxuICogVHJpZ2dlcmVkIHdoZW4gYW4gYXJiaXRyYXJ5IGV2ZW50IGlzIHB1c2hlZCB0byB0aGUgZGF0YSBsYXllci5cbiAqXG4gKiBAZXZlbnQgPGN1c3RvbT5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjb21taXR0ZWQgZXZlbnQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRJbmZvIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcGFzc2VkIHdpdGggdGhlIGNvbW1pdHRlZCBldmVudC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhIERhdGEgdGhhdCB3YXMgcHVzaGVkIGFsb25nc2lkZSB0aGUgZXZlbnQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhTGF5ZXI7XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGlzUGxhaW5PYmplY3QgPSBfLmlzUGxhaW5PYmplY3Q7XG5jb25zdCBpc0VtcHR5ID0gXy5pc0VtcHR5O1xuY29uc3Qgb21pdCA9IF8ub21pdDtcbmNvbnN0IGZpbmQgPSBfLmZpbmQ7XG5cbmNvbnN0IGRhdGFNYXRjaGVzQ29udHJhaW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzJyk7XG5jb25zdCBJVEVNX0NPTlNUUkFJTlRTID0gcmVxdWlyZSgnLi9pdGVtQ29uc3RyYWludHMnKTtcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGRhdGEgbGF5ZXIgaXRlbS5cbiAqXG4gKiBAcGFyYW0ge0l0ZW1Db25maWd9IGl0ZW1Db25maWcgVGhlIGRhdGEgbGF5ZXIgaXRlbSBjb25maWd1cmF0aW9uLlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpdGVtIGluZGV4IGluIHRoZSBhcnJheSBvZiBleGlzdGluZyBpdGVtcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZW1Db25maWcsIGluZGV4KSB7XG4gIGNvbnN0IF9jb25maWcgPSBpdGVtQ29uZmlnO1xuICBjb25zdCBfaW5kZXggPSBpbmRleDtcbiAgY29uc3QgX3R5cGUgPSBnZXRUeXBlKCk7XG4gIGNvbnN0IF9kYXRhID0gZ2V0RGF0YSgpO1xuICBjb25zdCBfdmFsaWQgPSAhIV90eXBlO1xuXG4gIGZ1bmN0aW9uIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIGZpbmQoT2JqZWN0LmtleXMoSVRFTV9DT05TVFJBSU5UUyksIGtleSA9PiBkYXRhTWF0Y2hlc0NvbnRyYWludHMoX2NvbmZpZywgSVRFTV9DT05TVFJBSU5UU1trZXldKSkgfHxcbiAgICAgICh0eXBlb2YgX2NvbmZpZyA9PT0gJ2Z1bmN0aW9uJyAmJiBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTikgfHxcbiAgICAgIChpc1BsYWluT2JqZWN0KF9jb25maWcpICYmIENPTlNUQU5UUy5pdGVtVHlwZS5EQVRBKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IG9taXQoX2NvbmZpZywgT2JqZWN0LmtleXMoSVRFTV9DT05TVFJBSU5UUy5ldmVudCkpO1xuICAgIGlmICghaXNFbXB0eShkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7SXRlbUNvbmZpZ30gVGhlIGl0ZW0gY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBjb25maWc6IF9jb25maWcsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aXRlbVR5cGV9IFRoZSBpdGVtIHR5cGUuXG4gICAgICovXG4gICAgdHlwZTogX3R5cGUsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RGF0YUNvbmZpZ30gVGhlIGl0ZW0gZGF0YS5cbiAgICAgKi9cbiAgICBkYXRhOiBfZGF0YSxcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVtIGlzIHZhbGlkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICB2YWxpZDogX3ZhbGlkLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IG9mIGV4aXN0aW5nIGl0ZW1zIChhZGRlZCB3aXRoIHRoZSBzdGFuZGFyZCBBcnJheS5wcm90b3R5cGUucHVzaCgpKVxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBhcnJheSBvZiBleGlzdGluZyBpdGVtcyBpZiBpdCBleGlzdHMsIC0xIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpbmRleDogX2luZGV4XG4gIH07XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi8qKlxuICogQ29uc3RyYWludHMgZm9yIGVhY2ggdHlwZSBvZiB0aGUgaXRlbSBjb25maWd1cmF0aW9uLlxuICovXG5cbmNvbnN0IGl0ZW1Db25zdHJhaW50cyA9IHtcbiAgZXZlbnQ6IHtcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGV2ZW50SW5mbzoge1xuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9XG4gIH0sXG4gIGxpc3RlbmVyT246IHtcbiAgICBvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlczogWydwYXN0JywgJ2Z1dHVyZScsICdhbGwnXSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICBwYXRoOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfVxuICB9LFxuICBsaXN0ZW5lck9mZjoge1xuICAgIG9mZjoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH0sXG4gICAgc2NvcGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgdmFsdWVzOiBbJ3Bhc3QnLCAnZnV0dXJlJywgJ2FsbCddLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9LFxuICAgIHBhdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXRlbUNvbnN0cmFpbnRzO1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGRhdGEgbGF5ZXIgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtIGZyb20gd2hpY2ggdG8gY29uc3RydWN0IHRoZSBsaXN0ZW5lci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY29uc3QgX2V2ZW50ID0gaXRlbS5jb25maWcub24gfHwgaXRlbS5jb25maWcub2ZmO1xuICBjb25zdCBfaGFuZGxlciA9IGl0ZW0uY29uZmlnLmhhbmRsZXIgfHwgbnVsbDtcbiAgY29uc3QgX3Njb3BlID0gaXRlbS5jb25maWcuc2NvcGUgfHwgKGl0ZW0uY29uZmlnLm9uICYmIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLkFMTCkgfHwgbnVsbDtcbiAgY29uc3QgX3BhdGggPSBpdGVtLmNvbmZpZy5wYXRoIHx8IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lciBldmVudCBuYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxpc3RlbmVyIGV2ZW50IG5hbWUuXG4gICAgICovXG4gICAgZXZlbnQ6IF9ldmVudCxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KEZ1bmN0aW9ufG51bGwpfSBUaGUgbGlzdGVuZXIgaGFuZGxlci5cbiAgICAgKi9cbiAgICBoYW5kbGVyOiBfaGFuZGxlcixcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIHNjb3BlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyhTdHJpbmd8bnVsbCl9IFRoZSBsaXN0ZW5lciBzY29wZS5cbiAgICAgKi9cbiAgICBzY29wZTogX3Njb3BlLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXIgcGF0aC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsoU3RyaW5nfG51bGwpfSBUaGUgbGlzdGVuZXIgcGF0aC5cbiAgICAgKi9cbiAgICBwYXRoOiBfcGF0aFxuICB9O1xufTtcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgY2xvbmVEZWVwID0gXy5jbG9uZURlZXA7XG5jb25zdCBnZXQgPSBfLmdldDtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IGxpc3RlbmVyTWF0Y2ggPSByZXF1aXJlKCcuL3V0aWxzL2xpc3RlbmVyTWF0Y2gnKTtcbmNvbnN0IGluZGV4T2ZMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvaW5kZXhPZkxpc3RlbmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpc3RlbmVyIG1hbmFnZXIuXG4gKlxuICogQHBhcmFtIHtNYW5hZ2VyfSBkYXRhTGF5ZXJNYW5hZ2VyIFRoZSBkYXRhIGxheWVyIG1hbmFnZXIuXG4gKiBAcmV0dXJucyB7TGlzdGVuZXJNYW5hZ2VyfSBBIGxpc3RlbmVyIG1hbmFnZXIuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGF0YUxheWVyTWFuYWdlcikge1xuICBjb25zdCBfbGlzdGVuZXJzID0ge307XG4gIGNvbnN0IF9kYXRhTGF5ZXJNYW5hZ2VyID0gZGF0YUxheWVyTWFuYWdlcjtcblxuICAvKipcbiAgICogRmluZCBpbmRleCBvZiBsaXN0ZW5lciBpbiBsaXN0ZW5lcnMgb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgX2luZGV4T2ZMaXN0ZW5lciA9IGluZGV4T2ZMaXN0ZW5lci5iaW5kKG51bGwsIF9saXN0ZW5lcnMpO1xuXG4gIGNvbnN0IExpc3RlbmVyTWFuYWdlciA9IHtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byByZWdpc3Rlci5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbGlzdGVuZXIuZXZlbnQ7XG5cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2xpc3RlbmVycywgZXZlbnQpKSB7XG4gICAgICAgIGlmIChfaW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgICAgICBfbGlzdGVuZXJzW2xpc3RlbmVyLmV2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2xpc3RlbmVyc1tsaXN0ZW5lci5ldmVudF0gPSBbbGlzdGVuZXJdO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIGEgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gdW5yZWdpc3Rlci5cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyOiBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgY29uc3QgZXZlbnQgPSBsaXN0ZW5lci5ldmVudDtcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfbGlzdGVuZXJzLCBldmVudCkpIHtcbiAgICAgICAgaWYgKCEobGlzdGVuZXIuaGFuZGxlciB8fCBsaXN0ZW5lci5zY29wZSB8fCBsaXN0ZW5lci5wYXRoKSkge1xuICAgICAgICAgIF9saXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBfaW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgX2xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGxpc3RlbmVycyByZWxhdGVkIHRvIHRoZSBwYXNzZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBJdGVtIHRvIHRyaWdnZXIgbGlzdGVuZXIgZm9yLlxuICAgICAqL1xuICAgIHRyaWdnZXJMaXN0ZW5lcnM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJlZEV2ZW50cyA9IF9nZXRUcmlnZ2VyZWRFdmVudHMoaXRlbSk7XG4gICAgICB0cmlnZ2VyZWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9saXN0ZW5lcnMsIGV2ZW50KSkge1xuICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgX2xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIF9jYWxsSGFuZGxlcihsaXN0ZW5lciwgaXRlbSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBhIHNpbmdsZSBsaXN0ZW5lciBvbiB0aGUgcGFzc2VkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBJdGVtIHRvIGNhbGwgdGhlIGxpc3RlbmVyIHdpdGguXG4gICAgICovXG4gICAgdHJpZ2dlckxpc3RlbmVyOiBmdW5jdGlvbihsaXN0ZW5lciwgaXRlbSkge1xuICAgICAgX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBsaXN0ZW5lciBoYW5kbGVyIG9uIHRoZSBpdGVtIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUGFzdEl0ZW0gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGl0ZW0gd2FzIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBsaXN0ZW5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9jYWxsSGFuZGxlcihsaXN0ZW5lciwgaXRlbSwgaXNQYXN0SXRlbSkge1xuICAgIGlmIChsaXN0ZW5lck1hdGNoKGxpc3RlbmVyLCBpdGVtKSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tBcmdzID0gW2Nsb25lRGVlcChpdGVtLmNvbmZpZyldO1xuXG4gICAgICBpZiAoaXRlbS5kYXRhKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lci5wYXRoKSB7XG4gICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQoX2RhdGFMYXllck1hbmFnZXIuZ2V0UHJldmlvdXNTdGF0ZSgpLCBsaXN0ZW5lci5wYXRoKTtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGdldChjbG9uZURlZXAoaXRlbS5kYXRhKSwgbGlzdGVuZXIucGF0aCk7XG4gICAgICAgICAgY2FsbGJhY2tBcmdzLnB1c2gob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNQYXN0SXRlbSkge1xuICAgICAgICAgIGNvbnN0IG9sZFN0YXRlID0gX2RhdGFMYXllck1hbmFnZXIuZ2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gY2xvbmVEZWVwKF9kYXRhTGF5ZXJNYW5hZ2VyLmdldFN0YXRlKCkpO1xuICAgICAgICAgIGNhbGxiYWNrQXJncy5wdXNoKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXIuaGFuZGxlci5hcHBseShfZGF0YUxheWVyTWFuYWdlci5nZXREYXRhTGF5ZXIoKSwgY2FsbGJhY2tBcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZXMgb2YgdGhlIGV2ZW50cyB0aGF0IGFyZSB0cmlnZ2VyZWQgZm9yIHRoaXMgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U3RyaW5nPn0gVGhlIG5hbWVzIG9mIHRoZSBldmVudHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGZvciB0aGlzIGl0ZW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0VHJpZ2dlcmVkRXZlbnRzKGl0ZW0pIHtcbiAgICBjb25zdCB0cmlnZ2VyZWRFdmVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICBjYXNlIGNvbnN0YW50cy5pdGVtVHlwZS5EQVRBOiB7XG4gICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgY29uc3RhbnRzLml0ZW1UeXBlLkVWRU5UOiB7XG4gICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5FVkVOVCk7XG4gICAgICAgIGlmIChpdGVtLmRhdGEpIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpO1xuICAgICAgICBpZiAoaXRlbS5jb25maWcuZXZlbnQgIT09IGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpIHtcbiAgICAgICAgICB0cmlnZ2VyZWRFdmVudHMucHVzaChpdGVtLmNvbmZpZy5ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmlnZ2VyZWRFdmVudHM7XG4gIH1cblxuICByZXR1cm4gTGlzdGVuZXJNYW5hZ2VyO1xufTtcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgaGFzID0gXy5oYXM7XG5jb25zdCBnZXQgPSBfLmdldDtcblxuLyoqXG4gICogQ2hlY2tzIGlmIHRoZSBvYmplY3QgY29udGFpbnMgYW4gYW5jZXN0b3IgdGhhdCBpcyBzZXQgdG8gbnVsbCBvciB1bmRlZmluZWQuXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2hlY2suXG4gICogQHBhcmFtIHtTdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBjb250YWlucyBhbiBhbmNlc3RvciB0aGF0IGlzIHNldCB0byBudWxsIG9yIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAqIEBwcml2YXRlXG4gICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgcGF0aCkge1xuICBsZXQgYW5jZXN0b3JQYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZignLicpKTtcbiAgd2hpbGUgKGFuY2VzdG9yUGF0aCkge1xuICAgIGlmIChoYXMob2JqZWN0LCBhbmNlc3RvclBhdGgpKSB7XG4gICAgICBjb25zdCBhbmNlc3RvclZhbHVlID0gZ2V0KG9iamVjdCwgYW5jZXN0b3JQYXRoKTtcbiAgICAgIGlmIChhbmNlc3RvclZhbHVlID09PSBudWxsIHx8IGFuY2VzdG9yVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYW5jZXN0b3JQYXRoID0gYW5jZXN0b3JQYXRoLnN1YnN0cmluZygwLCBhbmNlc3RvclBhdGgubGFzdEluZGV4T2YoJy4nKSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi8uLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBjbG9uZURlZXBXaXRoID0gXy5jbG9uZURlZXBXaXRoO1xuY29uc3QgaXNPYmplY3QgPSBfLmlzT2JqZWN0O1xuY29uc3QgaXNBcnJheSA9IF8uaXNBcnJheTtcbmNvbnN0IHJlamVjdCA9IF8ucmVqZWN0O1xuY29uc3QgbWVyZ2VXaXRoID0gXy5tZXJnZVdpdGg7XG5jb25zdCBpc051bGwgPSBfLmlzTnVsbDtcblxuLyoqXG4gKiBNZXJnZXMgdGhlIHNvdXJjZSBpbnRvIHRoZSBvYmplY3QgYW5kIHNldHMgb2JqZWN0cyBhcyAndW5kZWZpbmVkJyBpZiB0aGV5IGFyZSAndW5kZWZpbmVkJyBpbiB0aGUgc291cmNlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgaW50byB3aGljaCB0byBtZXJnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSB0byBtZXJnZSB3aXRoLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIG9iamVjdCBpbnRvIHdoaWNoIHNvdXJjZSB3YXMgbWVyZ2VkIGluLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGNvbnN0IG1ha2VPbWl0dGluZ0Nsb25lRGVlcEN1c3RvbWl6ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gb21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCh2YWx1ZSwgcHJlZGljYXRlKS5tYXAoaXRlbSA9PiBjbG9uZURlZXBXaXRoKGl0ZW0sIG9taXR0aW5nQ2xvbmVEZWVwQ3VzdG9taXplcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvbmUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBzdWJLZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG4gICAgICAgICAgaWYgKCFwcmVkaWNhdGUodmFsdWVbc3ViS2V5XSkpIHtcbiAgICAgICAgICAgIGNsb25lW3N1YktleV0gPSBjbG9uZURlZXBXaXRoKHZhbHVlW3N1YktleV0sIG9taXR0aW5nQ2xvbmVEZWVwQ3VzdG9taXplcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjdXN0b21pemVyID0gZnVuY3Rpb24ob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCkge1xuICAgIGlmICh0eXBlb2Ygc3JjVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHNyY1ZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb21pdERlZXAgPSBmdW5jdGlvbih2YWx1ZSwgcHJlZGljYXRlID0gKHZhbCkgPT4gIXZhbCkge1xuICAgIHJldHVybiBjbG9uZURlZXBXaXRoKHZhbHVlLCBtYWtlT21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKHByZWRpY2F0ZSkpO1xuICB9O1xuXG4gIG1lcmdlV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcik7XG5cbiAgLy8gUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIG9iamVjdHNcbiAgb2JqZWN0ID0gb21pdERlZXAob2JqZWN0LCBpc051bGwpO1xuXG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi8uLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBmaW5kID0gXy5maW5kO1xuY29uc3QgaW5jbHVkZXMgPSBfLmluY2x1ZGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRhdGEsIGNvbnN0cmFpbnRzKSB7XG4gIC8vIEdvIHRocm91Z2ggYWxsIGNvbnN0cmFpbnRzIGFuZCBmaW5kIG9uZSB3aGljaCBkb2VzIG5vdCBtYXRjaCB0aGUgZGF0YVxuICBjb25zdCBmb3VuZE9iamVjdGlvbiA9IGZpbmQoT2JqZWN0LmtleXMoY29uc3RyYWludHMpLCBrZXkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBjb25zdHJhaW50c1trZXldLnR5cGU7XG4gICAgY29uc3Qgc3VwcG9ydGVkVmFsdWVzID0ga2V5ICYmIGNvbnN0cmFpbnRzW2tleV0udmFsdWVzO1xuICAgIGNvbnN0IG1hbmRhdG9yeSA9ICFjb25zdHJhaW50c1trZXldLm9wdGlvbmFsO1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBjb25zdCBpbmNvcnJlY3RUeXBlID0gdHlwZSAmJiB2YWx1ZVR5cGUgIT09IHR5cGU7XG4gICAgY29uc3Qgbm9NYXRjaEZvclN1cHBvcnRlZFZhbHVlcyA9IHN1cHBvcnRlZFZhbHVlcyAmJiAhaW5jbHVkZXMoc3VwcG9ydGVkVmFsdWVzLCB2YWx1ZSk7XG4gICAgaWYgKG1hbmRhdG9yeSkge1xuICAgICAgcmV0dXJuICF2YWx1ZSB8fCBpbmNvcnJlY3RUeXBlIHx8IG5vTWF0Y2hGb3JTdXBwb3J0ZWRWYWx1ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSAmJiAoaW5jb3JyZWN0VHlwZSB8fCBub01hdGNoRm9yU3VwcG9ydGVkVmFsdWVzKTtcbiAgICB9XG4gIH0pO1xuICAvLyBJZiBubyBvYmplY3Rpb25zIGZvdW5kIHRoZW4gZGF0YSBtYXRjaGVzIGNvbnRyYWludHNcbiAgcmV0dXJuIHR5cGVvZiBmb3VuZE9iamVjdGlvbiA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi8uLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBpc0VxdWFsID0gXy5pc0VxdWFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3RlbmVycywgbGlzdGVuZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBsaXN0ZW5lci5ldmVudDtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxpc3RlbmVycywgZXZlbnQpKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHJlZ2lzdGVyZWRMaXN0ZW5lcl0gb2YgbGlzdGVuZXJzW2V2ZW50XS5lbnRyaWVzKCkpIHtcbiAgICAgIGlmIChpc0VxdWFsKHJlZ2lzdGVyZWRMaXN0ZW5lci5oYW5kbGVyLCBsaXN0ZW5lci5oYW5kbGVyKSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uLy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGhhcyA9IF8uaGFzO1xuXG5jb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IGFuY2VzdG9yUmVtb3ZlZCA9IHJlcXVpcmUoJy4vYW5jZXN0b3JSZW1vdmVkJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBsaXN0ZW5lciBtYXRjaGVzIHRoZSBpdGVtLlxuICpcbiAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lci5cbiAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGxpc3RlbmVyIG1hdGNoZXMgdGhlIGl0ZW0sIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXJNYXRjaChsaXN0ZW5lciwgaXRlbSkge1xuICBjb25zdCBldmVudCA9IGxpc3RlbmVyLmV2ZW50O1xuICBjb25zdCBpdGVtQ29uZmlnID0gaXRlbS5jb25maWc7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgaWYgKGl0ZW0udHlwZSA9PT0gQ09OU1RBTlRTLml0ZW1UeXBlLkRBVEEpIHtcbiAgICBpZiAoZXZlbnQgPT09IENPTlNUQU5UUy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpIHtcbiAgICAgIG1hdGNoZXMgPSBzZWxlY3Rvck1hdGNoZXMobGlzdGVuZXIsIGl0ZW0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5FVkVOVCkge1xuICAgIGlmIChldmVudCA9PT0gQ09OU1RBTlRTLmRhdGFMYXllckV2ZW50LkVWRU5UIHx8IGV2ZW50ID09PSBpdGVtQ29uZmlnLmV2ZW50KSB7XG4gICAgICBtYXRjaGVzID0gc2VsZWN0b3JNYXRjaGVzKGxpc3RlbmVyLCBpdGVtKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uZGF0YSAmJiBldmVudCA9PT0gQ09OU1RBTlRTLmRhdGFMYXllckV2ZW50LkNIQU5HRSkge1xuICAgICAgbWF0Y2hlcyA9IHNlbGVjdG9yTWF0Y2hlcyhsaXN0ZW5lciwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdGVuZXIgaGFzIGEgc2VsZWN0b3IgdGhhdCBwb2ludHMgdG8gYW4gb2JqZWN0IGluIHRoZSBkYXRhIHBheWxvYWQgb2YgYW4gaXRlbS5cbiAqXG4gKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gZXh0cmFjdCB0aGUgc2VsZWN0b3IgZnJvbS5cbiAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgc2VsZWN0b3IgaXMgbm90IHByb3ZpZGVkIG9yIGlmIHRoZSBnaXZlbiBzZWxlY3RvciBpcyBtYXRjaGluZywgZmFsc2Ugb3RoZXJ3aXNlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKGxpc3RlbmVyLCBpdGVtKSB7XG4gIGlmIChpdGVtLmRhdGEgJiYgbGlzdGVuZXIucGF0aCkge1xuICAgIHJldHVybiBoYXMoaXRlbS5kYXRhLCBsaXN0ZW5lci5wYXRoKSB8fCBhbmNlc3RvclJlbW92ZWQoaXRlbS5kYXRhLCBsaXN0ZW5lci5wYXRoKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbmVyTWF0Y2g7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwidmVyc2lvblwiOiBcIjEuMS40XCJcbn1cbiJdfQ==
