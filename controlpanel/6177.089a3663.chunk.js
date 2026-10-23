"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6177],{46177:(t,e,i)=>{i.r(e),i.d(e,{default:()=>y});var a=i(1502),s=i(24952),o=i(74394),n=i(9533),l=i(11133),r=i(67816),d=i(25211),c=i(97418),p=i(17823),h=i.n(p),u=i(70579);const{getInsuranceOperationList:f,getDownloadOperationList:g,resetReduxState:w}=d.A;class x extends a.Component{constructor(t){var e;super(t),e=this,this.downloadDataFromUrl=t=>{const e=document.createElement("a");e.href=t,e.setAttribute("download","insurance_operation_list.csv"),document.body.appendChild(e),e.click()},this.fetch=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{offset:i,limit:a}=t,s=Number(i)||0,o=Number(a)||10;delete t.offset,delete a.offset,e.props.getInsuranceOperationList({query:{...t,limit:o,offset:s}})},this.csvContent=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.push(t.file_row_no),e.push("True"===t.file_status?"SUCCESS":"FAILED"),e.push(t.file_response),e.push(t.internal_id),e},this.creatCSV=t=>{switch(t){case"file-download-success":{const{policyRetryFilerowData:t,fileData:e}=this.state,i=[];t.filter((t=>"True"===t.file_status)).forEach((t=>{i.push(this.csvContent(t))}));const a="RowNo,Status,Error,InternalId";(0,c.Zt)(i,(0,o.get)(e,"file_name",""),a)}break;case"file-download-failed":{const{policyRetryFilerowData:t,fileData:e}=this.state,i=[];t.filter((t=>"False"===t.file_status)).forEach((t=>{i.push(this.csvContent(t))}));const a="RowNo,Status,Error,InternalId";(0,c.Zt)(i,(0,o.get)(e,"file_name",""),a)}break;default:return null}},this.backButton=()=>{this.props.history.push("/policy/bulk-policy-retry-list")},this.handleTableChange=t=>{const{operation_file_id:e}=this.state,{pageSize:i,current:a}=t,s=i*(a-1);this.setState({pagination:t,offset:s,limit:i},(()=>{this.fetch({operation_file_id:e,offset:s,limit:i})})),this.props.resetReduxState(["insuranceOperationListMessage","insuranceOperationListData"])},this.handleDownloadData=t=>{const{operation_file_id:e}=this.state;this.props.getDownloadOperationList({query:{operation_file_id:e,status:t}})},this.state={current:1,operation_file_id:0,fileData:{},pagination:{},count:0,offset:0,limit:0,policyRetryFilerowData:[],isLoading:!0}}componentWillReceiveProps(t){const{insuranceOperationListData:e,insuranceOperationListMessage:i,downloadOperationListMessage:a,downloadOperationListData:s}=t;if("success"===i&&(this.setState({isLoading:!1,policyRetryFilerowData:e.data.details,count:e.data.metadata.count}),this.props.resetReduxState(["insuranceOperationListMessage","insuranceOperationListData"])),"success"===a){const t=s.file_url;this.downloadDataFromUrl(t)}this.props.resetReduxState(["downloadOperationListMessage","downloadOperationListData"])}componentWillMount(){const{history:t}=this.props,e=(0,o.get)(t,"location.state",{});(0,n.size)(e)<1&&t.push("/policy/bulk-policy-retry-list")}componentDidMount(){const{history:t}=this.props,e=(0,o.get)(t,"location.state",{});"file_url"in e&&this.props.getInsuranceOperationList({query:{operation_file_id:e.id,limit:10,offset:0}}),this.setState({fileData:{...e},operation_file_id:e.id})}render(){const{policyRetryFilerowData:t,count:e,fileData:i}=this.state,a=(0,o.get)(i,"file_url",""),s=[{title:"Row No",key:"file_row_no",dataIndex:"file_row_no"},{title:"Status",key:"status",dataIndex:"status"},{title:"Error",key:"message",dataIndex:"message",render:(t,e)=>"False"!==e.file_status||e.file_response?t:(0,u.jsx)("p",{children:"Policy not Retriable"})},{title:"Internal id",key:"internal_id",dataIndex:"internal_id"},{title:"Present",key:"is_present",dataIndex:"is_present",render:t=>t?"True":"False"}];return(0,u.jsxs)(l._,{children:[(0,u.jsxs)("div",{className:"top-section",children:[(0,u.jsx)(r.Button,{onClick:this.backButton,children:"Back"}),(0,u.jsx)(r.Button,{type:"primary",href:a,children:"Download File"})]}),(0,u.jsx)(r.Card,{className:"file-detail",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:" File Detail "}),(0,u.jsx)("div",{children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:["File name : ",(0,o.get)(i,"file_name","")]}),(0,u.jsxs)("p",{children:["Uploaded At : ",h()((0,o.get)(i,"created_at","")).format("MMMM Do YYYY hh:mm:ss")]}),(0,u.jsxs)("p",{children:["Uploaded By : ",(0,o.get)(i,"user","")]}),(0,u.jsxs)("p",{children:["Status : ",(0,o.get)(i,"file_url",(0,u.jsx)(r.Tag,{color:"red",children:"FAILED"}))&&(0,u.jsx)(r.Tag,{color:"cyan",children:"SUCCESS"})]})]})})]})}),(0,u.jsxs)(r.Card,{className:"file-row-detail",children:[(0,u.jsxs)("div",{className:"file-row-detail-body",children:[(0,u.jsx)("h3",{children:"File Row Detail"}),(0,u.jsxs)("div",{children:[(0,u.jsx)(r.Button,{className:"success-button",type:"primary",onClick:()=>this.handleDownloadData("SUCCESS"),children:" Download Success "}),(0,u.jsx)(r.Button,{className:"failed-button",type:"danger",onClick:()=>this.handleDownloadData("FAILED"),children:" Download Failed "})]})]}),(0,u.jsx)(r.Spin,{spinning:!!this.state.isLoading,children:(0,u.jsx)(r.Table,{bordered:!0,columns:s,dataSource:t,pagination:{total:e,pageSize:10,current:this.state.offset/this.state.limit+1},onChange:this.handleTableChange})})]})]})}}const y=(0,s.connect)((t=>({tableRowDataLoading:t.Policy.BULK_POLICY_RETRY_LIST_FILE_DATA,tableRowDataError:t.Error.BULK_POLICY_RETRY_LIST_FILE_DATA,tableRowData:t.Policy.policyRetryFileDetailData,tableRowDataMessage:t.Policy.policyRetryFileDetailDataMessage,insuranceOperationListData:t.Policy.insuranceOperationListData,insuranceOperationListMessage:t.Policy.insuranceOperationListMessage,downloadOperationListData:t.Policy.downloadOperationListData,downloadOperationListMessage:t.Policy.downloadOperationListMessage})),{resetReduxState:w,getInsuranceOperationList:f,getDownloadOperationList:g})(x)},11133:(t,e,i)=>{i.d(e,{_:()=>s});var a=i(80878);const s=i.n(a)().div`
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  width: 100%;

  .ant-card-bordered {
    width:100%;
  }
  .top-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .file-detail {
    margin-bottom: 30px;
    padding: 10px;
  }
  .file-row-detail {
    padding: 10px;
  }
  .file-row-detail
  .file-detail {
    border: 1ps solid;
  }
  .file-row-detail-body {
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .success-button {
    margin-right: 15px;
  }
  .failed-button {

  }
  .month-selector {
    width: 220px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .select-style {
    width: 200px;
    margin-left: 8px;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`}}]);
//# sourceMappingURL=6177.089a3663.chunk.js.map