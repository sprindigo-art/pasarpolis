"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3945],{43527:(e,t,s)=>{s.d(t,{T:()=>o});var r=s(80878);const o=s.n(r)().div`
  .button-cancel {
    width: 100%;
    background-color: #dc826e;
    margin-right: 8px;
    color: #fff;
  }

  .button-save {
    width: 100%;
    background-color: #6ebed2;
    margin-left: 8px;
    color: #fff;
  }
`},73945:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ee});var r=s(1502),o=s.n(r),a=s(24952),i=s(67816),n=s(74394),l=s.n(n),d=s(86178),c=s.n(d),p=s(38094),h=s.n(p),m=s(8600),u=s(26877),x=s(25211),g=s(97418),b=s(21577),C=s(80878),f=s.n(C),j=s(34618),y=s(67050),E=s(93317);const N=f()(b.A)`
  overflow: hidden;
  overflow-x: auto;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    color: ${(0,j.palette)("secondary",2)};
    font-size: 13px;
    background-color: ${(0,j.palette)("secondary",1)};
    border-bottom: 0;

    &.ant-table-column-sort {
      background: ${(0,j.palette)("secondary",1)};
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
    color: ${(0,j.palette)("text",3)};
    border-bottom: 1px solid ${(0,j.palette)("border",0)};

    a {
      color: ${(0,j.palette)("primary",0)};
      ${(0,y.kY)()};

      &:hover {
        color: ${(0,j.palette)("primary",4)};
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
    border-bottom: 1px solid ${(0,j.palette)("border",0)};
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 1px solid ${(0,j.palette)("border",0)};
  }

  .ant-table-pagination {
    float: ${e=>"rtl"===e["data-rtl"]?"left":"right"};
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${(0,j.palette)("border",0)};
  }

  .ant-pagination-disabled,
  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid ${(0,j.palette)("border",0)};

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
      border-color: ${(0,j.palette)("primary",0)};
      ${(0,y.kY)()};
    }

    &:hover a {
      color: ${(0,j.palette)("primary",0)};
    }
  }

  .ant-pagination-item-active {
    background-color: ${(0,j.palette)("primary",0)};
    border-color: ${(0,j.palette)("primary",0)};

    a {
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }
  }

  .ant-table-expanded-row {
    background: ${(0,j.palette)("grayscale",6)};

    p {
      color: ${(0,j.palette)("text",3)};
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;

    .ant-spin-dot i {
      color: ${(0,j.palette)("primary",0)};
    }
  }

  .ant-table-header {
    background-color: transparent;
  }

  .ant-table-title {
    background: ${(0,j.palette)("secondary",1)};
    color: ${(0,j.palette)("secondary",2)};
    font-size: 13px;
    font-weight: 500;
    padding: 16px 30px;
    ${(0,y.Vq)()};
  }

  .ant-table-footer {
    background: ${(0,j.palette)("secondary",1)};
    color: ${(0,j.palette)("secondary",2)};
    font-size: 12px;
    font-weight: 400;
    padding: 16px 30px;
    ${(0,y.Vq)()};
  }

  .ant-table-content {
    overflow-x: auto;
  }

  .ant-table-column-sorter-up.on .anticon-caret-up,
  .ant-table-column-sorter-down.on .anticon-caret-up,
  .ant-table-column-sorter-up.on .anticon-caret-down,
  .ant-table-column-sorter-down.on .anticon-caret-down {
    color: ${(0,j.palette)("primary",0)};
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
      border: 1px solid ${(0,j.palette)("border",0)};

      input {
        font-size: 14px;
        font-weight: 400;
        color: ${(0,j.palette)("text",3)};
        line-height: inherit;
        height: 36px;
        width: 100%;
        padding: 0 15px;
        margin: 0;
        border: 1px solid ${(0,j.palette)("secondary",7)};
        outline: 0 !important;
        overflow: hidden;
        background-color: #ffffff;
        ${(0,y.Vq)("3px 0 0 3px")};
        ${(0,y.kY)()};
        ${(0,y.MS)("none")};

        &:focus,
        &:hover {
          border-color: ${(0,j.palette)("secondary",7)};
          ${(0,y.MS)("none")};
        }

        &::-webkit-input-placeholder {
          color: ${(0,j.palette)("grayscale",0)};
        }

        &:-moz-placeholder {
          color: ${(0,j.palette)("grayscale",0)};
        }

        &::-moz-placeholder {
          color: ${(0,j.palette)("grayscale",0)};
        }
        &:-ms-input-placeholder {
          color: ${(0,j.palette)("grayscale",0)};
        }
      }

      button {
        font-size: 12px;
        font-weight: 400;
        padding: 0;
        text-transform: uppercase;
        color: #ffffff;
        background-color: ${(0,j.palette)("primary",0)};
        border: 0;
        outline: 0;
        height: 36px;
        padding: 0 15px;
        margin-left: -1px;
        cursor: pointer;
        border-radius: ${e=>"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"};
        ${(0,y.kY)()};

        &:hover {
          background-color: ${(0,j.palette)("primary",1)};
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
        border: 1px solid ${(0,j.palette)("border",0)};
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
              solid ${(0,j.palette)("border",0)};
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
          border-right: 1px solid ${(0,j.palette)("border",0)};

          &:first-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"0":"1px"}
              solid ${(0,j.palette)("border",0)};
          }

          &:last-child {
            border-left: ${e=>"rtl"===e["data-rtl"]?"1px":"0"}
              solid ${(0,j.palette)("border",0)};
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
          color: ${(0,j.palette)("text",3)};
          line-height: inherit;
          padding: 7px 10px;
          margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"};
          border: 1px solid ${(0,j.palette)("border",0)};
          outline: 0 !important;
          overflow: hidden;
          background-color: #ffffff;
          ${(0,y.Vq)("3px")};
          ${(0,y.MS)()};
          ${(0,y.kY)()};

          &:focus,
          &:hover {
            border-color: ${(0,j.palette)("border",0)};
            ${(0,y.MS)()};
          }

          &::-webkit-input-placeholder {
            color: ${(0,j.palette)("grayscale",0)};
          }

          &:-moz-placeholder {
            color: ${(0,j.palette)("grayscale",0)};
          }

          &::-moz-placeholder {
            color: ${(0,j.palette)("grayscale",0)};
          }
          &:-ms-input-placeholder {
            color: ${(0,j.palette)("grayscale",0)};
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
`,S=f().div`
  .isoCustomizedTableControlBar {
    margin-bottom: 40px;

    .ant-form-item {
      margin: ${e=>"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"};
    }

    .ant-form-item-label {
      label {
        color: ${(0,j.palette)("secondary",2)};

        &:after {
          margin: ${e=>"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"};
        }
      }
    }

    .ant-switch-checked {
      border-color: ${(0,j.palette)("primary",0)};
      background-color: ${(0,j.palette)("primary",0)};
    }
  }
`,P=((0,E.A)(S),(0,E.A)(N));var D=s(1603),w=s.n(D),v=s(96117),_=s(87291),T=s(36934),R=s(95916),$=s(70579);const M=i.Form.Item,k=i.Radio.Group,{resetStateCustomer:I,patchEditCustomer:A}=m.A,{resetLoadingRedux:O}=v.A,{resetErrorRedux:L}=_.A;class F extends o().Component{constructor(e){super(e),this.successEdit=()=>{i.notification.success({message:this.props.editCustomerMessage,description:""}),this.handleCancel()},this.resetState=()=>{this.setState(this.initState),this.props.resetStateCustomer(["editCustomerMessage"]),this.props.resetLoadingRedux(["PATCH_EDIT_CUSTOMER"]),this.props.resetErrorRedux(["PATCH_EDIT_CUSTOMER"])},this.onSubmit=async e=>{e.preventDefault();if(!await this.validateForm())return;const{form:t,userid:s,customerProfileData:r}=this.props,o=t.getFieldsValue();let a={...o,userid:s,id:(0,R.get)(r,"id"),dob:o.dob.format("YYYY-MM-DD")};this.props.patchEditCustomer(a)},this.handleCancel=()=>{this.props.form.resetFields(),this.props.onClosePopupForm(),this.resetState()},this.onChange=e=>{this.setState({radioValue:e.target.value})},this.state={providerListData:[],radioValue:""},this.initState=this.state}componentDidMount(){this.resetState()}componentWillReceiveProps(e){"Successfully edited"!==e.editCustomerMessage||e.patchEditCustomerError||e.patchEditCustomerLoading||this.successEdit()}async validateForm(){return new Promise((e=>{this.props.form.validateFields(((t,s)=>{e(!t)}))}))}render(){const{getFieldDecorator:e}=this.props.form,{customerProfileData:t,patchEditCustomerLoading:s,patchEditCustomerError:r,editCustomerMessage:o}=this.props,a=(0,R.get)(t,"dob","2000/01/01");return(0,$.jsxs)(i.Modal,{title:"Edit Customer Personal Info",visible:this.props.isOpen,onCancel:this.handleCancel,footer:null,closable:!0,maskClosable:!1,children:[(0,$.jsx)(T.A,{status:"error",isNeedDisplay:r,message:o}),(0,$.jsxs)(i.Form,{id:"personal-form",onSubmit:this.onSubmit,style:{marginTop:"10px"},children:[(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{sm:6,children:"Gender:"}),(0,$.jsx)(i.Col,{sm:18,children:(0,$.jsx)(M,{children:e("gender",{initialValue:(0,R.get)(t,"gender","male"),rules:[{required:!0,message:"Please select a gender"}]})((0,$.jsxs)(k,{onChange:this.onChange,children:[(0,$.jsx)(i.Radio,{value:"male",children:"Male"}),(0,$.jsx)(i.Radio,{value:"female",children:"Female"})]}))})})]}),(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{sm:6,children:"Birth date:"}),(0,$.jsx)(i.Col,{sm:18,children:(0,$.jsx)(M,{children:e("dob",{initialValue:c()(a,"YYYY/MM/DD"),rules:[{required:!0,message:"Please input a birth date"}]})((0,$.jsx)(i.DatePicker,{format:"DD-MM-YYYY"}))})})]}),(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{sm:6,children:"ID User (KTP):"}),(0,$.jsx)(i.Col,{sm:18,children:(0,$.jsx)(M,{children:e("ktp",{initialValue:(0,R.get)(t,"ktp",""),rules:[{required:!0,message:"Please input a KTP number"}]})((0,$.jsx)(i.Input,{}))})})]}),(0,$.jsx)(M,{children:(0,$.jsxs)("center",{children:[(0,$.jsx)(i.Button,{className:"button",style:{marginTop:"20px",marginRight:"20px"},onClick:this.handleCancel,children:"Cancel"},"cancel"),(0,$.jsx)(i.Button,{form:"personal-form",className:"button",type:"primary",htmlType:"submit",style:{marginTop:"20px"},loading:s,children:"Submit"},"submit")]})})]})]})}}const U=i.Form.create()(F);U.propTypes={customerProfileData:w().object},U.defaultProps={customerProfileData:{}};const Y=(0,a.connect)((e=>({patchEditCustomerLoading:e.Loading.PATCH_EDIT_CUSTOMER,patchEditCustomerError:e.Error.PATCH_EDIT_CUSTOMER,editCustomerMessage:e.Customer.editCustomerMessage})),{resetStateCustomer:I,patchEditCustomer:A,resetLoadingRedux:O,resetErrorRedux:L})(U),B=i.Form.Item,{resetStateCustomer:G,putEditContact:z}=m.A,{resetLoadingRedux:V}=v.A,{resetErrorRedux:q}=_.A;class H extends o().Component{constructor(e){super(e),this.successEdit=()=>{i.notification.success({message:this.props.editContactMessage,description:""}),this.handleCancel()},this.resetState=()=>{this.setState(this.initState),this.props.resetStateCustomer(["editContactMessage"]),this.props.resetLoadingRedux(["PUT_EDIT_CONTACT"]),this.props.resetErrorRedux(["PUT_EDIT_CONTACT"])},this.onSubmit=async e=>{e.preventDefault();if(!await this.validateForm())return;const{form:t,userid:s}=this.props;let r={...t.getFieldsValue(),userid:s};this.props.putEditContact(r)},this.handleCancel=()=>{this.props.form.resetFields(),this.props.onClosePopupForm(),this.resetState()},this.onChange=e=>{this.setState({radioValue:e.target.value})},this.state={providerListData:[],radioValue:""},this.initState=this.state}componentDidMount(){this.resetState()}componentWillReceiveProps(e){"Successfully edited"!==e.editContactMessage||e.patchEditContactError||e.patchEditContactLoading||this.successEdit()}async validateForm(){return new Promise((e=>{this.props.form.validateFields(((t,s)=>{e(!t)}))}))}render(){const{getFieldDecorator:e}=this.props.form,{email:t,phone:s,patchEditContactLoading:r,patchEditContactError:o,editContactMessage:a}=this.props;return(0,$.jsxs)(i.Modal,{title:"Edit Customer Contact Info",visible:this.props.isOpen,onCancel:this.handleCancel,footer:null,closable:!0,maskClosable:!1,children:[(0,$.jsx)(T.A,{status:"error",isNeedDisplay:o,message:a}),(0,$.jsxs)(i.Form,{id:"contact-form",onSubmit:this.onSubmit,style:{marginTop:"10px"},children:[(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{sm:6,children:"Email:"}),(0,$.jsx)(i.Col,{sm:18,children:(0,$.jsx)(B,{children:e("email",{initialValue:t,rules:[{required:!0,message:"Please input an email address"}]})((0,$.jsx)(i.Input,{}))})})]}),(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{sm:6,children:"Phone number:"}),(0,$.jsx)(i.Col,{sm:18,children:(0,$.jsx)(B,{children:e("phone",{initialValue:s,rules:[{required:!0,message:"Phone number cannot be empty"},{pattern:/^\d{2}-\d{1,}/,message:"Invalid phone number, format: XX-XXXXXX/[Country code]-[Phone no]"}]})((0,$.jsx)(i.Input,{disabled:!0}))})})]}),(0,$.jsx)(B,{children:(0,$.jsxs)("center",{children:[(0,$.jsx)(i.Button,{className:"button",style:{marginTop:"20px",marginRight:"20px"},onClick:this.handleCancel,children:"Cancel"},"cancel"),(0,$.jsx)(i.Button,{form:"contact-form",className:"button",type:"primary",htmlType:"submit",style:{marginTop:"20px"},loading:r,children:"Submit"},"submit")]})})]})]})}}const K=i.Form.create()(H);K.propTypes={userProfile:w().object.isRequired,userid:w().string.isRequired,email:w().string,phone:w().string},K.defaultProps={userProfile:{}};const X=(0,a.connect)((e=>({patchEditContactLoading:e.Loading.PUT_EDIT_CONTACT,patchEditContactError:e.Error.PUT_EDIT_CONTACT,editContactMessage:e.Customer.editContactMessage})),{resetStateCustomer:G,putEditContact:z,resetLoadingRedux:V,resetErrorRedux:q})(K),W=f().div`
  .customer-header-row{
    padding-top: 20px;

    .ant-col {
      border-bottom: '1px solid #E9E9E9';
      font-weight: bold;
    }
  }
  
  .customer-info{
    padding: 5px 0;

    div:first-child {
      padding-right: 10px;
    }

    div:nth-child(2) {
      word-break: break-all;
    }
  }
  
  .edit-modal-button{
    cursor: pointer;
    text-align: right;
  }

  .customer-name{
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
  }

  .customer-name::first-letter {
    text-transform: uppercase;
  }

  .count {
    font-weight: 600;
    margin-right: 4px;
  }

  .button-cancel {
    width: 100%;
    background-color: #dc826e;
    margin-right: 8px;
    color: #fff;
  }

  .button-save {
    width: 100%;
    background-color: #6ebed2;
    margin-left: 8px;
    color: #fff;
  }

  .font-size-75 {
    font-size: 75px;
  }

  .border-bottom-grey {
    border-bottom: 1px solid ${e=>e.theme.lightGrey};
  }

  .row-min-height {
    min-height: 460px;
  }

  .data-policies {
    background-color: ${e=>e.theme.lightGreen};
    padding: 20px;
    border-bottom: 1px solid ${e=>e.theme.lightGrey};         
  }

  .data-claims {
    background-color: ${e=>e.theme.limeYellow};
    padding: '20px';
    border-bottom: 1px solid ${e=>e.theme.lightGrey};
  }

  .policy-number {
    display: flex;
    padding-top: 2px;
  }

  .policy-detail {
    cursor: pointer;
    text-decoration: underline;
  }

  .policy-checkbox{
    padding-top: 2px,
    text-align: center;
  }

  .policy-checkbox-text {
    cursor: pointer;
    color: ${e=>e.theme.blue};;
  }

  .text-center {
    text-align: center;
  }
`;var J=s(93807),Q=s(50248),Z=s(43527),ee=s(91324);const te=i.Form.Item,{Option:se}=i.Select,{resetStateCustomer:re,putEditContact:oe}=m.A,{resetLoadingRedux:ae}=v.A,{resetErrorRedux:ie}=_.A;class ne extends o().Component{constructor(e){super(e),this.countDown=()=>{const e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),0===e&&clearInterval(this.timer)},this.onResend=()=>{this.props.onSend()},this.handleCancel=()=>{this.props.form.resetFields(),this.props.onClosePopupForm(),this.resetState()},this.handleResendOtp=()=>{this.props.onResend(),clearInterval(this.timer),this.timer=0,this.setState({seconds:180})},this.handleSave=(e,t)=>{this.props.form.validateFields(((e,s)=>{e||(t?this.props.onSubmit(s):this.props.onSave(s))}))},this.onChange=e=>{this.setState({radioValue:e.target.value})},this.renderCodeVerificationForm=()=>{const{form:e}=this.props,{time:t,seconds:s}=this.state,{getFieldDecorator:r}=e;return(0,$.jsxs)(Z.T,{children:[(0,$.jsxs)(i.Form,{children:[(0,$.jsx)("label",{children:"Input Verification Number"}),(0,$.jsx)(te,{children:r("otp",{rules:[{required:!0,message:"Cannot be empty"}]})((0,$.jsx)(i.Input,{disabled:0===s}))}),(0,$.jsxs)("div",{style:{color:"#999"},children:["Verification Code will expire after ",(0,$.jsxs)("span",{style:{color:"#000"},children:[t.m," minutes ",t.s," seconds"]})]})]}),(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{span:12,children:(0,$.jsx)(i.Button,{className:"button-cancel",onClick:this.handleResendOtp,children:"Resend"})}),(0,$.jsx)(i.Col,{span:12,children:(0,$.jsx)(i.Button,{onClick:e=>this.handleSave(e,!0),className:"button-save",children:"Submit"})})]})]})},this.renderModalContent=()=>{const{form:e,oldPhoneNumber:t}=this.props,{getFieldDecorator:s}=e,{updateMobileNumberStatus:r}=this.state,o=s("prefix",{initialValue:"62"})((0,$.jsx)(i.Select,{children:ee.aH.map(((e,t)=>(0,$.jsx)(se,{value:e.value,children:e.label},t)))}));if(void 0===r)return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(i.Form,{children:[(0,$.jsx)("label",{children:"Old Phone Number"}),(0,$.jsx)(te,{children:s("old_number",{rules:[{required:!0,message:"Cannot be empty"}],initialValue:`+${t}`})((0,$.jsx)(i.Input,{disabled:!0}))}),(0,$.jsx)("label",{children:"New Phone Number"}),(0,$.jsx)(te,{children:s("new_number",{rules:[{required:!0,message:"Phone number is not valid",min:7,max:17}]})((0,$.jsx)(i.Input,{addonBefore:o}))})]}),(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{span:12,children:(0,$.jsx)(i.Button,{onClick:this.props.onCancel,className:"button-cancel",children:"Cancel"})}),(0,$.jsx)(i.Col,{span:12,children:(0,$.jsx)(i.Button,{onClick:this.handleSave,className:"button-save",children:"Save"})})]})]})},this.state={time:{},seconds:180},this.timer=0}componentDidMount(){const e=this.secondsToTime(this.state.seconds);this.setState({time:e})}UNSAFE_componentWillReceiveProps(e){e.newNumberEntered&&this.startTimer()}startTimer(){0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}secondsToTime(e){const t=e%3600,s=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(s)}}render(){const{newNumberEntered:e}=this.props;return(0,$.jsx)($.Fragment,{children:e?this.renderCodeVerificationForm():this.renderModalContent()})}}const le=i.Form.create()(ne);le.propTypes={userProfile:w().object.isRequired,userid:w().string.isRequired,email:w().string,phone:w().string},le.defaultProps={userProfile:{}};const de=(0,a.connect)((e=>({patchEditContactLoading:e.Loading.PUT_EDIT_CONTACT,patchEditContactError:e.Error.PUT_EDIT_CONTACT,editContactMessage:e.Customer.editContactMessage})),{resetStateCustomer:re,putEditContact:oe,resetLoadingRedux:ae,resetErrorRedux:ie})(le);var ce=s(77980);const{getCustomer:pe,getPolicyByCustomer:he,getClaimByCustomer:me,resetStateCustomer:ue}=m.A,{sendOtp:xe,changeUserPhone:ge}=u.A,{getInsuranceCountData:be}=x.A,{resetLoadingRedux:Ce}=v.A,{resetErrorRedux:fe}=_.A;class je extends o().Component{constructor(e){var t;super(e),t=this,this.componentDidMount=()=>{const e=h().parse(this.props.location.search),t=this.props.match.params.user_id;e.userid=t,this.props.resetStateCustomer(),this.props.getCustomer(t),this.props.getClaimByCustomer({userid:t,page_size:10}),this.fetch(e),this.props.resetErrorRedux(["SEND_OTP","CHANGE_USER_PHONE"]),this.props.resetLoadingRedux(["SEND_OTP","CHANGE_USER_PHONE"])},this.fetch=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{offset:s,limit:r,userid:o}=e,a=Number(s)||0,i=Number(r)||10;delete e.offset,delete e.limit,t.setState({limit:i,offset:a},(()=>{t.props.getPolicyByCustomer({query:{limit:i,offset:a,userid:o}}),t.props.getInsuranceCountData({userid:o})}))},this.handleTableChange=e=>{const{history:t,location:s,match:r}=this.props,{pageSize:o,current:a}=e,i=o*(a-1),n={...h().parse(s.search),offset:i,limit:o},l=(0,J.A)(n);t.push({pathname:s.pathname,search:l}),this.fetch({...n,offset:i,limit:o,userid:r.params.user_id})},this.handleClaimPaginationChange=e=>{const t=this.props.match.params.user_id;this.props.getClaimByCustomer({userid:t,page_size:10,page:e.current})},this.claimDetailPage=e=>{const{history:t}=this.props;t.push(`/claims/${e}`)},this.showEditPersonalModal=()=>{this.setState({showEditPersonalModal:!0})},this.closeEditPersonalModal=()=>{this.setState({showEditPersonalModal:!1})},this.showEditContactModal=()=>{this.setState({showEditContactModal:!0})},this.closeEditContactModal=()=>{this.setState({showEditContactModal:!1})},this.onChangeCheckbox=e=>{const{internalIds:t}=this.state;this.setState({internalIds:[...t,e]})},this.handleCheckBoxChange=e=>{const{policyData:t}=this.props;if(e.target.checked){let e=[];t.map((t=>(e=[...e,t.InternalID],e))),this.setState({internalIds:e,allPoliciesSelected:!0})}else this.setState({internalIds:this.state.internalIds,allPoliciesSelected:!1})},this.handleOk=e=>{e&&this.setState({values:e});const t={type:"phone",partner:this.props.customerData.partner,phone:e?`${e.prefix}-${e.new_number}`:`${this.state.values.prefix}-${this.state.values.new_number}`};this.props.sendOtp(t),this.setState({openMobileChangePopup:!0})},this.handleCancel=()=>{this.setState({openMobileChangePopup:!1,newNumberEntered:!1})},this.onSubmit=e=>{const{otpData:t,customerData:s}=this.props,{values:r,internalIds:o}=this.state;if(o.length>0){const a={operation_id:t.operation_id,new_phone:`${r.prefix}-${r.new_number}`,name:s.name,email:s.email,partner:s.partner,otp:e.otp,internal_ids:o};this.props.changeUserPhone(a)}else(0,ce.D)("error","Please select policies to continue")},this.renderAddresses=()=>{const{customerData:e}=this.props;return e&&!(0,g.Im)(e)&&e.addresses.length?e.addresses.map(((e,t)=>(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Address:"}),(0,$.jsx)(i.Col,{sm:17,children:e.area})]},`address_${t}`))):(0,$.jsx)(i.Row,{className:"customer-info",children:(0,$.jsx)(i.Col,{sm:24,children:"No Address Found"})})},this.renderBankAccounts=()=>{const{customerData:e}=this.props;return e&&!(0,g.Im)(e)&&e.bank_accounts.length?e.bank_accounts.map(((e,t)=>(0,$.jsxs)(i.Row,{className:"customer-info",type:"flex",justify:"space-around",align:"middle",children:[(0,$.jsxs)(i.Col,{sm:7,children:["Account",(0,$.jsx)("br",{}),"Number"]}),(0,$.jsx)(i.Col,{sm:17,children:e.account_no})]},`bank_${t}`))):(0,$.jsx)(i.Row,{className:"customer-info",children:(0,$.jsx)(i.Col,{sm:24,children:"No Bank Account Found"})})},this.renderDocuments=()=>{const{customerData:e}=this.props;return e&&!(0,g.Im)(e)&&e.documents.length?e.documents.map(((e,t)=>[(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Name:"}),(0,$.jsx)(i.Col,{sm:17,children:e.name})]},`document_${t}`),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Uploaded:"}),(0,$.jsx)(i.Col,{sm:17,children:c()(e.created_at,"YYYY-MM-DD").format("ddd, DD-MM-YYYY")})]},`Uploaded_${t}`),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Link:"}),(0,$.jsx)(i.Col,{sm:17,children:(0,$.jsx)("a",{href:e.url,children:e.url})})]},`Link_${t}`)])):(0,$.jsx)(i.Row,{className:"customer-info",children:(0,$.jsx)(i.Col,{sm:24,children:"No Document Found"})})},this.renderCustomerProfile=()=>{const{customerData:e={},policyMetaData:t,claimData:s,permissions:r,customerDataLoading:o}=this.props,a=Number((t||{}).total_records||0);return(0,$.jsxs)(i.Card,{loading:o,bordered:!1,children:[(0,$.jsxs)(i.Row,{children:[(0,$.jsx)(i.Col,{sm:7,children:(0,$.jsx)(i.Icon,{type:"user",className:"font-size-75"})}),(0,$.jsxs)(i.Col,{sm:17,children:[(0,$.jsx)("div",{className:"customer-name",children:e.name}),(0,$.jsx)(i.Row,{children:(0,$.jsxs)("center",{children:[(0,$.jsxs)(i.Col,{sm:12,children:[(0,$.jsx)(i.Icon,{type:"safety-certificate"}),(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{className:"count",children:a}),"Policies"]})]}),(0,$.jsxs)(i.Col,{sm:12,children:[(0,$.jsx)(i.Icon,{type:"money-collect"}),(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{className:"count",children:s.meta_data&&s.meta_data.total_records}),"Claims"]})]})]})})]})]}),(0,$.jsxs)(i.Row,{className:"customer-header-row",children:[(0,$.jsx)(i.Col,{sm:20,className:"border-bottom-grey",children:"Personal Info"}),(0,$.jsx)(Q.A,{permissionGetter:r,permissionSetter:"ops.customer_edit_personal_info_360",children:(0,$.jsx)(i.Col,{sm:4,className:"border-bottom-grey",children:(0,$.jsx)("div",{className:"edit-modal-button",onClick:()=>this.showEditPersonalModal(),children:(0,$.jsx)(i.Icon,{type:"edit"})})})})]}),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Gender:"}),(0,$.jsx)(i.Col,{sm:17,children:l().get(e,"profile.gender")||"No Gender set"})]}),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Birth date:"}),(0,$.jsx)(i.Col,{sm:17,children:l().get(e,"profile.dob")?c()(e.profile.dob,"YYYY/MM/DD").format("DD-MM-YYYY"):"No date of birth"})]}),(0,$.jsxs)(i.Row,{className:"customer-info",type:"flex",justify:"space-around",align:"middle",children:[(0,$.jsxs)(i.Col,{sm:7,children:["ID User",(0,$.jsx)("br",{}),"(KTP/SIM)"]}),(0,$.jsx)(i.Col,{sm:17,children:l().get(e,"profile.ktp")||l().get(e,"profile.dl_no")||"No registered ID"})]}),(0,$.jsxs)(i.Row,{className:"customer-header-row",children:[(0,$.jsx)(i.Col,{sm:20,className:"border-bottom-grey",children:"Contact Info"}),!!r.includes("ops.customer_edit_contact_info_360")&&(0,$.jsx)(i.Col,{sm:4,className:"border-bottom-grey",children:(0,$.jsx)("div",{className:"edit-modal-button",onClick:()=>this.showEditContactModal(),children:(0,$.jsx)(i.Icon,{type:"edit"})})})]}),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Email:"}),(0,$.jsx)(i.Col,{sm:17,children:e.email})]}),(0,$.jsxs)(i.Row,{className:"customer-info",type:"flex",justify:"space-around",align:"middle",children:[(0,$.jsxs)(i.Col,{sm:7,children:["Phone",(0,$.jsx)("br",{}),"Number"]}),(0,$.jsx)(i.Col,{sm:17,children:e.phone})]}),(0,$.jsx)(i.Row,{className:"customer-header-row",children:(0,$.jsx)(i.Col,{sm:24,className:"border-bottom-grey",children:"Bank Account Info"})}),this.renderBankAccounts(),(0,$.jsx)(i.Row,{className:"customer-header-row",children:(0,$.jsx)(i.Col,{sm:24,className:"border-bottom-grey",children:"Address Info"})}),this.renderAddresses(),(0,$.jsx)(i.Row,{className:"customer-header-row",children:(0,$.jsx)(i.Col,{sm:24,className:"border-bottom-grey",children:"Document Info"})}),this.renderDocuments(),(0,$.jsx)(i.Row,{className:"customer-header-row",children:(0,$.jsx)(i.Col,{sm:24,className:"border-bottom-grey",children:"Account Setting"})}),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Language:"}),(0,$.jsx)(i.Col,{sm:17,children:"ind"===l().get(e,"profile.language_code")?"Bahasa Indonesia":"English"})]}),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Currency:"}),(0,$.jsx)(i.Col,{sm:17,children:"Rupiah"})]}),(0,$.jsxs)(i.Row,{className:"customer-info",children:[(0,$.jsx)(i.Col,{sm:7,children:"Timezone"}),(0,$.jsx)(i.Col,{sm:17,children:"UTC + 7"})]})]})},this.renderPolicyTable=()=>{const{policyData:e,policyMetaData:t,policyDataLoading:s,permissions:r}=this.props,{offset:o,limit:a,allPoliciesSelected:n}=this.state,l=Number((t||{}).total_records||0),d=[{key:"policyNo",title:(0,$.jsx)("div",{className:"policy-number",children:(0,$.jsxs)("span",{children:["Policy no /",(0,$.jsx)("br",{}),"Application No"]})}),dataIndex:"InsurancePolicyNo",render:(e,t)=>{const s="TEMP"===e||""===e?t.ApplicationNo:e;return(0,$.jsx)("span",{onClick:()=>this.policyDetailPage(t.InternalID,t),className:"policy-detail",children:s})},sorter:!0,sortDirections:["descend"]},{key:"productKey",title:(0,$.jsx)("div",{className:"policy-number",children:(0,$.jsx)("span",{children:"Product id"})}),dataIndex:"ProductKey",sorter:!0,sortDirections:["descend"]},{key:"policyState",title:(0,$.jsx)("div",{className:"policy-number",children:(0,$.jsx)("span",{children:"Status"})}),dataIndex:"PolicyState"},{key:"checkbox",title:(0,$.jsxs)("div",{className:"policy-checkbox",children:[(0,$.jsx)(Q.A,{permissionGetter:r,permissionSetter:"ops.change_user_number",children:(0,$.jsx)("div",{onClick:this.handlePolicyCheckBox,className:"policy-checkbox-text",children:"Change Mobile Number"})}),(0,$.jsx)("div",{children:(0,$.jsx)(i.Checkbox,{onChange:this.handleCheckBoxChange})})]}),render:e=>(0,$.jsx)("div",{className:"text-center",children:(0,$.jsx)(i.Checkbox,{onChange:()=>this.onChangeCheckbox(e),indeterminate:n})}),dataIndex:"InternalID"}];return(0,$.jsx)(P,{columns:d,rowKey:(e,t)=>t,loading:s,pagination:{pageSize:10,total:l,current:o/a+1},onChange:this.handleTableChange,dataSource:e,className:"isoSearchableTable"})},this.handlePolicyCheckBox=()=>{this.state.internalIds.length>0?this.setState({openMobileChangePopup:!0,newNumberEntered:!1}):(0,ce.D)("error","Please select Policies to continue")},this.renderClaimTable=()=>{const{claimData:e={},claimDataLoading:t}=this.props,{meta_data:s={}}=e,r=[{key:"claimNo",title:(0,$.jsx)("div",{className:"policy-number",children:(0,$.jsx)("span",{children:"Claim no"})}),dataIndex:"claim_no",render:(e,t)=>(0,$.jsx)("span",{className:"policy-detail",onClick:()=>this.claimDetailPage(t.claim_id),children:e}),sorter:!0,sortDirections:["descend"]},{key:"productKey",title:(0,$.jsx)("div",{className:"policy-number",children:(0,$.jsx)("span",{children:"Product id"})}),dataIndex:"product_key",sorter:!0,sortDirections:["descend"]},{key:"status",title:(0,$.jsx)("div",{className:"policy-number",children:(0,$.jsx)("span",{children:"Status"})}),dataIndex:"status"}];return(0,$.jsx)(P,{columns:r,rowKey:(e,t)=>t,loading:t,dataSource:e.data,className:"isoSearchableTable",pagination:{pageSize:10,total:s.total_records},onChange:this.handleClaimPaginationChange})},this.state={customerData:{},loading:!1,getCustomerMessage:"",policyData:[],claimData:[],offset:0,showEditPersonalModal:!1,showEditContactModal:!1,openMobileChangePopup:!1,internalIds:[],newNumberEntered:!1,values:void 0,allPoliciesSelected:!1}}UNSAFE_componentWillReceiveProps(e){if(this.setState({loading:!1}),e.sendOtpStatus&&!1===e.sendOtpLoading&&((0,ce.D)(e.sendOtpError?"error":"success",e.sendOtpStatus),this.setState({newNumberEntered:!e.sendOtpError})),!1===e.sendOtpError&&!1===e.sendOtpLoading&&(this.setState({newNumberEntered:!0}),this.props.resetErrorRedux(["SEND_OTP"]),this.props.resetLoadingRedux(["SEND_OTP"])),e.changeNumberStatus&&!1===e.changeUserPhoneLoading&&(0,ce.D)(e.changeUserPhoneError?"error":"success",e.changeNumberStatus),!1===e.changeUserPhoneError&&!1===e.changeUserPhoneLoading){this.setState({openMobileChangePopup:!1,newNumberEntered:!1});const e=h().parse(this.props.location.search),t=this.props.match.params.user_id;e.userid=t,this.fetch(e),this.props.resetErrorRedux(["CHANGE_USER_PHONE"]),this.props.resetLoadingRedux(["CHANGE_USER_PHONE"])}}policyDetailPage(e,t){const{push:s}=this.props.history;s({pathname:`/policy/${e}`,state:{ApplicationNo:t.ApplicationNo}})}render(){const{showEditPersonalModal:e,showEditContactModal:t,newNumberEntered:s}=this.state,{customerData:r={},getCustomerMessage:o,changeUserPhoneLoading:a,sendOtpLoading:n}=this.props;return(0,$.jsx)(W,{children:(0,$.jsxs)(i.Card,{bodyStyle:{padding:0},bordered:!1,children:[""!==o&&"Success"!==o&&(0,$.jsx)(i.Alert,{message:o,type:"error"}),(0,$.jsx)(Y,{isOpen:e,customerProfileData:(0,R.get)(r,"profile"),onClosePopupForm:e=>this.closeEditPersonalModal(e),userid:this.props.match.params.user_id}),(0,$.jsx)(X,{isOpen:t,email:(0,R.get)(r,"email"),phone:(0,R.get)(r,"phone"),onClosePopupForm:e=>this.closeEditContactModal(e),userid:this.props.match.params.user_id}),(0,$.jsx)(i.Modal,{title:"Change Phone Number",visible:this.state.openMobileChangePopup,onCancel:this.handleCancel,footer:null,children:(0,$.jsx)(i.Spin,{spinning:!!a||!!n,children:(0,$.jsx)(W,{children:(0,$.jsx)(de,{newNumberEntered:s,onCancel:()=>this.handleCancel(),onSave:e=>this.handleOk(e),onResend:()=>this.handleOk(),onSubmit:e=>this.onSubmit(e),oldPhoneNumber:r.phone})})})}),(0,$.jsxs)(i.Row,{type:"flex",justify:"center",className:"row-min-height",children:[(0,$.jsx)(i.Col,{sm:6,className:"border-bottom-grey",children:this.renderCustomerProfile()}),(0,$.jsxs)(i.Col,{sm:9,className:"border-bottom-grey",children:[(0,$.jsx)(i.Row,{children:(0,$.jsx)(i.Col,{sm:24,className:"data-policies",children:"Data Policies"})}),this.renderPolicyTable()]}),(0,$.jsxs)(i.Col,{sm:9,children:[(0,$.jsx)(i.Row,{children:(0,$.jsx)(i.Col,{sm:24,className:"data-claims",children:"Data Claims"})}),this.renderClaimTable()]})]})]})})}}const ye=i.Form.create({})(je),Ee=(0,a.connect)((e=>({customerData:e.Customer.customerData,getCustomerMessage:e.Customer.getCustomerMessage,customerDataLoading:e.Loading.GET_CUSTOMER,customerDataError:e.Error.GET_CUSTOMER,policyData:e.Customer.policyData,policyMetaData:e.Policy.metadata,policyDataLoading:e.Loading.GET_POLICY_CUSTOMER,policyDataError:e.Error.GET_POLICY_CUSTOMER,claimData:e.Customer.claimData,claimDataLoading:e.Loading.GET_CLAIM_CUSTOMER,claimDataError:e.Error.GET_CLAIM_CUSTOMER,sendOtpLoading:e.Loading.SEND_OTP,sendOtpError:e.Error.SEND_OTP,sendOtpStatus:e.Claims.sendOtpStatus,otpData:e.Claims.otpData,changeUserPhoneLoading:e.Loading.CHANGE_USER_PHONE,changeUserPhoneError:e.Error.CHANGE_USER_PHONE,changeNumberStatus:e.Claims.changeNumberStatus,state:e})),{getCustomer:pe,getPolicyByCustomer:he,getClaimByCustomer:me,resetStateCustomer:ue,resetLoadingRedux:Ce,resetErrorRedux:fe,sendOtp:xe,changeUserPhone:ge,getInsuranceCountData:be})(ye)},77980:(e,t,s)=>{s.d(t,{D:()=>o});var r=s(67816);const o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r.notification[e]({message:t,description:s||""})}},36934:(e,t,s)=>{s.d(t,{A:()=>a});s(1502);var r=s(67816),o=s(70579);const a=e=>{let{isNeedDisplay:t,onClose:s=()=>{},status:a,message:i}=e;return t?(0,o.jsx)(r.Alert,{style:{marginBottom:"10px",padding:"10px 50px 8px 10px"},message:i,type:a,closeText:"Close",onClose:s}):""}},21577:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(67816);const o=r.Table}}]);
//# sourceMappingURL=3945.6ffe71f9.chunk.js.map