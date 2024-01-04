"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[624],{5503:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>g,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=a(2322),o=a(5392),r=a(4516);const i={id:"google-tag-manager",title:"Google Tag Manager Integration"},g=void 0,s={id:"integrations/google-tag-manager",title:"Google Tag Manager Integration",description:"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-google-tag-manager",source:"@site/docs/integrations/google-tag-manager.md",sourceDirName:"integrations",slug:"/integrations/google-tag-manager",permalink:"/consent-manager/docs/integrations/google-tag-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/integrations/google-tag-manager.md",tags:[],version:"current",frontMatter:{id:"google-tag-manager",title:"Google Tag Manager Integration"},sidebar:"someSidebar",previous:{title:"Google Analytics Integration",permalink:"/consent-manager/docs/integrations/google-analytics"},next:{title:"Hubspot Integration",permalink:"/consent-manager/docs/integrations/hubspot"}},c={},l=[{value:"<code>getGoogleTagManager</code> Function",id:"getgoogletagmanager-function",level:2},{value:"Example Usage",id:"example-usage",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{IntegrationProfile:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IntegrationProfile",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Source code: ",(0,t.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/tree/main/packages/integration-google-tag-manager",children:"https://github.com/hashbite/consent-manager/tree/main/packages/integration-google-tag-manager"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The Google Tag Manager integration uses the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/react-gtm-module",children:(0,t.jsx)(n.code,{children:"react-gtm-module"})})," to manage and deploy marketing tags (such as tracking pixels or site analytics) on your React application."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning"}),": Using Google Tag Manager can significantly increase your site's loading time, especially if numerous scripts are enabled through it. It can also reduce the control developers have over tracking and script management on their website. Use it responsibly and understand its impact on performance and privacy."]}),"\n"]}),"\n",(0,t.jsx)(a,{integration:(0,r.C)({})}),"\n",(0,t.jsxs)(n.h2,{id:"getgoogletagmanager-function",children:[(0,t.jsx)(n.code,{children:"getGoogleTagManager"})," Function"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getGoogleTagManager"})," function provides access to the initialized instance of ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/react-gtm-module",children:(0,t.jsx)(n.code,{children:"react-gtm-module"})}),". This allows for the integration and management of Google Tag Manager functionalities within your application."]}),"\n",(0,t.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(n.p,{children:["This example demonstrates how you might use the ",(0,t.jsx)(n.code,{children:"getGoogleTagManager"})," function to manage Google Tag Manager in your React application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { useEffect } from 'react';\nimport { getGoogleTagManager } from '@consent-manager/integration-google-tag-manager';\n\nfunction App() {\n  useEffect(() => {\n    const GTM = getGoogleTagManager();\n    if (GTM) {\n      // Add your Google Tag Manager functionalities here\n      // GTM.dataLayer.push(...) or other GTM operations\n    }\n  }, []);\n\n  // Your application content\n  return (\n    // ...\n  );\n}\n\nexport default App;\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);