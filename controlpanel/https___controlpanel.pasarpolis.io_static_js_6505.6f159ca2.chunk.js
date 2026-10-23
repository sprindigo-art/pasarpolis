"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6505],{48886:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var r=a(1502),o=a(24952),l=a(79471),n=a(21577),i=a(80878),p=a.n(i),d=a(34618),s=a(67050),c=a(93317);const b=p()(n.A)`
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
    color: ${(0,d.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,d.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,d.palette)("secondary",1)};
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
    color: ${(0,d.palette)("text",3)};
    border-bottom: 1px solid ${(0,d.palette)("border",0)};

    a {
      color: ${(0,d.palette)("primary",0)};
      ${(0,s.kY)()};

      &:hover {
        color: ${(0,d.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,d.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,d.palette)("border",0)};
  }

  .ant-table-pagination {
    display: block;
    float: ${t=>"rtl"===t["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,d.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,d.palette)("border",0)};

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
      border-color: ${(0,d.palette)("primary",0)};
      ${(0,s.kY)()};
    }

    &:hover a {
      color: ${(0,d.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,d.palette)("primary",0)};
    border-color: ${(0,d.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,d.palette)("grayscale",6)};

    p {
      color: ${(0,d.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,d.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,d.palette)("secondary",1)};
    color: ${(0,d.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,s.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,d.palette)("secondary",1)};
    color: ${(0,d.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,s.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,d.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,d.palette)("border",0)};
      ${(0,s.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,d.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,d.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,s.Vq)("3px 0 0 3px")};
        ${(0,s.kY)()};
        ${(0,s.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,d.palette)("secondary",7)};
          ${(0,s.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,d.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,d.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,d.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,d.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,d.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${t=>"rtl"===t["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,s.kY)()};

        &:hover {
          background-color: ${(0,d.palette)("primary",1)};
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
        border: 1px solid ${(0,d.palette)("border",0)};
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
              solid ${(0,d.palette)("border",0)};
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
          border-right: 1px solid ${(0,d.palette)("border",0)};

          &:first-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"0":"1px"}
              solid ${(0,d.palette)("border",0)};
          }

          &:last-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"1px":"0"}
              solid ${(0,d.palette)("border",0)};
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
          color: ${(0,d.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,d.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,s.Vq)("3px")};
          ${(0,s.MS)()};
          ${(0,s.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,d.palette)("border",0)};
            ${(0,s.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,d.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,d.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,d.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,d.palette)("grayscale",0)};
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
`,g=p().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,d.palette)("secondary",2)};

        &:after {
          margin: ${t=>"rtl"===t["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,d.palette)("primary",0)};
      background-color: ${(0,d.palette)("primary",0)};
    }
  }
`,h=((0,c.A)(g),(0,c.A)(b));var x=a(89858),f=a(84029),u=a(55347),m=a(29331),$=a(67816),y=a(70579);const{getApprovalList:v}=m.A;class k extends r.Component{constructor(t){var e;super(t),this.detailPage=t=>{this.props.history.push({pathname:`approval-list/${t}`})},this.getColumnApprovalList=()=>[{key:"Action",title:"Action",dataIndex:"reference_id",align:"center",render:t=>(0,y.jsx)("i",{className:"far fa-eye",onClick:()=>this.detailPage(t)})},{key:"reference_id",title:"Reference ID",dataIndex:"reference_id",align:"center",sorter:!0,sortDirections:["descend"]},{key:"quote_id",title:"Quote ID",dataIndex:"quote_id",align:"center",sorter:!0,sortDirections:["descend"]},{key:"created_at",title:"Created At",dataIndex:"created_at",align:"center",sorter:!0,sortDirections:["descend"]},{key:"package_code",title:"Package Code",dataIndex:"package_code",align:"center",sorter:!0,sortDirections:["descend"]},{key:"status",title:"Status",dataIndex:"status",align:"center",sorter:!0,sortDirections:["descend"]},{key:"policy_status",title:"Policy Status",dataIndex:"policy_status",align:"center",sorter:!0,sortDirections:["descend"]},{key:"customer_phone_no",title:"Customer Phone",dataIndex:"customer_phone_no",align:"center",sorter:!0,sortDirections:["descend"]},{key:"customer_email",title:"Customer Email",dataIndex:"customer_email",align:"center",sorter:!0,sortDirections:["descend"]}],this.state={currentPage:(null===(e=this.props.approvalListMetaData)||void 0===e?void 0:e.currentPage)||1}}componentDidMount(){console.log("approvalList:",this.props.approvalListData),this.props.getApprovalList({})}render(){const t=this.getColumnApprovalList();return(0,y.jsx)(x.A,{children:(0,y.jsx)(u.A,{className:"referral-table",style:{color:"#788195"},children:(0,y.jsxs)(f.A,{children:[(0,y.jsx)($.Row,{style:{marginBottom:"10px"},children:(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"policy-heading",children:"Approval List"}),(0,y.jsx)("p",{className:"policy-count",children:Number(this.props.approvalListMetaData.totalItems||0)})]})}),(0,y.jsx)(h,{bordered:!0,className:"isoSearchableTable",columns:t,pagination:{pageSize:this.props.approvalListMetaData.page_size,total:this.props.approvalListMetaData.totalPages,current:this.state.currentPage},rowKey:t=>t.reference_id,dataSource:this.props.approvalListData||[]})]})})})}}const w=(0,o.connect)((t=>(console.log("state",t),{approvalListData:t.approvalListAuto.approvalListData,approvalListMessage:t.approvalListAuto.approvalListMessage,approvalListMetaData:t.approvalListAuto.approvalListMetaData})),{getApprovalList:v})((0,l.withRouter)(k))},21577:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=6505.6f159ca2.chunk.js.map