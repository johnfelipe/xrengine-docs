"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[45660],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),h=a,m=c["".concat(o,".").concat(h)]||c[h]||u[h]||p;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<p;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52269:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),i=["components"],l={id:"projects_githubapp_githubapp_helper",title:"Module: projects/githubapp/githubapp-helper",sidebar_label:"projects/githubapp/githubapp-helper",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"generated/server-core/modules/projects_githubapp_githubapp_helper",id:"generated/server-core/modules/projects_githubapp_githubapp_helper",title:"Module: projects/githubapp/githubapp-helper",description:"Functions",source:"@site/docs/generated/server-core/modules/projects_githubapp_githubapp_helper.md",sourceDirName:"generated/server-core/modules",slug:"/generated/server-core/modules/projects_githubapp_githubapp_helper",permalink:"/xrengine-docs/docs/generated/server-core/modules/projects_githubapp_githubapp_helper",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"projects_githubapp_githubapp_helper",title:"Module: projects/githubapp/githubapp-helper",sidebar_label:"projects/githubapp/githubapp-helper",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"payments/services",permalink:"/xrengine-docs/docs/generated/server-core/modules/payments_services"},next:{title:"projects/project/downloadProjects",permalink:"/xrengine-docs/docs/generated/server-core/modules/projects_project_downloadProjects"}},s=[{value:"Functions",id:"functions",children:[{value:"createGitHubApp",id:"creategithubapp",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"getAccessTokenByUser",id:"getaccesstokenbyuser",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"getAuthenticatedRepo",id:"getauthenticatedrepo",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"getGitHubAppRepos",id:"getgithubapprepos",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"getGitRepoById",id:"getgitrepobyid",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],u={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"functions"},"Functions"),(0,p.kt)("h3",{id:"creategithubapp"},"createGitHubApp"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,p.kt)("strong",{parentName:"p"},"createGitHubApp"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"returns"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee446ed/packages/server-core/src/projects/githubapp/githubapp-helper.ts#L9"},"packages/server-core/src/projects/githubapp/githubapp-helper.ts:9")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getaccesstokenbyuser"},"getAccessTokenByUser"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,p.kt)("strong",{parentName:"p"},"getAccessTokenByUser"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"user"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"user")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"returns-1"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee446ed/packages/server-core/src/projects/githubapp/githubapp-helper.ts#L77"},"packages/server-core/src/projects/githubapp/githubapp-helper.ts:77")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getauthenticatedrepo"},"getAuthenticatedRepo"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,p.kt)("strong",{parentName:"p"},"getAuthenticatedRepo"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"repositoryPath"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"repositoryPath")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"returns-2"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,p.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee446ed/packages/server-core/src/projects/githubapp/githubapp-helper.ts#L61"},"packages/server-core/src/projects/githubapp/githubapp-helper.ts:61")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getgithubapprepos"},"getGitHubAppRepos"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,p.kt)("strong",{parentName:"p"},"getGitHubAppRepos"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"GithubAppInterface"),"[]",">"),(0,p.kt)("h4",{id:"returns-3"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"GithubAppInterface"),"[]",">"),(0,p.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee446ed/packages/server-core/src/projects/githubapp/githubapp-helper.ts#L40"},"packages/server-core/src/projects/githubapp/githubapp-helper.ts:40")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getgitrepobyid"},"getGitRepoById"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,p.kt)("strong",{parentName:"p"},"getGitRepoById"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"GithubAppInterface"),">"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"id")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"number"))))),(0,p.kt)("h4",{id:"returns-4"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"GithubAppInterface"),">"),(0,p.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ee446ed/packages/server-core/src/projects/githubapp/githubapp-helper.ts#L90"},"packages/server-core/src/projects/githubapp/githubapp-helper.ts:90")))}c.isMDXComponent=!0}}]);