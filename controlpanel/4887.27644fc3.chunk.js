"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[4887],{83772:(e,t,n)=>{n.d(t,{DB:()=>c,I7:()=>o,IA:()=>r,If:()=>p,LE:()=>h,bz:()=>i,eo:()=>d,mW:()=>m,n_:()=>s});var a=n(96760),l=n(91324);const i="insurance-policy-documents-agent-control-panel",o="manual-order",r="fleet-policy",s="https://maps.googleapis.com/maps/api/js?key=AIzaSyAb4f7vUnXYoNGrGaEgwvgc8AEXUgtpDgY&libraries=places",d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=[e.address];return e.city_name&&e.postal_code&&t.push(`${e.city_name} ${e.postal_code}`),e.province_name&&t.push(e.province_name),t.join(", ")};function c(e){if(!e||"NOT_REQUIRED"===e)return{text:"-"};switch(e){case"PAID":return{text:"Payment Success",color:a.l.blue};case"POLICY_CREATED":case"COMPLETED":case"ADDITIONAL_BILL_PAID":return{text:"Paid",color:a.l.green};case"PAYMENT_FAILED":case"EXPIRED":case"FAILED":return{text:"Payment Failed",color:a.l.errorDark};case"PROOF_APPROVED":case"VERIFICATION_IN_PROGRESS":return{text:"In Verification Process",color:a.l.orange};case"PROOF_SUBMITTED":case"PROOF_UNDERPAYMENT":return{text:"Payment Proof Uploaded",color:a.l.orange};case"PROOF_VERIFICATION_FAILED":return{text:"Payment Verification Failed",color:a.l.orange};case"MITRA_CONFIRMATION_PENDING":return{text:"Waiting Mitra confirmation",color:a.l.orange};case"CANCELLED":return{text:"Cancelled",color:a.l.orange};default:return{text:"Waiting for payment",color:a.l.orange}}}const p=`${l.Fm}/rar_zip_file_view.png`,m=`${l.Fm}/icons/UploadIcon.png`,h=`${l.Fm}/icons/ArrowRight.png`},52401:(e,t,n)=>{n.d(t,{PG:()=>a,UH:()=>o,eQ:()=>l,vI:()=>i});const a=e=>{const t=(new DOMParser).parseFromString(e,"text/html").querySelector('meta[name="x-template-builder"]');return"true"===(null===t||void 0===t?void 0:t.getAttribute("content"))},l=e=>{const t=(new DOMParser).parseFromString(e,"text/html").querySelectorAll('meta[name^="x-"]'),n={};return t.forEach((e=>{const t=e.getAttribute("name").replace("x-",""),a=e.getAttribute("content");n[t]=a})),n},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(new DOMParser).parseFromString(e,"text/html"),a={"template-builder":"true","created-at":(new Date).toISOString(),"builder-version":"1.0",...t};let l=n.querySelector("head");return l||(l=document.createElement("head"),n.documentElement&&n.documentElement.insertBefore(l,n.body)),Object.entries(a).forEach((e=>{let[t,a]=e,i=n.querySelector(`meta[name="x-${t}"]`);i?i.setAttribute("content",a):(i=document.createElement("meta"),i.setAttribute("name",`x-${t}`),i.setAttribute("content",a),l.appendChild(i))})),(new XMLSerializer).serializeToString(n)},o=e=>{const t="/* EMAIL_FONTS_ADDED */";if(e.includes(t))return e;const n=`\n    ${t}\n    /* Email-safe font families */\n    .font-sans, .sans-serif {\n      font-family: Arial, Helvetica, 'Helvetica Neue', sans-serif;\n    }\n    .font-serif, .serif {\n      font-family: Georgia, 'Times New Roman', Times, serif;\n    }\n    .font-mono, .monospace {\n      font-family: 'Courier New', Courier, monospace;\n    }\n    body {\n      font-family: Arial, Helvetica, 'Helvetica Neue', sans-serif;\n    }\n    h1, h2, h3, h4, h5, h6, p, span {\n      line-height: 1;\n      margin-top: 0;\n      padding-top: 0;\n      margin-bottom: 0;\n      padding-bottom: 0;\n      font-weight: normal;\n      mso-line-height-rule: exactly;\n    }\n    .ql-align-right {\n      text-align: right !important;\n    }\n    .ql-align-center {\n      text-align: center !important;\n    }\n    .ql-align-left {\n      text-align: left !important;\n    }\n\n    .template-content {\n      text-wrap: wrap !important;\n      word-break: break-word !important;\n    }\n  `;let a=e;return a=a.match(/<style[^>]*>/)?a.replace(/(<style[^>]*>)/,`$1${n}`):a.includes("</head>")?a.replace("</head>",`<style>${n}</style></head>`):`<style>${n}</style>${a}`,a}},41420:(e,t,n)=>{n.d(t,{A:()=>O});var a=n(1502),l=n(80878),i=n.n(l);const o=i().div`
padding: 15px 0;
width:100%;
.fieldLabel {
  font-weight:800;
  padding:30px;
}
.text-center {
  text-align: center;
}
.padding10 {
  padding: 10px;
}

