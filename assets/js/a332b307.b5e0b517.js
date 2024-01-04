"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7819],{2141:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(2322),i=n(5392),s=n(8441);const r={id:"hubspot",title:"Hubspot Integration"},a=void 0,c={id:"integrations/hubspot",title:"Hubspot Integration",description:"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-hubspot",source:"@site/docs/integrations/hubspot.md",sourceDirName:"integrations",slug:"/integrations/hubspot",permalink:"/consent-manager/docs/integrations/hubspot",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/integrations/hubspot.md",tags:[],version:"current",frontMatter:{id:"hubspot",title:"Hubspot Integration"},sidebar:"someSidebar",previous:{title:"Google Tag Manager Integration",permalink:"/consent-manager/docs/integrations/google-tag-manager"},next:{title:"LinkedIn Integration",permalink:"/consent-manager/docs/integrations/linkedin"}},h={},u=[{value:"Configuration Options",id:"configuration-options",level:2},{value:"Example Usage with <code>react-router</code>",id:"example-usage-with-react-router",level:2}];function p(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components},{IntegrationProfile:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("IntegrationProfile",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Source code: ",(0,o.jsx)(e.a,{href:"https://github.com/hashbite/consent-manager/tree/main/packages/integration-hubspot",children:"https://github.com/hashbite/consent-manager/tree/main/packages/integration-hubspot"})]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["The HubSpot integration with Consent Manager will directly inject the HubSpot tracking script into your application once the user gives their consent. This integration ensures that user tracking aligns with privacy regulations like GDPR. For more details on the tracking script, refer to ",(0,o.jsx)(e.a,{href:"https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code",children:"HubSpot's official guide"}),"."]}),"\n",(0,o.jsx)(n,{integration:(0,s._)({})}),"\n",(0,o.jsx)(e.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"hubId: Your Hubspot ID"}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"example-usage-with-react-router",children:["Example Usage with ",(0,o.jsx)(e.code,{children:"react-router"})]}),"\n",(0,o.jsxs)(e.p,{children:["This example demonstrates how to use hubspot in conjunction with ",(0,o.jsx)(e.code,{children:"react-router"})," to track page views:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"import { useEffect } from 'react';\nimport { useLocation } from 'react-router-dom';\n\nfunction App() {\n  const location = useLocation();\n  const [hubspotConsent] = useDecision('hubspot');\n  useEffect(() => {\n    if (hubspotConsent) {\n      var _hsq = window._hsq = window._hsq || [];\n      _hsq.push(['setPath', { path: location.pathname + location.search }])\n    }\n  }, [location, hubspotConsent]);\n\n  // Your application content\n  return (\n    // ...\n  );\n}\n\nexport default App;\n"})})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}}}]);