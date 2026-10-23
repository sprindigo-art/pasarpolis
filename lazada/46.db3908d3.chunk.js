(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[46],{1004:function(e,t,i){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTDIyMjAwMDExMTAwMDIyMjIyMjMzMwqNEFgAAAAHdFJOUwDwMEgQxYD4ZDhOAAAA5ElEQVRIx+3VMQ6DMAwF0IhGPUCWrM0NOnVm6Q0qsVbqCRiQr18oItimdr/UrSXjT3gEiE0I+/iPcXi0MoiXs14TO0oyKTSoy8KVqD/xoMlEN7WoI5JUGYNB7WiMBDVBRHJXxyniVHkF963EqBlSUsySmqG+1Q/MqSbr27+JC+kH2eYGJCcsiM+YEJ+yoXXOgVbKgyrlQZVyoYVyIU7ZEKOSUw0L5UGVSuHbRdDtkI1DrwB5mdBnQT4wdFSQQwcdX6QQoJJCihMqc6RhQK0HamJ4O/zUWKEWjTV76LcB/YD28aPjCSjp0wt9ef6DAAAAAElFTkSuQmCC"},1014:function(e,t,i){"use strict";var a=i(1016);t.a=a.a},1016:function(e,t,i){"use strict";var a=i(11),n=i(19);const r=a.c.div`
  display: ${e=>e.isOpen?"block":"none"};
  position: fixed; /* Stay in place */
  z-index: 3000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden;
  background: #000000;
  opacity: 0.8;
  @media only screen and (max-width: 768px){
    width: 100vw;
    height: 100vh;
  }
`,c=a.c.div`
  position: fixed;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${e=>e.isOpen?"block":"none"};
  z-index: 4000;
  background: white;
  width: ${e=>e.width||"500px"};
  border-radius: 16px;
  height: ${e=>e.height};
  @media only screen and (max-width: 768px){
    width:  ${e=>e.width||"100vw"};
    top: auto;
    transform: none;
    left: 0px;
    bottom: 0px;
  }
`,s=a.c.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 1.6rem;
    justify-content: space-between;
    font-size: 16px;
`,l=a.c.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    padding: 12px 16px;
    font-weight: 800;
    line-height: 16px;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    text-align: center;
    color: ${e=>e.customStyle?e.customStyle.color:"#333333"};
    background-color: ${e=>{var t;return null!==(t=e.customStyle)&&void 0!==t&&t.background?e.customStyle.background:"#FAF000"}};
`,o=a.c.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    color: #333333;
    background: ${e=>e.background||n.a.tapPartnerYellow};
    border-radius: 0px;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    `,d=a.c.div`
    display: flex;
    justify-content:center;
    font-size: 1.3rem;
    width: 100%;
    height: ${e=>e.modalBodyHeight?e.modalBodyHeight:"80vh"};
    overflow: auto;
    border-radius: 16px;
    @media only screen and (max-width: 768px){
      height: auto;
      min-height: 300px;
      max-height: calc(100vh - 46px);
      overflow-y: auto;
    }
   @media only screen and (max-width: 425px) {
      height: 60vh;
      }
  `,p=a.c.img`
  width: 24px;
  height: 24px;
`,u=a.c.div`
    font-family: 'Mulish';
    font-style: normal;
    text-align: center;
    flex: 1;
    color: ${e=>e.color||"#333333"};
`;var b=i(1004),x=i(1),j=i(16),m=i(2);t.a=e=>{let{headerBackgroundColor:t="",footer:i=null,width:a="",modalIsOpen:n=!0,modalBodyHeight:h="",closeModal:g,headerText:f="",leftButton:O=!0,leftButtonText:v="OKE",rightButton:y=!1,markupText:w="",onRightButtonClick:k,onLeftButtonClick:C,leftButtonStyle:_={},rightButtonStyle:S={},rightButtonText:M="",isCloseIcon:$=!0,onCloseIconClick:D=(()=>{}),closeOnShadowDisabled:T=!1,modalBodyStyle:I={},height:A="",headerTextColor:L=""}=e;return Object(x.useEffect)((()=>{if(n){document.querySelector("body").style.overflow="hidden"}else{document.querySelector("body").style.overflow="auto"}return()=>{document.querySelector("body").style.overflow="auto"}}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r,{isOpen:n,onClick:T?()=>{}:g}),Object(m.jsxs)(c,{height:A,width:a,isOpen:n,children:[Object(m.jsxs)(o,{background:t,children:[Object(m.jsx)(u,{color:L,children:f}),$?Object(m.jsx)(p,{src:Object(j.c)().closeIcon||b.a,alt:"close",onClick:g}):null]}),Object(m.jsx)(d,{style:{...I},modalBodyHeight:h,children:w}),i||Object(m.jsxs)(s,{children:[O&&Object(m.jsx)(l,{fullWidth:!(O&&y),onClick:C,customStyle:_,children:v}),y&&Object(m.jsxs)(l,{onClick:k,customStyle:S,children:[" ",M]})]})]})]})}},1025:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a={terms:["Saya / Kami menyatakan bahwa semua informasi yang diberikan di atas adalah benar sesuai dengan pengetahuan dan kepercayaan saya / kami.","Saya / Kami setuju untuk memberikan otoritas penuh kepada PT. Asuransi Simas Insurtech untuk memeriksa dan mensurvei jika diperlukan.","Saya / Kami setuju jika saya / Kami membuat pernyataan salah / palsu terkait dengan klaim atau menyembunyikan sesuatu tentang fakta yang material dalam bentuk apa pun yang mengakibatkan Kebijakan dibatalkan dan kehilangan semua hak klaim saat ini dan masa depan."],agree:"Agree",save:"Simpan",accountNumberError:"Konfirmasikan Nomor Akun yang Anda masukkan tidak konsisten!",accountEmptyError:"Rekening tidak boleh kosong",agreeWith:"Saya telah membaca, mengerti, dan setuju dengan",termsConditions:"Pernyataan dan Kuasa",agreeWithTrailingText:" yang berlaku",salvageFormTitle:"One Pacific Place, 10th Floor unit D H SCBD, Jl Jend . Sudirman Kav 52 - 53, Jakarta 12190, Indonesia",newAccount:"Rekening Baru",findMyAccount:"Cari Akun Saya",saveDetails:"Simpan Rincian"}},1033:function(e,t,i){"use strict";var a=i(19);const n=i(11).c.div`

      .ant-checkbox-checked .ant-checkbox-inner{
      background: ${e=>e.checkedColor};
      border: 2px solid ${e=>e.checkedColor};
      border-radius: 4px;
    }

       .main {
            display: block;
            position: relative;
            padding-left: ${e=>e.paddingLeft?e.paddingLeft:"45px"};
            cursor: pointer;
            font-size: 20px;
            margin: 0px;
        }
          
        /* Hide the default checkbox */
        input[type=checkbox] {
            visibility: hidden;
        }
          
        /* Creating a custom checkbox
        based on demand */
        .geekmark {
            position: absolute;
            top: ${e=>e.checkedBoxTopAlignment};
            left:  ${e=>e.checkedBoxLeftAllignment};
            height: ${e=>e.width};
            width: ${e=>e.height};
            background: #FFFFFF;
            border: 2px solid ${e=>e.unCheckedBorderColor};
            border-radius: ${e=>e.checkedBorderRadius};
        }
          
        /* Specify the background color to be
        shown when checkbox is checked */
        .main input:checked ~ .geekmark {
          background: ${e=>e.checkedColor};
          border: 2px solid ${e=>e.checkedColor};
          border-radius: 4px;
        }
          
        /* Checkmark to be shown in checkbox */
        /* It is not be shown when not checked */
        .geekmark:after {
            content: "";
            position: absolute;
            display: none;
        }
          
        /* Display checkmark when checked */
        .main input:checked ~ .geekmark:after {
            display: block;
        }
          
        /* Styling the checkmark using webkit */
        /* Rotated the rectangle by 45 degree and 
        showing only two border to make it look
        like a tickmark */
        .main .geekmark:after {
            left:  ${e=>`${e.checkedPosition.left||6}px`};
            bottom: ${e=>`${e.checkedPosition.bottom||5}px`};
            width: ${e=>`${e.checkedPosition.width||8}px`};
            height: ${e=>`${e.checkedPosition.height||16}px`};
            border: 2px solid ${e=>e.borderColor};
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);

            //    display: block;
        /* height: 13px;
        width: 7px;
        left: 5px;
        bottom: 3px;
        border-radius: 2px; */
        }
`;var r=i(2);t.a=function(e){let{name:t,disabled:i,onChange:c,checked:s,paddingLeft:l,defaultChecked:o,width:d="25px",height:p="25px",checkedBoxLeftAllignment:u="0px",checkedBoxTopAlignment:b="0px",borderColor:x=a.a.black,checkedColor:j=a.a.honeyyellow,checkedBorderRadius:m="4px",unCheckedBorderColor:h=a.a.black,checkedPosition:g={},...f}=e;return Object(r.jsx)(n,{width:d,height:p,borderColor:x,checkedColor:j,paddingLeft:l,checkedPosition:g,unCheckedBorderColor:h,checkedBorderRadius:m,checkedBoxTopAlignment:b,checkedBoxLeftAllignment:u,children:Object(r.jsxs)("label",{className:"main",children:[f.children,Object(r.jsx)("input",{"data-testid":"checkbox",name:t,type:"checkbox",disabled:i,onChange:c,checked:s,defaultChecked:o,width:d,height:p}),Object(r.jsx)("span",{className:"geekmark"})]})})}},1044:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i(11),n=i(19);const r=a.c.span`
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${n.a.white};
  border-radius: 50%;
  border: 1px solid ${n.a.disabledLightGrey};
}

.container input:checked ~ .checkmark {
  background-color: ${n.a.tapPartnerBlue};
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
    top: 5px;
    left: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}
`;var c=i(2);var s=function(e){let{onChange:t,disabled:i,checked:a}=e;return Object(c.jsx)(r,{children:Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{disabled:i,type:"radio",name:"radio",onChange:t,checked:a}),Object(c.jsx)("span",{className:"checkmark"})]})})}},1425:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return ec}));var a=i(1),n=i.n(a),r=i(52),c=i(35),s=i(3),l=i(5),o=i(183),d=i(951),p=i(11),u=i(19);const b=p.c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 768px) {
    gap: 16px;
    flex-direction: column;
    padding: 16px;
}
`,x=p.c.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,j=p.c.div`
  display: flex;
  flex-direction: ${e=>e.isMobile?"row-reverse":"row"};
  gap: 12px;
  justify-content: flex-end;
  padding-bottom: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,m=p.c.div`
  color: ${u.a.crimsonRed};
  text-align: center;
  display: flex;
  padding: 10px 0px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background: ${u.a.lightRed};
  border-radius: 8px;
  align-items: center;
  padding: 16px;
  @media screen and (max-width: 768px) {
    order: 1;
    justify-content: center;
    display: flex;
    padding: 10px 0px;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    font-family: Mulish;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px; /* 120% */
    letter-spacing: 0.2px;
  }
`,h=p.c.img`
  width: 36px;
  height: 36px;
  padding: 8px;
  border-radius: 12px;
  background-color: ${u.a.almostWhite}
`,g=p.c.div`
  color: ${u.a.darkGrey};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px; 
`,f=p.c.div`
  color: ${u.a.black};
  font-size: 14px;
  font-weight: 800;
  line-height: 22px; 

  @media screen and (max-width: 768px) {
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 133.333% */
  }
`,O=p.c.div`
  display: flex;
  flex-direction: column;
`;var v=i(67),y=i(2);var w=function(e){let{leftSideIcon:t="",leftSubTitle:i="",leftTitle:a="",middleText:n="",rightSideIcon:r="",rightSubTitle:c="",rightTitle:s="",isMobile:l=!1}=e;return Object(y.jsxs)(b,{children:[Object(y.jsxs)(x,{children:[Object(y.jsx)(h,{src:t}),Object(y.jsxs)(O,{children:[Object(y.jsx)(g,{children:Object(y.jsx)(v.a,{id:i})}),Object(y.jsx)(f,{children:a})]})]}),n&&Object(y.jsx)(m,{children:n}),Object(y.jsxs)(j,{isMobile:l,children:[Object(y.jsxs)(O,{children:[Object(y.jsx)(g,{children:Object(y.jsx)(v.a,{id:c})}),Object(y.jsx)(f,{children:s})]}),Object(y.jsx)(h,{src:r})]})]})},k=i(148);const C=p.c.section`
    width: 100%;
`,_=p.c.div`
  display: flex;
  gap: 8px;
  justify-items: start;
  padding: 16px;
`;var S=i(203);const M=p.c.div`
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  gap:8px;

  &:last-child{
    width: auto;
  }
  @media screen and (max-width: 768px){
    gap: 0px;
  }
`,$=p.c.img.attrs({src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/claim_portal/timeline-idle.svg",alt:"status icon"})`

`,D=p.c.img.attrs({src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/claim_portal/completed.svg",alt:"status icon"})`
`,T=p.c.img.attrs({src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/claim_portal/pending.svg",alt:"status icon"})`
`,I=p.c.img.attrs({src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/claim_portal/reject.svg",alt:"status icon"})`
`,A=p.c.div`
  margin: 0 auto;
  width: 100%;
  height: 2px;
  border-radius: 8px;
  background-color: ${e=>"idle"===e.lineStatus?u.a.disabledLightGrey:"complete"===e.lineStatus?u.a.grassGreen:"process"===e.lineStatus?u.a.darkYellow:"reject"===e.lineStatus?u.a.tapTapHeartRed:void 0};
  color: ${e=>"idle"===e.lineStatus?"":"complete"===e.lineStatus?u.a.grassGreen:"process"===e.lineStatus?u.a.darkYellow:"reject"===e.lineStatus?u.a.tapTapHeartRed:void 0};
`,L=p.c.div`
  display: flex;
  justify-content: flex-start;
  color: ${u.a.black};
  text-align: center;
  gap: 8px;

  flex-direction: ${e=>e.isMobile?"column":"row"};

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`,E=p.c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-family: Mulish;
    font-size: 6px;
    font-style: normal;
    font-weight: 800;
    line-height: 8px; /* 133.333% */
    letter-spacing: 0.48px;
    text-transform: uppercase;
  }
`,F=p.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-top: 6px;
    img{
      width: 12px;
      height: 12px;
    }
  }
  `,z=p.c.div`
  display: flex;
  justify-content: center;
  align-items: ${e=>e.isMobile?"flex-start":"center"};
  width: 100%;
  height: 100%;
  padding-top: ${e=>e.isMobile?"10px":"0px"};
`;var B=e=>{let{status:t,lineStatus:i,title:a,isLastChild:n}=e;const r=Object(S.a)();return Object(y.jsxs)(M,{children:[Object(y.jsxs)(L,{isMobile:r,children:[Object(y.jsx)(F,{children:(e=>"idle"===e?Object(y.jsx)($,{}):"complete"===e?Object(y.jsx)(D,{}):"process"===e?Object(y.jsx)(T,{}):"reject"===e?Object(y.jsx)(I,{}):Object(y.jsx)($,{}))(t)}),Object(y.jsx)(E,{children:a})]}),n?"":Object(y.jsx)(z,{isMobile:r,children:Object(y.jsx)(A,{lineStatus:i})})]})};var R=e=>{let{children:t}=e;const[i,n]=Object(a.useState)([]);return Object(a.useEffect)((()=>{void 0===t.length?n([t]):n(t)}),[t]),Object(y.jsx)(_,{children:null===i||void 0===i?void 0:i.map(((e,a)=>{var n;return Object(y.jsx)(B,{isLastChild:a===i.length-1,lineStatus:void 0!==(null===(n=t[a+1])||void 0===n?void 0:n.props.status)?t[a+1].props.status:"idle",...e.props},a)}))})},P=i(10);var N=Object(k.c)((e=>{let{intl:t,claimData:i={}}=e;const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:" "};return t.formatMessage(e)},n={initiated:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),document_pending:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.documentPending})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),document_received:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),document_reprocess:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.documentUploaded})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),document_verified:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),approved:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimApproved})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.claimPaid})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),settled:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimApproved})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimPaid})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimSettled})})]}),rejected:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"reject",title:a({id:P.b.claimRejected})})]}),work_order_released:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.surveySuccessful})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),salvage_pending:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentApproved})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.returnsOfGoodsInProgress})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimApproved})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),salvage_dispatched:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentApproved})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.returnsOfGoodsInProgress})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimApproved})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),salvage_received:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentApproved})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.returnAccepected})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimApproved})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),on_survey:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.inSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),salvage_verified:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentApproved})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.returnsOfGoodsApproved})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.claimApproved})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),claim_cancelled:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.serviceCenterInProgress})}),Object(y.jsx)(B,{status:"reject",title:a({id:P.b.claimCancelled})})]}),service_center_survey:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.serviceCenterInProgress})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.repairCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),service_center_work_in_repair:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.serviceCenterInProgress})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.repairCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),device_delivery_in_progress:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.serviceCenterInProgress})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.repairCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),repair_complete_by_service_cennter:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.serviceCenterInProgress})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.repairCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),pending_assessment_from_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.approvalFromServiceCenter})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),pending_approval_from_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.approvalFromServiceCenter})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),repair_in_progress_by_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.approvalFromServiceCenter})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),repair_complete_by_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.repairCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),pending_device_recieved_by_customer:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.deviceYetToBeReceived})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),awaiting_work_order_approval:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),repair_process:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]})},r={document_pending:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.documentPending})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),document_verified:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentPending})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),document_complete:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),on_survey:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),survey_pending:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),survey_complete:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),vehicle_awaited:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),vehicle_received:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),work_order_released:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),work_job_completed:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),vehicle_received_by_autoshop:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),vehicle_received_by_workshop:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]}),settled:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.documentVerification})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inTheSurvey})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.workCompleted})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimCompleted})})]}),claim_rejected:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"reject",title:a({id:P.b.claimRejected})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),reprocess:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"process",title:a({id:P.b.documentUploaded})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),pending_assessment_from_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.approvalFromServiceCenter})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),pending_approval_from_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.approvalFromServiceCenter})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),repair_in_progress_by_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.approvalFromServiceCenter})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),repair_complete_by_service_center:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.repairCompleted})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]}),pending_device_recieved_by_customer:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"complete",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"complete",title:a({id:P.b.inVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.deviceYetToBeReceived})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimSettled})})]})};return Object(y.jsx)(C,{children:"agency"===(null===i||void 0===i?void 0:i.type)&&"agency-motor-vehicle"===i.product_key&&r.hasOwnProperty(null===i||void 0===i?void 0:i.status_group)?r[null===i||void 0===i?void 0:i.status_group]:n.hasOwnProperty(null===i||void 0===i?void 0:i.status_group)?n[null===i||void 0===i?void 0:i.status_group]:Object(y.jsxs)(R,{children:[Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimInitiated})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.documentSent})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimVerification})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.paymentInProcess})}),Object(y.jsx)(B,{status:"idle",title:a({id:P.b.claimCompleted})})]})})})),G=i(30);const U=p.c.div`
    display: flex;
    width: 100%;
    padding: 24px 0px;
    justify-content: center;
    align-items: flex-start;
    background: #FFF;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);
    position: sticky;
    top: 0px;
    z-index: 1;
    padding-top: 0px;
    padding-bottom: 8px;

    @media only screen and (max-width: 768px)  {
        padding: 0px;
        padding-top: 32px;
        padding-bottom: 8px;
        position: relative;
    }
`,V=p.c.div`
    display: flex;
    flex-direction: column;
    width: 960px;

    @media only screen and (max-width: 960px ) and (min-width: 768px)  {
        padding: 0px;
        padding-top: 32px;
    }
`;var W=i(47);var H=function(e){let{claimData:t}=e;const i=Object(d.a)(),a=Object(S.a)(),{policy_holder_name:n,claim_no:r,max_doc_submission_date:c,max_reprocess_doc_submission_date:s,status_group:l}=t,o="initiated"===l?c:"document_reprocess"===l?s:null,p=o&&[W.q,W.p].includes(l)&&i.formatMessage({id:P.b.fillTheDocumentsByDate,defaultMessage:P.b.fillTheDocumentsByDate},{maxDocSubmissionDate:o});return Object(y.jsx)(U,{children:Object(y.jsxs)(V,{children:[Object(y.jsx)(N,{claimData:t}),Object(y.jsx)(w,{isMobile:a,leftSideIcon:G.z,leftSubTitle:P.b.insured,leftTitle:n,middleText:p,rightSideIcon:G.j,rightSubTitle:P.b.claimId,rightTitle:r})]})})},Y=i(16),q=i(993);const K=p.c.div`
    min-height: 100vh;
    position: relative;

    .claims-tab {
        max-width: 768px;
        width: 100%;
        position: sticky;
  }

     .claims-tab button{
        background: #FFF;
        border-top: 1px solid #F5F5F5;
        border-bottom: 1px solid #F5F5F5;
        border-left: none;
        border-right: none;
        max-height: 60px;
        height: 100%;
        width: 50%;
        padding: 14px;
        font-size: 10px;
        font-weight: 700;
        color: #CCCCCC;
   }

   .claims-tab .active {
    color: #333;
   }

   .claims-tab.fixed {
    position: fixed;
    top: 48px;
    width: 100%;
    z-index: 1;
   }


`,Q=p.c.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`,J=p.c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 24px 0px;

    @media screen and (max-width: 768px){
        padding: 16px;
    }
    `;var X=i(31),Z=i.n(X),ee=i(40);const te=p.c.div`
  max-width: 720px;
  width: 100%;

  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 24px;
  background: ${u.a.white};
  flex-wrap: wrap;

  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);
