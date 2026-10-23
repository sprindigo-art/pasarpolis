"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[9196],{19196:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var r=a(1502),i=a.n(r),o=a(24952),n=a(67816),s=a(84029),l=a(55347),d=a(98479),c=a(21577),p=a(80878),h=a.n(p),u=a(34618),f=a(67050),m=a(93317);const x=h()(c.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .table-data {
    width: 100%;
  }

  .ant-table-thead > tr > th {
    color: ${(0,u.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,u.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,u.palette)("secondary",1)};
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
    color: ${(0,u.palette)("text",3)};
    border-bottom: 1px solid ${(0,u.palette)("border",0)};

    a {
      color: ${(0,u.palette)("primary",0)};
      ${(0,f.kY)()};

      &:hover {
        color: ${(0,u.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,u.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,u.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,u.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,u.palette)("border",0)};

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
      border-color: ${(0,u.palette)("primary",0)};
      ${(0,f.kY)()};
    }

    &:hover a {
      color: ${(0,u.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,u.palette)("primary",0)};
    border-color: ${(0,u.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,u.palette)("grayscale",6)};

    p {
      color: ${(0,u.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,u.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,u.palette)("secondary",1)};
    color: ${(0,u.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,f.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,u.palette)("secondary",1)};
    color: ${(0,u.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,f.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,u.palette)("primary",0)};
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
      border: 1px solid ${(0,u.palette)("border",0)}
    }

    input {
      font-size: 14px;
      font-weight: 400;
      color: ${(0,u.palette)("text",3)};
      line-height: inherit;
      height: 36px;
      width: 100%;
      padding: 0 15px;
      margin: 0;
      border: 1px solid ${(0,u.palette)("secondary",7)};
      outline: 0 !important;
      overflow: hidden;
      background-color: #ffffff;
      ${(0,f.Vq)("3px 0 0 3px")};
      ${(0,f.kY)()};
      ${(0,f.MS)("none")};

      &:focus,
      &:hover {
        border-color: ${(0,u.palette)("secondary",7)};
        ${(0,f.MS)("none")};
      }

      &::-webkit-input-placeholder {
        color: ${(0,u.palette)("grayscale",0)};
      }

      &:-moz-placeholder {
        color: ${(0,u.palette)("grayscale",0)};
      }

      &::-moz-placeholder {
        color: ${(0,u.palette)("grayscale",0)};
      }
      &:-ms-input-placeholder {
        color: ${(0,u.palette)("grayscale",0)};
      }
    }

    button {
      font-size: 12px;
      font-weight: 400;
      padding: 0;
      text-transform: uppercase;
      color: #ffffff;
      background-color: ${(0,u.palette)("primary",0)};
      border: 0;
      outline: 0;
      height: 36px;
      padding: 0 15px;
      margin-left: -1px;
      cursor: pointer;
      border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
      ${(0,f.kY)()};

      &:hover {
        background-color: ${(0,u.palette)("primary",1)};
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
        border: 1px solid ${(0,u.palette)("border",0)};
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
              solid ${(0,u.palette)("border",0)};
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
          border-right: 1px solid ${(0,u.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,u.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,u.palette)("border",0)};
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
          color: ${(0,u.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,u.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,f.Vq)("3px")};
          ${(0,f.MS)()};
          ${(0,f.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,u.palette)("border",0)};
            ${(0,f.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,u.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,u.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,u.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,u.palette)("grayscale",0)};
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
`,y=h().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,u.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,u.palette)("primary",0)};
      background-color: ${(0,u.palette)("primary",0)};
    }
  }
`,g=((0,m.A)(y),(0,m.A)(x));var b=a(25211),D=a(36934),I=a(17823),S=a.n(I),C=a(17634),N=a.n(C),v=a(89858),P=a(8624),j=a(38094),_=a.n(j),w=a(93807),$=a(70579);const{getInsuranceData:k,getInsuranceCountData:A,resetReduxState:E,querySearch:T,sendReport:L,resetDownloadStatus:F,uploadUpdatePolicyNumberFile:R,getMasterListData:M,sendReportRange:V}=b.A;class q extends i().Component{constructor(e){var t;super(e),t=this,this.handleTableChange=(e,t,a)=>{const{searchTextQuery:r}=this.state,{history:i,location:o}=this.props,{pageSize:n,current:s}=e,l=n*(s-1),d=a.field,c=d?{InternalID:"internal_ID",ProductKey:"product_Key",ApplicationNo:"application_No",InsurancePolicyNo:"insurance_Policy_No",Partner:"partner",Name:"name",MobileNo:"mobile_No",Email:"email",CouponCode:"coupon_Code",CreatedAt:"created_At"}[d]:"",p=c?{orderBy:c}:{},h={..._().parse(o.search),...r,offset:l,limit:n,...p},u=(0,w.A)(h);this.setState({pagination:e,offset:l,limit:n},(()=>{i.push({pathname:o.pathname,search:u}),this.fetch({...h,offset:l,limit:n})}))},this.onSearch=(e,t)=>{"string"!==typeof e&&e.preventDefault();const{searchTextQuery:a}=this.state;"partner"===t&&delete a.partnerproduct_id;const{location:r,history:i}=this.props,o=(0,w.A)(a);i.push({pathname:r.pathname,search:o}),Object.values(a).length>0&&(this.setState({filterInternalID:!1,filterApplicationNo:!1,filterProductKey:!1,filterInsurancePolicyNo:!1,filterPartner:!1,filterProduct:!1,filterPolicyState:!1,filterPaymentStatus:!1,filterCreatedAt:!1,filterPhoneNo:!1,filterEmail:!1,filterProvider:!1,filterPackageCode:!1,searchTextQuery:a}),this.fetch(a))},this.validate=(e,t)=>{if("mobileNo"===t&&e){return!/^\d{2}-\d{1,}/.test(e)}return!1},this.onInputChange=(e,t)=>{const{searchTextQuery:a}=this.state;this.setState({searchTextQuery:{...a,[t]:e.target.value},isChange:!0})},this.onInputProductChange=(e,t)=>{const{searchTextQuery:a}=this.state;this.setState({searchTextQuery:{...a,[t]:e},isChange:!0})},this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{offset:a,limit:r,orderBy:i,startDate:o,endDate:n,policyState:s}=e,l=Number(a)||0,d=Number(r)||10;delete e.offset,delete e.limit,t.setState({searchText:"",policyFilter:{...e},orderIdentifier:i,limit:d,offset:l}),t.props.getMasterListData({...e,orderBy:i,limit:d,offset:l,startDate:o,endDate:n,policyState:s}),t.props.getInsuranceCountData({...e,orderBy:i,limit:d,offset:l,startDate:o,endDate:n,policyState:s}),t.props.getInsuranceData({...e,orderBy:i,limit:d,offset:l,startDate:o,endDate:n,policyState:s})},this.resetFilter=()=>{const{history:e,location:t}=this.props;this.setState({searchText:"",orderIdentifier:"",startDate:"",endDate:"",policyFilter:{},clearDate:!0,searchTextQuery:{}},(()=>{e.push(t.pathname),this.resetReduxState(),this.fetch()}))},this.resetReduxState=()=>{this.props.resetReduxState()},this.downloadExcel=(e,t)=>{const{startDate:a,endDate:r}=e,{userEmail:i,searchTextQuery:o}=this.state;let n;if("today"!==t){let e=a||o.createdatStart,t=r||o.createdatEnd;e=`${S()(e).format("YYYY-MM-DD")} 00:00:00`,t=`${S()(t).format("YYYY-MM-DD")} 23:59:00`,n={...o},n.createdatStart=e,n.createdatEnd=t,this.props.sendReportRange({email:i,filter:n}),this.setState({isModalVisible:!1}),N()({type:"success",title:"",text:"success"})}else{const e=S()(new Date).format("YYYY-MM-DD"),t=`${e} 00:00:00`,a=`${e} 23:59:00`;n={...o},n={...n,createdatStart:t.toString(),createdatEnd:a.toString()},N()({title:"Report will send to your email ",input:"email",inputValue:i,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:e=>{this.props.sendReport({email:e,filter:n})},allowOutsideClick:()=>!1}).then((e=>{"cancel"!==e.dismiss&&N()({type:"success",title:"",text:"success"})}))}},this.customRequest=e=>{let{file:t}=e;const{type:a}=t;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===a){const e=new FormData;e.append("file",t),this.props.uploadUpdatePolicyNumberFile({body:e})}else n.message.error("Incorrect file type, please upload only .xlsx")},this.removeFilter=e=>{const{searchTextQuery:t,policyFilter:a}=this.state,{history:r,location:i}=this.props;"createdatEnd"===e||"createdatStart"===e?this.setState({clearDate:!0}):"partner"===e?(delete t[e],delete t.partnerproduct_id):"partnerproduct_id"===e?(delete t[e],delete t.packageCodes):(delete t[e],delete a[e]),this.setState({searchTextQuery:t,policyFilter:a});const o=(0,w.A)(t);r.push({pathname:i.pathname,search:o}),this.fetch(t)},this.getProductNameFromKey=e=>{const{products:t}=this.props;if(t&&t.length>0){return t.find((t=>parseInt(t.id)===parseInt(e))).display_name}},this.getFilterTag=(e,t)=>Object.keys(e).map(((t,a)=>(0,$.jsx)(n.Tag,{className:"top-filter",color:"purple",closable:"closable",onClose:()=>this.removeFilter(t),children:"partnerproduct_id"===t?this.getProductNameFromKey(e[t]):e[t]},t))),this.state={data:[],pagination:{},filterInternalID:!1,filterReferenceID:!1,searchText:"",filtered:!1,offset:0,orderIdentifier:"",failedMessage:"",products:[],partners:[],endDate:"",startDate:"",searchTextQuery:{},policyFilter:{},submitDate:!1,permissions:[],isChange:!1,userEmail:"",userTimeZone:"",isModalVisible:!1}}componentDidMount(){const{search:e,state:t}=this.props.location;let a={};if(t&&t.state)a={...e,...t.state,...t.filters},this.fetch(a);else{const t=_().parse(e);this.fetch(t)}}componentWillUnmount(){this.resetReduxState();const{location:e}=this.props;e.search=""}UNSAFE_componentWillReceiveProps(e){const{profileData:t,uploadUpdatePolicyNumberFileLoading:a,uploadUpdatePolicyNumberFileError:r,uploadUpdatePolicyNumberFileMessage:i}=e;!a&&i&&(n.notification[r?"error":"success"]({message:r?"Error":"disimpan",description:r?i:""}),this.props.resetReduxState(["uploadUpdatePolicyNumberFileMessage"])),this.setState({userEmail:t.email})}onSearchDate(e,t){const{location:a,history:r}=this.props,{startDate:i,endDate:o}=e,n=`${i}`,s=`${o}`,l={PolicyStart:"startedat",CreatedAt:"createdat"}[t]||t,{searchTextQuery:d}=this.state,c={},p={submitDate:!0};p[`filter${t}`]=!1,i&&(c[`${l}Start`]=n),o&&(c[`${l}End`]=s),this.setState({...c,...p});const h={..._().parse(a.search),...d,...c,offset:0,limit:10},u=(0,w.A)(h);r.push({pathname:a.pathname,search:u}),this.setState({searchTextQuery:h},(()=>{this.fetch(h)}))}detailPage(e,t){const{push:a}=this.props.history,{policyFilter:r}=this.state;a({pathname:`/policy/${e}`,state:{ApplicationNo:t.ApplicationNo,filters:{...r}}})}hasRequiredPermission(e){const{permissions:t}=this.props;return t.find((t=>t===e))}render(){const{policyListLoading:e,policyListError:t,policyListData:a,policyListMetaData:r={},products:i,profileData:o,policyFailedMessage:c,masterListData:p}=this.props,{offset:h,limit:u,searchTextQuery:f,policyFilter:m,isChange:x,filterInternalID:y,filterProduct:b,filterApplicationNo:I,filterInsurancePolicyNo:C,filterProvider:N,filterPackageCode:j,filterPartner:_,filterPhoneNo:w,filterEmail:k,filterPolicyState:A,filterPaymentStatus:E,clearDate:T,filterCreatedAt:L,filterReferenceID:F}=this.state,{package_code_list:R,provider_code_list:M,partner_code_list:V,partner_product_details:q}=p,{total_records:Y=0}=r,U=o.user_timezone||"UTC",B=[{key:"Action",title:"Action",dataIndex:"InternalID",render:(e,t)=>(0,$.jsx)(P.A,{requiredPermission:"ops.view_policy_detail",children:(0,$.jsx)("i",{id:"view_policy_detail",className:"far fa-eye pointer",onClick:()=>this.detailPage(e,t)})}),align:"center"},{key:"internal_ID",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Internal id"})}),dataIndex:"InternalID",filterDropdown:(0,$.jsx)(d.ZY,{idIdentifier:"internalID",searchText:x?null===f||void 0===f?void 0:f.internalID:null===m||void 0===m?void 0:m.internalID,onInputChange:e=>this.onInputChange(e,"internalID"),onSearch:e=>this.onSearch(e,"internalID")}),filterIcon:this.hasRequiredPermission("ops.policy_internal_id_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(null!==m&&void 0!==m&&m.internalID?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:y,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterInternalID:e})},{key:"unique_Key",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Reference ID"})}),dataIndex:"UniqueKey",filterDropdown:(0,$.jsx)(d.ZY,{idIdentifier:"unique_keys",searchText:x?null===f||void 0===f?void 0:f.unique_keys:null===m||void 0===m?void 0:m.unique_keys,onInputChange:e=>this.onInputChange(e,"unique_keys"),onSearch:e=>this.onSearch(e,"unique_keys")}),filterIcon:this.hasRequiredPermission("ops.policy_internal_id_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(null!==m&&void 0!==m&&m.unique_keys?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:F,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterReferenceID:e})},{key:"Partner",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Partner"})}),dataIndex:"Partner",filterDropdown:(0,$.jsx)(d.C0,{placeholder:"Select Partner",idIdentifier:"partner",searchText:x?null===f||void 0===f?void 0:f.partner:null===m||void 0===m?void 0:m.partner,onInputChange:e=>this.onInputProductChange(e,"partner"),onSearch:e=>this.onSearch(e,"partner"),enableButton:f&&(null===f||void 0===f?void 0:f.partner),optionData:V&&Array.isArray(V)?V:[]}),filterIcon:this.hasRequiredPermission("ops.policy_partner_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(null!==m&&void 0!==m&&m.partner?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:_,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPartner:e})},{key:"productKey",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Product Name"})}),dataIndex:"ProductDisplayName",filterDropdown:(0,$.jsx)(d.C0,{placeholder:"Select Products",idIdentifier:"productKey",searchText:x?null===f||void 0===f?void 0:f.partnerproduct_id:null===m||void 0===m?void 0:m.partnerproduct_id,onInputChange:e=>this.onInputProductChange(e,"partnerproduct_id"),onSearch:e=>this.onSearch(e,"partnerproduct_id"),enableButton:f&&(null===f||void 0===f?void 0:f.partnerproduct_id),optionData:q&&Array.isArray(q)?q:[],isProduct:!0}),filterIcon:this.hasRequiredPermission("ops.policy_product_id_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.partnerproduct_id?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:b,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterProduct:e})},{key:"PackageCode",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Package Code"})}),dataIndex:"PackageCode",filterDropdown:(0,$.jsx)(d.C0,{placeholder:"Select Package Code",idIdentifier:"packageCodes",searchText:x?f.packageCodes:m.packageCodes,onInputChange:e=>this.onInputProductChange(e,"packageCodes"),onSearch:e=>this.onSearch(e,"packageCodes"),enableButton:f&&f.packageCodes,optionData:R&&Array.isArray(R)&&(m.partner||m.partnerproduct_id)?R:[]}),filterIcon:this.hasRequiredPermission("ops.policy_partner_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.packageCodes?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:j,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPackageCode:e})},{key:"applicationNo",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Application no"})}),dataIndex:"ApplicationNo",filterDropdown:(0,$.jsx)(d.ZY,{idIdentifier:"applicationNo",searchText:x?f.applicationNo:m.applicationNo,onInputChange:e=>this.onInputChange(e,"applicationNo"),onSearch:e=>this.onSearch(e,"applicationNo")}),filterIcon:this.hasRequiredPermission("ops.policy_product_id_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.applicationNo?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:I,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterApplicationNo:e})},{key:"insurancePolicyNo",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Policy no"})}),dataIndex:"InsurancePolicyNo",render:e=>"TEMP"===e?"":e,filterDropdown:(0,$.jsx)(d.ZY,{idIdentifier:"insurancePolicyNo",searchText:x?f.insurancePolicyNo:m.insurancePolicyNo,onInputChange:e=>this.onInputChange(e,"insurancePolicyNo"),onSearch:e=>this.onSearch(e,"insurancePolicyNo")}),filterIcon:this.hasRequiredPermission("ops.policy_partner_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.insurancePolicyNo?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:C,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterInsurancePolicyNo:e})},{key:"Provider",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Provider"})}),dataIndex:"Provider",filterDropdown:(0,$.jsx)(d.Y2,{placeholder:"Select Provider",idIdentifier:"provider",searchText:x?f.provider:m.provider,onInputChange:e=>this.onInputChange(e,"provider"),onSearch:e=>this.onSearch(e,"provider"),enableButton:f&&f.provider,optionData:M&&Array.isArray(M)?M:[]}),filterIcon:(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.provider?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:N,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterProvider:e})},{key:"ProviderHitStatus",title:(0,$.jsx)("div",{className:"table-heading",children:(0,$.jsx)("span",{children:"Provider Hit Status"})}),dataIndex:"ProviderHitStatus"},{key:"Name",title:(0,$.jsx)("div",{className:"table-heading",children:(0,$.jsx)("span",{children:"Name"})}),dataIndex:"Name"},{key:"mobileNo",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Phone no"})}),dataIndex:"MobileNo",filterDropdown:(0,$.jsx)(d.v8,{searchText:x?f.mobileNo:m.mobileNo,onInputChange:e=>this.onInputChange(e,"mobileNo"),onSearch:e=>this.onSearch(e,"mobileNo"),invalid:this.validate(f.mobileNo||m.mobileNo,"mobileNo")}),filterIcon:this.hasRequiredPermission("ops.policy_partner_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.mobileNo?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:w,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterPhoneNo:e})},{key:"email",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Email"})}),dataIndex:"Email",filterDropdown:(0,$.jsx)(d.ZY,{idIdentifier:"email",searchText:x?f.email:m.email,onInputChange:e=>this.onInputChange(e,"email"),onSearch:e=>this.onSearch(e,"email")}),filterIcon:this.hasRequiredPermission("ops.polict_email_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.email?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:k,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>this.setState({filterEmail:e})},{key:"CouponCode",title:(0,$.jsx)("div",{className:"coupon-code",children:(0,$.jsx)("span",{children:"Coupon code"})}),dataIndex:"CouponCode",sorter:!0,sortDirections:["descend"]},{key:"PolicyState",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Policy State"})}),dataIndex:"PolicyState",filterDropdown:(0,$.jsx)(d.Y2,{idIdentifier:"policyState",searchText:x?f.policyState:m.policyState,onInputChange:e=>this.onInputChange(e,"policyState"),onSearch:e=>this.onSearch(e,"policyState"),products:i,searchDefinition:"policyFilters",optionData:["COMPLETED","PENDING","SAVED","FAILED","ABORTED","CANCELLED"]}),filterIcon:(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.policyState?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:A,onFilterDropdownVisibleChange:e=>this.setState({filterPolicyState:e})},{key:"PaymentStatus",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Payment Status"})}),dataIndex:"PaymentStatus",sorter:!0,sortDirections:["descend"],filterDropdown:(0,$.jsx)(d.Y2,{idIdentifier:"paymentStatus",searchText:x?f.paymentStatus:m.paymentStatus,onInputChange:e=>this.onInputChange(e,"paymentStatus"),onSearch:e=>this.onSearch(e,"paymentStatus"),products:i,searchDefinition:"policyFilters",optionData:["PENDING_PAYMENT","PAID_IN_ADVANCE","PAID_AFTER_ISSUE","PAYMENT_CANCELLED"]}),filterIcon:(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.paymentStatus?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:E,onFilterDropdownVisibleChange:e=>this.setState({filterPaymentStatus:e})},{key:"CreatedAt",title:(0,$.jsx)("div",{className:"table-heading-filter",children:(0,$.jsx)("span",{children:"Created at"})}),dataIndex:"CreatedAt",render:e=>S()(e).tz(U).format("YYYY-MM-DD HH:mm:ss"),filterDropdown:(0,$.jsx)(d.QD,{idIdentifier:"CreatedAt",onInputChange:e=>this.onInputChange(e),onSearch:e=>this.onSearchDate(e,"CreatedAt"),isClear:T,startDate:m.createdatStart,endDate:m.createdatEnd,buttonName:"Search"}),filterIcon:this.hasRequiredPermission("ops.policy_created_at_filter")&&(0,$.jsx)(n.Icon,{className:"floatL fS-12 "+(m.createdatStart&&m.createdatEnd?"active-class":"default"),type:"filter",theme:"outlined"}),filterDropdownVisible:L,sorter:!0,sortDirections:["descend"],onFilterDropdownVisibleChange:e=>{this.setState({filterCreatedAt:e})}}];return(0,$.jsx)(v.A,{children:(0,$.jsxs)(l.A,{className:"referral-table",style:{color:"#788195"},children:[(0,$.jsx)(n.Row,{style:{width:"100%"},children:(0,$.jsx)(n.Col,{children:(0,$.jsx)(D.A,{status:"error",isNeedDisplay:t,onClose:()=>this.resetReduxState(),message:c})})}),(0,$.jsxs)(s.A,{children:[(0,$.jsxs)(n.Row,{style:{marginBottom:"10px"},children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("h3",{className:"policy-heading",children:"Policy list"}),(0,$.jsx)("div",{children:(0,$.jsx)("p",{className:"policy-count",children:Number(Y)})})]}),this.getFilterTag(m),(0,$.jsxs)("div",{className:"policy-buttons",children:[(0,$.jsx)(P.A,{requiredPermission:"ops.upload_policy_number_update_file",children:(0,$.jsx)(n.Upload,{multiple:!1,showUploadList:!1,customRequest:this.customRequest,children:(0,$.jsxs)(n.Button,{children:[(0,$.jsx)(n.Icon,{type:"upload"}),"Click to upload"]})})}),(0,$.jsxs)(n.Button,{onClick:()=>this.resetFilter(),style:{margin:"0px 5px"},children:[(0,$.jsx)(n.Icon,{type:"filter",theme:"outlined"}),"\xa0Clear filter"]}),(0,$.jsx)(P.A,{requiredPermission:"ops.download_policies_list",children:(0,$.jsxs)(n.Button,{onClick:e=>this.downloadExcel(e,"today"),style:{margin:"0px 5px"},children:[(0,$.jsx)(n.Icon,{type:"cloud",theme:"outlined"}),"\xa0Download Today's data"]})}),(0,$.jsx)(P.A,{requiredPermission:"ops.download_policies_list",children:(0,$.jsxs)(n.Button,{onClick:()=>this.setState({isModalVisible:!0}),style:{margin:"0px 5px"},children:[(0,$.jsx)(n.Icon,{type:"cloud",theme:"outlined"}),"\xa0Download data between range"]})})]})]}),(0,$.jsxs)(n.Modal,{footer:null,visible:this.state.isModalVisible,onCancel:()=>this.setState({isModalVisible:!1}),children:[(0,$.jsx)("h2",{children:"Report will send to your email"}),(0,$.jsx)(n.Input,{placeholder:"Email",value:this.state.userEmail,onChange:e=>this.setState({userEmail:e.target.value})}),(0,$.jsxs)("div",{className:"modal-dateRange",style:{marginTop:"20px"},children:[(0,$.jsx)("h2",{children:"Select date range"}),(0,$.jsx)(d.QD,{idIdentifier:"downloadExcel",onInputChange:e=>this.onInputChange(e),onSearch:e=>this.downloadExcel(e),isClear:T,startDate:m.createdatStart,endDate:m.createdatEnd,buttonName:"Send"})]})]}),(0,$.jsx)(g,{columns:B,bordered:"bordered",rowKey:e=>e.InternalID,dataSource:a,pagination:{pageSize:10,total:Number(Y),current:h/u+1},scroll:{x:!0},loading:e,onChange:this.handleTableChange,className:"isoSearchableTable table-data"})]})]})})}}q.defaultProps={insurance:{},profileData:{},policyListData:[],policyListMetaData:{},products:[],partners:[],permissions:[]};const Y=(0,o.connect)((e=>({userProducts:e.Auth.product,permissions:e.Auth.permissions,insurance:e.Insurance,partners:e.Insurance.partners,products:e.Insurance.products,profileData:e.Auth.profile,policyListData:e.Insurance.policyList,policyListMetaData:e.Insurance.metadata,policyListLoading:e.Loading.GET_INSURANCE_DATA,policyListError:e.Error.GET_INSURANCE_DATA,policyFailedMessage:e.Insurance.failedMessage,uploadUpdatePolicyNumberFileLoading:e.Loading.UPLOAD_UPDATE_POLICY_NUMBER_FILE,uploadUpdatePolicyNumberFileError:e.Error.UPLOAD_UPDATE_POLICY_NUMBER_FILE,uploadUpdatePolicyNumberFileMessage:e.Insurance.uploadUpdatePolicyNumberFileMessage,masterListData:e.Insurance.masterListData})),{getInsuranceData:k,getInsuranceCountData:A,resetReduxState:E,querySearch:T,sendReport:L,resetDownloadStatus:F,uploadUpdatePolicyNumberFile:R,getMasterListData:M,sendReportRange:V})(q)},36934:(e,t,a)=>{a.d(t,{A:()=>o});a(1502);var r=a(67816),i=a(70579);const o=e=>{let{isNeedDisplay:t,onClose:a=()=>{},status:o,message:n}=e;return t?(0,i.jsx)(r.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:n,type:o,closeText:"Close",onClose:a}):""}},8624:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(1502),i=a.n(r),o=a(24952);class n extends i().Component{render(){const{permissions:e,requiredPermission:t,defaultComponent:a=null}=this.props;return e.find((e=>e===t))?this.props.children:a}}n.defaultProps={permissions:[]};const s=(0,o.connect)((e=>({permissions:e.Auth.permissions})),{})(n)},21577:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(67816);const i=r.Table}}]);
//# sourceMappingURL=9196.cc7d16f1.chunk.js.map