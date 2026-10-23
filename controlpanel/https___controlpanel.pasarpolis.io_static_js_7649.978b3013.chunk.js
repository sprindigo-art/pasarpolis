"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7649],{57649:(e,t,i)=>{i.d(t,{A:()=>b});var a=i(1502),o=i(67816),n=i(10048),r=i.n(n),s=i(38094),c=i.n(s),l=i(69732),p=i(98479),d=i(84029),E=i(55347),R=i(80878),T=i.n(R);const u=T().div`
  .reason-form {
    width: 60%;
    margin-top: 30px;
  }
  .form-textarea {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .form-submit {
    float: right;
  }
  .ant-upload.ant-upload-select {
    display: flex;
  }
  .search-tag {
    align-self: center;
    margin-left: 5px;
  }
  .edit-button {
    cursor: pointer;
    background-color: #13c2c2;
    padding: 4px 0px;
    border-radius: 16px;
    color: #fff;
    text-align: center;
    padding: 5px 8px;
  }
  .ant-table-thead > tr > th .ant-table-filter-icon {
    color: white;
  }


  .ant-table-thead > tr > th {
    white-space: nowrap;
  }
  .ant-btn-primary {
    background-color: #13c2c2 !important;
    border-color: #13c2c2 !important;
    border-radius: 2px;
    color: white !important;
  }
  .ant-btn-primary[disabled] {
    color: rgba(0, 0, 0, 0.25) !important;
    background-color: #f5f5f5 !important;
    border-color: #d9d9d9 !important;
  }
  .ant-table-tbody > tr > td {
    font-size: 12px;
  }
  .isoTableSearchBox {
    padding: 20px;
  }
  table {
    padding: 20px 0px;
  }
  .ant-pagination-item-active a {
    color: white;
  }
  .ant-table-thead > tr > th {
    background-color: #13c2c2;
    color: #fff;
  }
  .ant-pagination-item-active {
    background-color: #13c2c2;
    border-color: #13c2c2;
  }
  .ant-pagination-item {
    &:hover {
      border-color: #13c2c2;
    }
    &:hover a {
      color: #13c2c2;
    }
  }
  .ant-pagination-item-container i {
    color: #13c2c2;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    &:hover {
      border: 1px solid #13c2c2;
    }
    i:hover {
      color: #13c2c2 !important;
    }
  }
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    i {
      color: #13c2c2 !important;
    }
  }
`,m=T().div`
  .ant-btn-primary {
    background-color: #13c2c2;
    border-color: #13c2c2;
  }
  .button {
    margin-left: 10px;
    font-weight: bold;
  }
  .row {
    margin-bottom: 30px;
    margin-top: 10px;
  }
  .label {
    width: 20%
  }
  .form-item {
    font-size: 11px;
    margin-bottom: 0px;
    flex: 1;
    margin-left: 10px;
  }
