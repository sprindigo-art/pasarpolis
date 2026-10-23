(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[15],{359:function(e,t,a){"use strict";var s=a(0),i=a(69),n=a(70);const o=i.a.div`

  font-weight: ${n.a.fontWeight.hairline};

  .text-yellow, a.text-yellow {
    color: ${n.a.color.primary};
    text-decoration: none;
  }
  .text-bold {
    font-weight: ${n.a.fontWeight.bold}
  }
`;var c=a(4);var r=e=>{let{name:t,addressLines:a=[],phones:s=[],emails:i=[],viewMapUrl:n}=e;return Object(c.jsxs)(o,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("small",{className:"text-bold",children:t})}),a.map(((e,t)=>Object(c.jsx)("div",{children:Object(c.jsx)("small",{className:"text-white",children:e})},t))),Object(c.jsx)("br",{}),s.map(((e,t)=>Object(c.jsx)("div",{children:Object(c.jsxs)("small",{className:"text-white",children:[Object(c.jsx)("span",{className:"text-bold",children:"P :"})," ",Object(c.jsx)("a",{className:"footer__link",href:`tel:${e.tel}`,children:e.display})]})},t))),i.map(((e,t)=>Object(c.jsx)("div",{children:Object(c.jsxs)("small",{className:"text-white",children:[Object(c.jsx)("span",{className:"text-bold",children:"E :"})," ",Object(c.jsx)("a",{className:"footer__link",href:`mailto:${e}`,children:e})]})},t))),Object(c.jsx)("br",{}),Object(c.jsx)("a",{target:"_blank",href:n,className:"text-yellow",children:"View Map"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"flex-container ",children:[Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.instagram.com/pasarpolis/",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/instagram.png"})}),Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.facebook.com/pasarpolis/",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/facebook.png"})}),Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://twitter.com/pasarpolis",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/twitter.png"})}),Object(c.jsx)("a",{target:"_blank",className:"footer__link social-link",href:"https://www.youtube.com/channel/UC5wZUL4FVGQSfQYJ8cWQQ1Q",children:Object(c.jsx)("img",{src:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/pasarpolis/social-media/youtube.png"})})]})]})};const l=i.a.div`
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

