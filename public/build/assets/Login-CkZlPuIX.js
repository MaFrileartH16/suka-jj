import{r as U,f as z,u as L,a as G,j as s,U as ie,c as M,g as T,B as P,p as W,b as K,d as R,e as q,h as de,G as ue}from"./app-Dq2eNAco.js";import{c as he,u as H,d as pe,e as J,A as me,F as be,f as xe,B as ke}from"./AppLayout-DLjGrGrH.js";import{S as fe}from"./SimpleGrid-DsOSI211.js";import{C as ge}from"./Center-S7eRvZAZ.js";import{I as Q,T as Ce}from"./Title-DMCPJ7bQ.js";import{T as F}from"./TextInput-D0nvYwZB.js";import{I as ve}from"./IconMail-DtzwGRxD.js";import{I as ye}from"./IconPassword-cZ7LsL3J.js";import{g as X}from"./get-auto-contrast-value-Da6zqqWm.js";import{I as je,a as Ie,b as Se}from"./InputsGroupFieldset-SQVgS_5z.js";import{C as Y}from"./CheckIcon-DoOrOMZ1.js";import"./get-base-value-C3IHdo-Z.js";const Z=U.createContext(null),_e=Z.Provider,ee=()=>U.useContext(Z),[we,Pe]=he();var oe={card:"m_26775b0a"};const Re={withBorder:!0},ze=M((a,{radius:e})=>({card:{"--card-radius":T(e)}})),N=z((a,e)=>{const o=L("CheckboxCard",Re,a),{classNames:r,className:c,style:l,styles:n,unstyled:t,vars:d,checked:x,mod:i,withBorder:C,value:k,onClick:h,defaultChecked:b,onChange:p,...v}=o,y=G({name:"CheckboxCard",classes:oe,props:o,className:c,style:l,classNames:r,styles:n,unstyled:t,vars:d,varsResolver:ze,rootSelector:"card"}),u=ee(),j=typeof x=="boolean"?x:u?u.value.includes(k||""):void 0,[m,f]=H({value:j,defaultValue:b,finalValue:!1,onChange:p});return s.jsx(we,{value:{checked:m},children:s.jsx(ie,{ref:e,mod:[{"with-border":C,checked:m},i],...y("card"),...v,role:"checkbox","aria-checked":m,onClick:g=>{h==null||h(g),u==null||u.onChange(k||""),f(!m)}})})});N.displayName="@mantine/core/CheckboxCard";N.classes=oe;const Le={},B=z((a,e)=>{const{value:o,defaultValue:r,onChange:c,size:l,wrapperProps:n,children:t,readOnly:d,...x}=L("CheckboxGroup",Le,a),[i,C]=H({value:o,defaultValue:r,finalValue:[],onChange:c}),k=h=>{const b=typeof h=="string"?h:h.currentTarget.value;!d&&C(i.includes(b)?i.filter(p=>p!==b):[...i,b])};return s.jsx(_e,{value:{value:i,onChange:k,size:l},children:s.jsx(Q.Wrapper,{size:l,ref:e,...n,...x,labelElement:"div",__staticSelector:"CheckboxGroup",children:s.jsx(je,{role:"group",children:t})})})});B.classes=Q.Wrapper.classes;B.displayName="@mantine/core/CheckboxGroup";var se={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--outline":"m_76e20374"};const Ee={icon:Y},Ge=M((a,{radius:e,color:o,size:r,iconColor:c,variant:l,autoContrast:n})=>{const t=W({color:o||a.primaryColor,theme:a}),d=t.isThemeColor&&t.shade===void 0?`var(--mantine-color-${t.color}-outline)`:t.color;return{indicator:{"--checkbox-size":K(r,"checkbox-size"),"--checkbox-radius":e===void 0?void 0:T(e),"--checkbox-color":l==="outline"?d:R(o,a),"--checkbox-icon-color":c?R(c,a):X(n,a)?q({color:o,theme:a,autoContrast:n}):void 0}}}),V=z((a,e)=>{const o=L("CheckboxIndicator",Ee,a),{classNames:r,className:c,style:l,styles:n,unstyled:t,vars:d,icon:x,indeterminate:i,radius:C,color:k,iconColor:h,autoContrast:b,checked:p,mod:v,variant:y,disabled:u,...j}=o,m=x,f=G({name:"CheckboxIndicator",classes:se,props:o,className:c,style:l,classNames:r,styles:n,unstyled:t,vars:d,varsResolver:Ge,rootSelector:"indicator"}),g=Pe(),E=typeof p=="boolean"||typeof i=="boolean"?p||i:(g==null?void 0:g.checked)||!1;return s.jsx(P,{ref:e,...f("indicator",{variant:y}),variant:y,mod:[{checked:E,disabled:u},v],...j,children:s.jsx(m,{indeterminate:i,...f("icon")})})});V.displayName="@mantine/core/CheckboxIndicator";V.classes=se;var ae={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};const Me={labelPosition:"right",icon:Y},Te=M((a,{radius:e,color:o,size:r,iconColor:c,variant:l,autoContrast:n})=>{const t=W({color:o||a.primaryColor,theme:a}),d=t.isThemeColor&&t.shade===void 0?`var(--mantine-color-${t.color}-outline)`:t.color;return{root:{"--checkbox-size":K(r,"checkbox-size"),"--checkbox-radius":e===void 0?void 0:T(e),"--checkbox-color":l==="outline"?d:R(o,a),"--checkbox-icon-color":c?R(c,a):X(n,a)?q({color:o,theme:a,autoContrast:n}):void 0}}}),S=z((a,e)=>{const o=L("Checkbox",Me,a),{classNames:r,className:c,style:l,styles:n,unstyled:t,vars:d,color:x,label:i,id:C,size:k,radius:h,wrapperProps:b,checked:p,labelPosition:v,description:y,error:u,disabled:j,variant:m,indeterminate:f,icon:g,rootRef:E,iconColor:Ve,onChange:_,autoContrast:$e,mod:re,...te}=o,I=ee(),ne=k||(I==null?void 0:I.size),ce=g,w=G({name:"Checkbox",props:o,classes:ae,className:c,style:l,classNames:r,styles:n,unstyled:t,vars:d,varsResolver:Te}),{styleProps:le,rest:$}=de(te),A=pe(C),O=I?{checked:I.value.includes($.value),onChange:D=>{I.onChange(D),_==null||_(D)}}:{};return s.jsx(Ie,{...w("root"),__staticSelector:"Checkbox",__stylesApiProps:o,id:A,size:ne,labelPosition:v,label:i,description:y,error:u,disabled:j,classNames:r,styles:n,unstyled:t,"data-checked":O.checked||p||void 0,variant:m,ref:E,mod:re,...le,...b,children:s.jsxs(P,{...w("inner"),mod:{"data-label-position":v},children:[s.jsx(P,{component:"input",id:A,ref:e,checked:p,disabled:j,mod:{error:!!u,indeterminate:f},...w("input",{focusable:!0,variant:m}),onChange:_,...$,...O,type:"checkbox"}),s.jsx(ce,{indeterminate:f,...w("icon")})]})})});S.classes={...ae,...Se};S.displayName="@mantine/core/Checkbox";S.Group=B;S.Indicator=V;S.Card=N;/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ne=J("outline","lock-open","IconLockOpen",[["path",{d:"M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-5a4 4 0 0 1 8 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Be=J("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]);const Ye=a=>{const e=ue({email:"",password:"",remember:!1});return s.jsx("form",{onSubmit:o=>{o.preventDefault(),e.post(route("login"))},children:s.jsx(me,{title:"Log In",authed:a.auth.user,meta:a.meta,children:s.jsxs(fe,{cols:{base:1,xs:2},w:"100%",h:"100vh",p:16,children:[s.jsx(be,{h:{base:120,xs:"100%"},justify:"center",children:s.jsx(xe,{fit:"contain",src:"https://pbjisurabaya.or.id/images/logo/pbji.png"})}),s.jsx(ge,{children:s.jsxs(P,{w:320,children:[s.jsx(Ce,{mb:32,children:"Masuk Akun"}),s.jsx(F,{variant:"filled",leftSection:s.jsx(ve,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},label:"Alamat Surel",placeholder:"Masukkan alamat surel...",mb:16,onChange:o=>{const r=o.target.value.toLowerCase();e.setData("email",r),r?/\S+@\S+\.\S+/.test(r)?e.clearErrors("email"):e.setError({email:"Alamat surel tidak sah."}):e.setError({email:"Alamat surel tidak boleh kosong."})},error:e.errors.email}),s.jsx(F,{type:"password",variant:"filled",leftSection:s.jsx(ye,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},label:"Kata Sandi",placeholder:"Masukkan kata sandi...",mb:16,onChange:o=>{e.setData("password",o.target.value),o.target.value?e.clearErrors("password"):e.setError({password:"Kata sandi tidak boleh kosong."})},error:e.errors.password}),s.jsx(S,{variant:"filled",mb:24,styles:{label:{marginLeft:16,fontSize:14,padding:0},input:{border:0,backgroundColor:e.data.remember?"var(--mantine-color-gold-2)":"#f1f3f5"}},radius:32,label:"Ingat Saya",size:"md",color:"gold.2",onChange:o=>e.setData("remember",o.target.checked)}),s.jsx(ke,{px:16,styles:{section:{marginRight:16}},leftSection:e.hasErrors||e.hasErrors||Object.entries(e.data).some(([o,r])=>o!=="remember"&&!r)?s.jsx(Be,{}):s.jsx(Ne,{}),disabled:e.hasErrors||Object.entries(e.data).some(([o,r])=>o!=="remember"&&!r),loading:e.processing,variant:"filled",type:"submit",color:"gold.2",h:48,fullWidth:!0,radius:32,children:"Masuk"})]})})]})})})};export{Ye as default};
