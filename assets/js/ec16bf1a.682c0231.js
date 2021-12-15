"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[84099],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87763:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],p={id:"map_types.ITuple",title:"Interface: ITuple",sidebar_label:"ITuple",custom_edit_url:null},o=void 0,d={unversionedId:"generated/engine/interfaces/map_types.ITuple",id:"generated/engine/interfaces/map_types.ITuple",isDocsHomePage:!1,title:"Interface: ITuple",description:"map/types.ITuple",source:"@site/docs/generated/engine/interfaces/map_types.ITuple.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/map_types.ITuple",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_types.ITuple",editUrl:null,tags:[],version:"current",frontMatter:{id:"map_types.ITuple",title:"Interface: ITuple",sidebar_label:"ITuple",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ISyncPhase",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_types.ISyncPhase"},next:{title:"MapDerivedFeatureComplete",permalink:"/xrengine-docs/docs/generated/engine/interfaces/map_types.MapDerivedFeatureComplete"}},s=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Indexable",id:"indexable",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"hash",id:"hash",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"length",id:"length",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"iterator",id:"iterator",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/map_types"},"map/types"),".ITuple"),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/map_classes_FeatureKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/map_classes_TileKey.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")))),(0,i.kt)("h2",{id:"indexable"},"Indexable"),(0,i.kt)("p",null,"\u25aa ","[n: ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"hash"},"hash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"hash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6bc202b/packages/engine/src/map/types.ts#L11"},"packages/engine/src/map/types.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"length"},"length"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"length"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6bc202b/packages/engine/src/map/types.ts#L15"},"packages/engine/src/map/types.ts:15")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"iterator"},"[iterator]"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"[iterator]"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Iterator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6bc202b/packages/engine/src/map/types.ts#L17"},"packages/engine/src/map/types.ts:17")))}c.isMDXComponent=!0}}]);