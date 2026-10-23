"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[7476],{97476:(t,a,e)=>{e.r(a),e.d(a,{default:()=>w});var i=e(1502),o=e(24952),n=e(86178),r=e.n(n),p=e(67816),d=e(80878),s=e.n(d);const l=s().div`
  padding: 18px;
  .quickReply {
    padding: 5px 8px;
    margin: 10px 5px 5px 0px;
    display: inline-block;
    border: 1px solid rgb(203, 170, 0);
    line-height: 20px;
    border-radius: 30px;
    backface-visibility: hidden;
    transition: all 0.3s ease 0s;
    color: rgb(0, 90, 190);
    background: rgb(255, 255, 255);
}
  .header {
    font-weight: 700;
  }
`,c=s().div`
  @media only screen and (min-width: 570px){
    /* position: fixed; */
    bottom: 120px;
    right: 47px;
    display: block;
    font-size: 12px;
    min-width: 345px;
    width: 24%;
  }
  .cl-less-emph {
    color: #888888;
  }
  .mainWrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.3);
    right: 0px;
    bottom: 0px;
    width: 100vw;
    z-index: 2;
    display: inline-block;
  }
  .maximize {
    max-width: 400px;
    max-height: 500px;
    position: absolute;
    top: 400px;
    left: 400px;
    bottom: 400px;
    right: 400px;
  }
  .opened {
    height: 500px;
    width: 100%;
    background: #ffffff;
    margin: ${t=>t.fullScreen?"auto":"6px 6px 0px 6px"};
    border-radius: 11px;
    box-shadow: 0 0 6px #000000;
    overflow: hidden;

  }
  .closed {
    height: auto;
    width: auto;
  }
  .ava-chat-btn {
    display: ${t=>t.fullScreen?"none":"inline-block"}
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1;
    border-radius: 100%;
    cursor: pointer;
    -webkit-box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    padding: 8px 9px 1px 10px;
    background: #ffd500;
    background-size: 22px 22px;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    background-position: center;
  }
  .completed-form {
    color: #23a537;
  }
  @keyframes bounce-7 {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-30px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  }
  .chat-btn-bounce{
    -webkit-animation-duration: .8s;
    animation-duration: .8s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-iteration-count: 5;
    -webkit-animation-iteration-count: 5;
    -webkit-animation-name: bounce-7;
    animation-name: bounce-7;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
  }
  .opened .ava-chat-btn {
    background-size: 20px 20px;
  }
  .expand-icon {
    margin-top: 4px;
  }
  .closed .ava-chat-btn {
    display: inline-block;
  }
  svg.chat-icon {
    stroke: rgb(255, 255, 255);
    width: 55px;
    height: 55px;
  }
  .chat-icon path {
    fill: none;
  }
  .chat-icon line {
    fill: none;
    stroke-linecap: round;
  }
  .closed .ava-content {
    display: none;
  }
  .opened .ava-content {
    display: block;
  }
  .ava-content {
    position: relative;
    height: 100%;
    background-color: #ffffff;
    -webkit-box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  }
  .ava-typing-icon{
    background-size: 25px 25px;
    background-repeat: no-repeat;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin-left: 18px;
    vertical-align: middle;
  }
  .ava-waiting{
    position: absolute;
    bottom: 0px;
    background: white;
    display: block;
    width: 100%;
  }
  .ava-message-box {
    margin: 10px;
    margin-top: 38px;
  }
  .quick-replies{
    font-size: 12px;
    font-weight: 500;
  }
  .quick-replies .title{
    font-size: 1em;
  }
  .quick-replies big{
    font-size: 1.1em;
  }
  .faqs-search-btn{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    padding: 5px 0px;
    background-color: #fff;
    border-top: 1px solid #cccccc;
  }
  .faqs-search-btn input{
    display: inline-block;
    width: 80%;
    border: 1px solid #cbaa00;
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: 98% 50%;
    padding: 8px;
    border-radius: 5px;
  }
  .padding-10{
    padding: 10px;
  }
  .closed .ava-error{
    display: none;
  }
  .ava-error {
    position: absolute;
    bottom: 0;
    background: red;
    width: 100%;
    padding: 5px;
    color: white;
  }
  .ava-error span{
    padding: 5px;
    color: yellow;
    cursor: pointer;
  }
  @media only screen and (max-width: 569px){
    .opened{
      height: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }
    .opened{
      position: fixed;
      top: 0;
      width: 100%;
      bottom: 0;
      z-index: 10;
      font-size: 14px;
    }
    .ava-chat-btn{
      display: none;
    }
  }
