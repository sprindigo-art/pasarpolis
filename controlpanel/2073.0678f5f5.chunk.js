"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[860,2073],{48558:(t,e,a)=>{a.d(e,{A:()=>l});var s=a(1502),i=a(67816),n=a(80878);const o=a.n(n)().div`
  width:100%;
  padding:3%;
.steps-content {
  margin-top: 16px;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  padding-top: 40px;
}
.step-heading {
  text-align:center;
  padding:10px;
}
.steps-action {
  margin-top: 24px;
}
`;var r=a(70579);const{Step:d}=i.Steps;class c extends s.Component{constructor(t){super(t),this.state={steps:[{title:"Basic Information"},{title:"Policy data"},{title:"Package list"}]}}render(){const{steps:t}=this.state,{current:e}=this.props;return(0,r.jsxs)(o,{children:[(0,r.jsx)("h3",{className:"step-heading",children:(0,r.jsx)("b",{children:"Product Creation Wizard"})}),(0,r.jsx)(i.Steps,{current:e,children:t.map((t=>(0,r.jsx)(d,{title:t.title},t.title)))}),(0,r.jsx)("div",{className:"steps-content",children:this.props.children})]})}}const l=c},38600:(t,e,a)=>{a.r(e),a.d(e,{default:()=>j});var s=a(1502),i=a(10880),n=a(67816),o=a(84982),r=a(95916),d=a(24952),c=a(88415),l=a(88226),p=a(31681),g=a(70470),u=a(4521),h=a(44578),m=a(80878);const f=a.n(m)().div`

