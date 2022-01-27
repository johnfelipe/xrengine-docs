"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[85325],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(t),p=o,f=d["".concat(c,".").concat(p)]||d[p]||l[p]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99140:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"common_functions_hashFromResourceName",title:"Module: common/functions/hashFromResourceName",sidebar_label:"common/functions/hashFromResourceName",sidebar_position:0,custom_edit_url:null},c=void 0,m={unversionedId:"generated/engine/modules/common_functions_hashFromResourceName",id:"generated/engine/modules/common_functions_hashFromResourceName",title:"Module: common/functions/hashFromResourceName",description:"Functions",source:"@site/docs/generated/engine/modules/common_functions_hashFromResourceName.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/common_functions_hashFromResourceName",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_hashFromResourceName",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_hashFromResourceName",title:"Module: common/functions/hashFromResourceName",sidebar_label:"common/functions/hashFromResourceName",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"common/functions/getURLParams",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_getURLParams"},next:{title:"common/functions/isAbsolutePath",permalink:"/xrengine-docs/docs/generated/engine/modules/common_functions_isAbsolutePath"}},u=[{value:"Functions",id:"functions",children:[{value:"hashFromResourceName",id:"hashfromresourcename",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"hashfromresourcename"},"hashFromResourceName"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"hashFromResourceName"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"str"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Get hash string from the asset file name."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"str")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the asset file.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The hash plus part of the file name."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/536e2fb/packages/engine/src/common/functions/hashFromResourceName.ts#L7"},"packages/engine/src/common/functions/hashFromResourceName.ts:7")))}d.isMDXComponent=!0}}]);