`,ie=p.c.div`
  color: ${u.a.black};

  font-size: 18px;
  font-weight: 800;
  line-height: 22px; 
  color: ${u.a.darkGrey};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  `,ae=p.c.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: ${u.a.tapPartnerBlue};
  color: ${u.a.white};
`,ne=p.c.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  `,re=p.c.div`

  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`,ce=p.c.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;

  background-color: ${e=>e.status===ee.k?u.a.lightYellow:e.status===ee.j?u.a.lightVoilet:e.status===ee.n?u.a.lightGreen:e.status===ee.l?u.a.lightRed:u.a.lightBlue};

  color: ${e=>e.status===ee.k?u.a.originGold:e.status===ee.j?u.a.mysticVoilet:e.status===ee.n?u.a.grassGreen:e.status===ee.l?u.a.crimsonRed:u.a.tapPartnerBlue};
`,se=p.c.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;

  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  `,le=p.c.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`,oe=p.c.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${u.a.almostWhite};
  display: flex;
  justify-content: center;
  align-items: center;
`,de=p.c.img`
  width: 24px;
  height: 24px;
`,pe=p.c.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`,ue=p.c.div`
  display: flex;
  gap: 8px;
  width: 280px;
`,be=p.c.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
`,xe=p.c.div`

  font-size: 18px;
  font-weight: 800;
  line-height: 22px; 
  
`;var je=function(e){let{claimData:t}=e;const{benefit_name:i}=t,a=Z()(t,"status_group",""),n=Z()(t,"status.display_name",""),r=Z()(t,"rejected"!==a?"":"reject_remarks",""),c=Z()(t,"created_at",""),s=Z()(t,"product_key",""),l=Z()(t,"package_name",""),o=Z()(t,"category",""),d=Z()(t,"partner_id",""),p=Z()(t,"policy_number",""),u=Z()(t,"application_no",""),b=Z()(t,"policy_details.Request.policy_prefix",""),x=[{icon:G.B,title:P.b.claimInitiated,value:c},{icon:G.f,title:P.b.product,value:s},{icon:G.w,title:P.b.paketLabel,value:l},{icon:G.D,title:P.b.categoryLabel,value:o},{icon:G.r,title:P.b.partnerLabel,value:d},{icon:G.y,title:P.b.policyIdLabel,value:b?`${b}${p}`:p||u}];return Object(y.jsxs)(te,{children:[Object(y.jsx)(xe,{children:Object(y.jsx)(v.a,{id:P.b.claimDetail})}),Object(y.jsxs)(ae,{children:[Object(y.jsx)(ne,{children:Object(y.jsx)(v.a,{id:P.b.benefitTitle})}),Object(y.jsx)(re,{children:Object(y.jsx)(v.a,{id:i})})]}),Object(y.jsxs)(ce,{status:a,children:[Object(y.jsx)(se,{children:Object(y.jsx)(v.a,{id:P.b.statusClaimTitle})}),Object(y.jsx)(le,{children:Object(y.jsx)(v.a,{id:n})}),Object(y.jsx)(le,{children:Object(y.jsx)(v.a,{id:r})})]}),Object(y.jsx)(be,{children:x.map((e=>{let{title:t,value:i,icon:a}=e;return Object(y.jsxs)(ue,{children:[Object(y.jsx)(oe,{children:Object(y.jsx)(de,{src:a,width:24,height:24})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ie,{children:Object(y.jsx)(v.a,{id:t})}),Object(y.jsx)(pe,{children:Object(y.jsx)(v.a,{id:i})})]})]},t)}))})]})},me=i(1020),he=i(206),ge=i.n(he),fe=i(506),Oe=i.n(fe),ve=i(1025);function ye(e){const t=new Date(e),i=t.getFullYear(),a=t.getMonth(),n=t.getDate();return new Date(Date.UTC(i,a,n)).toISOString()}var we=i(941),ke=i(29),Ce=i(982);const _e=p.c.div`
  font-family: 'Mulish';
  border: ${e=>e.error?`1px solid ${u.a.crimsonRed}`:`1px solid ${u.a.disabledLightGrey}`};
  border-radius: 8px;
  padding: 0px 16px;
  padding-top: 8px;
  height: 56px;
  
  input{
    border-radius: 0px;
    border: 0px;
    outline: none;
    height: 16px;
  }

`,Se=p.c.div`
  width: ${e=>e.width?e.width:"100%"};
  max-width: 100%;
  height: 16px;
`,Me=p.c.input`
  width: 100%;
  padding: 0px 0px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  outline: none;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  outline: none;
  border: 0px;
  height: 56px;


  color: #333333;
  background: #FFFFFF;

  border-radius: 8px;

  &::placeholder {
    color: #999999;
    margin: 2px;
    line-height: 2em;
    font-weight: 400;
  }
