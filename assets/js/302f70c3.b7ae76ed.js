"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[24614],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||o[c]||i;return a?n.createElement(k,p(p({ref:t},d),{},{components:a})):n.createElement(k,p({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72644:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],l={id:"map_types",title:"Module: map/types",sidebar_label:"map/types",sidebar_position:0,custom_edit_url:null},s=void 0,m={unversionedId:"generated/engine/modules/map_types",id:"generated/engine/modules/map_types",title:"Module: map/types",description:"Enumerations",source:"@site/docs/generated/engine/modules/map_types.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/map_types",permalink:"/xrengine-docs/docs/generated/engine/modules/map_types",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"map_types",title:"Module: map/types",sidebar_label:"map/types",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"map/styles",permalink:"/xrengine-docs/docs/generated/engine/modules/map_styles"},next:{title:"map/util",permalink:"/xrengine-docs/docs/generated/engine/modules/map_util"}},d=[{value:"Enumerations",id:"enumerations",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"Type aliases",id:"type-aliases",children:[{value:"FeatureKey",id:"featurekey",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"ILayerName",id:"ilayername",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"IPhase",id:"iphase",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"MapStateUnwrapped",id:"mapstateunwrapped",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"TileKey",id:"tilekey",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"ToArray",id:"toarray",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],o={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../enums/map_types.TaskStatus"},"TaskStatus"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.FeatureWithTileIndex"},"FeatureWithTileIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.IAsyncPhase"},"IAsyncPhase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.ICachingPhase"},"ICachingPhase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.IParametricMap"},"IParametricMap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.ISyncPhase"},"ISyncPhase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.ITuple"},"ITuple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.MapDerivedFeatureComplete"},"MapDerivedFeatureComplete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.MapDerivedFeatureGeometry"},"MapDerivedFeatureGeometry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.MapFeatureLabel"},"MapFeatureLabel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.MapHelpers"},"MapHelpers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.MapTransformedFeature"},"MapTransformedFeature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.RawFeature"},"RawFeature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.SupportedFeature"},"SupportedFeature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.Text3D"},"Text3D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.VectorTile"},"VectorTile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/map_types.VectorTileLayer"},"VectorTileLayer"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"featurekey"},"FeatureKey"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"FeatureKey"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/628545f/packages/engine/src/map/types.ts#L8"},"packages/engine/src/map/types.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ilayername"},"ILayerName"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ILayerName"),": keyof ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/map_types.VectorTile"},(0,i.kt)("inlineCode",{parentName:"a"},"VectorTile")),"[",(0,i.kt)("inlineCode",{parentName:"p"},'"layers"'),"]"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"landuse_fallback"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/628545f/packages/engine/src/map/types.ts#L62"},"packages/engine/src/map/types.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iphase"},"IPhase"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"IPhase"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TaskKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskResult"),">",": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/map_types.ISyncPhase"},(0,i.kt)("inlineCode",{parentName:"a"},"ISyncPhase")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TaskKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskResult"),">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/map_types.ICachingPhase"},(0,i.kt)("inlineCode",{parentName:"a"},"ICachingPhase")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TaskKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskResult"),">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/map_types.IAsyncPhase"},(0,i.kt)("inlineCode",{parentName:"a"},"IAsyncPhase")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TaskKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskResult"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TaskKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TaskResult"))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/628545f/packages/engine/src/map/types.ts#L155"},"packages/engine/src/map/types.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mapstateunwrapped"},"MapStateUnwrapped"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"MapStateUnwrapped"),": ",(0,i.kt)("a",{parentName:"p",href:"map_MapReceptor#_mapstateunwrapped"},(0,i.kt)("inlineCode",{parentName:"a"},"_MapStateUnwrapped"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/628545f/packages/engine/src/map/types.ts#L36"},"packages/engine/src/map/types.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tilekey"},"TileKey"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"TileKey"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/628545f/packages/engine/src/map/types.ts#L6"},"packages/engine/src/map/types.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toarray"},"ToArray"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ToArray"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[] & { ","[Property in keyof T]",": T","[Property]"," }"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/628545f/packages/engine/src/map/types.ts#L20"},"packages/engine/src/map/types.ts:20")))}u.isMDXComponent=!0}}]);