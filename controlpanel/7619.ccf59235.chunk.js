"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7619],{48558:(t,e,a)=>{a.d(e,{A:()=>p});var s=a(1502),i=a(67816),o=a(80878);const r=a.n(o)().div`
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
`;var c=a(70579);const{Step:n}=i.Steps;class d extends s.Component{constructor(t){super(t),this.state={steps:[{title:"Basic Information"},{title:"Policy data"},{title:"Package list"}]}}render(){const{steps:t}=this.state,{current:e}=this.props;return(0,c.jsxs)(r,{children:[(0,c.jsx)("h3",{className:"step-heading",children:(0,c.jsx)("b",{children:"Product Creation Wizard"})}),(0,c.jsx)(i.Steps,{current:e,children:t.map((t=>(0,c.jsx)(n,{title:t.title},t.title)))}),(0,c.jsx)("div",{className:"steps-content",children:this.props.children})]})}}const p=d},17619:(t,e,a)=>{a.r(e),a.d(e,{default:()=>k});var s=a(1502),i=a(67816),o=a(24952),r=a(88415),c=a(95916),n=a(84982),d=a(38613),p=a(67994),l=a(70470),g=a(70579);const{resetProductConfigRedux:u,productDetailPackges:h,getPackagesValidation:D,productDetailsAttributes:m}=r.A;class f extends s.Component{constructor(){super(...arguments),this.state={packagTableData:[],visible:!1,selectedPackage:{},validationData:[],step1Data:{},step2Data:[]},this.previousPageHandler=()=>{const{history:t}=this.props;t.push({pathname:"/product-config/create-product/2/table"})},this.handleFinshWizardHandler=()=>{const{history:t}=this.props;t.push({pathname:"/product-config"}),window.sessionStorage.clear()},this.closeModel=()=>{this.setState({visible:!1}),window.sessionStorage.removeItem("formData")},this.packageModal=t=>{const e={...t};window.sessionStorage.setItem("formData",JSON.stringify(e)),this.setState({selectedPackage:{...t},visible:!0},(()=>{const e=this.state.step1Data,a=(0,c.get)(e,"code","");if(a){const e=(0,c.get)(t,"code","");this.props.getPackagesValidation({query:{productCode:a,packageCode:e}})}}))},this.handleAddPackageHandler=()=>{const{history:t}=this.props;t.push({pathname:"/product-config/create-product/3/package-info",state:{formName:"package-table",formData:{step1Data:this.state.step1Data,step2Data:this.state.step2Data}}})},this.editPackageHandler=()=>{const{selectedPackage:t}=this.state,e=(0,c.get)(t,"code","");this.props.history.push({pathname:`/product-config/edit-package/${e}`,state:{formName:"modal-page-edit",formData:{packageData:t,step1Data:this.state.step1Data,step2Data:this.state.step2Data}}})},this.editDataValidationHandler=()=>{const{selectedPackage:t,validationData:e,step2Data:a,step1Data:s}=this.state,i=(0,c.get)(t,"code",""),o=(0,c.get)(t,"has_endorsement_flow",!1)?a:a.filter((t=>"creation"===t.attribute_type));this.props.history.push({pathname:`/product-config/edit/validation/${i}`,state:{formName:"modal-page-validation",formData:{initialData:e,step2Data:o,step1Data:s}}})}}UNSAFE_componentWillReceiveProps(t){const{productDetailPackages:e,productDetailPackagesMessage:a,getproductPackageValidationMessage:s,getproductPackageValidation:o,productDetailAttributes:r,productDetailAttributesMessage:n}=t;if("success"===a&&(this.setState({packagTableData:(0,c.get)(e,"data.details",[])}),this.props.resetProductConfigRedux(["productDetailPackagesMessage"])),"success"!==a&&void 0!==a&&(i.notification.error({message:"Error",description:"Error in Loading Package List"}),this.props.resetProductConfigRedux(["productDetailPackagesMessage"])),"success"===s&&this.setState({validationData:(0,c.get)(o,"data.details",[])}),"success"===n){const t=(0,c.get)(r,"data.details",[]);this.setState({step2Data:t}),window.sessionStorage.setItem("Step2",JSON.stringify((0,c.get)(r,"data.details",[]))),this.props.resetProductConfigRedux(["productDetailAttributesMessage"])}}async componentDidMount(){const{location:t}=this.props;switch((0,c.get)(t,"state.formName","")){case"Step2":{const e=(0,c.get)(t,"state.formData","");if(0===((0,l.P)(window.sessionStorage.getItem("Step2"))||[]).length){const t=(0,c.get)(e,"code","");await this.props.productDetailsAttributes({query:{productCode:t,type:"creation,endorsement"}})}const a=(0,c.get)(e,"code","");a&&(this.setState({step1Data:e}),this.props.productDetailPackges({query:{productCode:a}}))}break;case"package-info":case"validation-table":{const e=(0,c.get)(t,"state.formData.step2Data",[]),a=(0,c.get)(t,"state.formData.step1Data",{}),s=(0,c.get)(a,"code");this.setState({step1Data:a,step2Data:e}),this.props.productDetailPackges({query:{productCode:s}})}break;default:this.props.history.push({pathname:"/product-config/create-product/1"})}}render(){const{packagTableData:t,visible:e,selectedPackage:a,step1Data:s,step2Data:o}=this.state,{productDetailPackagesLoading:r,productDetailPackagesError:l}=this.props,u=(0,c.get)(s,"code","");return(0,g.jsxs)(n.A,{children:[(0,g.jsx)(p.A,{visible:e,detailSection:a,closeModel:this.closeModel,productCode:u,providerData:JSON.parse(window.sessionStorage.getItem("provider"))||[],editPackageInfo:this.editPackageHandler,section2Data:o,editDataValidationFunction:this.editDataValidationHandler}),(0,g.jsxs)(i.Row,{type:"flex",justify:"space-between",children:[(0,g.jsx)(i.Col,{span:8,children:(0,g.jsx)("h3",{className:"table-label",children:(0,g.jsx)("b",{children:"Package List Data"})})}),(0,g.jsx)(i.Col,{span:8,children:(0,g.jsx)(i.Button,{type:"primary",className:"table-button",onClick:this.handleAddPackageHandler,children:"Add Package"})})]}),(0,g.jsx)(i.Row,{type:"flex",justify:"center",children:(0,g.jsx)(i.Col,{span:18,className:"table-section",children:(0,g.jsx)(i.Spin,{spinning:r&&!l,tip:"Data Loading...",children:(0,g.jsx)(i.Table,{bordered:!0,columns:d.dB.call(this,{...JSON.parse(window.sessionStorage.getItem("Step2"))}),dataSource:t})})})}),(0,g.jsx)(i.Row,{type:"flex",justify:"center",children:(0,g.jsx)(i.Col,{className:"button-section",children:(0,g.jsx)(i.Button,{type:"primary",disabled:0===t.length,onClick:this.handleFinshWizardHandler,children:"Finish"})})})]})}}const k=(0,o.connect)((t=>({productDetailPackages:t.ProductConfigurable.productDetailPackges,productDetailPackagesMessage:t.ProductConfigurable.productDetailPackgesMessage,productDetailPackagesLoading:t.Loading.GET_PRODUCT_PACKGES,productDetailPackagesError:t.Error.GET_PRODUCT_PACKGES,getproductPackageValidation:t.ProductConfigurable.getproductPackageValidation,getproductPackageValidationMessage:t.ProductConfigurable.getproductPackageValidationMessage})),{resetProductConfigRedux:u,productDetailPackges:h,getPackagesValidation:D,productDetailsAttributes:m})(f)},84982:(t,e,a)=>{a.d(e,{A:()=>p});var s=a(1502),i=a(80878);const o=a.n(i)().div`
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
`;var r=a(67816),c=a(48558),n=a(70579);class d extends s.Component{render(){return(0,n.jsx)(o,{children:(0,n.jsx)(r.Row,{type:"flex",justify:"center",children:(0,n.jsx)(r.Col,{span:20,children:(0,n.jsx)(c.A,{current:2,children:this.props.children})})})})}}const p=d},70470:(t,e,a)=>{a.d(e,{$:()=>i,P:()=>s});const s=t=>{try{return JSON.parse(t)}catch(e){return{}}},i=t=>{t.forEach((t=>window.sessionStorage.removeItem(t)))}}}]);
//# sourceMappingURL=7619.ccf59235.chunk.js.map