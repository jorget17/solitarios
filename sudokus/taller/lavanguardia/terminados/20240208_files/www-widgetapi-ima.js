(function(){'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)fa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ha});
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function y(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function qa(){this.v=!1;this.l=null;this.h=void 0;this.g=1;this.s=this.m=0;this.K=this.i=null}
function ra(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
qa.prototype.D=function(a){this.h=a};
function sa(a,b){a.i={Bc:b,Kc:!0};a.g=a.m||a.s}
qa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
qa.prototype.C=function(a){this.g=a};
function ta(a,b,c){a.m=b;void 0!=c&&(a.s=c)}
function ua(a){a.m=0;var b=a.i.Bc;a.i=null;return b}
function xa(a){var b=a.K.splice(0)[0];(b=a.i=a.i||b)?b.Kc?a.g=a.m||a.s:void 0!=b.C&&a.s<b.C?(a.g=b.C,a.i=null):a.g=a.s:a.g=0}
function ya(a){this.g=new qa;this.h=a}
function za(a,b){ra(a.g);var c=a.g.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.v=!1,e;var f=e.value}catch(g){return a.g.l=null,sa(a.g,g),Ba(a)}a.g.l=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.v=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,sa(a.g,c)}a.g.v=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.Kc)throw b.Bc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ra(a.g);a.g.l?b=Aa(a,a.g.l.next,b,a.g.D):(a.g.D(b),b=Ba(a));return b};
this.throw=function(b){ra(a.g);a.g.l?b=Aa(a,a.g.l["throw"],b,a.g.D):(sa(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.m()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.m=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ha),reject:g(this.m)}};
b.prototype.ha=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.oa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.s(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.Ba(h,g):this.s(g)};
b.prototype.m=function(g){this.D(2,g)};
b.prototype.s=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.na();this.K()};
b.prototype.na=function(){var g=this;e(function(){if(g.T()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.T=function(){if(this.v)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.K=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.oa=function(g){var h=this.l();g.Hb(h.resolve,h.reject)};
b.prototype.Ba=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(t){try{l(r(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.Hb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Hb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).Hb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){r[t]=u;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).Hb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&fa(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&fa(k,g)&&fa(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&fa(k,g)&&fa(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&fa(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||na});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;function Ja(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Ra)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ua;return Va.apply(null,arguments)}
function Wa(){return Date.now()}
function F(a,b){a=a.split(".");var c=D;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Te=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";var $a;function ab(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Za.call(this,c+a[d])}
Xa(ab,Za);ab.prototype.name="AssertionError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.some?function(a,b){Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c&&!(e in d&&b.call(void 0,d[e],e,a));e++);
};
function hb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a){return Array.prototype.concat.apply([],arguments)}
function jb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){if(void 0===vb){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){D.console&&D.console.error(c.message)}vb=a}else vb=a}return vb}
;function xb(a,b){this.g=a===yb&&b||"";this.h=zb}
xb.prototype.toString=function(){return this.g};
function Ab(a){return new xb(yb,a)}
var zb={},yb={};Ab("");function Bb(a){this.g=a}
Bb.prototype.toString=function(){return this.g+""};
var Cb={};function Db(a){this.g=a}
Db.prototype.toString=function(){return this.g.toString()};
function Eb(a){if(a instanceof Db&&a.constructor===Db)return a.g;Ka(a);return"type_error:SafeUrl"}
var Fb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Hb(a){if(a instanceof Db)return a;a=String(a);Gb.test(a)?a=new Db(a,Ib):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(Fb)?new Db(a,Ib):null);return a}
var Ib={},Jb=new Db("about:invalid#zClosurez",Ib);var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Lb=/&/g,Mb=/</g,Nb=/>/g,Ob=/"/g,Pb=/'/g,Qb=/\x00/g,Rb=/[\x00&<>"']/;var Sb={};function Tb(a){this.g=a}
Tb.prototype.toString=function(){return this.g.toString()};
var Ub=new Tb("",Sb);
function Vb(a){if(a instanceof Db)return'url("'+Eb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof xb)a=a instanceof xb&&a.constructor===xb&&a.h===zb?a.g:"type_error:Const";else{a=String(a);var b=a.replace(Wb,"$1").replace(Wb,"$1").replace(Xb,"url");if(Yb.test(b)){if(b=!Zb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&$b(a)}a=b?dc(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new ab("Value does not allow [{;}], got: %s.",[a]);
return a}
function $b(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Yb=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),Xb=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Wb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Zb=/\/\*/;function dc(a){return a.replace(Xb,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=(Hb(d)||Jb).toString();return c+f+b+f+e})}
;var ec={};function fc(a){this.g=a}
fc.prototype.toString=function(){return this.g.toString()};var gc=Ja(610401301,!1),hc=Ja(572417392,!0);function ic(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var jc,kc=D.navigator;jc=kc?kc.userAgentData||null:null;function lc(a){return gc?jc?jc.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function G(a){return-1!=ic().indexOf(a)}
;function mc(){return gc?!!jc&&0<jc.brands.length:!1}
function nc(){return mc()?!1:G("Trident")||G("MSIE")}
function oc(){return mc()?lc("Chromium"):(G("Chrome")||G("CriOS"))&&!(mc()?0:G("Edge"))||G("Silk")}
;function pc(a){this.g=a}
pc.prototype.toString=function(){return this.g.toString()};var qc=/^[\w+/_-]+[=]{0,2}$/;function rc(){var a=D.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&qc.test(a)?a:"":""}
;function sc(a){Rb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Lb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Mb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Nb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Ob,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Pb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Qb,"&#0;")));return a}
function tc(){return"cssText".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function uc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wc(a){return a?decodeURI(a):a}
function xc(a){return wc(a.match(vc)[3]||null)}
function yc(a){var b=a.match(vc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function zc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ac(a){var b=[],c;for(c in a)zc(c,a[c],b);return b.join("&")}
var Bc=/#|$/;function Cc(a,b){var c=a.search(Bc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Dc(a){D.setTimeout(function(){throw a;},0)}
;function Ec(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function Fc(a){Fc[" "](a);return a}
Fc[" "]=function(){};var Gc=mc()?!1:G("Opera"),Hc=nc(),Ic=G("Edge"),Jc=Ic||Hc,Kc=G("Gecko")&&!(-1!=ic().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Lc=-1!=ic().toLowerCase().indexOf("webkit")&&!G("Edge");function Mc(){var a=D.document;return a?a.documentMode:void 0}
var Nc;a:{var Sc="",Tc=function(){var a=ic();if(Kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ic)return/Edge\/([\d\.]+)/.exec(a);if(Hc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Lc)return/WebKit\/(\S+)/.exec(a);if(Gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Tc&&(Sc=Tc?Tc[1]:"");if(Hc){var Uc=Mc();if(null!=Uc&&Uc>parseFloat(Sc)){Nc=String(Uc);break a}}Nc=Sc}var Vc=Nc,Wc;if(D.document&&Hc){var Xc=Mc();Wc=Xc?Xc:parseInt(Vc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||G("iPod"),$c=G("iPad");!G("Android")||oc();oc();var ad=G("Safari")&&!(oc()||(mc()?0:G("Coast"))||(mc()?0:G("Opera"))||(mc()?0:G("Edge"))||(mc()?lc("Microsoft Edge"):G("Edg/"))||(mc()?lc("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(Ec()||G("iPad")||G("iPod"));var bd={},cd=null;
function dd(a,b){La(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array,fd=!Hc&&"function"===typeof btoa;function gd(){return"function"===typeof BigInt}
var hd=!hc,id=!hc;var jd=0,kd=0;function ld(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(md(c,a)),b=c.next().value,a=c.next().value,c=b);jd=c>>>0;kd=a>>>0}
function nd(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else gd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+od(c)+od(a));return c}
function od(a){a=String(a);return"0000000".slice(a.length)+a}
function pd(){var a=jd,b=kd;b&2147483648?gd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(md(a,b)),a=b.next().value,b=b.next().value,a="-"+nd(a,b)):a=nd(a,b);return a}
function qd(a){if(16>a.length)ld(Number(a));else if(gd())a=BigInt(a),jd=Number(a&BigInt(4294967295))>>>0,kd=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+("-"===a[0]);kd=jd=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),kd*=1E6,jd=1E6*jd+d,4294967296<=jd&&(kd+=Math.trunc(jd/4294967296),kd>>>=0,jd>>>=0);b&&(b=w(md(jd,kd)),a=b.next().value,b=b.next().value,jd=a,kd=b)}}
function md(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function rd(a){return Array.prototype.slice.call(a)}
;var sd;sd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({Fe:1,De:2,Ce:4,Ie:8,He:16,Ge:32,se:64,Ke:128,Ae:256,ze:512,Ee:1024,xe:2048,Je:4096,ye:8192})));var td=sd?function(a,b){a[sd]|=b}:function(a,b){void 0!==a.ra?a.ra|=b:Object.defineProperties(a,{ra:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function ud(a){var b=vd(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=rd(a)),wd(a,b|1))}
var xd=sd?function(a,b){a[sd]&=~b}:function(a,b){void 0!==a.ra&&(a.ra&=~b)};
function yd(a,b,c){return c?a|b:a&~b}
var vd=sd?function(a){return a[sd]|0}:function(a){return a.ra|0},zd=sd?function(a){return a[sd]}:function(a){return a.ra},wd=sd?function(a,b){a[sd]=b;
return a}:function(a,b){void 0!==a.ra?a.ra=b:Object.defineProperties(a,{ra:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function Ad(){var a=[];td(a,1);return a}
function Bd(a,b){wd(b,(a|0)&-14591)}
function Cd(a,b){wd(b,(a|34)&-14557)}
function Dd(a){a=a>>14&1023;return 0===a?536870912:a}
;var Ed={},Fd={};function Gd(a){return!(!a||"object"!==typeof a||a.g!==Fd)}
function Hd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Md,Nd=!hc;function Od(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=vd(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;wd(a,d|1);return!0}
var Pd,Qd=[];wd(Qd,55);Pd=Object.freeze(Qd);function Rd(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});function Sd(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function Td(a){return a.displayName||a.name||"unknown type name"}
function Ud(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return a}
var Vd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Wd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Vd.test(a)}
function Xd(a,b){b=!!b;if(!Wd(a))throw Sd("int64");if("string"===typeof a)Wd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=String(b):(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),Yd(a)||(qd(a),a=pd()));else if(b)Wd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Yd(b)?a=b:(ld(a),a=pd()));else if(Wd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){ld(a);b=jd;var c=kd;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Zd(a){return null==a?a:Xd(a)}
function $d(a){return"-"===a[0]?!1:20>a.length?!0:20===a.length&&184467>Number(a.substring(0,6))}
function Yd(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function ae(a){if(0>a){ld(a);var b=nd(jd,kd);a=Number(b);return Number.isSafeInteger(a)?a:b}if($d(String(a)))return a;ld(a);return 4294967296*kd+(jd>>>0)}
function be(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function ce(a){return null==a||"string"===typeof a?a:void 0}
function de(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Td(b)+" but got "+(a&&Td(a.constructor)));return a}
function ee(a,b,c){if(null!=a&&"object"===typeof a&&a.ec===Ed)return a;if(Array.isArray(a)){var d=vd(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&wd(a,e);return new b(a)}}
;var fe;function H(a,b,c){null==a&&(a=fe);fe=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=vd(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(Hd(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}wd(a,d);return a}
;function ge(a,b){return he(b)}
function he(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return Nd||!Od(a,void 0,9999)?a:void 0;if(ed&&null!=a&&a instanceof Uint8Array){if(fd){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=dd(a);return a}}}return a}
;function ie(a,b,c){a=rd(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function je(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&vd(a)&1?void 0:f&&vd(a)&2?a:ke(a,b,c,void 0!==d,e,f);else if(Hd(a)){var g={},h;for(h in a)g[h]=je(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function ke(a,b,c,d,e,f){var g=d||c?vd(a):0;d=d?!!(g&32):void 0;a=rd(a);for(var h=0;h<a.length;h++)a[h]=je(a[h],b,c,d,e,f);c&&c(g,a);return a}
function le(a){return a.ec===Ed?a.toJSON():he(a)}
;function me(a,b,c){c=void 0===c?Cd:c;if(null!=a){if(ed&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=vd(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?wd(a,(d|34)&-12293):ke(a,me,d&4?Cd:c,!0,!1,!0)}a.ec===Ed&&(c=a.u,d=zd(c),a=d&2?a:ne(a,c,d,!0));return a}}
function ne(a,b,c,d){a=a.constructor;b=oe(b,c,d);vd(b);fe=b;b=new a(b);fe=void 0;return b}
function oe(a,b,c){var d=c||b&2?Cd:Bd,e=!!(b&32);a=ie(a,b,function(f){return me(f,e,d)});
td(a,32|(c?2:0));return a}
function pe(a){var b=a.u,c=zd(b);return c&2?ne(a,b,c,!1):a}
;function qe(a,b){a=a.u;return re(a,zd(a),b)}
function re(a,b,c,d){if(-1===c)return null;if(c>=Dd(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function se(a,b,c){var d=a.u,e=zd(d);Rd(e);te(d,e,b,c);return a}
function te(a,b,c,d,e){Hd(d);var f=Dd(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&wd(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function ue(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ve(a,b,c,d){a=a.u;var e=zd(a);Rd(e);(c=we(a,e,c))&&c!==b&&null!=d&&(e=te(a,e,c));te(a,e,b,d)}
function xe(a,b,c){a=a.u;return we(a,zd(a),b)===c?c:-1}
function we(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=re(a,b,f)&&(0!==d&&(b=te(a,b,d)),d=f)}return d}
function ye(a,b,c){var d=void 0===d?!1:d;var e=a.u;var f=zd(e),g=re(e,f,c,d);b=ee(g,b,f);b!==g&&null!=b&&te(e,f,c,b,d);e=b;if(null==e)return e;a=a.u;f=zd(a);f&2||(g=pe(e),g!==e&&(e=g,te(a,f,c,e,d)));return e}
function I(a,b,c,d){null!=d?de(d,b):d=void 0;return se(a,c,d)}
function ze(a,b,c,d,e){null!=e?de(e,b):e=void 0;ve(a,c,d,e)}
function Ae(a,b){var c=!0;a=yd(a,2,!!(2&b));a=yd(a,32,!!(32&b)&&c);return a=yd(a,2048,!1)}
function Be(a,b,c,d){a=a.u;var e=zd(a);Rd(e);var f,g=!!(2&e),h=g?1:2,k=1===h;h=2===h;f&&(f=!g);g=re(a,e,b);g=Array.isArray(g)?g:Pd;var l=vd(g),m=!!(4&l);if(!m){var n=l;0===n&&(n=Ae(n,e));n=yd(n,1,!0);l=g;var r=e,p=!!(2&n);p&&(r=yd(r,2,!0));for(var t=!p,u=!0,z=0,C=0;z<l.length;z++){var P=ee(l[z],c,r);if(P instanceof c){if(!p){var U=!!(vd(P.u)&2);t&&(t=!U);u&&(u=U)}l[C++]=P}}C<z&&(l.length=C);n=yd(n,4,!0);n=yd(n,16,u);n=yd(n,8,t);wd(l,n);p&&Object.freeze(l);l=n}n=!!(8&l)||k&&!g.length;if(f&&!n){ue(l)&&
(g=rd(g),l=Ae(l,e),e=te(a,e,b,g));f=g;for(n=0;n<f.length;n++)r=f[n],p=pe(r),r!==p&&(f[n]=p);l=yd(l,8,!0);l=yd(l,16,!f.length);wd(f,l)}ue(l)||(f=l,k&&(l=yd(l,!g.length||16&l&&(!m||32&l)?2:2048,!0)),l!==f&&wd(g,l),k&&Object.freeze(g));h&&ue(l)&&(g=rd(g),l=Ae(l,e),wd(g,l),te(a,e,b,g));b=g;c=null!=d?de(d,c):new c;b.push(c);vd(c.u)&2?xd(b,8):xd(b,16)}
function Ce(a,b){var c=void 0===c?"":c;a=ce(qe(a,b));return null!=a?a:c}
function De(a,b){b=xe(a,Ee,b);return ce(qe(a,b))}
function Fe(a,b,c){if(null!=c){if("number"!==typeof c)throw Sd("int32");if(!Number.isFinite(c))throw Sd("int32");c|=0}se(a,b,c)}
function J(a,b,c){return se(a,b,be(c))}
function Ge(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Sd("enum");c|=0}return se(a,b,c)}
;function K(a,b,c){this.u=H(a,b,c)}
K.prototype.toJSON=function(){if(Md)var a=He(this,this.u,!1);else a=ke(this.u,le,void 0,void 0,!1,!1),a=He(this,a,!0);return a};
function Ie(a){Md=!0;try{return JSON.stringify(a.toJSON(),ge)}finally{Md=!1}}
K.prototype.clone=function(){var a=this.u;return ne(this,a,zd(a),!1)};
K.prototype.ec=Ed;K.prototype.toString=function(){return He(this,this.u,!1).toString()};
function He(a,b,c){var d=a.constructor.ya,e=zd(c?a.u:b),f=Dd(e),g=!1;if(d&&Nd){if(!c){b=rd(b);var h;if(b.length&&Hd(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=zd(a.u);a=Dd(h);h=+!!(h&512)-1;for(var k,l,m=0;m<d.length;m++)if(l=d[m],l<a){l+=h;var n=f[l];null==n?f[l]=c?Pd:Ad():c&&n!==Pd&&ud(n)}else k||(n=void 0,f.length&&Hd(n=f[f.length-1])?k=n:f.push(k={})),n=k[l],null==k[l]?k[l]=c?Pd:Ad():c&&n!==Pd&&ud(n)}k=b.length;if(!k)return b;var r;
if(Hd(f=b[k-1])){a:{var p=f;c={};a=!1;for(var t in p){h=p[t];if(Array.isArray(h)){m=h;if(!id&&Od(h,d,+t)||!hd&&Gd(h)&&0===h.size)h=null;h!=m&&(a=!0)}null!=h?c[t]=h:a=!0}if(a){for(var u in c){p=c;break a}p=null}}p!=f&&(r=!0);k--}for(e=+!!(e&512)-1;0<k;k--){t=k-1;f=b[t];if(!(null==f||!id&&Od(f,d,t-e)||!hd&&Gd(f)&&0===f.size))break;var z=!0}if(!r&&!z)return b;var C;g?C=b:C=Array.prototype.slice.call(b,0,k);b=C;g&&(b.length=k);p&&b.push(p);return b}
;var Je=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");function Ke(a,b){this.width=a;this.height=b}
q=Ke.prototype;q.clone=function(){return new Ke(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Le(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Me(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var f=d=0,g;g=b[f];f++)e==g.nodeName&&(a[d++]=g);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(f=d=0;g=b[f];f++){e=g.className;var h;if(h="function"==typeof e.split)h=0<=eb(e.split(/\s+/),c);h&&(a[d++]=g)}a.length=d;return a}return b}
function Ne(a,b){lb(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Oe.hasOwnProperty(d)?a.setAttribute(Oe[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Oe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Pe(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||Ma(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ma(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}fb(g?jb(f):f,d)}}}
function Qe(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Re(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Se(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
function Te(){this.g=D.document||document}
q=Te.prototype;q.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
q.yc=function(a,b,c){var d=this.g,e=arguments,f=e[1],g=Qe(d,String(e[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Ne(g,f));2<e.length&&Pe(d,g,e);return g};
q.createElement=function(a){return Qe(this.g,a)};
q.ad=function(a,b){a.appendChild(b)};
q.isElement=function(a){return Ma(a)&&1==a.nodeType};function Ue(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ve(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,We[c])c=We[c];else{c=String(c);if(!We[c]){var f=/function\s+([^\(]+)/m.exec(c);We[c]=f?f[1]:"[Anonymous]"}c=We[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ve(a,b){b||(b={});b[Xe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Xe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ve(a,b));return c}
function Xe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var We={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ye(a){this.Bd=a}
function Ze(a){return new Ye(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var $e=[Ze("data"),Ze("http"),Ze("https"),Ze("mailto"),Ze("ftp"),new Ye(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function af(a,b){b=void 0===b?$e:b;if(a instanceof Db)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Ye&&d.Bd(a))return new Db(a,Ib)}}
function bf(a){var b=void 0===b?$e:b;return af(a,b)||Jb}
var cf="function"===typeof URL;function df(){throw Error("unknown trace type");}
;var ef={we:0,Be:1,te:2,ue:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function ff(a,b){b=Error.call(this,a+" cannot be used with intent "+ef[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(ff,Error);
function gf(a,b){a.removeAttribute("srcdoc");if(b instanceof Bb)throw new ff("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Db)b=Eb(b);else{b:if(cf){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=
b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function hf(a){var b=jf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function kf(){var a=[];hf(function(b){a.push(b)});
return a}
var jf={he:"allow-forms",ie:"allow-modals",je:"allow-orientation-lock",ke:"allow-pointer-lock",le:"allow-popups",me:"allow-popups-to-escape-sandbox",ne:"allow-presentation",oe:"allow-same-origin",pe:"allow-scripts",qe:"allow-top-navigation",re:"allow-top-navigation-by-user-activation"},lf=db(function(){return kf()});
function mf(){var a=nf(),b={};fb(lf(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function nf(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var rf={};function sf(a,b){b instanceof fc&&b.constructor===fc?b=b.g:(Ka(b),b="type_error:SafeStyleSheet");if(Hc&&void 0!==a.cssText)a.cssText=b;else if(D.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Re(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)));else a.innerHTML=b}
;var tf=(new Date).getTime();function uf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function vf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],C=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var U=1518500249}else P=t^u^z,U=1859775393;else 60>p?(P=t&u|z&(t|u),U=2400959708):(P=t^u^z,U=3395469782);P=((n<<5|n>>>27)&4294967295)+P+C+U+r[p]&4294967295;C=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+C&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var t=24;0<=t;t-=8)n[r++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,jd:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function wf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,xf(uf(d),a,c||null)].join(" "):null}
function xf(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),yf(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=yf(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function yf(a){var b=vf();b.update(a);return b.jd().toLowerCase()}
;var zf={};function Af(a){this.g=a||{cookie:""}}
q=Af.prototype;q.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ac:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.af;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ac}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ac:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bf=new Af("undefined"==typeof document?null:document);function Cf(a){return!!zf.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Df(a,b,c,d){(a=D[a])||"undefined"===typeof document||(a=(new Af(document)).get(b));return a?wf(a,c,d):null}
function Ef(a){var b=void 0===b?!1:b;var c=uf(String(D.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;Cf(e)&&(f=f||D.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Af(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Cf(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
D.__SAPISID:D.__APISID,e||"undefined"===typeof document||(e=new Af(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?wf(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Cf(b)&&((b=Df("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Df("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ff(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Gf(){this.Ja=this.Ja;this.l=this.l}
Gf.prototype.Ja=!1;Gf.prototype.dispose=function(){this.Ja||(this.Ja=!0,this.pa())};
Gf.prototype.addOnDisposeCallback=function(a,b){this.Ja?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Va(a,b):a))};
Gf.prototype.pa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Hf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.h=!1}
Hf.prototype.stopPropagation=function(){this.h=!0};
Hf.prototype.preventDefault=function(){this.defaultPrevented=!0};var If=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Jf(a,b){Hf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
Xa(Jf,Hf);var Kf={2:"touch",3:"pen",4:"mouse"};
Jf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(Kc){a:{try{Fc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=
d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Kf[a.pointerType]||"";this.state=
a.state;this.g=a;a.defaultPrevented&&Jf.za.preventDefault.call(this)};
Jf.prototype.stopPropagation=function(){Jf.za.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Jf.prototype.preventDefault=function(){Jf.za.preventDefault.call(this);var a=this.g;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lf="closure_listenable_"+(1E6*Math.random()|0);var Mf=0;function Nf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Lb=e;this.key=++Mf;this.Ab=this.Gb=!1}
function Of(a){a.Ab=!0;a.listener=null;a.proxy=null;a.src=null;a.Lb=null}
;function Pf(a){this.src=a;this.listeners={};this.g=0}
Pf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Qf(a,b,d,e);-1<g?(b=a[g],c||(b.Gb=!1)):(b=new Nf(b,this.src,f,!!d,e),b.Gb=c,a.push(b));return b};
Pf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Qf(e,b,c,d);return-1<b?(Of(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Rf(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(Of(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Qf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ab&&f.listener==b&&f.capture==!!c&&f.Lb==d)return e}return-1}
;var Sf="closure_lm_"+(1E6*Math.random()|0),Tf={},Uf=0;function Vf(a,b,c,d,e){if(d&&d.once)Wf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Vf(a,b[f],c,d,e);else c=Xf(c),a&&a[Lf]?a.Ua(b,c,Ma(d)?!!d.capture:!!d,e):Yf(a,b,c,!1,d,e)}
function Yf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=Zf(a);h||(a[Sf]=h=new Pf(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=$f();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)If||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ag(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Uf++}}
function $f(){function a(c){return b.call(a.src,a.listener,c)}
var b=bg;return a}
function Wf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Wf(a,b[f],c,d,e);else c=Xf(c),a&&a[Lf]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):Yf(a,b,c,!0,d,e)}
function cg(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)cg(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Xf(c),a&&a[Lf])?a.g.remove(String(b),c,d,e):a&&(a=Zf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Qf(b,c,d,e)),(c=-1<a?b[a]:null)&&dg(c))}
function dg(a){if("number"!==typeof a&&a&&!a.Ab){var b=a.src;if(b&&b[Lf])Rf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ag(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Uf--;(c=Zf(b))?(Rf(c,a),0==c.g&&(c.src=null,b[Sf]=null)):Of(a)}}}
function ag(a){return a in Tf?Tf[a]:Tf[a]="on"+a}
function bg(a,b){if(a.Ab)a=!0;else{b=new Jf(b,this);var c=a.listener,d=a.Lb||a.src;a.Gb&&dg(a);a=c.call(d,b)}return a}
function Zf(a){a=a[Sf];return a instanceof Pf?a:null}
var eg="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xf(a){if("function"===typeof a)return a;a[eg]||(a[eg]=function(b){return a.handleEvent(b)});
return a[eg]}
;function fg(){Gf.call(this);this.g=new Pf(this);this.K=this;this.v=null}
Xa(fg,Gf);fg.prototype[Lf]=!0;fg.prototype.addEventListener=function(a,b,c,d){Vf(this,a,b,c,d)};
fg.prototype.removeEventListener=function(a,b,c,d){cg(this,a,b,c,d)};
function gg(a,b){var c=a.v;if(c){var d=[];for(var e=1;c;c=c.v)d.push(c),++e}a=a.K;c=b.type||b;"string"===typeof b?b=new Hf(b,a):b instanceof Hf?b.target=b.target||a:(e=b,b=new Hf(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.h&&0<=f;f--){var g=b.currentTarget=d[f];e=hg(g,c,!0,b)&&e}b.h||(g=b.currentTarget=a,e=hg(g,c,!0,b)&&e,b.h||(e=hg(g,c,!1,b)&&e));if(d)for(f=0;!b.h&&f<d.length;f++)g=b.currentTarget=d[f],e=hg(g,c,!1,b)&&e}
fg.prototype.pa=function(){fg.za.pa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Of(d[e]);delete a.listeners[c];a.g--}}this.v=null};
fg.prototype.Ua=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function hg(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ab&&g.capture==c){var h=g.listener,k=g.Lb||g.src;g.Gb&&Rf(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ig(a){fg.call(this);var b=this;this.D=this.i=0;this.sa=null!=a?a:{Ca:function(e,f){return setTimeout(e,f)},
ia:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return B(function(e){return A(e,jg(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.D||kg(this)}
y(ig,fg);function lg(){var a=mg;ig.g||(ig.g=new ig(a));return ig.g}
ig.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.sa.ia(this.D);delete ig.g};
ig.prototype.ja=function(){return this.h};
function kg(a){a.D=a.sa.Ca(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.C(3):A(c,jg(a),3):A(c,jg(a),3);kg(a);c.g=0})},3E4)}
function jg(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ta(h,2,3),d&&(a.i=a.sa.Ca(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.i];h.m=0;h.s=0;a.s=void 0;a.i&&(a.sa.ia(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?gg(a,"networkstatus-online"):gg(a,"networkstatus-offline"));c(g);xa(h);break;case 2:ua(h),g=!1,h.C(3)}})})}
;function ng(){this.data=[];this.g=-1}
ng.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
ng.prototype.get=function(a){return!!this.data[a]};
function og(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function pg(a){this.u=H(a)}
y(pg,K);function qg(a){this.u=H(a)}
y(qg,K);function rg(a,b){return J(a,2,b)}
function sg(a,b){return J(a,3,b)}
function tg(a,b){return J(a,4,b)}
function ug(a,b){return J(a,5,b)}
function vg(a,b){return J(a,9,b)}
function wg(a,b){var c=a.u,d=zd(c);Rd(d);if(null==b)te(c,d,10);else{if(!Array.isArray(b))throw Sd();var e=vd(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,m=!0,n=0;n<b.length;n++){var r=b[n];de(r,pg);g||(r=!!(vd(r.u)&2),l&&(l=!r),m&&(m=r))}g||(e=yd(e,5,!0),e=yd(e,8,l),e=yd(e,16,m));if(k||h&&e!==f)b=rd(b),f=0,e=Ae(e,d);e!==f&&wd(b,e);te(c,d,10,b)}return a}
function xg(a,b){return se(a,11,null==b?b:Ud(b))}
function yg(a,b){return J(a,1,b)}
function zg(a,b){return se(a,7,null==b?b:Ud(b))}
qg.ya=[10,6];var Ag="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Bg(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Cg(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Dg(){var a=window;if(!Cg(a))return null;var b=Bg(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Ag).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Eg(a){var b;return xg(wg(ug(rg(yg(tg(zg(vg(sg(new qg,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new pg;d=J(d,1,c.brand);return J(d,2,c.version)}))||[]),a.wow64||!1)}
function Fg(){var a,b;return null!=(b=null==(a=Dg())?void 0:a.then(function(c){return Eg(c)}))?b:null}
;function Gg(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Gg.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Hg(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Ig;
function Jg(){var a=D.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Qe(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!nc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.xc;c.xc=null;e()}};
return function(e){d.next={xc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function Kg(){this.h=this.g=null}
Kg.prototype.add=function(a,b){var c=Lg.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Kg.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Lg=new Gg(function(){return new Mg},function(a){return a.reset()});
function Mg(){this.next=this.scope=this.g=null}
Mg.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Mg.prototype.reset=function(){this.next=this.scope=this.g=null};var Ng,Og=!1,Pg=new Kg;function Qg(a,b){Ng||Rg();Og||(Ng(),Og=!0);Pg.add(a,b)}
function Rg(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);Ng=function(){a.then(Sg)}}else Ng=function(){var b=Sg;
"function"!==typeof D.setImmediate||D.Window&&D.Window.prototype&&(mc()||!G("Edge"))&&D.Window.prototype.setImmediate==D.setImmediate?(Ig||(Ig=Jg()),Ig(b)):D.setImmediate(b)}}
function Sg(){for(var a;a=Pg.remove();){try{a.g.call(a.scope)}catch(b){Dc(b)}Hg(Lg,a)}Og=!1}
;function Tg(a,b){this.g=a[D.Symbol.iterator]();this.h=b}
Tg.prototype[Symbol.iterator]=function(){return this};
Tg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Ug(a,b){return new Tg(a,b)}
;function Vg(){this.blockSize=-1}
;function Wg(){this.blockSize=-1;this.blockSize=64;this.g=[];this.m=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Xa(Wg,Vg);Wg.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function Xg(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Wg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)Xg(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Xg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Xg(this,e);f=0;break}}this.h=f;this.l+=b}};
Wg.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Xg(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Yg(){}
Yg.prototype.next=function(){return Zg};
var Zg={done:!0,value:void 0};function $g(a){return{value:a,done:!1}}
Yg.prototype.ta=function(){return this};function ah(a){if(a instanceof bh||a instanceof ch||a instanceof dh)return a;if("function"==typeof a.next)return new bh(function(){return a});
if("function"==typeof a[Symbol.iterator])return new bh(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ta)return new bh(function(){return a.ta()});
throw Error("Not an iterator or iterable.");}
function bh(a){this.h=a}
bh.prototype.ta=function(){return new ch(this.h())};
bh.prototype[Symbol.iterator]=function(){return new dh(this.h())};
bh.prototype.g=function(){return new dh(this.h())};
function ch(a){this.h=a}
y(ch,Yg);ch.prototype.next=function(){return this.h.next()};
ch.prototype[Symbol.iterator]=function(){return new dh(this.h)};
ch.prototype.g=function(){return new dh(this.h)};
function dh(a){bh.call(this,function(){return a});
this.i=a}
y(dh,bh);dh.prototype.next=function(){return this.i.next()};function eh(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof eh)for(c=fh(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function fh(a){gh(a);return a.g.concat()}
q=eh.prototype;q.has=function(a){return hh(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ih;gh(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ih(a,b){return a===b}
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return hh(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&gh(this),!0):!1};
function gh(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];hh(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],hh(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return hh(this.h,a)?this.h[a]:b};
q.set=function(a,b){hh(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=fh(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new eh(this)};
q.keys=function(){return ah(this.ta(!0)).g()};
q.values=function(){return ah(this.ta(!1)).g()};
q.entries=function(){var a=this;return Ug(this.keys(),function(b){return[b,a.get(b)]})};
q.ta=function(a){gh(this);var b=0,c=this.i,d=this,e=new Yg;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Zg;var f=d.g[b++];return $g(a?f:d.h[f])};
return e};
function hh(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var jh=D.JSON.stringify;function kh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function lh(a){this.g=0;this.v=void 0;this.l=this.h=this.i=null;this.m=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){mh(b,2,c)},function(c){mh(b,3,c)})}catch(c){mh(this,3,c)}}
function nh(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
nh.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var oh=new Gg(function(){return new nh},function(a){a.reset()});
function ph(a,b,c){var d=oh.get();d.i=a;d.h=b;d.context=c;return d}
lh.prototype.then=function(a,b,c){return qh(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
lh.prototype.$goog_Thenable=!0;lh.prototype.cancel=function(a){if(0==this.g){var b=new rh(a);Qg(function(){sh(this,b)},this)}};
function sh(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?sh(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):th(c),uh(c,e,3,b)))}a.i=null}else mh(a,3,b)}
function vh(a,b){a.h||2!=a.g&&3!=a.g||wh(a);a.l?a.l.next=b:a.h=b;a.l=b}
function qh(a,b,c,d){var e=ph(null,null,null);e.g=new lh(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof rh?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;vh(a,e);return e.g}
lh.prototype.K=function(a){this.g=0;mh(this,2,a)};
lh.prototype.T=function(a){this.g=0;mh(this,3,a)};
function mh(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.K,f=a.T;if(d instanceof lh){vh(d,ph(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){xh(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.g=b,a.i=null,wh(a),3!=b||c instanceof rh||yh(a,c))}}
function xh(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function wh(a){a.s||(a.s=!0,Qg(a.D,a))}
function th(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
lh.prototype.D=function(){for(var a;a=th(this);)uh(this,a,this.g,this.v);this.s=!1};
function uh(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.i)a.m=!1;if(b.g)b.g.i=null,zh(b,c,d);else try{b.l?b.i.call(b.context):zh(b,c,d)}catch(e){Ah.call(null,e)}Hg(oh,b)}
function zh(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function yh(a,b){a.m=!0;Qg(function(){a.m&&Ah.call(null,b)})}
var Ah=Dc;function rh(a){Za.call(this,a)}
Xa(rh,Za);rh.prototype.name="cancel";function L(a){Gf.call(this);this.s=1;this.i=[];this.m=0;this.g=[];this.h={};this.v=!!a}
Xa(L,Gf);q=L.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
function Bh(a,b,c){var d=Ch;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.Cb(a)}}
q.Cb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.m?(this.i.push(a),this.g[a+1]=function(){}):(c&&hb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.lb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Dh(this.g[g+1],this.g[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.Ja;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.m--,0<this.i.length&&0==this.m)for(;c=this.i.pop();)this.Cb(c)}}return 0!=e}return!1};
function Dh(a,b,c){Qg(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.Cb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.pa=function(){L.za.pa.call(this);this.clear();this.i.length=0};function Eh(a){this.g=a}
Eh.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,jh(b))};
Eh.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Eh.prototype.remove=function(a){this.g.remove(a)};function Fh(a){this.g=a}
Xa(Fh,Eh);function Gh(a){this.data=a}
function Hh(a){return void 0===a||a instanceof Gh?a:new Gh(a)}
Fh.prototype.set=function(a,b){Fh.za.set.call(this,a,Hh(b))};
Fh.prototype.h=function(a){a=Fh.za.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Fh.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ih(a){this.g=a}
Xa(Ih,Fh);Ih.prototype.set=function(a,b,c){if(b=Hh(b)){if(c){if(c<Wa()){Ih.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Ih.za.set.call(this,a,b)};
Ih.prototype.h=function(a){var b=Ih.za.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Ih.prototype.remove.call(this,a);else return b}};function Jh(){}
;function Kh(){}
Xa(Kh,Jh);Kh.prototype[Symbol.iterator]=function(){return ah(this.ta(!0)).g()};
Kh.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Lh(a){this.g=a;this.h=null}
Xa(Lh,Kh);q=Lh.prototype;q.set=function(a,b){Mh(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){Mh(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){Mh(this);this.g.removeItem(a)};
q.ta=function(a){Mh(this);var b=0,c=this.g,d=new Yg;d.next=function(){if(b>=c.length)return Zg;var e=c.key(b++);if(a)return $g(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return $g(e)};
return d};
q.clear=function(){Mh(this);this.g.clear()};
q.key=function(a){Mh(this);return this.g.key(a)};
function Mh(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.h)?b:a.h=Nh(a.g))||Dc(Error("Storage mechanism: Storage unavailable"))}
function Nh(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function Oh(){var a=null;try{a=D.localStorage||null}catch(b){}Lh.call(this,a)}
Xa(Oh,Lh);function Ph(a,b){this.h=a;this.g=null;var c;if(c=Hc)c=!(9<=Number(Yc));if(c){Qh||(Qh=new eh);this.g=Qh.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Qh.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Xa(Ph,Kh);var Rh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Qh=null;function Sh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Rh[b]})}
q=Ph.prototype;q.set=function(a,b){this.g.setAttribute(Sh(a),b);Th(this)};
q.get=function(a){a=this.g.getAttribute(Sh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(Sh(a));Th(this)};
q.ta=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Yg;d.next=function(){if(b>=c.length)return Zg;var e=c[b++];if(a)return $g(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return $g(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Th(this)};
function Th(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Uh(a,b){this.h=a;this.g=b+"::"}
Xa(Uh,Kh);Uh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Uh.prototype.get=function(a){return this.h.get(this.g+a)};
Uh.prototype.remove=function(a){this.h.remove(this.g+a)};
Uh.prototype.ta=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Yg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return $g(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},Vh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.nc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Wh={ab:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Cc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Xh={ab:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Cc:function(a){return[].concat.apply([],a)}};
M.Yd=function(){Vh?(M.Za=Uint8Array,M.Aa=Uint16Array,M.Zc=Int32Array,M.assign(M,Wh)):(M.Za=Array,M.Aa=Array,M.Zc=Array,M.assign(M,Xh))};
M.Yd();var Yh=!0;try{new Uint8Array(1)}catch(a){Yh=!1}
function Zh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.Za(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var $h={};$h=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ai={},bi,ci=[],di=0;256>di;di++){bi=di;for(var ei=0;8>ei;ei++)bi=bi&1?3988292384^bi>>>1:bi>>>1;ci[di]=bi}ai=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^ci[(a^b[d])&255];return a^-1};var fi={};fi={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function gi(a){for(var b=a.length;0<=--b;)a[b]=0}
var hi=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ii=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ji=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ki=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],li=Array(576);gi(li);var mi=Array(60);gi(mi);var ni=Array(512);gi(ni);var oi=Array(256);gi(oi);var pi=Array(29);gi(pi);var qi=Array(30);gi(qi);function ri(a,b,c,d,e){this.Vc=a;this.nd=b;this.md=c;this.kd=d;this.Fd=e;this.Fc=a&&a.length}
var si,ti,ui;function vi(a,b){this.Ac=a;this.ib=0;this.Ma=b}
function wi(a,b){a.N[a.pending++]=b&255;a.N[a.pending++]=b>>>8&255}
function Zi(a,b,c){a.U>16-c?(a.aa|=b<<a.U&65535,wi(a,a.aa),a.aa=b>>16-a.U,a.U+=c-16):(a.aa|=b<<a.U&65535,a.U+=c)}
function $i(a,b,c){Zi(a,c[2*b],c[2*b+1])}
function aj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function bj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=aj(d[e]++,e))}
function cj(a){var b;for(b=0;286>b;b++)a.ca[2*b]=0;for(b=0;30>b;b++)a.Sa[2*b]=0;for(b=0;19>b;b++)a.W[2*b]=0;a.ca[512]=1;a.Ha=a.mb=0;a.ka=a.matches=0}
function dj(a){8<a.U?wi(a,a.aa):0<a.U&&(a.N[a.pending++]=a.aa);a.aa=0;a.U=0}
function ej(a,b,c){dj(a);wi(a,c);wi(a,~c);M.ab(a.N,a.window,b,c,a.pending);a.pending+=c}
function fj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function gj(a,b,c){for(var d=a.O[c],e=c<<1;e<=a.Ga;){e<a.Ga&&fj(b,a.O[e+1],a.O[e],a.depth)&&e++;if(fj(b,d,a.O[e],a.depth))break;a.O[c]=a.O[e];c=e;e<<=1}a.O[c]=d}
function hj(a,b,c){var d=0;if(0!==a.ka){do{var e=a.N[a.ub+2*d]<<8|a.N[a.ub+2*d+1];var f=a.N[a.Zb+d];d++;if(0===e)$i(a,f,b);else{var g=oi[f];$i(a,g+256+1,b);var h=hi[g];0!==h&&(f-=pi[g],Zi(a,f,h));e--;g=256>e?ni[e]:ni[256+(e>>>7)];$i(a,g,c);h=ii[g];0!==h&&(e-=qi[g],Zi(a,e,h))}}while(d<a.ka)}$i(a,256,b)}
function ij(a,b){var c=b.Ac,d=b.Ma.Vc,e=b.Ma.Fc,f=b.Ma.kd,g,h=-1;a.Ga=0;a.eb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.O[++a.Ga]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ga;){var k=a.O[++a.Ga]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Ha--;e&&(a.mb-=d[2*k+1])}b.ib=h;for(g=a.Ga>>1;1<=g;g--)gj(a,c,g);k=f;do g=a.O[1],a.O[1]=a.O[a.Ga--],gj(a,c,1),d=a.O[1],a.O[--a.eb]=g,a.O[--a.eb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.O[1]=k++,gj(a,c,1);while(2<=a.Ga);a.O[--a.eb]=
a.O[1];g=b.Ac;k=b.ib;d=b.Ma.Vc;e=b.Ma.Fc;f=b.Ma.nd;var l=b.Ma.md,m=b.Ma.Fd,n,r=0;for(n=0;15>=n;n++)a.Da[n]=0;g[2*a.O[a.eb]+1]=0;for(b=a.eb+1;573>b;b++){var p=a.O[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.Da[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.Ha+=u*(n+t);e&&(a.mb+=u*(d[2*p+1]+t))}}if(0!==r){do{for(n=m-1;0===a.Da[n];)n--;a.Da[n]--;a.Da[n+1]+=2;a.Da[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.Da[n];0!==p;)d=a.O[--b],d>k||(g[2*d+1]!==n&&(a.Ha+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}bj(c,h,a.Da)}
function jj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.W[2*l]+=g:0!==l?(l!==e&&a.W[2*l]++,a.W[32]++):10>=g?a.W[34]++:a.W[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function kj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do $i(a,l,a.W);while(0!==--g)}else 0!==l?(l!==e&&($i(a,l,a.W),g--),$i(a,16,a.W),Zi(a,g-3,2)):10>=g?($i(a,17,a.W),Zi(a,g-3,3)):($i(a,18,a.W),Zi(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function lj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ca[2*c])return 0;if(0!==a.ca[18]||0!==a.ca[20]||0!==a.ca[26])return 1;for(c=32;256>c;c++)if(0!==a.ca[2*c])return 1;return 0}
var mj=!1;function nj(a,b,c){a.N[a.ub+2*a.ka]=b>>>8&255;a.N[a.ub+2*a.ka+1]=b&255;a.N[a.Zb+a.ka]=c&255;a.ka++;0===b?a.ca[2*c]++:(a.matches++,b--,a.ca[2*(oi[c]+256+1)]++,a.Sa[2*(256>b?ni[b]:ni[256+(b>>>7)])]++);return a.ka===a.yb-1}
;function oj(a,b){a.msg=fi[b];return b}
function pj(a){for(var b=a.length;0<=--b;)a[b]=0}
function qj(a){var b=a.state,c=b.pending;c>a.H&&(c=a.H);0!==c&&(M.ab(a.output,b.N,b.zb,c,a.jb),a.jb+=c,b.zb+=c,a.oc+=c,a.H-=c,b.pending-=c,0===b.pending&&(b.zb=0))}
function rj(a,b){var c=0<=a.fa?a.fa:-1,d=a.j-a.fa,e=0;if(0<a.level){2===a.F.Vb&&(a.F.Vb=lj(a));ij(a,a.Nb);ij(a,a.Jb);jj(a,a.ca,a.Nb.ib);jj(a,a.Sa,a.Jb.ib);ij(a,a.vc);for(e=18;3<=e&&0===a.W[2*ki[e]+1];e--);a.Ha+=3*(e+1)+14;var f=a.Ha+3+7>>>3;var g=a.mb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Zi(a,b?1:0,3),ej(a,c,d);else if(4===a.strategy||g===f)Zi(a,2+(b?1:0),3),hj(a,li,mi);else{Zi(a,4+(b?1:0),3);c=a.Nb.ib+1;d=a.Jb.ib+1;e+=1;Zi(a,c-257,5);Zi(a,d-1,5);Zi(a,e-4,4);for(f=0;f<e;f++)Zi(a,a.W[2*
ki[f]+1],3);kj(a,a.ca,c-1);kj(a,a.Sa,d-1);hj(a,a.ca,a.Sa)}cj(a);b&&dj(a);a.fa=a.j;qj(a.F)}
function N(a,b){a.N[a.pending++]=b}
function sj(a,b){a.N[a.pending++]=b>>>8&255;a.N[a.pending++]=b&255}
function tj(a,b){var c=a.Lc,d=a.j,e=a.ga,f=a.Mc,g=a.j>a.X-262?a.j-(a.X-262):0,h=a.window,k=a.Oa,l=a.xa,m=a.j+258,n=h[d+e-1],r=h[d+e];a.ga>=a.Ec&&(c>>=2);f>a.o&&(f=a.o);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.hb=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.o?e:a.o}
function uj(a){var b=a.X,c;do{var d=a.Xc-a.o-a.j;if(a.j>=b+(b-262)){M.ab(a.window,a.window,b,b,0);a.hb-=b;a.j-=b;a.fa-=b;var e=c=a.Mb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.xa[--e],a.xa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.F.Z)break;e=a.F;c=a.window;f=a.j+a.o;var g=e.Z;g>d&&(g=d);0===g?c=0:(e.Z-=g,M.ab(c,e.input,e.Xa,g,f),1===e.state.wrap?e.B=$h(e.B,c,g,f):2===e.state.wrap&&(e.B=ai(e.B,c,g,f)),e.Xa+=g,e.Ya+=g,c=g);a.o+=c;if(3<=a.o+a.da)for(d=a.j-a.da,a.G=a.window[d],a.G=
(a.G<<a.Fa^a.window[d+1])&a.Ea;a.da&&!(a.G=(a.G<<a.Fa^a.window[d+3-1])&a.Ea,a.xa[d&a.Oa]=a.head[a.G],a.head[a.G]=d,d++,a.da--,3>a.o+a.da););}while(262>a.o&&0!==a.F.Z)}
function vj(a,b){for(var c;;){if(262>a.o){uj(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.G=(a.G<<a.Fa^a.window[a.j+3-1])&a.Ea,c=a.xa[a.j&a.Oa]=a.head[a.G],a.head[a.G]=a.j);0!==c&&a.j-c<=a.X-262&&(a.J=tj(a,c));if(3<=a.J)if(c=nj(a,a.j-a.hb,a.J-3),a.o-=a.J,a.J<=a.cc&&3<=a.o){a.J--;do a.j++,a.G=(a.G<<a.Fa^a.window[a.j+3-1])&a.Ea,a.xa[a.j&a.Oa]=a.head[a.G],a.head[a.G]=a.j;while(0!==--a.J);a.j++}else a.j+=a.J,a.J=0,a.G=a.window[a.j],a.G=(a.G<<a.Fa^a.window[a.j+1])&a.Ea;else c=nj(a,0,a.window[a.j]),
a.o--,a.j++;if(c&&(rj(a,!1),0===a.F.H))return 1}a.da=2>a.j?a.j:2;return 4===b?(rj(a,!0),0===a.F.H?3:4):a.ka&&(rj(a,!1),0===a.F.H)?1:2}
function wj(a,b){for(var c,d;;){if(262>a.o){uj(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.G=(a.G<<a.Fa^a.window[a.j+3-1])&a.Ea,c=a.xa[a.j&a.Oa]=a.head[a.G],a.head[a.G]=a.j);a.ga=a.J;a.Qc=a.hb;a.J=2;0!==c&&a.ga<a.cc&&a.j-c<=a.X-262&&(a.J=tj(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.j-a.hb)&&(a.J=2));if(3<=a.ga&&a.J<=a.ga){d=a.j+a.o-3;c=nj(a,a.j-1-a.Qc,a.ga-3);a.o-=a.ga-1;a.ga-=2;do++a.j<=d&&(a.G=(a.G<<a.Fa^a.window[a.j+3-1])&a.Ea,a.xa[a.j&a.Oa]=a.head[a.G],a.head[a.G]=a.j);while(0!==
--a.ga);a.Va=0;a.J=2;a.j++;if(c&&(rj(a,!1),0===a.F.H))return 1}else if(a.Va){if((c=nj(a,0,a.window[a.j-1]))&&rj(a,!1),a.j++,a.o--,0===a.F.H)return 1}else a.Va=1,a.j++,a.o--}a.Va&&(nj(a,0,a.window[a.j-1]),a.Va=0);a.da=2>a.j?a.j:2;return 4===b?(rj(a,!0),0===a.F.H?3:4):a.ka&&(rj(a,!1),0===a.F.H)?1:2}
function xj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.o){uj(a);if(258>=a.o&&0===b)return 1;if(0===a.o)break}a.J=0;if(3<=a.o&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.o&&(a.J=a.o)}3<=a.J?(c=nj(a,1,a.J-3),a.o-=a.J,a.j+=a.J,a.J=0):(c=nj(a,0,a.window[a.j]),a.o--,a.j++);if(c&&(rj(a,!1),0===a.F.H))return 1}a.da=0;return 4===b?(rj(a,!0),0===a.F.H?3:4):
a.ka&&(rj(a,!1),0===a.F.H)?1:2}
function yj(a,b){for(var c;;){if(0===a.o&&(uj(a),0===a.o)){if(0===b)return 1;break}a.J=0;c=nj(a,0,a.window[a.j]);a.o--;a.j++;if(c&&(rj(a,!1),0===a.F.H))return 1}a.da=0;return 4===b?(rj(a,!0),0===a.F.H?3:4):a.ka&&(rj(a,!1),0===a.F.H)?1:2}
function zj(a,b,c,d,e){this.rd=a;this.Ed=b;this.Hd=c;this.Dd=d;this.od=e}
var Aj;Aj=[new zj(0,0,0,0,function(a,b){var c=65535;for(c>a.la-5&&(c=a.la-5);;){if(1>=a.o){uj(a);if(0===a.o&&0===b)return 1;if(0===a.o)break}a.j+=a.o;a.o=0;var d=a.fa+c;if(0===a.j||a.j>=d)if(a.o=a.j-d,a.j=d,rj(a,!1),0===a.F.H)return 1;if(a.j-a.fa>=a.X-262&&(rj(a,!1),0===a.F.H))return 1}a.da=0;if(4===b)return rj(a,!0),0===a.F.H?3:4;a.j>a.fa&&rj(a,!1);return 1}),
new zj(4,4,8,4,vj),new zj(4,5,16,8,vj),new zj(4,6,32,32,vj),new zj(4,4,16,16,wj),new zj(8,16,32,32,wj),new zj(8,16,128,128,wj),new zj(8,32,128,256,wj),new zj(32,128,258,1024,wj),new zj(32,258,258,4096,wj)];
function Bj(){this.F=null;this.status=0;this.N=null;this.wrap=this.pending=this.zb=this.la=0;this.A=null;this.qa=0;this.method=8;this.fb=-1;this.Oa=this.pc=this.X=0;this.window=null;this.Xc=0;this.head=this.xa=null;this.Mc=this.Ec=this.strategy=this.level=this.cc=this.Lc=this.ga=this.o=this.hb=this.j=this.Va=this.Qc=this.J=this.fa=this.Fa=this.Ea=this.Wb=this.Mb=this.G=0;this.ca=new M.Aa(1146);this.Sa=new M.Aa(122);this.W=new M.Aa(78);pj(this.ca);pj(this.Sa);pj(this.W);this.vc=this.Jb=this.Nb=null;
this.Da=new M.Aa(16);this.O=new M.Aa(573);pj(this.O);this.eb=this.Ga=0;this.depth=new M.Aa(573);pj(this.depth);this.U=this.aa=this.da=this.matches=this.mb=this.Ha=this.ub=this.ka=this.yb=this.Zb=0}
function Cj(a,b){if(!a||!a.state||5<b||0>b)return a?oj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.Z||666===c.status&&4!==b)return oj(a,0===a.H?-5:-2);c.F=a;var d=c.fb;c.fb=b;if(42===c.status)if(2===c.wrap)a.B=0,N(c,31),N(c,139),N(c,8),c.A?(N(c,(c.A.text?1:0)+(c.A.Ka?2:0)+(c.A.extra?4:0)+(c.A.name?8:0)+(c.A.comment?16:0)),N(c,c.A.time&255),N(c,c.A.time>>8&255),N(c,c.A.time>>16&255),N(c,c.A.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.A.Ze&255),c.A.extra&&c.A.extra.length&&
(N(c,c.A.extra.length&255),N(c,c.A.extra.length>>8&255)),c.A.Ka&&(a.B=ai(a.B,c.N,c.pending,0)),c.qa=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.pc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;sj(c,e+(31-e%31));0!==c.j&&(sj(c,a.B>>>16),sj(c,a.B&65535));a.B=1}if(69===c.status)if(c.A.extra){for(e=c.pending;c.qa<(c.A.extra.length&65535)&&(c.pending!==c.la||
(c.A.Ka&&c.pending>e&&(a.B=ai(a.B,c.N,c.pending-e,e)),qj(a),e=c.pending,c.pending!==c.la));)N(c,c.A.extra[c.qa]&255),c.qa++;c.A.Ka&&c.pending>e&&(a.B=ai(a.B,c.N,c.pending-e,e));c.qa===c.A.extra.length&&(c.qa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.A.name){e=c.pending;do{if(c.pending===c.la&&(c.A.Ka&&c.pending>e&&(a.B=ai(a.B,c.N,c.pending-e,e)),qj(a),e=c.pending,c.pending===c.la)){var f=1;break}f=c.qa<c.A.name.length?c.A.name.charCodeAt(c.qa++)&255:0;N(c,f)}while(0!==f);c.A.Ka&&c.pending>
e&&(a.B=ai(a.B,c.N,c.pending-e,e));0===f&&(c.qa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.A.comment){e=c.pending;do{if(c.pending===c.la&&(c.A.Ka&&c.pending>e&&(a.B=ai(a.B,c.N,c.pending-e,e)),qj(a),e=c.pending,c.pending===c.la)){f=1;break}f=c.qa<c.A.comment.length?c.A.comment.charCodeAt(c.qa++)&255:0;N(c,f)}while(0!==f);c.A.Ka&&c.pending>e&&(a.B=ai(a.B,c.N,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.A.Ka?(c.pending+2>c.la&&qj(a),c.pending+2<=c.la&&(N(c,a.B&
255),N(c,a.B>>8&255),a.B=0,c.status=113)):c.status=113);if(0!==c.pending){if(qj(a),0===a.H)return c.fb=-1,0}else if(0===a.Z&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return oj(a,-5);if(666===c.status&&0!==a.Z)return oj(a,-5);if(0!==a.Z||0!==c.o||0!==b&&666!==c.status){d=2===c.strategy?yj(c,b):3===c.strategy?xj(c,b):Aj[c.level].od(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.H&&(c.fb=-1),0;if(2===d&&(1===b?(Zi(c,2,3),$i(c,256,li),16===c.U?(wi(c,c.aa),c.aa=0,c.U=0):8<=c.U&&(c.N[c.pending++]=
c.aa&255,c.aa>>=8,c.U-=8)):5!==b&&(Zi(c,0,3),ej(c,0,0),3===b&&(pj(c.head),0===c.o&&(c.j=0,c.fa=0,c.da=0))),qj(a),0===a.H))return c.fb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.B&255),N(c,a.B>>8&255),N(c,a.B>>16&255),N(c,a.B>>24&255),N(c,a.Ya&255),N(c,a.Ya>>8&255),N(c,a.Ya>>16&255),N(c,a.Ya>>24&255)):(sj(c,a.B>>>16),sj(c,a.B&65535));qj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Dj={};Dj=function(){this.input=null;this.Ya=this.Z=this.Xa=0;this.output=null;this.oc=this.H=this.jb=0;this.msg="";this.state=null;this.Vb=2;this.B=0};var Ej=Object.prototype.toString;
function Fj(a){if(!(this instanceof Fj))return new Fj(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,Pa:15,Gd:8,strategy:0,Na:""},a||{});a.raw&&0<a.Pa?a.Pa=-a.Pa:a.sd&&0<a.Pa&&16>a.Pa&&(a.Pa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.F=new Dj;this.F.H=0;var b=this.F;var c=a.level,d=a.method,e=a.Pa,f=a.Gd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=oj(b,-2);else{8===e&&(e=9);var k=new Bj;
b.state=k;k.F=b;k.wrap=h;k.A=null;k.pc=e;k.X=1<<k.pc;k.Oa=k.X-1;k.Wb=f+7;k.Mb=1<<k.Wb;k.Ea=k.Mb-1;k.Fa=~~((k.Wb+3-1)/3);k.window=new M.Za(2*k.X);k.head=new M.Aa(k.Mb);k.xa=new M.Aa(k.X);k.yb=1<<f+6;k.la=4*k.yb;k.N=new M.Za(k.la);k.ub=1*k.yb;k.Zb=3*k.yb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ya=b.oc=0;b.Vb=2;c=b.state;c.pending=0;c.zb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.B=2===c.wrap?0:1;c.fb=0;if(!mj){d=Array(16);for(f=g=0;28>f;f++)for(pi[f]=g,e=0;e<1<<hi[f];e++)oi[g++]=
f;oi[g-1]=f;for(f=g=0;16>f;f++)for(qi[f]=g,e=0;e<1<<ii[f];e++)ni[g++]=f;for(g>>=7;30>f;f++)for(qi[f]=g<<7,e=0;e<1<<ii[f]-7;e++)ni[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)li[2*e+1]=8,e++,d[8]++;for(;255>=e;)li[2*e+1]=9,e++,d[9]++;for(;279>=e;)li[2*e+1]=7,e++,d[7]++;for(;287>=e;)li[2*e+1]=8,e++,d[8]++;bj(li,287,d);for(e=0;30>e;e++)mi[2*e+1]=5,mi[2*e]=aj(e,5);si=new ri(li,hi,257,286,15);ti=new ri(mi,ii,0,30,15);ui=new ri([],ji,0,19,7);mj=!0}c.Nb=new vi(c.ca,si);c.Jb=new vi(c.Sa,ti);c.vc=
new vi(c.W,ui);c.aa=0;c.U=0;cj(c);c=0}else c=oj(b,-2);0===c&&(b=b.state,b.Xc=2*b.X,pj(b.head),b.cc=Aj[b.level].Ed,b.Ec=Aj[b.level].rd,b.Mc=Aj[b.level].Hd,b.Lc=Aj[b.level].Dd,b.j=0,b.fa=0,b.o=0,b.da=0,b.J=b.ga=2,b.Va=0,b.G=0);b=c}}else b=-2;if(0!==b)throw Error(fi[b]);a.header&&(b=this.F)&&b.state&&2===b.state.wrap&&(b.state.A=a.header);if(a.vb){var l;"string"===typeof a.vb?l=Zh(a.vb):"[object ArrayBuffer]"===Ej.call(a.vb)?l=new Uint8Array(a.vb):l=a.vb;a=this.F;f=l;g=f.length;if(a&&a.state)if(l=a.state,
b=l.wrap,2===b||1===b&&42!==l.status||l.o)b=-2;else{1===b&&(a.B=$h(a.B,f,g,0));l.wrap=0;g>=l.X&&(0===b&&(pj(l.head),l.j=0,l.fa=0,l.da=0),c=new M.Za(l.X),M.ab(c,f,g-l.X,l.X,0),f=c,g=l.X);c=a.Z;d=a.Xa;e=a.input;a.Z=g;a.Xa=0;a.input=f;for(uj(l);3<=l.o;){f=l.j;g=l.o-2;do l.G=(l.G<<l.Fa^l.window[f+3-1])&l.Ea,l.xa[f&l.Oa]=l.head[l.G],l.head[l.G]=f,f++;while(--g);l.j=f;l.o=2;uj(l)}l.j+=l.o;l.fa=l.j;l.da=l.o;l.o=0;l.J=l.ga=2;l.Va=0;a.Xa=d;a.input=e;a.Z=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(fi[b]);
this.Qe=!0}}
Fj.prototype.push=function(a,b){var c=this.F,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Zh(a):"[object ArrayBuffer]"===Ej.call(a)?c.input=new Uint8Array(a):c.input=a;c.Xa=0;c.Z=c.input.length;do{0===c.H&&(c.output=new M.Za(d),c.jb=0,c.H=d);a=Cj(c,e);if(1!==a&&0!==a)return Gj(this,a),this.ended=!0,!1;if(0===c.H||0===c.Z&&(4===e||2===e))if("string"===this.options.Na){var f=M.nc(c.output,c.jb);b=f;f=f.length;if(65537>f&&(b.subarray&&Yh||!b.subarray))b=
String.fromCharCode.apply(null,M.nc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.nc(c.output,c.jb),this.chunks.push(b)}while((0<c.Z||0===c.H)&&1!==a);if(4===e)return(c=this.F)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=oj(c,-2):(c.state=null,a=113===d?oj(c,-3):0)):a=-2,Gj(this,a),this.ended=!0,0===a;2===e&&(Gj(this,0),c.H=0);return!0};
function Gj(a,b){0===b&&(a.result="string"===a.options.Na?a.chunks.join(""):M.Cc(a.chunks));a.chunks=[];a.err=b;a.msg=a.F.msg}
;function Hj(a){this.name=a}
;var Ij=new Hj("rawColdConfigGroup");var Jj=new Hj("rawHotConfigGroup");function Kj(a){this.u=H(a)}
y(Kj,K);Kj.prototype.g=function(a){J(this,5,a)};function Lj(a){this.u=H(a)}
y(Lj,K);function Mj(a){this.u=H(a)}
y(Mj,K);Mj.ya=[2];function Nj(a){this.u=H(a)}
y(Nj,K);Nj.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=qe(this,36);b=null==b?b:Number.isFinite(b)?b|0:void 0;return null!=b?b:a};
Nj.prototype.setPlayerType=function(a){return Ge(this,36,a)};
Nj.prototype.setHomeGroupInfo=function(a){return I(this,Mj,81,a)};
Nj.ya=[9,66,32,86,100,101];function Oj(a){this.u=H(a)}
y(Oj,K);Oj.prototype.getKey=function(){return Ce(this,1)};
Oj.prototype.va=function(){return Ce(this,xe(this,Pj,2))};
var Pj=[2,3,4,5,6];function Qj(a){this.u=H(a)}
y(Qj,K);Qj.prototype.setSessionId=function(a){if(null!=a){var b=!!b;if(!Wd(a))throw Sd("uint64");"string"===typeof a?(Wd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b)&&0<=b?a=String(b):(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),$d(a)||(qd(a),a=nd(jd,kd)))):b?(Wd(a),a=Math.trunc(a),0<=a&&Number.isSafeInteger(a)?a=String(a):(b=String(a),$d(b)?a=b:(ld(a),a=nd(jd,kd)))):(Wd(a),a=Math.trunc(a),a=0<=a&&Number.isSafeInteger(a)?a:ae(a))}return se(this,10,a)};
Qj.ya=[15,26,28];function Rj(a){this.u=H(a)}
y(Rj,K);Rj.ya=[5];function Sj(a){this.u=H(a)}
y(Sj,K);function Tj(a){this.u=H(a)}
y(Tj,K);Tj.prototype.setSafetyMode=function(a){return Ge(this,5,a)};
Tj.ya=[12];function Uj(a){this.u=H(a)}
y(Uj,K);Uj.ya=[12];var Vj={Pe:"WEB_DISPLAY_MODE_UNKNOWN",Le:"WEB_DISPLAY_MODE_BROWSER",Ne:"WEB_DISPLAY_MODE_MINIMAL_UI",Oe:"WEB_DISPLAY_MODE_STANDALONE",Me:"WEB_DISPLAY_MODE_FULLSCREEN"};function Wj(a){this.u=H(a)}
y(Wj,K);Wj.prototype.getKey=function(){return Ce(this,1)};
Wj.prototype.va=function(){return Ce(this,2)};function Xj(a){this.u=H(a)}
y(Xj,K);Xj.ya=[4,5];function Yj(a){this.u=H(a)}
y(Yj,K);function Zj(a){this.u=H(a)}
y(Zj,K);var ak=[2,3,4,5];function bk(a){this.u=H(a)}
y(bk,K);bk.prototype.getMessage=function(){return Ce(this,1)};function ck(a){this.u=H(a)}
y(ck,K);function dk(a){this.u=H(a)}
y(dk,K);function ek(a){this.u=H(a)}
y(ek,K);ek.ya=[10,17];function fk(a){this.u=H(a)}
y(fk,K);function gk(a){this.u=H(a)}
y(gk,K);function hk(a){this.u=H(a)}
y(hk,K);function ik(a){this.u=H(a,497)}
y(ik,K);
var jk=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function kk(a){this.u=H(a)}
y(kk,K);function lk(a){this.u=H(a)}
y(lk,K);lk.prototype.getPlaylistId=function(){return De(this,2)};
var Ee=[1,2];function mk(a){this.u=H(a)}
y(mk,K);mk.ya=[3];var nk=D.window,ok,pk,qk=(null==nk?void 0:null==(ok=nk.yt)?void 0:ok.config_)||(null==nk?void 0:null==(pk=nk.ytcfg)?void 0:pk.data_)||{};F("yt.config_",qk);function rk(){var a=arguments;1<a.length?qk[a[0]]=a[1]:1===a.length&&Object.assign(qk,a[0])}
function Q(a,b){return a in qk?qk[a]:b}
function sk(){return Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function tk(){var a=qk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function R(a){a=uk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function S(a,b){a=uk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function uk(a){return Q("EXPERIMENT_FLAGS",{})[a]}
function vk(){for(var a=[],b=Q("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=Q("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var wk=0;function xk(a,b){var c;gb(a,function(d){c=b[d];return!!c});
return c}
F("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++wk});function yk(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()}
function zk(){var a=void 0===a?!1:a;var b=xk(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;var Ak=[];function Bk(a){Ak.forEach(function(b){return b(a)})}
function Ck(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Dk(b)}}:a}
function Dk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),rk("ERRORS",b));Bk(a)}
function Ek(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=Q("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),rk("ERRORS",f))}
;var Fk=/^[\w.]*$/,Gk={q:!0,search_query:!0};function Hk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=Ik(f[0]||""),h=Ik(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?kb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Hk);l.args=[{key:m,value:f[1],query:a,method:Jk===n?"unchanged":n}];Gk.hasOwnProperty(m)||Ek(l)}}return c}
var Jk=String(Hk);function Kk(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];fb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Lk(a){"?"===a.charAt(0)&&(a=a.substring(1));return Hk(a,"&")}
function Mk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Lk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ac(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Nk(a){if(!b)var b=window.location.href;var c=a.match(vc)[1]||null,d=xc(a);c&&d?(a=a.match(vc),b=b.match(vc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?xc(b)===d&&(Number(b.match(vc)[4]||null)||null)===(Number(a.match(vc)[4]||null)||null):!0;return a}
function Ik(a){return a&&a.match(Fk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Ok(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"g",S:"ytp-fullscreen-button-corner-0",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-1",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-2",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},
{I:"g",S:"ytp-fullscreen-button-corner-3",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]}}
function Pk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}}
function Qk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}}
function Rk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}}
;var Sk=1;function Tk(a){Gf.call(this);this.g={};this.h={};this.element=this.createElement(a)}
y(Tk,Gf);
Tk.prototype.createElement=function(a,b){b=b||"svg"===a.I;var c=a.S,d=a.df;if(b){var e=document.createElementNS("http://www.w3.org/2000/svg",a.I);Jc&&(a.P||(a.P={}),a.P.focusable="false")}else e=Qe(document,a.I);if(c){if(c=Uk(this,e,"class",c))Vk(this,e,"class",c),this.g[c]=e}else if(d){c=w(d);for(var f=c.next();!f.done;f=c.next())this.g[f.value]=e;Vk(this,e,"class",d.join(" "))}d=a.ef;c=a.ea;if(d)b=Uk(this,e,"child",d),void 0!==b&&e.appendChild(document.createTextNode(String(b)));else if(c)for(d=0,
c=w(c),f=c.next();!f.done;f=c.next())if(f=f.value)if("string"===typeof f)f=Uk(this,e,"child",f),null!=f&&e.appendChild(document.createTextNode(String(f)));else if(f.element)e.appendChild(f.element);else{var g=f;f=this.createElement(g,b);e.appendChild(f);if(g.ma){g="ytp-id-"+Sk.toString();Sk++;f.id=g;var h=document.createElementNS("http://www.w3.org/2000/svg","use");h.setAttribute("class","ytp-svg-shadow");h.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+g);f=e;g=h;h=d++;f.insertBefore(g,
f.childNodes[h]||null)}}if(a=a.P)for(b=e,d=w(Object.keys(a)),c=d.next();!c.done;c=d.next())c=c.value,f=a[c],Vk(this,b,c,"string"===typeof f?Uk(this,b,c,f):f);return e};
Tk.prototype.detach=function(){var a=this.element;a&&a.parentNode&&a.parentNode.removeChild(a)};
function Uk(a,b,c,d){if("{{"===d.substr(0,2))a.h[d]=[b,c];else return d}
Tk.prototype.update=function(a){for(var b=w(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=this.h["{{"+c+"}}"];d&&Vk(this,d[0],d[1],a[c])}};
function Wk(a,b){var c=[];if(!b)return c;b=w(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,null!=d){var e=d.nodeType;1===e||3===e?c.push(d):d&&"string"===typeof d.I?c.push(a.createElement(d)):d.element?c.push(d.element):"string"===typeof d&&-1!==d.indexOf("\n")?d.split("\n").forEach(function(f,g){0<g&&c.push(Qe(document,"BR"));c.push(document.createTextNode(String(f)))}):c.push(document.createTextNode(String(d)))}return c}
function Vk(a,b,c,d){if("child"===c){Re(b);var e;void 0===d?e=void 0:e=!Array.isArray(d)||d&&"string"===typeof d.I?[d]:d;c=Wk(a,e);c=w(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?(c=d?d:"",a=rf.cssText,a||(a=d=tc(),void 0===b.style[d]&&(d=(Lc?"Webkit":Kc?"Moz":Hc?"ms":null)+uc(d),void 0!==b.style[d]&&(a=d)),rf.cssText=a),a&&(b.style[a]=c)):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=Eb(bf(a))),b.setAttribute(c,a))}
Tk.prototype.pa=function(){this.g={};this.h={};this.detach();Gf.prototype.pa.call(this)};function Xk(){}
Xk.prototype.info=function(a){this.log(a,"INFO")};
Xk.prototype.warning=function(a){this.log(a,"WARNING")};
Xk.prototype.error=function(a){this.log(a,"ERROR")};
Xk.prototype.log=function(a,b){console.log("[YT.ImaManager] "+b+": "+a)};
var T=new Xk,Yk={".ima-ad-player":{"background-color":"#000"},".ima-controls":{"background-color":"#000",bottom:"0",height:"40px",width:"100%",position:"absolute"},".ima-control-button":{"background-color":"#000",border:"1px transparent solid","border-style":"none",cursor:"pointer",fill:"#fff",height:"40px",width:"40px"},".ima-control-countdown":{"background-color":"#000","border-style":"none",color:"#fff","font-family":"Arial, sans-serif","font-size":"12px",height:"40px","line-height":"40px","margin-left":"10px",
"vertical-align":"top"},".ima-control-button.fullscreen":{"float":"right"},".ima-control-button:hover":{fill:"#f00"}};
function Zk(a,b,c,d,e){e=void 0===e?{}:e;this.player=a;this.bd=d;this.options=e;this.h=this.ha=null;this.l=document.createElement("div");this.s=document.createElement("div");this.m=document.createElement("button");this.D=document.createElement("button");this.Ba=document.createElement("span");this.ob=null;this.v=document.createElement("button");this.oa=this.i=this.g=this.na=null;this.Qa={currentTime:0};this.Db=this.pb=this.sc=this.uc=this.qb=this.Y=!1;this.nb=this.T=this.K=0;if(window.google&&google&&
google.ima&&google.ima.AdDisplayContainer)if(this.ha=Le(b))if(this.h=Le(c)){if(this.h){this.h.textContent="";if(this.h)for(a=w(Object.entries(Yk)),b=a.next();!b.done;b=a.next()){c=w(b.value);b=c.next().value;c=c.next().value;b="#"+this.h.id+" "+b;if(-1!=b.indexOf("<"))throw Error("Selector does not allow '<', got: "+b);d=b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(d))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: "+
b);a:{e={"(":")","[":"]"};for(var f=[],g=0;g<d.length;g++){var h=d[g];if(e[h])f.push(e[h]);else{b:{var k=void 0;for(k in e)if(e[k]==h){k=!0;break b}k=!1}if(k&&f.pop()!=h){d=!1;break a}}}d=0==f.length}if(!d)throw Error("() and [] in selector must be balanced, got: "+b);if(!(c instanceof Tb)){d=void 0;e="";for(d in c)if(Object.prototype.hasOwnProperty.call(c,d)){if(!/^[-_a-zA-Z0-9]+$/.test(d))throw Error("Name allows only [-_a-zA-Z0-9], got: "+d);f=c[d];null!=f&&(f=Array.isArray(f)?f.map(Vb).join(" "):
Vb(f),e+=d+":"+f+";")}c=e?new Tb(e,Sb):Ub}b+="{";c instanceof Tb&&c.constructor===Tb?c=c.g:(Ka(c),c="type_error:SafeStyle");b=b+c.replace(/</g,"\\3C ")+"}";b=new fc(b,ec);c=$a||($a=new Te);d=c.g;Hc&&d.createStyleSheet?(c=d.createStyleSheet(),sf(c,b)):(d=Me(c.g,"HEAD")[0],d||(e=Me(c.g,"BODY")[0],d=c.yc("HEAD"),e.parentNode.insertBefore(d,e)),e=c.yc("STYLE"),(f=rc())&&e.setAttribute("nonce",f),sf(e,b),c.ad(d,e))}a=this.player.getSize();this.K=a.height;this.T=a.width;b=$k(this).endsWith("%")&&this.options.enableResponsiveDesign?
$k(this):this.T+"px";al(this.h,b,bl(this).endsWith("%")&&this.options.enableResponsiveDesign&&cl(this)?bl(this):this.K+(cl(this)?0:40)+"px");this.h.style.position="relative";al(this.l,b,a.height+"px");this.l.className="ima-ad-player";this.h.appendChild(this.l);cl(this)||(this.s.className="ima-controls",this.m.className="ima-control-button playpause",this.m.title="Play/Pause",dl(this.m,Pk()),this.m.addEventListener("click",this.Rd.bind(this)),this.s.appendChild(this.m),this.D.className="ima-control-button mute",
this.D.title="Mute/Unmute",dl(this.D,Rk()),this.D.addEventListener("click",this.Qd.bind(this)),this.s.appendChild(this.D),this.Ba.className="ima-control-countdown",this.s.appendChild(this.Ba),this.v.className="ima-control-button fullscreen",this.v.title="Fullscreen",dl(this.v,Ok()),this.v.addEventListener("click",this.Sd.bind(this)),this.s.appendChild(this.v),this.h.appendChild(this.s));el(this.h)}this.l?(this.na=window.google&&google&&google.ima&&google.ima.AdDisplayContainer?new google.ima.AdDisplayContainer(this.l):
null)?(fl(this)&&gl(this)&&(this.Nc(),hl(this),this.pb=!0),this.player.addEventListener("onStateChange",this.onStateChange.bind(this)),this.player.addEventListener("onVideoDataChange",this.onVideoDataChange.bind(this)),this.player.addEventListener("onVolumeChange",this.Vd.bind(this)),this.i=new google.ima.AdsLoader(this.na),this.i.addEventListener("adsManagerLoaded",this.Pd.bind(this)),this.i.addEventListener("adError",this.Nd.bind(this)),setInterval(this.ce.bind(this),500),this.enableResponsiveDesign()&&
window.addEventListener("resize",this.Ud.bind(this)),il(this)):T.error("Could not create an AdDisplayContainer. Ad Blocked?"):T.error("Could not create a <div> for ads video.")}else T.error("Could not find ads container. Was given: "+c);else T.error("Could not find YouTube Player IFrame. Was given: "+b);else T.error("Could not find the IMA SDK. Ad Blocked?")}
function hl(a){a.uc||(a.na?(gl(a)&&!a.sc&&a.player.pauseVideo(),a.uc=!0,a.na.initialize(),a.Db=!0,T.info("Done initializing the AdDisplayContainer."),jl(a)):T.error("Trying to initialize the AdDisplayContainer, but it does not exist."))}
function jl(a){a.Db&&(a.g?(T.info("Initializing the AdsManager."),a.g.init(a.T,a.K-(cl(a)?0:40),google.ima.ViewMode.NORMAL),T.info("Starting the AdsManager."),a.g.start(),T.info("Started the AdsManager."),kl(a,a.player.isMuted())):T.warning("Trying to start the AdsManager, but it does not exist."))}
q=Zk.prototype;q.onStateChange=function(a){a=a.data;-1===a?(this.pb=!0,hl(this)):0===a&&this.i&&this.i.contentComplete()};
q.Pd=function(a){this.player.logImaAdEvent(9,0);this.g=this.oa&&!window.yt_embedsEnableImaKillswitch?a.getAdsManager(this.Qa,this.oa):a.getAdsManager(this.Qa);T.info("Loaded AdsManager.");this.g.addEventListener("contentPauseRequested",this.Nc.bind(this));this.g.addEventListener("contentResumeRequested",this.ic.bind(this));this.g.addEventListener("click",this.Id.bind(this));this.g.addEventListener("skipped",this.Ld.bind(this));this.g.addEventListener("adError",this.Od.bind(this));this.g.addEventListener("start",
this.Md.bind(this));this.g.addEventListener("pause",this.Jd.bind(this));this.g.addEventListener("resume",this.Kd.bind(this));jl(this)};
q.Nc=function(){ll(this);this.player.pauseVideo();el(this.ha);dl(this.m,Pk());var a=this.h;a&&(a.style.display="block");this.Y=!0;this.ob=setInterval(this.be.bind(this),500)};
q.ic=function(){this.player.logImaAdEvent(2,ml(this));ll(this);this.ob&&clearInterval(this.ob);this.Y=!1;var a=this.ha;a&&(a.style.display="block");dl(this.m,Qk());el(this.h);this.player.playVideo()};
q.Rd=function(){nl(this,!this.Y);this.player.logImaAdEvent(this.Y?6:5,ml(this))};
function nl(a,b){b!==a.Y&&a.g&&(b?(a.g.resume(),dl(a.m,Pk())):(a.g.pause(),dl(a.m,Qk())),a.Y=b)}
q.Qd=function(){kl(this,!this.qb)};
function kl(a,b){a.g&&b!==a.qb&&(b?(a.g.setVolume(0),a.player.mute(),dl(a.D,{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]})):
(a.g.setVolume(1),a.player.unMute(),dl(a.D,Rk())),a.qb=b)}
q.Sd=function(){var a=this;zk()?ll(this):this.h&&yk(this.h).then(function(){a.g&&a.g.resize(window.screen.width,window.screen.height-(cl(a)?0:40),google.ima.ViewMode.FULLSCREEN);dl(a.v,{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"g",S:"ytp-fullscreen-button-corner-2",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-3",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},
{I:"g",S:"ytp-fullscreen-button-corner-0",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-1",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]})})};
function ll(a){if(zk())a:{var b=zk(),c;xk(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)?zk()==b&&(c=document):c=b;if(c&&(b=xk(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],c))){b.call(c)instanceof Promise||Promise.resolve();break a}Promise.resolve()}a.g&&a.g.resize(a.T,a.K,google.ima.ViewMode.NORMAL);dl(a.v,Ok())}
q.Id=function(){ll(this);nl(this,!1);this.player.logImaAdEvent(4,ml(this))};
q.Jd=function(){nl(this,!1)};
q.Kd=function(){nl(this,!0)};
q.Ld=function(){this.player.logImaAdEvent(3,ml(this))};
q.Md=function(a){this.player.logImaAdEvent(1,ml(this));if(a=a.getAd())this.nb=a.getDuration()};
q.ce=function(){this.Qa.currentTime=this.player.getCurrentTime();var a=this.player.getSize();if(this.K!==a.height||this.T!==a.width){var b=a.width;a=a.height;if(!this.enableResponsiveDesign()&&(this.T=b,this.K=a,cl(this)||al(this.s,b+"px",(cl(this)?0:40)+"px"),this.h&&this.l&&(al(this.h,b+"px",a+(cl(this)?0:40)+"px"),al(this.l,b+"px",a+"px"),this.g))){var c=zk()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL;this.g.resize(b,a,c)}}};
q.Ud=function(){var a=this;clearTimeout(this.cd);this.cd=setTimeout(function(){if(a.h&&a.l&&a.g){var b=zk()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL;if(b!==google.ima.ViewMode.FULLSCREEN){var c=a.h.clientWidth,d=a.h.clientHeight;al(a.l,c+"px",d+"px");a.g.resize(c,d,b)}}},100)};
q.Vd=function(a){kl(this,a.data.muted)};
function il(a){if(a.i)if(gl(a)){var b=new google.ima.AdsRequest;a.oa=new google.ima.AdsRenderingSettings;cl(a)&&(a.oa.useStyledLinearAds=!0);a.bd(b,a.oa);if(b.adTagUrl){b.linearAdSlotWidth=a.T;b.linearAdSlotHeight=a.K;var c=b.adTagUrl;-1!==c.indexOf("?")?(c=(c||"").split("#")[0],c=c.split("?",2),c=Lk(1<c.length?c[1]:c[0])):c={};var d={},e=a.player.getVideoData();e.video_id&&!c.vid&&(d.vid=e.video_id);e=a.player.getPlayerMode();if(!c.vpa){var f;b.setAdWillAutoPlay(!(null==(f=e.pfp)||!f.autoplay))}if(!c.vpmute){var g;
b.setAdWillPlayMuted(!(null==(g=e.pfp)||!g.mutedAutoplay))}d.cust_params="yt_embed_ima=1";c.cust_params&&(d.cust_params=c.cust_params+"&yt_embed_ima=1");b.adTagUrl=Mk(b.adTagUrl,d||{},!0);a.i.requestAds(b);a.player.logImaAdEvent(8,0)}else T.error("The adsTagUrl field was not set by the embedder.")}else T.error("IMA integration is disabled for this video.")}
q.onVideoDataChange=function(a){"newdata"===a.data.type&&(this.g&&(this.g.destroy(),this.g=null),this.i&&this.i.contentComplete(),il(this))};
q.be=function(){if(this.Ba&&this.g){var a=this.nb-this.g.getRemainingTime();a=(new Date(1E3*a)).toISOString().substring(14,19);var b=(new Date(1E3*this.nb)).toISOString().substring(14,19);this.Ba.innerText=a+" / "+b}};
q.Nd=function(a){this.sc=!0;var b;T.error("IMA AdsLoader error: "+(null==(b=a.getError())?void 0:b.getMessage()));this.player.logImaAdEvent(10,ml(this));this.g&&this.g.destroy();(fl(this)||this.pb)&&this.ic()};
q.Od=function(a){var b;T.error("IMA AdsManager error: "+(null==(b=a.getError())?void 0:b.getMessage()));this.player.logImaAdEvent(10,ml(this));this.g&&this.g.destroy();this.ic()};
function al(a,b,c){a.style.width=b;a.style.height=c}
function el(a){a&&(a.style.display="none")}
function dl(a,b){a.textContent="";b=new Tk(b);a.append(b.element)}
function fl(a){a=a.player.getPlayerMode();return a.pfp&&(a.pfp.autoplay||a.pfp.mutedAutoplay)}
function gl(a){a=a.player.getPlayerMode();return a.pfp&&a.pfp.enableIma}
function ml(a){return 0===a.Qa.currentTime?1:0===a.player.getPlayerState()?3:2}
function $k(a){var b,c;return null!=(c=null==(b=a.ha)?void 0:b.width)?c:""}
function bl(a){var b,c;return null!=(c=null==(b=a.ha)?void 0:b.height)?c:""}
q.enableResponsiveDesign=function(){return bl(this).endsWith("%")&&!!this.options.enableResponsiveDesign&&cl(this)||$k(this).endsWith("%")&&!!this.options.enableResponsiveDesign};
function cl(a){return!a.options.enableControls&&!window.yt_embedsEnableImaKillswitch}
q.getAdsManager=function(){return this.g};
q.pd=function(){return this.i};F("YT.ImaManager",Zk);
F("YT.createPlayerForPublishers",function(a,b,c,d){a=Le(a);var e=document.createElement("div");e.id=a.id+"-player";a.appendChild(e);var f=document.createElement("div");f.id=a.id+"-ad";a.appendChild(f);c=Object.assign({},{imaOptions:{},youtubeOptions:{}},c);c.imaOptions.enableResponsiveDesign=!0;c.youtubeOptions.events||(c.youtubeOptions.events={});c.youtubeOptions.events.onReady&&T.error("onReady event handler is already defined. Overwriting!");c.youtubeOptions.events.onReady=function(){var h,k=new Zk(g,
e.id,f,b,null==(h=c)?void 0:h.imaOptions);d&&d(g,k)};
if(!c.youtubeOptions.embedConfig)c.youtubeOptions.embedConfig={};else if("string"===typeof c.youtubeOptions.embedConfig)try{c.youtubeOptions.embedConfig=JSON.parse(c.youtubeOptions.embedConfig)}catch(h){T.error("Invalid embed_config JSON."),c.youtubeOptions.embedConfig={}}c.youtubeOptions.embedConfig.adsConfig={disableAds:!0};c.youtubeOptions.embedConfig.enableIma=!0;var g=new YT.Player(e,c.youtubeOptions)});
Zk.prototype.getAdsLoader=Zk.prototype.pd;Zk.prototype.getAdsManager=Zk.prototype.getAdsManager;var ol={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pl(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ol||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
pl.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pl.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pl.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",qb);var ql=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",ql);
function rl(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function sl(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?tl()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
var tl=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ul(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=rl(a,b,c,d);if(!e){e=++ql.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new pl(h);if(!Se(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new pl(h);
h.currentTarget=a;return c.call(a,h)};
g=Ck(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tl()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d]}}}
;function vl(a,b){"function"===typeof a&&(a=Ck(a));return window.setTimeout(a,b)}
function wl(a){"function"===typeof a&&(a=Ck(a));return window.setInterval(a,250)}
;function xl(a){var b=yl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=tf;e.flash="0";a:{try{var f=b.g.top.location.href}catch(oa){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Je:g;try{var h=g.history.length}catch(oa){h=0}e.u_his=h;var k;e.u_h=null==(k=Je.screen)?void 0:k.height;var l;e.u_w=null==(l=Je.screen)?void 0:l.width;var m;e.u_ah=null==(m=Je.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Je.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Je.screen)?void 0:r.colorDepth}catch(oa){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(oa){}try{var u=h.outerWidth;var z=h.outerHeight}catch(oa){}try{var C=h.innerWidth;var P=h.innerHeight}catch(oa){}try{var U=h.screenLeft;var Z=h.screenTop}catch(oa){}try{C=h.innerWidth,P=h.innerHeight}catch(oa){}try{var Pa=h.screen.availWidth;var Fa=h.screen.availTop}catch(oa){}p=[U,Z,p,t,Pa,Fa,u,z,C,P];t=b.g.top;try{var Qa=(t||window).document,pa=
"CSS1Compat"==Qa.compatMode?Qa.documentElement:Qa.body;var va=(new Ke(pa.clientWidth,pa.clientHeight)).round()}catch(oa){va=new Ke(-12245933,-12245933)}Qa=va;va={};var wa=void 0===wa?D:wa;pa=new ng;"SVGElement"in wa&&"createElementNS"in wa.document&&pa.set(0);t=mf();t["allow-top-navigation-by-user-activation"]&&pa.set(1);t["allow-popups-to-escape-sandbox"]&&pa.set(2);wa.crypto&&wa.crypto.subtle&&pa.set(3);"TextDecoder"in wa&&"TextEncoder"in wa&&pa.set(4);wa=og(pa);va.bc=wa;va.bih=Qa.height;va.biw=
Qa.width;va.brdim=p.join();b=b.h;b=(va.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,va.wgl=!!Je.WebGLRenderingContext,va);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var yl=new function(){var a=window.document;this.g=window;this.h=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return Kk(xl(a))});Wa();var zl="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function Al(){if(!zl)return null;var a=zl();return"open"in a?a:null}
;var Bl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Bl);var Cl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Dl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Bl)),El=!1;
function Fl(a,b){b=void 0===b?{}:b;var c=Nk(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Cl){var f=Q(Cl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=Q("VISITOR_DATA"));!f||!c&&xc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===Q("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!xc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!xc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&xc(a)||(b["X-YouTube-Ad-Signals"]=Kk(xl()));return b}
function Gl(a){var b=window.location.search,c=xc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Nk(a)&&(c=document.location.hostname);var d=wc(a.match(vc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Lk(b),f={};fb(Dl,function(g){e[g]&&(f[g]=e[g])});
return Mk(a,f||{},!1)}
function Hl(a,b){var c=b.format||"JSON";a=Il(a,b);var d=Jl(a,b),e=!1,f=Kl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Ll(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=vl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Il(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Mk(a,b||{},!0);return a}
function Jl(a,b){var c=Q("XSRF_FIELD_NAME"),d=Q("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||xc(a)&&!b.withCredentials&&xc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Lk(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Ac(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!El&&a&&"POST"!=b.method&&(El=!0,Dk(Error("AJAX request with postData should use POST")));return e}
function Ll(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ek(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ml(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nl(g)})}d&&Ol(e);
return e}
function Ol(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=wb();d=e?e.createHTML(d):d;a[c]=new pc(d)}else Ol(a[b])}}
function Ml(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Nl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pl(a,b){b.method="POST";b.postParams||(b.postParams={});return Hl(a,b)}
function Kl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ck(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Al();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Gl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fl(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Ql=[{dc:function(a){return"Cannot read property '"+a.key+"'"},
Ob:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{dc:function(a){return"Cannot call '"+a.key+"'"},
Ob:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{dc:function(a){return a.key+" is not defined"},
Ob:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sl={La:[],Ia:[{tb:Rl,weight:500}]};function Rl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tl(){this.Ia=[];this.La=[]}
var Ul;function Vl(){if(!Ul){var a=Ul=new Tl;a.La.length=0;a.Ia.length=0;Sl.La&&a.La.push.apply(a.La,Sl.La);Sl.Ia&&a.Ia.push.apply(a.Ia,Sl.Ia)}return Ul}
;var Wl=new L;function Xl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$l(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Xl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?$l(f+".ve",g,h,k):0;d+=f;d+=$l(e,a[e],b,c);if(500<d)break}}else c[b]=am(a),d+=c[b].length;else c[b]=am(a),d+=c[b].length;return d}
function $l(a,b,c,d){c+="."+a;a=am(b);d[c]=a;return c.length+a.length}
function am(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function bm(){}
;function cm(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function dm(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var em={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},fm={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},gm={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},hm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function im(){var a=D.navigator;return a?a.connection:void 0}
;function jm(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(jm,Error);function km(){try{return lm(),!0}catch(a){return!1}}
function lm(){if(void 0!==Q("DATASYNC_ID"))return Q("DATASYNC_ID");throw new jm("Datasync ID not set","unknown");}
;function mm(){}
function nm(a,b){return mg.Ra(a,0,b)}
mm.prototype.Ca=function(a,b){return this.Ra(a,1,b)};
mm.prototype.rb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var om=S("web_emulated_idle_callback_delay",300),pm=1E3/60-3,qm=[8,5,4,3,2,1,0];
function rm(a){a=void 0===a?{}:a;Gf.call(this);this.h=[];this.i={};this.na=this.g=0;this.ha=this.s=!1;this.K=[];this.T=this.oa=!1;for(var b=w(qm),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.m=0;this.Db=a.timeout||1;this.D=pm;this.v=0;this.Ba=this.Td.bind(this);this.qb=this.ae.bind(this);this.nb=this.dd.bind(this);this.ob=this.td.bind(this);this.pb=this.Wd.bind(this);this.Qa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.Y=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.Ba)}
y(rm,Gf);q=rm.prototype;q.rb=function(a){var b=Wa();sm(a);a=Wa()-b;this.s||(this.D-=a)};
q.Ra=function(a,b,c){++this.na;if(10===b)return this.rb(a),this.na;var d=this.na;this.i[d]=a;this.s&&!c?this.K.push({id:d,priority:b}):(this.h[b].push(d),this.ha||this.s||(0!==this.g&&tm(this)!==this.v&&this.stop(),this.start()));return d};
q.ia=function(a){delete this.i[a]};
function um(a){a.K.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};a.stop()}
function tm(a){if(a.h[8].length){if(a.T)return 4;if(!document.hidden&&a.Y)return 3}for(var b=5;b>=a.m;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.Y?3:2:1;return 0}
function vm(a){var b=E("yt.logging.errors.log");b&&b(a)}
function sm(a){try{a()}catch(b){vm(b)}}
function wm(a){for(var b=w(qm),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
q.td=function(a){var b=void 0;a&&(b=a.timeRemaining());this.oa=!0;xm(this,b);this.oa=!1};
q.ae=function(){xm(this)};
q.dd=function(){ym(this)};
q.Wd=function(a){this.T=!0;var b=tm(this);4===b&&b!==this.v&&(this.stop(),this.start());xm(this,void 0,a);this.T=!1};
q.Td=function(){document.hidden||ym(this);this.g&&(this.stop(),this.start())};
function ym(a){a.stop();a.s=!0;for(var b=Wa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&sm(e)}zm(a);a.s=!1;wm(a)&&a.start();b=Wa()-b;a.D-=b}
function zm(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.h[d.priority].push(d.id)}a.K.length=0}
function xm(a,b,c){a.T&&4===a.v&&a.g||a.stop();a.s=!0;b=Wa()+(b||a.D);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){vm(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&sm(e);d=a.oa?0:1;d=a.m>d?a.m:d;if(!(Wa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&sm(c)}while(c&&Wa()<b)}a.s=!1;zm(a);a.D=pm;wm(a)&&a.start()}
q.start=function(){this.ha=!1;if(0===this.g)switch(this.v=tm(this),this.v){case 1:var a=this.ob;this.g=this.Qa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,om);break;case 2:this.g=window.setTimeout(this.qb,this.Db);break;case 3:this.g=window.requestAnimationFrame(this.pb);break;case 4:this.g=window.setTimeout(this.nb,0)}};
q.pause=function(){this.stop();this.ha=!0};
q.stop=function(){if(this.g){switch(this.v){case 1:var a=this.g;this.Qa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.g);break;case 3:window.cancelAnimationFrame(this.g)}this.g=0}};
q.pa=function(){um(this);this.stop();this.Y&&document.removeEventListener("visibilitychange",this.Ba);Gf.prototype.pa.call(this)};var Am=E("yt.scheduler.instance.timerIdMap_")||{},Bm=S("kevlar_tuner_scheduler_soft_state_timer_ms",800),Cm=0,Dm=0;function Em(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Ja)a=new rm(Q("scheduler")||{}),F("ytglobal.schedulerInstanceInstance_",a);return a}
function Fm(){Gm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Ff(a),F("ytglobal.schedulerInstanceInstance_",null))}
function Gm(){um(Em());for(var a in Am)Am.hasOwnProperty(a)&&delete Am[Number(a)]}
function Hm(a,b,c){if(!c)return c=void 0===c,-Em().Ra(a,b,c);var d=window.setTimeout(function(){var e=Em().Ra(a,b);Am[d]=e},c);
return d}
function Im(a){Em().rb(a)}
function Jm(a){var b=Em();if(0>a)b.ia(-a);else{var c=Am[a];c?(b.ia(c),delete Am[a]):window.clearTimeout(a)}}
function Km(){Lm()}
function Lm(){window.clearTimeout(Cm);Em().start()}
function Mm(){Em().pause();window.clearTimeout(Cm);Cm=window.setTimeout(Km,Bm)}
function Nm(){window.clearTimeout(Dm);Dm=window.setTimeout(function(){Om(0)},Bm)}
function Om(a){Nm();var b=Em();b.m=a;b.start()}
function Pm(a){Nm();var b=Em();b.m>a&&(b.m=a,b.start())}
function Qm(){window.clearTimeout(Dm);var a=Em();a.m=0;a.start()}
;function Rm(){mm.apply(this,arguments)}
y(Rm,mm);function Sm(){Rm.g||(Rm.g=new Rm);return Rm.g}
Rm.prototype.Ra=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):vl(a,c||0)};
Rm.prototype.ia=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Rm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Rm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var mg=Sm();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",Fm),F("yt.scheduler.instance.addJob",Hm),F("yt.scheduler.instance.addImmediateJob",Im),F("yt.scheduler.instance.cancelJob",Jm),F("yt.scheduler.instance.cancelAllJobs",Gm),F("yt.scheduler.instance.start",Lm),F("yt.scheduler.instance.pause",Mm),F("yt.scheduler.instance.setPriorityThreshold",Om),F("yt.scheduler.instance.enablePriorityThreshold",Pm),F("yt.scheduler.instance.clearPriorityThreshold",Qm),F("yt.scheduler.initialized",
!0));function Tm(a){var b=new Oh;(b=(b.h=Nh(b.g))?a?new Uh(b,a):b:null)||(a=new Ph(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Ih(a):null;this.h=document.domain||window.location.hostname}
Tm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(jh(b))}catch(f){return}else e=escape(b);b=this.h;Bf.set(""+a,e,{ac:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Tm.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Bf.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Tm.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Bf.remove(""+a,"/",void 0===b?"youtube.com":b)};var Um=function(){var a;return function(){a||(a=new Tm("ytidb"));return a}}();
function Vm(){var a;return null==(a=Um())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Wm=[],Xm=!1;function Ym(a){Xm||(Wm.push({type:"ERROR",payload:a}),10<Wm.length&&Wm.shift())}
function Zm(a,b){Xm||(Wm.push({type:"EVENT",eventType:a,payload:b}),10<Wm.length&&Wm.shift())}
;function $m(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function an(a){return a.substr(0,a.indexOf(":"))||a}
;var bn=Zc||$c;var cn={},dn=(cn.AUTH_INVALID="No user identifier specified.",cn.EXPLICIT_ABORT="Transaction was explicitly aborted.",cn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",cn.MISSING_INDEX="Index not created.",cn.MISSING_OBJECT_STORES="Object stores not created.",cn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",cn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",cn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
cn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",cn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",cn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",cn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",cn),en={},fn=(en.AUTH_INVALID="ERROR",en.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",en.EXPLICIT_ABORT="IGNORED",en.IDB_NOT_SUPPORTED="ERROR",en.MISSING_INDEX=
"WARNING",en.MISSING_OBJECT_STORES="ERROR",en.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",en.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",en.QUOTA_EXCEEDED="WARNING",en.QUOTA_MAYBE_EXCEEDED="WARNING",en.UNKNOWN_ABORT="WARNING",en.INCOMPATIBLE_DB_VERSION="WARNING",en),gn={},hn=(gn.AUTH_INVALID=!1,gn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,gn.EXPLICIT_ABORT=!1,gn.IDB_NOT_SUPPORTED=!1,gn.MISSING_INDEX=!1,gn.MISSING_OBJECT_STORES=!1,gn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,gn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,gn.QUOTA_EXCEEDED=!1,gn.QUOTA_MAYBE_EXCEEDED=!0,gn.UNKNOWN_ABORT=!0,gn.INCOMPATIBLE_DB_VERSION=!1,gn);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?dn[a]:c;d=void 0===d?fn[a]:d;e=void 0===e?hn[a]:e;jm.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,V.prototype)}
y(V,jm);function jn(a,b){V.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},dn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,jn.prototype)}
y(jn,V);function kn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,kn.prototype)}
y(kn,Error);var ln=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function mn(a,b,c,d){b=an(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof V)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new V("QUOTA_EXCEEDED",a);if(ad&&"UnknownError"===e.name)return new V("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof kn)return new V("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&ln.some(function(f){return e.message.includes(f)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new V("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Ye:e.name})];e.level="WARNING";return e}
function nn(a,b,c){var d=Vm();return new V("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function on(a){if(!a)throw Error();throw a;}
function pn(a){return a}
function qn(a){this.g=a}
function rn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
rn.resolve=function(a){return new rn(new qn(function(b,c){a instanceof rn?a.then(b,c):b(a)}))};
rn.reject=function(a){return new rn(new qn(function(b,c){c(a)}))};
rn.prototype.then=function(a,b){var c=this,d=null!=a?a:pn,e=null!=b?b:on;return new rn(new qn(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){sn(c,c,d,f,g)}),c.h.push(function(){tn(c,c,e,f,g)})):"FULFILLED"===c.state.status?sn(c,c,d,f,g):"REJECTED"===c.state.status&&tn(c,c,e,f,g)}))};
function un(a,b){a.then(void 0,b)}
function sn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof rn?vn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof rn?vn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof rn?vn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function wn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function xn(a){return new Promise(function(b,c){wn(a,b,c)})}
function yn(a){return new rn(new qn(function(b,c){wn(a,b,c)}))}
;function zn(a,b){return new rn(new qn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var An=window,X=An.ytcsi&&An.ytcsi.now?An.ytcsi.now:An.performance&&An.performance.timing&&An.performance.now&&An.performance.timing.navigationStart?function(){return An.performance.timing.navigationStart+An.performance.now()}:function(){return(new Date).getTime()};function Bn(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(X());this.h=!1}
q=Bn.prototype;q.add=function(a,b,c){return Cn(this,[a],{mode:"readwrite",ba:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Cn(this,[a],{mode:"readwrite",ba:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Dn(a,b,c){a=a.g.createObjectStore(b,c);return new En(a)}
q.delete=function(a,b){return Cn(this,[a],{mode:"readwrite",ba:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Cn(this,[a],{mode:"readonly",ba:!0},function(c){return c.objectStore(a).get(b)})};
function Fn(a,b,c){return Cn(a,[b],{mode:"readwrite",ba:!0},function(d){d=d.objectStore(b);return yn(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Cn(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,t,u;return B(function(z){switch(z.g){case 1:var C={mode:"readonly",ba:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?C.mode=c:Object.assign(C,c);e=C;a.transactionCount++;f=e.ba?3:1;g=0;case 2:if(h){z.C(4);break}g++;k=Math.round(X());ta(z,5);l=a.g.transaction(b,e.mode);C=new Gn(l);C=Hn(C,d);return A(z,C,7);case 7:return m=z.h,n=Math.round(X()),In(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:r=ua(z);p=Math.round(X());t=mn(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof V&&!t.g)||g>=f)In(a,k,p,g,t,b.join(),e),h=t;z.C(2);break;case 4:return z.return(Promise.reject(h))}})}
function In(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Zm("QUOTA_EXCEEDED",{dbName:an(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Zm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Jn(a,!1,d,f,b,g.tag),Ym(e)):Jn(a,!0,d,f,b,g.tag)}
function Jn(a,b,c,d,e,f){Zm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function En(a){this.g=a}
q=En.prototype;q.add=function(a,b){return yn(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return yn(this.g.clear()).then(function(){})};
function Kn(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Ln(a,b){return Mn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Ln(this,a):yn(this.g.delete(a))};
q.get=function(a){return yn(this.g.get(a))};
q.index=function(a){try{return new Nn(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new kn(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function Mn(a,b,c){a=a.g.openCursor(b.query,b.direction);return On(a).then(function(d){return zn(d,c)})}
function Gn(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=V;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Hn(a,b){var c=new Promise(function(d,e){try{un(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Gn.prototype.abort=function(){this.g.abort();this.h=!0;throw new V("EXPLICIT_ABORT");};
Gn.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new En(a),this.i.set(a,b));return b};
function Nn(a){this.g=a}
q=Nn.prototype;q.delete=function(a){return Pn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return yn(this.g.get(a))};
q.getKey=function(a){return yn(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function Pn(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return On(a).then(function(d){return zn(d,c)})}
function Qn(a,b){this.request=a;this.cursor=b}
function On(a){return yn(a).then(function(b){return b?new Qn(a,b):null})}
q=Qn.prototype;q.advance=function(a){this.cursor.advance(a);return On(this.request)};
q.continue=function(a){this.cursor.continue(a);return On(this.request)};
q.delete=function(){return yn(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.va=function(){return this.cursor.value};
q.update=function(a){return yn(this.cursor.update(a))};function Rn(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Bn(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.fd,k=c.gd,l=c.Zd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Zm("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:an(a)});var t=f(),u=new Gn(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Zm("IDB_UNEXPECTEDLY_CLOSED",{dbName:an(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Sn(a,b,c){c=void 0===c?{}:c;return Rn(a,b,c)}
function Tn(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return ta(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.fd)&&c.addEventListener("blocked",function(){e()}),A(g,xn(c),4);
if(2!=g.g)g.g=0,g.m=0;else throw f=ua(g),mn(f,a,"",-1);})}
;function Un(a,b){this.name=a;this.options=b;this.i=!0;this.m=this.l=0}
Un.prototype.h=function(a,b,c){c=void 0===c?{}:c;return Sn(a,b,c)};
Un.prototype.delete=function(a){a=void 0===a?{}:a;return Tn(this.name,a)};
function Vn(a,b){return new V("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Wn(a,b){if(!b)throw nn("openWithToken",an(a.name));return Xn(a)}
function Xn(a){function b(){var f,g,h,k,l,m,n,r,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",ta(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:for(var z=h=u.h,C=a.options,P=[],U=w(Object.keys(C.kb)),Z=U.next();!Z.done;Z=U.next()){Z=Z.value;var Pa=C.kb[Z],Fa=void 0===Pa.Xd?Number.MAX_VALUE:Pa.Xd;!(z.g.version>=Pa.sb)||z.g.version>=Fa||z.g.objectStoreNames.contains(Z)||P.push(Z)}k=P;if(0===k.length){u.C(5);break}l=Object.keys(a.options.kb);m=h.objectStoreNames();
if(a.m<S("ytidb_reopen_db_retries",0))return a.m++,h.close(),Ym(new V("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.l<S("ytidb_remake_db_retries",1))){u.C(6);break}a.l++;return A(u,a.delete(),7);case 7:return Ym(new V("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new jn(m,l);case 5:return u.return(h);case 2:n=ua(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.C(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,Vn(a,p);return u.return(r);case 8:throw c(),n instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),mn(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Vn(a);if(a.g)return a.g;var d={gd:function(f){f.close()},
closed:c,Zd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Ko=new Un("YtIdbMeta",{kb:{databases:{sb:1}},upgrade:function(a,b){b(1)&&Dn(a,"databases",{keyPath:"actualName"})}});
function Lo(a,b){var c;return B(function(d){if(1==d.g)return A(d,Wn(Ko,b),2);c=d.h;return d.return(Cn(c,["databases"],{ba:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return yn(f.g.put(a,void 0)).then(function(){})})}))})}
function Mo(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Wn(Ko,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function No(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Wn(Ko,b),2)):3!=e.g?(d=e.h,A(e,Cn(d,["databases"],{ba:!0,mode:"readonly"},function(f){c.length=0;return Mn(f.objectStore("databases"),{},function(g){a(g.va())&&c.push(g.va());return g.continue()})}),3)):e.return(c)})}
function Oo(a){return No(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Po,Qo=new function(){}(new function(){});
function Ro(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Vm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=bn)f=/WebKit\/([0-9]+)/.exec(ic()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(ic()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ic)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ta(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Lo(d,Qo),4);case 4:return A(e,Mo("yt-idb-test-do-not-use",Qo),5);case 5:return e.return(!0);case 2:return ua(e),e.return(!1)}})}
function So(){if(void 0!==Po)return Po;Xm=!0;return Po=Ro().then(function(a){Xm=!1;var b;if(null!=(b=Um())&&b.g){var c;b={hasSucceededOnce:(null==(c=Vm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Um())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function To(){return E("ytglobal.idbToken_")||void 0}
function Uo(){var a=To();return a?Promise.resolve(a):So().then(function(b){(b=b?Qo:void 0)&&F("ytglobal.idbToken_",b);return b})}
;new kh;function Vo(a){if(!km())throw a=new V("AUTH_INVALID",{dbName:a}),Ym(a),a;var b=lm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wo(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Uo(),2);case 2:g=m.h;if(!g)throw h=nn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ym(h),h;$m(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vo(a);ta(m,3);return A(m,Lo(k,g),5);case 5:return A(m,Sn(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=ua(m),ta(m,7),A(m,Mo(k.actualName,g),9);case 9:m.g=
8;m.m=0;break;case 7:ua(m);case 8:throw l;}})}
function Xo(a,b,c){c=void 0===c?{}:c;return Wo(a,b,!1,c)}
function Yo(a,b,c){c=void 0===c?{}:c;return Wo(a,b,!0,c)}
function Zo(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Uo(),2);if(3!=e.g){c=e.h;if(!c)return e.return();$m(a);d=Vo(a);return A(e,Tn(d.actualName,b),3)}return A(e,Mo(d.actualName,c),0)})}
function $o(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,Tn(d.actualName,b),2):A(e,Mo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ap(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Uo(),2);if(3!=d.g){b=d.h;if(!b)return d.return();$m("LogsDatabaseV2");return A(d,Oo(b),3)}c=d.h;return A(d,$o(c,a,b),0)})}
function bp(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Uo(),2);if(3!=d.g){c=d.h;if(!c)return d.return();$m(a);return A(d,Tn(a,b),3)}return A(d,Mo(a,c),0)})}
;function cp(a,b){Un.call(this,a,b);this.options=b;$m(a)}
y(cp,Un);function dp(a,b){var c;return function(){c||(c=new cp(a,b));return c}}
cp.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ub?Yo:Xo)(a,b,Object.assign({},c))};
cp.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ub?bp:Zo)(this.name,a)};
function ep(a,b){return dp(a,b)}
;var fp={},gp=ep("ytGcfConfig",{kb:(fp.coldConfigStore={sb:1},fp.hotConfigStore={sb:1},fp),Ub:!1,upgrade:function(a,b){b(1)&&(Kn(Dn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Kn(Dn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function hp(a){return Wn(gp(),a)}
function ip(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:X()},A(g,hp(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,Fn(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function jp(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},A(h,hp(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,Fn(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function kp(a){var b,c;return B(function(d){return 1==d.g?A(d,hp(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Cn(b,["coldConfigStore"],{mode:"readwrite",ba:!0},function(e){return Pn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.va()})}),3)):d.return(c)})}
function lp(a){var b,c;return B(function(d){return 1==d.g?A(d,hp(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Cn(b,["hotConfigStore"],{mode:"readwrite",ba:!0},function(e){return Pn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.va()})}),3)):d.return(c)})}
;function mp(){Gf.call(this);this.h=[];this.g=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],F("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(mp,Gf);mp.prototype.pa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Gf.prototype.pa.call(this)};function np(){this.h=0;this.i=new mp}
function op(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!R("start_client_gcf")){g.C(0);break}c&&(a.l=c,F("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=To();if(!d){g.C(3);break}if(c){g.C(4);break}return A(g,lp(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,ip(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function pp(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!R("start_client_gcf"))return h.C(0);a.coldHashData=b;F("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=To())?c?h.C(4):A(h,kp(d),5):h.C(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.C(0);g=c.configData;return A(h,jp(c,b,g,d),0)})}
np.prototype.g=function(a){this.hotHashData=a;F("yt.gcf.config.hotHashData",this.hotHashData||null)};function qp(){return"INNERTUBE_API_KEY"in qk&&"INNERTUBE_API_VERSION"in qk}
function rp(){return{ud:Q("INNERTUBE_API_KEY"),vd:Q("INNERTUBE_API_VERSION"),Xb:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Gc:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),wd:Q("INNERTUBE_CONTEXT_CLIENT_NAME",1),Hc:Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),Jc:Q("INNERTUBE_CONTEXT_HL"),Ic:Q("INNERTUBE_CONTEXT_GL"),xd:Q("INNERTUBE_HOST_OVERRIDE")||"",zd:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),yd:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA")}}
function sp(a){var b={client:{hl:a.Jc,gl:a.Ic,clientName:a.Gc,clientVersion:a.Hc,configInfo:a.Xb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=vk();0<c.length&&(b.request={internalExperimentFlags:c});tp(a,void 0,b);up(void 0,b);vp(void 0,b);wp(a,void 0,b);xp(void 0,b);R("start_client_gcf")&&yp(void 0,b);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&
(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Lk(Q("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function tp(a,b,c){a=a.Gc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=ye(b,Lj,96)||new Lj;var d=cm();d=Object.keys(Vj).indexOf(d);d=-1===d?null:d;null!==d&&Ge(c,3,d);I(b,Lj,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=cm())}
function up(a,b){var c=E("yt.embedded_player.embed_url");c&&(a?(b=ye(a,Rj,7)||new Rj,J(b,4,c),I(a,Rj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function vp(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=D.navigator)?0:c.deviceMemory)){var d;c=null==(d=D.navigator)?void 0:d.deviceMemory;a?se(a,95,Zd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function wp(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=ye(b,Kj,62))?d:new Kj;J(c,6,a.appInstallData);I(b,Kj,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function xp(a,b){a:{var c=im();if(c){var d=em[c.type||"unknown"]||"CONN_UNKNOWN";c=em[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Ge(a,61,fm[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=im(),d=null!=d&&d.effectiveType?hm.hasOwnProperty(d.effectiveType)?hm[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Ge(a,94,gm[d]):
b&&(b.client.effectiveConnectionType=d)))}
function zp(a,b,c){c=void 0===c?{}:c;var d={};Q("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":Q("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Se||Q("AUTHORIZATION");if(!b)if(a)b="Bearer "+E("gapi.auth.getToken")().Re;else{bm.g||(bm.g=new bm);a={};if(c=Ef([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(Q("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in qk||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in qk&&(a["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID"));R("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function yp(a,b){if(!np.g){var c=new np;np.g=c}c=np.g;var d=X()-c.h;if(0!==c.h&&d<S("send_config_hash_timer"))c=void 0;else{d=E("yt.gcf.config.coldConfigData");var e=E("yt.gcf.config.hotHashData"),f=E("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=X());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=ye(a,Kj,62))?g:new Kj;J(b,1,c);J(b,3,d);b.g(e);I(a,Kj,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Ap="undefined"!==typeof TextEncoder?new TextEncoder:null,Bp=Ap?function(a){return Ap.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Cp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Cb;L.prototype.publish=L.prototype.lb;L.prototype.clear=L.prototype.clear;F("ytPubsub2Pubsub2Instance",Cp);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function Dp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={gf:a,ff:b},(b=E("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Ep=void 0,Fp=void 0;function Gp(){if(!Fp){var a=Q("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=wb();a=b?b.createScriptURL(a):a;a=new Bb(a,Cb)}else a=null;Fp=a}else Fp=null}return Fp||void 0}
function Hp(){var a=Gp();if(!Ep&&void 0!==a){var b=Worker;a instanceof Bb&&a.constructor===Bb?a=a.g:(Ka(a),a="type_error:TrustedResourceUrl");Ep=new b(a,void 0)}return Ep}
;var Ip=S("max_body_size_to_compress",5E5),Jp=S("min_body_size_to_compress",500),Kp=!0,Lp=0,Mp=0,Np=S("compression_performance_threshold_lr",250),Op=S("slow_compressions_before_abandon_count",4),Pp=!1,Qp=new Map,Rp=1,Sp=!0;function Tp(){if("function"===typeof Worker&&Gp()&&!Pp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Qp.get(c.key);d&&(Up(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Qp.delete(c.key))}},b=Hp();
b&&(b.addEventListener("message",a),b.onerror=function(){Qp.clear()},Pp=!0)}}
function Vp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:X(),ticks:{},infos:{}};if(Kp)try{try{var g=(new Blob(b.split(""))).size}catch(m){Ek(m),g=null}if(null!=g&&(g>Ip||g<Jp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Sp||!R("initial_gzip_use_main_thread"))){Pp||Tp();var h=Hp();if(h&&!e){Qp.set(Rp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Rp});Rp++;return}}var k=Bp(b);b=(b=void 0,{});b.sd=!0;var l=new Fj(b);
l.push(k,!0);if(l.err)throw l.msg||fi[l.err];Up(l.result,f,a,c,d)}}catch(m){Ek(m),d(a,c)}else d(a,c)}
function Up(a,b,c,d,e){Sp=!1;var f=X();b.ticks.gelc=f;Mp++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Np&&(Lp++,R("abandon_compression_after_N_slow_zips")?Mp===S("compression_disable_point")&&Lp>Op&&(Kp=!1):Kp=!1);R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Dp("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Wp(a){a=Object.assign({},a);delete a.Authorization;var b=Ef();if(b){var c=new Wg;c.update(Q("INNERTUBE_API_KEY"));c.update(b);a.hash=dd(c.digest(),3)}return a}
;var Xp;function Yp(){Xp||(Xp=new Tm("yt.innertube"));return Xp}
function Zp(a,b,c,d){if(d)return null;d=Yp().get("nextId",!0)||1;var e=Yp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wp(c),requestTime:Math.round(X())};Yp().set("nextId",d+1,86400,!0);Yp().set("requests",e,86400,!0);return d}
function $p(a){var b=Yp().get("requests",!0)||{};delete b[a];Yp().set("requests",b,86400,!0)}
function aq(a){var b=Yp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=Wp(zp(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),bq(a,d.method,e,{}));delete b[c]}}Yp().set("requests",b,86400,!0)}}
;function cq(a){this.Fb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.cb=function(){};
this.now=Date.now;this.wb=!1;var b;this.Wc=null!=(b=a.Wc)?b:100;var c;this.Uc=null!=(c=a.Uc)?c:1;var d;this.Sc=null!=(d=a.Sc)?d:2592E6;var e;this.Rc=null!=(e=a.Rc)?e:12E4;var f;this.Tc=null!=(f=a.Tc)?f:5E3;var g;this.L=null!=(g=a.L)?g:void 0;this.Kb=!!a.Kb;var h;this.Ib=null!=(h=a.Ib)?h:.1;var k;this.Qb=null!=(k=a.Qb)?k:10;a.handleError&&(this.handleError=a.handleError);a.cb&&(this.cb=a.cb);a.wb&&(this.wb=a.wb);a.Fb&&(this.Fb=a.Fb);this.M=a.M;this.sa=a.sa;this.R=a.R;this.V=a.V;this.sendFn=a.sendFn;
this.lc=a.lc;this.hc=a.hc;dq(this)&&(!this.M||this.M("networkless_logging"))&&eq(this)}
function eq(a){dq(a)&&!a.wb&&(a.g=!0,a.Kb&&Math.random()<=a.Ib&&a.R.hd(a.L),fq(a),a.V.ja()&&a.Bb(),a.V.Ua(a.lc,a.Bb.bind(a)),a.V.Ua(a.hc,a.wc.bind(a)))}
q=cq.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(dq(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.R.set(d,this.L).then(function(e){d.id=e;c.V.ja()&&gq(c,d)}).catch(function(e){gq(c,d);
hq(c,e)})}else this.sendFn(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(dq(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.M&&this.M("nwl_skip_retry")&&(e.skipRetry=c);if(this.V.ja()||this.M&&this.M("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.R.set(e,d.L).catch(function(l){hq(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.R.set(e,this.L).catch(function(g){d.sendFn(a,b,e.skipRetry);
hq(d,g)})}else this.sendFn(a,b,this.M&&this.M("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(dq(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.R.bb(d.id,c.L):e=!0;c.V.Wa&&c.M&&c.M("vss_network_hint")&&c.V.Wa(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.R.set(d,this.L).then(function(g){d.id=g;e&&c.R.bb(d.id,c.L)}).catch(function(g){hq(c,g)})}else this.sendFn(a,b,void 0,!0)};
q.Bb=function(){var a=this;if(!dq(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.sa.Ca(function(){var b;return B(function(c){if(1==c.g)return A(c,a.R.Dc("NEW",a.L),2);if(3!=c.g)return b=c.h,b?A(c,gq(a,b),3):(a.wc(),c.return());a.h&&(a.h=0,a.Bb());c.g=0})},this.Wc))};
q.wc=function(){this.sa.ia(this.h);this.h=0};
function gq(a,b){var c;return B(function(d){switch(d.g){case 1:if(!dq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.C(2);break}return A(d,a.R.Cd(b.id,a.L),3);case 3:(c=d.h)||a.cb(Error("The request cannot be found in the database."));case 2:if(iq(a,b,a.Sc)){d.C(4);break}a.cb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.C(5);break}return A(d,a.R.bb(b.id,a.L),5);case 5:return d.return();case 4:b.skipRetry||(b=jq(a,b));if(!b){d.C(0);
break}if(!b.skipRetry||void 0===b.id){d.C(8);break}return A(d,a.R.bb(b.id,a.L),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function jq(a,b){if(!dq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=kq(f);(h=lq(f))&&a.M&&a.M("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.M&&a.M("nwl_consider_error_code")&&g||a.M&&!a.M("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Qb)){m.C(2);break}if(!a.V.Tb){m.C(3);break}return A(m,a.V.Tb(),3);case 3:if(a.V.ja()){m.C(2);break}c(e,f);if(!a.M||!a.M("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.C(6);
break}return A(m,a.R.mc(b.id,a.L,!1),6);case 6:return m.return();case 2:if(a.M&&a.M("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Qb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.C(8);break}return b.sendCount<a.Uc?A(m,a.R.mc(b.id,a.L,!0,h?!1:void 0),12):A(m,a.R.bb(b.id,a.L),8);case 12:a.sa.Ca(function(){a.V.ja()&&a.Bb()},a.Tc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.C(2):A(h,a.R.bb(b.id,a.L),2);a.V.Wa&&a.M&&a.M("vss_network_hint")&&a.V.Wa(!0);d(e,f);h.g=0})};
return b}
function iq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function fq(a){if(!dq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.R.Dc("QUEUED",a.L).then(function(b){b&&!iq(a,b,a.Rc)?a.sa.Ca(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.C(2):A(c,a.R.mc(b.id,a.L),2);fq(a);c.g=0})}):a.V.ja()&&a.Bb()})}
function hq(a,b){a.Yc&&!a.V.ja()?a.Yc(b):a.handleError(b)}
function dq(a){return!!a.L||a.Fb}
function kq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function lq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var mq;
function nq(){if(mq)return mq();var a={};mq=ep("LogsDatabaseV2",{kb:(a.LogsRequestsStore={sb:2},a),Ub:!1,upgrade:function(b,c,d){c(2)&&Dn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Kn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return mq()}
;function oq(a){return Wn(nq(),a)}
function pq(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,oq(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:Q("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,Fn(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=X();qq(c);return g.return(f)})}
function rq(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,oq(b),2);if(3!=l.g)return d=l.h,e=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,Cn(d,["LogsRequestsStore"],{mode:"readwrite",ba:!0},function(m){return Pn(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.va()&&(k=n.va(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=X();qq(c);return l.return(k)})}
function sq(a,b){var c;return B(function(d){if(1==d.g)return A(d,oq(b),2);c=d.h;return d.return(Cn(c,["LogsRequestsStore"],{mode:"readwrite",ba:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",yn(f.g.put(g,void 0)).then(function(){return g})})}))})}
function tq(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,oq(b),2);e=f.h;return f.return(Cn(e,["LogsRequestsStore"],{mode:"readwrite",ba:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),yn(h.g.put(k,void 0)).then(function(){return k})):rn.resolve(void 0)})}))})}
function uq(a,b){var c;return B(function(d){if(1==d.g)return A(d,oq(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function vq(a){var b,c;return B(function(d){if(1==d.g)return A(d,oq(a),2);b=d.h;c=X()-2592E6;return A(d,Cn(b,["LogsRequestsStore"],{mode:"readwrite",ba:!0},function(e){return Mn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.va().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function wq(){B(function(a){return A(a,ap(),0)})}
function qq(a){R("nwl_csi_killswitch")||Dp("networkless_performance",a,{sampleRate:1})}
;var xq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var yq={},zq=ep("ServiceWorkerLogsDatabase",{kb:(yq.SWHealthLog={sb:1},yq),Ub:!0,upgrade:function(a,b){b(1)&&Kn(Dn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Aq(a){return Wn(zq(),a)}
function Bq(a){var b,c;B(function(d){if(1==d.g)return A(d,Aq(a),2);b=d.h;c=X()-2592E6;return A(d,Cn(b,["SWHealthLog"],{mode:"readwrite",ba:!0},function(e){return Mn(e.objectStore("SWHealthLog"),{},function(f){if(f.va().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Cq(a){var b;return B(function(c){if(1==c.g)return A(c,Aq(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var Dq={},Eq=0;function Fq(a){var b=new Image,c=""+Eq++;Dq[c]=b;b.onload=b.onerror=function(){delete Dq[c]};
b.src=a}
;function Gq(){this.g=new Map;this.h=!1}
function Hq(){if(!Gq.g){var a=E("yt.networkRequestMonitor.instance")||new Gq;F("yt.networkRequestMonitor.instance",a);Gq.g=a}return Gq.g}
Gq.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Gq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Gq.prototype.removeParams=function(a){return a.split("?")[0]};
Gq.prototype.removeParams=Gq.prototype.removeParams;Gq.prototype.isEndpointCFR=Gq.prototype.isEndpointCFR;Gq.prototype.requestComplete=Gq.prototype.requestComplete;Gq.getInstance=Hq;var Iq;function Jq(){Iq||(Iq=new Tm("yt.offline"));return Iq}
function Kq(a){if(R("offline_error_handling")){var b=Jq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jq().set("errors",b,2592E3,!0)}}
;function Y(){fg.call(this);var a=this;this.i=!1;this.h=lg();this.h.Ua("networkstatus-online",function(){if(a.i&&R("offline_error_handling")){var b=Jq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new jm(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Dk(d)}Jq().set("errors",{},2592E3,!0)}}})}
y(Y,fg);function Lq(){if(!Y.g){var a=E("yt.networkStatusManager.instance")||new Y;F("yt.networkStatusManager.instance",a);Y.g=a}return Y.g}
q=Y.prototype;q.ja=function(){return this.h.ja()};
q.Wa=function(a){this.h.h=a};
q.qd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.ld=function(){this.i=!0};
q.Ua=function(a,b){return this.h.Ua(a,b)};
q.Tb=function(a){a=jg(this.h,a);a.then(function(b){R("use_cfr_monitor")&&Hq().requestComplete("generate_204",b)});
return a};
Y.prototype.sendNetworkCheckRequest=Y.prototype.Tb;Y.prototype.listen=Y.prototype.Ua;Y.prototype.enableErrorFlushing=Y.prototype.ld;Y.prototype.getWindowStatus=Y.prototype.qd;Y.prototype.networkStatusHint=Y.prototype.Wa;Y.prototype.isNetworkAvailable=Y.prototype.ja;Y.getInstance=Lq;function Mq(a){a=void 0===a?{}:a;fg.call(this);var b=this;this.h=this.s=0;this.i=Lq();var c=E("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Sb?(this.Sb=a.Sb,c("networkstatus-online",function(){Nq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Nq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){gg(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){gg(b,"publicytnetworkstatus-offline")})))}
y(Mq,fg);Mq.prototype.ja=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Mq.prototype.Wa=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Mq.prototype.Tb=function(a){var b=this,c;return B(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return R("skip_network_check_if_cfr")&&Hq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Wa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ja())})):c?d.return(c(a)):d.return(!0)})};
function Nq(a,b){a.Sb?a.h?(mg.ia(a.s),a.s=mg.Ca(function(){a.m!==b&&(gg(a,b),a.m=b,a.h=X())},a.Sb-(X()-a.h))):(gg(a,b),a.m=b,a.h=X()):gg(a,b)}
;var Oq;function Pq(){var a=cq.call;Oq||(Oq=new Mq({We:!0,Ve:!0}));a.call(cq,this,{R:{hd:vq,bb:uq,Dc:rq,Cd:sq,mc:tq,set:pq},V:Oq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Ek(new jm(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Dk(b)},
cb:Ek,sendFn:Qq,now:X,Yc:Kq,sa:Sm(),lc:"publicytnetworkstatus-online",hc:"publicytnetworkstatus-offline",Kb:!0,Ib:.1,Qb:S("potential_esf_error_limit",10),M:R,wb:!(km()&&"www.youtube-nocookie.com"!==xc(document.location.toString()))});this.i=new kh;R("networkless_immediately_drop_all_requests")&&wq();bp("LogsDatabaseV2")}
y(Pq,cq);function Rq(){var a=E("yt.networklessRequestController.instance");a||(a=new Pq,F("yt.networklessRequestController.instance",a),R("networkless_logging")&&Uo().then(function(b){a.L=b;eq(a);a.i.resolve();a.Kb&&Math.random()<=a.Ib&&a.L&&Bq(a.L);R("networkless_immediately_drop_sw_health_store")&&Sq(a)}));
return a}
Pq.prototype.writeThenSend=function(a,b){b||(b={});b=Tq(a,b);km()||(this.g=!1);cq.prototype.writeThenSend.call(this,a,b)};
Pq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Tq(a,b);km()||(this.g=!1);cq.prototype.sendThenWrite.call(this,a,b,c)};
Pq.prototype.sendAndWrite=function(a,b){b||(b={});b=Tq(a,b);km()||(this.g=!1);cq.prototype.sendAndWrite.call(this,a,b)};
Pq.prototype.awaitInitialization=function(){return this.i.promise};
function Sq(a){var b;B(function(c){if(!a.L)throw b=nn("clearSWHealthLogsDb"),b;return c.return(Cq(a.L).catch(function(d){a.handleError(d)}))})}
function Qq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Uq(a,b);if(R("use_request_time_ms_header"))b.headers&&Nk(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Kl(a,void 0,"POST",f);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Kl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.i&&k.h||k.l){var l=wc(a.match(vc)[5]||null);var m=!(!l||!l.endsWith("/aclk")||"1"!==Cc(a,"ri"));break b}}catch(r){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(r){}n=!1}c=n?!0:!1}else c=!1;c||Fq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Vp(a,b.postBody,b,Hl,d)):Vp(a,JSON.stringify(b.postParams),
b,Pl,d):Hl(a,b)}
function Tq(a,b){R("use_event_time_ms_header")&&Nk(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(X())));return b}
function Uq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Hq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Hq().requestComplete(a,!0);d(e,f)}}
;var Vq=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",Vq);function Wq(a){var b=this;this.config_=null;a?this.config_=a:qp()&&(this.config_=rp());nm(function(){aq(b)},5E3)}
Wq.prototype.isReady=function(){!this.config_&&qp()&&(this.config_=rp());return!!this.config_};
function bq(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Zp(b,c,l,k)),u)){var z=g.onSuccess,C=g.onFetchSuccess;g.onSuccess=function(Z,Pa){$p(u);z(Z,Pa)};
c.onFetchSuccess=function(Z,Pa){$p(u);C(Z,Pa)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Rq().writeThenSend(p,g):Rq().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));Vp(p,U,g,Hl,P)}else Vp(p,JSON.stringify(g.postParams),g,Pl,P)}else R("web_all_payloads_via_jspb")?Hl(p,g):Pl(p,g)}catch(Z){if("InvalidAccessError"==Z.name)u&&($p(u),u=0),Ek(Error("An extension is blocking network request."));else throw Z;}u&&nm(function(){aq(a)},5E3)}
!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ek(new jm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new jm("innertube xhrclient not ready",b,c,d);Dk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.xd)&&(h=f);var k=a.config_.zd||!1,l=zp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.vd+"/"+b,n={alt:"json"},r=a.config_.yd&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.ud);var p=Mk(""+h+m,n||{},!0);E("ytNetworklessLoggingInitializationOptions")&&
Vq.isNwlInitialized?So().then(function(t){e(t)}):e(!1)}
;function Xq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Yq=D.ytPubsubPubsubInstance||new L,Zq=D.ytPubsubPubsubSubscribedKeys||{},$q=D.ytPubsubPubsubTopicToKeys||{},ar=D.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Cb;L.prototype.publish=L.prototype.lb;L.prototype.clear=L.prototype.clear;F("ytPubsubPubsubInstance",Yq);F("ytPubsubPubsubTopicToKeys",$q);F("ytPubsubPubsubIsSynchronous",ar);F("ytPubsubPubsubSubscribedKeys",Zq);var br=Symbol("injectionDeps");function cr(){this.key=np}
function dr(){this.h=new Map;this.g=new Map}
dr.prototype.resolve=function(a){return a instanceof cr?er(this,a.key,[],!0):er(this,a,[])};
function er(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.fe)var e=d.fe;else if(d.ee)e=d[br]?fr(a,d[br],c):[],e=d.ee.apply(d,x(e));else if(d.de){e=d.de;var f=e[br]?fr(a,e[br],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.cf||a.g.set(b,e);return e}
function fr(a,b,c){return b?b.map(function(d){return d instanceof cr?er(a,d.key,c,!0):er(a,d,c)}):[]}
;var gr;function hr(){gr||(gr=new dr);return gr}
;var ir=window;function jr(){var a,b;return"h5vcc"in ir&&(null==(a=ir.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=ir.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in ir&&ir.performance.mark&&ir.performance.measure?2:0}
function kr(a){switch(jr()){case 1:ir.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ir.performance.mark(a+"-start");break;case 0:break;default:df()}}
function lr(a){switch(jr()){case 1:ir.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";ir.performance.mark(c);ir.performance.measure(a,b,c);break;case 0:break;default:df()}}
;var mr=R("web_enable_lifecycle_monitoring")&&0!==jr(),nr=R("web_enable_lifecycle_monitoring");function or(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Sm():d;this.l=c;this.h=d;this.i=new kh;this.g=a;for(a={Ta:0};a.Ta<this.g.length;a={Pb:void 0,Ta:a.Ta},a.Ta++)a.Pb=this.g[a.Ta],c=function(e){return function(){e.Pb.Yb();b.g[e.Ta].Rb=!0;b.g.every(function(f){return!0===f.Rb})&&b.i.resolve()}}(a),d=this.h.Ra(c,pr(this,a.Pb)),this.g[a.Ta]=Object.assign({},a.Pb,{Yb:c,
jobId:d})}
function qr(a){var b=Array.from(a.g.keys()).sort(function(d,e){return pr(a,a.g[e])-pr(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Rb||(a.h.ia(c.jobId),a.h.Ra(c.Yb,10))}
or.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Rb||this.h.ia(b.jobId),b.Rb=!0;this.i.resolve()};
function pr(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function rr(a){this.state=a;this.i=[];this.m=void 0;this.v={};mr&&kr(this.state)}
rr.prototype.install=function(a){this.i.push(a);return this};
function sr(a){mr&&lr(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Na}):d.from===a.state&&"none"===d.Na});
if(b){a.h&&(qr(a.h),a.h=void 0);nr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";mr&&kr(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(tr(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function tr(a,b){var c=b.filter(function(e){return 10===ur(a,e)}),d=b.filter(function(e){return 10!==ur(a,e)});
return a.v.bf?function(){var e=Ea.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.T.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.Y.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
rr.prototype.Y=function(a){for(var b=Ea.apply(1,arguments),c=Sm(),d=w(a),e=d.next(),f={};!e.done;f={xb:void 0},e=d.next())f.xb=e.value,c.rb(function(g){return function(){vr(g.xb.name);g.xb.tb.apply(g.xb,x(b));wr(g.xb.name)}}(f))};
rr.prototype.T=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=Sm(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.C(0);f.gb=e.value;f.Eb=void 0;g=function(k){return function(){vr(k.gb.name);var l=k.gb.tb.apply(k.gb,x(b));"function"===typeof(null==l?void 0:l.then)?k.Eb=l.then(function(){wr(k.gb.name)}):wr(k.gb.name)}}(f);
c.rb(g);return f.Eb?A(h,f.Eb,3):h.C(3)}f={gb:void 0,Eb:void 0};e=d.next();return h.C(2)})};
rr.prototype.s=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{Yb:function(){vr(e.name);e.tb.apply(e,x(b));wr(e.name)},
priority:ur(c,e)}});
d.length&&(this.h=new or(d))};
function ur(a,b){var c,d;return null!=(d=null!=(c=a.m)?c:b.priority)?d:0}
function vr(a){mr&&a&&kr(a)}
function wr(a){mr&&a&&lr(a)}
da.Object.defineProperties(rr.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function xr(a){rr.call(this,void 0===a?"none":a);this.g=null;this.m=10;this.transitions=[{from:"none",Na:"application_navigating",action:this.D},{from:"application_navigating",Na:"none",action:this.K},{from:"application_navigating",Na:"application_navigating",action:function(){}},
{from:"none",Na:"none",action:function(){}}]}
var yr;y(xr,rr);xr.prototype.D=function(a,b){var c=this;this.g=nm(function(){"application_navigating"===c.l&&sr(c)},5E3);
a(null==b?void 0:b.event)};
xr.prototype.K=function(a,b){this.g&&(mg.ia(this.g),this.g=null);a(null==b?void 0:b.event)};
function zr(){yr||(yr=new xr);return yr}
;var Ar=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return Ar});function Br(){this.store={};this.g={}}
Br.prototype.storePayload=function(a,b){a=Cr(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Br.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Dr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Br.prototype.extractMatchingEntries=function(a){a=Dr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Br.prototype.getSequenceCount=function(a){a=Dr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Dr(a,b){var c=Cr(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Cr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Er(b.auth,g[0])){var h=b.isJspb;Er(void 0===h?"undefined":h?"true":"false",g[1])&&Er(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Er(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Er(a,b){return void 0===a||"undefined"===a?!0:a===b}
Br.prototype.getSequenceCount=Br.prototype.getSequenceCount;Br.prototype.extractMatchingEntries=Br.prototype.extractMatchingEntries;Br.prototype.smartExtractMatchingEntries=Br.prototype.smartExtractMatchingEntries;Br.prototype.storePayload=Br.prototype.storePayload;function Cr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Fr=S("initial_gel_batch_timeout",2E3),Gr=S("gel_queue_timeout_max_ms",6E4),Hr=Math.pow(2,16)-1,Ir=S("gel_min_batch_size",5),Jr=void 0;function Kr(){this.l=this.g=this.h=0;this.i=!1}
var Lr=new Kr,Mr=new Kr,Nr=new Kr,Or=new Kr,Pr,Qr=!0,Rr=1,Sr=new Map,Tr=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",Tr);var Ur=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",Ur);var Vr={};function Wr(){var a=E("yt.logging.ims");a||(a=new Br,F("yt.logging.ims",a));return a}
function Xr(a,b){if("log_event"===a.endpoint){Yr(a);var c=Zr(a),d=$r(a.payload)||"",e=as(d),f=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;f=bs(e.tier);if(400===f){cs(a,b);return}}Vr[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Wr().storePayload(e,a.payload);ds(b,c,!1,e,es(d))}}
function fs(a,b,c){if("log_event"===b.endpoint){Yr(void 0,b);var d=Zr(b,!0),e=as(a),f=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;f=bs(e.tier);if(400===f){gs(a,b,c);return}}Vr[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Wr().storePayload(e,b.payload.toJSON());ds(c,d,!0,e,es(a))}}
function ds(a,b,c,d,e){function f(){hs({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Jr=new a);a=S("tvhtml5_logging_max_batch_ads_fork")||S("web_logging_max_batch")||100;var g=X(),h=is(c,d.tier),k=h.l;e&&(h.i=!0);e=0;d&&(e=Wr().getSequenceCount(d));1E3<=e?f():e>=a?Pr||(Pr=js(function(){f();Pr=void 0},0)):10<=g-k&&(ks(c,d.tier),h.l=g)}
function cs(a,b){if("log_event"===a.endpoint){Yr(a);var c=Zr(a),d=new Map;d.set(c,[a.payload]);var e=$r(a.payload)||"";b&&(Jr=new b);return new lh(function(f,g){Jr&&Jr.isReady()?ls(d,Jr,f,g,{bypassNetworkless:!0},!0,es(e)):f()})}}
function gs(a,b,c){if("log_event"===b.endpoint){Yr(void 0,b);var d=Zr(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Jr=new c);return new lh(function(f){Jr&&Jr.isReady()?ms(e,Jr,f,{bypassNetworkless:!0},!0,es(a)):f()})}}
function Zr(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new lk;c.videoId?ve(d,1,Ee,be(c.videoId)):c.playlistId&&ve(d,2,Ee,be(c.playlistId));Ur[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Tr[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function hs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new lh(function(e,f){var g=is(c,d),h=g.i;g.i=!1;ns(g.h);ns(g.g);g.g=0;Jr&&Jr.isReady()?void 0===d&&R("enable_web_tiered_gel")?os(e,f,a,b,c,300,h):os(e,f,a,b,c,d,h):(ks(c,d),e())})}
function os(a,b,c,d,e,f,g){var h=Jr;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=R("enable_web_tiered_gel")?Wr().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Wr().extractMatchingEntries(n),k.set(d,b),ms(k,h,a,c,!1,g)):(k=R("enable_web_tiered_gel")?Wr().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Wr().extractMatchingEntries(n),l.set(d,k),ls(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Vr));for(l=b.next();!l.done;l=b.next())l=l.value,f=R("enable_web_tiered_gel")?Wr().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Wr().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete Vr[l];ms(k,h,a,c,!1,g)}else{k=w(Object.keys(Vr));for(m=k.next();!m.done;m=k.next())m=m.value,n=R("enable_web_tiered_gel")?Wr().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Wr().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete Vr[m];ls(l,h,a,b,c,!1,g)}}
function ks(a,b){function c(){hs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=is(a,b),e=d===Or||d===Nr?5E3:Gr;R("web_gel_timeout_cap")&&!d.g&&(e=js(function(){c()},e),d.g=e);
ns(d.h);e=Q("LOGGING_BATCH_TIMEOUT",S("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Qr&&(e=Fr);e=js(function(){0<S("gel_min_batch_size")?Wr().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Ir&&c():c()},e);
d.h=e}
function ls(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(X()),k=a.size,l=ps(g);a=w(a);var m=a.next();for(g={};!m.done;g={fc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,kc:void 0,jc:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=sb({context:sp(b.config_||rp())});if(!La(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Tr[m])&&qs(g.batchRequest,m,n);delete Tr[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;rs(g.batchRequest,h,g.dangerousLogToVisitorSession);ss(e);g.kc=function(r){R("start_client_gcf")&&mg.Ca(function(){return B(function(p){return A(p,ts(r),0)})});
k--;k||c()};
g.fc=0;g.jc=function(r){return function(){r.fc++;if(e.bypassNetworkless&&1===r.fc)try{bq(b,l,r.batchRequest,us({writeThenSend:!0},r.dangerousLogToVisitorSession,r.kc,r.jc,f)),Qr=!1}catch(p){Dk(p),d()}k--;k||c()}}(g);
try{bq(b,l,g.batchRequest,us(e,g.dangerousLogToVisitorSession,g.kc,g.jc,f)),Qr=!1}catch(r){Dk(r),d()}}}
function ms(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(X()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new mk;var r=b.config_||rp(),p=new Uj,t=new Nj;J(t,1,r.Jc);J(t,2,r.Ic);Ge(t,16,r.wd);J(t,17,r.Hc);if(r.Xb){var u=r.Xb,z=new Kj;u.coldConfigData&&J(z,1,u.coldConfigData);u.appInstallData&&J(z,6,u.appInstallData);u.coldHashData&&J(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);I(t,Kj,62,z)}if((u=D.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);se(t,65,u)}u=Q("EXPERIMENTS_TOKEN","");""!==u&&J(t,54,u);u=vk();if(0<u.length){z=new Qj;for(var C=0;C<u.length;C++){var P=new Oj;J(P,1,u[C].key);ve(P,2,Pj,be(u[C].value));Be(z,15,Oj,P)}I(p,Qj,5,z)}tp(r,t);up(p);vp(t);wp(r,t);xp(t);R("start_client_gcf")&&yp(t);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(r=new Tj,J(r,3,Q("DELEGATED_SESSION_ID")));!R("fill_delegate_context_in_gel_killswitch")&&
(u=Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=ye(p,Tj,3)||new Tj,r=p,u=J(z,18,u),I(r,Tj,3,u));r=t;u=w(Object.entries(Lk(Q("DEVICE",""))));for(z=u.next();!z.done;z=u.next())C=w(z.value),z=C.next().value,C=C.next().value,"cbrand"===z?J(r,12,C):"cmodel"===z?J(r,13,C):"cbr"===z?J(r,87,C):"cbrver"===z?J(r,88,C):"cos"===z?J(r,18,C):"cosver"===z?J(r,19,C):"cplatform"===z&&Ge(r,42,dm(C));I(p,Nj,1,t);I(l,Uj,1,p);if(t=Ur[m])a:{if(De(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;I(l,lk,
4,t);t=ye(l,Uj,1)||new Uj;r=ye(t,Tj,3)||new Tj;u=new Sj;J(u,2,m);Ge(u,1,p);Be(r,12,Sj,u);I(t,Tj,3,r)}delete Ur[m];m="visitorOnlyApprovedKey"===m;vs()||se(l,2,Zd(g));!m&&(p=Q("EVENT_ID"))&&(t=ws(),r=new kk,J(r,1,p),se(r,2,Zd(t)),I(l,kk,5,r));ss(d);if(R("jspb_serialize_with_worker")&&(p=Hp())&&d.writeThenSend){Sr.set(Rr,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),
clientEvents:n,key:Rr});Rr++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new ik(n[t]))}catch(U){Dk(new jm("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Be(l,3,ik,p.value);n={startTime:X(),ticks:{},infos:{}};l=Ie(l);n.ticks.geljspc=X();R("log_jspb_serialize_latency")&&Dp("gel_jspb_serialize",n,{sampleRate:.1});xs(l,b,c,d,e,f,m,h)}}
function xs(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=ps(f);d=us(d,g,function(k){R("start_client_gcf")&&mg.Ca(function(){return B(function(l){return A(l,ts(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;bq(b,f,"",d);Qr=!1}
function ss(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function us(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ue:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};vs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function rs(a,b,c){vs()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID"))&&(c=ws(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ws(){var a=Q("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Hr/2));a++;a>Hr&&(a=1);rk("BATCH_CLIENT_COUNTER",a);return a}
function qs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Yr(a,b){if(!E("yt.logging.transport.enableScrapingForTest")){var c=uk("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))Ar=[],F("yt.logging.transport.enableScrapingForTest",!0),F("yt.logging.transport.scrapedPayloadsForTesting",Ar),F("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),F("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
F("yt.logging.transport.scrapeClientEvent",!0);else return}c=E("yt.logging.transport.scrapedPayloadsForTesting");var d=E("yt.logging.transport.payloadToScrape");b&&(b=E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=E("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}F("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function vs(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function js(a,b){return!1===R("embeds_transport_use_scheduler")?vl(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?nm(function(){if("none"===zr().l)a();else{var c={};zr().install((c.none={tb:a},c))}},b):nm(a,b)}
function ns(a){R("transport_use_scheduler")?mg.ia(a):window.clearTimeout(a)}
function ts(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[Jj.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[Ij.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=hr().resolve(new cr))?g?e?A(n,op(m,g,e),2):A(n,op(m,g),2):n.C(2):n.return()}return l?h?A(n,pp(m,l,h),0):A(n,pp(m,l),0):n.C(0)})}
function is(a,b){b=void 0===b?200:b;return a?300===b?Or:Mr:300===b?Nr:Lr}
function as(a){if(R("enable_web_tiered_gel")){a=xq[a||""];var b,c;if(null==hr().resolve(new cr))var d=void 0;else{var e=null!=(d=E("yt.gcf.config.hotConfigGroup"))?d:Q("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function $r(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,xq[b])return b}
function bs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function es(a){return"gelDebuggingEvent"===a}
function ps(a){return(void 0===a?0:a)&&R("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var ys=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",ys);
function zs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Xq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:As(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ys[d.sequenceGroup]);(d.sendIsolatedPayload?cs:Xr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function Bs(a){hs(void 0,void 0,void 0===a?!1:a)}
function As(a){ys[a]=a in ys?ys[a]+1:0;return ys[a]}
;var Cs=[];function Ds(a,b,c){c=void 0===c?{}:c;var d=Wq;Q("ytLoggingEventsDefaultDisabled",!1)&&Wq===Wq&&(d=null);R("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Xq(),c.timestamp=X()),Cs.push({Oc:a,payload:b,options:c})):zs(a,b,d,c)}
;var Es=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",Es);function Fs(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;Q("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Wq;c=void 0===c?{}:c;var e=Math.round(c.timestamp||X());se(b,1,Zd(e<Number.MAX_SAFE_INTEGER?e:0));e=new hk;if(c.lact)se(e,1,Zd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)se(e,1,Zd(-1));else{var f=Xq();se(e,1,Zd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!R("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=As(f),h=new gk;se(h,2,Zd(g));J(h,1,f);I(e,gk,3,h);c.endOfSequence&&delete Es[c.sequenceGroup]}I(b,
hk,33,e);(c.sendIsolatedPayload?gs:fs)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var Gs=new Set,Hs=0,Is=0,Js=0,Ks=[],Ls=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ms(a){try{Gs.add(a.message)}catch(b){}Hs++}
function Ns(){for(var a=w(Ls),b=a.next();!b.done;b=a.next()){var c=ic();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Os(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=Q("SERVER_NAME");b=Q("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Hl(Q("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Ps(){var a;return B(function(b){return(a=Fg())?b.return(a.then(function(c){c=Ie(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return dd(d,3)})):b.return(Promise.resolve(null))})}
;var Qs={};function Rs(a){return Qs[a]||(Qs[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ss={},Ts=[],Ch=new L,Us={};function Vs(){for(var a=w(Ts),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ws(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Rs(b)]:a.getAttribute("data-"+b):null;return c}
function Xs(a){Ch.lb.apply(Ch,arguments)}
;function Ys(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Zs(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function $s(a,b,c){at||(at={},bt=new Set,ul(window,"message",function(d){a:if(bt.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=at[e.id];f&&d.origin===f.ed&&(d=f.ge,d.v=!0,d.v&&(fb(d.s,d.sendMessage,d),d.s.length=0),d.qc(e))}}));
a=String(Zs(a,"host"));at[c]={ge:b,ed:a};bt.add(a)}
var at=null,bt=null;var ct=window;
function dt(a,b,c){this.m=this.g=this.h=null;this.i=0;this.v=!1;this.s=[];this.l=null;this.K={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.D=c;if(a=Le(a))if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?yc(a.src):"https://www.youtube.com"),this.h=new Ys(b),c||(b=et(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),Ss[this.g.id]=this,window.postMessage){this.l=new L;ft(this);b=Zs(this.h,"events");
for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Us)Us.hasOwnProperty(e)&&gt(this,e)}}
q=dt.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.qc=function(a){ht(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);it(this,a);return this};
function gt(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&it(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(Ss[this.g.id]=null);Ff(this.l);if(this.m){var a=this.m,b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);at&&(at[this.id]=null);this.h=null;a=this.g;for(var d in qb)qb[d][0]==a&&sl(d);this.m=this.g=null};
q.zc=function(){return{}};
function jt(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.v?a.sendMessage(b):a.s.push(b)}
function ht(a,b,c){a.l.Ja||(c={target:a,data:c},a.l.lb(b,c),Xs(a.D+"."+b,c))}
function et(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Zs(a.h,"title"));(b=Zs(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Zs(a.h,"height"))&&
c.setAttribute("height",b.toString());ct.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.zc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&fb(["debugjs","debugcss"],function(k){var l=Cc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Zs(a.h,"host")+("/embed/"+Zs(a.h,"videoId"))+"?"+Ac(g);ct.yt_embedsEnableUaChProbe?Ps().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=af(l.href).toString();gf(c,bf(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):ct.yt_embedsEnableIframeSrcWithIntent?(gf(c,bf(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.Pc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function ft(a){$s(a.h,a,a.id);a.i=wl(a.Pc.bind(a));ul(a.g,"load",function(){window.clearInterval(a.i);a.i=wl(a.Pc.bind(a))})}
function it(a,b){a.K[b]||(a.K[b]=!0,jt(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[yc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(Oc){if(Oc.name&&"SyntaxError"===Oc.name){if(!(Oc.message&&0<Oc.message.indexOf("target origin ''"))){var e=void 0,f=Oc;e=void 0===e?{}:e;e.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Hs)){var m=void 0,n=void 0,r=f,p=e,t=Ue(r),u=t.message||"Unknown Error",
z=t.name||"UnknownError",C=t.stack||r.h||"Not available";if(C.startsWith(z+": "+u)){var P=C.split("\n");P.shift();C=P.join("\n")}var U=t.lineNumber||"Not available",Z=t.fileName||"Not available",Pa=C,Fa=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var Qa=0;Qa<r.args.length&&!(Fa=Zl(r.args[Qa],"params."+Qa,p,Fa),500<=Fa);Qa++);else if(r.hasOwnProperty("params")&&r.params){var pa=r.params;if("object"===typeof r.params)for(n in pa){if(pa[n]){var va="params."+n,wa=am(pa[n]);p[va]=wa;Fa+=va.length+
wa.length;if(500<Fa)break}}else p.params=am(pa)}if(Ks.length)for(var oa=0;oa<Ks.length&&!(Fa=Zl(Ks[oa],"params.context."+oa,p,Fa),500<=Fa);oa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:U,fileName:Z,stack:Pa,params:p,sampleWeight:1},Yn=Number(r.columnNumber);isNaN(Yn)||(W.lineNumber=W.lineNumber+":"+Yn);if("IGNORED"===r.level)m=0;else a:{for(var Zn=Vl(),$n=w(Zn.La),xi=$n.next();!xi.done;xi=$n.next()){var ao=xi.value;if(W.message&&
W.message.match(ao.Xe)){m=ao.weight;break a}}for(var bo=w(Zn.Ia),yi=bo.next();!yi.done;yi=bo.next()){var co=yi.value;if(co.tb(W)){m=co.weight;break a}}m=1}W.sampleWeight=m;for(var eo=w(Ql),zi=eo.next();!zi.done;zi=eo.next()){var Ai=zi.value;if(Ai.Ob[W.name])for(var fo=w(Ai.Ob[W.name]),Bi=fo.next();!Bi.done;Bi=fo.next()){var go=Bi.value,of=W.message.match(go.regexp);if(of){W.params["params.error.original"]=of[0];for(var Ci=go.groups,ho={},Pc=0;Pc<Ci.length;Pc++)ho[Ci[Pc]]=of[Pc+1],W.params["params.error."+
Ci[Pc]]=of[Pc+1];W.message=Ai.dc(ho);break}}}W.params||(W.params={});var io=Vl();W.params["params.errorServiceSignature"]="msg="+io.La.length+"&cb="+io.Ia.length;W.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==xb&&(W.params["params.fconst"]="true");var Id=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(Id);if(0!==Id.sampleWeight&&
!Gs.has(Id.message))if(h&&R("web_enable_error_204")){var jo=Id;Os(void 0===g?"ERROR":g,jo);Ms(jo)}else{var Di=void 0,Ei=void 0,ko=void 0,lo=void 0,Fi=void 0,O=Id,ac=g;ac=void 0===ac?"ERROR":ac;if("ERROR"===ac){Wl.lb("handleError",O);if(R("record_app_crashed_web")&&0===Js&&1===O.sampleWeight)if(Js++,R("errors_via_jspb")){var pt=new fk;Fi=Ge(pt,1,1);if(!R("report_client_error_with_app_crash_ks")){var qt=new ek,rt=new dk,st=new ck,tt=new bk;var ut=J(tt,1,O.message);var vt=I(st,bk,3,ut);lo=I(rt,ck,5,
vt);ko=I(qt,dk,9,lo);I(Fi,ek,4,ko)}var mo=R("jspb_sparse_encoded_pivot")?new ik([{}]):new ik;ze(mo,fk,20,jk,Fi);Fs("appCrashed",mo)}else{var no={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(no.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});Ds("appCrashed",no)}Is++}else"WARNING"===ac&&Wl.lb("handleWarning",O);if(R("kevlar_gel_error_routing"))a:{var Jd=ac;if(R("errors_via_jspb")){if(Ns())Ei=void 0;else{var Qc=new Yj;J(Qc,1,O.stack);O.fileName&&
J(Qc,4,O.fileName);var nb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==nb.length&&(1!==nb.length||isNaN(Number(nb[0]))?2!==nb.length||isNaN(Number(nb[0]))||isNaN(Number(nb[1]))||(Fe(Qc,2,Number(nb[0])),Fe(Qc,3,Number(nb[1]))):Fe(Qc,2,Number(nb[0])));var bc=new bk;J(bc,1,O.message);J(bc,3,O.name);Fe(bc,6,O.sampleWeight);"ERROR"===Jd?Ge(bc,2,2):"WARNING"===Jd?Ge(bc,2,1):Ge(bc,2,0);var Gi=new Zj;se(Gi,1,Ud(!0));ze(Gi,Yj,3,ak,Qc);var cc=new Xj;J(cc,3,window.location.href);for(var oo=
Q("FEXP_EXPERIMENTS",[]),Hi=0;Hi<oo.length;Hi++){var Ii=void 0,Ji=cc.u,Ki=oo[Hi],Kd=zd(Ji);Rd(Kd);var po=Kd&2,Ia=re(Ji,Kd,5);Array.isArray(Ia)||(Ia=Pd);var qo=!!(Kd&32),ob=vd(Ia);0===ob&&qo&&!po?(ob|=33,wd(Ia,ob)):ob&1||(ob|=1,wd(Ia,ob));if(po)ob&2||td(Ia,34),Object.freeze(Ia);else if(2&ob||2048&ob){Ia=rd(Ia);var ro=1;qo&&(ro|=32);wd(Ia,ro);te(Ji,Kd,5,Ia)}Ii=Ia;var so=vd(Ii);Ki=Xd(Ki,!!(4&so)&&!!(4096&so));Ii.push(Ki)}var Li=sk();if(!tk()&&Li)for(var to=w(Object.keys(Li)),Mi=to.next();!Mi.done;Mi=
to.next()){var uo=Mi.value,Ni=new Wj;J(Ni,1,uo);J(Ni,2,String(Li[uo]));Be(cc,4,Wj,Ni)}var Oi=O.params;if(Oi)for(var vo=w(Object.keys(Oi)),Pi=vo.next();!Pi.done;Pi=vo.next()){var wo=Pi.value,Qi=new Wj;J(Qi,1,"client."+wo);J(Qi,2,String(Oi[wo]));Be(cc,4,Wj,Qi)}var xo=Q("SERVER_NAME"),yo=Q("SERVER_VERSION");if(xo&&yo){var Ri=new Wj;J(Ri,1,"server.name");J(Ri,2,xo);Be(cc,4,Wj,Ri);var Si=new Wj;J(Si,1,"server.version");J(Si,2,yo);Be(cc,4,Wj,Si)}var pf=new ck;I(pf,Xj,1,cc);I(pf,Zj,2,Gi);I(pf,bk,3,bc);Ei=
pf}var zo=Ei;if(!zo)break a;var Ao=R("jspb_sparse_encoded_pivot")?new ik([{}]):new ik;ze(Ao,ck,163,jk,zo);Fs("clientError",Ao)}else{var Ta=void 0;Ta=void 0===Ta?{}:Ta;if(Ns())Di=void 0;else{var Ld={stackTrace:O.stack};O.fileName&&(Ld.filename=O.fileName);var pb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==pb.length&&(1!==pb.length||isNaN(Number(pb[0]))?2!==pb.length||isNaN(Number(pb[0]))||isNaN(Number(pb[1]))||(Ld.lineNumber=Number(pb[0]),Ld.columnNumber=Number(pb[1])):Ld.lineNumber=
Number(pb[0]));var Ti={level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===Jd?Ti.level="ERROR_LEVEL_ERROR":"WARNING"===Jd&&(Ti.level="ERROR_LEVEL_WARNNING");var wt={isObfuscated:!0,browserStackInfo:Ld};Ta.pageUrl=window.location.href;Ta.kvPairs=[];Q("FEXP_EXPERIMENTS")&&(Ta.experimentIds=Q("FEXP_EXPERIMENTS"));var Ui=sk();if(!tk()&&Ui)for(var Bo=w(Object.keys(Ui)),Vi=Bo.next();!Vi.done;Vi=Bo.next()){var Co=Vi.value;Ta.kvPairs.push({key:Co,value:String(Ui[Co])})}var Wi=
O.params;if(Wi)for(var Do=w(Object.keys(Wi)),Xi=Do.next();!Xi.done;Xi=Do.next()){var Eo=Xi.value;Ta.kvPairs.push({key:"client."+Eo,value:String(Wi[Eo])})}var Fo=Q("SERVER_NAME"),Go=Q("SERVER_VERSION");Fo&&Go&&(Ta.kvPairs.push({key:"server.name",value:Fo}),Ta.kvPairs.push({key:"server.version",value:Go}));Di={errorMetadata:Ta,stackTrace:wt,logMessage:Ti}}var Ho=Di;if(!Ho)break a;Ds("clientError",Ho)}if("ERROR"===Jd||R("errors_flush_gel_always_killswitch"))b:{if(R("web_fp_via_jspb")){var qf=!0;qf=void 0===
qf?!1:qf;var Io=Cs;Cs=[];if(Io)for(var Jo=w(Io),Yi=Jo.next();!Yi.done;Yi=Jo.next()){var Rc=Yi.value;qf?zs(Rc.Oc,Rc.payload,Wq,Rc.options):Ds(Rc.Oc,Rc.payload,Rc.options)}Bs(!0);if(!R("web_fp_via_jspb_and_json"))break b}Bs()}}R("suppress_error_204_logging")||Os(ac,O);Ms(O)}}}}}else throw Oc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function kt(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function lt(a){return 0===a.search("get")||0===a.search("is")}
;function mt(a,b){dt.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.wa={};this.playerInfo={};this.videoTitle=""}
y(mt,dt);q=mt.prototype;q.zc=function(){var a=Zs(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Zs(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.qc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.wa[c]=a[c]);break;case "infoDelivery":nt(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.wa={},ot(this,a.apiInterface),nt(this,a));break;default:ht(this,b,a)}};
function nt(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Zs(a.h,"title"))))}}
function ot(a,b){fb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:kt(c)?this[c]=function(){this.playerInfo={};
this.wa={};jt(this,c,arguments);return this}:lt(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){jt(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Zs(this.h,"host")+("/embed/"+Zs(this.h,"videoId")),b=Number(Zs(this.h,"width")),c=Number(Zs(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=sc(a);d=sc(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.wa.namespaces?a?this.wa[a]?this.wa[a].options||[]:[]:this.wa.namespaces||[]:[]};
q.getOption=function(a,b){if(this.wa.namespaces&&a&&b&&this.wa[a])return this.wa[a][b]};
function xt(a){if("iframe"!==a.tagName.toLowerCase()){var b=Ws(a,"videoid");b&&(b={videoId:b,width:Ws(a,"width"),height:Ws(a,"height")},new mt(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Ss[a]});
F("YT.scan",Vs);F("YT.subscribe",function(a,b,c){Ch.subscribe(a,b,c);Us[a]=!0;for(var d in Ss)Ss.hasOwnProperty(d)&&gt(Ss[d],a)});
F("YT.unsubscribe",function(a,b,c){Bh(a,b,c)});
F("YT.Player",mt);dt.prototype.destroy=dt.prototype.destroy;dt.prototype.setSize=dt.prototype.setSize;dt.prototype.getIframe=dt.prototype.getIframe;dt.prototype.addEventListener=dt.prototype.addEventListener;mt.prototype.getVideoEmbedCode=mt.prototype.getVideoEmbedCode;mt.prototype.getOptions=mt.prototype.getOptions;mt.prototype.getOption=mt.prototype.getOption;
Ts.push(function(a){var b=a;b||(b=document);a=jb(b.getElementsByTagName("yt:player"));var c=b||document;b=jb(c.querySelectorAll&&c.querySelector?c.querySelectorAll(".yt-player"):Me(document,"*","yt-player",b));fb(ib(a,b),xt)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Vs();var zt=D.onYTReady;zt&&zt();var At=D.onYouTubeIframeAPIReady;At&&At();var Bt=D.onYouTubePlayerAPIReady;Bt&&Bt();}).call(this);
