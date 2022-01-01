"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[78048],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94263:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),c=["components"],o={id:"particles_interfaces.textureFrame",title:"Interface: textureFrame",sidebar_label:"textureFrame",custom_edit_url:null},l=void 0,s={unversionedId:"generated/engine/interfaces/particles_interfaces.textureFrame",id:"generated/engine/interfaces/particles_interfaces.textureFrame",title:"Interface: textureFrame",description:"particles/interfaces.textureFrame",source:"@site/docs/generated/engine/interfaces/particles_interfaces.textureFrame.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/particles_interfaces.textureFrame",permalink:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.textureFrame",editUrl:null,tags:[],version:"current",frontMatter:{id:"particles_interfaces.textureFrame",title:"Interface: textureFrame",sidebar_label:"textureFrame",custom_edit_url:null},sidebar:"sidebar",previous:{title:"particleOptions",permalink:"/xrengine-docs/docs/generated/engine/interfaces/particles_interfaces.particleOptions"},next:{title:"BodyConfig",permalink:"/xrengine-docs/docs/generated/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"}},p=[{value:"Properties",id:"properties",children:[{value:"cols",id:"cols",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"rows",id:"rows",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/particles_interfaces"},"particles/interfaces"),".textureFrame"),(0,a.kt)("p",null,"Interface for frame of texture."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cols"},"cols"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cols"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Column count for this frame."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/e4afda4/packages/engine/src/particles/interfaces/index.ts#L36"},"packages/engine/src/particles/interfaces/index.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rows"},"rows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"rows"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Row count for this frame."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/e4afda4/packages/engine/src/particles/interfaces/index.ts#L38"},"packages/engine/src/particles/interfaces/index.ts:38")))}f.isMDXComponent=!0}}]);