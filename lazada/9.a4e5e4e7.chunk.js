(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[9],{1004:function(e,t,i){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTDIyMjAwMDExMTAwMDIyMjIyMjMzMwqNEFgAAAAHdFJOUwDwMEgQxYD4ZDhOAAAA5ElEQVRIx+3VMQ6DMAwF0IhGPUCWrM0NOnVm6Q0qsVbqCRiQr18oItimdr/UrSXjT3gEiE0I+/iPcXi0MoiXs14TO0oyKTSoy8KVqD/xoMlEN7WoI5JUGYNB7WiMBDVBRHJXxyniVHkF963EqBlSUsySmqG+1Q/MqSbr27+JC+kH2eYGJCcsiM+YEJ+yoXXOgVbKgyrlQZVyoYVyIU7ZEKOSUw0L5UGVSuHbRdDtkI1DrwB5mdBnQT4wdFSQQwcdX6QQoJJCihMqc6RhQK0HamJ4O/zUWKEWjTV76LcB/YD28aPjCSjp0wt9ef6DAAAAAElFTkSuQmCC"},1014:function(e,t,i){"use strict";var n=i(1016);t.a=n.a},1016:function(e,t,i){"use strict";var n=i(11),a=i(19);const r=n.c.div`
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
`,o=n.c.div`
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
`,s=n.c.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 1.6rem;
    justify-content: space-between;
    font-size: 16px;
`,c=n.c.div`
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
`,d=n.c.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    color: #333333;
    background: ${e=>e.background||a.a.tapPartnerYellow};
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
    `,l=n.c.div`
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
  `,p=n.c.img`
  width: 24px;
  height: 24px;
`,b=n.c.div`
    font-family: 'Mulish';
    font-style: normal;
    text-align: center;
    flex: 1;
    color: ${e=>e.color||"#333333"};
`;var u=i(1004),h=i(1),x=i(16),g=i(2);t.a=e=>{let{headerBackgroundColor:t="",footer:i=null,width:n="",modalIsOpen:a=!0,modalBodyHeight:f="",closeModal:j,headerText:m="",leftButton:O=!0,leftButtonText:A="OKE",rightButton:k=!1,markupText:v="",onRightButtonClick:y,onLeftButtonClick:w,leftButtonStyle:C={},rightButtonStyle:B={},rightButtonText:_="",isCloseIcon:S=!0,onCloseIconClick:L=(()=>{}),closeOnShadowDisabled:T=!1,modalBodyStyle:$={},height:D="",headerTextColor:E=""}=e;return Object(h.useEffect)((()=>{if(a){document.querySelector("body").style.overflow="hidden"}else{document.querySelector("body").style.overflow="auto"}return()=>{document.querySelector("body").style.overflow="auto"}}),[a]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(r,{isOpen:a,onClick:T?()=>{}:j}),Object(g.jsxs)(o,{height:D,width:n,isOpen:a,children:[Object(g.jsxs)(d,{background:t,children:[Object(g.jsx)(b,{color:E,children:m}),S?Object(g.jsx)(p,{src:Object(x.c)().closeIcon||u.a,alt:"close",onClick:j}):null]}),Object(g.jsx)(l,{style:{...$},modalBodyHeight:f,children:v}),i||Object(g.jsxs)(s,{children:[O&&Object(g.jsx)(c,{fullWidth:!(O&&k),onClick:w,customStyle:C,children:A}),k&&Object(g.jsxs)(c,{onClick:y,customStyle:B,children:[" ",_]})]})]})]})}},1027:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s}));var n=i(979);const a="Terjadi kesalahan. Silakan coba lagi.",r=e=>!e||"string"!==typeof e||!e.trim()||("error"===e||"Network error"===e||/^Request failed \(\d+\)$/.test(e)),o=e=>{if(!e)return a;if("string"===typeof e)return r(e)?a:e;const t=e.message||"";return r(t)?a:t},s=(e,t)=>{const i=o(e),a=t?t.formatMessage({id:i,defaultMessage:i}):i;n.default.error({message:a,description:""})}},1028:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}));var n=i(1027);const a=function(e){return e&&(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[200]).includes(e.status)||r(e),e.data},r=e=>{var t;const i=new Error((e=>{const t=(i=null===e||void 0===e?void 0:e.data)&&"object"===typeof i?"string"===typeof i.error&&i.error.trim()?i.error:"string"===typeof i.message&&i.message.trim()?i.message:"":"";var i;return t||n.a})(e));throw i.code=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code,i.status=null===e||void 0===e?void 0:e.status,i}},1033:function(e,t,i){"use strict";var n=i(19);const a=i(11).c.div`

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
`;var r=i(2);t.a=function(e){let{name:t,disabled:i,onChange:o,checked:s,paddingLeft:c,defaultChecked:d,width:l="25px",height:p="25px",checkedBoxLeftAllignment:b="0px",checkedBoxTopAlignment:u="0px",borderColor:h=n.a.black,checkedColor:x=n.a.honeyyellow,checkedBorderRadius:g="4px",unCheckedBorderColor:f=n.a.black,checkedPosition:j={},...m}=e;return Object(r.jsx)(a,{width:l,height:p,borderColor:h,checkedColor:x,paddingLeft:c,checkedPosition:j,unCheckedBorderColor:f,checkedBorderRadius:g,checkedBoxTopAlignment:u,checkedBoxLeftAllignment:b,children:Object(r.jsxs)("label",{className:"main",children:[m.children,Object(r.jsx)("input",{"data-testid":"checkbox",name:t,type:"checkbox",disabled:i,onChange:o,checked:s,defaultChecked:d,width:l,height:p}),Object(r.jsx)("span",{className:"geekmark"})]})})}},1042:function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));var n=i(11),a=i(19);const r=n.c.div`
    display: flex;
    justify-content: center;
    background-attachment: fixed;
    flex-direction: column;
    justify-content: center;
    background-attachment: fixed;
    min-height: 100%;
    padding: 40px 40px;
    padding-top: 0px;

    @media only screen and (max-width: 768px) {
        background-color: #FFF;
        padding: 0px;
        padding-top: 40px;
    }
`,o=n.c.div`
    padding: 48px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px;
    min-height: 100%;

    @media only screen and (max-width: 768px) {
        padding: 16px 0;
        background: ${a.a.lightGrey};
        min-height: 100vh;
        margin-top: 75px;
    }
`,s=n.c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1000;
`},1044:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(11),a=i(19);const r=n.c.span`
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
  background-color: ${a.a.white};
  border-radius: 50%;
  border: 1px solid ${a.a.disabledLightGrey};
}

.container input:checked ~ .checkmark {
  background-color: ${a.a.tapPartnerBlue};
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
`;var o=i(2);var s=function(e){let{onChange:t,disabled:i,checked:n}=e;return Object(o.jsx)(r,{children:Object(o.jsxs)("label",{className:"container",children:[Object(o.jsx)("input",{disabled:i,type:"radio",name:"radio",onChange:t,checked:n}),Object(o.jsx)("span",{className:"checkmark"})]})})}},1117:function(e,t,i){"use strict";var n=i(980);const a=i(11).c.div`
	.ant-alert {
		border-radius: 0px;
		margin-bottom: 5px;
		margin-top: 3px;
	}
`;var r=i(2);t.a=e=>Object(r.jsx)(a,{children:Object(r.jsx)(n.a,{message:e.message,type:e.type,closable:!0,onClose:e.onClose})})},1149:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return c}));var n=i(1440),a=i(25),r=i(130),o=i(1028);const s=e=>{let{packageCode:t,product:i,partner:s,insuranceProvider:c,isAgency:d,enabled:l=!0}=e;const p=d?!(!t||!i):!!(t&&i&&s);return Object(n.a)({queryKey:["benefits-list",t,i,s,d?"agency":"b2c"],queryFn:async()=>{if(d){const e={package_code:t,product_key:i,insurance_provider:c,package:t,product:i},n=await r.a.getAgencyBenefits({payload:{query:e}});return{benefitList:Object(o.a)(n),isMultiBenefitClaimable:!1,message:"success"}}const e=await a.a.getBenefitsV4({query:{package:t,product:i,partner:s}}),n=Object(o.a)(e);return{benefitList:n.benefit_list_data||[],isMultiBenefitClaimable:n.is_multi_benefit_claimable,message:"success"}},enabled:l&&p})},c=e=>{let{addonIds:t,enabled:i=!0}=e;return Object(n.a)({queryKey:["questionnaire-list",t],queryFn:async()=>{var e;const i=await a.a.getQuetionnaireList({addons:t});var n;if(![200,201].includes(null===i||void 0===i?void 0:i.status))throw new Error((null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.message)||"Error");return(null===(e=i.data)||void 0===e?void 0:e.data)||[]},enabled:i&&(null===t||void 0===t?void 0:t.length)>0})}},1150:function(e,t,i){"use strict";i.d(t,"a",(function(){return Re}));var n=i(1),a=i.n(n),r=i(941),o=i(35),s=i(1014),c=i(1044),d=i(30),l=i(11),p=i(19);const b=l.c.div`
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-right: 16px;
`,u=l.c.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`,h=l.c.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 16px;

  border-radius: 16px;
  border: 1px solid ${p.a.lightGrey};
  background: ${p.a.white};
  height: 100%;
  overflow: auto;
`,x=l.c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: ${p.a.almostWhite};

  .transform-180 {
    transform: rotate(180deg);
    transition: 0.5s;
  }
  .transform-360 {
    transform: rotate(360deg);
    transition: 0.5s;
  }
`,g=l.c.div`
  color: ${p.a.darkGrey};
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`,f=l.c.ol`
  gap: 8px;
  padding-left: 16px;
`,j=l.c.li`
  color: ${p.a.darkGrey};
  font-size: 12px;
  font-weight: 500;
`,m=l.c.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`,O=l.c.div``,A=l.c.div`
  display: flex;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${p.a.white};
  border-radius: 16px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  flex-direction: column;
  border-top: 1px solid ${p.a.disabledLightGrey};

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px 0px 8px 8px;
    border: 1.5px solid var(--TAP-TAP-Partners, #0064c8);
    background: var(--Monochrome-White, #fff);
    height: 40px;
    padding: 0px;
  }
`,k=l.c.button`
  display: flex;
  width: 240px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${e=>e.disabled?p.a.lightGrey:e.backgound};
  color: ${e=>e.disabled?p.a.monoChromeGrey:e.color};
  border: 1px solid
    ${e=>e.disabled?p.a.lightGrey:p.a.tapPartnerBlue};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 40px;
    padding: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 0px;
    background: var(--Monochrome-White, #fff);
    border: 0px;
    background: ${e=>e.disabled?p.a.lightGrey:e.backgound};
    color: ${e=>e.disabled?p.a.monoChromeGrey:e.color};
  }
`,v=l.c.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;

  color: ${p.a.black};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  background: ${p.a.grainyGrey};
`,y=l.c.div`
  position: relative;
  overflow-y: scroll;
  padding-bottom: 150px;
  height: 100%;
`,w=l.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,C=l.c.div`
  display: flex;
  padding: 24px 0px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background: ${p.a.white};
  border-radius: 16px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  gap: 8px;

  @media screen and (max-width: 768px) {
    padding: 0px;
    border-radius: 0px;
    gap: 0px;
  }
`,B=l.c.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border: 1.5px solid ${p.a.tapPartnerBlue};
  background: ${p.a.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${p.a.white};
  border-top: 1px solid ${p.a.tapPartnerBlue};
`,_=l.c.button`
  display: flex;
  height: 40px;
  padding: 12px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  width: 100%;
  text-align: center;

  /* Caption/Caption Bold */
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  text-transform: capitalize;
  background: ${e=>e.disabled?p.a.lightGrey:e.backgound};
  color: ${e=>e.disabled?p.a.monoChromeGrey:e.color};
  border: 0px;
  outline: none;
`,S=l.c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: 100%;
`,L=l.c.img`
  width: 48px;
  height: 48px;
`,T=l.c.div`
  color: ${e=>e.color||p.a.tapTapHeartRed};
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
`,$=l.c.div`
  color: ${p.a.black};
  text-align: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,D=l.c.div`
  font-weight: 800;
`,E=l.c.div`
  text-align: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,F=l.c.div`
  display: flex;
  width: 240px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${p.a.tapPartnerBlue};
  color: ${p.a.white};
  text-align: center;

  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  text-transform: uppercase;
`,M=l.c.div`
  margin-top: 24px;
  height: 80%;
`;var I=i(67),Q=i(10),P=i(2);var R=function(e){let{benefitList:t=[],onChange:i}=e;const[a,r]=Object(n.useState)([]),[o,s]=Object(n.useState)(null),[l,p]=Object(n.useState)(null);Object(n.useEffect)((()=>{if(!Array.isArray(t)||0===t.length)return void r([]);const e=t.map((e=>e.benefit_group_id||"")).map(((e,t)=>""===e?`__idx_${t}`:e)),i=t.map(((t,i)=>({id:e[i],has:Array.isArray(t.benefits)&&t.benefits.length>0}))).filter((e=>e.has)).map((e=>e.id));r(i)}),[t]);const m=e=>{r((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e]))},A=(e,t,n)=>{const a=t&&(t.benefit_id||t.benefitId||null);s(n),p(a),"function"===typeof i&&i(e,t)};return Object(P.jsx)(x,{children:t.map(((e,t)=>{const i=e.benefit_group_id||`__idx_${t}`,n=Array.isArray(e.benefits)?e.benefits:[],r=e.benefit_group_name;return Object(P.jsxs)("div",{style:{borderBottom:"2px solid #DDD"},children:[Object(P.jsxs)(b,{onClick:()=>n.length>0&&m(i),style:{cursor:n.length>0?"pointer":"default",marginBottom:"16px"},children:[Object(P.jsx)(I.a,{id:r}),n.length>0&&Object(P.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),m(i)},"aria-expanded":!a.includes(i),style:{border:0,background:"transparent",padding:0,marginLeft:8},children:Object(P.jsx)("img",{src:d.b,width:16,height:16,className:a.includes(i)?"transform-360":"transform-180",alt:""})})]}),0===n.length&&Object(P.jsx)(h,{style:{cursor:"pointer",border:o===`group:${i}`?"2px solid #1890ff":"1px solid #d9d9d9",marginBottom:"16px"},onClick:t=>A(t,e,`group:${i}`),children:Object(P.jsxs)(O,{children:[Object(P.jsx)(u,{children:Object(P.jsx)(I.a,{id:r})}),Object(P.jsx)(c.a,{checked:o===`group:${i}`})]})}),!a.includes(i)&&n.length>0&&n.map(((e,t)=>{const n=e.benefit_id||e.benefitId||null,a=`benefit:${i}:${null!=n?n:t}`,r=null!=n?l===n:o===a,s=!1!==e.is_active_config;return Object(P.jsx)(h,{style:{cursor:s?"pointer":"default",border:r?"2px solid #1890ff":"1px solid #d9d9d9",marginBottom:"16px"},onClick:t=>A(t,e,a),children:Object(P.jsx)(O,{children:Object(P.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[Object(P.jsxs)("div",{style:{flex:1},children:[Object(P.jsx)(u,{children:Object(P.jsx)(I.a,{id:e.benefit_name})}),r&&Object(P.jsxs)(P.Fragment,{children:[e.description&&Object(P.jsx)(g,{children:Object(P.jsx)(I.a,{id:e.description})}),Array.isArray(e.documents_required)&&e.documents_required.length>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(g,{children:[Object(P.jsx)(I.a,{id:Q.b.benefitDocumentText}),":"]}),Object(P.jsx)(f,{children:e.documents_required.map(((e,t)=>Object(P.jsx)(j,{children:e.user_label},e.user_label||e.id||t)))})]})]})]}),s&&Object(P.jsx)("div",{style:{marginLeft:"16px"},children:Object(P.jsx)(c.a,{checked:r})})]})})},e.benefit_id||e.benefit_name||`${i}-${t}`)}))]},i)}))})},U=i(1149),z=i(1155),q=i(25),N=i(130),G=i(1028);const V=e=>{if(200===(null===e||void 0===e?void 0:e.status))return e.data;Object(G.b)(e)};var Y=i(1440);var K=i(40),X=i(52),H=i(148);const W=l.c.div`
  color: #333333;

  .addons-questions-list-ctn {
    padding: 24px 24px 8px 24px;
  }

  .addons-submit-btn-ctn {
    background: #ffffff;
    padding: 24px;
  }
  .addons-submit-btn-ctn .create-claim-button {
    height: auto;
    white-space: break-spaces;
    min-height: 40px;
  }
  .addons-submit-btn-ctn .action-btns {
    margin-top: auto;
  }
  .addons-submit-btn-ctn .action-btns .ant-btn-default {
    display: flex;
    border-radius: 8px;
    height: 48px;
    border: 2.5px solid #0064c8;
    background: #fff;
    padding: 16px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    color: #0064c8;
    font-weight: 800;
    width: 100%;
  }
  .addons-submit-btn-ctn .action-btns .ant-btn-primary {
    border-radius: 8px;
    height: 48px;
    background: #0064c8;
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    color: #ffffff;
    font-weight: 800;
    width: 100%;
  }
`,J=l.c.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 22px;
  text-align: center;
`,Z=l.c.div`
  display: flex;
  flex-direction: row;
  gap: 4%;
  margin-top: 20px;
`,ee=l.c.div`
  width: 48%;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  justify: space-between;
  text-align: center;
  display: grid;
  grid-template-columns: 90% 10%;
  border: ${e=>"green"===e.btnColor?"2px solid #009632":"2px solid #DDDDDD"};
  color: ${e=>"green"===e.btnColor?"#FFFFFF":"#cccccc"};
  background: ${e=>"green"===e.btnColor?"#009632":"#FFFFFF"};
`,te=l.c.div`
  width: 48%;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  justify: space-between;
  text-align: center;
  display: grid;
  grid-template-columns: 90% 10%;
  border: ${e=>"red"===e.btnColor?"2px solid ##DC0000":"2px solid #DDDDDD"};
  color: ${e=>"red"===e.btnColor?"#FFFFFF":"#cccccc"};
  background: ${e=>"red"===e.btnColor?"#DC0000":"#FFFFFF"};
`,ie=l.c.div`
    width: 20px;
    height: 20px;
    margin-top: -3px;
`;var ne=i(942),ae=i(172),re=i(82),oe=i(946);var se=e=>{const[t,i]=Object(n.useState)("grey"),{data:{id:a="",display_text:r=""}={},handleAddOnsDataChange:o}=e,s=(e,t)=>{o(e,t),i(t?"green":"red")};return Object(P.jsxs)(J,{className:"addons-questions-container",children:[Object(P.jsx)(I.a,{className:"capitalized-text",id:r}),Object(P.jsxs)(Z,{children:[Object(P.jsxs)(ee,{onClick:()=>s(a,!0),btnColor:t,children:[Object(P.jsx)("div",{children:Object(P.jsx)(I.a,{id:"YA"})}),Object(P.jsx)(ie,{children:Object(P.jsx)("img",{src:"green"===t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgBtVBBDYAwDOwDAUhAwiQgBQk4YA4mZRKQgAQkTMLRhiYUMqCfXdIsae9uvRK1AICBK8rbOTWZK7iY7JpwYpcf/siLksuNXFNyb8SF2Q4mbSZroCsIYs2p6HDjCoac33a1jjAhe/oIKKLVfZFHJt/NPTgAtM6ig1DlZhEAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgBrZDRDYJADIavx/HuCI4ACTzwpiO4AU6iTqAb6Aa6gb6RQEjcQEbgncudf82dISQGTGhyaZt+7d+eEH8aTYGKolgqpXKt9UVNaQjD8AoXoUnIMbiu6yPDeA0r0Ai8s9buEbZd18VZljXS7ziEq6paOVjAHxjmWGJKjh1fTvp7JBGdPZym6cnXiCehyEct8J7GmK2UknNWvSVJsukrk58IlbuDvDVBEMSwtt/wuYH3w1FrhA8Pcz6Ef/1MXpZlJOayN0jqV4wbG5B8AAAAAElFTkSuQmCC",alt:"check-mark"})})]}),Object(P.jsxs)(te,{onClick:()=>s(a,!1),btnColor:t,children:[Object(P.jsx)("div",{children:Object(P.jsx)(I.a,{id:"TIDAK"})}),Object(P.jsx)(ie,{children:Object(P.jsx)("img",{src:"red"===t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABKSURBVHgBnVHJCQAwCAudpKN2U0exFfIQqqAGRDQRL2ACVd3PjvkSx4RBPEGxkDtICGH85aLWXpCLk6JQvDBFa6T20tOz1h/XwQXu5vmN1/q2OgAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBnZDBDQMhDATxCfqgDZ5XSdJJlE7SSZ60cX2ARBiET8g/Yglk7c4iY+c2S7hyztF7/6y1flJK1wpY70BEEJFXCOELsMJoeDCD5SLdjUdv4wyd6PRo/Vww90jrawpMefSllFNHFTvvEnIWpg63Wf+NZGEA+2kN3Wu1BmcGeTnqWkeAlbXW3vaDGsLTtW7XD/kYdExwaQLPAAAAAElFTkSuQmCC",alt:"check-mark"})})]})]})]},a)},ce=i(3),de=i(1117);const{getQuetionnaireList:le,resetReduxState:pe}=ce.a;class be extends a.a.Component{constructor(){super(...arguments),this.state={questionsData:[],totalQuestionsList:[],showSubmitBtn:!0},this.handleAddOnsDataChange=(e,t)=>{const i=this.state.questionsData.map((i=>i.id===e?{...i,response:t}:i)),n=this.state.questionsData.map((i=>i.id===e?{id:e,response:t}:{id:i.id,response:i.response}));this.setState({questionsData:i}),this.props.handleQuestionsChange(n)}}componentDidMount(){const{totalQuestionsListError:e=!1,totalQuestionsList:t=[]}=this.props;e&&this.setState({showSubmitBtn:!1});const i=t.map((e=>({id:e.id,response:!1,display_text:e.display_text})),[]),n=t.map((e=>({id:e.id,response:!1})));this.setState({questionsData:i}),this.props.handleQuestionsChange(n)}render(){const{handleCloseAddOns:e=(()=>{}),handleSubmit:t=(()=>{}),totalQuestionsList:i,totalQuestionsListError:n=!1,totalQuestionsListMessage:a="",questionsListLoading:r}=this.props;return Object(P.jsxs)(P.Fragment,{children:[!!n&&!!a&&Object(P.jsx)(de.a,{message:this.props.intl.formatMessage({id:"Ada kesalahan di sistem kami, silahkan hubungi CS"}),type:"error"}),Object(P.jsx)(ne.a,{spinning:!!r,tip:"Loading...",children:Object(P.jsxs)(W,{className:!0,children:[Object(P.jsx)("div",{className:"addons-questions-list-ctn",children:i.map((e=>Object(P.jsx)(se,{data:e,handleAddOnsDataChange:this.handleAddOnsDataChange})))}),Object(P.jsx)("div",{className:"addons-submit-btn-ctn",children:Object(P.jsxs)(ae.default,{type:"flex",justify:"space-between",align:"middle",className:"action-btns",children:[Object(P.jsx)(re.a,{xs:11,children:Object(P.jsx)(oe.default,{type:"default",size:"large",onClick:()=>e(),children:Object(P.jsx)("div",{children:Object(P.jsx)(I.a,{id:"BATAL"})})})}),Object(P.jsx)(re.a,{xs:11,children:Object(P.jsx)(oe.default,{type:"primary",size:"large",className:"create-claim-button",disabled:!this.state.showSubmitBtn,onClick:()=>{t()},children:Object(P.jsx)(I.a,{id:"LANJUT"})})})]})})]})})]})}}be.defaultProps={questionsData:[]};var ue=Object(X.b)(((e,t)=>{var i,n;return{totalQuestionsList:t.totalQuestionsList||e.Claim.totalQuestionsList,totalQuestionsListError:null!==(i=t.totalQuestionsListError)&&void 0!==i?i:e.Error.GET_QUESTIONS_LIST,totalQuestionsListMessage:t.totalQuestionsListMessage||e.Claim.totalQuestionsListMessage,questionsListLoading:null!==(n=t.questionsListLoading)&&void 0!==n?n:e.Loading.GET_QUESTIONS_LIST}}),{getQuetionnaireList:le,resetReduxState:pe})(Object(H.c)(be)),he=i(993),xe=i(16),ge=i(1033);var fe=function(e){let{benefitList:t=[],onChange:i,selectedBenefit:a=[]}=e;const[r,o]=Object(n.useState)([]);return Object(P.jsx)(x,{children:t.map((e=>{const{benefit_group_id:t="",benefits:n=[],benefit_group_description:a}=e;return Object(P.jsxs)(h,{children:[Object(P.jsxs)(b,{children:[Object(P.jsx)(I.a,{id:a}),n.length>1?r.includes(t)?Object(P.jsx)("img",{onClick:()=>(e=>{const t=[...r].filter((t=>t!==e));o(t)})(t),src:d.b,width:16,height:16,className:"transform-360"}):Object(P.jsx)("img",{onClick:()=>(e=>{o([...r,e])})(t),src:d.b,width:16,height:16,className:"transform-180"}):null,n.length?null:Object(P.jsx)(ge.a,{onChange:t=>i(t,e),width:"20px",height:"20px",checkedPosition:{height:13,width:7,left:5,bottom:3,borderRadius:2},unCheckedBorderColor:p.a.monoChromeGrey,borderColor:p.a.white,checkedColor:p.a.tapPartnerBlue})]}),!r.includes(t)&&n.length?n.map((e=>{const{benefit_name:t="",description:n,is_active_config:a=!0}=e;return Object(P.jsxs)(m,{children:[Object(P.jsxs)(O,{children:[Object(P.jsx)(u,{children:Object(P.jsx)(I.a,{id:t})}),Object(P.jsx)(g,{children:Object(P.jsx)(I.a,{id:n})})]}),a?Object(P.jsx)("div",{children:Object(P.jsx)(ge.a,{onChange:t=>i(t,e),width:"20px",height:"20px",checkedPosition:{height:14,width:8,left:4,bottom:3,borderRadius:2},unCheckedBorderColor:p.a.monoChromeGrey,borderColor:p.a.white,checkedColor:p.a.tapPartnerBlue})}):null]},t)})):null]},a)}))})};const je=l.c.div`
    background: ${p.a.white};
    color: ${e=>e.disabled?p.a.monoChromeGrey:p.a.black};
    border-radius: 16px;
    width: 240px;
    height: 100px;

    border-radius: 16px;
    border: 1px solid ${p.a.white};
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 8px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`,me=(l.c.div`
    display: flex;
    padding: 16px 24px;
    align-items: center;
    gap: 8px;
    height: 50px;
    justify-content: space-between;
    background: ${p.a.grainyGrey};
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
`,l.c.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 16px 24px;
    height: 24px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background: var(--Monochrome-White, #FFF);
`,l.c.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 18px;
`),Oe=(l.c.div`

    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
    width: 100%;
`,l.c.div`
    text-align: right;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
    width: 100%;
`,l.c.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`,l.c.div`
    color: ${p.a.tapTapHeartRed};
    text-align: center;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    width: 240px;
    padding: 0px 16px;
`),Ae=l.c.div`

    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
`,ke=l.c.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;var ve=function(e){let{userTitle:t="title",userDetails:i=[],enabled:n=!0,disabledText:a="",onChange:o=(()=>{})}=e;const s=!n;return Object(P.jsxs)("div",{children:[Object(P.jsxs)(je,{disabled:s,children:[Object(P.jsxs)(ke,{children:[Object(P.jsx)(me,{children:t}),i.map((e=>{let{key:t,value:i}=e;return Object(P.jsxs)(Ae,{children:[Object(P.jsx)(I.a,{id:t}),"\xa0",Object(P.jsx)(I.a,{id:i})]})}))]}),s?null:Object(P.jsx)(ge.a,{width:"20px",height:"20px",checkedPosition:{height:13,width:7,left:5,bottom:3,borderRadius:2},checkedBoxLeftAllignment:"40px",checkedBoxTopAlignment:"6px",unCheckedBorderColor:p.a.monoChromeGrey,borderColor:p.a.white,checkedColor:p.a.tapPartnerBlue,onChange:o})]}),a?Object(P.jsx)(Oe,{children:Object(P.jsx)(r.a,{id:a})}):null]})};const ye=l.c.div`
        display: flex;
        gap: 16px;
        padding: 24px;
        flex-wrap: wrap;
        overflow: auto;
        max-height: 100%;
`;var we=i(61),Ce=i.n(we);var Be=function(e){let{userList:t,onChange:i=(()=>{})}=e;const[a,r]=Object(n.useState)([]);return Object(n.useEffect)((()=>{i(a)}),[i,a]),Object(P.jsx)(ye,{children:null===t||void 0===t?void 0:t.map((e=>{const{name:t,dob:i,is_eligible:n,participant_number:o,date_of_birth:s}=e,c=Ce()(i||s).format("DD/MM/YYYY"),d=[{key:Q.b.dateOfBirthShort,value:c}],l=n?"":Q.b.individualAmountTapTravelExceededCopyRight;return Object(P.jsx)(ve,{userTitle:t,enabled:n,onChange:e=>((e,t)=>{let{name:i,participantNo:n}=t;const o=e.target.checked;let s=[...a];o?s.push({name:i,participant_number:n}):s=s.filter((e=>{let{participant_number:t}=e;return n!==t})),r(s)})(e,{name:t,participantNo:o}),disabledText:l,userDetails:d},t)}))})};const _e=l.c.div`
    background: ${p.a.white};
    color: ${e=>e.disabled?p.a.monoChromeGrey:p.a.black};
    border-radius: 16px;
    width: 240px;
    height: 100px;

    border-radius: 16px;
    border: 1px solid ${p.a.white};
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 8px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`,Se=(l.c.div`
    display: flex;
    padding: 16px 24px;
    align-items: center;
    gap: 8px;
    height: 50px;
    justify-content: space-between;
    background: ${p.a.grainyGrey};
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
`,l.c.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 16px 24px;
    height: 24px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background: var(--Monochrome-White, #FFF);
`,l.c.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 18px;
`),Le=(l.c.div`

    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
    width: 100%;
`,l.c.div`
    text-align: right;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px; 
    width: 100%;
`,l.c.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`,l.c.div`
    color: ${p.a.tapTapHeartRed};
    text-align: center;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    width: 240px;
    padding: 0px 16px;
`),Te=l.c.div`

    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
`,$e=l.c.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;var De=function(e){let{userTitle:t="title",userDetails:i=[],enabled:n=!0,disabledText:a="",onChange:o=(()=>{})}=e;const s=!n;return Object(P.jsxs)("div",{children:[Object(P.jsxs)(_e,{disabled:s,children:[Object(P.jsxs)($e,{children:[Object(P.jsx)(Se,{children:t}),i.map((e=>{let{key:t,value:i}=e;return Object(P.jsxs)(Te,{children:[Object(P.jsx)(I.a,{id:t}),"\xa0",Object(P.jsx)(I.a,{id:i})]})}))]}),s?null:Object(P.jsx)(ge.a,{width:"20px",height:"20px",checkedPosition:{height:13,width:7,left:5,bottom:3,borderRadius:2},checkedBoxLeftAllignment:"40px",checkedBoxTopAlignment:"6px",unCheckedBorderColor:p.a.monoChromeGrey,borderColor:p.a.white,checkedColor:p.a.tapPartnerBlue,onChange:o})]}),a?Object(P.jsx)(Le,{children:Object(P.jsx)(r.a,{id:a})}):null]})};const Ee=l.c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  max-height: 100%;
  overflow: auto;
`,Fe=l.c.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,Me=l.c.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;var Ie=i(1042);var Qe=function(e){let{benefitId:t,applicationNo:i,internalId:a,onChange:r=(()=>{}),onRemainingTSIChange:o=(()=>{}),onHasTripCancellationBenefitChange:s=(()=>{})}=e;const{data:c,isLoading:l,isError:p}=((e,t)=>{let{benefit_id:i,application_no:n,internal_id:a}=e;return Object(Y.a)({queryKey:["asdp-travel-user-list",i,n],queryFn:()=>q.a.getAsdpEligibleUserList({benefit_id:i,application_no:n,internal_id:a}).then((e=>e.data.data)),enabled:!(!i||!n),...t})})({benefit_id:t,application_no:i,internal_id:a}),[b,u]=Object(n.useState)([]),[h,x]=Object(n.useState)(""),g=Object(n.useMemo)((()=>new Set(b.map((e=>e.participant_number)))),[b]);if(Object(n.useEffect)((()=>{r(b)}),[r,b]),Object(n.useEffect)((()=>{null!=(null===c||void 0===c?void 0:c.benefit_remaining_TSI)&&o(c.benefit_remaining_TSI),null!=(null===c||void 0===c?void 0:c.has_trip_cancellation_benefit)&&s(c.has_trip_cancellation_benefit)}),[c,o,s]),l)return Object(P.jsx)(Ie.a,{children:Object(P.jsx)(he.a,{})});if(p)return Object(P.jsxs)(S,{children:[Object(P.jsx)(L,{src:d.a}),Object(P.jsx)(T,{children:Object(P.jsx)(I.a,{id:Q.b.failedToLoadEligibleUsers})})]});const f=(null===c||void 0===c?void 0:c.users)||[],j=h.toLowerCase().trim(),m=j?f.filter((e=>{if(g.has(e.participant_number))return!0;const t=(e.name||"").toLowerCase(),i=(e.ticket_id||"").toLowerCase();return t.includes(j)||i.includes(j)})):f;return Object(P.jsxs)(Ee,{children:[Object(P.jsx)(Me,{type:"text",placeholder:"Search...",value:h,onChange:e=>x(e.target.value)}),Object(P.jsx)(Fe,{children:m.map((e=>{const{name:t,ticket_id:i,participant_number:n,is_eligible:a}=e,r=[{key:Q.b.ticketId,value:i}],o=a?"":Q.b.individualAmountTapTravelExceededCopyRight;return Object(P.jsx)(De,{userTitle:t,enabled:a,onChange:e=>((e,t)=>{let{name:i,ticketId:n,participant_number:a}=t;const r=e.target.checked;let o=[...b];r?o.push({name:i,participant_number:a}):o=o.filter((e=>{let{participant_number:t}=e;return a!==t})),u(o)})(e,{name:t,ticketId:i,participant_number:n}),disabledText:o,userDetails:r},i)}))})]})},Pe=i(203);var Re=function(e){let{isAgency:t,closeBenefitModalPolicyList:i,benefitQueryParams:a}=e;const{product:c,partner:l,internalId:b,applicationNo:u,packageCode:h,isFamilyPolicy:x,isAsdpFerryTravelPolicy:g,insuranceprovider:f,additionalProtection:j=[]}=a,m=Object(o.g)(),O=Object(Pe.a)(),{data:X,isError:H,error:W,isLoading:J,isSuccess:Z}=Object(U.a)({packageCode:h,product:c,partner:l,insuranceProvider:f,isAgency:t}),ee=Array.isArray(j)&&j.length?j.map((e=>{let{id:t}=e;return t})):[],{data:te=[],isLoading:ie,isError:ne}=Object(U.b)({addonIds:ee,enabled:ee.length>0}),ae=Object(z.a)({mutationKey:["validate-claim"],mutationFn:async e=>{let{isAgency:t,...i}=e;if(t){const e=`benefit_id=${i.benefit_id}&internal_id=${i.internal_id}`,t=await N.a.validateAgentClaim({query:e});return V(t)}const n=await q.a.validateClaimUrl({payload:i});return V(n)}}),re=Object(z.a)({mutationKey:["create-claim"],mutationFn:async e=>{let{isAgency:t,...i}=e;if(t){const e=await N.a.createAgencyClaim({payload:i});return Object(G.a)(e,[201]).claim_id}const n=await q.a.postClaim({payload:i});return Object(G.a)(n,[201]).claim_id}}),oe=Object(z.a)({mutationKey:["family-create-claim"],mutationFn:async e=>{const t=await q.a.postFamilyCreateClaims(e);return Object(G.a)(t,[200,201]).claim_id}}),se=(null===X||void 0===X?void 0:X.benefitList)||[],ce=(null===X||void 0===X?void 0:X.isMultiBenefitClaimable)||!1,de=(null===W||void 0===W?void 0:W.message)||(null===X||void 0===X?void 0:X.message)||"Maaf, kami tidak dapat menampilkan benefit anda",[le,pe]=Object(n.useState)(null),[be,ge]=Object(n.useState)(""),[je,me]=Object(n.useState)(K.v.loading),[Oe,Ae]=Object(n.useState)([]),[ke,ve]=Object(n.useState)([]),[ye,we]=Object(n.useState)([]),[Ce,_e]=Object(n.useState)(0),[Se,Le]=Object(n.useState)(!1),Te=Object(n.useRef)(null),$e=null===le||void 0===le?void 0:le.benefit_id,{data:De,isLoading:Ee,isError:Fe}=function(e){let{benefit_id:t,application_no:i,internal_id:n}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(Y.a)({queryKey:["family-eligible-users",t,i,n],queryFn:async()=>{var e,a;const r=await q.a.getFamilyEligibleUserList({benefit_id:t,application_no:i,internal_id:n}),o=Object(G.a)(r,[200,201]);return{userList:(null===(e=o.data)||void 0===e?void 0:e.users)||[],benefitRemainingTSI:(null===o||void 0===o||null===(a=o.data)||void 0===a?void 0:a.benefit_remaining_TSI)||0}},enabled:!(!t||!i),...a})}({benefit_id:$e,application_no:u,internal_id:b},{enabled:!(!x||!$e)}),Me=(null===De||void 0===De?void 0:De.userList)||[],Re=(null===De||void 0===De?void 0:De.benefitRemainingTSI)||0,Ue=Object(n.useCallback)((()=>{ge(""),Ae([]),pe(null),Le(!1),Te.current=null,me(K.v.loading),ae.reset(),re.reset(),oe.reset()}),[ae,re,oe]);Object(n.useEffect)((()=>()=>{ae.reset(),re.reset(),oe.reset()}),[]),Object(n.useEffect)((()=>{if(!J)if(H)me(K.v.errorBenefitMessage);else if(Z){if(se.length)return ce?(pe([]),void me(K.v.multiBenefitList)):void me(K.v.singleBenefitList);me(K.v.errorBenefitMessage)}}),[J,H,Z,se,ce]);const ze=Object(n.useCallback)((()=>{i(),Ue()}),[i,Ue]),qe=Object(n.useCallback)(((e,t)=>{e.stopPropagation(),pe(t)}),[]),Ne=Object(n.useCallback)(((e,t)=>{e.stopPropagation();const i=e.target.checked;pe((e=>{let n=[...e||[]];return n=i?[...n,t]:n.filter((e=>{let{benefit_id:i}=e;return i!==t.benefit_id})),n}))}),[]),Ge=Object(n.useCallback)((function(e){var i;const n=null!==(i=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAgency)&&void 0!==i?i:t,a=!!e.insured_list&&!n;(a?oe:re).mutate(a?e:{isAgency:n,...e},{onSuccess:e=>{m.push(`/claimdetail/${e}`)},onError:e=>{me(K.v.validateOrCreateClaimMessage),ge(e.message)}})}),[re,oe,m,t]),Ve=Object(n.useCallback)((()=>{if(!le)return;if(me(K.v.loading),!ce){const{benefit_id:e}=le;return void Ge({benefitId:e,benefit_id:e,applicationNo:u,questionData:Oe,source:"direct",internal_id:b,application_no:u})}if(!le.length)return;const e=le.map((e=>{let{benefit_id:t}=e;return t}));Ge({benefitId:e,benefit_id:e,applicationNo:u,questionData:Oe,source:"direct",internal_id:b,application_no:u})}),[le,ce,Ge,u,Oe,b]),Ye=Object(n.useCallback)((()=>{me(K.v.loading);const e={benefit_id:le.benefit_id,benefitId:le.benefit_id,application_no:u,questionData:Oe,source:"direct",insured_list:[],internal_id:b,has_trip_cancellation_benefit:!0};t?Ge(e,{isAgency:!0}):Ge(e)}),[le,u,Oe,b,t,Ge]),Ke=Object(n.useCallback)((e=>{const{claim_id:t=null,is_claimable:i=!1,is_first_claim:n=!1,error_message:a}=e;if(i&&!n)return me(K.v.secondClaimOnSameBenefit),void ge(a);if(t)m.push(`/claimdetail/${t}`);else if(i){if(n){if("asdpTripCancellation"===Te.current)return Te.current=null,void Ye();Ve()}}else me(K.v.validateOrCreateClaimMessage)}),[Ye,Ve,m]),Xe=Object(n.useCallback)((()=>{if(!le)return;let e;if(ce){if(!le.length)return;e={benefit_id:le.map((e=>{let{benefit_id:t}=e;return t})).join(","),application_no:u,internal_id:b,product_key:c,package_code:h}}else{const{benefit_id:t}=le;e={benefit_id:t,application_no:u,internal_id:b,product_key:c,package_code:h}}ae.mutate({isAgency:t,...e},{onSuccess:Ke,onError:e=>{me(K.v.validateOrCreateClaimMessage),ge(e.message)}})}),[le,ce,u,b,c,h,t,ae,Ke]),He=Object(n.useCallback)((e=>{if(e.stopPropagation(),x)me(K.v.tapTravelUserList);else{if(g)return Object(xe.g)(le)?(Te.current="asdpTripCancellation",me(K.v.loading),void Xe()):void me(K.v.asdpTravelUserList);me(K.v.loading),Xe()}}),[x,g,le,Xe]),We=Object(n.useCallback)((e=>{e.stopPropagation(),me(K.v.addOnQuestionList)}),[]),Je=Object(n.useCallback)((e=>{Ae(e)}),[]),Ze=Object(n.useCallback)((()=>{me(K.v.loading),Xe()}),[Xe]),et=Object(n.useCallback)((()=>{ze()}),[ze]),tt=Object(n.useCallback)((e=>{e.stopPropagation(),me(K.v.loading);let i=null;i=Array.isArray(le)?le.map((e=>{let{benefit_id:t}=e;return t})):le.benefit_id;const n={benefit_id:i,benefitId:i,application_no:u,questionData:Oe,source:"direct",insured_list:ke,internal_id:b};t?Ge(n,{isAgency:!0}):Ge(n)}),[le,u,Oe,ke,b,t,Ge]),it=Object(n.useCallback)((()=>{me(K.v.tsiInfoBanner)}),[]),nt=Object(n.useCallback)((e=>{ve(e)}),[]),at=Object(n.useCallback)((e=>{e.stopPropagation(),me(K.v.loading);const i={benefit_id:le.benefit_id,benefitId:le.benefit_id,application_no:u,questionData:Oe,source:"direct",insured_list:ye,internal_id:b,has_trip_cancellation_benefit:Se};t?Ge(i,{isAgency:!0}):Ge(i)}),[le,u,Oe,ye,b,Se,t,Ge]),rt=Object(n.useCallback)((e=>{we(e)}),[]),ot=Object(n.useCallback)((e=>{Le(e),e&&me(K.v.tsiInfoBanner)}),[]),st=ce?null===le||void 0===le?void 0:le.length:!le,ct=O?Object(P.jsxs)(B,{children:[Object(P.jsx)(_,{onClick:ze,backgound:p.a.white,color:p.a.tapPartnerBlue,children:Object(P.jsx)(r.a,{id:Q.b.cancel})}),Array.isArray(j)&&j.length?Object(P.jsx)(_,{disabled:st,onClick:We,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.next})}):Object(P.jsx)(_,{disabled:st,onClick:He,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.continue})})]}):Object(P.jsxs)(A,{children:[Object(P.jsx)(v,{children:Object(P.jsx)(r.a,{id:Q.b.noBenefitCopyRight})}),Object(P.jsxs)(C,{children:[Object(P.jsx)(k,{onClick:ze,backgound:p.a.white,color:p.a.tapPartnerBlue,children:Object(P.jsx)(r.a,{id:Q.b.cancel})}),Array.isArray(j)&&j.length?Object(P.jsx)(k,{disabled:st,onClick:We,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.next})}):Object(P.jsx)(k,{disabled:st,onClick:He,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.continue})})]})]}),dt=Object(P.jsx)(A,{children:Object(P.jsxs)(C,{children:[Object(P.jsx)(k,{onClick:ze,backgound:p.a.white,color:p.a.tapPartnerBlue,children:Object(P.jsx)(r.a,{id:Q.b.cancel})}),Object(P.jsx)(k,{disabled:!ye.length,onClick:it,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.continue})})]})}),lt=Object(P.jsx)(A,{children:Object(P.jsxs)(C,{children:[Object(P.jsx)(k,{onClick:ze,backgound:p.a.white,color:p.a.tapPartnerBlue,children:Object(P.jsx)(r.a,{id:Q.b.cancel})}),Object(P.jsx)(k,{disabled:!ke.length,onClick:it,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.continue})})]})}),pt=[K.v.loading,K.v.singleBenefitList,K.v.multiBenefitList,K.v.errorBenefitMessage],bt=[K.v.asdpTravelUserList,K.v.tapTravelUserList],ut=pt.includes(je)||!le?Object(P.jsx)(I.a,{id:Q.b.selectBenefitModalText}):bt.includes(je)?Object(P.jsx)(I.a,{id:Q.b.selectUserListHeader}):Object(P.jsx)(I.a,{id:null===le||void 0===le?void 0:le.benefit_name}),ht=()=>{switch(je){case K.v.loading:return Object(P.jsx)(w,{children:Object(P.jsx)(he.a,{})});case K.v.singleBenefitList:return Object(P.jsxs)("div",{children:[Object(P.jsxs)(y,{children:[Object(P.jsx)(R,{benefitList:se,onChange:qe}),O&&Object(P.jsx)(v,{children:Object(P.jsx)(r.a,{id:Q.b.noBenefitCopyRight})})]}),ct]});case K.v.multiBenefitList:return Object(P.jsxs)("div",{children:[Object(P.jsx)(y,{children:Object(P.jsx)(fe,{benefitList:se,selectedBenefit:le,onChange:Ne})}),ct]});case K.v.addOnQuestionList:return Object(P.jsx)(ue,{handleSubmit:Ze,handleCloseAddOns:et,handleQuestionsChange:Je,totalQuestionsList:te,totalQuestionsListError:ne,questionsListLoading:ie});case K.v.validateOrCreateClaimMessage:return Object(P.jsxs)(S,{children:[Object(P.jsx)(L,{src:d.a}),Object(P.jsx)(T,{children:Object(P.jsx)(I.a,{id:be})}),Object(P.jsxs)($,{children:[Object(P.jsx)(I.a,{id:Q.b.cannotSubmitClaimForBenefit}),Object(P.jsx)(D,{children:Object(P.jsx)(I.a,{id:null===le||void 0===le?void 0:le.benefit_name})})]}),Object(P.jsx)(E,{children:Object(P.jsx)(I.a,{id:Q.b.customerReachOutcomeDetailsBenefitText})}),Object(P.jsx)(F,{onClick:ze,children:Object(P.jsx)(I.a,{id:Q.b.close})})]});case K.v.errorBenefitMessage:return Object(P.jsx)(Ie.a,{children:Object(P.jsx)(T,{children:Object(P.jsx)(I.a,{id:de})})});case K.v.tapTravelUserList:return Fe&&0===Me.length?Object(P.jsx)(Ie.a,{children:Object(P.jsx)(T,{children:Object(P.jsx)(I.a,{id:"Ada kesalahan di sistem kami, silahkan hubungi CS"})})}):Ee?Object(P.jsx)(Ie.a,{children:Object(P.jsx)(he.a,{})}):Object(P.jsxs)(y,{children:[Object(P.jsx)(Be,{userList:Me,onChange:nt}),lt]});case K.v.asdpTravelUserList:return Object(P.jsxs)(y,{children:[Object(P.jsx)(Qe,{benefitId:null===le||void 0===le?void 0:le.benefit_id,applicationNo:u,internalId:b,onChange:rt,onRemainingTSIChange:_e,onHasTripCancellationBenefitChange:ot}),dt]});case K.v.tsiInfoBanner:{const e=g?Ce:Re,t=Object(xe.b)(e,"Rp");return Object(P.jsx)(y,{children:Object(P.jsxs)(S,{children:[Object(P.jsx)(L,{src:d.p}),Object(P.jsx)(T,{color:p.a.tapPartnerBlue,children:Object(P.jsx)(I.a,{id:Q.b.totalRemainingValueLeft,values:{amount:t}})}),Object(P.jsxs)($,{children:[Object(P.jsx)(I.a,{id:Q.b.pleaseNoteThatTheMaximumClaimPaymentIsForBenefits}),Object(P.jsx)(D,{children:Object(P.jsx)(I.a,{id:null===le||void 0===le?void 0:le.benefit_name})}),Object(P.jsx)(I.a,{id:Q.b.isWorthIDR,values:{amount:t}})]}),Object(P.jsx)(E,{children:Object(P.jsx)(I.a,{id:Q.b.customerReachOutcomeDetailsBenefitText})}),Object(P.jsx)(F,{onClick:g?at:tt,children:Object(P.jsx)(I.a,{id:Q.b.longContinueText})})]})})}case K.v.secondClaimOnSameBenefit:return Object(P.jsxs)(M,{children:[Object(P.jsxs)(S,{children:[Object(P.jsx)(L,{src:d.p}),Object(P.jsx)($,{color:p.a.black,children:Object(P.jsx)(I.a,{id:be})})]}),Object(P.jsx)(A,{children:Object(P.jsxs)(C,{children:[Object(P.jsx)(k,{onClick:ze,backgound:p.a.white,color:p.a.tapPartnerBlue,children:Object(P.jsx)(r.a,{id:Q.b.cancel})}),Object(P.jsx)(k,{onClick:Ve,backgound:p.a.tapPartnerBlue,color:p.a.white,children:Object(P.jsx)(r.a,{id:Q.b.continue})})]})})]});default:return null}};return O?Object(P.jsx)(s.a,{isMobile:!0,width:"100vw",closeModal:ze,headerText:ut,footer:Object(P.jsx)(P.Fragment,{}),markupText:ht(),modalBodyStyle:{display:"block",paddingBottom:0,background:p.a.almostWhite},headerBackgroundColor:Object(xe.c)().headerBackgroundColor||"",headerTextColor:Object(xe.c)().headerTextColor||""}):Object(P.jsx)(s.a,{width:"800px",closeModal:ze,headerText:ut,footer:Object(P.jsx)(P.Fragment,{}),markupText:ht(),modalBodyStyle:{display:"block",paddingBottom:0,background:p.a.almostWhite},headerBackgroundColor:Object(xe.c)().headerBackgroundColor||"",headerTextColor:Object(xe.c)().headerTextColor||""})}},993:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(30);const a=i(11).c.div`
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

`;var r=i(2);var o=function(){return Object(r.jsx)(a,{"data-testid":"loader",children:Object(r.jsx)("img",{src:n.s})})}}}]);
//# sourceMappingURL=9.a4e5e4e7.chunk.js.map