.form-label {
  font-weight:bold;
  text-align:left;
}
.checkBoxDiv {
  text-align:left;
}
`;var P=a(86178),x=a.n(P),D=a(70579);const{resetProductConfigRedux:v,addPackage:S,getAllProductValidations:k}=c.A;class b extends s.Component{constructor(){var t;super(...arguments),t=this,this.state={currentPanelState:["1"],nextButtonEnabled:!1,activePanels:{1:!0},step1Data:{},packageData:{},routedPage:"",step2Data:{},validationData:[],initialData:[],newStep:{provider:!1,endorsement:!1}},this.nextPageHandler=()=>{const{routedPage:t,step1Data:e,packageData:a}=this.state,{history:s}=this.props;if("detail-page"===t)s.goBack();else{const t=(0,g.P)(window.sessionStorage.getItem("Step2")),i=(0,h.w9)(t,this.state.validationData,(0,r.get)(a,"code"));s.push({pathname:"/product-config/create-product/3/data-validation",state:{formName:"package-info",formData:{initialData:i.length>0?i:[],step1Data:e,step2Data:(0,g.P)(window.sessionStorage.getItem("Step2")),packageData:a}}})}},this.handleOnChangePannel=t=>{this.setState({currentPanelState:t},(()=>{const{activePanels:e}=this.state,a={...e};if(!this.state.nextButtonEnabled){t.forEach((t=>{const e=Number(t);e in a||(a[e]=!0)})),this.setState({activePanels:a});const e=[1,2,3,4,5],s=[];Object.keys(a).forEach((t=>{e.includes(Number(t))&&s.push(t)})),s.length===e.length&&this.setState({nextButtonEnabled:!0})}}))},this.disabledNextButton=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.setState({nextButtonEnabled:"true"===e})},this.handlePreviousPageHandler=()=>{const{history:t}=this.props;t.push({pathname:"/product-config/create-product/3",state:{formName:"package-info",formData:{step1Data:this.state.step1Data,step2Data:this.state.step2Data}}})},this.setFormFieldsData=t=>{const e=(0,h.IP)(t,this)||{},a=(0,h.Cy)(e,this.state.step1Data),s=a.policy_creation_wording_urls,i=a.policy_endorsement_wording_urls;a.policy_creation_wording_urls=Array.isArray(s)?s.join(","):s,a.policy_endorsement_wording_urls=Array.isArray(i)?i.join(","):i;const n=this.state.step1Data;this.setState({packageData:a}),this.props.addPackage({query:{productCode:(0,r.get)(n,"code","")},body:a})},this.handleSubmit=t=>{t.preventDefault();const{routedPage:e}=this.state;if("validation"===e)this.props.history.push({pathname:"/product-config/create-product/3/data-validation",state:{formName:"package-info",formData:{initialData:this.state.initialData,step1Data:this.state.step1Data,step2Data:this.state.step2Data,packageData:this.state.packageData}}});else{const{form:t}=this.props,{setFieldsValue:e,getFieldsValue:i}=t,n=i();if(null!==n&&void 0!==n&&n.coverage_end_static_datetime){var a;e({coverage_end_static_datetime:null===(a=x()(null===n||void 0===n?void 0:n.coverage_end_static_datetime))||void 0===a?void 0:a.format("YYYY-MM-DD HH:MM:SS")})}if(null!==n&&void 0!==n&&n.endorsement_coverage_end_static_datetime){var s;e({endorsement_coverage_end_static_datetime:null===(s=x()(null===n||void 0===n?void 0:n.coverage_end_static_datetime))||void 0===s?void 0:s.format("YYYY-MM-DD HH:MM:SS")})}this.props.form.validateFields((async(e,a)=>{if(e)this.setState({currentPanelState:[(0,l.a8)(e)]});else{const e=t.getFieldsValue();await this.setFormFieldsData(e)}}))}},this.handleCancelHandler=()=>{this.props.history.goBack()},this.onhandleStepHandler=t=>{this.setState({newStep:{...this.state.newStep,...t}})}}UNSAFE_componentWillReceiveProps(t){const{addProductPackagesMessageField:e,addProductPackagesMessageFieldError:a,productValidationMesage:s,productValidation:i}=t;"success"===e&&(n.notification.success({message:"Success",description:"Package Created SuccessFully"}),this.props.resetProductConfigRedux(["addProductPackagesMessage"]),this.nextPageHandler()),"success"===s&&(this.setState({validationData:(0,r.get)(i,"data.details",[])}),this.props.resetProductConfigRedux(["getAllProductValidationMessage"])),p.r_.call(this,{submitError:a,detailMessage:e,resetFunction:()=>this.props.resetProductConfigRedux(["addProductPackagesMessage"])})}componentDidMount(){const{location:t}=this.props;switch((0,r.get)(t,"state.formName","")){case"detail-page-new-package":{const e=(0,r.get)(t,"state.formData",{}),a=(0,r.get)(e,"step1Data",{}),s=(0,r.get)(e,"step2Data",{});this.setState({step1Data:a,step2Data:s,routedPage:"detail-page"})}break;case"package-table":{const e=(0,r.get)(t,"state.formData",{}),a=(0,r.get)(e,"step1Data",{});this.setState({step1Data:a,routedPage:"table"}),this.props.getAllProductValidations()}break;case"validation-table":{const e=(0,r.get)(t,"state.formData.step1Data",{}),a=(0,r.get)(t,"state.formData.packageData",{}),s=(0,r.get)(t,"state.formData.step2Data",{}),i=(0,r.get)(t,"state.formData.initialData",[]),n=["1","2","3","4","5","6"];let o={};n.forEach((t=>{o={...o,[t]:!0}})),this.setState({routedPage:"validation",currentPanelState:n,activePanels:o,nextButtonEnabled:!0,step1Data:e,step2Data:s,packageData:(0,h.s2)(a)||{},initialData:i})}break;default:this.props.history.push({pathname:"/product-config/create-product/1"})}}componentWillUnmount(){window.sessionStorage.removeItem("countriesData"),window.sessionStorage.removeItem("timezone"),(0,g.$)(["formData","Step2","new_premium_logic","configList"])}render(){const{currentPanelState:t,nextButtonEnabled:e,step1Data:a,packageData:s,routedPage:r,newStep:d}=this.state,{addProductPackagesMessageFieldError:c,addProductPackagesMessageFieldLoading:l}=this.props;return(0,D.jsx)(o.A,{children:(0,D.jsx)(i.A,{current:0,newSteps:d,children:(0,D.jsx)(f,{children:(0,D.jsxs)(n.Form,{onSubmit:this.handleSubmit,children:[(0,D.jsx)(u.A,{history:this.props.history,currentStateData:this,step1Data:a,form:this.props.form,currentPanelState:t,onChangePanel:this.handleOnChangePannel,nextButtonEnabledFunction:this.disabledNextButton,editForm:!1,packageData:s,stepHandler:this.onhandleStepHandler}),(0,D.jsxs)(n.Row,{type:"flex",justify:"center",className:"button-section",gutter:30,children:["detail-page"===r?(0,D.jsxs)(n.Col,{children:[" ",(0,D.jsx)(n.Button,{onClick:this.handleCancelHandler,children:"Cancel"})]}):(0,D.jsxs)(n.Col,{children:[" ",(0,D.jsx)(n.Button,{onClick:this.handlePreviousPageHandler,children:"Previous"})]}),(0,D.jsx)(n.Col,{children:(0,D.jsx)(n.Button,{type:"primary",htmlType:"submit",loading:!c&&l,disabled:!e,children:"Next"})})]})]})})})})}}const _=n.Form.create()(b),j=(0,d.connect)((t=>({productValidation:t.ProductConfigurable.getAllProductValidation,productValidationMesage:t.ProductConfigurable.getAllProductValidationMessage,addProductPackagesMessageField:t.ProductConfigurable.addProductPackagesMessage,addProductPackagesMessageFieldError:t.Error.ADD_PACKAGE,addProductPackagesMessageFieldLoading:t.Loading.ADD_PACKAGE})),{resetProductConfigRedux:v,addPackage:S,getAllProductValidations:k})(_)},10880:(t,e,a)=>{a.d(e,{A:()=>l});var s=a(1502),i=a(67816),n=a(80878);const o=a.n(n)().div`
.ant-steps-label-horizontal{
  padding:${t=>3===t.stepLength?"0px 120px":"0px 50px"};
}
`;var r=a(95916),d=a(70579);const{Step:c}=i.Steps;function l(t){let{children:e,current:a,newSteps:n}=t;const[l,p]=(0,s.useState)([{code:"package",title:"Package info"},{code:"validation",title:"Data validation"}]);return(0,s.useEffect)((()=>{let t=[...l];if((0,r.size)(n)>0){for(const e in n)if("provider"===e)if(n[e]){const e=t.find((t=>"provider"===t.code))||{};0===(0,r.size)(e)&&(t=[...t,{code:"provider",title:"Provider UI Config"}])}else t=t.filter((t=>"provider"!==t.code));else if("endorsement"===e)if(n[e]){const e=t.find((t=>"endorsement"===t.code))||{};0===(0,r.size)(e)&&(t=[...t,{code:"endorsement",title:"Endorsement UI Config"}])}else t=t.filter((t=>"endorsement"!==t.code));p(t)}}),[n]),(0,d.jsx)(o,{stepLength:l.length,children:(0,d.jsx)(i.Row,{type:"flex",justify:"center",children:(0,d.jsxs)(i.Col,{span:24,children:[(0,d.jsx)(i.Steps,{current:a,children:l.map((t=>(0,d.jsx)(c,{title:t.title},t.title)))}),(0,d.jsx)("div",{className:"steps-content",children:e})]})})})}},84982:(t,e,a)=>{a.d(e,{A:()=>l});var s=a(1502),i=a(80878);const n=a.n(i)().div`
.table-section {
  margin-top: 30px;
}
.button-section {
  margin:20px 0px;
}
.dynamic-add-button {
  color:#1890ff;
}
.dynamic-delete-button {
  color:#f54242;
}
.button-size {
  font-size:15px;
}
.icon-div {
  display: flex;
  align-items: center;
  height: 30px;  
}
.single-validation-row {
  margin-bottom:10px;
}
`;var o=a(67816),r=a(48558),d=a(70579);class c extends s.Component{render(){return(0,d.jsx)(n,{children:(0,d.jsx)(o.Row,{type:"flex",justify:"center",children:(0,d.jsx)(o.Col,{span:20,children:(0,d.jsx)(r.A,{current:2,children:this.props.children})})})})}}const l=c}}]);
//# sourceMappingURL=2073.0678f5f5.chunk.js.map