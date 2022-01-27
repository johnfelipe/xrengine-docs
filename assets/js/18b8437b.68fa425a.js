"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[48416],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),b=i,m=s["".concat(d,".").concat(b)]||s[b]||p[b]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={id:"bot_webxr_emulator_webxr_polyfill_devices",title:"Module: bot/webxr-emulator/webxr-polyfill/devices",sidebar_label:"bot/webxr-emulator/webxr-polyfill/devices",sidebar_position:0,custom_edit_url:null},d=void 0,u={unversionedId:"generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",id:"generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",title:"Module: bot/webxr-emulator/webxr-polyfill/devices",description:"Functions",source:"@site/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"bot_webxr_emulator_webxr_polyfill_devices",title:"Module: bot/webxr-emulator/webxr-polyfill/devices",sidebar_label:"bot/webxr-emulator/webxr-polyfill/devices",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"bot/webxr-emulator/webxr-polyfill/constants",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_constants"},next:{title:"bot/webxr-emulator/webxr-polyfill/devices/GamepadMappings",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_devices_GamepadMappings"}},c=[{value:"Functions",id:"functions",children:[{value:"requestXRDevice",id:"requestxrdevice",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"requestxrdevice"},"requestXRDevice"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"requestXRDevice"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"global"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("p",null,"Return an XRDevice interface based off of configuration\nand platform."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"global")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"config")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5af1792/packages/engine/src/bot/webxr-emulator/webxr-polyfill/devices.js#L48"},"packages/engine/src/bot/webxr-emulator/webxr-polyfill/devices.js:48")))}s.isMDXComponent=!0}}]);