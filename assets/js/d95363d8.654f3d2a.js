"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[117],{8856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(2322),s=t(5392);const r={title:"Gatsby"},i="Integrating Consent Manager with Gatsby",o={id:"frameworks/gatsby",title:"Gatsby",description:"This guide demonstrates how to effectively integrate the Consent Manager into a Gatsby project, ensuring GDPR compliance and a smooth user experience.",source:"@site/docs/frameworks/gatsby.md",sourceDirName:"frameworks",slug:"/frameworks/gatsby",permalink:"/consent-manager/docs/frameworks/gatsby",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/frameworks/gatsby.md",tags:[],version:"current",frontMatter:{title:"Gatsby"},sidebar:"someSidebar",previous:{title:"Create React App",permalink:"/consent-manager/docs/frameworks/create-react-app"},next:{title:"Next.js",permalink:"/consent-manager/docs/frameworks/nextjs"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Setting Up the Consent Manager",id:"setting-up-the-consent-manager",level:2},{value:"Step 1: Create Configuration File",id:"step-1-create-configuration-file",level:3},{value:"Step 2: Wrap Your Gatsby Application",id:"step-2-wrap-your-gatsby-application",level:3},{value:"gatsby-browser.js",id:"gatsby-browserjs",level:4},{value:"gatsby-ssr.js",id:"gatsby-ssrjs",level:4}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"integrating-consent-manager-with-gatsby",children:"Integrating Consent Manager with Gatsby"}),"\n",(0,a.jsx)(n.p,{children:"This guide demonstrates how to effectively integrate the Consent Manager into a Gatsby project, ensuring GDPR compliance and a smooth user experience."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["A tested implementation is available in our ",(0,a.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager-examples/tree/main/gatsby",children:"example repository"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Begin by installing ",(0,a.jsx)(n.code,{children:"@consent-manager/core"}),", its default interface, and ",(0,a.jsx)(n.code,{children:"use-persistent-state"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @consent-manager/core @consent-manager/interface-default use-persisted-state\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-consent-manager",children:"Setting Up the Consent Manager"}),"\n",(0,a.jsx)(n.h3,{id:"step-1-create-configuration-file",children:"Step 1: Create Configuration File"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:"consent-manager.js"})," file in your project. This file configures and exports the ",(0,a.jsx)(n.code,{children:"ConsentManagerWrapper"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react';\nimport { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';\nimport '@consent-manager/interface-default/dist/default.min.css';\nimport createPersistedState from 'use-persisted-state';\n\nconst useConsentStateStore = createPersistedState('consent-manager');\n\nconst config = {\n  // ... your configuration options ...\n};\n\nexport const ConsentManagerWrapper = ({ children }) => {\n  const storage = useConsentStateStore();\n\n  return (\n    <ConsentManagerDefaultInterface store={storage} config={config}>\n      {children}\n    </ConsentManagerDefaultInterface>\n  );\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"This configuration file sets up the core elements of the Consent Manager, including storage and customization options."}),"\n",(0,a.jsx)(n.h3,{id:"step-2-wrap-your-gatsby-application",children:"Step 2: Wrap Your Gatsby Application"}),"\n",(0,a.jsxs)(n.p,{children:["In Gatsby, you can wrap your application with the ",(0,a.jsx)(n.code,{children:"ConsentManagerWrapper"})," in two specific files: ",(0,a.jsx)(n.code,{children:"gatsby-browser.js"})," and ",(0,a.jsx)(n.code,{children:"gatsby-ssr.js"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"gatsby-browserjs",children:"gatsby-browser.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react';\nimport { ConsentManagerWrapper } from './src/consent-manager';\n\nexport const wrapRootElement = ({ element }) => (\n  <ConsentManagerWrapper>{element}</ConsentManagerWrapper>\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"This file ensures that the Consent Manager wraps around your application during client-side rendering."}),"\n",(0,a.jsx)(n.h4,{id:"gatsby-ssrjs",children:"gatsby-ssr.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react';\nimport { ConsentManagerWrapper } from './src/consent-manager';\n\nexport const wrapRootElement = ({ element }) => (\n  <ConsentManagerWrapper>{element}</ConsentManagerWrapper>\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, ",(0,a.jsx)(n.code,{children:"gatsby-ssr.js"})," wraps your application during server-side rendering, maintaining consistency across both rendering methods."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);