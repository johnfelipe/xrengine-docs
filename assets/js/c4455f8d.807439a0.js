(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[16740],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||l[d]||a;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1151:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c=["components"],s={id:"ecs_interfaces_componentinterfaces.componentconstructor",title:"Interface: ComponentConstructor<C>",sidebar_label:"ComponentConstructor",custom_edit_url:null},p={unversionedId:"docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor",id:"docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor",isDocsHomePage:!1,title:"Interface: ComponentConstructor<C\\>",description:"ecs/interfaces/ComponentInterfaces.ComponentConstructor",source:"@site/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor",editUrl:null,version:"current",sidebar_label:"ComponentConstructor",frontMatter:{id:"ecs_interfaces_componentinterfaces.componentconstructor",title:"Interface: ComponentConstructor<C>",sidebar_label:"ComponentConstructor",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: SystemStateComponentConstructor<C\\>",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_systemstatecomponent.systemstatecomponentconstructor"},next:{title:"Interface: ComponentSchema",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentschema"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_schema",id:"_schema",children:[]},{value:"_typeId",id:"_typeid",children:[]}]}],m={toc:i};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_interfaces_componentinterfaces"},"ecs/interfaces/ComponentInterfaces"),".ComponentConstructor"),(0,a.kt)("p",null,"Interface for defining new component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"C")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,a.kt)("em",{parentName:"a"},"Component")),"<C",">")))),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ComponentConstructor")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_systemstatecomponent.systemstatecomponentconstructor"},(0,a.kt)("em",{parentName:"a"},"SystemStateComponentConstructor"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"+"," ",(0,a.kt)("strong",{parentName:"p"},"new ComponentConstructor"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"props?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"Partial"),"<Omit<C, keyof ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,a.kt)("em",{parentName:"a"},"Component")),"<C",">",">",">","): C"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"props?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,a.kt)("em",{parentName:"td"},"Partial"),"<Omit<C, keyof ",(0,a.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,a.kt)("em",{parentName:"a"},"Component")),"<C",">",">",">")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," C"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/ecs/interfaces/ComponentInterfaces.ts#L28"},"packages/engine/src/ecs/interfaces/ComponentInterfaces.ts:28")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_schema"},"_","schema"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","schema"),": ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentschema"},(0,a.kt)("em",{parentName:"a"},"ComponentSchema"))),(0,a.kt)("p",null,"Schema for the Component."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/ecs/interfaces/ComponentInterfaces.ts#L26"},"packages/engine/src/ecs/interfaces/ComponentInterfaces.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_typeid"},"_","typeId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","typeId"),": ",(0,a.kt)("em",{parentName:"p"},"any")),(0,a.kt)("p",null,"Type of the Component."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/ecs/interfaces/ComponentInterfaces.ts#L28"},"packages/engine/src/ecs/interfaces/ComponentInterfaces.ts:28")))}l.isMDXComponent=!0}}]);