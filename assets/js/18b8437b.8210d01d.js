"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[48416],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),b=o,m=s["".concat(d,".").concat(b)]||s[b]||p[b]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={id:"bot_webxr_emulator_webxr_polyfill_devices",title:"Module: bot/webxr-emulator/webxr-polyfill/devices",sidebar_label:"bot/webxr-emulator/webxr-polyfill/devices",sidebar_position:0,custom_edit_url:null},d=void 0,c={unversionedId:"generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",id:"generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",isDocsHomePage:!1,title:"Module: bot/webxr-emulator/webxr-polyfill/devices",description:"Functions",source:"@site/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"bot_webxr_emulator_webxr_polyfill_devices",title:"Module: bot/webxr-emulator/webxr-polyfill/devices",sidebar_label:"bot/webxr-emulator/webxr-polyfill/devices",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"bot/webxr-emulator/webxr-polyfill/constants",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_constants"},next:{title:"bot/webxr-emulator/webxr-polyfill/devices/GamepadMappings",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices_GamepadMappings"}},u=[{value:"Functions",id:"functions",children:[{value:"requestXRDevice",id:"requestxrdevice",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"requestxrdevice"},"requestXRDevice"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"requestXRDevice"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"global"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Return an XRDevice interface based off of configuration\nand platform."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"global")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/efea6df/packages/engine/src/bot/webxr-emulator/webxr-polyfill/devices.js#L48"},"packages/engine/src/bot/webxr-emulator/webxr-polyfill/devices.js:48")))}s.isMDXComponent=!0}}]);