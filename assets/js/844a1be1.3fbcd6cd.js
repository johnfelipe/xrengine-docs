(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[72864],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(a),k=n,u=c["".concat(m,".").concat(k)]||c[k]||d[k]||s;return a?r.createElement(u,l(l({ref:t},o),{},{components:a})):r.createElement(u,l({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<s;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31852:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return i},default:function(){return d}});var r=a(22122),n=a(19756),s=(a(67294),a(3905)),l=["components"],p={id:"user_sms_sms_class.sms",title:"Class: Sms",sidebar_label:"Sms",custom_edit_url:null},m={unversionedId:"docs-server-core/classes/user_sms_sms_class.sms",id:"docs-server-core/classes/user_sms_sms_class.sms",isDocsHomePage:!1,title:"Class: Sms",description:"user/sms/sms.class.Sms",source:"@site/docs/docs-server-core/classes/user_sms_sms_class.sms.md",sourceDirName:"docs-server-core/classes",slug:"/docs-server-core/classes/user_sms_sms_class.sms",permalink:"/xrengine-docs/docs/docs-server-core/classes/user_sms_sms_class.sms",editUrl:null,version:"current",sidebar_label:"Sms",frontMatter:{id:"user_sms_sms_class.sms",title:"Class: Sms",sidebar_label:"Sms",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Magiclink",permalink:"/xrengine-docs/docs/docs-server-core/classes/user_magic_link_magic_link_class.magiclink"},next:{title:"Class: CustomOAuthStrategy",permalink:"/xrengine-docs/docs/docs-server-core/classes/user_strategies_custom_oauth.customoauthstrategy"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"app",id:"app",children:[]},{value:"docs",id:"docs",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"patch",id:"patch",children:[]},{value:"remove",id:"remove",children:[]},{value:"setup",id:"setup",children:[]},{value:"update",id:"update",children:[]}]}],o={toc:i};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/modules/user_sms_sms_class"},"user/sms/sms.class"),".Sms"),(0,s.kt)("p",null,"A class for Sms service"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,s.kt)("h2",{id:"implements"},"Implements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"ServiceMethods"),"<Data",">")),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new Sms"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"options?"),": ServiceOptions, ",(0,s.kt)("inlineCode",{parentName:"p"},"app"),": Application): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/user_sms_sms_class.sms"},(0,s.kt)("em",{parentName:"a"},"Sms"))),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"options")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ServiceOptions"),(0,s.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"app")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Application"),(0,s.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/user_sms_sms_class.sms"},(0,s.kt)("em",{parentName:"a"},"Sms"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L18"},"packages/server-core/src/user/sms/sms.class.ts:18")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"app"},"app"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"app"),": Application"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L16"},"packages/server-core/src/user/sms/sms.class.ts:16")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"docs"},"docs"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"docs"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L18"},"packages/server-core/src/user/sms/sms.class.ts:18")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"options"},"options"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"options"),": ServiceOptions"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L17"},"packages/server-core/src/user/sms/sms.class.ts:17")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"create"},"create"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"create"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"data")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.create"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L37"},"packages/server-core/src/user/sms/sms.class.ts:37")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"find"},"find"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"find"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/interfaces/types_pageobject.default"},(0,s.kt)("em",{parentName:"a"},"default")),"<Data",">",">"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/interfaces/types_pageobject.default"},(0,s.kt)("em",{parentName:"a"},"default")),"<Data",">",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.find"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L27"},"packages/server-core/src/user/sms/sms.class.ts:27")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"get"},"get"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"get"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"id"),": Id, ",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"id")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Id")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.get"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L31"},"packages/server-core/src/user/sms/sms.class.ts:31")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"patch"},"patch"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"patch"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"id"),": NullableId, ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),": Data, ",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"id")),(0,s.kt)("td",{parentName:"tr",align:"left"},"NullableId")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"data")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Data")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.patch"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L50"},"packages/server-core/src/user/sms/sms.class.ts:50")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"remove"},"remove"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"remove"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"id"),": NullableId, ",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"id")),(0,s.kt)("td",{parentName:"tr",align:"left"},"NullableId")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.remove"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L54"},"packages/server-core/src/user/sms/sms.class.ts:54")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"setup"},"setup"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"setup"),"(): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.setup"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L25"},"packages/server-core/src/user/sms/sms.class.ts:25")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"update"},"update"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"update"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"id"),": NullableId, ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),": Data, ",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"id")),(0,s.kt)("td",{parentName:"tr",align:"left"},"NullableId")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"data")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Data")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,s.kt)("p",null,"Implementation of: ServiceMethods.update"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/server-core/src/user/sms/sms.class.ts#L46"},"packages/server-core/src/user/sms/sms.class.ts:46")))}d.isMDXComponent=!0}}]);