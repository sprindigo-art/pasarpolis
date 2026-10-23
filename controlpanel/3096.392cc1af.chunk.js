"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3096],{3096:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var r=a(67816),i=a(8634),l=a(80878),o=a.n(l);const n=o().div` 
    .filter-column {
        width: 45%;
    }
    .wdth-120 {
        width: 120px;
    }
    .wdth-180 {
        width: 180px;
    }
    .visible {
        visibility: hidden;
    }
    .mt_20 {
        margin-top: -20px;
    }
    .mr-30 {
        margin-right: 30px;
    }
    .required-star {
        color: ${e=>e.theme.errorColor};
    }
    .filter-row-item {
        width: 48%;
    }
    .filter-row-title {
        width: 50%;
    }
`;var s=a(1502),d=a.n(s);const c=o().div`
    .mt-20 { 
        margin-top: 20px;
    }
    .mb-16 {
        margin-bottom: 16px;
    }
    .ant-form-item {
        margin-bottom: 16px;
    }
`;var p=a(17135),u=a(33097),h=a.n(u),m=a(17823),f=a.n(m),b=a(54589),g=a.n(b),x=a(98479),I=a(96760),y=a(70579);const D=new(g());const _=[{type:"PUSH-NOTIF-DRAFT",title:"Save Draft"},{type:"PUSH-NOTIF-SCHEDULED",title:"Schedule Publish"},{type:"PUSH-NOTIF-PUBLISHED",title:"Publish Now"}];var T=a(95916);const S=o().div`
  .timezone {
    color: ${e=>e.theme.errorRed};
    font-size: 12px;
  }
