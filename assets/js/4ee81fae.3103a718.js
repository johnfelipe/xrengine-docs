"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[64342],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?o.createElement(g,a(a({ref:n},l),{},{components:t})):o.createElement(g,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40493:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"scene_components_PersistTagComponent",title:"Module: scene/components/PersistTagComponent",sidebar_label:"scene/components/PersistTagComponent",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"generated/engine/modules/scene_components_PersistTagComponent",id:"generated/engine/modules/scene_components_PersistTagComponent",isDocsHomePage:!1,title:"Module: scene/components/PersistTagComponent",description:"Variables",source:"@site/docs/generated/engine/modules/scene_components_PersistTagComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_components_PersistTagComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_PersistTagComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_PersistTagComponent",title:"Module: scene/components/PersistTagComponent",sidebar_label:"scene/components/PersistTagComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/components/Object3DComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_Object3DComponent"},next:{title:"scene/components/PortalComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_PortalComponent"}},l=[{value:"Variables",id:"variables",children:[{value:"PersistTagComponent",id:"persisttagcomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],m={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"persisttagcomponent"},"PersistTagComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"PersistTagComponent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4ef2f81/packages/engine/src/scene/components/PersistTagComponent.ts#L2"},"packages/engine/src/scene/components/PersistTagComponent.ts:2")))}d.isMDXComponent=!0}}]);