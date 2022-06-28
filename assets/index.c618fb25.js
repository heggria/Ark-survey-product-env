import{o as Se,R as Be,f as L,r as O,g as Pe,j as t,b as y,c as d,E as U,P as C,d as K,B as V,H as be,J as ge,K as Q,u as le,M as Ee,F as X,N as je,G as J,T as ae,Q as ue,y as oe,V as We,W as $e,S as Re,C as q,X as Me,p as D,Y as ye,a as ve}from"./index.89d34bc2.js";import{D as we,I as ke,u as Ke,a as Ae}from"./DraggableCharContainer.6c496cc7.js";import{S as ie}from"./SegmentedControl.653edd9d.js";import{N as ee,u as Ie,a as F}from"./useQuery.38d53892.js";import{C as Fe}from"./index.1d958a9a.js";function Ue({size:s,thickness:e,sum:r,value:n,root:x,offset:a}){const u=(s*.9-e*2)/2,o=Math.PI*u*2/100,c=x?`${(100-r)*o}, ${r*o}`:`${n*o}, ${(100-n)*o}`;return{strokeWidth:e,cx:s/2,cy:s/2,r:u,transform:x?`scale(1, -1) translate(0, -${s})`:null,strokeDasharray:c,strokeDashoffset:x?0:a}}var Te=Object.defineProperty,pe=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,de=(s,e,r)=>e in s?Te(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,Qe=(s,e)=>{for(var r in e||(e={}))De.call(e,r)&&de(s,r,e[r]);if(pe)for(var r of pe(e))Le.call(e,r)&&de(s,r,e[r]);return s};function Oe({size:s,value:e,offset:r,sum:n,thickness:x,root:a,color:u,lineRoundCaps:o}){const c=Se(),p=c.fn.themeColor(u||(c.colorScheme==="dark"?"dark":"gray"),u?c.fn.primaryShade():c.colorScheme==="dark"?4:1,!1);return Be.createElement("circle",Qe({fill:"none",strokeLinecap:o?"round":"butt",stroke:p},Ue({sum:n,size:s,thickness:x,value:e,offset:r,root:a})))}Oe.displayName="@mantine/core/Curve";var Ge=Object.defineProperty,Ye=Object.defineProperties,He=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,fe=(s,e,r)=>e in s?Ge(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,G=(s,e)=>{for(var r in e||(e={}))Je.call(e,r)&&fe(s,r,e[r]);if(xe)for(var r of xe(e))Ve.call(e,r)&&fe(s,r,e[r]);return s},Y=(s,e)=>Ye(s,He(e));function Xe({size:s,thickness:e,sections:r,renderRoundedLineCaps:n}){const x=r.reduce((p,h)=>p+h.value,0),a=Math.PI*((s*.9-e*2)/2)*2;let u=a;const o=[],c=[];for(let p=0;p<r.length;p+=1)o.push({sum:x,offset:u,data:r[p],root:!1}),u-=r[p].value/100*a;if(o.push({sum:x,offset:u,data:null,root:!0}),c.push(Y(G({},o[o.length-1]),{lineRoundCaps:!1})),o.length>2){c.push(Y(G({},o[0]),{lineRoundCaps:n})),c.push(Y(G({},o[o.length-2]),{lineRoundCaps:n}));for(let p=1;p<=o.length-3;p+=1)c.push(Y(G({},o[p]),{lineRoundCaps:!1}))}else c.push(Y(G({},o[0]),{lineRoundCaps:n}));return c}var Ze=L({root:{position:"relative"},label:{position:"absolute",top:"50%",transform:"translateY(-50%)"}}),Ce=Ze,qe=Object.defineProperty,Z=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,he=(s,e,r)=>e in s?qe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,me=(s,e)=>{for(var r in e||(e={}))Ne.call(e,r)&&he(s,r,e[r]);if(Z)for(var r of Z(e))ze.call(e,r)&&he(s,r,e[r]);return s},es=(s,e)=>{var r={};for(var n in s)Ne.call(s,n)&&e.indexOf(n)<0&&(r[n]=s[n]);if(s!=null&&Z)for(var n of Z(s))e.indexOf(n)<0&&ze.call(s,n)&&(r[n]=s[n]);return r};const ss={size:120,thickness:12},H=O.exports.forwardRef((s,e)=>{const r=Pe("RingProgress",ss,s),{className:n,style:x,label:a,sections:u,size:o,thickness:c,classNames:p,styles:h,roundCaps:l,unstyled:v}=r,b=es(r,["className","style","label","sections","size","thickness","classNames","styles","roundCaps","unstyled"]),{classes:w,cx:_}=Ce(null,{classNames:p,styles:h,unstyled:v,name:"RingProgress"}),B=Xe({size:o,thickness:c,sections:u,renderRoundedLineCaps:l}).map((i,k)=>{var m,z;return t(Oe,{value:(m=i.data)==null?void 0:m.value,size:o,thickness:c,sum:i.sum,offset:i.offset,color:(z=i.data)==null?void 0:z.color,root:i.root,lineRoundCaps:i.lineRoundCaps},k)});return y(d,{...me({style:me({width:o,height:o},x),className:_(w.root,n),ref:e},b),children:[t("svg",{width:o,height:o,style:{transform:"rotate(-90deg)"},children:B}),a&&t("div",{className:w.label,style:{right:c*2,left:c*2},children:a})]})});H.displayName="@mantine/core/RingProgress";const ts=L((s,{fold:e})=>({container:{position:"relative",background:s.white,borderRadius:"10px",width:335},ringContainer:{display:"flex",alignItems:"center",padding:7,boxSizing:"border-box",userSelect:"none",paddingTop:"16px"},bottomBox:{transition:"all 0.5s",overflow:"hidden",position:"relative",width:"100%",height:e?40:195,zIndex:2},folderButton:{transition:"all 0.5s",display:"flex",flexWrap:"wrap",width:"100%",height:40,overflow:"hidden",padding:"5px",boxSizing:"border-box"},detailBarSlider:{height:"100%"},numberInput:{},detailName:{fontWeight:700,marginTop:4,fontSize:s.fontSizes.xs,marginBottom:4,height:19}}));function rs({onClickFoldButton:s,data:e,verifyRule:r,maxEliteVerifyRule:n,maxLevelVerifyRule:x,fold:a=!1,onCharBasicDataChange:u}){var v,b,w,_,B,i,k,m,z,j,R;const{classes:o,cx:c}=ts({fold:a}),{charMap:p}=U(),h=p[e.key].rarity,l=O.exports.useMemo(()=>[{value:"0",label:"\u672A\u7CBE\u82F1"},{value:"1",label:"\u7CBE\u4E00"},{value:"2",label:"\u7CBE\u4E8C"}].filter((T,f)=>f<=n[h]),[n,h]);return y(C,{shadow:"md",withBorder:!0,className:o.container,children:[y(d,{className:o.ringContainer,children:[t(H,{size:110,thickness:5,label:y(d,{sx:{position:"relative"},children:[t(K,{sx:{fontSize:"12px",position:"absolute",left:"37px",top:-5,fontWeight:700},align:"center",children:"LV"}),t(K,{sx:{fontSize:"36px"},align:"center",weight:700,children:(v=e==null?void 0:e.level)!=null?v:1})]}),sections:[{value:((b=e==null?void 0:e.level)!=null?b:1)*100/x[e.elite][h],color:"yellow"}]}),t(H,{size:70,thickness:4,label:y(d,{sx:{position:"relative"},children:[t(K,{sx:{fontSize:"12px",position:"absolute",left:"15px",bottom:-35,fontWeight:700},align:"center",children:"\u7CBE\u82F1"}),t(K,{size:"xl",align:"center",children:(w=e==null?void 0:e.elite)!=null?w:0})]}),sections:[{value:((_=e==null?void 0:e.elite)!=null?_:0)*100/n[h],color:"green"}]}),t(H,{size:70,thickness:4,label:y(d,{sx:{position:"relative"},children:[t(K,{sx:{fontSize:"12px",position:"absolute",left:"15px",bottom:-35,fontWeight:700},align:"center",children:"\u6F5C\u80FD"}),t(K,{size:"xl",align:"center",children:(B=e==null?void 0:e.potentialLevel)!=null?B:0})]}),sections:[{value:((i=e==null?void 0:e.potentialLevel)!=null?i:0)*100/r.potentialLevel[1],color:"blue"}]}),t(H,{size:70,thickness:4,label:y(d,{sx:{position:"relative"},children:[t(K,{sx:{fontSize:"12px",position:"absolute",left:"15px",bottom:-35,fontWeight:700},align:"center",children:"\u4FE1\u8D56"}),t(K,{size:"xl",align:"center",children:(k=e==null?void 0:e.trust)!=null?k:0})]}),sections:[{value:((m=e==null?void 0:e.trust)!=null?m:0)*100/r.trust[1],color:"orange"}]})]}),t(d,{sx:{transition:"all 0.5s",position:"absolute",top:9,right:16,fontWeight:700},children:"\u6570\u503C"}),y(d,{className:o.bottomBox,children:[t(d,{className:o.folderButton,children:t(V,{variant:"subtle",sx:{width:"100%",height:"100%"},onClick:()=>s==null?void 0:s(!a),children:a?t(be,{size:30}):t(ge,{size:30})})}),t(we,{}),y(Q,{gutter:"sm",sx:{margin:"5px 10px"},children:[y(Q.Col,{span:6,className:o.detailBarSlider,children:[t(d,{className:o.detailName,children:"\u7CBE\u82F1\u9636\u6BB5"}),t(ie,{value:e.elite.toString(),onChange:N=>u==null?void 0:u({...e,elite:parseInt(N!=null?N:"0",10)}),size:"xs",data:l})]}),t(Q.Col,{span:6,className:o.numberInput,children:t(ee,{value:(z=e==null?void 0:e.level)!=null?z:1,onChange:N=>u==null?void 0:u({...e,level:N!=null?N:1}),label:"\u7B49\u7EA7",labelProps:{style:{fontWeight:700}},size:"xs",min:1,max:x[e.elite][h]})}),t(Q.Col,{span:6,className:o.numberInput,children:t(ee,{value:(j=e==null?void 0:e.potentialLevel)!=null?j:0,onChange:N=>u==null?void 0:u({...e,potentialLevel:N!=null?N:0}),label:"\u6F5C\u80FD",labelProps:{style:{fontWeight:700}},size:"xs",min:r.potentialLevel[0],max:r.potentialLevel[1]})}),t(Q.Col,{span:6,className:o.numberInput,children:t(ee,{value:(R=e==null?void 0:e.trust)!=null?R:0,onChange:N=>u==null?void 0:u({...e,trust:N!=null?N:0}),label:"\u4FE1\u8D56",labelProps:{style:{fontWeight:700}},size:"xs",min:r.trust[0],max:r.trust[1]})})]})]})]})}function os({imgKey:s,width:e=64,flowWidthRef:r}){const{imgPositionMap:n}=U();return t(ke,{url:"https://img.yituliu.site/static/skill_0.5.webp",width:e,originWidth:64,flowWidthRef:r,position:n.skillImgPosition["skill_icon_"+s]})}const ls=L((s,{mini:e,type:r,selecting:n})=>({avatarBox:{userSelect:"none",width:e?30:60,minWidth:e?30:60,height:e?30:60,overflow:"hidden",position:"relative",zIndex:1,boxShadow:"0px 1px 2px 1px "+s.colors.gray[7],margin:s.spacing.xs},nameBox:{position:"absolute",zIndex:2,top:e?"1px":"66px",left:e?"-50%":"0px",width:e?"200%":"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"14px",textAlign:"center",transform:e?"scale(0.5)":"",fontSize:"10px",fontWeight:700,background:"linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 90%, rgba(255,249,242,0) 100%)"}}));function is({skillKey:s,type:e="default",readonly:r=!s,metaInfo:n,skillStatus:x="default",skillName:a,nameDisplay:u,mini:o,selecting:c,onDelete:p,onSelectChange:h}){var _;const l=Ke(()=>c&&(h==null?void 0:h(!c)),["mouseup","touchend"]),{classes:v}=ls({mini:o,type:e,selecting:c}),{t:b}=le();Ae(),O.exports.useMemo(()=>t(Ee,{opacity:.6,color:"#000",zIndex:5,sx:{color:"#fff",display:"flex",fontWeight:600,fontSize:o?"10px":"",alignItems:"center",justifyContent:"center"},children:y(d,{children:[x==="picked"&&b("picked"),c&&e==="tier-list"&&b("skillContainer.delete")]})}),[o,b,x,c,e]);const w=()=>{c&&e==="tier-list"?p==null||p():h==null||h(!c)};return t(d,{ref:l,className:v.avatarBox,onClick:w,children:t(d,{children:t(os,{imgKey:s!=null?s:"",width:o?30:60,flowWidthRef:(_=l.current)!=null?_:void 0})})})}const ns=L((s,{fold:e})=>({rankBox:{height:40,width:"75px",background:s.white,fontWeight:700,position:"relative",zIndex:1,border:"1px solid"+s.colors.gray[2],borderRadius:"10px 10px 0 0"},bottomBox:{transition:"all 0.5s",overflow:"hidden",position:"relative",width:"100%",height:e?60:290,borderRadius:"0 10px 10px 10px",zIndex:2},folderButton:{transition:"all 0.5s",display:"flex",flexWrap:"wrap",width:"70px",height:e?50:70,overflow:"hidden",padding:"5px"},skillName:{transition:"all 0.5s",opacity:e?1:0,display:e?"":"none",flex:1,textAlign:"center",fontSize:s.fontSizes.xs,height:"20px",position:"absolute",bottom:"-19px",width:"90px",left:"-5px"},skillIconGroup:{transition:"all 0.5s",position:"absolute",top:e?0:42,left:85,marginRight:"10px",zIndex:3,fontWeight:700},skillELevel:{width:6,height:6,borderRadius:"50%",background:"#fff",position:"absolute"},detailBar:{padding:"14px",paddingTop:"0"},detailBarSlider:{padding:"5px 0",margin:"25px 6px",textAlign:"right",marginBottom:"0",position:"relative"},detailBarSliderNoInfo:{height:30.5,color:"#ccc",textAlign:"right"},detailSkillName:{transition:"all 0.5s",opacity:e?0:1,position:"absolute",top:-16,right:0,fontSize:s.fontSizes.xs,fontWeight:700}}));function cs({data:s,fold:e=!1,onClickFoldButton:r,onSelectSkillChange:n,onSkillLevelChange:x}){var w,_,B;const{classes:a,cx:u}=ns({fold:e}),{elite:o,skills:c,skillUse:p}=s,{charMap:h}=U(),l=O.exports.useMemo(()=>{const i=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"}];return o&&(o>0&&i.push({label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"}),o>1&&i.push({label:"\u4E13\u7CBE\u4E00",value:"8"},{label:"\u4E13\u7CBE\u4E8C",value:"9"},{label:"\u4E13\u7CBE\u4E09",value:"10"})),i},[o]),v=h[s.key].skills,b=O.exports.useMemo(()=>{const i=[];return Object.keys(v).sort((k,m)=>v[k].index-v[m].index).forEach((k,m)=>{var z,j,R,N,T;if(m<=o){const f=c[k];i.push(y(d,{sx:{display:"flex",alignItems:"center",flexFlow:"wrap",maxWidth:"80px",position:"relative",userSelect:"none",cursor:"pointer"},onClick:()=>n==null?void 0:n(f==null?void 0:f.key),children:[(f==null?void 0:f.level)>=7&&y(d,{sx:{position:"absolute",fontSize:"12px",textAlign:"center",color:"#fff",left:"5px",top:"5px",width:"16px",height:"16px",zIndex:4,background:"rgba(0,0,0,0.8)"},children:[t(d,{className:a.skillELevel,sx:{top:2,left:5,background:f.level>7?"#fff":"#777"}}),t(d,{className:a.skillELevel,sx:{bottom:2,left:8.5,background:f.level>9?"#fff":"#777"}}),t(d,{className:a.skillELevel,sx:{bottom:2,left:1.5,background:f.level>8?"#fff":"#777"}})]}),p===(f==null?void 0:f.key)&&y(X,{children:[t(d,{sx:{position:"absolute",fontSize:"12px",textAlign:"center",color:"#fff",right:"5px",top:"5px",width:0,height:0,zIndex:3,border:"14px solid transparent",borderTop:"14px solid rgba(14,140,226,0.9)",borderRight:"14px solid rgba(14,140,226,0.9)"}}),t(d,{sx:{position:"absolute",color:"#fff",right:"2px",top:"2px",zIndex:3,transform:"scale(0.65)"},children:t(je,{})})]}),t(is,{skillKey:(z=f==null?void 0:f.iconId)!=null?z:f==null?void 0:f.key}),t(d,{className:a.skillName,sx:{transform:"scale( "+(((j=v[f==null?void 0:f.key])==null?void 0:j.name.length)<5?1.1:((R=v[f==null?void 0:f.key])==null?void 0:R.name.length)<6?1:((N=v[f==null?void 0:f.key])==null?void 0:N.name.length)<8?.9:.8)+")"},children:(T=v[f==null?void 0:f.key])==null?void 0:T.name})]},f==null?void 0:f.key))}}),new Array(3-i.length).fill(0).forEach((k,m)=>{i.push(t(d,{sx:{display:"flex",alignItems:"center",flexFlow:"wrap",maxWidth:"80px",position:"relative",userSelect:"none",fontSize:"40px",textAlign:"center",fontWeight:100,color:"#ccc"},children:t(d,{sx:{border:"1px solid #ccc",margin:"9px",lineHeight:"60px",width:"60px",height:"60px"},children:"/"})},m))}),i},[c,o,a.skillELevel,a.skillName,p,v,n]);return y(d,{sx:{position:"relative",width:"335px",userSelect:"none"},children:[t(d,{className:a.rankBox,children:t(d,{sx:i=>({padding:"10px"}),children:"Rank "+(((w=c[p])==null?void 0:w.level)>6?7:(B=(_=c[p])==null?void 0:_.level)!=null?B:1)})}),t(d,{sx:{transition:"all 0.5s",position:"absolute",top:9,right:16,fontWeight:700,opacity:e?0:1},children:"\u6280\u80FD"}),y(C,{withBorder:!0,shadow:"md",className:a.bottomBox,children:[t(d,{className:a.folderButton,children:t(V,{variant:"subtle",sx:{width:"100%",height:"100%"},onClick:()=>r==null?void 0:r(!e),children:e?t(be,{size:30}):t(ge,{size:30})})}),t(we,{}),t(d,{className:a.detailBar,children:Object.keys(v).sort((i,k)=>v[i].index-v[k].index).map((i,k)=>{var m,z;return k<=o?y(d,{className:a.detailBarSlider,children:[t(d,{className:a.detailSkillName,children:(m=v[i])==null?void 0:m.name}),t(ie,{value:(z=c[i])==null?void 0:z.level.toString(),onChange:j=>x==null?void 0:x(j,s,i),size:"xs",sx:{height:22.5},data:l})]},i):t(d,{className:u(a.detailBarSlider,a.detailBarSliderNoInfo),children:"NO INFO"},k)})})]}),t(J,{spacing:0,className:a.skillIconGroup,children:b})]})}function se({imgKey:s,width:e=256,flowWidthRef:r}){const{imgPositionMap:n}=U();return t(ke,{url:"https://img.yituliu.site/static/uniequip_0.5.webp",width:e,originWidth:256,flowWidthRef:r,position:n.uniEquipImgPosition[s]})}const as=L((s,{fold:e})=>({container:{position:"relative",background:s.white,borderRadius:"10px",width:335,display:"flex",marginTop:"40px",height:"150px",overflow:"hidden"}}));function us({data:s,fold:e=!1,onClickFoldButton:r,onSelectUniEquipChange:n,onUniEquipLevelChange:x}){var v,b,w,_,B;const a=O.exports.useMemo(()=>[{value:"1",label:"\u4E00\u7EA7"},{value:"2",label:"\u4E8C\u7EA7"},{value:"3",label:"\u4E09\u7EA7"}],[]),{charMap:u}=U(),{classes:o,cx:c}=as({fold:e}),p=O.exports.useMemo(()=>{const i={};return Object.keys(u[s.key].equips).forEach((k,m)=>{if(m===0){i.default={...u[s.key].equips[k]};return}i[k]={...u[s.key].equips[k]}}),i},[u,s.key]),h=O.exports.useMemo(()=>{let i="",k="";const m=Object.keys(p).filter(z=>{var j,R;return z==="default"||((R=(j=s==null?void 0:s.modules)==null?void 0:j[z])==null?void 0:R.level)>0});if(m.length>0){const z=m.findIndex(j=>j===s.moduleUse);z>0&&(i=m[z-1]),z<m.length-1&&(k=m[z+1])}return{frontKey:i,backKey:k}},[s.moduleUse,s.modules,p]),l=O.exports.useCallback(i=>{const{frontKey:k,backKey:m}=h;if(i==="up"&&k){n==null||n(k);return}if(i==="down"&&m){n==null||n(m);return}},[h,n]);return y(d,{sx:{position:"relative",width:"335px",userSelect:"none"},children:[t(d,{sx:{transition:"all 0.5s",position:"absolute",width:"100%",top:"0px"},children:y(J,{position:"apart",mx:16,children:[t(ae,{order:5,children:s.elite===2&&((v=p==null?void 0:p[s.moduleUse])==null?void 0:v.name)}),Object.keys(p).length>0&&s.elite===2&&y(J,{children:[Object.keys(s.modules).filter(i=>!i.includes("001")).map(i=>s.modules[i].level===0?t(ue,{size:"lg",onClick:()=>x==null?void 0:x(1,i),children:t(se,{imgKey:s.modules[i].key,width:30})},i):t(ue,{size:"lg",variant:"outline",color:"green",onClick:()=>x==null?void 0:x(0,i),children:t(se,{imgKey:s.modules[i].key,width:30})},i)),t(ae,{order:5,children:"\u6A21\u7EC4"})]})]})}),t(C,{withBorder:!0,shadow:"md",className:o.container,children:Object.keys(p).length>0&&s.elite===2?y(X,{children:[y(oe,{sx:{width:"40px"},spacing:0,children:[t(V,{variant:"subtle",radius:0,disabled:h.frontKey==="",sx:{height:75,padding:0},onClick:()=>l("up"),children:t(We,{})}),t(V,{variant:"subtle",radius:0,disabled:h.backKey==="",sx:{height:75,padding:0},onClick:()=>l("down"),children:t($e,{})})]}),y(d,{sx:{flex:"1",display:"flex",flexDirection:"row-reverse"},children:[s.moduleUse!=="default"?y(X,{children:[y(d,{sx:{transition:"all 0.5s",height:"100%",boxSizing:"border-box",padding:e?"10px 0":10,paddingTop:20,width:e?0:64,overflow:"hidden",position:"relative"},children:[t(d,{sx:{fontSize:"12px",fontWeight:700,textAlign:"center",minWidth:44},children:"\u7B49\u7EA7"}),t(Re,{h:5}),t(ie,{value:(w=(b=s.modules)==null?void 0:b[s.moduleUse])==null?void 0:w.level.toString(),onChange:i=>x==null?void 0:x(parseInt(i,10),s.moduleUse),data:a,size:"xs",orientation:"vertical"})]}),y(q,{sx:i=>({flex:"1",fontWeight:700,fontSize:"30px",cursor:"pointer",color:i.colors.blue[6]}),onClick:()=>r==null?void 0:r(!e),children:[y(d,{sx:i=>({border:"5px solid "+(e?i.colors.blue[6]:"#ccc"),width:"30px",height:"30px",zIndex:0,position:"relative"}),children:[t(d,{sx:{width:5,height:10,position:"absolute",background:"#fff",zIndex:1,top:"5px",left:"-5px"}}),t(d,{sx:{width:5,height:10,position:"absolute",background:"#fff",zIndex:1,bottom:"5px",right:"-5px"}})]}),t(d,{sx:{width:"18px",height:"40px",position:"absolute",background:"#fff",zIndex:1},children:(B=(_=s.modules)==null?void 0:_[s.moduleUse])==null?void 0:B.level})]})]}):t(q,{sx:{flex:"1",fontWeight:500,color:"#ccc"},children:"NO INFO"}),t(se,{imgKey:s.moduleUse,width:150}),t(d,{sx:{borderLeft:"1px solid #ccc"}})]})]}):t(q,{sx:{width:"100%",fontWeight:500,color:"#ccc"},children:"NO INFO"})})]})}const ps=L(s=>({container:{position:"relative",background:s.white,borderRadius:"10px",width:335,padding:"15px",boxSizing:"border-box",overflow:"auto","::-webkit-scrollbar":{display:"none"}}}));function ds({children:s}){const{classes:e,cx:r}=ps(),n=O.exports.useRef(null);return O.exports.useEffect(()=>{var a;const x=(a=n.current)==null?void 0:a.addEventListener("wheel",u=>{u.preventDefault(),n.current&&(n.current.scrollLeft+=u.deltaY/10)});return()=>{x&&removeEventListener("wheel",x)}},[]),t(C,{ref:n,className:e.container,shadow:"md",radius:"lg",p:"lg",withBorder:!0,children:s})}function xs({data:s,charSkinKeys:e,onSelectChange:r}){const{charMap:n}=U(),x=O.exports.useMemo(()=>{var u,o;const a=(o=(u=n[s==null?void 0:s.key])==null?void 0:u.skins)!=null?o:[];return Object.keys(a).map(c=>{const p=c===s.key||s.elite>=1&&c===s.key+"_1"||s.elite>=2&&c===s.key+"_2",h=e==null?void 0:e.includes(c);return t(Fe,{charKey:c,onSelectChange:()=>r==null?void 0:r(c),sx:{background:s.skinUse===c?"yellow":void 0},dragDisabled:!0,skinDisabled:!h&&!p,readonly:!h&&!p},c)})},[n,e,s.elite,s.key,s.skinUse,r]);return t(ds,{children:t(J,{sx:{marginRight:"20px"},children:x})})}const _e=Me(s=>({editingCharKey:"",updateEditingCharKey:e=>s(r=>({...r,editingCharKey:e}))}));class te{constructor(){this.serviceName="charBox"}getCharBoxByUserId(e){return D(this.serviceName,"getCharBoxByUserId",e)}createOne(e){return D(this.serviceName,"createOne",e)}updateOne(e){return D(this.serviceName,"updateOne",e)}}const fs={id:"",userId:"",characterKeys:{},updatedDate:""};function hs(){const s=ye();le();const e=O.exports.useRef("char-box"),{user:r}=ve(),{editingCharKey:n,updateEditingCharKey:x}=_e(),{isLoading:a,error:u,data:o}=Ie(e.current,async()=>{var w,_,B;const{data:b}=await new te().getCharBoxByUserId({userId:r.id});return b?(n===""&&x((B=(_=Object.keys((w=b.characterKeys)!=null?w:{}))==null?void 0:_[0])!=null?B:""),b):fs}),c=F(async()=>{const b=o!=null&&o.id?await new te().updateOne({charBox:{...o,userId:r.id}}):await new te().createOne({charBox:{...o,userId:r.id}});return s.setQueryData(e.current,b.data),b},{onSuccess:()=>{}}),p=F(async b=>{s.setQueryData(e.current,b)},{onSuccess:()=>{c.mutate()}}),h=F(async b=>{const w={...o==null?void 0:o.characterKeys};w[b.key]={...b},p.mutate({...o,characterKeys:w})}),l=F(async b=>{({...o==null?void 0:o.characterKeys},p.mutate({...o,characterKeys:{...o==null?void 0:o.characterKeys,...b}}))}),v=F(async b=>{const w={...o==null?void 0:o.characterKeys};b.forEach(_=>delete w[_]),p.mutate({...o,characterKeys:w})});return{charBox:o,uploadCharBox:c,updateLocalCharBox:p,addCharToBox:l,delCharFromBox:v,updateChar:h,isLoading:a}}class re{constructor(){this.serviceName="charSkinBox"}getCharSkinBoxByUserId(e){return D(this.serviceName,"getCharSkinBoxByUserId",e)}createOne(e){return D(this.serviceName,"createOne",e)}updateOne(e){return D(this.serviceName,"updateOne",e)}}const ms={id:"",userId:"",charSkinKeys:[],updatedDate:""};function bs(){const s=ye();le();const e=O.exports.useRef("skin-box"),{user:r}=ve(),{isLoading:n,error:x,data:a}=Ie(e.current,async()=>{const{data:c}=await new re().getCharSkinBoxByUserId({userId:r.id});return c||ms}),u=F(async()=>{const c=a!=null&&a.id?await new re().updateOne({charSkinBox:{...a,userId:r.id}}):await new re().createOne({charSkinBox:{...a,userId:r.id}});return s.setQueryData(e.current,c.data),c},{onSuccess:()=>{}}),o=F(async c=>{s.setQueryData(e.current,c)},{onSuccess:()=>{u.mutate()}});return{skinBox:a,uploadSkinBox:u,updateLocalSkinBox:o,isLoading:n}}function Os(){var R,N,T,f;const[s,e]=O.exports.useState(!1),[r,n]=O.exports.useState(!1),[x,a]=O.exports.useState(!1),{charMap:u}=U(),{editingCharKey:o,updateEditingCharKey:c}=_e(),{charBox:p,updateChar:h}=hs(),l=(R=p==null?void 0:p.characterKeys)==null?void 0:R[o],v=l!=null&&l.key?u[l.key].rarity:0,b=(N=(l==null?void 0:l.key)&&u[l.key].maxPotentialLevel)!=null?N:0,{skinBox:w}=bs();O.exports.useEffect(()=>{l||c(Object.keys(u)[0])},[u,l,c]);const[_]=O.exports.useState([0,0,1,2,2,2]),[B]=O.exports.useState([[30,30,40,40,50,50],[0,0,55,60,70,80],[0,0,0,70,80,90]]),[i,k]=O.exports.useState({potentialLevel:[0,0],trust:[0,200]});O.exports.useEffect(()=>{k(S=>({...S,potentialLevel:[0,b]}))},[b]);const m=O.exports.useCallback((S,W,P)=>{const M=parseInt(S,10),E={...W.skills};return M<=7&&W.skills[P].level<=7||M<7&&W.skills[P].level>=7?Object.keys(E).forEach($=>{$!==P&&(E[$]={...E[$],level:M})}):M>7&&W.skills[P].level<7&&Object.keys(E).forEach($=>{$!==P&&(E[$]={...E[$],level:7})}),Object.keys(E).forEach($=>{$===P&&(E[$]={...E[$],level:M})}),E},[]),z=O.exports.useCallback(S=>{var ne,ce;let W=0,P="",M=-1;Object.keys((ne=l==null?void 0:l.skills)!=null?ne:{}).forEach((I,A)=>{I===(l==null?void 0:l.skillUse)&&(M=A),S.elite>=A&&(W=A,P=I)});const E={...l==null?void 0:l.modules};let $=!1;(l==null?void 0:l.modules)&&S.elite!==(l==null?void 0:l.elite)&&($=!0,Object.keys(E).forEach((I,A)=>{E[I]={...E[I],level:1}}));const g={...S};if(isNaN(g.level)?g.level=1:g.level>B[g.elite][v]?g.level=B[g.elite][v]:g.level<1?g.level=1:g.level=Math.floor(g.level),Object.keys(i).forEach(I=>{["potentialLevel","trust"].includes(I)&&(isNaN(g[I])||g[I]<i[I][0]?g[I]=i[I][0]:g[I]>i[I][1]?g[I]=i[I][1]:g[I]=Math.floor(g[I]))}),l){const I={...l,...g,skinUse:l.elite>((ce=g==null?void 0:g.elite)!=null?ce:0)&&(g==null?void 0:g.skinUse.includes("_2"))||(g==null?void 0:g.skinUse.includes("_1"))?g==null?void 0:g.key:g.skinUse,skillUse:M>W?P:l==null?void 0:l.skillUse,modules:E,moduleUse:$?"default":l==null?void 0:l.moduleUse};Object.keys(l==null?void 0:l.skills).forEach((A,gs)=>{S.elite!==(l==null?void 0:l.elite)&&(W<1?I.skills=m==null?void 0:m("4",I,A):I.skills=m==null?void 0:m("7",I,A))}),h.mutate(I)}},[i,l,B,m,v,h]),j=O.exports.useCallback((S,W)=>{if(l){const P={...l==null?void 0:l.modules};P[W]={...P[W],level:S},h.mutate({...l,moduleUse:S===0?"default":l.moduleUse,modules:P})}},[l,h]);return t(J,{position:"center",sx:{alignItems:"flex-start",flex:"1"},children:l&&y(X,{children:[y(oe,{children:[t(xs,{data:l,charSkinKeys:(T=w==null?void 0:w.charSkinKeys)!=null?T:[],onSelectChange:S=>h.mutate({...l,skinUse:S})}),t(rs,{fold:r,verifyRule:i,maxEliteVerifyRule:_,maxLevelVerifyRule:B,onClickFoldButton:n,data:l,onCharBasicDataChange:z})]}),y(oe,{children:[t(cs,{fold:s,onClickFoldButton:e,data:l,onSelectSkillChange:S=>h.mutate({...l,skillUse:S}),onSkillLevelChange:(S,W,P)=>{h.mutate({...W,skills:m(S,W,P)})}}),Object.keys((f=u[l==null?void 0:l.key])==null?void 0:f.equips).length>0&&t(us,{fold:x,onClickFoldButton:a,data:l,onSelectUniEquipChange:S=>h.mutate({...l,moduleUse:S}),onUniEquipLevelChange:j})]})]})})}export{Os as I,hs as a,bs as b,_e as u};