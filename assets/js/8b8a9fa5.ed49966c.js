"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[13524],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,f=s["".concat(m,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},73304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"user_auth_management_auth_management_notifier",title:"Module: user/auth-management/auth-management.notifier",sidebar_label:"user/auth-management/auth-management.notifier",custom_edit_url:null},m=void 0,p={unversionedId:"generated/server-core/modules/user_auth_management_auth_management_notifier",id:"generated/server-core/modules/user_auth_management_auth_management_notifier",isDocsHomePage:!1,title:"Module: user/auth-management/auth-management.notifier",description:"Properties",source:"@site/docs/generated/server-core/modules/user_auth_management_auth_management_notifier.md",sourceDirName:"generated/server-core/modules",slug:"/generated/server-core/modules/user_auth_management_auth_management_notifier",permalink:"/xrengine-docs/docs/generated/server-core/modules/user_auth_management_auth_management_notifier",editUrl:null,tags:[],version:"current",frontMatter:{id:"user_auth_management_auth_management_notifier",title:"Module: user/auth-management/auth-management.notifier",sidebar_label:"user/auth-management/auth-management.notifier",custom_edit_url:null},sidebar:"sidebar",previous:{title:"user/auth-management/auth-management.hooks",permalink:"/xrengine-docs/docs/generated/server-core/modules/user_auth_management_auth_management_hooks"},next:{title:"user/auth-management/auth-management.service",permalink:"/xrengine-docs/docs/generated/server-core/modules/user_auth_management_auth_management_service"}},d=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[{value:"Type declaration",id:"type-declaration",children:[{value:"Parameters",id:"parameters",children:[],level:5},{value:"Returns",id:"returns",children:[],level:5}],level:4}],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"default"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"app"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => { ",(0,i.kt)("inlineCode",{parentName:"p"},"identifyUserProps"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"notifier"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"identityProvider"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"sanitizeUserForClient"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"identityProvider"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = config.authentication.service }"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"A function which sent an email for authentication"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"{@function} sentEmail with app and email"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"identifyUserProps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"notifier")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"identityProvider"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sanitizeUserForClient")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"identityProvider"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"service")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))))}s.isMDXComponent=!0}}]);