"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7074],{46893:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(21577),o=r(80878),n=r.n(o),i=r(34618),l=r(67050),d=r(93317);const s=n()(a.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,i.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,i.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,i.palette)("secondary",1)};
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
    color: ${(0,i.palette)("text",3)};
    border-bottom: 1px solid ${(0,i.palette)("border",0)};

    a {
      color: ${(0,i.palette)("primary",0)};
      ${(0,l.kY)()};

      &:hover {
        color: ${(0,i.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,i.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,i.palette)("border",0)};

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
      border-color: ${(0,i.palette)("primary",0)};
      ${(0,l.kY)()};
    }

    &:hover a {
      color: ${(0,i.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,i.palette)("primary",0)};
    border-color: ${(0,i.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,i.palette)("grayscale",6)};

    p {
      color: ${(0,i.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,i.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,i.palette)("secondary",1)};
    color: ${(0,i.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,l.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,i.palette)("secondary",1)};
    color: ${(0,i.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,l.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,i.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .errorSearchBoxText {
      margin-left: 20px;
      color: red;
    }

    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,i.palette)("border",0)};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,i.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,i.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,l.Vq)("3px 0 0 3px")};
        ${(0,l.kY)()};
        ${(0,l.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,i.palette)("secondary",7)};
          ${(0,l.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,i.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,i.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,l.kY)()};

        &:hover {
          background-color: ${(0,i.palette)("primary",1)};
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
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          order: -1;
        }
      }
    }
  }

  &.isoGroupTable {
    .ant-table-thead > tr {
      th {
        border: 1px solid ${(0,i.palette)("border",0)};
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
              solid ${(0,i.palette)("border",0)};
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
          border-right: 1px solid ${(0,i.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,i.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,i.palette)("border",0)};
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
          color: ${(0,i.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,i.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,l.Vq)("3px")};
          ${(0,l.MS)()};
          ${(0,l.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,i.palette)("border",0)};
            ${(0,l.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,i.palette)("grayscale",0)};
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
`,c=n().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,i.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,i.palette)("primary",0)};
      background-color: ${(0,i.palette)("primary",0)};
    }
  }
`,p=((0,d.A)(c),(0,d.A)(s))},13958:(e,t,r)=>{r.d(t,{A:()=>h});var a=r(1502),o=r(24952),n=r(67816),i=r(29308),l=r(87291),d=r(96117),s=r(70579);const{createServiceCenter:c,updateServiceCenter:p,resetServiceCenterRedux:u}=i.A,{resetErrorRedux:g}=l.A,{resetLoadingRedux:x}=d.A,b=[{label:"Indonesia",value:"Indonesia"},{label:"Vietnam",value:"Vietnam"},{label:"Thaliland",value:"Thailand"}];const m=n.Form.create()((function(e){let{form:t,data:r={},isOpen:o,resetErrorRedux:i,onClosePopupForm:l,resetLoadingRedux:d,updateServiceCenter:c,createServiceCenter:p,resetServiceCenterRedux:u,createServiceCenterError:g,updateServiceCenterError:x,updateServiceCenterLoading:m,createServiceCenterMessage:h,createServiceCenterLoading:f,updateServiceCenterDataMessage:v}=e;const{getFieldDecorator:C}=t;return(0,a.useEffect)((()=>{!1===f&&(g?(n.notification.error({message:h}),u(["createServiceCenterMessage"])):(h&&n.notification.success({message:h}),t.resetFields(),l()),d(["CREATE_SERVICE_CENTER"]),i(["CREATE_SERVICE_CENTER"]))}),[t,i,l,d,u,g,h,f]),(0,a.useEffect)((()=>{!1===m&&(x?(n.notification.error({message:v||"Error"}),u(["updateServiceCenterDataMessage"]),i(["UPDATE_SERVICE_CENTER"])):(v&&n.notification.success({message:v}),u(["updateServiceCenterDataMessage"]),l()),d(["UPDATE_SERVICE_CENTER"]))}),[i,l,d,u,x,m,v]),(0,s.jsx)(n.Modal,{visible:o,okText:"Submit",onOk:()=>{t.validateFields(((e,t)=>{e||(r.name?c({...t,name:encodeURI(t.name),code:r.code}):p({...t,name:encodeURI(t.name)}))}))},onCancel:l,handleCancel:l,okButtonProps:{loading:f||m},closable:!0,children:(0,s.jsxs)(n.Form,{form:t,name:"add-service-center",children:[(0,s.jsx)(n.Form.Item,{label:"Service Center Name",children:C("name",{rules:[{required:!0,message:"Service center name is required"}],initialValue:r.name})((0,s.jsx)(n.Input,{placeholder:"Enter service center name",disabled:!!r.name}))}),(0,s.jsx)(n.Form.Item,{label:"Email Adress",children:C("contact_email",{rules:[{required:!0,message:"Email Adress is required"},{type:"email",message:"The input is not valid E-mail!"}],initialValue:r.contact_email})((0,s.jsx)(n.Input,{placeholder:"Enter email adress"}))}),(0,s.jsx)(n.Form.Item,{label:"Country",children:C("country",{rules:[{required:!0,message:"Country is required"}],initialValue:r.country})((0,s.jsx)(n.Select,{placeholder:"Enter country",disabled:!!r.country,children:b.map((e=>{let{label:t,value:r}=e;return(0,s.jsx)(n.Select.Option,{value:r,children:t},r)}))}))}),r&&void 0!==r.is_active?(0,s.jsx)(n.Form.Item,{label:"Active",children:C("is_active",{valuePropName:"checked",initialValue:!!r.is_active})((0,s.jsx)(n.Switch,{}))}):null]})})})),h=(0,o.connect)((e=>({createServiceCenterLoading:e.Loading.CREATE_SERVICE_CENTER,createServiceCenterError:e.Error.CREATE_SERVICE_CENTER,createServiceCenterMessage:e.ServiceCenter.createServiceCenterMessage,updateServiceCenterDataMessage:e.ServiceCenter.updateServiceCenterDataMessage,updateServiceCenterLoading:e.Loading.UPDATE_SERVICE_CENTER,updateServiceCenterError:e.Error.UPDATE_SERVICE_CENTER})),{resetLoadingRedux:x,resetServiceCenterRedux:u,createServiceCenter:c,resetErrorRedux:g,updateServiceCenter:p})(m)},17074:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(1502),o=r(24952),n=r(67816),i=r(89858),l=r(46893),d=r(84029),s=r(29308),c=r(55347),p=r(86178),u=r.n(p),g=r(70579);const x=(e,t)=>[{key:"id",dataIndex:"id",title:"View",render:(t,r)=>(0,g.jsx)(n.Icon,{className:"view-icon",type:"eye",onClick:()=>e.history.push(`/service-center/${r.code}`)})},{key:"name",dataIndex:"name",title:"Service center name",...t("name")},{key:"country",dataIndex:"country",title:"Country",...t("country")},{key:"created_at",dataIndex:"created_at",title:"Created At",render:e=>e?u()(e).format("DD/MM/YYYY"):""},{key:"created_by",dataIndex:"created_by",title:"Created By"},{key:"updated_at",dataIndex:"updated_at",title:"Last modified",render:e=>e?u()(e).format("DD/MM/YYYY"):""},{key:"updated_by",dataIndex:"updated_by",title:"Last modified By"},{key:"is_active",dataIndex:"is_active",title:"Status",render:e=>e?"Active":"Inactive"}];var b=r(50248),m=r(13958),h=r(70307),f=r.n(h);const{getServiceCenterList:v}=s.A;const C=(0,o.connect)((e=>({serviceCenterList:e.ServiceCenter.serviceCenterList,serviceCenterListLoading:e.Loading.GET_SERVICE_CENTER_LIST,serviceCenterListError:e.Error.GET_SERVICE_CENTER_LIST,serviceCenterListMessage:e.ServiceCenter.serviceCenterListMessage,profileData:e.Auth.profile})),{getServiceCenterList:v})((function(e){const{permissions:t,serviceCenterList:r,serviceCenterListMessage:o,serviceCenterListError:s,serviceCenterListLoading:p,getServiceCenterList:u}=e,[h,v]=(0,a.useState)(!1),[C,y]=(0,a.useState)({searchText:"",searchedColumn:""});(0,a.useEffect)((()=>{u()}),[u]),(0,a.useEffect)((()=>{s&&n.notification.error({message:o})}),[s,o]);const E=r?r.length:0,$=(e,t,r)=>{t(),y({searchText:e[0],searchedColumn:r})};let S;return(0,g.jsx)(i.A,{children:(0,g.jsxs)(c.A,{className:"referral-table",style:{color:"#788195"},children:[(0,g.jsx)(m.A,{isOpen:h,onClosePopupForm:()=>{v(!1)}}),(0,g.jsxs)(d.A,{children:[(0,g.jsxs)(n.Row,{style:{marginBottom:"10px"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{style:{float:"left",color:"#788195"},children:"Service center List"}),(0,g.jsx)("div",{children:(0,g.jsx)("p",{style:{float:"left",color:"#4482FF",marginLeft:"10px",marginTop:"3px"},children:E})})]}),(0,g.jsx)("div",{style:{float:"right",display:"flex"},children:(0,g.jsx)(b.A,{permissionSetter:"ops.create_service_center",permissionGetter:t,children:(0,g.jsxs)(n.Button,{onClick:()=>{v(!0)},children:[(0,g.jsx)(n.Icon,{type:"plus",theme:"outlined"})," \xa0 Add Service Center"]})})})]}),(0,g.jsx)(l.A,{columns:x(e,(e=>({filterDropdown:t=>{let{setSelectedKeys:r,selectedKeys:a,confirm:o,clearFilters:i}=t;return(0,g.jsxs)("div",{style:{padding:8},children:[(0,g.jsx)(n.Input,{ref:e=>{S=e},placeholder:`Search ${e}`,value:a[0],onChange:e=>r(e.target.value?[e.target.value]:[]),onPressEnter:()=>$(a,o,e),style:{width:188,marginBottom:8,display:"block"}}),(0,g.jsx)(n.Button,{type:"primary",onClick:()=>$(a,o,e),icon:"search",size:"small",style:{width:90,marginRight:8},children:"Search"}),(0,g.jsx)(n.Button,{onClick:()=>(e=>{e(),y({searchText:""})})(i),size:"small",style:{width:90},children:"Reset"})]})},filterIcon:e=>(0,g.jsx)(n.Icon,{type:"search",style:{color:e?"#1890ff":void 0}}),onFilter:(t,r)=>r[e].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout((()=>S.select()))},render:t=>C.searchedColumn===e?(0,g.jsx)(f(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[C.searchText],autoEscape:!0,textToHighlight:t.toString()}):t}))),bordered:!0,rowKey:e=>e.InternalID,dataSource:r,loading:p,className:"isoSearchableTable",scroll:{x:!0}})]})]})})}))},21577:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(67816);const o=a.Table}}]);
//# sourceMappingURL=7074.f81e39f1.chunk.js.map