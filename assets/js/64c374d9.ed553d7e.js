"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[71127],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=o,f=p["".concat(l,".").concat(s)]||p[s]||u[s]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"common_functions_vectorToScreenXYZ",title:"Module: common/functions/vectorToScreenXYZ",sidebar_label:"common/functions/vectorToScreenXYZ",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"generated/engine/modules/common_functions_vectorToScreenXYZ",id:"generated/engine/modules/common_functions_vectorToScreenXYZ",title:"Module: common/functions/vectorToScreenXYZ",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_vectorToScreenXYZ.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_vectorToScreenXYZ",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_vectorToScreenXYZ",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_vectorToScreenXYZ",title:"Module: common/functions/vectorToScreenXYZ",sidebar_label:"common/functions/vectorToScreenXYZ",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/vectorHelpers",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_vectorHelpers"},next:{title:"common/functions/zipIterators",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_zipIterators"}},m=[{value:"Functions",id:"functions",children:[{value:"vectorToScreenXYZ",id:"vectortoscreenxyz",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"vectortoscreenxyz"},"vectorToScreenXYZ"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"vectorToScreenXYZ"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"vector"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"camera"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("p",null,"convert 3D coordinates into 2D."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"vector")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"3D Coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"camera")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Camera")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Camera Object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Width of view.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"height")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Height of view.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("p",null,"2D Coordinates of Given 3D Coordinates."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/34a037c/packages/engine/src/common/functions/vectorToScreenXYZ.ts#L11"},"packages/engine/src/common/functions/vectorToScreenXYZ.ts:11")))}p.isMDXComponent=!0}}]);