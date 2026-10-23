"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[4424],{44424:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var r=a(1502),n=a(24952),o=a(50385),i=a(74394),s=a(9533),l=a(67816),d=a(80878),c=a.n(d);const p=c().div`
  flex-grow: 1;
  .verify-agent-row {
    color: ${e=>e.theme.black};
    margin-bottom: 4px;
  }
  .btn-margin{
    margin-right: 10px;
  }
  .verify-agent-name {
    color: ${e=>e.theme.black};
    font-size: 14px;
    font-weight: 700;
  }
  .width-50{
    width: 50%
  }
  .agent-img-name {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
  }

  .verify-agent-value {
    font-size: 14px;
  }

  .ktp-actions {
    display: flex;
    flex-direction: column;
  }

  .agent-reason-section {
    margin-top: 25px;
  }
  .table-img-box{
    max-height: 250px;
    max-width: 250px;
  }
  .table-img{
    max-height: 250px;
    max-width: 250px;
  }
  .ktp-npwp-img-box {
    height: 250px;
  }

  .ktp-npwp-img {
    max-width: 100%;
    max-height: 100%;
  }

  .agent-reject-text {
    margin-top: 10px;
  }

  .reject-error {
    border: 1px solid ${e=>e.theme.errorColor};
  }
`;a(17823),a(98479);var g=a(70579);const h=[{name:"Agent name",key:"name"},{name:"KTP",key:"ktp_no"},{name:"NPWP",key:"npwp_no"}],u=[{label:"Reject",value:!1},{label:"Accept",value:!0}];var m=a(77980),x=a(86178),f=a.n(x),b=a(62451),y=a(84029);const j=c()(y.A)`
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px 0 rgba(85, 85, 85, 0.05);

  .title {
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 20px;
    color: ${e=>e.theme.black};
  }

  .question-box {
    margin-bottom: 16px;
  }

  .question-title {
    font-size: 14px;
    font-weight: 500;
    color: ${e=>e.theme.darkGrey};
  }

  .question-answer {
    font-size: 13px;
    font-weight: 700;
    color: ${e=>e.theme.black};
  }
`;var w=a(95916),v=a(55611);const A=c()(y.A)`
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px 0 rgba(85, 85, 85, 0.05);

  .title {
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 20px;
    color: ${e=>e.theme.black};
  }
