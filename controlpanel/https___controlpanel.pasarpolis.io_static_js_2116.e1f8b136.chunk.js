"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[2116],{32116:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ie});var a=s(1502),i=s.n(a),n=s(24952),o=s(80878),r=s.n(o),l=s(67816);const p=r().div`
    ::-webkit-scrollbar {
        width: 2px !important;
    }
    display: block;
    --dark-slate-blue:#2b2171;
    --top-header:#ffd500;
    --right-part-background :#f6f6f6;
    p {
      margin:0 !important;
    }
    overflow:hidden !important;

    .padding15 {
        padding: 15px !important;
    }
    .padding10 {
        padding: 10px !important;
    }
    .paddingTB5 {
        padding: 5px 0;
    }
    .w100 {
        width: 100%:
    }
    .profile-picture {
        width: 45px;
        height: 45px;
        object-fit: contain;
        margin: auto;
        border-radius: 50%;
        max-width: 100%;
    }
    .message-image {
        height: 145;
        width: 100%;
        object-fit: contain;
        cursor: pointer;
    }
    .message-image img {
        width: 100%;
    }
`,c=r().div`
    display: block;
    background: linear-gradient(to right, #24307f, 50%, #1c71bb 100%);
    height: calc(100vh - 138px);
    overflow-y:scroll;
    
    .ant-input {
        border-radius:2px;
        background:#ffffff29 !important;
        color:#ffffff !important;
        border:none;
    }
    .left-body{padding: 20px 0;
    }

    .left-section-scroll {
        height: 100%;
        overflow-y: scroll;
    }

    .divider{
        opacity: 0.2;
        border: solid 0.4px #ffffff;
        margin: 0 !important;
    }
    .justify-space-between {
        justify-content: space-between !important;
    }
    .color-white {
        color: #fff;
    }
    .small-text {
        font-size: 10px;
    }
    .message-review {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .badge {
        width: 20px;
        height: 20px;
        background: #ffd500;
        font-weight: 800;
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
    }
    .activeCardStyle {
        background: rgba(0, 0, 0, 0.1);
        fontWeight: 900;
        borderBottom: none;
        cursor: pointer;
    }
    .nonActiveCardStyle {
        borderBottom: solid 0.4px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        fontWeight: 300;
    }
`,d=r().div`
    background:var(--right-part-background);
    display: block;
    #message-body-container {
        height: calc(100vh - 138px);
        display: flex;
        flex-direction: column;
        .flex-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }

    .message-container-height {
        height: 100vh;
    }
    .overflowAuto {
        overflow: auto;
    }
`,h=r().div`
    display:flex;
    align-items: center;
    background:var(--top-header);
    max-height:60px !important;
    height:100% !important;
    z-index:1;
    width:100%;

`,g=r().div`
    padding: 20px 20px 0 20px;
    z-index:0;
    position:relative !important;

    .Messages-list {
        padding: 20px 0 !important;
      }
      .Messages-list.right{
        display: flex;
        flex-direction: row;
      }
      .Messages-list.left{
        display: flex;
        flex-direction: row-reverse;
      }

    .arrow-box {
        position: relative;
        top: -15px;
        width:240px;
        border-radius: 1px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        margin-left: 10px;
        padding: 10px 15px !important;
    }
    .arrow-box:before {
        content: "";
        border-bottom: 20px solid #fff;
        position: absolute;
        right: auto;
        bottom: 0;
        box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.01);
    }
    .left-arrow {
        left: 8px;
    }
    .left-arrow:before {
        border-left: 20px solid transparent;
        left: -10px;
    }
    .right-arrow {
        right: 8px;
    }
    .right-arrow:before {
        border-right: 20px solid transparent;
        right: -10px;
    }
    .name-logo{
        align-self: flex-end;
    }
    .message-chat-time {
        background-color: rgba(10, 106, 179, 0.5);
        color: #fff;
        width: 120px;
        padding: 6px !important;
        text-align: center;
        border-radius: 18px;
        margin-left: 40%;
        margin-bottom: 12px;
    }
    .download-button {
        background: #ffd500;
        color: #000;
        width: 100%;
    }
    .pasar-polis-icon {
        width: 30px;
        height: 30px;
        background: #5d5753;
        color: #fff;
        font-weight: 800;
        text-align: center;
        border-radius: 50%;
        font-size: 16px;
        padding: 2px 0; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`,m=r()(l.Row)`

    display: flex;
    flex-direction: column;
    height: auto;
    width:100%;
    font-size: 20px;
    background: #f6f6f6 !important;

    .input_container{
        position:relative;
    }
    .image-style {
        max-width: 384px;
        width: auto;
        height: auto;
        max-height: 400px;
        object-fit: contain;
    }
    .paddingT10 {
        padding-top: 10px;
    }
    .flex {
        display: flex;
    }
    .flex-space-around {
        justify-content: space-around;
    }
    .flex-direction-column {
        flex-direction: column;
    }
    .flex-center {
        justify-content: center;
    }
    .text-message {
        width: 80%;
        border: 1px solid #000;
        border-radius: 8px;
    }
}
`,u=r().div`
    border: solid 2px #9797973d !important;
    border-radius: 29px !important;
    font-size:16px;
    background:#97979700 !important;

    display: flex;
    align-items: center;
    
    .chatSideButton {
        padding: 5px;
    }
    .chatSideButton img {
        height: 40px;
        width: 40px;
        object-fit: contain;
    }
    .customInput {
        border: none;
        background: transparent;
        padding: 5px;
        height: 40px;
    }
    .customInput:focus, .customInput:hover {
        outline: none !important;
        box-shadow: none !important;
    }
