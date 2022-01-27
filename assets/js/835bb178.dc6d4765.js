"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[62697],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},d=Object.keys(t);for(a=0;a<d.length;a++)n=d[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(a=0;a<d.length;a++)n=d[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),l=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,d=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=l(n),k=r,N=s["".concat(m,".").concat(k)]||s[k]||o[k]||d;return n?a.createElement(N,p(p({ref:e},u),{},{components:n})):a.createElement(N,p({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var d=n.length,p=new Array(d);p[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var l=2;l<d;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47425:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var a=n(87462),r=n(63366),d=(n(67294),n(3905)),p=["components"],i={id:"input_functions_GamepadInput",title:"Module: input/functions/GamepadInput",sidebar_label:"input/functions/GamepadInput",sidebar_position:0,custom_edit_url:null},m=void 0,l={unversionedId:"generated/engine/modules/input_functions_GamepadInput",id:"generated/engine/modules/input_functions_GamepadInput",title:"Module: input/functions/GamepadInput",description:"Variables",source:"@site/docs/generated/engine/modules/input_functions_GamepadInput.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/input_functions_GamepadInput",permalink:"/xrengine-docs/docs/generated/engine/modules/input_functions_GamepadInput",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"input_functions_GamepadInput",title:"Module: input/functions/GamepadInput",sidebar_label:"input/functions/GamepadInput",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"input/enums/InputType",permalink:"/xrengine-docs/docs/generated/engine/modules/input_enums_InputType"},next:{title:"input/functions/OrbitControls",permalink:"/xrengine-docs/docs/generated/engine/modules/input_functions_OrbitControls"}},u=[{value:"Variables",id:"variables",children:[{value:"gamepadMapping",id:"gamepadmapping",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"handleGamepadAxis",id:"handlegamepadaxis",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"handleGamepadConnected",id:"handlegamepadconnected",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"handleGamepadDisconnected",id:"handlegamepaddisconnected",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"handleGamepads",id:"handlegamepads",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],o={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,p);return(0,d.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"variables"},"Variables"),(0,d.kt)("h3",{id:"gamepadmapping"},"gamepadMapping"),(0,d.kt)("p",null,"\u2022 ",(0,d.kt)("strong",{parentName:"p"},"gamepadMapping"),": ",(0,d.kt)("inlineCode",{parentName:"p"},"Object")),(0,d.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Object"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.0")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.1")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.10")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.11")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.12")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.13")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.14")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.15")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.2")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.3")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.4")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.5")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.6")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.7")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.8")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.9")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Object"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Object"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.axes")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Object"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.0")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.1")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.2")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.3")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.4")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.5")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Object"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.axes")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Object"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.0")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.1")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.2")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.3")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.4")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.5")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"../enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))))),(0,d.kt)("h4",{id:"defined-in"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/536e2fb/packages/engine/src/input/functions/GamepadInput.ts#L172"},"packages/engine/src/input/functions/GamepadInput.ts:172")),(0,d.kt)("h2",{id:"functions"},"Functions"),(0,d.kt)("h3",{id:"handlegamepadaxis"},"handleGamepadAxis"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadAxis"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"gamepad"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"inputIndex"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"mappedInputValue"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"Gamepad axios"),(0,d.kt)("h4",{id:"parameters"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"gamepad")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Gamepad"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"inputIndex")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"number"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"mappedInputValue")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"input_types_InputAlias#inputalias"},(0,d.kt)("inlineCode",{parentName:"a"},"InputAlias")))))),(0,d.kt)("h4",{id:"returns"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/536e2fb/packages/engine/src/input/functions/GamepadInput.ts#L96"},"packages/engine/src/input/functions/GamepadInput.ts:96")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepadconnected"},"handleGamepadConnected"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadConnected"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"When a gamepad connects"),(0,d.kt)("h4",{id:"parameters-1"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"event")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"any"))))),(0,d.kt)("h4",{id:"returns-1"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/536e2fb/packages/engine/src/input/functions/GamepadInput.ts#L131"},"packages/engine/src/input/functions/GamepadInput.ts:131")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepaddisconnected"},"handleGamepadDisconnected"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadDisconnected"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"When a gamepad disconnects"),(0,d.kt)("h4",{id:"parameters-2"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"event")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"any"))))),(0,d.kt)("h4",{id:"returns-2"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/536e2fb/packages/engine/src/input/functions/GamepadInput.ts#L152"},"packages/engine/src/input/functions/GamepadInput.ts:152")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepads"},"handleGamepads"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,d.kt)("strong",{parentName:"p"},"handleGamepads"),"(): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"System behavior to handle gamepad input"),(0,d.kt)("h4",{id:"returns-3"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/536e2fb/packages/engine/src/input/functions/GamepadInput.ts#L37"},"packages/engine/src/input/functions/GamepadInput.ts:37")))}s.isMDXComponent=!0}}]);