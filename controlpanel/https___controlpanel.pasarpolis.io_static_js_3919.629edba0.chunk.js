"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3919],{93919:(e,o,r)=>{r.r(o),r.d(o,{default:()=>u});var t=r(1502),i=r(996),l=r.n(i),n=r(84029),a=r(80878);const s=r.n(a)().div`
  .policy-img {
    max-width: 100%;
    max-height: 100%;
  }

  .img-container {
    width: 150px;
    height: 150px;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
    border: 1px solid ${e=>e.theme.borderGrey};
    border-radius: 4px;
  }

  .remove-doc-icon {
    position: absolute;
    right: -10px;
    top: -14px;
    font-size: 20px;
    color: ${e=>e.theme.errorColor};
  }

  .img-container > div:first-child {
    height: 124px;
    display: flex;
    align-items: center;
    padding: 12px;
    justify-content: center;
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
`;var p=r(67816),d=r(95024),c=r(8624),h=r(70579);class m extends t.Component{constructor(){super(...arguments),this.renderImgContainer=()=>{const{type:e,data:o=[],title:r,isShowReuploadBtn:t,showUploadWithImg:i,isShowRemoveIcon:n,onRemoveImg:a}=this.props,s=t&&i;return o.map(((c,m)=>{const u=(0,d.A)(c.url);return(0,h.jsxs)(p.Col,{className:"img-container",children:["pdf"===u?(0,h.jsx)("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)("object",{type:"application/pdf",data:c.url,width:"150",height:"150","aria-label":"PDF"})}):(0,h.jsx)(l(),{className:"policy-img",small:c.url,large:c.url,id:`${e}_${m}`,name:r,imageBackgroundColor:"transparent"}),s&&(0,h.jsx)(p.Upload,{name:"file",accept:".jpg,.png,.jpeg",multiple:!1,showUploadList:!1,customRequest:r=>{let{file:t}=r;return this.props.onReupload({data:o,key:e,oldUrl:c.url,file:t})},className:"img-reupload-btn",children:"Reupload Document"}),t&&!i&&n&&(0,h.jsx)("div",{className:"remove-doc-icon",onClick:()=>a({data:[...o],key:e,oldUrl:c.url}),children:(0,h.jsx)(p.Icon,{type:"close-circle",theme:"filled"})})]},`supporting-doc-${m}`)}))}}render(){const{title:e,isShowReuploadBtn:o,type:r,data:t=[],showUploadWithImg:i}=this.props;return(0,h.jsxs)(n.A,{className:"details-info-container policy-detail-card",children:[(0,h.jsxs)(p.Row,{type:"flex",justify:"space-between",align:"middle",children:[(0,h.jsx)(p.Col,{children:(0,h.jsx)("h3",{className:"policy-title",children:e})}),(0,h.jsx)(p.Col,{children:(0,h.jsx)(c.A,{requiredPermission:"ops.view_agent_policy_reupload_documents_btn",children:o&&!i&&(0,h.jsx)(p.Upload,{name:"file",accept:".jpg,.png,.jpeg",multiple:!1,showUploadList:!1,customRequest:e=>{let{file:o}=e;return this.props.onReupload({data:t,key:r,file:o})},children:(0,h.jsx)(p.Button,{children:"Reupload Document"})})})})]}),(0,h.jsx)(s,{children:(0,h.jsx)(p.Row,{type:"flex",children:this.renderImgContainer()})})]})}}const u=m}}]);
//# sourceMappingURL=3919.629edba0.chunk.js.map