.sample-container{
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px !important;
  gap: 48px;
}
.sample-previewer-section {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.preview-template-style {
  width: 50%;
}
.sample-previewer-section .newText{
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: #999999;
  margin: 0;
  padding: 0;
}

.sample-previewer-section .newText2{
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #333333;
  margin: 0;
  padding: 0;
}

.sample-previewer-section .icon{
  height: 20px;
  width: 20px;
  
}

.upload-dummy-box{
  width: 100%;
  height: 56px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
}

.template-content {
  padding: 0 20px !important;
  text-wrap: wrap !important;
  word-break: break-word !important;
}

.ql-editor {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.template-preview-content img {
  max-width: none;
}

.sample-template-box{
  overflow: scroll;
  /* flex: 1; */
  width:270px;
  border: 1px solid #cccccc;
  border-radius: 16px;
  position: relative;
}
.previewer-template {
  height :auto !important;
  width:100% !important;
}
.selectedTemplate {
  border: 4px solid #00aa13;
  border-radius: 2%;
  margin: 11px;
}

.sample-template-controls {
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.marginTB-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.marginTB16px{
  margin: 16px 0;
}
.sample-template-box-inner {
  width: 100%; 
  overflow: hidden;
  font-size: 5px;
  line-height: 1.4;
  height: 320px;
  color: #333333;
  height: 320px !important;
  overflow: scroll;
}
.sample-template-box-inner .template-banner {
  width: 100%; 
}
.sample-template-box .template-text{
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin: 4px 0 16px 0 !important;
}
.sample-template-box .selectBtn{
  width: 128px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 900;
  color: #cccccc;
  margin: 0 auto;
  cursor: pointer;
}
.sample-template-box .selectedBtn{
  border: 0px;
  background-color: #009632;
  color: #fff;
}
.previewer-template {
  border: 1px solid #efefef;
}
.sample-template-box-inner  .claiminitiated, .sample-template-box-inner  .policycreation{
  transform: scale(1);
    transform-origin: center top;
}
.sample-template-box-inner  .policyendorsement{
  transform: scale(0.68);
    transform-origin: center top;
}
.sample-template-box-inner  .policygeneric{
  transform: scale(1);
    transform-origin: center top;
}

table tbody tr td {
  padding: 0 !important;
}

.sample-template-box-inner table{
  width: 100%; 
}
.sample-template-box-inner .template-bottom-logo {
  width: 40px;
}
.sample-template-box-inner.GericClass .template-logo {
  width: 50% !important;
  padding: 10px;
}
.sample-template-box-inner  .template-logo {
  width: 100% !important;
  height: 40px;
  object-fit: contain;
}

.sample-template-box-inner  .template-wrapper {
  display: flex;
  flex-direction: column;
  height: 350px;
  align-content: space-between;
  justify-content: space-between;
}

.sample-template-box-inner .template-bottom-style {
  font-size: 5px;
}

.sample-template-box-inner .template-bottom-style img{
  width: 12px;
}
.sample-template-box-inner .template-telephone-logo-style{
  padding: 3px 4px !important;
}
  
.box-shadow-on {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  border-radius: 20px;
  padding: 15px 0;
}
.marginB20 {
  margin-bottom: 20px;
}


.customise-drawer {
  position: absolute;
  background: transperant;
  z-index: 10;
  transition : all 0.7s;
  left: auto;
  top: 0;
  right: -100vw;
  bottom: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}

.customise-drawer.show{
  left: 0;
  right: 0;
  transition : all 0.7s;
}
.drawer-backdrop {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
}
.custom-drawer-content {
  position: absolute;
    width: 100%;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    overflow-y: scroll;
}
.customise-drawer .drawer-header {
  padding: 15px;
}
.customise-drawer .drawer-body {
  padding: 15px;
}
.customise-drawer .close-button {
  float: right;
  cursor: pointer;
}
.ant-upload.ant-upload-select{
  width: 100%;
}
div.key-field {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    border: none;
    position: relative;
}
div.key-field > label {
  width:100%;
}
textarea.key-field  {
  width: 90%;
  border: 1px solid #ccc;
  height: 100px;
  margin-bottom: 10px;
}
input.key-field {
  border: 1px solid #ccc;
  height: 50px;
  margin-bottom: 10px;
  width: 85%;
  margin-left:5px;
}
input.input-filed {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  margin-right: 5px;
  width: 45%;
}
input.delete-button {
  background-image: url(data:image/png;base64,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);
  width: 30px;
  background-repeat: no-repeat;
  background-position: center;
  height: 30px;
  border: 0;
  position: absolute;
  right: 0;
  top: calc(50% - 20px);
  cursor: pointer;
  }
.padding15 {
  padding: 15px;
}
.ant-btn-radius{
  border-radius: 20px !important;
  min-width: 50%;
  height: 40px;
}
.add-section {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
  align-items: center;
}
.add-section .ant-select {
  width: auto;
}
.add-section .ant-select-selection {
  padding: 5px;
  height: 40px;
}
.add-button {
  min-width: 10px;
  margin-left: 10px;
}
.text-right {
  text-align: right;
}
.close-button {
  width: 20px;
  height: 20px;
}
.w100 {
  width: 100%;
}
.ant-btn-primary {
  color: #1890ff;
  background: #fff;
}
.text-center {
  text-align: center;
}
.marginT-auto {
  margin-top: auto;
}
.ant-radio {
  position:absolute;
  top:30px;
  left:6px;
}
.custom-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: 8px;
    right: 0;
}

.custom-checkbox input {
    display: none; /* Hide the default checkbox */
}

.custom-checkbox .checkmark {
    width: 20px;
    height: 20px;
    background-color: transparent; /* Default background color */
    border-radius: 4px; /* Rounded corners */
    position: relative;
    margin-right: 10px;
    transition: background-color 0.4s;
}

.custom-checkbox input:checked + .checkmark {
    background-color: green; /* Background color when checked */
}

.custom-checkbox .checkmark::after {
    content: "";
    position: absolute;
    display: none;
    left: 7px;
    top: 4px;
    width: 6px;
    height: 10px;
    border: solid white; /* Tick color */
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.custom-checkbox input:checked + .checkmark::after {
    display: block;
}
.fillColor{
  background-color: #0064C8;
  color: #ffffff;
}

`,r=i().div`
  background-image: url(${e=>e.imageUrl});
  background-size:cover;
  background-repeat:no-repeat;
  height:140px;
  width:100%;
`,s=i().div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
  width: 100vw;
  height: 100vh;
  margin: auto 0;
  .modal{
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 600px;
    max-width: 100%;
    position: relative;
    margin: 20px auto;
    .preview{
      width: 100%;
      margin-bottom: 16px;
      max-height: 85vh;
      overflow: scroll;
    }

    .buttons{
      width: 100%;
      display: flex;
      justify-content: space-around;
      .button{
        cursor: pointer;
        width: 240px;
        height: 34px;
        border-radius: 8px;
        background-color: #ffffff;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .secondary{
        border: 1px solid #0064C8;
        color: #333;
      }
      .primary{
        background-color: #0064C8;
      }
    }
  }

`,d=o;var c=n(67816),p=n(24952),m=n(83772),h=n(99478),u=n(74394),g=n.n(u),b=n(16101);i().div`
    line-height: 0;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    #rc-editable-input-1{
        height: 26px !important;
        width: 57px !important;
    }
    #rc-editable-input-1 + label{
        margin-top: 5px;
        height: 15px;
    }
    #rc-editable-input-2,
    #rc-editable-input-2 ~ *,
    #rc-editable-input-3,
    #rc-editable-input-3 ~ *,
    #rc-editable-input-4,
    #rc-editable-input-4 ~ *,
    #rc-editable-input-5,
    #rc-editable-input-5 ~ * {
        display: none !important;;
    }
    .color-button{
        width: fit-content;
        height: fit-content;
        box-sizing: border-box;
        padding: 1rem;
        border: 1px solid;
        border-radius: 16px;
        cursor: pointer;
    }
`;const x=i().div`
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .first-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .text{
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #999999;
    }
    .input-box-container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .color-input{
        height: 40px;
        width: 180px;
        border: 1px solid #dddddd;
        border-radius:8px;
        outline: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #999999;
        letter-spacing: 1px;
        padding: 8px;
    }
    .blue-box{
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background-color: #0064C8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .blue-box img{
        width: 16px;
        height: 16px;
    }
    .second-row{
        display: flex;
        justify-content: flex-start;
        gap: 6px;
        flex-wrap: wrap;
    }
    .colorbox{
        width: 47px;
        height: 40px;
        border-radius: 8px;
        cursor: pointer;
        position: relative;
    }
    .whitebox{
        border: 1px solid #dddddd;
    }
    .checked::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px; /* Width of the tick mark */
        height: 20px; /* Height of the tick mark */
        border: solid #000; /* Color of the tick mark */
        border-width: 0 3px 3px 0;
        transform: translate(-50%, -50%) rotate(45deg); /* Center and rotate the tick mark */
}
`;var f=n(70579);const y=["#FAF000","#FA8200","#FA3C46","#FA64C8","#B43CFA","#00B4FA","#00D278","#FAFA96","#FADCBE","#FAD2D2"];const v=function(e){let{updateBgColor:t}=e;const[n,l]=(0,a.useState)("#FFFFFF");return(0,f.jsxs)(x,{children:[(0,f.jsxs)("div",{className:"first-row",children:[(0,f.jsx)("p",{className:"text",children:"Color"}),(0,f.jsxs)("div",{className:"input-box-container",children:[(0,f.jsx)("input",{onChange:e=>{l(e.target.value)},value:n,className:"color-input"}),(0,f.jsx)("div",{onClick:()=>t(n),className:"blue-box",children:(0,f.jsx)("img",{src:m.LE,alt:"RIGHT_ARROW"})})]})]}),(0,f.jsxs)("div",{className:"second-row",children:[(0,f.jsx)("div",{onClick:()=>l("#FFFFFF"),className:"colorbox whitebox "+("#FFFFFF"===n?"checked":"")}),(0,f.jsx)(f.Fragment,{children:y.map(((e,t)=>(0,f.jsx)("div",{onClick:()=>l(e),style:{backgroundColor:e},className:"colorbox "+(e===n?"checked":"")},t)))})]})]})},w=i().div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    > *{
        width: 100%;
        text-align: center;
    }
`,A=e=>{let{tagSelected:t,html:n,dummyRequest:l,onChange:i,onClick:o}=e;const[r,s]=(0,a.useState)(null),[d,p]=(0,a.useState)([]);return(0,a.useEffect)((()=>{n.querySelector(".template-logo").children.length>0?s("multiple"):s("single")}),[]),(0,a.useEffect)((()=>{const e=n.querySelector(".template-logo").children;if(e.length>0&&"single"===r){const t=Array(e.length).fill(0);s("multiple"),p(t)}else if(e.length>d.length){const t=Array(e.length).fill(0);p(t)}})),r?(0,f.jsx)(w,{children:"single"===r?(0,f.jsx)(c.Upload,{name:"file",showUploadList:!1,multiple:!1,customRequest:l,onChange:e=>i(e),children:(0,f.jsx)(c.Button,{className:"ant-btn-radius",onClick:()=>o("logo",0),children:"Add Header Image"})}):(0,f.jsxs)(f.Fragment,{children:[d.map(((e,t)=>(0,f.jsx)(c.Upload,{name:"file",showUploadList:!1,multiple:!1,customRequest:l,onChange:e=>i(e),children:(0,f.jsx)(c.Button,{className:"ant-btn-radius",onClick:()=>o("logo",t),children:"Change Header Image"})},t))),(0,f.jsx)(c.Upload,{name:"file",showUploadList:!1,multiple:!1,customRequest:l,onChange:e=>i(e),children:(0,f.jsx)(c.Button,{className:"ant-btn-radius",onClick:()=>o("logo",d.length),children:"Add Header Image"})})]})}):(0,f.jsx)("div",{children:"Loading.."})},C=(e,t,n,a,l,i,o)=>{(e=>{e.innerHTML=""})(t);const r=e.querySelectorAll(".template-content-change .template-content-list"),s=e.querySelectorAll(".template-content-change .template-content"),d=e.querySelectorAll(".template-content-change-table .template-content-key"),c=e.querySelectorAll(".template-content-change-table .template-content-value");r.length>0&&S(e,t,n,a,l,i,o),s.length>0&&T(e,t,n,a,l,i,o),d.length>0&&c.length>0&&E(e,t,n,a,l,i,o)},S=(e,t,n,a,l,i,o)=>{const r=e.querySelectorAll(".template-content-change .template-content-list");if("list"===o&&a&&l){const t=l.innerHTML;l.innerHTML=t.replace(/{{}}/g,`{{${a}}}`),r[i].innerHTML=l.innerHTML,n(e,"","","")}for(let s=0;s<r.length;s++){const a=document.createElement("input"),l=document.createElement("INPUT"),i=document.createElement("DIV"),o=document.createElement("br"),d=document.createElement("label");i.setAttribute("class","key-field"),a.setAttribute("class","key-field"),a.setAttribute("type","text"),l.setAttribute("type","button"),l.setAttribute("class","delete-button"),d.innerText=`${s+1}`,i.appendChild(d),i.appendChild(o),a.value=r[s].innerText,a.innerHTML=r[s].innerText,i.appendChild(a),i.appendChild(l),i.appendChild(o),a.addEventListener("input",(function(t){r[s].innerText=t.target.value,n(e,r[s],s,"list")})),l.addEventListener("click",(function(t){r[s].remove(),i.remove(),n(e)}),{capture:!0}),t.appendChild(i)}},E=(e,t,n,a,l,i,o)=>{const r=e.querySelectorAll(".template-content-change-table .template-content-key"),s=e.querySelectorAll(".template-content-change-table .template-content-value");if("tableKey"===o&&a&&l){const t=l.innerHTML;l.innerHTML=t.replace(/{{}}/g,`{{${a}}}`),r[i].innerHTML=l.innerHTML,n(e,"","","")}if("tableValue"===o&&a&&l){const t=l.innerHTML;l.innerHTML=t.replace(/{{}}/g,`{{${a}}}`),s[i].innerHTML=l.innerHTML,n(e,"","","")}for(let d=0,c=0;d<r.length&&c<s.length;d++,c++){const a=document.createElement("input"),l=document.createElement("input"),i=document.createElement("input"),o=document.createElement("label"),p=document.createElement("DIV"),m=document.createElement("br");p.setAttribute("class","key-field"),l.setAttribute("class","input-filed"),i.setAttribute("class","input-filed"),l.setAttribute("type","text"),i.setAttribute("type","text"),l.setAttribute("name",d),i.setAttribute("name",c),a.setAttribute("type","button"),a.setAttribute("class","delete-button"),a.setAttribute("name",d),p.appendChild(o),p.appendChild(m),l.value=r[d].innerText,l.innerHTML=r[d].innerText,i.value=s[d].innerText,i.innerHTML=s[d].innerText,p.appendChild(l),p.appendChild(i),p.appendChild(a),l.addEventListener("input",(function(t){r[t.target.name].innerText=t.target.value,n(e,r[t.target.name],d,"tableKey")})),i.addEventListener("input",(function(t){s[t.target.name].innerText=t.target.value,n(e,s[t.target.name],c,"tableValue")})),a.addEventListener("click",(function(t){r[d].parentNode.remove(),p.remove(),n(e)}),{capture:!0}),t.appendChild(p)}},T=(e,t,n,a,l,i,o)=>{const r=e.querySelectorAll(".template-content-change .template-content");if("normal"===o&&a&&l){const t=l.innerHTML;l.innerHTML=t.replace(/{{}}/g,`{{${a}}}`),r[i].innerHTML=l.innerHTML,n(e,"","","")}};var k=n(52401),N=n(91324);const{getsampleTemplate:I,updatesampleTemplate:F,startUploadTemplate:j,resetNotificationsRedux:L,getTopLevelAttributes:B,resetNotificationCore:M}=h.A,D=e=>{let{file:t,onSuccess:n}=e;setTimeout((()=>{n("ok")}),0)};class U extends a.Component{constructor(e){var t;super(e),t=this,this.componentDidMount=async()=>{await this.props.getsampleTemplate(),await this.props.getTopLevelAttributes()},this.handelLogoUpdate=(e,t)=>{const n=this.state.selectedContent,a=(new DOMParser).parseFromString(n,"text/html");let l,i;switch(t){case"logo":if(l=a.querySelector(".template-logo"),i=l.children,this.state.tagIndex===i.length){const t=document.createElement("img");t.classList.add(`img${i.length}`),t.setAttribute("src",e),t.setAttribute("width","300"),t.setAttribute("height","200"),l.appendChild(t),this.updateState(a,this.state.tagIndex)}this.updateState(a);break;case"header":a.querySelector(".template-banner").src=e,a.querySelector(".template-banner").minWidth=340,a.querySelector(".template-banner").style="margin-top: 0px; border-radius: 16px 16px 0 0",this.updateState(a),this.props.resetNotificationsRedux(["templateUploadURl","templateUploadURlMessage"]);break;case"footerlogo":a.querySelector(".template-bottom-logo").src=e,this.updateState(a),this.props.resetNotificationsRedux(["templateUploadURl","templateUploadURlMessage"]);break;case"emailLogo":a.querySelector(".template-email-logo").src=e,this.updateState(a);break;case"whatsappLogo":a.querySelector(".template-whatsapp-logo").src=e,this.updateState(a);break;case"phoneLogo":a.querySelector(".template-telephone-logo").src=e,this.updateState(a);break;default:return null}},this.startUpload=e=>{const t=new FormData;t.append("file",e),this.props.startUploadTemplate({formData:t})},this.handleCloseDrawer=()=>{this.setState({showDrawer:!1,addMoreFieldButtonVisible:!1,showColorSelectionModal:!1})},this.handleOnToggleFinalPreview=()=>{this.setState({showFinalPrivewModal:!this.state.showFinalPrivewModal})},this.serialLizeHTML=e=>e.documentElement.innerHTML,this.updateState=(e,t,n,a)=>{this.setState({selectedContent:(new XMLSerializer).serializeToString(e),templateStateChange:!0,tagSelected:n,tagIndex:t,contentType:a},(()=>{if(!n){const e=document.getElementById("demo"),t=this.state.selectedContent,n=(new DOMParser).parseFromString(t,"text/html");C(n,e,this.updateState)}}))},this.updateContent=e=>{const t=this.state.selectedContent,n=(new DOMParser).parseFromString(t,"text/html");n.querySelector(".template-content").innerHTML=e,this.setState({selectedContent:(new XMLSerializer).serializeToString(n),templateStateChange:!0})},this.updateBgColor=e=>{const t=this.state.selectedContent,n=(new DOMParser).parseFromString(t,"text/html");n.querySelector("body table").style.backgroundColor=e,this.setState({selectedContent:(new XMLSerializer).serializeToString(n),templateStateChange:!0})},this.handleCreateFooterElm=function(){let{label:e="",elementType:t="",parent:n=null,defaultValue:a=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const l=document.createElement("label"),i=document.createElement("div"),o=document.createElement(t);return i.setAttribute("class","key-field"),o.setAttribute("class","key-field"),l.innerText=e,Object.assign(o,{defaultValue:a}),i.appendChild(l),i.appendChild(o),n.appendChild(i),{data:o}},this.handleCreateFooterImageUpload=function(){let{label:e,parent:n,currentSrc:a,iconSelector:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=document.createElement("div");i.setAttribute("class","key-field footer-icon-upload");const o=document.createElement("label");o.innerText=e;const{presetContainer:r,presetSelect:s,presetPreviewImg:d}=t.createPresetContainer();return i.appendChild(o),i.appendChild(r),n.appendChild(i),{presetSelect:s,presetPreviewImg:d}},this.createRadioContainer=e=>{const t=document.createElement("div");t.setAttribute("class","radio-container"),Object.assign(t.style,{marginBottom:"10px",display:"flex",flexDirection:"column",gap:"8px"});const n=(n,a)=>{const l=document.createElement("label");l.style.cursor="pointer","url"===n&&(l.style.marginRight="15px");const i=document.createElement("input");return i.setAttribute("type","radio"),i.setAttribute("name",`icon-type-${e}`),i.setAttribute("value",n),i.style.marginRight="5px","url"===n&&(i.checked=!0),l.appendChild(i),l.appendChild(document.createTextNode(a)),t.appendChild(l),i},a=n("url","URL"),l=n("preset","Preset Icons"),i=n("upload","Upload Image");return{container:t,radios:{radioUrl:a,radioPreset:l,radioUpload:i}}},this.createUrlInputContainer=e=>{const t=document.createElement("div");t.setAttribute("class","url-input-container"),Object.assign(t.style,{display:"flex",alignItems:"center",marginBottom:"10px"});const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("class","icon-url-input"),n.setAttribute("placeholder","Enter image URL"),n.value=e||"",Object.assign(n.style,{flex:"1",marginRight:"10px"});const a=document.createElement("button");return a.setAttribute("type","button"),a.setAttribute("class","apply-url-btn"),a.innerText="Apply",t.appendChild(n),t.appendChild(a),{urlContainer:t,urlInput:n,urlApplyBtn:a}},this.createPresetContainer=()=>{const e=document.createElement("div");e.setAttribute("class","preset-dropdown-container"),Object.assign(e.style,{display:"block",marginBottom:"10px"});const t=document.createElement("select");t.setAttribute("class","icon-preset-select"),Object.assign(t.style,{width:"100%",display:"block",padding:"8px",borderRadius:"4px",border:"1px solid #ddd"});[{label:"Select an icon...",value:""},{label:"Phone Classic",value:"https://cdn-icons-png.flaticon.com/512/724/724664.png"},{label:"Phone Modern",value:"https://cdn-icons-png.flaticon.com/512/455/455705.png"},{label:"Phone Call",value:"https://cdn-icons-png.flaticon.com/512/597/597177.png"},{label:"Mobile Phone",value:"https://cdn-icons-png.flaticon.com/512/15/15874.png"},{label:"WhatsApp Square",value:"https://cdn-icons-png.flaticon.com/512/4423/4423697.png"},{label:"Email Envelope",value:"https://cdn-icons-png.flaticon.com/512/561/561127.png"},{label:"Email Modern",value:"https://cdn-icons-png.flaticon.com/512/732/732200.png"},{label:"Email Outline",value:"https://cdn-icons-png.flaticon.com/512/542/542638.png"},{label:"Email At Sign",value:"https://cdn-icons-png.flaticon.com/512/893/893257.png"},{label:"Website",value:"https://cdn-icons-png.flaticon.com/512/1006/1006771.png"},{label:"Facebook PNG",value:`${N.Fm}/tap_insurance_edm/white_icons/fb.png`},{label:"Twitter PNG",value:`${N.Fm}/tap_insurance_edm/white_icons/TW.png`},{label:"Email PNG",value:`${N.Fm}/tap_insurance_edm/white_icons/email_white_icon.png`},{label:"Instagram PNG",value:`${N.Fm}/tap_insurance_edm/white_icons/ig_new.png`},{label:"Linkedin PNG",value:`${N.Fm}/tap_insurance_edm/white_icons/linkedin_new.png`},{label:"Whatsapp PNG",value:`${N.Fm}/tap_insurance_edm/white_icons/whatsapp_white_icon.png`}].forEach((e=>{const n=document.createElement("option");n.value=e.value,n.textContent=e.label,t.appendChild(n)}));const n=document.createElement("img");return n.setAttribute("class","preset-icon-preview"),Object.assign(n.style,{width:"30px",height:"30px",marginTop:"10px",border:"1px solid #ddd",borderRadius:"4px",display:"none"}),e.appendChild(t),e.appendChild(n),{presetContainer:e,presetSelect:t,presetPreviewImg:n}},this.createUploadContainer=(e,t)=>{const n=document.createElement("div");n.setAttribute("class","upload-container"),Object.assign(n.style,{display:"none",alignItems:"center"});const a=document.createElement("img");a.setAttribute("class","icon-preview"),a.src=e||"",Object.assign(a.style,{width:"30px",height:"30px",marginRight:"10px",border:"1px solid #ddd",borderRadius:"4px"});const l=document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.setAttribute("class","icon-upload-input"),l.setAttribute("data-icon-selector",t),l.style.display="none";const i=document.createElement("button");return i.setAttribute("type","button"),i.setAttribute("class","upload-icon-btn"),i.innerText="Choose File",i.onclick=()=>l.click(),n.appendChild(a),n.appendChild(i),n.appendChild(l),{uploadContainer:n,fileInput:l,previewImg:a,uploadBtn:i}},this.setupIconHandlers=(e,t,n)=>{const{presetSelect:a,presetPreviewImg:l}=t;a.addEventListener("change",(()=>{const t=a.value;t?(l.src=t,l.style.display="block",e.src=t,this.updateSerializedContent(n)):l.style.display="none"}))},this.updateSerializedContent=e=>{this.setState({selectedContent:(new XMLSerializer).serializeToString(e),templateStateChange:!0})},this.handleFooterIconAndText=(e,t,n,a,l)=>{const i=e.querySelector(t),o=this.findTextElement(i,t);if(i){const a=this.handleCreateFooterImageUpload({label:n,parent:l,currentSrc:i.src,iconSelector:t.replace(/[^\w]/g,"-")});this.setupIconHandlers(i,a,e)}if(o){var r,s;const{data:t}=this.handleCreateFooterElm({elementType:"textarea",label:a,parent:l,defaultValue:null!==(r=null!==(s=null===o||void 0===o?void 0:o.href)&&void 0!==s?s:null===o||void 0===o?void 0:o.textContent)&&void 0!==r?r:""});t.addEventListener("input",(t=>{null!==o&&void 0!==o&&o.href?o.href=t.target.value:o.textContent=t.target.value,this.updateSerializedContent(e)}))}},this.findTextElement=(e,t)=>{return e?'img[alt="call-ic"]'===t?(null===e||void 0===e||null===(n=e.parentElement)||void 0===n||null===(a=n.nextElementSibling)||void 0===a?void 0:a.querySelector("b"))||(null===e||void 0===e||null===(l=e.nextElementSibling)||void 0===l?void 0:l.querySelector("b")):'img[alt="email-ic"]'===t?null===e||void 0===e||null===(i=e.parentElement)||void 0===i||null===(o=i.nextElementSibling)||void 0===o?void 0:o.querySelector("a b"):'img[alt="customer-support-ic"]'===t?null===e||void 0===e||null===(r=e.nextElementSibling)||void 0===r?void 0:r.querySelector("a b"):'img[alt="linkedin-ic"]'===t||'img[alt="x-ic"]'===t||'img[alt="instagram-ic"]'===t||'img[alt="facebook-ic"]'===t?null===e||void 0===e?void 0:e.parentElement:null===e||void 0===e||null===(s=e.nextElementSibling)||void 0===s?void 0:s.querySelector("b"):null;var n,a,l,i,o,r,s},this.handleOnOpenDrawer=(e,t)=>{this.setState({showDrawer:!0});const n=document.getElementById("demo");n.innerHTML="";const a=(new DOMParser).parseFromString(this.state.selectedContent,"text/html");switch(e){case"logoClick":this.setState({showHeaderModel:!0});break;case"logo":this.setState({addMoreFieldButtonVisible:!1,selectedUploadFileType:"logo",tagIndex:t});break;case"header":this.setState({addMoreFieldButtonVisible:!1,showDrawer:!1,selectedUploadFileType:"header"});break;case"heading":this.handleHeadingEdit(n,a);break;case"changeContent":this.setState({addMoreFieldButtonVisible:!0});break;case"themeSelection":this.setState({showColorSelectionModal:!0});break;case"footer-logo":this.setState({addMoreFieldButtonVisible:!1,showDrawer:!1,selectedUploadFileType:"footerlogo"});break;case"footer-details":this.handleFooterDetails(n,a)}},this.handleHeadingEdit=(e,t)=>{this.setState({addMoreFieldButtonVisible:!1});const n=document.createElement("div");n.setAttribute("class","key-field");const a=document.createElement("textarea");a.setAttribute("class","key-field"),a.setAttribute("type","text");const l=t.querySelector(".template-header");a.value=l.textContent,a.innerHTML=l.textContent,a.addEventListener("input",(e=>{l.textContent=e.target.value,this.updateSerializedContent(t)})),n.appendChild(a),e.appendChild(n)},this.handleFooterDetails=(e,t)=>{this.setState({addMoreFieldButtonVisible:!1,showBottomLogo:!this.state.showBottomLogo});[{selector:'img[alt="call-ic"]',iconLabel:"Phone Icon",textLabel:"Phone"},{selector:'img[alt="whatsapp-ic"]',iconLabel:"WhatsApp Icon",textLabel:"Whatsapp No."},{selector:'img[alt="zalo-ic"]',iconLabel:"Zalo Icon",textLabel:"Zalo"},{selector:'img[alt="email-ic"]',iconLabel:"Email Icon",textLabel:"Email"},{selector:'img[alt="customer-support-ic"]',iconLabel:"Website Icon",textLabel:"Website URL"},{selector:'img[alt="facebook-ic"]',iconLabel:"Facebook Icon",textLabel:"Facebook URL"},{selector:'img[alt="instagram-ic"]',iconLabel:"Instagram Icon",textLabel:"Instagram URL"},{selector:'img[alt="x-ic"]',iconLabel:"X Icon",textLabel:"X URL"},{selector:'img[alt="linkedin-ic"]',iconLabel:"LinkedIn Icon",textLabel:"LinkedIn URL"}].forEach((n=>{this.handleFooterIconAndText(t,n.selector,n.iconLabel,n.textLabel,e)}))},this.reRenderContentFields=e=>{const t=document.getElementById("demo"),n=(new DOMParser).parseFromString(e,"text/html");C(n,t,this.updateState)},this.addMoreField=(e,t)=>{const{addFieldIndex:n,selectedContent:a}=this.state,l=(new DOMParser).parseFromString(a,"text/html"),i=this;switch(t){case"text-area":{const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0];if(t){const a=t.children[0],o=document.createElement("div"),r=document.createElement("br"),s=document.createElement("TR"),d=document.createElement("TD"),c=document.createElement("P"),p=document.createElement("textarea");p.setAttribute("type","text"),p.setAttribute("class","key-field"),p.setAttribute("name",n),c.setAttribute("id",n),o.setAttribute("class","key-field"),c.setAttribute("class","template-content");const m=document.createElement("INPUT");m.setAttribute("type","button"),m.setAttribute("class","delete-button"),m.setAttribute("id",n),o.appendChild(p),o.appendChild(m),o.appendChild(r),o.addEventListener("input",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content").namedItem(e.target.name).innerText=e.target.value,l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))})),m.addEventListener("click",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content").namedItem(e.target.id).parentNode.parentNode.remove(),o.remove(),l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))}),{capture:!0}),d.appendChild(c),s.appendChild(d),a.appendChild(s),document.getElementById(e).appendChild(o),this.setState({addFieldIndex:this.state.addFieldIndex+1})}else alert("Selected Field Type Not Present In Template")}break;case"table-row":{const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change-table")[0];if(t){const a=t.children[0],o=document.createElement("div"),r=document.createElement("br"),s=document.createElement("input"),d=document.createElement("input"),c=document.createElement("INPUT");o.setAttribute("class","key-field"),s.setAttribute("class","input-filed"),d.setAttribute("class","input-filed"),s.setAttribute("type","text"),d.setAttribute("type","text"),s.setAttribute("name",n),d.setAttribute("name",n),c.setAttribute("type","button"),c.setAttribute("class","delete-button"),c.setAttribute("id",n);const p=document.createElement("TR"),m=document.createElement("TD"),h=document.createElement("TD");m.setAttribute("class","template-content-key"),m.setAttribute("id",n),h.setAttribute("class","template-content-value"),h.setAttribute("id",n),o.appendChild(s),o.appendChild(d),o.appendChild(c),o.appendChild(r),s.addEventListener("input",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content-key").namedItem(e.target.name).innerText=e.target.value,l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))})),d.addEventListener("input",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content-value").namedItem(e.target.name).innerText=e.target.value,l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))})),c.addEventListener("click",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content-key").namedItem(e.target.id).parentNode.remove(),o.remove(),l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))}),{capture:!0}),p.appendChild(m),p.appendChild(h),a.appendChild(p),document.getElementById(e).appendChild(o),this.setState({addFieldIndex:this.state.addFieldIndex+1})}else alert("Selected Field Type Not Present In Template")}break;case"list-type":{const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change-list")[0];if(t){const a=document.createElement("div"),o=document.createElement("br"),r=document.createElement("li"),s=document.createElement("input");a.setAttribute("class","key-field"),s.setAttribute("class","key-field"),s.setAttribute("type","text"),s.setAttribute("name",n),r.setAttribute("id",n),r.setAttribute("class","template-content-list");const d=document.createElement("INPUT");d.setAttribute("type","button"),d.setAttribute("class","delete-button"),d.setAttribute("id",n),a.appendChild(s),a.appendChild(d),a.appendChild(o),s.addEventListener("input",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content-list").namedItem(e.target.name).innerText=e.target.value,l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))})),d.addEventListener("click",(function(e){const t=document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("previewer-template")[0].querySelector("table");document.getElementsByClassName("preview-template-style")[0].getElementsByClassName("template-content-change")[0].children[0].getElementsByClassName("template-content-list").namedItem(e.target.id).remove(),a.remove(),l.getElementsByTagName("body")[0].querySelector("table").children[0].remove(),l.getElementsByTagName("body")[0].querySelector("table").appendChild(t.children[0]),i.setState({selectedContent:(new XMLSerializer).serializeToString(l),templateStateChange:!0},(()=>{i.reRenderContentFields(i.state.selectedContent)}))}),{capture:!0}),t.appendChild(r),document.getElementById(e).appendChild(a),this.setState({addFieldIndex:this.state.addFieldIndex+1})}else alert("Selected Field Type Not Present In Template")}break;default:return null}},this.selectTemplate=e=>{const t=this.state.sampleTemplateContent[e].template_html,n=(0,k.vI)(t,{"template-id":this.state.sampleTemplateContent[e].template_id||e,"template-name":this.state.sampleTemplateContent[e].template_name||"","selected-at":(new Date).toISOString()});this.setState({selectedTemplateIndex:e,selectedContent:n,showDrawer:!1,templateStateChange:!1},(()=>{this.updateContent(" ")}))},this.handleSelectField=e=>{this.setState({fieldTypeSelected:e})},this.handleSelectVariable=e=>{const t=document.getElementById("demo"),n=this.state.selectedContent,a=(new DOMParser).parseFromString(n,"text/html");C(a,t,this.updateState,e,this.state.tagSelected,this.state.tagIndex,this.state.contentType)},this.handleSubmittingHtml=()=>{this.props.htmlContentFunction(this.state.selectedContent),this.setState({templateStateChange:!0,showFinalPrivewModal:!1})},this.selectFiledDataPopulate=e=>{const{getPartnerProductTemplate:t,selectedProduct:n}=this.props,{borderBottomColor:a}=this.state,l=g().get(t,"products",[]).length>0?g().get(t,"products",[]).filter((e=>Object.keys(e)[0]===n)):[],i=g().get(t,"partner",[]);if(l.length>0){const t=l&&Object.values(l[0])[0],n=t.filter((e=>"footerColor"===Object.keys(e)[0]&&e.is_active));n.length>0&&""===a&&this.setState({borderBottomColor:n[0].footerColor});return t.filter((t=>Object.keys(t)[0]===e&&t.is_active))}if(i.length>0){const t=i.filter((t=>Object.keys(t)[0]===e&&t.is_active)),n=i.filter((e=>"footerColor"===Object.keys(e)[0]&&e.is_active));return n.length>0&&""===a&&this.setState({borderBottomColor:n[0].footerColor}),t}return[]},this.selectImage=(e,t)=>{this.handelLogoUpdate(e,t)},this.state={visible:!1,placement:"right",sampleTemplateContent:[],selectedContent:this.props.content?this.props.content:"",contentChangeing:!1,showDrawer:!1,addFieldIndex:1,fieldTypeSelected:"text-area",addMoreFieldButtonVisible:!1,selectedUploadFileType:"",fileUrl:[{logo:"",header:"",footerlogo:"",whatsappLogo:"",phoneLogo:"",emailLogo:""}],selectedTemplateIndex:this.props.selectedTemplateIndex||"",showBottomLogo:!1,templateStateChange:!(!this.props.content&&!this.props.html),tagSelected:null,tagIndex:null,contentType:null,borderBottomColor:"",showHeaderModel:!1,showColorSelectionModal:!1,showFinalPrivewModal:!1},this.handleChangeComments=this.handleChangeComments.bind(this)}UNSAFE_componentWillReceiveProps(e){const{UploadDataUrl:t,UploadDataUrlMessage:n,sampleTemplate:a}=e;if("success"===n){const{fileUrl:e,selectedUploadFileType:n}=this.state,a={...e[0]};Object.prototype.hasOwnProperty.call(a,n)&&(a[n]=t,this.setState({fileUrl:[a]})),this.handelLogoUpdate(t,n),this.props.resetNotificationsRedux(["templateUploadURl","templateUploadURlMessage"])}this.setState({sampleTemplateContent:a})}componentDidUpdate(e){if(this.props.html!==e.html||this.props.content!==e.content){const e=this.props.html||this.props.content;e&&e!==this.state.selectedContent&&this.setState({selectedContent:e,templateStateChange:!0})}this.props.selectedTemplateIndex!==e.selectedTemplateIndex&&void 0!==this.props.selectedTemplateIndex&&this.setState({selectedTemplateIndex:this.props.selectedTemplateIndex})}async handleChangeComments(e){if("done"===e.file.status||"error"===e.file.status){const t=e.file.size/1024/1024>20;if(t)return void c.message.error("File is to big, max 20mb");if(t)c.message.error("File is not supported");else{const t=e.file.originFileObj;this.setState({filename:t.name,filesize:t.size,file:t,fileType:e.file.type}),this.startUpload(t)}}}render(){const{addMoreFieldButtonVisible:e,showBottomLogo:t,templateStateChange:n,sampleTemplateContent:a=[],selectedTemplateIndex:l,showColorSelectionModal:i,filename:o,showFinalPrivewModal:p}=this.state,{uploadingImageLoading:h}=this.props,u=(new DOMParser).parseFromString(this.state.selectedContent,"text/html"),g=this.state.showDrawer?"show":"";return(0,f.jsxs)(d,{children:[(0,f.jsx)(c.Spin,{spinning:0===(null===a||void 0===a?void 0:a.length),tip:"Sample Template Loading .....",children:(0,f.jsx)("div",{className:"sample-container box-shadow-on marginB20",children:null===a||void 0===a?void 0:a.map(((e,t)=>(0,f.jsxs)("div",{className:"sample-template-box",children:[(0,f.jsxs)("label",{class:"custom-checkbox",children:[(0,f.jsx)("input",{checked:l===t,type:"checkbox"}),(0,f.jsx)("span",{class:"checkmark"})]}),(0,f.jsx)("div",{className:` ${e.template_name} sample-template-box-inner`,dangerouslySetInnerHTML:{__html:e.template_html}}),(0,f.jsxs)("div",{className:"text-center padding10",children:[(0,f.jsx)("p",{className:"template-text",children:e.template_name}),l===t?(0,f.jsx)("div",{className:"selectedBtn selectBtn",onClick:()=>this.setState({selectedTemplateIndex:-1}),children:"SELECTED"}):n?(0,f.jsx)(c.Popconfirm,{title:"All UnsavedChanges Lost Without Saving Template",okText:"YES",cancelText:"NO",onConfirm:()=>this.selectTemplate(t),children:(0,f.jsx)(c.Button,{className:"selectBtn",children:"SELECT"})}):(0,f.jsx)("div",{className:"selectBtn",onClick:()=>this.selectTemplate(t),children:"SELECT"})]})]},`selected-template-${t}`)))})}),""!==this.state.selectedContent&&(0,f.jsx)(c.Spin,{spinning:!0===h,tip:"Updating Your Template",children:(0,f.jsxs)("div",{className:"sample-previewer-section box-shadow-on",children:[(0,f.jsx)("div",{className:"preview-template-style",children:(0,f.jsx)("div",{className:"ql-editor template-preview-content",style:{width:"100%",padding:0},dangerouslySetInnerHTML:{__html:this.state.selectedContent}})}),(0,f.jsxs)("div",{className:"sample-template-controls",children:[(0,f.jsx)("div",{className:`customise-drawer ${g}`,children:(0,f.jsxs)("div",{className:"custom-drawer-content",children:[(0,f.jsxs)("div",{className:"drawer-header",children:[(0,f.jsx)("span",{className:"close-button",onClick:this.handleCloseDrawer,children:(0,f.jsx)(c.Icon,{class:"close-button",type:"close-circle"})}),this.state.showHeaderModel&&(0,f.jsx)(A,{html:u,dummyRequest:D,onChange:this.handleChangeComments,onClick:this.handleOnOpenDrawer})]}),(0,f.jsxs)("div",{className:"drawer-body",children:[(0,f.jsx)("div",{id:"demo"}),e&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(b.A,{previousContent:this.state.selectedContent,updateContent:this.updateContent})}),i&&(0,f.jsx)(v,{updateBgColor:this.updateBgColor})]})]})}),(0,f.jsxs)("div",{className:"marginTB16px",children:[u.querySelector(".logo")&&(0,f.jsx)("div",{className:"padding15 text-center",children:(0,f.jsx)(c.Radio.Group,{onChange:e=>this.selectImage(e.target.value,"logo"),children:[...this.selectFiledDataPopulate("logo")].map(((e,t)=>(0,f.jsxs)(c.Radio,{value:Object.values(e)[0],children:[(0,f.jsx)("label",{className:"fieldLabel",children:"Change Logo"}),(0,f.jsx)(r,{imageUrl:Object.values(e)[0]})]},`selected-filed${t}`)))})}),u.querySelector(".template-banner")&&(0,f.jsxs)("div",{className:"padding15",children:[(0,f.jsx)("div",{className:"newText",children:"Header Image"}),(0,f.jsx)(c.Upload,{name:"file",showUploadList:!1,multiple:!1,customRequest:D,onChange:e=>this.handleChangeComments(e),children:(0,f.jsxs)("div",{className:"upload-dummy-box",onClick:()=>this.handleOnOpenDrawer("header"),children:[(0,f.jsx)("p",{className:"newText2",children:o}),(0,f.jsx)("img",{className:"icon",src:m.mW,alt:"UPLOAD ICON"})]})})]}),(0,f.jsxs)("div",{className:"padding15",children:[(0,f.jsx)("div",{className:"newText",children:"Body Text"}),(0,f.jsx)(b.A,{previousContent:this.state.selectedContent,updateContent:this.updateContent})]}),(0,f.jsx)(v,{updateBgColor:this.updateBgColor}),u.querySelector(".template-bottom-logo")&&(0,f.jsx)("div",{className:"padding15 text-center",children:(0,f.jsx)(c.Radio.Group,{onChange:e=>this.selectImage(e.target.value,"footerlogo"),children:[...this.selectFiledDataPopulate("footerlogo")].map(((e,t)=>(0,f.jsxs)(c.Radio,{value:Object.values(e)[0],children:[(0,f.jsx)("label",{className:"fieldLabel",children:"Change Footer Logo"}),(0,f.jsx)(r,{imageUrl:Object.values(e)[0]})]},`footer-logo${t}`)))})}),(0,f.jsx)("div",{className:"padding15 text-center",children:(0,f.jsx)(c.Button,{className:"ant-btn-radius",onClick:()=>this.handleOnOpenDrawer("footer-details"),children:"Change Footer Details"})}),t&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:"padding15 text-center",children:(0,f.jsx)(c.Radio.Group,{onChange:e=>this.selectImage(e.target.value,"whatsappLogo"),children:[...this.selectFiledDataPopulate("whatsappLogo")].map(((e,t)=>(0,f.jsxs)(c.Radio,{value:Object.values(e)[0],children:[(0,f.jsx)("label",{className:"fieldLabel",children:"Change WhatsappLogo"}),(0,f.jsx)(r,{imageUrl:Object.values(e)[0]})]},`whatsappLogo${t}`)))})}),(0,f.jsx)("div",{className:"padding15 text-center",children:(0,f.jsx)(c.Radio.Group,{onChange:e=>this.selectImage(e.target.value,"phoneLogo"),children:[...this.selectFiledDataPopulate("phoneLogo")].map(((e,t)=>(0,f.jsxs)(c.Radio,{value:Object.values(e)[0],children:[(0,f.jsx)("label",{className:"fieldLabel",children:"Change Phone Logo"}),(0,f.jsx)(r,{imageUrl:Object.values(e)[0]})]},`phoneLogo${t}`)))})}),(0,f.jsx)("div",{className:"padding15 text-center",children:(0,f.jsx)(c.Radio.Group,{onChange:e=>this.selectImage(e.target.value,"emailLogo"),children:[...this.selectFiledDataPopulate("emailLogo")].map(((e,t)=>(0,f.jsxs)(c.Radio,{value:Object.values(e)[0],children:[(0,f.jsx)("label",{className:"fieldLabel",children:"Change Email Logo"}),(0,f.jsx)(r,{imageUrl:Object.values(e)[0]})]},`emailLogo${t}`)))})})]})]}),(0,f.jsx)("div",{className:"padding15 text-center marginT-auto",children:(0,f.jsx)(c.Button,{className:"ant-btn-radius fillColor",type:"primary",block:!0,onClick:this.handleOnToggleFinalPreview,children:"Save Changes"})})]})]})}),p&&(0,f.jsx)(s,{children:(0,f.jsxs)("div",{className:"modal",style:{width:"800px"},children:[(0,f.jsx)("div",{className:"preview ql-editor",dangerouslySetInnerHTML:{__html:this.state.selectedContent}}),(0,f.jsxs)("div",{className:"buttons",children:[(0,f.jsx)("div",{onClick:this.handleOnToggleFinalPreview,className:"button secondary",children:"EDIT"}),(0,f.jsx)("div",{onClick:this.handleSubmittingHtml,className:"button primary",children:"SAVE"})]})]})})]})}}const O=(0,p.connect)((e=>({sampleTemplate:e.Notifications.getTemplateData,UploadDataUrl:e.Notifications.templateUploadURl,uploadingImageLoading:e.Loading.UPLOAD_NOTIFICATIONS_TEMPLATE_ATTRIBUTE,UploadDataUrlMessage:e.Notifications.templateUploadURlMessage,sampleAttributesData:e.Notifications.topLevelAttributes,getPartnerProductTemplate:e.Partner.getPartnerProductTemplateData})),{getsampleTemplate:I,updatesampleTemplate:F,startUploadTemplate:j,getTopLevelAttributes:B,resetNotificationsRedux:L,resetNotificationCore:M})(U)},27806:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(80878);const l=n.n(a)().div`
    .ant-input {
        border-radius: 0;
    }
    .ant-form-item-required::before {
        display: none;
    }
    .ant-form-explain {
        font-size: 10px;
    }
    .ant-select-selection {
        border-radius: 0;
    }
    .ant-form-extra {
        font-size: 10px;
    }
    ${e=>{let{isBodyHtmlEmpty:t}=e;if(t)return"\n                    .mce-container {\n                        border-color: red !important;\n                    }\n                "}}
    .ant-form-item {
        margin-bottom: 0;
    }
    .react-tagsinput {
        height: 30px;
        display: flex;
        align-items: center;
    }
    .react-tagsinput--focused {
        border-color: #d9d9d9;
    }
    .delete-text {
        color: red !important;
        border-left: 1px solid #a9a9a9;
        margin-left: 10px;
        padding-left: 10px;
    }
    .params-field {
        margin:10px;
    }
`},7114:(e,t,n)=>{n.d(t,{P:()=>l});var a=n(80878);const l=n.n(a)().div`
    .trumbowyg-editor {
        ${e=>{let{isEmpty:t,isSubmit:n}=e;if(""===t&&n)return"\n                                border: 1px solid red;\n                            "}}
    }
`},16101:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(1502),l=n(67816),i=n(24952),o=n(39803),r=n.n(o),s=n(80878);const d=n.n(s)().div`
  .ql-editor {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    max-height: 500px;
    overflow-y: auto;
  }

  .ql-editor p {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .ql-editor a {
    word-break: break-all;
    overflow-wrap: anywhere;
  }

  .ql-container {
    overflow: hidden;
  }

  .ql-editor table {
    width: auto;
    max-width: 100%;
    border-collapse: collapse;
    table-layout: auto;
  }

  .ql-editor td,
  .ql-editor th {
    border: 1px solid #d9d9d9;
    min-height: 28px;
    padding: 6px 8px;
    vertical-align: top;
  }

  .ql-editor td p,
  .ql-editor th p {
    margin: 0;
  }

  .ql-toolbar .ql-formats button.ql-insertTable::before {
    font-size: 12px;
    line-height: 1;
  }

  .ql-insertTable {
    width: 28px !important;
  }

  .ql-insertTable::before {
    display: none !important;
  }

  .qlbt-operation-menu {
    z-index: 1001 !important;
  }
`;var c=n(99478),p=n(88204),m=n.n(p),h=n(78533),u=n(97418),g=n(91324),b=n(98131),x=n.n(b);const f=o.Quill.import("formats/font");f.whitelist=["Muli"],o.Quill.register(f,!0);const y=o.Quill.import("formats/image");o.Quill.register(class extends y{static create(e){const t=e&&"object"===typeof e?e.url:e,n=super.create(t);if(e&&"object"===typeof e){const{width:t,height:a}=e;t&&(n.setAttribute("width",t),n.style.width=`${t}px`),a&&(n.setAttribute("height",a),n.style.height=`${a}px`)}return n}static formats(e){const t={};return e.hasAttribute("width")&&(t.width=e.getAttribute("width")),e.hasAttribute("height")&&(t.height=e.getAttribute("height")),t}format(e,t){"width"!==e&&"height"!==e?super.format(e,t):t?(this.domNode.setAttribute(e,t),this.domNode.style[e]=`${t}px`):(this.domNode.removeAttribute(e),this.domNode.style[e]="")}},!0),x().register(),o.Quill.register({"modules/better-table":x()},!0);const v=["header","font","size","bold","italic","underline","strike","blockquote","list","indent","align","link","image","background","color","table-col","table-cell-line","table-cell","table-row","table"];o.Quill.import("ui/icons").insertTable='\n  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">\n    <rect class="ql-stroke" height="12" width="12" x="3" y="3" rx="1"/>\n    <line class="ql-stroke" x1="3" y1="9" x2="15" y2="9"/>\n    <line class="ql-stroke" x1="9" y1="3" x2="9" y2="15"/>\n  </svg>\n';var w=n(70579);const{startUploadTemplate:A,resetNotificationsRedux:C,resetNotificationCore:S}=c.A,E=l.Form.Item;const T=l.Form.create()((0,i.connect)((e=>({UploadDataUrl:e.Notifications.templateUploadURl,uploadingImageLoading:e.Loading.UPLOAD_NOTIFICATIONS_TEMPLATE_ATTRIBUTE,UploadDataUrlMessage:e.Notifications.templateUploadURlMessage})),{startUploadTemplate:A,resetNotificationsRedux:C,resetNotificationCore:S})((function(e){const{previousContent:t,updateContent:n,form:i}=e,o=(0,a.useRef)(),[s,c]=(0,a.useState)(""),[p,b]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),[A,C]=(0,a.useState)(null),S=(0,a.useMemo)((()=>function(e){let{setPendingImageFile:t,setIsModalVisible:n,message:a}=e;return{table:!1,clipboard:{matchVisual:!1},keyboard:{bindings:x().keyboardBindings},toolbar:{container:[[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{color:["#000000a6","custom-color"]},"link","image","insertTable"]],handlers:{color:function(e){"custom-color"===e&&(e=window.prompt("Enter Hex Color Code")),this.quill.format("color",e)},image:()=>{const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=async()=>{const l=e.files[0];l&&/^image\//.test(l.type)?(t(l),n(!0)):a.error("You could only upload images.")}},insertTable:function(){const e=this.quill.getModule("better-table");e&&e.insertTable(3,3)}}},"better-table":{operationMenu:{items:{unmergeCells:{text:"Unmerge cells"}}}}}}({setPendingImageFile:C,setIsModalVisible:y,message:l.message})),[C,y]),T=v;return(0,a.useEffect)((()=>{if(t){const e=(new DOMParser).parseFromString(t,"text/html").querySelector(".template-content");if(!e)return;const n=e.innerHTML;if(0!==n.trim().length){const e=n.trim();if(c(e),o.current){const t=o.current.getEditor();t.clipboard.dangerouslyPasteHTML(e),t.setSelection(t.getLength(),0)}}}}),[]),(0,a.useEffect)((()=>{0!==s.length&&n(s,"content")}),[n,s]),(0,w.jsxs)(l.Spin,{spinning:p,tip:"Updating Your Image",children:[(0,w.jsx)(d,{children:(0,w.jsx)(r(),{theme:"snow",value:s,onChange:e=>{c(e)},modules:S,formats:T,ref:o})}),(0,w.jsx)(l.Modal,{title:"Set Image Dimensions",visible:f,onOk:()=>{i.validateFields(((e,t)=>{e||((async(e,t)=>{if(!A)return;const n=o.current.getEditor(),a=new FormData;a.append("file",A),b(!0);try{var i,r;const l=await m().post(h.A.url.templateNotificationUpload,a,{headers:(0,u.Bs)()}),o=(null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.url)||`${g.Fm}/templates/service_center/pending_device_recevied_by_customer.png`,s=(null===(r=n.getSelection())||void 0===r?void 0:r.index)||0;n.insertEmbed(s,"image",{url:o,width:t,height:e}),n.setSelection(s+1,0),c(n.root.innerHTML)}catch(s){l.message.error("Failed to upload image")}finally{b(!1),C(null)}})(t.height,t.width),y(!1),i.resetFields())}))},onCancel:()=>{y(!1),C(null),i.resetFields()},okText:"Upload",cancelText:"Cancel",children:(0,w.jsxs)(l.Form,{layout:"vertical",children:[(0,w.jsx)(E,{label:"Height (px)",children:i.getFieldDecorator("height",{initialValue:"200",rules:[{required:!0,message:"Please enter height"},{pattern:/^\d+$/,message:"Please enter a valid number"}]})((0,w.jsx)(l.Input,{type:"number",placeholder:"Enter height"}))}),(0,w.jsx)(E,{label:"Width (px)",children:i.getFieldDecorator("width",{initialValue:"200",rules:[{required:!0,message:"Please enter width"},{pattern:/^\d+$/,message:"Please enter a valid number"}]})((0,w.jsx)(l.Input,{type:"number",placeholder:"Enter width"}))})]})})]})})))},12528:(e,t,n)=>{var a=n(91992),l=n.n(a);window.jQuery=l(),window.$=l()}}]);
//# sourceMappingURL=4887.27644fc3.chunk.js.map