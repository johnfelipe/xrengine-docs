"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[63675],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,k=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10291:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"networking_interfaces_NetworkSchema.NetworkSchema",title:"Interface: NetworkSchema",sidebar_label:"NetworkSchema",custom_edit_url:null},s=void 0,l={unversionedId:"generated/engine/interfaces/networking_interfaces_NetworkSchema.NetworkSchema",id:"generated/engine/interfaces/networking_interfaces_NetworkSchema.NetworkSchema",isDocsHomePage:!1,title:"Interface: NetworkSchema",description:"networking/interfaces/NetworkSchema.NetworkSchema",source:"@site/docs/generated/engine/interfaces/networking_interfaces_NetworkSchema.NetworkSchema.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/networking_interfaces_NetworkSchema.NetworkSchema",permalink:"/xrengine-docs/docs/generated/engine/interfaces/networking_interfaces_NetworkSchema.NetworkSchema",editUrl:null,tags:[],version:"current",frontMatter:{id:"networking_interfaces_NetworkSchema.NetworkSchema",title:"Interface: NetworkSchema",sidebar_label:"NetworkSchema",custom_edit_url:null},sidebar:"sidebar",previous:{title:"NetworkClient",permalink:"/xrengine-docs/docs/generated/engine/interfaces/networking_interfaces_NetworkClient.NetworkClient"},next:{title:"NetworkTransport",permalink:"/xrengine-docs/docs/generated/engine/interfaces/networking_interfaces_NetworkTransport.NetworkTransport"}},p=[{value:"Properties",id:"properties",children:[{value:"messageTypes",id:"messagetypes",children:[{value:"Index signature",id:"index-signature",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"transport",id:"transport",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/networking_interfaces_NetworkSchema"},"networking/interfaces/NetworkSchema"),".NetworkSchema"),(0,a.kt)("p",null,"Interface for Network schema."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"messagetypes"},"messageTypes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"messageTypes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"List of supported message types."),(0,a.kt)("h4",{id:"index-signature"},"Index signature"),(0,a.kt)("p",null,"\u25aa ","[key: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/596f250/packages/engine/src/networking/interfaces/NetworkSchema.ts#L6"},"packages/engine/src/networking/interfaces/NetworkSchema.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transport"},"transport"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transport"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"Transporter of the message."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/596f250/packages/engine/src/networking/interfaces/NetworkSchema.ts#L4"},"packages/engine/src/networking/interfaces/NetworkSchema.ts:4")))}f.isMDXComponent=!0}}]);