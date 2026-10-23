"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[9730],{79730:(e,s,t)=>{t.r(s),t.d(s,{default:()=>oe});var r=t(80878),o=t.n(r);const i=o().div`
  width: 100%;
  min-height: calc(100vh - 54px);
  height: 100%;
  margin: 30px;
  .card {
    margin-bottom: 30px;
  }
`;var d=t(67816),n=t(1502),a=t(24952),h=t(95916);const l=o().div`
  .send-otp-button, .send-otp-button:hover, .send-otp-button:focus {
    background-color: #6ebed2;
    border-color: #6ebed2;
    width: 100%;
  }
`,c=o().div`
  .ant-input-number {
    width: 100%;
  }
  .verify-otp-button, .verify-otp-button:hover, .verify-otp-button:focus {
    background-color: #6ebed2;
    border-color: #6ebed2;
    width: ${e=>e.twoFAMethodTOTP?"100%":"48%"};
  }
  .resend-otp-button, .resend-otp-button:hover, .resend-otp-button:focus {
    background-color: #dc826e;
    border-color: #dc826e;
    width: 48%;
  }
`,p=o().div`
  .verify-otp-button, .verify-otp-button:hover, .verify-otp-button:focus {
    background-color: #6ebed2;
    border-color: #6ebed2;
    width: 100%;
  }
  .ant-input-number {
    width: 100%;
  }
  .qr-code-container {
    margin-bottom: 16px;
  }
  .qr-code {
    height: 150px !important;
    width: 150px !important;
  }
  .instruction-heading {
    font-weight: 600;
  }
  .instruction-points {
    font-size: 13px;
    color: #a9a9a9;
    margin-left: 18px;
    margin-top: 8px;
    margin-bottom: 14px;
  }
`,u=o().div`
  .heading {
    font-weight: 600;
  }
  .ant-row {
    margin-bottom: 8px;
  }
  .change-icon {
    width: 20px;
    margin-left: 4px;
    cursor: pointer;
  }
`,T=o().div`
  margin-right: 55px;
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  /* .ant-radio-wrapper {
    display: flex;
  } */
  .security-option-container {
    border: 1px solid #eee;
    padding: 12px;
    margin-top: 14px;
    cursor: pointer;
  }
  .security-heading {
    font-weight: 600;
  }
  .sub-security-heading {
    color: #a9a9a9;
    width: 100%;
  }
  .update-button {
    margin-top: 20px;
  }
  .disabled {
    cursor: not-allowed;
  }
  .setup-option {
    color: #1890ff;
    font-weight: 800;
    margin-left: 4px;
    cursor: pointer;
  }
