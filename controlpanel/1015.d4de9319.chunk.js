"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1015],{21015:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var a=r(1502),n=r(24952),s=r(67816),i=r(17823),o=r.n(i),d=r(84029),l=r(55347),c=r(45410),p=r(62064),g=r(97164),h=r(96117),x=r(87291),m=r(52561),u=r(70579);const{getHardcopy:A,progressHardcopy:b,rejectHardcopy:y,resetHardcopyState:j}=g.A,{resetLoadingRedux:f}=h.A,{resetErrorRedux:E}=x.A,P=(0,n.connect)((e=>({detailData:e.Hardcopy.detailData,detailLogs:e.Hardcopy.detailLogs,detailMessage:e.Hardcopy.detailMessage,progressMessage:e.Hardcopy.progressMessage,rejectMessage:e.Hardcopy.rejectMessage,loading:e.Loading.GET_HARDCOPY,progressLoading:e.Loading.PROGRESS_HARDCOPY,rejectLoading:e.Loading.REJECT_HARDCOPY})),{getHardcopy:A,progressHardcopy:b,rejectHardcopy:y,resetHardcopyState:j,resetLoadingRedux:f,resetErrorRedux:E})((e=>{let{match:t,history:r,detailData:n,detailLogs:i,detailMessage:g,progressMessage:h,rejectMessage:x,loading:A,progressLoading:b,rejectLoading:y,getHardcopy:j,progressHardcopy:f,rejectHardcopy:E,resetHardcopyState:P,resetLoadingRedux:C,resetErrorRedux:D}=e;const{id:R}=t.params,_=p.p_.includes(n.current_status),[I,k]=(0,a.useState)(null),[N,w]=(0,a.useState)(""),H=e=>{w(""),k(e)},M=()=>{k(null),w("")};(0,a.useEffect)((()=>(j({id:R}),()=>{P(["detailData","detailLogs","detailMessage","progressMessage","rejectMessage"]),C(["GET_HARDCOPY","PROGRESS_HARDCOPY","REJECT_HARDCOPY"]),D(["GET_HARDCOPY","PROGRESS_HARDCOPY","REJECT_HARDCOPY"])})),[R]),(0,a.useEffect)((()=>{g&&"success"!==g&&(s.notification.error({message:g}),P(["detailMessage"]))}),[g]),(0,a.useEffect)((()=>{"success"===h?(s.notification.success({message:"Status progressed successfully"}),P(["progressMessage"])):h&&(s.notification.error({message:h}),P(["progressMessage"]))}),[h]),(0,a.useEffect)((()=>{"success"===x?(s.notification.success({message:"Request rejected successfully"}),P(["rejectMessage"])):x&&(s.notification.error({message:x}),P(["rejectMessage"]))}),[x]);const Y=[{key:"remark",title:"Remark",dataIndex:"remark",render:e=>e||"-"},{key:"from_status",title:"Dari Status",dataIndex:"from_status",render:e=>e?(0,u.jsx)(s.Tag,{color:p.E9[e]||"default",children:p.bh[e]||e}):"-"},{key:"to_status",title:"Ke Status",dataIndex:"to_status",render:e=>e?(0,u.jsx)(s.Tag,{color:p.E9[e]||"default",children:p.bh[e]||e}):"-"},{key:"updated_by",title:"Updated By",dataIndex:"updated_by",render:e=>e||"-"},{key:"source",title:"Source",dataIndex:"source",render:e=>e||"-"},{key:"created_at",title:"Dibuat pada (GMT+7)",dataIndex:"created_at",render:e=>e?o()(e).tz("Asia/Jakarta").format("DD MMM YYYY HH:mm"):"-"}];return(0,u.jsxs)(c.$,{children:[(0,u.jsxs)(l.A,{style:{color:"#788195"},children:[(0,u.jsx)(d.A,{className:"policy-detail-card",children:(0,u.jsxs)(s.Spin,{spinning:!!A,children:[(0,u.jsxs)("div",{className:"btn-container btn-policy-container",children:[(0,u.jsxs)(s.Button,{className:"btn-back",type:"primary",onClick:()=>{"POP"===r.action?r.push("/hardcopy-management"):r.goBack()},children:[(0,u.jsx)("img",{src:m,className:"btn-icon back-icon",alt:""}),"Back"]}),(0,u.jsxs)("div",{className:"button-wrapper-style",children:[(0,u.jsx)(s.Button,{type:"primary",style:{marginRight:8},disabled:_,loading:!!b,onClick:()=>H("progress"),children:"Progress"}),(0,u.jsx)(s.Button,{type:"danger",disabled:_,loading:!!y,onClick:()=>H("reject"),children:"Reject"})]})]}),(0,u.jsxs)(s.Row,{style:{margin:"20px 0"},children:[(0,u.jsx)(s.Col,{span:3,children:(0,u.jsx)("strong",{children:"Delivery Status:"})}),(0,u.jsx)(s.Col,{span:21,children:(0,u.jsx)(s.Tag,{color:p.E9[n.current_status]||"default",style:{fontSize:13},children:p.bh[n.current_status]||n.current_status||"-"})})]}),(0,u.jsxs)(s.Row,{gutter:32,className:"detais-data-row",children:[(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"AWB"}),(0,u.jsx)("p",{children:n.awb||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Reference ID"}),(0,u.jsx)("p",{children:n.reference_id||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Application Number"}),(0,u.jsx)("p",{children:n.application_number||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Policy Number"}),(0,u.jsx)("p",{children:n.policy_number||"-"})]})]}),(0,u.jsxs)(s.Row,{gutter:32,className:"detais-data-row",children:[(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Requested At"}),(0,u.jsx)("p",{children:n.requested_at?o()(n.requested_at).tz("Asia/Jakarta").format("DD MMM YYYY HH:mm"):"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Latest Updated At"}),(0,u.jsx)("p",{children:n.latest_updated_at?o()(n.latest_updated_at).tz("Asia/Jakarta").format("DD MMM YYYY HH:mm"):"-"})]})]})]})}),(0,u.jsxs)(d.A,{className:"details-info-container policy-detail-card",children:[(0,u.jsx)("h3",{className:"policy-title",children:"Provider & Product Info"}),(0,u.jsxs)(s.Row,{gutter:32,className:"detais-data-row",children:[(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Provider Name"}),(0,u.jsx)("p",{children:n.provider_name||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Partner Name"}),(0,u.jsx)("p",{children:n.partner_name||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Product Name"}),(0,u.jsx)("p",{children:n.product_name||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Package Name"}),(0,u.jsx)("p",{children:n.package_name||"-"})]})]})]}),(0,u.jsxs)(d.A,{className:"details-info-container policy-detail-card",children:[(0,u.jsx)("h3",{className:"policy-title",children:"Receiver Info"}),(0,u.jsxs)(s.Row,{gutter:32,className:"detais-data-row",children:[(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Name"}),(0,u.jsx)("p",{children:n.receiver_name||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Email"}),(0,u.jsx)("p",{children:n.receiver_email||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Phone"}),(0,u.jsx)("p",{children:n.receiver_phone||"-"})]}),(0,u.jsxs)(s.Col,{span:6,children:[(0,u.jsx)("span",{children:"Zipcode"}),(0,u.jsx)("p",{children:n.zipcode||"-"})]})]}),(0,u.jsx)(s.Row,{gutter:32,className:"detais-data-row",children:(0,u.jsxs)(s.Col,{span:24,children:[(0,u.jsx)("span",{children:"Address"}),(0,u.jsx)("p",{children:n.address||"-"})]})})]}),(0,u.jsxs)(d.A,{className:"details-info-container policy-detail-card",children:[(0,u.jsx)("h3",{className:"policy-title",children:"Detail Status"}),(0,u.jsx)(s.Row,{children:(0,u.jsx)(s.Col,{span:24,children:(0,u.jsx)(s.Table,{columns:Y,dataSource:i,rowKey:(e,t)=>t,pagination:!1,bordered:!0,size:"small"})})})]})]}),(0,u.jsxs)(s.Modal,{title:"reject"===I?"Reject Request":"Progress Request",visible:!!I,onOk:()=>{"progress"===I?f({id:R,...N?{remark:N}:{}}):"reject"===I&&E({id:R,remark:N}),M()},onCancel:M,okText:"reject"===I?"Reject":"Progress",okButtonProps:{type:"reject"===I?"danger":"primary",disabled:"reject"===I&&!N.trim()},confirmLoading:!!b||!!y,children:[(0,u.jsx)("p",{style:{marginBottom:8},children:"reject"===I?"Masukkan alasan penolakan (wajib):":"Masukkan catatan tambahan (opsional):"}),(0,u.jsx)(s.Input.TextArea,{rows:4,value:N,onChange:e=>w(e.target.value),placeholder:"reject"===I?"Contoh: Alamat tidak lengkap":"Contoh: Hardcopy received"})]})]})}))},62064:(e,t,r)=>{r.d(t,{Dv:()=>s,E9:()=>a,bh:()=>n,p_:()=>i});const a={INITIATED:"blue",PENDING_HARDCOPY_PROVIDER:"orange",PENDING_ORDER:"gold",WAITING_PICKUP:"geekblue",PICKED_UP:"cyan",IN_DELIVERY:"purple",COMPLETED:"green",REJECTED:"red",PENDING_POLICY:"gold"},n={INITIATED:"Initiated",PENDING_HARDCOPY_PROVIDER:"Pending Hardcopy from Provider",PENDING_ORDER:"Pending Order",WAITING_PICKUP:"Waiting for Picked Up",PICKED_UP:"Picked Up",IN_DELIVERY:"In Delivery",COMPLETED:"Completed",REJECTED:"Rejected",PENDING_POLICY:"Pending Policy"},s=["INITIATED","PENDING_HARDCOPY_PROVIDER","PENDING_ORDER","WAITING_PICKUP","PICKED_UP","IN_DELIVERY","COMPLETED","REJECTED","PENDING_POLICY"],i=["COMPLETED","REJECTED"]},45410:(e,t,r)=>{r.d(t,{$:()=>n});var a=r(80878);const n=r.n(a)().div`
.payment-history-wrapper {
  margin-top:30px;
  width:100%;
}
.button-wrapper-style {
  position: absolute;
  right: 0;
}
.alert-style-margin {
  margin-bottom: 20px;
}
.row-style-width {
  width:100%;
}
.ant-table-pagination {
  display: none;
}
.layout-content {
  padding: 6vh;
}
.layout-wrapper {
  height: 90vh;
}
.table-header {
  display: flex;
  justify-content: space-between;
}
.btn-container {
  display: flex;
}
.btn-clear-filter {
  margin-right: 10px;
}
.input-search {
  width: 200px;
  border-radius: 0;
  margin-right: 10px;
}
.btn-policy-container {
  display: flex;
  margin-bottom: 10px;
  margin-right: 10px;
}
.back-icon {
  margin-right:10px;
}
.btn-back {
  margin-right: 20px;
  border-radius: 8px;
  background-color: #d1d1d1;
  border: none;
}
.btn-back:hover {
  background-color: #d1d1d1;
  border: none;
}
.btn-retry,
.btn-retry:hover {
  margin-right: 10px;
  border-radius: 8px;
  background-color: #6ebed2;
  border: none;
}
.btn-document-retry.ant-btn,
.btn-document-retry.ant-btn:hover,
.btn-document-retry.ant-btn:focus,
.btn-document-retry.ant-btn-primary,
.btn-document-retry.ant-btn-primary:hover,
.btn-document-retry.ant-btn-primary:focus,
.btn-document-retry.ant-btn-loading,
.btn-document-retry.ant-btn[disabled],
.btn-document-retry.ant-btn[disabled]:hover {
  margin-right: 10px;
  border-radius: 8px;
  background-color: #6ebed2;
  border: none;
  color: #fff;
  opacity: 1;
}
.btn-claim,
.btn-claim:hover {
  border-radius: 8px;
  margin-right: 10px;
  background-color: #aad25a;
  border: none;
}
.btn-activate,
.btn-activate:hover {
  margin-right: 10px;
  border-radius: 8px;
  background-color: #759437;
  border: none;
}
.btn-cancel-policy,
.btn-cancel-policy:hover {
  margin-right: 10px;
  border-radius: 8px;
  background-color: #d2c864;
  border: none;
}
.btn-terminate-policy,
.btn-terminate-policy:hover {
  margin-right: 10px;
  border-radius: 8px;
  background-color: #dc826e;
  border: none;
}
.btn-icon {
  width: 12px;
  margin-left: 7px;
  margin-bottom: 3px;
}
.btn-icon-pencil {
  width: 16px;
  margin-left: 7px;
  margin-bottom: 3px;
  cursor: pointer;
}
.policy-detail-card {
  width:100%;
  height:unset;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(85, 85, 85, 0.05);
}
.row-margin{
  margin: 20px 0 20px 0;
}
.under-line{
  text-decoration: underline;
}
.detais-data-row span {
  font-family: Muli;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #999999;
}
.detais-data-row p {
  font-family: Muli;
  font-size: 15px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 0px;
}
.detais-data-row a {
  font-family: Muli;
  font-size: 15px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #6ebed2;
  display: block;
}
.detais-data-row {
  margin-bottom: 10px;
}
.ant-modal-header {
  font-family: Muli;
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.85;
  letter-spacing: normal;
  text-align: left;
}
.policy-title {
  margin-top: 5px;
  font-family: Muli;
  font-size: 17px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
}
.tag-container {
  margin-top: 5px;
  margin-left: 20px;
}
.details-info-container {
  margin-top: 20px;
}
.text-center {
  text-align: center
} 
.margin-top-15 {
  margin-top: 15px
}
.endorsement-column{
  padding-top:3%;
}
.flex{
  display:flex;
}
.g-8{
  gap: 8px;
}
`},52561:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFaADAAQAAAABAAAADgAAAAA845anAAAAs0lEQVQ4Eb2SwQ3CMAxFa1iANbixAFJHYYVuwCasQtUFKnHg2hEQXIHwPkoqqHLAVcSXvhxb7ovltKoyCiHssNThVabFVwKSgIJKtY8w6QbwCXySX/H8STPAG7XN5N7f09JAE5DrD3GEQDQ8RBPcagQVqKTaBbQWPwpSB02q1+3wGi8jvCc28ewKZnZ8fyAwPuE7Tkp7dkG/miH9Fez+V/VQo9jHhWSLz2Ox1CGuYk+s5zBf/VDHB2mZ9BMAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=1015.d4de9319.chunk.js.map