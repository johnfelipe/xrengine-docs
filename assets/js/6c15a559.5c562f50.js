(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[60946],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1311:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l=["components"],i={id:"common_functions_applythreshold",title:"Module: common/functions/applyThreshold",sidebar_label:"common/functions/applyThreshold",custom_edit_url:null},p={unversionedId:"docs-engine/modules/common_functions_applythreshold",id:"docs-engine/modules/common_functions_applythreshold",isDocsHomePage:!1,title:"Module: common/functions/applyThreshold",description:"Functions",source:"@site/docs/docs-engine/modules/common_functions_applythreshold.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_applythreshold",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_applythreshold",editUrl:null,version:"current",sidebar_label:"common/functions/applyThreshold",frontMatter:{id:"common_functions_applythreshold",title:"Module: common/functions/applyThreshold",sidebar_label:"common/functions/applyThreshold",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/Timer",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_timer"},next:{title:"Module: common/functions/applyVectorMatrixXZ",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_applyvectormatrixxz"}},c=[{value:"Functions",id:"functions",children:[{value:"applyThreshold",id:"applythreshold",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"applythreshold"},"applyThreshold"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"applyThreshold"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("em",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"threshold"),": ",(0,a.kt)("em",{parentName:"p"},"number"),"): ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Apply Threshold on the number."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number on which threshold will be applied. Must be between -1 to 1 inclusive.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"threshold")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Threshold value. Must be between 0 to 1 inclusive.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Threshold Value."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/33dd4a8a4/packages/engine/src/common/functions/applyThreshold.ts#L8"},"packages/engine/src/common/functions/applyThreshold.ts:8")))}u.isMDXComponent=!0}}]);