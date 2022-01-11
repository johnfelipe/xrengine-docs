"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[45170],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return k}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),m=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=m(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(t),k=a,c=u["".concat(l,".").concat(k)]||u[k]||s[k]||o;return t?n.createElement(c,i(i({ref:r},d),{},{components:t})):n.createElement(c,i({ref:r},d))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81455:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"map_workers_transformFeatureWorker.WorkerApi",title:"Interface: WorkerApi",sidebar_label:"WorkerApi",custom_edit_url:null},l=void 0,m={unversionedId:"generated/engine/interfaces/map_workers_transformFeatureWorker.WorkerApi",id:"generated/engine/interfaces/map_workers_transformFeatureWorker.WorkerApi",title:"Interface: WorkerApi",description:"map/workers/transformFeatureWorker.WorkerApi",source:"@site/docs/generated/engine/interfaces/map_workers_transformFeatureWorker.WorkerApi.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/map_workers_transformFeatureWorker.WorkerApi",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_workers_transformFeatureWorker.WorkerApi",editUrl:null,tags:[],version:"current",frontMatter:{id:"map_workers_transformFeatureWorker.WorkerApi",title:"Interface: WorkerApi",sidebar_label:"WorkerApi",custom_edit_url:null},sidebar:"sidebar",previous:{title:"WorkerApi",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_workers_geometryWorker.WorkerApi"},next:{title:"NetworkTransportHandler",permalink:"/xrengine-docs/docs/generated/engine/interfaces/networking_classes_Network.NetworkTransportHandler"}},d=[{value:"Properties",id:"properties",children:[{value:"handle",id:"handle",children:[{value:"Type declaration",id:"type-declaration",children:[{value:"Type parameters",id:"type-parameters",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Returns",id:"returns",children:[],level:5}],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],s={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/map_workers_transformFeatureWorker"},"map/workers/transformFeatureWorker"),".WorkerApi"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"handle"},"handle"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"handle"),": <FeatureType",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"layerName"),": ",(0,o.kt)("a",{parentName:"p",href:"../modules/map_types#ilayername"},(0,o.kt)("inlineCode",{parentName:"a"},"ILayerName")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"feature"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureType"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"center"),": ",(0,o.kt)("a",{parentName:"p",href:"../modules/map_functions_UnitConversionFunctions#longlat"},(0,o.kt)("inlineCode",{parentName:"a"},"LongLat")),") => ",(0,o.kt)("a",{parentName:"p",href:"map_types.MapTransformedFeature"},(0,o.kt)("inlineCode",{parentName:"a"},"MapTransformedFeature"))),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("p",null,"\u25b8 <",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureType"),">","(",(0,o.kt)("inlineCode",{parentName:"p"},"layerName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"feature"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"center"),"): ",(0,o.kt)("a",{parentName:"p",href:"map_types.MapTransformedFeature"},(0,o.kt)("inlineCode",{parentName:"a"},"MapTransformedFeature"))),(0,o.kt)("h5",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"FeatureType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,o.kt)("a",{parentName:"td",href:"map_types.SupportedFeature"},(0,o.kt)("inlineCode",{parentName:"a"},"SupportedFeature")),"<",(0,o.kt)("inlineCode",{parentName:"td"},"FeatureType"),">")))),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"layerName")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../modules/map_types#ilayername"},(0,o.kt)("inlineCode",{parentName:"a"},"ILayerName")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"feature")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"FeatureType"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"center")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../modules/map_functions_UnitConversionFunctions#longlat"},(0,o.kt)("inlineCode",{parentName:"a"},"LongLat")))))),(0,o.kt)("h5",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"map_types.MapTransformedFeature"},(0,o.kt)("inlineCode",{parentName:"a"},"MapTransformedFeature"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/dc1557f/packages/engine/src/map/workers/transformFeatureWorker.ts#L5"},"packages/engine/src/map/workers/transformFeatureWorker.ts:5")))}u.isMDXComponent=!0}}]);