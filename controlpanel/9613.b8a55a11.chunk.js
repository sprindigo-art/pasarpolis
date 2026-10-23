"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[9613],{91994:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var o=i(1502),n=i(24952),a=i(67816),r=i(88962),s=i(80878),l=i.n(s);const p=l().div`

  padding: 12px;
  .heading {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 6px;
  }
  .ant-steps {
    margin-bottom: 12px;
  }

`,d=(l().div`

`,l().div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    text-decoration: underline;
  }
  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
  .ant-table-content {
    margin-bottom: 16px;
  }
  .edit {
    cursor: pointer;
    margin-right: 12px;
    border-right: 1px solid #a3a3a3;
    padding-right: 12px;
  }
  .delete {
    color: red;
    font-weight: 600;
    cursor: pointer;
  }
  .create,.view{
    color: green;
    font-weight: 600;
    cursor: pointer;
  }
  .select_from_existing{
    color: #1890ff;
    font-weight: 600;
    cursor: pointer;
  }
  .ant-row {
    margin-bottom: 8px;
  }
  .ant-btn {
    border-radius: 2px;
  }
`,l().div`
  .ant-progress {
    margin-bottom: 8px;
  }
`,l().div`
  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
  .ant-table-content {
    margin-bottom: 16px;
  }
  .delete {
    color: red;
    font-weight: 600;
    cursor: pointer;
  }
  .create,.view{
    color: green;
    font-weight: 600;
    cursor: pointer;
  }
  .select_from_existing{
    color: #1890ff;
    font-weight: 600;
    cursor: pointer;
  }
  .ant-btn {
    border-radius: 2px;
  }
  .select {
    width: 100px;
  }
  .ant-table {
    overflow: scroll;
  }
  .input-label {
    width: 160px;
  }
  .attribute-heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .attribute-select {
    width: 300px;
    padding-left: 12px;
  }
  .add-attribute-button {
    background-color: #13c2c2;
    color: #fff;
    margin-top: 4px;
    margin-left: 10px;
  }
  .attribute-row {
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 20px;
  }
  .attributee-col {
    margin-bottom: -5px;
  }
`,l().div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .label {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
  }
  .description {
    margin-left: 8px;
    color: #a2a2a2;
  }
  .ant-btn {
    border-radius: 2px;
  }
`,l().div`

`,l().div`
  padding: 6px;
  .question-wrapper {
    margin-bottom: 20px;
  }
  .question {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 2px;
  }
  .description {
    margin-left: 8px;
    color: #808080;
    margin-bottom: 6px;
  }
  .response-heading {
    font-weight: 600;
    margin-right: 8px;
  }
  .input {
    margin-left: 16px;
  }
  .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-end;
    margin-left: 0px;
  }
  .single-choice {
    display: flex;
    align-items: flex-end;
    margin-left: 0px;
  }