`;var P=t(15643),m=t(91324),A=t(70579);const{sendOTPToUser:S}=P.A,O=d.Form.Item,{Option:g}=d.Select;class b extends n.Component{constructor(){super(...arguments),this.state={visible:!1},this.handleSubmit=e=>{e.preventDefault(),this.props.form.validateFields(((e,s)=>{if(!e){const{userData:e}=this.props,{phone_number:t,prefix:r}=s,o=`${r}-${t}`;if((0,h.get)(e,"phone")===o)return d.notification.error({message:"This number already exists with user. Please enter a different number to proceed."});this.props.sendOTPToUser({body:{otp_type:"sms",phone_number:o}})}}))}}componentDidMount(){this.setState({visible:this.props.visible})}UNSAFE_componentWillReceiveProps(e){const{visible:s}=e;s!==this.state.visible&&(this.setState({visible:s}),this.props.form.resetFields())}render(){const{form:e,sendSMSOTPLoading:s}=this.props,{getFieldDecorator:t}=e,r=t("prefix",{initialValue:"62"})((0,A.jsx)(d.Select,{children:m.aH.map(((e,s)=>(0,A.jsx)(g,{value:e.value,children:e.label},s)))}));return(0,A.jsx)(l,{children:(0,A.jsxs)(d.Form,{onSubmit:this.handleSubmit,children:[(0,A.jsx)(O,{label:"Phone Number",children:t("phone_number",{rules:[{required:!0,message:"Phone number is not valid",min:7,max:17}]})((0,A.jsx)(d.Input,{addonBefore:r}))}),(0,A.jsx)(d.Row,{type:"flex",children:(0,A.jsx)(d.Button,{type:"primary",className:"send-otp-button",htmlType:"submit",loading:!!s,children:"Send OTP"})})]})})}}const M=d.Form.create()(b),E=(0,a.connect)((e=>({userData:e.Auth.profile,sendSMSOTPLoading:e.Loading.SEND_SMS_OTP})),{sendOTPToUser:S})(M);var x=t(96117),f=t(87291);const{resetLoadingRedux:v}=x.A,{resetErrorRedux:_}=f.A,{verifyOTPAndAddPhone:y,resendUserOTP:N,verifyUserOTP:R}=P.A,D=d.Form.Item;class F extends n.Component{constructor(e){super(e),this.countDown=()=>{const e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),0===e&&clearInterval(this.timer)},this.handleSubmit=e=>{e.preventDefault(),this.props.form.validateFields(((e,s)=>{if(!e){const{sendSMSOtpData:e,update2FAMethodInProcess:t,selected2FAmethod:r}=this.props;t?this.props.verifyUserOTP({body:{...s,otp_type:r,operation_id:(0,h.get)(e,"operation_id")}}):this.props.verifyOTPAndAddPhone({body:{...s,operation_id:(0,h.get)(e,"operation_id")}})}}))},this.handleResendOTP=()=>{const{sendSMSOtpData:e={},selected2FAmethod:s}=this.props;this.props.resendUserOTP({body:{operation_id:(0,h.get)(e,"operation_id"),medium:"EMAIL_OTP"===s?"email":void 0}})},this.state={time:{},seconds:30,visible:!1},this.timer=0}componentDidMount(){const e=this.secondsToTime(this.state.seconds);this.setState({time:e,visible:this.props.visible}),this.startTimer(),this.props.resetLoadingRedux(["RESEND_USER_OTP"]),this.props.resetErrorRedux(["RESEND_USER_OTP"])}UNSAFE_componentWillReceiveProps(e){const{visible:s,resendOtpLoading:t,resendOtpError:r,resendOtpMessage:o}=e;!1===t&&(d.notification[r?"error":"success"]({message:o}),!1===r&&(this.timer=0,this.setState({seconds:30},(()=>this.startTimer()))),this.props.resetLoadingRedux(["RESEND_USER_OTP"]),this.props.resetErrorRedux(["RESEND_USER_OTP"])),s!==this.state.visible&&(this.setState({visible:s}),this.props.form.resetFields())}startTimer(){0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}secondsToTime(e){const s=e%3600,t=s%60;return{h:Math.floor(e/3600),m:Math.floor(s/60),s:Math.ceil(t)}}render(){const{form:e,verifyAndAddNumberLoading:s,resendOtpLoading:t,update2FAMethodInProcess:r,verifyUserOTPLoading:o,selected2FAmethod:i}=this.props,{time:n}=this.state,{getFieldDecorator:a}=e;return(0,A.jsx)(c,{twoFAMethodTOTP:r&&"TOTP"===i,children:(0,A.jsxs)(d.Form,{onSubmit:this.handleSubmit,children:[r&&"Verify OTP to update default OTP method",(0,A.jsx)(D,{label:"Enter OTP",children:a("otp",{rules:[{required:!0,message:"OTP is required"}]})((0,A.jsx)(d.InputNumber,{}))}),(0,A.jsxs)(d.Row,{type:"flex",justify:"space-between",children:[(r&&"TOTP"!==i||!r)&&(0,A.jsxs)(d.Button,{className:"resend-otp-button",type:"primary",onClick:this.handleResendOTP,loading:!!t,disabled:n.s>0,children:["Resend OTP ",n.s>0&&`(${n.s} sec)`]}),(0,A.jsx)(d.Button,{type:"primary",className:"verify-otp-button",htmlType:"submit",loading:!!s||!!o,children:"Verify OTP"})]})]})})}}const j=d.Form.create()(F),w=(0,a.connect)((e=>({sendSMSOtpData:e.User.sendSMSOtpData,verifyAndAddNumberLoading:e.Loading.VERIFY_AND_ADD_PHONE,verifyUserOTPLoading:e.Loading.VERIFY_USER_OTP,resendOtpLoading:e.Loading.RESEND_USER_OTP,resendOtpError:e.Error.RESEND_USER_OTP,resendOtpMessage:e.User.resendUserOTPMessage})),{verifyOTPAndAddPhone:y,resendUserOTP:N,verifyUserOTP:R,resetLoadingRedux:v,resetErrorRedux:_})(j),{resetLoadingRedux:L}=x.A,{resetErrorRedux:U}=f.A,{updateTopbarActiveModal:I}=P.A;class V extends n.Component{constructor(){super(...arguments),this.state={showAddPhoneNumberModal:!1,showVerifyOTPModal:!1},this.handleAddPhoneNumber=()=>{this.setState({showAddPhoneNumberModal:!0}),this.props.updateTopbarActiveModal("profile")}}componentDidMount(){this.props.resetLoadingRedux(["SEND_SMS_OTP","VERIFY_AND_ADD_PHONE"]),this.props.resetErrorRedux(["SEND_SMS_OTP","VERIFY_AND_ADD_PHONE"])}UNSAFE_componentWillReceiveProps(e){const{sendSMSOTPLoading:s,sendSMSOTPError:t,sendSMSOTPMessage:r,verifyAndAddNumberLoading:o,verifyAndAddNumberError:i,verifyAndAddNumberMessage:n,topbarActiveModal:a}=e,h="profile"===a;h&&!1===s&&(d.notification[t?"error":"success"]({message:r}),!1===t&&this.setState({showVerifyOTPModal:!0,showAddPhoneNumberModal:!1}),this.props.resetLoadingRedux(["SEND_SMS_OTP"]),this.props.resetErrorRedux(["SEND_SMS_OTP"])),h&&!1===o&&(d.notification[i?"error":"success"]({message:n}),!1===i&&this.setState({showVerifyOTPModal:!1,showAddPhoneNumberModal:!1}),this.props.resetLoadingRedux(["VERIFY_AND_ADD_PHONE"]),this.props.resetErrorRedux(["VERIFY_AND_ADD_PHONE"]))}render(){const{userData:e={}}=this.props,{showAddPhoneNumberModal:s,showVerifyOTPModal:t}=this.state;return(0,A.jsxs)(u,{children:[s&&(0,A.jsx)(d.Modal,{visible:!0,title:"Add Phone Number",footer:null,onCancel:()=>this.setState({showAddPhoneNumberModal:!1}),children:(0,A.jsx)(E,{visible:s})}),t&&(0,A.jsx)(d.Modal,{visible:!0,title:"Verify OTP",footer:null,onCancel:()=>this.setState({showVerifyOTPModal:!1}),children:(0,A.jsx)(w,{visible:t})}),(0,A.jsxs)(d.Row,{children:[(0,A.jsx)(d.Col,{span:8,className:"heading",children:"Name:"}),(0,A.jsx)(d.Col,{children:(0,h.get)(e,"name")})]}),(0,A.jsxs)(d.Row,{children:[(0,A.jsx)(d.Col,{span:8,className:"heading",children:"Email:"}),(0,A.jsx)(d.Col,{children:(0,h.get)(e,"email")})]}),(0,A.jsxs)(d.Row,{children:[(0,A.jsx)(d.Col,{span:8,className:"heading",children:"Phone:"}),(0,A.jsxs)(d.Col,{children:[(0,h.get)(e,"phone"),(0,A.jsx)("img",{src:`${m.Fm}/pencil-icon.png`,alt:"edit-icon",className:"change-icon",onClick:this.handleAddPhoneNumber})]})]})]})}}const C=(0,a.connect)((e=>({userData:e.Auth.profile,sendSMSOTPLoading:e.Loading.SEND_SMS_OTP,sendSMSOTPError:e.Error.SEND_SMS_OTP,sendSMSOTPMessage:e.User.sendSMSOtpMessage,verifyAndAddNumberLoading:e.Loading.VERIFY_AND_ADD_PHONE,verifyAndAddNumberError:e.Error.VERIFY_AND_ADD_PHONE,verifyAndAddNumberMessage:e.User.verifyAndAddNumberMessage,topbarActiveModal:e.User.topbarActiveModal})),{resetLoadingRedux:L,resetErrorRedux:U,updateTopbarActiveModal:I})(V);var Y=t(91006),H=t.n(Y);const{resetLoadingRedux:k}=x.A,{resetErrorRedux:q}=f.A,{getTOTPSharedSecret:$,verifyTOTP:B}=P.A,G=d.Form.Item;class W extends n.Component{constructor(){super(...arguments),this.state={visible:!1},this.handleSubmit=e=>{e.preventDefault(),this.props.form.validateFields(((e,s)=>{e||this.props.verifyTOTP({body:s})}))}}componentDidMount(){this.props.getTOTPSharedSecret(),this.setState({visible:this.props.visible})}UNSAFE_componentWillReceiveProps(e){const{visible:s,totpSharedSecretLoading:t,totpSharedSecretError:r,totpSharedSecretMessage:o}=e;!1===t&&r&&(d.notification.error({message:o}),this.props.resetLoadingRedux(["GET_TOTP_SHARED_SECRET"]),this.props.resetErrorRedux(["GET_TOTP_SHARED_SECRET"])),s!==this.state.visible&&(s&&this.props.getTOTPSharedSecret(),this.setState({visible:s}),this.props.form.resetFields())}render(){const{form:e,totpSharedSecretLoading:s,totpSharedSecret:t={},verifyTOTPLoading:r}=this.props,{getFieldDecorator:o}=e;return(0,A.jsx)(d.Spin,{spinning:!!s,children:(0,A.jsxs)(p,{children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:"instruction-heading",children:"Complete following steps to configure Time based OTP"}),(0,A.jsxs)("div",{className:"instruction-points",children:[(0,A.jsx)("div",{children:"1. Install/Open the authenticator app on your device"}),(0,A.jsx)("div",{children:"2. Scan the below image"}),(0,A.jsx)("div",{children:"3. Enter the OTP in the below input box"}),(0,A.jsxs)("div",{children:["4. Click on ",(0,A.jsx)("b",{children:"Verify OTP"})," button"]})]})]}),(0,A.jsx)(d.Row,{type:"flex",justify:"center",className:"qr-code-container",children:(0,A.jsx)(H(),{className:"qr-code",value:(0,h.get)(t,"config_url","")})}),(0,A.jsxs)(d.Form,{onSubmit:this.handleSubmit,children:[(0,A.jsx)(G,{label:"Enter OTP",children:o("otp",{rules:[{required:!0,message:"OTP is required"}]})((0,A.jsx)(d.InputNumber,{}))}),(0,A.jsx)(d.Row,{type:"flex",children:(0,A.jsx)(d.Button,{type:"primary",className:"verify-otp-button",htmlType:"submit",loading:!!r,children:"Verify OTP"})})]})]})})}}const z=d.Form.create()(W),J=(0,a.connect)((e=>({userData:e.Auth.profile,totpSharedSecret:e.User.totpSharedSecret,totpSharedSecretLoading:e.Loading.GET_TOTP_SHARED_SECRET,totpSharedSecretError:e.Error.GET_TOTP_SHARED_SECRET,totpSharedSecretMessage:e.User.totpSharedSecretMessage,verifyTOTPLoading:e.Loading.VERIFY_TOTP})),{getTOTPSharedSecret:$,verifyTOTP:B,resetLoadingRedux:k,resetErrorRedux:q})(z),{update2FAMethod:K,sendOTPToUser:Q,updateTopbarActiveModal:X}=P.A,{resetLoadingRedux:Z}=x.A,{resetErrorRedux:ee}=f.A,se=d.Radio.Group;class te extends n.Component{constructor(){super(...arguments),this.state={selected2FAmethod:"EMAIL_OTP",showAddPhoneNumberModal:!1,showVerifyOTPModal:!1,showAddDeviceModal:!1,update2FAMethodInProcess:!1},this.handle2FAchange=e=>{"SMS_OTP"===e&&this.isSMSOTPDisabled()||"TOTP"===e&&this.isTOTPDisabled()||this.setState({selected2FAmethod:e})},this.isSMSOTPDisabled=()=>{const{userProfile:e={}}=this.props,{phone:s}=e;return!s},this.isTOTPDisabled=()=>{const{userProfile:e={}}=this.props,{totpEnabled:s}=e;return!s},this.handleAddPhoneNumber=()=>{this.setState({showAddPhoneNumberModal:!0,update2FAMethodInProcess:!1}),this.props.updateTopbarActiveModal("security")},this.handleAddDevice=()=>{this.setState({showAddDeviceModal:!0,update2FAMethodInProcess:!1}),this.props.updateTopbarActiveModal("security")},this.handleVerifyOTPAndUpdate2FAMethod=()=>{const{selected2FAmethod:e}=this.state;"TOTP"!==e&&this.props.sendOTPToUser({body:{otp_type:"SMS_OTP"===e?"sms":"email",template_type:"2FA"}}),this.setState({showVerifyOTPModal:!0,update2FAMethodInProcess:!0}),this.props.updateTopbarActiveModal("security")},this.handleVerifyModalCancel=()=>{this.setState({showVerifyOTPModal:!1,update2FAMethodInProcess:!1})},this.handleAddPhoneNumberModalCancel=()=>{this.setState({showAddPhoneNumberModal:!1})},this.handleAddTOTPDeviceModalCancel=()=>{this.setState({showAddDeviceModal:!1})}}componentDidMount(){const{userProfile:e={}}=this.props;this.setState({selected2FAmethod:(0,h.get)(e,"default2FAOption")}),this.props.resetLoadingRedux(["SEND_SMS_OTP","VERIFY_AND_ADD_PHONE","VERIFY_TOTP","UPDATE_2FA_METHOD","VERIFY_USER_OTP"]),this.props.resetErrorRedux(["SEND_SMS_OTP","VERIFY_AND_ADD_PHONE","VERIFY_TOTP","UPDATE_2FA_METHOD","VERIFY_USER_OTP"])}componentWillReceiveProps(e){const{sendSMSOTPLoading:s,sendSMSOTPError:t,sendSMSOTPMessage:r,verifyAndAddNumberLoading:o,verifyAndAddNumberError:i,verifyAndAddNumberMessage:n,verifyTOTPLoading:a,verifyTOTPError:h,verifyTOTPMessage:l,verifyUserOTPLoading:c,verifyUserOTPError:p,verifyUserOTPMessage:u,update2FAMethodLoading:T,update2FAMethodError:P,update2FAMethodMessage:m,topbarActiveModal:A}=e,{selected2FAmethod:S}=this.state,O="security"===A;O&&!1===s&&(d.notification[t?"error":"success"]({message:r}),!1===t?this.setState({showVerifyOTPModal:!0,showAddPhoneNumberModal:!1}):this.setState({showAddPhoneNumberModal:!1,update2FAMethodInProcess:!1,showVerifyOTPModal:!1}),this.props.resetLoadingRedux(["SEND_SMS_OTP"]),this.props.resetErrorRedux(["SEND_SMS_OTP"])),O&&!1===o&&(d.notification[i?"error":"success"]({message:n}),!1===i&&(this.props.update2FAMethod({body:{auth_type:"SMS_OTP"}}),this.setState({showVerifyOTPModal:!1,selected2FAmethod:"SMS_OTP"})),this.props.resetLoadingRedux(["VERIFY_AND_ADD_PHONE"]),this.props.resetErrorRedux(["VERIFY_AND_ADD_PHONE"])),O&&!1===a&&(d.notification[h?"error":"success"]({message:l}),!1===h&&(this.props.update2FAMethod({body:{auth_type:"TOTP"}}),this.setState({showAddDeviceModal:!1,selected2FAmethod:"TOTP"})),this.props.resetLoadingRedux(["VERIFY_TOTP"]),this.props.resetErrorRedux(["VERIFY_TOTP"])),!1===T&&(d.notification[P?"error":"success"]({message:m}),this.props.resetLoadingRedux(["UPDATE_2FA_METHOD"]),this.props.resetErrorRedux(["UPDATE_2FA_METHOD"])),!1===c&&(d.notification[p?"error":"success"]({message:u}),!1===p&&(this.setState({update2FAMethodInProcess:!1,showVerifyOTPModal:!1}),this.props.update2FAMethod({body:{auth_type:S}})),this.props.resetLoadingRedux(["VERIFY_USER_OTP"]),this.props.resetErrorRedux(["VERIFY_USER_OTP"]))}render(){const{userProfile:e={},update2FAMethodLoading:s}=this.props,{selected2FAmethod:t,showAddPhoneNumberModal:r,showVerifyOTPModal:o,showAddDeviceModal:i,update2FAMethodInProcess:n}=this.state,{default2FAOption:a="EMAIL_OTP"}=e,h=this.isSMSOTPDisabled(),l=this.isTOTPDisabled();return(0,A.jsxs)(T,{children:[r&&(0,A.jsx)(d.Modal,{visible:!0,title:"Add Phone Number",footer:null,onCancel:this.handleAddPhoneNumberModalCancel,children:(0,A.jsx)(E,{visible:r})}),o&&(0,A.jsx)(d.Modal,{visible:!0,title:"Verify OTP",footer:null,onCancel:this.handleVerifyModalCancel,children:(0,A.jsx)(w,{visible:o,update2FAMethodInProcess:n,selected2FAmethod:t})}),i&&(0,A.jsx)(d.Modal,{visible:!0,title:"Add TOTP Device",footer:null,onCancel:this.handleAddTOTPDeviceModalCancel,children:(0,A.jsx)(J,{visible:i})}),(0,A.jsx)("div",{className:"heading",children:"2-Factor Authentication"}),(0,A.jsx)("div",{className:"sub-heading",children:"Select default 2FA method"}),(0,A.jsxs)(se,{value:t,defaultValue:a,children:[(0,A.jsxs)(d.Row,{type:"flex",align:"middle",className:"security-option-container",onClick:()=>this.handle2FAchange("EMAIL_OTP"),children:[(0,A.jsx)(d.Col,{span:2,children:(0,A.jsx)(d.Radio,{value:"EMAIL_OTP"})}),(0,A.jsxs)(d.Col,{span:22,children:[(0,A.jsx)("div",{className:"security-heading",children:"Email OTP"}),(0,A.jsx)("div",{className:"sub-security-heading",children:"User will receive OTP through registered email address."})]})]}),(0,A.jsxs)(d.Row,{type:"flex",align:"middle",className:`security-option-container ${h&&"disabled"}`,onClick:()=>this.handle2FAchange("SMS_OTP"),children:[(0,A.jsx)(d.Col,{span:2,children:(0,A.jsx)(d.Radio,{value:"SMS_OTP",disabled:h})}),(0,A.jsxs)(d.Col,{span:22,children:[(0,A.jsx)("div",{className:"security-heading",children:"SMS OTP"}),(0,A.jsxs)("div",{className:"sub-security-heading",children:["User will receive OTP through registered mobile number.",h&&(0,A.jsx)("span",{className:"setup-option",onClick:this.handleAddPhoneNumber,children:"Add phone number"})]})]})]}),(0,A.jsxs)(d.Row,{type:"flex",align:"middle",className:`security-option-container ${l&&"disabled"}`,onClick:()=>this.handle2FAchange("TOTP"),children:[(0,A.jsx)(d.Col,{span:2,children:(0,A.jsx)(d.Radio,{value:"TOTP",disabled:l})}),(0,A.jsxs)(d.Col,{span:22,children:[(0,A.jsx)("div",{className:"security-heading",children:"TOTP"}),(0,A.jsxs)("div",{className:"sub-security-heading",children:["Time based OTP. User will need to add authentication code present in authenticator app to login.",l&&(0,A.jsx)("span",{className:"setup-option",onClick:this.handleAddDevice,children:"Add Device"})]})]})]})]}),(0,A.jsx)(d.Row,{type:"flex",justify:"end",children:(0,A.jsx)(d.Button,{type:"primary",className:"update-button",onClick:this.handleVerifyOTPAndUpdate2FAMethod,loading:!!s,children:"Proceed"})})]})}}const re=(0,a.connect)((e=>({userProfile:e.Auth.profile,sendSMSOTPLoading:e.Loading.SEND_SMS_OTP,sendSMSOTPError:e.Error.SEND_SMS_OTP,sendSMSOTPMessage:e.User.sendSMSOtpMessage,verifyAndAddNumberLoading:e.Loading.VERIFY_AND_ADD_PHONE,verifyAndAddNumberError:e.Error.VERIFY_AND_ADD_PHONE,verifyAndAddNumberMessage:e.User.verifyAndAddNumberMessage,verifyTOTPLoading:e.Loading.VERIFY_TOTP,verifyTOTPError:e.Error.VERIFY_TOTP,verifyTOTPMessage:e.User.verifyTOTPMessage,update2FAMethodLoading:e.Loading.UPDATE_2FA_METHOD,update2FAMethodError:e.Error.UPDATE_2FA_METHOD,update2FAMethodMessage:e.User.update2FAMethodMessage,verifyUserOTPLoading:e.Loading.VERIFY_USER_OTP,verifyUserOTPError:e.Error.VERIFY_USER_OTP,verifyUserOTPMessage:e.User.verifyUserOTPMessage,topbarActiveModal:e.User.topbarActiveModal})),{update2FAMethod:K,sendOTPToUser:Q,resetLoadingRedux:Z,resetErrorRedux:ee,updateTopbarActiveModal:X})(te),oe=()=>(0,A.jsxs)(i,{className:"bg-dark",children:[(0,A.jsx)(d.Card,{className:"card",title:"User Profile",children:(0,A.jsx)(C,{})}),(0,A.jsx)(d.Card,{className:"card",title:"Security",children:(0,A.jsx)(re,{})})]})}}]);
//# sourceMappingURL=9730.7fa12e4c.chunk.js.map