"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1991],{31035:(e,t,a)=>{a.d(t,{C4:()=>i,Ul:()=>s,r9:()=>o.r9,uc:()=>d});a(1502);var r=a(67816),l=a(80878),n=a.n(l),o=a(79688);a(70579);const i=n().span`
    font-size: 14px;
    border-radius: 24px;
    padding: 0 12px;
    background-color: ${e=>e.bgColor?e.bgColor:"rgb(255, 159, 10)"};
    color: #ffffff;
    margin: 2px;
    display: block;
`,s=n().ul`
    margin: 0;
    padding: 0;
    list-style-position: inside;
`,d=n()(r.Card)`
  margin: 40px 20px;
  .break-word {
    word-break: break-word;
  }
  .mt-5 {
    margin-top: 5px;
  }
  .mb-5 {
    margin-bottom: 5px;
  }
`},79688:(e,t,a)=>{a.d(t,{RN:()=>i,r9:()=>o,yN:()=>s});var r=a(80878),l=a.n(r),n=a(67816);const o=l()(n.Row)`
  margin: ${e=>"small"===e.marginSize?"10px":"20px"} 0;
  .mt-24 {
    margin-top: 15px;
  }
  .break-word {
    word-break: break-word;
  }
  .break-all {
    word-break: break-all;
  }
`,i=l()(n.Col)`
  text-align: right;
`,s=l()(n.Col)`
  text-align: center;
`;l().div`
  .ant-btn-primary{
      ${e=>e.bgColor?`background-color: ${e.bgColor}`:""}
  }
`},96084:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(69732),l=a(67816),n=a(1502),o=a(97418),i=a(54563),s=a(70579);const d=e=>{let{url:t,queryParams:a,disabled:d,buttonContent:c,buttonType:u,buttonSize:E}=e;const{exportExcelRequest:p,exportExcelData:_}=(0,i.Jc)(),{resetState:m}=(0,i.AJ)(),{resetError:R}=(0,r.useResetError)(),[{EXPORT_EXCEL_ERROR:T,exportExcelStatus:S}]=(0,r.useErrorContextValue)(),[{EXPORT_EXCEL_LOADER:g}]=(0,r.useLoaderContextValue)(),h=(0,n.useCallback)((()=>{p({url:t,...a})}),[p,t,a]);return(0,n.useEffect)((()=>{"success"===S&&_&&_.url&&(0,o.MG)(_.url)}),[_,S]),(0,n.useEffect)((()=>()=>{m(["exportExcelData"]),R(["exportExcelStatus","EXPORT_EXCEL_ERROR"])}),[R,m]),(0,n.useEffect)((()=>{T&&l.Modal.error({title:S})}),[T,S]),(0,s.jsx)(l.Button,{type:u||"primary",onClick:h,disabled:d,size:E,loading:!!g,children:c||(0,s.jsxs)(s.Fragment,{children:["Export Excel ",(0,s.jsx)(l.Icon,{type:"file-excel"})]})})}},46559:(e,t,a)=>{a.d(t,{mc:()=>d,FF:()=>c});var r=a(1502);var l=a(97418),n=a(77280);const o=(e,t)=>{const{payload:a}=t;switch(t.type){case n.kG.RESET_STATE:return{...e,...(0,l.N4)(a)};case n.kG.FILE_UPLOADS_LIST:case n.kG.GCS_UPLOAD:case n.kG.PROVIDERS_LIST:case n.kG.LEAD_CONFIG:case n.kG.MARKETING_LIST:case n.kG.CLAIM_CONFIG:case n.kG.UPLOAD_FILE_STANDALONE:case n.kG.DOWNLOAD_FILE_UPLOADS:case n.kG.CANCEL_FILE:case n.kG.FILE_ROWS:case n.kG.FILE_DETAIL:case n.kG.EXPORT_EXCEL:case n.kG.CASE_QUOTATION_REMARKS:return{...e,...a};default:return e}};var i=a(70579);const s=(0,r.createContext)(),d=e=>{let{reducer:t,children:a}=e;return(0,i.jsx)(s.Provider,{value:(0,r.useReducer)((l=[t,o],(e,t)=>l.reduce(((e,a)=>({...a(e,t)})),e)),{}),children:a});var l},c=()=>(0,r.useContext)(s)},50578:(e,t,a)=>{a.d(t,{A:()=>L});var r=a(1502),l=a(67816),n=a(37962),o=a(79688);const i="view",s="review";var d=a(80878),c=a.n(d);const{Panel:u}=l.Collapse,E=c()(u)`
  .tnc-card {
    margin-top: 20px;
    max-width: 600px;
    border-radius: 20px;
  }
  .tnc-editor {
    width: 700px;
    border: 1px solid #e8e8e8;
    padding: 10px;
    border-radius: 10px;
  }
  .m-30 {
    margin-top: 30px;
  }
  .width-100 {
    width: 100%;
  }
  .width-200 {
    width: 200px;
  }
  .plans-container {
    display: flex;
    max-width: 100%;
    justify-content: flex-start;
    overflow: auto;
  }
  .plans-table-col {
    max-width: 95%;
  }
  .add-plan-btn {
    display: flex;
    align-items: center;
    width: 50px;
    justify-content: center;
    border: 1px dashed #e8e8e8;
  }
  .draft-editor {
    min-height: 400px;
    height: 400px;
    padding-left: 20px;
  }
  .form-item {
    margin-bottom: 0;
  }
  .antd-table-row > td {
    padding: 4px 8px;
  }
  .ant-table-bordered .ant-table-body > table {
    border: none;
  }
  .ant-form-item label {
    font-weight: 600;
  }
  .benefits-cell {
    border-left: 1px solid #e8e8e8;
    font-weight: 600;
    width: 200px;
    max-width: 200px;
  }
  .benefits-header-cell {
    background-color: white;
    border-top: none;
    border-left: none;
    width: 200px;
    max-width: 200px;
  }
  .plan-header-cell {
    border-top: 1px solid #e8e8e8;
    font-weight: 600;
  }
  .display-none {
    display: none;
  }
  .tnc-heading {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
  }
  .plus-icon {
    font-size: 20px;
    font-weight: 500;
  }
  .ant-table-scroll .ant-table-fixed .benefits-cell, .ant-table-scroll .ant-table-fixed .benefits-header-cell {
    width: 20%;
  }
  .ant-table-scroll .ant-table-fixed .plan-header-cell {
    max-width: 20%;
  }
  .ant-table-scroll {
    max-width: 1000px;
    overflow-x: auto;
  }
  .ant-table-body-inner .ant-table-fixed {
    border-top: none;
    border-left: none;
  }
