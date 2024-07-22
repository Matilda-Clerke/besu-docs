"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[96801],{82517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(85893),n=r(11151);const i={title:"Use Java Flight Recorder",sidebar_position:3,description:"Using Java Flight Recorder with Hyperledger Besu",tags:["public networks","private networks"]},s="Use Java Flight Recorder",a={id:"public-networks/how-to/configure-jvm/java-flight-recorder",title:"Use Java Flight Recorder",description:"Using Java Flight Recorder with Hyperledger Besu",source:"@site/versioned_docs/version-24.3.0/public-networks/how-to/configure-jvm/java-flight-recorder.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/java-flight-recorder",permalink:"/24.3.0/public-networks/how-to/configure-jvm/java-flight-recorder",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/public-networks/how-to/configure-jvm/java-flight-recorder.md",tags:[{label:"public networks",permalink:"/24.3.0/tags/public-networks"},{label:"private networks",permalink:"/24.3.0/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1721335944,formattedLastUpdatedAt:"Jul 18, 2024",sidebarPosition:3,frontMatter:{title:"Use Java Flight Recorder",sidebar_position:3,description:"Using Java Flight Recorder with Hyperledger Besu",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Manage JVM memory",permalink:"/24.3.0/public-networks/how-to/configure-jvm/manage-memory"},next:{title:"Use Hardhat",permalink:"/24.3.0/public-networks/how-to/develop/hardhat"}},c={},l=[{value:"Enable Java Flight Recorder",id:"enable-java-flight-recorder",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"use-java-flight-recorder",children:"Use Java Flight Recorder"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://docs.oracle.com/javacomponents/jmc-5-4/jfr-runtime-guide/about.htm#JFRUH170",children:"Java Flight Recorder (JFR)"})," is a monitoring tool that collects information about the Java Virtual Machine (JVM) when Hyperledger Besu is running. Use the JFR as a tool to analyze Besu performance."]}),"\n",(0,o.jsx)(t.h2,{id:"enable-java-flight-recorder",children:"Enable Java Flight Recorder"}),"\n",(0,o.jsxs)(t.p,{children:["To enable JFR, set ",(0,o.jsx)(t.code,{children:"BESU_OPTS"})," to the JFR tags as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export BESU_OPTS=-XX:StartFlightRecording=disk=true,delay=15s,dumponexit=true,\\\nfilename=/tmp/recording.jfr,maxsize=1024m,maxage=1d,\\\nsettings=profile,path-to-gc-roots=true\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"When recording, cleanly exiting Besu results in better data. If not possible to cleanly exit, the file may be missing some information not flushed to disk."})}),"\n",(0,o.jsxs)(t.p,{children:["Inspect the file written to ",(0,o.jsx)(t.code,{children:"/tmp/recording.jfr"})," with tools such as ",(0,o.jsx)(t.a,{href:"https://docs.oracle.com/javacomponents/jmc-5-5/jmc-user-guide/intro.htm#JMCCI109",children:"Mission Control"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"danger",children:(0,o.jsxs)(t.p,{children:["If providing the output file to ",(0,o.jsx)(t.a,{href:"https://consensys.net/quorum/support/",children:"ConsenSys Quorum support"}),", be aware that while JFR files don't contain secrets such as private keys, some details about the user configuration can be inferred from the JFR output."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var o=r(67294);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);