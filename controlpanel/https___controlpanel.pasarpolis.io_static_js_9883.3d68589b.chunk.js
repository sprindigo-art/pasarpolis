"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[9883],{79883:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I});var s=o(1502),r=o.n(s),n=o(24952),a=o(67816),i=o(17634),c=o.n(i),d=o(17823),l=o.n(d),p=o(84029),u=o(55347),R=o(79209),h=o(80878),g=o.n(h);const S=g().div`
  .recon-col {
    padding: 5px;
    word-break: break-word;
  }
  .recon-col-head {
    /* padding: 5px; */
    font-weight: bold;
    margin-bottom: 8px;
  }
  .recon-head {
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 12px;
    font-size: 14px;
  }
  .ant-table-thead > tr > th {
    background-color: #13c2c2;
    padding: 6px;
    /* opacity: 0.8; */
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  }
  .start-recon-button {
    float: right;
  }
  .start-recon-button-enabled {
    float: right;
    background-color: #8A29F5;
  }
  .uploaded-sheet-style-row {
    margin-top:30px;
  }
  .expand-icon {
    font-weight: 600;
  }
  .details {
    padding-top: 12px;
    padding-left: 12px;
  }
  .detail-row {
    margin-bottom: 6px;
  }
  .report-button {
    background-color: #13c2c2;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 4px;
  }
  .report-button:hover {
    background-color: #13c2c2;
    color: #fff;
  }
  .report-button:focus {
    background-color: #13c2c2;
    color: #fff;
  }
  .reload-icon {
    cursor: pointer;
  }
  .ant-table {
    overflow: scroll;
  }
  .sheet-table .ant-table-thead > tr > th {
    background-color: #a9a9a9;
    text-transform: none;
  }
`;var m=o(95916),f=o.n(m);const x=g().div`
  .ant-steps-item-custom {
    min-width: min-content;
  }
  .ant-card {
    width: auto;
    overflow-y: scroll;
  }
  .step-description {
    word-break: break-all;
    padding: 4px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
  }
