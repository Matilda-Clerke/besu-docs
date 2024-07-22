"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78165],{7893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(85893),a=t(11151);const r={title:"Deploy a smart contract",sidebar_position:1,description:"deploying smart contracts",tags:["private networks"]},c="Deploy smart contracts to an Ethereum chain",o={id:"private-networks/tutorials/contracts/index",title:"Deploy a smart contract",description:"deploying smart contracts",source:"@site/versioned_docs/version-24.5.2/private-networks/tutorials/contracts/index.md",sourceDirName:"private-networks/tutorials/contracts",slug:"/private-networks/tutorials/contracts/",permalink:"/24.5.2/private-networks/tutorials/contracts/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/private-networks/tutorials/contracts/index.md",tags:[{label:"private networks",permalink:"/24.5.2/tags/private-networks"}],version:"24.5.2",lastUpdatedAt:1721335944,formattedLastUpdatedAt:"Jul 18, 2024",sidebarPosition:1,frontMatter:{title:"Deploy a smart contract",sidebar_position:1,description:"deploying smart contracts",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a permissioned network",permalink:"/24.5.2/private-networks/tutorials/permissioning/"},next:{title:"Transfer account funds",permalink:"/24.5.2/private-networks/tutorials/contracts/transfer-funds"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use <code>eth_sendSignedTransaction</code>",id:"use-eth_sendsignedtransaction",level:2},{value:"Use <code>eth_sendTransaction</code>",id:"use-eth_sendtransaction",level:2},{value:"Use <code>eea_sendRawTransaction</code> for private contracts with web3js-quorum",id:"use-eea_sendrawtransaction-for-private-contracts-with-web3js-quorum",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-smart-contracts-to-an-ethereum-chain",children:"Deploy smart contracts to an Ethereum chain"}),"\n",(0,s.jsx)(n.p,{children:"This tutorial shows you how to deploy smart contracts as transactions to a network."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial requires a local blockchain network. You can use the ",(0,s.jsx)(n.a,{href:"/24.5.2/private-networks/tutorials/quickstart",children:"Developer Quickstart"})," to rapidly generate one. If deploying a private contract, enable privacy on the network (public contracts can also be deployed on privacy-enabled networks)."]}),"\n",(0,s.jsxs)(n.h2,{id:"use-eth_sendsignedtransaction",children:["Use ",(0,s.jsx)(n.code,{children:"eth_sendSignedTransaction"})]}),"\n",(0,s.jsxs)(n.p,{children:["To deploy a smart contract using ",(0,s.jsx)(n.a,{href:"https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#sendsignedtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendSignedTransaction"})}),", use an account's private key to sign and serialize the transaction, and send the API request."]}),"\n",(0,s.jsxs)(n.p,{children:["This example uses the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/web3",children:"web3js"})," library to make the API calls."]}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/common/smart_contracts/privacy/contracts/SimpleStorage.sol",children:(0,s.jsx)(n.code,{children:"SimpleStorage.sol"})})," smart contract as an example, create a new file called ",(0,s.jsx)(n.code,{children:"compile.js"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="compile.js"',children:'const fs = require("fs").promises;\nconst solc = require("solc");\n\nasync function main() {\n  // Load the contract source code\n  const sourceCode = await fs.readFile("SimpleStorage.sol", "utf8");\n  // Compile the source code and retrieve the ABI and bytecode\n  const { abi, bytecode } = compile(sourceCode, "SimpleStorage");\n  // Store the ABI and bytecode into a JSON file\n  const artifact = JSON.stringify({ abi, bytecode }, null, 2);\n  await fs.writeFile("SimpleStorage.json", artifact);\n}\n\nfunction compile(sourceCode, contractName) {\n  // Create the Solidity Compiler Standard Input and Output JSON\n  const input = {\n    language: "Solidity",\n    sources: { main: { content: sourceCode } },\n    settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },\n  };\n  // Parse the compiler output to retrieve the ABI and bytecode\n  const output = solc.compile(JSON.stringify(input));\n  const artifact = JSON.parse(output).contracts.main[contractName];\n  return {\n    abi: artifact.abi,\n    bytecode: artifact.evm.bytecode.object,\n  };\n}\n\nmain().then(() => process.exit(0));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"compile.js"})," to get the smart contract's output JSON:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node compile.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"solc"})," to get the contract's bytecode and ABI:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"solc SimpleStorage.sol --bin --abi\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have the bytecode and ABI, you can rename the output files to make them easier to use; this tutorial refers to them as ",(0,s.jsx)(n.code,{children:"SimpleStorage.bin"})," and ",(0,s.jsx)(n.code,{children:"SimpleStorage.abi"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Create a new file named ",(0,s.jsx)(n.code,{children:"public_tx.js"})," to send the transaction (or run the following commands in a JavaScript console). The Developer Quickstart provides an ",(0,s.jsx)(n.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/public_tx.js",children:"example of a public transaction script"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'titl="public_tx.js"',children:'const web3 = new Web3(host);\n// use an existing account, or make an account\nconst privateKey =\n  "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";\nconst account = web3.eth.accounts.privateKeyToAccount(privateKey);\n\n// read in the contracts\nconst contractJsonPath = path.resolve(__dirname, "SimpleStorage.json");\nconst contractJson = JSON.parse(fs.readFileSync(contractJsonPath));\nconst contractAbi = contractJson.abi;\nconst contractBinPath = path.resolve(__dirname, "SimpleStorage.bin");\nconst contractBin = fs.readFileSync(contractBinPath);\n// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode\nconst contractConstructorInit =\n  "000000000000000000000000000000000000000000000000000000000000002F";\n\n// get txnCount for the nonce value\nconst txnCount = await web3.eth.getTransactionCount(account.address);\n\nconst rawTxOptions = {\n  nonce: web3.utils.numberToHex(txnCount),\n  from: account.address,\n  to: null, //public tx\n  value: "0x00",\n  data: "0x" + contractBin + contractConstructorInit, // contract binary appended with initialization value\n  gasPrice: "0x0", //ETH per unit of gas\n  gasLimit: "0x24A22", //max number of gas units the tx is allowed to use\n};\nconsole.log("Creating transaction...");\nconst tx = new Tx(rawTxOptions);\nconsole.log("Signing transaction...");\ntx.sign(privateKey);\nconsole.log("Sending transaction...");\nvar serializedTx = tx.serialize();\nconst pTx = await web3.eth.sendSignedTransaction(\n  "0x" + serializedTx.toString("hex").toString("hex"),\n);\nconsole.log("tx transactionHash: " + pTx.transactionHash);\nconsole.log("tx contractAddress: " + pTx.contractAddress);\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"rawTxOptions"})," contains the following fields:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"})," - the number of transactions sent from an address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"})," - address of the sending account. For example ",(0,s.jsx)(n.code,{children:"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"})," - address of the receiver. To deploy a contract, set to ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gas"})," - amount of gas provided by the sender for the transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasPrice"})," - price for each unit of gas the sender is willing to pay."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - binary of the contract (in this example there's also a constructor initialization value, so we append that to the binary value)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," - amount of Ether/Wei transferred from the sender to the recipient."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Run the ",(0,s.jsx)(n.code,{children:"public_tx.js"})," to send the transaction:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node public_tx.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example code creates the transaction ",(0,s.jsx)(n.code,{children:"tx"}),", signs it with the private key of the account, serializes it, then calls ",(0,s.jsx)(n.code,{children:"eth_sendSignedTransaction"})," to deploy the contract."]}),"\n",(0,s.jsxs)(n.h2,{id:"use-eth_sendtransaction",children:["Use ",(0,s.jsx)(n.code,{children:"eth_sendTransaction"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"https://ethereum.github.io/execution-apis/api-documentation",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})})," as an alternative to ",(0,s.jsx)(n.code,{children:"eth_sendSignedTransaction"}),". However, Hyperledger Besu does not support the ",(0,s.jsx)(n.code,{children:"eth_sendTransaction"})," API call and keeps account management separate for stronger security. Configure ",(0,s.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/",children:"Web3Signer"})," with your Besu node to make the ",(0,s.jsx)(n.code,{children:"eth_sendTransaction"})," API call."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the following parameters to the ",(0,s.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/reference/api/json-rpc#eth_sendtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})})," call to Web3Signer. Web3Signer converts the request to an ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/api/#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})})," call that Besu uses:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"})," - address of the receiver. To deploy a contract, set to ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"})," - address of the sender account. For example ",(0,s.jsx)(n.code,{children:"0x9b790656b9ec0db1936ed84b3bea605873558198"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gas"})," - amount of gas provided by the sender for the transaction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasPrice"})," - price for each unit of gas the sender is willing to pay"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - one of the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For contract deployments (this use case) - compiled code of the contract"}),"\n",(0,s.jsxs)(n.li,{children:["For contract interactions - hash of the invoked method signature and encoded parameters (see ",(0,s.jsx)(n.a,{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html",children:"Ethereum Contract ABI"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"For simple ether transfers - empty"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"title=\"'eth_sendTransaction' parameters\"",children:'params: {\n  "to": null,\n  "from": "0x9b790656b9ec0db1936ed84b3bea605873558198",\n  "gas": "0x76c0",\n  "gasPrice": "0x9184e72a000",\n  "data": "0x608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Make the request using ",(0,s.jsx)(n.code,{children:"eth_sendTransaction"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title=\"'eth_sendTransaction' curl HTTP request\"",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{"from":"0x9b790656b9ec0db1936ed84b3bea605873558198", "to":null, "gas":"0x7600","gasPrice":"0x9184e72a000", "data":"0x608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033"}], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"use-eea_sendrawtransaction-for-private-contracts-with-web3js-quorum",children:["Use ",(0,s.jsx)(n.code,{children:"eea_sendRawTransaction"})," for private contracts with web3js-quorum"]}),"\n",(0,s.jsxs)(n.p,{children:["To deploy a private contract to another node or ",(0,s.jsx)(n.a,{href:"/24.5.2/private-networks/concepts/privacy/privacy-groups",children:"privacy group"})," member, use the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/web3js-quorum",children:"web3js-quorum"})," library and the ",(0,s.jsx)(n.a,{href:"/24.5.2/public-networks/reference/api/#eea_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eea_sendRawTransaction"})})," API call. You must use this API call instead of ",(0,s.jsx)(n.a,{href:"https://ethereum.github.io/execution-apis/api-documentation",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})})," because Hyperledger Besu keeps account management separate for stronger security."]}),"\n",(0,s.jsxs)(n.p,{children:["The Developer Quickstart provides an ",(0,s.jsx)(n.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/private_tx.js",children:"example of a private transaction script"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This example uses the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/web3",children:"web3js"})," library to make the API calls."]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://consensys.github.io/web3js-quorum/latest/module-priv.html#~generateAndSendRawTransaction",children:(0,s.jsx)(n.code,{children:"web3.priv.generateAndSendRawTransaction"})})," by running the following commands in a JavaScript console, or by including them in a ",(0,s.jsx)(n.code,{children:"private_tx.js"})," file and running ",(0,s.jsx)(n.code,{children:"node private_tx.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"title=\"'private_tx.js' using 'web3.priv.generateAndSendRawTransaction'\"",children:'const Web3 = require("web3");\nconst Web3Quorum = require("web3js-quorum");\n\nconst bytecode =\n  "608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033";\n// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode\nconst contractConstructorInit =\n  "000000000000000000000000000000000000000000000000000000000000002F";\n\nconst chainId = 1337;\nconst web3 = new Web3(clientUrl);\nconst web3quorum = new Web3Quorum(web3, chainId);\n\nconst txOptions = {\n  data: "0x" + bytecode + contractConstructorInit,\n  privateKey: fromPrivateKey,\n  privateFrom: fromPublicKey,\n  privateFor: [toPublicKey],\n};\nconsole.log("Creating contract...");\nconst txHash = await web3quorum.priv.generateAndSendRawTransaction(txOptions);\nconsole.log("Getting contractAddress from txHash: ", txHash);\n\nconst privateTxReceipt = await web3quorum.priv.waitForTransactionReceipt(\n  txHash,\n);\nconsole.log("Private Transaction Receipt: ", privateTxReceipt);\nreturn privateTxReceipt;\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"txOptions"})," contains the following field:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - compiled code of the contract (in this example there's also a constructor initialization value, so we append that to the bytecode)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The deployment process includes creating the client as in the previous examples, but rather than deploying the contract with ",(0,s.jsx)(n.code,{children:"to: null"}),", it instead sends the transaction with ",(0,s.jsx)(n.code,{children:"privateFor: [memberPublicKey/s]"}),". Once you make the API call, you receive a ",(0,s.jsx)(n.code,{children:"transactionHash"}),", which you can use to get a ",(0,s.jsx)(n.code,{children:"transactionReceipt"})," containing the contract's address."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"This example doesn't use a privacy group and makes a simple node-to-node transaction. To use a privacy group:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create the privacy group using the public keys of the nodes in the group."}),"\n",(0,s.jsxs)(n.li,{children:["Specify the ",(0,s.jsx)(n.code,{children:"privacyGroupId"})," instead of the ",(0,s.jsx)(n.code,{children:"privateFor"})," option in the txOptions above and then send the transaction."]}),"\n"]}),(0,s.jsxs)(n.p,{children:["The Developer Quickstart provides an ",(0,s.jsx)(n.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/besu/smart_contracts/privacy/scripts/private_tx_privacy_group.js",children:"example of a private transaction with a privacy group"}),"."]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var s=t(67294);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);