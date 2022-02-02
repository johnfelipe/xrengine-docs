"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[57211],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56335:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"common_functions_isBot",title:"Module: common/functions/isBot",sidebar_label:"common/functions/isBot",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"generated/engine/modules/common_functions_isBot",id:"generated/engine/modules/common_functions_isBot",title:"Module: common/functions/isBot",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_isBot.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_isBot",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_isBot",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_isBot",title:"Module: common/functions/isBot",sidebar_label:"common/functions/isBot",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/isAbsolutePath",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_isAbsolutePath"},next:{title:"common/functions/isClient",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_isClient"}},u=[{value:"Functions",id:"functions",children:[{value:"isBot",id:"isbot",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"isbot"},"isBot"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isBot"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"window"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"window")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Window"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee446ed/packages/engine/src/common/functions/isBot.ts#L3"},"packages/engine/src/common/functions/isBot.ts:3")))}m.isMDXComponent=!0}}]);