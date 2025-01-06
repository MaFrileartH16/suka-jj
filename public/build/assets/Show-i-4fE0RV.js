import{r as f,G,j as e}from"./app-B-KuB5wc.js";import{h as W,i as q,A as N,b as U,S as p,I as H,l as j,G as J}from"./AppLayout-BLo0ibUD.js";import{B as K}from"./Breadcrumbs-CzsBFVKv.js";import{F as k}from"./id-BRiO6Gep.js";import{u as O,S as Q,L as V,P as X,M as Z,A as x,R as M}from"./index-RUjblPcP.js";import{D as R}from"./Divider-D7pDBURh.js";import{G as _,I as ee}from"./IconCalendar-BLL013o6.js";import{C as ae}from"./Center-Da5oGAa4.js";import{I as te}from"./Indicator-BkYeIvd8.js";import{S as ie}from"./Select-dInGcx2L.js";import{L as u}from"./List-DPEodZHb.js";import{R as h}from"./Radio-C5oo19HJ.js";import{N as ne}from"./NumberInput-Dx9IiFD5.js";import{T as re}from"./TextInput-ivHLZRTd.js";import"./Title-DWCmXiXN.js";import"./Calendar-VSqHeYKN.js";import"./TypographyStylesProvider-BLFnLhLw.js";import"./ColorSwatch-B44xqabn.js";import"./SimpleGrid-3TWxjtLm.js";import"./get-base-value-DRAArKH2.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./OptionsDropdown-Cv_XuTlm.js";import"./CheckIcon-W4wpdq_p.js";import"./ScrollArea-Dm_YR1m-.js";import"./InputsGroupFieldset-BrLVd3CM.js";const Re=d=>{var y,D,I;const[c,z]=f.useState([new Date(d.evaluation.start_date),new Date(d.evaluation.end_date)]),[b,B]=f.useState(""),a=G({time_period:c,athlete_id:d.evaluation.athlete_id,exercises:[],tournaments:[],note:d.evaluation.note,evaluations:d.evaluation.evaluation_criterias.map(t=>({sub_sub_criteria_id:t.sub_sub_criteria_id,value:t.value}))});console.log(a.data),f.useEffect(()=>{a.setData("time_period",c.map(t=>new Date(t).toLocaleString()))},[c]),f.useEffect(()=>{const t=c.map(r=>{let l=new Date(r),m=l.getMonth()+1,i=l.getFullYear();return`${m}-${i}`}),o=[];if(a.data.time_period&&a.data.time_period.length>=2){const r=t[0],l=t[1],[m,i]=r==null?void 0:r.split("-"),[s,P]=l==null?void 0:l.split("-"),A=parseInt(m,10),Y=parseInt(s,10),L=parseInt(i,10),C=parseInt(P,10);for(let g=L;g<=C;g++){const $=g===L?A:1,F=g===C?Y:12;for(let v=$;v<=F;v++)o.push(`${v}-${g}`)}}const n=d.exercises.filter(r=>r.athletes.some(l=>l.id===a.data.athlete_id)).filter(r=>{const l=new Date(r.date),m=l.getMonth(),i=l.getFullYear(),s=`${m+1}-${i}`;return o.includes(s)}).map(r=>({...r,date:new Date(r.date).toLocaleDateString("id").split("/").join("-")})),w=d.tournaments.filter(r=>r.athlete_id===a.data.athlete_id).filter(r=>{const l=new Date(r.date),m=l.getMonth(),i=l.getFullYear(),s=`${m+1}-${i}`;return o.includes(s)}).map(r=>({...r,date:new Date(r.date).toLocaleDateString("id").split("/").join("-")}));a.setData(r=>({...r,exercises:n,tournaments:w}))},[d.exercises,d.tournaments,a.data.athlete_id,c]);const S=d.criterias.map(t=>({...t,sub_criterias:t.sub_criterias.filter(o=>t.name!=="Teknik Bertanding"||o.name===b).map(o=>({...o,sub_sub_criterias:o.sub_sub_criterias}))}));f.useEffect(()=>{b&&a.setData("evaluations",S.flatMap(t=>t.sub_criterias.flatMap(o=>o.sub_sub_criterias.map(n=>({sub_sub_criteria_id:n.id,value:"-"})))))},[b]);const E=O({extensions:[Q,V,X.configure({placeholder:"Masukkan catatan"})],content:a.data.note,onUpdate({editor:t}){a.setData("note",t.getHTML())},editable:!1}),T=[{icon:e.jsx(W,{}),value:"Latihan",evaluations:a.data.exercises,total:a.data.exercises.length},{icon:e.jsx(q,{}),value:"Pertandingan",evaluations:a.data.tournaments,total:a.data.tournaments.length}];return e.jsx("form",{onSubmit:t=>{t.preventDefault(),a.post(route("evaluations.store"))},children:e.jsxs(N,{title:"Penilaian",authed:d.auth.user,meta:d.meta,unreadHistories:d.total_unread_histories,children:[e.jsx(K,{navList:[{label:"Penilaian",route:"evaluations.index"},{label:"Rincian"}]}),e.jsx(R,{my:32}),e.jsxs(_,{grow:!0,justify:"space-between",children:[e.jsx(_.Col,{span:{base:12,md:4},children:e.jsx(ae,{children:e.jsx(te,{styles:{indicator:{padding:16,border:"4px solid white"}},inline:!0,color:"gold.2",label:a.data.athlete_id?(y=d.athletes.find(t=>t.id===a.data.athlete_id))==null?void 0:y.role:"Atlet",position:"bottom-center",size:32,withBorder:!0,children:e.jsx(U,{mx:"auto",src:(D=d.athletes.find(t=>t.id===a.data.athlete_id))==null?void 0:D.avatar,alt:(I=d.athletes.find(t=>t.id===a.data.athlete_id))==null?void 0:I.name,size:160})})})}),e.jsx(_.Col,{span:{base:12,md:8},children:e.jsxs(p,{gap:48,children:[e.jsxs(k,{radius:20,legend:"Informasi Penilaian",styles:{root:{margin:0,padding:16},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[e.jsx(ie,{mb:16,withAsterisk:!0,variant:"filled",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(H,{}),label:"Atlet",clearable:!0,searchable:!0,disabled:!0,value:a.data.athlete_id,nothingFoundMessage:"Tidak ada atlet ditemukan",placeholder:"Pilih atlet...",checkIconPosition:"right",onChange:t=>{var o;a.setData("athlete_id",t),B((o=d.athletes.find(n=>n.id===t))==null?void 0:o.role),t?a.clearErrors("athlete_id"):a.setError({athlete_id:"Atlet tidak boleh kosong."})},data:d.athletes.map(t=>({value:t.id,label:`${t.full_name} (${t.role})`})),error:a.errors.athlete_id}),e.jsx(Z,{valueFormat:"M-YYYY",locale:"id",disabled:!0,mb:16,value:c,type:"range",withAsterisk:!0,variant:"filled",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(ee,{}),label:"Jangka Waktu Periode",clearable:!0,placeholder:"Pilih jangka waktu periode...",onChange:t=>{z(t),t?a.clearErrors("time_period"):a.setError({time_period:"Jangka waktu periode tidak boleh kosong."})},error:a.errors.time_period}),a.data.athlete_id&&e.jsxs(e.Fragment,{children:[e.jsx(j,{mb:8,fz:14,children:"Daftar latihan dan pertandingan"}),e.jsx(x,{variant:"contained",children:T.map(t=>e.jsxs(x.Item,{value:t.value,children:[e.jsxs(x.Control,{icon:t.icon,children:[t.value," (",t.total,")"]}),e.jsx(x.Panel,{children:t.evaluations.length>0?e.jsx(u,{type:"ordered",children:t.evaluations.map(o=>e.jsxs(u.Item,{children:[o.name," di ",o.place," pada ",o.date]},o.id))}):"Tidak ada data."})]},t.value))})]})]}),a.data.athlete_id&&e.jsxs(p,{gap:48,children:[S.map(t=>e.jsxs(p,{gap:0,children:[e.jsx(R,{label:t==null?void 0:t.name.toUpperCase(),styles:{label:{fontSize:"14px"}},labelPosition:"center"}),t.type==="radio"&&e.jsxs(e.Fragment,{children:[e.jsx(j,{children:"Skala Penilaian : "}),e.jsxs(u,{children:[e.jsx(u.Item,{children:"1 = Sangat buruk"}),e.jsx(u.Item,{children:"2 = Buruk"}),e.jsx(u.Item,{children:"3 = Cukup"}),e.jsx(u.Item,{children:"4 = Baik"}),e.jsx(u.Item,{children:"5 = Sangat baik"})]})]}),t.sub_criterias.map(o=>e.jsx(k,{radius:20,legend:o.name,styles:{root:{margin:0,padding:16},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:e.jsx(p,{children:o.sub_sub_criterias.map((n,w)=>{var r,l,m;return n.type==="radio"?e.jsx(h.Group,{value:(r=a.data.evaluations.find(i=>i.sub_sub_criteria_id===n.id))==null?void 0:r.value,description:n.description,label:n.name,withAsterisk:!!n.required,styles:{label:{marginBottom:8},description:{marginBottom:8},error:{marginTop:8}},onChange:i=>{a.data.evaluations.forEach(s=>{s.sub_sub_criteria_id===n.id&&(s.value=i)}),a.setData("evaluations",a.data.evaluations)},children:e.jsxs(J,{gap:32,children:[e.jsx(h,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:a.data.evaluations.map(i=>i.sub_sub_criteria_id===n.id&&i.value).includes("1")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"1",label:"1",color:"gold.2"}),e.jsx(h,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:a.data.evaluations.map(i=>i.sub_sub_criteria_id===n.id&&i.value).includes("2")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"2",label:"2",color:"gold.2"}),e.jsx(h,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:a.data.evaluations.map(i=>i.sub_sub_criteria_id===n.id&&i.value).includes("3")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"3",label:"3",color:"gold.2"}),e.jsx(h,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:a.data.evaluations.map(i=>i.sub_sub_criteria_id===n.id&&i.value).includes("4")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"4",label:"4",color:"gold.2"}),e.jsx(h,{disabled:!0,styles:{label:{marginLeft:16,padding:0,fontSize:14},radio:{border:0,backgroundColor:a.data.evaluations.map(i=>i.sub_sub_criteria_id===n.id&&i.value).includes("5")?"var(--mantine-color-gold-2)":"#f1f3f5"}},size:"md",value:"5",label:"5",color:"gold.2"})]})},n.id):n.type==="number"?e.jsx(ne,{value:(l=a.data.evaluations.find(i=>i.sub_sub_criteria_id===n.id))==null?void 0:l.value,disabled:!0,hideControls:!0,description:n.description,label:n.name,withAsterisk:!!n.required,variant:"filled",styles:{label:{marginBottom:8},description:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:16,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},placeholder:"Masukkan nilai...",onChange:i=>{a.data.evaluations.forEach(s=>{s.sub_sub_criteria_id===n.id&&(s.value=i)}),a.setData("evaluations",a.data.evaluations)},error:a.errors.email},n.id):e.jsx(re,{value:(m=a.data.evaluations.find(i=>i.sub_sub_criteria_id===n.id))==null?void 0:m.value,disabled:!0,description:n.description,label:n.name,withAsterisk:!!n.required,variant:"filled",styles:{description:{marginBottom:8},label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:16,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},placeholder:"Masukkan nilai...",onChange:i=>{a.data.evaluations.forEach(s=>{s.sub_sub_criteria_id===n.id&&(s.value=i.target.value)}),a.setData("evaluations",a.data.evaluations)},error:a.errors.value},n.id)})})},o.id))]},t.id)),e.jsxs(k,{radius:20,legend:"Informasi Tambahan",styles:{root:{margin:0,padding:16},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[e.jsx(j,{fz:14,mb:8,children:"Catatan"}),e.jsx(M,{editor:E,style:{borderRadius:20,fontSize:14},children:e.jsx(M.Content,{})})]})]})]})})]})]})})};export{Re as default};