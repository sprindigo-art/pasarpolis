"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1855],{21855:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var a=r(1502),o=r.n(a),i=r(24952),s=r(67816),d=r(84029),l=r(55347),n=r(46893),p=r(92725),c=r(36934),x=r(89858),h=r(1603),g=r.n(h),m=r(96117),u=r(87291),b=r(70579);const f=s.Form.Item,v=s.Select.Option,{resetReduxState:y,getAgentProviderList:P,postProviderUser:$,getProviderList:E}=p.A,{resetLoadingRedux:R}=m.A,{resetErrorRedux:j}=u.A;class A extends o().Component{constructor(e){super(e),this.resetState=()=>{this.setState(this.initState),this.props.resetReduxState(["providerListData","providerUserMessage","agentProviderListData"]),this.props.resetLoadingRedux(["GET_PROVIDER_DATA","GET_AGENT_PROVIDER_DATA","POST_PROVIDER_USER"]),this.props.resetErrorRedux(["GET_PROVIDER_DATA","GET_AGENT_PROVIDER_DATA","POST_PROVIDER_USER"])},this.onSubmit=async e=>{e.preventDefault();if(!await this.validateForm())return;const{form:t}=this.props;let r={...t.getFieldsValue()};this.props.postProviderUser(r)},this.handleCancel=()=>{this.props.form.resetFields(),this.props.onClosePopupForm(),this.resetState()},this.state={providerListData:[],agentProviderListData:[]},this.initState=this.state}componentDidMount(){this.resetState(),this.props.getProviderList(),this.props.getAgentProviderList()}componentWillReceiveProps(e){!e.providerUserMessage||e.postProviderUserError||e.postProviderUserLoading||this.handleCancel()}async validateForm(){return new Promise((e=>{this.props.form.validateFields(((t,r)=>{e(!t)}))}))}render(){const{getFieldDecorator:e}=this.props.form,{providerListData:t,agentProviderListData:r,postProviderUserLoading:a,postProviderUserError:o,providerUserMessage:i}=this.props;return(0,b.jsxs)(s.Modal,{title:"Create Provider User",visible:this.props.isOpen,onCancel:this.handleCancel,footer:null,closable:!0,maskClosable:!1,children:[(0,b.jsx)(c.A,{status:"error",isNeedDisplay:o,message:i}),(0,b.jsxs)(s.Form,{id:"event-form",onSubmit:this.onSubmit,style:{marginTop:"10px"},children:[(0,b.jsx)("label",{children:(0,b.jsx)("strong",{style:{padding:"20px 0"},children:"Email:"})}),(0,b.jsx)(f,{validateStatus:!0,children:e("email",{rules:[{type:"email",message:"The input is not a valid E-mail"},{required:!0,message:"Email cannot be empty"}]})((0,b.jsx)(s.Input,{}))}),(0,b.jsx)("label",{children:(0,b.jsx)("strong",{style:{padding:"20px 0"},children:"Name:"})}),(0,b.jsx)(f,{children:e("name",{rules:[{required:!0,message:"Name cannot be empty"}]})((0,b.jsx)(s.Input,{}))}),(0,b.jsx)("label",{children:(0,b.jsx)("strong",{style:{padding:"20px 0"},children:"Phone:"})}),(0,b.jsx)(f,{children:e("phone",{rules:[{pattern:/^\d{2}-\d{1,}/,message:"Invalid phone number, format: XX-XXXXXX/[Country code]-[Phone no]"}]})((0,b.jsx)(s.Input,{}))}),(0,b.jsx)("label",{children:(0,b.jsx)("strong",{style:{padding:"20px 0"},children:"Provider:"})}),(0,b.jsx)(f,{children:e("provider",{rules:[{required:!1,message:"Must Select a Provider"}]})((0,b.jsx)(s.Select,{showSearch:!0,allowClear:!0,placeholder:"Select a provider",optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:t.map(((e,t)=>(0,b.jsx)(v,{value:e.code,children:e.name},t)))}))}),(0,b.jsx)(f,{children:e("agent_provider",{rules:[{required:!1,message:"Must Select an Agent Provider"}]})((0,b.jsx)(s.Select,{showSearch:!0,allowClear:!0,placeholder:"Select an agent provider",optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:r.map(((e,t)=>(0,b.jsx)(v,{value:e.code,children:e.name},t)))}))}),(0,b.jsx)(f,{children:(0,b.jsx)(s.Button,{form:"event-form",className:"button",type:"primary",htmlType:"submit",style:{float:"right",marginTop:"20px"},loading:a,children:"Create Provider User"},"submit")})]})]})}}const D=s.Form.create()(A);D.propTypes={userProfile:g().object.isRequired},D.defaultProps={userProfile:{}};const L=(0,i.connect)((e=>({providerListData:e.Provider.providerList,agentProviderListData:e.Provider.agentProviderList,providerListDataLoading:e.Loading.GET_PROVIDER_DATA,providerListDataError:e.Error.GET_PROVIDER_DATA,agentProviderListDataLoading:e.Loading.GET_AGENT_PROVIDER_DATA,agentProviderListDataError:e.Error.GET_AGENT_PROVIDER_DATA,postProviderUserLoading:e.Loading.POST_PROVIDER_USER,postProviderUserError:e.Error.POST_PROVIDER_USER,providerUserMessage:e.Provider.providerUserMessage})),{postProviderUser:$,resetReduxState:y,getAgentProviderList:P,getProviderList:E,resetLoadingRedux:R,resetErrorRedux:j})(D);var S=r(50248);const{getProviderUserData:T,resetReduxState:w}=p.A,{resetLoadingRedux:U}=m.A,{resetErrorRedux:_}=u.A;class k extends o().Component{constructor(e){super(e),this.resetReduxState=()=>{this.props.resetReduxState()},this.handleShowAddProviderUserModal=()=>{this.props.resetReduxState(["userProfile"]),this.props.resetLoadingRedux(["GET_USER_PROFILE"]),this.props.resetErrorRedux(["GET_USER_PROFILE"]),this.setState({showAddProviderUserModal:!0})},this.handleCloseAddProviderUserModal=()=>{this.setState({showAddProviderUserModal:!1})},this.state={providerUserListData:[],providerMessage:"",showAddProviderUserModal:!1}}componentDidMount(){this.props.getProviderUserData()}componentWillUnmount(){this.resetReduxState()}render(){const{providerMessage:e,showAddProviderUserModal:t}=this.state,{providerUserListData:r,providerUserListDataError:a,providerUserListDataLoading:o,permissions:i}=this.props,p=r?r.length:0,h=[{key:"id",title:(0,b.jsx)("div",{style:{display:"flex",marginLeft:"20px",paddingTop:"2px"},children:(0,b.jsx)("span",{children:"User Id"})}),dataIndex:"id"},{key:"email",title:(0,b.jsx)("div",{style:{display:"flex",marginLeft:"20px",paddingTop:"2px"},children:(0,b.jsx)("span",{children:"Email"})}),dataIndex:"email"},{key:"name",title:(0,b.jsx)("div",{style:{display:"flex",marginLeft:"20px",paddingTop:"2px"},children:(0,b.jsx)("span",{children:"Name"})}),dataIndex:"name"},{key:"phone",title:(0,b.jsx)("div",{style:{display:"flex",marginLeft:"20px",paddingTop:"2px"},children:(0,b.jsx)("span",{children:"Phone"})}),dataIndex:"phone"},{key:"provider",title:(0,b.jsx)("div",{style:{display:"flex",marginLeft:"20px",paddingTop:"2px"},children:(0,b.jsx)("span",{children:"Provider"})}),dataIndex:"provider"},{key:"agent_provider",title:(0,b.jsx)("div",{style:{display:"flex",marginLeft:"20px",paddingTop:"2px"},children:(0,b.jsx)("span",{children:"Agent Provider"})}),dataIndex:"agent_provider"}];return(0,b.jsx)(x.A,{children:(0,b.jsxs)(l.A,{className:"referral-table",style:{color:"#788195"},children:[(0,b.jsx)(L,{isOpen:t,onClosePopupForm:this.handleCloseAddProviderUserModal}),(0,b.jsx)(s.Row,{style:{width:"100%"},children:(0,b.jsx)(s.Col,{children:(0,b.jsx)(c.A,{status:"error",isNeedDisplay:a,onClose:()=>this.resetReduxState(),message:e})})}),(0,b.jsxs)(d.A,{children:[(0,b.jsxs)(s.Row,{style:{marginBottom:"10px"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{style:{float:"left",color:"#788195"},children:"Provider User List"}),(0,b.jsx)("div",{children:(0,b.jsx)("p",{style:{float:"left",color:"#4482FF",marginLeft:"10px",marginTop:"3px"},children:p})})]}),(0,b.jsx)("div",{style:{float:"right",display:"flex"},children:(0,b.jsx)(S.A,{permissionSetter:"ops.add_insurence_user",permissionGetter:i,children:(0,b.jsxs)(s.Button,{onClick:this.handleShowAddProviderUserModal,children:[(0,b.jsx)(s.Icon,{type:"plus",theme:"outlined"})," \xa0Add Provider User"]})})})]}),(0,b.jsx)(n.A,{columns:h,bordered:!0,rowKey:e=>e.InternalID,dataSource:r,loading:o,className:"isoSearchableTable",scroll:{x:!0}})]})]})})}}k.defaultProps={profileData:{}};const I=(0,i.connect)((e=>({profileData:e.Auth.profile,providerUserListData:e.Provider.providerUserList,providerUserListDataLoading:e.Loading.GET_PROVIDER_USER_DATA,providerUserListDataError:e.Error.GET_PROVIDER_USER_DATA})),{getProviderUserData:T,resetReduxState:w,resetLoadingRedux:U,resetErrorRedux:_})(k)},46893:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(21577),o=r(80878),i=r.n(o),s=r(34618),d=r(67050),l=r(93317);const n=i()(a.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,s.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,s.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,s.palette)("secondary",1)};
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
    color: ${(0,s.palette)("text",3)};
    border-bottom: 1px solid ${(0,s.palette)("border",0)};

    a {
      color: ${(0,s.palette)("primary",0)};
      ${(0,d.kY)()};

      &:hover {
        color: ${(0,s.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,s.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,s.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,s.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,s.palette)("border",0)};

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
      border-color: ${(0,s.palette)("primary",0)};
      ${(0,d.kY)()};
    }

    &:hover a {
      color: ${(0,s.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,s.palette)("primary",0)};
    border-color: ${(0,s.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,s.palette)("grayscale",6)};

    p {
      color: ${(0,s.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,s.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,s.palette)("secondary",1)};
    color: ${(0,s.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,d.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,s.palette)("secondary",1)};
    color: ${(0,s.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,d.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,s.palette)("primary",0)};
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
      border: 1px solid ${(0,s.palette)("border",0)};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,s.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,s.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,d.Vq)("3px 0 0 3px")};
        ${(0,d.kY)()};
        ${(0,d.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,s.palette)("secondary",7)};
          ${(0,d.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,s.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,s.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,s.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,s.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,s.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,d.kY)()};

        &:hover {
          background-color: ${(0,s.palette)("primary",1)};
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
        border: 1px solid ${(0,s.palette)("border",0)};
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
              solid ${(0,s.palette)("border",0)};
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
          border-right: 1px solid ${(0,s.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,s.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,s.palette)("border",0)};
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
          color: ${(0,s.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,s.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,d.Vq)("3px")};
          ${(0,d.MS)()};
          ${(0,d.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,s.palette)("border",0)};
            ${(0,d.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,s.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,s.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,s.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,s.palette)("grayscale",0)};
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
`,p=i().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,s.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,s.palette)("primary",0)};
      background-color: ${(0,s.palette)("primary",0)};
    }
  }
`,c=((0,l.A)(p),(0,l.A)(n))},36934:(e,t,r)=>{r.d(t,{A:()=>i});r(1502);var a=r(67816),o=r(70579);const i=e=>{let{isNeedDisplay:t,onClose:r=()=>{},status:i,message:s}=e;return t?(0,o.jsx)(a.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:s,type:i,closeText:"Close",onClose:r}):""}},21577:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(67816);const o=a.Table}}]);
//# sourceMappingURL=1855.b04a108a.chunk.js.map