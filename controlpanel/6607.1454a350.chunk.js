"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6607],{6607:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var r=a(1502),o=a.n(r),i=a(24952),l=a(67816),s=a(17634),n=a.n(s),p=a(38094),d=a.n(p),c=a(17823),h=a.n(c),u=a(84029),g=a(55347),m=a(50248),x=a(36934),f=a(98479),b=a(93807),y=a(21577),C=a(80878),$=a.n(C),S=a(34618),v=a(67050),w=a(93317);const _=$()(y.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,S.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,S.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,S.palette)("secondary",1)};
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
    color: ${(0,S.palette)("text",3)};
    border-bottom: 1px solid ${(0,S.palette)("border",0)};

    a {
      color: ${(0,S.palette)("primary",0)};
      ${(0,v.kY)()};

      &:hover {
        color: ${(0,S.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,S.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,S.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,S.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,S.palette)("border",0)};

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
      border-color: ${(0,S.palette)("primary",0)};
      ${(0,v.kY)()};
    }

    &:hover a {
      color: ${(0,S.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,S.palette)("primary",0)};
    border-color: ${(0,S.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,S.palette)("grayscale",6)};

    p {
      color: ${(0,S.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,S.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,S.palette)("secondary",1)};
    color: ${(0,S.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,v.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,S.palette)("secondary",1)};
    color: ${(0,S.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,v.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,S.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,S.palette)("border",0)};
      ${(0,v.MS)("0 1px 6px rgba(0,0,0,0.2)")};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,S.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,S.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,v.Vq)("3px 0 0 3px")};
        ${(0,v.kY)()};
        ${(0,v.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,S.palette)("secondary",7)};
          ${(0,v.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,S.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,S.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,S.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,S.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,S.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,v.kY)()};

        &:hover {
          background-color: ${(0,S.palette)("primary",1)};
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
        border: 1px solid ${(0,S.palette)("border",0)};
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
              solid ${(0,S.palette)("border",0)};
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
          border-right: 1px solid ${(0,S.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,S.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,S.palette)("border",0)};
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
          color: ${(0,S.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,S.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,v.Vq)("3px")};
          ${(0,v.MS)()};
          ${(0,v.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,S.palette)("border",0)};
            ${(0,v.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,S.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,S.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,S.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,S.palette)("grayscale",0)};
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
`,j=$().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,S.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,S.palette)("primary",0)};
      background-color: ${(0,S.palette)("primary",0)};
    }
  }
`,k=((0,w.A)(j),(0,w.A)(_));var L=a(26877),T=a(96117),D=a(87291),I=a(92021),A=a(25211),E=a(50680),F=a(70579);const{getOpenClaims:O,getClaimFilters:P,resetReduxStateClaim:z,sendClaimsReport:R,resetValidateStatus:M}=L.A,{getProducts:N}=A.A,{resetLoadingRedux:G}=T.A,{resetErrorRedux:V}=D.A,{getListGroups:Y}=I.A;class Q extends o().Component{constructor(e){var t;super(e),t=this,this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:a,page_size:r}=e,o=Number(a)||1,i=Number(r)||50;delete e.page,delete e.page_size,t.setState({page_size:i,page:o,claimsFilter:e}),t.props.getOpenClaims({query:{page:o,page_size:i,...e}})},this.resetReduxState=()=>{this.props.resetReduxStateClaim()},this.detailPage=e=>{const{history:t}=this.props;t.push(`/claims/${e}`)},this.onInputChange=(e,t)=>{this.setState({searchTextQuery:{[t]:e.target.value},isChange:!0})},this.onSearch=(e,t,a)=>{let r={};"date_range"===a?(r={[`${t}`]:[e.startDate,e.endDate]},this.setState({[t]:!1,searchTextQuery:r,isChange:!0})):e.preventDefault();const{searchTextQuery:o}=this.state,{history:i,location:l}=this.props,s={...o,...r},n=(0,b.A)(s);i.push({pathname:l.pathname,search:n}),(Object.values(o).length||Object.values(r).length)&&(this.setState({policy_number:!1,claim_no:!1,application_no:!1,searchTextQuery:s}),this.fetch(s))},this.resetFilter=()=>{const{history:e,location:t}=this.props;t.search="",e.push(t.pathname),this.setState({searchText:"",loading:!0,searchTextQuery:{},claimsFilter:{},filteredInfo:{},clearDate:!0}),this.props.resetReduxStateClaim(),this.fetch()},this.handleSearch=(e,t)=>{const{searchTextQuery:a}=this.state;this.fetch({...a,[t]:e})},this.handleTableChange=(e,t)=>{const{searchTextQuery:a,filteredInfo:r}=this.state,{history:o,location:i}=this.props,{pageSize:l,current:s}=e,n={};Object.keys(t).map((e=>{let a=t[e]||[];return a=Array.isArray(a)?a[0]:a,a&&(n[e]=a),a}));const p={...a,...n,page:s,page_size:l},d=(0,b.A)(p);o.push({pathname:i.pathname,search:d}),this.setState({policy_number:!1,claim_no:!1,application_no:!1,onSearchQuery:p,searchTextQuery:p,filteredInfo:{...n},page:s,page_size:l}),this.props.getOpenClaims({query:{page:s,page_size:l,...p}}),JSON.stringify(n)!==JSON.stringify(r)&&this.fetch(p)},this.downloadExcel=()=>{const{userDetail:e}=this.props,{userEmail:t,claimsFilter:a}=this.state;n()({title:"Report will be sent to your email ",input:"email",inputValue:t,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:t=>{this.props.sendClaimsReport({email:t,owner_id:e.id,download_type:"open_claim_list",...a})},allowOutsideClick:()=>!1}).then((e=>{"cancel"!==e.dismiss&&n()({type:"success",title:"",text:"success"})}))},this.state={data:[],loading:!1,failedMessage:"",userEmail:"",permissions:[],searchTextQuery:{},isChange:!1,filteredInfo:{},claimsFilter:{},groups:[],displaySafeScreen:!1,validatePopupMessage:"",displayLimitAlert:!1,payload:{},gojekProduct:void 0}}componentWillReceiveProps(e){const{profileData:t}=e,{email:a}=t,{listGroups:r}=e.groupLists;void 0!==r&&this.setState({groups:r}),void 0!==a&&this.setState({userEmail:a})}componentDidMount(){const e=d().parse(this.props.location.search);this.fetch(e),this.props.getClaimFilters(),this.props.getListGroups(),this.props.getProducts()}componentWillUnmount(){this.props.resetReduxStateClaim()}getColumnProps(e){const{filtersData:t,getClaimsFiltersLoading:a,getClaimsFiltersError:r,permissions:o}=this.props,{searchTextQuery:i,isChange:s,filteredInfo:n}=this.state,p=n[e]?"#1890ff":void 0,c=d().parse(this.props.location.search);if(a||r||!Array.isArray(t))return{};{if(!(o.indexOf("ops.claim_filter_product_name")>-1)&&"product_key"===e)return{};if(!(o.indexOf("ops.claim_filter_package_name")>-1)&&"package_name"===e)return{};const a=t.find((t=>t.name===e));if(!a)return{};const r=a.type;if("choices"===r){let t=[];const r=a.values||{};for(e in r)t.push({text:r[e],value:e});return{filters:t,filterMultiple:!1,filteredValue:n[e]||null,filterIcon:(0,F.jsx)(l.Icon,{type:"filter",style:{color:p}})}}if("text"===r){let t={filterIcon:(0,F.jsx)(l.Icon,{type:"search",style:{color:i[e]||c[e]?"#1890ff":void 0}}),filterDropdown:(0,F.jsx)(f.ZY,{idIdentifier:e,searchText:s?i[e]:void 0!==c[e]?c[e]:i[e],onInputChange:t=>this.onInputChange(t,e),onSearch:t=>this.onSearch(t,e,r)}),filterDropdownVisible:this.state[e],onFilterDropdownVisibleChange:t=>this.setState({[e]:t})};return"claim_number"===e&&(t={...t,render:(e,t)=>{let{claim_id:a}=t;return(0,F.jsx)(m.A,{permissionSetter:"ops.view_claim_details",permissionGetter:o,children:(0,F.jsx)("span",{className:"anchor",onClick:()=>this.detailPage(a),children:e})})}}),t}return"date_range"===r?{filterDropdown:(0,F.jsx)(f.QD,{idIdentifier:e,onSearch:t=>this.onSearch(t,e,r),isClear:this.state.clearDate,startDate:s?(i[e]||[])[0]:void 0!==(c[e]||[])[0]?(c[e]||[])[0]:(i[e]||[])[0],endDate:s?(i[e]||[])[1]:void 0!==(c[e]||[])[1]?(c[e]||[])[1]:(i[e]||[])[1]}),filterIcon:(0,F.jsx)(l.Icon,{style:{color:void 0!==i[e]&&void 0!==i[e]||void 0!==c[e]&&void 0!==c[e]?"#108ee9":"#aaa"},type:"filter",theme:"outlined"}),filterDropdownVisible:this.state[e],onFilterDropdownVisibleChange:t=>this.setState({[e]:t})}:{}}}render(){const{claimsFilter:e}=this.state,{getOpenClaimsLoading:t,getOpenClaimsError:a,openClaimsData:r,permissions:o,profileData:i}=this.props,s=r.meta_data,n=(r||{}).data||[],p=s?s.total_records:0,d=s?s.page:1,c=[{key:"policy_number",title:(0,F.jsx)("div",{style:{display:"flex",paddingTop:"2px",marginLeft:"20px"},children:(0,F.jsx)("span",{children:"Policy number"})}),dataIndex:"policy_number",...this.getColumnProps("policy_number")},{key:"claim_no",title:(0,F.jsx)("div",{style:{display:"flex",paddingTop:"2px",marginLeft:"20px"},children:(0,F.jsx)("span",{children:"Claim id"})}),dataIndex:"claim_no",...this.getColumnProps("claim_number")},{key:"partnerproduct_id",title:(0,F.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,F.jsx)("span",{children:"Product Name"})}),dataIndex:"display_name",...(0,E.T)(this,"partnerproduct_id","product")},{key:"benefit",title:(0,F.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,F.jsx)("span",{children:"Benefit"})}),dataIndex:"benefit"},{title:"Doc Completed/Received Date",dataIndex:"doc_complete_received_date",key:"doc_complete_received_date",render:e=>i?h().utc(e,"DD/MM/YYYY HH:mm:ss").tz(i.user_timezone).format("DD MMMM YYYY HH:mm:ss"):""},{title:"Status",dataIndex:"status",key:"status",...this.getColumnProps("status")}];return(0,F.jsxs)(g.A,{className:"referral-table",style:{color:"#788195"},children:[(0,F.jsx)(l.Row,{style:{width:"100%"},children:(0,F.jsx)(l.Col,{children:(0,F.jsx)(x.A,{status:"error",isNeedDisplay:""!==this.state.failedMessage,onClose:this.resetReduxState,message:this.state.failedMessage})})}),(0,F.jsxs)(u.A,{children:[(0,F.jsxs)(l.Row,{style:{marginBottom:"10px"},children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("h3",{style:{float:"left",color:"#788195"},children:"Claim Lists"}),(0,F.jsx)("div",{children:(0,F.jsx)("p",{style:{float:"left",color:"#4482FF",marginLeft:"10px",marginTop:"3px"},children:p})})]}),Object.keys(e).length>0&&(0,F.jsx)(l.Tag,{style:{alignSelf:"center",marginLeft:"5px"},color:"purple",children:"Filter is applied"}),(0,F.jsxs)("div",{style:{float:"right",display:"flex"},children:[(0,F.jsxs)(l.Button,{onClick:this.resetFilter,children:[(0,F.jsx)(l.Icon,{type:"filter",theme:"outlined"})," \xa0Clear filter"]}),(0,F.jsx)("div",{span:o.length&&o.indexOf("ops.download_claims_list")>-1?8:3,children:(0,F.jsx)("div",{style:{display:"flex",float:"right"},children:(0,F.jsx)(m.A,{permissionSetter:"ops.download_claims_list",permissionGetter:o,children:(0,F.jsxs)(l.Button,{onClick:this.downloadExcel,style:{marginLeft:"10px"},children:[(0,F.jsx)(l.Icon,{type:"cloud",theme:"outlined"})," \xa0Download"]})})})})]})]}),(0,F.jsx)(k,{bordered:!0,columns:c,pagination:{pageSize:50,total:p,current:d},rowKey:e=>e.claim_id,dataSource:a||t?[]:n,loading:t,className:"isoSearchableTable",onChange:this.handleTableChange})]})]})}}Q.defaultProps={openClaimsData:{}};const B=(0,i.connect)((e=>({openClaimsData:e.Claims.openClaimsData,getOpenClaimsStatus:e.Claims.getOpenClaimsStatus,getOpenClaimsLoading:e.Loading.GET_OPEN_CLAIMS,getOpenClaimsError:e.Error.GET_OPEN_CLAIMS,getClaimsFiltersLoading:e.Loading.GET_CLAIM_FILTERS,getClaimsFiltersError:e.Error.GET_CLAIM_FILTERS,filtersData:e.Claims.filtersData,profileData:e.Auth.profile,groupLists:e.Team,dataValidateGocar:e.Claims.dataValidateGocar,userDetail:e.Auth.profile})),{getOpenClaims:O,getClaimFilters:P,resetReduxStateClaim:z,sendClaimsReport:R,resetLoadingRedux:G,resetErrorRedux:V,getListGroups:Y,resetValidateStatus:M,getProducts:N})(Q)},50680:(e,t,a)=>{a.d(t,{T:()=>h});var r=a(67816),o=a(1502),i=a(24952),l=a(80878);const s=a.n(l)().div`
  padding: 8px;
  width: 216px;
  .search-button {
    background-color: #4482FF;
    color: #fff;
    width: 200px !important;
    border-color: #4482FF;
    padding: 4px 0px;
    height: auto;
  }
  .ant-input {
    width: 200px !important;
  }
  .ant-input:focus {
    border-color: #4482FF;
  }
  .ant-select {
    width: 200px;
    margin-bottom: 8px;
  }
  .ant-picker {
    width: 200px;
  }
  .range-end {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;var n=a(70579);const{Option:p}=r.Select;class d extends o.Component{constructor(){super(...arguments),this.state={createdAtStart:"",createdAtEnd:""},this.renderInputType=()=>{const{props:e,type:t,searchKey:a,setSelectedKeys:o,selectedKeys:i,partnersList:l=[],productsList:s=[],partnerListLoading:d,productListLoading:c}=this.props,{createdAtStart:h,createdAtEnd:u}=this.state;switch(t){case"partner":return(0,n.jsx)(r.Select,{showSearch:!0,placeholder:"Select Partner",optionFilterProp:"children",allowClear:!0,loading:!!d,disabled:!!d,dropdownMatchSelectWidth:!1,onChange:e=>o(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:l.map((e=>{let{name:t,code:a}=e;return(0,n.jsx)(p,{value:a,children:t},a)}))});case"product":return(0,n.jsx)(r.Select,{showSearch:!0,placeholder:"Select product",optionFilterProp:"children",allowClear:!0,loading:!!c,disabled:!!c,dropdownMatchSelectWidth:!1,onChange:e=>o(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:s.map((e=>{let{display_name:t,id:a}=e;return(0,n.jsx)(p,{value:a,children:t},a)}))});case"date-range":return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.DatePicker,{placeholder:"Select Start Date",onChange:(e,t)=>{let a=`${t}`;this.setState({createdAtStart:a}),o(t?[a,u]:[])}}),(0,n.jsx)(r.DatePicker,{placeholder:"Select End Date",className:"range-end",onChange:(e,t)=>{let a=`${t}`;this.setState({createdAtEnd:a}),o(t?[h,a]:[])}})]});default:return(0,n.jsx)(r.Input,{ref:t=>{e.searchInput=t},placeholder:`Search ${a}`,value:i,onChange:e=>o(e.target.value?e.target.value:""),onPressEnter:()=>e.handleSearch(i,a),style:{width:188,marginBottom:8,display:"block"}})}}}render(){const{props:e,searchKey:t,selectedKeys:a}=this.props;return(0,n.jsxs)(s,{children:[this.renderInputType(),(0,n.jsx)(r.Button,{type:"primary",onClick:()=>e.handleSearch(a,t),icon:(0,n.jsx)(r.Icon,{type:"search"}),className:"search-button",size:"small",style:{width:90},children:"Search"})]})}}const c=(0,i.connect)((e=>({partnerListLoading:e.Loading.GET_PARTNERS_LIST,partnersList:e.Insurance.partners,productListLoading:e.Loading.GET_PRODUCTS_LIST,productsList:e.Policy.products})),{})(d),h=(e,t,a)=>({filterDropdown:r=>{let{setSelectedKeys:o,selectedKeys:i}=r;return(0,n.jsx)("div",{className:"filter-dropdown",children:u(e,a,t,o,i)})},filterIcon:()=>(0,n.jsx)(r.Icon,{type:"filter"}),onFilter:(e,a)=>a[t]?a[t].toString().toLowerCase().includes(e.toLowerCase()):"",onFilterDropdownVisibleChange:t=>{t&&setTimeout((()=>e.searchInput&&e.searchInput.select()),100)}}),u=(e,t,a,r,o)=>(0,n.jsx)(c,{props:e,type:t,searchKey:a,setSelectedKeys:r,selectedKeys:o})},36934:(e,t,a)=>{a.d(t,{A:()=>i});a(1502);var r=a(67816),o=a(70579);const i=e=>{let{isNeedDisplay:t,onClose:a=()=>{},status:i,message:l}=e;return t?(0,o.jsx)(r.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:l,type:i,closeText:"Close",onClose:a}):""}},21577:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=6607.1454a350.chunk.js.map