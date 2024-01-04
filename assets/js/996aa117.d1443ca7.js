"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9578],{4712:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>v,frontMatter:()=>m,metadata:()=>g,toc:()=>p});var i=o(2322),t=o(5392),a=o(2784),r=o(8162);const s=a.lazy((()=>Promise.all([o.e(2143),o.e(2776)]).then(o.bind(o,7115)))),c=e=>(0,i.jsx)(r.En,{id:"vimeo",children:(0,i.jsx)(a.Suspense,{fallback:null,children:(0,i.jsx)(s,{...e})})});var d=o(308);const m={id:"vimeo",title:"Vimeo Integration"},l=void 0,g={id:"integrations/vimeo",title:"Vimeo Integration",description:"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-vimeo",source:"@site/docs/integrations/vimeo.md",sourceDirName:"integrations",slug:"/integrations/vimeo",permalink:"/consent-manager/docs/integrations/vimeo",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/integrations/vimeo.md",tags:[],version:"current",frontMatter:{id:"vimeo",title:"Vimeo Integration"},sidebar:"someSidebar",previous:{title:"Segment Integration",permalink:"/consent-manager/docs/integrations/segment"},next:{title:"Youtube Integration",permalink:"/consent-manager/docs/integrations/youtube"}},h={},p=[{value:"Managing Consent for Vimeo",id:"managing-consent-for-vimeo",level:2},{value:"Example: Conditional Loading of Vimeo Videos",id:"example-conditional-loading-of-vimeo-videos",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{IntegrationProfile:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IntegrationProfile",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Source code: ",(0,i.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/tree/main/packages/integration-vimeo",children:"https://github.com/hashbite/consent-manager/tree/main/packages/integration-vimeo"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Vimeo integration with Consent Manager handles user consent for embedding Vimeo videos, ensuring GDPR-compliant usage."}),"\n",(0,i.jsx)(o,{integration:(0,d.g)({})}),"\n",(0,i.jsx)(n.h2,{id:"managing-consent-for-vimeo",children:"Managing Consent for Vimeo"}),"\n",(0,i.jsxs)(n.p,{children:["To manage the loading of Vimeo videos based on user consent, utilize the ",(0,i.jsxs)(n.a,{href:"/consent-manager/docs/core/hooks#usedecision",children:[(0,i.jsx)(n.code,{children:"useDecision"})," hook"]})," from Consent Manager Core or the ",(0,i.jsxs)(n.a,{href:"/consent-manager/docs/core/privacy-shield",children:[(0,i.jsx)(n.code,{children:"PrivacyShield"})," component"]}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"example-conditional-loading-of-vimeo-videos",children:"Example: Conditional Loading of Vimeo Videos"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import React from 'react';\nimport { PrivacyShield } from '@consent-manager/core';\nimport VimeoVideoComponent from './VimeoVideoComponent';\n\nfunction VideoWithConsent() {\n  return (\n    <PrivacyShield id=\"vimeo\">\n      <VimeoVideoComponent />\n    </PrivacyShield>\n  );\n}\n\nexport default VideoWithConsent;\n"})}),"\n",(0,i.jsx)(c,{id:"325910798"})]})}function v(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);