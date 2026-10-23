"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1795],{66795:(t,a,i)=>{i.d(a,{$I:()=>h,Cy:()=>p,DO:()=>r,Ev:()=>c,Fu:()=>n,Im:()=>g,JU:()=>f,S1:()=>s,Z3:()=>u,uf:()=>l,yM:()=>o,yn:()=>x});var e=i(80878),d=i.n(e);const o=d().div`
  margin: 30px;
  .edit-heading {
    width: 100%;
    text-align: center;
  }
`,r=d().div`
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
`,s=d().div`
  text-align: right;
  .bold {
    font-weight: 900;
    font-size: 16px;
  }
`,n=d().div`
  display: flex;
  gap: 10px;
`,l=d().div`
  padding: 24px;
  border-radius: 4px;
  .header-wrapper {
    display: flex;
    gap: 8px;
  }
`,c=d().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,p=d().div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`,u=d().div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #f0f0f0;
`,g=d().div`
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
`,h=d().div`
  text-align: center;
  margin-top: 24px;
`,x=d().div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,f=d().label`
  display: block;
  margin-bottom: 4px;
`},71522:(t,a,i)=>{i.d(a,{A:()=>r});i(1502);var e=i(67816),d=i(66795),o=i(70579);function r(t){return(0,o.jsx)(d.yM,{children:(0,o.jsxs)(e.Row,{type:"flex",justify:"center",children:[(0,o.jsx)(e.Col,{span:24,children:(0,o.jsx)("p",{className:"edit-heading",children:t.heading})}),(0,o.jsx)(e.Col,{span:24,children:t.children})]})})}r.defaultProps={heading:""}},51795:(t,a,i)=>{i.r(a),i.d(a,{default:()=>C});var e=i(1502),d=i.n(e),o=i(67816),r=i(24952),s=i(80878);const n=i.n(s)().div`
  margin: 70px;
.validation-field {
  width:130px;
}
.button-div {
  margin-top:10px;
}
.edit-card {
  width: 100%;
}
.lower {
  margin-top: 30px;
}
.edit-validation {
  width:190px;
}
`;var l=i(57594),c=i(88415),p=i(95916),u=i(17939),g=i(71522),h=i(23092),x=i(93807),f=i(70579);const{resetProductConfigRedux:m,getAllProductValidations:b,editProductAttributes:P}=c.A;class v extends d().Component{constructor(){super(...arguments),this.state={productAttributes:[],validationData:[],intialData:[],packageCode:"",step1Data:{}},this.handleOnCancelEditHandler=()=>{this.props.history.goBack()},this.handleSubmitValidationDataHandler=()=>{const{productAttributes:t,step1Data:a,packageCode:i}=this.state,e=(0,u.$B)(t).data,d=a;this.props.editProductAttributes({query:{productCode:(0,p.get)(d,"code"),packageCode:i},body:e})}}UNSAFE_componentWillReceiveProps(t){const{productValidation:a,productValidationMesage:i,editProductValidationsMessage:e,editProductValidationsData:d}=t;if("success"===i&&this.setState({validationData:(0,p.get)(a,"data.details",[])}),"success"===e){const t=(0,p.get)(this.state.step1Data,"code","");o.notification.success({message:(0,p.get)(d,"message")}),this.props.resetProductConfigRedux(["editProductValidationsMessage"]);const a=(0,x.A)({product_code:t});this.props.history.push({pathname:"/product-config/detail",search:a,state:{code:t,visible:"2",packageCode:this.state.packageCode}})}"success"!==e&&void 0!==e&&(o.notification.error({message:"Failed to Edit Package Validation"}),this.props.resetProductConfigRedux(["editProductValidationsMessage"]))}componentDidMount(){const{location:t,match:a}=this.props;switch((0,p.get)(t,"state.formName","")){case"modal-page-validation":case"detail-page-validation":{const i=(0,p.get)(t,"state.formData","");this.setState({intialData:(0,p.get)(i,"initialData",[]),packageCode:(0,p.get)(a,"params.id",""),productAttributes:(0,p.get)(i,"step2Data",[]),step1Data:(0,p.get)(i,"step1Data",{})}),this.props.getAllProductValidations()}break;default:this.props.history.goBack()}}componentWillUnmount(){const{productAttributes:t}=this.state;t.forEach((t=>{window.sessionStorage.removeItem(`${t.code}-${t.id}`)})),window.sessionStorage.removeItem("formData")}render(){const{editProductValidationsLoading:t,editProductValidationError:a}=this.props,{productAttributes:i,validationData:e,intialData:d,packageCode:r}=this.state,s=i.length>0?i.filter((t=>"creation"===t.attribute_type)):[],c=i.length>0?i.filter((t=>"creation"!==t.attribute_type)):[];return(0,f.jsx)(n,{children:(0,f.jsx)(g.A,{heading:`Editing data validation for package: ${r}`,children:e.length>0&&i.length>0&&(0,f.jsxs)(o.Spin,{spinning:t&&!a,tip:"Loading....",children:[(0,f.jsxs)(o.Card,{className:"edit-card",children:[(0,f.jsx)("p",{children:(0,f.jsx)("b",{children:"Product Validation"})}),(0,f.jsx)(h.v,{children:(0,f.jsx)(l.A,{attributesData:s,productAttributes:s,validationData:e,intialData:d,packageName:r})})]}),(0,f.jsxs)(o.Card,{className:"edit-card lower",children:[(0,f.jsx)("p",{children:(0,f.jsx)("b",{children:"Endorsement Validation"})}),(0,f.jsx)(h.v,{children:(0,f.jsx)(l.A,{attributesData:i,productAttributes:c,validationData:e,intialData:d,packageName:""})})]}),(0,f.jsxs)(o.Row,{type:"flex",justify:"center",gutter:30,className:"button-div",children:[(0,f.jsx)(o.Col,{children:(0,f.jsx)(o.Button,{onClick:this.handleOnCancelEditHandler,children:"Cancel"})}),(0,f.jsx)(o.Col,{children:(0,f.jsx)(o.Button,{type:"primary",onClick:this.handleSubmitValidationDataHandler,children:"Submit"})})]})]})})})}}v.defaultProps={editProductValidationsLoading:!1,editProductValidationError:!1};const C=(0,r.connect)((t=>({editProductValidationsMessage:t.ProductConfigurable.editProductValidationsMessage,editProductValidationsData:t.ProductConfigurable.editProductValidationsData,editProductValidationsLoading:t.Loading.EDIT_PRODUCT_ATTRIBUTES,editProductValidationError:t.Error.EDIT_PRODUCT_ATTRIBUTES,productValidation:t.ProductConfigurable.getAllProductValidation,productValidationMesage:t.ProductConfigurable.getAllProductValidationMessage})),{editProductAttributes:P,resetProductConfigRedux:m,getAllProductValidations:b})(v)}}]);
//# sourceMappingURL=1795.72c87911.chunk.js.map