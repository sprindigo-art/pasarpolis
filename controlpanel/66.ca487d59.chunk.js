"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[66],{94863:(e,t,a)=>{a.d(t,{j:()=>r});const o="https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/control-panel/support/",r={filterIcon:`${o}filter-icon-png.png`,copyToClipBoard:`${o}copy-to-clipboard.png`}},49968:(e,t,a)=>{a.d(t,{o$:()=>p,lN:()=>s});var o=a(1502),r=a(21994);const l={},n=(e,t)=>{const{payload:a}=t;switch(t.type){case r.U.GET_APPROVAL_DATA:case r.U.CREATE_APPROVAL_DATA:case r.U.APPROVE_APPROVAL_DATA:case r.U.REJECT_APPROVAL_DATA:return{...e,...a};case r.U.RESET_REDUX_STATE_APPROVAL:if(a&&Array.isArray(a)){const t={};return a.forEach((e=>{t[e]=l[e]})),{...e,...t}}return{...e};default:return e}};var i=a(70579);const d=(0,o.createContext)(),p=e=>(0,i.jsx)(d.Provider,{value:(0,o.useReducer)(n,l),children:e.children}),s=()=>(0,o.useContext)(d)},40066:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var o=a(1502),r=a(49968),l=a(67816),n=a(38094),i=a.n(n),d=a(17823),p=a.n(d),s=a(69732),c=a(55347),u=a(37419),h=a(5320),b=a(21852),A=a(93807),v=a(98479),g=a(80878);const f=a.n(g)().div`
  width: 100%;
  padding-top: 25px;
  color: black;

  .container {
    display: flex;
    text-align: left;
    justify-content: space-around;
    margin-bottom: 18px;
  }

  .container > span {
    width: 100%;
  }

  .btn2 {
    justify-content: space-between;
  }

  .btn2 > button {
    width: 115px;
    height: 28px;
    border-radius: 7px;
  }

  .btn2 > button:hover {
    cursor: pointer;
  }

  .reject {
    background-color: #f18295;
    border: 1px solid red;
  }

  .approve {
    background-color: lightgreen;
    border: 1px solid green;
    margin-right: 25px;
  }

  .with-clipboard {
    display: flex;
  }

  .with-clipboard > img {
    height: 16px;
    width: 16px;
    margin-left: 10px;
    margin-top: 2px;
  }

  .with-clipboard > img:hover {
    cursor: pointer;
  }

  .blue {
    color: #1890ff;
  }
