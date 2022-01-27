"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[67816],{3905:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return f}});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),a=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},u=function(e){var n=a(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=a(o),f=r,p=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return o?t.createElement(p,c(c({ref:n},u),{},{components:o})):t.createElement(p,c({ref:n},u))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var a=2;a<i;a++)c[a]=o[a];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},66313:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return m}});var t=o(87462),r=o(63366),i=(o(67294),o(3905)),c=["components"],l={id:"common_functions_nowMilliseconds",title:"Module: common/functions/nowMilliseconds",sidebar_label:"common/functions/nowMilliseconds",sidebar_position:0,custom_edit_url:null},s=void 0,a={unversionedId:"generated/engine/modules/common_functions_nowMilliseconds",id:"generated/engine/modules/common_functions_nowMilliseconds",title:"Module: common/functions/nowMilliseconds",description:"Variables",source:"@site/docs/generated/engine/modules/common_functions_nowMilliseconds.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_nowMilliseconds",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_nowMilliseconds",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_nowMilliseconds",title:"Module: common/functions/nowMilliseconds",sidebar_label:"common/functions/nowMilliseconds",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/loadScripts",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_loadScripts"},next:{title:"common/functions/parseGeometry",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_parseGeometry"}},u=[{value:"Variables",id:"variables",children:[{value:"nowMilliseconds",id:"nowmilliseconds",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],d={toc:u};function m(e){var n=e.components,o=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"nowmilliseconds"},"nowMilliseconds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nowMilliseconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,'return current time of the system.\nperformance.now() "polyfill"'),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5af1792/packages/engine/src/common/functions/nowMilliseconds.ts#L5"},"packages/engine/src/common/functions/nowMilliseconds.ts:5")))}m.isMDXComponent=!0}}]);