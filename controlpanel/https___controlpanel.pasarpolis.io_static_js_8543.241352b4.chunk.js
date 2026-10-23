"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[8543],{94863:(t,e,a)=>{a.d(e,{j:()=>o});const r="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/control-panel/support/",o={filterIcon:`${r}filter-icon-png.png`,copyToClipBoard:`${r}copy-to-clipboard.png`}},49968:(t,e,a)=>{a.d(e,{o$:()=>p,lN:()=>c});var r=a(1502),o=a(21994);const l={},n=(t,e)=>{const{payload:a}=e;switch(e.type){case o.U.GET_APPROVAL_DATA:case o.U.CREATE_APPROVAL_DATA:case o.U.APPROVE_APPROVAL_DATA:case o.U.REJECT_APPROVAL_DATA:return{...t,...a};case o.U.RESET_REDUX_STATE_APPROVAL:if(a&&Array.isArray(a)){const e={};return a.forEach((t=>{e[t]=l[t]})),{...t,...e}}return{...t};default:return t}};var i=a(70579);const d=(0,r.createContext)(),p=t=>(0,i.jsx)(d.Provider,{value:(0,r.useReducer)(n,l),children:t.children}),c=()=>(0,r.useContext)(d)},37419:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(80878);const o=a.n(r)().div`
  width: 100%;
  background-color: white;
  padding: 25px;

  .heading {
    width: 100%;
    margin-top: 10px;
  }

  .approval__button {
    width: 100%;
  }

  .approval__buttonToggle {
    width: 100%;
    display: flex;
  }

  .approval__buttonToggle > button {
    margin: 10px;
    height: 30px;
    width: 90px;
    border: 1.5px solid black;
    border-radius: 5px;
  }

  .approval__buttonToggle > button:hover {
    cursor: pointer;
  }

  .blue {
    color: #1890ff;
  }

  .green {
    color: green;
  }

  .btn-blue {
    color: white;
    background-color: #0784ea;
    border-color: #0784ea;
  }

  .red {
    color: red;
  }

  .filter-icon {
    color: black;
  }

  .title-with-margin {
    margin-left: 25px;
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

  .with-clipboard {
    margin-left: 10px;
    display: flex;
    justify-content: space-around;
  }

  .with-clipboard > img {
    height: 16px;
    width: 16px;
    margin-left: auto;
  }

  .with-clipboard > img:hover {
    cursor: pointer;
  }
`},88543:(t,e,a)=>{a.r(e),a.d(e,{default:()=>_});var r=a(1502),o=a(49968),l=a(67816),n=a(38094),i=a.n(n),d=a(17823),p=a.n(d),c=a(69732),s=a(55347),h=a(98479),b=a(37419),u=a(5320),g=a(21852),A=a(93807),f=a(94863),x=a(70579);const{copyToClipBoard:m}=f.j,v=t=>{var e,a;let{location:o,history:n,match:d}=t;const[f,v]=(0,r.useState)({}),[_,E]=(0,r.useState)({}),[T,R]=(0,r.useState)(!1),[{getApprovalDataData:y={}},P]=(0,g.pR)(),[{GET_APPROVAL_DATA_LOADER:$}]=(0,c.useLoaderContextValue)(),[k]=(0,g.AJ)(),[{GET_APPROVAL_DATA_ERROR:D,getApprovalDataStatus:w},C]=(0,c.useErrorContextValue)();(0,r.useEffect)((()=>{const t=i().parse(null===o||void 0===o?void 0:o.search);return V(t),t.sort&&delete t.sort,v({...t}),E({...t}),()=>k(["getApprovalDataData"])}),[]),(0,r.useEffect)((()=>{D&&(w&&l.notification.error({message:w}),C((0,c.resetError)({GET_APPROVAL_DATA_ERROR:!1,getApprovalDataStatus:""})))}),[D]);const V=(0,r.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:e}=t,a=Number(e)||1;delete t.page,P({query:{...t,page_number:a,request_status:"SUCCESS"}})}),[]),O=(0,r.useCallback)((t=>{const e=i().parse(null===o||void 0===o?void 0:o.search);delete e[t];const a=(0,A.A)(e);return n.push({pathname:null===o||void 0===o?void 0:o.pathname,search:a}),e}),[o]),S=(0,r.useCallback)(((t,e)=>(0,x.jsx)("div",{className:t,children:(0,x.jsx)("span",{children:e})})),[]),j=(0,r.useCallback)(((t,e)=>{v({...f,[e]:t})}),[f,v]),N=(0,r.useCallback)(((t,e)=>{t.preventDefault();const a={...f,page:1},r=(0,A.A)(a);n.push({pathname:null===o||void 0===o?void 0:o.pathname,search:r}),V(a),R({...T,[e]:!1}),E(f)}),[f,T]),L=(0,r.useCallback)((t=>{const e={...f,[t]:void 0};v(e),E(e);const a=O(t);V(a)}),[f,O,E,v]),U=[{key:"ticket_id",title:S("title-with-margin","Zoho Ticket ID"),dataIndex:"ticket_id",className:"title",render:t=>(t=>(0,x.jsxs)("div",{className:"with-clipboard",children:[(0,x.jsx)("p",{children:t}),(0,x.jsx)("img",{src:m,alt:"clip-icon",onClick:()=>{navigator.clipboard.writeText(t),l.message.success("Copied")}})]}))(t),filterDropdown:(0,x.jsx)(h.ZY,{idIdentifier:"ticket_id",searchText:f.ticket_id?f.ticket_id:void 0,onInputChange:t=>j(t.target.value,"ticket_id"),onSearch:t=>N(t,"ticket_id")}),filterIcon:(0,x.jsx)(l.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===T||void 0===T?void 0:T.ticket_id,onFilterDropdownVisibleChange:t=>R({...T,ticket_id:t})},{key:"action",title:S("title-with-margin","Request Type"),dataIndex:"action",filterDropdown:(0,x.jsx)(h.ZY,{idIdentifier:"action",searchText:f.action?f.action:void 0,onInputChange:t=>j(t.target.value,"action"),onSearch:t=>N(t,"action")}),filterIcon:(0,x.jsx)(l.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===T||void 0===T?void 0:T.action,onFilterDropdownVisibleChange:t=>R({...T,action:t})},{key:"created_at",title:"Requested At",dataIndex:"created_at",render:t=>p()(t).tz("Asia/Jakarta").format("lll")},{key:"requested_by",title:"Requested By",dataIndex:"requested_by"},{key:"identifier",title:S("title-with-margin","Application Number"),render:t=>(0,x.jsx)("span",{className:"blue pointer",onClick:()=>(t=>{var e,a;const r=null===t||void 0===t||null===(e=t.request_payload)||void 0===e||null===(a=e.response)||void 0===a?void 0:a.internal_ids[0];r&&n.push(`/policy/${r}`)})(t),children:null===t||void 0===t?void 0:t.identifier}),filterDropdown:(0,x.jsx)(h.ZY,{idIdentifier:"identifier",searchText:f.identifier?f.identifier:void 0,onInputChange:t=>j(t.target.value,"identifier"),onSearch:t=>N(t,"identifier")}),filterIcon:(0,x.jsx)(l.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===T||void 0===T?void 0:T.identifier,onFilterDropdownVisibleChange:t=>R({...T,identifier:t})},{key:"approved_by",title:"Decided By",dataIndex:"approved_by"},{key:"approval_status",title:"Decision",dataIndex:"approval_status",render:t=>(0,x.jsx)("p",{className:"APPROVED"===t?"green":"red",children:t})}],I=(0,r.useCallback)(((t,e,a)=>{const{current:r}=t,l={...i().parse(null===o||void 0===o?void 0:o.search),page:r};"reference_id"===(null===a||void 0===a?void 0:a.field)&&"descend"===(null===a||void 0===a?void 0:a.order)?l.sort="desc":"reference_id"===(null===a||void 0===a?void 0:a.field)&&"ascend"===(null===a||void 0===a?void 0:a.order)?l.sort="asc":l.sort=void 0;const d=(0,A.A)(l);n.push({pathname:null===o||void 0===o?void 0:o.pathname,search:d}),V(l)}),[i(),o]);return(0,x.jsx)(s.A,{children:(0,x.jsx)(b.A,{children:(0,x.jsxs)(l.Spin,{spinning:$,children:[(0,x.jsx)(l.Row,{type:"flex",align:"middle",children:(0,x.jsx)(l.Col,{sm:4,md:8,children:(0,x.jsx)("div",{className:"heading",children:(0,x.jsx)("h3",{children:(0,x.jsx)("b",{children:"Approval Task"})})})})}),(0,x.jsx)("div",{className:"approval__button",children:(0,x.jsxs)("div",{className:"approval__buttonToggle",children:[(0,x.jsx)(l.Button,{onClick:()=>n.replace("/customer-support/approval-task"),children:(0,x.jsx)("b",{children:"New"})}),(0,x.jsx)(l.Button,{onClick:()=>n.replace("/customer-support/approval-task/approved"),disabled:!0,className:"btn-blue",children:(0,x.jsx)("b",{children:"Done"})})]})}),_&&Object.keys(_).map(((t,e)=>_[t]?(0,x.jsxs)(l.Tag,{className:"filter-tag",color:"geekblue",children:[_[t],(0,x.jsx)("span",{className:"remove-filter",onClick:e=>L(t),children:(0,x.jsx)(l.Icon,{type:"close",className:"close"})})]},e):"")),(0,x.jsx)(u.A,{columns:U,rowKey:t=>t.id,dataSource:null===y||void 0===y?void 0:y.data,pagination:{pageSize:10,total:Number(null===y||void 0===y||null===(e=y.metadata)||void 0===e?void 0:e.total_count),current:null===y||void 0===y||null===(a=y.metadata)||void 0===a?void 0:a.page_number},className:"isoSearchableTable",onChange:I})]})})})},_=t=>(0,x.jsx)(o.o$,{children:(0,x.jsx)(v,{...t})})},5320:(t,e,a)=>{a.d(e,{A:()=>s});var r=a(21577),o=a(80878),l=a.n(o),n=a(34618),i=a(67050),d=a(93317);const p=l()(r.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .select-container {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
  }

  .ant-table-thead > tr > th {
    color: ${(0,n.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,n.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,n.palette)("secondary",1)};
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
    float: ${t=>"rtl"===t["data-rtl"]?"left":"right"};
  }
  .ant-table-thead > tr > th .anticon-filter,
  .ant-table-thead > tr > th .ant-table-filter-icon {
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

      .ant-select-selection {
        background-color: #e9ebf1 !important;
        border: none !important;
      }

      .ant-input-group-addon {
        background: #efefef !important;
        border: none !important;
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
        font-family: italic;
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
        border-radius: ${t=>"rtl"===t["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,i.kY)()};

        &:hover {
          background-color: ${(0,n.palette)("primary",1)};
        }
      }
    }

    .ant-table-thead
      > tr
      > th.ant-table-column-has-actions.ant-table-column-has-filters
      .anticon-filter.ant-table-filter-open,
    .ant-table-thead
      > tr
      > th.ant-table-column-has-actions.ant-table-column-has-filters
      .ant-table-filter-icon.ant-table-filter-open {
      background: transparent;
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
            border-left: ${t=>"rtl"===t["data-rtl"]?"0":"1px"}
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
            border-left: ${t=>"rtl"===t["data-rtl"]?"0":"1px"}
              solid ${(0,n.palette)("border",0)};
          }

          &:last-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"1px":"0"}
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
          margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
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
          margin: ${t=>"rtl"===t["data-rtl"]?"0 auto 0 0":"0 0 0 auto"};
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
      margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,n.palette)("secondary",2)};

        &:after {
          margin: ${t=>"rtl"===t["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,n.palette)("primary",0)};
      background-color: ${(0,n.palette)("primary",0)};
    }
  }
`,s=((0,d.A)(c),(0,d.A)(p))},21994:(t,e,a)=>{a.d(e,{U:()=>o});const r=a(78533).A.url,o={GET_APPROVAL_DATA:"GET_APPROVAL_DATA",GET_APPROVAL_DATA_REQUEST:"GET_APPROVAL_DATA_REQUEST",CREATE_APPROVAL_DATA:"CREATE_APPROVAL_DATA",CREATE_APPROVAL_DATA_REQUEST:"CREATE_APPROVAL_DATA_REQUEST",APPROVE_APPROVAL_DATA:"APPROVE_APPROVAL_DATA",APPROVE_APPROVAL_DATA_REQUEST:"APPROVE_APPROVAL_DATA_REQUEST",REJECT_APPROVAL_DATA:"REJECT_APPROVAL_DATA",REJECT_APPROVAL_DATA_REQUEST:"REJECT_APPROVAL_DATA_REQUEST",CHANGE_PHONE_NUMBER:"CHANGE_PHONE_NUMBER",CHANGE_PHONE_NUMBER_REQUEST:"CHANGE_PHONE_NUMBER_REQUEST",RESET_REDUX_STATE_APPROVAL:"RESET_REDUX_STATE_APPROVAL",getApprovalData:t=>({type:o.GET_APPROVAL_DATA_REQUEST,payload:{...t,method:"get",url:r.getApprovalList}}),createApprovalData:t=>({type:o.CREATE_APPROVAL_DATA_REQUEST,payload:{...t,method:"post",url:r.createApprovalList}}),approveApprovalData:t=>({type:o.APPROVE_APPROVAL_DATA_REQUEST,payload:{...t,method:"post",url:r.approveApprovalList}}),rejectApprovalData:t=>({type:o.REJECT_APPROVAL_DATA_REQUEST,payload:{...t,method:"post",url:r.rejectApprovalList}}),changeUserPhone:t=>({type:o.CHANGE_PHONE_NUMBER_REQUEST,payload:{...t,method:"post",url:r.changeUserPhone}}),resetReduxStateApproval:t=>({type:o.RESET_REDUX_STATE_APPROVAL,payload:t})}},21852:(t,e,a)=>{a.d(e,{AJ:()=>c,Og:()=>p,aZ:()=>d,pR:()=>i});var r=a(69732),o=a(49968),l=a(21994);const n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[e,a]=(0,o.lN)(),[l]=(0,r.useServiceRequest)(a);return[e,async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(t({...e}))}]},i=()=>n(l.U.getApprovalData),d=()=>n(l.U.approveApprovalData),p=()=>n(l.U.rejectApprovalData),c=()=>{const[,t]=(0,o.lN)();return[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t(l.U.resetReduxStateApproval(e))}]}},21577:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=8543.241352b4.chunk.js.map