`;var m=e=>{let{slides:t=[1,2,3],current:a=0}=e;return Object(c.jsx)(l,{current:a,children:Object(c.jsx)("div",{className:"slides-wrapper flex-container",children:t.map(((e,t)=>Object(c.jsx)("div",{className:"slide",children:e},t)))})})};var d={countries:[{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/flag_indonesia.png",name:"Indonesia",addressLines:["One Pacific Place, 10th Floor","SCBD Jl. Jend. Sudirman Kav 52-53","Jakarta Selatan 12190"],emails:["cs@pasarpolis.com","pr_marketing@pasarpolis.com"],phones:[{display:"021 5086 0658",tel:"+622150860658"},{display:"021 3111 8178",tel:"+622131118178"}],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@-6.2234978,106.8076239,17z/data=!4m5!3m4!1s0x2e69f3e0c000007b:0x509b694662155c!8m2!3d-6.2350045!4d106.8204283"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/vietnam_flag.png",name:"Vietnam",addressLines:["Wework, Etown Central, 11 Dan","Vo Bo, District 4","Hochiminh City, Studio, #22-143"],emails:["cskh@pasarpolis.com"],phones:[{display:"1900 232454",tel:"1900232454"}],viewMapUrl:"https://www.google.com/maps/place/WeWork+E.+Town+Central/@10.7642859,106.7010278,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fc41537915f:0x4658c1848d54bfe8!8m2!3d10.7642859!4d106.7032165"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/thailand_flag.png",name:"Thailand",addressLines:["1244, 12A floor, unit B1 B2 989","Siam Piwat Tower","Bangkok"],emails:["customerserviceth@pasarpolis.com"],phones:[{display:"(+66) 02-153-9589",tel:"+6621539589"}],viewMapUrl:"https://www.google.com/maps/place/Siam+Piwat+Tower+Building/@13.7466075,100.5296466,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ecd6e14c52f:0x26d35735a56d7ec2!8m2!3d13.7466075!4d100.5318353"},{countryIconImage:"https://pp-img-prod.s3.ap-southeast-3.amazonaws.com/website/india_flag.png",name:"India",addressLines:[""],emails:["cs@pasarpolis.com"],phones:[],viewMapUrl:"https://www.google.com/maps/place/Pasarpolis/@28.481042,77.0923704,17z/data=!3m1!4b1!4m5!3m4!1s0x390d237f79fc6135:0xf485107794cce6bd!8m2!3d28.481042!4d77.0945591"}]};const p=i.a.div`
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
`;var j=()=>{const[e,t]=Object(s.useState)(0);return Object(c.jsxs)(p,{children:[Object(c.jsx)("ul",{className:"flex-container country-flag-container",children:d.countries.map(((a,s)=>Object(c.jsx)("li",{className:"country-icon-li",children:Object(c.jsx)("div",{onClick:()=>t(s),children:Object(c.jsx)("img",{className:s===e?"country-icon active":"country-icon",src:a.countryIconImage})})},s)))}),Object(c.jsx)("div",{children:Object(c.jsx)(m,{slides:d.countries.map((e=>Object(c.jsx)(r,{...e},e.name))),current:e})})]})};var x={information:[{label:"Blog",link:"https://pasarpolis.io/blogs"},{label:"Siaran Pers",link:"https://pasarpolis.io/news"},{label:"Ajukan Klaim",link:"/claim"},{label:"FAQ",link:"/faq"},{label:"Kamus Asuransi",link:"https://pasarpolis.io/dictionary"},{label:"Pengembang",link:"https://developers.pasarpolis.io/"}],company:[{label:"Tentang PasarPolis",link:"/about"},{label:"Kebiakan Privasi",link:"/privacy"},{label:"Karir",link:"/career"}]};const h=i.a.footer`
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
`;var b=a(357);t.a=()=>Object(c.jsx)(h,{children:Object(c.jsx)("div",{className:"footer-content",children:Object(c.jsxs)("div",{className:"flex-container justify-space-between wrap gap flex-direction-mobile",children:[Object(c.jsx)("div",{className:"others-container text-small",children:Object(c.jsxs)("div",{className:"margin-b-40",children:[Object(c.jsx)("h4",{className:"text-strong heading",children:Object(c.jsx)(b.a,{id:"Informasi"})}),Object(c.jsx)("ul",{className:"text-small others-list",children:x.information.map((e=>Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"footer__link",href:e.link,children:Object(c.jsx)(b.a,{id:e.label})})})))})]})}),Object(c.jsx)("div",{className:"others-container text-small",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:"text-strong heading",children:Object(c.jsx)(b.a,{id:"Perusahaan"})}),Object(c.jsx)("ul",{className:"text-small others-list",children:x.company.map((e=>Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"footer__link",replace:!0,href:e.link,children:Object(c.jsx)(b.a,{id:e.label})})})))})]})}),Object(c.jsxs)("div",{className:"address-container text-small",children:[Object(c.jsx)("h3",{className:"text-strong heading",children:Object(c.jsx)(b.a,{id:"Kantor kami"})}),Object(c.jsx)(j,{})]})]})})})},364:function(e,t,a){"use strict";a(0);var s=a(357),i=a(102),n=a(4);t.a=Object(i.c)((e=>{let{id:t,defaultMessage:a,values:i}=e;return Object(n.jsx)(s.a,{id:t||" ",defaultMessage:a||t,values:i||{}})}),{withRef:!1})},651:function(e,t,a){"use strict";a.r(t);a(138);var s=a(43),i=(a(139),a(30)),n=(a(212),a(112)),o=a(0);var c=a(69).a.div`
margin-top:108px;
margin-bottom:80px;
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
`,r=a(364),l=a(359),m=a(4);const d=n.a.TabPane,p=window.matchMedia("(max-width: 700px)");let j="left";j=p.matches?"top":"left";class x extends o.Component{componentDidMount(){window.scrollTo(0,0)}render(){return Object(m.jsxs)(c,{children:[Object(m.jsxs)(s.a,{children:[Object(m.jsx)(i.a,{span:2}),Object(m.jsx)(i.a,{span:20,children:Object(m.jsxs)(n.a,{defaultActiveKey:"1",tabPosition:j,children:[Object(m.jsxs)(d,{tab:"Personal",children:[Object(m.jsx)("h1",{children:"Syarat dan Ketentuan"}),Object(m.jsx)("h2",{children:"Personal"}),Object(m.jsxs)("p",{children:["1. "," ",Object(m.jsx)(r.a,{id:"terms.personal1"}),Object(m.jsx)("br",{}),"2. "," ",Object(m.jsx)(r.a,{id:"terms.personal2"}),Object(m.jsx)("br",{}),"3. "," ",Object(m.jsx)(r.a,{id:"terms.personal3"}),Object(m.jsx)("br",{}),"4. "," ",Object(m.jsx)(r.a,{id:"terms.personal4"}),Object(m.jsx)("br",{})]})]},"1"),Object(m.jsxs)(d,{tab:"Situs PasarPolis",children:[Object(m.jsx)("h1",{children:"Syarat dan Ketentuan"}),Object(m.jsx)("h2",{children:"Situs PasarPolis"}),Object(m.jsxs)("p",{children:["1. "," ",Object(m.jsx)(r.a,{id:"terms.site1"}),Object(m.jsx)("br",{}),"2. "," ",Object(m.jsx)(r.a,{id:"terms.site2"}),Object(m.jsx)("br",{}),"3. "," ",Object(m.jsx)(r.a,{id:"terms.site3"}),Object(m.jsx)("br",{}),"4. "," ",Object(m.jsx)(r.a,{id:"terms.site4"}),Object(m.jsx)("br",{}),"5. "," ",Object(m.jsx)(r.a,{id:"terms.site5"}),Object(m.jsx)("br",{}),"6. "," ",Object(m.jsx)(r.a,{id:"terms.site6"}),Object(m.jsx)("br",{}),"7. "," ",Object(m.jsx)(r.a,{id:"terms.site7"}),Object(m.jsx)("br",{})]})]},"2")]})}),Object(m.jsx)(i.a,{span:2})]}),Object(m.jsx)(l.a,{})]})}}t.default=x}}]);
//# sourceMappingURL=15.9cf65a79.chunk.js.map