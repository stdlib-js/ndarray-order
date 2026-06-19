"use strict";var n=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(r){throw (i=0, r)}};};var u=n(function(p,a){
var o=require('@stdlib/ndarray-base-assert-is-order/dist'),s=require('@stdlib/ndarray-strides/dist'),v=require('@stdlib/ndarray-ndims/dist'),d=require('@stdlib/ndarray-base-strides2order/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),t="row-major",l="column-major";function m(e){var i,r;if(typeof e!="object"||e===null)throw new TypeError(f('1kZDv',e));return r=e.order,o(r)?r:(i=s(e),r=d(i),r===1||r===3?t:r===2?l:v(e)===0?t:null)}a.exports=m
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
