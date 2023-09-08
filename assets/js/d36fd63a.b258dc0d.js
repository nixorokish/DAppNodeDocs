"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[6593],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(4137));const s={},i="LUKSO",r={unversionedId:"user/staking/lukso/solo",id:"user/staking/lukso/solo",title:"LUKSO",description:"LUKSO is the next-gen blockchain designed with creative industries in mind. Imagine a digital realm where the spirit of Ethereum meets the world of fashion, art, and design. That's LUKSO for you!",source:"@site/docs/user/staking/lukso/solo.md",sourceDirName:"user/staking/lukso",slug:"/user/staking/lukso/solo",permalink:"/docs/user/staking/lukso/solo",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/lukso/solo.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Gnosis Chain",permalink:"/docs/user/staking/gnosis-chain/solo"},next:{title:"Dappnode Monitoring Service (DMS)",permalink:"/docs/user/packages/dms"}},l={},p=[{value:"What Makes LUKSO Special?",id:"what-makes-lukso-special",level:2},{value:"Joining LUKSO as a validator",id:"joining-lukso-as-a-validator",level:2},{value:"1. Install the necessary LUKSO packages on Dappnode.",id:"1-install-the-necessary-lukso-packages-on-dappnode",level:2},{value:"2. Creating validator keys for LUKSO",id:"2-creating-validator-keys-for-lukso",level:2},{value:"3: Deposit LYX into the LUKSO deposit contract",id:"3-deposit-lyx-into-the-lukso-deposit-contract",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lukso"},"LUKSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LUKSO")," is the next-gen blockchain designed with creative industries in mind. Imagine a digital realm where the spirit of Ethereum meets the world of fashion, art, and design. That's LUKSO for you!"),(0,o.kt)("h2",{id:"what-makes-lukso-special"},"What Makes LUKSO Special?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Universal Profiles (UPs)"),", supported by the ERC-725 standard, are LUKSO's magic trick. They act like digital passports in the LUKSO universe, ensuring that every creation and transaction carries the unique signature of its creator."),(0,o.kt)("h2",{id:"joining-lukso-as-a-validator"},"Joining LUKSO as a validator"),(0,o.kt)("p",null,"LUKSO shares more than just roots with Ethereum. It uses the same trusted tools to run its network. Some of the main Ethereum clients are also compatible with LUKSO. For becoming a validator in LUKSO, you'll need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the necessary LUKSO packages on Dappnode."),(0,o.kt)("li",{parentName:"ol"},"Create validator keys for LUKSO."),(0,o.kt)("li",{parentName:"ol"},"Deposit LYX into the LUKSO Consensus Chain deposit contract.")),(0,o.kt)("h2",{id:"1-install-the-necessary-lukso-packages-on-dappnode"},"1. Install the necessary LUKSO packages on Dappnode."),(0,o.kt)("p",null,"Similar to Ethereum mainnet, Dappnode makes it very easy to set up your LUKSO validator. Here's what the Stakers UI looks like for LUKSO:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stakers",src:a(5542).Z,width:"2846",height:"1512"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Execution Clients")," (Choose one):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Lukso Geth"),(0,o.kt)("li",{parentName:"ul"},"Lukso Erigon (Coming soon to Dappnode)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consensus Clients")," (Choose one):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prysm Lukso"),(0,o.kt)("li",{parentName:"ul"},"Teku Lukso\n-Web3Signer LUKSO")))),(0,o.kt)("admonition",{title:"Checkpoint Sync is your friend for syncing Consensus Clients",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Execution clients take a long time to sync. Hence, once you start staking with one you will most likely stick with it. However, you can switch consensus clients at any time thanks to the magic of "checkpoint sync". Make sure to toggle the "use checksync" option when installing your consensus client, and you can change at any point from one to another with barely any downtime.')),(0,o.kt)("p",null,"After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs."),(0,o.kt)("h2",{id:"2-creating-validator-keys-for-lukso"},"2. Creating validator keys for LUKSO"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-wagyu-key-gen/releases"},"LUKSO Wagyu Keygen Tool")," to generate your validator keys. This is a fork of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stake-house/wagyu-key-gen/releases"},"Wagyu Keygen tool")," for Ethereum mainnet.")),(0,o.kt)("admonition",{title:"What are all these keys?",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udd12 ",(0,o.kt)("strong",{parentName:"p"},"Validator keys")," will be online (stored in your Dappnode) and signing the blocks of the LUKSO blockchain. You will create them from a ",(0,o.kt)("strong",{parentName:"p"},"mnemonic phrase"),", which is important to keep safe as it's the ",(0,o.kt)("strong",{parentName:"p"},"only way")," to regenerate these validator keys if you lose them."),(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udee1\ufe0f The damage of getting your ",(0,o.kt)("strong",{parentName:"p"},"mnemonic phrase")," compromised has been reduced dramatically since withdrawals are already activated in LUKSO (Shapella upgrade), as you can create the keystores with a set withdrawal address and nobody can change that after, even if they get to your ",(0,o.kt)("strong",{parentName:"p"},"mnemonic phrase"),". Nevertheless, if you lose the keystore and the mnemonic, you will not be able to sign an exit message and you will be forced to validate forever."),(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udd11 ",(0,o.kt)("strong",{parentName:"p"},"Withdrawal address")," this brings us to the withdrawal address, which is the address that will receive all the balance above 32 LYX while your validator is active, and all your balance above 32 LYX when you exit the validator set. You need to keep this address safe as it's where your LYX will go, and cannot be changed.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest release of the LUKSO Wagyu Keygen Tool from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-wagyu-key-gen/releases"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the LUKSO Wagyu Keygen Tool. You will be given 2 options, either create a new mnemonic or import an existing mnemonic. The GUI is very user friendly and explains all steps along the way."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Wagyu - 1st screen",src:a(6583).Z,width:"1896",height:"1606"})),(0,o.kt)("p",null,"You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place."),(0,o.kt)("p",null,"To ensure that you have copied it somewhere, it will ask you to type it again."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Wagyu - 2nd screen",src:a(9862).Z,width:"1896",height:"1606"})),(0,o.kt)("p",null,"Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Wagyu - 3rd screen",src:a(1131).Z,width:"1888",height:"1430"})),(0,o.kt)("p",null,"Select a folder where to save the keys."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Wagyu - 4th screen",src:a(5421).Z,width:"1886",height:"1424"})),(0,o.kt)("p",null,"Wait for the keys to be generated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Wagyu - 5th screen",src:a(8058).Z,width:"1888",height:"1426"})),(0,o.kt)("p",null,"And you are done! You will find your keys in the folder you selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Wagyu - 6th screen",src:a(8613).Z,width:"1886",height:"1430"})),(0,o.kt)("p",null,"You are now done with the key generation process, and your generated keys and deposit data are in the folder/directory chosen, and displayed at the top of the final page."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udca1 ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"Want to learn more about Ethereum keys and key generation?")),"\ud83d\udca1",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/#two-types-of-keys"},"Learn more"))),(0,o.kt)("p",null,"Now that you\u2019ve generated your deposit data and keystores, go ahead and upload your keystores to Web3Signer LUKSO, the package that you installed during step 1."),(0,o.kt)("p",null,"Return to the Dappnode UI and navigate to the Stakers > LUKSO menu. Your Web3Signer will have a link saying ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload Keystores")," . If it doesn\u2019t, make sure that you have waited enough time since step 1 for all the packages to be installed (around 5 minutes) and refresh the page."),(0,o.kt)("p",null,"Then click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Import Keystores")," button on the lower part of the Web3Signer LUKSO UI."),(0,o.kt)("p",null,"Here browse for the keystore file(s) you generated in the previous step and enter them along with the password you chose to secure your keystores."),(0,o.kt)("p",null,"You are now ready to fund these validator accounts and start validating in LUKSO!"),(0,o.kt)("h2",{id:"3-deposit-lyx-into-the-lukso-deposit-contract"},"3: Deposit LYX into the LUKSO deposit contract"),(0,o.kt)("p",null,"The final step is to fund your validator with the 32 LYX necessary to register as a validator and start receiving validation work!"),(0,o.kt)("p",null,"To do this, you will need to send 32 LYX to the LUKSO deposit contract. We will be using the official LUKSO launchpad for this."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://deposit.mainnet.lukso.network/en/"},"the LUKSO launchpad")),(0,o.kt)("p",null,"Read all the advisories... they contain important information that will help you understand the whole process!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Launchpad 1",src:a(5773).Z,width:"2218",height:"1460"})),(0,o.kt)("p",null,"Because we are using Dappnode and we take care of the infrastructure and the software installation, we can skip the next sections:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Launchpad 2",src:a(8846).Z,width:"2878",height:"1480"})),(0,o.kt)("p",null,'We continue until the "Upload Deposit Data" section.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Launchpad 3",src:a(8257).Z,width:"2602",height:"1502"})),(0,o.kt)("p",null,"Here we will upload the deposit data that we generated in the previous step. You can find it in the folder you chose when generating the keys. It will be a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_data-*.json")),(0,o.kt)("p",null,"The moment to do the deposit is here! Connect your wallet with the 32 LYX and ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/chain/42"},"make sure")," you're in the LUKSO network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Launchpad 4",src:a(6135).Z,width:"2602",height:"1502"})),(0,o.kt)("p",null,"And follow the steps to send the 32 LYX to the deposit contract!"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please review your deposit address! MAKE SURE YOU ARE SENDING THE 32 LYX TO THE RIGHT DEPOSIT ADDRESS!")),(0,o.kt)("p",null,"After the deposit is done, you will be able to check the progress of your deposit by searching for your validator key in the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.consensus.mainnet.lukso.network/"},"LUKSO Consensus Explorer"),". You can get a direct link to this by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"View in Beaconcha.in")," button in the upper, right corner of the Dappnode Web3signer LUKSO UI, where you uploaded the keystores"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LUKSO Web3Signer",src:a(1952).Z,width:"2822",height:"1398"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remember"),": Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions."))}c.isMDXComponent=!0},5773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-launchpad1-feee8e797237cfdda9065a0778c87e82.png"},8846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-launchpad2-a06471841b30d5377c567417d618aa98.png"},8257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-launchpad3-bca6aef08176b4d71d978494ad6c947e.png"},6135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-launchpad4-fda4750d49c92053aff1fe0e3a0a02f2.png"},5542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-staking-screenshot-605e7ed6329f5a73b11a6b8cc4015c9c.png"},6583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-wagyu1-e38f326b1d87e8192b3cfe2193d5c8ed.png"},9862:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-wagyu2-118e3f6a51c4c39294effac0a4a6afe3.png"},1952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lukso-web3signer-31c35566a88612cb0658f7eade5b358a.png"},1131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wagyu4-0673a83463eb844993339ecfdcc59b41.png"},5421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wagyu5-644261c1588e13ba1177d70aef9ecf19.png"},8058:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wagyu6-d5538d2bbd5a01f47d94c6c5b29b3abf.png"},8613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wagyu7-8c346a2c9519b98a530d1005a69247f2.png"}}]);