`,$e=(p.c.label`

  color: var(--Monochrome-Dark-Grey, #999);

  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
`,p.c.div`
    color: var(--Monochrome-Dark-Grey, #999);

  /* Caption/Caption Semibold */
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
`),De=p.c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Te=(p.c.span`
  color: ${u.a.crimsonRed};

  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
`,e=>{var t;const{placeholder:i,width:a,onChange:n=(()=>{}),onBlur:r,value:c,error:s,title:l=""}=e,o=Object(d.a)();return Object(y.jsx)(De,{children:Object(y.jsxs)(_e,{error:s,children:[Object(y.jsx)($e,{children:l}),Object(y.jsx)(Se,{width:a,children:Object(y.jsx)(Me,{value:c,id:`${e.name}~input`,"data-attr-slug":`${e.name}~${null===(t=e.form)||void 0===t?void 0:t.name}~input`,disabled:e.disabled,pattern:e.pattern,type:e.type,onBlur:r,inputMode:e.inputMode,onChange:t=>n({value:t.target.value,name:e.name}),placeholder:o.formatMessage({id:i||" ",defaultMessage:i||" "})})})]})})});Te.defaultProps={};var Ie=Te;const Ae=p.c.div`
  position: relative;
  overflow: hidden;
  display: flex;
  min-height: 56px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${e=>e.error?u.a.crimsonRed:u.a.disabledLightGrey};
  background: ${u.a.white};
  justify-content: space-between;
`,Le=p.c.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid ${e=>e.error?u.a.crimsonRed:u.a.disabledLightGrey};
  background: ${u.a.white};
`,Ee=p.c.img`
    height: 20px;
    width: 20px;
`,Fe=p.c.div`
  color: ${u.a.disabledLightGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  flex: 1;
  min-width: 0;
  word-break: break-word;
  display: flex;
  align-items: center;
`,ze=p.c.div`
  color: ${u.a.disabledLightGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
`,Be=p.c.div`
  width: 100%;
  position: relative;
`,Re=p.c.div`
  color: ${u.a.crimsonRed};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`,Pe=p.c.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 160px;
    object-fit: contain;
`,Ne=p.c.div`
  position: relative;
  display: flex;
  padding: 12px 16px 16px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${e=>e.error?u.a.crimsonRed:u.a.disabledLightGrey};
  background: var(--Monochrome-White, #FFF);
`,Ge=p.c.div`
  color: ${u.a.darkGrey};

  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.2px;
`,Ue=p.c.div`
  position: absolute;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  border-radius: 8px;
  background: ${u.a.tapPartnerBlue};
  bottom:16px;
  right: 16px;
`,Ve=p.c.img`
  width: 16px;
  height: 16px;
`,We=p.c.div`
    position: absolute;
    top: 20px;
    right: 16px;
`,He=p.c.div`
  color: var(--TAP-TAP-Partners, #0064C8);
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  text-decoration-line: underline;
  margin-top: 16px;
  display: flex;
`,Ye=p.c.img`
    max-width: 100%;
    max-height: 100%;
`,qe=p.c.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Ke=p.c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`,Qe=p.c.button`
  background: ${u.a.crimsonRed};
  color: ${u.a.white};
  border: none;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
`,Je=p.c.div`
  width: 100%;
  max-height: 160px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .react-pdf__Document {
    max-height: 160px;
    overflow: hidden;
  }
  .react-pdf__Page {
    max-height: 160px;
    overflow: hidden;
  }
  .react-pdf__Page__canvas {
    max-height: 160px !important;
    width: auto !important;
    height: auto !important;
  }
`;var Xe=i(1014),Ze=i(98),et=i.n(Ze);const tt=p.c.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(0, 0, 0, 0.6);
`,it=p.c.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4000;
  background: ${u.a.white};
  border-radius: 16px 16px 0 0;
  padding: 24px 16px 32px;
`,at=p.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
`,nt=p.c.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: #999;

  &:active {
    background: ${u.a.almostWhite};
  }
`,rt=p.c.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`,ct=p.c.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 120px;
  height: 100px;
  border-radius: 12px;
  border: 1px solid ${u.a.disabledLightGrey};
  background: ${u.a.white};
  cursor: pointer;

  &:active {
    background: ${u.a.almostWhite};
  }
`,st=(p.c.img`
  width: 32px;
  height: 32px;
`,p.c.span`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`),lt=()=>Object(y.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",children:[Object(y.jsx)("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z",stroke:"#333",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(y.jsx)("circle",{cx:"12",cy:"13",r:"4",stroke:"#333",strokeWidth:"1.5"})]}),ot=()=>Object(y.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",children:[Object(y.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"#333",strokeWidth:"1.5"}),Object(y.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5",fill:"#333"}),Object(y.jsx)("path",{d:"M21 15l-5-5L5 21",stroke:"#333",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]});var dt=e=>{let{onSelectCamera:t,onSelectGallery:i,onClose:a,onlyCamera:n}=e;return et.a.createPortal(Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(tt,{onClick:a}),Object(y.jsxs)(it,{children:[Object(y.jsxs)(at,{children:["Upload Photo",Object(y.jsx)(nt,{onClick:a,children:"\u2715"})]}),Object(y.jsxs)(rt,{children:[Object(y.jsxs)(ct,{onClick:e=>{e.stopPropagation(),t()},children:[Object(y.jsx)(lt,{}),Object(y.jsx)(st,{children:"Camera"})]}),!n&&Object(y.jsxs)(ct,{onClick:e=>{e.stopPropagation(),i()},children:[Object(y.jsx)(ot,{}),Object(y.jsx)(st,{children:"Gallery"})]})]})]})]}),document.getElementById("modal-root")||document.body)};const pt=e=>new Promise((t=>{const i=new Image;i.onload=()=>{i.width&&i.height?t(i):t(null)},i.onerror=()=>t(null),i.src=e})),ut=.6,bt="'DejaVu Sans Mono', 'Roboto Mono', Menlo, Consolas, monospace",xt=async(e,t)=>{const i=URL.createObjectURL(e),a=await pt(i);if(!a)throw URL.revokeObjectURL(i),new Error("Failed to load source image");const n=await pt("/img/pp-black.png"),r=n&&n.width&&n.height?n.width/n.height:0,c=document.createElement("canvas"),s=c.getContext("2d");s.font=`bold 100px ${bt}`;const l=s.measureText(t).width,o=l?l/100/t.length:ut,d=(e=>{let{width:t,height:i,textLength:a,logoAspect:n=0,advance:r=ut}=e;const c=n?.8:0,s=r*a+1.2+c+(n?.7*n:0)+.25,l=Math.min(1,2560/Math.max(t,i)),o=Math.max(960,Math.ceil(42*s)),d=Math.max(l,o/t),p=Math.round(t*d),u=Math.round(i*d),b=Math.floor(p/s),x=Math.ceil(.6*b),j=Math.ceil(b*c),m=Math.floor(.7*b),h=Math.ceil(m*n),g=Math.round(1.8*b);return{scale:d,outW:p,outH:u+g,photoH:u,stripH:g,fontPx:b,availableW:p-2*x-j-h,textW:r*a*b,textX:x,textY:u+g/2,logoW:h,logoH:m,logoX:p-x-h,logoY:u+(g-m)/2}})({width:a.width,height:a.height,textLength:t.length,logoAspect:r,advance:o});return c.width=d.outW,c.height=d.outH,s.drawImage(a,0,0,d.outW,d.photoH),URL.revokeObjectURL(i),s.fillStyle="#FFFFFF",s.fillRect(0,d.photoH,d.outW,d.stripH),n&&s.drawImage(n,d.logoX,d.logoY,d.logoW,d.logoH),s.fillStyle="#000000",s.textBaseline="middle",s.font=`bold ${d.fontPx}px ${bt}`,s.fillText(t,d.textX,d.textY),new Promise(((e,t)=>{c.toBlob((i=>{i?e(i):t(new Error("Canvas toBlob failed"))}),"image/jpeg",.92)}))};var jt=i(1389);const mt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(jt.a)(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0,fileType:"image/jpeg",...t})},ht=e=>String(e).padStart(2,"0"),gt=p.c.div`
  position: fixed;
  inset: 0;
  z-index: 5000;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ft=p.c.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Ot=p.c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }
`,vt=p.c.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  backdrop-filter: blur(4px);
`,yt=p.c.button`
  background: ${u.a.tapPartnerBlue};
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  opacity: ${e=>e.$hidden?0:1};
  transition: opacity 0.2s;
`,wt=p.c.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`,kt=p.c.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 16px;
`,Ct=p.c.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,_t=p.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  padding-bottom: 32px;
`,St=p.c.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  min-width: 72px;
`,Mt=p.c.div`
  display: flex;
`,$t=p.c.div`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  overflow: hidden;
  border: 1.5px solid #fff;
  margin-left: -6px;
  &:first-child {
    margin-left: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Dt=p.c.div`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
`,Tt=p.c.button`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.9);
  background: transparent;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: ${e=>e.disabled?.4:1};

  &:active:not(:disabled) {
    transform: scale(0.92);
  }

  &::after {
    content: '';
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #fff;
    display: block;
  }
`,It=p.c.div`
  min-width: 72px;
`,At=p.c.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 16px;
  padding: 24px;
`,Lt=p.c.div`
  font-size: 32px;
  line-height: 1;
`,Et=p.c.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
`,Ft=p.c.button`
  background: ${u.a.tapPartnerBlue};
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`,zt=p.c.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 16px;
`,Bt=p.c.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spinn 0.8s linear infinite;
  @keyframes spinn {
    to { transform: rotate(360deg); }
  }
`,Rt=p.c.div`
  position: fixed;
  inset: 0;
  z-index: 7000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  overflow-y: auto;
`,Pt=p.c.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`,Nt=p.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;
`,Gt=p.c.div`
  font-size: 18px;
  font-weight: 700;
`,Ut=p.c.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vt=p.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 8px;
`,Wt=p.c.div`
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  overflow: hidden;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,Ht=p.c.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: rgba(220, 0, 0, 0.9);
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,Yt=p.c.div`
  position: fixed;
  inset: 0;
  z-index: 6000;
  background: #000;
  display: flex;
  flex-direction: column;
`,qt=p.c.img`
  flex: 1;
  min-height: 0;
  object-fit: contain;
  width: 100%;
`,Kt=p.c.div`
  display: flex;
  flex-shrink: 0;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  padding-bottom: 32px;
`,Qt=p.c.button`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 24px;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(4px);
`,Jt=p.c.button`
  background: ${u.a.tapPartnerBlue};
  border: none;
  color: #fff;
  border-radius: 24px;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  min-width: 120px;
`,Xt=p.c.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  backdrop-filter: blur(4px);
`,Zt=p.c.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  backdrop-filter: blur(4px);
`;let ei=0;const ti="camera",ii="preview";var ai=function(e){let{multiple:t,onCapture:i,onClose:n}=e;const r=Object(d.a)(),{videoRef:c,capturedPhotos:s,facingMode:l,startCamera:o,capture:p,addPhoto:u,removePhoto:b,switchCamera:x,reset:j}=function(){let{multiple:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object(a.useRef)(null),i=Object(a.useRef)(null),[n,r]=Object(a.useState)([]),[c,s]=Object(a.useState)("environment"),l=Object(a.useCallback)((async e=>{var a,n;i.current&&(i.current.getTracks().forEach((e=>e.stop())),i.current=null);const r=await(null===(a=navigator.permissions)||void 0===a||null===(n=a.query)||void 0===n?void 0:n.call(a,{name:"camera"}));if(r&&"denied"===r.state){const e=new Error("Camera access blocked");throw e.name="CameraPermissionBlocked",e}const c={video:{facingMode:e||"environment",width:{ideal:2560},height:{ideal:1440}},audio:!1},s=await navigator.mediaDevices.getUserMedia(c);i.current=s,t.current&&(t.current.srcObject=s)}),[]),o=Object(a.useCallback)((()=>{i.current&&(i.current.getTracks().forEach((e=>e.stop())),i.current=null)}),[]),d=Object(a.useCallback)((()=>{const e=t.current;if(!e)return null;const i=e.videoWidth,a=e.videoHeight,n=2/3;let r,c,s,l;i/a>n?(c=a,r=c*n,s=(i-r)/2,l=0):(r=i,c=r/n,s=0,l=(a-c)/2);const o=document.createElement("canvas");o.width=Math.round(r),o.height=Math.round(c);const d=o.getContext("2d");return d?(d.drawImage(e,s,l,r,c,0,0,r,c),new Promise((e=>{o.toBlob((t=>{if(!t)return void e(null);const i=new File([t],`capture_${Date.now()}.jpg`,{type:"image/jpeg"});e(i)}),"image/jpeg",.92)}))):null}),[]),p=Object(a.useCallback)(((t,i)=>{const a={id:++ei,file:t,url:URL.createObjectURL(t),captureTimestamp:i};return r(e?e=>[...e,a]:[a]),a}),[e]),u=Object(a.useCallback)((e=>{r((t=>{const i=t.findIndex((t=>t.id===e));return-1===i?t:(URL.revokeObjectURL(t[i].url),t.filter((t=>t.id!==e)))}))}),[]),b=Object(a.useCallback)((()=>{o(),r((e=>(e.forEach((e=>URL.revokeObjectURL(e.url))),[])))}),[o]),x=Object(a.useCallback)((async()=>{const e="environment"===c?"user":"environment";s(e),await l(e)}),[c,l]);return Object(a.useEffect)((()=>()=>{o()}),[o]),{videoRef:t,capturedPhotos:n,facingMode:c,startCamera:l,stopCamera:o,switchCamera:x,capture:d,addPhoto:p,removePhoto:u,reset:b}}({multiple:t}),[m,h]=Object(a.useState)(null),[g,f]=Object(a.useState)(null),[O,v]=Object(a.useState)(!1),[w,k]=Object(a.useState)(ti),[C,_]=Object(a.useState)(null);Object(a.useEffect)((()=>(o("environment").catch((e=>{"CameraPermissionBlocked"===e.name?h("blocked"):h("denied")})),()=>{j()})),[]),Object(a.useEffect)((()=>{const e=e=>{if("Escape"===e.key||"Backspace"===e.key){if(O)return void v(!1);if(w===ii)return void k(ti);n()}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[O,w,n]);const S=Object(a.useCallback)((async e=>{const t=new Date,i=(e=>{const t=-e.getTimezoneOffset(),i=Math.floor(Math.abs(t)/60),a=Math.abs(t)%60,n=`(UTC${t>=0?"+":"-"}${i}${a?`:${ht(a)}`:""})`;return`${e.getFullYear()}-${ht(e.getMonth()+1)}-${ht(e.getDate())} ${ht(e.getHours())}:${ht(e.getMinutes())}:${ht(e.getSeconds())} ${n}`})(t),a=(e=>{const t=-e.getTimezoneOffset(),i=Math.floor(Math.abs(t)/60),a=Math.abs(t)%60,n=t>=0?"+":"-";return{timestamp_date:`${e.getFullYear()}-${ht(e.getMonth()+1)}-${ht(e.getDate())}`,timestamp_time:`${ht(e.getHours())}:${ht(e.getMinutes())}`,timestamp_utc_offset:`${n}${i}:${ht(a)}`}})(t);try{const t=await mt(e),n=await xt(t,i),r=new File([n],e.name,{type:"image/jpeg"});return u(r,a)}catch(n){return console.warn("Watermark failed, uploading raw:",n),u(e,a)}}),[u]),M=Object(a.useCallback)((async()=>{const e=await p();if(!e)return;f(Date.now());const t=await S(e);f(null),t&&(_(t),k(ii))}),[p,S]),$=Object(a.useCallback)((()=>{if(0!==s.length)if(t)i(s.map((e=>({file:e.file,timestamp:e.captureTimestamp}))));else{const e=s[0];i({file:e.file,timestamp:e.captureTimestamp})}}),[t,s,i]),D=Object(a.useCallback)((()=>{k(ti),_(null)}),[]),T=Object(a.useCallback)((()=>{C&&b(C.id),_(null),k(ti)}),[C,b]),I=Object(a.useCallback)((()=>{k(ti),_(null)}),[]),A=Object(a.useCallback)((e=>{b(e),s.length-1<=1&&w!==ti&&(k(ti),_(null))}),[b,s.length,w]),L=Object(a.useCallback)((()=>{x().catch((e=>{"CameraPermissionBlocked"===e.name?h("blocked"):h("denied")}))}),[x]);return Object(y.jsxs)(gt,{children:[Object(y.jsxs)(ft,{style:{display:w===ti?"flex":"none"},children:[Object(y.jsxs)(Ot,{children:[Object(y.jsx)(vt,{onClick:n,children:"\u2715"}),Object(y.jsx)(Zt,{onClick:L,children:Object(y.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[Object(y.jsx)("path",{d:"M16 3H8l-2 3H2v14h20V6h-4l-2-3z",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(y.jsx)("circle",{cx:"12",cy:"13",r:"4",stroke:"#fff",strokeWidth:"1.5"}),Object(y.jsx)("path",{d:"M17 8l2-2m0 0l2 2m-2-2v4",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),Object(y.jsx)(wt,{children:Object(y.jsxs)(kt,{children:[Object(y.jsx)(Ct,{ref:c,autoPlay:!0,playsInline:!0,muted:!0}),m&&Object(y.jsxs)(At,{children:[Object(y.jsx)(Lt,{children:"\ud83d\udcf7"}),Object(y.jsx)(Et,{children:"blocked"===m?r.formatMessage({id:P.b.cameraPermissionBlocked}):r.formatMessage({id:P.b.cameraPermissionDenied})}),"blocked"===m&&Object(y.jsx)(Et,{style:{fontSize:13,opacity:.8,marginBottom:8},children:r.formatMessage({id:P.b.cameraPermissionBlockedGuide})}),Object(y.jsx)(Ft,{onClick:()=>window.location.reload(),children:r.formatMessage({id:P.b.cameraPermissionRetry})})]}),!!g&&Object(y.jsx)(zt,{children:Object(y.jsx)(Bt,{})})]})}),!m&&Object(y.jsxs)(_t,{children:[t&&s.length>0?Object(y.jsxs)(St,{onClick:()=>v(!0),children:[Object(y.jsx)(Mt,{children:s.slice(0,3).map((e=>Object(y.jsx)($t,{children:Object(y.jsx)("img",{src:e.url,alt:""})},e.id)))}),Object(y.jsxs)(Dt,{children:[s.length," photos"]})]}):Object(y.jsx)(It,{}),Object(y.jsx)(Tt,{disabled:!!g,onClick:M}),t&&s.length>0?Object(y.jsx)(yt,{onClick:$,children:"Upload"}):Object(y.jsx)(It,{})]})]}),w===ii&&C&&Object(y.jsxs)(Yt,{children:[Object(y.jsx)(Ot,{children:Object(y.jsx)(Xt,{onClick:I,children:"\u2190"})}),Object(y.jsx)(qt,{src:C.url,alt:"captured"}),Object(y.jsx)(Kt,{children:t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Qt,{onClick:D,children:"Take More"}),Object(y.jsx)(Jt,{onClick:$,children:"Upload All"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Qt,{onClick:T,children:"Retake"}),Object(y.jsx)(Jt,{onClick:$,children:"Upload"})]})})]}),O&&Object(y.jsx)(Rt,{children:Object(y.jsxs)(Pt,{children:[Object(y.jsxs)(Nt,{children:[Object(y.jsxs)(Gt,{children:["Photos (",s.length,")"]}),Object(y.jsx)(Ut,{onClick:()=>v(!1),children:"\u2715"})]}),Object(y.jsx)(Vt,{children:s.map((e=>Object(y.jsxs)(Wt,{children:[Object(y.jsx)("img",{src:e.url,alt:""}),Object(y.jsx)(Ht,{onClick:()=>A(e.id),children:"\xd7"})]},e.id)))})]})})]})},ni=i(1155),ri=i(26),ci=i.n(ri),si=i(25);const li=e=>Object(ni.a)({mutationFn:async e=>{var t;let{file:i,name:a,claimId:n,formName:r,timestamp:c}=e;const s=new FormData;s.append("file",i,i.name),s.append("attribute",[a]);const l=await si.a.getSignedUrl({formData:s});if(200!==l.status)throw new Error(null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.message);const o=l.data;await ci.a.put(o.signed_url,i,{headers:{"Content-Type":i.type,Host:"storage.googleapis.com"}});const d=new FormData;return d.append("attribute",[a]),c&&(d.append("timestamp_date",c.timestamp_date),d.append("timestamp_time",c.timestamp_time),d.append("timestamp_utc_offset",c.timestamp_utc_offset)),await si.a.uploadGenericClaimDoc({claim_id:n,form:r,formData:d,signedUrlData:o}),{url:o.url,filename:o.filename}},networkMode:"always",...e}),oi=e=>{let{onImageUplaodSuccess:t,value:i}=e;const[n,r]=Object(a.useState)(i),[c,s]=Object(a.useState)(null),l=Object(a.useRef)(null),o=li({onSuccess:e=>{let{url:i}=e;r(i),s(null),t(i)},onError:e=>{var t,i;s((null===e||void 0===e||null===(t=e.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||(null===e||void 0===e?void 0:e.message)||"Upload failed")}});Object(a.useEffect)((()=>{r(i)}),[i]);const d=Object(a.useCallback)((async(e,t,i,a,n,c)=>{r(""),s(null);let d=e;if(e.type.startsWith("image/")&&!n)try{d=await mt(e)}catch(u){}const p={file:d,name:t,claimId:i,formName:a,timestamp:c};l.current=p,o.mutate(p)}),[o]),p=Object(a.useCallback)((()=>{l.current&&(s(null),o.mutate(l.current))}),[o]);return{error:c,url:n,loading:o.isLoading,uploadImage:d,retryUpload:p}};function di(e){if(!e)return"image/png";if("string"===typeof e&&e.startsWith("http")){const t=e.split("?")[0].split("#")[0];return t.endsWith(".png")?"image/png":t.endsWith(".jpeg")?"image/jpeg":t.endsWith(".jpg")?"image/jpg":t.endsWith(".webp")?"image/webp":t.endsWith(".gif")?"image/gif":t.endsWith(".pdf")?"application/pdf":t.endsWith(".doc")?"application/msword":t.endsWith(".mp4")?"video/mp4":"image/png"}for(let t=0;t<100;t++)if(";"===e[t])return e.slice(5,t);return"image/png"}var pi=i(1390),ui=(i(1399),i(259));const bi=p.c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`,xi=p.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95vw;
  max-height: 90vh;
  overflow: hidden;
  user-select: none;
`,ji=p.c.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,mi=p.c.div`
  max-width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,hi=(p.c.button`
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`,p.c.video`
  max-width: 95vw;
  max-height: 90vh;
`),gi=p.c.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`,fi=p.c.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 28px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s;
  &:hover { background: rgba(255, 255, 255, 0.3); }
`,Oi=Object(p.c)(fi)`
  left: 16px;
`,vi=Object(p.c)(fi)`
  right: 16px;
`,yi=p.c.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 1;
`,wi=p.c.button`
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: background 0.2s;
  &:hover { background: rgba(255, 255, 255, 0.3); }
  &:disabled { opacity: 0.4; cursor: default; }
`,ki=p.c.img`
  max-width: 120px;
  max-height: 120px;
`,Ci=p.c.div`
  color: #fff;
  font-size: 14px;
  margin-top: 12px;
  text-align: center;
`,_i=p.c.a`
  color: #fff;
  font-size: 14px;
  margin-top: 8px;
  text-decoration: underline;
  cursor: pointer;
`,Si=["image/jpeg","image/jpg","image/png","image/webp","image/gif"];var Mi=function(e){let{files:t,initialIndex:i=0,onClose:n}=e;const[r,c]=Object(a.useState)(i),[s,l]=Object(a.useState)(1),[o,d]=Object(a.useState)({x:0,y:0}),[p,u]=Object(a.useState)(0),b=Object(a.useRef)(null),x=Object(a.useRef)(null),j=(t||[]).map((e=>"string"===typeof e?{url:e}:e)),m=j.length&&j.every((e=>e&&(e=>{const t=di(e);if(Si.includes(t))return!0;const i=(e||"").split("?")[0];return/\.(jpe?g|png|webp|gif)$/i.test(i)})(e.url)));Object(a.useEffect)((()=>{l(1),d({x:0,y:0}),u(0)}),[r]),Object(a.useEffect)((()=>{const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[]),Object(a.useEffect)((()=>{const e=x.current;if(!e)return;const t=e=>{e.preventDefault(),l((t=>Math.max(.5,Math.min(3,t-.002*e.deltaY))))};return e.addEventListener("wheel",t,{passive:!1}),()=>e.removeEventListener("wheel",t)}),[r]);const h=Object(a.useCallback)((()=>{c((e=>(e+j.length-1)%j.length))}),[j.length]),g=Object(a.useCallback)((()=>{c((e=>(e+1)%j.length))}),[j.length]);Object(a.useEffect)((()=>{if(m)return;const e=e=>{"Escape"===e.key?n():"ArrowLeft"===e.key?h():"ArrowRight"===e.key&&g()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[m,n,h,g]);const f=Object(a.useCallback)((e=>{s<=1||(b.current={startX:e.clientX-o.x,startY:e.clientY-o.y})}),[s,o]),O=Object(a.useCallback)((e=>{b.current&&d({x:e.clientX-b.current.startX,y:e.clientY-b.current.startY})}),[]),v=Object(a.useCallback)((()=>{b.current=null}),[]),w=Object(a.useCallback)((()=>l((e=>Math.min(e+.5,3)))),[]),k=Object(a.useCallback)((()=>l((e=>Math.max(e-.5,.5)))),[]),C=Object(a.useCallback)((()=>{l(1),d({x:0,y:0})}),[]);if(m&&j.length>0){const e=j.map((e=>e.url));return Object(y.jsx)(pi.a,{mainSrc:e[r],nextSrc:e.length>1?e[(r+1)%e.length]:void 0,prevSrc:e.length>1?e[(r+e.length-1)%e.length]:void 0,onCloseRequest:n,onMovePrevRequest:h,onMoveNextRequest:g,reactModalStyle:{overlay:{zIndex:1e4}}})}const _=j[r];if(!_)return null;const S=_.url,M=_.type||di(S),$=Si.includes(M),D="application/pdf"===M,T="video/mp4"===M,I="application/msword"===M;return Object(y.jsxs)(bi,{onClick:n,children:[Object(y.jsx)(gi,{onClick:n,children:"\xd7"}),j.length>1&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Oi,{onClick:e=>{e.stopPropagation(),h()},children:"\u2039"}),Object(y.jsx)(vi,{onClick:e=>{e.stopPropagation(),g()},children:"\u203a"})]}),$&&Object(y.jsxs)(yi,{children:[Object(y.jsx)(wi,{onClick:w,disabled:s>=3,children:"+"}),Object(y.jsx)(wi,{onClick:k,disabled:s<=.5,children:"-"}),Object(y.jsx)(wi,{onClick:C,children:"Reset"})]}),Object(y.jsxs)(xi,{onClick:e=>e.stopPropagation(),children:[$&&Object(y.jsx)(ji,{ref:x,src:S,alt:"preview",onMouseDown:f,onMouseMove:O,onMouseUp:v,onMouseLeave:v,style:{transform:`scale(${s})${s>1?` translate(${o.x}px, ${o.y}px)`:""}`,transition:"transform 0.2s ease",cursor:s>1?"grab":"zoom-in"},draggable:!1}),D&&Object(y.jsx)(mi,{children:Object(y.jsx)(ui.Document,{file:{url:S},onLoadSuccess:e=>{let{numPages:t}=e;return u(t)},children:Array.from({length:p},((e,t)=>Object(y.jsx)(ui.Page,{pageNumber:t+1,width:Math.min(.85*window.innerWidth,800),renderTextLayer:!1,renderAnnotationLayer:!1},`pdf-page-${t+1}`)))})}),T&&Object(y.jsx)(hi,{src:S,controls:!0,autoPlay:!0}),I&&Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsx)(ki,{src:G.j,alt:"document"}),Object(y.jsx)(Ci,{children:"Document file"}),Object(y.jsx)(_i,{href:S,target:"_blank",rel:"noreferrer",children:"Open in new tab"})]})]})]})};const $i=e=>e&&"application/pdf"===di(e),Di=["image/jpeg","image/jpg","image/png","application/pdf","video/mp4","application/msword"],Ti=(e,t)=>{const i=t/1024/1024<.01;let a=t/1024/1024>10;return e.includes("video")&&(a=t/1024/1024>25),{lowerLimit:i,upperLimit:a}},Ii=e=>{let{message:t,onRetry:i,loading:a}=e;return t?Object(y.jsxs)(Ke,{children:[Object(y.jsx)(Re,{children:t}),i&&Object(y.jsx)(Qe,{onClick:i,disabled:a,children:"Retry"})]}):null};var Ai=function(e){let{disabled:t,value:i,label:n="",name:r="",onImageUplaodSuccess:c=(()=>{}),error:s,uploadImageTypeAndSizeText:l,lowerLimitUploadError:o,upperLimitUpladError:d,userGuildeLineImage:p,userGuidelineText:u="",formName:b,claimId:x,acceptedTypes:j,variant:m="default",multiple:h,onFilesSelected:g,onlyCamera:f,onPreview:O}=e;const v=Object(a.useRef)(null),w=Object(a.useRef)(null),[k,C]=Object(a.useState)(void 0),[_,S]=Object(a.useState)(!1),[M,$]=Object(a.useState)(!1),[D,T]=Object(a.useState)(!1),[I,A]=Object(a.useState)(!1),[L,E]=Object(a.useState)(!1),{error:F,loading:z,uploadImage:B,retryUpload:R,url:P}=oi({onImageUplaodSuccess:c,value:i}),N=Object(a.useMemo)((()=>P?{url:P}:null),[P]),U=Object(a.useCallback)((e=>{const t=Array.isArray(j)&&j.length?j:Di;for(const i of e){if(!t.includes(i.type))return C(l),!1;const{lowerLimit:e,upperLimit:a}=Ti(i.type,i.size);if(e)return C(o),!1;if(a)return C(d),!1}return!0}),[j,l,o,d]),V=e=>{e.preventDefault(),e.stopPropagation(),S(!0)},W=Object(a.useCallback)((()=>{P&&(O?O(P):E(!0))}),[P,O]),H=Object(a.useCallback)((()=>{t||z||(C(void 0),T(!0))}),[t,z]),K=Object(a.useCallback)((()=>{T(!1),setTimeout((()=>{w.current&&w.current.click()}),100)}),[]),Q=Object(a.useCallback)((()=>{T(!1),setTimeout((()=>A(!0)),150)}),[]),J=Object(a.useCallback)((e=>{if(A(!1),!e)return;const t=Array.isArray(e)&&e.length>0&&e[0]&&e[0].file,i=e&&e.file;if(t){const t=e.map((e=>e.file)),i=e.map((e=>e.timestamp));if(!U(t))return;return void(g?g(t,i):B(t[0],r,x,b,!0,i[0]))}if(i){if(!U([e.file]))return;return void(g?g([e.file],[e.timestamp]):B(e.file,r,x,b,!0,e.timestamp))}const a=Array.isArray(e)?e:[e];U(a)&&(g?g(e):B(a[0],r,x,b,!0))}),[r,x,b,g,B,U]),X=Object(a.useCallback)((()=>{A(!1)}),[]),Z=Array.isArray(j)&&j.length?j.join(","):Di.join(",");return Object(y.jsxs)(Be,{children:[P?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(Ne,{error:k||F||s,children:[Object(y.jsx)(Ge,{children:!P&&n}),$i(P)&&N?Object(y.jsx)(Je,{onClick:W,children:Object(y.jsx)(ui.Document,{file:N,children:Object(y.jsx)(ui.Page,{pageNumber:1,width:200,renderTextLayer:!1,renderAnnotationLayer:!1})})}):Object(y.jsx)(Pe,{src:P,onClick:W,onError:()=>{$(!0)},style:{cursor:"pointer"}}),t?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ue,{children:Object(y.jsx)(Ve,{src:G.N,onClick:e=>{e.preventDefault(),e.stopPropagation(),T(!0)}})}),Object(y.jsx)(We,{onClick:e=>{e.preventDefault(),e.stopPropagation(),c("")},children:Object(y.jsx)("img",{src:G.i,alt:"delete"})})]})]}),Object(y.jsx)(Ii,{message:k||F,onRetry:R,loading:z})]}):"box"===m?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(Le,{error:k||F||s,onClick:H,children:[z?Object(y.jsx)(q.a,{}):Object(y.jsx)(Ee,{src:G.E}),Object(y.jsx)(ze,{children:n})]}),Object(y.jsx)(Ii,{message:k||F,onRetry:R,loading:z}),p?Object(y.jsx)(He,{onClick:V,children:u}):null]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(Ae,{error:k||F||s,onClick:H,children:[Object(y.jsx)(Fe,{children:!(i||P)&&n}),z?Object(y.jsx)(q.a,{}):Object(y.jsx)(Ee,{src:G.E})]}),Object(y.jsx)(Ii,{message:k||F,onRetry:R,loading:z}),p?Object(y.jsx)(He,{onClick:V,children:u}):null]}),Object(y.jsx)("input",{type:"file",ref:e=>{e&&h&&e.setAttribute("multiple",""),w.current=e,v.current=e},onChange:e=>{e.preventDefault(),C("");const t=Array.from(e.target.files||[]);if(v.current&&(v.current.value=null),0===t.length)return;if(!U(t))return;if(g)return void g(t);const i=t[0];i&&B(i,r,x,b)},accept:Z,multiple:h,onClick:e=>e.stopPropagation(),style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),D&&Object(y.jsx)(dt,{onSelectCamera:Q,onSelectGallery:K,onClose:()=>T(!1),onlyCamera:f}),I&&Object(y.jsx)(ai,{multiple:!!h||!!g,onCapture:J,onClose:X}),_?Object(y.jsx)(Xe.a,{modalBodyStyle:{maxHeight:"80vh",height:"auto"},headerText:n,markupText:Object(y.jsx)(qe,{children:Object(y.jsx)(Ye,{src:p})}),onLeftButtonClick:()=>S(!1),closeModal:()=>S(!1),headerBackgroundColor:Object(Y.c)().headerBackgroundColor||"",headerTextColor:Object(Y.c)().headerTextColor||""}):null,L&&P&&Object(y.jsx)(Mi,{files:[{url:P}],onClose:()=>E(!1)})]})},Li=i(61),Ei=i.n(Li),Fi=i(1041),zi=i.n(Fi),Bi=i(344);const Ri=p.c.div`
  position: relative;
  width: 100%;
`,Pi=p.c.div`
  height: 56px;
  background: #ffffff;
  border: ${e=>e.error?`1px solid ${u.a.crimsonRed}`:`1px solid ${u.a.disabledLightGrey}`};
  padding: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${e=>e.error?u.a.crimsonRed:u.a.disabledLightGrey};
  background: var(--Monochrome-White, #FFF);
  border-bottom: ${e=>e.isOpen?"0px":`1px solid ${e.error?u.a.crimsonRed:u.a.disabledLightGrey}`};
  color: ${e=>e.value?u.a.black:u.a.monoChromeGrey};
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  cursor: ${e=>e.disabled?"not-allowed":"inherit"};
`,Ni=p.c.div`
  position: absolute;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-top: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  max-height: 200px;
  overflow: auto;
`,Gi=p.c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`,Ui=p.c.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`,Vi=p.c.input`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: Mulish;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
`,Wi=p.c.img`
  width: 20px;
  height: 20px;
`,Hi=p.c.div`
    line-height: 24px;
    display: flex;
    text-overflow: ellipsis;
    height: 100%;
    width: 100%;
    overflow: hidden;
    line-height: 16px;
    height: 16px;
`,Yi=p.c.div`
    color: var(--Monochrome-Dark-Grey, #999);

  /* Caption/Caption Semibold */
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  width: 100%;
`;var qi=e=>{var t;let{options:i,placeholder:n,onSelect:r,disabled:c,error:s,value:l,loading:o,title:d,showSearch:p}=e;const{ref:u,isComponentVisible:b,setIsComponentVisible:x}=Object(Bi.a)(),[j,m]=Object(a.useState)(l),[h,g]=Object(a.useState)(""),f=Object(a.useRef)(null);Object(a.useEffect)((()=>{m(l)}),[l]),Object(a.useEffect)((()=>{b&&p&&f.current&&f.current.focus(),b||g("")}),[b,p]);const O=e=>()=>{m(e),x(!1),e!==j&&r(e)},v=p&&h?null===i||void 0===i?void 0:i.filter((e=>(e.displayName||"").toLowerCase().includes(h.toLowerCase()))):i,w=!(null===j||void 0===j);return Object(y.jsxs)(Ri,{children:[Object(y.jsxs)(Pi,{disabled:c,ref:u,error:s,onClick:e=>{e.stopPropagation(),c||o||(g(""),x((e=>!e)))},value:w,children:[d&&Object(y.jsx)(Yi,{children:d}),Object(y.jsxs)("div",{style:{display:"flex",width:"100%",textOverflow:"clip"},children:[Object(y.jsx)(Hi,{children:(null===i||void 0===i||null===(t=i.find((e=>e.value===j)))||void 0===t?void 0:t.displayName)||j||n}),o?Object(y.jsx)(q.a,{}):Object(y.jsx)(Wi,{src:G.d,isOpen:b})]})]}),b&&Object(y.jsxs)(Ni,{onClick:e=>e.stopPropagation(),children:[p&&Object(y.jsx)(Vi,{ref:f,type:"text",placeholder:"Cari...",value:h,onChange:e=>g(e.target.value),onKeyDown:e=>{e.stopPropagation()}}),Object(y.jsx)(Gi,{children:null===v||void 0===v?void 0:v.map((e=>{let{value:t,displayName:i}=e;return Object(y.jsx)(Ui,{onClick:O(t),children:i},t)}))})]})]})};const Ki=p.c.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 16px;

  .ant-select-selection{
    border-radius: 8px;
    margin: 8px;
  }
  
  @media only screen and (max-width: 360px) {
    flex-direction: column;
  }
`;p.c.div`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
    margin-left: 16px;
`;var Qi=Object(k.c)((function(e){const{intl:t,endingDate:i,startingDate:n,value:r,handleDateChange:c,name:s,disabled:l,changeErrorStatus:o,error:d}=e,{formatMessage:p}=t,[u,b]=Object(a.useState)(r?Ei()(r).local().date():void 0),[x,j]=Object(a.useState)(r?Ei()(r).local().month()+1:void 0),[m,h]=Object(a.useState)(r?Ei()(r).local().year():Ei()().year()),g=e=>{let{date:a,month:r,year:l}=e;if(a&&r&&l){let e="";const d=zi.a.tz(`${a}-${r}-${l}`,"DD-MM-YYYY","UTC").startOf("day").toDate();if(!n&&!i){let t=Ei()().endOf().date(),i=Ei()().endOf().month()+1,n=Ei()().endOf().year(),o=!0;if(l>n&&(o=!1),l===n&&r>i&&(o=!1),l===n&&r===i&&a>t&&(o=!1),o)return void c(d,s);e="Tanggal harus kurang dari {endingDate}"}if(n&&!i){let t=Ei()().endOf().date(),i=Ei()().endOf().month()+1,o=Ei()().endOf().year(),p=Ei()(n).startOf().date(),u=Ei()(n).startOf().month()+1,b=Ei()(n).startOf().year(),x=!0;if(l>o&&(x=!1),l===o&&r>i&&(x=!1),l===o&&r===i&&a>t&&(x=!1),l<b&&(x=!1),l===b&&r<u&&(x=!1),l===b&&r===u&&a<p&&(x=!1),x)return void c(d,s);e="Tanggal harus antara {startingDate} dan {endingDate}"}if(!n&&i){let t=Ei()(i).endOf().date(),n=Ei()(i).endOf().month()+1,o=Ei()(i).endOf().year(),p=!0;if(l>o&&(p=!1),l===o&&r>n&&(p=!1),l===o&&r===n&&a>t&&(p=!1),p)return void c(d,s);e="Tanggal harus kurang dari {endingDate}"}if(n&&i){let t=Ei()(i).endOf().date(),o=Ei()(i).endOf().month()+1,p=Ei()(i).endOf().year(),u=Ei()(n).startOf().date(),b=Ei()(n).startOf().month()+1,x=Ei()(n).startOf().year(),j=!0;if(l>p&&(j=!1),l===p&&r>o&&(j=!1),l===p&&r===o&&a>t&&(j=!1),l<x&&(j=!1),l===x&&r<b&&(j=!1),l===x&&r===b&&a<u&&(j=!1),j)return void c(d,s);e="Tanggal harus antara {startingDate} dan {endingDate}"}if(e){const a=t.formatMessage({id:e,description:e,defaultMessage:e},{startingDate:n?Ei()(n).format("DD-MM-YY"):Ei()().format("DD-MM-YY"),endingDate:i?Ei()(i).format("DD-MM-YY"):Ei()().format("DD-MM-YY")});o({name:s,error:a})}}};Object(a.useEffect)((()=>{const e=f().find((e=>{let{value:t}=e;return x===t})),{days:t=31}=e||{};t<u&&b(t)}),[x]);const f=()=>{const e=n&&Ei()(n).month(),t=i&&Ei()(i).month(),a=[{id:1,displayName:"Januari",days:31,value:1},{id:2,displayName:"Februari",days:m%4?28:29,value:2},{id:3,displayName:"Maret",days:31,value:3},{id:4,displayName:"April",days:30,value:4},{id:5,displayName:"Mei",days:31,value:5},{id:6,displayName:"Juni",days:30,value:6},{id:7,displayName:"Juli",days:31,value:7},{id:8,displayName:"Agustus",days:31,value:8},{id:9,displayName:"September",days:30,value:9},{id:10,displayName:"Oktober",days:31,value:10},{id:11,displayName:"November",days:30,value:11},{id:12,displayName:"Desember",days:31,value:12}],r=Ei()(n).year(),c=Ei()(i).year();if(Math.abs(r-c)<1){if(e<=t){return a.filter((i=>{const{id:a}=i;return a>=e+1&&a<=t+1}))}if(e>t){return a.filter((i=>{const{id:a}=i;return a>=e+1||a<=t+1}))}}return a};return Object(y.jsxs)(Ki,{children:[Object(y.jsx)(qi,{value:x,error:d,disabled:l,options:f(),placeholder:p({id:"Bulan",defaultMessage:"Bulan"}),onSelect:e=>{g({month:e,year:m,date:u}),j(e)}}),Object(y.jsx)(qi,{value:u,error:d,disabled:l,options:(()=>{const e=n&&Ei()(n),t=i&&Ei()(i),a=e&&e.month()+1,r=t&&t.month()+1,c=e&&e.year(),s=t&&t.year(),l=f().find((e=>{let{value:t}=e;return x===t})),{days:o=31}=l||{},d=new Array(o||31).fill(null).map(((e,t)=>({value:t+1,displayName:t+1})));return e&&t?d.filter((i=>{let{value:n}=i;const l=m>c||m===c&&x>a||m===c&&x===a&&n>=e.date(),o=m<s||m===s&&x<r||m===s&&x===r&&n<=t.date();return l&&o})):d})(),placeholder:p({id:"Tanggal",defaultMessage:"Tanggal"}),onSelect:e=>{g({date:e,year:m,month:x}),b(e)}}),Object(y.jsx)(qi,{value:m,error:d,disabled:l,options:(()=>{if(n&&i){const e=Ei()(n).year(),t=Ei()(i).year();if(e===t)return[{id:e,displayName:e,value:e}];let a=[];for(let i=e;i<=t;i++)a=[...a,i];return a.map((e=>({id:e,displayName:e,value:e})))}return new Array(200).fill(null).map(((e,t)=>({value:t+1900,displayName:t+1900})))})(),placeholder:p({id:"Tahun",defaultMessage:"Tuhan"}),onSelect:e=>{g({year:e,date:u,month:x}),h(e)}})]})})),Ji=i(1033);const Xi=p.c.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Zi=p.c.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`,ea=p.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${u.a.disabledLightGrey};
  background: ${u.a.white};
  min-height: 120px;
`,ta=p.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${u.a.crimsonRed};
  background: ${u.a.white};
`,ia=p.c.div`
  font-size: 12px;
  font-weight: 600;
  color: ${u.a.darkGrey};
  text-align: center;
  word-break: break-all;
`,aa=p.c.div`
  font-size: 12px;
  color: ${u.a.crimsonRed};
  text-align: center;
`,na=p.c.button`
  background: ${u.a.crimsonRed};
  color: ${u.a.white};
  border: none;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`,ra=p.c.div`
  position: relative;
  width: 100%;
`,ca=p.c.div`
  position: absolute;
  top: -8px;
  right: -4px;
  background: ${u.a.tapPartnerBlue};
  color: ${u.a.white};
  font-size: 9px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 10px;
  line-height: 16px;
  z-index: 1;
  white-space: nowrap;
`,sa=p.c.button`
  display: flex;
  width: 100%;
  min-height: 56px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${u.a.disabledLightGrey};
  background: ${u.a.white};
  cursor: pointer;
  justify-content: space-between;
`,la=p.c.div`
  color: ${u.a.disabledLightGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`,oa=p.c.img`
  height: 20px;
  width: 20px;
`,da=["image/jpeg","image/jpg","image/png","application/pdf","video/mp4","application/msword"],pa=(e,t)=>{const i=t/1024/1024<.01;let a=t/1024/1024>10;return e.includes("video")&&(a=t/1024/1024>25),{lowerLimit:i,upperLimit:a}};var ua=function(e){let{name:t,value:i,label:n,onImageUplaodSuccess:r,error:c,disabled:s,uploadImageTypeAndSizeText:l,lowerLimitUploadError:o,upperLimitUpladError:d,userGuildeLineImage:p,userGuidelineText:u,formName:b,claimId:x,acceptedTypes:j,onlyCamera:m}=e;const h=Array.isArray(i)?i:[],g=Object(a.useRef)(h);Object(a.useEffect)((()=>{g.current=h}),[h]);const[f,O]=Object(a.useState)([]),[v,w]=Object(a.useState)(!1),[k,C]=Object(a.useState)(!1),[_,S]=Object(a.useState)(-1),M=Object(a.useRef)(0),$=Object(a.useRef)(null),D=li(),T=li(),I=Object(a.useCallback)((async e=>{const i=e.map((e=>e&&e.file?e:{file:e,timestamp:void 0})),a=i.map((e=>{let{file:t,timestamp:i}=e;return{id:++M.current,file:t,name:t.name,status:"uploading",url:null,error:null,timestamp:i}}));O((e=>[...e,...a]));const n=await Promise.allSettled(i.map((e=>{let{file:i,timestamp:a}=e;return D.mutateAsync({file:i,name:t,claimId:x,formName:b,timestamp:a})}))),c=[],s=[];if(n.forEach(((e,t)=>{if("fulfilled"===e.status)c.push({...a[t],status:"done",url:e.value.url}),s.push(e.value.url);else{var i,n,r,l;const s=(null===(i=e.reason)||void 0===i||null===(n=i.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||(null===(l=e.reason)||void 0===l?void 0:l.message)||"Upload failed";c.push({...a[t],status:"failed",error:s})}})),O((e=>[...e.filter((e=>!a.find((t=>t.id===e.id)))),...c])),0===s.length)return;const l=[...g.current,...s];r(l),O((e=>e.filter((e=>"done"!==e.status))))}),[t,x,b,r,D]),A=Object(a.useCallback)((async(e,t)=>{const i=!0===t||Array.isArray(t),a=Array.isArray(t)?t:void 0,n=[];for(let c=0;c<e.length;c++){const t=e[c];n.push({file:t,timestamp:a?a[c]:void 0})}if(i)return void I(n);const r=await Promise.all(n.map((async e=>{let{file:t,timestamp:i}=e;if(!t.type.startsWith("image/"))return{file:t,timestamp:i};try{return{file:await mt(t),timestamp:i}}catch(a){return{file:t,timestamp:i}}})));I(r)}),[I]),L=Object(a.useRef)(f);L.current=f;const E=Object(a.useCallback)((async e=>{const i=L.current.find((t=>t.id===e));if(i&&i.file){O((t=>t.map((t=>t.id===e?{...t,status:"uploading",error:null}:t))));try{const a=await T.mutateAsync({file:i.file,name:t,claimId:x,formName:b,timestamp:i.timestamp});O((t=>t.map((t=>t.id===e?{...t,status:"done",url:a.url}:t))));const n=[...g.current,a.url];r(n),O((t=>t.filter((t=>t.id!==e))))}catch(c){var a,n;const t=(null===c||void 0===c||null===(a=c.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||(null===c||void 0===c?void 0:c.message)||"Upload failed";O((i=>i.map((i=>i.id===e?{...i,status:"failed",error:t}:i))))}}}),[t,x,b,r,T]),F=Object(a.useCallback)((()=>{w(!1),setTimeout((()=>{$.current&&$.current.click()}),100)}),[]),z=Object(a.useCallback)((()=>{w(!1),setTimeout((()=>C(!0)),150)}),[]),B=Object(a.useCallback)((e=>{if(C(!1),!e)return;const t=Array.isArray(e)?e:[e];if(0===t.length)return;const i=t.map((e=>e&&e.file?e.file:e)),a=t.map((e=>e&&e.timestamp?e.timestamp:void 0)).some(Boolean);for(const n of i){if(Array.isArray(j)&&j.length){if(!j.includes(n.type))return}else if(!da.includes(n.type))return;const{lowerLimit:e,upperLimit:t}=pa(n.type,n.size);if(e||t)return}I(a?t:i)}),[I,j]),R=f.filter((e=>"failed"===e.status)),P=f.filter((e=>"uploading"===e.status)),N=f.filter((e=>"done"===e.status)),U=P.length>0||D.isPending||T.isPending,V=Object(a.useCallback)((e=>{const t=h.findIndex((t=>t===e));-1!==t&&S(t)}),[h]);return Object(y.jsxs)(Xi,{children:[(h.length>0||R.length>0||P.length>0||N.length>0)&&Object(y.jsxs)(Zi,{children:[h.map(((e,t)=>Object(y.jsx)(Ai,{disabled:s,value:e,label:n,formName:b,claimId:x,variant:"box",error:c,onImageUplaodSuccess:e=>{if(e){const i=h.map(((i,a)=>a===t?e:i));r(i)}else{const e=h.filter(((e,i)=>i!==t));r(e)}},acceptedTypes:j,uploadImageTypeAndSizeText:l,lowerLimitUploadError:o,upperLimitUpladError:d,userGuildeLineImage:p,userGuidelineText:u,onPreview:V},`${e}_${t+1}`))),P.map((e=>Object(y.jsxs)(ea,{children:[Object(y.jsx)(q.a,{}),Object(y.jsx)(ia,{children:e.name})]},e.id))),N.map((e=>Object(y.jsx)(ea,{children:Object(y.jsx)(ia,{children:e.name})},e.id))),R.map((e=>Object(y.jsxs)(ta,{children:[Object(y.jsx)(ia,{children:e.name}),Object(y.jsx)(aa,{children:e.error}),Object(y.jsx)(na,{onClick:()=>E(e.id),disabled:T.isPending,children:"Retry"})]},e.id)))]}),s||U?null:Object(y.jsxs)(ra,{children:[Object(y.jsxs)(sa,{onClick:()=>w(!0),children:[Object(y.jsx)(la,{children:n}),Object(y.jsx)(oa,{src:G.E})]}),Object(y.jsx)("input",{type:"file",ref:e=>{e&&e.setAttribute("multiple",""),$.current=e},onClick:e=>e.stopPropagation(),onChange:e=>{const t=Array.from(e.target.files||[]);if($.current&&($.current.value=null),!t.length)return;const i=Array.isArray(j)&&j.length?j:da;for(const a of t){if(!i.includes(a.type))return;const{lowerLimit:e,upperLimit:t}=pa(a.type,a.size);if(e||t)return}A(t)},accept:Array.isArray(j)&&j.length?j.join(","):"image/jpeg,image/jpg,image/png,application/pdf,video/mp4,application/msword",multiple:!0,style:{position:"absolute",top:0,left:0,width:1,height:1,opacity:0,overflow:"hidden"}}),Object(y.jsx)(ca,{children:"Multiple"})]}),v&&Object(y.jsx)(dt,{onSelectCamera:z,onSelectGallery:F,onClose:()=>w(!1),onlyCamera:m}),k&&Object(y.jsx)(ai,{multiple:!0,onCapture:B,onClose:()=>C(!1)}),-1!==_&&h.length>0&&Object(y.jsx)(Mi,{files:h.map((e=>({url:e}))),initialIndex:_,onClose:()=>S(-1)})]})};const ba=p.c.div`
    font-family: Mulish;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0.02em;
    text-align: left;

    color: ${u.a.crimsonRed};
    padding: 5px;

`,xa=p.c.div`
    /* border-bottom: ${e=>"image"===e.type?`1px solid ${u.a.disabledLightGrey}`:"0px"}; */
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ja=p.c.div`
    color: ${u.a.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; 
`,ma=p.c.span`
    ::after{
        content: '*';
        color: ${u.a.crimsonRed};
    }
`,ha=p.c.div`
    display: flex;
`,ga=p.c.div`

    font-size: 14px;
    font-weight: 500;
    line-height: 22px; 
    display: flex;
    align-items: center;
`,fa=p.c.div`
    padding: 16px;
`,Oa=p.c.p`
    font-size: 16px;
    text-align: justify;
`,va=p.c.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
`,ya=p.c.div`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid  ${e=>e.active?u.a.tapPartnerBlue:u.a.disabledLightGrey};

  color: ${e=>e.active?u.a.tapPartnerBlue:u.a.disabledLightGrey};
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;var wa=function(e){let{disabled:t,selected:i,options:a,onChangeHandler:n}=e;return Object(y.jsx)(va,{children:a.map((e=>{let{label:a,value:r}=e;return Object(y.jsx)(ya,{active:r===i,onClick:()=>!t&&n(r),children:a},r)}))})};const ka=p.c.div`
  font-family: 'Mulish';
  border: ${e=>e.error?`1px solid ${u.a.crimsonRed}`:`1px solid ${u.a.disabledLightGrey}`};
  border-radius: 16px;
  padding: 0px 16px;

  input{
    border-radius: 8px;
    border: 0px;
    outline: none;
  }

`,Ca=p.c.div`
  width: ${e=>e.width?e.width:"100%"};
  max-width: 100%;
  display: flex;
`,_a=p.c.input`
  width: 100%;
  padding: 0px 16px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  outline: none;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  outline: none;
  border: 0px;
  height: 56px;


  color: #333333;
  background: #FFFFFF;

  border-radius: 8px;

  &::placeholder {
    color: #999999;
    margin: 2px;
    line-height: 2em;
    font-weight: 400;
  }
`,Sa=(p.c.label`

  color: var(--Monochrome-Dark-Grey, #999);

  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
`,p.c.div`

  color: ${u.a.black};

  font-size: 14px;
  font-weight: 700;
  line-height: 18px; 
`,p.c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`),Ma=(p.c.span`
  color: ${u.a.crimsonRed};

  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
`,e=>{const{placeholder:t,width:i,onChange:n=(()=>{}),onBlur:r,value:c,error:s}=e,l=Object(d.a)(),[o,p]=Object(a.useState)("password");return Object(y.jsx)(Sa,{children:Object(y.jsx)(ka,{error:s,children:Object(y.jsxs)(Ca,{width:i,children:[Object(y.jsx)(_a,{onCopy:e=>e.preventDefault(),type:o,value:c,id:`${e.name}~input`,"data-attr-slug":`${e.name}~${e.form.name}~input`,disabled:e.disabled,pattern:e.pattern,onBlur:r,inputMode:e.inputMode,onChange:t=>n({value:t.target.value,name:e.name}),placeholder:l.formatMessage({id:t||" ",defaultMessage:t||" "})}),Object(y.jsx)("img",{src:G.F,onClick:()=>{p((e=>"password"===e?"text":"password"))}})]})})})});Ma.defaultProps={};var $a=Ma;const Da=p.c.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 16px;

  .ant-select-selection{
    border-radius: 8px;
    margin: 8px;
  }
`,Ta=p.c.div`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
    margin-left: 16px;
`;var Ia=Object(k.c)((function(e){const{intl:t,name:i,handleTimeChange:n,value:r,disabled:c,error:s}=e,{formatMessage:l}=t,[o,d]=Object(a.useState)(r?Ei()(r,"HH:mm").hour():void 0),[p,u]=Object(a.useState)(r?Ei()(r,"HH:mm").minute():void 0),b=new Array(24).fill(void 0).map(((e,t)=>({id:t,value:t,displayName:String(t)}))),x=new Array(60).fill(void 0).map(((e,t)=>({id:t,value:t,displayName:String(t)}))),j=e=>{let{hour:t,minute:a}=e;if(void 0!==t&&void 0!==a){let e=t,r=a;a<10&&(r=`0${a}`),e<10&&(e=`0${t}`),n(`${e}:${r}`,i)}};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(Da,{children:[Object(y.jsx)(qi,{value:o,error:s,disabled:c,options:b,placeholder:l({id:"Jam",defaultMessage:"Jam"}),onSelect:e=>{j({hour:e,minute:p}),d(e)}}),Object(y.jsx)(qi,{value:p,error:s,disabled:c,options:x,placeholder:l({id:"Menit",defaultMessage:"Menit"}),onSelect:e=>{j({hour:o,minute:e}),u(e)}})]}),Object(y.jsx)(Ta,{children:Object(y.jsx)(we.a,{id:"Anda tidak perlu menentukan secara tepat waktu kejadian, cukup waktu yang paling mendekati.",defaultMessage:"Anda tidak perlu menentukan secara tepat waktu kejadian, cukup waktu yang paling mendekati."})})]})}));var Aa=function(e){let{isOpen:t,onClose:i}=e;return Object(y.jsx)(Xe.a,{headerText:"Disclaimer",modalIsOpen:t,markupText:Object(y.jsx)(fa,{children:Object(y.jsx)(Oa,{children:Object(y.jsx)(v.a,{id:P.b.disclaimerTextContent})})}),onCloseIconClick:i,onLeftButtonClick:i,closeModal:i,headerBackgroundColor:Object(Y.c)().headerBackgroundColor||"",headerTextColor:Object(Y.c)().headerTextColor||""})},La=i(1400),Ea=i.n(La);const Fa=p.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`,za=p.c.div`
  position: relative;
  width: 300px;
  height: 450px;
  cursor: crosshair;
`,Ba=p.c.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 20px;

  svg {
    height: 100%;
    width: auto;
  }
`,Ra=p.c.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`,Pa=p.c.div`
    display: flex;
    gap: 10px;
`,Na=p.c.img`
    width: 300px;
    height: 450px;
`;var Ga=i(946);var Ua=e=>{let{claim_id:t,onImageGenerated:i,name:n,formName:r,value:c,disabled:s=!1}=e;const l=Object(a.useRef)(null),o=Object(a.useRef)(null),[d,p]=Object(a.useState)([]),[u,b]=Object(a.useState)(null),[x,j]=Object(a.useState)(""),[m,h]=Object(a.useState)(null),{error:g,loading:f,url:O,uploadImage:w}=oi({onImageUplaodSuccess:i,value:u});Object(a.useEffect)((()=>{s&&p([])}),[s]),Object(a.useEffect)((()=>{fetch("https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/tap-auto/Car+Frame.svg").then((e=>e.text())).then(j).catch((e=>console.error("Failed to load SVG",e)))}),[]);const k=()=>{p([])},C=async()=>{if(!l.current)return;if(0===d.length)return void h("Please select at least one part.");const e=await Ea()(l.current),i=(new Date).toISOString().replace(/[-:.TZ]/g,"");e.toBlob((e=>{if(!e)return;const a=new File([e],`car-sketch_${t}_${i}.png`,{type:"image/png"});b(a),w(a,n,t,r)}))};return f?Object(y.jsx)(q.a,{}):Object(y.jsxs)(Fa,{children:[c?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Na,{src:c,alt:"car sketch"}),!s&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{type:"file",ref:o,hidden:!0,onChange:C}),Object(y.jsx)(Pa,{children:Object(y.jsx)(Ga.default,{onClick:e=>{e.preventDefault(),e.stopPropagation(),i(""),k()},type:"danger",children:"Edit Sketch"})})]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(za,{onClick:s?void 0:e=>{if(s)return;if(!l.current)return;const t=l.current.getBoundingClientRect(),i=(e.clientX-t.left)/t.width*100,a=(e.clientY-t.top)/t.height*100,n={id:`${i}-${a}`,top:`${a}%`,left:`${i}%`};p((e=>e.find((e=>e.id===n.id))?e.filter((e=>e.id!==n.id)):[...e,n]))},ref:l,children:[Object(y.jsx)(Ba,{dangerouslySetInnerHTML:{__html:x}}),d.map((e=>{let{id:t,top:i,left:a}=e;return Object(y.jsx)(Ra,{style:{top:i,left:a},children:"X"},t)}))]}),!s&&Object(y.jsxs)(Pa,{children:[Object(y.jsx)(Ga.default,{onClick:k,type:"danger",children:"Clear Marker"}),Object(y.jsx)(Ga.default,{onClick:C,type:"primary",children:"Save Sketch"})]})]}),g&&Object(y.jsx)(Re,{children:g}),m&&Object(y.jsx)(Re,{children:Object(y.jsx)(v.a,{id:m})})]})};const Va=.01;var Wa=e=>{let{language:t="id",errors:i={},values:n={},onChangeHandler:r,formData:c,onImageUplaodSuccess:s=(()=>{}),validateChronologyStates:l={},changeErrorStatus:o,formName:p,claimId:b,productKey:x,partner:j,packageName:m}=e;const h=Object(d.a)(),{formatMessage:g}=h,f=(e,t)=>{s(e,t)},[O,w]=Object(a.useState)(!1),k=e=>{const{required:t}=e;return W.g.includes(e.type)||e.type===W.k.DISCLAIMER||e.type===W.k.CHECKBOX?null:Object(y.jsxs)(ja,{children:["claim_amount"===e.name?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v.a,{id:`${e.label}`})," ",Object(y.jsx)(v.a,{id:"(Masukkan jumlah klaim Anda, untuk bagian desimal gunakan koma (,) atau titik (.))"})]}):Object(y.jsx)(v.a,{id:`${e.label}`}),t?Object(y.jsx)(ma,{}):null]})},C=e=>{const{name:t,type:a,label:c,options:s,is_multiple_value_required:l,is_editable:d,calendar_date_end_on:x,calendar_date_starting_from:j,is_only_camera:m}=e,k=!d,C=Object(ke.get)(e,"user_guideline.placeholder",c),_=Object(ke.get)(e,"user_guideline.imageGuide.value","");switch(a){case W.k.choices:case W.k.CHOICESEXTERNAL:{const e=s.map((e=>({displayName:h.formatMessage({id:e[1]||" "}),value:e[0]})));return Object(y.jsx)(qi,{error:i[t],disabled:k,options:e,placeholder:C,onSelect:e=>r({value:e,name:t})})}case W.k.YEAR:{const e=new Array(100).fill(0).map(((e,t)=>({value:t+1951,displayName:t+1951}))).sort(((e,t)=>t-e));return Object(y.jsx)(qi,{value:n[t],error:i[t],disabled:k,options:e,placeholder:C,onSelect:e=>r({value:e,name:t})})}case W.k.DATE:return Object(y.jsx)(Qi,{name:t,form:{},value:n[t],disabled:k,error:i[t],endingDate:x?Ei.a.utc(x).tz("Asia/Jakarta").startOf("day"):null,startingDate:j?Ei.a.utc(j).tz("Asia/Jakarta").startOf("day"):null,changeErrorStatus:o,handleDateChange:e=>r({value:e,name:t})});case"time":return Object(y.jsx)(Ia,{name:t,value:n[t],error:i[t],disabled:k,handleTimeChange:e=>r({value:e,name:t})});case W.k.ASTERISK:return Object(y.jsx)($a,{disabled:k,placeholder:Object(ke.get)(e,"user_guideline.placeholder",c),label:Object(y.jsx)(we.a,{id:c||" "}),form:{},name:t,error:i[t],onChange:r,value:n[t]||""});case"image":return l?Object(y.jsx)(xa,{children:Object(y.jsx)(ua,{disabled:k,error:i[t],value:n[t],name:t,label:g({id:c||" "}),formName:p,claimId:b,onImageUplaodSuccess:e=>f(e,t),acceptedTypes:"cardamages_front_back"===t?["image/jpeg","image/jpg","image/png"]:void 0,uploadImageTypeAndSizeText:Object(y.jsx)(v.a,{id:P.b.uploadImageTypeAndSizeText}),lowerLimitUploadError:Object(y.jsx)(v.a,{id:P.b.lowerLimitUploadError,values:{lowerlimit:Va,upperLimit:10}}),upperLimitUpladError:Object(y.jsx)(v.a,{id:P.b.upperLimitUpladError,values:{lowerlimit:Va,upperLimit:10}}),userGuildeLineImage:_,userGuidelineText:P.b.userGuidelineText,onlyCamera:m})}):Object(y.jsx)(xa,{children:Object(y.jsx)(Ai,{disabled:k,error:i[t],value:n[t],name:t,label:g({id:c||" "}),formName:p,claimId:b,onImageUplaodSuccess:e=>f(e,t),acceptedTypes:"cardamages_front_back"===t?["image/jpeg","image/jpg","image/png"]:void 0,uploadImageTypeAndSizeText:Object(y.jsx)(v.a,{id:P.b.uploadImageTypeAndSizeText}),lowerLimitUploadError:Object(y.jsx)(v.a,{id:P.b.lowerLimitUploadError,values:{lowerlimit:Va}}),upperLimitUpladError:Object(y.jsx)(v.a,{id:P.b.upperLimitUpladError,values:{upperLimit:10}}),userGuildeLineImage:_,userGuidelineText:P.b.userGuidelineText,onlyCamera:m})});case"boolean":{const e=W.f.map((e=>{let{value:t,label:i}=e;return{label:h.formatMessage({id:i}),value:t}}));return Object(y.jsx)(wa,{disabled:k,selected:n[t],onChangeHandler:e=>r({name:t,value:e}),options:e})}case"checkbox":case"disclaimer":return"disclaimer_aus"===t||"disclaimer"===t||"agency-mv-tlo-disclaimer-aus"===t||"disclaimer_aus_tlo"===t?Object(y.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",marginTop:"10px",gap:"6px",flexWrap:"wrap"},children:[Object(y.jsx)(Ce.default,{onChange:e=>{const i=e.target.checked;r({name:t,value:i})},checked:n[t],disabled:k}),Object(y.jsx)("span",{style:{fontSize:13,lineHeight:"18px"},children:Object(y.jsx)(v.a,{id:P.b.disclaimerText,values:{highlight:e=>Object(y.jsx)("span",{onClick:()=>w(!0),style:{textDecoration:"underline",cursor:"pointer"},children:e})}})}),Object(y.jsx)(Aa,{isOpen:O,onClose:()=>w(!1)})]}):Object(y.jsxs)(ha,{children:[Object(y.jsx)(Ji.a,{onChange:e=>{const i=e.target.checked;r({name:t,value:i})},width:"20px",height:"20px",checkedPosition:{height:14,width:8,left:4,bottom:3,borderRadius:2},checked:n[t],disabled:k,paddingLeft:"12px",checkedBoxTopAlignment:"5px",unCheckedBorderColor:u.a.monoChromeGrey,borderColor:u.a.white,checkedColor:u.a.tapPartnerBlue}),Object(y.jsx)(ga,{children:Object(y.jsx)(v.a,{id:c})})]});case"string":switch(t){case"claim_amount":return Object(y.jsx)(Ie,{disabled:k,placeholder:Object(ke.get)(e,"user_guideline.placeholder",c),label:h.formatMessage({id:c}),form:{},name:t,error:i[t],onChange:r,value:n[t]||"",type:"number",inputMode:"numeric",pattern:"[0-9]*"});case"nik_number":{const i=(e=>e&&e&&16!==e.length?"Invalid NIK (NIK harus berisi 16 karakter)":"")(n[t]);return Object(y.jsx)(Ie,{disabled:k,placeholder:Object(ke.get)(e,"user_guideline.placeholder",c),label:h.formatMessage({id:c}),form:{},name:t,error:i,onChange:r,value:n[t]||"",type:"number",inputMode:"numeric",pattern:"[0-9]*"})}default:return Object(y.jsx)(Ie,{disabled:k,placeholder:Object(ke.get)(e,"user_guideline.placeholder",c),label:h.formatMessage({id:c}),form:{},name:t,error:i[t],onChange:r,value:n[t]||""})}case"sketch":return Object(y.jsx)(Ua,{disabled:k,claim_id:b,onImageGenerated:e=>f(e,t),name:t,formName:p,value:n[t]});default:return Object(y.jsx)(Ie,{disabled:k,placeholder:Object(ke.get)(e,"user_guideline.placeholder",c),label:h.formatMessage({id:c}),form:{},name:t,error:i[t],onChange:r,value:n[t]||""})}},_=e=>{let{name:t}=e;return l[t]&&"usingTemplateBuilder"===l[t].chrnologyInputPattern?null:Object(y.jsx)(ba,{children:Object(y.jsx)(v.a,{id:i[t]})})};return c.map((e=>Object(y.jsxs)(xa,{type:e.type,children:[k(e),C(e),_(e)]},e.name)))};const Ha=p.c.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
`,Ya=p.c.button`
  display: flex;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${u.a.tapPartnerBlue};

  color: ${u.a.white};
  text-align: center;

  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  border: 1px solid ${u.a.tapPartnerBlue};
  text-transform: uppercase;
`,qa=p.c.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  border-radius: 12px;
  background: ${u.a.crimsonRed};
  color: ${u.a.white};
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
`,Ka=p.c.div`
  font-size: 12px;
  font-weight: 600;
`;var Qa=function(e){let{formData:t=[],claimId:i,formName:n,isSalvage:c,form:l,showSubmitButton:o}=e;const d=Object(r.c)(),[p,u]=Object(a.useState)((()=>{const e=localStorage.getItem(`formData-${i}`);if(e)return JSON.parse(e);const a={};return t.forEach((e=>{a[e.name]=e.value})),a})),[b,x]=Object(a.useState)((()=>{const e={};return t.forEach((t=>{"invalid"===t.status&&(e[t.name]=t.reject_remarks)})),e})),[j,m]=Object(a.useState)({}),h=Object(r.d)((e=>e.Claim.formLoadingStates[n])),g=Object(r.d)((e=>e.Claim.saveGenericAttributesStatus[n])),f=Object(Y.u)(s.a.POST_SALVAGE_FORMS_REQUEST),O=Object(r.d)((e=>e.App.language.locale)),w=Object(r.d)((e=>e.Claim.claimDetails)),k=(e,t)=>{if(!e)return"";switch(e.type){case W.k.BOOLEAN:return[!0,!1].includes(t)?"":P.b.required;case W.k.DATE:{const i=new Date(t),a=e.calendar_date_starting_from?new Date(e.calendar_date_starting_from):null,n=e.calendar_date_end_on?new Date(e.calendar_date_end_on):null;if(Number.isNaN(i.getTime()))return"Invalid date format";if(a&&!n&&i<a)return`The date must be on or after ${e.calendar_date_starting_from}`;if(n&&!a&&i>n)return`The date must be on or before ${e.calendar_date_end_on}`;if(a&&n&&(i<a||i>n))return`The date must be between ${e.calendar_date_starting_from} and ${e.calendar_date_end_on}`;break}}if(!t&&e.required)return P.b.required;if(e.regex&&!new RegExp(e.regex).test(t))return P.b.regexIncorrect;if(e.required&&t&&0===t.length)return P.b.required;if("nik_number"===e.name){const e=(i=t)&&16!==i.length?"Invalid NIK (NIK harus berisi 16 karakter)":"";if(e)return e}var i;if("cardamages_front_back"===e.name){let e=0;if(Array.isArray(t)?e=t.length:t&&(e=1),e<4)return"Car damages must have at least 4 images"}return""},C=Object(a.useMemo)((()=>ge()((e=>{localStorage.setItem(`formData-${i}`,JSON.stringify(e))}),500)),[i]),_=e=>{let{value:i,name:a}=e;const n={...p,[a]:i};b[a]&&((e,i)=>{const a=t.find((t=>t.name===e)),n=k(a,i);x({...b,[e]:n})})(a,i),C(n),u(n)},S=l&&l.attributes?Oe()(l.attributes,{name:"address"}):null;return Object(y.jsxs)(Ha,{children:[c?Object(y.jsx)(Ka,{children:Object(y.jsx)(v.a,{id:S?S.label:ve.a.salvageFormTitle,defaultMessage:S?S.label:ve.a.salvageFormTitle})}):null,Object(y.jsx)(Wa,{language:O,errors:b,values:p,formData:t,claimId:i,formName:n,onChangeHandler:_,changeErrorStatus:e=>{let{name:t,error:i}=e;x((e=>({...e,[t]:i})))},onImageUplaodSuccess:(e,t)=>{_({value:e,name:t}),d(s.a.updateFormAttribute({body:{[t]:e},params:{form:n,claimId:i}}))},validateChronologyStates:j,setValidateChronlogyStates:m,partner:w.partner_id,productKey:w.product_key,packageName:w.package_code}),g&&Object(y.jsx)(qa,{children:g}),o&&Object(y.jsxs)(Ya,{onClick:e=>{e.preventDefault();(()=>{const e={};let i=!1;t.forEach((t=>{const a=k(t,p[t.name]);e[t.name]=a,a&&(i=!0)}));try{if(t.map((e=>e.name)).includes("cardamages_front_back")){const a=t.find((e=>"cardamages_front_back"===e.name)),n=p.cardamages_front_back||a&&a.value;let r=0;Array.isArray(n)?r=n.length:n&&(r=1),r<4&&(e.cardamages_front_back="Car damages must have at least 4 images",me.default.error("Car damages must have at least 4 images"),i=!0)}}catch(a){console.error("car damages validation error",a)}return x(e),i})()||(c?(()=>{const{salvage_slug:e,salvage_status:t}=l||{},a=p[`tracking_no---${e}`];p.tracking_no=a||p.tracking_no,p.source="direct",delete p[`tracking_no---${e}`],d(s.a.postSalvageForms({payload:p,claim_id:i,form:n,salvage_slug:e,salvage_status:t}))})():(()=>{const e={...p};e.date_of_accident&&(e.date_of_accident=ye(e.date_of_accident)),e.date_of_incident&&(e.date_of_incident=ye(e.date_of_incident)),d(s.a.saveGenericAttributes({payload:e,claim_id:i,form:n,source:"direct"})),localStorage.removeItem(`formData-${i}`)})())},children:[h||f?Object(y.jsx)(q.a,{}):null,Object(y.jsx)(v.a,{id:P.b.submit})]})]})};const Ja=p.c.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 24px;
  background: var(--Monochrome-White, #FFF);
`,Xa=p.c.img`
  width: 24px;
  height: 24px;
`,Za=p.c.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: var(--Monochrome-Shade-White, #EEE);
  width: 44px;
  height: 44px;
`,en=p.c.div`
  display: flex;
  gap: 8px;
  flex-direction: ${e=>e.flexDirection||"row"};
`,tn=p.c.div`
  color: var(--Monochrome-Dark-Grey, #999);

  font-size: 12px;
  font-weight: 600;
  line-height: 16px; 
`,an=p.c.div`
  color: var(--Monochrome-Black, #333);

  font-size: 14px;
  font-weight: 500;
  line-height: 18px; 
`,nn=p.c.img`
  height: 160px;
  align-self: stretch;
  border-radius: 8px;
  width: 280px;
  border: 1px solid ${u.a.disabledLightGrey};
  object-fit: contain;
  cursor: pointer;
`,rn=p.c.div`
  cursor: pointer;
  width: 280px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
`,cn=p.c.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,sn=p.c.div`
  color: var(--Monochrome-Black, #333);
  font-size: 18px;
  font-weight: 800;
  line-height: 22px; 
`,ln=p.c.div`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--Tint-Light-Green, #C8F0DC);
  color: var(--Hue-Grass, #009632);
  text-align: center;
  width: 100%;

  font-family: Mulish;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`,on=p.c.div`
    display: flex;
`,dn=p.c.div`

    font-size: 14px;
    font-weight: 500;
    line-height: 22px; 
    display: flex;
    align-items: center;
`,pn=(e,t)=>{let i,a;switch(t){case"Indonesia":default:i="IDR",a="id-ID";break;case"Singapore":i="SGD",a="en-SG";break;case"Thailand":i="THB",a="th-TH";break;case"Vietnam":i="VND",a="vi-VN"}return`${i} ${new Intl.NumberFormat(a,{style:"currency",currency:i,currencyDisplay:"code"}).format(e).replace(i,"").trim()}`},un=e=>"object"===typeof e&&e?e.url||e.get_signed_url||"":e||"";var bn=function(e){let{claimStatus:t,formTitle:i,formName:r,formData:c,packageCountry:s}=e;const l=Object(d.a)(),[o,p]=Object(a.useState)(!1),[b,x]=Object(a.useState)(null),[j,m]=Object(a.useState)(0),h=Object(a.useCallback)(((e,t)=>{x(e.map((e=>({url:un(e)})))),m(t)}),[]),g=Object(a.useCallback)((()=>{x(null)}),[]),f=e=>{const{type:t,label:i,value:a,options:n=[],name:r}=e,c=ee.d[t]||ee.d.default;switch(t){case ee.f.DATE:return Object(y.jsxs)(en,{children:[Object(y.jsx)(Za,{children:Object(y.jsx)(Xa,{src:c})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(tn,{children:l.formatMessage({id:i})}),Object(y.jsx)(an,{children:a&&Ei()(a).isValid()?l.formatDate(Ei()(a),{day:"numeric",month:"short",year:"numeric"}):null})]})]});case ee.f.choices:{const e=n.find((e=>{let[t]=e;return t===a}));return Object(y.jsxs)(en,{children:[Object(y.jsx)(Za,{children:Object(y.jsx)(Xa,{src:c})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(tn,{children:Object(y.jsx)(v.a,{id:i})}),Object(y.jsx)(an,{children:l.formatMessage({id:e&&e[1]||" "})})]})]})}case ee.f.CHECKBOX:return Object(y.jsxs)(on,{children:[Object(y.jsx)(Ji.a,{width:"20px",height:"20px",checkedPosition:{height:14,width:8,left:4,bottom:3,borderRadius:2},disabled:!0,checked:a,paddingLeft:"12px",checkedBoxTopAlignment:"5px",unCheckedBorderColor:u.a.monoChromeGrey,borderColor:u.a.white,checkedColor:u.a.tapPartnerBlue}),Object(y.jsx)(dn,{children:Object(y.jsx)(v.a,{id:i})})]});case ee.f.DISCLAIMER:return"disclaimer_aus"===r?Object(y.jsxs)(on,{children:[Object(y.jsx)(Ji.a,{width:"20px",height:"20px",checkedPosition:{height:14,width:8,left:4,bottom:3,borderRadius:2},disabled:!0,checked:a,paddingLeft:"12px",checkedBoxTopAlignment:"5px",unCheckedBorderColor:u.a.monoChromeGrey,borderColor:u.a.white,checkedColor:u.a.tapPartnerBlue}),Object(y.jsx)(dn,{children:Object(y.jsx)(v.a,{id:P.b.disclaimerText,values:{highlight:e=>Object(y.jsx)("span",{onClick:()=>p(!0),style:{textDecoration:"underline",cursor:"pointer"},children:e})}})}),Object(y.jsx)(Aa,{isOpen:o,onClose:()=>p(!1)})]}):Object(y.jsxs)(on,{children:[Object(y.jsx)(Ji.a,{width:"20px",height:"20px",checkedPosition:{height:14,width:8,left:4,bottom:3,borderRadius:2},disabled:!0,checked:a,paddingLeft:"12px",checkedBoxTopAlignment:"5px",unCheckedBorderColor:u.a.monoChromeGrey,borderColor:u.a.white,checkedColor:u.a.tapPartnerBlue}),Object(y.jsx)(dn,{children:Object(y.jsx)(v.a,{id:i})})]});case ee.f.BOOLEAN:{const e=l.formatMessage({id:a?P.b.yes:P.b.no});return Object(y.jsxs)(en,{children:[Object(y.jsx)(Za,{children:Object(y.jsx)(Xa,{src:c})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(tn,{children:l.formatMessage({id:i})}),Object(y.jsx)(an,{children:e})]})]})}case"image":return Object(y.jsxs)(en,{flexDirection:"column",children:[Object(y.jsx)(tn,{children:l.formatMessage({id:i})}),a&&(Array.isArray(a)?a.length:un(a))?Object(y.jsx)(cn,{children:Array.isArray(a)?a.map(((e,t)=>{const i=un(e);return"application/pdf"===di(i)?Object(y.jsx)(rn,{onClick:()=>h(a,t),children:Object(y.jsx)(ui.Document,{file:{url:i},children:Object(y.jsx)(ui.Page,{pageNumber:1,width:280,renderTextLayer:!1,renderAnnotationLayer:!1})})},i):Object(y.jsx)(nn,{src:i,onClick:()=>h(a,t),style:{cursor:"pointer"}},i)})):(()=>{const e=un(a);return"application/pdf"===di(e)?Object(y.jsx)(rn,{onClick:()=>h([a],0),children:Object(y.jsx)(ui.Document,{file:{url:e},children:Object(y.jsx)(ui.Page,{pageNumber:1,width:280,renderTextLayer:!1,renderAnnotationLayer:!1})})}):Object(y.jsx)(nn,{src:e,onClick:()=>h([a],0),style:{cursor:"pointer"}})})()}):null]});case ee.f.SKETCH:return Object(y.jsxs)(en,{flexDirection:"column",children:[Object(y.jsx)(tn,{children:l.formatMessage({id:i})}),a&&a.length?Object(y.jsx)(Na,{src:a,alt:"car sketch"}):null]});case ee.f.STRING:if("claim_amount"===r)return Object(y.jsxs)(en,{children:[Object(y.jsx)(Za,{children:Object(y.jsx)(Xa,{src:c})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(tn,{children:l.formatMessage({id:i})}),Object(y.jsx)(an,{children:pn(a,s)})]})]});default:return Object(y.jsxs)(en,{children:[Object(y.jsx)(Za,{children:Object(y.jsx)(Xa,{src:c})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(tn,{children:l.formatMessage({id:i})}),Object(y.jsx)(an,{children:a})]})]})}};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(Ja,{children:[Object(y.jsx)(sn,{children:Object(y.jsx)(v.a,{id:i})}),(c||[]).map((e=>Object(y.jsx)(n.a.Fragment,{children:f(e)},e.name))),[ee.k].includes(t)?Object(y.jsx)(ln,{children:Object(y.jsx)(v.a,{id:P.b.alreadySaved})}):null]}),b&&Object(y.jsx)(Mi,{files:b,initialIndex:j,onClose:g})]})};p.c.div`
//styleName: Body/Body Extrabold;
    font-family: Mulish;
    font-size: 14px;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    margin-bottom: 20px;
    margin-top: ${e=>e.marginTop||"inherit"};
`,p.c.div`
  .ant-select-dropdown-menu-item {
    color: red;
    background: green;
    overflow: unset;
    text-overflow: unset;
    white-space: 'break-spaces';
  }
  .ant-select-dropdown-menu-item-selected{
    color: red;
    background: green;
    overflow: unset;
    text-overflow: unset;
    white-space: 'break-spaces';
  }
  .ant-select-search--inline .ant-select-search__field{
    border: 0px !important;
    padding: 0px !important;
  }
`,p.c.span`
    color: #DC0000;
`,p.c.div`
    display: flex;
    gap: 16px;

    .error{
      border-radius: 1px solid red;
    }



    .ant-input{
      border-radius: 8px;
      height: 50px;
      border: ${e=>e.error?"solid 1px red !important":"solid 1px #d2d2d2 !important"}
    }
    .ant-select {
      min-width: ${e=>e.selectMaxWidth||"240px"};
      border-radius: 8px;
    }
    .ant-select-selection{
      border-radius: 8px;
      height: 100%;
      // display: flex;
      // align-items: center;
    }
    .ant-select-selection__rendered{
      height: 100%;
    }

    .postalcode .ant-select{
      max-width: 180px;
      width: 180px;
      min-width: 180px;
    } 

    input{
      border-radius: 8px;
      gap: 4px;
      padding-left: 16px;
      border: ${e=>e.error?"solid 1px red !important":"solid 1px #DDDDDD !important"};
      height: 50px;
    }

    input:focus{
      outline: none
    }

    .wrapper {
      width: 48%;
    }

    .wrapper > div:first-child {
      width: 52%;
    }

    @media only screen and (max-width: 600px){
      display: flex;
      flex-direction: column;

    .ant-input{
      border-radius: 8px;
      height: 50px;
      width: 100%;
      border: ${e=>e.error?"solid 1px red !important":"solid 1px #d2d2d2 !important"}
    }
    .ant-select {
      min-width: ${e=>e.selectMaxWidth||"240px"};
      max-width: 100%;
      height: 50px;
      border-radius: 8px;
      width: 100%;
    }
    .postalcode .ant-select{
      min-width: ${e=>e.selectMaxWidth||"240px"};
      max-width: 100%;
      width: 100%;
    } 
    .ant-select-selection{
      border-radius: 8px;
      height: 100%;
    }
    .ant-select-selection-selected-value{
      line-height: 50px;
    }

    input{
      border-radius: 8px;
      gap: 4px;
      padding-left: 16px;
      border: ${e=>e.error?"solid 1px red !important":"solid 1px #DDDDDD !important"};
      height: 50px;
      width: 100%;
    }

    input:focus{
      outline: none
    }

    .wrapper {
      width: 100%
    }

    .wrapper > div {
    }

    .ant-select-selection__placeholder, .ant-select-search__field__placeholder{
      // margin-top: 0px;
    }

    }
`;const xn=p.c.div`
    font-family: Mulish;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0.02em;
    text-align: left;

    color: #DC0000;
    padding: 5px;

`,jn=p.c.div`
  background: ${u.a.white};
  padding: 16px;
`,mn=p.c.div`
    padding: 8px;
`,hn=p.c.div`
    padding: 8px;
`,gn=p.c.div`
    font-family: Mulish;
    font-size: 14px;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 8px;
`,fn=p.c.div`
    font-family: Mulish;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #999999;

`,On=p.c.div`
    font-family: Mulish;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
`,vn=p.c.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    background: #F5F5F5;
    padding: 16px;
    border-radius: 8px;

    & > div{
      flex-grow: 1;
    }

    @media only screen and (max-width: 724px) {
      
        flex-direction: column;
        background: #FFFFFF;
        gap: 8px;
        padding: 4px;

      &>div{
        padding: 16px;
        border-radius: 4px;
        gap: 8px;
        background: linear-gradient(0deg, #F5F5F5, #F5F5F5);
        color:linear-gradient(0deg, #DDDDDD, #DDDDDD);
        border: 1px solid #DDDDDD;

      }
      
    }
`,yn=p.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: ${e=>"invalid"===e.status?"#F0C8C8":"#C8E6FA"};
  border-radius: 8px;
  margin: 8px 0px;

  img{
    margin: 12px;
  }
  @media only screen and (max-width: 768px){
    margin: 16px 0px;
  }
`,wn=p.c.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${e=>"invalid"===e.status?"#DC0000":"#1E5A96"}; ;
  word-break: break-all;
`,kn=(p.c.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  padding-left: 16px;
  color: #999;
  font-family: Mulish;
  font-size: 10px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.2px;
`,p.c.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,p.c.div`
  color: #333;
  text-align: center;

  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  b{
    font-weight: 800;
  }
`),Cn=(p.c.div`
    color: ${u.a.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; 
`,p.c.div`
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 32px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    gap: 24px;
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    border-radius: 24px;
    background: #ffffff;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);
`),_n=p.c.button`
  display: flex;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${u.a.tapPartnerBlue};

  color: ${u.a.white};
  text-align: center;

  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  border: 1px solid ${u.a.tapPartnerBlue};
  text-transform: uppercase;
  width: 100%;
`,Sn=p.c.div`
    font-family: Mulish;
    font-size: 14px;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
    margin-top: 10px;
    &::after {
      content: "*";
      color: ${u.a.crimsonRed};
    }
`,Mn=p.c.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
`,$n=p.c.div`
  width: 100%;
`,Dn=p.c.div`
  flex-grow: 1;
  max-width: 50%;
`;var Tn=i(1016);var In=function(e){let{formName:t,attributes:i}=e;const{brandConst:n,provinceConst:l,cityConst:o,postalCodeConst:d,serviceCenterConst:p,serviceBranchCenterConst:u}=W.L,b=null===i||void 0===i?void 0:i.find((e=>{let{name:t}=e;return t===n})),x=Object(r.c)(),{id:j}=Object(c.i)(),[m,h]=Object(a.useState)({}),[g,f]=Object(a.useState)({}),[O,w]=Object(a.useState)(!1),k=Object(r.d)((e=>e.Claim.serviceCenterBrandList)),C=Object(r.d)((e=>e.Claim.provinceList)),_=Object(r.d)((e=>e.Claim.cityListOnProvince)),S=Object(r.d)((e=>e.Claim.postalCodeList)),M=Object(r.d)((e=>e.Claim.serviceCenterList)),$=Object(r.d)((e=>e.Claim.branchList)),D=Object(r.d)((e=>e.Claim.formLoadingStates[t])),T=Object(r.d)((e=>e.Claim.provinceErrorMessage)),I=Object(Y.t)(s.a.GET_SERVICE_CENTER_BRANCH_LIST_REQUEST);Object(a.useEffect)((()=>{I&&w(!0)}),[I]);const A={[n]:k,[l]:C,[o]:_,[d]:S,[p]:M,[u]:$};Object(a.useEffect)((()=>{x(s.a.getServiceCenterBrandList()),x(s.a.getProvinceList({claim_id:j}))}),[j]);const L={[n]:e=>{let{value:t,name:i}=e;f({[n]:t}),h((e=>({[l]:e[l],[o]:e[o],[d]:e[d],[p]:e[p],[u]:e[u]})))},[l]:e=>{let{value:t,name:i}=e;f((e=>({[l]:t,[n]:e[n]}))),h((e=>({[l]:"",[o]:e[o],[d]:e[d],[p]:e[p],[u]:e[u]}))),(e=>{x(s.a.getCityListInProvince(e))})({province_code:t,claim_id:j})},[o]:e=>{let{value:t,name:i}=e;f((e=>({[n]:e[n],[l]:e[l],[o]:t}))),h((e=>({[l]:"",[o]:"",[d]:e[d],[p]:e[p],[u]:e[u]}))),(e=>{x(s.a.getPostalCodeList(e))})({province_code:g[l],city_code:t,claim_id:j})},[d]:e=>{let{value:t,name:i}=e;f((e=>({[n]:e[n],[l]:e[l],[o]:e[o],[d]:t}))),h((e=>({[l]:"",[o]:"",[d]:"",[p]:e[p],[u]:e[u]}))),(e=>{x(s.a.getServiceCenterList(e))})({province_code:g[l],city_code:g[o],postal_code:t,claim_id:j})},[p]:e=>{let{value:t,name:i}=e;f((e=>({[n]:e[n],[l]:e[l],[o]:e[o],[d]:e[d],[p]:t}))),h((e=>({[l]:"",[o]:"",[d]:"",[p]:"",[u]:e[u]}))),(e=>{x(s.a.getServiceCenterBranchList(e))})({brand:g[n],province_code:g[l],city_code:g[o],postal_code:g[d],service_center_code:t})},[u]:e=>{let{value:t,name:i}=e;f((e=>({[n]:e[n],[l]:e[l],[o]:e[o],[d]:e[d],[p]:e[p],[u]:t}))),h({})}},E={[l]:!!b&&!g[n],[o]:!g[l],[d]:!g[o],[p]:!g[d],[u]:!g[p]},F={[n]:Object(Y.u)(s.a.GET_SERVICE_CENTER_BRAND_LIST_REQUEST),[l]:Object(Y.u)(s.a.GET_PROVINCE_LIST_REQUEST),[o]:Object(Y.u)(s.a.GET_CITY_LIST_ON_PROVINCE_REQUEST),[d]:Object(Y.u)(s.a.GET_POSTAL_CODE_LIST_REQUEST),[p]:Object(Y.u)(s.a.GET_SERVICE_CENTER_LIST_REQUEST),[u]:Object(Y.u)(s.a.GET_SERVICE_CENTER_BRANCH_LIST_REQUEST)},z=e=>{var t;const{label:i,name:a}=e,n=null===(t=A[a])||void 0===t?void 0:t.map((e=>({...e,displayName:decodeURI(e.displayName)}))),r=L[a],c=E[a];return Object(y.jsxs)(Dn,{children:[Object(y.jsx)(qi,{loading:F[a],value:g[a],changedValue:g[a],error:m[a],disabled:c,options:n,placeholder:Object(y.jsx)(v.a,{id:i}),onSelect:e=>r({value:e,name:a})}),Object(y.jsx)(xn,{children:Object(y.jsx)(v.a,{id:m[a]})})]})},B=()=>{const e={};let t=!1;return i.forEach((i=>{let a=((e,t)=>{if(!t&&e.required)return P.b.required})(i,g[i.name]);e[i.name]=a,a&&(t=!0)})),h(e),t};return Object(y.jsxs)(Cn,{children:[O?Object(y.jsx)(Tn.a,{leftButton:!0,leftButtonText:Object(y.jsx)(we.a,{id:P.b.close}),headerText:Object(y.jsx)(we.a,{id:P.b.information}),visible:O,closeOnShadowDisabled:!0,closeModal:()=>w(!1),onLeftButtonClick:()=>w(!1),markupText:Object(y.jsxs)(kn,{children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:G.q,width:40,height:40})}),Object(y.jsx)("div",{children:Object(y.jsx)(we.a,{id:P.b.noBrandFoundCopyright})}),Object(y.jsx)("div",{children:Object(y.jsx)("b",{children:Object(y.jsx)(we.a,{id:P.b.customerReachOut})})})]})}):null,b?Object(y.jsxs)($n,{children:[Object(y.jsx)(Sn,{children:Object(y.jsx)(we.a,{id:P.b.brandLabel})}),Object(y.jsx)(Mn,{children:z(i.find((e=>{let{name:t}=e;return t===n})))})]}):null,Object(y.jsxs)($n,{children:[Object(y.jsx)(Sn,{children:Object(y.jsx)(we.a,{id:P.b.serviceCenterAreaLabel})}),Object(y.jsxs)(Mn,{children:[z(i.find((e=>{let{name:t}=e;return t===l}))),z(i.find((e=>{let{name:t}=e;return t===o}))),z(i.find((e=>{let{name:t}=e;return t===d})))]})]}),Object(y.jsxs)($n,{children:[Object(y.jsx)(Sn,{children:Object(y.jsx)(we.a,{id:P.b.enterServiceCenterName})}),Object(y.jsxs)(Mn,{children:[z(i.find((e=>{let{name:t}=e;return t===p}))),z(i.find((e=>{let{name:t}=e;return t===u})))]})]}),T?Object(y.jsxs)(yn,{status:"invalid",children:[Object(y.jsx)("img",{src:G.a,alt:"alert",width:24,height:24}),Object(y.jsx)(wn,{status:"invalid",children:Object(y.jsx)(we.a,{id:T,defaultMessage:T})})]}):null,Object(y.jsxs)(_n,{onClick:e=>{e.preventDefault();B()||x(s.a.saveGenericAttributes({payload:g,claim_id:j,form:t,source:"direct"}))},children:[D?Object(y.jsx)(q.a,{}):null,Object(y.jsx)(we.a,{id:P.b.submit})]})]})};const{getServiceCenterBrandList:An,getTotalServiceCenter:Ln}=s.a;var En=Object(r.b)((e=>({serviceCenterBrandList:e.Claim.serviceCenterBrandList,totalServiceCenterList:e.Claim.totalServiceCenterList})),{getServiceCenterBrandList:An,getTotalServiceCenter:Ln})((function(e){var t,i;let{claimId:n,serviceCenterBrandList:r,getServiceCenterBrandList:c,totalServiceCenterList:s=[],serviceCenterForm:l={},getTotalServiceCenter:o}=e;const{attributes:d=[]}=l,{branch_info:p={}}=d.find((e=>{let{name:t}=e;return"servicecenter_branch"===t}))||{},u=`${p.branch_name} -  ${p.address}`,b={};return d.forEach((e=>{const{name:t,value:i}=e;b[t]=i})),Object(a.useEffect)((()=>{c(),o()}),[]),Object(y.jsxs)(jn,{children:[b.sc_brand?Object(y.jsxs)(mn,{children:[Object(y.jsx)(gn,{children:Object(y.jsx)(v.a,{id:P.b.detailBrand})}),Object(y.jsx)(vn,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(fn,{children:Object(y.jsx)(v.a,{id:P.b.brandLabel})}),Object(y.jsx)(On,{children:null===(t=r.find((e=>{let{id:t}=e;return t===b.sc_brand})))||void 0===t?void 0:t.name})]})})]}):null,Object(y.jsxs)(mn,{children:[Object(y.jsx)(gn,{children:Object(y.jsx)(we.a,{id:"Detail area perbaikan",defaultMessage:"Detail area perbaikan"})}),Object(y.jsxs)(vn,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(fn,{children:Object(y.jsx)(we.a,{id:"Propinsi",defaultMessage:"Propinsi"})}),Object(y.jsx)(On,{children:b.sc_province})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(fn,{children:Object(y.jsx)(we.a,{id:"Kota",defaultMessage:"Kota"})}),Object(y.jsx)(On,{children:b.sc_city})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(fn,{children:Object(y.jsx)(we.a,{id:"Kode pos",defaultMessage:"Kode pos"})}),Object(y.jsx)(On,{children:b.sc_postal_code})]})]})]}),Object(y.jsxs)(hn,{children:[Object(y.jsx)(gn,{children:Object(y.jsx)(we.a,{id:"Detail service center",defaultMessage:"Detail service center"})}),Object(y.jsxs)(vn,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(fn,{children:Object(y.jsx)(we.a,{id:"Nama",defaultMessage:"Nama"})}),Object(y.jsx)(On,{children:s.length?decodeURI(null===(i=s.find((e=>{let{code:t}=e;return t===b.service_center})))||void 0===i?void 0:i.name):b.service_center})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(fn,{children:Object(y.jsx)(we.a,{id:"Alamat",defaultMessage:"Alamat"})}),Object(y.jsx)(On,{children:u})]})]})]})]})}));var Fn=function(e){let{claimId:t,serviceCenterForm:i={}}=e;const{is_valid:a,attributes:n,name:r}=i;return a?Object(y.jsx)(En,{claimId:t,serviceCenterForm:i}):Object(y.jsx)(In,{formName:r,attributes:n})},zn=i(1440);const Bn=p.c.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);
`,Rn=p.c.div`
  width: 100%;
  margin-bottom: 16px;
