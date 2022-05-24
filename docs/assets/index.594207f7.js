import{d as u,r as p,c as _,o as l,a as m,F as S,b as B,e as y,w as g,f as r,t as h,g as v,u as k,h as $,i as b,j as R,k as V,l as F,m as K}from"./vendor.7f4bf73a.js";const q=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};q();const P=u({setup(e){return(i,s)=>{const o=p("RouterViewTransition");return l(),_(o,{defaultClassTransition:"transition-active"})}}});var f=(e,i)=>{const s=e.__vccOpts||e;for(const[o,t]of i)s[o]=t;return s};const X=u({props:{collections:{type:Array,required:!0}},setup(){return{}}}),H={key:0,class:"list"},z={class:"w-full h-0 pb-full relative bg-gray-200 rounded-md overflow-hidden"},E=["src"],Z={class:"text-xl text-center mt-4 break-words"};function M(e,i,s,o,t,a){const n=p("router-link");return e.collections?(l(),m("div",H,[(l(!0),m(S,null,B(e.collections,d=>(l(),_(n,{to:d.path,key:d.id},{default:g(()=>[r("div",z,[r("img",{class:"w-full h-full absolute top-0 left-0 object-contain",src:d.image,alt:""},null,8,E)]),r("h2",Z,h(d.title),1)]),_:2},1032,["to"]))),128))])):y("",!0)}var A=f(X,[["render",M]]);const U=u({components:{List:A},setup(){return{collections:[{id:1,title:"Dogs - Slide left",path:"/collection/1",image:"https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500"},{id:2,title:"Cats - Slide right",path:"/collection/2",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500"}]}}}),W={class:"page"},G={class:"page-content"},J=r("h1",{class:"text-4xl text-center mt-10"},"Home Page",-1);function Q(e,i,s,o,t,a){const n=p("List");return l(),m("div",W,[r("div",G,[J,v(n,{collections:e.collections},null,8,["collections"])])])}var Y=f(U,[["render",Q]]),D="/vue-router-transition/assets/dog_1.9884cc96.jpeg",T="/vue-router-transition/assets/dog_2.b9369494.jpeg",L="/vue-router-transition/assets/dog_3.c03359ca.jpeg",x="/vue-router-transition/assets/dog_4.e2644980.png",I="/vue-router-transition/assets/cat_1.ad850ada.jpeg",j="/vue-router-transition/assets/cat_2.8ca1ab0e.jpeg",N="/vue-router-transition/assets/cat_3.7cc82e1e.jpeg",O="/vue-router-transition/assets/cat_4.0b97b348.jpeg";const ee=u({props:{id:{type:Number,required:!1}},setup(e){const i=[{id:1,title:"Dog 1 - Slide up",path:"/product/1",description:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",image:D,price:100,collection:{id:1}},{id:2,title:"Dog 2 - Slide down",path:"/product/2",description:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",image:T,price:100,collection:{id:1}},{id:3,title:"Dog 3 - Fade",path:"/product/3",description:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",image:L,price:100,collection:{id:1}},{id:4,title:"Dog 4 - Zoom in",path:"/product/4",description:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",image:x,price:100,collection:{id:1}},{id:5,title:"Cat 1 - animate__bounceInDown",path:"/product/5",description:"A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",image:I,price:100,collection:{id:2}},{id:6,title:"Cat 2 - animate__backInLeft",path:"/product/6",description:"A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",image:j,price:100,collection:{id:2}},{id:7,title:"Cat 3 - animate__flipInX",path:"/product/7",description:"A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",image:N,price:100,collection:{id:2}},{id:8,title:"Cat 4 - animate__rollIn",path:"/product/8",description:"A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",image:O,price:100,collection:{id:2}}],s=k();return{product:$(()=>{let o=+s.currentRoute.value.params.id;return o||(o=e.id),i.find(a=>a.id===o)})}}}),te={class:"page"},oe={key:0,class:"page-content"},ae=b(" Back "),ie={class:"text-4xl mt-10"},se={class:"mt-4 text-2xl font-bold"},ne=["src"],re={class:"mt-4 max-w-lg"};function le(e,i,s,o,t,a){const n=p("router-link");return l(),m("div",te,[e.product?(l(),m("div",oe,[v(n,{class:"mt-4 block font-bold underline",to:{name:"collection",params:{id:e.product.collection.id}}},{default:g(()=>[ae]),_:1},8,["to"]),r("h1",ie,h(e.product.title),1),r("div",se,"$"+h(e.product.price),1),r("img",{class:"max-w- mt-6 md:max-w-md",src:e.product.image,alt:""},null,8,ne),r("div",re,h(e.product.description),1)])):y("",!0)])}var c=f(ee,[["render",le]]);const ce=u({components:{List:A},props:{id:{type:Number,required:!1}},setup(e){const i=k(),s=[{id:1,title:"Dogs",products:[{id:1,title:"Dog 1 - Slide up",path:"/product/1",description:"A dog",image:D,price:100},{id:2,title:"Dog 2 - Slide down",path:"/product/2",description:"A dog",image:T,price:100},{id:3,title:"Dog 3 - Fade",path:"/product/3",description:"A dog",image:L,price:100},{id:4,title:"Dog 4 - Zoom in",path:"/product/4",description:"A dog",image:x,price:100}]},{id:2,title:"Cats",products:[{id:5,title:"Cat 1 - animate__bounceInDown",path:"/product/5",description:"A cat",image:I,price:100},{id:6,title:"Cat 2 - animate__backInLeft",path:"/product/6",description:"A cat",image:j,price:100},{id:7,title:"Cat 3 - animate__flipInX",path:"/product/7",description:"A cat",image:N,price:100},{id:8,title:"Cat 4 - animate__rollIn",path:"/product/8",description:"A cat",image:O,price:100}]}];return{collection:$(()=>{let o=+i.currentRoute.value.params.id;return o||(o=e.id),s.find(t=>t.id==o)})}}}),de={class:"page"},pe={class:"page-content"},me=b("Back"),ue={class:"text-4xl text-center mt-10"};function he(e,i,s,o,t,a){const n=p("router-link"),d=p("List");return l(),m("div",de,[r("div",pe,[v(n,{class:"mt-4 block font-bold underline",to:{name:"home"}},{default:g(()=>[me]),_:1}),r("h1",ue," Collection: "+h(e.collection.title),1),e.collection?(l(),_(d,{key:0,collections:e.collection.products},null,8,["collections"])):y("",!0)])])}var w=f(ce,[["render",he]]);const fe=[{path:"/",name:"home",component:Y,meta:{transitions:{priority:3,enter:"fade",leave:"fade"}}},{path:"/collection/1",component:w,meta:{transitions:{priority:2,enter:"slide-left",leave:"slide-left-reverse"}},props:{id:1}},{path:"/collection/2",component:w,meta:{transitions:{priority:2,enter:"slide-right",leave:"slide-right-reverse"}},props:{id:2}},{path:"/collection/:id",component:w,name:"collection",meta:{transitions:{priority:2,enter:"slide-left",leave:"slide-left-reverse"}}},{path:"/product/1",component:c,meta:{transitions:{priority:1,enter:"slide-up",leave:"slide-up-reverse"}},props:{id:1}},{path:"/product/2",component:c,meta:{transitions:{priority:1,enter:"slide-down",leave:"slide-down-reverse"}},props:{id:2}},{path:"/product/3",component:c,meta:{transitions:{priority:1,enter:"fade",leave:"fade"}},props:{id:3}},{path:"/product/4",component:c,meta:{transitions:{priority:1,enter:"zoom-in",leave:"zoom-in-reverse"}},props:{id:4}},{path:"/product/5",component:c,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__bounceInDown",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__bounceOutUp"}}},props:{id:5}},{path:"/product/6",component:c,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__backInLeft",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__backOutLeft"}}},props:{id:6}},{path:"/product/7",component:c,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__flipInX",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__flipOutX"}}},props:{id:7}},{path:"/product/8",component:c,meta:{transitions:{priority:1,enter:{enterClass:"animate__animated animate__rollIn",leaveClass:"stay-here"},leave:{enterClass:"",leaveClass:"animate__animated animate__rollOut"}}},props:{id:8}},{path:"/product/:id",component:c,name:"product",meta:{transitions:{priority:1,enter:"slide-left",leave:"slide-left-reverse"}}}],_e=R({history:V("/vue-router-transition/"),routes:fe});const C=F(P);C.use(_e);C.use(K);C.mount("#app");