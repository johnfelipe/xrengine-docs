"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[94530],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),k=a,m=p["".concat(o,".").concat(k)]||p[k]||c[k]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86872:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"k8s",title:"Module: k8s",sidebar_label:"k8s",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"generated/server-core/modules/k8s",id:"generated/server-core/modules/k8s",isDocsHomePage:!1,title:"Module: k8s",description:"Classes",source:"@site/docs/generated/server-core/modules/k8s.md",sourceDirName:"generated/server-core/modules",slug:"/generated/server-core/modules/k8s",permalink:"/xrengine-docs/docs/generated/server-core/modules/k8s",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"k8s",title:"Module: k8s",sidebar_label:"k8s",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"hooks/verify-scope",permalink:"/xrengine-docs/docs/generated/server-core/modules/hooks_verify_scope"},next:{title:"logger",permalink:"/xrengine-docs/docs/generated/server-core/modules/logger"}},u=[{value:"Classes",id:"classes",children:[],level:2},{value:"Type aliases",id:"type-aliases",children:[{value:"K8sRequest",id:"k8srequest",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"api",id:"api",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"kubectl",id:"kubectl",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/k8s.Request"},"Request"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"k8srequest"},"K8sRequest"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"K8sRequest"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/k8s.Request"},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/3807cba/packages/server-core/src/k8s.ts#L665"},"k8s.ts:665")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"api"},"api"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"api"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"conf"),"): ",(0,i.kt)("a",{parentName:"p",href:"../classes/k8s.Request"},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"conf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../classes/k8s.Request"},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/3807cba/packages/server-core/src/k8s.ts#L667"},"k8s.ts:667")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"kubectl"},"kubectl"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"kubectl"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"conf"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"conf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/3807cba/packages/server-core/src/k8s.ts#L323"},"k8s.ts:323")))}p.isMDXComponent=!0}}]);