`,Pn=p.c.h1`
  font-family: Mulish;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  margin: 0 0 16px 0;
  color: #333;
`,Nn=p.c.div`
  font-family: Mulish;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #DC0000;
  padding: 5px;
`,Gn=p.c.div`
  width: 100%;
  margin-bottom: 8px;
`,Un=p.c.button`
  display: flex;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${u.a.tapPartnerBlue};
  color: ${u.a.white};
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  border: 1px solid ${u.a.tapPartnerBlue};
  text-transform: uppercase;
  width: 100%;
`,Vn=p.c.div`
  width: 100%;
  height: 56px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${u.a.disabledLightGrey};
  background: var(--Monochrome-White, #FFF);
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${u.a.black};
`,Wn=p.c.div`
  font-family: Mulish;
  font-size: 14px;
  font-weight: 800;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  margin-top: 10px;
  &::after {
    content: ${e=>e.required?'"*"':"none"};
    color: ${u.a.crimsonRed};
  }
`,Hn="sc_province",Yn="sc_city",qn="sc_workshop";var Kn=function(e){var t;let{formName:i,claimId:n,description:c,attributes:l,showSubmitButton:o}=e;const d=Object(r.c)(),[p,u]=Object(a.useState)({}),[b,x]=Object(a.useState)({}),[j,m]=Object(a.useState)(!1),[h,g]=Object(a.useState)(!1),f=Object(r.d)((e=>e.Claim.formLoadingStates[i])),O=(null===l||void 0===l?void 0:l.find((e=>e.name===Hn)))||{},w=(null===l||void 0===l?void 0:l.find((e=>e.name===Yn)))||{},k=(null===l||void 0===l?void 0:l.find((e=>e.name===qn)))||{},{data:C,isLoading:_}=(S={enabled:o},Object(zn.a)({queryKey:["bengkelnet-province_list"],queryFn:()=>si.a.getBengkelnetProvinceList().then((e=>e.data)),...S}));var S;const{data:M,isLoading:$}=((e,t)=>Object(zn.a)({queryKey:["bengkelnet-city_list",e],queryFn:()=>si.a.getBengkelnetCityList({province_id:e}).then((e=>e.data)),enabled:!!e,...t}))(p[Hn],{enabled:o&&!!p[Hn]}),{data:D,isLoading:T}=((e,t,i,a)=>Object(zn.a)({queryKey:["bengkelnet-workshop_list",e,t,i],queryFn:()=>si.a.getBengkelnetWorkshopList({province_id:e,city_id:t,claim_id:i}).then((e=>e.data)),enabled:!!(e&&t&&i),...a}))(p[Hn],p[Yn],n,{enabled:o&&!!p[Hn]&&!!p[Yn]});Object(a.useEffect)((()=>{n&&!o&&u({[Hn]:O.value||null,[Yn]:w.value||null,[qn]:k.value||null})}),[n,o]),Object(a.useEffect)((()=>{if(n&&o&&O.value&&null!==C&&void 0!==C&&C.data){const e=C.data.find((e=>e.ProvinceName===O.value));u({[Hn]:(null===e||void 0===e?void 0:e.ProvinceId)||null,[Yn]:null,[qn]:null})}}),[n,o,C]),Object(a.useEffect)((()=>{if(!n||!o||!w.value||null===M||void 0===M||!M.data)return;const e=M.data.find((e=>e.CityName===w.value));e&&u((t=>({...t,[Yn]:e.CityID,[qn]:null})))}),[n,o,M]),Object(a.useEffect)((()=>{if(!n||!o||!k.value||null===D||void 0===D||!D.data)return;const e=D.data.find((e=>(e.WorkshopName||e.workshop_name||e.name||e.Name)===k.value));e&&u((t=>({...t,[qn]:e.WorkshopId||e.WorkshopID||e.workshop_id||e.code||e.Code})))}),[n,o,D]);const I=((null===C||void 0===C?void 0:C.data)||[]).map((e=>({value:e.ProvinceId,displayName:e.ProvinceName}))),A=null===C||void 0===C||null===(t=C.data)||void 0===t?void 0:t.find((e=>e.ProvinceId===p[Hn])),L=((null===M||void 0===M?void 0:M.data)||[]).filter((e=>!A||e.ProvinceName===A.ProvinceName)).map((e=>({value:e.CityID,displayName:e.CityName}))),E=((null===D||void 0===D?void 0:D.data)||[]).map((e=>({value:e.WorkshopId||e.WorkshopID||e.workshop_id||e.code||e.Code,displayName:e.WorkshopName||e.workshop_name||e.name||e.Name}))),F=(e,t,i,a,n,r,c)=>Object(y.jsxs)(Rn,{children:[Object(y.jsx)(qi,{showSearch:!0,loading:a,value:t,changedValue:t,error:c,disabled:r,options:i,placeholder:e,onSelect:e=>n(e)}),c?Object(y.jsx)(Nn,{children:Object(y.jsx)(v.a,{id:c})}):null]});return Object(y.jsxs)(Bn,{children:[c&&Object(y.jsx)(Pn,{children:Object(y.jsx)(v.a,{id:c})}),Object(y.jsxs)(Gn,{children:[Object(y.jsx)(Wn,{required:O.required,children:Object(y.jsx)(v.a,{id:O.label})}),o?F(O.label,p[Hn],I,_,(e=>{u({[Hn]:e,[Yn]:null,[qn]:null}),m(!0),g(!1),x({})}),!1,b[Hn]):Object(y.jsx)(Vn,{children:p[Hn]})]}),Object(y.jsxs)(Gn,{children:[Object(y.jsx)(Wn,{required:w.required,children:Object(y.jsx)(v.a,{id:w.label})}),o?F(w.label,p[Yn],L,j&&$,(e=>{u((t=>({...t,[Yn]:e,[qn]:null}))),g(!0),x({})}),!p[Hn],b[Yn]):Object(y.jsx)(Vn,{children:p[Yn]})]}),Object(y.jsxs)(Gn,{children:[Object(y.jsx)(Wn,{required:k.required,children:Object(y.jsx)(v.a,{id:k.label})}),o?F(k.label,p[qn],E,h&&T,(e=>{u((t=>({...t,[qn]:e}))),x({})}),!p[Yn],b[qn]):Object(y.jsx)(Vn,{children:p[qn]})]}),o&&Object(y.jsxs)(Un,{onClick:e=>{e.preventDefault();(()=>{const e={};return l.forEach((t=>{t.required&&!p[t.name]&&(e[t.name]=P.b.required)})),x(e),Object.keys(e).length>0})()||(()=>{const e=(e,t)=>{const i=e.find((e=>e.value===t));return i?i.displayName:t},t={...p,[`${Hn}_display_value`]:e(I,p[Hn]),[`${Yn}_display_value`]:e(L,p[Yn]),[`${qn}_display_value`]:e(E,p[qn])};d(s.a.saveGenericAttributes({payload:t,claim_id:n,form:i,source:"direct"}))})()},children:[f?Object(y.jsx)(q.a,{}):null,Object(y.jsx)(we.a,{id:P.b.submit})]})]})};const Qn=p.c.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 720px;
  width: 100%;
`,Jn=p.c.div`
    display: flex;
    padding: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    border-radius: 24px;
    background: ${u.a.white};

    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);
`,Xn=p.c.div`
  color: var(--Monochrome-Black, #333);
  font-size: 18px;
  font-weight: 800;
  line-height: 22px; 
`,Zn=p.c.div`
  max-width: 960px;
  width: 100%;

  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 24px;
  background: ${u.a.white};

  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);

  input {
    padding: 5px;
    border-radius: 8px;
    box-sizing: border-box;
  }
  
  input:not(:last-of-type) {
    margin-right: 20px;
  }
`,er=p.c.div`

  font-size: 18px;
  font-weight: 800;
  line-height: 22px; 
  
`,tr=(p.c.h1`

  font-size: 16px;
  font-weight: 800;
  line-height: 20px; 
 
`,p.c.h1`

  font-size: 14px;
  font-weight: ${e=>e.fontWeight||400};
  line-height: 18px; 
 
`),ir=p.c.div`

    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px; 
  
    .bank-switch {
    // background-color: #333333;
    font-weight: bold;
    line-height: normal;
    margin-left: 8px;
  }

`,ar=p.c.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex: 0 1 auto;
  border-radius: 12px;
  border: 1px solid var(--Monochrome-Light-Grey, #DDD);
  font-weight: ${e=>e.fontWeight};
  min-width: 248px;
`,nr=p.c.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  
`,rr=p.c.div`

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  .bank-switch {
  background-color: #333333;
  font-weight: bold;
  line-height: normal;
  margin-left: 8px;
}

`,cr=p.c.button`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
  background: var(--TAP-TAP-Partners, #0064C8);
  color: var(--Monochrome-White, #FFF);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
  border: 1px solid  var(--TAP-TAP-Partners, #0064C8);;
`,sr=p.c.div`
    display: flex;
    gap: 16px;
    width: 100%;
    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
`,lr=p.c.div`
  color: var(--Hue-Crimson, #DC0000);

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`,or=p.c.div`
    display: flex;
    gap: 8px;
`,dr=p.c.label`

  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(12px);
  -ms-transform: translateX(12px);
  transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 16px;
}

.slider.round:before {
  border-radius: 50%;
}
`;var pr=function(e){let{onChange:t,checked:i,disabled:a}=e;return Object(y.jsxs)(dr,{class:"switch",children:[Object(y.jsx)("input",{disabled:a,type:"checkbox",onChange:t,checked:i}),Object(y.jsx)("span",{class:"slider round"})]})},ur=i(1044);const br=p.c.div`
  font-family: 'Mulish';
  border: ${e=>e.error?`1px solid ${u.a.crimsonRed}`:`1px solid ${u.a.disabledLightGrey}`};
  width: ${e=>e.width?e.width:"100%"};
  max-width: 100%;
  border-radius: 8px;
  padding: 0px 16px;
  height: 56px;
  
  input{
    border-radius: 0px;
    border: 0px;
    outline: none;
    height: 16px;
  }
`,xr=p.c.div``,jr=p.c.label`
  font-size: 12px;
  background: #FFFFFF;
  color: var(--Monochrome-Dark-Grey, #999);
`,mr=p.c.div`
  height: 30px;
  position: relative;
`,hr=p.c.input`
  height: 30px;
  background: #FFFFFF;
  width: ${e=>e.width?e.width:"100%"};
  max-width: 100%;
  background: #FFFFFF;
  border: none;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;

  ${e=>e.isComponentVisible&&"\n    border-width: 1px 1px 0px 1px !important;\n  "}

  ${e=>e.error&&`\n    //  border-color: ${e=>e.theme.color.error};\n  `}

  &::placeholder {
  }
`,gr=(p.c.div`
  font-size: 12px;

  ${e=>e.empty&&"\n    color: #989898;\n  "}
`,p.c.img`
  position: absolute;
  right: 0px;
`,p.c.div`
  position: relative;
`),fr=p.c.div`
  position: absolute;
  box-shadow: 0 8px 16px 0 rgb(0, 0, 0, 0.04);
  border-width: 1px;
  border-radius: 3px;
  width: 100%;
  z-index: 2;
  max-height: 225px;
  overflow: auto;

  ${e=>e.inverse&&"\n    bottom: 30px;\n  "}
`,Or=p.c.div`
  min-height: 45px;
  padding: 13px 18px;
  background: #FFFFFF;
`,vr=p.c.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`;p.c.div`
  margin-top: 5px;
  font-size: 11px;
`,p.c.span`
  padding: 0 0.3rem;
`;var yr=e=>{let{title:t,value:i,options:n,onSelect:r}=e;const{ref:c,isComponentVisible:s,setIsComponentVisible:l}=Object(Bi.a)(!1),[o,d]=Object(a.useState)(i||null),[p,u]=Object(a.useState)(""),[b,x]=Object(a.useState)(n),[j,m]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(i){const e=n.find((e=>e.value===i));d(e),u((null===e||void 0===e?void 0:e.displayName)||"")}}),[i,n]),Object(a.useEffect)((()=>{o||l(!0)}),[p,o]),Object(a.useEffect)((()=>{const e=n.filter((e=>e.displayName.toLowerCase().includes(p.toLowerCase())));x(""===p?n:e),m(0===e.length)}),[p,n]),Object(y.jsx)(br,{children:Object(y.jsxs)(xr,{children:[t&&Object(y.jsx)(jr,{children:t}),Object(y.jsx)(mr,{children:Object(y.jsx)(hr,{type:"text",onChange:e=>{d(null),u(e.target.value)},onClick:()=>{l(!0),""===p&&(x(n),m(!1))},value:p||"",ref:c})}),s&&Object(y.jsx)(gr,{children:Object(y.jsxs)(fr,{children:[b.map((e=>Object(y.jsx)(Or,{onClick:()=>{return d(t=e),l(!1),u(t.displayName),void r(t.value);var t},children:Object(y.jsx)(vr,{children:e.displayName})},e.value))),j&&Object(y.jsx)(Or,{children:Object(y.jsx)(vr,{children:"Bank Not Found"})})]})})]})})};var wr=function(e){let{claimData:t,bankDetailForm:i={},handleSubmit:n}=e;const{attributes:c,name:l}=i,o=Object(r.c)(),p=Object(d.a)(),u=Object(r.d)((e=>e.User.details)),b=Z()(u,"bank_accounts",""),x=Object(r.d)((e=>e.Claim.formLoadingStates[l])),j=Object(Y.u)(s.a.VERIFY_BANK_ACCOUNT_FORMS_REQUEST),m=Object(Y.t)(s.a.VERIFY_BANK_ACCOUNT_FORMS_REQUEST),{claim_no:h,claim_id:g,status_group:f}=t,[O,w]=Object(a.useState)(!b.length),[k,C]=Object(a.useState)(null),[_,S]=Object(a.useState)({}),M=![ee.k,ee.j].includes(f),$=Object(r.d)((e=>e.Claim.verifyAccountData)),D=Object(r.d)((e=>e.Claim.verifyBankAccountFormStatus));Object(a.useEffect)((()=>()=>{o(s.a.resetReduxState(["verifyAccountData","verifyBankAccountFormStatus"]))}),[g]),Object(a.useEffect)((()=>{"success"===D&&S((e=>({...e,account_holder_name:$.account_holder_name})))}),[$,D]);const T=()=>{var e,t,i,a;if(![ee.k,ee.j].includes(f))return;if(null===k&&!Object.keys(_).length)return;const r={claim_id:g,form:l,payload:{account_holder_name:_.account_holder_name||(null===b||void 0===b||null===(e=b[k])||void 0===e?void 0:e.holder_name),account_number:_.account_number||(null===b||void 0===b||null===(t=b[k])||void 0===t?void 0:t.account_no),bank_code:Number(_.bank_name)||Number(null===b||void 0===b||null===(i=b[k])||void 0===i?void 0:i.bank_code),bank_name:Number(_.bank_name)||Number(null===b||void 0===b||null===(a=b[k])||void 0===a?void 0:a.bank_code),claim_no:h,source:"direct"}};n?n(r):o(s.a.saveGenericAttributes(r))},I=e=>{let{value:t,name:i}=e;S((e=>({...e,[i]:t})))};return Object(y.jsxs)(Zn,{children:[Object(y.jsx)(er,{children:Object(y.jsx)(v.a,{id:P.b.bankAccount})}),Object(y.jsxs)(ir,{children:[Object(y.jsx)("div",{children:Object(y.jsx)(v.a,{id:P.b.selectBankAccount})}),b.length?Object(y.jsxs)(or,{children:[Object(y.jsx)(v.a,{id:P.b.newBankAccount}),Object(y.jsx)(pr,{disabled:M,className:"bank-switch",checked:O,onChange:e=>{w(e.target.checked)}})]}):null]}),Object(y.jsx)(rr,{children:!O&&b.length>0&&b.map(((e,t)=>{return((e,t)=>Object(y.jsxs)(ar,{children:[Object(y.jsx)("div",{children:e.map(((e,t)=>Object(y.jsx)(nr,{children:Object(y.jsxs)(tr,{fontWeight:e.fontWeight,children:[" ",e.value," "]})},JSON.stringify(e))))}),Object(y.jsx)(ur.a,{disabled:M,onChange:()=>C(t),checked:k===t})]}))([{title:"Nama lengkap nasabah",value:(i=e).holder_name,fontWeight:800},{title:"Nomor Rekening",value:i.account_no},{title:"Nama Bank",value:i.bank_code}],t);var i}))}),O&&Object(y.jsx)(sr,{children:null===c||void 0===c?void 0:c.map((e=>{let{type:t,label:i,placeholder:a,name:n,options:r}=e;if(t===ee.f.choices){if(r&&r.length>0){const e=r.map((e=>{let[t,i]=e;return{value:t,displayName:i}}));return Object(y.jsx)(yr,{title:p.formatMessage({id:i||" "}),value:_[n],options:e,placeholder:p.formatMessage({id:a||i||" "}),onSelect:e=>I({value:e,name:n})},n)}return Object(y.jsx)("div",{children:"Loading options..."},n)}return Object(y.jsx)(Ie,{value:_[n],name:n,title:p.formatMessage({id:i||" "}),onChange:I,disabled:"account_holder_name"===n},n)}))}),Object(y.jsx)(lr,{children:m&&Object(y.jsx)(v.a,{id:D})}),M?null:O?!m&&D?Object(y.jsxs)(cr,{onClick:T,children:[x?Object(y.jsx)(q.a,{}):null,Object(y.jsx)(we.a,{id:P.b.submit})]}):Object(y.jsxs)(cr,{onClick:()=>{if(![ee.k,ee.j].includes(f))return;if(!Object.keys(_).length)return;const e={account_number:_.account_number,bank_name:_.bank_name,bank_code:_.bank_name};o(s.a.verifyBankAccountForms({payload:e}))},children:[j?Object(y.jsx)(q.a,{}):null,Object(y.jsx)(we.a,{id:P.b.verify})]}):Object(y.jsxs)(cr,{onClick:T,children:[x?Object(y.jsx)(q.a,{}):null,Object(y.jsx)(we.a,{id:P.b.submit})]})]})};const kr=p.c.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 24px;
  background: ${u.a.white};
  width: 100%;
  flex-wrap: wrap;
  max-width: 720px;
