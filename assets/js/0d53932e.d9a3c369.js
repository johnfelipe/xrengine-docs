"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[38017],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93692:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"scene_components_GroundPlane",title:"Module: scene/components/GroundPlane",sidebar_label:"scene/components/GroundPlane",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"generated/engine/modules/scene_components_GroundPlane",id:"generated/engine/modules/scene_components_GroundPlane",isDocsHomePage:!1,title:"Module: scene/components/GroundPlane",description:"Variables",source:"@site/docs/generated/engine/modules/scene_components_GroundPlane.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/scene_components_GroundPlane",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_GroundPlane",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_GroundPlane",title:"Module: scene/components/GroundPlane",sidebar_label:"scene/components/GroundPlane",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"scene/components/FogComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_FogComponent"},next:{title:"scene/components/LightComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/scene_components_LightComponent"}},s=[{value:"Variables",id:"variables",children:[{value:"GroundPlane",id:"groundplane",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"groundplane"},"GroundPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"GroundPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,i.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,i.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,i.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/69a99c2/packages/engine/src/scene/components/GroundPlane.ts#L3"},"packages/engine/src/scene/components/GroundPlane.ts:3")))}u.isMDXComponent=!0}}]);