import{_ as p,r as o,o as v,d as x,m as c,U as g,F as w,a1 as I,q as M,l as i,P as y}from"./index-B9NMTRUY.js";const H=1e3,e=50,m=5,T={__name:"ThreePart",setup(b){const a=o(null),d=o([]),u=o(0),h=o(Math.floor(window.innerHeight/e)),s=()=>{const r=a.value.scrollTop,l=Math.max(0,Math.floor(r/e)-m),t=Math.min(H-1,Math.floor((r+a.value.clientHeight)/e)+m),f=[];for(let n=l;n<=t;n++)f.push({index:n,text:`Item ${n+1}`});d.value=f,u.value=l*e},_=()=>{s()};return v(()=>{s()}),x(()=>window.innerHeight,()=>{h.value=Math.floor(window.innerHeight/e),s()}),(r,l)=>(i(),c("div",{class:"container",ref_key:"container",ref:a,onScroll:_},[g("div",{class:"content",style:M({transform:`translateY(${u.value}px)`})},[(i(!0),c(w,null,I(d.value,t=>(i(),c("div",{key:t.index,class:"item"},y(t.text),1))),128))],4)],544))}},S=p(T,[["__scopeId","data-v-72f973fb"]]);export{S as default};
