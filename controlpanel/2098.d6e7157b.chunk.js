"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2098],{59270:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(80878);const o=a.n(r)().div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    font-size: 20px;
    color: black;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 2px solid #eeeeee;
    margin-bottom: 20px;
    border-radius: 4px 4px 0px 0px;
  }
  label {
    font-size: 11px;
    font-weight: 800;
    color: black;
  }
  .close-icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .form-submit {
    background: #fadc00;
    border-color: #fadc00;
    width: 100%;
    height: 40px;
    font-size: 13px;
    font-weight: 800;
    color: black;
  }

  .editWallet__content {
    width: 100%;
    border-bottom: 2px solid #eeeeee;
    margin-bottom: 20px;
    padding: 10px 0;
  }

  .form-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    border: solid 1.2px #333;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .edit-form-item {
    margin-bottom: 0 !important;
  }
  .container1 {
    width: 100%;
    padding: 10px 10px 0 10px;
    position: sticky;
    min-height: 20px;
  }
  .form-content {
    max-height: 200px;
    padding: 0 12px 0 16px;
    overflow-y: auto;
  }
  .heading {
    font-weight: bold;
    font-size: 14px;
    color: #333;
  }
`},38307:(e,t,a)=>{a.d(t,{AQ:()=>i,aq:()=>l,b8:()=>n,f5:()=>o});const r="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/control-panel/deposit/aso-wallet",o={wallet_id:"Wallet ID",partner_code:"Partner",provider_code:"Provider",product_code:"Product",package_code:"Package"},l={user_email:"Topup By",reference_id:"Transaction ID",from_date:"From Date",to_date:"To Date"},n={MoneyBagIcon:`${r}/moneyBag.png`,FilteredIcon:`${r}/filter.png`,PartnerIcon:`${r}/partner.png`,ProductIcon:`${r}/product.png`,ProviderIcon:`${r}/provider.png`,PackageIcon:`${r}/package.png`,BackIcon:`${r}/back.png`,BalanceIcon:`${r}/icon-balance.png`,WalletIcon:`${r}/wallet.png`,CloseIcon:`${r}/close.png`},i=e=>new Intl.NumberFormat("ID").format(e)},44364:(e,t,a)=>{a.d(t,{ej:()=>c,lO:()=>s});var r=a(1502),o=a(61302);const l={},n=(e,t)=>{const{payload:a}=t;switch(t.type){case o.u.GET_WALLET_LIST:case o.u.GET_MASTER_LIST:case o.u.GET_WALLET_SUMMARY:case o.u.ADD_WALLET:case o.u.GET_WALLET_TRANSACTION:case o.u.DEBIT_TOP_UP:case o.u.ADD_TOP_UP:case o.u.EDIT_WALLET:return{...e,...a};case o.u.RESET_REDUX_STATE_AUDIT:if(a&&Array.isArray(a)){const t={};return a.forEach((e=>{t[e]=l[e]})),{...e,...t}}return{...e};default:return e}};var i=a(70579);const d=(0,r.createContext)(),c=e=>(0,i.jsx)(d.Provider,{value:(0,r.useReducer)(n,l),children:e.children}),s=()=>(0,r.useContext)(d)},82098:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var r=a(1502),o=a(67816),l=a(38094),n=a.n(l),i=a(69732),d=a(38307),c=a(98479),s=a(55347),p=a(19804),u=a(80878);const h=a.n(u)().div`
  width: 100%;
  flex: 1;
  .ant-divider {
    height: 2px !important;
  }
  .wallet-select {
    width: 100%
  }
  .wallet-submit {
    float: right
  }
  .margin-top {
    margin-top: 20px
  }
  .filter-tag {
    align-self: center;
    margin-left: 5px;
    padding-left: 4px;
    padding-right: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .remove-filter {
    margin-left: 8px;
    cursor: pointer;
  }
  .wallet-wrapper {
    float: right;
    padding: 10px;
    border-radius: 5px;
    background: rgb(250, 220, 0);
    cursor: pointer;
  }
  .wallet-text {
    font-size: 12px;
  }
  .close {
    color: #fa541c;
  }
  .wallet-icon {
    width: 20px;
    margin-left: 20px;
  }
  .detail-icon {
    color: black; 
    width: 40px;
    height: 20px;
  }

  .ant-table-thead > tr > th .ant-table-filter-icon {
    color: white;
  }

  .ant-btn-primary {
    background-color: #333333 !important;
    border-color: #333333 !important;
    border-radius: 2px;
    color: white !important;
  }
  .ant-btn-primary[disabled] {
    color: rgba(0, 0, 0, 0.25) !important;
    background-color: #f5f5f5 !important;
    border-color: #d9d9d9 !important;
  }
  .ant-table-thead > tr > th {
    background-color: #333333;
    color: #fff;
  }
  .ant-pagination-item-active {
    background-color: #333333;
    border-color: #333333;
  }
  .title-with-margin {
    margin-left: 15px;
  }
  .ant-pagination-item {
    &:hover {
      border-color: #333333;
    }
    &:hover a {
      color: #333333;
    }
  }
  .filter-icon-wrapper {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
  .filter-icon {
    height: 16px; 
    width: 14px;
  }
  .ant-pagination-item-container i {
    color: #333333;
  }
  .ant-table-thead > tr > th.ant-table-column-sort {
    background: #333333 !important;
    margin: 0 0 0 4px;
  }
  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .anticon-filter:hover, .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .ant-table-filter-icon:hover {
    background: transparent !important;
  }
  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover .anticon-filter, .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover .ant-table-filter-icon {
    background: transparent;
  }

  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover {
    background: #333333 !important;
  }

  tr:nth-child(odd){ 
      background: #eeeeee;
  }
  tr:nth-child(even){
      background: white;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    &:hover {
      border: 1px solid #333333;
    }
    i:hover {
      color: #333333 !important;
    }
  }
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    i {
      color: #333333 !important;
    }
  }
`;var g=a(93807),m=a(59270),b=a(70579);const{CloseIcon:_}=d.b8,{Option:x}=o.Select,f=o.Form.create({})((e=>{var t,a,l,n;let{isOpen:i,closeModal:d,form:c,masterListData:s,getMasterList:p,addWalletRequest:u,ADD_WALLET_LOADER:h}=e;const{getFieldDecorator:g,getFieldValue:f}=c,v=(0,r.useCallback)((function(){p({query:{partnerCode:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}),c.resetFields(["providerCode","productCode","packageCode"])}),[]),T=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p({query:{partnerCode:f("partnerCode"),providerCode:e}}),c.resetFields(["productCode","packageCode"])}),[]),E=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];p({query:{partnerCode:f("partnerCode"),productCode:e,providerCode:f("providerCode")}}),c.resetFields(["packageCode"])}),[]),A=(0,r.useCallback)((async()=>new Promise((e=>{c.validateFields((t=>{e(!t)}))}))),[c]),L=(0,r.useCallback)((async e=>{e.preventDefault();if(!await A())return;const t={...c.getFieldsValue()};u({body:{partner_code:t.partnerCode,product_code:t.productCode,provider_code:t.providerCode,package_code_list:t.packageCode}})}),[c,A,u]);return(0,b.jsx)(o.Modal,{title:"",visible:i,footer:null,closable:!1,onCancel:d,bodyStyle:{padding:0},afterClose:()=>c.resetFields(),children:(0,b.jsxs)(m.A,{children:[(0,b.jsxs)("div",{className:"title",children:[(0,b.jsx)("strong",{children:"Add New Wallet"}),(0,b.jsx)("img",{onClick:d,src:_,className:"close-icon",alt:"close"})]}),(0,b.jsxs)(o.Form,{onSubmit:L,children:[(0,b.jsx)("label",{children:"Select Partner"}),(0,b.jsx)(o.Form.Item,{children:g("partnerCode",{rules:[{required:!0,message:"Please select partner"}]})((0,b.jsx)(o.Select,{showSearch:!0,allowClear:!0,placeholder:"Partner",onChange:v,children:null===s||void 0===s||null===(t=s.partner_code_list)||void 0===t?void 0:t.map((e=>(0,b.jsx)(x,{value:e,children:e},e)))}))}),(0,b.jsx)("label",{children:"Select Provider"}),(0,b.jsx)(o.Form.Item,{children:g("providerCode",{rules:[{required:!0,message:"Please select provider"}]})((0,b.jsx)(o.Select,{showSearch:!0,placeholder:"Provider",allowClear:!0,onChange:T,disabled:!f("partnerCode"),children:null===s||void 0===s||null===(a=s.provider_code_list)||void 0===a?void 0:a.map((e=>(0,b.jsx)(x,{value:e,children:e},e)))}))}),(0,b.jsx)("label",{children:"Select Product"}),(0,b.jsx)(o.Form.Item,{children:g("productCode",{rules:[{required:!0,message:"Please select Product"}]})((0,b.jsx)(o.Select,{showSearch:!0,placeholder:"Product",allowClear:!0,disabled:!f("providerCode"),onChange:E,children:null===s||void 0===s||null===(l=s.partner_product_details)||void 0===l?void 0:l.map((e=>(0,b.jsx)(x,{value:e.name,children:e.display_name},e.name)))}))}),(0,b.jsx)("label",{children:"Select Package"}),(0,b.jsx)(o.Form.Item,{children:g("packageCode",{rules:[{required:!0,message:"Please select Package"}]})((0,b.jsx)(o.Select,{showSearch:!0,allowClear:!0,placeholder:"Package",mode:"multiple",disabled:!f("productCode"),children:null===s||void 0===s||null===(n=s.package_code_list)||void 0===n?void 0:n.map((e=>(0,b.jsx)(x,{value:e,children:e},e)))}))}),(0,b.jsx)(o.Button,{type:"primary",htmlType:"submit",loading:!!h,className:"form-submit",children:"Submit"},"submit")]})]})})}));var v=a(8624),T=a(20941);const{FilteredIcon:E,WalletIcon:A}=d.b8,L=o.Form.create({})((e=>{var t,a;let{location:l,history:u}=e;const[m,_]=(0,r.useState)(!1),[x,L]=(0,r.useState)({}),[w,S]=(0,r.useState)({}),[y,k]=(0,r.useState)(!1),[{getWalletListData:C={}},D]=(0,T.po)(),[{getMasterListData:$={}},R]=(0,T.yn)(),[,I]=(0,T.eN)(),[W]=(0,T.AJ)(),[{GET_WALLET_LIST_LOADER:j,GET_MASTER_LIST_LOADER:U,ADD_WALLET_LOADER:P}]=(0,i.useLoaderContextValue)(),[{GET_WALLET_LIST_ERROR:M="",GET_MASTER_LIST_ERROR:O="",ADD_WALLET_ERROR:N="",getWalletListStatus:G,getMasterListStatus:Q,addWalletStatus:F,addWalletErrorData:q},z]=(0,i.useErrorContextValue)();(0,r.useEffect)((()=>{const e=n().parse(null===l||void 0===l?void 0:l.search);return ee(e),e.sort&&delete e.sort,L({...e}),S({...e}),R({query:{partnerCode:e.partner_code,productCode:e.product_code,packageCode:e.product_code,providerCode:e.provider_code}}),()=>W(["getWalletListData"])}),[]),(0,r.useEffect)((()=>{if(M)G&&o.notification.error({message:G}),z((0,i.resetError)({GET_WALLET_LIST_ERROR:!1,getWalletListStatus:""}));else if(O)Q&&o.notification.error({message:Q}),z((0,i.resetError)({GET_MASTER_LIST_ERROR:!1,getMasterListStatus:""}));else if(N){var e,t,a;if(null!==q&&void 0!==q&&q.errors&&null!==q&&void 0!==q&&q.errors.length&&null!==q&&void 0!==q&&null!==(e=q.errors[0])&&void 0!==e&&e.message)(null===q||void 0===q||null===(t=q.errors[0])||void 0===t?void 0:t.message)&&o.notification.error({message:null===q||void 0===q||null===(a=q.errors[0])||void 0===a?void 0:a.message});else F&&o.notification.error({message:F});z((0,i.resetError)({ADD_WALLET_ERROR:!1,addWalletStatus:"",addWalletErrorData:""}))}else if(!N&&"success"===F){F&&o.notification.success({message:F}),k(!1);const e=n().parse(null===l||void 0===l?void 0:l.search);ee(e),z((0,i.resetError)({addWalletStatus:""}))}}),[M,O,N,G,Q,F,q]);const V=(0,r.useCallback)(((e,t)=>(0,b.jsx)("div",{className:e,children:(0,b.jsx)("span",{children:t})})),[]),B=(0,r.useCallback)(((e,t)=>{L({...x,[t]:e})}),[x,L]),Y=(0,r.useCallback)(((e,t)=>{e.preventDefault(),R({query:{partnerCode:x.partner_code,productCode:x.product_code,packageCode:x.package_code,providerCode:x.provider_code}});const a={...x,page:1},r=(0,g.A)(a);u.push({pathname:null===l||void 0===l?void 0:l.pathname,search:r}),ee(a),_({...m,[t]:!1}),S(x)}),[x,m]),X=(0,r.useCallback)((()=>(0,b.jsx)("div",{className:"filter-icon-wrapper",children:(0,b.jsx)("img",{src:E,className:"filter-icon",alt:""})})),[]),J=(0,r.useCallback)(((e,t,a)=>(0,b.jsx)(c.Y2,{searchText:x[e]?x[e]:void 0,onInputChange:t=>B(t.target.value,e),onSearch:t=>Y(t,e),optionData:$&&Array.isArray($[t])?$[t]:[],renderOption:"product_code"===e?e=>e.map((e=>(0,b.jsx)("option",{value:e.name,children:e.display_name},e.name))):void 0})),[x,$,B,Y]),K=[{key:"wallet_id",title:V("title-with-margin","Wallet ID"),dataIndex:"wallet_id",filterDropdown:(0,b.jsx)(c.ZY,{idIdentifier:"wallet_id",searchText:x.wallet_id?x.wallet_id:void 0,onInputChange:e=>B(e.target.value,"wallet_id"),onSearch:e=>Y(e,"wallet_id")}),filterIcon:X(),filterDropdownVisible:null===m||void 0===m?void 0:m.wallet_id,onFilterDropdownVisibleChange:e=>_({...m,wallet_id:e}),sorter:!0,sortDirections:["descend","ascend"]},{key:"partner_name",title:V("title-with-margin","Partner"),dataIndex:"partner_name",render:(e,t)=>(0,b.jsx)("div",{children:(null===t||void 0===t?void 0:t.partner_name)||(null===t||void 0===t?void 0:t.partner_code)}),filterDropdown:J("partner_code","partner_code_list"),filterIcon:X(),filterDropdownVisible:null===m||void 0===m?void 0:m.partner_code,onFilterDropdownVisibleChange:e=>_({...m,partner_code:e})},{key:"provider_name",title:V("title-with-margin","Provider"),dataIndex:"provider_name",render:(e,t)=>(0,b.jsx)("div",{children:(null===t||void 0===t?void 0:t.provider_name)||(null===t||void 0===t?void 0:t.provider_code)}),filterDropdown:J("provider_code","provider_code_list"),filterIcon:X(),filterDropdownVisible:null===m||void 0===m?void 0:m.provider_code,onFilterDropdownVisibleChange:e=>_({...m,provider_code:e})},{key:"product_name",title:V("title-with-margin","Product"),dataIndex:"product_name",render:(e,t)=>(0,b.jsx)("div",{children:(null===t||void 0===t?void 0:t.product_name)||(null===t||void 0===t?void 0:t.product_code)}),filterDropdown:J("product_code","partner_product_details"),filterIcon:X(),filterDropdownVisible:null===m||void 0===m?void 0:m.product_code,onFilterDropdownVisibleChange:e=>_({...m,product_code:e})},{key:"package_name",title:V("title-with-margin","Package Name"),dataIndex:"package_name",filterDropdown:J("package_code","package_code_list"),filterIcon:X(),filterDropdownVisible:null===m||void 0===m?void 0:m.package_code,onFilterDropdownVisibleChange:e=>_({...m,package_code:e})},{key:"total_balance",title:V("title-without-margin","Balance (Rp)"),dataIndex:"total_balance",render:e=>(0,d.AQ)(e)},{key:"detail",title:()=>(0,b.jsx)(v.A,{requiredPermission:"ops.aso_wallet_detail",children:V("title-without-margin","Detail")}),render:e=>(0,b.jsx)(v.A,{requiredPermission:"ops.aso_wallet_detail",children:(0,b.jsx)(o.Icon,{type:"eye",onClick:()=>u.push(`aso-wallet/${e.wallet_id}`),className:"detail-icon",theme:"filled"})})}],Z=(0,r.useCallback)((e=>{const t=n().parse(null===l||void 0===l?void 0:l.search);delete t[e];const a=(0,g.A)(t);return u.push({pathname:null===l||void 0===l?void 0:l.pathname,search:a}),t}),[l]),H=(0,r.useCallback)((e=>{const t={...x,[e]:void 0};L(t),S(t),R({query:{partnerCode:t.partner_code,productCode:t.product_code,packageCode:t.product_code,providerCode:t.provider_code}});const a=Z(e);ee(a)}),[x,Z,R,S,L]),ee=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:t}=e,a=Number(t)||1;delete e.page,D({query:{...e,page_number:a}})}),[D]),te=(0,r.useCallback)(((e,t,a)=>{const{current:r}=e,o={...n().parse(null===l||void 0===l?void 0:l.search),page:r};"wallet_id"===(null===a||void 0===a?void 0:a.field)&&"descend"===(null===a||void 0===a?void 0:a.order)?o.sort="desc":"wallet_id"===(null===a||void 0===a?void 0:a.field)&&"ascend"===(null===a||void 0===a?void 0:a.order)?o.sort="asc":o.sort=void 0;const i=(0,g.A)(o);u.push({pathname:null===l||void 0===l?void 0:l.pathname,search:i}),ee(o)}),[n(),l]),ae=(0,r.useCallback)((e=>{k(e),e?R():R({query:{partnerCode:w.partner_code,productCode:w.product_code,packageCode:w.package_code,providerCode:w.provider_code}})}),[k,R]);return(0,b.jsx)(s.A,{className:"referral-table",children:(0,b.jsx)(h,{children:(0,b.jsxs)(o.Spin,{spinning:j||U,children:[(0,b.jsxs)(o.Row,{type:"flex",align:"middle",children:[(0,b.jsx)(o.Col,{sm:4,md:8,children:(0,b.jsx)("h3",{children:(0,b.jsx)("b",{children:"ASO Wallet"})})}),(0,b.jsx)(v.A,{requiredPermission:"ops.aso_wallet_add",children:(0,b.jsx)(o.Col,{sm:20,md:16,children:(0,b.jsxs)("div",{className:"wallet-wrapper",onClick:()=>ae(!0),children:[(0,b.jsx)("strong",{className:"wallet-text",children:"Add New Wallet"}),(0,b.jsx)("img",{src:A,className:"wallet-icon",alt:""})]})})})]}),(0,b.jsx)(o.Divider,{}),w&&Object.keys(w).map(((e,t)=>w[e]?(0,b.jsxs)(o.Tag,{className:"filter-tag",color:"volcano",children:[d.f5[e]," - ",w[e],(0,b.jsx)("span",{className:"remove-filter",onClick:t=>H(e),children:(0,b.jsx)(o.Icon,{type:"close",className:"close"})})]},t):null)),(0,b.jsx)(p.A,{columns:K,rowKey:e=>e.reference_id,dataSource:null===C||void 0===C?void 0:C.data,pagination:{pageSize:10,total:Number(null===C||void 0===C||null===(t=C.metadata)||void 0===t?void 0:t.total_count),current:null===C||void 0===C||null===(a=C.metadata)||void 0===a?void 0:a.page_number},onChange:te,className:"isoSearchableTable"}),(0,b.jsx)(f,{closeModal:()=>ae(!1),isOpen:y,masterListData:$,getMasterList:R,addWalletRequest:I,ADD_WALLET_LOADER:P})]})})})}));var w=a(44364);const S=function(e){return(0,b.jsx)(w.ej,{children:(0,b.jsx)(L,{...e})})}},19804:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(21577),o=a(80878),l=a.n(o),n=a(34618),i=a(67050),d=a(93317);const c=l()(r.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .select-container {
    display:flex;
    flex-direction:column;
    width:200px;
    height:auto;
  }
  
  .ant-table-thead > tr > th {
    color: ${(0,n.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,n.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,n.palette)("secondary",1)};
      margin: ${e=>"rtl"===e["data-rtl"]?"0 4px 0 0":"0 0 0 4px"};
    }
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 15px;
    white-space: nowrap;
    text-align: ${e=>"rtl"===e["data-rtl"]?"right":"left"};

    p {
      margin-bottom: 0;
    }
  }

  .ant-table-tbody > tr > td {
    font-size: 12px;
    color: ${(0,n.palette)("text",3)};
    border-bottom: 1px solid ${(0,n.palette)("border",0)};

    a {
      color: ${(0,n.palette)("primary",0)};
      ${(0,i.kY)()};

      &:hover {
        color: ${(0,n.palette)("primary",4)};
      }
    }
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-bordered .ant-table-thead > tr > th {
    border-bottom: 1px solid ${(0,n.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,n.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }
  .ant-table-thead > tr > th .anticon-filter, .ant-table-thead > tr > th .ant-table-filter-icon {
    left: 0 !important;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,n.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,n.palette)("border",0)};

    a {
      border: 0;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    transform: ${e=>"rtl"===e["data-rtl"]?"rotate(180deg)":"rotate(0)"};
  }

  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};
  }

  .ant-pagination-item {
    margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};

    &:hover {
      border-color: ${(0,n.palette)("primary",0)};
      ${(0,i.kY)()};
    }

    &:hover a {
      color: ${(0,n.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,n.palette)("primary",0)};
    border-color: ${(0,n.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,n.palette)("grayscale",6)};

    p {
      color: ${(0,n.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,n.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,n.palette)("secondary",1)};
    color: ${(0,n.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,i.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,n.palette)("secondary",1)};
    color: ${(0,n.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,i.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,n.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,n.palette)("border",0)};
      ${(0,i.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      .ant-select-selection{
        background-color:#e9ebf1 !important;
        border:none !important;
      }

      .ant-input-group-addon{
        background:#efefef !important;
        border:none !important;
      }
     

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,n.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        font-family:italic;
        border: 1px solid ${(0,n.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #e9ebf1;
        ${(0,i.Vq)("3px 0 0 3px")};
        ${(0,i.kY)()};
        ${(0,i.MS)("none")};

       
        &:focus,
        &:hover {
          border-color: ${(0,n.palette)("secondary",7)};
          ${(0,i.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,n.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,n.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,i.kY)()};

        &:hover {
          background-color: ${(0,n.palette)("primary",1)};
        }
      }
    }

    .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters .anticon-filter.ant-table-filter-open, 
    .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters .ant-table-filter-icon.ant-table-filter-open {
      background: transparent;
    }
    .ant-table-thead > tr > th {
      word-break: keep-all;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          order: -1;
        }
      }
    }
  }

  &.isoGroupTable {
    .ant-table-thead > tr {
      th {
        border: 1px solid ${(0,n.palette)("border",0)};
        border-left: 0;

        &[rowspan] {
          text-align: center;
        }

        &.isoImageCell {
          padding: 3px;
        }
      }

      &:first-child {
        th {
          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,n.palette)("border",0)};
          }
        }
      }

      &:last-child {
        th {
          border-top: 0;
        }
      }
    }

    .ant-table-tbody {
      .ant-table-row {
        td {
          border-right: 1px solid ${(0,n.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,n.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,n.palette)("border",0)};
          }

          &.isoImageCell {
            padding: 3px;
          }
        }
      }
    }
  }

  &.isoEditableTable {
    .isoEditData {
      .isoEditDataWrapper {
        display: flex;
        align-items: center;

        input {
          font-size: 12px;
          font-weight: 400;
          color: ${(0,n.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,n.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,i.Vq)("3px")};
          ${(0,i.MS)()};
          ${(0,i.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,n.palette)("border",0)};
            ${(0,i.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,n.palette)("grayscale",0)};
          }
        }

        .isoEditIcon {
          cursor: pointer;
        }
      }

      .isoDataWrapper {
        display: flex;
        align-items: center;

        .isoEditIcon {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 auto 0 0":"0 0 0 auto"};
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`,s=l().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,n.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,n.palette)("primary",0)};
      background-color: ${(0,n.palette)("primary",0)};
    }
  }
