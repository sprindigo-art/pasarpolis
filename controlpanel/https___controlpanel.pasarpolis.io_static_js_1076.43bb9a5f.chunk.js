"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1076],{21624:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(1502),r=a(67816),i=a(996),n=a.n(i),o=a(95916),d=a(95024),l=a(70579);const m=function(e){const{renderFormItems:t,endorsmentFile:a,renderImgAndPdf:i,onRemoveEndorsmentFile:m,isPreview:c,reviewData:h={},isDetail:p,proofImages:u=[]}=e,y=(0,s.useCallback)((()=>(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Row,{type:"flex",children:(0,l.jsx)("div",{className:"margin-right-20",children:a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"form-field-title",children:"Endorsement Document"}),(0,l.jsxs)("div",{className:"documents-container",children:[i(a),(0,l.jsx)("div",{className:"cross-mark",onClick:m,children:(0,l.jsx)(r.Icon,{type:"cross"})})]})]}):t({name:"endorsement_file",title:"Endorsement File(s)",placeholder:"Upload Documents",type:"upload",required:!0,disabled:!1,accept:"image/*,.pdf"})})}),t({name:"remarks",title:"Remarks",placeholder:"",type:"textarea",required:!0,disabled:!1})]})),[t,i,m,a]),x=(0,s.useCallback)((e=>{window.open(e)}),[]),f=(0,s.useCallback)((e=>"pdf"===(0,d.A)(e)?(0,l.jsx)("div",{className:"documents-container",children:(0,l.jsxs)("div",{className:"pdf-container",children:[(0,l.jsx)("object",{type:"application/pdf",data:e,width:"150",height:"150","aria-label":"PDF"}),(0,l.jsx)("div",{className:"view-pdf-btn-container",children:(0,l.jsx)(r.Button,{onClick:()=>x(e),children:"View Pdf"})})]})}):(0,l.jsx)("div",{className:"documents-container",children:(0,l.jsx)(n(),{className:"policy-img",small:e,large:e,name:"",imageBackgroundColor:"transparent"})})),[x]),_=(0,s.useCallback)((()=>(0,l.jsxs)(r.Row,{type:"flex",justify:"start",children:[(0,l.jsxs)(r.Col,{span:4,className:"field-margin",children:[(0,l.jsx)("h3",{children:"Endorsement File"}),(0,l.jsx)("div",{children:f((0,o.get)(h,"endorsement_file_url"))})]}),(null===u||void 0===u?void 0:u.length)>0&&(0,l.jsxs)(r.Col,{children:[(0,l.jsx)("h3",{className:"text-center",children:"Proofs Of Payment"}),(0,l.jsx)(r.Row,{children:u.map(((e,t)=>(0,l.jsx)(r.Col,{span:4,className:"field-margin",children:f(e)},t)))})]}),(0,l.jsxs)(r.Col,{span:24,className:"field-margin",children:[(0,l.jsx)("h3",{children:"Remark"}),(0,l.jsx)("div",{children:(0,o.get)(h,"remarks","")})]})]})),[h,f,u]);return(0,l.jsxs)("div",{children:[c||p?(0,l.jsx)("h2",{children:"Attachments"}):(0,l.jsx)("h3",{children:"Attachments"}),c||p?_():y()]})}},57362:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(1502);const r=[{name:"request_date",title:"Request Date",placeholder:"",type:"datepicker",required:!0,disabled:!1},{name:"submission_date",title:"Submission Date",placeholder:"",type:"datepicker",required:!0,disabled:!1},{name:"receive_date",title:"Receive Date",placeholder:"",type:"datepicker",required:!0,disabled:!1},{name:"effective_date",title:"Effective Date",placeholder:"",type:"datepicker",required:!0,disabled:!1}];var i=a(67816),n=a(33097),o=a.n(n),d=a(70579);const l=function(e){const{renderFormElementInRow:t,isPreview:a=!1,isDetail:n,reviewData:l}=e,m=(0,s.useCallback)((()=>t(r)),[t]),c=(0,s.useCallback)((()=>(0,d.jsx)(i.Row,{type:"flex",justify:"start",children:r.map(((e,t)=>(0,d.jsxs)(i.Col,{className:`form-col-width ${t+1!==r.length&&"field-margin"}`,children:[(0,d.jsx)("h3",{children:e.title}),(0,d.jsx)("div",{children:n?o()(l,e.name):o()(l,e.name).format("DD/MM/YYYY")})]},`formview_${t}`)))})),[l]);return(0,d.jsxs)("div",{children:[a||n?(0,d.jsx)("h2",{children:"Dates"}):(0,d.jsx)("h3",{children:"Dates"}),a||n?c():m()]})}},61076:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var s=a(67816),r=a(1502),i=a(84029),n=a(24952),o=a(86178),d=a.n(o),l=a(80878),m=a.n(l);const c=m().div`
  .form-field-title {
    font-size: 12px;
    color: ${e=>e.theme.darkGrey};
    margin-bottom: 2px;
  }

  .required-star {
    color: ${e=>e.theme.errorColor};
  }

  .form-col-width {
    width: 20%;
  }
  .field-margin {
    margin-right: 20px;
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

  .number-format {
    flex: 1;
    width: 100%;

    .ant-input-number-handler-wrap {
      display: none !important;
    }
  }
  
  .margin-right-20{
    margin-right: 20px;
  }
`;var h=a(83772),p=a(25211),u=a(62451),y=a(95024),x=a(17135),f=a(57362),_=a(21624),g=a(70579);const j=function(e){const{renderFormItems:t,isKeyDisabled:a,isPreview:i,customerInfo:n=[],reviewData:o={},isDetail:l}=e,m=(0,r.useCallback)((()=>(0,g.jsx)(s.Row,{type:"flex",justify:"start",children:n.map(((e,r)=>(0,g.jsx)(s.Col,{span:12,children:t({name:e.data_key,title:e.title,subTitle:e.sub_title,disabled:a(e.data_key),type:e.type,defaultValue:"date"===e.type?d()(e.default_value,"YYYY-MM-DD").format("DD-MM-YYYY"):e.default_value,isEnableType:!0,runtimeRequestParams:e.runtime_request_params,data:e.data})},r)))})),[n,t,a]),c=(0,r.useCallback)((()=>(0,g.jsx)(s.Row,{type:"flex",justify:"start",children:n.filter((e=>!!o[e.data_key])).map(((e,t)=>(0,g.jsxs)(s.Col,{className:"form-col-width field-margin",children:[(0,g.jsx)("h3",{children:e.title}),(0,g.jsx)("div",{children:"date"===e.type?d()(o[e.data_key]).format("DD/MM/YYYY"):o[e.data_key]})]},`formData_${t}`)))})),[n,o]),h=(0,r.useCallback)((()=>(0,g.jsx)(s.Row,{type:"flex",justify:"start",children:n.map(((e,t)=>(0,g.jsxs)(s.Col,{className:"form-col-width field-margin",children:[(0,g.jsx)("h3",{children:e.name}),(0,g.jsx)("div",{children:e.value})]},`formData_${t}`)))})),[n]);return(0,g.jsxs)("div",{children:[i?(0,g.jsx)("h2",{children:" Customer Information "}):(0,g.jsx)("h3",{children:" Customer Information "}),i||l?i?c():h():m()]})};const b=function(e){const{renderFormItems:t,isKeyDisabled:a,others:i=[]}=e,n=(0,r.useCallback)((()=>(0,g.jsx)(s.Row,{type:"flex",justify:"start",children:i.map(((e,r)=>(0,g.jsx)(s.Col,{span:12,children:t({name:e.data_key,title:e.title,subTitle:e.sub_title,disabled:a(e.data_key),type:e.type,defaultValue:e.default_value,isEnableType:!0,runtimeRequestParams:e.runtime_request_params,data:e.data,radioDataKey:e.radio_data_key})},`other_${r}`)))})),[i,a,t]);return(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:" Others "}),n()]})};function F(e){const{renderFormElementInRow:t}=e;return(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Fees"}),t([{name:"endorsement_fee",title:"Endorsement Fee",placeholder:"Enter Endorsement Fee",disabled:!1,required:!0,type:"number",min:0}])]})}var E=a(95916);const{uploadPolicyFile:v,resetReduxState:w}=p.A,{runtimeUpdateEndorsementForm:D,resetAgentRedux:k}=u.A;class I extends r.Component{constructor(e){var t;super(e),t=this,this.handleInputChange=(e,t)=>e,this.handleRemoveEndorsmentFile=()=>{this.setState({endorsmentFile:""})},this.handleSubmit=e=>{e.preventDefault();const{customerInfo:t,others:a}=this.state;this.props.form.validateFields(((e,s)=>{if(!e){let e=!1;if(this.state.enabledFields.forEach((t=>{0===s[t]||s[t]||(e=!0,this.props.form.setFields({[t]:{errors:[new Error(`${t} is required!`)]}}))})),e)return;const r={...s,endorsement_file_url:this.state.endorsmentFile};t.forEach((e=>{if(this.isKeyDisabled(e.data_key))delete r[e.data_key],"hybrid_radio"===e.type&&delete r[e.radio_data_key];else if("search"===e.type){var t;r[e.name_data_key]=null===(t=document.getElementById(`${e.data_key}_${r[e.data_key]}`))||void 0===t?void 0:t.innerHTML}})),a.forEach((e=>{this.isKeyDisabled(e.data_key)?(delete r[e.data_key],"hybrid_radio"===e.type&&delete r[e.radio_data_key]):"search"===e.type&&(r[e.name_data_key]=document.getElementById(`${e.data_key}_${r[e.data_key]}`).innerHTML)})),this.props.onShowPreview(r)}}))},this.handleDisabledDate=(e,t)=>{switch(t){case"request_date":case"submission_date":case"receive_date":return e>d()().endOf("day")}},this.renderFormElementInRow=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,g.jsx)(s.Row,{type:"flex",justify:"start",children:e.map(((a,r)=>(0,g.jsx)(s.Col,{className:`form-col-width ${r+1!==e.length&&"field-margin"}`,children:t.renderFormItems(a)},`formData_${r}`)))})},this.customRequest=(e,t)=>{let{file:a}=e;this.currentUploadType=t;const s=new FormData;if(a.name){const e=a.name.split(".")[0];s.append("file",a),s.append("path",`${h.bz}/${e}_${Date.parse(new Date)}`),s.append("identifier","agent"),this.props.uploadPolicyFile({body:s})}},this.beforeUpload=(e,t)=>{const a=e.size/1024/1024<=10;return a||s.message.error("file must smaller than 10MB!"),a},this.renderFormItems=e=>(0,x.A)({...e,getFieldDecorator:this.props.form.getFieldDecorator,getFieldValue:this.props.form.getFieldValue,handleRuntimeParams:this.handleRuntimeParams,handleInputChange:this.handleInputChange,handleDisabledDate:this.handleDisabledDate,customRequest:this.customRequest,handleChangeAttributeActive:this.handleChangeAttributeActive,isKeyDisabled:this.isKeyDisabled,beforeUpload:this.beforeUpload}),this.renderImgAndPdf=e=>"pdf"===(0,y.A)(e)?(0,g.jsx)("object",{type:"application/pdf",data:e,width:150,height:150,"aria-label":"Policy Doc Pdf"}):(0,g.jsx)("img",{width:150,src:e,alt:""}),this.handleChangeAttributeActive=function(e,a){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const{enabledFields:r}=t.state;if(e.target.checked){const e=[...r,a];s&&e.push(s),t.setState({enabledFields:e})}else t.setState({enabledFields:r.filter((e=>e!==a&&e!==s))},(()=>{t.props.form.setFields({[a]:{errors:!1}}),s&&t.props.form.setFields({[s]:{errors:!1}})}))},this.handleRuntimeParams=e=>{let{name:t,value:a,runtimeRequestParams:s,handler:r=""}=e;if(!a||!a.trim())return;const i={};let n=!1;s.forEach((e=>{let a=this.props.form.getFieldValue(e);e===t||a&&a.trim()?(isNaN(a)||(a=Number(parseFloat(a))),i[e]=a):n=!0})),n||(isNaN(a)?i[t]=a:i[t]=Number(parseFloat(a)),i.handler=r||t,this.props.runtimeUpdateEndorsementForm({...i,policyId:this.props.policyId}))},this.isKeyDisabled=e=>{const{enabledFields:t}=this.state;return!t.includes(e)},this.state={endorsmentFile:"",enabledFields:[],customerInfo:this.props.customerInfo||[],others:this.props.others||[]},this.currentUploadType=""}componentDidUpdate(){const{policyResetReduxState:e,uploadPolicyFileStatus:t,uploadPolicyFileData:a,runtimeUpdateEndorsementMessage:r,runtimeUpdateEndorsementData:i,runtimeUpdateEndorsementError:n,resetAgentRedux:o}=this.props,{customerInfo:d,others:l}=this.state;if("success"===t&&("endorsement_file"===this.currentUploadType&&this.setState({endorsmentFile:a.url}),this.currentUploadType="",e(["uploadPolicyFileStatus","uploadPolicyFileData"])),"success"===r){const{target_key:e,target_value:t,target_attribute:a}=i;"data"===a?(this.props.form.setFieldsValue({[e]:""}),(0,E.find)(d,{data_key:e})?this.setState({customerInfo:d.map((a=>a.data_key===e?{...a,data:t}:a))}):(0,E.find)(l,{data_key:e})&&this.setState({others:l.map((a=>a.data_key===e?{...a,data:t}:a))})):"sub_title"===a&&((0,E.find)(d,{data_key:e})?this.setState({customerInfo:this.state.customerInfo.map((a=>a.data_key===e?{...a,sub_title:t}:a))}):(0,E.find)(l,{data_key:e})&&this.setState({others:this.state.others.map((a=>a.data_key===e?{...a,sub_title:t}:a))})),o(["runtimeUpdateEndorsementMessage"])}else n&&r&&(s.notification.error({message:r}),o(["runtimeUpdateEndorsementMessage"]))}render(){return(0,g.jsx)(c,{children:(0,g.jsxs)(s.Form,{onSubmit:this.handleSubmit,children:[(0,g.jsx)("h2",{children:"Required Information"}),(0,g.jsx)("hr",{}),(0,g.jsxs)("div",{children:[(0,g.jsx)(f.A,{renderFormElementInRow:this.renderFormElementInRow}),(0,g.jsx)("hr",{}),(0,g.jsx)(_.A,{renderFormItems:this.renderFormItems,endorsmentFile:this.state.endorsmentFile,renderImgAndPdf:this.renderImgAndPdf,onRemoveEndorsmentFile:this.handleRemoveEndorsmentFile}),(0,g.jsx)("hr",{}),(0,g.jsx)(F,{renderFormElementInRow:this.renderFormElementInRow})]}),(0,g.jsx)(s.Collapse,{defaultActiveKey:["1"],children:(0,g.jsx)(s.Collapse.Panel,{header:"Additional Options",children:(0,g.jsxs)("div",{children:[(0,g.jsx)(j,{renderFormItems:this.renderFormItems,customerInfo:this.state.customerInfo,isKeyDisabled:this.isKeyDisabled}),(0,g.jsx)(b,{renderFormItems:this.renderFormItems,others:this.state.others,isKeyDisabled:this.isKeyDisabled})]})},"1")}),(0,g.jsx)("hr",{}),(0,g.jsx)("div",{children:(0,g.jsxs)(s.Row,{type:"flex",justify:"space-between",children:[(0,g.jsx)(s.Col,{span:12,children:"Policy endorsment document will be sent once you press the submit button. Make sure all the information you have filled are correct."}),(0,g.jsx)(s.Col,{children:(0,g.jsx)(s.Form.Item,{children:(0,g.jsx)(s.Button,{type:"primary",htmlType:"submit",children:"Review"})})})]})})]})})}}const R=s.Form.create()(I),A=(0,n.connect)((e=>({uploadPolicyFileLoading:e.Loading.UPLOAD_FILE,uploadPolicyFileStatus:e.Insurance.uploadPolicyFileStatus,uploadPolicyFileData:e.Insurance.uploadPolicyFileData,runtimeUpdateEndorsementData:e.Agent.runtimeUpdateEndorsementData,runtimeUpdateEndorsementMessage:e.Agent.runtimeUpdateEndorsementMessage,runtimeUpdateEndorsementError:e.Error.RUNTIME_UPDATE_ENDORSEMENT_FORM,runtimeUpdateEndorsementLoader:e.Loading.RUNTIME_UPDATE_ENDORSEMENT_FORM})),{uploadPolicyFile:v,policyResetReduxState:w,runtimeUpdateEndorsementForm:D,resetAgentRedux:k})(R);var P=a(33097),C=a.n(P),M=a(97418);const S=m().div`
  .bold{
    font-weight: 700;
  }
`;function N(e){const{reviewData:t,policyDetail:a}=e;let i=a.discount;void 0!==(null===t||void 0===t?void 0:t.discount)&&(i=null===t||void 0===t?void 0:t.discount);const n=(0,r.useCallback)((function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,g.jsxs)(s.Row,{type:"flex",justify:"space-between",children:[(0,g.jsx)(s.Col,{className:a?"bold":"",children:e}),(0,g.jsx)(s.Col,{className:a?"bold":"",children:t})]})}),[]),o=(0,r.useCallback)((()=>{if(C()(t,"premium_action","")){let e=C()(t,"premium_delta","");return"deduction"===C()(t,"premium_action","")&&(e*=-1),e}return 0}),[t]),d=(0,r.useCallback)((()=>parseFloat(C()(a,"payment_detail.base_premium","").replaceAll(",",""))+parseFloat(o())-parseFloat(i)+parseFloat(C()(a,"payment_detail.add_ons_premium","").replaceAll(",",""))+parseFloat(C()(a,"payment_detail.stamp_duty",0).replaceAll(",",""))+parseFloat(C()(a,"payment_detail.admin_fee",0).replaceAll(",",""))),[a,o,i]),l=(0,r.useCallback)((()=>parseFloat(d())+parseFloat(C()(t,"endorsement_fee",0))+parseFloat(C()(a,"payment_detail.total_endorsement_fee",0).replaceAll(",",""))+parseFloat(C()(a,"payment_detail.total_premium_delta",0).replaceAll(",",""))),[t,d,a]),m=(0,r.useCallback)((()=>{const e=parseFloat(C()(a,"payment_detail.total_payment","").replaceAll(",",""))-l();return e>0?`${(0,M.up)(e)} lower`:`${(0,M.up)(-e)} higher`}),[l,a]);return(0,g.jsxs)(S,{children:[(0,g.jsx)("h2",{children:" Calculations "}),(0,g.jsxs)("div",{children:[n("Previous Total Payment",`Rp ${C()(a,"payment_detail.total_payment","")}`,!0),(0,g.jsx)("hr",{}),(0,g.jsx)("hr",{}),n("Base Premium",`Rp ${C()(a,"payment_detail.base_premium","")}`),(0,g.jsx)("hr",{}),n("Addons Premium",`Rp ${C()(a,"payment_detail.add_ons_premium","")}`),(0,g.jsx)("hr",{}),n("Stamp Duty",`Rp ${C()(a,"payment_detail.stamp_duty","")}`),(0,g.jsx)("hr",{}),n("Admin Fee",`Rp ${C()(a,"payment_detail.admin_fee","")}`),(0,g.jsx)("hr",{}),n("Additional Coverage Changes",(0,M.up)(o())),(0,g.jsx)("hr",{}),n("Discount",(0,M.up)(-i)),(0,g.jsx)("hr",{}),(0,g.jsx)("hr",{}),n("Net Premium",(0,M.up)(d()),!0),(0,g.jsx)("hr",{}),n("Endorsement Fee",(0,M.up)(C()(t,"endorsement_fee",0))),(0,g.jsx)("hr",{}),n("Previous Endorsements Fee",`Rp ${C()(a,"payment_detail.total_endorsement_fee","0")}`),(0,g.jsx)("hr",{}),n("Previous Premium Changes",`Rp ${C()(a,"payment_detail.total_premium_delta","0")}`),(0,g.jsx)("hr",{}),(0,g.jsx)("hr",{}),n("New Total Payment",(0,M.up)(l()),!0),(0,g.jsxs)("p",{children:["New Total Payment is ",m()," than the original total payment"]})]})]})}const T=m().div`
padding: 0px 20px 20px 20px;
.back-to-edit{
  cursor: pointer;
  font-weight: 700;
}
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

.number-format {
  flex: 1;
  width: 100%;

  .ant-input-number-handler-wrap {
    display: none !important;
  }
}

.margin-right-20{
  margin-right: 20px;
}
`;const U=function(e){const{reviewData:t,customerInfo:a,policyDetail:i,onSubmitForm:n,onHideModal:o}=e,d=(0,r.useCallback)((()=>{let e=!1;return a.forEach((a=>{t[a.data_key]&&(e=!0)})),e}),[t,a]);return(0,g.jsxs)(T,{children:[(0,g.jsxs)("div",{className:"back-to-edit",onClick:o,children:[(0,g.jsx)(s.Icon,{type:"arrow-left"})," Back to Editing"]}),(0,g.jsx)("hr",{}),(0,g.jsx)(f.A,{reviewData:t,isPreview:!0}),(0,g.jsx)("hr",{}),(0,g.jsx)(_.A,{reviewData:t,isPreview:!0}),(0,g.jsx)("hr",{}),d()&&(0,g.jsxs)("div",{children:[(0,g.jsx)(j,{reviewData:t,isPreview:!0,customerInfo:a}),(0,g.jsx)("hr",{})]}),(0,g.jsx)(N,{reviewData:t,policyDetail:i}),(0,g.jsx)("hr",{}),(0,g.jsx)("div",{children:(0,g.jsxs)(s.Row,{type:"flex",justify:"space-between",children:[(0,g.jsx)(s.Col,{span:12,children:"Policy endorsment document will be sent once you press the submit button. Make sure all the information you have filled are correct."}),(0,g.jsx)(s.Col,{children:(0,g.jsx)(s.Button,{type:"primary",onClick:n,disabled:e.disableSubmitBtn,children:"Submit"})})]})})]})},$=m().div`
  padding: 40px 18px;
  width: 100%;
  hr{
    border: 1px solid ${e=>e.theme.grey};
    margin: 20px 0px;
  }
`;var q=a(94528);const{getAgentInsuranceData:Y,getEndorsementForm:O,createEndorsementForm:L,resetAgentRedux:B}=u.A;class K extends r.Component{constructor(e){super(e),this.handleSubmit=()=>{this.setState({disableSubmitBtn:!0});const e={data:{}},{endorsementFormData:t,customerInfo:a,others:s}=this.state;Object.keys(t).forEach((a=>{let s="";s=d().isMoment(t[a])?t[a].format("YYYY-MM-DD"):t[a],e[a]=s})),a.forEach((t=>{(e[t.data_key]||0===e[t.data_key])&&(e.data[t.data_key]={value:e[t.data_key]},"hybrid_radio"===t.type&&(e.data[t.data_key][t.radio_data_key]=e[t.radio_data_key]),"search"===t.type&&(e.data[t.data_key][t.name_data_key]=e[t.name_data_key]))})),s.forEach((t=>{(e[t.data_key]||0===e[t.data_key])&&(e.data[t.data_key]={value:e[t.data_key]},"hybrid_radio"===t.type&&(e.data[t.data_key][t.radio_data_key]=e[t.radio_data_key]),"search"===t.type&&(e.data[t.data_key][t.name_data_key]=e[t.name_data_key]))})),this.props.createEndorsementForm({...e,policyId:this.policyId})},this.handleShowPreview=e=>{this.setState({endorsementFormData:{...e},showPreview:!this.state.showPreview})},this.handleCancel=()=>{this.setState({showPreview:!1})},this.state={showPreview:!1,endorsementFormData:[],customerInfo:"",others:"",disableSubmitBtn:!1},this.policyId=this.props.match.params.policy_id}componentDidUpdate(){const{endorsementFormError:e,endorsementMessage:t,endorsementForm:a,createEndorsementFormError:r,createEndorsementMessage:i,resetAgentRedux:n,history:o}=this.props;"success"===t?(this.setState({customerInfo:C()(a,"Customer Information",[]),others:C()(a,"Others",[])}),n(["endorsementMessage"])):t&&e&&(s.notification.error({message:t}),n(["endorsementMessage"])),"success"===i?(this.setState({disableSubmitBtn:!1}),o.push(`/agent/policy/${this.policyId}`),n(["createEndorsementMessage"])):i&&r&&(this.setState({disableSubmitBtn:!1}),s.notification.error({message:i}),n(["createEndorsementMessage"]))}componentDidMount(){this.props.getAgentInsuranceData({policyId:this.policyId}),this.props.getEndorsementForm({policyId:this.policyId})}render(){const{showPreview:e,endorsementFormData:t,customerInfo:a,others:r,disableSubmitBtn:n}=this.state,{agentPolicy:o,getPolicyDetailLoader:d,endorsementFormLoader:l,createEndorsementFormLoader:m}=this.props;return(0,g.jsx)(q.A,{isSpining:d||l||m,children:(0,g.jsx)($,{children:(0,g.jsxs)(i.A,{children:[(0,g.jsx)("p",{children:"Endorsement"}),a&&r&&(0,g.jsx)(A,{policyDetail:o,onShowPreview:this.handleShowPreview,customerInfo:a,others:r,policyId:this.policyId}),(0,g.jsx)(s.Modal,{width:"100vw",style:{top:0},visible:e,title:"Endorsment",footer:null,onCancel:this.handleCancel,children:(0,g.jsx)(U,{disableSubmitBtn:n,reviewData:t,customerInfo:a,others:r,policyDetail:o,onSubmitForm:this.handleSubmit,onHideModal:this.handleCancel})})]})})})}}const G=(0,n.connect)((e=>({agentPolicy:e.Agent.agentPolicy,agentPolicyMessage:e.Agent.agentPolicyMessage,getPolicyDetailsError:e.Error.GET_AGENT_INSURANCE_DATA,getPolicyDetailLoader:e.Loading.GET_AGENT_INSURANCE_DATA,endorsementFormLoader:e.Loading.GET_ENDORSEMENT_FORM,endorsementFormError:e.Error.GET_ENDORSEMENT_FORM,endorsementMessage:e.Agent.endorsementMessage,endorsementForm:e.Agent.endorsementForm,createEndorsementFormLoader:e.Loading.CREATE_ENDORSEMENT_FORM,createEndorsementFormError:e.Error.CREATE_ENDORSEMENT_FORM,createEndorsementMessage:e.Agent.createEndorsementMessage,createEndorsementForm:e.Agent.createEndorsementForm})),{getAgentInsuranceData:Y,getEndorsementForm:O,createEndorsementForm:L,resetAgentRedux:B})(K)}}]);
//# sourceMappingURL=1076.43bb9a5f.chunk.js.map