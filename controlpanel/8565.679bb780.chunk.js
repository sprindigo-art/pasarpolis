"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[8565],{23573:(e,t,i)=>{i.d(t,{iL:()=>l,z6:()=>r});const r={EMAIL:[{key:"Policy",value:"Policy"},{key:"Claim",value:"Claim"},{key:"Custom",value:"Custom"}],SFTP:[{key:"SFTP Creation",value:"SFTP Creation"},{key:"SFTP Claim",value:"SFTP Claim"},{key:"Custom",value:"Custom"}]},l={general_details:{report_name:{type:"string",field_type:"string",field_name:"reporting_name",required:!0},report_via:{type:"string",field_type:"string",field_name:"via",options:[{key:"EMAIL",value:"EMAIL"},{key:"SFTP",value:"SFTP"}]},report_type:{type:"string",field_type:"string",field_name:"reporting_type",options:[{key:"Policy",value:"Policy"},{key:"Claim",value:"Claim"},{key:"SFTP Creation",value:"SFTP Creation"},{key:"SFTP Claim",value:"SFTP Claim"},{key:"Custom",value:"Custom"}]},for:{type:"string",field_type:"string",field_name:"for",options:[{key:"Internal",value:"Internal"},{key:"Partner",value:"Partner"},{key:"Provider",value:"Provider"}]},target:{type:"string",field_type:"string",field_name:"target",options:[{key:"Sales/Partnership ",value:"Sales/Partnership"},{key:"Recon ",value:"Recon "},{key:"Claim ",value:"Claim "}]},subject_line:{type:"string",field_type:"string",field_name:"subject_line",required:!0}},report_distribution:{recipients_internal:{type:"emailGroup",field_type:"emailGroup",field_name:"Email Recipients (Internal)"},recipients_external:{type:"emailGroup",field_type:"emailGroup",field_name:"Email Recipients (External)"},trigger_frequency:{type:"string",field_type:"string",field_name:"triggered_in",options:[{key:"Daily",value:"Daily"},{key:"Weekly",value:"Weekly"},{key:"Monthly",value:"Monthly"}]},trigger_time:{type:"time",field_type:"time",field_name:"on"},start_date:{type:"datetime",field_type:"datetime",field_name:"start_from"}},report_query:{product_key:{type:"string",field_type:"string",field_name:"product"},package_name:{type:"string",field_type:"string",field_name:"package"},state:{type:"string",field_type:"string",field_name:"with_state",options:[{key:"COMPLETED",value:"COMPLETED"},{key:"ENDORSEMENT_COMPLETED",value:"ENDORSEMENT_COMPLETED"},{key:"CANCELLED",value:"CANCELLED"},{key:"TERMINATED",value:"TERMINATED"}]},output_format:{type:"string",field_type:"string",field_name:"file_tye",options:[{key:"csv",value:"csv"},{key:"xlsx",value:"xlsx"}]}}}},62623:(e,t,i)=>{i.d(t,{B:()=>s});var r=i(1502),l=i.n(r),a=i(67816),n=i(17823),o=i.n(n),d=i(70579);function s(e,t){const{getFieldDecorator:i}=t,{fieldName:r,type:l,label:n=" ",initialValue:s,disabled:p=!1,isMultiple:m,required:y=!1}=e,{type:x}=l;switch(x){case"string":{var h;const t=null===e||void 0===e||null===(h=e.type)||void 0===h?void 0:h.options;return t&&Array.isArray(t)?(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),style:{width:"100%"},children:i(r,{initialValue:g(s,r)})((0,d.jsx)(a.Select,{mode:m?"multiple":void 0,showSearch:!0,placeholder:m?"Select one or more":"Select an option",disabled:p,className:"dropdown-input",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,style:{width:"100%"},children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((e,t)=>(0,d.jsx)(a.Select.Option,{value:e.key?e.key:e,children:e.value?e.value:e},t)))}))},n):(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),children:i(r,{initialValue:g(s,r),rules:[{required:y,message:`Please enter ${n}`}]})((0,d.jsx)(a.Input,{disabled:"reference_id"===r}))},n)}case"datetime":return(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),children:i(r,{initialValue:o()(g(s,r))})((0,d.jsx)(a.DatePicker,{format:"YYYY-MM-DD",disabledDate:e=>e&&e<o()().startOf("day")}))},n);case"textArea":return(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),children:i(r,{initialValue:g(s,r)})((0,d.jsx)(a.Input.TextArea,{rows:4,placeholder:`Enter ${n}`}))},n);case"time":return(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),children:i(r,{initialValue:g(s,r)})((0,d.jsx)(a.Input,{type:"time",step:"1"}))},n);case"calendar":{const e=t.getFieldValue(r);return(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),children:i(r,{initialValue:g(s,r)})((0,d.jsx)(u,{value:e,onChange:e=>t.setFieldsValue({[r]:e})}))},n)}case"emailGroup":return(0,d.jsx)(a.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:n}),children:i(r,{initialValue:[],rules:[{required:y,message:`Please enter ${n}`}]})((0,d.jsx)(c,{form:t,fieldName:r,defaultValue:f(s,r)}))},n);default:return null}}const p=e=>{let{value:t,onSelect:i}=e;const r=Array.from({length:30},((e,t)=>t+1));return(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px",background:"white"},children:r.map(((e,r)=>(0,d.jsx)("div",{onClick:()=>i&&i(e),style:{textAlign:"center",padding:"2px",cursor:"pointer",backgroundColor:t===e?"#e6f7ff":"#fff"},children:e},r)))})},u=e=>{let{value:t,onChange:i}=e;const[r,n]=l().useState(!1);return(0,d.jsx)(a.Dropdown,{overlay:(0,d.jsx)(p,{value:t,onSelect:e=>{i(e),n(!1)}}),visible:r,onVisibleChange:n,trigger:["click"],children:(0,d.jsx)(a.Input,{readOnly:!0,onClick:()=>n(!0),value:t?`${t}`:"",placeholder:"Select date"})})};const c=e=>{let{form:t,fieldName:i,defaultValue:r=[{name:"",email:""}]}=e;const[n,o]=l().useState(r),s=(e,r,l)=>{const a=[...n];a[e][r]=l,o(a),t.setFieldsValue({[i]:a})};return l().useEffect((()=>{t.setFieldsValue({[i]:n})}),[]),(0,d.jsxs)("div",{children:[n.map(((e,r)=>(0,d.jsxs)("div",{style:{display:"flex",gap:"8px",marginBottom:"8px",alignItems:"center"},children:[(0,d.jsx)(a.Input,{placeholder:"Name",value:e.name,onChange:e=>s(r,"name",e.target.value)}),(0,d.jsx)(a.Input,{placeholder:"Email",value:e.email,onChange:e=>s(r,"email",e.target.value)}),(0,d.jsx)(a.Button,{shape:"circle",type:"danger",icon:"delete",onClick:()=>(e=>{const r=n.filter(((t,i)=>i!==e));o(r),t.setFieldsValue({[i]:r})})(r),disabled:1===n.length})]},r))),(0,d.jsx)(a.Button,{onClick:()=>{const e=[...n,{name:"",email:""}];o(e),t.setFieldsValue({[i]:e})},type:"dashed",style:{width:"100%"},children:"+ Add"})]})},g=(e,t)=>{const i=(null===e||void 0===e?void 0:e.length)>0&&e.find((e=>e.key===t));return i?i.value:""},f=(e,t)=>{var i,r;const l=(null===e||void 0===e?void 0:e.length)>0&&e.find((e=>"email"===e.key)),a=(null===l||void 0===l||null===(i=l.value)||void 0===i?void 0:i[t])&&Object.keys(null===l||void 0===l||null===(r=l.value)||void 0===r?void 0:r[t]),n=[];return(null===a||void 0===a?void 0:a.length)>0&&a.forEach((e=>{var i,r;n.push({name:null===l||void 0===l||null===(i=l.value)||void 0===i||null===(r=i[t])||void 0===r?void 0:r[e],email:e})})),n}},6096:(e,t,i)=>{i.d(t,{Gj:()=>p,JK:()=>y,XX:()=>d,Xi:()=>f,_1:()=>n,fR:()=>o,gN:()=>u,gx:()=>x,k8:()=>m,u7:()=>c,y:()=>s,yt:()=>g});var r=i(80878),l=i.n(r),a=i(34618);const n=l().div`
  padding: 20px 20px;
  overflow: hidden;
  width: 100%;
  .label-name {
    font-size: 18px;
  }
  .ant-card {
    width: 100%;
  }
  .table-container {
    margin-top: 20px;
  }
  .ant-table {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #f0f0f0;
  }
  .ant-table-content {
    border-radius: 12px;
    overflow: hidden;
  }
  .ant-table-row:nth-child(even) {
    background: #e8e8e8;
  }
  .ant-table-thead > tr > th {
    background-color: #f5f5f5;
    font-weight: bold;
    font-size: 12px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #d9d9d9;
  }
  .button__section {
    display: flex;
    flex-direction: row;
    .button__import_product {
      margin-right: 30px;
    }
  }
  .action-button {
    color: #1890ff;
    cursor: pointer;
  }
  .ant-table-thead > tr > th {
    background: #333;
    border: #333;
    color: #f5f5f5;
  }

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`,o=l().div`
  width: 100%;
  padding: 35px;
  background-color: #ffffff;
  margin-bottom: ${e=>e.marginBtm||"15px"};
  border-radius: ${e=>e.borderRadius||"none"};
  border: 1px solid ${(0,a.palette)("border",0)};
  height: 100%;
  .remove-filter {
    margin-left: 8px;
    cursor: pointer;
  }
  .red-row {
    background-color: #fb8c8c;
  }
  .light-red-row {
    background-color: #fee;
  }
  .break-word {
    word-break: break-word;
  }
  .fS-12 {
    font-size: 12px;
  }
  .active-class {
    color: #108ee9 !important;
  }
  .default {
    color: #aaa;
  }
  .floatL {
    left: 0;
  }
  .top-filter {
    align-self: center;
    margin-left: 5px;
    padding-left: 2px;
  }
  .policy-heading {
    float: left;
    color: #788195;
  }
  .policy-buttons {
    float: right;
    display: flex;
  }
  .policy-count {
    float: left;
    color: #4482ff;
    margin-left: 10px;
    margin-top: 3px;
  }
  .coupon-code {
    display: flex;
    padding-top: 2px;
  }
`,d=l().div`
  .detail-policy-list {
    cursor: pointer;
  }
  .gutter-row-export-csv {
    display: flex;
    justify-content: flex-end;
  }
  .ant-pagination.ant-table-pagination {
    display: block !important;
  }
  .detail-agent-list {
    cursor: pointer;
  }
  .ant-table-pagination {
    display: none;
  }
  .ant-input-group-addon:hover {
    cursor: pointer;
  }
  .ant-input-disabled {
    cursor: default;
  }
  .alert {
    margin-bottom: 20px;
  }
  .content-wrapper {
    height: 90vh;
  }
  .error-row {
    width: 100%;
  }
  .content {
    padding: 6vh;
  }
  .gutter-row-export-excel {
    display: flex;
    justify-content: space-between;
  }
  .btn-filter {
    margin-right: 10px;
  }
  .btn-container {
    display: flex;
  }
  .input-filter {
    width: 200px;
    border-radius: 0;
    margin-right: 10px;
  }
  .btn-page-size {
    margin-left: 10px;
  }
  .ant-table-body {
    overflow: scroll;
  }
  .back-button {
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .update-whitelable-btn {
    float: right;
  }
  .add-partner-config-btn {
    float: right;
  }
  .partner-table-section {
    margin-top: 10px;
    .ant-table-body {
      overflow: auto !important;
    }
  }
`,s=l().div`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #333333;
  margin-bottom: 16px;
`,p=l().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  gap: 10px;

  .ant-card-body {
    padding: 0px;
  }
`,u=l().div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=l().div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #999999;
`,g=l().div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #333333;
`,f=l().div`
  gap: 8px;
  border-radius: 10px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  background: ${e=>e.isEdit?"#00B432":"#0096FA"};
  width: fit-content;
  color: white;
  min-width: 160px;
  text-align: center;
  font-weight: 800;
  cursor: pointer;
`,m=l().div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
  margin-bottom: 32px;
  margin-top: 16px;
`,y=l().div`
    width: 160px;
    height: 40px;
    gap: 8px;
    border-radius: 10px;
    padding: 12px 16px;
    background: #FA3232;
    color: #f5f5f5;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,x=l().div`
    width: 160px;
    height: 40px;
    gap: 8px;
    border-radius: 10px;
    padding: 12px 16px;
    background: #00B432;
    color: #f5f5f5;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`},18565:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var r=i(1502),l=i(67816),a=i(6096),n=i(24952),o=i(62623),d=i(23573),s=i(88415),p=i(97418),u=i(99090),c=i(25211),g=i(92725),f=i(70579);const{TextArea:m}=l.Input,{getProductList:y,productDetailPackges:x}=s.A,{createReportingConfig:h,resetReportingConfigRedux:v}=u.A,{getPartners:b}=c.A,{getProviderList:_}=g.A,k=[{key:"sql",description:""}],j=l.Form.create()((e=>{const{getProductList:t,productList:i,getPartners:n,getProviderList:s,productDetailPackges:u,createReportingConfig:c,productDetailPackagesData:g,createReportingConfigMessage:y,resetReportingConfigRedux:x,productListLoading:h=!1,productDetailPackagesLoading:v=!1,partners:b,providerList:_}=e,[j,C]=(0,r.useState)(k),[L,P]=(0,r.useState)([]),[E,w]=(0,r.useState)([]),[S,R]=(0,r.useState)([]),[T,F]=(0,r.useState)([]);(0,r.useEffect)((()=>{t({query:{}}),n(),s()}),[]),(0,r.useEffect)((()=>{var e;if(null!==i&&void 0!==i&&null!==(e=i.data)&&void 0!==e&&e.details){var t,r;const e=null===i||void 0===i||null===(t=i.data)||void 0===t||null===(r=t.details)||void 0===r?void 0:r.map((e=>({key:e.code,value:e.name})));P(e)}}),[i]),(0,r.useEffect)((()=>{var e;if(null!==g&&void 0!==g&&null!==(e=g.data)&&void 0!==e&&e.details){var t,i;const e=null===g||void 0===g||null===(t=g.data)||void 0===t||null===(i=t.details)||void 0===i?void 0:i.map((e=>({key:e.code,value:e.name})));w(e)}}),[g]),(0,r.useEffect)((()=>{if(b&&b.length){const e=b.map((e=>({key:e.code,value:e.name})));R(e)}}),[b]),(0,r.useEffect)((()=>{if(_&&_.length){const e=_.map((e=>({key:e.code,value:e.name})));F(e)}}),[_]),(0,r.useEffect)((()=>{const{history:t}=e;y&&"success"===y&&(l.notification.success({message:"Config Created Succesfully!"}),x(["createReportingConfigMessage"]),t.push("/reporting-config"))}),[y]),(0,r.useEffect)((()=>{e.form.getFieldValue("product_key")&&(w([]),u({query:{productCode:e.form.getFieldValue("product_key")}}))}),[e.form.getFieldValue("product_key")]),(0,r.useEffect)((()=>{e.form.getFieldValue("for")&&e.form.setFieldsValue({target:""})}),[e.form.getFieldValue("for")]);const D=()=>{const{history:t}=e;t.push("/reporting-config")},V=()=>{e.form.validateFields(((e,t)=>{const i={},r={};if((t.recipients_internal||[]).forEach((e=>{e.email&&e.name&&(i[e.email]=e.name)})),(t.recipients_external||[]).forEach((e=>{e.email&&e.name&&(r[e.email]=e.name)})),!e){const e={...t,status:"Active",sql:j[0].description,recipients_internal:i,recipients_external:r,start_date:t.start_date?t.start_date.format("YYYY-MM-DD"):null};c(e)}}))},A=[{title:"SQL Query",dataIndex:"description",key:"description",render:(e,t)=>(0,f.jsx)(m,{value:t.description,rows:4,onChange:e=>((e,t)=>{const i=j.map((i=>i.key===t?{...i,description:e.target.value}:i));C(i)})(e,t.key),placeholder:"Enter description..."})},{title:"Actions",key:"actions",width:150,render:()=>(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,f.jsx)(l.Button,{style:{fontWeight:"800",textAlign:"left"},type:"link",disabled:!0,children:"View"}),(0,f.jsx)(l.Button,{style:{fontWeight:"800",textAlign:"left"},type:"link",disabled:!0,children:"Edit"}),(0,f.jsx)(l.Button,{style:{fontWeight:"800",textAlign:"left"},type:"link",disabled:!0,children:"Delete"})]})}];return(0,f.jsxs)(a._1,{children:[(0,f.jsxs)(a.k8,{onClick:D,children:[(0,f.jsx)(l.Icon,{type:"left",style:{fontSize:"24px",marginRight:8}}),(0,f.jsx)("div",{style:{fontSize:"24px",fontWeight:"800"},children:"Add Report"})]}),(0,f.jsxs)(l.Form,{hideRequiredMark:!0,children:[(0,f.jsx)(a.fR,{borderRadius:"16px",children:(0,f.jsxs)(a.XX,{children:[(0,f.jsx)(a.y,{children:"General Details"}),(0,f.jsx)(a.Gj,{children:Object.keys(d.iL.general_details).map((t=>{if(d.iL.general_details[t]&&"target"===t){const i=e.form.getFieldValue("for"),r="Partner"===i?S:"Provider"===i?T:d.iL.general_details[t].options;return(0,o.B)({fieldName:t,type:{...d.iL.general_details[t],options:r},disabled:!i,label:(0,p.Zr)(t),initialValue:{},required:!0},e.form)}if(d.iL.general_details[t]&&"report_type"===t){const i=e.form.getFieldValue("report_via"),r="EMAIL"===i?d.z6.EMAIL:"SFTP"===i?d.z6.SFTP:d.iL.general_details[t].options;return(0,o.B)({fieldName:t,type:{...d.iL.general_details[t],options:r},disabled:!i,label:(0,p.Zr)(t),initialValue:{},required:!0},e.form)}if("subject_line"===t){return"EMAIL"===e.form.getFieldValue("report_via")?(0,o.B)({fieldName:t,type:d.iL.general_details[t],label:"Subject Line",initialValue:{},required:!0},e.form):null}return d.iL.general_details[t]?(0,o.B)({fieldName:t,type:d.iL.general_details[t],label:(0,p.Zr)(t),initialValue:{},required:!0},e.form):null}))})]})}),(0,f.jsx)(a.fR,{borderRadius:"16px",children:(0,f.jsxs)(a.XX,{children:[(0,f.jsx)(a.y,{children:"Report Distribution"}),(0,f.jsx)(a.Gj,{children:Object.keys(d.iL.report_distribution).map((t=>{if(d.iL.report_distribution[t]&&"trigger_period"===t){const i=e.form.getFieldValue("trigger_frequency");return"Daily"===i?null:"monthly"===i?(0,o.B)({fieldName:t,type:{...d.iL.report_distribution[t],type:"calendar"},label:(0,p.Zr)(d.iL.report_distribution[t].field_name),initialValue:{},required:!0},e.form):(0,o.B)({fieldName:t,type:d.iL.report_distribution[t],label:(0,p.Zr)(d.iL.report_distribution[t].field_name),initialValue:{},required:!0},e.form)}return d.iL.report_distribution[t]?(0,o.B)({fieldName:t,type:d.iL.report_distribution[t],label:(0,p.Zr)(d.iL.report_distribution[t].field_name),initialValue:{},required:!0},e.form):null}))})]})}),(0,f.jsx)(a.fR,{borderRadius:"16px",children:(0,f.jsxs)(a.XX,{children:[(0,f.jsx)(a.y,{children:"Report Template"}),(0,f.jsx)(l.Table,{dataSource:j,columns:A,pagination:!1,rowKey:"key"})]})}),(0,f.jsx)(a.fR,{borderRadius:"16px",children:(0,f.jsxs)(a.XX,{children:[(0,f.jsx)(a.y,{children:"Report Query"}),(0,f.jsx)(l.Spin,{spinning:h||v,children:(0,f.jsx)(a.Gj,{children:Object.keys(d.iL.report_query).map((t=>{if(d.iL.report_query[t]&&"product_key"===t)return(0,o.B)({fieldName:t,type:{...d.iL.report_query[t],options:L},label:(0,p.Zr)(t),initialValue:{},required:!0,isMultiple:!0},e.form);if(d.iL.report_query[t]&&"package_name"===t){const i=!!e.form.getFieldValue("product_key")&&E.length;return(0,o.B)({fieldName:t,type:{...d.iL.report_query[t],options:E},disabled:!i,label:(0,p.Zr)(t),initialValue:{},required:!0,isMultiple:!0},e.form)}return d.iL.report_query[t]?(0,o.B)({fieldName:t,type:d.iL.report_query[t],label:(0,p.Zr)(t),initialValue:{},required:!0},e.form):null}))})})]})}),(0,f.jsxs)(l.Row,{type:"flex",justify:"end",style:{marginTop:24},children:[(0,f.jsx)(a.JK,{style:{marginRight:"32px"},onClick:()=>{l.Modal.confirm({title:"Are you sure you want to cancel",okText:"OK",cancelText:"Cancel",onOk:D})},children:"Cancel"}),(0,f.jsx)(a.gx,{type:"primary",onClick:e=>{l.Modal.confirm({title:(0,f.jsx)("p",{children:"Are you sure you want to Submit Form?"}),okText:"OK",cancelText:"Cancel",onOk:V})},children:"Save"})]})]})]})})),C=(0,n.connect)((e=>({productList:e.ProductConfigurable.productList,productListMessage:e.ProductConfigurable.productListMessage,productListLoading:e.Loading.GET_PRODUCT_LIST,productListError:e.Error.GET_PRODUCT_LIST,productDetailPackagesData:e.ProductConfigurable.productDetailPackges,productDetailPackagesMessage:e.ProductConfigurable.productDetailPackgesMessage,productDetailPackagesLoading:e.Loading.GET_PRODUCT_PACKGES,productDetailPackagesError:e.Error.GET_PRODUCT_PACKGES,partners:e.Insurance.partners,providerList:e.Provider.providerList,createReportingConfigMessage:e.ReportingConfigurable.createReportingConfigMessage,createReportingConfigLoading:e.Error.CREATE_REPORTING_CONFIG_DETAILS})),{getProductList:y,productDetailPackges:x,createReportingConfig:h,getPartners:b,resetReportingConfigRedux:v,getProviderList:_})(j)}}]);
//# sourceMappingURL=8565.679bb780.chunk.js.map