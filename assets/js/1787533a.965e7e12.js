(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[81676],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return o}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),f=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=f(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=f(n),o=r,k=m["".concat(d,".").concat(o)]||m[o]||c[o]||p;return n?a.createElement(k,s(s({ref:t},l),{},{components:n})):a.createElement(k,s({ref:t},l))}));function o(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var f=2;f<p;f++)s[f]=n[f];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1857:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return f},default:function(){return c}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),s=["components"],i={id:"renderer_effects_fxaaeffect.fxaaeffect",title:"Class: FXAAEffect",sidebar_label:"FXAAEffect",custom_edit_url:null},d={unversionedId:"docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect",id:"docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect",isDocsHomePage:!1,title:"Class: FXAAEffect",description:"renderer/effects/FXAAEffect.FXAAEffect",source:"@site/docs/docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect",permalink:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect",editUrl:null,version:"current",sidebar_label:"FXAAEffect",frontMatter:{id:"renderer_effects_fxaaeffect.fxaaeffect",title:"Class: FXAAEffect",sidebar_label:"FXAAEffect",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Effect",permalink:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},next:{title:"Class: LinearTosRGBEffect",permalink:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_lineartosrgbeffect.lineartosrgbeffect"}},f=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"attributes",id:"attributes",children:[]},{value:"blendMode",id:"blendmode",children:[]},{value:"defines",id:"defines",children:[]},{value:"extensions",id:"extensions",children:[]},{value:"fragmentShader",id:"fragmentshader",children:[]},{value:"name",id:"name",children:[]},{value:"resolution",id:"resolution",children:[]},{value:"uniforms",id:"uniforms",children:[]},{value:"vertexShader",id:"vertexshader",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addEventListener",id:"addeventlistener",children:[]},{value:"dispatchEvent",id:"dispatchevent",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"getAttributes",id:"getattributes",children:[]},{value:"getFragmentShader",id:"getfragmentshader",children:[]},{value:"getVertexShader",id:"getvertexshader",children:[]},{value:"hasEventListener",id:"haseventlistener",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"removeEventListener",id:"removeeventlistener",children:[]},{value:"setAttributes",id:"setattributes",children:[]},{value:"setChanged",id:"setchanged",children:[]},{value:"setDepthTexture",id:"setdepthtexture",children:[]},{value:"setFragmentShader",id:"setfragmentshader",children:[]},{value:"setSize",id:"setsize",children:[]},{value:"setVertexShader",id:"setvertexshader",children:[]},{value:"update",id:"update",children:[]}]}],l={toc:f};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,p.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_fxaaeffect"},"renderer/effects/FXAAEffect"),".FXAAEffect"),(0,p.kt)("p",null,"FXAA effect."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},(0,p.kt)("em",{parentName:"a"},"Effect"))),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"FXAAEffect")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new FXAAEffect"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"__namedParameters?"),": { ",(0,p.kt)("inlineCode",{parentName:"p"},"blendFunction"),":   }): ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect"},(0,p.kt)("em",{parentName:"a"},"FXAAEffect"))),(0,p.kt)("p",null,"Constructs a new FXAA effect."),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object")),(0,p.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"__namedParameters.blendFunction")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_fxaaeffect.fxaaeffect"},(0,p.kt)("em",{parentName:"a"},"FXAAEffect"))),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/FXAAEffect.ts#L11"},"packages/engine/src/renderer/effects/FXAAEffect.ts:11")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"attributes"},"attributes"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"attributes"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#attributes"},"attributes")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L17"},"packages/engine/src/renderer/effects/Effect.ts:17")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"blendmode"},"blendMode"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"blendMode"),": ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#blendmode"},"blendMode")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L23"},"packages/engine/src/renderer/effects/Effect.ts:23")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"defines"},"defines"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"defines"),": ",(0,p.kt)("em",{parentName:"p"},"Map"),"<any, any",">"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#defines"},"defines")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L20"},"packages/engine/src/renderer/effects/Effect.ts:20")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"extensions"},"extensions"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"extensions"),": ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#extensions"},"extensions")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L22"},"packages/engine/src/renderer/effects/Effect.ts:22")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"fragmentshader"},"fragmentShader"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"fragmentShader"),": ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#fragmentshader"},"fragmentShader")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L18"},"packages/engine/src/renderer/effects/Effect.ts:18")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#name"},"name")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L16"},"packages/engine/src/renderer/effects/Effect.ts:16")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"resolution"},"resolution"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"resolution"),": ",(0,p.kt)("em",{parentName:"p"},"Vector2")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/FXAAEffect.ts#L11"},"packages/engine/src/renderer/effects/FXAAEffect.ts:11")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"uniforms"},"uniforms"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"uniforms"),": ",(0,p.kt)("em",{parentName:"p"},"Map"),"<any, any",">"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#uniforms"},"uniforms")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L21"},"packages/engine/src/renderer/effects/Effect.ts:21")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"vertexshader"},"vertexShader"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"vertexShader"),": ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect"),".",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect#vertexshader"},"vertexShader")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L19"},"packages/engine/src/renderer/effects/Effect.ts:19")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"addeventlistener"},"addEventListener"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"addEventListener"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"listener"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": Event) => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Adds a listener to an event type."),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The type of event to listen to.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"listener")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": Event) => ",(0,p.kt)("em",{parentName:"td"},"void")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The function that gets called when the event is fired.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: node_modules/@types/three/src/core/EventDispatcher.d.ts:26"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"dispatchevent"},"dispatchEvent"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"dispatchEvent"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": { ","[attachment: string]",": ",(0,p.kt)("em",{parentName:"p"},"any"),"; ",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"  }): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Fire an event type."),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event.type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: node_modules/@types/three/src/core/EventDispatcher.d.ts:46"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"dispose"},"dispose"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Performs a shallow search for properties that define a dispose method and\ndeletes them. The effect will be inoperative after this method was called!"),(0,p.kt)("p",null,"The {@link EffectPass} calls this method when it is being destroyed. Do not\ncall this method directly."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L285"},"packages/engine/src/renderer/effects/Effect.ts:285")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getattributes"},"getAttributes"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getAttributes"),"(): ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Returns the effect attributes."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"The attributes."),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L149"},"packages/engine/src/renderer/effects/Effect.ts:149")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getfragmentshader"},"getFragmentShader"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getFragmentShader"),"(): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Returns the fragment shader."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"The fragment shader."),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L174"},"packages/engine/src/renderer/effects/Effect.ts:174")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getvertexshader"},"getVertexShader"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getVertexShader"),"(): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Returns the vertex shader."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"The vertex shader."),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L196"},"packages/engine/src/renderer/effects/Effect.ts:196")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"haseventlistener"},"hasEventListener"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"hasEventListener"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"listener"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": Event) => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Checks if listener is added to an event type."),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The type of event to listen to.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"listener")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": Event) => ",(0,p.kt)("em",{parentName:"td"},"void")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The function that gets called when the event is fired.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: node_modules/@types/three/src/core/EventDispatcher.d.ts:33"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"initialize"},"initialize"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"initialize"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"renderer"),": ",(0,p.kt)("em",{parentName:"p"},"any"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"alpha"),": ",(0,p.kt)("em",{parentName:"p"},"any"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"frameBufferType"),": ",(0,p.kt)("em",{parentName:"p"},"any"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Performs initialization tasks."),(0,p.kt)("p",null,"By overriding this method you gain access to the renderer. You'll also be\nable to configure your custom render targets to use the appropriate format\n(RGB or RGBA)."),(0,p.kt)("p",null,"The provided renderer can be used to warm up special off-screen render\ntargets by performing a preliminary render operation."),(0,p.kt)("p",null,"The {@link EffectPass} calls this method during its own initialization\nwhich happens after the size has been set."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))," if(!alpha && frameBufferType === UnsignedByteType) { this.myRenderTarget.texture.format = RGBFormat; }"),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"renderer")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The renderer.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"alpha")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Whether the renderer uses the alpha channel or not.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"frameBufferType")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The type of the main frame buffers.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L275"},"packages/engine/src/renderer/effects/Effect.ts:275")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"removeeventlistener"},"removeEventListener"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"removeEventListener"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"listener"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": Event) => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Removes a listener from an event type."),(0,p.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The type of the listener that gets removed.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"listener")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": Event) => ",(0,p.kt)("em",{parentName:"td"},"void")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The listener function that gets removed.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: node_modules/@types/three/src/core/EventDispatcher.d.ts:40"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"setattributes"},"setAttributes"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"setAttributes"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"attributes"),": ",(0,p.kt)("em",{parentName:"p"},"any"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Sets the effect attributes."),(0,p.kt)("p",null,"Effects that have the same attributes will be executed in the order in\nwhich they were registered. Some attributes imply a higher priority."),(0,p.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"attributes")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The attributes.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L163"},"packages/engine/src/renderer/effects/Effect.ts:163")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"setchanged"},"setChanged"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"setChanged"),"(): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Informs the associated {@link EffectPass} that this effect has changed in\na way that requires a shader recompilation."),(0,p.kt)("p",null,"Call this method after changing macro definitions or extensions and after\nadding or removing uniforms."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L139"},"packages/engine/src/renderer/effects/Effect.ts:139")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"setdepthtexture"},"setDepthTexture"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"setDepthTexture"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"depthTexture"),": ",(0,p.kt)("em",{parentName:"p"},"any"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"depthPacking?"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Sets the depth texture."),(0,p.kt)("p",null,"You may override this method if your effect requires direct access to the\ndepth texture that is bound to the associated {@link EffectPass}."),(0,p.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"depthTexture")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-"),(0,p.kt)("td",{parentName:"tr",align:"left"},"A depth texture.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"depthPacking")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number")),(0,p.kt)("td",{parentName:"tr",align:"left"},"0"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L222"},"packages/engine/src/renderer/effects/Effect.ts:222")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"setfragmentshader"},"setFragmentShader"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"setFragmentShader"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"fragmentShader"),": ",(0,p.kt)("em",{parentName:"p"},"any"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Sets the fragment shader."),(0,p.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"fragmentShader")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The fragment shader.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L185"},"packages/engine/src/renderer/effects/Effect.ts:185")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"setsize"},"setSize"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"setSize"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"width"),": ",(0,p.kt)("em",{parentName:"p"},"number"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"height"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Updates the size of this pass."),(0,p.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"width")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The width.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"height")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The height.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/FXAAEffect.ts#L51"},"packages/engine/src/renderer/effects/FXAAEffect.ts:51")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"setvertexshader"},"setVertexShader"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"setVertexShader"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"vertexShader"),": ",(0,p.kt)("em",{parentName:"p"},"any"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Sets the vertex shader."),(0,p.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"vertexShader")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any")),(0,p.kt)("td",{parentName:"tr",align:"left"},"The vertex shader.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/Effect.ts#L207"},"packages/engine/src/renderer/effects/Effect.ts:207")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"update"},"update"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"update"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"renderer"),": ",(0,p.kt)("em",{parentName:"p"},"WebGLRenderer"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"inputBuffer"),": ",(0,p.kt)("em",{parentName:"p"},"WebGLRenderTarget"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"deltaTime"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"renderer")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"WebGLRenderer"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"inputBuffer")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"WebGLRenderTarget"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"deltaTime")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_effects_effect.effect"},"Effect")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/renderer/effects/FXAAEffect.ts#L41"},"packages/engine/src/renderer/effects/FXAAEffect.ts:41")))}c.isMDXComponent=!0}}]);