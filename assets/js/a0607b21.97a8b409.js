"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[58291],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||a;return n?i.createElement(k,o(o({ref:t},m),{},{components:n})):i.createElement(k,o({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83504:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"common_functions_bitFunctions",title:"Module: common/functions/bitFunctions",sidebar_label:"common/functions/bitFunctions",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"generated/engine/modules/common_functions_bitFunctions",id:"generated/engine/modules/common_functions_bitFunctions",title:"Module: common/functions/bitFunctions",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_bitFunctions.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_bitFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_bitFunctions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_bitFunctions",title:"Module: common/functions/bitFunctions",sidebar_label:"common/functions/bitFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/applyVectorMatrixXZ",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_applyVectorMatrixXZ"},next:{title:"common/functions/checkValidPositionOnGround",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_checkValidPositionOnGround"}},m=[{value:"Functions",id:"functions",children:[{value:"clearBit",id:"clearbit",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"getBit",id:"getbit",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"setBit",id:"setbit",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"updateBit",id:"updatebit",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"clearbit"},"clearBit"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clearBit"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bitPosition"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bitPosition")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/485a2f2/packages/engine/src/common/functions/bitFunctions.ts#L9"},"packages/engine/src/common/functions/bitFunctions.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getbit"},"getBit"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getBit"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bitPosition"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bitPosition")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/485a2f2/packages/engine/src/common/functions/bitFunctions.ts#L1"},"packages/engine/src/common/functions/bitFunctions.ts:1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setbit"},"setBit"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setBit"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bitPosition"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bitPosition")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/485a2f2/packages/engine/src/common/functions/bitFunctions.ts#L5"},"packages/engine/src/common/functions/bitFunctions.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updatebit"},"updateBit"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"updateBit"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bitPosition"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bitValue"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bitPosition")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bitValue")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/485a2f2/packages/engine/src/common/functions/bitFunctions.ts#L14"},"packages/engine/src/common/functions/bitFunctions.ts:14")))}c.isMDXComponent=!0}}]);