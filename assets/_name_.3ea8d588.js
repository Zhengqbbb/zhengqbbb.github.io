import{k as v,l as p,m as _,d as k,u as N,a as h,w as x,r as b,o as c,c as i,e,t as r,f as n,F as y,n as w,p as C,b as S,q as V,s as g}from"./app.ab804b70.js";const B=v("user",()=>{const t=p(""),a=p(new Set),m=_(()=>Array.from(a.value)),o=_(()=>m.value.filter(u=>u!==t.value));function s(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:s,otherNames:o,savedName:t}}),E=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),F={"text-sm":"","opacity-75":""},$={key:0,"text-sm":"","mt-4":""},q={"opacity-75":""},D=k({__name:"[name]",props:{name:null},setup(t){const a=t,m=N(),o=B(),{t:s}=h();return x(()=>{o.setNewName(a.name)}),(u,d)=>{const f=b("router-link");return c(),i("div",null,[E,e("p",null,r(n(s)("intro.hi",{name:a.name})),1),e("p",F,[e("em",null,r(n(s)("intro.dynamic-route")),1)]),n(o).otherNames.length?(c(),i("p",$,[e("span",q,r(n(s)("intro.aka"))+":",1),e("ul",null,[(c(!0),i(y,null,w(n(o).otherNames,l=>(c(),i("li",{key:l},[S(f,{to:`/hi/${l}`,replace:""},{default:V(()=>[g(r(l),1)]),_:2},1032,["to"])]))),128))])])):C("",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:d[0]||(d[0]=l=>n(m).back())},r(n(s)("button.back")),1)])])}}});export{D as default};
