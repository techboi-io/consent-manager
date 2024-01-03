"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[488],{3628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(2322),r=n(5392);const i={title:"Create React App"},s="Integrating Consent Manager with Create React App",o={id:"frameworks/create-react-app",title:"Create React App",description:"This guide will help you to integrate the Consent Manager into a React application created with Create React App. It will walk you through the necessary steps to set up and configure the Consent Manager effectively.",source:"@site/docs/frameworks/create-react-app.md",sourceDirName:"frameworks",slug:"/frameworks/create-react-app",permalink:"/consent-manager/docs/frameworks/create-react-app",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/frameworks/create-react-app.md",tags:[],version:"current",frontMatter:{title:"Create React App"},sidebar:"someSidebar",previous:{title:"Alternative Storage Libraries",permalink:"/consent-manager/docs/guides/alternative-storage-libraries"},next:{title:"Gatsby",permalink:"/consent-manager/docs/frameworks/gatsby"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Setting Up the Consent Manager",id:"setting-up-the-consent-manager",level:2},{value:"Step 1: Create Configuration File",id:"step-1-create-configuration-file",level:3},{value:"Step 2: Wrap Your Application",id:"step-2-wrap-your-application",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"integrating-consent-manager-with-create-react-app",children:"Integrating Consent Manager with Create React App"}),"\n",(0,a.jsx)(t.p,{children:"This guide will help you to integrate the Consent Manager into a React application created with Create React App. It will walk you through the necessary steps to set up and configure the Consent Manager effectively."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["For a practical example, including a tested implementation, visit our ",(0,a.jsx)(t.a,{href:"https://github.com/hashbite/consent-manager-examples/tree/main/create-react-app",children:"example repository"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:["First, install the ",(0,a.jsx)(t.code,{children:"@consent-manager/core"})," and its default interface, along with any other integrations you might need:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install @consent-manager/core @consent-manager/interface-default use-persisted-state\n"})}),"\n",(0,a.jsx)(t.h2,{id:"setting-up-the-consent-manager",children:"Setting Up the Consent Manager"}),"\n",(0,a.jsx)(t.h3,{id:"step-1-create-configuration-file",children:"Step 1: Create Configuration File"}),"\n",(0,a.jsxs)(t.p,{children:["Create a file named ",(0,a.jsx)(t.code,{children:"consent-manager.js"})," in your project. This file will configure and export the ",(0,a.jsx)(t.code,{children:"ConsentManagerWrapper"})," component. Add the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import React from 'react';\nimport { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';\nimport '@consent-manager/interface-default/dist/default.min.css';\nimport createPersistedState from 'use-persisted-state';\n\n// Store consent information in localStorage\nconst useConsentStateStore = createPersistedState('consent-manager');\n\n// Add your configuration here\nconst config = {\n  // ... your configuration options ...\n};\n\nexport const ConsentManagerWrapper = ({ children }) => {\n  const storage = useConsentStateStore();\n\n  return (\n    <ConsentManagerDefaultInterface store={storage} config={config}>\n      {children}\n    </ConsentManagerDefaultInterface>\n  );\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"This file establishes the core configuration for Consent Manager, including storing user decisions in localStorage."}),"\n",(0,a.jsx)(t.h3,{id:"step-2-wrap-your-application",children:"Step 2: Wrap Your Application"}),"\n",(0,a.jsxs)(t.p,{children:["In your ",(0,a.jsx)(t.code,{children:"src/index.js"})," (or ",(0,a.jsx)(t.code,{children:"layout.js"}),", if applicable), import and use the ",(0,a.jsx)(t.code,{children:"ConsentManagerWrapper"})," to encompass your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport { ConsentManagerWrapper } from './consent-manager';\n\nReactDOM.render(\n  <React.StrictMode>\n    <ConsentManagerWrapper>\n      <App />\n    </Consent ManagerWrapper>\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n"})}),"\n",(0,a.jsx)(t.p,{children:"This step integrates the Consent Manager with your React application, ensuring that it wraps around the entire app."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);