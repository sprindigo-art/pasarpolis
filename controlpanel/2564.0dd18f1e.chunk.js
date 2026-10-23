"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2564],{2564:(e,r,i)=>{i.r(r),i.d(r,{default:()=>u});var t=i(1502),n=i(84029),o=i(80878);const l=i.n(o)().div`
  .property-img-title {
    font-size: 14px;
    text-transform: capitalize;
  }

  .img-container {
    width: 150px;
    height: 150px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid ${e=>e.theme.borderGrey};
    border-radius: 4px;
  }

  .img-container > div:first-child {
    height: 124px;
    display: flex;
    align-items: center;
    padding: 12px;
    justify-content: center;
  }

  .property-img {
    max-width: 100%;
    max-height: 100%;
  }

  .img-reupload-btn {
    text-align: center;
    border: 1px solid ${e=>e.theme.borderGrey};
    background-color: ${e=>e.theme.placeholder};
    border-bottom: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 6px 7px;
  }
`;var a=i(67816),s=i(996),p=i.n(s),c=i(73859),d=i(8624),m=i(70579);const u=function(e){const r=(0,t.useCallback)((function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;const t=[];for(const n in r)r[n]&&t.push((0,m.jsxs)(a.Col,{className:"img-container",children:[(0,m.jsx)(p(),{className:"property-img",small:r[n],large:r[n],id:n,name:n,imageBackgroundColor:"transparent"}),(0,m.jsx)(d.A,{requiredPermission:"ops.view_agent_policy_reupload_documents_btn",children:e.isShowReuploadBtn&&(0,m.jsx)(a.Upload,{name:"file",accept:".jpg,.png,.jpeg",multiple:!1,showUploadList:!1,customRequest:r=>{let{file:t}=r;return e.onReupload({key:`${i}.${n}`,file:t})},className:"img-reupload-btn",children:"Reupload Document"})})]}));return t}),[e.onReupload,e.isShowReuploadBtn]),i=(0,t.useCallback)((()=>c.vd.map((i=>(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)("div",{className:"property-img-title",children:i.replace(/_/g," ")}),(0,m.jsx)(a.Row,{type:"flex",children:r(e.policy&&e.policy[i],i)})]},i)))),[e.policy]);return(0,m.jsxs)(n.A,{className:"details-info-container policy-detail-card",children:[(0,m.jsx)("h3",{className:"policy-title",children:"Insured Images"}),(0,m.jsx)(l,{children:i()})]})}}}]);
//# sourceMappingURL=2564.0dd18f1e.chunk.js.map