`;s().div`
  .ava-header {
    background-color: #ffd500;
    color: #000000;
    padding: 10px 14px;
    position: absolute;
    left: 0;
    right: 0;
    height: 41px;
    z-index:2;
  }
  .ava-title{
    font-weight: 900;
    font-size: 1.2em;
  }
  .ava-header > img {
    vertical-align: middle;
  }
  .close-btn{
    background-size: 15px 15px;
    background-repeat: no-repeat;
    padding: 8px;
    display: inline-block;
    float: right;
    margin: 3px;
    cursor: pointer;
  }
  .expand-icon-chatbot {
    display: ${t=>t.mobileView?"none":"inherit"}
    float: right;
    color: #ffd500;
    background: #000000;
    border-radius: 5px;
    padding: 2px 4px 3px 4px;
    cursor: pointer;
    height: 25px;
    margin-top: 1px;
    margin-right: 6px;
  }
  .back-btn{
    background-size: 25px 25px;
    background-repeat: no-repeat;
    width: 25px;
    display: inline-block;
    cursor: pointer;
    height: 30px;
    float: left;
  }
  .faqs-btn{
    border-radius: 5px;
    background-color: #000000;
    color: #ffd500;
    display: inline-block;
    padding: 2px 10px;
    text-align: center;
    float: right;
    margin-right: 8px;
    cursor: pointer;
    height: 26px;
  }
  .ava-hidden{
    display: none;
  }
  .category .category-title{

  }
  .ava-clear-session{
    float: right;
    color: #ffd500;
    background: #000000;
    border-radius: 5px;
    padding: 4px;
    cursor: pointer;
    height: 26px;
  }
  .ava-align-center{
    text-align: center;
  }
  .ava-close-chatbot{
    display: none;
    float: right;
    color: #ffd500;
    background: #000000;
    border-radius: 5px;
    padding: 2px 4px 3px 4px;
    cursor: pointer;
    height: 25px;
    margin-top: 1px;
  }
  @media only screen and (max-width: 569px){
    .ava-close-chatbot{
      display: inline;
      margin-left: 7px;
    }
  }
`,s().div`
  @media only screen and (min-width: 570px) {
    max-height: ${t=>t.isTextBoxEnabled?"calc(100% - 60px)":"100%"};
  }
  @media only screen and (max-width: 569px) {
    height: ${t=>t.isTextBoxEnabled?"calc(100% - 60px)":"100%"};
  }
  overflow-y: scroll;
  .ava-chatbot-intro {
    text-align: center;
    margin-top: 56px;
  }
  .ava-chatbot-intro h3 {
    margin-bottom: 0;
  }