`,l().div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    text-decoration: underline;
  }
  .review-container {
    padding: 6px;
    margin-bottom: 16px;
  }
  .review-row {
    margin-bottom: 6px;
    overflow-wrap: break-word;
  }
  .review-label {
    font-weight: 600;
  }
  .form-container {
    margin-bottom: 12px;
  }
  .form-heading {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 6px;
    text-decoration: underline;
  }
  .form-label {
    font-weight: 600;
  }
  .form-row {
    margin-bottom: 6px;
  }
  .ant-table-thead > tr > th {
    background-color: powderblue;
    font-weight: 600;
    padding: 10px;
  }
  .ant-table-content {
    margin-bottom: 16px;
    overflow: scroll;
  }
  .button {
    margin-top: 8px;
  }
`,l().div`
    display: flex;
    justify-content: center;
    width: 100%;
`);var c=i(50104),g=i(78608),u=i(98711),f=i(26877),h=i(96117),m=i(87291),v=i(70094),C=i(70579);const{Step:x}=a.Steps,{getInprogressConfig:b,getPolicyFormAttributes:S,updateClaimConfigData:D,getPolicyFormAttributesMultipleProduct:w,resetReduxStateClaim:_}=f.A,{resetLoadingRedux:y}=h.A,{resetErrorRedux:P}=m.A,L="ADD",O="EDIT",E="INPROGRESS";class I extends o.Component{constructor(e){super(e),this.handleStepChange=e=>{const{stepsConfig:t}=this.state,i=t;for(let o=0;o<e;o++)i[o].status="finish";i[e].status="process",this.setState({current:e,stepsConfig:i})},this.handleEditConfigData=()=>{const{configDumpData:e}=this.props,{responses_provided:t,questions:i}=e,o=t;this.setState({formData:o,configData:t}),t&&Object.keys(t).forEach((e=>{t[e].is_valid&&delete t[e].is_valid})),t&&Object.keys(t).forEach(((e,o)=>{Object.keys(t[e]).map((n=>(0,v.ys)(i[o],"name",n,"default_answer",t[e][n])))})),this.setState({questions:i,responsesProvided:t})},this.onHandleNext=()=>{const{stepChangeInTemplate:e}=this.props,{current:t,stepsConfig:i}=this.state,o=i;o[t].status="finish",o[t+1].status="process",this.setState({current:t+1,stepsConfig:o}),e(t+1)},this.onHandlePrevious=()=>{const{current:e,stepsConfig:t}=this.state,i=t;i[e].status="wait",i[e-1].status="process",this.setState({current:e-1,stepsConfig:i})},this.saveQuestionnaireData=e=>{this.setState({configData:e})},this.saveResponse=(e,t)=>{this.setState({configData:e,formData:t})},this.getQuestions=()=>{const{claimsConfigTemplatesDetails:e={}}=this.props,{configState:t,questions:i}=this.state,{questions:o=[]}=e;switch(t){case E:case O:return i;default:return o}},this.state={stepsConfig:[{title:"Choose Template",status:"process",icon:"container"},{title:"Questionnaire",status:"wait",icon:"control"},{title:"Review",status:"wait",icon:"check-circle"}],current:0,benefitId:"",configData:[],inprogressConfig:void 0,configSlug:void 0,configState:L,editData:void 0,questions:void 0,responsesProvided:void 0,source:e.location.pathname.includes("green")?"green_channel":"auto_approval"}}componentDidMount(){const{productKey:e,benefitId:t,configDumpData:i={},configData:o,getPolicyFormAttributesMultipleProduct:n}=this.props,{responses_provided:a,questions:r}=i;i&&Object.keys(i).length&&(this.setState({configState:O,configData:r,configDumpId:o.config_dump_id,autoApprovalConfigId:o.config_id,responsesProvided:a,questions:r}),this.handleEditConfigData(i)),this.setState({benefitId:t});n({query:{product_keys:e&&e.length&&e.map((e=>e.name)).join(",")}})}componentDidUpdate(e){const{productKey:t,getPolicyFormAttributesMultipleProduct:i}=this.props,{productKey:o}=e;if(t!==o){i({query:{product_keys:t&&t.length&&t.map((e=>e.name)).join(",")}})}}componentWillUnmount(){const{resetReduxStateClaim:e}=this.props;e&&e(["inprogressConfig","claimsConfigTemplatesDetails","claimConfigData"])}UNSAFE_componentWillReceiveProps(e){const{inprogressConfigLoading:t,inprogressConfigError:i,inprogressConfigStatus:o}=e;!1===t&&(i&&a.notification.error({message:o}),this.props.resetErrorRedux(["GET_INPROGRESS_CONFIG"]),this.props.resetLoadingRedux(["GET_INPROGRESS_CONFIG"]))}render(){const{history:e,inprogressConfigLoading:t,productKey:i,provider:o,benefitId:n}=this.props,{stepsConfig:r,current:s,configData:l,formData:d,inprogressConfig:f,configDumpId:h,configSlug:m,editData:v,configState:b,responsesProvided:S,autoApprovalConfigId:D,source:w}=this.state;return(0,C.jsx)(p,{children:(0,C.jsx)(a.Spin,{spinning:!!t,children:(0,C.jsxs)(a.Card,{children:[(0,C.jsx)("div",{className:"heading",children:"Wizard"}),(0,C.jsx)(a.Steps,{current:s,children:r.map(((e,t)=>{let{title:i,status:o,icon:n}=e;return(0,C.jsx)(x,{title:i,status:o,icon:(0,C.jsx)(a.Icon,{type:n})},t)}))}),0===s&&(0,C.jsx)(a.Card,{children:(0,C.jsx)(c.A,{configSource:"auto_approval",handleNext:this.onHandleNext,handleInprogressConfigData:this.onHandleInprogressConfigData,edit:b===O})}),1===s&&(0,C.jsx)(a.Card,{children:(0,C.jsx)(g.A,{benefitId:n,saveQuestionnaireData:this.saveQuestionnaireData,handleNext:this.onHandleNext,handlePrevious:this.onHandlePrevious,configData:l,questions:this.getQuestions(),inprogess:f,configDumpId:h,editData:v,configState:b,responsesProvided:S,inprogressConfig:f,hideBackToFormButton:!1,source:w})}),2===s&&(0,C.jsx)(a.Card,{children:(0,C.jsx)(u.A,{configData:l,formData:d,history:e,configSlug:m,configDumpId:h,handlePrevious:this.onHandlePrevious,inprogressConfig:f,partnerProductKey:i,providerId:o,autoApprovalConfigId:D,benefitId:n,source:w})}),(0,C.jsx)(a.Divider,{})]})})})}}const A=(0,r.withRouter)((0,n.connect)((e=>({inprogressConfigLoading:e.Loading.GET_INPROGRESS_CONFIG,inprogressConfigError:e.Error.GET_INPROGRESS_CONFIG,inprogressConfig:e.Claims.inprogressConfig,inprogressConfigStatus:e.Claims.inprogressConfigStatus,claimsConfigTemplatesDetails:e.Claims.claimsConfigTemplatesDetails,claimConfigData:e.Claims.claimConfigData})),{getInprogressConfig:b,getPolicyFormAttributes:S,updateClaimConfigData:D,resetLoadingRedux:y,resetErrorRedux:P,resetReduxStateClaim:_,getPolicyFormAttributesMultipleProduct:w})(I));var j=i(25211),k=i(92725);const{getProducts:T}=j.A,{getProviderList:R}=k.A,{getConfigTemplates:G,resetReduxStateClaim:N,getAutoApprovalConfigInfo:F,getGreenChannelData:M,getPackageMultipleProduct:q,getMultipleProductBenefitList:B,getPolicyFormAttributesMultipleProduct:J}=f.A,{Option:$,OptGroup:U}=a.Select;const z={getProducts:T,getConfigTemplates:G,getGreenChannelData:M,resetReduxStateClaim:N,getProviderList:R,getPackageMultipleProduct:q,getAutoApprovalConfigInfo:F,getMultipleProductBenefitList:B,getPolicyFormAttributesMultipleProduct:J},V=(0,n.connect)((e=>({productList:e.Insurance.products,claimConfigTemplate:e.Claims.claimConfigTemplate,benefitGroupData:e.Claims.benefitGroupData,getBenefitGroupError:e.Error.GET_BENEFIT_GROUP,getBenefitGroupLoading:e.Loading.GET_BENEFIT_GROUP_MULTIPLE_PRODUCT,providerList:e.Provider.providerList,packageList:e.Claims.packageListOnMultipleProduct,autoApprovalConfigData:e.Claims.autoApprovalConfigData,greenChannelConfigData:e.Claims.greenChannelConfigData,providerListLoading:e.Loading.GET_PROVIDER_LIST,providerListError:e.Error.GET_PROVIDER_LIST,autoApprovalConfigDataLoading:e.Loading.GET_AUTO_APPROVAL_CONFIG_INFO,getPackageListLoading:e.Loading.GET_PACKAGE_MULTIPLE_PRODUCT_LIST})),z)(a.Form.create()((function(e){const{form:t,productList:i,getProducts:n,packageList:s,providerList:l,getProviderList:p,benefitGroupData:c,providerListError:g,getConfigTemplates:u,claimConfigTemplate:f,providerListLoading:h,getGreenChannelData:m,resetReduxStateClaim:v,getPackageListLoading:x,greenChannelConfigData:b,getBenefitGroupLoading:S,autoApprovalConfigData:D,getPackageMultipleProduct:w,getAutoApprovalConfigInfo:_,getMultipleProductBenefitList:y,autoApprovalConfigDataLoading:P}=e,L=(0,r.useLocation)(),O=Object.keys(D).length?D.auto_approval_configs:b,E=(0,o.useMemo)((()=>L.pathname.includes("green")?"green_channel":"auto_approval"),[L]),{getFieldDecorator:I,getFieldError:j,isFieldTouched:k}=t,[T,R]=(0,o.useState)(void 0),[G,N]=(0,o.useState)(void 0),[F,M]=(0,o.useState)(void 0),[q,B]=(0,o.useState)(0),J=function(){const{search:e}=(0,r.useLocation)();return(0,o.useMemo)((()=>new URLSearchParams(e)),[e])}().get("configId"),z=O.benefits,V=O.config_dump_data;(0,o.useEffect)((()=>{n(),p()}),[n,p]),(0,o.useEffect)((()=>()=>{M(void 0),N(void 0),M(void 0),v(["claimConfigTemplate","autoApprovalConfigData","greenChannelConfigData"])}),[]),(0,o.useEffect)((()=>{if(s){const e={};for(const t in s){const i=s[t].map((e=>null===e||void 0===e?void 0:e.package_code));e[t.slice(t.indexOf("-")+1)]=i}"auto_approval"===E&&(e.exclude_auto_claim_amount=!0),y({body:e})}}),[s,y]),(0,o.useEffect)((()=>{G&&T&&F?u({query:{source:E}}):v(["claimConfigTemplate"])}),[F,G,u,T,v]),(0,o.useEffect)((()=>{if(J){if("auto_approval"===E){return void _({query:{auto_approval_config_id:J}})}if("green_channel"===E){m({query:{custom_config_id:J,source:E}})}}}),[J,_,m]),(0,o.useEffect)((()=>{const e=D.auto_approval_configs||O;if(e){const{insurance_provider:t,partner_product_key:o}=e;if(t&&l&&l.length){const e=l.find((e=>e.code===t));R(e||t)}if(o&&i&&i.length){const e=o.map((e=>i.find((t=>`${t.partner}-${t.name}`===e))||e));N(e)}}}),[l,i,D,O]),(0,o.useEffect)((()=>{if(Array.isArray(G)&&G.length){const e={partner_product_key:G.map((e=>`${e.partner}-${e.name}`)).join(",")};w({query:e})}else v(["packageListOnMultipleProduct","benefitGroupData"]),t.setFieldsValue({benefit:void 0})}),[G,w]),(0,o.useEffect)((()=>{const e=[];if(c&&Object.keys(c).length&&null!==z&&void 0!==z&&z.length){for(const t in c)Array.isArray(c[t])&&c[t].forEach((t=>{const{benefits:i=[]}=t;i.forEach((t=>{z.includes(t.id)&&e.push(t)}))}));t.setFieldsValue({benefit:e?e.map((e=>JSON.stringify(e))):void 0}),M(e)}}),[z,c]),(0,o.useEffect)((()=>()=>{v(["products","packageList","providerList","claimConfigData","benefitGroupData","claimConfigTemplate","autoApprovalConfigData","packageListOnMultipleProduct","claimsConfigTemplatesDetails"])}),[v]);const H=k("product")&&j("product"),K=k("package")&&j("package"),Q=()=>{t.setFieldsValue({provider:J?JSON.stringify(T):void 0,product:void 0,benefit:void 0}),R(J?T:void 0),N(void 0),M(void 0),v(["claimsConfigTemplatesDetails","claimConfigTemplate","claimConfigData","benefitGroupData","packageList","providerList","autoApprovalConfigData","packageListOnMultipleProduct"])},W=()=>{let e=[];c&&(e=Object.keys(c).map((e=>c[e].map((e=>e.benefits)))).flat(2)),t.setFieldsValue({benefit:e.map((e=>JSON.stringify(e)))}),M(e)};return(0,C.jsx)("div",{children:(0,C.jsxs)(a.Spin,{size:"large",spinning:!!P,children:[(0,C.jsx)(d,{children:(0,C.jsxs)(a.Form,{layout:"inline",className:"search-form",hideRequiredMark:!0,onReset:Q,children:[(0,C.jsx)(a.Form.Item,{label:"Provider",validateStatus:H||g?"error":"",help:H||"",children:I("provider",{initialValue:T?JSON.stringify(T):void 0})((0,C.jsx)(a.Select,{showSearch:!0,style:{width:200},placeholder:"Select Provider",onChange:e=>{let t=null;e&&(t=JSON.parse(e)),R(t||void 0)},dropdownMatchSelectWidth:!1,disabled:!(!J||!T)||q>0,loading:!!h,allowClear:!0,filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:l&&l.map((e=>(0,C.jsx)($,{value:JSON.stringify(e),children:e.name},e.id)))}))}),(0,C.jsx)(a.Form.Item,{label:"Product",validateStatus:H?"error":"",help:H||"",children:I("product",{initialValue:G?G.map((e=>JSON.stringify(e))):void 0})((0,C.jsx)(a.Select,{showSearch:!0,mode:"multiple",style:{width:200},placeholder:"Select product",onChange:e=>{if(!e)return Q();const t=e.map((e=>JSON.parse(e)));N(t.length>0?t:void 0),M(void 0)},dropdownMatchSelectWidth:!1,disabled:q>0,allowClear:!0,filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:i&&i.map((e=>(0,C.jsx)($,{value:JSON.stringify(e),children:e.display_name},e.id)))}))}),(0,C.jsx)(a.Form.Item,{label:"Benefit",validateStatus:K?"error":"",help:K||"",children:I("benefit",{initialValue:F?F.map((e=>JSON.stringify(e))):void 0})((0,C.jsx)(a.Select,{showSearch:!0,allowClear:!0,style:{width:200},placeholder:"Select a benefit",onChange:e=>{if(!e)return Q();const t=e.map((e=>JSON.parse(e)));M(t.length>0?t:void 0)},optionFilterProp:"children",dropdownMatchSelectWidth:!1,loading:!(!x&&!S),disabled:q>0,mode:"multiple",filterOption:(e,t)=>{const{children:i}=t.props;return t.type.isSelectOptGroup?i.includes((t=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0)):i.toLowerCase().indexOf(e.toLowerCase())>=0},dropdownRender:e=>(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:(0,C.jsx)("div",{onClick:W,style:{width:100,height:10},onMouseDown:e=>e.preventDefault(),children:"Select all"})}),e]}),children:(()=>{const e=[];if(c&&Object.keys(c).length)for(const t in c){const i=c[t];Array.isArray(i)&&i.forEach((i=>{const{benefits:o,package_code:n,slug:a}=i,r=o.map((e=>({label:e.name,isActive:e.is_active,value:JSON.stringify(e)}))).filter((e=>{let{isActive:t}=e;return!!t}));if(r.length){const i={label:`${t}-${n}--${a}`,options:r},o=e.findIndex((e=>e.label===`${t}-${n}--${a}`));var s;if(-1===o)e.push(i);else e[o]={label:`${t}-${n}--${a}`,options:[...(null===(s=e[o])||void 0===s?void 0:s.options)||[],...r]}}}))}return e})().map((e=>{const{label:t,options:i}=e;return(0,C.jsx)(U,{label:t,children:i.map((e=>{let{label:t,value:i}=e;return(0,C.jsx)($,{value:i,children:t},t+"-"+i)}))},JSON.stringify(t))}))}))}),(0,C.jsx)(a.Form.Item,{children:(0,C.jsx)(a.Button,{type:"danger",htmlType:"reset",disabled:q>0,children:"Clear Filter"})})]})}),T&&G&&F&&Array.isArray(F)&&F.length&&f.length?(0,C.jsx)(A,{productKey:G,benefitId:F,provider:T,configDumpData:V,configData:O,stepChangeInTemplate:e=>{B(e)}}):null]})})}))),H=V}}]);
//# sourceMappingURL=9613.b8a55a11.chunk.js.map