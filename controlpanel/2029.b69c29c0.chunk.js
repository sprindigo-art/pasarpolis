"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2029],{31035:(n,r,e)=>{e.d(r,{C4:()=>t,Ul:()=>a,r9:()=>l.r9,uc:()=>d});e(1502);var o=e(67816),s=e(80878),i=e.n(s),l=e(79688);e(70579);const t=i().span`
    font-size: 14px;
    border-radius: 24px;
    padding: 0 12px;
    background-color: ${n=>n.bgColor?n.bgColor:"rgb(255, 159, 10)"};
    color: #ffffff;
    margin: 2px;
    display: block;
`,a=i().ul`
    margin: 0;
    padding: 0;
    list-style-position: inside;
`,d=i()(o.Card)`
  margin: 40px 20px;
  .break-word {
    word-break: break-word;
  }
  .mt-5 {
    margin-top: 5px;
  }
  .mb-5 {
    margin-bottom: 5px;
  }
`},79688:(n,r,e)=>{e.d(r,{RN:()=>t,r9:()=>l,yN:()=>a});var o=e(80878),s=e.n(o),i=e(67816);const l=s()(i.Row)`
  margin: ${n=>"small"===n.marginSize?"10px":"20px"} 0;
  .mt-24 {
    margin-top: 15px;
  }
  .break-word {
    word-break: break-word;
  }
  .break-all {
    word-break: break-all;
  }
`,t=s()(i.Col)`
  text-align: right;
`,a=s()(i.Col)`
  text-align: center;
`;s().div`
  .ant-btn-primary{
      ${n=>n.bgColor?`background-color: ${n.bgColor}`:""}
  }
`},64410:(n,r,e)=>{e.r(r),e.d(r,{default:()=>b});var o=e(69732),s=e(67816),i=e(17823),l=e.n(i),t=e(1502),a=e(88962),d=e(61496),c=e(31035);const p={postDetail:{dataKey:"POST_DETAIL",url:e(3098).A.getBroadcastPostDetail}};var x=e(80878);const h=e.n(x)().div`
  .post-img {
    max-width: 400px;
    max-height: 250px;
  }  
`;var g=e(70579);const m=()=>{var n,r;const e=(0,a.useHistory)(),i=(0,a.useParams)(),[x,m]=(0,o.useGet)(p.postDetail),[{POST_DETAIL_LOADER:b}]=(0,o.useLoaderContextValue)(),u=x||{};return(0,t.useEffect)((()=>{m({id:i.postId})}),[m,i]),(0,g.jsx)(d.A,{history:e,path:"/employee-benefits/broadcast-center",children:(0,g.jsx)(s.Spin,{spinning:!!b,children:(0,g.jsxs)(h,{children:[(0,g.jsxs)(c.r9,{children:[(0,g.jsx)(s.Col,{span:4,children:(0,g.jsx)("strong",{children:"Title:"})}),(0,g.jsx)(s.Col,{span:10,children:null===u||void 0===u?void 0:u.subject})]}),(0,g.jsxs)(c.r9,{children:[(0,g.jsx)(s.Col,{span:4,children:(0,g.jsx)("strong",{children:"Content:"})}),(0,g.jsx)(s.Col,{span:10,children:null===u||void 0===u?void 0:u.body})]}),(0,g.jsxs)(c.r9,{children:[(0,g.jsx)(s.Col,{span:4,children:(0,g.jsx)("strong",{children:"Upload Image:"})}),(0,g.jsx)(s.Col,{span:10,children:(null===u||void 0===u?void 0:u.image_url)&&(0,g.jsx)("img",{className:"post-img",src:u.image_url,alt:"Post"})})]}),(0,g.jsxs)(c.r9,{children:[(0,g.jsx)(s.Col,{span:4,children:(0,g.jsx)("strong",{children:"Recipients:"})}),(0,g.jsx)(s.Col,{span:10,children:(null===u||void 0===u||null===(n=u.recipients)||void 0===n||null===(r=n.map((n=>{let{name:r}=n;return r})))||void 0===r?void 0:r.join(", "))||"All"})]}),(0,g.jsxs)(c.r9,{children:[(0,g.jsx)(s.Col,{span:4,children:(0,g.jsx)("strong",{children:"Publish Date:"})}),(0,g.jsx)(s.Col,{span:10,children:l()(new Date(null===u||void 0===u?void 0:u.publish_at)).format("DD-MM-YYYY HH:mm")})]})]})})})},b=()=>(0,g.jsx)(o.ApiContextProvider,{children:(0,g.jsx)(m,{})})},61496:(n,r,e)=>{e.d(r,{A:()=>c});e(1502);var o=e(67816),s=e(55347),i=e(80878),l=e.n(i),t=e(84029);const a=l()(t.A)`
    ${n=>n.contentDisabled?"opacity: 0.5; pointer-events:none;":""}
    margin-top: 20px;
    .width-150 {
      width: 150px;
    }
    .text-center {
      text-align: center;
    }
    .mb-5 {
      margin-bottom: 1rem;
    }
    .no-padding {
      padding: 0;
    }
`;var d=e(70579);const c=n=>{let{history:r,path:e,contentDisabled:i=!1,...l}=n;return(0,d.jsxs)(s.A,{children:[(0,d.jsx)(o.Row,{children:(0,d.jsxs)(o.Button,{onClick:()=>{e?r.push(e):r.goBack()},children:[(0,d.jsx)(o.Icon,{type:"arrow-left"}),"Back"]})}),(0,d.jsx)(a,{contentDisabled:i,children:l.children})]})}}}]);
//# sourceMappingURL=2029.b69c29c0.chunk.js.map