`,p=/^-1$|^\d+(\.\d+)*$|^\d+(\.\d+)*\/tahun$|^\d+(\.\d+)*\/hari$/,_=/^\d+(\.\d+)*$/,m="Invalid format. Allowed format is 5.000.500";function R(e,t,a,r,l){if("asuransi-jiwa"===l){let l=[{max:25,message:"TSI cannot be more than 25 characters"}];return"Yearly Limit"===a.benefit?(l.push({pattern:_,message:m}),l.push({required:!0,message:"Yearly Limit is required."}),l.push({validator:(e,t)=>{if(!t)return Promise.resolve();t=(t=String(t).split("/")[0]).replace(/\./g,"");return Number(t)>0?t.length>9?Promise.reject(new Error("Yearly limit should not have more than 9 digits")):Promise.resolve():Promise.reject(new Error("Yearly Limit should be greater than 0"))}}),l=l.slice(1)):l.push({validator:(a,l)=>{let n=e.getFieldValue(`${t}.${r}.Yearly Limit`);n=String(n).replace(/\./g,""),n=Number(n);const o=l;if(!l)return Promise.resolve();l=(l=String(l).split("/")[0]).replace(/\./g,"");const i=Number(l);return String(o).split("/").length>2||isNaN(i)?Promise.resolve():2!==String(o).split("/").length||["tahun","hari"].includes(String(o).split("/")[1])?-1===i?Promise.resolve():i>0?l.length>9?Promise.reject(new Error("TSI should not have more than 9 digits")):n&&i>n?Promise.reject(new Error("TSI should not be greater than yearly limit")):Promise.resolve():Promise.reject(new Error("TSI should be greater than 0 or -1")):Promise.reject(new Error(`Wrong TSI period - ${String(o).split("/")[1]}`))}}),l}return[{required:"inner"===e.getFieldValue(`${t}.0.limit_type`)||"Yearly Limit"===a.benefit,message:"This field is required."},{pattern:"Yearly Limit"===a.benefit?_:p,message:"Yearly Limit"===a.benefit?m:"Invalid format. Allowed formats are -1, 5.000.500, 5.000.5000/hari, 5.000.500/tahun"},{validator:(l,n)=>{let o=e.getFieldValue(`${t}.${r}.Yearly Limit`);if(o=String(o).replace(/\./g,""),o=Number(o),!n)return Promise.resolve();n=(n=String(n).split("/")[0]).replace(/\./g,"");const i=Number(n);return"Yearly Limit"===a.benefit?i>0?n.length>9?Promise.reject(new Error("Yearly limit should not have more than 9 digits")):Promise.resolve():Promise.reject(new Error("Yearly Limit should be greater than 0")):-1===i?Promise.resolve():i>0?n.length>9?Promise.reject(new Error("TSI should not have more than 9 digits")):o&&i>o?Promise.reject(new Error("TSI should not be greater than yearly limit")):Promise.resolve():Promise.reject(new Error("TSI should be greater than 0 or -1"))}}]}var T=a(70579);const{Option:S}=l.Select,g={inner:"Inner Limit",yearly:"Yearly Limit"},h={labelCol:{span:7},wrapperCol:{span:16}},A=(e,t,a,r,n,o,d,c,u)=>{n===i&&(e=e.slice(0,o.length-1));const E=[{title:null,width:200,className:"benefit-name-col",dataIndex:"benefit",onHeaderCell:()=>({className:"benefits-header-cell"}),onCell:()=>({className:"benefits-cell"}),fixed:"left"}];return e.forEach((e=>{E.push({title:(0,T.jsxs)(l.Row,{type:"flex",justify:"center",children:[(0,T.jsxs)(l.Col,{span:n===s||n===i?24:20,children:[n===s||n===i?o[e].name:(0,T.jsx)(l.Form.Item,{className:"form-item",children:a(`${t}.${e}.name`,{validateTrigger:["onBlur"],validateFirst:!0,rules:[{required:!0,message:"Plan name is required."},{min:2,message:"Plan name cannot be less than 2 characters"},{max:128,message:"Plan name cannot be greater than 128 characters"},{pattern:/^(?! ).*(?<! )$/,message:"Trailing and leading spaces are not allowed"},{pattern:/^[A-Za-z].*(?<! )$/,message:"First character should not be a special character"},{validator:(a,r,l)=>{if(r){let{[e]:a,...r}=d.getFieldValue(`${t}`);return r=Object.values(r),r.filter((e=>!!e)).map((e=>e.name)).filter((e=>!!e)).includes(a.name)?l(new Error("Plan name should be unique")):l()}l()}}]})((0,T.jsx)(l.Input,{placeholder:"Plan Name",readOnly:Boolean(!c&&o&&o[e]&&o[e].id),disabled:Boolean(!c&&o&&o[e]&&o[e].id),maxLength:128}))}),o&&o[e]&&o[e].id&&a(`${t}.${e}.id`,{initialValue:o[e].id})((0,T.jsx)(l.Input,{className:"display-none"}))]}),n===s||n===i||o&&o[e]&&o[e].id?null:(0,T.jsx)(l.Col,{span:4,children:(0,T.jsx)(l.Button,{type:"link",onClick:()=>r(e),children:(0,T.jsx)(l.Icon,{type:"delete",twoToneColor:"#ff0000",theme:"twoTone"})})})]}),render:r=>n===s||n===i?o[e][r.identifier]:(0,T.jsx)(l.Form.Item,{className:"form-item",children:a(`${t}.${e}.${r.identifier}`,{validateTrigger:["onBlur"],rules:R(d,t,r,e,u)})((0,T.jsx)(l.Input,{placeholder:"Amount",className:"width-100",readOnly:Boolean(!c&&o&&o[e]&&o[e].id),disabled:Boolean(!c&&o&&o[e]&&o[e].id)}))}),width:200,align:"center",onHeaderCell:()=>({className:"plan-header-cell"})})})),E};function D(e,t,a,r,o){switch(e){case s:return(0,T.jsx)(l.Card,{title:"Terms & Conditions",className:"tnc-card",children:(0,T.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})});case i:return null;default:return(0,T.jsxs)("div",{className:"m-30",children:[(0,T.jsx)("p",{className:"tnc-heading",children:"Terms and conditions"}),(0,T.jsx)("div",{className:"tnc-editor editor",children:(0,T.jsx)(n.Editor,{readOnly:!o,editorState:a,onEditorStateChange:r,toolbar:{options:["inline","blockType","fontSize","list","link"]},editorClassName:"draft-editor"})})]})}}const L=e=>{let{benefitGroupName:t,benefitGroupIdentifier:a,getFieldDecorator:n,benefits:d=[],plansData:c,form:u,editorsState:p,setEditorsState:_,mode:m,tnc:R,errors:L,isTsiLimitEditable:f=!0,noPlansError:y,benefitGroupSlug:P}=e;const[U,O]=(0,r.useState)(c?[...c.keys()].slice(1):[]),[C,F]=(0,r.useState)(!1),I=(0,r.useRef)(""),x=(0,r.useRef)(c?c.length:1);let b=null;c&&m!==s&&m!==i&&(b=u.getFieldValue(`${a}.0.limit_type`)),(0,r.useEffect)((()=>{if(b&&"yearly"===b){U.slice(0,c.length-1).forEach((e=>{d.forEach((t=>{u.setFieldsValue({[`${a}.${e}.Yearly Limit`]:c[e]["Yearly Limit"]})}))}))}}),[b]);(0,r.useEffect)((()=>{if(c&&m!==s&&m!==i){u.setFieldsValue({[`${a}.0.limit_type`]:c[0].limit_type});U.slice(0,c.length-1).forEach((e=>{d.forEach((t=>{let{name:r,identifier:l}=t;u.setFieldsValue({[`${a}.${e}.name`]:c[e].name}),u.setFieldsValue({[`${a}.${e}.${l}`]:c[e][l]}),"yearly"===c[0].limit_type&&u.setFieldsValue({[`${a}.${e}.Yearly Limit`]:c[e]["Yearly Limit"]})}))}))}}),[c,m]),(0,r.useEffect)((()=>{if(U.length&&"ADD"===I.current){I.current="";const e=document.getElementById(`${a}`).firstChild.firstChild;e.scrollLeft=e.scrollWidth}}),[U]);const w=(()=>{if(y)return!0;if("object"===typeof L){const e=Object.values(L);for(const t of e)if("object"===typeof t){if(Object.values(t).reduce(((e,t)=>!!t||e),!1))return!0}}})();return(0,T.jsx)(l.Collapse,{expandIconPosition:"right",expandIcon:e=>{let{isActive:t}=e;return t?(0,T.jsx)(l.Icon,{type:w?"warning":"minus-circle",theme:"twoTone",twoToneColor:w?"red":""}):(0,T.jsx)(l.Icon,{type:w?"warning":"plus-circle",theme:"twoTone",twoToneColor:w?"red":""})},...w&&{activeKey:[0]},defaultActiveKey:[0],children:(0,T.jsxs)(E,{header:t,forceRender:!0,children:[y&&(0,T.jsx)(l.Alert,{type:"error",message:"At least one plan is required per Benefit Group",banner:!0}),m!==s&&m!==i?(0,T.jsx)(l.Row,{children:(0,T.jsx)(l.Col,{span:12,children:(0,T.jsx)(l.Form.Item,{label:"Limit Type",hasFeedback:!0,...h,labelAlign:"left",children:n(`${a}.0.limit_type`,{rules:[{required:!0,message:"Limit Type is required"}]})((0,T.jsxs)(l.Select,{placeholder:"Select..",className:"width-200",disabled:!f,children:[(0,T.jsx)(S,{value:"inner",children:"Inner Limit"}),(0,T.jsx)(S,{value:"yearly",children:"Yearly Limit"})]}))})})}):(0,T.jsxs)(l.Row,{children:[(0,T.jsx)(l.Col,{span:12,children:(0,T.jsxs)(o.r9,{children:[(0,T.jsx)(l.Col,{span:7,children:(0,T.jsx)("b",{children:"Limit Type"})}),(0,T.jsx)(l.Col,{span:16,children:g[c[0].limit_type]})]})}),m===i&&(0,T.jsx)(o.RN,{span:12,children:(0,T.jsx)(l.Button,{type:"link",onClick:()=>F(!0),children:"View T&C"})})]}),(0,T.jsxs)("div",{className:"plans-container",children:[(0,T.jsx)("div",{className:"plans-table-col",children:(0,T.jsx)(l.Table,{id:`${a}`,bordered:!0,dataSource:(()=>{let e=d.map((e=>({benefit:e.name,identifier:e.identifier})));return(m!==s&&m!==i&&"yearly"===u.getFieldValue(`${a}.0.limit_type`)||c&&"yearly"===c[0].limit_type)&&e.push({benefit:"Yearly Limit",identifier:"Yearly Limit"}),m!==s&&m!==i&&"inner"===u.getFieldValue(`${a}.0.limit_type`)&&(e=e.filter((e=>{let{benefit:t}=e;return"Yearly Limit"!==t}))),e})(),columns:A(U,a,n,(e=>{const t=U.indexOf(e),a=[...U];a.splice(t,1),O(a),I.current=""}),m,c,u,f,P),size:"middle",pagination:!1,rowKey:e=>e.benefit,rowClassName:"antd-table-row"})}),m===s||m===i?null:(0,T.jsx)("div",{className:"add-plan-btn",children:(0,T.jsx)(l.Button,{type:"link",onClick:()=>{O((e=>[...e,x.current++])),I.current="ADD"},children:(0,T.jsx)(l.Icon,{type:"plus",className:"plus-icon"})})})]}),D(m,R,p,_,f),m===i&&(0,T.jsx)(l.Modal,{visible:C,title:"Terms and Conditions",onCancel:()=>F(!1),onOk:()=>F(!1),children:(0,T.jsx)("div",{dangerouslySetInnerHTML:{__html:R}})})]},0)})}},43903:(e,t,a)=>{a.d(t,{w:()=>l});var r=a(3098);const l={ADD_PRODUCT_REQUEST:"ADD_PRODUCT_REQUEST",ADD_PRODUCT:"ADD_PRODUCT",PRODUCT_DETAIL_REQUEST:"PRODUCT_DETAIL_REQUEST",PRODUCT_DETAIL:"PRODUCT_DETAIL",PRODUCT_PLANS_REQUEST:"PRODUCT_PLANS_REQUEST",PRODUCT_PLANS:"PRODUCT_PLANS",UPDATE_PRODUCT_PLANS_REQUEST:"UPDATE_PRODUCT_PLANS_REQUEST",UPDATE_PRODUCT_PLANS:"UPDATE_PRODUCT_PLANS",UPDATE_PRODUCT_INFO_REQUEST:"UPDATE_PRODUCT_INFO_REQUEST",UPDATE_PRODUCT_INFO:"UPDATE_PRODUCT_INFO",DEFAULT_BENEFIT_GROUPS_REQUEST:"DEFAULT_BENEFIT_GROUPS_REQUEST",DEFAULT_BENEFIT_GROUPS:"DEFAULT_BENEFIT_GROUPS",COMPANY_DETAIL_REQUEST:"COMPANY_DETAIL_REQUEST",COMPANY_DETAIL:"COMPANY_DETAIL",updateProductInfo:e=>({type:l.UPDATE_PRODUCT_INFO_REQUEST,payload:{...e,method:"post",url:r.A.updateProductInfo}}),updateProductPlans:e=>({type:l.UPDATE_PRODUCT_PLANS_REQUEST,payload:{...e,method:"post",url:r.A.updateProductBenefits}}),getProductPlans:e=>({type:l.PRODUCT_PLANS_REQUEST,payload:{...e,method:"get",url:r.A.getProductPlans}}),getProductDetail:e=>({type:l.PRODUCT_DETAIL_REQUEST,payload:{...e,method:"get",url:r.A.getProductDetails}}),addProduct:e=>({type:l.ADD_PRODUCT_REQUEST,payload:{...e,method:"post",url:r.A.addProduct}}),getExistingBenefitGroup:e=>({type:l.DEFAULT_BENEFIT_GROUPS_REQUEST,payload:{...e,method:"get",url:r.A.existingBenefitGroups}}),getCompanyDetails:e=>({type:l.COMPANY_DETAIL_REQUEST,payload:{...e,method:"get",url:r.A.companyDetails}})}},21098:(e,t,a)=>{a.d(t,{T:()=>r});const r={getHospitalProviders:{dataKey:"HOSPITAL_PROVIDERS_LIST",url:a(3098).A.hospitalProviders}}},29093:(e,t,a)=>{a.d(t,{X4:()=>s,ii:()=>i,vA:()=>o});var r=a(69732),l=a(46559),n=a(43903);const o=()=>{const[{addProductData:e,productDetailData:t,productPlansData:a,updateProductPlansData:o},i]=(0,l.FF)(),[s]=(0,r.useServiceRequest)(i);return{addProductRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(n.w.addProduct({body:e}))},addProductData:e,getProductDetail:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(n.w.getProductDetail({query:e}))},productDetailData:t,getProductPlans:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(n.w.getProductPlans({query:e}))},productPlansData:a,updateProductPlansRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(n.w.updateProductPlans({body:e}))},updateProductPlansData:o,updateProductInfoRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(n.w.updateProductInfo({body:e}))}}},i=()=>{const[{defaultBenefitGroupsData:e},t]=(0,l.FF)(),[a]=(0,r.useServiceRequest)(t);return{defaultBenefitGroupsData:e,defaultBenefitGroupsRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(n.w.getExistingBenefitGroup({query:e}))}}},s=()=>{const[{companyDetailData:e},t]=(0,l.FF)(),[a]=(0,r.useServiceRequest)(t);return{companyDetailData:e,companyDetailRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(n.w.getCompanyDetails({query:e}))}}}},51088:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(43903);const l=(e,t)=>{const{payload:a}=t;switch(t.type){case r.w.ADD_PRODUCT:case r.w.PRODUCT_DETAIL:case r.w.PRODUCT_PLANS:case r.w.UPDATE_PRODUCT_PLANS:case r.w.UPDATE_PRODUCT_INFO:case r.w.DEFAULT_BENEFIT_GROUPS:case r.w.COMPANY_DETAIL:return{...e,...a};default:return e}}},77280:(e,t,a)=>{a.d(t,{f9:()=>n,kG:()=>l,w0:()=>o});var r=a(3098);const l={RESET_STATE:"RESET_STATE",GCS_UPLOAD_REQUEST:"GCS_UPLOAD_REQUEST",GCS_UPLOAD:"GCS_UPLOAD",PROVIDERS_LIST_REQUEST:"PROVIDER_LIST_REQUEST",PROVIDERS_LIST:"PROVIDER_LIST",LEAD_CONFIG_REQUEST:"LEAD_CONFIG_REQUEST",LEAD_CONFIG:"LEAD_CONFIG",MARKETING_LIST_REQUEST:"MARKETING_LIST_REQUEST",MARKETING_LIST:"MARKETING_LIST",DOWNLOAD_FILE_FROM_GCS_REQUEST:"DOWNLOAD_FILE_FROM_GCS_REQUEST",CLAIM_CONFIG_REQUEST:"CLAIM_CONFIG_REQUEST",CLAIM_CONFIG:"CLAIM_CONFIG",UPLOAD_FILE_STANDALONE_REQUEST:"UPLOAD_FILE_STANDALONE_REQUEST",UPLOAD_FILE_STANDALONE:"UPLOAD_FILE_STANDALONE",FILE_UPLOADS_LIST_REQUEST:"FILE_UPLOADS_LIST_REQUEST",FILE_UPLOADS_LIST:"FILE_UPLOADS_LIST",DOWNLOAD_FILE_UPLOADS_REQUEST:"DOWNLOAD_FILE_UPLOADS_REQUEST",DOWNLOAD_FILE_UPLOADS:"DOWNLOAD_FILE_UPLOADS",CANCEL_FILE_REQUEST:"CANCEL_FILE_REQUEST",CANCEL_FILE:"CANCEL_FILE",FILE_DETAIL_REQUEST:"FILE_DETAIL_REQUEST",FILE_DETAIL:"FILE_DETAIL",FILE_ROWS_REQUEST:"FILE_ROWS_REQUEST",FILE_ROWS:"FILE_ROWS",EXPORT_EXCEL_REQUEST:"EXPORT_EXCEL_REQUEST",EXPORT_EXCEL:"EXPORT_EXCEL",CASE_QUOTATION_REMARKS_REQUEST:"CASE_QUOTATION_REMARKS_REQUEST",CASE_QUOTATION_REMARKS:"CASE_QUOTATION_REMARKS",resetState:e=>({type:l.RESET_STATE,payload:e}),gcsUpload:e=>({type:l.GCS_UPLOAD_REQUEST,payload:{...e,method:"uploadFileOnGcs",signedUrl:r.A.generateSignedUrl}}),uploadFileStandAlone:e=>({type:l.UPLOAD_FILE_STANDALONE_REQUEST,payload:{...e,method:"uploadFile",signedUrl:r.A.generateSignedUrl}}),getProvidersList:e=>({type:l.PROVIDERS_LIST_REQUEST,payload:{...e,method:"get",url:r.A.providersList}}),getLeadConfig:e=>({type:l.LEAD_CONFIG_REQUEST,payload:{...e,method:"get",url:r.A.getLeadConfig}}),updateLeadConfig:e=>({type:l.LEAD_CONFIG,payload:{leadConfigData:e}}),updateClaimConfig:e=>({type:l.CLAIM_CONFIG,payload:{claimConfigData:e}}),getMarketingList:e=>({type:l.MARKETING_LIST_REQUEST,payload:{...e,method:"get",url:r.A.getMarketing}}),downloadFileFromGcs:e=>({type:l.DOWNLOAD_FILE_FROM_GCS_REQUEST,payload:{...e,method:"downloadFileFromGcs",signedUrl:r.A.generateSignedUrl}}),getClaimConfig:e=>({type:l.CLAIM_CONFIG_REQUEST,payload:{...e,method:"get",url:r.A.getClaimConfig}}),getFileUploadsList:e=>({type:l.FILE_UPLOADS_LIST_REQUEST,payload:{...e,method:"get",url:r.A.fileUploadListCommon}}),downloadFileUploads:e=>({type:l.DOWNLOAD_FILE_UPLOADS_REQUEST,payload:{...e,method:"get",url:r.A.downloadFileUploads}}),cancelFile:e=>({type:l.CANCEL_FILE_REQUEST,payload:{...e,method:"post"}}),getFileDetail:e=>({type:l.FILE_DETAIL_REQUEST,payload:{...e,method:"get",url:r.A.fileDetail}}),getFileRows:e=>({type:l.FILE_ROWS_REQUEST,payload:{...e,method:"get",url:r.A.fileRows}}),exportExcel:e=>({type:l.EXPORT_EXCEL,payload:{...e,method:"get"}}),caseQuotationRemarks:e=>({type:l.CASE_QUOTATION_REMARKS_REQUEST,payload:{...e,method:"get"}})},n={ERROR_UPDATE:"ERROR_UPDATE",STATE_RESET:"STATE_RESET"},o={LOADER_UPDATE:"LOADER_UPDATE"}},54563:(e,t,a)=>{a.d(t,{AJ:()=>u,FD:()=>R,Fh:()=>A,Hu:()=>f,Jc:()=>L,OA:()=>p,RF:()=>D,_y:()=>_,kB:()=>g,mo:()=>h,uw:()=>T,v8:()=>S,vB:()=>E,zx:()=>m});var r=a(69732),l=a(97418),n=a(46559),o=a(77280),i=a(68940),s=a(95916),d=a.n(s),c=a(1502);const u=()=>{const[,e]=(0,n.FF)();return{resetState:(0,c.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(o.kG.resetState(t))}),[e])}},E=()=>{const[{providerListData:e},t]=(0,n.FF)(),[a]=(0,r.useServiceRequest)(t);return{providerListData:e,providerListRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(o.kG.getProvidersList(e))}}},p=()=>{const e="lead-dashboard-config-data",t=(0,l._9)(e),[{leadConfigData:a},i]=(0,n.FF)();t||!a||d().isEmpty(a)||window.sessionStorage.setItem(e,JSON.stringify(a));const[s]=(0,r.useServiceRequest)(i),u=(0,c.useCallback)((function(){const t=(0,l._9)(e);t?i(o.kG.updateLeadConfig(t)):s(o.kG.getLeadConfig())}),[i,s]);return{leadConfigData:a,leadConfigRequest:u}},_=()=>{const[{marketingListData:e},t]=(0,n.FF)(),[a]=(0,r.useServiceRequest)(t);return{marketingListData:e,marketingListRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(o.kG.getMarketingList({query:e}))}}},m=()=>{const[,e]=(0,n.FF)(),[t]=(0,i.A)(e);return{downloadRequest:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await t(o.kG.downloadFileFromGcs({signedUrlBody:e}))}}},R=()=>{const e="eb-claim-dashboard-config-data",t=(0,l._9)(e),[{claimConfigData:a},i]=(0,n.FF)();t||!a||d().isEmpty(a)||window.sessionStorage.setItem(e,JSON.stringify(a));const[s]=(0,r.useServiceRequest)(i),u=(0,c.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=(0,l._9)(e);a?i(o.kG.updateClaimConfig(a)):s(o.kG.getClaimConfig({query:t}))}),[s,i]);return{claimConfigData:a,claimConfigRequest:u}},T=()=>{const[{uploadFileStandAloneData:e},t]=(0,n.FF)(),{resetState:a}=u(),{resetError:l}=(0,r.useResetError)(),[s]=(0,i.A)(t);return{uploadFileStandAloneData:e,uploadRequest:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(["uploadFileStandaloneData"]),l(["UPDLOAD_FILE_STANDALONE_ERROR","uploadFileStandAloneStatus"]),await s(o.kG.uploadFileStandAlone(e))}}},S=()=>{const[{fileUploadsListData:e,fileUploadsListStatus:t},a]=(0,n.FF)(),[l]=(0,r.useServiceRequest)(a);return[{fileUploadsListData:e,fileUploadsListStatus:t},async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(o.kG.getFileUploadsList({query:e}))}]},g=()=>{const[{downloadFileUploadsData:e,downloadFileUploadsStatus:t},a]=(0,n.FF)(),[l]=(0,r.useServiceRequest)(a);return[{downloadFileUploadsData:e,downloadFileUploadsStatus:t},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(o.kG.downloadFileUploads({query:e}))}]},h=()=>{const[{cancelFileData:e,cancelFileStatus:t},a]=(0,n.FF)(),[l]=(0,r.useServiceRequest)(a);return{cancelFileData:e,cancelFileStatus:t,cancelFileRequest:e=>{let{url:t,...a}=e;l(o.kG.cancelFile({body:a,url:t}))}}},A=()=>{const[{fileDetailStatus:e,fileDetailData:t},a]=(0,n.FF)(),[l]=(0,r.useServiceRequest)(a);return{fileDetailStatus:e,fileDetailData:t,getFileDetail:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(o.kG.getFileDetail({query:e}))}}},D=()=>{const[{fileRowsStatus:e,fileRowsData:t},a]=(0,n.FF)(),{resetError:l}=(0,r.useResetError)(),[i]=(0,r.useServiceRequest)(a);return{fileRowsStatus:e,fileRowsData:t,getFileRows:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(["FILE_ROWS_ERROR"]),i(o.kG.getFileRows({query:e}))}}},L=()=>{const[{exportExcelData:e},t]=(0,n.FF)(),[a]=(0,r.useServiceRequest)(t);return{exportExcelData:e,exportExcelRequest:e=>{let{url:t,...r}=e;a(o.kG.exportExcel({query:r,url:t}))}}},f=()=>{const[{caseQuotationRemarksData:e},t]=(0,n.FF)(),[a]=(0,r.useServiceRequest)(t);return{getRemarks:(0,c.useCallback)((e=>{let{url:t,...r}=e;a(o.kG.caseQuotationRemarks({query:r,url:t}))}),[a]),caseQuotationRemarksData:e}}},68940:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(69732),l=a(95916),n=a(97418),o=a(79721),i=a(77280);const s=function(e){const[,t]=(0,r.useLoaderContextValue)(),[,a]=(0,r.useErrorContextValue)()||[{},()=>{}];return[async r=>{let{type:s,payload:d}=r;const{method:c}=d,u=s.replace(/_REQUEST/g,""),E=(0,l.camelCase)(u);t({type:i.w0.LOADER_UPDATE,payload:{[`${u}_LOADER`]:!0}});const p=o.A[c];let _={};try{_=await p({...d})}catch(m){_=m}e({type:`${u}`,payload:{[`${E}Data`]:[200,201,202].includes(_.status)?_.data:{}}}),a({type:i.f9.ERROR_UPDATE,payload:{[`${u}_ERROR`]:![200,201,202].includes(_.status),[`${E}Status`]:[200,201,202].includes(_.status)?"success":(0,n.u1)(_.status,void 0,_.data),[`${E}StatusCode`]:_.status,[`${E}ErrorData`]:[200,201,202].includes(_.status)?void 0:_.data}}),t({type:i.w0.LOADER_UPDATE,payload:{[`${u}_LOADER`]:!1}})}]}},79721:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(17025),l=a(35891),n=a(45220),o=a(68472),i=a(88204),s=a.n(i),d=a(93807),c=a(97418),u=a(99978);const E=e=>{let{signedUrl:t="",query:a={},body:r={},params:l={},signedUrlBody:n={},customReturnData:o={}}=e;const i=(0,d.A)(a),E=`${(0,u.A)(t,l)}${i}`;return s().post(E,n,{headers:(0,c._b)()}).then((e=>{const{data:t}=e;return s().put(t.signed_url,r.file,{headers:{"Content-type":r.file.type}}).then((e=>{e.data={url:t.url};for(let t in o)e.data[t]=o[t];return e})).catch((e=>{e.data={};for(let t in o)e.data[t]=o[t];throw e}))})).catch((e=>{e.data={};for(let t in o)e.data[t]=o[t];throw e.response,e}))},p=e=>{let{signedUrl:t="",query:a={},body:r={},params:l={},signedUrlBody:n={}}=e;const o=(0,d.A)(a),i=`${(0,u.A)(t,l)}${o}`;return s().post(i,n,{headers:(0,c._b)()}).then((e=>{const{data:t}=e;return(0,c.A5)(t.signed_url),e})).catch((e=>{if(e.response)return e.response;throw e}))};({axiosInterceptorRequest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};s().interceptors.request.use((t=>{const a=e();return a?(t.params={...t.params,...a},t):t}),(e=>Promise.reject(e)))}}).axiosInterceptorRequest((function(){if(window.location.pathname.includes("agent/vn"))return{cc:"vn"}}));const _={authGet:r.A,authPost:l.A,authPut:n.A,uploadFile:o.A,uploadFileOnGcs:E,downloadFileFromGcs:p}},68472:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(88204),l=a.n(r),n=a(93807),o=a(97418),i=a(99978);const s=e=>{let{url:t="",uploadUrl:a="",signedUrl:r="",query:s={},body:d={},params:c={},signedUrlBody:u={},uploadBody:E={},customReturnData:p={},urlKey:_="document_url"}=e;const m=(0,n.A)(s),R=`${(0,i.A)(r,c)}${m}`,T=`${(0,i.A)(a,c)}`;return l().post(R,u,{headers:(0,o._b)()}).then((e=>{const{data:t}=e;return l().put(t.signed_url,d.file,{headers:{"Content-type":d.file.type}}).then((e=>l().post(T,{[_]:t.url,...E},{headers:(0,o._b)()}).then((e=>{for(const t in p)e.data[t]=p[t];return e})).catch((e=>{throw e.response?e.response:e})))).catch((e=>{throw e.response?e.response:e}))})).catch((e=>{throw e.response?e.response:e}))}}}]);
//# sourceMappingURL=1991.4dc08b55.chunk.js.map