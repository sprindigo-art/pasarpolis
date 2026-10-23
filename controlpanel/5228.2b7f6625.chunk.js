"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[5228],{48558:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(1502),s=a(67816),n=a(80878);const o=a.n(n)().div`
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
`;var r=a(70579);const{Step:d}=s.Steps;class c extends i.Component{constructor(t){super(t),this.state={steps:[{title:"Basic Information"},{title:"Policy data"},{title:"Package list"}]}}render(){const{steps:t}=this.state,{current:e}=this.props;return(0,r.jsxs)(o,{children:[(0,r.jsx)("h3",{className:"step-heading",children:(0,r.jsx)("b",{children:"Product Creation Wizard"})}),(0,r.jsx)(s.Steps,{current:e,children:t.map((t=>(0,r.jsx)(d,{title:t.title},t.title)))}),(0,r.jsx)("div",{className:"steps-content",children:this.props.children})]})}}const l=c},75228:(t,e,a)=>{a.r(e),a.d(e,{default:()=>C});var i=a(1502),s=a(10880),n=a(24952),o=a(67816),r=a(95916),d=a(88415),c=a(57594),l=a(84982),p=a(80878),u=a.n(p);const h=u().div`
.label {
  float: left;
}
.Lower {
  margin-top: 20px;
}
.validation-field {
  width:100%;
}
`,g=u().div`
margin:30px 0px;
`;var x=a(17939),f=a(23092),m=a(70579);const{resetProductConfigRedux:v,getAllProductValidations:D,addValidation:j}=d.A;class b extends i.Component{constructor(){super(...arguments),this.state={productAttributes:[],validationData:[],step1Data:{},packageData:{},initialData:[],newStep:{provider:!1,endorsement:!1}},this.handlePreviousPage=()=>{const{packageData:t,step1Data:e,productAttributes:a,initialData:i}=this.state,{history:s}=this.props;s.push({pathname:"/product-config/create-product/3/package-info",state:{formName:"validation-table",formData:{initialData:i,step1Data:e,step2Data:a,packageData:t}}})},this.handleSubmitValidationData=()=>{const{productAttributes:t,step1Data:e,packageData:a}=this.state;let i=[];if((0,r.get)(a,"has_endorsement_flow",!1))i=(0,x.$B)(t);else{const e=t.filter((t=>"creation"===t.attribute_type));i=(0,x.$B)(e)}const s=i.data;if(s.length>0){const t=(0,r.get)(e,"code",""),i=(0,r.get)(a,"code","");this.props.addValidation({query:{productCode:t,packageCode:i},body:s})}}}UNSAFE_componentWillReceiveProps(t){const{productValidation:e,productValidationMesage:a,validationCreatedMessage:i}=t;if("success"===i){o.notification.success({message:"Success",description:"Validations created successfully"}),this.props.resetProductConfigRedux(["addProductDataValidation"]);let e="/product-config/create-product/3";(0,r.get)(this.state.newStep,"provider")?e="/product-config/create-product/3/provider":(0,r.get)(this.state.newStep,"endorsement")&&(e="/product-config/create-product/3/generic-endorsement-form"),t.history.push({pathname:e,state:{formName:"validation-table",formData:{step1Data:this.state.step1Data,step2Data:this.state.productAttributes,packageData:this.state.packageData}}})}"success"!==i&&void 0!==i&&(o.notification.error({message:"Error",description:"Validations not created "}),this.props.resetProductConfigRedux(["addProductDataValidation"])),"success"===a&&(this.setState({validationData:(0,r.get)(e,"data.details",[])}),this.props.resetProductConfigRedux(["getAllProductValidationMessage"]))}componentDidMount(){const{location:t}=this.props;switch((0,r.get)(t,"state.formName","")){case"providerPage":case"package-info":{const e=(0,r.get)(t,"state.formData.step1Data",{}),a=(0,r.get)(t,"state.formData.step2Data",[]),i=(0,r.get)(t,"state.formData.packageData",{}),s=(0,r.get)(t,"state.formData.initialData",[]),n={provider:"provider"===(0,r.get)(i,"document_generation_source")||"provider"===(0,r.get)(i,"policy_number_source"),endorsement:(0,r.get)(i,"has_endorsement_flow")};this.setState({initialData:s,step1Data:e,productAttributes:a,packageData:i,newStep:n}),this.props.getAllProductValidations()}break;default:this.props.history.push({pathname:"/product-config/create-product/1"})}}render(){const{productAttributes:t,validationData:e,packageData:a,initialData:i,newStep:n}=this.state,d=t.length>0?t.filter((t=>"creation"===t.attribute_type)):[],p=(0,r.get)(a,"has_endorsement_flow",!1)&&t.length>0?t.filter((t=>"creation"!==t.attribute_type)):[],{validationAddLoading:u,validationAddError:x}=this.props;return(0,m.jsx)(l.A,{children:(0,m.jsxs)(s.A,{current:1,newSteps:n,children:[(0,m.jsx)(o.Spin,{spinning:0===t.length&&0===e.length,loading:"Loading Validation Tables....",children:(0,m.jsx)(h,{children:(0,m.jsxs)(o.Row,{type:"flex",children:[(0,m.jsx)(o.Col,{span:24,children:(0,m.jsx)(o.Card,{className:"card",children:(0,m.jsxs)(o.Row,{type:"flex",children:[(0,m.jsx)(o.Col,{span:24,children:(0,m.jsx)("h3",{className:"label",children:(0,m.jsx)("b",{children:"Policy Creation Validation"})})}),(0,m.jsx)(o.Col,{span:24,children:(0,m.jsx)(f.v,{children:(0,m.jsx)(c.A,{attributesData:d,productAttributes:d,validationData:e,intialData:i,packageName:(0,r.get)(a,"code","")})})})]})})}),(0,m.jsx)(o.Col,{span:24,children:(0,m.jsx)(o.Card,{className:"card Lower",children:(0,m.jsxs)(o.Row,{type:"flex",children:[(0,m.jsx)(o.Col,{span:24,children:(0,m.jsx)("h3",{className:"label",children:(0,m.jsx)("b",{children:"Endorsement Validation"})})}),(0,m.jsx)(o.Col,{span:24,children:(0,m.jsx)(f.v,{children:(0,m.jsx)(c.A,{attributesData:t,productAttributes:p,validationData:e,intialData:i,packageName:""})})})]})})})]})})}),(0,m.jsx)(g,{children:(0,m.jsxs)(o.Row,{type:"flex",justify:"center",gutter:30,children:[(0,m.jsx)(o.Col,{children:(0,m.jsx)(o.Button,{onClick:this.handlePreviousPage,children:"Previous"})}),(0,m.jsx)(o.Col,{children:(0,m.jsx)(o.Button,{type:"primary",loading:u&&!x,onClick:this.handleSubmitValidationData,children:(0,r.get)(n,"provider")?"Next":"Submit"})})]})})]})})}}b.defaultProps={productValidation:{data:{details:[]},message:"",success:!1},validationCreatedMessage:void 0,validationAddLoading:!1,validationAddError:!1,productValidationMesage:void 0};const A=o.Form.create()(b),C=(0,n.connect)((t=>({productValidation:t.ProductConfigurable.getAllProductValidation,productValidationMesage:t.ProductConfigurable.getAllProductValidationMessage,validationCreatedMessage:t.ProductConfigurable.addProductDataValidation,validationAddLoading:t.Loading.ADD_DATA_VALIDATION,validationAddError:t.Error.ADD_DATA_VALIDATION})),{getAllProductValidations:D,resetProductConfigRedux:v,addValidation:j})(A)},10880:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(1502),s=a(67816),n=a(80878);const o=a.n(n)().div`
.ant-steps-label-horizontal{
  padding:${t=>3===t.stepLength?"0px 120px":"0px 50px"};
}
`;var r=a(95916),d=a(70579);const{Step:c}=s.Steps;function l(t){let{children:e,current:a,newSteps:n}=t;const[l,p]=(0,i.useState)([{code:"package",title:"Package info"},{code:"validation",title:"Data validation"}]);return(0,i.useEffect)((()=>{let t=[...l];if((0,r.size)(n)>0){for(const e in n)if("provider"===e)if(n[e]){const e=t.find((t=>"provider"===t.code))||{};0===(0,r.size)(e)&&(t=[...t,{code:"provider",title:"Provider UI Config"}])}else t=t.filter((t=>"provider"!==t.code));else if("endorsement"===e)if(n[e]){const e=t.find((t=>"endorsement"===t.code))||{};0===(0,r.size)(e)&&(t=[...t,{code:"endorsement",title:"Endorsement UI Config"}])}else t=t.filter((t=>"endorsement"!==t.code));p(t)}}),[n]),(0,d.jsx)(o,{stepLength:l.length,children:(0,d.jsx)(s.Row,{type:"flex",justify:"center",children:(0,d.jsxs)(s.Col,{span:24,children:[(0,d.jsx)(s.Steps,{current:a,children:l.map((t=>(0,d.jsx)(c,{title:t.title},t.title)))}),(0,d.jsx)("div",{className:"steps-content",children:e})]})})})}},84982:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(1502),s=a(80878);const n=a.n(s)().div`
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
`;var o=a(67816),r=a(48558),d=a(70579);class c extends i.Component{render(){return(0,d.jsx)(n,{children:(0,d.jsx)(o.Row,{type:"flex",justify:"center",children:(0,d.jsx)(o.Col,{span:20,children:(0,d.jsx)(r.A,{current:2,children:this.props.children})})})})}}const l=c}}]);
//# sourceMappingURL=5228.2b7f6625.chunk.js.map