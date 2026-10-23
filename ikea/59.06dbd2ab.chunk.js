(this.webpackJsonppolicies=this.webpackJsonppolicies||[]).push([[59],{1110:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));const i=e=>{var t,a,i,o,n,c,l,r,d,s,p,b,x,m,g,j,u,h,f,O,y,v,w,k,N,D,C,P,A;const S={};if(S.Name=(null===(t=e.request)||void 0===t||null===(a=t.customer_data)||void 0===a?void 0:a.name)||(null===e||void 0===e?void 0:e.name),S.ApplicationNo=e.app_no,S.Category={Code:null===e||void 0===e||null===(i=e.provider_package)||void 0===i||null===(o=i.package)||void 0===o||null===(n=o.product)||void 0===n?void 0:n.code,Name:null===e||void 0===e||null===(c=e.provider_package)||void 0===c||null===(l=c.package)||void 0===l||null===(r=l.product)||void 0===r?void 0:r.name},S.ExpiresAtObject={Time:null===e||void 0===e||null===(d=e.coverage_period)||void 0===d?void 0:d.end,Valid:"ACTIVE"===(null===e||void 0===e||null===(s=e.coverage_period)||void 0===s?void 0:s.status),CustomStatus:null===e||void 0===e||null===(p=e.coverage_period)||void 0===p?void 0:p.custom_status},S.Payments=[{CoverageEndDate:null===(b=e.coverage_period)||void 0===b?void 0:b.end,CoverageStartDate:null===(x=e.coverage_period)||void 0===x?void 0:x.start,Amount:(()=>{try{var t;const a=null===(t=e.payment_detail)||void 0===t?void 0:t.gross_premium;return a?Number(a.split(".")[0].split(",").join("")):a}catch(i){var a;return null===(a=e.payment_detail)||void 0===a?void 0:a.gross_premium}})()}],S.InternalID=null===e||void 0===e?void 0:e.reference_id,S.InsurancePolicyNo=null===e||void 0===e?void 0:e.insurance_policy_no,S.CreatedAt=(null===e||void 0===e?void 0:e.created_at)||(null===e||void 0===e?void 0:e.created_at),S.Benefits=null===e||void 0===e||null===(m=e.request)||void 0===m||null===(g=m.package_detail_response)||void 0===g||null===(j=g.benefit)||void 0===j?void 0:j.data.map((e=>e.title)),S.PartnerLogoSquare=null===e||void 0===e||null===(u=e.provider_package)||void 0===u||null===(h=u.provider)||void 0===h?void 0:h.logo_url,S.DocumentURL=null===e||void 0===e?void 0:e.document_url,S.ProductKey=null===e||void 0===e||null===(f=e.provider_package)||void 0===f||null===(O=f.package)||void 0===O||null===(y=O.product)||void 0===y?void 0:y.code,S.PackageCode=null===e||void 0===e||null===(v=e.provider_package)||void 0===v||null===(w=v.package)||void 0===w?void 0:w.code,S.PackageCodeSlug=null===e||void 0===e||null===(k=e.provider_package)||void 0===k||null===(N=k.package)||void 0===N?void 0:N.code,S.InsuranceProvider=null===e||void 0===e||null===(D=e.provider_package)||void 0===D||null===(C=D.provider)||void 0===C?void 0:C.code,S.PolicyType=null===e||void 0===e?void 0:e.additional_detail.policy_type,"offline"===(null===e||void 0===e||null===(P=e.provider_package)||void 0===P||null===(A=P.provider)||void 0===A?void 0:A.code)){const t=e.request,a="string"===typeof(null===t||void 0===t?void 0:t.package)?null===t||void 0===t?void 0:t.package:null===t||void 0===t?void 0:t.package_code;S.PackageCodeSlug=a,S.ProductKey=(null===t||void 0===t?void 0:t.product_key)||(null===t||void 0===t?void 0:t.product_code),S.InsuranceProvider=null===t||void 0===t?void 0:t.provider_code,S.PackageCode=a}return S},o=()=>{const{services:e=[]}=window.sessionStorage.getItem("service_list")||{};return!(!e||0===e.length)&&e.length>1}},1429:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),n=a(62),c=a(52),l=a(951),r=a(948),d=a(11),s=a(328);const p=d.c.div`
  min-height: 100vh;
  .profile-name{
    font-size: 16px;
    color: #000000;
  }
  .text-light {
      font-size: 14px;
      font-weight: lighter;
  }

  .text-bold {
    font-size: 14px;
    font-weight: bold;
  }

  .text-big-bold {
      font-size: 18px;
      font-weight: bold;
  }
  
  
  .text-sm-light {
    font-size: 12px;
    font-weight: lighter;
  }
  
  .policy-action-btns {
    margin-top: 14px;
  }
  .user-detail-card-box {
    margin: 14px 0;
    padding-left: 48px;
    padding-right: 48px;
    background-color: #ffffff;
  }
  .user-detail-card-margin {
    margin-right: 10px;
    margin-bottom: 0;
  }
  .user-detail-right-card {
    margin-bottom: 0;
    background-color: #ffffff;
  }
  .push-margin-bottom {
    margin-bottom: 100px;
  }
  .border-value::after {
    content: ' ';
    display: block;
    position: absolute;
    right: 0;
    height: 1px;
    background: #ffd500;
    width: 50px;
  }
  .display-mobile{
    display: none
  }
  .ant-tabs-nav-scroll{
    background-image: linear-gradient(to right, ${e=>e.theme.linearGradientFirstColor}, ${Object(s.a)("SECONDARY_COLOR","#0180c8")});
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
    background:transparent !important;
    border:none;
  }
  .icon-text-det{
    opacity: 0.6;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
  }
  .claim-link{
    cursor:pointer;
  }

  .claim-card {
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #dddddd;
  }
  .active-policy-bar{
    height: 10px;
  }
  .icon-calender{
    font-size: 16px;
    color: #000000;
    opacity:0.5;
    margin-right:5px;
  }
  .date{
    opacity: 0.6;
    font-size: 14px;
    color: #000000;
  }

  .policy-detail-button-container {
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;  
  }

  .initiate-claim-button {
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 #00000033;
    background-color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
    color: #FFF;
    margin-bottom: 14px;
    height: 40px;
    border: 1px solid ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
    cursor: pointer;
  }
  .initiate-claim-button:hover, .initiate-claim-button:focus {
    box-shadow: 0 2px 4px 0 #00000033;
    background-color: #ffffff;
    color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
    margin-bottom: 14px;
    border: 1px solid ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }
  .initiate-claim-button:hover > span, .initiate-claim-button:focus > span {
    color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }
  .initiate-claim-button span{
    font-family: 'Zilla Slab', serif !important;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
  }

  .back-button {
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #00000033;
    background-color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
    margin-bottom: 14px;
    width: unset;
    border: 1px solid ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }
  .back-button:hover, .back-button:focus {
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #00000033;
    background-color: #ffffff;
    color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
    margin-bottom: 14px;
    width: unset;
    border: 1px solid ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }
  .back-button:hover > span, .back-button:focus > span {
    color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }
  .back-button span{
    font-family: 'Zilla Slab', serif !important;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
  }

  .download-details{
    border-radius: 8px;
    background-color: #ffffff;
    height: 40px;
    color: #0180c8;
    border: solid 1px ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }

  .download-details:hover, .download-details:focus {
    box-shadow: 0 2px 4px 0 #00000033;
    background-color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
    color: #fff;
    margin-bottom: 14px;
  }
  
  .download-details span{
    font-family: 'Zilla Slab', serif !important;
    font-size: 16px;
    font-weight: 600;
    color: ${Object(s.a)("SECONDARY_COLOR","#0180c8")};
  }

  .download-details[disabled],
  .download-details.ant-btn-disabled,
  .download-details[disabled]:hover,
  .download-details.ant-btn-disabled:hover,
  .download-details[disabled]:focus,
  .download-details.ant-btn-disabled:focus {
    background-color: #f5f5f5 !important;
    border-color: #d9d9d9 !important;
    color: rgba(0, 0, 0, 0.25) !important;
    box-shadow: none !important;
    cursor: not-allowed !important;
  }

  .download-details[disabled] span,
  .download-details.ant-btn-disabled span {
    color: rgba(0, 0, 0, 0.25) !important;
  }
  .benefit-card{
    background-color: #ffffff;
    padding: 28px 80px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #dddddd;
  }
  .row-claim-list-card-empty{
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #dddddd;
  }
  .name-policy-holder-label{
    opacity: 0.7;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
  }
  .policy-detail-label{
    opacity: 0.7;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
  }
  .policy-detail-text{
    opacity: 0.7;
    font-size: 15px;
    color: #000000;
  }
  .benefit-text{
    opacity: 0.7;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .benefit-list{
    opacity: 0.7;
    font-size: 15px;
    line-height: 2.5;
    color: #000000;
  }
  .row-claim-list-header {
    margin: 20px;
    text-align: center;
  }
  .category{
    margin-left:5px;
    font-size: 12px;
    font-weight: bold;
    color: #000000;
  }
  .symbol-container{
    border-radius: 25px;
    background-color: #2d355d1a;
    padding: 3px 12px 5px 12px;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
    border-bottom: solid 4px #fec902 !important;
    font-size: 18px;
    color: #ffffff !important;
    line-height:34px;
    padding:0px 64px;
    height:auto;
  }
  .ant-tabs-tab-active{
    font-weight: bold !important;
  }
  .ant-tabs-nav div span {
    font-family: 'Zilla Slab', serif !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
    font-size: 18px;
    color: #ffffff !important;
    line-height:34px;
    padding:10px 64px;
    height:auto;
    border-bottom: solid 4px transparent;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container{
    height: auto !important;
  }
  .ant-card-extra {
    padding-top: 25px;
  }
  .policy-list-card {
    margin-top: 40px;
  }
  .icon-back {
    padding: 10px;
    margin-top: 25px;
  }
  .policy-Number{
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 8px;
  }
  .policy-Number-details{
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 13px;
    margin-top: 12px;
    padding-left: 5px;
  }

  .product-key{
    font-size: 15px;
    font-weight: bold;
    color: #455a64;
  }
  .product-key-details{
    opacity: 0.6;
    font-size: 15px;
    color: #000000;
    padding-left: 5px;
  }
  .date-container{
    padding-left: 5px;
  }
  .icon-container {
    width: 23.8px;
    height: 20px;
    opacity: 0.5;
    font-family: material;
    font-size: 16px;
    color: #000000;
    display: inline;
  }
  .sub-icon-container {
    align-items: center;
  }
  .loader {
    text-align: center;
    font-size: 80px;
  }
  .anticon{
    cursor:pointer;
  }
  li{
    margin-left:20px;
  }
  .no-style{
    float:none;
    line-height:1;
  }
  .btn-rincian, .btn-rincian-claim-detail {
    float:right;
    line-height:4.5;
    color:#ffd500;
    font-weight:500;
  }
  .btn-rincian:hover, .btn-rincian-claim-detail:hover {
    color:#ffd500;
    font-weight:500;
    cursor: pointer;
  }
  .right-content{
    float:right;
  }
  Button{
    /* width:95%; */
  }
  .button{
    background-color:#ffd500;
    color: black;
    border:none;
    border-radius:0px;
  }
  .button:hover{
    background-color:#ffd500;
  }
  .button:focus{
    background-color:#ffd500;
  }
  .button-right{
    background-color:#000;
    color: #ffd500;
    border:none;
    border-radius:0px;
  }
  .button-right:hover{
    background-color:#000;
  }
  .button-right:focus{
    background-color:#000;
  }
  .benefits-wrapper {
    margin-left: 50px;
  }
  .policy-detail-wrapper {
    border-style: solid;
    border-width: 0px 1px 0px 0px;
    border-color: #cccccc;
  }

  .logo-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background-color: #f6f6f6;
  }

  .logo-box img {
    width: 24px;
  }

  .policy-detail-header-package-item {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 12px;
    }

  .policy-detail-header-package-item-description {
      height: 48px;
  }

  .logo {
      max-width: 100%;
      max-height: 100%;
   }
  .policy-tab {
    max-width: 430px;
    width: 100%;
    position: sticky;
  }
   .policy-tab button{
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

   .policy-tab .active {
    color: #333;
   }

   .policy-tab.fixed {
    position: fixed;
    top: 48px;
    width: 100%;
    z-index: 1000;
   }

  @media screen and (device-aspect-ratio: 2/3) {
    .col-btn {
      margin-left: 0 !important;
    }
    .user-detail-card-margin {
      margin-bottom: 14px;
    }
    .user-detail-right-card {
      margin-bottom: 14px;
    }
  }
  @media screen and (device-aspect-ratio: 40/71) {
    .col-btn {
      margin-left: 0 !important;
    }
    .user-detail-card-margin {
      margin-bottom: 14px;
    }
    .user-detail-right-card {
      margin-bottom: 14px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
  margin-top:0;
  .initiate-claim-button,
  .initiate-claim-button:hover,
  .initiate-claim-button:focus
  {
    float: none !important;
    margin-left: auto  !important;
    margin-right: auto !important;
    display: block !important;
  }
  .user-detail-card-box {
    background-color: #f4f4f4;
    padding-left: 14px;
    padding-right: 14px;
  }
  .download-details{
    float: none !important;
    margin-left: auto  !important;
    margin-right: auto !important;
    display: block !important;
  }
  .user-detail-card-margin {
    margin-bottom: 14px;
  }
  .user-detail-right-card {
    margin-bottom: 14px;
  }
  .ant-tabs{
    background: #f4f4f4 !important;
  }
  .display-mobile{
    display: contents;
    margin-left: 15px;
  }
  .ant-tabs-nav-container-scrolling{
    padding: 0 !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
    border-bottom: 6px solid transparent !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
    border-bottom: 6px solid #ffd500 !important;
  }
  .ant-tabs-tab-next-icon ,ant-tabs-tab-prev-icon{
    display: none;
  }
  .col-btn{
    margin-top: 20px;
  }
  .ant-tabs-bar{
    margin-bottom: -28px !important;
  }
  .policy-card{
    margin-left: 15px;
    margin-right: 15px;
  }
    .col-breadcrumb {
      margin-bottom: 5px;
    }
    .row-icon {
      display: none;
    }
    .col-policy-id {
      border-bottom: 1px solid #eee;
    }
    .col-product-key {
      display: none;
    }
    .icon-container i {
      color: #000 !important;
    }
    .icon-product {
      display: block;
    }
    .col-date {
      display: flex;
    }
    .date-container {
      margin-right: 10px;
    }
    .col-detail {
      border-bottom: 2px solid #eee;
      padding: 5px 20px;
    }
    .col-detail p:first-child {
      margin-bottom: 8px;
    }
    .col-detail p:last-child {
      margin-bottom: 0;
    }
    .col-benefits {
      padding: 1px 20px;
      .ant-collapse{
        background:none;
        border:0;
      }
      
      .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        padding:0px 16px 12px 0px;
      }
      .ant-collapse-content{
        background:none;
        border:none;
      }
      .ant-collapse > .ant-collapse-item{
        border:none;
      }
    }
    .benefit-text {
      float:left;
      width:95%;
    }
    .arrow-icon{
      float:right;
    }
  }
  @media (max-width: 1000px) {
    .policy-card{
      margin-left: 15px !important;
      margin-right: 15px !important;
    }
    .icon{
      font-size: 14px;
      line-height: 1;
    }
    .active-policy-bar{
      margin-top:30px;
    }
    .ant-card-body{
        padding:15px;
    }
    .profile-name{
      background: #ffffff;
      margin-top: 35px;
      padding: 20px;
      margin-bottom: 0;
    }
    .ant-tabs-bar{
      padding-top:0 !important;
    }
  }

  @media only screen and (max-width: 768px) {

    .download-details , .initiate-claim-button {
      width: 160px !important;
    }

    .logo-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background-color: #f6f6f6;
  }

    .logo-box img {
      width: 20px;
      }
    
    }


  @media only screen and (max-width: 430px) {
    .policy-detail-button-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .initiate-claim-button {
      margin-bottom: 0px;
    }

    .download-details, .initiate-claim-button {
      width: 100% !important;
    }

    .text-sm-light {
    font-size: 10px;
  }

  .text-bold {
    font-size: 12px;
  }

  .logo-box {
    width: 32px;
    height: 32px;
  }

  .logo-box img {
    width: 16px;
  }
  }

  @media (max-width: 576px) {
    .policy-detail-wrapper {
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      border-color: #cccccc;
      margin: 0px 25px;
      width: 100vw;
    }
    .user-detail-card-margin {
      margin-bottom: 14px;
    }
    .user-detail-right-card {
      margin-bottom: 14px;
    }
    .policy-detail-wrapper div:first-child {
      margin-top: 25px;
    }
    .policy-detail-wrapper div:last-child {
      margin-bottom: 25px;
    }
    .benefit-card {
      padding: 10px 0;
      margin: 0px 5vw;
      // background: #f4f4f4;
    }
    .benefits-wrapper {
      margin: 25px;
    }
    .row-claim-list {
      margin: 0px 20px;
    }
  }

`,b=d.c.div`
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

    .policy-detail-header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      width: 100%;
      padding: 24px 0px 24px 0px;
    }
    
    .policy-detail-header-package {
      display: flex;
      max-width: 525px;
      width: 100%;
      gap: 23px;
      align-items: center;
    }

    @media only screen and (max-width: 768px)  {
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 40px;
        padding-bottom: 0;
        position: relative;
    }

    @media only screen and (max-width: 430px) {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 40px;
        padding-bottom: 0;
        position: relative;

      .policy-detail-header-content {
        display: block;
        justify-content: space-between;
        align-items: center;
        max-width: 430px;
        width: 100%;
        padding: 24px 0px 24px 0px;
      }

      .policy-detail-header-package {
        display: block;
        max-width: 328px;
        width: 100%;
        margin-bottom: 24px;
      }
    }
`,x=d.c.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .policy-detail-card{
    margin-top: 48px;
    max-width: 1200px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 18px;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #dddddd;
  }

  .policy-status-alert-active {
    background-color: #C8F0DC;
    border-radius: 8px;
    font-size: 16px;
    color: #009632;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    max-height: 68px;
    height: 100%;
  }

  .policy-status-alert-active p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
  
  .policy-status-alert-soon {
    background-color: #FAD2D2;
    border-radius: 8px;
    font-size: 16px;
    color: #DC0000;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    max-height: 68px;
    height: 100%;
  }

  .policy-status-alert-soon p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .policy-status-alert-expired {
    background-color: #EEEEEE;
    border-radius: 8px;
    font-size: 16px;
    color: #999999;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    max-height: 68px;
    height: 100%;
  }

  .policy-status-alert-expired p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .policy-detail-card-container {
    margin-top: 24px;
  }

  .policy-owner-items {
    display: flex;
    width: 67%;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .protection-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  
  .insurance-detail-items {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    row-gap: 12px
  }

  @media only screen and (max-width: 430px) {

    .policy-detail-card {
      margin-top: 24px;
    }

    .policy-owner-items {
      width: 100%;
    }
    .policy-status-alert-active {
      background-color: #C8F0DC;
      border-radius: 8px;
      font-size: 16px;
      color: #009632;
      font-weight: 800;
      display: block;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      max-height: 68px;
      height: 100%;
      margin-top: 12px;
  }

  .policy-status-alert-active p {
    font-size: 10px;
  }
  
  .policy-status-alert-soon {
    background-color: #FAD2D2;
    border-radius: 8px;
    font-size: 16px;
    color: #DC0000;
    font-weight: 800;
    display: block;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    max-height: 68px;
    height: 100%;
    margin-top: 12px;
  }

  .policy-status-alert-soon p {
    font-size: 10px;

  }

  .policy-status-alert-expired {
    background-color: #EEEEEE;
    border-radius: 8px;
    font-size: 16px;
    color: #999999;
    font-weight: 800;
    display: block;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    max-height: 68px;
    height: 100%;
    margin-top: 12px;
  }

  .policy-status-alert-expired p {
    font-size: 10px;
    }
  
  .policy-status-alert-expired p:last-child {
    font-size: 12px;
    }
    
  .policy-owner-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .protection-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .insurance-detail-items {
    display: grid;
    grid-template-columns: repeat(1, minmax(0,1fr));
    row-gap: 12px
  }
  
  }
`;var m=a(16),g=a(67),j=a(1150),u=a(3),h=a(1440),f=a(76),O=a(130),y=a(1110),v=a(1028);const w="policy-detail",k=e=>{let{policyId:t,isAgency:a,isSSO:i,enabled:o=!0}=e;const n=a||i;return Object(h.a)({queryKey:[w,t,n?"agency":"b2c"],queryFn:()=>n?(async e=>{const t=await O.a.getAgentPolicyDetails({payload:e}),a="string"===typeof t.data?JSON.parse(t.data):t.data;return Object(v.a)({...t,data:a})})(t):(async e=>{const t=await f.a.getPolicyDetails({payload:e});return Object(v.a)(t)})(t),enabled:o&&!!t,select:e=>n?{detailsData:Object(y.b)(e),rawData:e,isAgency:!0}:{detailsData:e,rawData:e,isAgency:!1}})};var N=a(1149),D=a(61),C=a.n(D);const P=(e,t)=>{const a=new Date(e),i=(new Date(t)-a)/864e5;return Math.floor(i)};var A=a(463);var S=a(29),_=a.n(S);const Y=(e,t)=>{const{InsurancePolicyNo:a,ApplicationNo:i}=e,o=""===a||"-"===a?i:a;return t?_.a.truncate(o,{length:"15"}):o};var E=a(946),z=a(2);class R extends i.Component{renderDownloadButton(){const{documentUrl:e,isDownloadDocument:t,downloadState:a,onGenerate:i}=this.props,o=a||(t&&e&&"NA"!==e?"ready":"disabled");return"generating"===o?Object(z.jsx)(E.default,{className:"download-details",loading:!0,disabled:!0,children:Object(z.jsx)(g.a,{id:"Buat Sertifikat"})}):"generate"===o?Object(z.jsx)(E.default,{className:"download-details",onClick:i,children:Object(z.jsx)(g.a,{id:"Buat Sertifikat"})}):"ready"===o?Object(z.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"no-style",children:Object(z.jsx)(E.default,{className:"download-details",children:Object(z.jsx)(g.a,{id:"Unduh Sertifikat Polis"})})}):Object(z.jsx)(E.default,{className:"download-details",disabled:!0,children:Object(z.jsx)(g.a,{id:"Unduh Sertifikat Polis"})})}render(){const{onCreateClaim:e,policyBtnContainerStyle:t}=this.props;return Object(z.jsx)(o.a.Fragment,{children:Object(z.jsxs)("div",{className:`${t}`,children:[Object(z.jsx)(E.default,{className:"initiate-claim-button",onClick:e,children:Object(z.jsx)(g.a,{id:"Buat Klaim"})}),this.renderDownloadButton()]})})}}var M=R,L=a(1020),F=a(1155);const T="Dokumen polis belum tersedia, silakan coba lagi",I=2e3,B=15,U="disabled",$="generating",K="ready",q="generate",G=e=>!(!e||"NA"===e),H=e=>new Promise((t=>setTimeout(t,e))),V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.Partner||e.PartnerName||""},Z=e=>"gojek"===String(e||"").trim().toLowerCase(),J=e=>{let{detailsData:t={},isAgency:a,onRefetchPolicyDetail:o}=e;const n=t.DocumentURL,c=!!a||t.UserViewDocumentURL,l=t.InternalID,r=V(t),d=Object(F.a)({mutationKey:["generate-policy-document"],mutationFn:async e=>{let{internalId:t,partner:a}=e;const i=await f.a.postEndorseConfigPolicy({internalId:t,partner:a});return Object(v.a)(i,[200,201])}}),s=Object(i.useRef)(!1),p=Object(i.useRef)(!1),[b,x]=Object(i.useState)(!1),m=(e=>{let{isAgency:t,userCanView:a,documentUrl:i,partner:o}=e;return t?G(i)?K:U:a?G(i)?K:Z(o)?q:U:U})({isAgency:a,userCanView:c,documentUrl:n,partner:r}),g=b?$:m,j=Object(i.useCallback)((async()=>{if(!s.current&&!p.current){p.current=!0,x(!0);try{const e=await o(),t=(null===e||void 0===e?void 0:e.InternalID)||l,a=V(e)||r;if(G(null===e||void 0===e?void 0:e.DocumentURL))return;if(!t||!a)return void L.default.error("Partner tidak ditemukan, tidak dapat membuat dokumen polis");if(!Z(a))return;await d.mutateAsync({internalId:t,partner:a});const i=await async function(e){let{intervalMs:t=I,maxAttempts:a=B,shouldCancel:i=(()=>!1)}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(let o=0;o<a;o+=1){if(i())return null;const n=await e();if(G(null===n||void 0===n?void 0:n.DocumentURL))return n;o<a-1&&await H(t)}return null}(o,{shouldCancel:()=>s.current});if(s.current)return;i||L.default.error(T)}catch(e){if(s.current)return;L.default.error((null===e||void 0===e?void 0:e.message)||T)}finally{p.current=!1,s.current||x(!1)}}}),[d,l,o,r]);return Object(i.useEffect)((()=>(s.current=!1,()=>{s.current=!0})),[l]),{documentUrl:n,downloadState:g,onGenerate:j,isDownloadDocument:c}};var Q=e=>{let{detailsData:t,isAgency:a,onCreateClaim:i,onRefetchPolicyDetail:o,policyBtnContainerStyle:n}=e;const{documentUrl:c,downloadState:l,onGenerate:r,isDownloadDocument:d}=J({detailsData:t,isAgency:a,onRefetchPolicyDetail:o});return Object(z.jsx)(M,{documentUrl:c,onCreateClaim:i,isDownloadDocument:d,downloadState:l,onGenerate:r,policyBtnContainerStyle:n})},W=a(41),X=a(312);var ee=e=>{let{detailsData:t,isAgency:a,onCreateClaim:i,onRefetchPolicyDetail:o}=e;return Object(z.jsx)(X.a,{children:Object(z.jsx)(b,{children:Object(z.jsxs)("div",{className:"policy-detail-header-content",children:[Object(z.jsxs)("div",{className:"policy-detail-header-package",children:[Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.j,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:a?t.Category.Name:Object(z.jsx)(g.a,{id:t.DisplayName})}),Object(z.jsx)("h1",{className:"text-bold",children:a?t.Benefits[0]:Object(z.jsx)(g.a,{id:t.PackageName})})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.u,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"ID Polis"})}),Object(z.jsx)("h1",{className:"text-bold",children:a?t.InsurancePolicyNo:Y(t,!1)})]})]})]}),Object(z.jsx)("div",{children:Object(z.jsx)(Q,{detailsData:t,isAgency:a,onCreateClaim:i,onRefetchPolicyDetail:o,policyBtnContainerStyle:"policy-detail-button-container"})})]})})})};var te=e=>{let{activeTab:t,isTabFixed:a,onTabChange:o}=e;const n=Object(i.useCallback)((()=>{o("Polis Detail")}),[o]),c=Object(i.useCallback)((()=>{o("Daftar Benefit")}),[o]);return Object(z.jsxs)("div",{className:"policy-tab "+(a?"fixed":""),children:[Object(z.jsx)("button",{type:"button",className:"Polis Detail"===t?"active":"",onClick:n,children:Object(z.jsx)(g.a,{id:"Policy Detail"})}),Object(z.jsx)("button",{type:"button",className:"Daftar Benefit"===t?"active":"",onClick:c,children:Object(z.jsx)(g.a,{id:"Manfaat"})})]})},ae=a(1401);const ie=e=>{var t;let{detailsData:a,isAgency:i,mobileTitle:o}=e;const{coverageEndDate:n,daysLeft:c}=((e,t)=>{var a,i;const o=C()().utc().format("YYYY-MM-DDTHH:mm:ss[Z]"),n=null===(a=e.Payments)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.CoverageEndDate;return{coverageEndDate:n,daysLeft:n?P(o,n):null}})(a);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h3",{className:"text-bold",children:Object(z.jsx)(g.a,{id:o?"Status Polis":"Status"})}),i?c<0||"EXPIRED"===(null===(t=a.ExpiresAtObject)||void 0===t?void 0:t.CustomStatus)?Object(z.jsxs)("div",{className:"policy-status-alert-expired",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status Polis"})}),Object(z.jsxs)("p",{children:["Telah Kadaluarsa Per : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]}):c<=7?Object(z.jsxs)("div",{className:"policy-status-alert-soon",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status"})}),Object(z.jsxs)("p",{children:[Object(z.jsx)(g.a,{id:"Akan Berakhir Pada"})," : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]}):Object(z.jsxs)("div",{className:"policy-status-alert-active",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status"})}),Object(z.jsxs)("p",{children:[Object(z.jsx)(g.a,{id:"Aktif Hingga"})," : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]}):c<0?Object(z.jsxs)("div",{className:"policy-status-alert-expired",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status Polis"})}),Object(z.jsxs)("p",{children:["Telah Kadaluarsa Per : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]}):c<=7&&"active"===a.policy_coverage_status?Object(z.jsxs)("div",{className:"policy-status-alert-soon",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status"})}),Object(z.jsxs)("p",{children:[Object(z.jsx)(g.a,{id:"Akan Berakhir Pada"})," : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]}):"active"===a.policy_coverage_status?Object(z.jsxs)("div",{className:"policy-status-alert-active",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status"})}),Object(z.jsxs)("p",{children:[Object(z.jsx)(g.a,{id:"Aktif Hingga"})," : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]}):Object(z.jsxs)("div",{className:"policy-status-alert-expired",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"Status Polis"})}),Object(z.jsxs)("p",{children:["Telah Kadaluarsa Per : ",C.a.utc(n).format("DD/MM/YYYY, h:mmA")]})]})]})};var oe=e=>{let{detailsData:t,isAgency:a,layout:i}=e;const o="mobile"===i,n=o?"Detail Pemegang Polis":"Data Pemegang Polis";return Object(z.jsxs)("div",{className:"policy-status-container",children:[Object(z.jsx)(ie,{detailsData:t,isAgency:a,mobileTitle:o}),Object(z.jsxs)("div",{className:"policy-detail-card-container",children:[Object(z.jsx)("h4",{className:"text-bold",children:Object(z.jsx)(g.a,{id:n})}),Object(z.jsxs)("div",{className:"policy-owner-items",children:[Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.v,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Nama Lengkap"})}),Object(z.jsx)("h1",{className:"text-bold",children:a?t.Name:t.CustomerName})]})]}),a?null:Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.t,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Nomor Telepon"})}),Object(z.jsx)("h1",{className:"text-bold",children:o?`+${t.MobileNo}`:`${t.MobileNo}`})]})]})]})]}),Object(z.jsxs)("div",{className:"policy-detail-card-container",children:[Object(z.jsx)("h4",{className:"text-bold",children:Object(z.jsx)(g.a,{id:"Detail Asuransi"})}),Object(z.jsxs)("div",{className:"insurance-detail-items",children:[Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.e,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Produk"})}),Object(z.jsx)("h1",{className:"text-bold",children:a?t.Category.Name:Object(z.jsx)(g.a,{id:t.DisplayName})})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.s,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Paket"})}),Object(z.jsx)("h1",{className:"text-bold",children:a?t.Benefits[0]:Object(z.jsx)(g.a,{id:t.PackageName})})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.u,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"ID Polis"})}),Object(z.jsx)("h1",{className:"text-bold",children:a?t.InsurancePolicyNo:Y(t,!1)})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.A,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Kategori"})}),Object(z.jsx)("h1",{className:"text-bold",children:Object(z.jsx)(g.a,{id:`${t.Category.Name}`})})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.n,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Partner"})}),Object(z.jsx)("h1",{className:"text-bold",children:a?"ppagency":t.PartnerName})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.w,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Jumlah Premi"})}),Object(z.jsx)("h1",{className:"text-bold",children:Object(z.jsx)(ae.a,{value:t.Payments[0].Amount,thousandSeparator:".",decimalSeparator:",",displayType:"text"})})]})]})]}),Object(z.jsxs)("div",{className:"policy-detail-card-container",children:[Object(z.jsx)("h4",{className:"text-bold",children:Object(z.jsx)(g.a,{id:"Protection Detail"})}),Object(z.jsxs)("div",{className:"protection-detail",children:[Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.d,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Tanggal Mulai Masa Perlindungan"})}),Object(z.jsx)("h1",{className:"text-bold",children:C.a.utc(t.Payments[0].CoverageStartDate).format("DD/MM/YYYY, h:mmA")})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.i,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Tanggal Akhir Masa Perlindungan"})}),Object(z.jsx)("h1",{className:"text-bold",children:C.a.utc(t.Payments[0].CoverageEndDate).format("DD/MM/YYYY, h:mmA")})]})]}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item",children:[Object(z.jsx)("div",{className:"logo-box",children:Object(z.jsx)("img",{src:W.f,alt:""})}),Object(z.jsxs)("div",{className:"policy-detail-header-package-item-description",children:[Object(z.jsx)("h1",{className:"text-sm-light",children:Object(z.jsx)(g.a,{id:"Periode Perlindungan"})}),Object(z.jsxs)("h1",{className:"text-bold",children:[P(t.Payments[0].CoverageStartDate,t.Payments[0].CoverageEndDate)," ",Object(z.jsx)(g.a,{id:"Hari"})]})]})]})]})]})]})]})};const ne=d.c.div`
    margin-top: 24px;
`,ce=d.c.div`
    border: solid #EEEEEE 1px;
    .accordion-button {
        background-color: #FFF;
        width: 100%;
        text-align: left;
        padding: 24px;
        padding-bottom: 0px;
        border: 0;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
    }
    
    .accordion-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .accordion-content {
        font-size: 14px;
        padding-top: 0px;
        padding: 24px;
        text-align: justify;
    }

    @media only screen and (max-width: 360px) {
        .accordion-title {
            font-size: 12px;
        }

        .accordion-content {
            font-size: 10px;
        }
    }
`,le=e=>{let{title:t,content:a,isOpen:i,onClick:o,isAgency:n}=e;return Object(z.jsxs)(ce,{children:[Object(z.jsx)("button",{onClick:n?null:o,className:"accordion-button",children:Object(z.jsxs)("div",{className:"accordion-title",children:[Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:t})}),!n&&(i?Object(z.jsx)("img",{src:W.b}):Object(z.jsx)("img",{src:W.a,width:18}))]})}),i&&Object(z.jsx)("div",{className:"accordion-content",children:Object(z.jsx)(g.a,{id:a})})]})},re=e=>{let{items:t,titleKey:a,contentKey:o,isAgency:n}=e;const[c,l]=Object(i.useState)(null);return Array.isArray(t)?Object(z.jsx)(ne,{children:t.map(((e,t)=>Object(z.jsx)(le,{title:n?e:e[a],content:n?"":e[o],isOpen:t===c,onClick:()=>(e=>{l(e===c?null:e)})(t),isAgency:n},t)))}):null};var de=e=>{let{detailsData:t,isAgency:a,benefitsList:i,showTitle:o}=e;const n=a?t.Benefits:(e=>null!==e&&void 0!==e&&e.length?e.flatMap((e=>((null===e||void 0===e?void 0:e.benefits)||[]).map((e=>({benefitName:e.benefit_name||"",description:e.description||"",amount:""}))))):[])(i);return Object(z.jsxs)("div",{className:"policy-detail-card",children:[o?Object(z.jsx)("h1",{className:"text-big-bold",children:Object(z.jsx)(g.a,{id:"Manfaat"})}):null,Object(z.jsx)(re,{items:n,titleKey:"benefitName",contentKey:"description",isAgency:a})]})},se=a(172),pe=a(82),be=a(980),xe=a(35);var me=e=>{let{message:t}=e;const a=Object(xe.g)(),o=Object(i.useCallback)((()=>{a.push("/")}),[a]);return Object(z.jsx)("div",{children:Object(z.jsx)(se.default,{className:"policy-list",style:{marginTop:"70px"},children:Object(z.jsx)(pe.a,{xl:12,lg:12,offset:6,children:Object(z.jsx)(se.default,{style:{marginBottom:"20px"},children:Object(z.jsxs)(pe.a,{xl:24,lg:24,children:[Object(z.jsx)(be.a,{style:{marginTop:"10px"},message:"",description:Object(z.jsx)(g.a,{id:t}),type:"error",showIcon:!0,closable:!0}),Object(z.jsx)("div",{style:{float:"right",marginTop:"20px"},children:Object(z.jsx)(E.default,{onClick:o,children:Object(z.jsx)(g.a,{id:"Kembali"})})})]})})})})})};const{resetReduxState:ge}=u.a;t.default=Object(c.b)((e=>({isDanaUser:e.User.isDanaUser})),{resetReduxState:ge})((e=>{var t;let{match:a,location:o,history:c,isDanaUser:d,resetReduxState:s}=e;const b=Object(l.a)(),u=Object(r.b)(),h=a.params.id,{isAgency:f,isSSOSession:O}=(e=>Object(i.useMemo)((()=>{const t=new URLSearchParams(e.search);let a,i=t.get("source");t.has("isAgency")&&(a="true"===t.get("isAgency")),null!==e&&void 0!==e&&e.state&&(i=e.state.source||i,void 0!==e.state.isAgency&&(a=e.state.isAgency));const o=Object(A.a)();return{source:i,isAgency:!(!a&&!o),isSSOSession:o}}),[e.search,e.state]))(o),{isTabFixed:y,isNarrowMobile:v}=(()=>{const[e,t]=Object(i.useState)(!1),[a,o]=Object(i.useState)("undefined"!==typeof window&&window.innerWidth<=430),n=Object(i.useCallback)((()=>{const e=document.querySelector(".policy-detail-header-content");if(!e)return;const a=e.getBoundingClientRect().bottom<=0;t((e=>e!==a?a:e))}),[]),c=Object(i.useCallback)((()=>{o(window.innerWidth<=430)}),[]);return Object(i.useEffect)((()=>(window.addEventListener("scroll",n),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",c)})),[n,c]),{isTabFixed:e,isNarrowMobile:a}})(),[D,C]=Object(i.useState)(!1),[P,S]=Object(i.useState)(!0),[_,Y]=Object(i.useState)("Polis Detail"),[E,R]=Object(i.useState)(null),{data:M,isLoading:L,isError:F,error:T,refetch:I}=k({policyId:h,isAgency:f,isSSO:O}),B=(null===M||void 0===M?void 0:M.detailsData)||{},U=null!==(t=null===M||void 0===M?void 0:M.isAgency)&&void 0!==t?t:f,$=U?B.PackageCodeSlug||B.PackageCode:B.PackageCodeSlug,K=B.ProductKey,q=(e=>e.Partner||e.PartnerName||"")(B),G=B.InsuranceProvider,{data:H}=Object(N.a)({packageCode:$,product:K,partner:q,insuranceProvider:G,isAgency:U,enabled:U?!(!$||!K):!!($&&K&&q)}),V=Object(i.useMemo)((()=>{const e=U?Object(m.o)(B,b):Object(m.s)(B,b);return{...e,partner:q||e.partner}}),[B,U,b,q]);Object(i.useEffect)((()=>()=>{u.removeQueries({queryKey:[w,h]})}),[h,u]),Object(i.useEffect)((()=>{!L&&B&&Object.keys(B).length&&P&&d&&"POP"===c.action&&S(!1)}),[L,B,P,d,c]);const Z=Object(i.useCallback)((()=>{C(!1),s()}),[s]),J=Object(i.useCallback)((()=>{(U?B.PackageCodeSlug||B.PackageCode:B.PackageCodeSlug)?C(!0):R(Object(z.jsx)(g.a,{id:"Maaf, anda tidak bisa melakukan klaim. Paket anda tidak ada"}))}),[B,U]),Q=Object(i.useCallback)((e=>{Y(e)}),[]),W=Object(i.useCallback)((async()=>{var e;return(null===(e=(await I()).data)||void 0===e?void 0:e.detailsData)||{}}),[I]),X=F?(null===T||void 0===T?void 0:T.message)||"Gagal untuk mengambil detail policy":null,ae=(null===H||void 0===H?void 0:H.benefitList)||[];return d?Object(z.jsx)(p,{children:D?Object(z.jsx)(j.a,{isAgency:U,closeBenefitModalPolicyList:Z,benefitQueryParams:V}):null}):Object(z.jsxs)(p,{children:[D?Object(z.jsx)(j.a,{isAgency:U,closeBenefitModalPolicyList:Z,benefitQueryParams:V}):null,Object(z.jsx)("div",{children:L?Object(z.jsx)("center",{children:Object(z.jsx)(n.default,{type:"loading",className:"loader",style:{marginTop:"100px"}})}):X?Object(z.jsx)(me,{message:X}):B&&Object.keys(B).length?Object(z.jsxs)("div",{children:[Object(z.jsx)(ee,{detailsData:B,isAgency:U,onCreateClaim:J,onRefetchPolicyDetail:W}),v?Object(z.jsx)(te,{activeTab:_,isTabFixed:y,onTabChange:Q}):null,v&&"Polis Detail"===_?Object(z.jsx)(x,{children:Object(z.jsx)("div",{className:"policy-detail-card",children:Object(z.jsx)(oe,{detailsData:B,isAgency:U,layout:"mobile"})})}):null,v&&"Daftar Benefit"===_?Object(z.jsx)(x,{children:Object(z.jsx)(de,{detailsData:B,isAgency:U,benefitsList:ae,showTitle:!1})}):null,v?null:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(x,{children:Object(z.jsxs)("div",{className:"policy-detail-card",children:[Object(z.jsx)("h1",{className:"text-big-bold",children:Object(z.jsx)(g.a,{id:"Policy Detail"})}),Object(z.jsx)(oe,{detailsData:B,isAgency:U,layout:"desktop"})]})}),Object(z.jsx)(x,{children:Object(z.jsx)(de,{detailsData:B,isAgency:U,benefitsList:ae,showTitle:!0})})]}),E]}):null})]})}))}}]);
//# sourceMappingURL=59.06dbd2ab.chunk.js.map