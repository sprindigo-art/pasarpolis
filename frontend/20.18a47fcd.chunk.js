(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[20],{359:function(e,a,t){"use strict";var i=t(0),s=t(69),n=t(70);const o=s.a.div`

  font-weight: ${n.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${n.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${n.a.fontWeight.bold}
  }
`;var c=t(4);var r=e=>{let{name:a,addressLines:t=[],phones:i=[],emails:s=[],viewMapUrl:n}=e;return Object(c.jsxs)(o,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("small",{className:"text-bold",children:a})}),t.map(((e,a)=>Object(c.jsx)("div",{children:Object(c.jsx)("small",{className:"text-white",children:e})},a))),Object(c.jsx)("br",{}),i.map(((e,a)=>Object(c.jsx)("div",{children:Object(c.jsxs)("small",{className:"text-white",children:[Object(c.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(c.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},a))),s.map(((e,a)=>Object(c.jsx)("div",{children:Object(c.jsxs)("small",{className:"text-white",children:[Object(c.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(c.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},a))),Object(c.jsx)("br",{}),Object(c.jsx)("a",{target:"_blank",href:n,className:"text-yellow",children:"View Map"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"flex-container ",children:[Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const l=s.a.div`
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

`;var p=e=>{let{slides:a=[1,2,3],current:t=0}=e;return Object(c.jsx)(l,{current:t,children:Object(c.jsx)("div",{className:"slides-wrapper flex-container",children:a.map(((e,a)=>Object(c.jsx)("div",{className:"slide",children:e},a)))})})};var m={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const d=s.a.div`
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
`;var h=()=>{const[e,a]=Object(i.useState)(0);return Object(c.jsxs)(d,{children:[Object(c.jsx)("ul",{className:"flex-container country-flag-container",children:m.countries.map(((t,i)=>Object(c.jsx)("li",{className:"country-icon-li",children:Object(c.jsx)("div",{onClick:()=>a(i),children:Object(c.jsx)("img",{className:i===e?"country-icon active":"country-icon",src:t.countryIconImage})})},i)))}),Object(c.jsx)("div",{children:Object(c.jsx)(p,{slides:m.countries.map((e=>Object(c.jsx)(r,{...e},e.name))),current:e})})]})};var x={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const b=s.a.footer`
  .heading {
    font-weight: ${n.a.fontWeight.extrabold};
    font-family: ${n.a.font.primary};
    font-size: ${n.a.fontSize.xs};
    color: ${n.a.color.white};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .gap {
    gap: 40px;
  }

  .normal-text {
    font-weight: ${n.a.fontWeight.hairline};
    font-family: ${n.a.font.primary};
    font-size: ${n.a.fontSize.xs};
  }

  .margin-b-40 {
    margin-bottom: 40px;
  }

  .small-text {
    font-weight: ${n.a.fontWeight.hairline};
    font-family: ${n.a.font.primary};
    font-size: ${n.a.fontSize.xs2};
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
    font-size: ${n.a.fontSize.xs};
    font-family: ${n.a.font.primary};
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
      color: ${n.a.color.white} !important;
    }
  }
  .text-yellow {
    color:  ${n.a.color.primary} !important;
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
`;var j=t(357);a.a=()=>Object(c.jsx)(b,{children:Object(c.jsx)("div",{className:"footer-content",children:Object(c.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(c.jsx)("div",{className:"others-container text-small",children:Object(c.jsxs)("div",{className:"margin-b-40",children:[Object(c.jsx)("h4",{className:"text-strong heading",children:Object(c.jsx)(j.a,{id:"Informasi"})}),Object(c.jsx)("ul",{className:"text-small others-list",children:x.information.map((e=>Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"footer__link",href:e.link,children:Object(c.jsx)(j.a,{id:e.label})})})))})]})}),Object(c.jsx)("div",{className:"others-container text-small",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:"text-strong heading",children:Object(c.jsx)(j.a,{id:"Perusahaan"})}),Object(c.jsx)("ul",{className:"text-small others-list",children:x.company.map((e=>Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(c.jsx)(j.a,{id:e.label})})})))})]})}),Object(c.jsxs)("div",{className:"address-container text-small",children:[Object(c.jsx)("h3",{className:"text-strong heading",children:Object(c.jsx)(j.a,{id:"Kantor kami"})}),Object(c.jsx)(h,{})]})]})})})},641:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),n=(t(139),t(30)),o=(t(138),t(43)),c=t(359),r=t(69),l=r.a.div`
hr {
  border: 1px solid #cccccc;
  max-width: 60vw;
  margin-left: auto;
  margin-right: auto;
}

.application-id {
  font-family: Muli;
  font-size: 25px;
  color: #c8aa00;
}

.thanks-message {
  font-size: 30px;
  font-weight: 900;
}

.success-banner {
  height: 200px;
}

.activation-app-guide {
  font-family: Muli;
  font-size: 18px;
  font-weight: bold;
}

.important-disclaimer {
  font-size: 16px;
}

.alternate-activation-guide {
  font-size: 15px;
}

.email {
  color: #c8aa00;
  font-size: 15px;
}

.vehicle-protection-banner {
  margin-top: 40px;
}

.vehicle-protection-banner-img {
  width: 100%;;
}

.vehicle-protection-banner-container {
  position: absolute;
  top: 35%;
  width: 100%;
}

.vehicle-banner-header {
  font-family: Muli;
  font-size: 20px;
  font-weight: bold;
}

.vehicle-banner-subheader {
  font-size: 16px;
}

.vehicle-banner-actionable {
  text-align: left;
}

.vehicle-banner-button {
  background-color: #fae600;
  color: #000000;
  font-weight: 800;
  font-family: Muli;
  height: 54px;
  line-height: 1.76;
  border-radius: 10px;
  text-align: left;
  padding: 0px 36px;
}

.app-store {
  max-width: 40vw;
  float: right;
  margin-right: 0.5vw;
  height: 70px;
}

.play-store {
  max-width: 40vw;
  margin-left: 0.5vw;
  float: left;
  height: 70px;
}

@media (max-width: 768px) {
  .success-banner {
    height: 30vw;
  }

  .thanks-message {
    font-size: 20px;
    max-width: 70vw;
    margin: auto;
  }

  .application-id {
    font-size: 17px;
  }

  .activation-app-guide {
    font-family: Muli;
    font-size: 18px;
    font-weight: bold;
    max-width: 70vw;
    margin: auto;
  }

  .important-disclaimer {
    max-width: 70vw;
    margin: auto;
    margin-top: 10px;
  }

  .vehicle-protection-banner-container {
    position: absolute;
    top: 45%;
    width: 80vw;
    right: 0;
    left: 0;
    margin: auto;
  }

  .vehicle-protection-banner-img {
    width: 100%;
  }

  .vehicle-banner-actionable {
    text-align: center;
    margin-top: 20px;
  }

  .vehicle-banner-subheader {
    font-weight: 600;
    font-size: 14px;
    max-width: 60vw;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .vehicle-protection-banner-wrapper {
    margin-top: 50px;
  }

  hr {
    max-width: 80vw;
  }

  .app-store {
    max-width: 40vw;
    margin-left: 5vw;
    max-height: 50px;
  }

  .play-store {
    max-width: 40vw;
    margin-right: 5vw;
    max-height: 50px;
  }
}

@media (max-width: 320px) {
  .vehicle-protection-banner-container {
    position: absolute;
    top: 40%;
    width: 80vw;
    right: 0;
    left: 0;
    margin: auto;
  }

  .vehicle-banner-subheader {
    font-weight: 600;
    font-size: 14px;
    max-width: unset;
    margin-top: unset;
    margin-left: auto;
    margin-right: auto;
  }
}
`;var p=t(4);class m extends i.Component{constructor(e){super(e),this.redirectTovehicle=()=>{this.props.history.push("/vehicle")},this.state={}}componentDidMount(){const e=new URLSearchParams(this.props.location.search),a=e.get("applicationId"),t=e.get("email");this.setState({applicationId:a,email:t})}render(){const{applicationId:e,email:a}=this.state;return Object(p.jsxs)(l,{children:[Object(p.jsxs)(o.a,{className:"full-width",children:[Object(p.jsx)(o.a,{className:"text-center",children:Object(p.jsx)("img",{className:"success-banner",src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/success-payment.svg"})}),Object(p.jsx)(o.a,{className:"text-center",children:Object(p.jsx)("div",{className:"thanks-message",children:"TERIMA KASIH UNTUK PEMBELIAN ANDA!"})}),Object(p.jsx)(o.a,{className:"text-center mt-10",children:Object(p.jsxs)("div",{className:"application-id",children:["Aplikasi ID: ",e]})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)(o.a,{className:"full-width",children:[Object(p.jsx)(o.a,{className:"text-center mb-20",children:Object(p.jsx)("div",{className:"activation-app-guide",children:"Aktivasikan perlindunganmu di aplikasi kami:"})}),Object(p.jsxs)(o.a,{className:"text-center mb-20",children:[Object(p.jsx)(n.a,{span:12,children:Object(p.jsx)("a",{href:"https://apps.apple.com/us/app/pasarpolis/id1498776057?ls=1",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"download-app-banner app-store",src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/gosure/app-store.svg"})})}),Object(p.jsx)(n.a,{span:12,children:Object(p.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.pasarpolis.insurance",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"download-app-banner play-store",src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/gosure/google-play.svg"})})})]}),Object(p.jsx)(o.a,{className:"text-center",children:Object(p.jsx)("div",{className:"important-disclaimer",children:"PENTING: Perlindungan non-aktif tidak dapat diklaim"})})]}),Object(p.jsx)("hr",{}),Object(p.jsx)(o.a,{className:"full-width",children:Object(p.jsxs)(o.a,{className:"text-center",children:[Object(p.jsx)(o.a,{className:"alternate-activation-guide",children:"atau cek link aktivasi di email:"}),Object(p.jsx)(o.a,{children:Object(p.jsx)("span",{className:"email",children:a})})]})}),Object(p.jsx)(c.a,{})]})}}m.defaultProps={};var d=m,h=(t(208),t(143)),x=(t(207),t(140)),b=t(49);var j=r.a.div`
  width: 100%;
  min-height: calc(100vh - 54px);
  height: 100%;
  padding: 40px 0;
 .payment-image{
    float:right !important;
  }
  h3{
      font-family: Muli;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  color: #151515;
  }
  .ant-card{
  min-width:58%;
   border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);

  }
 .ant-row-flex-middle{
  align-items: flex-start !important;
  padding:30px;
 }

 .text-underline {
   text-decoration: underline;
 }

  @media (min-width: 768px) {
    .component-card {
      padding: 50px;
    }
  }

  @media (max-width: 768px) {
    .ant-card {
      min-width:58%;
      margin-top:10px;
      border-radius: 10px;
      background-color: #ffffff;
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1);
    }
    h3 {
      font-size:24px;
    }
    .component-card {
      padding: 0px;
    }
  }

`,g=t.p+"static/media/female.179df673.png",f=t(105);class w extends i.Component{constructor(){super(...arguments),this.state={applicationId:null,email:null},this.goHome=()=>{f.b.purge(),window.location.href=window.location.origin},this.componentWillUnmount=async()=>{await f.b.purge()}}componentDidMount(){window.scrollTo(0,0),this.props.location.state||this.goHome();const e=new URLSearchParams(this.props.location.search),a=e.get("applicationId"),t=e.get("email");this.setState({applicationId:a,email:t})}render(){const{params:e}=this.props.location.state,{applicationId:a,email:t}=this.state;return Object(p.jsx)(j,{children:Object(p.jsx)(o.a,{type:"flex",justify:"center",children:Object(p.jsx)(n.a,{xs:24,sm:24,md:17,lg:16,xl:16,children:Object(p.jsx)(h.a,{children:Object(p.jsxs)(o.a,{type:"flex",justify:"center",className:"component-card",children:[Object(p.jsxs)(n.a,{span:16,children:[Object(p.jsx)("h3",{className:"mb-30",children:"Pembayaran Berhasil"}),Object(p.jsx)("p",{className:"mb-10",children:"Pembayaran Anda akan segera di proses."}),Object(p.jsx)("p",{className:"mb-30",children:"Kami akan memberi kabar bila polis Anda sudah siap."}),Object(p.jsxs)("div",{className:"mb-30",children:[Object(p.jsxs)("p",{children:["Nomor Booking Anda:",Object(p.jsx)("b",{style:{display:"block"},children:a||e.appID})]}),Object(p.jsxs)("p",{children:["Email Akan Dikirim Ke: ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:t||e.email})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("a",{href:"https://policies.pasarpolis.io",className:"text-underline",children:"Klik disini"})," ","untuk melihat polis Anda"]})]}),Object(p.jsx)(x.a,{className:"button-primary",onClick:this.goHome,children:"KEMBALI KE BERANDA"})]}),Object(p.jsx)(n.a,{span:8,children:Object(p.jsx)("img",{src:g,alt:"payment-success",className:"payment-image"})})]})})})})})}}var u=Object(b.b)((e=>({})),{})(w);class O extends i.Component{constructor(){super(...arguments),this.state={component:null}}componentDidMount(){let e=null;if("crack-screen-protection-plus"===new URLSearchParams(this.props.location.search).get("product"))e=d;else e=u;this.setState({component:e})}render(){const{state:e={}}=this.props.location,{params:a}=e,{component:t}=this.state;return Object(p.jsx)(s.a.Fragment,{children:t?Object(p.jsx)(t,{...this.props}):"Loading"})}}a.default=O}}]);
//# sourceMappingURL=20.18a47fcd.chunk.js.map