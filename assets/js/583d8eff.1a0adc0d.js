"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[6783],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"networking_systems_IncomingNetworkSystem",title:"Module: networking/systems/IncomingNetworkSystem",sidebar_label:"networking/systems/IncomingNetworkSystem",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"generated/engine/modules/networking_systems_IncomingNetworkSystem",id:"generated/engine/modules/networking_systems_IncomingNetworkSystem",title:"Module: networking/systems/IncomingNetworkSystem",description:"Functions",source:"@site/docs/generated/engine/modules/networking_systems_IncomingNetworkSystem.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/networking_systems_IncomingNetworkSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_systems_IncomingNetworkSystem",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_systems_IncomingNetworkSystem",title:"Module: networking/systems/IncomingNetworkSystem",sidebar_label:"networking/systems/IncomingNetworkSystem",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"networking/serialization/ViewCursor",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_serialization_ViewCursor"},next:{title:"networking/systems/MediaStreamSystem",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_systems_MediaStreamSystem"}},p=[{value:"Functions",id:"functions",children:[{value:"applyAndArchiveIncomingAction",id:"applyandarchiveincomingaction",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"applyIncomingActions",id:"applyincomingactions",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"applyUnreliableQueue",id:"applyunreliablequeue",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[{value:"Parameters",id:"parameters-3",children:[],level:5},{value:"Returns",id:"returns-3",children:[],level:5}],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"default",id:"default",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"updateCachedActions",id:"updatecachedactions",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"applyandarchiveincomingaction"},"applyAndArchiveIncomingAction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"applyAndArchiveIncomingAction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"world")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f119c06/packages/engine/src/networking/systems/IncomingNetworkSystem.ts#L57"},"packages/engine/src/networking/systems/IncomingNetworkSystem.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"applyincomingactions"},"applyIncomingActions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"applyIncomingActions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,i.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"world")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f119c06/packages/engine/src/networking/systems/IncomingNetworkSystem.ts#L70"},"packages/engine/src/networking/systems/IncomingNetworkSystem.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"applyunreliablequeue"},"applyUnreliableQueue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"applyUnreliableQueue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"networkInstance"),"): (",(0,i.kt)("inlineCode",{parentName:"p"},"world"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,i.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"networkInstance")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/networking_classes_Network.Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,i.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World"))),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"world")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")))))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f119c06/packages/engine/src/networking/systems/IncomingNetworkSystem.ts#L88"},"packages/engine/src/networking/systems/IncomingNetworkSystem.ts:88")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"ecs_classes_System#system"},(0,i.kt)("inlineCode",{parentName:"a"},"System")),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"world")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"ecs_classes_System#system"},(0,i.kt)("inlineCode",{parentName:"a"},"System")),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f119c06/packages/engine/src/networking/systems/IncomingNetworkSystem.ts#L246"},"packages/engine/src/networking/systems/IncomingNetworkSystem.ts:246")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatecachedactions"},"updateCachedActions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"updateCachedActions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"world")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/ecs_classes_World.World"},(0,i.kt)("inlineCode",{parentName:"a"},"World")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("a",{parentName:"td",href:"networking_interfaces_Action#action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")),">")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f119c06/packages/engine/src/networking/systems/IncomingNetworkSystem.ts#L25"},"packages/engine/src/networking/systems/IncomingNetworkSystem.ts:25")))}c.isMDXComponent=!0}}]);