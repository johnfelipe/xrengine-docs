"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[88525],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(d,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(m,l(l({ref:t},f),{},{components:n})):r.createElement(m,l({ref:t},f))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return f},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"renderer_effects_Effect",title:"Module: renderer/effects/Effect",sidebar_label:"renderer/effects/Effect",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"generated/engine/modules/renderer_effects_Effect",id:"generated/engine/modules/renderer_effects_Effect",title:"Module: renderer/effects/Effect",description:"Classes",source:"@site/docs/generated/engine/modules/renderer_effects_Effect.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/renderer_effects_Effect",permalink:"/xrengine-docs/docs/generated/engine/modules/renderer_effects_Effect",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"renderer_effects_Effect",title:"Module: renderer/effects/Effect",sidebar_label:"renderer/effects/Effect",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"renderer/components/HighlightComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/renderer_components_HighlightComponent"},next:{title:"renderer/effects/FXAAEffect",permalink:"/xrengine-docs/docs/generated/engine/modules/renderer_effects_FXAAEffect"}},f=[{value:"Classes",id:"classes",children:[],level:2},{value:"Variables",id:"variables",children:[{value:"EffectAttribute",id:"effectattribute",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"WebGLExtension",id:"webglextension",children:[{value:"Type declaration",id:"type-declaration-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],c={toc:f};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/renderer_effects_Effect.Effect"},"Effect"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"effectattribute"},"EffectAttribute"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"EffectAttribute"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"An enumeration of effect attributes."),(0,i.kt)("p",null,"Attributes can be concatenated using the bitwise OR operator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {Number} NONE - No attributes. Most effects don't need to specify any attributes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {Number} DEPTH - Describes effects that require a depth texture."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {Number} CONVOLUTION - Describes effects that fetch additional samples from the input buffer. There cannot be more than one effect with this attribute per {@link EffectPass}."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))," const attributes = EffectAttribute.CONVOLUTION | EffectAttribute.DEPTH;"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CONVOLUTION")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DEPTH")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NONE")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/52852b0/packages/engine/src/renderer/effects/Effect.ts#L317"},"packages/engine/src/renderer/effects/Effect.ts:317")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"webglextension"},"WebGLExtension"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"WebGLExtension"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"An enumeration of WebGL extensions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {String} DERIVATIVES - Enables derivatives by adding the functions dFdx, dFdy and fwidth."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {String} FRAG_DEPTH - Enables gl_FragDepthEXT to set a depth value of a fragment from within the fragment shader."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {String} DRAW_BUFFERS - Enables multiple render targets (MRT) support."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"property"))," {String} SHADER_TEXTURE_LOD - Enables explicit control of texture LOD."),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DERIVATIVES")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DRAW_BUFFERS")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FRAG_DEPTH")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SHADER_TEXTURE_LOD")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/52852b0/packages/engine/src/renderer/effects/Effect.ts#L333"},"packages/engine/src/renderer/effects/Effect.ts:333")))}s.isMDXComponent=!0}}]);