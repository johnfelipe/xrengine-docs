"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[18892],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,g=m["".concat(s,".").concat(u)]||m[u]||l[u]||r;return t?o.createElement(g,a(a({ref:n},d),{},{components:t})):o.createElement(g,a({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82920:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],p={id:"physics_components_RigidBodyTagComponent",title:"Module: physics/components/RigidBodyTagComponent",sidebar_label:"physics/components/RigidBodyTagComponent",sidebar_position:0,custom_edit_url:null},s=void 0,c={unversionedId:"generated/engine/modules/physics_components_RigidBodyTagComponent",id:"generated/engine/modules/physics_components_RigidBodyTagComponent",isDocsHomePage:!1,title:"Module: physics/components/RigidBodyTagComponent",description:"Variables",source:"@site/docs/generated/engine/modules/physics_components_RigidBodyTagComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/physics_components_RigidBodyTagComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_components_RigidBodyTagComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_RigidBodyTagComponent",title:"Module: physics/components/RigidBodyTagComponent",sidebar_label:"physics/components/RigidBodyTagComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"physics/components/RaycastComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_components_RaycastComponent"},next:{title:"physics/components/VelocityComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/physics_components_VelocityComponent"}},d=[{value:"Variables",id:"variables",children:[{value:"RigidBodyTagComponent",id:"rigidbodytagcomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],l={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"rigidbodytagcomponent"},"RigidBodyTagComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"RigidBodyTagComponent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4ef2f81/packages/engine/src/physics/components/RigidBodyTagComponent.ts#L3"},"packages/engine/src/physics/components/RigidBodyTagComponent.ts:3")))}m.isMDXComponent=!0}}]);