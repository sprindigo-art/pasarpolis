"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[860,1141],{66795:(e,t,a)=>{a.d(t,{$I:()=>h,Cy:()=>p,DO:()=>n,Ev:()=>l,Fu:()=>d,Im:()=>u,JU:()=>m,S1:()=>r,Z3:()=>g,uf:()=>c,yM:()=>o,yn:()=>f});var i=a(80878),s=a.n(i);const o=s().div`
  margin: 30px;
  .edit-heading {
    width: 100%;
    text-align: center;
  }
`,n=s().div`
  padding: 10px;
  background: #fff4cb;
  border: 2px solid #e5d597;
  width: 140px;
  font-weight: 900;
  margin-bottom: 15px;
  text-align: center;
  font-size: 17px;
  margin-top: -30px;
  border-radius: 5px;
`,r=s().div`
  text-align: right;
  .bold {
    font-weight: 900;
    font-size: 16px;
  }
`,d=s().div`
  display: flex;
  gap: 10px;
`,c=s().div`
  padding: 24px;
  border-radius: 4px;
  .header-wrapper {
    display: flex;
    gap: 8px;
  }
`,l=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,p=s().div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`,g=s().div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #f0f0f0;
`,u=s().div`
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
`,h=s().div`
  text-align: center;
  margin-top: 24px;
`,f=s().div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,m=s().label`
  display: block;
  margin-bottom: 4px;
