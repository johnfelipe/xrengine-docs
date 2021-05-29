(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[87030],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return d},kt:function(){return g}});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),a=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=a(e.components);return t.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=a(n),g=l,p=u["".concat(i,".").concat(g)]||u[g]||f[g]||o;return n?t.createElement(p,c(c({ref:r},d),{},{components:n})):t.createElement(p,c({ref:r},d))}));function g(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,c[1]=s;for(var a=2;a<o;a++)c[a]=n[a];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61352:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return a},default:function(){return f}});var t=n(22122),l=n(19756),o=(n(67294),n(3905)),c=["components"],s={id:"renderer_effects_blending_glsl_reflect_shader_frag",title:"Module: renderer/effects/blending/glsl/reflect/shader.frag",sidebar_label:"renderer/effects/blending/glsl/reflect/shader.frag",custom_edit_url:null},i={unversionedId:"docs-engine/modules/renderer_effects_blending_glsl_reflect_shader_frag",id:"docs-engine/modules/renderer_effects_blending_glsl_reflect_shader_frag",isDocsHomePage:!1,title:"Module: renderer/effects/blending/glsl/reflect/shader.frag",description:"Properties",source:"@site/docs/docs-engine/modules/renderer_effects_blending_glsl_reflect_shader_frag.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/renderer_effects_blending_glsl_reflect_shader_frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_reflect_shader_frag",editUrl:null,version:"current",sidebar_label:"renderer/effects/blending/glsl/reflect/shader.frag",frontMatter:{id:"renderer_effects_blending_glsl_reflect_shader_frag",title:"Module: renderer/effects/blending/glsl/reflect/shader.frag",sidebar_label:"renderer/effects/blending/glsl/reflect/shader.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: renderer/effects/blending/glsl/overlay/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_overlay_shader_frag"},next:{title:"Module: renderer/effects/blending/glsl/screen/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_screen_shader_frag"}},a=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],d={toc:a};function f(e){var r=e.components,n=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\n\\treturn (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);\\n\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\n\\treturn z * opacity + x * (1.0 - opacity);\\n\\n}\\n"')))}f.isMDXComponent=!0}}]);