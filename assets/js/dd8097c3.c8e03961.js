"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[16134],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78361:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"networking_components_NetworkObjectOwnedTag",title:"Module: networking/components/NetworkObjectOwnedTag",sidebar_label:"networking/components/NetworkObjectOwnedTag",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"generated/engine/modules/networking_components_NetworkObjectOwnedTag",id:"generated/engine/modules/networking_components_NetworkObjectOwnedTag",isDocsHomePage:!1,title:"Module: networking/components/NetworkObjectOwnedTag",description:"Variables",source:"@site/docs/generated/engine/modules/networking_components_NetworkObjectOwnedTag.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/networking_components_NetworkObjectOwnedTag",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_components_NetworkObjectOwnedTag",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_components_NetworkObjectOwnedTag",title:"Module: networking/components/NetworkObjectOwnedTag",sidebar_label:"networking/components/NetworkObjectOwnedTag",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"networking/components/NetworkObjectComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_components_NetworkObjectComponent"},next:{title:"networking/constants/VideoConstants",permalink:"/xrengine-docs/docs/generated/engine/modules/networking_constants_VideoConstants"}},d=[{value:"Variables",id:"variables",children:[{value:"NetworkObjectOwnedTag",id:"networkobjectownedtag",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"networkobjectownedtag"},"NetworkObjectOwnedTag"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NetworkObjectOwnedTag"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/240ac31/packages/engine/src/networking/components/NetworkObjectOwnedTag.ts#L3"},"packages/engine/src/networking/components/NetworkObjectOwnedTag.ts:3")))}u.isMDXComponent=!0}}]);