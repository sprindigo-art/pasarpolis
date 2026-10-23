(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[14],{359:function(e,t,a){"use strict";var s=a(0),i=a(69),c=a(70);const n=i.a.div`

  font-weight: ${c.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${c.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${c.a.fontWeight.bold}
  }
`;var r=a(4);var l=e=>{let{name:t,addressLines:a=[],phones:s=[],emails:i=[],viewMapUrl:c}=e;return Object(r.jsxs)(n,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-bold",children:t})}),a.map(((e,t)=>Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-white",children:e})},t))),Object(r.jsx)("br",{}),s.map(((e,t)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},t))),i.map(((e,t)=>Object(r.jsx)("div",{children:Object(r.jsxs)("small",{className:"text-white",children:[Object(r.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(r.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},t))),Object(r.jsx)("br",{}),Object(r.jsx)("a",{target:"_blank",href:c,className:"text-yellow",children:"View Map"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"flex-container ",children:[Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(r.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(r.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const o=i.a.div`
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

`;var j=e=>{let{slides:t=[1,2,3],current:a=0}=e;return Object(r.jsx)(o,{current:a,children:Object(r.jsx)("div",{className:"slides-wrapper flex-container",children:t.map(((e,t)=>Object(r.jsx)("div",{className:"slide",children:e},t)))})})};var d={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const h=i.a.div`
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
`;var b=()=>{const[e,t]=Object(s.useState)(0);return Object(r.jsxs)(h,{children:[Object(r.jsx)("ul",{className:"flex-container country-flag-container",children:d.countries.map(((a,s)=>Object(r.jsx)("li",{className:"country-icon-li",children:Object(r.jsx)("div",{onClick:()=>t(s),children:Object(r.jsx)("img",{className:s===e?"country-icon active":"country-icon",src:a.countryIconImage})})},s)))}),Object(r.jsx)("div",{children:Object(r.jsx)(j,{slides:d.countries.map((e=>Object(r.jsx)(l,{...e},e.name))),current:e})})]})};var x={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const m=i.a.footer`
  .heading {
    font-weight: ${c.a.fontWeight.extrabold};
    font-family: ${c.a.font.primary};
    font-size: ${c.a.fontSize.xs};
    color: ${c.a.color.white};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .gap {
    gap: 40px;
  }

  .normal-text {
    font-weight: ${c.a.fontWeight.hairline};
    font-family: ${c.a.font.primary};
    font-size: ${c.a.fontSize.xs};
  }

  .margin-b-40 {
    margin-bottom: 40px;
  }

  .small-text {
    font-weight: ${c.a.fontWeight.hairline};
    font-family: ${c.a.font.primary};
    font-size: ${c.a.fontSize.xs2};
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
    font-size: ${c.a.fontSize.xs};
    font-family: ${c.a.font.primary};
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
      color: ${c.a.color.white} !important;
    }
  }
  .text-yellow {
    color:  ${c.a.color.primary} !important;
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
`;var p=a(357);t.a=()=>Object(r.jsx)(m,{children:Object(r.jsx)("div",{className:"footer-content",children:Object(r.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{className:"margin-b-40",children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(p.a,{id:"Informasi"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:x.information.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",href:e.link,children:Object(r.jsx)(p.a,{id:e.label})})})))})]})}),Object(r.jsx)("div",{className:"others-container text-small",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"text-strong heading",children:Object(r.jsx)(p.a,{id:"Perusahaan"})}),Object(r.jsx)("ul",{className:"text-small others-list",children:x.company.map((e=>Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(r.jsx)(p.a,{id:e.label})})})))})]})}),Object(r.jsxs)("div",{className:"address-container text-small",children:[Object(r.jsx)("h3",{className:"text-strong heading",children:Object(r.jsx)(p.a,{id:"Kantor kami"})}),Object(r.jsx)(b,{})]})]})})})},364:function(e,t,a){"use strict";a(0);var s=a(357),i=a(102),c=a(4);t.a=Object(i.c)((e=>{let{id:t,defaultMessage:a,values:i}=e;return Object(c.jsx)(s.a,{id:t||" ",defaultMessage:a||t,values:i||{}})}),{withRef:!1})},652:function(e,t,a){"use strict";a.r(t);a(138);var s=a(43),i=(a(139),a(30)),c=(a(212),a(112)),n=a(0);var r=a(69).a.div`
margin-top:108px;
 h1{
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  color: #000000;
 }
 h2{
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #151515;
 }
 p{
   font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #575656;
 }
 
  @media (max-width: 700px) {
    margin-top:10px;
  }
`,l=a(364),o=a(359),j=a(4);const d=c.a.TabPane;class h extends n.Component{componentDidMount(){window.scrollTo(0,0)}render(){return Object(j.jsxs)(r,{children:[Object(j.jsxs)(s.a,{style:{marginTop:"108px",paddingBottom:30},children:[Object(j.jsx)(i.a,{span:2}),Object(j.jsx)(i.a,{span:20,children:Object(j.jsxs)(c.a,{defaultActiveKey:"1",tabPosition:"left",style:{height:550},children:[Object(j.jsxs)(d,{tab:"A",children:[Object(j.jsx)("h1",{children:"Kamus Asuransi"}),Object(j.jsx)("h2",{children:"A"}),Object(j.jsx)("h2",{children:"Actuarial"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.acturial"})}),Object(j.jsx)("h2",{children:"Agen"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.agen"})}),Object(j.jsx)("h2",{children:"Ajudikasi"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Ajudikasi"})}),Object(j.jsx)("h2",{children:"Aktuaris"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Aktuaris"})}),Object(j.jsx)("h2",{children:"Anuitan"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Anuitan"})}),Object(j.jsx)("h2",{children:"Aplikasi"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Aplikasi"})}),Object(j.jsx)("h2",{children:"Assignor"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Assignor"})}),Object(j.jsx)("h2",{children:"AgAsuransi (Lihat UU No.2/1992)en"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.AgAsuransi"})})]},"1"),Object(j.jsxs)(d,{tab:"B",children:[Object(j.jsx)("h1",{children:"Kamus Asuransi"}),Object(j.jsx)("h2",{children:"B"}),Object(j.jsx)("h2",{children:"Bancassurance"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Bancassurance"})}),Object(j.jsx)("h2",{children:"Batas Potong"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Batas"})}),Object(j.jsx)("h2",{children:"Beban Biaya Perkiraan"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Beban"})}),Object(j.jsx)("h2",{children:"Berkompentensi"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Berkompentensi"})}),Object(j.jsx)("h2",{children:"Biaya Administrasi Polis"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Biaya"})})]},"2"),Object(j.jsxs)(d,{tab:"C",children:[Object(j.jsx)("h1",{children:"Kamus Asuransi"}),Object(j.jsx)("h2",{children:"B"}),Object(j.jsx)("h2",{children:"Catatan Tambahan"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Catatan"})}),Object(j.jsx)("h2",{children:"Contestable Period"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Contestable"})}),Object(j.jsx)("h2",{children:"Cuti Premi Otomatis"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a,{id:"dict.Cuti"})})]},"3"),Object(j.jsx)(d,{tab:"D",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"4"),Object(j.jsx)(d,{tab:"E",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"5"),Object(j.jsx)(d,{tab:"F",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"6"),Object(j.jsx)(d,{tab:"G",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"7"),Object(j.jsx)(d,{tab:"H",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"8"),Object(j.jsx)(d,{tab:"I",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"9"),Object(j.jsx)(d,{tab:"J",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"10"),Object(j.jsx)(d,{tab:"K",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"11"),Object(j.jsx)(d,{tab:"L",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"12"),Object(j.jsx)(d,{tab:"M",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"13"),Object(j.jsx)(d,{tab:"N",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"14"),Object(j.jsx)(d,{tab:"O",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"15"),Object(j.jsx)(d,{tab:"P",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"16"),Object(j.jsx)(d,{tab:"Q",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"17"),Object(j.jsx)(d,{tab:"R",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"18"),Object(j.jsx)(d,{tab:"S",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"19"),Object(j.jsx)(d,{tab:"T",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"20"),Object(j.jsx)(d,{tab:"U",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"21"),Object(j.jsx)(d,{tab:"V",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"22"),Object(j.jsx)(d,{tab:"W",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"23"),Object(j.jsx)(d,{tab:"X",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"24"),Object(j.jsx)(d,{tab:"Y",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"25"),Object(j.jsx)(d,{tab:"Z",children:Object(j.jsx)("h1",{children:"Kamus Asuransi"})},"26")]})}),Object(j.jsx)(i.a,{span:2})]}),Object(j.jsx)(o.a,{})]})}}t.default=h}}]);
//# sourceMappingURL=14.39d6488a.chunk.js.map