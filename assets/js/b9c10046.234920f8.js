"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[4765],{4137:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>m});var r=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},l="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=n(t,["components","mdxType","originalType","parentName"]),l=c(o),h=a,m=l["".concat(p,".").concat(h)]||l[h]||u[h]||i;return o?r.createElement(m,s(s({ref:e},d),{},{components:o})):r.createElement(m,s({ref:e},d))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,s=new Array(i);s[0]=h;var n={};for(var p in e)hasOwnProperty.call(e,p)&&(n[p]=e[p]);n.originalType=t,n[l]="string"==typeof t?t:a,s[1]=n;for(var c=2;c<i;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1740:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var r=o(7462),a=(o(7294),o(4137));const i={},s="Automatic Subscription",n={unversionedId:"smooth/subscribe-to-smooth/automatic",id:"smooth/subscribe-to-smooth/automatic",title:"Automatic Subscription",description:"This is the simplest way to subscribe to Smooth. It consists of changing the fee recipient of your validator to Smooth's address and subscribing automatically when proposing your next block.",source:"@site/docs/smooth/subscribe-to-smooth/automatic.md",sourceDirName:"smooth/subscribe-to-smooth",slug:"/smooth/subscribe-to-smooth/automatic",permalink:"/docs/smooth/subscribe-to-smooth/automatic",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/smooth/subscribe-to-smooth/automatic.md",tags:[],version:"current",frontMatter:{},sidebar:"smoothSidebar",previous:{title:"Subscribing to [Smooth](https://smooth.dappnode.io/)",permalink:"/docs/smooth/subscribe-to-smooth/overview"},next:{title:"Manual Subscription",permalink:"/docs/smooth/subscribe-to-smooth/manual"}},p={},c=[{value:"Step 1: Change your fee recipient to Smooth&#39;s address.",id:"step-1-change-your-fee-recipient-to-smooths-address",level:3},{value:"Step 2: Check your subscription status!",id:"step-2-check-your-subscription-status",level:3}],d={toc:c},l="wrapper";function u(t){let{components:e,...i}=t;return(0,a.kt)(l,(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automatic-subscription"},"Automatic Subscription"),(0,a.kt)("p",null,"This is the simplest way to subscribe to ",(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),". It consists of changing the fee recipient of your validator to Smooth's address and subscribing automatically when proposing your next block."),(0,a.kt)("admonition",{title:"Before automatically subscribing to Smooth!",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Only validators with ETH1 withdrawal addresses can be subscribed to Smooth. If you have a validator with a BLS withdrawal address, please update it to an ETH1 withdrawal address before subscribing to Smooth."),(0,a.kt)("p",{parentName:"admonition"},"Ensure that you have control over the ETH1 withdrawal address of the validators you plan to subscribe to Smooth. This address is the one you will need to use when logging into Smooth's website and manage your validators going forward. Only the withdrawal address has the capability to claim rewards generated by your validators from Smooth.")),(0,a.kt)("h3",{id:"step-1-change-your-fee-recipient-to-smooths-address"},"Step 1: Change your fee recipient to Smooth's address."),(0,a.kt)("p",null,"Go to your dappnode's ",(0,a.kt)("a",{parentName:"p",href:"http://brain.web3signer.dappnode/"},"staking brain")," and change the fee recipient of the validators you want to subscribe to Smooth's address (",(0,a.kt)("inlineCode",{parentName:"p"},"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"),"). Once ",(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," receives the rewards from your validator, it will automatically subscribe your validator, and you will start receiving rewards from other members.\n",(0,a.kt)("img",{alt:"fee_recipient",src:o(4257).Z,width:"2728",height:"552"})),(0,a.kt)("admonition",{title:"Keep the fee recipient set to Smooth's address!",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"It is extremely important that you keep the fee recipient of your validator set to Smooth's address (",(0,a.kt)("inlineCode",{parentName:"p"},"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"),") as long as it is subscribed to ",(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),". If, at any point, you change the fee recipient of your validator and propose a block without unsubscribing first, you will be banned from ",(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," and will not be able to participate in it again.")),(0,a.kt)("h3",{id:"step-2-check-your-subscription-status"},"Step 2: Check your subscription status!"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth's website")," and log in with your wallet. A list of all the validators with the same withdrawal address as your logged in wallet will appear. Once the validator proposes a block, it will appear as subscribed. We recommend you familiarize yourself with this website! It is the place where you will manage your validators going forward."))}u.isMDXComponent=!0},4257:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/smooth_fee_recipient-9a97308ed0c601ccc84b0295efe34cd4.png"}}]);