"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[37047],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62164:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],p={id:"input_types_WebXR.XRView",title:"Interface: XRView",sidebar_label:"XRView",custom_edit_url:null},c=void 0,s={unversionedId:"generated/engine/interfaces/input_types_WebXR.XRView",id:"generated/engine/interfaces/input_types_WebXR.XRView",title:"Interface: XRView",description:"input/types/WebXR.XRView",source:"@site/docs/generated/engine/interfaces/input_types_WebXR.XRView.md",sourceDirName:"generated/engine/interfaces",slug:"/generated/engine/interfaces/input_types_WebXR.XRView",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRView",editUrl:null,tags:[],version:"current",frontMatter:{id:"input_types_WebXR.XRView",title:"Interface: XRView",sidebar_label:"XRView",custom_edit_url:null},sidebar:"sidebar",previous:{title:"XRTransientInputHitTestSource",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRTransientInputHitTestSource"},next:{title:"XRViewerPose",permalink:"/xrengine-docs/docs/generated/engine/interfaces/input_types_WebXR.XRViewerPose"}},l=[{value:"Properties",id:"properties",children:[{value:"eye",id:"eye",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"projectionMatrix",id:"projectionmatrix",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"transform",id:"transform",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/input_types_WebXR"},"input/types/WebXR"),".XRView"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"eye"},"eye"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"eye"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/input_types_WebXR#xreye"},(0,a.kt)("inlineCode",{parentName:"a"},"XREye"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5af1792/packages/engine/src/input/types/WebXR.ts#L133"},"packages/engine/src/input/types/WebXR.ts:133")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"projectionmatrix"},"projectionMatrix"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"projectionMatrix"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Float32Array")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5af1792/packages/engine/src/input/types/WebXR.ts#L134"},"packages/engine/src/input/types/WebXR.ts:134")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transform"},"transform"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transform"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/input_types_WebXR.XRRigidTransform"},(0,a.kt)("inlineCode",{parentName:"a"},"XRRigidTransform"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5af1792/packages/engine/src/input/types/WebXR.ts#L135"},"packages/engine/src/input/types/WebXR.ts:135")))}d.isMDXComponent=!0}}]);