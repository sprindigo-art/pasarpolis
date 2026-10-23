(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[860,1429],{71429:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V});var r=a(1502),n=a(67816),o=a(38094),l=a.n(o),i=a(17823),s=a.n(i),d=a(69732);const c=a(78533).A.url,p={GET_DOC_LIST:"GET_DOC_LIST",GET_DOC_LIST_REQUEST:"GET_DOC_LIST_REQUEST",CREATE_DOC:"CREATE_DOC",CREATE_DOC_REQUEST:"CREATE_DOC_REQUEST",EDIT_DOC:"EDIT_DOC",EDIT_DOC_REQUEST:"EDIT_DOC_REQUEST",GET_DOC_COUNT:"GET_DOC_COUNT",GET_DOC_COUNT_REQUEST:"GET_DOC_COUNT_REQUEST",RESET_REDUX_STATE_DOC:"RESET_REDUX_STATE_DOC",getDocumentList:e=>({type:p.GET_DOC_LIST_REQUEST,payload:{...e,method:"get",url:c.documentGenerationList}}),createDocument:e=>({type:p.CREATE_DOC_REQUEST,payload:{...e,method:"post",url:c.documentGenerationCreate}}),editDocument:e=>({type:p.EDIT_DOC_REQUEST,payload:{...e,method:"post",url:c.documentGenerationEdit}}),getDocumentListCount:e=>({type:p.GET_DOC_COUNT_REQUEST,payload:{...e,method:"get",url:c.documentGenerationListCount}}),resetReduxStateDoc:e=>({type:p.RESET_REDUX_STATE_DOC,payload:e})},u={},m=(e,t)=>{const{payload:a}=t;switch(t.type){case p.GET_DOC_LIST:case p.GET_DOC_COUNT:case p.CREATE_DOC:case p.EDIT_DOC:return{...e,...a};case p.RESET_REDUX_STATE_DOC:if(a&&Array.isArray(a)){const t={};return a.forEach((e=>{t[e]=u[e]})),{...e,...t}}return{...e};default:return e}};var h=a(70579);const f=(0,r.createContext)(),x=e=>(0,h.jsx)(f.Provider,{value:(0,r.useReducer)(m,u),children:e.children}),g=()=>(0,r.useContext)(f),b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const[t,a]=g(),[r]=(0,d.useServiceRequest)(a);return[t,async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await r(e({...t}))}]};var v=a(55347),y=a(21577),D=a(80878),C=a.n(D),T=a(34618),E=a(67050),_=a(93317);const w=C()(y.A)`
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
    color: ${(0,T.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,T.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,T.palette)("secondary",1)};
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
    color: ${(0,T.palette)("text",3)};
    border-bottom: 1px solid ${(0,T.palette)("border",0)};

    a {
      color: ${(0,T.palette)("primary",0)};
      ${(0,E.kY)()};

      &:hover {
        color: ${(0,T.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,T.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,T.palette)("border",0)};
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
    border: 1px solid ${(0,T.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,T.palette)("border",0)};

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
      border-color: ${(0,T.palette)("primary",0)};
      ${(0,E.kY)()};
    }

    &:hover a {
      color: ${(0,T.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,T.palette)("primary",0)};
    border-color: ${(0,T.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,T.palette)("grayscale",6)};

    p {
      color: ${(0,T.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,T.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,T.palette)("secondary",1)};
    color: ${(0,T.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,E.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,T.palette)("secondary",1)};
    color: ${(0,T.palette)("secondary",2)};
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
    color: ${(0,T.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,T.palette)("border",0)};
      ${(0,E.MS)("0 1px 6px rgba(0,0,0,0.2)")};

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
        color: ${(0,T.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        font-family: italic;
        border: 1px solid ${(0,T.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #e9ebf1;
        ${(0,E.Vq)("3px 0 0 3px")};
        ${(0,E.kY)()};
        ${(0,E.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,T.palette)("secondary",7)};
          ${(0,E.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,T.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,T.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,T.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,T.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,T.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,E.kY)()};

        &:hover {
          background-color: ${(0,T.palette)("primary",1)};
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
        border: 1px solid ${(0,T.palette)("border",0)};
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
              solid ${(0,T.palette)("border",0)};
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
          border-right: 1px solid ${(0,T.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,T.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,T.palette)("border",0)};
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
          color: ${(0,T.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,T.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,E.Vq)("3px")};
          ${(0,E.MS)()};
          ${(0,E.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,T.palette)("border",0)};
            ${(0,E.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,T.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,T.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,T.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,T.palette)("grayscale",0)};
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
`,k=C().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,T.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,T.palette)("primary",0)};
      background-color: ${(0,T.palette)("primary",0)};
    }
  }
