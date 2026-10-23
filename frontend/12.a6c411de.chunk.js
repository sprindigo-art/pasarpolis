(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[12,2],{359:function(e,a,t){"use strict";var i=t(0),n=t(69),o=t(70);const s=n.a.div`

  font-weight: ${o.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${o.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${o.a.fontWeight.bold}
  }
`;var r=t(4);var l=e=>{let{name:a,addressLines:t=[],phones:i=[],emails:n=[],viewMapUrl:o}=e;return Object(r.jsxs)(s,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-bold",children:a})}),t.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-white",children:e})},a))),Object(r.jsx)("br",{}),i.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},a))),n.map(((e,a)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},a))),Object(r.jsx)("br",{}),Object(r.jsx)("a",{target:"_blank",href:o,className:"text-yellow",children:"View Map"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"flex-container ",children:[Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const d=n.a.div`
  overflow: hidden;
  position: relative;
  z-index: 0;

  .slides-wrapper {
    width: 100%;
    display: flex;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    transform: translate3d(calc(${e=>-e.current} * (100% - 0px)), 0px, 0px);
    transition: transform 0.5s ease-out;
  }
  .slide {
    width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
  }

`;var c=e=>{let{slides:a=[1,2,3],current:t=0}=e;return Object(r.jsx)(d,{current:t,children:Object(r.jsx)("div",{className:"slides-wrapper flex-container",children:a.map(((e,a)=>Object(r.jsx)("div",{className:"slide",children:e},a)))})})};var p={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const m=n.a.div`
  .country-flag-container {
    overflow: auto;
  }
  li, .country-icon:not(:last-child) {
    margin-right : 1rem;
  }
  .country-icon {
    width: 30px;
    opacity: 0.5;
  }
  .country-icon.active {
    opacity: 1;
  }
`;var g=()=>{const[e,a]=Object(i.useState)(0);return Object(r.jsxs)(m,{children:[Object(r.jsx)("ul",{className:"flex-container country-flag-container",children:p.countries.map(((t,i)=>Object(r.jsx)("li",{className:"country-icon-li",children:Object(r.jsx)("div",{onClick:()=>a(i),children:Object(r.jsx)("img",{className:i===e?"country-icon active":"country-icon",src:t.countryIconImage})})},i)))}),Object(r.jsx)("div",{children:Object(r.jsx)(c,{slides:p.countries.map((e=>Object(r.jsx)(l,{...e},e.name))),current:e})})]})};var h={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const u=n.a.footer`
  .heading {
    font-weight: ${o.a.fontWeight.extrabold};
    font-family: ${o.a.font.primary};
    font-size: ${o.a.fontSize.xs};
    color: ${o.a.color.white};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .gap {
    gap: 40px;
  }

  .normal-text {
    font-weight: ${o.a.fontWeight.hairline};
    font-family: ${o.a.font.primary};
    font-size: ${o.a.fontSize.xs};
  }

  .margin-b-40 {
    margin-bottom: 40px;
  }

  .small-text {
    font-weight: ${o.a.fontWeight.hairline};
    font-family: ${o.a.font.primary};
    font-size: ${o.a.fontSize.xs2};
  }

  .logo-img img {
    width: 100%;
    max-width: 100px;
  }

  .others-list li {
    margin-bottom: 15px;
  }
  
  .footer-content {
    background-color: #707071;
    padding: 4vw 13vw;
    color: #fff;
    font-size: ${o.a.fontSize.xs};
    font-family: ${o.a.font.primary};
    @media (max-width: 720px) {
      padding: 24px;
    }
  }
  .about-us {
    width: 50%;
    @media (max-width: 720px) {
      width: 100%;
    }
  }
  .text-small {
    line-height: 1.79;
  }
  .social-link-container {
    margin-bottom: 2.5rem;
  }
  .social-link {
    margin-right: 30px;
    margin-top: 15px;
    & > img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
  }
  .others-container {
    width: 25%;
    @media (max-width: 720px) {
      width: 45%;
    }
  }
  .address-container {
    width: 25%;
    @media (max-width: 720px) {
      width: 100%;
    }
  }
  .flex-container {
    display: flex;
  }
  .justify-space-between {
    justify-content: space-between;
  }
  .justify-space-around {
    justify-content: space-around;
  }
  .footer {
    &__link {
      text-decoration: none;
      color: ${o.a.color.white} !important;
    }
  }
  .text-yellow {
    color:  ${o.a.color.primary} !important;
  }

  @media (max-width: 1100px) {
    .footer-content {
      padding: 3.5rem 0.5rem;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      padding: 24px;
    }
    .heading {
      margin-bottom: 15px;
    }
    .flex-direction-mobile {
      flex-direction: column;
    }
    .margin-b-40 {
      margin-bottom: 25px;
    }
    .others-list li {
      margin-bottom: 10px;
    }
  }
`;var b=t(357);a.a=()=>Object(r.jsx)(u,{children:Object(r.jsx)("div",{className:"footer-content",children:Object(r.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{className:"margin-b-40",children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(b.a,{id:"Informasi"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:h.information.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",href:e.link,children:Object(r.jsx)(b.a,{id:e.label})})})))})]})}),Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(b.a,{id:"Perusahaan"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:h.company.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(r.jsx)(b.a,{id:e.label})})})))})]})}),Object(r.jsxs)("div",{className:"address-container text-small",children:[Object(r.jsx)("h3",{className:"text-strong heading",children:Object(r.jsx)(b.a,{id:"Kantor kami"})}),Object(r.jsx)(g,{})]})]})})})},361:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"f",(function(){return o})),t.d(a,"g",(function(){return s})),t.d(a,"d",(function(){return r})),t.d(a,"e",(function(){return l})),t.d(a,"c",(function(){return d})),t.d(a,"b",(function(){return c})),t.d(a,"h",(function(){return p})),t.d(a,"i",(function(){return m}));var i=t(69);i.a.div`
  background-image: url(${e=>e.banner});
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;const n=i.a.div`
font-size: 15px;
font-family: Muli;
.ant-input-prefix img {
  width: 15px;
  height: 15px;
  object-fit: contain
}
.button-apply {
  border-radius: 5px;
  background-image: linear-gradient(to bottom, #fecc00, #f1b300);
  color: #000;
  cursor: pointer
}
.backButton {
  border-radius: 5px;
  background-color: #d5d5d5;
  color: #000;
  cursor: pointer
}
.btn {
  padding: 10px 30px;
    border: none;
    height: 40px;
}
.floatR {
  float: right;
}
.display-inline {
  display: inline-block;
}
.nav {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05) !important;
}
.bg-gray {
  background-color: #e5e5e54d;
}
.bg-white {
  background-color : #fff;
}
.head-section {
  box-shadow: inset 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    padding-top: 50px;
    padding-bottom: 50px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.paddingTB20LR50 {
    padding: 35px 50px;
}
.heading {
  font-size: 26px;
  font-weight: bold;
}
.text-yellow {
  color: #f1b300;
}
.job-description-tags {
  display:flex;
  justify-content: flex-end;
}
.technology-tag {
  padding-left: 1em;
}
.tag-name {
  opacity: 0.5;
  color: #000;
  vertical-align:middle;
}
.tag-image {
  height: 1em;
  width: 20px;
  object-fit: contain;
  vertical-align:middle;
}
.padding20 {
  padding: 20px;
}
.paddingLR20 {
  padding: 0 20px;
}
.marginB-45 {
  margin-bottom: 3em
}
.paddingTB10 {
  padding: 10px 0
}
.astrik {
  color: #c10000;
}
.custom-input {
  background-color: transparent !important;
  border: none !important;
  font-size: 13px!important;
}
textarea.custom-input.ant-input  {
  border: solid 1px #707070!important;
  color: #000 !important;
}
.custom-input, .custom-input .ant-input, textarea.custom-input.ant-input {
  border-radius: 5px;
  height: auto !important;
  border: solid 1px #707070;
  color: #000;
}
.custom-input-addon {
  height: 50px;
    padding: 13px;
    border-radius: 5px;
  border: solid 1px #707070;
  display: inline-block;
}
.custom-input-addon input{
  border: none;
  vertical-align: super;
    height: 20px;
}
.custom-input-addon img{
  height: 20px;
    width: 20px;
  object-fit: contain;
  margin-right: 10px;
}
.marginR-10 {
  margin-right: 10px;
}
.vertical-sub{
  vertical-align: sub;
}
.w100 {
  width: 100% ;
}
.bg-input-gray , .bg-input-gray input{
  background: #d5d5d5;
}
.marginB-20 {
  margin-bottom: 20px;
}
@media only screen and (max-width: 900px){
  .flex-container {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media only screen and (max-width: 768px) {
  .job-description-tags {
    justify-content: space-between;
      width: 100%;
  }
  .technology-tag {
    padding-left: 0;
  }
}
@media only screen and (max-width: 600px) {
  font-size: 12px;
  .paddingTB20LR50 {
    padding: 20px;
  }
  .paddingLR20{
    padding: 0 5px;
  }
  .floatR {
    float: none;
  }
  .display-inline {
    display: block;
  }
  .btn {
    display: block;
    width: 100%;
    border-radius: 30px;
    margin-bottom: 10px;
  }
  .marginB-45 {
    margin-bottom: 1em;
  }
  .paddingTB10 {
    padding: 10px 0 0 0;
    margin-bottom: 0;
  }
  .heading {
    font-size: 20px;
  }
 }
}
`,o=(i.a.div`
  background-image: url(${e=>e.banner});
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`,i.a.div`
  background-image: url(${e=>e.banner});
  background-size : cover;
  background-position: center;

  .sectionContainer {
    justify-content: center;
    height: 36vw;
    min-height: 500px;
    background: rgba(0, 0, 0, 0.5);
      color: #fff;
  }
  .main-content {
    margin-bottom: 33px;
  }
  .sectionContainer h2 {
    color: #fff;
    font-size: 35px;
  }
  .sectionContainer h1 {
    font-size: 72px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 0
    line-height: 1;
  }
  h3 {
    color:${e=>"mobile"===e.type?"#fadc00":""};
    text-align:${e=>"mobile"===e.type?"center":""};
  }
  p {
    font-size: 15px;
  }
  .flexContainer {
    display: flex;
    flex-direction: column;
  }
  .margin-auto {
    margin: auto;
  }
  .marginT-auto {
    margin-top: auto;
  }
  @media only screen and (max-width: 767px){
    .sectionContainer {
      height: 50vw;
      min-height: 400px;
    }

    .main-content {
      margin-bottom: 26px;
    }

    .sectionContainer h1 {
      font-size: 32px;
    }
    .sectionContainer h2 {
      font-size: 17px;
    }
  }
`),s=i.a.div`
  .paddingTB50 {
    padding: 50px 0;
  }
  .sectionDiv {
    padding: 20px 15%;
  }
  .text-alignment {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .home-banner2 {
    max-width: 500px;
    width: 100%;
  }
  h2 {
    font-size: 30px;
  }

  @media only screen and (max-width: 900px) {
    .mobile-order-2 {
      order: 2;
      border-bottom: 1px solid #ccc;
      padding-bottom: 50px;
    }
  }
  @media only screen and (max-width: 768px) {
    .sectionDiv {
      padding: 15px;
    }
    .paddingTB50 {
      padding: 10px 0 0 0;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
    .mobile-text-center {
      text-align: center;
    }
  }
`,r=i.a.div`
  .rowSection {
    display: flex;
    justify-content: center;
  }
  .h150 {
    height: 150px;
    max-height: 100%;
  }
  .h200 {
    height: 200px;
    max-height: 100%;
  }
  .h250 {
    height: 250px;
    max-height: 100%;
  }
  .h290 {
    height: 290px;
    max-height: 100%;
  }
  .h300 {
    height: 300px;
    max-height: 100%;
  }
  .h350 {
    height: 350px;
    max-height: 100%;
  }
  .h400 {
    height: 400px;
    max-height: 100%;
  }
  .h420 {
    height: 420px;
    max-height: 100%;
  }
  .w150 {
    width: 150px;
    max-width: 100%;
  }
  .w250 {
    width: 250px;
    max-width: 100%;
  }
  .w300 {
    width: 300px;
    max-width: 100%;
  }
  .w380 {
    width: 380px;
    max-width: 100%;
  }
  .w350 {
    width: 350px;
    max-width: 100%;
  }
  .w325 {
    width: 325px;
    max-width: 100%;
  }
  .w550 {
    width: 550px;
    max-width: 100%;
  }
  .padding30 {
    padding: 30px;
  }
  .paddingL25 {
    padding-left: 25%;
  }
  .img100 img {
    width: 100%;
  }
  .margin-L-auto {
    margin-left: auto;
  }
  .marginR-auto {
    margin-right: auto;
  }
  .marginL30 {
    margin-left: 30%;
  }
  .imgW250 img {
    width: 250px;
  }
  .imgW300 img {
    width: 300px;
  }
  .ant-carousel .slick-slide img {
    width: 100%;
    background: #000;
    object-fit: cover;
    border-radius: 20px;
  }
  .ant-carousel .slick-dots {
    bottom: 25px;
  }
  .flexContainer {
    display: flex;
  }
  p {
    line-height: 1 !important;
    font-size: 15px;
  }
  .paddingTB20LR50 {
    padding: 20px 50px;
  }
  .arrow {
    position: absolute;
    bottom: 25px;
    z-index: 1;
    color: #fff;
  }
  .arrow:hover {
    cursor: pointer;
  }
  .leftArrow {
    left: 15%;
  }
  .rightArrow {
    right: 15%;
  }
  .ant-carousel .slick-initialized .slick-slide {
    position: relative;
  }
  .paddingL-35 {
    padding-left: 35px;
  }
  .carousel-text {
    position: absolute;
    bottom: 0;
    padding: 50px 15px;
    color: #fff;
    left: 0;
    right: 0;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .text-uppercase {
    text-align: uppercase;
  }
  .text-center {
    text-align: center;
  }
  .colorWhite {
    color: #fff;
  }
  .padding10 {
    padding: 10px;
  }
  .paddingLB10 {
    padding: 0 0 10px 10px
  }
  .paddingRB10 {
    padding: 0 10px 10px 0
  }

  .displayInlineBlock {
    display: inline-block;
  }

  .marginR30 {
    margin-right: 30%;
  }

  .showText {
    position: relative;
  }

  .showText .hideText {
    display: none;
    position: absolute;
    top: 0;
    bottom: 7px;
    width: 100%;
    right: 0;
    left: 0;
    color: #fff;
    text-align: center;
    border-radius: 10px;
  }
  .shadow {
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px;
  }
  .team-card {
    position: relative;
    display: flex;
  }
  .team-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  .team-card .team-text {
    position: absolute;
    top: 0;
    border-radius: 20px;
    background-image: linear-gradient(
      179deg,
      rgba(254, 204, 0, 0) 1%,
      #ffd55b 99%
    );
    bottom: 0px;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    padding: 20px 15px;
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
  }
  .team-card .team-text h4 {
    font-size: 18px;
    font-weight: 800;
  }
  .team-card .team-text p {
    font-size: 14px;
  }
  .team-card .team-text .detail {
    display: none;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }
  .team-card .team-text .heading {
    display: block;
    // font-weight: 900;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }
  .team-card:hover .team-text .heading {
    display: none;
  }
  .team-card:hover .team-text .detail {
    display: block;
  }
  .team-card:hover .team-text {
    background-image: linear-gradient(
      181deg,
      rgba(254, 204, 0, 0.7) 99%,
      rgba(241, 179, 0, 0.7) 1%
    );
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }
  .marginT-10 {
    margin-top: 10px;
  }

  // swing animation keyframs

  @-webkit-keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  @keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  // tada animation keyframs

  @-webkit-keyframes tada {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes tada {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -3deg);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  // animation duration/ type and initiator

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .animated.delay-1s {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  .animated.delay-2s {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }

  .animated.delay-3s {
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  .animated.delay-4s {
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  .animated.delay-5s {
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
  }

  .animated.fast {
    -webkit-animation-duration: 800ms;
    animation-duration: 800ms;
  }

  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .animated.slow {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }

  .animated.slower {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
  }

  @media (print), (prefers-reduced-motion: reduce) {
    .animated {
      -webkit-animation-duration: 1ms !important;
      animation-duration: 1ms !important;
      -webkit-transition-duration: 1ms !important;
      transition-duration: 1ms !important;
      -webkit-animation-iteration-count: 1 !important;
      animation-iteration-count: 1 !important;
    }
  }

  .showText .hideText p {
    display: none;
    position: absolute;
    bottom: 20%;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }

  .showText:hover .hideText,
  .showText:hover .hideText p {
    display: block;
  }

  .showText .tilt {
    transform: rotate3d(1, 1, 1, 0deg);
    transition: 0.2s all ease-in-out;
  }

  .showText:hover .tilt {
    transform: rotate3d(0, 0, 1, -2deg);
    transition: 0.5s all ease-in-out;
  }

  .showText:hover .tada {
    -webkit-animation-name: tada;
    animation-name: tada;
  }

  .showText:hover .swing {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-name: swing;
    animation-name: swing;
  }

  .maxW100 {
    max-width: 100%;
  }
  .maxW75 {
    max-width: 75%;
  }
  .maxW375 {
    max-width: 375px;
  }
  .maxW650 {
    max-width: 650px;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: #fad200;
  }
  .ant-carousel .slick-dots li button {
    background: #fff;
    opacity: 1;
  }
  @media only screen and (max-width: 1200px) {
    .rowSection {
    }
    .team-card .team-text h4 {
      font-size: 20px;
    }
    .team-card .team-text p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    .rowSection {
      flex-direction: column;
    }
    .paddingL25 {
      padding-left: 0;
      text-align: center;
    }
  }
`,l=i.a.div`
  .sectionDiv {
    padding: 20px 15%;
  }
  .cardBox {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    position: relative
  }
  .padding10 {
    padding: 10px;
  }
  .text-center {
    text-align: center;
  }
  .colorYellow {
    color: #fadc00;
  }
  .flexBox {
    margin-top: auto;
    opacity: 0.95;
    background-image: linear-gradient(to bottom, #fae63c 50%, #f0aa3c 50%);
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .cardBox .flexBox {
    background-image: linear-gradient(to bottom,#ffffff00 0%,#f5d17314 40%,#f2b613 75%);
    top: 0;
  }
  .cardBox .card-text-position {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .cardBox .flexBox .heading {
    font-size: 20px;
    word-spacing: 4px;
    font-weight: 800;
  }
  .cardBox .flexBox .text {
    font-size: 14px;
  }
  .iconBox {
    position: absolute;
    top: -35px;
    left: calc(50% - 35px);
    padding: 10px;
    display: inline-flex;
  }
  .iconBox img {
    width: 50px;
    height: 50px;
    vertical-align: text-bottom;
    object-fit: contain;
  }
  p {
    line-height: 1 !important;
    font-size: 15px;
  }
  .cardBox .hide {
    display: none;
    position: relative;
    padding-top: 15px;
  }
  .cardBox:hover .hide {
    display: block;
    -webkit-animation: fadeinUp 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeinUp 2s; /* Firefox < 16 */
    -ms-animation: fadeinUp 2s; /* Internet Explorer */
    -o-animation: fadeinUp 2s; /* Opera < 12.1 */
    animation: fadeinUp 2s;
    }

    .cardBox .hoverHide {
        -webkit-animation: fadeinUp 1.2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeinUp 1.2s; /* Firefox < 16 */
    -ms-animation: fadeinUp 1.2s; /* Internet Explorer */
    -o-animation: fadeinUp 1.2s; /* Opera < 12.1 */
    animation: fadeinUp 1.2s;
    }

  .cardBox:hover .hoverHide {
    display: none;
  }
  .boxBg {
    display: flex;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 10px;
  }
  .boxBg h4 {
    margin: auto;
  }
  .positionR {
    position: relative;
  }
  .paddingTB15LR25 {
    padding: 35px 35px 20px 35px;
  }
  .paddingTB15LR25 p {
    text-align: justify;
  }
  .text-uppercase {
    text-transform: uppercase;
  }

  // fade in effect keyframs
  @keyframes fadeinUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 100%);
      transform: translate3d(0, 0, 100%);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadeinUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 100%);
      transform: translate3d(0, 0, 100%);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadeinUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 100%);
      transform: translate3d(0, 0, 100%);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadeinUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 100%);
      transform: translate3d(0, 0, 100%);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadeinUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 100%);
      transform: translate3d(0, 0, 100%);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    }

    // fade out effect animation keyframs
    @keyframes fadeOutUP {
    from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadeOutUP {
    from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadeOutUP {
    from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
  }

  /* Internet Explorer */
  @-ms-keyframes fadeOutUP {
    from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadeOutUP {
    from
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
  }

  @media only screen and (max-width: 768px) {
    .sectionDiv {
      padding: 15px;
    }
    .cardBox {
      border-radius: 20px;
      height: 400px;
    }
    .flexBox {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .ant-carousel .slick-dots {
      bottom: -12px;
    }
    .ant-carousel .slick-dots li.slick-active button {
      background: #fad200;
      background-radius: 20px;
    }
    .ant-carousel .slick-dots li button {
      background: #e5e5e5;
    }
  }
`,d=(i.a.div`
  background-image: url(${e=>e.banner});
  background-size: cover;
  margin: 50px 0;
  svg {
    width: 100%;
  }
  .yellowFill {
    fill: #fadc00 !important;
  }

  .cls-1 {
    fill: #78c8dc;
    stroke: #fff;
  }
  .cls-2 {
    fill: #fff;
  }
  .cls-3 {
    fill: #ecebeb;
  }
  .cls-4 {
    fill: #e67021;
  }
  .cls-5 {
    fill: #3b8733;
  }
  .cls-6 {
    fill: #bf051e;
  }
  .cls-7 {
    fill: #eff1f3;
  }
  .cls-8 {
    fill: #003371;
  }
  .cls-9 {
    fill: #efefef;
  }
  .cls-10 {
    fill: #cb0029;
  }
  .cls-11 {
    fill: #e61c25;
  }
  .cls-12 {
    fill: #ffc200;
  }

  .positionR {
    position: relative;
    max-width: 1200px;
    margin: auto;
    padding: 0 15px;
  }

  .address {
    background: #fff;
    border-radius: 10px;
    display: inline-block;
    max-width: 250px;
    padding: 10px;
    position: absolute;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
  }
  .address.indiaAddress {
    display: none;
    top: 24%;
    left: 32%;
  }

  .address.indonesiaAddress {
    display: none;
    bottom: 17%;
    left: 50%;
  }
  .address.thailandAddress {
    display: none;
    top: 32%;
    left: 45%;
  }
  .address.vietnamAddress {
    display: none;
    top: 36%;
    left: 50%;
  }
  .address.showAddress,
  .address:hover {
    display: inline-block !important;
  }
  .address p {
    line-height: 1.2 !important;
    font-size: 15px;
  }
  .address .title {
    color: #d6b400;
    text-transform: uppercase;
  }
  .address a {
    color: #78c8dc !important;
    text-decoration: underline;
  }
  .displayNone {
    display: none;
  }

  .descriptionHeading {
    position: absolute;
    width: 20%;
    bottom: 10%;
    left: 10%;
  }

  .main-heading {
    font-size: 1.5em;
  }
  @media only screen and (max-width: 1000px) {
    .descriptionHeading {
      position: static;
      width: 100%;
      padding: 15px;
      text-align: center;
    }
    .paddingMobileLR15 {
      padding: 0 30px;
    }
    .ant-select-selection__rendered {
      padding: 0 15px;
    }
  }
  @media only screen and (max-width: 768px) {
    .address,
    .address.showAddress {
      display: none !important;
    }
    .paddingMobileLR15 {
      padding: 0 15px;
    }
    .marginB10 {
      margin-bottom: 10px;
    }
    .ant-select {
      width: 100%;
      margin-bottom: 15px;
    }
    .ant-select-selection {
      padding: 5px 15px;
      height: 34px;
      border-radius: 5px !important;
      border: solid 1px #000000;
      color: #000;
    }
    .ant-select-arrow {
      color: #000;
    }
    .lineHeight-1 {
      line-height: 1 !important;
    }
  }
`,i.a.div`
  max-width: 1300px;
  margin: auto;
  .h60 {
    height: 60vh;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  .minimumReq {
    list-style-type: disc;
  }
  .padding50 {
    padding: 50px;
  }
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .displayInline {
    display: inline-block;
    padding: 0 5px;
    color: #000;
    flex: 1;
  }
  .ant-select-selection {
    padding: 5px 20px;
    height: auto;
    border-radius: 5px !important;
    border: solid 1px #000000;
  }
  .ant-input {
    height: 38px !important;
    border: 1px solid #000;
    border-radius: 5px;
  }
  .ant-select-selection:hover,
  .ant-select-selection:focus,
  .ant-input:hover,
  .ant-input:focus {
    border: solid 1px #000000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }
  .searchButton {
    height: 38px;
    border-color: #fadc00;
    border-radius: 5px;
    background-color: #fadc00;
    color: #000;
    padding: 0 25px;
  }
  .searchButton:hover,
  .searchButton:focus {
    background-color: #fadc00;
    border-color: #fadc00;
    color: #000;
  }
  .backButton,
  .backButton:hover,
  .backButton:focus {
    border-color: #e6e6e6;
    background-color: #e6e6e6;
    color: #000;
  }
  .marginB10 {
    margin-bottom: 10px;
  }
  .marginTB20 {
    margin: 20px 0;
  }
  .paddingR30 {
    padding-right: 30px;
  }
  .borderBottomGrayOn {
    border-bottom: 1px solid #999;
  }
  .box {
    padding: 20px 0;
    position: relative;
  }
  .paddingTB20 {
    padding: 20px 0;
  }
  .text-right {
    text-align: right;
  }
  .box h5 {
    margin: 0;
  }
  .box p {
    font-size: 15px;
    font-weight: 300;
    color: #999999;
  }
  .box .iconSize {
    position: absolute;
    right: 0px;
    top: 40%;
    font-size: 15px;
  }
  .paddingL0 {
    padding-left: 0;
  }
  .paddingR0 {
    padding-right: 0;
  }
  .grayText {
    color: #999999;
  }
  .floatRight {
    float: right;
  }
  .smallImg img {
    width: 15px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .jobDescPoint {
    list-style-type: disc;
    padding-left: 20px;
    max-height: 25vh;
    overflow: auto;
    font-size: 15px;
    margin: 10px 0;
  }
  .inputIcon {
    width: 12px;
  }
  .colorBlack {
    color: #000;
  }
  .paddingB20 {
    padding-bottom: 20px;
  }
  .marginB10 {
    margin-bottom: 10px;
  }
  .documentFlex {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .documentIcon {
    padding-left: 5px;
    color: #ffd500;
  }
  .formContainer {
    max-height: 35vh;
    overflow: auto;
  }
  @media only screen and (max-width: 768px) {
    .flexContainer {
      display: block;
    }
    .displayInline {
      padding: 10px 0;
    }
    .displayInline,
    .ant-select,
    .ant-input,
    .searchButton {
      width: 100%;
    }
    .padding50 {
      padding: 15px;
    }
    .paddingR30 {
      padding: 0 10px;
    }
    h5,
    h4,
    .mobileCenter {
      text-align: center;
    }
    .floatRight {
      float: none;
      display: block;
    }
    .formContainer,
    .jobDescPoint {
      max-height: 100%;
    }
  }
`,i.a.div`
  font-size: 17px;
  .sectionDiv {
    padding: 20px 15%;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 25px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 25px;
  }
  .font-size17 {
    font-size: 17px;
  }
  .head-shadow {
    box-shadow: inset 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  }
  .padding20 {
    padding: 20px;
  }
  .ant-breadcrumb-separator {
    display: none;
  }
  .ant-breadcrumb-link:after {
    content: '';
    color: #fff;
    transform: rotate(-134deg);
    display: inline-block;
    border-left: 2px solid #0080c8;
    border-bottom: 2px solid #0080c8;
    height: 8px;
    width: 8px;
    margin-left: 5px;
    margin-right: 10px;
    z-index: 0;
  }
  .ant-breadcrumb-link span {
    cursor: pointer;
  }
  .ant-breadcrumb-link span.text-yellow {
    cursor: default;
  }
  .ant-breadcrumb span:last-child .ant-breadcrumb-link:after {
    border: none;
  }
  .job-image img {
    max-width: 200px;
    max-height: 150px;
    object-fit: contain;
  }
  .ant-card.custom-card {
    border-radius: 10px;
    box-shadow: 5px 5px 12px 0 #0000001a;
    border: none;
  }
  .cursor-pointer.custom-card:hover {
    box-shadow: 5px 5px 12px 0 #00000080;
  }
  .bg-yellow {
    background-image: linear-gradient(to bottom, #fecc00, #f1b300);
  }
  .bg-white {
    background: #fff;
  }
  .borderR-50 {
    border-radius: 50px;
  }
  .padding10 {
    padding: 10px;
  }
  .paddingLR15 {
    padding: 0 15px;
  }
  .border-on {
    border-right: 1px solid #9e9d9d;
  }
  .side-image {
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  .input-custom {
    display: inline-block;
    width: 100%;
    padding-left: 60px;
    padding-right: 15px;
    border: none;
    text-align: left;
    color: #ccc;
    font-size: 17px;
    height: 40px !important;
    overflow: auto;
    text-overflow: ellipsis;
  }
  .mobile-search-auto {
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 5px;
  }
  .mobile-search-auto .input-custom {
    padding-left: 0;
    padding-right: 0;
  }
  button.input-custom.ant-dropdown-trigger {
    color: #333333;
  }
  .no-padding {
    padding: 0 !important;
  }
  .input-custom.ant-select-auto-complete.ant-select .ant-select-search--inline {
    margin-top: 3px;
  }
  .input-custom.ant-select-auto-complete.ant-select .ant-select-selection--single {
    height: 100%;
    width: 100%;
  }
  .input-custom input.ant-input.ant-select-search__field[value] {
    color: #000
  }
  .mobile-side-image {
    display: inline-block;
    text-align: center;
    padding-left: 10px;
  }
  .ant-select-auto-complete.ant-select .ant-input {
    border: none;
  }
  .input-custom:focus {
    border: none !important;
    box-shadow: none !important;
  }
  .position-absolute {
    position: absolute;
    left: 20px;
    width: 45px;
    z-index: 1;
    top: Calc(50% - 17px);
  }
  .flex-container {
    display: flex;
    align-items: center;
    overflow: auto;
    text-overflow: ellipsis;
  }
  .paddingL10 {
    padding-left: 10px;
  }
  .justify-space-between {
    justify-content: space-between;
  }
  .text-yellow {
    color: #f1b300 !important;
  }
  .marginB20 {
    margin-bottom: 20px;
  }
  .custom-list {
    padding-left: 12px;
    list-style: none;
  }
  .custom-list li {
    font-size: 17px;
  }
  .custom-list li::before {
    content: '\\2022';
    color: #f1b300;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  p.customP {
    font-size: 17px;
  }
  .card-no-padding .ant-card-body {
    padding: 0 !important;
  }
  .custon-hr {
    background-color: rgba(0, 0, 0, 0.1);
    height: 1px;
  }
  .padding5 {
    padding: 5px;
  }
  .display_inlineB {
    display: inline-block;
    vertical-align: middle;
  }
  .small-side-image {
    vertical-align: sub;
    margin-right: 5px;
  }
  .color-fade {
    color: #00000080;
  }
  .padding24 {
    padding: 24px;
  }
  .button-detail {
    background-image: linear-gradient(to right, #c8057f, #810759);
    color: #fff;
    border-bottom-left-radius: 10px;
  }
  .job-detail-button {
    padding: 15px;
    cursor: pointer
  }
  .button-apply {
    background-image: linear-gradient(to left, #fecc00 97%, #f1b300);
    color: #000;
    border-bottom-right-radius: 10px;
    cursor: pointer
  }
  .custom-list.line-height2 li {
    line-height: 2;
  }
  .custom-list2 {
    padding: 20px 25px;
    list-style: disc;
  }
  .custom-list2 li {
    color: #999999;
    line-height: 2;
  }
  .btn {
    border-radius: 5px;
    padding: 15px 25px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer
  }
  .btn-block {
    display: block;
    width: 100%;
  }
  .btn-apply {
    background-image: linear-gradient(to bottom, #fecc00, #f1b300);
    box-shadow: none;
    border: none;
  }
  .small-side-image {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  .jobDetail-main-image {
    width: 170px;
    height: 135px;
    object-fit: contain;
  }
  .smaller-side-image {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 5px;
  }
  .vertical-middle {
    vertical-align: middle;
  }
  .enter-button {
    width: 100%;
    margin: auto;
    vertical-align: top;
    border: none;
  }
  .enter-button .small-side-image {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  .searchbar-container {
    z-index: 1051;
    box-shadow: 5px 5px 12px 0 #0000001a;
  }
  .positionR {
    position: relative;
  }
  .display-flex {
    display: flex;
  }
  .flex4 {
    flex: 1;
  }
  .flex3 {
    flex: 0.7;
  }
  .flex1 {
    flex: 0.1;
  }
  .display-mobile {
    display: none;
  }
  .filter-button img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  .see-more-box {
    padding: 7px 20px;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.09);
    border-radius: 30px;
  }
  .bottom-arrow {
    background-image: linear-gradient(to bottom, #fecc00, #f1b300);
    padding: 10px 13px;
    border-radius: 50%;
    margin-right: -20px;
    margin-left: 15px;
  }
  .bottom-arrow:after {
    content: '';
    color: #fff;
    transform: rotate(-45deg);
    display: inline-block;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    height: 10px;
    width: 10px;
  }
  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .body-flex .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .marginT-auto {
    margin-top: auto;
  }
  .paddingLR50 {
    padding: 15px 50px;
  }
  .no-paddingT {
    padding-top: 0;
  }
  .no-paddingB {
    padding-bottom: 0;
  }
  .flex-direction-column {
    flex-direction: column;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-disable {
    cursor: not-allowed;
  }
  .fadded-effect {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    trasition: all 0.3s;
  }
  .card-disabled {
    background: rgba(0, 0, 0, 0.1);
  }
  .flex-no-vacancy {
    width: 100%;
    flex-direction: column;
    min-height: 50vh;
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 15px;
  }
  .flex-no-vacancy img {
    max-width: 250px;
    margin-bottom: 20px;
  }
  .mobile-text-center {
    display: flex;
  }
  @media only screen and (max-width: 850px) {
    .sectionDiv,
    paddingLR50 {
      padding: 15px;
    }
  }
  @media only screen and (max-width: 767px) {
    .mobileDesignFix {
      flex-direction: column;
      text-align: center;
    }
    font-size: 13px;
    .padding20 {
      padding: 10px;
    }
    .mobile-direction {
      flex-direction: column;
    }
    .display-desktop {
      display: none !important;
    }
    .display-mobile {
      display: flex;
    }
    .small-side-image {
      width: 26px;
      height: 26px;
    }
    .position-absolute {
      top: Calc(50% - 13px);
    }
    .padding10 {
      padding: 5px;
    }
    .borderR-50 {
      border-radius: 8px;
    }
    .searchbar-container {
      justify-content: space-between;
    }
    .align-center {
      align-items: center;
    }
    .no-mobile-padding {
      padding: 0;
    }
    .sectionDiv {
      padding: 10px 5px;
    }
    .jobDetail-main-image {
      width: 100px;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    p,
    .font-mobile-13,
    .custom-list li {
      font-size: 13px;
    }
    .mobile-flex {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: self-start;
    }
    .mobile-text-center {
      text-align: center;
    }
    .mobile-round-button {
      border-radius: 100px;
    }
    .ant-carousel .slick-dots li button {
      border-radius: 10px;
      background-color: #e5e5e5;
    }
    .ant-carousel .slick-dots li.slick-active button {
      background-color: #fad200;
    }
    .mobile-marginB-30 {
      margin-bottom: 30px;
    }
    .custom-card.mobile-marginB-30 .ant-card-body {
      padding: 15px !important;
    }
    .custom-card.mobile-marginB-30 img {
      display: inline-block !important;
    }
    .floatR {
      float: right;
    }
    .flex-no-vacancy img {
      max-width: 150px;
    }
  }
`),c=i.a.div`
  background-color: #e5e5e54d;
  font-size: 15px;
  padding: 30px 70px;
  .marginT70 {
    margin-top: 70px;
  }
  .marginB70 {
    margin-bottom: 70px;
  }
  .social-media-icon {
    display: flex;
    justify-content: space-between;
  }
  .social-media-icon img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
  .small-side-image {
    width: 10px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: baseline;
  }
  .main-image img {
    max-width: 215px;
    max-height: 175px;
    object-fit: contain;
  }
  .custom-card2 {
    border-radius: 10px;
    border: solid 1px #707070;
  }
  .borderR-5 {
    border-radius: 5px;
  }
  @media only screen and (max-width: 900px) {
    padding: 30px 30px;
  }
  @media only screen and (max-width: 768px) {
    background-color: #fff;
    padding: 5px;
    .marginB70 {
      margin-bottom: 10px;
    }
    .marginT70 {
      margin-top: 10px;
    }
  }
`,p=i.a.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .font20 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .banner {
    width: 100%;
    height: 30vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .no-paddingB {
    padding-bottom: 0 !important;
  }
  .align-text {
    height: 30vh;
    display: flex;
    align-items: flex-end;
  }
  .marginT-auto {
    margin-top: auto;
  }
  @media only screen and (max-width: 768px) {
    .mobile-padding20 {
      padding: 30px 20px;
    }
    .mobile-order3 {
      order: 3;
    }
    .mobile-bg-yellow {
      background-image: linear-gradient(to bottom, #fecc00, #f1b300);
    }
    .btn-back {
      border-radius: 50px;
      border: solid 2px #ffffff;
      padding: 15px;
    }
  }
`,m=i.a.div`
  background-image: url(${e=>e.banner});
  background-size: cover;
`,g=(i.a.div`
  background-image: url(${e=>e.banner});
  background-size: contain;
  background-repeat: no-repeat;
`,i.a.div`
  // fade effect keyframs
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // fadeInUp effect keyframs

  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .loading {
    opacity: 0;
  }

  .loaded {
    animation: fadeInUp ease-in-out 1;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-duration: 1.2s;
    animation-delay: 0.5s;
  }
  // .LazyLoad {
  //   min-height: 100px;
  // }

  .section-3-placeholder {
    height: 1200px;
  }

  @media (max-width: 768px) {
    .section-3-placeholder {
      height: 624px;
    }

    .section-mobile-placeholder {
      height: 473px;
    }
  }
  
`);a.j=g},363:function(e,a,t){"use strict";t.d(a,"f",(function(){return i})),t.d(a,"a",(function(){return n})),t.d(a,"d",(function(){return o})),t.d(a,"e",(function(){return s})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return l})),t.d(a,"g",(function(){return d}));const i={mainBanner:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career_page_main_banner-2.jpg",indonesia:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",vietnam:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",thailand:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",india:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",country:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/country-icon.png",category:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/category-icon.png",search:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/search-job-icon.png",enter:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/enter-icon.png",business:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/business_job.png",technology:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/technology-icon.png",jobType:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/job-type-icon.png",location:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/location-icon.png",facebook:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/facebook-icon-yellow-white.png",twitter:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/twitter-icon-yellow-white.png",emailYellow:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/email-icon-yellow-white.png",whatsapp:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/whatsapp-icon-yellow-white.png",Banner:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thankyou-banner.png",filter:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/filter-icon.png",share:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/share-icon.png",careerBannerHome3:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career-banner-3.jpg",careerCard1:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card1_v2.png",careerCard2:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card2_v2.jpg",careerCard3:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card3_v2.png",careerCard4:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card4_v2.png",careerCard5:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card5_v2.png",careerCard6:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card6_v2.jpg",careerCard7:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card7_v2.png",careerCard8:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card8_v2.png",careerCard9:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/career_card9_v2.jpg",work1:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/careerCard1.png",work2:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/careerCard2.png",work3:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/careerCard3.png",work4:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/careerCard4.png",work5:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career/careerCard5.png",division2:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/operations-logo.png",division4:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/marketing-logo.png",division5:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/hr-logo.png",division6:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/finance-logo.png",division7:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/agency-logo.png",carousel1:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/DHRISTI.jpg",carousel2:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/WULAN.jpg",carousel3:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/BISMO.jpg",carousel5:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/Sampoerna.jpg",SelectedIcon:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/selectedContent.png",portfolio:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/portfolio.png",jobTime:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/job-time.png",placeTag:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/place-tag.png",globe:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/globe-icon.png",user:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/user-outline-icon.png",email:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career-email.png",phone:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/career-personal.png",noVacancyIcon:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/no-vacancy-icon.png"},n={heading:"Buat Perubahan Yang Bermakna",subHeading1:"PasarPolis tidak hanya terbatas untuk melindungi kamu, kami juga menjadikan kamu lebih baik. Kami percaya proteksi kami, yang digunakan oleh jutaan orang, merubah segala aspek hidup mereka menjadi lebih positif. Mulai dari pergi ke kantor setiap pagi yang bebas khawatir, belanja online yang aman untuk mendukung passion kamu, atau bahkan liburan yang bebas stress.",subHeading2:"Kami mencari kamu! Yang menginginkan perubahan dan membawa perubahan yang bermakna. Bersama dengan teknologi, kita akan mendemokratisasi asuransi untuk bisa diakses semua, supaya semua orang bisa berlari kencang menuju mimpi mereka."},o=[{logo:i.technology,text:"Technology",no_positions:8},{logo:i.business,text:"Business",no_positions:2},{logo:i.division5,text:"Agency",no_positions:2},{logo:i.division2,text:"Operations",no_positions:1},{logo:i.division5,text:"Human Resources",no_positions:1},{logo:i.division5,text:"Legal",no_positions:0},{logo:i.division4,text:"Marketing Communication",no_positions:0},{logo:i.division6,text:"Finance",no_positions:0}],s=[{logo:i.technology,category:"Technology",positionsArray:[{position:"Product Head",text:"Head of Product will lead multiple Product Managers for one of our verticals",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Head of Product will lead multiple Product Managers for one of our verticals, to drive and manage the entire software product lifecycle: concept, development sprints, launch, features to sustain growth. You will be reporting to the CTO and working very closely with each business owners\u2019 verticals & C-Levels to deliver on time software updates to support our fast-growing businesses. On the other side, you need to be able to communicate engineering requirements to each agile pod to make sure the right product is delivered on time. You will own all products within your vertical, including formulating and executing product roadmap and strategy that are aligned with the company\u2019s vision and ongoing business processes. Team building will also be important as you will need to hire, lead, manage and mentor a world class team of product managers."],minimumQalification:["At least 7+ years of total experience, of which at least 2-3 years should be in a leadership position (Lead/Head/etc).","Bachelor\u2019s degree in computer science, engineering, or other technical field.","Excellent analytical and problem-solving skills and intuition of user behaviour.","Data driven approach to decision making.","Excellent written and verbal English communication.","Highly entrepreneurial self-starter and manager/coach.","Ability to travel internationally to meet customers, technology partners, etc.","Strong blend of analytical, decision-making and creative problem-solving skills."],requiredSkills:["Analytical","Data-driven","Entrepreneurial"]},{position:"UI/UX Designer",text:"Understand user as well as team/company needs and challenges, then find the solutions based on those challenges",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Understand user as well as team/company needs and challenges, then find the solutions based on those challenges.","Frame the context before recommending solutions, asking questions to clarify objectives at every sign of confusion, yet comfortable with approaching complex, ambiguous issues.","Able to coordinate and prioritize daily activities and conduct appropriate actions based on the priority list.","Play as a user\u2019s advocate - explaining challenges and ideations, as well as the proposed solution beneficiaries - educating and getting stakeholder buy-in for its practice.","Generate & deliver actionable insights such as user flows, wireframes, high fidelity designs and clickable prototypes, based on research and ideation results as supporting documents that inform and influence internal teams and management think about our users in a holistic way.","Conduct usability tests to validate designed solutions/prototypes, create test reports and analyze the outcomes for future improvements.","Collaborate with UX researchers, stakeholders, product managers, other designers and engineers from different divisions in consuming research and ideation results based on the user\u2019s perspective, ensuring that insights are understood and properly applied."],minimumQalification:["A self-starter. Able to work with minimal supervision, flexible to switch rapidly between different projects and manage them in a timely manner.","Highly passionate in user experience, user interface, and user interaction design.","Fluency in Indonesian and English language in communicating and presenting thoughts and ideas, composing engaging presentations and intuitive visualization to illustrate important points.","Two years of experience working as a UI/UX designer in a team, and at least had two high scoped projects shown in the design portfolio that shows UI/UX design activities.","Familiar with design systems in designing to generate design templates to be used by engineers.","Bonus point: Familiar and have conducted design thinking activities in gaining informative and usable insights, and can point out what techniques should be used and what questions need to be asked to uncover specific insights.","Bonus point: Familiar with agile methodology to ensure fluency in collaborating with other team members or divisions."],requiredSkills:["Agile methodology"]},{position:"Product Manager",text:"Assist senior management in the formulation of the company\u2019s product strategy",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Assist senior management in the formulation of the company\u2019s product strategy","Translate user journey into a logically-sequenced product and feature roadmap","Implement and lead a unified product roadmap by managing internal and external resources across countries and functions, in coordination with technology, sales and marketing","Manage the entire product lifecycle for each product, from consumer insights through to launch and post launch product improvements","Develop PRDs (product requirement documents) for each product","Conduct market research, surveys, and meetings with customers/prospects to understand market need, competition, etc. in coordination with the sales team","Lead design and engineering teams to develop innovative and breakthrough solutions with a strong focus on cost, quality and performance","Plan & deliver products which meet specified performance and cost criteria (metrics) within development budget and timelines"],minimumQalification:["At least 3-4 years of experience in Product Management","Excellent written and verbal English communication","Experienced in developing products from concept to launch",'Experienced in leading dynamic brainstorming sessions and able to "challenge" business users for the best product outcome',"Highly entrepreneurial, a self-starter, and ability to manage/coach","Hands-on in defining objectives and producing deliverables in a fast-paced environment","Demonstrated experience managing the full product development lifecycle, including product conceptualization, patent assessment, product line development, costing, prototyping, PRD development"],requiredSkills:["Product management","Product roadmap","Product development"]},{position:"Senior QA Engineer",text:"Create detailed, comprehensive and well-structured test plans and test cases.",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Create detailed, comprehensive and well-structured test plans and test cases.","Identify, record, document thoroughly and track bugs.","Perform regression testing when bugs are resolved.","Liaise with internal teams to identify the system requirements.","Track quality assurance metrics like defect densities and open defect counts.","Estimate, prioritize, plan and coordinate testing activities.","Stay up-to-date with new testing tools and strategies."],minimumQalification:["Minimum at least 3-5 years of experience in QA","English is a must, as you will report and liaise with our offices in India, Vietnam, and Thailand","Experienced in manual testing (API / Database / Mobile Apps / Web Apps / etc)","Experience/exposure to automation testing","Quality Improvement for customers","Test plans, scenario & track bugs","QA Tracking, metrics (Such as defect, densities, and counts)","Update new testing tools and strategies"],requiredSkills:["Manual testing","Automation testing","API testing","Database testing","Web and mobile apps testing","Linux testing"]},{position:"Backend Engineer",text:"Development of backend services which power our products and taking responsibility for scalability and reliability of them.",jobSpan:"Full-Time",jobLocation:"India",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Development of backend services which power our products and taking responsibility for scalability and reliability of them.","Translate and drive technology vision into action and world class product, as well as constantly solve problems and set strategy for our existing products as well as future product ideas.","You are also expected to share knowledge to other engineers.","Drive the business and help drive and focus execution in line with our core objectives.","Work closely with QA Engineers for immediate bugs/issues resolution.","Explore new techniques, technologies and software development approaches to improve existing system to keep up with the latest trend in software development"],minimumQalification:["Bachelor\u2019s Degree in Computer Science or equivalent","1-6 years of experience in software engineering/development","Experienced in Python + Django/flask, Golang","Experienced in building REST API","Exposure to developing apps using NodeJS, GoLang, Ruby on Rails, JavaScript, MySQL, MongoDB","Familiar with application life cycle management tools such as JIRA, Bitbucket/Git, etc and also CI/CD tooling.","Familiar with Agile Software Development and SCRUM.","Familiar with Cloud Computing (AWS / Google Cloud)."],requiredSkills:["Python / GoLang / Ruby on Rails","MySQL","REST API"]},{position:"Full Stack Engineer",text:"Development of frontend services and taking responsibility for scalability and reliability of them.",jobSpan:"Full-Time",jobLocation:"India",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Development of frontend services and taking responsibility for scalability and reliability of them.","Development of backend services which power our products and taking responsibility for scalability and reliability of them.","Implement ongoing security systems","Generate recyclable code libraries","Routinely inspect server code for speed optimization","Translate and drive technology vision into action and world class product, as well as constantly solve problems and set strategy for our existing products as well as future product ideas.","You are also expected to share knowledge to other engineers.","Drive the business and help drive and focus execution in line with our core objectives.","Work closely with QA Engineers for immediate bugs/issues resolution.","Explore new techniques, technologies and software development approaches to improve existing system to keep up with the latest trend in software development"],minimumQalification:["Bachelor\u2019s Degree in Computer Science or equivalent","1-6 years of experience in software engineering/development","Experienced in Python + Django/flask, Golang","Experienced in building REST API","Exposure to developing apps using NodeJS, GoLang, Ruby on Rails, JavaScript, MySQL, MongoDB","Familiar with application life cycle management tools such as JIRA, Bitbucket/Git, etc and also CI/CD tooling.","Familiar with Agile Software Development and SCRUM.","Familiar with Cloud Computing (AWS / Google Cloud)."],requiredSkills:["Python / GoLang / Ruby on Rails","JavaScript + ReactJS","MySQL","REST API"]},{position:"Front End Engineer",text:"Development of frontend services and taking responsibility for scalability and reliability of them.",jobSpan:"Full-Time",jobLocation:"India",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Development of frontend services and taking responsibility for scalability and reliability of them.","Translate and drive technology vision into action and world class product, as well as constantly solve problems and set strategy for our existing products as well as future product ideas.","You are also expected to share knowledge to other engineers.","Drive the business and help drive and focus execution in line with our core objectives.","Work closely with QA Engineers for immediate bugs/issues resolution.","Explore new techniques, technologies and software development approaches to improve existing system to keep up with the latest trend in software development"],minimumQalification:["Bachelor\u2019s Degree in Computer Science or equivalent","1-6 years of experience in software engineering/development and building Web Services","Experienced in JavaScript + ReactJS","Good understanding of React/Angular, and Webpack","Familiar with LAMP stack development environment","Familiar with application life cycle management tools such as JIRA, Bitbucket/Git, etc and also CI/CD tooling.","Familiar with Agile Software Development and SCRUM."],requiredSkills:["JavaScript + ReactJS","MySQL"]},{position:"DevOps Engineer",text:"Implement integrations required by business",jobSpan:"Full-Time",jobLocation:"India",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Implement integrations required by business","Build tools to reduce occurrences of errors and improve customer experience","Perform root cause analysis for production errors","Investigate and resolve technical issues","Design procedures for system troubleshooting and maintenance","Explore new techniques, technologies and software development approaches to improve existing system to keep up with the latest trend in software development"],minimumQalification:["Bachelor\u2019s Degree in Computer Science or equivalent","3-6 years of experience in software engineering.","Work experience as a DevOps Engineer or similar software engineering role","Good knowledge of Ruby or Python","Working knowledge of databases and SQL","Problem-solving attitude","Team spirit"],requiredSkills:["Docker","Kubernetes","Gitlab","Python/Golang"]}]},{logo:i.business,category:"Business",positionsArray:[{position:"Actuary Manager",text:"For Pricing Actuary, For Valuation Actuary, For Experience Study",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["For Pricing Actuary :- Actuary Pricing Specialist is responsible to perform all product pricing activities, including the product modelling, perform the profit testing and sensitivities analysis as well as preparing the internal report and OJK filing requirements. This function is a support for all company initiatives related to Product Development and Actuary/Finance functions.","For Valuation Actuary :- Actuary Valuation Analyst is responsible for support data in forecasting, planning and budgeting process related actuarial mats. Provide reports and analytical summaries regularly on the business for management information, performance and financial reporting, such as: Local GAAP Reserve Valuation, IFRS 17, RBC Report, Capital and Asset Liability Management, and Annual Experience Study.","For Experience Study :-  Monitoring for all life risk on a regular basis as well as ad hoc basis leading the end-to end annual assumption review process within the internal actuarial team as well as the relevant functions and providing the business insight of the experience result. Communicate monitoring results for better decision making include supporting the technical director in setting the recommended Best Estimate Assumptions and coordinating with relevant functions to provide an action plan for any adverse experience."],minimumQalification:["Bachelor\u2019s Degree in Actuarial Science or Mathematics or Statistic.","Strong in actuarial principles.","Minimum 3-year experience in a related field.","Proficient in MS Excel, MS Word, Access, Visual Basic and Powerpoint."],requiredSkills:["FSAI certification."]},{position:"Internal Audit Manager",text:"Report and responsible to the audit committee.",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Report and responsible to the audit committee.","Conduct an audit process according to the audit plan.","Conduct data analytics.","Formulate and provide problem solving feedback on audit findings by analyzing the precise and accurate.","Ensure the approved recommendations have been implemented by either the auditee or management.","Special assignment (Investigation, etc.)"],minimumQalification:["Holding Bachelor\u2019s Degree from Accounting, Management, Finance from a reputable university.","Good analytical thinking.","Having skills in MS Office.","Fluent in English both oral and written.","Able to work under pressure and meet tight deadlines.","At least 3 years of working experience as an auditor (general insurance is an advantage)"]}]},{logo:i.business,category:"Agency",positionsArray:[{position:"Business Manager/Relationship Manager",text:"Melakukan rekrutmen agen asuransi umum baru.",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Melakukan rekrutmen agen asuransi umum baru.","Ikut membantu tim dalam melakukan rekrutmen agen asuransi umum.","Bertanggung jawab terhadap strategi serta pengembangan bisnis agen guna meningkatkan penjualan.","Bertanggung jawab terhadap pencapaian target.","Melakukan monitor terhadap aktivitas, produksi, pencapaian target tim."],minimumQalification:["Memiliki gelar sarjana.","Memiliki pengalaman bekerja di bisnis agen terutama di perusahaan asuransi umum.","Memiliki kemampuan komunikasi yang baik dengan para agen maupun dengan tim marketing.","Memiliki kemampuan pelatihan dan development yang baik.","Memiliki jaringan yang luas di bisnis agensi.","Dapat bekerja dibawah tekanan, ulet, orientasi terhadap target serta mudah beradaptasi."],requiredSkills:["Pengetahuan produk asuransi umum.","Sertifikasi dalam agency business training / insurance marketing training.","Bahasa Inggris."]},{position:"Business Support / Operations Executive",text:"Assists with all documents, payment, and administrations to run business.",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Assists with all documents, payment, and administrations to run business.","Supporting sales and marketing team.","Maintaining documents for compliance.","Be the PIC and manage discussions and follow up with insurance providers regarding policy creation, endorsement, claims.","Monitoring payment from clients.","Monitoring soft and hard copy policy issuance."],minimumQalification:["Understanding of Insurance Industry and excellent knowledge of Motor Vehicle and Property products \u2013 across New Business, Policy Administration, and Claims functions.","Excellent\xa0administration skills.","Good written and verbal communication, and a team player.","Ability to build strong relationships with others across the business.","Previous experience working in an Insurance Broker is a plus point.\xa0","Start-up background will be preferred."]}]},{logo:i.division2,category:"Operations",positionsArray:[{position:"Collection Specialist",text:"Follow-up Mitra on overdue payment.",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["Follow-up Mitra on overdue payment.","Provide collections weekly updates."],minimumQalification:["High school diploma or equivalent qualification required.","A minimum of 2 years\u2019 experience in banking / fintech collections.","Outstanding communication and interpersonal skills.","Good administrative skills.","Responsive."],requiredSkills:["Strong background in desk collection.","Good administrative skills (can operate google sheet\xa0and excel are plus points).","Good communication skills."]}]},{logo:i.division5,category:"Human Resources",positionsArray:[{position:"VP of People",text:"8 years+ HR experience",jobSpan:"Full-Time",jobLocation:"Jakarta, Indonesia",companyDescription:{heading:"Join the Insurtech revolution with PasarPolis! We\u2019re looking for exceptional talents to come help us leverage technology to disrupt the insurance industry. With the largest insurtech funding in the region and 3 Indonesian unicorns as part of our investors roster (Gojek, Tokopedia & Traveloka) we are disrupting the insurance industry by:",point:["Creating easy to understand insurance products","Redefining how and where insurance products are purchased","Enabling simple and hassle-free claim process"],footer:"We are also using machine learning, big data analysis, and data science to build automated risk assessment."},jobDescription:["8 years+ HR experience","Has experience in building a high-performing team","Has a strong people development and culture management initiative","Experienced in developing a performance management system","Savvy recruiter for high level management positions","Prior tech startup experience is a plus","Great educational background"],minimumQalification:["People development","People & culture","Performance management","Compensation & benefits","HR management","Recruitment","Scalable HRIS"]}]},{logo:i.business,category:"Legal",positionsArray:[]},{logo:i.division4,category:"Marketing Communication",positionsArray:[]},{logo:i.division6,category:"Finance",positionsArray:[]}],r=[{heading:"Nilai Inti",subheading:"Tak hanya lingkungan yang menyenangkan, kamu juga akan mendapatkan manfaat seperti project yang seru, tim yang akrab dan penuh warna, jam kerja yang fleksibel, medical coverage, serta kesempatan mengembangkan karir."},{heading2:"Seriously Fun Challenging",subHeading2:" From a worry-free daily riding to do your work, safe online shopping to support your passion, or even a stress-free gateaway vacation."}],l=[{heading:"BE AN ENTREPRENEUR",detailHeading:"BE AN ENTREPRENEUR",detailSubHeading:"Kami mendorong PasPolers bersikap layaknya wirausahawan dalam menjalankan pekerjaan."},{heading:"ALWAYS DAY ONE",detailHeading:"ALWAYS DAY ONE",detailSubHeading:"Bagi kami di PasarPolis, setiap hari selalu mengusung semangat hari pertama. Kami selalu mengerahkan energi dan antusiasme layaknya hari pertama berada di PasarPolis."},{heading:"WE ARE ONE PRO TEAM",detailHeading:"WE ARE ONE PRO TEAM",detailSubHeading:"Kami saling mendukung kinerja satu sama lain agar bisa menjadi lebih berhasil, karena sukses tidak akan tercapai tanpa berkolaborasi."},{heading:"EMBRACE CHANGE",detailHeading:"EMBRACE CHANGE",detailSubHeading:"Kami melihat perubahan yang cepat/pesat sebagai satu-satunya yang konstan dan tidak terelakkan di era digital ini. Kami akan selalu beradaptasi, berkembang, dan tetap berpikiran terbuka untuk merangkul perubahan tersebut."},{heading:"NEVER GIVE UP",detailHeading:"NEVER GIVE UP",detailSubHeading:"Pekerjaan kami adalah komitmen kami. Kami bertekad untuk tidak pernah menyerah pada komitmen tersebut, sebagai nilai yang tertanam di dalam diri kami."}],d=[{heading:"ALWAYS DAY ONE",cardHeading:"ALWAYS DAY ONE",cardContent:"Bagi kami di PasarPolis, setiap hari selalu mengusung semangat hari pertama. Kami selalu mengerahkan energi dan antusiasme layaknya hari pertama berada di PasarPolis.",image:i.work1},{heading:"WE ARE ONE PRO TEAM",cardHeading:"WE ARE ONE PRO TEAM",cardContent:"Kami saling mendukung kinerja satu sama lain agar bisa menjadi lebih berhasil, karena sukses tidak akan tercapai tanpa berkolaborasi.",image:i.work2},{heading:"NEVER GIVE UP",cardHeading:"NEVER GIVE UP.",cardContent:"Pekerjaan kami adalah komitmen kami. Kami bertekad untuk tidak pernah menyerah pada komitmen tersebut, sebagai nilai yang tertanam di dalam diri kami.",image:i.work3},{heading:"BE AN ENTREPRENEUR",cardHeading:"BE AN ENTREPRENEUR",cardContent:"Kami mendorong PasPolers bersikap layaknya wirausahawan dalam menjalankan pekerjaan.",image:i.work4},{heading:"EMBRACE CHANGE",cardHeading:"EMBRACE CHANGE",cardContent:"Kami melihat perubahan yang cepat/pesat sebagai satu-satunya yang konstan dan tidak terelakkan di era digital ini. Kami akan selalu beradaptasi, berkembang, dan tetap berpikiran terbuka untuk merangkul perubahan tersebut.",image:i.work5}]},376:function(e,a,t){"use strict";t(391);var i=t(411),n=(t(389),t(387)),o=(t(207),t(140)),s=(t(406),t(402)),r=(t(138),t(43)),l=(t(139),t(30)),d=(t(390),t(388)),c=t(0),p=t(361),m=t(363),g=t(4);class h extends c.Component{constructor(e){super(e),this.positionHandler=e=>{let{key:a}=e;this.setState({position:a})},this.categoryHandler=e=>{let{key:a}=e;this.setState({category:a})},this.locationHandler=e=>{let{key:a}=e;this.setState({location:a})},this.resetCountry=()=>{this.setState({location:""})},this.resetCategory=()=>{this.setState({category:""})},this.searchedData=(e,a,t)=>{let i=this.state.filteredData,n=[];""!==a&&(i=i.filter((e=>e.category===a))),n=i;let o=[];""!==e&&(n.map((a=>{let t=a.positionsArray.filter((a=>a.position===e));if(t.length>0){let e={logo:a.logo,category:a.category,positionsArray:t};o.push(e)}})),n=o);let s=[];return""!==t&&(n.map((e=>{let a=e.positionsArray.filter((e=>e.jobLocation===t));if(a.length>0){let t={logo:e.logo,category:e.category,positionsArray:a};s.push(t)}})),n=s),n},this.submitFilter=()=>{const{position:e,category:a,location:t}=this.state;let i=this.searchedData(e,a,t);this.props.history.push({pathname:"/career/job-category",state:i})},this.openModal=()=>{this.setState({visible:!0})},this.handleOk=()=>{this.setState({visible:!1})},this.handleCancel=()=>{this.setState({visible:!1})},this.mobileSelectCountry=e=>{this.setState({location:e})},this.mobileSelectCategory=e=>{this.setState({category:e})},this.submitMobileFilter=()=>{this.submitFilter(),this.handleCancel()},this.state={position:"",category:"",location:"",filteredData:m.e.filter((e=>0!==e.positionsArray.length)),modalVisible:!1,placement:"bottom",visible:!1}}render(){const{position:e,category:a,location:t}=this.state,c=Object(g.jsxs)(d.a,{onClick:this.positionHandler,className:"custom-search-menu",children:[Object(g.jsx)(d.a.Item,{children:"Product Head"},"Product Head"),Object(g.jsx)(d.a.Item,{children:"UI/UX Designer"},"UI/UX Designer"),Object(g.jsx)(d.a.Item,{children:"Product Manager"},"Product Manager"),Object(g.jsx)(d.a.Item,{children:"Senior QA Engineer"},"Senior QA Engineer"),Object(g.jsx)(d.a.Item,{children:"Backend Engineer"},"Backend Engineer"),Object(g.jsx)(d.a.Item,{children:"Full Stack Engineer"},"Full Stack Engineer"),Object(g.jsx)(d.a.Item,{children:"Front End Engineer"},"Front End Engineer"),Object(g.jsx)(d.a.Item,{children:"DevOps Engineer"},"DevOps Engineer"),Object(g.jsx)(d.a.Item,{children:"Actuary Manager"},"Actuary Manager"),Object(g.jsx)(d.a.Item,{children:"Internal Audit Manager"},"Internal Audit Manager"),Object(g.jsx)(d.a.Item,{children:"Business Manager/Relationship Manager"},"Business Manager/Relationship Manager"),Object(g.jsx)(d.a.Item,{children:"Business Support / Operations Executive"},"Business Support / Operations Executive"),Object(g.jsx)(d.a.Item,{children:"Collection Specialist"},"Collection Specialist"),Object(g.jsx)(d.a.Item,{children:"VP of People"},"VP of People")]}),h=Object(g.jsxs)(d.a,{onClick:this.categoryHandler,className:"custom-search-menu",children:[Object(g.jsx)(d.a.Item,{children:"Business"},"Business"),Object(g.jsx)(d.a.Item,{children:"Operations"},"Operations"),Object(g.jsx)(d.a.Item,{children:"Technology"},"Technology"),Object(g.jsx)(d.a.Item,{children:"Human Resources"},"Human Resources"),Object(g.jsx)(d.a.Item,{children:"Legal"},"Legal"),Object(g.jsx)(d.a.Item,{children:"Agency"},"Agency"),Object(g.jsx)(d.a.Item,{disabled:!0,children:"Marketing Communication"},"Marketing Communication"),Object(g.jsx)(d.a.Item,{disabled:!0,children:"Finance"},"Finance")]}),u=Object(g.jsxs)(d.a,{onClick:this.locationHandler,className:"custom-search-menu",children:[Object(g.jsxs)(d.a.Item,{children:["Jakarta, Indonesia",Object(g.jsx)("img",{src:m.f.indonesia})]},"Jakarta, Indonesia"),Object(g.jsxs)(d.a.Item,{children:["India",Object(g.jsx)("img",{src:m.f.india})]},"India"),Object(g.jsxs)(d.a.Item,{disabled:!0,children:["Thailand",Object(g.jsx)("img",{src:m.f.thailand})]},"Thailand"),Object(g.jsxs)(d.a.Item,{disabled:!0,children:["Vietnam",Object(g.jsx)("img",{src:m.f.vietnam})]},"Vietnam")]}),b=[{title:"Jakarta, Indonesia",logo:m.f.indonesia,activeCountry:""},{title:"India",logo:m.f.india,activeCountry:""}];return Object(g.jsxs)(p.c,{children:[Object(g.jsxs)(n.a,{placement:this.state.placement,closable:!1,visible:this.state.visible,maskClosable:"true",className:"custom-modal-filter custom-close-option",children:[Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)("span",{className:"close-bar",onClick:()=>this.handleCancel})}),Object(g.jsxs)("div",{className:"mb-25",children:[Object(g.jsxs)(r.a,{justify:"space-between",type:"flex",children:[Object(g.jsx)(l.a,{children:Object(g.jsx)("h3",{children:"Countries"})}),Object(g.jsx)(l.a,{className:"reset-button",onClick:()=>this.mobileSelectCountry(""),children:"Reset"})]}),Object(g.jsx)("hr",{className:"yellow-divider"}),Object(g.jsx)(s.a,{itemLayout:"horizontal",dataSource:b,renderItem:(e,a)=>Object(g.jsxs)(s.a.Item,{children:[Object(g.jsx)(s.a.Item.Meta,{onClick:()=>this.mobileSelectCountry(e.title),avatar:Object(g.jsx)("img",{src:e.logo,width:"20px"}),title:e.title}),t===e.title&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:m.f.SelectedIcon,width:"20px"})})]})})]}),Object(g.jsxs)("div",{className:"mb-25",children:[Object(g.jsxs)(r.a,{justify:"space-between",type:"flex",children:[Object(g.jsx)(l.a,{children:Object(g.jsx)("h3",{children:"Categories"})}),Object(g.jsx)(l.a,{className:"reset-button",onClick:()=>this.mobileSelectCategory(""),children:"Reset"})]}),Object(g.jsx)("hr",{className:"yellow-divider"}),Object(g.jsx)(s.a,{itemLayout:"horizontal",dataSource:[{title:"Business"},{title:"Operations"},{title:"Technology"},{title:"Human Resources"},{title:"Legal"},{title:"Agency"}],renderItem:(e,t)=>Object(g.jsxs)(s.a.Item,{children:[Object(g.jsx)(s.a.Item.Meta,{onClick:()=>this.mobileSelectCategory(e.title),title:e.title}),a===e.title&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:m.f.SelectedIcon,width:"20px"})})]})})]}),Object(g.jsxs)(r.a,{type:"flex",justify:"space-between",children:[Object(g.jsx)(l.a,{span:12,className:"paddingLR10",children:Object(g.jsx)(o.a,{onClick:this.handleCancel,className:"cancel-button btn-lg",children:Object(g.jsx)("b",{children:"Cancel"})})}),Object(g.jsx)(l.a,{span:12,className:"paddingLR10",children:Object(g.jsx)(o.a,{onClick:this.submitMobileFilter,className:"apply-button btn-lg",children:"Ok"})})]})]}),Object(g.jsx)(r.a,{className:this.props.showBackground?"sectionDiv bg-yellow head-shadow display-desktop":"sectionDiv head-shadow display-desktop loaded",children:Object(g.jsxs)(l.a,{span:24,className:"borderR-50 bg-white padding10 searchbar-container display-flex",children:[Object(g.jsxs)(l.a,{className:"border-on flex4 flex-container",children:[Object(g.jsx)("span",{className:"side-image paddingL10",children:Object(g.jsx)("img",{src:m.f.search,className:"small-side-image"})}),Object(g.jsx)(i.a,{overlay:c,children:Object(g.jsx)(o.a,{className:"input-custom no-padding",children:""!==e?e:"Your Dream Jobs..."})})]}),Object(g.jsxs)(l.a,{className:"border-on flex3 positionR",children:[Object(g.jsx)("span",{className:"side-image position-absolute",children:Object(g.jsx)("img",{src:m.f.country,className:"small-side-image"})}),Object(g.jsx)(i.a,{overlay:u,children:Object(g.jsx)(o.a,{className:"input-custom",children:""!==t?t:"All Countries"})})]}),Object(g.jsxs)(l.a,{className:"border-on flex3 positionR",children:[Object(g.jsx)("span",{className:"side-image position-absolute",children:Object(g.jsx)("img",{src:m.f.category,className:"small-side-image"})}),Object(g.jsx)(i.a,{overlay:h,children:Object(g.jsx)(o.a,{className:"input-custom",children:""!==a?a:"Categories"})})]}),Object(g.jsx)(l.a,{className:"flex1",children:Object(g.jsx)(o.a,{className:"enter-button",onClick:this.submitFilter,children:Object(g.jsx)("img",{src:m.f.enter,className:"small-side-image"})})})]})}),Object(g.jsxs)(r.a,{className:"sectionDiv bg-yellow head-shadow display-mobile display-flex align-center",children:[Object(g.jsxs)(l.a,{span:21,className:"borderR-50 bg-white padding10 searchbar-container display-flex",children:[Object(g.jsxs)(l.a,{className:"flex-container mobile-search-auto",children:[Object(g.jsx)("span",{className:"side-image mobile-side-image paddingL10",children:Object(g.jsx)("img",{src:m.f.search,className:"small-side-image"})}),Object(g.jsx)(i.a,{overlay:c,children:Object(g.jsx)(o.a,{className:"input-custom no-padding",children:""!==e?e:"Your Dream Jobs..."})})]}),Object(g.jsx)(l.a,{children:Object(g.jsx)(o.a,{className:"enter-button no-mobile-padding",onClick:this.submitFilter,children:Object(g.jsx)("img",{src:m.f.enter,className:"small-side-image"})})})]}),Object(g.jsx)(l.a,{span:3,children:Object(g.jsx)("div",{className:"filter-button text-center",onClick:this.openModal,children:Object(g.jsx)("img",{src:m.f.filter,className:"small-side-image"})})})]})]})}}a.a=h},636:function(e,a,t){"use strict";t.r(a),t.d(a,"JobDescriptionComponent",(function(){return b}));t(442);var i=t(424),n=(t(208),t(143)),o=(t(409),t(405)),s=(t(389),t(387)),r=(t(138),t(43)),l=(t(139),t(30)),d=t(0),c=t.n(d),p=t(361),m=t(376),g=t(363),h=t(359),u=t(4);class b extends d.Component{constructor(e){super(e),this.homePage=()=>{this.props.history.push({pathname:"/career"})},this.applyFormPage=e=>{this.props.history.push("/career/form",{...e})},this.careerPage=()=>{this.props.history.push({pathname:"/career"})},this.categoryPage=()=>{this.props.history.push({pathname:"/career/job-category",state:g.e.filter((e=>e.positionsArray.length>0))})},this.vaccanyPage=e=>{const a=g.e.filter((a=>a.category===g.d[e].text))[0];this.props.history.push({pathname:"/career/vacancy-list",state:{...a}})},this.showModal=()=>{this.setState({visible:!0})},this.handleCancel=e=>{this.setState({visible:!1})},this.handleOk=e=>{this.setState({visible:!1})},this.changePositionDescription=e=>{let a={};g.e.map(((t,i)=>{let{positionsArray:n}=t;n.map((n=>{n.position===e.position&&(a={index:i,item:t,filterData:n})}))})),this.setState({content:a},(()=>{window.scrollTo(0,0)}))},this.state={visible:!1,placement:"bottom",content:this.props.location.state}}componentWillMount(){const{location:e}=this.props,{state:a}=e;void 0===a&&(this.homePage(),window.location.reload())}componentDidMount(){window.scrollTo(0,0)}render(){const{content:e}=this.state,{history:a}=this.props,t=e.filterData,d=e.item,b=!!d&&d.positionsArray.filter((e=>e.position!==t.position)),x=e.index;return Object(u.jsxs)("div",{children:[Object(u.jsxs)(p.c,{children:[Object(u.jsx)(s.a,{placement:this.state.placement,closable:!1,visible:this.state.visible,maskClosable:"true",className:"custom-close-option custom-model-drawer2",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("span",{className:"close-bar",onClick:this.handleCancel})}),Object(u.jsx)(r.a,{justify:"space-between",type:"flex",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("h3",{children:"Share"})})}),Object(u.jsx)("hr",{className:"yellow-divider"}),Object(u.jsxs)(r.a,{type:"flex",justify:"space-between",className:"social-media-icon",children:[Object(u.jsx)(l.a,{children:Object(u.jsx)("img",{src:g.f.facebook})}),Object(u.jsx)(l.a,{children:Object(u.jsx)("img",{src:g.f.twitter})}),Object(u.jsx)(l.a,{children:Object(u.jsx)("img",{src:g.f.emailYellow})}),Object(u.jsx)(l.a,{children:Object(u.jsx)("img",{src:g.f.whatsapp})})]})]})}),Object(u.jsx)(m.a,{history:a,showBackground:!0}),Object(u.jsxs)(p.b,{children:[Object(u.jsxs)(o.a,{className:"padding20 font-size17",children:[Object(u.jsx)(o.a.Item,{children:Object(u.jsx)("span",{onClick:()=>this.careerPage(),children:"Career"})}),Object(u.jsx)(o.a.Item,{children:Object(u.jsx)("span",{onClick:()=>this.categoryPage(),children:"Jobs"})}),Object(u.jsx)(o.a.Item,{children:Object(u.jsx)("span",{onClick:()=>this.vaccanyPage(x),children:d.category})}),Object(u.jsx)(o.a.Item,{children:Object(u.jsx)("span",{className:"text-yellow",children:t.position})})]}),Object(u.jsxs)(r.a,{className:"bg-white padding20 marginB70",children:[Object(u.jsxs)(l.a,{xl:6,lg:7,md:8,sm:24,xs:24,className:"padding20",children:[Object(u.jsx)("div",{className:"main-image marginB70 marginT70 mobile-text-center",children:Object(u.jsx)("img",{src:d.logo,alt:"logo",className:"jobDetail-main-image"})}),Object(u.jsxs)("div",{className:"marginB70",children:[Object(u.jsx)("h2",{className:"text-yellow mobile-text-center",children:t.position}),Object(u.jsxs)("div",{className:"mobile-flex",children:[Object(u.jsxs)("p",{className:"marginB20 mobile-text-center",children:[Object(u.jsx)("img",{src:g.f.category,className:"smaller-side-image vertical-middle"}),Object(u.jsx)("span",{className:"display_inlineB color-fade",children:t.position})]}),Object(u.jsxs)("p",{className:"marginB20 mobile-text-center",children:[Object(u.jsx)("img",{src:g.f.jobType,className:"smaller-side-image vertical-middle"}),Object(u.jsx)("span",{className:"display_inlineB color-fade",children:t.jobSpan})]}),Object(u.jsxs)("p",{className:"marginB20 mobile-text-center",children:[Object(u.jsx)("img",{src:g.f.location,className:"smaller-side-image vertical-middle"}),Object(u.jsx)("span",{className:"display_inlineB color-fade",children:t.jobLocation})]})]})]})]}),Object(u.jsxs)(l.a,{xl:18,lg:17,md:16,sm:24,xs:24,children:[t.companyDescription&&Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("h3",{className:"text-yellow",children:"Company Description"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"customP",children:t.companyDescription.heading}),Object(u.jsx)("ol",{className:"custom-list line-height2",children:t.companyDescription.point.map((e=>Object(u.jsx)("li",{children:e})))}),Object(u.jsx)("p",{className:"customP",children:t.companyDescription.footer})]}),Object(u.jsx)("hr",{className:"custon-hr"})]}),Object(u.jsx)("h3",{className:"text-yellow",children:"Job Description"}),Object(u.jsx)("ul",{className:"custom-list line-height2",children:t.jobDescription.map((e=>Object(u.jsx)("li",{children:e})))}),Object(u.jsx)("hr",{className:"custon-hr"}),Object(u.jsx)("h3",{className:"text-yellow",children:"Minimum Qualifications"}),Object(u.jsx)("ul",{className:"custom-list line-height2",children:t.minimumQalification.map((e=>Object(u.jsx)("li",{children:e})))}),Object(u.jsx)("hr",{className:"custon-hr"}),t.requiredSkills&&Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("h3",{className:"text-yellow",children:"Required Skills"}),Object(u.jsx)("ul",{className:"custom-list",children:t.requiredSkills.map((e=>Object(u.jsx)("li",{children:e})))}),Object(u.jsx)("hr",{className:"custon-hr"})]}),Object(u.jsx)(r.a,{children:Object(u.jsx)(l.a,{xl:6,lg:6,md:8,sm:12,xs:24,children:Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-apply btn-block mobile-round-button",onClick:()=>this.applyFormPage(t),children:"Apply"})})})})]})]}),b.length>0&&Object(u.jsxs)(r.a,{className:"bg-white padding20",children:[Object(u.jsxs)(l.a,{span:24,className:"padding20",children:[Object(u.jsx)("h2",{className:"text-yellow",children:"Related Jobs"}),Object(u.jsx)("p",{children:"Not your field? What about these other roles?"})]}),Object(u.jsxs)(l.a,{span:24,children:[Object(u.jsx)(r.a,{className:"display-desktop",children:b.map((e=>Object(u.jsx)(l.a,{xl:12,lg:12,md:24,sm:24,xs:24,className:"padding20",children:Object(u.jsx)(n.a,{className:"custom-card2",children:Object(u.jsxs)(r.a,{type:"flex",align:"center",children:[Object(u.jsxs)(l.a,{span:16,className:"padding10",children:[Object(u.jsx)("h3",{className:"text-yellow",children:e.position}),Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsxs)("div",{className:"padding5",children:[Object(u.jsx)("img",{src:g.f.country,alt:"location",className:"display_inlineB smaller-side-image"}),Object(u.jsx)("small",{className:"display_inlineB color-fade",children:e.jobLocation})]}),Object(u.jsxs)("div",{className:"padding5",children:[Object(u.jsx)("img",{src:g.f.jobType,alt:"type",className:"display_inlineB smaller-side-image"}),Object(u.jsx)("small",{className:"display_inlineB color-fade",children:e.jobSpan})]})]})]}),Object(u.jsx)(l.a,{span:8,className:"padding10",children:Object(u.jsx)("div",{className:"text-center job-detail-button button-detail borderR-5",onClick:()=>this.changePositionDescription(e),children:"Learn More"})})]})})})))}),Object(u.jsx)(r.a,{className:"display-mobile",children:Object(u.jsx)(l.a,{span:24,children:Object(u.jsx)(i.a,{children:b.map((e=>Object(u.jsx)("div",{className:"padding20",children:Object(u.jsx)(n.a,{className:"custom-card mobile-marginB-30",onClick:()=>this.changePositionDescription(e),children:Object(u.jsx)(r.a,{type:"flex",align:"center",children:Object(u.jsxs)(l.a,{span:24,className:"padding10",children:[Object(u.jsx)("h3",{className:"text-yellow",children:e.position}),Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsxs)("div",{className:"padding5",children:[Object(u.jsx)("img",{src:g.f.country,alt:"location",className:"display_inlineB smaller-side-image"}),Object(u.jsxs)("small",{className:"display_inlineB color-fade",children:[" ",e.jobLocation," "]})]}),Object(u.jsxs)("div",{className:"padding5",children:[Object(u.jsx)("img",{src:g.f.jobType,alt:"type",className:"display_inlineB smaller-side-image"}),Object(u.jsxs)("small",{className:"display_inlineB color-fade",children:[e.jobSpan," "]})]})]})]})})})})))})})})]})]})]})]}),Object(u.jsx)(h.a,{})]})}}a.default=b}}]);
//# sourceMappingURL=12.a6c411de.chunk.js.map