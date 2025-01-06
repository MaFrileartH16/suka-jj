import{r as d,j as e,N as i}from"./app-Dq2eNAco.js";import{b as k,F as L,T as c,a as h,A,S as C,G as u,B as I,I as R}from"./AppLayout-DLjGrGrH.js";import{B as v}from"./Breadcrumbs-BYdfaEA9.js";import{I as P,T as s,a as x,b as _}from"./Table-CYIiUJb7.js";import{I as B,a as D}from"./IconTrash-NSY8bxX2.js";import{T as p}from"./TextInput-D0nvYwZB.js";import{I as m}from"./IconSearch-BbSAjxAf.js";import"./Title-DMCPJ7bQ.js";import"./ScrollArea-Cr7sMHia.js";const J=a=>{const[b,r]=d.useState(""),g=[{title:"#"},{title:"Foto"},{title:"Nama Lengkap",key:"full_name"},{title:"Sistem Pertandingan",key:"role"},{title:"Aksi"}],j=[{label:"Rincian Atlet",icon:e.jsx(P,{}),onClick:t=>i.get(route("athletes.show",t)),color:"blue"},{label:"Ubah Atlet",icon:e.jsx(B,{}),onClick:t=>i.get(route("athletes.edit",t)),color:"yellow",disabled:!a.auth.user.role.includes("Pelatih")},{label:"Hapus Atlet",icon:e.jsx(D,{}),onClick:t=>i.delete(route("athletes.destroy",t)),color:"red",disabled:!a.auth.user.role.includes("Pelatih")}],o=a.athletes.filter(t=>t.full_name.replace(/\s/g,"").toLowerCase().match(new RegExp(b.replace(/\s/g,"").toLowerCase(),"i"))),[y,w]=d.useState(o),f=y.map((t,n)=>e.jsxs(s.Tr,{h:64,children:[e.jsx(s.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:n+1}),e.jsx(s.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx(k,{src:t.avatar,alt:t.full_name})}),e.jsx(s.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:t.full_name}),e.jsx(s.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:t.role}),e.jsx(s.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx(L,{gap:8,style:{whiteSpace:"nowrap"},children:j.map((l,T)=>e.jsx(c,{label:l.label,style:{borderRadius:32,padding:".5rem 1rem"},children:e.jsx(h,{size:48,radius:32,variant:"subtle","aria-label":l.label,color:l.color,onClick:()=>l.onClick(t),disabled:a.auth.user.id===t.id||l.disabled,children:l.icon})},T))})})]},n)),S=t=>{w(t)};return e.jsxs(A,{title:"Atlet",authed:a.auth.user,meta:a.meta,unreadHistories:a.total_unread_histories,children:[e.jsxs(C,{mb:32,children:[e.jsxs(u,{w:"100%",justify:"space-between",children:[e.jsx(v,{navList:[{label:"Atlet",totalData:a.athletes.length}]}),e.jsxs(u,{children:[e.jsx(p,{display:{base:"none",xs:"block"},w:240,variant:"filled",leftSection:e.jsx(m,{}),styles:{input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:14},section:{marginLeft:0,width:48,height:48}},color:"gold.2",placeholder:"Cari atlet...",onChange:t=>r(t.target.value)}),a.auth.user.role.includes("Pelatih")&&e.jsxs(e.Fragment,{children:[e.jsx(c,{style:{borderRadius:32,padding:".5rem 1rem"},label:"Tambah Atlet",children:e.jsx(h,{ml:"auto",h:48,w:48,color:"gold.2",radius:32,display:{base:"block",sm:"none"},onClick:()=>i.get(route("athletes.create")),children:e.jsx(x,{})})}),e.jsx(I,{display:{base:"none",sm:"block"},w:240,leftSection:e.jsx(x,{}),variant:"filled",color:"gold.2",h:48,radius:32,px:16,styles:{section:{marginRight:12}},onClick:()=>i.get(route("athletes.create")),children:"Tambah Atlet"})]})]})]}),e.jsx(p,{w:"100%",display:{base:"block",xs:"none"},variant:"filled",leftSection:e.jsx(m,{}),styles:{input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:14},section:{marginLeft:0,width:48,height:48}},color:"gold.2",placeholder:"Cari atlet...",onChange:t=>r(t.target.value)})]}),e.jsx(_,{thList:g,tdList:f,icon:e.jsx(R,{size:48}),title:"Atlet",route:"athletes.create",authed:a.auth.user,data:o,handleSort:S})]})};export{J as default};
