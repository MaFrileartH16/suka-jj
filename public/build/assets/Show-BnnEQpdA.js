import{W as b,j as t}from"./app-DiiKlxiT.js";import{A as f,G as p,b as r,g as x,I as c}from"./AppLayout-B6y90Eb6.js";import{B as _}from"./Breadcrumbs-CtJCNhlY.js";import{F as k}from"./id-_7XVpB76.js";import{G as l,I as j}from"./IconCalendar-BkYIYbaM.js";import{S as v}from"./SimpleGrid-D29RUTAm.js";import{I as m}from"./Indicator-CSJOwXIq.js";import{T as g}from"./TextInput-B0XdCOQC.js";import{I as L}from"./IconBuilding-CVljDcJS.js";import{M as w}from"./MultiSelect-C3Wvv53d.js";import{S as R}from"./Select-BP1qawUy.js";import{D as y}from"./DatePickerInput-ByUevn6m.js";import{T as u,I,a as T}from"./TimeInput-CNuwOfzK.js";import"./Title-C7buyiDG.js";import"./Calendar-sB8SGUJ4.js";import"./get-base-value-B0sTzBj0.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./OptionsDropdown-Bd_DU1Ob.js";import"./CheckIcon-BYHwa9hh.js";import"./ScrollArea-BwY3eday.js";const K=i=>{var d,o,s,n,h;const e=b({name:i.exercise.name,place:i.exercise.place,athlete_ids:i.exercise.athletes.map(a=>a.id),coach_id:i.exercise.coach.id,date:i.exercise.date,start_time:i.exercise.start_time,end_time:i.exercise.end_time});return console.log(i),t.jsxs(f,{title:`Latihan ${e.data.name?`'${e.data.name}'`:""}`,authed:i.auth.user,meta:i.meta,unreadHistories:i.total_unread_histories,children:[t.jsx(p,{w:"100%",mb:32,justify:"space-between",children:t.jsx(_,{navList:[{label:"Latihan",route:"exercises.index"},{label:"Rincian"}]})}),t.jsxs(l,{grow:!0,justify:"space-between",children:[t.jsx(l.Col,{span:{base:12,md:4},children:t.jsxs(v,{spacing:32,cols:{base:1,xs:2,md:1},children:[t.jsx(m,{styles:{indicator:{padding:16,border:"4px solid white"}},inline:!0,color:"gold.2",label:e.data.athlete_ids.length>1?`${e.data.athlete_ids.length} Atlet`:"Atlet",position:"bottom-center",size:32,withBorder:!0,children:t.jsxs(r.Group,{spacing:40,style:{display:"flex",justifyContent:"center"},children:[t.jsx(r,{src:(d=i.athletes.find(a=>a.id===e.data.athlete_ids[0]))==null?void 0:d.avatar,alt:(o=i.athletes.find(a=>a.id===e.data.athlete_ids[0]))==null?void 0:o.full_name,size:160}),e.data.athlete_ids.length>1&&t.jsxs(r,{size:160,children:["+",e.data.athlete_ids.length-1]})]})}),t.jsx(m,{inline:!0,color:"gold.2",styles:{indicator:{padding:16}},label:e.data.coach_id?(s=i.coaches.find(a=>a.id===e.data.coach_id))==null?void 0:s.role:"Pelatih",position:"bottom-center",size:32,withBorder:!0,children:t.jsx(r,{mx:"auto",src:(n=i.coaches.find(a=>a.id===e.data.coach_id))==null?void 0:n.avatar,alt:(h=i.coaches.find(a=>a.id===e.data.coach_id))==null?void 0:h.full_name,size:160})})]})}),t.jsx(l.Col,{span:{base:12,md:8},children:t.jsxs(k,{mb:16,radius:20,legend:"Informasi Latihan",styles:{root:{margin:0,padding:16,border:"1px solid #dcdcdc"},legend:{borderRadius:20,fontSize:16,padding:16,fontWeight:"bold"}},children:[t.jsx(g,{disabled:!0,variant:"filled",leftSection:t.jsx(x,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,label:"Nama",placeholder:"Masukkan nama...",onChange:a=>{e.setData("name",a.target.value),a.target.value?e.clearErrors("name"):e.setError({name:"Nama tidak boleh kosong."})},error:e.errors.name,value:e.data.name}),t.jsx(g,{disabled:!0,variant:"filled",leftSection:t.jsx(L,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},mb:16,label:"Tempat",placeholder:"Masukkan tempat...",onChange:a=>{e.setData("place",a.target.value),a.target.value?e.clearErrors("place"):e.setError({place:"Tempat tidak boleh kosong."})},error:e.errors.place,value:e.data.place}),t.jsx(w,{mb:16,value:e.data.athlete_ids,hidePickedOptions:!0,disabled:!0,variant:"filled",styles:{label:{marginBottom:8},input:{minHeight:48,borderRadius:32,paddingLeft:50,paddingRight:16,display:"flex"},section:{marginLeft:0,width:48,minHeight:48},error:{marginTop:8}},leftSection:t.jsx(c,{}),label:"Atlet",clearable:!0,searchable:!0,nothingFoundMessage:"Tidak ada atlet ditemukan",checkIconPosition:"right",onChange:a=>{e.setData("athlete_ids",a),a.length===0?e.setError({athlete_ids:"Atlet tidak boleh kosong."}):e.clearErrors("athlete_ids")},data:i.athletes.map(a=>({value:a.id,label:`${a.full_name} (${a.role})`})),error:e.errors.athlete_ids}),t.jsx(R,{mb:16,value:e.data.coach_id,disabled:!0,variant:"filled",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:t.jsx(c,{}),label:"Pelatih",clearable:!0,searchable:!0,nothingFoundMessage:"Tidak ada pelatih ditemukan",placeholder:"Pilih pelatih...",checkIconPosition:"right",onChange:a=>{e.setData("coach_id",a),a?e.clearErrors("coach_id"):e.setError({coach_id:"Pelatih tidak boleh kosong."})},data:i.coaches.map(a=>({value:a.id,label:`${a.full_name} (${a.role})`})),error:e.errors.coach_id}),t.jsx(y,{mb:16,locale:"id",monthsListFormat:"MMMM",disabled:!0,clearable:!0,allowDeselect:!0,firstDayOfWeek:0,variant:"filled",valueFormat:"D-M-YYYY",leftSection:t.jsx(j,{}),label:"Tanggal",placeholder:"Masukkan tanggal...",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8},calendarHeader:{height:48},calendarHeaderControl:{height:48,width:48,borderRadius:32}},onChange:a=>{e.setData("date",a.toLocaleString()),a?e.clearErrors("date"):e.setError({date:"Tanggal latihan tidak boleh kosong."})},error:e.errors.date,value:new Date(e.data.date)}),t.jsx(u,{mb:16,color:"gold.2",placeholder:"HH:MM",locale:"id",disabled:!0,variant:"filled",leftSection:t.jsx(I,{}),label:"Waktu Mulai",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8},calendarHeader:{height:48},calendarHeaderControl:{height:48,width:48,borderRadius:32}},onChange:a=>{e.setData("start_time",a.target.value),a.target.value?e.clearErrors("start_time"):e.setError({start_time:"Waktu mulai tidak boleh kosong."})},error:e.errors.start_time,value:e.data.start_time}),t.jsx(u,{color:"gold.2",placeholder:"HH:MM",locale:"id",disabled:!0,variant:"filled",leftSection:t.jsx(T,{}),label:"Waktu Selesai",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8},calendarHeader:{height:48},calendarHeaderControl:{height:48,width:48,borderRadius:32}},onChange:a=>{e.setData("end_time",a.target.value),a.target.value?e.clearErrors("end_time"):e.setError({end_time:"Waktu selesai tidak boleh kosong."})},error:e.errors.end_time,value:e.data.end_time})]})})]})]})};export{K as default};
