"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6361],{59270:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(80878);const o=a.n(r)().div`
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
`},38307:(e,t,a)=>{a.d(t,{AQ:()=>i,aq:()=>l,b8:()=>n,f5:()=>o});const r="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/control-panel/deposit/aso-wallet",o={wallet_id:"Wallet ID",partner_code:"Partner",provider_code:"Provider",product_code:"Product",package_code:"Package"},l={user_email:"Topup By",reference_id:"Transaction ID",from_date:"From Date",to_date:"To Date"},n={MoneyBagIcon:`${r}/moneyBag.png`,FilteredIcon:`${r}/filter.png`,PartnerIcon:`${r}/partner.png`,ProductIcon:`${r}/product.png`,ProviderIcon:`${r}/provider.png`,PackageIcon:`${r}/package.png`,BackIcon:`${r}/back.png`,BalanceIcon:`${r}/icon-balance.png`,WalletIcon:`${r}/wallet.png`,CloseIcon:`${r}/close.png`},i=e=>new Intl.NumberFormat("ID").format(e)},44364:(e,t,a)=>{a.d(t,{ej:()=>s,lO:()=>c});var r=a(1502),o=a(61302);const l={},n=(e,t)=>{const{payload:a}=t;switch(t.type){case o.u.GET_WALLET_LIST:case o.u.GET_MASTER_LIST:case o.u.GET_WALLET_SUMMARY:case o.u.ADD_WALLET:case o.u.GET_WALLET_TRANSACTION:case o.u.DEBIT_TOP_UP:case o.u.ADD_TOP_UP:case o.u.EDIT_WALLET:return{...e,...a};case o.u.RESET_REDUX_STATE_AUDIT:if(a&&Array.isArray(a)){const t={};return a.forEach((e=>{t[e]=l[e]})),{...e,...t}}return{...e};default:return e}};var i=a(70579);const d=(0,r.createContext)(),s=e=>(0,i.jsx)(d.Provider,{value:(0,r.useReducer)(n,l),children:e.children}),c=()=>(0,r.useContext)(d)},36361:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(1502),o=a(67816),l=a(38094),n=a.n(l),i=a(17823),d=a.n(i),s=a(74394),c=a(69732),p=a(59270),u=a(38307),m=a(70579);const{CloseIcon:g}=u.b8,h=o.Form.create({})((e=>{var t;let{closeModal:a,visible:l,getMasterListData:n,getWalletSummaryData:i,form:d,editWalletRequest:s,loader:c}=e;const{getFieldDecorator:u}=d,[h,b]=(0,r.useState)({});(0,r.useEffect)((()=>{d.resetFields();const e=null===i||void 0===i?void 0:i.package_code_list.split(","),t={};e&&Array.isArray(e)&&e.forEach((e=>(t[e]=!0,t))),b(t)}),[i,n]);const x=(0,r.useCallback)((async()=>new Promise((e=>{d.validateFields((t=>{e(!t)}))}))),[d]),f=(0,r.useCallback)((async e=>{e.preventDefault();if(!await x())return;const t=d.getFieldsValue(),a=[];Object.keys(t).forEach((e=>{t[e]&&a.push(e)}));const r={wallet_id:null===i||void 0===i?void 0:i.wallet_id,partner_code:null===i||void 0===i?void 0:i.partner_code,product_code:null===i||void 0===i?void 0:i.product_code,provider_code:null===i||void 0===i?void 0:i.provider_code,package_code_list:a};s({body:r})}),[x,d,s]);return(0,m.jsx)(o.Modal,{title:"",visible:l,footer:null,closable:!1,onCancel:a,bodyStyle:{padding:0},children:(0,m.jsxs)(p.A,{children:[(0,m.jsxs)("div",{className:"title",children:[(0,m.jsx)("strong",{children:"Edit Wallet"}),(0,m.jsx)("img",{onClick:a,src:g,className:"close-icon",alt:"close"})]}),(0,m.jsxs)("div",{className:"editWallet__content",children:[(0,m.jsx)("h1",{className:"heading",children:" Select Packages "}),(0,m.jsxs)("div",{className:"form-container",children:[(0,m.jsx)("p",{className:"container1",children:null===i||void 0===i?void 0:i.package_code_list}),(0,m.jsx)("div",{className:"form-content",children:(0,m.jsx)(o.Form,{onSubmit:f,children:null===n||void 0===n||null===(t=n.package_code_list)||void 0===t?void 0:t.map(((e,t)=>(0,m.jsx)(o.Form.Item,{className:"edit-form-item",children:u(e,{initialValue:!!h[e],valuePropName:"checked"})((0,m.jsx)(o.Checkbox,{children:e}))},t)))})})]})]}),(0,m.jsx)(o.Button,{type:"primary",htmlType:"submit",className:"form-submit",loading:c,onClick:f,children:"Submit"},"submit")]})})}));var b=a(77980);const{CloseIcon:x}=u.b8,f=o.Form.create({})((e=>{let{isOpen:t,closeModal:a,form:l,ADD_TOP_UP_LOADER:n,DEBIT_TOP_UP_LOADER:i,addTopUpRequest:d,debitTopUpRequest:s,walletId:c,balance:u}=e;const{getFieldDecorator:g}=l,h=(0,r.useCallback)((async()=>new Promise((e=>{l.validateFields((t=>{e(!t)}))}))),[l]),f=(0,r.useCallback)((async e=>{e.preventDefault();if(!await h())return;const t={...l.getFieldsValue()},a=t.debit;delete t.debit;const r=+t.amount;a?r>+u?(0,b.D)("error","Please provide valid amount"):s({body:{...t,amount:+t.amount,wallet_id:c}}):d({body:{...t,amount:+t.amount,wallet_id:c}})}),[h,l,d,s]);return(0,m.jsx)(o.Modal,{title:"",visible:t,footer:null,closable:!1,onCancel:a,bodyStyle:{padding:0},afterClose:()=>l.resetFields(),children:(0,m.jsxs)(p.A,{children:[(0,m.jsxs)("div",{className:"title",children:[(0,m.jsx)("strong",{children:"Topup Wallet"}),(0,m.jsx)("img",{onClick:a,src:x,className:"close-icon",alt:"close"})]}),(0,m.jsxs)(o.Form,{onSubmit:f,children:[(0,m.jsx)("label",{children:"Transaction ID"}),(0,m.jsx)(o.Form.Item,{children:g("reference_id",{rules:[{required:!0,message:"Transaction ID can not be empty"}]})((0,m.jsx)(o.Input,{placeholder:"Transaction ID"}))}),(0,m.jsx)("label",{children:"Topup Amount (Rp)"}),(0,m.jsx)(o.Form.Item,{children:g("amount",{rules:[{required:!0,message:"Topup Amount can not be empty"},{pattern:/^\d*\.?\d*$/,message:"Amount should be numeric"}]})((0,m.jsx)(o.Input,{placeholder:"Topup Amount"}))}),(0,m.jsx)("label",{children:"Remark"}),(0,m.jsx)(o.Form.Item,{children:g("remarks",{rules:[{required:!0,message:"Remark can not be empty"}]})((0,m.jsx)(o.Input.TextArea,{placeholder:"Remark"}))}),(0,m.jsx)(o.Form.Item,{children:g("debit",{rules:[{required:!1}]})((0,m.jsx)(o.Checkbox,{children:"Debit"}))}),(0,m.jsx)(o.Button,{type:"primary",htmlType:"submit",loading:!!n||!!i,className:"form-submit",children:"Submit"},"submit")]})]})})}));var _=a(8624),v=a(98479),T=a(55347),E=a(19804),y=a(80878);const A=a.n(y)().div`
  width: 100%;
  flex: 1;
  .ant-card-bordered {
    margin-bottom: 40px;
    border: 1px solid #e8e8e8;
  }
  .card {
    box-shadow: 0 10px 20px 0 rgb(85 85 85 / 5%);
    border: 30px;
    padding: 0px;
    background: white;
    margin: 0px 0px 40px 0px !important;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
  }
  .margin {
    margin: 10px 0px;
    padding: 20px !important;
    display: flex;
    flex-direction: row;
  }
  .balance-value {
    color: white;
  }
  .topup-detail-wrapper {
    background: black;
    flex: 1;
    align-items: center;
    border-radius: 0px 7px 7px 0px;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px !important;
  }
  .ant-divider {
    height: 2px !important;
  }
  .back-icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
    margin: 0px 10px 0.5em 0px;
  }
  .detail {
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
  }
  .detail-icon {
    height: 34px;
    width: 34px;
  }
  .detail-name {
    font-size: 10px;
  }
  .detail-value {
    font-size: 14px;
    color: #333;
    font-weight: 800;
  }
  .wallet-select {
    width: 100%;
  }
  .wallet-submit {
    float: right;
  }
  .margin-top {
    margin-top: 20px;
  }
  .filter-tag {
    align-self: center;
    margin-left: 5px;
    padding-left: 4px;
    padding-right: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .close {
    color: #fa541c;
  }
  .remove-filter {
    margin-left: 8px;
    cursor: pointer;
  }
  .wallet-wrapper {
    float: right;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    background: rgb(250, 220, 0);
    cursor: pointer;
    display: flex;
  }
  .wallet-text {
    font-size: 13px;
    font-weight: 800;
  }
  .wallet-icon {
    width: 20px;
    margin-left: 20px;
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
  .display {
    display: flex;
  }
  .ant-pagination-item-container i {
    color: #333333;
  }
  tr:nth-child(odd) {
    background: #eeeeee;
  }
  tr:nth-child(even) {
    background: white;
  }
  .ant-table-thead > tr > th.ant-table-column-sort {
    background: #333333 !important;
    margin: 0 0 0 4px;
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .anticon-filter:hover,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .ant-table-filter-icon:hover {
    background: transparent !important;
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover
    .anticon-filter,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover
    .ant-table-filter-icon {
    background: transparent;
  }

  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover {
    background: #333333 !important;
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

  .edit-detail {
    display: grid;
    place-items: center;
    margin-right: 12px;
    text-align: center;
  }

  .edit-detail > div {
    height: 36px;
    width: 104px;
    float: right;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background: rgb(250, 220, 0);
    cursor: pointer;
    font-size: 12px;
  }
`;var S=a(93807),D=a(20941);const{FilteredIcon:L,PartnerIcon:R,ProductIcon:w,ProviderIcon:k,PackageIcon:I,BackIcon:j,MoneyBagIcon:$,BalanceIcon:U}=u.b8,W=o.Form.create({})((e=>{var t,a;let{location:l,history:i,match:p}=e;const[g,b]=(0,r.useState)(!1),[x,y]=(0,r.useState)({}),[W,P]=(0,r.useState)({}),[N,C]=(0,r.useState)(!1),[O,M]=(0,r.useState)(!1),[{getWalletTransactionData:G={}},Q]=(0,D.xB)(),[{getMasterListData:q={}},B]=(0,D.yn)(),[{getWalletSummaryData:F={}},z]=(0,D.XS)(),[,Y]=(0,D.PG)(),[,V]=(0,D.F4)(),[,X]=(0,D.Mt)(),J=(0,r.useMemo)((()=>(null===F||void 0===F?void 0:F.data)&&Array.isArray(null===F||void 0===F?void 0:F.data)&&(null===F||void 0===F?void 0:F.data[0])),[F]),[Z]=(0,D.AJ)(),[{ADD_TOP_UP_LOADER:K,DEBIT_TOP_UP_LOADER:H,GET_WALLET_TRANSACTION_LOADER:ee,GET_WALLET_SUMMARY_LOADER:te,GET_MASTER_LIST_LOADER:ae}]=(0,c.useLoaderContextValue)(),[re,oe]=(0,c.useErrorContextValue)(),{GET_WALLET_TRANSACTION_ERROR:le="",GET_WALLET_SUMMARY_ERROR:ne="",ADD_TOP_UP_ERROR:ie="",DEBIT_TOP_UP_ERROR:de="",EDIT_WALLET_ERROR:se="",getWalletTransactionStatus:ce,getWalletSummaryStatus:pe,addTopUpStatus:ue,addTopUpErrorData:me,debitTopUpStatus:ge,debitTopUpErrorData:he,editWalletStatus:be="",editWalletErrorData:xe=""}=re;(0,r.useEffect)((()=>{const e=n().parse(null===l||void 0===l?void 0:l.search);return De(e),z({query:{wallet_id:(0,s.get)(p,"params.id")}}),B(),e.sort&&delete e.sort,y({...e}),P({...e}),()=>Z(["getWalletTransactionData","getWalletSummaryData"])}),[]),(0,r.useEffect)((()=>{if(le)ce&&o.notification.error({message:ce}),oe((0,c.resetError)({GET_WALLET_TRANSACTION_ERROR:!1,getWalletTransactionStatus:""}));else if(ne)pe&&o.notification.error({message:pe}),oe((0,c.resetError)({GET_WALLET_SUMMARY_ERROR:!1,getWalletSummaryStatus:""}));else if(ie){var e,t,a;if(null!==me&&void 0!==me&&me.errors&&null!==me&&void 0!==me&&me.errors.length&&null!==me&&void 0!==me&&null!==(e=me.errors[0])&&void 0!==e&&e.message)(null===me||void 0===me||null===(t=me.errors[0])||void 0===t?void 0:t.message)&&o.notification.error({message:null===me||void 0===me||null===(a=me.errors[0])||void 0===a?void 0:a.message});else ue&&o.notification.error({message:ue});oe((0,c.resetError)({ADD_TOP_UP_ERROR:!1,addTopUpStatus:"",addTopUpErrorData:""}))}else if(ie||"success"!==ue){if(de){var r,i,d;if(null!==he&&void 0!==he&&he.errors&&null!==he&&void 0!==he&&he.errors.length&&null!==he&&void 0!==he&&null!==(r=he.errors[0])&&void 0!==r&&r.message)(null===he||void 0===he||null===(i=he.errors[0])||void 0===i?void 0:i.message)&&o.notification.error({message:null===he||void 0===he||null===(d=he.errors[0])||void 0===d?void 0:d.message});else ge&&o.notification.error({message:ge});oe((0,c.resetError)({DEBIT_TOP_UP_ERROR:!1,debitTopUpStatus:"",debitTopUpErrorData:""}))}else if(!de&&"success"===ge){ge&&o.notification.success({message:ge}),C(!1);const e=n().parse(null===l||void 0===l?void 0:l.search);De(e),z({query:{wallet_id:(0,s.get)(p,"params.id")}}),C(!1),oe((0,c.resetError)({debitTopUpStatus:""}))}}else{ue&&o.notification.success({message:ue}),C(!1);const e=n().parse(null===l||void 0===l?void 0:l.search);De(e),z({query:{wallet_id:(0,s.get)(p,"params.id")}}),C(!1),oe((0,c.resetError)({addTopUpStatus:""}))}if(se){var u,m,g;if(xe&&null!==xe&&void 0!==xe&&xe.errors.length&&null!==xe&&void 0!==xe&&null!==(u=xe.errors[0])&&void 0!==u&&u.message)(null===xe||void 0===xe||null===(m=xe.errors[0])||void 0===m?void 0:m.message)&&o.notification.error({message:null===xe||void 0===xe||null===(g=xe.errors[0])||void 0===g?void 0:g.message});else be&&o.notification.error({message:be});const e=n().parse(null===l||void 0===l?void 0:l.search);De(e),z({query:{wallet_id:(0,s.get)(p,"params.id")}}),oe((0,c.resetError)({EDIT_WALLET_ERROR:!1,editWalletStatus:"",editWalletErrorData:""})),M(!1)}else if(!se&&"success"===be){be&&o.notification.success({message:be}),M(!1);const e=n().parse(null===l||void 0===l?void 0:l.search);De(e),z({query:{wallet_id:(0,s.get)(p,"params.id")}}),M(!1),oe((0,c.resetError)({editWalletStatus:""}))}}),[le,ne,ie,de,se,ce,pe,ue,me,ge,he,be,xe]);const fe=(0,r.useCallback)(((e,t)=>(0,m.jsx)("div",{className:e,children:(0,m.jsx)("span",{children:t})})),[]),_e=(0,r.useCallback)(((e,t)=>{y({...x,[t]:"reference_id"===t?[e]:null===e||void 0===e?void 0:e.trim()})}),[x]),ve=(0,r.useCallback)(((e,t)=>{e.preventDefault();const a={...x,page:1},r=(0,S.A)(a);i.push({pathname:null===l||void 0===l?void 0:l.pathname,search:r}),De(a),b({...g,[t]:!1}),P(x)}),[x]),Te=(0,r.useCallback)(((e,t)=>{const{startDate:a,endDate:r}=e,o={from_date:`${a} 00:00:00`,to_date:`${r} 23:59:59`};y({...x,...o});const n={...x,...o,page:1},d=(0,S.A)(n);i.push({pathname:null===l||void 0===l?void 0:l.pathname,search:d}),De(n),b({...g,[t]:!1}),P(n)}),[x,g,l]),Ee=(0,r.useCallback)((()=>(0,m.jsx)("div",{className:"filter-icon-wrapper",children:(0,m.jsx)("img",{src:L,className:"filter-icon",alt:""})})),[]),ye=[{key:"reference_id",title:fe("title-with-margin","Transaction ID"),dataIndex:"reference_id",filterDropdown:(0,m.jsx)(v.ZY,{idIdentifier:"reference_id",searchText:x.reference_id?x.reference_id:void 0,onInputChange:e=>_e(e.target.value,"reference_id"),onSearch:e=>ve(e,"reference_id")}),filterIcon:Ee(!1),filterDropdownVisible:null===g||void 0===g?void 0:g.reference_id,onFilterDropdownVisibleChange:e=>b({...g,reference_id:e}),sorter:!0,sortDirections:["descend","ascend"]},{key:"created_at",title:fe("title-with-margin","Topup Date"),dataIndex:"created_at",render:e=>d()(e).tz("Asia/Jakarta").format("lll"),filterDropdown:(0,m.jsx)(v._Q,{idIdentifier:"created_at",onInputChange:e=>_e(e.target.value,"created_at"),onSearch:e=>Te(e,"created_at"),startDate:x.from_date,endDate:x.to_date}),filterIcon:Ee(),filterDropdownVisible:null===g||void 0===g?void 0:g.created_at,onFilterDropdownVisibleChange:e=>b({...g,created_at:e})},{key:"user_email",title:fe("title-with-margin","Topup By"),dataIndex:"user_email",filterDropdown:(0,m.jsx)(v.ZY,{idIdentifier:"user_email",searchText:x.user_email?x.user_email:void 0,onInputChange:e=>_e(e.target.value,"user_email"),onSearch:e=>ve(e,"user_email")}),filterIcon:Ee(),filterDropdownVisible:null===g||void 0===g?void 0:g.user_email,onFilterDropdownVisibleChange:e=>b({...g,user_email:e})},{key:"amount",title:fe("title-without-margin","Topup Amount (Rp)"),dataIndex:"amount",render:e=>(0,u.AQ)(e)},{key:"remarks",title:fe("title-without-margin","Remark"),dataIndex:"remarks"}],Ae=(0,r.useCallback)((e=>{const t=n().parse(null===l||void 0===l?void 0:l.search);delete t[e];const a=(0,S.A)(t);return i.push({pathname:null===l||void 0===l?void 0:l.pathname,search:a}),t}),[l]),Se=(0,r.useCallback)((e=>{y({...x,[e]:void 0}),P({...W,[e]:void 0});const t=Ae(e);De(t)}),[x,Ae,P,y]),De=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:t}=e,a=Number(t)||1;delete e.page,Q({query:{...e,page_number:a,action:"credit,debit",wallet_id:(0,s.get)(p,"params.id")}})}),[Q]),Le=(0,r.useCallback)(((e,t,a)=>{const{current:r}=e,o={...n().parse(null===l||void 0===l?void 0:l.search),page:r};"reference_id"===(null===a||void 0===a?void 0:a.field)&&"descend"===(null===a||void 0===a?void 0:a.order)?o.sort="desc":"reference_id"===(null===a||void 0===a?void 0:a.field)&&"ascend"===(null===a||void 0===a?void 0:a.order)?o.sort="asc":o.sort=void 0;const d=(0,S.A)(o);i.push({pathname:null===l||void 0===l?void 0:l.pathname,search:d}),De(o)}),[n(),l]),Re=e=>{let{icon:t,name:a="",value:r=""}=e;return(0,m.jsxs)("div",{className:"margin",children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:t,className:"detail-icon",alt:""})}),(0,m.jsxs)("div",{className:"detail",children:[(0,m.jsx)("span",{className:"detail-name",children:a}),(0,m.jsx)("span",{className:"detail-value",children:r})]})]})};return(0,m.jsx)(T.A,{className:"referral-table",children:(0,m.jsx)(A,{children:(0,m.jsxs)(o.Spin,{spinning:ee||te,children:[(0,m.jsxs)(o.Row,{type:"flex",align:"middle",children:[(0,m.jsx)("img",{src:j,className:"back-icon",onClick:()=>{i.replace("/deposit/aso-wallet")},alt:""}),(0,m.jsx)("h3",{children:(0,m.jsx)("b",{children:"Wallet Detail"})})]}),(0,m.jsx)(o.Divider,{}),(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)(Re,{icon:R,name:"Partner",value:(null===J||void 0===J?void 0:J.partner_name)||(null===J||void 0===J?void 0:J.partner_code)}),(0,m.jsx)(Re,{icon:k,name:"Provider",value:(null===J||void 0===J?void 0:J.provider_name)||(null===J||void 0===J?void 0:J.provider_code)}),(0,m.jsx)(Re,{icon:w,name:"Product",value:(null===J||void 0===J?void 0:J.product_name)||(null===J||void 0===J?void 0:J.product_code)}),(0,m.jsx)(Re,{icon:I,name:"Package",value:null===J||void 0===J?void 0:J.package_code_list}),(0,m.jsx)("div",{className:"edit-detail",children:(0,m.jsx)("div",{onClick:()=>{return e=null===J||void 0===J?void 0:J.partner_code,t=null===J||void 0===J?void 0:J.product_code,M(!0),void B({query:{partnerCode:e,productCode:t}});var e,t},children:(0,m.jsx)("strong",{children:"Edit Package"})})}),(0,m.jsxs)("div",{className:"topup-detail-wrapper",children:[(0,m.jsxs)("div",{className:"display",children:[(0,m.jsx)("img",{src:U,className:"detail-icon",alt:""}),(0,m.jsxs)("div",{className:"detail",children:[(0,m.jsx)("span",{className:"detail-name balance-value",children:"Balance"}),(0,m.jsxs)("span",{className:"balance-value",children:["Rp ",(0,u.AQ)(null===J||void 0===J?void 0:J.total_balance)]})]})]}),(0,m.jsx)(_.A,{requiredPermission:"ops.aso_wallet_topup",children:(0,m.jsxs)("div",{className:"wallet-wrapper",onClick:()=>C(!0),children:[(0,m.jsx)("strong",{className:"wallet-text",children:"Topup"}),(0,m.jsx)("img",{src:$,className:"wallet-icon",alt:""})]})})]})]}),W&&Object.keys(W).map(((e,t)=>W[e]?(0,m.jsxs)(o.Tag,{className:"filter-tag",color:"volcano",children:[u.aq[e]," - ",W[e],(0,m.jsx)("span",{className:"remove-filter",onClick:t=>Se(e),children:(0,m.jsx)(o.Icon,{type:"close",className:"close"})})]},t):" ")),(0,m.jsx)(E.A,{columns:ye,rowKey:e=>e.reference_id,dataSource:G.data,pagination:{pageSize:10,total:Number(null===G||void 0===G||null===(t=G.metadata)||void 0===t?void 0:t.total_count),current:null===G||void 0===G||null===(a=G.metadata)||void 0===a?void 0:a.page_number},onChange:Le,className:"isoSearchableTable"}),(0,m.jsx)(f,{closeModal:()=>C(!1),isOpen:N,ADD_TOP_UP_LOADER:K,DEBIT_TOP_UP_LOADER:H,addTopUpRequest:Y,debitTopUpRequest:X,walletId:(0,s.get)(p,"params.id"),balance:null===J||void 0===J?void 0:J.total_balance}),(0,m.jsx)(h,{closeModal:()=>M(!1),visible:O,getMasterListData:q,getWalletSummaryData:J,editWalletRequest:V,getMasterListRequest:B,loader:ae})]})})})}));var P=a(44364);const N=function(e){return(0,m.jsx)(P.ej,{children:(0,m.jsx)(W,{...e})})}},19804:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(21577),o=a(80878),l=a.n(o),n=a(34618),i=a(67050),d=a(93317);const s=l()(r.A)`
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
`,c=l().div`
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
`,p=((0,d.A)(c),(0,d.A)(s))},61302:(e,t,a)=>{a.d(t,{u:()=>o});const r=a(78533).A.url,o={GET_WALLET_LIST:"GET_WALLET_LIST",GET_WALLET_LIST_REQUEST:"GET_WALLET_LIST_REQUEST",GET_MASTER_LIST:"GET_MASTER_LIST",GET_MASTER_LIST_REQUEST:"GET_MASTER_LIST_REQUEST",GET_WALLET_SUMMARY:"GET_WALLET_SUMMARY",GET_WALLET_SUMMARY_REQUEST:"GET_WALLET_SUMMARY_REQUEST",ADD_WALLET:"ADD_WALLET",ADD_WALLET_REQUEST:"ADD_WALLET_REQUEST",GET_WALLET_TRANSACTION:"GET_WALLET_TRANSACTION",GET_WALLET_TRANSACTION_REQUEST:"GET_WALLET_TRANSACTION_REQUEST",ADD_TOP_UP:"ADD_TOP_UP",ADD_TOP_UP_REQUEST:"ADD_TOP_UP_REQUEST",DEBIT_TOP_UP:"DEBIT_TOP_UP",DEBIT_TOP_UP_REQUEST:"DEBIT_TOP_UP_REQUEST",EDIT_WALLET:"EDIT_WALLET",EDIT_WALLET_REQUEST:"EDIT_WALLET_REQUEST",RESET_REDUX_STATE_WALLET:"RESET_REDUX_STATE_WALLET",getWalletList:e=>({type:o.GET_WALLET_LIST_REQUEST,payload:{...e,method:"get",url:r.getWalletListUrl}}),getMasterList:e=>({type:o.GET_MASTER_LIST_REQUEST,payload:{...e,method:"get",url:r.getMasterListUrl}}),getWalletSummary:e=>({type:o.GET_WALLET_SUMMARY_REQUEST,payload:{...e,method:"get",url:r.getWalletSummaryUrl}}),getWalletTransaction:e=>({type:o.GET_WALLET_TRANSACTION_REQUEST,payload:{...e,method:"get",url:r.getWalletTransactionUrl}}),addWallet:e=>({type:o.ADD_WALLET_REQUEST,payload:{...e,method:"post",url:r.addWalletUrl}}),addTopUp:e=>({type:o.ADD_TOP_UP_REQUEST,payload:{...e,method:"post",url:r.addTopUpUrl}}),debitTopUp:e=>({type:o.DEBIT_TOP_UP_REQUEST,payload:{...e,method:"post",url:r.debitTopUpUrl}}),editWallet:e=>({type:o.EDIT_WALLET_REQUEST,payload:{...e,method:"post",url:r.editWalletUrl}}),resetReduxStateWallet:e=>({type:o.RESET_REDUX_STATE_WALLET,payload:e})}},20941:(e,t,a)=>{a.d(t,{AJ:()=>h,F4:()=>g,Mt:()=>m,PG:()=>u,XS:()=>c,eN:()=>p,po:()=>i,xB:()=>s,yn:()=>d});var r=a(69732),o=a(44364),l=a(61302);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=(0,o.lO)(),[l]=(0,r.useServiceRequest)(a);return[t,async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(e({...t}))}]},i=()=>n(l.u.getWalletList),d=()=>n(l.u.getMasterList),s=()=>n(l.u.getWalletTransaction),c=()=>n(l.u.getWalletSummary),p=()=>n(l.u.addWallet),u=()=>n(l.u.addTopUp),m=()=>n(l.u.debitTopUp),g=()=>n(l.u.editWallet),h=()=>{const[,e]=(0,o.lO)();return[function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(l.u.resetReduxStateWallet(t))}]}},77980:(e,t,a)=>{a.d(t,{D:()=>o});var r=a(67816);const o=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r.notification[e]({message:t,description:a||""})}},8624:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(1502),o=a.n(r),l=a(24952);class n extends o().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}n.defaultProps={permissions:[]};const i=(0,l.connect)((e=>({permissions:e.Auth.permissions})),{})(n)},21577:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=6361.2207991e.chunk.js.map