(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[8286],{37284:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var i=a(1502),n=a.n(i),s=a(80878);const r=a.n(s)().div`
  .table-cell {
    border: 1px solid #a9a9a9;
    padding: 4px;
  }
  .pdf-view-file {
    padding: 12px;
    font-weight: 600;
  }
  .view-file-button {
    background: none;
    border: none !important;
    box-shadow: none;
    color: #1890ff;
    font-weight: 600;
    padding-right: 10px;
  }
`;var o=a(20625),l=a(67816),d=a(70579);class c extends i.PureComponent{constructor(){super(...arguments),this.state={viewImageButton:!1,showPDFModal:!1,pdfFile:null,numPages:null,pdfRotation:0},this.downloadRef=n().createRef(),this.renderTableRow=(e,t,a)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"table-cell",children:e}),(0,d.jsx)("td",{className:"table-cell",children:t&&"object"===typeof t?t.join(", "):t})]},a),this.handleImageError=()=>{this.setState({viewImageButton:!0})},this.handleOpenPDFModal=e=>{this.setState({showPDFModal:!0,pdfFile:e})},this.handleClosePDFModal=()=>{this.setState({showPDFModal:!1,pdfFile:null,numPages:null})},this.handleOnDocumentLoadSuccess=e=>{let{numPages:t}=e;this.setState({numPages:t})},this.handleDownload=async()=>{const{pdfFile:e}=this.state;try{const t=await fetch(e,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch file.");const a=await t.blob(),i=URL.createObjectURL(a);this.downloadRef.current&&(this.downloadRef.current.href=i,this.downloadRef.current.download=e.split("/").pop(),this.downloadRef.current.click(),URL.revokeObjectURL(i))}catch(t){console.error("Error downloading file:",t),alert("Unable to download the file. Please try again.")}},this.handleRotateRightPDF=()=>{this.setState((e=>({pdfRotation:(e.pdfRotation+90)%360})))},this.handleRotateLeftPDF=()=>{this.setState((e=>({pdfRotation:(e.pdfRotation-90)%360})))},this.getCurrentPageOrientation=()=>{const{pdfRotation:e}=this.state;return 90===e||270===e||-90===e||-270===e?"landscape":"portrait"}}render(){const{value:e,index:t,divStyle:a,imgStyle:i,additionalInfo:n,onClick:s,isPDF:c}=this.props,{viewImageButton:p,showPDFModal:h,numPages:u,pdfFile:g}=this.state,m=Object.keys(n);return(0,d.jsxs)(r,{children:[(0,d.jsxs)(l.Modal,{title:"PDF Viewer",onCancel:this.handleClosePDFModal,visible:h,footer:null,width:"landscape"===this.getCurrentPageOrientation()?"90%":"60%",bodyStyle:{overflow:"auto",display:"flex",justifyContent:"center",paddingBottom:"60px"},children:[g&&(0,d.jsxs)(o.yo,{file:g,onLoadSuccess:this.handleOnDocumentLoadSuccess,onLoadError:e=>console.error("Error while loading document:",e),children:[(0,d.jsx)(o.YW,{pageNumber:1,rotate:this.state.pdfRotation}),u>1&&Array.from({length:u-1},((e,t)=>(0,d.jsx)(o.YW,{pageNumber:t+2},t+2)))]}),(0,d.jsxs)("div",{style:{position:"fixed",bottom:0,width:"landscape"===this.getCurrentPageOrientation()?"90%":"60%",backgroundColor:"#fff",padding:"10px 20px",borderTop:"1px solid #ddd",textAlign:"right",zIndex:1e3,display:"flex",gap:"16px",alignItems:"center",justifyContent:"flex-end"},children:[(0,d.jsx)(l.Button,{type:"default",onClick:this.handleRotateLeftPDF,children:(0,d.jsx)(l.Icon,{type:"rollback",style:{fontSize:20}})}),(0,d.jsx)(l.Button,{type:"default",onClick:this.handleRotateRightPDF,children:(0,d.jsx)(l.Icon,{type:"rollback",style:{fontSize:20,transform:"scaleX(-1)"}})}),(0,d.jsx)(l.Button,{type:"primary",onClick:this.handleDownload,children:"Download"},"download"),(0,d.jsx)("a",{ref:this.downloadRef,style:{display:"none"},rel:"noopener noreferrer"})]})]}),(0,d.jsxs)("div",{style:a,children:[(0,d.jsx)("div",{children:c?(0,d.jsx)("div",{style:a,className:"pdf-view-file",children:(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>this.handleOpenPDFModal(e),children:"View File"})},t):p?(0,d.jsx)("a",{target:"_blank",href:e,rel:"noopener noreferrer",className:"view-file-button",type:"primary",children:"View File"}):(0,d.jsx)("img",{style:i,src:e,onClick:()=>s(),alt:"View File",onError:this.handleImageError})}),(0,d.jsx)("div",{children:(0,d.jsx)("table",{children:(null===m||void 0===m?void 0:m.length)>0&&(0,d.jsxs)(d.Fragment,{children:[this.renderTableRow("Attribute","Scanned Values","header-row"),null===m||void 0===m?void 0:m.map(((e,t)=>{const a=n[e],{label:i,extracted_value:s}=a;return this.renderTableRow(i,s,t)}))]})})})]},t)]})}}c.defaultProps={value:"",index:0,divStyle:{},imgStyle:{},additionalInfo:{},onClick:()=>console.log("hey")}},7528:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var i=a(1502),n=a(84029),s=a(55347),r=a(24952),o=a(79471),l=a(52561),d=a(67816),c=a(80878);const p=a.n(c)().div`
.payment-history-wrapper {
  margin-top:30px;
  width:100%;
}
.button-wrapper-style {
  position: absolute;
  right: 0;
  margin-right: 30px;
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
.btn-document-retry,
.btn-document-retry:hover {
  margin-right: 10px;
  border-radius: 8px;
  background-color: #6ebed2;
  border: none;
}
.btn-claim,
.btn-claim:hover {
  border-radius: 8px;
  margin-right: 10px;
  background-color:rgb(149, 197, 55);
  border: none;
  color: white;
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
  background-color:rgb(227, 60, 22);
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
`;var h=a(95916),u=a(29331),g=a(95024),m=a(37284),x=a(8624),j=a(70579);const{getApprovalDetail:b,updateQuotationStatus:f}=u.A;class _ extends i.Component{constructor(e){super(e),this.columns=[{dataIndex:"name",width:"30%"},{dataIndex:"value"}],this.handleBack=()=>{this.props.history.push({pathname:"/policy/approval-list"})},this.formatString=e=>e.split("_").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),this.handleShowAcceptModal=()=>{const{approvalDetailData:e,updateQuotationStatus:t,match:a,doneBy:i}=this.props,n=(0,h.get)(e,"application_summary.product_id","-"),s=a.params.id;d.Modal.confirm({title:"Activate Application",content:"Are you sure you want to accept this policy?",okText:"Yes",cancelText:"No",onOk:()=>{t({ref_id:s,product_code:n,action_by:i,status:"accept",remark:"accepted"}),this.setState({acceptModal:!1}),this.props.getApprovalDetail({ref_id:s})},onCancel:()=>{this.setState({acceptModal:!1})}}),this.setState({acceptModal:!0})},this.handleReject=()=>{const{match:e,doneBy:t,updateQuotationStatus:a,approvalDetailData:i}=this.props,n=e.params.id,{rejectRemarks:s}=this.state,r=(0,h.get)(i,"application_summary.product_id","-");s?(a({ref_id:n,product_code:r,action_by:t,status:"reject",remark:s}),this.setState({rejectModal:!1,rejectRemarks:null}),this.props.getApprovalDetail({ref_id:n})):d.message.error("Remarks cannot be empty")},this.state={acceptModal:!1,rejectModal:!1,rejectRemarks:null}}componentDidMount(){const{match:e}=this.props,t=e.params.id;this.props.getApprovalDetail({ref_id:t})}render(){const{rejectModal:e,rejectRemarks:t}=this.state,{approvalDetailData:a}=this.props,i=(0,h.get)(a,"application_status","-"),r="-"!==i?i.split("_").join(" "):i,o=[{id:"appDetail_1",name:(0,j.jsx)("strong",{children:"Name"}),value:(0,h.get)(a,"application_details.name","-")},{id:"appDetail_2",name:(0,j.jsx)("strong",{children:"KTP"}),value:(0,h.get)(a,"application_details.ktp","-")},{id:"appDetail_3",name:(0,j.jsx)("strong",{children:"Email"}),value:(0,h.get)(a,"application_details.email","-")},{id:"appDetail_4",name:(0,j.jsx)("strong",{children:"Phone Number"}),value:(0,h.get)(a,"application_details.phone_number","-")},{id:"appDetail_5",name:(0,j.jsx)("strong",{children:"Coverage Period"}),value:`${(0,h.get)(a,"application_details.coverage_period.duration","-")} ${(0,h.get)(a,"application_details.coverage_period.unit","-")}`},{id:"appDetail_6",name:(0,j.jsx)("strong",{children:"Address"}),value:(0,h.get)(a,"application_details.address","-")}],c=Object.keys((null===a||void 0===a?void 0:a.payment_details)||{}).map(((e,t)=>({id:`payDetail_${t+1}`,name:(0,j.jsx)("strong",{children:this.formatString(e)}),value:(0,h.get)(a,`payment_details.${e}`,"-")}))),u=[{id:"object_insured-1",name:(0,j.jsx)("strong",{children:"Brand"}),value:(0,h.get)(a,"insured_details.brand","-")},{id:"object_insured-2",name:(0,j.jsx)("strong",{children:"Model"}),value:(0,h.get)(a,"insured_details.model","-")},{id:"object_insured-3",name:(0,j.jsx)("strong",{children:"Series"}),value:(0,h.get)(a,"insured_details.series","-")},{id:"object_insured-4",name:(0,j.jsx)("strong",{children:"Chassis Number"}),value:(0,h.get)(a,"insured_details.chassis_number","-")},{id:"object_insured-5",name:(0,j.jsx)("strong",{children:"Machine Number"}),value:(0,h.get)(a,"insured_details.machine_number","-")},{id:"object_insured-6",name:(0,j.jsx)("strong",{children:"Region Area"}),value:(0,h.get)(a,"insured_details.region_area","-")},{id:"object_insured-7",name:(0,j.jsx)("strong",{children:"Vehicle Plat No"}),value:(0,h.get)(a,"insured_details.vehicle_plate_no","-")},{id:"object_insured-8",name:(0,j.jsx)("strong",{children:"Color"}),value:(0,h.get)(a,"insured_details.color","-")},{id:"object_insured-9",name:(0,j.jsx)("strong",{children:"Vehicle Type"}),value:(0,h.get)(a,"insured_details.vehicle_type","-")},{id:"object_insured-10",name:(0,j.jsx)("strong",{children:"Year of Manufacture"}),value:(0,h.get)(a,"insured_details.year_of_manufacture","-")},{id:"object_insured-11",name:(0,j.jsx)("strong",{children:"Usage"}),value:(0,h.get)(a,"insured_details.usage","-")},{id:"object_insured-12",name:(0,j.jsx)("strong",{children:"Vehicle Sum Insured"}),value:(0,h.get)(a,"insured_details.vehicle_sum_insured","-")},{id:"object_insured-14",name:(0,j.jsx)("strong",{children:"KTP No"}),value:(0,h.get)(a,"insured_details.ktp_no","-")}],b={width:"auto",maxWidth:"200px",height:"104px",marginTop:"20px",marginRight:"7px",cursor:"pointer"},f={position:"relative",alignItems:"center",display:"flex"},_=[{id:"object_insured_image-1",name:(0,j.jsx)("strong",{children:"KTP URL"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.ktp_url","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.ktp_url","-"))})},{id:"object_insured_image-2",name:(0,j.jsx)("strong",{children:"Foto STNK Depan"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.stnk_front_url","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.stnk_front_url","-"))})},{id:"object_insured_image-3",name:(0,j.jsx)("strong",{children:"Foto STNK Belakang"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.stnk_back_url","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.stnk_back_url","-"))})},{id:"object_insured_image-4",name:(0,j.jsx)("strong",{children:"Front"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.front","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.front","-"))})},{id:"object_insured_image-5",name:(0,j.jsx)("strong",{children:"Back"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.back","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.back","-"))})},{id:"object_insured_image-6",name:(0,j.jsx)("strong",{children:"Right"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.right","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.right","-"))})},{id:"object_insured_image-7",name:(0,j.jsx)("strong",{children:"Left"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.left","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.left","-"))})},{id:"object_insured_image-8",name:(0,j.jsx)("strong",{children:"Dashboard"}),value:(0,j.jsx)(m.A,{value:(0,h.get)(a,"insured_docs.dashboard","-"),divStyle:f,imgStyle:b,isPDF:"pdf"===(0,g.A)((0,h.get)(a,"insured_docs.dashboard","-"))})}];(0,h.get)(a,"insured_docs.additional_accessories",[]).forEach(((e,t)=>{_.push({id:"object_insured_image-"+(7+3*t),name:(0,j.jsx)("strong",{children:`Accessories Name ${t+1}`}),value:e.accessories_name||"-"},{id:"object_insured_image-"+(8+3*t),name:(0,j.jsx)("strong",{children:`Accessories Pricing ${t+1}`}),value:e.accessories_pricing?e.accessories_pricing.toLocaleString("id-ID"):"-"},{id:"object_insured_image-"+(9+3*t),name:(0,j.jsx)("strong",{children:`Accessories Photo ${t+1}`}),value:(0,j.jsx)("a",{href:e.photo||"-",target:"_blank",rel:"noopener noreferrer",children:"View File"})})}));const A=(0,h.get)(a,"addons",[]);return console.log("detail data",a),console.log("additional package",A),(0,j.jsxs)(p,{children:[(0,j.jsxs)(s.A,{children:[(0,j.jsxs)(n.A,{className:"policy-detail-card",children:[(0,j.jsxs)("div",{className:"btn-container btn-policy-container",children:[(0,j.jsxs)(d.Button,{className:"btn-back",type:"primary",onClick:()=>this.handleBack(),children:[(0,j.jsx)("img",{src:l,className:"btn-icon back-icon",alt:""}),"Back"]}),"QUOTE_APPROVAL_PENDING"===(0,h.get)(a,"application_status","-")?(0,j.jsxs)("div",{className:"button-wrapper-style",children:[(0,j.jsx)(x.A,{requiredPermission:"ops.tapinsure-accept-policy",children:(0,j.jsx)(d.Button,{className:"btn-claim",onClick:this.handleShowAcceptModal,children:"Accept"})}),(0,j.jsx)(x.A,{requiredPermission:"ops.tapinsure-reject-policy",children:(0,j.jsx)(d.Button,{type:"primary",className:"btn-terminate-policy",onClick:()=>this.setState({rejectModal:!0}),children:"Reject"})})]}):null]}),(0,j.jsxs)(d.Row,{style:{margin:"20px 0 20px 0"},children:[(0,j.jsx)(d.Col,{span:3,children:(0,j.jsx)("strong",{children:"Application status:"})}),(0,j.jsx)(d.Col,{span:21,children:(0,j.jsx)(d.Tag,{children:r})})]}),(0,j.jsxs)(d.Row,{gutter:32,className:"detais-data-row",children:[(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Quote ID"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.quote_id","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Created At"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.created_at","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Reference ID"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.reference_id","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Booking Date"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.booking_date","-")})]})]}),(0,j.jsxs)(d.Row,{gutter:32,className:"detais-data-row",children:[(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Provider Name"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.provider_name","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Quotation Created Date"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.quotation_created_date","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Product ID"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.product_id","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Package Name"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.package_name","-")})]})]}),(0,j.jsxs)(d.Row,{gutter:32,className:"detais-data-row",children:[(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Updated At"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.updated_at","-")})]}),(0,j.jsxs)(d.Col,{span:6,children:[(0,j.jsx)("span",{children:"Document Verified Date"}),(0,j.jsx)("p",{children:(0,h.get)(a,"application_summary.document_verified_date","-")})]})]})]}),(0,j.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,j.jsx)("div",{children:(0,j.jsxs)(d.Row,{children:[(0,j.jsx)("h3",{className:"policy-title",children:"Application Details"}),(0,j.jsx)(d.Col,{span:24,children:(0,j.jsx)(d.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:e=>e.id,columns:this.columns,dataSource:o})})]})})}),(0,j.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,j.jsx)("div",{children:(0,j.jsxs)(d.Row,{children:[(0,j.jsx)("h3",{className:"policy-title",children:"Object Insured Details"}),(0,j.jsx)(d.Col,{children:(0,j.jsx)(d.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:e=>e.id,columns:this.columns,dataSource:u})})]})})}),(0,j.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,j.jsx)("div",{children:(0,j.jsxs)(d.Row,{children:[(0,j.jsx)("h3",{className:"policy-title",children:"Object Insured Image & Documents"}),(0,j.jsx)(d.Col,{children:(0,j.jsx)(d.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:e=>e.id,columns:this.columns,dataSource:_})})]})})}),A.length>0?A.map(((e,t)=>(0,j.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,j.jsx)("div",{children:(0,j.jsxs)(d.Row,{children:[(0,j.jsxs)("h3",{className:"policy-title",children:["Additional Package ",t+1]}),(0,j.jsx)(d.Col,{children:(0,j.jsx)(d.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:e=>e.id,columns:this.columns,dataSource:[{id:`package-${t}-period`,name:"Period",value:e.period},{id:`package-${t}-serviceType`,name:"Service Type",value:e.service_type},{id:`package-${t}-serviceName`,name:"Service Name",value:e.service_name},{id:`package-${t}-additionalFee`,name:"Additional Fee",value:`Rp ${e.additional_fee.toLocaleString()}`},{id:`package-${t}-sumInsured`,name:"Sum Insured",value:e.sum_insured?`RP ${e.sum_insured.toLocaleString()}`:"0"},{id:`package-${t}-addOnCount`,name:"Add-On Count",value:e.add_on_count||"-"}]})})]})})},t))):null,(0,j.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,j.jsx)("div",{children:(0,j.jsxs)(d.Row,{children:[(0,j.jsx)("h3",{className:"policy-title",children:"Payment Details"}),(0,j.jsx)(d.Col,{children:(0,j.jsx)(d.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:e=>e.id,columns:this.columns,dataSource:c})})]})})})]}),(0,j.jsxs)(d.Modal,{title:"Reject Policy",onCancel:()=>this.setState({rejectModal:!1}),onOk:this.handleReject,visible:e,children:[(0,j.jsx)("p",{children:"Reason"}),(0,j.jsx)(d.Input,{placeholder:"reason",onChange:e=>this.setState({rejectRemarks:e.target.value}),value:t})]})]})}}const A=(0,r.connect)((e=>({approvalDetailData:e.approvalListAuto.approvalDetailData,approvalListMessage:e.approvalListAuto.approvalListMessage,approvalSuccess:e.approvalListAuto.approvalSuccess,doneBy:e.Auth.profile.email})),{getApprovalDetail:b,updateQuotationStatus:f})((0,o.withRouter)(_))},8624:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var i=a(1502),n=a.n(i),s=a(24952);class r extends n().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}r.defaultProps={permissions:[]};const o=(0,s.connect)((e=>({permissions:e.Auth.permissions})),{})(r)},95024:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});const i=e=>{if(Array.isArray(e)){return e.map((e=>e.split(/\#|\?/)[0].split(".").pop().trim()))}if(null!==e&&"string"===typeof e)return e.split(/\#|\?/)[0].split(".").pop().trim()}},52561:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFaADAAQAAAABAAAADgAAAAA845anAAAAs0lEQVQ4Eb2SwQ3CMAxFa1iANbixAFJHYYVuwCasQtUFKnHg2hEQXIHwPkoqqHLAVcSXvhxb7ovltKoyCiHssNThVabFVwKSgIJKtY8w6QbwCXySX/H8STPAG7XN5N7f09JAE5DrD3GEQDQ8RBPcagQVqKTaBbQWPwpSB02q1+3wGi8jvCc28ewKZnZ8fyAwPuE7Tkp7dkG/miH9Fez+V/VQo9jHhWSLz2Ox1CGuYk+s5zBf/VDHB2mZ9BMAAAAASUVORK5CYII="},25352:()=>{},15365:()=>{},98196:()=>{},1671:()=>{},26959:()=>{},60195:()=>{}}]);
//# sourceMappingURL=8286.7ee240cb.chunk.js.map