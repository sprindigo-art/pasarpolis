"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6377],{36377:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var o=a(1502),l=a(24952),r=a(67816),n=a(55611),i=a(94528),d=a(84029),p=a(80878);const s=a.n(p)().div`
  padding: 40px 20px;
`;var c=a(95916),x=a(62451),u=a(25211),g=a(77980),b=a(86178),h=a.n(b),f=a(70579);const{getPolicyExcelsList:m,uploadPolicyExcels:y,resetAgentRedux:$}=x.A,{uploadPolicyFile:w,resetReduxState:k}=u.A;class v extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={page:1},this.handleTableChange=t=>{const{pageSize:e,current:a}=t,o={page:a,page_size:e};this.setState({page:a},(()=>{this.fetchPolicyExcelsList(o)}))},this.fetchPolicyExcelsList=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.props.getPolicyExcelsList({page:t.state.page,page_size:10,...e})},this.extraDetailDocumentUpload=t=>{let{file:e}=t;const a=new FormData,[o,l]=e.name?e.name.split("."):[""],r=`${o.replace(/[' ']/g,"-")}-${Date.now()}`;a.append("file",e,`${r}.${l}`),a.append("path",`insurance-policy-certificate-control-panel/${r}`),a.append("identifier","agent"),this.props.uploadPolicyFile({body:a})},this.getColumns=()=>[{key:"name",title:"File Name",dataIndex:"file_name",align:"center"},{key:"uploaded_by",title:"Uploaded By",dataIndex:"uploaded_by",align:"center"},{key:"date",title:"Date",dataIndex:"created_at",render:t=>h()(t).format("YYYY-MM-DD"),align:"center"},{key:"status",title:"Status",dataIndex:"status",align:"center"},{key:"download",title:"Download",dataIndex:"uploaded_url",align:"center",render:(t,e)=>(0,f.jsxs)(r.Row,{type:"flex",align:"middle",justify:"space-around",children:[(0,f.jsx)(r.Col,{children:(0,f.jsxs)(r.Button,{type:"link",href:e.uploaded_url,children:[(0,f.jsx)(r.Icon,{type:"cloud-download"}),"\xa0\xa0All"]})}),e.failed_doc_url&&(0,f.jsx)(r.Col,{children:(0,f.jsxs)(r.Button,{type:"link",href:e.failed_doc_url,children:[(0,f.jsx)(r.Icon,{type:"cloud-download"}),"\xa0\xa0Failed"]})})]})}]}componentDidMount(){this.fetchPolicyExcelsList()}componentDidUpdate(){const{uploadPolicyFileData:t={},resetReduxState:e,extraCommissionUploadFileStatus:a,resetAgentRedux:o}=this.props;(0,c.get)(t,"url","")&&(this.props.uploadPolicyExcels({file_url:(0,c.get)(t,"url","")}),e(["uploadPolicyFileData"])),"success"===a?((0,g.D)("success","File Uploaded successfully!"),this.fetchPolicyExcelsList(),o(["extraCommissionUploadFileStatus"])):a&&((0,g.D)("error","Sorry, We are facing some issue. Please tey again!"),o(["extraCommissionUploadFileStatus"]))}render(){const{excelUploadLoader:t,policyExcelsData:e,policyExcelListLoader:a,uploadGenericLoader:o}=this.props,{page:l}=this.state;return(0,f.jsx)(i.A,{isSpining:a||t||o,children:(0,f.jsx)(s,{children:(0,f.jsxs)(d.A,{children:[(0,f.jsx)("h3",{children:"Add Extra Payment Data"}),(0,f.jsxs)(r.Row,{type:"flex",align:"middle",justify:"center",children:[(0,f.jsx)(r.Col,{sm:8,xm:8,xl:5,children:(0,f.jsx)(r.Upload,{showUploadList:!1,accept:".xlsx,.xls",customRequest:t=>this.extraDetailDocumentUpload(t),children:(0,f.jsxs)(r.Button,{children:[(0,f.jsx)(r.Icon,{type:"cloud-upload"}),"\xa0\xa0Upload The Excel"]})})}),(0,f.jsx)(r.Col,{sm:8,xm:8,xl:5,children:(0,f.jsxs)(r.Button,{href:e.sample_doc_url,children:[(0,f.jsx)(r.Icon,{type:"cloud-download"}),"\xa0\xa0Download Sample Excel"]})})]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)(n.A,{columns:this.getColumns(),bordered:!0,rowKey:t=>t.id,dataSource:(0,c.get)(e,"data",[]),pagination:{pageSize:10,total:(0,c.get)(e,"meta_data.total_records",0),current:l},loading:a,onChange:this.handleTableChange,className:"isoSearchableTable agent-table-data"})]})})})}}const D=(0,l.connect)((t=>({excelUploadLoader:t.Loading.UPLOAD_POLICY_EXCELS,uploadGenericLoader:t.Loading.UPLOAD_FILE,uploadPolicyFileStatus:t.Insurance.uploadPolicyFileStatus,uploadPolicyFileData:t.Insurance.uploadPolicyFileData,policyExcelListLoader:t.Loading.GET_POLICY_EXCELS_LIST,policyExcelsData:t.Agent.policyExcelsData,policyExcelsMetaData:t.Agent.policyExcelsMetaData,policyExcelsStatus:t.Agent.policyExcelsStatus,extraCommissionUploadFileData:t.Agent.extraCommissionUploadFileData,extraCommissionUploadFileStatus:t.Agent.extraCommissionUploadFileStatus})),{getPolicyExcelsList:m,resetReduxState:k,resetAgentRedux:$,uploadPolicyExcels:y,uploadPolicyFile:w})(v)},55611:(t,e,a)=>{a.d(e,{A:()=>c});var o=a(21577),l=a(80878),r=a.n(l),n=a(34618),i=a(67050),d=a(93317);const p=r()(o.A)`
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
    display: block;
    float: ${t=>"rtl"===t["data-rtl"]?"left":"right"};
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

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,n.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,n.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
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
`,s=r().div`
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
`,c=((0,d.A)(s),(0,d.A)(p))},77980:(t,e,a)=>{a.d(e,{D:()=>l});var o=a(67816);const l=function(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";o.notification[t]({message:e,description:a||""})}},21577:(t,e,a)=>{a.d(e,{A:()=>l});var o=a(67816);const l=o.Table}}]);
//# sourceMappingURL=6377.77342643.chunk.js.map