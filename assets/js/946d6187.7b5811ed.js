"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[63802],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,C=d["".concat(m,".").concat(u)]||d[u]||s[u]||a;return t?r.createElement(C,i(i({ref:n},c),{},{components:t})):r.createElement(C,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33387:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"camera_components_CameraComponent",title:"Module: camera/components/CameraComponent",sidebar_label:"camera/components/CameraComponent",sidebar_position:0,custom_edit_url:null},m=void 0,l={unversionedId:"generated/engine/modules/camera_components_CameraComponent",id:"generated/engine/modules/camera_components_CameraComponent",isDocsHomePage:!1,title:"Module: camera/components/CameraComponent",description:"Variables",source:"@site/docs/generated/engine/modules/camera_components_CameraComponent.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/camera_components_CameraComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/camera_components_CameraComponent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"camera_components_CameraComponent",title:"Module: camera/components/CameraComponent",sidebar_label:"camera/components/CameraComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"bot/webxr-emulator/webxr-polyfill/utils",permalink:"/xrengine-docs/docs/generated/engine/modules/bot_webxr_emulator_webxr_polyfill_utils"},next:{title:"camera/components/FollowCameraComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/camera_components_FollowCameraComponent"}},c=[{value:"Variables",id:"variables",children:[{value:"CameraComponent",id:"cameracomponent",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"cameracomponent"},"CameraComponent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"CameraComponent"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,a.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,a.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/55b4a30/packages/engine/src/camera/components/CameraComponent.ts#L3"},"packages/engine/src/camera/components/CameraComponent.ts:3")))}d.isMDXComponent=!0}}]);