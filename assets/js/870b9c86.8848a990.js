"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[29017],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),a=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=a(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=a(t),f=r,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?i.createElement(g,c(c({ref:n},l),{},{components:t})):i.createElement(g,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var a=2;a<o;a++)c[a]=t[a];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29713:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),c=["components"],s={id:"ecs_functions_EngineFunctions",title:"Module: ecs/functions/EngineFunctions",sidebar_label:"ecs/functions/EngineFunctions",sidebar_position:0,custom_edit_url:null},u=void 0,a={unversionedId:"generated/engine/modules/ecs_functions_EngineFunctions",id:"generated/engine/modules/ecs_functions_EngineFunctions",isDocsHomePage:!1,title:"Module: ecs/functions/EngineFunctions",description:"Functions",source:"@site/docs/generated/engine/modules/ecs_functions_EngineFunctions.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/ecs_functions_EngineFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/ecs_functions_EngineFunctions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ecs_functions_EngineFunctions",title:"Module: ecs/functions/EngineFunctions",sidebar_label:"ecs/functions/EngineFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"ecs/functions/ComponentFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/ecs_functions_ComponentFunctions"},next:{title:"ecs/functions/EntityFunctions",permalink:"/xrengine-docs/docs/generated/engine/modules/ecs_functions_EntityFunctions"}},l=[{value:"Functions",id:"functions",children:[{value:"reset",id:"reset",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"unloadScene",id:"unloadscene",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],d={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"reset"},"reset"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("p",null,"Reset the engine and remove everything from memory."),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/efea6df/packages/engine/src/ecs/functions/EngineFunctions.ts#L19"},"packages/engine/src/ecs/functions/EngineFunctions.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"unloadscene"},"unloadScene"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"unloadScene"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/efea6df/packages/engine/src/ecs/functions/EngineFunctions.ts#L75"},"packages/engine/src/ecs/functions/EngineFunctions.ts:75")))}p.isMDXComponent=!0}}]);