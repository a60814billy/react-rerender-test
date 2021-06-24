(self.webpackChunkreact_rerender_test=self.webpackChunkreact_rerender_test||[]).push([[556],{1144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),o=n(5697),c=n.n(o),a=n(7669);function u(e){var t=e.text,n=e.onClick;return(0,a.j)().log("render Button"),r.createElement("button",{className:"px-4 py-2 font-bold bg-indigo-300 rounded-xl hover:bg-indigo-500 focus:outline-none focus:shadow-outline",type:"button",onClick:n},t)}u.propTypes={text:c().string.isRequired,onClick:c().func.isRequired};const l=r.memo(u)},9556:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(7294),o=n(1144),c=n(7669),a=n(9712);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(b,e);var t,n,u,y,m=(u=b,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(u);if(y){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function b(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),o=function(){t.setState((function(e){return{counter:e.counter+1}}))},(r="dispatchCounter")in(n=p(t=m.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.state={counter:0},t}return t=b,(n=[{key:"render",value:function(){var e=this.state.counter;return(0,c.j)().log("render App"),r.createElement(r.Fragment,null,r.createElement("h1",{className:"text-2xl"},"Simple Counter"),r.createElement("p",{className:"my-6"},"Counter:",r.createElement("span",null,e)),r.createElement(o.Z,{text:"Add",onClick:this.dispatchCounter}),r.createElement(a.Z,{link:"https://github.com/a60814billy/react-rerender-test/blob/master/public/components/ClassApp/ClassApp.tsx"}))}}])&&l(t.prototype,n),b}(r.PureComponent)},9712:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),o=n(5697);const c=function(){return r.createElement("span",{className:"bg-gray-100 rounded-xl p-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 inline-block",viewBox:"0 0 20 20",fill:"currentColor"},r.createElement("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})))};var a=function(e){var t=e.link;return r.createElement("a",{href:t,target:"_blank",className:"mt-6 text-right block hover:text-gray-600",rel:"noreferrer"},"Source Code"," ",r.createElement(c,null))};a.propTypes={link:n.n(o)().string.isRequired};const u=(0,r.memo)(a)},2703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);