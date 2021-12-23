"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[4026],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},11178:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),o=["components"],i={id:"map_helpers_PolygonHelpers",title:"Module: map/helpers/PolygonHelpers",sidebar_label:"map/helpers/PolygonHelpers",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"generated/engine/modules/map_helpers_PolygonHelpers",id:"generated/engine/modules/map_helpers_PolygonHelpers",isDocsHomePage:!1,title:"Module: map/helpers/PolygonHelpers",description:"Functions",source:"@site/docs/generated/engine/modules/map_helpers_PolygonHelpers.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/map_helpers_PolygonHelpers",permalink:"/xrengine-docs/docs/generated/engine/modules/map_helpers_PolygonHelpers",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"map_helpers_PolygonHelpers",title:"Module: map/helpers/PolygonHelpers",sidebar_label:"map/helpers/PolygonHelpers",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"map/helpers/KeyHelpers",permalink:"/xrengine-docs/docs/generated/engine/modules/map_helpers_KeyHelpers"},next:{title:"map/phases/CreateCompleteNavMeshPhase",permalink:"/xrengine-docs/docs/generated/engine/modules/map_phases_CreateCompleteNavMeshPhase"}},d=[{value:"Functions",id:"functions",children:[{value:"createConvexMultiPolygonHelper",id:"createconvexmultipolygonhelper",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"createPolygonHelper",id:"createpolygonhelper",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createconvexmultipolygonhelper"},"createConvexMultiPolygonHelper"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createConvexMultiPolygonHelper"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"polygons"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Mesh")),(0,a.kt)("p",null,"All angles must be >= 180 degrees. Holes / interior rings are ignored."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"polygons")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Polygon"),"[]")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mesh")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/593a202/packages/engine/src/map/helpers/PolygonHelpers.ts#L46"},"packages/engine/src/map/helpers/PolygonHelpers.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createpolygonhelper"},"createPolygonHelper"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createPolygonHelper"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"polygon"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Mesh")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"polygon")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Polygon"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mesh")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/593a202/packages/engine/src/map/helpers/PolygonHelpers.ts#L13"},"packages/engine/src/map/helpers/PolygonHelpers.ts:13")))}c.isMDXComponent=!0}}]);