(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[63],{1432:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i(11);const a=o.c.div`
    width: 66.9%;
    margin: 0 auto;
    .orderId{
        margin: 32px 0 32px 0;
        font-size: 32px;
        line-height: 36px;
        color: #333333;
    }
    .detailSection1{
        .header{
            font-weight: 800;
            font-size: 24px;
            line-height: 28px;
            color: #333333;
            margin-bottom: 24px;
        }
        .pdfParent{
            display: flex;
            justify-content: space-between;

        }
    }

    .detailSection2{
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
    }
    .horizontal-bar{
        width: 100%;
        height: 4px;
        background-color: #eeeeee;
        margin: 24px 0;
    }

  @media (min-width: 320px) and (max-width: 667px) {
    width: 91.1%;
    margin: 0 auto;
    .orderId{
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #333333;
        color: white;
        border-radius: 8px;
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
        margin-top: 64px;
        margin-bottom: 16px;
    }
    .detailSection1{
        margin-bottom: 16px;
        .header{
            font-size: 14px;
            line-height: 18px;
            font-weight: 800;
            margin-bottom: 8px;
        }
        .pdfParent{
            flex-direction: column;
            gap: 16px;
        }
    }
    .detailSection2{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        gap: 8px;
    }
    .horizontal-bar{
        margin: 16px 0;
    }
  }
`,c=o.c.div`
   width: 48.13%;
   p,div{
    margin: 0;
    padding: 0;
   }
   .titleSec{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #666666;
        }
        .downloadSec{
            font-weight: 900;
            font-size: 12px;
            line-height: 16px;
            color: #009B90;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            img{
                width: 16px;
                height: 16px;
            }
        }
   }
   .Viwer{
        height: 160px;
        border: 1px solid #333333;
        border-radius: 16px;
        margin-top: 16px;
   }

  @media (min-width: 320px) and (max-width: 667px) {
    width: 100%;
    .titleSec{
        .title{
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
        }
        .downloadSec{
            font-weight: 500;
            img{
                width: 12px;
                height: 12px;
            }
        }
    }
    .Viwer{
        margin-top: 8px;
        height: 120px;
    }
  }
`;var s=i(2);var d=function(e){let{header:t,type:i,url:n}=e;return Object(s.jsxs)(c,{children:[Object(s.jsxs)("div",{className:"titleSec",children:[Object(s.jsx)("p",{className:"title",children:t}),Object(s.jsxs)("a",{onClick:()=>{"pdf"===i?window.open(n,"_blank","noreferrer"):fetch(n).then((e=>e.blob())).then((e=>{const t=n.match(/\/([^/]+\.png)$/)[1],o=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=o,a.setAttribute("download",t||i),document.body.appendChild(a),a.click(),document.body.removeChild(a)})).catch((e=>console.error("Error downloading image:",e)))},className:"downloadSec",children:[Object(s.jsx)("p",{children:"DOWNLOAD"}),Object(s.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/Download.png"})]})]}),Object(s.jsx)("div",{className:"Viwer",children:"pdf"===i?Object(s.jsx)("iframe",{src:n,title:"PDF Viewer",style:{width:"100%",height:"100%",borderRadius:"16px"},children:Object(s.jsx)("p",{children:"Failed to load PDF"})}):Object(s.jsx)("img",{src:n,style:{width:"100%",height:"100%",borderRadius:"16px"}})})]})};const r=o.c.div`
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    .logo{
        width: ${e=>"1"===e.type?"56px":"48px"};
        height: ${e=>"1"===e.type?"56px":"48px"};
    }
    .detail{
        .title{
            color: #666666;
            font-size: ${e=>"1"===e.type?"14px":"12px"};
            line-height: ${e=>"1"===e.type?"16px":"18px"};
        }
        .amount{
            font-weight: 800;
            color: #333333;
            font-size: ${e=>"1"===e.type?"18px":"14px"};
            line-height: ${e=>"1"===e.type?"22px":"18px"};
        }
    }
    p,div{
        margin: 0;
        padding: 0;
   }

  @media (min-width: 320px) and (max-width: 667px) {
    gap: 8px;
    .logo{
        width: 32px;
        height: 32px;
    }
    .detail{
        .title{
            font-weight: 600;
            font-size: 10px;
            line-height: 12px;
        }
        .amount{
            font-family: 800;
            font-size: 12px;
            line-height: 16px;
        }
    }
  }
`;var l=function(e){let{type:t,title:i,amount:n}=e;return Object(s.jsxs)(r,{type:t,children:[Object(s.jsx)("img",{className:"logo",src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/Rupyaa.png"}),Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsx)("p",{className:"title",children:i}),Object(s.jsx)("p",{className:"amount",children:n})]})]})},p=i(61),h=i.n(p),x=i(16);var m=function(e){const{requestData:t,appNo:i}=e,n=e=>{if(e)return e.toLowerCase().endsWith(".pdf")};return Object(s.jsxs)(a,{children:[Object(s.jsxs)("div",{className:"orderId",children:["Order ID : ",i]}),Object(s.jsxs)("div",{className:"detailSection1",children:[Object(s.jsx)("div",{className:"header",children:"Data Pengajuan"}),Object(s.jsxs)("div",{className:"pdfParent",children:[Object(s.jsx)(d,{type:n(null===t||void 0===t?void 0:t.insurance_form_url)?"pdf":"image",url:null===t||void 0===t?void 0:t.insurance_form_url,header:"Sequis Form"}),Object(s.jsx)(d,{type:n(null===t||void 0===t?void 0:t.riplay_form_url)?"pdf":"image",url:null===t||void 0===t?void 0:t.riplay_form_url,header:"Riplay Personal"})]})]}),Object(s.jsxs)("div",{className:"detailSection2",children:[Object(s.jsx)(l,{type:"1",title:"Loan Amount",amount:Object(x.b)(null===t||void 0===t?void 0:t.amount,"Rp")}),Object(s.jsx)(l,{type:"1",title:"Premium",amount:Object(x.b)(null===t||void 0===t?void 0:t.premium,"Rp")}),Object(s.jsx)(l,{type:"1",title:"Start Date",amount:h()(null===t||void 0===t?void 0:t.start_date).format("DD MMMM YYYY")}),Object(s.jsx)(l,{type:"1",title:"End Date",amount:h()(null===t||void 0===t?void 0:t.end_date).format("DD MMMM YYYY")})]}),Object(s.jsx)("div",{className:"horizontal-bar"}),Object(s.jsxs)("div",{className:"detailSection1",children:[Object(s.jsx)("div",{className:"header",children:"Data Pribadi"}),Object(s.jsxs)("div",{className:"pdfParent",children:[Object(s.jsx)(d,{type:n(null===t||void 0===t?void 0:t.ktp_url)?"pdf":"image",url:null===t||void 0===t?void 0:t.ktp_url,header:"Photo ID / KTP"}),Object(s.jsx)(d,{type:n(null===t||void 0===t?void 0:t.npwp_url)?"pdf":"image",url:null===t||void 0===t?void 0:t.npwp_url,header:"Photo NPWP (optional)"})]})]}),Object(s.jsxs)("div",{className:"detailSection2",children:[Object(s.jsx)(l,{type:"2",title:"ID Number",amount:null===t||void 0===t?void 0:t.identity_no}),Object(s.jsx)(l,{type:"2",title:"Full Name",amount:null===t||void 0===t?void 0:t.name}),Object(s.jsx)(l,{type:"2",title:"Date of Birth",amount:h()(null===t||void 0===t?void 0:t.dob).format("DD MMMM YYYY")}),Object(s.jsx)(l,{type:"2",title:"Phone Number",amount:null===t||void 0===t?void 0:t.phone_no}),Object(s.jsx)(l,{type:"2",title:"Email",amount:null===t||void 0===t?void 0:t.email})]})]})};const u=o.c.div`
   p,div{
        margin: 0;
        padding: 0;
   }
    padding: 32px 0;
    margin-top: 64px;
    background-color: #f5f5f5;
    box-sizing: border-box;
   .container{
        width: 66.7%;
        margin: 0 auto;
        height: 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333333;
        font-size: 16px;
        line-height: 20px;
        .lowText{
            font-weight: 400;
        }
        .boldText{
            font-weight: 800;
        }
        .bottonContainer{
            display: flex;
            justify-content: center;
            gap: 32px;
            .button{
                width: 160px;
                height: 40px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 900;
                font-size: 14px;
                line-height: 16px;
                color: white;
                cursor: pointer;
            }
            .cancel{
                background: #DC0000;
            }
            .accept{
                background: #009632;
            }
        }

   }
   

  @media (min-width: 320px) and (max-width: 667px) {
    padding: 16px !important;
    margin-top: 32px;
    box-sizing: border-box;
    height: fit-content !important;
    .container{
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 16px;
        font-size: 12px;
        line-height: 20px;
        .bottonContainer{
            width: 100%;
            justify-content: space-between;
            margin-top: 8px;
            padding-bottom: 16px;
            .button{
                width: 156px;
                height: 32px;
                font-size: 10px;
                line-height: 12px;
            }
        }
    }
  }
`;var b=function(e){const{changeModal:t,requestData:i}=e;return Object(s.jsx)(u,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"lowText",children:"Please confirm this application before : "}),Object(s.jsx)("span",{className:"boldText",children:h()(null===i||void 0===i?void 0:i.request_created_time).format("DD MMMM YYYY, hh:mm:ss")})]}),Object(s.jsxs)("div",{className:"bottonContainer",children:[Object(s.jsx)("div",{onClick:()=>{t("reject")},className:"button cancel",children:"REJECT"}),Object(s.jsx)("div",{onClick:()=>{t("accept")},className:"button accept",children:"APPROVE"})]})]})})};const g=o.c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  animation: fadeIn .2s ease-in;

  .main-model{
    position: absolute;
    width: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 32px;
    border-radius: 16px;
    background-color: white;
  }
  @media (min-width: 320px) and (max-width: 667px) {
    .main-model{
      width: 100%;
      top: auto;
      left: 0;
      bottom: 0;
      transform: translate(0, 0);
      padding: 16px;
      overflow-y: scroll;
      height: fit-content;
    }
  }
`,j=o.c.div`
  * {
    box-sizing: border-box;
  }
  p,
  div {
    padding: 0;
    margin: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    .centerImg {
      width: 80px;
      height: 80px;
    }
    .textContainer {
      margin-top: 24px;
      .header {
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
      }
    }
    .subHeader {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: #333333;
    }
    .label-input {
      margin-top: 8px;
      width: 100%;
      padding: 16px 16px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid #111;
      box-shadow: 0px 8px 8px 0px #00000005;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    .uploadSection {
      margin-top: 8px;
      width: 100%;
      .uploadImg {
        height: 160px;
        width: 100%;
        border-radius: 8px;
        margin-top: 4px;
        cursor: pointer;
        object-fit: contain;
      }
    }
    .buttonSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      width: 100%;
    }
    .horizontalBar {
      width: 100%;
      height: 1px;
      background-color: #eeeeee;
      margin: 16px 0;
    }
  }
  @media (min-width: 320px) and (max-width: 667px) {
    .content {
      .centerImg {
        width: 64px;
        height: 64px;
      }
      .textContainer {
        margin: 8px auto;
        .header {
          font-weight: 800;
          font-size: 14px;
          line-height: 18px;
        }
        .subHeader {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
`,f=o.c.div`
  p,
  div {
    padding: 0;
    margin: 0;
  }
  width: 176px;
  height: 40px;
  border-radius: 8px;
  background-color: ${e=>"cancel"===e.type?"#333333":"accept"===e.type?"#009632":"#DC0000"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 667px) {
    width: 148px;
    height: 32px;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
  }
`,w=o.c.div`
  width: 100%;
  p,
  div {
    padding: 0;
    margin: 0;
  }
  & {
    box-sizing: border-box;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e=>e.checked?"80px":"0px"};
    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #333333;
      text-align: center;
    }
  }
  .inputContainer {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 12px;
    box-sizing: border-box;

    .input {
      height: 56px;
      width: 100%;
      outline: none;
      border: none;
      padding: 0 16px;
      font-weight: 800;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 16px;
      border-radius: 12px;
    }
    .greyInput {
      background-color: #eeeeee;
      color: #999999;
    }
    .checkedInputContainer {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      height: 56px;
      width: 100%;
      border: none;
    }
    .input1 {
      width: 50%;
      height: 100%;
      border-radius: 12px 0 0 12px;
    }
    .whiteBG {
      background-color: white;
      color: #333333;
    }
    .input2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      border-radius: 0 12px 12px 0;
      border: 2px solid #eeeeee;
      input {
        width: 80%;
        height: 100%;
        outline: none;
        border: none;
      }
      p {
        margin-top: 2px;
      }
      width: 50%;
      height: 100%;
    }
    .input3 {
      padding: 0 16px;
      font-weight: 800;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
    }
  }
  .checkbox-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    text-align: center;
    margin-top: 8px;
    p {
      margin-bottom: 4px;
    }
  }
  @media (min-width: 320px) and (max-width: 667px) {
    .header {
      .text {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`,v=o.c.input`
  /* Hide the default checkbox */
  opacity: 0;
  width: 0;
  height: 0;

  /* Define the custom checkbox appearance */
  + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }

  /* Define the styles for the checked state */
  &:checked + label {
    background-color: white;
    border: 2px solid black;
  }

  /* Create a pseudo-element for the checkmark */
  &:checked + label::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
  }
`;var O=function(e){const{type:t,changeModal:i,handleUpload:o,requestData:a,endorsementData:c,handleSubmit:d,uploadedUrl:r}=e,[l,p]=Object(n.useState)(!1),[h,x]=Object(n.useState)(""),m=Object(n.useRef)(null);return Object(n.useEffect)((()=>{l?m.current.focus():x("")}),[l]),t?Object(s.jsx)(j,{children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("img",{className:"centerImg",src:"accept"===t?"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/GreenTick.png":"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/Cross.png"}),Object(s.jsxs)("div",{className:"textContainer",children:[Object(s.jsx)("p",{className:"header",children:"accept"===t?"Approve this application?":"Reject this application?"}),"accept"===t?Object(s.jsxs)("p",{className:"subHeader",children:["You can approve this application with or ",Object(s.jsx)("br",{})," without adjusting the premium."]}):Object(s.jsx)("p",{className:"subHeader",children:"Are you sure you want to reject this application?"})]}),"accept"===t&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"horizontalBar"}),Object(s.jsxs)(w,{checked:l,children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("p",{className:"text",children:"Current Premium"}),l&&Object(s.jsx)("p",{className:"text",children:"New Premium"})]}),Object(s.jsx)("div",{className:"inputContainer",children:l?Object(s.jsxs)("div",{className:"checkedInputContainer",children:[Object(s.jsxs)("div",{className:"greyInput input1 input3",children:["IDR"," ",null!==c&&void 0!==c&&c.premium?c.premium:null===a||void 0===a?void 0:a.premium]}),Object(s.jsxs)("div",{className:"input2 whiteBG input3",children:[Object(s.jsx)("p",{children:"IDR"}),Object(s.jsx)("input",{ref:m,value:h,onChange:e=>{x(e.target.value)}})]})]}):Object(s.jsxs)("div",{className:"input greyInput",children:["IDR"," ",null!==c&&void 0!==c&&c.premium?c.premium:null===a||void 0===a?void 0:a.premium]})}),Object(s.jsxs)("div",{className:"checkbox-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(v,{onChange:()=>{p(!l)},type:"checkbox",id:"customCheckbox",checked:l}),Object(s.jsx)("label",{htmlFor:"customCheckbox"})]}),Object(s.jsx)("p",{children:"Adjust Premium"})]})]})]}),Object(s.jsx)("div",{className:"horizontalBar"}),Object(s.jsxs)("div",{className:"uploadSection",children:[Object(s.jsx)("p",{className:"subHeader",children:"Approval Document"}),Object(s.jsxs)("label",{class:"label-input",onChange:o,htmlFor:"input-file",children:[Object(s.jsx)("input",{name:"input-file",type:"file",id:"input-file",hidden:!0}),Object(s.jsx)("p",{children:r.slice(-35)}),Object(s.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/upload-small.svg"})]})]}),Object(s.jsxs)("div",{className:"buttonSection",children:[Object(s.jsx)(f,{onClick:e=>{e.stopPropagation(),i(null)},type:"cancel",children:"CANCEL"}),Object(s.jsx)(f,{onClick:()=>d(t,h,r),type:t,children:"accept"===t?"APPROVE":"REJECT"})]})]})}):null};const y=o.c.div`
  * {
    box-sizing: border-box;
  }
  p,
  div {
    padding: 0;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  .bannerImg {
    width: 160px;
    height: 160px;
  }
  .textContainer {
    .title {
      text-align: center;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
      color: ${e=>"accepted"===e.type?"#009632":"#DC0000"};
      margin-bottom: 8px;
    }
    .subtext1 {
      font-size: 14px;
      line-height: 22px;
      text-align: center;
    }
    .subtext2 {
      font-weight: 800;
    }
  }
`;var N=function(e){let{type:t,changeModal:i,handleUpload:n}=e;return t?Object(s.jsxs)(y,{type:t,children:[Object(s.jsx)("img",{className:"bannerImg",src:"accepted"===t?"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/approved.png":"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/Rejected.png"}),Object(s.jsxs)("div",{className:"textContainer",children:[Object(s.jsx)("p",{className:"title",children:"accepted"===t?"APPROVED":"REJECTED"}),Object(s.jsx)("p",{className:"subtext1",children:`This application has been ${"accepted"===t?"approved":"rejected"} at`}),Object(s.jsx)("p",{className:"subtext1 subtext2",children:h()().format("DD MMMM YYYY, hh:mm:ss")})]})]}):null};const D=o.c.div`
  * {
    box-sizing: border-box;
  }
  p,
  div {
    padding: 0;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: 100%;
  .bannerImg {
    width: 80px;
    height: 80px;
  }
  .textContainer {
    .title {
      text-align: center;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
      color: #111;
      margin-bottom: 8px;
    }
    .subtext1 {
      font-size: 14px;
      line-height: 22px;
      text-align: center;
    }
    .subtext2 {
      font-weight: 800;
    }
  }
  .buttonSection {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 16px;
    width: 100%;
    height: 100%;
  }
`,E=o.c.div`
  p,
  div {
    padding: 0;
    margin: 0;
  }
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: ${e=>"cancel"===e.type?"#333333":"accept"===e.type?"#009632":"#DC0000"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 667px) {
    width: 100%;
    height: 32px;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
  }
`;var z=function(e){let{type:t,changeModal:i,handleUpload:n}=e;return t?Object(s.jsxs)(D,{type:t,children:[Object(s.jsx)("img",{className:"bannerImg",src:"failed"===t?"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/sad.svg":"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Icons/timesand.svg"}),Object(s.jsxs)("div",{className:"textContainer",children:[Object(s.jsx)("p",{className:"title",children:"failed"===t?"Failed to Process":"Processing..."}),Object(s.jsx)("p",{className:"subtext1",children:"failed"===t?"We apologize that we were unable to process this due to an error. Please try again. Thank you.":"Please wait and don\u2019t close this page until our system complete the processing your data and document."}),"failed"===t&&Object(s.jsx)("div",{className:"buttonSection",children:Object(s.jsx)(E,{onClick:e=>{e.stopPropagation(),i(null)},type:"cancel",children:"BACK"})})]})]}):null};var k=function(e){const{show:t,changeModal:i,handleUpload:n,requestData:o,endorsementData:a,handleSubmit:c,uploadedUrl:d}=e;return t?Object(s.jsx)(g,{onClick:()=>{i(null)},children:Object(s.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:"main-model",children:[("accept"===t||"reject"===t)&&Object(s.jsx)(O,{type:t,changeModal:i,handleUpload:n,requestData:o,handleSubmit:c,uploadedUrl:d,endorsementData:a}),("accepted"===t||"rejected"===t)&&Object(s.jsx)(N,{type:t,changeModal:i,handleUpload:n,handleSubmit:c}),("failed"===t||"proceed"===t)&&Object(s.jsx)(z,{type:t,changeModal:i,handleUpload:n,handleSubmit:c})]})}):null},C=i(52),S=i(148),P=i(9),I=i(1152),M=i(35),R=i(250),_=i(114);const{resetReduxPolicy:T,tokenizedDetailEndorsement:Y,authorisedEndorsement:A}=P.a;const U=I.default.create()((function(e){const t=Object(M.j)(),{getPolicyEndorsementDetailResult:i,policyEndorsementDetailLoading:o,policyEndorsementLoading:a,policyEndorsement:c}=e,[d,r]=Object(n.useState)(""),[l,p]=Object(n.useState)(null),[h,x]=Object(n.useState)(null),[u,g]=Object(n.useState)(""),[j,f]=Object(n.useState)(""),[w,v]=Object(n.useState)(null),O=e=>{r(e)},y=()=>{const{id:i,token:n}=t.params,o={query:{id:i,token:n}};e.tokenizedDetailEndorsement(o)};return Object(n.useEffect)((()=>{null!==t&&void 0!==t&&t.params&&y()}),[]),Object(n.useEffect)((()=>{null!==c&&void 0!==c&&c.error?r("failed"):w&&(O(w+"ed"),v(null),f(""),y())}),[c]),Object(n.useEffect)((()=>{a&&r("proceed")}),[a]),Object(n.useEffect)((()=>{i&&Object.keys(i).length>0&&(p(null===i||void 0===i?void 0:i.Request),x(null===i||void 0===i?void 0:i.endorsement),g(null===i||void 0===i?void 0:i.ApplicationNo))}),[i]),Object(s.jsx)("div",{style:{border:"0px #111 solid",borderTopWidth:"4px"},children:Object(s.jsxs)(R.a,{isSpining:(o||a)&&l,children:[Object(s.jsx)(m,{requestData:l,appNo:u}),Object(s.jsx)(b,{requestData:l,changeModal:O}),Object(s.jsx)(k,{handleUpload:async e=>{var t;const i=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files,n=new FormData;n.append("file",i[0]);const o=await _.a.postUploadFileRequest(n),a=null===o||void 0===o?void 0:o.data;var c;"success"===(null===a||void 0===a?void 0:a.status)&&f(null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.url)},handleSubmit:(i,n,o)=>{v(i);const{token:a,id:c}=t.params,s={registration_status:"accept"===i?"Accept":"Reject",acceptance_letter_url:"accept"===i?o:"-",rejection_letter_url:"reject"===i?o:"-"};"accept"===i&&n&&(s.premium=parseInt(n)),e.authorisedEndorsement({query:{internal_id:c,token:a},body:s})},changeModal:O,show:d,requestData:l,endorsementData:h,uploadedUrl:j})]})})}));t.default=Object(C.b)((e=>({getPolicyEndorsementDetailResult:e.Policy.tokenisedEndorsementDetail,policyEndorsementDetailLoading:e.Loading.TOKENIZED_ENDORSEMENT_DETAIL,policyEndorsementDetailError:e.Error.TOKENIZED_ENDORSEMENT_DETAIL,policyEndorsement:e.Policy.authorizedEndorsementData,policyEndorsementMessage:e.Policy.authorizedEndorsementDataMessage,policyEndorsementLoading:e.Loading.AUTHORIZED_ENDORSEMENT,policyEndorsementError:e.Error.AUTHORIZED_ENDORSEMENT})),{authorisedEndorsement:A,tokenizedDetailEndorsement:Y,resetReduxPolicy:T})(Object(S.c)(U))}}]);
//# sourceMappingURL=63.65532f75.chunk.js.map