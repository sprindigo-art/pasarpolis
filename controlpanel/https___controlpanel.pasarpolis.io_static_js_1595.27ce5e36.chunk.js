"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1595],{21595:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(97228),s=a(1502),l=a(80878);const i=a.n(l)().div`
  padding: 40px 18px;
  width: 100%;

  .clear-filter {
    display: flex;
    margin-bottom: 20px;

    button {
      margin: 0px 5px;
    }
  }
`;var n=a(55611),o=a(84029),c=a(67816),d=a(70073),u=a(77980),h=a(94528),p=a(50547),x=a(69732),b=a(3428),C=a(97418),f=a(28599),v=a(70579);const g=function(e){const[t,a]=(0,s.useState)({}),[r,l]=(0,s.useState)(""),[g,j]=(0,s.useState)(""),[k,E]=(0,s.useState)([]),[S,m]=(0,s.useState)(!1),[y,P]=(0,s.useState)(!1),[{getProviderListData:R=[]},D]=(0,p.nv)(),[{GET_PROVIDER_LIST_LOADER:L,ADD_PROVIDER_LOADER:A}]=(0,x.useLoaderContextValue)(),[{GET_PROVIDER_LIST_ERROR:_,getProviderListStatus:w},I]=(0,x.useErrorContextValue)(),V=(0,s.useCallback)((e=>{D({query:{...e}})}),[D]),O=(0,s.useCallback)((t=>{e.history.push({pathname:`/agent${(0,f.A)()?"/vn":""}/provider/${t}/detail`})}),[e.history]),T=(0,s.useCallback)(((e,r)=>{a({...t,[r]:e.target.value}),m(!0)}),[t]),F=(0,s.useCallback)((e=>{e.preventDefault(),j(""),l(g),V((0,C.QN)(t))}),[t,g,V]),N=(0,s.useCallback)((()=>(0,d.Eh)({handleProviderDetailPage:O,searchTextQuery:t,handleInputChange:T,handleSearch:F,isFilterVisible:g,setIsFilterVisible:j,isChange:S})),[g,S,t,T,O,F]);(0,s.useEffect)((()=>{V({})}),[V]),(0,s.useEffect)((()=>{E(N())}),[g,t,R,N]),(0,s.useEffect)((()=>{w&&_&&((0,u.D)("error",w),I((0,x.resetError)({getProviderListStatus:""})))}),[w,_,I]);const B=(0,s.useCallback)((()=>{l(""),a({}),V({})}),[V]),G=(0,s.useCallback)((()=>{P(!0)}),[]),Q=(0,s.useCallback)((()=>{P(!1)}),[]);return(0,v.jsxs)(i,{children:[(0,v.jsx)(c.Modal,{footer:null,visible:y,onCancel:Q,children:(0,v.jsx)(b.A,{onFetchProviderList:V,onCloseProviderForm:Q})}),(0,v.jsx)(h.A,{isSpining:L||A,children:(0,v.jsxs)(o.A,{children:[(0,v.jsxs)(c.Row,{type:"flex",align:"middle",justify:"space-between",className:"header-row",children:[(0,v.jsx)(c.Col,{children:(0,v.jsx)("h3",{children:"Providers List"})}),(0,v.jsxs)(c.Col,{className:"clear-filter",children:[(0,v.jsx)(c.Button,{type:"primary",onClick:G,children:"Add Provider"}),"\xa0\xa0\xa0",(0,v.jsx)(c.Button,{type:"primary",onClick:B,disabled:!r,children:"Clear Filter"})]})]}),(0,v.jsx)(n.A,{columns:k,bordered:!0,rowKey:e=>e.id,dataSource:R||[],loading:L,className:"isoSearchableTable agent-table-data"})]})})]})};const j=function(e){return(0,v.jsx)(r.m1,{children:(0,v.jsx)(g,{...e})})}}}]);
//# sourceMappingURL=1595.27ce5e36.chunk.js.map