`;class T extends r.Component{constructor(e){super(e),this.getTableData=()=>{const{answer:e,question_option:t={}}=this.selectedQuestion,a=t.options||[],r=e&&e.checked_value||{},n=[];for(let o of a){const{questions:e}=o;if(r[o.title]&&e&&e.length){const t=e[0];n.push({id:t.id,scale:t.answer&&t.answer.value,title:o.title})}}return n},this.getTargetColData=()=>[{key:"sr_no",title:"Sr No.",dataIndex:"index",render:(e,t,a)=>a+1,width:100,align:"center"},{key:"product_name",title:"Insurance Product Name",dataIndex:"title",align:"center"},{key:"question_scale",title:"Rate",dataIndex:"scale",align:"center"}];const{questionData:t={}}=this.props,a=t.question_option.options;this.selectedQuestion=(0,w.find)(a,{title:"Ya"})||{},this.selectedQuestion=this.selectedQuestion.questions[0]}render(){return(0,g.jsxs)(A,{children:[(0,g.jsx)("div",{className:"title",children:"Insurance Product Sold by Agent"}),(0,g.jsx)(v.A,{columns:this.getTargetColData(),bordered:!0,rowKey:e=>`target_${e.id}`,dataSource:this.getTableData(),className:"isoSearchableTable agent-table-data"})]})}}const $=T;class R extends r.Component{constructor(){super(...arguments),this.renderQuestion=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.answer&&e.answer.value?(0,g.jsxs)("div",{className:"question-box",children:[(0,g.jsx)("div",{className:"question-title",children:e.question}),(0,g.jsx)("div",{className:"question-answer",children:e.answer.value})]}):null}}render(){const{questions:e=[]}=this.props,t=(0,w.find)(e,{id:4})||{};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(j,{children:[(0,g.jsx)("div",{className:"title",children:"Profile"}),e.map((e=>this.renderQuestion(e)))]}),t.answer&&"Ya"===t.answer.value&&(0,g.jsx)($,{questionData:t})]})}}const k=R,{getAgentQuestionnaireDetails:N}=b.A;class P extends r.Component{componentDidMount(){this.props.getAgentQuestionnaireDetails(this.props.agentRef)}componentDidUpdate(e){e.agentRef&&e.agentRef!==this.props.agentRef&&this.props.getAgentQuestionnaireDetails(this.props.agentRef)}render(){const{questionsData:e={}}=this.props;return(0,g.jsx)(g.Fragment,{children:e.questions&&!!e.questions.length&&(0,g.jsx)(k,{questions:e.questions})})}}const _=(0,n.connect)((e=>({questionsData:e.Agent.agentQuestionnaireDetail,questionsStatus:e.Agent.agentQuestionnaireStatus})),{getAgentQuestionnaireDetails:N})(P);var D=a(94528),S=a(8624);const{updateAgentOrgType:C,resetAgentRedux:E}=b.A;const I=(0,n.connect)((e=>({profile:e.Auth.profile,updateAgentOrgTypeData:e.Agent.updateAgentOrgTypeData,updateAgentOrgTypeStatus:e.Agent.updateAgentOrgTypeStatus})),{resetAgentRedux:E,updateAgentOrgType:C})((function(e){const{data:t={},defaultValue:a}=e,[n,o]=(0,r.useState)(t.agent_type||"REGULAR AGENT"),i=(0,r.useCallback)((t=>{const{profile:a,data:r}=e;"CORPORATE AGENT"!==r.agent_type&&(o(t),e.updateAgentOrgType({body:{changed_by:a.email,agent_type:t},agentId:r.agent_ref}))}),[e]);return(0,r.useEffect)((()=>{const{updateAgentOrgTypeStatus:t,updateAgentOrgTypeData:a,resetAgentRedux:r,onSuccess:n}=e;"success"===t?((0,m.D)("success",a.message),n&&n(),r(["updateAgentOrgTypeStatus"])):t&&((0,m.D)("error",t),r(["updateAgentOrgTypeStatus"]))}),[e]),(0,g.jsxs)(l.Select,{placeholder:"Pilih ...",defaultValue:a||"REGULAR AGENT",className:"agent-header-dropdown",value:n,disabled:(()=>{let e=!1;return t.agent_tags&&t.agent_tags.forEach((t=>{"staff"===t.tag_type&&(e=!0)})),e})()||"CORPORATE AGENT"===t.agent_type,onChange:i,children:[(0,g.jsx)(l.Select.Option,{value:"REGULAR AGENT",children:"Normal Individual Agents"}),(0,g.jsx)(l.Select.Option,{value:"CORPORATE AGENT",children:"Corporate Agents"})]})}));var V=a(91026),O=a(56518),q=a.n(O);const F=l.Select.Option,{submitAgentVerification:K}=null===q()||void 0===q()?void 0:q().agentReduxActions;class M extends r.Component{constructor(){super(...arguments),this.state={KTP:{},NPWP:{}},this.handleChangeRadio=(e,t)=>{this.updateStateKeys(t,"accept",e.target.value)},this.rejectDocReasonChange=(e,t)=>{this.updateStateKeys(e,"rejectReason",t)},this.updateStateKeys=(e,t,a)=>{this.setState({[e]:{...this.state[e],[t]:a}})},this.handleTextAreaChange=(e,t)=>{this.updateStateKeys(t,"rejectReason",e.target.value)},this.checkValidityForField=e=>{let t=!1;return(e.accept||!e.accept&&e.rejectReason&&e.rejectReason.length>=10)&&(t=!0),t},this.handleSubmitVerification=()=>{const{data:e}=this.props,{document:t=[]}=e,a=(0,s.find)(t,{document_type:"KTP"}),r=(0,s.find)(t,{document_type:"NPWP"}),n="SUBMITTED"===(0,i.get)(a,"status",""),l="SUBMITTED"===(0,i.get)(r,"status",""),{KTP:d,NPWP:c}=this.state;if((0,o.isEmpty)(d)&&(0,o.isEmpty)(c))return(0,m.D)("error","Please provide your input for KTP/NPWP"),!1;if(!(0,o.isEmpty)(d)&&!(0,i.has)(d,"accept"))return(0,m.D)("error","Please provide your input for KTP"),!1;if(!(0,o.isEmpty)(c)&&!(0,i.has)(c,"accept"))return(0,m.D)("error","Please provide your input for NPWP"),!1;if((0,i.get)(a,"id",!1)&&n&&!this.checkValidityForField(d))return(0,m.D)("error","Please provide reject reason with a minimum of 10 characters for KTP"),this.updateStateKeys("KTP","error",!0),!1;if(d.error&&n&&this.updateStateKeys("KTP","error",!1),(0,i.get)(r,"id",!1)&&l&&!this.checkValidityForField(c))return(0,m.D)("error","Please provide reject reason with a minimum of 10 characters for NPWP"),this.updateStateKeys("NPWP","error",!0),!1;c.error&&l&&this.updateStateKeys("NPWP","error",!1);const p=[];(0,i.get)(a,"id",!1)&&n&&p.push({document_uuid:(0,i.get)(a,"id",!1),accept:this.state.KTP.accept,reject_reason:this.state.KTP.accept?"":this.state.KTP.rejectReason}),(0,i.get)(r,"id",!1)&&l&&p.push({document_uuid:(0,i.get)(r,"id",!1),accept:this.state.NPWP.accept,reject_reason:this.state.NPWP.accept?"":this.state.NPWP.rejectReason}),this.props.submitAgentVerification({user_id:e.email,agentId:e.id,process_document:p})},this.getFooterNode=()=>{const{data:e}=this.props,{document:t=[]}=e;let a=!1;if(t.forEach((e=>{"SUBMITTED"===e.status&&(a=!0)})),a)return(0,g.jsxs)(l.Row,{type:"flex",justify:"space-between",align:"center",children:[(0,g.jsx)(l.Col,{className:"verify-submit-notify",children:"Note: When you click submit, it will send notification to agent"}),(0,g.jsx)(l.Col,{children:(0,g.jsx)(l.Button,{type:"primary",className:"btn-margin",onClick:this.handleSubmitVerification,loading:this.props.submitLoading,children:"Submit"})})]})},this.getKeyValueTemplate=(e,t)=>(0,g.jsxs)(l.Row,{type:"flex",className:"verify-agent-row",children:[(0,g.jsxs)(l.Col,{sm:5,xl:5,className:"verify-agent-name",children:[e,":"]}),(0,g.jsx)(l.Col,{sm:8,xl:8,className:"verify-agent-value",children:t})]},e),this.getImgAndReasonTemplate=e=>{const{id:t,url:a,document_type:r}=e,{scenario:n="basic"}=this.props,{getFieldDecorator:o}=this.props.form;let s=(0,i.get)(e,"verified",!1);s||"REJECTED"!==(0,i.get)(e,"status","")||(s=!0);return(0,g.jsxs)(l.Row,{type:"flex",className:"agent-reason-section",children:["basic"===n&&(0,g.jsx)(l.Col,{xl:23,sm:23,className:"agent-img-name",children:r}),"basic"===n&&(0,g.jsx)(l.Col,{xl:12,sm:12,className:"ktp-npwp-img-box",children:(0,g.jsx)("img",{src:a,alt:t,className:"ktp-npwp-img"})}),!s&&(0,g.jsxs)(l.Col,{xl:12,sm:10,className:"ktp-actions",children:[(0,g.jsx)(l.Radio.Group,{options:u,onChange:e=>this.handleChangeRadio(e,r)}),!1===this.state[r].accept&&("zoho"===n?(0,g.jsx)(l.Form,{name:"basic",children:(0,g.jsx)(l.Form.Item,{name:`rejectDoc${r}`,children:o(`rejectDoc${r}`,{rules:[{required:!0,message:"Reason cannot be blank"}]})((0,g.jsx)(l.Select,{placeholder:"Reason to Reject Document",onChange:e=>this.rejectDocReasonChange(r,e),children:["The picture is not clear","Not the original/copy of the document","Not Identity Card/Taxpayer Identification Number Card","The number does not match"].map(((e,t)=>(0,g.jsxs)(F,{value:e,children:[" ",e," "]},t)))}))})}):(0,g.jsx)(l.Input.TextArea,{placeholder:"Type here the reason",onChange:e=>this.handleTextAreaChange(e,r),className:`agent-reject-text ${this.state[r].error&&"reject-error"}`}))]})]},t)},this.renderTables=e=>(0,g.jsx)("div",{className:"margin-10",children:(0,g.jsx)(l.Table,{pagination:!1,showHeader:!1,rowKey:e=>e.id,columns:[{dataIndex:"name",width:150},{dataIndex:"value",render:e=>e}],dataSource:e})}),this.renderZohoData=()=>{const{data:e}=this.props,{document:t=[]}=e,a=(0,s.find)(t,{document_type:"KTP"}),r=(0,s.find)(t,{document_type:"NPWP"}),n=[{id:"ktp_1",name:(0,g.jsx)("strong",{children:" Name "}),value:e.name},{id:"ktp_2",name:(0,g.jsx)("strong",{children:"Mitra Code"}),value:e.agent_code},{id:"ktp_3",name:(0,g.jsx)("strong",{children:"KTP Number"}),value:e.ktp_no},{id:"ktp_4",name:(0,g.jsx)("strong",{children:"KTP Status"}),value:(0,i.get)(a,"status","")},{id:"ktp_5",name:(0,g.jsx)("strong",{children:"KTP Image"}),value:(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"table-img-box",children:(0,g.jsx)("img",{className:"table-img",src:(0,i.get)(a,"url",""),alt:"KTP"})}),a&&this.getImgAndReasonTemplate(a)]})}],o=[{id:"npwp_1",name:(0,g.jsx)("strong",{children:"Email Status"}),value:e.is_email_verified?"Verified":"Not Verified"},{id:"npwp_2",name:(0,g.jsx)("strong",{children:"Registered Date"}),value:f()(e.created_at).format("LL")},{id:"npwp_3",name:(0,g.jsx)("strong",{children:"NPWP Number"}),value:e.npwp_no},{id:"npwp_4",name:(0,g.jsx)("strong",{children:"NPWP Status"}),value:(0,i.get)(r,"status","")},{id:"npwp_5",name:(0,g.jsx)("strong",{children:"NPWP Image"}),value:(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"table-img-box",children:(0,g.jsx)("img",{className:"table-img",src:(0,i.get)(r,"url",""),alt:"NPWP"})}),r&&this.getImgAndReasonTemplate(r)]})}];return(0,g.jsxs)(p,{children:[(0,g.jsxs)(l.Row,{type:"flex",align:"space-between",children:[(0,g.jsx)("div",{className:"width-50",children:this.renderTables(n)}),(0,g.jsx)("div",{className:"width-50",children:this.renderTables(o)})]}),this.renderAgentType(),e.agent_ref&&(0,g.jsx)(_,{agentRef:e.agent_ref}),(0,g.jsx)("hr",{}),this.getFooterNode()]})},this.renderAgentType=()=>{const{data:e}=this.props;return(0,g.jsx)(S.A,{requiredPermission:"ops.view_agent_type_tax_change_btn",children:(0,g.jsxs)(l.Row,{type:"flex",children:[(0,g.jsx)(l.Col,{xl:4,md:5,className:"verify-agent-name",children:"Agent Type:"}),(0,g.jsx)(l.Col,{children:(0,g.jsx)(I,{data:e})})]})})}}render(){const{data:e,scenario:t,agentOrgTypeLoading:a}=this.props,{document:r=[]}=e,n="zoho"===t;return(0,g.jsx)(D.A,{isSpining:a,children:n?this.renderZohoData():(0,g.jsxs)(p,{children:[(0,g.jsxs)(V.A,{children:[h.map((t=>this.getKeyValueTemplate(t.name,e[t.key]))),this.renderAgentType(),r.map((e=>this.getImgAndReasonTemplate(e)))]}),e.agent_ref&&(0,g.jsx)(_,{agentRef:e.agent_ref}),(0,g.jsx)("hr",{}),this.getFooterNode()]})})}}const z=l.Form.create()(M),W=(0,n.connect)((e=>({submitError:e.Error.SUBMIT_AGENT_VERIFICATION,agentOrgTypeLoading:e.Loading.UPDATE_AGENT_ORG_TYPE,submitLoading:e.Loading.SUBMIT_AGENT_VERIFICATION})),{submitAgentVerification:K})(z);var G=a(60452);const L=c().div`
  .w-100 {
    width: 100%;
  }
