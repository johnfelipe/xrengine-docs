(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[70918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58305:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"editor_functions_mergemeshgeometries",title:"Module: editor/functions/mergeMeshGeometries",sidebar_label:"editor/functions/mergeMeshGeometries",custom_edit_url:null},u={unversionedId:"docs-engine/modules/editor_functions_mergemeshgeometries",id:"docs-engine/modules/editor_functions_mergemeshgeometries",isDocsHomePage:!1,title:"Module: editor/functions/mergeMeshGeometries",description:"Functions",source:"@site/docs/docs-engine/modules/editor_functions_mergemeshgeometries.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/editor_functions_mergemeshgeometries",permalink:"/xrengine-docs/docs/docs-engine/modules/editor_functions_mergemeshgeometries",editUrl:null,version:"current",sidebar_label:"editor/functions/mergeMeshGeometries",frontMatter:{id:"editor_functions_mergemeshgeometries",title:"Module: editor/functions/mergeMeshGeometries",sidebar_label:"editor/functions/mergeMeshGeometries",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: editor/functions/materials",permalink:"/xrengine-docs/docs/docs-engine/modules/editor_functions_materials"},next:{title:"Module: editor/functions/resizeShadowCameraFrustum",permalink:"/xrengine-docs/docs/docs-engine/modules/editor_functions_resizeshadowcamerafrustum"}},c=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[]}]}],l={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meshes"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"BufferGeometry")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meshes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"BufferGeometry")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/editor/functions/mergeMeshGeometries.ts#L9"},"packages/engine/src/editor/functions/mergeMeshGeometries.ts:9")))}m.isMDXComponent=!0}}]);