`,N=new(g());const C=r.Form.create()((function(e){let{form:t,defaultValue:a}=e;const i=N.get("userProfile").user_timezone;f().tz.setDefault(i);const{getFieldDecorator:l}=t;return(0,y.jsxs)(S,{children:[(0,y.jsx)(r.Form,{children:(0,y.jsx)(r.Form.Item,{label:"Schedule",children:l("scheduled-at",{initialValue:a?f()(a):""})((0,y.jsx)(r.DatePicker,{showTime:{format:"HH:mm",minuteStep:30,defaultValue:f()().minute()>=30?f()((f()().hour()+1)%24+":00:00","HH:mm:ss"):f()(`${f()().hour()}:30:00`,"HH:mm:ss")},format:"YYYY-MM-DD HH:mm:ss",showToday:!1,disabledDate:e=>e.isBefore(f()(),"day"),disabledTime:e=>({disabledHours:()=>f()().hour()>0&&e.isSame(f()(),"day")?(0,T.range)(0,f()().hour()):[],disabledMinutes:()=>e.isSame(f()(),"hour")?f()().minute()>30?[0,30]:[0]:[]})}))})}),i&&(0,y.jsx)("p",{className:"timezone",children:`Note: Schedule Time is in ${i} Timezone`})]})}));var F=a(69732),w=a(77980),v=a(78533),$=a(97418),j=a(175);const E=v.A.url,k={GET_NOTIFICATIONS_LIST_REQUEST:"GET_NOTIFICATIONS_LIST_REQUEST",GET_NOTIFICATIONS_LIST:"GET_NOTIFICATIONS_LIST",ADD_NOTIFICATION_REQUEST:"ADD_NOTIFICATION_REQUEST",ADD_NOTIFICATION:"ADD_NOTIFICATION",EDIT_NOTIFICATION_REQUEST:"EDIT_NOTIFICATION_REQUEST",EDIT_NOTIFICATION:"EDIT_NOTIFICATION",UPLOAD_FILE_REQUEST:"UPLOAD_FILE_REQUEST",UPLOAD_FILE:"UPLOAD_FILE",getNotificationCenterList:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:k.GET_NOTIFICATIONS_LIST_REQUEST,payload:{query:e,method:"GET",url:E.getNotificationCenterListApi}}},addNotification:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:k.ADD_NOTIFICATION_REQUEST,payload:{body:e,method:"POST",url:E.pushNotificationsApi}}},editNotification:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:k.EDIT_NOTIFICATION_REQUEST,payload:{...e,method:"PUT",url:E.editNotificationApi(e.id)}}},uploadBannerImage:e=>({type:k.UPLOAD_FILE_REQUEST,payload:{...e,headers:(0,$.Bs)(),url:j.i8,method:"POST"}})},A={},O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{type:a,payload:r={}}=t;switch(a){case k.ADD_NOTIFICATION:case k.GET_NOTIFICATIONS_LIST:case k.UPLOAD_FILE:return{...e,...r};default:return{...e||{}}}},L=(0,s.createContext)(),U=e=>(0,y.jsx)(L.Provider,{value:(0,s.useReducer)(O,A),children:e.children});var P=a(83772);const R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=(0,s.useContext)(L),[r]=(0,F.useServiceRequest)(a),i=(0,s.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await r(e({...t}))}),[r,e]);return[t,i]},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.bz;const[{uploadFileData:a},r]=R(k.uploadBannerImage),[{UPLOAD_FILE_LOADER:i}]=(0,F.useLoaderContextValue)(),[{uploadFileStatus:l},o]=(0,F.useErrorContextValue)(),n=(0,s.useRef)({type:"",id:""}),d=(0,s.useCallback)(((e,a,i)=>{let{file:l}=e;const o=new FormData,s=`${l.name.split(".")[0].trim()}-${Date.parse(new Date)}`;o.append("file",l),o.append("path",`${t}/${s}`),o.append("identifier","agent"),n.current.type=a,n.current.id=i,r({body:o})}),[r,t]);return(0,s.useEffect)((()=>{function t(e){o((0,F.resetError)({[e]:void 0}))}"success"===l&&n.current.type?(e(a.url,{...n.current}),t("uploadFileStatus"),n.current.type=""):l&&n.current.type&&((0,w.D)("error",l),t("uploadFileStatus"))}),[e,a,l,o]),{customRequest:d,UPLOAD_FILE_LOADER:i}};var H=a(94528);const Y=o().div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  border: 1px solid ${e=>e.theme.borderGrey};

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .offline-pdf-upload-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: transparent;
    width: 100%;
    padding: 1px 0;
  }

  .img-name {
    position: absolute;
    bottom: 0;
    background-color: ${e=>e.theme.lightGrey};
    color: ${e=>e.theme.black};
    font-weight: 800;
    width: 100%;
    text-align: center;
    padding: 1px 0;
    font-size: 10px;
  }

  .remove-img {
    position: absolute;
    top: -14px;
    right: -10px;
    font-size: 18px;
    cursor: pointer;

    .close-circle-icon {
      color: ${e=>e.theme.errorColor};
    }
  }

  .text-center {
    text-align: center;
  }
`;const z=function(e){let{img:t,name:a,isNew:i,onSave:l,onRemove:o,disabled:n=!1,isFileUploading:d}=e;const[c,p]=(0,s.useState)(t),u=(0,s.useCallback)(((e,t)=>{p(e),l(e,t.type)}),[l]),{customRequest:h,UPLOAD_FILE_LOADER:m}=V(u),f=(0,s.useCallback)((e=>{e.stopPropagation(),o()}),[o]);return(0,s.useEffect)((()=>{d&&d(m)}),[m,d]),(0,y.jsx)(r.Upload,{name:a||"file",id:a,multiple:!1,showUploadList:!1,accept:".png,.jpg,.jpeg",customRequest:e=>{h(e,a)},value:c,data:c,disabled:n,children:(0,y.jsx)(H.A,{isSpining:m,children:(0,y.jsxs)(Y,{children:[!i&&o&&!n&&(0,y.jsx)("div",{className:"remove-img",onClick:f,children:(0,y.jsx)(r.Icon,{type:"close-circle",className:"close-circle-icon"})}),i?(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)(r.Icon,{type:"upload"}),(0,y.jsx)("div",{children:"Click to upload"})]}):(0,y.jsx)("img",{src:c,alt:""}),!i&&(0,y.jsx)("span",{className:"img-name",children:a})]})})})};const M=r.Form.create()((function(e){const t=(0,s.useRef)(),{form:a,defaultValue:i,onSuccessfullAddition:l}=e,[o,n]=(0,s.useState)(h()(null===i||void 0===i?void 0:i.extra_data,"image","")),[d,u]=(0,s.useState)(!1),[m,b]=(0,s.useState)(h()(i,"recipients","ALL")),[g,x]=(0,s.useState)(!1),I="Published"===h()(i,"notification_status",""),[,D]=R(k.addNotification),[{ADD_NOTIFICATION_LOADER:T}]=(0,F.useLoaderContextValue)(),[{addNotificationStatus:S,addNotificationErrorData:N}]=(0,F.useErrorContextValue)(),{resetError:v}=(0,F.useResetError)();(0,s.useEffect)((()=>{if("success"===S)l(),x(!1),v(["addNotificationStatus"]);else if(S){const e=null===N||void 0===N?void 0:N.message;"PP-PUSH-NOTIF-DATA-NOT-UNIQUE"===(null===N||void 0===N?void 0:N.error_code)&&(0,w.D)("error",e),v(["addNotificationStatus","addNotificationErrorData"])}}),[S,v,null===N||void 0===N?void 0:N.message,l,null===N||void 0===N?void 0:N.error_code]);const $=(0,s.useCallback)((e=>{b(e)}),[]),j=(0,s.useCallback)((e=>(0,p.A)({...e,getFieldDecorator:a.getFieldDecorator,getFieldValue:a.getFieldValue})),[a]),E=(0,s.useCallback)((e=>e.map(((e,t)=>j(e)))),[j]),A=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};x(!1),a.validateFields(((a,r)=>{if(!a){const a={...r,recipients:m,image:o,request_type:e,...t};i.id&&(a.id=i.id),D(a)}}))};return(0,y.jsx)(c,{children:(0,y.jsx)(H.A,{isSpining:T,children:(0,y.jsxs)(r.Form,{children:[E([{name:"title",title:"Title",subTitle:"title",type:"textarea",placeholder:"Enter the Title",max:100,min:1,defaultValue:h()(i,"title",""),disabled:I,extra:"* max 100 characters are allowed"},{name:"description",title:"Content",placeholder:"Enter the Content",type:"textarea",max:800,defaultValue:h()(i,"description",""),disabled:I,extra:"* max 800 characters are allowed"}]),(0,y.jsx)("p",{children:"Upload Image"}),(0,y.jsx)(z,{onSave:e=>n(e),name:"notification_image",img:o,isNew:!o,fileType:".png,.jpg,.jpeg",onRemove:()=>n(""),disabled:I,isFileUploading:e=>u(e)}),(0,y.jsx)("p",{children:"Recipients"}),(0,y.jsxs)(r.Select,{placeholder:"Pilih ...",value:m,className:"mb-16",onChange:$,disabled:I,children:[(0,y.jsx)(r.Select.Option,{value:"ALL",children:"All"}),(0,y.jsx)(r.Select.Option,{value:"aggregator",disabled:!0,children:"Aggregator"}),(0,y.jsx)(r.Select.Option,{value:"marketing",disabled:!0,children:"Marketing Team"})]}),(0,y.jsx)("br",{}),"Published"!==h()(i,"notification_status","")&&(0,y.jsx)(r.Row,{type:"flex",justify:"space-around",className:"mt-20",children:_.map(((e,t)=>(0,y.jsx)(r.Button,{className:"mb-10",type:"primary",htmlType:"button",onClick:()=>{var t;"PUSH-NOTIF-SCHEDULED"===(t=e.type)?a.validateFields((e=>{e||x(!0)})):A(t)},disabled:d,children:e.title},t)))}),g&&(0,y.jsx)(r.Modal,{visible:g,onCancel:()=>x(!1),onOk:()=>{t.current.getFieldValue("scheduled-at")&&A("PUSH-NOTIF-SCHEDULED",{scheduled_at:f().utc(t.current.getFieldValue("scheduled-at")).format("YYYY-MM-DD HH:mm:ss")})},children:(0,y.jsx)(C,{ref:t,defaultValue:h()(i,"published_at","")})})]})})})})),B=M;var Q=a(21577),q=a(34618),G=a(67050),J=a(93317);const K=o()(Q.A)`
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
    color: ${(0,q.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,q.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,q.palette)("secondary",1)};
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
    color: ${(0,q.palette)("text",3)};
    border-bottom: 1px solid ${(0,q.palette)("border",0)};

    a {
      color: ${(0,q.palette)("primary",0)};
      ${(0,G.kY)()};

      &:hover {
        color: ${(0,q.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,q.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,q.palette)("border",0)};
  }

  .ant-table-pagination {
    display: block;
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,q.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,q.palette)("border",0)};

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
      border-color: ${(0,q.palette)("primary",0)};
      ${(0,G.kY)()};
    }

    &:hover a {
      color: ${(0,q.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,q.palette)("primary",0)};
    border-color: ${(0,q.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,q.palette)("grayscale",6)};

    p {
      color: ${(0,q.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,q.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,q.palette)("secondary",1)};
    color: ${(0,q.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,G.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,q.palette)("secondary",1)};
    color: ${(0,q.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,G.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,q.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,q.palette)("border",0)};
      ${(0,G.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,q.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,q.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,G.Vq)("3px 0 0 3px")};
        ${(0,G.kY)()};
        ${(0,G.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,q.palette)("secondary",7)};
          ${(0,G.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,q.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,q.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,q.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,q.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,q.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,G.kY)()};

        &:hover {
          background-color: ${(0,q.palette)("primary",1)};
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
        border: 1px solid ${(0,q.palette)("border",0)};
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
              solid ${(0,q.palette)("border",0)};
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
          border-right: 1px solid ${(0,q.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,q.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,q.palette)("border",0)};
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
          color: ${(0,q.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,q.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,G.Vq)("3px")};
          ${(0,G.MS)()};
          ${(0,G.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,q.palette)("border",0)};
            ${(0,G.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,q.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,q.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,q.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,q.palette)("grayscale",0)};
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
`,W=o().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,q.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,q.palette)("primary",0)};
      background-color: ${(0,q.palette)("primary",0)};
    }
  }
