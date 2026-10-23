"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2308],{68859:(e,t,a)=>{a.d(t,{B:()=>s});a(1502);var o=a(67816),l=a(70579);function s(e,t){const{getFieldDecorator:a}=t,{fieldName:s,type:i,label:r=" ",initialValue:d,required:c=!1,disabled:p=!1,isMultiple:u}=e,{type:m}=i;switch(m){case"string":{var h;const t=null===e||void 0===e||null===(h=e.type)||void 0===h?void 0:h.options;return t&&Array.isArray(t)?(0,l.jsx)(o.Form.Item,{label:(0,l.jsx)("b",{style:{fontSize:"12px"},children:r}),style:{width:"100%"},children:a(s,{initialValue:n(d,s),rules:[{required:c,message:`Please enter ${r}`}]})((0,l.jsx)(o.Select,{mode:u?"multiple":void 0,showSearch:!0,placeholder:u?"Select one or more":"Select an option",disabled:p,className:"dropdown-input",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,style:{width:"100%"},children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((e,t)=>(0,l.jsx)(o.Select.Option,{value:e.key?e.key:e,children:e.value?e.value:e},t)))}))},r):(0,l.jsx)(o.Form.Item,{label:(0,l.jsx)("b",{style:{fontSize:"12px"},children:r}),children:a(s,{initialValue:n(d,s),rules:[{required:c,message:`Please enter ${r}`}]})((0,l.jsx)(o.Input,{disabled:"reference_id"===s}))},r)}case"number":return(0,l.jsx)(o.Form.Item,{label:(0,l.jsx)("b",{style:{fontSize:"12px"},children:r}),children:a(s,{initialValue:n(d,s),rules:[{required:c,message:`Please enter ${r}`}]})((0,l.jsx)(o.Input,{type:"number"}))},r);default:return null}}const n=(e,t)=>{if(Array.isArray(e)){const a=e.find((e=>(null===e||void 0===e?void 0:e.key)===t));return a?a.value:""}return e}},75863:(e,t,a)=>{a.d(t,{_:()=>l});var o=a(80878);const l=a.n(o)().div`
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
`},72308:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var o=a(67816),l=a(75863),s=a(1502),n=a(24952),i=a(68859),r=a(25211),d=a(83505),c=a(95916),p=a(70579);const{confirm:u}=o.Modal,{uploadPolicyFile:m,resetReduxState:h}=r.A,{addUpdateReport:f}=d.A,x=o.Form.create()((e=>{const{form:t,editFormRef:a,fieldName:l,inputEditable:n,onCancel:r,formData:d=null,userData:m,uploadPolicyFile:h,uploadPolicyFileStatus:f,uploadPolicyFileData:x,policyResetReduxState:g,addUpdateReport:y}=e,{setFieldsValue:b,getFieldsValue:v,validateFields:j}=t,[w,k]=(0,s.useState)(!1),[S,C]=(0,s.useState)(null),[_,D]=(0,s.useState)(null),[F,R]=(0,s.useState)({}),[I,L]=(0,s.useState)([]),U=["xls","xlsx"];(0,s.useEffect)((()=>{if(d){const e={...d,document:d.document?[d.document]:[],is_active:d.is_active?"True":"False"};b(e),d.document&&(C(d.document),D(d.document.split("/").pop()),L([{url:d.document}]))}}),[d]),(0,s.useEffect)((()=>{if("success"===f&&null!==x&&void 0!==x&&x.url){const e=x.url,t=e.split("/").pop();C(e),D(t),L([{url:e}]),b({document:[e]}),k(!1),g(["uploadPolicyFileStatus","uploadPolicyFileData"])}}),[f]);const P=async e=>{e.preventDefault();if(!await new Promise((e=>{j((t=>{t?(o.notification.error({message:"Please fix form errors."}),e(!1)):e(!0)}))})))return;const t=v();if((0,c.size)(F)>0&&(0,c.isEqual)(F,t))return void console.log("No changes in form");const a=I.map((e=>e.url)).join(","),l={title:t.name,link:a,created_by:null===m||void 0===m?void 0:m.email,is_active:!0,category:"workshop-data"};R(l),y(l)};return(0,p.jsx)(o.Modal,{visible:!n,title:d?"Edit Report":"Add Report",okText:"Submit",cancelText:"Cancel",onCancel:r,onOk:e=>{e.preventDefault(),u({title:"Are you sure you want to submit?",onOk:()=>P(e)})},destroyOnClose:!0,children:(0,p.jsx)("div",{children:(0,p.jsxs)(o.Form,{ref:a,children:[(0,i.B)({fieldName:"name",type:{type:"string"},label:"Name",initialValue:(null===d||void 0===d?void 0:d.name)||"",required:!0},t),(0,p.jsx)(o.Form.Item,{label:(0,p.jsx)("b",{style:{fontSize:"12px"},children:"Upload Document"}),children:t.getFieldDecorator("document",{initialValue:null!==d&&void 0!==d&&d.document?[d.document]:[],rules:[{required:!0,message:"Please upload a document"}]})((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Upload,{name:"documents",showUploadList:!1,multiple:!1,customRequest:e=>{let{onSuccess:t}=e;return setTimeout((()=>t("ok")),0)},onChange:async e=>{var t;const a=null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.originFileObj;if(a)if((e=>{const t=e.split(".").pop().toLowerCase();return U.includes(t)})(a.name))try{const e=new FormData;let t=a.name.split(".")[0].replace(/\s+/g,"").replace(/[^a-zA-Z0-9]/g,"_");e.append("file",a),e.append("path",`publication/${t}_${Date.now()}`),e.append("identifier","b2c"),h({body:e}),k(!0)}catch(l){o.notification.error({message:"Upload failed"}),k(!1)}else o.notification.error({message:"Invalid file type (.xls, .xlsx only)"})},children:(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[(0,p.jsxs)(o.Button,{disabled:w,children:[(0,p.jsx)(o.Icon,{type:"upload"})," ",w?"Uploading...":"Upload"]}),(0,p.jsx)("b",{style:{fontSize:"10px",color:"red"},children:"* xls, xlsx only"})]})}),S&&(0,p.jsx)("div",{style:{marginTop:10},children:(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[(0,p.jsxs)("span",{children:[(0,p.jsx)(o.Icon,{type:"file",style:{marginRight:8}}),_]}),(0,p.jsx)(o.Icon,{type:"delete",style:{color:"red",cursor:"pointer"},onClick:()=>{C(null),D(null),L([]),b({document:[]})}})]})})]}))})]})})})})),g=(0,n.connect)((e=>({userData:e.Auth.profile,uploadPolicyFileStatus:e.Insurance.uploadPolicyFileStatus,uploadPolicyFileData:e.Insurance.uploadPolicyFileData})),{uploadPolicyFile:m,policyResetReduxState:h,addUpdateReport:f})(x);var y=a(17823),b=a.n(y),v=a(88962),j=a(93807),w=a(98479),k=a(50248);const{getWorkshopList:S,resetReportingConfigRedux:C}=d.A,_=(0,n.connect)((e=>({workshopList:e.TapInsureConfigurable.workshopList,workshoplListMessage:e.TapInsureConfigurable.workshoplListMessage,tableDataSourceLoading:e.Loading.GET_WORKSHOP_REPORTS,addUpdateData:e.TapInsureConfigurable.addUpdateData,addUpdateMessage:e.TapInsureConfigurable.addUpdateMessage})),{getWorkshopList:S,resetReportingConfigRedux:C})((e=>{var t,a;const[n,i]=(0,s.useState)(!1),[r,d]=(0,s.useState)(1),[c,u]=(0,s.useState)({}),[m,h]=(0,s.useState)(!1),[f,x]=(0,s.useState)(""),[y,S]=(0,s.useState)({}),{getWorkshopList:C,workshopList:_=[],tableDataSourceLoading:D,addUpdateMessage:F,resetReportingConfigRedux:R,permissions:I}=e,L=(0,v.useLocation)(),U=(0,v.useHistory)(),P=new URLSearchParams(L.search),A=parseInt(P.get("page")||"1",10);(0,s.useEffect)((()=>{d(A),C({category:"workshop-data",page:A,offset:15*(A-1),limit:15,ordering:"-updated_at"})}),[L.search]);(0,s.useEffect)((()=>{if(F){o.notification["success"===F?"success":"error"]({message:"success"===F?"Workshop Data Updated Successfully!":"Error Occurred!"}),R(["addUpdateMessage"]),i(!1);const e=parseInt(new URLSearchParams(L.search).get("page")||"1",10);C({category:"workshop-data",page:e,offset:15*(e-1),limit:15,ordering:"-updated_at"})}}),[F]),(0,s.useEffect)((()=>()=>{R(["addUpdateMessage","workshopList","workshoplListMessage"])}),[]);const T=(0,s.useCallback)(((e,t)=>{u({...c,[t]:e.target.value}),h(!0)}),[c]),M=[{key:"actions",title:"Actions",render:(e,t)=>(0,p.jsx)("div",{style:{display:"flex",gap:"20px",justifyContent:"center"},children:(0,p.jsx)(o.Icon,{type:"download",style:{color:"#1890ff",cursor:"pointer",fontSize:20},onClick:()=>{var e;(e=null===t||void 0===t?void 0:t.link)&&window.open(e,"_blank")}})})},{key:"title",title:"Name",dataIndex:"title",render:e=>e||"-",filterDropdown:(0,p.jsxs)("div",{style:{padding:8},children:[(0,p.jsx)(w.ZY,{idIdentifier:"title",className:"",searchText:m?c.name:"",onInputChange:e=>T(e,"name"),onSearch:e=>(e=>{e.preventDefault(),x(""),S(c),C({category:"workshop-data",page:A,offset:15*(A-1),limit:15,ordering:"-updated_at",...c})})(e)}),(0,p.jsx)(o.Button,{size:"small",style:{marginTop:8,width:"100%"},onClick:()=>(e=>{const t={...c};delete t[e],u(t),h(!0),x(""),S(t);const a=(0,j.A)({...t});U.push({pathname:L.pathname,search:a}),C({category:"workshop-data",page:A,offset:15*(A-1),limit:15,ordering:"-updated_at",...t})})("name"),children:"Reset"})]}),filterDropdownVisible:"title"===f,onFilterDropdownVisibleChange:e=>x(e?"title":c.title)},{key:"created_at",title:"Created At",dataIndex:"created_at",render:e=>e?b()(e).format("YYYY-MM-DD HH:mm"):"-"},{key:"updated_at",title:"Updated At",dataIndex:"updated_at",render:e=>e?b()(e).format("YYYY-MM-DD HH:mm"):"-"},{key:"created_by",title:"User",dataIndex:"created_by",render:e=>e||"-"},{key:"status",title:"Status",render:(e,t)=>{var a;const o=null===t||void 0===t||null===(a=t.extra_data)||void 0===a?void 0:a.status;return o?(0,p.jsx)(p.Fragment,{children:o.toUpperCase()}):(0,p.jsx)("b",{children:"-"})}}];return(0,p.jsxs)(l._,{children:[(0,p.jsxs)(o.Card,{children:[(0,p.jsxs)(o.Row,{type:"flex",justify:"space-between",children:[(0,p.jsxs)(o.Col,{children:[(0,p.jsx)("h1",{className:"label-name",children:(0,p.jsxs)("b",{children:["Workshop Data: ",(null===_||void 0===_||null===(t=_.metadata)||void 0===t?void 0:t.count)||0]})}),(e=>Object.keys(e).map(((t,a)=>(0,p.jsxs)(o.Tag,{className:"top-filter",color:"purple",closable:"closable",onClose:()=>(e=>{const t=c;delete t[e],u(t);const a=(0,j.A)(t);U.push({pathname:L.pathname,search:a}),C({category:"workshop-data",page:A,offset:15*A,limit:15,ordering:"-updated_at",...t})})(t),children:[t,": ",e[t]]},t))))(y)]}),(0,p.jsx)(o.Col,{children:(0,p.jsxs)("div",{className:"button__section",style:{display:"flex",gap:"10px"},children:[(0,p.jsx)(o.Button,{children:(0,p.jsx)("a",{href:"https://storage.googleapis.com/consumer-testing/Reports/Workshop%20Data%20Template.xlsx",download:!0,target:"_blank",rel:"noopener noreferrer",children:"Download Template"})}),(0,p.jsx)(k.A,{permissionSetter:"ops.tapinsure-add-workshop-data",permissionGetter:I,children:(0,p.jsx)(o.Button,{type:"primary",onClick:()=>{i(!0)},children:(0,p.jsx)("b",{children:"+ Add Workshop File"})})})]})})]}),(0,p.jsx)("div",{className:"table-container",children:(0,p.jsx)(o.Spin,{spinning:D,tip:"Reporting List Loading ...",children:(0,p.jsx)(o.Table,{bordered:!0,columns:M,dataSource:_.results,rowKey:e=>e.id,pagination:{pageSize:15,current:r,total:(null===_||void 0===_||null===(a=_.metadata)||void 0===a?void 0:a.count)||0},onChange:e=>{const t=e.current;d(t);const a=(0,j.A)({page:t});U.push({pathname:L.pathname,search:a})}})})})]}),n&&(0,p.jsx)(g,{onCancel:()=>{i(!1)}})]})}))}}]);
//# sourceMappingURL=2308.b7abec3f.chunk.js.map