(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[66142],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),a=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=a(e.components);return t.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,d=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=a(n),g=i,p=u["".concat(s,".").concat(g)]||u[g]||f[g]||d;return n?t.createElement(p,l(l({ref:r},c),{},{components:n})):t.createElement(p,l({ref:r},c))}));function g(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var d=n.length,l=new Array(d);l[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var a=2;a<d;a++)l[a]=n[a];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91009:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return a},default:function(){return f}});var t=n(22122),i=n(19756),d=(n(67294),n(3905)),l=["components"],o={id:"renderer_effects_blending_glsl_divide_shader_frag",title:"Module: renderer/effects/blending/glsl/divide/shader.frag",sidebar_label:"renderer/effects/blending/glsl/divide/shader.frag",custom_edit_url:null},s={unversionedId:"docs-engine/modules/renderer_effects_blending_glsl_divide_shader_frag",id:"docs-engine/modules/renderer_effects_blending_glsl_divide_shader_frag",isDocsHomePage:!1,title:"Module: renderer/effects/blending/glsl/divide/shader.frag",description:"Properties",source:"@site/docs/docs-engine/modules/renderer_effects_blending_glsl_divide_shader_frag.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/renderer_effects_blending_glsl_divide_shader_frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_divide_shader_frag",editUrl:null,version:"current",sidebar_label:"renderer/effects/blending/glsl/divide/shader.frag",frontMatter:{id:"renderer_effects_blending_glsl_divide_shader_frag",title:"Module: renderer/effects/blending/glsl/divide/shader.frag",sidebar_label:"renderer/effects/blending/glsl/divide/shader.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: renderer/effects/blending/glsl/difference/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_difference_shader_frag"},next:{title:"Module: renderer/effects/blending/glsl/exclusion/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag"}},a=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],c={toc:a};function f(e){var r=e.components,n=(0,i.Z)(e,l);return(0,d.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"properties"},"Properties"),(0,d.kt)("h3",{id:"default"},"default"),(0,d.kt)("p",null,"\u2022 ",(0,d.kt)("strong",{parentName:"p"},"default"),": ",(0,d.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\n\\treturn (y > 0.0) ? min(x / y, 1.0) : 1.0;\\n\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\n\\treturn z * opacity + x * (1.0 - opacity);\\n\\n}\\n"')))}f.isMDXComponent=!0}}]);