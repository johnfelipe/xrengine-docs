"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[29389],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return t?o.createElement(g,s(s({ref:n},d),{},{components:t})):o.createElement(g,s({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85180:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],a={id:"common_functions_getEnvironment",title:"Module: common/functions/getEnvironment",sidebar_label:"common/functions/getEnvironment",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"generated/engine/modules/common_functions_getEnvironment",id:"generated/engine/modules/common_functions_getEnvironment",isDocsHomePage:!1,title:"Module: common/functions/getEnvironment",description:"Variables",source:"@site/docs/generated/engine/modules/common_functions_getEnvironment.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_getEnvironment",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_getEnvironment",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_getEnvironment",title:"Module: common/functions/getEnvironment",sidebar_label:"common/functions/getEnvironment",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/ensureIsBrowser",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_ensureIsBrowser"},next:{title:"common/functions/getSignedAngleBetweenVectors",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_getSignedAngleBetweenVectors"}},d=[{value:"Variables",id:"variables",children:[{value:"isBrowser",id:"isbrowser",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"isNode",id:"isnode",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"isWebWorker",id:"iswebworker",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"isJsDom",id:"isjsdom",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"isbrowser"},"isBrowser"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isBrowser"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/dd99c43/packages/engine/src/common/functions/getEnvironment.ts#L3"},"packages/engine/src/common/functions/getEnvironment.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isnode"},"isNode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isNode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/dd99c43/packages/engine/src/common/functions/getEnvironment.ts#L10"},"packages/engine/src/common/functions/getEnvironment.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iswebworker"},"isWebWorker"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isWebWorker"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/dd99c43/packages/engine/src/common/functions/getEnvironment.ts#L6"},"packages/engine/src/common/functions/getEnvironment.ts:6")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"isjsdom"},"isJsDom"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isJsDom"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/releases/tag/12.0.0"},"https://github.com/jsdom/jsdom/releases/tag/12.0.0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/issues/1537"},"https://github.com/jsdom/jsdom/issues/1537")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/dd99c43/packages/engine/src/common/functions/getEnvironment.ts#L17"},"packages/engine/src/common/functions/getEnvironment.ts:17")))}m.isMDXComponent=!0}}]);