`,j=((0,_.A)(k),(0,_.A)(w));var S=a(93807),R=a(98479);const I=C().div`
  width: 100%;
  flex: 1;
  padding: 15px;
  background-color: white;

  .heading{
    margin-left: 15px;
    font-size: 18px;
    margin-bottom: 0;
  }

  .ant-divider {
    height: 2px !important;
  }

  .doc-wrapper {
    float: right;
    padding: 10px;
  }

  .ant-table-wrapper {
    width: 100%;
  }

  .edit-doc {
    border: 1px solid #319ef7;
    width: 45px;
    height: 30px;
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    color: #319ef7;
  }

  .filter-icon-wrapper {
    margin-left: 10px;
    display: flex;
    align-items: center;
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

  .filter-icon {
    margin-right: 20px;
  }

  .title-with-margin{
    margin-left: 20px;
  } 

  .edit-icon{
    font-size: large;
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
`,O=C().div`

  .edit-section{
    width: 100%;
    display: flex;

    .icon{
      margin-left: auto;
      cursor: pointer;
      font-size: large;
    }
  }

  .button-area{
    display: flex;
  }

  .form-submit{
    margin-left: auto;
    margin-right: auto;
  }

  
`,{TextArea:$}=n.Input,N=n.Form.create({})((e=>{let{isOpen:t,closeModal:a,form:o,createDocumentRequest:l,CREATE_DOC_LOADER:i}=e;const{getFieldDecorator:s}=o,d=(0,r.useCallback)((async()=>new Promise((e=>{o.validateFields((t=>{e(!t)}))}))),[o]),c=(0,r.useCallback)((async e=>{e.preventDefault();if(!await d())return;const t={...o.getFieldsValue()};l({body:{...t}})}),[d,o,l]);return(0,h.jsx)(n.Modal,{title:"Create Document",visible:t,onCancel:a,footer:null,afterClose:()=>o.resetFields(),children:(0,h.jsx)(O,{children:(0,h.jsxs)(n.Form,{onSubmit:c,children:[(0,h.jsx)("label",{children:"Code"}),(0,h.jsx)(n.Form.Item,{children:s("code",{rules:[{required:!0,message:"Code can not be empty"}]})((0,h.jsx)(n.Input,{placeholder:"Code"}))}),(0,h.jsx)("label",{children:"Display Name"}),(0,h.jsx)(n.Form.Item,{children:s("display_name",{rules:[{required:!0,message:"Display Name can not be empty"}]})((0,h.jsx)($,{rows:3,placeholder:"Name"}))}),(0,h.jsx)("label",{children:"Reference Doc"}),(0,h.jsx)(n.Form.Item,{children:s("reference_doc",{rules:[{required:!1,message:"Reference Doc can not be empty"}]})((0,h.jsx)(n.Input,{placeholder:"Reference Doc"}))}),(0,h.jsx)("label",{children:"Reference Doc URL"}),(0,h.jsx)(n.Form.Item,{children:s("reference_doc_url",{rules:[{required:!1,message:"Reference Doc URL can not be empty"}]})((0,h.jsx)(n.Input,{placeholder:"Reference Doc URL"}))}),(0,h.jsx)("label",{children:"Static PDF"}),(0,h.jsx)(n.Form.Item,{children:s("static_pdf",{rules:[{required:!1}]})((0,h.jsx)(n.Input,{placeholder:"Static PDF"}))}),(0,h.jsx)("label",{children:"Static PDF URL"}),(0,h.jsx)(n.Form.Item,{children:s("static_pdf_url",{rules:[{required:!1}]})((0,h.jsx)(n.Input,{placeholder:"Static PDF URL"}))}),(0,h.jsx)("label",{children:"HTML Version"}),(0,h.jsx)(n.Form.Item,{children:s("version",{rules:[{required:!1}]})((0,h.jsxs)(n.Select,{placeholder:"HTML Version",children:[(0,h.jsx)(n.Select.Option,{value:1,children:"1 (pdfkit)"}),(0,h.jsx)(n.Select.Option,{value:2,children:"2 (weasyprint)"})]}))}),(0,h.jsx)("label",{children:"HTML"}),(0,h.jsx)(n.Form.Item,{children:s("html",{rules:[{required:!0,message:"html can not be empty"}]})((0,h.jsx)($,{rows:4,placeholder:"HTML"}))}),(0,h.jsx)(n.Button,{type:"primary",htmlType:"submit",className:"form-submit",loading:i,children:"Submit"},"submit")]})})})}));var L=a(95916);const{TextArea:A}=n.Input,M=n.Form.create({})((e=>{let{isOpen:t,closeModal:a,form:o,editDocumentRequest:l,viewOnly:i,dataValues:s,LOADER:d,setViewModal:c}=e;const{getFieldDecorator:p}=o,u=(0,r.useCallback)((async()=>new Promise((e=>{o.validateFields((t=>{e(!t)}))}))),[o]),m=(0,r.useCallback)((async e=>{e.preventDefault();if(!await u())return;const t={...o.getFieldsValue()};l({body:{...t}})}),[u,o,l]);return(0,h.jsx)(n.Modal,{title:""+(i?"View Document":"Edit Document"),visible:t,onCancel:a,footer:null,afterClose:()=>o.resetFields(),children:(0,h.jsxs)(O,{children:[i&&(0,h.jsx)("div",{className:"edit-section",children:(0,h.jsx)(n.Icon,{type:"edit",theme:"twoTone",className:"icon",onClick:()=>c(!1)})}),(0,h.jsxs)(n.Form,{onSubmit:m,children:[(0,h.jsx)("label",{children:"Code"}),(0,h.jsx)(n.Form.Item,{children:p("code",{rules:[{required:!0,message:"Code can not be empty"}],initialValue:(0,L.get)(s,"code")})((0,h.jsx)(n.Input,{placeholder:"Code",disabled:!0}))}),(0,h.jsx)("label",{children:"Display Name"}),(0,h.jsx)(n.Form.Item,{children:p("display_name",{rules:[{required:!0,message:"Display Name can not be empty"}],initialValue:(0,L.get)(s,"display_name")})((0,h.jsx)(A,{rows:3,placeholder:"Name",disabled:i}))}),(0,h.jsx)("label",{children:"Reference Doc"}),(0,h.jsx)(n.Form.Item,{children:p("reference_doc",{rules:[{required:!1,message:"Reference Doc can not be empty"}],initialValue:(0,L.get)(s,"reference_doc")})((0,h.jsx)(n.Input,{placeholder:"Reference Doc",disabled:i}))}),(0,h.jsx)("label",{children:"Reference Doc URL"}),(0,h.jsx)(n.Form.Item,{children:p("reference_doc_url",{rules:[{required:!1,message:"Reference Doc URL can not be empty"}],initialValue:(0,L.get)(s,"reference_doc_url")})((0,h.jsx)(n.Input,{placeholder:"Reference Doc URL",disabled:i}))}),(0,h.jsx)("label",{children:"Static PDF"}),(0,h.jsx)(n.Form.Item,{children:p("static_pdf",{rules:[{required:!1}],initialValue:(0,L.get)(s,"static_pdf")})((0,h.jsx)(n.Input,{placeholder:"Static PDF",disabled:i}))}),(0,h.jsx)("label",{children:"Static PDF URL"}),(0,h.jsx)(n.Form.Item,{children:p("static_pdf_url",{rules:[{required:!1}],initialValue:(0,L.get)(s,"static_pdf_url")})((0,h.jsx)(n.Input,{placeholder:"Static PDF URL",disabled:i}))}),(0,h.jsx)("label",{children:"HTML Version"}),(0,h.jsx)(n.Form.Item,{children:p("version",{rules:[{required:!1}],initialValue:(0,L.get)(s,"version")})((0,h.jsxs)(n.Select,{placeholder:"HTML Version",children:[(0,h.jsx)(n.Select.Option,{value:1,children:"1 (pdfkit)"}),(0,h.jsx)(n.Select.Option,{value:2,children:"2 (weasyprint)"})]}))}),(0,h.jsx)("label",{children:"HTML"}),(0,h.jsx)(n.Form.Item,{children:p("html",{rules:[{required:!0,message:"html can not be empty"}],initialValue:(0,L.get)(s,"html")})((0,h.jsx)(A,{rows:4,placeholder:"HTML",disabled:i}))}),(0,h.jsx)("div",{className:"button-area",children:(0,h.jsx)(n.Button,{type:"primary",htmlType:"submit",className:"form-submit",disabled:i,loading:d,children:"Submit"},"submit")})]})]})})}));a(36690),a(65305),a(95159);var F=a(49052);const z=C().div`
  width: 100%;
  height: 100%;

  .code-header{
    width: 100%;
    background-color: #2e3544;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon{
      font-size: large;
      color: white;
      cursor: pointer;
    }
  }

  .output-wrapper{
    width: 100% !important;
    height: 450px !important;
    overflow-y: scroll !important;
  }

  .btn-section{
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 10px;
    justify-content: space-around;
  }
`,U=e=>{let{closeModal:t,isOpen:a,htmlContent:o,handleHtmlContentChange:l,htmlContentData:i,editDocumentRequest:s,LOADER:d,onlyView:c}=e;const[p,u]=(0,r.useState)(!1),m=`\n    <html>\n      ${o}\n    </html>\n  `;return(0,h.jsx)(n.Modal,{title:"HTML Editor",visible:a,onCancel:()=>{u(!1),t()},width:800,footer:null,children:(0,h.jsxs)(z,{children:[(0,h.jsxs)("div",{className:"code-header",children:[(0,h.jsx)(n.Button,{onClick:()=>u(!p),type:"primary",children:p?"Html":"Preview"}),!p&&(0,h.jsx)(n.Icon,{type:"copy",className:"icon",theme:"filled",onClick:()=>{navigator.clipboard.writeText(o),n.message.success("Copied",.5)}})]}),(0,h.jsx)(h.Fragment,{children:p?(0,h.jsx)("iframe",{title:"output",srcDoc:m,className:"output-wrapper"}):(0,h.jsx)(F.Controlled,{onBeforeChange:(e,t,a)=>{l(a)},value:o,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,theme:"material",mode:"xml",lineNumbers:!0}})}),(0,h.jsxs)("div",{className:"btn-section",children:[!c&&(0,h.jsx)(n.Button,{type:"primary",onClick:()=>{s({body:{...i,html:o}})},loading:d,children:"Edit"}),(0,h.jsx)(n.Button,{onClick:t,children:"Cancel"})]})]})})},q=e=>{var t;let{location:a,history:o,match:i}=e;const[c,u]=(0,r.useState)(!1),[m,f]=(0,r.useState)({}),[x,y]=(0,r.useState)({}),[{getDocListData:D=[]},C]=b(p.getDocumentList),[{getDocCountData:T={}},E]=b(p.getDocumentListCount),[,_]=b(p.createDocument),[,w]=b(p.editDocument),[{GET_DOC_LIST_LOADER:k,CREATE_DOC_LOADER:O,EDIT_DOC_LOADER:$}]=(0,d.useLoaderContextValue)(),[{CREATE_DOC_ERROR:L="",GET_DOC_LIST_ERROR:A="",EDIT_DOC_ERROR:F="",getDocListStatus:z,createDocErrorData:q,createDocStatus:V,editDocErrorData:G,editDocStatus:P},H]=(0,d.useErrorContextValue)(),[Q]=(()=>{const[,e]=g();return[function(){e(p.resetReduxStateDoc)}]})(),[B,W]=(0,r.useState)(!1),[Y,X]=(0,r.useState)(!1),[J,K]=(0,r.useState)({}),[Z,ee]=(0,r.useState)(""),[te,ae]=(0,r.useState)({}),[re,ne]=(0,r.useState)(!1),[oe,le]=(0,r.useState)(!1),[ie,se]=(0,r.useState)(!1),de=(0,r.useMemo)((()=>D&&Array.isArray(D)?D:[]),[D]);(0,r.useEffect)((()=>{const e=l().parse(null===a||void 0===a?void 0:a.search);return ce(e),f({...e}),y({...e}),()=>Q(["getDocListData"])}),[]),(0,r.useEffect)((()=>{A&&(n.notification.error({message:z}),H((0,d.resetError)({GET_DOC_LIST_ERROR:"",getDocListStatus:""})))}),[A,z]),(0,r.useEffect)((()=>{var e,t,a,r,o,l;L?q&&null!==q&&void 0!==q&&null!==(e=q.errors)&&void 0!==e&&e.length&&null!==q&&void 0!==q&&null!==(t=q.errors[0])&&void 0!==t&&t.description?(null===q||void 0===q||null===(a=q.errors[0])||void 0===a||null===(r=a.description)||void 0===r?void 0:r.code[0])&&n.notification.error({message:null===q||void 0===q||null===(o=q.errors[0])||void 0===o||null===(l=o.description)||void 0===l?void 0:l.code[0]}):V&&n.notification.error({message:V}):L||"success"!==V||(V&&n.notification.success({message:V}),W(!1),C(),W(!1));H((0,d.resetError)({CREATE_DOC_ERROR:"",createDocStatus:"",createDocErrorData:""}))}),[L,q,V]),(0,r.useEffect)((()=>{F?G&&null!==G&&void 0!==G&&G.error?n.notification.error({message:null===q||void 0===q?void 0:q.error}):P&&n.notification.error({message:P}):F||"success"!==P||(n.notification.success({message:P}),C(),ee(""),ae({}),le(!1),he({},!1)),H((0,d.resetError)({EDIT_DOC_ERROR:!1,editDocStatus:"",editDocErrorData:""}))}),[F,G,P]);const ce=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:t}=e,a=Number(t)||1;delete e.page,E({query:{...e}}),C({query:{...e,page_number:a}})}),[]),pe=(0,r.useCallback)((e=>{const t={...l().parse(null===a||void 0===a?void 0:a.search),page:e},r=(0,S.A)(t);o.push({pathname:null===a||void 0===a?void 0:a.pathname,search:r}),ce(t)}),[l(),a]),ue=(e,t)=>(0,h.jsx)("div",{className:e,children:(0,h.jsx)("span",{children:t})}),me=(e,t,a)=>{ee(null===e||void 0===e?void 0:e.html),ae(e),se(a),le(t)},he=(e,t,a)=>{K(e),ne(a),X(t)},fe=(0,r.useCallback)(((e,t)=>{f({...m,[t]:e})}),[m,f]),xe=(0,r.useCallback)((e=>{const t=l().parse(null===a||void 0===a?void 0:a.search);delete t[e];const r=(0,S.A)(t);return o.push({pathname:null===a||void 0===a?void 0:a.pathname,search:r}),t}),[a]),ge=(0,r.useCallback)(((e,t)=>{e.preventDefault(),E({query:{code:null===m||void 0===m?void 0:m.code}}),C({query:{code:null===m||void 0===m?void 0:m.code}});const r={...m},n=(0,S.A)(r);o.push({pathname:null===a||void 0===a?void 0:a.pathname,search:n}),ce(r),u({...c,[t]:!1}),y(m)}),[m,c]),be=(0,r.useCallback)((e=>{const t={...m,[e]:void 0};f(t),y(t);const a=xe(e);ce(a)}),[m,xe,C,y,f]),ve=[{key:"View",title:ue("with-margin","View"),render:e=>(0,h.jsx)(n.Icon,{type:"eye",theme:"twoTone",className:"edit-icon",onClick:()=>he(e,!0,!0)})},{key:"action",title:ue("with-margin","Action"),render:e=>(0,h.jsx)(n.Icon,{type:"edit",theme:"twoTone",className:"edit-icon",onClick:()=>he(e,!0,!1)})},{key:"code",title:ue("title-with-margin","Code"),dataIndex:"code",filterDropdown:(0,h.jsx)(R.ZY,{idIdentifier:"code",searchText:m.code?m.code:void 0,onInputChange:e=>fe(e.target.value,"code"),onSearch:e=>ge(e,"code")}),filterIcon:(0,h.jsx)(n.Icon,{type:"filter",theme:"outlined",className:"filter-icon"}),filterDropdownVisible:null===c||void 0===c?void 0:c.code,onFilterDropdownVisibleChange:e=>u({...c,code:e})},{key:"display_name",title:"Display Name",dataIndex:"display_name"},{key:"version",title:"HTML Version",dataIndex:"version"},{key:"active",title:"Active",dataIndex:"active",render:e=>e?"True":"False"},{key:"html",title:"HTML",render:e=>(e=>(0,h.jsx)("div",{className:"html-view-button",children:(0,h.jsx)(n.Button,{onClick:()=>me(e,!0,!1),children:"View"})}))(e)},{key:"reference_doc",title:"Reference Doc",dataIndex:"reference_doc"},{key:"reference_doc_url",title:"Reference Doc URL",dataIndex:"reference_doc_url"},{key:"static_pdf",title:"Static PDF",dataIndex:"static_pdf"},{key:"static_pdf_url",title:"Static PDF URL",dataIndex:"static_pdf_url"},{key:"created_at",title:"Created At",dataIndex:"created_at",render:e=>s()(e).tz("Asia/Jakarta").format("lll")}];return(0,h.jsx)(v.A,{className:"referral-table",children:(0,h.jsx)(I,{children:(0,h.jsx)(n.Spin,{spinning:!!k,children:(0,h.jsxs)(n.Row,{type:"flex",align:"middle",children:[(0,h.jsx)(n.Col,{sm:4,md:8,children:(0,h.jsx)("h3",{className:"heading",children:(0,h.jsx)("b",{children:"Document Generation Service"})})}),(0,h.jsx)(n.Col,{sm:20,md:16,children:(0,h.jsxs)("div",{className:"doc-wrapper",children:[(0,h.jsx)(n.Button,{onClick:()=>{le(!0),se(!0)},children:"HTML Preview"}),(0,h.jsx)(n.Button,{onClick:()=>W(!0),className:"button-text",children:"Add New Document"})]})}),(0,h.jsx)(n.Divider,{}),x&&Object.keys(x).map(((e,t)=>x[e]?(0,h.jsxs)(n.Tag,{className:"filter-tag",color:"blue",children:[x[e],(0,h.jsx)("span",{className:"remove-filter",onClick:t=>be(e),children:(0,h.jsx)(n.Icon,{type:"close",className:"close"})})]},t):"")),(0,h.jsx)(j,{dataSource:de,rowKey:e=>e.id,pagination:{pageSize:10,total:Number(null===T||void 0===T||null===(t=T.metadata)||void 0===t?void 0:t.total_records),onChange:e=>{pe(e)}},columns:ve}),(0,h.jsx)(N,{closeModal:()=>W(!1),isOpen:B,createDocumentRequest:_,CREATE_DOC_LOADER:!!O}),(0,h.jsx)(M,{closeModal:()=>he({},!1,re),viewOnly:re,setViewModal:ne,isOpen:Y,editDocumentRequest:w,LOADER:!!O&&!!$,dataValues:J}),(0,h.jsx)(U,{closeModal:()=>me("",!1,!0),isOpen:oe,htmlContent:Z,handleHtmlContentChange:e=>{ee(e)},htmlContentData:te,editDocumentRequest:w,LOADER:!!O&&!!$,onlyView:ie})]})})})})};const V=function(e){return(0,h.jsx)(x,{children:(0,h.jsx)(q,{...e})})}},21577:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(67816);const n=r.Table},95159:(e,t,a)=>{!function(e){"use strict";var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},a={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};e.defineMode("xml",(function(r,n){var o,l,i=r.indentUnit,s={},d=n.htmlMode?t:a;for(var c in d)s[c]=d[c];for(var c in n)s[c]=n[c];function p(e,t){function a(a){return t.tokenize=a,a(e,t)}var r=e.next();return"<"==r?e.eat("!")?e.eat("[")?e.match("CDATA[")?a(h("atom","]]>")):null:e.match("--")?a(h("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),a(f(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=h("meta","?>"),"meta"):(o=e.eat("/")?"closeTag":"openTag",t.tokenize=u,"tag bracket"):"&"==r?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function u(e,t){var a=e.next();if(">"==a||"/"==a&&e.eat(">"))return t.tokenize=p,o=">"==a?"endTag":"selfcloseTag","tag bracket";if("="==a)return o="equals",null;if("<"==a){t.tokenize=p,t.state=v,t.tagName=t.tagStart=null;var r=t.tokenize(e,t);return r?r+" tag error":"tag error"}return/[\'\"]/.test(a)?(t.tokenize=m(a),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function m(e){var t=function(t,a){for(;!t.eol();)if(t.next()==e){a.tokenize=u;break}return"string"};return t.isInAttribute=!0,t}function h(e,t){return function(a,r){for(;!a.eol();){if(a.match(t)){r.tokenize=p;break}a.next()}return e}}function f(e){return function(t,a){for(var r;null!=(r=t.next());){if("<"==r)return a.tokenize=f(e+1),a.tokenize(t,a);if(">"==r){if(1==e){a.tokenize=p;break}return a.tokenize=f(e-1),a.tokenize(t,a)}}return"meta"}}function x(e,t,a){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=a,(s.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function g(e){e.context&&(e.context=e.context.prev)}function b(e,t){for(var a;;){if(!e.context)return;if(a=e.context.tagName,!s.contextGrabbers.hasOwnProperty(a)||!s.contextGrabbers[a].hasOwnProperty(t))return;g(e)}}function v(e,t,a){return"openTag"==e?(a.tagStart=t.column(),y):"closeTag"==e?D:v}function y(e,t,a){return"word"==e?(a.tagName=t.current(),l="tag",E):s.allowMissingTagName&&"endTag"==e?(l="tag bracket",E(e,t,a)):(l="error",y)}function D(e,t,a){if("word"==e){var r=t.current();return a.context&&a.context.tagName!=r&&s.implicitlyClosed.hasOwnProperty(a.context.tagName)&&g(a),a.context&&a.context.tagName==r||!1===s.matchClosing?(l="tag",C):(l="tag error",T)}return s.allowMissingTagName&&"endTag"==e?(l="tag bracket",C(e,t,a)):(l="error",T)}function C(e,t,a){return"endTag"!=e?(l="error",C):(g(a),v)}function T(e,t,a){return l="error",C(e,t,a)}function E(e,t,a){if("word"==e)return l="attribute",_;if("endTag"==e||"selfcloseTag"==e){var r=a.tagName,n=a.tagStart;return a.tagName=a.tagStart=null,"selfcloseTag"==e||s.autoSelfClosers.hasOwnProperty(r)?b(a,r):(b(a,r),a.context=new x(a,r,n==a.indented)),v}return l="error",E}function _(e,t,a){return"equals"==e?w:(s.allowMissing||(l="error"),E(e,t,a))}function w(e,t,a){return"string"==e?k:"word"==e&&s.allowUnquoted?(l="string",E):(l="error",E(e,t,a))}function k(e,t,a){return"string"==e?k:E(e,t,a)}return p.isInText=!0,{startState:function(e){var t={tokenize:p,state:v,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;o=null;var a=t.tokenize(e,t);return(a||o)&&"comment"!=a&&(l=null,t.state=t.state(o||a,e,t),l&&(a="error"==l?a+" error":l)),a},indent:function(t,a,r){var n=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+i;if(n&&n.noIndent)return e.Pass;if(t.tokenize!=u&&t.tokenize!=p)return r?r.match(/^(\s*)/)[0].length:0;if(t.tagName)return!1!==s.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+i*(s.multilineTagIndentFactor||1);if(s.alignCDATA&&/<!\[CDATA\[/.test(a))return 0;var o=a&&/^<(\/)?([\w_:\.-]*)/.exec(a);if(o&&o[1])for(;n;){if(n.tagName==o[2]){n=n.prev;break}if(!s.implicitlyClosed.hasOwnProperty(n.tagName))break;n=n.prev}else if(o)for(;n;){var l=s.contextGrabbers[n.tagName];if(!l||!l.hasOwnProperty(o[2]))break;n=n.prev}for(;n&&n.prev&&!n.startOfLine;)n=n.prev;return n?n.indent+i:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(e){e.state==w&&(e.state=E)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],a=e.context;a;a=a.prev)t.push(a.tagName);return t.reverse()}}})),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})}(a(26246))},36690:()=>{},65305:()=>{}}]);
//# sourceMappingURL=1429.5bf2d2bc.chunk.js.map