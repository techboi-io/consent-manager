"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[122],{6609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(2322),s=t(5392);const o={},r="Styling the Consent Manager",i={id:"interface-default/styling",title:"Styling the Consent Manager",description:"Customizing the appearance of the default interface of Consent Manager can be achieved in various ways, allowing you to align it with your application's design and branding:",source:"@site/docs/interface-default/styling.md",sourceDirName:"interface-default",slug:"/interface-default/styling",permalink:"/consent-manager/docs/interface-default/styling",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/interface-default/styling.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"ConsentManagerDefaultInterface",permalink:"/consent-manager/docs/interface-default/interface"},next:{title:"Internationalization (i18n) Support",permalink:"/consent-manager/docs/interface-default/i18n"}},l={},c=[{value:"Adjusting Colors via CSS Variables",id:"adjusting-colors-via-css-variables",level:2},{value:"Dark Mode",id:"dark-mode",level:3},{value:"Replacing Components",id:"replacing-components",level:2},{value:"Example: Custom Toggle Button",id:"example-custom-toggle-button",level:3},{value:"Overriding Styles",id:"overriding-styles",level:2},{value:"Creating Your Own Styles",id:"creating-your-own-styles",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"styling-the-consent-manager",children:"Styling the Consent Manager"}),"\n",(0,a.jsx)(n.p,{children:"Customizing the appearance of the default interface of Consent Manager can be achieved in various ways, allowing you to align it with your application's design and branding:"}),"\n",(0,a.jsx)(n.h2,{id:"adjusting-colors-via-css-variables",children:"Adjusting Colors via CSS Variables"}),"\n",(0,a.jsx)(n.p,{children:"You can modify the color scheme by tweaking CSS variables. This approach offers an easy way to align the interface with your app's color palette."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:"/*\n * These might be the most relevant css variables with their defaults.\n * See all: https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.module.css\n*/\n:root {\n  --consent-manager-ui-primary: #16a34a;\n  --consent-manager-ui-bg: #f4f4f5;\n  --consent-manager-ui-bg-transparent: rgba(250, 250, 250, 0.87);\n  --consent-manager-ui-color: #18181b;\n  --consent-manager-ui-switch-slide-bg: #e4e4e7;\n  --consent-manager-ui-link-color: var(--consent-manager-ui-primary);\n  --consent-manager-ui-fallback-stripe-color: rgb(247, 247, 248);\n}\n\nhtml[data-theme='dark'] {\n  --consent-manager-ui-bg: #18181b;\n  --consent-manager-ui-bg-transparent: rgba(24, 24, 27, 0.87);\n  --consent-manager-ui-color: #f4f4f5;\n  --consent-manager-ui-switch-slide-bg: #a1a1aa;\n  --consent-manager-ui-link-color: #22c55e;\n  --consent-manager-ui-fallback-stripe-color: rgb(32, 32, 34);\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"dark-mode",children:"Dark Mode"}),"\n",(0,a.jsx)(n.p,{children:"The default interface comes with dark mode support out of the box. Please test your page in dark mode to ensure the privacy shield fallback component looks fine."}),"\n",(0,a.jsx)(n.h2,{id:"replacing-components",children:"Replacing Components"}),"\n",(0,a.jsxs)(n.p,{children:["The default interface components can be replaced with your custom components. This includes buttons, switches, and more. For a list of replaceable components, refer to the properties of the ",(0,a.jsxs)(n.a,{href:"/consent-manager/docs/interface-default/interface",children:[(0,a.jsx)(n.code,{children:"ConsentManagerDefaultInterface"})," component"]}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"example-custom-toggle-button",children:"Example: Custom Toggle Button"}),"\n",(0,a.jsxs)(n.p,{children:["Here's an example of how you can add your own toggle button. The source for the default toggle button can be found ",(0,a.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/toggle-button.tsx",children:"here"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"// Import your custom toggle button component\nimport MyToggleButton from './MyToggleButton';\n\n<ConsentManagerDefaultInterface\n  ToggleButton={MyToggleButton}\n  // ... other props\n>\n  {/* Your app components */}\n</ConsentManagerDefaultInterface>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"overriding-styles",children:"Overriding Styles"}),"\n",(0,a.jsxs)(n.p,{children:["You can override the existing styles, though this method should be used cautiously. For a complete overview of the styles applied, visit the ",(0,a.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.module.css",children:"style sheet here"}),". The plugin uses consistent class names, making it possible to override styles using CSS."]}),"\n",(0,a.jsx)(n.h2,{id:"creating-your-own-styles",children:"Creating Your Own Styles"}),"\n",(0,a.jsxs)(n.p,{children:["For a completely custom look, consider copying and altering the existing stylesheet found ",(0,a.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.module.css",children:"here"}),". This method gives you full control over the interface's appearance."]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);