"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[77387],{22080:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(85893),t=i(11151);const s={title:"Use a configuration file",sidebar_position:3,description:"Specify options in the Besu configuration file.",tags:["public networks","private networks"]},r="Use the Hyperledger Besu configuration file",a={id:"public-networks/how-to/configuration-file",title:"Use a configuration file",description:"Specify options in the Besu configuration file.",source:"@site/versioned_docs/version-23.10.3/public-networks/how-to/configuration-file.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/configuration-file",permalink:"/23.10.3/public-networks/how-to/configuration-file",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/public-networks/how-to/configuration-file.md",tags:[{label:"public networks",permalink:"/23.10.3/tags/public-networks"},{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1721335944,formattedLastUpdatedAt:"Jul 18, 2024",sidebarPosition:3,frontMatter:{title:"Use a configuration file",sidebar_position:3,description:"Specify options in the Besu configuration file.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use the Engine API",permalink:"/23.10.3/public-networks/how-to/use-engine-api"},next:{title:"Create and send transactions",permalink:"/23.10.3/public-networks/how-to/send-transactions"}},c={},l=[{value:"TOML specification",id:"toml-specification",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-the-hyperledger-besu-configuration-file",children:"Use the Hyperledger Besu configuration file"}),"\n",(0,o.jsx)(n.p,{children:"To specify command line options in a file, use a TOML configuration file."}),"\n",(0,o.jsxs)(n.p,{children:["Save the configuration file and reuse it across node startups. To specify the configuration file, use the ",(0,o.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#config-file",children:(0,o.jsx)(n.code,{children:"--config-file"})})," option."]}),"\n",(0,o.jsxs)(n.p,{children:["To override an option specified in the configuration file, either specify the same option on the command line or as an ",(0,o.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#specify-options",children:"environment variable"}),". For options specified in more than one place, the order of precedence is command line, environment variable, configuration file."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The configuration file is used for node-level settings. You can specify network-wide settings in the ",(0,o.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/genesis-file",children:"genesis file"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"toml-specification",children:"TOML specification"}),"\n",(0,o.jsxs)(n.p,{children:["The configuration file must be a valid TOML file composed of key/value pairs. Each key is the same as the corresponding command line option name without the leading dashes (",(0,o.jsx)(n.code,{children:"--"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"Values must conform to TOML specifications for string, numbers, arrays, and booleans. Specific differences between the command line and the TOML file format are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Comma-separated lists on the command line are string arrays in the TOML file."}),"\n",(0,o.jsxs)(n.li,{children:["Enclose file paths, hexadecimal numbers, URLs, and <host",":port","> values in quotes."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Table headings are ignored in TOML files. If you specify a valid Besu option under a table heading in the configuration file, Besu ignores the table heading and reads the option in the same way it does for options not under table headings."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options",children:"command line reference"})," includes configuration file examples for each option."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",metastring:'title="Sample TOML configuration file"',children:'# Valid TOML config file\ndata-path="~/besudata" # Path\n\n# Network\nbootnodes=["enode://001@123:4567", "enode://002@123:4567", "enode://003@123:4567"]\n\np2p-host="1.2.3.4"\np2p-port=1234\nmax-peers=42\n\nrpc-http-host="5.6.7.8"\nrpc-http-port=5678\n\nrpc-ws-host="9.10.11.12"\nrpc-ws-port=9101\n\n# Chain\ngenesis-file="~/genesis.json" # Path to the custom genesis file\n\n# Mining\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Starting Besu with a configuration file"',children:"besu --config-file=/home/me/me_node/config.toml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);