"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[524],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3037:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"coreconcepts",title:"Core Concepts"},l=void 0,c={unversionedId:"coreconcepts",id:"coreconcepts",title:"Core Concepts",description:"Where should I start?",source:"@site/docs/3_coreconcepts.md",sourceDirName:".",slug:"/coreconcepts",permalink:"/xrengine-docs/docs/coreconcepts",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/3_coreconcepts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"coreconcepts",title:"Core Concepts"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/xrengine-docs/docs/installation"},next:{title:"Architecture Overview",permalink:"/xrengine-docs/docs/"}},u=[{value:"Where should I start?",id:"where-should-i-start",children:[],level:2},{value:"Yarn, Lerna and the NPM Ecosystem",id:"yarn-lerna-and-the-npm-ecosystem",children:[],level:2},{value:"Modularity",id:"modularity",children:[],level:2},{value:"Entity Component System",id:"entity-component-system",children:[],level:2},{value:"Login and Authentication",id:"login-and-authentication",children:[],level:2},{value:"REST and Communication",id:"rest-and-communication",children:[],level:2},{value:"Server-Authority",id:"server-authority",children:[],level:2},{value:"Scalability",id:"scalability",children:[],level:2},{value:"Cross-Platform",id:"cross-platform",children:[],level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"where-should-i-start"},"Where should I start?"),(0,a.kt)("p",null,"XREngine is, at it's core, a set of interoperable packages, which are in turn built on popular web frameworks and the Node.js ecosystem."),(0,a.kt)("p",null,"It can be very daunting for developers new to our ecosystem to know where to start, or what they even need to know to get started. We recommend you start by reading a bit about the underlying dependencies first, so that when you dive into the code you aren't overwhelmed with trying to understand and map so many foreign concepts at the same time. You can read about dependencies in the ARCHITECTURE section."),(0,a.kt)("p",null,"Our decision for one design concept or framework over another was largely driven by a desire to reach as many people as possible while staying current to emerging ecosystem trends. We want developers to see our engine as an opportunity to build highly relevant skills, and we have tried to incorporate popular solutions wherever writing our own wasn't necessary. You may not agree with some of our framework decisions. Just know that we are driven not by a love for one framework or another, but a desire to minimize the learning curve for the most people coming to this engine for the first time. The engine is designed in a modular way, however, so you are free to pick and choose the parts the work for you and modify what doesn't."),(0,a.kt)("h1",{id:"monorepo-and-packages"},"Monorepo and Packages"),(0,a.kt)("h2",{id:"yarn-lerna-and-the-npm-ecosystem"},"Yarn, Lerna and the NPM Ecosystem"),(0,a.kt)("h2",{id:"modularity"},"Modularity"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h1",{id:"engine"},"Engine"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"entity-component-system"},"Entity Component System"),(0,a.kt)("p",null,"Our engine is built around an ECS paradigm based on ECSY by Fernando Serrano and Robert Long (and contributions by others). We have altered the API slightly to reflect a more functional approach, removed and simplified other parts and converted the code to native Typescript."),(0,a.kt)("p",null,"Our ECS implementation is available here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/XRFoundation/XREngine/tree/dev/packages/engine/src/ecs"},"https://github.com/XRFoundation/XREngine/tree/dev/packages/engine/src/ecs"))),(0,a.kt)("p",null,"You can watch a very helpful overview of entity component systems here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2rW7ALyHaas"},"https://www.youtube.com/watch?v=2rW7ALyHaas")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Z-CILn2w9K0"},"https://www.youtube.com/watch?v=Z-CILn2w9K0"))),(0,a.kt)("p",null,"ECSY docs cover most of the key concepts of our engine.\n",(0,a.kt)("a",{parentName:"p",href:"https://ecsy.io/docs/"},"https://ecsy.io/docs/")),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h1",{id:"api-server"},"API Server"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"login-and-authentication"},"Login and Authentication"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"rest-and-communication"},"REST and Communication"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h1",{id:"game-server"},"Game Server"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"server-authority"},"Server-Authority"),(0,a.kt)("p",null,"XREngine is primarily a server authoratative architecture and network model. Long term, we hope to introduce P2P networking layers, and of course you can build applications that can run as both the client ",(0,a.kt)("em",{parentName:"p"},"and")," the server if you target a native application (which we support through Capacitor and Electron). A good comparison is Minecraft -- most Minecraft users playing on large social servers are connecting to a single endpoint that breaks them out into one of many smaller servers. Admins can request actions of the server -- to kick a user, for example -- but the server has ultimate authority over all decisions in the world. This makes it much harder for users to hack other users or generally hack a network that has no server authority. As we imagine a large, interconnected network of servers and clusters of servers, we hope we can strike a balance between open network interoperability and letting individual developers and server owners govern users as they see fit."),(0,a.kt)("p",null,"While is is in the Unity Engine, this tutorial does a good job of explaining server authority:\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6n4SDOmizOo"},"https://www.youtube.com/watch?v=6n4SDOmizOo")),(0,a.kt)("h2",{id:"scalability"},"Scalability"),(0,a.kt)("p",null,'XREngine is designed to scale "horizontally", as opposed to "vertically". Instead of running massive servers hosting massive worlds, we spin up small, identical instances of worlds to accomodate new groups of users once we\'ve hit capacity in the existing servers. The instances exist for as long as people are in them, and are removed once everyone leaves. A good comparison is Fortnite -- one hundred people jump into a world to have an event, and a new game server is allocated for them. They play, they finish, the gameserver instance is destroyed.'),(0,a.kt)("p",null,'To accomodate large scale MMO worlds we need to either build a network of portals -- as of writing, we have eight worlds connected this way by portals -- or stitch servers together so that users travelling over world boundaries or into populated areas can be handed off between servers as part of a larger, shared, universal state. In either case we can set heuristics to instance any given location if many people arrive. The bottleneck for most devices is how many skinned mesh avatars they can render at a time, and on the server it\'s how many WebRTC feeds we can pipe through. Our belief is that the "Fortnite" model (large fleets of flexible, recyclable game server instances) can be abstracted well into the largescale MMO case.'),(0,a.kt)("p",null,"Under the hood, we are using a game server fleet management tool called Agones, which leverages the power of Kubernetes to spin up new pods running game server instances. One benefit of this architecture is that the game server can be built in anything -- Unity, Unreal, golang, etc. We provide a ready-made game server in Node.js already integrated for virtual worlds, but you're free to modify this however you want."),(0,a.kt)("p",null,"Pods? Game servers? Kubernetes? Yes, there's a lot there. If you're interested in the scalable deployment and infrastructure, this is covered in more detail in the ARCHITECTURE section."),(0,a.kt)("p",null,'For everyone else, well, we\'ve spent a lot of effort building the core stack to include a "just works" architecture. If you are just starting out and using our whole multiplayer stack then we recommend leaving the scalability to us until you feel comfortable with the rest of the architecture.'),(0,a.kt)("h2",{id:"cross-platform"},"Cross-Platform"),(0,a.kt)("p",null,"While XREngine is built using popular web technologies and should work in all popular browsers, we've added some examples for building to iOS, Android and Electron without having to change a single line of code in your application. For more information on how this works, please consult the ARCHITECTURE section. For build instructions, consult the DEPLOYMENT section."))}h.isMDXComponent=!0}}]);