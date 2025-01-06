import{f as N,u as $,a as D,j as u,U as io,c as T,g as U,k as H,B,p as K,b as S,d as A,e as J,h as to}from"./app-Dq2eNAco.js";import{g as M}from"./get-auto-contrast-value-Da6zqqWm.js";import{I as co,a as lo}from"./InputsGroupFieldset-SQVgS_5z.js";import{c as Q,H as uo,d as X,u as po}from"./AppLayout-DLjGrGrH.js";import{I as Y}from"./Title-DMCPJ7bQ.js";const[mo,Z]=Q(),[fo,ho]=Q();var oo={card:"m_9dc8ae12"};const vo={withBorder:!0},yo=T((o,{radius:s})=>({card:{"--card-radius":U(s)}})),V=N((o,s)=>{const e=$("RadioCard",vo,o),{classNames:a,className:c,style:p,styles:i,unstyled:r,vars:m,checked:R,mod:w,withBorder:I,value:g,onClick:C,name:v,onKeyDown:h,...j}=e,b=D({name:"RadioCard",classes:oo,props:e,className:c,style:p,classNames:a,styles:i,unstyled:r,vars:m,varsResolver:yo,rootSelector:"card"}),{dir:y}=uo(),d=Z(),x=typeof R=="boolean"?R:(d==null?void 0:d.value)===g||!1,_=v||(d==null?void 0:d.name),z=n=>{if(h==null||h(n),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(n.nativeEvent.code)){n.preventDefault();const l=Array.from(document.querySelectorAll(`[role="radio"][name="${_||"__mantine"}"]`)),k=l.findIndex(G=>G===n.target),f=k+1>=l.length?0:k+1,t=k-1<0?l.length-1:k-1;n.nativeEvent.code==="ArrowDown"&&(l[f].focus(),l[f].click()),n.nativeEvent.code==="ArrowUp"&&(l[t].focus(),l[t].click()),n.nativeEvent.code==="ArrowLeft"&&(l[y==="ltr"?t:f].focus(),l[y==="ltr"?t:f].click()),n.nativeEvent.code==="ArrowRight"&&(l[y==="ltr"?f:t].focus(),l[y==="ltr"?f:t].click())}};return u.jsx(fo,{value:{checked:x},children:u.jsx(io,{ref:s,mod:[{"with-border":I,checked:x},w],...b("card"),...j,role:"radio","aria-checked":x,name:_,onClick:n=>{C==null||C(n),d==null||d.onChange(g||"")},onKeyDown:z})})});V.displayName="@mantine/core/RadioCard";V.classes=oo;const Ro={},L=N((o,s)=>{const{value:e,defaultValue:a,onChange:c,size:p,wrapperProps:i,children:r,name:m,readOnly:R,...w}=$("RadioGroup",Ro,o),I=X(m),[g,C]=po({value:e,defaultValue:a,finalValue:"",onChange:c}),v=h=>!R&&C(typeof h=="string"?h:h.currentTarget.value);return u.jsx(mo,{value:{value:g,onChange:v,size:p,name:I},children:u.jsx(Y.Wrapper,{size:p,ref:s,...i,...w,labelElement:"div",__staticSelector:"RadioGroup",children:u.jsx(co,{role:"radiogroup",children:r})})})});L.classes=Y.Wrapper.classes;L.displayName="@mantine/core/RadioGroup";function eo({size:o,style:s,...e}){return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:H(o),height:H(o),...s},"aria-hidden":!0,...e,children:u.jsx("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var ro={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};const go={icon:eo},Co=T((o,{radius:s,color:e,size:a,iconColor:c,variant:p,autoContrast:i})=>{const r=K({color:e||o.primaryColor,theme:o}),m=r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-outline)`:r.color;return{indicator:{"--radio-size":S(a,"radio-size"),"--radio-radius":s===void 0?void 0:U(s),"--radio-color":p==="outline"?m:A(e,o),"--radio-icon-size":S(a,"radio-icon-size"),"--radio-icon-color":c?A(c,o):M(i,o)?J({color:e,theme:o,autoContrast:i}):void 0}}}),O=N((o,s)=>{const e=$("RadioIndicator",go,o),{classNames:a,className:c,style:p,styles:i,unstyled:r,vars:m,icon:R,radius:w,color:I,iconColor:g,autoContrast:C,checked:v,mod:h,variant:j,disabled:b,...y}=e,d=R,x=D({name:"RadioIndicator",classes:ro,props:e,className:c,style:p,classNames:a,styles:i,unstyled:r,vars:m,varsResolver:Co,rootSelector:"indicator"}),_=ho(),z=typeof v=="boolean"?v:(_==null?void 0:_.checked)||!1;return u.jsx(B,{ref:s,...x("indicator",{variant:j}),variant:j,mod:[{checked:z,disabled:b},h],...y,children:u.jsx(d,{...x("icon")})})});O.displayName="@mantine/core/RadioIndicator";O.classes=ro;var so={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};const xo={labelPosition:"right"},_o=T((o,{size:s,radius:e,color:a,iconColor:c,variant:p,autoContrast:i})=>{const r=K({color:a||o.primaryColor,theme:o}),m=r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-outline)`:r.color;return{root:{"--radio-size":S(s,"radio-size"),"--radio-radius":e===void 0?void 0:U(e),"--radio-color":p==="outline"?m:A(a,o),"--radio-icon-color":c?A(c,o):M(i,o)?J({color:a,theme:o,autoContrast:i}):void 0,"--radio-icon-size":S(s,"radio-icon-size")}}}),P=N((o,s)=>{const e=$("Radio",xo,o),{classNames:a,className:c,style:p,styles:i,unstyled:r,vars:m,id:R,size:w,label:I,labelPosition:g,description:C,error:v,radius:h,color:j,variant:b,disabled:y,wrapperProps:d,icon:x=eo,rootRef:_,iconColor:z,onChange:n,mod:l,...k}=e,f=D({name:"Radio",classes:so,props:e,className:c,style:p,classNames:a,styles:i,unstyled:r,vars:m,varsResolver:_o}),t=Z(),G=(t==null?void 0:t.size)??w,ao=e.size?w:G,{styleProps:no,rest:E}=to(k),W=X(R),q=t?{checked:t.value===E.value,name:E.name??t.name,onChange:F=>{t.onChange(F),n==null||n(F)}}:{};return u.jsx(lo,{...f("root"),__staticSelector:"Radio",__stylesApiProps:e,id:W,size:ao,labelPosition:g,label:I,description:C,error:v,disabled:y,classNames:a,styles:i,unstyled:r,"data-checked":q.checked||void 0,variant:b,ref:_,mod:l,...no,...d,children:u.jsxs(B,{...f("inner"),mod:{"label-position":g},children:[u.jsx(B,{...f("radio",{focusable:!0,variant:b}),onChange:n,...E,...q,component:"input",mod:{error:!!v},ref:s,id:W,disabled:y,type:"radio"}),u.jsx(x,{...f("icon"),"aria-hidden":!0})]})})});P.classes=so;P.displayName="@mantine/core/Radio";P.Group=L;P.Card=V;P.Indicator=O;export{P as R};