`,Cr=p.c.div`
  color: ${u.a.monoChromeGrey};
  font-family: Mulish;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px; 
`,_r=p.c.div`
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`,Sr=p.c.img`
  width: 24px;
  height: 24px;
`,Mr=p.c.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: var(--Monochrome-Almost-White, #F5F5F5);
  height: fit-content;
`,$r=p.c.div`
  display: flex;
  gap: 8px;
`,Dr=p.c.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`,Tr=p.c.div`
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 22px; /* 122.222% */
`,Ir={account_number:G.I,bank_name:G.G,account_holder_name:G.z};var Ar=function(e){let{bankDeatilForm:t={},bankList:i=[]}=e;const{attributes:a=[],title:n=""}=t;return Object(y.jsxs)(kr,{children:[Object(y.jsx)(Tr,{children:Object(y.jsx)(v.a,{id:n})}),Object(y.jsx)(Dr,{children:a.map((e=>{let{value:t,label:a,name:n,options:r,type:c}=e,s=t;var l;c===ee.f.choices&&(s=null===i||void 0===i||null===(l=i.find((e=>{let[t]=e;return t===s})))||void 0===l?void 0:l[1]);return Object(y.jsxs)($r,{children:[Object(y.jsx)(Mr,{children:Object(y.jsx)(Sr,{src:Ir[n]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(Cr,{children:Object(y.jsx)(v.a,{id:a})}),Object(y.jsx)(_r,{children:s})]})]},n)}))})]})};var Lr=function(e){let{claimData:t={},bankList:i=[]}=e;const{forms:a=[],claim_id:n,status_group:r,package_country:c}=t,s=[ee.l,ee.n].includes(r),l=[ee.k,ee.j,ee.m,ee.h].includes(r);return Object(y.jsx)(Qn,{children:a.map((e=>{const{name:a,attributes:o,is_valid:d,description:p,is_salvage:u}=e,b=ee.D===a,x=[ee.t,ee.u].includes(a);return b?Object(y.jsx)(Fn,{serviceCenterForm:e,showSubmitButton:l},a):a===ee.H?Object(y.jsx)(Kn,{formName:a,claimId:n,description:p,attributes:o,showSubmitButton:!d},a):x?d||s?Object(y.jsx)(Ar,{bankList:i,bankDeatilForm:e},a):Object(y.jsx)(wr,{bankList:i,claimData:t,bankDetailForm:e},a):d||s?Object(y.jsx)(bn,{formTitle:p,formName:a,claimId:n,formData:o,claimStatus:r,packageCountry:c},a):Object(y.jsxs)(Jn,{children:[Object(y.jsx)(Xn,{children:Object(y.jsx)(v.a,{id:e.description})}),Object(y.jsx)(Qa,{form:e,isSalvage:u,formName:a,claimId:n,formData:o,claimStatus:r,showSubmitButton:l})]},a)}))})};const Er=p.c.div`
    background: #FFF;
    padding: 40px;
    max-width: 720px;
    border-radius: 16px;
    min-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`,Fr=p.c.div`
    display: flex;
