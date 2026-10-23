(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[64],{1437:function(e,i,n){"use strict";n.r(i);var t=n(1),l=n(52),o=n(148),a=n(9),d=n(1152),s=n(35),r=n(11);const c=r.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,u=r.c.div`
  height: 100vh;
  width: 100%;
  background-image: url("https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/lazada/product_liability_vn/lazada_bg_gradient_mag.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px;
  gap: auto;
`,p=r.c.img`
  width: auto;
  height: 112px;
  margin-top: 48px;
`,v=r.c.div`
  visibility: ${e=>e.isNotLoading?"visible":"hidden"};
  .btn {
    &__wrapper {
      display: flex;
      flex-direction: column;
      padding: 8px 16px 8px 16px;
      gap: 8px;
      border-radius: ${e=>e.isOpen?"16px":"32px"};
      border: 1.5px solid #ffffff;
      min-width: 100px;
      transition-duration: 0.3s;

      p {
        font-family: Mulish;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        text-align: center;
        color: #ffffff;
        margin: 0px;
      }
    }
  }
`;var h=n(28),f=n(40),g=n(2);var m=function(e){const{isNotLoading:i}=e,n=Object(l.c)(),[o,a]=Object(t.useState)(!1),[d,s]=Object(t.useState)("vi"),r={vi:"Vietnamese",en:"English"},c=e=>{var i;s(e),i=e,n(h.a.changeLang(i)),a(!1)};return Object(t.useEffect)((()=>{const e=localStorage.lang;e&&s(e)}),[]),Object(g.jsx)(v,{isOpen:o,isNotLoading:i,children:Object(g.jsx)("div",{className:"btn__wrapper",onClick:()=>{o||a(!0)},children:o?Object(g.jsx)(g.Fragment,{children:f.z.map(((e,i)=>Object(g.jsx)("p",{onClick:()=>c(null===e||void 0===e?void 0:e.lang,null===e||void 0===e||e.countryCode),children:r[null===e||void 0===e?void 0:e.lang]},i)))}):Object(g.jsx)("p",{children:r[d]})})})};const b=r.c.div`
  height: 100%;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: Mulish;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    margin: 0px;
  }
  h4 {
    width: 70%;
    font-family: Mulish;
    font-size: 18px;
    font-weight: 800;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`,j=r.c.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 32px;
  h5 {
    font-family: Mulish;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    margin: 0px;
    font-size: 18px;
  }
`,x=r.c.div`
  margin-top: 32px;
  width: 100%;
  div {
    position: relative;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    padding: 28px 16px 12px 16px;
    gap: 8px;
    border-radius: 12px;
    border: none;
    font-size: 12px;
  }
  input:focus,
  input:not(:placeholder-shown) {
  }
  label.required::after {
    content: "*";
    color: red;
  }
  label {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #999999;
    transition: all 0.3s ease;
    pointer-events: none;
    background-color: transparent;
    font-family: Mulish;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    text-align: left;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 20px;
    left: 16px;
    font-size: 10px;
    background: transparent;
  }
  input:disabled {
    background: #64148c;
    color: #fff;
  }
  input:disabled + label {
    color: #fff;
  }
  input:disabled + label.required::after {
    color: #fff;
  }
`,O=r.c.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 32px;
  p {
    position: relative;
    vertical-align: middle;
  }
  p::after {
    content: "";
    position: absolute;
    animation: dots 1.5s steps(1) infinite;
  }
  div {
  }
  @keyframes dots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`;var y=n(250),k=n(67);var E=function(e){return Object(g.jsx)(b,{children:function(i,n){var t,l;let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(i){case"info":return Object(g.jsxs)(j,{children:[Object(g.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/lazada/product_liability_vn/shield.svg"}),Object(g.jsx)("h4",{children:Object(g.jsx)("b",{children:Object(g.jsx)(k.a,{id:null===o||void 0===o?void 0:o.package_id})})}),Object(g.jsx)("p",{children:Object(g.jsx)(k.a,{id:n})}),Object(g.jsx)("h5",{children:null===o||void 0===o?void 0:o.policy_no})]});case"error":return Object(g.jsxs)(j,{children:[Object(g.jsx)("h4",{children:Object(g.jsx)("b",{children:Object(g.jsx)(k.a,{id:"Error"})})}),Object(g.jsx)("p",{children:Object(g.jsx)(k.a,{id:n})})]});case"form":return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{children:Object(g.jsx)(k.a,{id:n})}),Object(g.jsxs)(x,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",id:"phone",placeholder:" ",value:null===o||void 0===o||null===(t=o.phone_no)||void 0===t?void 0:t.value,required:!0,disabled:e.isDisabled,onChange:i=>{const n=i.target.value.length>0;e.setFormInput({...null===e||void 0===e?void 0:e.formInput,phone_no:{value:i.target.value,isValid:n}})}}),Object(g.jsx)("label",{htmlFor:"phone",className:"required",children:Object(g.jsx)(k.a,{id:"No Handphone"})})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"email",id:"email",placeholder:" ",value:null===o||void 0===o||null===(l=o.email)||void 0===l?void 0:l.value,required:!0,disabled:e.isDisabled,onChange:i=>{const n=i.target.value.length>0;e.setFormInput({...null===e||void 0===e?void 0:e.formInput,email:{value:i.target.value,isValid:n}})}}),Object(g.jsx)("label",{htmlFor:"email",className:"required",children:Object(g.jsx)(k.a,{id:"Alamat Email"})})]})]})]});default:return Object(g.jsxs)(O,{children:[Object(g.jsx)("p",{children:Object(g.jsx)(k.a,{id:n})}),Object(g.jsx)(y.a,{size:"32px",isSpining:!0,color:"#fff"})]})}}(null===e||void 0===e?void 0:e.type,null===e||void 0===e?void 0:e.wording,null===e||void 0===e?void 0:e.data)})},_=n(946);const w=r.c.div`
  p,
  div {
    margin: 0;
    padding: 0;
  }
  p {
    font-family: Mulish;
    font-size: 10px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #ffffff;
  }
  button {
    width: 100%;
    margin-bottom: 16px;
    font-family: Mulish;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    color: #f01478;
    border-radius: 8px;
    border: none;
  }
  button:hover {
    color: #f01478;
  }
`;var z=function(e){const{step:i,moveNextStep:n,isSubmitted:t,isButtonVisible:l}=e;return Object(g.jsxs)(w,{children:[l&&Object(g.jsx)(_.default,{type:"default",size:"large",onClick:n,disabled:t&&i>=2,children:Object(g.jsx)(k.a,{id:1===i?"Selanjutnya":"Submit"})}),Object(g.jsx)("p",{children:Object(g.jsx)(k.a,{id:"Untuk bantuan lebih lanjut, silakan hubungi layanan pelanggan kami di Zalo OA: Pasarpolis VN"})})]})},D=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"84";const n=e.replace(/\D/g,"");return n.startsWith("0")?i+n.slice(1):n};const{resetReduxPolicy:N,tokenizedDetailEndorsement:S,authorisedEndorsement:P}=a.a;const L=d.default.create()((function(e){var i;const n=Object(s.j)(),l=Object(s.g)(),{getPolicyEndorsementDetailResult:o,policyEndorsement:a}=e,[d,r]=Object(t.useState)(null),[v,h]=Object(t.useState)(null),[f,b]=Object(t.useState)(""),[j,x]=Object(t.useState)(1),[O,y]=Object(t.useState)({phone_no:{value:"",isValid:!1},email:{value:"",isValid:!1}}),[k,_]=Object(t.useState)(!1),w={"lazadavn-msig-damageprotection":"Asuransi Perlindungan Kerusakan","lazadavn-msig-liability":"Asuransi Perlindungan Konsumen"},N=d&&(null===(i=Object.keys(d))||void 0===i?void 0:i.length)>0&&j<3;return Object(t.useEffect)((()=>{null!==n&&void 0!==n&&n.params&&(()=>{const{id:i,token:t}=n.params,l={query:{id:i,token:t}};e.tokenizedDetailEndorsement(l)})()}),[]),Object(t.useEffect)((()=>{3===j&&(()=>{var i,t,l,o;const{token:a,id:s}=n.params,r=(null===O||void 0===O||null===(i=O.phone_no)||void 0===i?void 0:i.value)||(null===d||void 0===d?void 0:d.phone_no),c=(null===O||void 0===O||null===(t=O.email)||void 0===t?void 0:t.value)||(null===d||void 0===d?void 0:d.email),u={phone_no:D(r),email:c};(null!==O&&void 0!==O&&null!==(l=O.phone_no)&&void 0!==l&&l.isValid||null!==d&&void 0!==d&&d.phone_no)&&(null!==O&&void 0!==O&&null!==(o=O.email)&&void 0!==o&&o.isValid||null!==d&&void 0!==d&&d.email)?(e.authorisedEndorsement({query:{internal_id:s,token:a},body:u}),_(!0)):(_(!1),x(2))})()}),[j]),Object(t.useEffect)((()=>{null!==a&&void 0!==a&&a.error?(_(!1),x(2)):k&&l.push("/")}),[a]),Object(t.useEffect)((()=>{if(o&&Object.keys(o).length>0){var e,i,n,t,a;if(null!==o&&void 0!==o&&o.endorsement&&(null===(e=Object.keys(null===o||void 0===o?void 0:o.endorsement))||void 0===e?void 0:e.length)>0)r({policy_number:null===o||void 0===o?void 0:o.InsurancePolicyNo,package_id:null===o||void 0===o?void 0:o.PackageCode,...null===o||void 0===o?void 0:o.endorsement}),y({email:{value:null===o||void 0===o||null===(i=o.endorsement)||void 0===i?void 0:i.email},phone_no:{value:null===o||void 0===o||null===(n=o.endorsement)||void 0===n?void 0:n.phone_no}}),_(!0),x(3),l.push("/");else r(null===o||void 0===o?void 0:o.Request),y({email:{value:null===o||void 0===o||null===(t=o.Request)||void 0===t?void 0:t.email},phone_no:{value:null===o||void 0===o||null===(a=o.Request)||void 0===a?void 0:a.phone_no}}),b(null===o||void 0===o?void 0:o.PolicyState);h(null===o||void 0===o?void 0:o.endorsement)}}),[o]),Object(g.jsxs)(u,{children:[Object(g.jsxs)(c,{children:[Object(g.jsx)(m,{isNotLoading:N}),Object(g.jsx)(p,{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/lazada/product_liability_vn/lazada_logo.svg"})]}),(()=>{var e,i;let n="loading",t="Memuat",l={policy_no:"",package_id:"",phone_no:{value:""},email:{value:""}};const o=d&&(null===(e=Object.keys(d))||void 0===e?void 0:e.length)>0;var a;if("CANCELLED"===f&&j<4)n="error",t="Kebijakan Anda tidak lagi aktif, sehingga kami tidak dapat melanjutkan permintaan Anda. Untuk dukungan, silakan hubungi kami";else if(1===j&&o)n="info",t="Nomor Polis Anda",l={policy_no:null===d||void 0===d||null===(a=d.policy_number)||void 0===a?void 0:a.toUpperCase(),package_id:w[null===d||void 0===d?void 0:d.package_id]};else if(2===j&&o){var s,r;n="form",t="Untuk melanjutkan proses pengajuan klaim, silakan lengkapi semua form di bawah ini",l={phone_no:{value:null===O||void 0===O||null===(s=O.phone_no)||void 0===s?void 0:s.value},email:{value:null===O||void 0===O||null===(r=O.email)||void 0===r?void 0:r.value}}}else 3===j&&(n="loading",t="Silakan tunggu sampai kami mengarahkan Anda ke Portal Pengajuan Klaim PasarPolis");return Object(g.jsx)(E,{type:n,wording:t,data:l,formInput:O,setFormInput:y,isDisabled:v&&(null===(i=Object.keys(v))||void 0===i?void 0:i.length)>0})})(),N&&Object(g.jsx)(z,{step:j,moveNextStep:()=>{x(j+1)},isSubmitted:k,isButtonVisible:"CANCELLED"!==f})]})}));i.default=Object(l.b)((e=>({getPolicyEndorsementDetailResult:e.Policy.tokenisedEndorsementDetail,policyEndorsementDetailLoading:e.Loading.TOKENIZED_ENDORSEMENT_DETAIL,policyEndorsementDetailError:e.Error.TOKENIZED_ENDORSEMENT_DETAIL,policyEndorsement:e.Policy.authorizedEndorsementData,policyEndorsementMessage:e.Policy.authorizedEndorsementDataMessage,policyEndorsementLoading:e.Loading.AUTHORIZED_ENDORSEMENT,policyEndorsementError:e.Error.AUTHORIZED_ENDORSEMENT})),{authorisedEndorsement:P,tokenizedDetailEndorsement:S,resetReduxPolicy:N})(Object(o.c)(L))}}]);
//# sourceMappingURL=64.45ec9cc2.chunk.js.map