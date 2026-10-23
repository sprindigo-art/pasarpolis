"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[5955],{95955:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(24952),i=r(99090),a=r(1502),o=r(67816),d=r(6096),p=r(17823),s=r.n(p),l=r(93807),c=r(88962),g=r(70579);const x=(0,n.connect)((e=>({reportingList:e.ReportingConfigurable.reportingList,tableDataSourceMessage:e.ReportingConfigurable.reportingListMessage,tableDataSourceLoading:e.Loading.GET_REPORTING_LIST,getReportingConfigStatusMessage:e.ReportingConfigurable.getReportingConfigStatusMessage})),{getReportingList:i.A.getReportingList,changeReportingConfigStatus:i.A.changeReportingConfigStatus,resetReportingConfigRedux:i.A.resetReportingConfigRedux})((e=>{let{getReportingList:t,reportingList:r,tableDataSourceLoading:n,tableDataSourceError:i,changeReportingConfigStatus:p,getReportingConfigStatusMessage:x,resetReportingConfigRedux:f,history:u}=e;const h=(0,c.useLocation)(),b=new URLSearchParams(h.search),m=parseInt(b.get("page")||"1",10);(0,a.useEffect)((()=>{t({page:m||1})}),[]),(0,a.useEffect)((()=>{"success"===x&&(o.notification.success({message:"Config Updated Succesfully!"}),f(["getReportingConfigStatusMessage"]),t({page:m||1}))}),[x]);const y=[{key:"serial",title:"No",dataIndex:"serial",render:(e,t,r)=>10*((m||1)-1)+r+1},{key:"report_type",title:"Report type",dataIndex:"report_type",render:e=>e||"-"},{key:"report_name",title:"Report Name",dataIndex:"report_name",render:e=>e||"-"},{key:"report_via",title:"Method",dataIndex:"report_via",render:e=>e||"-"},{key:"send_reports_to",title:"Send Reports to",render:(e,t)=>{const{recipients_internal:r={},recipients_external:n={}}=t;return[...Object.keys(r),...Object.keys(n)].join(", ")||"-"}},{key:"trigger_frequency",title:"Frequency",dataIndex:"trigger_frequency",render:e=>e||"-"},{key:"created_at",title:"Created At",dataIndex:"created_at",render:e=>e?s()(e).format("YYYY-MM-DD HH:mm"):"-"},{key:"created_by",title:"Created By",dataIndex:"email",render:e=>e||"-"},{key:"updated_at",title:"Updated At",dataIndex:"updated_at",render:e=>e?s()(e).format("YYYY-MM-DD HH:mm"):"-"},{key:"last_seen",title:"Last Sent",dataIndex:"last_seen",render:e=>e||"-"},{key:"status",title:"Status",dataIndex:"status",render:e=>e},{key:"actions",title:"Actions",render:(e,t)=>(0,g.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,g.jsx)("span",{className:"action-button",onClick:()=>w(t),style:{color:""+("Active"===t.status?"#FA3232":"green")},children:(0,g.jsx)("b",{children:"Active"===t.status?"Revoke":"Reinstate"})}),(0,g.jsx)("span",{className:"action-button",onClick:()=>v(t),children:(0,g.jsx)("b",{children:"Details"})})]})}],w=e=>{o.Modal.confirm({title:(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:`Are you sure you want to ${"Active"===e.status?"Revoke":"Reinstate"} this reporting config?`}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Report Name:"})," ",e.report_name]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Current Status:"})," ",e.status]})]}),okText:"OK",cancelText:"Cancel",onOk:()=>{p({report_id:e.id,status:"Active"!==e.status})}})},v=e=>{const t=e.id;u.push(`/reporting-config/details/${t}`)};return(0,g.jsx)(d._1,{children:(0,g.jsxs)(o.Card,{children:[(0,g.jsxs)(o.Row,{type:"flex",justify:"space-between",children:[(0,g.jsx)(o.Col,{children:(0,g.jsx)("h1",{className:"label-name",children:(0,g.jsx)("b",{children:"Reporting Config List:"})})}),(0,g.jsx)(o.Col,{children:(0,g.jsx)("div",{className:"button__section",children:(0,g.jsx)(o.Button,{type:"primary",onClick:()=>{u.push("/reporting-config/add-config")},children:"Add Report Template"})})})]}),(0,g.jsx)("div",{className:"table-container",children:(0,g.jsx)(o.Spin,{spinning:n&&!i,tip:"Reportig List Loading ...",children:(0,g.jsx)(o.Table,{bordered:!0,columns:y,dataSource:r.results,rowKey:e=>e.id,pagination:{pageSize:10,defaultCurrent:m||1,total:r.count},onChange:e=>{const{current:r}=e,n={};n.page=r;const i=(0,l.A)(n);u.push({pathname:h.pathname,search:i}),t({page:r})},scroll:{x:"max-content"}})})})]})})}))},6096:(e,t,r)=>{r.d(t,{Gj:()=>l,JK:()=>h,XX:()=>p,Xi:()=>f,_1:()=>o,fR:()=>d,gN:()=>c,gx:()=>b,k8:()=>u,u7:()=>g,y:()=>s,yt:()=>x});var n=r(80878),i=r.n(n),a=r(34618);const o=i().div`
  padding: 20px 20px;
  overflow: hidden;
  width: 100%;
  .label-name {
    font-size: 18px;
  }
  .ant-card {
    width: 100%;
  }
  .table-container {
    margin-top: 20px;
  }
  .ant-table {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #f0f0f0;
  }
  .ant-table-content {
    border-radius: 12px;
    overflow: hidden;
  }
  .ant-table-row:nth-child(even) {
    background: #e8e8e8;
  }
  .ant-table-thead > tr > th {
    background-color: #f5f5f5;
    font-weight: bold;
    font-size: 12px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #d9d9d9;
  }
  .button__section {
    display: flex;
    flex-direction: row;
    .button__import_product {
      margin-right: 30px;
    }
  }
  .action-button {
    color: #1890ff;
    cursor: pointer;
  }
  .ant-table-thead > tr > th {
    background: #333;
    border: #333;
    color: #f5f5f5;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`,d=i().div`
  width: 100%;
  padding: 35px;
  background-color: #ffffff;
  margin-bottom: ${e=>e.marginBtm||"15px"};
  border-radius: ${e=>e.borderRadius||"none"};
  border: 1px solid ${(0,a.palette)("border",0)};
  height: 100%;
  .remove-filter {
    margin-left: 8px;
    cursor: pointer;
  }
  .red-row {
    background-color: #fb8c8c;
  }
  .light-red-row {
    background-color: #fee;
  }
  .break-word {
    word-break: break-word;
  }
  .fS-12 {
    font-size: 12px;
  }
  .active-class {
    color: #108ee9 !important;
  }
  .default {
    color: #aaa;
  }
  .floatL {
    left: 0;
  }
  .top-filter {
    align-self: center;
    margin-left: 5px;
    padding-left: 2px;
  }
  .policy-heading {
    float: left;
    color: #788195;
  }
  .policy-buttons {
    float: right;
    display: flex;
  }
  .policy-count {
    float: left;
    color: #4482ff;
    margin-left: 10px;
    margin-top: 3px;
  }
  .coupon-code {
    display: flex;
    padding-top: 2px;
  }
`,p=i().div`
  .detail-policy-list {
    cursor: pointer;
  }
  .gutter-row-export-csv {
    display: flex;
    justify-content: flex-end;
  }
  .ant-pagination.ant-table-pagination {
    display: block !important;
  }
  .detail-agent-list {
    cursor: pointer;
  }
  .ant-table-pagination {
    display: none;
  }
  .ant-input-group-addon:hover {
    cursor: pointer;
  }
  .ant-input-disabled {
    cursor: default;
  }
  .alert {
    margin-bottom: 20px;
  }
  .content-wrapper {
    height: 90vh;
  }
  .error-row {
    width: 100%;
  }
  .content {
    padding: 6vh;
  }
  .gutter-row-export-excel {
    display: flex;
    justify-content: space-between;
  }
  .btn-filter {
    margin-right: 10px;
  }
  .btn-container {
    display: flex;
  }
  .input-filter {
    width: 200px;
    border-radius: 0;
    margin-right: 10px;
  }
  .btn-page-size {
    margin-left: 10px;
  }
  .ant-table-body {
    overflow: scroll;
  }
  .back-button {
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .update-whitelable-btn {
    float: right;
  }
  .add-partner-config-btn {
    float: right;
  }
  .partner-table-section {
    margin-top: 10px;
    .ant-table-body {
      overflow: auto !important;
    }
  }
`,s=i().div`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #333333;
  margin-bottom: 16px;
`,l=i().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  gap: 10px;

  .ant-card-body {
    padding: 0px;
  }
`,c=i().div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=i().div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #999999;
`,x=i().div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #333333;
`,f=i().div`
  gap: 8px;
  border-radius: 10px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  background: ${e=>e.isEdit?"#00B432":"#0096FA"};
  width: fit-content;
  color: white;
  min-width: 160px;
  text-align: center;
  font-weight: 800;
  cursor: pointer;
`,u=i().div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
  margin-bottom: 32px;
  margin-top: 16px;
`,h=i().div`
    width: 160px;
    height: 40px;
    gap: 8px;
    border-radius: 10px;
    padding: 12px 16px;
    background: #FA3232;
    color: #f5f5f5;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,b=i().div`
    width: 160px;
    height: 40px;
    gap: 8px;
    border-radius: 10px;
    padding: 12px 16px;
    background: #00B432;
    color: #f5f5f5;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`}}]);
//# sourceMappingURL=5955.1fb68dd6.chunk.js.map