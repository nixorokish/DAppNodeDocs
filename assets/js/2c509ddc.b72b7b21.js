"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[4840],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=p(o),u=i,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return o?a.createElement(m,s(s({ref:t},c),{},{components:o})):a.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[d]="string"==typeof e?e:i,s[1]=n;for(var p=2;p<r;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9700:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>p});var a=o(7462),i=(o(7294),o(4137));const r={},s="Manual Subscription",n={unversionedId:"smooth/subscribe-to-smooth/manual",id:"smooth/subscribe-to-smooth/manual",title:"Manual Subscription",description:"Would you rather not wait until your next proposed block to subscribe and begin earning rewards? You can take a proactive step and opt for manual subscription right away. During this process, you'll change your validator's fee recipient to Smooth's address, just like in the automatic subscription. However, instead of waiting for your next proposed block, you'll immediately start accumulating rewards from Smooth.",source:"@site/docs/smooth/subscribe-to-smooth/manual.md",sourceDirName:"smooth/subscribe-to-smooth",slug:"/smooth/subscribe-to-smooth/manual",permalink:"/docs/smooth/subscribe-to-smooth/manual",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/smooth/subscribe-to-smooth/manual.md",tags:[],version:"current",frontMatter:{},sidebar:"smoothSidebar",previous:{title:"Automatic Subscription",permalink:"/docs/smooth/subscribe-to-smooth/automatic"},next:{title:"Unsubscribing from Smooth.",permalink:"/docs/smooth/unsubscribe-from-smooth"}},l={},p=[{value:"Step 1: Change your fee recipient to Smooth&#39;s address.",id:"step-1-change-your-fee-recipient-to-smooths-address",level:3},{value:"Step 2: Log in to Smooth&#39;s website.",id:"step-2-log-in-to-smooths-website",level:3},{value:"Step 3: Select your validator.",id:"step-3-select-your-validator",level:3},{value:"Scenario 1: Validator is not registered to any MEV relay.",id:"scenario-1-validator-is-not-registered-to-any-mev-relay",level:4},{value:"Scenario 2: Validator registered to MEV relays but without Smooth&#39;s address as fee recipient in any relay.",id:"scenario-2-validator-registered-to-mev-relays-but-without-smooths-address-as-fee-recipient-in-any-relay",level:4},{value:"Scenario 3: Validator does not have the Smooth&#39;s address as fee recipient in some relays.",id:"scenario-3-validator-does-not-have-the-smooths-address-as-fee-recipient-in-some-relays",level:4},{value:"Scenario 4: Validator is registered to at least one MEV relay and has the correct fee recipient set.",id:"scenario-4-validator-is-registered-to-at-least-one-mev-relay-and-has-the-correct-fee-recipient-set",level:4},{value:"Step 4: Confirm Relays check.",id:"step-4-confirm-relays-check",level:3},{value:"Step 5: Make the deposit and subscribe!",id:"step-5-make-the-deposit-and-subscribe",level:3},{value:"Troubleshooting.",id:"troubleshooting",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manual-subscription"},"Manual Subscription"),(0,i.kt)("p",null,"Would you rather not wait until your next proposed block to subscribe and begin earning rewards? You can take a proactive step and opt for manual subscription right away. During this process, you'll change your validator's fee recipient to Smooth's address, just like in the automatic subscription. However, instead of waiting for your next proposed block, you'll immediately start accumulating rewards from ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),"."),(0,i.kt)("p",null,"The manual subscription is done through ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://smooth.dappnode.io/"},"Smooth's website")),". "),(0,i.kt)("h3",{id:"step-1-change-your-fee-recipient-to-smooths-address"},"Step 1: Change your fee recipient to Smooth's address."),(0,i.kt)("p",null,"Change the fee recipient of your validator to Smooth's address, just as if you were subscribing automatically. In Dappnode, this process is as simple as changing the fee recipient in your ",(0,i.kt)("a",{parentName:"p",href:"http://brain.web3signer.dappnode/"},"staking brain"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"fee_recipient",src:o(4257).Z,width:"2728",height:"552"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This step is extremely important"),". Make sure you're changing the fee recipient of the validators you are going to manually subscribe and that the fee recipient is correctly set to Smooth's address (",(0,i.kt)("inlineCode",{parentName:"p"},"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"),"). If a subscribed validator proposes a block with an incorrect fee recipient, it will be banned from ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," and will not be able to participate in it again."),(0,i.kt)("admonition",{title:"Keep the fee recipient set to Smooth's address!",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"It is crucial that you keep the fee recipient of your validator set to Smooth's address (",(0,i.kt)("inlineCode",{parentName:"p"},"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"),") as long as it is subscribed to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),". If, at any point, you change the fee recipient of your validator and propose a block without unsubscribing first, you will be banned from ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," and will not be able to participate in it again.")),(0,i.kt)("h3",{id:"step-2-log-in-to-smooths-website"},"Step 2: Log in to Smooth's website."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth's website")," and log in with your wallet. A list of all the validators with the same withdrawal address as your logged in wallet will appear."),(0,i.kt)("h3",{id:"step-3-select-your-validator"},"Step 3: Select your validator."),(0,i.kt)("p",null,"Select the validator you want to subscribe to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),' by clicking on the "Subscribe" button.\n',(0,i.kt)("img",{alt:"my_validators",src:o(2824).Z,width:"1033",height:"393"})),(0,i.kt)("p",null,'When clicking on the "Subscribe" button, ',(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," will check if your validator is registered to any MEV relay. If it is, it will also check if the fee recipient of your validator is set to Smooth's address in each relay. ",(0,i.kt)("strong",{parentName:"p"},"Four different dialogs can appear"),", depending on the state of your validator and the MEV relays it is registered to."),(0,i.kt)("h4",{id:"scenario-1-validator-is-not-registered-to-any-mev-relay"},"Scenario 1: Validator is not registered to any MEV relay."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_no_relays.png",alt:"no_relays",width:"400"})),(0,i.kt)("p",null,'When doing a manual subscription, it is obligatory to be registered in at least one MEV relay. In Dappnode, registering and using a relay is as simple as selecting the desired relay in the "MEV Boost" Card at the ',(0,i.kt)("a",{parentName:"p",href:"http://my.dappnode/stakers/ethereum/"},"Stakers UI"),". Once you have selected at least one relay, you can go back to the ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),' website and click on the "Subscribe" button again.'),(0,i.kt)("h4",{id:"scenario-2-validator-registered-to-mev-relays-but-without-smooths-address-as-fee-recipient-in-any-relay"},"Scenario 2: Validator registered to MEV relays but without Smooth's address as fee recipient in any relay."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_subscription_norelays.png",alt:"incorrect_fee_recipient",width:"400"})),(0,i.kt)("p",null,"Please make sure that you have correctly done the first step of this guide! This dialog means that not a single relay has reflected your fee recipient change to Smooth's address. If running a dappnode, make sure your MEV boost package is running!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'It can take up to a few minutes for relays to reflect your fee recipient change. If you have already changed your fee recipient but this alert still appears, please check the "Troubleshooting" section down below for more information.')),(0,i.kt)("h4",{id:"scenario-3-validator-does-not-have-the-smooths-address-as-fee-recipient-in-some-relays"},"Scenario 3: Validator does not have the Smooth's address as fee recipient in some relays."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_incorrect_fee_recipient.png",alt:"incorrect_fee_recipient",width:"400"})),(0,i.kt)("p",null,"If this dialog appears, it means that your validator's fee recipient is set to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," in some relays while also being set to an incorrect address in others. This situation likely arises because your validator was registered in a relay it no longer uses, and the fee recipient in that specific relay wasn't updated accordingly."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Relays that you no longer use won\'t reflect the fee recipient changes you did for each validator in your staking brain. If you have already changed your fee recipient but the warning still appears, please check the "Troubleshooting" section down below for more information.')),(0,i.kt)("h4",{id:"scenario-4-validator-is-registered-to-at-least-one-mev-relay-and-has-the-correct-fee-recipient-set"},"Scenario 4: Validator is registered to at least one MEV relay and has the correct fee recipient set."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_correct_fee_recipient.png",alt:"correct_fee_recipient",width:"400"})),(0,i.kt)("p",null,"This is the dialog you want to see! If you see this dialog, it means that your validator is registered to at least one MEV relay, and that the fee recipient of your validator is set to Smooth's address in all relays it has been registered to. In other words, this means that your validator is ready to subscribe to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),"!"),(0,i.kt)("h3",{id:"step-4-confirm-relays-check"},"Step 4: Confirm Relays check."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_mev_blocks.png",alt:"mev_blocks",width:"400"})),(0,i.kt)("p",null,'This step is just a confirmation of the relays your validator has the correct fee recipient set in. Click on "Next" to continue the subscription process, we\'re almost there!'),(0,i.kt)("h3",{id:"step-5-make-the-deposit-and-subscribe"},"Step 5: Make the deposit and subscribe!"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_make_deposit.png",alt:"deposit",width:"400"})),(0,i.kt)("p",null,"This is the last step! Here, you will make the deposit to subscribe your validator to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),". The deposit is a one-time upfront payment that will be returned to you as Claimable rewards when proposing your first block to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),". The deposit is 0.01 ETH, and it is used to prevent spam and malicious validators from subscribing to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),"."),(0,i.kt)("p",null,"Once the deposit transaction is processed by the chain, your validator will be subscribed to ",(0,i.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," and you will start receiving rewards from other members of the pool!"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/smooth_subscribe_success.png",alt:"subscription_success",width:"400"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'Since the Oracle operates with only finalized data, it will take up to 35 minutes to process your subscription. Your "My Validator" table will be updated instantly, but it may take a while to see how "Total Subscribers" counter increases. To know more, visit the ',(0,i.kt)("a",{parentName:"p",href:"/docs/smooth/deep-dive-into-smooth/overview"},"Deep Dive into Smooth")," section.")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"I have changed my fee recipient but the ",(0,i.kt)("i",null,'"Fee recipient warning"')," warning still appears!")),"If you have changed your fee recipient to Smooth's address (",(0,i.kt)("code",null,"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"),") but this warning still appears, it could be because of two reasons:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"The relays you are registered to are not reflecting the change in the fee recipient yet. It can take up to a few minutes for the relays to reflect your  fee recipient update. This is something that is out of Smooth's control. We recommend you to wait a few minutes and try again."),(0,i.kt)("li",null,"The fee recipient is only updated in your current ",(0,i.kt)("strong",null,"active")," relays. This means that if you used to be registered to a relay, but you are not using it anymore, the fee recipient of your validator will not be updated in that relay. This is something expected and that it wont affect your validator's subscription to [Smooth](https://smooth.dappnode.io/). If you want to update the fee recipient in the relays you are no longer registered to, you can quickly register and unregister again to the outdated relays to force an update the fee recipient there.")),"To clarify: As long as the fee recipient of your validator is set to Smooth's address in your ",(0,i.kt)("a",{href:"http://brain.web3signer.dappnode/"},"staking brain"),", you can continue the subscription process normally."))}h.isMDXComponent=!0},4257:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/smooth_fee_recipient-9a97308ed0c601ccc84b0295efe34cd4.png"},2824:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/smooth_my_validators-72848a79b68c9a1ab67d754537f6e2c9.png"}}]);