"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[59283],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),o=p(a),f=r,u=o["".concat(s,".").concat(f)]||o[f]||k[f]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=o;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},22649:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return o}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],d={id:"map_phases_UnifyFeaturesPhase",title:"Module: map/phases/UnifyFeaturesPhase",sidebar_label:"map/phases/UnifyFeaturesPhase",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"generated/engine/modules/map_phases_UnifyFeaturesPhase",id:"generated/engine/modules/map_phases_UnifyFeaturesPhase",isDocsHomePage:!1,title:"Module: map/phases/UnifyFeaturesPhase",description:"Variables",source:"@site/docs/generated/engine/modules/map_phases_UnifyFeaturesPhase.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/map_phases_UnifyFeaturesPhase",permalink:"/xrengine-docs/docs/generated/engine/modules/map_phases_UnifyFeaturesPhase",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"map_phases_UnifyFeaturesPhase",title:"Module: map/phases/UnifyFeaturesPhase",sidebar_label:"map/phases/UnifyFeaturesPhase",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"map/phases/TransformFeaturePhase",permalink:"/xrengine-docs/docs/generated/engine/modules/map_phases_TransformFeaturePhase"},next:{title:"map/styles",permalink:"/xrengine-docs/docs/generated/engine/modules/map_styles"}},m=[{value:"Variables",id:"variables",children:[{value:"isAsyncPhase",id:"isasyncphase",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"isCachingPhase",id:"iscachingphase",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"name",id:"name",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"cleanup",id:"cleanup",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"execTask",id:"exectask",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"getTaskKeys",id:"gettaskkeys",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"reset",id:"reset",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],k={toc:m};function o(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"isasyncphase"},"isAsyncPhase"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isAsyncPhase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L5"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iscachingphase"},"isCachingPhase"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isCachingPhase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L6"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"UnifyFeatures"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L4"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:4")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"cleanup"},"cleanup"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"cleanup"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L16"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exectask"},"execTask"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execTask"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.activePhase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.center")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.completeObjects")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.MapDerivedFeatureComplete"},(0,i.kt)("inlineCode",{parentName:"a"},"MapDerivedFeatureComplete")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.completeObjectsTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.extractTilesTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.featureCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.SupportedFeature"},(0,i.kt)("inlineCode",{parentName:"a"},"SupportedFeature")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.featureMeta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", { ",(0,i.kt)("inlineCode",{parentName:"td"},"tileKey"),": ",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"  }",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.fetchTilesTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.geometryCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.MapDerivedFeatureGeometry"},(0,i.kt)("inlineCode",{parentName:"a"},"MapDerivedFeatureGeometry")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.geometryTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.helpersCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.MapHelpers"},(0,i.kt)("inlineCode",{parentName:"a"},"MapHelpers")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.helpersTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.labelCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.MapFeatureLabel"},(0,i.kt)("inlineCode",{parentName:"a"},"MapFeatureLabel")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.labelRadius")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"400"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.labelTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.minimumSceneRadius")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"800"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.navMesh")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_MutableNavMesh.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.navMeshRadius")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"400"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.originalCenter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.scale")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.tileCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.VectorTile"},(0,i.kt)("inlineCode",{parentName:"a"},"VectorTile")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.tileMeta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", { ",(0,i.kt)("inlineCode",{parentName:"td"},"cachedFeatureKeys"),": ",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashSet.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),">","  }",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.tileNavMeshCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"MultiPolygon"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.tileNavMeshTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.transformedFeatureCache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureCache.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.MapTransformedFeature"},(0,i.kt)("inlineCode",{parentName:"a"},"MapTransformedFeature")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.transformedFeatureTasks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_HashMap.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"<",(0,i.kt)("a",{parentName:"td",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("a",{parentName:"td",href:"../enums/map_types.TaskStatus"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskStatus")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.triggerRefreshRadius")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"160"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.updateSpinner")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Material"),"[]",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.updateTextContainer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/map_types.Text3D"},(0,i.kt)("inlineCode",{parentName:"a"},"Text3D"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state.viewerPosition")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L12"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettaskkeys"},"getTaskKeys"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getTaskKeys"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Generator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Generator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L8"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fee8c2/packages/engine/src/map/phases/UnifyFeaturesPhase.ts#L18"},"packages/engine/src/map/phases/UnifyFeaturesPhase.ts:18")))}o.isMDXComponent=!0}}]);