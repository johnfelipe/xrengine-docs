"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[60080],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,a(a({ref:r},c),{},{components:t})):n.createElement(g,a({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42e3:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"media_storageprovider_storageProviderUtils",title:"Module: media/storageprovider/storageProviderUtils",sidebar_label:"media/storageprovider/storageProviderUtils",sidebar_position:0,custom_edit_url:null},d=void 0,l={unversionedId:"generated/server-core/modules/media_storageprovider_storageProviderUtils",id:"generated/server-core/modules/media_storageprovider_storageProviderUtils",title:"Module: media/storageprovider/storageProviderUtils",description:"Functions",source:"@site/docs/generated/server-core/modules/media_storageprovider_storageProviderUtils.md",sourceDirName:"generated/server-core/modules",slug:"/generated/server-core/modules/media_storageprovider_storageProviderUtils",permalink:"/xrengine-docs/docs/generated/server-core/modules/media_storageprovider_storageProviderUtils",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"media_storageprovider_storageProviderUtils",title:"Module: media/storageprovider/storageProviderUtils",sidebar_label:"media/storageprovider/storageProviderUtils",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"media/storageprovider/getCachedAsset",permalink:"/xrengine-docs/docs/generated/server-core/modules/media_storageprovider_getCachedAsset"},next:{title:"media/storageprovider/storageprovider",permalink:"/xrengine-docs/docs/generated/server-core/modules/media_storageprovider_storageprovider"}},c=[{value:"Functions",id:"functions",children:[{value:"getFileKeysRecursive",id:"getfilekeysrecursive",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:c};function u(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"getfilekeysrecursive"},"getFileKeysRecursive"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"getFileKeysRecursive"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"path"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"path")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f119c06/packages/server-core/src/media/storageprovider/storageProviderUtils.ts#L5"},"packages/server-core/src/media/storageprovider/storageProviderUtils.ts:5")))}u.isMDXComponent=!0}}]);