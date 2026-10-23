"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[501],{10501:(e,a,o)=>{o.d(a,{h:()=>I});var t=o(1502),n=o(67816),i=o(10048),r=o.n(i),s=o(38094),d=o.n(s),l=o(69732),m=o(98479),c=o(84029),p=o(55347),u=o(80878),D=o.n(u);const g=D().div`
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
    width: 75px;
    padding: 5px;
  }
  .ant-upload.ant-upload-select {
    display: flex;
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
  .ant-table-thead > tr > th .ant-table-filter-icon {
    color: white;
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
`,E=D().div`
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
`,_=g;var v=o(93807),h=o(70579);const A=e=>{var a,o,i;let{location:r,history:s,tableData:l,getTabledataRequest:u,toggleAddModal:D,title:g,loader:E=!1,removeDomain:A,domainType:R}=e;const[x,O]=(0,t.useState)(!1),[M,b]=(0,t.useState)({}),[f,I]=(0,t.useState)({});(0,t.useEffect)((()=>{const e=d().parse(null===r||void 0===r?void 0:r.search),{domain_name:a}=e;y(e),b({domain_name:a}),I({domain_name:a})}),[]);const N=(e,a)=>(0,h.jsx)("div",{className:e,children:(0,h.jsx)("span",{children:a})}),T=[{key:"id",title:N("title-without-margin","Id"),dataIndex:"id"},{key:"domain",title:N("title-with-margin","Domain"),dataIndex:"domain_name",filterDropdown:(0,h.jsx)(m.ZY,{idIdentifier:"domain_name",searchText:M.domain_name,onInputChange:e=>{return a=e.target.value,o="domain_name",void b({...M,[o]:null===a||void 0===a?void 0:a.trim()});var a,o},onSearch:e=>(e=>{e.preventDefault();const a={};a.domain_name=M.domain_name;const o=(0,v.A)(a);s.push({pathname:null===r||void 0===r?void 0:r.pathname,search:o}),y(a),O(!1),I(M)})(e)}),filterIcon:((e,a)=>{let o="filter-icon";return e&&(o+=" active"),(0,h.jsx)(n.Icon,{className:o,type:a,theme:"outlined"})})(!!M.domain_name,"search"),filterDropdownVisible:x,onFilterDropdownVisibleChange:e=>O(e)},{key:"author",title:N("title-with-margin","Added By"),dataIndex:"author"},{key:"created_at",title:N("title-with-margin","Created At"),dataIndex:"created_at"},{key:"action",title:N("title-with-margin","Action"),render:e=>"pasarpolis.com"!==e.domain_name&&(0,h.jsx)("div",{className:"edit-button",onClick:()=>A({query:{domain_type:R},body:{domain_name:e.domain_name}}),children:"Remove"})}],y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:a}=e,o=Number(a)||1;delete e.page,u({query:{...e,domain_type:R,page:o,page_size:10}})};return(0,h.jsx)(p.A,{className:"referral-table",children:(0,h.jsx)(c.A,{children:(0,h.jsxs)(_,{children:[(0,h.jsxs)(n.Row,{align:"middle",type:"flex",children:[(0,h.jsx)(n.Col,{xs:{span:24},md:{span:10},xl:{span:16},children:(0,h.jsx)("h2",{children:(0,h.jsx)("b",{children:g})})}),(0,h.jsx)(n.Col,{xs:{span:8},md:{span:4},xl:{span:2}}),(0,h.jsx)(n.Col,{xs:{span:8},md:{span:4},xl:{span:2}}),(0,h.jsx)(n.Col,{xs:{span:8},md:{span:6},xl:{span:4},children:(0,h.jsx)(n.Button,{className:"form-submit",type:"primary",onClick:()=>D(!0),children:"Add New Domain"})})]}),Object.keys(f).map((e=>f[e]&&(0,h.jsxs)(n.Tag,{className:"search-tag",color:"purple",closable:"closable",onClose:()=>(e=>{b({...M,[e]:void 0}),I({...f,[e]:void 0});const a=d().parse(null===r||void 0===r?void 0:r.search);delete a[e];const o=(0,v.A)(a);s.push({pathname:null===r||void 0===r?void 0:r.pathname,search:o}),y(a)})(e),children:[e," : ",f[e]]},e))),(0,h.jsx)(n.Spin,{spinning:E,children:(0,h.jsx)(n.Table,{columns:T,rowKey:e=>e.reference_id,dataSource:l.data,pagination:{pageSize:Number(null===l||void 0===l||null===(a=l.meta_data)||void 0===a?void 0:a.limit),total:Number(null===l||void 0===l||null===(o=l.meta_data)||void 0===o?void 0:o.total),current:Number(null===l||void 0===l||null===(i=l.meta_data)||void 0===i?void 0:i.page)},onChange:e=>{const{current:a}=e,o={...d().parse(null===r||void 0===r?void 0:r.search)};o.page=a;const t=(0,v.A)(o);s.push({pathname:null===r||void 0===r?void 0:r.pathname,search:t}),y(o)},className:"isoSearchableTable"})})]})})})};var R=o(40117);const x=n.Form.Item,O=n.Form.create({})((e=>{let{form:a,show:o,toggleAddModal:i,addDomain:r,loading:s,domainType:d}=e;const{getFieldDecorator:l}=a,m=(0,t.useCallback)((async()=>new Promise((e=>{a.validateFields(((a,o)=>{e(!a)}))}))),[a]),c=(0,t.useCallback)((async e=>{e.preventDefault();const o=a.getFieldsValue();if(await m()){if("pasarpolis.com"===o.domain_name)return void n.notification.error({message:"Action on reserved domain cannot be taken"});r({query:{domain_type:d},body:{domain_name:o.domain_name}})}}),[a,r,d,m]);return(0,h.jsx)(n.Modal,{visible:o,okText:"Save",onCancel:()=>i(!1),title:"Add Domain",maskClosable:!1,width:"50%",footer:null,children:(0,h.jsx)(E,{children:(0,h.jsxs)(n.Form,{onSubmit:c,children:[(0,h.jsxs)(n.Row,{type:"flex",align:"middle",className:"row",children:[(0,h.jsx)("h4",{className:"label",children:(0,h.jsx)("b",{children:"Domain : "})}),(0,h.jsx)(x,{className:"form-item",children:l("domain_name",{rules:[{required:!0,pattern:R.yl,message:"Please enter valid domain"}]})((0,h.jsx)(n.Input,{placeholder:"Domain"}))})]}),(0,h.jsxs)(n.Row,{type:"flex",justify:"end",children:[(0,h.jsx)(n.Button,{type:"primary button",onClick:()=>i(!1),children:"Cancel"}),(0,h.jsx)(n.Button,{type:"primary button",htmlType:"submit",loading:s,children:"Save"})]})]})})})}));var M=o(4801),b=o(63569);const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[a,o]=(0,M.gN)(),[t]=(0,l.useServiceRequest)(o);return[a,async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await t(e({...a}))}]},I=e=>{const{domainType:a,title:o,location:i}=e,[{getDomainData:s={}},m]=f(b.V.getDomain),[{importDomainData:c={}},p]=f(b.V.importDomain),[{exportDomainData:u=[]},D]=f(b.V.exportDomain),[{addDomainData:g},E]=f(b.V.addDomain),[{removeDomainData:_},v]=f(b.V.removeDomain),[R,x]=(0,t.useState)(!1),[I]=(()=>{const[,e]=(0,M.gN)();return[function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(b.V.resetReduxStateDomain(a))}]})(),[{GET_DOMAIN_LOADER:N,ADD_DOMAIN_LOADER:T,REMOVE_DOMAIN_LOADER:y,EXPORT_DOMAIN_LOADER:S,IMPORT_DOMAIN_LOADER:j}]=(0,l.useLoaderContextValue)(),[{getDomainStatus:w,GET_DOMAIN_ERROR:V,addDomainStatus:k,ADD_DOMAIN_ERROR:C,removeDomainStatus:P,REMOVE_DOMAIN_ERROR:U,exportDomainStatus:Q,EXPORT_DOMAIN_ERROR:X,addDomainErrorData:G,removeDomainErrorData:z,importDomainStatus:F,importDomainErrorData:q,IMPORT_DOMAIN_ERROR:L,exportDomainErrorData:Z},$]=(0,l.useErrorContextValue)();(0,t.useEffect)((()=>()=>I(["getDomainData"])),[]);const B=(0,t.useCallback)((()=>{const e=d().parse(null===i||void 0===i?void 0:i.search);m({query:{...e,domain_type:a,page:1,page_size:10}})}),[m,a]);return(0,t.useEffect)((()=>{V?(w&&n.notification.error({message:w}),$((0,l.resetError)({GET_DOMAIN_ERROR:!1,getDomainStatus:""}))):C?((null===G||void 0===G?void 0:G.message)&&n.notification.error({message:null===G||void 0===G?void 0:G.message}),$((0,l.resetError)({ADD_DOMAIN_ERROR:!1,addDomainStatus:"",addDomainErrorData:""}))):C||"success"!==k?U?((null===z||void 0===z?void 0:z.message)&&n.notification.error({message:null===z||void 0===z?void 0:z.message}),$((0,l.resetError)({REMOVE_DOMAIN_ERROR:!1,removeDomainStatus:"",removeDomainErrorData:""}))):U||"success"!==P?X?((null===Z||void 0===Z?void 0:Z.message)&&n.notification.error({message:null===Z||void 0===Z?void 0:Z.message}),$((0,l.resetError)({EXPORT_DOMAIN_ERROR:!1,exportDomainStatus:""}))):X||"success"!==Q?L?((null===q||void 0===q?void 0:q.message)&&n.notification.error({message:null===q||void 0===q?void 0:q.message}),$((0,l.resetError)({IMPORT_DOMAIN_ERROR:!1,importDomainStatus:""}))):L||"success"!==F||((null===c||void 0===c?void 0:c.message)&&n.notification.success({message:null===c||void 0===c?void 0:c.message}),B(),$((0,l.resetError)({importDomainStatus:""}))):((null===u||void 0===u?void 0:u.message)&&n.notification.success({message:null===u||void 0===u?void 0:u.message}),$((0,l.resetError)({exportDomainStatus:""})),r()(JSON.stringify(null===u||void 0===u?void 0:u.data),`${a}Domain.json`)):((null===_||void 0===_?void 0:_.message)&&n.notification.success({message:null===_||void 0===_?void 0:_.message}),$((0,l.resetError)({removeDomainStatus:""})),B()):((null===g||void 0===g?void 0:g.message)&&n.notification.success({message:null===g||void 0===g?void 0:g.message}),$((0,l.resetError)({addDomainStatus:""})),x(!1),B())}),[V,C,G,g,U,X,_,u,Q,P,k,w,z,F,q,L,c,Z]),(0,h.jsxs)(h.Fragment,{children:[R&&(0,h.jsx)(O,{show:R,toggleAddModal:x,addDomain:E,loading:!!T,domainType:a}),(0,h.jsx)(A,{tableData:s,getTabledataRequest:m,toggleAddModal:x,loader:!!(N||y||S),title:o,removeDomain:v,importDomain:p,exportDomain:D,importingFileLoader:!!j,domainType:a,...e})]})}},4801:(e,a,o)=>{o.d(a,{pi:()=>l,gN:()=>m});var t=o(1502),n=o(63569);const i={},r=(e,a)=>{const{payload:o}=a;switch(a.type){case n.V.GET_DOMAIN:case n.V.ADD_DOMAIN:case n.V.REMOVE_DOMAIN:case n.V.IMPORT_DOMAIN:case n.V.EXPORT_DOMAIN:return{...e,...o};case n.V.RESET_REDUX_STATE_DOMAIN:if(o&&Array.isArray(o)){const a={};return o.forEach((e=>{a[e]=i[e]})),{...e,...a}}return{...e};default:return e}};var s=o(70579);const d=(0,t.createContext)(),l=e=>(0,s.jsx)(d.Provider,{value:(0,t.useReducer)(r,i),children:e.children}),m=()=>(0,t.useContext)(d)},63569:(e,a,o)=>{o.d(a,{V:()=>n});const t=o(78533).A.url,n={GET_DOMAIN:"GET_DOMAIN",GET_DOMAIN_REQUEST:"GET_DOMAIN_REQUEST",ADD_DOMAIN:"ADD_DOMAIN",ADD_DOMAIN_REQUEST:"ADD_DOMAIN_REQUEST",REMOVE_DOMAIN:"REMOVE_DOMAIN",REMOVE_DOMAIN_REQUEST:"REMOVE_DOMAIN_REQUEST",IMPORT_DOMAIN:"IMPORT_DOMAIN",IMPORT_DOMAIN_REQUEST:"IMPORT_DOMAIN_REQUEST",EXPORT_DOMAIN:"EXPORT_DOMAIN",EXPORT_DOMAIN_REQUEST:"EXPORT_DOMAIN_REQUEST",RESET_REDUX_STATE_DOMAIN:"RESET_REDUX_STATE_DOMAIN",getDomain:e=>({type:n.GET_DOMAIN_REQUEST,payload:{...e,method:"get",url:t.getDomainApi}}),addDomain:e=>({type:n.ADD_DOMAIN_REQUEST,payload:{...e,method:"post",url:t.addDomainApi}}),removeDomain:e=>({type:n.REMOVE_DOMAIN_REQUEST,payload:{...e,method:"delete",url:t.removeDomainApi}}),importDomain:e=>({type:n.IMPORT_DOMAIN_REQUEST,payload:{...e,method:"post",url:t.importDomainApi}}),exportDomain:e=>({type:n.EXPORT_DOMAIN_REQUEST,payload:{...e,method:"get",url:t.exportDomainApi}}),resetReduxStateDomain:e=>({type:n.RESET_REDUX_STATE_DOMAIN,payload:e})}},40117:(e,a,o)=>{o.d(a,{G7:()=>s,Gt:()=>r,Kh:()=>n,co:()=>t,yl:()=>i});const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=/^[0-9]{8,14}$/,i=/^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@pasarpolis.com|@pasarpolis.co.id|@ppibroker.com$/i,s=/^[a-zA-Z0-9_]*$/}}]);
//# sourceMappingURL=501.2b321786.chunk.js.map