`,zr=p.c.div`
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    background: var(--TAP-TAP-Partners, #0064C8);
    color: var(--Monochrome-White, #FFF);
    text-align: center;

    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`,Br=p.c.div`
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    min-width: 280px;
`,Rr=p.c.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`,Pr=p.c.div`
    color: var(--Hue-Crimson, #DC0000);

    /* Caption/Caption Semibold */
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
`,Nr=p.c.div`
    color: var(--Monochrome-Black, #333);

    /* Body/Body Medium Space */
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
`,Gr=p.c.div`
    display: flex;
    gap: 16px;
`;var Ur=function(e){var t;let{claimData:i,form:n,handleSubmit:c}=e;const{attributes:l,name:o}=n,d=null===(t=l.find((e=>{let{name:t}=e;return"bank_name"===t})))||void 0===t?void 0:t.value,{claim_no:p,claim_id:u}=i,b=Object(r.c)(),x=Object(Y.u)(s.a.VERIFY_BANK_ACCOUNT_FORMS_REQUEST),j=Object(Y.t)(s.a.VERIFY_BANK_ACCOUNT_FORMS_REQUEST),m=Object(r.d)((e=>e.Claim.verifyBankAccountFormStatus)),h=Object(r.d)((e=>e.Claim.verifyAccountData||{})),{account_holder_name:g,is_valid:f}=h,[O,w]=Object(a.useState)({});return Object(y.jsxs)(Rr,{children:[Object(y.jsxs)(Gr,{children:[Object(y.jsx)(Br,{children:Object(y.jsx)(we.a,{id:P.b.acocuntNumber})}),Object(y.jsx)(Ie,{onChange:e=>{let{value:t,name:i}=e;w((e=>({...e,[i]:t})))},name:"account_number",form:n})]}),f?Object(y.jsxs)(Gr,{children:[Object(y.jsx)(Br,{children:Object(y.jsx)(we.a,{id:P.b.accountHolderName})}),Object(y.jsx)(Nr,{children:g})]}):null,m&&j?Object(y.jsx)(Pr,{children:m}):null,f?Object(y.jsxs)(zr,{onClick:()=>{const e={claim_id:u,form:o,payload:{...O,account_holder_name:g,claim_no:p,source:"direct"}};c&&c(e)},children:[x&&Object(y.jsx)(q.a,{}),Object(y.jsx)(v.a,{id:P.b.submitLabel})]}):Object(y.jsxs)(zr,{onClick:()=>{const e={account_number:O.account_number,bank_name:d};b(s.a.verifyBankAccountForms({payload:e}))},children:[x&&Object(y.jsx)(q.a,{}),Object(y.jsx)(v.a,{id:P.b.saveBankAccount})]})]})};var Vr=function(e){let{claimData:t,bankList:i}=e;const{payment_forms:n}=t,c=Object(r.c)(),[l,o]=Object(a.useState)();if(!n)return null;if(!n.length)return null;const d=n.find((e=>{let{is_valid:t}=e;return t}));if(d)return Object(y.jsx)(Ar,{bankList:i,claimData:t,bankDeatilForm:d});const p=e=>{c(s.a.savePaymentForm(e))};return Object(y.jsx)(Er,{children:n.map((e=>{const{name:i,title:a}=e;return Object(y.jsxs)(Fr,{children:[Object(y.jsx)(ur.a,{onChange:e=>(e=>{let{name:t}=e;o(t)})({e:e,name:i})}),l&&l===i?l===ee.y?Object(y.jsx)(Ur,{form:e,claimData:t,handleSubmit:p}):l===ee.u?Object(y.jsx)(wr,{claimData:t,bankDetailForm:e,handleSubmit:p}):null:Object(y.jsx)(v.a,{id:a})]})}))})};const Wr=p.c.div`
  display: flex;
  width: 280px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: 8px;
  flex-wrap: wrap;

  background: ${e=>e.status===ee.k?u.a.almostWhite:u.a.grassGreen};
  color: ${e=>e.status===ee.k?u.a.black:u.a.white};
  border-radius: 12px;
`,Hr=p.c.div`
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 18px; /* 128.571% */
`,Yr=p.c.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-wrap: wrap;
`,qr=p.c.div`
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
`,Kr=p.c.div``,Qr=p.c.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 24px;
  background: ${u.a.white};
  width: 720px;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`,Jr=p.c.div`
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 22px; /* 122.222% */
`,Xr={[ee.k]:P.b.completeClaimForm,[ee.i]:P.b.CompletedClaimForm};var Zr=function(e){let{userList:t=[]}=e;const i=Object(c.g)();return t.length?Object(y.jsxs)(Qr,{children:[Object(y.jsx)(Jr,{children:Object(y.jsx)(we.a,{id:P.b.claimMustBeResolved})}),Object(y.jsx)(Yr,{children:null===t||void 0===t?void 0:t.map((e=>{const{claim_id:t,user_name:a,status_group:n}=e;return Object(y.jsxs)(Wr,{status:n,onClick:()=>{return e=t,void i.push(`/claimdetail/${e}`);var e},children:[Object(y.jsxs)(Kr,{children:[Object(y.jsx)(Hr,{children:a}),Object(y.jsx)(qr,{children:Object(y.jsx)(we.a,{id:Xr[n]})})]}),Object(y.jsx)("div",{children:ee.k===n?Object(y.jsx)("img",{src:G.c}):Object(y.jsx)("img",{src:G.g})})]})}))})]}):null};var ec=function(){const e=Object(r.c)(),t=Object(c.g)(),i=Object(Y.u)(s.a.GET_CLAIM_DETAILS_REQUEST),n=Object(Y.t)(s.a.GET_CLAIM_DETAILS_REQUEST),d=Object(c.i)(),p=Object(S.a)(),{id:u=""}=d,b=Object(r.d)((e=>e.Claim.claimDetails)),x=Object(r.d)((e=>e.Claim.claimBankList)),j=Object(r.d)((e=>e.Claim.associatedUserList)),[m,h]=Object(a.useState)("detail"),[g,f]=Object(a.useState)(!1),O=()=>{const e=document.querySelector(".detail-header");if(e){const t=e.getBoundingClientRect().bottom;f(t<=0)}};return Object(a.useEffect)((()=>{n&&(e(o.a.resetErrorRedux(Object(Y.m)(s.a.GET_CLAIM_DETAILS_REQUEST))),t.push("/"))}),[n,e,t]),Object(a.useEffect)((()=>(e(s.a.getClaimDetails(u)),e(s.a.getAssocaitedUserOnClaim(u)),e(s.a.getClaimBankList({claim_id:u})),()=>{e(s.a.resetReduxState(["claimDetails","associatedUserList","claimBankList"]))})),[u,e]),Object(a.useEffect)((()=>{e(l.a.getUserDetails())}),[e]),Object(a.useEffect)((()=>(window.addEventListener("scroll",O),()=>{window.removeEventListener("scroll",O)})),[]),Object(y.jsxs)(K,{"data-testid":"claim-detail",children:[i?Object(y.jsx)(Q,{children:Object(y.jsx)(q.a,{})}):null,b&&Object.keys(b).length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"detail-header",children:Object(y.jsx)(H,{claimData:b})}),p?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"claims-tab "+(g?"fixed":""),children:[Object(y.jsx)("button",{className:"detail"===m?"active":"",onClick:()=>h("detail"),children:"Klaim Detail"}),Object(y.jsx)("button",{className:"forms"===m?"active":"",onClick:()=>h("forms"),children:"Klaim Form"})]}),"detail"===m?Object(y.jsx)(J,{children:Object(y.jsx)(je,{claimData:b})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J,{children:Object(y.jsx)(Lr,{bankList:x,claimData:b})}),Object(y.jsx)(J,{children:Object(y.jsx)(Vr,{bankList:x,claimData:b})})]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J,{children:Object(y.jsx)(Zr,{userList:j})}),Object(y.jsx)(J,{children:Object(y.jsx)(je,{claimData:b})}),Object(y.jsx)(J,{children:Object(y.jsx)(Lr,{bankList:x,claimData:b})}),Object(y.jsx)(J,{children:Object(y.jsx)(Vr,{bankList:x,claimData:b})})]})]}):null]})}},993:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var a=i(30);const n=i(11).c.div`
    @keyframes rotate{
     0%   { 
      transform: rotate(0);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -sand-transform: rotate(0deg);
     }
     25%{ 
      transform: rotate(90);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -sand-transform: rotate(90deg);
     }
     50%{ 
      transform: rotate(180); 
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -sand-transform: rotate(180deg);
    }
     75%{
       transform: rotate(270);
      -webkit-transform: rotate(270deg);
      -moz-transform: rotate(270deg);
      -o-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      -sand-transform: rotate(270deg);
       }
     100%{ 
      transform: rotate(360);
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -sand-transform: rotate(360deg); 
     }
    }

    /* img{ */
      animation-name: rotate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-play-state: running;
      width: min-content;
      height: min-content;
      animation-direction: normal;
      animation-timing-function: linear;
    /* } */

`;var r=i(2);var c=function(){return Object(r.jsx)(n,{"data-testid":"loader",children:Object(r.jsx)("img",{src:a.s})})}}}]);
//# sourceMappingURL=46.db3908d3.chunk.js.map