`;var x=s(54589),f=s.n(x),j=s(17823),b=s.n(j),w=s(85358),v=s(91324),C=s(70579);const{showFirstRenderData:y,displayContactData:S}=w.A;class A extends a.Component{constructor(e){super(e),this.getTime=()=>{const{data:e,profileData:t}=this.props,{last_message_timestamp:s}=e;let a=b().utc(s).tz(t&&t.user_timezone);switch(b().utc().tz(t&&t.user_timezone).diff(a,"days")){case 0:return a.format("HH:MM");case 1:return"Yesterday";default:return a.format("DD/MM/YYYY")}},this.parentCall=(e,t,s)=>{var a=[];a.push(t),this.setState({hideCard:a,val:t},(()=>{let a={first_number:e,image_number:s};this.props.displayContactData(a),this.props.openingCard(e,t,s)}))},this.state={hideCard:[],val:"",firstCard:!1}}render(){const{data:e={},showactivecard:t}=this.props,{val:s}=this.state,{id:a,number:i,unread_count:n,profile_picture:o,last_message_snippet:r}=e;return(0,C.jsx)("div",{className:t===a?"activeCardStyle":"nonActiveCardStyle",onClick:()=>this.parentCall(i,a,o||`${v.Fm}/gosure/user_default_icon%202.png`),children:(0,C.jsxs)(l.Row,{type:"flex",align:"middle",justify:"space-around",className:"padding10",children:[(0,C.jsx)(l.Col,{span:4,children:(0,C.jsx)("img",{src:o||`${v.Fm}/gosure/user_default_icon%202.png`,className:"profile-picture",alt:""})}),(0,C.jsxs)(l.Col,{span:18,children:[(0,C.jsxs)(l.Row,{type:"flex",className:"justify-space-between",children:[(0,C.jsx)(l.Col,{className:"color-white",children:(0,C.jsx)("b",{children:i||""})}),(0,C.jsx)(l.Col,{className:"small-text color-white",children:this.getTime()})]}),(0,C.jsxs)(l.Row,{type:"flex",className:"justify-space-between",children:[(0,C.jsx)(l.Col,{span:18,className:"color-white",children:(0,C.jsx)("p",{className:"message-review",children:(0,C.jsx)("small",{children:r})})}),n>0&&s!==a&&(0,C.jsx)(l.Col,{span:3,className:"small-text",children:(0,C.jsx)("p",{className:"badge",children:n})})]})]})]})})}}const D=(0,n.connect)((e=>({profileData:e.Auth.profile})),{displayContactData:S,showFirstRenderData:y})(A);var N=s(97418);const{getWhatsappData:M,getWhatsappList:R}=w.A,W=new(f());class L extends a.Component{constructor(e){super(e),this.componentDidMount=()=>{this.startWatchWhatsAppPost()},this.startWatchWhatsAppPost=()=>{const{getWhatsappList:e}=this.props;this.intervalLeft=setInterval((function(){e({page:this.page,isIntervalUpdate:!0})}),3e4)},this.renderDetaildata=(e,t,s)=>{this.setState({showCardActiveId:t,read:t},(()=>{e!==this.state.number&&(W.set("whatsapp-no",e,{path:"/"}),W.set("images",s,{path:"/"}),this.props.getWhatsappData(e),this.setState({number:e}))}))},this.onScrollContainer=e=>{let t=e.target;const{chatMetaData:s}=this.props,{query:a}=this.state,{pages:i}=s;if(t.scrollHeight-t.scrollTop===t.clientHeight){if(this.page+1>i)return;clearInterval(this.intervalLeft),this.isScrolling=!0,this.lastScrollTop=t.scrollTop,this.page=this.page+1,this.props.getWhatsappList({page:this.page,query:a})}else this.page>1&&this.isScrolling&&this.lastScrollTop>t.scrollTop&&(this.isScrolling=!1,this.startWatchWhatsAppPost())},this.filterData=(0,N.sg)((e=>{this.isScrolling=!1,this.page=1,this.intervalLeft&&clearInterval(this.intervalLeft);let t=e.toString();this.setState({query:t}),this.props.getWhatsappList({page:this.page,query:t})}),200),this.state={contactList:[],showCardActiveId:"",number:"",read:"",firstData:[],firstRenderNumber:"",searchdata:[],value:"",query:""},this.intervalLeft=null,this.page=1,this.isScrolling=!1,this.isSearch=!1,this.lastScrollTop=0}componentWillReceiveProps(e){const{listDatamessage:t,listData:s,isIntervalUpdate:a,chatMetaData:i}=e;if("success"===t){let e=[];const{searchData:t}=this.state;a?(e=t.slice(i.per_page,t.length),e=[...s,...e]):e=t?t.concat(s):s,this.setState({searchData:this.isScrolling?e:s,contactList:s})}}componentWillUnmount(){clearInterval(this.intervalLeft),this.page=1}render(){const{showCardActiveId:e,searchData:t}=this.state;return(0,C.jsxs)("div",{className:"left-part-data left-section-scroll",onScroll:this.onScrollContainer,children:[(0,C.jsx)(l.Row,{type:"flex",justify:"center",className:"left-body",children:(0,C.jsx)(l.Col,{span:20,children:(0,C.jsx)(l.Input,{placeholder:"Search...",onChange:e=>this.filterData(e.target.value)})})}),(0,C.jsx)(l.Divider,{className:"divider"}),(0,C.jsx)(l.Row,{children:(0,C.jsx)(l.Col,{xs:24,children:t&&t.map(((t,s)=>(0,C.jsx)(D,{data:t,openingCard:this.renderDetaildata,showactivecard:e},s)))})})]})}}const Y=(0,n.connect)((e=>({listData:e.CustomerSupport.listDataDetail,chatMetaData:e.CustomerSupport.chatMetaData,isIntervalUpdate:e.CustomerSupport.isIntervalUpdate,listDatamessage:e.CustomerSupport.listDataMessageDisplay})),{getWhatsappData:M,getWhatsappList:R})(L),{previewSelected:T}=w.A;let B="";class U extends a.Component{constructor(e){super(e),this.scrollToBottom=()=>{this.messagesEnd.current.scrollIntoView({behavior:"auto"})},this.getTime=e=>{const{profileData:t}=this.props;let s=b().utc(e).tz(t&&t.user_timezone);switch(b().utc().tz(t&&t.user_timezone).diff(s,"days")){case 0:return B!==s.format("DD/MM/YYYY")?(B=s.format("DD/MM/YYYY"),"Today"):"";case 1:return B!==s.format("DD/MM/YYYY")?(B=s.format("DD/MM/YYYY"),"Yesterday"):"";default:return B!==s.format("DD/MM/YYYY")?(B=s.format("DD/MM/YYYY"),s.format("DD/MM/YYYY")):""}},this.state={messageDifference:"",displayTime:""},this.messagesEnd=i().createRef()}componentDidMount(){this.scrollToBottom()}componentDidUpdate(){this.scrollToBottom()}imagePreviewFunction(e){var t={showModal:!0,image:e};this.props.previewSelected(t)}render(){var e=this;const{messages:t,contanctData:s}=this.props;return(0,C.jsx)(i().Fragment,{children:(0,C.jsxs)(l.Col,{children:[(0,C.jsx)(l.Row,{className:"message-body-container",children:t&&t.map((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=e.getTime(t.timestamp);return(0,C.jsxs)("div",{children:[(0,C.jsx)(l.Row,{align:"middle",justify:"center",children:""!==a&&(0,C.jsx)("div",{className:"message-chat-time",children:a})}),"received"===t.message_type?(0,C.jsx)(l.Row,{className:"Messages-list right",children:(0,C.jsxs)(l.Row,{type:"flex",align:"middle",className:"w100",children:[(0,C.jsx)(l.Col,{className:"name-logo",children:(0,C.jsx)("span",{children:(0,C.jsx)("img",{src:s&&s.profile_picture||`${v.Fm}/gosure/user_default_icon%202.png`,className:"profile-picture",alt:""})})}),(0,C.jsxs)(l.Col,{className:"arrow-box left-arrow",children:["text"===(t&&t.content_type)?(0,C.jsx)("p",{children:t.content.body}):(0,C.jsx)("p",{children:t&&"image"===t.content_type?(0,C.jsxs)(i().Fragment,{children:[(0,C.jsx)("div",{className:"message-image",children:(0,C.jsx)("img",{src:t.content&&t.content.url,onClick:()=>{e.imagePreviewFunction(t.content?t.content.url:"")},alt:""})}),(0,C.jsx)("p",{children:t.content&&t.content.caption})]}):(0,C.jsxs)(i().Fragment,{children:[(0,C.jsx)("p",{children:(0,C.jsx)("b",{children:t.content&&t.content.caption})}),(0,C.jsx)("div",{className:"padding10 w100",children:(0,C.jsx)(l.Button,{href:t.content&&t.content.url,className:"download-button",target:"_blank",download:!0,children:"Download"})})]})}),(0,C.jsxs)(l.Row,{type:"flex",justify:"space-between",children:["failed"===t.status&&(0,C.jsx)(l.Icon,{type:"exclamation-circle",style:{color:"red"}}),t.timestamp&&b()(t.timestamp).format("HH:mm")]})]})]})}):(0,C.jsx)(l.Row,{span:24,className:"Messages-list left",children:(0,C.jsxs)(l.Row,{type:"flex",className:"w100",gutter:10,children:[(0,C.jsxs)(l.Col,{className:"arrow-box right-arrow",children:[t.content&&t.content.body?(0,C.jsx)("p",{children:t.content.body}):(0,C.jsx)("p",{children:t&&"image"===t.content_type?(0,C.jsxs)(i().Fragment,{children:[(0,C.jsx)("div",{className:"message-image",children:(0,C.jsx)("img",{src:t.content&&t.content.url,onClick:()=>{e.imagePreviewFunction(t.content?t.content.url:"")},alt:""})}),(0,C.jsx)("p",{children:t.content&&t.content.caption})]}):(0,C.jsxs)(i().Fragment,{children:[(0,C.jsx)("p",{children:(0,C.jsx)("b",{children:t.content&&t.content.caption})}),(0,C.jsx)("div",{className:"padding10 w100",children:(0,C.jsx)(l.Button,{href:t.content&&t.content.url,className:"download-button",target:"_blank",download:!0,children:"Download"})})]})}),(0,C.jsxs)(l.Row,{type:"flex",justify:"space-between",children:[t.timestamp&&b()(t.timestamp).format("HH:mm"),"failed"===t.status&&(0,C.jsx)(l.Icon,{type:"exclamation-circle",style:{color:"red"}})]})]}),(0,C.jsx)(l.Col,{className:"name-logo",children:(0,C.jsx)("p",{className:"pasar-polis-icon",children:"P"})})]})})]})}))}),(0,C.jsx)("div",{ref:this.messagesEnd})]})})}}const k=(0,n.connect)((e=>({contanctData:e.CustomerSupport.contanctData,profileData:e.Auth.profile})),{previewSelected:T})(U),{TextArea:F}=l.Input,{sendWhatsappMessage:I,getWhatsappData:G,uploadData:P,getWhatsappList:z,resetRedux:q}=w.A,Q=e=>{let{onSuccess:t}=e;setTimeout((()=>{t("ok")}),0)};class X extends a.Component{constructor(e){super(e),this.startUpload=e=>{this.setState({loading:!0});let t=new FormData;t.append("file",e),this.props.uploadData({formData:t})},this.messageAccepting=e=>{this.setState({message:e.target.value})},this.imageMessage=e=>{this.setState({imageMessage:e.target.value})},this.sendingMessage=()=>{const e={WHATSAPP:{recipient_type:"individual",to:this.state.idNo,type:"text",body:this.state.message,whatsapp_type:"chat"}};this.props.sendWhatsappMessage(e),this.setState({message:""}),setTimeout((()=>{this.props.getWhatsappList(),this.props.getWhatsappData(this.state.idNo)}),100)},this.handleOk=e=>{const{fileType:t}=this.state;let s={};s="image/jpeg"===t||"image/jpg"===t||"image/png"===t?{WHATSAPP:{recipient_type:"individual",to:this.state.idNo,type:"image",image:{GCSURLs:[],PUBURLs:[{URL:e,Name:this.state.filename,Attach:!0}],caption:this.state.imageMessage},whatsapp_type:"chat"}}:{WHATSAPP:{recipient_type:"individual",to:this.state.idNo,type:"document",document:{GCSURLs:[],PUBURLs:[{URL:e,Name:this.state.filename,Attach:!0}],caption:this.state.imageMessage},whatsapp_type:"chat"}},this.props.sendWhatsappMessage(s),this.setState({visible:!1},(()=>{setTimeout((()=>{this.props.getWhatsappData(this.state.idNo),this.setState({imageMessage:" "})}),2e3)}))},this.enterPressed=()=>{this.sendingMessage()},this.onClose=()=>{this.props.resetRedux(),this.setState({visible:!1,imageMessage:" "})},this.state={message:"",idNo:"",loading:!1,newurl:"",visible:!1,imageMessage:"",fileType:""}}componentWillReceiveProps(e){const{individualDetailData:t,individualMessage:s,uploadNewMessage:a,url:i}=e;"success"===s&&this.setState({idNo:[...t][0].recipient}),"success"===a&&this.setState({visible:!0,imageMessage:" ",newurl:i},(()=>{this.props.resetRedux()}))}async handleChange(e){if("done"===e.file.status||"error"===e.file.status){const t=e.file.size/1024/1024>20;if(t)return void l.message.error("File is to big, max 20mb");if(t)l.message.error("File is not supported");else{const t=e.file.originFileObj;this.setState({filename:t.name,filesize:t.size,file:t,fileType:e.file.type}),this.startUpload(t)}}}render(){const{url:e,uploadDataLoading:t}=this.props;return(0,C.jsxs)(i().Fragment,{children:[(0,C.jsx)(l.Spin,{spinning:!!t,children:(0,C.jsx)(l.Modal,{title:"Preview",visible:this.state.visible,onOk:()=>{this.handleOk(e)},onCancel:this.onClose,children:(0,C.jsxs)(l.Row,{type:"flex",style:{flexDirection:"column"},gutter:40,children:[(0,C.jsx)(l.Col,{span:24,style:{display:"flex",justifyContent:"center"},children:(0,C.jsx)("img",{src:e,style:{maxWidth:384,width:"auto",height:"auto",maxHeight:400},alt:""})}),(0,C.jsxs)(l.Col,{span:24,style:{display:"flex",justifyContent:"space-around",paddingTop:10},children:[(0,C.jsx)("span",{children:"Message"}),(0,C.jsx)("input",{type:"text",onChange:e=>{this.imageMessage(e)},style:{width:"80%",border:"1px solid black",borderRadius:8},value:this.state.imageMessage})]})]})})}),(0,C.jsx)(l.Col,{span:24,className:"input_container chatSideButton",children:(0,C.jsxs)(u,{children:[(0,C.jsx)("span",{id:"first",className:"chatSideButton",children:(0,C.jsx)(l.Upload,{name:"file",showUploadList:!1,multiple:!1,customRequest:Q,onChange:e=>this.handleChange(e),children:(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABB9JREFUWAnVmVtIFGEUx/+zpVb0UNBFTCoty9Uu9hAkSkSZ9RBGFj1JpQ8+VQhRL1FIRfQUSUT0UiTVY6bVSxcI0oKikgTXlBSjpCsU2cUkp//5Zt3dGWdWZ9xdtw929rud8/3mfPczGsYR9ACWQ0cZf3nQkEFVGYzLP5ju47OP6T7G2/lr0vxoU2UeHppbmSBcFeW2EiLLlbyGHtZvJPRFt9BjBtVfYz4GcJwNVRDQ5wrQWlnDELOuIA1HtEV4Yy22S48KqutIRQDHKFxDwDQ7JZ7zNPymbB38OKpp+BNNT1RQvQuzKX6dCoqjKYlBWTPNUa7l4JOTLkdQvQMr2EFNtOICJ+GY5mvo5YAq03Lx0k6vLaiC/IsWCky3E4pjXj8mocgOdgSo6u5BPE2YJa1vLZZNwWrrMDDNXjVxZEwmqrutkJKWtsmgWCLKTaCc3bL8xHviRDTvGC0OrjShCqGuD66Tr/hGU0KlExmRpSsNS4fX2bBFZTEfJ+QAV8KPX2L0dsJibDBKoQJV26LsOB7D4CBQeRiYuQaYuxYoKAc6uj0qM4tVBNmCW6GOKlozbF1z5VFT1bXAgyfA7fNA4CaQvxhYXwl8+z6qaPQKwiRsDGqM6u3oZkZWdCn7UuluseSNs0BpkVFniDt5Oi17oRbYVmIvN+ZcHmS0PGT71OLuEVIa6+oFfg0Aq/zhpn3sm2U5QFtnOM9zjGzC6OM2WeZZCQXFehJ4qED5fmDviXCaayEePmNZvpHn+UlGGQMRtvCsKr6CZPRxlGbEt5UYaCejzPTkByWjdH3yg5JRLPpfBBmjcltM7kBGsWjMQGWJilMgqNy7YxT82cAd3guucht93g7kMh2TQEbp+sB4lKWlGtKylR6sMuD2nQR2lALbNwKSn5oynhYoSwfGZD4aaVU5MHsKSxYCs2YALS+AnZuBpnNmNY9bgcKV5jzXKXpZfMpjYXgwXMuLgIxLOYycqQd+/DSreM/L76UGoKTQnO8qJYcSuoJ8QaFGV8KWyqcP8UjXD2yqBhruAT1vgWu3eNTjUMjKBA7ssQi4Syo2NU+D/qRWDoFhcHeqWFtO9jWngLuPgM9fgXlzgC3rAHmJaVNdqzMExPWjoUAsGlpQeCa9TNBdHlWGxOTE9O4DkJkeyvIe0VDPs+huURAGNZxgnYSNrX/JK6bT5S5426vzqjcOcnXDN1DRHbKoJNSlvx33GZ3ou30zXcMbuKJwFTaCafKoAnrViN87XCHh/9K2ePYiIIXBBCoZyudDrxqjXHASHvpJVGb1OwnFCFDJVN40etUSalmxpIMnzxE0BEuvGuPNko5zaFYePAffqLRtmkx2MGqCJbtrPBI86T82RMJKPOk/31iBFbTh55cPYn4OIrkkOn0QC3DaNtm5vO302uX9A2dnLDOJVF2nAAAAAElFTkSuQmCC",alt:"upload"})})}),(0,C.jsx)(F,{autosize:{minRows:1,maxRows:6},className:"customInput inputTypeBox",placeholder:"Type Something ....",onChange:e=>{this.messageAccepting(e)},value:this.state.message}),(0,C.jsx)("span",{id:"second",className:"chatSideButton",onClick:e=>this.enterPressed(e),children:(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABFtJREFUWAnVmU9oFHcUx9+bnezGrBprTBpT0F1Fi8b6B9SLBYU2lSquRfAinjzYQhQ9FxRRPEj1sFRQL1600FMxKbaU9qCQguDBthpFYskmYg5JiGA2Idls5tf3nXGG3cnMbiY7yaY/WH5/5/0+837v936/ectUQYqfuv+JIpVipTYTcYuIapE6cmLiAcnkpwYU83Opd45dP/gUfXNJHPQhwJFSJwToMClKBnqeqVeAO4j5dlDoWYN+cOb3Nbmp3CXFxnEB1AIBugczGay0u9Ga6Lm36bZ+d7dXvSxo64XuaGao96IiOiuajHkJmXsbTzBTOtGYPN99oTVXSk5J0KWnf2k0jOmfRIOflhJScR9Tl6ZFjmS/PzDkJ8sXNH7m160qP90pWlzr93Co7cx9rEdSY+kv//GS6wlqQeb/FE0u9Xpo3tqYsqzre7xgZ4Bay208XjBNut9aNKtp2i63GRTtXmwcyyYXaLndkKiLqYEBLIXdRaCZwcyled84hbP7lWXzwtMUdjtLDz85OTX5Ul6ptnBA9co8EauJfWz7WUejcOaLBxLqUbUWk6UqU6Pmma2Mvyo+ccJWP04w1rbjuLU0Kmd3UMjkqjra0BQPG61YHo5qsEkyQc0LRvGQsrUtHy2nJ+f30b323bS/tans+LkOsNnYdO5T+b+DCjq0rZl+PLnTeezfwTG6+TBDdx69ptGJvNMeRoFr9G2ayhupMIStFzP47mgr9Vz+nK5JHqZZgFETe90UBqgtY1mtTt/sS4ZqFmDUrZu5XOJCTiz3t7bNTebv1WCWbj3sq8AsuCUS3X3sW2FsCMoJO+wfGacegRjO5ihvyA0mplNNxHHNjsiV8Sh9IRvu670JWl0fo97hcRoZm3L6yxXkpXNc1/7zaJi3pGYBgetKNsQp2Si5lNetilNC8g+XW/dupRT98WKIbjzI0G/dg+U48QGWnfn65R+ryggdX4viqzYGnX11fS19taPZ0p5oDJpLNNTRkmjEVxTM5QdxX3BjPeLOZpvAKJsJn7QUGHRnYgVdPbplVnNVvpkIoAqgoafAdliSQA3ocpy+IDJKDgvSOdflLTUHAhi6uLsO2YRyxasshbC8vgCIsui4QomL6hUXlfQd6dMR7vL6TCLRFTBiMyFO1CE7/6zPUM/mZ2/e0Y6LDwLtXk9BZRrBhiGWH5VYkNAGMlScLkFcTBke724wgc0GhWoRC/IeXb1WMIHNAUUBASuhn6welntmnjCZ3jc7Ryi+9lhx2j28WnXxRmn7CxQMDigqiaaEaJW6UK5qEgZE+AoZnO96u/F/EdIBLGI+iKqJZrM2/ILlZpAsknLHnTB/0dLbQIimIaomm6vPbpv33Aw7ekfyMLcnKDoAi6jagtisGcjVdnmFG8GC5AuKTixBsnHdZ/IpcGV+XBdC43wFc3gtNxjsNGMz2R3ufNH/2eAGXvR/37iBUbdC6EbKig2U+ENM7rysa52lbNBLfmHbf/b12Yp/z8oOAAAAAElFTkSuQmCC",alt:"enter"})})]})})]})}}const H=l.Form.create({})(X),J=(0,n.connect)((e=>({individualDetailData:e.CustomerSupport.individualDetailMessage,individualMessage:e.CustomerSupport.individualMessage,recievSuccessMessage:e.CustomerSupport.sendSuccessMessage,url:e.CustomerSupport.uploadUrl,uploadNewMessage:e.CustomerSupport.uploadMessage,uploadDataLoading:e.Loading.UPLOAD_FILES})),{resetRedux:q,getWhatsappList:z,sendWhatsappMessage:I,getWhatsappData:G,uploadData:P})(H),{readWhatsappStatus:O,getWhatsappData:E,getWhatsappList:K,resetRedux:V}=w.A,Z=new(f());class _ extends a.Component{constructor(e){super(e),this.state={data:[],name:"",image:"",intervalId:"",readStatus:"",textHeight:280}}componentDidMount(){const{getWhatsappData:e}=this.props;var t=setInterval((()=>{e(Z.get("whatsapp-no"))}),3e4);this.setState({intervalId:t})}componentWillReceiveProps(e){const{individualDetailData:t,individualMessage:s,contanctData:a}=e;"success"===s&&this.setState({data:[...t],name:a&&a.first_number||Z.get("whatsapp-no"),image:a&&a.image_number||Z.get("images")},(()=>{const{data:e}=this.state;let t=e[0]?e[0].messages:" ",s=[];t.forEach((e=>{"unread"===e.status&&s.push(e.id)}));let a={recipient_id:e[0].recipient,message_ids:s};this.props.readWhatsappStatus(a),this.props.resetRedux()}))}componentWillUnmount(){clearInterval(this.state.intervalId)}render(){const{mainbodyLoading:e}=this.props,{data:t,name:s,image:a,textHeight:i}=this.state;return(0,C.jsxs)("div",{id:"message-body-container",children:[(0,C.jsx)(h,{children:(0,C.jsx)(l.Row,{children:(0,C.jsx)(l.Col,{className:"flex-container",children:(0,C.jsxs)(l.Row,{type:"flex",align:"middle",children:[(0,C.jsx)(l.Col,{className:"padding10",children:(0,C.jsx)("img",{src:a||(0,C.jsx)(l.Avatar,{size:"large",icon:"user"}),className:"profile-picture",alt:"Profile"})}),(0,C.jsx)(l.Col,{align:"middle",children:(0,C.jsx)("p",{children:(0,C.jsx)("b",{children:s||" "})})})]})})})}),(0,C.jsx)(l.Row,{className:"overflowAuto message-container-height",children:(0,C.jsx)(l.Col,{xs:24,children:(0,C.jsx)(l.Spin,{spinning:e,children:(0,C.jsx)(g,{textHeight:i,children:(0,C.jsx)(k,{messages:t[0]?t[0].messages:""})})})})}),(0,C.jsx)(m,{className:"chatInputBox",children:(0,C.jsx)(J,{inputBoxHeight:e=>this.setState({textHeight:230+e})})})]})}}const $=(0,n.connect)((e=>({individualDetailData:e.CustomerSupport.individualDetailMessage,individualMessage:e.CustomerSupport.individualMessage,contanctData:e.CustomerSupport.contanctData,mainbodyLoading:e.Loading.WHATSAPP_DETAIL_MESSAGE,listmessage:e.CustomerSupport.listDataMessageDisplay})),{getWhatsappList:K,getWhatsappData:E,readWhatsappStatus:O,resetRedux:V})(_),ee=new(f()),{getWhatsappList:te,imageBlank:se}=w.A;class ae extends a.Component{constructor(e){super(e),this.handleCancelShowImg=()=>this.setState({previewVisible:!1},(()=>{this.props.imageBlank()})),this.state={previewVisible:!1,image:""}}componentWillReceiveProps(e){if(void 0!==e.imageSelectedUrl){const{imageSelectedUrl:t}=e;this.setState({previewVisible:t.showModal,image:t.image})}}componentDidMount(){this.props.getWhatsappList({page:1})}componentWillUnmount(){ee.remove("whatsapp-no"),ee.remove("images")}render(){const{selectedCardFromLeft:e}=this.props;return(0,C.jsx)(l.Row,{children:(0,C.jsxs)(p,{children:[(0,C.jsx)(l.Modal,{visible:this.state.previewVisible,onCancel:this.handleCancelShowImg,footer:null,children:(0,C.jsx)("img",{src:this.state.image,style:{width:"100%",height:"auto"},alt:""})}),(0,C.jsxs)(l.Row,{children:[(0,C.jsx)(l.Col,{xs:6,children:(0,C.jsx)(c,{children:(0,C.jsx)(Y,{})})}),""!==e?(0,C.jsx)(l.Col,{xs:18,children:(0,C.jsx)(d,{children:(0,C.jsx)($,{})})}):""]})]})})}}const ie=(0,n.connect)((e=>({individualMessage:e.CustomerSupport.individualMessage,selectedCardFromLeft:e.CustomerSupport.contanctData,imageSelectedUrl:e.CustomerSupport.imageSelected})),{getWhatsappList:te,imageBlank:se})(ae)}}]);
//# sourceMappingURL=2116.e1f8b136.chunk.js.map