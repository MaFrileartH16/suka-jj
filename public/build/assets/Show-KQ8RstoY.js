import{G as n,j as e,B as s}from"./app-Dq2eNAco.js";import{A as m,b as g,G as t}from"./AppLayout-DLjGrGrH.js";import{F as r}from"./id-BRr2NmZ5.js";import{B as c}from"./Breadcrumbs-BYdfaEA9.js";import{G as d,I as h}from"./IconCalendar-BhDIAtUq.js";import{T as o}from"./TextInput-D0nvYwZB.js";import{I as u}from"./IconMail-DtzwGRxD.js";import{I as b}from"./IconId-CBDKOXkw.js";import{R as l}from"./Radio-CRKqyImr.js";import{D as f}from"./DatePickerInput-C_fKyM6g.js";import"./Calendar-H8GWllVF.js";import"./Title-DMCPJ7bQ.js";import"./get-base-value-C3IHdo-Z.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./InputsGroupFieldset-SQVgS_5z.js";const w=a=>{const i=n({avatar:a.coach.avatar,email:a.coach.email,full_name:a.coach.full_name,gender:a.coach.gender,birth_date:a.coach.birth_date,role:a.coach.role});return console.log(a),e.jsxs(m,{title:`Pelatih '${a.coach.full_name}'`,authed:a.auth.user,meta:a.meta,unreadHistories:a.total_unread_histories,children:[e.jsx(s,{mb:32,children:e.jsx(c,{navList:[{label:"Pelatih",route:"coaches.index"},{label:"Rincian"}]})}),e.jsxs(d,{justify:"space-between",children:[e.jsx(d.Col,{span:{base:12,md:4},children:e.jsx(g,{mx:"auto",src:i.data.avatar,alt:i.data.full_name,size:160})}),e.jsxs(d.Col,{span:{base:12,md:8},children:[e.jsx(r,{mb:16,radius:20,legend:"Informasi Akun",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:e.jsx(o,{variant:"filled",leftSection:e.jsx(u,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},label:"Alamat Surel",placeholder:"Masukkan alamat surel...",value:i.data.email,disabled:!0})}),e.jsxs(r,{mb:16,radius:20,legend:"Informasi Pribadi",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[e.jsx(o,{variant:"filled",leftSection:e.jsx(b,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,disabled:!0,label:"Nama Lengkap",placeholder:"Masukkan nama lengkap...",value:i.data.full_name}),e.jsx(l.Group,{value:i.data.gender,mb:16,label:"Jenis Kelamin",styles:{label:{marginBottom:8},error:{marginTop:8}},children:e.jsxs(t,{gap:32,children:[e.jsx(l,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0}},size:"md",value:"Laki-laki",label:"Laki-laki",color:"gold.2"}),e.jsx(l,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0}},size:"md",value:"Perempuan",label:"Perempuan",color:"gold.2"})]})}),e.jsx(f,{locale:"id",disabled:!0,variant:"filled",valueFormat:"D-M-YYYY",leftSection:e.jsx(h,{}),label:"Tanggal Lahir",placeholder:"Masukkan tanggal lahir...",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8},calendarHeader:{height:48},calendarHeaderControl:{height:48,width:48,borderRadius:32}},value:new Date(i.data.birth_date)})]}),e.jsx(r,{radius:20,legend:"Informasi Pelatih",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:e.jsx(l.Group,{label:"Peran",styles:{label:{marginBottom:8},error:{marginTop:8}},value:i.data.role,children:e.jsxs(t,{gap:32,children:[e.jsx(l,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0}},size:"md",value:"Pengelola Tim",label:"Pengelola Tim",color:"gold.2"}),e.jsx(l,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0}},size:"md",value:"Pelatih Fisik",label:"Pelatih Fisik",color:"gold.2"}),e.jsx(l,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0}},size:"md",value:"Pelatih Teknik",label:"Pelatih Teknik",color:"gold.2"})]})})})]})]})]})};export{w as default};