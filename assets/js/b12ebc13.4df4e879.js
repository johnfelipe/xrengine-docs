"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[51247],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,u=m["".concat(d,".").concat(k)]||m[k]||s[k]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"networking_functions_dispatchFrom",title:"Module: networking/functions/dispatchFrom",sidebar_label:"networking/functions/dispatchFrom",sidebar_position:0,custom_edit_url:null},d=void 0,c={unversionedId:"generated/engine/modules/networking_functions_dispatchFrom",id:"generated/engine/modules/networking_functions_dispatchFrom",isDocsHomePage:!1,title:"Module: networking/functions/dispatchFrom",description:"Functions",source:"@site/docs/generated/engine/modules/networking_functions_dispatchFrom.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/networking_functions_dispatchFrom",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_functions_dispatchFrom",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_functions_dispatchFrom",title:"Module: networking/functions/dispatchFrom",sidebar_label:"networking/functions/dispatchFrom",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"networking/functions/NetworkWorldAction",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_functions_NetworkWorldAction"},next:{title:"networking/functions/getNearbyUsers",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_functions_getNearbyUsers"}},p=[{value:"Functions",id:"functions",children:[{value:"dispatchFrom",id:"dispatchfrom",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"dispatchLocal",id:"dispatchlocal",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"dispatchfrom"},"dispatchFrom"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"dispatchFrom"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"A"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"actionCb"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Dispatch an action from a given user.\nThis function is a no-op for every other user."),(0,i.kt)("p",null,"By default, the action is dispatched to every other user,\non the next simulation tick. These defaults can be overriden\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"to()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"delay()")," modifiers."),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UserId"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionCb")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"A"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cache")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"cache"),": ",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#actioncacheoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionCacheOptions")),") => { to(to: ActionRecipients): ...; delay(tickOffset: number): ...; cache(cache?: ActionCacheOptions): ...; }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delay")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"tickOffset"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => { to(to: ActionRecipients): ...; delay(tickOffset: number): ...; cache(cache?: ActionCacheOptions): ...; }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"to"),": ",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#actionrecipients"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionRecipients")),") => { to(to: ActionRecipients): ...; delay(tickOffset: number): ...; cache(cache?: ActionCacheOptions): ...; }")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68d79fe/packages/engine/src/networking/functions/dispatchFrom.ts#L14"},"packages/engine/src/networking/functions/dispatchFrom.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispatchlocal"},"dispatchLocal"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"dispatchLocal"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"A"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")))))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cache")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"cache"),": ",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#actioncacheoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionCacheOptions")),") => { to(to: ActionRecipients): ...; delay(tickOffset: number): ...; cache(cache?: ActionCacheOptions): ...; }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delay")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"tickOffset"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => { to(to: ActionRecipients): ...; delay(tickOffset: number): ...; cache(cache?: ActionCacheOptions): ...; }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"to"),": ",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#actionrecipients"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionRecipients")),") => { to(to: ActionRecipients): ...; delay(tickOffset: number): ...; cache(cache?: ActionCacheOptions): ...; }")))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/68d79fe/packages/engine/src/networking/functions/dispatchFrom.ts#L74"},"packages/engine/src/networking/functions/dispatchFrom.ts:74")))}m.isMDXComponent=!0}}]);