`,p=((0,d.A)(s),(0,d.A)(c))},61302:(e,t,a)=>{a.d(t,{u:()=>o});const r=a(78533).A.url,o={GET_WALLET_LIST:"GET_WALLET_LIST",GET_WALLET_LIST_REQUEST:"GET_WALLET_LIST_REQUEST",GET_MASTER_LIST:"GET_MASTER_LIST",GET_MASTER_LIST_REQUEST:"GET_MASTER_LIST_REQUEST",GET_WALLET_SUMMARY:"GET_WALLET_SUMMARY",GET_WALLET_SUMMARY_REQUEST:"GET_WALLET_SUMMARY_REQUEST",ADD_WALLET:"ADD_WALLET",ADD_WALLET_REQUEST:"ADD_WALLET_REQUEST",GET_WALLET_TRANSACTION:"GET_WALLET_TRANSACTION",GET_WALLET_TRANSACTION_REQUEST:"GET_WALLET_TRANSACTION_REQUEST",ADD_TOP_UP:"ADD_TOP_UP",ADD_TOP_UP_REQUEST:"ADD_TOP_UP_REQUEST",DEBIT_TOP_UP:"DEBIT_TOP_UP",DEBIT_TOP_UP_REQUEST:"DEBIT_TOP_UP_REQUEST",EDIT_WALLET:"EDIT_WALLET",EDIT_WALLET_REQUEST:"EDIT_WALLET_REQUEST",RESET_REDUX_STATE_WALLET:"RESET_REDUX_STATE_WALLET",getWalletList:e=>({type:o.GET_WALLET_LIST_REQUEST,payload:{...e,method:"get",url:r.getWalletListUrl}}),getMasterList:e=>({type:o.GET_MASTER_LIST_REQUEST,payload:{...e,method:"get",url:r.getMasterListUrl}}),getWalletSummary:e=>({type:o.GET_WALLET_SUMMARY_REQUEST,payload:{...e,method:"get",url:r.getWalletSummaryUrl}}),getWalletTransaction:e=>({type:o.GET_WALLET_TRANSACTION_REQUEST,payload:{...e,method:"get",url:r.getWalletTransactionUrl}}),addWallet:e=>({type:o.ADD_WALLET_REQUEST,payload:{...e,method:"post",url:r.addWalletUrl}}),addTopUp:e=>({type:o.ADD_TOP_UP_REQUEST,payload:{...e,method:"post",url:r.addTopUpUrl}}),debitTopUp:e=>({type:o.DEBIT_TOP_UP_REQUEST,payload:{...e,method:"post",url:r.debitTopUpUrl}}),editWallet:e=>({type:o.EDIT_WALLET_REQUEST,payload:{...e,method:"post",url:r.editWalletUrl}}),resetReduxStateWallet:e=>({type:o.RESET_REDUX_STATE_WALLET,payload:e})}},20941:(e,t,a)=>{a.d(t,{AJ:()=>m,F4:()=>g,Mt:()=>h,PG:()=>u,XS:()=>s,eN:()=>p,po:()=>i,xB:()=>c,yn:()=>d});var r=a(69732),o=a(44364),l=a(61302);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=(0,o.lO)(),[l]=(0,r.useServiceRequest)(a);return[t,async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(e({...t}))}]},i=()=>n(l.u.getWalletList),d=()=>n(l.u.getMasterList),c=()=>n(l.u.getWalletTransaction),s=()=>n(l.u.getWalletSummary),p=()=>n(l.u.addWallet),u=()=>n(l.u.addTopUp),h=()=>n(l.u.debitTopUp),g=()=>n(l.u.editWallet),m=()=>{const[,e]=(0,o.lO)();return[function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(l.u.resetReduxStateWallet(t))}]}},8624:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(1502),o=a.n(r),l=a(24952);class n extends o().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}n.defaultProps={permissions:[]};const i=(0,l.connect)((e=>({permissions:e.Auth.permissions})),{})(n)},21577:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=2098.d6e7157b.chunk.js.map