`,U=l.Select.Option,{rejectAgent:B,resetAgentRedux:Q}=b.A,{getAgentVerificationDetail:Y}=null===q()||void 0===q()?void 0:q().agentReduxActions;class H extends r.Component{constructor(e){super(e),this.handleRejectReasonChange=e=>{this.props.form.setFieldsValue({remark:e})},this.handleRejectAgent=e=>{e.preventDefault();const{agentRef:t}=this.props;this.props.form.validateFields(((e,a)=>{if(!e){let e=a.remark;"Others"===e&&(e=a.remarkText),this.props.rejectAgent({rejectedReason:e,agentRef:t})}}))},this.state={remark:""},this.selectOptions=["Health insurance agent","Student","Housewife","Employee","Unemployment","Trader","Farmer","Entrepreneur","Social Worker","Car Sales","Property Sales","Others"]}componentDidUpdate(e){const{rejectAgentMsg:t,getAgentVerificationDetail:a,agentRef:r,closeModal:n}=this.props;e.rejectAgentMsg!==t&&("success"===t?(n(),a({agentRef:r})):(0,m.D)("error",t))}componentWillUnmount(){const{resetAgentRedux:e}=this.props;e(["rejectAgentMsg"])}render(){const{getFieldDecorator:e}=this.props.form,{closeModal:t}=this.props;return(0,g.jsxs)(l.Form,{name:"basic",onSubmit:this.handleRejectAgent,children:[(0,g.jsx)(l.Form.Item,{label:"Reason of Agent Rejected",name:"remark",children:e("remark",{rules:[{required:!0,message:"Remark cannot be blank"}]})((0,g.jsx)(l.Select,{placeholder:"Reason to Reject Agent",onChange:this.handleRejectReasonChange,children:this.selectOptions.map(((e,t)=>(0,g.jsxs)(U,{value:e,children:[" ",e," "]},t)))}))}),"Others"===this.props.form.getFieldValue("remark")&&(0,g.jsx)(l.Form.Item,{name:"remarkText",children:e("remarkText",{rules:[{required:!0,message:"Remark cannot be blank"}]})((0,g.jsx)(l.Input.TextArea,{}))}),(0,g.jsx)("p",{children:"The agent status will change to rejected and an email notification containing the reasons you entered will be sent to the agent once you submit this form."}),(0,g.jsx)(l.Form.Item,{children:(0,g.jsxs)(l.Row,{type:"flex",justify:"center",children:[(0,g.jsx)(l.Button,{style:{marginRight:8},onClick:t,children:"Cancel"}),(0,g.jsx)(l.Button,{type:"primary",htmlType:"submit",children:"Submit"})]})})]})}}const Z=l.Form.create()(H),J=(0,n.connect)((e=>({rejectAgentMsg:e.Agent.rejectAgentMsg})),{getAgentVerificationDetail:Y,rejectAgent:B,resetAgentRedux:Q})(Z),{getAgentVerificationDetail:X,resetAgentVerificationRedux:ee}=null===q()||void 0===q()?void 0:q().agentReduxActions;const te=(0,n.connect)((e=>({submitLoading:e.Loading.SUBMIT_AGENT_VERIFICATION,agentVerificationDetail:e.AgentVerification.agentVerificationDetail,agentVerificationDetailMsg:e.AgentVerification.agentVerificationDetailMsg,submitVerificationMsg:e.AgentVerification.submitVerificationMsg})),{getAgentVerificationDetail:X,resetAgentRedux:ee})((function(e){const{agentRef:t}=e.match.params,{getAgentVerificationDetail:a,agentVerificationDetail:n={},submitVerificationMsg:o,resetAgentRedux:i,submitLoading:s}=e,[d,c]=(0,r.useState)(!1),p=()=>{c(!1)};return(0,r.useEffect)((()=>("success"===o?a({agentRef:t}):o&&(0,m.D)("error",o),(0,w.isEmpty)(n)&&a({agentRef:t}),()=>{i(["submitVerificationMsg"])})),[t,a,o,i]),(0,g.jsx)(L,{children:(0,g.jsx)(D.A,{isSpining:s,children:!(0,w.isEmpty)(n)&&(0,g.jsxs)(G.A,{children:[(0,g.jsxs)(l.Row,{className:"w-100",type:"flex",align:"space-between",children:[(0,g.jsx)("h2",{children:" Agent Details "}),(0,w.get)(n,"is_active",!1)&&(0,g.jsx)(l.Button,{onClick:()=>{c(!0)},children:" Reject Agent "})]}),(0,g.jsx)(l.Modal,{title:"Reject Agent",visible:d,onCancel:p,footer:!1,className:"agent-verification-modal",width:600,children:(0,g.jsx)(J,{closeModal:p,agentRef:t})}),(0,g.jsx)(l.Row,{className:"w-100",children:(0,g.jsx)(W,{data:{...n||{},agent_ref:t},scenario:"zoho"})})]})})})}))},60452:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(80878);const n=a.n(r)().div`
  padding: 40px 18px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  color: #788195;
  width: 100%;
  background: ${e=>e.theme.white};

  .error-row {
    width: 100%;
  }

  .button-action{
    margin-right: 10px;
    border-radius: 8px;
    border: none;
    color: white;
  }

  .confirm-withdraw,
  .confirm-withdraw:hover {
    background-color: #759437;
  }
  
  .reject-withdraw,
  .reject-withdraw:hover {
    background-color: #dc826e;
  }

  .header-row {
    margin-bottom: 10px;

    h3 {
      float: left;
      color: #788195;
    }

    .total-count {
      float: left;
      color: #4482FF;
      margin-left: 10px;
      margin-top: 3px;
    }

    .search-tag {
      align-self: center;
      margin-left: 5px;
      padding-left: 2px;
    }

    .clear-filter {
      float: right;
      display: flex;

      button {
        margin: 0px 5px;
      }
    }
  }

  .agent-table-data {
    width: 100%;
  }

  .agent-config-btn {
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }

  .agent-verify-btn {
    background-color: ${e=>e.theme.primary};
    color: ${e=>e.theme.black};
    border-color: ${e=>e.theme.primary};
    font-weight: 500;
    font-size: 12px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${e=>e.theme.primary};
      border-color: ${e=>e.theme.primary};
      color: ${e=>e.theme.black};
    }
  }

  .agent-clear-filter {
    margin-bottom: 16px;
    width: 100%;
    text-align-last: end;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
  `},91026:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(1502),n=a(80878);const o=a.n(n)().div`
  width: 100%;
  height: 100%;
`;var i=a(70579);const s=function(e){let{children:t}=e;const a=(0,r.useRef)();return(0,r.useEffect)((()=>{function e(e){return e.preventDefault(),!1}const t=a.current;return t&&t.addEventListener("copy",e),()=>{t&&t.removeEventListener("copy",e)}}),[]),(0,i.jsx)(o,{ref:a,children:t})}},55611:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(21577),n=a(80878),o=a.n(n),i=a(34618),s=a(67050),l=a(93317);const d=o()(r.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-filter-dropdown .ant-dropdown-menu-without-submenu {
    max-width: 400px;
    overflow: auto;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-item {
    overflow: initial;
  }
  .ant-table-thead > tr > th {
    color: ${(0,i.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,i.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,i.palette)("secondary",1)};
      margin: ${e=>"rtl"===e["data-rtl"]?"0 4px 0 0":"0 0 0 4px"};
    }
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 15px;
    white-space: nowrap;
    text-align: ${e=>"rtl"===e["data-rtl"]?"right":"left"};

    p {
      margin-bottom: 0;
    }
  }

  .ant-table-tbody > tr > td {
    font-size: 12px;
    color: ${(0,i.palette)("text",3)};
    border-bottom: 1px solid ${(0,i.palette)("border",0)};

    a {
      color: ${(0,i.palette)("primary",0)};
      ${(0,s.kY)()};

      &:hover {
        color: ${(0,i.palette)("primary",4)};
      }
    }
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-bordered .ant-table-thead > tr > th {
    border-bottom: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-table-pagination {
    display: block;
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,i.palette)("border",0)};

    a {
      border: 0;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    transform: ${e=>"rtl"===e["data-rtl"]?"rotate(180deg)":"rotate(0)"};
  }

  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};
  }

  .ant-pagination-item {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};

    &:hover {
      border-color: ${(0,i.palette)("primary",0)};
      ${(0,s.kY)()};
    }

    &:hover a {
      color: ${(0,i.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,i.palette)("primary",0)};
    border-color: ${(0,i.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,i.palette)("grayscale",6)};

    p {
      color: ${(0,i.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,i.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,i.palette)("secondary",1)};
    color: ${(0,i.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,s.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,i.palette)("secondary",1)};
    color: ${(0,i.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,s.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,i.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,i.palette)("border",0)};
      ${(0,s.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,i.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,i.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,s.Vq)("3px 0 0 3px")};
        ${(0,s.kY)()};
        ${(0,s.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,i.palette)("secondary",7)};
          ${(0,s.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,i.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,s.kY)()};

        &:hover {
          background-color: ${(0,i.palette)("primary",1)};
        }
      }
    }

    .ant-table-thead > tr > th {
      word-break: keep-all;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          order: -1;
        }
      }
    }
  }

  &.isoGroupTable {
    .ant-table-thead > tr {
      th {
        border: 1px solid ${(0,i.palette)("border",0)};
        border-left: 0;

        &[rowspan] {
          text-align: center;
        }

        &.isoImageCell {
          padding: 3px;
        }
      }

      &:first-child {
        th {
          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,i.palette)("border",0)};
          }
        }
      }

      &:last-child {
        th {
          border-top: 0;
        }
      }
    }

    .ant-table-tbody {
      .ant-table-row {
        td {
          border-right: 1px solid ${(0,i.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,i.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,i.palette)("border",0)};
          }

          &.isoImageCell {
            padding: 3px;
          }
        }
      }
    }
  }

  &.isoEditableTable {
    .isoEditData {
      .isoEditDataWrapper {
        display: flex;
        align-items: center;

        input {
          font-size: 12px;
          font-weight: 400;
          color: ${(0,i.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,i.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,s.Vq)("3px")};
          ${(0,s.MS)()};
          ${(0,s.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,i.palette)("border",0)};
            ${(0,s.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }
        }

        .isoEditIcon {
          cursor: pointer;
        }
      }

      .isoDataWrapper {
        display: flex;
        align-items: center;

        .isoEditIcon {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 auto 0 0":"0 0 0 auto"};
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`,c=o().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,i.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,i.palette)("primary",0)};
      background-color: ${(0,i.palette)("primary",0)};
    }
  }
`,p=((0,l.A)(c),(0,l.A)(d))},77980:(e,t,a)=>{a.d(t,{D:()=>n});var r=a(67816);const n=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r.notification[e]({message:t,description:a||""})}},8624:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(1502),n=a.n(r),o=a(24952);class i extends n().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}i.defaultProps={permissions:[]};const s=(0,o.connect)((e=>({permissions:e.Auth.permissions})),{})(i)},21577:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(67816);const n=r.Table}}]);
//# sourceMappingURL=4424.63423b65.chunk.js.map