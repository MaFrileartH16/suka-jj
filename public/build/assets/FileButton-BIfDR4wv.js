import{r as a,u as y,z as F,j as r,v as j}from"./app-DiiKlxiT.js";const C={multiple:!1},B=a.forwardRef((o,l)=>{const{onChange:s,children:i,multiple:n,accept:u,name:c,form:f,resetRef:p,disabled:m,capture:d,inputProps:g,...h}=y("FileButton",C,o),t=a.useRef(),R=()=>{var e;!m&&((e=t.current)==null||e.click())},x=e=>{s(n?Array.from(e.currentTarget.files):e.currentTarget.files[0]||null)};return F(p,()=>{t.current.value=""}),r.jsxs(r.Fragment,{children:[i({onClick:R,...h}),r.jsx("input",{style:{display:"none"},type:"file",accept:u,multiple:n,onChange:x,ref:j(l,t),name:c,form:f,capture:d,...g})]})});B.displayName="@mantine/core/FileButton";export{B as F};
