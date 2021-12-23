"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[8363],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),s=i,f=m["".concat(u,".").concat(s)]||m[s]||p[s]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"map_functions_computeSquaredDistanceFromCircle",title:"Module: map/functions/computeSquaredDistanceFromCircle",sidebar_label:"map/functions/computeSquaredDistanceFromCircle",sidebar_position:0,custom_edit_url:null},u=void 0,l={unversionedId:"generated/engine/modules/map_functions_computeSquaredDistanceFromCircle",id:"generated/engine/modules/map_functions_computeSquaredDistanceFromCircle",isDocsHomePage:!1,title:"Module: map/functions/computeSquaredDistanceFromCircle",description:"Functions",source:"@site/docs/generated/engine/modules/map_functions_computeSquaredDistanceFromCircle.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/map_functions_computeSquaredDistanceFromCircle",permalink:"/xrengine-docs/docs/generated/engine/modules/map_functions_computeSquaredDistanceFromCircle",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"map_functions_computeSquaredDistanceFromCircle",title:"Module: map/functions/computeSquaredDistanceFromCircle",sidebar_label:"map/functions/computeSquaredDistanceFromCircle",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"map/functions/computePolygonDifference",permalink:"/xrengine-docs/docs/generated/engine/modules/map_functions_computePolygonDifference"},next:{title:"map/functions/computeTileBoundingBox",permalink:"/xrengine-docs/docs/generated/engine/modules/map_functions_computeTileBoundingBox"}},d=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"point"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"circleCenter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"circleRadius"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"point")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[",(0,a.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"circleCenter")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[",(0,a.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"circleRadius")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0a5d585/packages/engine/src/map/functions/computeSquaredDistanceFromCircle.ts#L1"},"packages/engine/src/map/functions/computeSquaredDistanceFromCircle.ts:1")))}m.isMDXComponent=!0}}]);