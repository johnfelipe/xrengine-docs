"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[51247],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],d={id:"networking_functions_dispatchFrom",title:"Module: networking/functions/dispatchFrom",sidebar_label:"networking/functions/dispatchFrom",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"generated/engine/modules/networking_functions_dispatchFrom",id:"generated/engine/modules/networking_functions_dispatchFrom",isDocsHomePage:!1,title:"Module: networking/functions/dispatchFrom",description:"Functions",source:"@site/docs/generated/engine/modules/networking_functions_dispatchFrom.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/networking_functions_dispatchFrom",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_functions_dispatchFrom",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_functions_dispatchFrom",title:"Module: networking/functions/dispatchFrom",sidebar_label:"networking/functions/dispatchFrom",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"networking/functions/NetworkWorldAction",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_functions_NetworkWorldAction"},next:{title:"networking/functions/getNearbyUsers",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_functions_getNearbyUsers"}},c=[{value:"Functions",id:"functions",children:[{value:"dispatchFrom",id:"dispatchfrom",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"dispatchLocal",id:"dispatchlocal",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"dispatchfrom"},"dispatchFrom"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"dispatchFrom"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"actionCb"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"Dispatch an action from a given user.\nThis function is a no-op for every other user."),(0,r.kt)("p",null,"By default, the action is dispatched to every other user,\non the next simulation tick. These defaults can be overriden\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"to()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delay()")," modifiers."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"networking_interfaces_Action#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"OpaqueType"),"<",(0,r.kt)("inlineCode",{parentName:"td"},'"userId"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"U"),">"," & ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," & { ",(0,r.kt)("inlineCode",{parentName:"td"},"__host"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"  }")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"userId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"U"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionCb")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"A"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"tickOffset"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," { to(to: ActionRecipients): ... ","|"," undefined; delay(tickOffset: number): ... ","|"," undefined; }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"to"),": ",(0,r.kt)("a",{parentName:"td",href:"networking_interfaces_Action#actionrecipients"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionRecipients")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," { to(to: ActionRecipients): ... ","|"," undefined; delay(tickOffset: number): ... ","|"," undefined; }")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4ef2f81/packages/engine/src/networking/functions/dispatchFrom.ts#L15"},"packages/engine/src/networking/functions/dispatchFrom.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispatchlocal"},"dispatchLocal"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"dispatchLocal"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"delay"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"tickOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { to(to: ActionRecipients): ... ","|"," undefined; delay(tickOffset: number): ... ","|"," undefined; } ; ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,r.kt)("a",{parentName:"p",href:"networking_interfaces_Action#actionrecipients"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionRecipients")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { to(to: ActionRecipients): ... ","|"," undefined; delay(tickOffset: number): ... ","|"," undefined; }  }, ",(0,r.kt)("inlineCode",{parentName:"p"},'"to"'),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"  } & ",(0,r.kt)("a",{parentName:"td",href:"networking_interfaces_Action#actionoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionOptions"))," & { ",(0,r.kt)("inlineCode",{parentName:"td"},"__ALLOW_DISPATCH_FROM_ANY"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"  }")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"delay"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"tickOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { to(to: ActionRecipients): ... ","|"," undefined; delay(tickOffset: number): ... ","|"," undefined; } ; ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,r.kt)("a",{parentName:"p",href:"networking_interfaces_Action#actionrecipients"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionRecipients")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," { to(to: ActionRecipients): ... ","|"," undefined; delay(tickOffset: number): ... ","|"," undefined; }  }, ",(0,r.kt)("inlineCode",{parentName:"p"},'"to"'),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4ef2f81/packages/engine/src/networking/functions/dispatchFrom.ts#L50"},"packages/engine/src/networking/functions/dispatchFrom.ts:50")))}m.isMDXComponent=!0}}]);