`,s().div`
  padding-left: 4px;
  padding-right: 4px;
  .text{
    border: 1px solid transparent;
    border-color: rgb(233, 238, 244);
    color: rgb(100, 100, 100);
    display: block;
    padding: 7px 14px;
    border-radius: 9px;
    word-break: break-word;
  }
  .bot .text{
    background: #f0f0f0;
  }
  .user .text{
    background: #e1f5ff
  }
  .user > .icon, .bot > .icon, .user .message-container, .bot .message-container {
    display: inline-block;
    vertical-align: top;
    max-width: 80%;
  }
  .message-container{
    margin: 4px 5px;
  }
  .bot > .icon, .user > .icon{
    background-size: 35px 35px;
    background-repeat: no-repeat;
    margin: 5px;
    width: 35px;
    height: 35px;
  }
  .bot > .icon{
  }
  .user > .icon{
  }
  .user > div {
    float: right;
  }
  .timestamp{
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: right;
    color: #bbbbbb;
    display: inline-block;
  }
  .user .timestamp{
    float: right;
  }
  .bot .timestamp{
    float: left;
  }
  .ava-forms-list{
    background-color: #f0f0f0;
    margin: 0px -11px;
  }
  .ava-forms-list .form-attributes input{
    margin: 0 0px;
  }
  .ava-forms-list .form-attributes .attribute-input{
  }
  .ava-forms-list .form-title{
    background: #ffd500;
    color: black;
    padding: 5px;
    font-weight: bold;
  }
  .ava-forms-list .attribute-title{
    cursor: pointer;
  }
  .attribute-container{
    background-position: 98% center;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    padding: 5px 0px;
  }
  .ant-select-open {
    outline: none !important;
    border: none !important;
  }
  .attribute-input input, .attribute-input textarea, .attribute-input .ant-select-selection--single{
    border-radius: 5px !important;
    color: #555555;
    border-color:  ${t=>null!==t.status?`${t.status}`:0};
  }
  .attribute-input .ant-select-selection{
    padding: 3px 5px;
  }
  .attribute-input .ant-select-selection--single{
    height: 34px;
  }
  .image-thumbmail {
    max-height: 100px;
    max-width: 100px;
    width: auto;
    height: auto;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    font-size: 14px;
    font-weight: normal;
  }
  .ant-collapse-item{
    margin-bottom:0px !important;
  }
  .save-button {
    padding: 8px 15px !important;
    margin: 10px 5px 5px 0;
    display: inline-block;
    border: 1px solid #cbaa00;
    line-height: 20px;
    border-radius: 30px;
    -webkit-backface-visibility: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    height: auto;
    color: #005abe;
    background: #ffffff;
  }
  .save-form {
    margin-left: 18px;
  }
  hr {
    margin-bottom: 6px !important;
    margin-top: 0px !important;
  }
  .ant-collapse-content-box {
    padding-top: 0px;
    border-top: 1px solid #555555;
  }
  .ant-collapse-content {
    padding: 0px 15px;
  }
  .ant-form-item-label label {
    font-weight: normal !important;
    font-size: 12px;
    text-align: left !important;
    color: #555;
    margin-bottom: 4px;
    white-space: pre-wrap;
  }
  .upload-button {
    background-color: #fad200;
    width: 100%;
    border: 1px solid #000;
  }
  .ava-form-wrapper {
    margin: 0 -15px;
    max-width: calc(100% + 29px);
  }
  .ava-form-wrapper .ant-collapse-item{
    border: none;
    border-radius: 0;
    border-top: solid 1px #555555;
  }
  .ant-collapse .ant-collapse-item:last-child{
    border-bottom: solid 1px #555555;
  }
  .ant-upload.ant-upload-select{
    display: block;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow {
    right: 16px;
    left: auto;
  }
`,s().div`
  display: inline-block;
  vertical-align: top;

  .reply {
    padding: 5px 8px;
    margin: 10px 5px 5px 0;
    display: inline-block;
    border: 1px solid #cbaa00;
    line-height: 20px;
    border-radius: 30px;
    -webkit-backface-visibility: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    color: #005abe;
    background: #ffffff;
  }
`,s().div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  input[type="text"] {
    border-top: 1px solid black;
    padding: 10px;
    font-size: 14px;
    display: inline-block;
    width: 70%;
    vertical-align: middle;
    border-radius: 30px;
    border: solid 1px #555555;
    margin-left:20px;
  }
  .ava-send-user-input {
    width: 55px;
    padding: 5px 0px;
    margin: 0;
    display: inline;
    cursor: pointer;
    border: none;
    background: none;
  }
  .ava-send-arrow{
    background-size: 25px 25px;
    background-repeat: no-repeat;
    margin: 5px;
    display: inline-block;
    border-radius: 50%;
    background-color: #fad200;
    padding: 20px;
    background-position: center;
    vertical-align: middle;
  }
`,s().div`
  .category, .sub-category {
    border-bottom: 1px solid #f0f0f0;
  }
  .ava-faqs {
    overflow-y: scroll;
  }
  .faqs-list {
    position: absolute;
    background: #ffffff;
    top: 41px;
    bottom: 42px;
    z-index: 1;
    overflow: scroll;
    left: 0;
    right: 0;
  }
  .bg-dark{
    background-color: #f5f5f5;
  }
  .ava-fullscreen {
    position: absolute;
    top: 41px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
  }
  .sub-category-title,
  .category-title {
    padding: 10px;
    cursor: pointer;
  }
  .category-title img,
  .sub-category-title img {
    vertical-align: middle;
    padding: 5px;
    width: 30px;
  }
  .category-title span {
    padding: 2px;
  }
  .ava-hidden {
    display: none;
  }
  .ava-no-height{
    height: 0;
    transition: height 2s;
    display:none;
    -webkit-transition: height 2s;
  }
  .vertical-invert{
    transform: rotate(180deg);
  }
  .question {
    font-weight: 700;
    margin-bottom: 5px;
    position: relative;
    padding: 10px;
    padding-right: 15px;
    cursor: pointer;
  }
  .question-answer {
    font-size: 1.1em;
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
  }
  .answer{
    transition: height 2s;
    -webkit-transition: height 2s;
    padding: 10px;
    padding-right: 15px;
    color: #888888;
  }
  .no-results{
    color: #888888;
  }
  .show-answer-btn{
    background-size: 25px 25px;
    background-repeat: no-repeat;
    display: inline-block;
    padding: 10px;
    background-position: center;
    vertical-align: middle;
    cursor: pointer;
    position: absolute;
    right: 6px;
  }
`,s().div`
  .ava-cards {
    max-width: 100%;
    overflow-x: scroll;
  }
  .ava-card {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #e6e6e6;
    padding: 10px;
  }
  table {
    border-top: 1px solid #e6e6e6;
    width: 100%;
    line-height: 1.7em;
  }
  tr > td:first-child {
    color: #999999;
    text-align: left;
  }
  tr > td:last-child {
    text-align: right;
  }
  .title,
  .sub-title {
    text-align: center;
  }
  .title {
    font-weight: bold;
    line-height: 1.36;
    color: #000000;
  }
  .sub-title {
    line-height: 1.36;
    color: #999999;
  }
`,s().div`
  .live-chat-btn{
    border-radius: 100px;
    border: solid 1px #23a537;
    background-color: #ffffff;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 11% 50%;
    padding: 3px;
    padding-left: 38px;
    display: block;
    width: 113px;
    padding-left: 38px;
    margin-top: 15px;
    font-size: 1.2em;
    cursor: pointer;
    color: #23a537;
  }
  @media only screen and (max-width: 569px){
  .live-chat-btn{
    font-size: 1em;
  }
`,s().div`
  .ava-end-conversation {
    text-align: center;
    padding: 14px 0px;
    color: #005abe;
  }
  .ava-end-conversation .ant-rate-star {
    color: #005abe;
  }
`,s().div`
  .ava-header-image {
    text-align: center;
    position: absolute;
  }
  .ava-intro-close-btn{
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: inline-block;
    float: right;
    padding: 18px;
    margin: 10px;
    position: relative;
  }
  a{
    font-weight: bold;
  }
  .ava-move-btn{
    border-radius: 10px;
    background-color: #fad200;
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.06;
    padding: 5px 20px;
    border: none;
    float: right;
    cursor: pointer;
  }
  .ava-introduction-footer-page-no{
    vertical-align: middle;
    margin-top: 11px;
    display: inline-block;
  }
  @media only screen and (min-width: 570px){
    .ava-introduction {
      font-size: 1.3em;
      line-height: 1.59;
      margin-right: 15px;
      margin-bottom: 5px;
    }
    .ava-introduction-content {
      box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
      background-color: #ffffff;
      border-radius: 10px 10px 0 10px;
      padding: 35px;
      padding-top: 66px;
    }
    .ava-bottom-arrow{
      position: absolute;
      right: -3px;
      bottom: -2px;
      width: 37px;
      height: 30px;
      background-repeat: no-repeat;
      background-position: center center;
      margin-right: 30px;
      background-size: 30px 28px;
    }
    .ava-header-image {
      top: -53px;
      width: calc(100% - 30px);
    }
    .page{
      margin-bottom: 20px;
    }
  }
    @media only screen and (max-width: 569px){
      .ava-introduction {
        font-size: 0.8em;
        line-height: 1.59;
        margin-right: 15px;
        margin-bottom: 5px;
        position: fixed;
        bottom: 98px;
        width: 75%;
        right: 46px;
      }
      .ava-introduction-content {
        box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.5);
        background-color: #ffffff;
        border-radius: 10px 10px 0 10px;
        padding: 20px;
        padding-top: 34px;
      }
      .ava-bottom-arrow{
        position: absolute;
        right: 0px;
        bottom: -8px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 22px;
        width: 20px;
        height: 24px;
      }
      .ava-header-image > img{
        width: 73px;
        height: 72px;
      }
      .ava-header-image{
        top: -39px;
        width: 100%;
      }
      .page{
        margin-bottom: 0;
      }
      .ava-move-btn{
        padding: 2px 10px;
      }
      .ava-introduction-footer-page-no{
        vertical-align: middle;
        margin-top: 0;
        display: inline-block;
      }
    }
`;var x=e(27233),g=e(87291),b=e(96117),h=e(91324),m=e(70579);const{getAvaChat:u}=x.A,{resetLoadingRedux:f}=b.A,{resetErrorRedux:v}=g.A;class k extends i.Component{constructor(t){var a;super(t),a=this,this.messageContentAva=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,m.jsxs)(l,{children:[t&&(0,m.jsx)("p",{children:t.map((t=>(0,m.jsx)("p",{children:t})))}),a&&(0,m.jsx)(p.Row,{type:"flex",children:a.map((t=>(0,m.jsx)("div",{className:"quickReply",children:t})))}),e&&(0,m.jsx)(c,{children:e.map(((t,a)=>(0,m.jsx)(p.Card,{children:(0,m.jsx)("div",{className:"card",dangerouslySetInnerHTML:{__html:t}})},a)))})]})},this.messageFormatting=function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((t=>{let{message_type:e,message:i={},time:o}=t;const{reply_texts:n,quick_replies:d,cards:s}=i;return{author:(0,m.jsx)("b",{children:e}),content:"AVA"===e?a.messageContentAva(n,d,s):i.text,avatar:"VISITOR"===e?`${h.Fm}/gosure/user_default_icon%202.png`:`${h.Fm}/ava/bot-icon.svg`,datetime:(0,m.jsx)(p.Tooltip,{title:r()(o).add(7,"hours").format("YYYY-MM-DD HH:mm:ss A"),children:(0,m.jsx)("span",{children:r()(o).add(7,"hours").format("YYYY-MM-DD HH:mm:ss A")})})}}));a.setState({completeChatData:t})},this.state={completeChatData:[],sessionID:""}}componentDidMount(){const t=new URLSearchParams(this.props.location.search).get("session_id");this.setState({sessionID:t}),t&&this.props.getAvaChat({query:{session_id:t}}),this.props.resetLoadingRedux(["GET_AVA_CHAT"]),this.props.resetErrorRedux(["GET_AVA_CHAT"])}UNSAFE_componentWillReceiveProps(t){const{avaChatLoading:a,avaChatError:e,avaChatMessage:i,avaChat:o}=t;!1===a&&(!1===e?this.messageFormatting(null===o||void 0===o?void 0:o.chat):p.notification.error({message:"Error",description:i}),this.props.resetLoadingRedux(["GET_AVA_CHAT"]),this.props.resetErrorRedux(["GET_AVA_CHAT"]))}render(){const{avaChatLoading:t}=this.props,{completeChatData:a=[],sessionID:e}=this.state;return(0,m.jsx)(p.Spin,{spinning:!!t,children:(0,m.jsx)(l,{children:(0,m.jsxs)(p.Card,{children:[(0,m.jsxs)("h3",{className:"header",children:["Session ID: ",e]}),e?(0,m.jsx)(p.List,{className:"comment-list",header:`${a.length} messages`,itemLayout:"horizontal",dataSource:a,renderItem:t=>(0,m.jsx)("li",{children:(0,m.jsx)(p.Comment,{actions:t.actions,author:t.author,avatar:t.avatar,content:t.content,datetime:t.datetime})})}):(0,m.jsx)(p.Result,{status:"500",title:"404",subTitle:"No Session ID found for getting chats"})]})})})}}const w=(0,o.connect)((t=>({avaChatLoading:t.Loading.GET_AVA_CHAT,avaChatError:t.Error.GET_AVA_CHAT,avaChat:t.Ava.avaChat})),{getAvaChat:u,resetLoadingRedux:f,resetErrorRedux:v})(k)}}]);
//# sourceMappingURL=7476.6a4e89ef.chunk.js.map