`},71522:(e,t,a)=>{a.d(t,{A:()=>n});a(1502);var i=a(67816),s=a(66795),o=a(70579);function n(e){return(0,o.jsx)(s.yM,{children:(0,o.jsxs)(i.Row,{type:"flex",justify:"center",children:[(0,o.jsx)(i.Col,{span:24,children:(0,o.jsx)("p",{className:"edit-heading",children:e.heading})}),(0,o.jsx)(i.Col,{span:24,children:e.children})]})})}n.defaultProps={heading:""}},58916:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var i=a(1502),s=a.n(i),o=a(80878);const n=a.n(o)().div`
  .button-div {
    display:flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;var r=a(67816),d=a(4521),c=a(24952),l=a(88226),p=a(44578),g=a(70470),u=a(71522),h=a(86178),f=a.n(h),m=a(95916),x=a(88415),v=a(25211),y=a(93807),k=a(70579);const{resetProductConfigRedux:P,editPackage:_}=x.A;class D extends s().Component{constructor(){var e;super(...arguments),e=this,this.state={currentPanelState:[1,2,3,4,5,6],nextButtonEnabled:!0,packageData:{},step1Data:{},step2Data:[]},this.handleChangePanel=e=>{this.setState({currentPanelState:e},(()=>{}))},this.disabledNextButton=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({nextButtonEnabled:"true"===t})},this.setFormFieldsDataValues=async e=>{const{packageData:t,step1Data:a}=this.state,i=(0,p.IP)(e,this)||{},s=(0,p.Cy)(i,a),o=s;delete o.code;const n=o.policy_creation_wording_urls,d=o.policy_endorsement_wording_urls;if(o.policy_creation_wording_urls=Array.isArray(n)?n.join(","):n,o.policy_endorsement_wording_urls=Array.isArray(d)?d.join(","):d,s.formula_expression&&1===s.use_formula){if(!await new Promise((e=>{this.props.evaluateFormulaRequest({expression:s.formula_expression,productCode:(0,m.get)(a,"code"),packageCode:(0,m.get)(t,"code"),onSuccess:()=>e(!0),onError:()=>e(!1)})})))return void r.notification.error({message:"Invalid expression"})}this.props.editPackage({query:{productCode:(0,m.get)(a,"code"),packageCode:(0,m.get)(t,"code")},body:o})},this.handleOnSubmitEdit=e=>{e.preventDefault();const{form:t}=this.props,{setFieldsValue:a,getFieldsValue:i}=t,s=i();if(null!==s&&void 0!==s&&s.coverage_end_static_datetime){var o;a({coverage_end_static_datetime:null===(o=f()(null===s||void 0===s?void 0:s.coverage_end_static_datetime))||void 0===o?void 0:o.format("YYYY-MM-DD HH:MM:SS")})}if(null!==s&&void 0!==s&&s.endorsement_coverage_end_static_datetime){var n;a({endorsement_coverage_end_static_datetime:null===(n=f()(null===s||void 0===s?void 0:s.coverage_end_static_datetime))||void 0===n?void 0:n.format("YYYY-MM-DD HH:MM:SS")})}this.props.form.validateFields((async(e,a)=>{if(e)this.setState({currentPanelState:[(0,l.a8)(e)]});else{const e=t.getFieldsValue();await this.setFormFieldsDataValues(e)}}))},this.handleGoBack=()=>{this.props.history.goBack()}}UNSAFE_componentWillReceiveProps(e){const{editPackageData:t,editPackageMessage:a}=e;if("success"===a){const e=(0,m.get)(this.state.step1Data,"code",""),a=(0,m.get)(this.state.packageData,"code","");r.notification.success({message:(0,m.get)(t,"message")}),this.props.resetProductConfigRedux(["editPackageMessage"]);const i=(0,y.A)({product_code:e});this.props.history.push({pathname:"/product-config/detail",search:i,state:{code:e,visible:"1",packageCode:a}})}if("success"!==a&&void 0!==a){const{message:e,errors:t}=(0,m.get)(a,"data",{});Array.isArray(t)?t.map((t=>r.notification.error({message:e,description:(0,m.get)(t,"description","")}))):r.notification.error({message:e||"Fail to Edit Package!!!"}),this.props.resetProductConfigRedux(["editPackageMessage"])}}componentDidMount(){const{location:e}=this.props;switch((0,m.get)(e,"state.formName","")){case"modal-page-edit":case"detail-page-edit":{const t=(0,p.s2)((0,m.get)(e,"state.formData.packageData",{})),a=(0,m.get)(e,"state.formData.step1Data",{}),i=(0,m.get)(e,"state.formData.step2Data",{});this.setState({packageData:t,step1Data:a,step2Data:i})}break;default:this.props.history.goBack()}}componentWillUnmount(){(0,g.$)(["formData","provider","timezone","countriesData","new_premium_logic","configList"])}render(){const{editPackageLoading:e,editPackageError:t}=this.props,{currentPanelState:a,nextButtonEnabled:i,packageData:s,step1Data:o,step2Data:c}=this.state,l=(0,m.get)(s,"code");return(0,k.jsx)(r.Spin,{spinning:e&&!t,tip:"Edit Package Page Loading ...",children:(0,k.jsx)(n,{children:(0,k.jsx)(u.A,{heading:`Edit Package Info - ${l}`,children:(0,k.jsxs)(r.Form,{onSubmit:this.handleOnSubmitEdit,children:[(0,k.jsx)(r.Row,{type:"flex",justify:"center",gutter:40,children:(0,k.jsx)(r.Col,{span:20,children:(0,k.jsx)(d.A,{history:this.props.history,form:this.props.form,currentPanelState:a,onChangePanel:this.handleChangePanel,nextButtonEnabledFunction:this.disabledNextButton,packageData:s,editForm:!0,step1Data:o,step2Data:c})})}),(0,k.jsx)(r.Row,{type:"flex",justify:"center",children:(0,k.jsx)(r.Col,{span:4,children:(0,k.jsxs)("div",{className:"button-div",children:[(0,k.jsx)(r.Button,{onClick:this.handleGoBack,children:"Cancel"}),(0,k.jsx)(r.Button,{type:"primary",disabled:!i,htmlType:"submit",children:" Submit "})]})})})]})})})})}}D.defaultProps={editPackageError:!1,editPackageLoading:!1};const b=r.Form.create()(D),C=(0,c.connect)((e=>({editPackageData:e.ProductConfigurable.editPackageData,editPackageMessage:e.ProductConfigurable.editPackageMessage,editPackageLoading:e.Loading.EDIT_PACKAGE,editPackageError:e.Error.EDIT_PACKAGE})),{resetProductConfigRedux:P,editPackage:_,evaluateFormulaRequest:v.A.evaluateFormula})(b)}}]);
//# sourceMappingURL=1141.33c528a7.chunk.js.map