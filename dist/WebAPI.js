!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WebAPI",[],t):"object"==typeof exports?exports.WebAPI=t():e.WebAPI=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(7)},,,,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e)}return r(e,[{key:"getClass",value:function(){return Object.getPrototypeOf(this).constructor}}]),e}();t.default=o},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7),c=r(a),s=function(){function e(){u(this,e)}return i(e,null,[{key:"getEntityDefinitions",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cachedEntityDefinitions[t]){e.next=2;break}return e.abrupt("return",Promise.resolve(this.cachedEntityDefinitions[t]));case 2:if("string"==typeof t){e.next=4;break}throw Error("Invalid logicalName given");case 4:return e.next=6,c.default.retrieveEntitySet("EntityDefinitions",{LogicalName:t});case 6:return n=e.sent,this.cachedEntityDefinitions[t]=n,e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"getCachedEntityDefinitions",value:function(e){return this.cachedEntityDefinitionAttributes[e]}},{key:"getEntityDefinitionAttributes",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cachedEntityDefinitionAttributes[t]){e.next=2;break}return e.abrupt("return",Promise.resolve(this.cachedEntityDefinitionAttributes[t]));case 2:return e.next=4,c.default.retrieveEntitySetProperty("EntityDefinitions",{LogicalName:t},"Attributes");case 4:return n=e.sent,this.cachedEntityDefinitionAttributes[t]=n,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"cachedEntityDefinitions",get:function(){return this.entityDef||(this.entityDef={}),this.entityDef}},{key:"cachedEntityDefinitionAttributes",get:function(){return this.entityDefAttributes||(this.entityDefAttributes={}),this.entityDefAttributes}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(8),l=r(f),p=n(9),y=r(p),h=n(4),d=r(h),v=n(10),b=r(v),w=n(11),m=r(w),g=n(12),x=r(g),O=n(6),_=r(O),E=n(13),P=r(E),k=n(14),j=r(k),R=n(16),S=r(R),T=n(17),A=r(T),q=function(e){function t(){return u(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,null,[{key:"getEntitySetName",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.getEntityDefinitions(t);case 2:return n=e.sent,e.abrupt("return",n.EntitySetName);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"retrieveEntitySetProperty",value:function(){function e(e,t,r,o){return n.apply(this,arguments)}var n=o(regeneratorRuntime.mark(function e(n,r,o,u){var i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.buildQueryString(u),a=t.parseEntityId(r),e.abrupt("return",t.requestAndReturnBody("GET",n+"("+a+")/"+o+i));case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"parseEntityId",value:function(e){var t=e;if("object"===("undefined"==typeof e?"undefined":c(e))){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r+"='"+e[r]+"'");t=n.join(",")}return t}},{key:"requestNextLinks",value:function(e){var n=this,r=[];return t.requestAndReturnBody("GET",e).then(function(){var e=o(regeneratorRuntime.mark(function e(o){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.value,!o["@odata.nextLink"]){e.next=7;break}return e.t0=r,e.next=5,t.requestNextLinks(o["@odata.nextLink"]);case 5:e.t1=e.sent,r=e.t0.concat.call(e.t0,e.t1);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())}},{key:"buildQueryString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];if("string"==typeof e)t.push(e);else if(e.select){var n=void 0;n="object"===c(e.select)?e.select.join(","):e.select,t.push("$select="+n)}return t.length?"?"+t.join("&"):""}},{key:"context",get:function(){if("undefined"!=typeof window.Xrm)return window.Xrm.Page.context;if("undefined"!=typeof window.GetGlobalContext)return window.GetGlobalContext();throw new Error("Context is not available.")}},{key:"webAPIPath",get:function(){var e=this.context.getClientUrl(),t=this.version;return e+"/api/data/"+t}},{key:"version",get:function(){return this.api||S.default.api},set:function(e){e.startsWith("v")||(e="v"+e),this.api=e}}]),t}((0,l.default)((0,y.default)((0,b.default)((0,m.default)((0,x.default)((0,P.default)((0,j.default)((0,A.default)(d.default)))))))));t.default=q},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"executeAction",value:function(){function e(e,n,r,o){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r,o){var u=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}return e.abrupt("return",this.executeBoundAction.apply(this,u));case 4:return e.abrupt("return",this.executeUnboundAction.apply(this,u));case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"executeBoundAction",value:function(){function e(e,n,r,o){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r,o){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(r);case 2:return u=e.sent,e.abrupt("return",this.requestAndReturnBody("POST",u+"("+o+")/Microsoft.Dynamics.CRM."+t,n));case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"executeUnboundAction",value:function(e,t){return this.requestAndReturnBody("POST",""+e,t)}}]),t}(e)};t.default=a},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"associateEntities",value:function(){function e(e,n,r,o,u){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r,o,u){var i,a,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return i=e.sent,a=this.webAPIPath,c={"@odata.id":a+"/"+o+"("+u+")"},e.abrupt("return",this.requestAndReturnBody("POST",i+"("+n+")/"+r+"/$ref",c));case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"disassociateEntities",value:function(){function e(e,n,r,o){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r,o){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return u=e.sent,e.abrupt("return",this.requestAndReturnBody("DELETE",u+"("+n+")/"+r+"("+o+")/$ref"));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(e)};t.default=a},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"createEntity",value:function(){function e(e,n){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return r=e.sent,e.next=5,this.requestAndReturnHeader("POST",r,n,"OData-EntityId");case 5:if(o=e.sent,!o){e.next=8;break}return e.abrupt("return",this.getEntityIdFromHeader(o));case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"getEntityIdFromHeader",value:function(e){var t=/\(([^)]+)\)/,n=t.exec(e);return n[1]}}]),t}(e)};t.default=a},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"deleteEntity",value:function(){function e(e,n){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return r=e.sent,e.abrupt("return",this.request("DELETE",r+"("+n+")"));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(e)};t.default=a},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"executeFunction",value:function(e,t,n){return t?this.executeBoundFunction.apply(this,arguments):this.executeUnboundFunction.apply(this,arguments)}},{key:"executeBoundFunction",value:function(){function e(e,n,r){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(n);case 2:return o=e.sent,e.abrupt("return",this.requestAndReturnBody("GET",o+"("+r+")/Microsoft.Dynamics.CRM."+t));case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"executeUnboundFunction",value:function(e){return this.requestAndReturnBody("GET",""+e)}}]),t}(e)};t.default=a},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"retrieveEntity",value:function(){function e(e,n,r){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return o=e.sent,e.abrupt("return",this.retrieveEntitySet(o,n,r));case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"retrieveEntitySet",value:function(e,t,n){var r=this.buildQueryString(n),o=t?this.parseEntityId(t):null,u=""+e;return o&&(u+="("+o+")"),u+=""+r,this.requestAndReturnBody("GET",u)}},{key:"retrieveMultiple",value:function(){function e(e,n){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,r){var o,u,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return o=e.sent,u=this.buildQueryString(r),e.abrupt("return",this.requestAndReturnBody("GET",""+o+u).then(function(){var e=n(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t["@odata.nextLink"]){e.next=6;break}return e.next=3,i.requestNextLinks(t["@odata.nextLink"]);case 3:n=e.sent,t.value=t.value.concat(n),delete t["@odata.nextLink"];case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"executeFetchXml",value:function(){function e(e,n){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,r){var o,u=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return o=e.sent,e.abrupt("return",this.requestAndReturnBody("GET",o+"?fetchXml="+r).then(function(){var e=n(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t["@odata.nextLink"]){e.next=6;break}return e.next=3,u.requestNextLinks(t["@odata.nextLink"]);case 3:n=e.sent,t.value=t.value.concat(n),delete t["@odata.nextLink"];case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}},e,u)}));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(e)};t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(15),s=r(c),f=function(e){return function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,null,[{key:"request",value:function(e,t,n,r){var o=this.webAPIPath,u=void 0;return u=0===t.indexOf("http")?t:o+"/"+t,(0,s.default)(u,e,n,r)}},{key:"requestAndReturnBody",value:function(e,t,n,r){return this.request(e,t,n,r).then(function(e){return e.body})}},{key:"requestAndReturnHeader",value:function(e,t,n,r){return this.request(e,t,n).then(function(e){return e.getResponseHeader(r)})}}]),t}(e)};t.default=f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["DELETE","GET","PATCH","POST","PUT"],r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(function(i,a){var c=new XMLHttpRequest;if(n.indexOf(t)===-1)throw new Error("Request method must be one of the following: "+n.join(", "));c.open(t,encodeURI(e),!0),c.setRequestHeader("OData-MaxVersion","4.0"),c.setRequestHeader("OData-Version","4.0"),c.setRequestHeader("Accept","application/json"),c.setRequestHeader("Content-Type","application/json; charset=utf-8");for(var s in o)XMLHttpRequest.setRequestHeader(s,o[s]);c.onreadystatechange=function(){4===c.readyState&&(c.onreadystatechange=null,u(c).then(i).catch(a))},c.send(JSON.stringify(r))})},o=function(e,t){if("string"==typeof t){var n=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?::(\d*))?Z$/.exec(t);if(n)return new Date(Date.UTC(+n[1],+n[2]-1,+n[3],+n[4],+n[5],+n[6],+n[7]))}return t},u=function(e){return new Promise(function(t,n){var r=[{status:[200],handler:function(){var r=null,u=e.response;try{r=JSON.parse(u,o)}catch(e){return void n(new Error("JSON response can't be parsed"))}t({body:r,getResponseHeader:e.getResponseHeader.bind(e),statusCode:e.status})}},{status:[204],handler:function(){var n=null;t({body:n,getResponseHeader:e.getResponseHeader.bind(e),statusCode:e.status})}}],u=function(){var t=void 0;try{t=JSON.parse(e.response).error}catch(e){t=new Error("Unexpected Error")}n(t)},i=r.find(function(t){if(t.status.indexOf(e.status)>-1)return!0});i?i.handler():u()})};t.default=r},function(e,t){e.exports={api:"v8.0"}},function(e,t){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var i=t[o](u),a=i.value}catch(e){return void n(e)}return i.done?void e(a):Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,null,[{key:"updateEntity",value:function(){function e(e,n,r){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEntitySetName(t);case 2:return o=e.sent,e.abrupt("return",this.request("PATCH",o+"("+n+")",r));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(e)};t.default=a}])});
