import{u as C,r as l,j as i,M as N,b as w,c as x}from"./index.6d14ec6f.js";import{u as R,b as T,C as b}from"./DraggableCharContainer.d04beefc.js";function G({sx:z,charKey:u,type:r="default",charStatus:f="default",readonly:a=!u||f==="picked",selecting:s,metaInfo:q,skinDisabled:d,charName:B,hidden:I,nameDisplay:A,mini:t,onDelete:m,onSelectChange:o,children:p}){var c;const M=R(()=>r==="tier-list"&&s&&(o==null?void 0:o(!s)),["mouseup","touchend"]),{classes:k}=T({readonly:a,mini:t,type:r,selecting:s}),{t:v}=C(),j=l.exports.useMemo(()=>i(N,{opacity:.6,color:"#000",zIndex:5,sx:{color:"#fff",display:"flex",fontWeight:600,fontSize:t?"10px":"",alignItems:"center",justifyContent:"center"},children:w(x,{children:[f==="picked"&&v("picked"),s&&r==="tier-list"&&v("charContainer.delete"),d&&"\u672A\u6301\u6709"]})}),[t,f,v,s,r,d]),O=l.exports.useMemo(()=>i(x,{className:k.nameBox,children:B}),[B,k.nameBox]),W=()=>{a||(s&&r==="tier-list"?m==null||m():f!=="picked"&&(o==null||o(!s)))};return i(x,{ref:M,className:k.avatarBox,sx:{...z,height:I?0:t?40:80},onClick:W,children:p!=null?p:!I&&w(x,{sx:{cursor:a?"":"pointer"},children:[!(s||f==="default")&&j,s&&r==="tier-list"&&j,d&&j,A&&O,i(b,{imgKey:u!=null?u:"",width:t?40:80,flowWidthRef:(c=M.current)!=null?c:void 0})]})})}export{G as C};