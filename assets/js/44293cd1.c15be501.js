"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[87712],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78182:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"navigation_NavMeshHelper",title:"Module: navigation/NavMeshHelper",sidebar_label:"navigation/NavMeshHelper",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"generated/engine/modules/navigation_NavMeshHelper",id:"generated/engine/modules/navigation_NavMeshHelper",isDocsHomePage:!1,title:"Module: navigation/NavMeshHelper",description:"Functions",source:"@site/docs/generated/engine/modules/navigation_NavMeshHelper.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/navigation_NavMeshHelper",permalink:"/xrengine-docs/docs/generated/engine/modules/navigation_NavMeshHelper",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"navigation_NavMeshHelper",title:"Module: navigation/NavMeshHelper",sidebar_label:"navigation/NavMeshHelper",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"navigation/GraphHelper",permalink:"/xrengine-docs/docs/generated/engine/modules/navigation_GraphHelper"},next:{title:"navigation/component/AfkCheckComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/navigation_component_AfkCheckComponent"}},s=[{value:"Functions",id:"functions",children:[{value:"createConvexRegionHelper",id:"createconvexregionhelper",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createconvexregionhelper"},"createConvexRegionHelper"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createConvexRegionHelper"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"navMesh"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial"),">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"navMesh")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/35e699d/packages/engine/src/navigation/NavMeshHelper.js#L7"},"packages/engine/src/navigation/NavMeshHelper.js:7")))}d.isMDXComponent=!0}}]);