`,I=u;var g=i(93807),_=i(70579);const h=e=>{var t,i,n;let{location:r,history:s,tableData:l,getTabledataRequest:R,toggleAddModal:T,notificationTypeData:u,title:m,loader:h=!1,removeRecipients:v,recipientType:x}=e;const[f,S]=(0,a.useState)(!1),[y,N]=(0,a.useState)(!1),[C,P]=(0,a.useState)({}),[b,O]=(0,a.useState)({});(0,a.useEffect)((()=>{const e=c().parse(null===r||void 0===r?void 0:r.search),{notification_type:t,recipient:i}=e;M(e),P({notificationType:t,recipient:i}),O({notificationType:t,recipient:i})}),[]);const A=(e,t)=>(0,_.jsx)("div",{className:e,children:(0,_.jsx)("span",{children:t})}),D=(e,t)=>{P({...C,[t]:e})},j=(e,t)=>{e.preventDefault();const i={};i.recipient=C.recipient,i.notification_type=C.notificationType;const a=(0,g.A)(i);s.push({pathname:null===r||void 0===r?void 0:r.pathname,search:a}),M(i),S(!1),N(!1),O(C)},w=(e,t)=>{let i="filter-icon";return e&&(i+=" active"),(0,_.jsx)(o.Icon,{className:i,type:t,theme:"outlined"})},k=[{key:"id",title:A("title-without-margin","Id"),dataIndex:"id"},{key:"notification_type",title:A("title-without-margin","Notification Type"),dataIndex:"notification_type",filterDropdown:(0,_.jsx)(p.Y2,{searchText:C.notificationType?C.notificationType:void 0,onInputChange:e=>D(e.target.value,"notificationType"),onSearch:e=>j(e),optionData:u||[],renderOption:e=>e.map((e=>(0,_.jsx)("option",{value:e,children:e},e)))}),filterIcon:w(!!C.notification_type,"filter"),filterDropdownVisible:f,onFilterDropdownVisibleChange:e=>S(e)},{key:"recipient",title:A("title-with-margin","Recipient"),dataIndex:"recipient",filterDropdown:(0,_.jsx)(p.ZY,{idIdentifier:"recipient",searchText:C.recipient,onInputChange:e=>D(e.target.value,"recipient"),onSearch:e=>j(e)}),filterIcon:w(!!C.recipient,"search"),filterDropdownVisible:y,onFilterDropdownVisibleChange:e=>N(e)},{key:"Reason",title:A("title-with-margin","Reason"),dataIndex:"reason"},{key:"added_by",title:A("title-with-margin","Added By"),dataIndex:"author"},{key:"created_at",title:A("title-with-margin","Created At"),dataIndex:"created_at"},{key:"action",title:A("title-with-margin","Action"),render:e=>!e.is_default&&(0,_.jsx)("div",{className:"edit-button",onClick:()=>{v({query:{recipient_type:x},body:{recipient:e.recipient,notification_type:e.notification_type}})},children:"Remove"})}],M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:t}=e,i=Number(t)||1;delete e.page,R({query:{...e,recipient_type:x,page:i,page_size:10}})};return(0,_.jsx)(E.A,{className:"referral-table",children:(0,_.jsx)(d.A,{children:(0,_.jsxs)(I,{children:[(0,_.jsxs)(o.Row,{align:"middle",type:"flex",children:[(0,_.jsx)(o.Col,{xs:{span:24},md:{span:10},xl:{span:16},children:(0,_.jsx)("h2",{children:(0,_.jsx)("b",{children:m})})}),(0,_.jsx)(o.Col,{xs:{span:8},md:{span:4},xl:{span:2}}),(0,_.jsx)(o.Col,{xs:{span:8},md:{span:4},xl:{span:2}}),(0,_.jsx)(o.Col,{xs:{span:8},md:{span:6},xl:{span:4},children:(0,_.jsx)(o.Button,{className:"form-submit",type:"primary",onClick:()=>T(!0),children:"Add New Recipient"})})]}),Object.keys(b).map((e=>b[e]&&(0,_.jsxs)(o.Tag,{className:"search-tag",color:"purple",closable:"closable",onClose:()=>(e=>{P({...C,[e]:void 0}),O({...b,[e]:void 0});const t=c().parse(null===r||void 0===r?void 0:r.search);"notificationType"===e?delete t.notification_type:delete t[e];const i=(0,g.A)(t);s.push({pathname:null===r||void 0===r?void 0:r.pathname,search:i}),M(t)})(e),children:[e," : ",b[e]]},e))),(0,_.jsx)(o.Spin,{spinning:h,children:(0,_.jsx)(o.Table,{columns:k,rowKey:e=>e.reference_id,dataSource:l.data,pagination:{pageSize:Number(null===l||void 0===l||null===(t=l.meta_data)||void 0===t?void 0:t.limit),total:Number(null===l||void 0===l||null===(i=l.meta_data)||void 0===i?void 0:i.total),current:Number(null===l||void 0===l||null===(n=l.meta_data)||void 0===n?void 0:n.page)},onChange:e=>{const{current:t}=e,i={...c().parse(null===r||void 0===r?void 0:r.search)};i.page=t;const a=(0,g.A)(i);s.push({pathname:null===r||void 0===r?void 0:r.pathname,search:a}),M(i)}})})]})})})};var v=i(40117);const x=o.Form.Item,{Option:f}=o.Select,{TextArea:S}=o.Input,y=o.Form.create({})((e=>{let{form:t,show:i,toggleAddModal:n,notificationTypeData:r=[],addRecipients:s,loading:c,recipientType:l}=e;const{getFieldDecorator:p}=t,d=(0,a.useCallback)((async()=>new Promise((e=>{t.validateFields(((t,i)=>{e(!t)}))}))),[t]),E=(0,a.useCallback)((async e=>{e.preventDefault();const i=t.getFieldsValue();await d()&&s&&s({query:{recipient_type:l},body:{reason:i.reason,recipient:i.recipient,notification_type:i.notificationType}})}),[t]),R=t.getFieldValue("notificationType");return(0,_.jsx)(o.Modal,{visible:i,okText:"Save",onCancel:()=>n(!1),title:"Add Receipients",maskClosable:!1,width:"50%",footer:null,children:(0,_.jsx)(m,{children:(0,_.jsxs)(o.Form,{onSubmit:E,children:[(0,_.jsxs)(o.Row,{type:"flex",align:"middle",className:"row",children:[(0,_.jsx)("h4",{className:"label",children:(0,_.jsx)("b",{children:"Notification Type: "})}),(0,_.jsx)(x,{className:"form-item",children:p("notificationType",{rules:[{required:!0,message:"Please select notification Type"}]})((0,_.jsx)(o.Select,{placeholder:"Notification Type",children:r.map((e=>(0,_.jsx)(f,{value:e,children:e},e)))}))})]}),(0,_.jsxs)(o.Row,{type:"flex",align:"middle",className:"row",children:[(0,_.jsx)("h4",{className:"label",children:(0,_.jsx)("b",{children:"Recipients : "})}),(0,_.jsx)(x,{className:"form-item",children:p("recipient",{rules:[{required:!0,pattern:"sms"===R||"whatsapp"===R?v.Kh:v.co,message:"email"===R?"Please enter valid email":"sms"===R||"whatsapp"===R?"Please enter valid phone":"Recepients should be email or phone no"}]})((0,_.jsx)(o.Input,{placeholder:"Recipients"}))})]}),(0,_.jsxs)(o.Row,{type:"flex",align:"middle",className:"row",children:[(0,_.jsx)("h4",{className:"label",children:(0,_.jsx)("b",{children:"Reason : "})}),(0,_.jsx)(x,{className:"form-item",children:p("reason",{rules:[{required:!0,message:"Please add a reason"}]})((0,_.jsx)(S,{placeholder:"Add a reason"}))})]}),(0,_.jsxs)(o.Row,{type:"flex",justify:"end",children:[(0,_.jsx)(o.Button,{type:"primary button",onClick:()=>n(!1),children:"Cancel"}),(0,_.jsx)(o.Button,{type:"primary button",htmlType:"submit",loading:c,children:"Save"})]})]})})})}));var N=i(68250),C=i(42736);const P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,i]=(0,N.ri)(),[a]=(0,l.useServiceRequest)(i);return[t,async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await a(e({...t}))}]},b=e=>{const{recipientType:t,title:i,location:n}=e,[{getRecipientsData:s={}},p]=P(C.r.getRecipients),[{importRecipientsData:d={}},E]=P(C.r.importRecipients),[{exportRecipientsData:R=[]},T]=P(C.r.exportRecipients),[{addRecipientsData:u},m]=P(C.r.addRecipients),[{removeRecipientsData:I},g]=P(C.r.removeRecipients),[{getNotificationTypeData:v=[]},x]=P(C.r.getNotificationType),[f,S]=(0,a.useState)(!1),[b]=(()=>{const[,e]=(0,N.ri)();return[function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(C.r.resetReduxStateRecipients(t))}]})(),[{GET_RECIPIENTS_LOADER:O,ADD_RECIPIENTS_LOADER:A,REMOVE_RECIPIENTS_LOADER:D,EXPORT_RECIPIENTS_LOADER:j,IMPORT_RECIPIENTS_LOADER:w}]=(0,l.useLoaderContextValue)(),[{getRecipientsStatus:k,getNotificationTypeStatus:M,GET_RECIPIENTS_ERROR:U,GET_NOTIFICATION_TYPE_ERROR:F,addRecipientsStatus:G,ADD_RECIPIENTS_ERROR:Q,removeRecipientsStatus:V,REMOVE_RECIPIENTS_ERROR:X,exportRecipientsStatus:q,EXPORT_RECIPIENTS_ERROR:z,addRecipientsErrorData:Y,removeRecipientsErrorData:L,importRecipientsStatus:Z,importRecipientsErrorData:$,IMPORT_RECIPIENTS_ERROR:B,exportRecipientsErrorData:K},J]=(0,l.useErrorContextValue)();(0,a.useEffect)((()=>(x(),()=>b(["getRecipientsData"]))),[]);const H=(0,a.useCallback)((()=>{const e=c().parse(null===n||void 0===n?void 0:n.search);p({query:{...e,recipient_type:t,page:1,page_size:10}})}),[p]);return(0,a.useEffect)((()=>{U?(k&&o.notification.error({message:k}),J((0,l.resetError)({GET_RECIPIENTS_ERROR:!1,getRecipientsStatus:""}))):F?(M&&o.notification.error({message:M}),J((0,l.resetError)({GET_NOTIFICATION_TYPE_ERROR:!1,getNotificationTypeStatus:""}))):Q?((null===Y||void 0===Y?void 0:Y.message)&&o.notification.error({message:null===Y||void 0===Y?void 0:Y.message}),J((0,l.resetError)({ADD_RECIPIENTS_ERROR:!1,addRecipientsStatus:"",addRecipientsErrorData:""}))):Q||"success"!==G?X?((null===L||void 0===L?void 0:L.message)&&o.notification.error({message:null===L||void 0===L?void 0:L.message}),J((0,l.resetError)({REMOVE_RECIPIENTS_ERROR:!1,removeRecipientsStatus:"",removeRecipientsErrorData:""}))):X||"success"!==V?z?((null===K||void 0===K?void 0:K.message)&&o.notification.error({message:null===K||void 0===K?void 0:K.message}),J((0,l.resetError)({EXPORT_RECIPIENTS_ERROR:!1,exportRecipientsStatus:""}))):z||"success"!==q?B?(null!==$&&void 0!==$&&$.message?o.notification.error({message:null===$||void 0===$?void 0:$.message}):null!==$&&void 0!==$&&$.error&&o.notification.error({message:null===$||void 0===$?void 0:$.error}),J((0,l.resetError)({IMPORT_RECIPIENTS_ERROR:!1,importRecipientsStatus:"",importRecipientsErrorData:{}}))):B||"success"!==Z||((null===d||void 0===d?void 0:d.message)&&o.notification.success({message:null===d||void 0===d?void 0:d.message}),H(),J((0,l.resetError)({importRecipientsStatus:""}))):((null===R||void 0===R?void 0:R.message)&&o.notification.success({message:null===R||void 0===R?void 0:R.message}),J((0,l.resetError)({exportRecipientsStatus:""})),r()(JSON.stringify(null===R||void 0===R?void 0:R.data),`${t}Recipients.json`)):((null===I||void 0===I?void 0:I.message)&&o.notification.success({message:null===I||void 0===I?void 0:I.message}),J((0,l.resetError)({removeRecipientsStatus:""})),H()):((null===u||void 0===u?void 0:u.message)&&o.notification.success({message:null===u||void 0===u?void 0:u.message}),J((0,l.resetError)({addRecipientsStatus:""})),S(!1),H())}),[U,F,Q,Y,u,X,z,I,R,K,q,V,G,k,M,L,Z,$,B,d]),(0,_.jsxs)(_.Fragment,{children:[f&&(0,_.jsx)(y,{show:f,toggleAddModal:S,notificationTypeData:v||[],addRecipients:m,loading:!!A,recipientType:t}),(0,_.jsx)(h,{tableData:s,getTabledataRequest:p,toggleAddModal:S,loader:!!(O||D||j),notificationTypeData:v,title:i,removeRecipients:g,importRecipients:E,exportRecipients:T,importingFileLoader:!!w,recipientType:t,...e})]})}},68250:(e,t,i)=>{i.d(t,{_p:()=>l,ri:()=>p});var a=i(1502),o=i(42736);const n={},r=(e,t)=>{const{payload:i}=t;switch(t.type){case o.r.GET_RECIPIENTS:case o.r.ADD_RECIPIENTS:case o.r.REMOVE_RECIPIENTS:case o.r.IMPORT_RECIPIENTS:case o.r.EXPORT_RECIPIENTS:case o.r.GET_NOTIFICATION_TYPE:return{...e,...i};case o.r.RESET_REDUX_STATE_RECIPIENTS:if(i&&Array.isArray(i)){const t={};return i.forEach((e=>{t[e]=n[e]})),{...e,...t}}return{...e};default:return e}};var s=i(70579);const c=(0,a.createContext)(),l=e=>(0,s.jsx)(c.Provider,{value:(0,a.useReducer)(r,n),children:e.children}),p=()=>(0,a.useContext)(c)},42736:(e,t,i)=>{i.d(t,{r:()=>o});const a=i(78533).A.url,o={GET_RECIPIENTS:"GET_RECIPIENTS",GET_RECIPIENTS_REQUEST:"GET_RECIPIENTS_REQUEST",GET_NOTIFICATION_TYPE:"GET_NOTIFICATION_TYPE",GET_NOTIFICATION_TYPE_REQUEST:"GET_NOTIFICATION_TYPE_REQUEST",ADD_RECIPIENTS:"ADD_RECIPIENTS",ADD_RECIPIENTS_REQUEST:"ADD_RECIPIENTS_REQUEST",REMOVE_RECIPIENTS:"REMOVE_RECIPIENTS",REMOVE_RECIPIENTS_REQUEST:"REMOVE_RECIPIENTS_REQUEST",IMPORT_RECIPIENTS:"IMPORT_RECIPIENTS",IMPORT_RECIPIENTS_REQUEST:"IMPORT_RECIPIENTS_REQUEST",EXPORT_RECIPIENTS:"EXPORT_RECIPIENTS",EXPORT_RECIPIENTS_REQUEST:"EXPORT_RECIPIENTS_REQUEST",RESET_REDUX_STATE_RECIPIENTS:"RESET_REDUX_STATE_RECIPIENTS",getRecipients:e=>({type:o.GET_RECIPIENTS_REQUEST,payload:{...e,method:"get",url:a.getRecipientsApi}}),getNotificationType:e=>({type:o.GET_NOTIFICATION_TYPE,payload:{...e,method:"get",url:a.getNotificationTypeLogApi}}),addRecipients:e=>({type:o.ADD_RECIPIENTS_REQUEST,payload:{...e,method:"post",url:a.addRecipientsApi}}),removeRecipients:e=>({type:o.REMOVE_RECIPIENTS_REQUEST,payload:{...e,method:"delete",url:a.removeRecipientsApi}}),importRecipients:e=>({type:o.IMPORT_RECIPIENTS_REQUEST,payload:{...e,method:"post",url:a.importRecipientsApi}}),exportRecipients:e=>({type:o.EXPORT_RECIPIENTS_REQUEST,payload:{...e,method:"get",url:a.exportRecipientsApi}}),resetReduxStateRecipients:e=>({type:o.RESET_REDUX_STATE_RECIPIENTS,payload:e})}},40117:(e,t,i)=>{i.d(t,{G7:()=>s,Gt:()=>r,Kh:()=>o,co:()=>a,yl:()=>n});const a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,o=/^[0-9]{8,14}$/,n=/^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@pasarpolis.com|@pasarpolis.co.id|@ppibroker.com$/i,s=/^[a-zA-Z0-9_]*$/}}]);
//# sourceMappingURL=7649.978b3013.chunk.js.map