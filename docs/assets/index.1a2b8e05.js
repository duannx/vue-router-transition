import{d as u,r as d,c as f,o as c,a as m,F as L,b as A,e as g,w as v,f as r,t as h,g as y,u as C,h as b,i as k,j as D,k as I,l as N,m as O}from"./vendor.5d1b53ff.js";const B=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};B();const R=u({setup(t){return(i,n)=>{const o=d("RouterViewTransition");return c(),f(o,{defaultClassTransition:"transition-active"})}}});var _=(t,i)=>{const n=t.__vccOpts||t;for(const[o,e]of i)n[o]=e;return n};const S=u({props:{collections:{type:Array,required:!0}},setup(){return{}}}),V={key:0,class:"list"},T={class:"w-full h-0 pb-full relative bg-gray-200 rounded-md overflow-hidden"},q=["src"],F={class:"text-xl text-center mt-4 break-words"};function P(t,i,n,o,e,s){const a=d("router-link");return t.collections?(c(),m("div",V,[(c(!0),m(L,null,A(t.collections,p=>(c(),f(a,{to:p.path,key:p.id},{default:v(()=>[r("div",T,[r("img",{class:"w-full h-full absolute top-0 left-0 object-contain",src:p.image,alt:""},null,8,q)]),r("h2",F,h(p.title),1)]),_:2},1032,["to"]))),128))])):g("",!0)}var x=_(S,[["render",P]]);const j=u({components:{List:x},setup(){return{collections:[{id:1,title:"Dogs - Slide left",path:"/collection/1",image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500"},{id:2,title:"Cats - Slide right",path:"/collection/2",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500"}]}}}),H={class:"page"},X={class:"page-content"},z=r("h1",{class:"text-4xl text-center mt-10"},"Home Page",-1);function E(t,i,n,o,e,s){const a=d("List");return c(),m("div",H,[r("div",X,[z,y(a,{collections:t.collections},null,8,["collections"])])])}var K=_(j,[["render",E]]);const M=u({props:{id:{type:Number,required:!1}},setup(t){const i={id:1,title:"Dog",price:100,collection:{id:1},image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",description:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."},n={id:2,title:"Cat",price:100,collection:{id:2},image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",description:"A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines."},o=C();return{product:b(()=>{let e=+o.currentRoute.value.params.id;return e||(e=t.id),e>=5?n:i})}}}),U={class:"page"},W={key:0,class:"page-content"},Z=k(" Back "),G={class:"text-4xl mt-10"},J={class:"mt-4 text-2xl font-bold"},Q=["src"],Y={class:"mt-4 max-w-lg"};function ee(t,i,n,o,e,s){const a=d("router-link");return c(),m("div",U,[t.product?(c(),m("div",W,[y(a,{class:"mt-4 block font-bold underline",to:{name:"collection",params:{id:t.product.collection.id}}},{default:v(()=>[Z]),_:1},8,["to"]),r("h1",G,h(t.product.title),1),r("div",J,"$"+h(t.product.price),1),r("img",{class:"max-w- mt-6 md:max-w-md",src:t.product.image,alt:""},null,8,Q),r("div",Y,h(t.product.description),1)])):g("",!0)])}var l=_(M,[["render",ee]]);const te=u({components:{List:x},props:{id:{type:Number,required:!1}},setup(t){const i=C(),n=[{id:1,title:"Dogs",products:[{id:1,title:"Dog 1 - Slide up",path:"/product/1",description:"A dog",image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",price:100},{id:2,title:"Dog 2 - Slide down",path:"/product/2",description:"A dog",image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",price:100},{id:3,title:"Dog 3 - Fade",path:"/product/3",description:"A dog",image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",price:100},{id:4,title:"Dog 4 - Zoom in",path:"/product/4",description:"A dog",image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",price:100}]},{id:2,title:"Cats",products:[{id:5,title:"Cat 1 - animate__bounceInDown",path:"/product/5",description:"A cat",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",price:100},{id:6,title:"Cat 2 - animate__backInLeft",path:"/product/6",description:"A cat",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",price:100},{id:7,title:"Cat 3 - animate__flipInX",path:"/product/7",description:"A cat",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",price:100},{id:8,title:"Cat 4 - animate__rollIn",path:"/product/8",description:"A cat",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",price:100}]}];return{collection:b(()=>{let o=+i.currentRoute.value.params.id;return o||(o=t.id),n.find(e=>e.id==o)})}}}),oe={class:"page"},se={class:"page-content"},ie=k("Back"),ne={class:"text-4xl text-center mt-10"};function ae(t,i,n,o,e,s){const a=d("router-link"),p=d("List");return c(),m("div",oe,[r("div",se,[y(a,{class:"mt-4 block font-bold underline",to:{name:"home"}},{default:v(()=>[ie]),_:1}),r("h1",ne," Collection: "+h(t.collection.title),1),t.collection?(c(),f(p,{key:0,collections:t.collection.products},null,8,["collections"])):g("",!0)])])}var $=_(te,[["render",ae]]);const re=[{path:"/",name:"home",component:K,meta:{transitions:{priority:3,enter:"fade",leave:"fade"}}},{path:"/collection/1",component:$,meta:{transitions:{priority:2,enter:"slide-left",leave:"slide-left-reverse"}},props:{id:1}},{path:"/collection/2",component:$,meta:{transitions:{priority:2,enter:"slide-right",leave:"slide-right-reverse"}},props:{id:2}},{path:"/collection/:id",component:$,name:"collection",meta:{transitions:{priority:2,enter:"slide-left",leave:"slide-left-reverse"}}},{path:"/product/1",component:l,meta:{transitions:{priority:1,enter:"slide-up",leave:"slide-up-reverse"}},props:{id:1}},{path:"/product/2",component:l,meta:{transitions:{priority:1,enter:"slide-down",leave:"slide-down-reverse"}},props:{id:1}},{path:"/product/3",component:l,meta:{transitions:{priority:1,enter:"fade",leave:"fade"}},props:{id:1}},{path:"/product/4",component:l,meta:{transitions:{priority:1,enter:"zoom-in",leave:"zoom-in-reverse"}},props:{id:1}},{path:"/product/5",component:l,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__bounceInDown",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__bounceOutUp"}}},props:{id:5}},{path:"/product/6",component:l,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__backInLeft",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__backOutLeft"}}},props:{id:6}},{path:"/product/7",component:l,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__flipInX",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__flipOutX"}}},props:{id:7}},{path:"/product/8",component:l,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__rollIn",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__rollOut"}}},props:{id:8}},{path:"/product/:id",component:l,name:"product",meta:{transitions:{priority:1,enter:"slide-left",leave:"slide-left-reverse"}}}],ce=D({history:I("/vue-router-transition/"),routes:re});const w=N(R);w.use(ce);w.use(O);w.mount("#app");