`;var x=a(1603),m=a.n(x),_=a(94863),E=a(70579);const{copyToClipBoard:R}=_.j,T=e=>{var t,a,o,r,n,i;let{detailModalData:d,closeModal:s,isOpen:c,rejectApprovalRequest:u,approveApprovalRequest:h}=e;return(0,E.jsx)(l.Modal,{title:"",visible:c,footer:null,onCancel:s,children:(0,E.jsxs)(f,{children:[(0,E.jsxs)("div",{className:"container",children:[(0,E.jsx)("span",{children:"Zoho Ticket ID"}),(0,E.jsx)("span",{children:(A=null===d||void 0===d?void 0:d.ticket_id,(0,E.jsxs)("div",{className:"with-clipboard",children:[(0,E.jsx)("span",{children:A}),(0,E.jsx)("img",{src:R,alt:"clip-icon",onClick:()=>{navigator.clipboard.writeText(A),l.message.success("Copied")}})]}))})]}),(0,E.jsxs)("div",{className:"container",children:[(0,E.jsx)("span",{children:"Application Number"}),(0,E.jsx)("span",{className:"blue",children:null===d||void 0===d?void 0:d.identifier})]}),(0,E.jsxs)("div",{className:"container",children:[(0,E.jsx)("span",{children:"Requested At"}),(0,E.jsx)("span",{children:(b=null===d||void 0===d?void 0:d.created_at,p()(b).tz("Asia/Jakarta").format("lll"))})]}),(0,E.jsxs)("div",{className:"container",children:[(0,E.jsx)("span",{children:"Requested By"}),(0,E.jsx)("span",{children:null===d||void 0===d?void 0:d.requested_by})]}),(0,E.jsxs)("div",{className:"container",children:[(0,E.jsx)("span",{children:"Requested Type"}),(0,E.jsx)("span",{children:null===d||void 0===d?void 0:d.action})]}),(0,E.jsxs)("div",{className:"container",children:[null!==d&&void 0!==d&&null!==(t=d.request_payload)&&void 0!==t&&null!==(a=t.response)&&void 0!==a&&a.old_phone?(0,E.jsx)("span",{children:null===d||void 0===d||null===(o=d.request_payload)||void 0===o||null===(r=o.response)||void 0===r?void 0:r.old_phone}):(0,E.jsx)("span",{children:"DOES NOT EXIST"}),(0,E.jsx)("span",{children:null===d||void 0===d||null===(n=d.request_payload)||void 0===n||null===(i=n.response)||void 0===i?void 0:i.new_phone})]}),(0,E.jsxs)("div",{className:"container btn2",children:[(0,E.jsx)("button",{className:"reject",onClick:()=>{u({body:{id:null===d||void 0===d?void 0:d.id,identifier:null===d||void 0===d?void 0:d.identifier}})},children:"Reject"}),(0,E.jsx)("button",{className:"approve",onClick:()=>{h({body:{id:null===d||void 0===d?void 0:d.id,identifier:null===d||void 0===d?void 0:d.identifier}})},children:"Approve"})]})]})});var b,A};T.prototype={detailModalData:m().object,closeModal:m().func,isOpen:m().bool,rejectApprovalRequest:m().func,changePhoneNumberRequest:m().func};const P=T,{copyToClipBoard:y}=_.j,j=e=>{var t,a;let{location:r,history:n}=e;const[d,g]=(0,o.useState)({}),[f,x]=(0,o.useState)({}),[{getApprovalDataData:m={}},_]=(0,b.pR)(),[,R]=(0,b.aZ)(),[,T]=(0,b.Og)(),[j,D]=(0,o.useState)(!1),[{GET_APPROVAL_DATA_LOADER:k,REJECT_APPROVAL_DATA_LOADER:$,APPROVE_APPROVAL_DATA_LOADER:O}]=(0,s.useLoaderContextValue)(),[{GET_APPROVAL_DATA_ERROR:w="",APPROVE_APPROVAL_DATA_ERROR:C="",REJECT_APPROVAL_DATA_ERROR:V="",CHANGE_PHONE_NUMBER_ERROR:N="",getApprovalDataStatus:S,approveApprovalDataStatus:L,approveApprovalDataErrorData:U,rejectApprovalDataStatus:I},q]=(0,s.useErrorContextValue)(),[M,G]=(0,o.useState)(!1),[z,B]=(0,o.useState)({}),Q=()=>{const e=i().parse(null===r||void 0===r?void 0:r.search);H(e),e.sort&&delete e.sort,g({...e}),x({...e})};(0,o.useEffect)((()=>{Q()}),[]),(0,o.useEffect)((()=>{w&&(S&&l.notification.error({message:S}),q((0,s.resetError)({GET_APPROVAL_DATA_ERROR:!1,getApprovalDataStatus:""})))}),[w,S]),(0,o.useEffect)((()=>{C?(U&&l.notification.error({message:(null===U||void 0===U?void 0:U.error)||L}),Q(),G(!1),q((0,s.resetError)({APPROVE_APPROVAL_DATA_ERROR:!1,approveApprovalDataStatus:"",approveApprovalDataErrorData:{}}))):C||"success"!==L||(l.notification.success({message:L}),Q(),G(!1),q((0,s.resetError)({APPROVE_APPROVAL_DATA_ERROR:!1,approveApprovalDataStatus:"",approveApprovalDataErrorData:{}})))}),[C,L,U]),(0,o.useEffect)((()=>{V?(I&&l.notification.error({message:I}),G(!0),q((0,s.resetError)({REJECT_APPROVAL_DATA_ERROR:!1,rejectApprovalDataStatus:""}))):V||"success"!==I||(I&&l.notification.success({message:I}),Q(),G(!1),q((0,s.resetError)({REJECT_APPROVAL_DATA_ERROR:!1,rejectApprovalDataStatus:""})))}),[V,I]);const H=(0,o.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:t}=e,a=Number(t)||1;delete e.page,_({query:{...e,page_number:a,request_status:"PENDINGAPPROVAL"}})}),[]),J=(0,o.useCallback)(((e,t)=>{g({...d,[t]:e})}),[d,g]),Y=(0,o.useCallback)(((e,t)=>{e.preventDefault();const a={...d,page:1},o=(0,A.A)(a);n.push({pathname:null===r||void 0===r?void 0:r.pathname,search:o}),H(a),D({...j,[t]:!1}),x(d)}),[d,j]),Z=(0,o.useCallback)((e=>{const t=i().parse(null===r||void 0===r?void 0:r.search);delete t[e];const a=(0,A.A)(t);return n.push({pathname:r.pathname,search:a}),t}),[r]),X=(0,o.useCallback)((e=>{const t={...d,[e]:void 0};g(t),x(t);const a=Z(e);H(a)}),[d,Z,x,g]),F=(0,o.useCallback)((()=>{G(!1)}),[]),W=(0,o.useCallback)(((e,t)=>(0,E.jsx)("div",{className:e,children:(0,E.jsx)("span",{children:t})})),[]),K=[{key:"ticket_id",title:W("title-with-margin","Zoho Ticket ID"),dataIndex:"ticket_id",className:"title",render:e=>(e=>(0,E.jsxs)("div",{className:"with-clipboard",children:[(0,E.jsx)("p",{children:e}),(0,E.jsx)("img",{src:y,alt:"clip-icon",onClick:()=>{navigator.clipboard.writeText(e),l.message.success("Copied")}})]}))(e),filterDropdown:(0,E.jsx)(v.ZY,{idIdentifier:"ticket_id",searchText:d.ticket_id?d.ticket_id:void 0,onInputChange:e=>J(e.target.value,"ticket_id"),onSearch:e=>Y(e,"ticket_id")}),filterIcon:(0,E.jsx)(l.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===j||void 0===j?void 0:j.ticket_id,onFilterDropdownVisibleChange:e=>D({...j,ticket_id:e})},{key:"action",title:W("title-with-margin","Request Type"),dataIndex:"action",filterDropdown:(0,E.jsx)(v.ZY,{idIdentifier:"action",searchText:d.action?d.action:void 0,onInputChange:e=>J(e.target.value,"action"),onSearch:e=>Y(e,"action")}),filterIcon:(0,E.jsx)(l.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===j||void 0===j?void 0:j.action,onFilterDropdownVisibleChange:e=>D({...j,action:e})},{key:"created_at",title:W("title-with-margin","Requested At"),dataIndex:"created_at",render:e=>p()(e).tz("Asia/Jakarta").format("lll")},{key:"requested_by",title:W("title-with-margin","Requested By"),dataIndex:"requested_by"},{key:"identifier",title:W("title-with-margin","Application Number"),render:e=>(0,E.jsx)("span",{className:"blue pointer",onClick:()=>(e=>{var t,a;const o=null===e||void 0===e||null===(t=e.request_payload)||void 0===t||null===(a=t.response)||void 0===a?void 0:a.internal_ids[0];o&&n.push(`/policy/${o}`)})(e),children:null===e||void 0===e?void 0:e.identifier}),filterDropdown:(0,E.jsx)(v.ZY,{idIdentifier:"identifier",searchText:null!==d&&void 0!==d&&d.identifier?null===d||void 0===d?void 0:d.identifier:void 0,onInputChange:e=>J(e.target.value,"identifier"),onSearch:e=>Y(e,"identifier")}),filterIcon:(0,E.jsx)(l.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===j||void 0===j?void 0:j.identifier,onFilterDropdownVisibleChange:e=>D({...j,identifier:e})},{key:"detail",title:W("title-without-margin","Detail"),render:e=>(0,E.jsx)(l.Icon,{type:"eye",onClick:()=>(e=>{if("string"===typeof(null===e||void 0===e?void 0:e.data))try{e.data=JSON.parse(e.data)}catch(t){return e.data=void 0,void l.notification.error({message:"Failed to parse data"})}B(e),G(!0)})(e),className:"detail-icon",theme:"filled"})}],ee=(0,o.useCallback)(((e,t,a)=>{const{current:o}=e,l={...i().parse(null===r||void 0===r?void 0:r.search),page:o};"reference_id"===(null===a||void 0===a?void 0:a.field)&&"descend"===(null===a||void 0===a?void 0:a.order)?l.sort="desc":"reference_id"===(null===a||void 0===a?void 0:a.field)&&"ascend"===(null===a||void 0===a?void 0:a.order)?l.sort="asc":l.sort=void 0;const d=(0,A.A)(l);n.push({pathname:null===r||void 0===r?void 0:r.pathname,search:d}),H(l)}),[i(),r]);return(0,E.jsx)(c.A,{children:(0,E.jsx)(u.A,{children:(0,E.jsxs)(l.Spin,{spinning:!!k||!!$||!!O,children:[(0,E.jsx)(l.Row,{type:"flex",align:"middle",children:(0,E.jsx)(l.Col,{sm:4,md:8,children:(0,E.jsx)("div",{className:"heading",children:(0,E.jsx)("h3",{children:(0,E.jsx)("b",{children:"Approval Task"})})})})}),(0,E.jsx)("div",{className:"approval__button",children:(0,E.jsxs)("div",{className:"approval__buttonToggle",children:[(0,E.jsx)(l.Button,{disabled:!0,className:"btn-blue",children:(0,E.jsx)("b",{children:"New"})}),(0,E.jsx)(l.Button,{onClick:()=>n.replace("/customer-support/approval-task/approved"),children:(0,E.jsx)("b",{children:"Done"})})]})}),f&&Object.keys(f).map(((e,t)=>f[e]?(0,E.jsxs)(l.Tag,{className:"filter-tag",color:"blue",children:[f[e],(0,E.jsx)("span",{className:"remove-filter",onClick:t=>X(e),children:(0,E.jsx)(l.Icon,{type:"close",className:"close"})})]},t):"")),(0,E.jsx)(h.A,{columns:K,rowKey:e=>e.id,dataSource:null===m||void 0===m?void 0:m.data,pagination:{pageSize:10,total:Number(null===m||void 0===m||null===(t=m.metadata)||void 0===t?void 0:t.total_count),current:null===m||void 0===m||null===(a=m.metadata)||void 0===a?void 0:a.page_number},onChange:ee,className:"isoSearchableTable"}),M&&(0,E.jsx)(P,{detailModalData:z,CHANGE_PHONE_NUMBER_ERROR:N,closeModal:F,isOpen:M,approveApprovalRequest:R,rejectApprovalRequest:T})]})})})},D=e=>(0,E.jsx)(r.o$,{children:(0,E.jsx)(j,{...e})})},37419:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(80878);const r=a.n(o)().div`
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
`},5320:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(21577),r=a(80878),l=a.n(r),n=a(34618),i=a(67050),d=a(93317);const p=l()(o.A)`
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
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
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
`,c=((0,d.A)(s),(0,d.A)(p))},21994:(e,t,a)=>{a.d(t,{U:()=>r});const o=a(78533).A.url,r={GET_APPROVAL_DATA:"GET_APPROVAL_DATA",GET_APPROVAL_DATA_REQUEST:"GET_APPROVAL_DATA_REQUEST",CREATE_APPROVAL_DATA:"CREATE_APPROVAL_DATA",CREATE_APPROVAL_DATA_REQUEST:"CREATE_APPROVAL_DATA_REQUEST",APPROVE_APPROVAL_DATA:"APPROVE_APPROVAL_DATA",APPROVE_APPROVAL_DATA_REQUEST:"APPROVE_APPROVAL_DATA_REQUEST",REJECT_APPROVAL_DATA:"REJECT_APPROVAL_DATA",REJECT_APPROVAL_DATA_REQUEST:"REJECT_APPROVAL_DATA_REQUEST",CHANGE_PHONE_NUMBER:"CHANGE_PHONE_NUMBER",CHANGE_PHONE_NUMBER_REQUEST:"CHANGE_PHONE_NUMBER_REQUEST",RESET_REDUX_STATE_APPROVAL:"RESET_REDUX_STATE_APPROVAL",getApprovalData:e=>({type:r.GET_APPROVAL_DATA_REQUEST,payload:{...e,method:"get",url:o.getApprovalList}}),createApprovalData:e=>({type:r.CREATE_APPROVAL_DATA_REQUEST,payload:{...e,method:"post",url:o.createApprovalList}}),approveApprovalData:e=>({type:r.APPROVE_APPROVAL_DATA_REQUEST,payload:{...e,method:"post",url:o.approveApprovalList}}),rejectApprovalData:e=>({type:r.REJECT_APPROVAL_DATA_REQUEST,payload:{...e,method:"post",url:o.rejectApprovalList}}),changeUserPhone:e=>({type:r.CHANGE_PHONE_NUMBER_REQUEST,payload:{...e,method:"post",url:o.changeUserPhone}}),resetReduxStateApproval:e=>({type:r.RESET_REDUX_STATE_APPROVAL,payload:e})}},21852:(e,t,a)=>{a.d(t,{AJ:()=>s,Og:()=>p,aZ:()=>d,pR:()=>i});var o=a(69732),r=a(49968),l=a(21994);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=(0,r.lN)(),[l]=(0,o.useServiceRequest)(a);return[t,async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await l(e({...t}))}]},i=()=>n(l.U.getApprovalData),d=()=>n(l.U.approveApprovalData),p=()=>n(l.U.rejectApprovalData),s=()=>{const[,e]=(0,r.lN)();return[function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(l.U.resetReduxStateApproval(t))}]}},21577:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(67816);const r=o.Table}}]);
//# sourceMappingURL=66.ca487d59.chunk.js.map