`;var E=o(70579);const{Step:b}=a.Steps;class _ extends s.Component{constructor(e){super(e),this.state={reconStatus:[],stepsData:[{status:"wait",title:"Created",icon:"plus-circle",key:"CREATED"},{status:"wait",title:"File Reading",icon:"file-search",key:"FILE_READING"},{status:"wait",title:"CSV Generated",icon:"file-done",key:"CSV_GENERATED"},{status:"wait",title:"Reconcilling",icon:"experiment",key:"RECONCILLING"},{status:"wait",title:"Recon Processing",icon:"funnel-plot",key:"RECON_PROCESSING"},{status:"wait",title:"Report Generation",icon:"file-sync",key:"REPORT_GENERATION"},{status:"wait",title:"Success",icon:"check-circle",key:"SUCCESS"}]}}componentWillReceiveProps(e){const{reconStatus:t,stepsData:o}=this.state,{status:s=[],remark:r=""}=e.reconStatus;if(s!==t&&!1===e.reconStatusLoading){s.forEach(((e,t)=>{if("FAILED"===e){let e=f().find(o,{key:s[t-1]}),n=f().findIndex(o,{key:s[t-1]});e={...e,status:"error",description:r},o[n]=e,this.setState({stepsData:o})}else{let n=f().find(o,{key:e}),a=f().findIndex(o,{key:e});n={...n,status:"finish"},s.length-1===t?n={...n,description:r}:delete n.description,o[a]=n,this.setState({stepsData:o})}}));for(let e=s.length+1;e<o.length;e++){let t=o[e];t={...t,status:"wait",description:""},o[e]=t}this.setState({stepsData:o}),this.setState({reconStatus:s})}}render(){const{reconStatusLoading:e}=this.props,{stepsData:t}=this.state;return(0,E.jsx)(x,{children:(0,E.jsx)(a.Card,{children:(0,E.jsx)(a.Spin,{spinning:e,children:(0,E.jsx)(a.Steps,{labelPlacement:"vertical",size:"small",children:t.map(((e,t)=>{let{status:o,title:s,icon:r,description:n}=e;return(0,E.jsx)(b,{status:o,title:s,description:n&&(0,E.jsx)("div",{className:"step-description",children:n}),icon:(0,E.jsx)(a.Icon,{type:r})},t)}))})})})})}}const k=(0,n.connect)((e=>({reconDetails:e.Recon.reconDetails,reconStatusLoading:e.Loading.GET_RECON_DETAIL_STATUS,reconStatusError:e.Error.GET_RECON_DETAIL_STATUS,reconStatus:e.Recon.reconStatus})),{})(_);var w=o(96117),D=o(87291),N=o(8624);const{resetLoadingRedux:C}=w.A,{resetErrorRedux:O}=D.A,{getReconDetails:L,resetReduxStateRecon:y,sendReconReport:A,getReconStatus:T,downloadReport:j,postreconResolverUpdate:P}=R.A;class v extends r().Component{constructor(){super(...arguments),this.fetch=e=>{this.props.getReconDetails(e),this.props.getReconStatus(e)},this.back=()=>{const{history:e}=this.props;if(e){const{action:t}=e;"POP"===t?e.push("/recon/lists"):e.goBack()}},this.handleStatusReload=()=>{const{params:e}=this.props.match;this.props.getReconStatus({query:{recon_id:e.id}})},this.handleSendReport=()=>{const{profileData:e,match:t}=this.props,{params:o}=t;c()({title:"Recon report will be sent to your email",input:"text",inputPlaceholder:"Add comma separated emails",inputValue:e.email,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:e=>{this.props.sendReconReport({query:{id:o.id},body:{email_id:e}})},allowOutsideClick:()=>!1}).then((e=>{"cancel"!==e.dismiss&&c()({type:"success",title:"",text:"success"})}))},this.renderDetailRow=(e,t,o,s)=>(0,E.jsxs)(a.Row,{className:"detail-row",children:[(0,E.jsx)(a.Col,{span:6,className:"recon-col-head",children:e}),(0,E.jsx)(a.Col,{span:6,children:t}),o&&(0,E.jsx)(a.Col,{span:6,className:"recon-col-head",children:o}),s&&(0,E.jsx)(a.Col,{span:6,children:s})]}),this.handleFeedbackPostAction=()=>{const{reconDetails:e,profileData:t}=this.props,o={product_key:(0,m.get)(e,"product",[]).join(""),partner:(0,m.get)(e,"partner"),package:(0,m.get)(e,"package"),month:parseInt((0,m.get)(e,"from_date").split("-")[1]),year:parseInt((0,m.get)(e,"from_date").split("-")[0]),recon_id:(0,m.get)(e,"id"),user_id:(0,m.get)(t,"id"),notification:[]};this.props.postreconResolverUpdate({body:o})}}componentDidMount(){const{params:e}=this.props.match;this.fetch({query:{recon_id:e.id}}),this.props.resetLoadingRedux(["DOWNLOAD_REPORT","RERUN_RECON"]),this.props.resetErrorRedux(["DOWNLOAD_REPORT","RERUN_RECON"])}UNSAFE_componentWillReceiveProps(e){const{postStartReconLoading:t,postStartReconError:o,postStartReconMessage:s,downloadReportLoading:r,downloadReportError:n,report:i,rerunReconLoading:c,rerunReconError:d,rerunReconStatus:l,reconResolverPostFeedbackSubmit:p,reconResolverPostFeedbackSubmitMessage:u}=e;if(!t&&s){const e=!!o,t=e?"error":"success",r=e?"Error":"Success";a.notification[t]({title:r,message:s}),this.props.resetReduxStateRecon(["postStartReconMessage"])}!1===r&&!1===n&&(this.download(i),this.props.resetLoadingRedux(["DOWNLOAD_REPORT"]),this.props.resetErrorRedux(["DOWNLOAD_REPORT"])),!1===c&&(!1===d&&this.handleStatusReload(),a.notification[d?"error":"success"]({message:l}),this.props.resetLoadingRedux(["RERUN_RECON"]),this.props.resetErrorRedux(["RERUN_RECON"])),"Success"===u&&("list"===(0,m.get)(p,"page")?this.props.history.push("/recon/feedback"):this.props.history.push(`/recon/feedback-detail/${(0,m.get)(p,"request_id")}`),this.props.resetReduxStateRecon(["reconResolverPostFeedbackSubmitMessage","reconResolverPostFeedbackSubmit"])),"Success"!==u&&void 0!==u&&(a.notification.error({message:u}),this.props.resetReduxStateRecon(["reconResolverPostFeedbackSubmitMessage"]))}render(){const{reconDetails:e,getAutoReconDetailsLoading:t,profileData:o,rerunReconLoading:s,reconStatus:r,reconResolverPostFeedbackSubmitLoading:n}=this.props,i=(0,m.get)(r,"status",[]),c=i.length>0&&"SUCCESS"===i[i.length-1],{name:d,partner:R,product:h,display_name:g,package:f,report_file:x,uploaded_file:b,created_at:_,from_date:w,to_date:D,uploaded_by:C,disable_resolver:O}=e,L=[{title:"File Name",dataIndex:"file_name",key:"file_name"},{title:"File Status",dataIndex:"file_status",key:"file_status"},{title:"File Url",dataIndex:"file_url",key:"file_url",render:e=>(0,E.jsx)("a",{href:e,disabled:!e,children:"Download"})}];return(0,E.jsx)(u.A,{children:(0,E.jsx)(p.A,{children:(0,E.jsx)(S,{children:(0,E.jsxs)(a.Spin,{spinning:!!t||!!s,children:[(0,E.jsxs)(a.Row,{className:"padding-bottom",type:"flex",justify:"space-between",children:[(0,E.jsx)(a.Button,{onClick:()=>this.back(),children:"Back"}),(0,E.jsxs)(a.Row,{type:"flex",justify:"space-around",children:[c&&(0,E.jsx)(N.A,{requiredPermission:"ops.recon_resolver",children:!O&&(0,E.jsx)(a.Button,{loading:n,className:"report-button",onClick:this.handleFeedbackPostAction,children:"Resolve"})}),!!x&&(0,E.jsxs)("div",{children:[(0,E.jsx)(a.Button,{className:"report-button",href:x,children:"Download Report"}),(0,E.jsx)(a.Button,{className:"report-button",onClick:this.handleSendReport,children:"Send report"})]})]})]}),(0,E.jsxs)("div",{className:"details",children:[this.renderDetailRow("Name",d),this.renderDetailRow("Partner",R),this.renderDetailRow("Product",g?g.join(", "):h),this.renderDetailRow("Package",f),this.renderDetailRow("From Date",w,"To Date",D),this.renderDetailRow("Created On",l()(_).tz(o.user_timezone).format("lll"),"Created By",C)]}),(0,E.jsxs)(a.Row,{className:"recon-head",type:"flex",justify:"space-between",children:["STATUS",(0,E.jsx)(a.Icon,{type:"reload",onClick:this.handleStatusReload,className:"reload-icon"})]}),(0,E.jsx)(k,{}),(0,E.jsx)(a.Row,{className:"recon-head",children:"UPLOADED FILES"}),(0,E.jsx)(a.Table,{className:"uploaded-files-table",dataSource:b,columns:L,pagination:!1,rowKey:"file_url",expandedRowRender:e=>(0,E.jsx)(a.Table,{dataSource:e.file_sheets,columns:[{title:"No.",dataIndex:"sheet_no",width:30},{title:"Sheet Name",dataIndex:"sheet_name",width:100},{title:"Status",dataIndex:"status",width:100},{title:"Errors",dataIndex:"errors"}],pagination:!1,className:"sheet-table",rowKey:"sheet_no"}),expandIcon:e=>{let{expanded:t,onExpand:o,record:s={}}=e;return s.file_sheets&&s.file_sheets.length>0&&(t?(0,E.jsx)(a.Icon,{type:"down",className:"expand-icon",onClick:e=>o(s,e)}):(0,E.jsx)(a.Icon,{type:"right",className:"expand-icon",onClick:e=>o(s,e)}))}})]})})})})}}v.defaultProps={reconDetails:{}};const I=(0,n.connect)((e=>({profileData:e.Auth.profile,reconDetails:e.Recon.reconDetails,getAutoReconDetailsLoading:e.Loading.GET_AUTO_RECON_DETAILS,getAutoReconDetailsError:e.Error.GET_AUTO_RECON_DETAILS,postStartReconLoading:e.Loading.POST_START_RECON,postStartReconError:e.Error.POST_START_RECON,postStartReconMessage:e.Recon.postStartReconMessage,reconStatusLoading:e.Loading.GET_RECON_DETAIL_STATUS,reconStatusError:e.Error.GET_RECON_DETAIL_STATUS,reconStatus:e.Recon.reconStatus,report:e.Recon.downloadReport,downloadReportLoading:e.Loading.DOWNLOAD_REPORT,downloadReportError:e.Error.DOWNLOAD_REPORT,rerunReconLoading:e.Loading.RERUN_RECON,rerunReconError:e.Error.RERUN_RECON,rerunReconStatus:e.Recon.rerunReconStatus,reconResolverPostFeedbackSubmitLoading:e.Loading.POST_RECON_FEEDBACK,reconResolverPostFeedbackSubmit:e.Recon.reconResolverPostFeedbackSubmit,reconResolverPostFeedbackSubmitMessage:e.Recon.reconResolverPostFeedbackSubmitMessage})),{getReconDetails:L,resetReduxStateRecon:y,sendReconReport:A,getReconStatus:T,downloadReport:j,resetErrorRedux:O,resetLoadingRedux:C,postreconResolverUpdate:P})(v)},8624:(e,t,o)=>{o.d(t,{A:()=>i});var s=o(1502),r=o.n(s),n=o(24952);class a extends r().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:o=null}=this.props;return e.find((e=>e===t))?this.props.children:o}}a.defaultProps={permissions:[]};const i=(0,n.connect)((e=>({permissions:e.Auth.permissions})),{})(a)}}]);
//# sourceMappingURL=9883.3d68589b.chunk.js.map