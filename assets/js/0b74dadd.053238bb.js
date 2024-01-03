"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{6136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(2322),s=t(5392);const i={title:"Custom User Interfaces"},o="Creating a Custom User Interface for Consent Manager",c={id:"guides/create-custom-interface",title:"Custom User Interfaces",description:"This guide outlines the initial steps to integrate your custom user interface with Consent Manager. Your feedback and insights from this process are invaluable to us. Please feel free to share your experiences in the issues section, as we are eager to enhance the implementation experience and this documentation for others who wish to create their own user interface.",source:"@site/docs/guides/create-custom-interface.md",sourceDirName:"guides",slug:"/guides/create-custom-interface",permalink:"/consent-manager/docs/guides/create-custom-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/guides/create-custom-interface.md",tags:[],version:"current",frontMatter:{title:"Custom User Interfaces"},sidebar:"someSidebar",previous:{title:"Custom Integrations",permalink:"/consent-manager/docs/guides/create-custom-integration"},next:{title:"<ConsentManager />",permalink:"/consent-manager/docs/core/consent-manager"}},a={},d=[{value:"Step 1: Wrap Your App as Usual",id:"step-1-wrap-your-app-as-usual",level:2},{value:"Step 2: Create Your Own Form Component",id:"step-2-create-your-own-form-component",level:2},{value:"<code>DecisionsFormProps</code> Structure",id:"decisionsformprops-structure",level:3},{value:"<code>IntegrationConfig</code> Structure",id:"integrationconfig-structure",level:3},{value:"<code>DecisionsFormState</code> Structure",id:"decisionsformstate-structure",level:3},{value:"Example Implementation",id:"example-implementation",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"creating-a-custom-user-interface-for-consent-manager",children:"Creating a Custom User Interface for Consent Manager"}),"\n",(0,r.jsx)(n.p,{children:"This guide outlines the initial steps to integrate your custom user interface with Consent Manager. Your feedback and insights from this process are invaluable to us. Please feel free to share your experiences in the issues section, as we are eager to enhance the implementation experience and this documentation for others who wish to create their own user interface."}),"\n",(0,r.jsx)(n.h2,{id:"step-1-wrap-your-app-as-usual",children:"Step 1: Wrap Your App as Usual"}),"\n",(0,r.jsxs)(n.p,{children:["First, wrap your application with ",(0,r.jsx)(n.code,{children:"ConsentManager"}),", using your custom fallback component to match your design. For reference, see the ",(0,r.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.tsx",children:"default implementation"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { ConsentManager, ConsentManagerForm } from '@consent-manager/core'\nimport { ConsentManagerCustomFormComponent } from './consent-manager-custom-form'\n\nexport const ConsentManagerCustomInterface = ({ children, ...props }) => {\n  return (\n    <ConsentManager\n      config={config}\n      store={store}\n      fallbackComponent={(fallbackProps) => (\n        <YourCustomFallbackComponent {...fallbackProps} />\n      )}\n    >\n      {children}\n      <ConsentManagerForm\n        formComponent={ConsentManagerCustomFormComponent}\n        id=\"consent-manager-default-interface\"\n        {...props}\n      />\n    </ConsentManager>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"step-2-create-your-own-form-component",children:"Step 2: Create Your Own Form Component"}),"\n",(0,r.jsxs)(n.p,{children:["For reference see the ",(0,r.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/interface.tsx",children:"default interface implementation"})]}),"\n",(0,r.jsx)(n.p,{children:"Your custom form component will receive the following properties:"}),"\n",(0,r.jsxs)(n.h3,{id:"decisionsformprops-structure",children:[(0,r.jsx)(n.code,{children:"DecisionsFormProps"})," Structure"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Prop"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"integrations"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IntegrationConfig[]"})}),(0,r.jsx)(n.td,{children:"Array of integration configurations."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"initialValues"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DecisionsFormState"})}),(0,r.jsx)(n.td,{children:"Initial state indicating enabled integrations."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onSubmit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"(value: DecisionsFormState) => void"})}),(0,r.jsx)(n.td,{children:"Callback function to handle form submission."})]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"integrationconfig-structure",children:[(0,r.jsx)(n.code,{children:"IntegrationConfig"})," Structure"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Prop"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"id"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Unique identifier for the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"title"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Title of the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"description"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Description of the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"category"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Category of the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"color"}),", ",(0,r.jsx)(n.code,{children:"contrastColor"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Optional colors for the integration icon."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"privacyPolicyUrl"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"URL to the privacy policy of the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Icon"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"React.FC<IntegrationIconComponentProps>"})}),(0,r.jsx)(n.td,{children:"Icon component for the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pageViewEventHandler"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PageViewEventTrigger"})}),(0,r.jsx)(n.td,{children:"Optional event handler for tracking page views."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"WrapperComponent"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"React.FC"})}),(0,r.jsx)(n.td,{children:"Optional wrapper component for the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"options"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IntegrationConfigOptions"})}),(0,r.jsx)(n.td,{children:"Additional options specific to the integration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"enabledByDefault"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the integration is enabled by default."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Certainly! Here's the table detailing the structure of ",(0,r.jsx)(n.code,{children:"DecisionsFormState"}),":"]}),"\n",(0,r.jsxs)(n.h3,{id:"decisionsformstate-structure",children:[(0,r.jsx)(n.code,{children:"DecisionsFormState"})," Structure"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"enabled"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IntegrationId[]"})}),(0,r.jsxs)(n.td,{children:["An array of ",(0,r.jsx)(n.code,{children:"IntegrationId"}),"s representing the integrations that are currently enabled."]})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["Each ",(0,r.jsx)(n.code,{children:"IntegrationId"})," in the ",(0,r.jsx)(n.code,{children:"enabled"})," array corresponds to a unique identifier for an integration that the user has consented to. This state is used to manage and reflect the user's current consent choices in your custom form component."]}),"\n",(0,r.jsx)(n.h3,{id:"example-implementation",children:"Example Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'export const ConsentManagerCustomFormComponent: React.FC = ({\n  integrations,\n  initialValues,\n  onSubmit,\n}) => {\n  const [set, { toggle, has }] = useSet(new Set(initialValues.enabled));\n\n  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {\n    const integrationId = e.target.value;\n    toggle(integrationId);\n  }, [toggle]);\n\n  const handleSubmit = useCallback((e: React.FormEvent) => {\n    e.preventDefault();\n    const enabled = Array.from(set.values());\n    onSubmit({ enabled });\n  }, [set, onSubmit]);\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {integrations.map(({ id, title }) => (\n        <label key={id}>\n          <input\n            name="enabled"\n            type="checkbox"\n            value={id}\n            onChange={handleChange}\n            checked={has(id)}\n          /> {title}\n        </label>\n      ))}\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);