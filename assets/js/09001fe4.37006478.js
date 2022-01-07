"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[67525],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=i,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={id:"map_types.MapDerivedFeatureGeometry",title:"Interface: MapDerivedFeatureGeometry",sidebar_label:"MapDerivedFeatureGeometry",custom_edit_url:null},c=void 0,l={unversionedId:"generated/engine/interfaces/map_types.MapDerivedFeatureGeometry",id:"generated/engine/interfaces/map_types.MapDerivedFeatureGeometry",title:"Interface: MapDerivedFeatureGeometry",description:"map/types.MapDerivedFeatureGeometry",source:"@site/docs/generated/engine/interfaces/map_types.MapDerivedFeatureGeometry.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/map_types.MapDerivedFeatureGeometry",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_types.MapDerivedFeatureGeometry",editUrl:null,tags:[],version:"current",frontMatter:{id:"map_types.MapDerivedFeatureGeometry",title:"Interface: MapDerivedFeatureGeometry",sidebar_label:"MapDerivedFeatureGeometry",custom_edit_url:null},sidebar:"sidebar",previous:{title:"MapDerivedFeatureComplete",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_types.MapDerivedFeatureComplete"},next:{title:"MapFeatureLabel",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_types.MapFeatureLabel"}},u=[{value:"Properties",id:"properties",children:[{value:"boundingCircleRadius",id:"boundingcircleradius",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"centerPoint",id:"centerpoint",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"geometry",id:"geometry",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],d={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/map_types"},"map/types"),".MapDerivedFeatureGeometry"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"boundingcircleradius"},"boundingCircleRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"boundingCircleRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a55894e/packages/engine/src/map/types.ts#L95"},"packages/engine/src/map/types.ts:95")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"centerpoint"},"centerPoint"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"centerPoint"),": ","[",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a55894e/packages/engine/src/map/types.ts#L94"},"packages/engine/src/map/types.ts:94")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"geometry"},"geometry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"geometry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferGeometry")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"InstancedBufferGeometry")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/a55894e/packages/engine/src/map/types.ts#L93"},"packages/engine/src/map/types.ts:93")))}s.isMDXComponent=!0}}]);