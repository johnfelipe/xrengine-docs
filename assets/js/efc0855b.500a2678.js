"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[98258],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(b,i(i({ref:n},s),{},{components:t})):o.createElement(b,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67069:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"scene_components_UpdatableComponent",title:"Module: scene/components/UpdatableComponent",sidebar_label:"scene/components/UpdatableComponent",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"generated/engine/modules/scene_components_UpdatableComponent",id:"generated/engine/modules/scene_components_UpdatableComponent",isDocsHomePage:!1,title:"Module: scene/components/UpdatableComponent",description:"Variables",source:"@site/docs/generated/engine/modules/scene_components_UpdatableComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_components_UpdatableComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_UpdatableComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_UpdatableComponent",title:"Module: scene/components/UpdatableComponent",sidebar_label:"scene/components/UpdatableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/components/TriggerVolumeComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_TriggerVolumeComponent"},next:{title:"scene/components/UserNameComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_UserNameComponent"}},s=[{value:"Variables",id:"variables",children:[{value:"UpdatableComponent",id:"updatablecomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],d={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"updatablecomponent"},"UpdatableComponent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UpdatableComponent"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,a.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8ed66c9/packages/engine/src/scene/components/UpdatableComponent.ts#L2"},"packages/engine/src/scene/components/UpdatableComponent.ts:2")))}m.isMDXComponent=!0}}]);