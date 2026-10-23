"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3158],{21624:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(1502),n=a(67816),r=a(996),o=a.n(r),l=a(95916),s=a(95024),d=a(70579);const c=function(e){const{renderFormItems:t,endorsmentFile:a,renderImgAndPdf:r,onRemoveEndorsmentFile:c,isPreview:u,reviewData:p={},isDetail:m,proofImages:h=[]}=e,x=(0,i.useCallback)((()=>(0,d.jsxs)("div",{children:[(0,d.jsx)(n.Row,{type:"flex",children:(0,d.jsx)("div",{className:"margin-right-20",children:a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"form-field-title",children:"Endorsement Document"}),(0,d.jsxs)("div",{className:"documents-container",children:[r(a),(0,d.jsx)("div",{className:"cross-mark",onClick:c,children:(0,d.jsx)(n.Icon,{type:"cross"})})]})]}):t({name:"endorsement_file",title:"Endorsement File(s)",placeholder:"Upload Documents",type:"upload",required:!0,disabled:!1,accept:"image/*,.pdf"})})}),t({name:"remarks",title:"Remarks",placeholder:"",type:"textarea",required:!0,disabled:!1})]})),[t,r,c,a]),g=(0,i.useCallback)((e=>{window.open(e)}),[]),y=(0,i.useCallback)((e=>"pdf"===(0,s.A)(e)?(0,d.jsx)("div",{className:"documents-container",children:(0,d.jsxs)("div",{className:"pdf-container",children:[(0,d.jsx)("object",{type:"application/pdf",data:e,width:"150",height:"150","aria-label":"PDF"}),(0,d.jsx)("div",{className:"view-pdf-btn-container",children:(0,d.jsx)(n.Button,{onClick:()=>g(e),children:"View Pdf"})})]})}):(0,d.jsx)("div",{className:"documents-container",children:(0,d.jsx)(o(),{className:"policy-img",small:e,large:e,name:"",imageBackgroundColor:"transparent"})})),[g]),_=(0,i.useCallback)((()=>(0,d.jsxs)(n.Row,{type:"flex",justify:"start",children:[(0,d.jsxs)(n.Col,{span:4,className:"field-margin",children:[(0,d.jsx)("h3",{children:"Endorsement File"}),(0,d.jsx)("div",{children:y((0,l.get)(p,"endorsement_file_url"))})]}),(null===h||void 0===h?void 0:h.length)>0&&(0,d.jsxs)(n.Col,{children:[(0,d.jsx)("h3",{className:"text-center",children:"Proofs Of Payment"}),(0,d.jsx)(n.Row,{children:h.map(((e,t)=>(0,d.jsx)(n.Col,{span:4,className:"field-margin",children:y(e)},t)))})]}),(0,d.jsxs)(n.Col,{span:24,className:"field-margin",children:[(0,d.jsx)("h3",{children:"Remark"}),(0,d.jsx)("div",{children:(0,l.get)(p,"remarks","")})]})]})),[p,y,h]);return(0,d.jsxs)("div",{children:[u||m?(0,d.jsx)("h2",{children:"Attachments"}):(0,d.jsx)("h3",{children:"Attachments"}),u||m?_():x()]})}},57362:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(1502);const n=[{name:"request_date",title:"Request Date",placeholder:"",type:"datepicker",required:!0,disabled:!1},{name:"submission_date",title:"Submission Date",placeholder:"",type:"datepicker",required:!0,disabled:!1},{name:"receive_date",title:"Receive Date",placeholder:"",type:"datepicker",required:!0,disabled:!1},{name:"effective_date",title:"Effective Date",placeholder:"",type:"datepicker",required:!0,disabled:!1}];var r=a(67816),o=a(33097),l=a.n(o),s=a(70579);const d=function(e){const{renderFormElementInRow:t,isPreview:a=!1,isDetail:o,reviewData:d}=e,c=(0,i.useCallback)((()=>t(n)),[t]),u=(0,i.useCallback)((()=>(0,s.jsx)(r.Row,{type:"flex",justify:"start",children:n.map(((e,t)=>(0,s.jsxs)(r.Col,{className:`form-col-width ${t+1!==n.length&&"field-margin"}`,children:[(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("div",{children:o?l()(d,e.name):l()(d,e.name).format("DD/MM/YYYY")})]},`formview_${t}`)))})),[d]);return(0,s.jsxs)("div",{children:[a||o?(0,s.jsx)("h2",{children:"Dates"}):(0,s.jsx)("h3",{children:"Dates"}),a||o?u():c()]})}},75311:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(1502),n=a(67816),r=a(80878);const o=a.n(r)().div`
  font-size: 12px;
  font-style: italic;
`;var l=a(70579);class s extends i.Component{constructor(){super(...arguments),this.state={additionalRemark:""},this.handleAcceptDocument=e=>{this.setState({additionalRemark:e.target.value})},this.handleSubmit=()=>{this.props.onSubmit(this.state.additionalRemark)}}render(){const{isShowModal:e}=this.props;return(0,l.jsx)(n.Modal,{title:"Accept Document",visible:e,onOk:this.handleSubmit,onCancel:this.props.onCancel,okText:"Submit",children:(0,l.jsx)(n.Row,{children:(0,l.jsxs)(n.Col,{children:[(0,l.jsx)(n.Form.Item,{children:(0,l.jsx)(n.Input.TextArea,{placeholder:"Input additional remarks to provider if necessary",onChange:e=>this.handleAcceptDocument(e)})}),(0,l.jsxs)(o,{children:["Additional information entered is displayed in the ",(0,l.jsx)("strong",{children:"Special Notes"})," section of the policy detail page. This information will also be visible to the insurance."]})]})})})}}const d=s},72276:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(1502),n=a(67816),r=a(84029),o=a(86178),l=a.n(o),s=a(70579);class d extends i.Component{render(){const{addonsData:e,addsOnRequest:t}=this.props,a=l()().year(),i=(null===t||void 0===t?void 0:t.add_ons_cat)||[],o=(null===t||void 0===t?void 0:t.ev_variant)||!1?"ev_variant":"non_ev_variant",d=a-(null===t||void 0===t?void 0:t.year),c=[{title:"Service Type",dataIndex:"category"},{title:"Service Name",dataIndex:"name"},{title:"AWS Rate(%)",dataIndex:"category_code",render:(e,a)=>{var n,r,l,c,u,p,m,h,x,g;const y=(null===i||void 0===i||null===(n=i.find((t=>(null===t||void 0===t?void 0:t.category_code)===e)))||void 0===n?void 0:n.add_on)||[],_=(null===y||void 0===y?void 0:y.find((e=>(null===e||void 0===e?void 0:e.add_on_code)===(null===a||void 0===a?void 0:a.code))))||{},v=null===(r=Object.entries((null===_||void 0===_||null===(l=_.percentage)||void 0===l?void 0:l.brand_based_year_ranges)||{}))||void 0===r?void 0:r.map((e=>{let[t,a]=e;return{brand:t,data:a}})),f=(null===v||void 0===v||null===(c=v.find((e=>"others"===(null===e||void 0===e?void 0:e.brand))))||void 0===c||null===(u=c.data)||void 0===u?void 0:u[`${o}`])||{},b=(null===v||void 0===v||null===(p=v.find((e=>(null===e||void 0===e?void 0:e.brand)===(null===t||void 0===t?void 0:t.brand_code))))||void 0===p||null===(m=p.data)||void 0===m?void 0:m[`${o}`])||f,j=null===Object||void 0===Object||null===(h=Object.keys(b))||void 0===h||null===(x=h.map(Number))||void 0===x||null===(g=x.sort(((e,t)=>e-t)))||void 0===g?void 0:g.find((e=>e>=d)),C=void 0!==j?b[j]:0,k="authorized-service"===(null===a||void 0===a?void 0:a.code);return(0,s.jsx)("span",{children:k?`${C}%`:"-"})}},{title:"Additional Fee(Rp)",dataIndex:"premium"},{title:"Sum Insured(Rp)",dataIndex:"sum_insured"},{title:"Add On Count",dataIndex:"add_on_count"}];return(0,s.jsx)(r.A,{className:"details-info-container policy-detail-card",children:(0,s.jsxs)(n.Row,{children:[(0,s.jsx)("h3",{className:"policy-title",children:"Additional Package (Addons)"}),(0,s.jsx)(n.Col,{span:24,children:(0,s.jsx)(n.Table,{pagination:{pageSize:100},columns:c,rowKey:e=>e.id,dataSource:e,bordered:!0})})]})})}}const c=d},52774:(e,t,a)=>{a.d(t,{A:()=>f});var i=a(1502),n=a(88962),r=a(24952),o=a(80878),l=a.n(o);const s=l().div`
  width: 100%;
  overflow-x: auto;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  .policy-header {
    padding: 16px;
  }

  .policy-title {
    font-size: 17px;
    font-weight: 900;
  }
`,d=l().table`
  width: 100%;
  border-collapse: collapse;
`,c=l().th`
  background: #f0f2f5;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`,u=l().tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`,p=l().td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: ${e=>{let{align:t}=e;return t||"left"}};
`,m=l().button`
  background: #1890ff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #40a9ff;
  }
`,h=l().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`,x=l().button`
  background: #1890ff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    background: #d9d9d9;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #40a9ff;
  }
`;var g=a(26877),y=a(70579);const{getClaimLists:_,resetReduxStateClaim:v}=g.A,f=(0,r.connect)((e=>({data:e.Claims.data,getClaimListsStatus:e.Claims.getClaimListsStatus,claimListsError:e.Error.GET_CLAIM_LISTS,claimListsMessage:e.Claims.getClaimListsMessage})),{getClaimLists:_,resetReduxStateClaim:v})((e=>{let{data:t,getClaimLists:a,getClaimListsStatus:r,applicationNo:o,resetReduxStateClaim:l}=e;const[g,_]=(0,i.useState)(null),[v,f]=(0,i.useState)(null),[b,j]=(0,i.useState)(!1),[C,k]=(0,i.useState)(1),[D,w]=(0,i.useState)(10),[N,P]=(0,i.useState)(1),S=(0,n.useHistory)(),A=!!g&&g.map(((e,t)=>({key:t,claim_no:e.claim_no,benefit:e.benefit,created_at:e.created_at,status:e.status,claim_id:e.claim_id})));(0,i.useEffect)((()=>{"success"===r&&t&&(_(t.data),f(t.meta_data))}),[r,t]),(0,i.useEffect)((()=>(o&&a({application_no:o}),()=>{l(["getClaimListsStatus"])})),[a,o,l]),(0,i.useEffect)((()=>{g&&v&&(j(!1),k(v.page),w(v.page_size),P(v.num_page))}),[g,v]);const I=e=>{j(!0),a({application_no:o,page:e,page_size:D})};return null!==A&&void 0!==A&&A.length?(0,y.jsxs)(s,{children:[(0,y.jsx)("div",{className:"policy-header",children:(0,y.jsx)("h1",{className:"policy-title",children:"Claim List"})}),b?(0,y.jsx)("p",{children:"Loading..."}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d,{children:[(0,y.jsx)("thead",{children:(0,y.jsxs)(u,{children:[(0,y.jsx)(c,{children:"Claim No"}),(0,y.jsx)(c,{children:"Benefit"}),(0,y.jsx)(c,{children:"Created At"}),(0,y.jsx)(c,{children:"Status"}),(0,y.jsx)(c,{children:"Action"})]})}),(0,y.jsx)("tbody",{children:A.map(((e,t)=>(0,y.jsxs)(u,{children:[(0,y.jsx)(p,{children:e.claim_no}),(0,y.jsx)(p,{children:e.benefit}),(0,y.jsx)(p,{children:e.created_at}),(0,y.jsx)(p,{children:e.status}),(0,y.jsx)(p,{align:"center",children:(0,y.jsx)(m,{onClick:()=>S.push(`/claims/${e.claim_id}`),children:"Detail"})})]},t)))})]}),(0,y.jsxs)(h,{children:[(0,y.jsx)(x,{disabled:1===C,onClick:()=>I(C-1),children:"Prev"}),(0,y.jsxs)("span",{children:["Page ",C," of ",N]}),(0,y.jsx)(x,{disabled:C===N,onClick:()=>I(C+1),children:"Next"})]})]})]}):null}))},5164:(e,t,a)=>{a.d(t,{A:()=>w});var i=a(1502),n=a.n(i),r=a(24952),o=a(67816),l=a(62451),s=a(7303),d=a(80878);const c=a.n(d)().div`
  .loader-row {
    display: flex;
    justify-content: center;
  }

  .checkbox-margin {
    margin: 15px; 
  }

  .row-width {
    width: 100%;
  }

  .text-font-size-24 {
    font-size: 24px;
  }
`;var u=a(70579);class p extends n().Component{constructor(){super(...arguments),this.state={loading:!1},this.handleCancel=()=>{this.props.onCancel()},this.handleOk=()=>{this.props.onOk()}}render(){const{isOpen:e,message:t,loading:a}=this.props;return(0,u.jsxs)(o.Modal,{title:"Initiate new claim",visible:e,footer:null,closable:!1,wrapClassName:"benefits-modal",maskClosable:!1,centered:!0,children:[(0,u.jsx)("div",{className:"claim-validation-content",children:t}),(0,u.jsxs)("div",{className:"claim-validation-footer",children:[(0,u.jsx)(o.Button,{className:"yes-btn-claim-validation",onClick:this.handleOk,loading:a,children:"YES"}),(0,u.jsx)(o.Button,{className:"no-btn-claim-validation",onClick:this.handleCancel,children:"NO"})]})]})}}const m=(0,r.connect)((e=>({})),{})(p);var h=a(96117),x=a(87291),g=a(8624);const y=o.Collapse.Panel,_=o.Radio.Group,{validateClaim:v,getBenefits:f,createClaim:b,resetAgentRedux:j}=l.A,{resetLoadingRedux:C}=h.A,{resetErrorRedux:k}=x.A;class D extends n().Component{constructor(){super(...arguments),this.state={isClaimActive:!1,loader:!1,displaySafeMessage:!1,skipPreCheck:!1},this.handleCancel=()=>{this.props.resetAgentRedux(),this.props.triggerClosePopup()},this.handleCancelClaimValidation=()=>{this.setState({showValidatePopup:!1})},this.handleOkClaimValidation=()=>{this.createClaim(),this.handleCancelClaimValidation()},this.handleChange=e=>{this.setState({value:e.target.value,btnLoading:!1})},this.handleCheckChange=e=>{this.setState({skipPreCheck:e.target.checked})},this.createClaim=()=>{const{isClaimActive:e,value:t,skipPreCheck:a}=this.state,{internalId:i}=this.props;e?(this.props.createClaim({benefit_id:t,internal_id:i,skip_precheck:a,source:"control-panel"}),this.props.resetErrorRedux(["CLAIM_VALIDATE"]),this.props.resetLoadingRedux(["CLAIM_VALIDATE"]),this.props.resetAgentRedux(["claimValidateStatus"])):this.setState({displaySafeMessage:!0})},this.handleValidate=()=>{const{internalId:e}=this.props,{value:t}=this.state;this.props.validateClaim({benefit_id:t,internal_id:e})},this.safeScreen=()=>(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"You are in proper protection"}),(0,u.jsx)("p",{children:"For more detailed information, contact our customer service at the number below & register your claim."}),(0,u.jsxs)("span",{className:"text-font-size-24",children:[(0,u.jsx)("i",{className:"fas fa-phone-volume"}),"\xa0\xa0021 3044 8080"]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"- OR -",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("p",{children:"Chat with PasarPolis customer service team through a Whatsapp number below & submit you claims"}),(0,u.jsxs)("span",{className:"text-font-size-24",children:[(0,u.jsx)("i",{className:"fab fa-whatsapp"})," \xa0\xa00877 0017 8000"]})]}),this.onCloseDisplayError=()=>{this.props.removeDisplayError()},this.genExtra=()=>(0,u.jsx)(o.Icon,{type:"down"}),this.isActive=e=>{this.setState({isClaimActive:e})},this.renderUnSafeScreen=(e,t)=>(0,u.jsxs)(o.Spin,{spinning:!!e,tip:"Loading...",children:[void 0!==t&&t.length>0&&(0,u.jsx)(_,{onChange:this.handleChange,value:this.state.value,className:"benefits-radio radioWrapperHeightAuto",children:t.map(((e,t)=>e.benefits.length>1?(0,u.jsx)(o.Collapse,{children:(0,u.jsx)(y,{header:(0,u.jsxs)("div",{className:"benefits-collapse-header",children:[(0,u.jsxs)("b",{children:[e.benefit_group_name," "]}),(0,u.jsx)("br",{}),(0,u.jsx)("span",{children:e.benefit_group_description})]}),extra:this.genExtra(),children:e.benefits.map(((e,t)=>(0,u.jsx)(o.Radio,{value:e.benefit_id,onChange:()=>this.isActive(e.is_claim_active),children:(0,u.jsx)("b",{children:e.benefit_name})},t)))},t)},t):e.benefits.map(((e,t)=>(0,u.jsxs)("div",{className:"radio-content-wrapper",children:[(0,u.jsxs)(o.Radio,{value:e.benefit_id,onChange:()=>this.isActive(e.is_claim_active),children:[(0,u.jsx)("b",{children:e.benefit_name}),(0,u.jsx)("br",{}),(0,u.jsx)("span",{className:"description",children:e.description})]},t),(0,u.jsx)("br",{})]},t)))))}),void 0!==t&&t.length<1&&(0,u.jsx)("h3",{children:"Benefit is not found"})]})}UNSAFE_componentWillReceiveProps(e){const{dataValidate:t,claimValidateLoading:a,claimValidateError:i,claimValidateStatus:n,claimId:r,createClaimStatus:o,createClaimLoading:l,createClaimError:s}=e,{history:d}=this.props;if(!a&&!i&&n){const{message:e,claim_id:a,is_claimable:i,is_first_claim:n}=t;if(!a&&n)this.createClaim();else if(a)d.push(`/claims/${a}`),this.props.resetAgentRedux();else{if(!(a||n||i))return void this.setState({displaySafeScreen:!0});this.setState({showValidatePopup:!0,validatePopupMessage:e})}}!l&&!s&&o&&r&&(d.push(`/claims/${r}`),this.props.resetAgentRedux(["createClaimStatus"]))}componentWillUnmount(){this.props.resetAgentRedux(["createClaimStatus","claimValidateStatus","claimValidateStatusCode","createClaimError","claimValidateError"])}componentDidMount(){const{packageName:e,isClaimOpen:t,productCode:a,providerCode:i,internalId:n,applicationNo:r}=this.props;t&&void 0!==e&&this.props.getBenefits({package_code:e,product_key:a,insurance_provider:i,internal_id:n,application_no:r})}render(){const{isClaimOpen:e,agentClaimBenefitsData:t,createClaimStatus:a,getBenefitsLoading:i,claimValidateLoading:n,claimValidateError:r,claimValidateStatus:l,claimValidateStatusCode:d,createClaimLoading:p,createClaimError:h}=this.props,{value:x,isClaimActive:y,showValidatePopup:_,validatePopupMessage:v,displaySafeScreen:f,skipPreCheck:b}=this.state;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{isOpen:_,message:v,onOk:this.handleOkClaimValidation,onCancel:this.handleCancelClaimValidation,loading:p}),(0,u.jsx)(o.Modal,{title:"Benefits",visible:e,onCancel:this.handleCancel,maskClosable:!1,closable:!1,footer:[(0,u.jsx)(o.Button,{onClick:this.handleCancel,children:"Cancel"},1),(0,u.jsx)(o.Button,{disabled:!x||!y||n||i||p,onClick:this.handleValidate,loading:n||i||p,children:"Claim"},2)],wrapClassName:"benefits-modal",children:(0,u.jsxs)(c,{children:[!n&&r&&l&&("CLAIM_109"===d?(0,u.jsx)(s.A,{message:l}):(0,u.jsx)(o.Alert,{message:l,type:"error"})),x&&!y&&(0,u.jsx)(o.Alert,{message:"Claim is not active for this benefit",type:"error"}),!p&&!!h&&a&&(0,u.jsx)(o.Row,{className:"row-width",children:(0,u.jsx)(o.Col,{span:24,children:(0,u.jsx)(o.Alert,{message:a,type:"error"})})}),(0,u.jsx)(o.Spin,{spinning:!!i||!!n||!!p,tip:"Please wait...",className:"loader-row",children:f?this.safeScreen():this.renderUnSafeScreen(i,t)}),(0,u.jsx)(g.A,{requiredPermission:"ops.view_agency_create_claim",children:(0,u.jsx)(o.Checkbox,{className:"checkbox-margin",defaultValue:b,onChange:this.handleCheckChange,children:"Skip Precheck"})})]})})]})}}const w=(0,r.connect)((e=>({claimId:e.Agent.claimId,agentClaimBenefitsData:e.Agent.agentClaimBenefitsData,getAgentClaimBenefitsStatus:e.Agent.getAgentClaimBenefitsStatus,createClaimStatus:e.Agent.createClaimStatus,dataValidate:e.Agent.dataValidate,claimValidateStatus:e.Agent.claimValidateStatus,claimValidateStatusCode:e.Agent.claimValidateStatusCode,getBenefitsLoading:e.Loading.GET_AGENT_BENEFITS,getBenefitsError:e.Error.GET_AGENT_BENEFITS,claimValidateLoading:e.Loading.AGENT_CLAIM_VALIDATE,claimValidateError:e.Error.AGENT_CLAIM_VALIDATE,createClaimLoading:e.Loading.CREATE_AGENT_CLAIM,createClaimError:e.Error.CREATE_AGENT_CLAIM})),{getBenefits:f,resetAgentRedux:j,validateClaim:v,createClaim:b,resetLoadingRedux:C,resetErrorRedux:k})(D)},92728:(e,t,a)=>{a.d(t,{A:()=>v});var i=a(1502),n=a.n(i),r=a(67816),o=a(95916),l=a(69732),s=a(68863),d=a(8634),c=a(77980),u=a(17135),p=a(41669),m=a(84487),h=a(80878),x=a.n(h);const g=x().div`
  .ant-input-number {
    width: 100%;
  }
  .label {
    font-weight: 600;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .errorText {
    color: ${e=>e.theme.errorRed};
    margin-bottom: 10px;
  }
  .required-star {
    color: ${e=>e.theme.errorColor};
  }
  .text-label {
    color: ${e=>e.theme.black};
  }
  .w-40 {
    width: 50% !important;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: auto auto;
  }
`,y=x().div`
  .custom-radio-group {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  .custom-radio-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    transition: background-color 0.3s;
    border: 1px #dedede solid;
  }

  .custom-radio-button .anticon {
    margin-right: 5px;
  }
  .ant-radio-button-wrapper-checked {
    background-color: #00963222;
    color: #009632;
    border: 1px #dedede solid;
  }
`;var _=a(70579);const v=r.Form.create()((function(e){var t;const{policyId:a,commissionApprovalStatus:h,getCommissionApprovalStatus:x,commissionData:v={},form:f,policyDetails:b,agentScore:j={}}=e,{getFieldValue:C,getFieldDecorator:k,validateFields:D}=f,[w,N]=[C("outgoing_commission_rate"),C("points_from_provider")],[P,S]=(0,i.useState)({}),[A,I]=(0,i.useState)(""),[F,E]=(0,i.useState)(v.link_for_email_approval||""),[,R]=(0,m.uk)(),[{getCommissionsPointsData:T={}},M]=(0,m.Ic)(),U=(0,i.useMemo)((()=>(0,s.checkIsLvAgent)(null===b||void 0===b?void 0:b.agent)),[b]),L=(0,i.useMemo)((()=>b&&"Online"===(null===b||void 0===b?void 0:b.policy_type)),[b]),O=(0,i.useMemo)((()=>b&&"O2O"===(null===b||void 0===b?void 0:b.policy_type)),[b]),V=(0,i.useMemo)((()=>b&&"Offline"===(null===b||void 0===b?void 0:b.policy_type)),[b]),q=(0,i.useMemo)((()=>"auto"===v.commission_disbursement_method),[v]),$=U&&V&&"no-approval-required"===h,B=(0,o.get)(b,"request.product_key",""),z=(0,i.useCallback)((()=>{var e,t,a,i,n,r,o,l;const s={agent_type:U?"LV":"NON-LV",agent_code:(null===b||void 0===b?void 0:b.agent_code)||"",product_version:O?"O2O":"offline",product_key:(null===b||void 0===b||null===(e=b.request)||void 0===e?void 0:e.product_key)||"",package_code:null!==b&&void 0!==b&&null!==(t=b.request)&&void 0!==t&&t.package?(null===b||void 0===b||null===(a=b.request)||void 0===a?void 0:a.package)||"":(null===b||void 0===b||null===(i=b.request)||void 0===i?void 0:i.product_key)||"",provider_code:(null===b||void 0===b||null===(n=b.request)||void 0===n?void 0:n.provider_code)||"",medium:L?"ONLINE":(O||V)&&"OFFLINE",binder_type:A||(null===b||void 0===b||null===(r=b.request)||void 0===r?void 0:r.binder_type),category:(null===b||void 0===b||null===(o=b.agent)||void 0===o?void 0:o.category)||"RETAIL",agentScore:j};var d;(O&&(s.policy_ref_id=null===b||void 0===b?void 0:b.reference_id),null!==b&&void 0!==b&&null!==(l=b.agent)&&void 0!==l&&l.parent_code)&&(s.parent=null===b||void 0===b||null===(d=b.agent)||void 0===d?void 0:d.parent_code);M({body:s})}),[b,O,A,M,U,j]),Y=U&&["car-protection","property-protection"].includes(B),G="pending-commission-points-edit"!==h,[{UPDATE_COMMISSION_ERROR:K,updateCommissionStatus:W},H]=(0,l.useErrorContextValue)(),Z=n().useRef(!1);(0,i.useEffect)((()=>{var e;if(O&&q)return I("inside"),void(Z.current=!1);Z.current||(null!==b&&void 0!==b&&null!==(e=b.request)&&void 0!==e&&e.binder_type?I(b.request.binder_type):I("outside"))}),[O,q,null===b||void 0===b||null===(t=b.request)||void 0===t?void 0:t.binder_type]),(0,i.useEffect)((()=>{var e;A&&b&&(null===(e=Object.keys(b))||void 0===e?void 0:e.length)>0&&z()}),[A,b,z]),(0,i.useEffect)((()=>{"success"===W?((0,c.D)("success","Commission successfully Updated"),x(),H((0,l.resetError)({updateCommissionStatus:""}))):K&&W&&((0,c.D)("error",W),H((0,l.resetError)({updateCommissionStatus:""})))}),[W,K,H,x]),(0,i.useEffect)((()=>{v.link_for_email_approval&&F&&F!==v.link_for_email_approval&&E(v.link_for_email_approval)}),[v.link_for_email_approval,F]);const J=(0,i.useCallback)((e=>(0,u.A)({...e,getFieldDecorator:k,getFieldValue:C})),[k,C]),Q=(0,i.useCallback)(((e,t)=>{var a,i,r,o,l,s,d,c,u;return[{name:"incoming_commission_rate",title:"Incoming Commission",type:"number",min:0,defaultValue:null!==(a=null===t||void 0===t?void 0:t.incoming_commission_rate)&&void 0!==a?a:0,disabled:!0,className:"w-40"},{name:"recruitment_bonus",title:"Rekrutmen Bonus",type:"number",min:0,defaultValue:null!==(i=null===t||void 0===t?void 0:t.recruitment_bonus)&&void 0!==i?i:0,disabled:!0,className:"w-40",hidden:!U},{name:"outgoing_commission_rate",title:"Outgoing Commission",type:"number",min:0,defaultValue:null!==(r=null===v||void 0===v?void 0:v.commission_rate)&&void 0!==r?r:0,disabled:!0,className:"w-40"},{name:"overriding_bonus",title:"Overriding Bonus",type:"number",min:0,defaultValue:null!==(o=null===t||void 0===t?void 0:t.overriding_bonus)&&void 0!==o?o:0,disabled:!0,className:"w-40",hidden:!U},{name:"extra_points_by_pp",title:"Incoming Points",type:"number",min:0,defaultValue:null!==(l=null!==(s=null===v||void 0===v?void 0:v.extra_points_by_pp)&&void 0!==s?s:null===t||void 0===t?void 0:t.incoming_points_rate)&&void 0!==l?l:0,disabled:G&&!Y,className:"w-40"},{name:"royalty_bonus",title:"Royalty Bonus",type:"number",min:0,defaultValue:null!==(d=null===t||void 0===t?void 0:t.royalty_bonus)&&void 0!==d?d:0,disabled:!0,className:"w-40",hidden:!U},{name:"points_from_provider",title:"Outgoing Points",type:"number",min:0,defaultValue:null!==(c=null===v||void 0===v?void 0:v.points_rate)&&void 0!==c?c:0,disabled:G&&!Y,className:"w-40"},{name:"founder_bonus",title:"Founders Bonus",type:"number",min:0,defaultValue:null!==(u=null===t||void 0===t?void 0:t.founder_bonus)&&void 0!==u?u:0,disabled:!0,className:"w-40",hidden:!U}].map(((e,t)=>{const a=J(e);return(0,_.jsx)(n().Fragment,{children:a},e.name||t)}))}),[J,v,G,U,Y]),X=(0,i.useCallback)(((e,t)=>{if("screenshot"===t)S({screenshot:""}),E(e)}),[]),ee=(0,i.useCallback)((e=>{if("screenshot"===e)E("")}),[]),te=(0,i.useCallback)((e=>{e.preventDefault(),D((async(e,t)=>{if(!e){let e={};if($||F||(e={...e,screenshot:"Please upload screenshot file"}),(0,o.isEmpty)(e)){const[e,i,n,r,o,l,s]=[t.extra_points_by_pp||0,t.extra_points_requested||0,t.points_from_provider||0,t.recruitment_bonus||0,t.overriding_bonus||0,t.royalty_bonus||0,t.founder_bonus||0],d={extra_points_by_pp:e,extra_points_requested:i,points_from_provider:n,points_rate:e+i+n,link_for_email_approval:F,recruitment_bonus:r,overriding_bonus:o,royalty_bonus:l,founder_bonus:s};A&&(d.binder_type=A),R({policyNo:a,body:d})}else S(e)}}))}),[F,a,R,D,A,$]),ae=(0,i.useMemo)((()=>({commission:null!==w&&void 0!==w?w:0,point:null!==N&&void 0!==N?N:0,total:(null!==w&&void 0!==w?w:0)+(null!==N&&void 0!==N?N:0)})),[w,N]);return(0,_.jsx)(d.A,{className:"details-info-container policy-detail-card",children:(0,_.jsxs)(g,{children:[(O||V)&&(0,_.jsx)(y,{children:(0,_.jsxs)(r.Radio.Group,{defaultValue:"",value:A,onChange:e=>{Z.current=!0,I(e.target.value)},disabled:G,className:"custom-radio-group",children:[(0,_.jsxs)(r.Radio.Button,{value:"inside",className:"custom-radio-button",children:["Inside Binder ","inside"===A&&(0,_.jsx)(r.Icon,{type:"check"})]}),(0,_.jsxs)(r.Radio.Button,{value:"outside",className:"custom-radio-button",children:["Outside Binder"," ","outside"===A&&(0,_.jsx)(r.Icon,{type:"check"})]})]})}),(0,_.jsxs)("div",{className:"mt-20 text-label",children:["Current Total Outgoing Commission: ",ae.total,"% \xa0(Total commission more than 100% is not allowed)"]}),ae.total>100&&(0,_.jsx)("div",{className:"errorText",children:"The total commission exceeds 100%."}),(0,_.jsxs)(r.Form,{className:"mt-20",onSubmit:te,children:[(0,_.jsx)("div",{className:"grid-2",children:Q(b,T)}),!$&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"mt-20",children:[(0,_.jsx)("span",{className:"required-star",children:"*"})," Upload screenshot of email approval"]}),(0,_.jsx)("div",{className:"errorText",children:P.screenshot}),(0,_.jsx)(p.A,{onSave:e=>X(e,"screenshot"),name:"screenshot",img:F,isNew:!F,isPreviewImg:!0,fileType:".jpg,.jpeg,.png",onRemove:()=>ee("screenshot"),disabled:!("pending-commission-points-edit"===h||U&&V)})]}),"pending-commission-points-edit"===h&&(0,_.jsx)(r.Row,{justify:"end",type:"flex",children:(0,_.jsx)(r.Popconfirm,{title:`The total commission that will be disbursed is ${ae.commission}% & point is ${ae.point||0}%. Is this correct? `,okText:"YES",cancelText:"NO",onConfirm:te,children:(0,_.jsx)(r.Button,{className:"mt-20",type:"primary",htmlType:"submit",disabled:ae.total>100,title:ae.total>100?"The total commission exceeds 100%.":"",children:"Submit"})})})]})]})})}))},74617:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(1502),n=a(84029),r=a(67816),o=a(33097),l=a.n(o),s=a(70579);class d extends i.Component{constructor(){super(...arguments),this.getRows=()=>{const{policyDetail:e}=this.props;return[{id:"document_pending_1",name:(0,s.jsx)("strong",{children:"Document's Pending"}),value:l()(e,"data_pending_on_agent","-")||"-"}]}}render(){return(0,s.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"policy-title",children:"Document Pending On Mitra"}),(0,s.jsx)(r.Table,{pagination:{pageSize:100},rowKey:e=>e.id,showHeader:!1,columns:[{dataIndex:"name",width:150},{dataIndex:"value"}],dataSource:this.getRows()})]})})}}const c=d},31734:(e,t,a)=>{a.d(t,{A:()=>g});var i=a(1502),n=a(67816),r=a(41516),o=a(97418);const l=e=>(e||"").toUpperCase(),s=e=>(e||"").replace(/\D/g,""),d=e=>(e||"").replace(/[^A-Za-z ]/g,""),c=e=>l(e).trim().replace(/\s+/g,""),u={ktp_no:e=>16===s(e).length,chasis_number:e=>{const t=l(e).trim();return t.length>=8&&t.length<=20&&/^[A-Z0-9]+$/.test(t)},machine_number:e=>{const t=l(e).trim();return t.length>=5&&t.length<=21&&/^[A-Z0-9]+$/.test(t)},vehicle_plate_no:e=>c(e).length>0,color:e=>{const t=(e||"").trim();return t.length>0&&/^[A-Za-z ]+$/.test(t)}};var p=a(70579);const m=e=>{let{editableFieldKey:t,editableFieldUserInput:a,onChangeInput:r,onValidate:o,regionCode:m}=e;(0,i.useEffect)((()=>{if("function"!==typeof o)return;const e=a||"",i=u[t],n=i?i(e):void 0!==e&&""!==e;o(n)}),[t,a,o]);return(0,p.jsx)("div",{className:"dynamic-form-field",children:(()=>{switch(t){case"transmission_type":return(0,p.jsxs)(n.Select,{placeholder:"Select option",value:a,onChange:e=>r(e),id:`editable-input-${t}`,style:{width:"100%"},children:[(0,p.jsx)(n.Select.Option,{value:"Automatic",children:"Automatic"}),(0,p.jsx)(n.Select.Option,{value:"Manual",children:"Manual"})]});case"chasis_number":{const e=a||"",i=l(e).trim().length>0&&!u.chasis_number(e)?"Chassis number must be 8-20 characters (letters and numbers only). No spaces or special characters.":"";return(0,p.jsxs)("div",{children:[(0,p.jsx)(n.Input,{placeholder:"Enter Chasis Number..",value:a,onChange:e=>r(l(e.target.value)),onPaste:e=>{e.preventDefault(),r(l(e.clipboardData&&e.clipboardData.getData("text")))},id:`editable-input-${t}`}),i&&(0,p.jsx)("div",{style:{color:"#f5222d",marginTop:6,fontSize:12},children:i})]})}case"machine_number":{const e=a||"",i=l(e).trim().length>0&&!u.machine_number(e)?"Machine number must be 5-21 characters and may contain only letters and numbers.":"";return(0,p.jsxs)("div",{children:[(0,p.jsx)(n.Input,{placeholder:"e.g. 1TRR7192327 or 4D34T432101",value:a,onChange:e=>r(l(e.target.value)),onPaste:e=>{e.preventDefault(),r(l(e.clipboardData&&e.clipboardData.getData("text")))},id:`editable-input-${t}`}),(0,p.jsx)("div",{style:{color:"#8c8c8c",marginTop:6,fontSize:12},children:"Examples: 1TRR7192327, 4D34T432101"}),i&&(0,p.jsx)("div",{style:{color:"#f5222d",marginTop:6,fontSize:12},children:i})]})}case"vehicle_plate_no":{const e=m||"",i=a||"",o=c(i).length>0&&!u.vehicle_plate_no(i)?"Plate is required":"";return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,p.jsx)(n.Input,{value:e,disabled:!0,style:{width:120,background:"#f5f5f5"},id:`editable-input-${t}-region`}),(0,p.jsx)(n.Input,{placeholder:"e.g. 1234ABC",value:a,onChange:e=>r(c(e.target.value)),onPaste:e=>{e.preventDefault(),r(c(e.clipboardData&&e.clipboardData.getData("text")))},id:`editable-input-${t}`,style:{flex:1}})]}),(0,p.jsx)("div",{style:{color:"#8c8c8c",marginTop:6,fontSize:12},children:"Example: 1234ABC"}),o&&(0,p.jsx)("div",{style:{color:"#f5222d",marginTop:6,fontSize:12},children:o})]})}case"ktp_no":{const e=a||"",i=e.length>0&&!u.ktp_no(e);return(0,p.jsxs)("div",{children:[(0,p.jsx)(n.Input,{placeholder:"Enter KTP No..",value:a,onChange:e=>r(s(e.target.value).slice(0,16)),onPaste:e=>{e.preventDefault(),r(s(e.clipboardData&&e.clipboardData.getData("text")).slice(0,16))},id:`editable-input-${t}`,maxLength:16,inputMode:"numeric"}),i&&(0,p.jsx)("div",{style:{color:"#f5222d",marginTop:6,fontSize:12},children:"KTP number must be exactly 16 digits"})]})}case"color":return(0,p.jsxs)("div",{children:[(0,p.jsx)(n.Input,{placeholder:"Enter color..",value:a,onChange:e=>r(d(e.target.value)),onPaste:e=>{e.preventDefault(),r(d(e.clipboardData&&e.clipboardData.getData("text")))},id:`editable-input-${t}`}),(0,p.jsx)("div",{style:{color:"#8c8c8c",marginTop:6,fontSize:12},children:"Letters and spaces only"})]});default:return(0,p.jsx)(n.Input,{placeholder:"Enter new value..",value:a,onChange:e=>r(e.target.value),id:`editable-input-${t}`})}})()})};m.defaultProps={editableFieldValue:"",editableFieldUserInput:""};const h=m,x=e=>{let{visible:t,title:a,editableFieldKey:l,editableFieldValue:s,editableFieldUserInput:d,editableFieldUserInputRemarks:c,fieldError:u,regionCode:m,onClose:x,onChangeInput:g,onChangeRemarks:y,onSubmit:_,vehicleValidYears:v}=e;const[f,b]=(0,i.useState)(!0),j=!d||!c||!f;return(0,p.jsx)(n.Modal,{title:a||`Edit ${(0,o.Zr)(l)}`,visible:t,onCancel:x,footer:null,children:(0,p.jsx)(r.FQ,{children:(0,p.jsxs)(n.Row,{gutter:40,children:[(0,p.jsx)(n.Col,{span:24,children:(0,p.jsx)("span",{children:"Update the field value and provide a remarks for the change"})}),(0,p.jsx)(n.Col,{span:24,className:"label",children:(0,p.jsx)("label",{className:"text-bold",children:"Current Value"})}),(0,p.jsx)(n.Col,{span:24,children:(0,p.jsx)("p",{className:"editable-modal-value",children:s})}),(0,p.jsx)(n.Col,{span:24,className:"col-gap",children:(0,p.jsxs)("label",{className:"text-bold",children:["New Value ",(0,p.jsx)("span",{className:"required",children:"*"})]})}),(0,p.jsxs)(n.Col,{span:24,children:[(0,p.jsx)(h,{editableFieldKey:l,editableFieldValue:s,editableFieldUserInput:d,onChangeInput:g,onValidate:b,regionCode:m,vehicleValidYears:v}),u&&(0,p.jsx)("div",{style:{color:"#f5222d",marginTop:8,fontSize:12},children:u})]}),(0,p.jsx)(n.Col,{span:24,className:"col-gap",children:(0,p.jsxs)("label",{className:"text-bold",children:["Remarks ",(0,p.jsx)("span",{className:"required",children:"*"})]})}),(0,p.jsx)(n.Col,{span:24,children:(0,p.jsx)(n.Input.TextArea,{placeholder:"Enter remarks..",value:c,onChange:e=>y(e.target.value),autoSize:{minRows:3,maxRows:5},id:`editable-textarea-${l}`})}),(0,p.jsx)(n.Col,{span:24,className:"col-gap",children:(0,p.jsxs)("div",{className:"footer-actions",children:[(0,p.jsx)(n.Button,{className:"btn-cancel-modal",onClick:x,children:"Cancel"}),(0,p.jsx)(n.Button,{className:"btn-confirm-modal success",disabled:j,onClick:_,children:"Save"})]})})]})})})};x.defaultProps={visible:!1,title:"",editableFieldKey:"",editableFieldValue:"",editableFieldUserInput:"",regionCode:"",fieldError:"",editableFieldUserInputRemarks:""};const g=x},39099:(e,t,a)=>{a.d(t,{A:()=>j});var i=a(1502),n=a(24952),r=a(67816),o=a(80878);const l=a.n(o)().div`
  .edit-policy-title {
    font-size: 13px;
    color: ${e=>e.theme.greyHeading};
    margin-bottom: 2px;
  }
  .policy-number {
    font-size: 13px;
  }
  .btm-note {
    font-size: 12px;
    font-style: italic;
  }
  .required-star {
    color: ${e=>e.theme.errorColor};
  } 

  .upload-button-wrapper {
    position: relative;
  }

  input[type="file"]{
    top: 0; 
    left: 0;
    opacity: 0; 
    position: absolute;
    width: 100%;
  }

  .img-container {
    width: 150px;
    height: 124px;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
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
`;var s=a(25211),d=a(94528),c=a(95916),u=a(996),p=a.n(u),m=a(95024),h=a(83772),x=a(70579);const{uploadUpdatePolicyNumberFile:g,resetReduxState:y,uploadPolicyFile:_,uploadGenericPolicyFile:v}=s.A;class f extends i.Component{constructor(e){var t;super(e),t=this,this.customRequest=(e,t)=>{let{file:a}=e;this.currentChildInsurance=t;const i=new FormData;let n=a.size;if(n/=1048576,n>=11)return void r.message.error("Sorry, We are not allowing to upload file size more than 10MB");const o=a.name&&a.name.split(".").pop();let l=`${this.props.applicationNo}_${Date.now()}_${a.name}`;o&&(l=`${this.props.applicationNo}_${Date.now()}.${o}`),i.append("file",a,l),i.append("path",`insurance-policy-certificate-control-panel/${l}`),i.append("identifier","agent"),this.props.uploadPolicyFile({body:i,fileName:l})},this.extraDetailDocumentUpload=e=>{const{extraDocumentUploadCount:t}=this.state;if(e.name.endsWith(".xlsx")||e.name.endsWith(".xls"))return void r.message.error("Sorry, We are not allowing to upload .xls or .xlsx files");if(t>5)return void r.message.error("cannot upload more than 5 document's");const a=new FormData,i=`${Date.parse(new Date)}_${e.name}`;a.append("file",e,`${i}`),a.append("path",`insurance-policy-certificate-control-panel/${i}`),a.append("identifier","agent"),this.props.uploadGenericPolicyFile({body:a,fileName:i}),e&&(this.fileUploadToServerCount+=1,this.multiSelectFilesMap={...this.multiSelectFilesMap,[i]:{id:this.fileUploadToServerCount,name:i}},this.setState({loaderMap:{[i]:!0},currentExtraFileUploadName:i}))},this.renderExtraDocumentImages=e=>{const t=(0,m.A)(e.url);if(e&&(e.name.endsWith(".zip")||e.name.endsWith(".rar")))return(0,x.jsx)("div",{width:"200",height:"150",children:(0,x.jsx)("img",{src:h.If,alt:"rar_zip_image_view"})});if(e&&e.name.endsWith(".docx")){const t=e.url;return(0,x.jsx)("iframe",{title:"GView",width:"200",height:"150",src:`https://docs.google.com/gview?url=${t}&embedded=true`})}return["png","jpg","jpeg"].includes(t)?(0,x.jsx)(p(),{className:"object-image",small:e.url,large:e.url}):(0,x.jsx)("object",{data:e.url,width:"200",height:"150","aria-label":"Extra Document"},e.id)},this.handlePolicyNumber=(e,t)=>{this.currentChildInsurance=t;const{errorField:a}=this.state,i=e.target.value;(0,c.isEmpty)(this.currentChildInsurance)?this.setState({policyNumber:e.target.value,errorField:"policyNumber"===a?"":a}):this.setState((e=>({[t.reference_id]:{...e[t.reference_id],policyNumber:i,errorField:"policyNumber"===a?"":a}})))},this.handleSubmitDetail=async e=>{e.preventDefault();const{isPolicyNumberEditable:t,isPolicyCertificateEditable:a,childInsurance:i=[],form:n,dataProfile:o}=this.props;if(!await this.validateForm())return;const l={...n.getFieldsValue()},s={};l.providerNotes&&(s.special_notes={provider:{name:o.name,email:o.email,remark:l.providerNotes}});const{policyNumber:d,policyCertificate:u,extraDocuments:p,commissionNoteUrl:m,premiumDocs:h}=this.state;if((0,c.size)(i)){const e={},n={},o={};if(i.forEach(((i,s)=>{const d=this.state[i.reference_id]||{},u={},p={};if(t){const e=l[`policyNumber_${s}`];e&&!o[e]?(o[e]=!0,u.insurance_policy_no=e):(o[e]&&r.message.error("Please make sure that the policy number must be unique!"),p.policyNumberError="policyNumber")}a&&(d.policyCertificate?u.document_url=d.policyCertificate:p.policyCertificateError="policyCertificate"),d.commissionNoteUrl&&(u.commission_note_url=d.commissionNoteUrl),e[i.reference_id]={...u},(0,c.isEmpty)(p)||(n[i.reference_id]={...p})})),(0,c.isEmpty)(n)){const t={...s,child_insurance_details:{...e},extra_document_urls:p,premium_note_urls:h};(null===h||void 0===h?void 0:h.length)>0&&(t.premium_note_urls=h),this.props.onSubmit(t)}return}if(a&&!u)return r.message.error("Please upload policy certificate"),void this.setState({errorField:"policyNumber"});if(t&&!d)return r.message.error("Please enter policy number"),void this.setState({errorField:"policyCertificate"});this.state.errorField&&this.setState({errorField:""});const x={...s,commission_note_url:m,insurance_policy_no:d,document_url:u,extra_document_urls:p};(null===h||void 0===h?void 0:h.length)>0&&(x.premium_note_urls=h),this.props.onSubmit(x)},this.getFooterNode=()=>(0,x.jsxs)(r.Row,{type:"flex",justify:"space-between",align:"center",children:[(0,x.jsx)(r.Col,{}),(0,x.jsxs)(r.Col,{children:[(0,x.jsx)(r.Button,{onClick:this.props.onCancel,children:"Cancel"}),(0,x.jsx)(r.Button,{type:"primary",onClick:this.handleSubmitDetail,children:"Submit"})]})]}),this.renderTheUploadInputContainer=function(e,a){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const{isPolicyNumberEditable:o,isPolicyCertificateEditable:l,form:s,isCoverNoteFlowActive:d,isOnlyPolicyCertificateUpload:c}=t.props,{getFieldDecorator:u}=s,p=i.insurance_for?(0,x.jsxs)(x.Fragment,{children:["\xa0",i.insurance_for]}):"";return(0,x.jsxs)(x.Fragment,{children:[(l||d&&c)&&(0,x.jsxs)(r.Row,{children:[(0,x.jsxs)(r.Col,{className:"edit-policy-title",children:[d&&!c?`Cover Note ${p}`:(0,x.jsxs)("span",{children:["Policy Certificate",p," (Downloadable by agent)"]}),(0,x.jsx)("span",{className:"required-star",children:"*"})]}),(0,x.jsx)(r.Col,{children:e?(0,x.jsx)("object",{type:"application/pdf",data:e,width:"200",height:"150","aria-label":"PDF"}):(0,x.jsx)(r.Form.Item,{children:u(`policyCertificate_${n}`,{rules:[{required:!0,message:"Please upload policy certificate!"}]})((0,x.jsx)(r.Upload,{multiple:!1,showUploadList:!1,accept:".pdf",customRequest:e=>t.customRequest(e,i),children:(0,x.jsxs)(r.Button,{children:[(0,x.jsx)(r.Icon,{type:"upload"}),"Click to upload"]})}))})})]}),o&&(0,x.jsxs)(r.Row,{className:"policy-number",children:[(0,x.jsxs)(r.Col,{className:"edit-policy-title",children:["Policy Number",p," ",(0,x.jsx)("span",{className:"required-star",children:"*"})]}),(0,x.jsx)(r.Col,{children:(0,x.jsx)(r.Form.Item,{children:u(`policyNumber_${n}`,{rules:[{required:!0,message:"Please enter policy number!"}]})((0,x.jsx)(r.Input,{onChange:e=>t.handlePolicyNumber(e,i)}))})})]}),t.renderUploadCommissionNote(i.insurance_for,i,a),t.renderUploadPremiumNote(i.insurance_for,i)]})},this.renderUploadCommissionNote=(e,t,a)=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(r.Col,{className:"edit-policy-title",children:["Commission/Credit Note ",e,"\xa0(Visible to PasarPolis internal team only)"]}),(0,x.jsx)(r.Col,{children:a?(0,x.jsxs)("div",{className:"img-container",children:[this.renderExtraDocumentImages({name:"Commission Note",url:a,id:`Commission Note ${e}`}),(0,x.jsx)("br",{})]}):(0,x.jsx)(r.Form.Item,{children:(0,x.jsx)(r.Upload,{showUploadList:!1,accept:".pdf,.png,.jpg,.jpeg",customRequest:e=>this.handleCommissionNoteUrl(e,t),children:(0,x.jsxs)(r.Button,{children:[(0,x.jsx)(r.Icon,{type:"upload"}),"Click to upload"]})})})})]}),this.renderUploadPremiumNote=(e,t)=>{const{premiumDocUploadCount:a,premiumDocs:i}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.Col,{className:"edit-policy-title",children:"Premium Note (max 5 files: PDF/Images)"}),a<5&&(0,x.jsx)(r.Col,{children:(0,x.jsx)(r.Form.Item,{children:(0,x.jsxs)(r.Button,{className:"upload-button-wrapper",children:[(0,x.jsx)(r.Icon,{type:"upload"}),(0,x.jsx)("input",{type:"file",id:"premiumDocumentsFiles",name:"premiumDocumentsFiles",accept:".pdf,.png,.jpg,.jpeg",multiple:!0,onChange:()=>this.handleOnChangePremiumNoteFiles(t)}),"\xa0\xa0Click to upload"]})})}),i&&i.map(((t,a)=>(0,x.jsx)("div",{className:"img-container",children:this.renderExtraDocumentImages({name:t.name,url:t.url,id:`Premium Note ${e} ${a}`})},a)))]})},this.handleOnChangePremiumNoteFiles=e=>{const t=document.getElementById("premiumDocumentsFiles");if("files"in t){const a=t.files;if((a&&a.length>5||this.premiumNoteFilesCount&&this.premiumNoteFilesCount+a.length>5)&&!this.showMaxFileUploadError)return this.showMaxFileUploadError=!0,setTimeout((()=>{this.showMaxFileUploadError=!1}),50),t.value="",r.message.error("cannot upload more than 5 document's"),!1;this.premiumNoteFilesCount+=a.length,5===this.premiumNoteFilesCount&&this.setState({premiumDocUploadCount:this.premiumNoteFilesCount}),this.premiumDocUploadTracker=a.length;for(const t of a)this.customRequest({file:t},e);t.value=""}},this.handleCommissionNoteUrl=(e,t)=>{this.commissionNoteUrl=!0,this.customRequest(e,t)},this.handleOnChangeMultipleFiles=()=>{const e=document.getElementById("otherDocumentsFiles");if("files"in e){const t=e.files;if((t&&t.length>5||this.filesCount&&this.filesCount+t.length>5)&&!this.showMaxFileUploadError)return this.showMaxFileUploadError=!0,setTimeout((()=>{this.showMaxFileUploadError=!1}),50),e.value="",r.message.error("cannot upload more than 5 document's"),!1;this.filesCount+=t.length,5===this.filesCount&&this.setState({extraDocumentUploadCount:this.filesCount});for(const e of t)this.extraDetailDocumentUpload(e);e.value=""}},this.renderExtraDetailDocumentUpload=()=>{const{extraDocumentUploadCount:e,extraDocuments:t}=this.state;return(0,x.jsxs)(x.Fragment,{children:[e<5&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(r.Col,{className:"edit-policy-title",children:["Other document like clause, premium note, etc.",(0,x.jsx)("br",{}),"Downloadable by agent (max 5 files : PDF,MS-WORD,ZIP,RAR)"]}),(0,x.jsx)(r.Col,{children:(0,x.jsx)(r.Form.Item,{children:(0,x.jsxs)(r.Button,{className:"upload-button-wrapper",children:[(0,x.jsx)(r.Icon,{type:"upload"}),(0,x.jsx)("input",{type:"file",id:"otherDocumentsFiles",name:"otherDocumentsFiles",multiple:!0,onChange:this.handleOnChangeMultipleFiles}),"\xa0\xa0Click to upload"]})})})]}),t&&Object.entries(t).map((e=>this.renderExtraDocumentImages(e[1])))]})},this.renderProviderNotes=()=>{const{getFieldDecorator:e}=this.props.form;return(0,x.jsxs)(r.Row,{className:"policy-number",children:[(0,x.jsx)(r.Col,{className:"edit-policy-title",children:"Note from Provider (Max 1000 characters)"}),(0,x.jsx)(r.Col,{children:(0,x.jsx)(r.Form.Item,{children:e("providerNotes",{rules:[{required:!1,message:"Please enter notes..."}]})((0,x.jsx)(r.Input.TextArea,{}))})})]})},this.state={extraDocumentUploadCount:e.extraDocumentUploadCount||1,policyNumber:"",policyCertificate:"",extraDocuments:{},premiumDocs:[],premiumDocUploadCount:1,loaderMap:{},currentExtraFileUploadName:"",errorField:""},this.multiSelectCallCount=0,this.fileUploadToServerCount=0,this.filesCount=0,this.premiumNoteFilesCount=0,this.premiumDocUploadTracker=0,this.multiSelectFilesMap={}}UNSAFE_componentWillReceiveProps(e){const{uploadPolicyFileData:t,uploadPolicyFileStatus:a,resetReduxState:i}=e,{currentExtraFileUploadName:n}=this.state;if("success"===a){if(this.premiumDocUploadTracker>0)this.premiumDocUploadTracker-=1,this.setState((e=>({premiumDocs:[...e.premiumDocs,{url:t.url,name:t.fileName}]})));else if((0,c.isEmpty)(this.currentChildInsurance)||n)if(this.multiSelectFilesMap[t.fileName]){const e={...this.multiSelectFilesMap[t.fileName],url:t.url};delete this.multiSelectFilesMap[t.fileName],this.setState((a=>{const{loaderMap:i}=a;return delete i[t.fileName],{loaderMap:i,extraDocuments:{...a.extraDocuments,[t.fileName]:e}}}))}else this.setState((()=>{const e={};return this.commissionNoteUrl?(e.commissionNoteUrl=t.url,this.commissionNoteUrl=!1):e.policyCertificate=t.url,{...e,errorField:""}}));else this.setState((e=>{const a={};return this.commissionNoteUrl?(a.commissionNoteUrl=t.url,this.commissionNoteUrl=!1):a.policyCertificate=t.url,{[this.currentChildInsurance.reference_id]:{...e[this.currentChildInsurance.reference_id],...a,errorField:""}}}));i(["uploadPolicyFileStatus"])}}async validateForm(){return new Promise((e=>{this.props.form.validateFields((t=>{e(!t)}))}))}render(){const{isShowModal:e,onCancel:t,uploadPolicyFileLoading:a,childInsurance:i=[],isSpecialNotes:n,isCoverNoteFlowActive:o,isOnlyPolicyCertificateUpload:s}=this.props,{policyCertificate:u,loaderMap:p,commissionNoteUrl:m}=this.state;return(0,x.jsx)(r.Modal,{title:"Activate Policy",visible:e,onCancel:t,okText:"Submit",footer:this.getFooterNode(),children:(0,x.jsx)(d.A,{isSpining:a||!(0,c.isEmpty)(p),children:(0,x.jsx)(l,{children:(0,x.jsxs)(r.Form,{children:[(0,c.size)(i)?i.map(((e,t)=>this.renderTheUploadInputContainer((0,c.get)(this.state,`${e.reference_id}[policyCertificate]`,""),(0,c.get)(this.state,`${e.reference_id}[commissionNoteUrl]`,""),e,t))):this.renderTheUploadInputContainer(u,m,void 0,0),this.renderExtraDetailDocumentUpload(),!n&&this.renderProviderNotes(),(0,x.jsxs)("div",{className:"btm-note",children:["Policy will active when you submit the form.",(0,x.jsx)("br",{}),"The customer will receive a notification email and document as well as a ",o&&!s?"Cover Note":"Policy Certificate",". The Commission/Credit Note is not attached to the customer email notification and cannot be downloaded by the agent."]})]})})})})}}const b=r.Form.create()(f),j=(0,n.connect)((e=>({uploadPolicyFileLoading:e.Loading.UPLOAD_FILE,dataProfile:e.Auth.profile,uploadUpdatePolicyNumberFileError:e.Error.UPLOAD_FILE,uploadPolicyFileStatus:e.Insurance.uploadPolicyFileStatus,uploadPolicyFileData:e.Insurance.uploadPolicyFileData})),{uploadUpdatePolicyNumberFile:g,uploadPolicyFile:_,uploadGenericPolicyFile:v,resetReduxState:y})(b)},35970:(e,t,a)=>{a.d(t,{A:()=>_});var i=a(80878);const n=a.n(i)().div`
  padding: 0px 20px 20px 20px;
  .form-field-title {
    font-size: 12px;
    color: ${e=>e.theme.darkGrey};
    margin-bottom: 2px;
  }

  .form-col-width {
    width: 20%;
  }
  .field-margin {
    margin-right: 20px;
  }
  hr{
    border: 1px solid #E5E5E5;
    margin: 20px 0px;
  }
  .documents-container {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .pdf-container{
    position: relative;
  }
  .view-pdf-btn-container{
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
  }
  .margin-right-20{
    margin-right: 20px;
  }
`;var r=a(84029),o=a(57362),l=a(21624),s=a(33097),d=a.n(s),c=a(1502),u=a(67816),p=a(95916),m=a(996),h=a.n(m),x=a(95024),g=a(83772),y=a(70579);const _=function(e){var t,a;const{num:i,data:s,id:m,policyDetails:_,endorsementId:v}=e,f=d()(s,"endorsement_data",{}),b=(0,c.useCallback)((e=>{window.open(e)}),[]),j=(0,c.useCallback)((e=>"pdf"===(0,x.A)(e)?(0,y.jsx)("div",{className:"documents-container",children:(0,y.jsxs)("div",{className:"pdf-container",children:[(0,y.jsx)("object",{type:"application/pdf",data:e,width:"150",height:"150","aria-label":"PDF"}),(0,y.jsx)("div",{className:"view-pdf-btn-container",children:(0,y.jsx)(u.Button,{onClick:()=>b(e),children:"View Pdf"})})]})}):(0,y.jsx)("div",{className:"documents-container",children:(0,y.jsx)(h(),{className:"policy-img",small:e,large:e,name:"",imageBackgroundColor:"transparent"})})),[b]),C=(0,c.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,y.jsxs)(u.Col,{className:"form-col-width field-margin",children:[(0,y.jsx)("h3",{children:t.title}),(0,y.jsx)("div",{children:t.value})]},`formData_${e}`)}),[]),k=(0,c.useCallback)((()=>Object.keys(f).map(((e,t)=>{var a,i;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("h2",{children:[" ",e," "]}),(0,y.jsxs)(u.Row,{type:"flex",justify:"start",children:[f[e].map(((e,t)=>C(t,e))),"Others"===e&&(null===s||void 0===s||null===(a=s.agencyEndorsementData)||void 0===a?void 0:a.payment_status)&&"NOT_REQUIRED"!==(null===s||void 0===s||null===(i=s.agencyEndorsementData)||void 0===i?void 0:i.payment_status)&&(0,y.jsxs)(y.Fragment,{children:[C("invoice",{title:"Invoice",value:d()(s,"agencyEndorsementData.invoice_url","")?j(null===s||void 0===s?void 0:s.agencyEndorsementData.invoice_url):"-"}),C("PaymentStatus",{title:"Payment Status",value:d()(s,"agencyEndorsementData.payment_status","")?(0,g.DB)(null===s||void 0===s?void 0:s.agencyEndorsementData.payment_status).text:"-"})]})]}),(0,y.jsx)("hr",{})]},`endorseDataDetail_${t}`)}))),[f,C,j,s]),D=(0,c.useCallback)((()=>(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{children:"Payment"}),(0,y.jsx)(u.Row,{type:"flex",justify:"start",children:[C("PaymentBy",{title:"Payment By",value:d()(s,"agencyEndorsementData.paid_by","")||"-"}),C("PaymentTo",{title:"Payment To",value:d()(s,"agencyEndorsementData.paid_to","")||"-"}),C("totalPayment",{title:"Total Amount",value:d()(s,"agencyEndorsementData.total_payment","")||"-"}),C("PaymentDate",{title:"Payment Date",value:d()(s,"agencyEndorsementData.payment_date","")||"-"})]})]},"endorseDataDetailPaymentStatus")),[C,s]);return(0,y.jsx)(r.A,{className:"details-info-container policy-detail-card",id:m,children:(0,y.jsxs)(n,{children:[(0,y.jsxs)("h2",{className:"policy-title",children:["Policy Endorsement ",i]}),(0,y.jsx)("br",{}),(0,y.jsx)(o.A,{reviewData:s,isDetail:!0}),(0,y.jsx)("hr",{}),(0,y.jsx)(l.A,{proofImages:null===_||void 0===_?void 0:_.endorsement_proof_images[v],reviewData:s,isDetail:!0}),(0,y.jsx)("hr",{}),!(0,p.isEmpty)(f)&&k(),(null===s||void 0===s||null===(t=s.agencyEndorsementData)||void 0===t?void 0:t.payment_status)&&"NOT_REQUIRED"!==(null===s||void 0===s||null===(a=s.agencyEndorsementData)||void 0===a?void 0:a.payment_status)&&D()]})})}},92756:(e,t,a)=>{a.d(t,{A:()=>j});var i=a(1502),n=a(67816),r=a(80878);const o=a.n(r)().div`
  .hard-copy-note {
    font-size: 12px;
    font-style: italic;
  }
  .text-align-right{
    text-align: right;
  }
  .margin-10{
    margin: 10px;
  }
`;var l=a(95916),s=a(24952),d=a(62451),c=a(25211),u=a(86178),p=a.n(u),m=a(77980),h=a(28599),x=a(83772),g=a(70579);const{updateHardCopyDate:y}=d.A,{uploadPolicyFile:_,resetReduxState:v}=c.A;class f extends i.Component{constructor(e){super(e),this.handleDisabledDate=(e,t)=>e>p()().endOf("day")||!!t&&(e&&e<p()(t).add(-1,"day").endOf("day")),this.handleSubmitData=async e=>{e.preventDefault();if(!await this.validateForm())return;const{uploadPolicyFileLoading:t}=this.props;if(this.state.isUploading||t)return void(0,m.D)("error","Please wait for file upload to complete");const{form:a,policy:i={}}=this.props,n=a.getFieldsValue(),r=n.type_of_delivery,o=n.hard_copy_order_type,l={hard_copy_sent_date:p()(n.hard_copy_sent_date).format("YYYY-MM-DD"),type_of_delivery:r,hard_copy_recipient:n.hard_copy_recipient,hard_copy_recipient_mobile:n.hard_copy_recipient_mobile,referenceId:i.reference_id};if(n.hard_copy_receive_date&&(l.hard_copy_receive_date=p()(n.hard_copy_receive_date).format("YYYY-MM-DD")),n.hard_copy_remarks){if(n.hard_copy_remarks.length>500)return void(0,m.D)("error","Maximum 500 character allowed for the hard copy information");l.hard_copy_remarks=n.hard_copy_remarks}if("shipped-by-pp"===r&&(l.hard_copy_order_type=o?o.toLowerCase():null,o&&"group"===o.toLowerCase())){if(!n.hard_copy_existing_tracking_number)return void(0,m.D)("error","Please enter tracking number");l.hard_copy_existing_tracking_number=n.hard_copy_existing_tracking_number;const e=this.state.trackingDocumentUrl||n.hard_copy_existing_tracking_label_url;if(!e)return void(0,m.D)("error","Please upload tracking document");l.hard_copy_existing_tracking_label_url=e}this.props.updateHardCopyDate(l)},this.handleDatePickerChange=e=>{if("hard_copy_receive_date"===e){const{form:e}=this.props;e.resetFields(["hard_copy_sent_date"])}},this.handleSelectChange=(e,t)=>{if("Order type"===e){if(this.setState({orderType:t,trackingDocumentUrl:null}),"group"!==t){const{form:e}=this.props;e.resetFields(["hard_copy_existing_tracking_number","hard_copy_existing_tracking_label_url"])}}else this.setState({[e]:t})},this.handleDeliveryTypeChange=e=>{const{form:t}=this.props;"shipped-by-pp"!==e&&(this.setState({orderType:null,trackingDocumentUrl:null}),t.resetFields(["hard_copy_order_type","hard_copy_existing_tracking_number","hard_copy_existing_tracking_label_url"]))},this.handleFileUpload=e=>{const t=new FormData,a=e.name.split(".")[0].trim(),i=Date.parse(new Date);return t.append("file",e),t.append("path",`${x.bz}/${a}_${i}`),t.append("identifier","agent"),this.setState({isUploading:!0}),this.props.uploadPolicyFile({body:t}),!1},this.renderFormItem=e=>{let{name:t,title:a,type:i,disabledDate:r,placeholder:o,data:l,required:s=!0,valuePropName:d}=e;const{form:c}=this.props,{getFieldDecorator:u}=c;let p="",m="";switch(i){case"text":p=(0,g.jsx)(n.Input,{type:i,placeholder:o}),m="Please enter the policy recipients";break;case"hard_copy_receive_date":case"hard_copy_sent_date":p=(0,g.jsx)(n.DatePicker,{disabledDate:e=>this.handleDisabledDate(e,r),onChange:()=>this.handleDatePickerChange(i),format:"DD-MM-YYYY"}),m=`Please select ${a} date`;break;case"select":const e="Delivery Type"===a?e=>{this.handleDeliveryTypeChange(e),this.handleSelectChange(a,e,l)}:e=>this.handleSelectChange(a,e,l);p=(0,g.jsx)(n.Select,{placeholder:o,onChange:e,children:l.map((e=>(0,g.jsx)(n.Select.Option,{value:e.code,children:e.title},e.code)))}),m="Order type"===a?"Please select order type":"Please select the type of delivery";break;case"textarea":p=(0,g.jsx)(n.Input.TextArea,{placeholder:o});break;case"upload":const{uploadPolicyFileLoading:t}=this.props,s=this.state.isUploading||t;p=(0,g.jsx)(n.Upload,{beforeUpload:e=>(this.handleFileUpload(e),!1),accept:".jpg,.jpeg,.png,.pdf,.JPG,.JPEG,.PNG,.PDF",multiple:!1,showUploadList:!1,children:(0,g.jsxs)(n.Button,{disabled:s,children:[(0,g.jsx)(n.Icon,{type:"upload"})," ",s?"Uploading...":"Click to Upload"]})}),m="Please upload a document (JPG, PNG or PDF)";break;default:return null}const h={rules:[{required:s,message:m}]};return d&&(h.valuePropName=d),"upload"===i&&(h.valuePropName="value"),(0,g.jsx)(n.Form.Item,{label:a,children:u(t,h)(p)})},this.formItemLayout={labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}}},this.isCourierEnabled=!0,this.state={orderType:null,trackingDocumentUrl:null,isUploading:!1},this.prevShowModal=e.showModal}componentDidUpdate(e){if(e.showModal&&!this.props.showModal&&this.setState({orderType:null,trackingDocumentUrl:null,isUploading:!1}),e.uploadPolicyFileStatus!==this.props.uploadPolicyFileStatus)if("success"===this.props.uploadPolicyFileStatus){var t;const e=null===(t=this.props.uploadPolicyFileData)||void 0===t?void 0:t.url;e&&(this.setState({trackingDocumentUrl:e,isUploading:!1}),this.props.form.setFieldsValue({hard_copy_existing_tracking_label_url:e}),(0,m.D)("success","File uploaded successfully")),v(["uploadPolicyFileStatus","uploadPolicyFileData"])}else if(this.props.uploadPolicyFileStatus&&"success"!==this.props.uploadPolicyFileStatus){this.setState({isUploading:!1});const e=this.props.uploadPolicyFileStatus||"File upload failed. Please try again.";(0,m.D)("error",e),v(["uploadPolicyFileStatus","uploadPolicyFileData"])}this.prevShowModal=this.props.showModal}async validateForm(){return new Promise((e=>{this.props.form.validateFields((t=>{e(!t)}))}))}render(){const{showModal:e,onClose:t,policy:a={},form:i,updateHardCopyLoader:r}=this.props,s=!(0,l.get)(a,"provider_package.pp_generate_hard_copy",!1),d=i.getFieldValue("hard_copy_receive_date")||p()(a.provider_updated_at),c=i.getFieldValue("hard_copy_sent_date"),u=i.getFieldValue("type_of_delivery"),m=i.getFieldValue("hard_copy_order_type"),x=void 0!==m&&null!==m?m.toLowerCase():this.state.orderType?this.state.orderType.toLowerCase():null;return(0,g.jsx)(n.Modal,{visible:e,onCancel:t,title:"Send Hardcopy Policy",onOk:this.handleSubmitData,okText:"Submit",confirmLoading:r,children:(0,g.jsxs)(o,{children:[(0,g.jsxs)(n.Form,{...this.formItemLayout,children:[s&&this.renderFormItem({title:"Receive Date from Provider",type:"hard_copy_receive_date",name:"hard_copy_receive_date",disabledDate:d}),this.renderFormItem({title:"Date of Policy Delivery",type:"hard_copy_sent_date",name:"hard_copy_sent_date",required:!s,disabledDate:d}),(0,l.get)(a,"hard_copy_details.recipient_name","")&&this.isCourierEnabled?(0,g.jsxs)(n.Row,{type:"flex",justify:"center",className:"margin-10",children:[(0,g.jsx)(n.Col,{className:"text-align-right",span:12,children:"Policy Recipient Name:"}),(0,g.jsxs)(n.Col,{span:12,children:["\xa0\xa0",(0,g.jsx)("b",{children:(0,l.get)(a,"hard_copy_details.recipient_name","")})]})]}):this.renderFormItem({title:"Policy Recipient Name",type:"text",name:"hard_copy_recipient",required:!!c,placeholder:"Policy Recipient Name"}),(0,l.get)(a,"hard_copy_details.recipient_mobile","")&&this.isCourierEnabled?(0,g.jsxs)(n.Row,{type:"flex",justify:"center",className:"margin-10",children:[(0,g.jsx)(n.Col,{className:"text-align-right",span:12,children:"Policy Recipient Phone Number:"}),(0,g.jsx)(n.Col,{span:12,children:(0,g.jsx)("b",{children:(0,l.get)(a,"hard_copy_details.recipient_mobile","")})})]}):this.renderFormItem({title:"Policy Recipient Phone Number",type:"text",name:"hard_copy_recipient_mobile",required:!!c,placeholder:"Policy Recipient Phone Number"}),this.renderFormItem({title:"Delivery Type",type:"select",name:"type_of_delivery",required:!!c,data:[{title:"Pickup by Mitra",code:"pickup-by-agent"},{title:"Pickup by Marketing",code:"pickup-by-marketing"},...(0,h.A)()?[]:[{title:"Shipped by PP",code:"shipped-by-pp"}],{title:"Stored at PP",code:"stored-at-pp"}],placeholder:"Delivery Type"}),"shipped-by-pp"===u&&this.renderFormItem({title:"Order type",type:"select",name:"hard_copy_order_type",required:!!c,data:[{title:"Single",code:"single"},{title:"Group",code:"group"}],placeholder:"Order type"}),"shipped-by-pp"===u&&"group"===x&&this.renderFormItem({title:"Tracking Number",type:"text",name:"hard_copy_existing_tracking_number",required:!0,placeholder:"Tracking Number"}),"shipped-by-pp"===u&&"group"===x&&this.renderFormItem({title:"Tracking Document",type:"upload",name:"hard_copy_existing_tracking_label_url",required:!0,valuePropName:"value"}),"shipped-by-pp"===u&&"group"===x&&this.state.trackingDocumentUrl&&(0,g.jsx)(n.Row,{type:"flex",justify:"center",className:"margin-10",children:(0,g.jsxs)(n.Col,{span:24,style:{color:"green",textAlign:"center"},children:[(0,g.jsx)(n.Icon,{type:"check-circle"})," Document uploaded successfully"]})}),this.renderFormItem({title:"Remarks",name:"hard_copy_remarks",type:"textarea",required:!1,max:500,placeholder:"Remarks"})]}),(0,g.jsx)("div",{className:"hard-copy-note",children:'The Status of Sending Print Policy will change to "sent" once you submit this form. Please ensure the status of the Sending Print Policy has been "sent" before submitting the form.'})]})})}}const b=n.Form.create()(f),j=(0,s.connect)((e=>({updateHardCopyLoader:e.Loading.UPDATE_HARD_COPY_DATE,uploadPolicyFileStatus:e.Policy.uploadPolicyFileStatus,uploadPolicyFileData:e.Policy.uploadPolicyFileData,uploadPolicyFileLoading:e.Loading.UPLOAD_FILE})),{updateHardCopyDate:y,uploadPolicyFile:_,policyResetReduxState:v})(b)},55510:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(33097),n=a.n(i),r=a(73859),o=a(22200),l=a(70579);const s=function(e){const{policyDetail:t}=e,a=[{key:"h_ques_1",name:(0,l.jsx)("strong",{children:"Height"}),value:`${n()(t,"request.insured_details.height","")} cm`},{key:"h_ques_2",name:(0,l.jsx)("strong",{children:"Weight"}),value:`${n()(t,"request.insured_details.weight","")} kg`},{key:"h_ques_3",name:(0,l.jsx)("strong",{children:"Question 1"}),value:r.EG},{key:"h_ques_4",name:(0,l.jsx)("strong",{children:"Question 2"}),value:r.Li},{key:"h_ques_5",name:(0,l.jsx)("strong",{children:"Question 3"}),value:r.E1},{key:"h_ques_6",name:(0,l.jsx)("strong",{children:"Answer"}),value:n()(t,"request.insured_details.pre_disease_exists_data.value","")}];return(0,l.jsx)(o.A,{title:"Health Question",tableColumns:a})}},92339:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(33097),n=a.n(i),r=a(17823),o=a.n(r),l=a(6446),s=a(22200),d=a(28599),c=a(70579);const u=function(e){const{policyDetail:t}=e,a=n()(t,"request.customer_data.customer_address",{}),i=n()(t,"request.residence_address",{}),r=[{key:"holder_1",name:(0,c.jsx)("strong",{children:"Name"}),value:n()(t,"request.customer_data.name","")},{key:"holder_2",name:(0,c.jsx)("strong",{children:(0,d.A)()?"ID":"KTP/KK Number"}),value:n()(t,"request.ktp_no","")},{key:"holder_3",name:(0,c.jsx)("strong",{children:"Email"}),value:n()(t,"request.customer_data.email","")},{key:"holder_4",name:(0,c.jsx)("strong",{children:"Phone Number"}),value:n()(t,"request.customer_data.mobile_no","")},{key:"holder_5",name:(0,c.jsx)("strong",{children:"Place, Date of Birth"}),value:`${n()(t,"request.birth_place","")},${o()(n()(t,"request.dob",""),"YYYY-MM-DD").format("DD MMMM YYYY")}`},{key:"holder_6",name:(0,c.jsx)("strong",{children:"Gender"}),value:n()(t,"request.gender_data.value","")},{key:"holder_7",name:(0,c.jsx)("strong",{children:"Occupation Status"}),value:n()(t,"request.working_status_data.value","")},{key:"holder_8",name:(0,c.jsx)("strong",{children:"Policy Holder Address on KTP/KK"}),value:(0,l.CB)(a)},{key:"holder_9",name:(0,c.jsx)("strong",{children:"Policy Holder Residence Address"}),value:(0,l.CB)(i)}];return(0,c.jsx)(s.A,{title:"Policy Holder",tableColumns:r})}},31293:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(33097),n=a.n(i),r=a(17823),o=a.n(r),l=a(6446),s=a(22200),d=a(28599),c=a(70579);const u=function(e){const{policyDetail:t}=e,a=n()(t,"request.insured_details.customer_data.customer_address",{}),i=n()(t,"request.insured_details.residence_address",{}),r=[{key:"insured_1",name:(0,c.jsx)("strong",{children:"Name"}),value:n()(t,"request.insured_details.customer_data.name","")},{key:"insured_2",name:(0,c.jsx)("strong",{children:(0,d.A)()?"ID":"KTP/KK Number"}),value:n()(t,"request.insured_details.id_no","")},{key:"insured_3",name:(0,c.jsx)("strong",{children:"Email"}),value:n()(t,"request.insured_details.customer_data.email","")},{key:"insured_4",name:(0,c.jsx)("strong",{children:"Phone Number"}),value:n()(t,"request.insured_details.customer_data.mobile_no","")},{key:"insured_5",name:(0,c.jsx)("strong",{children:"Place, Date of Birth"}),value:`${n()(t,"request.insured_details.birth_place","")},${o()(n()(t,"request.insured_details.dob",""),"YYYY-MM-DD").format("DD MMMM YYYY")}`},{key:"insured_6",name:(0,c.jsx)("strong",{children:"Gender"}),value:n()(t,"request.insured_details.gender_data.value","")},{key:"insured_7",name:(0,c.jsx)("strong",{children:"Occupation Type"}),value:n()(t,"request.occupation_type_data.value","")},{key:"insured_8",name:(0,c.jsx)("strong",{children:"Relation With Policy Holder"}),value:n()(t,"request.relation_data.value","")},{key:"insured_9",name:(0,c.jsx)("strong",{children:"Coverage Period"}),value:`${n()(t,"payment_detail.proposed_coverage_start","-")} to ${n()(t,"payment_detail.proposed_coverage_end","-")}`},{id:"insured_10",name:(0,c.jsx)("strong",{children:"Pay Later"}),value:n()(t,"request.use_pay_later","-")?"Yes":"No"},{key:"insured_11",name:(0,c.jsx)("strong",{children:"Insured Address on KTP/KK"}),value:(0,l.CB)(a)},{key:"insured_12",name:(0,c.jsx)("strong",{children:"Insured Residence Address"}),value:(0,l.CB)(i)}];return(0,c.jsx)(s.A,{title:"Policy Details",tableColumns:r})}},3796:(e,t,a)=>{a.d(t,{A:()=>y});var i=a(1502),n=a(67816),r=a(62451),o=a(80878);const l=a.n(o)().div`
  .img-meta-title {
    font-size: 14px;
    font-weight: 700;
    color: ${e=>e.theme.black};
  }

  .img-meta-row {
    padding: 6px;
    border-bottom: 1px solid ${e=>e.theme.borderGrey};
  }
`;var s=a(24952),d=a(94528),c=a(97418),u=a(95916),p=a(89858),m=a(70579);const{getImageMetaData:h,resetAgentRedux:x}=r.A;class g extends i.Component{constructor(){super(...arguments),this.getImgMetaContainer=()=>{const{imageMetaData:e={}}=this.props,t=[],{metadata:a={}}=e;if((0,u.isEmpty)(a))return(0,m.jsx)("div",{className:"img-meta-title",children:"Meta Data does not exist!"});for(const i in a){const e=a[i];e instanceof Object||t.push(this.getTitleValueContainer(i,e))}return t},this.getTitleValueContainer=(e,t)=>(0,m.jsxs)(n.Row,{type:"flex",className:"img-meta-row",children:[(0,m.jsx)(n.Col,{span:14,className:"img-meta-title",children:(0,c.c2)(e)}),(0,m.jsx)(n.Col,{children:Array.isArray(t)?t.join(", "):t})]})}componentDidMount(){const{imageId:e}=this.props,t=document.getElementsByClassName(e)[0]||document.getElementById(e);this.props.getImageMetaData({url:t.src||t.href})}render(){const{isShowModal:e,onCancel:t,imageMetaDataLoader:a}=this.props;return(0,m.jsx)(n.Modal,{title:"Image Meta Data",visible:e,onCancel:t,onOk:t,confirmLoading:a,children:(0,m.jsx)(d.A,{isSpining:a,children:(0,m.jsx)(p.A,{children:(0,m.jsx)(l,{children:this.getImgMetaContainer()})})})})}}const y=(0,s.connect)((e=>({imageMetaData:e.Agent.imageMetaData,imageMetaDataStatus:e.Agent.imageMetaDataStatus,imageMetaDataLoader:e.Loading.GET_IMAGE_META_DATA})),{getImageMetaData:h,resetAgentRedux:x})(g)},9560:(e,t,a)=>{a.d(t,{A:()=>h});var i=a(1502),n=a(67816),r=a(97418),o=a(84029),l=a(996),s=a.n(l),d=a(95024),c=a(33097),u=a.n(c),p=a(8624),m=a(70579);const h=function(e){const{isRenewalPolicy:t,isShowEditBtn:a,onEdit:l,imagesVerify:c}=e,h=(0,i.useCallback)((t=>{e.onImageInfo(t)}),[e]),x=(0,i.useCallback)(((t,a,i)=>{e.onReupload&&e.onReupload({data:t,key:a,file:i})}),[e]),g=(0,i.useMemo)((()=>[{title:"Document Name",dataIndex:"name",width:150},{title:"OCR status",width:100,dataIndex:"ocr_status",key:"ocr_status",render:(e,t)=>!!c&&c[null===t||void 0===t?void 0:t.id]?(0,m.jsx)(n.Tag,{color:"green",children:"Verified"}):null},{title:"Photo",dataIndex:"value"},{title:"Reupload Document",dataIndex:"reupload_document",key:"reupload_document"},...a?[{title:"Edit photo",dataIndex:"",key:"y",render:t=>(0,m.jsx)(p.A,{requiredPermission:"ops.edit_timestamp",children:(0,m.jsx)(n.Button,{title:"Edit Timestamp",onClick:()=>l({id:null===t||void 0===t?void 0:t.id,link:null===e||void 0===e?void 0:e.imagesData[null===t||void 0===t?void 0:t.id]}),children:" Edit "})})}]:[],{title:"Image Meta data",dataIndex:"",key:"x",render:e=>u()(e,"value.props.small","")?(0,m.jsx)("div",{onClick:()=>h(e),children:"Info"}):null}]),[a,c,l,null===e||void 0===e?void 0:e.imagesData,h]),y=(0,i.useMemo)((()=>{let a=[],i=0;for(const o in e.imagesData){const l=e.imagesData[o];let c="image";e.imagesType&&(c=e.imagesType[o]);const u=(0,d.A)(l);let h=".jpg,.png,.jpeg";"pdf"===c&&(h=`${h},.pdf`),(l||t&&"appointment_letter_url"===o)&&(a=[...a,{key:i,name:(0,m.jsx)("strong",{children:(0,r.Zr)(o)}),id:o,value:"link"===c?(0,m.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:"View Policy"}):"pdf"===u?(0,m.jsx)("a",{href:l,target:"_blank",id:o,rel:"noopener noreferrer",children:(0,m.jsx)("object",{type:"application/pdf",data:l,width:"150",height:"150","aria-label":"PDF"})}):(0,m.jsx)(s(),{className:`object-image ${o}`,small:l,large:l,id:o,name:o}),reupload_document:e.isShowReuploadBtn&&(0,m.jsx)(p.A,{requiredPermission:"ops.view_agent_policy_reupload_documents_btn",children:(0,m.jsx)(n.Upload,{name:"file",accept:h,multiple:!1,showUploadList:!1,customRequest:e=>{let{file:t}=e;return x(l,o,t)},children:(0,m.jsxs)(n.Button,{children:[l?"Reupload":"Upload"," Document"]})})})}],i++)}return a}),[e.imagesData,x,e.isShowReuploadBtn,t,e.imagesType]);return(0,m.jsx)(o.A,{className:"details-info-container policy-detail-card",children:(0,m.jsxs)(n.Row,{children:[(0,m.jsx)("h3",{className:"policy-title",children:e.title}),(0,m.jsx)(n.Col,{span:24,children:(0,m.jsx)(n.Table,{pagination:{pageSize:100},showHeader:!1,columns:g,dataSource:y})})]})})}},41634:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(33097),n=a.n(i),r=a(1502),o=a(22200),l=a(70579);const s=function(e){const t=n()(e,"agentPolicy.request"),a=(0,r.useCallback)((e=>{switch(e){case"land":return"Darat";case"sea":return"Laut";case"air":return"Udara";default:return""}}),[]),i=(0,r.useCallback)((function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return n()(e,`${t}_data`,"")?n()(e,`${t}_data.${a}`,"-"):n()(e,t,"-")}),[]),s=(0,r.useCallback)((()=>{const e=n()(t,"transportation_type");let r=[];const o=n()(t,"pickup_address",{}),l=n()(t,"delivery_address",{});switch(e){case"land":r=[{key:"insuredData_1",name:"Vehicle Type",value:i(t,"vehicle_type")},{key:"insuredData_2",name:"Vehicle Number",value:`${n()(t,"region_code","-")} ${n()(t,"vehicle_plate_no","-")}`}];break;case"sea":r=[{key:"insuredData_3",name:"Ship type",value:i(t,"ship_type")},{key:"insuredData_4",name:"Ship material",value:i(t,"ship_material")},{key:"insuredData_5",name:"Ship Class",value:i(t,"ship_class")},{key:"insuredData_6",name:"Manufacturing Year",value:n()(t,"year","-")},{key:"insuredData_7",name:"Country",value:i(t,"country","country_name")}];break;case"air":r=[{key:"insuredData_7",name:"Airplane Registration no",value:n()(t,"plane_registration_no","-")},{key:"insuredData_8",name:"Airplane Name",value:n()(t,"airplane_name","-")},{key:"insuredData_9",name:"Flight No",value:n()(t,"flight_no","-")}]}return[{key:"insuredData_10",name:"Mode of Transport",value:a(n()(t,"transportation_type",""))},...r,{key:"insuredData_13",name:"Insured Business",value:n()(t,"insured_business","-")},{key:"insuredData_14",name:"Travel No",value:n()(t,"travel_number","-")},{key:"insuredData_15",name:"Recipient Name",value:n()(t,"recipient_name","-")},{key:"insuredData_16",name:"Pickup Address",value:`${n()(o,"address")}, ${n()(o,"city_name")} ${n()(o,"postal_code")}, ${n()(o,"province_name")}`},{key:"insuredData_17",name:"Delivery Address",value:`${n()(l,"address")}, ${n()(l,"city_name")} ${n()(l,"postal_code")}, ${n()(l,"province_name")}`}]}),[t]);return(0,l.jsx)(o.A,{title:"Object Insured Details",tableColumns:s()})}},22200:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(1502),n=a(84029),r=a(67816),o=a(70579);class l extends i.Component{render(){const e=[{dataIndex:"name",width:150},{dataIndex:"value",render:(e,t)=>{let{name:a}=t;return e&&"Details"===a?e.split("/n").map(((e,t)=>(0,o.jsxs)(i.Fragment,{children:[" ",e,(0,o.jsx)("br",{})]},`details_${t}`))):e}},{dataIndex:"value1",render:(e,t)=>{let{name:a}=t;return e&&"Details"===a?e.split("/n").map(((e,t)=>(0,o.jsxs)(i.Fragment,{children:[" ",e,(0,o.jsx)("br",{})]},`details_${t}`))):e}}],{tableColumns:t,title:a}=this.props;return(0,o.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"policy-title",children:a}),(0,o.jsx)(r.Table,{pagination:!1,rowKey:e=>e.id,showHeader:!1,columns:e,dataSource:t})]})})}}const s=l},9456:(e,t,a)=>{a.d(t,{O:()=>n});var i=a(80878);const n=a.n(i)().div`
  height: 90vh;
  .invoice-iframe{
    width: 70vw;
    height: 90vh;
    border: none;
  }
  hr{
    border: 1px solid #ccc;
    margin: 30px;
  }
`},53105:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(1502),n=a(67816),r=a(70579);class o extends i.Component{constructor(){super(...arguments),this.state={documentPending:""},this.handleDocumentPending=e=>{this.setState({documentPending:e.target.value})},this.handleCustomSubmit=()=>{this.props.onSubmit(this.state.documentPending)}}render(){const{isShowModal:e,onCancel:t}=this.props;return(0,r.jsx)(n.Modal,{title:"Document Pending On Mitra",visible:e,onOk:this.handleCustomSubmit,onCancel:t,okText:"Submit",children:(0,r.jsx)(n.Row,{children:(0,r.jsx)(n.Col,{children:(0,r.jsx)(n.Form.Item,{children:(0,r.jsx)(n.Input.TextArea,{placeholder:"Input details of documents/photos pending on mitra",onChange:e=>this.handleDocumentPending(e)})})})})})}}const l=o},94535:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(80878),n=a.n(i),r=a(84029);const o=n()(r.A)`
  .damage-remarks {
    font-size: 0.85em;
    color: ${e=>e.theme.darkGrey};
    font-weight: 700;
    margin-top: 1rem;
  }

  .img-container {
    width: 150px;
    height: 150px;
    position: relative;
    border: 1px solid ${e=>e.theme.borderGrey};
    border-radius: 4px;

    > div:first-child {
      height: 124px;
      display: flex;
      align-items: center;
      padding: 12px;
      justify-content: center;
    }
  }

  .damage-photos {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 1rem;
  }


  .policy-img {
    max-width: 100%;
    max-height: 100%;
  }
`;var l=a(1502),s=a(996),d=a.n(s),c=a(70579);const u=function(e){let{damagePhotos:t={},remark:a}=e;const i=(0,l.useMemo)((()=>{const e=[];for(const a in t){const i=t[a];e.push((0,c.jsx)("div",{className:"img-container",children:(0,c.jsx)(d(),{className:"policy-img",small:i.original,large:i.original,id:i,imageBackgroundColor:"transparent"})}))}return e.length?e:null}),[t]),n=(0,l.useCallback)((()=>(0,c.jsx)("div",{className:"damage-photos",children:i||"Not Provided"})),[i]);return(0,c.jsxs)(o,{className:"details-info-container policy-detail-card",children:[(0,c.jsx)("h3",{className:"policy-title",children:"Physical Damages"}),(0,c.jsx)("div",{className:"damage-remarks",children:"Photos"}),n(),(0,c.jsx)("div",{className:"damage-remarks",children:"Remarks"}),(0,c.jsx)("p",{children:a})]})}},19609:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(67816),n=a(80878);const r=a.n(n)().div`
  .policy-info-notes {
    font-size: 1em;
    font-style: italic;
    margin-top: 12px;
    font-weight: 600;
  }

  .icon-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-orange {
    fill: ${e=>e.theme.orange};
    margin-right: 10px;
    svg {
      width: 1.2em;
      height: 1.2em;
    }
  }

  .notes-label {
    margin-top: 12px;
    font-size: 0.9em;
  }

  .warning-info {
    font-size: 1.2em;
  }
`;var o=a(1502),l=a(96760),s=a(70579);const d=function(e){let{show:t,onClose:a,onOk:n,isLoader:d}=e;const c=(0,o.useRef)(),u=(0,o.useCallback)((e=>{c.current=e.currentTarget.value}),[]),p=(0,o.useCallback)((()=>{n(c.current)}),[n]);return(0,s.jsx)(i.Modal,{title:"Aktivasi Polis",visible:t,onCancel:a,okText:"Yes",onOk:p,cancelText:"No",okButtonProps:{loading:d},children:(0,s.jsxs)(r,{children:[(0,s.jsxs)(i.Row,{type:"flex",align:"middle",children:[(0,s.jsx)(i.Col,{className:"icon-center",children:(0,s.jsx)(i.Icon,{fill:l.l.orange,type:"info-circle",className:"info-orange",theme:"twoTone",width:"1.2em",height:"1.2em",twoToneColor:l.l.orange})}),(0,s.jsx)(i.Col,{className:"warning-info",children:"Are you sure to issue the policy?"})]}),(0,s.jsx)("div",{className:"notes-label",children:"Note from Provider (Max 1000 characters)"}),(0,s.jsx)(i.Input.TextArea,{onChange:u}),(0,s.jsxs)("div",{className:"policy-info-notes",children:["Policy will active immediately when you click button Yes.",(0,s.jsx)("br",{}),"Customers will receive notification emails and policy documents."]})]})})}},91850:(e,t,a)=>{a.d(t,{A:()=>_});var i=a(67816),n=a(4124),r=a(1502),o=a(17823),l=a.n(o),s=a(83772),d=a(73859),c=a(80878);const u=a.n(c)().div`
  .documents-container {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  
  .cross-mark {
    position: absolute;
    top: 0;
    right: 0;
    color: ${e=>e.theme.white};
    font-weight: 800;
    width: 20px;
    height: 20px;
    font-size: 10px;
    border-radius: 50%;
    background-color: ${e=>e.theme.errorColor};
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .reason-text {
    font-size: 12px;
  }

  .cancel-notification {
    font-size: 10px;
    margin-top: 16px;
  }

  .cancel-select-width {
    width: 100%;
  }

  .reason-textarea {
    margin-top: 16px;
  }

  .other-reason-error {
    font-size: 10px;
    color: ${e=>e.theme.errorColor};
  }
`;var p=a(24952),m=a(25211),h=a(94528),x=a(70579);const{uploadPolicyFile:g,resetReduxState:y}=m.A;const _=(0,p.connect)((e=>({uploadPolicyFileLoading:e.Loading.UPLOAD_FILE,uploadPolicyFileStatus:e.Insurance.uploadPolicyFileStatus,uploadPolicyFileData:e.Insurance.uploadPolicyFileData})),{uploadPolicyFile:g,policyResetReduxState:y})((function(e){const{show:t,loader:a,onClose:o,onSubmit:c,uploadPolicyFile:p,isCancelled:m,completedPolicy:g,documentNotMandatory:_}=e,[v,f]=(0,r.useState)(""),[b,j]=(0,r.useState)(!1),[C,k]=(0,r.useState)(""),[D,w]=(0,r.useState)(""),[N,P]=(0,r.useState)(null),S=d.E$[d.E$.length-1],A=(0,r.useRef)(),I=(0,r.useRef)({isCallStart:!1}),F=(0,r.useCallback)((e=>{e!==S&&(A.current=""),k(e)}),[S]),E=(0,r.useCallback)((e=>{A.current=e.target.value}),[]),R=(0,r.useCallback)((()=>{if(m){if(!I.current.isCallStart){I.current.isCallStart=!0;const e={cancellation_document:v};N&&(e.cancellation_date=l()(N).format("YYYY-MM-DD")),c(e,m)}}else if(C!==S||A.current){if(w(!1),!I.current.isCallStart){I.current.isCallStart=!0;const e={reason:C===S?A.current:C,cancellation_document:v};N&&(e.cancellation_date=l()(N).format("YYYY-MM-DD")),c(e,!1,g)}}else w(!0)}),[c,C,S,v,N,m,g]),T=(0,r.useCallback)((()=>{f("")}),[]),M=(0,r.useCallback)((e=>{P(e)}),[]);(0,r.useEffect)((()=>{"success"===e.uploadPolicyFileStatus&&(f(e.uploadPolicyFileData.url),y(["uploadPolicyFileStatus","uploadPolicyFileData"])),j(!1)}),[e.uploadPolicyFileStatus,e.uploadPolicyFileData,e.uploadPolicyFileLoading]),(0,r.useEffect)((()=>{t||(P(null),f(""),k(""),w(""),I.current.isCallStart=!1)}),[t]);const U=(0,r.useMemo)((()=>m?!v:_?!C:!C||!v||b||!N),[m,v,_,C,b,N]);return(0,x.jsx)(i.Modal,{visible:t,onCancel:o,title:m?"Cancellation Document":"Policy Cancellation",onOk:R,okButtonProps:{disabled:U,loading:a},children:(0,x.jsxs)(u,{children:[!m&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(i.Row,{type:"flex",children:[(0,x.jsx)(i.Col,{xl:4,md:4,sm:4,className:"reason-text",children:"Alasan"}),(0,x.jsx)(i.Col,{xl:24,md:24,sm:24,children:(0,x.jsx)(i.Select,{className:"cancel-select-width",onChange:F,children:d.E$.map(((e,t)=>(0,x.jsx)(i.Select.Option,{value:e,children:e},`cancel_${t}`)))})})]}),C===S&&(0,x.jsx)(n.default,{className:"reason-textarea",onChange:E}),D&&(0,x.jsx)("div",{className:"other-reason-error",children:"Please Provide Other Reason"}),(0,x.jsx)("br",{})]}),(0,x.jsx)("br",{}),(0,x.jsxs)(i.Row,{type:"flex",style:{marginBottom:16},children:[(0,x.jsx)(i.Col,{xl:4,md:4,sm:4,className:"reason-text",children:"Request Date"}),(0,x.jsx)(i.Col,{xl:24,md:24,sm:24,children:(0,x.jsx)(i.DatePicker,{format:"YYYY-MM-DD",value:N,onChange:M,style:{width:"100%"},placeholder:"Select request date"})})]}),(0,x.jsx)("br",{}),(0,x.jsxs)(i.Row,{type:"flex",children:[(0,x.jsx)(i.Col,{xl:24,md:24,sm:24,className:"reason-text",children:m?(0,x.jsxs)(x.Fragment,{children:["Upload cancellation document from provider (PDF file)",(0,x.jsx)("span",{style:{color:"red"},children:"*"})]}):"Policy Cancellation Documents"}),(0,x.jsx)(i.Col,{xl:24,md:24,sm:24,className:"reason-text",children:(0,x.jsx)("br",{})}),(0,x.jsx)(i.Col,{xl:24,md:24,sm:24,children:v?(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"documents-container",children:[(0,x.jsx)("object",{type:"application/pdf",data:v,width:150,height:150,"aria-label":"Policy Doc Pdf"}),(0,x.jsx)("div",{className:"cross-mark",onClick:T,children:(0,x.jsx)(i.Icon,{type:"cross"})})]})}):(0,x.jsx)(i.Upload,{name:"upload",showUploadList:!1,customRequest:e=>(e=>{let{file:t}=e;const a=new FormData;if(t.name){const e=t.name.split(".")[0];a.append("file",t),a.append("path",`${s.bz}/${e}_${Date.parse(new Date)}`),a.append("identifier","agent"),p({body:a}),j(!0)}})(e),listType:"picture",accept:".pdf",beforeUpload:e=>(e=>{const t=e.size/1024/1024<=10;return t||i.message.error("file must smaller than 10MB!"),t})(e),children:b?(0,x.jsx)(h.A,{isSpining:!0}):(0,x.jsxs)(i.Button,{children:[(0,x.jsx)(i.Icon,{type:"upload"})," Click to upload"]})})})]}),(0,x.jsx)("div",{className:"cancel-notification",children:m?"Make sure the document you want to upload is correct. The document you choose is directly uploaded and appears immediately in the Mitra app after submitting the form.":"The policy will be canceled as soon as your form is submitted. Mitra will receive notification emails regarding your policy cancellation!"})]})})}))},21905:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(1502),n=a(84029),r=a(67816),o=a(33097),l=a.n(o),s=a(70579);class d extends i.Component{render(){const{policyDetails:e={}}=this.props,t=[{title:"Document Name",dataIndex:"insurance_for"},{title:"Policy Number",dataIndex:"insurance_policy_no",render:e=>e||"_"},{title:"Document",dataIndex:"document_url",render:e=>e?(0,s.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"View File"}):"_"},{title:"Commission/Credit Note",dataIndex:"commission_note_url",render:e=>e?(0,s.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"View File"}):"_"}];return(0,s.jsx)(n.A,{className:"details-info-container policy-detail-card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"policy-title",children:"Policy Documents"}),(0,s.jsx)(r.Table,{pagination:{pageSize:100},rowKey:e=>e.id,columns:t,bordered:!0,dataSource:l()(e,"child_insurance",[])})]})})}}const c=d},77786:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(67816),n=a(1502),r=a(84029),o=a(70579);const l=[{title:"File Name",dataIndex:"name",key:"name",render:(e,t)=>{const a=t.url?t.url.split("/").pop():"";return e||a}},{title:"File Type",dataIndex:"file_type",key:"file_type",render:e=>e||"-"},{title:"File",dataIndex:"url",key:"url",render:e=>e?(0,o.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"View File"}):"_"}],s=e=>{let{policyDetails:t={}}=e;const a=(0,n.useMemo)((()=>{const e=Object.values((null===t||void 0===t?void 0:t.extra_document_urls)||{});let a=[...Object.values((null===t||void 0===t?void 0:t.extra_document_urls_cover_note_flow)||{}),...e];return t.commission_note_url&&(a=[...a,{id:"commission_note_url",name:"Commission/Credit Note",url:t.commission_note_url}]),a}),[t]);return a.length>0&&(0,o.jsx)(r.A,{className:"details-info-container policy-detail-card",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"policy-title",children:"Other Documents"}),(0,o.jsx)(i.Table,{pagination:{pageSize:100},rowKey:e=>e.name,columns:l,bordered:!0,dataSource:a})]})})}},59680:(e,t,a)=>{a.d(t,{A:()=>p});var i=a(69732),n=a(95916),r=a(33097),o=a.n(r),l=a(1502),s=a(77980),d=a(84487),c=a(22200),u=a(70579);const p=function(e){const{policyNo:t}=e,[{getReconPolicyDetailsData:a={}},r]=(0,d.bZ)(),[{GET_RECON_POLICY_DETAILS_LOADER:p}]=(0,i.useLoaderContextValue)(),[{GET_RECON_POLICY_DETAILS_ERROR:m,getReconPolicyDetailsStatus:h},x]=(0,i.useErrorContextValue)();(0,l.useEffect)((()=>{h&&m&&((0,s.D)("error",h),x((0,i.resetError)({getReconPolicyDetailsStatus:""})))}),[h,m,x]),(0,l.useEffect)((()=>{r({policyNo:t})}),[r,t]);const g=e=>{const t=a[e],i=null===t||void 0===t?void 0:t.filter((e=>"OJK"===e.recon_type)),n=null===t||void 0===t?void 0:t.filter((e=>"EXTRA_COMMISSION"===e.recon_type)),r=(null===i||void 0===i?void 0:i.length)>(null===n||void 0===n?void 0:n.length)?null===i||void 0===i?void 0:i.length:null===n||void 0===n?void 0:n.length;return r?[...Array(r)].map(((t,a)=>(0,u.jsx)(c.A,{title:"NEW"===e?"Recon Details":"Recon Endorsement Details",tableColumns:y([i[a],n[a]])},a))):[]},y=(0,l.useCallback)((e=>{const t=e[0]||{},a=e[1]||{};return[{key:"holder_1",name:"",value:(0,u.jsx)("strong",{children:"OJK Commision"}),value1:(0,u.jsx)("strong",{children:"EXTRA Commision"})},{key:"holder_1",name:(0,u.jsx)("strong",{children:"Recon Name"}),value:o()(t,"recon_name",""),value1:o()(a,"recon_name","")},{key:"holder_2",name:(0,u.jsx)("strong",{children:"Payment Date"}),value:o()(t,"payment_date",""),value1:o()(a,"payment_date","")},{key:"holder_3",name:(0,u.jsx)("strong",{children:"Commission %"}),value:o()(t,"commission_percent",""),value1:o()(a,"commission_percent","")},{key:"holder_4",name:(0,u.jsx)("strong",{children:"Commission Amount"}),value:o()(t,"commission_amount",""),value1:o()(a,"commission_amount","")},{key:"holder_5",name:(0,u.jsx)("strong",{children:"VAT 10%"}),value:o()(t,"vat_amount",""),value1:o()(a,"vat_amount","")},{key:"holder_6",name:(0,u.jsx)("strong",{children:"WHT PPH23 2%"}),value:o()(t,"wht_amount",""),value1:o()(a,"wht_amount","")},{key:"holder_7",name:(0,u.jsx)("strong",{children:"Total Payment"}),value:o()(t,"payment",""),value1:o()(a,"payment","")},{key:"holder_8",name:(0,u.jsx)("strong",{children:"Commission Revenue"}),value:o()(t,"commission_revenue",""),value1:o()(a,"commission_revenue","")},{key:"holder_9",name:(0,u.jsx)("strong",{children:"Remark"}),value:o()(t,"remarks",""),value1:o()(a,"remarks","")}]}),[]);return void 0!==p&&(0,n.isEmpty)(a)?(0,u.jsx)("div",{children:"Recon data is not available"}):void 0!==p?(0,u.jsxs)(u.Fragment,{children:[g("NEW"),a.ENDORSEMENT&&g("ENDORSEMENT")]}):null}},55391:(e,t,a)=>{a.d(t,{A:()=>E});var i=a(69732),n=a(84487),r=a(67816),o=a(33097),l=a.n(o),s=a(1502),d=a(996),c=a(8634),u=a(95024),p=a(17135),m=a(80878),h=a.n(m);const x=h().div`
  .instalments-table {
    th {
      font-weight: 700;
    }
  }
`;var g=a(98);const y="Jumlah Cicilan",_="Cicilan Ke",v="Tanggal Jatuh Tempo",f="Total Cicilan",b="Periode",j=[1,2,3,4,5,6,7,8,9,10,11,12];j.map((e=>({code:e,name:e})));var C=a(17823),k=a.n(C),D=a(97418);const w=[{title:_,dataIndex:"serial_number",key:"serial_number",width:"128px"},{title:v,dataIndex:"due_date",key:"due_date",width:"240px",render:(e,t,a)=>k()(t.due_date).format("LL")},{title:f,dataIndex:"payable_amount",key:"payabl_amount",render:(e,t,a)=>(0,D.gs)(t.payable_amount)}];var N=a(70579);const P=e=>{const{instalmentsData:t,isPolicy:a=!1,policyColumns:i}=e,{instalment_period:n,total_instalments:o,instalment_details:l}=t;return(0,N.jsxs)(x,{children:[(0,N.jsxs)(r.Row,{type:"flex",justify:"start",gutter:24,children:[(0,N.jsx)(r.Col,{children:(0,N.jsx)(g.A,{name:"period",label:b,colon:!1,children:(0,N.jsx)(r.Input,{disabled:!0,value:`${n} Bulan`})})}),(0,N.jsx)(r.Col,{children:(0,N.jsx)(g.A,{name:"instalment_amount",label:y,colon:!1,children:(0,N.jsx)(r.Input,{disabled:!0,value:`${o} Kali`})})})]}),(0,N.jsx)(r.Table,{size:"small",dataSource:l,pagination:{position:"none",pageSize:12},scroll:{x:!0,y:!0},columns:a?i:w,className:"instalments-table",rowKey:e=>e.serial_number})]})},S=(e,t)=>[{title:_,dataIndex:"serial_number",key:"serial_number",width:"96px"},{title:v,dataIndex:"due_date",key:"due_date",width:"180px",render:(e,t,a)=>k()(t.due_date).format("LL")},{title:f,dataIndex:"payable_amount",key:"payabl_amount",width:"160px",render:(e,t,a)=>(0,D.gs)(t.payable_amount)},{title:"Invoice",dataIndex:"invoice_url",key:"invoice_url",width:"128px",render:(a,i,n)=>{const o=i.invoice_url;return o?(0,N.jsx)(r.Button,{onClick:()=>e({url:o,title:"Invoice"}),children:"View Invoice"}):i.isGenerate?(0,N.jsx)(r.Button,{onClick:()=>t(i),children:"Generate"}):"-"}},{title:"Payment By",dataIndex:"payment_by",key:"payment_by",width:"128px",render:(e,t,a)=>t.payment_by||"-"},{title:"Transfer To",dataIndex:"paid_to",key:"paid_to",width:"128px",render:(e,t,a)=>t.paid_to||"-"},{title:"Transfer Amount",dataIndex:"paid_amount",key:"paid_amount",width:"160px",render:(e,t,a)=>t.paid_amount?(0,D.gs)(t.paid_amount):"-"},{title:"Payment Date",dataIndex:"payment_date",key:"payment_date",width:"140px",render:(e,t,a)=>t.payment_date?k()(t.payment_date).format("LL"):"-"},{title:"Payment Method",dataIndex:"payment_method",key:"payment_method",width:"140px",render:(e,t,a)=>t.payment_method||"-"},{title:"Payment Proof",dataIndex:"payment_proof_url",key:"payment_proof_url",width:"128px",render:(t,a,i)=>{const n=a.payment_proof_url;return n?(0,N.jsx)(r.Button,{onClick:()=>e({url:n,title:"Payment Proof"}),children:"View"}):"-"}},{title:"Payment Status",dataIndex:"payment_status",key:"payment_status",width:"160px",render:(e,t,a)=>t.payment_status||"-"}],A=h().div`
  height: 90vh;
  .invoice-iframe{
    width: 70vw;
    height: 90vh;
    border: none;
  }
  hr{
    border: 1px solid #ccc;
    margin: 30px;
  }
`;var I=a(94528),F=a(77980);const E=r.Form.create()((e=>{const{form:t,agentPolicyDetails:a}=e,o=l()(a,"id"),{getFieldDecorator:m,getFieldValue:h,resetFields:x}=t,[{getInstalmentDetailsData:g},y]=(0,n.BM)(),[,_]=(0,n.zZ)(),[{GET_INSTALMENT_DETAILS_LOADER:v,GENERATE_INSTALMENT_INVOICE_LOADER:f}]=(0,i.useLoaderContextValue)(),[{getInstalmentDetailsStatus:b,generateInstalmentInvoiceStatus:j}]=(0,i.useErrorContextValue)(),{resetError:C}=(0,i.useResetError)();(0,s.useEffect)((()=>{o&&y({applicationId:o})}),[y,o]);const k=(0,s.useCallback)((e=>(0,p.A)({...e,getFieldDecorator:m,getFieldValue:h})),[m,h]),D=(0,s.useRef)({url:"",title:""}),w=(0,s.useMemo)((()=>{if(!g||!Object.keys(g).length)return;let e=g;const t=l()(e,"instalment_details");return e={...e,instalment_details:t.map(((e,a)=>{var i;return 0===a||"PAID"===(null===(i=t[a-1])||void 0===i?void 0:i.transaction_status)?{...e,isGenerate:!0}:e}))},e}),[g]),E=(0,s.useRef)({}),[R,T]=(0,s.useState)(!1),[M,U]=(0,s.useState)(!1),L=(0,s.useCallback)((()=>{E.current={},x(),U(!1)}),[x]);return(0,s.useEffect)((()=>{"success"===j?((0,F.D)("success","invoice generated successfully"),C(["generateInstalmentInvoiceStatus"]),y({applicationId:o}),L()):j&&((0,F.D)("error",j),C(["generateInstalmentInvoiceStatus"]))}),[j,o,y,L,C]),(0,s.useEffect)((()=>{"success"===b?C(["getInstalmentDetailsStatus"]):b&&((0,F.D)("error",b),C(["getInstalmentDetailsStatus"]))}),[b,C]),w?(0,N.jsxs)(c.A,{className:"details-info-container policy-detail-card",children:[(0,N.jsx)("h3",{className:"policy-title",children:"Payment Information"}),(0,N.jsxs)(I.A,{isSpinning:v,children:[w&&(0,N.jsx)(P,{instalmentsData:w,isPolicy:!0,policyColumns:S((e=>{D.current=e,T(!0)}),(e=>{E.current=e,U(!0)}))}),R&&(()=>{const{url:e,title:t}=D.current,a=()=>{D.current={url:"",title:""},T(!1)};return"pdf"===(0,u.A)(e)?(0,N.jsx)(r.Modal,{visible:R,onCancel:a,style:{top:0},width:"100vw",footer:null,children:(0,N.jsx)(A,{children:(0,N.jsx)(r.Row,{type:"flex",justify:"center",children:(0,N.jsx)("iframe",{src:e,title:t,className:"invoice-iframe"})})})}):(0,N.jsx)(d.Lightbox,{medium:e,large:e,alt:t,onClose:a})})(),M&&(0,N.jsx)(r.Modal,{visible:M,onCancel:L,onOk:()=>{const e=E.current,t={serial_number:e.serial_number,due_date:e.due_date,payable_amount:e.payable_amount,payment_by:h("payment_by")};_({applicationId:o,body:t})},cancelButtonProps:{disabled:f},okButtonProps:{disabled:!h("payment_by")||f},children:(0,N.jsxs)(I.A,{isSpinning:f,children:[(0,N.jsx)(r.Form,{colon:!1,children:k({name:"payment_by",radioDataKey:"payment_by",title:"Who will purchase the invoice?",subTitle:"payment_by",type:"hybrid_radio",required:!0,isKeyDisabled:()=>!0,isEnableType:!0,onlyRadio:!0,runtimeRequestParams:{},handleRuntimeParams:e=>{},data:[{value:"MITRA",title:"Agent"},{value:"CUSTOMER",title:"Customer"}]})}),(0,N.jsx)("i",{children:"The policy will be issued once you click the submit button."})]})})]})]}):null}))},85195:(e,t,a)=>{a.d(t,{A:()=>v});var i=a(1502),n=a(24952),r=a(67816),o=a(97418),l=a(84029),s=a(41516),d=a(84487),c=a(31734),u=a(62451),p=a(88962),m=a(14839),h=a(8624),x=a(6446),g=a(70579);const{getAgentInsuranceData:y,getVehicleValidYears:_}=u.A,v=(0,n.connect)((e=>({agentPolicy:e.Agent.agentPolicy,vehicleValidYears:e.Agent.vehicleValidYears||[]})))(r.Form.create()((e=>{const{additionalDetail:t,policyDetailState:a,userEmail:n,dispatch:u,productId:v,vehicleValidYears:f,policyDataEdit:b}=e,{policy_id:j}=(0,p.useParams)(),[,C]=(0,d.HX)(),[k,D]=(0,i.useState)(!1),[w,N]=(0,i.useState)(""),[P,S]=(0,i.useState)(""),[A,I]=(0,i.useState)(""),[F,E]=(0,i.useState)(""),[R,T]=(0,i.useState)("");(0,i.useEffect)((()=>{t&&t.model&&u(_(t.variant_code))}),[t,u]);const M=()=>{D(!1),N(""),S(""),I(""),E(""),T("")},U=(0,i.useCallback)(((e,a)=>{switch(e){case"vehicle_sum_insured":return`Rp ${(new Intl.NumberFormat).format(a)}`;case"region_code":return t.region_type;case"vehicle_plate_no":return`${t.region_code} ${a}`;default:return a}}),[t]),L=[{dataIndex:"name",width:150},{dataIndex:"value",render:(e,a)=>(0,g.jsxs)(s.IW,{children:[e,a.isEditable&&(0,g.jsx)(h.A,{requiredPermission:"ops.edit_agency_object_detail",children:(0,g.jsx)(r.Button,{icon:"edit",onClick:()=>{return e=a.fieldKey,D(!0),N(e),S(t[e]),I(t[e]),void T("");var e},style:{marginLeft:8},children:"Edit"})})]})}],O=(0,i.useMemo)((()=>{const e=[];let i=0;for(const n in t)if("object"!==typeof t[n]){const r=(0,x.HO)(n,a,v,b);e.push({key:i,name:"odometer_value"===n?(0,g.jsx)("strong",{children:"Mileage"}):(0,g.jsx)("strong",{children:(0,o.Zr)(n)}),value:void 0!==t[n]?U(n,t[n]):"-",isEditable:!!r,fieldKey:n,policyDataEditField:r}),i++}return e}),[U,t,a,v,b]);return(0,g.jsxs)(l.A,{className:"details-info-container policy-detail-card",children:[(0,g.jsxs)(r.Row,{children:[(0,g.jsx)("h3",{className:"policy-title",children:"Object Insured Details"}),(0,g.jsx)(r.Col,{span:24,children:(0,g.jsx)(r.Table,{pagination:{pageSize:100},showHeader:!1,columns:L,dataSource:O})})]}),(0,g.jsx)(c.A,{visible:k,title:`Edit ${(0,o.Zr)(w)}`,editableFieldKey:w,editableFieldValue:P,editableFieldUserInput:A,editableFieldUserInputRemarks:F,fieldError:R,regionCode:t&&t.region_code,onClose:M,onChangeInput:e=>{R&&T(""),I(e)},onChangeRemarks:E,onSubmit:async()=>{try{T(""),(0,x.GS)(a),"ktp_no"===w&&(0,m.VU)(A),await C({policyId:j,body:{processed_by:n,data:{[w]:{value:A,remarks:F}}}}),u(y({policyId:j})),M()}catch(e){const t=e&&(e.response&&e.response.data&&(e.response.data.message||e.response.data.error)||e.message)||"Failed to save changes. Please check your input.";T("string"===typeof t?t:JSON.stringify(t)),r.message.error("string"===typeof t?t:"Failed to save changes. Please check your input.")}},vehicleValidYears:f})]})})))},41516:(e,t,a)=>{a.d(t,{$$:()=>r,CY:()=>o,FQ:()=>s,IW:()=>l});var i=a(80878),n=a.n(i);const r=n().div`
  .payment-proof{
    max-width: 100px;
    max-height: 100px;
    margin: 5px;
  }
  .notification-table {
    .ant-pagination {
      display:block;
    }
  }
  .object-wrapper {
    cursor: pointer;
    display: inline-block;
  }
  .courier-pdf-container {
    position: relative;
  }
  .open-pdf-btn{
    position: absolute;
    bottom: 10px;
    left: 30px;
  }
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  color: #788195;

  .reject-reason {
    color: ${e=>e.theme.errorColor};
  }

  .application-detail-header {
    margin: 20px 0;
  }

  .application-status-tags {
    display: flex !important;
  }

  .error-row {
    width: 100%;
    
    .error-section {
      margin-bottom: 20px;
    }
  }

  img.object-image {
    max-height: 150px !important;
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
  .btn-claim,
  .btn-claim:hover {
    margin-right: 10px;
    border-radius: 8px;
    background-color: #aad25a;
    border: none;
  }
  .btn-claim-documents {
    margin-right: 10px;
    border-radius: 8px;
    background-color: ${e=>e.theme.orange};
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
  .btn-cancel-policy-red {
    margin-right: 10px;
    border-radius: 8px;
    background-color: ${e=>e.theme.errorColor};
    border: none;
    &:hover {
      background-color: ${e=>e.theme.errorColor};
    }
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
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(85, 85, 85, 0.05);

    .right-button-action {
      position: absolute;
      right: 55px;
    }
  }
  .details-data-row span {
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
  .details-data-row p {
    font-family: Muli;
    word-break: break-all;
    font-size: 15px;
    font-weight: 800;
    line-height: 1.27;
    text-align: left;
    color: #000000;
    margin-bottom: 0px;
  }
  .details-data-row a {
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
  .details-data-row {
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

  .rejection-details {
    margin-top: 20px;
  }

  .clickable-object {
    pointer-events: none;
    cursor: pointer;
  }


  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`,o=n().div`
  .reject-reason {
    width: 70%;
    border: 1px solid #e8e8e8;
    border-radius: 4px
  }

  .row-column {
    flex-direction: column;
  }

  .col-row {
    display: flex;
    justify-content: 'space-around';
    padding-top: 10px;
  }
`,l=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,s=n().div`
  .footer-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    width: 100%;
  }
  
  .editable-modal-value {
    font-weight: 800;
    color: rgb(98, 165, 252);
  }

  .required {
    color: red;
    font-weight: bold;
  }

  .text-bold {
    font-weight: 800;
  }

  .col-gap {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .label {
    margin-top: 24px;
    margin-bottom: 8px;
    }

  .btn-cancel-modal {
    border-radius: 8px;
    background-color: transparent;
    border: 3px solid rgb(93, 93, 93);
    color: rgb(93, 93, 93);
    cursor: pointer;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
  }
  .btn-cancel-modal:hover {
    background-color: rgb(93, 93, 93);
    color: #fff;
  }

  .btn-confirm-modal {
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
    color: #fff;
  }

  .btn-confirm-modal.success {
    background-color: #28a745;
  }
  .btn-confirm-modal.success:hover {
    background-color: #218838;
  }
  .btn-confirm-modal.success:disabled,
  .btn-confirm-modal.success[disabled] {
    background-color: #a9d7b6;
    color: #f5f5f5;
    cursor: not-allowed;
  }

  .btn-confirm-modal.danger {
    background-color: #dc3545;
  }
  .btn-confirm-modal.danger:hover {
    background-color: #c82333;
  }
  .btn-confirm-modal.danger:disabled,
  .btn-confirm-modal.danger[disabled] {
    background-color: #e8a6ad;
    color: #f5f5f5;
    cursor: not-allowed;
  }
`},73539:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(67816),n=a(95916),r=a(84029),o=a(97418),l=a(70579);const s=function(e){let{agentPolicy:t}=e;const a=(0,n.get)(t,"additional_detail.extra_data.customer_data")||{},s=(0,n.get)(t,"additional_detail.extra_data.customer_data")||{},d=(0,n.get)(s,"main_traveller",{}),{kids:c=0,adult:u=0}=(0,n.get)(t,"additional_detail.extra_data.additional_member_count",{}),p=(0,n.get)(t,"additional_detail.policy_type")||{},m=Object.entries({name:"Name",email:"Email",gender:"Gender",address:"Address",mobile_no:"Mobile No",insured_id:"Insured id",date_of_birth:"Date of birth",insured_id_type:"Insured id type"}).map((e=>{let[t,i]=e;return{label:i,value:(0,n.get)(a,t,"-")}})),h=[{key:"name",dataIndex:"name",title:"Name"},{key:"gender",dataIndex:"gender",title:"Jenis Kelamin/ Gender"},{key:"date_of_birth",dataIndex:"date_of_birth",title:"Tanggal Lahir/ Date of birth"},{key:"insured_id",dataIndex:"insured_id",title:"Nomor id/ Id no"},{key:"doucment_type",title:"Document Type",dataIndex:"insured_id_type"},{key:"relation",dataIndex:"relation",title:"Relation/ Date of birth",hideForGroup:!0}].filter((e=>!("group"===p&&e.hideForGroup))),x=[...(0,n.get)(s,"adults",[]).map((e=>({...e,relation:"Istri/ Partner"}))),...(0,n.get)(s,"kids",[]).map((e=>({...e,relation:"Anak/ Child"})))],g=[{title:(0,l.jsx)("strong",{children:"Field"}),dataIndex:"label",key:"label",width:150,render:e=>(0,l.jsx)("strong",{children:e})},{title:"Value",dataIndex:"value",key:"value"}],y=[];for(const i in d)y.push({id:i,name:(0,l.jsx)("strong",{children:(0,o.Zr)(i)}),value:d[i]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{className:"details-info-container policy-detail-card",children:(0,l.jsxs)(i.Row,{children:[(0,l.jsx)("h3",{className:"policy-title",children:"Policy Details"}),"group"===t.request.policy_type?(0,l.jsx)(i.Col,{span:24,children:(0,l.jsx)(i.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:"insured_id",columns:g,dataSource:m})}):(0,l.jsx)(i.Col,{span:24,children:(0,l.jsx)(i.Table,{pagination:{pageSize:100},showHeader:!1,rowKey:e=>e.id,columns:[{dataIndex:"name",width:150},{dataIndex:"value"}],dataSource:y})})]})}),"group"===t.request.policy_type?null:c+u?(0,l.jsxs)(r.A,{className:"details-info-container policy-detail-card",children:[(0,l.jsx)("h3",{className:"policy-title",children:"Customer Data"}),(0,l.jsx)(i.Table,{columns:h,dataSource:x})]}):null]})}},8399:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(1502),n=a.n(i),r=a(67816),o=a(97418),l=a(84029),s=a(95916),d=a(70579);class c extends n().Component{render(){const{additionalDetail:e,agentPolicy:t}=this.props;let a=[];const i={coverage_area:"international"===(0,s.get)(e,"travel_type")?"International - Worldwide/ ASEAN":"Domestic",source:(0,s.get)(e,"source"),destination:(0,s.get)(e,"destination",[]).join(", "),travel_start_date:(0,s.get)(t,"request.start_date",""),travel_end_date:(0,s.get)(t,"request.end_date",""),type_of_insured:(0,s.get)(e,"policy_type"),no_of_insured_individual:1+(e=>{const{kids:t=0,adult:a=0}=e;return t+a})((0,s.get)(e,"extra_data.additional_member_count")),package_name:(0,s.get)(t,"provider_package.package.name",""),policy_type:"Single Trip"};for(const n in i)a=[...a,{key:n,name:(0,d.jsx)("strong",{children:(0,o.Zr)(n)}),value:void 0!==i[n]?i[n]:"-"}];return(0,d.jsx)(l.A,{className:"details-info-container policy-detail-card",children:(0,d.jsxs)(r.Row,{children:[(0,d.jsx)("h3",{className:"policy-title",children:"Object Insured Details Travel"}),(0,d.jsx)(r.Col,{span:24,children:(0,d.jsx)(r.Table,{pagination:{pageSize:100},showHeader:!1,columns:[{dataIndex:"name",width:150},{dataIndex:"value"}],dataSource:a})})]})})}}const u=c},97983:(e,t,a)=>{a.d(t,{A:()=>m});var i=a(1502),n=a(67816),r=a(84029),o=a(996),l=a.n(o),s=a(80878);const d=a.n(s)().div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-reupload-btn {
    text-align: center;
    border: 1px solid ${e=>e.theme.borderGrey};
    background-color: ${e=>e.theme.placeholder};
    border-bottom: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 6px 7px;
    margin-top: 10px;
  }
`;var c=a(8624),u=a(70579);class p extends i.Component{constructor(){super(...arguments),this.getRelatedPoliciesColumns=()=>[{title:"Policy Type",dataIndex:"policy_type",key:"policy_type"},{title:"Application Number",dataIndex:"app_no",key:"app_no"},{title:"Policy Number",dataIndex:"policy_number",key:"policy_number"},{title:"Policy State",dataIndex:"policy_state",key:"policy_state"},{title:"Payment State",dataIndex:"payment_status",key:"payment_status"},{title:"Policy Start Date",dataIndex:"start_date",key:"start_date"},{title:"Policy End Date",dataIndex:"end_date",key:"end_date"}]}render(){const{additionalAccessories:e,isShowReuploadBtn:t,relatedInsurances:a=[],typeKey:i}=this.props,o=[{title:"Photo",dataIndex:"img",width:300,render:e=>(0,u.jsxs)(d,{children:[(0,u.jsx)(l(),{className:"object-image",small:e,large:e}),t&&(0,u.jsx)(c.A,{requiredPermission:"ops.view_agent_policy_reupload_documents_btn",children:t&&(0,u.jsx)(n.Upload,{name:"file",accept:".jpg,.png,.jpeg",multiple:!1,showUploadList:!1,customRequest:t=>{let{file:a}=t;return this.props.onReupload({val:e,key:"accessories",oldUrl:e,file:a})},className:"img-reupload-btn",children:"Reupload Document"})})]})},{title:"Accessories Name",dataIndex:"name"},{title:"Accessories Type",dataIndex:i||"type"},{title:"Pricing",dataIndex:"sum_insured"}];return(0,u.jsxs)(r.A,{className:"details-info-container policy-detail-card",children:[(0,u.jsxs)(n.Row,{children:[(0,u.jsx)("h3",{className:"policy-title",children:"Additional Accessories"}),(0,u.jsx)(n.Col,{span:24,children:(0,u.jsx)(n.Table,{pagination:{pageSize:100},columns:o,dataSource:e,bordered:!0})})]}),!(null===a||void 0===a||!a.length)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsxs)(n.Row,{children:[(0,u.jsx)("h3",{className:"policy-title",children:"Related Policies"}),(0,u.jsx)(n.Col,{span:24,children:(0,u.jsx)(n.Table,{pagination:{pageSize:100},columns:this.getRelatedPoliciesColumns(),dataSource:a,bordered:!0})})]})]})]})}}const m=p},91026:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(1502),n=a(80878);const r=a.n(n)().div`
  width: 100%;
  height: 100%;
`;var o=a(70579);const l=function(e){let{children:t}=e;const a=(0,i.useRef)();return(0,i.useEffect)((()=>{function e(e){return e.preventDefault(),!1}const t=a.current;return t&&t.addEventListener("copy",e),()=>{t&&t.removeEventListener("copy",e)}}),[]),(0,o.jsx)(r,{ref:a,children:t})}},24776:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(67816),n=(a(1502),a(80878));const r=a.n(n)().div`
  .file-img {
    width: 300px;
  }
`;var o=a(95024),l=a(70579);const s=function(e){const{show:t,onClose:a,onUpload:n,file:s,title:d,confirmationText:c,okText:u,cancelText:p,loader:m}=e;return(0,l.jsx)(i.Modal,{visible:t,onCancel:a,onOk:n,cancelText:p||"Cancel",okText:u||"Upload",title:d,okButtonProps:{loading:m},children:(0,l.jsxs)(r,{children:[c&&(0,l.jsx)("div",{children:c}),"pdf"===(0,o.A)(s)?(0,l.jsx)("object",{type:"application/pdf",data:s,height:"300",width:"300","aria-label":"PDF"}):(0,l.jsx)("img",{className:"file-img",src:s,alt:"file"})]})})}},7303:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(1502),n=a.n(i),r=a(67816),o=a(80878);const l=a.n(o)().div`
  .reminder {
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 4px 0 #c9c9c980;
    box-shadow: 0 2px 4px 0 #c9c9c980;
    background-color: #f8f8f8;
    border-top: 8px solid #23a637;
    padding: 18px;
    margin-bottom: 36px;
  }
  .reminder-warning {
    -webkit-box-shadow: 0 2px 4px 0 #c9c9c980;
    box-shadow: 0 2px 4px 0 #c9c9c980;
    background-color: #f8f8f8;
    border-top: 8px solid #d0021b;
    padding: 18px;
    margin-bottom: 5px;
  }
  .reminder-icon {
    text-align: center;
    padding: 15px 19px;
    background-color: #23a637;
    border-radius: 50px;
    color: #fff;
    display: initial;
  }
  .reminder-icon-warning {
    text-align: center;
    padding: 15px 19px;
    background-color: #d0021b;
    border-radius: 50px;
    color: #fff;
    display: initial;
  }
  .reminder-heading {
    font-family: Muli;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #303030;
    margin-bottom: 7px;
  }
  .reminder-subheading {
    opacity: 0.8;
    font-family: Muli;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    color: #303030;
    margin-bottom: 0px;
  }
`;var s=a(70579);class d extends n().PureComponent{render(){var{message:e}=this.props;let t=e.indexOf(":");return e=e.substring(t+1,e.length),(0,s.jsx)(l,{children:(0,s.jsx)("div",{className:"reminder-warning",children:(0,s.jsxs)(r.Row,{type:"flex",justify:"center",align:"middle",children:[(0,s.jsx)(r.Col,{xs:24,sm:24,md:3,className:"container-icon",children:(0,s.jsx)("div",{className:"reminder-icon-warning",children:(0,s.jsx)("i",{className:"fas fa-bell"})})}),(0,s.jsxs)(r.Col,{xs:24,sm:24,md:21,className:"notification-content",children:[(0,s.jsx)("p",{className:"reminder-heading",children:"Maximum Limit Reached"}),(0,s.jsx)("p",{className:"reminder-subheading",children:e})]})]})})})}}},8624:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(1502),n=a.n(i),r=a(24952);class o extends n().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}o.defaultProps={permissions:[]};const l=(0,r.connect)((e=>({permissions:e.Auth.permissions})),{})(o)},28599:(e,t,a)=>{a.d(t,{A:()=>i});const i=()=>window.location.pathname.includes("agent/vn")},81139:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoCAYAAADpE0oSAAAAAXNSR0IArs4c6QAAAuBJREFUWAmtl4F50zAUhJMugEcQE2AmqEbwBniDeoQyAdkAb5AwQbxB0gmaTlAzQfjPSOA4ki0Z7vsukp7uvZNkJZ+z2WTger3u4Dt8hV8yUtdLMZLpFEcCZk3VbUoSxS26Y0TbEz84qj/Gy3a7ncbG8/N9jFu4Bnosdr76zCzJ/RpXl6PTuMPDXSQc+BAOJ0XPIVXqM76GkhNjH3nOl6k2dccv08TE8Y+QaWLuZsOzqlc8Y90Lk2NSkfA0TqJfwJwLJm2ZbCohCQfo8Y1O4eKND47a0GI65o1yskFiBVVAeIVWRWhr+Aw1PyzIxUvGO1hrnILgrXZFHymwg8YVOtC2sIcGWtdeaDX3xkU60+YDQ618D/8FdbYzbjpC4QAbqPEJ5iLf3K8WpwKuMfWLzDdPNNXls7D1ToE23ZxkA98DRaYhq9MhKPM5LJuTnXq8F7SlMy7nXN1cJW0UiA4LRc7M21AB4jXsI/k6wWGhd7lMNJEkH9YuCyXSmlF/iLl4STxmfgqZqtDSc61HxZH/+TWz9HX7/aKeNRlBc2OOqI0Ix2HjjL3WurGMBZk/wj2MQZsbFvhARwVzXlUvMgygJNbBKjDnQzJtNNCLwJxQGg/rOjvar7B349zmaUhgx13sXCZxHVM5dSFm4GGiXRpWGxSxWxhKlnnwsRAvYBtKCsR2Ml6D4O51GhRL2X231liLtc7I0j/Cwo0N/UXocqW+Qf5U4Qgs8VZz7q1yTivZcKu7obf8oYv1GS4WRbP4B0A73sEUFO7VpomIhzqcsYnMj8MvwwBxu/hQ+EXymSruDVzfjuZSLtfvzZKsr0IPl7BHYLzJuFUcaj4Ff2ugtikZTnOiLWVMK8MjTEWrvBuQWadmo7NKVpuRc0Zb3Jj6AROp5sOxo/8OUyBT432CLYISSvi/0FIovNPQChBXsFvp3pMnw+Aug39hposgWautoIpYqPEnOIa+mz3s4Fkt33uNg/gFMHnYuOVdn5cAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=3158.8d26d288.chunk.js.map