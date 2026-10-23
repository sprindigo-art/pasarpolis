(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[48],{1017:function(e,t,n){"use strict";t.a=()=>{if(document.referrer){return new URL(document.referrer)}return{}}},1031:function(e,t,n){"use strict";const o=["pasarpolis.io","pasarpolis.com"];t.a=e=>o.find((t=>e.includes(t)))},1455:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(52),a=n(1152),s=n(1112),c=n(172),l=n(946),p=n(82),u=n(62),d=n(980),f=n(996),h=n(148),m=n(14),b=n(11),y=n(328),g=b.c.div`
  .title-text {
    text-align: center;
  }
  .content-row {
    transform: translateY(100%);
    margin:0 !important;
    display:flex !important;
    justify-content:center !important;
  }
  .back-button {
    margin-top: 20px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .otp-box {
      margin-bottom:-35% !important;
    }
    .container {
      background-image: url(${Object(y.a)("LANDING_PAGE_BG_MOBILE")});
      background-position: top ;
      background-repeat: no-repeat;
      background-size: 100% 150%;
      width:100%;
    }
    .content-row {
      transform: translateY(100%);
      display:flex !important;
      justify-content:center !important;
      padding-top: 20px;
      margin: 10px !important;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 75px;

    .content-row {
      margin:0 !important;
      display:flex !important;
      justify-content:center !important;
      padding-top: 20px;
      margin: 10px !important;
    }
    hr{
      width:92px;
      color: #f6d300;
      border: solid 1px;
    }
    .ant-input-disabled{
      color: #000;
    }
    .hero-title-main{
      text-align: center;
    }
    .hero-title {
      text-align: center;
    }
    .hero-title-golife {
      text-align:center;
    }
    .hero-title p {
      font-transform: uppercase;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: .3px;
      z-index: 100000;
    }
    .hero-title > div {
      font-transform: uppercase;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: .3px;
      z-index: 100000;
    }
    .hero-title-main p {
      font-transform: uppercase;
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: .3px;
      z-index: 100000;
    }
    .hero-title-main > div {
      font-transform: uppercase;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: .3px;
      z-index: 100000;
    }
    .hero-title-golife p {
      text-transform: uppercase;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: .3px;
      z-index: 100000;
    }
    .divider-horizontal {
      border-bottom: 2px solid #f6d300;
      height: 5px;
      width: 30px;
      margin: 0 auto;
    }
    .sub-title p {
      padding-top: 15px;
      font-size: 14px;
      text-align: center;
    }
    .help {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
    .help p {
      text-decoration: underline;
      font-size: 12px;
      margin-bottom: 0;
      color: #1890ff;
      margin-top: 10px;
      cursor: pointer;
    }
    .btn-otp-container {
      text-align: center;
      display: flex;
    }
    .btn-otp {
      height: 50px;
      width: 100%;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 20px;
    }
    .ant-select .ant-select-enabled {
      width: 70px !important;
    }
    .input-phone {
      display: flex;
      align-items: center;
    }
    .input-phone img {
      width: 20px;
      height: auto;
    }
    .ant-input-group, .ant-input {
      height: 50px;
    }
    .ant-input-group-addon {
      background-color: #e5e5e5;
    }
    .phone-logo {
      margin-top: -20px;
    }
    .phone-label {
      display: none;
    }
    .ant-btn-primary {
      background-color: ${e=>e.secondaryColor};
      border: none;
    }
    .ant-btn:hover, .ant-btn:focus, .ant-btn-primary:hover, .ant-btn-primary:focus {
      border-color: ${e=>e.highlighterColor};
      background-color: ${e=>e.highlighterColor};
    }
    .ant-divider-horizontal {
      position: absolute;
      top: 45px;
    }
    .ant-form-explain {
      float: right;
      font-size: 12px;
    }
    .btn-countdown {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .ant-input:focus {
      border-color: #57a8e9 !important;
      outline: 0 !important;
      -webkit-box-shadow: 0 0 0 2px rgba(87,168,233, .2) !important;
      box-shadow: 0 0 0 2px rgba(87,168,233, .2) !important;
    }
    .desktop-help {
      display: none !important;
    }
    .otp-info {
      display: none;
    }
    div > .padded-container {
      padding: 0px 20px;
    }
    .container-divider {
      background-color: #F7F7F7;
      height: 10px;
    }
    .container .container-col {
      width: 100%;
      background-color: #ffffff;
    }
    .otp-box {
      width: 100%;
    }
    div .button-box {
      padding: 16px 21px;
      text-align: center;
    }
    .otp-button {
      height: 50px;
      width: 92%;
    }
    .hide-desktop {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .content-row {
      transform: none;
      justify-content: start !important;
    }
    .container {
      height: 100vh;
      background-image: url(${Object(y.a)("LANDING_PAGE_BG")});
      background-position: center ;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      left: 50px;
      right: 0;
    }
    .hero-title-main {
      text-align: center;
    }
    .hero-title {
      margin-top: 120px;
      text-align: center;
    }
    .hero-title-golife {
      margin-top: 165px;
      text-align: left;
    }
    .hero-title p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .hero-title-main p {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .hero-title-golife p {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .phone-logo {
      display: none;
    }
    .phone-label {
      display: box;
    }
    .ant-divider-horizontal {
      display: none;
    }
    .mobile-help {
      display: none !important;
    }
    .container .container-col {
      width: 600px;
    }
    .otp-box {
      border: 1px solid #d5d5d5;
      padding: 15px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
    }
    .otp-info {
      font-size: 12px;
      margin-top: -10px;
    }
    .sub-title p {
      font-weight: bold;
      padding-top: none;
    }
    .help p {
      float: right;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      color: #0f80e8;
    }
    .alert {
      clear: both !important;
    }
    .ant-form-explain {
      font-size: 12px;
    }
    .ant-btn-primary {
      background-color: ${e=>e.secondaryColor};
      border: none;
    }
    .ant-btn-primary:hover, .ant-btn-primary:focus, .ant-btn-primary:hover, .ant-btn-primary:focus {
      border-color: ${e=>e.highlighterColor};
      background-color: ${e=>e.highlighterColor};
    }
    .btn-otp-container {
      float: right;
      margin-bottom: 10px;
      margin-top: -10px;
    }
    .hide-desktop {
      display: box;
    }
    .otp-button {
      height: 50px;
      width: 92%;
    }
  }
  @media only screen and (min-width: 992px) {
    .container {
      height: 100vh;
      background-image: url(${Object(y.a)("LANDING_PAGE_BG")});
      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      left: 50px;
      right: 0;
    }
    .hero-title {
      margin-top: 120px;
      text-align: center;
    }
    .hero-title-main {
      margin-top: 120px;
      text-align: center;
    }
    .hero-title-golife {
      margin-top: 165px;
      text-align: left;
    }
    .hero-title p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .hero-title-main p {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .hero-title-golife p {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .phone-label {
      display: box;
    }
    .ant-divider-horizontal {
      display: none;
    }
    .mobile-help {
      display: none !important;
    }
    .container .container-col {
      width: 600px;
    }
    .otp-box {
      border: 1px solid #d5d5d5;
      padding: 15px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
    }
    .otp-info {
      font-size: 12px;
      margin-top: -10px;
    }
    .sub-title p {
      font-weight: bold;
      padding-top: none;
    }
    .btn-otp-container {
      float: right;
      margin-bottom: 10px;
      margin-top: -10px;
    }
    .help p {
      float: right;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      color: #0f80e8;
    }
    .alert {
      clear: both !important;
    }
    .ant-form-explain {
        font-size: 12px;
    }
    .ant-btn-primary {
      background-color: ${e=>e.secondaryColor};
      border: none;
    }
    .ant-btn-primary:hover, .ant-btn-primary:focus, .ant-btn-primary:hover, .ant-btn-primary:focus {
      border-color: ${e=>e.highlighterColor};
      background-color: ${e=>e.highlighterColor};
    }
    .otp-button {
      height: 50px;
      width: 92%;
    }
  }
  @media only screen and (min-width: 1200px) {
    hr{
      display:none;
    }
    .container {
      height: 100vh;
      background-image: url(${Object(y.a)("LANDING_PAGE_BG")});
      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      left: 50px;
      right: 0;
    }
    .positionStatic {
      position: static !important;
    }
    .hero-title {
      margin-top: 120px;
      text-align: center;
    }
    .hero-title-main {
      margin-top: 120px;
      text-align: center;
    }
    .hero-title-golife {
      margin-top: 165px;
      text-align: left;
    }
    .hero-title p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .hero-title-main p {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .hero-title-golife p{
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
      letter-spacing: .4px;
    }
    .phone-label {
      display: box;
    }
    .ant-divider-horizontal {
      display: none;
    }
    .mobile-help {
      display: none !important;
    }
    .container .container-col {
      // transform: translate(50%);
      width: 600px;
    }
    .otp-box {
      border: 1px solid #d5d5d5;
      padding: 15px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
    }
    .otp-info {
      font-size: 12px;
      margin-top: -10px;
    }
    .sub-title p {
      font-weight: bold;
      padding-top: none;
    }
    .btn-otp-container {
      float: right;
      margin-bottom: 10px;
      margin-top: -10px;
    }
    .help p {
      float: right;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      color: #0f80e8;
    }
    .alert {
      clear: both !important;
    }
    .ant-form-explain {
      font-size: 12px;
    }
    .ant-btn-primary {
      background-color: ${e=>e.secondaryColor};
      border: none;
    }
    .ant-btn-primary:hover, .ant-btn-primary:focus, .ant-btn-primary:hover, .ant-btn-primary:focus {
      border-color: ${e=>e.highlighterColor};
      background-color: ${e=>e.highlighterColor};
    }
    .otp-button {
      height: 50px;
      width: 92%;
    }
  }
`,v=n(977),x=n(966),O=n(1017),j=n(1031),C=n(67),w=n(16),N=n(47),E=n(10),k=n(2);const M=a.default.Item,Y=s.default.Option,{login:S,generateOtp:D,resetStatus:P,verifyOtp:T,authVerifyOtp:_,resendOtpRequest:A}=m.a;class R extends o.Component{constructor(e){var t;super(e),t=this,this.intlText=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:" "};return t.props.intl.formatMessage(e)},this.handleSubmit=async e=>{e.preventDefault();if(!await this.validateForm())return;const{form:t}=this.props,n=t.getFieldsValue();this.startTimer(),this.props.resetStatus(),this.props.generateOtp({phone:`${this.state.countryCode}-${n.mobile_number}`})},this.handleSubmitVerify=async e=>{e.preventDefault();if(!await this.validateForm())return;const{form:t,operationId:n}=this.props,o=t.getFieldsValue();this.props.resetStatus();const r={operation_id:n,otp:o.otp};this.props.authVerifyOtp({body:r})},this.resendOtp=()=>{if(this.resendCount<5){this.resendCount=this.resendCount+1,window.sessionStorage.setItem("count",this.resendCount);const{operationId:e}=this.state;this.props.resendOtpRequest({operationId:e,mobileNumber:`${this.state.countryCode}-${this.state.value}`})}else this.resendCount=0,window.sessionStorage.setItem("count",300),this.props.resetStatus(),this.props.generateOtp({phone:`${this.state.countryCode}-${this.state.value}`});this.startTimer()},this.msToHMS=e=>Object(w.i)(e),this.onChange=e=>{this.setState({value:e})},this.onChangeOtp=e=>{this.props.form.setFieldsValue({otp:e}),this.setState({otp:e})},this.showModal=()=>{this.setState({visible:!0})},this.handleCancel=e=>{this.setState({visible:!1})},this.back=()=>{this.props.resetStatus()},this.onCountryCodeSelect=e=>{this.setState({countryCode:e})},this.countryCodeOptions=()=>Object(k.jsxs)(s.default,{defaultValue:"+62",onSelect:this.onCountryCodeSelect,children:[Object(k.jsx)(Y,{value:"84",children:"+84"}),Object(k.jsx)(Y,{value:"66",children:"+66"}),Object(k.jsx)(Y,{value:"62",children:"+62"})]}),this.generateOtpForm=()=>{const{getFieldDecorator:e}=this.props.form,{sendPhoneOtpLoading:t,sendPhoneOtpError:n,errorMessage:o,verifyOtpMessage:r}=this.props;return Object(k.jsxs)("div",{className:"otp-box",style:{float:"left"},children:[Object(k.jsx)(c.default,{className:"padded-container",children:Object(k.jsx)("div",{className:"sub-title",children:Object(k.jsx)("p",{children:Object(k.jsx)(C.a,{id:"Masukkan nomor telepon terdaftar Anda untuk mengajukan klaim"})})})}),Object(k.jsx)("div",{className:"otp-info",children:Object(k.jsx)("p",{children:Object(k.jsx)(C.a,{id:"Dapatkan SMS berisi kode OTP lalu Sign In untuk klaim asuransi Anda"})})}),Object(k.jsxs)(a.default,{onSubmit:this.handleSubmit,id:"phone",children:[Object(k.jsxs)(c.default,{children:[Object(k.jsx)(c.default,{className:"padded-container",children:Object(k.jsx)("div",{className:"input-phone",children:Object(k.jsx)(M,{style:{width:"100%"},children:e("mobile_number",{rules:[{required:!0,message:Object(k.jsx)(C.a,{id:"Nomor handphone tidak boleh kosong"})},{validator:x.a.checkPhone}]})(Object(k.jsx)(v.a,{className:"mobile-number-input",addonBefore:this.countryCodeOptions(),onChange:this.onChange,minLength:"9",maxLength:"12"}))})})}),Object(k.jsx)(c.default,{className:"container-divider"}),Object(k.jsx)(c.default,{className:"padded-container",children:Object(k.jsx)("div",{className:"btn-otp-container",children:Object(k.jsx)(l.default,{type:"primary",className:"button btn-otp",htmlType:"submit",loading:!!t,disabled:!this.state.value,children:Object(k.jsx)(C.a,{id:"Kirim OTP"})})})})]}),Object(k.jsx)(c.default,{className:"mobile-help",children:Object(k.jsx)(p.a,{children:Object(k.jsx)("div",{className:"help",children:Object(k.jsx)("p",{onClick:this.showModal,children:Object(k.jsx)(C.a,{id:"Butuh Bantuan?"})})})})}),Object(k.jsx)(c.default,{className:"alert",children:(!!o&&!!n||r)&&this.renderErrorMessage(o||r)}),Object(k.jsx)(c.default,{className:"desktop-help",children:Object(k.jsx)(p.a,{children:Object(k.jsx)("div",{className:"help",children:Object(k.jsx)("p",{onClick:this.showModal,children:Object(k.jsx)(C.a,{id:"Butuh Bantuan?"})})})})})]})]})},this.verifyOtpForm=e=>{const{getFieldDecorator:t}=this.props.form,{sendPhoneOtpLoading:n,verifyOtpMessage:o,verifyAuthOtpError:i,verifyAuthOtpLoading:s}=this.props,{value:d}=this.state;return Object(k.jsx)("div",{className:"otp-box",style:{float:"left",marginTop:20},children:Object(k.jsx)(a.default,{onSubmit:this.handleSubmitVerify,id:"otp",children:Object(k.jsxs)("div",{children:[Object(k.jsxs)(c.default,{className:"padded-container",children:[Object(k.jsx)(c.default,{children:Object(k.jsxs)("div",{className:"input-phone",children:[Object(k.jsx)("div",{className:"phone-label",children:Object(k.jsx)("label",{children:Object(k.jsx)(C.a,{id:"No. Telp"})})}),Object(k.jsx)(M,{style:{width:"100%"},children:t("mobile_number",{rules:[{required:!1}]})(Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(p.a,{sm:24,md:0,children:Object(k.jsx)(v.a,{addonBefore:Object(k.jsx)(u.default,{type:"phone"}),onChange:this.onChange,disabled:!0,value:d})}),Object(k.jsx)("div",{className:"hide-desktop",children:Object(k.jsx)(p.a,{sm:0,md:24,children:Object(k.jsx)(v.a,{onChange:this.onChange,disabled:!0,value:d})})})]}))})]})}),Object(k.jsx)(c.default,{children:Object(k.jsxs)("div",{className:"input-phone",children:[Object(k.jsx)("div",{className:"phone-label",children:Object(k.jsx)("label",{children:Object(k.jsx)(C.a,{id:"OTP"})})}),Object(k.jsx)(M,{style:{width:"100%"},children:t("otp",{rules:[{required:!0,message:Object(k.jsx)(C.a,{id:"OTP tidak boleh kosong"})},{validator:x.a.checkOtp}]})(Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(p.a,{sm:24,md:0,children:Object(k.jsx)(v.a,{autoFocus:"autoFocus",type:"otp",addonBefore:Object(k.jsx)(u.default,{type:"lock"}),onChange:this.onChangeOtp,disabled:!1,minLength:6,maxLength:6})}),Object(k.jsx)("div",{className:"hide-desktop",children:Object(k.jsx)(p.a,{sm:0,md:24,children:Object(k.jsx)(v.a,{autoFocus:"autoFocus",type:"otp",onChange:this.onChangeOtp,disabled:!1,minLength:6,maxLength:6})})})]}))})]})})]}),Object(k.jsx)(c.default,{className:"container-divider"}),Object(k.jsx)(c.default,{children:Object(k.jsxs)("div",{className:"button-box",children:[Object(k.jsx)(p.a,{span:12,children:Object(k.jsxs)(l.default,{type:"primary",className:"otp-button",loading:!!n,disabled:this.state.stopwatch>0,onClick:this.resendOtp,children:[Object(k.jsx)(C.a,{id:"Kirim ulang OTP"}),this.state.stopwatch>0&&Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)("br",{}),this.msToHMS(this.state.stopwatch)]})]})}),Object(k.jsx)(p.a,{span:12,children:Object(k.jsx)(l.default,{type:"primary",className:"otp-button",htmlType:"submit",loading:!!s,disabled:!e||!this.state.value,children:Object(k.jsx)(C.a,{id:"Masuk"})})}),Object(k.jsxs)(p.a,{span:24,className:"back-button",children:[Object(k.jsx)("a",{onClick:()=>this.back(),children:Object(k.jsx)(C.a,{id:"Kembali"})}),"\xa0|\xa0",Object(k.jsx)("a",{onClick:this.showModal,children:Object(k.jsx)(C.a,{id:"Butuh Bantuan?"})})]}),!!o&&!!i&&this.renderErrorMessage(o)]})})]})})})},this.redirectionHandler=e=>{const t=Object(O.a)();t.pathname&&t.pathname.includes("/endorsement")&&Object(j.a)(t.host)?window.location.href=t.href:"/"===e?window.location.reload():window.history.pushState({},null,e)},this.state={visible:!1,isFrom:"/",countryCode:"62",stopwatch:N.m},this.decrementer=null,this.resendCount=0}componentWillReceiveProps(e){const t=(e.history.location.state||{}).from||{},n=t.pathname||t;Object.keys(t).length>0&&this.setState({isFrom:n})}async validateForm(){return new Promise((e=>{this.props.form.validateFields(((t,n)=>{e(!t)}))}))}componentWillUnmount(){window.sessionStorage.setItem("count",0)}startTimer(){this.decrementer&&clearInterval(this.decrementer),this.decrementer=setInterval((()=>{let e=this.state.stopwatch-1e3;this.setState({stopwatch:e})}),1e3)}renderErrorMessage(e){return Object(k.jsx)(p.a,{span:24,children:Object(k.jsx)(d.a,{message:e,description:Object(k.jsx)(C.a,{id:E.a.serverError}),type:"error",showIcon:!0,style:{marginTop:"20px"},closable:!0})})}render(){const{isFrom:e}=this.state,{operationId:t,phone:n}=this.props;return this.props.isLoggedIn&&this.redirectionHandler(e),Object(k.jsxs)("div",{children:[Object(k.jsxs)(f.a,{title:"",visible:this.state.visible,footer:[Object(k.jsx)(l.default,{onClick:this.handleCancel,children:Object(k.jsx)(C.a,{id:"Ok"})},"ok")],closable:!1,children:[Object(k.jsx)("p",{children:Object(k.jsx)("b",{children:Object(k.jsx)(C.a,{id:"Jika butuh bantuan lebih lanjut, hubungi CS kami:"})})}),Object(k.jsx)("p",{children:Object(k.jsx)("b",{children:"Whatsapp: (+62) 818 343 494"})})]}),Object(k.jsx)(g,{secondaryColor:Object(y.a)("SECONDARY_COLOR"),highlighterColor:Object(y.a)("HIGHLIGHTER_COLOR"),fontColor:Object(y.a)("FONT_COLOR"),children:Object(k.jsx)("div",{className:"container positionStatic",children:Object(k.jsx)(c.default,{className:"content-row",style:{display:"flex",justifyContent:"baseline"},children:Object(k.jsxs)(p.a,{xl:{span:12,offset:4},className:"container-col",children:[Object(k.jsxs)(c.default,{style:{marginTop:"-5px"},children:[Object(k.jsx)(p.a,{span:24,md:0,className:"hero-title-main",children:Object(k.jsx)("p",{style:{marginBottom:5},children:this.intlText({id:"AJUKAN KLAIM"})})}),Object(k.jsx)(p.a,{span:24,md:0,className:"hero-title",children:Object(k.jsx)("p",{children:this.intlText({id:" Proses klaim anti ribet langsung dari smartphone. Kami selalu siap membantumu."})})})]}),Object(k.jsx)(c.default,{children:Object(k.jsx)(p.a,{span:0,md:24,children:Object(k.jsx)("div",{className:"hero-title-golife",children:Object(k.jsxs)("p",{className:"title-text",children:[Object(k.jsx)(C.a,{id:"Kami turut bersimpati atas musibah"})," ",Object(k.jsx)("br",{}),Object(k.jsx)(C.a,{id:" yang Anda alami."})]})})})}),t?this.verifyOtpForm(n):this.generateOtpForm()]})})})})]})}}const I=a.default.create()(R);t.default=Object(i.b)((e=>({isLoggedIn:null!==e.Auth.idToken,operationId:e.Auth.operationId,phone:e.Auth.phone,errorMessage:e.Auth.errorMessage,verifyOtpFailedStatus:e.Auth.verifyOtpFailedStatus,sendPhoneOtpLoading:e.Loading.GENERATE_OTP,sendPhoneOtpError:e.Error.GENERATE_OTP,verifyOtpMessage:e.Auth.verifyOtpMessage,verifyAuthOtpLoading:e.Loading.AUTH_VERIFY_OTP,verifyAuthOtpError:e.Error.AUTH_VERIFY_OTP})),{login:S,generateOtp:D,resetStatus:P,verifyOtp:T,authVerifyOtp:_,resendOtpRequest:A})(Object(h.c)(I))},966:function(e,t,n){"use strict";var o=n(67),r=n(61),i=n.n(r),a=n(2);t.a={validateName:(e,t,n)=>{if(/^[a-zA-z]+[a-zA-Z ']{1,100}$/.test(t))n();else if(""===t)n();else{n(Object(a.jsx)(o.a,{id:"Format nama salah"}))}},validatePhone:(e,t,n)=>{if(/^\+?620?8[0-9]{8,11}$|^08[0-9]{8,11}$|^0[0-9]{2}9[0-9]{8,15}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Nomor handphone salah"}))}},validateAddress:(e,t,n)=>{if(/^[#.0-9a-zA-Z\s,-]{5,200}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format alamat salah"}))}},validatePostalCode:(e,t,n)=>{if(/^([0-9]){5,5}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format kode pos salah"}))}},validateFrameMachineNumber:(e,t,n)=>{if(/^([a-zA-Z0-9.-]){3,30}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format machine no salah"}))}},validateEngineNumber:(e,t,n)=>{if(/^([a-zA-Z0-9.-]){17}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format mesin no salah"}))}},validateColor:(e,t,n)=>{if(/^[a-zA-Z ']{2,100}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format nama warna kendaraan salah"}))}},checkDob:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[1],u=Object(a.jsx)(o.a,{id:"Usia harus antara 17-60 tahun"});t&&(c-s<16||c-s>60)&&n(u),t&&c-s===16&&(l-p<6&&n(u),n()),n()},checkDobOneYearAndAbove:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[2],u=i()(r).format("YYYY-MM-DD").split("-")[2],d=i()(t).format("YYYY-MM-DD").split("-")[1],f=Object(a.jsx)(o.a,{id:"Usia harus antara 1-65 tahun"});t&&(c-s<1||c-s>65)&&n(f),t&&c-s===1&&((l-d<0||l-d===0&&p-u>0)&&n(f),n()),n()},validateIdentity:(e,t,n)=>{if(/^[#.0-9a-zA-Z\s,-]{5,8}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format no. identity tidak valid"}))}},validateIdentityKtp:(e,t,n)=>{if(/^[0-9]{16}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Nomor KTP salah"}))}},validateTravelokaPhone:(e,t,n)=>{if(/^[0-9]{8,12}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format handphone salah"}))}},validateYear:(e,t,n)=>{if(/^([0-9]){4}$/.test(t))n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Tahun no salah"}))}},validateGadgetModelName:(e,t,n)=>{if(/^[a-zA-Z0-9]+[&$%@*()!+=#.0-9a-zA-Z\s,-]{1,50}$/.test(t))n();else if(""===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Model Gadget salah"}))}},validateModelName:(e,t,n)=>{if(/^[a-zA-Z0-9]+[&$%@*()!+=#.0-9a-zA-Z\s,-]{1,50}$/.test(t))n();else if(""===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Model salah"}))}},validateIMEI:(e,t,n)=>{if(/^[0-9]{15}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format No. IMEI salah"}))}},checkDobFamily:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[1],u=Object(a.jsx)(o.a,{id:"Usia harus antara 17-55 tahun"});t&&c-s<16&&n(u),t&&c-s===16&&(l-p<6&&n(u),n()),n()},validateIdentityNo:(e,t,n)=>{if(/^[0-9]{12,16}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Nomor Kartu Keluarga salah"}))}},validateFlightCode:(e,t,n)=>{if(/^[a-zA-Z0-9]{2}-?\d{1,4}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Nomor Penerbangan tidak valid"}))}},validateHCPPhone:(e,t,n)=>{if(/^[0-9]{8,12}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format handphone salah"}))}},validateChasisNumber:(e,t,n)=>{if(/^([a-zA-Z0-9.-]){15,17}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else if(t.length<15){n(Object(a.jsx)(o.a,{id:"Chassis Number at least 15 characters"}))}else if(t.length>17){n(Object(a.jsx)(o.a,{id:"Chassis Number maximum 17 characters"}))}},validateInsuredName:(e,t,n)=>{if(/^[a-zA-z]+[a-zA-Z ']{1,100}$/.test(t))n();else if(""===t)n();else{n(Object(a.jsx)(o.a,{id:"Insured name format is not correct."}))}},checkPhone:(e,t,n)=>{if(""===t&&n(),/^[1-9][0-9]{7,12}$/.test(t)||void 0===t)n();else{n(Object(a.jsxs)("span",{children:[Object(a.jsx)(o.a,{id:"Jumlah karakter"}),"\xa07 - 12"]}))}},checkOtp:(e,t,n)=>{if(""===t&&n(),/^[0-9]{6}$/.test(t)||void 0===t)n();else if(/^[0-9]{0,6}$/.test(t)){n(Object(a.jsx)(o.a,{id:"Jumlah karakter OTP harus 6"}))}},checkBankNo:(e,t,n)=>{if(""===t&&n(),/^[0-9]{8,20}$/.test(t)||void 0===t)n();else if(/^[0-9]{0,8}$/.test(t)){n(Object(a.jsx)(o.a,{id:"Jumlah karakter 8 - 20"}))}},checkValidator:(e,t,n)=>{if(""!==t&&void 0!==t||n(),null!==e.regex){if(new RegExp(e.regex).test(t))n();else{n(Object(a.jsx)(o.a,{id:"Cek format input"}))}}else n()},checkValidAddress:(e,t,n)=>{if(""!==t&&void 0!==t||n(),t&&t.length>200){n(Object(a.jsx)(o.a,{id:"Format alamat salah"}))}else n()},checkboxTruthy:(e,t,n)=>{if(!1===t){n(Object(a.jsx)(o.a,{id:"Harus diisi"}))}else n()},validateSIM:(e,t,n)=>{if(/^[0-9]{12}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Nomor SIM salah"}))}},checkDobCorona:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[1],u=Object(a.jsx)(o.a,{id:"Usia harus antara 17-60 tahun"});t&&(c-s<17||c-s>65)&&n(u),t&&c-s===17&&(l-p<6&&n(u),n()),n()},checkDobOneYearAndAboveSendo:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[2],u=i()(r).format("YYYY-MM-DD").split("-")[2],d=i()(t).format("YYYY-MM-DD").split("-")[1],f=Object(a.jsx)(o.a,{id:"Usia harus antara 1-69 tahun"});t&&(c-s<1||c-s>69)&&n(f),t&&c-s===1&&((l-d<0||l-d===0&&p-u>0)&&n(f),n()),n()},checkValidatorNumber:(e,t,n)=>{""!==t&&void 0!==t||n()},validateColorFormat:(e,t,n)=>{/^#([0-9A-F]{6})$/.test(t)?n():n("Please enter Hex Color Code eg #FFFFFF")},checkPlateNumber:(e,t,n)=>{if(/^([a-zA-Z0-9]{1,2}\s[a-zA-Z0-9]{1,4}\s[a-zA-Z0-9]{1,3})$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Silakan masukkan data yang tepat untuk melanjutkan"}))}},checkDobOneYearAbove:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[2],u=i()(r).format("YYYY-MM-DD").split("-")[2],d=i()(t).format("YYYY-MM-DD").split("-")[1],f=Object(a.jsx)(o.a,{id:"Umur minimum 1 tahun"});t&&c-s<1&&n(f),t&&c-s===1&&((l-d<0||l-d===0&&p-u>0)&&n(f),n()),n()},checkDobSeventeenYearAbove:(e,t,n)=>{const r=new Date,s=i()(t).format("YYYY-MM-DD").split("-")[0],c=i()(r).format("YYYY-MM-DD").split("-")[0],l=i()(r).format("YYYY-MM-DD").split("-")[1],p=i()(t).format("YYYY-MM-DD").split("-")[2],u=i()(r).format("YYYY-MM-DD").split("-")[2],d=i()(t).format("YYYY-MM-DD").split("-")[1],f=Object(a.jsx)(o.a,{id:"Umur minimum 17 tahun"});t&&c-s<17&&n(f),t&&c-s===17&&((l-d<0||l-d===0&&p-u>0)&&n(f),n()),n()},checkThreeYearAbove:(e,t,n)=>{if(/^([0-9]{4})$/.test(t)){const e=(new Date).getFullYear()-t,r=Object(a.jsx)(o.a,{id:"Maximum tahun pembelian 3 tahun"});t&&e>3&&n(r),n()}else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Tahun no salah"}))}},checkSerialNumber:(e,t,n)=>{/^([a-zA-Z0-9]{4,20})$/.test(t)?n():n("Format Nomor Serial no salah")},checkPlateNumberVehicle:(e,t,n)=>{if(/^([a-zA-Z]{1,2}\s*?[0-9]{1,4}\s*?[a-zA-Z]{1,3}$)|^([a-zA-Z]{1,2}\s*?[0-9]{1,4}$)$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Silakan masukkan data yang tepat untuk melanjutkan"}))}},checkDobBetween:(e,t,n,r,s)=>{const c=new Date,l=i()(t).format("YYYY-MM-DD").split("-")[0],p=i()(c).format("YYYY-MM-DD").split("-")[0],u=i()(c).format("YYYY-MM-DD").split("-")[1],d=i()(t).format("YYYY-MM-DD").split("-")[2],f=i()(c).format("YYYY-MM-DD").split("-")[2],h=i()(t).format("YYYY-MM-DD").split("-")[1],m=Object(a.jsx)(o.a,{id:`Usia harus antara ${r}-${s} tahun`});(p-l<r||p-l>s)&&n(m),p-l===r&&(u-h>=0||n(m),f-d>=0||n(m),n()),p-l===s&&(u-h>0&&n(m),f-d>0&&n(m),n()),n()},validateAllEngineNumber:(e,t,n)=>{if(/^([a-zA-Z0-9.-]){1,50}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format mesin no salah"}))}},checkPlateNumberAll:(e,t,n)=>{if(/^([a-zA-Z0-9.-]){1,50}$/.test(t))n();else if(""===t)n();else if(void 0===t)n();else{n(Object(a.jsx)(o.a,{id:"Format Nomor Plat Salah"}))}},checkDobShopee:(e,t,n)=>{let r=i()(t);const s=i()().diff(r,"years"),c=Object(a.jsx)(o.a,{id:"Usia harus parutan dari satu tahun"});s<1&&n(c),n()},serialNumberValidator:(e,t,n)=>{if((null===t||void 0===t?void 0:t.length)>=5&&(null===t||void 0===t?void 0:t.length)<=50)n();else if((null===t||void 0===t?void 0:t.length)<5&&t.length>0||t.length>50){n(Object(a.jsx)(o.a,{id:"Nomor seri tidak valid"}))}else 0===t.length&&n()},nationalIdValidator:(e,t,n)=>{if(13===(null===t||void 0===t?void 0:t.length)||0===(null===t||void 0===t?void 0:t.length))n();else{n(Object(a.jsx)(o.a,{id:"Nomor Identitas Thailand tidak valid"}))}},shopeeVnSerialNoValidator:(e,t,n)=>{if((null===t||void 0===t?void 0:t.length)>=10&&(null===t||void 0===t?void 0:t.length)<=20)n();else{n(Object(a.jsx)(o.a,{id:"Nomor seri tidak valid"}))}}}},977:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=n(1113),a=n(148),s=n(2);class c extends r.a.Component{constructor(){var e;super(...arguments),e=this,this.intlText=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:" "};return e.props.intl.formatMessage(t)},this.onChange=e=>{const{value:t}=e.target,{type:n}=this.props;let o="";o="otp"===n?/^-?(0|[0-9][0-9]*)(\.[0-9]*)?$/:/^-?([1-9][0-9]*)(\.[0-9]*)?$/,(!isNaN(t)&&o.test(t)||""===t)&&this.props.onChange(t)}}render(){const{disabled:e,placeholderText:t}=this.props;return Object(s.jsx)(i.default,{...this.props,onChange:this.onChange,disabled:e,placeholder:this.intlText({id:t||" "})})}}t.a=Object(a.c)(c)},980:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var o=n(1),r=n(98),i=n(961),a=n(24),s=n.n(a),c=n(62),l=n(322),p=n(971),u=n(55);function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function x(){}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(v,e);var t,n,a,d=y(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=d.call(this,e)).handleClose=function(e){e.preventDefault();var n=r.findDOMNode(g(t));n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),t.setState({closing:!0}),(t.props.onClose||x)(e)},t.animationEnd=function(){t.setState({closing:!1,closed:!0}),(t.props.afterClose||x)()},t.renderAlert=function(e){var n,r=e.getPrefixCls,a=t.props,l=a.description,u=a.prefixCls,d=a.message,m=a.closeText,b=a.banner,y=a.className,g=void 0===y?"":y,v=a.style,x=a.icon,O=t.props,j=O.closable,C=O.type,w=O.showIcon,N=O.iconType,E=t.state,k=E.closing,M=E.closed,Y=r("alert",u);w=!(!b||void 0!==w)||w,C=b&&void 0===C?"warning":C||"info";var S="filled";if(!N){switch(C){case"success":N="check-circle";break;case"info":N="info-circle";break;case"error":N="close-circle";break;case"warning":N="exclamation-circle";break;default:N="default"}l&&(S="outlined")}m&&(j=!0);var D=s()(Y,"".concat(Y,"-").concat(C),(h(n={},"".concat(Y,"-closing"),k),h(n,"".concat(Y,"-with-description"),!!l),h(n,"".concat(Y,"-no-icon"),!w),h(n,"".concat(Y,"-banner"),!!b),h(n,"".concat(Y,"-closable"),j),n),g),P=j?o.createElement("button",{type:"button",onClick:t.handleClose,className:"".concat(Y,"-close-icon"),tabIndex:0},m?o.createElement("span",{className:"".concat(Y,"-close-text")},m):o.createElement(c.default,{type:"close"})):null,T=Object(p.a)(t.props),_=x&&(o.isValidElement(x)?o.cloneElement(x,{className:s()("".concat(Y,"-icon"),h({},x.props.className,x.props.className))}):o.createElement("span",{className:"".concat(Y,"-icon")},x))||o.createElement(c.default,{className:"".concat(Y,"-icon"),type:N,theme:S});return M?null:o.createElement(i.a,{component:"",showProp:"data-show",transitionName:"".concat(Y,"-slide-up"),onEnd:t.animationEnd},o.createElement("div",f({"data-show":!k,className:D,style:v},T),w?_:null,o.createElement("span",{className:"".concat(Y,"-message")},d),o.createElement("span",{className:"".concat(Y,"-description")},l),P))},Object(u.a)(!("iconType"in e),"Alert","`iconType` is deprecated. Please use `icon` instead."),t.state={closing:!1,closed:!1},t}return t=v,(n=[{key:"render",value:function(){return o.createElement(l.a,null,this.renderAlert)}}])&&m(t.prototype,n),a&&m(t,a),v}(o.Component)},996:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=n(33),a=n.n(i),s=n(37),c=n.n(s),l=n(38),p=n.n(l),u=n(46),d=n.n(u),f=n(98),h=n.n(f),m={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=m.F1&&t<=m.F12)return!1;switch(t){case m.ALT:case m.CAPS_LOCK:case m.CONTEXT_MENU:case m.CTRL:case m.DOWN:case m.END:case m.ESC:case m.HOME:case m.INSERT:case m.LEFT:case m.MAC_FF_META:case m.META:case m.NUMLOCK:case m.NUM_CENTER:case m.PAGE_DOWN:case m.PAGE_UP:case m.PAUSE:case m.PRINT_SCREEN:case m.RIGHT:case m.SHIFT:case m.UP:case m.WIN_KEY:case m.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=m.ZERO&&e<=m.NINE)return!0;if(e>=m.NUM_ZERO&&e<=m.NUM_MULTIPLY)return!0;if(e>=m.A&&e<=m.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case m.SPACE:case m.QUESTION_MARK:case m.NUM_PLUS:case m.NUM_MINUS:case m.NUM_PERIOD:case m.NUM_DIVISION:case m.SEMICOLON:case m.DASH:case m.EQUALS:case m.COMMA:case m.PERIOD:case m.SLASH:case m.APOSTROPHE:case m.SINGLE_QUOTE:case m.OPEN_SQUARE_BRACKET:case m.BACKSLASH:case m.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},b=m;var y=n(961),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},v=function(e){function t(){return c()(this,t),p()(this,e.apply(this,arguments))}return d()(t,e),t.prototype.shouldComponentUpdate=function(e){return!!e.forceRender||(!!e.hiddenClassName||!!e.visible)},t.prototype.render=function(){var e=this.props,t=e.className,n=e.hiddenClassName,r=e.visible,i=(e.forceRender,g(e,["className","hiddenClassName","visible","forceRender"])),s=t;return n&&!r&&(s+=" "+n),o.createElement("div",a()({},i,{className:s}))},t}(o.Component),x=v,O=0;function j(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!==typeof n){var r=e.document;"number"!==typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function C(e,t){var n=e.style;["Webkit","Moz","Ms","ms"].forEach((function(e){n[e+"TransformOrigin"]=t})),n.transformOrigin=t}var w=function(e){function t(n){c()(this,t);var r=p()(this,e.call(this,n));return r.inTransition=!1,r.onAnimateLeave=function(){var e=r.props.afterClose;r.wrap&&(r.wrap.style.display="none"),r.inTransition=!1,r.switchScrollingEffect(),e&&e()},r.onDialogMouseDown=function(){r.dialogMouseDown=!0},r.onMaskMouseUp=function(){r.dialogMouseDown&&(r.timeoutId=setTimeout((function(){r.dialogMouseDown=!1}),0))},r.onMaskClick=function(e){Date.now()-r.openTime<300||e.target!==e.currentTarget||r.dialogMouseDown||r.close(e)},r.onKeyDown=function(e){var t=r.props;if(t.keyboard&&e.keyCode===b.ESC)return e.stopPropagation(),void r.close(e);if(t.visible&&e.keyCode===b.TAB){var n=document.activeElement,o=r.sentinelStart;e.shiftKey?n===o&&r.sentinelEnd.focus():n===r.sentinelEnd&&o.focus()}},r.getDialogElement=function(){var e=r.props,t=e.closable,n=e.prefixCls,i={};void 0!==e.width&&(i.width=e.width),void 0!==e.height&&(i.height=e.height);var s=void 0;e.footer&&(s=o.createElement("div",{className:n+"-footer",ref:r.saveRef("footer")},e.footer));var c=void 0;e.title&&(c=o.createElement("div",{className:n+"-header",ref:r.saveRef("header")},o.createElement("div",{className:n+"-title",id:r.titleId},e.title)));var l=void 0;t&&(l=o.createElement("button",{type:"button",onClick:r.close,"aria-label":"Close",className:n+"-close"},e.closeIcon||o.createElement("span",{className:n+"-close-x"})));var p=a()({},e.style,i),u={width:0,height:0,overflow:"hidden",outline:"none"},d=r.getTransitionName(),f=o.createElement(x,{key:"dialog-element",role:"document",ref:r.saveRef("dialog"),style:p,className:n+" "+(e.className||""),visible:e.visible,forceRender:e.forceRender,onMouseDown:r.onDialogMouseDown},o.createElement("div",{tabIndex:0,ref:r.saveRef("sentinelStart"),style:u,"aria-hidden":"true"}),o.createElement("div",{className:n+"-content"},l,c,o.createElement("div",a()({className:n+"-body",style:e.bodyStyle,ref:r.saveRef("body")},e.bodyProps),e.children),s),o.createElement("div",{tabIndex:0,ref:r.saveRef("sentinelEnd"),style:u,"aria-hidden":"true"}));return o.createElement(y.a,{key:"dialog",showProp:"visible",onLeave:r.onAnimateLeave,transitionName:d,component:"",transitionAppear:!0},e.visible||!e.destroyOnClose?f:null)},r.getZIndexStyle=function(){var e={},t=r.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e},r.getWrapStyle=function(){return a()({},r.getZIndexStyle(),r.props.wrapStyle)},r.getMaskStyle=function(){return a()({},r.getZIndexStyle(),r.props.maskStyle)},r.getMaskElement=function(){var e=r.props,t=void 0;if(e.mask){var n=r.getMaskTransitionName();t=o.createElement(x,a()({style:r.getMaskStyle(),key:"mask",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),n&&(t=o.createElement(y.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t},r.getMaskTransitionName=function(){var e=r.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t},r.getTransitionName=function(){var e=r.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t},r.close=function(e){var t=r.props.onClose;t&&t(e)},r.saveRef=function(e){return function(t){r[e]=t}},r.titleId="rcDialogTitle"+O++,r.switchScrollingEffect=n.switchScrollingEffect||function(){},r}return d()(t,e),t.prototype.componentDidMount=function(){this.componentDidUpdate({}),(this.props.forceRender||!1===this.props.getContainer&&!this.props.visible)&&this.wrap&&(this.wrap.style.display="none")},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.visible,o=t.mask,r=t.focusTriggerAfterClose,i=this.props.mousePosition;if(n){if(!e.visible){this.openTime=Date.now(),this.switchScrollingEffect(),this.tryFocus();var a=f.findDOMNode(this.dialog);if(i){var s=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return n.left+=j(r),n.top+=j(r,!0),n}(a);C(a,i.x-s.left+"px "+(i.y-s.top)+"px")}else C(a,"")}}else if(e.visible&&(this.inTransition=!0,o&&this.lastOutSideFocusNode&&r)){try{this.lastOutSideFocusNode.focus()}catch(c){this.lastOutSideFocusNode=null}this.lastOutSideFocusNode=null}},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.visible,n=e.getOpenCount;!t&&!this.inTransition||n()||this.switchScrollingEffect(),clearTimeout(this.timeoutId)},t.prototype.tryFocus=function(){(function(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1})(this.wrap,document.activeElement)||(this.lastOutSideFocusNode=document.activeElement,this.sentinelStart.focus())},t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.maskClosable,r=this.getWrapStyle();return e.visible&&(r.display=null),o.createElement("div",{className:t+"-root"},this.getMaskElement(),o.createElement("div",a()({tabIndex:-1,onKeyDown:this.onKeyDown,className:t+"-wrap "+(e.wrapClassName||""),ref:this.saveRef("wrap"),onClick:n?this.onMaskClick:null,onMouseUp:n?this.onMaskMouseUp:null,role:"dialog","aria-labelledby":e.title?this.titleId:null,style:r},e.wrapProps),this.getDialogElement()))},t}(o.Component),N=w;w.defaultProps={className:"",mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog",focusTriggerAfterClose:!0};var E=n(6),k=n.n(E),M=n(151);function Y(e){return Y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=T(e);if(t){var r=T(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===Y(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var _=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(i,e);var t,n,o,r=P(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).removeContainer=function(){e.container&&(h.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.renderComponent=function(t,n){var o=e.props,r=o.visible,i=o.getComponent,a=o.forceRender,s=o.getContainer,c=o.parent;(r||c._component||a)&&(e.container||(e.container=s()),h.a.unstable_renderSubtreeIntoContainer(c,i(t),e.container,(function(){n&&n.call(this)})))},e}return t=i,(n=[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}])&&S(t.prototype,n),o&&S(t,o),i}(r.a.Component);function A(e){return A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=U(e);if(t){var r=U(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===A(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}_.propTypes={autoMount:k.a.bool,autoDestroy:k.a.bool,visible:k.a.bool,forceRender:k.a.bool,parent:k.a.any,getComponent:k.a.func.isRequired,getContainer:k.a.func.isRequired,children:k.a.func.isRequired},_.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};var z,L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,e);var t,n,o,r=F(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(e){var t=this.props.didUpdate;t&&t(e)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?h.a.createPortal(this.props.children,this._container):null}}])&&R(t.prototype,n),o&&R(t,o),i}(r.a.Component);L.propTypes={getContainer:k.a.func.isRequired,children:k.a.node.isRequired,didUpdate:k.a.func};var $=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).element,n=void 0===t?document.body:t,o={},r=Object.keys(e);return r.forEach((function(e){o[e]=n.style[e]})),r.forEach((function(t){n.style[t]=e[t]})),o};var H={},K=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),o=document.body.className;if(e){if(!n.test(o))return;return $(H),H={},void(document.body.className=o.replace(n,"").trim())}var r=function(e){if("undefined"===typeof document)return 0;if(e||void 0===z){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top=0,o.left=0,o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var r=t.offsetWidth;n.style.overflow="scroll";var i=t.offsetWidth;r===i&&(i=n.clientWidth),document.body.removeChild(n),z=r-i}return z}();if(r&&(H=$({position:"relative",width:"calc(100% - ".concat(r,"px)")}),!n.test(o))){var i="".concat(o," ").concat(t);document.body.className=i.trim()}}};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){return Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=X(e);if(t){var r=X(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===Z(t)||"function"===typeof t))return t;return J(e)}(this,n)}}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var ee=0,te=!("undefined"!==typeof window&&window.document&&window.document.createElement),ne="createPortal"in h.a,oe={},re=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(a,e);var t,n,o,i=Q(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).getParent=function(){var e=t.props.getContainer;if(e){if("string"===typeof e)return document.querySelectorAll(e)[0];if("function"===typeof e)return e();if("object"===Z(e)&&e instanceof window.HTMLElement)return e}return document.body},t.getContainer=function(){if(te)return null;if(!t.container){t.container=document.createElement("div");var e=t.getParent();e&&e.appendChild(t.container)}return t.setWrapperClassName(),t.container},t.setWrapperClassName=function(){var e=t.props.wrapperClassName;t.container&&e&&e!==t.container.className&&(t.container.className=e)},t.savePortal=function(e){t._component=e},t.removeCurrentContainer=function(e){t.container=null,t._component=null,ne||(e?t.renderComponent({afterClose:t.removeContainer,onClose:function(){},visible:!1}):t.removeContainer())},t.switchScrollingEffect=function(){1!==ee||Object.keys(oe).length?ee||($(oe),oe={},K(!0)):(K(),oe=$({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))};var n=e.visible;return ee=n?ee+1:ee,t.state={_self:J(t)},t}return t=a,n=[{key:"componentDidUpdate",value:function(){this.setWrapperClassName()}},{key:"componentWillUnmount",value:function(){var e=this.props.visible;ee=e&&ee?ee-1:ee,this.removeCurrentContainer(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.forceRender,i=t.visible,a=null,s={getOpenCount:function(){return ee},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect};return ne?((o||i||this._component)&&(a=r.a.createElement(L,{getContainer:this.getContainer,ref:this.savePortal},n(s))),a):r.a.createElement(_,{parent:this,visible:i,autoDestroy:!1,getComponent:function(){return n(W(W(W({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),s),{},{ref:e.savePortal}))},getContainer:this.getContainer,forceRender:o},(function(t){var n=t.renderComponent,o=t.removeContainer;return e.renderComponent=n,e.removeContainer=o,null}))}}],o=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,o=t._self,r=e.visible,i=e.getContainer;if(n){var a=n.visible,s=n.getContainer;r!==a&&(ee=r&&!a?ee+1:ee-1),("function"===typeof i&&"function"===typeof s?i.toString()!==s.toString():i!==s)&&o.removeCurrentContainer(!1)}return{prevProps:e}}}],n&&V(t.prototype,n),o&&V(t,o),a}(r.a.Component);re.propTypes={wrapperClassName:k.a.string,forceRender:k.a.bool,getContainer:k.a.any,children:k.a.func,visible:k.a.bool};var ie=Object(M.polyfill)(re),ae=function(e){var t=e.visible,n=e.getContainer,r=e.forceRender;return!1===n?o.createElement(N,a()({},e,{getOpenCount:function(){return 2}})):o.createElement(ie,{visible:t,forceRender:r,getContainer:n},(function(t){return o.createElement(N,a()({},e,t))}))},se=n(24),ce=n.n(se),le=n(991),pe=n.n(le);var ue=n(197),de=n(62),fe=n(946),he=n(196),me=n(322);function be(e){return be="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be(e)}function ye(){return ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ye.apply(this,arguments)}function ge(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ve(e,t){return ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ve(e,t)}function xe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Oe(e);if(t){var r=Oe(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===be(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function Oe(e){return Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Oe(e)}var je,Ce=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},we=[];"undefined"!==typeof window&&window.document&&window.document.documentElement&&function(e,t,n,o){var r=h.a.unstable_batchedUpdates?function(e){h.a.unstable_batchedUpdates(n,e)}:n;pe()(e,t,r,o)}(document.documentElement,"click",(function(e){je={x:e.pageX,y:e.pageY},setTimeout((function(){return je=null}),100)}));var Ne=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(a,e);var t,n,r,i=xe(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.apply(this,arguments)).handleCancel=function(t){var n=e.props.onCancel;n&&n(t)},e.handleOk=function(t){var n=e.props.onOk;n&&n(t)},e.renderFooter=function(t){var n=e.props,r=n.okText,i=n.okType,a=n.cancelText,s=n.confirmLoading;return o.createElement("div",null,o.createElement(fe.default,ye({onClick:e.handleCancel},e.props.cancelButtonProps),a||t.cancelText),o.createElement(fe.default,ye({type:i,loading:s,onClick:e.handleOk},e.props.okButtonProps),r||t.okText))},e.renderModal=function(t){var n,r,i,a=t.getPopupContainer,s=t.getPrefixCls,c=e.props,l=c.prefixCls,p=c.footer,u=c.visible,d=c.wrapClassName,f=c.centered,h=c.getContainer,m=c.closeIcon,b=Ce(c,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon"]),y=s("modal",l),g=o.createElement(he.a,{componentName:"Modal",defaultLocale:Object(ue.b)()},e.renderFooter),v=o.createElement("span",{className:"".concat(y,"-close-x")},m||o.createElement(de.default,{className:"".concat(y,"-close-icon"),type:"close"}));return o.createElement(ae,ye({},b,{getContainer:void 0===h?a:h,prefixCls:y,wrapClassName:ce()((n={},r="".concat(y,"-centered"),i=!!f,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n),d),footer:void 0===p?g:p,visible:u,mousePosition:je,onClose:e.handleCancel,closeIcon:v}))},e}return t=a,(n=[{key:"render",value:function(){return o.createElement(me.a,null,this.renderModal)}}])&&ge(t.prototype,n),r&&ge(t,r),a}(o.Component);function Ee(e){return Ee="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(e)}function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ke.apply(this,arguments)}function Me(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ye(e,t){return Ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ye(e,t)}function Se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=De(e);if(t){var r=De(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===Ee(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function De(e){return De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},De(e)}Ne.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"},Ne.propTypes={prefixCls:E.string,onOk:E.func,onCancel:E.func,okText:E.node,cancelText:E.node,centered:E.bool,width:E.oneOfType([E.number,E.string]),confirmLoading:E.bool,visible:E.bool,footer:E.node,title:E.node,closable:E.bool,closeIcon:E.node};var Pe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ye(e,t)}(a,e);var t,n,r,i=Se(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).onClick=function(){var e,n=t.props,o=n.actionFn,r=n.closeModal;o?(o.length?e=o(r):(e=o())||r(),e&&e.then&&(t.setState({loading:!0}),e.then((function(){r.apply(void 0,arguments)}),(function(e){console.error(e),t.setState({loading:!1})})))):r()},t.state={loading:!1},t}return t=a,(n=[{key:"componentDidMount",value:function(){if(this.props.autoFocus){var e=f.findDOMNode(this);this.timeoutId=setTimeout((function(){return e.focus()}))}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,r=e.buttonProps,i=this.state.loading;return o.createElement(fe.default,ke({type:t,onClick:this.onClick,loading:i},r),n)}}])&&Me(t.prototype,n),r&&Me(t,r),a}(o.Component),Te=n(55);function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_e.apply(this,arguments)}var Ae=!!f.createPortal,Re=function(e){var t=e.onCancel,n=e.onOk,r=e.close,i=e.zIndex,a=e.afterClose,s=e.visible,c=e.keyboard,l=e.centered,p=e.getContainer,u=e.maskStyle,d=e.okButtonProps,f=e.cancelButtonProps,h=e.iconType,m=void 0===h?"question-circle":h;Object(Te.a)(!("iconType"in e),"Modal","The property 'iconType' is deprecated. Use the property 'icon' instead.");var b,y,g,v=void 0===e.icon?m:e.icon,x=e.okType||"primary",O=e.prefixCls||"ant-modal",j="".concat(O,"-confirm"),C=!("okCancel"in e)||e.okCancel,w=e.width||416,N=e.style||{},E=void 0===e.mask||e.mask,k=void 0!==e.maskClosable&&e.maskClosable,M=Object(ue.b)(),Y=e.okText||(C?M.okText:M.justOkText),S=e.cancelText||M.cancelText,D=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),P=e.transitionName||"zoom",T=e.maskTransitionName||"fade",_=ce()(j,"".concat(j,"-").concat(e.type),e.className),A=C&&o.createElement(Pe,{actionFn:t,closeModal:r,autoFocus:"cancel"===D,buttonProps:f},S),R="string"===typeof v?o.createElement(de.default,{type:v}):v;return o.createElement(Ne,{prefixCls:O,className:_,wrapClassName:ce()((b={},y="".concat(j,"-centered"),g=!!e.centered,y in b?Object.defineProperty(b,y,{value:g,enumerable:!0,configurable:!0,writable:!0}):b[y]=g,b)),onCancel:function(){return r({triggerCancel:!0})},visible:s,title:"",transitionName:P,footer:"",maskTransitionName:T,mask:E,maskClosable:k,maskStyle:u,style:N,width:w,zIndex:i,afterClose:a,keyboard:c,centered:l,getContainer:p},o.createElement("div",{className:"".concat(j,"-body-wrapper")},o.createElement("div",{className:"".concat(j,"-body")},R,void 0===e.title?null:o.createElement("span",{className:"".concat(j,"-title")},e.title),o.createElement("div",{className:"".concat(j,"-content")},e.content)),o.createElement("div",{className:"".concat(j,"-btns")},A,o.createElement(Pe,{type:x,actionFn:n,closeModal:r,autoFocus:"ok"===D,buttonProps:d},Y))))};function Ie(e){var t=document.createElement("div");document.body.appendChild(t);var n=_e(_e({},e),{close:a,visible:!0});function r(){f.unmountComponentAtNode(t)&&t.parentNode&&t.parentNode.removeChild(t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];var i=o.some((function(e){return e&&e.triggerCancel}));e.onCancel&&i&&e.onCancel.apply(e,o);for(var s=0;s<we.length;s++){if(we[s]===a){we.splice(s,1);break}}}function i(e){f.render(o.createElement(Re,e),t)}function a(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];n=_e(_e({},n),{visible:!1,afterClose:r.bind.apply(r,[this].concat(t))}),Ae?i(n):r.apply(void 0,t)}return i(n),we.push(a),{destroy:a,update:function(e){i(n=_e(_e({},n),e))}}}function Fe(){return Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Fe.apply(this,arguments)}function Ue(e){return Ie(Fe({type:"warning",icon:o.createElement(de.default,{type:"exclamation-circle"}),okCancel:!1},e))}Ne.info=function(e){return Ie(Fe({type:"info",icon:o.createElement(de.default,{type:"info-circle"}),okCancel:!1},e))},Ne.success=function(e){return Ie(Fe({type:"success",icon:o.createElement(de.default,{type:"check-circle"}),okCancel:!1},e))},Ne.error=function(e){return Ie(Fe({type:"error",icon:o.createElement(de.default,{type:"close-circle"}),okCancel:!1},e))},Ne.warning=Ue,Ne.warn=Ue,Ne.confirm=function(e){return Ie(Fe({type:"confirm",okCancel:!0},e))},Ne.destroyAll=function(){for(;we.length;){var e=we.pop();e&&e()}};t.a=Ne}}]);
//# sourceMappingURL=48.d9705bed.chunk.js.map