import{k as p,f as B,u as C,a as R,j as d,B as f,c as _,d as N,e as P,g as S}from"./app-DiiKlxiT.js";import{g as V}from"./get-auto-contrast-value-Da6zqqWm.js";function I(a="top-end",s=0){const t={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},i=p(s),[r,o]=a.split("-");return r==="top"&&(t["--indicator-top"]=i,t["--indicator-translate-y"]="-50%"),r==="middle"&&(t["--indicator-top"]="50%",t["--indicator-translate-y"]="-50%"),r==="bottom"&&(t["--indicator-bottom"]=i,t["--indicator-translate-y"]="50%"),o==="start"&&(t["--indicator-left"]=i,t["--indicator-translate-x"]="-50%"),o==="center"&&(t["--indicator-left"]="50%",t["--indicator-translate-x"]="-50%"),o==="end"&&(t["--indicator-right"]=i,t["--indicator-translate-x"]="50%"),t}var m={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};const k={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},A=_((a,{color:s,position:t,offset:i,size:r,radius:o,zIndex:e,autoContrast:n})=>({root:{"--indicator-color":s?N(s,a):void 0,"--indicator-text-color":V(n,a)?P({color:s,theme:a,autoContrast:n}):void 0,"--indicator-size":p(r),"--indicator-radius":o===void 0?void 0:S(o),"--indicator-z-index":e==null?void 0:e.toString(),...I(t,i)}})),v=B((a,s)=>{const t=C("Indicator",k,a),{classNames:i,className:r,style:o,styles:e,unstyled:n,vars:g,children:u,position:E,offset:F,inline:b,label:c,radius:T,color:q,withBorder:y,disabled:h,processing:x,zIndex:D,autoContrast:G,mod:j,...w}=t,l=R({name:"Indicator",classes:m,props:t,className:r,style:o,classNames:i,styles:e,unstyled:n,vars:g,varsResolver:A});return d.jsxs(f,{ref:s,...l("root"),mod:[{inline:b},j],...w,children:[!h&&d.jsx(d.Fragment,{children:d.jsx(f,{mod:{"with-label":!!c,"with-border":y,processing:x},...l("indicator"),children:c})}),u]})});v.classes=m;v.displayName="@mantine/core/Indicator";export{v as I};