`,Z=((0,J.A)(W),(0,J.A)(K)),X=r.Form.create()((e=>{const{form:t,notificationListHandler:a,parentRef:i}=e,l=(0,s.useRef)({});(0,s.useImperativeHandle)(i,(()=>({handleResetField:()=>{t.resetFields(),l.current={}}})));const o=(0,s.useCallback)((e=>{let{name:a,placeholder:i,type:o,data:n=[],dropdownKey:s="code",dropdownValue:d="name",className:c,min:p,max:u}=e,h="";switch(o){case"text":case"email":h=(0,y.jsx)(r.Input,{type:o,placeholder:i});break;case"datepicker":h=(0,y.jsx)(r.DatePicker,{placeholder:i,onChange:e=>((e,a)=>{if(["created_at_start","created_at_end"].includes(e)&&(a="created_at_start"===e?`${a} 00:00:00`:`${a} 23:59:59`,l.current[e]=a),"published_at"===e){const r={};r[`${e}_start`]=`${a} 00:00:00`,r[`${e}_end`]=`${a} 23:59:59`,t.setFieldsValue({notification_status:a?"PUSH-NOTIF-PUBLISHED":"PUSH-NOTIF-DRAFT"}),l.current={...l.current,...r}}})(a,e?f()(e).format("YYYY-MM-DD"):""),format:"YYYY-MM-DD",disabledDate:e=>((e,t,a,r)=>"created_at_start"===r&&t?e>t+864e5:"created_at_end"===r&&a?e<a:void 0)(e,u,p,a)});break;case"select":h=(0,y.jsx)(r.Select,{className:c,placeholder:i,onSelect:(e,a)=>{let{props:r}=a;return(e=>{["PUSH-NOTIF-DRAFT","PUSH-NOTIF-SCHEDULED"].includes(e)&&t.getFieldValue("published_at")&&(t.setFieldsValue({published_at:""}),delete l.current.published_at_start,delete l.current.published_at_end)})(e,r.children)},children:n.map((e=>(0,y.jsx)(r.Select.Option,{value:e[s],disabled:e.isDisabled,children:e[d]},e[s])))});break;default:return null}return h}),[]),n=(0,s.useCallback)(((e,a)=>{const{getFieldDecorator:i}=t;return(0,y.jsx)(r.Col,{className:"filter-column",children:(0,y.jsx)(r.Form.Item,{children:i(e.name)(o(e))})},a)}),[t,o]),d=(0,s.useCallback)(((e,a)=>{const{getFieldDecorator:i}=t,l=o(e);return(0,y.jsxs)(r.Row,{type:"flex",align:"top",children:[(0,y.jsx)(r.Col,{span:13,className:"filter-row-title",children:(0,y.jsx)("b",{children:e.title})}),e.children?(0,y.jsx)(r.Row,{type:"flex",justify:"space-between",className:"filter-row-item",children:e.children.map(((e,t)=>n(e,t)))}):(0,y.jsx)(r.Form.Item,{children:i(e.name,{initialValue:"select"===e.type?e.defaultValue:""})(l)})]},a)}),[t,n,o]),c=(0,s.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,y.jsx)(r.Col,{className:"filter-column",children:e.map(((e,t)=>d(e,t)))})}),[d]);return(0,y.jsx)(r.Form,{children:(0,y.jsxs)(r.Row,{type:"flex",justify:"space-between",children:[c([{name:"title",title:"Title",placeholder:"Enter Title",type:"text",defaultValue:""},{name:"recipients",title:"Recipients",placeholder:"Enter Recipient",type:"select",defaultValue:"ALL",className:"wdth-180",data:[{code:"ALL",name:"All",isDisabled:!1},{code:"aggregator",name:"Aggregator",isDisabled:!0},{code:"marketing",name:"Marketing Team",isDisabled:!0}]},{name:"creator",title:"Creator",placeholder:"Enter Email",type:"email",defaultValue:""}]),c([{title:"Notification State",name:"notification_status",placeholder:"Select",type:"select",className:"wdth-180",defaultValue:"PUSH-NOTIF-DRAFT",data:[{code:"PUSH-NOTIF-DRAFT",name:"Draft"},{code:"PUSH-NOTIF-SCHEDULED",name:"Scheduled"},{code:"PUSH-NOTIF-PUBLISHED",name:"Published"}]},{name:"createdAt",title:"Created At",children:[{name:"created_at_start",placeholder:"Start Date",type:"datepicker",max:t.getFieldValue("created_at_end")},{name:"created_at_end",placeholder:"End Date",type:"datepicker",min:t.getFieldValue("created_at_start")}]},{name:"published_at",title:"Published At",placeholder:"Select Date",type:"datepicker"}]),(0,y.jsx)(r.Col,{children:(0,y.jsx)(r.Button,{className:"mb-10",type:"primary",htmlType:"button",onClick:()=>{t.validateFields(((e,t)=>{if(!e){const{title:e,recipients:r,notification_status:i,creator:o}=t;a({title:e,recipients:r,notification_status:i,creator:o,...l.current})}}))},children:"Apply Filter"})})]})})})),ee=d().forwardRef(((e,t)=>(0,y.jsx)(X,{parentRef:t,...e})));const te=function(){const[{getNotificationsListData:e},t]=R(k.getNotificationCenterList),[{GET_NOTIFICATIONS_LIST_LOADER:a}]=(0,F.useLoaderContextValue)();(0,s.useEffect)((()=>{t()}),[t]);const l=(0,s.useCallback)((()=>{if(null!==e&&void 0!==e&&e.data){const t=JSON.parse(JSON.stringify(null===e||void 0===e?void 0:e.data));return null===t||void 0===t?void 0:t.map(((e,t)=>(e.number=t+1,e.notification_status=(e=>{switch(e){case"PUSH-NOTIF-DRAFT":return"Draft";case"PUSH-NOTIF-SCHEDULED":return"Scheduled";case"PUSH-NOTIF-PUBLISHED":return"Published";default:return""}})(e.notification_status),e)))}}),[e]),o=(0,s.useRef)({recipients:[{code:"ALL",name:"All",isDisabled:!1},{code:"aggregator",name:"Aggregator",isDisabled:!0},{code:"marketing",name:"Marketing Team",isDisabled:!0}],notificationStatus:[{code:"PUSH-NOTIF-DRAFT",name:"Draft"},{code:"PUSH-NOTIF-SCHEDULED",name:"Scheduled"},{code:"PUSH-NOTIF-PUBLISHED",name:"Published"}],notificationData:{}}),d=(0,s.useRef)(),[c,p]=(0,s.useState)(1),[u,h]=(0,s.useState)({}),[m,b]=(0,s.useState)(""),[g,_]=(0,s.useState)([]),[S,N]=(0,s.useState)(!1),[C,w]=(0,s.useState)(!1),v=(0,s.useCallback)((()=>{w(!1),o.current.notificationData={}}),[]),$=(0,s.useCallback)((function(){t(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}),[t]),j=(0,s.useCallback)((e=>{const{pageSize:t,current:a}=e,r={page:a,limit:t};p(a),$(r)}),[$]),E=(0,s.useCallback)(((e,t)=>{h({...u,[t]:e.target.value}),N(!0)}),[u]),A=(0,s.useCallback)(((e,t)=>{const{startDate:a,endDate:r}=e,i=`${a} 00:00:00`,l=`${r} 23:59:59`,o={createdAt:"createdAt"}[t]||t,n={};a&&(n[`${o}_start`]=i),r&&(n[`${o}_end`]=l);const s={...u,...n};h({...u,...n}),b(""),$(s),N(!0)}),[u,$]),O=(0,s.useCallback)((e=>{e.preventDefault(),b(""),$(u)}),[u,$]),L=(0,s.useCallback)((e=>{o.current.notificationData=e,w(!0)}),[]),U=(0,s.useCallback)((()=>function(e){let{handleDetailPage:t,searchTextQuery:a,handleInputChange:i,handleSearch:l,isFilterVisible:o,setIsFilterVisible:n,recipients:s,notificationStatus:d,isChange:c,onSearchDate:p}=e;return[{key:"number",title:"Number",dataIndex:"number",align:"center"},{key:"title",title:"Title",dataIndex:"title",align:"center",filterIcon:(0,y.jsx)(r.Icon,{type:"search",style:{color:a.title&&I.l.blue}}),filterDropdown:(0,y.jsx)(x.ZY,{idIdentifier:"title",className:"agent-table-search",searchText:c?a.title:"",onInputChange:e=>i(e,"title"),onSearch:e=>l(e,"title")}),filterDropdownVisible:"title"===o,onFilterDropdownVisibleChange:e=>n(e?"title":a.title)},{key:"recipients",title:"Recipients",dataIndex:"recipients",align:"center",filterDropdown:(0,y.jsx)(x.Ib,{idIdentifier:"recipients",className:"agent-table-search",searchText:c?a.recipients:"",onInputChange:e=>i(e,"recipients"),onSearch:e=>l(e,"recipients"),partners:s,placeholder:"Select Recipients..."}),filterIcon:(0,y.jsx)(r.Icon,{type:"search",style:{color:a.recipients&&I.l.blue}}),filterDropdownVisible:"recipients"===o,onFilterDropdownVisibleChange:e=>n(e?"recipients":a.recipients)},{key:"created_at",title:"Created At",dataIndex:"created_at",align:"center",render:(e,t)=>{const a=D.get("userProfile").user_timezone;return f()(e).tz(a).format("MMM DD,YYYY hh:mm A")},filterIcon:(0,y.jsx)(r.Icon,{type:"search",style:{color:a.created_at_start&&a.created_at_end&&"#1890ff"}}),filterDropdown:(0,y.jsx)(x.QD,{idIdentifier:"created_at",onInputChange:e=>i(e,"created_at"),onSearch:e=>p(e,"created_at")}),filterDropdownVisible:"created_at"===o,onFilterDropdownVisibleChange:e=>n(e?"created_at":a.created_at_start)},{key:"published_at",title:"Publish At",dataIndex:"published_at",align:"center",render:(e,t)=>{const a=D.get("userProfile").user_timezone;return e?f()(e).tz(a).format("MMM DD,YYYY hh:mm A"):""},filterIcon:(0,y.jsx)(r.Icon,{type:"search",style:{color:a.published_at_start&&a.published_at_end&&"#1890ff"}}),filterDropdown:(0,y.jsx)(x.QD,{idIdentifier:"published_at",onInputChange:e=>i(e,"published_at"),onSearch:e=>p(e,"published_at")}),filterDropdownVisible:"published_at"===o,onFilterDropdownVisibleChange:e=>n(e?"published_at":a.published_at_start)},{key:"notification_status",title:"Broadcast Status",dataIndex:"notification_status",align:"center",filterDropdown:(0,y.jsx)(x.Ib,{idIdentifier:"notification_status",className:"agent-table-search",searchText:c?a.notification_status:"",onInputChange:e=>i(e,"notification_status"),onSearch:e=>l(e,"notification_status"),partners:d,placeholder:"Select Broadcast Status..."}),filterIcon:(0,y.jsx)(r.Icon,{type:"search",style:{color:a.notification_status&&I.l.blue}}),filterDropdownVisible:"notification_status"===o,onFilterDropdownVisibleChange:e=>n(e?"notification_status":a.notification_status)},{key:"creator",title:"Creator",dataIndex:"creator",align:"center",filterIcon:(0,y.jsx)(r.Icon,{type:"search",style:{color:a.creator&&I.l.blue}}),filterDropdown:(0,y.jsx)(x.ZY,{idIdentifier:"creator",className:"agent-table-search",searchText:c?a.creator:"",onInputChange:e=>i(e,"creator"),onSearch:e=>l(e,"creator")}),filterDropdownVisible:"creator"===o,onFilterDropdownVisibleChange:e=>n(e?"creator":a.creator)},{key:"action",title:"Action",dataIndex:"action",align:"center",render:(e,a)=>(0,y.jsx)(r.Icon,{type:"Published"===a.notification_status?"info-circle":"edit",className:"isoEditIcon",onClick:()=>t(a)})}]}({handleDetailPage:L,searchTextQuery:u,isFilterVisible:m,handleInputChange:E,handleSearch:O,setIsFilterVisible:b,isChange:S,onSearchDate:A,...o.current})),[m,S,u,E,O,A,L]);return(0,s.useEffect)((()=>{_(U())}),[m,u,U]),(0,y.jsx)(n,{children:(0,y.jsxs)(i.A,{children:[C&&(0,y.jsx)(r.Modal,{style:{top:"5%"},footer:null,visible:C,onCancel:v,children:(0,y.jsx)(B,{defaultValue:o.current.notificationData,onSuccessfullAddition:()=>{t(),w(!1),o.current.notificationData={}}})}),(0,y.jsxs)(r.Row,{type:"flex",justify:"space-between",children:[(0,y.jsx)(r.Col,{children:(0,y.jsx)("h3",{children:(0,y.jsx)("b",{children:"Notification Center"})})}),(0,y.jsxs)(r.Col,{children:[(0,y.jsx)(r.Button,{className:"mb-10 mr-30",type:"primary",htmlType:"button",onClick:()=>{w(!0)},children:"Add New Post"}),(0,y.jsx)(r.Button,{className:"mb-10",type:"danger",htmlType:"button",onClick:()=>{$(),d.current.handleResetField(),h({})},children:"Clear Filter"})]})]}),(0,y.jsx)(r.Row,{children:(0,y.jsx)(r.Col,{children:(0,y.jsx)("h4",{children:(0,y.jsx)("b",{children:"Filter"})})})}),(0,y.jsx)("br",{}),(0,y.jsx)(ee,{ref:d,notificationListHandler:$}),Object.keys(u).map((e=>(0,y.jsx)(r.Tag,{className:"search-tag",color:"purple",closable:"closable",onClose:()=>(e=>{const t={...u};delete t[e],h(t),$(t)})(e),children:u[e]},u[e]))),(0,y.jsx)("div",{className:"mt-10",children:(0,y.jsx)(Z,{columns:g,bordered:!0,rowKey:e=>e.number,dataSource:l()||[],pagination:{pageSize:20,total:(0,T.get)(null===e||void 0===e?void 0:e.meta_data,"total_records",""),current:c},loading:a,onChange:j})})]})})};const ae=function(e){return(0,y.jsx)(U,{children:(0,y.jsx)(te,{...e})})}},21577:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(67816);const i=r.Table}}]);
//# sourceMappingURL=3096.392cc1af.chunk.js.map