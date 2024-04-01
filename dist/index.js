"use strict";var T=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var b=T(function(M,w){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),h=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),N=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/utils-noop/dist'),z=require('@stdlib/object-assign/dist'),A=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,F=require('@stdlib/assert-has-own-property/dist'),m=require('@stdlib/constants-float64-max/dist'),c=require('@stdlib/random-base-hypergeometric/dist').factory,p=require('@stdlib/symbol-iterator/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function q(a,r,u,l){var t,e,n,d,v;if(!g(a))throw new TypeError(o('0pp2d',a));if(!g(r))throw new TypeError(o('0pp3X',r));if(!g(u))throw new TypeError(o('0pp2m',u));if(u>a)throw new RangeError(o('0ppEN',u));if(r>a)throw new RangeError(o('0ppEO',r));if(arguments.length>3){if(!A(l))throw new TypeError(o('0pp2V',l));if(t=z({},l),F(t,"iter")){if(!g(t.iter))throw new TypeError(o('0pp2t',"iter",t.iter))}else t.iter=m;n=c(a,r,u,t),t.prng===void 0&&t.copy!==!1&&(t.state=n.state)}else n=c(a,r,u),t={iter:m,state:n.state};return v=0,e={},i(e,"next",y),i(e,"return",L),t&&t.prng?(i(e,"seed",null),i(e,"seedLength",null),h(e,"state",N(null),x),i(e,"stateLength",null),i(e,"byteLength",null)):(s(e,"seed",P),s(e,"seedLength",S),h(e,"state",V,O),s(e,"stateLength",G),s(e,"byteLength",E)),i(e,"PRNG",n.PRNG),p&&i(e,p,R),e;function y(){return v+=1,d||v>t.iter?{done:!0}:{value:n(),done:!1}}function L(f){return d=!0,arguments.length?{value:f,done:!0}:{done:!0}}function R(){return q(a,r,u,t)}function P(){return n.PRNG.seed}function S(){return n.PRNG.seedLength}function G(){return n.PRNG.stateLength}function E(){return n.PRNG.byteLength}function V(){return n.PRNG.state}function O(f){n.PRNG.state=f}}w.exports=q
});var j=b();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
