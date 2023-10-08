"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=n(function(p,a){
var o=require('@stdlib/ndarray-base-assert-is-order/dist'),s=require('@stdlib/ndarray-strides/dist'),v=require('@stdlib/ndarray-ndims/dist'),d=require('@stdlib/ndarray-base-strides2order/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),t="row-major",l="column-major";function m(r){var e,i;if(typeof r!="object"||r===null)throw new TypeError(f('nullDv',r));return i=r.order,o(i)?i:(e=s(r),i=d(e),i===1||i===3?t:i===2?l:v(r)===0?t:null)}a.exports=m
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
