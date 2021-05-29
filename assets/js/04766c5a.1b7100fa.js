(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[92114],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),k=a,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||i;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36377:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],c={id:"networking_classes_network.networkclientlist",title:"Interface: NetworkClientList",sidebar_label:"NetworkClientList",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/networking_classes_network.networkclientlist",id:"docs-engine/interfaces/networking_classes_network.networkclientlist",isDocsHomePage:!1,title:"Interface: NetworkClientList",description:"networking/classes/Network.NetworkClientList",source:"@site/docs/docs-engine/interfaces/networking_classes_network.networkclientlist.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_classes_network.networkclientlist",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_classes_network.networkclientlist",editUrl:null,version:"current",sidebar_label:"NetworkClientList",frontMatter:{id:"networking_classes_network.networkclientlist",title:"Interface: NetworkClientList",sidebar_label:"NetworkClientList",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: CommonInteractiveData",permalink:"/xrengine-docs/docs/docs-engine/interfaces/interaction_interfaces_commoninteractivedata.commoninteractivedata"},next:{title:"Interface: NetworkObjectList",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkobjectlist.networkobjectlist"}},l=[{value:"Indexable",id:"indexable",children:[]}],p={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_classes_network"},"networking/classes/Network"),".NetworkClientList"),(0,i.kt)("h2",{id:"indexable"},"Indexable"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("em",{parentName:"p"},"string"),"]",": { ",(0,i.kt)("inlineCode",{parentName:"p"},"avatarDetail?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"channelRecvTransport?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"channelSendTransport?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"consumerLayers?"),": {} ; ",(0,i.kt)("inlineCode",{parentName:"p"},"dataConsumers?"),": ",(0,i.kt)("em",{parentName:"p"},"Map"),"<string, any",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"dataProducers?"),": ",(0,i.kt)("em",{parentName:"p"},"Map"),"<string, any",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceRecvTransport?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceSendTransport?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"joinTs?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"lastSeenTs?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"media?"),": {} ; ",(0,i.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"socket?"),": SocketIO.Socket ; ",(0,i.kt)("inlineCode",{parentName:"p"},"socketId?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"stats?"),": {} ; ",(0,i.kt)("inlineCode",{parentName:"p"},"userId?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"  }"))}m.isMDXComponent=!0}}]);