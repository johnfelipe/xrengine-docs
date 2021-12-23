"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[6799],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8970:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={id:"audio_components_PlaySoundEffect",title:"Module: audio/components/PlaySoundEffect",sidebar_label:"audio/components/PlaySoundEffect",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"generated/engine/modules/audio_components_PlaySoundEffect",id:"generated/engine/modules/audio_components_PlaySoundEffect",isDocsHomePage:!1,title:"Module: audio/components/PlaySoundEffect",description:"Type aliases",source:"@site/docs/generated/engine/modules/audio_components_PlaySoundEffect.md",sourceDirName:"generated/engine/modules",slug:"/generated/engine/modules/audio_components_PlaySoundEffect",permalink:"/xrengine-docs/docs/generated/engine/modules/audio_components_PlaySoundEffect",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"audio_components_PlaySoundEffect",title:"Module: audio/components/PlaySoundEffect",sidebar_label:"audio/components/PlaySoundEffect",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"audio/components/BackgroundMusic",permalink:"/xrengine-docs/docs/generated/engine/modules/audio_components_BackgroundMusic"},next:{title:"audio/components/PositionalAudioComponent",permalink:"/xrengine-docs/docs/generated/engine/modules/audio_components_PositionalAudioComponent"}},c=[{value:"Type aliases",id:"type-aliases",children:[{value:"PlaySoundEffectType",id:"playsoundeffecttype",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Variables",id:"variables",children:[{value:"PlaySoundEffect",id:"playsoundeffect",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,r.kt)("h3",{id:"playsoundeffecttype"},"PlaySoundEffectType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PlaySoundEffectType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Audio track index to play.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"volume")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Volume of the track.")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0a5d585/packages/engine/src/audio/components/PlaySoundEffect.ts#L3"},"packages/engine/src/audio/components/PlaySoundEffect.ts:3")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"playsoundeffect"},"PlaySoundEffect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"PlaySoundEffect"),": ",(0,r.kt)("a",{parentName:"p",href:"audio_components_PlaySoundEffect#playsoundeffecttype"},(0,r.kt)("inlineCode",{parentName:"a"},"PlaySoundEffectType"))," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ISchema"),">"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"_name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,r.kt)("a",{parentName:"p",href:"ecs_functions_ComponentFunctions#soaproxy"},(0,r.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0a5d585/packages/engine/src/audio/components/PlaySoundEffect.ts#L10"},"packages/engine/src/audio/components/PlaySoundEffect.ts:10")))}s.isMDXComponent=!0}}]);