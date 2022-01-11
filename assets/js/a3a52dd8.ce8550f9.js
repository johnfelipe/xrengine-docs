"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[33172],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"common_functions_applyVectorMatrixXZ",title:"Module: common/functions/applyVectorMatrixXZ",sidebar_label:"common/functions/applyVectorMatrixXZ",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"generated/engine/modules/common_functions_applyVectorMatrixXZ",id:"generated/engine/modules/common_functions_applyVectorMatrixXZ",title:"Module: common/functions/applyVectorMatrixXZ",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_applyVectorMatrixXZ.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_applyVectorMatrixXZ",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_applyVectorMatrixXZ",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_applyVectorMatrixXZ",title:"Module: common/functions/applyVectorMatrixXZ",sidebar_label:"common/functions/applyVectorMatrixXZ",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/applyThreshold",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_applyThreshold"},next:{title:"common/functions/bitFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_bitFunctions"}},u=[{value:"Functions",id:"functions",children:[{value:"applyVectorMatrixXZ",id:"applyvectormatrixxz",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"applyvectormatrixxz"},"applyVectorMatrixXZ"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"applyVectorMatrixXZ"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("p",null,"Constructs a 2D matrix from first vector, replacing the Y axes with the global Y axis,\nand applies this matrix to the second vector. Saves performance when compared to full 3D matrix application.\nMutates and returns the data in the first vector.\nUseful for actor rotation, as it only happens on the Y axis."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"a")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector to construct 2D matrix from")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"b")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector to apply basis to")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/23b41b8/packages/engine/src/common/functions/applyVectorMatrixXZ.ts#L12"},"packages/engine/src/common/functions/applyVectorMatrixXZ.ts:12")))}m.isMDXComponent=!0}}]);