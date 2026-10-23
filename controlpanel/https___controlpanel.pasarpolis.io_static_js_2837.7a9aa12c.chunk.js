"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2837],{42837:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var r=a(1502),o=a.n(r),l=a(24952),i=a(67816),s=a(17634),n=a.n(s),d=a(38094),p=a.n(d),c=a(86178),h=a.n(c),u=a(84029),g=a(55347),m=a(50248),x=a(36934),f=a(98479),b=a(93807),y=a(21577),w=a(80878),C=a.n(w),S=a(34618),$=a(67050),v=a(93317);const _=C()(y.A)`
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
      ${(0,$.kY)()};

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
      ${(0,$.kY)()};
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
    ${(0,$.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,S.palette)("secondary",1)};
    color: ${(0,S.palette)("secondary",2)};
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
    color: ${(0,S.palette)("primary",0)};
  }

  &.isoSearchableTable {
    .isoTableSearchBox {
      padding: 20px;
      display: flex;
      background: #ffffff;
      border: 1px solid ${(0,S.palette)("border",0)};
      ${(0,$.MS)("0 1px 6px rgba(0,0,0,0.2)")};

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
        ${(0,$.Vq)("3px 0 0 3px")};
        ${(0,$.kY)()};
        ${(0,$.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,S.palette)("secondary",7)};
          ${(0,$.MS)("none")};
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
        ${(0,$.kY)()};

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
          ${(0,$.Vq)("3px")};
          ${(0,$.MS)()};
          ${(0,$.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,S.palette)("border",0)};
            ${(0,$.MS)()};
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
`,j=C().div`
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
`,L=((0,v.A)(j),(0,v.A)(_));var I=a(26877),k=a(96117),T=a(87291),F=a(92021),D=a(25211),A=a(50680),E=a(70579);const{getFollowupClaims:P,getClaimFilters:M,resetReduxStateClaim:R,sendClaimsReport:z,resetValidateStatus:O,getClaimUsers:U}=I.A,{getProducts:V}=D.A,{resetLoadingRedux:N}=k.A,{resetErrorRedux:Y}=T.A,{getListGroups:G}=F.A;class Q extends o().Component{constructor(e){var t;super(e),t=this,this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{page:a,page_size:r}=e,o=Number(a)||1,l=Number(r)||50;delete e.page,delete e.page_size,t.setState({page_size:l,page:o,claimsFilter:e}),t.props.getFollowupClaims({query:{page:o,page_size:l,...e}})},this.resetReduxState=()=>{this.props.resetReduxStateClaim()},this.detailPage=e=>{const{history:t}=this.props;t.push(`/claims/${e}`)},this.onInputChange=(e,t)=>{this.setState({searchTextQuery:{[t]:e.target.value},isChange:!0})},this.onSearch=(e,t,a)=>{let r={};"date_range"===a?(r={[`${t}`]:[e.startDate,e.endDate]},this.setState({[t]:!1,searchTextQuery:r,isChange:!0})):e.preventDefault();const{searchTextQuery:o}=this.state,{history:l,location:i}=this.props,s={...o,...r},n=(0,b.A)(s);l.push({pathname:i.pathname,search:n}),(Object.values(o).length||Object.values(r).length)&&(this.setState({policy_number:!1,claim_no:!1,application_no:!1,searchTextQuery:s}),this.fetch(s))},this.resetFilter=()=>{const{history:e,location:t}=this.props;t.search="",e.push(t.pathname),this.setState({searchText:"",loading:!0,searchTextQuery:{},claimsFilter:{},filteredInfo:{},clearDate:!0}),this.props.resetReduxStateClaim(),this.fetch()},this.handleTableChange=(e,t)=>{const{searchTextQuery:a,filteredInfo:r}=this.state,{history:o,location:l}=this.props,{pageSize:i,current:s}=e,n={};Object.keys(t).map((e=>{let a=t[e]||[];return a=Array.isArray(a)?a[0]:a,a&&(n[e]=a),n}));const d={...a,...n,page:s,page_size:i},p=(0,b.A)(d);o.push({pathname:l.pathname,search:p}),this.setState({policy_number:!1,claim_no:!1,application_no:!1,onSearchQuery:d,searchTextQuery:d,filteredInfo:{...n},page:s,page_size:i}),this.props.getFollowupClaims({query:{page:s,page_size:i,...d}}),JSON.stringify(n)!==JSON.stringify(r)&&this.fetch(d)},this.downloadExcel=()=>{const{userEmail:e,claimsFilter:t}=this.state;n()({title:"Report will be sent to your email ",input:"email",inputValue:e,showCancelButton:!0,confirmButtonText:"Send",showLoaderOnConfirm:!0,preConfirm:e=>{this.props.sendClaimsReport({email:e,...t})},allowOutsideClick:()=>!1}).then((e=>{"cancel"!==e.dismiss&&n()({type:"success",title:"",text:"success"})}))},this.handleSearch=(e,t)=>{const{searchTextQuery:a}=this.state;this.fetch({...a,[t]:e})},this.state={data:[],loading:!1,failedMessage:"",userEmail:"",permissions:[],searchTextQuery:{},isChange:!1,filteredInfo:{},claimsFilter:{},groups:[],displaySafeScreen:!1,validatePopupMessage:"",displayLimitAlert:!1,payload:{},gojekProduct:void 0}}componentWillReceiveProps(e){const{profileData:t}=e,{email:a}=t;void 0!==a&&this.setState({userEmail:a})}componentDidMount(){const e=p().parse(this.props.location.search);this.fetch(e),this.props.getClaimFilters(),this.props.getClaimUsers(),this.props.getProducts()}componentWillUnmount(){this.props.resetReduxStateClaim()}getColumnProps(e){const{filtersData:t,getClaimsFiltersLoading:a,getClaimsFiltersError:r,permissions:o}=this.props,{searchTextQuery:l,isChange:s,filteredInfo:n}=this.state,d=n[e]?"#1890ff":void 0,c=p().parse(this.props.location.search);if(a||r||!Array.isArray(t))return{};{if(!o.includes("ops.view_claims_followup_list_owner_filter")&&"owner_id"===e)return{};const a=t.find((t=>t.name===e));if(!a)return{};const r=a.type;if("choices"===r){let t=[];const r=a.values||{};for(e in r)t.push({text:r[e],value:e});return{filters:t,filterMultiple:!1,filteredValue:n[e]||null,filterIcon:(0,E.jsx)(i.Icon,{type:"filter",style:{color:d}})}}if("text"===r){let t={filterIcon:(0,E.jsx)(i.Icon,{type:"search",style:{color:l[e]||c[e]?"#1890ff":void 0}}),filterDropdown:(0,E.jsx)(f.ZY,{idIdentifier:e,searchText:s?l[e]:void 0!==c[e]?c[e]:l[e],onInputChange:t=>this.onInputChange(t,e),onSearch:t=>this.onSearch(t,e,r)}),filterDropdownVisible:this.state[e],onFilterDropdownVisibleChange:t=>this.setState({[e]:t})};return"claim_number"===e&&(t={...t,render:(e,t)=>{let{claim_id:a}=t;return(0,E.jsx)(m.A,{permissionSetter:"ops.view_claim_details",permissionGetter:o,children:(0,E.jsx)("span",{className:"anchor",onClick:()=>this.detailPage(a),children:e})})}}),t}return"date_range"===r?{filterDropdown:(0,E.jsx)(f.QD,{idIdentifier:e,onSearch:t=>this.onSearch(t,e,r),isClear:this.state.clearDate,startDate:s?(l[e]||[])[0]:void 0!==(c[e]||[])[0]?(c[e]||[])[0]:(l[e]||[])[0],endDate:s?(l[e]||[])[1]:void 0!==(c[e]||[])[1]?(c[e]||[])[1]:(l[e]||[])[1]}),filterIcon:(0,E.jsx)(i.Icon,{style:{color:void 0!==l[e]&&void 0!==l[e]||void 0!==c[e]&&void 0!==c[e]?"#108ee9":"#aaa"},type:"filter",theme:"outlined"}),filterDropdownVisible:this.state[e],onFilterDropdownVisibleChange:t=>this.setState({[e]:t})}:{}}}getOwnerColumnProps(e){const{permissions:t,claimUsers:a}=this.props,{filteredInfo:r}=this.state;if(!t.includes("ops.view_claims_followup_list_owner_filter")&&"owner_id"===e)return{render:e=>(0,E.jsx)("div",{children:(a.find((t=>{let{id:a}=t;return String(a)===e}))||{}).name||e})};const o=r[e]?"#1890ff":void 0,l=r[e]?[r[e]]:null;return{filters:a.map((e=>{let{id:t,name:a}=e;return{text:a,value:t}})),filterMultiple:!1,filteredValue:l,filterIcon:(0,E.jsx)(i.Icon,{type:"filter",style:{color:o}}),render:e=>(0,E.jsx)("div",{children:(a.find((t=>{let{id:a}=t;return String(a)===e}))||{}).name||e})}}render(){const{claimsFilter:e}=this.state,{getFollowupClaimsLoading:t,getFollowupClaimsError:a,followupClaimsData:r,permissions:o}=this.props,l=r.meta_data,s=(r||{}).data||[],n=l?l.total_records:0,d=l?l.page:1,p=[{key:"policy_number",title:(0,E.jsx)("div",{style:{display:"flex",paddingTop:"2px",marginLeft:"20px"},children:(0,E.jsx)("span",{children:"Policy number"})}),dataIndex:"policy_number",...this.getColumnProps("policy_number")},{key:"claim_no",title:(0,E.jsx)("div",{style:{display:"flex",paddingTop:"2px",marginLeft:"20px"},children:(0,E.jsx)("span",{children:"Claim id"})}),dataIndex:"claim_no",...this.getColumnProps("claim_number")},{key:"partnerproduct_id",title:(0,E.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,E.jsx)("span",{children:"Product Name"})}),dataIndex:"display_name",...(0,A.T)(this,"partnerproduct_id","product")},{key:"owner_id",title:(0,E.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,E.jsx)("span",{children:"Owner"})}),dataIndex:"owner_id",...this.getOwnerColumnProps("owner_id")},{key:"followup_context",title:(0,E.jsx)("div",{style:{display:"flex",paddingTop:"2px"},children:(0,E.jsx)("span",{children:"Remarks"})}),dataIndex:"followup_context",...this.getColumnProps("followup_context")},{title:"Followup Date",dataIndex:"next_followup_date",key:"next_followup_date",render:e=>h()(e,"DD/MM/YYYY HH:mm:ss").format("DD MMMM YYYY HH:mm:ss")}];return(0,E.jsxs)(g.A,{className:"referral-table",style:{color:"#788195"},children:[(0,E.jsx)(i.Row,{style:{width:"100%"},children:(0,E.jsx)(i.Col,{children:(0,E.jsx)(x.A,{status:"error",isNeedDisplay:""!==this.state.failedMessage,onClose:this.resetReduxState,message:this.state.failedMessage})})}),(0,E.jsxs)(u.A,{children:[(0,E.jsxs)(i.Row,{style:{marginBottom:"10px"},children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{style:{float:"left",color:"#788195"},children:"Claim Lists"}),(0,E.jsx)("div",{children:(0,E.jsx)("p",{style:{float:"left",color:"#4482FF",marginLeft:"10px",marginTop:"3px"},children:n})})]}),Object.keys(e).length>0&&(0,E.jsx)(i.Tag,{style:{alignSelf:"center",marginLeft:"5px"},color:"purple",children:"Filter is applied"}),(0,E.jsxs)("div",{style:{float:"right",display:"flex"},children:[(0,E.jsxs)(i.Button,{onClick:this.resetFilter,children:[(0,E.jsx)(i.Icon,{type:"filter",theme:"outlined"})," \xa0Clear filter"]}),(0,E.jsx)("div",{span:o.length&&o.indexOf("ops.download_claims_list")>-1?8:3,children:(0,E.jsx)("div",{style:{display:"flex",float:"right"},children:(0,E.jsx)(m.A,{permissionSetter:"ops.download_claims_list",permissionGetter:o,children:(0,E.jsxs)(i.Button,{onClick:this.downloadExcel,style:{marginLeft:"10px"},children:[(0,E.jsx)(i.Icon,{type:"cloud",theme:"outlined"})," \xa0Download"]})})})})]})]}),(0,E.jsx)(L,{bordered:!0,columns:p,pagination:{pageSize:50,total:n,current:d},rowKey:e=>e.claim_id,dataSource:a||t?[]:s,loading:t,className:"isoSearchableTable",onChange:this.handleTableChange})]})]})}}Q.defaultProps={followupClaimsData:{},claimUsers:[]};const K=(0,l.connect)((e=>({followupClaimsData:e.Claims.followupClaimsData,getFollowupClaimsStatus:e.Claims.getFollowupClaimsStatus,getFollowupClaimsLoading:e.Loading.GET_FOLLOWUP_CLAIMS,getFollowupClaimsError:e.Error.GET_FOLLOWUP_CLAIMS,getClaimsFiltersLoading:e.Loading.GET_CLAIM_FILTERS,getClaimsFiltersError:e.Error.GET_CLAIM_FILTERS,filtersData:e.Claims.filtersData,profileData:e.Auth.profile,dataValidateGocar:e.Claims.dataValidateGocar,claimUsers:e.Claims.claimUsers,claimUsersStatus:e.Claims.claimUsersStatus,claimsUsersLoading:e.Loading.CLAIM_USERS,claimsUsersError:e.Error.CLAIM_USERS})),{getFollowupClaims:P,getClaimFilters:M,resetReduxStateClaim:R,sendClaimsReport:z,resetLoadingRedux:N,resetErrorRedux:Y,getListGroups:G,resetValidateStatus:O,getClaimUsers:U,getProducts:V})(Q)},50680:(e,t,a)=>{a.d(t,{T:()=>h});var r=a(67816),o=a(1502),l=a(24952),i=a(80878);const s=a.n(i)().div`
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
`;var n=a(70579);const{Option:d}=r.Select;class p extends o.Component{constructor(){super(...arguments),this.state={createdAtStart:"",createdAtEnd:""},this.renderInputType=()=>{const{props:e,type:t,searchKey:a,setSelectedKeys:o,selectedKeys:l,partnersList:i=[],productsList:s=[],partnerListLoading:p,productListLoading:c}=this.props,{createdAtStart:h,createdAtEnd:u}=this.state;switch(t){case"partner":return(0,n.jsx)(r.Select,{showSearch:!0,placeholder:"Select Partner",optionFilterProp:"children",allowClear:!0,loading:!!p,disabled:!!p,dropdownMatchSelectWidth:!1,onChange:e=>o(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:i.map((e=>{let{name:t,code:a}=e;return(0,n.jsx)(d,{value:a,children:t},a)}))});case"product":return(0,n.jsx)(r.Select,{showSearch:!0,placeholder:"Select product",optionFilterProp:"children",allowClear:!0,loading:!!c,disabled:!!c,dropdownMatchSelectWidth:!1,onChange:e=>o(e||""),filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:s.map((e=>{let{display_name:t,id:a}=e;return(0,n.jsx)(d,{value:a,children:t},a)}))});case"date-range":return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.DatePicker,{placeholder:"Select Start Date",onChange:(e,t)=>{let a=`${t}`;this.setState({createdAtStart:a}),o(t?[a,u]:[])}}),(0,n.jsx)(r.DatePicker,{placeholder:"Select End Date",className:"range-end",onChange:(e,t)=>{let a=`${t}`;this.setState({createdAtEnd:a}),o(t?[h,a]:[])}})]});default:return(0,n.jsx)(r.Input,{ref:t=>{e.searchInput=t},placeholder:`Search ${a}`,value:l,onChange:e=>o(e.target.value?e.target.value:""),onPressEnter:()=>e.handleSearch(l,a),style:{width:188,marginBottom:8,display:"block"}})}}}render(){const{props:e,searchKey:t,selectedKeys:a}=this.props;return(0,n.jsxs)(s,{children:[this.renderInputType(),(0,n.jsx)(r.Button,{type:"primary",onClick:()=>e.handleSearch(a,t),icon:(0,n.jsx)(r.Icon,{type:"search"}),className:"search-button",size:"small",style:{width:90},children:"Search"})]})}}const c=(0,l.connect)((e=>({partnerListLoading:e.Loading.GET_PARTNERS_LIST,partnersList:e.Insurance.partners,productListLoading:e.Loading.GET_PRODUCTS_LIST,productsList:e.Policy.products})),{})(p),h=(e,t,a)=>({filterDropdown:r=>{let{setSelectedKeys:o,selectedKeys:l}=r;return(0,n.jsx)("div",{className:"filter-dropdown",children:u(e,a,t,o,l)})},filterIcon:()=>(0,n.jsx)(r.Icon,{type:"filter"}),onFilter:(e,a)=>a[t]?a[t].toString().toLowerCase().includes(e.toLowerCase()):"",onFilterDropdownVisibleChange:t=>{t&&setTimeout((()=>e.searchInput&&e.searchInput.select()),100)}}),u=(e,t,a,r,o)=>(0,n.jsx)(c,{props:e,type:t,searchKey:a,setSelectedKeys:r,selectedKeys:o})},36934:(e,t,a)=>{a.d(t,{A:()=>l});a(1502);var r=a(67816),o=a(70579);const l=e=>{let{isNeedDisplay:t,onClose:a=()=>{},status:l,message:i}=e;return t?(0,o.jsx)(r.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:i,type:l,closeText:"Close",onClose:a}):""}},21577:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(67816);const o=r.Table}}]);
//# sourceMappingURL=2837.7a9aa12c.chunk.js.map