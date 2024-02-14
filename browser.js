// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=i?r+t(a):t(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),r.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===u.call(r.specifier)?u.call(t):l.call(t)}function E(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function x(r,e,i){var t=e-r.length;return t<0?r:r=i?r+E(t):E(t)+r}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,i,t,a,o,p,l,u,f;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,u=0;u<r.length;u++)if(c(t=r[u]))p+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,i,t,n;for(i=[],n=0,t=$.exec(r);t;)(e=r.slice(n,$.lastIndex-t[0].length)).length&&i.push(e),i.push(j(t)),n=$.lastIndex,t=$.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function _(r){return"string"==typeof r}function A(r){var e,i;if(!_(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return T.apply(null,e)}var C,N=Object.prototype,O=N.toString,R=N.__defineGetter__,Z=N.__defineSetter__,P=N.__lookupGetter__,W=N.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=N,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,i.get),o&&Z&&Z.call(r,e,i.set),r};var M=C,G=["row-major","column-major"];function L(){return G.slice()}M(L,"enum",{configurable:!1,enumerable:!1,writable:!1,value:function(){return{"row-major":1,"column-major":2}}});var U=L(),X=U.length;function z(r){var e;for(e=0;e<X;e++)if(r===U[e])return!0;return!1}function Y(r,e,i){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}function q(r){return"number"==typeof r}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return B&&"symbol"==typeof Symbol.toStringTag}var H,J=Object.prototype.toString,K=Object.prototype.hasOwnProperty,Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"";H=D()?function(r){var e,i,t;if(null==r)return J.call(r);i=r[rr],e=function(r,e){return null!=r&&K.call(r,e)}(r,rr);try{r[rr]=void 0}catch(e){return J.call(r)}return t=J.call(r),e?r[rr]=i:delete r[rr],t}:function(r){return J.call(r)};var er=H,ir=Number,tr=ir.prototype.toString,nr=D();function ar(r){return"object"==typeof r&&(r instanceof ir||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function or(r){return q(r)||ar(r)}Y(or,"isPrimitive",q),Y(or,"isObject",ar);var sr=Number.POSITIVE_INFINITY,cr=ir.NEGATIVE_INFINITY,pr=Math.floor;function lr(r){return pr(r)===r}function ur(r){return r<sr&&r>cr&&lr(r)}function fr(r){return q(r)&&ur(r)}function gr(r){return ar(r)&&ur(r.valueOf())}function dr(r){return fr(r)||gr(r)}function hr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&lr(r.length)&&r.length>=0&&r.length<=9007199254740991}function wr(r,e){return"column-major"===e?function(r){var e,i,t;for(e=[],i=1,t=0;t<r.length;t++)e.push(i),i*=r[t];return e}(r):function(r){var e,i,t,n;for(e=r.length,i=[],n=0;n<e;n++)i.push(0);for(t=1,n=e-1;n>=0;n--)i[n]=t,t*=r[n];return i}(r)}function br(r){return"number"==typeof r}function vr(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function mr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+vr(n):vr(n)+r,t&&(r="-"+r)),r}Y(dr,"isPrimitive",fr),Y(dr,"isObject",gr),Y(wr,"assign",(function(r,e,i){return"column-major"===e?function(r,e){var i,t;for(i=1,t=0;t<r.length;t++)e[t]=i,i*=r[t];return e}(r,i):function(r,e){var i,t;for(i=1,t=r.length-1;t>=0;t--)e[t]=i,i*=r[t];return e}(r,i)}));var yr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase;function xr(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!br(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=mr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=mr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===Er.call(r.specifier)?Er.call(i):yr.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function kr(r){return"string"==typeof r}var Sr=Math.abs,Ir=String.prototype.toLowerCase,Vr=String.prototype.toUpperCase,Tr=String.prototype.replace,$r=/e\+(\d)$/,jr=/e-(\d)$/,Fr=/^(\d+)$/,_r=/^(\d+)e/,Ar=/\.0$/,Cr=/\.0*e/,Nr=/(\..*[^0])0*e/;function Or(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!br(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":Sr(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=Tr.call(i,Nr,"$1e"),i=Tr.call(i,Cr,"e"),i=Tr.call(i,Ar,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=Tr.call(i,$r,"e+0$1"),i=Tr.call(i,jr,"e-0$1"),r.alternate&&(i=Tr.call(i,Fr,"$1."),i=Tr.call(i,_r,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===Vr.call(r.specifier)?Vr.call(i):Ir.call(i)}function Rr(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function Zr(r,e,i){var t=e-r.length;return t<0?r:r=i?r+Rr(t):Rr(t)+r}var Pr=String.fromCharCode,Wr=isNaN,Mr=Array.isArray;function Gr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Lr(r){var e,i,t,n,a,o,s,c,p;if(!Mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(kr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Gr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Wr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Wr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=xr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Wr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Wr(a)?String(t.arg):Pr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Or(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=mr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Zr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ur=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function zr(r){var e,i,t,n;for(i=[],n=0,t=Ur.exec(r);t;)(e=r.slice(n,Ur.lastIndex-t[0].length)).length&&i.push(e),i.push(Xr(t)),n=Ur.lastIndex,t=Ur.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function Yr(r){return"string"==typeof r}function qr(r){var e,i;if(!Yr(r))throw new TypeError(qr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[zr(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return Lr.apply(null,e)}function Br(r,e,i){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}function Dr(r){return"number"==typeof r}var Hr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Jr(){return Hr&&"symbol"==typeof Symbol.toStringTag}var Kr,Qr=Object.prototype.toString,re=Object.prototype.hasOwnProperty,ee="function"==typeof Symbol?Symbol:void 0,ie="function"==typeof ee?ee.toStringTag:"";Kr=Jr()?function(r){var e,i,t;if(null==r)return Qr.call(r);i=r[ie],e=function(r,e){return null!=r&&re.call(r,e)}(r,ie);try{r[ie]=void 0}catch(e){return Qr.call(r)}return t=Qr.call(r),e?r[ie]=i:delete r[ie],t}:function(r){return Qr.call(r)};var te=Kr,ne=Number,ae=ne.prototype.toString,oe=Jr();function se(r){return"object"==typeof r&&(r instanceof ne||(oe?function(r){try{return ae.call(r),!0}catch(r){return!1}}(r):"[object Number]"===te(r)))}function ce(r){return Dr(r)||se(r)}Br(ce,"isPrimitive",Dr),Br(ce,"isObject",se);var pe=Number.POSITIVE_INFINITY,le=ne.NEGATIVE_INFINITY,ue=Math.floor;function fe(r){return ue(r)===r}function ge(r){return r<pe&&r>le&&fe(r)}function de(r){return Dr(r)&&ge(r)}function he(r){return se(r)&&ge(r.valueOf())}function we(r){return de(r)||he(r)}function be(r){return de(r)&&r>=0}function ve(r){return he(r)&&r.valueOf()>=0}function me(r){return be(r)||ve(r)}function ye(r){return"number"==typeof r}function Ee(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function xe(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+Ee(n):Ee(n)+r,t&&(r="-"+r)),r}Br(we,"isPrimitive",de),Br(we,"isObject",he),Br(me,"isPrimitive",be),Br(me,"isObject",ve);var ke=String.prototype.toLowerCase,Se=String.prototype.toUpperCase;function Ie(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!ye(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=xe(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=xe(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===Se.call(r.specifier)?Se.call(i):ke.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ve(r){return"string"==typeof r}var Te=Math.abs,$e=String.prototype.toLowerCase,je=String.prototype.toUpperCase,Fe=String.prototype.replace,_e=/e\+(\d)$/,Ae=/e-(\d)$/,Ce=/^(\d+)$/,Ne=/^(\d+)e/,Oe=/\.0$/,Re=/\.0*e/,Ze=/(\..*[^0])0*e/;function Pe(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!ye(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":Te(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=Fe.call(i,Ze,"$1e"),i=Fe.call(i,Re,"e"),i=Fe.call(i,Oe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=Fe.call(i,_e,"e+0$1"),i=Fe.call(i,Ae,"e-0$1"),r.alternate&&(i=Fe.call(i,Ce,"$1."),i=Fe.call(i,Ne,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===je.call(r.specifier)?je.call(i):$e.call(i)}function We(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function Me(r,e,i){var t=e-r.length;return t<0?r:r=i?r+We(t):We(t)+r}var Ge=String.fromCharCode,Le=isNaN,Ue=Array.isArray;function Xe(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ze(r){var e,i,t,n,a,o,s,c,p;if(!Ue(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(Ve(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Xe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Le(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Le(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Ie(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Le(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Le(a)?String(t.arg):Ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Pe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=xe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Me(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ye=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Be(r){var e,i,t,n;for(i=[],n=0,t=Ye.exec(r);t;)(e=r.slice(n,Ye.lastIndex-t[0].length)).length&&i.push(e),i.push(qe(t)),n=Ye.lastIndex,t=Ye.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function De(r){return"string"==typeof r}function He(r){var e,i;if(!De(r))throw new TypeError(He("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Be(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return ze.apply(null,e)}function Je(r){var e,i;if("object"!=typeof r||null===r)throw new TypeError(He("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(be(i=r.ndims))return i;if(!function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&fe(r.length)&&r.length>=0&&r.length<=9007199254740991}(e=r.shape))throw new TypeError(He("invalid argument. Must provide an ndarray. Value: `%s`.",r));return e.length}function Ke(r){return Math.abs(r)}function Qe(r){return"number"==typeof r}function ri(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function ei(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+ri(n):ri(n)+r,t&&(r="-"+r)),r}var ii=String.prototype.toLowerCase,ti=String.prototype.toUpperCase;function ni(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!Qe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=ei(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=ei(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===ti.call(r.specifier)?ti.call(i):ii.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ai(r){return"string"==typeof r}var oi=Math.abs,si=String.prototype.toLowerCase,ci=String.prototype.toUpperCase,pi=String.prototype.replace,li=/e\+(\d)$/,ui=/e-(\d)$/,fi=/^(\d+)$/,gi=/^(\d+)e/,di=/\.0$/,hi=/\.0*e/,wi=/(\..*[^0])0*e/;function bi(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!Qe(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":oi(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=pi.call(i,wi,"$1e"),i=pi.call(i,hi,"e"),i=pi.call(i,di,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=pi.call(i,li,"e+0$1"),i=pi.call(i,ui,"e-0$1"),r.alternate&&(i=pi.call(i,fi,"$1."),i=pi.call(i,gi,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===ci.call(r.specifier)?ci.call(i):si.call(i)}function vi(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function mi(r,e,i){var t=e-r.length;return t<0?r:r=i?r+vi(t):vi(t)+r}var yi=String.fromCharCode,Ei=isNaN,xi=Array.isArray;function ki(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Si(r){var e,i,t,n,a,o,s,c,p;if(!xi(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(ai(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=ki(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ei(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ei(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ni(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Ei(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ei(a)?String(t.arg):yi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=bi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ei(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=mi(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ii=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vi(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ti(r){var e,i,t,n;for(i=[],n=0,t=Ii.exec(r);t;)(e=r.slice(n,Ii.lastIndex-t[0].length)).length&&i.push(e),i.push(Vi(t)),n=Ii.lastIndex,t=Ii.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function $i(r){return"string"==typeof r}function ji(r){var e,i,t;if(!$i(r))throw new TypeError(ji("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ti(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return Si.apply(null,i)}var Fi="row-major";return function(r){var e,i;if("object"!=typeof r||null===r)throw new TypeError(ji("invalid argument. Must provide an ndarray. Value: `%s`.",r));return z(i=r.order)?i:(e=function(r){var e,i,t,n,a,o;if("object"!=typeof r||null===r)throw new TypeError(qr("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(!hr(n=r.strides)){if(!hr(t=r.shape))throw new TypeError(qr("invalid argument. Must provide an ndarray. Value: `%s`.",r));return 0===t.length?[0]:(z(i=r.order)||(i="row-major"),wr(t,i))}for(e=[],o=0;o<n.length;o++){if(!fr(a=n[o]))throw new TypeError(qr("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(a)}return e}(r),i=function(r){var e,i,t,n,a,o;if(0===(i=r.length))return 0;for(e=!0,t=!0,n=Ke(r[0]),o=1;o<i;o++){if(a=Ke(r[o]),e&&a<n?e=!1:t&&a>n&&(t=!1),!t&&!e)return 0;n=a}return t&&e?3:t?1:2}(e),1===i||3===i?Fi:2===i?"column-major":0===Je(r)?Fi:null)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).order=e();
//# sourceMappingURL=browser.js.map
