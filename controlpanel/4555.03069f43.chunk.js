"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[4555],{27343:(t,e,a)=>{a.d(e,{wL:()=>s,PG:()=>p});var r=a(1502),o=a(94707);const l={getAuditDataData:{data:[],meta_data:{limit:10,page:1,total:0}},getCategoriesData:[],getUserListData:[],addAuditReasonData:{}},n=(t,e)=>{const{payload:a}=e;switch(e.type){case o.b.ADD_AUDIT_REASON:case o.b.GET_AUDIT_DATA:case o.b.GET_CATEGORIES:case o.b.GET_USER_LIST:return{...t,...a};case o.b.RESET_REDUX_STATE_AUDIT:if(a&&Array.isArray(a)){const e={};return a.forEach((t=>{e[t]=l[t]})),{...t,...e}}return{...t};default:return t}};var i=a(70579);const d=(0,r.createContext)(),s=t=>(0,i.jsx)(d.Provider,{value:(0,r.useReducer)(n,l),children:t.children}),p=()=>(0,r.useContext)(d)},74555:(t,e,a)=>{a.r(e),a.d(e,{default:()=>U});var r=a(1502),o=a(67816),l=a(38094),n=a.n(l),i=a(17823),d=a.n(i),s=a(27054),p=a.n(s),c=a(69732),g=a(98479),u=a(84029),b=a(55347),h=a(21577),x=a(80878),f=a.n(x),m=a(34618),E=a(67050),T=a(93317);const A=f()(h.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-filter-dropdown .ant-dropdown-menu-without-submenu {
    max-width: 400px;
    overflow: auto;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-item {
    overflow: initial;
  }
  .ant-table-thead > tr > th {
    color: ${(0,m.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,m.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,m.palette)("secondary",1)};
      margin: ${t=>"rtl"===t["data-rtl"]?"0 4px 0 0":"0 0 0 4px"};
    }
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 15px;
    white-space: nowrap;
    text-align: ${t=>"rtl"===t["data-rtl"]?"right":"left"};

    p {
      margin-bottom: 0;
    }
  }

  .ant-table-tbody > tr > td {
    font-size: 12px;
    color: ${(0,m.palette)("text",3)};
    border-bottom: 1px solid ${(0,m.palette)("border",0)};

    a {
      color: ${(0,m.palette)("primary",0)};
      ${(0,E.kY)()};

      &:hover {
        color: ${(0,m.palette)("primary",4)};
      }
    }
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background-color: transparent;
  }

  .ant-table-row {
    background-color: ${t=>t.rowColor};
  }

  .ant-table-bordered .ant-table-thead > tr > th {
    border-bottom: 1px solid ${(0,m.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,m.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${t=>"rtl"===t["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,m.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,m.palette)("border",0)};

    a {
      border: 0;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    transform: ${t=>"rtl"===t["data-rtl"]?"rotate(180deg)":"rotate(0)"};
  }

  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};
  }

  .ant-pagination-item {
    margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 8px":"0 8px 0 0"};

    &:hover {
      border-color: ${(0,m.palette)("primary",0)};
      ${(0,E.kY)()};
    }

    &:hover a {
      color: ${(0,m.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,m.palette)("primary",0)};
    border-color: ${(0,m.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,m.palette)("grayscale",6)};

    p {
      color: ${(0,m.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,m.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,m.palette)("secondary",1)};
    color: ${(0,m.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,E.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,m.palette)("secondary",1)};
    color: ${(0,m.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,E.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,m.palette)("primary",0)};
  }

  &.isoSearchableTable {
    margin-top: 20px;
    
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,m.palette)("border",0)};
      ${(0,E.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,m.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,m.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,E.Vq)("3px 0 0 3px")};
        ${(0,E.kY)()};
        ${(0,E.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,m.palette)("secondary",7)};
          ${(0,E.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,m.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,m.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,m.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,m.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,m.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${t=>"rtl"===t["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,E.kY)()};

        &:hover {
          background-color: ${(0,m.palette)("primary",1)};
        }
      }
    }

    .ant-table-thead > tr > th {
      word-break: keep-all;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          order: -1;
        }
      }
    }
  }

  &.isoGroupTable {
    .ant-table-thead > tr {
      th {
        border: 1px solid ${(0,m.palette)("border",0)};
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
            border-left: ${t=>"rtl"===t["data-rtl"]?"0":"1px"}
              solid ${(0,m.palette)("border",0)};
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
          border-right: 1px solid ${(0,m.palette)("border",0)};

          &:first-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"0":"1px"}
              solid ${(0,m.palette)("border",0)};
          }

          &:last-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"1px":"0"}
              solid ${(0,m.palette)("border",0)};
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
          color: ${(0,m.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,m.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,E.Vq)("3px")};
          ${(0,E.MS)()};
          ${(0,E.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,m.palette)("border",0)};
            ${(0,E.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,m.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,m.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,m.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,m.palette)("grayscale",0)};
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
          margin: ${t=>"rtl"===t["data-rtl"]?"0 auto 0 0":"0 0 0 auto"};
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`,_=f().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,m.palette)("secondary",2)};

        &:after {
          margin: ${t=>"rtl"===t["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,m.palette)("primary",0)};
      background-color: ${(0,m.palette)("primary",0)};
    }
  }
`,y=((0,T.A)(_),(0,T.A)(A)),v=f().div`
  .auditlog-select {
    width: 100%
  }
  .auditlog-submit {
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
  }
`;var S=a(93807),$=a(39500),D=a(70579);const{Option:R}=o.Select,w=o.Form.create({})((t=>{var e,a,l;let{location:i,history:s}=t;const[h,x]=(0,r.useState)(!1),[f,m]=(0,r.useState)({}),[E,T]=(0,r.useState)({}),[A,_]=(0,r.useState)(1),[w,I]=(0,r.useState)(!1),[{getAuditDataData:U={}},k]=(0,$.nO)(),[{getCategoriesData:j=[]},C]=(0,$.eM)(),[{getUserListData:G=[]},O]=(0,$.$Q)(),[L]=(0,$.AJ)(),[{GET_AUDIT_DATA_LOADER:N}]=(0,c.useLoaderContextValue)(),[{GET_AUDIT_DATA_ERROR:z="",GET_CATEGORIES_ERROR:Q="",GET_USER_LIST_ERROR:V="",getUserListStatus:M="",getCategoriesStatus:q="",getAuditDataStatus:Y=""},P]=(0,c.useErrorContextValue)();(0,r.useEffect)((()=>{const t=n().parse(null===i||void 0===i?void 0:i.search),{category:e,user_id:a,reference_id:r}=t;return r||s.replace("/audit-log"),K(t),m({category:e,userId:a}),T({category:e}),C(),O(),()=>L(["getAuditDataData"])}),[]),(0,r.useEffect)((()=>{z?(Y&&o.notification.error({message:Y}),P((0,c.resetError)({GET_AUDIT_DATA_ERROR:!1,getAuditDataStatus:""}))):Q?(q&&o.notification.error({message:q}),P((0,c.resetError)({GET_CATEGORIES_ERROR:!1,getCategoriesStatus:""}))):V&&(M&&o.notification.error({message:M}),P((0,c.resetError)({GET_USER_LIST_ERROR:!1,getUserListStatus:""})))}),[z,Q,V]);const X=(t,e)=>(0,D.jsx)("div",{className:t,children:(0,D.jsx)("span",{children:e})}),B=(t,e)=>{m({...f,[e]:t}),"userId"!==e||t||(L(["getAuditDataData"]),I(!1),W("user_id"))},J=(t,e)=>{t.preventDefault();const a=n().parse(null===i||void 0===i?void 0:i.search),{reference_id:r}=a,o={};o.page=A,o.reference_id=r,o.category=f.category,o.user_id=f.userId;const l=(0,S.A)(o);s.push({pathname:null===i||void 0===i?void 0:i.pathname,search:l}),K(o),x(!1),T(f)},F=[{key:"timeStamp",title:X("title-without-margin","TimeStamp"),dataIndex:"created_at",render:t=>d()(t).tz("Asia/Jakarta").format("lll")},{key:"ip_address",title:X("title-without-margin","IP Address"),dataIndex:"ip_address"},{key:"email",title:X("title-with-margin","User Email"),dataIndex:"user_email"},{key:"category",title:X("title-with-margin","Category"),dataIndex:"category",filterDropdown:(0,D.jsx)(g.Y2,{searchText:f.category?f.category:void 0,onInputChange:t=>B(t.target.value,"category"),onSearch:t=>J(t),optionData:j,renderOption:t=>t.map((t=>(0,D.jsx)("option",{value:Object.values(t)[0],children:Object.keys(t)[0]},Object.values(t)[0])))}),filterIcon:(t=>{let e="filter-icon";return t&&(e+=" active"),(0,D.jsx)(o.Icon,{className:e,type:"filter",theme:"outlined"})})(!!f.category),filterDropdownVisible:h,onFilterDropdownVisibleChange:t=>x(t)},{key:"event",title:X("title-with-margin","Event"),dataIndex:"event"},{key:"data",title:X("title-with-margin","Data"),dataIndex:"data",render:t=>(0,D.jsx)(p(),{name:"detail",src:t,displayDataTypes:!1,displayObjectSize:!1,enableClipboard:!1})}],W=t=>{const e=n().parse(null===i||void 0===i?void 0:i.search);delete e[t];const a=(0,S.A)(e);return s.push({pathname:null===i||void 0===i?void 0:i.pathname,search:a}),e},K=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:e,user_id:a,reference_id:r}=t,o=Number(e)||1;delete t.page,_(o),a&&r&&(I(!0),k({query:{...t,page:o}}))};return(0,D.jsx)(b.A,{className:"referral-table",children:(0,D.jsx)(u.A,{children:(0,D.jsxs)(v,{children:[(0,D.jsx)("h2",{children:(0,D.jsx)("b",{children:"Audit Log"})}),(0,D.jsxs)(o.Row,{align:"middle",type:"flex",className:"margin-top",children:[(0,D.jsx)(o.Col,{xs:{span:2},lg:{span:2},children:(0,D.jsx)("b",{children:"User Email"})}),(0,D.jsx)(o.Col,{xs:{span:16},lg:{span:8},children:(0,D.jsx)(o.Select,{className:"auditlog-select",value:f.userId?+f.userId:void 0,showSearch:!0,allowClear:!0,filterOption:(t,e)=>e.props.children.toLowerCase().indexOf(t.toLowerCase())>=0,placeholder:"User Email",onChange:t=>B(t,"userId"),children:Array.isArray(G)&&(null===G||void 0===G?void 0:G.map((t=>(0,D.jsx)(R,{value:t.id,children:t.deleted_at?`${t.email} (deleted)`:t.email},t.id))))})}),(0,D.jsx)(o.Col,{xs:{offset:1,span:8},lg:{offset:1,span:4},children:(0,D.jsx)(o.Button,{type:"primary",onClick:t=>J(t),disabled:!f.userId,children:"Search"})})]}),(null===E||void 0===E?void 0:E.category)&&(0,D.jsxs)(o.Tag,{className:"filter-tag",color:"volcano",children:["category"," - ",(()=>{const t=Array.isArray(j)&&(null===j||void 0===j?void 0:j.filter((t=>Object.values(t)[0]===(null===E||void 0===E?void 0:E.category))))||[];return t.length?Object.keys(t[0])[0]:""})(),(0,D.jsx)("span",{className:"remove-filter",onClick:t=>(t=>{m({...f,[t]:void 0}),T({...E,[t]:void 0});const e=W(t);K(e)})("category"),children:"X"})]}),(0,D.jsx)(o.Spin,{spinning:!!N,children:w&&null!==U&&void 0!==U&&null!==(e=U.data)&&void 0!==e&&e.length?(0,D.jsx)(y,{columns:F,bordered:!0,rowKey:t=>t.reference_id,dataSource:U.data,pagination:{pageSize:10,total:Number(null===U||void 0===U||null===(a=U.meta_data)||void 0===a?void 0:a.total),current:null===U||void 0===U||null===(l=U.meta_data)||void 0===l?void 0:l.page},onChange:t=>{const{current:e}=t,a={...n().parse(null===i||void 0===i?void 0:i.search)};a.page=e;const r=(0,S.A)(a);s.push({pathname:null===i||void 0===i?void 0:i.pathname,search:r}),K(a)},className:"isoSearchableTable"}):(0,D.jsx)(o.Row,{justify:"center",type:"flex",className:"margin-top",children:(0,D.jsx)(o.Empty,{description:w?"No data found for selected user":"Select user to proceed"})})})]})})})}));var I=a(27343);const U=function(t){return(0,D.jsx)(I.wL,{children:(0,D.jsx)(w,{...t})})}},94707:(t,e,a)=>{a.d(e,{b:()=>o});const r=a(78533).A.url,o={ADD_AUDIT_REASON:"ADD_AUDIT_REASON",ADD_AUDIT_REASON_REQUEST:"ADD_AUDIT_REASON_REQUEST",GET_AUDIT_DATA:"GET_AUDIT_DATA",GET_AUDIT_DATA_REQUEST:"GET_AUDIT_DATA_REQUEST",GET_CATEGORIES:"GET_CATEGORIES",GET_CATEGORIES_REQUEST:"GET_CATEGORIES_REQUEST",GET_USER_LIST:"GET_USER_LIST",GET_USER_LIST_REQUEST:"GET_USER_LIST_REQUEST",RESET_REDUX_STATE_AUDIT:"RESET_REDUX_STATE_AUDIT",addAuditReason:t=>({type:o.ADD_AUDIT_REASON_REQUEST,payload:{...t,method:"post",url:r.addAuditLogReasonApi}}),getAuditData:t=>({type:o.GET_AUDIT_DATA_REQUEST,payload:{...t,method:"get",url:r.getAuditLogApi}}),getCategories:t=>({type:o.GET_CATEGORIES_REQUEST,payload:{...t,method:"get",url:r.getCategoriesApi}}),getUserList:t=>({type:o.GET_USER_LIST_REQUEST,payload:{...t,method:"get",url:r.getUserListApi}}),resetReduxStateAudit:t=>({type:o.RESET_REDUX_STATE_AUDIT,payload:t})}},39500:(t,e,a)=>{a.d(e,{$Q:()=>s,AJ:()=>c,E8:()=>p,eM:()=>d,nO:()=>i});var r=a(69732),o=a(27343),l=a(94707);const n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[e,a]=(0,o.PG)(),[l]=(0,r.useServiceRequest)(a);return[e,async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(t({...e}))}]},i=()=>n(l.b.getAuditData),d=()=>n(l.b.getCategories),s=()=>n(l.b.getUserList),p=()=>n(l.b.addAuditReason),c=()=>{const[,t]=(0,o.PG)();return[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t(l.b.resetReduxStateAudit(e))}]}},21577:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=4555.03069f43.chunk.js.map