import{e as d,g as S}from"./AppLayout-DLjGrGrH.js";import{f as N,u as B,j as b,o as j}from"./app-Dq2eNAco.js";import{a as p}from"./Title-DMCPJ7bQ.js";/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A=d("outline","clock-pause","IconClockPause",[["path",{d:"M20.942 13.018a9 9 0 1 0 -7.909 7.922",key:"svg-0"}],["path",{d:"M12 7v5l2 2",key:"svg-1"}],["path",{d:"M17 17v5",key:"svg-2"}],["path",{d:"M21 17v5",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var L=d("outline","clock-play","IconClockPlay",[["path",{d:"M12 7v5l2 2",key:"svg-0"}],["path",{d:"M17 22l5 -3l-5 -3z",key:"svg-1"}],["path",{d:"M13.017 20.943a9 9 0 1 1 7.831 -7.292",key:"svg-2"}]]),R={input:"m_468e7eda"};const _={},f=N((y,v)=>{const e=B("TimeInput",_,y),{classNames:h,styles:k,unstyled:g,vars:E,withSeconds:r,minTime:o,maxTime:c,value:T,onChange:I,...x}=e,{resolvedClassNames:l,resolvedStyles:M}=S({classNames:h,styles:k,props:e}),C=a=>{if(o!==void 0||c!==void 0){const[t,i,u]=a.split(":").map(Number);if(o){const[s,n,m]=o.split(":").map(Number);if(t<s||t===s&&i<n||r&&t===s&&i===n&&u<m)return-1}if(c){const[s,n,m]=c.split(":").map(Number);if(t>s||t===s&&i>n||r&&t===s&&i===n&&u>m)return 1}}return 0},P=a=>{var t,i,u;if((t=e.onBlur)==null||t.call(e,a),o!==void 0||c!==void 0){const s=a.currentTarget.value;if(s){const n=C(s);n===1?(a.currentTarget.value=c,(i=e.onChange)==null||i.call(e,a)):n===-1&&(a.currentTarget.value=o,(u=e.onChange)==null||u.call(e,a))}}};return b.jsx(p,{classNames:{...l,input:j(R.input,l==null?void 0:l.input)},styles:M,unstyled:g,ref:v,value:T,...x,step:r?1:60,onChange:I,onBlur:P,type:"time",__staticSelector:"TimeInput"})});f.classes=p.classes;f.displayName="@mantine/dates/TimeInput";export{L as I,f as T,A as a};
