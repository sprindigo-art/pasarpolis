"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2628],{23573:(e,t,i)=>{i.d(t,{iL:()=>n,z6:()=>r});const r={EMAIL:[{key:"Policy",value:"Policy"},{key:"Claim",value:"Claim"},{key:"Custom",value:"Custom"}],SFTP:[{key:"SFTP Creation",value:"SFTP Creation"},{key:"SFTP Claim",value:"SFTP Claim"},{key:"Custom",value:"Custom"}]},n={general_details:{report_name:{type:"string",field_type:"string",field_name:"reporting_name",required:!0},report_via:{type:"string",field_type:"string",field_name:"via",options:[{key:"EMAIL",value:"EMAIL"},{key:"SFTP",value:"SFTP"}]},report_type:{type:"string",field_type:"string",field_name:"reporting_type",options:[{key:"Policy",value:"Policy"},{key:"Claim",value:"Claim"},{key:"SFTP Creation",value:"SFTP Creation"},{key:"SFTP Claim",value:"SFTP Claim"},{key:"Custom",value:"Custom"}]},for:{type:"string",field_type:"string",field_name:"for",options:[{key:"Internal",value:"Internal"},{key:"Partner",value:"Partner"},{key:"Provider",value:"Provider"}]},target:{type:"string",field_type:"string",field_name:"target",options:[{key:"Sales/Partnership ",value:"Sales/Partnership"},{key:"Recon ",value:"Recon "},{key:"Claim ",value:"Claim "}]},subject_line:{type:"string",field_type:"string",field_name:"subject_line",required:!0}},report_distribution:{recipients_internal:{type:"emailGroup",field_type:"emailGroup",field_name:"Email Recipients (Internal)"},recipients_external:{type:"emailGroup",field_type:"emailGroup",field_name:"Email Recipients (External)"},trigger_frequency:{type:"string",field_type:"string",field_name:"triggered_in",options:[{key:"Daily",value:"Daily"},{key:"Weekly",value:"Weekly"},{key:"Monthly",value:"Monthly"}]},trigger_time:{type:"time",field_type:"time",field_name:"on"},start_date:{type:"datetime",field_type:"datetime",field_name:"start_from"}},report_query:{product_key:{type:"string",field_type:"string",field_name:"product"},package_name:{type:"string",field_type:"string",field_name:"package"},state:{type:"string",field_type:"string",field_name:"with_state",options:[{key:"COMPLETED",value:"COMPLETED"},{key:"ENDORSEMENT_COMPLETED",value:"ENDORSEMENT_COMPLETED"},{key:"CANCELLED",value:"CANCELLED"},{key:"TERMINATED",value:"TERMINATED"}]},output_format:{type:"string",field_type:"string",field_name:"file_tye",options:[{key:"csv",value:"csv"},{key:"xlsx",value:"xlsx"}]}}}},62623:(e,t,i)=>{i.d(t,{B:()=>s});var r=i(1502),n=i.n(r),l=i(67816),a=i(17823),o=i.n(a),d=i(70579);function s(e,t){const{getFieldDecorator:i}=t,{fieldName:r,type:n,label:a=" ",initialValue:s,disabled:p=!1,isMultiple:y,required:x=!1}=e,{type:m}=n;switch(m){case"string":{var v;const t=null===e||void 0===e||null===(v=e.type)||void 0===v?void 0:v.options;return t&&Array.isArray(t)?(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),style:{width:"100%"},children:i(r,{initialValue:g(s,r)})((0,d.jsx)(l.Select,{mode:y?"multiple":void 0,showSearch:!0,placeholder:y?"Select one or more":"Select an option",disabled:p,className:"dropdown-input",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,style:{width:"100%"},children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((e,t)=>(0,d.jsx)(l.Select.Option,{value:e.key?e.key:e,children:e.value?e.value:e},t)))}))},a):(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),children:i(r,{initialValue:g(s,r),rules:[{required:x,message:`Please enter ${a}`}]})((0,d.jsx)(l.Input,{disabled:"reference_id"===r}))},a)}case"datetime":return(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),children:i(r,{initialValue:o()(g(s,r))})((0,d.jsx)(l.DatePicker,{format:"YYYY-MM-DD",disabledDate:e=>e&&e<o()().startOf("day")}))},a);case"textArea":return(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),children:i(r,{initialValue:g(s,r)})((0,d.jsx)(l.Input.TextArea,{rows:4,placeholder:`Enter ${a}`}))},a);case"time":return(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),children:i(r,{initialValue:g(s,r)})((0,d.jsx)(l.Input,{type:"time",step:"1"}))},a);case"calendar":{const e=t.getFieldValue(r);return(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),children:i(r,{initialValue:g(s,r)})((0,d.jsx)(u,{value:e,onChange:e=>t.setFieldsValue({[r]:e})}))},a)}case"emailGroup":return(0,d.jsx)(l.Form.Item,{label:(0,d.jsx)("b",{style:{fontSize:"12px"},children:a}),children:i(r,{initialValue:[],rules:[{required:x,message:`Please enter ${a}`}]})((0,d.jsx)(c,{form:t,fieldName:r,defaultValue:f(s,r)}))},a);default:return null}}const p=e=>{let{value:t,onSelect:i}=e;const r=Array.from({length:30},((e,t)=>t+1));return(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px",background:"white"},children:r.map(((e,r)=>(0,d.jsx)("div",{onClick:()=>i&&i(e),style:{textAlign:"center",padding:"2px",cursor:"pointer",backgroundColor:t===e?"#e6f7ff":"#fff"},children:e},r)))})},u=e=>{let{value:t,onChange:i}=e;const[r,a]=n().useState(!1);return(0,d.jsx)(l.Dropdown,{overlay:(0,d.jsx)(p,{value:t,onSelect:e=>{i(e),a(!1)}}),visible:r,onVisibleChange:a,trigger:["click"],children:(0,d.jsx)(l.Input,{readOnly:!0,onClick:()=>a(!0),value:t?`${t}`:"",placeholder:"Select date"})})};const c=e=>{let{form:t,fieldName:i,defaultValue:r=[{name:"",email:""}]}=e;const[a,o]=n().useState(r),s=(e,r,n)=>{const l=[...a];l[e][r]=n,o(l),t.setFieldsValue({[i]:l})};return n().useEffect((()=>{t.setFieldsValue({[i]:a})}),[]),(0,d.jsxs)("div",{children:[a.map(((e,r)=>(0,d.jsxs)("div",{style:{display:"flex",gap:"8px",marginBottom:"8px",alignItems:"center"},children:[(0,d.jsx)(l.Input,{placeholder:"Name",value:e.name,onChange:e=>s(r,"name",e.target.value)}),(0,d.jsx)(l.Input,{placeholder:"Email",value:e.email,onChange:e=>s(r,"email",e.target.value)}),(0,d.jsx)(l.Button,{shape:"circle",type:"danger",icon:"delete",onClick:()=>(e=>{const r=a.filter(((t,i)=>i!==e));o(r),t.setFieldsValue({[i]:r})})(r),disabled:1===a.length})]},r))),(0,d.jsx)(l.Button,{onClick:()=>{const e=[...a,{name:"",email:""}];o(e),t.setFieldsValue({[i]:e})},type:"dashed",style:{width:"100%"},children:"+ Add"})]})},g=(e,t)=>{const i=(null===e||void 0===e?void 0:e.length)>0&&e.find((e=>e.key===t));return i?i.value:""},f=(e,t)=>{var i,r;const n=(null===e||void 0===e?void 0:e.length)>0&&e.find((e=>"email"===e.key)),l=(null===n||void 0===n||null===(i=n.value)||void 0===i?void 0:i[t])&&Object.keys(null===n||void 0===n||null===(r=n.value)||void 0===r?void 0:r[t]),a=[];return(null===l||void 0===l?void 0:l.length)>0&&l.forEach((e=>{var i,r;a.push({name:null===n||void 0===n||null===(i=n.value)||void 0===i||null===(r=i[t])||void 0===r?void 0:r[e],email:e})})),a}},6096:(e,t,i)=>{i.d(t,{Gj:()=>p,JK:()=>x,XX:()=>d,Xi:()=>f,_1:()=>a,fR:()=>o,gN:()=>u,gx:()=>m,k8:()=>y,u7:()=>c,y:()=>s,yt:()=>g});var r=i(80878),n=i.n(r),l=i(34618);const a=n().div`
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
`,o=n().div`
  width: 100%;
  padding: 35px;
  background-color: #ffffff;
  margin-bottom: ${e=>e.marginBtm||"15px"};
  border-radius: ${e=>e.borderRadius||"none"};
  border: 1px solid ${(0,l.palette)("border",0)};
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
`,d=n().div`
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
`,s=n().div`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #333333;
  margin-bottom: 16px;
`,p=n().div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  gap: 10px;

  .ant-card-body {
    padding: 0px;
  }
`,u=n().div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=n().div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #999999;
`,g=n().div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #333333;
`,f=n().div`
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
`,y=n().div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
  margin-bottom: 32px;
  margin-top: 16px;
`,x=n().div`
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
`,m=n().div`
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
`},50247:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var r=i(67816),n=i(6096),l=i(99090),a=i(24952),o=i(1502),d=i(79471),s=i(62623),p=i(23573),u=i(88415),c=i(97418),g=i(70579);const{TextArea:f}=r.Input,{getProductList:y,productDetailPackges:x}=u.A,{updateReportingConfig:m,resetReportingConfigRedux:v,getReportLogs:h,updateReportLogs:_,getUpdateLogs:b}=l.A,j=(0,a.connect)((e=>({reportingConfigDetails:e.ReportingConfigurable.reportingConfigDetails,getReportingDetailsMessage:e.ReportingConfigurable.getReportingDetailsMessage,reportingDetailsLoading:e.Loading.GET_REPORTING_CONFIG_DETAILS,productList:e.ProductConfigurable.productList,productListMessage:e.ProductConfigurable.productListMessage,productListLoading:e.Loading.GET_PRODUCT_LIST,productListError:e.Error.GET_PRODUCT_LIST,productDetailPackagesData:e.ProductConfigurable.productDetailPackges,productDetailPackagesMessage:e.ProductConfigurable.productDetailPackgesMessage,productDetailPackagesLoading:e.Loading.GET_PRODUCT_PACKGES,productDetailPackagesError:e.Error.GET_PRODUCT_PACKGES,updateReportingConfigMessage:e.ReportingConfigurable.updateReportingConfigMessage,updateReportingConfigLoading:e.Error.UPDATE_REPORTING_CONFIG_DETAILS,reportLogsData:e.ReportingConfigurable.reportLogs,reportLogsLoading:e.Loading.GET_REPORT_LOG,reportLogsMessage:e.ReportingConfigurable.reportLogsMessage,updateReportLogsData:e.ReportingConfigurable.updateReportLogs,updateReportLogsMessage:e.ReportingConfigurable.updateReportLogsMessage,updateLogsData:e.ReportingConfigurable.updateLogs,updateLogsLoading:e.Loading.GET_UPDATE_LOG,updateLogsMessage:e.ReportingConfigurable.updateLogsMessage})),{getReportingConfigDetails:l.A.getReportingConfigDetails,getProductList:y,productDetailPackges:x,updateReportingConfig:m,resetReportingConfigRedux:v,getReportLogs:h,updateReportLogs:_,getUpdateLogs:b})(r.Form.create()((e=>{var t,i,l,a,u;let{getReportingConfigDetails:y,reportingDetailsLoading:x,reportingConfigDetails:m,...v}=e;const{getProductList:h,productList:_,productDetailPackges:b,productDetailPackagesData:j,productListLoading:k=!1,productDetailPackagesLoading:L=!1,updateReportingConfig:C,updateReportingConfigMessage:R,resetReportingConfigRedux:E,getReportLogs:D,reportLogsData:w,reportLogsLoading:S,updateReportLogsData:T,updateReportLogsMessage:P,updateReportLogs:M,getUpdateLogs:q,updateLogsData:F,updateLogsLoading:O}=v,{id:I}=(0,d.useParams)(),[A,N]=(0,o.useState)({}),[V,G]=(0,o.useState)({reportDistribution:!0,reportTemplate:!0,reportQuery:!0}),[z,B]=(0,o.useState)([]),[X,Y]=(0,o.useState)([]),[U,W]=(0,o.useState)([{sql:"",isEdit:!1}]),[Q,$]=(0,o.useState)({}),[K,Z]=(0,o.useState)({});(0,o.useEffect)((()=>{y({id:I}),h({query:{}})}),[]),(0,o.useEffect)((()=>{R&&"success"===R&&(r.notification.success({message:"Config Updated Succesfully!"}),E(["updateReportingConfigMessage"]),y({id:I}))}),[R]),(0,o.useEffect)((()=>{var e;if(null!==_&&void 0!==_&&null!==(e=_.data)&&void 0!==e&&e.details){var t,i;const e=null===_||void 0===_||null===(t=_.data)||void 0===t||null===(i=t.details)||void 0===i?void 0:i.map((e=>({key:e.code,value:e.name})));B(e)}}),[_]),(0,o.useEffect)((()=>{var e;if(null!==j&&void 0!==j&&null!==(e=j.data)&&void 0!==e&&e.details){var t,i;const e=null===j||void 0===j||null===(t=j.data)||void 0===t||null===(i=t.details)||void 0===i?void 0:i.map((e=>({key:e.code,value:e.name})));Y(e)}}),[j]),(0,o.useEffect)((()=>{null!==Q&&void 0!==Q&&Q.dag_id&&D({query:Q})}),[Q]),(0,o.useEffect)((()=>{null!==K&&void 0!==K&&K.report_id&&q({query:{page_size:K.page_size,page:K.page},id:K.report_id})}),[K]),(0,o.useEffect)((()=>{v.form.getFieldValue("product_key")&&(Y([]),b({query:{productCode:v.form.getFieldValue("product_key")}}))}),[v.form.getFieldValue("product_key")]),(0,o.useEffect)((()=>{var e,t,i;null!==m&&void 0!==m&&m.results&&m.results.length&&(N(m.results[0]),W([{sql:null===(e=m.results[0])||void 0===e?void 0:e.sql,isEdit:!1}]),$({dag_id:null===(t=m.results[0])||void 0===t?void 0:t.dag_id,offset:0,limit:10}),Z({report_id:null===(i=m.results[0])||void 0===i?void 0:i.id,page:1,page_size:10}))}),[m]),(0,o.useEffect)((()=>{var e;P&&"success"===P?(r.notification.success({message:null!==(e=null===T||void 0===T?void 0:T.message)&&void 0!==e?e:"DAG Retriggered successfully"}),D({query:Q})):P&&"error"===P&&r.notification.error({message:"Something Wrong when Retriggering DAG"})}),[P]);const J=(0,o.useMemo)((()=>{const e=[{key:"1",name:(0,g.jsx)("strong",{children:"Report Name"}),value:A.report_name||"-"},{key:"2",name:(0,g.jsx)("strong",{children:"Reporting Type"}),value:A.report_type||"-"},{key:"3",name:(0,g.jsx)("strong",{children:"Via"}),value:A.report_via||"-"},{key:"4",name:(0,g.jsx)("strong",{children:"For"}),value:A.channel||"-"},{key:"5",name:(0,g.jsx)("strong",{children:"Target"}),value:A.report_via||"-"}];var t;"EMAIL"===A.report_via&&e.push({key:"6",name:(0,g.jsx)("strong",{children:"Subject Line"}),value:(null===(t=A.extra_data)||void 0===t?void 0:t.subject_line)||"-"});return e}),[A]),H=(0,o.useMemo)((()=>{const{recipients_internal:e={},recipients_external:t={}}=A;return[{key:"email",name:(0,g.jsx)("strong",{children:"Email Recipients"}),value:{recipients_internal:e,recipients_external:t}||{}},{key:"trigger_frequency",name:(0,g.jsx)("strong",{children:"Triggered in"}),value:A.trigger_frequency||"-"},{key:"trigger_period",name:(0,g.jsx)("strong",{children:"Basis Every"}),value:A.trigger_period||"-"},{key:"trigger_time",name:(0,g.jsx)("strong",{children:"On"}),value:`${A.trigger_time} UTC`||"-",style:{width:"100%"}},{key:"start_date",name:(0,g.jsx)("strong",{children:"Start From"}),value:A.start_date||"-"}]}),[A]),ee=(0,o.useMemo)((()=>{var e,t;return[{key:"product_key",name:(0,g.jsx)("strong",{children:"Product"}),value:(null===A||void 0===A||null===(e=A.extra_data)||void 0===e?void 0:e.product_key)||"-"},{key:"package_name",name:(0,g.jsx)("strong",{children:"Packages"}),value:(null===A||void 0===A||null===(t=A.extra_data)||void 0===t?void 0:t.package_name)||"-"},{key:"state",name:(0,g.jsx)("strong",{children:"With State"}),value:A.state||"-"},{key:"output_format",name:(0,g.jsx)("strong",{children:"File Type"}),value:A.output_format||"-"}]}),[A]),te=[{key:"no",title:"No",render:(e,t,i)=>(0,g.jsx)("p",{children:(null===K||void 0===K?void 0:K.page)+i})},{key:"updated_at",title:"Updated On",render:(e,t)=>(0,g.jsx)("p",{children:(0,c.Yq)(t.updated_at,"YYYY-MM-DD HH:mm:ss")})},{key:"attributes",title:"Attributes",render:(e,t)=>(0,g.jsx)("p",{children:(0,c.Zr)(t.attributes)})},{key:"changes_from",title:"Changes From",render:(e,t)=>(0,g.jsx)("p",{children:(0,c.mX)(t.changes_from)})},{key:"changes_to",title:"Changes Into",render:(e,t)=>(0,g.jsx)("p",{children:(0,c.mX)(t.changes_to)})},{key:"changed_by",title:"Changed By",dataIndex:"changed_by"}],ie=[{key:"no",title:"No",render:(e,t,i)=>{var r;return(0,g.jsx)("p",{children:(null!==(r=null===Q||void 0===Q?void 0:Q.offset)&&void 0!==r?r:0)+i+1})}},{key:"execution_date",title:"Sent At",dataIndex:"execution_date"},{key:"state",title:"Status",dataIndex:"state"},{key:"actions",title:"Actions",render:(e,t)=>(0,g.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:(0,g.jsx)(r.Button,{style:{color:"#0096FA",fontWeight:"800"},type:"link",onClick:()=>ne(null===t||void 0===t?void 0:t.dag_id),children:"Resend"})})}],re=[{title:"SQL Query",dataIndex:"sql",key:"sql",render:(e,t)=>(0,g.jsx)(f,{value:t.sql,rows:4,onChange:le,placeholder:"Enter description...",disabled:!t.isEdit})},{key:"actions",title:"Actions",render:(e,t)=>(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,g.jsx)(r.Button,{style:{color:"#0096FA",fontWeight:"800"},type:"link",onClick:()=>console.log("View",t),children:"View"}),(0,g.jsx)(r.Button,{style:{color:"#00B432",fontWeight:"800"},type:"link",onClick:()=>ae("reportTemplate",!V.reportTemplate),children:null!==V&&void 0!==V&&V.reportTemplate?"Edit":"Save"}),(0,g.jsx)(r.Button,{style:{color:"#FA3232",fontWeight:"800"},type:"link",danger:!0,onClick:()=>console.log("Delete",t),children:"Delete"})]})}],ne=e=>{M({dag_id:e})},le=e=>{W([{...U[0],sql:e.target.value}])},ae=(e,t)=>{t?oe(e):(G({...V,[e]:!V[e]}),"reportTemplate"===e&&W([{...U[0],isEdit:!0}]))},oe=e=>{r.Modal.confirm({title:(0,g.jsx)("p",{children:"Are you sure want to make the changes?"}),okText:"OK",cancelText:"Cancel",onOk:()=>de(e)})},de=e=>{v.form.validateFields(((t,i)=>{var r,n,l;if(t)return;const a={},o={};(i.recipients_internal||[]).forEach((e=>{e.email&&e.name&&(a[e.email]=e.name)})),(i.recipients_external||[]).forEach((e=>{e.email&&e.name&&(o[e.email]=e.name)}));const d={...i};void 0!==a&&(null===(r=Object.keys(a))||void 0===r?void 0:r.length)>0&&(d.recipients_internal=a),void 0!==o&&(null===(n=Object.keys(o))||void 0===n?void 0:n.length)>0&&(d.recipients_external=o),i.start_date&&(d.start_date=(0,c.Yq)(i.start_date,"YYYY-MM-DD"));const s={},{extra_data:p={}}=A;if("product_key"in d){const e=d.product_key,t=p.product_key;JSON.stringify(e)!==JSON.stringify(t)?s.product_key=e:delete d.product_key}if("package_name"in d){const e=d.package_name,t=p.package_name;JSON.stringify(e)!==JSON.stringify(t)?s.package_name=e:delete d.package_name}"EMAIL"===A.report_via&&"subject_line"in d&&(d.subject_line!==p.subject_line&&(s.subject_line=d.subject_line),delete d.subject_line),delete d.trigger_period;const u={report_id:A.id};Object.keys(d).forEach((e=>{switch(e){case"recipients_internal":case"recipients_external":{const t=A[e]||{},i=d[e],r=Object.keys(i),n=Object.keys(t);if(r.length!==n.length)u[e]=i;else{r.every((e=>i[e]===t[e]))||(u[e]=i)}break}case"start_date":{const e=(0,c.Yq)(A.start_date,"YYYY-MM-DD"),t=d.start_date;t!==e&&(u.start_date=t);break}default:d[e]!==A[e]&&(u[e]=d[e])}})),null!==(l=U[0])&&void 0!==l&&l.sql&&U[0].sql!==A.sql&&(u.sql=U[0].sql),Object.keys(u).length>0&&C(u),G({...V,[e]:!V[e]}),"reportTemplate"===e&&W([{...U[0],isEdit:!1}])}))};return(0,g.jsxs)(n._1,{children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer",fontWeight:"800",marginBottom:"32px",marginTop:"16px"},onClick:()=>{const{history:e}=v;e.push("/reporting-config")},children:[(0,g.jsx)(r.Icon,{type:"left",style:{fontSize:"24px",marginRight:8}}),(0,g.jsx)("div",{style:{fontSize:"24px",fontWeight:"800"},children:"Report Detail"})]}),(0,g.jsxs)(r.Form,{hideRequiredMark:!0,children:[(0,g.jsx)(n.fR,{borderRadius:"16px",children:(0,g.jsx)(n.XX,{children:(0,g.jsxs)(r.Spin,{tip:"Loading ...",spinning:x,children:[(0,g.jsx)(r.Row,{type:"flex",children:(0,g.jsx)(r.Col,{children:(0,g.jsx)(n.y,{children:"General Details"})})}),(0,g.jsx)("div",{children:(0,g.jsx)(r.Row,{children:(0,g.jsx)(r.Col,{children:(0,g.jsx)(n.Gj,{children:(null===J||void 0===J?void 0:J.length)>0&&J.map(((e,t)=>(0,g.jsxs)(n.gN,{children:[(0,g.jsx)(n.u7,{children:e.name}),(0,g.jsx)(n.yt,{children:e.value})]},t)))})})})})]})})}),(0,g.jsx)(n.fR,{borderRadius:"16px",children:(0,g.jsx)(n.XX,{children:(0,g.jsxs)(r.Spin,{tip:"Loading ...",spinning:x,children:[(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,g.jsx)(n.y,{children:"Report Distribution"}),(0,g.jsx)(n.Xi,{isEdit:V.reportDistribution,onClick:()=>ae("reportDistribution",!V.reportDistribution),children:V.reportDistribution?"Edit":"Save"})]}),(0,g.jsx)("div",{style:{width:"100%"},children:V.reportDistribution?(0,g.jsx)(n.Gj,{children:(null===H||void 0===H?void 0:H.length)>0&&H.map(((e,t)=>{let i=null===e||void 0===e?void 0:e.value;if("email"===(null===e||void 0===e?void 0:e.key)){var r,l,a,o;i=[...Object.keys(null!==(r=null===e||void 0===e||null===(l=e.value)||void 0===l?void 0:l.recipients_internal)&&void 0!==r?r:{}),...Object.keys(null!==(a=null===e||void 0===e||null===(o=e.value)||void 0===o?void 0:o.recipients_external)&&void 0!==a?a:{})].join(", ")}return(0,g.jsxs)(n.gN,{children:[(0,g.jsx)(n.u7,{children:e.name}),(0,g.jsx)(n.yt,{children:i})]},t)}))}):(0,g.jsx)(n.Gj,{children:Object.keys(p.iL.report_distribution).map((e=>{if(p.iL.report_distribution[e]&&"trigger_period"===e){const t=v.form.getFieldValue("trigger_frequency");return"Daily"===t?null:"monthly"===t?(0,s.B)({fieldName:e,type:{...p.iL.report_distribution[e],type:"calendar"},label:(0,c.Zr)(p.iL.report_distribution[e].field_name),initialValue:H,required:!0},v.form):(0,s.B)({fieldName:e,type:p.iL.report_distribution[e],label:(0,c.Zr)(p.iL.report_distribution[e].field_name),initialValue:H,required:!0},v.form)}return p.iL.report_distribution[e]?(0,s.B)({fieldName:e,type:p.iL.report_distribution[e],label:(0,c.Zr)(p.iL.report_distribution[e].field_name),initialValue:H,required:!0},v.form):null}))})})]})})}),(0,g.jsx)(n.fR,{borderRadius:"16px",children:(0,g.jsx)(n.XX,{children:(0,g.jsxs)(r.Spin,{tip:"Loading ...",spinning:x,children:[(0,g.jsx)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:(0,g.jsx)(n.y,{children:"Report Template"})}),(0,g.jsx)("div",{className:"table-container",children:(0,g.jsx)(r.Table,{bordered:!0,columns:re,dataSource:U,rowKey:(e,t)=>t,pagination:!1})})]})})}),(0,g.jsx)(n.fR,{borderRadius:"16px",children:(0,g.jsx)(n.XX,{children:(0,g.jsxs)(r.Spin,{tip:"Loading ...",spinning:x||k||L,children:[(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,g.jsx)(n.y,{children:"Report Query"}),(0,g.jsx)(n.Xi,{isEdit:V.reportQuery,onClick:()=>ae("reportQuery",!V.reportQuery),children:V.reportQuery?"Edit":"Save"})]}),(0,g.jsx)("div",{children:V.reportQuery?(0,g.jsx)(n.Gj,{children:(null===ee||void 0===ee?void 0:ee.length)>0&&ee.map(((e,t)=>(0,g.jsxs)(n.gN,{children:[(0,g.jsx)(n.u7,{children:e.name}),(0,g.jsx)(n.yt,{children:e.value})]},t)))}):(0,g.jsx)(n.Gj,{children:Object.keys(p.iL.report_query).map((e=>{if(p.iL.report_query[e]&&"product_key"===e)return(0,s.B)({fieldName:e,type:{...p.iL.report_query[e],options:z},label:(0,c.Zr)(e),initialValue:ee,required:!0,isMultiple:!0},v.form);if(p.iL.report_query[e]&&"package_name"===e){const t=!!v.form.getFieldValue("product_key")&&X.length;return(0,s.B)({fieldName:e,type:{...p.iL.report_query[e],options:X},disabled:!t,label:(0,c.Zr)(e),initialValue:ee,required:!0,isMultiple:!0},v.form)}return p.iL.report_query[e]?(0,s.B)({fieldName:e,type:p.iL.report_query[e],label:(0,c.Zr)(e),initialValue:ee,required:!0},v.form):null}))})})]})})}),(0,g.jsx)(n.fR,{borderRadius:"16px",children:(0,g.jsx)(n.XX,{children:(0,g.jsxs)(r.Spin,{tip:"Loading ...",spinning:x,children:[(0,g.jsx)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:(0,g.jsx)(n.y,{children:"Update Logs"})}),(0,g.jsx)("div",{className:"table-container",children:(0,g.jsx)(r.Spin,{spinning:O,tip:"Update Logs Loading ...",children:(0,g.jsx)(r.Table,{bordered:!0,columns:te,dataSource:null!==(t=null===F||void 0===F?void 0:F.results)&&void 0!==t?t:[],rowKey:e=>e.id,pagination:{pageSize:null===K||void 0===K?void 0:K.page_size,defaultCurrent:1,total:null!==(i=null===F||void 0===F?void 0:F.count)&&void 0!==i?i:0},onChange:e=>{var t;Z({...K,page:null!==(t=e.current)&&void 0!==t?t:1})}})})})]})})}),(0,g.jsx)(n.fR,{borderRadius:"16px",children:(0,g.jsx)(n.XX,{children:(0,g.jsxs)(r.Spin,{tip:"Loading ...",spinning:x,children:[(0,g.jsx)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:(0,g.jsx)(n.y,{children:"Report Logs"})}),(0,g.jsx)("div",{className:"table-container",children:(0,g.jsx)(r.Spin,{spinning:S,tip:"Reporting Logs Loading ...",children:(0,g.jsx)(r.Table,{bordered:!0,columns:ie,dataSource:null!==(l=null===w||void 0===w?void 0:w.dag_runs)&&void 0!==l?l:[],rowKey:e=>e.dag_id,pagination:{pageSize:null!==(a=null===Q||void 0===Q?void 0:Q.limit)&&void 0!==a?a:10,defaultCurrent:1,total:null!==(u=null===w||void 0===w?void 0:w.total_entries)&&void 0!==u?u:0},onChange:e=>{var t;$({...Q,offset:(null!==(t=null===Q||void 0===Q?void 0:Q.limit)&&void 0!==t?t:10)*((null===e||void 0===e?void 0:e.current)-1)})}})})})]})})})]})]})})))}}]);
//# sourceMappingURL=2628.c6def443.chunk.js.map