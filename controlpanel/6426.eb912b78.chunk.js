"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6426],{56426:(t,e,a)=>{a.r(e),a.d(e,{default:()=>_});var r=a(1502),o=a.n(r),n=a(84029),l=a(55347),i=a(24952),s=a(38094),d=a.n(s),p=a(17823),c=a.n(p),h=a(67816),g=a(79209),u=a(25211),b=a(93807),x=a(21577),m=a(80878),f=a.n(m),y=a(34618),$=a(67050),S=a(93317);const w=f().div`
  .header-row {
    margin-bottom: 8px;
  }
  .header {
    font-weight: 600;
    font-size: 16px;
  }
  .button {
    border-radius: 2px;
  }
`,k=(f().div`
  .ant-table td, th { white-space: nowrap; }
`,f()(x.A)`
.ant-table td, th { white-space: nowrap; }
  .isoTableSearchBox {
    padding: 20px;
  }
.ant-table-thead > tr:first-child > th:first-child {
  border-top-left-radius: 0;
}
    .ant-table td, th { white-space: nowrap; }
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,y.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,y.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,y.palette)("secondary",1)};
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
    color: ${(0,y.palette)("text",3)};
    border-bottom: 1px solid ${(0,y.palette)("border",0)};

    a {
      color: ${(0,y.palette)("primary",0)};
      ${(0,$.kY)()};

      &:hover {
        color: ${(0,y.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,y.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,y.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${t=>"rtl"===t["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,y.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,y.palette)("border",0)};

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
      border-color: ${(0,y.palette)("primary",0)};
      ${(0,$.kY)()};
    }

    &:hover a {
      color: ${(0,y.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,y.palette)("primary",0)};
    border-color: ${(0,y.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,y.palette)("grayscale",6)};

    p {
      color: ${(0,y.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,y.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,y.palette)("secondary",1)};
    color: ${(0,y.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,$.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,y.palette)("secondary",1)};
    color: ${(0,y.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,$.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,y.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,y.palette)("border",0)};
      ${(0,$.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,y.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,y.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,$.Vq)("3px 0 0 3px")};
        ${(0,$.kY)()};
        ${(0,$.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,y.palette)("secondary",7)};
          ${(0,$.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,y.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,y.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,y.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,y.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,y.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${t=>"rtl"===t["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,$.kY)()};

        &:hover {
          background-color: ${(0,y.palette)("primary",1)};
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
        border: 1px solid ${(0,y.palette)("border",0)};
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
              solid ${(0,y.palette)("border",0)};
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
          border-right: 1px solid ${(0,y.palette)("border",0)};

          &:first-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"0":"1px"}
              solid ${(0,y.palette)("border",0)};
          }

          &:last-child {
            border-left: ${t=>"rtl"===t["data-rtl"]?"1px":"0"}
              solid ${(0,y.palette)("border",0)};
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
          color: ${(0,y.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,y.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,$.Vq)("3px")};
          ${(0,$.MS)()};
          ${(0,$.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,y.palette)("border",0)};
            ${(0,$.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,y.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,y.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,y.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,y.palette)("grayscale",0)};
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
`),C=f().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${t=>"rtl"===t["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,y.palette)("secondary",2)};

        &:after {
          margin: ${t=>"rtl"===t["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,y.palette)("primary",0)};
      background-color: ${(0,y.palette)("primary",0)};
    }
  }
`,v=((0,S.A)(C),(0,S.A)(k));var R=a(70579);const P=h.Select.Option,{getReconList:L,resetReduxStateRecon:A}=g.A,{getPartners:j,getProducts:T}=u.A;class I extends o().Component{constructor(){var t;super(...arguments),t=this,this.state={searchTextQuery:{},isChange:!1,isClear:!1,showCreateRecon:!1,searchParams:{}},this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:{limit:50,page:1}};const{location:a,history:r}=t.props,{querySearch:o}=t.state,{query:n={}}=e,{page:l=1,limit:i=50}=n,s=Number(l),d=Number(i),p={page:s,limit:d,...e.query},c=(0,b.A)(p);r.push({pathname:a.pathname,search:c}),t.setState({page:s,limit:d,querySearch:{...o,...p}},(()=>t.props.getReconList({query:p})))},this.onSearch=t=>{t.preventDefault();const{searchTextQuery:e}=this.state,{location:a,history:r}=this.props,o={...e},n=(0,b.A)(o);r.push({pathname:a.pathname,search:n}),Object.values(e).length>0&&(this.setState({filterPartner:!1,searchTextQuery:o}),this.props.filter(o))},this.onInputChange=(t,e)=>{this.setState({searchTextQuery:{[e]:t.target.value},isChange:!0})},this.detail=t=>{const{history:e,location:a}=this.props;e.push(`${a.pathname}/${t}`)},this.showCreateRecon=()=>{this.setState((t=>({showCreateRecon:!t.showCreateRecon})))},this.handleTableChange=t=>{const{querySearch:e}=this.state,{pageSize:a,current:r}=t,o={...e,page:r,limit:a};this.fetch({query:o})},this.handleClearFilter=()=>{this.setState({querySearch:{}}),this.fetch()},this.handleSearch=(t,e)=>{const{location:a,history:r}=this.props,{querySearch:o}=this.state,n=new URLSearchParams(a);delete n.limit,delete n.offset,n[e]=t,n.page=1,n.limit=50,this.setState({querySearch:{...o,[e]:t[0]}});const l=(0,b.A)(n);r.push({pathname:a.pathname,search:l}),this.props.getReconList({query:n})},this.renderSearch=(t,e,a,r)=>{const{products:o,productsLoading:n}=this.props,l={width:200,display:"block",marginBottom:5};return"date"===t?(0,R.jsx)(h.DatePicker,{format:"YYYY-MM-DD",placeholder:`Search ${e}`,onPressEnter:()=>this.handleSearch(r,e),onChange:(t,e)=>a(e?[e]:[])}):"select-product"===t?(0,R.jsx)(h.Select,{placeholder:"Product",showSearch:!0,dropdownMatchSelectWidth:!1,style:l,onSelect:this.onSelectProduct,onPressEnter:()=>this.handleSearch(r,e),onChange:t=>a(t),filterOption:(t,e)=>e.props.children.toLowerCase().indexOf(t.toLowerCase())>=0,loading:!!n,disabled:!!n,children:o.map((t=>{let{id:e,display_name:a}=t;return(0,R.jsx)(P,{value:e,children:a},a)}))}):(0,R.jsx)(h.Input,{ref:t=>{this.searchInput=t},placeholder:`Search ${e}`,value:r[0],onChange:t=>a(t.target.value?[t.target.value]:[]),onPressEnter:()=>this.handleSearch(r,e),style:{width:188,marginBottom:8,display:"block"}})},this.getColumnSearchProps=(t,e)=>({filterDropdown:a=>{let{setSelectedKeys:r,selectedKeys:o}=a;return(0,R.jsxs)("div",{style:{padding:8},children:[this.renderSearch(e,t,r,o),(0,R.jsx)(h.Button,{type:"primary",onClick:()=>this.handleSearch(o,t),icon:"search",size:"small",style:{width:90,marginRight:8},children:"Search"})]})},filterIcon:t=>(0,R.jsx)(h.Icon,{type:"search",style:{color:t?"#1890ff":void 0}}),onFilter:(e,a)=>a[t].toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:t=>{t&&setTimeout((()=>this.searchInput.select()))}})}componentDidMount(){this.props.getPartners(),this.props.getProducts();const t=d().parse(this.props.location.search);this.setState({searchParams:t}),Object.keys(t).length>0?this.fetch({query:t}):this.fetch()}UNSAFE_componentWillReceiveProps(t){const{getAutoReconListLoading:e,getAutoReconListError:a,getAutoReconListMessage:r}=t;!e&&a&&r&&(h.notification.error({title:"Error",message:r}),this.props.resetReduxStateRecon(["getAutoReconListMessage"]))}render(){const{reconData:t,reconMetadata:e,getAutoReconListLoading:a}=this.props,{page:r,limit:o}=this.state,n=[{title:"Action",dataIndex:"name",key:"action",render:(t,e)=>(0,R.jsx)("span",{className:"anchor",onClick:()=>this.detail(e.id),children:"View"})},{dataIndex:"name",key:"name",title:"Recon Name",...this.getColumnSearchProps("name","string")},{title:"Partner",dataIndex:"partner",key:"partner",...this.getColumnSearchProps("partner","string")},{title:"Product",key:"product",render:t=>{let{display_name:e,product:a}=t;return e||a},...this.getColumnSearchProps("product","select-product")},{title:"Package",dataIndex:"package",key:"package",...this.getColumnSearchProps("package","string")},{title:"Created At",dataIndex:"created_at",render:t=>c()(t).tz("Asia/Jakarta").format("lll"),key:"created_at"},{title:"From Date",dataIndex:"from_date",key:"from_date",...this.getColumnSearchProps("from_date","date")},{title:"To Date",dataIndex:"to_date",key:"to_date",...this.getColumnSearchProps("to_date","date")},{title:"Status",dataIndex:"status",key:"status"},{title:"Remarks",dataIndex:"remarks",key:"remarks"},{title:"Source",dataIndex:"source",key:"source"},{title:"Created by",dataIndex:"uploaded_by",key:"uploaded_by"}];return(0,R.jsxs)(w,{children:[(0,R.jsxs)(h.Row,{type:"flex",justify:"space-between",className:"header-row",children:[(0,R.jsx)("div",{className:"header",children:"Recon List"}),(0,R.jsx)(h.Button,{icon:"delete",onClick:this.handleClearFilter,children:"Clear Filter"})]}),(0,R.jsx)(h.Row,{children:(0,R.jsx)(v,{columns:n,bordered:!0,loading:!!a,dataSource:t,rowKey:t=>t.id,onChange:this.handleTableChange,pagination:{pageSize:o,total:e.total,current:r}})})]})}}I.defaultProps={reconData:[],reconMetadata:{},partners:[]};const E=(0,i.connect)((t=>({reconData:t.Recon.data,reconMetadata:t.Recon.reconMetadata,products:t.Policy.products,productsLoading:t.Loading.GET_PRODUCTS,productsError:t.Error.GET_PRODUCTS,partners:t.Policy.partners,gerAutoReconListMessage:t.Recon.gerAutoReconListMessage,getAutoReconListLoading:t.Loading.GET_AUTO_RECON_LIST,getAutoReconListError:t.Error.GET_AUTO_RECON_LIST})),{getProducts:T,getPartners:j,getReconList:L,resetReduxStateRecon:A})(I);class _ extends o().Component{render(){return(0,R.jsx)(l.A,{children:(0,R.jsx)(n.A,{children:(0,R.jsx)(E,{...this.props})})})}}},21577:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=6426.eb912b78.chunk.js.map